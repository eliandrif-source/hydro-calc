-- HydroCalc — intégrité forum/modération communautaire.
-- Empêche le signalement de contenus déjà masqués, les doublons de signalement
-- et garantit la cohérence reply_count lors de la modération.

-- Un membre ne doit avoir qu'un signalement actif/logique par cible.
create unique index if not exists forum_reports_reporter_post_uidx
  on public.forum_reports(reporter_id, post_id)
  where post_id is not null;
create unique index if not exists forum_reports_reporter_reply_uidx
  on public.forum_reports(reporter_id, reply_id)
  where reply_id is not null;

create or replace function public.forum_report(
  p_post_id uuid default null,
  p_reply_id uuid default null,
  p_reason text default null
)
returns uuid
language plpgsql
security definer
set search_path=public
as $$
declare
  v_uid uuid:=auth.uid();
  v_reason text:=trim(coalesce(p_reason,''));
  v_id uuid;
begin
  if v_uid is null then raise exception 'authentication required'; end if;
  if (p_post_id is null) = (p_reply_id is null) then raise exception 'one target required'; end if;
  if char_length(v_reason) not between 3 and 1000 then raise exception 'invalid reason'; end if;

  if p_post_id is not null then
    if not exists(select 1 from public.forum_posts where id=p_post_id and status<>'hidden') then
      raise exception 'post not available';
    end if;
    insert into public.forum_reports(reporter_id,post_id,reason)
    values(v_uid,p_post_id,v_reason)
    on conflict (reporter_id,post_id) where post_id is not null
    do update set reason=excluded.reason,status='pending',created_at=now()
    returning id into v_id;
  else
    if not exists(
      select 1
      from public.forum_replies r
      join public.forum_posts p on p.id=r.post_id
      where r.id=p_reply_id and r.is_hidden=false and p.status<>'hidden'
    ) then raise exception 'reply not available'; end if;
    insert into public.forum_reports(reporter_id,reply_id,reason)
    values(v_uid,p_reply_id,v_reason)
    on conflict (reporter_id,reply_id) where reply_id is not null
    do update set reason=excluded.reason,status='pending',created_at=now()
    returning id into v_id;
  end if;
  return v_id;
end;
$$;
revoke all on function public.forum_report(uuid,uuid,text) from public;
grant execute on function public.forum_report(uuid,uuid,text) to authenticated;

-- Toute modération de réponse conserve reply_count cohérent avec les réponses visibles.
create or replace function public.forum_admin_moderate(p_kind text, p_id uuid, p_action text)
returns boolean
language plpgsql
security definer
set search_path=public
as $$
declare v_post_id uuid;
begin
  if not public.forum_is_admin(auth.uid()) then raise exception 'admin required'; end if;
  if p_kind='post' then
    if p_action='hide' then update public.forum_posts set status='hidden',updated_at=now() where id=p_id;
    elsif p_action='lock' then update public.forum_posts set status='locked',updated_at=now() where id=p_id;
    elsif p_action='reopen' then update public.forum_posts set status='open',updated_at=now() where id=p_id;
    else raise exception 'invalid action'; end if;
    return found;
  elsif p_kind='reply' then
    select post_id into v_post_id from public.forum_replies where id=p_id;
    if v_post_id is null then return false; end if;
    if p_action='hide' then
      update public.forum_replies set is_hidden=true,is_solution=false,updated_at=now() where id=p_id;
    elsif p_action='restore' then
      update public.forum_replies set is_hidden=false,updated_at=now() where id=p_id;
    else raise exception 'invalid action'; end if;
    update public.forum_posts p
      set reply_count=(select count(*) from public.forum_replies r where r.post_id=p.id and r.is_hidden=false),
          updated_at=now()
      where p.id=v_post_id;
    return true;
  end if;
  raise exception 'invalid kind';
end;
$$;
revoke all on function public.forum_admin_moderate(text,uuid,text) from public;
grant execute on function public.forum_admin_moderate(text,uuid,text) to authenticated;

create or replace function public.community_admin_hide_reported_target(
  p_kind text,
  p_report_id uuid
)
returns boolean
language plpgsql
security definer
set search_path=public
as $$
declare v_target uuid; v_post_id uuid;
begin
  if not public.forum_is_admin(auth.uid()) then raise exception 'admin required'; end if;
  if p_kind='forum_post' then
    select post_id into v_target from public.forum_reports where id=p_report_id and post_id is not null;
    if v_target is null then return false; end if;
    update public.forum_posts set status='hidden',updated_at=now() where id=v_target;
    update public.forum_reports set status='reviewed' where id=p_report_id;
  elsif p_kind='forum_reply' then
    select reply_id into v_target from public.forum_reports where id=p_report_id and reply_id is not null;
    if v_target is null then return false; end if;
    select post_id into v_post_id from public.forum_replies where id=v_target;
    update public.forum_replies set is_hidden=true,is_solution=false,updated_at=now() where id=v_target;
    if v_post_id is not null then
      update public.forum_posts p
        set reply_count=(select count(*) from public.forum_replies r where r.post_id=p.id and r.is_hidden=false),
            updated_at=now()
        where p.id=v_post_id;
    end if;
    update public.forum_reports set status='reviewed' where id=p_report_id;
  elsif p_kind='message' then
    select message_id into v_target from public.message_reports where id=p_report_id;
    if v_target is null then return false; end if;
    update public.messages set is_deleted=true where id=v_target;
    update public.message_reports set status='reviewed',reviewed_at=now() where id=p_report_id;
  else
    raise exception 'invalid kind';
  end if;
  return true;
end;
$$;
revoke all on function public.community_admin_hide_reported_target(text,uuid) from public;
grant execute on function public.community_admin_hide_reported_target(text,uuid) to authenticated;
