-- HydroCalc — authoritative server-side usage quotas
-- Free: 10 calculations/day, 10 QCM/week, no report export.
-- Pro: calculations unlimited, 10 QCM/week, 1 report/week.
-- Etablissement/admin: unlimited for these counters.

alter table public.usage_quotas
  add constraint usage_quotas_kind_allowed
  check (kind in ('calc_daily', 'report_weekly', 'qcm_weekly')) not valid;

alter table public.usage_quotas
  add constraint usage_quotas_count_nonnegative
  check (count >= 0) not valid;

create or replace function public.consume_usage(p_kind text)
returns table(allowed boolean, used integer, limit_value integer, period_key text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_plan text;
  v_admin boolean;
  v_limit integer;
  v_period text;
  v_count integer;
begin
  if v_uid is null then
    raise exception 'authentication required';
  end if;

  if p_kind not in ('calc_daily', 'report_weekly', 'qcm_weekly') then
    raise exception 'invalid quota kind';
  end if;

  select coalesce(plan, 'free'), coalesce(is_admin, false)
    into v_plan, v_admin
    from public.profiles
   where id = v_uid;

  if not found then raise exception 'profile not found'; end if;

  if v_admin or v_plan in ('admin', 'etab') then
    return query select true, 0, null::integer, ''::text;
    return;
  end if;

  if p_kind = 'calc_daily' then
    v_period := to_char((now() at time zone 'UTC')::date, 'YYYY-MM-DD');
    v_limit := case when v_plan = 'free' then 10 else null end;
  else
    v_period := to_char(date_trunc('week', now() at time zone 'UTC')::date, 'YYYY-MM-DD');
    if p_kind = 'report_weekly' then
      v_limit := case when v_plan = 'pro' then 1 when v_plan = 'free' then 0 else null end;
    else
      v_limit := case when v_plan in ('free', 'pro') then 10 else null end;
    end if;
  end if;

  if v_limit is null then
    return query select true, 0, null::integer, v_period;
    return;
  end if;

  -- Serialize consumption for this user/kind/period. The row is created once,
  -- then incremented only when still below the entitlement limit.
  insert into public.usage_quotas(profile_id, kind, period_key, count)
  values (v_uid, p_kind, v_period, 0)
  on conflict (profile_id, kind, period_key) do nothing;

  update public.usage_quotas
     set count = count + 1
   where profile_id = v_uid
     and kind = p_kind
     and period_key = v_period
     and count < v_limit
  returning count into v_count;

  if found then
    return query select true, v_count, v_limit, v_period;
  else
    select q.count into v_count
      from public.usage_quotas q
     where q.profile_id = v_uid and q.kind = p_kind and q.period_key = v_period;
    return query select false, coalesce(v_count, 0), v_limit, v_period;
  end if;
end;
$$;

revoke all on function public.consume_usage(text) from public;
grant execute on function public.consume_usage(text) to authenticated;

create or replace function public.get_my_usage(p_kind text)
returns table(used integer, limit_value integer, period_key text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_plan text;
  v_admin boolean;
  v_limit integer;
  v_period text;
begin
  if v_uid is null then raise exception 'authentication required'; end if;
  if p_kind not in ('calc_daily', 'report_weekly', 'qcm_weekly') then raise exception 'invalid quota kind'; end if;

  select coalesce(plan, 'free'), coalesce(is_admin, false)
    into v_plan, v_admin from public.profiles where id = v_uid;
  if not found then raise exception 'profile not found'; end if;

  if v_admin or v_plan in ('admin', 'etab') then
    return query select 0, null::integer, ''::text; return;
  end if;

  if p_kind = 'calc_daily' then
    v_period := to_char((now() at time zone 'UTC')::date, 'YYYY-MM-DD');
    v_limit := case when v_plan = 'free' then 10 else null end;
  else
    v_period := to_char(date_trunc('week', now() at time zone 'UTC')::date, 'YYYY-MM-DD');
    if p_kind = 'report_weekly' then
      v_limit := case when v_plan = 'pro' then 1 when v_plan = 'free' then 0 else null end;
    else
      v_limit := case when v_plan in ('free', 'pro') then 10 else null end;
    end if;
  end if;

  return query
    select coalesce(q.count, 0), v_limit, v_period
      from (select 1) seed
      left join public.usage_quotas q
        on q.profile_id = v_uid and q.kind = p_kind and q.period_key = v_period;
end;
$$;

revoke all on function public.get_my_usage(text) from public;
grant execute on function public.get_my_usage(text) to authenticated;
