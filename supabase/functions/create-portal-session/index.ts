import Stripe from 'https://esm.sh/stripe@14?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-04-10' });

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

    const { returnUrl } = await req.json();
    const safeReturnUrl = validateReturnUrl(returnUrl);

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
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single();

    if (profileError || !profile?.stripe_customer_id) {
      throw new Error('Aucun abonnement Stripe trouvé');
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: safeReturnUrl,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('create-portal-session:', err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 400,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }
});
