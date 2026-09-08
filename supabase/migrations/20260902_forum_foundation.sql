-- HydroCalc — forum métier versionné, modérable et protégé par RLS.

create table if not exists public.forum_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  author_name text not null,
  salon_id text not null,
  title text not null,
  body text not null,
  status text not null default 'open',
  reply_count integer not null default 0,
  last_activity_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint forum_posts_salon_check check (salon_id in ('hydraulique','aep','assainissement','anc','rivieres-gemapi','reglementation','formation','terrain')),
  constraint forum_posts_status_check check (status in ('open','solved','locked','hidden')),
  constraint forum_posts_title_length check (char_length(title) between 5 and 180),
  constraint forum_posts_body_length check (char_length(body) between 10 and 10000),
  constraint forum_posts_reply_count_check check (reply_count >= 0)
);

create table if not exists public.forum_replies (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.forum_posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  author_name text not null,
  body text not null,
  is_solution boolean not null default false,
  is_hidden boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint forum_replies_body_length check (char_length(body) between 2 and 8000)
);

create table if not exists public.forum_reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid references public.forum_posts(id) on delete cascade,
  reply_id uuid references public.forum_replies(id) on delete cascade,
  reason text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  constraint forum_reports_target_check check ((post_id is not null) <> (reply_id is not null)),
  constraint forum_reports_reason_length check (char_length(reason) between 3 and 1000),
  constraint forum_reports_status_check check (status in ('pending','reviewed','dismissed'))
);

create index if not exists forum_posts_salon_activity_idx on public.forum_posts(salon_id,last_activity_at desc);
create index if not exists forum_replies_post_created_idx on public.forum_replies(post_id,created_at);
create index if not exists forum_reports_status_created_idx on public.forum_reports(status,created_at);

alter table public.forum_posts enable row level security;
alter table public.forum_replies enable row level security;
alter table public.forum_reports enable row level security;

create or replace function public.forum_is_admin(p_uid uuid default auth.uid())
returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.profiles p where p.id=p_uid and p.is_admin=true);
$$;
revoke all on function public.forum_is_admin(uuid) from public;
grant execute on function public.forum_is_admin(uuid) to authenticated;

drop policy if exists "forum posts visible" on public.forum_posts;
create policy "forum posts visible" on public.forum_posts for select to authenticated
using (status <> 'hidden' or public.forum_is_admin(auth.uid()));

drop policy if exists "forum replies visible" on public.forum_replies;
create policy "forum replies visible" on public.forum_replies for select to authenticated
using (is_hidden=false or public.forum_is_admin(auth.uid()));

drop policy if exists "forum reports own or admin" on public.forum_reports;
create policy "forum reports own or admin" on public.forum_reports for select to authenticated
using (reporter_id=auth.uid() or public.forum_is_admin(auth.uid()));

revoke insert, update, delete on public.forum_posts from authenticated;
revoke insert, update, delete on public.forum_replies from authenticated;
revoke insert, update, delete on public.forum_reports from authenticated;
grant select on public.forum_posts, public.forum_replies, public.forum_reports to authenticated;

create or replace function public.forum_create_post(p_salon_id text, p_title text, p_body text)
returns uuid
language plpgsql security definer set search_path=public as $$
declare v_uid uuid:=auth.uid(); v_name text; v_id uuid; v_title text:=trim(coalesce(p_title,'')); v_body text:=trim(coalesce(p_body,''));
begin
  if v_uid is null then raise exception 'authentication required'; end if;
  if p_salon_id not in ('hydraulique','aep','assainissement','anc','rivieres-gemapi','reglementation','formation','terrain') then raise exception 'invalid salon'; end if;
  if char_length(v_title) not between 5 and 180 or char_length(v_body) not between 10 and 10000 then raise exception 'invalid content length'; end if;
  if (select count(*) from public.forum_posts where author_id=v_uid and created_at>now()-interval '1 hour') >= 5 then raise exception 'rate limit'; end if;
  select coalesce(nullif(trim(name),''),'Membre HydroCalc') into v_name from public.profiles where id=v_uid;
  insert into public.forum_posts(author_id,author_name,salon_id,title,body) values(v_uid,v_name,p_salon_id,v_title,v_body) returning id into v_id;
  return v_id;
end; $$;
revoke all on function public.forum_create_post(text,text,text) from public;
grant execute on function public.forum_create_post(text,text,text) to authenticated;

