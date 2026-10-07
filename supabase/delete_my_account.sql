-- ════════════════════════════════════════════════════════════════
-- RPC : delete_my_account()
-- Suppression complète et sécurisée d'un compte utilisateur
--
-- COMMENT APPLIQUER :
--   Dashboard Supabase → SQL Editor → Coller ce fichier → Run
--
-- SECURITE :
--   SECURITY DEFINER → s'exécute avec les droits postgres
--   mais ne supprime QUE auth.uid() — impossible de supprimer
--   le compte d'un autre utilisateur.
--   set search_path = public → protège contre le hijacking de chemin.
-- ════════════════════════════════════════════════════════════════

create or replace function public.delete_my_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  _uid uuid := auth.uid();
begin
  if _uid is null then
    raise exception 'Not authenticated';
  end if;

  -- ── Tables messaging (sans FK cascade vers auth.users) ──────────
  -- Supprimer les messages envoyés par l'utilisateur
  delete from public.messages
    where sender_id = _uid;

  -- Supprimer les fils de discussion où il est participant
  -- (les messages restants dans ce fil sont orphelins, on les nettoie aussi)
  delete from public.messages
    where thread_id in (
      select id from public.message_threads
      where user_a_id = _uid or user_b_id = _uid
    );
  delete from public.message_threads
    where user_a_id = _uid or user_b_id = _uid;

  -- Demandes d'amis envoyées ou reçues
  delete from public.friend_requests
    where sender_id = _uid or receiver_id = _uid;

  -- ── Tables forum (sans FK cascade vers auth.users) ──────────────
  delete from public.forum_votes   where user_id = _uid;
  delete from public.forum_answers where user_id = _uid;
  delete from public.forum_posts   where user_id = _uid;

  -- ── Suppression du compte auth ──────────────────────────────────
  -- Cascade automatique vers :
  --   profiles → subscriptions, payments, projects, saved_calculations,
  --              saved_formulas, saved_regulations, user_settings,
  --              usage_quotas, qcm_quizzes → qcm_sessions → qcm_results
  --   user_store (via user_id → auth.users)
  delete from auth.users where id = _uid;
end;
$$;

-- Accessible uniquement aux utilisateurs authentifiés
grant execute on function public.delete_my_account() to authenticated;
revoke execute on function public.delete_my_account() from anon;
