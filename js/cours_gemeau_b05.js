var GEMEAU_B05 = {

  'GEMEAU-035': {
    id: 'GEMEAU-035',
    titre: 'Cycle de l\'eau et bilans hydrologiques',
    fiche: {
      intro: 'En charge de la gestion quantitative d\'un bassin versant dans un syndicat de rivière, vous devez chaque année quantifier la ressource disponible et anticiper les déficits estivaux. La maîtrise du cycle de l\'eau et du bilan hydrologique est indispensable pour dimensionner les ouvrages de stockage, gérer les prélèvements autorisés et établir les plans de crise sécheresse imposés par les préfectures.',
      schema: `<svg viewBox="0 0 260 118" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="mb35" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#2563eb"/></marker></defs>
  <rect width="260" height="118" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Cycle de l'eau — équation du bilan</text>
  <ellipse cx="130" cy="30" rx="40" ry="12" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="130" y="34" text-anchor="middle" font-size="8" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Précipitations P</text>
  <line x1="100" y1="42" x2="68" y2="60" stroke="#2563eb" stroke-width="1.5" marker-end="url(#mb35)"/>
  <text x="72" y="56" font-size="7.5" fill="#2563eb" font-family="sans-serif">ruiss.</text>
  <line x1="130" y1="42" x2="130" y2="60" stroke="#2563eb" stroke-width="1.5" marker-end="url(#mb35)"/>
  <text x="134" y="56" font-size="7.5" fill="#2563eb" font-family="sans-serif">infilt.</text>
  <line x1="160" y1="42" x2="192" y2="60" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#mb35)"/>
  <text x="178" y="56" font-size="7.5" fill="#94a3b8" font-family="sans-serif">ETP</text>
  <rect x="40" y="60" width="50" height="18" rx="3" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
  <text x="65" y="72" text-anchor="middle" font-size="8" fill="#1d4ed8" font-family="sans-serif">Cours d'eau</text>
  <rect x="105" y="60" width="50" height="18" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="130" y="72" text-anchor="middle" font-size="8" fill="#15803d" font-family="sans-serif">Sol / nappe</text>
  <rect x="170" y="60" width="50" height="18" rx="3" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="195" y="72" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">Evap./Trans.</text>
  <line x1="65" y1="78" x2="90" y2="94" stroke="#2563eb" stroke-width="1.5" marker-end="url(#mb35)"/>
  <line x1="130" y1="78" x2="130" y2="94" stroke="#16a34a" stroke-width="1.5" marker-end="url(#mb35)"/>
  <line x1="195" y1="78" x2="168" y2="94" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#mb35)"/>
  <rect x="10" y="94" width="240" height="16" rx="3" fill="#f1f5f9"/>
  <text x="130" y="105" text-anchor="middle" font-size="8.5" fill="#334155" font-family="sans-serif" font-weight="bold">P = Q + ETR + ΔS  (mm/an)</text>
</svg>`,
      sections: [
        {
          titre: '1. Les compartiments du cycle hydrologique',
          texte: 'Le cycle hydrologique décrit la circulation perpétuelle de l\'eau entre l\'atmosphère, la surface terrestre et les aquifères souterrains, sous l\'action conjointe de l\'énergie solaire et de la gravité. À l\'échelle mondiale, les océans contiennent 96,5 % des 1,386 milliards de km³ d\'eau totale ; les glaces polaires et glaciers représentent 1,74 %, les eaux souterraines 1,69 %, et l\'atmosphère seulement 0,001 %. Malgré cette faible fraction atmosphérique, le renouvellement est extrêmement rapide (8 à 10 jours), ce qui en fait le vecteur de transfert le plus actif.\n\nÀ l\'échelle d\'un bassin versant, les compartiments fonctionnels sont l\'atmosphère (source des précipitations), le couvert végétal (interception et transpiration), la surface du sol (ruissellement ou infiltration), la zone vadose non saturée (tampon de recharge), l\'aquifère (réservoir souterrain à dynamique lente) et le cours d\'eau (exutoire concentrant tous les flux). En France métropolitaine, la précipitation annuelle moyenne est de 900 mm. L\'évapotranspiration réelle (ETR) en absorbe environ 550 mm, laissant 350 mm de lame ruisselée, soit 180 km³/an de ressource renouvelable pour les cours d\'eau et les nappes. Ces moyennes masquent de fortes disparités régionales : 550 mm de pluie en plaine du Centre, 2 500 mm sur le versant atlantique des Pyrénées.',
          sous_sections: []
        },
        {
          titre: '2. L\'équation fondamentale du bilan hydrologique',
          texte: 'La conservation de la masse d\'eau sur un bassin versant s\'exprime par l\'équation du bilan hydrologique : P = ETR + R + ΔS. P représente les précipitations totales tombées sur le bassin (mm), ETR l\'évapotranspiration réelle (retour vers l\'atmosphère par évaporation des sols et eaux libres plus transpiration végétale), R la lame d\'eau écoulée mesurée à l\'exutoire (mm), et ΔS la variation de stock hydrique (sol + nappes), positive lors d\'une recharge et négative lors d\'un déstockage.\n\nÀ l\'échelle annuelle, lorsque les stocks retrouvent leur niveau de l\'année précédente, ΔS ≈ 0 et la relation se simplifie à P ≈ ETR + R. Cela permet de calculer l\'une des trois grandeurs si les deux autres sont mesurées. Le coefficient d\'écoulement Ce = R/P caractérise le bassin : il vaut 0,10 à 0,15 pour un bassin calcaire sous climat méditerranéen (Hérault), 0,30 à 0,40 pour une plaine sédimentaire tempérée (bassin de la Seine), et dépasse 0,50 pour un bassin cristallin montagnard à forte pente (Durance alpine, Allier supérieur). Sur la Loire à Montjean-sur-Loire (115 000 km², module 850 m³/s), P = 870 mm, ETR = 637 mm, R = 233 mm et Ce = 0,27.',
          sous_sections: []
        },
        {
          titre: '3. L\'évapotranspiration : ETP et ETR',
          texte: 'L\'évapotranspiration potentielle (ETP) représente la quantité d\'eau que renverrait l\'atmosphère si la surface était constamment humide et la végétation bien alimentée. Elle dépend du rayonnement solaire, de la température, de l\'humidité et du vent. La méthode Penman-Monteith FAO est la référence internationale pour le calcul de l\'ET0 sur une culture de référence (gazon 12 cm) : ET0 = [0,408·Δ·(Rn-G) + γ·(900/(T+273))·U2·(es-ea)] / [Δ + γ·(1+0,34·U2)]. En pratique, Météo-France publie les valeurs d\'ETP pour ses postes du réseau climatologique.\n\nLa méthode simplifiée de Thornthwaite calcule l\'ETP mensuelle à partir de la seule température mensuelle moyenne T (°C) : ETP = 16·(10T/I)^a, où I est l\'indice thermique annuel et a un exposant empirique. Elle est moins précise (sous-estime l\'ETP méditerranéenne) mais utile pour les longues séries historiques sans données de rayonnement.\n\nL\'évapotranspiration réelle ETR est toujours inférieure ou égale à l\'ETP. Quand la réserve utile du sol (RU, en mm) est suffisamment remplie, ETR ≈ ETP. Dès que le stock diminue sous un seuil critique, les plantes subissent le stress hydrique et ETR < ETP. Le déficit hydrique DEF = ETP - ETR quantifie ce manque, fondamental en agronomie et en gestion des ressources estivales.',
          sous_sections: []
        },
        {
          titre: '4. Bilan mensuel par la méthode Thornthwaite-Mather',
          texte: 'La méthode Thornthwaite-Mather reconstitue mois par mois la dynamique du stock d\'eau du sol à partir de P, ETP et d\'une réserve utile maximale RU propre au type de sol et à l\'enracinement. Règles de calcul mensuel :\n- Si P ≥ ETP : ETR = ETP, le sol se recharge (ΔStock = P - ETP jusqu\'à RU), et l\'excédent (EXC = P - ETP - ΔStock quand stock = RU) alimente les nappes et ruissellement de base.\n- Si P < ETP et stock > 0 : ETR = ETP en puisant dans le stock (ΔStock = P - ETP < 0). DEF = 0.\n- Si P < ETP et stock = 0 : ETR = P, DEF = ETP - P, EXC = 0.\n\nExemple appliqué : station de Montpellier-Fréjorgues, RU = 100 mm, stock initial (mars) = 100 mm. En juillet (P = 18 mm, ETP = 138 mm) : besoin = 138-18 = 120 mm > stock de fin juin (supposons 30 mm). Stock = 0, ETR = 18 + 30 = 48 mm, DEF = 138 - 48 = 90 mm. Ce type de calcul, réalisé sur 30 ans, permet d\'estimer la ressource interannuelle, le débit moyen d\'étiage et les volumes mobilisables sans rupture de l\'alimentation des cours d\'eau.',
          sous_sections: []
        }
      ],
      points: [
        'Cycle hydrologique : mouvement perpétuel eau-atmosphère-sol-souterrain sous énergie solaire et gravité.',
        'Bilan fondamental : P = ETR + R + ΔS ; à l\'échelle annuelle P ≈ ETR + R si ΔS ≈ 0.',
        'En France : P ≈ 900 mm, ETR ≈ 550 mm, R ≈ 350 mm (moyennes nationales).',
        'Le coefficient d\'écoulement Ce = R/P varie de 0,10 (bassin calcaire sec) à plus de 0,60 (bassin montagnard imperméable).',
        'ETP = demande atmosphérique (Penman-Monteith = référence FAO, Thornthwaite = méthode simplifiée par T).',
        'ETR ≤ ETP : déficit hydrique DEF = ETP - ETR lorsque la réserve utile du sol est épuisée.',
        'La méthode Thornthwaite-Mather reconstitue mois par mois stock, ETR, DEF et excédent à partir de P, ETP et RU.',
        'L\'écoulement se compose d\'un ruissellement direct (rapide, événementiel) et d\'un écoulement de base (lent, soutenu par les nappes).',
        'La variation de stock ΔS = ΔNappe × Sy lie les données piézométriques au bilan hydrique.',
        'Le bilan hydrologique est le fondement des SDAGE, SAGE, plans de gestion de l\'étiage et arrêtés sécheresse.'
      ],
      formules: [
        'Bilan hydrologique : P = ETR + R + ΔS → [mm/an] ; P = précipitations, ETR = évapotranspiration réelle, R = lame écoulée, ΔS = variation de stock',
        'Coefficient d\'écoulement : Ce = R / P → [sans dimension] ; typiquement 0,10 à 0,60 en France',
        'Lame d\'eau écoulée : R = Q × t / S → [m] puis ×1000 = [mm] ; Q = débit moyen (m³/s), t = durée (s), S = surface du BV (m²)',
        'ETP Thornthwaite : ETP = 16 × (10T / I)^a → [mm/mois] ; T = température mensuelle (°C), I = indice thermique annuel = somme des (T_mois/5)^1,514',
        'Variation stock nappe : ΔS = ΔNappe × Sy → [mm] ; ΔNappe = variation du niveau piézométrique (m), Sy = coefficient d\'emmagasinement spécifique (0,05 à 0,25 pour nappe alluviale libre)'
      ],
      retenir: 'Cycle hydrologique · Bilan P = ETR + R + ΔS · ETP Penman-Monteith · Réserve utile du sol · Coefficient d\'écoulement · Déficit hydrique · Thornthwaite-Mather · Lame écoulée'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un bassin versant de 340 km² présente un débit moyen annuel mesuré Q = 4,8 m³/s et une précipitation annuelle P = 780 mm. En supposant ΔS ≈ 0, calculez : (a) la lame d\'eau écoulée R en mm/an, (b) l\'ETR en mm/an, (c) le coefficient d\'écoulement Ce.',
        solution: '(a) R = Q × t / S = 4,8 × 31 536 000 / (340 × 10^6) = 151 372 800 / 340 000 000 = 0,445 m/an = 445 mm/an.\n(b) ETR = P - R = 780 - 445 = 335 mm/an.\n(c) Ce = R/P = 445/780 = 0,57. Ce coefficient élevé (57 %) suggère un bassin montagnard cristallin ou très peu perméable, avec des pentes fortes favorisant le ruissellement rapide. La faible ETR (335 mm) est cohérente avec un bassin d\'altitude (végétation limitée, températures basses).'
      },
      {
        n: '2',
        enonce: 'Pour une station en Auvergne, l\'indice thermique annuel de Thornthwaite est I = 58 et l\'exposant a = 1,68. La température moyenne d\'août est T = 19,5°C. Calculez l\'ETP d\'août selon Thornthwaite (valeur non corrigée).',
        solution: 'ETP_août = 16 × (10 × 19,5 / 58)^1,68 = 16 × (195 / 58)^1,68 = 16 × (3,362)^1,68.\nCalcul de (3,362)^1,68 : ln(3,362) = 1,213 ; 1,213 × 1,68 = 2,038 ; e^2,038 = 7,68.\nETP_août = 16 × 7,68 = 123 mm/mois (valeur brute à corriger par le facteur mensuel en fonction de la latitude et du nombre de jours).'
      },
      {
        n: '3',
        enonce: 'Bilan mensuel Thornthwaite-Mather, RU = 100 mm, stock initial (mai) = 100 mm.\nJuin : P = 52 mm, ETP = 90 mm\nJuillet : P = 38 mm, ETP = 120 mm\nAoût : P = 42 mm, ETP = 110 mm\nCalculez pour chaque mois : stock, ETR, DEF, EXC.',
        solution: 'Juin : besoin = 90-52 = 38 mm ≤ stock 100 mm. Stock = 100-38 = 62 mm. ETR = 90 mm. DEF = 0. EXC = 0.\nJuillet : besoin = 120-38 = 82 mm > stock 62 mm. Stock = max(0, 62-82) = 0 mm. ETR = 38+62 = 100 mm. DEF = 120-100 = 20 mm. EXC = 0.\nAoût : stock = 0. ETR = P = 42 mm. DEF = 110-42 = 68 mm. EXC = 0.\nBilan estival : ETR = 90+100+42 = 232 mm. DEF cumulé = 0+20+68 = 88 mm. Ressource écoulée : EXC total = 0 (toute la pluie va à l\'ETR ou au déficit).'
      },
      {
        n: '4',
        enonce: 'Un aquifère alluvial de superficie 620 km² a un coefficient d\'emmagasinement spécifique Sy = 0,15. Entre octobre et mars, le niveau piézométrique moyen monte de 1,85 m. (a) Calculez le volume stocké dans la nappe (m³). (b) Calculez la lame équivalente de recharge sur un bassin versant de 1 800 km².',
        solution: '(a) Volume = ΔNappe × Sy × S_nappe = 1,85 × 0,15 × 620 × 10^6 = 1,85 × 0,15 × 620 000 000 = 172 050 000 m³ = 172 Mm³.\n(b) Lame de recharge = Volume / S_BV = 172 050 000 / (1 800 × 10^6) = 0,0956 m = 95,6 mm. Cette recharge hivernale de 96 mm (sur ~6 mois) est typique d\'un aquifère alluvial tempéré, alimentant les étiages estivaux à hauteur de ~8 mm/mois de déstockage.'
      },
      {
        n: '5',
        enonce: 'Comparez les bilans de deux bassins versants français (S = 2 500 km²) :\n- BV Alsace (continental) : P = 680 mm, Q moyen = 14,5 m³/s\n- BV Bretagne (océanique) : P = 1 050 mm, Q moyen = 18,2 m³/s\nCalculez R, ETR et Ce pour chaque bassin. Interprétez.',
        solution: 'Alsace : R = 14,5 × 31 536 000 / (2 500 × 10^6) = 457 320 000 / 2 500 000 000 = 0,183 m = 183 mm. ETR = 680-183 = 497 mm. Ce = 183/680 = 0,27.\nBretagne : R = 18,2 × 31 536 000 / (2 500 × 10^6) = 573 955 200 / 2 500 000 000 = 0,230 m = 230 mm. ETR = 1 050-230 = 820 mm. Ce = 230/1 050 = 0,22.\nInterprétation : le BV breton reçoit 370 mm de plus mais ne produit que 47 mm d\'écoulement supplémentaire, car l\'ETR est 323 mm supérieure (végétation active plus longtemps, sols plus chauds). Le BV alsacien a un Ce légèrement supérieur malgré moins de pluie, car les hivers froids limitent l\'ETP. Les deux Ce (0,22 et 0,27) sont typiques de bassins de plaine tempérés bien végétalisés.'
      },
      {
        n: '6',
        enonce: 'Sur le bassin de la Charente à Angoulême (S = 2 850 km²), les données de la Banque Hydro donnent pour une année sèche : P = 620 mm, Q moyen annuel = 9,2 m³/s. Les données piézométriques montrent que la nappe alluviale a baissé en moyenne de 0,95 m (Sy = 0,12, surface nappe 220 km²). Calculez R, estimez ΔS et déduisez ETR.',
        solution: 'R = 9,2 × 31 536 000 / (2 850 × 10^6) = 290 131 200 / 2 850 000 000 = 0,1018 m = 102 mm.\nΔS = ΔNappe × Sy × S_nappe = -0,95 × 0,12 × 220 × 10^6 = -25 080 000 m³ ; en lame sur le BV = -25 080 000 / (2 850 × 10^6) = -0,0088 m = -8,8 mm. (Signe négatif = déstockage).\nBilan : P = ETR + R + ΔS → ETR = P - R - ΔS = 620 - 102 - (-8,8) = 620 - 102 + 8,8 = 526,8 mm ≈ 527 mm.\nNB : En année sèche, le déstockage de la nappe (ΔS < 0) a soutenu les débits d\'étiage de la Charente, fournissant ~25 Mm³ supplémentaires.'
      },
      {
        n: '7',
        enonce: 'Une station agroclimatique mesure en septembre : ETP = 68 mm, P = 48 mm. Le sol (sol argilo-limoneux, RU = 120 mm) a un stock début septembre de 35 mm. Calculez : ETR, stock en fin de mois, DEF. Le blé d\'hiver peut-il être semé en conditions favorables ?',
        solution: 'Besoin en eau = ETP - P = 68 - 48 = 20 mm. Stock disponible = 35 mm > besoin = 20 mm.\nStock fin septembre = 35 - 20 = 15 mm. ETR = ETP = 68 mm. DEF = 0 mm.\nOui, le blé d\'hiver peut être semé dans de bonnes conditions : le sol dispose encore de 15 mm de réserve, le déficit est nul en septembre, et les pluies d\'automne (supposons P_oct > ETP_oct) vont progressivement recharger le stock jusqu\'à RU. Un déficit nul en fin d\'été indique que la végétation n\'a pas subi de stress sévère en septembre, conditions favorables à une levée homogène.'
      },
      {
        n: '8',
        enonce: 'Le SDAGE Adour-Garonne fixe le débit minimum biologique de la Garonne à Tonneins à 90 m³/s (débit réservé). La surface du bassin versant à Tonneins est de 52 000 km². Calculez la lame d\'eau minimale annuelle en mm/an correspondant à ce débit réservé, puis déterminez si ce minimum est compatible avec un bilan annuel typique (P = 820 mm, ETR = 600 mm) dans une année sèche (percentile 10) où R = 0,65 × R_moyen.',
        solution: 'Lame minimale réservée : R_min = 90 × 31 536 000 / (52 000 × 10^6) = 2 838 240 000 / 52 000 000 000 = 0,0546 m = 54,6 mm/an.\nR_moyen = P - ETR = 820 - 600 = 220 mm/an.\nR_année_sèche (percentile 10) = 0,65 × 220 = 143 mm/an.\nConclusion : 143 mm > 54,6 mm, donc la lame écoulée en année sèche (percentile 10) reste supérieure au débit minimum biologique. En termes de débit : Q_sèche = 143 × 10^-3 × 52 000 × 10^6 / 31 536 000 = 7 436 000 000 / 31 536 000 = 236 m³/s > 90 m³/s. Le débit réservé ne serait mis en danger qu\'en dessous du percentile 3-5, soit lors d\'étiages exceptionnels de type 2003 ou 2022.'
      }
    ]
  },

  'GEMEAU-036': {
    id: 'GEMEAU-036',
    titre: 'Délimitation et caractérisation d\'un bassin versant',
    fiche: {
      intro: 'Avant tout dimensionnement d\'un barrage, d\'un réseau d\'irrigation ou d\'un système de protection contre les crues, l\'hydrologue délimite et caractérise le bassin versant contributeur. Ces paramètres morphométriques — surface, forme, pente, réseau hydrographique — conditionnent directement les méthodes de calcul des débits et la forme des hydrogrammes de crue.',
      schema: `<svg viewBox="0 0 260 118" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <rect width="260" height="118" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Bassin versant — délimitation et exutoire</text>
  <path d="M20,100 C30,55 50,30 80,22 C100,18 120,25 130,30 C140,25 160,18 180,22 C210,30 230,55 240,100 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <path d="M20,100 C60,88 100,82 130,80 C160,82 200,88 240,100" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <circle cx="130" cy="100" r="6" fill="#2563eb"/>
  <text x="130" y="114" text-anchor="middle" font-size="8" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Exutoire</text>
  <path d="M80,22 C95,55 112,70 130,80" stroke="#2563eb" stroke-width="1.2" fill="none" stroke-dasharray="3,2"/>
  <path d="M180,22 C165,55 148,70 130,80" stroke="#2563eb" stroke-width="1.2" fill="none" stroke-dasharray="3,2"/>
  <text x="130" y="50" text-anchor="middle" font-size="8" fill="#15803d" font-family="sans-serif">Surface = A (km²)</text>
  <text x="20" y="30" font-size="7.5" fill="#16a34a" font-family="sans-serif" font-weight="bold">ligne</text>
  <text x="12" y="38" font-size="7.5" fill="#16a34a" font-family="sans-serif" font-weight="bold">de partage</text>
  <text x="130" y="66" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">Réseau hydrographique</text>
</svg>`,
      sections: [
        {
          titre: '1. Définition et délimitation du bassin versant topographique',
          texte: 'Le bassin versant topographique (ou bassin versant au sens strict) est la surface de terrain dont toutes les eaux ruissellent vers un même exutoire. Sa limite est la ligne de partage des eaux (LPE), qui passe par les points hauts du relief et sépare les eaux vers deux versants opposés. Cette ligne est perpendiculaire aux courbes de niveau et passe systématiquement par les talwegs inverses.\n\nLa délimitation se réalise classiquement sur une carte topographique IGN au 1/25 000ème en remontant de l\'exutoire le long de la crête topographique, en s\'assurant que chaque point de la LPE est un maximum local. À l\'heure actuelle, les SIG (QGIS, ArcGIS) permettent une délimitation automatique à partir du modèle numérique de terrain (MNT) via les algorithmes de calcul de direction d\'écoulement (D8, D-infinity) et d\'accumulation de flux. La BD ALTI® IGN à 25 m ou les données RGE Alti à 1 m permettent une délimitation précise.\n\nAttention : le bassin versant topographique peut différer du bassin versant hydrogéologique dans les massifs karstiques ou les zones de plateau à nappes peu profondes, où des transferts souterrains traversent la LPE topographique (cas fréquent dans le Quercy, le Jura, la Craie). Dans ce cas, les mesures de débit à l\'exutoire incluent des apports provenant de bassins topographiquement séparés.',
          sous_sections: []
        },
        {
          titre: '2. Les paramètres de forme : compacité et longueur équivalente',
          texte: 'La forme du bassin versant influence fortement la dynamique des crues : un bassin allongé amortit les hydrogrammes (les temps de concentration depuis les parties amont sont très différents), tandis qu\'un bassin compact concentre les débits de pointe.\n\nL\'indice de compacité de Gravelius Kc est le rapport entre le périmètre du bassin et le périmètre d\'un cercle de même superficie : Kc = P / (2√πS) = 0,28 × P / √S. Pour un bassin circulaire parfait, Kc = 1 (minimum théorique). Plus Kc est grand (1,2 ; 1,5 ; 2,0...), plus le bassin est allongé. Un Kc > 1,5 caractérise un bassin fortement allongé, favorable à des crues amorties.\n\nLa longueur du rectangle équivalent (LRE) est la longueur du rectangle de même superficie et même Kc que le bassin réel : L_eq = (Kc × √S / 1,128) × (1 + √(1 - (1,128/Kc)²)). Cette longueur sert à calculer la pente équivalente du bassin en répartissant la courbe hypsométrique sur le rectangle équivalent. Elle est utilisée dans certaines formules de temps de concentration et dans les méthodes de régionalisation des crues. Pour un bassin de 500 km² et Kc = 1,3, L_eq ≈ 32 km.',
          sous_sections: []
        },
        {
          titre: '3. L\'hypsométrie et les altitudes caractéristiques',
          texte: 'La courbe hypsométrique représente la distribution des altitudes sur le bassin versant : elle donne, pour chaque altitude h, le pourcentage de la superficie du bassin situé au-dessus de h. Sa forme renseigne sur le stade d\'évolution géomorphologique du bassin (jeune, mature, vieux) et permet d\'estimer les altitudes caractéristiques.\n\nLes altitudes caractéristiques couramment utilisées sont l\'altitude maximale H_max, l\'altitude minimale H_min (celle de l\'exutoire), l\'altitude moyenne H_moy pondérée par les surfaces de chaque tranche altitudinale, et l\'altitude médiane H_50% (altitude en-dessous de laquelle se trouve 50 % de la superficie). Pour les bassins à apport nival, l\'altitude de l\'isotherme 0°C moyen hivernal est déterminante pour estimer la fraction de précipitations solides.\n\nL\'indice de pente de Roche Ip = (1/L_eq) × Σ[(ΔS_i/S)^0,5 × ΔH_i] synthétise la pente globale du bassin à partir des tranches hypsométriques. Une pente forte (Ip > 0,04) est associée à des temps de concentration courts et des crues rapides et intenses ; une pente faible (Ip < 0,01) correspond à des bassins de plaine avec des montées en crue progressives.',
          sous_sections: []
        },
        {
          titre: '4. Le réseau hydrographique et la densité de drainage',
          texte: 'Le réseau hydrographique d\'un bassin versant se décrit à l\'aide de la classification de Strahler : les cours d\'eau de tête de bassin sans affluent sont d\'ordre 1 ; la confluence de deux cours d\'eau d\'ordre n donne un cours d\'eau d\'ordre n+1 ; la confluence d\'un cours d\'eau d\'ordre n avec un d\'ordre inférieur ne change pas l\'ordre. Cette classification hiérarchique traduit le degré de développement du réseau et la capacité de drainage du bassin.\n\nLa densité de drainage Dd = L_total / S est le rapport entre la longueur totale de tous les cours d\'eau permanents du bassin (km) et sa superficie (km²). Elle varie de moins de 0,5 km/km² pour les bassins calcaires (eau s\'infiltrant rapidement) à plus de 3 km/km² pour les bassins imperméables argileux ou schistes. Un Dd élevé traduit une réponse hydrologique rapide aux pluies et des crues plus marquées. En France, les valeurs typiques vont de 0,4 km/km² sur les causses calcaires à 2,5 km/km² sur les schistes armoricains.\n\nLe temps de concentration Tc, durée nécessaire à l\'eau de la partie la plus éloignée du bassin pour atteindre l\'exutoire, est inversement lié à la pente et directement lié à la longueur du trajet hydraulique le plus long. Il conditionne le pas de temps des calculs de crue et le choix de la durée de pluie de projet.',
          sous_sections: []
        }
      ],
      points: [
        'Le bassin versant topographique est délimité par la ligne de partage des eaux (LPE), perpendiculaire aux courbes de niveau.',
        'En karst ou sur craie, le BV hydrogéologique peut différer du BV topographique (transferts souterrains trans-LPE).',
        'Délimitation SIG à partir du MNT par algorithme D8 (direction d\'écoulement) + cumul de flux.',
        'Indice de compacité Gravelius : Kc = 0,28 × P / √S ; Kc = 1 pour un disque, Kc > 1,5 pour un bassin allongé.',
        'Bassin compact (Kc proche de 1) → crues de pointe fortes et rapides ; bassin allongé → hydrogrammes étalés.',
        'La courbe hypsométrique donne la distribution des altitudes et permet d\'identifier la fraction nivale des précipitations.',
        'Densité de drainage Dd = L_total / S : faible sur calcaire (< 0,5 km/km²), forte sur schistes ou argiles (> 2 km/km²).',
        'Classification de Strahler : cours d\'eau d\'ordre 1 (tête) → ordre n+1 à la confluence de deux ordres n.',
        'Le temps de concentration Tc conditionne la durée de pluie critique pour le dimensionnement des ouvrages.',
        'Tous les paramètres morphométriques sont calculables depuis QGIS + données BD ALTI IGN (25 m ou 1 m).'
      ],
      formules: [
        'Indice de compacité : Kc = 0,28 × P / √S → [sans dimension] ; P = périmètre du BV (km), S = superficie (km²) ; disque parfait : Kc = 1',
        'Longueur rectangle équivalent : L_eq = (Kc × √S / 1,128) × [1 + √(1 - (1,128/Kc)²)] → [km]',
        'Densité de drainage : Dd = L_total / S → [km/km²] ; L_total = longueur totale du réseau hydrographique (km)',
        'Pente moyenne du cours principal : I = (H_source - H_exutoire) / L → [m/km] ou [m/m]',
        'Superficie du BV par planimétrie SIG : S = Σ(cellules MNT × résolution²) → [km²]'
      ],
      retenir: 'Bassin versant topographique · Ligne de partage des eaux · Indice Gravelius Kc · Rectangle équivalent · Hypsométrie · Densité de drainage Dd · Classification de Strahler · Temps de concentration'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Sur une carte IGN au 1/25 000, vous mesurez le périmètre d\'un bassin versant P = 87 km et sa superficie S = 320 km². Calculez l\'indice de compacité de Gravelius Kc. Le bassin est-il compact ou allongé ? Que pouvez-vous en déduire sur le type de crue attendu ?',
        solution: 'Kc = 0,28 × P / √S = 0,28 × 87 / √320 = 24,36 / 17,89 = 1,36.\nKc = 1,36 : le bassin est modérément allongé (entre compact Kc ≈ 1,0 et très allongé Kc > 1,5). Il présentera des crues de pointe modérées avec un certain étalement de l\'hydrogramme. Les temps de concentration depuis les têtes de bassin les plus éloignées sont suffisamment différents pour que les ondes de crue ne se superposent pas entièrement à l\'exutoire, ce qui limite les débits de pointe par rapport à un bassin circulaire de même superficie.'
      },
      {
        n: '2',
        enonce: 'Un bassin versant a les caractéristiques suivantes : S = 180 km², périmètre P = 65 km. Calculez Kc et L_eq (longueur du rectangle équivalent).',
        solution: 'Kc = 0,28 × 65 / √180 = 18,2 / 13,42 = 1,36.\nL_eq = (Kc × √S / 1,128) × [1 + √(1 - (1,128/Kc)²)]\n= (1,36 × 13,42 / 1,128) × [1 + √(1 - (1,128/1,36)²)]\n= (18,25 / 1,128) × [1 + √(1 - 0,689²)]\n= 16,18 × [1 + √(1 - 0,475)]\n= 16,18 × [1 + √0,525]\n= 16,18 × [1 + 0,725]\n= 16,18 × 1,725 = 27,9 km.\nLa largeur du rectangle équivalent est l_eq = S / L_eq = 180 / 27,9 = 6,45 km.'
      },
      {
        n: '3',
        enonce: 'La courbe hypsométrique du bassin de l\'Ardèche à Vallon-Pont-d\'Arc (S = 612 km²) indique : 0-200 m : 5 % de la surface, 200-500 m : 25 %, 500-800 m : 35 %, 800-1 200 m : 28 %, 1 200-1 700 m : 7 %. Calculez l\'altitude moyenne pondérée (utilisez les altitudes médianes de chaque tranche).',
        solution: 'Altitudes médianes : [100, 350, 650, 1 000, 1 450] m ; fractions : [0,05, 0,25, 0,35, 0,28, 0,07].\nH_moy = Σ(H_médiane_i × fraction_i)\n= 100×0,05 + 350×0,25 + 650×0,35 + 1 000×0,28 + 1 450×0,07\n= 5 + 87,5 + 227,5 + 280 + 101,5 = 701,5 m.\nL\'altitude moyenne pondérée de 701 m est caractéristique d\'un bassin cévenol montagnard. Elle indique que la majorité de la superficie est au-dessus de 500 m, ce qui explique le régime méditerranéen à épisodes de pluies intenses (épisodes cévenols), avec des crues violentes et rapides à l\'exutoire (Tc ≈ 6 à 8 h).'
      },
      {
        n: '4',
        enonce: 'Vous cartographiez le réseau hydrographique d\'un bassin de 75 km² sur QGIS. Vous relevez les longueurs totales : cours d\'eau d\'ordre 1 = 42 km, ordre 2 = 18 km, ordre 3 = 9 km, ordre 4 = 4 km. Calculez la densité de drainage totale Dd et comparez à un bassin calcaire typique (Dd ≈ 0,4 km/km²) et un bassin schisteux (Dd ≈ 2,5 km/km²). Quelle géologie ce BV suggère-t-il ?',
        solution: 'L_total = 42 + 18 + 9 + 4 = 73 km.\nDd = L_total / S = 73 / 75 = 0,97 km/km².\nComparaison : Dd = 0,97 km/km² est intermédiaire entre calcaire (0,4) et schisteux (2,5). Ce bassin présente une perméabilité modérée, suggérant une géologie mixte, possiblement des formations gréseuses ou des calcaires altérés, avec une capacité d\'infiltration partielle. Le réseau est développé (ordre 4 présent) mais peu dense. Hypothèse géologique : grès permiens, calcaires dolomitiques fissurés, ou formations cristallines altérées (arènes granitiques).'
      },
      {
        n: '5',
        enonce: 'Vous comparez deux bassins versants de même superficie S = 850 km² :\n- BV A : Kc = 1,1, Dd = 2,2 km/km², pente I = 12 m/km\n- BV B : Kc = 1,7, Dd = 0,6 km/km², pente I = 3 m/km\nLequel présentera les crues de pointe les plus fortes ? Justifiez en termes de Kc, Dd et pente.',
        solution: 'BV A présentera les crues de pointe les plus fortes, pour trois raisons cumulées :\n1. Kc = 1,1 (compact) : les temps de concentration depuis toutes les parties du bassin sont similaires, les ondes de crue se superposent à l\'exutoire → débit de pointe amplifié.\n2. Dd = 2,2 km/km² (réseau dense, substrat imperméable) : le ruissellement superficiel est rapide, peu d\'eau s\'infiltre, la réponse au pluvieux est quasi-immédiate.\n3. Pente I = 12 m/km (forte) : les vitesses d\'écoulement sont élevées, le temps de concentration Tc est court.\nConclusion : BV A est caractéristique d\'un petit bassin cévenol ou pyrénéen à crues éclairs. BV B est un bassin allongé de plaine calcaire à crues lentes et amorties, typique de la Beauce ou du Quercy.'
      },
      {
        n: '6',
        enonce: 'Un ingénieur doit dimensionner un barrage écrêteur de crue sur un bassin versant dont la délimitation SIG donne S = 1 250 km². Il dispose du MNT RGE Alti 1 m. Les algorithmes D8 donnent le cours principal de longueur L = 68 km, avec une source à H_source = 1 240 m et un exutoire à H_exutoire = 185 m. Calculez la pente moyenne du cours principal. Estimez le temps de concentration Tc par la formule de Kirpich : Tc = 0,0195 × L^0,77 / I^0,385 (L en m, I en m/m, Tc en min).',
        solution: 'Pente moyenne : I = (H_source - H_exutoire) / L = (1 240 - 185) / 68 000 = 1 055 / 68 000 = 0,01551 m/m.\nFormule de Kirpich : L = 68 km = 68 000 m, I = 0,01551 m/m.\nTc = 0,0195 × (68 000)^0,77 / (0,01551)^0,385.\n(68 000)^0,77 : ln(68 000) = 11,127 ; 11,127 × 0,77 = 8,568 ; e^8,568 = 5 251.\n(0,01551)^0,385 : ln(0,01551) = -4,164 ; -4,164 × 0,385 = -1,603 ; e^-1,603 = 0,201.\nTc = 0,0195 × 5 251 / 0,201 = 0,0195 × 26 124 = 509 min ≈ 8,5 h.\nUn Tc de 8,5 heures est cohérent avec un bassin montagnard de cette superficie. La pluie de projet pour le dimensionnement sera donc d\'une durée critique de 8,5 h.'
      },
      {
        n: '7',
        enonce: 'En utilisant les données de la Banque Hydro pour la station de la Dordogne à Bergerac (code H3212010, S = 9 600 km²), on mesure un périmètre de BV de P = 620 km. Calculez Kc. Si la longueur totale du réseau hydrographique permanent est estimée à 4 800 km, calculez Dd.',
        solution: 'Kc = 0,28 × P / √S = 0,28 × 620 / √9 600 = 173,6 / 97,98 = 1,77.\nKc = 1,77 : bassin allongé, typique des grands bassins aquitains qui suivent les vallées orientées E-O depuis le Massif Central.\nDd = L_total / S = 4 800 / 9 600 = 0,50 km/km².\nDd = 0,5 km/km² : valeur faible reflétant la présence de formations karstiques et calcaires dans le Périgord et le Quercy, absorbant une partie des pluies. Cette faible densité explique les variations importantes entre hautes eaux (crues lentes de 400-500 m³/s) et étiages (QMNA5 ≈ 45 m³/s).'
      },
      {
        n: '8',
        enonce: 'Deux techniciens délimitent le même bassin versant sur carte 1/25 000 en suivant les méthodes IGN. Technicien A obtient S = 142 km², technicien B obtient S = 158 km². L\'écart est de 11 %. Donnez deux sources d\'erreurs possibles et expliquez comment les éviter avec un SIG.',
        solution: 'Sources d\'erreurs possibles :\n1. Imprécision du tracé de la LPE en zones de relief peu marqué (vallées larges, plaines alluviales) : les deux techniciens n\'ont pas suivi le même point haut. Solution SIG : le MNT calcule automatiquement la direction d\'écoulement pixel par pixel, éliminant l\'ambiguïté visuelle. Utiliser RGE Alti 1 m en zone de relief faible pour une meilleure précision.\n2. Confusion entre bassin topographique et bassin hydrogéologique en zone karstique : la LPE topographique ne correspond pas à la vraie limite de l\'aire contributive souterraine. Solution : croiser la LPE SIG avec les cartes géologiques BRGM et les données de traçages hydrogéologiques (colorants fluorescents) pour identifier les transferts souterrains trans-LPE.'
      }
    ]
  },

  'GEMEAU-037': {
    id: 'GEMEAU-037',
    titre: 'Précipitations et observation météorologique',
    fiche: {
      intro: 'Chargé d\'une étude hydrologique pour le dimensionnement d\'un bassin de rétention pluvial sur une commune périurbaine, vous devez caractériser les précipitations du site : hauteurs annuelles, intensités maximales et périodes de retour. La maîtrise des réseaux d\'observation, des méthodes de spatialisation et des ajustements fréquentiels est indispensable pour estimer les pluies de projet utilisées dans le dimensionnement des ouvrages hydrauliques.',
      schema: `<svg viewBox="0 0 260 112" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="mb37" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#334155"/></marker></defs>
  <rect width="260" height="112" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Pluviomètre et hyétogramme</text>
  <rect x="90" y="22" width="30" height="50" rx="2" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="92" y="46" width="26" height="26" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="1"/>
  <text x="105" y="62" text-anchor="middle" font-size="7.5" fill="#1d4ed8" font-family="sans-serif">mm</text>
  <line x1="135" y1="45" x2="165" y2="45" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="140" y="40" font-size="7.5" fill="#64748b" font-family="sans-serif">Auget</text>
  <line x1="165" y1="96" x2="248" y2="96" stroke="#334155" stroke-width="1.5" marker-end="url(#mb37)"/>
  <line x1="165" y1="96" x2="165" y2="22" stroke="#334155" stroke-width="1.5" marker-end="url(#mb37)"/>
  <text x="244" y="108" font-size="8" fill="#334155" font-family="sans-serif">t →</text>
  <rect x="170" y="82" width="8" height="14" fill="#2563eb"/>
  <rect x="182" y="66" width="8" height="30" fill="#2563eb"/>
  <rect x="194" y="50" width="8" height="46" fill="#2563eb"/>
  <rect x="206" y="72" width="8" height="24" fill="#2563eb"/>
  <rect x="218" y="86" width="8" height="10" fill="#2563eb"/>
  <rect x="230" y="90" width="8" height="6" fill="#2563eb"/>
  <text x="206" y="30" text-anchor="middle" font-size="8" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Hyétogramme</text>
  <text x="206" y="41" text-anchor="middle" font-size="7.5" fill="#64748b" font-family="sans-serif">(P en mm/h)</text>
</svg>`,
      sections: [
        {
          titre: '1. Réseaux d\'observation et instruments de mesure',
          texte: 'Le réseau pluviométrique français est géré principalement par Météo-France (réseau Radome : ~3 500 postes automatiques) et par les collectivités et gestionnaires de cours d\'eau. La densité du réseau est en moyenne d\'un poste pour 150 km², mais très inégale : dense en montagne (impact fort sur les ressources) et plus lâche en plaine.\n\nLe pluviomètre à lecture directe (ou totalisateur) mesure la hauteur d\'eau accumulée sur une période donnée (journalière, mensuelle). Il ne donne pas la distribution temporelle de l\'événement. Le pluviographe (enregistreur automatique) mesure le cumul en continu avec un pas de temps de 5 à 60 minutes, permettant de calculer l\'intensité instantanée. Les modèles actuels sont des pluviographes à augets basculants (résolution 0,1 ou 0,2 mm), transmettant en temps réel via GSM/4G.\n\nLa correction des mesures est essentielle : le vent crée un déficit de captage (sous-estimation de 5 à 15 % en zone ventée), les fortes précipitations saturent parfois les augets, et les neiges fondantes collent aux parois. Les données brutes de Météo-France sont disponibles sur Climathèque et sur la plateforme data.gouv.fr ; les séries horaires ou à pas de 6 minutes sont accessibles pour les études hydrauliques nécessitant les intensités de pointe.',
          sous_sections: []
        },
        {
          titre: '2. Spatialisation des précipitations sur un bassin versant',
          texte: 'Un seul pluviomètre ne peut représenter la pluie sur l\'ensemble d\'un bassin versant : les précipitations varient avec l\'altitude, l\'exposition et la distance aux reliefs. Trois méthodes de calcul de la pluie moyenne sont classiquement utilisées.\n\nLa méthode arithmétique (moyenne simple) calcule P_moy = (1/n) × Σ P_i. Elle n\'est valide que pour des bassins de topographie uniforme avec une répartition homogène des postes. Elle est peu précise dès que les postes sont inégalement répartis.\n\nLa méthode de Thiessen (polygones de Voronoï) attribue à chaque poste une zone d\'influence définie par les médiatrices des segments reliant les postes voisins. La pluie moyenne vaut P_moy = Σ(A_i / A_total × P_i), où A_i est l\'aire du polygone de Thiessen associé au poste i. Cette méthode est meilleure que la moyenne simple mais ne tient pas compte du relief.\n\nLa méthode des isohyètes trace les lignes d\'égale hauteur de pluie à partir des mesures ponctuelles (interpolation manuelle ou par krigeage). La pluie moyenne est estimée par la somme des volumes entre isohyètes successives divisée par la surface totale. C\'est la méthode la plus précise, notamment en terrain accidenté. Sur un bassin de 400 km² avec des altitudes allant de 200 à 1 500 m, l\'écart entre la méthode arithmétique et la méthode des isohyètes peut dépasser 20 % lors d\'épisodes orographiques.',
          sous_sections: []
        },
        {
          titre: '3. Statistiques des précipitations et ajustements fréquentiels',
          texte: 'L\'ajustement statistique permet d\'associer une hauteur de précipitation à une période de retour T (ou à une probabilité de dépassement p = 1/T). Il repose sur l\'ajustement d\'une loi de probabilité à la série des valeurs annuelles maximales observées sur une longue période (au moins 20 à 30 ans).\n\nLa loi de Gumbel (distribution des valeurs extrêmes de type I) est la plus utilisée en France pour les pluies journalières maximales annuelles. La variable réduite de Gumbel u = -ln(-ln(F)), où F = 1 - 1/T est la probabilité de non-dépassement, permet d\'extrapoler à des périodes de retour non observées. La hauteur journalière de fréquence T s\'écrit : P_T = P_moy + σ × (u_T - 0,5772) / 1,2825, où P_moy et σ sont la moyenne et l\'écart-type de la série.\n\nPour les intensités à court pas de temps (pluies convectives, épisodes méditerranéens), la loi log-normale (ou loi de Galton) est souvent mieux adaptée car les valeurs extrêmes sont très dissymétriques. L\'ajustement se fait alors sur le logarithme des données. En pratique, la base de données Pluies Extrêmes de Météo-France (OPERA/SHYP) fournit des valeurs de précipitations de référence de T2 à T100 pour l\'ensemble du territoire français, interpolées sur une grille 1 km × 1 km.',
          sous_sections: []
        },
        {
          titre: '4. Pluies de projet : formule de Montana et courbes IDF',
          texte: 'Les courbes Intensité-Durée-Fréquence (IDF) caractérisent l\'intensité maximale de pluie en fonction de la durée d\'averse et de la période de retour. Elles sont fondamentales pour le dimensionnement des réseaux d\'assainissement, des bassins de rétention et des ouvrages anti-crues.\n\nLa formule de Montana exprime l\'intensité de pluie i (mm/h) en fonction de la durée t (min) pour une période de retour donnée : i = a × t^(-b), où a et b sont des coefficients ajustés par régression log-log sur les données locales. Pour un site du Midi, T10 ans, a = 17 et b = 0,60 typiquement : à t = 60 min, i = 17 × 60^(-0,60) = 17 × 0,0625 = 1,06 mm/min = 63,6 mm/h.\n\nPour l\'Île-de-France, les coefficients de Montana publiés par le SEEE (Service des Études et d\'Expertise sur les risques) donnent pour T10 : a = 6,3 et b = 0,45. Les bureaux d\'études hydrauliques utilisent ces coefficients pour calculer la pluie de projet de durée égale au temps de concentration du bassin : P_T = i × Tc = a × Tc^(1-b). Ce couple (Tc, P_T) est l\'entrée du calcul de débit de pointe par la méthode rationnelle ou par les méthodes distribuées type HEC-HMS.',
          sous_sections: []
        }
      ],
      points: [
        'Le réseau Radome (Météo-France) compte ~3 500 postes automatiques ; densité moyenne 1 poste / 150 km² en France.',
        'Pluviomètre totalisateur → cumul sur une période ; pluviographe à augets basculants → intensités instantanées à pas de 5-60 min.',
        'Correction du vent indispensable : déficit de captage de 5 à 15 % en zone ventée.',
        'Méthode arithmétique : valide sur terrain plat homogène seulement.',
        'Méthode de Thiessen (polygones de Voronoï) : pondération par l\'aire d\'influence de chaque poste.',
        'Méthode des isohyètes : la plus précise en relief accidenté (krigeage, interpolation).',
        'Loi de Gumbel : ajustement des maxima annuels de pluie journalière → extrapolation à T2...T100.',
        'Courbes IDF (Intensité-Durée-Fréquence) : fondamentales pour le dimensionnement des ouvrages pluviaux.',
        'Formule de Montana : i = a × t^(-b) → [mm/h] ; coefficients a et b publiés par région et période de retour.',
        'Base Pluies Extrêmes Météo-France : valeurs de référence P_T sur grille 1 km × 1 km.'
      ],
      formules: [
        'Pluie moyenne Thiessen : P_moy = Σ(A_i / S × P_i) → [mm] ; A_i = aire du polygone de Thiessen du poste i (km²), S = superficie du BV (km²)',
        'Variable réduite Gumbel : u_T = -ln(-ln(1 - 1/T)) → [sans dim] ; T = période de retour (ans), ex : T10 → u = 2,25',
        'Intensité Montana : i = a × t^(-b) → [mm/h] ; t = durée de la pluie (min), a et b = coefficients locaux ajustés',
        'Hauteur de pluie de projet : P_T = i × t_c = a × t_c^(1-b) → [mm] ; t_c = temps de concentration du bassin (min)',
        'Probabilité de dépassement annuel : p = 1/T → [sans dim] ; T10 → p = 10 % ; T100 → p = 1 %'
      ],
      retenir: 'Pluviographe à augets · Méthode de Thiessen · Isohyètes · Loi de Gumbel · Courbes IDF · Formule de Montana · Période de retour · Pluie de projet'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un bassin versant de 280 km² possède 4 pluviomètres. Lors d\'un épisode pluvieux, ils mesurent P1 = 48 mm, P2 = 62 mm, P3 = 37 mm, P4 = 55 mm. Les polygones de Thiessen donnent A1 = 85 km², A2 = 65 km², A3 = 72 km², A4 = 58 km². Calculez la pluie moyenne par la méthode de Thiessen.',
        solution: 'P_moy = (A1×P1 + A2×P2 + A3×P3 + A4×P4) / S\n= (85×48 + 65×62 + 72×37 + 58×55) / 280\n= (4 080 + 4 030 + 2 664 + 3 190) / 280\n= 13 964 / 280 = 49,9 mm.\nLa pluie moyenne Thiessen (50 mm) est supérieure à la moyenne arithmétique (48+62+37+55)/4 = 50,5 mm — ici très proches par coïncidence. Si les postes recevaient des hauteurs très différentes, les deux méthodes donneraient des résultats significativement différents.'
      },
      {
        n: '2',
        enonce: 'Une série de 35 ans de pluies journalières maximales annuelles donne une moyenne P_moy = 72 mm et un écart-type σ = 18 mm. En utilisant la loi de Gumbel, calculez les pluies journalières de période de retour T = 10 ans et T = 100 ans. (Pour Gumbel : P_T = P_moy + σ × (u_T - 0,5772) / 1,2825 ; u_T10 = 2,25 ; u_T100 = 4,60).',
        solution: 'T = 10 ans : P_10 = 72 + 18 × (2,25 - 0,5772) / 1,2825 = 72 + 18 × 1,6728 / 1,2825 = 72 + 18 × 1,304 = 72 + 23,5 = 95,5 mm.\nT = 100 ans : P_100 = 72 + 18 × (4,60 - 0,5772) / 1,2825 = 72 + 18 × 4,0228 / 1,2825 = 72 + 18 × 3,137 = 72 + 56,5 = 128,5 mm.\nConclusion : une pluie journalière de 95,5 mm a une probabilité de 10 % de se produire chaque année ; une pluie de 128,5 mm a une probabilité de 1 %. Ces valeurs servent à dimensionner les ouvrages de protection contre les inondations.'
      },
      {
        n: '3',
        enonce: 'Les coefficients de Montana pour Bordeaux-Mérignac, T = 10 ans, sont a = 8,1 et b = 0,50. Calculez l\'intensité de pluie pour une durée de 30 min, puis pour 2 heures (120 min). Calculez la hauteur de pluie correspondante dans les deux cas.',
        solution: 'Pour t = 30 min : i = 8,1 × 30^(-0,50) = 8,1 / √30 = 8,1 / 5,477 = 1,479 mm/min = 88,7 mm/h. H = i × t = 1,479 × 30 = 44,4 mm.\nPour t = 120 min : i = 8,1 × 120^(-0,50) = 8,1 / √120 = 8,1 / 10,95 = 0,740 mm/min = 44,4 mm/h. H = 0,740 × 120 = 88,7 mm.\nObservation : la hauteur de pluie augmente avec la durée mais l\'intensité diminue. Le produit i × t passe de 44,4 mm pour 30 min à 88,7 mm pour 2 h, ce qui reflète le fait que les pluies longues accumulent plus d\'eau même à faible intensité.'
      },
      {
        n: '4',
        enonce: 'Un réseau d\'assainissement doit être dimensionné pour T = 10 ans. Le temps de concentration du bassin est Tc = 45 min. Les coefficients de Montana pour la zone (T10) sont a = 7,4 et b = 0,48. Calculez la pluie de projet P_T utilisée dans la méthode rationnelle.',
        solution: 'La durée critique de la pluie de projet est égale au temps de concentration : t = Tc = 45 min.\nIntensité : i = a × t^(-b) = 7,4 × 45^(-0,48) = 7,4 / (45^0,48).\n45^0,48 : ln(45) = 3,807 ; 3,807 × 0,48 = 1,828 ; e^1,828 = 6,22.\ni = 7,4 / 6,22 = 1,190 mm/min = 71,4 mm/h.\nP_T = i × Tc = 1,190 × 45 = 53,5 mm.\nCette hauteur de 53,5 mm en 45 min (T10) est utilisée dans la méthode rationnelle : Q_pointe = C × i × S.'
      },
      {
        n: '5',
        enonce: 'Vous disposez de la pluie journalière enregistrée sur un bassin de 150 km² par 3 postes : P_A = 38 mm (A_A = 60 km²), P_B = 74 mm (A_B = 55 km²), P_C = 52 mm (A_C = 35 km²). Calculez la pluie moyenne Thiessen puis estimez le volume d\'eau tombé sur le bassin (en m³ et en millions de m³).',
        solution: 'P_moy = (60×38 + 55×74 + 35×52) / 150 = (2 280 + 4 070 + 1 820) / 150 = 8 170 / 150 = 54,5 mm.\nVolume = P_moy × S = 0,0545 × 150 × 10^6 = 8 170 000 m³ = 8,17 Mm³.\nNote : seule une fraction de ce volume ruissellera à l\'exutoire ; l\'autre partie s\'infiltre, s\'évapore ou recharge le stock du sol. Avec un coefficient de ruissellement C = 0,35 typique de ce type de bassin semi-urbain, le volume ruisselé serait de 0,35 × 8,17 = 2,86 Mm³, soit Q_moyen sur 4 h de pluie = 2 860 000 / 14 400 = 199 m³/s.'
      },
      {
        n: '6',
        enonce: 'Expliquez pourquoi la loi de Gumbel est préférée à la loi normale pour l\'ajustement des pluies maximales annuelles. Donnez un exemple numérique illustrant la différence pour T = 1000 ans.',
        solution: 'La loi normale est symétrique : elle attribue la même probabilité aux fortes pluies et aux faibles pluies, et son extrapolation à T = 1000 ans (percentile 99,9 %) donne P_1000 = P_moy + 3,09 × σ. Pour P_moy = 72 mm et σ = 18 mm : P_1000_normale = 72 + 3,09 × 18 = 72 + 55,6 = 127,6 mm.\nLa loi de Gumbel est asymétrique à droite (queue lourde côté valeurs fortes), reflétant la réalité des précipitations extrêmes qui peuvent être très éloignées de la moyenne. Pour T = 1000 ans, u_1000 = -ln(-ln(0,999)) = -ln(0,001001) ≈ 6,91. P_1000_Gumbel = 72 + 18 × (6,91 - 0,5772) / 1,2825 = 72 + 18 × 4,94 = 72 + 88,9 = 160,9 mm.\nLa différence est notable (161 vs 128 mm) : la loi de Gumbel prédit des événements plus extrêmes que la loi normale pour les très longues périodes de retour, ce qui est plus réaliste pour des crues et précipitations exceptionnelles.'
      },
      {
        n: '7',
        enonce: 'Retrouvez la variable réduite de Gumbel u_T pour T = 2, T = 5, T = 20 ans, et calculez les pluies correspondantes pour une station avec P_moy = 55 mm et σ = 14 mm.',
        solution: 'u_T = -ln(-ln(1 - 1/T)) :\nT = 2 : 1 - 1/2 = 0,5 → -ln(-ln(0,5)) = -ln(0,6931) = -(-0,366) = 0,366.\nT = 5 : 1 - 1/5 = 0,8 → -ln(-ln(0,8)) = -ln(0,2231) = -(-1,500) = 1,500.\nT = 20 : 1 - 1/20 = 0,95 → -ln(-ln(0,95)) = -ln(0,0513) = -(-2,970) = 2,970.\nPluies : P_T = P_moy + σ × (u_T - 0,5772) / 1,2825\nT2 : P = 55 + 14 × (0,366 - 0,5772) / 1,2825 = 55 + 14 × (-0,165) = 55 - 2,3 = 52,7 mm.\nT5 : P = 55 + 14 × (1,500 - 0,5772) / 1,2825 = 55 + 14 × 0,720 = 55 + 10,1 = 65,1 mm.\nT20 : P = 55 + 14 × (2,970 - 0,5772) / 1,2825 = 55 + 14 × 1,867 = 55 + 26,1 = 81,1 mm.'
      },
      {
        n: '8',
        enonce: 'Un radar météorologique (réseau Aramis de Météo-France) mesure une intensité maximale de 45 mm/h sur une surface de 12 km² pendant 20 minutes lors d\'un orage sur la banlieue lyonnaise. Les pluviomètres au sol donnent 18 mm en 20 minutes. Expliquez l\'écart et comment calibrer le radar.',
        solution: 'L\'écart entre radar (45 mm/h × 20/60 = 15 mm) et pluviomètre (18 mm) peut sembler faible ici. En réalité, les radars mesurent la réflectivité Z (dBZ) du signal réfléchi par les gouttes de pluie et l\'estiment en intensité via la relation Z-R empirique (Marshall-Palmer : Z = 200 × R^1,6). Cette relation est approximative et dépend de la nature des précipitations (pluie stratiforme vs convective).\nCalibration : les pluviomètres au sol fournissent la référence "vérité terrain" pour ajuster les estimations radar. La méthode de calibration merge-pluviomètre divise l\'estimation radar par un facteur correctif local calculé à partir du ratio Pluviomètre/Radar aux positions connues. En zone méditerranéenne (orages convectifs intenses), ce facteur peut varier de 0,5 à 2 selon les événements. La base de données Pluie Extrêmes de Météo-France intègre cette calibration pour fournir des lames d\'eau de référence calibrées sur le réseau sol.'
      }
    ]
  },

  'GEMEAU-038': {
    id: 'GEMEAU-038',
    titre: 'Infiltration, ruissellement et transferts vers les cours d\'eau',
    fiche: {
      intro: 'Lors du dimensionnement d\'un bassin de rétention ou d\'une étude d\'impact hydraulique d\'un lotissement, vous devez quantifier la fraction des précipitations qui ruisselle et celle qui s\'infiltre. La compréhension des mécanismes d\'infiltration, les méthodes de calcul du ruissellement (méthode SCS-CN) et la construction de l\'hydrogramme de crue sont au cœur du travail du technicien hydraulicien.',
      schema: `<svg viewBox="0 0 260 118" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="mb38" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#334155"/></marker></defs>
  <rect width="260" height="118" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Ruissellement vs infiltration</text>
  <rect x="10" y="22" width="240" height="10" rx="2" fill="#94a3b8" opacity="0.4"/>
  <text x="130" y="30" text-anchor="middle" font-size="7.5" fill="#64748b" font-family="sans-serif">Surface du sol</text>
  <rect x="10" y="32" width="240" height="30" rx="0" fill="#d4a574" opacity="0.6"/>
  <text x="130" y="52" text-anchor="middle" font-size="8" fill="#78350f" font-family="sans-serif">Zone non saturée (ZNS)</text>
  <rect x="10" y="62" width="240" height="22" rx="0" fill="#bfdbfe" opacity="0.6"/>
  <text x="130" y="76" text-anchor="middle" font-size="8" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Zone saturée / nappe</text>
  <line x1="30" y1="22" x2="10" y2="62" stroke="#2563eb" stroke-width="2" marker-end="url(#mb38)"/>
  <text x="8" y="45" font-size="7.5" fill="#2563eb" font-family="sans-serif" transform="rotate(-45,20,42)">Infilt.</text>
  <line x1="60" y1="22" x2="10" y2="32" stroke="#059669" stroke-width="2" marker-end="url(#mb38)"/>
  <text x="20" y="24" font-size="7.5" fill="#059669" font-family="sans-serif">Ruis.</text>
  <text x="130" y="96" text-anchor="middle" font-size="8.5" fill="#334155" font-family="sans-serif" font-weight="bold">Ke = P − ETR − ΔS (mm)</text>
  <text x="130" y="110" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">Cn (CN SCS) : sol imperméable &gt; 90 / forêt ≈ 55</text>
</svg>`,
      sections: [
        {
          titre: '1. Mécanismes d\'infiltration et modèles',
          texte: 'L\'infiltration est le processus par lequel l\'eau de pluie pénètre dans le sol à travers sa surface. Sa vitesse dépend de la texture du sol (granulométrie, porosité), de son état hydrique initial (humidité antécédente), de sa structure (fissures, galeries de vers de terre) et de sa végétation (rhizosphère).\n\nLa capacité d\'infiltration f(t) (mm/h) est maximale en début d\'événement (sol sec, pores vides) et décroît exponentiellement pour converger vers une valeur minimale finale fc (infiltration résiduelle). Horton modélise cette décroissance par : f(t) = fc + (f0 - fc) × e^(-kt), où f0 est la capacité initiale, fc la capacité finale et k un coefficient de décroissance (h^-1) propre au sol. Pour un sol limoneux sec, f0 ≈ 25 mm/h et fc ≈ 8 mm/h ; pour un sol argileux compact, f0 ≈ 6 mm/h et fc ≈ 2 mm/h.\n\nDeux types de ruissellement s\'opposent selon le mécanisme générateur : le ruissellement Hortonien (ou par excès d\'intensité) apparaît quand l\'intensité de la pluie i dépasse la capacité d\'infiltration f(t) — même sur un sol initialement sec, si l\'averse est très intense. Le ruissellement par saturation se produit quand le sol est saturé (zones de convergence des versants, zones ripariennes) : toute nouvelle pluie ruisselle immédiatement, quelle que soit son intensité. Ce second mécanisme est dominant dans les bassins tempérés humides de France (sauf événements méditerranéens).',
          sous_sections: []
        },
        {
          titre: '2. Coefficient de ruissellement et méthode SCS-CN',
          texte: 'Le coefficient de ruissellement global C = R / P est le rapport entre la lame ruisselée et la lame précipitée sur un bassin pour un événement donné. C dépend de l\'occupation du sol (urbanisation, forêt, agriculture), du type de sol (perméabilité) et de l\'état hydrique antécédent. Il varie de 0,05 (forêt sur sol perméable) à 0,95 (zone imperméabilisée urbaine).\n\nLa méthode SCS-CN (Soil Conservation Service – Curve Number), développée par l\'USDA américain et largement utilisée en Europe, exprime la lame ruisselée Q_r en fonction de la précipitation efficace P_e = P - 0,2×S, par la relation : Q_r = (P - 0,2S)² / (P + 0,8S) pour P > 0,2S, et Q_r = 0 sinon. Le paramètre S (capacité de rétention maximale du sol) est relié au numéro de courbe CN par : S = (25 400 / CN) - 254 (en mm). CN varie de 30 (sol perméable, forêt, conditions antécédentes sèches) à 98 (surface imperméable). Des tables CN normalisées existent pour les classes d\'occupation du sol (COS) croisées avec les groupes hydrologiques de sol (A = très perméable, B, C, D = argiles imperméables). Cette méthode est directement intégrée dans les logiciels HEC-HMS et SWMM.',
          sous_sections: []
        },
        {
          titre: '3. Formation de l\'hydrogramme et temps de concentration',
          texte: 'L\'hydrogramme de crue est la variation temporelle du débit à l\'exutoire d\'un bassin versant en réponse à une averse. Sa forme dépend des caractéristiques de la pluie (durée, intensité, répartition spatiale) et du bassin (superficie, forme, perméabilité, couverture végétale, temps de concentration).\n\nLe temps de concentration Tc est la durée nécessaire à l\'eau tombée au point le plus éloigné du bassin pour atteindre l\'exutoire. C\'est un paramètre fondamental : pour une averse de durée égale à Tc, tous les points du bassin contribuent simultanément au débit de pointe, qui est alors maximum. La formule de Kirpich donne : Tc = 0,0195 × L^0,77 / I^0,385 (Tc en min, L longueur du cours principal en m, I pente en m/m).\n\nL\'hydrogramme unitaire (HU) est le débit obtenu par unité de pluie nette uniformément répartie sur le bassin pendant une durée Δt. Il constitue la réponse impulsionnelle linéaire du bassin. La convolution de la pluie nette (après déduction des pertes par infiltration) par l\'HU donne l\'hydrogramme de crue prévu. Cette méthode est implémentée dans HEC-HMS et les logiciels de prévision de crues. Les méthodes de l\'hydrogramme unitaire synthétique (Snyder, SCS, Triangulaire) permettent d\'estimer les paramètres de l\'HU sur des bassins non jaugés à partir des seuls paramètres morphométriques.',
          sous_sections: []
        },
        {
          titre: '4. Méthode rationnelle et application aux ouvrages',
          texte: 'La méthode rationnelle est la plus simple et la plus utilisée pour les petits bassins versants (S < 1 km² à 5 km² selon les guides) et le dimensionnement des réseaux d\'assainissement. Elle calcule le débit de pointe Q (m³/s) par : Q = C × i × S / 360, où C est le coefficient de ruissellement (sans dimension), i l\'intensité de pluie de durée Tc et de fréquence T (mm/h), et S la superficie du bassin (ha) (attention : ha et non km²). La durée critique de la pluie est t = Tc ; on utilise les coefficients de Montana pour calculer i = a × Tc^(-b).\n\nExemple d\'application sur un lotissement de 5 ha à Toulouse : Tc = 12 min, C = 0,60 (zone semi-imperméabilisée), coefficients Montana T10 : a = 9,5, b = 0,52. Intensité : i = 9,5 × 12^(-0,52) = 9,5 / (12^0,52) ; 12^0,52 = e^(0,52×ln12) = e^(0,52×2,485) = e^1,292 = 3,640. i = 9,5 / 3,640 = 2,610 mm/min = 156,6 mm/h. Q_pointe = 0,60 × 156,6 × 5 / 360 = 469,8 / 360 = 1,30 m³/s. Ce débit de 1,30 m³/s pour 10 ans dimensionne le collecteur principal et le bassin de rétention si requis par le règlement pluvial.',
          sous_sections: []
        }
      ],
      points: [
        'L\'infiltration est maximale sur sol sec (f0) et converge vers une capacité minimale fc quand le sol se sature.',
        'Ruissellement Hortonien : i > f(t) même sur sol sec (fortes intensités méditerranéennes).',
        'Ruissellement par saturation : sol saturé, toute pluie ruisselle (dominant dans les bassins humides tempérés).',
        'Coefficient de ruissellement C = R/P : de 0,05 (forêt perméable) à 0,95 (surface imperméable).',
        'Méthode SCS-CN : Q_r = (P - 0,2S)² / (P + 0,8S) ; CN = 30 (perméable/sec) à 98 (imperméable).',
        'S (mm) = 25 400/CN - 254 ; paramètre de rétention du sol lié au numéro de courbe CN.',
        'Temps de concentration Tc : durée de transfert du point le plus éloigné à l\'exutoire.',
        'Méthode rationnelle : Q = C × i × S / 360 → [m³/s] ; valide sur petits BV (< 1 à 5 km²).',
        'Hydrogramme unitaire : réponse impulsionnelle du bassin ; convolution avec la pluie nette = hydrogramme de crue.',
        'HEC-HMS et SWMM implémentent SCS-CN, méthode rationnelle et HU synthétique.'
      ],
      formules: [
        'Capacité d\'infiltration Horton : f(t) = fc + (f0 - fc) × e^(-kt) → [mm/h] ; f0 = capacité initiale, fc = capacité finale, k = coefficient de décroissance (h⁻¹)',
        'Lame ruisselée SCS-CN : Q_r = (P - 0,2S)² / (P + 0,8S) → [mm] ; valide si P > 0,2S',
        'Paramètre de rétention SCS : S = 25 400/CN - 254 → [mm] ; CN = numéro de courbe (30 à 98)',
        'Méthode rationnelle : Q = C × i × S / 360 → [m³/s] ; C = coefficient ruissellement, i = intensité (mm/h), S = surface (ha)',
        'Temps de concentration Kirpich : Tc = 0,0195 × L^0,77 / I^0,385 → [min] ; L = longueur cours principal (m), I = pente (m/m)'
      ],
      retenir: 'Infiltration Horton · Ruissellement Hortonien vs saturation · Coefficient C · Méthode SCS-CN · Numéro de courbe CN · Temps de concentration Tc · Méthode rationnelle · Hydrogramme unitaire'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un sol limoneux présente une capacité d\'infiltration initiale f0 = 28 mm/h, une capacité finale fc = 6 mm/h et un coefficient k = 2 h^-1. Une pluie d\'intensité constante i = 35 mm/h commence sur sol sec. Calculez f(t) à t = 0, 0,25 h, 0,5 h, 1 h. À partir de quel moment le ruissellement Hortonien commence-t-il ?',
        solution: 'f(t) = 6 + (28-6) × e^(-2t) = 6 + 22 × e^(-2t).\nt = 0 : f = 6 + 22 = 28 mm/h < i = 35 mm/h ? Non : f = 28 < 35 → ruissellement dès t = 0.\nAttention : la pluie (35 mm/h) est déjà supérieure à f0 = 28 mm/h ! Le ruissellement Hortonien commence immédiatement.\nt = 0,25 h : f = 6 + 22×e^(-0,5) = 6 + 22×0,607 = 6 + 13,3 = 19,3 mm/h. Ruissellement = 35 - 19,3 = 15,7 mm/h.\nt = 0,5 h : f = 6 + 22×e^(-1,0) = 6 + 22×0,368 = 6 + 8,1 = 14,1 mm/h. Ruissellement = 35 - 14,1 = 20,9 mm/h.\nt = 1 h : f = 6 + 22×e^(-2,0) = 6 + 22×0,135 = 6 + 3,0 = 9,0 mm/h. Ruissellement = 35 - 9,0 = 26,0 mm/h.'
      },
      {
        n: '2',
        enonce: 'Calculez la lame ruisselée pour une pluie P = 55 mm sur un bassin de culture céréalière en sol B (perméabilité modérée), conditions antécédentes normales. Le CN pour cultures en rangs sur sol B = 75. Calculez aussi la lame ruisselée si la pluie est P = 25 mm.',
        solution: 'CN = 75. S = 25 400/75 - 254 = 338,7 - 254 = 84,7 mm.\n0,2S = 0,2 × 84,7 = 16,9 mm.\nPour P = 55 mm > 0,2S = 16,9 mm :\nQ_r = (55 - 16,9)² / (55 + 0,8×84,7) = (38,1)² / (55 + 67,8) = 1 451,6 / 122,8 = 11,8 mm.\nCoefficient de ruissellement = 11,8/55 = 0,215 soit 21,5 %.\nPour P = 25 mm > 16,9 mm :\nQ_r = (25 - 16,9)² / (25 + 67,8) = (8,1)² / 92,8 = 65,6 / 92,8 = 0,71 mm.\nCommentaire : la faible lame ruisselée montre qu\'une pluie de 25 mm sur champ en sol B produit très peu de ruissellement (0,71 mm = 2,8 %) ; l\'essentiel s\'infiltre et recharge le sol.'
      },
      {
        n: '3',
        enonce: 'Un bassin versant de 12 ha comporte 40 % de toiture/parking (CN = 98), 35 % de pelouse sur sol C (CN = 74) et 25 % de forêt sur sol B (CN = 55). Calculez le CN composite et la lame ruisselée pour P = 40 mm.',
        solution: 'CN_composite = 0,40×98 + 0,35×74 + 0,25×55 = 39,2 + 25,9 + 13,75 = 78,85 ≈ 79.\nS = 25 400/79 - 254 = 321,5 - 254 = 67,5 mm.\n0,2S = 13,5 mm. P = 40 mm > 13,5 mm.\nQ_r = (40-13,5)² / (40 + 0,8×67,5) = (26,5)² / (40+54) = 702,25 / 94 = 7,47 mm.\nVolume ruisselé = 7,47×10^-3 × 12×10^4 = 896 m³. Soit un débit de pointe (Tc ≈ 15 min, Q = C×i×S/360) estimatif de l\'ordre de 0,5-1,0 m³/s pour T = 10 ans.'
      },
      {
        n: '4',
        enonce: 'Un bassin péri-urbain de S = 45 ha a un Tc = 20 min et un coefficient de ruissellement C = 0,55. Les coefficients de Montana T10 sont a = 10,2 et b = 0,55. Calculez le débit de pointe Q_T10 par la méthode rationnelle pour dimensionner le réseau EP.',
        solution: 'Intensité pour t = Tc = 20 min :\ni = a × t^(-b) = 10,2 × 20^(-0,55).\n20^0,55 : ln(20) = 2,996 ; 2,996×0,55 = 1,648 ; e^1,648 = 5,197.\ni = 10,2 / 5,197 = 1,962 mm/min = 117,7 mm/h.\nQ_T10 = C × i × S / 360 = 0,55 × 117,7 × 45 / 360 = 2 907,7 / 360 = 8,08 m³/s.\nCe débit de pointe de 8,08 m³/s pour T = 10 ans dimensionne le collecteur principal EP. Le bassin de rétention, si requis, devra tamponner la différence entre ce débit et le débit admissible à l\'exutoire (typiquement 3 L/s/ha en zone urbaine, soit 0,003×45 = 0,135 m³/s).'
      },
      {
        n: '5',
        enonce: 'Décrivez les 4 groupes hydrologiques de sol A, B, C, D selon le USDA SCS et donnez un exemple de sol français pour chacun. Indiquez les CN typiques pour une prairie en bon état sur chaque groupe.',
        solution: 'Groupe A : sols à forte perméabilité, drainage excellent, faible potentiel de ruissellement. Exemple France : sables, graviers (alluvions récentes, arènes granitiques). CN prairie = 30-39.\nGroupe B : sols à perméabilité modérée, drainage satisfaisant. Exemple France : limons argileux, loess, quelques argiles sableuses. CN prairie = 58-61.\nGroupe C : sols à perméabilité faible, drainage médiocre. Exemple France : argiles limoneuses, marnes peu profondes. CN prairie = 71-74.\nGroupe D : sols imperméables, drainage très mauvais (argileux compacts, croûte impénétrable). Exemple France : argiles noires, vertisols, gleysols. CN prairie = 78-80.\nEn France, le classement utilise les données de la Base de Données des Sols (Gis Sol) couplées aux tables USDA, parfois adaptées à la pédologie française (référentiel pédologique AFES).'
      },
      {
        n: '6',
        enonce: 'La formule de Kirpich donne le temps de concentration Tc (min) = 0,0195 × L^0,77 / I^0,385, où L est en mètres et I en m/m. Pour un bassin de montagne : L = 4 200 m, I = 0,065 m/m. Pour un bassin de plaine : L = 18 000 m, I = 0,0015 m/m. Calculez Tc pour chacun.',
        solution: 'Bassin montagne : Tc = 0,0195 × (4 200)^0,77 / (0,065)^0,385.\n(4 200)^0,77 : ln(4200) = 8,343 ; 8,343×0,77 = 6,424 ; e^6,424 = 614.\n(0,065)^0,385 : ln(0,065) = -2,733 ; -2,733×0,385 = -1,052 ; e^-1,052 = 0,349.\nTc_montagne = 0,0195 × 614 / 0,349 = 11,973 / 0,349 = 34 min.\nBassin plaine : Tc = 0,0195 × (18 000)^0,77 / (0,0015)^0,385.\n(18 000)^0,77 : ln(18000) = 9,798 ; 9,798×0,77 = 7,545 ; e^7,545 = 1 893.\n(0,0015)^0,385 : ln(0,0015) = -6,502 ; -6,502×0,385 = -2,503 ; e^-2,503 = 0,0819.\nTc_plaine = 0,0195 × 1 893 / 0,0819 = 36,9 / 0,0819 = 450 min ≈ 7,5 h.\nLe bassin de montagne a un Tc 13 fois plus court que le bassin de plaine, ce qui explique ses crues rapides et violentes.'
      },
      {
        n: '7',
        enonce: 'Vous calculez le débit de pointe de la pluie centennale (T = 100 ans) sur un bassin de 2,5 ha de centre commercial (CN = 95, Tc = 8 min). Les coefficients de Montana T100 pour la région sont a = 15,5 et b = 0,52. Calculez Q_100 par la méthode rationnelle (avec C = 0,90 pour cette surface imperméable).',
        solution: 'i_T100 = a × Tc^(-b) = 15,5 × 8^(-0,52).\n8^0,52 : ln(8) = 2,079 ; 2,079×0,52 = 1,081 ; e^1,081 = 2,948.\ni = 15,5 / 2,948 = 5,258 mm/min = 315,5 mm/h.\nQ_100 = C × i × S / 360 = 0,90 × 315,5 × 25 / 360 (S = 2,5 ha = 25 ha attention : S en ha).\nNon : S = 2,5 ha.\nQ_100 = 0,90 × 315,5 × 2,5 / 360 = 709,9 / 360 = 1,97 m³/s.\nPour cette surface imperméable (parking, toiture), la quasi-totalité de la pluie centennale ruisselle immédiatement, générant près de 2 m³/s en seulement 8 minutes. Le collecteur EP et le séparateur à hydrocarbures doivent être dimensionnés en conséquence.'
      },
      {
        n: '8',
        enonce: 'Un technicien compare les résultats de la méthode rationnelle et de la méthode SCS-CN pour un même événement (P = 48 mm en 30 min) sur un bassin de 8 ha avec C = 0,55 et CN = 72 (conditions antécédentes normales). Calculez Q_pointe par méthode rationnelle (Tc = 30 min, i = 48/30×60 = 96 mm/h) et la lame ruisselée SCS-CN. Commentez.',
        solution: 'Méthode rationnelle : Q = C × i × S / 360 = 0,55 × 96 × 8 / 360 = 422,4 / 360 = 1,17 m³/s.\nSCS-CN : S = 25 400/72 - 254 = 352,8 - 254 = 98,8 mm. 0,2S = 19,8 mm.\nQ_r = (48 - 19,8)² / (48 + 0,8×98,8) = (28,2)² / (48 + 79,0) = 795,2 / 127,0 = 6,26 mm.\nVolume SCS = 6,26 × 10^-3 × 8 × 10^4 = 501 m³.\nDurée pluie = 30 min = 1800 s. Q_moyen SCS ≈ 501/1800 = 0,278 m³/s (débit moyen très inférieur au débit de pointe).\nCommentaire : les deux méthodes sont complémentaires. La méthode rationnelle donne le débit de pointe instantané (pic de l\'hydrogramme) mais ne donne pas la lame ruisselée totale. SCS-CN donne la lame ruisselée totale et le volume mais pas directement le débit de pointe sans modélisation de l\'hydrogramme. Pour l\'ingénierie, on combine souvent les deux : volume via SCS, débit de pointe via méthode rationnelle ou HU.'
      }
    ]
  },

  'GEMEAU-039': {
    id: 'GEMEAU-039',
    titre: 'Hydrométrie et mesure des débits',
    fiche: {
      intro: 'Gestionnaire d\'une station hydrométrique sur un cours d\'eau moyen, vous êtes chargé de maintenir la qualité des données de débit transmises en temps réel à la Banque Hydro nationale et aux services de prévision des crues. La maîtrise des instruments de mesure de niveau, des techniques de jaugeage et de la courbe de tarage est le quotidien du technicien hydrométrique.',
      schema: `<svg viewBox="0 0 260 118" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="mb39" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#334155"/></marker></defs>
  <rect width="260" height="118" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Courbe de tarage — débit Q = f(H)</text>
  <line x1="28" y1="100" x2="248" y2="100" stroke="#334155" stroke-width="1.5" marker-end="url(#mb39)"/>
  <line x1="28" y1="100" x2="28" y2="22" stroke="#334155" stroke-width="1.5" marker-end="url(#mb39)"/>
  <text x="244" y="112" font-size="8" fill="#334155" font-family="sans-serif">Q →</text>
  <text x="8" y="32" font-size="7.5" fill="#334155" font-family="sans-serif" transform="rotate(-90,14,70)">H ↑</text>
  <path d="M38,96 C55,80 75,55 100,38 C120,25 145,22 180,24 C210,26 235,34 244,44" stroke="#2563eb" stroke-width="2.5" fill="none"/>
  <circle cx="80" cy="68" r="4" fill="#dc2626"/>
  <circle cx="130" cy="40" r="4" fill="#dc2626"/>
  <circle cx="170" cy="27" r="4" fill="#dc2626"/>
  <text x="84" y="66" font-size="7.5" fill="#dc2626" font-family="sans-serif">mesures</text>
  <text x="130" y="80" text-anchor="middle" font-size="8.5" fill="#334155" font-family="sans-serif" font-weight="bold">Q = a·H^b (loi puissance)</text>
  <text x="130" y="94" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">H : hauteur limnimètre · Q : m³/s</text>
  <text x="130" y="110" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">Étalonnage : jaugeages terrain (moulinet, ADCP)</text>
</svg>`,
      sections: [
        {
          titre: '1. Réseaux hydrométriques et infrastructure de mesure',
          texte: 'Le réseau hydrométrique national français comprend environ 4 000 stations de mesure de débit, gérées par les DREAL (Directions Régionales de l\'Environnement, de l\'Aménagement et du Logement), les agences de l\'eau, VNF (Voies Navigables de France) et EDF. Toutes les données sont centralisées dans la Banque Hydro (hydro.eaufrance.fr), accessible librement pour les chroniques de débits, cotes et débits reconstitués depuis les années 1950-1960 pour les plus anciennes stations.\n\nUne station hydrométrique est composée d\'un limnigraphe (capteur de niveau), d\'un abri pour l\'électronique, d\'un moyen de transmission (GSM/4G, radio) et d\'une station d\'acquisition. La section de jaugeage est choisie pour être stable (fond rocheux ou artificiel), sans obstacles, avec un écoulement unidirectionnel régulier. On y construit parfois un seuil calibré ou un déversoir triangulaire (seuil en V) pour améliorer la sensibilité de mesure aux faibles débits.\n\nL\'échelle limnimétrique, planche graduée fixée au bord du cours d\'eau, est la référence de terrain permettant de vérifier et calibrer les capteurs automatiques lors de chaque visite. Elle est rattachée au nivellement général de la France (IGN69) par géodésie. Toute mesure de niveau est convertie en débit via la courbe de tarage établie par les jaugeages successifs.',
          sous_sections: []
        },
        {
          titre: '2. Mesure du niveau d\'eau : capteurs et méthodes',
          texte: 'Le limnimètre à pression (ou capteur piézométrique) est le capteur le plus répandu dans les stations modernes. Il mesure la pression hydrostatique de la colonne d\'eau au-dessus du capteur et en déduit le niveau. La précision est de ±1 mm, avec une dérive thermique corrigée par un capteur de température embarqué. Les capteurs sont compensés en pression atmosphérique (par une membrane ou un câble capillaire) pour ne mesurer que la pression relative de l\'eau.\n\nLe limnimètre à flotteur (limnigraphe classique) mesure le niveau par un flotteur relié mécaniquement à un enregistreur ou à un potentiomètre. Il est robuste et fiable mais sujet aux problèmes de gel et aux macrodéchets obstruant le puits de mesure.\n\nLe radar ou ultrasons (capteurs à distance) mesure par temps de vol la distance entre le capteur et la surface de l\'eau. Aucun contact avec l\'eau n\'est nécessaire, ce qui est un avantage pour les sites à forte charge en matières en suspension (crues boueuses) ou à risque de gel. La précision est de ±5 mm en conditions normales. Ces capteurs sont particulièrement adaptés aux ponts et aux ouvrages de génie civil.',
          sous_sections: []
        },
        {
          titre: '3. Jaugeage : méthodes de mesure du débit',
          texte: 'Le jaugeage est la mesure ponctuelle du débit à un instant donné, servant à construire et contrôler la courbe de tarage. Plusieurs méthodes existent selon le contexte.\n\nLe jaugeage au moulinet (ou électromagnétique) mesure la vitesse de l\'eau en plusieurs points de la section mouillée. La section est divisée en verticales ; sur chaque verticale, la vitesse est mesurée à plusieurs profondeurs (méthode 2/10ème - 8/10ème, ou méthode des 6/10ème). Le débit est calculé par la somme des produits largeur × hauteur × vitesse moyenne sur chaque tranche verticale (méthode de Jaubert).\n\nL\'ADCP (Acoustic Doppler Current Profiler) est aujourd\'hui la méthode de référence pour les cours d\'eau navigables et les grandes rivières. Un bateau ou une embarcation légère tracte l\'ADCP sur la largeur de la rivière ; l\'appareil mesure simultanément les profils de vitesse sur toute la section en utilisant l\'effet Doppler du signal acoustique réfléchi par les particules en suspension. Un jaugeage ADCP dure 10 à 30 minutes et donne une incertitude de ±3-5 %.\n\nLe jaugeage par dilution (traçage) injecte un traceur (sel, fluorescéine) de concentration connue C0 et volume V0 dans le cours d\'eau. En aval, on mesure la concentration C(t) jusqu\'à retour au bruit de fond. Le débit est Q = C0 × V0 / Σ[C(t) × Δt] (méthode de l\'intégration). Cette méthode est la seule applicable dans les torrents à forte turbulence ou fond très hétérogène où les méthodes électromagnétiques ne fonctionnent pas.',
          sous_sections: []
        },
        {
          titre: '4. La courbe de tarage et son exploitation',
          texte: 'La courbe de tarage est la relation mathématique H = f(Q) ou Q = g(H) qui permet de convertir la mesure continue de niveau (H) en débit (Q). Elle est construite par régression sur les jaugeages effectués sur la gamme des niveaux observés. La forme la plus courante est une loi puissance : Q = a × (H - H0)^b, où H0 est le niveau correspondant à débit nul (fond effectif ou seuil), et a, b sont des coefficients ajustés par les moindres carrés sur les mesures en échelle log-log.\n\nLa courbe de tarage n\'est valide que si la section de mesure est stable. Lors des crues, la morphologie du lit peut changer (érosion du fond, dépôt de matériaux) et la courbe doit être vérifiée par un jaugeage post-crue. Dans les sections à faible pente, l\'effet de remous aval modifie la relation H-Q selon que le débit est en montée ou en descente de crue (hystérésis), nécessitant des courbes de tarage de montée et de descente distinctes.\n\nLes incertitudes sur les débits calculés par la courbe de tarage sont typiquement de ±5 % pour les débits courants (gamme bien jaugée) et de ±20 % pour les crues exceptionnelles (extrapolation au-delà des jaugeages réalisés). Ces incertitudes sont importantes pour évaluer la fiabilité des séries hydrologiques utilisées dans les études statistiques.',
          sous_sections: []
        }
      ],
      points: [
        'Banque Hydro : 4 000 stations hydrométriques en France, données publiques sur hydro.eaufrance.fr.',
        'Capteur piézométrique : mesure de pression hydrostatique → niveau d\'eau, précision ±1 mm.',
        'Capteur radar/ultrasons : mesure sans contact par temps de vol, précision ±5 mm.',
        'Jaugeage au moulinet : mesure vitesse en verticales → débit par méthode de Jaubert.',
        'ADCP : mesure de profils de vitesse par effet Doppler → méthode de référence sur grandes rivières.',
        'Jaugeage par dilution : seule méthode applicable dans les torrents très turbulents.',
        'Courbe de tarage Q = a × (H - H0)^b : relation niveau-débit construite par régression sur les jaugeages.',
        'Incertitude ±5 % pour les débits courants, ±20 % pour les crues en extrapolation.',
        'Contrôle périodique de la courbe de tarage indispensable après chaque crue morphogène.',
        'Rattachement au NGF (NGF-IGN69) : tout niveau lié au nivellement général de la France.'
      ],
      formules: [
        'Courbe de tarage puissance : Q = a × (H - H0)^b → [m³/s] ; H = cote (m), H0 = cote zéro débit, a et b = coefficients ajustés',
        'Débit jaugeage dilution : Q = C0 × V0 / ∫C(t)dt → [m³/s] ; C0 = concentration injectée, V0 = volume injecté (m³)',
        'Débit jaugeage moulinet (tranche) : ΔQ_i = l_i × h_i × V_moy_i → [m³/s] ; Q_total = Σ ΔQ_i',
        'Débit spécifique : q = Q / S → [L/s/km² ou m³/s/km²] ; S = superficie du BV (km²)'
      ],
      retenir: 'Banque Hydro · Limnimètre · Courbe de tarage · Jaugeage moulinet · ADCP · Jaugeage dilution · Incertitude de mesure · Hystérésis de crue'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une courbe de tarage a pour équation Q = 2,85 × (H - 0,12)^2,15 (en m³/s, H en m). Calculez Q pour H = 0,45 m, H = 1,20 m et H = 2,80 m (extrapolation). Calculez l\'incertitude attendue pour H = 2,80 m si le jaugeage maximal disponible est à H = 2,0 m.',
        solution: 'H = 0,45 m : Q = 2,85 × (0,45-0,12)^2,15 = 2,85 × (0,33)^2,15.\nln(0,33) = -1,109 ; -1,109×2,15 = -2,384 ; e^-2,384 = 0,0921.\nQ = 2,85 × 0,0921 = 0,262 m³/s.\nH = 1,20 m : Q = 2,85 × (1,08)^2,15.\nln(1,08) = 0,0770 ; 0,0770×2,15 = 0,1655 ; e^0,1655 = 1,180.\nQ = 2,85 × 1,180 = 3,36 m³/s.\nH = 2,80 m : Q = 2,85 × (2,68)^2,15.\nln(2,68) = 0,9858 ; 0,9858×2,15 = 2,119 ; e^2,119 = 8,32.\nQ = 2,85 × 8,32 = 23,7 m³/s.\nIncertitude pour H = 2,80 m (extrapolation au-delà de H = 2,0 m) : ±15 à 20 % attendu, soit Q = 23,7 ± 3,6-4,7 m³/s.'
      },
      {
        n: '2',
        enonce: 'Un jaugeage par dilution (méthode instantanée) injecte V0 = 0,5 L d\'une solution de chlorure de sodium de concentration C0 = 500 g/L. La mesure de conductivité en aval donne l\'intégrale ∫C(t)dt = 12,5 g·min/L. Convertissez cette intégrale en g·s/L, puis calculez Q en m³/s et en L/s.',
        solution: '∫C(t)dt = 12,5 g·min/L = 12,5 × 60 = 750 g·s/L.\nQ = C0 × V0 / ∫C(t)dt = 500 × 0,5×10^-3 / (750 × 10^-3) [attention aux unités].\nC0 en g/L, V0 en m³ = 0,5×10^-3 m³, ∫C(t)dt en g·s/L = 750 g·s/L = 750 g·s/10^-3 m³ = 750 000 g·s/m³.\nQ = C0 × V0 / ∫ = 500 × 0,5×10^-3 / (750×10^-3 × 10^3) — méthode simplifiée :\nQ = (C0_g/L × V0_L) / (∫C(t)dt_g·min/L × 60 s/min)\n= (500 × 0,5) / (12,5 × 60) = 250 / 750 = 0,333 L/s = 0,000333 m³/s.\nCe débit de 0,33 L/s correspond à un très petit cours d\'eau de tête de bassin (ruisseau montagnard), où la méthode par dilution est la seule praticable.'
      },
      {
        n: '3',
        enonce: 'Un jaugeage au moulinet mesure les vitesses suivantes sur 4 verticales d\'une section de 8 m de large, eau de 0,60 m de profondeur uniforme :\nVerticale 1 (largeur 2 m) : V = 0,35 m/s\nVerticale 2 (largeur 2,5 m) : V = 0,62 m/s\nVerticale 3 (largeur 2,5 m) : V = 0,55 m/s\nVerticale 4 (largeur 1 m) : V = 0,28 m/s\nCalculez le débit total.',
        solution: 'Débit par tranche = largeur × profondeur × vitesse (méthode de la section-vitesse) :\nΔQ1 = 2,0 × 0,60 × 0,35 = 0,420 m³/s.\nΔQ2 = 2,5 × 0,60 × 0,62 = 0,930 m³/s.\nΔQ3 = 2,5 × 0,60 × 0,55 = 0,825 m³/s.\nΔQ4 = 1,0 × 0,60 × 0,28 = 0,168 m³/s.\nQ_total = 0,420 + 0,930 + 0,825 + 0,168 = 2,343 m³/s.\nVérification : section mouillée S = 8 × 0,60 = 4,80 m². Vitesse moyenne = Q/S = 2,343/4,80 = 0,488 m/s. Valeur cohérente avec un cours d\'eau de plaine à courant modéré.'
      },
      {
        n: '4',
        enonce: 'Une station hydrométrique sur la Garonne à Agen (S_BV = 52 000 km²) enregistre les données suivantes lors d\'une montée de crue : H = 3,5 m → Q = 720 m³/s (phase montée) ; H = 3,5 m → Q = 580 m³/s (phase descente). Expliquez ce phénomène d\'hystérésis et ses implications pour la courbe de tarage.',
        solution: 'L\'hystérésis de crue (ou boucle de tarage) se produit car le débit observé à une même cote H dépend du fait que la crue monte ou descend. En phase de montée, le gradient hydraulique est plus fort (la ligne d\'eau est plus pentue) qu\'à la cote correspondante en descente, ce qui accélère l\'écoulement et donne un débit supérieur. En phase de descente, le gradient s\'est atténué, parfois accompagné d\'une nappe alluviale rechargée restituant de l\'eau au cours d\'eau, donnant un débit inférieur.\nImplications : l\'utilisation d\'une courbe de tarage unique sous-estime Q en montée (~720 m³/s) et surestime Q en descente (~580 m³/s). L\'erreur pour une crue à H = 3,5 m est (720-580)/650 × 100 = 21,5 %. Pour les grands cours d\'eau de plaine (Loire, Garonne, Rhône), on utilise donc des courbes de tarage à double branche ou la méthode de Jones (correction par la pente de la surface libre) pour corriger l\'hystérésis.'
      },
      {
        n: '5',
        enonce: 'La Banque Hydro donne pour la Durance à Embrun : module interannuel Q_m = 56,2 m³/s, bassin versant S = 2 170 km². Calculez le débit spécifique q en L/s/km² et comparez-le à celui du Rhône à Lyon (Q_m = 550 m³/s, S = 19 440 km²). Interprétez.',
        solution: 'Durance à Embrun : q = 56,2×1000 / 2 170 = 56 200 / 2 170 = 25,9 L/s/km².\nRhône à Lyon : q = 550×1000 / 19 440 = 550 000 / 19 440 = 28,3 L/s/km².\nInterprétation : les deux débits spécifiques sont proches (~26-28 L/s/km²), caractéristiques des bassins alpins à forte pluviométrie et régime nivo-glaciaire. Cette valeur élevée contraste avec les bassins méditerranéens de plaine comme l\'Hérault à Gignac (q ≈ 5-8 L/s/km²) ou la Charente à Angoulême (q ≈ 4-6 L/s/km²), où la forte demande évaporative réduit considérablement la ressource renouvelable par unité de superficie.'
      },
      {
        n: '6',
        enonce: 'Un technicien découvre lors d\'une visite post-crue que le lit d\'un ruisseau a érodé 15 cm de fond (abaissement général de la section). La cote zéro de la courbe de tarage en vigueur est H0 = 0,18 m. Calculez l\'erreur relative sur le débit Q si on continue à utiliser la courbe de tarage initiale pour H mesuré = 0,65 m. Loi Q = 3,2 × (H - H0)^1,9.',
        solution: 'Courbe initiale (H0 = 0,18 m) : Q_ancien = 3,2 × (0,65-0,18)^1,9 = 3,2 × (0,47)^1,9.\nln(0,47) = -0,755 ; -0,755×1,9 = -1,435 ; e^-1,435 = 0,238.\nQ_ancien = 3,2 × 0,238 = 0,762 m³/s.\nAprès érosion de 15 cm, le fond réel est 0,15 m plus bas. Donc H0_nouveau = 0,18 - 0,15 = 0,03 m.\nQ_réel = 3,2 × (0,65-0,03)^1,9 = 3,2 × (0,62)^1,9.\nln(0,62) = -0,478 ; -0,478×1,9 = -0,908 ; e^-0,908 = 0,403.\nQ_réel = 3,2 × 0,403 = 1,290 m³/s.\nErreur = (1,290 - 0,762) / 1,290 × 100 = 40,9 %.\nConclusion : une érosion de 15 cm crée une sous-estimation de 41 % du débit réel. La vérification du fond de la section après toute crue morphogène est indispensable.'
      },
      {
        n: '7',
        enonce: 'Vous devez réaliser un jaugeage ADCP sur le Rhône à Beaucaire (largeur ~200 m, profondeur 5-8 m). Décrivez le protocole opérationnel (nombre de passages, vitesse de traversée) et estimez l\'incertitude attendue. Pourquoi la méthode au moulinet serait-elle inadaptée ici ?',
        solution: 'Protocole ADCP :\n1. Calibrer l\'ADCP (test de navigation, vérification des paramètres fréquence 600 kHz ou 1 MHz selon profondeur).\n2. Effectuer 4 à 6 traversées aller-retour à vitesse constante de 1-2 m/s (ni trop rapide qui dégrade la mesure, ni trop lent qui allonge les trajets).\n3. Éviter les angles d\'attaque > 10-15° par rapport à la perpendiculaire.\n4. Moyenner les débits des 4-6 passages (éliminer les valeurs aberrantes).\nIncertitude : ±3-5 % pour 4 passages en conditions normales (courant uniforme, peu de turbulence). Peut monter à ±8-10 % en crue avec forts fonds flottants (macrodéchets perturbant le signal acoustique) ou en présence de bulles d\'air.\nLimite du moulinet : sur le Rhône large de 200 m et profond de 5-8 m, le jaugeage au moulinet nécessiterait une journée entière (>20 verticales × 3-5 profondeurs), un pont ou un câble traversant (impossible sans autorisation), et présente des risques de sécurité en crue. L\'ADCP permet un jaugeage fiable en 30-60 minutes depuis un bateau pneumatique.'
      },
      {
        n: '8',
        enonce: 'La station de la Vienne à Châtellerault transmet des données en temps réel toutes les 5 minutes. Le prévisionniste de la DREAL reçoit une alerte H = 4,2 m à 08h00. La courbe de tarage donne Q = 450 × (H - 0,30)^1,7. Calculez Q. Sachant que le module de la Vienne est 140 m³/s, le débit de crue correspond-il à une crue annuelle (Q2 = 380 m³/s), décennale (Q10 = 820 m³/s) ou centenale (Q100 = 1 650 m³/s) ?',
        solution: 'Q = 450 × (4,2 - 0,30)^1,7 = 450 × (3,9)^1,7.\nln(3,9) = 1,361 ; 1,361×1,7 = 2,313 ; e^2,313 = 10,10.\nQ = 450 × 10,10 = 4 545 m³/s.\nCe résultat semble très élevé. Vérifions les paramètres : avec a = 450 et b = 1,7, pour H - H0 = 3,9 m, Q = 4 545 m³/s dépasse Q100 = 1 650 m³/s. Cela indique probablement que la formule est valide uniquement pour des cotes plus faibles, ou que les paramètres sont incorrects pour cette gamme.\nRemarque pédagogique : en pratique, on divise la courbe de tarage en tronçons (basses eaux, moyennes eaux, hautes eaux) avec des jeux de paramètres différents. En extrapolation au-delà de H = 3,5 m (supposons), l\'incertitude serait de ±20 % et la valeur calculée de 4 545 m³/s pourrait être une sur-estimation significative. Le prévisionniste devrait comparer avec les hydrogrammes historiques et les données amont/aval pour valider.'
      }
    ]
  },

  'GEMEAU-040': {
    id: 'GEMEAU-040',
    titre: 'Hydrogrammes, régimes hydrologiques et étiages',
    fiche: {
      intro: 'Technicien en charge de la gestion quantitative d\'un grand bassin versant, vous devez analyser les séries de débits pour caractériser les régimes hydrologiques, identifier les étiages et produire les indicateurs réglementaires (QMNA5, VCN10) requis par les arrêtés sécheresse et les SDAGE. L\'analyse des hydrogrammes et des courbes des débits classés est la base de tout diagnostic de l\'état quantitatif d\'un cours d\'eau.',
      schema: `<svg viewBox="0 0 260 128" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="mb40" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#334155"/></marker></defs>
  <rect width="260" height="128" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Hydrogramme de crue — caractéristiques</text>
  <line x1="22" y1="106" x2="250" y2="106" stroke="#334155" stroke-width="1.5" marker-end="url(#mb40)"/>
  <line x1="22" y1="106" x2="22" y2="22" stroke="#334155" stroke-width="1.5" marker-end="url(#mb40)"/>
  <text x="246" y="118" font-size="8" fill="#334155" font-family="sans-serif">t →</text>
  <line x1="22" y1="90" x2="250" y2="90" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="10" y="93" font-size="7.5" fill="#2563eb" font-family="sans-serif">Qb</text>
  <path d="M28,88 C38,88 50,86 62,78 C75,55 88,30 100,22 C110,16 118,22 125,38 C132,55 145,80 165,90 C185,98 215,100 242,101" stroke="#2563eb" stroke-width="2.5" fill="none"/>
  <path d="M28,88 C38,88 50,86 62,78 C75,55 88,30 100,22 C110,16 118,22 125,38 C132,55 145,80 165,90 L28,90 Z" fill="#bfdbfe" opacity="0.3"/>
  <circle cx="100" cy="22" r="4" fill="#dc2626"/>
  <text x="104" y="20" font-size="7.5" fill="#dc2626" font-family="sans-serif" font-weight="bold">Qp (débit pointe)</text>
  <line x1="100" y1="22" x2="100" y2="106" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="62" y1="88" x2="62" y2="106" stroke="#94a3b8" stroke-width="1"/>
  <line x1="165" y1="90" x2="165" y2="106" stroke="#94a3b8" stroke-width="1"/>
  <line x1="62" y1="112" x2="165" y2="112" stroke="#94a3b8" stroke-width="1"/>
  <text x="113" y="122" text-anchor="middle" font-size="7.5" fill="#94a3b8" font-family="sans-serif">durée de crue</text>
</svg>`,
      sections: [
        {
          titre: '1. Lecture et analyse d\'un hydrogramme annuel',
          texte: 'L\'hydrogramme annuel est la représentation de la variation du débit Q (m³/s) en fonction du temps sur une année hydrologique (généralement de septembre à août pour les bassins français, afin que l\'année commence après l\'étiage estival). Sa lecture permet d\'identifier les hautes eaux (crues saisonnières), les basses eaux (étiages) et les crues exceptionnelles.\n\nUn hydrogramme de crue présente trois phases caractéristiques : la phase de montée (intensification rapide des pluies ou fonte nivale), le débit de pointe (maximum instantané) et la phase de récession (décrue plus lente car alimentée par le déstockage progressif des nappes). Le rapport entre la durée de montée et la durée de récession caractérise la réactivité du bassin : les bassins cristallins imperméables ont un rapport 1:3, les bassins calcaires karstiques peuvent avoir un rapport 1:20 ou plus.\n\nL\'hydrogramme de base (baseflow) est la composante lente de l\'hydrogramme, correspondant à l\'alimentation des cours d\'eau par les nappes souterraines. Il est estimé par des méthodes de séparation des écoulements (méthode de Hewlett et Hibbert, méthode récessive exponentielle Q = Q0 × e^(-αt)). La connaissance du débit de base est essentielle pour gérer les prélèvements estivaux : c\'est lui qui maintient les cours d\'eau en période sèche.',
          sous_sections: []
        },
        {
          titre: '2. Les régimes hydrologiques français',
          texte: 'Le régime hydrologique d\'un cours d\'eau est la variation saisonnière caractéristique de ses débits, liée au climat, à la géologie et à l\'altitude du bassin. On distingue en France plusieurs régimes principaux.\n\nLe régime pluvial océanique (Loire à Blois, Vilaine, Adour) est caractérisé par des hautes eaux hivernales (décembre à mars), alimentées par les pluies abondantes de la façade atlantique, et des basses eaux estivales (juillet à octobre). Le rapport entre le module du mois le plus abondant et celui du mois le plus sec est de 3 à 6.\n\nLe régime nival simple (Isère à Grenoble, Romanche, Verdon) est alimenté en grande partie par la fonte des neiges de montagne : basses eaux hivernales (décembre à mars, neige stockée), hautes eaux printanières et de début d\'été (mai à juillet, fonte), décrue estivale. Ce régime est menacé par le changement climatique (réduction de l\'enneigement, fonte précoce).\n\nLe régime pluvio-nival (Rhône à Lyon) combine les deux précédents : hautes eaux hivernales et printanières, avec un double maximum. Le régime méditerranéen (Hérault, Orb, Vidourle) est caractérisé par des crues automnales violentes (épisodes cévenols, octobre à décembre) et de longs étiages estivaux sévères (juin à octobre, débit souvent nul sur les petits cours d\'eau).',
          sous_sections: []
        },
        {
          titre: '3. Les indicateurs d\'étiage : QMNA5, VCN3, VCN10',
          texte: 'L\'étiage est la période de plus faibles débits d\'un cours d\'eau, caractérisée par la réduction ou l\'arrêt des précipitations et la vidange des nappes. En France, l\'étiage est généralement estival (juillet à septembre) pour les régimes pluviaux et méditerranéens. Plusieurs indicateurs quantifient la sévérité des étiages.\n\nLe QMNA (Débit Mensuel Minimum Annuel) est le débit mensuel le plus faible de l\'année hydrologique. Il est calculé comme la moyenne des débits journaliers du mois le plus sec. Le QMNA5 est la valeur de période de retour 5 ans, c\'est-à-dire le QMNA qui n\'est pas atteint en moyenne qu\'une année sur cinq. Il constitue le DOE (Débit d\'Objectif d\'Étiage) de référence dans les SDAGE et les plans de gestion des étiages.\n\nLe VCN3 (Volume Cumulé sur 3 jours consécutifs les plus bas) et le VCN10 (sur 10 jours consécutifs) mesurent la durée et l\'intensité des étiages sévères. Ces indicateurs sont utilisés pour déclencher les arrêtés de restriction des usages (vigilance, alerte, alerte renforcée, crise). Le DCR (Débit de Crise, seuil en dessous duquel les prélèvements doivent être arrêtés pour préserver la vie aquatique) est fixé dans les SDAGE à une fraction du QMNA5 (typiquement DCR = 0,5 × QMNA5 dans le bassin Loire-Bretagne).',
          sous_sections: []
        },
        {
          titre: '4. La courbe des débits classés',
          texte: 'La courbe des débits classés (CDC) classe les débits journaliers d\'une série chronologique par ordre décroissant et représente, pour chaque débit Q, le nombre de jours par an où ce débit est dépassé (ou le pourcentage de la durée). C\'est un outil synthétique essentiel pour caractériser le régime d\'un cours d\'eau et évaluer la ressource disponible.\n\nSur la CDC, on lit directement : le débit journalier maximal (point à 0 jours de dépassement), le module (débit moyen journalier, correspondant à 50 % de dépassement de la superficie sous la courbe), le débit médian (débit dépassé 183 jours/an, soit 50 % du temps), et le débit d\'étiage (QMNA, dépassé 10-20 jours/an selon la région). La forme de la courbe reflète le régime : une courbe aplatie (faible écart entre hautes et basses eaux) caractérise un bassin régulé (tamponné par une nappe, un lac ou un barrage) ; une courbe raide caractérise un bassin réactif à régime méditerranéen ou torrentiel.\n\nLa CDC est également utilisée pour dimensionner les usines hydroélectriques au fil de l\'eau (débit d\'équipement = débit dépassé 10-30 % du temps) et pour calculer la puissance garantie et l\'énergie productible. En gestion de l\'eau potable, elle permet d\'estimer les volumes stockables dans les retenues.',
          sous_sections: []
        }
      ],
      points: [
        'L\'hydrogramme annuel : hautes eaux (crues saisonnières), basses eaux (étiages), crues exceptionnelles.',
        'Le débit de base (baseflow) soutient les cours d\'eau pendant l\'étiage par déstockage des nappes.',
        'Régimes français : pluvial océanique, nival, pluvio-nival, méditerranéen — chacun avec sa saisonnalité.',
        'QMNA = débit mensuel minimum annuel ; QMNA5 = QMNA de période de retour 5 ans = DOE de référence.',
        'VCN3 et VCN10 = débits minimaux sur 3 et 10 jours consécutifs → indicateurs de sévérité des étiages.',
        'DCR (Débit de Crise) ≈ 0,5 × QMNA5 dans le bassin Loire-Bretagne → seuil d\'arrêt des prélèvements.',
        'Courbe des débits classés (CDC) : débit en fonction du nombre de jours de dépassement dans l\'année.',
        'CDC aplatie → bassin régulé (nappe, barrage) ; CDC raide → bassin réactif méditerranéen ou torrentiel.',
        'Le débit spécifique q = Q/S [L/s/km²] permet la comparaison entre bassins de tailles différentes.',
        'Le changement climatique provoque une baisse des QMNA5 de 10 à 40 % à l\'horizon 2070 selon les projections Explore 2070.'
      ],
      formules: [
        'QMNA5 : valeur de débit mensuel minimum annuel de fréquence quinquennale → ajustée par loi de Gumbel ou Galton sur la série des QMNA',
        'Débit de base (récession) : Q(t) = Q0 × e^(-α × t) → [m³/s] ; Q0 = débit initial de récession, α = coefficient de tarissement (j⁻¹)',
        'Module interannuel : Q_m = (1/n) × Σ Q_annuel_i → [m³/s] ; n = nombre d\'années de la série',
        'Débit spécifique : q = Q / S × 1000 → [L/s/km²] ; Q en m³/s, S en km²',
        'VCN3 : minimum du débit moyen sur 3 jours consécutifs calculé sur la série annuelle'
      ],
      retenir: 'Hydrogramme annuel · Débit de base · Régimes hydrologiques · QMNA5 · VCN3 · VCN10 · DOE · DCR · Courbe des débits classés · Module interannuel'
    },
    exercices: [
      {
        n: '1',
        enonce: 'La Banque Hydro fournit pour la Vienne à Châtellerault les modules annuels sur 10 ans : 110, 95, 182, 148, 78, 130, 165, 92, 140, 125 m³/s. Calculez le module interannuel. Identifiez l\'année sèche (min) et l\'année humide (max). Calculez l\'écart-type des modules annuels.',
        solution: 'Module interannuel = (110+95+182+148+78+130+165+92+140+125) / 10 = 1 265 / 10 = 126,5 m³/s.\nAnnée sèche : Q_min = 78 m³/s (écart à la moyenne : -48,5 m³/s = -38 %).\nAnnée humide : Q_max = 182 m³/s (écart : +55,5 m³/s = +44 %).\nÉcart-type : σ = √[(Σ(Q_i - Q_m)²)/n].\nValeurs (Q_i - 126,5)² : 272, 1 002, 3 080, 462, 2 352, 12, 1 482, 1 190, 182, 2.\nΣ = 10 038. σ = √(10 038/10) = √1 003,8 = 31,7 m³/s.\nCoefficient de variation = 31,7/126,5 = 0,25 = 25 %, valeur typique d\'un bassin pluvial océanique.'
      },
      {
        n: '2',
        enonce: 'Sur un cours d\'eau de plaine de module Q_m = 8,5 m³/s, les QMNA des 20 dernières années sont (m³/s) : 1,2 ; 0,8 ; 2,1 ; 1,5 ; 0,3 ; 1,8 ; 0,9 ; 1,4 ; 2,3 ; 0,6 ; 1,1 ; 1,9 ; 2,5 ; 0,4 ; 1,7 ; 1,0 ; 2,0 ; 0,7 ; 1,3 ; 2,2. Classez ces valeurs par ordre croissant et estimez le QMNA5 par interpolation (la 4ème plus petite valeur d\'une série de 20 ans correspond approximativement à T ≈ 5 ans).',
        solution: 'Classement croissant des 20 QMNA : 0,3 ; 0,4 ; 0,6 ; 0,7 ; 0,8 ; 0,9 ; 1,0 ; 1,1 ; 1,2 ; 1,3 ; 1,4 ; 1,5 ; 1,7 ; 1,8 ; 1,9 ; 2,0 ; 2,1 ; 2,2 ; 2,3 ; 2,5 m³/s.\nLa 4ème valeur la plus basse est 0,7 m³/s. En utilisant la formule de Hazen (rang k = (m-0,5)/n × 100 % de dépassement) : rang 4 correspond à (4-0,5)/20 = 17,5 % de non-dépassement, soit T = 1/0,175 ≈ 5,7 ans ≈ 5 ans.\nQMNA5 ≈ 0,7 m³/s.\nRapport QMNA5/Module = 0,7/8,5 = 0,082 = 8,2 %. Ce rapport très faible (< 10 %) indique un cours d\'eau à forte variabilité saisonnière, typique des plaines calcaires ou des régions semi-arides. En comparaison, pour un cours d\'eau alpin régularisé, ce rapport peut atteindre 25-35 %.'
      },
      {
        n: '3',
        enonce: 'La courbe de récession d\'un cours d\'eau de plaine peut s\'écrire Q(t) = Q0 × e^(-0,045t) avec t en jours et Q0 = 12 m³/s (débit début de récession). Calculez Q après 30 jours, 60 jours et 90 jours sans pluie. À quel moment le débit passera-t-il sous le seuil VCN10 = 1,5 m³/s ?',
        solution: 'Q(30) = 12 × e^(-0,045×30) = 12 × e^(-1,35) = 12 × 0,259 = 3,11 m³/s.\nQ(60) = 12 × e^(-0,045×60) = 12 × e^(-2,70) = 12 × 0,0672 = 0,807 m³/s.\nQ(90) = 12 × e^(-0,045×90) = 12 × e^(-4,05) = 12 × 0,01741 = 0,209 m³/s.\nSeuil VCN10 = 1,5 m³/s : 1,5 = 12 × e^(-0,045t) → e^(-0,045t) = 1,5/12 = 0,125 → -0,045t = ln(0,125) = -2,079 → t = 2,079/0,045 = 46,2 jours.\nLe débit passera sous 1,5 m³/s après 46 jours de récession sans pluie. C\'est un indicateur clé pour anticiper les restrictions de prélèvements.'
      },
      {
        n: '4',
        enonce: 'Comparez les régimes hydrologiques de la Seine à Paris et du Var à Roquebillière en calculant pour chaque cours d\'eau le rapport entre le débit moyen du mois le plus fort et le mois le plus faible. Seine (valeurs mensuelles moyennes en m³/s) : jan=280, fev=310, mar=290, avr=210, mai=160, jun=120, jul=80, aout=65, sep=70, oct=100, nov=180, dec=250. Var : jan=25, fev=30, mar=35, avr=28, mai=22, jun=12, jul=5, aout=3, sep=20, oct=45, nov=35, dec=28.',
        solution: 'Seine : mois max = fév = 310 m³/s, mois min = août = 65 m³/s. Rapport = 310/65 = 4,77. Module = Σ/12 = 1 915/12 = 159,6 m³/s.\nVar : mois max = oct = 45 m³/s, mois min = août = 3 m³/s. Rapport = 45/3 = 15,0. Module = 288/12 = 24,0 m³/s.\nInterprétation : la Seine présente un régime pluvial océanique classique avec hautes eaux hivernales et basses eaux estivales — rapport 4,8, relativement modéré grâce à la présence de nappes crayeuses qui soutiennent les étiages. Le Var présente un régime méditerranéen typique avec un rapport de 15 et un mois le plus fort en octobre (crues automnales d\'épisodes méditerranéens). Le débit d\'août (3 m³/s) est inférieur de 87,5 % au maximum, illustrant la vulnérabilité extrême des cours d\'eau méditerranéens en été.'
      },
      {
        n: '5',
        enonce: 'La courbe des débits classés d\'une rivière de 2 500 km² montre que le débit est dépassé pendant 300 j/an pour Q = 8 m³/s, 180 j/an pour Q = 22 m³/s et 30 j/an pour Q = 85 m³/s. Identifiez approximativement le module, le débit médian et le débit décennal. Calculez les débits spécifiques correspondants.',
        solution: 'La courbe des débits classés classe les débits journaliers de 365 jours/an par ordre décroissant :\n- Débit dépassé 300 j/an = Q au percentile 82 % : typiquement proche du débit de base soutenu par les nappes.\n- Débit dépassé 180 j/an (50 %) = débit médian ≈ 22 m³/s.\n- Débit dépassé 30 j/an = correspond à peu près au débit de crue Q10 ou biennal fort ≈ 85 m³/s.\nLe module est la moyenne, environ entre 22 m³/s (médiane) et 85 m³/s (haute valeur). Estimation : module ≈ 30-35 m³/s (on approxime car la courbe est asymétrique vers les hautes valeurs).\nDébits spécifiques sur S = 2 500 km² :\nq(300j) = 8/2500 × 1000 = 3,2 L/s/km².\nq médian = 22/2500 × 1000 = 8,8 L/s/km².\nq(30j) = 85/2500 × 1000 = 34 L/s/km².'
      },
      {
        n: '6',
        enonce: 'Un arrêté préfectoral de restriction des usages en eau fixe trois seuils pour la Vézère : DOE = 6,5 m³/s (vigilance), DCR = 2,8 m³/s (crise, prélèvements arrêtés). Un mois d\'été donne les débits journaliers suivants (m³/s, 10 jours) : 5,8 ; 4,9 ; 4,2 ; 3,8 ; 3,5 ; 3,1 ; 2,9 ; 2,6 ; 2,4 ; 2,2. Identifiez quand déclencher vigilance, alerte et crise. Calculez le VCN10.',
        solution: 'Tous les jours sont en dessous du DOE = 6,5 m³/s → vigilance dès le 1er jour.\nSeuil alerte (généralement 1/2 entre DOE et DCR ≈ 4,65 m³/s) : le débit passe sous 4,65 m³/s le jour 3 (4,2 m³/s) → déclenchement alerte au jour 3.\nSeuil DCR = 2,8 m³/s : le débit passe sous 2,8 m³/s le jour 8 (2,6 m³/s) → crise au jour 8. Les prélèvements doivent être arrêtés (sauf alimentation en eau potable prioritaire et débit réservé des ouvrages hydrauliques).\nVCN10 = débit moyen minimal sur 10 jours consécutifs = moyenne des 10 valeurs = (5,8+4,9+4,2+3,8+3,5+3,1+2,9+2,6+2,4+2,2)/10 = 35,4/10 = 3,54 m³/s.\nLe VCN10 de 3,54 m³/s est supérieur au DCR de 2,8 m³/s mais inférieur au DOE de 6,5 m³/s, indiquant un étiage modéré à sévère.'
      },
      {
        n: '7',
        enonce: 'La projection Explore 2070 prévoit pour le bassin de la Garonne une baisse du QMNA5 de -25 % à l\'horizon 2050 (scénario RCP 4.5). Le QMNA5 actuel (1990-2020) de la Garonne à Tonneins est de 85 m³/s. Calculez le QMNA5 projeté et estimez l\'impact sur le volume prélevable par l\'irrigation (actuellement 800 Mm³/an, dont 70 % en juillet-août).',
        solution: 'QMNA5 projeté 2050 = 85 × (1 - 0,25) = 85 × 0,75 = 63,75 m³/s.\nImpact sur l\'irrigation : si le débit d\'objectif d\'étiage (DOE) est calculé sur la base du QMNA5 actuel avec une marge de sécurité (DOE = 1,2 × QMNA5 = 102 m³/s), avec le nouveau QMNA5, DOE_2050 = 1,2 × 63,75 = 76,5 m³/s. Cette réduction du DOE signifie que les débits naturels atteindront plus souvent le seuil de restriction (85 % du temps au lieu de 20 %). Si les volumes prélevables sont proportionnellement réduits de 25 %, le volume prélevable d\'irrigation passe de 800 à 600 Mm³/an. En juillet-août (70 % = 560 Mm³ actuels) → 420 Mm³ projeté, soit -140 Mm³ pendant les 2 mois critiques pour l\'agriculture. Cette réduction nécessite une réorganisation des assolements et une amélioration de l\'efficience d\'irrigation (passage du gravitaire à l\'aspersion ou au goutte-à-goutte).'
      },
      {
        n: '8',
        enonce: 'Définissez et distinguez les concepts de : (a) module interannuel, (b) débit médian, (c) débit de pointe de crue, (d) VCN3, (e) QMNA5. Pour chacun, donnez son utilité pratique dans la gestion de la ressource en eau.',
        solution: '(a) Module interannuel : débit moyen journalier moyen sur une longue période (> 20 ans). Utilité : indicateur de la ressource totale renouvelable d\'un bassin, base de toute planification des usages.\n(b) Débit médian : débit dépassé exactement 50 % du temps (183 j/an sur la courbe des débits classés). Toujours inférieur au module car les distributions de débits sont asymétriques (valeurs extrêmes de crue gonflent la moyenne). Utilité : mieux représente le débit "habituel" que le module pour les usages permanents.\n(c) Débit de pointe de crue : débit instantané maximal lors d\'un épisode. Utilité : dimensionnement des ouvrages de protection (digues, barrages écrêteurs), des sections de collecteurs.\n(d) VCN3 : débit moyen minimal sur 3 jours consécutifs calculé sur une série annuelle. Traduit l\'intensité maximale d\'un étiage court (sécheresse intense). Utilité : déclenchement des arrêtés de restriction ; protection des espèces aquatiques sensibles aux pics de sécheresse.\n(e) QMNA5 : débit mensuel minimal de période de retour 5 ans. Traduit les étiages récurrents. Utilité : fixation des débits d\'objectif d\'étiage (DOE) et de crise (DCR) dans les SDAGE ; évaluation de la compatibilité des prélèvements avec les besoins des milieux.'
      }
    ]
  },

  'GEMEAU-041': {
    id: 'GEMEAU-041',
    titre: 'Crues et hydrologie des extrêmes',
    fiche: {
      intro: 'Chargé de mission au sein d\'un service de prévention des risques inondation d\'une DDT, vous devez produire les débits de référence (Q10, Q100, Qmax historique) pour instruire les Plans de Prévention des Risques Inondation (PPRI) d\'une communauté de communes traversée par une rivière à forte variabilité hydrologique. L\'analyse statistique des débits extrêmes et la connaissance des méthodes de prédétermination des crues sont au cœur de ce travail.',
      schema: `<svg viewBox="0 0 260 118" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="mb41" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#334155"/></marker></defs>
  <rect width="260" height="118" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Analyse fréquentielle — période de retour T</text>
  <line x1="22" y1="96" x2="248" y2="96" stroke="#334155" stroke-width="1.5" marker-end="url(#mb41)"/>
  <line x1="22" y1="96" x2="22" y2="22" stroke="#334155" stroke-width="1.5" marker-end="url(#mb41)"/>
  <text x="244" y="108" font-size="8" fill="#334155" font-family="sans-serif">T →</text>
  <text x="8" y="32" font-size="7.5" fill="#334155" font-family="sans-serif" transform="rotate(-90,14,70)">Qmax</text>
  <path d="M28,90 C50,85 75,72 100,55 C125,40 155,30 200,24" stroke="#2563eb" stroke-width="2.5" fill="none"/>
  <line x1="85" y1="96" x2="85" y2="62" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="22" y1="62" x2="85" y2="62" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="85" y="108" text-anchor="middle" font-size="7.5" fill="#d97706" font-family="sans-serif">T=10</text>
  <text x="8" y="66" font-size="7.5" fill="#d97706" font-family="sans-serif">Q10</text>
  <line x1="150" y1="96" x2="150" y2="38" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="22" y1="38" x2="150" y2="38" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="150" y="108" text-anchor="middle" font-size="7.5" fill="#dc2626" font-family="sans-serif">T=100</text>
  <text x="8" y="42" font-size="7.5" fill="#dc2626" font-family="sans-serif">Q100</text>
  <text x="130" y="80" text-anchor="middle" font-size="8.5" fill="#334155" font-family="sans-serif" font-weight="bold">p = 1/T · Loi Gumbel / GEV</text>
</svg>`,
      sections: [
        {
          titre: '1. Analyse fréquentielle des crues : ajustement statistique',
          texte: 'L\'analyse fréquentielle consiste à ajuster une loi de distribution statistique aux débits maximaux annuels (QIX — Qi de période de retour T ans) observés sur une longue série de données. Les lois les plus utilisées en hydrologie des crues en France sont la loi de Gumbel (valeurs extrêmes type I), la loi GEV (Generalized Extreme Value — englobe Gumbel, Fréchet et Weibull) et la loi Log-Normale à 2 paramètres.\n\nL\'ajustement de Gumbel est le plus classique pour les crues des rivières françaises. Il s\'écrit Q(T) = µ + σ × yT, où µ est le paramètre de position (mode), σ le paramètre d\'échelle, et yT = -ln(-ln(1 - 1/T)) est la valeur réduite de Gumbel pour la période de retour T. µ et σ sont estimés par la méthode des moments : µ = Q_m - 0,5772 × σ, et σ = √6/π × s_Q (où s_Q est l\'écart-type des QIX observés).\n\nLa qualité de l\'ajustement est vérifiée par le test de Kolmogorov-Smirnov (test d\'adéquation) et le graphique de Henry (papier de Gumbel). La fiabilité des extrapolations au-delà de la longueur de la série (T > n années de données) diminue rapidement : une série de 40 ans permet d\'estimer Q100 avec une incertitude de ±30-50 %. Pour T > 1 000 ans (études de sûreté nucléaire, grands barrages), des méthodes complémentaires sont nécessaires.',
          sous_sections: []
        },
        {
          titre: '2. Méthodes de prédétermination pour les bassins non jaugés',
          texte: 'Lorsqu\'aucune station hydrométrique n\'existe sur le cours d\'eau étudié, les débits de crue doivent être estimés par des méthodes régionales. En France, la méthode QdF (Débit-Durée-Fréquence) développée par le CEREMA et la méthode SHYREG du BRGM sont les références réglementaires.\n\nLa méthode rationnelle (ou formule de Caquot pour les bassins urbains) est valable pour de très petits bassins (< 1-2 km²) : Q = C × i × S, où C est le coefficient de ruissellement (0,1 à 0,9 selon l\'occupation des sols), i l\'intensité pluviométrique pour une durée égale au temps de concentration tc et une période de retour T, et S la superficie en m². Elle est systématiquement utilisée pour le dimensionnement des réseaux d\'assainissement pluviaux.\n\nPour les bassins de taille moyenne (1 à 500 km²), la méthode SOCOSE-CRUPEDIX (années 1980) utilise des régressions régionales reliant les QIX aux caractéristiques du bassin (superficie, pluviométrie de référence). Plus récente, la méthode SHYREG du BRGM (2010-2020) utilise un modèle pluie-débit semi-distribué calé sur les bassins jaugés pour produire une carte nationale des QIX.',
          sous_sections: []
        },
        {
          titre: '3. La crue centennale Q100 dans les PPRI',
          texte: 'Le PPRI (Plan de Prévention des Risques Inondation) est un document d\'urbanisme réglementaire qui délimite les zones inondables en tenant compte de l\'aléa inondation et des enjeux. La crue de référence est généralement la crue centennale (Q100, T = 100 ans), sauf si une crue historique plus forte est documentée (auquel cas la crue historique devient la crue de référence).\n\nLa modélisation hydraulique du PPRI utilise les débits de référence (Q100 ± incertitudes hydrologiques) comme données d\'entrée d\'un modèle 1D ou 2D (logiciels HEC-RAS, MIKE FLOOD, TELEMAC) pour calculer les hauteurs d\'eau et les vitesses de courant dans le lit majeur. Les zones réglementaires du PPRI distinguent la zone rouge (fort aléa ou frange du lit mineur : constructibilité très restreinte), la zone bleue (aléa modéré : constructibilité sous conditions) et la zone blanche (hors inondation).\n\nL\'atlas des zones inondables (AZI) complète le PPRI par des cartes informatives des crues historiques exceptionnelles. Il alimente également les SLGRI (Stratégies Locales de Gestion du Risque Inondation) dans les TRI (Territoires à Risque Important) identifiés par la directive européenne Inondations (2007/60/CE).',
          sous_sections: []
        },
        {
          titre: '4. Le Débit Maximal Probable (DMP) et la crue extrême',
          texte: 'Pour les ouvrages à très haute conséquence potentielle (grands barrages de classe A, installations nucléaires), la réglementation impose de calculer le Débit Maximal Probable (DMP), aussi appelé crue extrême ou crue de sécurité. Le DMP est la crue produite par la combinaison des conditions météorologiques et hydrologiques les plus défavorables physiquement possibles.\n\nLe DMP est estimé par la méthode de la Pluie Maximale Probable (PMP), définie par l\'OMM (Organisation Météorologique Mondiale) comme "la plus forte précipitation pour une durée donnée qui est physiquement possible sur un bassin". La PMP est calculée par une approche statistique des maxima pluviométriques observés et un ajustement thermodynamique tenant compte de la teneur en vapeur d\'eau maximale de l\'atmosphère.\n\nEn France, les études DMP des grands barrages sont réalisées par EDF/DTG (Division Technique Générale) et vérifiées par le CTPB (Comité Technique Permanent des Barrages et des Ouvrages Hydrauliques). Pour les installations nucléaires, l\'ASN (Autorité de Sûreté Nucléaire) impose le calcul de la crue associée à une probabilité de dépassement de 10⁻⁶/an (crue millénale à dix-millénale), très au-delà du Q1000 usuel.',
          sous_sections: []
        }
      ],
      points: [
        'Analyse fréquentielle : ajustement d\'une loi statistique (Gumbel, GEV, Log-Normale) aux QIX observés.',
        'Loi de Gumbel : Q(T) = µ + σ × yT ; la valeur réduite yT = -ln(-ln(1-1/T)) est tabulée.',
        'Incertitude sur Q100 : ±30-50 % pour une série de 40 ans — toujours mentionner l\'incertitude.',
        'Méthode rationnelle : Q = C × i × S, valable pour bassins < 2 km², usage en hydraulique urbaine.',
        'SOCOSE-CRUPEDIX et SHYREG : méthodes régionales pour bassins non jaugés de 1-500 km².',
        'PPRI : crue de référence = Q100 ou crue historique si plus forte. Zones rouge, bleue, blanche.',
        'DMP (Débit Maximal Probable) : pour grands barrages et installations nucléaires — sécurité ultime.',
        'Directive Inondations 2007/60/CE → TRI → SLGRI en France.',
        'HEC-RAS, MIKE FLOOD, TELEMAC : logiciels de modélisation hydraulique 1D/2D pour les PPRI.',
        'Test de Kolmogorov-Smirnov et graphique de Henry : outils de validation de l\'ajustement statistique.'
      ],
      formules: [
        'Gumbel : Q(T) = µ + σ × yT ; yT = -ln(-ln(1 - 1/T)) ; µ = Qm - 0,5772σ ; σ = (√6/π) × sQ',
        'Méthode rationnelle : Q = C × i × S → [m³/s] ; C = coeff. ruissellement, i = intensité (m/s), S = surface (m²)',
        'Période de retour T [ans] = 1 / (1 - F(Q)) ; F = fréquence de non-dépassement',
        'Fréquence de non-dépassement empirique (Hazen) : F_i = (i - 0,5) / n ; i = rang croissant, n = nb observations'
      ],
      retenir: 'Analyse fréquentielle · Gumbel · GEV · Q100 · QIX · Méthode rationnelle · PPRI · DMP · SHYREG · TRI · Directive Inondations'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Les QIX (débits maximaux annuels instantanés) de la Creuse à Argenton-sur-Creuse sur 30 ans sont : moyenne Qm = 285 m³/s, écart-type sQ = 118 m³/s. Ajustez la loi de Gumbel et calculez Q10, Q50 et Q100. Donnez les valeurs réduites de Gumbel nécessaires : y10 = 2,251 ; y50 = 3,902 ; y100 = 4,600.',
        solution: 'Paramètres Gumbel : σ = (√6/π) × sQ = (2,449/3,1416) × 118 = 0,7797 × 118 = 92,0 m³/s.\nµ = Qm - 0,5772 × σ = 285 - 0,5772 × 92,0 = 285 - 53,1 = 231,9 m³/s.\nQ10 = µ + σ × y10 = 231,9 + 92,0 × 2,251 = 231,9 + 207,1 = 439 m³/s.\nQ50 = 231,9 + 92,0 × 3,902 = 231,9 + 359,0 = 591 m³/s.\nQ100 = 231,9 + 92,0 × 4,600 = 231,9 + 423,2 = 655 m³/s.\nIncertitude sur Q100 (série 30 ans) : ±35-50 %, soit Q100 ∈ [425-980 m³/s].'
      },
      {
        n: '2',
        enonce: 'Appliquez la méthode rationnelle à un bassin versant urbain de 35 ha (C = 0,70). Le temps de concentration est tc = 25 min. Pour T = 10 ans, l\'intensité de la pluie de durée 25 min est i = 55 mm/h. Calculez Q10 en m³/s et en L/s. Dimensionnez le diamètre d\'un collecteur circulaire en béton (n Manning = 0,013) pour écouler ce débit en pleine section, pente 1 %.',
        solution: 'Q10 = C × i × S = 0,70 × (55/3600) × (35 × 10 000) = 0,70 × 0,01528 × 350 000 = 3 743 L/s = 3,74 m³/s.\nDimensionnement collecteur (Manning-Strickler, section circulaire pleine) :\nQ = (1/n) × A × R^(2/3) × I^(1/2).\nPour une conduite circulaire de diamètre D : A = π D²/4, Rh = D/4.\n3,74 = (1/0,013) × (π D²/4) × (D/4)^(2/3) × (0,01)^(1/2).\n3,74 = 76,92 × 0,7854 D² × 0,396 D^(2/3) × 0,100.\n3,74 = 76,92 × 0,07854 × 0,396 × 0,100 × D^(8/3).\n3,74 = 0,2393 × D^(8/3) → D^(8/3) = 15,63 → D = 15,63^(3/8) = e^(3/8 × ln(15,63)) = e^(3/8 × 2,748) = e^1,031 = 2,80 m.\nCollecteur DN 2800 mm (trop grand pour une réalité ; la méthode rationnelle surestime généralement en zones urbanisées étendues — on complète avec un bassin de rétention pour réduire le débit de pointe).'
      },
      {
        n: '3',
        enonce: 'Un PPRI est en cours d\'élaboration pour la vallée de l\'Allier. La crue historique de 1866 a été estimée à 3 200 m³/s à Brioude. L\'analyse fréquentielle donne Q100 = 2 600 m³/s et Q200 = 2 950 m³/s. Quelle est la crue de référence du PPRI ? Justifiez selon la réglementation.',
        solution: 'Selon l\'article R.562-11-1 du Code de l\'Environnement (PPRI), la crue de référence est "la plus haute crue connue". Si une crue historique est documentée et dépasse la crue centennale, elle devient la crue de référence.\nIci, crue 1866 = 3 200 m³/s > Q100 = 2 600 m³/s et > Q200 = 2 950 m³/s.\nLa crue de référence du PPRI sera la crue de 1866 : Q_ref = 3 200 m³/s.\nConséquences : la cartographie des zones inondables devra être établie pour ce débit de référence 3 200 m³/s, ce qui donnera une zone inondable plus étendue qu\'une simple modélisation de la crue centennale. Cette règle protège contre le fait que les séries statistiques disponibles (< 80 ans dans la plupart des cas) n\'intègrent pas les crues exceptionnelles du XIXe siècle.'
      },
      {
        n: '4',
        enonce: 'La valeur réduite de Gumbel pour T = 100 ans est yT = 4,600. Pour un bassin dont µ = 420 m³/s et σ = 155 m³/s, calculez Q100. Estimez ensuite Q1000 (yT = 6,907) et Q10000 (yT = 9,210). Commentez la croissance du débit extrême.',
        solution: 'Q100 = 420 + 155 × 4,600 = 420 + 713 = 1 133 m³/s.\nQ1000 = 420 + 155 × 6,907 = 420 + 1 071 = 1 491 m³/s.\nQ10000 = 420 + 155 × 9,210 = 420 + 1 428 = 1 848 m³/s.\nCommentaire : un facteur 10 dans la période de retour (T×10) augmente le débit de seulement 155 × (yT×10 - yT) = 155 × ln(10) × 1/ln(T/(T-1)) ≈ 155 × 2,302 = 357 m³/s selon Gumbel. La croissance est logarithmique : passer de T=100 à T=1000 (+900 ans) n\'augmente Q que de 32 % ; passer de T=1000 à T=10000 (+9000 ans) ne l\'augmente que de 24 %. Ceci illustre pourquoi les analyses de sécurité des grands ouvrages ne peuvent pas se contenter d\'une extrapolation infinie de la loi de Gumbel et nécessitent la méthode du DMP.'
      },
      {
        n: '5',
        enonce: 'Un petit bassin versant de 2,5 km² est en zone montagneuse (coefficient de ruissellement C = 0,55). Son temps de concentration est tc = 45 min. L\'intensité de référence pour tc = 45 min et T = 50 ans est i = 38 mm/h. Comparez la méthode rationnelle à une estimation par SHYREG qui donne Q50 = 24 m³/s pour ce bassin.',
        solution: 'Méthode rationnelle : Q = C × i × S.\nS = 2,5 km² = 2,5 × 10^6 m².\ni = 38 mm/h = 38/(3600×1000) m/s = 1,056 × 10^-5 m/s.\nQ = 0,55 × 1,056×10^-5 × 2,5×10^6 = 0,55 × 26,4 = 14,5 m³/s.\nComparaison avec SHYREG : Q50_SHYREG = 24 m³/s.\nÉcart = (24 - 14,5) / 24 × 100 = 39,6 % — la méthode rationnelle sous-estime ici.\nCe résultat illustre les limites de la méthode rationnelle au-delà de 1-2 km² : elle ne capture pas l\'effet de ruissellement non-linéaire sur les versants pentus (saturation des sols, contribuant zone de saturation variable), et surestime le temps de concentration réel des bassins montagneux. SHYREG, calé sur des bassins jaugés similaires, est généralement plus fiable pour T = 50 ans sur ce type de configuration.'
      },
      {
        n: '6',
        enonce: 'Calculez la fréquence empirique (méthode de Hazen) pour les 5 plus grands QIX d\'une série de 25 ans : rangs i = 21, 22, 23, 24, 25. Convertissez en périodes de retour correspondantes. Ces fréquences empiriques permettent de vérifier graphiquement l\'ajustement de Gumbel.',
        solution: 'Formule de Hazen : F_i = (i - 0,5) / n, avec n = 25.\nRang i=21 : F = (21-0,5)/25 = 20,5/25 = 0,820 → T = 1/(1-F) = 1/0,180 = 5,6 ans.\nRang i=22 : F = 21,5/25 = 0,860 → T = 1/0,140 = 7,1 ans.\nRang i=23 : F = 22,5/25 = 0,900 → T = 1/0,100 = 10,0 ans.\nRang i=24 : F = 23,5/25 = 0,940 → T = 1/0,060 = 16,7 ans.\nRang i=25 : F = 24,5/25 = 0,980 → T = 1/0,020 = 50,0 ans.\nSur un papier de Gumbel, on porte les QIX (de la valeur la plus petite au rang 1 à la plus grande au rang 25) en ordonnée et les valeurs réduites yT = -ln(-ln(F_i)) en abscisse. Si les points s\'alignent, l\'ajustement de Gumbel est acceptable. La valeur maximale de la série (rang 25) ne représente que T ≈ 50 ans : extrapoler jusqu\'à T = 1000 ans à partir d\'une série de 25 ans reste très incertain.'
      },
      {
        n: '7',
        enonce: 'Un PPRI délimite une zone inondable selon Q100 = 850 m³/s. Un ingénieur calcule que l\'incertitude hydrologique sur Q100 est de ±40 %. Calculez la fourchette Q100 ± 40 %. Quelle valeur un préfet doit-il choisir pour la crue de référence du PPRI (Q100_bas, Q100_moyen, Q100_haut) ? Justifiez.',
        solution: 'Q100 ± 40 % :\nQ100_bas = 850 × (1 - 0,40) = 850 × 0,60 = 510 m³/s.\nQ100_moyen = 850 m³/s (valeur centrale).\nQ100_haut = 850 × (1 + 0,40) = 850 × 1,40 = 1 190 m³/s.\nChoix pour le PPRI : le préfet doit utiliser la valeur haute ou centrale, jamais la valeur basse. La doctrine nationale (circulaire du 24/01/1994 et instruction du 15/10/2014) impose d\'appliquer le principe de précaution : en cas d\'incertitude, on retient la valeur la plus défavorable pour protéger les personnes et les biens. Retenir Q100_bas exposerait des zones qui seraient inondées lors d\'une crue centennale réelle. En pratique, on utilise la valeur centrale Q100 = 850 m³/s ou une valeur légèrement majorée (Q100 + 10-20 % de marge), en l\'absence de crue historique plus forte documentée.'
      },
      {
        n: '8',
        enonce: 'Décrivez le circuit réglementaire de la prévention des inondations en France : depuis la directive européenne Inondations jusqu\'au PPRI opposable aux tiers. Identifiez les acteurs (État, collectivités, établissements publics) à chaque étape.',
        solution: 'Circuit réglementaire de la prévention des inondations :\n1. Directive européenne Inondations (2007/60/CE) → transposée en droit français par la loi GRENELLE II (2010) et les articles L.566-1 à L.566-12 du Code de l\'Environnement.\n2. PGRI (Plan de Gestion des Risques Inondation) → élaboré par les Comités de Bassin (DREAL de bassin) pour chacun des 7 grands bassins hydrographiques français. Révision tous les 6 ans.\n3. TRI (Territoires à Risque Important) → cartographiés par l\'État (DREAL) sur 122 territoires en France. Imposent des cartes des surfaces inondables et cartes des risques pour 3 probabilités (forte/moyenne/faible).\n4. SLGRI (Stratégie Locale de Gestion du Risque Inondation) → élaborée par les EPCI (intercommunalités) compétents GEMAPI ou les syndicats de rivières pour chaque TRI. Acteur : collectivité territoriale, avec appui de l\'État.\n5. PAPI (Programme d\'Actions de Prévention des Inondations) → label État permettant de financer les travaux de protection. Acteur : collectivité maître d\'ouvrage + cofinancement État/Fonds Barnier.\n6. PPRI (Plan de Prévention des Risques Inondation) → élaboré par l\'État (DDT/DREAL) sous autorité du préfet. Prescrit et approuvé par arrêté préfectoral. Annexé au PLU, opposable aux tiers. Acteur final : DDT/DREAL pour l\'élaboration, préfet pour l\'approbation.'
      }
    ]
  },

  'GEMEAU-042': {
    id: 'GEMEAU-042',
    titre: 'Modélisation hydrologique des bassins versants',
    fiche: {
      intro: 'Ingénieur hydrologie dans un bureau d\'études, vous devez choisir et mettre en œuvre un modèle pluie-débit pour simuler les débits d\'un bassin versant peu jaugé de 250 km², afin d\'évaluer l\'impact d\'un changement d\'occupation des sols sur les régimes hydrologiques et d\'estimer les crues de projet. La modélisation hydrologique est un outil incontournable pour compléter l\'analyse statistique lorsque les données d\'observation sont insuffisantes.',
      schema: `<svg viewBox="0 0 260 112" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="mb42" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#475569"/></marker></defs>
  <rect width="260" height="112" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Modèle pluie-débit (GR4J simplifié)</text>
  <rect x="10" y="26" width="50" height="28" rx="4" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="35" y="43" text-anchor="middle" font-size="8" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Pluie P</text>
  <line x1="60" y1="40" x2="80" y2="40" stroke="#475569" stroke-width="1.5" marker-end="url(#mb42)"/>
  <rect x="80" y="22" width="50" height="36" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="105" y="37" text-anchor="middle" font-size="8" fill="#15803d" font-family="sans-serif" font-weight="bold">Réservoir</text>
  <text x="105" y="49" text-anchor="middle" font-size="7.5" fill="#15803d" font-family="sans-serif">sol (Pr, Pn)</text>
  <line x1="130" y1="40" x2="150" y2="40" stroke="#475569" stroke-width="1.5" marker-end="url(#mb42)"/>
  <rect x="150" y="22" width="50" height="36" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="175" y="37" text-anchor="middle" font-size="8" fill="#92400e" font-family="sans-serif" font-weight="bold">Routage</text>
  <text x="175" y="49" text-anchor="middle" font-size="7.5" fill="#92400e" font-family="sans-serif">HU · Nash</text>
  <line x1="200" y1="40" x2="220" y2="40" stroke="#475569" stroke-width="1.5" marker-end="url(#mb42)"/>
  <rect x="220" y="26" width="34" height="28" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="237" y="43" text-anchor="middle" font-size="8" fill="#334155" font-family="sans-serif" font-weight="bold">Q(t)</text>
  <text x="130" y="80" text-anchor="middle" font-size="8.5" fill="#334155" font-family="sans-serif" font-weight="bold">Calage → validation sur série obs.</text>
  <text x="130" y="94" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">Critère Nash-Sutcliffe : NSE → 1 = parfait</text>
  <text x="130" y="106" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">Modèles : GR4J · HBV · TOPMODEL</text>
</svg>`,
      sections: [
        {
          titre: '1. Concepts de base de la modélisation pluie-débit',
          texte: 'Un modèle pluie-débit transforme une pluie en débit à l\'exutoire d\'un bassin versant en simulant les processus hydrologiques : interception par la végétation, infiltration, stockage dans le sol, évapotranspiration, ruissellement de surface, drainage hypodermique et flux de base par les nappes. La qualité du modèle dépend de sa capacité à reproduire ces processus de manière physiquement cohérente.\n\nOn distingue les modèles globaux (ou à réservoirs), qui représentent le bassin comme un ensemble de réservoirs conceptuels sans spatialisation, et les modèles distribués, qui découpent le bassin en mailles ou en unités hydrologiques élémentaires (UHE, sous-bassins) et calculent les flux de maille en maille. Les modèles globaux (GR4J, HBV, TOPMODEL) sont moins exigeants en données et plus faciles à caler ; les modèles distribués (VIC, SWAT, MIKE SHE) permettent de représenter l\'hétérogénéité spatiale mais nécessitent beaucoup de paramètres.\n\nLe calage d\'un modèle hydrologique consiste à ajuster les paramètres libres du modèle pour minimiser l\'écart entre les débits simulés et les débits observés sur une période de calage, puis à vérifier sur une période de validation indépendante. La performance est mesurée par le critère de Nash-Sutcliffe (NSE), qui vaut 1 pour une simulation parfaite et 0 lorsque le modèle n\'est pas meilleur que la moyenne des débits observés.',
          sous_sections: []
        },
        {
          titre: '2. Le modèle GR4J : un modèle global de référence français',
          texte: 'GR4J (Génie Rural à 4 paramètres Journalier) est le modèle pluie-débit le plus utilisé en France pour la gestion de l\'eau. Développé à l\'INRAE (ex-Irstea), il simule les débits journaliers à partir de la pluie et de l\'ETP (évapotranspiration potentielle). Ses 4 paramètres libres sont X1 (capacité du réservoir sol, en mm), X2 (coefficient d\'échanges souterrains, mm/j), X3 (capacité du réservoir de routage, mm) et X4 (durée du hydrogramme unitaire, j).\n\nLe fonctionnement de GR4J est le suivant : la pluie nette (pluie - ETP) est répartie entre une contribution au réservoir sol (infiltration) et une pluie efficace (ruissellement potentiel). La pluie efficace est divisée en deux parts (90/10 %) convoluées par deux hydrogrammes unitaires (HU1 courts, HU2 longs) puis routées dans un réservoir linéaire (réservoir de routage). Un terme d\'échanges souterrains X2 peut être positif (recharge des nappes profondes) ou négatif (alimentation par captage d\'aquifère).\n\nLe modèle GR4J a été calé et validé sur plus de 300 bassins français dans des conditions très variées. Ses performances moyennes sont NSE ≈ 0,75-0,85 sur les bassins de validation en régime pluvial océanique. Il est implémenté dans le logiciel libre airGR développé par l\'INRAE, disponible en R sur le CRAN.',
          sous_sections: []
        },
        {
          titre: '3. Modèles distribués et spatialisation des processus',
          texte: 'Les modèles distribués comme SWAT (Soil and Water Assessment Tool, USDA) ou TOPMODEL permettent de prendre en compte la variabilité spatiale des sols, de la végétation, de la topographie et des pratiques agricoles sur les flux hydrologiques. SWAT découpe le bassin en sous-bassins et unités de réponse hydrologique (URH, combinaisons uniques pente × sol × végétation) et simule les flux de surface, le ruissellement, la percolation, la recharge des nappes et le transport de sédiments et de nutriments.\n\nLes SIG (Systèmes d\'Information Géographique) sont indispensables à ces modèles pour préparer les couches spatiales d\'entrée : MNT (Modèle Numérique de Terrain, pour la délimitation automatique des sous-bassins et le réseau hydrographique), carte des sols (BdSol de l\'INRAE, 1/250 000), occupation des sols (COS-GEOFLA, Corine Land Cover à 250 m de résolution ou OCS-GE à 50 m), et météorologie distribuée (interpolation spatiale des pluviomètres ou utilisation des réanalyses ERA5).\n\nCes modèles sont utilisés pour évaluer l\'impact des changements d\'usage des sols (boisement de terres agricoles, urbanisation, drainage) sur les régimes hydrologiques, pour quantifier les flux de nitrates et de pesticides vers les cours d\'eau, et pour projeter les débits futurs sous scénarios climatiques RCP de l\'IPCC.',
          sous_sections: []
        },
        {
          titre: '4. Le critère de Nash-Sutcliffe et validation des modèles',
          texte: 'Le critère de Nash-Sutcliffe (NSE) mesure la part de variance des débits observés expliquée par le modèle : NSE = 1 - [Σ(Q_obs - Q_sim)²] / [Σ(Q_obs - Q̄_obs)²]. Un NSE = 1 correspond à une simulation parfaite, NSE = 0 indique que le modèle est équivalent à prédire la moyenne observée pour tous les pas de temps, NSE < 0 signifie que le modèle est moins performant que cette prédiction triviale.\n\nEn hydrologie opérationnelle française, les seuils conventionnels sont : NSE ≥ 0,75 = très satisfaisant, 0,65-0,75 = satisfaisant, 0,50-0,65 = moyen, NSE < 0,50 = insatisfaisant. Le NSE est sensible aux valeurs extrêmes (crues) du fait du carré de l\'erreur ; pour évaluer la reproduction des étiages et des débits de base, on utilise souvent le NSE sur les débits transformés en racine carrée ou en logarithme (NSE-sqrt, NSE-log).\n\nLa validation croisée split-sample (calage sur 50 % de la série, validation sur les 50 % restants) est la procédure minimale requise. Pour les études d\'impact du changement climatique (validation en conditions non-stationnaires), la validation différentielle (proxy-basin test, validité temporelle) est recommandée pour vérifier que le modèle se transfère correctement entre des conditions climatiques contrastées.',
          sous_sections: []
        }
      ],
      points: [
        'Modèles globaux (GR4J, HBV) : réservoirs conceptuels, moins de paramètres, calage rapide sur petits bassins.',
        'Modèles distribués (SWAT, TOPMODEL) : spatialisation, couplage avec SIG, flux de nutriments et sédiments.',
        'GR4J : 4 paramètres (X1 sol, X2 échanges, X3 routage, X4 durée HU), modèle de référence INRAE.',
        'Calage : ajuster les paramètres libres pour minimiser l\'erreur sur la période de calage.',
        'NSE (Nash-Sutcliffe Efficiency) : critère de performance — 1 = parfait, 0 = moyenne, < 0 = insatisfaisant.',
        'Seuils NSE : ≥ 0,75 très satisfaisant ; 0,65-0,75 satisfaisant ; < 0,50 insatisfaisant.',
        'NSE-sqrt ou NSE-log : variantes sensibles aux basses eaux, complémentaires au NSE classique.',
        'ETP (évapotranspiration potentielle) : donnée d\'entrée obligatoire — méthodes Penman-Monteith ou Oudin.',
        'Split-sample test : calage et validation sur deux sous-périodes différentes — protocole minimum.',
        'airGR (package R, INRAE) : implémentation libre de GR4J, GR5J, GR6J, GR2M…'
      ],
      formules: [
        'Nash-Sutcliffe : NSE = 1 - Σ(Qobs - Qsim)² / Σ(Qobs - Q̄obs)² → [-∞; 1] ; NSE=1 simulation parfaite',
        'ETP Oudin (méthode simplifiée) : ETP = max(0, (Re / λρ) × (Ta + 5) / 100) → [mm/j] ; Re = rayonnement extra-terrestre, Ta = température moyenne (°C)',
        'Bias relatif : BIAS = (Σ Qsim - Σ Qobs) / Σ Qobs × 100 → [%] ; négatif = sous-estimation, positif = surestimation',
        'RMSE : RMSE = √[Σ(Qobs - Qsim)² / n] → [m³/s] ; mesure l\'erreur quadratique moyenne en unité de débit'
      ],
      retenir: 'Modèle pluie-débit · GR4J · Réservoir conceptuel · SWAT · NSE · Calage-validation · ETP · airGR · Split-sample · Modèle distribué'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un modèle GR4J simulé sur 5 pas de temps donne les débits (m³/s) : Qobs = [12, 8, 25, 18, 10], Qsim = [10, 9, 22, 20, 11]. Calculez la moyenne Qobs, le NSE et le biais relatif. Qualifiez la performance.',
        solution: 'Q̄obs = (12+8+25+18+10)/5 = 73/5 = 14,6 m³/s.\nNumerateur NSE = Σ(Qobs-Qsim)² : (12-10)²=4 ; (8-9)²=1 ; (25-22)²=9 ; (18-20)²=4 ; (10-11)²=1. Σ = 19.\nDénominateur NSE = Σ(Qobs-Q̄obs)² : (12-14,6)²=6,76 ; (8-14,6)²=43,56 ; (25-14,6)²=108,16 ; (18-14,6)²=11,56 ; (10-14,6)²=21,16. Σ = 191,2.\nNSE = 1 - 19/191,2 = 1 - 0,099 = 0,901 → très satisfaisant (NSE ≥ 0,75).\nBias = (Σ Qsim - Σ Qobs) / Σ Qobs × 100 = (72-73)/73 × 100 = -1,4 % → quasi-nul, le modèle n\'a pas de biais systématique.'
      },
      {
        n: '2',
        enonce: 'Pour un bassin de 200 km², le modèle GR4J calé donne X1 = 350 mm, X2 = +1,5 mm/j, X3 = 120 mm, X4 = 3,2 j. Interprétez la signification physique de chacun de ces paramètres et dites si X2 positif indique un bassin drainé par une nappe ou un bassin qui recharge une nappe.',
        solution: 'X1 = 350 mm : capacité du réservoir sol en mm d\'eau équivalente. Représente la capacité d\'humidité du sol racinaire. Une valeur de 350 mm est typique d\'un sol argileux ou limoneux profond (vs 100-150 mm pour un sol sableux mince ou imperméable). Lorsque le réservoir sol est plein, toute pluie nette devient ruissellement potentiel.\nX2 = +1,5 mm/j : coefficient d\'échanges souterrains. Positif → le bassin perd de l\'eau vers des aquifères profonds non connectés (recharge de nappe captive, pertes karstiques). Négatif → le bassin reçoit une alimentation d\'aquifères extérieurs (karst, nappe alluviale alimentée en amont). X2 > 0 ici : bassin drainant vers une nappe (perd de l\'eau).\nX3 = 120 mm : capacité du réservoir de routage. Pilote la vitesse de décrue des hydrogrammes. Petite valeur → décrue rapide (bassin réactif) ; grande valeur → décrue lente (bassin à forte inertie, nappe soutenant les étiages).\nX4 = 3,2 j : durée du HU1 (hydrogramme unitaire de ruissellement direct). Représente le temps de transfert du ruissellement de surface. Valeur de 3,2 j est cohérente avec un bassin de 200 km² à pente modérée.'
      },
      {
        n: '3',
        enonce: 'Citez les différences fondamentales entre SWAT et GR4J en termes de spatialisation, de données d\'entrée et d\'application. Pour quel type d\'étude choisiriez-vous chacun de ces modèles ?',
        solution: 'GR4J (global) :\n- Représentation : 1 seul bassin = 1 modèle sans spatialisation.\n- Données d\'entrée : pluie journalière, ETP journalière, débit observé (calage).\n- Paramètres : 4 paramètres libres seulement.\n- Applications : simulation des débits à l\'exutoire, calage rapide sur bassin jaugé, prévision des étiages, analyse des séquences historiques, évaluation de scénarios climatiques (avec générateur météo). Idéal pour petits à moyens bassins jaugés (< 5 000 km²).\nSWAT (distribué) :\n- Représentation : découpage en sous-bassins → URH (unités pente × sol × végétation).\n- Données d\'entrée : MNT, carte des sols, occupation des sols, météo spatialisée, pratiques agricoles.\n- Paramètres : des dizaines à centaines de paramètres.\n- Applications : impact des changements d\'occupation des sols sur les flux, flux de nitrates/pesticides, érosion et transport sédimentaire, diagnostics pollution diffuse, planification aménagement du territoire. Nécessite plusieurs années de données et un calage multi-variable (débit + qualité + sédiments) sur bassins bien documentés.'
      },
      {
        n: '4',
        enonce: 'Le RMSE d\'un modèle est de 4,5 m³/s sur une série dont Qobs_moy = 12 m³/s. Le NSE est de 0,78. Interprétez ces valeurs ensemble. Calculez ensuite l\'erreur relative moyenne (RMSE/Qobs_moy).',
        solution: 'RMSE = 4,5 m³/s : l\'erreur quadratique moyenne de simulation est de 4,5 m³/s, soit une erreur "typique" de ±4,5 m³/s par pas de temps simulé.\nErreur relative RMSE/Qobs_moy = 4,5/12 = 0,375 = 37,5 % : l\'erreur représente 37,5 % du débit moyen, ce qui est significatif mais acceptable pour un modèle hydrologique en conditions non-stationnaires.\nNSE = 0,78 → très satisfaisant (≥ 0,75). Le modèle explique 78 % de la variance des débits observés.\nInterprétation conjointe : le NSE de 0,78 indique une bonne reproduction de la variabilité inter-événements (la dynamique générale des crues et étiages est bien simulée), mais le RMSE de 37,5 % montre que les pointes de crue individuelles peuvent être mal reproduites en amplitude — ce qui est typique des modèles globaux conceptuels sur les crues flash. Pour améliorer, on calculerait le NSE-sqrt pour vérifier les étiages et on analyserait la distribution des résidus.'
      },
      {
        n: '5',
        enonce: 'Expliquez le protocole de split-sample test appliqué à GR4J sur une série de 40 ans (1984-2023). Définissez les périodes de calage et de validation, et dites quelles métriques (NSE, biais) on examinera en priorité.',
        solution: 'Split-sample test sur 40 ans (1984-2023) :\nDivision de la série en deux sous-périodes de 20 ans :\n- Période A : 1984-2003 (20 ans).\n- Période B : 2004-2023 (20 ans).\nExpérience 1 : calage sur A + validation sur B.\nExpérience 2 : calage sur B + validation sur A.\nProtocole de calage : optimiser les 4 paramètres GR4J (X1, X2, X3, X4) pour maximiser le NSE sur la période de calage, à l\'aide d\'un algorithme d\'optimisation (SCE-UA, algorithme génétique ou algorithme de Morris).\nMétriques à examiner en priorité :\n1. NSE sur les deux validations → doit être ≥ 0,65 (satisfaisant) pour les deux expériences.\n2. NSE-sqrt ou NSE-log → vérifier la reproduction des étiages (importante pour gestion quantitative).\n3. Biais relatif en validation → doit rester < ±5 % pour éviter une dérive systématique des volumes simulés.\n4. Stabilité des paramètres entre les deux calages : si X1 varie de 200 à 500 mm entre les expériences 1 et 2, le modèle est peut-être sur-paramétré ou la série a une non-stationnarité (modification des pratiques agricoles ou irrigation).'
      },
      {
        n: '6',
        enonce: 'Un bureau d\'études projette d\'utiliser GR4J forcé par les données de la projection climatique RCP 8.5 pour évaluer l\'évolution des étiages de la Dordogne à l\'horizon 2070. Identifiez les 3 principales sources d\'incertitude de cette démarche et proposez une façon de les quantifier.',
        solution: 'Sources d\'incertitude dans la chaîne modélisation hydrologique-impact :\n1. Incertitude du scénario climatique d\'émissions (RCP 4.5 vs RCP 8.5) : les deux scénarios donnent des projections très différentes en termes de température et précipitations à 2070. Solution : tester plusieurs scénarios (RCP 4.5 et RCP 8.5) et présenter les résultats comme une fourchette.\n2. Incertitude du modèle climatique régional (MCR) : différents modèles de circulation générale et de descente d\'échelle donnent des précipitations futures très différentes sur la France du Sud. Solution : utiliser l\'ensemble multi-modèle EURO-CORDEX (5-10 GCM × 5 RCM) et analyser la dispersion des résultats.\n3. Incertitude du modèle hydrologique (paramètres GR4J, non-stationnarité) : les paramètres calés en conditions actuelles peuvent ne plus être valides en 2070 si l\'occupation des sols, l\'ETP ou la dynamique de la végétation changent. Solution : validation différentielle sur des périodes contrastées (sèches vs humides) et test de sensibilité aux paramètres en conditions d\'ETP plus forte.'
      },
      {
        n: '7',
        enonce: 'L\'ETP calculée par la méthode de Oudin pour un bassin méditerranéen en juillet donne ETP = 6,8 mm/j. La pluie juillet est de 12 mm sur le mois. Calculez la pluie nette mensuelle (pluie - ETP×30). Que représente une pluie nette très négative pour le fonctionnement du réservoir sol dans GR4J ?',
        solution: 'ETP mensuelle = 6,8 mm/j × 30 j = 204 mm.\nPluie mensuelle = 12 mm.\nPluie nette = 12 - 204 = -192 mm/mois.\nInterprétation dans GR4J : quand la pluie nette est négative (demande évaporative > pluie), GR4J ne génère pas de pluie efficace. Au contraire, l\'ETP non satisfaite par la pluie puise dans le réservoir sol S, qui se vide progressivement. Si S = 350 mm au 1er juillet, il sera réduit de 192 mm (environ) → S_fin_juillet ≈ 158 mm, soit 45 % de la capacité maximale. Les processus de ruissellement de surface sont quasi nuls durant cette période ; le débit à l\'exutoire est entièrement soutenu par le vidage du réservoir de routage (nappe et écoulement hypodermique), représentant le débit de base estival. Cette situation est caractéristique de l\'été méditerranéen, expliquant les étiages sévères (QMNA5 souvent < 1 % du module annuel).'
      },
      {
        n: '8',
        enonce: 'Donnez la définition précise du Nash-Sutcliffe (NSE). Expliquez pourquoi un NSE de 0,60 obtenu en calage mais de 0,35 en validation est problématique. Comment diagnostiquer et corriger ce surajustement (overfitting) ?',
        solution: 'Définition NSE : NSE = 1 - [Σ(Qobs_i - Qsim_i)²] / [Σ(Qobs_i - Q̄obs)²]. Le numérateur est la somme des erreurs de simulation au carré ; le dénominateur est la variance totale des débits observés × n. NSE = 1 − (variance résiduelle / variance totale) = fraction de la variance expliquée par le modèle.\nProblème NSE(calage) = 0,60 > NSE(validation) = 0,35 : un écart aussi large (0,25) signale un surajustement sévère. Le modèle a été trop ajusté aux particularités de la période de calage (bruit de mesure, événements atypiques) au lieu des processus généraux du bassin. En validation sur une période différente, le modèle se trompe nettement plus souvent.\nDiagnostic et correction :\n1. Vérifier le nombre de paramètres libres : si > 4-6 pour GR4J, le modèle est sur-paramétré. Réduire au minimum physiquement justifié.\n2. Vérifier la qualité des données de calage (erreurs de mesure de pluie, lacunes, erreurs de jaugeage).\n3. Utiliser une fonction objectif multi-critère (NSE + NSE-log + Biais) pour forcer le modèle à reproduire les dynamiques à toutes les gammes de débit, pas seulement les pointes.\n4. Régularisation des paramètres : imposer des bornes physiquement cohérentes pour éviter que l\'optimiseur ne converge vers des valeurs sans sens physique.'
      }
    ]
  }

};
