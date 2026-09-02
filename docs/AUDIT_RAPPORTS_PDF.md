# HydroCalc — Audit rapports et PDF

Dernière mise à jour : 2026-09-02

## Objectif

Les rapports HydroCalc doivent être fiables sur quatre plans :

1. **sécurité** : aucune donnée enregistrée par l'utilisateur ne doit redevenir du HTML exécutable dans un rapport ou un aperçu ;
2. **lisibilité** : aucun texte coupé, chevauchement, débordement horizontal ou bloc illisible ;
3. **pagination** : A4 portrait, marges cohérentes, sauts de page maîtrisés, en-tête et pied de page stables ;
4. **traçabilité** : titre/projet, auteur, date, hypothèses, données, résultats et références doivent rester identifiables.

## Architecture active

Le code historique de `js/auth.js` contient toujours les anciens générateurs. Ils ne sont plus l'autorité au runtime :

- `js/report-security.js` construit un **modèle de rapport nettoyé** puis génère HTML et PDF ;
- `js/report-pdf-fixes.js` sécurise l'ordre rendu/quota et normalise les logos ;
- `js/report-format-fixes.js` conserve ODT/DOCX sans passer par l'ancien modal d'aperçu `innerHTML` ;
- `js/stripe-client.js` charge ces bridges après les bridges auth/XSS/quota.

## Corrections sécurité

### HTML / aperçu

**Statut : CORRIGÉ**

L'ancien rapport concaténait directement dans `innerHTML` de nombreuses données sauvegardées : nom de projet, nom utilisateur, calculs, formules personnelles, références, protocoles terrain et champs d'outils. Une valeur enregistrée contenant du HTML pouvait donc devenir du contenu actif dans le rapport ou la preview.

Le nouveau renderer :

- nettoie une seule fois les données dans un modèle ;
- convertit les détails HTML historiques en texte ;
- encode systématiquement les caractères HTML lors du rendu ;
- n'autorise comme logo embarqué que les data URI PNG/JPEG bornées en taille ;
- n'utilise plus le modal historique de preview pour ODT/DOCX.

Test : `tests/report-security.test.cjs` injecte notamment `script`, `img/onerror` et SVG dans les données du rapport et vérifie qu'ils ressortent comme texte inerte.

## Corrections HTML autonome

**Statut : CORRIGÉ**

L'ancien fichier HTML téléchargé réutilisait des variables CSS de l'application (`var(--...)`) et des chemins relatifs vers les images HydroCalc. Une fois le fichier ouvert hors du site, couleurs et logos pouvaient donc disparaître.

Le nouveau HTML :

- possède sa propre feuille de style avec couleurs fixes ;
- utilise `@page` A4 pour l'impression ;
- embarque le logo sous forme de data URI lorsqu'il est disponible ;
- utilise `overflow-wrap:anywhere` et `table-layout:fixed` ;
- répète les en-têtes de tableaux à l'impression ;
- applique des règles de coupure de page aux cartes et lignes de tableaux ;
- possède un layout mobile séparé.

## Corrections PDF

**Statut : NOUVEAU RENDERER ACTIF / VALIDATION VISUELLE NAVIGATEUR ENCORE REQUISE**

Le PDF n'est plus construit à partir d'une capture du DOM ou d'un bloc HTML. Le nouveau moteur utilise jsPDF comme moteur de dessin A4 déterministe.

### Mise en page

- format A4 portrait ;
- marges gauche/droite : 18 mm ;
- marge utile haute : 20 mm ;
- marge basse : 17 mm ;
- en-tête stable sur chaque page ;
- pied de page avec `Page x / n` ;
- chapitres, cartes, résultats, données et références ont des styles séparés ;
- le texte est découpé avec `splitTextToSize` ;
- un contrôle `ensure()` ajoute une nouvelle page avant chaque élément lorsque l'espace restant est insuffisant ;
- les lignes de données calculent leur hauteur selon le nombre réel de lignes après wrapping.

