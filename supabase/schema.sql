-- ════════════════════════════════════════════════════════════════
-- HYDROCALC — Schéma Supabase (étape 4 : Stripe + Supabase)
--
-- Ce fichier décrit le schéma cible. Il n'est pas encore exécuté ni
-- branché à l'application : HydroCalc fonctionne aujourd'hui en
-- localStorage via js/data-store.js. Quand un projet Supabase sera
-- créé, exécuter ce script dans l'éditeur SQL Supabase, puis adapter
-- js/data-store.js pour appeler le client Supabase au lieu de
-- localStorage (les noms de fonctions resteront identiques).
--
-- Toutes les tables utilisateur référencent auth.users (Supabase Auth)
-- et sont protégées par Row Level Security (RLS) : chaque utilisateur
-- ne voit que ses propres données.
-- ════════════════════════════════════════════════════════════════

-- ─── PROFILS ───────────────────────────────────────────────────────
-- Étend auth.users avec les infos métier (plan, profil, essai gratuit)
create table public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text not null unique,
  name        text,
  profile     text,                         -- 'technicien', 'ingenieur', etc.
  plan        text not null default 'free', -- 'free' | 'pro' | 'etab' | 'admin'
  base_plan   text,                         -- plan réel pendant un essai Pro
  is_admin    boolean not null default false,
  trial_used  boolean not null default false,
  trial_start        timestamptz,
  joined_at          timestamptz not null default now(),
  last_login         timestamptz,
  stripe_customer_id text
);

alter table public.profiles enable row level security;

create policy "Profil visible par son propriétaire"
  on public.profiles for select using (auth.uid() = id);
create policy "Profil modifiable par son propriétaire"
  on public.profiles for update using (auth.uid() = id);


-- ─── ABONNEMENTS (Stripe) ───────────────────────────────────────────
create table public.subscriptions (
  id                   uuid primary key default gen_random_uuid(),
  profile_id           uuid not null references public.profiles (id) on delete cascade,
  plan                 text not null,        -- 'pro' | 'etab'
  status               text not null,        -- 'active' | 'trialing' | 'canceled' | 'past_due'
  stripe_customer_id   text,
  stripe_subscription_id text,
  current_period_start timestamptz,
  current_period_end   timestamptz,
  created_at           timestamptz not null default now()
);

alter table public.subscriptions enable row level security;

create policy "Abonnement visible par son propriétaire"
  on public.subscriptions for select using (auth.uid() = profile_id);


-- ─── PAIEMENTS (historique, pour le dashboard admin "Coffre") ──────
create table public.payments (
  id               uuid primary key default gen_random_uuid(),
  profile_id       uuid not null references public.profiles (id) on delete cascade,
  stripe_payment_id text,
  amount_cents     integer not null,
  currency         text not null default 'eur',
  status           text not null,           -- 'succeeded' | 'failed' | 'refunded'
  created_at       timestamptz not null default now()
);

alter table public.payments enable row level security;

create policy "Paiements visibles par leur propriétaire"
  on public.payments for select using (auth.uid() = profile_id);
-- Accès complet admin "Coffre" : l'admin peut lire tous les paiements
create policy "Admin peut lire tous les paiements"
  on public.payments for select using (
    exists (select 1 from public.profiles where id = auth.uid() and is_admin = true)
  );

-- Admin peut lire tous les abonnements
create policy "Admin peut lire tous les abonnements"
  on public.subscriptions for select using (
    exists (select 1 from public.profiles where id = auth.uid() and is_admin = true)
  );

-- Admin peut lire tous les profils
create policy "Admin peut lire tous les profils"
  on public.profiles for select using (
    auth.uid() = id
    or exists (select 1 from public.profiles where id = auth.uid() and is_admin = true)
  );


