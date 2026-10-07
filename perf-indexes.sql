/* ═══════════════════════════════════════════════════
   HydroCalc — Index de performance Supabase
   Coller dans l'éditeur SQL de Supabase (SQL Editor)
   Toutes les commandes sont idempotentes (IF NOT EXISTS)
═══════════════════════════════════════════════════ */

/* ── Extension texte approché (recherche ILIKE) ── */
CREATE EXTENSION IF NOT EXISTS pg_trgm;

/* ══════════════════ MESSAGERIE ══════════════════ */

/* Threads de l'utilisateur triés par date — panneau gauche */
CREATE INDEX IF NOT EXISTS idx_threads_user_a_date
  ON message_threads(user_a_id, last_message_at DESC);

CREATE INDEX IF NOT EXISTS idx_threads_user_b_date
  ON message_threads(user_b_id, last_message_at DESC);

/* Index simples pour les filtres Realtime postgres_changes */
CREATE INDEX IF NOT EXISTS idx_threads_user_a
  ON message_threads(user_a_id);

CREATE INDEX IF NOT EXISTS idx_threads_user_b
  ON message_threads(user_b_id);

/* Messages actifs d'un thread — index partiel (is_deleted = false) */
CREATE INDEX IF NOT EXISTS idx_messages_thread_active
  ON messages(thread_id, created_at ASC)
  WHERE is_deleted = false;

/* Index sur thread_id seul pour le filtre Realtime (replication level) */
CREATE INDEX IF NOT EXISTS idx_messages_thread_id
  ON messages(thread_id);

/* Demandes d'ami en attente (panneau gauche messagerie) */
CREATE INDEX IF NOT EXISTS idx_friend_req_receiver_pending
  ON friend_requests(receiver_id, status)
  WHERE status = 'pending';

/* Vérification paire ami (startConversation) */
CREATE INDEX IF NOT EXISTS idx_friend_req_pair
  ON friend_requests(sender_id, receiver_id, status);

/* ══════════════════ PROFILS ══════════════════════ */

/* Recherche ILIKE sur le nom (pg_trgm) */
CREATE INDEX IF NOT EXISTS idx_profiles_name_trgm
  ON profiles USING gin(name gin_trgm_ops);

/* Recherche ILIKE sur l'email (pg_trgm) */
CREATE INDEX IF NOT EXISTS idx_profiles_email_trgm
  ON profiles USING gin(email gin_trgm_ops);

/* ══════════════════ FORUM ════════════════════════ */

/* Posts par salon triés par date — filtre le plus courant */
CREATE INDEX IF NOT EXISTS idx_forum_posts_channel_date
  ON forum_posts(channel, created_at DESC)
  WHERE is_deleted = false;

/* Posts populaires par salon */
CREATE INDEX IF NOT EXISTS idx_forum_posts_channel_votes
  ON forum_posts(channel, votes_count DESC)
  WHERE is_deleted = false;

/* Posts non résolus (filtre "Sans réponse") */
CREATE INDEX IF NOT EXISTS idx_forum_posts_channel_unsolved
  ON forum_posts(channel, created_at DESC)
  WHERE is_deleted = false AND is_solved = false;

/* Posts épinglés — ORDER BY is_pinned DESC, created_at DESC */
CREATE INDEX IF NOT EXISTS idx_forum_posts_pinned
  ON forum_posts(channel, is_pinned DESC, created_at DESC)
  WHERE is_deleted = false;

/* COUNT par salon (9 requêtes parallèles depuis _fRenderSalons) */
CREATE INDEX IF NOT EXISTS idx_forum_posts_channel_count
  ON forum_posts(channel)
  WHERE is_deleted = false;

/* Réponses d'un post, meilleures en premier */
CREATE INDEX IF NOT EXISTS idx_forum_answers_post
  ON forum_answers(post_id, is_best_answer DESC, votes_count DESC)
  WHERE is_deleted = false;

/* Votes de l'utilisateur (chargement myVotes dans _fOpenPost) */
CREATE INDEX IF NOT EXISTS idx_forum_votes_user
  ON forum_votes(user_id);

/* Votes sur une cible (RPC refresh_votes) */
CREATE INDEX IF NOT EXISTS idx_forum_votes_target
  ON forum_votes(target_id, target_type);

/* ══════════════════ FONCTIONS RPC ════════════════ */

/*
  get_unread_count(user_uuid)
  Remplace le fetch client-side de tous les threads pour compter les non-lus.
  Appelée par getUnreadMsgCount() dans messagerie.js.
  SECURITY DEFINER : s'exécute avec les droits du créateur, pas de l'appelant.
  RLS reste actif sur les tables sous-jacentes.
*/
CREATE OR REPLACE FUNCTION get_unread_count(user_uuid uuid)
RETURNS integer
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT COALESCE(
    SUM(
      CASE WHEN user_a_id = user_uuid
        THEN COALESCE(unread_a, 0)
        ELSE COALESCE(unread_b, 0)
      END
    ),
    0
  )::integer
  FROM message_threads
  WHERE user_a_id = user_uuid
     OR user_b_id = user_uuid;
$$;
