begin;

create extension if not exists pgtap with schema extensions;
select plan(10);

-- Synthetic members. Fixed UUIDs keep the test deterministic.
insert into auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at, aud, role)
values
 ('a1000000-0000-0000-0000-000000000001','blocks-a@hydrocalc.test','',now(),now(),now(),'authenticated','authenticated'),
 ('b1000000-0000-0000-0000-000000000002','blocks-b@hydrocalc.test','',now(),now(),now(),'authenticated','authenticated'),
 ('c1000000-0000-0000-0000-000000000003','blocks-c@hydrocalc.test','',now(),now(),now(),'authenticated','authenticated')
on conflict (id) do nothing;

insert into public.profiles (id,email,name,plan,is_admin)
values
 ('a1000000-0000-0000-0000-000000000001','blocks-a@hydrocalc.test','Blocks A','pro',false),
 ('b1000000-0000-0000-0000-000000000002','blocks-b@hydrocalc.test','Blocks B','pro',false),
 ('c1000000-0000-0000-0000-000000000003','blocks-c@hydrocalc.test','Blocks C','pro',false)
on conflict (id) do update set plan='pro', is_admin=false;

set local role authenticated;
select set_config('request.jwt.claim.role','authenticated',true);

-- A blocks B through the only supported write path.
select set_config('request.jwt.claim.sub','a1000000-0000-0000-0000-000000000001',true);
select ok(public.message_block_user('b1000000-0000-0000-0000-000000000002'::uuid,true),'A can block B');
select results_eq(
  $$select count(*)::bigint from public.message_blocks$$,
  array[1::bigint],
  'A sees exactly A own block list'
);
select results_eq(
  $$select blocked_id from public.message_blocks order by created_at$$,
  array['b1000000-0000-0000-0000-000000000002'::uuid],
  'A sees B in A blocked members'
);
select throws_ok(
  $$insert into public.message_blocks(blocker_id,blocked_id) values ('a1000000-0000-0000-0000-000000000001','c1000000-0000-0000-0000-000000000003')$$,
  '42501',
  null,
  'Client cannot bypass RPC with direct block insert'
);

-- B cannot inspect or alter A's private block list.
select set_config('request.jwt.claim.sub','b1000000-0000-0000-0000-000000000002',true);
select results_eq(
  $$select count(*)::bigint from public.message_blocks$$,
  array[0::bigint],
  'B cannot see that A blocked B'
);
select throws_ok(
  $$delete from public.message_blocks where blocker_id='a1000000-0000-0000-0000-000000000001'::uuid and blocked_id='b1000000-0000-0000-0000-000000000002'::uuid$$,
  '42501',
  null,
  'B cannot directly remove A block'
);

-- C also cannot discover A's block relationship.
select set_config('request.jwt.claim.sub','c1000000-0000-0000-0000-000000000003',true);
select results_eq(
  $$select count(*)::bigint from public.message_blocks$$,
  array[0::bigint],
  'Unrelated C cannot inspect A block list'
);
select ok(not public.message_block_user('c1000000-0000-0000-0000-000000000003'::uuid,true),'C cannot block self');

-- Only A can unblock B, via the RPC.
select set_config('request.jwt.claim.sub','a1000000-0000-0000-0000-000000000001',true);
select ok(public.message_block_user('b1000000-0000-0000-0000-000000000002'::uuid,false),'A can unblock B');
select results_eq(
  $$select count(*)::bigint from public.message_blocks$$,
  array[0::bigint],
  'A block list is empty after unblock'
);

select * from finish();
rollback;
