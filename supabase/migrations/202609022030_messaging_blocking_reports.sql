-- HydroCalc — blocage de membres et signalement de messages privés.

create table if not exists public.message_blocks (
  blocker_id uuid not null references public.profiles(id) on delete cascade,
  blocked_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  constraint message_blocks_not_self check (blocker_id <> blocked_id)
);

create table if not exists public.message_reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  message_id uuid not null references public.messages(id) on delete cascade,
  reason text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  constraint message_reports_reason_length check (char_length(reason) between 3 and 1000),
  constraint message_reports_status_check check (status in ('pending','reviewed','dismissed')),
  unique (reporter_id, message_id)
);

create index if not exists message_reports_status_created_idx on public.message_reports(status,created_at);

alter table public.message_blocks enable row level security;
alter table public.message_reports enable row level security;

drop policy if exists "message blocks own" on public.message_blocks;
create policy "message blocks own" on public.message_blocks
for select to authenticated using (blocker_id=auth.uid());

drop policy if exists "message reports own or admin" on public.message_reports;
create policy "message reports own or admin" on public.message_reports
for select to authenticated
using (
  reporter_id=auth.uid()
  or exists(select 1 from public.profiles p where p.id=auth.uid() and p.is_admin=true)
);

revoke insert, update, delete on public.message_blocks from authenticated;
revoke insert, update, delete on public.message_reports from authenticated;
grant select on public.message_blocks, public.message_reports to authenticated;

create or replace function public.message_is_blocked_pair(p_a uuid, p_b uuid)
returns boolean
language sql
stable
security definer
set search_path=public
as $$
  select exists(
    select 1 from public.message_blocks b
    where (b.blocker_id=p_a and b.blocked_id=p_b)
       or (b.blocker_id=p_b and b.blocked_id=p_a)
  );
$$;
revoke all on function public.message_is_blocked_pair(uuid,uuid) from public;
grant execute on function public.message_is_blocked_pair(uuid,uuid) to authenticated;

create or replace function public.message_block_user(p_other uuid, p_block boolean default true)
returns boolean
language plpgsql
security definer
set search_path=public
as $$
declare v_uid uuid:=auth.uid();
begin
  if v_uid is null or p_other is null or p_other=v_uid then return false; end if;
  if p_block then
    insert into public.message_blocks(blocker_id,blocked_id)
    values(v_uid,p_other)
    on conflict (blocker_id,blocked_id) do nothing;
  else
    delete from public.message_blocks where blocker_id=v_uid and blocked_id=p_other;
  end if;
  return true;
end;
$$;
revoke all on function public.message_block_user(uuid,boolean) from public;
grant execute on function public.message_block_user(uuid,boolean) to authenticated;

create or replace function public.message_report_private(p_message_id uuid, p_reason text)
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
  if char_length(v_reason) not between 3 and 1000 then raise exception 'invalid reason'; end if;
  if not exists(
    select 1
    from public.messages m
    join public.message_threads t on t.id=m.thread_id
    where m.id=p_message_id
      and (t.user_a_id=v_uid or t.user_b_id=v_uid)
  ) then raise exception 'message access denied'; end if;

  insert into public.message_reports(reporter_id,message_id,reason)
  values(v_uid,p_message_id,v_reason)
  on conflict (reporter_id,message_id)
  do update set reason=excluded.reason,status='pending',created_at=now(),reviewed_at=null
  returning id into v_id;
  return v_id;
end;
$$;
revoke all on function public.message_report_private(uuid,text) from public;
grant execute on function public.message_report_private(uuid,text) to authenticated;

create or replace function public.message_admin_review_report(p_report_id uuid, p_status text)
returns boolean
language plpgsql
security definer
set search_path=public
as $$
begin
  if not exists(select 1 from public.profiles p where p.id=auth.uid() and p.is_admin=true) then raise exception 'admin required'; end if;
  if p_status not in ('reviewed','dismissed') then raise exception 'invalid status'; end if;
  update public.message_reports set status=p_status,reviewed_at=now() where id=p_report_id;
  return found;
end;
$$;
revoke all on function public.message_admin_review_report(uuid,text) from public;
grant execute on function public.message_admin_review_report(uuid,text) to authenticated;

-- Bloqué dans un sens ou dans l'autre : pas de nouvelle demande, pas de fil, pas de message.
create or replace function public.send_friend_request(p_receiver uuid)
returns text
language plpgsql
security definer
set search_path=public
as $$
declare
  v_uid uuid := auth.uid();
  v_name text;
  v_existing public.friend_requests%rowtype;
