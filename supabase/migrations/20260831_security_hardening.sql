-- HydroCalc — security hardening
-- Apply through the Supabase migration workflow before production.
-- This migration intentionally does NOT grant or revoke the existing administrator.
-- Existing administrator rows are preserved.

-- Normalize legacy nullable flags before server-side billing code relies on
-- `is_admin = false`. The target schema already defines NOT NULL/default false,
-- but this keeps older deployed databases compatible.
update public.profiles set is_admin = false where is_admin is null;
alter table public.profiles alter column is_admin set default false;
alter table public.profiles alter column is_admin set not null;

-- Preflight: never silently delete financial/subscription history to make a
-- uniqueness constraint pass. Fail with an actionable message if legacy data
-- contains duplicates, so it can be reviewed before deployment.
do $$
begin
  if exists (
    select stripe_subscription_id
      from public.subscriptions
     where stripe_subscription_id is not null
     group by stripe_subscription_id
    having count(*) > 1
  ) then
    raise exception 'HydroCalc preflight: duplicate subscriptions.stripe_subscription_id values exist; review duplicates before applying security hardening';
  end if;

  if exists (
    select stripe_payment_id
      from public.payments
     where stripe_payment_id is not null
     group by stripe_payment_id
    having count(*) > 1
  ) then
    raise exception 'HydroCalc preflight: duplicate payments.stripe_payment_id values exist; review duplicates before applying security hardening';
  end if;
end $$;

-- Stripe external identifiers must be unique so webhook retries stay idempotent.
create unique index if not exists subscriptions_stripe_subscription_id_uidx
  on public.subscriptions (stripe_subscription_id)
  where stripe_subscription_id is not null;

create unique index if not exists payments_stripe_payment_id_uidx
  on public.payments (stripe_payment_id)
  where stripe_payment_id is not null;

-- Basic integrity constraints for server-controlled entitlements.
do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'profiles_plan_allowed'
  ) then
    alter table public.profiles
      add constraint profiles_plan_allowed
      check (plan in ('free', 'pro', 'etab', 'admin')) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint where conname = 'subscriptions_plan_allowed'
  ) then
    alter table public.subscriptions
      add constraint subscriptions_plan_allowed
      check (plan in ('pro', 'etab')) not valid;
  end if;
end $$;

-- Users may edit only non-privileged profile fields through this RPC.
-- NULL arguments mean "leave this field unchanged", which makes partial profile
-- edits safe and avoids accidentally erasing another editable field.
create or replace function public.update_my_profile(
  p_name text default null,
  p_profile text default null
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  result public.profiles;
begin
  if auth.uid() is null then
    raise exception 'authentication required';
  end if;

  update public.profiles
     set name = coalesce(p_name, name),
         profile = coalesce(p_profile, profile)
   where id = auth.uid()
   returning * into result;

  if result.id is null then
    raise exception 'profile not found';
  end if;

  return result;
end;
$$;

revoke all on function public.update_my_profile(text, text) from public;
grant execute on function public.update_my_profile(text, text) to authenticated;

-- Critical: remove direct UPDATE access to profiles for normal authenticated users.
-- The application should call update_my_profile() for editable identity fields.
drop policy if exists "Profil modifiable par son propriétaire" on public.profiles;

-- Make ownership policies explicit for INSERT as well as UPDATE/DELETE.
-- WITH CHECK prevents changing profile_id to another user's UUID during a write.
drop policy if exists "Projets gérés par leur propriétaire" on public.projects;
create policy "Projets gérés par leur propriétaire"
  on public.projects for all
  using (auth.uid() = profile_id)
  with check (auth.uid() = profile_id);

drop policy if exists "Calculs gérés par leur propriétaire" on public.saved_calculations;
create policy "Calculs gérés par leur propriétaire"
  on public.saved_calculations for all
  using (auth.uid() = profile_id)
  with check (auth.uid() = profile_id);

drop policy if exists "Formules gérées par leur propriétaire" on public.saved_formulas;
create policy "Formules gérées par leur propriétaire"
  on public.saved_formulas for all
  using (auth.uid() = profile_id)
  with check (auth.uid() = profile_id);

drop policy if exists "Textes réglementaires gérés par leur propriétaire" on public.saved_regulations;
create policy "Textes réglementaires gérés par leur propriétaire"
  on public.saved_regulations for all
  using (auth.uid() = profile_id)
  with check (auth.uid() = profile_id);

drop policy if exists "Paramètres gérés par leur propriétaire" on public.user_settings;
create policy "Paramètres gérés par leur propriétaire"
  on public.user_settings for all
  using (auth.uid() = profile_id)
  with check (auth.uid() = profile_id);

drop policy if exists "Quotas gérés par leur propriétaire" on public.usage_quotas;
-- Quotas are billing/entitlement data. Clients may read their counters but may not
-- reset/increment them directly. Trusted server-side functions perform mutations.
create policy "Quotas visibles par leur propriétaire"
  on public.usage_quotas for select
  using (auth.uid() = profile_id);

drop policy if exists "QCM gérés par leur professeur" on public.qcm_quizzes;
create policy "QCM gérés par leur professeur"
  on public.qcm_quizzes for all
  using (auth.uid() = profile_id)
  with check (auth.uid() = profile_id);