begin;

create extension if not exists pgtap with schema extensions;
select plan(9);

-- A owns the attachment path, B is the other participant, C is an authenticated intruder.
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
values
('11000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000000','authenticated','authenticated','storage-a@hydrocalc.test','',now(),'{}','{}',now(),now()),
('11000000-0000-0000-0000-000000000002','00000000-0000-0000-0000-000000000000','authenticated','authenticated','storage-b@hydrocalc.test','',now(),'{}','{}',now(),now()),
('11000000-0000-0000-0000-000000000003','00000000-0000-0000-0000-000000000000','authenticated','authenticated','storage-c@hydrocalc.test','',now(),'{}','{}',now(),now());

update public.profiles
set plan='pro', trial_used=false, trial_start=null
where id in (
 '11000000-0000-0000-0000-000000000001',
 '11000000-0000-0000-0000-000000000002',
 '11000000-0000-0000-0000-000000000003'
);

insert into public.message_threads(id,user_a_id,user_b_id,user_a_name,user_b_name,last_message,last_message_at)
values('31000000-0000-0000-0000-000000000001','11000000-0000-0000-0000-000000000001','11000000-0000-0000-0000-000000000002','Storage A','Storage B','attachment',now());

-- Seed object metadata and the message reference as the test owner. Tests run in a rollback transaction.
insert into storage.objects(bucket_id,name,owner_id,metadata)
values('message-attachments','11000000-0000-0000-0000-000000000001/secret.pdf','11000000-0000-0000-0000-000000000001','{}'::jsonb);

insert into public.messages(id,thread_id,sender_id,sender_name,contenu,attachment_url,attachment_type)
values('41000000-0000-0000-0000-000000000001','31000000-0000-0000-0000-000000000001','11000000-0000-0000-0000-000000000001','Storage A','private attachment','11000000-0000-0000-0000-000000000001/secret.pdf','application/pdf');

-- A: participant and path owner. Direct DELETE is intentionally not exercised here:
-- current Supabase Storage protects direct table deletion and requires the Storage API.
set local role authenticated;
select set_config('request.jwt.claims','{"role":"authenticated","sub":"11000000-0000-0000-0000-000000000001"}',true);
select is((select count(*)::bigint from storage.objects where bucket_id='message-attachments'),1::bigint,'A can read attachment metadata referenced by the AB thread');
select ok(
  exists(select 1 from pg_policies where schemaname='storage' and tablename='objects' and policyname='message attachments delete own prefix' and cmd='DELETE'),
  'delete policy exists for Storage API own-prefix deletion'
);
select lives_ok($$insert into storage.objects(bucket_id,name,owner_id,metadata) values('message-attachments','11000000-0000-0000-0000-000000000001/upload-test.pdf','11000000-0000-0000-0000-000000000001','{}'::jsonb)$$,'A can insert metadata in own attachment prefix');

-- B: participant can read A's referenced attachment, but cannot upload into A's prefix.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"11000000-0000-0000-0000-000000000002"}',true);
select is((select count(*)::bigint from storage.objects where bucket_id='message-attachments' and name='11000000-0000-0000-0000-000000000001/secret.pdf'),1::bigint,'B can read A attachment referenced by their shared thread');
select throws_ok(
 $$insert into storage.objects(bucket_id,name,owner_id,metadata) values('message-attachments','11000000-0000-0000-0000-000000000001/b-intrusion.pdf','11000000-0000-0000-0000-000000000002','{}'::jsonb)$$,
 '42501',
 'new row violates row-level security policy for table "objects"',
 'B cannot upload into A attachment prefix'
);

-- C: non-participant cannot read the referenced object and cannot upload into A's prefix.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"11000000-0000-0000-0000-000000000003"}',true);
select is((select count(*)::bigint from storage.objects where bucket_id='message-attachments' and name='11000000-0000-0000-0000-000000000001/secret.pdf'),0::bigint,'C cannot read AB attachment metadata');
select throws_ok(
 $$insert into storage.objects(bucket_id,name,owner_id,metadata) values('message-attachments','11000000-0000-0000-0000-000000000001/c-intrusion.pdf','11000000-0000-0000-0000-000000000003','{}'::jsonb)$$,
 '42501',
 'new row violates row-level security policy for table "objects"',
 'C cannot upload into A attachment prefix'
);
select ok(
  not exists(
    select 1 from pg_policies
    where schemaname='storage' and tablename='objects'
      and policyname='message attachments delete own prefix'
      and coalesce(qual,'') like '%blocked_id%'
  ),
  'delete policy remains scoped to the authenticated owner prefix, not arbitrary users'
);
select is((select count(*)::bigint from storage.objects where bucket_id='message-attachments' and name='11000000-0000-0000-0000-000000000001/secret.pdf'),0::bigint,'C still cannot observe the protected attachment');

reset role;
select set_config('request.jwt.claims','',true);
select * from finish();
rollback;