begin
  if v_uid is null or not public.messaging_entitled(v_uid) then raise exception 'messaging not available'; end if;
  if p_receiver is null or p_receiver = v_uid or not public.messaging_entitled(p_receiver) then raise exception 'invalid recipient'; end if;
  if public.message_is_blocked_pair(v_uid,p_receiver) then raise exception 'contact unavailable'; end if;
  select coalesce(nullif(trim(name),''),'Membre HydroCalc') into v_name from public.profiles where id=v_uid;

  select * into v_existing from public.friend_requests
  where (sender_id=v_uid and receiver_id=p_receiver) or (sender_id=p_receiver and receiver_id=v_uid)
  limit 1 for update;

  if found then
    if v_existing.status = 'accepted' then return 'accepted'; end if;
    if v_existing.status = 'pending' and v_existing.receiver_id = v_uid then
      update public.friend_requests set status='accepted', updated_at=now() where id=v_existing.id;
      return 'accepted';
    end if;
    if v_existing.status = 'pending' and v_existing.sender_id = v_uid then return 'pending'; end if;
  end if;

  if (
    select count(*) from public.friend_requests
    where sender_id=v_uid and created_at > now()-interval '24 hours' and status <> 'accepted'
  ) >= 20 then raise exception 'contact rate limit'; end if;

  if found then
    update public.friend_requests set sender_id=v_uid,receiver_id=p_receiver,sender_name=v_name,status='pending',created_at=now(),updated_at=now() where id=v_existing.id;
  else
    insert into public.friend_requests(sender_id,sender_name,receiver_id,status) values(v_uid,v_name,p_receiver,'pending');
  end if;
  return 'pending';
end;
$$;

create or replace function public.message_get_or_create_thread(p_other uuid)
returns uuid
language plpgsql
security definer
set search_path=public
as $$
declare
  v_uid uuid:=auth.uid(); v_tid uuid; v_a uuid; v_b uuid; v_aname text; v_bname text;
begin
  if v_uid is null or not public.messaging_entitled(v_uid) then raise exception 'messaging not available'; end if;
  if p_other is null or p_other=v_uid or not public.messaging_entitled(p_other) then raise exception 'invalid recipient'; end if;
  if public.message_is_blocked_pair(v_uid,p_other) then raise exception 'contact unavailable'; end if;
  if not exists(select 1 from public.friend_requests f where f.status='accepted' and ((f.sender_id=v_uid and f.receiver_id=p_other) or (f.sender_id=p_other and f.receiver_id=v_uid))) then raise exception 'accepted contact required'; end if;
  perform pg_advisory_xact_lock(hashtextextended(least(v_uid::text,p_other::text)||':'||greatest(v_uid::text,p_other::text),0));
  select id into v_tid from public.message_threads where (user_a_id=v_uid and user_b_id=p_other) or (user_a_id=p_other and user_b_id=v_uid) limit 1;
  if v_tid is not null then return v_tid; end if;
  if v_uid::text<p_other::text then v_a:=v_uid;v_b:=p_other;else v_a:=p_other;v_b:=v_uid;end if;
  select coalesce(nullif(trim(name),''),'Membre HydroCalc') into v_aname from public.profiles where id=v_a;
  select coalesce(nullif(trim(name),''),'Membre HydroCalc') into v_bname from public.profiles where id=v_b;
  insert into public.message_threads(user_a_id,user_b_id,user_a_name,user_b_name,last_message_at) values(v_a,v_b,v_aname,v_bname,now()) returning id into v_tid;
  return v_tid;
end;
$$;

create or replace function public.message_send(p_thread_id uuid,p_content text default null,p_attachment_path text default null,p_attachment_type text default null)
returns uuid
language plpgsql
security definer
set search_path=public
as $$
declare
  v_uid uuid:=auth.uid(); v_t public.message_threads%rowtype; v_other uuid; v_name text; v_id uuid;
  v_content text:=nullif(trim(coalesce(p_content,'')),''); v_preview text;
begin
  if v_uid is null or not public.messaging_entitled(v_uid) then raise exception 'messaging not available'; end if;
  if char_length(coalesce(v_content,''))>5000 then raise exception 'message too long'; end if;
  select * into v_t from public.message_threads where id=p_thread_id for update;
  if not found or (v_t.user_a_id<>v_uid and v_t.user_b_id<>v_uid) then raise exception 'thread access denied'; end if;
  v_other:=case when v_t.user_a_id=v_uid then v_t.user_b_id else v_t.user_a_id end;
  if public.message_is_blocked_pair(v_uid,v_other) then raise exception 'contact unavailable'; end if;
  if v_content is null and nullif(trim(coalesce(p_attachment_path,'')),'') is null then raise exception 'empty message'; end if;
  if p_attachment_path is not null and split_part(p_attachment_path,'/',1)<>v_uid::text then raise exception 'invalid attachment path'; end if;
  select coalesce(nullif(trim(name),''),'Membre HydroCalc') into v_name from public.profiles where id=v_uid;
  insert into public.messages(thread_id,sender_id,sender_name,contenu,attachment_url,attachment_type,is_deleted)
  values(p_thread_id,v_uid,v_name,v_content,nullif(trim(coalesce(p_attachment_path,'')),''),left(coalesce(p_attachment_type,''),120),false) returning id into v_id;
  v_preview:=left(coalesce(v_content,case when p_attachment_path is not null then 'Pièce jointe' else '' end),100);
  update public.message_threads set last_message=v_preview,last_message_at=now(),unread_a=case when user_a_id=v_uid then unread_a else unread_a+1 end,unread_b=case when user_b_id=v_uid then unread_b else unread_b+1 end where id=p_thread_id;
  return v_id;
end;
$$;

revoke all on function public.send_friend_request(uuid) from public;
grant execute on function public.send_friend_request(uuid) to authenticated;
revoke all on function public.message_get_or_create_thread(uuid) from public;
grant execute on function public.message_get_or_create_thread(uuid) to authenticated;
revoke all on function public.message_send(uuid,text,text,text) from public;
grant execute on function public.message_send(uuid,text,text,text) to authenticated;
