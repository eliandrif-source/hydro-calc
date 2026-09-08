# HydroCalc — Audit UX & Architecture de l'information

Dernière passe : 2026-09-02

## Conclusion

HydroCalc possède beaucoup de contenu utile, mais son principal risque UX est de donner l'impression d'un **catalogue de fonctions** plutôt que d'un outil métier guidé. Il ne faut pas réduire la richesse : il faut mieux hiérarchiser l'accès à cette richesse.

La structure cible recommandée est :

**Calculer / Apprendre / Terrain / Réglementation / Projets**

Les domaines techniques restent ensuite :

**Assainissement collectif / ANC / Eau potable-AEP / Rivières & milieux aquatiques / GEMAPI**.

Cette séparation répond à deux questions différentes :

1. *Que veux-je faire ?* → calculer, apprendre, travailler sur le terrain, vérifier une règle, reprendre un projet.
2. *Dans quel domaine ?* → AC, ANC, AEP, rivières, GEMAPI.

## Ce qui fonctionne déjà

- barre supérieure compacte avec accueil, recherche, messagerie et profil ;
- quatre raccourcis d'accueil personnalisables ;
- recherche globale ;
- navigation basse persistante ;
- projets/dossiers et calculs sauvegardés ;
- breadcrumbs sur plusieurs écrans ;
- catégories techniques cohérentes avec le métier ;
- interface mobile pensée comme une application et pas uniquement comme une page web.

## Problèmes constatés et corrections engagées

### 1. Faux élément système

L'interface affichait une barre système interne figée à `9:41` avec icônes réseau/batterie. Cela donne une impression de maquette et duplique la vraie barre système du téléphone/PWA.

**Correction :** cette barre est désormais masquée par `js/product-ux-hardening.js`.

### 2. Libellés principaux trop abrégés

La navigation basse utilisait notamment `A. Collectif`, `A. Non Coll.`, `Mil. naturel` et `Formulaire`.

**Correction :** affichage plus explicite :

- `Assain. coll.`
- `ANC`
- `Eau potable`
- `Rivières`
- `Formules`

Les boutons ont également un `aria-label` complet.

### 3. Chiffres de catalogue incohérents

L'écran d'authentification annonçait `14 modules / 60+ calculateurs` tandis que l'accueil annonçait `18 modules / 70+ calculateurs`.

**Correction :** la copie visible est alignée à court terme. À moyen terme, éviter autant que possible les compteurs marketing codés en dur ; ils vieillissent vite et apportent moins de valeur qu'une promesse métier claire.

### 4. Plan Gratuit ambigu

L'inscription indiquait que le compte gratuit donnait accès à « l'ensemble de l'application », alors que les quotas et fonctions premium existent réellement.

**Correction :** la copie explique maintenant que le compte Gratuit donne accès aux fonctions gratuites et que certains rapports/services avancés nécessitent un plan éligible.

### 5. Établissement : prix client incohérent

L'ancien écran calculait un nombre de licences et des paliers, mais le checkout sécurisé ne transmet plus de quantité à Stripe.

**Correction :** l'écran sécurisé présente maintenant un abonnement Établissement mensuel/annuel unique, jusqu'à 30 codes d'accès. Le montant final est celui présenté par Stripe. Aucun faux total par siège n'est calculé côté navigateur.

## Architecture d'information cible

### Niveau 1 — intention utilisateur

**Calculer**
: calculateurs, convertisseur, résultats, sauvegarde, comparaison, rapport.

**Apprendre**
: cours, QCM, fiches, glossaire pédagogique, progression.

**Terrain**
: protocoles, outils terrain, observations, mesures, contrôles, partage rapide.

**Réglementation**
: textes, sources officielles, date de vérification, statut normatif vs guide technique.

**Projets**
: dossiers, calculs sauvegardés, rapports, partage vers forum/messagerie.

### Niveau 2 — domaine métier

- Assainissement collectif
- ANC / SPANC
- Eau potable / AEP
- Rivières & milieux aquatiques
- GEMAPI

### Niveau 3 — tâche précise

Exemples : Manning pleine section, rational, Porchet, FTE, STEP boues activées, NPSH, chloration, Shields, passe à poissons.

## Gabarit standard d'un calculateur

Tous les calculateurs professionnels devraient converger vers la même séquence :

