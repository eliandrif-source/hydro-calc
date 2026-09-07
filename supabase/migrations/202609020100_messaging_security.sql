-- HydroCalc — messagerie : autorité serveur, RLS et pièces jointes privées
-- À appliquer avant le bridge frontend js/messaging-security.js.

create extension if not exists pgcrypto;

create table if not exists public.friend_requests (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null references public.profiles(id) on delete cascade,
  sender_name text,
  receiver_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint friend_requests_not_self check (sender_id <> receiver_id),
  constraint friend_requests_status_check check (status in ('pending','accepted','rejected'))
);

create table if not exists public.message_threads (
  id uuid primary key default gen_random_uuid(),
  user_a_id uuid not null references public.profiles(id) on delete cascade,
  user_b_id uuid not null references public.profiles(id) on delete cascade,
  user_a_name text,
  user_b_name text,
  last_message text,
  last_message_at timestamptz,
  unread_a integer not null default 0,
  unread_b integer not null default 0,
  created_at timestamptz not null default now(),
  constraint message_threads_not_self check (user_a_id <> user_b_id),
  constraint message_threads_unread_a_check check (unread_a >= 0),
  constraint message_threads_unread_b_check check (unread_b >= 0)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.message_threads(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  sender_name text,
  contenu text,
  attachment_url text,
  attachment_type text,
  is_deleted boolean not null default false,
  created_at timestamptz not null default now(),
  constraint messages_content_length_check check (char_length(coalesce(contenu,'')) <= 5000)
);

-- Refuse de masquer silencieusement des doublons historiques : ils doivent être résolus avant l'index unique.
do $$
begin
  if exists (
    select 1 from public.friend_requests
    group by least(sender_id::text, receiver_id::text), greatest(sender_id::text, receiver_id::text)
    having count(*) > 1
  ) then
    raise exception 'HydroCalc messaging preflight: duplicate friend request pairs detected';
  end if;
  if exists (
    select 1 from public.message_threads
    group by least(user_a_id::text, user_b_id::text), greatest(user_a_id::text, user_b_id::text)
    having count(*) > 1
  ) then
    raise exception 'HydroCalc messaging preflight: duplicate message thread pairs detected';
  end if;
end $$;

create unique index if not exists friend_requests_unique_pair
  on public.friend_requests (least(sender_id::text, receiver_id::text), greatest(sender_id::text, receiver_id::text));
create unique index if not exists message_threads_unique_pair
  on public.message_threads (least(user_a_id::text, user_b_id::text), greatest(user_a_id::text, user_b_id::text));
create index if not exists messages_thread_created_idx on public.messages(thread_id, created_at);

alter table public.friend_requests enable row level security;
alter table public.message_threads enable row level security;
alter table public.messages enable row level security;

-- Entitlement serveur : Pro, Établissement, Admin ou essai Pro actif 7 jours.
create or replace function public.messaging_entitled(p_uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = p_uid
      and (
        p.is_admin = true
        or p.plan in ('pro','etab')
        or (
          coalesce(p.trial_used,false) = true
          and p.trial_start is not null
          and p.trial_start > now() - interval '7 days'
        )
      )
  );
$$;
revoke all on function public.messaging_entitled(uuid) from public;
grant execute on function public.messaging_entitled(uuid) to authenticated;

-- Lecture minimale : seulement ses demandes, ses fils et les messages de ses fils.
drop policy if exists "messaging friend requests own" on public.friend_requests;
create policy "messaging friend requests own" on public.friend_requests
for select to authenticated
using (auth.uid() = sender_id or auth.uid() = receiver_id);

drop policy if exists "messaging threads own" on public.message_threads;
create policy "messaging threads own" on public.message_threads
for select to authenticated
using (auth.uid() = user_a_id or auth.uid() = user_b_id);

drop policy if exists "messaging messages own threads" on public.messages;
create policy "messaging messages own threads" on public.messages
for select to authenticated
using (
  exists (
    select 1 from public.message_threads t
    where t.id = thread_id
      and (t.user_a_id = auth.uid() or t.user_b_id = auth.uid())
  )
);

-- Les mutations passent par RPC. Cela évite les sender_id/noms/unread forgés côté navigateur.
revoke insert, update, delete on public.friend_requests from authenticated;
revoke insert, update, delete on public.message_threads from authenticated;
revoke insert, update, delete on public.messages from authenticated;
grant select on public.friend_requests, public.message_threads, public.messages to authenticated;

create or replace function public.search_message_members(p_query text)
returns table(id uuid, name text)
language sql
stable
security definer
set search_path = public
as $$
  select p.id, coalesce(nullif(trim(p.name),''), 'Membre HydroCalc') as name
  from public.profiles p
  where public.messaging_entitled(auth.uid())
    and p.id <> auth.uid()
    and public.messaging_entitled(p.id)
    and char_length(trim(coalesce(p_query,''))) >= 2
    and p.name ilike '%' || replace(replace(trim(p_query), '%', '\%'), '_', '\_') || '%' escape '\'
  order by p.name nulls last
  limit 20;
$$;
revoke all on function public.search_message_members(text) from public;
grant execute on function public.search_message_members(text) to authenticated;

create or replace function public.send_friend_request(p_receiver uuid)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_name text;
  v_existing public.friend_requests%rowtype;
begin
  if v_uid is null or not public.messaging_entitled(v_uid) then raise exception 'messaging not available'; end if;
  if p_receiver is null or p_receiver = v_uid or not public.messaging_entitled(p_receiver) then raise exception 'invalid recipient'; end if;
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
    update public.friend_requests
      set sender_id=v_uid, receiver_id=p_receiver, sender_name=v_name, status='pending', updated_at=now()
      where id=v_existing.id;
    return 'pending';
  end if;

  insert into public.friend_requests(sender_id,sender_name,receiver_id,status)
  values(v_uid,v_name,p_receiver,'pending');
  return 'pending';
end;
$$;
revoke all on function public.send_friend_request(uuid) from public;
grant execute on function public.send_friend_request(uuid) to authenticated;

create or replace function public.respond_friend_request(p_request_id uuid, p_accept boolean)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null or not public.messaging_entitled(auth.uid()) then return false; end if;
  update public.friend_requests
     set status = case when p_accept then 'accepted' else 'rejected' end, updated_at=now()
   where id=p_request_id and receiver_id=auth.uid() and status='pending';
  return found;
end;
$$;
revoke all on function public.respond_friend_request(uuid,boolean) from public;
grant execute on function public.respond_friend_request(uuid,boolean) to authenticated;

create or replace function public.message_get_or_create_thread(p_other uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_tid uuid;
  v_a uuid;
  v_b uuid;
  v_aname text;
  v_bname text;
begin
  if v_uid is null or not public.messaging_entitled(v_uid) then raise exception 'messaging not available'; end if;
  if p_other is null or p_other=v_uid or not public.messaging_entitled(p_other) then raise exception 'invalid recipient'; end if;
  if not exists (
    select 1 from public.friend_requests f
    where f.status='accepted'
      and ((f.sender_id=v_uid and f.receiver_id=p_other) or (f.sender_id=p_other and f.receiver_id=v_uid))
  ) then raise exception 'accepted contact required'; end if;

  perform pg_advisory_xact_lock(hashtextextended(least(v_uid::text,p_other::text)||':'||greatest(v_uid::text,p_other::text),0));
  select id into v_tid from public.message_threads
   where (user_a_id=v_uid and user_b_id=p_other) or (user_a_id=p_other and user_b_id=v_uid)
   limit 1;
  if v_tid is not null then return v_tid; end if;

  if v_uid::text < p_other::text then v_a:=v_uid; v_b:=p_other; else v_a:=p_other; v_b:=v_uid; end if;
  select coalesce(nullif(trim(name),''),'Membre HydroCalc') into v_aname from public.profiles where id=v_a;
  select coalesce(nullif(trim(name),''),'Membre HydroCalc') into v_bname from public.profiles where id=v_b;
  insert into public.message_threads(user_a_id,user_b_id,user_a_name,user_b_name,last_message_at)
  values(v_a,v_b,v_aname,v_bname,now()) returning id into v_tid;
  return v_tid;
end;
$$;
revoke all on function public.message_get_or_create_thread(uuid) from public;
grant execute on function public.message_get_or_create_thread(uuid) to authenticated;

create or replace function public.message_send(
  p_thread_id uuid,
  p_content text default null,
  p_attachment_path text default null,
  p_attachment_type text default null
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_t public.message_threads%rowtype;
  v_name text;
  v_id uuid;
  v_content text := nullif(trim(coalesce(p_content,'')),'');
  v_preview text;
begin
  if v_uid is null or not public.messaging_entitled(v_uid) then raise exception 'messaging not available'; end if;
  if char_length(coalesce(v_content,'')) > 5000 then raise exception 'message too long'; end if;
  select * into v_t from public.message_threads where id=p_thread_id for update;
  if not found or (v_t.user_a_id<>v_uid and v_t.user_b_id<>v_uid) then raise exception 'thread access denied'; end if;
  if v_content is null and nullif(trim(coalesce(p_attachment_path,'')),'') is null then raise exception 'empty message'; end if;
  if p_attachment_path is not null and split_part(p_attachment_path,'/',1) <> v_uid::text then raise exception 'invalid attachment path'; end if;
  select coalesce(nullif(trim(name),''),'Membre HydroCalc') into v_name from public.profiles where id=v_uid;

  insert into public.messages(thread_id,sender_id,sender_name,contenu,attachment_url,attachment_type,is_deleted)
  values(p_thread_id,v_uid,v_name,v_content,nullif(trim(coalesce(p_attachment_path,'')),''),left(coalesce(p_attachment_type,''),120),false)
  returning id into v_id;

  v_preview := left(coalesce(v_content, case when p_attachment_path is not null then 'Pièce jointe' else '' end),100);
  update public.message_threads
     set last_message=v_preview,
         last_message_at=now(),
         unread_a=case when user_a_id=v_uid then unread_a else unread_a+1 end,
         unread_b=case when user_b_id=v_uid then unread_b else unread_b+1 end
   where id=p_thread_id;
  return v_id;
end;
$$;
revoke all on function public.message_send(uuid,text,text,text) from public;
grant execute on function public.message_send(uuid,text,text,text) to authenticated;

create or replace function public.message_mark_read(p_thread_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.message_threads
     set unread_a=case when user_a_id=auth.uid() then 0 else unread_a end,
         unread_b=case when user_b_id=auth.uid() then 0 else unread_b end
   where id=p_thread_id and (user_a_id=auth.uid() or user_b_id=auth.uid());
  return found;
end;
$$;
revoke all on function public.message_mark_read(uuid) from public;
grant execute on function public.message_mark_read(uuid) to authenticated;

-- Bucket privé, limité à 10 Mo et aux documents/images utiles au travail technique.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values(
  'message-attachments','message-attachments',false,10485760,
  array[
    'image/jpeg','image/png','image/webp','application/pdf','text/plain','text/csv',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ]
)
on conflict (id) do update set
  public=false,
  file_size_limit=excluded.file_size_limit,
  allowed_mime_types=excluded.allowed_mime_types;

-- Politiques storage : upload seulement dans son préfixe ; lecture seulement par un participant du fil qui référence le chemin.
drop policy if exists "message attachments upload own prefix" on storage.objects;
create policy "message attachments upload own prefix" on storage.objects
for insert to authenticated
with check (
  bucket_id='message-attachments'
  and (storage.foldername(name))[1]=auth.uid()::text
  and public.messaging_entitled(auth.uid())
);

drop policy if exists "message attachments read thread participants" on storage.objects;
create policy "message attachments read thread participants" on storage.objects
for select to authenticated
using (
  bucket_id='message-attachments'
  and exists (
    select 1
    from public.messages m
    join public.message_threads t on t.id=m.thread_id
    where m.attachment_url=name
      and (t.user_a_id=auth.uid() or t.user_b_id=auth.uid())
  )
);

drop policy if exists "message attachments delete own prefix" on storage.objects;
create policy "message attachments delete own prefix" on storage.objects
for delete to authenticated
using (bucket_id='message-attachments' and (storage.foldername(name))[1]=auth.uid()::text);
