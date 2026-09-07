begin;

create extension if not exists pgtap with schema extensions;
select plan(12);

-- A/B are conversation participants, C is unrelated, D is administrator.
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
values
('12000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000000','authenticated','authenticated','msg-a@hydrocalc.test','',now(),'{}','{}',now(),now()),
('12000000-0000-0000-0000-000000000002','00000000-0000-0000-0000-000000000000','authenticated','authenticated','msg-b@hydrocalc.test','',now(),'{}','{}',now(),now()),
('12000000-0000-0000-0000-000000000003','00000000-0000-0000-0000-000000000000','authenticated','authenticated','msg-c@hydrocalc.test','',now(),'{}','{}',now(),now()),
('12000000-0000-0000-0000-000000000004','00000000-0000-0000-0000-000000000000','authenticated','authenticated','msg-admin@hydrocalc.test','',now(),'{}','{}',now(),now());

update public.profiles set name='Message A',plan='pro' where id='12000000-0000-0000-0000-000000000001';
update public.profiles set name='Message B',plan='pro' where id='12000000-0000-0000-0000-000000000002';
update public.profiles set name='Message C',plan='pro' where id='12000000-0000-0000-0000-000000000003';
update public.profiles set name='Message Admin',plan='pro',is_admin=true where id='12000000-0000-0000-0000-000000000004';

insert into public.friend_requests(sender_id,sender_name,receiver_id,status)
values('12000000-0000-0000-0000-000000000001','Message A','12000000-0000-0000-0000-000000000002','accepted');
insert into public.message_threads(id,user_a_id,user_b_id,user_a_name,user_b_name,last_message,last_message_at)
values('32000000-0000-0000-0000-000000000001','12000000-0000-0000-0000-000000000001','12000000-0000-0000-0000-000000000002','Message A','Message B','seed',now());
insert into public.messages(id,thread_id,sender_id,sender_name,contenu,is_deleted)
values
('42000000-0000-0000-0000-000000000001','32000000-0000-0000-0000-000000000001','12000000-0000-0000-0000-000000000001','Message A','Message explicitement signalé',false),
('42000000-0000-0000-0000-000000000002','32000000-0000-0000-0000-000000000001','12000000-0000-0000-0000-000000000002','Message B','Message privé non signalé',false);

set local role authenticated;

-- B can report a message from its own conversation.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"12000000-0000-0000-0000-000000000002"}',true);
select lives_ok($$select public.message_report_private('42000000-0000-0000-0000-000000000001','Contenu inapproprié')$$,'B can report a message in its conversation');
select is((select count(*)::bigint from public.message_reports),1::bigint,'B sees its own report');

-- C cannot report or read the AB private conversation.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"12000000-0000-0000-0000-000000000003"}',true);
select is((select count(*)::bigint from public.messages where thread_id='32000000-0000-0000-0000-000000000001'),0::bigint,'C cannot read AB private messages');
select throws_ok($$select public.message_report_private('42000000-0000-0000-0000-000000000001','Intrusion')$$,'P0001','message access denied','C cannot report a message it cannot access');
select is((select count(*)::bigint from public.message_reports),0::bigint,'C cannot read B report');

-- A blocks B. New messages in either direction are rejected.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"12000000-0000-0000-0000-000000000001"}',true);
select is((select public.message_block_user('12000000-0000-0000-0000-000000000002',true)),true,'A can block B');
select throws_ok($$select public.message_send('32000000-0000-0000-0000-000000000001','Message après blocage',null,null)$$,'P0001','contact unavailable','A cannot send after blocking B');
select set_config('request.jwt.claims','{"role":"authenticated","sub":"12000000-0000-0000-0000-000000000002"}',true);
select throws_ok($$select public.message_send('32000000-0000-0000-0000-000000000001','Réponse après blocage',null,null)$$,'P0001','contact unavailable','B cannot send to A after A blocks B');

-- Administrator moderation is scoped to explicitly reported targets.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"12000000-0000-0000-0000-000000000004"}',true);
select is((select count(*)::bigint from public.community_admin_reports('pending') where kind='message'),1::bigint,'admin receives exactly the reported private message');
select is((select content from public.community_admin_reports('pending') where kind='message'),'Message explicitement signalé','admin report view exposes the reported message content');
select is((select count(*)::bigint from public.messages where thread_id='32000000-0000-0000-0000-000000000001'),0::bigint,'admin cannot browse arbitrary private messages through table RLS');
select is((select count(*)::bigint from public.community_admin_reports('pending') where kind='message' and content='Message privé non signalé'),0::bigint,'unreported private message is absent from admin moderation feed');

reset role;
select set_config('request.jwt.claims','',true);
select * from finish();
rollback;
