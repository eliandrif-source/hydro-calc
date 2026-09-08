-- HydroCalc — baseline schema for reproducible fresh Supabase databases.
-- This migration reconstructs the legacy structural baseline only.
-- Security hardening is applied immediately by the dated migrations that follow.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  name text,
  profile text,
  plan text not null default 'free',
  base_plan text,
  is_admin boolean not null default false,
  trial_used boolean not null default false,
  trial_start timestamptz,
  joined_at timestamptz not null default now(),
  last_login timestamptz,
  stripe_customer_id text
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  plan text not null,
  status text not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  stripe_payment_id text,
  amount_cents integer not null,
  currency text not null default 'eur',
  status text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  color text,
  icon text,
  created_at timestamptz not null default now()
);

create table if not exists public.saved_calculations (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  project_id uuid references public.projects(id) on delete set null,
  module text not null,
  module_id text,
  valeur text,
  detail text,
  inputs jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.saved_formulas (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  nom text not null,
  expr text not null,
  result text,
  ref text,
  vars jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.saved_regulations (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  nom text not null,
  contenu text,
  created_at timestamptz not null default now()
);

create table if not exists public.user_settings (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  theme text default 'light',
  font text default 'normal',
  accent text default 'green',
  density text default 'normal',
  units text default 'si',
  decimals text default '2',
  strickler text default '80',
  eh text default '150',
  default_project uuid references public.projects(id) on delete set null,
  spanc_dept text,
  updated_at timestamptz not null default now()
);

create table if not exists public.usage_quotas (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null,
  period_key text not null,
  count integer not null default 0,
  primary key(profile_id, kind, period_key)
);

create table if not exists public.qcm_quizzes (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  titre text not null,
  questions jsonb not null,
  options jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.qcm_sessions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.qcm_quizzes(id) on delete cascade,
  code text not null unique,
  status text not null default 'open',
  created_at timestamptz not null default now(),
  closed_at timestamptz
);

create table if not exists public.qcm_results (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.qcm_sessions(id) on delete cascade,
  student_name text not null,
  score integer not null,
  total integer not null,
  details jsonb,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.payments enable row level security;
alter table public.projects enable row level security;
alter table public.saved_calculations enable row level security;
alter table public.saved_formulas enable row level security;
alter table public.saved_regulations enable row level security;
alter table public.user_settings enable row level security;
alter table public.usage_quotas enable row level security;
alter table public.qcm_quizzes enable row level security;
alter table public.qcm_sessions enable row level security;
alter table public.qcm_results enable row level security;

-- Minimal legacy policies needed as named predecessors for the hardening migrations.
create policy "Profil visible par son propriétaire" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "Profil modifiable par son propriétaire" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "Abonnement visible par son propriétaire" on public.subscriptions for select to authenticated using ((select auth.uid()) = profile_id);
create policy "Paiements visibles par leur propriétaire" on public.payments for select to authenticated using ((select auth.uid()) = profile_id);
create policy "Admin peut lire tous les paiements" on public.payments for select to authenticated using (exists(select 1 from public.profiles p where p.id=(select auth.uid()) and p.is_admin=true));
create policy "Admin peut lire tous les abonnements" on public.subscriptions for select to authenticated using (exists(select 1 from public.profiles p where p.id=(select auth.uid()) and p.is_admin=true));
create policy "Admin peut lire tous les profils" on public.profiles for select to authenticated using ((select auth.uid())=id or exists(select 1 from public.profiles p where p.id=(select auth.uid()) and p.is_admin=true));
create policy "Projets gérés par leur propriétaire" on public.projects for all to authenticated using ((select auth.uid())=profile_id) with check ((select auth.uid())=profile_id);
create policy "Calculs gérés par leur propriétaire" on public.saved_calculations for all to authenticated using ((select auth.uid())=profile_id) with check ((select auth.uid())=profile_id);
create policy "Formules gérées par leur propriétaire" on public.saved_formulas for all to authenticated using ((select auth.uid())=profile_id) with check ((select auth.uid())=profile_id);
create policy "Textes réglementaires gérés par leur propriétaire" on public.saved_regulations for all to authenticated using ((select auth.uid())=profile_id) with check ((select auth.uid())=profile_id);
create policy "Paramètres gérés par leur propriétaire" on public.user_settings for all to authenticated using ((select auth.uid())=profile_id) with check ((select auth.uid())=profile_id);
create policy "Quotas gérés par leur propriétaire" on public.usage_quotas for all to authenticated using ((select auth.uid())=profile_id) with check ((select auth.uid())=profile_id);
create policy "QCM gérés par leur professeur" on public.qcm_quizzes for all to authenticated using ((select auth.uid())=profile_id) with check ((select auth.uid())=profile_id);
create policy "Sessions QCM gérées par le professeur propriétaire" on public.qcm_sessions for all to authenticated using ((select auth.uid())=(select profile_id from public.qcm_quizzes where id=quiz_id));
create policy "Résultats visibles par le professeur de la session" on public.qcm_results for select to authenticated using ((select auth.uid())=(select q.profile_id from public.qcm_sessions s join public.qcm_quizzes q on q.id=s.quiz_id where s.id=session_id));
