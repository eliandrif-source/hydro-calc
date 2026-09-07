# HydroCalc — stratégie Supabase staging → production

Dernière vérification : 2026-09-07.

## Principe

HydroCalc ne doit pas tester une migration nouvelle directement sur la base de production. Les migrations versionnées de `supabase/migrations/` sont la source de vérité.

Flux cible :

`branche de travail → CI → staging → smoke tests → PR validée → production`

## Environnements

- **Local / CI** : validation syntaxique, tests de régression et reconstruction des migrations.
- **Staging** : projet Supabase séparé, sans données personnelles de production, utilisé pour appliquer toutes les migrations et déployer les Edge Functions avant release.
- **Production** : projet utilisé par hydrocalc.fr. Aucune modification de schéma manuelle via le Dashboard après adoption du workflow de migrations.

Ne jamais copier les mots de passe, tokens, données personnelles ou clés de production vers staging. Les jeux de données de test doivent être synthétiques.

## Variables GitHub attendues

Les secrets ne doivent jamais être committés. Pour un déploiement automatisé, utiliser les secrets GitHub chiffrés adaptés aux environnements, notamment :

- `SUPABASE_ACCESS_TOKEN`
- `STAGING_PROJECT_ID`
- `STAGING_DB_PASSWORD`
- `PRODUCTION_PROJECT_ID`
- `PRODUCTION_DB_PASSWORD`

Les secrets Stripe restent configurés côté Edge Functions / environnement Supabase, jamais dans le bundle navigateur.

## Staging

Avant toute production :

1. lancer les tests GitHub existants ;
2. exécuter `supabase/preflight/production_preflight.sql` contre l'environnement concerné lorsque pertinent ;
3. vérifier le projet ciblé avant toute commande distante ;
4. prévisualiser les migrations avec `supabase db push --dry-run` ;
5. appliquer les migrations sur staging ;
6. déployer les Edge Functions sur staging ;
7. exécuter `docs/PRODUCTION_SMOKE_TESTS.md` avec au minimum deux comptes membres et un compte administrateur de test ;
8. vérifier RLS, Auth, Storage privé, quotas, forum, messagerie, rapports et Stripe en mode test ;
9. ne promouvoir la release que si tous les contrôles bloquants sont verts.

`supabase db reset --linked` est destructif : il est interdit sur production. Il ne peut être utilisé que sur un environnement de développement/staging explicitement jetable.

## Production

La production doit être déployée seulement après validation staging.

Séquence :

1. sauvegarde / capacité de restauration vérifiée ;
2. preflight en lecture seule ;
3. `supabase db push --dry-run` ;
4. validation humaine du plan de migration ;
5. application des migrations versionnées ;
6. déploiement des Edge Functions ;
7. smoke tests production non destructifs ;
8. contrôle des logs, Auth, RLS, Stripe webhook et erreurs navigateur ;
9. surveillance renforcée après release.

Ne jamais utiliser `--include-seed` sur production.

## Garde-fous CI/CD

Le déploiement production ne doit pas être déclenché depuis une branche de fonctionnalité. Une future GitHub Action de production devra :

- cibler uniquement `main` ou un déclenchement manuel protégé ;
- utiliser un GitHub Environment `production` avec approbation si disponible ;
- exécuter les tests avant toute mutation distante ;
- faire un `db push --dry-run` avant le push réel ;
- ne jamais afficher les secrets dans les logs ;
- échouer immédiatement si le projet ciblé n'est pas celui attendu.

La PR `security-hardening` reste Draft tant que staging, Supabase réel, Stripe et les smoke tests ne sont pas validés.

## Clés API Supabase

Préparer la migration progressive :

- navigateur : clé publishable (`sb_publishable_...`) ;
- backend / fonctions : clé secret (`sb_secret_...`) lorsque le cas d'usage l'exige ;
- ne désactiver les anciennes clés qu'après inventaire et validation de tous les consommateurs.

Aucune clé secret/service-role ne doit apparaître dans les fichiers frontend ou dans le dépôt public.
