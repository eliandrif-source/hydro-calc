import Stripe from 'https://esm.sh/stripe@14?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-04-10' });

/*
 * SECURITY: le navigateur ne choisit jamais directement un Price ID Stripe.
 * Il envoie uniquement une clé de produit connue. Le serveur associe ensuite
 * cette clé au prix Stripe et au niveau d'accès HydroCalc correspondant.
 *
 * Les Price IDs ne sont pas des secrets, mais les garder ici empêche un client
 * modifié d'associer arbitrairement un prix à un plan plus élevé.
 */
const PRODUCTS: Record<string, { priceId: string; entitlement: 'pro' | 'etab' }> = {
  pro:         { priceId: 'price_1TvJoFRoaEvjU7M7PIrHbQND', entitlement: 'pro' },
  pro_annual:  { priceId: 'price_1U3LG0RoaEvjU7M70g6oxsvv', entitlement: 'pro' },
  etab:        { priceId: 'price_1TvJooRoaEvjU7M7Gc57pi1V', entitlement: 'etab' },
  etab_annual: { priceId: 'price_1U3LL3RoaEvjU7M7uyHPM9zu', entitlement: 'etab' },
};

const configuredOrigins = (Deno.env.get('ALLOWED_ORIGINS') || '')
  .split(',')
  .map((v) => v.trim())
  .filter(Boolean);

const allowedOrigins = new Set([
  'https://hydrocalc.fr',
  'https://www.hydrocalc.fr',
  'http://localhost:3000',
  'http://localhost:5173',
  ...configuredOrigins,
]);

function corsHeaders(req: Request) {
  const origin = req.headers.get('Origin');
  const allowedOrigin = origin && allowedOrigins.has(origin) ? origin : 'https://hydrocalc.fr';
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  };
}

function validateReturnUrl(raw: unknown): string {
  if (typeof raw !== 'string') throw new Error('URL de retour invalide');
  const url = new URL(raw);
  if (!allowedOrigins.has(url.origin)) throw new Error('Origine de retour non autorisée');
  url.hash = '';
  return url.toString();
}

Deno.serve(async (req) => {
  const headers = corsHeaders(req);
  if (req.method === 'OPTIONS') return new Response('ok', { headers });
  if (req.method !== 'POST') return new Response('Méthode non autorisée', { status: 405, headers });

  try {
    const origin = req.headers.get('Origin');
    if (origin && !allowedOrigins.has(origin)) throw new Error('Origine non autorisée');

    const body = await req.json();
    const productKey = typeof body?.planId === 'string' ? body.planId : '';
    const product = PRODUCTS[productKey];
    if (!product) throw new Error('Offre inconnue');

    const successUrl = validateReturnUrl(body?.successUrl);
    const cancelUrl = validateReturnUrl(body?.cancelUrl);

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const authHeader = req.headers.get('Authorization') || '';
    if (!authHeader.startsWith('Bearer ')) throw new Error('Non authentifié');

    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.slice('Bearer '.length)
    );
    if (authError || !user) throw new Error('Non authentifié');

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('stripe_customer_id, email, name')
      .eq('id', user.id)
      .single();
    if (profileError || !profile) throw new Error('Profil introuvable');

    let customerId = profile.stripe_customer_id as string | null;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: profile.email || user.email,
        name: profile.name || undefined,
        metadata: { supabase_user_id: user.id },
      });
      customerId = customer.id;

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', user.id);
      if (updateError) throw new Error('Impossible de rattacher le compte Stripe');
    }

    const metadata = {
      supabase_user_id: user.id,
      plan_id: product.entitlement,
      product_key: productKey,
    };

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [{ price: product.priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata,
      subscription_data: { metadata },
      locale: 'fr',
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('create-checkout-session:', err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 400,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }
});
