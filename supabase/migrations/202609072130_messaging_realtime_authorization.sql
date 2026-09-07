-- HydroCalc — autorisation Realtime pour les conversations privées.
-- Les topics de messagerie suivent strictement le format messages:<thread_uuid>.
-- Cette policy contrôle l'entrée dans le channel privé Realtime. Les événements
-- Postgres Changes restent eux-mêmes filtrés par les RLS de public.messages.
-- Le réglage projet « Allow public access » doit être désactivé en staging puis
-- en production après validation de tous les channels utilisés par HydroCalc.
--
-- IMPORTANT : Realtime Authorization documente les extensions `broadcast` et
-- `presence` sur realtime.messages. Postgres Changes peut utiliser un channel
-- privé mais son filtrage de lignes repose sur les RLS de la table source.
-- La policy de join ne doit donc pas exiger une extension fictive
-- `postgres_changes` sur realtime.messages : l'appartenance au thread suffit à
-- autoriser le topic, et public.messages reste la seconde barrière de sécurité.

-- Supabase verrouille le schéma realtime contre les changements structurels,
-- mais autorise explicitement la gestion des policies sur realtime.messages.
drop policy if exists "hydrocalc private message channel read" on realtime.messages;
create policy "hydrocalc private message channel read"
on realtime.messages
for select
to authenticated
using (
  (select realtime.topic()) ~ '^messages:[0-9a-fA-F-]{36}$'
  and exists (
    select 1
    from public.message_threads t
    where t.id::text = split_part((select realtime.topic()), ':', 2)
      and (t.user_a_id = (select auth.uid()) or t.user_b_id = (select auth.uid()))
  )
);

comment on policy "hydrocalc private message channel read" on realtime.messages is
  'Autorise uniquement les participants d un thread HydroCalc à rejoindre son channel privé messages:<uuid>. Les lignes Postgres Changes restent protégées par les RLS de public.messages.';
