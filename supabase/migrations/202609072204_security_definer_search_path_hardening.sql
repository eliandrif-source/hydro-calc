-- HydroCalc — durcissement final des fonctions SECURITY DEFINER communautaires.
-- Aucun changement fonctionnel : on verrouille uniquement le search_path d'exécution.
-- Les corps existants qualifient déjà les objets applicatifs en public.*.

alter function public.message_is_blocked_pair(uuid,uuid) set search_path = '';
alter function public.message_block_user(uuid,boolean) set search_path = '';
alter function public.message_report_private(uuid,text) set search_path = '';
alter function public.message_admin_review_report(uuid,text) set search_path = '';
alter function public.send_friend_request(uuid) set search_path = '';
alter function public.message_get_or_create_thread(uuid) set search_path = '';
alter function public.message_send(uuid,text,text,text) set search_path = '';
alter function public.moderation_pending_count() set search_path = '';
alter function public.moderation_get_report(uuid) set search_path = '';
alter function public.messaging_user_sanctioned(uuid) set search_path = '';
alter function public.moderation_assert_can_participate(uuid) set search_path = '';
alter function public.moderation_guard_community_write() set search_path = '';

-- Défense en profondeur : aucune fonction privilégiée listée ici ne doit redevenir
-- exécutable par anon/public au gré d'une migration ultérieure.
revoke all on function public.message_is_blocked_pair(uuid,uuid) from public, anon;
revoke all on function public.message_block_user(uuid,boolean) from public, anon;
revoke all on function public.message_report_private(uuid,text) from public, anon;
revoke all on function public.message_admin_review_report(uuid,text) from public, anon;
revoke all on function public.send_friend_request(uuid) from public, anon;
revoke all on function public.message_get_or_create_thread(uuid) from public, anon;
revoke all on function public.message_send(uuid,text,text,text) from public, anon;
revoke all on function public.moderation_pending_count() from public, anon;
revoke all on function public.moderation_get_report(uuid) from public, anon;
revoke all on function public.messaging_user_sanctioned(uuid) from public, anon;
revoke all on function public.moderation_assert_can_participate(uuid) from public, anon;
revoke all on function public.moderation_guard_community_write() from public, anon, authenticated;

-- Les RPC utilisateur restent réservées aux membres authentifiés ; le trigger n'est
-- jamais appelé directement depuis le client.
grant execute on function public.message_is_blocked_pair(uuid,uuid) to authenticated;
grant execute on function public.message_block_user(uuid,boolean) to authenticated;
grant execute on function public.message_report_private(uuid,text) to authenticated;
grant execute on function public.message_admin_review_report(uuid,text) to authenticated;
grant execute on function public.send_friend_request(uuid) to authenticated;
grant execute on function public.message_get_or_create_thread(uuid) to authenticated;
grant execute on function public.message_send(uuid,text,text,text) to authenticated;
grant execute on function public.moderation_pending_count() to authenticated;
grant execute on function public.moderation_get_report(uuid) to authenticated;
grant execute on function public.messaging_user_sanctioned(uuid) to authenticated;
grant execute on function public.moderation_assert_can_participate(uuid) to authenticated;