### Caractères et glyphes

Les polices standard jsPDF peuvent mal rendre certains caractères Unicode avancés. Le renderer normalise donc les caractères avant écriture PDF :

- indices/superscripts normalisés via NFKC ;
- tirets Unicode remplacés par `-` ;
- `Delta`, `theta`, `rho`, `eta`, `pi` remplacent les glyphes grecs courants ;
- flèches et opérateurs Unicode sont convertis en équivalents ASCII ;
- emojis sont retirés du PDF plutôt que rendus sous forme de carrés noirs.

Les accents français Latin-1 sont conservés.

### Logos

L'ancien upload acceptait toute image et la conservait telle quelle en localStorage, ce qui pouvait créer des PDF très lourds ou faire échouer jsPDF.

Le nouvel upload :

- accepte PNG et JPEG uniquement ;
- refuse les fichiers > 2 Mo avant traitement ;
- redimensionne au maximum à 1200 × 500 px en conservant le ratio ;
- normalise via canvas ;
- applique un fallback JPEG si le PNG reste trop volumineux ;
- n'embarque jamais SVG/GIF/WebP arbitraire dans le PDF.

### Quota

Le renderer PDF prépare maintenant entièrement le document **avant** de consommer le quota serveur `report_weekly`. Une absence de jsPDF, un logo invalide ou une erreur de construction ne doit donc plus faire perdre le rapport hebdomadaire à l'utilisateur.

Le quota local historique est neutralisé ; le RPC Supabase reste l'autorité.

## ODT et DOCX

**Statut : ROUTAGE CORRIGÉ**

Les boutons ODT/DOCX continuent d'utiliser les constructeurs documentaires existants, qui échappent le XML ODT ou utilisent les objets `TextRun` DOCX, mais le téléchargement ne passe plus par le vieux modal de preview HTML.

Le routage `HTML / ODT / DOCX / PDF` est testé automatiquement.

## Régressions automatiques

Workflow : `.github/workflows/science-tests.yml`.

Test rapport : `tests/report-security.test.cjs`.

Le test couvre :

- échappement HTML ;
- conversion HTML historique → texte ;
- refus des data URI non PNG/JPEG ;
- absence de variables CSS HydroCalc dans le fichier HTML autonome ;
- règles A4 / tableau / coupure de page ;
- normalisation des symboles PDF ;
- nommage de fichier ;
- présence des points d'entrée PDF ;
- routage ODT et DOCX vers leurs vrais générateurs.

## Validation visuelle requise avant fusion

Le test automatisé ne remplace pas une inspection du PDF final rendu. Avant passage en production, générer au minimum les cas suivants dans Chrome/Edge desktop et un navigateur mobile :

1. rapport court : un seul calcul ;
2. rapport avec 20+ calculs et plusieurs pages ;
3. texte de détail très long ;
4. formule longue sans espaces ;
5. projet avec accents et caractères techniques ;
6. logo PNG transparent très large ;
7. logo JPEG portrait ;
8. outil terrain avec protocole long et tableau d'interprétation ;
9. rapport contenant formules + références réglementaires ;
10. PDF de 10 pages ou plus pour vérifier pied de page et numérotation.

Pour chaque cas, vérifier visuellement : aucune ligne hors page, aucun texte sous le pied de page, aucun carré noir, aucune superposition, aucun titre isolé en bas de page et aucun tableau horizontalement coupé.

## Reste à faire

- exécuter une validation visuelle navigateur sur la branche déployée en préproduction ;
- si nécessaire, ajuster les espacements à partir de vrais PDF produits par Chrome/mobile ;
- à terme, supprimer les anciens générateurs et le vieux modal de preview de `auth.js` au lieu de les laisser neutralisés par bridge ;
- envisager un test E2E Playwright qui génère un PDF fixture et vérifie automatiquement nombre de pages, taille du fichier et absence d'exception runtime.