-- ─── PROJETS / DOSSIERS ─────────────────────────────────────────────
create table public.projects (
  id         uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  name       text not null,
  color      text,
  icon       text,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "Projets gérés par leur propriétaire"
  on public.projects for all using (auth.uid() = profile_id);


-- ─── CALCULS SAUVEGARDÉS ────────────────────────────────────────────
create table public.saved_calculations (
  id         uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  project_id uuid references public.projects (id) on delete set null,
  module     text not null,
  module_id  text,
  valeur     text,
  detail     text,
  inputs     jsonb,
  created_at timestamptz not null default now()
);

alter table public.saved_calculations enable row level security;

create policy "Calculs gérés par leur propriétaire"
  on public.saved_calculations for all using (auth.uid() = profile_id);


-- ─── FORMULES PERSONNALISÉES ────────────────────────────────────────
create table public.saved_formulas (
  id         uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  nom        text not null,
  expr       text not null,
  result     text,
  ref        text,
  vars       jsonb,
  created_at timestamptz not null default now()
);

alter table public.saved_formulas enable row level security;

create policy "Formules gérées par leur propriétaire"
  on public.saved_formulas for all using (auth.uid() = profile_id);


-- ─── TEXTES RÉGLEMENTAIRES PERSONNALISÉS ────────────────────────────
create table public.saved_regulations (
  id         uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  nom        text not null,
  contenu    text,
  created_at timestamptz not null default now()
);

alter table public.saved_regulations enable row level security;

create policy "Textes réglementaires gérés par leur propriétaire"
  on public.saved_regulations for all using (auth.uid() = profile_id);


-- ─── PARAMÈTRES UTILISATEUR ─────────────────────────────────────────
create table public.user_settings (
  profile_id      uuid primary key references public.profiles (id) on delete cascade,
  theme           text default 'light',
  font            text default 'normal',
  accent          text default 'green',
  density         text default 'normal',
  units           text default 'si',
  decimals        text default '2',
  strickler       text default '80',
  eh              text default '150',
  default_project uuid references public.projects (id) on delete set null,
  spanc_dept      text,
  updated_at      timestamptz not null default now()
);

alter table public.user_settings enable row level security;

create policy "Paramètres gérés par leur propriétaire"
  on public.user_settings for all using (auth.uid() = profile_id);


-- ─── QUOTAS D'USAGE (calculs/jour, rapports/semaine, QCM/semaine) ──
create table public.usage_quotas (
  profile_id uuid not null references public.profiles (id) on delete cascade,
  kind       text not null,   -- 'calc_daily' | 'report_weekly' | 'qcm_weekly'
  period_key text not null,   -- date ou clé de semaine (ex: '2026-06-08')
  count      integer not null default 0,
  primary key (profile_id, kind, period_key)
);

alter table public.usage_quotas enable row level security;

create policy "Quotas gérés par leur propriétaire"
  on public.usage_quotas for all using (auth.uid() = profile_id);


-- ─── QCM PROFESSEUR ─────────────────────────────────────────────────
create table public.qcm_quizzes (
  id         uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade, -- le professeur
  titre      text not null,
  questions  jsonb not null,   -- liste de questions (énoncé, choix, bonne réponse, explication)
  options    jsonb,            -- masquer résultats / explications, ordre aléatoire, pénalité...
  created_at timestamptz not null default now()
);

alter table public.qcm_quizzes enable row level security;

create policy "QCM gérés par leur professeur"
  on public.qcm_quizzes for all using (auth.uid() = profile_id);


-- ─── SESSIONS QCM EN DIRECT ─────────────────────────────────────────
create table public.qcm_sessions (
  id         uuid primary key default gen_random_uuid(),
  quiz_id    uuid not null references public.qcm_quizzes (id) on delete cascade,
  code       text not null unique,   -- code à 6 lettres communiqué aux élèves
  status     text not null default 'open', -- 'open' | 'closed'
  created_at timestamptz not null default now(),
  closed_at  timestamptz
);

alter table public.qcm_sessions enable row level security;

create policy "Sessions QCM gérées par le professeur propriétaire"
  on public.qcm_sessions for all using (
    auth.uid() = (select profile_id from public.qcm_quizzes where id = quiz_id)
  );
-- Note : les élèves rejoignent une session via le code, sans compte
-- Supabase — l'écriture des résultats se fait via une fonction Edge
-- ou une policy "insert" publique restreinte au session_id valide.


-- ─── RÉSULTATS QCM ───────────────────────────────────────────────────
create table public.qcm_results (
  id           uuid primary key default gen_random_uuid(),
  session_id   uuid not null references public.qcm_sessions (id) on delete cascade,
  student_name text not null,
  score        integer not null,
  total        integer not null,
  details      jsonb,           -- réponse par question (correct/incorrect)
  created_at   timestamptz not null default now()
);

alter table public.qcm_results enable row level security;

create policy "Résultats visibles par le professeur de la session"
  on public.qcm_results for select using (
    auth.uid() = (
      select q.profile_id
      from public.qcm_sessions s
      join public.qcm_quizzes q on q.id = s.quiz_id
      where s.id = session_id
    )
  );


-- ─── SUPPRESSION DE COMPTE (self-service, sécurisé) ────────────────
-- Un client avec la clé anon ne peut pas supprimer un utilisateur de
-- auth.users (réservé à la clé service_role). On expose donc une
-- fonction SECURITY DEFINER : elle s'exécute avec les droits du
-- propriétaire (postgres) mais ne supprime QUE l'utilisateur courant
-- (auth.uid()) — impossible de supprimer le compte de quelqu'un d'autre.
-- Toutes les tables liées (profiles, projects, saved_*...) sont
-- supprimées en cascade grâce aux "on delete cascade" déjà définis.
create or replace function public.delete_user()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from auth.users where id = auth.uid();
end;
$$;

grant execute on function public.delete_user() to authenticated;


-- ════════════════════════════════════════════════════════════════
-- CORRESPONDANCE AVEC js/data-store.js (localStorage actuel)
-- ════════════════════════════════════════════════════════════════
-- hc_main_accounts          → profiles
-- hc_calcs_<email>          → saved_calculations
-- hc_formulas_<email>       → saved_formulas
-- hc_regls_<email>          → saved_regulations
-- hc_projects_<email>       → projects
-- hc_settings_v1            → user_settings
-- hc_spanc_dept             → user_settings.spanc_dept
-- hc_calc_quota             → usage_quotas (kind='calc_daily')
-- hc_report_quota           → usage_quotas (kind='report_weekly')
-- hc_qcms_<email>           → qcm_quizzes
-- hc_qcm_res_<email>_<id>   → qcm_sessions + qcm_results
-- hc_remember / hc_current_session → géré par Supabase Auth (session JWT)
