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

## 3. Méthode rationnelle — débit de pointe pluvial

**Statut : CORRIGÉ / moteur audité actif**

Références principales : Cerema, Hydrouti ; guide technique d'assainissement routier.

Hypothèse : pluie uniforme et constante sur le bassin ; le débit maximal est obtenu lorsque la durée de l'averse est égale au temps de concentration. L'intensité `i` doit donc provenir de la courbe IDF pour cette durée et la période de retour retenue.

Avec `i` en mm/h et `A` en hectares :

- `Q [m³/s] = C × i × A / 360`
- `Q [L/s] = C × i × A / 0,36`

**Erreur corrigée :** l'ancien HydroCalc calculait `C × i × A / 360` puis affichait cette valeur en L/s. Cette expression étant en m³/s, l'affichage sous-estimait le débit d'un facteur 1000.

Vecteur de régression : `C = 0,60`, `i = 25 mm/h`, `A = 5 ha` → `Q = 0,208333 m³/s = 208,333 L/s = 750 m³/h`.

Le seuil `S ≤ 2 km²` n'est plus présenté comme une limite universelle. Le domaine dépend du contexte et du référentiel : par exemple, le guide Cerema pour bassins versants naturels donne des limites spécifiques selon la région.

Implémentation auditée : `js/science-core.js` → `HydroCalcScience.rationalPeakFlow()`.

## 4. ANC — perméabilité Porchet / interprétation réglementaire

**Statut : CORRIGÉ pour les unités et seuils réglementaires / formule Porchet encore À VÉRIFIER**

Référence principale : arrêté du 7 septembre 2009 modifié.

- Article 6 : traitement par le sol en place lorsque la perméabilité est comprise entre **15 et 500 mm/h**, avec les autres conditions du site.
- Article 11 : infiltration des eaux usées traitées lorsque la perméabilité est comprise entre **10 et 500 mm/h**.

**Erreur corrigée :** plusieurs écrans utilisaient `mm/min` alors que le calculateur Porchet et les seuils réglementaires étaient exprimés en `mm/h`. Des règles de type `K < 1`, `1–15`, `>15 mm/min` étaient ensuite présentées comme déterminant directement la filière. Cette présentation n'est plus considérée comme une règle réglementaire nationale.

HydroCalc affiche désormais les plages légales en mm/h et sépare l'aptitude réglementaire du sol au traitement en place, l'aptitude à l'infiltration d'eaux déjà traitées et le choix de filière, qui doit rester dépendant de l'étude de sol, du DTU, du dispositif et des prescriptions du SPANC.

Implémentation auditée : `js/science-core.js` → `HydroCalcScience.ancPermeabilityStatus()`.

La formule de décroissance de charge utilisée dans le calcul Porchet historique est conservée provisoirement mais n'est pas encore marquée VALIDÉE : attribution normative, protocole et géométrie doivent encore être consolidés.

## 5. Manning-Strickler — conduite circulaire partiellement remplie

**Statut : CORRIGÉ / moteur audité actif**

La géométrie historique de la section mouillée était correcte pour `0 < y < D` :

- `θ = 2 arccos(1 − 2y/D)`
- `A = D²(θ − sin θ)/8`
- `P = Dθ/2`
- `Rh = A/P`

La largeur au miroir vaut `T = D sin(θ/2)`. La profondeur hydraulique utilisée pour le nombre de Froude est `Dh = A/T`.

**Erreur corrigée :** l'ancien calcul utilisait `Fr = V/√(g y)`. Cette expression n'est valable telle quelle que pour une section rectangulaire où la profondeur hydraulique est égale à la hauteur d'eau. Pour la section circulaire partiellement remplie, HydroCalc utilise maintenant `Fr = V/√(g A/T)`. HEC-RAS définit également la profondeur hydraulique comme `A / largeur au miroir`.

Vecteur de régression : `D = 0,300 m`, `y = 0,240 m`, `K = 90`, `I = 3 ‰` → `θ = 4,428595 rad`, `A = 0,0606217 m²`, `Rh = 0,091258 m`, `T = 0,240 m`, `Dh = 0,252590 m`, `Q = 60,5729 L/s`, `V = 0,999195 m/s`, `Fr = 0,634757`.

Implémentation auditée : `js/science-advanced.js` → `HydroCalcScience.manningPartialCircular()`.

## 6. Coup de bélier — borne de Joukowsky en fermeture rapide

**Statut : CORRIGÉ / moteur simplifié audité actif**

Référence principale : USACE, EM 1110-3-173, §5-5.

Le temps critique d'aller-retour de l'onde est `Tc = 2L/a`. Si l'arrêt complet s'effectue en un temps `tf ≤ Tc`, la fermeture est considérée rapide dans cette analyse simplifiée et la hausse théorique maximale est :

- `ΔH = a ΔV / g`
- `ΔP = ρ a ΔV`

**Corrections HydroCalc :**

- le temps de fermeture `tf` est désormais demandé et comparé à `Tc` ;
- la célérité `a` est une hypothèse de calcul éditable et non une constante intrinsèque du seul matériau ; elle dépend notamment des propriétés du fluide et de la conduite, de son diamètre/épaisseur et de son élasticité ;
- lorsque `tf > Tc`, la valeur de Joukowsky est affichée comme borne théorique et non comme surpression calculée du transitoire réel ;
- la pression minimale théorique n'est plus artificiellement tronquée à `0 bar` : une valeur manométrique négative déclenche au contraire un avertissement de dépression/cavitation ou séparation de colonne à étudier ;
- HydroCalc ne déduit plus automatiquement une classe PN à partir de ce seul calcul transitoire simplifié.

Vecteur de régression : `L = 500 m`, `ΔV = 1,2 m/s`, `a = 400 m/s`, `Pstat = 4 bar(g)`, `tf = 1 s` → `Tc = 2,5 s`, fermeture rapide, `ΔH = 48,9297 m`, `ΔP = 4,8 bar`, `Pmax théorique = 8,8 bar(g)`, `Pmin symétrique théorique = −0,8 bar(g)`.

Implémentation auditée : `js/science-advanced.js` → `HydroCalcScience.waterHammerJoukowsky()`.

## File d'audit prioritaire

- Porchet : validation complète de la formule et du protocole de mesure.
- Épandage ANC : dimensionnement surfacique et distinction DTU / pratique SPANC / réglementation.
- STEP : distinguer obligations réglementaires, paramètres de conception et valeurs de pratique.
- AEP : Hazen-Williams, HMT, NPSH, chloration et temps de séjour.
- Milieux aquatiques : Shields, Langelier, passes à poissons et valeurs biologiques de référence.
