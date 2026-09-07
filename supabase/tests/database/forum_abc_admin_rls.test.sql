begin;

create extension if not exists pgtap with schema extensions;
select plan(18);

-- A = post author, B = normal member/replier, C = unrelated member, D = administrator.
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
values
('11000000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000000','authenticated','authenticated','forum-a@hydrocalc.test','',now(),'{}','{}',now(),now()),
('11000000-0000-0000-0000-000000000002','00000000-0000-0000-0000-000000000000','authenticated','authenticated','forum-b@hydrocalc.test','',now(),'{}','{}',now(),now()),
('11000000-0000-0000-0000-000000000003','00000000-0000-0000-0000-000000000000','authenticated','authenticated','forum-c@hydrocalc.test','',now(),'{}','{}',now(),now()),
('11000000-0000-0000-0000-000000000004','00000000-0000-0000-0000-000000000000','authenticated','authenticated','forum-admin@hydrocalc.test','',now(),'{}','{}',now(),now());

update public.profiles set name='Forum A', plan='pro' where id='11000000-0000-0000-0000-000000000001';
update public.profiles set name='Forum B', plan='pro' where id='11000000-0000-0000-0000-000000000002';
update public.profiles set name='Forum C', plan='pro' where id='11000000-0000-0000-0000-000000000003';
update public.profiles set name='Forum Admin', plan='pro', is_admin=true where id='11000000-0000-0000-0000-000000000004';

set local role authenticated;

-- A creates a post through the authoritative RPC.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"11000000-0000-0000-0000-000000000001"}',true);
select lives_ok(
  $$select public.forum_create_post('hydraulique','Essai hydraulique HydroCalc','Contenu technique suffisamment long pour le test forum.')$$,
  'A can create a forum post through the RPC'
);
select is((select count(*)::bigint from public.forum_posts where author_id=auth.uid()),1::bigint,'A sees the post it created');

-- B can read and reply to an open post.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"11000000-0000-0000-0000-000000000002"}',true);
select is((select count(*)::bigint from public.forum_posts where title='Essai hydraulique HydroCalc'),1::bigint,'B can read a visible forum post');
select lives_ok(
  $$select public.forum_reply((select id from public.forum_posts where title='Essai hydraulique HydroCalc'),'Réponse technique B')$$,
  'B can reply to an open forum post'
);
select is((select count(*)::bigint from public.forum_replies where author_id=auth.uid()),1::bigint,'B sees its visible reply');

-- C cannot mark B's reply as solution because C does not own the post.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"11000000-0000-0000-0000-000000000003"}',true);
select is(
  (select public.forum_mark_solution(
    (select id from public.forum_posts where title='Essai hydraulique HydroCalc'),
    (select id from public.forum_replies where author_name='Forum B')
  )),false,'C cannot mark another member''s post as solved'
);
select lives_ok(
  $$select public.forum_report((select id from public.forum_posts where title='Essai hydraulique HydroCalc'),null,'Signalement de test')$$,
  'C can report visible content'
);
select is((select count(*)::bigint from public.forum_reports),1::bigint,'C only sees its own report');

-- A can accept B's visible reply as the solution.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"11000000-0000-0000-0000-000000000001"}',true);
select is(
  (select public.forum_mark_solution(
    (select id from public.forum_posts where title='Essai hydraulique HydroCalc'),
    (select id from public.forum_replies where author_name='Forum B')
  )),true,'A can mark a visible reply as solution on its own post'
);
select is((select status from public.forum_posts where title='Essai hydraulique HydroCalc'),'solved','marking a solution solves the post');
select ok((select is_solution from public.forum_replies where author_name='Forum B'),'accepted reply is flagged as solution');

-- A is not an admin and cannot moderate.
select throws_ok(
  $$select public.forum_admin_moderate('reply',(select id from public.forum_replies where author_name='Forum B'),'hide')$$,
  'P0001','admin required','A cannot use administrator moderation RPC'
);

-- Admin can see the report, hide the reply and the integrity migration recomputes reply_count.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"11000000-0000-0000-0000-000000000004"}',true);
select is((select count(*)::bigint from public.forum_reports),1::bigint,'admin can read member reports');
select is(
  (select public.forum_admin_moderate('reply',(select id from public.forum_replies where author_name='Forum B'),'hide')),true,
  'admin can hide a forum reply'
);
select ok((select is_hidden from public.forum_replies where author_name='Forum B'),'moderated reply is hidden');
select is((select reply_count from public.forum_posts where title='Essai hydraulique HydroCalc'),0,'hiding the reply recomputes visible reply_count');
select ok(not (select is_solution from public.forum_replies where author_name='Forum B'),'hiding an accepted reply clears solution flag');

-- Normal members no longer see the hidden reply; admin still does via RLS.
select set_config('request.jwt.claims','{"role":"authenticated","sub":"11000000-0000-0000-0000-000000000003"}',true);
select is((select count(*)::bigint from public.forum_replies where author_name='Forum B'),0::bigint,'C cannot read a hidden reply');
select throws_ok(
  $$select public.forum_report(null,(select id from public.forum_replies where author_name='Forum B'),'Hidden reply')$$,
  'P0001','reply not available','hidden replies cannot be reported as available content'
);

reset role;
select set_config('request.jwt.claims','',true);
select * from finish();
rollback;
