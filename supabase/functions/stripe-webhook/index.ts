import Stripe from 'https://esm.sh/stripe@14?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-04-10' });
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

function _genCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const seg = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `HYDRO-${seg()}-${seg()}`;
}

async function _generateEtabCodes(userId: string, userEmail: string, quantity: number, sessionId: string) {
  const codes = [];
  for (let i = 0; i < quantity; i++) {
    codes.push({
      code: _genCode(),
      owner_user_id: userId,
      owner_email: userEmail,
      stripe_session: sessionId,
    });
  }
  await supabase.from('etab_access_codes').insert(codes);
}

Deno.serve(async (req) => {
  const sig  = req.headers.get('stripe-signature')!;
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return new Response(`Webhook error: ${(err as Error).message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const { planId, userId, userEmail, quantity } = session.metadata ?? {};

    if (!userId) return new Response('ok');

    const basePlan = (planId === 'etab_annual') ? 'etab' : (planId === 'pro_annual') ? 'pro' : planId;

    await supabase.from('profiles').update({ plan: basePlan }).eq('id', userId);

    if (session.customer) {
      await supabase.from('profiles')
        .update({ stripe_customer_id: String(session.customer) })
        .eq('id', userId);
    }

    if (planId === 'etab' || planId === 'etab_annual') {
      const qty = Math.max(1, parseInt(quantity || '1'));
      await _generateEtabCodes(userId, userEmail || '', qty, session.id);
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object as Stripe.Subscription;
    const customerId = String(sub.customer);
    await supabase.from('profiles')
      .update({ plan: 'free' })
      .eq('stripe_customer_id', customerId);
  }

  return new Response('ok');
});
