-- HydroCalc — enforcement des sanctions de moderation.
-- Defense en profondeur : meme si un ancien client appelle une RPC directement,
-- les ecritures communautaires d'un compte suspendu/banni sont refusees.

create or replace function public.moderation_assert_can_participate(p_uid uuid default auth.uid())
returns void
language plpgsql
security definer
set search_path=public
as $$
begin
  if p_uid is null then raise exception 'authentication required'; end if;
  if exists(
    select 1 from public.moderation_sanctions s
    where s.user_id=p_uid and s.active=true
      and (s.action='ban' or (s.action='suspend' and s.ends_at>now()))
  ) then
    raise exception 'account restricted by moderation';
  end if;
end;
$$;
revoke all on function public.moderation_assert_can_participate(uuid) from public;
revoke all on function public.moderation_assert_can_participate(uuid) from anon;
grant execute on function public.moderation_assert_can_participate(uuid) to authenticated;

create or replace function public.moderation_guard_community_write()
returns trigger
language plpgsql
security definer
set search_path=public
as $$
declare
  v_actor uuid:=auth.uid();
begin
  -- Les operations internes/admin sans JWT utilisateur sont gerees par leurs RPC dediees.
  if v_actor is not null then
    perform public.moderation_assert_can_participate(v_actor);
  end if;
  return new;
end;
$$;
revoke all on function public.moderation_guard_community_write() from public;
revoke all on function public.moderation_guard_community_write() from anon, authenticated;

-- Les RPC de messagerie/forum finissent toutes par ecrire dans ces tables : le trigger
-- constitue donc une barriere serveur commune, independante du JavaScript du navigateur.
drop trigger if exists moderation_guard_messages on public.messages;
create trigger moderation_guard_messages
before insert on public.messages
for each row execute function public.moderation_guard_community_write();

drop trigger if exists moderation_guard_friend_requests on public.friend_requests;
create trigger moderation_guard_friend_requests
before insert or update on public.friend_requests
for each row execute function public.moderation_guard_community_write();

drop trigger if exists moderation_guard_forum_posts on public.forum_posts;
create trigger moderation_guard_forum_posts
before insert on public.forum_posts
for each row execute function public.moderation_guard_community_write();

drop trigger if exists moderation_guard_forum_replies on public.forum_replies;
create trigger moderation_guard_forum_replies
before insert on public.forum_replies
for each row execute function public.moderation_guard_community_write();

-- Un utilisateur sanctionne doit encore pouvoir signaler un abus existant :
-- aucune barriere n'est placee sur message_reports/forum_reports.
-- Un avertissement n'interdit pas la participation ; seules suspension active et ban le font.
