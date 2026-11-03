var GEMEAU_B09 = {

  'GEMEAU-073': {
    id: 'GEMEAU-073',
    titre: 'Ressources en eau et captages',
    fiche: {
      intro: 'La production d\'eau potable commence par l\'identification et la protection des ressources en eau. La France dispose de ressources superficielles (rivières, lacs, retenues) et souterraines (nappes alluviales, aquifères captifs). Le choix de la ressource conditionne la filière de traitement et les mesures de protection sanitaire à mettre en place.',
      sections: [
        {
          titre: '1. Ressources superficielles',
          texte: 'Les eaux superficielles (rivières, lacs, retenues) représentent environ 40 % de la production d\'eau potable en France. Elles sont caractérisées par leur variabilité : la qualité fluctue selon les saisons (crues, étiages), les précipitations (lessivage des bassins versants) et les activités humaines (agriculture, industrie, urbanisation). Après les pluies, la turbidité peut augmenter de plusieurs ordres de grandeur en quelques heures, nécessitant des installations de traitement dimensionnées pour ces pointes.\n\nLa prise d\'eau est généralement équipée de grilles grossières et fines pour éliminer les macro-déchets flottants, puis d\'une décantation primaire (lagunage, pré-décantation) avant envoi en station de traitement. La qualité minimale requise pour être traitée en eau potable est définie par la directive européenne 75/440/CEE (reprise dans le droit français) en trois catégories A1 (traitement simple), A2 (traitement normal), A3 (traitement intensif). Les eaux hors catégorie A3 ne peuvent pas être utilisées pour la production AEP.',
          sous_sections: []
        },
        {
          titre: '2. Ressources souterraines',
          texte: 'Les eaux souterraines constituent environ 60 % de la production AEP en France. Elles se distinguent par une qualité plus stable et généralement meilleure (filtration naturelle par les couches géologiques), mais elles sont plus vulnérables à une pollution durable (temps de renouvellement long : de quelques années à plusieurs siècles). On distingue les nappes libres (phréatiques, en contact avec l\'atmosphère via la zone non saturée, vulnérables aux pollutions superficielles) et les nappes captives (artésiennes, sous pression, confinées entre deux couches imperméables, mieux protégées).\n\nLe captage des eaux souterraines se fait par puits ou forage. Le puits (diamètre > 0,8 m) est réservé aux petites productions dans des nappes peu profondes. Le forage (diamètre 150-600 mm) est utilisé pour les nappes profondes ou à fort débit. La technique de réalisation dépend de la géologie : rotary à circulation directe ou inverse pour les terrains meubles, tricône ou marteau fond de trou (DTH) pour les terrains durs. La productivité d\'un forage est caractérisée par sa courbe débit-rabattement et son coefficient de perméabilité (K en m/s).',
          sous_sections: []
        },
        {
          titre: '3. Périmètres de protection',
          texte: 'Tout captage destiné à la consommation humaine doit être protégé par des périmètres de protection définis par une Déclaration d\'Utilité Publique (DUP), en application du Code de la Santé Publique (article L.1321-2). Trois périmètres sont définis : (1) Le Périmètre de Protection Immédiate (PPI) : emprise foncière autour du captage, clôturée, propriété du maître d\'ouvrage, où toute activité est interdite (sauf entretien du captage) ; (2) Le Périmètre de Protection Rapprochée (PPR) : zone dans laquelle certaines activités sont réglementées ou interdites (épandage de pesticides, engrais, hydrocarbures, installations classées) pour prévenir les pollutions rapides ; (3) Le Périmètre de Protection Éloignée (PPE) : optionnel, zone où les activités susceptibles de porter atteinte à la qualité font l\'objet d\'une surveillance renforcée.',
          sous_sections: []
        },
        {
          titre: '4. Essais de pompage et dimensionnement',
          texte: 'Avant d\'exploiter un forage, des essais de pompage permettent de caractériser l\'aquifère et de dimensionner la pompe immergée. L\'essai par paliers (4-6 paliers de débit croissant, 1-2 h chacun) caractérise la relation débit-rabattement et met en évidence les pertes de charges quadratiques dans le forage (pertes non linéaires dues aux turbulences en entrée de crépines). L\'essai de longue durée (24-72 h au débit nominal) mesure l\'évolution du rabattement et permet d\'évaluer les caractéristiques hydrauliques de l\'aquifère (transmissivité T, coefficient d\'emmagasinement S) par les méthodes de Theis ou de Jacob. La productivité spécifique (Q/s en m²/h/m de rabattement) caractérise la performance du forage.',
          sous_sections: []
        }
      ],
      points: [
        'Eaux superficielles : 40 % AEP France, qualité variable, turbidité élevée après pluies',
        'Eaux souterraines : 60 % AEP France, qualité stable, vulnérables aux pollutions durables',
        'Nappe libre (phréatique) : vulnérable, temps de renouvellement court',
        'Nappe captive (artésienne) : sous pression, mieux protégée, renouvellement lent',
        'Catégories A1/A2/A3 (directive 75/440) : qualité minimale requise pour traitement AEP',
        'DUP : obligatoire pour tout captage AEP — définit PPI, PPR et PPE',
        'PPI : clôturé, propriété du maître d\'ouvrage, toute activité interdite',
        'Essai de pompage par paliers : caractérise la courbe débit-rabattement du forage',
        'Transmissivité T (m²/s) : capacité de l\'aquifère à transmettre l\'eau horizontalement',
        'Productivité spécifique Q/s : indicateur de performance du forage'
      ],
      formules: [
        'Rabattement (Dupuit simplifié) : s = Q / (4πT) × W(u) → [m] ; T = transmissivité [m²/s], W(u) = fonction de puits',
        'Pertes de charge forage : s_total = B×Q + C×Q² → [m] ; B = pertes linéaires, C = pertes non linéaires (turbulences)',
        'Productivité spécifique : Qs = Q / s → [m²/h] (ou L/s/m) ; s = rabattement [m]',
        'Volume utile réservoir captage : V = Q × t_autonomie → [m³] ; t en heures'
      ],
      retenir: 'Ressource superficielle · Ressource souterraine · Nappe libre · Nappe captive · DUP · PPI/PPR/PPE · Forage · Essai de pompage · Transmissivité · Productivité spécifique'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un forage a une productivité spécifique de 8 m²/h et le rabattement admissible est de 12 m (pour ne pas dénoyeter le crépinage). Quel est le débit maximum exploitable ?',
        solution: 'Q_max = Qs × s_admissible = 8 × 12 = 96 m³/h. En pratique, on prend une marge de sécurité de 20 % et on exploite à Q_exploitation = 0,8 × 96 = 77 m³/h pour éviter tout risque de dénoyage et conserver une marge en cas de sécheresse.'
      },
      {
        n: '2',
        enonce: 'Un captage AEP dispose d\'une DUP avec un PPR de 500 m de rayon. Un agriculteur demande à épandre du glyphosate à 400 m du captage. Est-ce autorisé ? Quel organisme décide ?',
        solution: 'L\'épandage de pesticides est généralement interdit ou soumis à autorisation dans le PPR. Une demande à 400 m (< 500 m = dans le PPR) doit être soumise à l\'Agence Régionale de Santé (ARS) et à la préfecture qui statuent sur la compatibilité avec les prescriptions de la DUP. Dans la majorité des DUP, l\'épandage de produits phytosanitaires est soit totalement interdit dans le PPR, soit soumis à des conditions très restrictives (produits homologués, périodes définies, bandes de distance). Le non-respect des prescriptions de la DUP est une infraction pénale.'
      },
      {
        n: '3',
        enonce: 'Décrire les différences de qualité et de risques entre une eau de surface (rivière) et une eau souterraine profonde (nappe captive à 150 m de profondeur).',
        solution: 'Eau de surface : qualité variable (turbidité 1-500 NTU selon pluies), risque de contamination bactériologique élevé (E. coli détectable en étiage et crues), présence de matières organiques naturelles (précurseurs de sous-produits de désinfection), pesticides agricoles saisonniers, risque de pollution accidentelle immédiate (déversement). Filière de traitement nécessairement complète (coagulation, floculation, décantation, filtration, désinfection). Eau souterraine captive profonde : turbidité quasi nulle (< 1 NTU), bactériologie généralement satisfaisante (faible contamination fécale), mais risques spécifiques selon géologie : fer et manganèse dissous (réduction anaérobie), nitrates si recharge via agriculture, éventuellement arsenic ou fluorures selon le sous-sol. Filière de traitement souvent plus simple (déferrisation, démanganisation, simple désinfection). Avantage : qualité stable, pas de variation saisonnière brutale. Inconvénient : en cas de pollution (nitrates, solvants), la remédiation est très longue (décennie à siècle).'
      },
      {
        n: '4',
        enonce: 'Un essai de pompage par paliers donne les résultats suivants : Q=20 m³/h → s=2,1 m ; Q=40 m³/h → s=5,2 m ; Q=60 m³/h → s=9,8 m ; Q=80 m³/h → s=17,5 m. Calculer la productivité spécifique à chaque palier et conclure sur la qualité du forage.',
        solution: 'Qs à Q=20 : 20/2,1 = 9,5 m²/h. Qs à Q=40 : 40/5,2 = 7,7 m²/h. Qs à Q=60 : 60/9,8 = 6,1 m²/h. Qs à Q=80 : 80/17,5 = 4,6 m²/h. La productivité spécifique diminue avec le débit, ce qui est normal (pertes non linéaires C×Q²). La forte diminution entre Q=60 et Q=80 (6,1 → 4,6, soit -25 %) indique que les pertes non linéaires s\'accélèrent. En pratique, il serait recommandé de ne pas dépasser 60-70 m³/h pour préserver l\'efficacité du forage. Le forage est de bonne qualité (Qs > 6 m²/h sur la plage utile).'
      },
      {
        n: '5',
        enonce: 'Qu\'est-ce que la transmissivité T d\'un aquifère ? Donner des ordres de grandeur pour différents types d\'aquifères et expliquer son importance pour le dimensionnement d\'un champ captant.',
        solution: 'La transmissivité T (m²/s) représente la capacité d\'un aquifère à transmettre l\'eau horizontalement sur toute son épaisseur. T = K × b, où K = conductivité hydraulique [m/s] et b = épaisseur saturée [m]. Ordres de grandeur : graviers alluviaux très perméables T = 10⁻² à 10⁻¹ m²/s (grands captages possibles) ; sables calcaires T = 10⁻³ à 10⁻² m²/s (captages moyens) ; calcaires fissurés T = 10⁻⁴ à 10⁻² m²/s (variable selon fissuration) ; grès T = 10⁻⁵ à 10⁻³ m²/s ; argiles T < 10⁻⁸ m²/s (imperméables, non exploitables). Pour un champ captant, T permet de calculer l\'interférence entre forages (rayon d\'influence) et de dimensionner les distances minimales entre puits pour ne pas cumuler les rabattements excessivement.'
      },
      {
        n: '6',
        enonce: 'Une commune souhaite créer un nouveau captage AEP dans une nappe alluviale. Citer les étapes administratives et techniques obligatoires avant la mise en service.',
        solution: 'Étapes obligatoires : (1) Étude hydrogéologique : investigation géophysique, sondages de reconnaissance, caractérisation de l\'aquifère (transmissivité, coefficient d\'emmagasinement). (2) Réalisation du forage d\'essai et essais de pompage. (3) Dossier de DUP : constitution du dossier (étude hydrogéologique, proposition de périmètres de protection, état des lieux parcellaire), soumis à enquête publique, instruction par l\'ARS et la Préfecture. (4) Arrêté préfectoral portant DUP et autorisation de captage : fixe les conditions d\'exploitation, les périmètres et les prescriptions. (5) Acquisition foncière du PPI et clôture. (6) Analyses de qualité de l\'eau brute (bilan analytique complet selon annexe 13-1 du CSP) pour vérifier la filière de traitement à mettre en place. (7) Déclaration de mise en service auprès de l\'ARS. Durée totale du processus : 3 à 10 ans selon la complexité.'
      },
      {
        n: '7',
        enonce: 'Une analyse d\'eau brute de forage révèle : Fe = 2,8 mg/L, Mn = 0,15 mg/L, NO₃ = 45 mg/L, bactériologie absence E. coli. Les teneurs sont-elles conformes pour l\'eau potable ? Quelle filière de traitement préconiser ?',
        solution: 'Normes eau potable (arrêté du 11 janvier 2007) : Fe ≤ 0,2 mg/L → 2,8 mg/L NON CONFORME (excès ×14) ; Mn ≤ 0,05 mg/L → 0,15 mg/L NON CONFORME (excès ×3) ; NO₃ ≤ 50 mg/L → 45 mg/L CONFORME (sous la limite mais attention tendance à surveiller) ; E. coli absent = CONFORME. Filière de traitement préconisée : (1) Déferrisation-démanganisation : aération forcée (cascade ou venturi) pour oxyder Fe²⁺ en Fe³⁺ précipitable, puis filtration sur sable ou anthracite. Pour le Mn, il faut un pH > 9,5 pour l\'oxydation chimique (chaulage) OU un lit de contact (filtration sur birnessite/MnO₂) catalysant l\'oxydation à pH neutre. (2) Désinfection au chlore ou UV en aval. (3) Surveillance NO₃ : si la tendance est à la hausse (agriculture environnante), envisager dilution avec autre ressource ou nanofiltration à terme.'
      },
      {
        n: '8',
        enonce: 'Expliquer le principe de la recharge artificielle d\'aquifère (MAR : Managed Aquifer Recharge). Donner deux exemples d\'application pratique dans le contexte de la gestion de l\'eau potable.',
        solution: 'La recharge artificielle (MAR) consiste à injecter volontairement de l\'eau dans un aquifère pour reconstituer ses réserves, améliorer la qualité de l\'eau par infiltration naturelle ou stocker de l\'eau en période excédentaire pour la prélever en période déficitaire. Principes : l\'eau de recharge percole à travers le sol (sol-aquifer treatment) ou est injectée directement par puits, et le milieu naturel agit comme filtre biologique et géochimique. Exemples : (1) Bassins d\'infiltration en nappe alluviale : eau de rivière prétraitée déversée dans des bassins en rive du fleuve, elle s\'infiltre et rejoint la nappe en 20-60 jours (temps de transit = purification) ; les captages prélèvent cette eau infiltrée. Exemple : alimentation en eau de Paris (champ captant de la Seine aval). (2) Injection directe en aquifère profond : en période hivernale excédentaire, l\'eau traitée de la station est injectée dans l\'aquifère par un puits d\'injection pour être récupérée en été. Avantages : stockage sans évaporation, amélioration naturelle de la qualité, résilience climatique.'
      }
    ]
  },

  'GEMEAU-074': {
    id: 'GEMEAU-074',
    titre: 'Traitement de l\'eau potable : clarification',
    fiche: {
      intro: 'La clarification est la première grande étape du traitement de l\'eau potable : elle vise à éliminer les matières en suspension, les colloïdes et les matières organiques particulaires. Elle regroupe les opérations de coagulation, floculation, décantation et filtration. Ces étapes sont essentielles pour rendre l\'eau compatible avec la désinfection finale.',
      sections: [
        {
          titre: '1. Coagulation et floculation',
          texte: 'Les particules colloïdales en suspension dans l\'eau (argiles, silice, matières organiques) sont stabilisées par des charges électrostatiques négatives qui empêchent leur agglomération. La coagulation consiste à neutraliser ces charges en ajoutant un coagulant, généralement un sel de fer (FeCl₃, Fe₂(SO₄)₃) ou d\'aluminium (Al₂(SO₄)₃, sulfate d\'alumine ; PAC = polyaluminium chloride AlCl₃ × AlOH₃). Ces sels s\'hydrolysent en milieu aqueux et forment des cations multivalents qui neutralisent les charges négatives des colloïdes (mécanisme de compression de la double couche électrique et d\'adsorption-neutralisation). Le pH optimal de coagulation est 6,5-7,5 pour l\'aluminium et 5,5-7,0 pour le fer.\n\nLa floculation est l\'agglomération des microflocs formés lors de la coagulation en macroflocs plus denses et sédimentables. Elle se fait dans des ouvrages de floculation à agitation lente (gradient de vitesse G = 10-40 s⁻¹, vs G = 300-1000 s⁻¹ pour la coagulation rapide). Des adjuvants de floculation (polyélectrolytes, polyacrylamide anionique ou cationique) peuvent être ajoutés pour améliorer la taille et la résistance des flocs.',
          sous_sections: []
        },
        {
          titre: '2. Décantation',
          texte: 'La décantation est la séparation par gravité des flocs formés lors de la floculation. Dans un décanteur laméllaire (à plaques inclinées), la vitesse de Stokes décrit la sédimentation d\'une particule sphérique de densité ρp dans un fluide de densité ρf : vs = (2r²(ρp-ρf)g)/(9μ), où r est le rayon de la particule, μ la viscosité dynamique. Pour un floc de 100 μm (densité ≈ 1,05 g/cm³) dans l\'eau à 10°C : vs ≈ 0,6 m/h, ce qui est compatible avec les décanteurs à surface libre (vitesse de Hazen = 1-2 m/h).\n\nLes décanteurs lamellaires améliorent le rendement en multipliant la surface effective de décantation par l\'utilisation de plaques inclinées à 60° séparées de 50-80 mm. La vitesse de Hazen pour un décanteur lamellaire est calculée en tenant compte du nombre de plaques : V_Hazen = V_clarificat × sin(θ)/(e + d × cos(θ)) où θ = angle des plaques, e = espacement, d = longueur des plaques. Performances typiques : turbidité d\'entrée 50-500 NTU → sortie décantation 2-10 NTU.',
          sous_sections: []
        },
        {
          titre: '3. Filtration sur sable',
          texte: 'La filtration sur sable est la polissage final de la clarification. L\'eau décantée (turbidité ≈ 2-10 NTU) passe à travers un lit de sable siliceux (granulométrie 0,8-1,2 mm, coefficient d\'uniformité < 1,5) d\'épaisseur 0,8-1,2 m. Les mécanismes d\'élimination sont physiques (tamisage des particules > granulométrie des pores) et physicochimiques (adsorption des colloïdes sur les grains de sable). La vitesse de filtration est de 4-8 m/h en vitesse constante. Le colmatage progressif augmente les pertes de charge (départ : 0,1-0,3 m ; seuil de lavage : 1-2 m ou turbidité de perçage > 0,5 NTU).\n\nLe lavage est déclenché quand la perte de charge atteint le seuil ou en fin de cycle (12-24 h). Il comprend : (1) un lavage à air seul (décolmatage des grains par soufflage) pendant 3-5 min, (2) un lavage eau + air simultané pendant 5-8 min, (3) un rinçage eau seule pendant 5-10 min. L\'eau de lavage (3-5 % du volume filtré) est recirculée en tête de filière après traitement.',
          sous_sections: []
        },
        {
          titre: '4. Traitement des boues',
          texte: 'Les boues produites par la décantation et le lavage des filtres sont chargées en matières en suspension, coagulants résiduels et matières organiques. Leur siccité initiale est très faible (< 1 % MS). Elles doivent être traitées avant élimination : (1) Épaississement gravitaire (silo de boues) : augmentation de la siccité à 2-5 % MS ; (2) Déshydratation mécanique (filtre à bandes, centrifugeuse, filtre-presse) : siccité 20-35 % MS ; (3) Élimination : épandage agricole si les boues satisfont aux critères de l\'arrêté du 8 janvier 1998 (métaux lourds, micro-organismes), décharge de classe 2 ou valorisation compostage. Un traitement supplémentaire (chaulage ou compostage) peut être requis pour les boues d\'eaux potables à haute teneur en aluminium (non valorisables en agriculture).',
          sous_sections: []
        }
      ],
      points: [
        'Coagulation : neutralise les charges des colloïdes par coagulants Al ou Fe — pH optimal Al : 6,5-7,5, Fe : 5,5-7,0',
        'Floculation : agglomère les microflocs en macroflocs sédimentables — gradient G = 10-40 s⁻¹',
        'Décantation : séparation par gravité, turbidité 50-500 → 2-10 NTU',
        'Vitesse de Stokes : décrit la sédimentation d\'une particule sphérique dans un fluide',
        'Décanteur lamellaire : surface effective multipliée par les plaques inclinées à 60°',
        'Filtration sable : sable 0,8-1,2 mm, vitesse 4-8 m/h, lavage à perte de charge 1-2 m',
        'Lavage filtre : air seul → air + eau → eau seule, 3-5 % du volume filtré',
        'Boues de décantation : siccité initiale < 1 %, déshydratation mécanique nécessaire',
        'Polyélectrolyte : adjuvant de floculation pour améliorer la cohésion des flocs',
        'Turbiditié cible en sortie de filtre : < 0,5 NTU avant désinfection'
      ],
      formules: [
        'Vitesse de Stokes : vs = 2r² × (ρp - ρf) × g / (9μ) → [m/s] ; r = rayon particule [m], μ = viscosité [Pa.s]',
        'Vitesse de Hazen (décanteur) : V_Hazen = Q / S_surface → [m/h] ; S = surface en plan du décanteur',
        'Gradient de vitesse : G = √(P / (μV)) → [s⁻¹] ; P = puissance dissipée [W], V = volume [m³], μ = viscosité [Pa.s]',
        'Valeur GT (floculation) : GT = G × t → [-] ; G [s⁻¹], t = temps de contact [s] ; optimal : GT = 10⁴ à 10⁵'
      ],
      retenir: 'Coagulation · Floculation · Décantation · Filtration sable · Vitesse Stokes · Hazen · Turbidité · Polyélectrolyte · Boues · Lavage filtre'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Calculer la vitesse de sédimentation d\'un floc de rayon r = 80 μm, densité ρp = 1 040 kg/m³ dans l\'eau à 15°C (μ = 1,14×10⁻³ Pa.s, ρf = 999 kg/m³).',
        solution: 'vs = 2r²(ρp-ρf)g / (9μ) = 2×(80×10⁻⁶)²×(1040-999)×9,81 / (9×1,14×10⁻³) = 2×6400×10⁻¹²×41×9,81 / (10,26×10⁻³) = 2×6400×10⁻¹²×402,21 / (10,26×10⁻³) = 5148×10⁻⁹ / (10,26×10⁻³) = 5,02×10⁻⁴ m/s = 1,81 m/h. Ce floc décante à environ 1,8 m/h, compatible avec un décanteur de surface (V_Hazen = 1-2 m/h) mais limite — un décanteur lamellaire sera plus robuste.'
      },
      {
        n: '2',
        enonce: 'Un décanteur rectangulaire a une surface en plan de 200 m². Le débit d\'entrée est Q = 500 m³/h. La turbidité d\'entrée est 80 NTU. La turbidité de sortie visée est < 5 NTU. Calculer la vitesse de Hazen et vérifier si le décanteur convient.',
        solution: 'V_Hazen = Q/S = 500/200 = 2,5 m/h. Pour une turbidité d\'entrée de 80 NTU, une vitesse de Hazen de 2,5 m/h est à la limite haute pour atteindre < 5 NTU en sortie (standard : V_Hazen = 1-2 m/h). En eau peu chargée et avec une bonne coagulation, cela peut être acceptable, mais en période de crue (turbidité > 200 NTU), le décanteur sera surchargé. Recommandation : dimensionner pour V_Hazen = 1,5 m/h → S = 500/1,5 = 333 m². Ou ajouter un étage lamellaire pour augmenter la surface effective.'
      },
      {
        n: '3',
        enonce: 'Un floculateur de volume V = 250 m³ reçoit Q = 400 m³/h d\'eau. La puissance dissipée par les agitateurs est P = 750 W. Calculer G et GT (t = temps de séjour). Conclure sur l\'efficacité de la floculation.',
        solution: 'Temps de séjour : t = V/Q × 3 600 = 250/400 × 3 600 = 2 250 s. G = √(P/(μV)) = √(750/(1,14×10⁻³×250)) = √(750/0,285) = √(2 632) = 51,3 s⁻¹. Ce gradient est un peu élevé pour la floculation (optimum 10-40 s⁻¹) — il brise les flocs si trop fort. GT = G × t = 51,3 × 2 250 = 115 425 ≈ 1,15×10⁵. Cette valeur est dans la plage optimale (10⁴ à 10⁵). La durée de contact compense le gradient légèrement élevé, mais il serait préférable de réduire G à 30-40 s⁻¹ en modulant la vitesse des agitateurs.'
      },
      {
        n: '4',
        enonce: 'Un filtre à sable de 10 m² fonctionne à V_filtration = 6 m/h. À partir de quelle durée de fonctionnement le lavage est-il déclenché si le taux de colmatage est de 0,08 m de pertes de charge par heure et le seuil est 1,5 m ?',
        solution: 'Débit filtré : Q = 6 × 10 = 60 m³/h. Augmentation de perte de charge : 0,08 m/h. Durée avant lavage : t = 1,5 / 0,08 = 18,75 h. Volume filtré par cycle : 60 × 18,75 = 1 125 m³. Volume de lavage (5 % du volume filtré) : 0,05 × 1 125 = 56,25 m³. En pratique, un cycle de 18 h est raisonnable, mais si la qualité d\'eau brute se dégrade (turbidité haute), le colmatage s\'accélérera et la durée du cycle sera plus courte.'
      },
      {
        n: '5',
        enonce: 'Pourquoi le pH doit-il être ajusté avant la coagulation avec du sulfate d\'alumine Al₂(SO₄)₃ ? Que se passe-t-il si le pH est de 5,0 ou de 9,0 ?',
        solution: 'L\'aluminium forme Al(OH)₃ précipitable (coagulant actif) dans la plage pH 6,5-7,5. À pH 5,0 : Al³⁺ reste en solution ionique (ne précipite pas) → pas de flocs formés → coagulation inefficace + risque de résiduel Al élevé dans l\'eau traitée (normes : Al ≤ 0,2 mg/L). À pH 9,0 : Al(OH)₄⁻ (aluminate) se forme (réamphotère) → l\'aluminium se remet en solution sous forme d\'ion complexe → dissolution des flocs déjà formés, dégradation de la clarification + risque de résiduel Al à nouveau élevé. Ajustement requis : si pH eau brute < 6,5, ajouter du CO₂ ou de l\'acide sulfurique ; si pH > 7,5, ajouter de l\'acide ou choisir un coagulant ferrique (plage plus large : 5,5-7,0).'
      },
      {
        n: '6',
        enonce: 'Lors d\'un lavage de filtre, le technicien observe que le sable monte de façon non uniforme (zones de soulèvement inégales et formation de chemins préférentiels). Diagnostiquer le problème et proposer des solutions.',
        solution: 'Diagnostic : la non-uniformité du soulèvement indique un problème de distribution des eaux/air de lavage dans le système de fond de filtre. Causes possibles : (1) Colmatage partiel des buses ou fausses de lavage par accumulation de boues sur le fond de filtre (bullage inégal) ; (2) Stratification du sable (grains fins rassemblés en surface, bloquant le passage de l\'air) ; (3) Présence d\'une "boulette de sable" (mudball) = amas de boues et de sable agglomérés que le lavage ne détache pas. Les chemins préférentiels (bypass) font que l\'eau et l\'air court-circuitent la zone colmatée, l\'aggravant progressivement. Solutions : (1) Inspection visuelle du fond de filtre lors de la prochaine vidange ; (2) Lavage forcé à débit élevé pour décoller les dépôts de fond ; (3) Fragmentation manuelle des mudballs détectés ; (4) Vérification de l\'état des buses et remplacement si nécessaire ; (5) Révision de la séquence de lavage (durée, débits air et eau).'
      },
      {
        n: '7',
        enonce: 'Une station de traitement d\'eau potable produit 2 000 m³/j d\'eau avec un traitement au chlorure ferrique. La turbidité de l\'eau brute est 120 NTU en moyenne. La dose de FeCl₃ est 45 g/m³. Calculer la masse de coagulant consommée par jour et le volume de boues produites (teneur en MES de l\'eau brute = 120 mg/L, rendement d\'élimination MES = 95 %).',
        solution: 'Coagulant : 45 g/m³ × 2 000 m³/j = 90 000 g/j = 90 kg/j de FeCl₃. Production de MES éliminées : 120 mg/L × 2 000 000 L/j × 0,95 = 228 000 000 mg/j = 228 kg/j de MES. Boues totales = MES + hydroxyde de fer (réaction FeCl₃ + 3H₂O → Fe(OH)₃ + 3HCl ; 1 mole FeCl₃ = 162,2 g → 1 mole Fe(OH)₃ = 106,8 g) : 90 kg FeCl₃ → 90 × 106,8/162,2 = 59,3 kg Fe(OH)₃. Boues totales sèches ≈ 228 + 59 = 287 kg MS/j. À siccité 0,5 % (eau brute), volume boues ≈ 287/0,005 = 57 400 L = 57 m³/j de boues liquides à traiter.'
      },
      {
        n: '8',
        enonce: 'Définir la notion de "jar-test" en traitement de l\'eau. Comment est-il utilisé en exploitation pour optimiser la dose de coagulant ?',
        solution: 'Le jar-test (essai en jars ou en béchers) est un test de laboratoire semi-automatisé qui reproduit en miniature le processus de coagulation-floculation-décantation pour déterminer la dose optimale de coagulant. Protocole standard : 6 béchers de 1 L sont remplis avec l\'eau à traiter. Une dose croissante de coagulant (ex. : 20, 30, 40, 50, 60, 70 mg/L de PAC) est ajoutée dans chaque bécher. Agitation rapide (coagulation, G ≈ 300 s⁻¹) pendant 1-2 min, puis agitation lente (floculation, G ≈ 30 s⁻¹) pendant 15-20 min, puis décantation 10-30 min. Mesure de la turbidité du surnageant dans chaque bécher. La dose optimale est celle qui donne la turbidité résiduelle la plus basse avec le coût le plus faible (courbe en U). En exploitation, le jar-test est réalisé : (1) lors d\'un changement de qualité d\'eau brute important (crue, changement saisonnier) ; (2) lors d\'un changement de fournisseur de coagulant ; (3) en routine hebdomadaire ou quotidienne sur les grandes stations. Il permet d\'anticiper les ajustements avant que la qualité de l\'eau produite ne se dégrade.'
      }
    ]
  },

  'GEMEAU-075': {
    id: 'GEMEAU-075',
    titre: 'Traitement de l\'eau potable : désinfection',
    fiche: {
      intro: 'La désinfection est l\'étape finale et indispensable du traitement de l\'eau potable : elle vise à éliminer ou inactiver les micro-organismes pathogènes (bactéries, virus, protozoaires). Le choix du désinfectant et la maîtrise des sous-produits de désinfection sont des enjeux majeurs de santé publique.',
      sections: [
        {
          titre: '1. Agents désinfectants et efficacité',
          texte: 'Le chlore (Cl₂ gazeux ou eau de Javel NaOCl) est le désinfectant de référence mondial pour l\'eau potable. En solution aqueuse, il forme l\'acide hypochloreux HOCl (forme active, unchargée, pénètre la paroi bactérienne) et l\'ion hypochlorite OCl⁻ (moins actif). L\'équilibre HOCl/OCl⁻ dépend du pH : à pH 7,5, 50 % HOCl / 50 % OCl⁻ ; à pH 8,5, < 10 % HOCl. L\'efficacité désinfectante chute donc fortement avec l\'augmentation du pH. La désinfection au chlore laisse un résiduel mesurable en réseau de distribution (obligation réglementaire française : 0,1-0,3 mg/L de chlore résiduel au robinet de l\'abonné).\n\nL\'ozone (O₃) est un oxydant très puissant, plus réactif que le chlore (CT pour E. coli : 0,02 mg.min/L vs 0,08 mg.min/L pour HOCl). Il élimine efficacement les virus et protozoaires (Cryptosporidium), détruit les pesticides et le goût/odeur, mais ne laisse pas de résiduel en réseau (durée de vie < 30 min en eau). Il est donc toujours associé à une désinfection finale au chlore. Les rayonnements UV (longueur d\'onde 254 nm) inactivent les micro-organismes par altération de leur ADN, sans résiduel chimique. Très efficaces sur les protozoaires (Giardia, Cryptosporidium), ils ne dégradent pas les pesticides et nécessitent une eau peu turbide (< 1 NTU) pour être efficaces.',
          sous_sections: []
        },
        {
          titre: '2. Concept CT et dimensionnement de la désinfection',
          texte: 'L\'efficacité désinfectante est quantifiée par le produit CT = concentration résiduelle × temps de contact, exprimé en mg.min/L (ou mg.h/L). Le CT nécessaire dépend du micro-organisme cible, de la température et du pH. Pour une désinfection au chlore libre, élimination à 3 log d\'E. coli : CT ≈ 0,6 mg.min/L à pH 7, 10°C ; pour une élimination à 4 log de Giardia : CT ≈ 15 mg.min/L à pH 7, 10°C. Pour une installation avec une teneur résiduelle de chlore de 0,5 mg/L, le temps de contact minimal pour Giardia est t = CT/C = 15/0,5 = 30 min.\n\nLe temps de contact réel dans un ouvrage n\'est pas le temps de séjour théorique (V/Q) car les écoulements sont non idéaux (courts-circuits hydrauliques). La méthode de l\'ouvrage équivalent utilise le coefficient t₁₀/t, ratio du temps pour que 10 % du traceur ressorte sur le temps de séjour théorique (t₁₀/t = 0,1 pour court-circuit total, 1,0 pour piston parfait). Le CT effectif = C × t₁₀.',
          sous_sections: []
        },
        {
          titre: '3. Sous-produits de désinfection',
          texte: 'La réaction du chlore avec les matières organiques naturelles (acides humiques, fulviques) présentes dans l\'eau brute forme des sous-produits de désinfection potentiellement cancérigènes. Les principaux sont les trihalométhanes (THM : chloroforme CHCl₃, bromodichlorométhane CHBrCl₂, dibromochlorométhane CHBr₂Cl, bromoforme CHBr₃) et les acides haloacétiques (HAA). La réglementation européenne (directive 2020/2184) et française fixent la teneur maximale à 100 μg/L pour la somme des 4 THM en eau potable distribuée.\n\nLa formation de THM dépend de la teneur en carbone organique total (COT), de la dose de chlore, du pH (plus élevé = plus de THM), de la température et de la présence de bromures (bromoforme plus génotoxique que le chloroforme). Pour limiter les THM : (1) éliminer les précurseurs en amont par coagulation-clarification et adsorption sur CAG ; (2) réduire la dose de chlore au strict nécessaire ; (3) chlorer à pH plus acide (pH 7 plutôt que 8) ; (4) utiliser d\'autres désinfectants primaires (O₃, UV) et chlorer uniquement en finition.',
          sous_sections: []
        },
        {
          titre: '4. Chloration et surveillance du résiduel chloré',
          texte: 'La chloration est réalisée par injection de chlore gazeux (grands volumes, économique mais dangereux) ou d\'eau de Javel liquide NaOCl (petites et moyennes stations, plus sûr). La dose de chlore est calculée pour satisfaire la demande en chlore de l\'eau (consommation par les matières organiques résiduelles, ammoniaque, fer) et maintenir un résiduel libre de 0,1-0,5 mg/L dans tout le réseau. La demande en chlore est mesurée expérimentalement par dosage du chlore résiduel après un temps de contact défini.\n\nLa surveillance du résiduel chloré dans le réseau se fait par des analyseurs en ligne (chlorimètres ampérométriques ou colorimétriques DPD) placés en sortie de station et en des points stratégiques du réseau (extrémités, boucles). La teneur minimale en résiduel libre en tout point du réseau est 0,1 mg/L selon la circulaire DGS/VS4 du 14 décembre 2001. Des seuils d\'alarme sont définis pour déclencher une rechloruration si le résiduel chute.',
          sous_sections: []
        }
      ],
      points: [
        'Chlore : désinfectant de référence, forme HOCl actif (pH-dépendant) + résiduel en réseau obligatoire 0,1-0,3 mg/L',
        'HOCl dominant à pH < 7,5 ; OCl⁻ dominant à pH > 8,5 → désinfection moins efficace à pH élevé',
        'Ozone : oxydant puissant, élimine virus + Cryptosporidium, pas de résiduel, toujours suivi de chloration',
        'UV (254 nm) : inactivation ADN, efficace sur protozoaires, pas de résiduel, eau turbide < 1 NTU requis',
        'CT (mg.min/L) : concentration × temps — paramètre clé du dimensionnement de la désinfection',
        'CT requis pour 4 log Giardia (chlore, pH 7, 10°C) : ≈ 15 mg.min/L',
        'THM (trihalométhanes) : sous-produits de chloration, limite 100 μg/L (somme 4 THM)',
        'Précurseurs THM : COT (carbone organique total), bromures, pH élevé, température',
        'Demande en chlore : consommation par matières organiques + ammoniaque + métaux',
        'Résiduel chloré réseau : 0,1-0,3 mg/L — mesuré en continu aux points stratégiques'
      ],
      formules: [
        'CT désinfection : CT = C × t → [mg.min/L] ; C = concentration désinfectant résiduel [mg/L], t = temps de contact [min]',
        'CT effectif (hydraulique non idéale) : CT_eff = C × t₁₀ → [mg.min/L] ; t₁₀ = temps pour 10 % de traceur sortant',
        'Chlore résiduel requis : C_min = CT_requis / t_contact → [mg/L] ; t en minutes',
        'Dose de chlore = Demande en chlore + Résiduel libre visé → [mg/L]'
      ],
      retenir: 'Chlore · HOCl · OCl⁻ · Ozone · UV · CT (mg.min/L) · t₁₀ · THM · COT · Résiduel chloré · 0,1 mg/L réseau'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une station chlore son eau à pH 8,0. La teneur en HOCl mesurée est 30 % de la concentration totale de chlore libre. Si la teneur totale en chlore libre est 0,8 mg/L, calculer la concentration en HOCl actif. Comparer avec la situation à pH 7,0 (HOCl = 73 %).',
        solution: 'À pH 8,0 : [HOCl] = 0,30 × 0,8 = 0,24 mg/L HOCl actif. À pH 7,0 : [HOCl] = 0,73 × 0,8 = 0,584 mg/L HOCl actif. À pH 7,0, la concentration en HOCl est 2,4 fois plus élevée qu\'à pH 8,0 pour la même dose de chlore totale. La désinfection est donc significativement plus efficace à pH neutre. Si la station fonctionne à pH 8,0, il faudrait augmenter la dose totale de chlore de ×2,4 pour obtenir le même effet biocide, ce qui augmente la formation de THM.'
      },
      {
        n: '2',
        enonce: 'Calculer le temps de contact minimal dans un réservoir de contact pour éliminer Giardia à 4 log (CT requis = 15 mg.min/L à pH 7, 10°C) avec une concentration résiduelle de chlore de 0,6 mg/L. Le réservoir est de type "plug flow" (t₁₀/t = 0,85).',
        solution: 'CT effectif = C × t₁₀ = 0,6 × t × 0,85 (avec t = temps de contact en min). CT_requis = 15 mg.min/L. Donc : 0,6 × 0,85 × t = 15. t = 15 / (0,6 × 0,85) = 15 / 0,51 = 29,4 min. Le temps de séjour théorique doit être d\'au moins 29,4 min pour que le CT effectif atteigne 15 mg.min/L. Le volume du réservoir de contact pour Q = 200 m³/h : V = Q × t = 200 × 29,4/60 = 98 m³.'
      },
      {
        n: '3',
        enonce: 'L\'analyse mensuelle des THM en eau distribuée donne : CHCl₃ = 42 μg/L, CHBrCl₂ = 28 μg/L, CHBr₂Cl = 15 μg/L, CHBr₃ = 6 μg/L. La somme est-elle conforme ? Quelle action préventive recommandez-vous ?',
        solution: 'Somme THM = 42 + 28 + 15 + 6 = 91 μg/L. Limite réglementaire = 100 μg/L. La somme est CONFORME (91 < 100 μg/L) mais très proche de la limite (91 %). La présence de bromures est confirmée par les formes bromées (CHBrCl₂ + CHBr₂Cl + CHBr₃ = 49 μg/L > CHCl₃ = 42 μg/L). Actions préventives : (1) Analyser le COT de l\'eau brute et optimiser la coagulation pour l\'éliminer avant chloration ; (2) Vérifier la dose de chlore et réduire si possible ; (3) Envisager l\'installation d\'un filtre au charbon actif en grain (CAG) pour adsorber les précurseurs organiques avant la désinfection ; (4) Suivre l\'évolution mensuelle — si tendance à la hausse, plan d\'actions obligatoire avant dépassement.'
      },
      {
        n: '4',
        enonce: 'Une petite station de potabilisation (Q = 50 m³/h) utilise l\'UV pour la désinfection primaire. La lampe délivre une dose UV de 30 mJ/cm². Vérifier si cette dose est suffisante pour obtenir une réduction à 4 log d\'Adénovirus (dose requise : 150 mJ/cm²). Que proposer pour compléter la désinfection ?',
        solution: 'Dose UV délivrée = 30 mJ/cm². Dose requise pour 4 log Adénovirus = 150 mJ/cm². La dose UV est INSUFFISANTE (30 < 150 mJ/cm²) pour les Adénovirus, qui sont parmi les virus les plus résistants aux UV. En revanche, 30 mJ/cm² suffit pour 4 log de Giardia (dose requise ≈ 5-10 mJ/cm²) et 4 log Cryptosporidium (≈ 10-20 mJ/cm²). Proposition : UV pour les protozoaires + chloration finale au niveau requis pour les virus (CT chlore pour 4 log Adénovirus ≈ 2-6 mg.min/L). Cette combinaison UV + chlore est la pratique courante : les UV éliminent les protozoaires résistants au chlore, et le chlore traite les virus tout en maintenant un résiduel en réseau.'
      },
      {
        n: '5',
        enonce: 'Un technicien mesure un résiduel chloré de 0,05 mg/L à l\'extrémité d\'une antenne du réseau AEP (normes : ≥ 0,1 mg/L). Quelles sont les causes possibles et les actions correctives ?',
        solution: 'Résiduel < 0,1 mg/L = non-conforme, risque bactériologique. Causes possibles : (1) Temps de séjour trop long dans la conduite (eau stagnante, consommation très faible en bout de réseau) → le chlore se décompose naturellement (t₁/₂ ≈ 4-20 h selon T°C, pH et présence de matières organiques) ; (2) Sous-chloration à la station (dose insuffisante) ; (3) Matériaux de la conduite consommant du chlore (fontes vieilles, joints caoutchouc dégradés) ; (4) Biofilm sur les parois de la conduite consommant le résiduel. Actions correctives : (1) Augmenter légèrement la dose de chlore en sortie de station (si impact acceptable sur THM) ; (2) Installer une rechloruration intermédiaire (relais de chloration) sur l\'antenne concernée ; (3) Purge hydraulique périodique de l\'antenne pour renouveler l\'eau stagnante ; (4) Prélèvement bactériologique pour vérifier l\'absence d\'E. coli.'
      },
      {
        n: '6',
        enonce: 'La demande en chlore d\'une eau traitée est mesurée à 1,2 mg/L (après 30 min de contact). Si la station veut maintenir un résiduel de 0,25 mg/L au départ de la station, quelle dose de chlore doit-elle injecter ?',
        solution: 'Dose de chlore = Demande en chlore + Résiduel visé = 1,2 + 0,25 = 1,45 mg/L. Pour Q = 1 000 m³/h, la masse de chlore à injecter est : 1,45 g/m³ × 1 000 m³/h = 1 450 g/h = 1,45 kg/h. Si l\'on utilise de l\'eau de Javel à 13 % (titre chlorométrique 9,6 % de chlore actif, densité ≈ 1,20 kg/L), le débit de Javel = 1 450 / (0,096 × 1 200) = 1 450 / 115,2 = 12,6 L/h.'
      },
      {
        n: '7',
        enonce: 'Pourquoi l\'ozonation produit-elle des bromates (BrO₃⁻) dans les eaux chargées en bromures ? Quelle est la réglementation ? Comment limiter leur formation ?',
        solution: 'L\'ozone (O₃) oxyde les bromures Br⁻ naturellement présents dans l\'eau brute (surtout les eaux côtières ou certaines nappes) selon la chaîne : Br⁻ → HOBr → BrO₃⁻. Les bromates sont cancérigènes (CIRC groupe 2A). Réglementation : teneur maximale BrO₃⁻ ≤ 10 μg/L dans l\'eau potable (directive européenne). Méthodes pour limiter les bromates : (1) Réduire la dose d\'ozone et fractionner l\'injection (plusieurs points d\'injection) pour limiter la concentration instantanée d\'O₃ ; (2) Abaisser le pH avant ozonation à pH 6,5-7,0 (favorise la voie moléculaire O₃ vs radicaux OH• qui forment plus de bromates) ; (3) Ajouter du peroxyde d\'hydrogène H₂O₂ avec l\'ozone (procédé O₃/H₂O₂ ou AOP) — les radicaux OH• produits consomment rapidement les intermédiaires bromés ; (4) Si teneurs en Br⁻ très élevées : ammonium NH₄⁺ ajouter pour bloquer l\'oxydation de HOBr.'
      },
      {
        n: '8',
        enonce: 'Une station utilise de la monochloramine (NH₂Cl) comme désinfectant secondaire en réseau à la place du chlore libre. Citer les avantages et inconvénients par rapport au chlore libre.',
        solution: 'Avantages de la monochloramine NH₂Cl : (1) Formation de THM et HAA très fortement réduite (NH₂Cl ne réagit pas avec les matières organiques comme HOCl) ; (2) Résiduel plus stable en réseau (t₁/₂ >> chlore libre) — meilleur maintien du résiduel en bout de réseau ; (3) Goût et odeur moins perceptibles. Inconvénients : (1) Pouvoir désinfectant environ 50-100 fois plus faible que HOCl — ne convient pas pour la désinfection primaire, seulement pour le maintien du résiduel ; (2) Formation de sous-produits spécifiques : nitrosamines (NDMA, potentiellement cancérigène) ; (3) Dangereux pour les patients dialysés (destruction des globules rouges si l\'eau de dialyse n\'est pas déchloraminée) → obligation d\'information des établissements de santé ; (4) Problèmes de nitrification dans les réseaux en cas d\'excès de NH₃ libre (bactéries nitrifiantes consomment le résiduel).'
      }
    ]
  },

  'GEMEAU-076': {
    id: 'GEMEAU-076',
    titre: 'Réseau de distribution d\'eau potable',
    fiche: {
      intro: 'Le réseau de distribution achemine l\'eau traitée depuis les réservoirs de stockage jusqu\'aux abonnés, en maintenant une pression suffisante, une qualité conforme et une continuité de service. La gestion d\'un réseau de distribution implique la connaissance de son architecture, des pertes de charge, des pressions et des mécanismes de perte d\'eau.',
      sections: [
        {
          titre: '1. Architecture et composants du réseau',
          texte: 'Un réseau de distribution AEP est constitué d\'une hiérarchie de conduites : les adductions (grandes conduites de transport de l\'eau traitée vers les réservoirs de tête, DN > 200 mm), les conduites de distribution maîtresses (DN 100-200 mm, maillant le réseau principal), et les conduites de branchement (DN 25-80 mm, desservant les abonnés individuels). Les réseaux modernes sont maillés (conduites reliées en boucles) plutôt qu\'arborescents (conduites en ramification) pour améliorer la redondance et la sécurité d\'alimentation : une coupure sur un tronçon n\'interrompt pas l\'alimentation des abonnés en aval.\n\nLe stockage est assuré par des réservoirs (châteaux d\'eau, bâches enterrées, réservoirs semi-enterrés) qui servent à : (1) stocker un volume tampon pour faire face aux pointes de consommation (matin, midi, soir) sans surdimensionner les pompes ; (2) maintenir la pression dans le réseau en aval (pression hydrostatique) ; (3) constituer une réserve incendie (120-360 m³ selon le risque, fournie en 2 h à 60-180 m³/h selon la catégorie de risque normative NF S62-210).',
          sous_sections: []
        },
        {
          titre: '2. Pression de service et zones de pression',
          texte: 'La pression dans le réseau est un paramètre critique pour assurer le service aux abonnés et limiter les fuites. La pression minimale de service est 2 bar au robinet de l\'abonné en tout point et à toute heure (garantie par le contrat de service). La pression maximale est généralement limitée à 6-8 bar pour éviter les dommages sur les installations privées et limiter le taux de fuite (les fuites augmentent avec la pression selon une loi de puissance). La pression en un point du réseau dépend de la cote du point par rapport au réservoir qui l\'alimente (pression statique = ρgh) diminuée des pertes de charge en transit.\n\nPour les villes avec relief important, le réseau est découpé en zones de pression (zones hydrauliques), chaque zone étant alimentée depuis un réservoir à la cote appropriée ou via un réducteur de pression (PRV : Pressure Reducing Valve) depuis une zone haute. Les réducteurs de pression dynamiques (vannage motorisé) permettent d\'adapter la pression selon le débit (pression plus haute en pointe de consommation pour maintenir la pression minimale, plus basse en nuit pour réduire les fuites).',
          sous_sections: []
        },
        {
          titre: '3. Rendement du réseau et eau non comptabilisée',
          texte: 'L\'eau non comptabilisée (ANEC : Apparent and Non-revenue Non-Comptabilized Water) est la différence entre le volume mis en distribution et le volume comptabilisé aux compteurs des abonnés. Elle comprend : (1) les fuites réelles sur conduites (fissures, joints défaillants, raccords) ; (2) les fuites apparentes (erreurs de comptage des compteurs, consommation non autorisée, purges non mesurées) ; (3) les usages non comptabilisés légitimes (rinçage de réseau, extincteurs, bornes fontaines). Le rendement du réseau est R = V_facturé / V_mis_en_distribution × 100. Un rendement < 80 % signale des fuites importantes et peut déclencher une obligation de recherche de fuites (Code de l\'environnement, décret du 27 janvier 2012 : objectif de rendement ≥ 85 % ou ≥ 70 % selon la densité de population).',
          sous_sections: []
        },
        {
          titre: '4. Recherche de fuites',
          texte: 'La recherche de fuites utilise plusieurs techniques complémentaires : (1) Sectorisation nocturne : mesure du débit minimum nocturne (0h-4h) sur chaque secteur hydraulique isolé. Un débit nocturne élevé (> 1,5-2 L/h/branchement) indique une fuite significative dans ce secteur. (2) Pré-localisation par corrélation acoustique : deux capteurs acoustiques sont posés sur les appareils hydrauliques (vannes, bouches à clé) de part et d\'autre d\'une conduite suspecte. Le corrélateur calcule la différence de temps d\'arrivée du bruit de fuite pour le localiser. (3) Détection au gaz traceur : injection d\'un gaz non toxique (hélium, H₂ à 5 %) dans la conduite ; la fuite crée une diffusion du gaz dans le sol détectable en surface par un analyseur portatif. (4) Endoscope ou caméra : inspection visuelle intérieure de la conduite (préféré pour les grosses conduites).',
          sous_sections: []
        }
      ],
      points: [
        'Réseau maillé > réseau arborescent : redondance, sécurité alimentation si coupure',
        'Château d\'eau : stockage tampon, pression hydrostatique, réserve incendie',
        'Réserve incendie : 120-360 m³ selon catégorie NF S62-210',
        'Pression minimale abonné : 2 bar en tout point et toute heure',
        'PRV (réducteur de pression) : limite la pression dans les zones basses, réduit les fuites',
        'Rendement réseau : V_facturé / V_mis_en_distribution × 100 — seuil légal ≥ 80-85 %',
        'Eau non comptabilisée : fuites réelles + fuites apparentes + usages non comptés',
        'Débit minimum nocturne (DMN) : indicateur de fuite par secteur, mesuré 0h-4h',
        'Corrélation acoustique : localise la fuite par décalage du bruit entre deux capteurs',
        'Gaz traceur (H₂, He) : diffuse hors de la conduite, détectable en surface'
      ],
      formules: [
        'Pression hydrostatique : P = ρ × g × h → [Pa] ; P [bar] = 0,0981 × h [m]',
        'Pression en un point : P_point = P_réservoir - ΔP_pertes_charge - ρg(z_point - z_réservoir) → [bar]',
        'Rendement réseau : R = V_facturé / V_mis × 100 → [%]',
        'ILP (Indice Linéaire de Pertes) : ILP = (V_mis - V_facturé) / (L_réseau × 365 × 24) → [L/km/h]'
      ],
      retenir: 'Réseau maillé · Réservoir · Château d\'eau · Pression 2 bar min · PRV · Rendement réseau · Eau non comptabilisée · Sectorisation nocturne · Corrélation acoustique · ILP'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un château d\'eau a une cuve à 45 m de hauteur. Calculer la pression statique au niveau du sol et à 8 m de profondeur (branchement d\'abonné en sous-sol).',
        solution: 'Pression au sol : P = 0,0981 × 45 = 4,41 bar. Pression à -8 m (sous-sol) : P = 0,0981 × (45 + 8) = 0,0981 × 53 = 5,20 bar. L\'abonné en sous-sol reçoit 5,20 bar (> 2 bar minimum ✓). Si la pression est trop élevée (> 6-7 bar), un détendeur de pression privé est recommandé pour protéger les équipements intérieurs.'
      },
      {
        n: '2',
        enonce: 'Un réseau distribue V_mis = 1 850 000 m³/an. Les compteurs totalisent V_facturé = 1 480 000 m³/an. Les usages non comptabilisés légitimes (rinçages, lutte incendie) sont estimés à 25 000 m³/an. Calculer le rendement brut et le rendement corrigé. Le réseau respecte-t-il les obligations légales (seuil 80 %) ?',
        solution: 'Rendement brut : R = 1 480 000 / 1 850 000 × 100 = 80,0 %. Pertes réelles = V_mis - V_facturé - V_légitime = 1 850 000 - 1 480 000 - 25 000 = 345 000 m³/an. Rendement corrigé (excluant les usages légitimes) : R_corrigé = (1 480 000 + 25 000) / 1 850 000 × 100 = 81,4 %. Le rendement brut est exactement à la limite de 80 % — le réseau est à la limite de conformité. L\'objectif réglementaire du décret de 2012 est ≥ 80 % pour un réseau en zone rurale (< 5 000 abonnés) ou ≥ 85 % en zone dense. Un plan pluriannuel de renouvellement des conduites et de recherche de fuites doit être engagé.'
      },
      {
        n: '3',
        enonce: 'La sectorisation nocturne sur un secteur de 450 branchements donne un débit minimum nocturne de 1,8 m³/h entre 2h et 4h du matin. Est-ce significatif ?',
        solution: 'DMN par branchement = 1 800 L/h / 450 = 4 L/h par branchement. Le seuil d\'alerte est généralement de 1,5-2 L/h/branchement (consommation nocturne légitime résiduelle). 4 L/h/branchement est 2 fois le seuil d\'alerte → il y a une fuite significative dans ce secteur. Volume de fuite probable = (4 - 2) L/h × 450 branchements = 900 L/h ≈ 0,9 m³/h = 7 884 m³/an sur ce seul secteur. La pré-localisation acoustique doit être déployée dans ce secteur en priorité.'
      },
      {
        n: '4',
        enonce: 'Un réducteur de pression (PRV) doit être installé sur une conduite alimentant une zone basse. La pression amont est 7,5 bar, la pression de consigne aval est 3,5 bar. Débit de pointe : 80 m³/h. Donner les caractéristiques principales du PRV à spécifier.',
        solution: 'Caractéristiques à spécifier : (1) Plage de pression amont : 4-9 bar (maxi = 7,5 + 20 % de marge = 9 bar) ; (2) Pression de consigne aval : 3,5 bar (réglable ± 0,5 bar) ; (3) Débit nominal : 80 m³/h avec une marge de 20 % = DN spécifier pour 80 m³/h → vérifier abaque constructeur (généralement DN80 ou DN100 selon la gamme) ; (4) Type : vanne de régulation à diaphragme pilotée (Pressure Reducing Valve) avec régulation dynamique possible (pression de consigne variable selon le débit pour compenser les pertes de charge en réseau — "pressure-flow control") ; (5) By-pass de maintenance avec vanne d\'isolation amont et aval + manomètres amont/aval pour la surveillance ; (6) Filtre amont pour protéger le siège du PRV de l\'encrassement.'
      },
      {
        n: '5',
        enonce: 'Calculer l\'ILP (Indice Linéaire de Pertes) d\'un réseau de 85 km de longueur, avec V_mis = 2 100 000 m³/an et V_comptabilisé = 1 680 000 m³/an. Interpréter selon les classes ONEMA.',
        solution: 'Pertes = 2 100 000 - 1 680 000 = 420 000 m³/an. ILP = 420 000 000 L / (85 km × 365 j × 24 h) = 420 000 000 / (85 × 8 760) = 420 000 000 / 744 600 = 564 L/km/h. Classes ONEMA (indicielles) : excellent < 1,5 m³/km/j = 62,5 L/km/h ; bon 1,5-3 m³/km/j = 62,5-125 L/km/h ; acceptable 3-8 m³/km/j = 125-333 L/km/h ; médiocre > 8 m³/km/j = 333 L/km/h. ILP = 564 L/km/h = 13,5 m³/km/j → classe très médiocre. Ce réseau nécessite un programme intensif de renouvellement et de recherche de fuites.'
      },
      {
        n: '6',
        enonce: 'Décrire la procédure de sectorisation nocturne sur un secteur de 600 branchements pour mesurer le débit minimum nocturne.',
        solution: 'Procédure : (1) Préparation : cartographier le secteur, identifier toutes les vannes de sectorisation à fermer (isoler le secteur hydrauliquement), localiser la vanne de comptage (avec débitmètre temporaire ou permanent) en entrée de secteur. (2) La nuit choisie (nuit calme, pas de chantier, pas d\'alerte météo) : à 0h00, fermer progressivement (en 10-15 min) les vannes de sectorisation de toutes les conduites de liaison vers les secteurs adjacents. Vérifier que le secteur est bien isolé (pression stabilisée). (3) Entre 2h00 et 4h00 : relever le débit toutes les 15 min (débitmètre temporaire EM portatif à électrodes sur conduite d\'alimentation). Calculer la moyenne des relevés = DMN. (4) À 4h30 : rouvrir les vannes de sectorisation. (5) Calcul : DMN/branchement = DMN_total / 600. Seuil : si < 2 L/h/brt, acceptable ; si > 2 L/h/brt, recherche de fuites dans le secteur. (6) Rapport : cartographie du secteur, valeurs relevées, interprétation, recommandation.'
      },
      {
        n: '7',
        enonce: 'Expliquer le principe de la corrélation acoustique. Quelles sont ses limites en pratique ?',
        solution: 'Principe : une fuite sur une conduite produit un bruit (bruit blanc, fréquences 50-1 500 Hz selon le matériau et la pression). Ce bruit se propage dans les deux directions le long de la conduite. Deux capteurs piézoélectriques sont posés sur deux appareils hydrauliques (boulons de bouches à clé, vannes) de part et d\'autre de la zone suspecte, à distances d₁ et d₂ du point de fuite. Le corrélateur numérique mesure le décalage de temps d\'arrivée Δt entre les deux capteurs. La position de la fuite est calculée par : x = (d - c × Δt) / 2, où d = distance entre les deux capteurs et c = célérité de l\'onde acoustique dans la conduite. Limites pratiques : (1) Célérité c dépend du matériau, du diamètre et de l\'état de la conduite — souvent mal connue sur ancien réseau (erreur de positionnement ±2-5 m) ; (2) Efficacité réduite sur les conduites en PE (forte amortissement de l\'onde acoustique) et sur les grandes distances (> 200-300 m) ; (3) Bruit de fond ambiant (trafic, travaux) peut masquer le signal de fuite ; (4) Nécessite deux points d\'accès sur la conduite à moins de 200-400 m de part et d\'autre.'
      },
      {
        n: '8',
        enonce: 'Un abonné se plaint d\'une pression insuffisante à son robinet (< 1 bar). La pression en tête de son branchement (au regard de compteur) est 2,8 bar. La longueur du branchement est 15 m, le diamètre est DN20 (PE). Le robinet est à 3 m de hauteur. Diagnostiquer.',
        solution: 'Pression disponible au regard = 2,8 bar. Pertes à déduire : (1) Différence de hauteur : Δz = 3 m → ΔP_statique = 0,0981 × 3 = 0,29 bar ; (2) Pertes de charge dans le branchement DE 20 mm sur 15 m + compteur + réducteur éventuel. Pour DN20 PE à débit domestique (0,3-0,5 L/s) : J ≈ 30-50 mmCE/m (perte de charge linéaire), ΔP_conduite ≈ 0,4-0,7 bar sur 15 m. (3) Compteur DN15 : ΔP ≈ 0,3-0,8 bar à débit de pointe. Total pertes estimées = 0,29 + 0,5 + 0,5 = 1,3 bar. Pression au robinet estimée ≈ 2,8 - 1,3 = 1,5 bar → encore > 1 bar. Diagnostic probable : obstruction partielle du compteur (entartrée, corps étranger) ou du robinet d\'arrêt qui crée une perte de charge supplémentaire non comptée. Action : vérifier l\'état du compteur (indicateur de débit bloqué ?) et remplacer si anomalie.'
      }
    ]
  },

  'GEMEAU-077': {
    id: 'GEMEAU-077',
    titre: 'Contrôle de la qualité de l\'eau potable',
    fiche: {
      intro: 'La qualité de l\'eau potable est contrôlée par deux acteurs distincts : le contrôle sanitaire officiel réalisé par les services de l\'État (ARS) et l\'autosurveillance de l\'exploitant. La réglementation française, issue des directives européennes, fixe des limites de qualité et des références de qualité pour de nombreux paramètres physico-chimiques et microbiologiques.',
      sections: [
        {
          titre: '1. Réglementation de la qualité de l\'eau potable',
          texte: 'La réglementation française sur la qualité de l\'eau potable est fondée sur la directive européenne 2020/2184 (refonte de la directive 98/83/CE), transposée par le décret n°2001-1220 du 20 décembre 2001 modifié et les arrêtés d\'application. Elle définit : (1) Les Limites de Qualité (LQ) : valeurs réglementaires impératives à ne pas dépasser, dont le dépassement interdit la distribution ou implique des mesures correctives immédiates (ex. : nitrates ≤ 50 mg/L, turbidité ≤ 1 NTU, E. coli = 0 /100 mL, plomb ≤ 10 μg/L après le 12/01/2028, THM somme ≤ 100 μg/L) ; (2) Les Références de Qualité (RQ) : valeurs indicatives sans obligation réglementaire directe, mais dont le dépassement justifie une investigation (ex. : aluminium ≤ 200 μg/L, fer ≤ 200 μg/L, manganèse ≤ 50 μg/L, pH 6,5-9,0, chlore résiduel ≤ 0,3 mg/L sans odeur).',
          sous_sections: []
        },
        {
          titre: '2. Contrôle sanitaire officiel',
          texte: 'Le contrôle sanitaire est exercé par l\'Agence Régionale de Santé (ARS). Les fréquences d\'analyses sont définies par les textes réglementaires en fonction du volume distribué et de la population desservie. Il comprend deux types de programmes : (1) Le programme de contrôle de routine (R) : vérifie les paramètres microbiologiques de base (E. coli, entérocoques, bactéries revivifiables) et les paramètres physico-chimiques courants (pH, turbidité, nitrates, chlore) avec une fréquence élevée ; (2) Le programme de contrôle complet (C) : bilan analytique exhaustif couvrant tous les paramètres réglementaires (microbiologie, métaux, pesticides, sous-produits de désinfection), moins fréquent.\n\nLes résultats des analyses sont publiés sur le site du ministère de la Santé (https://sante.fr) et par les ARS. En cas de dépassement d\'une LQ, l\'ARS peut prendre des mesures de restriction ou d\'interdiction d\'utilisation de l\'eau, après avis du préfet.',
          sous_sections: []
        },
        {
          titre: '3. Autosurveillance de l\'exploitant',
          texte: 'L\'exploitant est responsable de la qualité de l\'eau qu\'il distribue (principe de responsabilité de l\'exploitant). L\'autosurveillance comprend les analyses réalisées en interne (laboratoire intégré) ou par un laboratoire accrédité, complémentaires au contrôle sanitaire officiel. Elle repose sur un Plan d\'Assurance Qualité (PAQ) ou un Système de Management de la Sécurité Sanitaire de l\'Eau (SMSSE) basé sur l\'approche HACCP (Hazard Analysis Critical Control Point) adapté aux systèmes d\'eau potable.\n\nLes paramètres suivis en continu par des analyseurs en ligne sont typiquement : turbidité (entrée et sortie filtre), chlore résiduel libre (sortie station et points réseau), pH, conductivité. Les paramètres analysés en laboratoire en fréquence quotidienne ou plurihebdomadaire comprennent : microbiologie (E. coli, colifomes totaux), nitrates, nitrites, chlore résiduel, turbidité. Des analyses spécifiques (pesticides, HAP, HAA, bromates) sont réalisées selon la périodicité définie dans le PAQ.',
          sous_sections: []
        },
        {
          titre: '4. Dépassement de limite et gestion de crise',
          texte: 'En cas de dépassement d\'une Limite de Qualité, la procédure est la suivante : (1) Confirmation de l\'anomalie par une contre-analyse immédiate (nouvelle prise d\'échantillon et analyse par le laboratoire) ; (2) Identification de la cause (incident de traitement, contamination, rupture de conduite, pollution à la source) ; (3) Mesures conservatoires immédiates (arrêt de la distribution du secteur concerné, mise en place d\'une alimentation de secours par camion-citerne ou interconnexion) ; (4) Information de l\'ARS dans les délais réglementaires (< 12 h pour les paramètres microbiologiques) ; (5) Information du public (mairie, abonnés) ; (6) Traitement correctif (rechloruration, ajustement de filière, isolement du tronçon) ; (7) Levée de la restriction après analyses de conformité par le contrôle sanitaire.\n\nUne contamination microbiologique (E. coli présent) est l\'urgence la plus grave : la distribution doit être immédiatement interrompue ou une recommandation de "faire bouillir l\'eau" émise dans l\'attente des mesures correctives. La chloration d\'urgence (super-chloration à 5-10 mg/L pendant 2 h minimum) permet d\'éliminer la contamination bactériologique dans le réseau.',
          sous_sections: []
        }
      ],
      points: [
        'LQ (Limites de Qualité) : impératives, dépassement = mesures correctives ou restriction de distribution',
        'RQ (Références de Qualité) : indicatives, dépassement = investigation mais pas d\'interdiction automatique',
        'Nitrates ≤ 50 mg/L, E. coli = 0/100 mL, turbidité ≤ 1 NTU, THM somme ≤ 100 μg/L',
        'Plomb ≤ 10 μg/L (entrée en vigueur complète en janvier 2028 en France)',
        'ARS : contrôle sanitaire officiel — fréquences selon volume distribué',
        'Autosurveillance exploitant : PAQ/SMSSE, approche HACCP adaptée à l\'eau potable',
        'Analyse en ligne continue : turbidité, chlore, pH, conductivité',
        'E. coli présent : urgence maximale, arrêt distribution ou recommandation de faire bouillir',
        'Super-chloration d\'urgence : 5-10 mg/L pendant 2 h pour décontamination réseau',
        'Information ARS < 12 h pour tout dépassement microbiologique LQ'
      ],
      formules: [
        'Turbidité : mesure en NTU (Nephelometric Turbidity Unit) par néphélométrie à 90° — LQ = 1 NTU en distribution',
        'Chlore résiduel : C = C_mesurée (méthode DPD colorimétrique ou ampérométrie) → LQ 0,1-0,3 mg/L réseau',
        'Nitrates : réaction avec l\'ion sulfamate et le chromotrope → dosage spectrophotométrique ; LQ = 50 mg/L',
        'Calcul de conformité bactériologique : 0 UFC/100 mL pour E. coli et entérocoques (LQ absolue)'
      ],
      retenir: 'Limites de Qualité · Références de Qualité · ARS · Contrôle sanitaire · Autosurveillance · PAQ · HACCP · E. coli · Nitrates 50 mg/L · Super-chloration · SMSSE'
    },
    exercices: [
      {
        n: '1',
        enonce: 'L\'analyse de l\'eau distribuée donne les résultats suivants : E. coli = 0 UFC/100 mL, nitrates = 46 mg/L, turbidité = 0,3 NTU, THM somme = 108 μg/L, aluminium = 280 μg/L. Identifier les dépassements (LQ ou RQ) et les actions requises.',
        solution: 'E. coli = 0 : CONFORME (LQ = 0 UFC/100 mL). Nitrates = 46 mg/L : CONFORME (LQ = 50 mg/L), mais proche — surveiller. Turbidité = 0,3 NTU : CONFORME (LQ = 1 NTU). THM somme = 108 μg/L : DÉPASSE la LQ de 100 μg/L → mesures correctives obligatoires : informer l\'ARS, identifier la cause (excès de chloration ? COT élevé ?), plan de correction (optimiser coagulation, réduire dose chlore, installer filtre CAG). Aluminium = 280 μg/L : dépasse la RQ de 200 μg/L → investigation requise (excès de coagulant Al, problème de filtre) mais pas de restriction automatique. Actions : correction rapide de la surdosage de coagulant + vérification du lavage des filtres.'
      },
      {
        n: '2',
        enonce: 'À quelle fréquence minimale une UDI (Unité de Distribution d\'eau) desservant 5 000 habitants doit-elle faire l\'objet d\'un contrôle microbiologique par l\'ARS ? (indicatif : 1 prélèvement microbiologique par 5 000 m³ distribués, débit ≈ 0,15 m³/hab/j)',
        solution: 'Volume distribué/j = 5 000 × 0,15 = 750 m³/j = 273 750 m³/an. Fréquence indicative (simplifiée) = 1 prélèvement par 5 000 m³ distribués en routine. Nombre de prélèvements microbiologiques par an = 273 750 / 5 000 = 54,75 ≈ 55 prélèvements/an, soit environ 1 prélèvement par semaine. En pratique, la réglementation définit précisément les programmes R et C par tranches de population (arrêté du 17 mars 2017) — environ 52 contrôles de routine et 2-4 contrôles complets par an pour une UDI de 5 000 habitants.'
      },
      {
        n: '3',
        enonce: 'Un technicien d\'astreinte reçoit le résultat d\'une analyse microbiologique urgente à 22h : E. coli = 18 UFC/100 mL dans l\'eau distribuée. Décrire la procédure à suivre dans les 2 heures suivantes.',
        solution: 'Procédure d\'urgence : (1) 22h : noter l\'heure de réception, le code d\'échantillon et le lieu de prélèvement. Appeler immédiatement le responsable d\'exploitation. (2) 22h15 : contre-analyse immédiate — prélèvement d\'urgence au même point + points supplémentaires (réservoir, sortie station, deux points réseau) envoyés au laboratoire de garde. (3) 22h30 : informer le maire de la commune (obligation réglementaire — il doit pouvoir alerter ses administrés) et l\'ARS (astreinte sanitaire ARS, < 12 h réglementaire mais si E. coli, l\'urgence justifie l\'appel immédiat). (4) Mesures conservatoires : augmenter la dose de chlore à la station (super-chloration à 3-5 mg/L) ; identifier le secteur concerné et les vannes d\'isolement si coupure nécessaire. (5) 23h : préparer l\'information publique (message SMS abonnés si système disponible, panneau en mairie) avec la recommandation "faire bouillir l\'eau". (6) Attendre les résultats de la contre-analyse pour confirmer ou infirmer et adapter les mesures.'
      },
      {
        n: '4',
        enonce: 'Qu\'est-ce que l\'approche HACCP appliquée à un système d\'eau potable (SMSSE) ? Donner un exemple concret d\'un Point Critique de Maîtrise (CCP) sur une filière de traitement.',
        solution: 'L\'approche HACCP (Hazard Analysis Critical Control Points) appliquée à l\'eau potable = Water Safety Plan (WSP), ou SMSSE en France. Elle consiste à : (1) Identifier tous les dangers (microbiologiques, chimiques, radiologiques) tout au long de la filière, de la ressource au robinet ; (2) Évaluer le risque (probabilité × gravité) pour chaque danger ; (3) Identifier les Points Critiques de Maîtrise (CCP) = étapes où une mesure de contrôle permet d\'éliminer ou réduire le risque à un niveau acceptable ; (4) Définir des limites critiques, des systèmes de surveillance et des actions correctives pour chaque CCP. Exemple de CCP : La chloration finale est un CCP pour les micro-organismes pathogènes. Limite critique : résiduel chlore libre ≥ 0,1 mg/L en sortie de station. Surveillance : analyseur en ligne, enregistrement continu. Action corrective si résiduel < 0,1 mg/L pendant > 5 min : alarme + augmentation automatique de la dose de chlore + prélèvement d\'urgence.'
      },
      {
        n: '5',
        enonce: 'La teneur en nitrates de l\'eau brute d\'un captage est de 55 mg/L (dépassement de la LQ de 50 mg/L). La commune ne dispose que de ce captage. Quelles solutions techniques et réglementaires existent ?',
        solution: 'Solutions techniques : (1) Mélange avec une eau de meilleure qualité : interconnexion avec un captage voisin ayant des nitrates < 35 mg/L pour diluer (ex. : 50 % × 55 + 50 % × 25 = 40 mg/L, conforme) ; (2) Traitement par échange ionique (résines échangeuses d\'anions NO₃⁻) ou nanofiltration / osmose inverse : traitement partiel (bypass) pour réduire la teneur → investissement significatif ; (3) Protection du bassin versant : réduction des apports azotés (MAE, conversion en bio, limitation épandages) — action long terme (10-20 ans pour réduction de la teneur). Solutions réglementaires : l\'ARS peut accorder une dérogation temporaire (3 ans renouvelables 1 fois) permettant la distribution d\'eau avec nitrates jusqu\'à 100 mg/L (double de la LQ) si : aucune solution alternative n\'est disponible, la santé publique n\'est pas mise en danger, et la commune met en œuvre des mesures correctives. Les nourrissons de moins de 3 mois ne doivent jamais consommer cette eau (méthémoglobinémie).'
      },
      {
        n: '6',
        enonce: 'Un réseau de distribution a des tuyaux en plomb dans des maisons construites avant 1948. La teneur en plomb au robinet est mesurée à 12 μg/L. Quelle est la LQ applicable et les actions requises ?',
        solution: 'LQ plomb au robinet : 25 μg/L jusqu\'au 25/12/2013, puis 10 μg/L (directive 2020/2184, transposée en France). La mesure de 12 μg/L DÉPASSE la LQ actuelle de 10 μg/L en France depuis le 12/01/2026 (ou 2028 selon la date de transposition définitive). Actions : (1) Informer les abonnés concernés du dépassement et de la recommandation de ne pas consommer l\'eau sans filtre certifié NSF/ANSI 53 ou sans faire couler l\'eau quelques secondes avant usage (purge du plomb stagnant) ; (2) Informer l\'ARS ; (3) Programme de remplacement des canalisations privées en plomb (participation possible de la commune via aide financière) — la réglementation interdit désormais l\'eau > 10 μg/L plomb ; (4) Note : la teneur dépend en grande partie des branchements PRIVÉS en plomb (intérieur de l\'immeuble) que la collectivité ne peut pas remplacer directement — communication et accompagnement des propriétaires est essentiel.'
      },
      {
        n: '7',
        enonce: 'Lors d\'un prélèvement de routine dans le réseau, la turbidité mesurée est 3,2 NTU (LQ = 1 NTU). Le technicien de l\'ARS note l\'anomalie. Quelles sont les causes possibles de cette turbidité élevée en réseau et les vérifications à effectuer ?',
        solution: 'Turbidité élevée en réseau (3,2 NTU > LQ 1 NTU) : plusieurs causes possibles. (1) Problème de traitement : vérifier la turbidité de sortie de station (si > 1 NTU dès la production, filtre colmaté ou lavage insuffisant) ; (2) Remise en suspension dans le réseau : travaux récents sur les conduites (ouverture, manipulation de vannes) qui remobilisent les dépôts accumulés dans la conduite ; (3) Corrosion de conduites en acier ou en fonte non revêtues : les dépôts d\'oxydes de fer (rouille) se détachent lors de variations de débit ; (4) Prolifération biologique (biofilm) dans une section de réseau stagnante ; (5) Contamination externe (intrusion d\'eau depuis le sol, coupure de pression ayant créé un vide d\'aspiration). Vérifications : turbidimètre en ligne sortie station, analyse microbiologique du point incriminé (turbidité élevée = risque de protection insuffisante), recherche de source de contamination, purge hydraulique de la section suspecte.'
      },
      {
        n: '8',
        enonce: 'Expliquer la différence entre un contrôle sanitaire de "routine" (R) et un contrôle "complet" (C). Donner 5 paramètres analysés uniquement dans le contrôle complet.',
        solution: 'Contrôle de routine (R) : programme allégé, fréquence élevée, vérifie que les paramètres essentiels sont maintenus dans les limites (microbiologie courante, paramètres de traitement faciles à mesurer). Paramètres typiques : E. coli, entérocoques, bactéries revivifiables à 22°C et 37°C, pH, turbidité, conductivité, nitrites, chlore résiduel. Contrôle complet (C) : bilan analytique exhaustif moins fréquent, couvre tous les paramètres réglementaires pour vérifier l\'absence de tout contaminant. Paramètres analysés UNIQUEMENT en contrôle complet (exemples) : (1) Pesticides et leurs métabolites (liste de 60+ molécules actives et métabolites) ; (2) Hydrocarbures aromatiques polycycliques (HAP) et HAP individuels (benzo[a]pyrène) ; (3) Trihalométhanes (chloroforme, bromodichlorométhane, dibromochlorométhane, bromoforme) et acides haloacétiques (HAA) ; (4) Métaux lourds complets (arsenic, cadmium, chrome, mercure, nickel, plomb, sélénium, antimoine) ; (5) Bromates (si ozonation), chlorates, chlorites.'
      }
    ]
  }

