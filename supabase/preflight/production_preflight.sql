-- HydroCalc — preflight de production
-- Lecture seule. Exécuter avant les migrations security-hardening.
-- Toute section marquée MUST_BE_ZERO doit retourner zéro ligne.

-- MUST_BE_ZERO: abonnements Stripe dupliqués
select 'duplicate_subscription' as check_name, stripe_subscription_id as key, count(*) as occurrences
from public.subscriptions
where stripe_subscription_id is not null
group by stripe_subscription_id
having count(*) > 1;

-- MUST_BE_ZERO: paiements Stripe dupliqués
select 'duplicate_payment' as check_name, stripe_payment_id as key, count(*) as occurrences
from public.payments
where stripe_payment_id is not null
group by stripe_payment_id
having count(*) > 1;

-- REVIEW: comptes privilégiés. Vérifier manuellement chaque ligne.
select 'privileged_profile' as check_name, id::text as key, plan, is_admin
from public.profiles
where is_admin is true or plan='admin'
order by id;

-- MUST_BE_ZERO après création/existence des tables de messagerie : paires de demandes dupliquées.
select 'duplicate_friend_pair' as check_name,
       least(sender_id::text,receiver_id::text) || ':' || greatest(sender_id::text,receiver_id::text) as key,
       count(*) as occurrences
from public.friend_requests
group by least(sender_id::text,receiver_id::text), greatest(sender_id::text,receiver_id::text)
having count(*) > 1;

-- MUST_BE_ZERO: fils privés dupliqués entre la même paire de membres.
select 'duplicate_message_thread' as check_name,
       least(user_a_id::text,user_b_id::text) || ':' || greatest(user_a_id::text,user_b_id::text) as key,
       count(*) as occurrences
from public.message_threads
group by least(user_a_id::text,user_b_id::text), greatest(user_a_id::text,user_b_id::text)
having count(*) > 1;

-- REVIEW: cohérence des plans actuellement présents.
select 'profile_plan_distribution' as check_name, coalesce(plan,'<null>') as key, count(*) as occurrences
from public.profiles
group by plan
order by occurrences desc;

-- REVIEW: volume des données communautaires avant changement.
select 'message_count' as check_name, 'messages' as key, count(*) as occurrences from public.messages
union all
select 'thread_count','message_threads',count(*) from public.message_threads
union all
select 'friend_request_count','friend_requests',count(*) from public.friend_requests;
