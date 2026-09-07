begin;

create extension if not exists pgtap with schema extensions;
select plan(16);

-- Structural guarantees: RLS must remain enabled on every community table exposed to the API.
select ok((select relrowsecurity from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relname='friend_requests'), 'friend_requests RLS enabled');
select ok((select relrowsecurity from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relname='message_threads'), 'message_threads RLS enabled');
select ok((select relrowsecurity from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relname='messages'), 'messages RLS enabled');
select ok((select relrowsecurity from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relname='forum_posts'), 'forum_posts RLS enabled');
select ok((select relrowsecurity from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relname='forum_replies'), 'forum_replies RLS enabled');
select ok((select relrowsecurity from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relname='forum_reports'), 'forum_reports RLS enabled');

-- The authenticated browser may read permitted rows, but community mutations must go through RPC.
select ok(has_table_privilege('authenticated','public.friend_requests','SELECT'), 'authenticated can select friend requests through RLS');
select ok(not has_table_privilege('authenticated','public.friend_requests','INSERT'), 'authenticated cannot insert friend requests directly');
select ok(not has_table_privilege('authenticated','public.message_threads','INSERT'), 'authenticated cannot insert message threads directly');
select ok(not has_table_privilege('authenticated','public.messages','INSERT'), 'authenticated cannot insert messages directly');
select ok(not has_table_privilege('authenticated','public.messages','UPDATE'), 'authenticated cannot update messages directly');
select ok(not has_table_privilege('authenticated','public.messages','DELETE'), 'authenticated cannot delete messages directly');
select ok(not has_table_privilege('authenticated','public.forum_posts','INSERT'), 'authenticated cannot insert forum posts directly');
select ok(not has_table_privilege('authenticated','public.forum_replies','INSERT'), 'authenticated cannot insert forum replies directly');

-- Critical policies/functions must exist. Behavioural A/B/C tests are performed separately on staging.
select ok(exists(select 1 from pg_policies where schemaname='public' and tablename='messages' and policyname='messaging messages own threads'), 'message participant select policy exists');
select ok(exists(select 1 from pg_policies where schemaname='realtime' and tablename='messages' and policyname='hydrocalc private message channel read'), 'private realtime channel policy exists');

select * from finish();
rollback;