,

  'GEMEAU-078': {
    id: 'GEMEAU-078',
    titre: 'Traitement des eaux de piscines et d\'usages récréatifs',
    fiche: {
      intro: 'Les piscines publiques et les bassins d\'aqualoisirs sont des environnements aquatiques à risque bactériologique et chimique élevé : forte charge en baigneurs, apport continu de matières organiques, formation de sous-produits de chloration. Le technicien doit maîtriser le cycle de traitement, la surveillance de la qualité et la réglementation spécifique.',
      sections: [
        {
          titre: '1. Risques sanitaires des piscines',
          texte: 'Les piscines publiques accueillent une forte densité de baigneurs qui apportent des matières organiques (sueur, urine, matières fécales accidentelles, cosmétiques) et des micro-organismes (bactéries, virus, protozoaires). Les principaux risques infectieux sont : les infections cutanées et oculaires (Pseudomonas aeruginosa, cause d\'otites et de dermatites), les gastro-entérites virales (Norovirus, Rotavirus, résistants au chlore), les infections à Cryptosporidium (protozoaire résistant au chlore, transmis par contamination fécale), et les légionelloses (Legionella pneumophila dans les jacuzzis et pataugeoires à bulles, multiplication entre 25 et 45°C).\n\nLes risques chimiques sont liés aux sous-produits de la chloration des matières organiques apportées par les baigneurs : les chloramines (combinaison du chlore avec l\'ammoniaque excrétée dans l\'urine et la sueur) sont les principales. La chloramine trichlorée (NCl₃) est responsable des odeurs caractéristiques des piscines intérieures et des irritations des yeux et des voies respiratoires. La teneur en chlore combiné (chloramines) doit rester < 0,6 mg/L selon la réglementation française.',
          sous_sections: []
        },
        {
          titre: '2. Filière de traitement en piscine',
          texte: 'Le traitement de l\'eau de piscine est un cycle en boucle fermée avec apport d\'eau neuve (≥ 30 L/baigneur/j pour diluer les apports de matières organiques). Le cycle comprend : (1) Aspiration en fond et surface du bassin par les bacs tampons (skimmers, bonde de fond) ; (2) Préfiltration sur grilles ; (3) Pompage et mesure du débit ; (4) Coagulation (injection de sulfate d\'alumine ou PAC pour améliorer la rétention des matières organiques colloïdales sur le filtre) ; (5) Filtration sur sable (vitesse 10-25 m/h, plus rapide qu\'en AEP car l\'eau est pré-traitée) ; (6) Désinfection au chlore (injection de chlore liquide, hypochlorite de sodium, trichloroisocyanurate TCCA en galets, ou électrolyse au sel NaCl) ; (7) Ajustement du pH (acide/soude) ; (8) Retour dans les bassins par les refoulements de fond et paroi.\n\nLa durée de recirculation (débit de recirculation / volume du bassin) est réglementée : ≤ 4 h pour les bassins sportifs, ≤ 1-2 h pour les pataugeoires. L\'ozone ou les UV sont utilisés en traitement complémentaire pour améliorer l\'élimination des chloramines et des organismes résistants (Cryptosporidium).',
          sous_sections: []
        },
        {
          titre: '3. Paramètres de surveillance et normes',
          texte: 'La surveillance de l\'eau de piscine comprend des mesures en continu par automates et des analyses manuelles et de laboratoire. Paramètres réglementés selon l\'arrêté du 7 avril 1981 modifié (piscines ouvertes au public) : chlore actif libre = 0,4-1,5 mg/L (avec pH 7,0-7,4 pour l\'efficacité du HOCl) ; chloramines combinées < 0,6 mg/L ; pH = 6,9-7,7 ; turbidité < 0,5 NTU (visibilité fond du bassin obligatoire) ; température selon type de bassin (24-26°C bassin sportif, 27-30°C bassin d\'apprentissage) ; bactériologie selon l\'arrêté du 22 juin 2017 : Pseudomonas aeruginosa < 10 UFC/100 mL, Staphylocoques dorés < 10 UFC/100 mL, E. coli < 1 UFC/100 mL, entérocoques < 1 UFC/100 mL.\n\nL\'analyse de fond de bassin (prélèvement en fond de bassin pendant les plages de baignade) reflète la qualité réelle de l\'eau au contact des baigneurs.',
          sous_sections: []
        },
        {
          titre: '4. Gestion des incidents : fermeture et décontamination',
          texte: 'Un épisode de contamination fécale accidentelle (ECA) impose la fermeture immédiate du bassin. La procédure dépend de la nature de la contamination : (1) Selles formées : probabilité faible de Cryptosporidium, traitement par super-chloration possible (2-5 mg/L chlore libre pendant 30 min) ; (2) Selles liquides ou diarrhéiques : risque élevé de Cryptosporidium, résistant au chlore → fermeture, vidange et remplissage avec eau neuve, ou traitement UV haute dose 40 mJ/cm² (seule méthode efficace sur Cryptosporidium) + super-chloration.\n\nLa légionellose en jacuzzi/pataugeoire est prévenue par : température eau > 60°C dans les ballon tampons (destruction de Legionella à 60°C en 2 min), nettoyage hebdomadaire des buses, super-chloration mensuelle (5-10 mg/L pendant 2 h), analyse Legionella 2 fois/an minimum. Si Legionella > 1 000 UFC/L : fermeture + décontamination + analyse de conformité avant réouverture.',
          sous_sections: []
        }
      ],
      points: [
        'Chloramines : sous-produits chloration + ammoniaque, responsables odeurs piscines, irritations yeux',
        'Chlore libre actif piscine : 0,4-1,5 mg/L, pH 7,0-7,4 pour efficacité maximale',
        'Chlore combiné (chloramines) : < 0,6 mg/L (norme FR)',
        'Recirculation bassin sportif : ≤ 4 h ; pataugeoire : ≤ 1-2 h',
        'Cryptosporidium résistant au chlore : traitement UV haute dose 40 mJ/cm² obligatoire en cas d\'ECA',
        'Legionella : multiplication 25-45°C, prévention T° ballons > 60°C, analyse 2×/an',
        'Légionellose jacuzzi : risque élevé par aérosols, surveillance spécifique obligatoire',
        'ECA (Épisode de Contamination Accidentelle) : procédure de décontamination selon nature des selles',
        'Coagulation + filtration sable rapide (10-25 m/h) avant chloration',
        'Apport eau neuve : ≥ 30 L/baigneur/j pour diluer les apports organiques'
      ],
      formules: [
        'Indice de saturation de Langelier : IS = pH_mesuré - pH_sat ; pH_sat = pK₂ - pKs + p[Ca²⁺] + p[Alk] ; IS ≈ 0 = eau équilibrée',
        'Temps de recirculation : t_recirc = V_bassin / Q_recirculation → [h] ; normes : ≤ 4 h bassin sportif',
        'Dose UV pour Cryptosporidium : 40 mJ/cm² minimum (réduction ≥ 3 log selon WHO)',
        'Chloramines totales = chlore total - chlore libre ≥ 0 → [mg/L]'
      ],
      retenir: 'Chloramines · Chlore libre 0,4-1,5 mg/L · pH 7,0-7,4 · Cryptosporidium · UV 40 mJ/cm² · Legionella · ECA · Recirculation · Pataugeoire · 30 L/baigneur/j'
    },
    exercices: [
      {
        n: '1',
        enonce: 'L\'analyse de l\'eau d\'une piscine donne : chlore total = 1,9 mg/L, chlore libre = 1,2 mg/L, pH = 7,2. Calculer le chlore combiné et vérifier la conformité réglementaire.',
        solution: 'Chlore combiné = chlore total - chlore libre = 1,9 - 1,2 = 0,7 mg/L. Norme française : chlore combiné < 0,6 mg/L → NON CONFORME (0,7 > 0,6). Chlore libre = 1,2 mg/L : CONFORME (plage 0,4-1,5 mg/L). pH = 7,2 : CONFORME (6,9-7,7). Cause probable du dépassement en chlore combiné : charge trop élevée en baigneurs, apports importants d\'urine/sueur, ventilation insuffisante. Actions : augmenter l\'apport d\'eau neuve (> 30 L/baigneur/j), améliorer la ventilation, vérifier le débit de recirculation, envisager le traitement complémentaire à l\'ozone ou UV pour détruire les chloramines accumulées.'
      },
      {
        n: '2',
        enonce: 'Un bassin de 500 m³ doit être recirculé en moins de 4 h. Quel est le débit minimal de recirculation ? Quelle pompe faut-il prévoir (HMT du circuit de filtration = 8 m) ?',
        solution: 'Débit minimal : Q = V / t = 500 / 4 = 125 m³/h. Pompe : Q = 125 m³/h, HMT = 8 m. En ajoutant une marge de 20 % sur le débit : Q_pompe = 1,2 × 125 = 150 m³/h. Puissance hydraulique : Ph = 1 000 × 9,81 × (150/3 600) × 8 = 3 270 W ≈ 3,3 kW. Avec un rendement pompe + moteur de 65 % : Pa = 3 300/0,65 = 5,1 kW. Choisir une pompe centrifuge de 5,5 kW, Q nominal 150 m³/h, HMT 8-10 m, corps inox ou bronze (résistance au chlore), joints mécaniques en graphite/céramique.'
      },
      {
        n: '3',
        enonce: 'Lors d\'un contrôle, un technicien trouve des selles liquides au fond d\'un bassin de baignade. Décrire la procédure complète de gestion de cet ECA.',
        solution: 'Procédure ECA selles liquides (risque Cryptosporidium) : (1) Fermeture immédiate du bassin, sortie de tous les baigneurs. (2) Information des baigneurs présents (recommandation de se doucher). (3) Retrait physique de l\'excréta (épuisette, aspirateur fond de bassin) en évitant de le diluer. (4) Évaluation : selles liquides = risque élevé Cryptosporidium → super-chloration INSUFFISANTE. (5) Option 1 (traitement UV haute dose) : injection UV 40 mJ/cm² minimum sur tout le volume du bassin recirculé + super-chloration à 5 mg/L pendant 6 h minimum. Volume d\'UV requis = volume bassin × 3 recirculations. (6) Option 2 : vidange complète + nettoyage des surfaces + remplissage à l\'eau neuve (traitée). (7) Avant réouverture : analyse turbidité (< 0,5 NTU), analyse microbiologique (48h pour résultats), contrôle des paramètres chimiques. (8) Documentation : rapport d\'incident, déclaration à l\'ARS si > 24 h de fermeture selon réglementation locale.'
      },
      {
        n: '4',
        enonce: 'Expliquer pourquoi l\'efficacité du chlore en piscine est fortement liée au pH. Quelles conséquences pratiques pour l\'exploitant ?',
        solution: 'Le chlore en solution aqueuse existe sous deux formes : HOCl (acide hypochloreux, actif) et OCl⁻ (ion hypochlorite, peu actif). L\'équilibre HOCl ⇌ OCl⁻ + H⁺ est pH-dépendant : à pH 7,0 → 80 % HOCl actif ; à pH 7,5 → 50 % HOCl ; à pH 8,0 → 20 % HOCl. Conséquences : (1) À pH > 8 : pour la même concentration totale de chlore, l\'efficacité désinfectante est 4× réduite vs pH 7 — risque bactériologique accru. (2) À pH < 7 : l\'eau est corrosive (attaque les équipements en métal, inox, béton) et irritante pour les yeux (muqueuses). (3) L\'ajout de chlore (acide) abaisse le pH ; l\'ajout de soude relève le pH. Gestion pratique : surveiller pH en continu (sonde pH en ligne) et réguler par injection automatique d\'acide chlorhydrique HCl dilué ou CO₂ (si pH > 7,4) ou de carbonate/bicarbonate de sodium (si pH < 7,0). Plage cible : pH 7,0-7,4 pour maximiser l\'efficacité du chlore tout en préservant le confort des baigneurs.'
      },
      {
        n: '5',
        enonce: 'Un jacuzzi public (volume 15 m³, 8 utilisateurs en simultané) présente une analyse Legionella de 2 500 UFC/L (seuil d\'action : > 1 000 UFC/L). Quelles mesures immédiates ?',
        solution: '2 500 UFC/L > 1 000 UFC/L = seuil d\'action. Mesures immédiates : (1) Fermeture immédiate du jacuzzi. (2) Information de l\'ARS et de l\'exploitant (obligation réglementaire). (3) Décontamination : super-chloration à 10-15 mg/L de chlore libre pendant 2 heures minimum (toutes les buses actives pour que le chlore atteigne les circuits). (4) Nettoyage et désinfection des filtres, des buses, des surfaces. (5) Vidange partielle et renouvellement d\'eau neuve. (6) Vérification de la température du ballon tampon (doit être > 60°C en permanence). (7) Analyse de contrôle 48 h après décontamination. (8) Réouverture uniquement après résultat < 1 000 UFC/L. (9) Enquête épidémiologique si des cas de légionellose sont signalés parmi les anciens utilisateurs (déclaration obligatoire MDO Maladies à Déclaration Obligatoire).'
      },
      {
        n: '6',
        enonce: 'Calculer la dose de chlore actif à injecter pour maintenir [Cl_libre] = 1,0 mg/L dans un bassin de 800 m³ recirculé 5 fois par jour, sachant que la demande en chlore du circuit est 0,8 mg/L par passage. Volume d\'eau neuve quotidien = 40 m³.',
        solution: 'Débit de recirculation : Q_recirc = 800 × 5 = 4 000 m³/j. Consommation chlore par recirculation = demande 0,8 mg/L. Masse chlore consommée par recirculation : 4 000 × 0,8 × 10⁻³ × 1 000 = 3 200 g/j = 3,2 kg/j. Volume eau neuve apporte du chlore ? Si l\'eau neuve est chlorée à 0,3 mg/L (chlore résiduel réseau) : apport = 40 m³ × 0,3 g/m³ × 1 000 = 12 000 g... non, = 40 × 0,3 = 12 g/j, négligeable. Pour maintenir 1,0 mg/L de résiduel dans le bassin (800 m³) : stock cible = 800 × 1,0 × 10⁻³ × 1 000 = 800 g dans le bassin. Dose quotidienne à injecter ≈ 3 200 g/j (consommation) + compensation pertes = 3,2 kg/j de chlore actif. En eau de Javel à 9,6 % de Cl actif (densité 1,12 kg/L) : volume = 3 200 / (96 × 1 120 / 1 000) = 3 200 / 107,5 ≈ 29,8 L/j.'
      },
      {
        n: '7',
        enonce: 'Qu\'est-ce que l\'indice de Langelier et pourquoi est-il important pour la gestion de l\'eau d\'une piscine ?',
        solution: 'L\'indice de Langelier (IL) mesure l\'état d\'équilibre de l\'eau vis-à-vis du carbonate de calcium : IL = pH mesuré - pH de saturation (pH_s). pH_s dépend de [Ca²⁺], [HCO₃⁻] (alcalinité), TDS et température. Interprétation : IL ≈ 0 (±0,3) = eau équilibrée, ni incrustante ni corrosive. IL > 0,3 = eau incrustante (dépose du calcaire sur les parois, les filtres, les pompes, les buses de jacuzzi — obstruction progressive). IL < -0,3 = eau corrosive (attaque le béton du bassin, les équipements métalliques, provoque des piqûres dans le béton). En piscine, l\'eau chaude (30°C) et les apports de bicarbonates par les baigneurs peuvent dériver l\'IL. La gestion consiste à doser l\'acide ou la soude et à surveiller l\'alcalinité totale (TH) et la dureté pour maintenir IL entre -0,3 et +0,3. Un IL mal géré est source de dommages coûteux sur le génie civil de la piscine.'
      },
      {
        n: '8',
        enonce: 'Donner les avantages et inconvénients de l\'électrolyse au sel (NaCl) comme système de production de chlore en piscine, par rapport à l\'eau de Javel.',
        solution: 'Électrolyse au sel (NaCl → Cl₂ in situ) — avantages : (1) Pas de manipulation de produit chimique dangereux (pas de stockage d\'eau de Javel) → sécurité améliorée, pas d\'obligation de ventilation de local de stockage ; (2) Production de chlore en continu, ajustable selon la fréquentation réelle ; (3) Eau plus douce pour les baigneurs (pH naturellement plus stable, moins d\'irritations) ; (4) Coût d\'exploitation réduit à moyen terme. Inconvénients : (1) Investissement initial élevé (cellule d\'électrolyse coûteuse, remplacement tous les 3-5 ans selon usage) ; (2) Nécessite une teneur en sel dans le bassin de 3-6 g/L NaCl (eau légèrement salée, goût perceptible) → corrosion accélérée des équipements métalliques et du béton non adapté ; (3) Efficacité réduite en eau froide (< 10°C) ; (4) Formation accrue de chlorates ClO₃⁻ (sous-produit de l\'électrolyse) selon la qualité de la cellule ; (5) Entartrage des cellules en eau dure — nécessite détartrage régulier (acide dilué).'
      }
    ]
  },

  'GEMEAU-079': {
    id: 'GEMEAU-079',
    titre: 'Assainissement collectif : collecte des eaux usées',
    fiche: {
      intro: 'L\'assainissement collectif assure la collecte, le transport et le traitement des eaux usées domestiques et industrielles avant leur rejet dans le milieu naturel. La conception et l\'exploitation des réseaux de collecte exigent la maîtrise de l\'hydraulique à surface libre, des techniques de pose et de la surveillance en exploitation.',
      sections: [
        {
          titre: '1. Types de réseaux d\'assainissement',
          texte: 'Il existe deux types principaux de réseaux d\'assainissement : (1) Le réseau unitaire : collecte dans la même conduite les eaux usées domestiques (EU) et les eaux pluviales (EP). Avantage : coût de construction plus faible (une seule canalisation). Inconvénient : lors des pluies, le volume de débit peut multiplier par 5-20 celui du temps sec, dépassant les capacités de la STEP et entraînant des déversements non traités (déversoirs d\'orage, DO) dans le milieu naturel. Les DO sont réglementés par la directive eaux résiduaires urbaines (DERU) et le SDAGE. (2) Le réseau séparatif : deux réseaux distincts, l\'un pour les EU (acheminées à la STEP) et l\'autre pour les EP (généralement rejetées directement dans le milieu naturel après éventuelle décantation). Les EU seules sont traitées en station, mais des connexions inversées (eaux claires parasites) sont fréquentes et dégradent les performances.',
          sous_sections: []
        },
        {
          titre: '2. Hydraulique des collecteurs gravitaires',
          texte: 'Les collecteurs d\'assainissement gravitaires fonctionnent à surface libre en régime permanent uniforme, décrit par la formule de Manning-Strickler : Q = K_s × S_m × R_h^(2/3) × I^(1/2), où K_s est le coefficient de rugosité (K_s = 70 m^(1/3)/s pour le béton lisse, 100 pour le PVC, 85 pour le grès), S_m la section mouillée, R_h le rayon hydraulique et I la pente hydraulique.\n\nLes sections annulaires circulaires (tubes béton ou PVC) sont dimensionnées pour que le débit de pleine section soit supérieur au débit de pointe, mais avec un remplissage limité à 70-80 % en régime permanent (lame d\'air obligatoire au-dessus du niveau d\'eau pour éviter les conditions anaérobies et la mise en pression accidentelle). La vitesse minimale d\'auto-curage est 0,6 m/s (vitesse minimale pour que les matières en suspension restent en transit sans se déposer). La vitesse maximale est 3-4 m/s pour limiter l\'érosion des parois.',
          sous_sections: []
        },
        {
          titre: '3. Eaux claires parasites et intrusions',
          texte: 'Les eaux claires parasites (ECP) sont des apports d\'eaux non usées dans le réseau EU : eaux de drainage de terrains, eaux de nappes s\'infiltrant dans les joints des collecteurs vieillissants (ECP permanentes ou saisonnières selon le niveau de la nappe), eaux pluviales entrant par des mauvaises connexions chez les particuliers ou au niveau des regards. Elles augmentent inutilement le débit à traiter à la STEP, diluent les effluents (effets négatifs sur le traitement biologique), et peuvent provoquer des surcharges hydrauliques en période pluvieuse.\n\nLa quantification des ECP se fait par la méthode du débit de nuit (mesure entre 0h et 5h du matin, quand la consommation d\'eau domestique est quasi nulle — tout débit mesuré = ECP) ou par le rapport DO vs DBO₅/DCO (une eau diluée par les ECP a un rapport DBO₅/DCO plus faible). La réhabilitation des collecteurs vieillissants (tubage PVC, chemisage par résine) est la solution durable pour réduire les ECP d\'infiltration.',
          sous_sections: []
        },
        {
          titre: '4. Postes de relevage et assainissement sous pression',
          texte: 'Quand la topographie ne permet pas le transit gravitaire jusqu\'à la STEP (terrain plat, point bas, zone en contrebas), un poste de relevage (PR) pompe les eaux usées vers un point plus haut d\'où elles peuvent reprendre le transit gravitaire. Le PR comprend : bâche de pompage (volume utile ≥ 10-30 min de débit de pointe pour limiter le nombre de démarrages), pompes de relèvement (pompes submersibles, généralement 2 en alternance), vanne de protection anti-bélier, conduite de refoulement (PR) entre le PR et le regard de chute.\n\nLes caractéristiques de la pompe de relèvement sont différentes des pompes AEP : elle doit résister aux matières en suspension (fibres, sables, graisses) — roue vortex ou canaux libres (passage libre ≥ 80-100 mm pour les grosses pompes). L\'odeur et le H₂S sont des problèmes majeurs dans les PR : le temps de séjour des EU dans la bâche et la conduite de refoulement ne doit pas excéder 2-3 h (risque d\'anaérobie, fermentation putride, H₂S corrosif pour le béton et toxique).',
          sous_sections: []
        }
      ],
      points: [
        'Réseau unitaire : EU + EP ensemble, risque déversement par DO en pluie, réseau ancien',
        'Réseau séparatif : EU seules traitées, EP rejetées milieu naturel, réseau récent',
        'Manning-Strickler : Q = Ks × Sm × Rh^(2/3) × I^(1/2) — formule de base hydraulique gravitaire',
        'Ks béton lisse = 70 m^(1/3)/s ; PVC = 100 ; grès = 85',
        'Remplissage max collecteur : 70-80 % en régime permanent (lame d\'air obligatoire)',
        'Vitesse auto-curage : V_min = 0,6 m/s pour maintenir les MES en suspension',
        'ECP (Eaux Claires Parasites) : diluent les effluents, surchargent la STEP hydrauliquement',
        'Quantification ECP : débit de nuit (0h-5h) ou ratio DBO5/DCO dégradé',
        'Poste de relevage : bâche + pompes submersibles vortex, temps séjour < 2-3 h',
        'H₂S dans PR : corrosif béton, toxique, détecteur obligatoire avant entrée'
      ],
      formules: [
        'Manning-Strickler : Q = Ks × Sm × Rh^(2/3) × I^(1/2) → [m³/s] ; Rh = Sm/Pm (rayon hyd.), I = pente [m/m]',
        'Rayon hydraulique circulaire plein : Rh = D/4 → [m] ; Sm = πD²/4',
        'Vitesse d\'auto-curage : V_min = Q / Sm ≥ 0,6 m/s',
        'Section mouillée partielle (taux remplissage τ = h/D) : calcul par abaque ou trigonométrie'
      ],
      retenir: 'Réseau unitaire · Réseau séparatif · Manning-Strickler · Ks · Rh · Auto-curage 0,6 m/s · ECP · Déversoir d\'orage · Poste de relevage · H₂S · Vortex'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un collecteur béton DN400 plein (Ks = 70 m^(1/3)/s) a une pente I = 3 ‰ (0,003 m/m). Calculer le débit en pleine section et la vitesse.',
        solution: 'Sm = π × 0,40²/4 = 0,1257 m². Pm = π × 0,40 = 1,257 m. Rh = Sm/Pm = 0,1257/1,257 = 0,10 m. V = Ks × Rh^(2/3) × I^(1/2) = 70 × 0,10^(2/3) × 0,003^(1/2) = 70 × 0,2154 × 0,05477 = 0,826 m/s. Q = V × Sm = 0,826 × 0,1257 = 0,1038 m³/s = 374 m³/h. Vérification auto-curage : V = 0,826 m/s > 0,6 m/s ✓. Ce collecteur peut transporter 374 m³/h en pleine section avec auto-curage assuré.'
      },
      {
        n: '2',
        enonce: 'Même collecteur que l\'exercice précédent. Le débit de pointe par temps de pluie est Q_PP = 180 m³/h. Quel est le taux de remplissage ? Est-il compatible avec la lame d\'air réglementaire ?',
        solution: 'Q_PP = 180 m³/h = 0,050 m³/s. Q_plein = 0,1038 m³/s. Ratio Q/Q_plein = 0,050/0,1038 = 0,482. Par abaque ou table de Manning partielle, Q/Q_plein = 0,48 correspond à un taux de remplissage h/D ≈ 0,52 = 52 %. Ce taux est nettement inférieur à 80 % → lame d\'air largement suffisante ✓. En temps sec, si Q = 30 m³/h (0,0083 m³/s), ratio = 0,08, h/D ≈ 0,20 — vitesse probablement insuffisante pour l\'auto-curage à ce faible remplissage : risque de dépôt nocturne.'
      },
      {
        n: '3',
        enonce: 'Un technicien mesure le débit nocturne (2h-4h) d\'un secteur EU séparatif de 1 200 branchements : 85 m³/h. La consommation d\'eau potable nocturne habituelle est 0,15 L/h par habitant (2,3 habitants/branchement en moyenne). Estimer le volume annuel d\'ECP.',
        solution: 'Consommation nocturne estimée = 1 200 × 2,3 × 0,15 = 414 L/h = 0,41 m³/h. ECP estimées = 85 - 0,41 = 84,6 m³/h ≈ 85 m³/h (la contribution des eaux usées nocturnes est quasi négligeable). Volume annuel d\'ECP = 85 × 8 760 = 744 600 m³/an. Si la STEP a une capacité de 500 m³/j de temps sec, les ECP représentent 85 × 24 = 2 040 m³/j = 4× la charge normale → la STEP est surchargée hydrauliquement 24h/24h par les ECP, ce qui est inacceptable et explique la mauvaise performance de traitement (by-pass fréquents).'
      },
      {
        n: '4',
        enonce: 'Un poste de relevage doit pomper 60 m³/h vers une STEP distante de 800 m, avec une différence de hauteur statique de 5 m. Le diamètre de la conduite de refoulement est DN100. Calculer la HMT totale (pertes de charge linéaires : J = 15 mmCE/m pour ce diamètre et ce débit).',
        solution: 'Hauteur statique : Hstat = 5 m. Pertes de charge linéaires : ΔH_lin = J × L = 0,015 × 800 = 12 m. Pertes de charge singulières (estimer à 20 % des pertes linéaires) : ΔH_sing = 0,2 × 12 = 2,4 m. HMT totale = Hstat + ΔH_lin + ΔH_sing = 5 + 12 + 2,4 = 19,4 m ≈ 20 m. Vitesse dans la conduite : S = π × 0,10²/4 = 7,85 × 10⁻³ m². V = (60/3 600)/7,85×10⁻³ = 2,12 m/s. Attention : V > 2 m/s peut être limite pour l\'usure et le bruit — vérifier si DN125 serait préférable.'
      },
      {
        n: '5',
        enonce: 'Pourquoi le H₂S est-il particulièrement problématique dans les postes de relevage eaux usées ? Comment le prévenir et le détecter ?',
        solution: 'H₂S dans les postes de relevage EU : (1) Formation : dans les bâches de pompage, le temps de séjour des EU (eaux organiques riches) peut dépasser 1-2 h. En anaérobie (absence d\'O₂ dans le fond de la bâche), les bactéries sulfato-réductrices (BSR) réduisent les sulfates SO₄²⁻ naturellement présents dans les EU en H₂S (hydrogène sulfuré). (2) Toxicité : H₂S est extrêmement toxique. VLEP 8h = 1 ppm, CT (danger immédiat pour la vie) ≈ 300 ppm. À forte concentration (> 1 000 ppm), il anesthésie instantanément le nerf olfactif — une personne croit que l\'odeur disparaît alors que la concentration continue de monter. (3) Corrosion : H₂S + humidité → acide sulfurique H₂SO₄ par oxydation par les bactéries Acidithiobacillus, qui attaque le béton (biocorrosion). Les collecteurs en béton peuvent perdre plusieurs mm de paroi par an. Prévention : maintenir le temps de séjour < 2 h (débit de recirculation), aération forcée de la bâche, injection d\'oxygène ou de nitrates pour maintenir des conditions aérobies, utilisation de béton BAC (Béton Armé de Ciment avec ciment sulfato-résistant) ou de revêtement époxy. Détection : détecteur fixe H₂S dans le PR (alarme à 5 ppm), détecteur portatif multigaz obligatoire pour toute entrée dans la bâche.'
      },
      {
        n: '6',
        enonce: 'Définir les termes : débit de temps sec (QTS), débit de pointe (QP), débit par temps de pluie (QTPP), et déversoir d\'orage (DO). Comment le DO est-il réglementé en France ?',
        solution: 'QTS (Débit de Temps Sec) : débit moyen des eaux usées domestiques par temps sec, hors pluie. Évalué à 150-200 L/j/habitant (= 0,17 L/s pour 1 000 habitants). QP (Débit de Pointe) : débit maximum instantané des EU domestiques, en période de pointe (matin 7h-9h, midi, soir 18h-20h). Coefficient de pointe Cp = QP/QM : pour une population de 1 000 habitants, Cp ≈ 2,5-3 ; pour 10 000 habitants, Cp ≈ 2,0. QTPP (Débit par Temps de Pluie) : débit dans un réseau unitaire ou un réseau séparatif avec ECP pluviales — peut représenter 5-20× QTS selon le coefficient d\'imperméabilisation du bassin versant. DO (Déversoir d\'Orage) : ouvrage placé sur un réseau unitaire qui déverse l\'excédent de débit directement dans le milieu naturel (rivière) quand le débit dépasse la capacité de transit vers la STEP (généralement 3-5× QTS). Réglementation française : la directive ERU (91/271/CEE) impose des DO conformes avec surveillance et déclaration des déversements. L\'arrêté du 21 juillet 2015 impose un bilan annuel des rejets des DO par les exploitants.'
      },
      {
        n: '7',
        enonce: 'Qu\'est-ce que l\'inspection télévisée (ITV) d\'un collecteur ? À quoi sert-elle et quelles anomalies peut-elle détecter ?',
        solution: 'L\'inspection télévisée (ITV) consiste à introduire dans le collecteur une caméra montée sur un chariot automoteur télécommandé depuis la surface. Le technicien guide la caméra depuis un camion équipé d\'un écran et d\'un système d\'enregistrement, et avance le long du collecteur en filmant les parois internes. Utilisation : (1) Diagnostic de l\'état des collecteurs (avant réhabilitation) ; (2) Localisation des entrées d\'eau parasite (infiltrations visibles) ; (3) Contrôle de la bonne pose après travaux (alignement, joints). Anomalies détectables : fissures (transversales, longitudinales, en anneau), cassures, déformations ovalisantes (conduite plastique déformée par charge extérieure), affaissement, décollement de joint (entrée d\'eau visible), dépôts de tartre ou de graisses, racines d\'arbres envahissantes, décalage de joint (décalage amont/aval créant un marche intérieure), infiltration active (eau entrant en filet depuis l\'extérieur = entrée d\'ECP). Les résultats sont codifiés selon la norme EN 13508 (classe d\'observations) et permettent d\'établir un plan de réhabilitation priorisé.'
      },
      {
        n: '8',
        enonce: 'Calculer le volume de la bâche de pompage d\'un poste de relevage pour un débit d\'apport maximal de 80 m³/h, avec une pompe de débit Qpompe = 100 m³/h, un nombre de démarrages maximal de 8 par heure et une marge de sécurité de 20 % sur le volume calculé.',
        solution: 'Formule volume bâche utile (cycle on/off) : V_utile = Qapport × (Qpompe - Qapport) / (Qpompe × n_max) × 60, avec n_max = démarrages/heure. V_utile = 80 × (100 - 80) / (100 × 8) × 60 = 80 × 20 / 800 × 60 = 1 600 / 800 × 60 = 2 × 60 = 120 L × ... Reprenons en m³/h : V = (Q_apport × (Q_pompe - Q_apport)) / (Q_pompe × n) = (80 × 20) / (100 × 8) = 1 600 / 800 = 2 m³. Avec marge de sécurité 20 % : V_bâche = 1,20 × 2 = 2,4 m³. Vérification : temps marche = V/Q_pompe_sortie = 2/(100-80) = 0,10 h = 6 min ; temps arrêt = V/Q_apport = 2/80 = 0,025 h = 1,5 min ; cycle = 7,5 min → 60/7,5 = 8 démarrages/h ✓.'
      }
    ]
  },

  'GEMEAU-080': {
    id: 'GEMEAU-080',
    titre: 'Station d\'épuration des eaux usées urbaines',
    fiche: {
      intro: 'La station d\'épuration (STEP) traite les eaux usées collectées pour en éliminer les polluants avant rejet dans le milieu naturel. Les filières de traitement sont choisies selon la nature et la quantité des pollutions, la taille de la station et les objectifs de rejet fixés par l\'arrêté de rejet. Le technicien BTS GEMEAU doit maîtriser les filières biologiques et les procédés de traitement des boues.',
      sections: [
        {
          titre: '1. Paramètres de pollution et unités',
          texte: 'La pollution des eaux usées domestiques est caractérisée par plusieurs paramètres. La DBO₅ (Demande Biochimique en Oxygène sur 5 jours à 20°C) mesure la matière organique biodégradable oxydée par les micro-organismes dans l\'obscurité pendant 5 jours. Elle exprime la pollution organique facilement assimilable. La DCO (Demande Chimique en Oxygène) mesure l\'ensemble de la matière oxydable (biodégradable + récalcitrante) par oxydation chimique au dichromate. Le rapport DBO₅/DCO de l\'eau brute domestique est de 0,5-0,6 (eau biodégradable) ; une valeur < 0,3 signale la présence d\'inhibiteurs ou de composés récalcitrants.\n\nLes matières en suspension (MES) sont les matières retenues par un filtre de 0,45 μm, exprimées en mg/L. Les nutriments sont l\'azote total Kjeldahl (NTK = azote organique + ammonium NH₄⁺) et le phosphore total (Ptot = phosphore organique + orthophosphate PO₄³⁻). La capacité d\'une station est exprimée en Équivalent-Habitant (EH) : 1 EH = 60 g DBO₅/j (norme européenne) ou 54 g DBO₅/j selon la DERU.',
          sous_sections: []
        },
        {
          titre: '2. Filière de traitement biologique',
          texte: 'La filière classique d\'une STEP urbaine comprend : (1) Prétraitements : dégrillage (grilles grossières et fines pour éliminer les macro-déchets), dessablage (bassin à vitesse réduite pour sédimenter les sables, pente > 0,2 mm), déshuilage (bullage d\'air pour flotter les graisses) ; (2) Décantation primaire : bassin de décantation laminaire pour éliminer les MES décantables (50-60 % des MES, 25-35 % de la DBO₅) ; (3) Traitement biologique : bassin d\'aération (boues activées) où des micro-organismes (flocs bactériens en suspension) oxydent la matière organique résiduelle en présence d\'oxygène fourni par des aérateurs de surface ou des diffuseurs à bulles fines immergés. L\'oxygène dissous doit rester > 1,5-2 mg/L dans le bassin d\'aération.\n\nLe réacteur biologique peut être conçu pour l\'élimination des nutriments (procédés nitrification-dénitrification pour l\'azote, précipitation biologique du phosphore). (4) Clarification secondaire (décanteur secondaire) : séparation des boues biologiques du liquide traité ; (5) Désinfection en sortie (UV ou chloration si exigée par l\'arrêté) ; (6) Rejet en milieu naturel.',
          sous_sections: []
        },
        {
          titre: '3. Indicateurs de performance biologique',
          texte: 'La charge massique (Cm) et la charge volumique (Cv) sont les deux paramètres clés du dimensionnement du bassin d\'aération. La charge massique Cm = masse de DBO₅ entrante / (masse de boues × jour) exprimée en kg DBO₅/(kg MVS·j). La charge volumique Cv = masse DBO₅/(m³ de bassin·j). Pour les boues activées en faible charge (Cm < 0,1 kg/kg/j), la nitrification est obtenue et les boues sont très bien stabilisées, mais le bassin doit être grand. Pour les boues activées en charge moyenne (Cm = 0,1-0,25 kg/kg/j), bonne élimination de la DBO₅ mais nitrification limitée.\n\nL\'Indice de Boues de Mohlman (IB ou SVI : Sludge Volume Index) caractérise la décantabilité des boues en mL/g : IB = volume des boues après 30 min de décantation en éprouvette / concentration en MES. IB < 100 mL/g = boues qui décantent bien ; IB 100-200 mL/g = décantabilité moyenne ; IB > 200 mL/g = boues filamenteuses (problème de bulking) qui rendent la clarification difficile.',
          sous_sections: []
        },
        {
          titre: '4. Traitement des boues',
          texte: 'Les boues produites par une STEP (boues primaires + boues secondaires = boues mixtes) sont très chargées en eau (siccité initiale < 1 % MS) et doivent être traitées avant valorisation ou élimination. Les étapes sont : (1) Épaississement gravitaire (silo ou table épaississeuse : siccité 3-6 % MS) ; (2) Stabilisation : digestion anaérobie (méthanisation, production de biogaz CH₄ = énergie valorisable) ou digestion aérobie (moins courant, énergivore) ou chaulage (stabilisation chimique, simple mais produit beaucoup de matière) ; (3) Déshydratation mécanique (filtre à bandes, filtre-presse, centrifugeuse : siccité 18-25 % MS) ; (4) Séchage thermique si nécessaire (siccité > 90 % MS pour épandage ou incinération).\n\nLa valorisation des boues respecte les exigences réglementaires de l\'arrêté du 8 janvier 1998 (épandage agricole avec plan d\'épandage et analyses métaux + microbiologie), de l\'incinération (en cimenterie ou unité dédiée) ou de la mise en décharge (classes 2 ou 1 selon les teneurs en contaminants).',
          sous_sections: []
        }
      ],
      points: [
        'DBO₅ : 60 g/EH/j — pollution organique biodégradable',
        'DCO : matière organique totale oxydable ; DBO₅/DCO > 0,5 = eau biodégradable',
        'MES : matières en suspension > 0,45 μm, en mg/L',
        'Dégrillage + dessablage + déshuilage : prétraitements essentiels',
        'Boues activées : oxydation biologique de la MO par flocs bactériens en suspension',
        'O₂ dissous bassin aération : maintenir > 1,5-2 mg/L pour l\'activité biologique',
        'Charge massique Cm = kg DBO₅ / (kg MVS × j) — pilotage du bassin d\'aération',
        'IB (Mohlman) : < 100 mL/g = bonne décantabilité ; > 200 = bulking filamenteux',
        'Digestion anaérobie (méthanisation) : stabilisation boues + production biogaz CH₄',
        'Arrêté 8 janvier 1998 : réglemente l\'épandage agricole des boues de STEP'
      ],
      formules: [
        'Charge massique : Cm = (Q × C_DBO5) / (V × C_MVS) → [kg DBO₅/(kg MVS·j)] ; Q [m³/j], C [kg/m³]',
        'Charge volumique : Cv = (Q × C_DBO5) / V → [kg DBO₅/(m³·j)]',
        'Âge des boues : θc = (V × C_MVS) / (Q_boues × C_MVS_boues) → [j]',
        'SVI (Indice de Mohlman) : IB = V_30min [mL] × 1 000 / C_MES [mg/L] → [mL/g]'
      ],
      retenir: 'DBO₅ · DCO · MES · EH · Dégrillage · Dessablage · Boues activées · O₂ > 1,5 mg/L · Charge massique · IB Mohlman · Digestion anaérobie · Arrêté 1998'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une STEP reçoit Q = 3 000 m³/j d\'eaux usées avec C_DBO5 = 220 mg/L. Calculer la charge en DBO₅ en kg/j et la population équivalente.',
        solution: 'Masse DBO₅/j = 3 000 × 220 × 10⁻³ = 660 kg DBO₅/j (rappel : 1 m³ × mg/L = 1 g, donc × 10⁻³ pour kg). Population équivalente = 660 × 10³ g / 60 g/EH = 11 000 EH. Cette STEP dessert une agglomération équivalente à 11 000 habitants en termes de charge organique. La capacité hydraulique (3 000 m³/j) et la charge DBO₅ (11 000 EH) doivent être vérifiées ensemble dans la conception de la filière.'
      },
      {
        n: '2',
        enonce: 'Le bassin d\'aération d\'une STEP a V = 1 200 m³, C_MVS = 3 g/L, Q = 2 500 m³/j, C_DBO5 entrée = 250 mg/L. Calculer la charge massique Cm et évaluer si la nitrification est attendue.',
        solution: 'Masse MVS dans le bassin : V × C_MVS = 1 200 × 3 = 3 600 kg MVS. Charge DBO₅/j = 2 500 × 250 × 10⁻³ = 625 kg/j. Cm = 625 / 3 600 = 0,174 kg DBO₅/(kg MVS·j). Interprétation : Cm = 0,174 kg/kg/j = charge moyenne. À cette charge, la nitrification complète est en limite — les bactéries nitrifiantes (Nitrosomonas, Nitrobacter) sont lentes et se développent bien seulement pour Cm < 0,1 kg/kg/j (faible charge). À Cm = 0,17, la nitrification sera partielle ou inexistante selon la température. Si l\'arrêté de rejet impose NH₄ < 5 mg/L, il faudra augmenter le volume du bassin ou réduire la charge.'
      },
      {
        n: '3',
        enonce: 'L\'indice de boues (SVI) d\'une STEP est mesuré : on prend 1 L de mixed liquor (boues en suspension dans le bassin), on le verse dans une éprouvette et au bout de 30 min, le volume des boues est 350 mL. La concentration en MES du mixed liquor est 3 500 mg/L. Calculer le SVI et diagnostiquer.',
        solution: 'SVI = Volume décantation × 1 000 / C_MES = 350 × 1 000 / 3 500 = 100 mL/g. SVI = 100 mL/g : limite supérieure de la bonne décantabilité (< 100 = bon, 100-200 = moyen). Ce SVI à la limite indique des boues en bonne décantabilité mais à surveiller. Si le SVI dépasse 150, chercher des bactéries filamenteuses au microscope (Nocardia, Microthrix). Le SVI est mesuré quotidiennement sur les grandes STEP car sa dérive annonce les problèmes de clarificateur (boues qui partent par-dessus le déversoir).'
      },
      {
        n: '4',
        enonce: 'Une STEP produit 200 kg MS/j de boues mixtes. La siccité initiale est 0,8 % MS. Calculer le volume de boues liquides produites quotidiennement. Après déshydratation à 22 % MS, quel volume occupe-t-il ?',
        solution: 'Boues liquides initiales : 200 kg MS dans une boue à 0,8 % → masse totale = 200/0,008 = 25 000 kg/j ≈ 25 m³/j (densité ≈ 1). Après déshydratation à 22 % : masse totale = 200/0,22 = 909 kg/j ≈ 0,9 m³/j. La déshydratation réduit le volume de 25/0,9 ≈ 28 fois ! Passer de 25 m³/j à 0,9 m³/j représente une réduction considérable du volume à transporter et traiter, ce qui justifie économiquement l\'investissement dans une centrifugeuse ou un filtre à bandes.'
      },
      {
        n: '5',
        enonce: 'L\'analyse des boues de STEP avant épandage agricole donne : Zn = 850 mg/kg MS, Pb = 90 mg/kg MS, Cu = 380 mg/kg MS, Cd = 1,2 mg/kg MS. Vérifier la conformité selon l\'arrêté du 8 janvier 1998.',
        solution: 'Limites arrêté 8 janvier 1998 (mg/kg MS) : Zn ≤ 3 000, Pb ≤ 800, Cu ≤ 1 000, Cd ≤ 20. Vérification : Zn = 850 ≤ 3 000 ✓, Pb = 90 ≤ 800 ✓, Cu = 380 ≤ 1 000 ✓, Cd = 1,2 ≤ 20 ✓. Toutes les teneurs sont conformes. Les boues peuvent être épandues sur les parcelles incluses dans le plan d\'épandage, sous réserve également de la conformité microbiologique (Salmonelles < 8 /10 g MS, helminthes < 3 /10 g MS) et du respect des doses agronomiques maximales à l\'hectare (généralement 3 tonnes MS/ha/an pour les boues des grandes STEP).'
      },
      {
        n: '6',
        enonce: 'Expliquer le principe de la digestion anaérobie (méthanisation) des boues de STEP. Quels sont les avantages en termes de bilan énergétique ?',
        solution: 'Digestion anaérobie : les boues mixtes sont chauffées (37°C pour la digestion mésophile, 55°C pour la thermophile) dans un digesteur étanche en absence d\'oxygène. Les bactéries anaérobies décomposent la matière organique en plusieurs étapes : (1) Hydrolyse (polymères en monomères) ; (2) Acidogénèse (monomères → acides gras volatils + CO₂ + H₂) ; (3) Acétogénèse (acides gras → acétate + H₂) ; (4) Méthanogénèse (acétate + H₂ → CH₄ + CO₂). Le biogaz produit (60-70 % CH₄, 30-40 % CO₂, traces H₂S) est valorisé dans un groupe électrogène cogénération (production d\'électricité + chaleur pour chauffer le digesteur). Production typique : 350 L biogaz/kg MVS dégradé, soit 60-70 % des MVS dégradées. Pour une STEP de 50 000 EH avec bonne digestion : production ≈ 300 Nm³ biogaz/h → groupe de 500-700 kW couvrant 50-80 % des besoins électriques de la STEP. Le bilan énergétique peut devenir positif (STEP à énergie positive) avec une digestion optimisée et une cogénération efficace.'
      },
      {
        n: '7',
        enonce: 'Les résultats de sortie d\'une STEP sont : DBO₅ = 8 mg/L, DCO = 70 mg/L, MES = 18 mg/L, NH₄ = 3 mg/L, Ptot = 1,5 mg/L. L\'arrêté de rejet impose : DBO₅ < 25, DCO < 125, MES < 35, NH₄ < 10, Ptot < 2 mg/L. La STEP est-elle conforme ?',
        solution: 'Vérification : DBO₅ = 8 < 25 ✓, DCO = 70 < 125 ✓, MES = 18 < 35 ✓, NH₄ = 3 < 10 ✓, Ptot = 1,5 < 2 ✓. Tous les paramètres sont conformes. La STEP est en conformité avec son arrêté de rejet. Note : le phosphore à 1,5 mg/L proche de la limite 2 mg/L mérite surveillance. Une légère dégradation (mauvaise coagulation/floculation biologique du phosphore) pourrait créer un dépassement — maintenir la surveillance de la précipitation biologique ou chimique du phosphore (ajout de coagulant Fe³⁺ si nécessaire en période de forte charge).'
      },
      {
        n: '8',
        enonce: 'Qu\'est-ce que le phénomène de "bulking filamenteux" dans un bassin d\'aération ? Quelles en sont les causes et les remèdes ?',
        solution: 'Le bulking filamenteux est la prolifération excessive de bactéries filamenteuses (Microthrix parvicella, Nocardia sp., Sphaerotilus natans, Type 0092, etc.) dans les boues activées. Ces filaments créent un réseau tridimensionnel dans les flocs qui leur confère une légèreté excessive → mauvaise décantabilité dans le clarificateur (SVI > 200 mL/g) → les boues "flottent" et partent par-dessus le seuil déversant du clarificateur → augmentation brutale des MES en sortie → non-conformité de la STEP. Causes : (1) Charge organique très faible (faible charge = substrat insuffisant pour les bactéries "normales", avantage aux filamenteux lents) ; (2) Carence en azote ou phosphore (rapport DBO/N/P déséquilibré) ; (3) Présence de graisses ou de tensioactifs dans l\'influent (favorise Microthrix). Remèdes : (1) Augmentation de la charge massique (réduire l\'âge des boues) ; (2) Ajout de coagulant (chlorure ferrique) pour alourdir les flocs mécaniquement ; (3) Super-chloration ponctuelle des boues recirculées (tuer sélectivement les bactéries filamenteuses, qui sont plus sensibles au chlore que les bactéries formant des flocs) ; (4) Correction des carences nutritionnelles.'
      }
    ]
  },

  'GEMEAU-081': {
    id: 'GEMEAU-081',
    titre: 'Gestion patrimoniale des réseaux et ouvrages',
    fiche: {
      intro: 'La gestion patrimoniale (asset management) des infrastructures de l\'eau est un enjeu majeur pour les collectivités : les réseaux AEP et EU représentent des dizaines de milliards d\'euros d\'actifs en France, et leur vieillissement sans plan de renouvellement conduit à une dégradation accélérée du service. Les outils de diagnostic, les indicateurs de performance et la programmation pluriannuelle des investissements sont les piliers de cette démarche.',
      sections: [
        {
          titre: '1. Inventaire et connaissance du patrimoine',
          texte: 'La première étape de la gestion patrimoniale est la connaissance du patrimoine : inventaire exhaustif des conduites et ouvrages (longueur, matériau, diamètre, âge, état structurel). En France, la loi Grenelle 2 (2010) a rendu obligatoire l\'établissement d\'un inventaire du réseau d\'eau potable et d\'assainissement pour toutes les collectivités avant 2015 (sous peine de doublement de la redevance modernisation des réseaux). Le niveau de connaissance est mesuré par l\'indicateur P103.2B (score de la connaissance des réseaux) : score ≤ 40 = connaissance insuffisante, ≥ 80 = très bonne connaissance.\n\nLe SIG (Système d\'Information Géographique) est l\'outil de référence pour stocker, visualiser et analyser les données patrimoniales. Il intègre les données géométriques (tracé, altimétrie), attributaires (matériau, DN, date de pose, état) et les résultats des inspections et des incidents. Les SIG eau les plus répandus sont QGIS (libre), ArcGIS (Esri), et les solutions métier spécialisées (WaterGEMS, STAR-Apic).',
          sous_sections: []
        },
        {
          titre: '2. Diagnostic de l\'état des réseaux',
          texte: 'Le diagnostic de l\'état structurel d\'un réseau est basé sur plusieurs sources : (1) Historique des incidents et casses : les conduites qui ont cassé plusieurs fois sont à renouveler en priorité (règle dite des "10 casses pour 10 km de réseau en 10 ans") ; (2) Inspection télévisée (ITV) des collecteurs EU et EP (standard EN 13508) ; (3) Tests hydrostatiques et acoustiques pour les conduites AEP ; (4) Âge et durée de vie résiduelle : la durée de vie théorique d\'une conduite en fonte est 80-100 ans, en PVC 50-70 ans, en acier non revêtu 30-50 ans — une conduite ayant atteint 80 % de sa durée de vie théorique est prioritaire dans le plan de renouvellement.\n\nLes outils de modélisation hydraulique (WaterGEMS, InfoWorks) permettent de simuler le comportement du réseau pour différents scénarios de consommation et d\'incidents, identifier les conduites critiques pour la continuité de service et dimensionner les renforcements.',
          sous_sections: []
        },
        {
          titre: '3. Indicateurs de performance et tableau de bord',
          texte: 'Les indicateurs de performance (IP) des services d\'eau sont définis par l\'arrêté du 2 mai 2007 (pour l\'eau potable) et par les arrêtés assainissement équivalents. Ils sont transmis annuellement à l\'ONEMA (Office National de l\'Eau et des Milieux Aquatiques) via le Rapport Annuel sur le Prix et la Qualité du Service (RPQS). Principaux indicateurs eau potable : P101.1 (taux de conformité bactériologique), P102.1 (taux de conformité physico-chimique), P103.2B (connaissance du patrimoine), P104.3 (rendement du réseau), P105.3 (indice linéaire des pertes), P106.3 (indice linéaire des volumes non comptés), P107.2 (taux de réclamations), P108.3 (délai d\'ouverture du service), P109.0 (montant des travaux de renouvellement). Ces indicateurs permettent la comparaison inter-services (benchmarking) et le suivi de l\'évolution dans le temps.',
          sous_sections: []
        },
        {
          titre: '4. Plan pluriannuel de renouvellement',
          texte: 'Le plan pluriannuel de renouvellement (PPR) est un programme d\'investissements étalé sur 10-30 ans, qui priorise les conduites à renouveler selon leur état, leur criticité et les contraintes budgétaires. Les critères de priorisation incluent : l\'état structurel (casses, ITV), la criticité (impact d\'une coupure sur les abonnés = nombre d\'abonnés desservis × durée de coupure prévisible × importance des usages), l\'âge résiduel, le coût et les opportunités de synergies avec d\'autres travaux (voirie, télécommunications).\n\nLe taux de renouvellement théorique nécessaire pour maintenir le patrimoine est estimé à 1-1,5 % de la longueur du réseau par an (soit 67-100 ans pour renouveler l\'ensemble). En France, le taux moyen effectif est de 0,5-0,6 %/an (moitié du nécessaire), expliquant le vieillissement progressif des réseaux. Un taux de renouvellement insuffisant se traduit par une augmentation du nombre de casses, une dégradation du rendement et des coûts d\'exploitation croissants.',
          sous_sections: []
        }
      ],
      points: [
        'Loi Grenelle 2 : inventaire patrimoine eau obligatoire avant 2015, indicateur P103.2B',
        'SIG : stockage, visualisation, analyse des données patrimoniales — QGIS, ArcGIS, WaterGEMS',
        'Durée de vie théorique : fonte 80-100 ans, PVC 50-70 ans, acier nu 30-50 ans',
        'Indicateurs RPQS : P101 à P109, transmis annuellement à l\'ONEMA',
        'P104.3 : rendement réseau AEP — objectif ≥ 80-85 % selon zone',
        'P105.3 : ILP (indice linéaire des pertes) — L/km/h',
        'Taux renouvellement théorique nécessaire : 1-1,5 %/an du linéaire réseau',
        'Taux effectif moyen France : 0,5-0,6 %/an → vieillissement',
        'Criticité = impact coupure × nombre abonnés × durée × importance usage',
        'Benchmarking inter-services : comparaison des IP pour identifier les marges de progrès'
      ],
      formules: [
        'Taux de renouvellement : T_ren = L_renouvelée / L_totale × 100 → [%/an]',
        'Durée de vie résiduelle : DVR = DV_théorique - âge_actuel → [ans]',
        'Criticité d\'une conduite : C = Nbr_abonnés × probabilité_casse × impact_coupure → [€/an]',
        'ILP : ILP = V_pertes / (L_réseau × 365 × 24) → [L/km/h]'
      ],
      retenir: 'Patrimoine · Inventaire · SIG · Indicateurs P10X · RPQS · ONEMA · Rendement · ILP · Taux renouvellement · Criticité · Plan pluriannuel · Benchmarking'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un service des eaux gère 150 km de réseau AEP. Il a renouvelé 1,2 km de conduites l\'an dernier. Quel est le taux de renouvellement ? À ce rythme, en combien d\'années le réseau sera-t-il entièrement renouvelé ? Est-ce satisfaisant ?',
        solution: 'Taux de renouvellement = 1,2 / 150 × 100 = 0,80 %/an. Durée de renouvellement complet = 100 / 0,80 = 125 ans. Le taux de 0,8 % est supérieur à la moyenne nationale (0,5-0,6 %) mais inférieur au taux théorique nécessaire de 1-1,5 %/an. À ce rythme, le réseau sera entièrement renouvelé en 125 ans — certaines conduites anciennes (posées il y a 60-70 ans) pourraient atteindre 180-190 ans d\'âge avant d\'être remplacées, ce qui est très au-delà de leur durée de vie théorique. Il faudrait porter le taux de renouvellement à 1,0-1,5 % (1,5 à 2,25 km/an) pour être dans la norme.'
      },
      {
        n: '2',
        enonce: 'Un SIG répertorie sur un tronçon de 2,5 km de fonte grise (posée en 1935) les incidents suivants sur les 10 dernières années : 3 casses en 2015, 2 en 2017, 4 en 2019, 5 en 2020, 6 en 2022. Quel est le taux de casse annuel moyen ? Ce tronçon est-il prioritaire pour le renouvellement ?',
        solution: 'Total casses = 3 + 2 + 4 + 5 + 6 = 20 casses sur 10 ans. Taux de casse annuel = 20 / 10 = 2 casses/an sur 2,5 km = 0,8 casses/km/an. Âge de la conduite en 2025 : 2025 - 1935 = 90 ans (= durée de vie théorique de la fonte grise). Le critère usuel de renouvellement prioritaire est > 0,3 casses/km/an (seuil ASTEE). À 0,8 casses/km/an (2,7× le seuil), ce tronçon est hautement prioritaire. De plus, la tendance est à l\'aggravation (3 casses/an en 2022 vs 2 casses/an en 2015). Ce tronçon devrait figurer dans le PPR dans les 1-3 prochaines années.'
      },
      {
        n: '3',
        enonce: 'Expliquer ce qu\'est le RPQS (Rapport sur le Prix et la Qualité du Service) et qui est tenu de le produire.',
        solution: 'Le RPQS (Rapport annuel sur le Prix et la Qualité du Service de l\'Eau et de l\'Assainissement) est un document réglementaire obligatoire pour toute collectivité responsable d\'un service d\'eau potable ou d\'assainissement (article L.2224-5 du CGCT), quel que soit le mode de gestion (régie ou délégation de service public). Il est établi chaque année et présenté en conseil municipal ou communautaire avant le 30 juin de l\'année suivante. Il comprend : les indicateurs de performance (P101 à P109 pour l\'AEP), le bilan des travaux réalisés, les informations tarifaires, la qualité de l\'eau, les résultats analytiques. Il est mis en ligne sur le site www.services.eaufrance.fr (SISPEA) et consultable par tout citoyen. Son objectif est la transparence du service public de l\'eau vis-à-vis des usagers et des élus.'
      },
      {
        n: '4',
        enonce: 'Un réseau AEP de 200 km a un rendement de 72 % (inférieur au seuil légal de 80 %). La collectivité souhaite atteindre 80 % en 5 ans. Si le volume mis en distribution est 3 000 000 m³/an, de combien faut-il réduire les pertes ?',
        solution: 'Pertes actuelles = (1 - 0,72) × 3 000 000 = 840 000 m³/an. Volume facturé actuel = 0,72 × 3 000 000 = 2 160 000 m³/an. Pertes cibles à 80 % de rendement = (1 - 0,80) × 3 000 000 = 600 000 m³/an. Réduction nécessaire = 840 000 - 600 000 = 240 000 m³/an = 240 000 / 365 / 24 = 27,4 m³/h de débit de fuite à éliminer. Pour y parvenir en 5 ans : programme intensif de sectorisation nocturne pour localiser les fuites, puis renouvellement des tronçons les plus fuyards. L\'économie d\'eau (240 000 m³/an) représente aussi une économie de traitement et de pompage significative.'
      },
      {
        n: '5',
        enonce: 'Qu\'est-ce que la criticité d\'un tronçon de réseau ? Donner un exemple de calcul de criticité comparant une conduite DN400 en centre-ville et une conduite DN100 en lotissement périphérique.',
        solution: 'La criticité mesure l\'impact d\'une défaillance d\'un tronçon sur le service rendu. Elle combine la probabilité de défaillance (inversement proportionnelle à l\'état) et l\'impact (nombre d\'abonnés privés d\'eau, durée de coupure, nature des usages). Exemple : Conduite DN400 centre-ville : alimente 8 000 abonnés + hôpital + école + commerces. En cas de casse, coupure de 12-24 h sur tout le secteur. Criticité élevée (code rouge). Conduite DN100 lotissement : alimente 150 maisons individuelles. En cas de casse, coupure de 4-8 h sur 150 abonnés. Pas de service essentiel impacté. Criticité faible (code vert). Le plan de renouvellement priorise la DN400 même si son état est meilleur que la DN100, car son impact en cas de casse est incomparablement plus grand.'
      },
      {
        n: '6',
        enonce: 'Une collectivité hésite entre deux stratégies pour améliorer son rendement de réseau : (A) programme de recherche de fuites + réparations ponctuelles (coût 150 k€, gain estimé 5 % de rendement) ; (B) renouvellement des 3 km de conduites les plus vétustes (coût 900 k€, gain estimé 4 % de rendement). Comparer les coûts par point de rendement gagné.',
        solution: 'Option A : coût par point de rendement = 150 000 / 5 = 30 000 €/point. Option B : coût par point de rendement = 900 000 / 4 = 225 000 €/point. L\'option A (recherche de fuites + réparations) est 7,5 fois moins chère par point de rendement gagné que l\'option B. En termes d\'efficacité court terme, A est très nettement préférable. Cependant, l\'option B a une valeur patrimoniale durable (conduites renouvelées pour 50+ ans), élimine les risques de casses répétées sur ces tronçons et peut permettre un gain de rendement supplémentaire à long terme. Recommandation : réaliser d\'abord A (ROI excellent, financement par économies d\'eau), puis intégrer B dans le PPR à 5 ans.'
      },
      {
        n: '7',
        enonce: 'Quel est le rôle de l\'ONEMA (maintenant intégré à l\'OFB) dans la gestion des services d\'eau en France ?',
        solution: 'L\'ONEMA (Office National de l\'Eau et des Milieux Aquatiques), intégré depuis 2019 dans l\'OFB (Office Français de la Biodiversité), est l\'opérateur national de la politique de l\'eau. Ses missions dans le domaine des services d\'eau : (1) Animation du SISPEA (Système d\'Information des Services Publics d\'Eau et d\'Assainissement) qui centralise et publie les RPQS de toutes les collectivités — base de données nationale des indicateurs de performance ; (2) Référentiel technique et réglementaire sur les indicateurs de performance des services d\'eau (méthodologie de calcul) ; (3) Rapport annuel sur l\'état des services publics d\'eau et d\'assainissement en France (observatoire des services) ; (4) Appui aux collectivités pour l\'amélioration de la connaissance du patrimoine et du rendement des réseaux ; (5) Mission de police de l\'eau (contrôle des rejets dans le milieu naturel) assurée conjointement avec les DDT et l\'ARS.'
      },
      {
        n: '8',
        enonce: 'Définir la notion de "coût complet" d\'un service d\'eau. Pourquoi est-il important de le calculer et comment se compare-t-il au prix facturé à l\'abonné ?',
        solution: 'Le coût complet d\'un service d\'eau est la somme de tous les coûts nécessaires à une gestion durable du service, incluant : (1) Coûts d\'exploitation (personnel, énergie, réactifs, sous-traitance, analyses) ; (2) Amortissements des actifs (renouvellement de l\'outil patrimonial à hauteur de l\'amortissement comptable ou, mieux, à hauteur du coût de renouvellement réel) ; (3) Charges financières (remboursement des emprunts) ; (4) Charges de gestion et frais généraux. Le coût complet est calculé pour s\'assurer que le prix de l\'eau couvre réellement tous les coûts, y compris le renouvellement du patrimoine. En France, beaucoup de services pratiquent un prix qui ne couvre pas leur coût complet (notamment les amortissements patrimoniaux sont sous-estimés) → le service vit sur le stock d\'actifs existants sans les renouveler correctement → "dette cachée" qui se révèle lors des ruptures de conduites et des grosses réparations. Le principe "l\'eau paie l\'eau" (article L.2224-1 CGCT) impose l\'équilibre des charges, mais pas nécessairement le financement complet du renouvellement par la tarification.'
      }
    ]
  },

  'GEMEAU-082': {
    id: 'GEMEAU-082',
    titre: 'Enjeux de l\'eau dans le contexte du changement climatique',
    fiche: {
      intro: 'Le changement climatique modifie profondément le cycle de l\'eau et pose des défis inédits aux gestionnaires des services d\'eau : sécheresses plus fréquentes et intenses, étiages sévères, épisodes de crues violents, dégradation de la qualité des ressources. L\'adaptation des services d\'eau au changement climatique est un impératif stratégique à l\'horizon 2050.',
      sections: [
        {
          titre: '1. Impacts du changement climatique sur les ressources en eau',
          texte: 'En France métropolitaine, les projections climatiques (Météo-France, GIEC AR6 2021) prévoient une augmentation des températures de +1 à +4°C d\'ici 2100 selon les scénarios d\'émissions, une modification du régime des précipitations (hivers plus arrosés, étés plus secs dans le Sud), une intensification des événements extrêmes (crues-éclairs méditerranéennes, canicules, sécheresses prolongées). Les conséquences pour les ressources en eau sont : diminution des débits d\'étiage des rivières (- 10 à -30 % selon les bassins à l\'horizon 2050), abaissement des niveaux piézométriques des nappes (recharge hivernale maintenue mais recharge printanière réduite), augmentation de la demande en eau pour l\'irrigation agricole, dégradation de la qualité des eaux superficielles en étiage (température élevée favorisant les cyanobactéries, concentration des polluants).\n\nLes zones les plus vulnérables en France sont le Sud-Ouest (bassin Adour-Garonne), la Bretagne (ressources souterraines superficielles), et les territoires insulaires (Corse, DOM-TOM). Dès l\'été 2022, des centaines de communes ont subi des ruptures d\'alimentation en eau potable.',
          sous_sections: []
        },
        {
          titre: '2. Tensions sur les usages et gestion de la pénurie',
          texte: 'La sécheresse de 2022 a mis en lumière les tensions entre les différents usages de l\'eau : agriculture irriguée (70-80 % des prélèvements en France en été), production d\'eau potable (≈ 17 % des prélèvements), refroidissement des centrales nucléaires (≈ 50 % des prélèvements annuels en volume non consommé), maintien des débits réservés pour les milieux aquatiques (intégré dans le débit minimum biologique = débit réservé = 1/10 du module interannuel du cours d\'eau selon la LEMA 2006).\n\nLes outils de gestion des tensions comprennent : (1) les arrêtés sécheresse préfectoraux (4 niveaux : vigilance, alerte, alerte renforcée, crise) qui imposent des restrictions de prélèvement par usage ; (2) les PGRE (Plans de Gestion des Ressources en Eau) sur les bassins déficitaires identifiés par le SDAGE ; (3) la redevance pour prélèvements (agences de l\'eau) qui incite à l\'économie ; (4) les interconnexions de secours entre systèmes AEP pour mutualiser les ressources.',
          sous_sections: []
        },
        {
          titre: '3. Adaptation des services d\'eau',
          texte: 'L\'adaptation des services d\'eau au changement climatique passe par plusieurs leviers : (1) Économies d\'eau à la source : compteurs individuels dans les logements collectifs, détection et réparation des fuites (chaque m³ économisé = 1 m³ de moins à produire), tarification progressive (prix unitaire plus élevé au-delà d\'un quota de base), récupération des eaux de pluie pour les usages non alimentaires ; (2) Diversification des ressources : recours aux eaux non conventionnelles (reuse des eaux usées traitées = REUT pour l\'irrigation et les usages industriels, encadrée par le règlement européen 2020/741), recharge artificielle des nappes (MAR), développement du dessalement dans les zones côtières (coût énergétique élevé mais technologie mature) ; (3) Réduction des pertes dans les réseaux : amélioration du rendement réduit les besoins de production à service rendu égal ; (4) Adaptation des filières de traitement : sécheresse = eaux brutes plus turbides ponctuellement + proliférations algales + températures élevées favorisant les pathogènes.\n\nLa REUT (Réutilisation des Eaux Usées Traitées) est un levier important en Europe méridionale. Elle nécessite un niveau de traitement avancé (UV + chloration + nanofiltration selon les usages) et est encadrée strictement sur les paramètres microbiologiques (classe A à D selon le règlement européen).',
          sous_sections: []
        },
        {
          titre: '4. Gouvernance de l\'eau et outils de planification',
          texte: 'La gestion de l\'eau en France est organisée par bassin versant (6 grands bassins métropolitains + 5 DOM-TOM) sous l\'égide des Agences de l\'Eau et des Comités de Bassin. Le SDAGE (Schéma Directeur d\'Aménagement et de Gestion des Eaux) fixe pour 6 ans les objectifs de qualité et de quantité des masses d\'eau sur chaque bassin, en application de la directive-cadre sur l\'eau (DCE, 2000/60/CE) qui impose le bon état écologique et chimique de toutes les masses d\'eau à l\'horizon 2027 (avec dérogations possibles). Le SAGE (Schéma d\'Aménagement et de Gestion des Eaux) est l\'outil de planification local sur un sous-bassin versant, défini entre tous les acteurs de l\'eau (collectivités, agriculteurs, industriels, associations).\n\nLa DCE a introduit le concept de "bon état" des masses d\'eau (évaluation écologique et chimique) et le principe de récupération des coûts (les usagers doivent contribuer au coût réel de l\'eau qu\'ils utilisent). Le 4ème cycle des SDAGE (2022-2027) intègre explicitement les risques du changement climatique dans les stratégies d\'adaptation de chaque bassin.',
          sous_sections: []
        }
      ],
      points: [
        'Projections 2100 (GIEC AR6) : +1 à +4°C, étés plus secs au Sud, hivers plus arrosés',
        'Impacts : étiages sévères, nappes abaissées, qualité dégradée, demande agricole accrue',
        'Sécheresse 2022 : des centaines de communes privées d\'eau en France',
        'Débit réservé : ≥ 1/10 du module interannuel (LEMA 2006)',
        'Arrêtés sécheresse : 4 niveaux — vigilance, alerte, alerte renforcée, crise',
        'PGRE : Plans de Gestion des Ressources en Eau sur bassins déficitaires',
        'REUT (Réutilisation des Eaux Usées Traitées) : règlement européen 2020/741',
        'DCE (Directive Cadre sur l\'Eau) : bon état écologique + chimique avant 2027',
        'SDAGE : outil de planification par bassin versant, 6 ans, fixe objectifs de qualité et quantité',
        'SAGE : planification locale sur sous-bassin, concertation multi-acteurs'
      ],
      formules: [
        'Débit réservé (LEMA 2006) : Q_réservé ≥ 1/10 × Q_module_interannuel → [m³/s]',
        'Indice de stress hydrique : ISH = prélèvements totaux / ressources disponibles × 100 → [%] ; ISH > 40 % = stress élevé',
        'Potentiel de REUT : Q_REUT = Q_STEP_sortie × (1 - pertes évaporation) × taux_traitement_avancé → [m³/j]',
        'Économie par amélioration rendement : ΔV_économisé = V_mis × (R_cible - R_actuel) / 100 → [m³/an]'
      ],
      retenir: 'GIEC · Étiage · Sécheresse · Débit réservé · PGRE · REUT · DCE · Bon état écologique · SDAGE · SAGE · Agence de l\'Eau · Bassins versants'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Le module interannuel d\'une rivière est 12 m³/s. Quel est le débit réservé minimum selon la LEMA 2006 ? Que se passe-t-il si le débit naturel mesuré est 0,8 m³/s en août lors d\'une sécheresse ?',
        solution: 'Débit réservé = Q_module/10 = 12/10 = 1,2 m³/s. Si le débit naturel est 0,8 m³/s < débit réservé de 1,2 m³/s : tout prélèvement est interdit (le débit naturel est déjà inférieur au débit minimum requis pour les milieux aquatiques). Les arrêtés préfectoraux de crise doivent être activés : arrêt de toutes les prises d\'eau industrielles et agricoles sur ce cours d\'eau. La prise d\'eau AEP peut bénéficier d\'une dérogation temporaire (alimentation en eau potable = usage prioritaire) si elle est la seule ressource de la collectivité, mais avec une consommation réduite au strict minimum (restriction aux usages alimentaires).'
      },
      {
        n: '2',
        enonce: 'Une collectivité met en distribution 2 000 000 m³/an et a un rendement de 75 %. Elle prévoit de l\'améliorer à 83 %. Calculer le volume d\'eau économisé par an. Quel est l\'équivalent en m³/h ?',
        solution: 'Volume économisé = V_mis × (R_cible - R_actuel) / 100 = 2 000 000 × (83 - 75) / 100 = 2 000 000 × 0,08 = 160 000 m³/an. En m³/h : 160 000 / (365 × 24) = 18,3 m³/h de débit de fuites éliminé. Cette économie représente : (1) une réduction des prélèvements dans la ressource (protection des étiages) ; (2) une réduction des coûts de production et de pompage ; (3) une réduction des émissions de GES liées au pompage et au traitement. À 0,80 €/m³ de coût de production (pompage + traitement), l\'économie financière est 160 000 × 0,80 = 128 000 €/an.'
      },
      {
        n: '3',
        enonce: 'Décrire les quatre niveaux d\'alerte sécheresse en France et les restrictions associées à chaque niveau pour un usage agricole d\'irrigation.',
        solution: 'Niveaux et restrictions agricoles : (1) Vigilance : information et recommandation d\'économies volontaires. Pas d\'obligation. Suivi renforcé des points de surveillance. (2) Alerte : restrictions des prélèvements pour l\'irrigation. Réduction des prélèvements de 25-50 % des volumes autorisés. Interdiction d\'irrigation aux heures de forte chaleur (10h-18h). (3) Alerte renforcée : restriction plus sévère des prélèvements (50-75 % de réduction). Plages horaires d\'irrigation très restreintes (nuit uniquement, souvent 22h-6h). Interdiction d\'irrigation des cultures à haute valeur économique uniquement. (4) Crise : suspension totale des prélèvements pour l\'irrigation agricole, sauf dérogation dûment justifiée pour les cultures pérennes à protéger impérativement. Seuls les prélèvements pour l\'alimentation humaine et animale et pour la protection incendie restent autorisés. La priorité absolue est donnée à la sécurité publique et à l\'alimentation humaine.'
      },
      {
        n: '4',
        enonce: 'Une station d\'épuration produit 8 000 m³/j d\'eau traitée (sortie clarification + UV + chloration). Dans la commune, 3 000 m³/j d\'eau potable sont utilisés pour l\'arrosage des espaces verts publics. Le règlement européen 2020/741 autorise l\'utilisation d\'eaux usées traitées (REUT) pour l\'arrosage des espaces verts. Évaluer le potentiel de réduction des prélèvements AEP.',
        solution: 'Potentiel REUT pour espaces verts : 3 000 m³/j (= volume AEP actuellement utilisé pour l\'arrosage). L\'eau usée traitée de la STEP disponible = 8 000 m³/j, largement suffisant. Réduction des prélèvements AEP = 3 000 m³/j = 1 095 000 m³/an. Classe de qualité requise selon règlement 2020/741 pour l\'arrosage des espaces verts publics : classe C (E. coli ≤ 1 000 UFC/100 mL, légionelles < 1 000 UFC/L dans les systèmes utilisant des diffuseurs) ou classe B si arrosage par aspersion avec risque d\'exposition humaine. Traitement requis pour passer de la sortie STEP standard à classe C : UV suffisant si sortie STEP < 10 mg/L MES + UV 30 mJ/cm² + résiduel chloré 0,5 mg/L. Infrastructure nécessaire : canalisation dédiée REUT (réseau violet selon code couleurs, avec signalétique "eau non potable") entre la STEP et les points d\'arrosage.'
      },
      {
        n: '5',
        enonce: 'En quoi le principe de "bon état écologique" de la DCE (Directive-Cadre sur l\'Eau) change-t-il la philosophie de la gestion de l\'eau en France par rapport à la législation antérieure ?',
        solution: 'Avant la DCE (2000) : la gestion de l\'eau était axée sur la lutte contre les pollutions ponctuelles (rejets industriels, STEP) et le maintien de normes minimales de qualité pour les usages (eau potable, baignade). La masse d\'eau était surtout un "réceptacle" qu\'il fallait protéger de la pollution directe. La DCE introduit un changement de paradigme : (1) Objectif de "bon état écologique" = état de référence proche de l\'état naturel sans pression anthropique (biologie, hydromorphologie + chimie) — pas seulement l\'absence de pollution visible mais le bon fonctionnement de l\'écosystème aquatique (poissons, invertébrés benthiques, macrophytes, phytoplancton) ; (2) Approche par masse d\'eau et bassin versant : la gestion est cohérente sur l\'ensemble du bassin, pas station par station ; (3) Principe de récupération des coûts : l\'eau doit être facturée à son coût réel, incluant les externalités environnementales ; (4) Participation du public : les citoyens participent à l\'élaboration des SDAGE ; (5) Non-dégradation : interdiction de dégrader une masse d\'eau qui serait en bon état (principe de non-dégradation).'
      },
      {
        n: '6',
        enonce: 'Quel est l\'impact d\'une prolifération de cyanobactéries (algues bleues-vertes) dans un réservoir d\'eau brute sur la filière de potabilisation ? Comment y répondre ?',
        solution: 'Impact des cyanobactéries sur la potabilisation : (1) Goût et odeur : les cyanobactéries produisent des composés odorants (géosmine, méthyl-isobornéol = MIB) très perçus par l\'odorat humain dès 4-10 ng/L → plaintes abonnés même sans risque sanitaire réel ; (2) Toxines (cyanotoxines) : certaines espèces (Microcystis, Anabaena, Planktothrix) produisent des microcystines (hépatotoxines, LQ = 1 μg/L dans l\'eau potable), des saxitoxines (neurotoxines), des cylindrospermopsines. La chloration seule ne détruit pas efficacement les cyanotoxines intracellulaires (lise des cellules peut libérer plus de toxines) ; (3) Colmatage des filtres : les cellules algales colmatent rapidement les filtres à sable. Réponses : (1) Détection précoce par surveillance du réservoir (mesures de chlorophylle a + identification microscopique 2×/semaine en période estivale) ; (2) Pré-traitement adapté : coagulation-décantation améliorée AVANT chloration (lyse des cellules entières avant filtration) + charbon actif en poudre (PAC) pour adsorber géosmine, MIB et toxines dissoutes ; (3) Oxydation à l\'ozone ou au permanganate de potassium (KMnO₄) pour détruire les toxines extracellulaires ; (4) Alerte et restrictions si microcystines > 1 μg/L (baignade interdite, eau potable non distribuée sans analyse de confirmation).'
      },
      {
        n: '7',
        enonce: 'Un habitant demande : "Pourquoi payer l\'eau si plus on est riche moins on en paye en proportion de ses revenus ?" Expliquer le débat sur la tarification progressive de l\'eau.',
        solution: 'C\'est la question de la tarification de l\'eau et de son caractère social. Système actuel en France (le plus courant) : partie fixe (abonnement) + prix au m³ uniforme → les ménages modestes qui consomment peu paient autant par m³ que les gros consommateurs, mais l\'abonnement (fixe) représente une part plus élevée de leur facture. Tarification progressive (par blocs ascendants) : un prix bas pour les premiers m³ (besoins essentiels : 30-50 L/j/personne) et un prix croissant pour les tranches supérieures. Avantages : (1) Signal-prix d\'économie d\'eau : les gros consommateurs (piscines, jardins) paient plus ; (2) Plus juste socialement : les besoins essentiels sont bon marché ; (3) Encourage l\'économie au sein des ménages. Inconvénients : (1) Difficile à calibrer équitablement pour les grandes familles (qui consomment beaucoup par besoin et non par gaspillage) — sauf si le calcul est fait par personne et non par ménage ; (2) Complexité de gestion (facturation différenciée) ; (3) Risque financier pour le service si la consommation globale diminue (recettes variables). Plusieurs collectivités (Bordeaux, Dunkerque) ont adopté des tarifications sociales progressives. C\'est une question de choix politique local.'
      },
      {
        n: '8',
        enonce: 'Expliquer comment le technicien des métiers de l\'eau peut contribuer concrètement à l\'adaptation au changement climatique dans ses activités quotidiennes.',
        solution: 'Contributions quotidiennes du technicien eau au changement climatique : (1) Surveillance et réduction des fuites : chaque m³ de fuite évitée = économie de ressource = moins de prélèvement dans un milieu en tension. Intervention rapide sur les casses et participation active à la sectorisation nocturne. (2) Optimisation énergétique des pompes : calage des pompes au BEP, utilisation des variateurs de fréquence pour adapter le débit aux besoins réels réels, pompage aux heures creuses (tarif EDF réduit + heures de moindre tension réseau électrique souvent coïncident avec moindre demande en eau). (3) Surveillance des ressources : mesure et déclaration régulière des débits prélevés (respect des autorisations de prélèvement) ; signalement à l\'exploitant et à l\'ARS en cas d\'observation anormale (turbidité inhabituelle, goût, algues) pouvant indiquer une tension sur la ressource. (4) Économies de réactifs : optimiser les doses de coagulant, de chlore, de soude par le jar-test et l\'analyse en ligne réduit la production de sous-produits et les coûts. (5) Sensibilisation des abonnés : lors des relèves de compteurs ou des interventions, expliquer les gestes économiseurs d\'eau et l\'importance de signaler les fuites visibles chez l\'abonné.'
      }
    ]
  }

};
