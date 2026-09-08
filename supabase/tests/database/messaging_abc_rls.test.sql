begin;

create extension if not exists pgtap with schema extensions;
select plan(10);

-- Fixed UUIDs make failures easy to diagnose while the transaction rollback keeps the suite isolated.
-- A and B are participants. C is an authenticated intruder.
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
values
('10000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000000','authenticated','authenticated','rls-a@hydrocalc.test','',now(),'{}','{}',now(),now()),
('10000000-0000-0000-0000-000000000002','00000000-0000-0000-0000-000000000000','authenticated','authenticated','rls-b@hydrocalc.test','',now(),'{}','{}',now(),now()),
('10000000-0000-0000-0000-000000000003','00000000-0000-0000-0000-000000000000','authenticated','authenticated','rls-c@hydrocalc.test','',now(),'{}','{}',now(),now());

-- handle_new_auth_user creates free profiles; elevate only inside this rolled-back test fixture.
update public.profiles
set plan='pro', trial_used=false, trial_start=null
where id in (
 '10000000-0000-0000-0000-000000000001',
 '10000000-0000-0000-0000-000000000002',
 '10000000-0000-0000-0000-000000000003'
);
update public.profiles set name='Test A' where id='10000000-0000-0000-0000-000000000001';
update public.profiles set name='Test B' where id='10000000-0000-0000-0000-000000000002';
update public.profiles set name='Test C' where id='10000000-0000-0000-0000-000000000003';

insert into public.friend_requests(id,sender_id,sender_name,receiver_id,status)
values('20000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000001','Test A','10000000-0000-0000-0000-000000000002','accepted');

insert into public.message_threads(id,user_a_id,user_b_id,user_a_name,user_b_name,last_message,last_message_at)
values('30000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000002','Test A','Test B','secret AB',now());

insert into public.messages(id,thread_id,sender_id,sender_name,contenu,attachment_url,attachment_type)
values('40000000-0000-0000-0000-000000000001','30000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000001','Test A','secret AB','10000000-0000-0000-0000-000000000001/test.pdf','application/pdf');

-- Emulate PostgREST/Supabase Auth: authenticated role + transaction-local JWT claims.
set local role authenticated;
select set_config('request.jwt.claims','{"role":"authenticated","sub":"10000000-0000-0000-0000-000000000001"}',true);
select is((select count(*)::bigint from public.message_threads),1::bigint,'A can read the AB thread');
select is((select count(*)::bigint from public.messages),1::bigint,'A can read the AB message');
select is((select count(*)::bigint from public.friend_requests),1::bigint,'A can read the accepted A/B contact');

select set_config('request.jwt.claims','{"role":"authenticated","sub":"10000000-0000-0000-0000-000000000002"}',true);
select is((select count(*)::bigint from public.message_threads),1::bigint,'B can read the AB thread');
select is((select count(*)::bigint from public.messages),1::bigint,'B can read the AB message');
select is((select count(*)::bigint from public.friend_requests),1::bigint,'B can read the accepted A/B contact');

select set_config('request.jwt.claims','{"role":"authenticated","sub":"10000000-0000-0000-0000-000000000003"}',true);
select is((select count(*)::bigint from public.message_threads),0::bigint,'C cannot read the AB thread');
select is((select count(*)::bigint from public.messages),0::bigint,'C cannot read the AB message');
select is((select count(*)::bigint from public.friend_requests),0::bigint,'C cannot read the A/B contact relationship');

-- Security-definer RPC must independently reject an intruder, not merely rely on table RLS.
select throws_ok(
  $$select public.message_send('30000000-0000-0000-0000-000000000001'::uuid,'intrusion',null,null)$$,
  'P0001',
  'thread access denied',
  'C cannot send into the AB thread through message_send RPC'
);

reset role;
select set_config('request.jwt.claims','',true);
select * from finish();
rollback;
