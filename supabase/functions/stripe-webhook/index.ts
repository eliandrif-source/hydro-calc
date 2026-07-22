import Stripe from 'https://esm.sh/stripe@14?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-04-10' });
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;

Deno.serve(async (req) => {
  const signature = req.headers.get('stripe-signature');
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature!, webhookSecret);
  } catch (err) {
    return new Response('Webhook signature invalide', { status: 400 });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );

  /* ─── Helpers ─── */
  async function getUserIdFromCustomer(customerId: string): Promise<string | null> {
    const { data } = await supabase
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId)
      .single();
    return data?.id || null;
  }

  async function setPlan(userId: string, plan: string) {
    await supabase.from('profiles').update({ plan }).eq('id', userId);
  }

  async function upsertSubscription(userId: string, sub: Stripe.Subscription, planId: string) {
    await supabase.from('subscriptions').upsert({
      profile_id: userId,
      plan: planId,
      status: sub.status,
      stripe_customer_id: sub.customer as string,
      stripe_subscription_id: sub.id,
      current_period_start: new Date(sub.current_period_start * 1000).toISOString(),
      current_period_end:   new Date(sub.current_period_end   * 1000).toISOString(),
    }, { onConflict: 'stripe_subscription_id' });
  }

  async function recordPayment(userId: string, invoice: Stripe.Invoice, status: string) {
    await supabase.from('payments').insert({
      profile_id:        userId,
      stripe_payment_id: invoice.payment_intent as string,
      amount_cents:      invoice.amount_paid,
      currency:          invoice.currency,
      status,
    });
  }

  /* ─── Événements ─── */
  try {
    switch (event.type) {

      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const planId  = session.metadata?.plan_id || 'pro';
        const userId  = session.metadata?.supabase_user_id;
        if (userId) {
          await setPlan(userId, planId);
        }
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const sub    = event.data.object as Stripe.Subscription;
        const planId = (sub.metadata?.plan_id as string) || 'pro';
        const userId = await getUserIdFromCustomer(sub.customer as string);
        if (userId) {
          const activePlan = (sub.status === 'active' || sub.status === 'trialing') ? planId : 'free';
          await setPlan(userId, activePlan);
          await upsertSubscription(userId, sub, planId);
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const sub    = event.data.object as Stripe.Subscription;
        const userId = await getUserIdFromCustomer(sub.customer as string);
        if (userId) {
          await setPlan(userId, 'free');
          await supabase.from('subscriptions')
            .update({ status: 'canceled' })
            .eq('stripe_subscription_id', sub.id);
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        const userId  = await getUserIdFromCustomer(invoice.customer as string);
        if (userId) await recordPayment(userId, invoice, 'succeeded');
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const userId  = await getUserIdFromCustomer(invoice.customer as string);
        if (userId) {
          await recordPayment(userId, invoice, 'failed');
          await setPlan(userId, 'free');
        }
        break;
      }
    }
  } catch (err) {
    console.error('Webhook handler error:', err);
    return new Response('Handler error', { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
