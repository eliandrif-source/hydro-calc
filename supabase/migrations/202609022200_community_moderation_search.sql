-- HydroCalc — modération communautaire scoped + recherche forum serveur.
-- L'admin ne reçoit pour la messagerie que le message explicitement signalé.

create index if not exists forum_posts_status_activity_idx
  on public.forum_posts(status,last_activity_at desc);
create index if not exists forum_posts_salon_status_activity_idx
  on public.forum_posts(salon_id,status,last_activity_at desc);

create or replace function public.community_admin_reports(p_status text default 'pending')
returns table(
  kind text,
  report_id uuid,
  target_id uuid,
  reporter_id uuid,
  reporter_name text,
  author_name text,
  salon_id text,
  title text,
  content text,
  reason text,
  report_status text,
  created_at timestamptz
)
language sql
stable
security definer
set search_path=public
as $$
  select * from (
    select
      case when fr.post_id is not null then 'forum_post'::text else 'forum_reply'::text end as kind,
      fr.id as report_id,
      coalesce(fr.post_id,fr.reply_id) as target_id,
      fr.reporter_id,
      coalesce(nullif(trim(rp.name),''),'Membre HydroCalc') as reporter_name,
      coalesce(nullif(trim(case when fr.post_id is not null then fp.author_name else fre.author_name end),''),'Membre HydroCalc') as author_name,
      coalesce(fp.salon_id,parent.salon_id) as salon_id,
      coalesce(fp.title,parent.title) as title,
      coalesce(fp.body,fre.body) as content,
      fr.reason,
      fr.status as report_status,
      fr.created_at
    from public.forum_reports fr
    left join public.profiles rp on rp.id=fr.reporter_id
    left join public.forum_posts fp on fp.id=fr.post_id
    left join public.forum_replies fre on fre.id=fr.reply_id
    left join public.forum_posts parent on parent.id=fre.post_id
    where public.forum_is_admin(auth.uid())
      and (p_status is null or p_status='all' or fr.status=p_status)

    union all

    select
      'message'::text as kind,
      mr.id as report_id,
      mr.message_id as target_id,
      mr.reporter_id,
      coalesce(nullif(trim(rp.name),''),'Membre HydroCalc') as reporter_name,
      coalesce(nullif(trim(m.sender_name),''),'Membre HydroCalc') as author_name,
      null::text as salon_id,
      'Message privé signalé'::text as title,
      coalesce(m.contenu, case when m.attachment_url is not null then '[Pièce jointe]' else '' end) as content,
      mr.reason,
      mr.status as report_status,
      mr.created_at
    from public.message_reports mr
    join public.messages m on m.id=mr.message_id
    left join public.profiles rp on rp.id=mr.reporter_id
    where public.forum_is_admin(auth.uid())
      and (p_status is null or p_status='all' or mr.status=p_status)
  ) x
  order by created_at desc
  limit 200;
$$;
revoke all on function public.community_admin_reports(text) from public;
grant execute on function public.community_admin_reports(text) to authenticated;

create or replace function public.community_admin_review_report(
  p_kind text,
  p_report_id uuid,
  p_status text
)
returns boolean
language plpgsql
security definer
set search_path=public
as $$
begin
  if not public.forum_is_admin(auth.uid()) then raise exception 'admin required'; end if;
  if p_status not in ('reviewed','dismissed') then raise exception 'invalid status'; end if;
  if p_kind in ('forum_post','forum_reply') then
    update public.forum_reports set status=p_status where id=p_report_id;
  elsif p_kind='message' then
    update public.message_reports set status=p_status,reviewed_at=now() where id=p_report_id;
  else
    raise exception 'invalid kind';
  end if;
  return found;
end;
$$;
revoke all on function public.community_admin_review_report(text,uuid,text) from public;
grant execute on function public.community_admin_review_report(text,uuid,text) to authenticated;

create or replace function public.community_admin_hide_reported_target(
  p_kind text,
  p_report_id uuid
)
returns boolean
language plpgsql
security definer
set search_path=public
as $$
declare v_target uuid;
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
    update public.forum_replies set is_hidden=true,updated_at=now() where id=v_target;
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

create or replace function public.forum_search_posts(
  p_salon_id text,
  p_query text default null,
  p_filter text default 'all',
  p_limit integer default 40,
  p_offset integer default 0
)
returns table(
  id uuid,
  author_id uuid,
  author_name text,
  salon_id text,
  title text,
  body text,
  status text,
  reply_count integer,
  last_activity_at timestamptz,
  created_at timestamptz
)
language sql
stable
security invoker
set search_path=public
as $$
  select p.id,p.author_id,p.author_name,p.salon_id,p.title,p.body,p.status,p.reply_count,p.last_activity_at,p.created_at
  from public.forum_posts p
  where p.salon_id=p_salon_id
    and (public.forum_is_admin(auth.uid()) or p.status<>'hidden')
    and (
      nullif(trim(coalesce(p_query,'')),'') is null
      or p.title ilike '%' || replace(replace(trim(p_query),'%','\%'),'_','\_') || '%' escape '\'
      or p.body ilike '%' || replace(replace(trim(p_query),'%','\%'),'_','\_') || '%' escape '\'
    )
    and (
      p_filter='all'
      or (p_filter='open' and p.status='open')
      or (p_filter='solved' and p.status='solved')
      or (p_filter='unanswered' and p.status='open' and p.reply_count=0)
    )
  order by p.last_activity_at desc
  limit greatest(1,least(coalesce(p_limit,40),100))
  offset greatest(coalesce(p_offset,0),0);
$$;
revoke all on function public.forum_search_posts(text,text,text,integer,integer) from public;
grant execute on function public.forum_search_posts(text,text,text,integer,integer) to authenticated;
