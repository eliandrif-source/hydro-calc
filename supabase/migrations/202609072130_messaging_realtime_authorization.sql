-- HydroCalc — autorisation Realtime pour les conversations privées.
-- Les topics de messagerie suivent strictement le format messages:<thread_uuid>.
-- Cette policy ne remplace pas les RLS de public.messages : elle contrôle l'entrée
-- dans le channel privé Realtime. Le réglage projet « Allow public access » doit
-- être désactivé en staging puis en production après déploiement de cette migration.

-- Realtime gère lui-même la table realtime.messages et son RLS. Supabase autorise
-- la création/modification de policies sur cette table.
drop policy if exists "hydrocalc private message channel read" on realtime.messages;
create policy "hydrocalc private message channel read"
on realtime.messages
for select
to authenticated
using (
  realtime.messages.extension = 'postgres_changes'
  and (select realtime.topic()) ~ '^messages:[0-9a-fA-F-]{36}$'
  and exists (
    select 1
    from public.message_threads t
    where t.id::text = split_part((select realtime.topic()), ':', 2)
      and (t.user_a_id = auth.uid() or t.user_b_id = auth.uid())
  )
);

comment on policy "hydrocalc private message channel read" on realtime.messages is
  'Autorise uniquement les participants d un thread HydroCalc à rejoindre son channel privé messages:<uuid>.';
