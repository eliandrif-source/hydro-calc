var MASTER_EAU_B03 = {
  'MASTER-EAU-025': {
    id: 'MASTER-EAU-025',
    titre: 'Fonctionnement hydrologique multi-échelle des bassins versants',
    fiche: {
      intro: "Le bassin versant est l'unité spatiale fondamentale de l'hydrologie. Son fonctionnement intègre des processus qui opèrent à des échelles temporelles et spatiales très différentes, depuis la goutte de pluie jusqu'au fleuve continental. Comprendre ces interactions multi-échelles est indispensable pour modéliser les débits, prévoir les crues et gérer la ressource en eau.",
      sections: [
        {
          titre: "Définition et délimitation des bassins versants",
          sous_sections: [
            { titre: "Bassins topographiques et hydrogéologiques", contenu: "Un bassin versant topographique est délimité par la ligne de partage des eaux déterminée à partir du MNT. Il peut diverger du bassin hydrogéologique lorsque des transferts souterrains franchissent la ligne de crête. L'analyse SIG permet de dériver automatiquement les bassins à partir des MNT après traitement des zones de dépression. La surface drainante, la forme (coefficient de compacité de Gravelius Kc), l'altitude moyenne et la pente sont les descripteurs morphométriques essentiels." },
            { titre: "Hiérarchisation du réseau hydrographique", contenu: "La classification de Strahler (ordres de cours d'eau) et celle de Horton décrivent la structure arborescente du réseau. Les lois de Horton (rapport de bifurcation Rb, rapport de longueur RL, rapport de surface RA) caractérisent la géométrie fractale du réseau et conditionnent la réponse hydrologique. Un réseau bien organisé présente Rb ≈ 3-5. La densité de drainage Dd = L_total/A influence directement les temps de concentration et la production de ruissellement." }
          ]
        },
        {
          titre: "Processus hydrologiques et leurs échelles caractéristiques",
          sous_sections: [
            { titre: "Echelles spatiales et temporelles des processus", contenu: "Les processus hydrologiques couvrent 10 ordres de grandeur en espace (mm à km) et 15 ordres de grandeur en temps (ms à siècles). L'infiltration et le ruissellement de surface opèrent à l'échelle du m² en quelques minutes. La recharge des nappes et l'étiage se manifestent à l'échelle du bassin sur des mois à années. Les transferts sédimentaires et la morphogenèse fluviale s'inscrivent sur des décennies à millénaires. Cette séparation d'échelles justifie des approches de modélisation différenciées." },
            { titre: "Connectivité hydrologique et non-linéarités", contenu: "La connectivité entre zones saturées, versants et chenal conditionne le fonctionnement non-linéaire du bassin. Des seuils hydrologiques (saturation du sol, dépassement de la capacité d'infiltration) produisent des réponses brusques et non proportionnelles aux forçages. Le concept de zone contributive variable (VSA, Dunne) explique pourquoi la surface génératrice de ruissellement évolue au cours d'un événement. La connectivité latérale versant-plaine d'inondation est déterminante pour les bilans de matière." }
          ]
        },
        {
          titre: "Réponse hydrologique et hydrogramme de crue",
          sous_sections: [
            { titre: "Décomposition de l'hydrogramme et temps caractéristiques", contenu: "L'hydrogramme de crue se décompose en ruissellement direct et débit de base. Le temps de montée tm, le débit de pointe Qp et le temps de base tb caractérisent la réponse. Le temps de concentration Tc (Kirpich, Giandotti, formule rationnelle) représente le délai entre la fin de la pluie efficace et la fin du ruissellement direct. La méthode de l'hydrogramme unitaire (Sherman) permet de transposer la réponse à des événements de durée différente, sous hypothèse de linéarité." },
            { titre: "Effets de l'hétérogénéité et de l'antécédent humide", contenu: "L'état d'humidité antécédent (AMC I, II, III dans la méthode SCS-CN) modifie profondément la réponse : un bassin saturé produit trois à cinq fois plus de ruissellement qu'un bassin sec. L'hétérogénéité spatiale des sols, de la végétation et de la topographie crée une variabilité de la réponse difficile à saisir par des modèles globaux. L'indice de position topographique (TWI = ln(a/tanβ)) prédit les zones à forte humidité et guide la discrétisation spatiale des modèles distribués." }
          ]
        },
        {
          titre: "Effets d'échelle et transfert d'information",
          sous_sections: [
            { titre: "Changement d'échelle et comportement émergent", contenu: "La mise en réseau de sous-bassins produit un effet d'amortissement et de décalage des pointes (laminage). Le débit spécifique (l/s/km²) décroît généralement avec la superficie selon une loi puissance, traduisant l'effet régulateur des aquifères et des zones humides. L'analyse régionale des crues (index-flood, QMNA5, Qix) exploite cette propriété d'échelle pour estimer les débits en sites non jaugés par régionalisation des paramètres. La transposition des résultats de petits bassins expérimentaux vers de grands bassins reste un défi majeur." },
            { titre: "Approches emboîtées et modélisation semi-distribuée", contenu: "Les approches semi-distribuées (HEC-HMS, SWAT, TOPMODEL) décomposent le bassin en unités hydrologiques de réponse (HRU) homogènes. Les échanges entre HRU sont modélisés par un réseau de transfert. Cette architecture capture mieux l'hétérogénéité spatiale qu'un modèle global tout en restant plus économique qu'un modèle entièrement distribué. Le calage de ces modèles requiert des données multi-sites pour contraindre les paramètres spatiaux et éviter la compensation d'erreurs." }
          ]
        }
      ],
      points: [
        "Le bassin versant topographique peut diverger du bassin hydrogéologique.",
        "Les lois de Horton décrivent la structure fractale du réseau hydrographique.",
        "Les processus hydrologiques couvrent 10 ordres de grandeur en espace.",
        "La connectivité hydrologique produit des réponses non-linéaires et à seuil.",
        "Le TWI (Topographic Wetness Index) prédit les zones saturées.",
        "L'état d'humidité antécédent AMC modifie drastiquement le ruissellement.",
        "Le débit spécifique décroît avec la superficie selon une loi puissance.",
        "Le temps de concentration Tc gouverne la réponse en fréquence du bassin.",
        "Les HRU (Hydrologic Response Units) sont la brique des modèles semi-distribués.",
        "La régionalisation permet d'estimer les débits en sites non jaugés."
      ],
      formules: [
        { nom: "Coefficient de compacité de Gravelius", expression: "Kc = 0.28 × P / √A", variables: "P = périmètre (km), A = superficie (km²)" },
        { nom: "Densité de drainage", expression: "Dd = ΣL / A", variables: "ΣL = longueur totale du réseau (km), A = superficie (km²)" },
        { nom: "Topographic Wetness Index", expression: "TWI = ln(a / tan β)", variables: "a = aire drainée spécifique (m²/m), β = pente locale (rad)" },
        { nom: "Débit de pointe méthode rationnelle", expression: "Qp = C × i × A / 360", variables: "C = coefficient de ruissellement, i = intensité (mm/h), A = surface (ha)" },
        { nom: "Loi de Kirpich (temps de concentration)", expression: "Tc = 0.0195 × L^0.77 / S^0.385", variables: "L = longueur du chenal (m), S = pente moyenne (m/m)" }
      ],
      retenir: "Le bassin versant est un système multi-échelle où des processus de quelques millimètres et secondes s'intègrent jusqu'à l'échelle continentale et pluriannuelle. La non-linéarité (connectivité, seuils, état antécédent) rend la prédiction plus complexe que la simple proportionnalité pluie-débit. La morphométrie (Kc, Dd, TWI) et la hiérarchisation du réseau (Strahler) sont les outils structurants pour comparer et classifier les bassins."
    },
    exercices: [
      { id: 1, enonce: "Un bassin versant a une superficie A = 450 km² et un périmètre P = 110 km. Calculez le coefficient de compacité Kc et déterminez si ce bassin est allongé ou compact (Kc > 1,28 → compact).", correction: "Kc = 0,28 × 110 / √450 = 30,8 / 21,21 = 1,45. Kc > 1,28 donc le bassin est compact, avec un risque de crue plus élevé." },
      { id: 2, enonce: "Le réseau hydrographique d'un bassin de 200 km² totalise 480 km de cours d'eau. Calculez la densité de drainage et commentez.", correction: "Dd = 480 / 200 = 2,4 km/km². Densité élevée indiquant une forte réactivité aux pluies, sols peu perméables ou terrain pentu." },
      { id: 3, enonce: "Calculez le TWI pour un point où la pente est 8° et l'aire drainée spécifique est 150 m²/m.", correction: "β = 8° = 0,1396 rad, tan(8°) = 0,1405. TWI = ln(150 / 0,1405) = ln(1067) = 6,97. Zone d'humectation intermédiaire (TWI > 8 = zone saturée)." },
      { id: 4, enonce: "Appliquez la méthode rationnelle pour estimer le débit de pointe d'un bassin de 25 ha avec C = 0,65 et une pluie de fréquence décennale d'intensité 60 mm/h.", correction: "Qp = 0,65 × 60 × 25 / 360 = 975 / 360 = 2,71 m³/s." },
      { id: 5, enonce: "Le temps de concentration d'un bassin est estimé à 2h. Pour une pluie de 30 mm tombée en 1h, tracez le schéma de l'hydrogramme et estimez le temps de base.", correction: "Avec Tc = 2h et pluie de durée D = 1h < Tc, le temps de base tb ≈ Tc + D = 3h. La montée dure ≈ D + tm avec tm ≈ Tc pour des pluies courtes." },
      { id: 6, enonce: "Expliquez pourquoi le débit spécifique de crue décennale décroît quand la superficie augmente, en utilisant les concepts de connectivité et de laminage.", correction: "Les grands bassins intègrent des zones humides, des plaines d'inondation et des aquifères qui laminent les pointes. La probabilité que toute la surface soit simultanément saturée décroît avec la taille. Le réseau de chenal amortit et décale les contributions partielles." },
      { id: 7, enonce: "Un bassin a un ordre de Strahler maximum 4. Les rapports de Horton sont Rb = 4, RL = 2,5, RA = 4,5. Calculez le nombre de cours d'eau d'ordre 1 si le cours d'eau d'ordre 4 est unique.", correction: "N4 = 1, N3 = Rb × N4 = 4, N2 = Rb × N3 = 16, N1 = Rb × N2 = 64 cours d'eau d'ordre 1." },
      { id: 8, enonce: "Un bassin présente une forte divergence entre bassin topographique (120 km²) et bassin hydrogéologique estimé (95 km²). Quelles conséquences sur le bilan hydrologique ?", correction: "25 km² de surface contribue potentiellement à un bassin voisin par des transferts souterrains. Le bilan sera déficitaire : précipitations – évapotranspiration > débit observé. Il faut intégrer un terme de transfert souterrain sortant dans le bilan." }
    ],
    flashcards: [
      { question: "Qu'est-ce que le coefficient de compacité de Gravelius ?", reponse: "Kc = 0,28 × P / √A. Il compare la forme du bassin à celle d'un cercle. Kc = 1 pour un cercle parfait, Kc > 1,28 → bassin compact à réponse rapide." },
      { question: "Définir le TWI (Topographic Wetness Index)", reponse: "TWI = ln(a / tan β). Il prédit les zones à forte humidité du sol. Zones de tête (TWI faible), fonds de vallée (TWI élevé > 8 → saturation)." },
      { question: "Qu'est-ce que la zone contributive variable (VSA) ?", reponse: "Concept de Dunne : la surface qui génère du ruissellement évolue au cours de l'événement selon l'état de saturation local. Les zones saturées s'étendent depuis les bas-fonds vers les versants." },
      { question: "Définir la densité de drainage Dd", reponse: "Dd = longueur totale du réseau / surface du bassin (km/km²). Dd élevée → bassin réactif, peu perméable. Dd faible → bassin tampon, sols perméables." },
      { question: "Quelle est la classification de Strahler ?", reponse: "Les cours d'eau sans affluent sont d'ordre 1. Deux cours d'eau d'ordre n se rejoignant donnent un ordre n+1. Un affluent d'ordre inférieur ne modifie pas l'ordre du tronçon principal." },
      { question: "Pourquoi le fonctionnement hydrologique est-il non-linéaire ?", reponse: "Des seuils (saturation, dépassement capacité d'infiltration) provoquent des sauts de comportement. L'AMC, la connectivité variable et les échanges nappe-rivière créent des réponses disproportionnées par rapport au forçage." }
    ]
  },

  'MASTER-EAU-026': {
    id: 'MASTER-EAU-026',
    titre: 'Mesure et représentation des précipitations',
    fiche: {
      intro: "Les précipitations constituent le forçage principal du cycle hydrologique continental. Leur mesure précise et leur représentation spatiale sont des étapes critiques pour toute modélisation hydrologique. Les incertitudes sur les précipitations se propagent directement dans les estimations de débit, avec un ratio d'amplification souvent supérieur à 1.",
      sections: [
        {
          titre: "Instrumentation et réseaux de mesure",
          sous_sections: [
            { titre: "Pluviomètres, pluviographes et leurs incertitudes", contenu: "Le pluviomètre à auget basculant mesure des cumuls avec une résolution de 0,1 à 0,2 mm par basculement. Les erreurs systématiques incluent la sous-capture par vent (jusqu'à 10% en plaine, 30% en montagne), l'évaporation et le mouillage (1-3%). Les pluviomètres Hellmann ou Snowdon permettent de corriger ces biais avec des boucliers pare-vent. L'incertitude totale d'un réseau de pluviomètres est de l'ordre de 5-15% selon la densité et les conditions climatiques." },
            { titre: "Radar météorologique et estimation quantitative des précipitations", contenu: "Le radar en bande C (5,6 cm) ou S (10 cm) estime la réflectivité Z reliée au taux de précipitation R par la relation Z-R de Marshall-Palmer : Z = 200 R^1,6. Les radars à double polarisation (ZDR, KDP) réduisent les erreurs d'estimation. Les principales sources d'erreur radar sont l'atténuation, les échos parasites (relief, insectes), le profile vertical de réflectivité et la variabilité de la relation Z-R. La fusion radar-pluviomètre (krigeage avec dérive externe) combine les avantages des deux sources." }
          ]
        },
        {
          titre: "Variabilité spatiale et interpolation",
          sous_sections: [
            { titre: "Structure spatiale et variogramme des précipitations", contenu: "La variabilité spatiale des précipitations dépend de l'échelle temporelle : les événements convectifs (< 1h) sont très hétérogènes (portée de corrélation < 10 km), les précipitations stratiformes sont plus homogènes (portée > 50 km). Le variogramme expérimental γ(h) = ½ Var[P(x) - P(x+h)] quantifie cette structure spatiale. Sa modélisation (sphérique, gaussien, puissance) conditionne la qualité de l'interpolation par krigeage." },
            { titre: "Méthodes d'interpolation spatiale", contenu: "La méthode de Thiessen (polygones de Voronoï) est simple mais ignore la structure spatiale. L'interpolation par gradient altitudinal corrige le gradient pluie-altitude. Le krigeage ordinaire (KO) est le Best Linear Unbiased Estimator (BLUE) et fournit une variance d'estimation. Le krigeage avec dérive externe (KED) intègre une variable auxiliaire (radar, MNT) pour améliorer l'interpolation en terrain complexe. La validation croisée (leave-one-out) évalue la performance comparative des méthodes." }
          ]
        },
        {
          titre: "Fréquence et analyse statistique des précipitations",
          sous_sections: [
            { titre: "Courbes intensité-durée-fréquence (IDF)", contenu: "Les courbes IDF relient l'intensité de précipitation à la durée et à la fréquence de retour. La relation de Montana i(d,T) = a(T) × d^(-b) décrit l'enveloppe. Les paramètres a et b sont estimés par ajustement aux maximums annuels par durée. La loi GEV (Gumbel, Fréchet, Weibull) est ajustée aux maxima par la méthode des L-moments ou du maximum de vraisemblance. Les valeurs IDF servent de référence pour le dimensionnement des ouvrages de drainage urbain." },
            { titre: "Analyse de fréquence régionale des précipitations", contenu: "L'homogénéisation régionale (algorithme HITA, test de Wilcoxon) identifie les stations appartenant à la même région homogène. L'index-flood (ou index-rain) régionalise les quantiles en deux étapes : estimation du quantile médian local et courbe de croissance régionale adimensionnelle. Les méthodes bayésiennes permettent d'intégrer des données historiques ou paléoclimatiques pour améliorer l'estimation des périodes de retour élevées (100 à 1000 ans)." }
          ]
        },
        {
          titre: "Estimation des précipitations par satellite",
          sous_sections: [
            { titre: "Produits satellitaires de précipitation", contenu: "Les produits satellitaires (TRMM, GPM-IMERG, PERSIANN, CMORPH) combinent observations infrarouge (nuages froids → pluie) et micro-ondes passives (mesure directe de l'hydrométeore). La résolution spatiale (0,1° à 0,25°) et temporelle (30 min à 3h) a fortement progressé. IMERG-Final est retraité avec des données pluviométriques et constitue un produit de référence. Les biais systématiques des produits satellites varient selon le régime de précipitation (tropical, orographique, continental)." },
            { titre: "Fusion de données multi-sources", contenu: "La combinaison optimale de données pluviométriques, radar et satellite exploite les forces de chaque source. La méthode d'ensemble bayésienne (BMA) pondère les sources par leurs performances locales. Le krigeage avec dérive externe (KED) intègre un champ radar comme variable secondaire pour corriger les artefacts et améliorer la résolution spatiale des champs interpolés. L'incertitude des champs de précipitations fusionnés est quantifiée par simulation stochastique (géostatistique séquentielle)." }
          ]
        }
      ],
      points: [
        "La sous-capture par vent est l'erreur systématique principale des pluviomètres (5-30%).",
        "La relation Z-R de Marshall-Palmer : Z = 200 R^1,6 est la référence radar.",
        "Le variogramme quantifie la structure spatiale des précipitations.",
        "Le krigeage ordinaire est le BLUE des interpolateurs linéaires.",
        "Les courbes IDF suivent la relation de Montana : i = a(T) × d^(-b).",
        "La loi GEV (Gumbel, Fréchet, Weibull) décrit les maxima de précipitation.",
        "GPM-IMERG est le produit satellitaire de référence à 0,1° / 30 min.",
        "La fusion radar-pluviomètre par KED combine les avantages des deux sources.",
        "La validation croisée évalue les méthodes d'interpolation de façon non biaisée.",
        "L'analyse régionale (index-rain) permet d'estimer les quantiles rares."
      ],
      formules: [
        { nom: "Relation Z-R de Marshall-Palmer", expression: "Z = 200 × R^1.6", variables: "Z = réflectivité (mm⁶/m³), R = taux de précipitation (mm/h)" },
        { nom: "Relation de Montana (IDF)", expression: "i(d,T) = a(T) × d^(-b)", variables: "i = intensité (mm/h), d = durée (h), a et b = paramètres régionaux, T = période de retour (ans)" },
        { nom: "Variogramme expérimental", expression: "γ(h) = (1/2N(h)) × Σ[P(xi) - P(xi+h)]²", variables: "h = distance de séparation, N(h) = nb de paires à distance h" },
        { nom: "Estimateur de krigeage", expression: "P*(x0) = Σ λi × P(xi)", variables: "λi = poids de krigeage optimisant la variance d'estimation, P(xi) = valeurs aux points de mesure" },
        { nom: "Loi GEV (Gumbel type I)", expression: "F(x) = exp(-exp(-(x-μ)/σ))", variables: "μ = paramètre de position, σ = paramètre d'échelle > 0" }
      ],
      retenir: "La mesure des précipitations cumule des erreurs instrumentales, spatiales et d'interpolation. La maîtrise de la géostatistique (variogramme, krigeage) est indispensable pour produire des champs de précipitations fiables. Les courbes IDF et l'analyse fréquentielle régionale fournissent les forçages de dimensionnement. La fusion multi-sources (pluviomètre + radar + satellite) est l'état de l'art pour réduire l'incertitude globale."
    },
    exercices: [
      { id: 1, enonce: "Un pluviomètre mesure 48,5 mm lors d'une tempête. Le biais de sous-capture estimé est 8%. Calculez la précipitation réelle corrigée.", correction: "P_corrigée = 48,5 / (1 - 0,08) = 48,5 / 0,92 = 52,7 mm." },
      { id: 2, enonce: "La réflectivité radar est Z = 3160 mm⁶/m³. Estimez le taux de précipitation par Marshall-Palmer.", correction: "Z = 200 R^1,6 → R = (Z/200)^(1/1,6) = (3160/200)^(0,625) = 15,8^0,625 = 6,7 mm/h." },
      { id: 3, enonce: "Les paramètres IDF d'une région sont a(10 ans) = 32, b = 0,65. Calculez l'intensité décennale pour une durée de 2 heures.", correction: "i = 32 × 2^(-0,65) = 32 × 0,642 = 20,5 mm/h. Pluie décennale de 2h : P = 20,5 × 2 = 41 mm." },
      { id: 4, enonce: "Cinq stations pluviométriques mesurent (mm) : 25, 31, 18, 42, 28. Calculez la moyenne par Thiessen si les surfaces de Voronoï sont 15, 22, 18, 10, 35 km².", correction: "P_moy = (25×15 + 31×22 + 18×18 + 42×10 + 28×35) / (15+22+18+10+35) = (375+682+324+420+980) / 100 = 2781/100 = 27,8 mm." },
      { id: 5, enonce: "Le variogramme d'un champ de pluie montre une portée de 25 km et un palier de 80 mm². Une station à 40 km est sans corrélation avec le point d'estimation. Que vaut le poids de krigeage pour cette station ?", correction: "Au-delà de la portée (40 km > 25 km), γ(h) = palier = 80. Les stations non corrélées reçoivent un poids λ ≈ 0 dans le krigeage ordinaire (sauf la contrainte de somme = 1 qui distribue les poids aux stations corrélées)." },
      { id: 6, enonce: "Expliquez pourquoi les radars en bande S (10 cm) sont moins sensibles à l'atténuation que les radars en bande C (5,6 cm).", correction: "L'atténuation par l'eau liquide augmente avec la fréquence (longueur d'onde plus courte). La bande C (λ = 5,6 cm) subit une atténuation 5-10× plus forte que la bande S (λ = 10 cm). En événements intenses, le signal bande C peut être complètement atténué derrière une cellule convective." },
      { id: 7, enonce: "Calculez la quantile de pluie journalière décennale par la loi de Gumbel si μ = 55 mm et σ = 18 mm.", correction: "Pour T = 10 ans : u = -ln(-ln(1 - 1/10)) = -ln(-ln(0,9)) = -ln(0,1054) = 2,25. x_10 = μ + σ × u = 55 + 18 × 2,25 = 55 + 40,5 = 95,5 mm." },
      { id: 8, enonce: "Quels sont les avantages du krigeage avec dérive externe (KED) sur le krigeage ordinaire pour l'interpolation des pluies en montagne ?", correction: "Le KED intègre le gradient pluie-altitude comme variable auxiliaire. Il reproduit l'effet orographique sans augmenter les incertitudes d'interpolation. Le KO ignore la topographie et sous-estime les précipitations sur les reliefs. Le KED est la méthode recommandée en zones montagneuses avec gradient altitudinal marqué." }
    ],
    flashcards: [
      { question: "Quelle est la relation Z-R de Marshall-Palmer ?", reponse: "Z = 200 × R^1,6. Z en mm⁶/m³, R en mm/h. Elle est la relation empirique de référence mais très variable selon le type de précipitation." },
      { question: "Qu'est-ce que la portée du variogramme ?", reponse: "Distance à partir de laquelle deux points sont décorrélés spatialement. Au-delà de la portée, γ(h) = palier (variance totale). Elle dépend du type et de la durée de l'événement pluvieux." },
      { question: "Définir la relation de Montana pour les courbes IDF", reponse: "i(d,T) = a(T) × d^(-b). L'intensité décroît avec la durée selon une loi puissance de paramètre b (typiquement 0,6-0,8). Les paramètres a et b sont régionaux et dépendent de la période de retour T." },
      { question: "Qu'est-ce que le krigeage ordinaire (KO) ?", reponse: "Interpolateur linéaire BLUE (Best Linear Unbiased Estimator) qui minimise la variance d'estimation sous contrainte d'inbiaisement. Fournit une carte d'incertitude (variance de krigeage). Nécessite un variogramme modélisé." },
      { question: "Citez les principales sources d'erreur des radars météorologiques", reponse: "Atténuation, échos parasites (relief, insectes, oiseaux), profil vertical de réflectivité (VPR), variabilité de la relation Z-R, déphasage de faisceau en terrain complexe." },
      { question: "Qu'est-ce que le produit GPM-IMERG ?", reponse: "Integrated Multi-satellitE Retrievals for GPM. Résolution 0,1°/30 min, couverture globale 60°S-60°N. Version Final retraitée avec données au sol. Référence mondiale pour les régions sans réseau de mesure." }
    ]
  },

  'MASTER-EAU-027': {
    id: 'MASTER-EAU-027',
    titre: 'Évapotranspiration et bilans d\'énergie',
    fiche: {
      intro: "L'évapotranspiration (ET) représente en moyenne 60% des précipitations continentales et constitue le principal retour d'eau vers l'atmosphère. Sa quantification est essentielle pour le bilan hydrologique et la gestion de l'irrigation. Les approches varient de la mesure directe (lysimètre, flux de chaleur latente) aux formules empiriques (Penman-Monteith, Hargreaves), chacune adaptée à différents contextes de données.",
      sections: [
        {
          titre: "Physique de l'évapotranspiration",
          sous_sections: [
            { titre: "Bilan d'énergie et flux de chaleur latente", contenu: "Le bilan d'énergie à la surface s'écrit : Rn = LE + H + G où Rn est le rayonnement net, LE le flux de chaleur latente (évaporation), H le flux de chaleur sensible et G le flux de chaleur dans le sol. Le rapport de Bowen β = H/LE permet de partitionner l'énergie disponible selon les conditions d'humidité du sol et de végétation. Sur une surface saturée (eau libre), β ≈ 0,1-0,3 en région tempérée humide. Sur un sol sec, β peut dépasser 10, traduisant une évaporation quasi nulle." },
            { titre: "Résistances aérodynamique et stomatique", contenu: "Le flux d'évapotranspiration est gouverné par la différence de pression de vapeur entre la surface et l'atmosphère, divisée par la résistance totale : λET = ρCp × (es - ea) / (ra + rs). La résistance aérodynamique ra dépend de la vitesse du vent et de la rugosité de surface. La résistance stomatique rs reflète le contrôle physiologique de la plante sur les pertes en eau (fermeture des stomates en cas de stress hydrique). Pour une culture de référence (gazon court), rs = 70 s/m est la valeur standard FAO." }
          ]
        },
        {
          titre: "Formules d'estimation de l'ETP et de l'ETr",
          sous_sections: [
            { titre: "Équation de Penman-Monteith FAO-56", contenu: "La formule FAO-56 est la référence mondiale pour l'ETP de référence (gazon court de 12 cm, rs = 70 s/m) : ET0 = [0,408Δ(Rn-G) + γ(900/(T+273))u2(es-ea)] / [Δ + γ(1+0,34u2)]. Elle requiert température, humidité, rayonnement et vent. Les coefficients culturaux Kc (FAO-56, BCEOM) permettent de passer à l'ETc = Kc × ET0 selon le stade phénologique. La méthode est applicable à toutes les zones climatiques avec des données horaires ou journalières." },
            { titre: "Méthodes simplifiées (Hargreaves, Priestley-Taylor)", contenu: "La formule de Hargreaves-Samani utilise uniquement les températures min/max et le rayonnement extraterrestre : ET0 = 0,0023 × Ra × (T+17,8) × (Tmax-Tmin)^0,5. Elle est adaptée aux régions avec données limitées et introduit une erreur de 10-15% par rapport à Penman-Monteith. La formule de Priestley-Taylor ET0 = α × Δ/(Δ+γ) × (Rn-G)/λ utilise α = 1,26 en conditions bien humectées. Elle est robuste en l'absence de données de vent mais surestime en conditions arides." }
          ]
        },
        {
          titre: "Mesure de l'évapotranspiration",
          sous_sections: [
            { titre: "Lysimétrie et méthode eddy-covariance", contenu: "Le lysimètre à pesée mesure directement l'ET par différence entre précipitation, drainage et variation de masse. C'est la référence métrologique mais le coût et la représentativité spatiale limitent son déploiement. La méthode eddy-covariance mesure les flux turbulents de chaleur latente et sensible par covariance entre fluctuations verticales de vent et de concentration en vapeur d'eau. Elle intègre une surface de flux (footprint) de quelques dizaines à centaines de mètres. Les réseaux FLUXNET fournissent des données standardisées pour la calibration des modèles." },
            { titre: "Estimation par bilan hydrique et télédétection", contenu: "Le bilan hydrique du sol (méthode FAO-29) calcule l'ET actuelle comme la différence entre précipitation et variation de stock (humidité sol) + drainage. Cette approche intègre la disponibilité en eau. La télédétection thermique (SEBAL, METRIC) estime l'ET par inversion du bilan d'énergie à partir des images satellitaires (température de surface, NDVI, albédo). Ces méthodes sont pertinentes pour les grandes superficies et permettent de cartographier l'ET à l'échelle régionale (produits MODIS MOD16, Landsat)." }
          ]
        },
        {
          titre: "Évapotranspiration réelle et stress hydrique",
          sous_sections: [
            { titre: "Modèles de stress hydrique", contenu: "L'ETr (réelle) est inférieure à l'ETP quand le sol est insuffisamment humide. Le coefficient de stress Ks = (θ - θwp) / (θfc - θwp) décrit la réduction d'ET selon la réserve utile disponible. La réserve utile (RU) et la réserve facilement utilisable (RFU = 2/3 RU) délimitent les phases d'alimentation: au-dessus de la RFU, ETr = ETP; en-dessous, ETr = Ks × ETP. Pour les calculs de bilan hydrique agricole, la FAO recommande l'approche double coefficient Kc = Kcb × Ks + Ke." },
            { titre: "Effets du changement climatique sur l'ET", contenu: "L'effet combiné de l'augmentation de température (hausse de la demande évaporative) et du CO2 atmosphérique (fermeture partielle des stomates, réduction de rs) sur l'ET est complexe. Les modèles de végétation dynamique (JSBACH, ORCHIDEE) couplent la physiologie végétale au bilan d'énergie. L'effet CO2 sur la transpiration (réduction de 5-15%) peut partiellement compenser la hausse liée à la température, mais dépend fortement des espèces et des régimes de précipitations. Ces interactions sont une source majeure d'incertitude dans les projections hydrologiques." }
          ]
        }
      ],
      points: [
        "Bilan d'énergie : Rn = LE + H + G. L'ET consomme la majorité de l'énergie disponible.",
        "La résistance stomatique rs = 70 s/m est la valeur standard FAO pour la culture de référence.",
        "La formule Penman-Monteith FAO-56 est la référence mondiale pour ET0.",
        "Hargreaves-Samani n'utilise que les températures et le rayonnement extraterrestre.",
        "Le lysimètre à pesée est la référence métrologique de l'ET.",
        "FLUXNET fournit des données eddy-covariance standardisées pour la calibration.",
        "Le coefficient cultural Kc permet de passer de ET0 à ETc selon le stade.",
        "La RFU (réserve facilement utilisable) = 2/3 RU délimite le début du stress hydrique.",
        "SEBAL et METRIC estiment l'ET par inversion du bilan d'énergie satellitaire.",
        "L'effet CO2 sur les stomates peut réduire la transpiration de 5-15%."
      ],
      formules: [
        { nom: "Bilan d'énergie de surface", expression: "Rn = LE + H + G", variables: "Rn = rayonnement net (W/m²), LE = flux latent, H = flux sensible, G = flux sol" },
        { nom: "Penman-Monteith FAO-56 (ET0)", expression: "ET0 = [0.408Δ(Rn-G) + γ(900/(T+273))u2(es-ea)] / [Δ + γ(1+0.34u2)]", variables: "Δ = pente de la courbe de saturation, γ = constante psychrométrique, u2 = vent à 2m, es-ea = déficit de pression de vapeur" },
        { nom: "Hargreaves-Samani", expression: "ET0 = 0.0023 × Ra × (T+17.8) × (Tmax-Tmin)^0.5", variables: "Ra = rayonnement extraterrestre (mm/j), T = température moyenne (°C)" },
        { nom: "Coefficient de stress hydrique", expression: "Ks = (θ - θwp) / (θfc - θwp)", variables: "θ = humidité actuelle, θwp = point de flétrissement, θfc = capacité au champ" },
        { nom: "Rapport de Bowen", expression: "β = H / LE = γ × (Ts - Ta) / (es(Ts) - ea)", variables: "γ = constante psychrométrique, Ts = température de surface, Ta = température de l'air" }
      ],
      retenir: "L'ET est contrôlée par l'énergie disponible (Rn) et par les résistances aérodynamique et stomatique. Penman-Monteith FAO-56 est la formule de référence, applicable avec des données de qualité. En données limitées, Hargreaves-Samani offre un compromis acceptable. Le stress hydrique (coefficient Ks, RFU) réduit l'ETr sous l'ETP et doit être modélisé explicitement dans les bilans hydrologiques."
    },
    exercices: [
      { id: 1, enonce: "Le rayonnement net est Rn = 150 W/m², le flux de chaleur dans le sol G = 10 W/m² et le rapport de Bowen β = 0,3. Calculez LE et l'ET journalière (1 W/m² ≈ 0,035 mm/j).", correction: "Rn - G = 140 W/m². LE = (Rn-G)/(1+β) = 140/1,3 = 107,7 W/m². ET = 107,7 × 0,035 = 3,77 mm/j." },
      { id: 2, enonce: "Avec Penman-Monteith : Δ = 0,145 kPa/°C, γ = 0,067 kPa/°C, Rn-G = 7 MJ/m²/j, T = 20°C, u2 = 2 m/s, es-ea = 1,2 kPa. Calculez ET0 (en mm/j).", correction: "Numérateur = 0,408×0,145×7 + 0,067×(900/293)×2×1,2 = 0,414 + 0,067×3,07×2×1,2 = 0,414 + 0,494 = 0,908. Dénominateur = 0,145 + 0,067×(1+0,68) = 0,145 + 0,113 = 0,258. ET0 = 0,908/0,258 = 3,52 mm/j." },
      { id: 3, enonce: "Ra = 25 mm/j, Tmoy = 18°C, Tmax = 26°C, Tmin = 10°C. Calculez ET0 par Hargreaves.", correction: "ET0 = 0,0023 × 25 × (18+17,8) × (26-10)^0,5 = 0,0023 × 25 × 35,8 × 4 = 8,23 mm/j." },
      { id: 4, enonce: "Une culture en phase de développement a Kc = 0,85 et ET0 = 4,2 mm/j. L'humidité du sol est à 60% de la RU (> RFU). Calculez ETc.", correction: "θ > RFU donc Ks = 1 (pas de stress). ETc = Kc × Ks × ET0 = 0,85 × 1 × 4,2 = 3,57 mm/j." },
      { id: 5, enonce: "La RU d'un sol est 90 mm, θ actuel = 35% de la RU, θwp = 20% de la RU. Calculez Ks.", correction: "θfc = RU = 100%, θwp = 20%, θ = 35%. Ks = (35-20)/(100-20) = 15/80 = 0,19. Stress sévère, ETr = 19% de ETP." },
      { id: 6, enonce: "Expliquez la différence entre ET0 (ou ETP), ETc et ETr.", correction: "ET0 = évapotranspiration de référence (gazon court, sans stress). ETc = ET de la culture en conditions optimales = Kc × ET0. ETr = ET réelle = Ks × Kc × ET0 en tenant compte du stress hydrique (Ks ≤ 1)." },
      { id: 7, enonce: "Un lysimètre reçoit 35 mm de pluie, draine 8 mm et voit sa masse augmenter de 10 mm d'équivalent eau. Calculez l'ET mesurée.", correction: "Bilan : P = ET + drainage + ΔS → 35 = ET + 8 + 10 → ET = 17 mm." },
      { id: 8, enonce: "Quels avantages offre la méthode eddy-covariance sur le lysimètre pour estimer l'ET à l'échelle d'un bassin ?", correction: "L'eddy-covariance mesure un flux sur un footprint de 100-1000 m (surface représentative), contre 1-10 m² pour un lysimètre. Elle est non destructive, mesure en temps réel, capture la variabilité à haute fréquence. En revanche, elle nécessite des corrections (bilan d'énergie non fermé, qualité des données) et est coûteuse." }
    ],
    flashcards: [
      { question: "Écrire l'équation du bilan d'énergie de surface", reponse: "Rn = LE + H + G. Rn = rayonnement net disponible. LE = chaleur latente (évaporation). H = chaleur sensible (réchauffement air). G = chaleur dans le sol. LE domine sur surface végétalisée humide." },
      { question: "Quelle est la valeur standard de rs pour la culture de référence FAO ?", reponse: "rs = 70 s/m (gazon court de 12 cm). Cette valeur est utilisée dans Penman-Monteith FAO-56 pour calculer ET0 indépendamment du type de culture." },
      { question: "Qu'est-ce que le coefficient cultural Kc ?", reponse: "Kc = ETc / ET0. Il dépend du type de culture et du stade phénologique (Kc_ini < Kc_mid > Kc_fin). Fourni par la FAO (FAO-56) pour les principales cultures." },
      { question: "Définir la réserve facilement utilisable (RFU)", reponse: "RFU = 2/3 × RU. Tant que l'humidité du sol est au-dessus de la RFU, ETr = ETP (pas de stress). En dessous, Ks < 1 et ETr < ETP. La RFU dépend de la culture (profondeur racinaire)." },
      { question: "Avantages et limites de Hargreaves vs Penman-Monteith", reponse: "Hargreaves : ne requiert que T et Ra (accessible partout). Erreur ±10-15%. Penman-Monteith : requiert T, HR, Rn, vent. Plus précise (±5%) mais données souvent indisponibles en régions isolées." },
      { question: "Qu'est-ce que le footprint en eddy-covariance ?", reponse: "Surface dont les flux contribuent à la mesure. Dépend de la hauteur de mesure, du vent et de la stabilité atmosphérique. Typiquement 100-1000 m de rayon. Doit être homogène pour des mesures représentatives." }
    ]
  },

  'MASTER-EAU-028': {
    id: 'MASTER-EAU-028',
    titre: 'Infiltration et transferts dans les sols',
    fiche: {
      intro: "L'infiltration est le processus par lequel l'eau de pluie ou d'irrigation pénètre dans le sol. Elle conditionne le partage entre ruissellement de surface et recharge des nappes, et détermine largement la réponse hydrologique des bassins versants. Les modèles d'infiltration, des équations empiriques de Green-Ampt et Philip jusqu'aux approches par la loi de Richards, couvrent un spectre de complexité adapté à différentes applications.",
      sections: [
        {
          titre: "Physique de l'infiltration",
          sous_sections: [
            { titre: "Équation de Richards et mouvement de l'eau dans les sols non saturés", contenu: "L'équation de Richards ∂θ/∂t = ∂/∂z [K(θ)(∂h/∂z + 1)] décrit le mouvement de l'eau dans un sol non saturé. Elle est fortement non-linéaire en raison de la dépendance de la conductivité hydraulique K(θ) et de la succion h(θ) à la teneur en eau. Les courbes de rétention (van Genuchten, Brooks-Corey) et les fonctions de conductivité hydraulique non saturée K(θ) caractérisent les propriétés hydrauliques du sol. La résolution numérique de Richards nécessite une discrétisation fine en espace et en temps, ce qui est coûteux pour les grands bassins." },
            { titre: "Capacité d'infiltration et front humide", contenu: "La capacité d'infiltration f(t) décroît dans le temps depuis une valeur initiale élevée fi (sol sec) jusqu'à la conductivité hydraulique à saturation Ks (état d'équilibre). Le ruissellement de Horton se produit lorsque l'intensité de pluie dépasse la capacité d'infiltration. Le front humide (Green-Ampt) est une simplification qui représente la progression d'un front abrupt entre sol saturé et sol initial. La profondeur du front L augmente selon la racine du temps, caractéristique de la diffusion capillaire." }
          ]
        },
        {
          titre: "Modèles d'infiltration",
          sous_sections: [
            { titre: "Modèles empiriques de Horton et Philip", contenu: "Le modèle de Horton f(t) = fc + (fi - fc) × exp(-kt) décrit le déclin exponentiel de la capacité d'infiltration avec trois paramètres (fi, fc = Ks, k). Pratique mais sans base physique rigoureuse. L'équation de Philip (deux termes) f(t) = S/(2√t) + A offre une base physique partielle : S est la sorptivité (capillarité) et A ≈ Ks/3 rend compte de la gravité. Ces modèles calibrés sur infiltromètre double anneau sur-estiment souvent l'infiltration in situ par effet d'échelle." },
            { titre: "Modèle de Green-Ampt", contenu: "Green-Ampt formule l'infiltration cumulée F(t) implicitement : F = Ks × t + Sf × Δθ × ln(1 + F/(Sf × Δθ)) où Sf est la succion au front (ψf) et Δθ le déficit en eau. Ce modèle a une base physique semi-empirique et les paramètres (Ks, Sf, Δθ) peuvent être estimés à partir des propriétés texturales du sol (tableaux de Rawls & Brakensiek). Il est largement utilisé dans les modèles hydrologiques semi-distribués (HEC-HMS, SWMM) et permet de simuler explicitement le déclenchement du ruissellement." }
          ]
        },
        {
          titre: "Hétérogénéité spatiale et transferts préférentiels",
          sous_sections: [
            { titre: "Variabilité spatiale de Ks et comportement effectif", contenu: "La conductivité hydraulique à saturation Ks varie sur plusieurs ordres de grandeur à petite distance (coefficient de variation > 100%). Cette hétérogénéité rend l'estimation de Ks représentatif à l'échelle du bassin délicate. La moyenne géométrique de Ks est généralement la plus appropriée pour les flux horizontaux. Les mesures en champ (infiltromètre, Guelph perméamètre) doivent être répliquées et stratifiées par unité de sol. La pédo-transfert (fonctions de Rawls-Brakensiek, ROSETTA) permet d'estimer Ks à partir de la texture et de la densité apparente." },
            { titre: "Écoulements préférentiels et macroporosité", contenu: "Les macropores (galeries de vers de terre, fissures de retrait, racines mortes) créent des chemins préférentiels court-circuitant la matrice poreuse. Les transferts préférentiels peuvent générer une recharge rapide de la nappe même en sol sec, et transporter des polluants à grande vitesse sans bénéficier de l'adsorption sur les argiles. Le modèle à double domaine (mobile-immobile, Simunek) représente ces chemins préférentiels. Les seuils d'activation des macropores dépendent de l'état d'humectation initial et du taux de remplissage." }
          ]
        },
        {
          titre: "Transferts dans la zone non saturée et recharge des nappes",
          sous_sections: [
            { titre: "Estimation de la recharge des aquifères", contenu: "La recharge découle de l'eau qui percolé au-delà de la profondeur racinaire. Plusieurs méthodes la quantifient : bilan chlorures (ratio précipitations × Cl_pluie / Cl_sol), fluctuation piézométrique (méthode WTF), traçage isotopique (tritium, 14C), modélisation du profil de sol (Richards 1D). La recharge est typiquement 5-30% des précipitations annuelles selon le climat et les sols. Sa répartition saisonnière est importante pour la gestion des aquifères." },
            { titre: "Modèle SWAT et transferts dans le profil de sol", contenu: "Dans SWAT, le sol est discrétisé en couches (jusqu'à 10), et le transfert entre couches suit une routine de percolation basée sur l'excès de capacité au champ. La percolation de la couche i vers i+1 se produit si θi > θfc,i. Le modèle intègre également le drainage latéral (interflow) vers le chenal. Ces approches simplifient l'équation de Richards mais permettent de simuler des bassins de grande taille avec des temps de calcul raisonnables. La calibration doit exploiter des données d'humidité du sol in situ ou par satellite (SMAP)." }
          ]
        }
      ],
      points: [
        "L'équation de Richards est la référence pour l'écoulement en milieu non saturé.",
        "La capacité d'infiltration décroît de fi (sol sec) jusqu'à Ks (état d'équilibre).",
        "Le ruissellement de Horton se produit quand i > f(t).",
        "Green-Ampt : paramètres Ks, Sf (succion front), Δθ (déficit hydrique).",
        "La sorptivité S de Philip représente la capillarité dominante en début d'événement.",
        "Ks varie sur plusieurs ordres de grandeur à petite distance (CV > 100%).",
        "Les macropores créent des transferts préférentiels rapides vers la nappe.",
        "La recharge des aquifères représente 5-30% des précipitations annuelles.",
        "La pédo-transfert (ROSETTA) estime les paramètres hydrauliques par la texture.",
        "SMAP fournit des données d'humidité de surface satellitaires pour la calibration."
      ],
      formules: [
        { nom: "Équation de Richards (1D vertical)", expression: "∂θ/∂t = ∂/∂z [K(θ)(∂ψ/∂z + 1)]", variables: "θ = teneur en eau volumique, K(θ) = conductivité non saturée, ψ = pression de succion" },
        { nom: "Modèle de Horton", expression: "f(t) = fc + (fi - fc) × exp(-kt)", variables: "fi = capacité initiale, fc = capacité finale (≈ Ks), k = coefficient de déclin (h⁻¹)" },
        { nom: "Modèle de Philip (deux termes)", expression: "f(t) = S/(2√t) + A", variables: "S = sorptivité (mm/√h), A ≈ Ks/3 (mm/h)" },
        { nom: "Green-Ampt (implicite)", expression: "F(t) = Ks × t + Sf × Δθ × ln(1 + F/(Sf × Δθ))", variables: "F = infiltration cumulée (mm), Ks = conductivité saturée, Sf = succion au front, Δθ = déficit en eau" },
        { nom: "Van Genuchten (courbe de rétention)", expression: "θ(h) = θr + (θs - θr) / [1 + (α|h|)^n]^m", variables: "θr = teneur résiduelle, θs = teneur à saturation, α, n, m = paramètres de forme" }
      ],
      retenir: "L'infiltration est gouvernée par la capillarité (sorptivité) et la gravité (Ks). La capacité d'infiltration décroît du sol sec (Ks est dépassé dès les premières minutes) jusqu'à l'état saturé. L'hétérogénéité de Ks et les macropores rendent difficile la représentation de l'infiltration à l'échelle du bassin. Les modèles semi-empiriques (Green-Ampt, Horton) offrent un compromis entre physique et praticité."
    },
    exercices: [
      { id: 1, enonce: "Un sol a fi = 60 mm/h, fc = 8 mm/h, k = 0,8 h⁻¹. Calculez la capacité d'infiltration après 1h et 3h de pluie.", correction: "f(1h) = 8 + (60-8) × e^(-0,8) = 8 + 52 × 0,449 = 8 + 23,4 = 31,4 mm/h. f(3h) = 8 + 52 × e^(-2,4) = 8 + 52 × 0,091 = 8 + 4,7 = 12,7 mm/h." },
      { id: 2, enonce: "La sorptivité est S = 15 mm/h^0,5 et A = 3 mm/h. Calculez f(t) à t = 0,25 h et t = 4 h (Philip).", correction: "f(0,25h) = 15/(2×0,5) + 3 = 15 + 3 = 18 mm/h. f(4h) = 15/(2×2) + 3 = 3,75 + 3 = 6,75 mm/h." },
      { id: 3, enonce: "Green-Ampt : Ks = 5 mm/h, Sf = 100 mm, Δθ = 0,25. Calculez le taux d'infiltration quand F = 50 mm.", correction: "f = Ks × [1 + Sf×Δθ/F] = 5 × [1 + 100×0,25/50] = 5 × [1 + 0,5] = 5 × 1,5 = 7,5 mm/h." },
      { id: 4, enonce: "Une pluie d'intensité 25 mm/h tombe sur un sol de capacité d'infiltration initiale 40 mm/h déclinant à 10 mm/h. Quand commence le ruissellement de Horton ?", correction: "Le ruissellement commence quand f(t) = i = 25 mm/h. Avec Horton : 25 = 10 + 30 × e^(-kt). En connaissant k, on résout. Sans k précis : le ruissellement commence quand la capacité déclinante croise l'intensité de pluie (généralement 10-30 min après le début de la pluie selon k)." },
      { id: 5, enonce: "Expliquez pourquoi la conductivité hydraulique à saturation Ks mesurée par infiltromètre double anneau surestime souvent l'infiltration réelle à l'échelle du bassin.", correction: "L'infiltromètre mesure en un point privilégiant souvent les zones macroporeuses. L'effet d'échelle montre que l'hétérogénéité spatiale de Ks fait que la moyenne effective est proche de la médiane géométrique (inférieure à la moyenne arithmétique). De plus, les macropores actifs à l'infiltromètre peuvent être inactifs à l'échelle du sol." },
      { id: 6, enonce: "Calculez la recharge de nappe par méthode des chlorures si la précipitation est 800 mm/an, Cl_pluie = 2 mg/L et Cl_sol = 35 mg/L.", correction: "Recharge = P × Cl_pluie / Cl_sol = 800 × 2/35 = 46 mm/an. Soit 5,7% des précipitations. Cette valeur indique un milieu semi-aride à fort pouvoir évapotranspirant." },
      { id: 7, enonce: "La texture d'un sol limoneux donne (ROSETTA) : θr = 0,06, θs = 0,46, α = 0,01 cm⁻¹, n = 1,56. Calculez θ pour une succion h = 100 cm.", correction: "m = 1 - 1/n = 1 - 1/1,56 = 0,359. θ(100) = 0,06 + (0,46-0,06)/[1+(0,01×100)^1,56]^0,359 = 0,40/[1+1^1,56]^0,359 = 0,40/[2]^0,359 = 0,40/1,284 = 0,311." },
      { id: 8, enonce: "Quelles sont les conséquences hydrologiques des transferts préférentiels dans les sols argileux fissurés ?", correction: "Recharge rapide de la nappe même après une longue sécheresse (eau court-circuiting la matrice sèche). Transport de polluants sans adsorption/désorption sur les argiles. Pic de débit de base rapide après la pluie malgré une matrice peu conductive. Estimation de Ks difficile car les deux porosités (macro et micro) coexistent." }
    ],
    flashcards: [
      { question: "Qu'est-ce que la sorptivité S dans le modèle de Philip ?", reponse: "S caractérise la capacité du sol à absorber l'eau par capillarité, indépendamment de la gravité. Unité : mm/√h ou mm/√s. Élevée pour les sols secs (forte succion initiale). En début d'infiltration (t → 0), f(t) ≈ S/(2√t) → ∞." },
      { question: "Paramètres du modèle de Green-Ampt et leur signification physique", reponse: "Ks = conductivité hydraulique à saturation (mm/h). Sf = succion au front humide (mm). Δθ = θs - θi = déficit en eau initial. Ces trois paramètres peuvent être estimés par texture de sol (tables de Rawls & Brakensiek)." },
      { question: "Ruissellement de Horton vs ruissellement par saturation (Dunne)", reponse: "Horton : i > f(t), pluie dépasse la capacité d'infiltration. Sol perméable, pluies intenses. Dunne : sol saturé (θ → θs), l'eau ne peut plus s'infiltrer même à faible intensité. Zones saturées en bas de versant, nappes affleurantes." },
      { question: "Qu'est-ce que la courbe de rétention van Genuchten ?", reponse: "Relation θ(h) entre teneur en eau et succion (ou potentiel matriciel). Paramètres α, n contrôlent la forme (taille des pores). Essentielle pour alimenter l'équation de Richards et modéliser la redistribution d'eau dans le sol." },
      { question: "Comment estimer Ks à partir de la texture du sol ?", reponse: "Pédo-transfert (PTF) de Rawls & Brakensiek ou logiciel ROSETTA : Ks = f(% argile, % sable, % limon, densité apparente). Incertitude d'un facteur 2-5. Supérieure à la mesure directe en termes de représentativité spatiale." },
      { question: "Méthode WTF (Water Table Fluctuation) pour estimer la recharge", reponse: "Recharge = Sy × ΔH / Δt où Sy = rendement spécifique et ΔH = montée piézométrique après un événement pluvieux. Simple, directe, mais suppose que toute la montée est due à la recharge locale (non valide si nappes artésiennes ou transferts latéraux)." }
    ]
  },

  'MASTER-EAU-029': {
    id: 'MASTER-EAU-029',
    titre: 'Production et transfert du ruissellement',
    fiche: {
      intro: "Le ruissellement représente la fraction des précipitations qui atteint le cours d'eau sans s'infiltrer ou s'évaporer. Sa production et son transfert depuis les versants jusqu'au chenal impliquent des processus complexes dépendant du sol, de la topographie, de la végétation et des conditions climatiques antécédentes. La maîtrise de ces processus est fondamentale pour la prédiction des crues et le dimensionnement des ouvrages hydrauliques.",
      sections: [
        {
          titre: "Mécanismes de production du ruissellement",
          sous_sections: [
            { titre: "Ruissellement hortonien vs saturation", contenu: "Le ruissellement hortonien (overland flow) se produit quand l'intensité de pluie dépasse la capacité d'infiltration : i > f(t). Il est dominant dans les milieux à sols peu perméables ou en conditions tropicales à forte intensité. Le ruissellement par saturation (Dunne) se produit lorsque le sol est saturé jusqu'en surface, indépendamment de l'intensité. Il domine dans les zones de convergence topographique (bas de versant, zones ripariennes) et en contexte tempéré humide. Les deux mécanismes peuvent coexister sur un même bassin." },
            { titre: "Méthode SCS-CN et pluie nette", contenu: "La méthode SCS-CN (Soil Conservation Service - Curve Number) estime le ruissellement direct Q à partir de la pluie P et d'un paramètre CN empirique : Q = (P - Ia)² / (P - Ia + S) avec Ia = 0,2S et S = (25400/CN) - 254. CN dépend du groupe hydrologique du sol (A : très perméable, à D : imperméable), de l'occupation du sol et des conditions d'humidité antécédentes (AMC I/II/III). Cette méthode est très répandue (HEC-HMS, SWAT) malgré ses limites (pas de base physique rigoureuse, sensibilité à l'état antécédent)." }
          ]
        },
        {
          titre: "Transfert du ruissellement sur les versants",
          sous_sections: [
            { titre: "Équations de Saint-Venant et cinématique", contenu: "Le transfert du ruissellement sur les versants est décrit par les équations de Saint-Venant (continuité + quantité de mouvement). L'onde cinématique (approximation α×h^β) est valide quand les forces d'inertie et de pression sont négligeables devant la gravité et les frottements. Sur un plan incliné, le temps de transfert vers le chenal est estimé par la formule de Kirpich ou par la méthode de l'onde cinématique. La laminaire sheet flow domine pour les premiers mètres de versant avant concentration en filets." },
            { titre: "Érosion et transport des sédiments", contenu: "Le ruissellement génère une force tractrice τ = ρgh×S sur le sol, arrachant et transportant des particules. L'équation USLE (Wischmeier-Smith) estime la perte de sol A = R × K × LS × C × P. R est l'érosivité des pluies, K l'érodibilité du sol, LS le facteur topographique, C la couverture végétale et P les pratiques de conservation. Le budget sédimentaire du bassin dépend du rapport livraison de sédiments (SDR = sédiments au chenal / érosion brute). Ce ratio décroît avec la taille du bassin (dépôts en transit sur les versants)." }
          ]
        },
        {
          titre: "Concentration et transfert dans le chenal",
          sous_sections: [
            { titre: "Routage hydraulique dans le chenal", contenu: "Le routage du débit dans le chenal transforme un hydrogramme en entrée en hydrogramme en sortie. Le routage de Muskingum utilise deux paramètres K (temps de transfert) et X (coefficient de pondération débit/stockage). Pour X = 0 (réservoir pur), le routage lamine fortement. Pour X = 0,5 (onde pure), il ne lamine pas. La méthode de Muskingum-Cunge est physiquement basée (onde cinématique avec terme de diffusion) et permet d'estimer K et X à partir des caractéristiques hydrauliques du chenal (pente, largeur, rugosité)." },
            { titre: "Laminage par retenues et zones humides", contenu: "Les retenues artificielles et les zones humides riveraines (plaines d'inondation) écrêtent les pointes de crue. Le stockage dans la retenue suit S = f(H) (relation stockage-hauteur) et le débit déversé suit Q = f(H) (courbe de tarage). Le laminage est d'autant plus important que le ratio volume de retenue / volume de crue est élevé. Dans les plaines d'inondation, le débordement puis le retour dans le chenal crée un effet de retard qui réduit le débit de pointe. Cette fonctionnalité écosystémique est un argument fort pour la restauration des zones humides." }
          ]
        },
        {
          titre: "Modélisation du ruissellement en contexte urbain",
          sous_sections: [
            { titre: "Effets de l'imperméabilisation sur le ruissellement", contenu: "L'urbanisation augmente drastiquement le ruissellement : un toit ou une route génèrent CN = 98 (quasi imperméable), contre CN = 65-80 pour des terres agricoles. Le coefficient de ruissellement moyen peut passer de 0,1-0,2 en milieu rural à 0,6-0,8 en milieu urbain dense. Cette modification accroît la fréquence et l'intensité des crues urbaines et réduit la recharge des nappes. Les Solutions fondées sur la Nature (SfN) : noues, toits végétalisés, chaussées perméables, visent à restaurer les fonctionnalités hydrologiques naturelles." },
            { titre: "Modèles de drainage urbain et contrôle à la source", contenu: "SWMM (EPA Storm Water Management Model) simule la qualité et la quantité du ruissellement urbain. Il modélise les conduites, les bassins de retenue et les techniques alternatives (Sustainable Urban Drainage Systems, SUDS). Le contrôle à la source (rétention à la parcelle) réduit les volumes et les débits de pointe. L'analyse coût-bénéfice des SUDS versus ouvrages classiques est favorable à l'échelle décennale. Les modèles intégrés (SWMM + nappe + réseau) permettent de simuler les débordements, les intrusions et la saturation réseau." }
          ]
        }
      ],
      points: [
        "Ruissellement Horton : i > f(t); Dunne : saturation du sol.",
        "SCS-CN : Q = (P - Ia)² / (P - Ia + S), Ia = 0,2S, S = (25400/CN) - 254.",
        "CN dépend du groupe hydrologique (A-D), de l'occupation du sol et de l'AMC.",
        "L'onde cinématique approxime le transfert sur versant pour les fortes pentes.",
        "USLE : A = R × K × LS × C × P pour l'érosion par ruissellement.",
        "Muskingum-Cunge : paramètres K (temps de transfert) et X (pondération).",
        "Les zones humides et plaines d'inondation écrêtent naturellement les crues.",
        "Un bassin urbanisé passe de CN ≈ 70 à CN ≈ 90, multipliant le ruissellement.",
        "SWMM simule le ruissellement et la qualité des eaux en milieu urbain.",
        "Les SUDS restaurent les fonctions hydrologiques du sol en milieu urbanisé."
      ],
      formules: [
        { nom: "SCS-CN (pluie nette)", expression: "Q = (P - 0.2S)² / (P + 0.8S)  avec  S = 25400/CN - 254", variables: "Q = ruissellement direct (mm), P = pluie brute (mm), CN = curve number (0-100)" },
        { nom: "USLE (érosion par ruissellement)", expression: "A = R × K × LS × C × P", variables: "A = perte de sol (t/ha/an), R = érosivité, K = érodibilité, LS = topographie, C = couverture, P = pratiques" },
        { nom: "Routage Muskingum", expression: "Q2 = C0×I2 + C1×I1 + C2×Q1", variables: "C0+C1+C2 = 1, fonctions de K et X. I = débit entrant, Q = débit sortant" },
        { nom: "Force tractrice", expression: "τ = ρg × h × S", variables: "ρ = densité eau (kg/m³), g = 9,81 m/s², h = profondeur (m), S = pente" },
        { nom: "Onde cinématique (versant)", expression: "q = α × h^β  avec  α = (S^0.5)/n  et  β = 5/3", variables: "q = débit unitaire (m²/s), h = lame d'eau (m), S = pente, n = rugosité Manning" }
      ],
      retenir: "Le ruissellement est produit soit par dépassement de la capacité d'infiltration (Horton), soit par saturation du sol (Dunne). La méthode SCS-CN est l'outil pratique le plus utilisé pour estimer le ruissellement direct. Le transfert au chenal (onde cinématique) puis dans le chenal (Muskingum-Cunge) transforme la pluie nette en hydrogramme de crue. L'urbanisation intensifie le ruissellement, nécessitant des approches de gestion à la source."
    },
    exercices: [
      { id: 1, enonce: "CN = 78 (AMC II), P = 65 mm. Calculez le ruissellement direct Q par SCS-CN.", correction: "S = 25400/78 - 254 = 325,6 - 254 = 71,6 mm. Ia = 0,2 × 71,6 = 14,3 mm. Q = (65-14,3)² / (65-14,3+71,6) = 50,7² / 122,3 = 2570 / 122,3 = 21,0 mm." },
      { id: 2, enonce: "En condition humide AMC III, un bassin de CN II = 75 devient CN III = 88. Pour P = 50 mm, calculez Q en AMC II et AMC III et commentez.", correction: "AMC II : S = 71,6 mm, Ia = 14,3 mm. Q = (50-14,3)²/(50-14,3+71,6) = 1272/107,3 = 11,9 mm. AMC III : S = 25400/88-254 = 34,5 mm, Ia = 6,9 mm. Q = (50-6,9)²/(50-6,9+34,5) = 1858/77,6 = 23,9 mm. L'état antécédent humide double le ruissellement." },
      { id: 3, enonce: "Un bassin a un temps de transfert Muskingum K = 4h et X = 0,2. Pour C0, C1, C2, utilisez les formules de Muskingum et calculez Q2 sachant I1=100 m³/s, I2=150 m³/s, Q1=80 m³/s (Δt=2h).", correction: "Dénominateur D = 2KX + Δt + 2K(1-X) = 2×4×0,2 + 2 + 2×4×0,8 = 1,6+2+6,4 = 10. C0 = (-2KX+Δt)/D = (-1,6+2)/10 = 0,04. C1 = (2KX+Δt)/D = (1,6+2)/10 = 0,36. C2 = (2K(1-X)-Δt)/D = (6,4-2)/10 = 0,44. Q2 = 0,04×150 + 0,36×100 + 0,44×80 = 6+36+35,2 = 77,2 m³/s." },
      { id: 4, enonce: "Calculez la force tractrice sur un versant de pente 5% avec une lame d'eau de ruissellement h = 3 mm.", correction: "τ = ρgh×S = 1000 × 9,81 × 0,003 × 0,05 = 1,47 N/m² = 1,47 Pa. Cette valeur dépasse le seuil d'arrachement pour les limons fins (~0,5-1 Pa), expliquant l'érosion sélective des particules fines." },
      { id: 5, enonce: "Un bassin rural de 500 ha est urbanisé à 60%, portant le CN moyen de 72 à 85. Pour P = 40 mm, calculez le volume de ruissellement avant et après urbanisation.", correction: "Avant : S = 25400/72-254 = 98,6 mm, Ia = 19,7 mm. Q = (40-19,7)²/(40-19,7+98,6) = 412/118,9 = 3,5 mm. V = 3,5/1000 × 5×10⁶ = 17 500 m³. Après : S = 25400/85-254 = 44,9 mm, Ia = 9,0 mm. Q = (40-9)²/(40-9+44,9) = 961/75,9 = 12,7 mm. V = 63 500 m³. Urbanisation multiplie le volume par 3,6." },
      { id: 6, enonce: "Dans USLE, le facteur LS = 1,5 et K = 0,035 t×h/(N×ha). R = 180 MJ×mm/(ha×h×an), C = 0,15, P = 0,8. Estimez la perte de sol annuelle.", correction: "A = R × K × LS × C × P = 180 × 0,035 × 1,5 × 0,15 × 0,8 = 1,13 t/ha/an. Érosion modérée pour une prairie avec pratiques de conservation." },
      { id: 7, enonce: "Expliquez le concept de zone contributive variable et comment il remet en cause l'hypothèse de stationnarité du ruissellement.", correction: "La zone contributive variable (Dunne & Black) montre que la surface active de production de ruissellement évolue pendant l'événement. Les zones saturées s'étendent depuis les bas-fonds. La surface contributive n'est pas constante → le ruissellement n'est pas proportionnel à la pluie (non-linéarité). La relation pluie-débit évolue au cours de la saison (hysteresis). La stationnarité ne tient pas si le régime pluviométrique ou l'occupation du sol changent." },
      { id: 8, enonce: "Quels mécanismes font que les zones humides riveraines écrêtent les crues ? Évaluez qualitativement l'effet d'une suppression de ces zones.", correction: "Stockage temporaire du débordement dans la plaine (volume tampon). Rugosité élevée de la végétation (réduction de vitesse). Infiltration latérale et restitution différée. Sans ces zones : volumes de crue conservés, pointe accrue de 20-50%, temps de montée raccourci, dommages amplifié en aval." }
    ],
    flashcards: [
      { question: "Quelle est la formule SCS-CN ?", reponse: "Q = (P - 0,2S)² / (P + 0,8S), S = 25400/CN - 254. Valide pour P > 0,2S (Ia = 0,2S = abstraction initiale). CN = 100 → ruissellement total, CN faible → faible ruissellement." },
      { question: "Différence entre ruissellement Horton et Dunne", reponse: "Horton : i > f(t), sol non saturé, pluies intenses ou sols peu perméables (urbain, croûte de battance). Dunne : sol saturé, indépendant de l'intensité, fonds de vallée et zones ripariennes en contexte tempéré humide." },
      { question: "Paramètres physiques du routage Muskingum-Cunge", reponse: "K = X/c (temps de propagation, avec c = celerité de l'onde) et X = coefficient d'atténuation. X = 0 : réservoir pur (laminage maximal). X = 0,5 : onde pure (pas de laminage). En pratique X = 0,2-0,4 pour les rivières naturelles." },
      { question: "Qu'est-ce que l'érosivité R dans USLE ?", reponse: "R quantifie l'énergie cinétique et l'intensité des pluies (MJ×mm/(ha×h×an)). R = Σ(EI30) pour chaque événement. Élevé dans les régions tropicales (pluies intenses). Faible en zones semi-arides (pluies rares mais peu intenses)." },
      { question: "Effet de l'urbanisation sur le CN", reponse: "Les surfaces imperméables ont CN ≈ 95-98. L'urbanisation à 50% peut porter le CN de 70 (rural) à 85-90, multipliant le ruissellement par 2-5 pour des pluies modérées. Elle réduit aussi le temps de concentration." },
      { question: "Rôle hydrologique des plaines d'inondation", reponse: "Stockage temporaire du volume de crue (écrêtement). Réduction de la vitesse (rugosité végétale). Dépôt de sédiments et de nutriments. Recharge latérale de la nappe alluviale. Restauration = outil de réduction du risque inondation." }
    ]
  },

  'MASTER-EAU-030': {
    id: 'MASTER-EAU-030',
    titre: 'Hydrométrie avancée et incertitude des débits',
    fiche: {
      intro: "La mesure des débits en rivière (hydrométrie) est à la base de toute gestion quantitative de la ressource en eau. L'estimation des débits est indirecte : on mesure un niveau (hauteur d'eau) puis on le convertit en débit via une courbe de tarage. Cette conversion introduit des incertitudes qui se propagent dans toutes les applications hydrologiques. Les avancées récentes (ADCPs, traceurs, LSPIV) enrichissent l'arsenal des hydromètres.",
      sections: [
        {
          titre: "Méthodes de mesure du débit",
          sous_sections: [
            { titre: "Jaugeage par exploration du champ de vitesses", contenu: "Le jaugeage au moulinet ou par courantomètre électromagnétique échantillonne les vitesses sur une section transversale selon la méthode des verticales. La règle des 1/5 (vitesse à 0,2 et 0,8 de la profondeur → moyenne) ou des 2/5 (vitesse à 0,6 de la profondeur ≈ vitesse moyenne) est appliquée selon la profondeur. Le débit total Q = Σ(vi × bi × hi) (méthode des jaugeages). L'incertitude de ce jaugeage est typiquement 2-5% (ISO 748) mais peut atteindre 10-15% en crues (difficultés d'accès, flottants)." },
            { titre: "ADCP (Acoustic Doppler Current Profiler)", contenu: "L'ADCP mesure la vitesse de l'eau par effet Doppler sur des particules en suspension. Embarqué sur bateau ou récupéré sur câble (bateau téléopéré), il mesure simultanément le profil de vitesses et la bathymétrie sur toute la section. Le débit est calculé par intégration numérique. L'incertitude d'un jaugeage ADCP est de l'ordre de 2-5% (ISO 24154). La mesure en crue est facilitée mais reste complexe (forte turbulence, flottants). L'ADCP horizontal (H-ADCP) fournit une mesure continue sans personnel sur le terrain." }
          ]
        },
        {
          titre: "Courbes de tarage et leurs incertitudes",
          sous_sections: [
            { titre: "Construction et modélisation de la courbe de tarage", contenu: "La courbe de tarage (rating curve) relie la hauteur H à la section hydrométrique au débit Q. La relation théorique Q = a × (H - H0)^b est ajustée aux jaugeages par régression. La décomposition en tronçons permet d'adapter la forme de la courbe aux différents régimes hydrauliques (plein bord, débordement, contrôle variable). L'extrapolation au-delà des jaugeages existants (crues rares) est une source majeure d'incertitude : l'incertitude sur le débit centennial peut atteindre ±30-50%." },
            { titre: "Méthodes bayésiennes pour les courbes de tarage", contenu: "L'approche bayésienne (BaRatin, Nott & coll.) représente l'incertitude de la courbe de tarage de façon probabiliste. La distribution a posteriori des paramètres intègre les informations sur les contrôles hydrauliques (connaissance hydromorphologique) et les jaugeages disponibles. Elle produit des intervalles de confiance sur toute la plage de débits, y compris en extrapolation. Le framework BaRatin est implémenté dans un logiciel libre (R-BaRatin) et est recommandé par le SHOM et l'ORE pour les séries de débit longue durée." }
          ]
        },
        {
          titre: "Méthodes alternatives et innovantes",
          sous_sections: [
            { titre: "Méthodes des traceurs (sel, fluorescéine, SF6)", contenu: "Le jaugeage par dilution (méthode à intégration) injecte un traceur de débit connu Qt et mesure la concentration aval C(t). Par conservation de la masse : Q = Qt × Ci / Cmoy. Cette méthode est indépendante de la géométrie du chenal et est très adaptée aux torrents montagnards (difficultés d'accès, sections irrégulières). Le sel (NaCl) mesuré par conductivité est le traceur le plus économique. L'incertitude est de l'ordre de 2-5% si le mélange est complet. Le fluoroscéine est utilisé pour les débits très faibles (sources, étiages)." },
            { titre: "LSPIV et vélocimétrie par image (PIV, STIVs)", contenu: "La large-scale particle image velocimetry (LSPIV) mesure les vitesses de surface par analyse optique d'images (drone, caméra fixe). Les traceurs naturels (écume, reflets) ou artificiels sont suivis entre deux images. La vitesse de surface est convertie en vitesse moyenne par un coefficient de conversion Cv ≈ 0,85-0,95. La méthode est sans contact, applicable en crues extrêmes, et peut être déployée en surveillance continue. L'incertitude est typiquement 5-15% selon la qualité des images et du coefficient Cv." }
          ]
        },
        {
          titre: "Propagation des incertitudes et séries hydrométriques",
          sous_sections: [
            { titre: "Incertitudes des séries de débits historiques", contenu: "Une série de débits mesurée sur 50 ans cumule des incertitudes instrumentales, des changements de section (érosion, végétation), des modifications de courbe de tarage et des lacunes de données. L'évaluation rétrospective de ces incertitudes est difficile mais essentielle pour les analyses fréquentielles (QMNA5, Q10, Q100). L'approche ICE-BaRatin (Incertitude des Courbes de tarage Existantes) permet d'évaluer a posteriori l'incertitude des archives hydrométriques. Cette démarche est particulièrement importante pour les études de non-stationnarité." },
            { titre: "Combler les lacunes et reconstituer les séries", contenu: "Les lacunes de données (pannes de capteurs, crues hors portée de l'échelle) sont comblées par des méthodes de régression avec des stations voisines, des modèles hydrologiques ou des analyses des données météorologiques. La corrélation inter-stations (corrélation de Pearson, corrélation de rang) permet d'identifier les stations « proches » hydrologiquement. La reconstitution historique (extension vers le passé par dendrochronologie, archives historiques, cotes historiques) est précieuse pour les études de fréquences rares. Les projets HistOhm et BDHI capitalisent ces données en France." }
          ]
        }
      ],
      points: [
        "Le jaugeage au moulinet utilise la règle des 2/5 (v à 0,6h ≈ vitesse moyenne).",
        "L'incertitude d'un jaugeage est typiquement 2-5% (ISO 748 et 24154).",
        "La courbe de tarage Q = a(H-H0)^b est extrapolée avec une incertitude croissante.",
        "BaRatin fournit des intervalles de confiance probabilistes sur la courbe de tarage.",
        "Jaugeage par dilution : Q = Qt × Ci / Cmoy (conservation de la masse).",
        "LSPIV : vitesses de surface par analyse d'images, Cv ≈ 0,85-0,95.",
        "L'incertitude sur le débit centennal peut atteindre ±30-50%.",
        "L'H-ADCP fournit une mesure continue sans personnel terrain.",
        "ICE-BaRatin évalue l'incertitude des archives hydrométriques historiques.",
        "La dendrochronologie et les archives permettent d'étendre les séries vers le passé."
      ],
      formules: [
        { nom: "Courbe de tarage puissance", expression: "Q = a × (H - H0)^b", variables: "H = hauteur à l'échelle (m), H0 = hauteur de débit nul (m), a et b = paramètres ajustés" },
        { nom: "Jaugeage par dilution (dilution intégrale)", expression: "Q = Qt × Ci / Cmoy = Qt × Ci / [∫C(t)dt / T]", variables: "Qt = débit injecté, Ci = concentration initiale, Cmoy = concentration moyenne intégrée" },
        { nom: "Débit par LSPIV", expression: "Q = Cv × ∫∫ Vs(y,z) dA", variables: "Cv = coefficient de conversion surface/moyenne ≈ 0,85-0,95, Vs = vitesse de surface mesurée" },
        { nom: "Incertitude composée (ISO GUM)", expression: "u(Q)² = (∂Q/∂H)² × u(H)² + (∂Q/∂a)² × u(a)² + ...", variables: "u(Q) = incertitude composée du débit, u(H) = incertitude sur la hauteur" },
        { nom: "Méthode des verticales (jaugeage)", expression: "Q = Σ(vi × bi × hi)", variables: "vi = vitesse moyenne sur la verticale i, bi = largeur de la bande i, hi = profondeur" }
      ],
      retenir: "Le débit en rivière n'est jamais mesuré directement mais déduit d'une hauteur d'eau et d'une courbe de tarage. Cette double indirection accumule des incertitudes : sur le niveau, sur les jaugeages de référence et sur l'extrapolation de la courbe. Les méthodes modernes (BaRatin, LSPIV, ADCP) permettent de quantifier et réduire ces incertitudes. L'évaluation de l'incertitude des séries historiques est un préalable indispensable à toute analyse fréquentielle."
    },
    exercices: [
      { id: 1, enonce: "Une courbe de tarage a : a = 2,8, H0 = -0,15 m, b = 1,85. Calculez Q pour H = 1,20 m et H = 2,50 m.", correction: "Q(1,20) = 2,8 × (1,20+0,15)^1,85 = 2,8 × 1,35^1,85 = 2,8 × 1,747 = 4,89 m³/s. Q(2,50) = 2,8 × 2,65^1,85 = 2,8 × 6,218 = 17,4 m³/s." },
      { id: 2, enonce: "Jaugeage au sel : Qt = 2 L/s, Ci = 500 g/L. La courbe de passage donne ∫C(t)dt = 1500 g·s/m³ sur T = 300 s. Calculez Q.", correction: "Cmoy = ∫C(t)dt / T n'est pas la bonne formule. La bonne : Q = Qt × Ci / [∫C(t)dt] où l'intégrale est en g/m³·s. Mais avec les unités données : Cmoy_intégrée = 1500 g·s/m³. Q = Qt × Ci / Cmoy_int = (2×10⁻³ m³/s) × 500 g/L × 1000 L/m³ / 1500 = 1000/1500 = 0,667 m³/s." },
      { id: 3, enonce: "Un jaugeage par exploration des vitesses donne les résultats suivants : vertical 1 (b=1m, h=0,8m, v_0.6h=0,45 m/s), vertical 2 (b=1,5m, h=1,2m, v_0.6h=0,72 m/s). Calculez Q.", correction: "Q = Σ(vi × bi × hi) = (0,45 × 1 × 0,8) + (0,72 × 1,5 × 1,2) = 0,36 + 1,296 = 1,656 m³/s." },
      { id: 4, enonce: "Expliquez pourquoi la courbe de tarage présente une hystérésis lors des crues (courbe de montée ≠ courbe de descente).", correction: "En montée de crue, le gradient de surface libre est plus fort que l'état permanent → vitesse > vitesse pour même hauteur. En descente, l'inertie hydraulique crée l'inverse. L'hystérésis de Jones corrige cette différence : Q_crue = Q_tarage × √(1 + (1/Sc)×(dH/dt)/V0) où V0 est la celerité de l'onde." },
      { id: 5, enonce: "Quelles sont les trois sources principales d'incertitude dans une série de débits mesurée sur 40 ans ?", correction: "1. Incertitude de la courbe de tarage (jaugeages insuffisants en crues, extrapolation). 2. Incertitude sur la mesure de niveau (capteur, zéro de l'échelle). 3. Non-stationnarité du contrôle hydraulique (sédimentation, érosion, végétation dans la section de mesure)." },
      { id: 6, enonce: "Une mesure LSPIV donne une vitesse de surface moyenne de 1,8 m/s. La section mouillée est 12 m². Avec Cv = 0,88, calculez Q.", correction: "Q = Cv × Vs × A = 0,88 × 1,8 × 12 = 19,0 m³/s." },
      { id: 7, enonce: "Pourquoi BaRatin est-il préférable à une simple régression pour la courbe de tarage ?", correction: "BaRatin intègre des connaissances a priori sur les contrôles hydrauliques (seuil, section), réduisant l'incertitude par rapport à une régression aveugle. Il produit des intervalles de confiance explicites sur toute la plage, notamment en extrapolation. La connaissance experte est formalisée de façon traçable. La méthode bayésienne propage naturellement l'incertitude des jaugeages vers l'incertitude de la courbe." },
      { id: 8, enonce: "Citez deux méthodes pour reconstituer les débits historiques au-delà de la période de mesure directe.", correction: "1. Dendrochronologie : les cernes des arbres riverains enregistrent les années de forte humidité (crue). Corrélation entre largeur des cernes et débit historique. 2. Archives historiques et laisse de crues : relevés de cotes historiques sur des repères (ponts, bâtiments), convertis en débits par modélisation hydraulique rétrograde." }
    ],
    flashcards: [
      { question: "Règle des 2/5 en jaugeage au moulinet", reponse: "La vitesse mesurée à 0,6 de la profondeur depuis la surface (ou 0,4 depuis le fond) est approximativement égale à la vitesse moyenne sur la verticale. Économique (1 mesure par verticale) mais moins précise que la règle des 1/5 (2 mesures)." },
      { question: "Qu'est-ce que la courbe de tarage et pourquoi l'extrapoler est risqué ?", reponse: "Q = a(H-H0)^b, ajustée sur des jaugeages. En extrapolation (crues rares), la forme de la section change (débordement, affouillement), la rugosité varie. L'incertitude sur Q100 peut être ±30-50%. Il faut utiliser BaRatin ou une modélisation hydraulique pour encadrer l'extrapolation." },
      { question: "Principe du jaugeage par dilution", reponse: "On injecte un traceur à débit Qt et concentration Ci. Par conservation de la masse, Q_rivière = Qt × Ci / ∫C_aval(t)dt. Adapté aux torrents (<5 m³/s) où les autres méthodes échouent. Exige un mélange complet avant la section de mesure." },
      { question: "Avantages de l'ADCP pour le jaugeage en crue", reponse: "Mesure en sécurité depuis une berge (bateau téléopéré) ou depuis un pont. Profil de vitesses complet, pas de règle d'approximation. Rapide (quelques passages). Incertitude 2-5%. Limitation : flottants, forts gradients de densité, débits très faibles." },
      { question: "Qu'est-ce que BaRatin ?", reponse: "Framework bayésien pour la construction de courbes de tarage avec incertitude. Incorpore des priors sur les paramètres hydrauliques (contrôles hydrauliques). Produit une distribution a posteriori des paramètres → intervalles de confiance sur Q(H) → séries de débits avec incertitude." },
      { question: "Coefficient Cv dans LSPIV", reponse: "Cv ≈ 0,85-0,95 convertit la vitesse de surface (mesurée optiquement) en vitesse moyenne de la colonne d'eau. Il dépend du profil vertical (conditions turbulentes, profondeur). Cv = 0,85 pour canaux larges et peu profonds, jusqu'à 0,95 pour torrents montagnards. Source d'incertitude principale de la méthode." }
    ]
  }
,

  'MASTER-EAU-031': {
    id: 'MASTER-EAU-031',
    titre: 'Modèles hydrologiques conceptuels',
    fiche: {
      intro: "Les modèles hydrologiques conceptuels représentent le bassin versant par un enchaînement de réservoirs et de fonctions de transfert paramétrés. Moins complexes que les modèles physiques distribués, ils restent robustes pour la prévision des débits et l'estimation en sites non jaugés. Leur analyse de sensibilité et leur calage par optimisation sont au cœur de la pratique hydrologique opérationnelle.",
      sections: [
        {
          titre: "Principes et structures des modèles conceptuels",
          sous_sections: [
            { titre: "Approche par réservoirs et fonctions de transfert", contenu: "Un modèle conceptuel décompose le bassin en sous-systèmes (sol, interflow, nappe) représentés par des réservoirs linéaires ou non linéaires. Chaque réservoir est caractérisé par sa capacité, son débit de vidange et les seuils d'activation. La structure est choisie par le modélisateur selon le comportement observé du bassin. Les modèles à architecture fixe (HBV, GR4J, TOPMODEL) sont les plus diffusés car ils offrent un bon compromis entre réalisme et parcimonie." },
            { titre: "GR4J : structure et paramètres", contenu: "GR4J (modèle du Génie Rural à 4 paramètres journaliers) est le modèle de référence de l'école française (INRAE). Sa structure comprend un réservoir de production (capacité X1) alimenté par la pluie nette, une fonction de routage de Nash à deux branches (un réservoir de routage de capacité X3, un paramètre de forme X2 pour les échanges souterrains et un décalage temporel X4). Les 4 paramètres sont calés par optimisation sur des données observées. GR4J est valide sur une très large gamme de bassins et de régimes climatiques." }
          ]
        },
        {
          titre: "HBV et TOPMODEL",
          sous_sections: [
            { titre: "Modèle HBV (Hydrologiska Byran Vattenbalansavdelning)", contenu: "HBV décompose le bassin en zones d'altitude (hypsométrie), pour lesquelles le bilan neige/pluie est calculé séparément. La routine sol comprend des réservoirs à seuils (FC, LP, BETA). La routine de routage utilise des réservoirs linéaires pour les écoulements rapide (SUZ) et lent (SLZ). HBV est très utilisé en hydrologie de montagne (neige) et en prévision opérationnelle. Sa version semi-distribuée (HBV-D) décompose le bassin en sous-bassins avec transfert entre zones." },
            { titre: "TOPMODEL : approche semi-physique", contenu: "TOPMODEL (Beven & Kirkby, 1979) distribue spatialement la saturation du sol à partir du TWI (Topographic Wetness Index). La distribution statistique de TWI sur le bassin remplace la description pixel par pixel. Le débit de base est modélisé par un réservoir exponentiel. TOPMODEL est un pont entre approches conceptuelles et distribuées : il intègre la topographie de façon explicite sans la complexité des modèles distribués. Sa limite est l'hypothèse de nappe subhorizontale parallèle à la surface, qui n'est pas vérifiée en tous terrains." }
          ]
        },
        {
          titre: "Calage et validation des modèles",
          sous_sections: [
            { titre: "Critères de performance et fonction objectif", contenu: "Le critère Nash-Sutcliffe (NSE) = 1 - Σ(Qobs-Qsim)² / Σ(Qobs-Qmoy)² mesure la performance globale (NSE = 1 : parfait, NSE = 0 : pas mieux que la moyenne, NSE < 0 : dégradé). KGE (Kling-Gupta Efficiency) décompose l'erreur en biais, variabilité et corrélation. RMSE est sensible aux valeurs extrêmes. Les critères log-transformés (ln(Q)) améliorent la sensibilité aux étiages. Un bon modèle doit être performant à la fois sur les crues et les étiages : un seul critère ne suffit pas." },
            { titre: "Split-sample test et validation temporelle", contenu: "Le protocole de calage-validation divise la série en deux périodes : calage (optimisation des paramètres) et validation (vérification sans ajustement). Le split-sample test évalue la robustesse du modèle. Le test de stationnarité détecte si les paramètres changent entre périodes (non-stationnarité liée au changement climatique ou d'occupation du sol). La validation croisée temporelle (k-fold) est préférable aux jeux de validation uniques pour les séries courtes. La validation sur des événements extrêmes est un test crucial mais souvent non effectué faute de données." }
          ]
        },
        {
          titre: "Prévision des débits en temps réel",
          sous_sections: [
            { titre: "Mise à jour en temps réel et assimilation de données", contenu: "La prévision opérationnelle des crues combine un modèle conceptuel et une procédure de mise à jour (data assimilation). Le filtre de Kalman d'ensemble (EnKF) met à jour les états du modèle (niveaux des réservoirs) à partir des observations récentes. La correction de l'erreur de prévision par la méthode des erreurs persistantes (correction AR(1)) est une approche simple mais efficace. Les sorties des modèles météorologiques (prévisios à 48-72h) fournissent les forçages pour des prévisions hydrologiques étendues." },
            { titre: "Prévision d'ensemble et incertitude", contenu: "La prévision déterministe fournit un seul scénario, insuffisant pour la gestion du risque. La prévision d'ensemble (10-50 membres) représente l'incertitude sur les précipitations futures, les paramètres du modèle et l'état initial. La chaîne EFAS (European Flood Awareness System) et Vigicrues (France) produisent des prévisions probabilistes à 10 jours. Les courbes de probabilité de dépassement (CDFs) permettent d'évaluer le risque de crue pour des niveaux de décision." }
          ]
        }
      ],
      points: [
        "GR4J : 4 paramètres (X1 capacité sol, X2 échanges souterrains, X3 réservoir routage, X4 décalage).",
        "HBV décompose le bassin par zones d'altitude pour tenir compte de la neige.",
        "TOPMODEL relie la saturation du sol au TWI de façon semi-physique.",
        "NSE = 1 - Σ(Qobs-Qsim)² / Σ(Qobs-Qmoy)² est le critère de référence.",
        "KGE décompose l'erreur en biais, variabilité et corrélation (plus complet que NSE).",
        "Le split-sample test valide la robustesse temporelle du modèle calé.",
        "L'EnKF met à jour les états du modèle en temps réel par assimilation.",
        "La prévision d'ensemble quantifie l'incertitude de prévision probabiliste.",
        "EFAS produit des prévisions de crues européennes à 10 jours.",
        "Un modèle performant en calage peut échouer en validation (overfitting)."
      ],
      formules: [
        { nom: "Critère Nash-Sutcliffe (NSE)", expression: "NSE = 1 - Σ(Qobs - Qsim)² / Σ(Qobs - Qmoy)²", variables: "Qobs = débit observé, Qsim = débit simulé, Qmoy = débit moyen observé" },
        { nom: "Critère KGE", expression: "KGE = 1 - √[(r-1)² + (α-1)² + (β-1)²]", variables: "r = corrélation de Pearson, α = ratio des coefficients de variation, β = ratio des moyennes" },
        { nom: "RMSE", expression: "RMSE = √[Σ(Qobs - Qsim)² / N]", variables: "N = nombre de pas de temps" },
        { nom: "Réservoir linéaire (vidange)", expression: "Q(t) = Q0 × exp(-t/k)", variables: "Q0 = débit initial, k = constante de temps du réservoir (j)" },
        { nom: "GR4J (pluie nette)", expression: "Pn = P - Es  avec  Es = X1 × tanh(P/X1) × (1 - (S/X1)²) / (1 + (S/X1) × tanh(P/X1))", variables: "X1 = capacité du réservoir sol (mm), S = niveau du réservoir sol (mm)" }
      ],
      retenir: "Les modèles conceptuels (GR4J, HBV, TOPMODEL) offrent un bon compromis entre réalisme et frugalité en paramètres. Le calage-validation par split-sample test est indispensable pour évaluer la robustesse. NSE et KGE sont les critères de performance standard. La prévision opérationnelle associe modèle conceptuel, assimilation de données et prévision d'ensemble pour quantifier l'incertitude."
    },
    exercices: [
      { id: 1, enonce: "NSE = 0,78 et NSE_log = 0,65 pour un modèle. Que concluez-vous sur la performance relative en crues et en étiages ?", correction: "NSE = 0,78 : bonne performance globale, surtout pour les débits élevés (poids des crues dans la somme des carrés). NSE_log = 0,65 : performance moindre sur les étiages (transformée log équilibre les grands et petits débits). Le modèle simule mieux les crues que les basses eaux, typique d'un paramètre de vidange lente mal calé." },
      { id: 2, enonce: "Un réservoir linéaire de GR4J a une constante de temps k = 20 jours et un débit initial Q0 = 15 m³/s. Calculez Q après 10 et 30 jours.", correction: "Q(10j) = 15 × exp(-10/20) = 15 × exp(-0,5) = 15 × 0,607 = 9,1 m³/s. Q(30j) = 15 × exp(-30/20) = 15 × 0,223 = 3,3 m³/s." },
      { id: 3, enonce: "Calculez KGE si r = 0,91, α = 1,15 (σsim/σobs) et β = 0,95 (Qmoy_sim/Qmoy_obs).", correction: "KGE = 1 - √[(0,91-1)² + (1,15-1)² + (0,95-1)²] = 1 - √[0,0081 + 0,0225 + 0,0025] = 1 - √0,0331 = 1 - 0,182 = 0,818. Bonne performance (KGE > 0,7 est généralement acceptable)." },
      { id: 4, enonce: "Le split-sample test donne NSE_calage = 0,82 et NSE_validation = 0,56. Comment interprétez-vous ce résultat ?", correction: "La forte dégradation en validation (Δ = 0,26) indique un sur-calage (overfitting) : le modèle s'est adapté aux spécificités de la période de calage mais perd sa généralité. Causes possibles : trop de paramètres, période de calage non représentative, non-stationnarité. Solution : réduire le nombre de paramètres, utiliser un critère pénalisant la complexité (AIC, BIC), ou recaler sur une période plus longue." },
      { id: 5, enonce: "TOPMODEL prédit que 15% de la surface du bassin a un TWI > 10 (zone saturée). Cette surface est-elle représentative de la zone contributive variable ? Quelles données valident cette estimation ?", correction: "15% de zone saturée est une valeur plausible pour un bassin humide tempéré. Pour valider : cartographie des zones humides par relevés terrain ou analyse d'images satellitaires (NDWI, Sentinel-1 SAR). Mesures d'humidité du sol (TDR, neutronique). Carte de végétation hygrophile. Les données SMAP peuvent fournir une estimation régionale de la saturation de surface." },
      { id: 6, enonce: "Citez 3 avantages de GR4J par rapport à un modèle distribué à 500 paramètres pour une application de gestion de l'eau sur 10 ans.", correction: "1. Parcimonie : 4 paramètres seulement, réduisant l'équifinalité et la difficulté de calage. 2. Efficacité computationnelle : simulation de 10 ans en secondes vs heures pour un modèle distribué. 3. Robustesse en extrapolation : moins de paramètres → moins de risque d'overfitting sur la période de calage." },
      { id: 7, enonce: "Qu'est-ce que l'assimilation de données par filtre de Kalman d'ensemble (EnKF) dans un modèle hydrologique ?", correction: "EnKF représente l'état du modèle par un ensemble de N réalisations. Quand une observation arrive, les états sont mis à jour proportionnellement à leur accord avec l'observation. Les états improbables sont repondérés. L'EnKF propage l'incertitude sur les paramètres et les forçages à travers le modèle. Il peut corriger des niveaux de réservoirs erronés (mauvaise estimation de la pluie antécédente)." },
      { id: 8, enonce: "Pourquoi la prévision d'ensemble est-elle préférable à la prévision déterministe pour la gestion des crues ?", correction: "Une prévision déterministe fournit un scénario unique sans mesure de confiance. Avec l'ensemble, on obtient une distribution de probabilités sur les débits futurs : probabilité de dépasser un seuil de crue, intervalles de confiance. Cela permet des décisions de gestion différenciées selon le niveau de risque acceptable (alerte précoce vs évacuation). La prévision d'ensemble communique explicitement l'incertitude aux gestionnaires." }
    ],
    flashcards: [
      { question: "Paramètres de GR4J et leurs significations", reponse: "X1 = capacité du réservoir sol (mm). X2 = coefficient d'échange souterrain (mm/j, négatif = perte). X3 = capacité du réservoir de routage (mm). X4 = temps de base de l'hydrogramme unitaire (j)." },
      { question: "Critère Nash-Sutcliffe : interprétation des valeurs", reponse: "NSE = 1 : simulation parfaite. NSE > 0,75 : bonne. NSE > 0,5 : acceptable. NSE = 0 : pas mieux que la moyenne observée. NSE < 0 : modèle moins bon que la moyenne. Sensible aux crues (poids des valeurs élevées)." },
      { question: "Avantage du KGE sur le NSE", reponse: "KGE décompose l'erreur en 3 composantes : r (corrélation), α (variabilité), β (biais). Un bon NSE peut cacher un fort biais compensé par une bonne corrélation. KGE est plus équitable pour les crues ET les étiages." },
      { question: "Qu'est-ce que le split-sample test ?", reponse: "Protocole de validation : diviser la série en deux moitiés. Caler le modèle sur la 1ère, valider sur la 2ème (et réciproquement pour le test différentiel). Un bon modèle conserve des performances élevées sur les deux périodes." },
      { question: "Quelle est la spécificité de TOPMODEL ?", reponse: "TOPMODEL utilise la distribution statistique du TWI pour prédire les zones saturées sans modélisation pixel par pixel. Pont entre modèle global et distribué. Hypothèse : nappe subhorizontale. Adapté aux bassins à ruissellement par saturation." },
      { question: "Rôle de l'assimilation de données en prévision hydrologique", reponse: "Mettre à jour les états internes du modèle (niveaux des réservoirs) à partir des débits récemment observés. Corrige les erreurs accumulées sur les forçages et paramètres. Réduit l'incertitude de la prévision à court terme (1-72h). Méthodes : filtre de Kalman, correction AR(1), nudging." }
    ]
  },

  'MASTER-EAU-032': {
    id: 'MASTER-EAU-032',
    titre: 'Calage et évaluation d\'un modèle pluie-débit',
    fiche: {
      intro: "Le calage d'un modèle pluie-débit consiste à estimer les paramètres qui permettent de reproduire au mieux les débits observés à partir des précipitations et de l'évapotranspiration. Cette étape déterminante conditionne la qualité des prévisions. Les méthodes d'optimisation, l'analyse de sensibilité et l'évaluation multicritère constituent les outils fondamentaux d'un calage rigoureux.",
      sections: [
        {
          titre: "Stratégie de calage et espace des paramètres",
          sous_sections: [
            { titre: "Exploration de l'espace paramétrique", contenu: "L'espace des paramètres d'un modèle à N paramètres est un hypercube de dimension N. L'exploration par Monte Carlo (GLUE) échantillonne uniformément cet espace et évalue la performance pour chaque jeu. Les régions de bonne performance définissent l'espace acceptable (behavioral parameter sets). La méthode SCE-UA (Shuffled Complex Evolution) est un algorithme d'optimisation globale efficace combinant recherche aléatoire et descente locale. Les algorithmes évolutionnaires (NSGA-II) sont utilisés pour l'optimisation multi-objectif." },
            { titre: "Calage multi-objectif et front de Pareto", contenu: "Un calage mono-objectif optimise un seul critère (NSE) mais risque de dégrader d'autres aspects (étiages, crues extrêmes). Le calage multi-objectif (NSGA-II, ε-NSGA-II) minimise simultanément plusieurs critères (RMSE crues + RMSE étiages). Le front de Pareto représente l'ensemble des solutions non dominées : on ne peut améliorer un critère sans en dégrader un autre. Le choix sur le front de Pareto est une décision qui revient à l'utilisateur selon l'application (gestion sécheresse vs prévision crue)." }
          ]
        },
        {
          titre: "Analyse de sensibilité des paramètres",
          sous_sections: [
            { titre: "Méthodes d'analyse de sensibilité", contenu: "L'analyse de sensibilité identifie les paramètres les plus influents sur les sorties du modèle. La méthode de Morris (screening) est économique : elle évalue les effets élémentaires de chaque paramètre. La méthode de Sobol (variance-based) décompose la variance totale de la sortie en contributions directes (Si) et d'interactions (STi). Les indices de Sobol nécessitent N×(2k+2) évaluations du modèle. Les paramètres de faible indice Sobol peuvent être fixés à leur valeur médiane sans perte significative de performance." },
            { titre: "Identifiabilité des paramètres et corrélations", contenu: "Un paramètre est identifiable si sa valeur peut être estimée de façon unique par le calage. L'identifiabilité est compromise si deux paramètres sont fortement corrélés (effet de compensation). La matrice hessienne de la fonction objectif renseigne sur la courbure de l'espace de paramètres autour de l'optimum. Une hessienne mal conditionnée (faibles valeurs propres) indique des paramètres redondants. La réduction de la dimensionnalité (PCA sur les paramètres, fixation des paramètres non sensibles) améliore l'identifiabilité." }
          ]
        },
        {
          titre: "Évaluation des modèles hydrologiques",
          sous_sections: [
            { titre: "Signatures hydrologiques comme critères de calage", contenu: "Les signatures hydrologiques (courbe des débits classés, courbe de récession, corrélation pluie-débit par décile) caractérisent le comportement du bassin au-delà des critères de performance classiques. Le calage sur signatures (Yilmaz et al., 2008) améliore la représentation des processus hydrologiques. Les signatures incluent : FDC (Flow Duration Curve), coefficient de variation des débits, temps de réponse moyen, constante de récession. Un modèle qui reproduit correctement les signatures est plus robuste en extrapolation temporelle." },
            { titre: "Critères de performance pour différentes applications", contenu: "Le choix des critères dépend de l'application : NSE pour la prévision des crues, NSE_log pour la gestion des étiages, biais en volume pour la gestion des ressources, NSE_√Q pour un compromis. Les critères conditionnels (NSE sur les 10% de débits les plus élevés) ciblent les crues extrêmes. L'évaluation doit distinguer la performance en calage, validation temporelle, et validation spatiale (transfert à des bassins non jaugés). Un tableau de bord multicritère est préférable à un score unique." }
          ]
        },
        {
          titre: "Incertitude et robustesse du calage",
          sous_sections: [
            { titre: "GLUE et incertitude de l'estimation des paramètres", contenu: "La méthode GLUE (Generalised Likelihood Uncertainty Estimation, Beven & Binley) représente l'incertitude des paramètres par un ensemble de jeux behavioral. Elle rejette l'existence d'un optimum unique et admet que de nombreux jeux de paramètres peuvent expliquer les données avec une performance similaire (équifinalité). Les intervalles d'incertitude sur les débits sont obtenus par propagation de l'ensemble des paramètres acceptables. GLUE est controversé (non bayésien strict) mais reste très utilisé pour sa simplicité de mise en œuvre." },
            { titre: "Calage robuste face au changement climatique", contenu: "Un modèle calé sur une période passée peut sous-performer dans des conditions climatiques futures différentes. Le calage robuste (Knutti et al.) cherche des paramètres qui maintiennent des performances acceptables sur une gamme de conditions climatiques. Les tests de split-sample différentiel (périodes sèches vs humides) évaluent cette robustesse. La stationnarité des paramètres est testée par des comparaisons entre périodes. Des approches alternatives (modèles évolutifs, apprentissage continu) émergent pour améliorer l'adaptabilité des modèles." }
          ]
        }
      ],
      points: [
        "Monte Carlo (GLUE) : exploration aléatoire de l'espace paramétrique, garde les jeux behavioral.",
        "SCE-UA est l'algorithme d'optimisation globale de référence pour les modèles hydrologiques.",
        "Le front de Pareto représente les solutions non dominées du calage multi-objectif.",
        "L'indice de Sobol Si mesure la contribution directe de chaque paramètre à la variance de la sortie.",
        "Un paramètre non identifiable partage sa variance avec un paramètre corrélé.",
        "Les signatures hydrologiques (FDC, récession) enrichissent les critères de calage.",
        "GLUE représente l'incertitude paramétrique par un ensemble de jeux acceptables.",
        "Le split-sample différentiel teste la stationnarité des paramètres entre périodes.",
        "NSE_log cible les étiages, NSE les crues, NSE_√Q équilibre les deux.",
        "Un bon calage sur signatures est plus robuste qu'un calage sur NSE seul."
      ],
      formules: [
        { nom: "Indice de sensibilité de Morris (effet élémentaire)", expression: "EEi = [Y(x + Δei) - Y(x)] / Δ", variables: "Y = sortie du modèle, x = jeu de paramètres, ei = vecteur unitaire paramètre i, Δ = pas de variation" },
        { nom: "Indice de Sobol (1er ordre)", expression: "Si = Var[E(Y|Xi)] / Var(Y)", variables: "Xi = paramètre i, Var[E(Y|Xi)] = variance de l'espérance conditionnelle" },
        { nom: "Indice de Sobol total", expression: "STi = 1 - Var[E(Y|X~i)] / Var(Y)", variables: "X~i = tous les paramètres sauf Xi" },
        { nom: "Probabilité GLUE (poids behavioral)", expression: "L(θ|Y_obs) ∝ exp(-NSE_objectif(θ))", variables: "θ = jeu de paramètres, Y_obs = débits observés" },
        { nom: "Critère NSE√Q", expression: "NSE_√Q = 1 - Σ(√Qobs - √Qsim)² / Σ(√Qobs - √Qmoy)²", variables: "Transformation √ équilibre le poids des crues et étiages" }
      ],
      retenir: "Le calage d'un modèle hydrologique est un problème inverse avec multiples solutions acceptables (équifinalité). L'analyse de sensibilité (Morris, Sobol) identifie les paramètres influents. Le calage multi-objectif (front de Pareto) est préférable au calage mono-critère. GLUE quantifie l'incertitude paramétrique. La robustesse face au changement climatique doit être testée par des split-samples différentiels."
    },
    exercices: [
      { id: 1, enonce: "Un calage GLUE génère 10 000 jeux de paramètres. 850 sont behavioral (NSE > 0,7). Quel est le ratio de comportement et comment l'interpréter ?", correction: "Ratio = 850/10000 = 8,5%. Un ratio faible indique que l'espace paramétrique est bien contraint (rares jeux acceptables → paramètres identifiables). Un ratio élevé (>50%) indique une équifinalité forte (espace mal contraint → incertitude paramétrique élevée)." },
      { id: 2, enonce: "Deux paramètres de GR4J ont un indice de Sobol total STi = 0,42 et 0,38, et un indice du 1er ordre Si = 0,28 et 0,30 respectivement. Interprétez la différence Si vs STi.", correction: "STi > Si pour le 1er paramètre (0,42 > 0,28) : 14% de la variance est due à ses interactions avec d'autres paramètres. Pour le 2ème (0,38 > 0,30) : 8% d'interactions. Les deux paramètres ont des effets similaires en 1er ordre mais le 1er a des interactions plus fortes → les traiter indépendamment en calage peut être insuffisant." },
      { id: 3, enonce: "Un calage multi-objectif donne le front de Pareto suivant : Solution A (NSE_crue = 0,88, NSE_étiage = 0,52) vs Solution B (NSE_crue = 0,74, NSE_étiage = 0,81). Laquelle choisir pour la gestion des étiages ?", correction: "Pour la gestion des étiages, choisir B (NSE_étiage = 0,81 >> 0,52). La solution A sacrifie les étiages pour de meilleures performances en crue. Le front de Pareto montre qu'améliorer un critère dégrade l'autre : la décision dépend de l'objectif de gestion." },
      { id: 4, enonce: "Calculez NSE_√Q pour 4 pas de temps : Qobs = [1, 10, 50, 5], Qsim = [1,5, 9, 45, 6].", correction: "√Qobs = [1, 3,16, 7,07, 2,24]. √Qsim = [1,22, 3,0, 6,71, 2,45]. √Qmoy = (1+3,16+7,07+2,24)/4 = 3,37. Numérateur = (1-1,22)² + (3,16-3,0)² + (7,07-6,71)² + (2,24-2,45)² = 0,048+0,026+0,130+0,044 = 0,248. Dénominateur = (1-3,37)²+(3,16-3,37)²+(7,07-3,37)²+(2,24-3,37)² = 5,62+0,044+13,69+1,277 = 20,63. NSE_√Q = 1 - 0,248/20,63 = 0,988." },
      { id: 5, enonce: "Décrivez le protocole SCE-UA et expliquez pourquoi il est plus efficace qu'une descente de gradient simple.", correction: "SCE-UA (Duan et al. 1992) : initialise des complexes (sous-ensembles de points dans l'espace paramétrique), effectue une recherche locale (downhill simplex) dans chaque complexe, mélange les complexes pour maintenir la diversité. Avantage vs descente de gradient : explore globalement (évite les minima locaux grâce aux complexes multiples), s'adapte à la topographie complexe des fonctions objectif hydrologiques non convexes." },
      { id: 6, enonce: "Qu'est-ce que l'équifinalité et quelles en sont les implications pour l'utilisation d'un modèle calibré ?", correction: "L'équifinalité (Beven) : plusieurs jeux de paramètres distincts donnent des performances acceptables similaires. Implications : il n'existe pas un 'vrai' jeu de paramètres, l'incertitude paramétrique est irréductible. Pour l'utilisation : ne pas présenter les simulations comme une vérité unique mais comme un ensemble de scénarios. Propager l'incertitude des paramètres aux prévisions." },
      { id: 7, enonce: "Citez 3 signatures hydrologiques utilisables comme critères de calage et expliquez leur intérêt.", correction: "1. FDC (Flow Duration Curve) : courbe des débits classés. Capture la distribution des débits sur toute la gamme. 2. Courbe de récession : paramètres de tarissement (pente log-linéaire). Contraint les paramètres du réservoir de base. 3. Corrélation pluie-débit par décile : sensibilité différenciée de la réponse aux petits et grands événements. Chaque signature contraint un aspect différent du modèle." },
      { id: 8, enonce: "Un modèle calé sur 1990-2005 donne NSE = 0,80. Validé sur 2006-2020 (période plus sèche), NSE = 0,61. Proposez une explication et une solution.", correction: "La non-stationnarité climatique (période plus sèche) modifie le comportement du bassin. Les paramètres calés sur la période humide ne sont pas adaptés aux conditions sèches. Solution : split-sample différentiel (caler sur la période sèche, valider sur l'humide et vice-versa), paramètres robustes sur les deux. Ou : modèles adaptatifs avec paramètres fonction des conditions climatiques antécédentes." }
    ],
    flashcards: [
      { question: "Qu'est-ce que le front de Pareto en optimisation multi-objectif ?", reponse: "Ensemble des solutions pour lesquelles on ne peut améliorer un critère sans en dégrader un autre. Représente le compromis optimal entre objectifs contradictoires (crue vs étiage). Le choix sur le front est une décision d'usage, pas de performance pure." },
      { question: "Différence entre indice de Sobol Si et STi", reponse: "Si = effet direct (variance due au paramètre i seul). STi = effet total (direct + toutes les interactions). STi - Si = effet des interactions. Si STi >> Si : fort couplage avec d'autres paramètres. STi faible → paramètre peut être fixé sans perte." },
      { question: "Qu'est-ce que l'équifinalité ?", reponse: "Concept de Beven : de nombreux jeux de paramètres distincts donnent des performances acceptables similaires. Il n'existe pas un 'vrai' paramètre, l'espace behavioral est multi-modal. Conséquence : quantifier l'incertitude paramétrique plutôt que d'optimiser un unique jeu." },
      { question: "Qu'est-ce que SCE-UA ?", reponse: "Shuffled Complex Evolution (Duan et al.). Algorithme d'optimisation globale. Maintient plusieurs complexes (groupes de points) qui évoluent en parallèle. Mélange périodique → diversité. Efficace sur les fonctions non convexes de l'hydrologie. Référence pour calibrer GR4J, HBV, etc." },
      { question: "Pourquoi utiliser des signatures hydrologiques pour le calage ?", reponse: "Les critères classiques (NSE) mesurent la performance globale mais peuvent masquer des erreurs sur des aspects spécifiques. Les signatures (FDC, récession, réponse par décile) ciblent des processus hydrologiques précis. Un calage sur signatures contraint mieux les paramètres liés à ces processus." },
      { question: "Avantage de NSE_√Q sur NSE ?", reponse: "NSE pèse fortement les crues (carrés des écarts). NSE_log pèse fortement les étiages. NSE_√Q (racine carrée des débits) équilibre le poids entre crues et étiages → compromis pour les applications de gestion intégrée (ni trop crue, ni trop étiage)." }
    ]
  },

  'MASTER-EAU-033': {
    id: 'MASTER-EAU-033',
    titre: 'Modèles distribués et représentation spatiale',
    fiche: {
      intro: "Les modèles hydrologiques distribués discrétisent le bassin en cellules et calculent le bilan hydrique en chaque pixel. Ils permettent de simuler la variabilité spatiale des processus et les interactions entre points du bassin. Leur coût computationnel et leurs besoins en données sont plus élevés que les modèles conceptuels, mais ils offrent une physique plus explicite et une meilleure exploitabilité des données spatiales issues de la télédétection.",
      sections: [
        {
          titre: "Architecture des modèles distribués",
          sous_sections: [
            { titre: "Discrétisation spatiale et temporelle", contenu: "Un modèle distribué divise le bassin en mailles (grille régulière, 10-1000 m) ou en unités irrégulières (triangulation TIN, sous-bassins). Le pas de temps (horaire, journalier) est choisi en cohérence avec la dynamique des processus simulés. Les équations de bilan sont résolues en chaque cellule. Le routage de l'eau entre cellules (D8, D-infinity) est dérivé du MNT. Les données d'entrée (précipitations, ETP) doivent être spatialisées à la même résolution, ce qui requiert des méthodes d'interpolation robustes." },
            { titre: "Couplage sol-végétation-atmosphère (SVAT)", contenu: "Les modèles SVAT (Soil-Vegetation-Atmosphere Transfer) calculent les échanges d'eau et d'énergie entre le sol, la végétation et l'atmosphère. Ils résolvent explicitement le bilan d'énergie (Rn = LE + H + G), la transpiration stomatique et l'infiltration. Des modèles comme VIC, Noah-MP et CLM sont utilisés à la fois en hydrologie et en météorologie. Ils requièrent des paramètres de végétation (LAI, hauteur, FPAR) issus de la télédétection (MODIS). Ces modèles sont les briques des systèmes de prévision hydrométéorologique couplés." }
          ]
        },
        {
          titre: "Modèles distribués de référence",
          sous_sections: [
            { titre: "MIKE SHE et modèles physiques intégrés", contenu: "MIKE SHE (DHI) est un modèle hydrologique distribué physique qui simule les écoulements de surface (Saint-Venant 2D), l'écoulement dans la zone non saturée (Richards 1D) et les eaux souterraines (Darcy 3D) de façon couplée. Il est utilisé pour des études détaillées en hydrologie de surface et souterraine (zones humides, échanges nappe-rivière). Son coût computationnel est élevé et il requiert de nombreuses données de terrain (géologie, bathymétrie). La calibration de modèles aussi complexes est un défi méthodologique majeur." },
            { titre: "SWAT (Soil and Water Assessment Tool)", contenu: "SWAT (Arnold et al., USDA) est un modèle semi-distribué à l'interface entre conceptuel et distribué. Il décompose le bassin en sous-bassins puis en HRU (Hydrologic Response Units : combinaisons sol/occupation du sol/pente). Le bilan hydrique est résolu par HRU et les sorties routées à travers le réseau hydrographique. SWAT simule le ruissellement (SCS-CN), l'ET (Penman-Monteith), la percolation, les sédiments et la qualité de l'eau. Son utilisation est mondiale, avec une communauté d'utilisateurs très active." }
          ]
        },
        {
          titre: "Exploitation des données de télédétection",
          sous_sections: [
            { titre: "Humidité du sol et neige par satellite", contenu: "SMAP (Soil Moisture Active Passive, NASA) mesure l'humidité des 5 premiers cm du sol à résolution 36-9 km / 2-3 jours. Cette donnée peut être assimilée dans les modèles distribués pour corriger les états initiaux. La neige (SWE : Snow Water Equivalent) est estimée par AMSR-E, AMSR-2 et les capteurs optiques (MODIS, Sentinel-2). L'altimétrie radar (ICESat-2) mesure l'épaisseur de neige. Ces produits sont essentiels pour les bassins de montagne où la fonte de neige contrôle la ressource en eau printanière." },
            { titre: "GRACE et variation du stock d'eau total", contenu: "GRACE-FO (Gravity Recovery and Climate Experiment Follow-On) mesure les variations du champ de gravité causées par les déplacements d'eau (sols, nappes, glaciers, lacs). La résolution spatiale est de l'ordre de 300-400 km. GRACE permet de suivre les grandes sécheresses (déficit de stockage des aquifères), les variations du stock de neige et les changements saisonniers de la ressource en eau. Ces données sont utilisées pour contraindre les modèles hydrologiques globaux et évaluer la durabilité des prélèvements dans les grands aquifères." }
          ]
        },
        {
          titre: "Limitations et perspectives des modèles distribués",
          sous_sections: [
            { titre: "Problème d'équifinalité à l'échelle distribuée", contenu: "Dans un modèle distribué, le nombre de paramètres peut atteindre plusieurs milliers (un jeu par pixel). L'espace paramétrique est immense et l'équifinalité est exacerbée. Les observations intégrées (débit à l'exutoire) ne contraignent pas suffisamment tous les paramètres spatiaux. L'assimilation de données spatiales (humidité du sol, niveau de nappe, enneigement) est nécessaire pour contraindre les paramètres distribués. Les approches basées sur les processus (estimation physique des paramètres par cartographie des propriétés du sol) sont préférables au calage aveugle pixel par pixel." },
            { titre: "Couplage hydrologie-hydraulique et modèles intégrés", contenu: "Les modèles intégrés couplent un modèle hydrologique distribué (simulation des processus de bassin) avec un modèle hydraulique (simulation des écoulements dans les chenaux et plaines d'inondation). Ce couplage est nécessaire pour la prévision des inondations (cartographie des zones inondées en temps réel) et pour les bilans hydrodynamiques dans les deltas. Les plateformes OpenMI (Open Modelling Interface) et BMI (Basic Model Interface) facilitent le couplage de codes existants. Ces approches représentent l'état de l'art en hydrologie opérationnelle." }
          ]
        }
      ],
      points: [
        "Les modèles distribués calculent le bilan hydrique en chaque cellule de la grille.",
        "Le routage D8 dérive les directions d'écoulement du MNT.",
        "MIKE SHE couplage surface/non saturé/souterrain : modèle physique intégré de référence.",
        "SWAT décompose le bassin en HRU (sol × occupation × pente).",
        "SMAP mesure l'humidité de surface à 9-36 km, assimilable dans les modèles.",
        "GRACE-FO suit les variations de stock d'eau total à ~300 km de résolution.",
        "L'équifinalité est exacerbée dans les modèles distribués (milliers de paramètres).",
        "Le couplage hydrologie-hydraulique est nécessaire pour la cartographie des inondations.",
        "VIC, Noah-MP, CLM sont les modèles SVAT de référence pour les applications climatiques.",
        "OpenMI et BMI permettent le couplage de codes hydrologiques existants."
      ],
      formules: [
        { nom: "Bilan hydrique distribué (par cellule)", expression: "ΔS/Δt = P - ET - Q_surf - Q_lat - Q_perc + Q_in", variables: "ΔS = variation de stockage, P = précipitation, ET = évapotranspiration, Q = différents flux (mm/j)" },
        { nom: "Routage D8 (direction d'écoulement)", expression: "Direction = argmin(altitude des 8 voisins)", variables: "Chaque cellule draine vers la cellule voisine de plus basse altitude" },
        { nom: "Équation de Saint-Venant (1D chenal)", expression: "∂A/∂t + ∂Q/∂x = q  et  ∂Q/∂t + ∂(Q²/A)/∂x + gA(∂h/∂x - S0 + Sf) = 0", variables: "A = section mouillée, Q = débit, q = apport latéral, S0 = pente fond, Sf = pente frictionnelle" },
        { nom: "Loi de Darcy (nappe)", expression: "Q = -K × A × (∂h/∂l)", variables: "K = conductivité hydraulique (m/j), A = section (m²), ∂h/∂l = gradient piézométrique" },
        { nom: "TWI (routage topographique)", expression: "TWI = ln(a / tan β)", variables: "a = aire drainée spécifique (m²/m), β = pente (rad)" }
      ],
      retenir: "Les modèles distribués offrent une physique explicite et exploitent les données spatiales, mais souffrent d'équifinalité exacerbée et de coûts computationnels élevés. SWAT est le compromis le plus diffusé, MIKE SHE le plus physique. L'assimilation de données satellitaires (SMAP, GRACE) est nécessaire pour contraindre les paramètres distribués. Le couplage hydrologie-hydraulique est l'approche de pointe pour la prévision des inondations."
    },
    exercices: [
      { id: 1, enonce: "Un modèle distribué à résolution 500m couvre un bassin de 500 km². Combien de cellules compte-t-il ? Combien de jeux de paramètres si chaque cellule a 10 paramètres ?", correction: "Nombre de cellules = (500 × 10⁶ m²) / (500 × 500 m²) = 2000 cellules. Paramètres totaux = 2000 × 10 = 20 000 paramètres. L'espace paramétrique est virtuellement impossible à explorer exhaustivement → nécessité de cartographie physique des paramètres." },
      { id: 2, enonce: "SWAT décompose un bassin en 15 sous-bassins. Chaque sous-bassin a en moyenne 8 HRU. Combien d'HRU au total ? Citez les 3 facteurs définissant une HRU.", correction: "Total = 15 × 8 = 120 HRU. Les 3 facteurs : type de sol, occupation du sol (land use), classe de pente. Chaque combinaison unique de ces 3 facteurs au sein d'un sous-bassin constitue une HRU distincte." },
      { id: 3, enonce: "GRACE-FO détecte une anomalie de -120 mm d'équivalent eau dans un bassin de 300 000 km² entre mai et septembre. Calculez le déficit de stockage en km³.", correction: "ΔS = -120 mm = -0,12 m. Volume = 0,12 m × 300 000 × 10⁶ m² = 36 × 10⁹ m³ = 36 km³. Déficit majeur, comparable à plusieurs années de prélèvements dans un grand aquifère." },
      { id: 4, enonce: "Expliquez la différence entre routage D8 et D-infinity pour dériver les directions d'écoulement d'un MNT.", correction: "D8 : chaque cellule draine vers un seul voisin (direction de plus forte pente parmi 8 voisins). Crée des réseaux en escalier artificiels. D-infinity : la direction d'écoulement est un angle continu (entre 0° et 360°). Le débit est réparti entre les deux cellules les plus proches de cet angle. D-infinity reproduit mieux les trajectoires réelles d'écoulement sur les versants convexes." },
      { id: 5, enonce: "Quelles données satellitaires permettent d'estimer l'équivalent en eau de la neige (SWE) et quelles sont leurs limitations ?", correction: "AMSR-2 : micro-ondes passives, bonne couverture temporelle, mais sature au-dessus de ~200 mm SWE. MODIS/Sentinel-2 : étendue spatiale de neige (optique) mais pas le SWE. ICESat-2 : altimétrie laser pour l'épaisseur. Aucun capteur ne mesure directement le SWE à haute résolution. L'approche hybride (fusion de capteurs + modèle) est nécessaire en montagne." },
      { id: 6, enonce: "Citez 3 avantages et 3 inconvénients des modèles SVAT couplés aux modèles climatiques régionaux.", correction: "Avantages : 1. Cohérence physique flux d'eau et énergie. 2. Rétroactions végétation-atmosphère. 3. Projections hydrologiques couplées au climat futur. Inconvénients : 1. Complexité paramétrique élevée. 2. Incertitudes cumulées (modèle climatique + SVAT). 3. Résolution spatiale des modèles climatiques (~10 km) inadaptée aux petits bassins." },
      { id: 7, enonce: "Qu'est-ce que OpenMI et quel problème résout-il en hydrologie ?", correction: "OpenMI (Open Modelling Interface) est une interface standardisée pour coupler des modèles de codes différents (hydrologique, hydraulique, qualité de l'eau, nappe). Résout le problème de l'interopérabilité : sans OpenMI, chaque couplage nécessite un développement ad hoc. Avec OpenMI, les modèles 'publient' et 'souscrivent' à des variables à la même interface standardisée." },
      { id: 8, enonce: "Un modèle distribué calibré sur des débits en un seul point donne NSE = 0,82. La carte simulée d'humidité du sol est comparée à SMAP : corrélation spatiale R = 0,45. Que concluez-vous ?", correction: "Le modèle reproduit bien les débits (NSE = 0,82) mais la répartition spatiale de l'humidité est médiocre (R = 0,45). Ce paradoxe illustre l'équifinalité spatiale : le modèle peut atteindre les bons débits avec de mauvaises distributions spatiales des états internes. Il faut inclure la comparaison des cartes d'humidité SMAP dans les critères de calage pour obtenir des simulations spatialement cohérentes." }
    ],
    flashcards: [
      { question: "Définir une HRU dans SWAT", reponse: "Hydrologic Response Unit = combinaison unique de type de sol + occupation du sol + classe de pente au sein d'un sous-bassin. L'hypothèse est que toutes les cellules d'une même HRU ont le même comportement hydrologique. Les bilans sont calculés par HRU et agrégés à l'échelle du sous-bassin." },
      { question: "Qu'est-ce que GRACE-FO mesure ?", reponse: "Les variations du champ de gravité terrestre causées par les déplacements de masse d'eau (nappes, neige, lacs, humidité du sol). Résolution ~300 km, mensuelle. Permet de suivre les sécheresses profondes et les bilans hydrologiques régionaux que les réseaux de mesure ne couvrent pas." },
      { question: "Avantages des modèles distribués vs conceptuels", reponse: "Exploitation des données spatiales (MNT, occupation du sol, satellitaire). Simulation de la variabilité spatiale des processus. Sorties spatiales (cartes d'humidité, débit en tout point). Mais : coût computationnel élevé, équifinalité exacerbée, besoins en données importants." },
      { question: "Qu'est-ce que le couplage SVAT ?", reponse: "Soil-Vegetation-Atmosphere Transfer. Résout les échanges eau et énergie entre sol, végétation et atmosphère. Calcule ET, transpiration, chaleur latente, sensible. Utilisé dans les modèles climatiques et hydrologiques. Requiert paramètres de végétation (LAI, FPAR) souvent issus de MODIS." },
      { question: "Problème de l'équifinalité dans les modèles distribués", reponse: "Avec des milliers de paramètres spatiaux, l'espace paramétrique est immense. Les débits en un point ne contraignent pas les paramètres internes de tout le bassin. Plusieurs distributions spatiales très différentes de paramètres donnent des débits similaires. Solution : assimiler des données spatiales (humidité sol, neige) pour contraindre les paramètres locaux." },
      { question: "Rôle de SMAP en modélisation hydrologique distribuée", reponse: "SMAP mesure l'humidité des 5 premiers cm du sol à 9-36 km / 2-3 j. Assimilation dans les modèles distribués pour corriger les états initiaux (améliore les prévisions à court terme). Évaluation des simulations d'humidité du sol (validation spatiale). Estimation des conditions antécédentes pour les prévisions de crue." }
    ]
  },

  'MASTER-EAU-034': {
    id: 'MASTER-EAU-034',
    titre: 'Identifiabilité, équifinalité et régionalisation',
    fiche: {
      intro: "L'identifiabilité des paramètres d'un modèle hydrologique et le problème d'équifinalité sont des défis fondamentaux de la modélisation. La régionalisation, qui consiste à estimer les paramètres en sites non jaugés, est l'application la plus stratégique car elle conditionne les études d'impact dans des bassins sans données hydrométriques. Ces problèmes touchent directement la confiance qu'on peut accorder aux simulations hydrologiques.",
      sections: [
        {
          titre: "Identifiabilité et diagnostique du calage",
          sous_sections: [
            { titre: "Critères d'identifiabilité", contenu: "Un paramètre est identifiable si sa valeur peut être estimée de façon unique à partir des observations disponibles. L'identifiabilité locale (au voisinage de l'optimum) peut être évaluée par la matrice d'information de Fisher : det(F) doit être non nul. L'identifiabilité globale requiert un seul minimum de la fonction objectif dans tout l'espace paramétrique. Les modèles sur-paramétrés (plus de paramètres que d'information dans les données) présentent une identifiabilité déficiente, se manifestant par des intervalles de confiance larges et des corrélations fortes entre paramètres." },
            { titre: "Diagnostic DOTTY plots et SPAGHETTI plots", contenu: "Les graphiques DOTTY (scatter plots paramètre vs performance) issus de Monte Carlo révèlent l'identifiabilité : un pic clairement défini indique un paramètre identifiable, une distribution plate ou bimodale indique une mauvaise identifiabilité. Les SPAGHETTI plots (simulations pour l'ensemble des jeux behavioral) montrent l'enveloppe d'incertitude des simulations. Ces représentations graphiques sont des outils de diagnostic essentiels avant d'interpréter les paramètres calés." }
          ]
        },
        {
          titre: "Équifinalité et incertitude structurelle",
          sous_sections: [
            { titre: "Sources d'équifinalité", contenu: "L'équifinalité résulte de trois sources : incertitude des données d'entrée (précipitations mal mesurées), incertitude structurelle (mauvaise représentation des processus) et incertitude paramétrique (espace paramétrique mal contraint). La décomposition de ces trois sources requiert des expériences de sensibilité structurelle (comparaison de structures de modèles) et des méthodes d'analyse d'erreur des entrées. L'hypothèse simplificatrice que seule l'incertitude paramétrique compte est généralement fausse." },
            { titre: "Comparaison de structures de modèles (MOPEX, CAMELS)", contenu: "Les benchmarks de comparaison de modèles (MOPEX aux USA, CAMELS en Europe, Australie) évaluent les performances de multiples structures de modèles sur des centaines de bassins. Ces études montrent qu'aucune structure n'est universellement supérieure et que la performance dépend des caractéristiques du bassin (climat, sol, géologie). La diversité structurelle (multi-modèles) est préférable à l'optimisation d'un modèle unique. La méthode BATEA combine l'incertitude paramétrique et structurelle dans un cadre bayésien." }
          ]
        },
        {
          titre: "Régionalisation des paramètres hydrologiques",
          sous_sections: [
            { titre: "Approches de régionalisation", contenu: "La régionalisation transpose les paramètres de bassins jaugés vers des bassins non jaugés. Trois approches principales : 1. Régression sur des descripteurs du bassin (pente, sol, climat) → paramètre = f(descripteurs). 2. Voisin le plus proche (spatial proximity) : on utilise les paramètres du bassin le plus proche ou le plus similaire. 3. Approche physique : estimation directe des paramètres par les propriétés mesurables du sol (pédotransfert). La méthode de régression multilinéaire ou non linéaire (Random Forest, ANN) est la plus commune." },
            { titre: "Performance de la régionalisation et incertitude", contenu: "La performance de la régionalisation est évaluée par validation croisée (leave-one-out : chaque bassin est traité comme non jaugé à tour de rôle). Le critère NSE médian pour les bassins non jaugés est généralement inférieur de 0,1-0,3 par rapport aux bassins calés. L'incertitude de la régionalisation s'ajoute à l'incertitude paramétrique locale. Les réseaux CAMELS (France, Brésil, Australie, Chili) fournissent des jeux de données multi-attributs standardisés pour développer et tester des méthodes de régionalisation." }
          ]
        },
        {
          titre: "Prédiction en site non jaugé (PUB)",
          sous_sections: [
            { titre: "Initiative PUB de l'IAHS et avancées", contenu: "L'initiative PUB (Prediction in Ungauged Basins, 2003-2012) de l'IAHS a mobilisé la communauté hydrologique mondiale pour améliorer les prévisions sans données de débit. Les principaux progrès : reconnaissance de l'importance des descripteurs de paysage (géologie, végétation), développement des méthodes de régionalisation par apprentissage automatique, constitution de jeux de données CAMELS. La décennie PUB a montré qu'une réduction de 50% de l'incertitude des prévisions en sites non jaugés était possible." },
            { titre: "Approches de machine learning pour la régionalisation", contenu: "Les réseaux de neurones récurrents (LSTM) se révèlent remarquablement performants pour la prévision de débits même en sites non jaugés, en apprenant des représentations latentes des caractéristiques du bassin. Le modèle d'Kratzert et al. (2019) surpasse les modèles hydrologiques conceptuels en régionalisation sur 531 bassins CAMELS. L'espace latent du LSTM encode implicitement les paramètres du bassin à partir de ses attributs. Ces approches hybrides (LSTM + connaissance hydrologique) représentent l'avant-garde de la recherche en PUB." }
          ]
        }
      ],
      points: [
        "Un paramètre est identifiable si det(F) > 0 (matrice d'information de Fisher).",
        "DOTTY plots révèlent l'identifiabilité : pic = identifiable, plat = non identifiable.",
        "L'équifinalité vient de 3 sources : données, structure du modèle, paramètres.",
        "CAMELS fournit des attributs standardisés de bassins pour la régionalisation.",
        "Régression sur descripteurs, voisin le plus proche, physique : 3 approches PUB.",
        "La validation croisée (LOO) évalue la performance de la régionalisation.",
        "NSE PUB est typiquement 0,1-0,3 moins bon qu'en site jaugé.",
        "LSTM surpasse les modèles conceptuels pour la prévision en sites non jaugés.",
        "BATEA combine incertitude paramétrique et structurelle dans un cadre bayésien.",
        "L'initiative PUB (2003-2012) a réduit de 50% l'incertitude en sites non jaugés."
      ],
      formules: [
        { nom: "Matrice d'information de Fisher", expression: "F = -E[∂²ln L(θ|data) / ∂θi∂θj]", variables: "L = fonction de vraisemblance, θ = paramètres. det(F) > 0 → paramètres identifiables" },
        { nom: "Régionalisation par régression", expression: "θi = β0 + Σ βj × xij + εi", variables: "θi = paramètre à estimer, xij = descripteurs du bassin i (surface, pente, sol...), βj = coefficients" },
        { nom: "Voisin le plus proche (distance de similarité)", expression: "d(i,j) = √[Σ wk × (xik - xjk)²]", variables: "xik = descripteur k du bassin i, wk = poids de normalisation" },
        { nom: "Validation croisée LOO (NSE médian)", expression: "NSE_LOO = median[NSE(bassin i simulé avec paramètres du voisin le plus proche)]", variables: "Calculé sur l'ensemble des bassins jaugés traités successivement comme non jaugés" },
        { nom: "Décomposition de la variance (Sobol total)", expression: "Var(Y) = Σ Vi + Σ Vij + ... + V12...k", variables: "Vi = contribution directe, Vij = interaction d'ordre 2, etc." }
      ],
      retenir: "L'identifiabilité des paramètres dépend de la richesse des observations et de la structure du modèle. L'équifinalité, ubiquitaire en hydrologie, résulte d'incertitudes sur les données, la structure et les paramètres. La régionalisation (PUB) est l'application la plus stratégique car les bassins non jaugés sont majoritaires. Les LSTM représentent une avancée majeure, surpassant les modèles conceptuels en PUB."
    },
    exercices: [
      { id: 1, enonce: "Un calage Monte Carlo de 5000 jeux de paramètres donne les DOTTY plots suivants : paramètre X1 → pic clair autour de 300 mm, paramètre X2 → distribution uniforme entre -1 et 2 mm/j. Que concluez-vous ?", correction: "X1 est bien identifiable (pic clair → la performance est sensible à sa valeur). X2 est non identifiable (performance insensible → distribution plate des jeux behavioral). X2 peut être fixé à une valeur médiane sans perte de performance. L'incertitude de prévision sera surtout portée par X2." },
      { id: 2, enonce: "Validation croisée LOO sur 20 bassins : NSE médian calé = 0,78, NSE médian LOO (voisin le plus proche) = 0,61. Calculez la dégradation et commentez.", correction: "Dégradation = 0,78 - 0,61 = 0,17 (22% de réduction relative). C'est une dégradation modérée, typique de la régionalisation par proximité spatiale. Elle quantifie le coût de l'absence de données de débit local. NSE > 0,6 en sites non jaugés est généralement considéré comme satisfaisant pour des applications de gestion." },
      { id: 3, enonce: "Citez les 3 sources d'équifinalité et proposez un protocole pour les distinguer.", correction: "1. Incertitudes sur les précipitations : comparer simulations avec différents champs de pluie. 2. Incertitude structurelle : comparer plusieurs structures de modèles sur les mêmes données. 3. Incertitude paramétrique : GLUE/Monte Carlo sur un seul modèle. Pour distinguer : tenir le modèle fixe et varier les précipitations → isole source 1. Tenir les précipitations fixes et varier la structure → isole source 2. GLUE avec précipitations et structure fixes → isole source 3." },
      { id: 4, enonce: "Quels attributs de bassin (descripteurs) sont les plus couramment utilisés pour régionaliser les paramètres de GR4J ?", correction: "Surface, pente moyenne, altitude médiane, indice climatique (P/ETP), type de sol dominant (argile, sable), occupation du sol (forêt, prairie), géologie (perméabilité), densité de drainage. Les descripteurs climatiques (P/ETP) sont généralement les meilleurs prédicteurs de X1 (capacité de stockage) et X2 (échanges souterrains)." },
      { id: 5, enonce: "Pourquoi les LSTM (Long Short-Term Memory) sont-ils adaptés à la régionalisation des débits ?", correction: "LSTM maintiennent une mémoire des états passés (état caché), ce qui leur permet de capturer la dépendance temporelle des débits (récession, humidité antécédente). En entrée : précipitation, ETP, attributs statiques du bassin. L'espace latent encode implicitement les 'paramètres' sans les rendre explicites. Ils apprennent sur des milliers de bassins simultanément → régularisation spatiale naturelle qui améliore les performances en sites non jaugés." },
      { id: 6, enonce: "Qu'est-ce que la démarche BATEA et en quoi est-elle supérieure à GLUE ?", correction: "BATEA (Bayesian Total Error Analysis) est un cadre bayésien rigoureux qui partitionne l'incertitude entre données d'entrée, paramètres et structure du modèle. Contrairement à GLUE (qui est informel et non bayésien au sens strict), BATEA définit formellement les distributions de probabilité sur chaque source d'erreur. Elle évite de tout attribuer à l'incertitude paramétrique alors que les erreurs d'entrée dominent parfois." },
      { id: 7, enonce: "Un bassin non jaugé a une surface de 450 km², une pente moyenne de 12%, une géologie sédimentaire carbonatée. L'indice climatique P/ETP = 0,8. Comment prédire X1 (GR4J) par régression régionale ?", correction: "Avec une équation de régression régionale préalablement établie, par exemple : ln(X1) = -0,5 + 0,8×ln(A) + 1,2×ln(P/ETP) + 0,3×Géol_carbonatée (0/1). Avec A=450, P/ETP=0,8, Géol=1 : ln(X1) = -0,5 + 0,8×6,11 + 1,2×(-0,22) + 0,3 = -0,5 + 4,89 - 0,26 + 0,3 = 4,43. X1 ≈ exp(4,43) ≈ 84 mm. (Les coefficients de régression proviennent de l'analyse régionale préalable.)" },
      { id: 8, enonce: "Quelle est l'implication pratique de l'équifinalité pour les études d'impact du changement climatique utilisant des modèles hydrologiques ?", correction: "Si l'espace behavioral contient des jeux de paramètres très différents qui simulent le présent également bien, leurs projections pour le futur (sous forçage climatique modifié) peuvent diverger fortement. Un seul jeu 'optimal' peut donner une projection trompeusement précise. Il faut propager l'ensemble behavioral aux projections climatiques, produisant une enveloppe d'incertitude sur les débits futurs. Cette incertitude peut dominer l'incertitude sur les scénarios climatiques pour les bassins complexes." }
    ],
    flashcards: [
      { question: "Qu'est-ce que l'équifinalité en hydrologie ?", reponse: "Concept de Beven & Binley : de nombreux jeux de paramètres différents simulent les observations avec une performance similaire. Il n'existe pas un 'vrai' paramètre unique. Sources : incertitudes données, structure modèle, paramètres. Implication : quantifier l'incertitude plutôt que d'optimiser un seul jeu." },
      { question: "Qu'est-ce qu'un DOTTY plot ?", reponse: "Graphique paramètre (axe X) vs performance (axe Y) issu d'un Monte Carlo. Un pic bien défini → paramètre identifiable et sensible. Distribution plate → paramètre non identifiable (fixé sans perte de performance). Outil diagnostique indispensable avant d'interpréter le calage." },
      { question: "Définir la validation croisée leave-one-out (LOO) pour la régionalisation", reponse: "Chaque bassin jaugé est retiré du jeu d'entraînement à tour de rôle et traité comme non jaugé. Ses paramètres sont estimés par la méthode de régionalisation. La performance est calculée sur ce bassin avec les paramètres régionalisés. La médiane des NSE_LOO évalue la méthode de régionalisation de façon non biaisée." },
      { question: "Qu'est-ce que CAMELS ?", reponse: "Catchment Attributes and Meteorology for Large-sample Studies. Jeux de données standardisés avec attributs physiques et climatiques de centaines à milliers de bassins (USA, Europe, Brésil, Chili, Australie). Référence pour développer et évaluer les méthodes de régionalisation et d'apprentissage automatique." },
      { question: "Avantage des LSTM pour la prévision en site non jaugé", reponse: "Apprentissage sur des milliers de bassins simultanément → régularisation spatiale implicite. L'état caché encode la mémoire hydrologique. Les attributs statiques du bassin conditionnent les poids. Performances supérieures aux modèles conceptuels en PUB (Kratzert et al. 2019). Pas d'optimisation paramétrique locale nécessaire." },
      { question: "Trois approches de régionalisation des paramètres", reponse: "1. Régression sur descripteurs : paramètre = f(pente, sol, P/ETP...). 2. Voisin le plus proche (spatial ou attributs) : on copie les paramètres du bassin le plus similaire. 3. Estimation physique : paramètres estimés directement par cartographie des propriétés du sol (pédo-transfert, MNT). Chaque approche a ses avantages selon la disponibilité des données." }
    ]
  },

  'MASTER-EAU-035': {
    id: 'MASTER-EAU-035',
    titre: 'Statistique des crues et événements extrêmes',
    fiche: {
      intro: "La statistique des crues est l'outil fondamental pour le dimensionnement des ouvrages hydrauliques (barrages, ponts, digues) et la gestion du risque d'inondation. L'estimation de la crue centennale ou millennale requiert l'extrapolation des lois statistiques bien au-delà des données disponibles, introduisant des incertitudes considérables. Les méthodes modernes combinent analyse fréquentielle locale, régionalisation et approches paléohydrologiques.",
      sections: [
        {
          titre: "Lois statistiques des débits maximaux",
          sous_sections: [
            { titre: "Loi GEV et ses cas particuliers", contenu: "La loi GEV (Generalized Extreme Value) est le modèle universel pour les maxima annuels (théorème de Fisher-Tippett-Gnedenko). Elle inclut trois formes selon le paramètre de forme ξ : Gumbel (ξ = 0), Fréchet (ξ > 0, queue lourde), et Weibull inversée (ξ < 0, queue bornée). En hydrologie, ξ est souvent légèrement positif (queue de Fréchet légère, covariables climatiques). L'estimation des paramètres par L-moments est préférable au maximum de vraisemblance pour les petits échantillons (moins sensible aux outliers)." },
            { titre: "Loi LP3 (Log-Pearson Type III)", contenu: "La loi LP3 est la référence aux USA (Bulletin 17C, USWRC). Les logarithmes des débits suivent une loi de Pearson de type III (gamma généralisée). Ses paramètres sont la moyenne, la variance et l'asymétrie des log-débits. L'estimateur régional du coefficient d'asymétrie (Bulletin 17C) pondère l'estimation locale et régionale pour réduire la variabilité d'échantillonnage. La LP3 s'ajuste bien aux données nord-américaines mais son utilisation en Europe est moins systématique." }
          ]
        },
        {
          titre: "Estimation des quantiles et leurs incertitudes",
          sous_sections: [
            { titre: "Méthode des L-moments", contenu: "Les L-moments (Hosking, 1990) sont des combinaisons linéaires des statistiques d'ordre. L1 = moyenne, L2 = L-écart type, τ3 = L-asymétrie, τ4 = L-aplatissement. Ils sont plus robustes que les moments classiques pour les petits échantillons et les distributions à queue lourde. Le diagramme L-moments (τ3 vs τ4) permet de sélectionner graphiquement la loi statistique la mieux adaptée aux données. Les L-moments régionaux sont estimés en pondérant les contributions des stations par leur longueur de série." },
            { titre: "Incertitude des quantiles extrêmes", contenu: "L'incertitude d'un quantile QT augmente avec T et décroît avec la longueur n de la série. Pour une série de 50 ans, l'intervalle de confiance à 90% sur Q100 est typiquement ±30-40% autour de l'estimation centrale. La méthode bootstrap (rééchantillonnage) évalue non-paramétriquement cette incertitude. L'extrapolation au-delà de 2-3 fois la longueur de série est à éviter ou à accompagner d'une analyse d'incertitude explicite. La méthode de Gumbel (papier de probabilité) reste utile pour visualiser l'ajustement et détecter les outliers." }
          ]
        },
        {
          titre: "Analyse régionale des crues",
          sous_sections: [
            { titre: "Index-flood et courbe de croissance régionale", contenu: "La méthode index-flood (Dalrymple, 1960) régionalise les quantiles en deux étapes : l'index local (débit médian ou QMNA) et la courbe de croissance régionale adimensionnelle Q(T)/QMNA = f(T). Dans une région homogène, les crètes adimensionnelles suivent la même distribution. L'homogénéité régionale est testée par l'hétérogénéité de Hosking-Wallis (H-statistique). La combinaison de N stations dans une région multiplie effectivement la longueur de série pour estimer les queues de distribution." },
            { titre: "Approches bayésiennes et données historiques", contenu: "Les données historiques (archives, laisses de crues, marques sur les ponts) permettent d'étendre la fenêtre d'observation au-delà de la période de mesure. La méthode bayésienne (Neppel, Lang) intègre ces données sous forme d'informations sur les crues dépassant un seuil de perception. Elle produit une distribution a posteriori plus informée des paramètres, réduisant les incertitudes sur les quantiles rares. Les données paléohydrologiques (sédiments, datation carbone) permettent de remonter sur plusieurs millénaires." }
          ]
        },
        {
          titre: "Non-stationnarité et changement climatique",
          sous_sections: [
            { titre: "Détection de non-stationnarité dans les séries de crues", contenu: "Les tendances dans les séries de crues peuvent résulter du changement climatique, des modifications d'occupation du sol ou des prélèvements d'eau. Les tests statistiques (Mann-Kendall, Pettitt pour les ruptures) détectent les tendances ou changements de régime. La non-stationnarité remet en cause l'hypothèse fondamentale de l'analyse fréquentielle classique. Le concept de NEVA (Non-stationary Extreme Value Analysis) modélise les paramètres de la GEV comme des fonctions du temps ou de covariables climatiques." },
            { titre: "Attribution et perspectives futures", contenu: "L'attribution des tendances de crues au changement climatique est complexe car de multiples facteurs co-évoluent (urbanisation, boisement, régulation des cours d'eau). Les projections des crues futures combinent des modèles climatiques régionaux (RCMs) et des modèles hydrologiques. L'incertitude des projections est dominée par l'incertitude sur les précipitations extrêmes futures. Les approches bayésiennes permettent d'intégrer les projections climatiques dans l'analyse fréquentielle comme covariables des paramètres de la GEV." }
          ]
        }
      ],
      points: [
        "GEV : ξ = 0 → Gumbel, ξ > 0 → Fréchet (queue lourde), ξ < 0 → Weibull bornée.",
        "Les L-moments sont plus robustes que les moments classiques pour les petits échantillons.",
        "L'index-flood régionalise les quantiles par courbe de croissance adimensionnelle.",
        "L'hétérogénéité de Hosking-Wallis teste l'homogénéité régionale (H < 1 : homogène).",
        "L'incertitude de Q100 sur 50 ans de données est typiquement ±30-40%.",
        "Le bootstrap évalue non-paramétriquement l'incertitude des quantiles.",
        "Les données historiques bayésiennes étendent la fenêtre d'observation au-delà des jauges.",
        "Mann-Kendall et Pettitt testent les tendances et ruptures dans les séries.",
        "La loi LP3 (Log-Pearson III) est la référence aux USA (Bulletin 17C).",
        "La non-stationnarité (NEVA) modélise les paramètres GEV comme fonctions du temps."
      ],
      formules: [
        { nom: "Loi GEV (CDF)", expression: "F(x) = exp(-[1 + ξ(x-μ)/σ]^(-1/ξ))  pour ξ ≠ 0", variables: "μ = localisation, σ = échelle > 0, ξ = forme (Gumbel : ξ = 0, Fréchet : ξ > 0)" },
        { nom: "Quantile GEV", expression: "xT = μ - (σ/ξ) × [1 - (-ln(1-1/T))^(-ξ)]", variables: "T = période de retour (ans), p = 1-1/T = probabilité de non-dépassement" },
        { nom: "L-moment d'ordre 1 (moyenne)", expression: "λ1 = E[X] = x̄", variables: "Estimé par la moyenne des données ordonnées" },
        { nom: "L-coefficient d'asymétrie (τ3)", expression: "τ3 = λ3/λ2  avec  λ3 = E[(2F(X)-1) × (X - μ)]", variables: "Mesure l'asymétrie de la distribution (robuste aux outliers vs skewness classique)" },
        { nom: "Hétérogénéité de Hosking-Wallis", expression: "H = (V - μV) / σV", variables: "V = dispersion des L-CV pondérés des stations, μV et σV estimés par simulation Monte Carlo. H < 1 : homogène" }
      ],
      retenir: "L'analyse fréquentielle des crues estime des quantiles rares (Q100, Q1000) par extrapolation de lois statistiques au-delà des données disponibles. La loi GEV est le fondement théorique, les L-moments sa méthode d'estimation robuste. La régionalisation (index-flood) réduit l'incertitude par mutualisation des données. Les données historiques et les approches bayésiennes étendent la fenêtre temporelle. La non-stationnarité est un défi émergent qui remet en cause les hypothèses classiques."
    },
    exercices: [
      { id: 1, enonce: "Une série de 40 ans de débits maximaux annuels a une moyenne x̄ = 320 m³/s et un écart-type s = 85 m³/s. Estimez Q100 par la loi de Gumbel (u = -ln(-ln(1-1/T)), x = μ + σ×u avec μ = x̄ - 0,5772σ_G et σ_G = s×π/(√6)).", correction: "σ_G = 85×π/√6 = 85×1,2825 = 109,0. μ_Gumbel = 320 - 0,5772×109 = 320 - 62,9 = 257,1. u_100 = -ln(-ln(1-0,01)) = -ln(-ln(0,99)) = -ln(0,01005) = 4,60. Q100 = 257,1 + 109,0×4,60 = 257,1 + 501,4 = 758 m³/s." },
      { id: 2, enonce: "Le test de Mann-Kendall sur 50 ans de maxima annuels donne S = 285. La variance de S pour n=50 est Var(S) = 22100. Le test est bilatéral à α = 5% (Zcrit = 1,96). Y a-t-il une tendance significative ?", correction: "Z = (S-1)/√Var(S) = 284/148,7 = 1,91. |Z| = 1,91 < 1,96 = Zcrit. La tendance n'est pas significative au seuil de 5% (mais proche : p ≈ 0,056). Interprétation : tendance croissante apparente mais statistiquement non concluante." },
      { id: 3, enonce: "Une région homogène de 8 stations a un L-CV moyen pondéré τ2 = 0,32 et L-asymétrie τ3 = 0,24. Sur le diagramme L-moments, à quelles lois statistiques ces valeurs correspondent-elles ?", correction: "τ2 = 0,32 et τ3 = 0,24 orientent vers une loi GEV avec ξ ≈ 0,05-0,10 (légèrement Fréchet), ou une loi Pearson III avec skewness positif. Elles excluent la loi normale (τ3 = 0) et la loi exponentielle (τ3 = 1/3). La loi GEV ou la loi de Pearson III sont toutes deux plausibles → test d'ajustement nécessaire." },
      { id: 4, enonce: "Une série de 60 ans de débits maximaux est augmentée de 3 données historiques : deux crues connues comme plus grandes que 1200 m³/s (seuil de perception) et une crue estimée à 1500 m³/s en 1850. Comment ces données modifient-elles l'estimation de Q100 ?", correction: "Sans données historiques, Q100 est extrapolé depuis 60 ans. Avec les données historiques bayésiennes : la crue de 1500 m³/s en 1850 (il y a ~170 ans) fournit une contrainte forte sur la queue de distribution. Les deux crues dépassant 1200 m³/s (sur une fenêtre de ~200 ans) contraignent la fréquence de dépassement de ce seuil. L'estimation de Q100 est généralement augmentée et l'incertitude réduite." },
      { id: 5, enonce: "Index-flood d'une région : QMNA_bassin = 45 m³/s, courbe de croissance régionale pour T=100 ans : QT/QMNA = 8,5. Calculez Q100.", correction: "Q100 = QT/QMNA × QMNA = 8,5 × 45 = 382,5 m³/s." },
      { id: 6, enonce: "Expliquez pourquoi les L-moments sont préférables aux moments classiques pour l'analyse fréquentielle en hydrologie.", correction: "Les moments classiques (variance, asymétrie) dépendent cubiquement des valeurs extrêmes. Un seul outlier ou une observation exceptionnelle peut totalement biaiser l'estimation du skewness. Les L-moments sont des combinaisons linéaires des statistiques d'ordre → moins sensibles aux valeurs extrêmes → estimateurs plus stables pour les petits échantillons (n = 20-50 ans, typique en hydrologie)." },
      { id: 7, enonce: "Le test de Pettitt sur une série de 60 ans de crues détecte une rupture significative en 1980. Citez 3 causes possibles et la marche à suivre pour l'analyse fréquentielle.", correction: "Causes possibles : 1. Construction d'un barrage en amont (changement de régime hydraulique). 2. Urbanisation du bassin (augmentation des coefficients de ruissellement). 3. Changement de pratiques agricoles (drainage, suppression de zones humides). Marche à suivre : identifier la cause, analyser séparément les deux sous-séries si l'homogénéité est confirmée, ou utiliser NEVA avec le temps (ou une covariable) comme paramètre de non-stationnarité." },
      { id: 8, enonce: "Calculez l'intervalle de confiance à 90% de Q100 par bootstrap si les 500 rééchantillonnages donnent Q100 de médiane 750 m³/s et percentiles 5%-95% de [480, 1150] m³/s.", correction: "Intervalle à 90% = [480 ; 1150] m³/s. La médiane est 750 m³/s. L'incertitude relative = (1150-480)/(2×750) = 670/1500 = ±45%. Cette incertitude est typique pour Q100 avec 40-50 ans de données. Elle justifie une analyse de risque plutôt qu'un dimensionnement déterministe." }
    ],
    flashcards: [
      { question: "Paramètre de forme ξ de la GEV et queues de distribution", reponse: "ξ = 0 → Gumbel (queue exponentielle). ξ > 0 → Fréchet (queue en loi puissance, non bornée). ξ < 0 → Weibull inversée (queue bornée, débit maximum fini). En hydrologie, ξ est souvent légèrement positif (0,05-0,2) → queues légèrement plus lourdes que Gumbel." },
      { question: "Qu'est-ce que la méthode index-flood ?", reponse: "Régionalisation en 2 étapes : index local (QMNA ou Q2 de chaque bassin) × courbe de croissance régionale adimensionnelle Q(T)/QMNA. La courbe régionale est estimée en combinant N stations d'une région homogène. Avantage : région équivalente à une série de N×n années." },
      { question: "Avantage des L-moments sur les moments classiques", reponse: "Les L-moments sont linéaires en les statistiques d'ordre → robustes aux outliers. Le skewness classique est cubique en les écarts → très sensible aux valeurs extrêmes. Pour n = 30 ans, l'incertitude du L-skewness est 2-3× plus petite que celle du skewness classique." },
      { question: "Qu'est-ce que la non-stationnarité en analyse fréquentielle ?", reponse: "L'hypothèse classique suppose que les débits maximaux sont stationnaires (mêmes paramètres statistiques dans le temps). La non-stationnarité (changement climatique, occupation du sol) invalide cette hypothèse. NEVA modélise μ(t) = μ0 + μ1×t (tendance linéaire). Conséquence : la période de retour n'est plus constante dans le temps." },
      { question: "Comment les données historiques réduisent-elles l'incertitude des quantiles rares ?", reponse: "En ajoutant des contraintes sur les événements rares observés avant la période de mesure systématique. Une crue exceptionnelle observée en 1850 (il y a ~170 ans) fournit une information sur la queue de la distribution qui vaut plusieurs dizaines d'années de données régulières. Les méthodes bayésiennes formalisent cette intégration." },
      { question: "Qu'est-ce que le Bulletin 17C ?", reponse: "Guide de référence de l'USWRC (US Water Resources Council) pour l'analyse fréquentielle des crues aux USA. Recommande la loi LP3 (Log-Pearson Type III) ajustée par L-moments. Inclut la pondération entre skewness régional et local. Obligatoire pour les études fédérales d'inondation aux États-Unis." }
    ]
  },

  'MASTER-EAU-037': {
    id: 'MASTER-EAU-037',
    titre: 'Prévision hydrologique et assimilation de données',
    fiche: {
      intro: "La prévision hydrologique en temps réel combine des modèles pluie-débit, des prévisions météorologiques et des techniques d'assimilation de données pour anticiper les crues et les étiages. L'enjeu est de produire des prévisions utiles pour la gestion des ouvrages et l'alerte aux populations, en quantifiant l'incertitude pour permettre des décisions fondées sur le risque.",
      sections: [
        { titre: "Chaîne de prévision hydrologique", sous_sections: [
          { titre: "Architecture d'un système de prévision", contenu: "Un système opérationnel de prévision hydrologique intègre : acquisition en temps réel des données hydrométriques et pluviométriques (via réseaux RADOME, VIGICRUES), modèles météorologiques (AROME, ECMWF) pour les précipitations futures, modèle hydrologique (GR4J, HBV, TOPMODEL) pour la transformation pluie-débit, et module de routage hydraulique (MAGE, InfoWorks) pour la propagation dans le chenal. La chaîne fournit des prévisions de débit et de niveau à des stations de jaugeage à des horizons de 24-72h." },
          { titre: "Horizons de prévision et sources d'incertitude", contenu: "L'incertitude de prévision augmente avec l'horizon temporel. À court terme (< 6h), l'incertitude est dominée par la mesure du débit courant et les précipitations en cours. À moyen terme (6-48h), les incertitudes de la prévision météorologique dominent. À long terme (> 48h), la représentation des processus du bassin et les conditions initiales deviennent prépondérantes. La décomposition de l'incertitude guide l'amélioration des systèmes : améliorer les radars pour le court terme, et les modèles pluie-débit pour le moyen terme." }
        ]},
        { titre: "Techniques d'assimilation de données", sous_sections: [
          { titre: "Filtre de Kalman et variants", contenu: "Le filtre de Kalman (FK) est l'algorithme optimal pour les systèmes linéaires gaussiens. Il met à jour l'état x du modèle en combinant la prévision x⁻ et l'observation y : x⁺ = x⁻ + K(y - Hx⁻) où K = P⁻Hᵀ(HP⁻Hᵀ + R)⁻¹ est le gain de Kalman. P⁻ est la covariance d'erreur de prévision, R la covariance d'erreur d'observation. Le filtre de Kalman d'ensemble (EnKF) généralise aux systèmes non-linéaires par un ensemble de N membres représentant l'incertitude." },
          { titre: "Méthodes d'erreur persistante et correction AR", contenu: "La correction par erreur persistante est une approche simple et robuste : l'erreur de prévision à l'instant t est utilisée pour corriger la prévision à t+Δt. Le modèle AR(1) suppose que l'erreur se propage avec un coefficient de corrélation ρ : ε(t+1) = ρ × ε(t) + bruit. Cette approche est implémentée dans les systèmes opérationnels (Vigicrues, BV). Pour les prévisions à horizon > 24h, l'erreur se décorrèle et la correction apporte peu de bénéfice." }
        ]},
        { titre: "Prévision d'ensemble et communication du risque", sous_sections: [
          { titre: "Génération d'ensembles hydrologiques", contenu: "Un ensemble hydrologique est généré en propageant l'incertitude des précipitations (ensemble météorologique : PEARP/ECMWF 50 membres) ou des paramètres du modèle (GLUE) à travers le modèle hydrologique. Les 50 membres produisent 50 hydrogrammes prévisionnels. La probabilité de dépasser un seuil de crue est calculée directement : P(Q > Qseuil) = nombre de membres > Qseuil / 50. Cette information probabiliste est plus utile pour les décisions de gestion que l'unique prévision déterministe." },
          { titre: "Vérification des prévisions d'ensemble", contenu: "La vérification des systèmes de prévision probabiliste utilise des scores de performance spécifiques. Le Brier Score mesure la probabilité de dépassement d'un seuil. Le Ranked Probability Score (RPS) évalue la distribution complète. La reliability (droite de fréquence relative vs probabilité prévue) indique si les probabilités prévues sont bien calibrées. Le skill score compare le système à une référence (climatologie). La décomposition Brier = résolution + fiabilité + incertitude permet d'identifier les axes d'amélioration." }
        ]},
        { titre: "Systèmes opérationnels de prévision", sous_sections: [
          { titre: "Vigicrues et systèmes nationaux", contenu: "Vigicrues (France) est le système national de vigilance crues, couvrant ~80% des cours d'eau à risque. Il repose sur des modèles pluie-débit calés sur les principaux bassins, alimentés par la mosaïque radar PANTHERE. Les niveaux de vigilance (vert, jaune, orange, rouge) sont associés à des seuils de débit ou de hauteur. VigicruesFlash complète Vigicrues pour les petits bassins non surveillés en temps réel. L'objectif est de fournir un délai d'alerte de 2-24h selon la taille du bassin." },
          { titre: "EFAS et systèmes transfrontaliers", contenu: "L'European Flood Awareness System (EFAS, Centre Commun de Recherche UE) fournit des prévisions de crues à l'échelle européenne à 10 jours d'horizon. Il utilise le modèle LISFLOOD (semi-distribué) alimenté par les prévisions météorologiques ECMWF. EFAS est particulièrement utile pour les bassins transfrontaliers (Danube, Rhin, Meuse). Il produit des cartes de probabilité d'inondation et alerte les autorités nationales. Des projets équivalents existent en Asie (GFMS, GloFAS pour l'alerte mondiale)." }
        ]}
      ],
      points: ["Chaîne opérationnelle : radar + modèle pluie-débit + routage hydraulique + assimilation.", "Gain de Kalman K = P⁻Hᵀ(HP⁻Hᵀ + R)⁻¹ pondère modèle et observation.", "EnKF généralise le FK aux modèles non-linéaires par représentation ensemble.", "La correction AR(1) est robuste jusqu'à ~24h d'horizon.", "P(Q > Qseuil) = fraction des membres > Qseuil dans l'ensemble.", "Brier Score = résolution + fiabilité + incertitude (décomposition de Murphy).", "Vigicrues couvre 80% des cours d'eau à risque avec 4 niveaux de vigilance.", "EFAS : prévisions européennes à 10 jours avec LISFLOOD + ECMWF.", "VigicruesFlash complète Vigicrues pour les petits bassins non instrumentés.", "La vérification probabiliste (RPS, reliability) est indispensable pour évaluer l'ensemble."],
      formules: [
        { nom: "Mise à jour Kalman", expression: "x⁺ = x⁻ + K × (y - H × x⁻)", variables: "x⁻ = prévision, y = observation, H = opérateur d'observation, K = gain de Kalman" },
        { nom: "Gain de Kalman", expression: "K = P⁻Hᵀ / (HP⁻Hᵀ + R)", variables: "P⁻ = covariance d'erreur de prévision, R = covariance d'erreur d'observation" },
        { nom: "Correction AR(1)", expression: "ε(t+Δt) = ρ × ε(t),  Qcorr(t+Δt) = Qprev(t+Δt) + ε(t+Δt)", variables: "ρ = coefficient autocorrélation des erreurs, ε = erreur de prévision" },
        { nom: "Probabilité de dépassement (ensemble)", expression: "P(Q > Qseuil, t) = (1/N) × Σ 1[Qi(t) > Qseuil]", variables: "N = nombre de membres de l'ensemble, Qi = débit du membre i" },
        { nom: "Brier Score", expression: "BS = (1/N) × Σ(fi - oi)²", variables: "fi = probabilité prévue de dépassement, oi = réalisation binaire (0 ou 1)" }
      ],
      retenir: "La prévision hydrologique opérationnelle repose sur une chaîne intégrée : prévision météorologique → modèle pluie-débit → assimilation de données → communication probabiliste du risque. L'assimilation (Kalman, AR) réduit l'erreur à court terme. La prévision d'ensemble quantifie l'incertitude pour des décisions informées. Vigicrues (France) et EFAS (Europe) sont les systèmes opérationnels de référence."
    },
    exercices: [
      { id: 1, enonce: "La prévision du débit à t+6h est 85 m³/s. L'observation courante est 95 m³/s. Avec un coefficient AR(1) ρ = 0,7, calculez la prévision corrigée à t+6h.", correction: "Erreur courante ε(t) = 95 - prévision(t). Sans la prévision courante, on suppose ε(t) = erreur connue. Si la prévision à t est 90 m³/s : ε(t) = 95 - 90 = 5 m³/s. ε(t+6h) = 0,7 × 5 = 3,5 m³/s. Qcorr = 85 + 3,5 = 88,5 m³/s." },
      { id: 2, enonce: "Un ensemble de 50 membres prédit des débits à t+24h. 18 membres dépassent le seuil d'alerte orange (200 m³/s). Calculez P et commentez pour la décision d'alerte.", correction: "P(Q > 200) = 18/50 = 36%. Probabilité élevée mais non majoritaire. Dans Vigicrues, ce niveau (> 20-30%) peut justifier le passage en vigilance orange. La décision doit tenir compte du coût asymétrique : le coût d'une fausse alerte est généralement bien inférieur au coût d'une crue non signalée." },
      { id: 3, enonce: "Le gain de Kalman K = 0,65. L'état prévu x⁻ = 120 m³/s, l'observation y = 145 m³/s. Calculez l'état mis à jour.", correction: "x⁺ = x⁻ + K × (y - x⁻) = 120 + 0,65 × (145 - 120) = 120 + 0,65 × 25 = 120 + 16,25 = 136,25 m³/s. K = 0,65 → on fait plus confiance à l'observation qu'au modèle (K = 1 : confiance totale à l'observation, K = 0 : confiance totale au modèle)." },
      { id: 4, enonce: "Citez 3 sources d'incertitude dominantes pour des prévisions hydrologiques à horizon 72h.", correction: "1. Incertitude des précipitations futures (prévision météorologique à 72h : RMSE ≈ 20-50% sur les précipitations convectives). 2. Incertitude des paramètres du modèle pluie-débit (10-20% sur les débits). 3. Incertitude de l'état initial du bassin (humidité du sol, niveau des nappes). La source 1 domine largement à 72h." },
      { id: 5, enonce: "Expliquez la différence entre reliability et resolution dans la vérification d'une prévision d'ensemble.", correction: "Reliability (fiabilité) : les probabilités prévues correspondent-elles aux fréquences observées ? Un système bien calibré prédit 30% de dépassement dans 30% des cas où il a prévu 30%. Resolution (résolution) : le système discrimine-t-il les situations (prévoit des valeurs différentes pour des situations différentes) ? Un système peut être fiable mais peu résolutif (prédit toujours 50%)." },
      { id: 6, enonce: "Calculez le Brier Score pour 5 événements : f = [0,8; 0,3; 0,6; 0,1; 0,9], o = [1; 0; 1; 0; 1].", correction: "BS = (1/5) × [(0,8-1)² + (0,3-0)² + (0,6-1)² + (0,1-0)² + (0,9-1)²] = (1/5) × [0,04 + 0,09 + 0,16 + 0,01 + 0,01] = 0,31/5 = 0,062. Bon score (proche de 0 = parfait, 0,25 = climatologie)." },
      { id: 7, enonce: "Qu'est-ce que VigicruesFlash et pourquoi est-il complémentaire de Vigicrues ?", correction: "VigicruesFlash détecte les crues soudaines sur les petits bassins non surveillés en temps réel (< 500 km², crues en 1-6h). Il utilise des alertes basées sur les précipitations radar + un modèle simple d'estimation du débit de pointe. Complémentaire : Vigicrues surveille les grands bassins instrumentés avec modèles calibrés. VigicruesFlash couvre le réseau de petits affluents où les crues sont les plus meurtrières (Gardons, Vidourle, Hérault)." },
      { id: 8, enonce: "Un bassin a un temps de concentration Tc = 8h. À quelle distance à l'amont doit-on mesurer les précipitations pour avoir 8h d'anticipation ?", correction: "On mesure les précipitations au-dessus du bassin en temps réel. Le délai utile d'alerte = Tc = 8h. Si la prévision météorologique n'est pas utilisée, le délai est limité au temps de parcours depuis la source la plus éloignée (tête de bassin). Pour gagner des heures supplémentaires, on intègre les prévisions AROME (1-3h) ou ECMWF (1-3 jours) comme forçage de précipitations futures." }
    ],
    flashcards: [
      { question: "Qu'est-ce que le gain de Kalman ?", reponse: "K = P⁻Hᵀ(HP⁻Hᵀ + R)⁻¹. Pondération entre prévision (modèle) et observation. K → 1 : on fait confiance à l'observation (R faible, grand P⁻). K → 0 : on fait confiance au modèle (R grand, petit P⁻). Optimal au sens des moindres carrés." },
      { question: "Qu'est-ce que l'EnKF ?", reponse: "Ensemble Kalman Filter. Représente l'incertitude de l'état par un ensemble de N membres. Chaque membre est mis à jour séparément par le filtre de Kalman. La covariance d'erreur P⁻ est estimée empiriquement par la dispersion de l'ensemble. Généralise le FK linéaire aux modèles non-linéaires." },
      { question: "Comment Vigicrues définit-il les niveaux de vigilance ?", reponse: "4 niveaux : vert (pas de vigilance), jaune (phénomène locaux), orange (phénomène important, risque inondation), rouge (phénomène exceptionnel, crue majeure). Basés sur des seuils de hauteur ou de débit à des stations de référence. Mis à jour toutes les heures." },
      { question: "Qu'est-ce que le Brier Score ?", reponse: "BS = (1/N)Σ(f-o)². Mesure l'erreur quadratique moyenne entre probabilité prévue f et réalisation binaire o. BS = 0 : prévision parfaite. BS = 0,25 : équivalent à la climatologie (prévision 0,5 partout). Plus petit est meilleur." },
      { question: "Avantage de la prévision d'ensemble sur la prévision déterministe", reponse: "Quantifie l'incertitude de la prévision → P(dépassement seuil). Permet des décisions fondées sur le risque (coût asymétrique). Détecte les situations où la prévision est plus ou moins fiable. Meilleure communication aux gestionnaires que 'le débit sera 300 m³/s' vs 'P(> 200 m³/s) = 70%'." },
      { question: "Sources d'incertitude dominantes selon l'horizon de prévision", reponse: "0-6h : état initial du bassin + précipitations en cours (radar). 6-48h : incertitude de la prévision météorologique. > 48h : incertitude climatique (scénarios) + processus du bassin. L'assimilation de données est surtout bénéfique à court terme (< 24h)." }
    ]
  },

  'MASTER-EAU-038': {
    id: 'MASTER-EAU-038',
    titre: 'Effets des usages et des aménagements sur les régimes',
    fiche: {
      intro: "Les activités humaines modifient profondément les régimes hydrologiques naturels. Barrages, irrigation, urbanisation, drainage agricole et déboisement transforment les débits, les sédiments et la qualité de l'eau. Comprendre et quantifier ces impacts anthropiques est indispensable pour distinguer les tendances naturelles des tendances induites, et pour concevoir des aménagements respectueux des fonctions écologiques des cours d'eau.",
      sections: [
        { titre: "Impacts des barrages et retenues", sous_sections: [
          { titre: "Modification des régimes hydrologiques par les barrages", contenu: "Les barrages de grande capacité (ratio stockage/apport annuel > 0,3) modifient profondément le régime hydrologique : écrêtement des crues (réduction de Qmax de 20-80%), soutien des étiages par lâchers, homogénéisation des débits (réduction du coefficient de variation). Ils peuvent inverser la saisonnalité des débits (réservoir hydro-électrique peaking en hiver). Les barrages retiennent 25-50% du flux sédimentaire mondial, appauvrissant les deltas et les plages. L'onde de turbidité lors des lâchers affecte les communautés benthiques." },
          { titre: "Effet écologique : débit de maintien et e-flows", contenu: "Les 'environmental flows' (e-flows) définissent les régimes de débit nécessaires au maintien des fonctions écologiques. Les méthodes de Tennant (10-30% du module), de la courbe des débits classés (Q95), hydrauliques (périmètre mouillé) ou écologiques (habitat modélisé avec IFIM/PHABSIM) fournissent des prescriptions différentes. La réglementation française impose un débit réservé de 1/10 du module (depuis 2014). La gestion des lâchers pour recréer des crues morphogènes (nettoyage des frayères à saumon) est une pratique émergente de gestion adaptative." }
        ]},
        { titre: "Urbanisation et imperméabilisation", sous_sections: [
          { titre: "Impacts hydrologiques de l'urbanisation", contenu: "L'imperméabilisation réduit l'infiltration, augmente le ruissellement (CN de 70 à 90), accélère le transfert et réduit le temps de concentration. Les conséquences sont : augmentation des fréquences de crues urbaines (Q10 devient Q2), réduction de la recharge des nappes, flashiness accrue (ratio débit max/débit moyen). Globalement, une imperméabilisation de 10-30% double les crues fréquentes. Les SUDS (Sustainable Urban Drainage Systems) : toits végétalisés, chaussées perméables, noues d'infiltration, compensent partiellement ces impacts en restaurant des fonctions d'infiltration et de rétention." },
          { titre: "Changement d'occupation du sol et évapotranspiration", contenu: "Le boisement augmente l'ET (interception, transpiration) et réduit les débits annuels de 100-300 mm dans les études de bassins jumelés. Le déboisement fait l'inverse. L'effet sur les crues est plus ambigu : le sol forestier (macropores, litière) favorise l'infiltration et réduit les crues fréquentes, mais en conditions de saturation (sol mouillé), la forêt peut accroître le ruissellement (transpiration nulle, interception réduite). La règle Bosch-Hewlett (1982) synthétise des centaines d'expériences de bassins jumelés : chaque 10% de couverture forestière change l'ET de ~20-30 mm/an." }
        ]},
        { titre: "Drainage agricole et prélèvements", sous_sections: [
          { titre: "Impacts du drainage agricole sur les régimes", contenu: "Le drainage de zones humides et de prairies humides accélère les transferts (augmentation des débits de pointe) et réduit le stockage (réduction du débit de base). Dans les grands plaines drainées (Midwest américain, polders), l'homogénéisation des sols par le drainage a multiplié les coefficients de ruissellement. À l'inverse, les pratiques agro-écologiques (haies, talus, zones tampons) restaurent des fonctions de rétention. La gestion des niveaux d'eau dans les fossés de drainage peut être optimisée pour l'étiage (débit de base accru) sans augmenter les crues." },
          { titre: "Prélèvements et restitutions : impacts sur le bilan", contenu: "Les prélèvements (AEP, irrigation, industrie) réduisent le débit de base et peuvent mettre en déficit certains tronçons (tronçons à sec). En France, 6 km³/an sont prélevés (dont 44% agriculture, 24% énergie, 23% AEP). Les restitutions après usage (eaux usées traitées) peuvent soutenir le débit en étiage, créant des paradoxes hydrologiques (étiage plus fort que naturel en aval de STEP). La séparation débit naturel/anthropique requiert des modèles hydrologiques capables de simuler le naturel (NATURALIS, France) pour évaluer les tendances liées au changement climatique." }
        ]},
        { titre: "Détection et attribution des tendances", sous_sections: [
          { titre: "Tests statistiques de détection des tendances", contenu: "Les séries de débits contiennent des tendances climatiques (changement climatique), anthropiques (barrages, prélèvements, occupation du sol) et leurs interactions. Les tests de Mann-Kendall et Pettitt détectent les tendances et ruptures. L'attribution consiste à quantifier la part de chaque facteur : expériences de simulation avec modèle hydrologique calibré, l'une avec les forçages naturels (sans anthropique), l'autre avec les forçages anthropiques. La différence simulation-naturel vs simulation-anthropique quantifie l'impact humain." },
          { titre: "Découplage signal climatique / signal anthropique", contenu: "La détection des tendances hydrologiques attribuables au changement climatique nécessite de découpler le signal climatique du signal anthropique (occupation du sol, prélèvements). La méthode des bassins témoins (non anthropisés, dans la même zone climatique) fournit un signal climatique de référence. Les indicateurs hydrologiques robustes aux prélèvements (Q95, temps de concentration) permettent de suivre la signal climatique. En France, la base HYDRO NATURALIS fournit des séries de débits naturalisés sur ~400 stations pour l'évaluation des tendances climatiques." }
        ]}
      ],
      points: ["Les barrages à fort ratio stockage/apport (> 0,3) modifient profondément le régime.", "Les e-flows (environmental flows) préservent les fonctions écologiques des cours d'eau.", "Débit réservé légal en France = 1/10 du module depuis 2014.", "L'urbanisation à 10-30% double les crues fréquentes (Q10 → Q2).", "Bosch-Hewlett : chaque 10% de couverture forestière change l'ET de ~20-30 mm/an.", "SUDS restaurent les fonctions d'infiltration et de rétention en milieu urbain.", "Mann-Kendall et Pettitt détectent tendances et ruptures dans les séries de débits.", "NATURALIS (France) fournit des séries naturalisées pour l'attribution climatique.", "Les prélèvements agricoles représentent 44% des prélèvements en eau en France.", "Le drainage agricole accélère les transferts et réduit le stockage des zones humides."],
      formules: [
        { nom: "Réduction débit de pointe par barrage", expression: "Qmax_aval = Qmax_naturel × (1 - Vstock/Vcrue)^0.5", variables: "Vstock = volume stocké dans la retenue, Vcrue = volume de la crue entrant" },
        { nom: "Coefficient de ruissellement avant/après urbanisation", expression: "C_urbain = Cimp × Pimp + Cnat × (1 - Pimp)", variables: "Cimp ≈ 0,9, Cnat ≈ 0,25, Pimp = fraction imperméabilisée" },
        { nom: "Impact boisement sur l'ET annuelle (Bosch-Hewlett)", expression: "ΔETA = -20 à -30 mm/an par 10% de déforestation", variables: "ΔETA = variation d'évapotranspiration annuelle" },
        { nom: "Méthode de Tennant (débit minimal)", expression: "Qmin = 10% × Qmodule  (minimum acceptable)  à  30% × Qmodule  (bon habitat)", variables: "Qmodule = débit moyen interannuel" },
        { nom: "Test de Mann-Kendall (statistique S)", expression: "S = Σi<j sign(xj - xi)", variables: "xi = série temporelle, sign = +1/0/-1 selon le signe de la différence" }
      ],
      retenir: "Les aménagements humains (barrages, urbanisation, drainage, prélèvements) modifient profondément les régimes hydrologiques. L'attribution des tendances observées (climatique vs anthropique) nécessite des modèles de débit naturalisé. Les e-flows et les SUDS sont les outils de conciliation entre usages et fonctions écosystémiques. La détection statistique (Mann-Kendall, Pettitt) est la première étape du diagnostic, l'attribution hydrologique la seconde."
    },
    exercices: [
      { id: 1, enonce: "Un barrage stocke 50 Mm³ lors d'une crue de volume entrant 200 Mm³. Estimez l'écrêtement du débit de pointe.", correction: "Qmax_aval/Qmax_naturel = (1 - 50/200)^0,5 = (0,75)^0,5 = 0,866. Réduction de ~13% du débit de pointe. L'écrêtement est modéré : le ratio stockage/volume de crue est 25%. Pour des réductions importantes (> 50%), il faut Vstock/Vcrue > 0,75." },
      { id: 2, enonce: "Un bassin est imperméabilisé à 40%. Calculez le coefficient de ruissellement composite (Cimp = 0,9, Cnat = 0,25).", correction: "C = 0,9 × 0,40 + 0,25 × 0,60 = 0,36 + 0,15 = 0,51. L'imperméabilisation à 40% double quasiment le coefficient de ruissellement (de 0,25 en naturel à 0,51)." },
      { id: 3, enonce: "La méthode de Tennant recommande 30% du module pour un 'bon habitat'. Le module est 25 m³/s. Calculez le débit minimum recommandé et comparez au débit réservé légal (10% du module).", correction: "Bon habitat : 0,30 × 25 = 7,5 m³/s. Débit réservé légal : 0,10 × 25 = 2,5 m³/s. Les recommandations écologiques (Tennant 30%) sont 3× supérieures au minimum légal (10%). Le débit réservé légal assure une survie biologique minimale mais pas un habitat de qualité." },
      { id: 4, enonce: "Citez 3 impacts hydrologiques du drainage de zones humides sur un bassin agricole.", correction: "1. Augmentation des débits de pointe (réduction du stockage, transfert plus rapide via fossés). 2. Réduction du débit de base en étiage (moins de stockage pour alimenter les nappes et les cours d'eau). 3. Réduction du temps de concentration (réseau hydraulique artificiel plus efficace que l'écoulement naturel sur les prairies)." },
      { id: 5, enonce: "Le test de Mann-Kendall sur 60 ans de débits moyens annuels donne S = 450. Var(S) = 36300. Calculez Z et testez au seuil 5% (Zcrit = 1,96).", correction: "Z = (450-1)/√36300 = 449/190,5 = 2,36. |Z| = 2,36 > 1,96. Tendance croissante significative au seuil 5% (p ≈ 0,018). Possible augmentation des apports ou soutien par restitutions d'eau usée." },
      { id: 6, enonce: "Une forêt est déboisée sur 25% d'un bassin de 500 km². Estimez la variation du débit annuel (Bosch-Hewlett : 25 mm/an par 10% de déforestation).", correction: "ΔETA = -25 mm/an × (25%/10%) = -62,5 mm/an (réduction ET). Augmentation du débit : ΔQ = +62,5 mm/an × 500 × 10⁶ m² = +31,25 × 10⁶ m³/an = +31,25 Mm³/an. Augmentation significative de la ressource hydrique mais risque accru de crues." },
      { id: 7, enonce: "Qu'est-ce que la base NATURALIS et comment est-elle utilisée pour l'attribution des tendances ?", correction: "NATURALIS (DREAL, BRGM, SCHAPI) reconstitue les débits naturels à ~400 stations françaises en simulant le débit en l'absence de prélèvements et de restitutions. Utilisée pour : distinguer la part du changement climatique (signal dans les débits naturalisés) de la part anthropique (différence entre observé et naturalisé). Exemple : si le débit naturalisé diminue, c'est le signal climatique. Si observé < naturalisé, les prélèvements net augmentent." },
      { id: 8, enonce: "Expliquez le paradoxe où le débit d'étiage est plus fort en aval d'une station d'épuration (STEP) qu'en conditions naturelles.", correction: "Une STEP rejette en continu des eaux usées traitées (3-5 m³/h pour 10 000 EH). En étiage naturel sévère, ce flux continu dépasse le débit naturel (parfois < 1 m³/s pour un petit cours d'eau). Le cours d'eau fonctionne alors essentiellement avec les eaux usées traitées. Ce phénomène crée des contraintes de qualité (température, nutriments) mais aussi des opportunités (maintien du débit minimum réglementaire sans intervention de gestion)." }
    ],
    flashcards: [
      { question: "Qu'est-ce qu'un environmental flow (e-flow) ?", reponse: "Régime de débit (ou niveau) nécessaire au maintien des fonctions écologiques d'un cours d'eau. Défini par méthodes hydrologiques (Tennant : 10-30% module), hydrauliques (périmètre mouillé), ou par modélisation d'habitat (PHABSIM). En France : débit réservé = 1/10 du module (minimum légal)." },
      { question: "Impact principal des grands barrages sur le régime hydrologique", reponse: "Homogénéisation des débits (réduction du coefficient de variation). Écrêtement des crues (Qmax réduit). Soutien des étiages. Rétention des sédiments (25-50% du flux mondial). Possible inversion de la saisonnalité (hydroélectricité). Effets à l'aval sur les écosystèmes, les sédiments et les plages." },
      { question: "Loi de Bosch-Hewlett sur l'effet du boisement", reponse: "Chaque 10% de couverture forestière réduit l'ET annuelle d'environ 20-30 mm/an (ou augmente le débit de même amplitude). Synthèse de centaines d'expériences de bassins jumelés. L'effet est plus marqué dans les zones humides. Utilisé pour estimer l'impact du changement d'occupation du sol sur la ressource en eau." },
      { question: "Qu'est-ce que NATURALIS ?", reponse: "Base de données française de débits naturalisés (~400 stations). Reconstruit le débit en absence de prélèvements et restitutions par modélisation. Permet de découpler signal climatique (tendances dans Naturalis) et signal anthropique (différence observé-Naturalis). Outil d'attribution des tendances hydrologiques." },
      { question: "Comment l'urbanisation modifie-t-elle les crues ?", reponse: "Imperméabilisation → CN augmente (70→90) → ruissellement × 2-5 → pics de crue plus forts et plus fréquents. Temps de concentration réduit (réseaux pluviaux). Q10 'naturel' devient Q2 en urbain dense. Réduction de la recharge des nappes. SUDS (noues, chaussées perméables) compensent partiellement." },
      { question: "Méthode d'attribution des tendances hydrologiques", reponse: "1. Simuler les débits naturalisés (sans prélèvements, sans modification d'usage du sol). 2. Comparer aux débits observés. 3. Si la tendance est présente dans les débits naturalisés → signal climatique. 4. Si écart croissant entre observé et naturalisé → signal anthropique. Outils : NATURALIS, Mann-Kendall, Pettitt." }
    ]
  },

  'MASTER-EAU-036': {
    id: 'MASTER-EAU-036',
    titre: 'Étiages, sécheresses hydrologiques et tarissement',
    fiche: {
      intro: "Les étiages et sécheresses hydrologiques représentent l'extrême opposé aux crues mais sont tout aussi critiques pour la gestion de la ressource en eau. Leur analyse requiert des méthodes statistiques spécifiques adaptées aux valeurs minimales, et leur compréhension physique passe par la maîtrise du tarissement des aquifères. Avec le changement climatique, les sécheresses devraient s'intensifier dans de nombreuses régions.",
      sections: [
        {
          titre: "Physique du tarissement et de l'étiage",
          sous_sections: [
            { titre: "Courbe de récession et modèles de tarissement", contenu: "Le tarissement d'un cours d'eau correspond à la vidange progressive des réservoirs aquifères alimentant le débit de base. La courbe de récession empirique suit généralement Q(t) = Q0 × exp(-t/k) (réservoir linéaire) ou Q(t) = Q0 × (1 + t/k)^(-n) (réservoir non linéaire). La constante de tarissement k (en jours) caractérise la réactivité de l'aquifère : k faible (< 10 j) → système à réponse rapide, k élevé (> 100 j) → aquifère profond à vidange lente. La méthode de Maillet (1905) extrait k par régression log-linéaire sur les récessions." },
            { titre: "Décomposition du débit en composantes", contenu: "Le débit total peut être décomposé en ruissellement direct, interflow (écoulement sub-superficiel) et débit de base (alimentation par la nappe). La séparation d'hydrogramme par méthode graphique (Hewlett-Hibbert) ou par filtrage numérique (recursive digital filter, Eckhardt) isole le débit de base. L'indice de débit de base BFI (BaseFlow Index) = débit de base moyen / débit total moyen caractérise la part de l'alimentation souterraine. BFI élevé (> 0,7) → bassin karstique ou alluvionnaire bien alimenté." }
          ]
        },
        {
          titre: "Statistique des étiages",
          sous_sections: [
            { titre: "QMNA5 et débits caractéristiques d'étiage", contenu: "Le QMNA (débit moyen mensuel minimum annuel) est le débit minimum de la période d'étiage sur un mois calendaire. Le QMNA5 est la valeur quinquennale sèche (période de retour 5 ans, probabilité de dépassement 80%). Il est l'indicateur réglementaire de référence en France pour les débits réservés (10% du module = débit minimum légal). Le DCR (Débit de Crise) = 0,25 × débit moyen annuel (norme française de crise sécheresse). Le VCN (Volume de jours Consécutifs de débit Nul ou minimum) est utilisé en hydrologie de zones semi-arides." },
            { titre: "Lois statistiques des minima et analyse des sécheresses", contenu: "Les minima annuels de débit suivent des lois à queue légère (Weibull, GEV avec ξ < 0, lognormale). La loi Pearson III s'ajuste généralement bien aux débits minimum. L'analyse des sécheresses par méthode des seuils (threshold level method, TLM) définit un seuil Q0 en dessous duquel on est en étiage. Un épisode de sécheresse (drought) est caractérisé par sa durée D, son déficit de volume V et sa sévérité S = V/D. Le retour d'une sécheresse multivariée peut être estimé par des copules (Clayton, Frank, Gumbel)." }
          ]
        },
        {
          titre: "Sécheresses météorologique, agricole et hydrologique",
          sous_sections: [
            { titre: "Indices de sécheresse (SPI, SPEI, PDSI)", contenu: "Le SPI (Standardized Precipitation Index) standardise les précipitations sur différentes durées (1 à 48 mois) : SPI < -1 = sécheresse modérée, SPI < -2 = sécheresse extrême. Le SPEI (SPI - Evapotranspiration) intègre l'effet de la température sur la demande évaporative. Le PDSI (Palmer Drought Severity Index) est un indice de bilan hydrique pondérant les déficits de précipitation et l'excédent d'évapotranspiration. Ces indices sont calculés sur des données historiques pour évaluer les tendances de sécheresse." },
            { titre: "Propagation de la sécheresse dans le cycle hydrologique", contenu: "Une sécheresse météorologique (déficit de pluie) se propage avec délai vers la sécheresse agricole (déficit d'humidité du sol), puis hydrologique (déficit de débit et niveau des nappes). Le délai de propagation dépend des propriétés hydrogéologiques du bassin : quelques semaines pour les bassins à réponse rapide, plusieurs années pour les grands aquifères captifs. La sécheresse hydrologique est souvent plus longue que la sécheresse météorologique qui l'a déclenchée (mémoire des aquifères). Ce décalage est crucial pour la gestion préventive des ressources." }
          ]
        },
        {
          titre: "Gestion des étiages et adaptation au changement climatique",
          sous_sections: [
            { titre: "Outils de gestion des étiages en France", contenu: "Les Plans de Gestion de l'Étiage (PGE) définissent les objectifs de débit minimum et les règles de gestion des prélèvements. Les PGRE (Plan de Gestion des Ressources en Eau) gèrent les déséquilibres structurels entre prélèvements et ressources. La restriction des prélèvements se déclenche par paliers (vigilance, alerte, alerte renforcée, crise) indexés sur des seuils de QMNA ou piézométrie. Le REPAR (Réserve d'Eau pour l'Alimentation des Rivières) stocke l'eau hivernale pour la restituer en étiage. Ces outils s'appuient sur des réseaux hydrométriques et piézométriques en temps réel." },
            { titre: "Projections des étiages sous changement climatique", contenu: "Les projections climatiques montrent une intensification des sécheresses en Europe du Sud et en région méditerranéenne. Les débits d'étiage (Q10, QMNA5) pourraient diminuer de 20-50% d'ici 2050-2070 selon les scénarios RCP. Cette évolution est due à la combinaison d'une augmentation de l'ETP et d'une diminution des précipitations estivales. Les incertitudes des projections d'étiage sont particulièrement élevées car elles dépendent de la représentation des processus sol-végétation dans les modèles. Les stratégies d'adaptation incluent l'économie d'eau, la substitution de ressources et la gestion de la demande." }
          ]
        }
      ],
      points: [
        "Tarissement exponentiel : Q(t) = Q0 × exp(-t/k). La constante k caractérise l'aquifère.",
        "BFI (BaseFlow Index) = débit de base moyen / débit total moyen.",
        "QMNA5 = débit moyen mensuel minimum annuel quinquennal (retour 5 ans).",
        "Débit réservé légal en France = 1/10 du module (depuis la loi sur l'eau 2006).",
        "DCR (Débit de Crise) = 1/4 du module. Seuil de crise sécheresse.",
        "SPI < -1 : sécheresse modérée. SPI < -2 : sécheresse extrême.",
        "La sécheresse hydrologique est plus longue que la sécheresse météorologique.",
        "La TLM (threshold level method) définit les événements de sécheresse.",
        "Les copules (Clayton, Frank) permettent d'analyser les sécheresses multivariées.",
        "Projections : étiages -20 à -50% d'ici 2070 en France méditerranéenne."
      ],
      formules: [
        { nom: "Tarissement exponentiel de Maillet", expression: "Q(t) = Q0 × exp(-α × t)", variables: "Q0 = débit initial de tarissement (m³/s), α = coefficient de tarissement (j⁻¹), k = 1/α (j)" },
        { nom: "Débit de base (filtre récursif d'Eckhardt)", expression: "bf_t = ((1-BFI_max)×α×bf_{t-1} + (1-α)×BFI_max×Q_t) / (1 - α×BFI_max)", variables: "bf = débit de base, Q = débit total, α = constante de récession, BFI_max = BFI maximum" },
        { nom: "SPI (Standardized Precipitation Index)", expression: "SPI = (P - μP) / σP", variables: "P = précipitation de la période, μP et σP = moyenne et écart-type de la distribution ajustée" },
        { nom: "Sécheresse par seuil (threshold level)", expression: "D = durée(Q < Q0),  V = ∫(Q0 - Q)dt pour Q < Q0", variables: "Q0 = seuil (souvent Q70 ou Q90 de la FDC), D = durée en jours, V = déficit en volume" },
        { nom: "QMNA (percentile quinquennal)", expression: "P(QMNA < QMNA5) = 0.2  soit T = 5 ans côté sec", variables: "Ajustement d'une loi statistique aux QMNA annuels, extrapolation au quantile de probabilité 20%" }
      ],
      retenir: "L'étiage est gouverné par la vidange des aquifères (tarissement exponentiel, constante k). Le QMNA5 est l'indicateur réglementaire de référence en France. La sécheresse hydrologique se propage avec délai depuis la sécheresse météorologique, en restant plus longue en raison de la mémoire des aquifères. Sous changement climatique, les étiages devraient s'intensifier en région méditerranéenne, nécessitant des adaptations de la gestion de la ressource."
    },
    exercices: [
      { id: 1, enonce: "Un cours d'eau est en tarissement. Q0 = 12 m³/s à t0, Q = 8 m³/s à t0 + 15 jours. Calculez le coefficient de tarissement α et la constante k.", correction: "Q(15) = 12 × exp(-15α) = 8. exp(-15α) = 8/12 = 0,667. -15α = ln(0,667) = -0,405. α = 0,027 j⁻¹. k = 1/α = 37 jours. Aquifère à réponse modérément lente." },
      { id: 2, enonce: "Le débit moyen annuel d'un bassin est 25 m³/s et le débit de base moyen est 17 m³/s. Calculez le BFI et commentez.", correction: "BFI = 17/25 = 0,68. BFI > 0,7 → bassin à fort soutien par les nappes (alluvionnaire, karstique). La majorité du débit annuel provient des aquifères. Les étiages seront modérés. Le bassin est peu réactif aux précipitations." },
      { id: 3, enonce: "L'ajustement statistique des QMNA d'une station sur 35 ans donne, pour une loi Gumbel inverse : μ = 1,8 m³/s, σ = 0,45 m³/s. Calculez le QMNA5 (retour 5 ans côté sec = quantile à 20%).", correction: "Pour les minima, on travaille avec la loi de Gumbel inverse (Weibull min). Le quantile à 20% : u = -ln(-ln(0,20)) = -ln(1,609) = -0,476. QMNA5 = μ + σ × (-u) = 1,8 - 0,45 × (-(-0,476)) = 1,8 - 0,45 × 0,476 = 1,8 - 0,21 = 1,59 m³/s. (Vérification : QMNA5 < μ car côté sec)." },
      { id: 4, enonce: "Calculez le débit réservé légal (1/10 du module) et le DCR (1/4 du module) pour un cours d'eau de module Q̄ = 18 m³/s.", correction: "Débit réservé = Q̄/10 = 18/10 = 1,8 m³/s. DCR = Q̄/4 = 18/4 = 4,5 m³/s. Interprétation : en dessous de 4,5 m³/s → crise, entre 1,8 et 4,5 → gestion d'alerte, au-dessus de 4,5 → restriction progressive selon PGE." },
      { id: 5, enonce: "Le SPI-12 d'une région est -1,8 en juillet 2022. Quelle est la sécheresse ? Quelle est la probabilité d'occurrence ?", correction: "SPI-12 = -1,8 → sécheresse sévère (entre -1,5 et -2,0). La probabilité d'occurrence (loi normale standardisée) : P(Z < -1,8) = 3,6%. Soit une période de retour de 1/0,036 ≈ 28 ans. Événement rare mais plausible." },
      { id: 6, enonce: "Expliquez le délai de propagation entre sécheresse météorologique et hydrologique. Pourquoi est-il important pour la gestion ?", correction: "La sécheresse météorologique agit d'abord sur l'humidité du sol (semaines), puis sur les débits des cours d'eau alimentés par ruissellement (mois), puis sur les nappes et les grands cours d'eau (mois à années selon la perméabilité). Ce délai permet une anticipation de la sécheresse hydrologique à partir des indicateurs climatiques. Les PGE exploitent ce délai pour déclencher des restrictions préventives avant que le QMNA n'atteigne le seuil de crise." },
      { id: 7, enonce: "Une sécheresse est caractérisée par D = 85 jours, V = 1,2 × 10⁶ m³. Calculez la sévérité S et commentez.", correction: "S = V/D = 1,2 × 10⁶ / 85 = 14 118 m³/j = 0,163 m³/s de déficit moyen quotidien. C'est une sécheresse modérée pour un cours d'eau de quelques m³/s. Sur un grand fleuve, ce déficit serait négligeable." },
      { id: 8, enonce: "Quelles mesures d'adaptation à l'intensification des étiages peut-on mettre en œuvre à l'échelle d'un bassin versant ?", correction: "1. Réduction de la demande : économies dans l'agriculture (irrigation localisée), l'industrie et l'urbain. 2. Stockage : réservoirs collinaires, retenues de substitution remplies en hiver. 3. Restauration des zones humides pour soutenir le débit de base. 4. Recharge artificielle des nappes en période excédentaire. 5. Diversification des ressources (interconnexion, eau non conventionnelle). 6. Gestion prévisionnelle : déclenchement anticipé des restrictions via SPI, piézométrie et prévisions saisonnières." }
    ],
    flashcards: [
      { question: "Qu'est-ce que la constante de tarissement k ?", reponse: "k = 1/α (jours) dans Q(t) = Q0 × exp(-t/k). Temps nécessaire pour que le débit diminue d'un facteur e ≈ 2,72. k faible (5-20 j) → aquifère superficiel réactif. k élevé (100-500 j) → aquifère profond à vidange lente (calcaire, socle)." },
      { question: "Qu'est-ce que le QMNA5 ?", reponse: "Débit Mensuel Minimum Annuel de fréquence quinquennale sèche. Probabilité de dépassement = 80% (non-dépassement = 20%). Indicateur réglementaire pour les débits minimum légaux en France. Base du débit réservé = max(QMNA5, 1/10 du module)." },
      { question: "Différence entre SPI et SPEI", reponse: "SPI = standardisation des précipitations uniquement. Adapté aux sécheresses météorologiques sans effet de la température. SPEI = SPI - ETP. Intègre la demande évaporative → plus pertinent pour les sécheresses agricoles et hydrologiques dans un contexte de réchauffement climatique." },
      { question: "Qu'est-ce que la threshold level method (TLM) ?", reponse: "Définition d'un seuil Q0 (souvent Q70 ou Q90 de la FDC). Période de sécheresse = période continue où Q < Q0. Caractérisée par durée D (j), déficit de volume V (m³), sévérité S = V/D. Permet d'analyser fréquentiellement et statistiquement les événements de sécheresse." },
      { question: "BFI (BaseFlow Index) et son interprétation hydrologique", reponse: "BFI = débit de base moyen / débit total moyen. 0 → 100% de ruissellement (sol imperméable, fort relief). 1 → 100% de base (aquifère généreux). En pratique : BFI < 0,3 = bassin réactif, 0,3-0,7 = mixte, > 0,7 = fort soutien nappe." },
      { question: "Projections des étiages sous changement climatique en France", reponse: "Diminution de 20-50% des débits d'étiage d'ici 2070 en France méditerranéenne (RCP8.5). Causes : hausse ETP + diminution des précipitations estivales. Moins marqué en France atlantique. Incertitude élevée sur la part végétation/aquifère. Adaptation nécessaire dès maintenant." }
    ]
  }
};
