# HydroCalc — Déploiement sécurisé

Dernière vérification : 2026-09-02

Ce document décrit l'ordre de mise en production de la branche `security-hardening`. Un commit GitHub ne déploie ni les migrations Supabase ni les Edge Functions : ces étapes doivent être exécutées sur le projet Supabase cible avant d'exposer le nouveau frontend.

## Principe de déploiement

Ordre recommandé : **sauvegarde → préflight données → migrations SQL → Edge Functions → smoke tests backend → frontend → validation PWA/cache → smoke tests navigateur → surveillance**.

Ne pas publier le frontend sécurisé avant les migrations qui retirent l'autorité du navigateur sur les rôles, quotas, messagerie et modération. Les bridges frontend sont une défense supplémentaire ; l'autorité de sécurité reste le backend/RLS/RPC.

## 1. Sauvegarde et fenêtre de changement

Avant toute migration :

- créer un backup/restauration vérifiable de la base Supabase ;
- relever le SHA Git déployé actuellement ;
- relever les versions des Edge Functions actuellement actives ;
- prévoir une fenêtre où les écritures commerciales et communautaires peuvent être suspendues si un preflight échoue ;
- ne jamais corriger automatiquement des doublons financiers ou des conversations : examiner les lignes concernées avant toute suppression/fusion.

## 2. Preflight obligatoire

Les migrations de sécurité refusent volontairement certaines incohérences au lieu de supprimer des données.

### Abonnements Stripe

```sql
select stripe_subscription_id, count(*)
from public.subscriptions
where stripe_subscription_id is not null
group by stripe_subscription_id
having count(*) > 1;
```

Résultat attendu : **0 ligne**.

### Paiements Stripe

```sql
select stripe_payment_id, count(*)
from public.payments
where stripe_payment_id is not null
group by stripe_payment_id
having count(*) > 1;
```

Résultat attendu : **0 ligne**.

### Profils administrateurs

```sql
select id, plan, is_admin
from public.profiles
where is_admin is true or plan = 'admin';
```

Vérifier manuellement que seuls les comptes réellement administrateurs apparaissent. Ne pas modifier ces lignes depuis le navigateur.

### Messagerie : doublons historiques

```sql
select least(sender_id::text,receiver_id::text) a,
       greatest(sender_id::text,receiver_id::text) b,
       count(*)
from public.friend_requests
group by 1,2
having count(*) > 1;

select least(user_a_id::text,user_b_id::text) a,
       greatest(user_a_id::text,user_b_id::text) b,
       count(*)
from public.message_threads
group by 1,2
having count(*) > 1;
```

Résultat attendu : **0 ligne** pour les deux requêtes. Si des doublons existent, conserver l'historique utile et résoudre manuellement les relations avant la migration.

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

Après chaque migration, arrêter le déploiement en cas d'erreur. Ne pas continuer en espérant que la migration suivante répare la précédente.

## 4. Edge Functions

Déployer ensuite les fonctions versionnées dans `supabase/functions/` :

- `create-checkout-session`
- `create-portal-session`
- `stripe-webhook`
- `delete-user`

Vérifier dans l'environnement Supabase que les secrets nécessaires sont configurés côté serveur. Ne jamais placer de secret Stripe ou de clé service-role dans GitHub ou dans le JavaScript navigateur.

Pour Stripe, vérifier que le webhook de production pointe vers la fonction réellement déployée et que son secret de signature correspond à cet endpoint.

## 5. Smoke tests backend avant frontend

Avec deux comptes de test non-admin et un compte admin autorisé, vérifier au minimum :

- un utilisateur ne peut pas modifier `profiles.plan` ou `profiles.is_admin` directement ;
- `create_profile` ne permet pas de choisir un rôle privilégié ;
- `claim_access_code` agit uniquement pour l'utilisateur authentifié ;
- les quotas sont consommés par RPC ;
- un non-admin ne peut pas appeler les RPC de modération ;
- un membre ne lit que ses propres fils/messages ;
- le blocage empêche les nouveaux échanges ;
- un signalement privé n'expose à l'admin que le message signalé ;
- une pièce jointe de messagerie n'est pas publiquement accessible ;
- la recherche forum ne retourne pas les contenus masqués à un membre normal.

## 6. Tests Stripe

Avant de basculer en production commerciale :

- tester checkout Pro et Établissement ;
- vérifier que le serveur choisit le Price ID, jamais le navigateur ;
- vérifier l'activation après événement webhook ;
- vérifier renouvellement, annulation et portail client ;
- vérifier qu'un événement Stripe ne peut pas écraser un administrateur ;
- vérifier l'idempotence d'un webhook rejoué ;
- décider explicitement de la politique en cas d'échec de paiement avant de considérer ce comportement comme définitif.

Le frontend n'embarque plus de clé publishable Stripe de test inutilisée : le checkout est créé par l'Edge Function et le navigateur suit uniquement l'URL Stripe retournée. L'interface Établissement ne calcule plus de quantité ou de prix par siège dans le navigateur. Elle présente un abonnement mensuel/annuel unique et une capacité fonctionnelle allant jusqu'à 30 codes d'accès. Avant publication commerciale, vérifier que les montants Stripe configurés pour `etab` et `etab_annual` correspondent bien à cette promesse produit.

## 7. Publication frontend

Publier seulement après validation backend. Le frontend charge les bridges de sécurité, rapports, communauté et moteurs scientifiques depuis `js/stripe-client.js`.

