-- HydroCalc — preflight de production
-- Lecture seule. Exécuter avant les migrations security-hardening.
-- Toute section marquée MUST_BE_ZERO doit retourner zéro ligne.
-- Les contrôles communautaires sont conditionnels : une base qui n'a pas encore
-- les tables forum/messagerie ne doit pas faire échouer ce preflight.

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

-- REVIEW: cohérence des plans actuellement présents.
select 'profile_plan_distribution' as check_name, coalesce(plan,'<null>') as key, count(*) as occurrences
from public.profiles
group by plan
order by occurrences desc;

-- Les tables ci-dessous peuvent légitimement ne pas exister AVANT les migrations
-- communautaires. On les contrôle uniquement si elles sont déjà présentes.
do $$
begin
  if to_regclass('public.friend_requests') is not null then
    raise notice 'PRECHECK friend_requests: recherche des paires dupliquées';
    if exists (
      select 1
      from public.friend_requests
      group by least(sender_id::text, receiver_id::text), greatest(sender_id::text, receiver_id::text)
      having count(*) > 1
    ) then
      raise warning 'MUST_BE_ZERO failed: duplicate_friend_pair existe. Inspecter avant migration.';
    else
      raise notice 'MUST_BE_ZERO duplicate_friend_pair: OK';
    end if;
  else
    raise notice 'SKIP friend_requests: table absente avant migration';
  end if;

  if to_regclass('public.message_threads') is not null then
    raise notice 'PRECHECK message_threads: recherche des fils dupliqués';
    if exists (
      select 1
      from public.message_threads
      group by least(user_a_id::text, user_b_id::text), greatest(user_a_id::text, user_b_id::text)
      having count(*) > 1
    ) then
      raise warning 'MUST_BE_ZERO failed: duplicate_message_thread existe. Inspecter avant migration.';
    else
      raise notice 'MUST_BE_ZERO duplicate_message_thread: OK';
    end if;
  else
    raise notice 'SKIP message_threads: table absente avant migration';
  end if;

  if to_regclass('public.messages') is not null then
    raise notice 'REVIEW message_count: %', (select count(*) from public.messages);
  else
    raise notice 'SKIP messages: table absente avant migration';
  end if;

  if to_regclass('public.message_threads') is not null then
    raise notice 'REVIEW thread_count: %', (select count(*) from public.message_threads);
  end if;

  if to_regclass('public.friend_requests') is not null then
    raise notice 'REVIEW friend_request_count: %', (select count(*) from public.friend_requests);
  end if;
end
$$;
