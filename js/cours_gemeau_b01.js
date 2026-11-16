var GEMEAU_B01 = {

  'GEMEAU-001': {
    id: 'GEMEAU-001',
    titre: 'Grandeurs physiques, unités et conversions',
    fiche: {
      intro: 'Dans les métiers de l\'eau, chaque calcul mobilise des grandeurs physiques issues de disciplines variées : hydraulique, chimie, biologie, thermodynamique. Un technicien GEMEAU est quotidiennement confronté à des relevés exprimés en m³/h sur un compteur, en mg/L sur un rapport d\'analyse, ou en bars sur un manomètre. Maîtriser les unités et leurs conversions est une compétence fondamentale qui conditionne la fiabilité de tout dimensionnement ou diagnostic.',
      schema: `<svg viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;width:100%">
  <defs><marker id="a1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3z" fill="#475569"/></marker></defs>
  <rect width="280" height="155" fill="#f8fafc" rx="6"/>
  <text x="140" y="14" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="system-ui,sans-serif">Conversions essentielles — métiers de l'eau</text>
  <rect x="8" y="22" width="78" height="32" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.2"/>
  <text x="47" y="36" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8" font-family="system-ui,sans-serif">1 L/s</text>
  <text x="47" y="47" text-anchor="middle" font-size="8" fill="#1d4ed8" font-family="system-ui,sans-serif">litres/seconde</text>
  <rect x="102" y="22" width="78" height="32" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.2"/>
  <text x="141" y="36" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d" font-family="system-ui,sans-serif">3,6 m³/h</text>
  <text x="141" y="47" text-anchor="middle" font-size="8" fill="#15803d" font-family="system-ui,sans-serif">mètres cube/heure</text>
  <rect x="196" y="22" width="78" height="32" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
  <text x="235" y="36" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309" font-family="system-ui,sans-serif">86,4 m³/j</text>
  <text x="235" y="47" text-anchor="middle" font-size="8" fill="#b45309" font-family="system-ui,sans-serif">mètres cube/jour</text>
  <line x1="86" y1="38" x2="102" y2="38" stroke="#475569" stroke-width="1.5" marker-end="url(#a1)"/>
  <line x1="180" y1="38" x2="196" y2="38" stroke="#475569" stroke-width="1.5" marker-end="url(#a1)"/>
  <text x="94" y="34" text-anchor="middle" font-size="7.5" fill="#64748b" font-family="system-ui,sans-serif">×3,6</text>
  <text x="188" y="34" text-anchor="middle" font-size="7.5" fill="#64748b" font-family="system-ui,sans-serif">×24</text>
  <line x1="10" y1="68" x2="270" y2="68" stroke="#e2e8f0" stroke-width="1"/>
  <text x="140" y="82" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="system-ui,sans-serif">Pression</text>
  <rect x="8" y="90" width="78" height="32" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.2"/>
  <text x="47" y="104" text-anchor="middle" font-size="11" font-weight="bold" fill="#6d28d9" font-family="system-ui,sans-serif">1 bar</text>
  <text x="47" y="115" text-anchor="middle" font-size="8" fill="#6d28d9" font-family="system-ui,sans-serif">≈ 1 atm</text>
  <rect x="102" y="90" width="78" height="32" rx="4" fill="#fce7f3" stroke="#db2777" stroke-width="1.2"/>
  <text x="141" y="104" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d" font-family="system-ui,sans-serif">100 000 Pa</text>
  <text x="141" y="115" text-anchor="middle" font-size="8" fill="#be185d" font-family="system-ui,sans-serif">100 kPa</text>
  <rect x="196" y="90" width="78" height="32" rx="4" fill="#f1f5f9" stroke="#475569" stroke-width="1.2"/>
  <text x="235" y="104" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155" font-family="system-ui,sans-serif">10,2 mCE</text>
  <text x="235" y="115" text-anchor="middle" font-size="8" fill="#334155" font-family="system-ui,sans-serif">m col. d'eau</text>
  <line x1="86" y1="106" x2="102" y2="106" stroke="#475569" stroke-width="1.5" marker-end="url(#a1)"/>
  <line x1="180" y1="106" x2="196" y2="106" stroke="#475569" stroke-width="1.5" marker-end="url(#a1)"/>
  <text x="140" y="145" text-anchor="middle" font-size="8" fill="#94a3b8" font-family="system-ui,sans-serif">1 mg/L = 1 g/m³  ·  T(K) = T(°C) + 273,15</text>
</svg>`,
      sections: [
        {
          titre: '1. Le Système International d\'unités (SI)',
          texte: 'Le Système International d\'unités (SI) est le référentiel mondial adopté par la communauté scientifique et technique. Il repose sur sept unités de base indépendantes : le mètre (m) pour la longueur, le kilogramme (kg) pour la masse, la seconde (s) pour le temps, l\'ampère (A) pour l\'intensité électrique, le kelvin (K) pour la température thermodynamique, la mole (mol) pour la quantité de matière, et la candela (cd) pour l\'intensité lumineuse. Toutes les autres unités sont dites dérivées : le newton (N = kg·m/s²), le pascal (Pa = N/m² = kg/(m·s²)), le joule (J = N·m), le watt (W = J/s).\n\nPour les praticiens du secteur de l\'eau, les grandeurs les plus courantes sont le volume (m³, L), le débit volumique (m³/s, m³/h, L/s, L/h), la masse (kg, g, mg, µg), la concentration (kg/m³, g/L, mg/L, µg/L), la pression (Pa, kPa, bar, mbar), et la vitesse (m/s). La température est exprimée en degrés Celsius (°C) dans la pratique courante, bien que le SI utilise le kelvin ; la relation est T(K) = T(°C) + 273,15.\n\nLes préfixes multiplicateurs permettent d\'exprimer des ordres de grandeur très différents sans recourir à la notation scientifique. Les préfixes à maîtriser absolument sont : nano (n, ×10⁻⁹), micro (µ, ×10⁻⁶), milli (m, ×10⁻³), centi (c, ×10⁻²), kilo (k, ×10³), méga (M, ×10⁶), giga (G, ×10⁹). Ainsi, 1 mg/L = 1×10⁻³ g/L = 1×10⁻⁶ kg/L = 1×10⁻³ kg/m³, puisque 1 m³ = 1000 L.',
          sous_sections: [
            {
              titre: '1.1 Unités de base et unités dérivées',
              texte: 'Une unité dérivée s\'exprime comme un produit ou quotient d\'unités de base. Le pascal vaut 1 N/m², soit 1 kg/(m·s²). Le watt hydraulique représente une puissance : 1 W = 1 J/s = 1 N·m/s = 1 kg·m²/s³. Connaître la décomposition d\'une unité permet de vérifier l\'homogénéité d\'une formule avant tout calcul.'
            },
            {
              titre: '1.2 Les préfixes multiplicateurs courants',
              texte: 'Dans les analyses d\'eau, les concentrations en micropolluants sont exprimées en µg/L (microgrammes par litre), parfois appelées ppb (parties par milliard en masse). Les seuils réglementaires de l\'eau potable pour les pesticides sont de 0,1 µg/L par substance. La DCO (Demande Chimique en Oxygène) d\'eaux usées domestiques est typiquement de 300 à 600 mg/L, soit 300 à 600 g/m³.'
            }
          ]
        },
        {
          titre: '2. Unités spécifiques aux métiers de l\'eau',
          texte: 'Le secteur de l\'eau utilise des unités pratiques qui s\'écartent parfois du SI strict, mais qui sont normalisées par usage professionnel. Le débit est le plus souvent exprimé en m³/h pour les installations industrielles et en L/s pour les ouvrages hydrauliques. Pour les analyses de laboratoire, les concentrations sont en mg/L (équivalent g/m³). La pression est exprimée en bar dans les réseaux de distribution (1 bar = 10⁵ Pa = 10,2 m de colonne d\'eau). La turbidité est mesurée en NTU (Nephelometric Turbidity Unit), unité propre à ce secteur.\n\nLe débit spécifique d\'une nappe souterraine s\'exprime en L/(s·m) de rabattement lors d\'un essai de pompage. La charge polluante d\'une STEP est exprimée en kg de DCO/jour ou en Équivalents-Habitants (EH), un EH correspondant à 60 g de DBO5 par jour et par habitant. Ces unités hybrides sont légitimes dès lors qu\'elles permettent une communication claire entre professionnels.\n\nLes concentrations de gaz dissous (O₂, CO₂) sont couramment exprimées en mg/L ou en % de saturation. Une eau à 20°C est saturée en O₂ à environ 9,1 mg/L sous une atmosphère standard. Un taux de saturation de 80% correspond à 0,80 × 9,1 = 7,3 mg/L. Ces calculs sont critiques pour le pilotage de bassins d\'aération d\'une station d\'épuration.',
          sous_sections: [
            {
              titre: '2.1 Débits : m³/h, L/s et leur relation',
              texte: 'La relation entre les deux unités de débit les plus courantes est : 1 L/s = 3,6 m³/h. Pour passer de L/s à m³/h, multiplier par 3,6. Pour l\'inverse, diviser par 3,6. Exemple : un débit de 25 L/s correspond à 25 × 3,6 = 90 m³/h. Cette conversion doit être automatique pour un technicien GEMEAU.'
            },
            {
              titre: '2.2 Pression : bar, Pascal et mètre de colonne d\'eau',
              texte: 'La hauteur d\'eau équivalente à une pression est donnée par h = p / (ρg). Pour l\'eau à 20°C, ρ ≈ 998 kg/m³, g ≈ 9,81 m/s², donc 1 bar ≈ 10,2 mCE (mètres de colonne d\'eau). Les techniciens de réseau travaillent souvent en mCE car cela correspond directement à une différence de cote topographique. Une pression de service de 3 bars correspond à une charge hydraulique de 30,6 mCE.'
            }
          ]
        },
        {
          titre: '3. Conversion entre unités — méthode systématique',
          texte: 'La méthode de conversion la plus sûre consiste à multiplier par des fractions unitaires, c\'est-à-dire par des rapports dont le numérateur et le dénominateur ont la même valeur mais des unités différentes. On place l\'unité à éliminer au dénominateur et l\'unité souhaitée au numérateur.\n\nExemple : convertir 1440 m³/jour en L/s. On écrit : (1440 m³/j) × (1000 L / 1 m³) × (1 j / 86400 s) = 1440 × 1000 / 86400 L/s = 16,67 L/s. Cette méthode évite les erreurs de sens (×1000 ou ÷1000) en rendant le raisonnement explicite.\n\nPour les concentrations, la relation m/V = masse/volume rappelle que 1 g/m³ = 1 mg/L, car 1 m³ = 1000 L et 1 g = 1000 mg : les deux facteurs mille se compensent. Ce résultat est fondamental pour les analyses d\'eau : un technicien qui mesure 5 mg/L de NH₄⁺ sait immédiatement que cela représente 5 g/m³, soit 5 kg par 1000 m³ traités.',
          sous_sections: [
            {
              titre: '3.1 Tableau des conversions indispensables',
              texte: 'Conversions à mémoriser : 1 L/s = 3,6 m³/h = 86,4 m³/j ; 1 m³/h = 0,278 L/s ; 1 bar = 100 kPa = 10,2 mCE = 0,987 atm ; 1 mg/L = 1 g/m³ = 1 ppm massique (dans l\'eau) ; 1 µg/L = 1 ng/mL = 1 ppb ; T(K) = T(°C) + 273,15 ; 1 kWh = 3 600 000 J = 3,6 MJ.'
            }
          ]
        },
        {
          titre: '4. Homogénéité des formules et analyse dimensionnelle',
          texte: 'Le principe d\'homogénéité stipule que dans une formule correcte, les deux membres ont les mêmes dimensions. Vérifier l\'homogénéité est une étape obligatoire avant tout calcul : si les dimensions ne correspondent pas, la formule est fausse ou mal employée.\n\nPrenons la formule de la perte de charge régulière de Darcy-Weisbach : Δh = λ × (L/D) × (V²/2g). Vérifions les dimensions : [m] = [sans dimension] × ([m]/[m]) × ([m²/s²] / [m/s²]) = [m]. La formule est homogène. Si l\'on avait oublié le facteur 2g au dénominateur, on obtiendrait [m²] au lieu de [m] : la formule serait incohérente.\n\nL\'analyse dimensionnelle permet aussi de retrouver la forme d\'une loi inconnue. Par exemple, on sait que le débit Q [m³/s] dépend de la vitesse V [m/s] et de la section S [m²]. La seule combinaison dimensionnellement correcte est Q = V × S, ce qui est bien l\'équation de continuité. Cette démarche est particulièrement utile lors de la rédaction de rapports techniques où une formule doit être appliquée dans des unités non SI.',
          sous_sections: [
            {
              titre: '4.1 Application : vérification d\'une formule de débit',
              texte: 'La formule de Manning-Strickler pour un canal : Q = K × S × R^(2/3) × i^(1/2). Dimensions : [m³/s] = [m^(1/3)/s] × [m²] × [m^(2/3)] × [sans dimension] = [m^(1/3+2+2/3)/s] = [m³/s]. La formule est homogène, à condition que K soit exprimé en m^(1/3)/s (coefficient de Strickler, typiquement 50 à 80 m^(1/3)/s pour des canaux courants).'
            }
          ]
        }
      ],
      points: [
        'Le SI comporte 7 unités de base ; toutes les autres sont dérivées',
        '1 L/s = 3,6 m³/h = 86,4 m³/j — conversion à automatiser',
        '1 bar = 100 000 Pa = 10,2 mCE (mètres de colonne d\'eau)',
        '1 mg/L = 1 g/m³ : les deux facteurs 1000 se compensent',
        'La méthode des fractions unitaires garantit la cohérence des conversions',
        'Tout calcul doit commencer par vérifier l\'homogénéité dimensionnelle de la formule',
        'Les préfixes µ (×10⁻⁶) et m (×10⁻³) distinguent µg/L de mg/L : facteur 1000 entre les deux',
        'T(K) = T(°C) + 273,15 — essentiel pour les calculs thermodynamiques',
        '0°C = 273,15 K : l\'eau gèle à 273,15 K sous 1 atm',
        'Un EH (Équivalent-Habitant) = 60 g DBO5/j — sert à dimensionner les STEP'
      ],
      formules: [
        'Conversion L/s → m³/h : Q[m³/h] = Q[L/s] × 3,6',
        'Pression en mCE : h[mCE] = p[Pa] / (ρ × g) ; ρ = 1000 kg/m³, g = 9,81 m/s²',
        'Équivalence concentration : 1 mg/L = 1 g/m³',
        'Température absolue : T[K] = T[°C] + 273,15',
        'Conversion m³/j → L/s : Q[L/s] = Q[m³/j] / 86,4',
        'Pression en bars : p[bar] = p[Pa] / 100 000'
      ],
      retenir: 'Système International (7 unités de base) · 1 L/s = 3,6 m³/h · 1 bar = 10,2 mCE · 1 mg/L = 1 g/m³ · Fractions unitaires pour convertir · Homogénéité dimensionnelle obligatoire'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un forage alimente un château d\'eau à un débit de 144 m³/h. Exprimer ce débit en L/s et en m³/j.',
        solution: 'Q = 144 m³/h.\n1) En L/s : Q = 144 / 3,6 = 40 L/s\n2) En m³/j : Q = 144 × 24 = 3 456 m³/j\nVérification : 40 L/s × 86 400 s/j / 1000 = 3 456 m³/j ✓'
      },
      {
        n: '2',
        enonce: 'Un manomètre indique 4,5 bars à l\'entrée d\'une station. Convertir cette pression en Pa, en kPa et en mCE (ρ = 1000 kg/m³, g = 9,81 m/s²).',
        solution: '1) En Pa : p = 4,5 × 100 000 = 450 000 Pa\n2) En kPa : p = 450 kPa\n3) En mCE : h = p / (ρg) = 450 000 / (1000 × 9,81) = 45,87 mCE\nNote : la règle approximative 1 bar ≈ 10,2 mCE donne 4,5 × 10,2 = 45,9 mCE ≈ même résultat'
      },
      {
        n: '3',
        enonce: 'Une analyse d\'eau révèle une concentration en nitrates de 45 mg/L de NO₃⁻. Exprimer cette valeur en g/m³, en kg/m³ et en µg/L.',
        solution: '1) En g/m³ : 45 mg/L = 45 g/m³ (car 1 mg/L = 1 g/m³)\n2) En kg/m³ : 45 g/m³ × (1 kg / 1000 g) = 0,045 kg/m³\n3) En µg/L : 45 mg/L × (1000 µg / 1 mg) = 45 000 µg/L\nLa valeur limite pour l\'eau potable est 50 mg/L : cette eau est conforme mais proche du seuil.'
      },
      {
        n: '4',
        enonce: 'Une STEP traite 2 500 m³/j avec une DCO entrée de 420 mg/L et une DCO sortie de 35 mg/L. Calculer la charge polluante éliminée en kg DCO/j et le rendement d\'épuration.',
        solution: 'Charge entrée : 420 mg/L × 1 g/m³ par mg/L × 2 500 m³/j = 1 050 kg DCO/j\nCharge sortie : 35 × 2 500 / 1 000 = 87,5 kg DCO/j\nCharge éliminée : 1 050 - 87,5 = 962,5 kg DCO/j\nRendement : η = (420 - 35) / 420 × 100 = 385/420 × 100 = 91,7 %'
      },
      {
        n: '5',
        enonce: 'Convertir 1 440 m³/j en L/s en utilisant la méthode des fractions unitaires.',
        solution: 'Q = 1 440 m³/j × (1000 L / 1 m³) × (1 j / 24 h) × (1 h / 3600 s)\n= 1 440 × 1 000 / (24 × 3 600) L/s\n= 1 440 000 / 86 400 L/s\n= 16,67 L/s'
      },
      {
        n: '6',
        enonce: 'Un captage souterrain a une température de 12°C. Exprimer cette température en kelvin et préciser si l\'eau peut être considérée à densité 1,000 kg/L pour les calculs courants.',
        solution: 'T(K) = 12 + 273,15 = 285,15 K\nÀ 12°C, la masse volumique de l\'eau est ρ ≈ 999,5 kg/m³ ≈ 0,9995 kg/L.\nL\'approximation ρ = 1 000 kg/m³ introduit une erreur de 0,05 %, négligeable pour les calculs hydrauliques courants. Elle est acceptable.'
      },
      {
        n: '7',
        enonce: 'Vérifier l\'homogénéité dimensionnelle de la formule Q = C × S × √(2gΔh), où C est sans dimension, S en m², g en m/s², Δh en m.',
        solution: '[Q] = [m³/s] ?\n[C × S × √(2gΔh)] = [1] × [m²] × √([m/s²] × [m]) = [m²] × √([m²/s²]) = [m²] × [m/s] = [m³/s] ✓\nLa formule est homogène. Il s\'agit de la formule de débit à travers un orifice (Torricelli généralisée).'
      },
      {
        n: '8',
        enonce: 'Un réservoir de 500 m³ se remplit à un débit de 18 m³/h. Exprimer le débit en L/min, calculer le temps de remplissage en heures et en minutes.',
        solution: 'Débit en L/min : 18 m³/h × 1000 L/m³ / 60 min/h = 300 L/min\nTemps de remplissage : t = V / Q = 500 m³ / 18 m³/h = 27,78 h = 27 h 47 min\n(0,78 h × 60 min/h = 46,7 min ≈ 47 min)'
      }
    ]
  },

  'GEMEAU-002': {
    id: 'GEMEAU-002',
    titre: 'Proportionnalité, pourcentages et bilans simples',
    fiche: {
      intro: 'Le technicien de l\'eau réalise en permanence des bilans : bilan hydraulique d\'un réseau, bilan de masse sur une filière de traitement, bilan énergétique d\'une station de pompage. Ces calculs reposent sur la proportionnalité et les pourcentages, des outils mathématiques simples mais dont la maîtrise conditionne la qualité des rapports d\'exploitation et des diagnostics.',
      schema: `<svg viewBox="0 0 260 112" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="mb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3z" fill="#475569"/></marker></defs>
  <rect width="260" height="112" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Bilan de masse — procédé de traitement</text>
  <rect x="85" y="28" width="90" height="38" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="130" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8" font-family="sans-serif">Procédé</text>
  <line x1="10" y1="47" x2="85" y2="47" stroke="#059669" stroke-width="2" marker-end="url(#mb)"/>
  <text x="47" y="42" text-anchor="middle" font-size="8" fill="#059669" font-family="sans-serif">Qe · Ce</text>
  <line x1="175" y1="47" x2="248" y2="47" stroke="#2563eb" stroke-width="2" marker-end="url(#mb)"/>
  <text x="212" y="42" text-anchor="middle" font-size="8" fill="#2563eb" font-family="sans-serif">Qs · Cs</text>
  <line x1="130" y1="66" x2="130" y2="92" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#mb)"/>
  <text x="145" y="85" font-size="7.5" fill="#94a3b8" font-family="sans-serif">boues</text>
  <text x="130" y="106" text-anchor="middle" font-size="8" fill="#475569" font-family="sans-serif">η = (Ce − Cs) / Ce × 100 %</text>
</svg>`,
      sections: [
        {
          titre: '1. La proportionnalité et la règle de trois',
          texte: 'Deux grandeurs sont directement proportionnelles si leur rapport est constant. Si y = k × x avec k constant (coefficient de proportionnalité), alors augmenter x d\'un facteur f multiplie y par le même facteur f. En hydraulique, le débit est proportionnel à la vitesse d\'écoulement pour une section constante : Q = V × S, donc si V double, Q double.\n\nLa règle de trois est la mise en oeuvre pratique de la proportionnalité. Si pour 100 L d\'eau il faut 0,4 mg de chlore actif, combien faut-il pour 25 000 L ? Réponse : 0,4 × 25 000 / 100 = 100 mg. La règle de trois est utilisée dans le dosage des réactifs chimiques, le calcul des surfaces de filtration, et l\'interpolation de valeurs sur les courbes de pompe.\n\nAttention : la proportionnalité inverse se rencontre aussi. La vitesse dans une conduite est inversement proportionnelle à la section : V = Q/S. Si la section est divisée par 4 (diamètre divisé par 2), la vitesse est multipliée par 4. Cette relation est fondamentale pour comprendre les effets des variations de diamètre sur les vitesses d\'écoulement et donc sur les pertes de charge.',
          sous_sections: [
            {
              titre: '1.1 Proportionnalité directe et inverse dans les métiers de l\'eau',
              texte: 'Proportionnalité directe : concentration × volume = masse de polluant (si le volume augmente, la masse augmente proportionnellement, à concentration constante). Proportionnalité inverse : vitesse × section = débit constant (si la section diminue, la vitesse augmente de façon inverse). Ces deux types se distinguent par la forme de la relation : y = kx (directe) vs y = k/x (inverse).'
            }
          ]
        },
        {
          titre: '2. Pourcentages, rendements et abattements',
          texte: 'Le pourcentage exprime un rapport en centièmes : p% = p/100. Dans les traitements de l\'eau, le rendement d\'épuration mesure l\'efficacité d\'un procédé : η = (Centée - Csortie) / Centée × 100. Un traitement de coagulation-floculation atteignant 80% d\'abattement de turbidité passe d\'une turbidité de 50 NTU à 50 × (1 - 0,80) = 10 NTU en sortie.\n\nL\'abattement est parfois exprimé en unités logarithmiques (log d\'abattement ou LRV, Log Reduction Value). Un abattement de 3 log signifie une réduction de 10³ = 1000 fois, soit un rendement de 99,9%. Pour les pathogènes, les réglementations fixent des objectifs en log d\'abattement : la filière eau potable doit assurer au minimum 4 log de réduction virale, soit 99,99% d\'élimination.\n\nLes pertes représentent aussi un pourcentage à maîtriser. Un réseau AEP avec 20% de pertes distribuera 80% du volume mis en distribution. Pour livrer 1 000 m³/j à l\'usager, il faut produire 1 000 / 0,80 = 1 250 m³/j, soit 250 m³/j de fuites. Ce calcul en retour (diviser par le taux d\'efficacité) est très fréquent dans le pilotage de l\'exploitation.',
          sous_sections: [
            {
              titre: '2.1 Rendement, efficacité et taux de perte',
              texte: 'Formule générale du rendement : η = (valeur utile / valeur totale) × 100. Pour un pompage : η_pompe = (P_hydraulique / P_absorbée) × 100. Pour une filière de potabilisation : η_élimination = (C_entrée - C_sortie) / C_entrée × 100. Le complément à 100 donne le taux de perte ou le taux de fuite, selon le contexte.'
            }
          ]
        },
        {
          titre: '3. Bilans de masse sur une installation',
          texte: 'Un bilan de masse applique le principe de conservation de la masse : dans un système en régime permanent, la somme des masses entrantes égale la somme des masses sortantes. Pour une station d\'épuration simple : flux entrant = flux épuré + flux boues + flux rejet atmosphérique. En négligeant les boues et l\'azote gazeux dans un premier temps : m_entrée = m_sortie + m_éliminée.\n\nPour une unité de mélange (dilution ou ajout de réactif), le bilan de masse s\'écrit : Q1 × C1 + Q2 × C2 = (Q1 + Q2) × C_mélange. Cette formule sert à calculer la concentration d\'un mélange de deux flux (eau brute + eau recyclée, eau de forage + eau de rivière, etc.).\n\nPour un réacteur de type CSTR (réacteur parfaitement mélangé) en régime permanent : Q × C_entrée = Q × C_sortie + r × V, où r est la vitesse de réaction [mg/(L·s)] et V le volume du réacteur. En biologie des eaux, la loi du premier ordre donne : r = k × C_sortie, ce qui conduit à : C_sortie = C_entrée / (1 + k × τ), où τ = V/Q est le temps de séjour hydraulique.',
          sous_sections: [
            {
              titre: '3.1 Bilan sur un bassin d\'aération',
              texte: 'Pour un bassin d\'aération en régime permanent avec recirculation des boues, le bilan de DCO s\'écrit : Q × DCO_entrée = Q × DCO_sortie + (DCO consommée par la biomasse). La DCO consommée est égale au flux de DCO éliminée. En pratique, on mesure DCO_entrée et DCO_sortie, on calcule le flux éliminé, puis on en déduit les besoins en oxygène théoriques : 1 kg DCO éliminée ≈ 1 kg O₂ consommé.'
            }
          ]
        },
        {
          titre: '4. Concentration et dilution',
          texte: 'Diluer une solution consiste à ajouter un solvant (l\'eau) sans ajouter de soluté, ce qui diminue la concentration. La loi de conservation de la masse de soluté impose : C1 × V1 = C2 × V2, où V2 = V1 + V_eau_ajoutée. Cette relation est fondamentale en chimie analytique (préparation d\'étalons) et en exploitation (ajustement de la concentration d\'un réactif).\n\nPour préparer 10 L d\'une solution à 5 mg/L à partir d\'une solution mère à 1 000 mg/L : V1 = C2 × V2 / C1 = 5 × 10 000 / 1 000 = 50 mL. On prélève 50 mL de la solution mère et on complète à 10 L avec de l\'eau distillée. Le facteur de dilution est F = C1/C2 = 1000/5 = 200, soit une dilution au 1/200.\n\nEn réseau AEP, le mélange de deux sources d\'eau de qualités différentes est calculé par bilan de masse. Si l\'eau A (100 mg/L NO₃⁻, débit 30 m³/h) est mélangée à l\'eau B (20 mg/L NO₃⁻, débit 70 m³/h), la concentration du mélange est : C_M = (30×100 + 70×20) / (30+70) = (3000 + 1400) / 100 = 44 mg/L NO₃⁻. Cette valeur est inférieure à la limite de 50 mg/L.',
          sous_sections: [
            {
              titre: '4.1 Facteur de dilution et préparation de solutions',
              texte: 'Le facteur de dilution F = C1/C2 indique combien de fois la concentration a été divisée. Une dilution 1/10 donne F = 10, une dilution 1/100 donne F = 100. Pour préparer une dilution 1/F à partir d\'un volume final Vf : prélever Vf/F du stock concentré et compléter à Vf avec le solvant. Cette règle est quotidiennement utilisée en laboratoire d\'analyse des eaux.'
            }
          ]
        }
      ],
      points: [
        'La règle de trois exploite la proportionnalité directe : y = k × x',
        'Rendement η = (C_entrée - C_sortie) / C_entrée × 100 %',
        '1 log d\'abattement = facteur 10 de réduction ; 3 log = 99,9 % d\'élimination',
        'Bilan de masse en régime permanent : flux_entrant = flux_sortant + flux_éliminé',
        'Dilution : C1 × V1 = C2 × V2 (conservation de la masse de soluté)',
        'Mélange : C_M = (Q1×C1 + Q2×C2) / (Q1 + Q2)',
        'Taux de perte réseau = (V_produit - V_facturé) / V_produit × 100 %',
        'Temps de séjour hydraulique : τ = V_réacteur / Q_débit',
        'Pour trouver la production nécessaire : P = Besoin / (1 - taux de perte)',
        '1 EH = 60 g DBO5/j : base de dimensionnement des STEP'
      ],
      formules: [
        'Règle de trois : x/a = y/b → y = b × x / a',
        'Rendement d\'épuration : η[%] = (C_e - C_s) / C_e × 100 ; C_e = concentration entrée, C_s = sortie',
        'Dilution : C1 × V1 = C2 × V2',
        'Mélange de flux : C_M = (Q1×C1 + Q2×C2) / (Q1 + Q2) → [même unité que C1, C2]',
        'Temps de séjour : τ[h] = V[m³] / Q[m³/h]',
        'Charge polluante : Flux[kg/j] = C[mg/L] × Q[m³/j] / 1000'
      ],
      retenir: 'Proportionnalité directe (y=kx) et inverse (y=k/x) · Rendement = abattement en % · Bilan de masse : entrant = sortant + éliminé · Dilution : C1V1 = C2V2 · Mélange : moyenne pondérée par les débits · Taux de perte réseau = (produit - facturé) / produit'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un floculant est dosé à raison de 15 mg/L dans une station de potabilisation traitant 480 m³/h. Quelle quantité de floculant (en kg) faut-il prévoir pour 24 heures de fonctionnement ?',
        solution: 'Volume traité en 24 h : V = 480 × 24 = 11 520 m³\nMasse floculant = C × V = 15 mg/L × 11 520 m³\n= 15 g/m³ × 11 520 m³ = 172 800 g = 172,8 kg'
      },
      {
        n: '2',
        enonce: 'Une STEP a une DCO entrante de 380 mg/L et une DCO sortante de 42 mg/L pour un débit de 1 200 m³/j. Calculer le rendement d\'épuration et le flux polluant éliminé.',
        solution: 'Rendement : η = (380 - 42) / 380 × 100 = 338/380 × 100 = 88,9 %\nFlux éliminé : (380 - 42) mg/L × 1 200 m³/j / 1 000 = 338 × 1 200 / 1 000 = 405,6 kg DCO/j'
      },
      {
        n: '3',
        enonce: 'Préparer 2 L d\'une solution de chlore à 200 mg/L à partir d\'une solution mère d\'hypochlorite à 48 000 mg/L (eau de Javel concentrée à 4,8%). Quel volume de solution mère utiliser ?',
        solution: 'C1×V1 = C2×V2\nV1 = C2 × V2 / C1 = 200 × 2000 / 48 000 = 400 000 / 48 000 = 8,33 mL\nOn prélève 8,33 mL de solution mère et on complète à 2 L avec de l\'eau distillée.\nFacteur de dilution : F = 48 000 / 200 = 240'
      },
      {
        n: '4',
        enonce: 'Un réseau AEP distribue 2 800 m³/j pour une production de 3 500 m³/j. Calculer le taux de perte et estimer le volume de fuites annuel.',
        solution: 'Taux de perte = (3 500 - 2 800) / 3 500 × 100 = 700/3 500 × 100 = 20 %\nVolume fuites/an = 700 m³/j × 365 = 255 500 m³/an ≈ 255 500 m³/an\nCe réseau perd 1/5 de sa production, ce qui est élevé (objectif < 15 % pour les bons réseaux).'
      },
      {
        n: '5',
        enonce: 'Une source (Q1 = 50 m³/h, nitrates = 8 mg/L) est mélangée à un forage (Q2 = 30 m³/h, nitrates = 42 mg/L). La concentration en nitrates du mélange est-elle conforme à la valeur seuil de 50 mg/L ?',
        solution: 'C_M = (50×8 + 30×42) / (50+30) = (400 + 1 260) / 80 = 1 660/80 = 20,75 mg/L\nLa concentration est bien inférieure à 50 mg/L. Ce mélange est conforme.\nRemarque : le forage seul est conforme aussi (42 < 50 mg/L), mais le mélange abaisse encore davantage la teneur en nitrates.'
      },
      {
        n: '6',
        enonce: 'Une station d\'UV doit abattre un germe avec un objectif de 4 log de réduction. Quelle est la concentration résiduelle si l\'entrée est de 10 000 UFC/100mL ?',
        solution: '4 log d\'abattement = réduction par 10⁴ = 10 000\nConcentration sortie = 10 000 / 10 000 = 1 UFC/100 mL\nAlternativement : rendement = 100 × (1 - 10⁻⁴) = 99,99 %\nC_sortie = 10 000 × (1 - 0,9999) = 10 000 × 0,0001 = 1 UFC/100 mL ✓'
      },
      {
        n: '7',
        enonce: 'Un bassin d\'aération de 2 400 m³ est alimenté par un débit de 1 200 m³/j. Calculer le temps de séjour hydraulique τ en heures.',
        solution: 'τ = V / Q = 2 400 m³ / (1 200 m³/j) = 2 j = 48 h\nCe temps de séjour est typique d\'un traitement par boues activées en faible charge (>12 h) permettant une nitrification poussée.'
      },
      {
        n: '8',
        enonce: 'Un filtre à sable doit traiter 600 m³/h. La vitesse de filtration maximale est 8 m/h. Calculer la surface de filtration nécessaire, puis le nombre de filtres de 25 m² à installer.',
        solution: 'Surface totale = Q / V_filtration = 600 m³/h / 8 m/h = 75 m²\nNombre de filtres = 75 / 25 = 3 filtres\nNota : en pratique on prévoit un filtre de réserve (n+1), soit 4 filtres, pour permettre les lavages sans interrompre la production.'
      }
    ]
  },

  'GEMEAU-003': {
    id: 'GEMEAU-003',
    titre: 'Algèbre et résolution d\'équations techniques',
    fiche: {
      intro: 'Les équations algébriques sont l\'outil de base du dimensionnement hydraulique. Que ce soit pour isoler un diamètre dans la formule de Manning-Strickler, calculer la hauteur manométrique totale d\'un système de pompage, ou déterminer la dose de réactif optimale, le technicien GEMEAU doit être capable de manipuler des formules, d\'isoler des inconnues et de résoudre des systèmes d\'équations simples.',
      schema: `<svg viewBox="0 0 260 118" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <rect width="260" height="118" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Isolation de variable — Manning-Strickler</text>
  <rect x="10" y="22" width="240" height="22" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
  <text x="130" y="37" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155" font-family="sans-serif">Q = K · S · Rh²&#x2F;³ · i¹&#x2F;²</text>
  <text x="130" y="57" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">▼ isoler K :</text>
  <rect x="40" y="62" width="180" height="20" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.2"/>
  <text x="130" y="76" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d" font-family="sans-serif">K = Q / (S · Rh²&#x2F;³ · i¹&#x2F;²)</text>
  <text x="130" y="96" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">▼ isoler i :</text>
  <rect x="40" y="100" width="180" height="14" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
  <text x="130" y="111" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309" font-family="sans-serif">i = [ Q / (K · S · Rh²&#x2F;³) ]²</text>
</svg>`,
      sections: [
        {
          titre: '1. Manipulation et isolement d\'une variable dans une formule',
          texte: 'Isoler une variable consiste à la placer seule d\'un côté de l\'égalité, en appliquant les mêmes opérations aux deux membres. Règle fondamentale : toute opération effectuée sur un membre doit être effectuée sur l\'autre. Les quatre opérations de base s\'inversent ainsi : addition ↔ soustraction, multiplication ↔ division, puissance n ↔ racine n-ième, exponentielle ↔ logarithme.\n\nExemple pratique — isoler le diamètre dans la formule des pertes de charge de Darcy-Weisbach : Δh = λ × (L/D) × (V²/2g). On veut D. On isole : D = λ × L × V² / (2g × Δh). Mais V = Q/(πD²/4) dépend aussi de D, ce qui complique le calcul. En pratique, on remplace V par Q/S et on résout par itérations ou par abaque.\n\nAutre exemple — la formule de Manning-Strickler : Q = K × S × R^(2/3) × i^(1/2). Pour calculer le coefficient de Strickler K connaissant Q, S, R et i mesurés : K = Q / (S × R^(2/3) × i^(1/2)). Cette opération est réalisée lors de la calibration d\'un cours d\'eau à partir de mesures de terrain.',
          sous_sections: [
            {
              titre: '1.1 Règles de transformation d\'une équation',
              texte: 'Si a = b × c, alors b = a/c et c = a/b. Si a = b + c, alors b = a - c. Si a = b^n, alors b = a^(1/n). Si a = e^(bx), alors bx = ln(a), donc x = ln(a)/b. Ces transformations s\'appliquent aux formules hydrauliques, chimiques et biologiques de façon identique.'
            }
          ]
        },
        {
          titre: '2. Équations du premier et second degré',
          texte: 'Une équation du premier degré en x s\'écrit ax + b = 0, avec solution x = -b/a. Cette forme se rencontre dans les calculs de mélange, de bilans, et d\'interpolation. Par exemple, trouver la dose de chaux d\'ajustement pour passer d\'un pH de 7,2 à 7,8 mobilise ce type d\'équation (la neutralisation est une réaction du premier ordre en concentration de réactif).\n\nUne équation du second degré ax² + bx + c = 0 admet deux solutions : x = (-b ± √(b²-4ac)) / (2a). Le discriminant Δ = b²-4ac détermine le nombre de solutions réelles. En hydraulique, le second degré apparaît dans le calcul du tirant d\'eau normal dans un canal ou dans la détermination du nombre de Froude critique.\n\nExemple : dans une filière membranaire, la relation entre pression transmembranaire (PTM) et flux J est : J = A × PTM - B × J² (saturation membranaire), ce qui conduit à une équation du second degré en J à résoudre pour trouver le flux optimal.',
          sous_sections: [
            {
              titre: '2.1 Résolution d\'une équation du second degré : méthode et exemples',
              texte: 'Pour ax² + bx + c = 0 : calculer Δ = b² - 4ac. Si Δ > 0 : deux solutions réelles x1,2 = (-b ± √Δ) / (2a). Si Δ = 0 : solution double x = -b/(2a). Si Δ < 0 : pas de solution réelle (le problème physique n\'a pas de solution dans les conditions données). En hydraulique, on retient la solution physiquement admissible (positive, inférieure au diamètre, etc.).'
            }
          ]
        },
        {
          titre: '3. Systèmes d\'équations à deux inconnues',
          texte: 'Un système de deux équations à deux inconnues se résout par substitution ou par combinaison linéaire. La substitution isole une variable dans la première équation et la substitue dans la seconde. La combinaison ajoute ou soustrait les équations pour éliminer une variable.\n\nApplication en hydraulique : dans un réseau ramifié, les débits Q1 et Q2 dans deux conduites parallèles vérifient Q_total = Q1 + Q2 (bilan de débit) et Δh1 = Δh2 (équipartition des pertes de charge entre branches parallèles). Ces deux équations à deux inconnues permettent de calculer la répartition des débits.\n\nApplication en chimie de l\'eau : la neutralisation d\'une eau acide nécessite de résoudre un système impliquant la concentration en acide ajouté et le volume d\'eau à traiter. Si l\'eau A (pH acide) et l\'eau B (pH alcalin) sont mélangées dans des proportions q1 et q2 (avec q1+q2=1) pour obtenir un pH cible, les deux équations permettent de calculer q1 et q2.',
          sous_sections: [
            {
              titre: '3.1 Méthode par substitution',
              texte: 'Système : {Q1 + Q2 = Q_total ; R1 × Q1² = R2 × Q2²}. De la 2e équation : Q1/Q2 = √(R2/R1). Soit Q2 = Q1 × √(R1/R2). Substitution dans la 1re : Q1 × (1 + √(R1/R2)) = Q_total. On résout pour Q1, puis Q2. Cette approche est utilisée pour les réseaux hydrauliques à branches parallèles.'
            }
          ]
        },
        {
          titre: '4. Application aux formules hydrauliques clés',
          texte: 'La formule de Bernoulli entre deux points 1 et 2 d\'un écoulement : p1/(ρg) + V1²/(2g) + z1 = p2/(ρg) + V2²/(2g) + z2 + Δh. Pour calculer la pression en 2 connaissant tout le reste : p2 = p1 + ρg × [(V1²-V2²)/(2g) + (z1-z2) - Δh]. Cette formule est utilisée pour calculer la pression minimale en bout de réseau ou la charge disponible après une perte de charge singulière.\n\nLa formule de Manning-Strickler pour un canal en charge partielle Q = K × S × R^(2/3) × i^(1/2) nécessite parfois de trouver le tirant d\'eau y connaissant Q, K et la pente i. La section mouillée S et le rayon hydraulique R dépendent de y selon la géométrie du canal. Pour un canal rectangulaire de largeur b : S = b×y, R = b×y/(b+2y). La substitution donne une équation implicite en y que l\'on résout par itérations (méthode de Newton ou tableau de valeurs).',
          sous_sections: [
            {
              titre: '4.1 Résolution itérative — méthode de Newton-Raphson simplifiée',
              texte: 'Pour f(y) = 0 (équation implicite) : partir d\'une valeur initiale y0 raisonnable, calculer f(y0), si |f(y0)| > ε (tolérance), corriger y1 = y0 - f(y0)/f\'(y0) et recommencer. Pour Manning-Strickler avec canal trapézoïdal, 3 à 5 itérations suffisent à atteindre une précision de 1 mm sur le tirant d\'eau.'
            }
          ]
        }
      ],
      points: [
        'Isoler une variable : appliquer l\'opération inverse des deux côtés de l\'égalité',
        'Équation du 1er degré : x = -b/a (une seule solution)',
        'Équation du 2d degré : discriminant Δ = b²-4ac détermine le nombre de solutions',
        'Système 2×2 : substitution ou combinaison linéaire pour éliminer une inconnue',
        'Manning-Strickler : Q = K × S × R^(2/3) × i^(1/2) — isoler K ou i est direct ; isoler y est itératif',
        'Bernoulli : somme des charges = constante le long d\'une ligne de courant (sans pertes)',
        'En cas de deux solutions mathématiques, retenir la solution physiquement admissible',
        'Vérifier toujours le résultat en réinjectant dans la formule de départ',
        'Δh = λ × L/D × V²/(2g) — la Darcy-Weisbach relie géométrie, vitesse et perte de charge',
        '1 m d\'eau = ρgh = 9 810 Pa ≈ 9 810 N/m²'
      ],
      formules: [
        'Équation 2d degré : x = (-b ± √(b² - 4ac)) / (2a) ; Δ = b² - 4ac',
        'Manning-Strickler : Q = K × S × R^(2/3) × i^(1/2) → K [m^(1/3)/s], R = S/P_mouillé [m]',
        'Bernoulli généralisé : p1/(ρg) + V1²/(2g) + z1 = p2/(ρg) + V2²/(2g) + z2 + Σ Δh',
        'Darcy-Weisbach : Δh = λ × (L/D) × (V²/2g) → [m] ; λ sans dimension, L et D en m',
        'Vitesse en conduite : V = Q / S = Q / (π D² / 4) → [m/s]',
        'Rayon hydraulique : R_h = S_mouillée / P_mouillé → [m]'
      ],
      retenir: 'Isoler une variable = opération inverse des deux membres · Discriminant Δ : positif = 2 solutions · Manning-Strickler : Q, K, S, R, i · Bernoulli : conservation de l\'énergie · Itérations pour équations implicites · Toujours vérifier la solution'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Dans la formule de débit Q = K × S × R^(2/3) × i^(1/2), un canal rectangulaire (b = 1,5 m, y = 0,8 m, K = 60 m^(1/3)/s, i = 0,001) débite. Calculer Q.',
        solution: 'S = 1,5 × 0,8 = 1,2 m²\nP_mouillé = 1,5 + 2×0,8 = 3,1 m\nR = S/P = 1,2/3,1 = 0,387 m\nR^(2/3) = 0,387^(2/3) = 0,531\ni^(1/2) = 0,001^(1/2) = 0,03162\nQ = 60 × 1,2 × 0,531 × 0,03162 = 60 × 1,2 × 0,01679 = 1,209 m³/s'
      },
      {
        n: '2',
        enonce: 'Isoler la pente i dans la formule de Manning-Strickler. Pour Q = 2,5 m³/s, K = 55, S = 3 m², R = 0,6 m, calculer i.',
        solution: 'Q = K × S × R^(2/3) × i^(1/2)\ni^(1/2) = Q / (K × S × R^(2/3))\n= 2,5 / (55 × 3 × 0,6^(2/3))\n= 2,5 / (55 × 3 × 0,711) = 2,5 / 117,3 = 0,02131\ni = 0,02131² = 4,54×10⁻⁴ ≈ 0,000454\nLa pente du canal est de 0,454 mm/m = 0,45 ‰'
      },
      {
        n: '3',
        enonce: 'Calculer la pression p2 en sortie d\'une conduite avec Bernoulli. Données : p1 = 3,5 bar, V1 = 0,8 m/s, z1 = 15 m, V2 = 2,0 m/s, z2 = 12 m, Δh = 0,3 m, ρ = 1000 kg/m³.',
        solution: 'Bernoulli : p2/(ρg) = p1/(ρg) + V1²/(2g) - V2²/(2g) + z1 - z2 - Δh\np1/(ρg) = 350 000/(1000×9,81) = 35,68 m\nV1²/(2g) = 0,64/(19,62) = 0,033 m\nV2²/(2g) = 4,0/(19,62) = 0,204 m\np2/(ρg) = 35,68 + 0,033 - 0,204 + 15 - 12 - 0,3 = 38,21 m\np2 = 38,21 × 1000 × 9,81 = 374 840 Pa ≈ 3,75 bar'
      },
      {
        n: '4',
        enonce: 'Résoudre : 3x + 7 = 22.',
        solution: '3x = 22 - 7 = 15\nx = 15/3 = 5\nVérification : 3×5 + 7 = 15 + 7 = 22 ✓'
      },
      {
        n: '5',
        enonce: 'Résoudre le système : Q1 + Q2 = 120 L/s et 5Q1 = 8Q2 (équilibre des pertes de charge dans deux branches parallèles de même résistance quadratique).',
        solution: 'De 5Q1 = 8Q2 → Q1 = 8Q2/5 = 1,6 Q2\nSubstitution : 1,6 Q2 + Q2 = 120 → 2,6 Q2 = 120 → Q2 = 46,15 L/s\nQ1 = 120 - 46,15 = 73,85 L/s\nVérification : 5×73,85 = 369,25 ; 8×46,15 = 369,2 ≈ ✓ (arrondi)'
      },
      {
        n: '6',
        enonce: 'La relation entre DCO sortante Cs et la DCO entrante Ce dans un réacteur CSTR est Cs = Ce / (1 + k×τ). Pour Ce = 400 mg/L, k = 0,25 h⁻¹, τ = 8 h. Calculer Cs et le rendement.',
        solution: 'Cs = 400 / (1 + 0,25 × 8) = 400 / (1 + 2) = 400/3 = 133 mg/L\nRendement = (400 - 133)/400 × 100 = 267/400 × 100 = 66,8 %\nPour atteindre 90 % de rendement : Cs = 40 mg/L → 400/(1 + 0,25τ) = 40 → 1+0,25τ = 10 → τ = 36 h'
      },
      {
        n: '7',
        enonce: 'Résoudre : x² - 5x + 6 = 0. Interpréter les solutions dans un contexte hydraulique où x représente un tirant d\'eau en mètres.',
        solution: 'Δ = (-5)² - 4×1×6 = 25 - 24 = 1\nx = (5 ± 1) / 2\nx1 = 3 m et x2 = 2 m\nLes deux solutions sont physiquement admissibles (tirant d\'eau positif). Elles correspondent aux deux régimes d\'écoulement : x1 = 3 m (régime fluvial, nombre de Froude < 1) et x2 = 2 m (régime torrentiel si Fr > 1). Le contexte détermine quelle solution retenir.'
      },
      {
        n: '8',
        enonce: 'La perte de charge dans une conduite est Δh = 0,015 × (50/D) × (1,5²/19,62). Calculer Δh pour D = 0,1 m, puis trouver D pour Δh = 0,5 m (λ = 0,015, L = 50 m, V = 1,5 m/s).',
        solution: 'Pour D = 0,1 m :\nΔh = 0,015 × (50/0,1) × (2,25/19,62) = 0,015 × 500 × 0,1147 = 0,860 m\nPour Δh = 0,5 m :\nD = 0,015 × 50 × 2,25 / (19,62 × 0,5) = 1,6875 / 9,81 = 0,172 m ≈ DN 200 (premier diamètre commercial supérieur)'
      }
    ]
  },

  'GEMEAU-004': {
    id: 'GEMEAU-004',
    titre: 'Fonctions, graphiques et interpolation',
    fiche: {
      intro: 'La lecture et l\'interprétation de graphiques sont des compétences permanentes dans les métiers de l\'eau : les courbes de pompe, les courbes de réseau, les courbes de tarage d\'un déversoir, les graphiques d\'évolution de la qualité de l\'eau dans le temps — tous nécessitent une maîtrise des fonctions mathématiques et de l\'interpolation. Un technicien qui ne sait pas lire correctement une courbe de pompe risque de sélectionner un équipement inadapté.',
      schema: `<svg viewBox="0 0 260 148" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="m4" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#334155"/></marker></defs>
  <rect width="260" height="148" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Courbe pompe H-Q et point de fonctionnement</text>
  <line x1="28" y1="130" x2="248" y2="130" stroke="#334155" stroke-width="1.5" marker-end="url(#m4)"/>
  <line x1="28" y1="130" x2="28" y2="22" stroke="#334155" stroke-width="1.5" marker-end="url(#m4)"/>
  <text x="244" y="142" font-size="8.5" fill="#334155" font-family="sans-serif">Q →</text>
  <text x="8" y="40" font-size="8.5" fill="#334155" font-family="sans-serif" transform="rotate(-90,14,80)">H ↑</text>
  <path d="M38,36 Q110,46 215,122" stroke="#2563eb" stroke-width="2" fill="none"/>
  <text x="75" y="43" font-size="8" fill="#2563eb" font-family="sans-serif" font-weight="bold">Pompe</text>
  <path d="M38,126 Q100,105 215,52" stroke="#dc2626" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
  <text x="168" y="49" font-size="8" fill="#dc2626" font-family="sans-serif" font-weight="bold">Réseau</text>
  <circle cx="128" cy="83" r="5" fill="#16a34a" stroke="#fff" stroke-width="1.5"/>
  <line x1="128" y1="83" x2="128" y2="130" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="28" y1="83" x2="128" y2="83" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="134" y="80" font-size="7.5" fill="#16a34a" font-family="sans-serif" font-weight="bold">Pt fonctionnement</text>
</svg>`,
      sections: [
        {
          titre: '1. Fonctions mathématiques courantes',
          texte: 'Une fonction f associe à chaque valeur d\'entrée x une valeur de sortie y = f(x). Les fonctions les plus rencontrées dans le secteur de l\'eau sont : la fonction linéaire y = ax (proportionnalité directe), la fonction affine y = ax + b (droite non passant par l\'origine), la fonction quadratique y = ax² (courbe de réseau hydraulique), et la fonction puissance y = ax^n.\n\nLa fonction affine y = ax + b est utilisée pour l\'étalonnage d\'un appareil de mesure. Un débitmètre électromagnétique fournit une tension U proportionnelle au débit Q : Q = a×U + b, où a et b sont les coefficients de calibration. En mesurant Q pour différentes valeurs de U, on trace la droite d\'étalonnage et on en déduit a et b.\n\nLa fonction puissance y = ax^n est fondamentale en hydraulique. Les pertes de charge sont proportionnelles à V², soit à Q² (à section constante) : Δh = R × Q². Le coefficient R, appelé résistance hydraulique, dépend de la géométrie de la conduite et du coefficient de frottement. C\'est cette fonction quadratique qui définit la courbe de réseau qui s\'intersecte avec la courbe de pompe pour donner le point de fonctionnement.',
          sous_sections: [
            {
              titre: '1.1 La fonction quadratique : courbe de réseau',
              texte: 'La courbe de réseau d\'une installation de pompage est la courbe H = H_géo + R × Q², où H_géo est la hauteur géométrique (différence de cotes) et R est la résistance hydraulique totale. H_géo est une constante (terme b), R×Q² est le terme quadratique. Cette courbe part du point (Q=0 ; H=H_géo) et monte de façon parabolique. Son intersection avec la courbe H-Q de la pompe donne le point de fonctionnement réel.'
            }
          ]
        },
        {
          titre: '2. Représentation graphique et lecture de courbes',
          texte: 'Tracer un graphique nécessite de choisir les bons axes, les bonnes échelles et les bonnes unités. La variable indépendante (cause) est placée en abscisse (axe x), la variable dépendante (effet) en ordonnée (axe y). L\'échelle doit être régulière, couvrir l\'ensemble des données, et permettre une lecture précise. Un quadrillage de 5 divisions par unité permet une lecture au 1/5 d\'unité.\n\nPour une courbe de pompe, l\'abscisse est le débit Q [m³/h] et l\'ordonnée est la hauteur manométrique H [m]. La courbe décroît généralement de gauche à droite : à débit nul, la pompe développe sa HMT maximale (hauteur à débit nul) ; à débit maximum, la HMT est nulle. La courbe de rendement η [%] est superposée sur un deuxième axe pour identifier le point de meilleur rendement (PMR).\n\nLa courbe de tarage d\'une station hydrologique relie la hauteur d\'eau mesurée h [m] au débit Q [m³/s]. Elle est obtenue par des jaugeages (mesures simultanées de h et Q) et permet ensuite de calculer Q à partir de la seule mesure de h. La précision dépend du nombre de points de jaugeage et de la stabilité de la section de mesure.',
          sous_sections: [
            {
              titre: '2.1 Lecture du point de fonctionnement d\'un groupe de pompage',
              texte: 'Le point de fonctionnement est l\'intersection de la courbe H-Q de la pompe et de la courbe de réseau H = H_géo + R×Q². Ce point donne le débit effectif Qf et la HMT effective Hf. Si le point se situe à gauche du PMR (rendement décroissant), la pompe tourne à charge insuffisante et peut chauffer. Si à droite, elle est surchargée. On cherche à dimensionner pour que le point de fonctionnement soit au plus proche du PMR.'
            }
          ]
        },
        {
          titre: '3. Interpolation linéaire',
          texte: 'L\'interpolation linéaire permet d\'estimer la valeur d\'une grandeur entre deux points connus d\'une courbe, en supposant que la variation est linéaire (en droite) sur ce petit intervalle. La formule est : y = y1 + (x - x1) × (y2 - y1) / (x2 - x1), où (x1, y1) et (x2, y2) sont les deux points encadrant x.\n\nApplication sur une courbe de pompe : Q = 60 m³/h → H = 28 m ; Q = 80 m³/h → H = 24 m. Pour Q = 70 m³/h, par interpolation linéaire : H = 28 + (70-60) × (24-28) / (80-60) = 28 + 10×(-4)/20 = 28 - 2 = 26 m. Ce type de calcul est quotidien lors de l\'utilisation de tables ou d\'abaques.\n\nL\'interpolation est une approximation valable pour de petits intervalles. Sur des courbes très courbées (courbe de saturation en O₂ en fonction de la température, courbe de tarage hyperbolique), l\'interpolation linéaire sur des intervalles trop larges peut introduire des erreurs. Dans ce cas, il faut soit utiliser plus de points, soit utiliser une interpolation polynomiale d\'ordre supérieur.',
          sous_sections: [
            {
              titre: '3.1 Extrapolation vs interpolation : attention aux limites',
              texte: 'Interpoler, c\'est estimer entre deux points connus — l\'incertitude est modérée. Extrapoler, c\'est estimer au-delà de la plage de données connue — l\'incertitude est beaucoup plus grande car on suppose que la tendance se prolonge. En hydraulique, on ne doit jamais utiliser une courbe de pompe en dehors de sa plage de données constructeur. En chimie de l\'eau, extrapoler une droite d\'étalonnage au-delà de la gamme de linéarité conduit à des erreurs d\'analyse.'
            }
          ]
        },
        {
          titre: '4. Droite de régression et corrélation',
          texte: 'Lorsqu\'on dispose d\'un nuage de points expérimentaux, la droite de régression (ou droite des moindres carrés) est la droite y = ax + b qui minimise la somme des carrés des écarts entre les valeurs observées et les valeurs prédites. Elle est calculée automatiquement par les tableurs et les calculatrices, mais il faut comprendre son sens.\n\nLe coefficient de corrélation r (ou r², coefficient de détermination) mesure la qualité de l\'ajustement linéaire : r = ±1 indique une corrélation parfaite (tous les points sur la droite), r = 0 indique l\'absence de corrélation linéaire. En analyse des eaux, si r² > 0,99 pour une droite d\'étalonnage, on peut l\'utiliser avec confiance. Si r² < 0,95, la droite est peu représentative et il faut investiguer la source de dispersion.\n\nEn hydrologie, la corrélation entre débit de crue et précipitations d\'un épisode orageux est étudiée pour prévoir les crues. Même avec r² = 0,85, la corrélation peut être utile pour un outil d\'alerte préventive, à condition d\'en connaître les limites. La corrélation ne signifie pas la causalité, mais dans ce cas le mécanisme physique est connu.',
          sous_sections: [
            {
              titre: '4.1 Utilisation pratique dans un tableur',
              texte: 'Dans Excel ou LibreOffice Calc, la droite de régression s\'obtient par : 1) tracer un graphique nuage de points ; 2) clic droit sur la série → "Ajouter une courbe de tendance" ; 3) choisir "Linéaire" et cocher "Afficher l\'équation" et "Afficher le R²". L\'équation donne les coefficients a et b directement utilisables. La commande DROITEREG() ou PENTE()/ORDONNEE.ORIGINE() donne les mêmes résultats numériquement.'
            }
          ]
        }
      ],
      points: [
        'Fonction affine : y = ax + b (droite) ; pente a et ordonnée à l\'origine b',
        'Courbe de réseau : H = H_géo + R×Q² (parabole croissante)',
        'Point de fonctionnement = intersection courbe pompe et courbe réseau',
        'Interpolation linéaire : y = y1 + (x-x1)×(y2-y1)/(x2-x1)',
        'Extrapoler hors de la plage connue est hasardeux : à éviter ou signaler',
        'Courbe de pompe : H décroît quand Q augmente (courbe H-Q)',
        'Coefficient de corrélation r² : valeur proche de 1 = bon ajustement linéaire',
        'Droite d\'étalonnage : r² > 0,99 requis en chimie analytique',
        'Lecture graphique : axe x = variable indépendante ; axe y = variable dépendante',
        'Abscisses et ordonnées doivent toujours porter leur unité physique'
      ],
      formules: [
        'Fonction affine : y = a × x + b ; a = pente, b = ordonnée à l\'origine',
        'Courbe de réseau : H[m] = H_geo[m] + R × Q²[m³/h]² ; R [m/(m³/h)²]',
        'Interpolation linéaire : y = y1 + (x - x1) × (y2 - y1) / (x2 - x1)',
        'Droite des moindres carrés (pente) : a = Σ(xi×yi - n×x̄×ȳ) / Σ(xi² - n×x̄²)',
        'Coefficient de corrélation : r² = [Σ(xi-x̄)(yi-ȳ)]² / [Σ(xi-x̄)² × Σ(yi-ȳ)²]'
      ],
      retenir: 'Courbe de pompe décroissante (H décroît avec Q) · Courbe réseau croissante (H_géo + R×Q²) · Intersection = point de fonctionnement · Interpolation linéaire entre deux points connus · r² proche de 1 = bonne corrélation · Toujours indiquer les unités sur les axes'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une courbe de pompe passe par les points suivants : Q=0 → H=35 m ; Q=20 → H=32 m ; Q=40 → H=26 m ; Q=60 → H=18 m ; Q=80 → H=8 m. La courbe de réseau est H = 12 + 0,003×Q². Déterminer graphiquement et par interpolation le point de fonctionnement.',
        solution: 'Calcul de la courbe de réseau :\nQ=0 → H=12 m ; Q=20 → H=12+1,2=13,2 m ; Q=40 → H=12+4,8=16,8 m ; Q=60 → H=12+10,8=22,8 m\nComparaison aux valeurs de la pompe :\nÀ Q=40 : pompe=26 m > réseau=16,8 m → pompe gagne\nÀ Q=60 : pompe=18 m < réseau=22,8 m → réseau gagne\nLe point d\'équilibre est entre Q=40 et Q=60.\nInterpolation : Q_f = 40 + (16,8-26)/(18-26-(22,8-16,8)) × 20 = 40 + (-9,2)/(−8−6) × 20\n= 40 + 9,2/14 × 20 ≈ 40 + 13,1 = 53,1 m³/h\nH_f = 12 + 0,003 × 53,1² = 12 + 8,48 = 20,5 m'
      },
      {
        n: '2',
        enonce: 'Un débitmètre est étalonné : pour une tension U = 1,5 V, Q = 25 m³/h ; pour U = 4,5 V, Q = 85 m³/h. Trouver la droite d\'étalonnage Q = aU + b. Calculer Q pour U = 3,0 V.',
        solution: 'Pente : a = (85-25)/(4,5-1,5) = 60/3 = 20 m³/h par volt\nOrdonnée à l\'origine : b = 25 - 20×1,5 = 25 - 30 = -5 m³/h\nDroite : Q = 20U - 5\nPour U = 3,0 V : Q = 20×3 - 5 = 60 - 5 = 55 m³/h\nVérification interpolation : Q = 25 + (3,0-1,5)/(4,5-1,5) × (85-25) = 25 + 0,5 × 60 = 55 m³/h ✓'
      },
      {
        n: '3',
        enonce: 'La courbe de saturation en O₂ donne : à 15°C, 10,1 mg/L ; à 20°C, 9,1 mg/L ; à 25°C, 8,3 mg/L. Interpoler la saturation à 22°C.',
        solution: 'On encadre 22°C entre 20°C (9,1 mg/L) et 25°C (8,3 mg/L).\nInterpolation : Cs(22) = 9,1 + (22-20)/(25-20) × (8,3-9,1)\n= 9,1 + (2/5) × (-0,8) = 9,1 - 0,32 = 8,78 mg/L\nVérification avec la table : valeur réelle à 22°C ≈ 8,7 mg/L → interpolation précise à ±0,1 mg/L'
      },
      {
        n: '4',
        enonce: 'Un déversoir triangulaire à 90° suit la loi Q = 1,42 × H^(5/2). Calculer Q pour H = 0,25 m, H = 0,35 m, et interpoler Q pour H = 0,30 m.',
        solution: 'Q(0,25) = 1,42 × 0,25^(2,5) = 1,42 × 0,03125 = 0,04438 m³/s\nQ(0,35) = 1,42 × 0,35^(2,5) = 1,42 × 0,07232 = 0,10269 m³/s\nInterpolation linéaire pour H = 0,30 m :\nQ(0,30) ≈ 0,04438 + (0,30-0,25)/(0,35-0,25) × (0,10269-0,04438)\n= 0,04438 + 0,5 × 0,05831 = 0,04438 + 0,02916 = 0,07354 m³/s\nValeur exacte : 1,42 × 0,30^2.5 = 1,42 × 0,04929 = 0,06999 m³/s\nErreur d\'interpolation : (0,0735-0,0700)/0,0700 = 5% — la courbe est courbée, l\'interpolation est approximative'
      },
      {
        n: '5',
        enonce: 'La courbe de réseau d\'un surpresseur est H = 5 + 0,008×Q². Tracer 4 points et dire si la HMT maximale de la pompe (42 m) est suffisante pour amorcer le débit de 60 m³/h requis.',
        solution: 'Points courbe réseau :\nQ=0 : H=5 m ; Q=20 : H=5+3,2=8,2 m ; Q=40 : H=5+12,8=17,8 m ; Q=60 : H=5+28,8=33,8 m ; Q=80 : H=5+51,2=56,2 m\nHMT requise pour Q=60 m³/h : H=33,8 m < 42 m (HMT max pompe).\nLa pompe peut assurer Q=60 m³/h. Le point de fonctionnement réel (intersection courbe pompe et réseau) sera légèrement inférieur à 60 m³/h selon la forme exacte de la courbe H-Q de la pompe.'
      },
      {
        n: '6',
        enonce: 'L\'abattement de la DCO en fonction du temps de séjour (SBR) : τ=2h → DCO=120 mg/L ; τ=4h → DCO=72 mg/L ; τ=8h → DCO=28 mg/L. La relation suit DCO = A × e^(-kτ). Vérifier si les points sont cohérents avec une loi exponentielle (comparer les ratios successifs).',
        solution: 'Ratio τ=2h→4h (doublement du temps) : 72/120 = 0,60 → ln(0,60) = -0,511 → k = 0,511/2 = 0,255 h⁻¹\nRatio τ=4h→8h (doublement du temps) : 28/72 = 0,389 → ln(0,389) = -0,944 → k = 0,944/4 = 0,236 h⁻¹\nLes deux valeurs de k sont proches (0,25 ± 0,01 h⁻¹), la loi du 1er ordre est bien vérifiée.\nValeur A : à τ=0, DCO = A = 120 × e^(0,255×2) = 120 × 1,659 = 199 mg/L (DCO initiale estimée)'
      },
      {
        n: '7',
        enonce: 'Tracer la courbe H-Q d\'une pompe à partir des données : (0 ; 48), (20 ; 45), (40 ; 38), (60 ; 28), (80 ; 15), (90 ; 0) en m³/h et m. Déterminer graphiquement le débit pour H = 30 m par interpolation.',
        solution: 'Pour H = 30 m, encadrement entre Q=40 (H=38) et Q=60 (H=28) :\nInterpolation : Q = 40 + (38-30)/(38-28) × (60-40) = 40 + 8/10 × 20 = 40 + 16 = 56 m³/h\nNote : pour un tracé précis, relier les 6 points par une courbe continue (non par des segments), car la courbe H-Q d\'une pompe est généralement régulière et légèrement concave.'
      },
      {
        n: '8',
        enonce: 'Un canal mesure les couples (Q [m³/s], h [m]) suivants lors de jaugeages : (0,5 ; 0,42), (1,2 ; 0,68), (2,1 ; 0,90). Interpoler h pour Q = 1,6 m³/s.',
        solution: 'Encadrement : Q=1,2 (h=0,68) et Q=2,1 (h=0,90)\nh(1,6) = 0,68 + (1,6-1,2)/(2,1-1,2) × (0,90-0,68)\n= 0,68 + (0,4/0,9) × 0,22 = 0,68 + 0,444 × 0,22 = 0,68 + 0,098 = 0,778 m\nNote : il serait préférable d\'ajuster la courbe de tarage par une loi puissance Q = a×h^n plutôt que par interpolation linéaire, car les courbes de tarage sont rarement linéaires.'
      }
    ]
  },

  'GEMEAU-005': {
    id: 'GEMEAU-005',
    titre: 'Géométrie et trigonométrie appliquées',
    fiche: {
      intro: 'Le technicien GEMEAU calcule des volumes de réservoirs à construire, des surfaces de bassins de décantation, des pentes de caniveaux ou de collecteurs, et des longueurs sur plans topographiques. La géométrie et la trigonométrie sont les outils qui permettent de passer d\'un plan 2D à des quantités physiques réelles : le cubage d\'un ouvrage, l\'emprise foncière d\'une installation, ou l\'inclinaison d\'une conduite de refoulement.',
      schema: `<svg viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <rect width="260" height="130" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Section circulaire partiellement remplie</text>
  <circle cx="90" cy="72" r="44" fill="none" stroke="#334155" stroke-width="2"/>
  <path d="M46,80 A44,44 0 0,0 134,80 Z" fill="#93c5fd" opacity="0.6"/>
  <path d="M46,80 A44,44 0 0,0 134,80 Z" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="46" y1="80" x2="134" y2="80" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="90" y1="28" x2="90" y2="80" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="93" y="58" font-size="8" fill="#94a3b8" font-family="sans-serif">h</text>
  <text x="93" y="77" font-size="8" fill="#94a3b8" font-family="sans-serif">D</text>
  <line x1="90" y1="72" x2="134" y2="80" stroke="#94a3b8" stroke-width="1"/>
  <text x="113" y="68" font-size="7.5" fill="#64748b" font-family="sans-serif">R</text>
  <text x="155" y="40" font-size="8" fill="#334155" font-family="sans-serif">θ = 2·arccos(1−2h/D)</text>
  <text x="155" y="56" font-size="8" fill="#2563eb" font-family="sans-serif">S = R²(θ−sinθ)/2</text>
  <text x="155" y="72" font-size="8" fill="#059669" font-family="sans-serif">P = R·θ</text>
  <text x="155" y="88" font-size="8" fill="#7c3aed" font-family="sans-serif">Rh = S / P</text>
  <text x="130" y="118" text-anchor="middle" font-size="7.5" fill="#94a3b8" font-family="sans-serif">θ en radians</text>
</svg>`,
      sections: [
        {
          titre: '1. Périmètres, surfaces et volumes des formes courantes',
          texte: 'Les formes géométriques rencontrées dans les installations hydrauliques sont principalement des cylindres (réservoirs, conduites), des parallélépipèdes (bassins rectangulaires), des trapèzes (canaux à section trapézoïdale), des cônes tronqués (cuves coniques) et des sphères (certains réservoirs).\n\nSurfaces planes : carré S = a² ; rectangle S = l × L ; triangle S = b×h/2 ; trapèze S = (a+b)/2 × h ; cercle S = π×r² = π×D²/4 où D est le diamètre. Ces formules s\'appliquent directement pour le calcul de la surface d\'un bassin de décantation (rectangle), d\'un clarificateur (cercle), ou de la section mouillée d\'un canal (trapèze).\n\nVolumes : prisme (base quelconque × hauteur) V = S × h ; cylindre V = π×D²/4 × H ; tronc de cône V = π×h/3 × (R₁² + R₁R₂ + R₂²) ; sphère V = 4/3 × π × r³. Pour un réservoir cylindrique d\'eau potable de D = 10 m et H = 5 m : V = π × 100/4 × 5 = 392,7 m³. Un tel réservoir représente la consommation journalière d\'une commune d\'environ 2 000 habitants.',
          sous_sections: [
            {
              titre: '1.1 Section mouillée et périmètre mouillé d\'un canal trapézoïdal',
              texte: 'Pour un canal trapézoïdal de largeur au fond b, tirant d\'eau y, et talus de pente m (horizontal pour 1 vertical) : section mouillée S = (b + m×y) × y ; périmètre mouillé P = b + 2×y×√(1+m²) ; rayon hydraulique R = S/P. Exemple : b=1 m, y=0,5 m, m=1,5 → S = (1+0,75)×0,5 = 0,875 m² ; P = 1 + 2×0,5×√(1+2,25) = 1 + 1×1,803 = 2,803 m ; R = 0,875/2,803 = 0,312 m.'
            }
          ]
        },
        {
          titre: '2. Pentes et inclinaisons',
          texte: 'La pente d\'un terrain ou d\'une conduite s\'exprime de plusieurs façons : en % (hauteur/longueur × 100), en ‰ (hauteur/longueur × 1000), ou en m/m (sans unité). Une pente de 1% signifie que pour 100 m de longueur horizontale, la dénivellation est de 1 m. Pour une conduite posée à 1,5% de pente, la vitesse d\'écoulement gravitaire peut être estimée.\n\nDans les réseaux d\'assainissement gravitaires, la pente minimale des collecteurs est normalement de 3‰ (0,3%) pour les diamètres de 200 à 400 mm, afin de garantir une vitesse d\'auto-curage d\'au moins 0,6 m/s. En-dessous de cette pente, les dépôts s\'accumulent et la conduite s\'engorge progressivement.\n\nLa pente est aussi définie par la trigonométrie : si l\'angle α entre la conduite et l\'horizontale est connu, la pente vaut tan(α). Inversement, une pente p (en m/m) correspond à un angle α = arctan(p). Pour une pente de 5% (p = 0,05), α = arctan(0,05) = 2,86°. Attention : pour des angles faibles (< 10°), sin(α) ≈ tan(α) ≈ p (approximation de petits angles).',
          sous_sections: [
            {
              titre: '2.1 Pente, déclivité et profil en long',
              texte: 'Le profil en long d\'une canalisation montre l\'évolution du radier (fond de la conduite) en fonction de la distance. La pente est la tangente de l\'angle entre ce profil et l\'horizontale : i = (z_amont - z_aval) / L. Pour un collecteur d\'assainissement, z est la cote du radier. Pour une conduite AEP, z est la cote de l\'axe de la conduite. La différence de cotes se lit sur le profil en long ou se mesure au GPS différentiel ou au niveau topographique.'
            }
          ]
        },
        {
          titre: '3. Trigonométrie : sin, cos, tan et leurs applications',
          texte: 'Dans un triangle rectangle, en notant α un angle aigu, l\'hypoténuse c, le côté adjacent b et le côté opposé a : sin(α) = a/c, cos(α) = b/c, tan(α) = a/b. La relation de Pythagore donne c² = a² + b². Ces relations sont utilisées pour calculer des distances inaccessibles directement sur le terrain.\n\nApplication en topographie : pour mesurer la largeur d\'une rivière sans la traverser, on place deux jalons A et B perpendiculairement à la rive, on mesure AB = 50 m, puis on vise la cible C de l\'autre rive depuis A (angle α = 65°) et depuis B (angle β = 52°). On peut retrouver la distance AC = AB × sin(β) / sin(180° - α - β) par la loi des sinus.\n\nApplication pour les poteaux et les colonnes montantes : si une canalisation monte le long d\'un mur incliné (angle 80° par rapport à l\'horizontale) sur une hauteur verticale de 8 m, la longueur réelle de conduite est L = 8 / sin(80°) = 8 / 0,985 = 8,12 m. Ce calcul est nécessaire pour commander la bonne longueur de tuyaux.',
          sous_sections: [
            {
              titre: '3.1 Calcul de volumes par la méthode des prismatöides',
              texte: 'Pour des terrassements (tranchées, bassins), le volume se calcule par la formule des prismatoïdes : V = L/6 × (S1 + 4×S_milieu + S2), où S1 et S2 sont les sections extrêmes et S_milieu la section médiane. Cette formule, plus précise que la moyenne des sections extrêmes, est utilisée dans les cubatures de projets de VRD (voirie et réseaux divers).'
            }
          ]
        },
        {
          titre: '4. Plans topographiques et coupes',
          texte: 'La lecture d\'un plan topographique est indispensable pour tout technicien de l\'eau travaillant sur des projets de réseaux. L\'échelle indique le rapport entre une longueur sur le plan et la longueur réelle : à 1/1000, 1 cm sur le plan = 10 m sur le terrain. Pour mesurer une distance sur un plan, on mesure au double décimètre et on multiplie par l\'inverse de l\'échelle.\n\nLes courbes de niveau relient les points d\'altitude égale. L\'équidistance entre courbes donne la précision altimétrique du plan. En lisant les courbes de niveau, on identifie les lignes de crête (divergence des courbes), les talwegs (convergence des courbes), et les pentes (espacement des courbes : courbes rapprochées = pente forte).\n\nPour le tracé d\'un réseau AEP, on identifie sur le plan les points hauts (où la pression sera minimale), les points bas (où la pression sera maximale, risque de surpression), et les points de bifurcation. La différence d\'altitude entre deux points se lit par interpolation entre les courbes de niveau encadrantes.',
          sous_sections: [
            {
              titre: '4.1 Calcul du volume d\'un bassin de rétention à partir d\'un plan',
              texte: 'Pour un bassin dont le fond et les pentes sont connus, le volume se calcule couche par couche (méthode des tranches horizontales). Pour chaque tranche de hauteur dh, on calcule la surface S(h) à partir du plan et on somme les volumes : V = Σ S(h) × dh. Pour une cuvette approximativement elliptique passant de 0 à 5 m de profondeur, on peut utiliser V = π × a × b × h / 3 (formule ellipsoïde tronquée).'
            }
          ]
        }
      ],
      points: [
        'Surface d\'un cercle : S = π×D²/4 (unité = m² si D en m)',
        'Volume cylindre : V = π×D²/4 × H (bassin circulaire, réservoir)',
        'Pente i = (z_amont - z_aval) / L [m/m] ; 1% = 10 ‰ = 0,01 m/m',
        'Pente minimale collecteur d\'assainissement DN200-400 : 3 ‰ (auto-curage)',
        'Section mouillée canal trapézoïdal : S = (b + m×y) × y',
        'sin(α) = côté opposé / hypoténuse ; cos(α) = adjacent / hypoténuse',
        'Échelle plan 1/500 : 1 cm plan = 5 m terrain',
        'Courbes de niveau rapprochées = forte pente ; espacées = pente douce',
        'Rayon hydraulique R = Section mouillée / Périmètre mouillé',
        'Pour α < 10° : sin(α) ≈ tan(α) ≈ α en radians (approximation petit angle)'
      ],
      formules: [
        'Surface cercle : S = π × D² / 4 → [m²] ; D = diamètre [m]',
        'Volume cylindre : V = π × D² / 4 × H → [m³] ; H = hauteur [m]',
        'Section mouillée trapézoïdale : S = (b + m × y) × y → [m²] ; m = talus [-], y = tirant d\'eau [m]',
        'Périmètre mouillé : P = b + 2 × y × √(1 + m²) → [m]',
        'Rayon hydraulique : R = S / P → [m]',
        'Pente : i = Δz / L → [m/m] (ou % = i × 100 ; ‰ = i × 1000)'
      ],
      retenir: 'Surface cercle = πD²/4 · Volume cylindre = S×H · Pente = Δz/L en m/m · Section trapézoïdale = (b+my)×y · Rayon hydraulique = S/P · sin/cos/tan pour les angles de terrain · Échelle plan : 1 cm × dénominateur = longueur terrain'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un réservoir cylindrique d\'eau potable a un diamètre de 8 m et une hauteur utile de 4,5 m. Calculer son volume en m³.',
        solution: 'V = π × D²/4 × H = π × 64/4 × 4,5 = π × 16 × 4,5 = 226,2 m³\nCe réservoir peut alimenter une commune de 900 à 1 500 habitants pendant une journée (150 à 250 L/hab/j).'
      },
      {
        n: '2',
        enonce: 'Un canal trapézoïdal a b = 2 m, talus m = 1,5, tirant d\'eau y = 0,6 m. Calculer S, P, R et vérifier avec Manning (K=55, i=0,002).',
        solution: 'S = (2 + 1,5×0,6) × 0,6 = (2+0,9) × 0,6 = 2,9 × 0,6 = 1,74 m²\nP = 2 + 2×0,6×√(1+2,25) = 2 + 1,2×1,803 = 2 + 2,164 = 4,164 m\nR = 1,74/4,164 = 0,418 m\nQ = 55 × 1,74 × 0,418^(2/3) × 0,002^(1/2) = 55 × 1,74 × 0,557 × 0,04472 = 2,388 m³/s'
      },
      {
        n: '3',
        enonce: 'Un plan au 1/2000 montre deux regards distants de 4,2 cm. Quelle est la distance réelle ? Connaissant des altitudes de 128,50 m et 127,20 m, calculer la pente de la conduite.',
        solution: 'Distance réelle : L = 4,2 cm × 2 000 = 8 400 cm = 84 m\nPente : i = (128,50 - 127,20) / 84 = 1,30/84 = 0,01548 = 1,55 % = 15,5 ‰\nCette pente est largement supérieure au minimum de 3 ‰ : l\'auto-curage est assuré.'
      },
      {
        n: '4',
        enonce: 'Un bassin de décantation rectangulaire mesure 25 m × 8 m. La surface est-elle suffisante pour un débit de 600 m³/h si la charge surfacique maximale est 2 m³/(m²·h) ?',
        solution: 'Surface disponible : S = 25 × 8 = 200 m²\nCharge surfacique réelle : q = Q/S = 600/200 = 3 m³/(m²·h)\n3 > 2 : la charge est trop élevée ! Il faut S = 600/2 = 300 m².\nSolution : allonger à 37,5 m × 8 m ou ajouter un 2ème bassin.'
      },
      {
        n: '5',
        enonce: 'Une conduite de refoulement monte à 80° par rapport à l\'horizontale sur une hauteur verticale de 12 m. Calculer la longueur de conduite à commander.',
        solution: 'sin(80°) = hauteur_verticale / longueur_conduite\nlongueur = 12 / sin(80°) = 12 / 0,9848 = 12,19 m\nOn commandera 12,5 m de conduite (avec garde pour les raccords).'
      },
      {
        n: '6',
        enonce: 'Un bassin de rétention d\'eaux pluviales a la forme d\'un prisme à base trapézoïdale (fond a=10 m, largeur en surface b=16 m, hauteur h=2 m, longueur L=30 m). Calculer le volume de stockage.',
        solution: 'Section trapézoïdale : S = (10+16)/2 × 2 = 13 × 2 = 26 m²\nVolume : V = S × L = 26 × 30 = 780 m³\nCapacité en mm équivalents pour un BV de 5 ha : 780 m³ / 50 000 m² = 0,0156 m = 15,6 mm'
      },
      {
        n: '7',
        enonce: 'Calculer le périmètre et la surface d\'un clarificateur circulaire de D = 18 m. Quelle est la charge surfacique pour un débit de 240 m³/h ?',
        solution: 'Périmètre : C = π × D = π × 18 = 56,55 m\nSurface : S = π × 18²/4 = π × 324/4 = 254,5 m²\nCharge surfacique : q = 240/254,5 = 0,943 m³/(m²·h) = 0,943 m/h\nNorme typique clarificateur secondaire : q ≤ 1,5 m/h → conforme'
      },
      {
        n: '8',
        enonce: 'Une tranchée pour canalisations a une profondeur de 1,8 m, une largeur en fond de 0,6 m et des talus à 1V:1H. Calculer la largeur en tête et le volume de terrassement par mètre linéaire.',
        solution: 'Talus 1V:1H : pour 1,8 m de profondeur, élargissement de chaque côté = 1,8 m × 1 = 1,8 m\nLargeur en tête = 0,6 + 2×1,8 = 4,2 m\nSection trapézoïdale : S = (0,6+4,2)/2 × 1,8 = 2,4 × 1,8 = 4,32 m²\nVolume par mètre linéaire : V = 4,32 m³/ml'
      }
    ]
  },

  'GEMEAU-006': {
    id: 'GEMEAU-006',
    titre: 'Dérivation, intégration et évolution des grandeurs',
    fiche: {
      intro: 'La compréhension des taux de variation et des cumuls est essentielle pour l\'exploitation des installations d\'eau. La dérivée décrit la vitesse d\'évolution d\'une grandeur (vitesse de montée d\'un niveau d\'eau, cinétique d\'un traitement), tandis que l\'intégrale cumule une grandeur variable dans le temps pour donner un total (volume consommé, masse de polluant transitée). Ces outils permettent d\'analyser les données de télégestion et de prévoir le comportement des installations.',
      schema: `<svg viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="m6" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#334155"/></marker></defs>
  <rect width="260" height="130" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Hydrogramme — volume = aire sous la courbe</text>
  <line x1="28" y1="110" x2="250" y2="110" stroke="#334155" stroke-width="1.5" marker-end="url(#m6)"/>
  <line x1="28" y1="110" x2="28" y2="22" stroke="#334155" stroke-width="1.5" marker-end="url(#m6)"/>
  <text x="244" y="122" font-size="8" fill="#334155" font-family="sans-serif">t →</text>
  <text x="8" y="38" font-size="8" fill="#334155" font-family="sans-serif" transform="rotate(-90,14,70)">Q ↑</text>
  <path d="M38,105 C55,70 75,30 100,25 C125,20 145,35 165,65 C185,90 210,105 238,108" stroke="#2563eb" stroke-width="2" fill="none"/>
  <path d="M38,105 C55,70 75,30 100,25 C125,20 145,35 165,65 C185,90 210,105 238,108 L238,110 L38,110 Z" fill="#bfdbfe" opacity="0.5"/>
  <text x="130" y="90" text-anchor="middle" font-size="9" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">V = ∫Q·dt</text>
  <line x1="68" y1="110" x2="68" y2="118" stroke="#94a3b8" stroke-width="1"/>
  <line x1="208" y1="110" x2="208" y2="118" stroke="#94a3b8" stroke-width="1"/>
  <text x="68" y="126" text-anchor="middle" font-size="7.5" fill="#64748b" font-family="sans-serif">t₁</text>
  <text x="208" y="126" text-anchor="middle" font-size="7.5" fill="#64748b" font-family="sans-serif">t₂</text>
  <text x="130" y="126" text-anchor="middle" font-size="7.5" fill="#059669" font-family="sans-serif">≈ Σ Qi · Δt</text>
</svg>`,
      sections: [
        {
          titre: '1. La dérivée comme taux de variation',
          texte: 'La dérivée d\'une fonction f(t) en un point t₀ mesure la vitesse de variation de f au voisinage de t₀. Elle est définie par la limite : f\'(t₀) = lim [f(t₀+h) - f(t₀)] / h quand h → 0. Graphiquement, c\'est la pente de la tangente à la courbe en t₀. Une dérivée positive indique une grandeur croissante, une dérivée négative indique une grandeur décroissante.\n\nEn pratique, pour un relevé discret (toutes les minutes ou toutes les heures), on utilise le taux de variation moyen plutôt que la dérivée exacte : Δf/Δt = [f(t+Δt) - f(t)] / Δt. Pour le niveau d\'un réservoir qui passe de 3,40 m à 3,75 m en 30 minutes, le taux de remplissage est (3,75-3,40)/0,5 h = 0,70 m/h, ce qui correspond, pour un réservoir de D = 10 m (section π×100/4 = 78,5 m²), à un débit net entrant de 0,70 × 78,5 = 55 m³/h.\n\nLes dérivées notables en traitement de l\'eau : dC/dt = -k×C (décroissance exponentielle, loi du premier ordre pour la désinfection, la radioactivité, la biodégradation) ; dN/dt = µ×N (croissance bactérienne exponentielle, taux de croissance µ) ; dh/dt = Q_in/S - Q_out/S (équation de conservation du volume dans un réservoir de section S).',
          sous_sections: [
            {
              titre: '1.1 Dérivées des fonctions usuelles',
              texte: '(x^n)\' = n×x^(n-1) ; (e^(ax))\' = a×e^(ax) ; (ln(x))\' = 1/x ; (sin(x))\' = cos(x) ; (cos(x))\' = -sin(x) ; (a×f)\' = a×f\' ; (f+g)\' = f\'+g\'. Ces règles s\'appliquent pour analyser la vitesse d\'évolution des grandeurs mesurées dans les systèmes d\'eau : niveau, débit, concentration, pression.'
            }
          ]
        },
        {
          titre: '2. Cinétiques de traitement du premier ordre',
          texte: 'La cinétique du premier ordre est omniprésente dans le traitement de l\'eau : désinfection par le chlore, dégradation des micropolluants, biodégradation de la matière organique, décroissance radioactive. L\'équation différentielle dC/dt = -k×C a pour solution C(t) = C₀ × e^(-k×t), où C₀ est la concentration initiale et k est la constante cinétique [h⁻¹ ou min⁻¹].\n\nLa demi-vie T₁/₂ est le temps nécessaire pour que la concentration soit divisée par 2 : C₀/2 = C₀ × e^(-k×T₁/₂), d\'où T₁/₂ = ln(2)/k = 0,693/k. Pour la désinfection par l\'UV, la dose D = I × t [mJ/cm²] remplace le temps, et le modèle de Chick-Watson adapte cette relation.\n\nPour dimensionner un contact de chloration, on fixe une dose résiduelle minimale et un temps de contact τ. Si la constante k de décroissance des coliformes est 0,5 min⁻¹ et qu\'on veut 4 log d\'abattement (facteur 10⁴), il faut C × τ = ln(10⁴)/k = 4×ln(10)/0,5 = 18,4 min·mg/L. C\'est le CT (Concentration × Temps) réglementaire.',
          sous_sections: [
            {
              titre: '2.1 Temps de demi-vie et constante cinétique',
              texte: 'Relations : T₁/₂ = ln(2)/k ≈ 0,693/k ; CT₁₀ (log de réduction en 10 min) = 1 - e^(-10k). Si le chlore libre est à 1 mg/L et k = 0,35 min⁻¹, à t = 10 min : C = C₀×e^(-0,35×10) = C₀×e^(-3,5) = 0,030×C₀ (réduction de 97%). La demi-vie du chlore dans cette eau est T₁/₂ = 0,693/0,35 = 1,98 min.'
            }
          ]
        },
        {
          titre: '3. L\'intégrale comme cumul d\'une grandeur',
          texte: 'L\'intégrale d\'un débit Q(t) entre t₁ et t₂ donne le volume cumulé écoulé : V = ∫Q(t)dt, de t₁ à t₂. Graphiquement, c\'est l\'aire sous la courbe Q(t). Pour un débit constant Q₀, V = Q₀ × (t₂-t₁). Pour un débit variable, on utilise l\'approximation par rectangles (méthode des trapèzes) sur des pas de temps Δt :\n\nV ≈ Σ [(Q(ti) + Q(ti+1)) / 2] × Δt (méthode des trapèzes). Cette méthode est implémentée dans les automates de télégestion pour intégrer les débits mesurés chaque minute et afficher le volume journalier ou le volume de compteur.\n\nPour la gestion des STEP, la charge polluante journalière s\'obtient de même : masse = ∫C(t)×Q(t)dt, approximée par Σ C_i × Q_i × Δt_i, en utilisant les mesures de concentration et de débit toutes les heures ou toutes les deux heures. Cette intégration est obligatoire pour l\'autosurveillance réglementaire des STEP de plus de 10 000 EH.',
          sous_sections: [
            {
              titre: '3.1 Courbe des débits classés',
              texte: 'La courbe des débits classés d\'un cours d\'eau trie les débits journaliers par ordre décroissant et les représente en fonction du rang. L\'intégrale de cette courbe donne le volume annuel écoulé. Le débit moyen interannuel (module) est ce volume divisé par le nombre de jours. En lisant la courbe, on détermine le Q90 (débit dépassé 90% du temps ≈ débit d\'étiage) et le Q10 (dépassé 10% du temps ≈ débit de hautes eaux).'
            }
          ]
        },
        {
          titre: '4. Variation de niveau dans un réservoir',
          texte: 'L\'équation du bilan de volume dans un réservoir est : S × dh/dt = Q_entrée(t) - Q_sortie(t), où S est la section du réservoir, h le niveau, Q_entrée le débit entrant (production) et Q_sortie le débit sortant (distribution). En intégrant entre t1 et t2 : S × [h(t2) - h(t1)] = ∫(Q_entrée - Q_sortie)dt.\n\nSi la demande Q_sortie est supérieure à la production Q_entrée, le niveau baisse : dh/dt < 0. Si l\'inverse, le niveau monte. La réserve d\'un château d\'eau est dimensionnée pour couvrir les pointes de consommation (6 h à 8 h du matin, 11 h à 13 h, 18 h à 20 h) quand la demande dépasse la capacité de production.\n\nLe temps de vidange d\'un réservoir depuis un niveau h₀ jusqu\'à h_min en cas d\'arrêt de production est : t_vidange = S × (h₀ - h_min) / Q_sortie_moyen. Pour un château d\'eau de D = 10 m (S = 78,5 m²), une hauteur utile de 3 m, et une consommation nocturne de 15 m³/h : t = 78,5 × 3 / 15 = 15,7 h d\'autonomie.',
          sous_sections: [
            {
              titre: '4.1 Dimensionnement du volume de réserve',
              texte: 'Le volume de réserve d\'un château d\'eau est classiquement fixé à 1/3 à 1/2 de la consommation journalière, soit V_réserve ≈ (8 à 12 heures) × Q_moyen. Ce volume couvre : l\'incendie (60 m³ pour une défense incendie de 60 m³/h pendant 1 h + 2 h de recharge), les pointes de consommation, et une réserve de sécurité pour les pannes de pompage courtes (2 à 4 heures).'
            }
          ]
        }
      ],
      points: [
        'Dérivée = taux de variation instantané = pente de la tangente à la courbe',
        'f\'(x^n) = n×x^(n-1) ; f\'(e^ax) = a×e^ax ; f\'(ln x) = 1/x',
        'Cinétique 1er ordre : C(t) = C₀×e^(-kt) ; T½ = ln(2)/k = 0,693/k',
        'Désinfection : CT requis en mg·min/L pour x log de réduction',
        'Intégrale de Q(t) = volume V = aire sous la courbe débit-temps',
        'Méthode des trapèzes : V ≈ Σ (Q_i + Q_{i+1})/2 × Δt_i',
        'Bilan de réservoir : S×dh/dt = Q_entrée - Q_sortie',
        'Charge polluante = intégrale de C(t)×Q(t) sur le temps',
        'Module hydrologique = volume annuel / 365 jours',
        'Q90 = débit dépassé 90% du temps (étiage) ; Q10 = dépassé 10% (hautes eaux)'
      ],
      formules: [
        'Cinétique 1er ordre : C(t) = C₀ × exp(-k × t) → [mg/L] ; k [h⁻¹], t [h]',
        'Demi-vie : T½ = ln(2) / k = 0,693 / k → [même unité que 1/k]',
        'Volume intégré : V = ∫Q dt ≈ Σ (Q_i + Q_{i+1})/2 × Δt → [m³]',
        'Bilan réservoir : S × Δh = (Q_entrée - Q_sortie) × Δt → [m³]',
        'CT désinfection : CT = -ln(N/N₀) / k → [mg·min/L ou mJ/cm²]',
        'Taux de variation : Δf/Δt = [f(t+Δt) - f(t)] / Δt → [unité de f / unité de t]'
      ],
      retenir: 'Dérivée = vitesse de variation · Cinétique 1er ordre : décroissance exponentielle · T½ = 0,693/k · Intégrale = cumul = aire sous la courbe · Bilan réservoir : S×dh/dt = Q_in - Q_out · CT = contact temps × concentration = indicateur de désinfection'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un réservoir de section 50 m² voit son niveau passer de 2,10 m à 2,85 m en 45 min. Estimer le débit net entrant moyen en m³/h.',
        solution: 'Variation de niveau : Δh = 2,85 - 2,10 = 0,75 m\nDurée : Δt = 45/60 = 0,75 h\nTaux de variation : dh/dt ≈ 0,75/0,75 = 1,0 m/h\nDébit net : Q_net = S × dh/dt = 50 × 1,0 = 50 m³/h'
      },
      {
        n: '2',
        enonce: 'La concentration en chlore résiduel suit une cinétique du 1er ordre avec k = 0,12 h⁻¹. Calculer la concentration après 8 h si C₀ = 0,5 mg/L. Quelle est la demi-vie ?',
        solution: 'C(8) = 0,5 × e^(-0,12×8) = 0,5 × e^(-0,96) = 0,5 × 0,383 = 0,191 mg/L\nDemi-vie : T½ = 0,693/0,12 = 5,78 h\nVérification : après 5,78 h, C = 0,5/2 = 0,25 mg/L ; C(5,78) = 0,5×e^(-0,12×5,78) = 0,5×0,5 = 0,25 ✓'
      },
      {
        n: '3',
        enonce: 'Un débit horaire est mesuré toutes les 2 h sur une journée : 8h:120, 10h:180, 12h:210, 14h:160, 16h:140, 18h:200, 20h:150, 22h:100 m³/h (fin à 22h après 14h de mesure). Calculer le volume total par la méthode des trapèzes.',
        solution: 'Paires de mesures (chaque Δt = 2 h) :\n(120+180)/2 × 2 = 300 m³\n(180+210)/2 × 2 = 390 m³\n(210+160)/2 × 2 = 370 m³\n(160+140)/2 × 2 = 300 m³\n(140+200)/2 × 2 = 340 m³\n(200+150)/2 × 2 = 350 m³\n(150+100)/2 × 2 = 250 m³\nVolume total = 300+390+370+300+340+350+250 = 2 300 m³ en 14 h'
      },
      {
        n: '4',
        enonce: 'Pour 3 log d\'abattement de Cryptosporidium, un UV à I = 40 mJ/cm² est utilisé. La cinétique suit : log(N/N₀) = -k_UV × D_UV avec k_UV = 0,067 cm²/mJ. Calculer la dose D_UV nécessaire.',
        solution: '-3 = -0,067 × D_UV\nD_UV = 3 / 0,067 = 44,8 mJ/cm²\nLa dose de 40 mJ/cm² n\'est pas suffisante (donne 40×0,067 = 2,68 log < 3).\nIl faut D = 44,8 mJ/cm² soit environ 45 mJ/cm².'
      },
      {
        n: '5',
        enonce: 'Un château d\'eau de 400 m³ alimente une commune dont la consommation nocturne (minuit à 6h) est 15 m³/h. La production est à l\'arrêt la nuit. Si le niveau de départ est à 90% (360 m³), quel niveau reste-t-il au matin ?',
        solution: 'Volume consommé en 6 h = 15 × 6 = 90 m³\nVolume restant = 360 - 90 = 270 m³\nPourcentage : 270/400 = 67,5 %\nLe niveau est à 67,5% du volume total au matin. La repompage matinale devra fournir 90 m³ avant la pointe de consommation matinale.'
      },
      {
        n: '6',
        enonce: 'La croissance bactérienne suit dN/dt = µ×N avec µ = 0,8 h⁻¹. Partir de N₀ = 1 000 UFC/mL. Calculer N après 3 h et le temps de doublement.',
        solution: 'N(3) = 1000 × e^(0,8×3) = 1000 × e^(2,4) = 1000 × 11,02 = 11 020 UFC/mL\nTemps de doublement : Td = ln(2)/µ = 0,693/0,8 = 0,87 h = 52 min\nEn 3 h, la population est multipliée par 11 (environ 3,5 doublements).'
      },
      {
        n: '7',
        enonce: 'La concentration de DBO₅ en entrée d\'un lagunage est mesurée toutes les 4 h : 0h:280, 4h:320, 8h:290, 12h:340, 16h:260, 20h:220 mg/L. Le débit est constant à 50 m³/h. Calculer la charge DBO₅ journalière (24 h) par la méthode des trapèzes.',
        solution: 'Volume par tranche : 50 m³/h × 4 h = 200 m³\nFlux par tranche (moyenne × volume) :\n(280+320)/2 × 200/1000 = 300 × 0,2 = 60 kg\n(320+290)/2 × 0,2 = 305 × 0,2 = 61 kg\n(290+340)/2 × 0,2 = 315 × 0,2 = 63 kg\n(340+260)/2 × 0,2 = 300 × 0,2 = 60 kg\n(260+220)/2 × 0,2 = 240 × 0,2 = 48 kg\nCes 5 trapèzes couvrent 20 h. Pour 24 h, on extrapole les 4 h manquantes : (220+280)/2 × 0,2 = 250×0,2=50 kg\nCharge totale 24 h ≈ 60+61+63+60+48+50 = 342 kg DBO₅/j'
      },
      {
        n: '8',
        enonce: 'k de biodégradation de l\'atrazine dans un sol = 0,025 j⁻¹. Quelle fraction de la concentration initiale reste après 30, 90 et 180 jours ? Calculer la demi-vie.',
        solution: 'C(30)/C₀ = e^(-0,025×30) = e^(-0,75) = 0,472 → 47,2% restant\nC(90)/C₀ = e^(-0,025×90) = e^(-2,25) = 0,105 → 10,5% restant\nC(180)/C₀ = e^(-0,025×180) = e^(-4,5) = 0,011 → 1,1% restant\nDemi-vie : T½ = 0,693/0,025 = 27,7 jours\nAprès 6 mois (180 j ≈ 6,5 demi-vies), il reste moins de 2% de la concentration initiale.'
      }
    ]
  },

  'GEMEAU-007': {
    id: 'GEMEAU-007',
    titre: 'Statistiques descriptives et probabilités appliquées',
    fiche: {
      intro: 'L\'exploitation des systèmes d\'eau génère de grandes séries de données : débits journaliers, résultats d\'analyses de qualité, relevés de compteurs, mesures de pression. Les statistiques permettent de synthétiser ces données en quelques indicateurs représentatifs (moyenne, médiane, écart-type) et de prendre des décisions éclairées en situation d\'incertitude. Un technicien qui ne sait pas interpréter des statistiques risque de confondre une variation normale avec une anomalie, ou inversement.',
      schema: `<svg viewBox="0 0 260 128" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <defs><marker id="m7" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5z" fill="#334155"/></marker></defs>
  <rect width="260" height="128" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Distribution des mesures — courbe en cloche</text>
  <line x1="20" y1="108" x2="248" y2="108" stroke="#334155" stroke-width="1.5" marker-end="url(#m7)"/>
  <path d="M28,105 C50,105 70,30 130,24 C190,30 210,105 240,105" stroke="#2563eb" stroke-width="2" fill="none"/>
  <path d="M28,105 C50,105 70,30 130,24 C190,30 210,105 240,105 Z" fill="#dbeafe" opacity="0.4"/>
  <line x1="130" y1="24" x2="130" y2="108" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="134" y="38" font-size="8" fill="#dc2626" font-family="sans-serif" font-weight="bold">μ (moy.)</text>
  <line x1="100" y1="52" x2="100" y2="108" stroke="#059669" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="58" y="48" font-size="7.5" fill="#059669" font-family="sans-serif">−σ</text>
  <line x1="160" y1="52" x2="160" y2="108" stroke="#059669" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="162" y="48" font-size="7.5" fill="#059669" font-family="sans-serif">+σ</text>
  <path d="M100,52 C115,36 145,36 160,52" stroke="#059669" stroke-width="1" fill="#dcfce7" fill-opacity="0.4"/>
  <text x="130" y="78" text-anchor="middle" font-size="8" fill="#15803d" font-family="sans-serif">68 %</text>
  <text x="130" y="118" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">σ = écart-type · NTU, pH, turb...</text>
</svg>`,
      sections: [
        {
          titre: '1. Indicateurs de position : moyenne, médiane et mode',
          texte: 'La moyenne arithmétique x̄ = (Σxi) / n est l\'indicateur le plus courant. Elle est sensible aux valeurs extrêmes (outliers). Si un débit de 1 500 m³/h figure parmi 29 mesures normales à 80-100 m³/h, il fera monter la moyenne de façon trompeuse. Dans ce cas, la médiane (valeur centrale quand on trie les données) est préférable car elle est robuste aux outliers.\n\nLa médiane est la valeur qui partage la série ordonnée en deux moitiés égales. Pour n valeurs triées, si n est impair : médiane = valeur d\'indice (n+1)/2 ; si n est pair : médiane = moyenne des valeurs d\'indices n/2 et n/2+1. En qualité de l\'eau, la médiane de la série annuelle de mesures de DCO sort est plus représentative que la moyenne car quelques événements de pluie (valeurs élevées) ne la perturbent pas.\n\nLes percentiles (ou centiles) généralisent la médiane. Le percentile P_x est la valeur en-dessous de laquelle se trouvent x% des données. Le Q10 (percentile 10) est le débit dépassé 90% du temps (débit d\'étiage). Le Q90 (percentile 90) est le débit dépassé 10% du temps (débit de hautes eaux). Ils servent à caractériser le régime hydrologique d\'un cours d\'eau.',
          sous_sections: [
            {
              titre: '1.1 Calcul pratique de la médiane et des quartiles',
              texte: 'Pour une série de 12 mesures de turbidité (NTU) : 2, 3, 4, 4, 5, 6, 8, 9, 12, 14, 18, 25. n=12 pair : médiane = (6+8)/2 = 7 NTU. Quartile inférieur Q1 (médiane des 6 premières) = (4+5)/2 = 4,5 NTU. Quartile supérieur Q3 (médiane des 6 dernières) = (12+14)/2 = 13 NTU. Écart interquartile IQR = Q3-Q1 = 8,5 NTU. Valeurs aberrantes potentielles : > Q3+1,5×IQR = 13+12,75 = 25,75 NTU → 25 NTU est limite.'
            }
          ]
        },
        {
          titre: '2. Indicateurs de dispersion : variance, écart-type et CV',
          texte: 'La variance σ² = Σ(xi - x̄)² / n mesure l\'étalement des données autour de la moyenne. L\'écart-type σ = √(variance) est dans la même unité que les données et est directement interprétable. Pour une série de mesures de pH, un écart-type de 0,3 unité indique une variation notable (le pH varie typiquement de x̄-0,3 à x̄+0,3).\n\nLe coefficient de variation CV = σ / x̄ × 100 % exprime la variabilité relative, indépendamment de l\'unité. Un CV < 10% indique une série homogène ; CV > 30% indique une forte variabilité. Les débits d\'une rivière à régime pluvial méditerranéen ont un CV de 100% ou plus (très variables), tandis qu\'une source karstique peut avoir un CV de 10-20%.\n\nPour la maîtrise statistique des procédés (MSP/SPC) en laboratoire d\'analyse, on utilise les cartes de contrôle : on trace la moyenne ± 2σ (limites d\'alerte) et ± 3σ (limites de contrôle). Un résultat hors des limites de ±3σ a seulement 0,3% de probabilité d\'être dû au hasard ; c\'est un signal d\'anomalie à investiguer.',
          sous_sections: [
            {
              titre: '2.1 Calcul de l\'écart-type',
              texte: 'Méthode : calculer x̄, puis pour chaque xi calculer (xi-x̄)², sommer les carrés, diviser par n (population) ou n-1 (échantillon), prendre la racine carrée. Exemple : mesures de NH4+ : 0,12 ; 0,15 ; 0,11 ; 0,18 ; 0,14 mg/L. x̄ = 0,70/5 = 0,14. Écarts : -0,02 ; 0,01 ; -0,03 ; 0,04 ; 0. Carrés : 0,0004 ; 0,0001 ; 0,0009 ; 0,0016 ; 0. Σ = 0,0030. σ = √(0,0030/5) = √0,0006 = 0,0245 mg/L. CV = 0,0245/0,14 = 17,5%.'
            }
          ]
        },
        {
          titre: '3. Loi normale et probabilités',
          texte: 'La loi normale (ou loi de Gauss) est la distribution la plus rencontrée pour des mesures physiques répétées. Elle est caractérisée par sa moyenne µ et son écart-type σ. La courbe en cloche est symétrique. Propriétés : 68,3% des valeurs sont dans [µ-σ ; µ+σ] ; 95,4% dans [µ-2σ ; µ+2σ] ; 99,7% dans [µ-3σ ; µ+3σ].\n\nEn analyse chimique de l\'eau, si les résultats de 100 mesures d\'une eau standard suivent une loi normale de µ = 50 mg/L et σ = 2 mg/L, alors 95% des mesures doivent être comprises entre 46 et 54 mg/L. Une mesure à 56 mg/L (µ+3σ) a seulement 0,15% de probabilité d\'être normale : c\'est très probablement une erreur de manipulation ou une contamination.\n\nLes fréquences cumulées permettent de construire les courbes des débits classés et les courbes de distribution de probabilité pour les crues et les étiages. La probabilité de non-dépassement d\'un débit Q est F(Q) = P(X ≤ Q). La période de retour T = 1/(1-F(Q)) pour les crues : un débit de période de retour 100 ans a une probabilité de 1% d\'être dépassé chaque année.',
          sous_sections: [
            {
              titre: '3.1 Application : période de retour des crues',
              texte: 'Pour une série de débits maximaux annuels classés par ordre croissant (rang r parmi n années), la probabilité de non-dépassement est estimée par F(Q_r) = r/(n+1) (formule de Weibull). La période de retour T_r = 1/(1-F) = (n+1)/(n+1-r). Pour n=20 ans et r=20 (plus forte crue observée) : T = 21/1 = 21 ans. Cette crue de période de retour 21 ans sera dépassée en moyenne une fois toutes les 21 années.'
            }
          ]
        },
        {
          titre: '4. Analyse de séries de mesures en exploitation',
          texte: 'En exploitation des installations, l\'analyse statistique des données de télégestion permet de détecter les anomalies, de vérifier la conformité réglementaire et d\'optimiser les procédés. Pour la conformité réglementaire de l\'eau potable, on calcule le taux de conformité : (nombre de résultats conformes / nombre total d\'analyses) × 100%. Le règlement européen fixe des objectifs de conformité à 95% ou 99% selon le paramètre.\n\nUn historique de pression à un point du réseau peut montrer une dérive progressive : la pression moyenne sur les 3 derniers mois est inférieure de 0,3 bar à la normale. Ce signal statistique peut indiquer une fuite croissante, un encrassement progressif de la conduite, ou un changement de conduite dans le secteur. Sans l\'outil statistique, cette dérive graduelle passe inaperçue dans les relevés quotidiens.\n\nPour les mesures de qualité qui doivent respecter des seuils (NH4+ < 0,5 mg/L, turbidité < 1 NTU en sortie de filtre), on calcule non seulement la conformité binaire (conforme/non conforme) mais aussi le percentile P95 ou P99. Si P95 = 0,3 NTU, cela signifie que 95% du temps la turbidité est sous 0,3 NTU, mais 5% du temps elle peut dépasser. Cette information est plus utile que le simple taux de conformité.',
          sous_sections: [
            {
              titre: '4.1 Détection des outliers et gestion des données atypiques',
              texte: 'Une valeur aberrante (outlier) peut résulter d\'une erreur de mesure (sonde défaillante, erreur de saisie) ou d\'un événement réel exceptionnel. La règle 1,5×IQR : une valeur est suspecte si elle est > Q3 + 1,5×IQR ou < Q1 - 1,5×IQR. Avant d\'exclure un outlier, vérifier l\'instrument de mesure, les conditions lors de la mesure, et la cohérence avec d\'autres mesures simultanées. On ne supprime une donnée que si une cause technique identifiée la justifie, et on le documente dans le registre de qualité.'
            }
          ]
        }
      ],
      points: [
        'Moyenne = Σxi/n ; sensible aux outliers',
        'Médiane = valeur centrale de la série triée ; robuste aux outliers',
        'Écart-type σ = √[Σ(xi-x̄)²/n] — dispersion en même unité que les données',
        'Coefficient de variation CV = σ/x̄ × 100% — dispersion relative',
        'Loi normale : 68% dans [µ±σ], 95% dans [µ±2σ], 99,7% dans [µ±3σ]',
        'Percentile Px : x% des données sont inférieures à cette valeur',
        'Q10 hydrologique = débit dépassé 90% du temps (étiage sévère)',
        'Période de retour T = 1 / probabilité de dépassement annuelle',
        'Taux de conformité = (n_conformes / n_total) × 100%',
        'Outlier suspect si > Q3 + 1,5×IQR ou < Q1 - 1,5×IQR'
      ],
      formules: [
        'Moyenne : x̄ = (1/n) × Σxi → [même unité que xi]',
        'Variance : σ² = (1/n) × Σ(xi - x̄)² ; σ = √(σ²)',
        'Coefficient de variation : CV = σ / x̄ × 100 → [%]',
        'Probabilité de non-dépassement (Weibull) : F(Q_r) = r / (n+1)',
        'Période de retour : T = 1 / (1 - F(Q)) → [années]',
        'Loi normale : 95% des valeurs dans [µ - 1,96σ ; µ + 1,96σ]'
      ],
      retenir: 'Moyenne sensible aux outliers → préférer médiane en présence d\'extrêmes · Écart-type σ = dispersion · CV = variabilité relative · Loi normale : 68-95-99,7% règle · Période de retour = 1/P_dépassement · Percentile P95 plus informatif que taux de conformité binaire'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Mesures journalières de turbidité sur 7 jours (NTU) : 0,8 ; 1,2 ; 0,9 ; 1,1 ; 0,7 ; 15,4 ; 1,0. Calculer la moyenne, la médiane et l\'écart-type. Laquelle est la plus représentative de la tendance centrale ?',
        solution: 'Moyenne = (0,8+1,2+0,9+1,1+0,7+15,4+1,0)/7 = 21,1/7 = 3,01 NTU\nSérie triée : 0,7 ; 0,8 ; 0,9 ; 1,0 ; 1,1 ; 1,2 ; 15,4\nMédiane = 1,0 NTU (rang 4 sur 7)\nÉcart-type : x̄=3,01, déviations²: 4,85; 3,32; 4,45; 3,88; 5,31; 151,1; 4,04 → σ=√(177/7)=√25,3=5,03\nLa médiane (1,0 NTU) est beaucoup plus représentative que la moyenne (3,01 NTU) perturbée par la valeur 15,4 (probablement un événement pluvieux exceptionnel ou une mesure aberrante).'
      },
      {
        n: '2',
        enonce: '20 ans de débits maximaux annuels classés. Le rang 15 correspond à Q=85 m³/s. Calculer F et la période de retour T associée.',
        solution: 'F(Q_15) = 15 / (20+1) = 15/21 = 0,714\nPériode de retour T = 1/(1-0,714) = 1/0,286 = 3,5 ans\nCe débit de 85 m³/s a une probabilité de 28,6% d\'être dépassé chaque année, soit en moyenne une fois tous les 3,5 ans.'
      },
      {
        n: '3',
        enonce: 'Résultats de 10 analyses de NH4+ en sortie STEP (mg/L) : 0,18 ; 0,22 ; 0,15 ; 0,31 ; 0,19 ; 0,24 ; 0,16 ; 0,28 ; 0,20 ; 0,25. Calculer x̄, σ, CV. La seuil NH4+ < 1 mg/L est-il respecté ?',
        solution: 'x̄ = (0,18+0,22+0,15+0,31+0,19+0,24+0,16+0,28+0,20+0,25)/10 = 2,18/10 = 0,218 mg/L\nVariance : Σ(xi-0,218)² = 0,001444+0,000004+0,004624+0,008464+0,000784+0,000484+0,003364+0,003844+0,000324+0,001024 = 0,02436\nσ = √(0,02436/10) = √0,002436 = 0,0494 mg/L\nCV = 0,0494/0,218 × 100 = 22,6%\nToutes les valeurs sont < 1 mg/L : 100% de conformité. La valeur maximale est 0,31 mg/L, bien inférieure au seuil.'
      },
      {
        n: '4',
        enonce: 'Le débit d\'une source karstique a x̄=2,5 m³/s et σ=0,4 m³/s. En supposant une loi normale, calculer la probabilité que le débit soit inférieur à 1,7 m³/s (variable centrée réduite Z = (x-µ)/σ, P(Z<-2) = 2,28%).',
        solution: 'Z = (1,7 - 2,5) / 0,4 = -0,8/0,4 = -2,0\nP(Q < 1,7) = P(Z < -2) = 2,28%\nSoit environ 8 jours par an (365 × 0,0228 = 8,3 jours) où le débit de la source serait inférieur à 1,7 m³/s.'
      },
      {
        n: '5',
        enonce: 'Analyser la série de pH : 7,1 ; 7,3 ; 7,2 ; 7,8 ; 7,1 ; 6,2 ; 7,4 ; 7,2 ; 7,1 ; 7,3. La valeur 6,2 est-elle un outlier selon la règle 1,5×IQR ?',
        solution: 'Série triée : 6,2 ; 7,1 ; 7,1 ; 7,1 ; 7,2 ; 7,2 ; 7,3 ; 7,3 ; 7,4 ; 7,8\nQ1 = médiane des 5 premières = 7,1\nQ3 = médiane des 5 dernières = 7,3\nIQR = 7,3 - 7,1 = 0,2\nLimite inférieure = Q1 - 1,5×IQR = 7,1 - 0,3 = 6,8\n6,2 < 6,8 → la valeur 6,2 EST un outlier.\nConclusion : vérifier la sonde pH, la calibration, et les conditions de mesure ce jour-là.'
      },
      {
        n: '6',
        enonce: 'Sur 365 analyses d\'eau potable, 3 dépassent la valeur paramétrique de turbidité (1 NTU). Calculer le taux de conformité. L\'objectif de 95% est-il atteint ?',
        solution: 'Taux de conformité = (365-3)/365 × 100 = 362/365 × 100 = 99,2%\nOui, l\'objectif de 95% est largement atteint. L\'installation est conforme.\nNote : les 3 dépassements peuvent déclencher une investigation (après pluie ? maintenance filtre ?), même si la conformité globale est bonne.'
      },
      {
        n: '7',
        enonce: 'Calculer le débit moyen et l\'écart-type de la série mensuelle (m³/j) sur 6 mois : 1200, 1500, 1350, 2100, 1100, 1250.',
        solution: 'x̄ = (1200+1500+1350+2100+1100+1250)/6 = 8500/6 = 1417 m³/j\nVariances : (1200-1417)²=47089 ; (1500-1417)²=6889 ; (1350-1417)²=4489 ; (2100-1417)²=466489 ; (1100-1417)²=100489 ; (1250-1417)²=27889\nσ² = (47089+6889+4489+466489+100489+27889)/6 = 653334/6 = 108889\nσ = √108889 = 330 m³/j\nCV = 330/1417 × 100 = 23,3% : variabilité modérée, mois d\'avril (2100) est atypique.'
      },
      {
        n: '8',
        enonce: 'En zone méditerranéenne, le débit mensuel moyen de juillet (Q_juil) suit approximativement une loi normale avec µ = 0,8 m³/s et σ = 0,3 m³/s. Quelle est la probabilité que Q_juil < 0,5 m³/s (Z pour P(Z<-1) = 15,9%) ?',
        solution: 'Z = (0,5 - 0,8) / 0,3 = -0,3/0,3 = -1,0\nP(Q < 0,5) = P(Z < -1) = 15,9%\nSoit environ 1 année sur 6, le débit de juillet sera inférieur à 0,5 m³/s.\nConséquence pour la gestion : les prélèvements doivent tenir compte de ce risque d\'étiage sévère 1 année sur 6.'
      }
    ]
  },

  'GEMEAU-008': {
    id: 'GEMEAU-008',
    titre: 'Tableur, traitement de données et calcul reproductible',
    fiche: {
      intro: 'Le tableur (Excel, LibreOffice Calc, Google Sheets) est l\'outil de travail quotidien du technicien GEMEAU pour les calculs d\'exploitation, la gestion des résultats d\'analyse, la création de rapports et de graphiques. Maîtriser les fonctions avancées d\'un tableur permet d\'automatiser des tâches répétitives, de réduire les erreurs, et de produire des rapports professionnels en quelques clics. Cette compétence est explicitement recherchée par les employeurs du secteur de l\'eau.',
      schema: `<svg viewBox="0 0 260 118" xmlns="http://www.w3.org/2000/svg" style="max-width:260px;width:100%">
  <rect width="260" height="118" fill="#f8fafc" rx="6"/>
  <text x="130" y="13" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a5f" font-family="sans-serif">Tableur — calculs hydrauliques automatisés</text>
  <rect x="10" y="20" width="240" height="88" rx="3" fill="#fff" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="10" y="20" width="240" height="16" fill="#e2e8f0" rx="3"/>
  <text x="40" y="31" text-anchor="middle" font-size="8" font-weight="bold" fill="#334155" font-family="sans-serif">D (m)</text>
  <text x="90" y="31" text-anchor="middle" font-size="8" font-weight="bold" fill="#334155" font-family="sans-serif">i (m/m)</text>
  <text x="145" y="31" text-anchor="middle" font-size="8" font-weight="bold" fill="#334155" font-family="sans-serif">K (m¹/³/s)</text>
  <text x="210" y="31" text-anchor="middle" font-size="8" font-weight="bold" fill="#2563eb" font-family="sans-serif">Q (L/s)</text>
  <line x1="10" y1="36" x2="250" y2="36" stroke="#cbd5e1" stroke-width="0.8"/>
  <line x1="65" y1="20" x2="65" y2="108" stroke="#cbd5e1" stroke-width="0.8"/>
  <line x1="115" y1="20" x2="115" y2="108" stroke="#cbd5e1" stroke-width="0.8"/>
  <line x1="175" y1="20" x2="175" y2="108" stroke="#cbd5e1" stroke-width="0.8"/>
  <text x="40" y="51" text-anchor="middle" font-size="9" fill="#334155" font-family="sans-serif">0,30</text>
  <text x="90" y="51" text-anchor="middle" font-size="9" fill="#334155" font-family="sans-serif">0,003</text>
  <text x="145" y="51" text-anchor="middle" font-size="9" fill="#334155" font-family="sans-serif">70</text>
  <text x="210" y="51" text-anchor="middle" font-size="9" fill="#2563eb" font-family="sans-serif" font-weight="bold">42,5</text>
  <line x1="10" y1="56" x2="250" y2="56" stroke="#e2e8f0" stroke-width="0.8"/>
  <text x="40" y="69" text-anchor="middle" font-size="9" fill="#334155" font-family="sans-serif">0,40</text>
  <text x="90" y="69" text-anchor="middle" font-size="9" fill="#334155" font-family="sans-serif">0,002</text>
  <text x="145" y="69" text-anchor="middle" font-size="9" fill="#334155" font-family="sans-serif">70</text>
  <text x="210" y="69" text-anchor="middle" font-size="9" fill="#2563eb" font-family="sans-serif" font-weight="bold">64,0</text>
  <line x1="10" y1="74" x2="250" y2="74" stroke="#e2e8f0" stroke-width="0.8"/>
  <rect x="175" y="80" width="75" height="16" fill="#fef9c3" stroke="#d97706" stroke-width="1"/>
  <text x="212" y="91" text-anchor="middle" font-size="7.5" fill="#92400e" font-family="sans-serif">=K*A*(A/P)^(2/3)...</text>
  <text x="130" y="110" text-anchor="middle" font-size="8" fill="#64748b" font-family="sans-serif">Manning-Strickler → recalcul automatique</text>
</svg>`,
      sections: [
        {
          titre: '1. Structure d\'un classeur et fonctions de base',
          texte: 'Un classeur (fichier .xlsx) contient plusieurs feuilles de calcul. Chaque cellule est adressée par sa colonne (lettre) et sa ligne (chiffre) : A1, B5, C12. Une formule commence par "=" et peut référencer d\'autres cellules. La référence absolue ($A$1) ne change pas lorsqu\'on copie la formule ; la référence relative (A1) s\'adapte automatiquement.\n\nFonctions arithmétiques de base : SOMME(A1:A10) additionne les cellules A1 à A10 ; MOYENNE(B2:B20) calcule la moyenne de B2 à B20 ; MAX() et MIN() donnent l\'extrême de la plage ; NB() compte les cellules non vides ; ARRONDI(A1;2) arrondit à 2 décimales.\n\nPour un tableur d\'exploitation d\'une STEP, on place en colonne A les dates, en B les débits (m³/j), en C les concentrations DCO entrée (mg/L), en D les DCO sortie, en E la formule du rendement =(C2-D2)/C2*100, en F la charge éliminée =B2*(C2-D2)/1000 (kg/j). En copiant les formules de E2 et F2 vers le bas, toute la colonne se calcule automatiquement.',
          sous_sections: [
            {
              titre: '1.1 Références absolues et relatives',
              texte: 'Si la constante "dose de chlore = 1,5 mg/L" est en $B$1, et le débit en B4, C4, D4..., la formule de dosage en kg/h en E4 est =$B$1*B4/1000. Quand on copie E4 en E5, E6..., le $B$1 reste fixe (dose de chlore) mais B4 devient B5, B6... automatiquement. Sans le $, copier la formule déplacerait aussi la référence à la dose, donnant un résultat faux.'
            }
          ]
        },
        {
          titre: '2. Fonctions conditionnelles et de recherche',
          texte: 'La fonction SI(condition ; valeur_si_vrai ; valeur_si_faux) permet de tester une condition et d\'agir en conséquence. Exemple : SI(D2>50;"Non conforme";"Conforme") où D2 est la DCO sortante et 50 mg/L la valeur limite. Cette fonction est indispensable pour le suivi de conformité réglementaire.\n\nLa fonction NB.SI(plage ; critère) compte le nombre de cellules remplissant un critère. NB.SI(E2:E366;"Non conforme") compte les jours de non-conformité sur une année. SOMME.SI(plage_critère ; critère ; plage_somme) additionne les valeurs correspondant à un critère : SOMME.SI(A2:A366;"Lundi";B2:B366) somme les débits des lundis.\n\nLa fonction RECHERCHEV(valeur ; tableau ; numéro_colonne ; FAUX) recherche une valeur dans la première colonne d\'un tableau et renvoie la valeur dans la colonne spécifiée. Elle sert à retrouver automatiquement un coefficient de Strickler en fonction du matériau de conduite, ou un tarif de traitement en fonction du volume, à partir d\'un tableau de référence.',
          sous_sections: [
            {
              titre: '2.1 SI imbriqués et gestion des seuils réglementaires',
              texte: 'Pour classer la qualité d\'une eau en 3 niveaux : SI(DCO<25;"Bon";SI(DCO<50;"Moyen";"Mauvais")). Ce SI imbriqué est utilisé dans les tableaux de bord de qualité. Pour plus de lisibilité, on peut utiliser la fonction IFS() disponible dans les versions récentes d\'Excel : IFS(DCO<25;"Bon";DCO<50;"Moyen";VRAI;"Mauvais").'
            }
          ]
        },
        {
          titre: '3. Graphiques et visualisation des données',
          texte: 'La création d\'un graphique dans un tableur suit toujours le même schéma : sélectionner les données (en incluant les en-têtes), insérer le type de graphique approprié, puis personnaliser les titres d\'axes, la légende et l\'échelle. Le choix du type de graphique est crucial pour la lisibilité.\n\nTypes de graphiques adaptés aux métiers de l\'eau : graphique en courbes pour l\'évolution temporelle (débit, niveau, concentration) ; histogramme (barres) pour les comparaisons (charge mensuelle, résultats par site) ; nuage de points XY pour les corrélations et les courbes de tarage ; secteurs (camembert) pour les répartitions (part de chaque paramètre dans une charge polluante).\n\nPour la courbe de pompe et la courbe de réseau, on trace un graphique XY avec deux séries : la première (courbe pompe) relie les points débit/HMT du constructeur, la seconde (courbe réseau) relie les valeurs calculées H = H_géo + R×Q². L\'intersection graphique donne le point de fonctionnement. Un axe secondaire peut afficher le rendement de la pompe.',
          sous_sections: [
            {
              titre: '3.1 Mise en forme conditionnelle',
              texte: 'La mise en forme conditionnelle colorie automatiquement les cellules selon leur valeur. Pour le suivi de qualité d\'eau : si NH4+ > 0,5 mg/L → rouge ; si 0,1-0,5 → orange ; si < 0,1 → vert. Cette visualisation immédiate permet de repérer d\'un coup d\'oeil les résultats non conformes dans un tableau de 365 lignes. Dans Excel : Accueil → Mise en forme conditionnelle → Nouvelle règle.'
            }
          ]
        },
        {
          titre: '4. Calcul reproductible et bonnes pratiques',
          texte: 'Un calcul reproductible est un calcul qu\'une autre personne (ou soi-même 6 mois plus tard) peut comprendre, vérifier et modifier sans risque d\'erreur. Principes fondamentaux : séparer les données des formules (les données changent, les formules non) ; documenter les unités dans les en-têtes de colonnes ; ne jamais saisir une constante directement dans une formule si elle peut changer (mettre la constante dans une cellule nommée).\n\nLes cellules nommées simplifient la lecture des formules : si on nomme la cellule B1 "Dose_chlore", la formule =Dose_chlore * Q / 1000 est plus lisible que =$B$1 * B4 / 1000. Dans Excel, on nomme une cellule via la zone de nom (à gauche de la barre de formule).\n\nLa validation des données (Données → Validation) empêche la saisie de valeurs aberrantes : on peut imposer qu\'un débit soit entre 0 et 10 000 m³/h, qu\'un pH soit entre 0 et 14, qu\'une date soit ultérieure à aujourd\'hui. Cette protection réduit drastiquement les erreurs de saisie. La protection des cellules de formules (en verrouillant les cellules calculées et n\'autorisant la saisie que dans les cellules de données) est une bonne pratique pour les fichiers partagés.',
          sous_sections: [
            {
              titre: '4.1 Modèle de rapport d\'exploitation automatisé',
              texte: 'Un bon modèle de rapport d\'exploitation STEP comprend : 1) une feuille "Données" avec la saisie journalière (uniquement les données brutes) ; 2) une feuille "Calculs" avec toutes les formules (charges, rendements, statistiques mensuelles) ; 3) une feuille "Rapport" avec les résultats mis en forme pour l\'impression ou l\'export PDF ; 4) une feuille "Graphiques" avec les évolutions temporelles. Les feuilles Calculs, Rapport et Graphiques se mettent à jour automatiquement quand on saisit de nouvelles données dans la feuille Données.'
            }
          ]
        }
      ],
      points: [
        'SOMME, MOYENNE, MAX, MIN, NB, ARRONDI : fonctions de base à maîtriser',
        'Référence absolue $A$1 : ne change pas à la copie ; relative A1 : s\'adapte',
        'SI(condition ; valeur_vrai ; valeur_faux) : test conditionnel',
        'NB.SI(plage;"critère") : compte les valeurs respectant le critère',
        'RECHERCHEV : recherche et récupère une valeur dans un tableau',
        'Graphique courbes : évolutions temporelles ; XY : corrélations',
        'Mise en forme conditionnelle : visualiser conformité ou anomalie d\'un coup d\'oeil',
        'Séparer données (saisie) et formules (calcul) dans des feuilles distinctes',
        'Nommer les cellules constantes améliore la lisibilité des formules',
        'Valider les données pour prévenir les erreurs de saisie'
      ],
      formules: [
        'Rendement dans tableur : =(C_entree - C_sortie) / C_entree * 100 → [%]',
        'Charge polluante kg/j : = Debit_m3j * (C_entree - C_sortie) / 1000',
        'Test conformité : =SI(NH4 > 0,5 ; "NC" ; "C") où NC = non conforme',
        'Comptage non-conformités : =NB.SI(plage_resultats ; "NC")',
        'Taux conformité : = (NB(plage) - NB.SI(plage ; "NC")) / NB(plage) * 100'
      ],
      retenir: 'Tableur = outil quotidien du technicien eau · SOMME/MOYENNE/SI/NB.SI/RECHERCHEV : fonctions essentielles · Référence absolue $A$1 pour les constantes · Séparer données et formules · Mise en forme conditionnelle pour visualiser la conformité · Graphique XY pour courbes de pompe et de tarage'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Écrire la formule Excel pour calculer le rendement DCO en % sachant que la DCO entrée est en cellule C2 et la DCO sortie en D2.',
        solution: 'Formule : =(C2-D2)/C2*100\nOu avec ARRONDI : =ARRONDI((C2-D2)/C2*100;1) pour afficher 1 décimale.\nNote : il faut vérifier que C2 ≠ 0 (division par zéro) : =SI(C2>0;(C2-D2)/C2*100;"N/A")'
      },
      {
        n: '2',
        enonce: 'La dose de coagulant (constante = 8 mg/L) est en cellule $B$1. Le débit journalier (m³/j) pour 5 jours est en B3:B7. Écrire la formule en C3 pour calculer la quantité de coagulant (kg/j) et expliquer pourquoi utiliser $B$1.',
        solution: 'Formule C3 : =$B$1*B3/1000\n($B$1 = référence absolue, reste fixe à la copie)\n(B3 = référence relative, devient B4, B5... quand on copie vers le bas)\n(÷1000 pour convertir mg/L × m³/j = g/j en kg/j)\nEn copiant C3 vers C4:C7, la dose reste $B$1 et le débit s\'adapte automatiquement.'
      },
      {
        n: '3',
        enonce: 'Écrire la formule SI pour étiqueter les résultats de turbidité en A2:A20 : "Conforme" si ≤ 1 NTU, "Alerte" si entre 1 et 2 NTU, "Non conforme" si > 2 NTU.',
        solution: 'Formule : =SI(A2<=1;"Conforme";SI(A2<=2;"Alerte";"Non conforme"))\nNote : le test A2<=1 est évalué en premier. Si vrai → "Conforme". Sinon, le second SI teste A2<=2. Si vrai → "Alerte". Sinon → "Non conforme".\nCette formule peut être copiée pour toute la colonne B en faisant glisser la poignée de recopie.'
      },
      {
        n: '4',
        enonce: 'Un tableau A1:B13 contient les coefficients de Strickler par matériau (A=matériau, B=K). Comment utiliser RECHERCHEV pour récupérer K correspondant à "PVC" saisi en E1 ?',
        solution: 'Formule : =RECHERCHEV(E1;$A$1:$B$13;2;FAUX)\nExplication :\n- E1 : valeur cherchée ("PVC")\n- $A$1:$B$13 : tableau de recherche (absolu pour la copie)\n- 2 : numéro de la colonne résultat (K est en colonne 2)\n- FAUX : recherche exacte (non approximative)\nSi "PVC" n\'existe pas dans le tableau, la formule renvoie #N/A.'
      },
      {
        n: '5',
        enonce: 'Sur une semaine (7 jours), les pH mesurés matin et soir sont : 7,2/7,4 ; 7,3/7,1 ; 7,5/7,6 ; 7,2/7,3 ; 7,4/7,5 ; 7,1/7,2 ; 7,3/7,4. Écrire les formules MOYENNE, MAX, MIN, NB.SI (< 7,0) dans un tableur organisé en deux colonnes.',
        solution: 'Organisation : colonne A = pH matin (A1:A7), colonne B = pH soir (B1:B7).\nMoyenne globale : =MOYENNE(A1:B7) → donne moyenne des 14 mesures\nMax : =MAX(A1:B7) = 7,6\nMin : =MIN(A1:B7) = 7,1\nNB.SI(pH<7,0) : =NB.SI(A1:B7;"<7,0") = 0 (aucune valeur < 7,0)\nToutes les valeurs sont entre 7,1 et 7,6 : eau tamponée, pH stable.'
      },
      {
        n: '6',
        enonce: 'Décrire comment construire un graphique de la courbe de réseau (H = 8 + 0,005×Q²) pour Q allant de 0 à 100 m³/h, par pas de 10, dans un tableur.',
        solution: '1) Créer colonne A : Q = 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 m³/h\n2) En B1 saisir la formule =8+0,005*A1^2, puis copier vers B2:B11\n3) Valeurs : H = 8 ; 8,5 ; 10 ; 12,5 ; 16 ; 20,5 ; 26 ; 32,5 ; 40 ; 48,5 ; 58 m\n4) Sélectionner A1:B11 → Insertion → Graphique → Nuage de points avec courbes\n5) Titrer les axes : "Débit Q (m³/h)" et "HMT H (m)"'
      },
      {
        n: '7',
        enonce: 'Expliquer la différence entre =SOMME($A$1:A5) et =SOMME($A$1:$A$5) lors d\'une copie vers le bas.',
        solution: '=SOMME($A$1:A5) : la borne haute s\'adapte lors de la copie.\nQuand on copie en ligne 6 : =SOMME($A$1:A6), en ligne 7 : =SOMME($A$1:A7)...\nC\'est une somme cumulée croissante : très utile pour un volume cumulé journalier.\n=SOMME($A$1:$A$5) : les deux bornes sont fixes → toujours la même plage.\nQuelque soit la cellule où on la colle, elle additionne toujours A1:A5.'
      },
      {
        n: '8',
        enonce: 'Un rapport mensuel doit afficher en automatique : nombre de jours conformes (DCO sortie ≤ 125 mg/L), nombre de non-conformes, et taux de conformité. Les résultats sont en C2:C32. Écrire les 3 formules.',
        solution: 'Jours conformes : =NB.SI(C2:C32;"<=125")\nJours non conformes : =NB.SI(C2:C32;">125")\nTaux de conformité (%) : =NB.SI(C2:C32;"<=125")/NB(C2:C32)*100\nOu avec arrondi : =ARRONDI(NB.SI(C2:C32;"<=125")/NB(C2:C32)*100;1)\nNota : NB(C2:C32) compte les cellules non vides (jours avec résultat). Si certains jours manquent, la formule s\'adapte automatiquement.'
      }
    ]
  }

};
