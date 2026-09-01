# HydroCalc — Audit scientifique

Dernière vérification : 2026-09-01

Objectif : chaque calculateur doit avoir une formule identifiée, des unités explicites, un domaine de validité, des cas limites et au moins un vecteur de régression indépendant. Une valeur pédagogique ou une règle de pratique ne doit pas être présentée comme une obligation réglementaire sans source.

## Statuts

- **VALIDÉ** : formule, conversions et implémentation vérifiées.
- **CORRIGÉ** : une erreur ou ambiguïté a été identifiée et corrigée.
- **À VÉRIFIER** : aucune modification scientifique tant que la source technique/réglementaire n'est pas consolidée.

## 1. Manning-Strickler — conduite circulaire pleine

**Statut : VALIDÉ / moteur audité actif**

Référence principale : ASTEE / Cerema, *Mémento technique 2017 — Conception et dimensionnement des systèmes de gestion des eaux pluviales et de collecte des eaux usées*, § IV.2.3, équation 42.

Formule : `Q = K × S × Rh^(2/3) × I^(1/2)`.

Pour une conduite circulaire pleine : `S = πD²/4` et `Rh = D/4`.

Unités utilisées par HydroCalc : diamètre saisi en mm puis converti en m ; pente saisie en ‰ puis convertie en m/m ; K en m^(1/3)/s ; sortie en m³/s, L/s et m³/h.

Domaine : régime permanent uniforme ; formule adaptée aux écoulements turbulents rugueux/fortement rugueux. Le Mémento rappelle que la viscosité peut devenir non négligeable dans les écoulements hydrauliquement lisses.

Vecteur de régression : D = 300 mm, K = 90, I = 3 ‰ → A = 0,0706858 m² ; Rh = 0,075 m ; V = 0,876686 m/s ; Q = 0,0619693 m³/s = 61,9693 L/s = 223,089 m³/h.

Implémentation auditée : `js/science-core.js` → `HydroCalcScience.manningFullPipe()`.

## 2. Fosse toutes eaux — volume utile minimal

**Statut : CORRIGÉ / moteur audité actif**

Référence principale : arrêté du 7 septembre 2009 modifié fixant les prescriptions techniques ANC, article 5, annexe 1 et article 15.

Dimensionnement du volume utile : jusqu'à 5 pièces principales, volume minimal de 3 m³ ; au-delà, +1 m³ minimum par pièce principale supplémentaire.

Correction HydroCalc : l'application affichait `EH = pièces principales + 1`. Le texte réglementaire prévoit en règle générale un dimensionnement en EH égal au nombre de pièces principales, sous réserve des exceptions nécessitant une étude particulière (ERP ou occupation disproportionnée).

Correction HydroCalc : l'application présentait `vidange légale max. tous les 4 ans`. L'article 15 en vigueur impose une périodicité adaptée à la hauteur de boues ; celle-ci ne doit pas dépasser 50 % du volume utile, sauf mention contraire applicable à certains dispositifs agréés. Le calcul prédictif fondé sur une accumulation forfaitaire de boues n'est donc plus présenté comme une périodicité réglementaire.

Vecteurs de régression : 5 PP → 3 m³ ; 6 PP → 4 m³ ; 8 PP → 6 m³. Le nombre d'EH de référence vaut respectivement 5, 6 et 8 dans le cas général.

Implémentation auditée : `js/science-core.js` → `HydroCalcScience.fteSizing()`.

## File d'audit prioritaire

- Méthode rationnelle : formule, unités pluie/surface, domaine de bassin et coefficient de ruissellement.
- Manning section partielle : géométrie de section mouillée, rayon hydraulique, angles et cas limites.
- Coup de bélier : Joukowsky, célérité et hypothèses de fermeture.
- Porchet / épandage ANC : cohérence des unités et seuils de perméabilité entre écrans.
- STEP : distinguer obligations réglementaires, paramètres de conception et valeurs de pratique.
- AEP : Hazen-Williams, HMT, NPSH, chloration et temps de séjour.
- Milieux aquatiques : Shields, Langelier, passes à poissons et valeurs biologiques de référence.
