-- HydroCalc — durcissement final modération, confidentialité et listes de blocage.
-- Migration additive : ne donne jamais à l'admin un navigateur de conversations privées.

-- Helper admin : search_path vide, noms qualifiés.
create or replace function public.hc_is_admin(p_uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce((select p.is_admin from public.profiles p where p.id = p_uid), false);
$$;
revoke all on function public.hc_is_admin(uuid) from public, anon;
grant execute on function public.hc_is_admin(uuid) to authenticated;

-- Un déclarant ne doit jamais lire les notes internes, la décision détaillée ou l'identité du modérateur.
drop policy if exists "message reports own or admin" on public.message_reports;
drop policy if exists "message reports admin read" on public.message_reports;
create policy "message reports admin read" on public.message_reports
for select to authenticated
using ((select public.hc_is_admin(auth.uid())));

-- Vue RPC minimale des signalements du membre, sans champs internes de modération.
create or replace function public.message_my_reports()
returns table(report_id uuid, message_id uuid, reason text, status text, created_at timestamptz, reviewed_at timestamptz)
language sql
stable
security definer
set search_path = ''
as $$
  select r.id, r.message_id, r.reason, r.status, r.created_at, r.reviewed_at
  from public.message_reports r
  where r.reporter_id = auth.uid()
  order by r.created_at desc;
$$;
revoke all on function public.message_my_reports() from public, anon;
grant execute on function public.message_my_reports() to authenticated;

-- Liste personnelle des membres bloqués. L'utilisateur bloqué ne peut pas savoir qui l'a bloqué.
create or replace function public.message_my_blocks()
returns table(blocked_id uuid, blocked_name text, blocked_at timestamptz)
language sql
stable
security definer
set search_path = ''
as $$
  select b.blocked_id,
         coalesce(nullif(trim(p.name), ''), 'Membre HydroCalc'),
         b.created_at
  from public.message_blocks b
  left join public.profiles p on p.id = b.blocked_id
  where b.blocker_id = auth.uid()
  order by b.created_at desc;
$$;
revoke all on function public.message_my_blocks() from public, anon;
grant execute on function public.message_my_blocks() to authenticated;

-- Notifications durables destinées uniquement aux administrateurs concernés.
create table if not exists public.admin_notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_admin_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null check (kind in ('message_report','forum_report','moderation')), 
  report_id uuid,
  title text not null check (char_length(title) between 1 and 180),
  created_at timestamptz not null default now(),
  read_at timestamptz
);
create index if not exists admin_notifications_recipient_idx
  on public.admin_notifications(recipient_admin_id, read_at, created_at desc);
alter table public.admin_notifications enable row level security;
revoke all on public.admin_notifications from anon;
revoke insert, update, delete on public.admin_notifications from authenticated;
grant select on public.admin_notifications to authenticated;
drop policy if exists "admin notifications own" on public.admin_notifications;
create policy "admin notifications own" on public.admin_notifications
for select to authenticated
using (recipient_admin_id = auth.uid() and (select public.hc_is_admin(auth.uid())));

create or replace function public.hc_notify_admins_message_report()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.admin_notifications(recipient_admin_id, kind, report_id, title)
  select p.id, 'message_report', new.id, 'Nouveau signalement à examiner'
  from public.profiles p
  where p.is_admin = true;
  return new;
end;
$$;
revoke all on function public.hc_notify_admins_message_report() from public, anon, authenticated;

drop trigger if exists message_report_notify_admins on public.message_reports;
create trigger message_report_notify_admins
after insert on public.message_reports
for each row execute function public.hc_notify_admins_message_report();

create or replace function public.moderation_notifications(p_limit integer default 50)
returns table(id uuid, kind text, report_id uuid, title text, created_at timestamptz, read_at timestamptz)
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.hc_is_admin(auth.uid()) then raise exception 'admin required'; end if;
  return query
    select n.id,n.kind,n.report_id,n.title,n.created_at,n.read_at
    from public.admin_notifications n
    where n.recipient_admin_id=auth.uid()
    order by n.created_at desc
    limit greatest(1,least(coalesce(p_limit,50),100));
