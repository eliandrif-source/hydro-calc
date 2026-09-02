-- HydroCalc — suivi messagerie : compatibilité des anciennes pièces jointes et anti-spam contacts.

-- Les anciennes versions stockaient parfois l'URL publique complète du bucket.
-- Le bucket étant désormais privé, on conserve seulement le chemin objet afin que
-- le client puisse demander une URL signée sous contrôle RLS.
update public.messages
set attachment_url = regexp_replace(
  attachment_url,
  '^https://[^/]+/storage/v1/object/public/message-attachments/',
  ''
)
where attachment_url ~ '^https://[^/]+/storage/v1/object/public/message-attachments/';

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
    if v_existing.status = 'pending' and v_existing.sender_id = v_uid then return 'pending'; end if;
  end if;

  if (
    select count(*) from public.friend_requests
    where sender_id=v_uid and created_at > now()-interval '24 hours' and status <> 'accepted'
  ) >= 20 then
    raise exception 'contact rate limit';
  end if;

  if found then
    update public.friend_requests
       set sender_id=v_uid, receiver_id=p_receiver, sender_name=v_name,
           status='pending', created_at=now(), updated_at=now()
     where id=v_existing.id;
  else
    insert into public.friend_requests(sender_id,sender_name,receiver_id,status)
    values(v_uid,v_name,p_receiver,'pending');
  end if;
  return 'pending';
end;
$$;
revoke all on function public.send_friend_request(uuid) from public;
grant execute on function public.send_friend_request(uuid) to authenticated;
