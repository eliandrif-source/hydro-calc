# Politique de sécurité HydroCalc

HydroCalc manipule des comptes utilisateurs, des projets techniques, des abonnements et des échanges communautaires. Les problèmes de sécurité doivent donc être signalés de manière responsable.

## Versions suivies

La branche `main` représente la version publiée. Les correctifs en préparation passent par une branche et une pull request avec CI avant intégration.

## Signaler une vulnérabilité

Ne publiez pas dans une issue publique :

- clé secrète ou jeton d'accès ;
- possibilité d'accéder aux données d'un autre utilisateur ;
- élévation de privilège ou obtention du rôle administrateur ;
- contournement de paiement/quota donnant un entitlement serveur ;
- lecture d'une conversation privée ou d'une pièce jointe privée ;
- injection XSS reproductible ;
- contournement de signature Stripe/webhook ;
- vulnérabilité permettant une modification/destruction de données.

Utilisez de préférence le mécanisme privé **GitHub Security Advisories / Private vulnerability reporting** du dépôt lorsqu'il est disponible. Si ce canal n'est pas activé, contactez le mainteneur par un canal privé avant toute publication de détails exploitables.

Le signalement doit contenir le minimum nécessaire : composant affecté, préconditions, étapes de reproduction, impact, et proposition de correction si connue. N'incluez jamais de données personnelles réelles d'un tiers.

## Principes de sécurité du projet

- Supabase/RLS/RPC est l'autorité sur identités, rôles, plans, quotas et données communautaires.
- Le navigateur ne doit jamais pouvoir s'attribuer `admin`, `pro` ou `etab`.
- Les Price IDs et entitlements Stripe sont décidés côté serveur.
- Les pièces jointes privées ne doivent pas être servies par URL publique permanente.
- Les contenus utilisateurs sont rendus comme texte ou via DOM sûr, jamais comme HTML de confiance.
- Le service worker ne met jamais en cache les réponses API/Supabase/Stripe.
- Aucun secret de production ne doit être commité. Les clés publiques/anon ne constituent pas une barrière de sécurité ; la sécurité repose sur RLS, RPC et validation serveur.

## Avant publication d'un correctif sensible

Tout correctif touchant authentification, paiement, RLS, messagerie, rapports ou calcul scientifique critique doit :

1. être développé hors `main` ;
2. inclure une régression automatisée lorsque c'est possible ;
3. passer le workflow CI complet ;
4. être validé sur l'environnement réel concerné avant fusion/déploiement ;
5. inclure une procédure de rollback lorsque la base ou les entitlements sont modifiés.

Voir aussi `docs/DEPLOYMENT_SECURITY.md` et `docs/PRODUCTION_SMOKE_TESTS.md`.
