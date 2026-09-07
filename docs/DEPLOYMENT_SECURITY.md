# HydroCalc — Déploiement sécurisé

Dernière vérification : 2026-09-07

Ce document décrit l'ordre de mise en production de la branche `security-hardening`. Un commit GitHub ne déploie ni les migrations Supabase ni les Edge Functions : ces étapes doivent être exécutées sur le projet Supabase cible avant d'exposer le nouveau frontend.

## Principe de déploiement

Ordre recommandé : **sauvegarde → preflight données → migrations SQL → Edge Functions → smoke tests backend → frontend → validation PWA/cache → smoke tests navigateur → surveillance**.

Ne pas publier le frontend sécurisé avant les migrations qui retirent l'autorité du navigateur sur les rôles, quotas, messagerie et modération. Les bridges frontend sont une défense supplémentaire ; l'autorité de sécurité reste le backend/RLS/RPC.

## 1. Sauvegarde et fenêtre de changement

Avant toute migration : créer un backup/restauration vérifiable, relever le SHA Git et les versions des Edge Functions actives, et ne jamais corriger automatiquement des doublons financiers ou communautaires sans examen.

## 2. Preflight obligatoire

Exécuter `supabase/preflight/production_preflight.sql`. Les doublons Stripe, privilèges administrateurs et doublons historiques de messagerie doivent être examinés avant toute migration. Les contrôles communautaires absents sur une installation plus ancienne sont signalés proprement sans rendre le preflight inutilisable.

## 3. Ordre des migrations

Appliquer les fichiers SQL dans cet ordre logique :

1. `20260831_security_hardening.sql`
2. `20260831_auth_entitlements.sql`
3. `20260831_trial_security.sql`
4. `20260901_server_quotas.sql`
5. `20260902_messaging_security.sql`
6. `202609021900_messaging_followup.sql`
7. `202609022030_messaging_blocking_reports.sql`
8. `20260902_forum_foundation.sql`
9. `202609022200_community_moderation_search.sql`
10. `202609072100_realtime_private_messaging.sql`
11. `202609072130_community_integrity.sql`

Après chaque migration, arrêter le déploiement en cas d'erreur. `supabase/schema.sql` n'est pas un script d'installation : seules les migrations versionnées constituent la source de vérité.

La migration Realtime autorise uniquement un participant authentifié à rejoindre le topic privé `messages:<thread_uuid>`. Après validation en staging de tous les usages Realtime du projet, désactiver **Allow public access** dans les réglages Realtime Supabase afin que les channels non privés soient rejetés.

## 4. Edge Functions

Déployer `create-checkout-session`, `create-portal-session`, `stripe-webhook` et `delete-user`. Vérifier les secrets côté serveur, le webhook Stripe et sa signature. Les fonctions HTTP sensibles utilisent une liste d'origines autorisées explicite ; ne pas introduire de wildcard CORS.

## 5. Smoke tests backend avant frontend

Avec deux comptes non-admin A/B, un troisième compte C non participant et un admin, vérifier au minimum :

- impossibilité de modifier `profiles.plan` / `profiles.is_admin` directement ;
- création/révocation des codes Établissement uniquement par RPC et absence d'autorité `etab_codes` locale ;
- quotas consommés par RPC ;
- A et B peuvent accéder à leur conversation, C ne peut ni lire le thread/messages/pièces jointes ni rejoindre `messages:<threadId>` ;
- le blocage empêche demandes, création de thread et nouveaux messages ;
- les pièces jointes sont privées et accessibles par URL signée courte uniquement aux participants ;
- un signalement privé n'expose à l'admin que le message explicitement signalé ;
- le forum refuse les écritures directes et passe par RPC ;
- un membre normal ne voit pas les contenus forum masqués ;
- un même membre ne crée pas une infinité de doublons de signalement sur la même cible ;
- masquer/restaurer une réponse conserve `reply_count` cohérent et une réponse masquée ne reste pas solution ;
- les RPC de modération sont refusées aux non-admins.

## 6. Tests Stripe

Tester checkout Pro/Établissement, activation webhook, renouvellement, annulation, portail, rejeu/idempotence et échec de paiement. Le serveur doit choisir le Price ID. Vérifier aussi que les montants `etab` / `etab_annual` correspondent à la promesse jusqu'à 30 codes d'accès.

## 7. Publication frontend

Publier seulement après validation backend. Tester inscription/confirmation, connexion/déconnexion, découverte invité, calcul/quota, rapports, projets, forum, messagerie, partage, Établissement et Coffre Admin sur desktop et mobile.

Pour la messagerie, tester demande/acceptation, historique paginé, non-lus, channel privé Realtime, pièce jointe, blocage, signalement et déconnexion/reconnexion. Une panne Realtime ne doit pas empêcher l'envoi ou la lecture manuelle des messages.

### En-têtes HTTP

Vérifier sur les réponses réellement servies : `nosniff`, `strict-origin-when-cross-origin`, anti-framing, CSP conforme, `sw.js` sans cache persistant et `/js/*` avec revalidation. Si l'hébergeur n'interprète pas `_headers`, reporter ces règles dans sa configuration native.

## 8. PWA et service worker

Le service worker utilise `hydrocalc-v306-security-20260907`. Il ne met pas en cache les requêtes cross-origin ou portant `Authorization`; HTML/JS/CSS/navigation sont network-first. Vérifier mise à jour d'un appareil existant, disparition des anciens caches, absence de données inter-utilisateurs hors ligne et échec propre des fonctionnalités Supabase en mode avion.

## 9. Validation scientifique

Le CI vérifie les vecteurs de régression des moteurs audités. Cela ne remplace pas la validation métier : formule, unités, hypothèses, domaine de validité, source, date/version et avertissements doivent être conservés pour chaque calculateur professionnel.

## 10. Rollback

Un rollback frontend peut revenir au SHA précédent, mais une migration de base n'est pas supposée réversible automatiquement. Couper les écritures concernées, identifier la migration/données, restaurer le backup si nécessaire ou appliquer une migration corrective revue. Ne jamais improviser de suppression sur comptes, paiements, messages ou projets.

## 11. Critères GO / NO-GO

GO uniquement si : CI vert, preflight propre, migrations appliquées, fonctions déployées, RLS/RPC testées avec plusieurs rôles, isolation Realtime A/B/C vérifiée, Stripe testé, PWA/cache et en-têtes HTTP vérifiés, parcours navigateur testés et backup disponible.

NO-GO si : privilège modifiable côté client, contournement quota, fuite inter-utilisateurs, channel privé accessible à C, pièce jointe publique, signalement/modération incohérents, autorité Établissement locale, réponse API en cache PWA, webhook Stripe non signé/testé ou migration partiellement appliquée.
