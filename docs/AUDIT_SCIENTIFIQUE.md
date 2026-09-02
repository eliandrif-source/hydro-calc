# HydroCalc — Audit scientifique

Dernière vérification : 2026-09-02

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

Le seuil `S ≤ 2 km²` n'est plus présenté comme une limite universelle. Le domaine dépend du contexte et du référentiel de projet.

Implémentation auditée : `js/science-core.js` → `HydroCalcScience.rationalPeakFlow()`.

## 4. ANC — Porchet, perméabilité et épandage

**Statut : CORRIGÉ / protocole Porchet audité actif / dimensionnement surfacique historique neutralisé**

Références principales : arrêté du 7 septembre 2009 modifié et documentation technique Cerema sur le test de Porchet.

HydroCalc utilise désormais un protocole explicite et traçable : forage de diamètre 150 mm, phase d'imbibition de 4 h puis mesure du volume d'eau infiltré pendant 10 min à charge maintenue. Pour ce protocole, le moteur convertit le volume mesuré `V10` en coefficient de perméabilité `K` en mm/h selon la relation documentée par le Cerema.

Les seuils réglementaires sont séparés du choix de filière :

- article 6 : traitement par le sol en place lorsque la perméabilité est comprise entre **15 et 500 mm/h**, sous réserve des autres conditions du site ;
- article 11 : infiltration des eaux usées traitées lorsque la perméabilité est comprise entre **10 et 500 mm/h**.

**Erreurs corrigées :** les anciens écrans mélangeaient mm/min et mm/h, citaient à tort NF EN ISO 22282-4 pour l'essai d'infiltration et déduisaient automatiquement une filière et une surface à partir de `K` seul.

Le calcul historique de surface d'épandage fondé sur un coefficient interne non sourcé a été neutralisé. HydroCalc fournit maintenant un pré-diagnostic de perméabilité ; le dimensionnement final doit tenir compte de l'étude de sol, des volumes à infiltrer, des règles de l'art, du dispositif retenu et des prescriptions locales.

Implémentations auditées : `js/science-core.js` → `HydroCalcScience.ancPermeabilityStatus()` et `js/science-anc.js` pour le protocole et les protections d'interface.

## 5. Manning-Strickler — conduite circulaire partiellement remplie

**Statut : CORRIGÉ / moteur audité actif**

La géométrie historique de la section mouillée était correcte pour `0 < y < D` :

- `θ = 2 arccos(1 − 2y/D)`
- `A = D²(θ − sin θ)/8`
- `P = Dθ/2`
- `Rh = A/P`

La largeur au miroir vaut `T = D sin(θ/2)`. La profondeur hydraulique utilisée pour le nombre de Froude est `Dh = A/T`.

**Erreur corrigée :** l'ancien calcul utilisait `Fr = V/√(g y)`. Pour une section circulaire partiellement remplie, HydroCalc utilise maintenant `Fr = V/√(g A/T)`.

Vecteur de régression : `D = 0,300 m`, `y = 0,240 m`, `K = 90`, `I = 3 ‰` → `θ = 4,428595 rad`, `A = 0,0606217 m²`, `Rh = 0,091258 m`, `T = 0,240 m`, `Dh = 0,252590 m`, `Q = 60,5729 L/s`, `V = 0,999195 m/s`, `Fr = 0,634757`.

Implémentation auditée : `js/science-advanced.js` → `HydroCalcScience.manningPartialCircular()`.

## 6. Coup de bélier — borne de Joukowsky en fermeture rapide

**Statut : CORRIGÉ / moteur simplifié audité actif**

Référence principale : USACE, EM 1110-3-173, §5-5.

Le temps critique d'aller-retour de l'onde est `Tc = 2L/a`. Si l'arrêt complet s'effectue en un temps `tf ≤ Tc`, la fermeture est considérée rapide dans cette analyse simplifiée et la hausse théorique maximale est :

- `ΔH = a ΔV / g`
- `ΔP = ρ a ΔV`

**Corrections HydroCalc :** le temps de fermeture est désormais demandé ; la célérité est une hypothèse éditable ; Joukowsky n'est plus présenté comme le transitoire réel lorsque la fermeture est lente ; une pression manométrique théorique négative n'est plus tronquée artificiellement à zéro ; aucune classe PN n'est déduite de ce seul calcul simplifié.

Vecteur de régression : `L = 500 m`, `ΔV = 1,2 m/s`, `a = 400 m/s`, `Pstat = 4 bar(g)`, `tf = 1 s` → `Tc = 2,5 s`, fermeture rapide, `ΔH = 48,9297 m`, `ΔP = 4,8 bar`, `Pmax théorique = 8,8 bar(g)`, `Pmin symétrique théorique = −0,8 bar(g)`.

