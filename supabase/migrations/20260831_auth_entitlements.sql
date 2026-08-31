-- HydroCalc — server-side identity, roles and establishment access codes
-- Depends on the profiles table from schema.sql.
-- No browser-supplied value may grant admin/pro/etab privileges.

-- ────────────────────────────────────────────────────────────────
-- 1. Profile bootstrap: every new auth user gets a FREE profile.
-- ────────────────────────────────────────────────────────────────
create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, profile, plan, is_admin)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(nullif(new.raw_user_meta_data ->> 'name', ''), new.email, 'Utilisateur'),
    nullif(new.raw_user_meta_data ->> 'profile', ''),
    'free',
    false
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_hydrocalc on auth.users;
create trigger on_auth_user_created_hydrocalc
  after insert on auth.users
  for each row execute function public.handle_new_auth_user();

-- Legacy-compatible RPC used by the current browser client.
-- p_plan and p_is_admin deliberately remain in the signature so old clients
-- keep working, but those two values are NEVER trusted or applied.
create or replace function public.create_profile(
  p_id uuid,
  p_email text,
  p_name text,
  p_profile text,
  p_plan text default 'free',
  p_is_admin boolean default false
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_auth_email text;
  v_profile public.profiles;
begin
  if v_uid is null or v_uid <> p_id then
    raise exception 'not authorized';
  end if;

  select email into v_auth_email from auth.users where id = v_uid;
  if v_auth_email is null then
    raise exception 'auth user not found';
  end if;

  insert into public.profiles (id, email, name, profile, plan, is_admin)
  values (
    v_uid,
    v_auth_email,
    left(nullif(trim(p_name), ''), 120),
    left(nullif(trim(p_profile), ''), 80),
    'free',
    false
  )
  on conflict (id) do update
    set name = excluded.name,
        profile = excluded.profile
  returning * into v_profile;

  return v_profile;
end;
$$;

revoke all on function public.create_profile(uuid, text, text, text, text, boolean) from public;
grant execute on function public.create_profile(uuid, text, text, text, text, boolean) to authenticated;

-- ────────────────────────────────────────────────────────────────
-- 2. Establishment access codes.
-- ────────────────────────────────────────────────────────────────
create table if not exists public.access_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  owner_id uuid references public.profiles(id) on delete cascade,
  used_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  used_at timestamptz,
  revoked_at timestamptz
);

-- Accommodate an older access_codes table if one already exists.
alter table public.access_codes add column if not exists owner_id uuid references public.profiles(id) on delete cascade;
alter table public.access_codes add column if not exists used_by uuid references public.profiles(id) on delete set null;
alter table public.access_codes add column if not exists created_at timestamptz not null default now();
alter table public.access_codes add column if not exists used_at timestamptz;
alter table public.access_codes add column if not exists revoked_at timestamptz;

create unique index if not exists access_codes_code_uidx on public.access_codes(code);
create index if not exists access_codes_owner_idx on public.access_codes(owner_id);
create index if not exists access_codes_used_by_idx on public.access_codes(used_by);

alter table public.access_codes enable row level security;

-- Remove permissive legacy policies if these names were used previously.
drop policy if exists "Codes visibles publiquement" on public.access_codes;
drop policy if exists "Codes accès publics" on public.access_codes;
drop policy if exists "Access codes public read" on public.access_codes;

-- Owners can inspect their own codes; admins can inspect all codes.
drop policy if exists "Codes visibles par leur propriétaire" on public.access_codes;
create policy "Codes visibles par leur propriétaire"
  on public.access_codes for select
  using (
    auth.uid() = owner_id
    or exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.is_admin = true
    )
  );

-- No direct browser INSERT/UPDATE is needed: mutations go through RPCs below.
drop policy if exists "Codes modifiables par leur propriétaire" on public.access_codes;
drop policy if exists "Codes créables par établissement" on public.access_codes;

create or replace function public.create_access_code()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_code text;
  v_count integer;
  v_try integer := 0;
begin
  if v_uid is null then
    raise exception 'authentication required';
  end if;

  if not exists (
    select 1 from public.profiles p
    where p.id = v_uid
      and (p.is_admin = true or p.plan in ('etab', 'admin'))
  ) then
    raise exception 'establishment entitlement required';
  end if;

  select count(*) into v_count
  from public.access_codes
  where owner_id = v_uid and revoked_at is null;

  if v_count >= 30 then
    raise exception 'access code limit reached';
  end if;

  loop
    v_try := v_try + 1;
    v_code := upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 8));
    begin
      insert into public.access_codes(code, owner_id)
      values (v_code, v_uid);
      exit;
    exception when unique_violation then
      if v_try >= 5 then raise; end if;
    end;
  end loop;

  return v_code;
end;
$$;

revoke all on function public.create_access_code() from public;
grant execute on function public.create_access_code() to authenticated;

create or replace function public.revoke_access_code(p_code text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_rows integer;
begin
  if v_uid is null then raise exception 'authentication required'; end if;

  update public.access_codes
     set revoked_at = now()
   where code = upper(trim(p_code))
     and used_by is null
     and revoked_at is null
     and (
       owner_id = v_uid
       or exists (select 1 from public.profiles p where p.id = v_uid and p.is_admin = true)
     );

  get diagnostics v_rows = row_count;
  return v_rows = 1;
end;
$$;

revoke all on function public.revoke_access_code(text) from public;
grant execute on function public.revoke_access_code(text) to authenticated;

-- Claim is atomic and tied to auth.uid(). The caller cannot provide another user id.
create or replace function public.claim_access_code(p_code text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_rows integer;
begin
  if v_uid is null then raise exception 'authentication required'; end if;

  update public.access_codes
     set used_by = v_uid,
         used_at = now()
   where code = upper(trim(p_code))
     and used_by is null
     and revoked_at is null
     and owner_id is distinct from v_uid;

  get diagnostics v_rows = row_count;
  if v_rows <> 1 then return false; end if;

  update public.profiles
     set plan = case when is_admin then plan else 'etab' end
   where id = v_uid;

  return true;
end;
$$;

revoke all on function public.claim_access_code(text) from public;
grant execute on function public.claim_access_code(text) to authenticated;

-- ────────────────────────────────────────────────────────────────
-- 3. Admin plan changes: server-authorized only.
-- ────────────────────────────────────────────────────────────────
create or replace function public.admin_update_plan(p_user_id uuid, p_plan text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null or not exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.is_admin = true
  ) then
    raise exception 'admin required';
  end if;

  if p_plan not in ('free', 'pro', 'etab') then
    raise exception 'invalid plan';
  end if;

  -- Never downgrade/change another administrator through this billing RPC.
  update public.profiles
     set plan = p_plan
   where id = p_user_id
     and is_admin = false;
end;
$$;

revoke all on function public.admin_update_plan(uuid, text) from public;
grant execute on function public.admin_update_plan(uuid, text) to authenticated;
