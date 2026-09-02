## Objet

Décrire brièvement le problème traité et l'impact utilisateur/métier.

## Type de changement

- [ ] Sécurité / authentification / RLS
- [ ] Paiement / abonnement / quota
- [ ] Calcul scientifique / réglementation
- [ ] Rapport / export
- [ ] Forum / messagerie / données utilisateur
- [ ] UX / PWA / navigation
- [ ] Documentation / maintenance

## Vérifications obligatoires

- [ ] Le changement est développé hors `main`.
- [ ] Aucun secret, clé service-role ou clé Stripe secrète n'est ajouté au dépôt.
- [ ] Le navigateur ne devient pas l'autorité sur un rôle, plan, quota ou entitlement.
- [ ] Les données utilisateur nouvelles sont protégées par RLS/RPC ou isolées localement par compte selon leur nature.
- [ ] Aucun contenu utilisateur n'est injecté comme HTML/JavaScript de confiance.
- [ ] Toute nouvelle dépendance externe/CDN est explicitement revue et documentée.
- [ ] Toute modification du service worker conserve l'isolation des API et incrémente le cache si nécessaire.
- [ ] Les tests de régression pertinents ont été ajoutés ou mis à jour.
- [ ] Le workflow CI complet est vert.

## Si migration Supabase

- [ ] Le preflight nécessaire existe.
- [ ] L'ordre de migration est documenté.
- [ ] Les politiques RLS/RPC ont été testées avec au moins deux utilisateurs et un admin lorsque pertinent.
- [ ] Le rollback ou la stratégie corrective est documenté.

## Si Stripe / commercial

- [ ] Le serveur choisit le Price ID et l'entitlement.
- [ ] Le webhook est vérifié et idempotent.
- [ ] La copie commerciale correspond réellement au comportement Stripe.
- [ ] Le parcours renouvellement / annulation / échec de paiement a été considéré.

## Si calcul scientifique / réglementaire

- [ ] Formule et unités vérifiées.
- [ ] Hypothèses et domaine de validité explicités.
- [ ] Source technique/réglementaire et date de vérification connues.
- [ ] Un vecteur numérique de régression couvre le changement.
- [ ] Une hypothèse pédagogique n'est pas présentée comme une exigence réglementaire.

## Validation avant merge

- [ ] `docs/PRODUCTION_SMOKE_TESTS.md` a été exécuté pour les zones concernées.
- [ ] Les écrans touchés ont été contrôlés sur mobile et desktop lorsque pertinent.
- [ ] Les PDF/exports touchés ont été vérifiés visuellement lorsque pertinent.
- [ ] La PR peut être sortie du mode Draft.
