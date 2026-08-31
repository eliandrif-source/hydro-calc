import Stripe from 'https://esm.sh/stripe@14?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-04-10' });
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;

/* Stripe is the source of truth for paid entitlements.
 * Never promote a user from plan_id metadata alone: metadata can become stale
 * or be copied incorrectly. The actual subscription Price ID determines access.
 */
const ENTITLEMENT_BY_PRICE: Record<string, 'pro' | 'etab'> = {
  'price_1TvJoFRoaEvjU7M7PIrHbQND': 'pro',
  'price_1U3LG0RoaEvjU7M70g6oxsvv': 'pro',
  'price_1TvJooRoaEvjU7M7Gc57pi1V': 'etab',
  'price_1U3LL3RoaEvjU7M7uyHPM9zu': 'etab',
};

function entitlementFromSubscription(sub: Stripe.Subscription): 'pro' | 'etab' | null {
  for (const item of sub.items.data) {
    const entitlement = ENTITLEMENT_BY_PRICE[item.price.id];
    if (entitlement) return entitlement;
  }
  return null;
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return new Response('Méthode non autorisée', { status: 405 });

  const signature = req.headers.get('stripe-signature');
  if (!signature) return new Response('Signature Stripe absente', { status: 400 });

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err) {
    console.error('Stripe signature verification failed:', err);
    return new Response('Webhook signature invalide', { status: 400 });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );

  async function getUserIdFromCustomer(customerId: string): Promise<string | null> {
    const { data, error } = await supabase
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId)
      .single();
    if (error) {
      console.error('Customer profile lookup failed:', error);
      return null;
    }
    return data?.id || null;
  }

  async function setPlan(userId: string, plan: 'free' | 'pro' | 'etab') {
    /* Never overwrite the administrator entitlement through billing events. */
    const { error } = await supabase
      .from('profiles')
      .update({ plan })
      .eq('id', userId)
      .eq('is_admin', false);
    if (error) throw error;
  }

  async function upsertSubscription(
    userId: string,
    sub: Stripe.Subscription,
    plan: 'pro' | 'etab'
  ) {
    const { error } = await supabase.from('subscriptions').upsert({
      profile_id: userId,
      plan,
      status: sub.status,
      stripe_customer_id: sub.customer as string,
      stripe_subscription_id: sub.id,
      current_period_start: new Date(sub.current_period_start * 1000).toISOString(),
      current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
    }, { onConflict: 'stripe_subscription_id' });
    if (error) throw error;
  }

  async function recordPayment(userId: string, invoice: Stripe.Invoice, status: string) {
    /* invoice.id is stable across webhook retries, so this operation is idempotent. */
    const { error } = await supabase.from('payments').upsert({
      profile_id: userId,
      stripe_payment_id: invoice.id,
      amount_cents: invoice.amount_paid,
      currency: invoice.currency,
      status,
    }, { onConflict: 'stripe_payment_id' });
    if (error) throw error;
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        /* No entitlement mutation here. Subscription events below are authoritative. */
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription;
        const plan = entitlementFromSubscription(sub);
        if (!plan) {
          console.error('Unknown Stripe price on subscription:', sub.id);
          break;
        }

        const userId = await getUserIdFromCustomer(sub.customer as string);
        if (userId) {
          const activePlan = (sub.status === 'active' || sub.status === 'trialing') ? plan : 'free';
          await setPlan(userId, activePlan);
          await upsertSubscription(userId, sub, plan);
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        const userId = await getUserIdFromCustomer(sub.customer as string);
        if (userId) {
          await setPlan(userId, 'free');
          const { error } = await supabase.from('subscriptions')
            .update({ status: 'canceled' })
            .eq('stripe_subscription_id', sub.id);
          if (error) throw error;
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        const userId = await getUserIdFromCustomer(invoice.customer as string);
        if (userId) await recordPayment(userId, invoice, 'succeeded');
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const userId = await getUserIdFromCustomer(invoice.customer as string);
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