1. **Objectif** — ce que le calcul permet réellement d'estimer.
2. **Schéma fonctionnel** — uniquement s'il aide à comprendre les variables.
3. **Entrées essentielles** — données nécessaires au calcul.
4. **Hypothèses avancées** — repliées par défaut quand elles ne sont pas indispensables.
5. **Calculer** — un appel à l'action principal unique.
6. **Résultat principal** — valeur la plus importante, unité et statut.
7. **Vérifications / alertes** — incohérences, domaine de validité, limites.
8. **Détail du calcul** — équations, conversions, étapes.
9. **Interprétation** — ce que le résultat signifie, sans transformer une règle de l'art en obligation réglementaire.
10. **Source et version** — source technique/réglementaire et date de vérification.

## Règles de représentation scientifique

Un schéma n'est utile que s'il correspond au calcul : même symbole, même unité et même terme dans le formulaire, le schéma, l'équation et le résultat.

Toujours différencier visuellement :

- **Exigence réglementaire**
- **Norme / référentiel technique**
- **Règle de l'art / ordre de grandeur**
- **Hypothèse utilisateur**
- **Valeur calculée**

Une valeur de pratique courante ne doit jamais être colorée ou formulée comme un seuil légal si elle ne l'est pas.

## Résultats et densité

Éviter plusieurs cartes de résultat de même importance. L'écran doit avoir :

- un résultat dominant ;
- quelques indicateurs secondaires ;
- des alertes clairement classées ;
- le détail technique après le résultat, pas avant.

Sur mobile, les hypothèses et détails doivent utiliser une divulgation progressive. Sur desktop, la largeur supplémentaire peut être utilisée pour afficher schéma/entrées ou résultat/détail côte à côte, sans modifier l'ordre logique.

## Accueil

L'accueil ne doit pas afficher directement la totalité des calculateurs. Sa fonction est de reprendre rapidement le travail.

Priorité recommandée :

1. recherche globale ;
2. raccourcis personnalisés ;
3. calculs/projets récents ;
4. cinq intentions principales ;
5. nouveautés ou contenus pédagogiques secondaires.

Les statistiques de quantité (`70+`, `800+`, etc.) sont secondaires.

## Recherche

La recherche globale doit devenir le moyen principal d'accès lorsque l'utilisateur connaît déjà le terme technique. Elle doit à terme différencier les types de résultats :

- Calculateur
- Cours
- Formule
- Réglementation
- Glossaire
- Projet
- Discussion forum

Un résultat doit indiquer son domaine et son type avant le titre si une ambiguïté est possible.

## Forum et messagerie dans l'IA

Le **forum** doit être la mémoire collective technique : question, contexte, calcul, source, solution acceptée.

La **messagerie** doit rester secondaire et privée : échanges autour d'un projet, d'un calcul ou d'une relation formateur/apprenant.

Le partage calcul/projet ajouté récemment rapproche ces outils de leur vraie fonction métier.

## Desktop / mobile

### Mobile

- barre basse : cinq destinations maximum ;
- zone tactile minimale confortable ;
- pas de faux chrome système ;
- CTA principal accessible sans défilement excessif ;
- tableaux complexes transformés en cartes ou défilement horizontal assumé ;
- résultats lisibles sans zoom.

### Desktop

- limiter la largeur de lecture des textes longs ;
- exploiter les colonnes pour les calculateurs, pas pour multiplier les menus ;
- garder la navigation identique conceptuellement au mobile ;
- ne pas créer une version desktop totalement différente.

## Priorités suivantes

### P0 avant production

- appliquer réellement les migrations/RPC Supabase ;
- smoke tests multi-comptes et admin ;
- tests Stripe réels ;
- contrôle visuel des rapports PDF ;
- vérifier qu'aucun bridge de sécurité critique ne dépend d'un ordre de chargement fragile.

### P1 UX

- harmoniser progressivement les calculateurs avec le gabarit standard ;
- rendre les hypothèses avancées repliables ;
- uniformiser les badges `Réglementaire / Référence / Hypothèse / Calculé` ;
- ajouter projets/calculs récents plus visibles sur l'accueil ;
- étendre la recherche globale aux projets et au forum.

### P2 finition

- harmonisation des icônes ;
- vérification contrastes et focus clavier ;
- états vides cohérents ;
- microcopies d'erreur orientées action ;
- animations réduites si `prefers-reduced-motion`.

## Verdict

La richesse fonctionnelle d'HydroCalc est un avantage si l'application devient **prévisible** : même logique d'écran, mêmes catégories, mêmes niveaux d'information et mêmes règles visuelles. La priorité n'est pas d'ajouter des menus, mais d'imposer une structure cohérente aux fonctions existantes.