Le mode **Découvrir sans compte** est un mode de consultation. Les boutons de calcul sont interceptés avant leur handler legacy et demandent la création/connexion à un compte afin que `consume_usage` reste l'autorité sur les quotas. Tester explicitement qu'un invité ne peut pas obtenir davantage de calculs qu'un compte Gratuit en évitant l'authentification.

Vérifier après publication :

- inscription et confirmation e-mail ;
- connexion/déconnexion ;
- mode Découvrir sans compte ;
- essai ;
- calcul et quota ;
- génération de rapport ;
- projets et partage vers forum/messagerie ;
- forum : création, réponse, recherche, filtres, solution, signalement ;
- messagerie : demande, acceptation, envoi, non-lu, realtime, pièce jointe, blocage, signalement ;
- Coffre Admin : annuaire, plans autorisés, suppression utilisateur et file de modération.

Faire ces tests sur desktop et mobile.

### En-têtes HTTP

Le fichier `_headers` configure la base de durcissement attendue sur un hébergement compatible Netlify : `nosniff`, politique de referrer, anti-framing et CSP limitée à `object-src`, `base-uri` et `frame-ancestors`, ainsi que la revalidation du HTML/JS et l'absence de cache du service worker.

Après déploiement, contrôler les **réponses HTTP réellement servies**, pas seulement la présence du fichier dans Git :

- `X-Content-Type-Options: nosniff` ;
- `Referrer-Policy: strict-origin-when-cross-origin` ;
- `X-Frame-Options: DENY` et `frame-ancestors 'none'` ;
- `sw.js` avec `Cache-Control: no-cache, no-store, must-revalidate` ;
- `/js/*` avec revalidation.

Si l'hébergeur final n'interprète pas `_headers`, reporter ces mêmes règles dans sa configuration native avant GO.

## 8. PWA et service worker

Le service worker `sw.js` utilise actuellement le cache de série `hydrocalc-v30x-security-20260902` et applique les règles suivantes :

- aucune requête cross-origin n'est mise en cache ; cela exclut Supabase, Stripe, les CDN et Google Fonts ;
- les navigations, fichiers HTML, JS et CSS locaux sont **network-first**, avec cache uniquement en fallback hors-ligne ;
- seules les ressources statiques locales (images, polices éventuelles, `libs/`) utilisent un cache-first ;
- les requêtes portant un en-tête `Authorization` sont ignorées par le service worker ;
- les anciens caches HydroCalc sont supprimés à l'activation du nouveau worker ;
- `js/pwa-update.js` recharge la page une seule fois lors d'un `controllerchange`, avec garde en `sessionStorage`, afin d'éviter qu'une page ouverte continue à exécuter le bundle précédent.

Après mise en ligne :

1. ouvrir HydroCalc sur un appareil déjà utilisé avant le déploiement ;
2. attendre l'activation du nouveau service worker puis vérifier le rechargement unique ;
3. vérifier dans DevTools/Application que l'ancien cache `hydrocalc-v227` n'existe plus ;
4. confirmer que `auth-security.js`, `report-security.js`, `messaging-security.js` et les autres bridges sont servis dans leur version actuelle ;
5. effectuer une déconnexion/reconnexion avec deux comptes différents et confirmer qu'aucune donnée utilisateur/API n'est disponible hors ligne via le Cache Storage ;
6. tester ensuite le mode avion : l'interface statique peut se charger depuis le cache, mais les fonctionnalités nécessitant Supabase doivent échouer proprement sans données d'un autre utilisateur.

Si un correctif de sécurité frontend est publié après cette version, incrémenter `CACHE_NAME` afin d'éviter toute ambiguïté de cache installée.

## 9. Validation scientifique

Le CI vérifie les vecteurs de régression des moteurs audités. Cela ne remplace pas la validation métier. Pour chaque calculateur publié comme professionnel, conserver : formule, unités, hypothèses, domaine de validité, source, date/version de vérification et avertissements nécessaires.

Ne pas réactiver un modèle volontairement neutralisé ou marqué « à vérifier » simplement pour obtenir un résultat numérique.

## 10. Rollback

Le rollback frontend peut revenir au SHA précédent, mais **ne pas supposer qu'une migration de base est réversible automatiquement**. En cas de problème SQL :

1. couper les écritures concernées ;
2. identifier la migration et les données touchées ;
3. restaurer depuis le backup si nécessaire ou appliquer une migration corrective revue ;
4. ne jamais improviser un `drop`/`delete` sur les tables financières, comptes, messages ou projets.

Un rollback frontend vers une version utilisant un ancien service worker doit également changer son nom de cache ; sinon un appareil peut conserver un mélange de ressources anciennes et nouvelles.

## 11. Critères GO / NO-GO

GO uniquement si : CI vert, preflight sans incohérence non résolue, migrations appliquées, fonctions déployées, RLS/RPC testées avec plusieurs rôles, Stripe testé, service worker/cache vérifié, en-têtes HTTP vérifiés sur le domaine final, parcours navigateur testés et backup disponible.

NO-GO si : doublon financier non compris, possibilité de modifier son rôle/plan côté client, contournement des quotas par le mode invité, fuite inter-utilisateurs, pièce jointe publique, réponse API présente dans le cache PWA, admin non vérifié côté serveur, webhook Stripe non signé/testé, en-têtes attendus absents sur l'hébergement final, ou migration partiellement appliquée.
