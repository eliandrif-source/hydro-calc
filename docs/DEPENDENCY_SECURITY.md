# HydroCalc — Sécurité des dépendances externes

Dernière revue : 2026-09-02

HydroCalc est encore une application JavaScript sans bundler : quelques dépendances sont chargées directement depuis des CDN. Cette architecture est acceptable comme étape transitoire, mais une mise en production reproductible exige de connaître précisément chaque dépendance externe et d'empêcher l'ajout silencieux de nouveaux scripts.

## Dépendances actuelles du shell principal

- Google Fonts : polices Outfit et Fraunces. Dépendance purement visuelle ; l'application doit rester utilisable si elle échoue.
- `@supabase/supabase-js@2` via jsDelivr : dépendance fonctionnelle critique. **Point à traiter avant gel de release : remplacer le major flottant `@2` par une version exacte ayant passé les smoke tests navigateur.**
- `https://js.stripe.com/v3/` : chargé historiquement. Le checkout HydroCalc actuel est créé côté Edge Function puis redirige vers l'URL Stripe hébergée ; aucune clé Stripe navigateur ni appel `Stripe(...)` n'est requis dans `js/stripe-client.js`. Ce script est donc candidat à suppression physique du HTML lors du nettoyage du shell.
- jsPDF `2.5.1` via cdnjs : version exacte, utilisée pour le PDF.
- qrcodejs `1.0.0` via cdnjs : version exacte, utilisée par les QCM/live.
- PeerJS `1.5.1` via unpkg : version exacte, utilisée par le QCM live.

Les bibliothèques DOCX/ZIP utilisées par les rapports sont déjà locales dans `libs/`.

## Politique de release

1. Aucun nouveau `<script src="https://…">` ne doit être ajouté au shell sans revue.
2. Les paquets npm/CDN doivent utiliser une version exacte ; les alias `latest`, `@2`, `@^2` ou équivalents sont interdits pour une release figée.
3. Une mise à jour de dépendance critique se fait dans une PR dédiée ou un commit identifiable, avec CI vert et smoke test navigateur.
4. Les dépendances pouvant être servies localement sans obligation de chargement depuis l'éditeur doivent progressivement être vendoriées ou intégrées à un vrai build avec lockfile.
5. Stripe.js fait exception uniquement lorsqu'une intégration Stripe navigateur l'exige réellement. Le checkout hébergé actuel n'en a pas besoin.
6. Le service worker ne met jamais en cache les ressources cross-origin ; une réponse CDN n'est donc jamais mélangée à des données utilisateur hors ligne.

## Supply-chain : cible recommandée

La cible long terme est un build reproductible (`package.json` + lockfile + bundling) pour Supabase, jsPDF, QRCode et PeerJS, avec contrôle automatisé des versions. Cette évolution n'est pas nécessaire pour appliquer les migrations/RLS actuelles, mais elle réduira fortement la dépendance aux CDN et facilitera CSP/SRI.

## GO / NO-GO dépendances

Pour la première release sécurisée, le minimum est : aucun script externe nouveau non revu, aucune clé secrète dans le navigateur, versions critiques connues, et test réel de la version Supabase choisie. Le major flottant Supabase doit être considéré comme une dette de reproductibilité à fermer au moment du gel de release.