Implémentation auditée : `js/science-advanced.js` → `HydroCalcScience.waterHammerJoukowsky()`.

## 7. STEP — cadre réglementaire et hypothèses de pré-dimensionnement

**Statut : CORRIGÉ pour la qualification réglementaire / paramètres de procédé encore en audit**

Référence réglementaire principale : arrêté du 21 juillet 2015 modifié, article 7 et annexe 3.

L'article 7 impose que les stations soient conçues et dimensionnées conformément aux règles de l'art pour traiter la charge reçue, le débit de référence, les boues produites et respecter les performances de rejet. Il ne transforme pas les ratios internes HydroCalc (charge surfacique, TSH, vitesse ascensionnelle, profondeur, nombre de bassins) en valeurs réglementaires.

HydroCalc distingue désormais les **seuils nationaux de rejet** des **hypothèses de conception**. Pour les stations recevant une CBPO ≥ 1,2 kg DBO₅/j, l'annexe 3 fixe notamment :

- CBPO < 120 kg DBO₅/j : DBO₅ 35 mg/L ou 60 % ; DCO 200 mg/L ou 60 % ; MES 50 % ;
- CBPO ≥ 120 kg DBO₅/j : DBO₅ 25 mg/L ou 80 % ; DCO 125 mg/L ou 75 % ; MES 35 mg/L ou 90 %.

Le respect du niveau MES est facultatif dans le jugement de conformité en performance selon la note du tableau 6. Des prescriptions plus strictes peuvent résulter du milieu récepteur, d'une zone sensible ou d'un arrêté préfectoral.

Moteur réglementaire : `js/science-step.js` → `HydroCalcScience.stepMinimumPerformance()`.

## 8. STEP — boues activées et clarificateur

**Statut : CORRIGÉ / moteurs de pré-dimensionnement actifs**

Référence technique principale : documentation INRAE/Cemagref sur les paramètres de dimensionnement des clarificateurs de boues activées.

La charge hydraulique superficielle ou vitesse ascensionnelle est définie par `Va = Qe / S`. La documentation technique souligne que la valeur limite ne dépend pas seulement d'un régime « faible/moyenne/forte charge », mais aussi de la qualité de décantation et de la concentration des boues, notamment via l'indice de boue et les MES.

**Erreurs corrigées :**

- l'ancien moteur appelait `Qj/24` « débit de pointe » ; il s'agit seulement du débit horaire moyen ;
- le nouveau moteur demande donc explicitement le débit horaire de pointe de projet `Qp` et dimensionne la surface hydraulique sur `S = Qp / Va` ;
- les valeurs de `Va`, concentration MVS, coefficient de production de boues et concentration des boues extraites sont affichées comme hypothèses de projet, pas comme prescriptions réglementaires ;
- le coefficient historique `0,8 kg MS/kg DBO₅` reste disponible comme valeur préremplie mais devient éditable et n'est plus présenté comme universel ;
- le sélecteur `60/70 g DBO₅/EH/j` distingue maintenant la définition de l'EH à 60 g/j d'une marge de conception éventuelle à justifier.

Vecteur de régression boues activées : `5000 EH`, `60 g DBO₅/EH/j`, `Cm = 0,15`, `MVS = 3,5 kg/m³`, `Qj = 1250 m³/j`, `Qp = 100 m³/h`, `Va = 1,0 m/h` → charge DBO₅ `300 kg/j`, masse MVS `2000 kg`, bassin `571,43 m³`, surface clarificateur `100 m²`.

Vecteur clarificateur : `Qm = 60 m³/h`, `Qp = 120 m³/h`, `Va = 1,2 m/h`, profondeur `3,5 m` → surface `100 m²`, volume `350 m³`.

Implémentations : `js/science-step.js` → `HydroCalcScience.activatedSludgePrefeasibility()` et `HydroCalcScience.clarifierHydraulicSizing()`.

## 9. STEP — lagunage naturel

**Statut : CORRIGÉ / filière naturelle classique auditée / lagunage aéré encore À VÉRIFIER**

Références principales : Cemagref/SATESE et EPNAC/INRAE, retour d'expérience français sur le lagunage naturel.

La configuration française classique de lagunage naturel est dimensionnée à environ **11 m²/EH** sur trois bassins en série :

