var GEMEAU_B02 = {

  'GEMEAU-009': {
    id: 'GEMEAU-009',
    titre: 'Propriétés physiques de l\'eau',
    fiche: {
      intro: 'L\'eau est le fluide de travail universel des métiers de l\'eau, mais ses propriétés physiques varient sensiblement avec la température, la pression et la composition chimique. Un technicien GEMEAU doit connaître ces propriétés pour interpréter correctement les mesures (débit-masse vs débit-volume), dimensionner les conduites en fonction de la viscosité réelle, et anticiper les phénomènes de cavitation, de dilatation ou de gel.',
      sections: [
        {
          titre: '1. Masse volumique et masse spécifique',
          texte: 'La masse volumique ρ (rho) d\'un fluide est la masse par unité de volume : ρ = m/V [kg/m³]. Pour l\'eau pure à 4°C, ρ atteint son maximum : 999,97 ≈ 1 000 kg/m³. Cette valeur de 1 000 kg/m³ est utilisée dans la grande majorité des calculs hydrauliques courants. À 20°C, ρ = 998,2 kg/m³ ; à 100°C, ρ = 958,4 kg/m³. La variation relative est de l\'ordre de 4% entre 0 et 100°C, ce qui est négligeable pour la plupart des calculs hydrauliques mais doit être pris en compte pour les bilans de masse précis.\n\nLa masse spécifique γ (gamma) ou poids volumique est le poids par unité de volume : γ = ρ × g [N/m³]. À 20°C : γ = 998,2 × 9,81 = 9 792 N/m³ ≈ 9 810 N/m³ = 9,81 kN/m³. Cette grandeur intervient directement dans le calcul de la pression hydrostatique et de l\'énergie de pression d\'un fluide.\n\nPour les eaux chargées (eaux usées, boues, eau de mer), la masse volumique peut différer significativement de celle de l\'eau pure. Une eau de mer à 35 g/L de sel a ρ ≈ 1 025 kg/m³. Des boues de STEP à 3% de matières sèches (MS) ont ρ ≈ 1 018 kg/m³. Ces corrections sont importantes pour les calculs de volume de stockage de boues ou de transport par pompage.',
          sous_sections: [
            {
              titre: '1.1 Débit volumique et débit massique',
              texte: 'Le débit volumique Q [m³/s] et le débit massique Qm [kg/s] sont reliés par : Qm = ρ × Q. Pour de l\'eau à 20°C, Qm (kg/s) = 998,2 × Q (m³/s) ≈ 1 000 × Q. La distinction est importante lorsque la température varie (eau chaude dans un échangeur, eau à haute température en sortie de centrale) ou lorsque la densité est différente de 1 000 kg/m³ (boues, saumures). Un compteur volumétrique mesure Q ; les instruments à effet Coriolis mesurent Qm directement.'
            }
          ]
        },
        {
          titre: '2. Viscosité dynamique et cinématique',
          texte: 'La viscosité est la résistance qu\'un fluide oppose à l\'écoulement. La viscosité dynamique µ (mu) [Pa·s ou mPa·s] mesure le frottement interne entre couches de fluide. Pour l\'eau à 20°C, µ = 1,002 × 10⁻³ Pa·s = 1,002 mPa·s. À 10°C, µ = 1,307 mPa·s ; à 40°C, µ = 0,653 mPa·s : la viscosité diminue de moitié entre 10 et 40°C, ce qui a des conséquences importantes sur les régimes d\'écoulement et les pertes de charge.\n\nLa viscosité cinématique ν (nu) [m²/s] est le rapport viscosité dynamique / masse volumique : ν = µ/ρ. Pour l\'eau à 20°C : ν = 1,002×10⁻³ / 998,2 = 1,004 × 10⁻⁶ m²/s = 1,004 mm²/s. Le mm²/s se nomme aussi cSt (centistokes). La viscosité cinématique intervient dans le calcul du nombre de Reynolds (Re = V×D/ν) et dans la formule de Darcy-Weisbach via le coefficient λ.\n\nEn pratique, pour les fluides de traitement autres que l\'eau (boues, floculas, solutions de réactifs), la viscosité peut être beaucoup plus élevée. Des boues de STEP épaissies à 6% MS ont une viscosité apparente 10 à 50 fois supérieure à l\'eau. Pour leur pompage, il faut dimensionner avec des pertes de charge beaucoup plus importantes qu\'avec de l\'eau claire.',
          sous_sections: [
            {
              titre: '2.1 Variation de la viscosité avec la température',
              texte: 'La viscosité de l\'eau diminue significativement avec la température. Valeurs pratiques : 0°C → µ = 1,787 mPa·s ; 10°C → 1,307 ; 20°C → 1,002 ; 30°C → 0,798 ; 50°C → 0,547 ; 100°C → 0,282. Cette décroissance suit approximativement la loi d\'Andrade : µ = A × exp(B/T), avec T en kelvin. Pour une station de refoulement d\'eaux usées, les pertes de charge seront plus élevées en hiver (eau froide, viscosité élevée) qu\'en été, ce qui doit être intégré dans le dimensionnement.'
            }
          ]
        },
        {
          titre: '3. Tension superficielle et capillarité',
          texte: 'La tension superficielle σ (sigma) [N/m] est l\'énergie de surface du liquide, résultant des forces d\'attraction moléculaire entre les molécules de surface. Pour l\'eau à 20°C, σ = 0,0728 N/m. Elle décroît avec la température. La tension superficielle est à l\'origine de la capillarité (ascension de l\'eau dans un sol fin), de la formation de ménisques dans les tubes, et de la stabilité des bulles d\'air.\n\nEn pratique, la tension superficielle intervient dans le traitement des eaux par flottation (DAF : Dissolved Air Flotation) où de minuscules bulles d\'air se fixent sur les particules en suspension, et dans le mouillage des membranes de filtration. Les tensio-actifs (détergents) présents dans les eaux usées réduisent la tension superficielle, ce qui favorise la formation de mousse dans les bassins d\'aération — un problème opérationnel courant.\n\nLa capillarité dans les sols fins (limons, argiles) génère des pressions de succion capillaire qui retiennent l\'eau dans la zone non saturée. Pour un sol limoneux avec des pores de rayon r = 10 µm : h_capillaire = 2σ/(ρgr) = 2×0,0728/(1000×9,81×10⁻⁵) = 1,49 m. Cette hauteur capillaire est importante pour le dimensionnement des systèmes d\'irrigation au goutte-à-goutte et pour l\'étude du drainage.',
          sous_sections: [
            {
              titre: '3.1 Applications pratiques de la tension superficielle',
              texte: 'Flottation par air dissous (DAF) : des microbulles d\'air de 10-100 µm de diamètre s\'attachent aux particules grâce aux forces de tension superficielle. La force de flottaison dépend du rapport surface/volume des bulles. Plus les bulles sont petites, plus la surface spécifique est grande et plus la flottaison est efficace. La DAF est utilisée pour la clarification d\'eaux riches en algues ou en matières en suspension légères.'
            }
          ]
        },
        {
          titre: '4. Compressibilité et élasticité — phénomènes transitoires',
          texte: 'L\'eau est généralement considérée comme incompressible pour les calculs hydrauliques en régime permanent. En réalité, le coefficient de compressibilité volumétrique de l\'eau est β ≈ 4,6 × 10⁻¹⁰ Pa⁻¹, ce qui signifie qu\'une pression de 1 bar (10⁵ Pa) réduit le volume d\'eau de seulement 4,6 × 10⁻⁵ = 0,0046%. Cette compression est totalement négligeable dans les calculs courants.\n\nCependant, la compressibilité de l\'eau, même minime, est à l\'origine des coups de bélier : lors d\'une fermeture rapide d\'une vanne ou d\'un arrêt de pompe, la variation de quantité de mouvement du fluide crée une onde de pression qui se propage dans la conduite à la vitesse du son dans l\'eau (environ 1 200-1 400 m/s). L\'amplitude de cette surpression peut atteindre plusieurs dizaines de bars dans une conduite rigide, suffisante pour provoquer des ruptures.\n\nLa célérité de l\'onde de coup de bélier dans une conduite dépend du module d\'élasticité de l\'eau (E_eau = 2,07 GPa) et de la rigidité de la conduite. Pour une conduite acier rigide : c = √(E_eau/ρ) ≈ 1 440 m/s. Pour une conduite PVC plus flexible, c est réduit à 300-400 m/s grâce à l\'élasticité de la paroi, ce qui atténue les coups de bélier.',
          sous_sections: [
            {
              titre: '4.1 Eau et gel : dilatation et protection des réseaux',
              texte: 'Contrairement à presque tous les liquides, l\'eau se dilate en gelant (densité de la glace : 917 kg/m³ < 998 kg/m³ de l\'eau liquide). Cette expansion de 9% génère des pressions considérables dans un espace confiné et peut faire éclater des conduites. La protection contre le gel consiste à enfouir les conduites en-dessous de la profondeur de gel (0,80 m à 1,20 m selon les régions françaises), à prévoir des purges en points bas, et à calorifuger les tronçons aériens ou faiblement enterrés.'
            }
          ]
        }
      ],
      points: [
        'Masse volumique eau à 20°C : ρ ≈ 998 kg/m³ ≈ 1 000 kg/m³ pour calculs courants',
        'Masse volumique eau à 4°C : maximum à 999,97 kg/m³',
        'Viscosité dynamique eau à 20°C : µ = 1,002 × 10⁻³ Pa·s = 1 mPa·s',
        'Viscosité cinématique : ν = µ/ρ ; eau à 20°C : ν ≈ 1,006 × 10⁻⁶ m²/s',
        'La viscosité de l\'eau DIMINUE quand la température augmente',
        'Tension superficielle eau à 20°C : σ = 0,0728 N/m',
        'L\'eau se DILATE en gelant (9%) : risque de rupture de conduite',
        'Coup de bélier : onde de pression à 1 200-1 400 m/s dans une conduite acier',
        'Débit massique Qm = ρ × Q ; important quand ρ ≠ 1 000 kg/m³',
        'Eau de mer : ρ ≈ 1 025 kg/m³ ; boues 3% MS : ρ ≈ 1 018 kg/m³'
      ],
      formules: [
        'Masse volumique : ρ = m / V → [kg/m³] ; eau à 20°C : 998,2 kg/m³',
        'Poids volumique : γ = ρ × g → [N/m³] ; eau à 20°C : 9 792 N/m³',
        'Viscosité cinématique : ν = µ / ρ → [m²/s] ; eau à 20°C : ~10⁻⁶ m²/s',
        'Débit massique : Qm = ρ × Q → [kg/s] ; Q en [m³/s]',
        'Hauteur capillaire : h = 2σ / (ρ × g × r) → [m] ; r = rayon capillaire [m]'
      ],
      retenir: 'ρ eau ≈ 1 000 kg/m³ · µ eau 20°C ≈ 1 mPa·s · Viscosité diminue avec la température · ν = µ/ρ pour Reynolds · Eau gèle en dilatant : protéger les réseaux · Coup de bélier : fermeture rapide = onde de pression dangereuse'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un pompe débite Q = 80 m³/h d\'eau à 15°C (ρ = 999,1 kg/m³). Calculer le débit massique en kg/s et en t/h.',
        solution: 'Q = 80 m³/h = 80/3 600 = 0,02222 m³/s\nQm = ρ × Q = 999,1 × 0,02222 = 22,20 kg/s\nEn t/h : 22,20 kg/s × 3 600 s/h / 1 000 = 79,92 t/h ≈ 80 t/h\n(La différence avec 80 m³/h est de 0,09%, négligeable en pratique)'
      },
      {
        n: '2',
        enonce: 'Calculer la viscosité cinématique ν de l\'eau à 10°C (µ = 1,307 × 10⁻³ Pa·s, ρ = 999,7 kg/m³). Comparer à la valeur à 20°C (ν = 1,006 × 10⁻⁶ m²/s).',
        solution: 'ν(10°C) = µ/ρ = 1,307×10⁻³ / 999,7 = 1,307×10⁻⁶ m²/s\nRapport : ν(10)/ν(20) = 1,307/1,006 = 1,30\nLa viscosité cinématique est 30% plus élevée à 10°C qu\'à 20°C. Le nombre de Reynolds Re = VD/ν sera donc 30% plus bas à 10°C à débit et diamètre identiques → l\'écoulement sera légèrement plus laminaire et les pertes de charge légèrement plus élevées.'
      },
      {
        n: '3',
        enonce: 'Des boues épaissies ont une teneur en MS de 5% et une masse volumique de 1 033 kg/m³. Un digesteur de 1 500 m³ est rempli aux 3/4. Calculer la masse de boues et la masse sèche.',
        solution: 'Volume de boues : V = 1 500 × 0,75 = 1 125 m³\nMasse de boues : m = ρ × V = 1 033 × 1 125 = 1 162 125 kg ≈ 1 162 t\nMasse sèche (MS) : m_MS = 0,05 × 1 162 125 = 58 106 kg ≈ 58,1 t'
      },
      {
        n: '4',
        enonce: 'Un tuyau en acier DN100 véhicule de l\'eau à 60°C (µ = 0,467 mPa·s, ρ = 983 kg/m³). Calculer ν et commenter par rapport à l\'eau à 20°C.',
        solution: 'ν(60°C) = µ/ρ = 0,467×10⁻³ / 983 = 4,75×10⁻⁷ m²/s = 0,475×10⁻⁶ m²/s\nComparaison : ν(20°C) = 1,006×10⁻⁶ m²/s\nÀ 60°C, ν est divisée par 1,006/0,475 ≈ 2,1 par rapport à 20°C.\nLe nombre de Reynolds à 60°C est 2 fois plus élevé qu\'à 20°C pour les mêmes conditions hydrauliques → turbulence plus marquée, mais les pertes de charge de frottement turbulent dépendent peu de la viscosité (régime rugueux).'
      },
      {
        n: '5',
        enonce: 'Calculer la hauteur capillaire dans un sol limoneux avec des pores de 5 µm de rayon (σ = 0,0728 N/m, ρ = 1 000 kg/m³).',
        solution: 'h = 2σ / (ρ × g × r) = 2 × 0,0728 / (1 000 × 9,81 × 5×10⁻⁶)\n= 0,1456 / (0,04905) = 2,97 m\nDans un sol limoneux, la frange capillaire peut s\'élever à près de 3 m au-dessus de la nappe. Ce phénomène retient l\'eau disponible pour les plantes et joue un rôle important dans les études de drainage agricole.'
      },
      {
        n: '6',
        enonce: 'Une conduite en PVC DN200 se ferme brusquement. La célérité du coup de bélier est c = 350 m/s, la vitesse d\'écoulement V = 1,2 m/s. Estimer la surpression ΔP = ρ × c × V.',
        solution: 'ΔP = ρ × c × V = 1 000 × 350 × 1,2 = 420 000 Pa = 4,2 bar\nCette surpression s\'ajoute à la pression statique. Si la pression de service est 5 bar, la pression maximale atteint 5 + 4,2 = 9,2 bar — à vérifier vis-à-vis de la pression nominale de la conduite.\nPour réduire le coup de bélier : allonger le temps de fermeture de la vanne (fermeture progressive en 5-10 secondes), installer un anti-bélier (réservoir tampon ou vase d\'expansion).'
      },
      {
        n: '7',
        enonce: 'Comparer le poids volumique γ de l\'eau à 5°C (ρ = 999,9 kg/m³) et à 80°C (ρ = 971,8 kg/m³). Calculer la différence de pression hydrostatique au fond d\'un réservoir de 10 m de hauteur.',
        solution: 'γ(5°C) = 999,9 × 9,81 = 9 809 N/m³\nγ(80°C) = 971,8 × 9,81 = 9 534 N/m³\nPression fond à 5°C : p = γ × h = 9 809 × 10 = 98 090 Pa = 0,981 bar\nPression fond à 80°C : p = 9 534 × 10 = 95 340 Pa = 0,953 bar\nDifférence : 98 090 - 95 340 = 2 750 Pa = 0,028 bar\nLa différence est faible (2,8%) mais doit être prise en compte dans les systèmes de mesure de niveau par capteur de pression hydrostatique.'
      },
      {
        n: '8',
        enonce: 'Pourquoi une conduite enterrée à 0,70 m de profondeur en Lorraine risque-t-elle de geler en hiver (profondeur de gel : 0,85 m) ? Quelle est l\'augmentation de volume lors du gel de 100 L d\'eau ?',
        solution: 'La profondeur de gel en Lorraine est 0,85 m : le sol gèle jusqu\'à 0,85 m. Une conduite enterrée à 0,70 m est en zone de gel → risque élevé d\'éclatement.\nAugmentation de volume : ρ_eau = 1 000 kg/m³, ρ_glace = 917 kg/m³\nVolume de glace pour 100 L d\'eau : V_glace = masse/ρ_glace = 100 kg / 917 kg/m³ = 0,1091 m³ = 109,1 L\nExpansion = 109,1 - 100 = 9,1 L → +9,1%\nUne conduite de DN100 fermée aux deux extrémités peut subir une pression de plusieurs centaines de bars si l\'eau gèle complètement → rupture systématique des conduites et raccords.'
      }
    ]
  },

  'GEMEAU-010': {
    id: 'GEMEAU-010',
    titre: 'Pression et équilibre hydrostatique',
    fiche: {
      intro: 'La pression est la grandeur centrale de la distribution d\'eau : chaque réseau AEP est conçu pour maintenir une pression minimale de service (généralement 2 à 3 bars chez l\'abonné) et une pression maximale ne dépassant pas 6 bars (risque de fuites et de rupture). Un technicien qui ne maîtrise pas les notions de pression absolue, relative, et de loi hydrostatique ne peut pas interpréter les relevés de manomètre, calculer les charges aux points extrêmes d\'un réseau, ou dimensionner les organes de sécurité.',
      sections: [
        {
          titre: '1. Définitions : pression absolue, relative et pression atmosphérique',
          texte: 'La pression absolue P_abs est la pression totale mesurée par rapport au vide parfait (P = 0). La pression atmosphérique standard est P_atm = 101 325 Pa = 1,01325 bar = 1 atm. La pression relative (ou manométrique) P_rel est la pression mesurée par rapport à l\'atmosphère locale : P_rel = P_abs - P_atm. Un manomètre de réseau indique toujours la pression relative : une indication de 4 bar signifie P_abs = 4 + 1,013 = 5,013 bar.\n\nLa pression de vapeur saturante P_vap est la pression à laquelle l\'eau se vaporise à une température donnée. À 20°C, P_vap = 2 337 Pa ≈ 0,023 bar. Si la pression absolue en un point de l\'installation descend en-dessous de P_vap, l\'eau bout localement (même à température ambiante) : c\'est la cavitation, phénomène destructeur pour les pompes et les roues hydrauliques.\n\nLa pression négative (dépression) est possible en pression relative : P_rel < 0 signifie P_abs < P_atm. Elle se produit par exemple à l\'aspiration d\'une pompe ou dans un siphon. La pression absolue ne peut jamais être négative : la valeur limite est 0 Pa (vide parfait), atteinte par approximation lors de la cavitation.',
          sous_sections: [
            {
              titre: '1.1 Unités de pression et conversions pratiques',
              texte: '1 bar = 100 000 Pa = 100 kPa ; 1 MPa = 10 bar ; 1 atm = 1,01325 bar ; 1 mCE (mètre de colonne d\'eau) = ρgh = 1 000 × 9,81 × 1 = 9 810 Pa ≈ 0,098 bar ≈ 0,1 bar. Règle pratique : 1 bar ≈ 10 mCE. Pour passer de bar en mCE : multiplier par 10,2. Pour passer de mCE en bar : diviser par 10,2. Cette approximation est utilisée quotidiennement par les techniciens de réseau qui pensent en "mètres de charge" plutôt qu\'en bars.'
            }
          ]
        },
        {
          titre: '2. Loi de la pression hydrostatique',
          texte: 'Dans un fluide en repos, la pression ne dépend que de la profondeur h par rapport à la surface libre. La loi fondamentale de la statique des fluides est : P = P_surface + ρ × g × h, où h est la profondeur (positive vers le bas). Pour une surface libre à pression atmosphérique : P_abs = P_atm + ρgh et P_rel = ρgh.\n\nConséquences pratiques : dans un château d\'eau de 20 m de hauteur d\'eau, la pression au fond est P_rel = 1 000 × 9,81 × 20 = 196 200 Pa ≈ 2,0 bar. Lorsque la pompe alimente ce réservoir, la pression à la conduite d\'entrée doit être au moins égale à la charge correspondant au niveau d\'eau le plus haut. À 25 m de remplissage, P_rel = 1 000 × 9,81 × 25 = 245 250 Pa = 2,45 bar.\n\nLa loi de Pascal stipule que toute variation de pression appliquée à un liquide en équilibre se transmet intégralement et instantanément à tous les points de ce liquide. C\'est le principe du vérin hydraulique. En réseau AEP, une hausse de pression au point de départ (château d\'eau) se retrouve à tous les branchements, atténuée ou amplifiée uniquement par la différence d\'altitude.',
          sous_sections: [
            {
              titre: '2.1 Surface libre et surface piézométrique',
              texte: 'La surface piézométrique (ou ligne piézométrique) est le lieu des cotes auxquelles l\'eau monterait dans un piézomètre (tube vertical ouvert) connecté à n\'importe quel point du réseau. Dans un réseau AEP, la surface piézométrique correspond au niveau d\'eau dans le château d\'eau (pour la pression statique). À n\'importe quelle cote z, la pression relative dans la conduite est P = γ × (z_piézo - z) où z_piézo est la cote de la surface piézométrique.'
            }
          ]
        },
        {
          titre: '3. Instruments de mesure de la pression',
          texte: 'Le manomètre à bourdon est le plus courant : un tube courbé se déroule sous l\'effet de la pression interne, entraînant une aiguille sur un cadran gradué. Il mesure la pression relative. Sa précision est de l\'ordre de 1 à 2% de la pleine échelle. Pour les mesures de précision, on utilise des manomètres numériques à membrane avec sortie 4-20 mA, dont la précision peut atteindre 0,1% de la pleine échelle.\n\nLe piézomètre est un simple tube vertical ouvert, relié au point de mesure. La hauteur d\'eau dans le tube donne directement la pression en mCE : h = P_rel / (ρg). Simple mais encombrant pour les pressions élevées (pour 4 bar, le tube ferait 40 m de haut).\n\nPour la mesure en continu de la pression dans les réseaux de distribution, des capteurs de pression électroniques (transmetteurs) avec sortie analogique 4-20 mA ou numérique (MODBUS, Profibus) sont utilisés. Ils sont intégrés aux automates de télégestion. Un réseau AEP correctement instrumenté dispose de capteurs de pression en amont et en aval de chaque secteur, permettant de détecter les variations anormales (fuites, vannes fermées accidentellement).',
          sous_sections: [
            {
              titre: '3.1 Mesure différentielle et débitmétrie',
              texte: 'La mesure différentielle de pression (ΔP) entre deux points d\'un étranglement (venturi, diaphragme, tuyère) permet de calculer le débit par la formule de Bernoulli. Le débitmètre à diaphragme mesure la chute de pression ΔP = P1 - P2 de part et d\'autre du diaphragme : Q = Cd × S × √(2ΔP/ρ), où Cd est le coefficient de décharge et S la section du diaphragme. Ce principe est robuste et fiable pour les gros débits.'
            }
          ]
        },
        {
          titre: '4. Pression dans les réseaux AEP : pression de service et seuils',
          texte: 'La réglementation française fixe des seuils de pression dans les réseaux AEP. La pression minimale de desserte est 1 bar à tous les branchements d\'abonné (ce minimum est souvent relevé à 2 bar dans les cahiers des charges des concessionnaires). La pression maximale est 6 bar : au-delà, les risques de rupture de canalisation et de fuites augmentent exponentiellement.\n\nLa pression statique (sans circulation) peut différer de la pression dynamique (avec circulation). Une conduite de refoulement à l\'arrêt de pompe supporte la pression statique de la colonne d\'eau entre la pompe et le château d\'eau. Pour un château d\'eau à 35 m de hauteur, la pression statique à la pompe est P_stat = ρg × 35 = 343 350 Pa = 3,43 bar.\n\nLes disconnecteurs et les réducteurs de pression (RP) permettent de séparer les zones de pression. Un RP règle automatiquement la pression en aval à une valeur fixée, quelle que soit la pression amont (dans la plage de fonctionnement). Par exemple, un lotissement en fond de vallée peut être alimenté à 5 bar via le réseau principal, mais un RP impose 2,5 bar en aval pour protéger les branchements du lotissement.',
          sous_sections: [
            {
              titre: '4.1 Calcul de la pression en bout de réseau',
              texte: 'En hydraulique de réseau simple (une seule conduite), la pression au bout du réseau est : P_bout = P_départ - Δh_pertes_charge - ρg × (z_bout - z_départ). Les pertes de charge consomment de la charge hydraulique ; la différence d\'altitude modifie la pression statique (si le bout est plus haut, la pression est plus basse). Un réseau bien dimensionné maintient P_bout ≥ 2 bar en période de pointe, avec les pompes tournant à leur point de fonctionnement nominal.'
            }
          ]
        }
      ],
      points: [
        'Pression relative = pression mesurée par rapport à l\'atmosphère (ce que lit le manomètre)',
        'Pression absolue = pression relative + P_atmosphérique (1,013 bar)',
        'Loi hydrostatique : P_rel = ρ × g × h ; 1 m d\'eau ≈ 0,098 bar ≈ 9 810 Pa',
        '1 bar ≈ 10,2 mCE (mètres de colonne d\'eau)',
        'Cavitation si P_abs < P_vapeur saturante (≈ 0,023 bar à 20°C)',
        'Pascal : toute variation de pression se transmet à tous les points du fluide en repos',
        'Pression minimale réseau AEP : 1 bar (règlementaire) à 2 bar (recommandé)',
        'Pression maximale réseau AEP : 6 bar',
        'Surface piézométrique = niveau d\'eau dans un tube piézométrique ouvert',
        'Réducteur de pression : impose une pression aval fixe indépendamment de l\'amont'
      ],
      formules: [
        'Pression hydrostatique : P[Pa] = ρ × g × h → ρ = 1 000 kg/m³, g = 9,81 m/s², h en m',
        'Relation pression / hauteur d\'eau : h[mCE] = P[bar] × 10,2',
        'Pression absolue : P_abs = P_rel + P_atm → P_atm = 101 325 Pa = 1,013 bar',
        'Conversion : 1 bar = 100 000 Pa = 100 kPa = 10,2 mCE',
        'Pression bout de réseau : P_bout = P_départ - Σ Δh_pertes - ρg × (z_bout - z_départ)'
      ],
      retenir: 'P_rel = ρgh · 1 bar ≈ 10 mCE · Manomètre lit la pression relative · P_abs = P_rel + P_atm · Cavitation si P_abs < P_vapeur · Min réseau AEP = 1-2 bar · Max = 6 bar · Surface piézométrique = niveau d\'eau en tube ouvert'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un manomètre à l\'entrée d\'une station indique 4,8 bar. Calculer la pression absolue et la hauteur d\'eau équivalente.',
        solution: 'P_abs = P_rel + P_atm = 4,8 + 1,013 = 5,813 bar = 581 300 Pa\nh = P_rel / (ρg) = 480 000 / (1 000 × 9,81) = 48,93 mCE\nOu : h = 4,8 × 10,2 = 48,96 mCE ≈ 49 mCE'
      },
      {
        n: '2',
        enonce: 'Un château d\'eau a son fond à la cote 180 m NGF et le niveau d\'eau à la cote 195 m NGF. Calculer la pression statique à un branchement situé à la cote 152 m NGF.',
        solution: 'Différence de cote : 195 - 152 = 43 m\nP_rel = ρg × h = 1 000 × 9,81 × 43 = 421 830 Pa = 4,22 bar\nLa pression statique est de 4,22 bar, inférieure à 6 bar → pas de risque de dépassement de pression maximale.'
      },
      {
        n: '3',
        enonce: 'À l\'aspiration d\'une pompe centrifuge, la pression absolue est 85 000 Pa. Y a-t-il risque de cavitation à 20°C (P_vap = 2 337 Pa) ?',
        solution: 'P_abs aspiration = 85 000 Pa\nP_vap (20°C) = 2 337 Pa\nP_abs >> P_vap (85 000 >> 2 337) → pas de risque de cavitation.\nLe coefficient de sécurité est : 85 000 / 2 337 = 36,4. Il faudrait que la pression absolue descende en-dessous de 2 337 Pa pour déclencher la cavitation, ce qui correspond à une dépression de (101 325 - 2 337) = 98 988 Pa = 9,9 bar en pression relative, soit une hauteur d\'aspiration de 10,1 m — valeur très difficile à atteindre en pratique.'
      },
      {
        n: '4',
        enonce: 'Un piézomètre relié à une conduite montre une hauteur d\'eau de 38 m au-dessus de l\'axe de la conduite. Quelle est la pression en bar dans la conduite ?',
        solution: 'P_rel = ρgh = 1 000 × 9,81 × 38 = 372 780 Pa\nEn bar : P = 372 780 / 100 000 = 3,73 bar\nOu : P = 38 / 10,2 = 3,73 bar ✓'
      },
      {
        n: '5',
        enonce: 'Calculer la pression au fond d\'un réservoir rectangulaire de 5 m de profondeur, 10 m de long et 4 m de large. Calculer aussi la force totale exercée sur le fond.',
        solution: 'Pression au fond : P = ρgh = 1 000 × 9,81 × 5 = 49 050 Pa = 0,49 bar\nSurface du fond : S = 10 × 4 = 40 m²\nForce totale sur le fond : F = P × S = 49 050 × 40 = 1 962 000 N = 1 962 kN ≈ 200 tonnes-force'
      },
      {
        n: '6',
        enonce: 'Un réducteur de pression est réglé à 2,5 bar. La pression amont est 5,4 bar, la cote amont et aval sont égales. Quelle est la pression aval et le rôle du RP ?',
        solution: 'Le RP impose P_aval = 2,5 bar, quelles que soient les variations de la pression amont (dans la plage de fonctionnement 2,5-10 bar typiquement).\nÉnergie dissipée par le RP : ΔP = 5,4 - 2,5 = 2,9 bar = 290 000 Pa\nPuissance dissipée pour Q = 10 m³/h = 0,00278 m³/s :\nP = ΔP × Q = 290 000 × 0,00278 = 806 W ≈ 0,8 kW (perdue en chaleur dans le RP).\nLe RP protège les branchements aval contre les surpressions en maintenant une pression constante et adaptée.'
      },
      {
        n: '7',
        enonce: 'Deux bacs communicants (reliés à la base) : bac A contient de l\'eau (ρ=1 000 kg/m³), bac B contient une solution saline (ρ=1 080 kg/m³). Les niveaux peuvent-ils être à la même hauteur à l\'équilibre ? Justifier.',
        solution: 'Non. À l\'équilibre, les pressions à la jonction (fond) sont égales :\nP_A_fond = P_atm + ρ_A × g × h_A\nP_B_fond = P_atm + ρ_B × g × h_B\nÉgalité : ρ_A × h_A = ρ_B × h_B\n1 000 × h_A = 1 080 × h_B\nh_A / h_B = 1 080/1 000 = 1,08\nLe niveau d\'eau douce est 8% plus haut que le niveau de solution saline.\nExemple : si h_B = 1,00 m, alors h_A = 1,08 m. Les niveaux ne peuvent pas être égaux si les masses volumiques diffèrent.'
      },
      {
        n: '8',
        enonce: 'Un réseau de distribution part du château d\'eau (cote piézométrique = 220 m NGF) et dessert un point P (cote 185 m NGF, pertes de charge = 1,2 bar). Calculer la pression au point P. Est-elle conforme ?',
        solution: 'Différence de cote : 220 - 185 = 35 m → pression statique = 35/10,2 = 3,43 bar\nPression dynamique : P_P = 3,43 - 1,2 = 2,23 bar\nConformité : P_P = 2,23 bar > 1 bar (minimum réglementaire) et > 2 bar (recommandé) → conforme.\nMargin : 2,23 - 2 = 0,23 bar de marge au-dessus du recommandé, ce qui est juste suffisant en période de pointe (les pertes de charge augmentent alors).'
      }
    ]
  },

  'GEMEAU-011': {
    id: 'GEMEAU-011',
    titre: 'Forces hydrostatiques et poussée d\'Archimède',
    fiche: {
      intro: 'Dès qu\'un fluide est en contact avec une surface (paroi de réservoir, porte de vanne, fond d\'un ouvrage), il exerce des forces de pression sur cette surface. Le calcul de ces forces est indispensable pour dimensionner les structures hydrauliques : un mauvais calcul de la poussée sur une porte étanche peut conduire à la rupture de l\'ouvrage. La poussée d\'Archimède intervient quant à elle dans la flottabilité des ouvrages enterrés et des canalisations vides.',
      sections: [
        {
          titre: '1. Force de pression sur une surface plane horizontale',
          texte: 'La force exercée par un fluide sur une surface horizontale (fond d\'un réservoir, fond d\'un bassin) est uniforme sur toute la surface puisque la pression est constante à une profondeur donnée. La force totale est : F = P × S = ρ × g × h × S, où h est la profondeur de la surface et S son aire.\n\nPour le fond d\'un bassin rectangulaire de dimensions 20 m × 8 m, rempli à une hauteur de 4 m d\'eau : F = 1 000 × 9,81 × 4 × (20 × 8) = 6 278 400 N ≈ 6 280 kN. Cette force est dirigée vers le bas sur le fond, et vers le haut sur les éventuels couvercles (force de soulèvement). Elle doit être reprise par les fondations ou les ancrages de l\'ouvrage.\n\nSi le bassin est couvert et en dépression (par exemple un bassin de biogaz sous pression négative à -5 mbar), la force sur le couvercle est : F = |ΔP| × S = 500 Pa × 160 m² = 80 000 N = 80 kN vers le haut. Les couvercles flexibles (membranes) ou les structures légères doivent être dimensionnées pour résister à cette sollicitation.',
          sous_sections: [
            {
              titre: '1.1 Force sur les parois verticales',
              texte: 'Sur une paroi verticale, la pression varie linéairement avec la profondeur : P(h) = ρgh. La force résultante sur une paroi rectangulaire de largeur b et de hauteur H, en contact avec un fluide depuis la surface jusqu\'à la profondeur H est : F = ρg × (H/2) × (b × H) = ρg × b × H² / 2. Le point d\'application de cette force (centre de poussée) est à 2H/3 du fond (ou H/3 depuis la surface), car la pression est plus forte en bas.'
            }
          ]
        },
        {
          titre: '2. Centre de poussée et moment de renversement',
          texte: 'Le centre de poussée est le point d\'application de la résultante des forces de pression. Pour une surface plane immergée, il n\'est pas au centre géométrique mais plus profond, car la pression est plus élevée dans les parties profondes. Pour une paroi verticale rectangulaire allant de la surface jusqu\'à H : le centre de poussée est à H/3 au-dessus du fond.\n\nLe moment de renversement autour d\'un axe horizontal (charnière) détermine si l\'ouvrage peut basculer. Pour une vanne plane verticale de hauteur H et de largeur b, retenant de l\'eau depuis la surface, le moment par rapport au bas est M = F × H/3 = ρgbH²/2 × H/3 = ρgbH³/6. Ce moment doit être équilibré par le dispositif de blocage ou le poids propre de la vanne.\n\nPour les radiers de bassins enterrés, le calcul doit tenir compte non seulement de la poussée de l\'eau intérieure mais aussi de la poussée des terres et des eaux souterraines sur les parois extérieures. En phase de vidange d\'un bassin (maintenance), si la nappe est haute, la poussée de la nappe sur le radier peut soulever l\'ouvrage — c\'est le risque de flottaison des ouvrages enterrés.',
          sous_sections: [
            {
              titre: '2.1 Paroi inclinée et composante horizontale',
              texte: 'Pour une surface inclinée d\'angle θ par rapport à l\'horizontale, la force hydrostatique a une composante horizontale Fh = ρg × h_cg × S_projetée_verticale (où h_cg est la profondeur du centre de gravité de la surface) et une composante verticale Fv = ρg × V_colonne_eau_au-dessus. La résultante est perpendiculaire à la surface. Cette décomposition est utile pour calculer les forces sur les vannes inclinées ou les coques de bateaux.'
            }
          ]
        },
        {
          titre: '3. Poussée d\'Archimède',
          texte: 'Le théorème d\'Archimède énonce que tout corps plongé dans un fluide subit de la part de ce fluide une poussée verticale vers le haut, égale au poids du fluide déplacé. F_A = ρ_fluide × g × V_immergé, où V_immergé est le volume de fluide déplacé (= volume du corps si entièrement immergé). Pour un corps de masse m : si F_A > m×g, le corps flotte ; si F_A < m×g, il coule ; si F_A = m×g, il est en équilibre indifférent.\n\nEn pratique, les conduites PVC ou PEHD vides enterrées sous la nappe phréatique subissent une poussée d\'Archimède significative. Une conduite DN600 en PVC (diamètre extérieur ≈ 630 mm, épaisseur ≈ 20 mm) de 1 m de longueur : V_extérieur = π × 0,63² / 4 × 1 = 0,312 m³. Masse de la conduite ≈ 30 kg. Poussée d\'Archimède = 1 000 × 9,81 × 0,312 = 3 061 N = 312 kgf. La conduite est largement plus légère que le fluide déplacé : elle flotterait si non maintenue.\n\nLa stabilité des ouvrages enterrés (regards, boîtes de branchement, cuves de stockage enterrées) doit être vérifiée en phase de construction quand ils sont vides et la nappe haute. Les solutions sont : le lestage (coulage d\'un radier béton plus lourd), l\'ancrage (tirants au sol), ou la mise en oeuvre en période de basses eaux.',
          sous_sections: [
            {
              titre: '3.1 Calcul de flottabilité d\'une cuve enterrée',
              texte: 'Condition d\'équilibre : Poids_cuve + Poids_contenu ≥ Poussée_Archimède. Si la cuve est vide : Poids_cuve ≥ ρ_eau × g × V_ext. Le rapport Poids_cuve / (ρ_eau × g × V_ext) est le coefficient de flottabilité. S\'il est < 1, la cuve flotte. Pour éviter le flottaison : F_lest = ρ_eau × g × V_ext - Poids_cuve (masse de béton ou de remplissage nécessaire).'
            }
          ]
        },
        {
          titre: '4. Applications : poussée sur les canalisations et les conduites en charge',
          texte: 'Une conduite en charge sous pression subit des efforts internes liés à la pression du fluide. La force longitudinale exercée sur un bouchon ou une réduction de section est F = P × S, où S est la section de la conduite. Pour une conduite DN500 (S = π × 0,25² = 0,196 m²) sous 4 bars (400 000 Pa) : F = 400 000 × 0,196 = 78 400 N = 78,4 kN. Ce bouchon de conduite est soumis à une force de 8 tonnes : les buttes d\'appui en béton (butées) doivent reprendre cet effort.\n\nLes coudes de conduite subissent aussi des forces dues au changement de direction de l\'écoulement. Pour un coude à 90° de DN500 sous 4 bars : les composantes horizontale et verticale sont chacune égales à F = 78,4 kN, soit une résultante de √(78,4² + 78,4²) = 78,4 × √2 = 110,8 kN à 45° de la bissectrice. Ces efforts sont repris par des butées en béton coulées in situ lors de la pose.',
          sous_sections: [
            {
              titre: '4.1 Joints démontables et étanchéité',
              texte: 'Les joints d\'emboîtement (joints torique, joints manchettes) doivent résister à la poussée longitudinale. Les conduites sans enrobage rigide peuvent se "télescopage" sous l\'effet des variations de pression ou de température. Les assemblages à brides boulonnées (conduites métalliques ou acier) reprennent mécaniquement la force de traction longitudinale. Le calcul des boulons nécessite de connaître la force P×S et d\'appliquer un coefficient de sécurité d\'au moins 2 sur la résistance des boulons.'
            }
          ]
        }
      ],
      points: [
        'Force sur surface horizontale : F = P × S = ρgh × S',
        'Force sur paroi verticale rectangulaire (de surface à profondeur H) : F = ρgbH²/2',
        'Centre de poussée paroi verticale : à H/3 au-dessus du fond',
        'Archimède : F_A = ρ_fluide × g × V_immergé (vers le haut)',
        'Corps flotte si F_A > poids ; coule si F_A < poids',
        'Conduite PVC vide sous nappe : F_A >> poids propre → risque de flottaison',
        'Butée béton pour reprendre efforts sur coudes et bouchons de conduite en charge',
        'Force sur bouchon : F = P × S (pression × section de la conduite)',
        'Vérifier la flottaison des ouvrages enterrés quand ils sont vides et nappe haute',
        'F = ρgbH³/6 = moment de renversement sur une vanne plane verticale (axe en bas)'
      ],
      formules: [
        'Force pression surface horizontale : F = ρ × g × h × S → [N] ; h = profondeur [m], S = aire [m²]',
        'Force pression paroi verticale (largeur b, hauteur H depuis surface) : F = ρ × g × b × H² / 2',
        'Centre de poussée paroi verticale : y_CP = H/3 depuis le fond = 2H/3 depuis la surface',
        'Poussée Archimède : F_A = ρ_fluide × g × V_immergé → [N]',
        'Force sur bouchon de conduite : F = P × S → [N] ; P [Pa], S = π × D² / 4 [m²]'
      ],
      retenir: 'F = P×S pour les surfaces horizontales · Centre de poussée à H/3 depuis le fond · Archimède = poids du fluide déplacé · Conduite PVC vide sous nappe = risque flottaison · Butée béton pour efforts sur coudes · Vérifier flottaison ouvrages enterrés vides'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un réservoir rectangulaire de fond de 8 m × 5 m est rempli à 3,5 m. Calculer la force totale exercée sur le fond.',
        solution: 'P_fond = ρgh = 1 000 × 9,81 × 3,5 = 34 335 Pa\nS_fond = 8 × 5 = 40 m²\nF = 34 335 × 40 = 1 373 400 N = 1 373 kN ≈ 140 t'
      },
      {
        n: '2',
        enonce: 'Une vanne plane rectangulaire (L=2 m, H=1,5 m) retient de l\'eau depuis la surface libre. Calculer la force horizontale résultante et la position du centre de poussée.',
        solution: 'F = ρg × b × H²/2 = 1 000 × 9,81 × 2 × 1,5²/2 = 19 620 × 2,25 = 22 072 N ≈ 22,1 kN\nCentre de poussée : y_CP = H/3 = 1,5/3 = 0,5 m depuis le fond\n(Soit à 1,5 - 0,5 = 1 m sous la surface libre)'
      },
      {
        n: '3',
        enonce: 'Une conduite PEHD DN400 (diamètre ext. 450 mm, épaisseur 20 mm) de 12 m de long est posée en nappe. Calculer la poussée d\'Archimède et comparer au poids de la conduite (masse volumique PEHD ≈ 950 kg/m³).',
        solution: 'Volume extérieur : V_ext = π × 0,45² / 4 × 12 = π × 0,2025/4 × 12 = 1,908 m³\nPoussée Archimède : F_A = 1 000 × 9,81 × 1,908 = 18 718 N = 18,7 kN\nVolume matière PEHD : V_mat = π/4 × (0,45² - 0,41²) × 12 = π/4 × (0,2025 - 0,1681) × 12 = π/4 × 0,0344 × 12 = 0,324 m³\nMasse conduite : m = 950 × 0,324 = 308 kg → Poids = 3 021 N = 3,0 kN\nF_A / Poids = 18,7 / 3,0 = 6,2 → La conduite est 6 fois plus légère que le fluide déplacé : elle flotte très fortement si vide et non ancrée.'
      },
      {
        n: '4',
        enonce: 'Un regard de visite en béton de 1 m × 1 m × 1,5 m (hauteur), pesant 900 kg, est placé dans un sol à nappe haute. Flotte-t-il si vide ? Quelle masse de béton ajouter pour assurer un coefficient de sécurité de 1,5 ?',
        solution: 'V_ext = 1 × 1 × 1,5 = 1,5 m³\nF_A = 1 000 × 9,81 × 1,5 = 14 715 N\nPoids regard = 900 × 9,81 = 8 829 N < 14 715 N → le regard flotte !\nPour CS = 1,5 : Poids_total ≥ CS × F_A = 1,5 × 14 715 = 22 073 N\nMasse totale nécessaire : 22 073 / 9,81 = 2 250 kg\nMasse de béton à ajouter : 2 250 - 900 = 1 350 kg (ballast béton coulé dans le fond)'
      },
      {
        n: '5',
        enonce: 'Calculer la force longitudinale sur un bouchon en DN300 (diamètre int. = 300 mm) sous une pression de 6 bar. Combien de boulons M20 (résistance 15 kN/boulon) faut-il pour le fixer avec CS=2 ?',
        solution: 'S = π × 0,30²/4 = π × 0,09/4 = 0,07069 m²\nF = P × S = 600 000 × 0,07069 = 42 412 N = 42,4 kN\nAvec CS = 2 : F_requise = 2 × 42,4 = 84,8 kN\nNombre de boulons = 84 800 / 15 000 = 5,65 → 6 boulons M20\nEn pratique, les brides DN300 ont 8 ou 12 trous de boulons.'
      },
      {
        n: '6',
        enonce: 'Un coude à 90° DN500 (diamètre int. = 500 mm) est sous 5 bar. Calculer la force résultante sur le coude et l\'angle de cette résultante par rapport à chaque branche.',
        solution: 'S = π × 0,25² = 0,1963 m²\nForce sur chaque branche : F = 500 000 × 0,1963 = 98 175 N ≈ 98,2 kN\nRésultante : F_r = √(F² + F²) = F × √2 = 98,2 × 1,414 = 138,9 kN\nDirection : 45° par rapport à chaque branche (bissectrice du coude)\nButée béton : volume de béton ≈ F_r / (γ_béton × g × φ) avec φ = facteur de frottement (0,5-0,7)'
      },
      {
        n: '7',
        enonce: 'Un flotteur sphérique de D = 0,5 m (masse 15 kg) est utilisé pour contrôler le niveau dans un réservoir. À quelle profondeur d\'immersion est-il en équilibre ?',
        solution: 'Équilibre : F_A = Poids → ρ_eau × g × V_immergé = m × g\nV_immergé = m / ρ_eau = 15 / 1 000 = 0,015 m³\nVolume total sphère : V_tot = π × 0,5³ / 6 = π × 0,125/6 = 0,0654 m³\nFraction immergée : 0,015 / 0,0654 = 22,9% du volume\nLa sphère s\'immerge jusqu\'à 22,9% de son volume → environ 1/4 immergée, ce qui correspond à une immersion de h ≈ 0,5 × (1 - √(1-0,229)) ≈ 0,13 m (par calcul géométrique du segment sphérique).'
      },
      {
        n: '8',
        enonce: 'Une porte étanche (2 m × 1,5 m) sépare deux compartiments : eau à 3 m de profondeur d\'un côté, eau à 1 m de l\'autre. Calculer la force résultante sur la porte.',
        solution: 'Force côté profond (h=3 m de surface à fond, porte = 1,5 m de haut, de h=1,5 m à h=3 m depuis la surface) :\nCeci est plus complexe : la porte est entre 1,5 m et 3 m de profondeur.\nPression moyenne côté A : h_moy = (1,5+3)/2 = 2,25 m → P_moy_A = 1000×9,81×2,25 = 22 072 Pa\nPression moyenne côté B (eau à 1 m donc porte est entre 0 m et 1 m, la partie de 1 m à 1,5 m est à l\'air du côté B) : simplifions en disant que côté B, profondeur 0-1 m, pression moyenne = ρgh_moy = 1000×9,81×0,5 = 4905 Pa sur 1/1,5 de la hauteur.\nApproche simplifiée : F_nette = ρg × S × (h_cg_A - h_cg_B). Avec h_cg_A = 2,25 m et h_cg_B = 0,5 m (sur la hauteur mouillée).\nF_A = 22 072 × 3 = 66 216 N ; F_B (sur 1 m de hauteur, 2 m de large) = 4905 × 2 = 9 810 N\nForce résultante ≈ 66 216 - 9 810 = 56 406 N ≈ 56,4 kN vers le côté B'
      }
    ]
  },

  'GEMEAU-012': {
    id: 'GEMEAU-012',
    titre: 'Débit, vitesse et conservation de la masse',
    fiche: {
      intro: 'Le débit est la grandeur hydraulique centrale de toute installation de distribution ou d\'assainissement. Le dimensionnement d\'une conduite, le choix d\'un compteur, la conception d\'un ouvrage de mesure : tout repose sur la compréhension du débit, de la vitesse d\'écoulement et du principe de continuité. Un technicien GEMEAU doit pouvoir calculer la vitesse dans une conduite, vérifier que le débit respecte les vitesses limites imposées, et analyser la répartition des débits dans un réseau ramifié.',
      sections: [
        {
          titre: '1. Débit volumique, débit massique et débit surfacique',
          texte: 'Le débit volumique Q [m³/s] est le volume de fluide traversant une section par unité de temps. Si le profil de vitesse est uniforme (en toute rigueur, cela n\'est vrai que pour un écoulement piston), Q = V × S, où V est la vitesse moyenne [m/s] et S la section [m²]. Pour les écoulements turbulents en conduite, on utilise la vitesse moyenne définie par cette relation : V = Q/S.\n\nLes unités pratiques du débit dans les métiers de l\'eau sont le m³/h pour les installations industrielles et le L/s pour les ouvrages hydrauliques. La conversion est Q[m³/h] = Q[L/s] × 3,6 ; Q[m³/j] = Q[L/s] × 86,4. Pour les grands cours d\'eau et les prises d\'eau de surface, le débit est exprimé en m³/s.\n\nLe débit massique Qm [kg/s] = ρ × Q est utile pour les bilans de masse et lorsque la masse volumique varie (eau chaude, eau salée, boues). Pour les calculs de dosage de réactifs : la masse de réactif injectée par unité de temps = Qm_réactif × Cstock, et la concentration dans l\'eau traitée = (Qm_réactif × Cstock) / Q_eau.',
          sous_sections: [
            {
              titre: '1.1 Section mouillée et vitesse moyenne',
              texte: 'Pour une conduite circulaire en charge (plein section) : S = π × D²/4. La vitesse moyenne V = Q/S = Q / (πD²/4) = 4Q/(πD²). Pour une conduite circulaire partiellement pleine (écoulement à surface libre), la section mouillée est une portion de disque dépendant du tirant d\'eau y. Pour y/D = 0,5 (demi-plein) : S = πD²/8 et P_mouillé = πD/2, donc R = D/4. Pour y/D = 0,81 : le débit est maximum (non pas à plein, car la résistance aux parois augmente moins vite que la section).'
            }
          ]
        },
        {
          titre: '2. Équation de continuité',
          texte: 'L\'équation de continuité traduit la conservation de la masse pour un fluide incompressible en régime permanent : en tout point d\'un écoulement sans fuites ni injections, le débit volumique est constant. Pour deux sections 1 et 2 d\'une conduite : Q1 = Q2, soit V1 × S1 = V2 × S2.\n\nConséquence fondamentale : si la section se réduit, la vitesse augmente proportionnellement. Pour une réduction de DN200 à DN100 (réduction de section d\'un facteur 4) : la vitesse quadruple. Réciproquement, un élargissement de conduite (diffuseur) réduit la vitesse et récupère de la pression (principe du venturi et de l\'ajutage convergent-divergent).\n\nPour un noeud de réseau où plusieurs conduites se rejoignent, la loi de conservation du débit s\'écrit : Σ Q_entrants = Σ Q_sortants (loi des noeuds, analogue à la loi de Kirchhoff en électricité). Si 3 conduites arrivent avec Q1 = 30 L/s, Q2 = 20 L/s, et une conduite repart, son débit est Q3 = 30 + 20 = 50 L/s.',
          sous_sections: [
            {
              titre: '2.1 Vérification des vitesses admissibles',
              texte: 'Les vitesses d\'écoulement admissibles dans les conduites sont encadrées pour deux raisons : vitesse minimale pour éviter les dépôts (auto-curage), vitesse maximale pour éviter l\'érosion et le bruit. Valeurs pratiques : réseaux AEP : V_min = 0,3 m/s, V_max = 1,5 à 2 m/s ; réseaux eaux usées gravitaires : V_auto-curage = 0,6 m/s minimum à plein section, V_max = 3 m/s ; conduites de refoulement : V = 0,8 à 1,5 m/s.'
            }
          ]
        },
        {
          titre: '3. Instruments de mesure du débit',
          texte: 'Les débitmètres se classent selon leur principe de mesure. Le débitmètre électromagnétique (EM) mesure la FEM induite par l\'eau conductrice se déplaçant dans un champ magnétique. Précision : 0,5 à 1%. Il nécessite un fluide conducteur (eau potable, eaux usées) et une conduite pleine. Il est le standard en AEP et en assainissement.\n\nLe compteur volumétrique à piston oscillant mesure le volume d\'eau qui traverse en déplaçant un piston. Précision : 2%. C\'est le compteur d\'eau potable standard chez les abonnés. Le compteur Woltmann (à turbine) est utilisé pour les gros débits (DN50 à DN400).\n\nLe débitmètre ultrasonique mesure la différence de temps de transit entre ondes acoustiques émises dans le sens du courant et à contre-courant. Il est non invasif (pinces fixées sur la conduite de l\'extérieur) et convient pour les grandes conduites métalliques. Précision : 1 à 3%. Le débitmètre Doppler mesure le décalage de fréquence des ultrasons réfléchis par les particules en suspension : il est utilisé pour les eaux usées mais nécessite des particules ou des bulles en suspension.',
          sous_sections: [
            {
              titre: '3.1 Mesure du débit en canal ouvert',
              texte: 'Pour les canaux, fossés et ruisseaux, les dispositifs de mesure sont les déversoirs (seuils) et les canaux jaugeurs. La loi de débit d\'un déversoir triangulaire 90° est Q = 1,42 × h^(5/2) [m³/s, h en m]. Pour un déversoir rectangulaire en mince paroi (largeur L) : Q = 1,84 × L × h^(3/2). Ces formules sont calibrées expérimentalement et valables pour des conditions de mesure précises (approche tranquille, déversoir propre, mesure correcte de h).'
            }
          ]
        },
        {
          titre: '4. Vitesses et débits dans les réseaux d\'assainissement',
          texte: 'Dans les réseaux d\'assainissement gravitaires, l\'objectif est de maintenir une vitesse d\'auto-curage d\'au moins 0,6 m/s en régime pluvial (au moins 2 fois par semaine selon le DTU 60.11) pour éviter l\'accumulation de dépôts organiques et minéraux. Cette condition détermine la pente minimale du réseau pour un diamètre donné.\n\nPour une conduite circulaire à section pleine avec K = 75 m^(1/3)/s (béton lisse) et une pente de 3‰ : V = K × R^(2/3) × i^(1/2) = 75 × (D/4)^(2/3) × 0,003^(1/2). Pour D = 0,200 m : R = 0,05 m, V = 75 × 0,05^(2/3) × 0,05477 = 75 × 0,1357 × 0,0548 = 0,558 m/s. Légèrement en-dessous de 0,6 m/s : une pente de 3,5‰ serait nécessaire.\n\nLors d\'une pluie intense, le débit peut dépasser le débit à plein section et l\'évacuation gravitaire ne suffit plus : c\'est le refoulement. Les réseaux unitaires en zone urbaine doivent être dimensionnés pour une pluie décennale sans débordement en surface.',
          sous_sections: [
            {
              titre: '4.1 Débit à plein section et débit de pointe',
              texte: 'Le débit à plein section Q_ps d\'une conduite de diamètre D est le débit maximal gravitaire que peut transiter la conduite (calculé à y/D = 1 avec Manning-Strickler). Le débit de pointe d\'une zone urbaine (en L/s) est estimé par la méthode rationnelle : Q_p = C × i × A / 3,6, où C est le coefficient de ruissellement (0 à 1), i l\'intensité de pluie en mm/h et A la surface en ha. On doit avoir Q_p ≤ Q_ps.'
            }
          ]
        }
      ],
      points: [
        'Débit volumique Q = V × S [m³/s] ; V = vitesse moyenne, S = section mouillée',
        'Équation de continuité : Q = constante → V1S1 = V2S2',
        '1 L/s = 3,6 m³/h = 86,4 m³/j',
        'Noeud de réseau : ΣQ_entrants = ΣQ_sortants (conservation du débit)',
        'Vitesse AEP : 0,3 m/s (min dépôts) à 1,5 m/s (max bruit/érosion)',
        'Vitesse auto-curage assainissement : 0,6 m/s minimum',
        'Débitmètre EM : précision 0,5%, requiert fluide conducteur et conduite pleine',
        'Compteur volumétrique : standard abonné eau potable',
        'Réduction de section : vitesse ∝ 1/S (inverse de la section)',
        'Débit max conduite circulaire à y/D = 0,81 (pas à plein, contre-intuitif)'
      ],
      formules: [
        'Débit volumique : Q = V × S → [m³/s] ; V [m/s], S [m²]',
        'Vitesse en conduite circulaire : V = 4Q / (π × D²) → [m/s] ; Q [m³/s], D [m]',
        'Continuité : V1 × S1 = V2 × S2 → [m³/s]',
        'Conversion : Q[m³/h] = Q[L/s] × 3,6 ; Q[m³/j] = Q[L/s] × 86,4',
        'Section conduite DN : S = π × D² / 4 → [m²] ; D = diamètre intérieur [m]'
      ],
      retenir: 'Q = V×S · Continuité : Q constant, S↓ → V↑ · Noeud : ΣQ_entrants = ΣQ_sortants · 1 L/s = 3,6 m³/h · Vitesse AEP : 0,3-1,5 m/s · Auto-curage : V ≥ 0,6 m/s · Débitmètre EM = standard AEP/assainissement'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un débit de 45 L/s circule dans une conduite DN200 (diamètre intérieur 200 mm). Calculer la vitesse d\'écoulement et vérifier si elle est dans la plage admissible pour l\'AEP.',
        solution: 'Q = 45 L/s = 0,045 m³/s\nS = π × 0,20²/4 = π × 0,04/4 = 0,03142 m²\nV = Q/S = 0,045/0,03142 = 1,432 m/s\nLa vitesse est dans la plage 0,3 - 1,5 m/s → admissible pour l\'AEP. Elle est proche du maximum : il faudra vérifier que cette vitesse ne génère pas trop de bruit (souvent limité à 1,2 m/s pour les conduites intérieures).'
      },
      {
        n: '2',
        enonce: 'Une conduite passe de DN300 à DN150. Le débit est 60 m³/h. Calculer les vitesses en DN300 et DN150.',
        solution: 'Q = 60/3 600 = 0,01667 m³/s\nS_300 = π × 0,30²/4 = 0,07069 m²\nV_300 = 0,01667/0,07069 = 0,236 m/s (trop lente, risque de dépôts)\nS_150 = π × 0,15²/4 = 0,01767 m²\nV_150 = 0,01667/0,01767 = 0,943 m/s (dans la plage AEP)\nLa conduite DN300 est surdimensionnée pour ce débit.'
      },
      {
        n: '3',
        enonce: 'À un noeud de réseau AEP, deux conduites arrivent : Q1 = 25 L/s (DN150) et Q2 = 15 L/s (DN100). Une conduite DN200 repart. Calculer le débit dans la DN200 et la vitesse.',
        solution: 'Conservation du débit : Q3 = Q1 + Q2 = 25 + 15 = 40 L/s = 0,040 m³/s\nS_DN200 = π × 0,20²/4 = 0,03142 m²\nV_DN200 = 0,040/0,03142 = 1,273 m/s\nLa vitesse de 1,27 m/s est dans la plage admissible pour l\'AEP.'
      },
      {
        n: '4',
        enonce: 'Vérifier si une conduite DN300 en béton (K=75) à la pente de 3‰ assure l\'auto-curage (V ≥ 0,6 m/s) en section pleine.',
        solution: 'À plein section : R = D/4 = 0,300/4 = 0,075 m\nV = K × R^(2/3) × i^(1/2) = 75 × 0,075^(2/3) × 0,003^(1/2)\n0,075^(2/3) = (0,075)^(0,667) = 0,1795\n0,003^(1/2) = 0,05477\nV = 75 × 0,1795 × 0,05477 = 0,737 m/s\nV = 0,737 m/s > 0,6 m/s → auto-curage assuré à plein section avec i = 3‰.'
      },
      {
        n: '5',
        enonce: 'Un débitmètre ultrasonique indique Q = 320 m³/h dans une conduite DN500. Vérifier la cohérence de la mesure en calculant la vitesse et en vérifiant si elle est dans la plage de précision habituelle (0,5 à 3 m/s).',
        solution: 'Q = 320/3 600 = 0,0889 m³/s\nS = π × 0,50²/4 = 0,19635 m²\nV = 0,0889/0,19635 = 0,453 m/s\nLa vitesse est inférieure à 0,5 m/s, hors de la plage optimale du débitmètre ultrasonique.\nRisque d\'imprécision accrue. Il faudrait vérifier avec un autre type de débitmètre (EM ou débimètre à pression différentielle) ou augmenter le débit mesuré pour être dans la plage de précision.'
      },
      {
        n: '6',
        enonce: 'Calculer le débit à plein section d\'une conduite DN600 en béton (K=75) à la pente de 1,5‰, puis estimer la vitesse.',
        solution: 'S_ps = π × 0,60²/4 = 0,2827 m²\nR_ps = D/4 = 0,150 m\n0,150^(2/3) = 0,2806\n0,0015^(1/2) = 0,03873\nV_ps = 75 × 0,2806 × 0,03873 = 0,815 m/s\nQ_ps = V × S = 0,815 × 0,2827 = 0,230 m³/s = 230 L/s'
      },
      {
        n: '7',
        enonce: 'Un déversoir triangulaire 90° (Q = 1,42×h^2,5) mesure 0,042 m³/s. Calculer la hauteur de lame h. Quelle hauteur pour un débit de 0,100 m³/s ?',
        solution: 'Pour Q = 0,042 m³/s :\nh = (Q/1,42)^(1/2,5) = (0,042/1,42)^(0,4) = 0,02958^0,4\nln(0,02958) = -3,521 → 0,4 × (-3,521) = -1,408 → e^(-1,408) = 0,2447\nh = 0,245 m\nPour Q = 0,100 m³/s :\nh = (0,100/1,42)^0,4 = 0,0704^0,4 = e^(0,4 × ln(0,0704)) = e^(0,4 × (-2,655)) = e^(-1,062) = 0,346 m'
      },
      {
        n: '8',
        enonce: 'Un réseau ramifié part d\'un réservoir. La conduite principale (Q=80 L/s) se divise en deux branches : branche A (DN200) et branche B (DN150). Sachant que les deux branches ont la même perte de charge, et que la résistance hydraulique est R = λL/(2gS²D) (proportionnelle à 1/D⁵ pour L et λ identiques), calculer la répartition si D_A=200 mm, D_B=150 mm.',
        solution: 'Pour la même perte de charge dans des branches parallèles :\nΔh = R × Q² → R_A × Q_A² = R_B × Q_B²\nAvec R ∝ 1/D⁵ : Q_A/Q_B = √(R_B/R_A) = √(D_A⁵/D_B⁵) = (D_A/D_B)^(5/2) = (200/150)^2.5 = (1,333)^2.5\n(1,333)^2 = 1,777 ; (1,333)^0.5 = 1,155 → (1,333)^2.5 = 1,777 × 1,155 = 2,053\nQ_A = 2,053 × Q_B\nQ_A + Q_B = 80 → 2,053Q_B + Q_B = 80 → Q_B = 80/3,053 = 26,2 L/s\nQ_A = 80 - 26,2 = 53,8 L/s'
      }
    ]
  },

  'GEMEAU-013': {
    id: 'GEMEAU-013',
    titre: 'Énergie d\'un écoulement et théorème de Bernoulli',
    fiche: {
      intro: 'Le théorème de Bernoulli est la loi fondamentale de l\'hydraulique des conduites sous pression. Il décrit la transformation des trois formes d\'énergie mécanique d\'un fluide (énergie de pression, énergie cinétique, énergie potentielle) le long d\'une ligne de courant. Sa maîtrise permet de calculer la pression en n\'importe quel point d\'un réseau, de comprendre le fonctionnement des venturis et des orifices, et de dimensionner les pompes selon leur hauteur manométrique.',
      sections: [
        {
          titre: '1. Les trois formes d\'énergie d\'un fluide',
          texte: 'L\'énergie mécanique totale d\'un fluide par unité de poids (exprimée en mètre) est la charge hydraulique H = p/(ρg) + V²/(2g) + z. Ces trois termes sont appelés respectivement hauteur de pression (ou énergie de pression), hauteur cinétique (ou énergie cinétique), et hauteur potentielle (ou énergie de position).\n\nLa hauteur de pression p/(ρg) représente l\'énergie emmagasinée sous forme de pression. Pour une pression de 3 bar : h_pression = 300 000/(1 000×9,81) = 30,6 m. C\'est la hauteur à laquelle l\'eau monterait dans un tube ouvert connecté à ce point.\n\nLa hauteur cinétique V²/(2g) représente l\'énergie du mouvement. Pour V = 1,5 m/s : V²/(2g) = 2,25/(2×9,81) = 0,115 m. Pour des vitesses courantes en distribution (0,5 à 2 m/s), cette hauteur cinétique varie de 0,013 à 0,204 m — souvent négligeable devant les hauteurs de pression de plusieurs dizaines de mètres.\n\nLa hauteur potentielle z est la cote du point par rapport à un niveau de référence arbitraire. Elle représente l\'énergie de position. La charge hydraulique totale H = p/(ρg) + V²/(2g) + z est constante le long d\'une ligne de courant en écoulement idéal (sans frottements, incompressible, permanent).',
          sous_sections: [
            {
              titre: '1.1 Charge hydraulique et ligne piézométrique',
              texte: 'La ligne de charge (ou ligne de gradient hydraulique) est le lieu géométrique des points de charge totale H = p/(ρg) + V²/(2g) + z. Elle décroît de l\'amont vers l\'aval en raison des pertes de charge. La ligne piézométrique est le lieu de p/(ρg) + z (sans le terme cinétique) : elle est légèrement en-dessous de la ligne de charge. En pratique, pour les faibles vitesses des réseaux AEP, les deux lignes sont quasi confondues.'
            }
          ]
        },
        {
          titre: '2. Théorème de Bernoulli généralisé',
          texte: 'Le théorème de Bernoulli sans pertes (fluide idéal) établit que la charge hydraulique H est constante le long d\'une ligne de courant : p1/(ρg) + V1²/(2g) + z1 = p2/(ρg) + V2²/(2g) + z2. Avec pertes de charge, on ajoute les pertes entre 1 et 2 : p1/(ρg) + V1²/(2g) + z1 = p2/(ρg) + V2²/(2g) + z2 + Σ Δh, où Σ Δh est la somme des pertes de charge régulières et singulières entre les points 1 et 2.\n\nSi la pompe est entre les points 1 et 2, elle ajoute de l\'énergie : p1/(ρg) + V1²/(2g) + z1 + H_pompe = p2/(ρg) + V2²/(2g) + z2 + Σ Δh. La hauteur manométrique totale (HMT) H_pompe = [(p2-p1)/(ρg)] + [(V2²-V1²)/(2g)] + (z2-z1) + Σ Δh. C\'est ce que la pompe doit "apporter" pour vaincre la différence d\'énergie entre aspiration et refoulement, plus les pertes.\n\nApplication pratique : pour dimensionner le groupe de pompage d\'un poste de refoulement, on calcule la HMT = (cote du point de refoulement - cote d\'aspiration) + pertes de charge dans la conduite de refoulement + pression résiduelle requise au point de livraison. Cette valeur, combinée au débit requis, permet de sélectionner la pompe dans le catalogue constructeur.',
          sous_sections: [
            {
              titre: '2.1 Application à l\'ajutage et à la vidange par orifice',
              texte: 'Pour un orifice au fond d\'un réservoir (surface libre en 1, orifice en 2) : p1 = p2 = P_atm (surfaces libres), V1 ≈ 0 (grand réservoir), z1 - z2 = h (hauteur d\'eau au-dessus de l\'orifice). Bernoulli sans pertes donne : V2 = √(2gh). C\'est la loi de Torricelli. Avec prise en compte du coefficient de décharge Cd : Q = Cd × S_orifice × √(2gh), typiquement Cd ≈ 0,6 à 0,8 selon la géométrie.'
            }
          ]
        },
        {
          titre: '3. Application au tube de Pitot et au venturi',
          texte: 'Le tube de Pitot mesure la pression d\'arrêt (stagnation) P_0 au point de mesure : P_0 = P + ρV²/2, où P est la pression statique. La pression dynamique est ΔP = P_0 - P = ρV²/2, soit V = √(2ΔP/ρ). C\'est le principe de mesure de vitesse par impact. Le tube de Pitot est utilisé pour le jaugeage de conduites et de canaux.\n\nLe tube de Venturi est un étranglement de conduite qui crée une accélération du fluide et donc une dépression. En appliquant Bernoulli entre l\'entrée (section S1) et le col (section S2) : P1 + ρV1²/2 = P2 + ρV2²/2. La différence de pression ΔP = P1 - P2 = ρ(V2²-V1²)/2. Avec V1×S1 = V2×S2 : ΔP = ρ×Q²/(2) × (1/S2² - 1/S1²), d\'où Q = Cd × S1 × S2 × √(2ΔP/ρ) / √(S1²-S2²). La mesure de ΔP donne le débit Q.\n\nLe venturi est utilisé pour les gros débits (DN150 à DN2000) avec une précision de 1 à 2% sur toute la plage de débit. Il a l\'avantage de ne générer que de faibles pertes de charge permanentes (10-15% de ΔP, le reste étant récupéré dans le diffuseur).',
          sous_sections: [
            {
              titre: '3.1 Pression de vaporisation et limites de Bernoulli',
              texte: 'En tout point d\'une installation, la pression absolue doit rester supérieure à la pression de vapeur saturante P_vap(T). En appliquant Bernoulli, les points à grande vitesse et haute altitude sont les plus critiques. À l\'aspiration d\'une pompe, la pression peut chuter en-dessous de P_atm (dépression). Le NPSH disponible (Net Positive Suction Head) est la charge disponible à l\'aspiration au-dessus de la pression de vaporisation : NPSH_d = (P_asp_abs - P_vap)/(ρg) + V_asp²/(2g). Il doit être supérieur au NPSH requis de la pompe.'
            }
          ]
        },
        {
          titre: '4. Calcul de la HMT d\'un système de pompage',
          texte: 'La hauteur manométrique totale (HMT) d\'un groupe de pompage est calculée entre les niveaux des réservoirs d\'aspiration et de refoulement, en ajoutant toutes les pertes de charge et la pression résiduelle requise en livraison. La formule synthétique est : HMT = H_géo + Σ Δh_asp + Σ Δh_ref + h_résiduel.\n\nH_géo est la hauteur géométrique (différence de cotes entre niveau d\'eau refoulement et niveau d\'eau aspiration). Elle est fixe pour une installation donnée. Σ Δh_asp sont les pertes dans la conduite d\'aspiration (doivent être minimisées pour éviter la cavitation). Σ Δh_ref sont les pertes dans la conduite de refoulement (fonction du diamètre et du débit). h_résiduel est la pression requise au point de livraison.\n\nLa puissance hydraulique absorbée par la pompe est P_hyd = ρ × g × Q × HMT [W]. La puissance électrique absorbée au moteur est P_élec = P_hyd / (η_pompe × η_moteur). Pour η_pompe × η_moteur = 0,65 (rendement global typique d\'une installation existante vieillissante), une pompe de HMT=30 m à Q=120 m³/h consomme : P = 1 000×9,81×(120/3600)×30 / 0,65 = 1 000×9,81×0,0333×30/0,65 = 9 810×30×0,0333/0,65 = 15 085 W ≈ 15 kW.',
          sous_sections: [
            {
              titre: '4.1 Hauteur d\'aspiration maximale et NPSH',
              texte: 'La hauteur d\'aspiration maximale théorique (pompe en surface, aspiration vers le bas) est limitée par la pression atmosphérique : h_asp_max = P_atm/(ρg) - P_vap/(ρg) - NPSH_requis - pertes_aspiration. À 20°C : h_asp_max ≈ (101 325 - 2 337)/9 810 - NPSH_req - Δh_asp ≈ 10,1 - NPSH_req - Δh_asp. En pratique, les pompes centrifuges sont rarement installées avec plus de 5 à 6 m d\'aspiration, pour garantir une marge de sécurité suffisante.'
            }
          ]
        }
      ],
      points: [
        'Charge hydraulique : H = p/(ρg) + V²/(2g) + z → [m]',
        'Bernoulli : H = constante le long d\'une ligne de courant (sans pertes)',
        'Avec pertes : H1 = H2 + Σ Δh (la charge décroît dans le sens de l\'écoulement)',
        'HMT pompe = H_géo + Σ Δh_asp + Σ Δh_ref + h_résiduel',
        'Torricelli : V = √(2gh) pour un orifice au fond d\'un réservoir',
        'Venturi : mesure de débit par différence de pression dans un étranglement',
        'NPSH_d doit être > NPSH_requis pour éviter la cavitation',
        'Hauteur cinétique V²/(2g) : 0,01 m à V=0,5 m/s ; 0,20 m à V=2 m/s (souvent négligeable)',
        'Puissance hydraulique : P_hyd = ρgQH [W]',
        'Puissance électrique : P_élec = P_hyd / (η_pompe × η_moteur)'
      ],
      formules: [
        'Charge hydraulique : H = p/(ρg) + V²/(2g) + z → [m]',
        'Bernoulli avec pertes : p1/(ρg) + V1²/(2g) + z1 = p2/(ρg) + V2²/(2g) + z2 + Σ Δh',
        'HMT avec pompe : H1 + H_pompe = H2 + Σ Δh → H_pompe = ΔH + Σ Δh [m]',
        'Torricelli : V = √(2gh) ; Q = Cd × S × √(2gh) → [m/s], [m³/s]',
        'Puissance hydraulique : P_hyd = ρ × g × Q × H → [W] ; Q [m³/s], H [m]',
        'Puissance électrique : P_élec = P_hyd / (η_p × η_m) → [W]'
      ],
      retenir: 'H = p/(ρg) + V²/(2g) + z = charge hydraulique · Bernoulli : H constant sans pertes · H décroît avec les pertes · HMT = H_géo + pertes + résiduel · Torricelli : V = √(2gh) · P_hyd = ρgQH · Hauteur cinétique souvent négligeable en AEP'
    },
    exercices: [
      {
        n: '1',
        enonce: 'En un point d\'une conduite : p = 2,8 bar, V = 1,2 m/s, z = 15 m. Calculer la charge hydraulique H.',
        solution: 'H = p/(ρg) + V²/(2g) + z\np/(ρg) = 280 000/(1 000 × 9,81) = 28,54 m\nV²/(2g) = 1,44/(2×9,81) = 0,073 m\nz = 15 m\nH = 28,54 + 0,073 + 15 = 43,61 m\nNote : la hauteur cinétique (0,073 m) représente seulement 0,17% de H → souvent négligeable.'
      },
      {
        n: '2',
        enonce: 'Appliquer Bernoulli entre l\'entrée (D=200 mm, p1=3,5 bar, z1=0) et une section réduite (D=100 mm, z2=0) d\'une conduite. Calculer p2 pour Q=25 L/s (sans pertes).',
        solution: 'Q = 0,025 m³/s\nV1 = 4×0,025/(π×0,04) = 0,796 m/s\nV2 = 4×0,025/(π×0,01) = 3,183 m/s (section réduite de 4 → vitesse × 4)\nBernoulli sans pertes (z1=z2) :\np2/(ρg) = p1/(ρg) + (V1²-V2²)/(2g)\n= 350 000/9 810 + (0,634 - 10,13)/19,62\n= 35,68 + (-9,496)/19,62 = 35,68 - 0,484 = 35,20 m\np2 = 35,20 × 9 810 = 345 400 Pa = 3,45 bar\nLa pression a chuté de 0,05 bar à cause de l\'accélération du fluide.'
      },
      {
        n: '3',
        enonce: 'Calculer la HMT d\'une pompe pour : aspiration = cote 50 m NGF, refoulement = cote 82 m NGF, pertes asp = 0,3 m, pertes ref = 4,5 m, pression résiduelle requise = 1,5 bar (15,3 m).',
        solution: 'H_géo = 82 - 50 = 32 m\nHMT = 32 + 0,3 + 4,5 + 15,3 = 52,1 m\nPour Q = 50 L/s = 0,050 m³/s :\nP_hyd = 1 000 × 9,81 × 0,050 × 52,1 = 25 555 W ≈ 25,6 kW\nAvec η = 0,72 (pompe) × 0,94 (moteur) = 0,677 :\nP_élec = 25 555 / 0,677 = 37 750 W ≈ 37,8 kW'
      },
      {
        n: '4',
        enonce: 'Un réservoir à niveau constant de 4,5 m de profondeur se vidange par un orifice de D=50 mm au fond (Cd = 0,62). Calculer le débit de sortie.',
        solution: 'Vitesse Torricelli : V = √(2gh) = √(2×9,81×4,5) = √88,29 = 9,40 m/s\nSection orifice : S = π × 0,05²/4 = 0,001963 m²\nQ = Cd × S × V = 0,62 × 0,001963 × 9,40 = 0,01144 m³/s = 11,44 L/s\nNote : pour que l\'hypothèse "niveau constant" soit valable, le débit d\'apport doit être ≥ 11,44 L/s.'
      },
      {
        n: '5',
        enonce: 'Un venturi DN200/DN100 est sous Q = 60 m³/h. Calculer la différence de pression ΔP (Cd=0,98, ρ=1000 kg/m³).',
        solution: 'Q = 60/3 600 = 0,01667 m³/s\nS1 = π×0,04/4 = 0,03142 m² ; S2 = π×0,01/4 = 0,007854 m²\nFormule venturi : Q = Cd×S1×S2×√(2ΔP/ρ) / √(S1²-S2²)\n0,01667 = 0,98 × 0,03142 × 0,007854 × √(2ΔP/1000) / √(0,03142²-0,007854²)\n√(S1²-S2²) = √(9,872×10⁻⁴ - 6,168×10⁻⁵) = √(9,255×10⁻⁴) = 0,03042\n0,01667 = 0,98 × 2,468×10⁻⁴ × √(2ΔP/1000) / 0,03042\n0,01667 = 7,949×10⁻³ × √(2ΔP/1000)\n√(2ΔP/1000) = 0,01667/7,949×10⁻³ = 2,098\n2ΔP/1000 = 4,401 → ΔP = 2 201 Pa ≈ 22 mbar'
      },
      {
        n: '6',
        enonce: 'Calculer la puissance électrique d\'un groupe de pompage : HMT = 45 m, Q = 90 m³/h, η_pompe = 0,76, η_moteur = 0,93.',
        solution: 'Q = 90/3 600 = 0,025 m³/s\nP_hyd = ρgQH = 1 000 × 9,81 × 0,025 × 45 = 11 036 W\nη_total = 0,76 × 0,93 = 0,7068\nP_élec = 11 036 / 0,7068 = 15 612 W ≈ 15,6 kW\nConsommation sur 8 000 h/an : E = 15,6 kW × 8 000 h = 124 800 kWh/an'
      },
      {
        n: '7',
        enonce: 'La hauteur d\'aspiration d\'une pompe est de 4,5 m. Les pertes de charge à l\'aspiration sont 0,8 m. La pression de vapeur saturante à 25°C est 3 170 Pa. Calculer le NPSH disponible.',
        solution: 'P_atm = 101 325 Pa\nP_asp = P_atm - ρg×h_asp - ρg×Δh_asp = 101 325 - 1000×9,81×4,5 - 1000×9,81×0,8\n= 101 325 - 44 145 - 7 848 = 49 332 Pa\nNPSH_d = (P_asp - P_vap)/(ρg) = (49 332 - 3 170)/(9 810) = 46 162/9 810 = 4,71 m\nSi la pompe a un NPSH_req = 3,5 m : NPSH_d (4,71) > NPSH_req (3,5) → pas de cavitation (marge de 1,21 m).'
      },
      {
        n: '8',
        enonce: 'Un siphon aspire de l\'eau (niveau 0 m) et la refoule vers un niveau +12 m. Calculer la pression absolue au sommet du siphon (situé à +15 m, diamètre constant, pertes négligeables, V = 2 m/s).',
        solution: 'Bernoulli entre surface libre amont (1) et sommet siphon (2) :\np1 = P_atm = 101 325 Pa ; V1 = 0 (large surface) ; z1 = 0\nz2 = 15 m ; V2 = 2 m/s\np2/(ρg) = p1/(ρg) + V1²/(2g) - V2²/(2g) + z1 - z2\n= 10,33 + 0 - 0,204 + 0 - 15 = -4,87 m\np2 = -4,87 × 9 810 = -47 794 Pa (relative) → P2_abs = 101 325 - 47 794 = 53 531 Pa\nP2_abs = 0,535 bar >> P_vap (0,023 bar à 20°C) → pas de cavitation au sommet du siphon.'
      }
    ]
  },

  'GEMEAU-014': {
    id: 'GEMEAU-014',
    titre: 'Quantité de mouvement et efforts hydrauliques',
    fiche: {
      intro: 'Le théorème de Bernoulli décrit l\'énergie d\'un fluide, mais il ne rend pas compte des forces exercées sur les obstacles dans l\'écoulement (coudes, tés, vannes, buses). Le théorème de la quantité de mouvement (ou théorème de l\'impulsion) permet de calculer ces forces. Il est indispensable pour dimensionner les butées et ancrages des conduites, et pour comprendre les coups de bélier qui peuvent détruire des installations.',
      sections: [
        {
          titre: '1. Théorème de la quantité de mouvement',
          texte: 'La quantité de mouvement d\'un fluide est p = m × V [kg·m/s]. Pour un écoulement permanent, la résultante des forces extérieures appliquées à un volume de contrôle est égale au flux sortant de quantité de mouvement moins le flux entrant : ΣF = ρ × Q × (V_sortie - V_entrée). Cette relation vectorielle s\'applique séparément sur chaque composante (x, y, z).\n\nPour un coude à 90° de DN300 sous pression P, traversé par un débit Q avec vitesse V : la composante x de la force sur le fluide est Fx = ρQ(V2_x - V1_x), et la composante y est Fy = ρQ(V2_y - V1_y). Les pressions exercées sur les sections d\'entrée et de sortie s\'ajoutent à ces termes. La force exercée par le coude sur le fluide est la réaction de la force hydraulique sur le coude, qu\'il faut reprendre par une butée.\n\nEn pratique, pour les coudes de conduite, la force est dominée par la composante de pression P×S, surtout pour les grandes pressions. Pour un coude à 90° de DN500 sous 5 bars : F = P×S×√2 = 500000 × π×0,25²/4 × 1,414 = 138,9 kN (comme calculé au chapitre 011). La butée en béton doit reprendre cette force avec un coefficient de sécurité ≥ 2.',
          sous_sections: [
            {
              titre: '1.1 Force sur un obstacle dans l\'écoulement',
              texte: 'Quand un fluide frappe un obstacle (pale de turbine, vanne papillon partiellement ouverte, diffuseur), la force est F = ρ × Q × ΔV. Pour un jet de Q = 0,05 m³/s, V = 10 m/s, qui s\'arrête sur une paroi plate (V_finale = 0) : F = 1000 × 0,05 × 10 = 500 N. Si le jet est dévié à 90° sans perte de vitesse : F_x = ρQV (force dans la direction initiale), F_y = ρQV (force perpendiculaire), résultante F = ρQV√2 = 707 N.'
            }
          ]
        },
        {
          titre: '2. Coups de bélier : origines et mécanismes',
          texte: 'Le coup de bélier est une surpression ou dépression transitoire dans une conduite, provoquée par une variation rapide de vitesse du fluide. Il survient lors de la fermeture ou de l\'ouverture d\'une vanne, d\'un arrêt ou d\'un démarrage brutal de pompe, ou d\'une ouverture/fermeture de vanne automatique.\n\nLorsqu\'une vanne se ferme instantanément, la colonne d\'eau doit s\'arrêter. La variation de quantité de mouvement crée une onde de pression qui se propage vers l\'amont à la célérité c (vitesse du son dans le fluide en conduite). Pour une conduite acier : c ≈ 1 200 m/s ; PVC : c ≈ 350 m/s ; PEHD : c ≈ 300 m/s. L\'amplitude de la surpression est : ΔP = ρ × c × ΔV (formule de Joukowski).\n\nPour une conduite PEHD DN200 avec V = 1,5 m/s et c = 300 m/s : ΔP = 1 000 × 300 × 1,5 = 450 000 Pa = 4,5 bar. Sur la pression de service de 6 bar, la pression maximale atteint 10,5 bar — valeur très proche de la pression nominale (PN10 = 10 bar) : la conduite risque la rupture.',
          sous_sections: [
            {
              titre: '2.1 Temps de fermeture critique et protection',
              texte: 'Le coup de bélier est maximal si la fermeture se produit en moins de Tc = 2L/c (temps de retour de l\'onde, L = longueur de la conduite). Pour une conduite de 600 m en PVC (c=350 m/s) : Tc = 2×600/350 = 3,43 s. Si la vanne se ferme en plus de 3,43 s (fermeture progressive), l\'onde revient avant la fin de la fermeture et réduit le pic de pression. Les protections courantes : réservoir anti-bélier (rservoir à air comprimé), vase d\'expansion, ventouse automatique, vanne à fermeture progressive motorisée.'
            }
          ]
        },
        {
          titre: '3. Efforts sur les conduites et ancrages',
          texte: 'Les conduites en charge sont soumises à des efforts longitudinaux (traction ou compression) dus à la pression interne, aux variations de température, et aux coups de bélier. Pour une conduite sans joints rigides, ces efforts sont repris par les butées en béton aux singularités (coudes, tés, bouchons, réductions).\n\nLe calcul d\'une butée commence par déterminer la force hydrostatique max (avec le coup de bélier éventuel), puis de dimensionner le volume de béton pour reprendre cette force par frottement sur le sol. Pour un sol de portance 200 kPa et une force de 80 kN : surface de béton nécessaire = 80 000/200 000 = 0,4 m². Une butée de 0,5 m × 0,8 m est suffisante.\n\nPour les conduites sur bridges (passages aériens), les efforts thermiques peuvent être significatifs. Un tronçon acier DN300 de 50 m avec variation ΔT = 30°C : allongement libre = α × L × ΔT = 12×10⁻⁶ × 50 × 30 = 0,018 m = 18 mm. Si les extrémités sont bloquées, une contrainte de compression/traction se développe dans la conduite.',
          sous_sections: [
            {
              titre: '3.1 Brides, joints et assemblages pour reprendre les efforts',
              texte: 'Les assemblages à brides boulonnées reprennent les efforts de traction longitudinaux (force de séparation = P×S). Les joints flexibles (joints à bague d\'étanchéité) autorisent un léger mouvement angulaire et axial mais ne reprennent pas les efforts longitudinaux : un joint flexible sans ancrage sur une conduite sous pression se désemboîte et provoque une rupture. Les assemblages mécaniques avec tirants (joints Gibault, manchons mécaniques) reprennent les efforts axiaux.'
            }
          ]
        },
        {
          titre: '4. Ventouses et protection contre la dépression',
          texte: 'Lors d\'un coup de bélier à l\'ouverture d\'une vanne ou lors d\'un arrêt de pompe, une dépression peut se créer. Si la pression absolue descend sous la pression de vapeur saturante, de la vapeur se forme (vaporisation) et la colonne d\'eau se sépare — c\'est la column separation ou rupture de colonne. Quand la dépression se résorbe, les deux tronçons de colonne se rejoignent avec une violence extrême : coup de bélier amplifié, parfois destructeur.\n\nLes ventouses automatiques (air release valves) sont installées aux points hauts des conduites pour évacuer l\'air lors du remplissage et laisser entrer de l\'air lors de la vidange ou en cas de dépression. Elles évitent la formation de poches d\'air qui perturbent l\'écoulement et amplifient les coups de bélier.\n\nLes clapets anti-retour (NRV) sur les pompes évitent le retour du fluide lors d\'un arrêt brusque. Un clapet à fermeture progressive (clapet à contrepoids ou motorisé) réduit le coup de bélier au démarrage/arrêt de pompe. Pour les grandes stations, un réservoir anti-bélier (ballon à membrane avec coussin d\'air) absorbe l\'onde de pression.',
          sous_sections: [
            {
              titre: '4.1 Analyse des transitoires : simulation numérique',
              texte: 'Pour les installations complexes (longues conduites, multiples pompes, niveaux variables), l\'analyse des coups de bélier est réalisée par simulation numérique (méthode des caractéristiques). Des logiciels spécialisés (Hammer, Surge, EPANET-MSX) calculent l\'évolution de la pression et de la vitesse dans chaque tronçon en fonction du temps. Cette analyse est obligatoire pour les adductions d\'eau principale et les conduites de refoulement longues.'
            }
          ]
        }
      ],
      points: [
        'Quantité de mouvement : ΣF = ρ × Q × ΔV (résultante forces = variation de flux de quantité de mouvement)',
        'Coup de bélier : ΔP = ρ × c × ΔV (formule de Joukowski)',
        'Célérité : acier ~1 200 m/s ; PVC ~350 m/s ; PEHD ~300 m/s',
        'Tc = 2L/c : fermeture en moins de Tc → coup de bélier maximal',
        'Protection : réservoir anti-bélier, ventouse, fermeture progressive, clapet anti-retour',
        'Butée béton pour coudes, tés, bouchons (force P×S dominante)',
        'Rupture de colonne si P_abs < P_vap lors d\'une dépression transitoire',
        'Ventouse aux points hauts : évite poches d\'air et rupture de colonne',
        'Joints flexibles ne reprennent pas les efforts longitudinaux → ancrage requis',
        'Simulation numérique obligatoire pour les grandes adductions'
      ],
      formules: [
        'Quantité de mouvement : ΣF = ρ × Q × (V_sortie - V_entrée) → [N] (vectoriel)',
        'Coup de bélier (Joukowski) : ΔP = ρ × c × ΔV → [Pa] ; c = célérité onde [m/s]',
        'Temps critique : Tc = 2 × L / c → [s] ; L = longueur conduite [m]',
        'Force sur coude 90° : F = P × S × √2 → [N] ; P [Pa], S = section [m²]'
      ],
      retenir: 'Coup de bélier : ΔP = ρcΔV · Célérité acier 1200 m/s, PVC 350 m/s · Tc = 2L/c · Fermeture lente > Tc = pas de coup de bélier maximal · Butées béton pour reprendre P×S · Ventouses aux points hauts · Clapet anti-retour sur pompes'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une vanne se ferme instantanément sur une conduite PEHD DN160 (V = 1,8 m/s, c = 320 m/s). Calculer la surpression ΔP et la pression maximale si la pression de service est 4 bar.',
        solution: 'ΔP = ρ × c × ΔV = 1 000 × 320 × 1,8 = 576 000 Pa = 5,76 bar\nPression maximale : P_max = 4 + 5,76 = 9,76 bar\nUne conduite PEHD PN10 (10 bar) tient juste. Pour une conduite PN6, rupture quasi-certaine.\nSolution : prévoir une vanne à fermeture progressive (temps de fermeture > Tc).'
      },
      {
        n: '2',
        enonce: 'Une conduite acier DN300, L = 800 m, V = 1,2 m/s, c = 1 200 m/s. Calculer le temps critique Tc et la surpression si fermeture instantanée.',
        solution: 'Tc = 2 × L / c = 2 × 800 / 1 200 = 1,33 s\nΔP = 1 000 × 1 200 × 1,2 = 1 440 000 Pa = 14,4 bar\nUne fermeture de vanne en moins de 1,33 s génère 14,4 bar de surpression → très dangereux.\nUne fermeture progressive en 10 s (7,5 × Tc) réduit considérablement le coup de bélier.'
      },
      {
        n: '3',
        enonce: 'Calculer la force résultante sur un coude à 45° (DN250, P = 4 bar, Q = 40 L/s).',
        solution: 'S = π × 0,25²/4 = 0,04909 m²\nV = Q/S = 0,040/0,04909 = 0,815 m/s\nComposante pression (dominante) : F_P = P × S = 400 000 × 0,04909 = 19 636 N sur chaque branche\nComposante QdM : F_QdM = ρQΔV = 1000 × 0,040 × 0,815 = 32,6 N (négligeable vs pression)\nResultante coude 45° : F_r = √(F1² + F2² - 2F1F2×cos(45°)) où F1=F2=F_P\nF_r = F_P × √(2 - 2×cos45°) = 19 636 × √(2 - 1,414) = 19 636 × √0,586 = 19 636 × 0,765 = 15 023 N ≈ 15 kN'
      },
      {
        n: '4',
        enonce: 'Un jet d\'eau (Q = 30 L/s, V = 8 m/s) frappe une aube fixe et est dévié à 90°. Calculer la force exercée sur l\'aube.',
        solution: 'Q = 0,030 m³/s ; V = 8 m/s\nComposante x (dans le sens du jet initial) : Fx = ρ × Q × (V2x - V1x) = 1000 × 0,030 × (0 - 8) = -240 N (force d\'arrêt du jet en x)\nComposante y (perpendiculaire) : Fy = ρ × Q × (V2y - V1y) = 1000 × 0,030 × (8 - 0) = 240 N\nForce résultante sur l\'aube : F = √(240² + 240²) = 240 × √2 = 339 N, à 45°\n(La force sur l\'aube est la réaction : opposée et égale à la force sur le fluide)'
      },
      {
        n: '5',
        enonce: 'Dimensionner une butée béton pour un coude DN400 à 90° sous 6 bar. Portance du sol = 150 kPa. Coefficient de sécurité = 2.',
        solution: 'S = π × 0,20² = 0,1257 m²\nF = P × S × √2 = 600 000 × 0,1257 × 1,414 = 106 700 N ≈ 107 kN\nAvec CS = 2 : F_design = 214 kN\nSurface de béton appui sol : A = F_design / q_sol = 214 000 / 150 000 = 1,43 m²\nButée : 1,2 m × 1,2 m = 1,44 m² (légèrement supérieur)'
      },
      {
        n: '6',
        enonce: 'Pour la conduite de l\'exercice 2, quelle doit être la durée minimale de fermeture pour diviser la surpression par 3 ?',
        solution: 'ΔP_max = 14,4 bar pour fermeture < Tc = 1,33 s\nCible : ΔP_cible = 14,4 / 3 = 4,8 bar\nApproximation linéaire : ΔP ≈ ΔP_max × (Tc/T_fermeture) pour T > Tc\n4,8 = 14,4 × (1,33/T) → T = 14,4 × 1,33 / 4,8 = 4 s\nUne fermeture de vanne en 4 secondes (progressif) divise la surpression par 3.'
      },
      {
        n: '7',
        enonce: 'Une pompe s\'arrête brusquement sur une conduite acier DN200, L = 500 m, V = 1,5 m/s, c = 1 200 m/s, P_service = 3 bar. Calculer la dépression au point de pompe. Y a-t-il risque de rupture de colonne à 20°C (P_vap = 2 337 Pa) ?',
        solution: 'À l\'arrêt brusque de la pompe, une dépression (onde de décompression) se propage : ΔP = ρ × c × ΔV = 1 000 × 1 200 × 1,5 = 1 800 000 Pa = 18 bar\nPression absolue à la pompe : P_abs = P_service_abs - ΔP = (3×10⁵ + 101 325) - 1 800 000\n= 401 325 - 1 800 000 = -1 398 675 Pa → impossible (P_abs ne peut pas être négative)\nEn réalité, la pression descend jusqu\'à P_vap = 2 337 Pa : rupture de colonne quasi-certaine.\nSolution : clapet anti-retour à fermeture progressive + réservoir anti-bélier.'
      },
      {
        n: '8',
        enonce: 'Calculer l\'allongement thermique d\'une conduite acier DN200, L = 80 m, soumise à ΔT = 40°C (α_acier = 12×10⁻⁶ /°C). Quelle force de compression si les extrémités sont bloquées (E_acier = 210 GPa, section acier = 10 cm²) ?',
        solution: 'Allongement libre : ΔL = α × L × ΔT = 12×10⁻⁶ × 80 × 40 = 0,0384 m = 38,4 mm\nSi bloquée : déformation forcée ε = ΔL/L = 0,0384/80 = 4,8×10⁻⁴\nContrainte thermique : σ = E × ε = 210×10⁹ × 4,8×10⁻⁴ = 100 800 000 Pa = 100,8 MPa\nForce de compression : F = σ × A = 100 800 000 × 10×10⁻⁴ = 100 800 N ≈ 101 kN\nNote : 101 MPa < limite élastique acier (~250 MPa) : la conduite ne plastifie pas, mais les ancrages subissent un effort considérable. Solution : joint de dilatation (compensateur de dilatation) tous les 15-25 m.'
      }
    ]
  },

  'GEMEAU-015': {
    id: 'GEMEAU-015',
    titre: 'Régimes d\'écoulement et nombre de Reynolds',
    fiche: {
      intro: 'Les écoulements en conduite se présentent sous deux régimes fondamentalement différents : laminaire (filets fluides parallèles, organisés) et turbulent (mouvement chaotique tridimensionnel, tourbillons). La transition entre ces régimes est gouvernée par le nombre de Reynolds, adimensionnel. La connaissance du régime d\'écoulement est indispensable pour choisir la bonne formule de perte de charge, interpréter les mesures de débit, et comprendre le transport des polluants ou des sédiments.',
      sections: [
        {
          titre: '1. Régime laminaire et régime turbulent',
          texte: 'En régime laminaire, les particules fluides suivent des trajectoires parallèles (streamlines) sans mélange entre couches. Ce régime est stable et prévisible : le profil de vitesse dans une conduite circulaire est une parabole (profil de Poiseuille), avec V_max = 2 × V_moy au centre et V = 0 à la paroi. L\'énergie est dissipée uniquement par la viscosité moléculaire.\n\nEn régime turbulent, le mouvement est tridimensionnel et instationnaire : des tourbillons (eddies) de toutes tailles transportent la quantité de mouvement et la chaleur de manière beaucoup plus efficace que la seule viscosité. Le profil de vitesse est quasi-plat en section, avec une zone de transition rapide près de la paroi (couche limite turbulente). L\'énergie est dissipée à la fois par viscosité moléculaire et par viscosité turbulente.\n\nLa turbulence est un avantage dans certaines applications (mélange de réactifs dans les bassins de contact, transfert de chaleur dans les échangeurs) mais un inconvénient dans d\'autres (pertes de charge plus élevées, érosion des conduites). Elle favorise aussi la dispersion des polluants dans les cours d\'eau.',
          sous_sections: [
            {
              titre: '1.1 Expérience de Reynolds',
              texte: 'En 1883, Osborne Reynolds a injecté un filet de colorant dans une conduite transparente et observé qu\'à faible vitesse, le colorant reste un filet rectiligne (laminaire), tandis qu\'à grande vitesse, il se mélange au fluide en quelques diamètres de conduite (turbulent). Il a quantifié la transition par le rapport Re = ρVD/µ = VD/ν. La transition se produit pour Re ≈ 2 300 dans une conduite cylindrique lisse (valeur critique inférieure) et vers Re ≈ 4 000 (valeur critique supérieure). Entre 2 300 et 4 000 : régime de transition, instable.'
            }
          ]
        },
        {
          titre: '2. Nombre de Reynolds',
          texte: 'Le nombre de Reynolds est défini par Re = ρ × V × D / µ = V × D / ν, où V est la vitesse moyenne [m/s], D le diamètre hydraulique [m], ρ la masse volumique [kg/m³], µ la viscosité dynamique [Pa·s], et ν = µ/ρ la viscosité cinématique [m²/s]. Re est adimensionnel.\n\nRe < 2 300 : régime laminaire. Perte de charge proportionnelle à V et à µ (formule de Hagen-Poiseuille). Re > 4 000 : régime turbulent. Perte de charge proportionnelle à V² (formule de Darcy-Weisbach avec coefficient λ fonction de Re et de la rugosité). 2 300 < Re < 4 000 : transition (zone instable, éviter dans les applications industrielles).\n\nPour de l\'eau à 20°C (ν = 1,006×10⁻⁶ m²/s) dans une conduite DN100 à V = 1 m/s : Re = 1 × 0,100 / 1,006×10⁻⁶ = 99 400. L\'écoulement est fortement turbulent. Pour obtenir Re < 2 300 il faudrait V < 0,023 m/s — valeur impraticable en distribution.',
          sous_sections: [
            {
              titre: '2.1 Diamètre hydraulique pour sections non circulaires',
              texte: 'Pour les conduites de section non circulaire (canal rectangulaire, conduite ovoïde), le nombre de Reynolds utilise le diamètre hydraulique D_h = 4 × S / P_mouillé, où S est la section mouillée et P_mouillé le périmètre mouillé. Pour un canal rectangulaire b×h (plein) : D_h = 4bh / (2b+2h) = 2bh/(b+h). Pour b>>h (canal large et plat) : D_h ≈ 2h. Cette définition est cohérente avec les formules de perte de charge en utilisant R_h = D_h/4 = S/P_mouillé.'
            }
          ]
        },
        {
          titre: '3. Influence de la rugosité : régime lisse et rugueux',
          texte: 'En régime turbulent, la rugosité absolue ε de la paroi (saillies microscopiques dues aux aspérités) joue un rôle fondamental. Si les saillies sont plus petites que l\'épaisseur de la sous-couche laminaire δ = 5ν/V*, la rugosité est hydrodynamiquement lisse (les aspérités sont "cachées" dans la sous-couche laminaire) et λ ne dépend que de Re. Si ε > δ, la rugosité est rugueuse et λ dépend de ε/D et peu de Re (régime complètement rugueux).\n\nValeurs de rugosité absolue ε selon les matériaux : acier neuf ε = 0,05 mm ; acier ancien (incrusté) ε = 0,3-1 mm ; fonte ε = 0,25 mm ; béton ε = 0,3-3 mm ; PVC, PEHD ε = 0,007 mm (quasi lisse). La rugosité des conduites vieillit : une conduite métallique bien entretenue pendant 30 ans peut voir son ε multiplié par 10 en raison des dépôts calcaires et des corrosions.\n\nLa formule de Colebrook-White donne λ pour le régime transitoire et rugueux : 1/√λ = -2 × log₁₀(ε/(3,71D) + 2,51/(Re×√λ)). Cette équation implicite est résolue itérativement ou graphiquement (diagramme de Moody). La formule explicite de Swamee-Jain est une bonne approximation : λ = 0,25 / [log₁₀(ε/(3,71D) + 5,74/Re^0,9)]².',
          sous_sections: [
            {
              titre: '3.1 Diagramme de Moody',
              texte: 'Le diagramme de Moody représente λ en fonction de Re et ε/D. Il montre : la droite laminaire (λ = 64/Re), la zone de transition rugosité-Re, et la zone rugueuse (λ constant). Pour les conduites PVC neuves (ε/D très petit), λ suit la courbe "lisse" de Nikuradse/Prandtl jusqu\'à des Re très élevés. Pour les conduites béton, λ atteint la zone rugueuse dès Re = 10⁵ environ. En pratique, pour les conduites de distribution d\'eau neuve (PVC, PEHD), on utilise λ ≈ 0,015-0,020 pour une première estimation.'
            }
          ]
        },
        {
          titre: '4. Conséquences pratiques des régimes d\'écoulement',
          texte: 'En réseau d\'assainissement à écoulement à surface libre, le régime de l\'écoulement a une importance particulière. Le nombre de Froude Fr = V / √(g×h) détermine si l\'écoulement est fluvial (Fr < 1, vitesse inférieure à la vitesse des ondes de surface) ou torrentiel (Fr > 1). En assainissement, on cherche à rester en régime fluvial (Fr < 0,8) pour éviter les transitions hydrauliques brutales qui créent des ressauts et des instabilités.\n\nEn hydraulique de transport en conduite, le régime turbulent favorise le transport des sédiments en suspension (limons, argiles) car la turbulence maintient les particules en suspension. Mais au-delà d\'une certaine concentration, les boues se comportent comme un fluide non-newtonien dont la viscosité apparente dépend du gradient de vitesse (rhéologie de Bingham) — les formules classiques de Re ne s\'appliquent plus directement.\n\nPour les débitmètres, le régime d\'écoulement détermine la précision et le champ d\'application. Les débitmètres à pression différentielle (venturi, diaphragme) supposent un profil de vitesse pleinement développé en amont : un coude ou une réduction trop proche en amont crée un profil déformé qui biaise la mesure. Les longueurs droites amont et aval recommandées sont 10D à 20D selon l\'instrument.',
          sous_sections: [
            {
              titre: '4.1 Transition laminaire-turbulente dans les installations hydrauliques',
              texte: 'La transition peut être retardée artificiellement dans certaines applications (économie d\'énergie dans les très longues conduites). L\'addition d\'infimes quantités de polymères (polysulfonate) dans l\'eau peut repousser la turbulence à des Re bien supérieurs à 4 000 (effet Toms). En assainissement, la mise en régime turbulent dans les déversoirs d\'orage est au contraire souhaitée pour améliorer le mélange et la dilution. En eau potable, la turbulence est nécessaire pour assurer une distribution homogène du chlore résiduel.'
            }
          ]
        }
      ],
      points: [
        'Re = ρVD/µ = VD/ν (adimensionnel)',
        'Re < 2 300 : laminaire ; Re > 4 000 : turbulent ; entre les deux : transition',
        'Eau à 20°C, DN100, V=1 m/s → Re ≈ 99 400 (turbulent)',
        'En distribution d\'eau courante : toujours turbulent (Re >> 2 300)',
        'Laminaire : profil parabolique, λ = 64/Re',
        'Turbulent : profil quasi-plat, λ via Colebrook-White ou diagramme de Moody',
        'Rugosité : PVC ε ≈ 0,007 mm ; acier neuf ε ≈ 0,05 mm ; béton ε ≈ 0,3-3 mm',
        'Rugosité augmente avec le vieillissement des conduites',
        'Diamètre hydraulique D_h = 4S/P_mouillé pour sections non circulaires',
        'Longueurs droites amont débitmètre : 10-20D pour profil de vitesse stabilisé'
      ],
      formules: [
        'Nombre de Reynolds : Re = V × D / ν → adimensionnel ; ν eau 20°C = 1,006×10⁻⁶ m²/s',
        'Régime laminaire λ : λ = 64 / Re (valide pour Re < 2 300)',
        'Diamètre hydraulique : D_h = 4 × S / P_mouillé → [m]',
        'Colebrook-White : 1/√λ = -2 log₁₀(ε/(3,71D) + 2,51/(Re√λ)) → résolution itérative',
        'Swamee-Jain : λ = 0,25 / [log₁₀(ε/(3,71D) + 5,74/Re^0,9)]²'
      ],
      retenir: 'Re = VD/ν · < 2300 laminaire · > 4000 turbulent · Eau en conduite = toujours turbulent · λ = 64/Re en laminaire · Colebrook-White en turbulent · PVC quasi lisse, béton rugueux · Rugosité croît avec le temps'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Calculer Re pour de l\'eau à 10°C (ν = 1,307×10⁻⁶ m²/s) dans une conduite DN200 à V = 0,8 m/s. Quel est le régime ?',
        solution: 'Re = VD/ν = 0,8 × 0,200 / 1,307×10⁻⁶ = 0,16 / 1,307×10⁻⁶ = 122 418\nRe = 122 400 >> 4 000 → Régime turbulent.\nComparaison à 20°C (ν=1,006×10⁻⁶) : Re_20 = 0,8×0,2/1,006×10⁻⁶ = 159 000.\nLe régime est turbulent dans les deux cas, mais Re est 23% plus faible à 10°C (eau plus visqueuse).'
      },
      {
        n: '2',
        enonce: 'Quelle est la vitesse limite en dessous de laquelle l\'écoulement est laminaire dans une conduite DN50 d\'eau à 20°C (ν = 1,006×10⁻⁶ m²/s) ?',
        solution: 'Condition laminaire : Re < 2 300\n2 300 = V × 0,050 / 1,006×10⁻⁶\nV < 2 300 × 1,006×10⁻⁶ / 0,050 = 2 313,8×10⁻⁶ / 0,050 = 0,04628 m/s ≈ 0,046 m/s\nPour V < 4,6 cm/s, l\'écoulement est laminaire dans ce DN50. En pratique, dans les réseaux AEP (V ≥ 0,3 m/s), on est toujours turbulent.'
      },
      {
        n: '3',
        enonce: 'Calculer λ par la formule de Swamee-Jain pour une conduite acier DN300 (ε=0,05 mm), V=1,2 m/s, eau à 20°C.',
        solution: 'Re = 1,2 × 0,300 / 1,006×10⁻⁶ = 358 000\nε/D = 0,05×10⁻³ / 0,300 = 1,667×10⁻⁴\nSwamee-Jain : λ = 0,25 / [log₁₀(ε/(3,71D) + 5,74/Re^0,9)]²\nε/(3,71×D) = 1,667×10⁻⁴/3,71 = 4,493×10⁻⁵\n5,74/Re^0,9 = 5,74/358000^0,9 : 358000^0,9 ≈ 113 000 → 5,74/113 000 = 5,08×10⁻⁵\nlog₁₀(4,493×10⁻⁵ + 5,08×10⁻⁵) = log₁₀(9,57×10⁻⁵) = -4,019\nλ = 0,25 / (-4,019)² = 0,25 / 16,15 = 0,01548 ≈ 0,0155'
      },
      {
        n: '4',
        enonce: 'Comparer le nombre de Reynolds dans un canal rectangulaire 1,5 m × 0,6 m (rempli à 0,6 m) et dans une conduite circulaire de même section mouillée.',
        solution: 'Canal rectangulaire : S = 1,5 × 0,6 = 0,9 m² ; P = 1,5 + 2×0,6 = 2,7 m\nD_h = 4S/P = 4×0,9/2,7 = 1,333 m\nConduite circulaire même section : S = πD²/4 = 0,9 → D = √(4×0,9/π) = √(1,146) = 1,071 m\nPour V = 0,8 m/s, ν = 1×10⁻⁶ m²/s :\nRe_canal = 0,8 × 1,333 / 1×10⁻⁶ = 1 066 400\nRe_conduite = 0,8 × 1,071 / 1×10⁻⁶ = 856 800\nLe canal a un Re 25% plus élevé pour la même section et la même vitesse.'
      },
      {
        n: '5',
        enonce: 'En laminaire (Re = 1 200), calculer λ et la perte de charge régulière pour L = 50 m, D = 20 mm, V = 0,06 m/s.',
        solution: 'λ = 64/Re = 64/1 200 = 0,0533\nJ = λ × V²/(2gD) = 0,0533 × 0,06²/(2×9,81×0,020) = 0,0533 × 0,0036/0,3924 = 0,000489 m/m\nΔh = J × L = 0,000489 × 50 = 0,024 m\nVérification Re : Re = VD/ν = 0,06×0,020/1,006×10⁻⁶ = 1 193 ≈ 1 200 ✓'
      },
      {
        n: '6',
        enonce: 'Après 20 ans d\'exploitation, une conduite fonte DN200 a une rugosité de ε = 1 mm (dépôts calcaires). Calculer λ à Re = 200 000. Comparer avec la conduite neuve (ε = 0,25 mm).',
        solution: 'Conduite vieillie : ε/D = 1×10⁻³/0,200 = 5×10⁻³\nSwamee-Jain (Re grand, terme 5,74/Re^0,9 ~ 5,74/80000 = 7,2×10⁻⁵ négligeable) :\nλ_vieux ≈ 0,25/[log₁₀(ε/(3,71D))]² = 0,25/[log₁₀(5×10⁻³/3,71)]² = 0,25/[log₁₀(1,348×10⁻³)]² = 0,25/(-2,870)² = 0,25/8,237 = 0,0304\nConduite neuve : ε/D = 0,25×10⁻³/0,200 = 1,25×10⁻³\nλ_neuf ≈ 0,25/[log₁₀(1,25×10⁻³/3,71)]² = 0,25/[log₁₀(3,37×10⁻⁴)]² = 0,25/(-3,472)² = 0,25/12,05 = 0,0208\nRapport : 0,0304/0,0208 = 1,46 → les pertes de charge sont 46% plus élevées dans la conduite vieillie.'
      },
      {
        n: '7',
        enonce: 'Une conduite PVC DN100 (ε = 0,007 mm) véhicule 15 L/s. Calculer Re et λ (eau à 20°C). La conduite est-elle dans le régime lisse ou rugueux ?',
        solution: 'Q = 0,015 m³/s ; S = π×0,01/4 = 7,854×10⁻³ m² ; V = 0,015/7,854×10⁻³ = 1,910 m/s\nRe = 1,910 × 0,100 / 1,006×10⁻⁶ = 189 900 ≈ 190 000\nε/D = 0,007×10⁻³/0,100 = 7×10⁻⁵ (très faible)\nSwamee-Jain : terme ε/(3,71D) = 7×10⁻⁵/3,71 = 1,887×10⁻⁵ ; terme 5,74/Re^0,9 = 5,74/190000^0,9 ≈ 5,74/64000 = 8,97×10⁻⁵\nlog₁₀(1,887×10⁻⁵ + 8,97×10⁻⁵) = log₁₀(1,086×10⁻⁴) = -3,964\nλ = 0,25/(-3,964)² = 0,25/15,71 = 0,01591 ≈ 0,016\nLe terme de viscosité (8,97×10⁻⁵) est dominant sur le terme de rugosité (1,9×10⁻⁵) : régime quasi-lisse.'
      },
      {
        n: '8',
        enonce: 'Pourquoi la turbulence est-elle favorable dans un bassin de chloration ? Quel paramètre caractérise le mélange dans ce contexte ?',
        solution: 'Dans un bassin de chloration, le chlore doit entrer en contact avec toutes les molécules d\'eau pour être efficace. En régime laminaire, le mélange se fait uniquement par diffusion moléculaire — très lente (coefficient de diffusion du chlore dans l\'eau : D ≈ 1,8×10⁻⁹ m²/s).\nEn régime turbulent, les tourbillons transportent le chlore sur de grandes distances en très peu de temps (diffusion turbulente), avec un coefficient de dispersion turbulente Dt >> D moléculaire.\nLe paramètre caractéristique est le temps de contact CT = concentration × temps [mg·min/L] : CT = C × t où C est la concentration résiduelle de chlore [mg/L] et t le temps de contact [min]. La turbulence assure une distribution uniforme de C → CT efficace et homogène. En pratique, pour respecter le CT réglementaire (ex : CT ≥ 12 mg·min/L), un bassin de contact turbulent peut être plus compact qu\'un bassin laminaire stratifié.'
      }
    ]
  },

  'GEMEAU-016': {
    id: 'GEMEAU-016',
    titre: 'Pertes de charge : origines et mécanismes',
    fiche: {
      intro: 'Les pertes de charge sont la traduction énergétique des frottements internes et des perturbations dans l\'écoulement. Elles déterminent les besoins en pompage, le dimensionnement des conduites, et la pression disponible en chaque point d\'un réseau. Maîtriser leur calcul est une compétence fondamentale du technicien GEMEAU : toute erreur d\'un facteur 2 sur les pertes de charge se répercute directement sur la puissance de pompage (et sur la facture d\'électricité).',
      sections: [
        {
          titre: '1. Pertes de charge régulières (linéaires)',
          texte: 'Les pertes de charge régulières (linéaires) sont dues au frottement du fluide contre les parois sur toute la longueur de la conduite. La formule de Darcy-Weisbach est la référence : Δh = λ × (L/D) × V²/(2g) [m], ou en Pa : ΔP = λ × (L/D) × ρV²/2. Le coefficient λ (facteur de friction de Darcy) dépend du régime d\'écoulement (Re) et de la rugosité relative ε/D.\n\nEn pratique, pour les réseaux d\'eau potable en PVC ou PEHD neuf, on utilise souvent la formule de Hazen-Williams, empirique mais pratique : Q = 0,2785 × C × D^2,63 × J^0,54 [m³/s], où C est le coefficient de Hazen-Williams (C = 150 pour PVC neuf, C = 100-120 pour acier, C = 100 pour béton, C = 80 pour fonte vieillie) et J la pente hydraulique [m/m]. Cette formule est valide pour l\'eau à 10-15°C en régime turbulent.\n\nLa formule de Manning-Strickler est utilisée pour les écoulements à surface libre (canaux, égouts gravitaires) : V = K × R_h^(2/3) × i^(1/2), où K est le coefficient de Strickler [m^(1/3)/s], R_h = S/P_mouillé le rayon hydraulique [m], et i la pente de la ligne d\'énergie. Valeurs de K : béton lisse K=80-90, béton rugueux K=60-70, maçonnerie K=50, rivière naturelle K=20-40.',
          sous_sections: [
            {
              titre: '1.1 Gradient hydraulique et pente de la ligne de charge',
              texte: 'Le gradient hydraulique J = Δh/L = ΔP/(ρgL) est la perte de charge par mètre de conduite [m/m] ou [‰]. Pour une conduite gravitaire (pas de pompe), J représente aussi la pente minimale de la conduite pour maintenir la vitesse requise. En assainissement gravitaire, J est généralement la pente de la conduite elle-même (approximation valide si l\'écoulement est uniforme). Une pente de 3‰ = J = 0,003 m/m.'
            }
          ]
        },
        {
          titre: '2. Pertes de charge singulières (locales)',
          texte: 'Les pertes de charge singulières (locales) sont provoquées par les perturbations géométriques : coudes, tés, réductions, élargissements, vannes, clapets, compteurs. Elles s\'expriment par : Δh_s = ξ × V²/(2g) [m], où ξ (zeta) est le coefficient de perte singulière (sans dimension), caractéristique de chaque singularité et dépendant du rapport de sections et de l\'angle de la singularité.\n\nValeurs typiques de ξ : coude 90° acier ξ = 0,5-1,5 ; coude progressif 90° ξ = 0,2-0,4 ; té passage direct ξ = 0,5 ; té dérivation ξ = 1,2-2,0 ; vanne papillon ouverte ξ = 0,5-1,5 ; clapet anti-retour ξ = 1-3 ; réduction progressive ξ = 0,1-0,3 ; entrée dans un réservoir (bord droit) ξ = 0,5 ; sortie dans un réservoir ξ = 1,0.\n\nL\'équivalent en longueur L_eq = ξ × D / λ [m] permet d\'exprimer la perte singulière comme une longueur équivalente de conduite droite. Par exemple, pour un coude 90° (ξ=0,8) en DN200 avec λ=0,020 : L_eq = 0,8 × 0,200/0,020 = 8 m. Tous les L_eq peuvent être additionnés à la longueur réelle pour un calcul global.',
          sous_sections: [
            {
              titre: '2.1 Perte dans un élargissement brusque (coup de bélier non hydraulique)',
              texte: 'Pour un élargissement brusque de section S1 à S2 > S1 (Borda-Carnot) : Δh = (V1-V2)² / (2g). Cette perte est due à la décollement de l\'écoulement au point d\'élargissement et à la formation de zones de recirculation. Avec continuité V1S1 = V2S2 : Δh = V1² × (1 - S1/S2)² / (2g). Pour S2 >> S1 (sortie dans un réservoir) : Δh = V1²/(2g) → ξ = 1,0. Cette formule est exacte pour l\'élargissement brusque (Borda).'
            }
          ]
        },
        {
          titre: '3. Pertes de charge dans les ouvrages de traitement',
          texte: 'Dans les ouvrages de traitement d\'eau (filtres, échangeurs d\'ions, membranes), les pertes de charge sont dues à l\'écoulement à travers un milieu poreux. La loi de Darcy pour les milieux poreux est : Q = K × i × S, où K est la perméabilité hydraulique [m/s], i la charge hydraulique [m/m] et S la section transversale [m²]. Cette loi n\'est valide qu\'en régime laminaire (Re < 1 pour les milieux granulaires).\n\nPour un filtre à sable de 3 m de profondeur, K = 5×10⁻³ m/s, surface = 20 m², débit = 20 L/s = 0,020 m³/s : V_filtration = Q/S = 0,020/20 = 0,001 m/s. i = V/K = 0,001/(5×10⁻³) = 0,2 m/m. Δh = i × L_filtre = 0,2 × 3 = 0,6 m. La perte de charge augmente avec le colmatage du filtre (K diminue) et déclenche le déclenchement du rétrolavage.\n\nPour les membranes de filtration (UF, NF, OI), la perte de charge à travers la membrane est exprimée par la pression transmembranaire PTM = ΔP/ΔC, où ΔC est la concentration de polluants retenants. En pratique, PTM augmente avec le colmatage et le suivi de PTM permet de déclencher les nettoyages chimiques au bon moment.',
          sous_sections: [
            {
              titre: '3.1 Perte de charge dans les réseaux de distribution',
              texte: 'Dans les réseaux arborescents simples, la perte de charge totale entre la source et l\'abonné le plus défavorisé (point critique) est la somme des pertes régulières et singulières dans chaque tronçon. En pratique, pour un avant-projet, on dimensionne les conduites pour un gradient hydraulique J = 1-5 m/km (0,001-0,005 m/m), ce qui donne des vitesses dans la plage 0,5-1,5 m/s pour des diamètres courants DN100 à DN300.'
            }
          ]
        },
        {
          titre: '4. Calcul pratique : bilan des pertes de charge d\'une installation',
          texte: 'Pour une installation de pompage complète (aspiration + refoulement), la perte de charge totale est : Σ Δh = Σ Δh_rég_asp + Σ Δh_sing_asp + Σ Δh_rég_ref + Σ Δh_sing_ref. Chaque terme est calculé avec les formules appropriées, en distinguant les tronçons de diamètre différent.\n\nUne règle pratique courante : pour les avant-projets, les pertes singulières représentent environ 20-30% des pertes régulières dans un réseau de distribution bien conçu. Cette approximation permet une estimation rapide sans calculer chaque singularité.\n\nL\'objectif du dimensionnement est de trouver le diamètre optimal qui minimise le coût total (investissement tuyaux + coût énergie pompage sur 20-30 ans). En général, une augmentation de diamètre réduit les pertes de charge (et l\'énergie) mais augmente le coût des tuyaux. La vitesse économique est typiquement 0,8-1,2 m/s pour les réseaux de refoulement d\'eau potable.',
          sous_sections: [
            {
              titre: '4.1 Vérification du débit auto-curant en assainissement',
              texte: 'Pour un réseau gravitaire d\'assainissement, la pente de la conduite doit assurer V ≥ 0,6 m/s à la pointe (au moins 2 fois par semaine pour les réseaux séparatifs). Pour une conduite DN200 (K=70), la pente minimale est calculée par Manning : J_min = [V_min/(K × R_h^(2/3))]² = [0,6/(70×0,05^(2/3))]² = [0,6/(70×0,1357)]² = [0,6/9,499]² = 0,0632² = 0,00399 m/m ≈ 4‰. Une pente de 4 à 5‰ est donc recommandée pour les conduites DN200 en béton.'
            }
          ]
        }
      ],
      points: [
        'Darcy-Weisbach : Δh = λ(L/D)(V²/2g) → [m] ; λ de Colebrook ou Swamee-Jain',
        'Hazen-Williams : Q = 0,2785 × C × D^2,63 × J^0,54 (eau ~10-15°C, turbulent)',
        'Manning-Strickler : V = K × R_h^(2/3) × i^(1/2) (écoulement à surface libre)',
        'Perte singulière : Δh_s = ξ × V²/(2g) ; ξ = 0,5 (coude 90°) à 3 (clapet)',
        'Longueur équivalente : L_eq = ξ × D / λ',
        'Élargissement brusque (Borda) : Δh = (V1-V2)²/(2g)',
        'Filtre à sable : loi de Darcy Q = K × i × S (milieu poreux, régime laminaire)',
        'Hazen-Williams C : PVC neuf = 150, acier = 120, fonte vieillie = 80',
        'Vitesse économique refoulement AEP : 0,8-1,2 m/s',
        'Pertes singulières ≈ 20-30% des pertes régulières en réseau bien conçu'
      ],
      formules: [
        'Darcy-Weisbach : Δh = λ × (L/D) × V²/(2g) → [m] ; ΔP = λ(L/D)(ρV²/2) [Pa]',
        'Gradient hydraulique : J = Δh / L = ΔP/(ρgL) → [m/m]',
        'Manning-Strickler : V = K × R_h^(2/3) × i^(1/2) → [m/s] ; R_h = S/P_mouillé [m]',
        'Perte singulière : Δh_s = ξ × V²/(2g) → [m]',
        'Longueur équivalente singularité : L_eq = ξ × D / λ → [m]',
        'Borda (élargissement) : Δh = (V1 - V2)² / (2g) → [m]'
      ],
      retenir: 'Darcy-Weisbach : Δh = λ(L/D)V²/2g · Manning-Strickler pour surface libre · Pertes singulières : ξ×V²/2g · L_eq = ξD/λ · Hazen-Williams C : PVC=150, fonte vieillie=80 · Vitesse 0,8-1,2 m/s pour refoulement AEP'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Calculer la perte de charge régulière dans une conduite PEHD DN200 (λ=0,018), L=500 m, Q=45 L/s.',
        solution: 'S = π×0,04/4 = 0,03142 m² ; V = 0,045/0,03142 = 1,432 m/s\nΔh = λ(L/D)V²/(2g) = 0,018 × (500/0,200) × 1,432²/(2×9,81)\n= 0,018 × 2 500 × 2,051/19,62 = 0,018 × 2 500 × 0,1046\n= 0,018 × 261,4 = 4,71 m\nJ = 4,71/500 = 9,42 m/km'
      },
      {
        n: '2',
        enonce: 'Utiliser Hazen-Williams (C=140, PVC) pour calculer le débit dans une conduite DN150, J=5‰ (0,005 m/m).',
        solution: 'Q = 0,2785 × C × D^2,63 × J^0,54\nD^2,63 = 0,150^2,63 : ln(0,15)×2,63 = (-1,897)×2,63 = -4,989 → e^(-4,989) = 0,00679\nJ^0,54 = 0,005^0,54 : ln(0,005)×0,54 = (-5,298)×0,54 = -2,861 → e^(-2,861) = 0,0571\nQ = 0,2785 × 140 × 0,00679 × 0,0571 = 0,2785 × 140 × 3,879×10⁻⁴ = 0,01513 m³/s = 15,1 L/s'
      },
      {
        n: '3',
        enonce: 'Calculer les pertes singulières pour une installation comprenant : 2 coudes 90° (ξ=0,8 chacun), 1 clapet anti-retour (ξ=2,5), 1 vanne ouverte (ξ=0,2). Conduite DN150, V=1,1 m/s.',
        solution: 'ξ_total = 2×0,8 + 2,5 + 0,2 = 1,6 + 2,5 + 0,2 = 4,3\nΔh_s = ξ × V²/(2g) = 4,3 × 1,1²/(2×9,81) = 4,3 × 1,21/19,62 = 4,3 × 0,06167 = 0,265 m\nLongueur équivalente (λ=0,020) : L_eq = ξ×D/λ = 4,3 × 0,150/0,020 = 32,25 m'
      },
      {
        n: '4',
        enonce: 'Une conduite passe de DN200 (V1=1,5 m/s) à DN300 brusquement. Calculer la perte par élargissement brusque (Borda).',
        solution: 'Continuité : V2 = V1 × (D1/D2)² = 1,5 × (200/300)² = 1,5 × 0,4444 = 0,667 m/s\nΔh_Borda = (V1-V2)²/(2g) = (1,5-0,667)²/(2×9,81) = 0,833²/19,62 = 0,694/19,62 = 0,0354 m\nComparaison : élargissement progressif ξ≈0,1 : Δh = 0,1×1,5²/19,62 = 0,0115 m\nL\'élargissement progressif réduit les pertes de 67% par rapport à un élargissement brusque.'
      },
      {
        n: '5',
        enonce: 'Un filtre à sable (S=25 m², K=4×10⁻³ m/s, profondeur=2 m) traite Q=20 L/s. Calculer la perte de charge. La perte devient 1,2 m après colmatage : calculer la nouvelle perméabilité K\'.',
        solution: 'V_filtration = Q/S = 0,020/25 = 8×10⁻⁴ m/s\ni = V/K = 8×10⁻⁴ / 4×10⁻³ = 0,2 m/m\nΔh = i × L = 0,2 × 2 = 0,40 m\nAprès colmatage (Δh = 1,2 m) : i\' = 1,2/2 = 0,6 m/m\nK\' = V/i\' = 8×10⁻⁴ / 0,6 = 1,33×10⁻³ m/s\nK a diminué d\'un facteur 3 (de 4×10⁻³ à 1,33×10⁻³) → rétrolavage nécessaire.'
      },
      {
        n: '6',
        enonce: 'Calculer la HMT d\'une pompe sur une installation avec : H_géo=22 m, conduite refoulement DN150, L=300 m (λ=0,019), 4 coudes 90° (ξ=0,7), 1 clapet (ξ=2), pression résiduelle 2 bar (20,4 m). Q=20 L/s.',
        solution: 'V = 4×0,020/(π×0,0225) = 0,080/0,07069 = 1,132 m/s\nΔh_rég = 0,019 × (300/0,150) × 1,132²/19,62 = 0,019 × 2000 × 0,0653 = 2,48 m\nΔh_sing = (4×0,7 + 2) × 1,132²/19,62 = (2,8+2) × 0,0653 = 4,8 × 0,0653 = 0,313 m\nHMT = 22 + 2,48 + 0,313 + 20,4 = 45,2 m\nP_hyd = ρgQH = 1000×9,81×0,020×45,2 = 8 872 W ≈ 8,9 kW'
      },
      {
        n: '7',
        enonce: 'Quelle pente minimale (‰) faut-il pour une conduite béton DN300 (K=70) pour assurer V=0,7 m/s (auto-curage) en section pleine ?',
        solution: 'V = K × R_h^(2/3) × i^(1/2)\nR_h = D/4 = 0,075 m ; R_h^(2/3) = 0,075^(2/3) = e^(0,667×ln(0,075)) = e^(0,667×(-2,590)) = e^(-1,727) = 0,1779\nV = K × R_h^(2/3) × √i → 0,7 = 70 × 0,1779 × √i\n0,7 = 12,45 × √i → √i = 0,7/12,45 = 0,05622 → i = 0,003161 m/m ≈ 3,2‰'
      },
      {
        n: '8',
        enonce: 'Comparer les pertes de charge sur 200 m pour deux conduites de débit identique (Q=30 L/s) : DN150 (λ=0,020) et DN200 (λ=0,018).',
        solution: 'DN150 : S=π×0,0225/4=0,01767 m², V=0,030/0,01767=1,698 m/s\nΔh_150 = 0,020 × (200/0,150) × 1,698²/19,62 = 0,020 × 1333 × 2,883/19,62 = 0,020 × 1333 × 0,147 = 3,92 m\nDN200 : S=0,03142 m², V=0,030/0,03142=0,955 m/s\nΔh_200 = 0,018 × (200/0,200) × 0,955²/19,62 = 0,018 × 1000 × 0,912/19,62 = 0,018 × 1000 × 0,0465 = 0,837 m\nRapport : 3,92/0,837 = 4,68 → le DN150 a des pertes 4,7 fois supérieures au DN200 à débit égal. Passer du DN150 au DN200 réduit drastiquement les besoins en pompage.'
      }
    ]
  },

  'GEMEAU-017': {
    id: 'GEMEAU-017',
    titre: 'Transferts thermiques dans les systèmes à eau',
    fiche: {
      intro: 'Les transferts thermiques sont omniprésents dans les installations liées à l\'eau : réchauffement des eaux usées en STEP (impact sur la biologie), échangeurs thermiques pour la production d\'eau chaude sanitaire, désinfection thermique à 60°C, récupération de chaleur sur les eaux usées (pompe à chaleur sur eaux grises), et équilibre thermique des eaux de surface en été. Un technicien GEMEAU doit pouvoir estimer les échanges thermiques simples et interpréter les bilans énergétiques.',
      sections: [
        {
          titre: '1. Modes de transfert thermique',
          texte: 'Il existe trois mécanismes fondamentaux de transfert de chaleur. La conduction est le transfert par contact moléculaire dans un milieu solide ou fluide immobile : Q = λ_th × S × ΔT / e [W], où λ_th est la conductivité thermique [W/(m·K)], S la section de passage [m²], ΔT la différence de température [K], et e l\'épaisseur [m]. Pour l\'eau liquide : λ_th = 0,58 W/(m·K) ; pour le PVC : 0,17 W/(m·K) ; pour l\'acier : 50 W/(m·K).\n\nLa convection est le transfert entre une surface solide et un fluide en mouvement. Le flux de chaleur est : Q = h × S × (T_paroi - T_fluide) [W], où h est le coefficient d\'échange convectif [W/(m²·K)]. Pour l\'eau en convection forcée turbulente, h peut atteindre 1 000-10 000 W/(m²·K) ; pour l\'air naturel, h ≈ 5-25 W/(m²·K). C\'est pourquoi l\'eau est un excellent caloporteur.\n\nLe rayonnement thermique est le transfert par ondes électromagnétiques infrarouge : Q = ε × σ × S × (T1⁴ - T2⁴), où σ = 5,67×10⁻⁸ W/(m²·K⁴) est la constante de Stefan-Boltzmann et ε l\'émissivité (0-1). Le rayonnement est important pour les surfaces chaudes (chaudières, bacs à ciel ouvert) mais généralement négligeable dans les conduites en charge.',
          sous_sections: [
            {
              titre: '1.1 Capacité thermique massique de l\'eau',
              texte: 'La capacité thermique massique (chaleur spécifique) de l\'eau est Cp ≈ 4 180 J/(kg·K) (valeur à 20°C, quasi-constante entre 0 et 100°C). C\'est la plus élevée des liquides courants, ce qui fait de l\'eau un caloporteur exceptionnel. Énergie pour chauffer m kg d\'eau de ΔT : Q = m × Cp × ΔT [J]. Puissance thermique pour un débit massique Qm : P = Qm × Cp × ΔT = ρ × Q × Cp × ΔT [W].'
            }
          ]
        },
        {
          titre: '2. Échangeurs de chaleur : principe et calcul simplifié',
          texte: 'Un échangeur de chaleur transfère de l\'énergie thermique entre deux fluides à températures différentes, sans les mélanger. Le plus simple est l\'échangeur à plaques (PHE) ou tubulaire. En contre-courant (les deux fluides circulent en sens inverse), l\'efficacité thermique est maximale.\n\nBilan thermique en régime permanent : P_échangée = Qm_chaud × Cp × (T_chaud_entrée - T_chaud_sortie) = Qm_froid × Cp × (T_froid_sortie - T_froid_entrée). Cela traduit la conservation de l\'énergie : l\'énergie perdue par le fluide chaud est reçue par le fluide froid (en négligeant les pertes vers l\'extérieur).\n\nPour un échangeur eau/eau : fluide chaud entre à 70°C, sort à 45°C, débit 5 m³/h (1,389 kg/s) ; calculer la puissance : P = Qm × Cp × ΔT = 1,389 × 4 180 × (70-45) = 1,389 × 4 180 × 25 = 145 200 W ≈ 145 kW. Si l\'eau froide entre à 10°C et doit être chauffée au maximum, avec le même débit : ΔT_froid = P/(Qm × Cp) = 145 200/(1,389 × 4 180) = 25°C → sortie à 35°C.',
          sous_sections: [
            {
              titre: '2.1 Coefficient global d\'échange et surface d\'échange',
              texte: 'La puissance échangée peut aussi s\'écrire : P = U × S × ΔT_lm, où U est le coefficient global d\'échange [W/(m²·K)], S la surface d\'échange [m²], et ΔT_lm la différence de température logarithmique moyenne. Pour un échangeur eau/eau à plaques en inox : U ≈ 3 000-6 000 W/(m²·K). Pour un échangeur eau/air : U ≈ 20-80 W/(m²·K). La surface d\'échange nécessaire est S = P / (U × ΔT_lm).'
            }
          ]
        },
        {
          titre: '3. Récupération de chaleur sur eaux usées',
          texte: 'Les eaux usées domestiques ont une température moyenne de 12-18°C en hiver et 20-25°C en été — bien plus chaudes que les eaux de rivière en hiver. Cette énergie thermique peut être récupérée par pompe à chaleur (PAC) pour le chauffage urbain ou la production d\'eau chaude sanitaire.\n\nLe coefficient de performance (COP) d\'une PAC est COP = E_restituée / E_consommée_électrique. Pour une PAC eau/eau avec T_source = 15°C et T_condensation = 50°C : COP ≈ 3,5-4,5 (pour 1 kWh électrique consommé, 3,5 à 4,5 kWh de chaleur restitués). L\'énergie récupérée par refroidissement des eaux usées de ΔT = 5°C sur Q = 200 m³/h : P = ρQCpΔT = 1000×(200/3600)×4180×5 = 1 161 000 W ≈ 1 160 kW. Avec COP=4 et rendement pompe=0,85 : P_élec = 1 160/(4×0,85) = 341 kW ; P_restituée = 1 160 + 341 = 1 501 kW.\n\nDes systèmes de récupération thermique sur collecteurs d\'assainissement (échangeurs dans le radier ou en paroi) existent depuis les années 2000 en Suisse et en Allemagne. Ils permettent de valoriser l\'énergie des eaux usées dans des quartiers résidentiels denses.',
          sous_sections: [
            {
              titre: '3.1 Impact thermique sur les stations d\'épuration',
              texte: 'La température de l\'eau influence fortement les processus biologiques en STEP. La nitrification (oxydation de l\'ammonium NH4+ en nitrates NO3-) est catalysée par des bactéries (Nitrosomonas, Nitrobacter) dont l\'activité suit la loi de Van\'t Hoff/Arrhenius : une baisse de 10°C divise le taux de nitrification par 2-3. En hiver (température < 10°C), les STEP doivent prévoir un surdimensionnement ou un réchauffage des effluents pour maintenir les performances. La désnitrification (réduction de NO3- en N2) est moins sensible à la température.'
            }
          ]
        },
        {
          titre: '4. Désinfection thermique et pasteurisation',
          texte: 'La désinfection thermique consiste à chauffer l\'eau à une température suffisante pour inactiver les micro-organismes pathogènes. La pasteurisation de l\'eau est définie par la loi de désinfection log : log₁₀(N0/N) = CT_thermique × K_T, où CT_thermique = C × t (concentration de la dose thermique × temps), analogue au CT de la chloration.\n\nPour Legionella pneumophila : inactivation en 30 min à 60°C, en 5-10 min à 65°C, instantanée à 70°C. Les réseaux d\'eau chaude sanitaire (ECS) doivent donc être maintenus à ≥ 60°C en production et ≥ 50°C en distribution (réglementation française) pour éviter la multiplication des légionelles (optimum de croissance : 35-45°C).\n\nL\'énergie pour chauffer 1 m³ d\'eau de 15°C à 60°C : Q = ρ × V × Cp × ΔT = 1000 × 1 × 4180 × (60-15) = 188 100 000 J = 188,1 MJ = 52,3 kWh. Pour un hôtel consommant 10 m³/h d\'ECS : P_chauffe = 1000 × (10/3600) × 4180 × 45 = 522 000 W = 522 kW. Le dimensionnement d\'une chaudière doit tenir compte de ce besoin en pointe.',
          sous_sections: [
            {
              titre: '4.1 Pertes thermiques dans les réseaux de chaleur',
              texte: 'Les réseaux de chaleur urbains (chauffage urbain) transportent de l\'eau chaude à 70-110°C sur des kilomètres. Les pertes thermiques par les parois des conduites préisolées doivent être minimisées. Pour une conduite DN200 préisolée (U = 0,3 W/(m·K)), longueur 1 km, ΔT_sol = 50°C (eau à 70°C, sol à 20°C) : P_perdu = U × L × ΔT = 0,3 × 1000 × 50 = 15 000 W = 15 kW/km. Pour Q = 50 m³/h (13,9 kg/s), cette perte correspond à ΔT = 15000/(13,9×4180) = 0,26°C/km, ce qui est acceptable.'
            }
          ]
        }
      ],
      points: [
        'Cp eau ≈ 4 180 J/(kg·K) : le plus élevé des liquides courants',
        'Puissance thermique : P = ρ × Q × Cp × ΔT [W] ; Q [m³/s], ΔT [K]',
        'Conduction : Q = λ_th × S × ΔT / e ; eau : λ_th = 0,58 W/(m·K)',
        'Convection forcée eau : h = 1 000-10 000 W/(m²·K) (excellent caloporteur)',
        'Bilan échangeur : Qm_chaud × Cp × ΔT_chaud = Qm_froid × Cp × ΔT_froid',
        'COP pompe à chaleur : 3,5-4,5 (eau/eau)',
        'Légionelles : 60°C → inactivation en 30 min ; croissance optimum 35-45°C',
        'ECS réglementation : production ≥ 60°C, distribution ≥ 50°C',
        'Nitrification STEP : halved every 10°C de baisse de température',
        'Chauffer 1 m³ de 15 à 60°C nécessite ≈ 52 kWh'
      ],
      formules: [
        'Énergie thermique : Q_th = m × Cp × ΔT → [J] ; m [kg], Cp = 4 180 J/(kg·K), ΔT [K]',
        'Puissance thermique : P = ρ × Q × Cp × ΔT → [W] ; Q [m³/s]',
        'Conduction : Q = λ_th × S × ΔT / e → [W] ; λ_th [W/(m·K)], e = épaisseur [m]',
        'Convection : Q = h × S × (T_paroi - T_fluide) → [W] ; h [W/(m²·K)]',
        'Bilan échangeur : Qm1 × Cp × ΔT1 = Qm2 × Cp × ΔT2 → [W]'
      ],
      retenir: 'Cp eau = 4 180 J/(kg·K) · P = ρQCpΔT · Bilan échangeur : chaleur perdue = chaleur gagnée · Légionelles : ECS ≥ 60°C · Nitrification chute avec température · COP PAC ≈ 4 · 1 m³ eau 15→60°C = 52 kWh'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Calculer la puissance pour chauffer Q = 8 m³/h d\'eau de 12°C à 58°C.',
        solution: 'P = ρ × Q × Cp × ΔT = 1000 × (8/3600) × 4180 × (58-12)\n= 1000 × 0,002222 × 4180 × 46\n= 1000 × 0,002222 × 192 280\n= 427 250 W ≈ 427 kW'
      },
      {
        n: '2',
        enonce: 'Un échangeur refroidit 20 m³/h d\'eau de 55°C à 30°C avec de l\'eau froide entrant à 10°C. Calculer la T de sortie de l\'eau froide si son débit est de 30 m³/h.',
        solution: 'Puissance échangée (côté chaud) : P = 1000×(20/3600)×4180×(55-30) = 1000×0,005556×4180×25 = 580 600 W\nBilan côté froid : P = ρ × Q_froid × Cp × ΔT_froid\n580 600 = 1000 × (30/3600) × 4180 × ΔT_froid\n580 600 = 34 833 × ΔT_froid\nΔT_froid = 580 600 / 34 833 = 16,7°C\nT_sortie_froid = 10 + 16,7 = 26,7°C'
      },
      {
        n: '3',
        enonce: 'Un réseau ECS de 300 L est maintenu à 60°C. Le sol ambiant est à 15°C. L\'isolation (U = 0,5 W/(m·K)) couvre 200 m de tuyauterie. Calculer les pertes thermiques en W et kWh/an.',
        solution: 'P_pertes = U × L × ΔT = 0,5 × 200 × (60-15) = 0,5 × 200 × 45 = 4 500 W\nSur 8 760 h/an : E = 4 500 × 8 760 = 39 420 000 Wh = 39 420 kWh/an ≈ 39,4 MWh/an\nÀ 0,15 €/kWh : coût = 39 420 × 0,15 = 5 913 €/an → justifie un renforcement de l\'isolation.'
      },
      {
        n: '4',
        enonce: 'Une PAC sur eaux usées récupère Q = 150 m³/h (ΔT = 4°C). COP = 4. Calculer la puissance récupérée et la puissance électrique consommée.',
        solution: 'P_source = ρ × Q × Cp × ΔT = 1000 × (150/3600) × 4180 × 4 = 1000 × 0,04167 × 4180 × 4 = 696 360 W ≈ 696 kW\nCOP = P_chauffage / P_élec → P_chauffage = P_source + P_élec\nCOP = (P_source + P_élec) / P_élec → P_élec = P_source / (COP - 1) = 696 / (4-1) = 232 kW\nP_chauffage = 696 + 232 = 928 kW'
      },
      {
        n: '5',
        enonce: 'Combien de temps faut-il pour chauffer 5 m³ d\'eau de 10°C à 60°C avec une chaudière de 80 kW ? Calculer l\'énergie consommée.',
        solution: 'E = m × Cp × ΔT = 5 000 × 4 180 × (60-10) = 5 000 × 4 180 × 50 = 1 045 000 000 J = 1 045 MJ = 290 kWh\nTemps = E/P = 1 045 000 000 / 80 000 = 13 063 s = 217 min ≈ 3 h 37 min'
      },
      {
        n: '6',
        enonce: 'La température de l\'eau en entrée d\'une STEP est 8°C en hiver (vitesse de nitrification réduite à 20% par rapport à 20°C). Si la STEP est dimensionnée pour une durée de séjour de 10 h à 20°C, quelle durée est nécessaire à 8°C pour maintenir la même efficacité de nitrification ?',
        solution: 'Activité à 20% de la valeur à 20°C : il faut 5 fois plus de biomasse active ou 5 fois plus de temps de séjour pour le même résultat.\nDurée à 8°C = 10 × (1/0,20) = 50 h\nEn pratique, on ne peut pas toujours multiplier le temps de séjour par 5 : les STEP sont dimensionnées avec un facteur 1,5 à 2 pour l\'hiver, et des ajustements opérationnels (réduction de charge, recirculation) permettent de compenser partiellement.'
      },
      {
        n: '7',
        enonce: 'Un réseau d\'eau potable en PVC DN200 est enterré à 0,8 m. En hiver, la température du sol est 5°C, l\'eau entre à 10°C. Estimer la perte de chaleur par conduction à travers la paroi PVC (épaisseur 6 mm, λ=0,17 W/(m·K)) sur 500 m.',
        solution: 'Surface de la conduite : S = π × D × L = π × 0,200 × 500 = 314,2 m²\nConduction (paroi uniquement) : Q = λ × S × ΔT / e = 0,17 × 314,2 × (10-5) / 0,006\n= 0,17 × 314,2 × 5 / 0,006 = 0,17 × 314,2 × 833 = 44 495 W ≈ 44,5 kW\nRefroidissement de l\'eau (Q=20 L/s) : ΔT = P/(ρQCp) = 44 500/(1000×0,020×4180) = 44500/83600 = 0,53°C\nL\'eau se refroidit de 0,53°C sur 500 m : l\'impact est faible mais non nul.'
      },
      {
        n: '8',
        enonce: 'Pour maintenir une bouteille d\'eau à 50°C dans un local à 20°C, il faut 200 W. Calculer le coefficient d\'échange global U si la surface du réservoir est 2 m².',
        solution: 'P = U × S × ΔT\n200 = U × 2 × (50-20) = U × 2 × 30 = 60U\nU = 200/60 = 3,33 W/(m²·K)\nCe coefficient U est relativement bas (isolation thermique médiocre). Un ballon bien isolé aurait U < 1 W/(m²·K), ce qui nécessiterait seulement 200 × (1/3,33) = 60 W pour le maintenir à température.'
      }
    ]
  },

  'GEMEAU-018': {
    id: 'GEMEAU-018',
    titre: 'Électricité et énergie pour installations hydrotechniques',
    fiche: {
      intro: 'Les installations de traitement et de distribution d\'eau sont parmi les plus grandes consommatrices d\'électricité dans les services publics. Un technicien GEMEAU doit être capable de comprendre une facture d\'électricité, de calculer la consommation d\'un poste de pompage, d\'identifier les leviers d\'économies d\'énergie, et de comprendre les bases du câblage électrique et de la protection des moteurs. Ces compétences sont essentielles pour la maîtrise des coûts d\'exploitation.',
      sections: [
        {
          titre: '1. Lois de base de l\'électricité',
          texte: 'La loi d\'Ohm établit la relation entre tension U [V], courant I [A] et résistance R [Ω] : U = R × I. La puissance électrique est P = U × I [W] en courant continu (DC). En courant alternatif monophasé (AC), P = U × I × cos(φ), où cos(φ) est le facteur de puissance (entre 0 et 1). La puissance apparente (ou puissance totale) est S = U × I [VA], la puissance active est P = S × cos(φ) [W], et la puissance réactive est Q_r = S × sin(φ) [VAR].\n\nPour un moteur de pompe triphasé (standard industriel) : P = √3 × U × I × cos(φ), avec U = tension entre phases (380 V réseau français), I = courant par phase [A], cos(φ) ≈ 0,85 pour un moteur bien chargé. À charge partielle, le cos(φ) chute, ce qui augmente le courant à réactif et peut générer des pénalités sur la facture d\'électricité.\n\nL\'énergie électrique consommée est E = P × t [Wh] ou [kWh]. 1 kWh = 1 000 W × 1 h = 3 600 000 J = 3,6 MJ. Pour un moteur de 11 kW fonctionnant 2 500 h/an : E = 11 × 2 500 = 27 500 kWh/an. Au tarif de 0,15 €/kWh : coût = 4 125 €/an.',
          sous_sections: [
            {
              titre: '1.1 Disjoncteurs, fusibles et protection des moteurs',
              texte: 'Les moteurs de pompe sont protégés par des disjoncteurs magnéto-thermiques (surcharge thermique et court-circuit) et souvent par des relais thermiques pour les surintensités prolongées. Le calibre du disjoncteur est choisi en fonction du courant nominal In du moteur, avec un réglage à 1,1 × In. Les contacteurs associés permettent la mise en marche/arrêt à distance. Un variateur de fréquence (VFD) remplace le contacteur et permet de faire varier la vitesse du moteur pour adapter le débit sans vannes de régulation.'
            }
          ]
        },
        {
          titre: '2. Rendement des groupes de pompage',
          texte: 'Le rendement global d\'un groupe de pompage est le produit des rendements de chaque composant : η_global = η_pompe × η_moteur × η_transmission (= 1 si accouplement direct). Pour une installation bien dimensionnée : η_pompe = 0,70-0,85 ; η_moteur = 0,92-0,96 (moteur IE3 haut rendement) ; η_global ≈ 0,65-0,82.\n\nLa puissance utile (hydraulique) est P_util = ρ × g × Q × HMT [W]. La puissance absorbée au réseau est P_élec = P_util / η_global [W]. Pour un groupe pompant Q = 100 m³/h à HMT = 40 m : P_util = 1 000 × 9,81 × (100/3600) × 40 = 10 900 W. Avec η = 0,72 : P_élec = 10 900/0,72 = 15 139 W = 15,1 kW.\n\nLe point de fonctionnement d\'une pompe centrifuge est déterminé par l\'intersection de la courbe caractéristique de la pompe H(Q) et de la courbe du réseau H_réseau(Q) = H_géo + R × Q². Lorsque le point de fonctionnement s\'écarte du meilleur rendement (BEP — Best Efficiency Point), le rendement chute et la consommation augmente. Un mauvais choix de pompe peut augmenter la consommation de 30 à 50%.',
          sous_sections: [
            {
              titre: '2.1 Variateurs de fréquence et économies d\'énergie',
              texte: 'Un variateur de fréquence (VFD) modifie la fréquence d\'alimentation du moteur, donc sa vitesse de rotation. Les lois d\'affinité des pompes centrifuges stipulent que Q ∝ n, H ∝ n², P ∝ n³. Réduire la vitesse de 20% (n=0,8×n_nom) réduit le débit de 20%, la HMT de 36%, et la puissance de 49%. Cette loi en cube fait que les VFD sont extrêmement rentables en présence de variations de débit importantes (poste de relevage avec variation de niveau, réseau avec débit variable).'
            }
          ]
        },
        {
          titre: '3. Calcul de la consommation électrique d\'une STEP',
          texte: 'Une station d\'épuration est un grand consommateur d\'électricité. Consommations typiques (en kWh par m³ d\'eau traitée) : traitement mécanique et décantation = 0,03-0,05 kWh/m³ ; aération biologique (bassin d\'activation) = 0,15-0,40 kWh/m³ ; traitement tertiaire (UF, désinfection UV) = 0,05-0,10 kWh/m³. Au total : 0,3-0,6 kWh/m³ pour une STEP biologque secondaire classique.\n\nL\'aération est le premier poste de consommation d\'une STEP classique : les aérateurs (turbines de surface ou soufflantes) représentent 50 à 70% de la consommation totale de la station. L\'optimisation de l\'aération (sonde O2 en continu, régulation on/off ou modulée par PID, aération en intermittence) permet des économies de 20 à 40% sur ce poste.\n\nUne STEP de 20 000 équivalents-habitants (EH) traitant Q_j = 4 000 m³/j consomme typiquement 0,4 kWh/m³ : E = 4 000 × 0,4 = 1 600 kWh/j = 584 000 kWh/an. Au tarif de 0,12 €/kWh : coût = 70 080 €/an. La valorisation énergétique du biogaz produit (digestion anaérobie des boues) peut couvrir 20 à 50% de cette consommation.',
          sous_sections: [
            {
              titre: '3.1 Bilans énergétiques et IEE',
              texte: 'L\'indice d\'efficacité énergétique (IEE, ou Energy Efficiency Index) est la consommation d\'électricité rapportée à la charge hydraulique ou à la quantité de polluant éliminé. Pour l\'AEP : IEE = kWh/m³ distribué (valeur cible : < 0,5 kWh/m³ pour un réseau de plaine bien optimisé). Pour l\'assainissement : IEE = kWh/kg de DBO5 éliminée (valeur cible : 0,5-1,0 kWh/kg DBO5). Ces indicateurs permettent de comparer les performances des installations et d\'identifier les marges de progrès.'
            }
          ]
        },
        {
          titre: '4. Optimisation énergétique des installations',
          texte: 'Les principales mesures d\'optimisation énergétique dans les installations de l\'eau sont : le remplacement des pompes surdimensionnées ou vieillissantes par des pompes modernes au meilleur rendement, l\'installation de variateurs de fréquence sur les pompes à débit variable, la réduction des pertes de charge par le recalibrage des conduites et la réduction des singularités, et la valorisation énergétique du biogaz en STEP.\n\nL\'audit énergétique est la première étape : il quantifie les consommations par postes (pompage, aération, éclairage, traitement), identifie les anomalies (pompes loin de leur BEP, conduites sous-dimensionnées, fuites dans le réseau AEP) et estime le retour sur investissement des mesures correctives. Un réseau AEP avec un taux de fuite de 30% consomme 30% d\'énergie de pompage "pour rien" : toute réduction des fuites économise directement de l\'énergie.\n\nLes périodes creuses tarifaires (tarif HP/HC, tarif vert EDF) permettent de décaler les pompages vers les heures à tarif réduit. Un poste de relevage avec réservoir de capacité suffisante peut pomper la nuit (tarif HC) et laisser le réservoir se vider le jour (tarif HP). Économie possible : 20-30% sur la facture d\'électricité à consommation kWh identique.',
          sous_sections: [
            {
              titre: '4.1 Autoconsommation photovoltaïque',
              texte: 'L\'installation de panneaux photovoltaïques sur les toits des bâtiments de STEP ou en ombrière au-dessus des bassins permet une production d\'électricité locale. Pour une STEP de 50 000 EH (surface disponible 2 000 m², rendement PV 18%) : P_PV = 2 000 × 1 000 × 0,18 = 360 kW_crête. Énergie annuelle (France, 1 100 h équivalent pleine charge) : E_PV = 360 × 1 100 = 396 000 kWh/an. Cette production peut couvrir 30-60% de la consommation de la STEP selon sa taille et son implantation.'
            }
          ]
        }
      ],
      points: [
        'Loi d\'Ohm : U = R × I ; P = U × I (DC) ou U × I × cos(φ) (AC)',
        'Triphasé : P = √3 × U × I × cos(φ) ; U = 380 V en France',
        '1 kWh = 1 000 W × 1 h = 3,6 MJ',
        'Puissance utile pompe : P_util = ρ × g × Q × HMT [W]',
        'Puissance électrique : P_élec = P_util / η_global',
        'Lois d\'affinité : Q ∝ n, H ∝ n², P ∝ n³ (n = vitesse de rotation)',
        'VFD : réduire la vitesse de 20% divise la puissance par 0,8³ = 0,51 (gain 49%)',
        'Aération STEP = 50-70% de la consommation totale de la station',
        'STEP biologique : 0,3-0,6 kWh/m³ traité',
        'Réseau AEP avec 30% de fuite = 30% d\'énergie gaspillée en pompage'
      ],
      formules: [
        'Loi d\'Ohm : U = R × I → [V] ; P = U × I (DC), P = U × I × cos(φ) (AC) [W]',
        'Triphasé : P = √3 × U × I × cos(φ) → [W] ; U entre phases [V]',
        'Puissance hydraulique : P_util = ρ × g × Q × HMT → [W] ; Q [m³/s]',
        'Puissance électrique : P_élec = P_util / η_global → [W]',
        'Loi d\'affinité puissance : P2/P1 = (n2/n1)³ → adimensionnel'
      ],
      retenir: 'P = UIcos(φ) (monophasé) · P = √3 × U × I × cos(φ) (triphasé) · P_util = ρgQH · P_élec = P_util/η · VFD : P ∝ n³ (loi en cube) · STEP : aération = 50-70% conso · 1 kWh = 3,6 MJ · Réduire les fuites = réduire l\'énergie de pompage'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un moteur de pompe triphasé (380 V) a un courant de 12 A et cos(φ) = 0,87. Calculer sa puissance active absorbée.',
        solution: 'P = √3 × U × I × cos(φ) = 1,732 × 380 × 12 × 0,87\n= 1,732 × 380 × 10,44\n= 6 874 W ≈ 6,9 kW'
      },
      {
        n: '2',
        enonce: 'Calculer la puissance utile et la consommation annuelle (3 000 h/an) d\'un groupe pompant Q=120 m³/h à HMT=35 m (η_global=0,73).',
        solution: 'P_util = ρgQH = 1000×9,81×(120/3600)×35 = 1000×9,81×0,03333×35 = 11 430 W = 11,43 kW\nP_élec = P_util/η = 11 430/0,73 = 15 658 W ≈ 15,7 kW\nE = P × t = 15,7 × 3000 = 47 100 kWh/an\nÀ 0,13 €/kWh : coût = 6 123 €/an'
      },
      {
        n: '3',
        enonce: 'Un VFD réduit la vitesse d\'une pompe de 100% à 75%. Calculer les nouveaux Q, H, et P (en % des valeurs nominales).',
        solution: 'Lois d\'affinité (n2/n1 = 0,75) :\nQ2 = Q1 × 0,75 = 75% de Q1\nH2 = H1 × 0,75² = H1 × 0,5625 = 56,25% de H1\nP2 = P1 × 0,75³ = P1 × 0,4219 = 42,19% de P1\nÉconomie d\'énergie = 1 - 0,4219 = 57,81% → plus de 57% d\'énergie économisée pour une réduction de débit de 25%.'
      },
      {
        n: '4',
        enonce: 'Une STEP de 15 000 EH traite 3 000 m³/j avec une consommation de 0,45 kWh/m³. Calculer E annuelle, le coût (0,12€/kWh) et la part de l\'aération si elle représente 60%.',
        solution: 'E = 3 000 m³/j × 0,45 kWh/m³ × 365 j/an = 493 000 kWh/an ≈ 493 MWh/an\nCoût total = 493 000 × 0,12 = 59 160 €/an\nPart aération = 0,60 × 493 000 = 295 800 kWh/an → 35 496 €/an\nUne optimisation de l\'aération de 25% économise 73 950 kWh/an = 8 874 €/an.'
      },
      {
        n: '5',
        enonce: 'Calculer le courant nominal d\'un moteur triphasé 11 kW, cos(φ)=0,86, rendement moteur 93%, alimenté en 400 V.',
        solution: 'P_absorbée = P_util / η_moteur = 11 000 / 0,93 = 11 828 W\nP_absorbée = √3 × U × I × cos(φ)\nI = P_absorbée / (√3 × U × cos(φ)) = 11 828 / (1,732 × 400 × 0,86)\n= 11 828 / 595,8 = 19,85 A ≈ 20 A'
      },
      {
        n: '6',
        enonce: 'Un réseau AEP distribue 3 500 m³/j avec un rendement de réseau de 78% (22% de fuites) à une énergie de 0,35 kWh/m³ produit. Calculer l\'économie annuelle si on réduit les fuites à 12% (à débit distribué constant).',
        solution: 'Volume produit actuel : 3 500 / 0,78 = 4 487 m³/j\nE_actuelle = 4 487 × 0,35 = 1 570 kWh/j × 365 = 573 050 kWh/an\nVolume produit après travaux (fuites 12%) : 3 500 / 0,88 = 3 977 m³/j\nE_après = 3 977 × 0,35 = 1 392 kWh/j × 365 = 508 080 kWh/an\nÉconomie = 573 050 - 508 080 = 64 970 kWh/an\nÀ 0,14 €/kWh : 9 096 €/an → retour sur investissement des travaux de réduction des fuites.'
      },
      {
        n: '7',
        enonce: 'Un poste de relevage pompe 600 m³/h × 18 m HMT, η=0,75. Le tarif HC (22h-6h) est 0,09 €/kWh et HP 0,18 €/kWh. Calculer le coût si 50% du volume est pompé en HC vs 100% en HP.',
        solution: 'P_élec = ρgQH/η = 1000×9,81×(600/3600)×18/0,75 = 1000×9,81×0,1667×18/0,75\n= 29 430/0,75 = 39 240 W ≈ 39,2 kW\nVolume annuel supposé = 600×8 000 = 4 800 000 m³/an (8 000 h/an de pompage)\nE_totale = 39,2 kW × 8 000 h = 313 600 kWh/an\n100% en HP : coût = 313 600 × 0,18 = 56 448 €/an\n50% HC + 50% HP : coût = 156 800×0,09 + 156 800×0,18 = 14 112 + 28 224 = 42 336 €/an\nÉconomie : 56 448 - 42 336 = 14 112 €/an (25% d\'économie sur la facture)'
      },
      {
        n: '8',
        enonce: 'Calculer la résistance d\'un câble électrique de 50 m (aller-retour = 100 m) de section 10 mm² en cuivre (résistivité ρ = 1,72×10⁻⁸ Ω·m). La chute de tension pour I = 30 A est-elle acceptable (< 3% de 230 V) ?',
        solution: 'R = ρ × L / S = 1,72×10⁻⁸ × 100 / 10×10⁻⁶ = 1,72×10⁻⁶ / 10⁻⁵ = 0,172 Ω\nChute de tension : ΔU = R × I = 0,172 × 30 = 5,16 V\nPourcentage : ΔU% = 5,16/230 × 100 = 2,24%\nLa chute de tension de 2,24% est inférieure à 3% → câble 10 mm² acceptable pour cette distance et ce courant.'
      }
    ]
  }

};
