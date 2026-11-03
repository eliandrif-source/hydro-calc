var GEMEAU_B03 = {

  'GEMEAU-019': {
    id: 'GEMEAU-019',
    titre: 'Structure de la matière et composition chimique des eaux',
    fiche: {
      intro: 'Dans les métiers de l\'eau, la connaissance de la composition chimique des eaux est fondamentale : un technicien doit lire un bulletin d\'analyse, interpréter les valeurs et décider d\'un traitement adapté. La minéralisation d\'une eau détermine son agressivité pour les canalisations, son goût, et les traitements nécessaires avant distribution.',
      sections: [
        {
          titre: '1. Structure atomique et tableau périodique',
          texte: 'La matière est constituée d\'atomes, dont le noyau concentre protons (charge +) et neutrons (neutres), entouré d\'électrons (charge -) sur des couches électroniques. Le numéro atomique Z est le nombre de protons, caractéristique de chaque élément. La masse atomique (en unités de masse atomique, uma) est la somme des protons et neutrons. Le tableau périodique classe les éléments par numéro atomique croissant et par familles chimiques ayant des propriétés similaires. Dans le domaine de l\'eau, les éléments les plus fréquents sont : l\'oxygène (O, Z=8), l\'hydrogène (H, Z=1), le carbone (C, Z=6), le calcium (Ca, Z=20), le magnésium (Mg, Z=12), le sodium (Na, Z=11), le potassium (K, Z=19), le chlore (Cl, Z=17), le soufre (S, Z=16), l\'azote (N, Z=7) et le phosphore (P, Z=15). Les ions se forment par gain (anion, charge -) ou perte (cation, charge +) d\'électrons. Ainsi, le calcium Ca perd 2 électrons pour donner Ca²⁺, et le chlore gagne 1 électron pour donner Cl⁻. La molécule d\'eau H₂O est polaire : l\'oxygène attire les électrons plus fortement que l\'hydrogène, créant un dipôle qui explique les propriétés solvantes exceptionnelles de l\'eau. Cette polarité permet à l\'eau de dissoudre facilement les sels minéraux, les acides et les bases, d\'où la grande diversité d\'ions présents dans les eaux naturelles.',
          sous_sections: [
            { titre: '1.1 Ions et liaisons chimiques', texte: 'Les liaisons ioniques, entre ions de charges opposées, forment les sels cristallins (NaCl, CaCO₃). En solution aqueuse, ces sels se dissocient en ions libres. Les liaisons covalentes, par mise en commun d\'électrons, forment les molécules covalentes (H₂O, CO₂, NH₃). La liaison hydrogène, faible mais nombreuse dans l\'eau, explique sa haute tension superficielle, sa chaleur spécifique élevée et son point d\'ébullition anormalement haut pour sa masse molaire.' }
          ]
        },
        {
          titre: '2. Ions majeurs dans les eaux naturelles',
          texte: 'Les eaux naturelles contiennent toujours des ions dissous issus du contact prolongé avec les roches et les sols. On distingue les cations majeurs et les anions majeurs. Les cations majeurs sont : le calcium Ca²⁺ (provient des calcaires et dolomites, 10-500 mg/L selon les régions), le magnésium Mg²⁺ (dolomites, 1-100 mg/L), le sodium Na⁺ (évaporites, intrusions marines, 1-500 mg/L), et le potassium K⁺ (feldspaths, fertilisants, 1-20 mg/L). Les anions majeurs sont : les bicarbonates HCO₃⁻ (dissolution du CO₂ dans calcaires, 50-400 mg/L), les sulfates SO₄²⁻ (gypse, pyrite oxydée, 10-250 mg/L), les chlorures Cl⁻ (évaporites, 1-500 mg/L), et les nitrates NO₃⁻ (activité agricole, 0-100 mg/L). La minéralisation totale (TDS, Total Dissolved Solids) est la somme de tous les sels dissous en mg/L. Elle se mesure par évaporation à 180°C ou s\'estime par la conductivité électrique (TDS ≈ 0,64 × conductivité en µS/cm pour de nombreuses eaux françaises). Une eau douce a une conductivité inférieure à 500 µS/cm, une eau minérale entre 500 et 1500 µS/cm, une eau saumâtre jusqu\'à 5000 µS/cm. L\'analyse ionique complète doit vérifier la balance ionique : la somme des cations en méq/L doit égaler la somme des anions en méq/L (écart < 5% acceptable). Cette vérification détecte une erreur analytique ou un ion oublié.',
          sous_sections: [
            { titre: '2.1 Conductivité électrique', texte: 'La conductivité électrique (en µS/cm ou mS/cm) mesure la capacité d\'une solution à conduire le courant électrique. Elle est liée à la concentration en ions et à leur mobilité. Elle augmente avec la température (environ +2%/°C) ; les résultats sont conventionnellement exprimés à 25°C. Les sondes de terrain mesurent simultanément la conductivité et la température pour effectuer la correction automatique.' }
          ]
        },
        {
          titre: '3. Classification des eaux selon la minéralisation',
          texte: 'La directive cadre européenne sur l\'eau (DCE 2000/60/CE) et la réglementation française (arrêté du 11 janvier 2007) définissent des critères de qualité pour l\'eau potable. La minéralisation conditionne directement la qualité gustative et l\'agressivité de l\'eau vis-à-vis des réseaux. Les eaux très douces (TDS < 50 mg/L) sont peu minéralisées, agressives pour les canalisations en béton et en métal, corrosives ; elles nécessitent souvent une reminéralisation avant distribution (ajout de CO₂ et passage sur un lit de calcaire). Les eaux douces à mi-dures (TDS 50-500 mg/L) sont les plus répandues en France et les plus adaptées à la distribution : elles sont équilibrées, non corrosives, non entartrantes. Les eaux dures (TDS > 500 mg/L, TH > 25°f) forment des dépôts calcaires dans les canalisations et chauffe-eau (entartrage) ; elles peuvent nécessiter un adoucissement ou une décarbonatation. Les eaux saumâtres (TDS 1000-35000 mg/L) sont présentes en zone côtière ou après pollution saline ; elles ne sont pas distribuables sans dessalement (osmose inverse). La distinction entre eau douce, dure ou minérale ne se limite pas au TDS : les ions Ca²⁺ et Mg²⁺ déterminent la dureté (TH), les HCO₃⁻ l\'alcalinité (TAC), et le rapport Ca/Mg la qualité gustative. Une eau très magnésienne peut être laxative ; une eau riche en Na⁺ est déconseillée aux hypertendus.',
          sous_sections: [
            { titre: '3.1 Réglementation qualité eau potable', texte: 'Le code de la santé publique et l\'arrêté du 11/01/2007 fixent les limites de qualité pour l\'eau destinée à la consommation humaine. Exemples : nitrates NO₃⁻ ≤ 50 mg/L, fluorures ≤ 1,5 mg/L, chlorures ≤ 250 mg/L (valeur de référence), conductivité 200-1100 µS/cm à 25°C. Les paramètres indicateurs (conductivité, NH₄⁺, Fe, Mn, Al, COT) signalent un dysfonctionnement du traitement même sans risque sanitaire direct.' }
          ]
        },
        {
          titre: '4. Méthodes de mesure sur le terrain et en laboratoire',
          texte: 'Les analyses chimiques des eaux se font à deux niveaux : sur le terrain (analyses rapides) et en laboratoire (analyses de référence). Sur le terrain, les paramètres mesurables en continu ou par sonde portable sont : le pH (électrode de verre, ±0,05 pH), la conductivité (cellule conductimétrique), la température, l\'oxygène dissous (électrode ampérométrique ou optique), la turbidité (néphélométrie, en NTU), le chlore résiduel libre (colorimétrie DPD, en mg/L), le potentiel rédox (électrode Pt). Ces mesures orientent les décisions de traitement en temps réel. En laboratoire agréé (accréditation COFRAC selon norme NF EN ISO/CEI 17025), les analyses sont réalisées selon des méthodes normalisées : DCO (digestion au dichromate), DBO₅ (incubation 5 jours à 20°C), NH₄⁺ (colorimétrie), NO₃⁻ (chromatographie ionique), métaux (absorption atomique ou ICP-MS). Les résultats sont rendus avec leur incertitude de mesure et comparés aux valeurs limites réglementaires. Le suivi d\'un réseau de distribution exige un plan d\'échantillonnage défini (fréquence selon population desservie, points de prélèvement représentatifs) et une traçabilité complète des résultats.'
        }
      ],
      points: [
        'L\'eau est un solvant polaire universel grâce à la liaison O-H et aux liaisons hydrogène',
        'Les cations majeurs : Ca²⁺, Mg²⁺, Na⁺, K⁺ ; les anions majeurs : HCO₃⁻, SO₄²⁻, Cl⁻, NO₃⁻',
        'TDS (mg/L) ≈ 0,64 × conductivité (µS/cm) pour estimation rapide sur le terrain',
        'La balance ionique (cations = anions en méq/L) vérifie la cohérence d\'une analyse',
        'Les eaux très douces sont corrosives ; les eaux très dures sont entartrantes',
        'La conductivité mesurée se corrige à 25°C (+2%/°C d\'écart)',
        'Eau potable : conductivité 200-1100 µS/cm, NO₃⁻ ≤ 50 mg/L (arrêté 11/01/2007)',
        'Les analyses de terrain (pH, conductivité, O₂, turbidité) guident les décisions d\'exploitation',
        'L\'accréditation COFRAC garantit la fiabilité des analyses selon NF EN ISO/CEI 17025',
        'La polarité de H₂O explique sa forte chaleur spécifique et ses effets thermiques sur les milieux'
      ],
      formules: [
        'Minéralisation estimée : TDS (mg/L) ≈ 0,64 × CE (µS/cm)',
        'Balance ionique : BI (%) = (Σcations - Σanions)/(Σcations + Σanions) × 100 → acceptée si |BI| < 5%',
        'Concentration molaire : C (mol/L) = m (g/L) / M (g/mol)',
        'Conversion méq/L : C (méq/L) = C (mg/L) / (M/z) ; z = valence de l\'ion',
        'Correction conductivité : CE_25 = CE_T / [1 + 0,02 × (T - 25)]'
      ],
      retenir: 'Ions majeurs · Minéralisation · Conductivité · Balance ionique · TDS · Dureté · Eaux corrosives vs entartrantes · COFRAC · Analyse terrain'
    },
    exercices: [
      { n: '1', enonce: 'Un bulletin d\'analyse indique : Ca²⁺ = 80 mg/L, Mg²⁺ = 12 mg/L, Na⁺ = 22 mg/L, K⁺ = 3 mg/L, HCO₃⁻ = 250 mg/L, SO₄²⁻ = 48 mg/L, Cl⁻ = 35 mg/L. Calculer la balance ionique (masses molaires : Ca=40, Mg=24, Na=23, K=39, HCO₃=61, SO₄=96, Cl=35,5).', solution: 'Conversion en méq/L (méq/L = mg/L / (M/z)) :\nCa²⁺ : 80/20 = 4,00 méq/L\nMg²⁺ : 12/12 = 1,00 méq/L\nNa⁺ : 22/23 = 0,96 méq/L\nK⁺ : 3/39 = 0,08 méq/L\nΣcations = 6,04 méq/L\nHCO₃⁻ : 250/61 = 4,10 méq/L\nSO₄²⁻ : 48/48 = 1,00 méq/L\nCl⁻ : 35/35,5 = 0,99 méq/L\nΣanions = 6,09 méq/L\nBI = (6,04-6,09)/(6,04+6,09) × 100 = -0,45% → Excellent, balance vérifiée.' },
      { n: '2', enonce: 'La conductivité d\'une eau est mesurée à 18°C : CE₁₈ = 620 µS/cm. Quelle est la conductivité corrigée à 25°C ? Estimer le TDS.', solution: 'CE_25 = CE_18 / [1 + 0,02 × (18-25)] = 620 / [1 + 0,02 × (-7)] = 620 / (1 - 0,14) = 620 / 0,86 = 720,9 µS/cm\nTDS ≈ 0,64 × 720,9 = 461 mg/L → eau moyennement minéralisée.' },
      { n: '3', enonce: 'Exprimer la concentration de Ca²⁺ = 100 mg/L en mmol/L et en méq/L.', solution: 'C (mmol/L) = 100 / 40 = 2,50 mmol/L\nC (méq/L) = 2,50 × 2 = 5,00 méq/L (valence du Ca = 2)' },
      { n: '4', enonce: 'Une eau souterraine contient 350 mg/L de NaCl (M=58,5 g/mol). Calculer les concentrations en Na⁺ et Cl⁻ en mg/L et en mmol/L.', solution: 'NaCl → Na⁺ + Cl⁻ (dissociation totale)\nNa⁺ : (23/58,5) × 350 = 137,6 mg/L ; 137,6/23 = 5,98 mmol/L\nCl⁻ : (35,5/58,5) × 350 = 212,4 mg/L ; 212,4/35,5 = 5,98 mmol/L' },
      { n: '5', enonce: 'Quelle est la concentration molaire d\'une solution de NaOH à 4 g/L ? (M NaOH = 40 g/mol)', solution: 'C = m/M = 4/40 = 0,1 mol/L = 100 mmol/L' },
      { n: '6', enonce: 'Une eau présente les caractéristiques suivantes : conductivité 1450 µS/cm à 25°C, TH = 42°f. Qualifier cette eau et indiquer les risques potentiels.', solution: 'CE > 1100 µS/cm → dépasse la valeur indicative de potabilité (eau très minéralisée)\nTH = 42°f > 25°f → eau très dure\nRisques : entartrage des canalisations et chauffe-eau, goût calcaire prononcé. Traitements envisageables : adoucissement (résines échangeuses d\'ions) ou décarbonatation à la chaux.' },
      { n: '7', enonce: 'Calculer la masse de CaCl₂ anhydre (M=111 g/mol) à dissoudre dans 500 L d\'eau pour obtenir une concentration en Ca²⁺ de 40 mg/L.', solution: 'Volume = 500 L\nMasse Ca²⁺ voulue = 40 mg/L × 500 L = 20 000 mg = 20 g\nMasse CaCl₂ = masse Ca²⁺ × M(CaCl₂)/M(Ca) = 20 × 111/40 = 55,5 g' },
      { n: '8', enonce: 'Un laboratoire analyse deux eaux : Eau A avec BI = +7,2% et Eau B avec BI = +1,5%. Laquelle est acceptable ? Que peut indiquer une BI hors norme ?', solution: 'Eau A : |BI| = 7,2% > 5% → NON acceptable, probable erreur analytique ou ion majeur non dosé (ex: NH₄⁺ élevé non mesuré, ou erreur sur les bicarbonates).\nEau B : |BI| = 1,5% < 5% → Acceptable, analyse cohérente.' }
    ]
  },

  'GEMEAU-020': {
    id: 'GEMEAU-020',
    titre: 'Concentrations, dilutions et préparation de solutions',
    fiche: {
      intro: 'La préparation de solutions dosées est une opération courante en station de traitement d\'eau : préparation du lait de chaux pour la correction de pH, solution de chlore pour la désinfection, solution de coagulant. Un technicien doit calculer les masses ou volumes de réactif nécessaires et vérifier les concentrations par titrage ou test colorimétrique.',
      sections: [
        {
          titre: '1. Expressions de la concentration',
          texte: 'La concentration d\'une solution exprime la quantité de soluté dissous dans un volume de solvant. Plusieurs unités coexistent en pratique et il est essentiel de savoir les convertir. La concentration massique (Cm) est la masse de soluté par litre de solution : Cm = m/V en g/L ou mg/L. Elle est la plus utilisée en analyse de l\'eau (mg/L = ppm massique pour les eaux peu minéralisées, car ρ ≈ 1 kg/L). La concentration molaire (ou molalité approchée pour les solutions diluées) est C = m/(M×V) en mol/L. Elle est utile pour les calculs stœchiométriques (neutralisation acide-base, précipitation). Le titre (ou fraction massique) est la masse de soluté pour 100 g de solution : t = (m_soluté/m_solution) × 100 en %. Les produits commerciaux sont souvent titrés en % : l\'acide chlorhydrique commercial est à 35%, la soude à 30%, l\'hypochlorite de sodium à 47-50 g/L de Cl₂ actif. Les concentrations en ppm (parties par million) et ppb (parties par milliard) : 1 ppm = 1 mg/L = 1 µg/mL pour les eaux ; 1 ppb = 1 µg/L = 1 ng/mL. Ces unités sont utilisées pour les micropolluants. La conversion titre commercial → concentration massique s\'obtient par : Cm (g/L) = titre (%) × densité (g/mL) × 10. Exemple : HCl commercial à 35%, ρ = 1,18 g/mL → Cm = 35 × 1,18 × 10 = 413 g/L = 11,3 mol/L.',
          sous_sections: [
            { titre: '1.1 Teneur en chlore actif', texte: 'Pour l\'hypochlorite de sodium (eau de Javel), la concentration est souvent exprimée en degrés chlorométriques (°Ch), en % de Cl₂ actif, ou directement en g/L de Cl₂ actif. 1°Ch = 3,17 g/L de Cl₂ actif. Le javel commercial 47-50°Ch correspond à 150-160 g/L de Cl₂ actif. Pour doser le chlore résiduel dans une eau traitée, on utilise la méthode DPD (colorimétrique) sur le terrain (0,01 à 6 mg/L Cl₂).' }
          ]
        },
        {
          titre: '2. Loi des mélanges et dilutions',
          texte: 'La dilution consiste à diminuer la concentration d\'une solution en ajoutant du solvant (eau) sans changer la quantité de soluté. La relation fondamentale de dilution est : C₁ × V₁ = C₂ × V₂, où C₁ et V₁ sont la concentration et le volume de la solution concentrée, et C₂ et V₂ ceux de la solution diluée. Cette relation s\'applique quelle que soit l\'unité de concentration (g/L, mol/L, mg/L, %) à condition d\'être cohérent. Exemple : préparer 10 L d\'une solution de NaOCl à 0,5 g/L de Cl₂ à partir d\'un concentré à 150 g/L de Cl₂. V₁ = (C₂ × V₂) / C₁ = (0,5 × 10) / 150 = 0,033 L = 33 mL. On prend donc 33 mL de javel concentré et on complète à 10 L avec de l\'eau. La loi des mélanges permet de calculer la concentration d\'un mélange de deux solutions de même soluté : Cm_final = (C₁×V₁ + C₂×V₂) / (V₁+V₂). En pratique, on mélange souvent une eau traitée avec une eau brute (by-pass) pour atteindre une qualité cible ; le calcul de mélange s\'applique à tous les paramètres (TH, conductivité, NO₃⁻). Pour des mélanges impliquant des réactions chimiques (neutralisation acide-base), il faut utiliser les méq/L et la règle de neutralisation : Cacide × Vacide = Cbase × Vbase.',
          sous_sections: [
            { titre: '2.1 Dilutions en série', texte: 'En microbiologie (analyses bactériologiques), on réalise des dilutions décimales successives : chaque étape divise par 10 la concentration. Pour doser E. coli dans une eau usée à ~10⁶ UFC/100 mL, on dilue 10⁻⁴ à 10⁻⁶ fois. La concentration dans la solution finale = concentration initiale × facteur de dilution total (10⁻⁴ si 4 dilutions au 1/10).' }
          ]
        },
        {
          titre: '3. Préparation de réactifs courants en station',
          texte: 'En station de traitement d\'eau potable ou de traitement des eaux usées, le technicien prépare régulièrement des solutions de réactifs pour l\'injection dans le process. Les principales solutions préparées sont : la solution de chlore pour la désinfection (NaOCl ou Cl₂ gazeux), la solution de coagulant (sulfate d\'aluminium Al₂(SO₄)₃, chlorure ferrique FeCl₃), le lait de chaux pour la correction de pH et la reminéralisation, la soude NaOH ou l\'acide chlorhydrique HCl pour neutralisation, les polymères floculants (aide-floculation). Pour la désinfection, la dose de chlore dans l\'eau traitée vise un résidu de chlore libre de 0,2 à 0,5 mg/L en bout de réseau. La demande en chlore (Cx) de l\'eau (oxydation de la matière organique, NH₄⁺, NO₂⁻, fer, manganèse) s\'évalue expérimentalement (point de rupture de la chloration = breakpoint). La dose injectée = demande + résidu souhaité. Pour le coagulant, la dose optimale est déterminée par le jar-test (test de floculation en laboratoire sur 6 béchers, doses croissantes, observation visuelle de la clarification). Les concentrations de travail des solutions injectées par pompes doseuses sont typiquement 5-20% pour le coagulant et 0,5-5 g/L de Cl₂ pour le javel, afin d\'obtenir des débits de pompe raisonnables (0,1 à 10 L/h selon l\'installation).',
          sous_sections: [
            { titre: '3.1 Calcul de la quantité journalière de réactif', texte: 'Pour une station traitant un débit Q (m³/j), avec une dose de réactif d (mg/L = g/m³), la consommation journalière est : masse (g/j) = d (g/m³) × Q (m³/j). Si la solution mère est à Cs (g/L), le volume journalier de solution à injecter est : Vsol (L/j) = masse (g/j) / Cs (g/L). Ces calculs sont à refaire lors de tout changement de débit ou de qualité d\'eau.' }
          ]
        },
        {
          titre: '4. Vérification des concentrations : étalonnage et titrages',
          texte: 'La concentration réelle d\'une solution préparée ou d\'un réactif commercial doit être vérifiée avant utilisation, car les réactifs vieillissent (le javel se dégrade, la chaux carbonate) et les pesées ou mesures de volume comportent des incertitudes. Le titrage (ou dosage) est la technique de référence : on ajoute progressivement une solution étalon (de concentration précisément connue) à la solution à analyser jusqu\'au point d\'équivalence signalé par un indicateur coloré ou une variation électrochimique. Exemple : le titrage alcalimétrique de l\'alcalinité (TAC) d\'une eau se fait en ajoutant de l\'acide H₂SO₄ 0,02N jusqu\'à virage du rouge de méthyle (pH 4,5) ; TAC (méq/L) = V_acide (mL) × N_acide / V_eau (mL) × 1000. Le titrage complexométrique de la dureté (TH) utilise l\'EDTA (éthylène diamine tétraacétate) comme solution titrante à 0,01 mol/L, indicateur noir d\'eriochrome T (NET), virage bleu-violet → bleu pur. TH (°f) = V_EDTA (mL) × 10 pour 100 mL d\'eau. Pour l\'hypochlorite, le dosage iodométrique (KI + Na₂S₂O₃) ou le kit colorimétrique DPD permettent de vérifier le titre chlorométrique. L\'étalonnage des instruments de terrain (pH-mètre, conductimètre, sondes) est indispensable avant chaque campagne : solutions tampon pH 4, 7, 10 ; solutions étalon conductivité. Un étalonnage non fait invalide toutes les mesures.'
        }
      ],
      points: [
        'Concentration massique Cm (g/L ou mg/L) = m/V ; concentration molaire C (mol/L) = Cm/M',
        'Loi de dilution : C₁×V₁ = C₂×V₂ → s\'applique quelle que soit l\'unité de concentration',
        '1 ppm = 1 mg/L pour les eaux (densité ≈ 1) ; 1 ppb = 1 µg/L',
        'Titre commercial → Cm : Cm (g/L) = titre (%) × densité (g/mL) × 10',
        'Chlore javel : 1°Ch = 3,17 g/L Cl₂ actif ; javel 47°Ch ≈ 150 g/L Cl₂',
        'Dose journalière réactif (g/j) = dose (g/m³) × débit (m³/j)',
        'Le jar-test détermine la dose optimale de coagulant pour chaque eau brute',
        'Le titrage est la méthode de référence pour vérifier la concentration réelle d\'une solution',
        'TH par titrage EDTA 0,01 M : TH (°f) = V_EDTA (mL) × 10 / V_eau (en 100 mL)',
        'Un pH-mètre doit être étalonné avec deux tampons encadrant la plage de mesure prévue'
      ],
      formules: [
        'Dilution : C₁ × V₁ = C₂ × V₂ → V₁ (L) = C₂ × V₂ / C₁',
        'Mélange : Cf = (C₁×V₁ + C₂×V₂) / (V₁+V₂)',
        'Conversion titre : Cm (g/L) = titre (%) × ρ (g/mL) × 10',
        'Dose journalière : m (g/j) = d (g/m³) × Q (m³/j)',
        'TAC titrage : TAC (méq/L) = V_H2SO4 (mL) × N / V_échantillon (mL) × 1000',
        'TH titrage EDTA : TH (°f) = V_EDTA (mL) × 10 pour 100 mL d\'eau analysée'
      ],
      retenir: 'Dilution C₁V₁=C₂V₂ · Titre commercial · ppm=mg/L · Javel °Ch · Dose réactif · Jar-test · Titrage EDTA · Étalonnage terrain'
    },
    exercices: [
      { n: '1', enonce: 'On dispose d\'un bidon de javel à 48°Ch (= 152 g/L de Cl₂). Quel volume faut-il prélever pour préparer 200 L d\'une solution de travail à 2 g/L de Cl₂ ?', solution: 'C₁×V₁ = C₂×V₂ → V₁ = (2 × 200) / 152 = 2,63 L de javel concentrée.\nOn prélève 2,63 L et on complète à 200 L avec de l\'eau.' },
      { n: '2', enonce: 'Une station traite un débit de 5000 m³/j. La dose de sulfate d\'aluminium est de 15 mg/L. La solution de coagulant est préparée à 100 g/L. Calculer le volume de solution de coagulant à injecter par jour.', solution: 'Masse journalière = 15 g/m³ × 5000 m³/j = 75 000 g/j = 75 kg/j\nVolume solution = 75 000 g/j ÷ 100 g/L = 750 L/j\nDébit pompe doseuse ≈ 750 L/j ÷ 24h ≈ 31,25 L/h' },
      { n: '3', enonce: 'On titre la dureté d\'une eau : 100 mL d\'eau ont nécessité 18,5 mL d\'EDTA 0,01 mol/L. Calculer le TH en °f et en mg/L de CaCO₃ (M CaCO₃ = 100 g/mol).', solution: 'TH (°f) = V_EDTA (mL) × 10 = 18,5 × 10 = 185 × (18,5/10) → TH = 18,5°f\nConversion : 1°f = 10 mg/L de CaCO₃ → TH = 18,5 × 10 = 185 mg/L CaCO₃\nEau dure (TH > 15°f).' },
      { n: '4', enonce: 'Calculer la concentration molaire de l\'acide sulfurique commercial (H₂SO₄, M=98 g/mol) à 96%, ρ = 1,84 g/mL.', solution: 'Cm = 96 × 1,84 × 10 = 1766,4 g/L\nC (mol/L) = 1766,4 / 98 = 18,0 mol/L' },
      { n: '5', enonce: 'On mélange 300 m³/j d\'une eau souterraine (NO₃⁻ = 65 mg/L) avec 700 m³/j d\'une eau de surface (NO₃⁻ = 8 mg/L). Calculer la teneur en nitrates du mélange. Respecte-t-on la norme de 50 mg/L ?', solution: 'Mélange : Cf = (65×300 + 8×700) / (300+700) = (19 500 + 5 600) / 1000 = 25 100/1000 = 25,1 mg/L\nOui, 25,1 mg/L < 50 mg/L → conforme à la norme eau potable.' },
      { n: '6', enonce: 'Pour corriger le pH d\'une eau à 6,2 vers 7,5, on injecte de la soude NaOH (M=40 g/mol). Un essai jar-test montre qu\'il faut 8 mg/L de NaOH pour atteindre pH 7,5. Station : 2 000 m³/j. Masse journalière et volume de solution NaOH à 40 g/L.', solution: 'Masse NaOH/j = 8 g/m³ × 2000 m³/j = 16 000 g/j = 16 kg/j\nVolume solution = 16 000 / 40 = 400 L/j' },
      { n: '7', enonce: 'On prépare 1 L d\'une solution tampon pH 7 en dissolvant 3,4 g de KH₂PO₄ (M=136 g/mol) et 8,7 g de K₂HPO₄ (M=174 g/mol). Calculer les concentrations molaires des deux sels.', solution: 'C(KH₂PO₄) = 3,4/136 = 0,025 mol/L = 25 mmol/L\nC(K₂HPO₄) = 8,7/174 = 0,050 mol/L = 50 mmol/L' },
      { n: '8', enonce: 'Le TAC d\'une eau est titré : 100 mL d\'eau nécessitent 12,3 mL d\'acide sulfurique 0,02 N pour atteindre pH 4,5. Calculer le TAC en méq/L et en mg/L de CaCO₃.', solution: 'TAC (méq/L) = (12,3 × 0,02 / 100) × 1000 = 2,46 méq/L\nConversion : 1 méq/L HCO₃⁻ ≡ 50 mg/L CaCO₃ → TAC = 2,46 × 50 = 123 mg/L CaCO₃' }
    ]
  },

  'GEMEAU-021': {
    id: 'GEMEAU-021',
    titre: 'Acides, bases, pH et pouvoir tampon',
    fiche: {
      intro: 'Le pH est le paramètre le plus mesuré dans les métiers de l\'eau : il conditionne la coagulation, la désinfection, l\'équilibre calco-carbonique et la vie aquatique. Un pH trop bas rend l\'eau corrosive pour les canalisations en acier et béton ; un pH trop élevé précipite des incrostations calcaires et réduit l\'efficacité du chlore. Le technicien doit maîtriser les corrections de pH et comprendre le pouvoir tampon naturel des eaux.',
      sections: [
        {
          titre: '1. Théorie acide-base de Brönsted',
          texte: 'Selon Brönsted-Lowry (1923), un acide est un donneur de proton H⁺ et une base est un accepteur de proton. Toute réaction acide-base implique un transfert de proton : l\'acide cède H⁺ à la base pour former l\'acide conjugué de la base et la base conjuguée de l\'acide. Exemple : CH₃COOH (acide acétique) + H₂O ⇌ CH₃COO⁻ (acétate) + H₃O⁺. La constante d\'acidité Ka = [CH₃COO⁻][H₃O⁺] / [CH₃COOH] = 1,8×10⁻⁵ à 25°C. Le pKa = -log(Ka) = 4,75. Un acide fort a un Ka très grand (pKa < 0) : HCl, HNO₃, H₂SO₄ sont totalement dissociés en solution diluée. Un acide faible a un Ka petit (pKa > 0) : acide acétique (pKa 4,75), acide carbonique (pKa₁ 6,35, pKa₂ 10,33). La relation fondamentale : pH = -log([H⁺]) où [H⁺] est la concentration molaire en ions hydronium (H₃O⁺). À 25°C, l\'eau pure a pH = 7 (eau neutre) ; pH < 7 est acide (excès H⁺) ; pH > 7 est basique (excès OH⁻). La relation de l\'eau pure : [H⁺][OH⁻] = Ke = 10⁻¹⁴ à 25°C. Cette constante varie avec la température : à 10°C, Ke = 10⁻¹⁴·⁵ (l\'eau pure a pH 7,27 !) ; à 50°C, Ke = 10⁻¹³·⁵ (eau pure pH 6,75). Cette variation explique pourquoi une eau chauffée mesurée à 50°C et donnant pH 6,75 est bien neutre.',
          sous_sections: [
            { titre: '1.1 Mesure du pH', texte: 'Le pH-mètre électronique mesure le potentiel de l\'électrode de verre par rapport à une électrode de référence (calomel ou Ag/AgCl). La relation de Nernst donne : E = E₀ + (RT/F)×ln[H⁺] = E₀ - 0,0592×pH à 25°C. La pente théorique est 59,2 mV/pH à 25°C (et 54 mV/pH à 10°C). L\'étalonnage se fait avec au moins 2 solutions tampon encadrant la gamme de mesure. Précaution : l\'électrode doit être stockée dans une solution KCl 3 mol/L, jamais à sec.' }
          ]
        },
        {
          titre: '2. Importance du pH dans les traitements de l\'eau',
          texte: 'Le pH est le paramètre clé qui gouverne la majorité des processus physico-chimiques de traitement de l\'eau. En coagulation-floculation (traitement eau potable), le coagulant sulfate d\'aluminium Al₂(SO₄)₃ est efficace entre pH 6,5 et 7,5 (formation de flocons d\'Al(OH)₃ colloïdaux) ; en dehors de cette plage, Al³⁺ reste en solution ou forme des précipités trop denses. Le FeCl₃ est efficace sur une plage plus large (pH 5-8,5). Pour la désinfection au chlore, l\'efficacité biocide est liée à la proportion d\'acide hypochloreux HClO (forme active) par rapport à l\'hypochlorite ClO⁻ (forme inactive) : à pH 7, 75% HClO et 25% ClO⁻ ; à pH 8, seulement 25% HClO. C\'est pourquoi un pH de désinfection optimal est entre 6,5 et 7,5. Pour l\'équilibre calco-carbonique, le pH de saturation (pHs) détermine si l\'eau est entartrante (pH > pHs) ou corrosive (pH < pHs). L\'index de Langelier IL = pH - pHs : IL > 0 → entartrante ; IL < 0 → corrosive. Pour le traitement biologique en STEP, les bactéries nitrifiantes sont sensibles au pH (optimum 7,5-8,5) ; en dessous de 6,5 ou au-dessus de 9, la nitrification est inhibée. En rejet milieu naturel, les arrêtés de rejet imposent en général pH 6-8,5 pour les effluents de STEP.',
          sous_sections: [
            { titre: '2.1 Correction du pH en eau potable', texte: 'Pour relever le pH d\'une eau acide corrosive, on injecte : de la soude NaOH (dissolution instantanée, dosage précis), du lait de chaux Ca(OH)₂ (moins coûteux mais suspension trouble), de la chaux vive CaO (dangereux, réaction exothermique, peu utilisé). Pour abaisser le pH (eau trop basique), on injecte du CO₂ (dissolution dans un injecteur venturi) ou de l\'acide chlorhydrique HCl (solution à 10-30%). La régulation du pH est généralement automatique : une sonde pH en ligne pilote une pompe doseuse par régulation PID.' }
          ]
        },
        {
          titre: '3. Pouvoir tampon et système bicarbonate',
          texte: 'Le pouvoir tampon d\'une solution est sa résistance à la variation de pH lors de l\'ajout d\'acide ou de base. Une solution tampon contient un acide faible et sa base conjuguée en proportions comparables (entre 0,1 et 10 fois le rapport base/acide). La relation de Henderson-Hasselbalch décrit le pH d\'un tampon : pH = pKa + log([base conjuguée] / [acide faible]). Dans les eaux naturelles, le système tampon prédominant est le système carbonate-bicarbonate : CO₂(aq) ⇌ H⁺ + HCO₃⁻ (pKa₁ = 6,35) et HCO₃⁻ ⇌ H⁺ + CO₃²⁻ (pKa₂ = 10,33). La plupart des eaux naturelles (pH 6,5-8,5) ont leur tampon assuré par le couple CO₂/HCO₃⁻. Plus la teneur en HCO₃⁻ (alcalinité) est élevée, plus le pouvoir tampon est fort. Une eau à TAC = 3 méq/L résistera bien à une injection d\'acide ou de base ; une eau de pluie (TAC ≈ 0,05 méq/L, pH 5,6) est très peu tamponnée et son pH varie vite. Dans un réacteur biologique (STEP), les bactéries produisent du CO₂ (acidifiant) et consomment HCO₃⁻ lors de la nitrification (NH₄⁺ + 2O₂ → NO₃⁻ + H₂O + 2H⁺). Un effluent faiblement alcalin peut voir son pH chuter et la nitrification s\'auto-inhiber ; dans ce cas, on ajoute de la chaux ou du bicarbonate de sodium pour maintenir le tampon.'
        },
        {
          titre: '4. Titrages acide-base : TA, TAC, TP',
          texte: 'L\'alcalinité d\'une eau est la capacité à neutraliser les acides, due à la présence d\'ions OH⁻, CO₃²⁻ et HCO₃⁻. Elle se mesure par deux titrages distincts avec H₂SO₄ ou HCl normé : le TA (titre alcalimétrique simple) mesure jusqu\'à pH 8,3 (indicateur phénolphtaléine), neutralisant OH⁻ et la moitié de CO₃²⁻ ; le TAC (titre alcalimétrique complet) mesure jusqu\'à pH 4,5 (indicateur méthyl orange ou rouge de méthyle), neutralisant toute l\'alcalinité (OH⁻ + CO₃²⁻ + HCO₃⁻). Pour les eaux naturelles courantes (pH 6,5-8,5), TA = 0 (peu de CO₃²⁻ et OH⁻) et TAC ≈ HCO₃⁻ / 61 × 1000 méq/L. Le TP (titre alcalimétrique phénolphtaléine) est synonyme de TA. Interprétation pratique : si TA = 0, l\'eau contient essentiellement HCO₃⁻ ; si TA > 0, des carbonates ou hydroxydes sont présents (eau basique). Pour les eaux de chaux ou les lixiviats alcalins, TA > 0 est fréquent. La mesure du TAC en exploitation quotidienne est rapide (titrette ou burette, 5 minutes) et permet de vérifier la stabilité de l\'alcalinité de l\'eau traitée, garante de la continuité du pouvoir tampon naturel.'
        }
      ],
      points: [
        'pH = -log[H⁺] ; eau neutre pH = 7 à 25°C (varie avec T°, Ke change)',
        'Acide fort : pKa < 0, dissociation totale (HCl, H₂SO₄, HNO₃)',
        'Henderson-Hasselbalch : pH = pKa + log([A⁻]/[HA]) pour les tampons',
        'Tampon naturel des eaux : couple CO₂/HCO₃⁻, pKa₁ = 6,35',
        'Coagulation Al₂(SO₄)₃ optimale entre pH 6,5 et 7,5',
        'Chlore : HClO (actif) prédominant < pH 7,5 ; ClO⁻ (inactif) > pH 8',
        'Index de Langelier IL = pH - pHs : IL > 0 entartrant, IL < 0 corrosif',
        'TAC (méq/L) = V_acide (mL) × N / V_eau (mL) × 1000 ; titrage jusqu\'à pH 4,5',
        'Nitrification inhibée hors pH 7,5-8,5 ; alcalinité suffisante indispensable',
        'L\'électrode pH doit être étalonnée avec 2 tampons ; stockée dans KCl 3M'
      ],
      formules: [
        'pH = -log[H⁺] et pOH = -log[OH⁻] avec pH + pOH = 14 (à 25°C)',
        'Henderson-Hasselbalch : pH = pKa + log([base]/[acide])',
        'Produit ionique : [H⁺][OH⁻] = Ke = 10⁻¹⁴ à 25°C',
        'TAC (méq/L) = V_acide (mL) × N_acide / V_eau (mL) × 1000',
        'Index de Langelier : IL = pH_mesuré - pH_saturation = pH - pHs',
        'Nernst pH-mètre : ΔE = -0,0592 × ΔpH (à 25°C) ; pente = 59,2 mV/pH'
      ],
      retenir: 'pH tampon · pKa bicarbonate 6,35 · HClO vs ClO⁻ · Coagulation pH 6,5-7,5 · Henderson-Hasselbalch · TAC alcalinité · Index Langelier · Étalonnage électrode'
    },
    exercices: [
      { n: '1', enonce: 'Une eau a pH = 7,2 à 25°C. Calculer [H⁺], [OH⁻] et indiquer si l\'eau est acide, neutre ou basique.', solution: '[H⁺] = 10⁻⁷·² = 6,31×10⁻⁸ mol/L\n[OH⁻] = 10⁻¹⁴ / 10⁻⁷·² = 10⁻⁶·⁸ = 1,58×10⁻⁷ mol/L\npH = 7,2 > 7 → eau légèrement basique (eau naturelle normale).' },
      { n: '2', enonce: 'Calculer le pH d\'une solution tampon acétate : [CH₃COOH] = 0,1 mol/L, [CH₃COO⁻] = 0,15 mol/L, pKa = 4,75.', solution: 'pH = pKa + log([CH₃COO⁻]/[CH₃COOH]) = 4,75 + log(0,15/0,1) = 4,75 + log(1,5) = 4,75 + 0,176 = 4,93' },
      { n: '3', enonce: 'Un titrage du TAC : 100 mL d\'eau nécessitent 9,8 mL de H₂SO₄ 0,04N. Calculer le TAC en méq/L. Estimer [HCO₃⁻] en mg/L (M HCO₃⁻ = 61 g/mol).', solution: 'TAC = (9,8 × 0,04 / 100) × 1000 = 3,92 méq/L\n[HCO₃⁻] ≈ TAC × M = 3,92 méq/L × 61 mg/méq = 239 mg/L' },
      { n: '4', enonce: 'Expliquer pourquoi une station de potabilisation maintient le pH à 7,0 avant la chloration. Justifier avec les espèces du chlore.', solution: 'À pH 7,0 : fraction HClO = Ke/(Ke + [H⁺]) = 10⁻⁷·⁶/(10⁻⁷·⁶ + 10⁻⁷) ≈ HClO dominant\nSelon la courbe de spéciation Cl/pH : à pH 7,0, ~75% HClO (pouvoir désinfectant 80× supérieur à ClO⁻)\nLes eaux à pH 8,5 n\'auraient que ~10% HClO → dose de chlore à multiplier par 8 pour le même effet bactéricide.' },
      { n: '5', enonce: 'Une eau de rivière a pH = 5,8 et TAC = 0,2 méq/L. Elle est acide et peu tamponnée. On veut corriger à pH 7,2. Quel réactif utiliser et pourquoi ?', solution: 'Eau acide corrosive pour béton et acier, peu tamponnée.\nRéactif conseillé : NaOH (soude) → correction précise et rapide du pH.\nOu injection CO₂ + calcaire (reminéralisation) : relève pH et reconstitue le TAC pour tamponner à long terme.\nÀ éviter : acide (contraire du besoin).' },
      { n: '6', enonce: 'Calculer la proportion de HClO et ClO⁻ à pH 7,5 sachant que pKa(HClO/ClO⁻) = 7,54.', solution: 'Ka = 10⁻⁷·⁵⁴ = 2,88×10⁻⁸\n[H⁺] à pH 7,5 = 10⁻⁷·⁵ = 3,16×10⁻⁸\n%HClO = [H⁺] / ([H⁺] + Ka) × 100 = 3,16×10⁻⁸ / (3,16×10⁻⁸ + 2,88×10⁻⁸) × 100 = 52,3%\n%ClO⁻ = 47,7%\n→ À pH 7,5, on a environ 52% HClO et 48% ClO⁻ ; c\'est la zone de transition optimale désinfection.' },
      { n: '7', enonce: 'Quelle est la concentration en [H⁺] d\'une eau à pH = 9,1 ? Calculer pOH et [OH⁻].', solution: '[H⁺] = 10⁻⁹·¹ = 7,94×10⁻¹⁰ mol/L\npOH = 14 - 9,1 = 4,9\n[OH⁻] = 10⁻⁴·⁹ = 1,26×10⁻⁵ mol/L' },
      { n: '8', enonce: 'Une STEP traite un effluent avec TAC entrant = 6 méq/L. La nitrification consomme 7,14 g d\'alcalinité (en CaCO₃) par g d\'azote oxydé. Si 40 mg/L de NH₄⁺-N sont nitrifiés, calculer le TAC résiduel (1 méq/L ≡ 50 mg/L CaCO₃).', solution: 'Alcalinité consommée = 7,14 × 40 = 285,6 mg/L CaCO₃\nEn méq/L : 285,6 / 50 = 5,71 méq/L\nTAC résiduel = 6,00 - 5,71 = 0,29 méq/L → Dangereux ! Risque de chute de pH et inhibition de la nitrification. Faut ajouter du bicarbonate.' }
    ]
  },

  'GEMEAU-022': {
    id: 'GEMEAU-022',
    titre: 'Dureté, alcalinité et équilibre calco-carbonique',
    fiche: {
      intro: 'L\'équilibre calco-carbonique est au cœur de la gestion des réseaux d\'eau potable : une eau corrosive ronge les canalisations et libère des métaux (plomb, cuivre) ; une eau entartrante colmate les conduites et réduit les débits. Le technicien évalue cet équilibre par le calcul de l\'index de Langelier à partir des paramètres mesurés sur le terrain (pH, TH, TAC, T°, TDS) et prend les mesures correctives nécessaires.',
      sections: [
        {
          titre: '1. Dureté de l\'eau : définitions et mesure',
          texte: 'La dureté totale (TH, Titre Hydrotimétrique) exprime la concentration en ions calcium Ca²⁺ et magnésium Mg²⁺, qui sont les principaux formateurs de calcaire (CaCO₃) et de dolomite (CaMg(CO₃)₂). L\'unité française est le degré français (°f) : 1°f correspond à 4 mg/L de Ca²⁺ ou 2,4 mg/L de Mg²⁺, équivalant à 10 mg/L de CaCO₃. La dureté peut aussi s\'exprimer en mg/L CaCO₃, en mmol/L ou en °d (degrés allemands) ; les conversions sont : 1°f = 10 mg/L CaCO₃ = 0,1 mmol/L (Ca+Mg) = 0,56°d. On distingue la dureté calcique (THCa = Ca²⁺ seul) et la dureté magnésienne (THMg = Mg²⁺ seul), avec TH = THCa + THMg. La dureté temporaire (TH-temp) correspond aux sels de bicarbonates (Ca(HCO₃)₂ et Mg(HCO₃)₂), éliminés par ébullition (précipitation de CaCO₃). La dureté permanente est due aux sulfates et chlorures de Ca et Mg, non éliminés par ébullition. La mesure du TH se fait par titrage complexométrique à l\'EDTA en présence de l\'indicateur NET (Noir d\'Eriochrome T) : l\'EDTA chélate tous les ions Ca²⁺ et Mg²⁺ et le virage du rouge-violet au bleu pur indique l\'équivalence. Le résultat : TH (°f) = V_EDTA (mL) × C_EDTA (mmol/mL) × 10 000 / V_eau (mL). Pour V_eau = 100 mL et EDTA 0,01 mol/L : TH (°f) = V_EDTA (mL) × 10 / 10 = V_EDTA (mL). Classification : eau très douce < 5°f ; douce 5-15°f ; mi-dure 15-25°f ; dure 25-40°f ; très dure > 40°f.',
          sous_sections: [
            { titre: '1.1 Impacts de la dureté', texte: 'Eaux dures : entartrage des chauffe-eau (dépôt CaCO₃), vannes, échangeurs thermiques → perte thermique, usure mécanique. En AEP : entartrage progressif des canalisations réduisant la section et le débit (15 mm de calcaire = 25% de perte de débit). Eaux très douces : agressives (attaquent les canalisations en acier, cuivre, béton), gout plat. Les pays nordiques et zones granitiques (Bretagne, Massif Central) ont des eaux très douces nécessitant une reminéralisation.' }
          ]
        },
        {
          titre: '2. Alcalinité : TA et TAC',
          texte: 'L\'alcalinité totale TAC (Titre Alcalimétrique Complet) mesure la capacité de l\'eau à neutraliser les acides forts. Elle est due à la présence d\'espèces basiques : OH⁻, CO₃²⁻ et HCO₃⁻. Le TAC se titre avec un acide fort (H₂SO₄ ou HCl) jusqu\'à pH 4,5, point où toute l\'alcalinité est neutralisée. Le TA (Titre Alcalimétrique simple) se titre jusqu\'à pH 8,3 et correspond à la neutralisation de OH⁻ et de la moitié de CO₃²⁻. Dans les eaux naturelles à pH < 8,3 (qui est la majorité), TA = 0 et TAC ≈ [HCO₃⁻] / 61 × 1000 méq/L. L\'alcalinité est exprimée en méq/L ou en mg/L de CaCO₃ (1 méq/L = 50 mg/L CaCO₃). Les valeurs typiques : eau de source 1-5 méq/L, eau de pluie 0,05 méq/L, eau après traitement calcaire 4-8 méq/L. Le TAC est un paramètre clé de la reminéralisation : en faisant passer l\'eau sur un lit de calcaire dissout par du CO₂ injecté, on élève simultanément le pH et le TAC. La réaction : CO₂ + CaCO₃ + H₂O → Ca(HCO₃)₂ → Ca²⁺ + 2HCO₃⁻. On vise généralement TAC ≥ 2,5 méq/L (soit ≥ 125 mg/L HCO₃⁻) pour garantir un bon pouvoir tampon dans le réseau de distribution.'
        },
        {
          titre: '3. Équilibre calco-carbonique et index de Langelier',
          texte: 'L\'équilibre calco-carbonique est l\'état d\'équilibre entre le carbonate de calcium CaCO₃ dissous et le CO₂ dissous dans l\'eau. Cet équilibre dépend de 5 paramètres mesurables : pH, TH (ou Ca²⁺), TAC, température T et TDS (minéralisation totale). Le pH de saturation pHs est le pH auquel l\'eau est exactement à l\'équilibre avec CaCO₃ (eau ni précipitante ni dissolvante). L\'index de Langelier est : IL = pH mesuré - pHs. Si IL = 0 : eau en équilibre, ne précipite pas et n\'est pas agressive. Si IL > 0 : eau sursaturée, entartrante, précipite CaCO₃ (dépôts calcaires dans réseaux). Si IL < 0 : eau sous-saturée, agressive, dissout le CaCO₃ (attaque béton, fonte). Le calcul de pHs : pHs = (pK₂ - pKs) + p[Ca²⁺] + p[HCO₃⁻] + 5pf(I), où K₂ est la 2ème constante d\'acidité de H₂CO₃, Ks la constante de solubilité de CaCO₃, et pf(I) un facteur lié à la force ionique et à la température. En pratique, des tables ou abaques (Legrand-Poirier) permettent le calcul graphique de pHs. Un IL cible de +0,2 à +0,5 est souvent recherché en distribution : l\'eau légèrement entartrante protège les parois des canalisations par un film de CaCO₃ protecteur contre la corrosion interne.',
          sous_sections: [
            { titre: '3.1 Correction de l\'équilibre calco-carbonique', texte: 'Pour rendre une eau agressive non entartrante : reminéralisation (lit calcaire + CO₂), ajout de NaHCO₃, ou neutralisation à la chaux. Pour une eau trop entartrante : décarbonatation à la chaux Ca(OH)₂ (précipite CaCO₃ + CO₂), acidification (H₂SO₄ ou CO₂), échangeur d\'ions. La décarbonatation à la chaux : Ca(OH)₂ + Ca(HCO₃)₂ → 2CaCO₃↓ + 2H₂O ; réduit le TH temporaire et le TAC simultanément.' }
          ]
        },
        {
          titre: '4. Application : contrôle de la stabilité d\'un réseau AEP',
          texte: 'En exploitation quotidienne, le suivi de l\'équilibre calco-carbonique passe par des mesures régulières de pH, TH, TAC, T° en entrée et sortie de réseau. L\'exploitant calcule l\'IL selon les tables de Legrand-Poirier ou par logiciel (Minteq, Phreeqc) et ajuste les réglages de traitement pour maintenir l\'IL dans la plage cible. Une eau distribuée avec IL = -0,5 erode les conduites en acier, libère des ions Fe²⁺ et oxyde en rouille (eau rousse), endommage les compteurs. Les canalisations en plomb (encore présentes dans certains immeubles anciens) sont particulièrement sensibles : une eau agressive (pH < 7, IL < -0,5) libère du plomb ionique, dangereux pour la santé (norme : Pb ≤ 10 µg/L). La loi sur les réseaux de plomb a imposé le remplacement des branchements en plomb d\'ici 2013. Pour les canalisations en amiante-ciment (anciennes), une eau agressive dissout le ciment et fragilise la conduite, avec risque de relargage de calcium et d\'ions minéraux. Le contrôle de la stabilité est donc à la fois un enjeu sanitaire (qualité de l\'eau au robinet) et un enjeu patrimonial (préservation des réseaux).'
        }
      ],
      points: [
        'TH (dureté totale) = Ca²⁺ + Mg²⁺ ; 1°f = 10 mg/L CaCO₃ = 0,1 mmol/L',
        'Titrage TH : EDTA 0,01 M, indicateur NET (Noir d\'Eriochrome T), virage rouge→bleu',
        'TAC = alcalinité totale, titré jusqu\'à pH 4,5 ; pour eau naturelle TAC ≈ [HCO₃⁻]/61 × 1000 méq/L',
        'Index de Langelier IL = pH - pHs : IL > 0 entartrant, IL < 0 agressif',
        'IL cible en distribution : +0,2 à +0,5 (film protecteur CaCO₃)',
        'Dureté temporaire (bicarbonates) éliminée par ébullition ou décarbonatation à la chaux',
        'Reminéralisation : eau sur lit calcaire avec CO₂ → Ca²⁺ + 2HCO₃⁻',
        'Eau très douce (< 5°f) : corrosive ; eau très dure (> 40°f) : entartrante et entartrante',
        'Eaux acides agressives libèrent Pb, Cu, Fe des canalisations → risque sanitaire',
        'Décarbonatation chaux : Ca(OH)₂ + Ca(HCO₃)₂ → 2CaCO₃↓ + 2H₂O'
      ],
      formules: [
        'TH (°f) = V_EDTA (mL) × 10 pour 100 mL d\'eau et EDTA 0,01 mol/L',
        'Conversion : TH (mg/L CaCO₃) = TH (°f) × 10 = TH (mmol/L) × 100',
        'TAC (méq/L) = V_acide (mL) × N / V_eau (mL) × 1000 ; titrage à pH 4,5',
        'Index de Langelier : IL = pH_mesuré - pHs ; pHs = f(T, TH, TAC, TDS)',
        'Consommation chaux : dose Ca(OH)₂ (g/m³) ≈ 0,74 × TH_temp_à_éliminer (mg/L CaCO₃)'
      ],
      retenir: 'Dureté TH · °f · EDTA · TAC alcalinité · Langelier IL · Entartrant vs corrosif · Reminéralisation CO₂+calcaire · Décarbonatation chaux · Plomb eau agressive'
    },
    exercices: [
      { n: '1', enonce: 'Titrage TH : 100 mL d\'eau nécessitent 22,4 mL d\'EDTA 0,01 mol/L. Calculer TH en °f et mg/L CaCO₃. Qualifier l\'eau.', solution: 'TH (°f) = 22,4 × 10 / 10 = 22,4°f (car V eau = 100 mL, EDTA = 0,01 M)\nTH (mg/L CaCO₃) = 22,4 × 10 = 224 mg/L CaCO₃\nClassification : TH entre 15 et 25°f → eau mi-dure' },
      { n: '2', enonce: 'Calculer le TAC d\'une eau dont le dosage (100 mL d\'eau + H₂SO₄ 0,02 N) nécessite 14,5 mL d\'acide à pH 4,5. Exprimer en méq/L et en mg/L CaCO₃.', solution: 'TAC = (14,5 × 0,02 / 100) × 1000 = 2,90 méq/L\nmg/L CaCO₃ = 2,90 × 50 = 145 mg/L CaCO₃' },
      { n: '3', enonce: 'Une eau a les caractéristiques suivantes : pH = 7,8, pHs = 8,3, TH = 25°f, TAC = 3 méq/L. Calculer l\'index de Langelier et interpréter.', solution: 'IL = pH - pHs = 7,8 - 8,3 = -0,5\nIL = -0,5 < 0 → eau agressive, sous-saturée en CaCO₃\nRisque de corrosion des canalisations. Correction : relever le pH par NaOH ou reminéralisation pour viser IL = 0 à +0,3.' },
      { n: '4', enonce: 'Calculer la concentration en Ca²⁺ (mg/L) d\'une eau à TH = 18°f sachant que THMg = 4°f. (M Ca = 40, M Mg = 24, M CaCO₃ = 100)', solution: 'THCa = TH - THMg = 18 - 4 = 14°f\nCa²⁺ (mg/L) : 1°f ≡ 4 mg/L Ca²⁺ → Ca²⁺ = 14 × 4 = 56 mg/L\nOu par conversion : THCa (mg/L CaCO₃) = 140 mg/L CaCO₃ → Ca²⁺ = 140 × 40/100 = 56 mg/L' },
      { n: '5', enonce: 'Une station de décarbonatation doit réduire le TH temporaire de 300 mg/L CaCO₃ à 50 mg/L CaCO₃. Calculer la dose de chaux Ca(OH)₂ nécessaire (M = 74 g/mol). Débit = 10 000 m³/j.', solution: 'TH temp à éliminer = 300 - 50 = 250 mg/L CaCO₃\nRéaction : Ca(OH)₂ + Ca(HCO₃)₂ → 2CaCO₃ + 2H₂O\n1 mol Ca(OH)₂ (74g) élimine 1 mol de dureté temporaire (100g CaCO₃)\nDose Ca(OH)₂ = 250 × 74/100 = 185 mg/L = 185 g/m³\nMasse/j = 185 × 10 000 = 1 850 000 g/j = 1,85 t/j' },
      { n: '6', enonce: 'Une eau souterraine a pH = 6,5, TH = 8°f, TAC = 1,2 méq/L. Expliquer les risques et proposer un traitement de reminéralisation.', solution: 'pH = 6,5 → eau acide ; TH = 8°f → eau douce ; TAC = 1,2 méq/L → faible tampon\nRisques : eau corrosive (attaque acier, béton, plomb), eau sans pouvoir tampon (pH instable)\nTraitement : injection CO₂ + filtration sur lit de calcaire\nRéaction : CO₂ + H₂O + CaCO₃ → Ca²⁺ + 2HCO₃⁻\nRelève simultanément pH, TH et TAC. Objectif : pH 7,2-7,6, TH > 15°f, TAC > 2,5 méq/L, IL ≈ +0,2' },
      { n: '7', enonce: 'Calculer TH en °f pour : Ca²⁺ = 72 mg/L, Mg²⁺ = 18 mg/L (M Ca = 40, Mg = 24).', solution: 'Ca²⁺ en mmol/L = 72/40 = 1,80 mmol/L → en °f = 1,80 × 10 = 18°f\nMg²⁺ en mmol/L = 18/24 = 0,75 mmol/L → en °f = 0,75 × 10 = 7,5°f\nTH = 18 + 7,5 = 25,5°f → eau dure' },
      { n: '8', enonce: 'Expliquer pourquoi une eau de pluie (pH 5,6, TH = 0°f, TAC ≈ 0) est considérée comme très agressive et impropre à la distribution directe.', solution: 'pH = 5,6 < 7 → eau acide (H₂CO₃ naturel de l\'air)\nTH = 0°f → absence de Ca²⁺/Mg²⁺ protecteurs\nTAC ≈ 0 → aucun pouvoir tampon (le pH varie fortement dès qu\'on ajoute un acide ou une base)\nIndex de Langelier très négatif → eau très agressive\nElle dissoudrait immédiatement les canalisations métalliques et libérerait Fe, Pb, Cu dans l\'eau distribuée. Traitement obligatoire : reminéralisation avant distribution.' }
    ]
  }

,

  'GEMEAU-023': {
    id: 'GEMEAU-023',
    titre: 'Oxydoréduction et corrosion',
    fiche: {
      intro: 'Les réactions d\'oxydoréduction sont omniprésentes dans le traitement de l\'eau : la désinfection au chlore, l\'élimination du fer et du manganèse, l\'ozonation, la dénitrification sont tous des processus redox. La corrosion des réseaux est également un phénomène électrochimique que le technicien doit savoir diagnostiquer et prévenir.',
      sections: [
        {
          titre: '1. Principes de l\'oxydoréduction',
          texte: 'Une réaction d\'oxydoréduction implique un transfert d\'électrons entre deux espèces chimiques. L\'oxydation est la perte d\'électrons (augmentation du degré d\'oxydation) ; la réduction est le gain d\'électrons (diminution du degré d\'oxydation). Le réducteur est l\'espèce qui cède des électrons (il s\'oxyde) ; l\'oxydant est l\'espèce qui accepte des électrons (il se réduit). La réaction redox couple toujours une demi-réaction d\'oxydation et une demi-réaction de réduction. Exemple : oxydation du fer dissous Fe²⁺ par le chlore Cl₂ : 2Fe²⁺ → 2Fe³⁺ + 2e⁻ (oxydation) et Cl₂ + 2e⁻ → 2Cl⁻ (réduction). Le potentiel standard d\'électrode E° (en Volts vs électrode standard à hydrogène) mesure le pouvoir oxydant ou réducteur d\'un couple : plus E° est élevé, plus l\'oxydant est fort. Exemples : Cl₂/Cl⁻ : E° = +1,36 V (fort oxydant) ; O₃/O₂ : E° = +2,07 V (très fort oxydant) ; O₂/H₂O : E° = +1,23 V ; NO₃⁻/N₂ : E° = +1,24 V. Le potentiel redox mesuré en solution (rH ou Eh en mV) indique le pouvoir oxydant global de l\'eau : une eau de surface oxygénée a Eh ≈ +200 à +500 mV ; une eau souterraine réductrice a Eh = 0 à -200 mV (présence de Fe²⁺, Mn²⁺, H₂S, CH₄). La mesure du potentiel redox sur le terrain se fait avec une électrode de platine Pt + électrode de référence Ag/AgCl ou calomel.',
          sous_sections: [
            { titre: '1.1 Oxydants dans le traitement de l\'eau', texte: 'Chlore Cl₂ : oxydant et désinfectant, E°=+1,36V, le plus utilisé (économique). Dioxyde de chlore ClO₂ : E°=+0,95V, désinfectant puissant, ne forme pas de THM, utilisé pour les eaux à goûts et odeurs. Ozone O₃ : oxydant le plus puissant des oxydants courants (E°=+2,07V), utilisé pour la décoloration, désodorisation, oxydation des micropolluants. Permanganate de potassium KMnO₄ : oxydant de Fe²⁺, Mn²⁺, H₂S. Peroxyde d\'hydrogène H₂O₂ : utilisé en combinaison UV/H₂O₂ pour la dégradation des micropolluants (procédé d\'oxydation avancée, POA).' }
          ]
        },
        {
          titre: '2. Oxydation du fer et du manganèse',
          texte: 'Les eaux souterraines réductrices contiennent fréquemment du fer dissous (Fe²⁺) et du manganèse dissous (Mn²⁺), incolores et solubles, qui précipitent lors de l\'oxydation en Fe³⁺ (rouille, précipité rougeâtre) et Mn⁴⁺ (précipité brun-noir). Ces précipités sont éliminés par filtration. L\'oxydation du fer est rapide à pH > 6,5 avec O₂ : 4Fe²⁺ + O₂ + 10H₂O → 4Fe(OH)₃↓ + 8H⁺. L\'aération simple (cascade, tour de dégazage) suffit dans la plupart des cas pour oxyder Fe²⁺ et dégazer le CO₂ et H₂S simultanément. L\'oxydation du manganèse Mn²⁺ est plus lente et nécessite pH > 8 pour être efficace avec O₂ seul ; on utilise préférentiellement le chlore, le KMnO₄ ou l\'ozone pour l\'oxyder plus rapidement, ou des filtres à MnO₂ catalytique. Les teneurs maximales admissibles en eau potable sont : Fe ≤ 200 µg/L et Mn ≤ 50 µg/L. Au-delà, le goût métallique, les taches sur le linge et le colmatage des canalisations constituent une gêne. La séquence de traitement typique : aération → oxydation → filtration sur sable ou anthracite → désinfection finale.',
          sous_sections: [
            { titre: '2.1 Chloration-filtration pour le Mn', texte: 'Mn²⁺ + Cl₂ + 2H₂O → MnO₂↓ + 2HCl. La réaction est rapide à pH > 7 et en présence de Cl₂ en excès. Le filtre à MnO₂ (filtre Birm, filtre sable-MnO₂) retient les précipités ; il est régénéré par lavage à contre-courant (rétro-lavage). La consommation de chlore pour l\'oxydation du Mn est de 1,35 mg Cl₂ par mg Mn oxydé.' }
          ]
        },
        {
          titre: '3. Corrosion électrochimique des réseaux',
          texte: 'La corrosion des canalisations d\'eau (acier galvanisé, fonte, cuivre, plomb) est un processus électrochimique. Elle implique la formation de piles locales (micro-piles galvaniques) entre zones anodiques (oxydation du métal : Fe → Fe²⁺ + 2e⁻) et cathodiques (réduction de O₂ ou H⁺). La vitesse de corrosion dépend de nombreux facteurs : le pH (eau acide → H⁺ oxyde Fe, très corrosif ; pH < 7 → corrosion accélérée) ; l\'oxygène dissous (O₂ est le cathodique le plus fréquent en eau aérée ; paradoxe : eau aérée est plus corrosive en présence de piqûres) ; la conductivité (eau minéralisée conduit mieux le courant → corrosion galvanique plus rapide) ; les chlorures Cl⁻ (dépassivent les couches de protection Fe₂O₃ sur l\'acier inoxydable) ; la température (augmentation de 10°C double souvent la vitesse de corrosion) ; les bactéries sulfato-réductrices (BSR) qui produisent H₂S et créent des micro-cellules corrosives (corrosion biologique, bactériocorrosion). Les types de corrosion : corrosion généralisée (uniforme, rugosité), corrosion par piqûres (localisée, perforations), corrosion galvanique (deux métaux différents en contact dans un électrolyte : le moins noble s\'oxyde). Surveillance : mesure épaisseur de paroi par ultrason, inspection par robot, analyse des eaux (Fe, Cu, Pb au robinet).',
          sous_sections: [
            { titre: '3.1 Protection contre la corrosion', texte: 'Protection cathodique (courant imposé ou anode sacrificielle en Zn ou Al) pour les grandes installations et réservoirs. Revêtements internes (époxy, béton, polyéthylène) pour les nouvelles canalisations. Inhibiteurs de corrosion injectés dans l\'eau (phosphates, silicates) forment un film protecteur. Maintien d\'un IL légèrement positif (+0,1 à +0,3) pour favoriser le dépôt d\'une couche de CaCO₃ protectrice naturelle. Choix des matériaux : PE, PVC, acier inox (résistants à la corrosion) pour les nouvelles installations.' }
          ]
        },
        {
          titre: '4. Traitement par oxydation avancée (POA)',
          texte: 'Les procédés d\'oxydation avancée (POA) génèrent des radicaux hydroxyles OH• (potentiel de +2,80V, le plus fort oxydant utilisable en traitement de l\'eau) capables de minéraliser les micropolluants organiques (pesticides, médicaments, perturbateurs endocriniens) même à très faibles concentrations (ng/L à µg/L). Les procédés POA courants : UV/H₂O₂ : irradiation UV (254 nm) d\'une eau additionnée de H₂O₂ (5-20 mg/L) ; O₃/H₂O₂ (procédé Peroxone) ; O₃/UV. Les radicaux OH• créés dégradent les polluants en CO₂, H₂O et ions minéraux. Applications : décontamination des eaux de nappe polluées aux solvants chlorés (TCE, PCE) ; élimination des pharmaceutiques dans les eaux usées traitées destinées à la réutilisation ; élimination du goût et de l\'odeur (géosmine, 2-MIB). Limites : coût élevé (énergie UV, consommation H₂O₂, ozone) ; formation de sous-produits (bromates si eau bromée + O₃) ; efficacité réduite si DCO élevée (compétition avec les radicaux). La réglementation sur les micropolluants (directive 2020/2184 pour l\'eau potable) rend ces procédés de plus en plus nécessaires.'
        }
      ],
      points: [
        'Oxydation = perte d\'électrons (réducteur) ; Réduction = gain d\'électrons (oxydant)',
        'Ordre des oxydants : O₃ > ClO₂ > Cl₂ > O₂ > KMnO₄ selon E° standard',
        'Fe²⁺ + O₂ + pH > 6,5 → Fe(OH)₃ précipité (rouille) ; aération suffit souvent',
        'Oxydation Mn²⁺ nécessite chlore ou KMnO₄ (plus lente avec O₂ seul)',
        'Corrosion : pH bas, O₂, Cl⁻, T° élevée et bactéries sulfato-réductrices l\'accélèrent',
        'Protection cathodique : anode sacrificielle Zn/Al ou courant imposé',
        'IL légèrement positif → film CaCO₃ protecteur naturel des canalisations',
        'POA (OH•) : dégradation des micropolluants organiques persistants',
        'Potentiel Eh positif (+mV) : eau oxydée ; Eh négatif : eau réduite (Fe²⁺, H₂S)',
        'Norme Fe ≤ 200 µg/L et Mn ≤ 50 µg/L dans l\'eau potable'
      ],
      formules: [
        'Demi-réaction Fe²⁺ : Fe²⁺ → Fe³⁺ + e⁻ (E° = +0,77 V)',
        'Oxydation Fe : 4Fe²⁺ + O₂ + 10H₂O → 4Fe(OH)₃↓ + 8H⁺',
        'Chloration Mn : Mn²⁺ + Cl₂ + 2H₂O → MnO₂↓ + 2Cl⁻ + 4H⁺',
        'Consommation Cl₂/Fe : 0,64 mg Cl₂ par mg Fe²⁺ oxydé',
        'Consommation Cl₂/Mn : 1,35 mg Cl₂ par mg Mn²⁺ oxydé',
        'Consommation Cl₂/NH₄ : 7,6 mg Cl₂ par mg NH₄⁺-N (breakpoint)'
      ],
      retenir: 'Oxydant E° · Fe²⁺ aération · Mn chloration · Corrosion pH/Cl⁻/O₂ · Protection cathodique · Film CaCO₃ · POA radicaux OH• · Eh potentiel redox'
    },
    exercices: [
      { n: '1', enonce: 'Une eau souterraine contient Fe²⁺ = 3,5 mg/L et Mn²⁺ = 0,3 mg/L. Calculer la dose minimale de chlore pour oxyder tout le fer et tout le manganèse.', solution: 'Cl₂ pour Fe²⁺ = 3,5 × 0,64 = 2,24 mg/L\nCl₂ pour Mn²⁺ = 0,3 × 1,35 = 0,41 mg/L\nDose minimale totale = 2,24 + 0,41 = 2,65 mg/L de Cl₂\n(En pratique, on ajoute 0,2-0,5 mg/L de résidu pour la désinfection)' },
      { n: '2', enonce: 'Écrire et équilibrer la réaction redox entre Fe²⁺ et le permanganate KMnO₄ (se réduit en MnO₂) en milieu acide.', solution: 'Oxydation : Fe²⁺ → Fe³⁺ + e⁻ (×3)\nRéduction : MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O\nRéaction totale : 3Fe²⁺ + MnO₄⁻ + 4H⁺ → 3Fe³⁺ + MnO₂↓ + 2H₂O' },
      { n: '3', enonce: 'Un réseau de distribution présente une eau avec pH = 6,8, IL = -0,4, et les analyses au robinet montrent Fe = 350 µg/L. Expliquer et proposer une mesure corrective.', solution: 'pH = 6,8 < 7 → eau légèrement acide ; IL = -0,4 → eau agressive (corrosive)\nFe = 350 µg/L > 200 µg/L → dépasse la norme, provient de la corrosion des canalisations en acier\nCorrection : relever le pH à 7,2-7,5 par injection NaOH ou reminéralisation pour obtenir IL = +0,2\nDe plus, envisager la détection et remplacement des tronçons très corrodés.' },
      { n: '4', enonce: 'Calculer le potentiel de la pile formée par Cu (E° Cu²⁺/Cu = +0,34V) et Zn (E° Zn²⁺/Zn = -0,76V) dans une eau minéralisée. Quel métal est corrodé ?', solution: 'E_pile = E_cathode - E_anode = +0,34 - (-0,76) = +1,10 V (pile spontanée)\nZn (E° négatif) est l\'anode → il s\'oxyde (se corrode)\nCu est la cathode → il se réduit (protégé)\nLe zinc est le métal sacrificiel. C\'est le principe de la galvanisation (acier recouvert de Zn).' },
      { n: '5', enonce: 'Une eau traite 0,8 mg/L de chlore résiduel et contient 0,5 mg/L NH₄⁺ (exprimé en N). La chloration forme des chloramines. Calculer si la dose de chlore est suffisante pour dépasser le point de rupture (breakpoint), sachant qu\'il faut 7,6 mg Cl₂/mg NH₄-N.', solution: 'Cl₂ nécessaire pour breakpoint = 7,6 × 0,5 = 3,8 mg/L\nCl₂ disponible = 0,8 mg/L << 3,8 mg/L\n→ On est avant le breakpoint : formation de chloramines, désinfection moins efficace.\nIl faudrait injecter au moins 3,8 mg/L pour dépasser le breakpoint et obtenir du chlore libre résiduel.' },
      { n: '6', enonce: 'Expliquer pourquoi les bactéries sulfato-réductrices (BSR) accélèrent la corrosion des canalisations enterrées.', solution: 'Les BSR réduisent les sulfates SO₄²⁻ en sulfure H₂S dans les zones anaérobies.\nH₂S est corrosif : attaque l\'acier en formant FeS (sulfure de fer).\nLes BSR consomment aussi H₂ à la surface du métal (dépolarisation cathodique) → maintien d\'un fort gradient et corrosion en l\'absence d\'O₂.\nSigne diagnostique : eau avec odeur d\'œuf pourri + taches noires sur métal + dépôts noirs FeS.' },
      { n: '7', enonce: 'Une eau contient Fe²⁺ = 2 mg/L et NH₄⁺ = 1 mg/L-N. Quelle dose totale de chlore est nécessaire pour oxyder le fer ET dépasser le breakpoint, avec un résidu de 0,3 mg/L ?', solution: 'Cl₂ pour Fe²⁺ = 2 × 0,64 = 1,28 mg/L\nCl₂ pour NH₄⁺ (breakpoint) = 1 × 7,6 = 7,60 mg/L\nRésidu = 0,3 mg/L\nDose totale = 1,28 + 7,60 + 0,30 = 9,18 mg/L ≈ 9,2 mg/L' },
      { n: '8', enonce: 'Qu\'est-ce qu\'un POA ? Donner un exemple de polluant éliminé et les conditions opératoires de l\'UV/H₂O₂.', solution: 'POA = Procédé d\'Oxydation Avancée. Génère des radicaux hydroxyles OH• (E° = +2,80V) très réactifs.\nExemple de polluant : atrazine (herbicide), ibuprofène, géosmine (goût eau).\nConditions UV/H₂O₂ : lampes UV 254 nm, dose UV ≥ 400 mJ/cm², H₂O₂ = 5-15 mg/L.\nLe H₂O₂ absorbe les UV et se décompose en 2 OH•.\nEfficacité réduite si COT > 5 mg/L (compétition) ; eau peu turbide (UVT > 90%).' }
    ]
  },

  'GEMEAU-024': {
    id: 'GEMEAU-024',
    titre: 'Gaz dissous et oxygénation',
    fiche: {
      intro: 'La teneur en oxygène dissous est le premier paramètre de qualité des eaux naturelles : elle conditionne la vie aquatique et signale les pollutions organiques. En traitement, l\'aération est une étape essentielle pour dégazer le CO₂ et H₂S, oxyder Fe²⁺ et Mn²⁺, et transférer de l\'O₂ aux cultures bactériennes des STEP (boues activées). Un technicien doit maîtriser les lois de dissolution des gaz et les systèmes d\'aération.',
      sections: [
        {
          titre: '1. Loi de Henry et dissolution des gaz',
          texte: 'La loi de Henry (1803) établit que la concentration d\'un gaz dissous dans un liquide est proportionnelle à sa pression partielle dans la phase gazeuse : [G] = KH × pG, où KH est la constante de Henry (mol/L/atm ou mg/L/atm), pG la pression partielle du gaz (atm). La constante KH dépend du gaz et surtout de la température : elle diminue quand T° augmente (les gaz se dissolvent moins dans l\'eau chaude). Application à l\'oxygène : la pression partielle de O₂ dans l\'air est pO₂ = 0,209 atm (21% de l\'air à P = 1 atm). La solubilité de l\'O₂ à 20°C est de 9,09 mg/L dans l\'eau pure (à 1 atm). Elle varie avec la T° : 12,8 mg/L à 5°C, 9,09 mg/L à 20°C, 7,63 mg/L à 30°C. La salinité réduit la solubilité : eau de mer à 20°C → 7,2 mg/L O₂ (≈ 20% de moins qu\'eau douce). La pression également : en altitude ou sous vide, la solubilité baisse proportionnellement à la pression. Le taux de saturation en O₂ : Sat(%) = [O₂ mesuré] / [O₂ saturation à T° et altitude] × 100. Une eau à 100% de saturation est en équilibre avec l\'atmosphère. Les valeurs pratiques de saturation à l\'atmosphère : une rivière propre aérée → 80-110% Sat ; une eau polluée en décomposition → < 30% Sat ; une eau avec prolifération algale en journée → > 150% Sat (sursaturation).',
          sous_sections: [
            { titre: '1.1 Autres gaz dissous importants', texte: 'CO₂ dissous (pCO₂ atmosphère = 0,0004 atm mais beaucoup plus dans les sols) : dégazage par aération relève le pH. H₂S (sulfure d\'hydrogène) : toxique, odeur œuf pourri, très soluble, provient des zones anaérobies ; éliminé par aération ou oxydation. CH₄ (méthane) : dans les eaux souterraines, explosif si dégagé dans un espace confiné (danger grave) ; éliminé par aération forcée. NH₃ libre (ammoniac) : proportion dépend du pH et T° ; NH₃ > 0,1 mg/L toxique pour les poissons.' }
          ]
        },
        {
          titre: '2. DBO₅ et DCO comme indicateurs de pollution organique',
          texte: 'La Demande Biochimique en Oxygène à 5 jours (DBO₅) est la quantité d\'oxygène consommée par les micro-organismes pour dégrader la matière organique biodégradable d\'une eau à 20°C en 5 jours à l\'obscurité. Unité : mg O₂/L. Elle représente environ 65-70% de la DBO ultime (DBO∞, dégradation totale à 28 jours). La DBO₅ caractérise la charge polluante biodégradable : eaux usées urbaines brutes 150-300 mg O₂/L ; effluents agroalimentaires 500-5000 mg O₂/L ; eau de rivière propre < 2 mg O₂/L ; valeur limite de rejet STEP (classe B) ≤ 25 mg O₂/L. La Demande Chimique en Oxygène (DCO) est la quantité d\'oxygène nécessaire pour oxyder chimiquement toute la matière organique (biodégradable et non biodégradable) par le dichromate de potassium K₂Cr₂O₇ en milieu sulfurique concentré à 150°C (méthode normalisée NF T90-101). Elle est toujours ≥ DBO₅. Le rapport DBO₅/DCO (biodégradabilité) est utile : rapport > 0,5 → effluent facilement biodégradable (épuration biologique efficace) ; rapport < 0,3 → effluent difficilement biodégradable (composés réfractaires, effluent industriel). Eaux usées urbaines : DBO₅/DCO ≈ 0,5-0,6 ; effluents pharmaceutiques : DBO₅/DCO < 0,1. Les MES (Matières En Suspension) participent à la DBO₅ car les bactéries les dégradent. Les normes de rejet STEP en milieu sensible : DCO ≤ 90 mg/L, DBO₅ ≤ 15 mg/L, MES ≤ 35 mg/L.',
          sous_sections: [
            { titre: '2.1 Mesure de la DBO₅', texte: 'La DBO₅ se mesure par dilution de l\'échantillon dans un milieu minéral inoculé, incubé 5 jours à 20°C à l\'obscurité. La mesure s\'effectue par deux méthodes : manométrique (respiromètre Oxitop, mesure la pression dans un flacon fermé) ou classique (mesure O₂ dissous avant et après incubation). La dilution doit être adaptée pour avoir une consommation d\'O₂ de 2 à 7 mg/L sur les 5 jours (sinon la mesure est faussée).' }
          ]
        },
        {
          titre: '3. Systèmes d\'aération en traitement de l\'eau',
          texte: 'L\'aération est l\'opération de mise en contact de l\'eau avec l\'air pour transférer de l\'O₂ à l\'eau (ou dégazer le CO₂ et H₂S). Le transfert de gaz dépend de la surface d\'échange, du gradient de concentration (déficit), et du coefficient de transfert KLa. Systèmes d\'aération gravitaires : les cascades (eau tombant sur des marches ou rampes) et les tours de dégazage (eau dispersée en fines gouttelettes par des buses ou plateaux perforés, air ascendant) sont économiques (sans énergie supplémentaire) et efficaces pour dégazer CO₂ et H₂S (taux d\'élimination CO₂ : 70-90%, H₂S : > 95%). Aération par insufflation d\'air : diffuseurs à bulles fines (poreux, bulles 1-3 mm, efficaces, courants en bassin boues activées) et diffuseurs à bulles grossières (moins efficaces, moins colmatables). Le rendement d\'oxygénation standard (SOTE, Standard Oxygen Transfer Efficiency) est de 15-30% par mètre de profondeur immergée pour les diffuseurs à bulles fines. Aération de surface : agitateurs à axe vertical (surface type Rotor ou Mammoth) ou à axe horizontal (brosses d\'Archimède de type Kessener) : simples et robustes, utilisés en lagunage et fossés d\'oxydation. La demande en O₂ d\'une STEP (boues activées) pour traiter les charges carbonées et azotées est de : 1,0-1,5 kg O₂/kg DBO₅ éliminée (carbone) + 4,57 kg O₂/kg N nitrifiable (nitrification).',
          sous_sections: [
            { titre: '3.1 Mesure de l\'oxygène dissous sur le terrain', texte: 'Les sondes OD (Oxygène Dissous) sont de deux types : électrochimiques (Clark, membrane de téflon, réaction cathodique O₂ + 2H₂O + 4e⁻ → 4OH⁻) et optiques (luminescence par fluorophore, sans consommation d\'O₂, plus stable et sans dérive). Les sondes doivent être étalonnées dans l\'air saturé à la T° et pression du jour. La mesure en rivière : si OD < 2 mg/L → hypoxie, vie aquatique menacée ; OD < 1 mg/L → anoxie, mortalité piscicole.' }
          ]
        },
        {
          titre: '4. Profils d\'oxygène dans les rivières (courbe Streeter-Phelps)',
          texte: 'Lors d\'un rejet de pollution organique dans un cours d\'eau, la DBO consomme l\'O₂ dissous en aval du point de rejet : c\'est le phénomène de désoxygénation. Si la ré-aération naturelle (échanges avec l\'atmosphère, turbulences) compense progressivement, l\'O₂ remonte en aval : c\'est la courbe de Streeter-Phelps en forme de tasse (oxygène sag curve). La zone critique est celle où l\'O₂ est minimum : en dessous de 3 mg/L, les espèces sensibles (truites) disparaissent ; en dessous de 1 mg/L, mortalité massive. L\'équation de Streeter-Phelps décrit l\'évolution du déficit en O₂ D(t) = Cs - C(t) en fonction du temps écoulé depuis le rejet : D(t) = [k₁×L₀/(k₂-k₁)] × (e^(-k₁t) - e^(-k₂t)) + D₀ × e^(-k₂t), où k₁ est le taux de désoxygénation (biodégradation), k₂ le taux de ré-aération, L₀ la DBO initiale, D₀ le déficit initial. Ce modèle permet de calculer la distance critique de désoxygénation en aval d\'un rejet et d\'évaluer l\'impact environnemental d\'un projet de rejet.' }
        }
      ],
      points: [
        'Loi de Henry : [O₂] = KH × pO₂ ; solubilité O₂ diminue quand T° augmente',
        'O₂ saturation à 20°C eau douce = 9,09 mg/L ; à 5°C = 12,8 mg/L',
        'DBO₅ : matière organique biodégradable oxydée en 5 jours à 20°C (mg O₂/L)',
        'DCO : matière organique totale, oxydée chimiquement (K₂Cr₂O₇). DCO ≥ DBO₅',
        'Rapport DBO₅/DCO > 0,5 : biodégradable ; < 0,3 : réfractaire',
        'Norme rejet STEP : DCO ≤ 90 mg/L, DBO₅ ≤ 25 mg/L (arrêté 22/06/2007)',
        'OD < 2 mg/L → hypoxie ; OD < 1 mg/L → anoxie et mortalité piscicole',
        'Diffuseurs bulles fines : SOTE 15-30% par mètre de profondeur',
        'Demande O₂ pour nitrification : 4,57 g O₂ par g N-NH₄⁺ oxydé',
        'H₂S et CO₂ éliminés par aération simple (cascade, tour de dégazage)'
      ],
      formules: [
        'Henry : [G] (mg/L) = KH × pG (atm)',
        'Taux de saturation O₂ : Sat (%) = [O₂_mesuré] / [O₂_sat(T°)] × 100',
        'Demande O₂ carbone : 1,0-1,5 kg O₂/kg DBO₅ (boues activées)',
        'Demande O₂ nitrification : 4,57 kg O₂/kg NH₄⁺-N',
        'DBO₅/DCO = rapport de biodégradabilité (> 0,5 : bon pour bio-traitement)'
      ],
      retenir: 'Loi Henry · O₂ saturation T° · DBO₅ vs DCO · Biodégradabilité · Aération bulles fines · OD hypoxie < 2 mg/L · Nitrification 4,57 g O₂/g N · Streeter-Phelps rivière'
    },
    exercices: [
      { n: '1', enonce: 'L\'O₂ mesuré dans une rivière est de 6,8 mg/L à 22°C. La saturation à 22°C est 8,7 mg/L. Calculer le taux de saturation et évaluer la qualité de l\'eau.', solution: 'Sat = (6,8 / 8,7) × 100 = 78,2%\nEau en déficit d\'oxygène mais > 60% de saturation → qualité acceptable, vie aquatique possible.\nEn dessous de 30% de saturation (< 2,6 mg/L à 22°C), risque de stress pour les poissons.' },
      { n: '2', enonce: 'Un effluent brut de STEP urbaine : DBO₅ = 220 mg/L, DCO = 450 mg/L. Calculer le rapport DBO₅/DCO. L\'effluent est-il facilement biodégradable ?', solution: 'DBO₅/DCO = 220/450 = 0,49\nValeur proche de 0,5 → effluent majoritairement biodégradable, traitement biologique efficace.' },
      { n: '3', enonce: 'Une STEP reçoit un débit de 5000 m³/j avec DBO₅ = 200 mg/L. Calculer la charge massique DBO₅ en kg/j et estimer la demande journalière en O₂ (ratio 1,2 kg O₂/kg DBO₅).', solution: 'Charge DBO₅ = 200 g/m³ × 5000 m³/j = 1 000 000 g/j = 1000 kg DBO₅/j\nDemande O₂ = 1000 × 1,2 = 1200 kg O₂/j' },
      { n: '4', enonce: 'Une eau souterraine contient 1,2 mg/L de H₂S (gaz, ρ ≈ 1 g/L à pression H₂S partielle). Elle est passée dans une tour de dégazage avec 95% d\'efficacité. Quelle est la concentration résiduelle en H₂S ?', solution: 'Efficacité = 95% → 5% de H₂S reste\nH₂S résiduel = 1,2 × (1 - 0,95) = 1,2 × 0,05 = 0,06 mg/L' },
      { n: '5', enonce: 'Une STEP doit nitrifier 25 mg/L de NH₄⁺-N. Calculer la demande journalière en O₂ pour la nitrification seule si le débit est 2000 m³/j.', solution: 'O₂ nitrification = 4,57 g O₂/g N\nConcentration O₂ nitrification = 25 × 4,57 = 114,25 mg/L = 114,25 g/m³\nDemande journalière = 114,25 × 2000 = 228 500 g/j = 228,5 kg O₂/j' },
      { n: '6', enonce: 'Comparer la solubilité de l\'O₂ à 10°C et 30°C (valeurs tabulées : 11,3 et 7,6 mg/L). Une rivière en été (30°C) et en hiver (10°C) : laquelle est plus à risque d\'hypoxie ? Pourquoi ?', solution: 'Été (30°C) : O₂ sat = 7,6 mg/L → marge très faible (hypoxie à < 2 mg/L = 26% de sat)\nHiver (10°C) : O₂ sat = 11,3 mg/L → marge plus grande\nRivière en été : risque plus élevé car 1) solubilité plus faible, 2) température accélère la décomposition bactérienne (consommation O₂ plus rapide), 3) eaux basses (débit faible = dilution réduite).' },
      { n: '7', enonce: 'Pour un bassin de boues activées de 800 m³ alimenté à 3000 m³/j, DBO₅ entrée = 180 mg/L. Calculer la charge volumique en kg DBO₅/(m³.j).', solution: 'Charge DBO₅/j = 180 g/m³ × 3000 m³/j = 540 000 g/j = 540 kg DBO₅/j\nCharge volumique = 540 kg/j / 800 m³ = 0,675 kg DBO₅/(m³.j)\nVérification : valeur acceptable pour boues activées à faible charge (0,5-1 kg DBO₅/m³.j).' },
      { n: '8', enonce: 'Interpréter les résultats de rivière : station amont : OD = 10,2 mg/L (110% sat à 15°C) ; station 500 m aval d\'un rejet : OD = 3,5 mg/L (38% sat). Que s\'est-il passé ?', solution: 'Amont : 110% de saturation → eau légèrement sursaturée (production algale ou bonne aération), saine.\nAval : 38% de saturation → désoxygénation sévère après le rejet.\nMécanisme : la matière organique du rejet est décomposée par les bactéries qui consomment l\'O₂ (DBO forte). Le déficit en O₂ indique une pollution organique significative. Risque de mortalité piscicole si OD descend < 2 mg/L. Nécessité d\'une surveillance et d\'un traitement de l\'effluent rejeté.' }
    ]
  },

  'GEMEAU-025': {
    id: 'GEMEAU-025',
    titre: 'Matière organique, nutriments et micropolluants',
    fiche: {
      intro: 'Les paramètres de pollution organique et les nutriments (azote, phosphore) sont au cœur de la réglementation sur les rejets et la qualité des milieux aquatiques. L\'exploitant d\'une STEP doit surveiller en continu DCO, DBO₅, MES, NTK, NH₄⁺, NO₃⁻ et phosphore total pour s\'assurer du respect des arrêtés de rejet, et comprendre les processus biologiques qui éliminent ces polluants.',
      sections: [
        {
          titre: '1. Paramètres de la matière organique',
          texte: 'La matière organique dans les eaux comprend toutes les substances à base de carbone organique d\'origine naturelle (acides humiques, fulviques) ou anthropique (effluents ménagers, industriels, agricoles). Les principaux indicateurs analytiques sont : DCO (Demande Chimique en Oxygène) : mesure l\'ensemble de la matière organique oxydable par le dichromate. Se mesure par digestion à 150°C pendant 2h. DBO₅ (Demande Biochimique en Oxygène à 5 jours) : mesure uniquement la fraction biodégradable en 5 jours à 20°C. COT (Carbone Organique Total) : mesure la teneur en carbone organique par combustion catalytique (à 680°C ou 950°C) et détection du CO₂ produit par infrarouge. Relation approximative : DCO ≈ 3 × COT pour les effluents urbains. MES (Matières En Suspension) : mesurées par filtration sur fibre de verre (0,45 µm) et pesée après séchage à 105°C. Comprennent les MES minérales et organiques. Les MVS (Matières Volatiles en Suspension) = perte de masse par calcination à 550°C représentent la fraction organique des MES. Pour les boues de STEP : MVS/MES = 60-80%. Niveaux typiques dans les eaux brutes urbaines : DCO = 400-700 mg/L, DBO₅ = 150-300 mg/L, MES = 150-400 mg/L, COT = 100-200 mg/L.',
          sous_sections: [
            { titre: '1.1 Pourquoi la DCO est plus élevée que la DBO₅', texte: 'La DCO oxyde toute la matière organique (y compris les molécules non biodégradables : certains tensioactifs, solvants chlorés, HAP). La DBO₅ ne mesure que la fraction dégradée biologiquement en 5 jours à 20°C. Les DCO/DBO₅ >>> 2 signalent des composés réfractaires (difficile à traiter biologiquement). Les nitrites NO₂⁻ et Fe²⁺ peuvent interférer avec la mesure DCO (faux positifs) ; ils doivent être compensés.' }
          ]
        },
        {
          titre: '2. Azote dans les eaux : formes et transformations',
          texte: 'L\'azote est présent dans les eaux sous de nombreuses formes : N organique (protéines, urée → minéralisé en NH₄⁺), ammoniaque/ammonium NH₃/NH₄⁺ (selon pH), nitrites NO₂⁻ (intermédiaire de nitrification), nitrates NO₃⁻ (forme oxydée finale), et N₂ gazeux (dénitrification). L\'azote Kjeldahl (NTK = N organique + NH₄⁺) est la forme réduite totale. La filière azote dans une STEP : ammonification (N organique → NH₄⁺ par minéralisation bactérienne) ; nitrification (NH₄⁺ → NO₂⁻ → NO₃⁻ par Nitrosomonas et Nitrobacter sous conditions aérobies, pH 7-8) ; dénitrification (NO₃⁻ → N₂ gazeux par bactéries hétérotrophes sous conditions anoxiques avec carbone organique comme source d\'énergie). Les normes de rejet selon le décret 2006-503 : NO₃⁻ dans l\'eau potable ≤ 50 mg/L ; les rejets de STEP sur zones sensibles (eutrophisation) : NGL ≤ 10 ou 15 mg/L selon capacité ; NH₄⁺ rejeté ≤ 2-10 mg/L selon arrêté. L\'ammoniaque libre NH₃ (non ionisé) est toxique pour les poissons à partir de 0,05 mg/L-N NH₃ ; la proportion de NH₃ dans le couple NH₄⁺/NH₃ augmente avec le pH et la température (pKa NH₄⁺/NH₃ = 9,25 à 25°C).',
          sous_sections: [
            { titre: '2.1 Bilan azoté en STEP', texte: 'Entrée NTK moyen : 40-60 mg/L-N. Sortie sans traitement N : 90% de NTK en NH₄⁺ (peu d\'élimination). Avec nitrification seule : NH₄⁺ → NO₃⁻ (N total conservé). Avec nitrification + dénitrification : réduction NGL de 70-90%, sortie NGL ≤ 10-15 mg/L. Pour la dénitrification, il faut du carbone organique (BOD) en zone anoxique : ratio C/N ≈ 4-5 g DBO₅/g N à dénitrifier ; si carbone insuffisant, on peut injecter de l\'éthanol ou de la méthanol.' }
          ]
        },
        {
          titre: '3. Phosphore et eutrophisation',
          texte: 'Le phosphore est le facteur limitant de l\'eutrophisation dans la plupart des eaux douces françaises (le facteur limitant est l\'azote en milieu marin). Il provient des engrais (lessivage agricole), des détergents ménagers (polyphosphates, en diminution depuis l\'interdiction dans les lessives, 1er décembre 2013), des eaux de ruissellement urbain. Les formes du phosphore en eau : phosphates orthophosphates PO₄³⁻ (forme soluble mesurée directement), phosphates polyphosphates (issus de détergents, hydrolysés en orthophosphates à pH neutre), phosphore organique (matière vivante, détritus). Le phosphore total (PT) mesure toutes les formes par digestion acide + mesure colorimétrique des orthophosphates (méthode molybdate d\'ammonium, bleu de phosphore, abs à 880 nm). La suppression du phosphore en STEP s\'effectue par deux voies : précipitation chimique (ajout de sel de fer FeCl₃ ou sulfate d\'aluminium Al₂(SO₄)₃ qui précipitent PO₄³⁻ → FePO₄ ou AlPO₄ insoluble) et/ou déphosphatation biologique (micro-organismes accumulant le phosphore intracellulaire, processus EBPR nécessitant des zones anaérobies/aérobies alternées). Les normes de rejet STEP en zone sensible : PT ≤ 1-2 mg/L selon capacité de la STEP.',
          sous_sections: [
            { titre: '3.1 Calcul de la dose de réactif pour précipitation phosphore', texte: 'Précipitation par FeCl₃ : Fe³⁺ + PO₄³⁻ → FePO₄↓ (Ks = 10⁻²²,⁹)\nStoéchiométrie : 1 mol Fe³⁺ (M=56) par mol PO₄ (M=95 ; 1 mg/L PO₄³⁻ ≡ 0,326 mg/L P)\nDose FeCl₃ = 2-4 × quantité stœchiométrique (excès pour compenser les interférences et maximiser la précipitation) ; dose pratique ≈ 3-6 g FeCl₃ par g P à éliminer.' }
          ]
        },
        {
          titre: '4. Micropolluants organiques et métaux traces',
          texte: 'Les micropolluants sont des substances présentes à très faibles concentrations (ng/L à µg/L) dans les eaux mais présentant des effets toxiques ou perturbateurs endocriniens. Les pesticides : atrazine (herbicide maïs, interdit mais encore détecté), glyphosate (désherbant), lindane (insecticide, POP), imidaclopride (insecticide systémique). Concentration limite eau potable : 0,1 µg/L par pesticide individuel, 0,5 µg/L total. Les médicaments et perturbateurs endocriniens : 17α-éthinylestradiol (pilule contraceptive, 0,5 ng/L actif), ibuprofène, diclofénac (anti-inflammatoires), antibiotiques (résistance antimicrobienne). Les HAP (hydrocarbures aromatiques polycycliques) : benzo[a]pyrène ≤ 0,01 µg/L (norme EP), proviennent des routes, toitures, eaux de ruissellement. Les métaux traces : plomb Pb ≤ 10 µg/L, arsenic As ≤ 10 µg/L, chrome Cr ≤ 50 µg/L dans l\'eau potable. Les COV (composés organiques volatils) : solvants chlorés TCE, PCE très persistants dans les eaux souterraines (site pollués). Les méthodes d\'analyse : chromatographie liquide (HPLC) ou gazeuse (GC) avec détecteur de masse (MS) permettent d\'identifier et quantifier à la ng/L. L\'INERIS et l\'ANSES publient des listes de substances prioritaires et des valeurs guides.'
        }
      ],
      points: [
        'COT, DCO, DBO₅, MES : du plus global au plus spécifique (biodégradable seulement pour DBO₅)',
        'DCO ≈ 3 × COT pour effluents urbains (estimation rapide)',
        'NTK = N organique + NH₄⁺ (formes réduites de l\'azote)',
        'Nitrification : NH₄⁺ → NO₃⁻ (aérobie, Nitrosomonas + Nitrobacter, pH 7-8)',
        'Dénitrification : NO₃⁻ → N₂ (anoxique, bactéries hétérotrophes, carbone organique nécessaire)',
        'Phosphore : limite eutrophisation en eau douce ; norme EP : PT ≤ 0,5-1 mg/L (zone sensible)',
        'Déphosphatation : précipitation FeCl₃ ou biologique (EBPR)',
        'Pesticides limite EP : 0,1 µg/L/pesticide, 0,5 µg/L total',
        'NH₃ libre toxique poissons > 0,05 mg/L-N ; proportion croît avec pH et T°',
        'MVS = fraction organique des MES ; MVS/MES = 60-80% pour boues biologiques'
      ],
      formules: [
        'NTK = N organique + NH₄⁺-N (méthode Kjeldahl)',
        'NH₃/NH₄⁺ ratio = 10^(pH-9,25) / (1 + 10^(pH-9,25)) (à 25°C)',
        'O₂ nitrification : 4,57 g O₂/g N-NH₄⁺ oxydé (complet NH₄⁺→NO₃⁻)',
        'O₂ dénitrification restitué : 2,86 g O₂/(g N-NO₃⁻ dénitrifié)',
        'Dose FeCl₃ précipitation P : ≈ 3-6 g FeCl₃ (162 g/mol) par g de P à précipiter'
      ],
      retenir: 'DCO/DBO₅/COT/MES · NTK · Nitrification · Dénitrification · Phosphore eutrophisation · EBPR · Pesticides 0,1 µg/L · Micropolluants ng/L · Métaux traces'
    },
    exercices: [
      { n: '1', enonce: 'Un effluent d\'abattoir : DCO = 2200 mg/L, DBO₅ = 1400 mg/L. Calculer DBO₅/DCO. L\'effluent est-il adapté à un traitement biologique ?', solution: 'DBO₅/DCO = 1400/2200 = 0,636\n> 0,5 → effluent très biodégradable, excellente candidature pour traitement biologique (boues activées ou UASB/réacteur anaérobie).' },
      { n: '2', enonce: 'Une eau potable est analysée : atrazine = 0,05 µg/L, simazine = 0,08 µg/L, diuron = 0,04 µg/L. Est-elle conforme ? Total = ?', solution: 'Chaque pesticide : atrazine 0,05 < 0,1 ✓ ; simazine 0,08 < 0,1 ✓ ; diuron 0,04 < 0,1 ✓\nTotal = 0,05 + 0,08 + 0,04 = 0,17 µg/L < 0,5 µg/L ✓\nConclusion : conforme pour tous les critères.' },
      { n: '3', enonce: 'Une STEP en zone sensible reçoit NTK = 50 mg/L. Elle doit rejeter NGL ≤ 10 mg/L. Quel % d\'élimination d\'azote total est requis ?', solution: 'NGL sortie max = 10 mg/L\nÉlimination = (50-10)/50 × 100 = 80%\nIl faut éliminer 80% de l\'azote total → nécessite nitrification + dénitrification complètes.' },
      { n: '4', enonce: 'Calculer la demande en O₂ pour la nitrification d\'un effluent : NH₄⁺ entrée = 40 mg/L-N, débit = 5000 m³/j.', solution: 'O₂ nitrification = 4,57 g O₂/g N\nConcentration = 40 × 4,57 = 182,8 mg/L = 182,8 g O₂/m³\nDemande/j = 182,8 × 5000 = 914 000 g/j = 914 kg O₂/j' },
      { n: '5', enonce: 'Calculer la dose de FeCl₃ (M=162 g/mol) pour précipiter le phosphore d\'un effluent : P total = 8 mg/L, débit = 2000 m³/j. Ratio stœchiométrique × 4.', solution: 'Stœchiométrie : 1 mol Fe / 1 mol P ; M(P) = 31 g/mol\nDose stœchio = 8 × 162/31 = 41,8 mg/L FeCl₃\nDose pratique (×4) = 41,8 × 4 = 167 mg/L FeCl₃\nMasse/j = 167 g/m³ × 2000 m³ = 334 000 g/j = 334 kg/j' },
      { n: '6', enonce: 'Une eau à pH = 8,5, T = 25°C contient NH₄⁺ total = 2 mg/L (exprimé en N). Calculer la fraction NH₃ et vérifier si elle dépasse le seuil toxique poissons (0,05 mg/L-N).', solution: 'pKa NH₄⁺/NH₃ = 9,25 à 25°C\nfraction NH₃ = 10^(pH-pKa) / (1 + 10^(pH-pKa)) = 10^(8,5-9,25) / (1+10^(-0,75)) = 10^(-0,75) / (1+10^(-0,75))\n= 0,178 / (1+0,178) = 0,178/1,178 = 0,151 = 15,1%\n[NH₃] = 2 × 0,151 = 0,302 mg/L-N >> 0,05 mg/L → TOXIQUE pour les poissons.' },
      { n: '7', enonce: 'Distinguer MES et MVS. Une boue a MES = 4000 mg/L, MVS = 3000 mg/L. Calculer le ratio MVS/MES et qualifier les boues.', solution: 'MES = Matières en Suspension (filtration 0,45µm + séchage 105°C)\nMVS = Matières Volatiles en Suspension = MES calcinées à 550°C (fraction organique)\nRatio MVS/MES = 3000/4000 = 75%\n→ Boues biologiques actives (ratio typique 65-80% pour boues activées)' },
      { n: '8', enonce: 'Expliquer pourquoi interdire les polyphosphates dans les lessives (loi française depuis 2013) a réduit l\'eutrophisation des cours d\'eau.', solution: 'Les polyphosphates des lessives constituaient 30-40% des apports en phosphore aux STEP.\nLes STEP classiques n\'éliminaient pas bien le phosphore (sortie 5-10 mg/L P).\nRejet dans les rivières → phosphore → facteur limitant de la croissance algale en eau douce.\nEn l\'éliminant à la source (produits sans phosphore), les apports aux cours d\'eau ont baissé de 40% environ.\nL\'eutrophisation (proliférations algales, cyanobactéries, mortalités piscicoles) a diminué notablement dans les zones concernées.' }
    ]
  },

  'GEMEAU-026': {
    id: 'GEMEAU-026',
    titre: 'Prélèvement et analyses physico-chimiques',
    fiche: {
      intro: 'La qualité d\'une analyse de l\'eau dépend autant du prélèvement que de l\'analyse en laboratoire. Une mauvaise conservation de l\'échantillon ou un prélèvement non représentatif rend le résultat inutilisable, même avec le meilleur équipement analytique. Le technicien sur le terrain est le garant de la chaîne qualité depuis le robinet de prélèvement jusqu\'au laboratoire.',
      sections: [
        {
          titre: '1. Planification et stratégie de prélèvement',
          texte: 'Avant tout prélèvement, le technicien définit l\'objectif de la campagne : contrôle sanitaire réglementaire, diagnostic environnemental, suivi de traitement ou investigation après incident. L\'objectif détermine le choix des paramètres à analyser, la fréquence et le nombre de points de prélèvement, le type d\'échantillonnage et les conditions de conservation des flacons. Les normes de prélèvement sont regroupées dans la série NF EN ISO 5667 (eau de surface, eau souterraine, eau potable, eaux usées). Les types d\'échantillonnage sont : l\'échantillon ponctuel (prélevé à un instant t sur un point) : représentatif si la qualité est stable ; adapté pour les eaux de réseau et les analyses chimiques où l\'eau est homogène. L\'échantillon composite (mélange de plusieurs prélèvements ponctuels au cours d\'une période) : représentatif d\'une période, adapté aux effluents variables (STEP, industries) ; peut être proportionnel au débit (échantillonneur automatique). L\'échantillonnage passif (capteurs de type POCIS, DGT) : intègre les concentrations sur des jours ou semaines ; adapté aux micropolluants à faibles concentrations variables. La sélection des points de prélèvement est critique : sur un réseau AEP, les points doivent être représentatifs des variations (point amont, point en bout de réseau, point à risque comme des écoles). Sur une rivière, le prélèvement s\'effectue au milieu du courant, à mi-profondeur, loin des berges et des zones mortes.',
          sous_sections: [
            { titre: '1.1 Fréquence de contrôle réglementaire', texte: 'L\'arrêté du 11/01/2007 fixe les fréquences minimales de contrôle de l\'eau potable selon la population desservie et le volume journalier traité. Exemple : réseau 5000 hab → contrôle sanitaire 2× /an + surveillance permanente. Les ARS (Agences Régionales de Santé) programment les contrôles officiels et les exploitants assurent leur propre surveillance (autocontrôle).' }
          ]
        },
        {
          titre: '2. Protocoles de prélèvement et conservation',
          texte: 'La technique de prélèvement conditionne la représentativité. Pour une prise d\'eau sur réseau de distribution : purger la canalisation 2-5 minutes (eau stagnante non représentative), surtout pour les paramètres microbiologiques (Legionella dans les stagnations) et le plomb (relargage en eau stagnante). Pour les eaux souterraines (forage ou puits) : purger 3 volumes de l\'ouvrage avant prélèvement ; prélever après stabilisation de la conductivité, pH et OD (signes de renouvellement de l\'eau). Pour les eaux de surface : choisir une période sans pluie récente pour les paramètres de fond ; après un épisode pluvieux pour le suivi des matières en suspension et des pesticides lessivés. Les flacons de prélèvement doivent être adaptés : flacons HDPE pour métaux, flacons en verre ambré pour les paramètres organiques et micropolluants sensibles à la lumière et à la chaleur, flacons stériles pour la microbiologie. La conservation des échantillons limite la dégradation des analytes sensibles : NH₄⁺ : conservation 24h à 4°C sans ajout de réactif, ou acidification H₂SO₄ (pH < 2) pour 28 jours. DCO, DBO₅ : 4°C, analyser dans les 24h (DBO₅) ou 7 jours (DCO). NO₃⁻, NO₂⁻ : 4°C, analyser dans les 48h (NO₂⁻ instable). Métaux : acidification HNO₃ (pH < 2) et conservation 6 mois à 4°C. Microbiologie : flacon stérile avec thiosulfate (neutralise le chlore résiduel), analyse dans les 4h (microbiologie) ou 24h.',
          sous_sections: [
            { titre: '2.1 Chaîne de conservation et transport', texte: 'Les flacons sont conservés dans une glacière à 4°C dès le prélèvement. La fiche de prélèvement accompagne chaque flacon (heure, lieu, température sur site, observations, paramètres mesurés sur place, opérateur). Le laboratoire vérifie à réception la conformité des conditions de transport et les délais d\'analyse. Un dépassement de délai invalide l\'analyse (résultat non valide). L\'accréditation COFRAC du laboratoire garantit le respect des procédures selon NF EN ISO/CEI 17025.' }
          ]
        },
        {
          titre: '3. Analyses sur site (terrain)',
          texte: 'Plusieurs paramètres doivent impérativement être mesurés sur site car ils évoluent dès le prélèvement : pH (variation après dégazage CO₂ ou absorption CO₂), OD (se perd ou se gagne rapidement selon aération), T° (change hors sol), conductivité (paramètre de caractérisation), potentiel redox Eh (s\'oxyde rapidement à l\'air), turbidité (sédimenter rapidement), chlore résiduel (se dégrade en heures). La mallette de terrain contient typiquement : multiparamètre portable (pH/OD/conductivité/T°/redox), turbidimètre de terrain (NTU), kit colorimétrique chlore résiduel libre et total (méthode DPD-1 et DPD-3), kit NO₃⁻ et NH₄⁺ rapides (chromogènes), GPS, fiche de terrain, appareil photo. La mesure de la turbidité est particulièrement importante pour évaluer l\'efficacité de la coagulation-floculation : sortie filtre < 0,3 NTU visé ; en réseau < 1 NTU (limite alerte) ; < 2 NTU (limite valeur sanitaire). La turbidité est aussi utilisée comme indicateur indirect de la contamination bactériologique (corrélation empirique avec bactéries fécales lors des crues).',
          sous_sections: [
            { titre: '3.1 Lecture et interprétation d\'un bulletin d\'analyse', texte: 'Un bulletin d\'analyse fournit pour chaque paramètre : la valeur mesurée, l\'unité, l\'incertitude de mesure, la méthode utilisée (référence normative), la limite de quantification (LQ), la conformité par rapport à la valeur limite (VL) réglementaire. La mention "<LQ" (inférieur à la limite de quantification) signifie que le composé n\'est pas détectable à ce niveau (ex: pesticide < 0,05 µg/L). L\'interprétation doit tenir compte de l\'incertitude : une valeur à 48 mg/L de NO₃⁻ avec une incertitude de ±5 mg/L peut statistiquement dépasser la limite de 50 mg/L.' }
          ]
        },
        {
          titre: '4. Accréditation COFRAC et assurance qualité analytique',
          texte: 'L\'accréditation COFRAC (Comité Français d\'Accréditation) selon la norme NF EN ISO/CEI 17025 est la reconnaissance officielle de la compétence technique d\'un laboratoire. Elle est obligatoire pour les analyses dans le cadre du contrôle sanitaire de l\'eau potable (eau du robinet, eau de baignade). Les laboratoires accrédités s\'engagent à : utiliser des méthodes d\'analyses normalisées (NF EN, ISO) ou validées ; étalonner régulièrement leurs instruments avec des matériaux de référence certifiés (MRC) ; participer à des essais d\'aptitude inter-laboratoires (EIL, circuits de comparaison) ; documenter toutes les opérations (traçabilité) ; calculer et déclarer les incertitudes de mesure. Le système d\'assurance qualité couvre toute la chaîne analytique : réception des échantillons, préparation (extractions, digestions), analyse, calcul, validation et rendu des résultats. Un tableau de bord qualité surveille les taux de récupération (spikes), les doubles déterminations, les blancs et les étalons insérés dans les séries analytiques. Pour l\'exploitant d\'une station, savoir lire un rapport d\'analyse accrédité, comprendre les mentions "<LQ", ">LM" (supérieur à la limite de méthode), et interpréter les incertitudes est une compétence fondamentale pour la prise de décision et la conformité réglementaire.'
        }
      ],
      points: [
        'NF EN ISO 5667 : série de normes pour les procédures d\'échantillonnage des eaux',
        'Prélèvement représentatif : purge réseau, milieu courant pour rivière, 3 volumes puits',
        'Paramètres à mesurer sur site : pH, OD, T°, conductivité, Eh, turbidité, chlore',
        'Conservation : 4°C pour la plupart ; acidification HNO₃ pour les métaux, H₂SO₄ pour N',
        'Délais critiques : DBO₅ < 24h, microbiologie < 4h, NO₂⁻ < 48h',
        'COFRAC/ISO 17025 : accréditation obligatoire pour contrôle sanitaire eau potable',
        'Turbidité sortie filtre visée < 0,3 NTU ; alerte réseau > 1 NTU',
        'Chlore résiduel : méthode DPD colorimétrique, mesure sur site obligatoire',
        'Bulletin d\'analyse : valeur + incertitude + LQ + méthode + conformité VL',
        'Les EIL (essais d\'aptitude inter-laboratoires) vérifient la justesse des méthodes analytiques'
      ],
      formules: [
        'Volume de purge puits (L) = 3 × V_ouvrage (L) = 3 × π × r² × H_nappe',
        'Turbidité (NTU) : mesure par néphélométrie à 90° (diffusion Mie)',
        'Chlore résiduel DPD : C_Cl (mg/L) = A_mesuré / ε × l (loi Beer-Lambert)',
        'Incertitude élargie : U = k × u (k=2 pour 95% de confiance) ; résultat = X ± U'
      ],
      retenir: 'NF EN ISO 5667 · Prélèvement ponctuel vs composite · Purge · Conservation 4°C · Paramètres terrain · Turbidité NTU · COFRAC · Bulletin analyse · Incertitude · Délais'
    },
    exercices: [
      { n: '1', enonce: 'Un technicien prélève de l\'eau sur un réseau de distribution pour analyse microbiologique. Décrire la procédure correcte de prélèvement étape par étape.', solution: 'Étape 1 : Choisir un robinet accessible (pas d\'aérateur, pas de flexible), de préférence en métal ou céramique (pas de plastique).\nÉtape 2 : Flamber le robinet au briquet ou désinfecter à l\'alcool + laisser sécher.\nÉtape 3 : Ouvrir à plein débit et purger 2 à 5 minutes (selon volume réseau local).\nÉtape 4 : Réduire le débit, remplir le flacon stérile (avec thiosulfate de sodium pour neutraliser le chlore) en évitant tout contact avec les lèvres du flacon.\nÉtape 5 : Fermer immédiatement, étiqueter, noter heure, T°, chlore résiduel, lieu exact.\nÉtape 6 : Conserver à 4°C en glacière, acheminer au labo dans les 4 heures.' },
      { n: '2', enonce: 'Quel type d\'échantillonnage (ponctuel ou composite) choisir pour caractériser la qualité d\'un effluent de STEP sur 24h ? Pourquoi ?', solution: 'Échantillon composite proportionnel au débit : un préleveur automatique prélève toutes les 30 min ou 1h une aliquote proportionnelle au débit instantané, et les mélange au cours des 24h.\nPourquoi : la qualité d\'un effluent de STEP varie fortement selon le moment de la journée (pointes hydrauliques le matin et le soir, variations des charges industrielles, temps de pluie). Un échantillon ponctuel serait non représentatif de la journée entière. Le composite donne une valeur moyennée sur 24h, représentative pour le calcul des flux journaliers et la vérification du respect de l\'arrêté de rejet.' },
      { n: '3', enonce: 'Pourquoi mesurer le pH sur site et pas au laboratoire ? Donner un exemple d\'erreur possible.', solution: 'Le pH évolue après prélèvement car : le CO₂ dissous (gaz) s\'échappe à l\'air libre → le pH monte (eau agressive sous-estimée). En eau très aérée, le CO₂ ambiant peut se dissoudre → pH baisse légèrement.\nExemple : une eau acide de nappe à pH 5,8 (CO₂ élevé sous pression). Si prélevée et analysée 2h plus tard, CO₂ évaporé → pH apparent 7,1. Décision erronée : pas de correction de pH alors qu\'elle est nécessaire.' },
      { n: '4', enonce: 'Un bulletin d\'analyse indique : NO₃⁻ = 47 mg/L, incertitude ±4 mg/L. L\'eau est-elle conforme à la norme de 50 mg/L ? Argumenter.', solution: 'Valeur mesurée = 47 mg/L ; incertitude élargie U = ±4 mg/L (k=2).\nPlage de confiance à 95% : [43 mg/L ; 51 mg/L].\nLa valeur peut statistiquement être > 50 mg/L → la conformité n\'est pas garantie avec certitude.\nEn pratique réglementaire, si X ≤ VL, l\'eau est déclarée conforme. Mais l\'exploitant doit renforcer la surveillance (la prochaine analyse peut dépasser 50 mg/L).\nConclusion : formellement conforme (47 < 50) mais en zone de vigilance.' },
      { n: '5', enonce: 'Pour un forage de 15 m de profondeur, colonne d\'eau = 8 m, diamètre = 160 mm. Calculer le volume de purge (3 volumes d\'ouvrage) en litres.', solution: 'V_ouvrage = π × r² × H = π × (0,08)² × 8 = π × 0,0064 × 8 = 0,1608 m³ = 160,8 L\nV_purge = 3 × 160,8 = 482,4 L ≈ 480 L' },
      { n: '6', enonce: 'Un exploitant mesure une turbidité de 1,8 NTU en sortie d\'usine de potabilisation. Est-ce acceptable ? Quelles actions prendre ?', solution: '1,8 NTU > 1 NTU (seuil d\'alerte) et < 2 NTU (valeur indicative potabilité).\nPas de dépassement de norme mais proche de la limite : situation à surveiller.\nActions : 1) Vérifier immédiatement les paramètres de coagulation (pH, dose coagulant, turbidité eau brute). 2) Intensifier la surveillance (mesures toutes les heures). 3) Inspecter les filtres (colmatage prématuré, percée de filtre ?). 4) Si turbidité > 2 NTU : alerter responsable et envisager arrêt de la mise en distribution jusqu\'à correction. La turbidité élevée est un indicateur de risque microbiologique (protéger les micro-organismes de la désinfection UV/chlore).' },
      { n: '7', enonce: 'Enumérer 5 paramètres qui DOIVENT être mesurés sur le terrain lors d\'une campagne de prélèvement en rivière. Justifier pour chacun.', solution: '1. Température : T° conditionne la saturation en O₂, les réactions chimiques, la vie piscicole. Elle change rapidement hors eau.\n2. pH : Évolue par dégazage CO₂. Conditionne les équilibres chimiques et la toxicité des métaux.\n3. OD (oxygène dissous) : Se perd ou se gagne très vite hors de l\'eau. Indicateur vital de la santé du milieu.\n4. Conductivité : Indicateur rapide de minéralisation. Reste stable quelques heures mais s\'évapore si l\'échan tillon n\'est pas fermé.\n5. Potentiel redox Eh : S\'oxyde immédiatement à l\'air. Indicateur des conditions anaérobies (présence Fe²⁺, Mn²⁺, H₂S).' },
      { n: '8', enonce: 'Quel est le rôle du thiosulfate de sodium dans les flacons de prélèvement microbiologique ? Quelle quantité est nécessaire pour 250 mL d\'eau chlorée à 0,5 mg/L ?', solution: 'Le thiosulfate de sodium Na₂S₂O₃ neutralise le chlore résiduel dans l\'eau prélevée, empêchant son action bactéricide de continuer à tuer les bactéries après le prélèvement (ce qui fausserait la dénombrement en donnant des résultats inférieurs à la réalité).\nRéaction : Na₂S₂O₃ + 4Cl₂ + 5H₂O → Na₂SO₄ + H₂SO₄ + 8HCl\nDose recommandée : 100 mg de Na₂S₂O₃ neutralise 6,3 mg de Cl₂ (rapport massique ~1/16).\nCl₂ à neutraliser = 0,5 mg/L × 0,25 L = 0,125 mg Cl₂\nNa₂S₂O₃ minimum = 0,125 × 16 = 2 mg Na₂S₂O₃\nEn pratique, les flacons stériles préparés par le labo contiennent déjà 100 mg (large excès) pour garantir la neutralisation même si le chlore est plus élevé.' }
    ]
  }

};
