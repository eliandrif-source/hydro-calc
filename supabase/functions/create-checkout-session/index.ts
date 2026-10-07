import Stripe from 'https://esm.sh/stripe@14?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-04-10' });

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { planId, priceId, quantity, userEmail, successUrl, cancelUrl } = await req.json();

    if (!priceId) throw new Error('priceId manquant');

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const authHeader = req.headers.get('Authorization')!;
    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    );
    if (authError || !user) throw new Error('Non authentifié');

    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single();

    const qty = (planId === 'etab' || planId === 'etab_annual') && quantity > 1
      ? Math.max(1, Math.min(200, parseInt(quantity)))
      : 1;

    const COUPON_20 = '0WCDh1zp';
    const COUPON_40 = '77exSVuf';

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: qty }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        planId,
        userId: user.id,
        userEmail: userEmail || user.email || '',
        quantity: String(qty),
      },
    };

    if (planId === 'etab_annual') {
      if (qty >= 20) {
        sessionParams.discounts = [{ coupon: COUPON_40 }];
      } else if (qty >= 10) {
        sessionParams.discounts = [{ coupon: COUPON_20 }];
      }
    }

    if (profile?.stripe_customer_id) {
      sessionParams.customer = profile.stripe_customer_id;
    } else {
      sessionParams.customer_email = user.email;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