end;
$$;
revoke all on function public.moderation_notifications(integer) from public, anon;
grant execute on function public.moderation_notifications(integer) to authenticated;

create or replace function public.moderation_mark_notification_read(p_notification_id uuid)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.hc_is_admin(auth.uid()) then raise exception 'admin required'; end if;
  update public.admin_notifications
     set read_at=coalesce(read_at,now())
   where id=p_notification_id and recipient_admin_id=auth.uid();
  return found;
end;
$$;
revoke all on function public.moderation_mark_notification_read(uuid) from public, anon;
grant execute on function public.moderation_mark_notification_read(uuid) to authenticated;

-- Une décision n'est possible qu'une fois tant qu'elle n'est pas explicitement réouverte par une future migration/processus.
create or replace function public.moderation_decide_report(
  p_report_id uuid,
  p_decision text,
  p_note text default null,
  p_suspend_until timestamptz default null
) returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_admin uuid:=auth.uid();
  v_target uuid;
  v_status text;
  v_note text:=nullif(trim(coalesce(p_note,'')),'');
begin
  if not public.hc_is_admin(v_admin) then raise exception 'admin required'; end if;
  if p_decision not in ('no_action','warning','suspend','ban') then raise exception 'invalid decision'; end if;
  if v_note is not null and char_length(v_note)>2000 then raise exception 'note too long'; end if;

  select m.sender_id,r.status into v_target,v_status
  from public.message_reports r join public.messages m on m.id=r.message_id
  where r.id=p_report_id for update of r;
  if v_target is null then raise exception 'report not found'; end if;
  if v_status <> 'pending' then raise exception 'report already decided'; end if;
  if v_target=v_admin then raise exception 'self sanction forbidden'; end if;
  if public.hc_is_admin(v_target) and p_decision in ('warning','suspend','ban') then raise exception 'admin sanction requires separate governance'; end if;
  if p_decision='suspend' and (p_suspend_until is null or p_suspend_until<=now()) then raise exception 'invalid suspension end'; end if;

  update public.message_reports
     set status='reviewed',reviewed_at=now(),reviewed_by=v_admin,decision=p_decision,admin_note=v_note
   where id=p_report_id;

  if p_decision in ('warning','suspend','ban') then
    insert into public.moderation_sanctions(user_id,report_id,action,reason,ends_at,created_by)
    values(v_target,p_report_id,p_decision,coalesce(v_note,'Décision de modération HydroCalc'),
      case when p_decision='suspend' then p_suspend_until else null end,v_admin);
  end if;
  insert into public.moderation_audit_log(admin_id,report_id,target_user_id,action,note)
  values(v_admin,p_report_id,v_target,p_decision,v_note);
  return true;
end;
$$;
revoke all on function public.moderation_decide_report(uuid,text,text,timestamptz) from public, anon;
grant execute on function public.moderation_decide_report(uuid,text,text,timestamptz) to authenticated;

-- Lever une sanction est une action admin explicite et auditée.
create or replace function public.moderation_lift_sanction(p_sanction_id uuid, p_note text default null)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_admin uuid:=auth.uid();
  v_target uuid;
  v_report uuid;
  v_note text:=nullif(trim(coalesce(p_note,'')),'');
begin
  if not public.hc_is_admin(v_admin) then raise exception 'admin required'; end if;
  if v_note is not null and char_length(v_note)>2000 then raise exception 'note too long'; end if;
  update public.moderation_sanctions
     set active=false
   where id=p_sanction_id and active=true
   returning user_id,report_id into v_target,v_report;
  if v_target is null then return false; end if;
  insert into public.moderation_audit_log(admin_id,report_id,target_user_id,action,note)
  values(v_admin,v_report,v_target,'lift_sanction',v_note);
  return true;
end;
$$;
revoke all on function public.moderation_lift_sanction(uuid,text) from public, anon;
grant execute on function public.moderation_lift_sanction(uuid,text) to authenticated;