- bassin 1 : `6 m²/EH` ;
- bassin 2 : `2,5 m²/EH` ;
- bassin 3 : `2,5 m²/EH` ;
- profondeur de l'ordre de `1 m`.

**Erreur corrigée :** avec son ancienne valeur par défaut de `100 kg DBO₅/ha/j`, HydroCalc aboutissait à environ `6 m²/EH`, puis répartissait cette surface `35/45/20 %`, ce qui ne correspondait pas à la filière classique de référence. Le nouveau moteur utilise directement la répartition `6 + 2,5 + 2,5 m²/EH` pour le lagunage naturel.

Le lagunage aéré est désormais séparé : HydroCalc ne réutilise plus automatiquement le modèle du lagunage naturel et n'affiche pas de dimensionnement chiffré tant que ce modèle n'est pas audité.

Vecteur de régression : `500 EH`, profondeur `1 m` → `5500 m²` au total, soit `3000 + 1250 + 1250 m²`, volume géométrique `5500 m³`.

Implémentation : `js/science-lagoon.js` → `HydroCalcScience.naturalLagoonClassic()`.

## 10. STEP — lits bactériens et biodisques

**Statut : CORRIGÉ / moteurs de pré-dimensionnement actifs**

Références principales : NF EN 12255-7, édition 2026, réacteurs biologiques à cultures fixées ; documentation Cemagref/INRAE sur les lits bactériens.

**Erreur documentaire corrigée :** l'ancien calculateur biodisques citait `NF EN 12255-8`, qui concerne le stockage et le traitement des boues. Les lits bactériens et les disques/tambours biologiques relèvent de `NF EN 12255-7`.

Pour le lit bactérien, HydroCalc distingue désormais :

- la charge organique volumique, saisie comme hypothèse de projet en `kg DBO₅/m³ de garnissage/j` ;
- le débit journalier de projet, désormais visible et éditable ;
- la recirculation ;
- la charge hydraulique appliquée au lit, calculée sur le débit total `Q × (1 + R)` rapporté à l'emprise horizontale.

La documentation Cemagref rappelle que la conduite hydraulique et la recirculation sont déterminantes pour le mouillage, le contrôle du biofilm, le colmatage et les odeurs. Les valeurs historiques associées automatiquement au matériau ne sont donc plus présentées comme universelles.

Pour les biodisques, la surface biologique reste calculée par `S = charge DBO₅ / charge surfacique choisie`, mais la charge surfacique est désormais explicitement une **donnée de conception** dépendant du procédé, de la température, de l'étagement et des objectifs carbone/azote ; elle n'est plus attribuée comme valeur imposée par une norme.

Vecteurs de régression : lit bactérien `120 kg DBO₅/j`, `Cv = 0,5 kg/m³/j`, hauteur `3 m`, `Q = 500 m³/j`, `R = 1` → volume `240 m³`, emprise `80 m²`, débit appliqué `1000 m³/j`, charge hydraulique `0,520833 m/h`. Biodisques `30 kg DBO₅/j`, `6 g/m²/j`, module `2000 m²` → surface requise `5000 m²`, 3 modules, `6000 m²` installés.

Implémentation : `js/science-biofilm.js`.

## 11. AEP — Hazen-Williams

**Statut : VALIDÉ pour l'implémentation mathématique / interprétation corrigée**

HydroCalc utilise la forme SI `V = 0,8492 × C × Rh^0,63 × S^0,54`, avec `Rh = D/4` pour une conduite circulaire pleine et `S = hf/L`.

La relation est empirique. Le coefficient `C` doit être choisi et justifié selon le matériau, l'état intérieur, l'âge de la conduite et le référentiel de projet ; il n'est pas traité comme une constante physique universelle.

**Interprétation corrigée :** le calculateur ne conclut plus automatiquement qu'une vitesse supérieure à `2 m/s` constitue à elle seule un risque de coup de bélier. L'analyse transitoire dépend notamment de la variation de vitesse, de la célérité et du temps de fermeture et relève du calculateur dédié.

Vecteur de régression : `Q = 10 L/s`, `D = 150 mm`, `C = 130`, `L = 200 m` → `V = 0,565884 m/s`, gradient `0,00264528`, perte de charge `0,529056 m`.

Implémentation : `js/science-aep.js` → `HydroCalcScience.hazenWilliamsHeadloss()`.

## File d'audit prioritaire

- STEP : lagunage aéré et consolidation des valeurs de conception restantes.
- AEP : HMT, NPSH, chloration et temps de séjour/réservoir.
- Milieux aquatiques : Shields, Langelier, passes à poissons et valeurs biologiques de référence.
