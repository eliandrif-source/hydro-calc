-- HydroCalc — server-side trial activation
-- Trial state is billing/entitlement data and must not be mutable from localStorage.

create or replace function public.start_my_trial()
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_profile public.profiles;
begin
  if v_uid is null then
    raise exception 'authentication required';
  end if;

  update public.profiles
     set trial_used = true,
         trial_start = now(),
         base_plan = plan
   where id = v_uid
     and is_admin = false
     and plan = 'free'
     and coalesce(trial_used, false) = false
   returning * into v_profile;

  if v_profile.id is null then
    raise exception 'trial unavailable';
  end if;

  return v_profile;
end;
$$;

revoke all on function public.start_my_trial() from public;
grant execute on function public.start_my_trial() to authenticated;

-- Clients can still read their own profile, but trial/billing fields stay
-- protected because direct UPDATE on profiles was removed by security_hardening.
