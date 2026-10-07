# HydroCalc — Cahier des charges pour Claude Code

> **Comment utiliser ce document :** copiez-collez son contenu (ou des sections) directement dans Claude Code au démarrage. Il est écrit pour que Claude Code comprenne le projet et vous guide pas à pas, même si vous débutez. À chaque étape, n'hésitez pas à demander à Claude Code de vous expliquer ce qu'il fait.

---

## 1. Contexte du projet

HydroCalc est une application web pour les professionnels de l'eau : techniciens, étudiants BTS GEMEAU, ingénieurs hydrauliciens, agents SPANC. Elle regroupe des calculateurs hydrauliques, un glossaire, la réglementation par département, et une plateforme de QCM pour la formation.

**État actuel :** deux fichiers HTML autonomes, fonctionnels mais perfectibles.

- `HydroCalc_Design_Unifie.html` (~307 Ko) — l'application principale (calculateurs, ANC, glossaire, réglementation, authentification, sauvegarde de calculs, comparateur de filières).
- `HydroCalc_QCM_Platform.html` (~325 Ko) — la plateforme de QCM avec 3 modes : professeur, élève, visiteur. 36 QCM de 20 questions (720 questions).

**Objectif global :** rendre l'application aussi aboutie que possible — code propre, vraies fonctionnalités en ligne, testée sur de vrais appareils.

---

## 2. Profil de l'utilisateur

Je débute en développement. Merci de :
- m'expliquer chaque étape en langage simple avant de l'exécuter ;
- me dire quelles commandes taper et ce qu'elles font ;
- me prévenir avant toute action importante (installation, suppression, publication) ;
- avancer par petites étapes vérifiables, pas tout d'un coup.

---

## 3. Plan de travail dans l'ordre logique

### Étape 0 — Prise en main et sauvegarde
- M'aider à mettre les deux fichiers HTML dans un dossier de projet.
- Initialiser un dépôt Git (versionnement) pour pouvoir revenir en arrière en cas d'erreur. M'expliquer ce qu'est Git simplement.
- Lancer un serveur local pour voir l'application dans le navigateur, et m'expliquer comment l'ouvrir.

### Étape 1 — Découper et nettoyer le code (refactoring)
Le gros problème actuel : tout est dans un seul énorme fichier HTML, difficile à maintenir.
- Séparer chaque application en fichiers distincts : `index.html`, `styles.css`, et plusieurs fichiers JavaScript par thème (calculateurs, ANC, glossaire, réglementation, authentification, QCM…).
- Conserver **exactement** le même comportement visible : ne rien casser de ce qui marche.
- Vérifier après découpage que tout fonctionne encore (calculateurs, onglets, navigation, sauvegarde).

### Étape 2 — Tester sur de vrais appareils
- M'expliquer comment tester l'application sur mon téléphone (Android et iPhone si possible) via le réseau local.
- Identifier et corriger les éventuels bugs d'affichage ou de défilement réels.
- Vérifier le mode PWA (installation sur l'écran d'accueil).

### Étape 3 — Backend temps réel (sessions QCM multi-appareils)
Actuellement, les sessions professeur/élèves ne marchent que sur un seul appareil (stockage local). Objectif : un vrai serveur pour que 30 élèves rejoignent depuis 30 appareils.
- Utiliser **Supabase** (recommandé pour l'hébergement européen / RGPD, données d'élèves potentiellement mineurs).
- Créer les tables (professeurs, utilisateurs, sessions, participants, qcms, résultats, abonnements).
- Remplacer le stockage local (`localStorage`) par des appels à la base de données.
- Mettre en place la synchronisation temps réel (le professeur voit les réponses des élèves en direct).
- Activer la sécurité (chaque utilisateur ne voit que ses propres données).
> Le détail technique de cette étape est dans le document `HydroCalc_Evolutions_Techniques.md`.

### Étape 4 — Paiement des abonnements
Actuellement les abonnements (Gratuit / Pro 9,90 € / Établissement 49 €) sont simulés.
- Intégrer **Stripe** pour les paiements récurrents mensuels.
- Créer les fonctions serveur nécessaires (via les Edge Functions de Supabase).
- Prévoir aussi la **facturation sur bon de commande** pour les établissements scolaires (qui paient rarement par carte).
- Tester en mode bac à sable avant la vraie mise en production.
> Détail technique également dans `HydroCalc_Evolutions_Techniques.md`.

### Étape 5 — Améliorations fonctionnelles restantes
- Export PDF propre des calculs (au-delà de l'impression navigateur actuelle).
- Rendre fonctionnels par onglets les modules secondaires dont les onglets ont été masqués (Cours, Aides, Matériaux, Formations…) — pour l'instant ils affichent tout leur contenu d'un bloc.
- Éventuellement : annales BTS GEMEAU corrigées, fiches de révision imprimables.

### Étape 6 — Mise en ligne
- M'expliquer comment publier l'application sur Internet (hébergement gratuit possible : Netlify, Vercel, Cloudflare Pages).
- Configurer un nom de domaine si je le souhaite.
- Vérifier le bon fonctionnement du PWA et du backend en ligne.

---

## 4. Points de vigilance (bugs déjà rencontrés — à NE PAS reproduire)

L'application a connu plusieurs bugs qui ont été corrigés. Garder ces règles lors du refactoring et des ajouts :

1. **Compatibilité Android ancien** : ne PAS utiliser l'optional chaining (`?.`). Cela fait planter tout le script sur les vieux navigateurs Android. Utiliser des vérifications classiques (`if (x) x.value`).
2. **Défilement mobile** : tout conteneur défilant en `flex` doit avoir `min-height: 0` et `overflow-y: auto`. Le conteneur principal de l'app doit être en `position: fixed; inset: 0`.
3. **Onglets** : les barres d'onglets doivent être HORS de la zone défilante, sinon elles disparaissent au défilement et l'utilisateur croit que rien ne change.
4. **Apostrophes françaises** dans le JavaScript : les échapper (`\'`) quand elles sont dans des chaînes entre apostrophes simples.
5. **Pas de `getElementById` avec backticks** : utiliser la concaténation classique.
6. **Stockage des données utilisateur** : actuellement par utilisateur dans `localStorage` (clés `hc_...`). À migrer vers la base de données.

---

## 5. Contraintes importantes

- **RGPD** : l'application traite des données d'élèves, potentiellement mineurs. Hébergement des données en Europe, consentement clair, possibilité de suppression des comptes, durée de conservation limitée.
- **Contenu technique** : les 720 questions de QCM et les données réglementaires (coûts ANC, seuils, coefficients) ont été rédigées avec soin mais **doivent être relues par un professionnel du domaine** (enseignant BTS GEMEAU, agent SPANC) avant un usage réel. Ce n'est pas le rôle de Claude Code, mais c'est à prévoir.
- **Ne rien casser** : à chaque étape, vérifier que les fonctionnalités existantes marchent toujours avant de continuer.

---

## 6. Première instruction suggérée à donner à Claude Code

> « Voici mon projet HydroCalc (deux fichiers HTML) et son cahier des charges. Je débute en développement. Commençons par l'étape 0 : aide-moi à organiser le projet dans un dossier, à mettre en place Git pour sauvegarder mon travail, et à lancer un serveur local pour voir l'application dans mon navigateur. Explique-moi chaque étape simplement et attends ma confirmation avant de passer à la suivante. »