create or replace function public.forum_reply(p_post_id uuid, p_body text)
returns uuid
language plpgsql security definer set search_path=public as $$
declare v_uid uuid:=auth.uid(); v_name text; v_id uuid; v_body text:=trim(coalesce(p_body,'')); v_status text;
begin
  if v_uid is null then raise exception 'authentication required'; end if;
  select status into v_status from public.forum_posts where id=p_post_id for update;
  if v_status is null or v_status in ('locked','hidden') then raise exception 'post not open for replies'; end if;
  if char_length(v_body) not between 2 and 8000 then raise exception 'invalid content length'; end if;
  if (select count(*) from public.forum_replies where author_id=v_uid and created_at>now()-interval '1 hour') >= 30 then raise exception 'rate limit'; end if;
  select coalesce(nullif(trim(name),''),'Membre HydroCalc') into v_name from public.profiles where id=v_uid;
  insert into public.forum_replies(post_id,author_id,author_name,body) values(p_post_id,v_uid,v_name,v_body) returning id into v_id;
  update public.forum_posts set reply_count=reply_count+1,last_activity_at=now(),updated_at=now() where id=p_post_id;
  return v_id;
end; $$;
revoke all on function public.forum_reply(uuid,text) from public;
grant execute on function public.forum_reply(uuid,text) to authenticated;

create or replace function public.forum_mark_solution(p_post_id uuid, p_reply_id uuid)
returns boolean
language plpgsql security definer set search_path=public as $$
declare v_uid uuid:=auth.uid();
begin
  if not exists(select 1 from public.forum_posts where id=p_post_id and (author_id=v_uid or public.forum_is_admin(v_uid))) then return false; end if;
  if not exists(select 1 from public.forum_replies where id=p_reply_id and post_id=p_post_id and is_hidden=false) then return false; end if;
  update public.forum_replies set is_solution=false where post_id=p_post_id;
  update public.forum_replies set is_solution=true where id=p_reply_id;
  update public.forum_posts set status='solved',updated_at=now(),last_activity_at=now() where id=p_post_id;
  return true;
end; $$;
revoke all on function public.forum_mark_solution(uuid,uuid) from public;
grant execute on function public.forum_mark_solution(uuid,uuid) to authenticated;

create or replace function public.forum_report(p_post_id uuid default null, p_reply_id uuid default null, p_reason text default null)
returns uuid
language plpgsql security definer set search_path=public as $$
declare v_uid uuid:=auth.uid(); v_reason text:=trim(coalesce(p_reason,'')); v_id uuid;
begin
  if v_uid is null then raise exception 'authentication required'; end if;
  if (p_post_id is null) = (p_reply_id is null) then raise exception 'one target required'; end if;
  if char_length(v_reason) not between 3 and 1000 then raise exception 'invalid reason'; end if;
  if p_post_id is not null and not exists(select 1 from public.forum_posts where id=p_post_id) then raise exception 'post not found'; end if;
  if p_reply_id is not null and not exists(select 1 from public.forum_replies where id=p_reply_id) then raise exception 'reply not found'; end if;
  insert into public.forum_reports(reporter_id,post_id,reply_id,reason) values(v_uid,p_post_id,p_reply_id,v_reason) returning id into v_id;
  return v_id;
end; $$;
revoke all on function public.forum_report(uuid,uuid,text) from public;
grant execute on function public.forum_report(uuid,uuid,text) to authenticated;

create or replace function public.forum_admin_moderate(p_kind text, p_id uuid, p_action text)
returns boolean
language plpgsql security definer set search_path=public as $$
begin
  if not public.forum_is_admin(auth.uid()) then raise exception 'admin required'; end if;
  if p_kind='post' then
    if p_action='hide' then update public.forum_posts set status='hidden',updated_at=now() where id=p_id;
    elsif p_action='lock' then update public.forum_posts set status='locked',updated_at=now() where id=p_id;
    elsif p_action='reopen' then update public.forum_posts set status='open',updated_at=now() where id=p_id;
    else raise exception 'invalid action'; end if;
  elsif p_kind='reply' then
    if p_action='hide' then update public.forum_replies set is_hidden=true,updated_at=now() where id=p_id;
    elsif p_action='restore' then update public.forum_replies set is_hidden=false,updated_at=now() where id=p_id;
    else raise exception 'invalid action'; end if;
  else raise exception 'invalid kind'; end if;
  return found;
end; $$;
revoke all on function public.forum_admin_moderate(text,uuid,text) from public;
grant execute on function public.forum_admin_moderate(text,uuid,text) to authenticated;
