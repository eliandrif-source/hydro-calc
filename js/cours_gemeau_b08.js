var GEMEAU_B08 = {

  'GEMEAU-063': {
    id: 'GEMEAU-063',
    titre: 'Technologies de pompes et domaines d\'utilisation',
    fiche: {
      intro: 'Le technicien des métiers de l\'eau est quotidiennement confronté au choix et à l\'exploitation de pompes : stations d\'exhaure, surpresseurs AEP, postes de refoulement d\'eaux usées. Choisir la bonne technologie de pompe conditionne la fiabilité de l\'installation, la consommation énergétique et les coûts de maintenance sur 20 ans.',
      sections: [
        {
          titre: '1. Les pompes centrifuges',
          texte: 'La pompe centrifuge est la technologie dominante dans les métiers de l\'eau. Son principe repose sur la transformation d\'énergie cinétique en énergie de pression par l\'action d\'une roue (impulseur) en rotation dans un corps de pompe. Le fluide entre axialement au centre de la roue (oeil de roue) et est projeté radialement vers la périphérie par la force centrifuge. Un diffuseur ou une volute transforme ensuite la vitesse en pression.\n\nOn distingue trois architectures principales. La pompe centrifuge à volute (la plus courante) dispose d\'un canal spiralé qui entoure la roue et ralentit progressivement le fluide pour convertir sa vitesse en pression. La pompe à diffuseur (ou à aubes directrices) améliore le rendement pour les grandes plages de débit, elle est privilégiée pour les pompes immergées multicellulaires des forages. La pompe multi-étagée associe plusieurs roues en série sur le même arbre pour atteindre de hautes pressions (jusqu\'à 100 bars pour certaines applications industrielles, 8-25 bars en AEP).\n\nLes pompes centrifuges à roue vortex (ou à roue semi-ouverte) sont spécialement conçues pour les eaux chargées en matières en suspension (eaux usées brutes, boues). La roue n\'occupe pas tout le corps de pompe, ce qui limite les risques d\'obstruction. Elles acceptent des solides jusqu\'à 50-80 mm selon le diamètre de passage. Leur rendement est plus faible (50-65 %) mais leur robustesse est primordiale en assainissement.\n\nLes pompes submersibles associent le corps de pompe et le moteur électrique dans un ensemble étanche immergeable. Le moteur est refroidi par le liquide pompé. Elles équipent les forages (diamètre 4, 6, 8 pouces selon le débit), les postes de relevage eaux usées et les prises d\'eau en rivière. Leur installation est simplifiée (pas de problème d\'amorçage, pas de local technique en surface) mais la maintenance nécessite leur extraction.',
          sous_sections: [
            {
              titre: '1.1 Pompes auto-amorçantes',
              texte: 'Une pompe centrifuge classique ne peut pas s\'amorcer seule : si la conduite d\'aspiration est remplie d\'air, la roue ne peut pas créer de dépression suffisante pour aspirer l\'eau. Les pompes auto-amorçantes intègrent un réservoir auxiliaire et un système de recirculation interne qui permettent de chasser l\'air de l\'aspiration au démarrage. Elles sont employées aux prises d\'eau temporaires (pompes de chantier, pompes d\'exhaure) et dans les installations où l\'amorçage manuel est impossible.'
            }
          ]
        },
        {
          titre: '2. Les pompes volumétriques',
          texte: 'Contrairement aux centrifuges, les pompes volumétriques déplacent un volume fixe de fluide à chaque cycle, indépendamment de la pression en ligne. Le débit est quasi constant et proportionnel à la vitesse de rotation, ce qui les rend idéales pour le dosage de réactifs chimiques.\n\nLes pompes à membrane (diaphragme) sont les plus utilisées pour le dosage : une membrane flexible (PTFE, EPDM) oscille sous l\'action d\'un excentrique ou d\'un actionneur hydraulique et aspire/refoule le réactif à travers des clapets anti-retour. La précision de dosage est excellente (±1 % du fond d\'échelle). On les retrouve pour le dosage de coagulant, de chlore, de soude, de phosphate anti-corrosion.\n\nLes pompes à vis excentrée (pompes de Moineau) fonctionnent par le déplacement hélicoïdal d\'un rotor métallique dans un stator élastomère. Elles pompent les fluides visqueux (boues, crèmes de chaux, flocs) sans les cisailler. Débit de 0,1 à 100 m³/h selon les modèles. Les pompes péristaltiques (galets qui compriment un flexible) sont utilisées pour les petits débits de réactifs corrosifs car seul le flexible est en contact avec le produit.',
          sous_sections: []
        },
        {
          titre: '3. Critères de sélection d\'une pompe',
          texte: 'Le choix d\'une pompe résulte d\'une analyse multicritère. Le point de fonctionnement hydraulique (débit nominal Q en m³/h et hauteur manométrique totale HMT en m) est le critère de base. Il faut vérifier que la pompe présente un bon rendement au point de fonctionnement (optimum à ±10 % du débit nominal).\n\nLa nature du fluide guide le choix technologique : eau claire (centrifuge standard), eau chargée (vortex ou semi-ouverte), eau corrosive (matériaux résistants, inox, fonte époxy), réactif chimique (volumétrique, matériaux compatibles). La teneur en matières en suspension (MES), la taille maximale des solides et la viscosité sont des paramètres clés.\n\nLes contraintes d\'installation conditionnent l\'architecture : pompe en surface (nécessite amorçage, accès facile), pompe immergée (pas d\'amorçage, bruit réduit, maintenance complexe), pompe horizontale vs verticale. Le niveau de bruit, les contraintes d\'encombrement, le mode d\'alimentation électrique (monophasé, triphasé) et la régulation (vitesse fixe ou variable) complètent l\'analyse. Le coût global sur 20 ans (TCO = achat + installation + énergie + maintenance) prime sur le seul prix d\'achat.',
          sous_sections: []
        },
        {
          titre: '4. Principaux constructeurs et familles de produits',
          texte: 'Le marché des pompes pour l\'eau est dominé par quelques grands groupes européens. Grundfos (Danemark) couvre toute la gamme : pompes de forage série SP, surpresseurs CM/CME, circulateurs, pompes doseuses DDA/DME. KSB (Allemagne) propose les séries Etanorm (eau claire), Sewatec (EU), Multitec (multicellulaire). ITT Goulds Water Technology (USA) est présent sur les applications industrielles et de forage. Sulzer (Suisse) se distingue sur les eaux usées et les stations de pompage de grande capacité. Flygt (groupe Xylem, USA) est la référence mondiale des pompes submersibles pour eaux usées.\n\nEn dosage, Grundfos Digital Dosing, LMI, ProMinent et SEKO dominent. Pour les pompes à vis excentrée, Netzsch et PCM (groupe PSG) sont les références. La lecture des courbes caractéristiques constructeur (au format papier ou via logiciels de sélection en ligne comme Grundfos Product Center, KSB Pump Selector) est une compétence essentielle du technicien.',
          sous_sections: []
        }
      ],
      points: [
        'La pompe centrifuge transforme l\'énergie cinétique (roue) en énergie de pression (volute ou diffuseur)',
        'Les pompes à roue vortex acceptent les eaux chargées : passage de solides jusqu\'à 50-80 mm',
        'Les pompes submersibles ne nécessitent pas d\'amorçage ; elles équipent forages, postes de relevage EU et prises d\'eau',
        'Les pompes volumétriques délivrent un débit quasi constant quel que soit la pression : idéales pour le dosage de réactifs',
        'Les pompes à membrane assurent une précision de dosage de ±1 % et résistent aux produits chimiques agressifs',
        'Le choix se fait sur le point de fonctionnement (Q, H) avec un rendement maximal ±10 % du débit nominal',
        'La nature du fluide (eau claire, eau chargée, réactif) oriente vers une famille technologique précise',
        'Le TCO sur 20 ans intègre achat, installation, énergie et maintenance — la pompe la moins chère à l\'achat est rarement la plus économique',
        'Les pompes auto-amorçantes évacuent l\'air à l\'aspiration : indispensables pour les pompes de chantier et d\'exhaure',
        'Les constructeurs majeurs du secteur eau : Grundfos, KSB, Flygt (Xylem), Sulzer, ITT Goulds'
      ],
      formules: [
        'Débit volumique : Q = V/t → [m³/s] ou [m³/h] ; V = volume pompé, t = temps',
        'Vitesse spécifique (caractérise le type de pompe) : Ns = n√Q / H^(3/4) → [-] ; n en tr/min, Q en m³/s, H en m',
        'Débit pompe à membrane : Q = V_cylindre × f × ε → [L/h] ; f = fréquence coups/min, ε = efficacité volumétrique',
        'Rendement volumétrique : ηv = Qeffectif / Qthéorique → [-] ; pertes par recirculation interne'
      ],
      retenir: 'Centrifuge · Volumétrique · Roue vortex · Submersible · Auto-amorçante · Point de fonctionnement · Dosage · TCO · MES · Pompe à membrane'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un forage AEP doit délivrer Q = 30 m³/h pour une HMT de 65 m. Quel type de pompe choisissez-vous et pourquoi ? Le forage a un diamètre de 250 mm (10 pouces).',
        solution: 'Le diamètre intérieur nominal disponible pour la pompe est 10 pouces (254 mm). Q = 30 m³/h, HMT = 65 m. On choisit une pompe submersible centrifuge multicellulaire de forage. Raisons : (1) eau claire (eau souterraine), pompe centrifuge adaptée ; (2) installation dans le forage → submersible obligatoire ; (3) HMT élevée (65 m) → multicellulaire ou roue grande diamètre nécessaire ; (4) pas de problème d\'amorçage avec la submersible. Référence possible : Grundfos SP 30-4 (30 m³/h, ~60-70 m, diamètre extérieur 168 mm compatible 10 pouces).'
      },
      {
        n: '2',
        enonce: 'Un poste de relevage d\'eaux usées reçoit des effluents avec des MES = 400 mg/L et des solides de 40 mm max. Débit de pompage : 80 m³/h, HMT = 12 m. Quel type de pompe choisir ?',
        solution: 'Les eaux usées brutes avec MES élevées et solides de 40 mm imposent une pompe à roue vortex ou semi-ouverte submersible. Le passage de 40 mm impose un diamètre libre ≥ 50 mm (marge de sécurité). On choisit une pompe submersible Flygt N-3153 ou similaire (pompe vortex, passage ≥ 50 mm, gamme 40-120 m³/h pour H ≤ 20 m). La pompe centrifuge à roue fermée classique serait inadaptée (risque d\'obstruction).'
      },
      {
        n: '3',
        enonce: 'Une unité de potabilisation doit doser du sulfate d\'aluminium à raison de 40 mg/L d\'Al pour un débit d\'eau à traiter de 200 m³/h. La solution commerciale d\'aluminate contient 8 % en masse d\'Al. Déduire le débit volumique de dosage nécessaire (ρ solution = 1 200 kg/m³).',
        solution: 'Dose d\'Al requise = 40 mg/L × 200 m³/h = 40×10⁻³ g/L × 200 000 L/h = 8 000 g/h = 8 kg/h d\'Al pur. La solution contient 8 % d\'Al en masse, donc masse solution nécessaire = 8/0,08 = 100 kg/h. Volume de solution = 100 kg/h ÷ 1 200 kg/m³ = 0,0833 m³/h = 83,3 L/h. On choisit une pompe doseuse à membrane de débit nominal 100 L/h (avec marge 20 %) avec réglage de débit par fréquence ou course de membrane.'
      },
      {
        n: '4',
        enonce: 'Pour transférer des boues primaires d\'épaississement (siccité 3 %, viscosité dynamique μ = 50 mPa·s), débit 15 m³/h, HMT 10 m. Comparer pompe centrifuge et pompe à vis excentrée.',
        solution: 'Boues épaisses, viscosité élevée → pompe centrifuge inadaptée (chute de rendement majeure, risque d\'obstruction). Pompe à vis excentrée (Moineau) : débit proportionnel à la vitesse, pas de cisaillement des flocs, adaptée aux fluides visqueux jusqu\'à plusieurs Pa·s. Choix confirmé : pompe à vis excentrée, ex. Netzsch NM045 (15 m³/h, 10 m de HMT). La centrifuge serait acceptable pour boues diluées (< 1 % siccité) mais pas à 3 %.'
      },
      {
        n: '5',
        enonce: 'Un constructeur propose deux pompes centrifuges pour un même point de service Q = 50 m³/h, H = 40 m. Pompe A : prix 3 200 €, η = 68 %, maintenance 200 €/an. Pompe B : prix 4 800 €, η = 74 %, maintenance 120 €/an. Durée de service 20 ans, 4 000 h/an, énergie 0,12 €/kWh. Comparer le TCO.',
        solution: 'Puissance hydraulique : Ph = ρgQH = 1 000×9,81×(50/3600)×40 = 5 453 W = 5,45 kW. Puissance absorbée pompe A : Pa_A = 5,45/0,68 = 8,01 kW. Pompe B : Pa_B = 5,45/0,74 = 7,36 kW. Énergie annuelle A : E_A = 8,01×4 000 = 32 040 kWh ; coût 32 040×0,12 = 3 845 €/an. Énergie B : E_B = 7,36×4 000 = 29 440 kWh ; coût 3 533 €/an. TCO sur 20 ans : A = 3 200 + 20×(3 845+200) = 3 200 + 80 900 = 84 100 €. B = 4 800 + 20×(3 533+120) = 4 800 + 73 060 = 77 860 €. La pompe B coûte 6 240 € de moins sur 20 ans malgré un prix d\'achat supérieur de 1 600 €.'
      },
      {
        n: '6',
        enonce: 'Citer 3 critères qui guident le choix entre une pompe horizontale en surface et une pompe immergée pour une prise d\'eau en rivière (Q = 400 m³/h, HMT = 8 m).',
        solution: '1. Sécurité d\'amorçage : la pompe immergée est toujours amorcée, la pompe horizontale nécessite un système d\'amorçage (clapet de pied, vide d\'air) — avantage immergée. 2. Accessibilité pour maintenance : la pompe horizontale est facilement accessible en surface, l\'immergée nécessite extraction par palan ou treuil — avantage horizontale. 3. Niveau d\'eau variable : si le niveau peut descendre sous l\'aspiration de la pompe horizontale, seule l\'immergée garantit le fonctionnement — avantage immergée. À 400 m³/h / 8 m, les deux technologies sont techniquement applicables ; le choix final dépend du contexte (variations de niveau, fréquence de maintenance).'
      },
      {
        n: '7',
        enonce: 'Une station de pompage AEP fonctionne 6 000 h/an. La pompe principale (Q = 80 m³/h, Pa = 18 kW) sera remplacée par un modèle à meilleur rendement (Pa = 15 kW). Prix de l\'énergie : 0,11 €/kWh. Calculer le retour sur investissement si la nouvelle pompe coûte 6 500 €.',
        solution: 'Économie de puissance : ΔP = 18 - 15 = 3 kW. Économie d\'énergie annuelle : ΔE = 3×6 000 = 18 000 kWh/an. Économie financière annuelle : ΔC = 18 000×0,11 = 1 980 €/an. Retour sur investissement : ROI = 6 500/1 980 = 3,28 ans. Commentaire : excellent retour sur investissement (< 5 ans), justifiant le remplacement anticipé.'
      },
      {
        n: '8',
        enonce: 'Expliquer pourquoi une pompe centrifuge standard ne peut pas pomper un fluide contenant 30 % de sable en volume. Quelle alternative proposez-vous pour pomper des sables de dragage (densité mélange 1 400 kg/m³) ?',
        solution: 'Une pompe centrifuge standard avec roue fermée ne peut pas gérer 30 % de sable en volume car : (1) obstruction quasi certaine dans les canaux de roue et volute ; (2) usure abrasive très rapide des surfaces internes ; (3) instabilité hydraulique par variations de densité. Alternative : pompe à sable ou drague à roue ouverte en acier inox ou fonte dure (Cr 28 %), avec jeux internes importants et roue renforcée anti-abrasion. Pour les dragages, on utilise des pompes centrifuges spéciales à sable (ex. Warman, Metso) avec revêtements en polyuréthane ou en métal blanc. La vitesse périphérique de la roue est limitée pour réduire l\'abrasion.'
      }
    ]
  },

  'GEMEAU-064': {
    id: 'GEMEAU-064',
    titre: 'Courbes de pompe, courbe de réseau et point de fonctionnement',
    fiche: {
      intro: 'Toute installation de pompage se caractérise par l\'intersection de deux courbes : la courbe caractéristique de la pompe H(Q) et la courbe de réseau Hres(Q). Ce point de fonctionnement détermine le débit et la hauteur réellement fournis, et conditionne les performances énergétiques et hydrauliques de l\'installation.',
      sections: [
        {
          titre: '1. La courbe caractéristique d\'une pompe centrifuge',
          texte: 'Le constructeur de pompe fournit un ensemble de courbes caractéristiques établies à vitesse de rotation nominale (en général 1 450 ou 2 900 tr/min pour les pompes 50 Hz). La courbe H(Q) — aussi appelée courbe débit-hauteur ou courbe Q-H — représente la hauteur manométrique totale H (en m) que la pompe peut fournir en fonction du débit Q (en m³/h ou L/s). Elle a une allure généralement décroissante : à débit nul (vanne fermée), la pression est maximale (hauteur à débit nul ou H0) ; quand le débit augmente, la hauteur diminue. La courbe est obtenue expérimentalement en ISO 9906.\n\nLa courbe de rendement η(Q) superposée montre un maximum (MEPS — Minimum Efficiency Point Scheme — ou BEP — Best Efficiency Point) entre Q = 0 et Q = Qmax. Le BEP est le point de fonctionnement optimal ; travailler trop loin du BEP dégrade le rendement et peut provoquer des vibrations et une usure prématurée. Les constructeurs recommandent de fonctionner entre 70 % et 120 % du débit au BEP.\n\nLa courbe de puissance absorbée Pa(Q) est croissante pour les pompes centrifuges à roue non surchargeable, ce qui signifie que la puissance maximale est consommée au débit maximal. Cela oblige à dimensionner le moteur pour le débit maximal. La courbe NPSH(Q) — examinée au chapitre GEMEAU-066 — indique le NPSH requis par la pompe en fonction du débit.',
          sous_sections: []
        },
        {
          titre: '2. La courbe de réseau',
          texte: 'La courbe de réseau représente la hauteur nécessaire pour faire circuler le débit Q dans le système hydraulique aval. Elle est de la forme :\n\nHres = Hg + R × Q²\n\nOù Hg (en m) est la hauteur géométrique ou hauteur statique, correspondant à la différence d\'altitude entre la surface de la bâche d\'aspiration et la surface de la bâche de refoulement. Le terme R × Q² représente les pertes de charge (régulières et singulières), qui croissent proportionnellement au carré du débit. R est la résistance hydraulique du réseau, en m/(m³/h)².\n\nSi le réseau est horizontal ou si la bâche de refoulement est à la même cote que l\'aspiration, Hg = 0 et la courbe de réseau passe par l\'origine. Si le refoulement est en surpression (réseau en charge), Hg inclut la pression régnant au point de refoulement convertie en mètres de colonne d\'eau. Le coefficient R peut être calculé par la formule de Darcy-Weisbach ou de Manning-Strickler, en sommant toutes les pertes de charge de la conduite.',
          sous_sections: []
        },
        {
          titre: '3. Le point de fonctionnement',
          texte: 'Le point de fonctionnement est l\'intersection graphique des deux courbes H(Q) et Hres(Q). En ce point, la pression fournie par la pompe est exactement égale à la pression nécessaire pour vaincre les résistances du réseau. Graphiquement, on trace les deux courbes sur le même diagramme H–Q et on lit les coordonnées de l\'intersection. Analytiquement, on résout le système H_pompe(Q) = Hres(Q).\n\nSi le point de fonctionnement ne correspond pas au BEP (débit nominal de la pompe), on peut agir de plusieurs façons : (1) réduire le diamètre de la roue (rognage), ce qui abaisse la courbe H(Q) vers le bas — méthode définitive et irréversible ; (2) fermer partiellement une vanne sur le refoulement, ce qui déplace la courbe de réseau vers le haut (augmentation artificielle des pertes de charge) — méthode dissipative à éviter en exploitation permanente ; (3) changer la vitesse de rotation (variateur de fréquence), ce qui est la méthode optimale sur le plan énergétique (cf. GEMEAU-067).',
          sous_sections: [
            {
              titre: '3.1 Instabilité : éviter la zone de fonctionnement à gauche du BEP',
              texte: 'Certaines courbes H(Q) présentent une zone instable à gauche du BEP où la courbe n\'est plus monotone décroissante (courbe en S ou en dos d\'âne). Si le point de fonctionnement se situe dans cette zone, la pompe peut osciller entre deux régimes, provoquer des chocs hydrauliques et des vibrations destructrices. On évite cette situation en ne sélectionnant jamais une pompe dont le point de fonctionnement se situe à gauche du débit minimal recommandé par le constructeur (généralement 50 % du débit BEP).'
            }
          ]
        },
        {
          titre: '4. Influence du rognage de roue et de la variation de vitesse',
          texte: 'Le rognage consiste à usiner le diamètre extérieur de la roue d\'une pompe centrifuge pour abaisser ses performances. La relation approximative (pour réduction modérée, ΔD/D < 20 %) est Q2/Q1 = D2/D1 et H2/H1 = (D2/D1)². Cette technique est irréversible et réalisée en atelier. Elle est utilisée quand le point de fonctionnement réel est trop à gauche du BEP (excès de pression par rapport au besoin).\n\nLa variation de vitesse via un variateur de fréquence (VFD) obéit aux lois de similitude (détaillées au GEMEAU-067) : Q ∝ n, H ∝ n², P ∝ n³. La courbe H(Q) se déplace en bloc vers le bas quand n diminue. C\'est la méthode à privilégier pour adapter le débit aux besoins variables (heure de pointe vs heure creuse), car les économies d\'énergie sont considérables.',
          sous_sections: []
        }
      ],
      points: [
        'La courbe H(Q) d\'une centrifuge est décroissante : la hauteur maximale est à débit nul, le débit maximal est à H = 0',
        'Le BEP (Best Efficiency Point) est le débit nominal auquel le rendement est maximum — fonctionner en dehors du BEP dégrade les performances',
        'La courbe de réseau a la forme Hres = Hg + R×Q² : Hg est la hauteur statique, R×Q² sont les pertes de charge',
        'Le point de fonctionnement est l\'intersection des deux courbes — il donne le débit réel et la hauteur réelle fournis',
        'Le rognage de roue abaisse les courbes H(Q) de manière définitive : Q ∝ D, H ∝ D²',
        'La variation de vitesse déplace les courbes selon les lois de similitude : méthode énergétiquement optimale',
        'Fermer une vanne de refoulement pour réduire le débit est une pratique dissipative à éviter en service permanent',
        'Une courbe en S (instabilité à gauche du BEP) peut provoquer des oscillations destructrices',
        'La puissance Pa(Q) est croissante pour les centrifuges : dimensionner le moteur pour le débit maximal prévisible',
        'Lire les courbes constructeur au format normalisé ISO 9906 : H(Q), η(Q), Pa(Q), NPSH(Q)'
      ],
      formules: [
        'Courbe de réseau : Hres = Hg + R × Q² → [m] ; Hg = hauteur géométrique [m], R = résistance hydraulique [m·h²/m⁶], Q = débit [m³/h]',
        'Rognage de roue (approx. ΔD/D < 20 %) : Q2/Q1 = D2/D1 et H2/H1 = (D2/D1)²',
        'Rendement de la pompe au point de fonctionnement : η = Ph / Pa = ρgQH / Pa → [-]',
        'Résistance hydraulique du réseau : R = ΔHpertes_nominales / Q_nominal² → [m·h²/m⁶]'
      ],
      retenir: 'Courbe H(Q) · BEP · Point de fonctionnement · Courbe de réseau · Hauteur statique · Pertes de charge · Rognage · Variateur · Instabilité · ISO 9906'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une pompe a la courbe H(Q) approchée par H = 50 - 0,02Q² (H en m, Q en m³/h). Le réseau a une hauteur statique Hg = 30 m et une résistance R = 0,005 m·h²/m⁶. Calculer le point de fonctionnement.',
        solution: 'On résout H_pompe = Hres : 50 - 0,02Q² = 30 + 0,005Q². On regroupe : 50 - 30 = (0,02 + 0,005)Q² ; 20 = 0,025Q² ; Q² = 800 ; Q = 28,3 m³/h. H = 50 - 0,02×800 = 50 - 16 = 34 m. Point de fonctionnement : Q = 28,3 m³/h, H = 34 m.'
      },
      {
        n: '2',
        enonce: 'Pour la pompe précédente, quelle est la hauteur à débit nul H0 ? Quel est le débit maximum (H = 0) ?',
        solution: 'H0 : Q = 0 → H = 50 - 0 = 50 m. Débit maximum : 50 - 0,02Q² = 0 → Q² = 2 500 → Qmax = 50 m³/h. La courbe de la pompe s\'étend de H = 50 m (débit nul) à Q = 50 m³/h (hauteur nulle).'
      },
      {
        n: '3',
        enonce: 'Le BEP de la pompe précédente est à Q_BEP = 25 m³/h, η_BEP = 75 %. Le point de fonctionnement calculé en Q1 est-il satisfaisant ? Quel est l\'écart au BEP ?',
        solution: 'Q_fonctionnement = 28,3 m³/h. Q_BEP = 25 m³/h. Écart = (28,3 - 25)/25 × 100 = +13,2 %. La règle recommande ±10 % autour du BEP. L\'écart de 13 % est légèrement hors limite mais généralement acceptable ; le rendement sera légèrement inférieur à 75 %. On peut envisager un léger rognage de roue pour ramener le point de fonctionnement plus proche du BEP.'
      },
      {
        n: '4',
        enonce: 'On veut réduire le débit de la pompe (Q = 28,3 m³/h) à 22 m³/h par rognage de roue. Diamètre initial D1 = 250 mm. Calculer D2.',
        solution: 'Loi de rognage : Q2/Q1 = D2/D1 → D2 = D1 × (Q2/Q1) = 250 × (22/28,3) = 250 × 0,777 = 194 mm. Vérification de la réduction : ΔD/D = (250-194)/250 = 22,4 % — légèrement au-delà de la limite de 20 % ; les formules approximatives peuvent sous-estimer la réduction réelle. Il faudra un essai ou un recalcul plus précis avec le logiciel constructeur.'
      },
      {
        n: '5',
        enonce: 'Si on ferme partiellement une vanne de refoulement pour réduire le débit de 28,3 m³/h à 22 m³/h, quelle hauteur supplémentaire de pertes de charge la vanne doit-elle créer ?',
        solution: 'À Q = 22 m³/h : H_pompe = 50 - 0,02×22² = 50 - 9,68 = 40,32 m. Hres_réseau (sans vanne) = 30 + 0,005×22² = 30 + 2,42 = 32,42 m. Pertes de charge vanne = 40,32 - 32,42 = 7,9 m. La vanne dissipe 7,9 m de pression soit 7,9×1 000×9,81/10⁶ = 0,077 MPa. Cette méthode est dissipative : l\'énergie correspondante est perdue en chaleur dans la vanne.'
      },
      {
        n: '6',
        enonce: 'Une installation présente deux points de réseau possibles : réseau A (Hg = 20 m, R = 0,01) et réseau B (Hg = 5 m, R = 0,04). La pompe a H = 50 - 0,02Q². Calculer les deux points de fonctionnement et indiquer lequel est le plus chargé en débit.',
        solution: 'Réseau A : 50 - 0,02Q² = 20 + 0,01Q² → 30 = 0,03Q² → Q² = 1000 → Q_A = 31,6 m³/h. Réseau B : 50 - 0,02Q² = 5 + 0,04Q² → 45 = 0,06Q² → Q² = 750 → Q_B = 27,4 m³/h. Le réseau A produit le débit le plus élevé (31,6 m³/h) malgré une hauteur statique plus grande, car ses pertes de charge (R = 0,01) sont plus faibles. Le réseau B, avec des pertes élevées (R = 0,04), limite le débit davantage.'
      },
      {
        n: '7',
        enonce: 'Expliquer pourquoi il faut vérifier que la pompe ne fonctionne pas à débit nul (vanne fermée) pendant une durée prolongée.',
        solution: 'À débit nul, toute la puissance absorbée par la pompe se transforme en chaleur dans le liquide (pas d\'échange thermique avec l\'extérieur). La température du fluide augmente rapidement : sur une pompe centrifuge de 10 kW avec un volume de liquide en circuit de 20 L, la montée en température est ΔT/Δt = P/(ρCpV) = 10 000/(1 000×4 186×0,02) ≈ 0,12 K/s, soit 7 K/min. En quelques minutes la pompe peut surchauffer, détériorer les garnitures mécaniques et provoquer la vaporisation du liquide. Les constructeurs limitent le fonctionnement à vanne fermée à quelques secondes ou quelques minutes maximum.'
      },
      {
        n: '8',
        enonce: 'Pour lire graphiquement un point de fonctionnement, un technicien dispose de la courbe constructeur H(Q) sur papier millimétré. Il relève H_pompe = 38 m pour Q = 25 m³/h et la courbe de réseau passe par les points (0 m ; 28 m) et (40 m³/h ; 36 m). Vérifier analytiquement si le point (25 m³/h ; 38 m) est bien le point de fonctionnement.',
        solution: 'Courbe de réseau : Hres = Hg + R×Q². On a (0, 28) → Hg = 28 m. On a (40, 36) → 36 = 28 + R×1600 → R = 8/1600 = 0,005. À Q = 25 : Hres = 28 + 0,005×625 = 28 + 3,125 = 31,1 m ≠ 38 m. Le point (25 m³/h ; 38 m) n\'est PAS le point de fonctionnement car H_réseau = 31,1 m ≠ H_pompe = 38 m. Le point de fonctionnement réel est : 50 - 0,02Q² = 28 + 0,005Q² (si on conserve la courbe pompe H = 50-0,02Q²) → Q ≈ 28,3 m³/h. Le technicien a fait une erreur de lecture graphique.'
      }
    ]
  },

  'GEMEAU-065': {
    id: 'GEMEAU-065',
    titre: 'Hauteur manométrique totale, puissance et consommation',
    fiche: {
      intro: 'La maîtrise du calcul de la HMT et de la puissance absorbée est fondamentale pour dimensionner correctement une installation de pompage et en évaluer le coût énergétique. Ces calculs reposent sur l\'application du théorème de Bernoulli généralisé entre la surface d\'aspiration et la surface de refoulement.',
      sections: [
        {
          titre: '1. Calcul de la hauteur manométrique totale (HMT)',
          texte: 'La HMT représente l\'énergie spécifique (en J/N = m) que doit fournir la pompe entre sa bride d\'aspiration et sa bride de refoulement. Le théorème de Bernoulli généralisé entre la surface libre d\'aspiration (1) et la surface libre de refoulement (2) donne :\n\nHMT = (z2 - z1) + (P2 - P1)/(ρg) + (V2² - V1²)/(2g) + Jt\n\nOù z2 - z1 = hauteur géométrique (hauteur statique) Hg [m] ; (P2 - P1)/(ρg) = différence de pression en entrée/sortie convertie en m (souvent nul si les deux surfaces sont à l\'atmosphère) ; (V2² - V1²)/(2g) = terme cinétique (souvent négligeable si les bâches sont grandes) ; Jt = somme de toutes les pertes de charge du circuit [m].\n\nEn pratique, pour un refoulement à l\'atmosphère depuis une bâche à l\'atmosphère : HMT ≈ Hg + J_asp + J_ref, où J_asp sont les pertes de charge du côté aspiration et J_ref celles du côté refoulement. Les pertes de charge comprennent les pertes régulières (Darcy-Weisbach : J = λ×L/D×V²/2g) et les pertes singulières (coudes, vannes, réductions : Ks×V²/2g). La vitesse dans les conduites est typiquement 0,5-1,5 m/s en aspiration et 1-2 m/s en refoulement.',
          sous_sections: []
        },
        {
          titre: '2. Puissance hydraulique et puissance absorbée',
          texte: 'La puissance hydraulique Ph est la puissance utile effectivement transférée au fluide :\n\nPh = ρ × g × Q × H   [W]\n\nAvec ρ en kg/m³, g = 9,81 m/s², Q en m³/s, H en m. Pour un calcul pratique avec Q en m³/h et H en m : Ph (kW) = ρ × g × Q × H / 3 600 000 = Q(m³/h) × H(m) / 367 pour l\'eau (ρ = 1 000 kg/m³).\n\nLa puissance absorbée Pa est la puissance électrique consommée par le moteur :\n\nPa = Ph / (ηp × ηm)   [W]\n\nOù ηp est le rendement de la pompe (rapport entre Ph et la puissance mécanique sur l\'arbre) et ηm le rendement du moteur électrique (rapport entre puissance mécanique et puissance électrique). Un moteur triphasé moderne (classe IE3) a un rendement ηm = 90-95 %. Le rendement global de l\'installation ηglobal = ηp × ηm est souvent de l\'ordre de 55-75 % pour une installation bien conçue.',
          sous_sections: []
        },
        {
          titre: '3. Énergie annuelle et coût d\'exploitation',
          texte: 'Une fois la puissance absorbée déterminée, l\'énergie consommée annuellement est :\n\nE = Pa × t_ann   [kWh]\n\nOù t_ann est le nombre d\'heures de fonctionnement annuel. Pour une installation de refoulement AEP fonctionnant 12 h/j, t_ann ≈ 4 380 h/an. Le coût électrique annuel est C = E × c_élec, où c_élec est le tarif en €/kWh (actuellement 0,10-0,18 €/kWh selon contrat et puissance souscrite).\n\nPour une installation importante, il est judicieux de distinguer le coût de la puissance souscrite (abonnement de puissance, en €/kW/an) et le coût de l\'énergie consommée (en €/kWh). Les contrats Haute Tension (HTA) permettent d\'économiser sur le tarif kWh mais nécessitent de déclarer une puissance souscrite. Le facteur de puissance cos φ doit être maintenu > 0,9 pour éviter les pénalités de réactif.',
          sous_sections: [
            {
              titre: '3.1 Analyse du coût global (TCO)',
              texte: 'Le coût total de possession sur 20 ans d\'une installation de pompage comprend : (1) coût d\'investissement (pompe, moteur, variateur, tuyauterie, génie civil) ; (2) coût d\'énergie électrique (dominant, souvent 60-80 % du TCO) ; (3) coût de maintenance (révisions, pièces, préventif) ; (4) coût de démantèlement. Les études TCO montrent que pour une pompe de 10 kW tournant 4 000 h/an pendant 20 ans, le coût énergétique représente 5 à 8 fois le prix d\'achat de la pompe. Investir dans le meilleur rendement est toujours rentable.'
            }
          ]
        },
        {
          titre: '4. Mesure de la HMT en exploitation',
          texte: 'Sur une installation existante, la HMT réelle peut être mesurée directement par manométrie différentielle entre bride d\'aspiration et bride de refoulement. En pratique, on lit les pressions P_asp (manomètre en aspiration) et P_ref (manomètre en refoulement) et on calcule :\n\nHMT_mesurée = (P_ref - P_asp)/(ρg) + (z_ref - z_asp) + (V_ref² - V_asp²)/(2g)\n\nLes manomètres doivent être placés strictement aux brides (ou le plus près possible) et correctement étalonés. Une différence entre la HMT mesurée et la HMT à débit nominal des courbes constructeur indique soit un colmatage, soit une usure de la roue, soit un problème de cavitation.',
          sous_sections: []
        }
      ],
      points: [
        'HMT = Hg + (P2-P1)/(ρg) + (V2²-V1²)/(2g) + somme des pertes de charge — s\'applique en Bernoulli généralisé',
        'En pratique pour 2 bâches à l\'atmosphère : HMT ≈ Hg + J_aspiration + J_refoulement',
        'Vitesse recommandée : 0,5-1,5 m/s en aspiration ; 1-2 m/s en refoulement pour limiter les pertes de charge',
        'Ph (kW) = Q(m³/h) × H(m) / 367 pour l\'eau à 20°C (densité 1 000 kg/m³)',
        'Pa = Ph / (ηp × ηm) — toujours diviser par les deux rendements en cascade',
        'Le rendement global typique est 55-75 % ; un rendement < 50 % indique un mauvais dimensionnement ou une usure',
        'E (kWh) = Pa (kW) × t (h) ; C (€) = E × c_élec (€/kWh)',
        'Le coût énergétique représente 60-80 % du TCO sur 20 ans : c\'est le poste à optimiser en priorité',
        'Le facteur de puissance cos φ > 0,9 est requis pour éviter les pénalités de réactif sur les gros contrats',
        'La HMT mesurée en exploitation par manométrie différentielle permet de détecter une dégradation de la pompe'
      ],
      formules: [
        'HMT générale (Bernoulli généralisé) : HMT = (z2-z1) + (P2-P1)/(ρg) + (V2²-V1²)/(2g) + Jt → [m]',
        'Puissance hydraulique : Ph = ρ × g × Q × H = Q[m³/h] × H[m] / 367 → [kW] pour eau 20°C',
        'Puissance absorbée : Pa = Ph / (ηp × ηm) → [kW] ; ηp = rend. pompe, ηm = rend. moteur',
        'Rendement global : ηglobal = ηp × ηm = Ph / Pa → [-]',
        'Énergie annuelle : E = Pa × t_ann → [kWh] ; t_ann en heures',
        'Coût annuel énergie : C = Pa × t_ann × c_élec → [€] ; c_élec en €/kWh'
      ],
      retenir: 'Bernoulli généralisé · Hauteur statique · Pertes de charge · Ph = ρgQH · Pa = Ph/η · Rendement global · TCO · Énergie annuelle · Cos φ · Manométrie différentielle'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Calculer la HMT d\'une station de pompage AEP : bâche d\'aspiration à z1 = 105 m NGF, réservoir de refoulement à z2 = 148 m NGF, pression atmosphérique dans les deux bâches. Pertes de charge aspiration : 1,2 m. Pertes de charge refoulement : 6,8 m. Termes cinétiques négligeables.',
        solution: 'HMT = (z2 - z1) + Jasp + Jref = (148 - 105) + 1,2 + 6,8 = 43 + 8 = 51 m. La pompe devra fournir une hauteur manométrique totale de 51 m.'
      },
      {
        n: '2',
        enonce: 'La station précédente pompe Q = 60 m³/h. Calculer la puissance hydraulique Ph, puis la puissance absorbée Pa si ηp = 70 % et ηm = 93 %.',
        solution: 'Ph = Q×H/367 = 60×51/367 = 8,34 kW. ηglobal = 0,70×0,93 = 0,651. Pa = Ph/ηglobal = 8,34/0,651 = 12,8 kW. Il faudra un moteur de 15 kW (puissance normalisée au-dessus de 12,8 kW avec marge).'
      },
      {
        n: '3',
        enonce: 'La station fonctionne 10 h/j, 350 j/an. Calculer l\'énergie consommée annuellement et le coût si c_élec = 0,13 €/kWh.',
        solution: 'Heures annuelles : t = 10×350 = 3 500 h. Énergie : E = 12,8×3 500 = 44 800 kWh. Coût : C = 44 800×0,13 = 5 824 €/an. En améliorant le rendement moteur à IE3 (ηm = 96 %), Pa = 8,34/(0,70×0,96) = 12,4 kW, E = 43 400 kWh, économie = (44 800-43 400)×0,13 = 182 €/an.'
      },
      {
        n: '4',
        enonce: 'Un technicien mesure P_asp = -0,25 bar (dépression) et P_ref = +3,8 bar sur les brides d\'une pompe. Les brides sont au même niveau. Débit mesuré : Q = 55 m³/h. La vitesse dans les conduites d\'aspiration et de refoulement est identique (même diamètre). Calculer la HMT mesurée.',
        solution: 'HMT = (P_ref - P_asp)/(ρg) = (3,8 - (-0,25)) × 10⁵ / (1 000×9,81) = 4,05×10⁵/9 810 = 41,3 m. Si la pompe était neuve avec un rendement η = 68 % : Ph = 55×41,3/367 = 6,19 kW. Pa = 6,19/0,68 = 9,1 kW. Comparer avec la mesure de puissance électrique pour diagnostiquer l\'état de la pompe.'
      },
      {
        n: '5',
        enonce: 'Calculer la vitesse dans une conduite de refoulement DN100 (diamètre intérieur 107 mm) pour Q = 60 m³/h. Vérifier si elle est dans la plage recommandée.',
        solution: 'Section : S = π×D²/4 = π×0,107²/4 = 8,99×10⁻³ m². Q = 60/3600 = 0,01667 m³/s. V = Q/S = 0,01667/8,99×10⁻³ = 1,85 m/s. La vitesse de 1,85 m/s est légèrement au-dessus de la limite recommandée de 1,5 m/s en refoulement. Il conviendrait de passer en DN125 (diam. intérieur 131 mm) → V = 60/3600 / (π×0,131²/4) = 0,01667/0,01347 = 1,24 m/s, dans la plage.'
      },
      {
        n: '6',
        enonce: 'Un exploitant envisage de remplacer une pompe actuelle (η = 58 %) par une pompe à haut rendement (η = 72 %). Q = 80 m³/h, H = 35 m, moteur η_m = 92 %, 5 500 h/an, énergie 0,11 €/kWh. Calculer la période de retour si la nouvelle pompe coûte 8 200 €.',
        solution: 'Ph = 80×35/367 = 7,63 kW. Pa_ancien = 7,63/(0,58×0,92) = 14,28 kW ; E_ancien = 14,28×5 500×0,11 = 8 639 €/an. Pa_nouveau = 7,63/(0,72×0,92) = 11,51 kW ; E_nouveau = 11,51×5 500×0,11 = 6 963 €/an. Économie annuelle = 8 639 - 6 963 = 1 676 €/an. ROI = 8 200/1 676 = 4,9 ans. Très rentable sur la durée de vie de la pompe (15-20 ans).'
      },
      {
        n: '7',
        enonce: 'Une installation de pompage desservant un réseau d\'irrigation fonctionne à différents débits selon la saison : Q1 = 120 m³/h (HMT1 = 22 m) 300 h/an et Q2 = 60 m³/h (HMT2 = 18 m) 500 h/an. η = 65 %, ηm = 90 %. Calculer le coût annuel total d\'énergie à 0,12 €/kWh.',
        solution: 'Période 1 : Ph1 = 120×22/367 = 7,19 kW ; Pa1 = 7,19/(0,65×0,90) = 12,29 kW ; E1 = 12,29×300 = 3 687 kWh. Période 2 : Ph2 = 60×18/367 = 2,94 kW ; Pa2 = 2,94/(0,65×0,90) = 5,03 kW ; E2 = 5,03×500 = 2 515 kWh. Énergie totale = 3 687 + 2 515 = 6 202 kWh. Coût = 6 202×0,12 = 744 €/an.'
      },
      {
        n: '8',
        enonce: 'Expliquer l\'intérêt d\'utiliser un variateur de fréquence (VFD) pour une pompe de refoulement AEP dont le débit varie de 20 à 80 m³/h selon la demande, par rapport à une vanne de régulation.',
        solution: 'Sans variateur (régulation par vanne) : la puissance absorbée varie peu ; quand la vanne ferme pour réduire Q, les pertes de charge augmentent mais la pompe consomme presque autant (car Pa ∝ peu à Q pour des pertes régulières). La différence d\'énergie par rapport au besoin utile est dissipée dans la vanne. Avec VFD : quand Q diminue de moitié, la vitesse n diminue de moitié, la puissance Pa diminue de (1/2)³ = 1/8 soit 87,5 % d\'économie théorique (loi des similitudes P ∝ n³). En pratique, l\'économie est de 40-60 % sur le profil de charge variable. Pour une pompe de 12 kW tournant 5 000 h/an avec 50 % du temps à mi-débit, économie ≈ 12×0,875×0,5×5 000×0,12 ≈ 3 150 €/an.'
      }
    ]
  },

  'GEMEAU-066': {
    id: 'GEMEAU-066',
    titre: 'Aspiration, NPSH et cavitation',
    fiche: {
      intro: 'La cavitation est l\'ennemi des pompes : elle détruit les roues et les corps de pompe en quelques semaines si elle n\'est pas détectée à temps. Comprendre la notion de NPSH (Net Positive Suction Head) et savoir calculer la hauteur d\'aspiration maximale sont des compétences essentielles pour concevoir et exploiter une station de pompage sans risque.',
      sections: [
        {
          titre: '1. Le phénomène de cavitation',
          texte: 'La cavitation se produit quand la pression locale dans le fluide chute en dessous de sa pression de vapeur saturante Pv à la température considérée. Des bulles de vapeur se forment alors dans les zones de basse pression (généralement à l\'entrée de la roue, côté aspiration). Lorsque ces bulles atteignent des zones de pression plus élevée (au sein de la roue ou dans la volute), elles implosent violemment. Ces implosions génèrent des ondes de choc locales avec des pics de pression pouvant dépasser 10 000 bar pendant quelques microsecondes, arrachant la matière sur les parois métalliques : c\'est l\'érosion de cavitation.\n\nLes symptômes de la cavitation en exploitation sont caractéristiques : bruit de craquements ou de gravier dans la pompe (le son de "grains de sable"), augmentation des vibrations, chute de la HMT et du débit, usure accélérée visible sur la roue (surface grêlée, picots d\'érosion). La cavitation est aggravée par l\'élévation de température (Pv augmente), par l\'altitude (pression atmosphérique plus faible) et par les pertes de charge importantes en aspiration.',
          sous_sections: []
        },
        {
          titre: '2. NPSH requis et NPSH disponible',
          texte: 'Le NPSH (Net Positive Suction Head, ou Charge Nette d\'Aspiration Disponible en français) est la marge de pression disponible au-dessus de la pression de vapeur, exprimée en mètres de colonne d\'eau.\n\nLe NPSHr (requis) est la valeur minimale de pression (en m) à l\'entrée de la pompe pour éviter la cavitation — il est défini par le constructeur et fourni sur la courbe NPSH(Q). Il augmente avec le débit Q. La valeur de NPSHr est obtenue par convention à 3 % de chute de H (norme ISO 9906).\n\nLe NPSHd (disponible) est la pression effectivement disponible à l\'entrée de la pompe, calculée depuis les conditions d\'aspiration :\n\nNPSHd = Patm/(ρg) + Va²/(2g) - z_asp - Jasp - Pv/(ρg)\n\nOù Patm/(ρg) = hauteur de pression atmosphérique (≈ 10,33 m à 20°C au niveau de la mer), Va²/(2g) = terme cinétique (souvent petit), z_asp = hauteur géométrique d\'aspiration (positive si la pompe est au-dessus de la bâche, négative si elle est en dessous), Jasp = pertes de charge en aspiration, Pv/(ρg) = hauteur de pression de vapeur de l\'eau (≈ 0,24 m à 20°C, 2,4 m à 60°C, 10,3 m à 100°C).\n\nLa règle de sécurité est : NPSHd ≥ NPSHr + 0,5 m (marge de sécurité). En pratique, une marge de 1 m est souvent recommandée.',
          sous_sections: []
        },
        {
          titre: '3. Hauteur d\'aspiration maximale',
          texte: 'En posant NPSHd = NPSHr + 0,5 et en isolant z_asp, on obtient la hauteur d\'aspiration géométrique maximale :\n\nHasp_max = Patm/(ρg) - Pv/(ρg) - Jasp - NPSHr - 0,5\n\nÀ 20°C au niveau de la mer : Hasp_max ≈ 10,33 - 0,24 - Jasp - NPSHr - 0,5 = 9,59 - Jasp - NPSHr. Pour une pompe avec NPSHr = 3 m et des pertes d\'aspiration Jasp = 1 m : Hasp_max ≈ 9,59 - 1 - 3 - 0,5 ≈ 5,1 m. En pratique, les hauteurs d\'aspiration réelles sont limitées à 3-6 m selon les conditions.\n\nLes facteurs qui aggravent la situation : altitude élevée (Patm diminue), eau chaude (Pv augmente), conduite d\'aspiration longue et de petit diamètre (Jasp élevé), débits importants (NPSHr élevé), régimes transitoires (coup de bélier). Pour les installations sensibles, la pompe est placée le plus bas possible (en charge plutôt qu\'en aspiration), ce qui transforme z_asp en valeur négative et augmente NPSHd.',
          sous_sections: []
        },
        {
          titre: '4. Mesures préventives et remèdes',
          texte: 'La prévention de la cavitation commence dès la conception : (1) minimiser les pertes de charge en aspiration — conduite courte, grand diamètre, coudes à grand rayon, éviter les réductions brusques, vanne aspiration toujours complètement ouverte ; (2) placer la pompe en charge quand c\'est possible (pompe sous le niveau de la bâche) ; (3) utiliser un clapet de pied (anti-retour en pied de conduite) uniquement pour le maintien d\'amorçage, jamais pour réguler le débit.\n\nEn exploitation, si des signes de cavitation apparaissent : vérifier que la vanne d\'aspiration est bien ouverte, contrôler le niveau de la bâche (baisse de niveau aggrave z_asp), vérifier l\'absence d\'air dans la conduite d\'aspiration (entrée d\'air par des raccords défaillants), contrôler la température du fluide. Si la cavitation persiste, il peut être nécessaire de changer la pompe pour un modèle de NPSH plus faible ou d\'abaisser physiquement la pompe.',
          sous_sections: []
        }
      ],
      points: [
        'La cavitation se produit quand P_locale < Pv(T) : les bulles de vapeur implosent et érodent la roue',
        'Symptômes : bruit de graviers, vibrations, chute de HMT et débit, usure en surface grêlée',
        'NPSHd = Patm/(ρg) + Va²/2g - z_asp - J_asp - Pv/(ρg) — dépend des conditions d\'installation',
        'NPSHr est fourni par le constructeur sur la courbe NPSH(Q) — il augmente avec le débit',
        'Règle de sécurité : NPSHd ≥ NPSHr + 0,5 m minimum (1 m recommandé en pratique)',
        'Hauteur d\'aspiration max ≈ 10,33 - Pv/ρg - Jasp - NPSHr - 0,5 (valeur ≤ 5-6 m en pratique)',
        'Altitude : -1 m de NPSHd tous les 100 m d\'altitude (environ)',
        'La vanne d\'aspiration doit être totalement ouverte en permanence — jamais utilisée pour réguler',
        'Clapet de pied : maintient l\'amorçage, à placer en bas de conduite d\'aspiration',
        'Pompe en charge (sous la bâche) : supprime le problème d\'aspiration — solution idéale'
      ],
      formules: [
        'NPSH disponible : NPSHd = Patm/(ρg) - Pv/(ρg) - z_asp - Jasp → [m] (simplification pour Va²/2g négligeable)',
        'Règle anti-cavitation : NPSHd ≥ NPSHr + 0,5 → [m]',
        'Hauteur aspiration max : Hasp_max = Patm/(ρg) - Pv/(ρg) - Jasp - NPSHr - 0,5 → [m]',
        'Pression atm en hauteur eau : Patm/(ρg) ≈ 10,33 m (niveau mer, 20°C) ; diminue de ~1 m/100 m d\'altitude',
        'Pression vapeur eau : Pv(20°C) = 2 340 Pa → 0,24 m ; Pv(60°C) = 19 920 Pa → 2,0 m ; Pv(100°C) = 101 325 Pa → 10,33 m'
      ],
      retenir: 'Cavitation · Pression de vapeur · NPSHd · NPSHr · Marge 0,5 m · Hauteur aspiration max · Vanne aspiration ouverte · En charge · Altitude · Érosion'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une pompe doit aspirer de l\'eau à 20°C depuis une bâche à l\'air libre. z_asp = +4 m (pompe au-dessus de la bâche). Pertes de charge en aspiration : J_asp = 1,5 m. NPSHr de la pompe à Q nominal : 3,5 m. Vérifier si la pompe peut fonctionner sans cavitation (Patm = 10,33 m, Pv(20°C) = 0,24 m).',
        solution: 'NPSHd = 10,33 - 0,24 - 4 - 1,5 = 4,59 m. Condition : NPSHd ≥ NPSHr + 0,5 = 3,5 + 0,5 = 4,0 m. 4,59 ≥ 4,0 : condition vérifiée, mais avec une marge faible (0,59 m). La pompe peut fonctionner, mais toute augmentation de J_asp (colmatage du filtre, vanne partiellement fermée) risque de provoquer de la cavitation. Recommandation : nettoyer régulièrement le filtre d\'aspiration et s\'assurer que la vanne reste totalement ouverte.'
      },
      {
        n: '2',
        enonce: 'La même installation est déplacée en altitude à 800 m (Patm = 9,2 m) et l\'eau est à 40°C (Pv = 7 400 Pa = 0,755 m). Recalculer NPSHd. La pompe peut-elle fonctionner ?',
        solution: 'NPSHd = 9,2 - 0,755 - 4 - 1,5 = 2,945 m. Condition requise : NPSHr + 0,5 = 4,0 m. 2,945 < 4,0 : NON. La pompe cavite. Il faut abaisser la pompe de au moins 4,0 - 2,945 = 1,055 m (z_asp ≤ 2,95 m) OU réduire les pertes d\'aspiration OU choisir une pompe avec NPSHr plus faible.'
      },
      {
        n: '3',
        enonce: 'Pour l\'installation à 800 m (eau à 40°C), quelle est la hauteur d\'aspiration maximale autorisée si NPSHr = 3,5 m et Jasp = 1,0 m ?',
        solution: 'Hasp_max = Patm/(ρg) - Pv/(ρg) - Jasp - NPSHr - 0,5 = 9,2 - 0,755 - 1,0 - 3,5 - 0,5 = 3,445 m. La pompe peut être placée au maximum 3,45 m au-dessus de la surface libre de la bâche dans ces conditions.'
      },
      {
        n: '4',
        enonce: 'Un technicien entend un bruit de cavitation sur une pompe submersible de forage. Débit actuel 15 m³/h, débit nominal 25 m³/h, NPSHr(25 m³/h) = 4 m, NPSHr(15 m³/h) = 1,5 m. Expliquer le paradoxe apparent et diagnostiquer le problème.',
        solution: 'Paradoxe : la pompe cavite à Q = 15 m³/h alors que NPSHr(15 m³/h) = 1,5 m est plus faible. Explication : la cavitation n\'est pas due à un NPSHr élevé mais à un NPSHd très faible. Cause probable : (1) niveau de l\'eau dans le forage très bas (pompage excessif, nappe rabattue) — z_asp a fortement augmenté ; (2) filtre colmaté en tête de pompe → Jasp très élevé ; (3) chute d\'air dans le forage. Diagnostic : mesurer le niveau dynamique de la nappe pendant le pompage. Si le niveau est descendu de 10 m supplémentaires par rapport au niveau statique, NPSHd a chuté de 10 m, expliquant la cavitation.'
      },
      {
        n: '5',
        enonce: 'Calculer la réduction de NPSHd pour une installation passant du niveau de la mer à une altitude de 2 500 m. Données : gradient de pression atmosphérique = 1,2 mbar/m.',
        solution: 'ΔPatm = 1,2 mbar/m × 2 500 m = 3 000 mbar = 3 bar = 300 000 Pa. Réduction de NPSHd = ΔPatm/(ρg) = 300 000/(1 000×9,81) = 30,6 m. Cette réduction massive montre que les installations en altitude nécessitent impérativement une pompe en charge (pompe sous la bâche) ou un NPSHr très faible. À 2 500 m, Patm ≈ 10,33 - 30,6/9,81 × 9,81 ≈ 7,3 m seulement, ce qui limite sévèrement la hauteur d\'aspiration.'
      },
      {
        n: '6',
        enonce: 'La conduite d\'aspiration d\'une pompe (DN80, L = 8 m, λ = 0,02) a un coude à 90° (K = 0,5) et un filtre (K = 3). Q = 50 m³/h. Calculer Jasp.',
        solution: 'Section DN80 : diamètre intérieur 82 mm ; S = π×0,082²/4 = 5,28×10⁻³ m². V = (50/3600)/5,28×10⁻³ = 2,63 m/s. Pertes régulières : J_reg = λ×L/D×V²/(2g) = 0,02×8/0,082×2,63²/(2×9,81) = 0,02×97,6×0,352 = 0,687 m. Pertes singulières : J_sing = (Kcoude + Kfiltre)×V²/(2g) = (0,5+3)×0,352 = 1,232 m. Jasp = 0,687 + 1,232 = 1,92 m. Remarque : la vitesse de 2,63 m/s est élevée pour une aspiration ; passer en DN100 réduirait Jasp à < 0,5 m.'
      },
      {
        n: '7',
        enonce: 'Pourquoi un clapet de pied mal dimensionné peut-il provoquer de la cavitation ? Proposer une solution alternative pour maintenir l\'amorçage.',
        solution: 'Un clapet de pied crée une perte de charge à l\'aspiration (K_clapet ≈ 2-5 selon l\'état et le modèle). Pour V = 2 m/s, J_clapet = 5×2²/(2×9,81) = 1,02 m. Cette perte réduit d\'autant le NPSHd, pouvant entraîner la cavitation. Si le clapet est partiellement obstrué ou colmaté, K peut atteindre 10-20 et la cavitation devient quasi certaine. Solutions alternatives : (1) pot d\'amorçage en surface avec vanne et raccord d\'eau (pour les pompages ponctuels) ; (2) pompe auto-amorçante sans clapet ; (3) réservoir d\'amorçage en hauteur suffisante ; (4) pompe immergée (supprime le problème d\'amorçage). Le clapet de pied reste utile pour les installations démarrées plusieurs fois par jour, mais doit être à larges pertes de charge minimales.'
      },
      {
        n: '8',
        enonce: 'Une station de pompage agricole a ses pompes installées à + 5 m au-dessus de la bâche d\'aspiration (eau à 25°C). En période de pointe (juillet), le niveau de la bâche descend de 1,5 m supplémentaires. Jasp augmente de 0,8 m (conduite plus longue effective). Le NPSHr à débit de pointe est 4,2 m. Évaluer l\'impact sur la cavitation.',
        solution: 'Situation initiale : NPSHd0 = 10,33 - Pv(25°C)/(ρg) - 5 - Jasp0. Pv(25°C) = 3 169 Pa → 0,323 m. NPSHd0 = 10,33 - 0,323 - 5 - Jasp0. Si Jasp0 = 1 m : NPSHd0 = 4,007 m vs NPSHr + 0,5 = 4,7 m → DÉJÀ en cavitation ! En juillet : z_asp = 5 + 1,5 = 6,5 m ; Jasp = 1 + 0,8 = 1,8 m. NPSHd_juillet = 10,33 - 0,323 - 6,5 - 1,8 = 1,707 m << 4,7 m. La situation est critique. Mesure d\'urgence : alimenter la bâche pour maintenir son niveau ; à long terme, mettre les pompes en dessous du niveau de la bâche.'
      }
    ]
  },

  'GEMEAU-067': {
    id: 'GEMEAU-067',
    titre: 'Variation de vitesse et association de pompes',
    fiche: {
      intro: 'La gestion des débits variables dans les réseaux d\'eau — que ce soit pour adapter la production AEP aux heures de pointe ou maintenir une pression constante en assainissement — passe aujourd\'hui quasi systématiquement par les variateurs de fréquence et les associations de pompes. Ces deux outils permettent d\'économiser l\'énergie tout en assurant la qualité de service.',
      sections: [
        {
          titre: '1. Les lois de similitude pour les turbomachines',
          texte: 'Pour une même pompe centrifuge, quand on change la vitesse de rotation de n1 à n2, les paramètres de performance se déplacent selon les lois de similitude (ou lois des ventilateurs appliquées aux pompes) :\n\nQ2/Q1 = n2/n1   (débit proportionnel à la vitesse)\nH2/H1 = (n2/n1)²   (hauteur proportionnelle au carré de la vitesse)\nP2/P1 = (n2/n1)³   (puissance proportionnelle au cube de la vitesse)\n\nCes relations signifient que si on réduit la vitesse de moitié (n2 = 0,5 n1), le débit est divisé par 2, la hauteur par 4 et la puissance par 8. L\'économie d\'énergie est donc considérable pour les faibles débits. En pratique, la loi cubique n\'est qu\'approximative car le rendement de la pompe change avec la vitesse, mais elle donne un ordre de grandeur très utile.\n\nLa règle des isodémandes permet de trouver le nouveau point de fonctionnement à vitesse réduite : le lieu des points de fonctionnement au BEP pour différentes vitesses est une parabole passant par l\'origine (H = K×Q²). On cherche l\'intersection de cette parabole avec la courbe de réseau pour en déduire la vitesse et la puissance à chaque débit de consigne.',
          sous_sections: []
        },
        {
          titre: '2. Variateurs de fréquence (VFD)',
          texte: 'Le variateur de fréquence (Variable Frequency Drive, ou onduleur) convertit le courant alternatif à fréquence fixe (50 Hz en France) en courant alternatif à fréquence variable (0-50 Hz typiquement, parfois jusqu\'à 60 Hz). En modifiant la fréquence d\'alimentation du moteur asynchrone, on change directement sa vitesse de rotation (n = 60f/p, avec f fréquence et p nombre de paires de pôles). Un moteur à 2 paires de pôles alimenté à 50 Hz tourne à 1 500 tr/min théoriques (synchronisme) ; à 40 Hz il tourne à 1 200 tr/min.\n\nL\'efficacité des VFD modernes est de 96-98 %. Ils intègrent des protections contre les surcharges, les courts-circuits, les défauts thermiques du moteur. En eau potable, ils permettent de maintenir une pression constante dans le réseau (régulation PID sur un capteur de pression) quel que soit le débit tiré par les abonnés. En assainissement, ils permettent d\'adapter le débit aux apports variables sans choc hydraulique.',
          sous_sections: []
        },
        {
          titre: '3. Associations de pompes en série',
          texte: 'Deux pompes montées en série (le refoulement de la première alimente l\'aspiration de la seconde) fournissent la somme de leurs hauteurs manométriques à débit identique :\n\nH_série(Q) = H_pompe1(Q) + H_pompe2(Q)\n\nLe débit qui traverse les deux pompes est le même. On utilise cette configuration quand une seule pompe ne suffit pas à fournir la pression requise (ex : pompe multicellulaire, ou deux pompes identiques en série pour doubler la pression). Le point de fonctionnement se calcule en additionnant les courbes H(Q) des deux pompes pour obtenir la courbe équivalente, puis en cherchant son intersection avec la courbe de réseau.\n\nAttention : si une des deux pompes en série est arrêtée, la pression disponible chute de moitié. Il faut prévoir un bypass (contournement) pour continuer à fonctionner avec une seule pompe en cas de panne.',
          sous_sections: []
        },
        {
          titre: '4. Associations de pompes en parallèle',
          texte: 'Deux pompes montées en parallèle (aspirent et refoulent sur le même réseau) fournissent la somme de leurs débits à hauteur identique :\n\nQ_parallèle(H) = Q_pompe1(H) + Q_pompe2(H)\n\nC\'est la configuration la plus courante dans les stations de pompage AEP : une pompe principale tourne en permanence, une pompe de renfort (booster) démarre en heures de pointe pour additionner les débits. Les deux pompes doivent avoir des courbes H(Q) compatibles (même plage de H) pour que leur association soit stable.\n\nSi les deux pompes ont des courbes différentes, la moins puissante peut se trouver à un débit trop faible par rapport à son BEP et fonctionner de manière instable. Dans tous les cas, un clapet anti-retour sur chaque pompe est indispensable pour éviter le retour d\'eau dans la pompe arrêtée. Le point de fonctionnement avec les deux pompes se calcule en additionnant les courbes Q(H) (abscisses) pour construire la courbe équivalente.',
          sous_sections: [
            {
              titre: '4.1 Gestion séquentielle des pompes',
              texte: 'Dans les stations modernes à 2 ou 3 pompes en parallèle, l\'API gère le démarrage/arrêt séquentiel selon le niveau d\'un réservoir tampon ou la pression de réseau. Une logique d\'alternance des pompes (lead-lag) garantit une usure uniforme de toutes les pompes. La pompe de tête (lead) est la première à démarrer ; si elle ne suffit pas, la pompe de renfort (lag) démarre. Cette gestion permet aussi de préserver une pompe de secours (stand-by) toujours disponible.'
            }
          ]
        }
      ],
      points: [
        'Loi de similitude : Q ∝ n, H ∝ n², P ∝ n³ — réduire la vitesse de 20 % réduit la puissance de 49 %',
        'VFD (variateur de fréquence) : modifie la fréquence pour changer la vitesse, rendement 96-98 %',
        'L\'économie d\'énergie avec VFD vs régulation par vanne est de 40-60 % typiquement en usage variable',
        'Association en série : somme des hauteurs à débit identique — pour augmenter la pression',
        'Association en parallèle : somme des débits à hauteur identique — pour augmenter le débit',
        'Clapet anti-retour indispensable sur chaque pompe en montage parallèle',
        'Pompe multicellulaire = pompes en série sur le même arbre : montée en pression progressive',
        'Gestion séquentielle (lead-lag) : alterne les pompes pour usure uniforme et garantit une pompe de secours',
        'Courbes incompatibles en parallèle : risque de fonctionnement instable de la pompe la moins puissante',
        'Bypass obligatoire sur montage série pour permettre le fonctionnement avec une seule pompe'
      ],
      formules: [
        'Loi de similitude débit : Q2 = Q1 × (n2/n1) → [m³/h]',
        'Loi de similitude hauteur : H2 = H1 × (n2/n1)² → [m]',
        'Loi de similitude puissance : P2 = P1 × (n2/n1)³ → [kW] (approximation, η supposé constant)',
        'Pompes en série : H_eq(Q) = H1(Q) + H2(Q) — additionner les ordonnées à débit constant',
        'Pompes en parallèle : Q_eq(H) = Q1(H) + Q2(H) — additionner les abscisses à hauteur constante',
        'Vitesse synchrone moteur : n = 60 × f / p → [tr/min] ; f = fréquence [Hz], p = paires de pôles'
      ],
      retenir: 'Lois de similitude · VFD · Économie d\'énergie · Série · Parallèle · Clapet anti-retour · Lead-lag · Multicellulaire · Régulation PID · Courbes compatibles'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une pompe centrifuge tourne à n1 = 1 450 tr/min et a son BEP à Q1 = 80 m³/h, H1 = 45 m, P1 = 15 kW. La vitesse est réduite à n2 = 1 100 tr/min par variateur. Calculer Q2, H2, P2.',
        solution: 'Rapport de vitesse : n2/n1 = 1 100/1 450 = 0,759. Q2 = 80×0,759 = 60,7 m³/h. H2 = 45×0,759² = 45×0,576 = 25,9 m. P2 = 15×0,759³ = 15×0,437 = 6,55 kW. En réduisant la vitesse de 24 %, la puissance est réduite de 56 %, ce qui illustre l\'économie considérable liée à la loi cubique.'
      },
      {
        n: '2',
        enonce: 'Pour la même pompe, calculer la puissance absorbée à vitesse réduite si le rendement global passe de 70 % à 65 % (légère dégradation à vitesse réduite). Comparer à la puissance par régulation par vanne pour obtenir le même débit (Q = 60,7 m³/h sur la courbe de réseau avec Hg = 20 m, R = 0,007).',
        solution: 'Puissance avec VFD : Ph = 60,7×25,9/367 = 4,29 kW ; Pa_VFD = 4,29/0,65 = 6,6 kW. Par régulation vanne (vitesse nominale) : Hres = 20 + 0,007×60,7² = 20 + 25,8 = 45,8 m ≈ H_pompe à ce débit. Ph = 60,7×45,8/367 = 7,57 kW ; Pa_vanne = 7,57/0,70 = 10,8 kW (mais la vanne dissipe H_pompe - H_réseau_sans_vanne). Économie VFD : 10,8 - 6,6 = 4,2 kW soit 39 % d\'économie.'
      },
      {
        n: '3',
        enonce: 'Deux pompes identiques (H = 50 - 0,02Q²) sont montées en parallèle sur un réseau (Hg = 30 m, R = 0,005). Calculer le point de fonctionnement avec les deux pompes, puis avec une seule.',
        solution: 'Courbe équivalente parallèle : pour une hauteur H donnée, Q_eq = 2Q_1pompe. La courbe pompe individuelle Q1 = √((50-H)/0,02). Q_eq = 2√((50-H)/0,02). Intersection avec réseau : H = 30 + 0,005×Q_eq². En substituant Q_eq = 2√((50-H)/0,02) : H = 30 + 0,005×4×(50-H)/0,02 = 30 + (50-H) → 2H = 80 → H = 40 m. Q_eq = 2√((50-40)/0,02) = 2√500 = 2×22,4 = 44,8 m³/h. Avec une seule pompe : H = 30 + 0,005Q² et 50-0,02Q² = 30+0,005Q² → Q = 28,3 m³/h, H = 34 m. Le débit en parallèle (44,8 m³/h) est supérieur à deux fois le débit d\'une pompe seule (2×28,3 = 56,6 m³/h) → l\'ajout d\'une deuxième pompe en parallèle n\'additionne pas les débits à cause de la hauteur de réseau qui augmente.'
      },
      {
        n: '4',
        enonce: 'Deux pompes sont montées en série (même courbe H = 50 - 0,02Q²). Calculer le point de fonctionnement sur le réseau (Hg = 80 m, R = 0,002).',
        solution: 'Courbe série : H_série = 2×(50 - 0,02Q²) = 100 - 0,04Q². Intersection avec réseau : 100 - 0,04Q² = 80 + 0,002Q² → 20 = 0,042Q² → Q² = 476 → Q = 21,8 m³/h. H = 80 + 0,002×476 = 80 + 0,95 ≈ 81 m. Chaque pompe fournit 81/2 = 40,5 m à Q = 21,8 m³/h. Vérification courbe individuelle : H = 50 - 0,02×21,8² = 50 - 9,5 = 40,5 m ✓.'
      },
      {
        n: '5',
        enonce: 'Une station de pompage AEP doit fournir Q = 120 m³/h à H = 50 m de 8h à 20h, et Q = 40 m³/h à H = 45 m le reste du temps. Proposer une configuration avec deux pompes et évaluer l\'économie d\'un VFD sur la pompe principale.',
        solution: 'Configuration : 1 pompe principale BEP à 80 m³/h/50 m + 1 pompe de renfort BEP à 40 m³/h/50 m en parallèle. De 8h à 20h (14h/j) : les deux pompes en parallèle fournissent 120 m³/h. De 20h à 8h (10h/j) : pompe principale seule à 40 m³/h. Avec VFD sur pompe principale : à 40 m³/h, si le BEP est 80 m³/h, n_réduite = n_nom×(40/80) = 0,5×n_nom. P ∝ (0,5)³ = 0,125 → économie de 87,5 % sur la puissance nocturne. Pour Pa_principale = 15 kW nominal : P_nuit = 15×0,125 = 1,88 kW vs 15 kW sans VFD. Économie annuelle = (15-1,88)×10×365×0,12 = 5 747 €/an.'
      },
      {
        n: '6',
        enonce: 'Quelle vitesse minimale peut-on imposer à un variateur de fréquence pour une pompe centrifuge, et pourquoi ne peut-on pas descendre en dessous ?',
        solution: 'La vitesse minimale typique est 30-40 % de la vitesse nominale (soit environ 15-20 Hz). En dessous : (1) la hauteur fournie devient très faible (H ∝ n² : à 30 % de n, H = 9 % de H_nominal) et peut ne plus vaincre la hauteur statique — la pompe ne débite plus mais consomme encore ; (2) le refroidissement du moteur par l\'eau pompée devient insuffisant (pompe immergée) ou le ventilateur auto-porté tourne trop lentement (pompe en surface) → risque de surchauffe ; (3) la courbe H(Q) à très faible vitesse peut devenir instable. Les constructeurs indiquent la vitesse minimale dans leurs préconisations.'
      },
      {
        n: '7',
        enonce: 'Une station de pompage dispose de 3 pompes en parallèle identiques (BEP : Q = 60 m³/h, H = 35 m, Pa = 10 kW). La demande varie : 60 m³/h la nuit, 120 m³/h le jour, 180 m³/h en pointe. Décrire la logique de démarrage séquentiel et calculer la puissance consommée pour chaque plage.',
        solution: 'Nuit (60 m³/h) : 1 pompe active, 2 en veille. Pa = 10 kW. Jour (120 m³/h) : 2 pompes actives. Pa = 2×10 = 20 kW. Pointe (180 m³/h) : 3 pompes actives. Pa = 3×10 = 30 kW. Logique lead-lag : pompe 1 toujours en premier (lead), pompe 2 démarre si P2 insuffisante, pompe 3 si P2+P3 insuffisantes. L\'alternance hebdomadaire des leads garantit une usure équilibrée. La pompe 3 peut aussi être désignée stand-by (maintenance possible sans interruption de service).'
      },
      {
        n: '8',
        enonce: 'Un exploitant constate qu\'après association en parallèle d\'une deuxième pompe (identique à la première), le débit total n\'augmente que de 30 % au lieu des 100 % attendus. Expliquer ce phénomène et proposer une solution.',
        solution: 'Le débit en parallèle n\'est pas le double du débit d\'une pompe seule quand la courbe de réseau est très pentue (forte valeur de R). En ajoutant une pompe, le débit total augmente, mais les pertes de charge (R×Q²) augmentent aussi rapidement, ce qui élève fortement la hauteur de réseau. La pompe doit fournir plus de hauteur pour un débit moins important qu\'espéré. Solution : (1) Augmenter le diamètre des conduites pour réduire R — la courbe de réseau devient moins pentue et le gain en parallèle est plus grand ; (2) choisir des pompes à courbe plate (forte hauteur à faible débit) pour mieux s\'adapter aux réseaux à forte hauteur statique ; (3) si le réseau ne peut pas être modifié, passer à une seule pompe de plus grande capacité.'
      }
    ]
  }

,

  'GEMEAU-068': {
    id: 'GEMEAU-068',
    titre: 'Canalisations, robinetterie et protections hydrauliques',
    fiche: {
      intro: 'L\'exploitant d\'une installation hydraulique doit maîtriser les matériaux de canalisation, les équipements de robinetterie et les dispositifs de protection contre les phénomènes transitoires (coup de bélier). Un choix inadapté de matériau ou l\'absence de protection peut conduire à des ruptures de canalisation ou à des dommages irréparables sur les équipements.',
      sections: [
        {
          titre: '1. Matériaux de canalisation',
          texte: 'Les canalisations utilisées dans les métiers de l\'eau se distinguent par leur matériau, leur domaine de pression et leur résistance à la corrosion. La fonte ductile (FD) est le matériau de référence pour les réseaux AEP enterrés sous voirie. Elle supporte des pressions nominales de PN10 à PN40, résiste aux chocs mécaniques grâce à sa ductilité (allongement à la rupture > 10 %), et ses emboîtements verrouillés (Tyton, VRS) facilitent le montage. Le revêtement intérieur en mortier de ciment ou époxy garantit la qualité sanitaire.\n\nL\'acier soudé est utilisé pour les grandes adductions (DN > 600 mm), les ouvrages de génie civil (station de pompage, STEU) et les refoulements haute pression. Il nécessite un traitement anticorrosion interne (époxy, ciment) et externe (polyéthylène extrudé, bitume). Le polyéthylène haute densité PE100 (selon EN 12201) est très utilisé en réseau AEP pour les petits et moyens diamètres (DN20 à DN450). Il se soude par électrofusion ou bout à bout, est résistant à la corrosion et aux UV, flexible (permet des tracés courbes sans raccords). Sa pression nominale va de PN6 à PN25 selon l\'épaisseur (SDR 17 à SDR 7,4). Le PVC-P (plastifié) est réservé aux applications d\'irrigation, moins résistant mécaniquement. Les tubes en PRV (plastique renforcé de fibres de verre) conviennent aux grands diamètres de collecteurs gravitaires (assainissement) et aux applications chimiquement agressives.',
          sous_sections: []
        },
        {
          titre: '2. Robinetterie d\'isolation et de régulation',
          texte: 'Le robinet-vanne (ou vanne à opercule) est l\'organe d\'isolation de référence sur les réseaux AEP. La vanne est soit totalement ouverte (pleine section) soit totalement fermée — elle ne doit jamais être utilisée pour réguler le débit en position intermédiaire car l\'opercule subit alors une usure rapide par érosion. Les vannes papillon (à disque) sont plus compactes, moins chères et se manœuvrent plus rapidement ; elles conviennent à l\'isolation sur les conduites de diamètre moyen à grand (DN100 à DN1200) et à la régulation modérée. Les vannes à boisseau sphérique offrent une étanchéité parfaite (zéro fuite en fermé) et une ouverture rapide (quart de tour) : idéales pour les petits diamètres et les robinets de comptage.\n\nLes clapets anti-retour empêchent le reflux dans la conduite quand la pompe s\'arrête. Le clapet à battant s\'ouvre sous la pression du fluide et se ferme par gravité ou ressort. Le clapet de pied est un clapet anti-retour placé en bas de la conduite d\'aspiration pour maintenir l\'amorçage. Les ventouses permettent d\'évacuer l\'air emprisonné dans les points hauts du réseau (ventouse triple fonction : évacuation air en remplissage, admission air en vidange, évacuation automatique de microbulles en régime établi).',
          sous_sections: []
        },
        {
          titre: '3. Coup de bélier et protections',
          texte: 'Le coup de bélier est une surpression (ou dépression) transitoire qui se propage dans la conduite sous forme d\'onde de pression lors d\'une fermeture brusque de vanne ou d\'un arrêt brutal de pompe. La célérité de l\'onde de bélier dans une conduite pleine d\'eau est donnée par la formule de Joukowski : c = 1/(√(ρ(1/K + D/(eE)))) où K = module d\'élasticité de l\'eau (2,1×10⁹ Pa), E = module d\'Young du matériau de la conduite, D = diamètre, e = épaisseur. Pour une conduite acier DN200 (e = 6 mm) : c ≈ 1 200 m/s. La surpression maximale de bélier est ΔH = c×ΔV/g, avec ΔV la variation de vitesse instantanée.\n\nLes dispositifs de protection comprennent : (1) réservoirs anti-bélier (vase d\'expansion à membrane ou à air comprimé) installés près de la pompe, qui absorbent les chocs de pression transitoires ; (2) vannes à fermeture lente (> 30 s pour fermer) qui limitent ΔV dans le temps ; (3) soupapes de décharge ou de surpression qui s\'ouvrent si la pression dépasse un seuil ; (4) cheminées d\'équilibre sur les grands ouvrages gravitaires. Pour les petites installations, une vanne moteur avec temps de fermeture réglable à 5-30 s suffit souvent.',
          sous_sections: []
        },
        {
          titre: '4. Essai d\'étanchéité et réception',
          texte: 'Avant mise en service, toute canalisation neuve doit subir un essai d\'étanchéité conforme à la norme NF EN 805 (réseaux AEP) ou NF EN 1610 (réseaux d\'assainissement). Pour l\'AEP, l\'essai se réalise sous une pression d\'épreuve généralement égale à 1,5 fois la pression de service pendant 30 minutes (méthode A) ou par mesure de la perte d\'eau admissible (méthode B : < 0,1 L/h par mm de DN et par 100 m). Tout dépassement de fuite entraîne la recherche et la réparation du défaut avant nouvelle épreuve. La décontamination (désinfection) est obligatoire pour les canalisations AEP avant mise en service (chloration à 25 mg/L pendant 24 h, rinçage et vérification bactériologique).',
          sous_sections: []
        }
      ],
      points: [
        'Fonte ductile (FD) : référence AEP enterré, PN10-PN40, emboîtements verrouillés Tyton/VRS',
        'PE100 : léger, souple, soudable, corrosion-résistant, DN20-DN450, PN6-PN25',
        'Robinet-vanne : isolation uniquement, jamais de régulation en position intermédiaire',
        'Vanne papillon : plus compacte, acceptable pour régulation modérée sur grands diamètres',
        'Clapet anti-retour : empêche le reflux quand la pompe s\'arrête — obligatoire sur chaque pompe en parallèle',
        'Ventouse en point haut : évite les poches d\'air qui réduisent la section et créent des coups de bélier',
        'Célérité du bélier : c ≈ 900-1 400 m/s selon le matériau de la conduite',
        'Surpression bélier : ΔH = c×ΔV/g — peut atteindre plusieurs dizaines de bars',
        'Protection : réservoir anti-bélier, vanne lente (> 30 s), soupape de décharge',
        'Essai NF EN 805 : pression d\'épreuve = 1,5 × pression de service, durée 30 min'
      ],
      formules: [
        'Célérité onde bélier (approx. acier) : c ≈ 1 000-1 400 m/s ; conduite PE : c ≈ 300-400 m/s',
        'Surpression Joukowski : ΔH = c × ΔV / g → [m] ; ΔV = variation de vitesse [m/s], g = 9,81 m/s²',
        'Temps de fermeture critique : tc = 2L/c → [s] ; si t_fermeture > tc, le bélier est partiel',
        'Pression d\'épreuve NF EN 805 : P_épreuve = 1,5 × P_service → [bar]'
      ],
      retenir: 'Fonte ductile · PE100 · PVC-P · PN · Robinet-vanne · Clapet anti-retour · Ventouse · Coup de bélier · Joukowski · Réservoir anti-bélier'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une conduite PE100 DN110 (SDR 11, épaisseur e = 10 mm) transporte Q = 25 m³/h. La vanne de refoulement se ferme en 0,5 s. Calculer la célérité du bélier et la surpression. (Module Young PE ≈ 800 MPa, K_eau = 2,1 GPa, D = 90 mm)',
        solution: 'Célérité : 1/c² = ρ(1/K + D/(eE)) = 1 000×(1/(2,1×10⁹) + 0,090/(0,010×800×10⁶)) = 1 000×(4,76×10⁻¹⁰ + 1,125×10⁻⁵) ≈ 1 000×1,125×10⁻⁵. c ≈ 1/√(1,125×10⁻²) ≈ 298 m/s. Vitesse dans la conduite : S = π×0,090²/4 = 6,36×10⁻³ m² ; V = (25/3600)/6,36×10⁻³ = 1,09 m/s. ΔH = c×ΔV/g = 298×1,09/9,81 = 33,1 m. La surpression de 33,1 m (3,3 bar) s\'ajoute à la pression statique. Pour PN10, cette addition peut dépasser la pression nominale si la pression de service est élevée.'
      },
      {
        n: '2',
        enonce: 'Même conduite de 500 m de long. Calculer le temps de fermeture critique tc et la surpression si la vanne ferme en 5 s.',
        solution: 'tc = 2L/c = 2×500/298 = 3,36 s. La vanne met 5 s > tc = 3,36 s, donc le bélier est partiel. La surpression est réduite approximativement à ΔH_partiel ≈ ΔH_complet × tc/t_fermeture = 33,1 × 3,36/5 = 22,2 m. Avec une vanne à fermeture progressive sur 30 s, ΔH_partiel ≈ 33,1 × 3,36/30 = 3,7 m — totalement acceptable.'
      },
      {
        n: '3',
        enonce: 'Un réseau AEP DN150 en fonte ductile fonctionne à 6 bar. Quelle est la pression d\'épreuve requise selon NF EN 805 ? Pendant combien de temps ? Quelle fuite maximale est autorisée sur un tronçon de 200 m (méthode B) ?',
        solution: 'Pression d\'épreuve = 1,5 × 6 = 9 bar. Durée : 30 min minimum. Fuite admissible méthode B : < 0,1 L/h par mm de DN par 100 m = 0,1 × 150 × (200/100) = 30 L/h pour 200 m de DN150. Si la fuite mesurée est inférieure à 30 L/h, le tronçon est déclaré conforme.'
      },
      {
        n: '4',
        enonce: 'Pourquoi installe-t-on une ventouse en point haut d\'une adduction gravitaire ? Donner un exemple concret où l\'absence de ventouse provoque un incident.',
        solution: 'En point haut, lors du remplissage, l\'air ne peut pas s\'échapper spontanément et forme une poche. Cette poche réduit la section effective, accroît les pertes de charge et peut provoquer un coup de bélier lors du passage brusque du flux d\'eau. De même, lors d\'une vidange pour maintenance, si l\'air ne peut pas entrer en remplacement de l\'eau, une dépression peut écraser la conduite (si elle est souple) ou aspirer de l\'eau contaminée par les infiltrations. Exemple : un transporteur d\'eau de 3 km sans ventouse en tête de côte. Lors du premier remplissage, la poche d\'air de 200 m³ empêche l\'eau d\'atteindre le réservoir aval. Après ouverture brusque de la vanne, l\'eau comprime l\'air résiduel en quelques secondes → coup de bélier destructeur.'
      },
      {
        n: '5',
        enonce: 'Choisir le matériau de canalisation le plus adapté pour un refoulement de 800 m, Q = 15 m³/h, HMT = 80 m (pression ≈ 8 bar) dans une zone agricole à sol agressif (argile humide, pH = 5,5, présence de chlorures).',
        solution: 'Sol acide (pH 5,5) et humide avec chlorures = corrosif pour l\'acier non protégé et éventuellement pour la fonte ductile non revêtue. Options : (1) PE100 SDR 11 (PN16 > 8 bar) DN63 ou DN75 : résistance chimique excellente, pas de corrosion externe, soudure bout à bout ou électrofusion, pose en rouleau possible. (2) Fonte ductile classe C25 avec revêtement polyéthylène extrudé externe. Le PE100 est recommandé en premier choix pour ce contexte : économique, léger, pas de protection cathodique requise. DN63 PE100 SDR11 : V = (15/3600)/(π×0,059²/4) = 1,52 m/s, acceptable.'
      },
      {
        n: '6',
        enonce: 'Une vanne papillon DN200 est utilisée à mi-ouverture pour réguler en permanence le débit. Quel problème cela pose-t-il à long terme ?',
        solution: 'À mi-ouverture, le disque de la vanne papillon est dans l\'écoulement et crée une zone de turbulence importante en aval. Cette turbulence provoque une érosion cavitante du disque et du siège, ainsi qu\'une usure progressive de l\'étanchéité. Selon la vitesse de l\'écoulement et la nature du fluide (eau chargée), la durée de vie de la vanne peut être réduite à quelques mois au lieu de 20-30 ans. De plus, la perte de charge à mi-ouverture est difficile à reproduire d\'une journée à l\'autre (coefficient Kv variable selon l\'usure). Solution : utiliser une vanne de régulation dédiée (vanne papillon à cage, vanne de réduction de pression, ou variateur de fréquence sur la pompe amont) conçue pour fonctionner en position intermédiaire.'
      },
      {
        n: '7',
        enonce: 'Calculer la surpression bélier dans une conduite acier DN300 (e = 6 mm, c = 1 200 m/s) lors d\'une coupure de courant sur une pompe qui refoulait Q = 200 m³/h. Pression de service = 5 bar. La conduite est-elle en danger si PN16 ?',
        solution: 'Section DN300 : S = π×0,300²/4 = 0,0707 m². V = (200/3600)/0,0707 = 0,786 m/s. ΔH = c×ΔV/g = 1 200×0,786/9,81 = 96,2 m = 9,6 bar. Pression totale maximale = 5 + 9,6 = 14,6 bar. Marge par rapport à PN16 = 16 - 14,6 = 1,4 bar → faible, risque de dépassement en cas de cumul avec d\'autres effets transitoires. Recommandation : installer un réservoir anti-bélier (Vt ≈ 50-100 L selon le volume de la conduite) ou une vanne lente sur la coupure d\'alimentation pour réduire ΔH à < 3 bar.'
      },
      {
        n: '8',
        enonce: 'Décrire la procédure de décontamination d\'une canalisation AEP DN100 de 500 m avant mise en service, conformément aux règles sanitaires françaises.',
        solution: 'Procédure en 5 étapes : (1) Nettoyage mécanique préalable : vidange complète, chasse à l\'eau pour éliminer les matériaux de construction, les boues et les débris. (2) Désinfection par chloration : remplissage de la conduite avec une solution d\'eau chlorée à 25-50 mg/L de chlore résiduel libre. Volume = 500×π×0,10²/4 = 3,93 m³. Dose de chlore actif = 25 mg/L × 3 930 L = 98 250 mg ≈ 98 g de Cl actif (soit environ 300 mL d\'eau de Javel 9,6 % = 300 g pour 3,93 m³). (3) Temps de contact : 24 h minimum, la conduite restant pleine. (4) Rinçage : rinçage abondant jusqu\'à CRL < 0,5 mg/L en sortie. (5) Vérification microbiologique : prélèvements bactériologiques à 24 h et 48 h après rinçage — absence d\'E. coli et entérocoques obligatoire pour délivrer l\'autorisation de mise en service (ARS).'
      }
    ]
  },

  'GEMEAU-069': {
    id: 'GEMEAU-069',
    titre: 'Métrologie des installations hydrauliques',
    fiche: {
      intro: 'La mesure du débit et de la pression est au cœur du métier de technicien eau : sans instruments fiables, pas de facturation, pas de bilan, pas de détection de fuite. La métrologie hydraulique recouvre le choix des capteurs, leur installation, leur étalonnage et leur maintenance.',
      sections: [
        {
          titre: '1. Débitmètres : principes et technologies',
          texte: 'Le débitmètre électromagnétique (ou débitmètre EM, Coriolis-Faraday) mesure la différence de potentiel électrique induite par le déplacement d\'un fluide conducteur dans un champ magnétique. La force électromotrice induite est proportionnelle à la vitesse moyenne du fluide (loi de Faraday : e = B×D×V). La conductivité minimale requise est 5 μS/cm, ce qui exclut l\'eau déminéralisée pure mais couvre toutes les eaux naturelles, usées et traitées. C\'est le débitmètre de référence pour l\'AEP et l\'assainissement (précision ±0,3 à ±0,5 % de la valeur mesurée). Il n\'a pas de pièce mobile, pas de perte de charge, mais nécessite une conduite pleine (tube piézométrique toujours en charge).\n\nLe débitmètre à ultrasons mesure le décalage de temps de transit d\'une onde ultrasonique entre un émetteur et un récepteur positionnés de part et d\'autre de la conduite, à contre-courant et dans le sens du courant. L\'avantage est son installation en non-intrusif sur conduite existante (modèle à bride ou à collier de serrage), sans coupure du réseau. La précision est de ±1 à ±2 %. Le débitmètre Venturi, basé sur la mesure de la différence de pression entre le col et la conduite amont, offre une grande robustesse et une faible perte de charge permanente (15-25 % de la ΔP mesurée vs 50-70 % pour un orifice).',
          sous_sections: []
        },
        {
          titre: '2. Mesure de pression',
          texte: 'Le manomètre à tube de Bourdon est l\'instrument le plus répandu sur les installations. Le tube en C ou hélicoïdal se déroule sous l\'effet de la pression interne, entraînant une aiguille via un mécanisme d\'engrenage. Sa précision est de ±1 à ±2 % de l\'échelle. Les manomètres doivent être choisis avec une plage de mesure telle que la pression normale de service se situe à 60-70 % de l\'échelle maximum (un manomètre 0-10 bar pour une pression de service de 6 bar).\n\nLes capteurs de pression électroniques (4-20 mA) convertissent la déformation d\'une membrane piézorésistive en signal électrique universel. Le signal 4 mA correspond à 0 bar (valeur de zéro détectable : un signal < 3 mA signale une coupure de câble) et 20 mA à la pression maximale. Ces capteurs s\'interfacent directement avec les automates et les systèmes SCADA. La précision est généralement ±0,1 à ±0,5 % pour les capteurs de précision industriels.',
          sous_sections: []
        },
        {
          titre: '3. Compteurs volumétriques et métrologie légale',
          texte: 'Les compteurs d\'eau pour la facturation sont soumis à la métrologie légale (directive européenne MID, décret du 3 mai 2001). Ils doivent porter le marquage CE MID et faire l\'objet d\'une vérification primitive avant installation. Les compteurs volumétriques à piston ou à turbine sont les plus courants en réseau AEP. Le compteur à piston oscillant est adapté aux petits débits (DN15 à DN32, débit nominal 1-4 m³/h), très précis (classe R400 : rapport du débit maximum au débit minimum). Le compteur Woltmann (hélice axiale) convient aux gros abonnés (DN50 à DN150).\n\nL\'étalonnage périodique est recommandé (tous les 5-15 ans selon la qualité de l\'eau et le type de compteur). En pratique, les services des eaux procèdent à un remplacement systématique des compteurs après 10-15 ans plutôt qu\'à un étalonnage coûteux. La dérive des compteurs est généralement dans le sens du sous-comptage (sous-facturation) après vieillissement.',
          sous_sections: []
        },
        {
          titre: '4. Incertitudes, dérive et étalonnage',
          texte: 'L\'incertitude de mesure est l\'intervalle dans lequel se trouve la vraie valeur avec une probabilité donnée (95 % pour une incertitude élargie, facteur k=2). Pour un débitmètre EM de précision ±0,5 %, la vraie valeur de débit est dans l\'intervalle [mesure - 0,5 %, mesure + 0,5 %] avec 95 % de confiance. L\'incertitude est exprimée en % de la valeur mesurée (erreur relative) ou en unité de mesure (erreur absolue).\n\nLa dérive est le décalage progressif de la mesure par rapport à la valeur vraie au fil du temps, due à l\'usure, l\'entartrage ou le vieillissement des capteurs. Elle est détectée par comparaison périodique avec un étalon de référence (étalonnage). Les débitmètres EM sont peu sujets à la dérive mécaniques, mais leur électronique peut dériver ; les manomètres à Bourdon dérivent par fatigue du tube. L\'étalonnage des débitmètres industriels se fait sur banc d\'étalonnage accrédité (COFRAC) ou par comparaison avec un débitmètre étalon de meilleure précision.',
          sous_sections: []
        }
      ],
      points: [
        'Débitmètre EM : référence AEP/assainissement, ±0,3-0,5 %, nécessite eau conductrice ≥ 5 μS/cm',
        'Débitmètre ultrasons à bride ou collier : non-intrusif, installation sans coupure, ±1-2 %',
        'Venturi : robuste, faible perte de charge (15-25 % de ΔP), adapté aux grandes installations',
        'Manomètre Bourdon : choisir plage telle que service = 60-70 % de l\'échelle max, précision ±1-2 %',
        'Signal 4-20 mA : universel, 4 mA = 0 (détection coupure câble si < 3 mA)',
        'Compteurs MID : métrologie légale, marquage CE, vérification primitive obligatoire avant installation',
        'Classe R400 (compteur) : ratio débit max/débit min = 400 — excellente plage dynamique',
        'Incertitude de mesure : exprime la qualité du résultat, à communiquer avec chaque mesure',
        'Dérive : décalage progressif détecté par étalonnage périodique sur banc COFRAC',
        'Compteurs AEP dérivent vers le sous-comptage avec l\'âge — remplacer à 10-15 ans'
      ],
      formules: [
        'Débitmètre EM (loi de Faraday) : e = B × D × V → [V] ; B = champ magnétique [T], D = diamètre [m], V = vitesse [m/s] ; Q = V × S',
        'Venturi : Q = Cd × S_col × √(2ΔP/ρ) → [m³/s] ; Cd = coefficient de décharge ≈ 0,98, ΔP = différence de pression amont/col',
        'Signal 4-20 mA en % : Grandeur = G_max × (I - 4) / 16 → [G_unité] ; I = courant [mA], G_max = pleine échelle',
        'Incertitude relative : u_r = u_abs / valeur_mesurée × 100 → [%]'
      ],
      retenir: 'Débitmètre EM · Ultrasons · Venturi · Manomètre Bourdon · 4-20 mA · Compteur MID · Classe R400 · Étalonnage · COFRAC · Incertitude'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un débitmètre EM DN100 mesure Q = 42 m³/h avec une précision de ±0,5 %. Quel est l\'intervalle de confiance de la mesure ? Le bilan eau d\'une commune donne une perte de 8 m³/h sur ce tronçon. Cette perte est-elle significative ?',
        solution: 'Incertitude absolue = 0,5 % × 42 = 0,21 m³/h. Intervalle : [41,79 ; 42,21] m³/h. La perte de 8 m³/h est très largement supérieure à l\'incertitude de mesure (±0,21 m³/h). Elle est statistiquement significative et indique une fuite réelle, non un artefact métrologique.'
      },
      {
        n: '2',
        enonce: 'Un capteur de pression 4-20 mA est calibré sur la plage 0-10 bar. Le transmetteur envoie 13,6 mA. Quelle est la pression correspondante ?',
        solution: 'P = P_max × (I - 4) / 16 = 10 × (13,6 - 4) / 16 = 10 × 9,6 / 16 = 10 × 0,60 = 6,0 bar. Vérification : à 4 mA → 0 bar ; à 20 mA → 10 bar ; à 12 mA → 5 bar ✓ (point médian).'
      },
      {
        n: '3',
        enonce: 'Le technicien lit un signal de 2,8 mA sur un capteur de pression 4-20 mA. Quelle est sa conclusion ?',
        solution: 'Un signal < 4 mA indique une défaillance du circuit, non une mesure de pression négative. Le signal de 4 mA correspond au zéro de la grandeur mesurée ; tout signal < 4 mA est hors plage valide et signale généralement une coupure de câble, un court-circuit ou une panne du transmetteur. Aucune valeur de pression ne peut être déduite. Action : vérifier le câblage et l\'alimentation du capteur.'
      },
      {
        n: '4',
        enonce: 'Un Venturi DN150 avec col DN75 (Cd = 0,97) mesure ΔP = 0,85 bar. Calculer le débit.',
        solution: 'S_col = π×0,075²/4 = 4,42×10⁻³ m². ΔP = 0,85×10⁵ = 85 000 Pa. Q = Cd × S_col × √(2ΔP/ρ) = 0,97 × 4,42×10⁻³ × √(2×85 000/1 000) = 0,97 × 4,42×10⁻³ × √170 = 0,97 × 4,42×10⁻³ × 13,04 = 0,0559 m³/s = 201 m³/h.'
      },
      {
        n: '5',
        enonce: 'Un compteur AEP DN15 (classe R400) a un débit maximal de 3 m³/h. Quel est son débit minimal de bon fonctionnement ?',
        solution: 'Classe R400 signifie Q_max/Q_min = 400. Q_min = Q_max/400 = 3/400 = 0,0075 m³/h = 7,5 L/h = 0,125 L/min. En dessous de 7,5 L/h, le compteur ne mesure pas correctement (sous-comptage ou pas de comptage). Cette valeur est importante pour détecter les petites fuites nocturnes (débit minimum nocturne).'
      },
      {
        n: '6',
        enonce: 'Un débitmètre ultrasons à collier est installé sur une conduite DN200 existante en fonte ductile (ep. 6 mm). Donner les précautions d\'installation pour garantir la précision de ±2 %.',
        solution: 'Précautions : (1) Longueurs droites amont et aval : installer le débitmètre après ≥ 10 D de conduite droite amont (2 m pour DN200) et ≥ 5 D aval (1 m), loin de tout coude, vanne ou réduction pour éviter les perturbations de profil de vitesse. (2) Conduite pleine en charge : vérifier que la conduite est toujours en charge (pas de poche d\'air). (3) Contact acoustique : utiliser le gel couplant approprié pour assurer le contact entre les capteurs ultrasoniques et la conduite. (4) Épaisseur de paroi : mesurer précisément l\'épaisseur (mesure ultrasonique) et la saisir dans le transmetteur. (5) Profil de vitesse : choisir la configuration à 2 ou 4 voies (plusieurs paires de capteurs à 90° ou 120°) pour améliorer la précision sur les profils non développés.'
      },
      {
        n: '7',
        enonce: 'Un service technique compare deux débitmètres EM sur le même tronçon. Appareil A affiche 85,2 m³/h, appareil B affiche 87,6 m³/h. Les deux sont de classe ±0,5 %. Calculer l\'écart et conclure.',
        solution: 'Écart entre les deux : (87,6 - 85,2)/85,2 × 100 = 2,82 %. Incertitude maximale combinée (pire cas) : ±0,5 % + ±0,5 % = ±1,0 % = ±0,85 m³/h sur 85 m³/h. L\'écart de 2,4 m³/h est largement supérieur à l\'incertitude combinée de 0,85 m³/h. Les deux appareils ne sont pas en accord métrologique. L\'un des deux est défaillant ou mal étalonné. Action : envoyer l\'un ou les deux sur banc COFRAC pour étalonnage de référence.'
      },
      {
        n: '8',
        enonce: 'Décrire comment mesurer le débit d\'une conduite gravitaire à surface libre DN400 (canal/collecteur) avec un débitmètre EM standard de type électrode. Quelle est la contrainte principale ?',
        solution: 'Un débitmètre EM standard nécessite une conduite complètement remplie (en charge) pour que les électrodes soient immergées et que la loi de Faraday s\'applique uniformément. Dans un collecteur à surface libre, la conduite n\'est pas pleine en régime normal. Solutions : (1) Débitmètre EM à écoulement partiel (électrodes sur la génératrice inférieure, mesure de la hauteur d\'eau par ultrasons ou pression et calcul du débit par formule Manning-Strickler) — solution spécialisée, coûteuse ; (2) Débitmètre ultrasonique Doppler qui détecte les particules en suspension et mesure leur vitesse, puis calcule Q avec la section mouillée mesurée par capteur de niveau ; (3) Déversoir de mesure avec limnimètre (formule de Francis ou Bazin) — économique et robuste pour les collecteurs de section rectangulaire.'
      }
    ]
  },

  'GEMEAU-070': {
    id: 'GEMEAU-070',
    titre: 'Automatismes, régulation et supervision',
    fiche: {
      intro: 'Les installations hydrauliques modernes sont pilotées par des automates programmables et supervisées à distance via des systèmes SCADA. Le technicien des métiers de l\'eau doit savoir configurer des séquences simples, comprendre la régulation PID et lire les données de télégestion pour diagnostiquer une anomalie sans se déplacer sur site.',
      sections: [
        {
          titre: '1. L\'automate programmable industriel (API)',
          texte: 'L\'automate programmable industriel (API, ou PLC en anglais) est le cerveau électronique d\'une installation hydraulique automatisée. Il lit en permanence les entrées (capteurs, interrupteurs) et commande les sorties (vannes, pompes, alarmes) selon un programme stocké dans sa mémoire. Les entrées-sorties sont de deux types : TOR (Tout Ou Rien, signal binaire 0/1, ex : flotteur haut niveau, disjoncteur déclenché) et analogiques (signal continu 4-20 mA ou 0-10V, ex : pression, débit, niveau).\n\nLe programme est écrit dans des langages normalisés CEI 61131-3 : ladder (schéma à contacts ressemblant aux anciens schémas électriques), Grafcet (graphe fonctionnel, très lisible pour les séquences), FBD (Function Block Diagram), ST (Structured Text, proche du Pascal). Le Grafcet est particulièrement adapté aux cycles séquentiels comme le lavage d\'un filtre (étape 1 : fermer les vannes d\'entrée, étape 2 : ouvrir l\'air de lavage, étape 3 : ouvrir l\'eau de lavage pendant t1 minutes, étape 4 : rinçage, etc.).',
          sous_sections: []
        },
        {
          titre: '2. La régulation PID',
          texte: 'La régulation PID (Proportionnel-Intégral-Dérivé) est l\'algorithme de contrôle le plus utilisé pour maintenir une grandeur physique à sa valeur de consigne malgré les perturbations. En hydraulique, les applications typiques sont : maintenir la pression de réseau à 4 bar (régulation en pression), maintenir le niveau d\'un réservoir entre deux seuils (régulation en niveau), maintenir un débit constant (régulation en débit).\n\nL\'erreur e(t) = consigne - mesure. La sortie du correcteur PID est : u(t) = Kp×e + Ki×∫e dt + Kd×de/dt. Le terme P (proportionnel) réagit proportionnellement à l\'erreur mais génère une erreur statique résiduelle. Le terme I (intégral) accumule l\'erreur au fil du temps et élimine l\'erreur statique (le correcteur "insiste" jusqu\'à atteindre la consigne exacte). Le terme D (dérivé) anticipe l\'évolution de l\'erreur et amortit les oscillations. En pratique, un régulateur PI (sans D) suffit pour la plupart des applications hydrauliques (les systèmes hydrauliques sont naturellement amortis).',
          sous_sections: []
        },
        {
          titre: '3. SCADA et télégestion',
          texte: 'Le SCADA (Supervisory Control And Data Acquisition) est le logiciel de supervision qui centralise les données de toutes les installations d\'un territoire hydraulique. Un opérateur voit en temps réel les débits, niveaux, pressions et états de toutes les pompes. Il peut modifier les consignes à distance, déclencher des alarmes et éditer des rapports d\'exploitation. Les logiciels répandus dans l\'eau sont Movicon (Progea), Citect, WinCC Siemens, Intouch Wonderware, et des solutions spécialisées eau comme PCVUE.\n\nLa télégestion repose sur un réseau de communication entre les unités de terrain (RTU : Remote Terminal Unit, ou API communicant) et le superviseur central. Les protocoles courants sont Modbus RTU (liaison série RS485 ou RS232), Modbus TCP (Ethernet), DNP3 (protocole robuste résistant aux corruptions, recommandé pour les infrastructures critiques eau), IEC 60870-5-101/104. La couche physique est souvent 4G/GPRS pour les sites isolés, fibre optique ou VPN ADSL pour les sites urbains.\n\nLa cybersécurité des systèmes SCADA est un enjeu majeur depuis les attaques sur des infrastructures d\'eau (ex : incident de Oldsmar, Floride, 2021, où un attaquant a tenté d\'augmenter la dose de soude). Les recommandations incluent : séparation réseau OT (opérationnel) / IT (informatique), authentification forte, pas de connexion Internet directe, mise à jour des correctifs de sécurité.',
          sous_sections: []
        },
        {
          titre: '4. Alarmes et gestion des événements',
          texte: 'Un système SCADA bien configuré génère des alarmes hiérarchisées selon la criticité : alarme de niveau 1 (critique, astreinte immédiate : rupture d\'alimentation électrique, dépassement de pression max, absence totale de débit alors que la pompe est en marche), niveau 2 (dégradation : rendement pompe en baisse, consommation électrique anormale), niveau 3 (informatif : changement d\'état normal, compteur dépassant le seuil de maintenance). La gestion des alarmes comprend l\'acquittement (reconnaissance par l\'opérateur), l\'historique et l\'analyse de récurrence (quelle alarme revient le plus souvent = problème à résoudre).',
          sous_sections: []
        }
      ],
      points: [
        'API : lit entrées TOR et analogiques, commande sorties selon programme CEI 61131-3',
        'Grafcet : outil de description séquentielle adapté aux cycles de lavage/démarrage/arrêt',
        'Régulation PID : P élimine l\'erreur proportionnellement, I élimine l\'erreur statique, D amortit les oscillations',
        'PI suffit pour la plupart des régulations hydrauliques (pression, niveau, débit)',
        'SCADA : supervision centralisée, visualisation temps réel, modification consignes à distance',
        'Protocoles télégestion : Modbus RTU/TCP, DNP3, IEC 60870-5 — adaptés aux infrastructures critiques',
        'DNP3 : protocole robuste pour les infrastructures eau, résistant aux corruptions de données',
        'Cybersécurité SCADA : séparation OT/IT, authentification forte, pas d\'Internet direct',
        'Alarmes hiérarchisées : niveau 1 (critique/astreinte), niveau 2 (dégradation), niveau 3 (informatif)',
        'Acquittement d\'alarme : obligation de traçabilité — qui a reconnu quoi et quand'
      ],
      formules: [
        'Correcteur PID : u(t) = Kp × e(t) + Ki × ∫e(t)dt + Kd × de(t)/dt → [%ouverture vanne ou Hz variateur]',
        'Erreur de régulation : e(t) = consigne - mesure → [unité de la grandeur régulée]',
        'Conversion signal 4-20 mA vers grandeur : G = G_max × (I - 4) / 16 → [G_unité] ; I en mA'
      ],
      retenir: 'API/PLC · Grafcet · Ladder · TOR · Analogique · PID · SCADA · Modbus · DNP3 · Cybersécurité · Alarme · Astreinte'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Décrire en Grafcet simplifié le cycle de lavage d\'un filtre à sable rapide : (1) fermeture vanne entrée eau à filtrer, (2) ouverture vanne air de lavage pendant 5 min, (3) fermeture air + ouverture eau de lavage pendant 8 min, (4) fermeture eau lavage + rinçage eau filtrée pendant 3 min, (5) remise en filtration.',
        solution: 'Grafcet simplifié : Étape 0 (repos) → transition [ordre de lavage] → Étape 1 : Fermer V_entrée. → transition [V_entrée fermée] → Étape 2 : Ouvrir V_air. → transition [t ≥ 5 min] → Étape 3 : Fermer V_air / Ouvrir V_eau_lavage. → transition [t ≥ 8 min] → Étape 4 : Fermer V_eau_lavage / Ouvrir V_rinçage. → transition [t ≥ 3 min] → Étape 5 : Fermer V_rinçage / Ouvrir V_entrée. → transition [V_entrée ouverte] → Retour Étape 0. Les actions sont dans les rectangles d\'étape, les conditions dans les transitions (losanges ou barres horizontales).'
      },
      {
        n: '2',
        enonce: 'Un régulateur PI contrôle la pression d\'un réseau AEP à 4,0 bar via un variateur de fréquence. La pression mesurée est 3,6 bar. Kp = 20 %/bar, Ki = 5 %/bar/s, l\'erreur dure depuis 2 s. Calculer la sortie du régulateur (en % de consigne VFD, base 50 Hz = 100 %).',
        solution: 'e = 4,0 - 3,6 = 0,4 bar. Terme P : 20 × 0,4 = 8 %. Terme I : 5 × 0,4 × 2 = 4 %. Sortie u = 8 + 4 = 12 % au-dessus de la valeur actuelle. Si le VFD était à 80 % (40 Hz), la nouvelle consigne est 80 + 12 = 92 % = 46 Hz. Le régulateur accélère la pompe pour remonter la pression vers 4 bar.'
      },
      {
        n: '3',
        enonce: 'Un opérateur SCADA voit en astreinte nocturne (3h du matin) l\'alarme "Débit nul — Pompe P1 en marche". Décrire le diagnostic à distance et les actions possibles.',
        solution: 'Alarme "débit nul + pompe en marche" = situation anormale critique. Diagnostic SCADA à distance : (1) Vérifier l\'état du débitmètre (signal 4-20 mA : si = 4 mA exact → capteur défaillant ou conduite vide) ; (2) Vérifier la pression d\'aspiration et de refoulement (si P_ref très élevée → vanne de refoulement fermée ; si P_asp très basse → aspiration à sec, cavitation, conduite d\'aspiration bouchée) ; (3) Vérifier la consommation électrique de la pompe (si Pa normale → débit mesuré erroné ; si Pa très faible → pompe tourne à vide, eau absente). Actions possibles à distance : déclencher la pompe pour éviter l\'échauffement, envoyer une alarme de niveau 1 sur smartphone technicien d\'astreinte. Intervention physique nécessaire si le diagnostic à distance est insuffisant.'
      },
      {
        n: '4',
        enonce: 'Quelle est la différence entre un API et un RTU (Remote Terminal Unit) en télégestion eau ? Quand utilise-t-on l\'un plutôt que l\'autre ?',
        solution: 'L\'API est un automate de contrôle local, avec une puissance de calcul élevée, une mémoire programme importante, des entrées/sorties nombreuses et des interfaces locales (écran, réseau Ethernet). Il gère la logique de commande locale de l\'installation. Le RTU est un concentrateur de données de terrain, optimisé pour la communication à longue distance avec un SCADA (protocoles DNP3, IEC 60870) et pour le fonctionnement autonome avec basse consommation (alimenté sur batterie/panneau solaire pour les sites isolés). Il acquiert les mesures et commandes mais a une capacité de traitement locale limitée. Usage : API pour les stations importantes (STEU, usine AEP) avec logic locale complexe ; RTU pour les sites isolés simples (poste de relevage, compteur de sectorisation, captage) qui doivent juste remonter des mesures et recevoir quelques commandes distantes.'
      },
      {
        n: '5',
        enonce: 'Un réseau AEP doit maintenir la pression en un point nœud entre 2,5 et 5 bar. Décrire le schéma de régulation avec variateur de fréquence et capteur de pression 4-20 mA (plage 0-10 bar).',
        solution: 'Montage : capteur de pression 4-20 mA (0-10 bar) sur le nœud réseau → signal 4-20 mA vers entrée analogique API → API calcule l\'erreur e = consigne (4,0 bar = 12 mA) - mesure → algorithme PI calcule la fréquence de consigne → sortie analogique 4-20 mA vers VFD (4 mA = 0 Hz, 20 mA = 50 Hz) → moteur pompe → débit → pression réseau. Sécurités : si P > 5 bar → alarme et/ou réduction fréquence jusqu\'à 20 Hz minimum ; si P < 2,5 bar pendant > 5 s → alarme dégradation de service ; si P < 1 bar → arrêt pompe et alarme critique. La plage de régulation active est 4 ± 0,5 bar (tolérance ± 12,5 %).'
      },
      {
        n: '6',
        enonce: 'Un technicien effectue un essai de réponse indicielle sur une régulation de niveau : il monte la consigne de 2,0 m à 2,5 m. Le niveau atteint 2,5 m en 8 minutes sans dépassement, avec une légère erreur résiduelle de 0,05 m. Qu\'en concluez-vous sur le réglage du PID ?',
        solution: 'L\'absence de dépassement (pas d\'oscillation) et la montée régulière indiquent un régulateur correctement réglé ou légèrement sur-amorti. L\'erreur résiduelle de 0,05 m (2 % de la consigne) indique que le terme I est insuffisant (intégrateur trop lent) — l\'erreur statique devrait être nulle avec un terme I bien réglé. Solutions : augmenter légèrement Ki pour accélérer l\'élimination de l\'erreur statique, tout en vérifiant que cela n\'introduit pas d\'oscillations. Si la rapidité (8 min) est acceptable pour l\'application, le réglage est satisfaisant avec une simple augmentation de Ki. Un niveau de réservoir est un système lent (intégrateur hydraulique naturel) ; le temps de réponse de 8 min est normal.'
      },
      {
        n: '7',
        enonce: 'Une collectivité envisage de connecter son SCADA eau à Internet pour permettre aux élus d\'accéder aux données depuis leurs smartphones. Quels risques cela pose-t-il et quelles mesures préconisez-vous ?',
        solution: 'Risques principaux : (1) Accès non autorisé aux commandes (un attaquant peut modifier des consignes de dosage de réactifs, arrêter des pompes, ouvrir des vannes — incident Oldsmar 2021) ; (2) Déni de service (DoS) sur le SCADA → perte de contrôle ; (3) Ransomware cryptant les données de supervision. Mesures recommandées : (1) Architecture DMZ (zone démilitarisée) séparant le réseau OT (SCADA, API) du réseau IT et d\'Internet ; (2) Authentification multi-facteurs (MFA) pour tout accès distant ; (3) VPN avec chiffrement TLS/IPsec pour les accès mobiles des élus — jamais d\'accès HTTP direct ; (4) Accès en lecture seule pour les élus (pas de commandes) ; (5) Journalisation de tous les accès, surveillance des anomalies ; (6) Mise à jour régulière du SCADA et des équipements réseau ; (7) Plan de réponse à incident cyber (PRCI) testé annuellement.'
      },
      {
        n: '8',
        enonce: 'Un poste de relevage EU automatique doit démarrer la pompe quand le niveau atteint 1,8 m et l\'arrêter quand il descend à 0,6 m. Deux pompes fonctionnent en alternance (lead-lag). Décrire la logique de commande en langage naturel.',
        solution: 'Logique de commande : (1) Niveaux mesurés par sonde à ultrasons (4-20 mA, 0-2,5 m). (2) Lecture du niveau en continu par l\'API. (3) Si niveau ≥ 1,8 m ET P1 (lead actuelle) arrêtée → démarrer P1. (4) Si niveau ≥ 2,0 m ET P1 en marche → démarrer P2 en renfort. (5) Si niveau ≤ 0,6 m → arrêter toutes les pompes. (6) Si niveau ≤ 0,3 m (alarme basse basse) → arrêt d\'urgence + alarme "bâche vide". (7) Si niveau ≥ 2,3 m (alarme haute haute) ET toutes pompes en marche → alarme "débordement imminent" + appel astreinte. (8) Alternance lead/lag : après chaque cycle complet, inverser le rôle (P1 devient lag, P2 devient lead) pour équilibrer les heures de fonctionnement. (9) Toutes les 10 cycles, vérifier que la pompe en stand-by démarre bien en test automatique (2 secondes) pour confirmer sa disponibilité.'
      }
    ]
  },

  'GEMEAU-071': {
    id: 'GEMEAU-071',
    titre: 'Diagnostic de fonctionnement et maintenance',
    fiche: {
      intro: 'L\'exploitation d\'une station de pompage exige une surveillance régulière de l\'état des équipements. Le diagnostic précoce d\'une dégradation permet d\'éviter la panne franche et d\'organiser les interventions de maintenance en dehors des périodes critiques. Le technicien doit savoir interpréter les courbes de performance, les mesures de vibrations et les relevés électriques.',
      sections: [
        {
          titre: '1. Courbes de performance et diagnostic par comparaison',
          texte: 'La méthode la plus directe pour diagnostiquer l\'état d\'une pompe est de mesurer son point de fonctionnement réel (Q mesuré par débitmètre, H calculé par manométrie différentielle) et de le comparer à la courbe constructeur. Si le point mesuré se situe en dessous de la courbe H(Q) constructeur (même débit pour une hauteur inférieure ou même hauteur pour un débit supérieur), la pompe est dégradée.\n\nLes causes principales de dégradation hydraulique sont : (1) usure de la roue — les jeux en tête de roue et au niveau des anneaux d\'étanchéité augmentent, la recirculation interne s\'accroît, le rendement chute ; (2) obstruction partielle — dépôts calcaires, corps étrangers dans la volute ou les canaux de roue — détectable par une chute abrupte du débit à haute pression ; (3) cavitation — endommagement de la roue par implosion de bulles, visible à l\'œil sur la roue lors d\'une révision (surface grêlée). L\'indice de performance globale (IPG) compare la puissance hydraulique mesurée à la puissance nominale pour un même débit, exprimé en pourcentage.',
          sous_sections: []
        },
        {
          titre: '2. Surveillance vibratoire et acoustique',
          texte: 'Les vibrations sont un indicateur précoce de défaillance mécanique des pompes et des moteurs. Elles se mesurent par accéléromètres piézoélectriques fixés sur les paliers. La norme ISO 10816-3 définit les seuils d\'alerte pour les machines tournantes : vitesse de vibration (mm/s RMS) : Classe II (machines 15-75 kW) — Zone A (bon) < 1,12 mm/s, Zone B (acceptable) 1,12-2,8 mm/s, Zone C (alerte) 2,8-7,1 mm/s, Zone D (danger) > 7,1 mm/s. Au-delà de la Zone C, une intervention de maintenance doit être planifiée ; au-delà de la Zone D, l\'arrêt immédiat est recommandé.\n\nL\'analyse spectrale des vibrations (FFT) permet d\'identifier la fréquence dominante et d\'en déduire la cause : vibrations à la fréquence de rotation (1× = balourd), à 2× (désalignement), à la fréquence de passage des aubes (Z × f_rotation, Z = nombre d\'aubes, souvent indice de cavitation ou d\'instabilité hydraulique). Le bruit caractéristique de la cavitation (crépitements, bruit de gravier) est facilement identifiable à l\'oreille ou par microphone de contact.',
          sous_sections: []
        },
        {
          titre: '3. Surveillance électrique et thermique',
          texte: 'La mesure de la puissance électrique absorbée (wattmètre ou analyseur de puissance) permet de calculer le rendement global de l\'installation : ηglobal = Ph/Pa = ρgQH/Pa. Une dérive à la hausse de Pa pour un même débit et une même hauteur signale une dégradation du rendement (usure ou engorgement). La mesure du courant (ampèremètre) doit rester dans la plage nominale ±10 % ; un courant très élevé signale une surcharge (obstruction, roue grippée) ; un courant très faible indique un désamorçage ou une rotation à vide (pompe vidangée).\n\nLa température des paliers (mesurée par thermomètre infrarouge ou thermocouple) ne doit pas dépasser 70-80 °C pour les roulements à billes standard. Une montée en température au-delà de cette valeur indique un manque de graisse, une surcharge ou un balourd. Les garnitures mécaniques (seal) dissipent de la chaleur ; en fonctionnement normal, elles sont légèrement humides (film d\'eau de lubrification visible). Une garniture totalement sèche ou avec fuite importante doit être remplacée.',
          sous_sections: []
        },
        {
          titre: '4. GMAO et plan de maintenance',
          texte: 'La GMAO (Gestion de Maintenance Assistée par Ordinateur) centralise les informations relatives aux équipements (fiches techniques, historique des interventions, stocks de pièces) et planifie les actions de maintenance préventive selon des périodicités définies. Les logiciels courants sont SAP-PM, MAXIMO (IBM), Coswin, et des solutions SaaS comme Ultimo. La maintenance préventive d\'une pompe centrifuge comprend typiquement : contrôle hebdomadaire des vibrations, température et paramètres hydrauliques ; changement de garniture mécanique tous les 2-4 ans ; roulement tous les 5-8 ans (ou selon les heures de fonctionnement) ; révision complète (démontage, inspection roue, remplacement bagues) tous les 10-15 ans selon les conditions d\'exploitation.',
          sous_sections: []
        }
      ],
      points: [
        'Diagnostic hydraulique : comparer point mesuré (Q, H) à la courbe constructeur — écart > 5 % = anomalie',
        'Causes de dégradation : usure roue (jeux augmentés), obstruction, cavitation (érosion)',
        'ISO 10816-3 : vibrations Zone A < 1,12 mm/s (bon), Zone D > 7,1 mm/s (arrêt immédiat)',
        'FFT vibrations : 1× fréquence rotation = balourd, 2× = désalignement, Z× = cavitation/instabilité',
        'Courant électrique : > 110 % nominal = surcharge ; < 50 % nominal = pompe à vide',
        'Température paliers : alarme à 70 °C, arrêt à 80 °C pour roulements standard',
        'Garniture mécanique : légèrement humide = normal ; sèche = risque surchauffe ; fuite franche = remplacement',
        'GMAO : historique des pannes, planification préventive, gestion des stocks de pièces',
        'Rendement global = Ph/Pa — sa dégradation progressive signale l\'usure',
        'Maintenance préventive pompe : vibrations hebdomadaires, garniture 2-4 ans, roulement 5-8 ans'
      ],
      formules: [
        'Indice de performance hydraulique : IPH = H_mesurée / H_constructeur(Q) × 100 → [%] ; IPH < 95 % = dégradation',
        'Rendement global mesuré : ηglobal = ρgQH / Pa_élec → [-] ; comparé à la valeur nominale constructeur',
        'Puissance consommée mesurée : Pa = U × I × cos φ × √3 → [W] (triphasé) ; U tension [V], I courant [A]',
        'Fréquence de passage des aubes : f_aubes = Z × n/60 → [Hz] ; Z = nombre d\'aubes roue, n = vitesse [tr/min]'
      ],
      retenir: 'Courbe constructeur · Usure roue · Obstruction · Cavitation · ISO 10816 · FFT vibrations · Balourd · Désalignement · Garniture mécanique · GMAO'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une pompe nominale Q = 60 m³/h, H = 40 m est mesurée en exploitation : débit 55 m³/h, HMT mesurée 35 m. Calculer l\'IPH et conclure.',
        solution: 'La courbe constructeur à Q = 55 m³/h donne, par interpolation (courbe H = 50 - 0,02Q² comme exemple) : H_constructeur(55) = 50 - 0,02×55² = 50 - 60,5... → si H_nomi = 40 m à 60 m³/h, on peut approximer H_constructeur(55) ≈ 42 m (légère remontée de la courbe pour débit réduit). IPH = 35/42 × 100 = 83 %. Un IPH < 95 % indique une dégradation significative. La chute de 17 % de la hauteur à débit réduit signale probablement une usure avancée de la roue (jeux bague intérieure augmentés). Recommandation : déposer la pompe pour inspection de la roue et des bagues d\'étanchéité.'
      },
      {
        n: '2',
        enonce: 'Les vibrations sur palier côté accouplement d\'une pompe de 30 kW sont mesurées à 4,2 mm/s RMS. Selon ISO 10816-3, dans quelle zone se situe cette pompe ? Quelle action recommandez-vous ?',
        solution: 'Pompe 30 kW → Classe II (machines 15-75 kW). Seuils Classe II : Zone A < 1,12, Zone B 1,12-2,8, Zone C 2,8-7,1, Zone D > 7,1 mm/s. 4,2 mm/s → Zone C (niveau d\'alerte). La pompe peut encore fonctionner temporairement mais une intervention de maintenance doit être planifiée à court terme (sous 2-4 semaines). Analyse FFT recommandée pour identifier la fréquence dominante et la cause (balourd, désalignement, usure roulement).'
      },
      {
        n: '3',
        enonce: 'L\'analyse spectrale d\'une pompe de forage (n = 2 900 tr/min, roue à 6 aubes) montre un pic dominant à 290 Hz et un pic à 48,3 Hz. Identifier les fréquences et diagnostiquer.',
        solution: 'Fréquence de rotation : f_rot = 2 900/60 = 48,3 Hz. Fréquence de passage des aubes : f_aubes = 6 × 48,3 = 290 Hz. Le pic à 48,3 Hz (= 1×f_rot) est normal (léger balourd résiduel, toujours présent). Le pic dominant à 290 Hz (= f_aubes) signale une perturbation hydraulique à la fréquence de passage des aubes. Causes possibles : (1) débit très loin du BEP (à droite ou à gauche), produisant un recirculation interne et des chocs aubes ; (2) cavitation (pics vibratoires aux harmoniques de f_aubes) ; (3) jeu non uniforme entre les aubes et la volute. Vérifier le point de fonctionnement et le NPSHd.'
      },
      {
        n: '4',
        enonce: 'Un technicien relève les données d\'une pompe : Pa_électrique = 22 kW, Q = 80 m³/h, HMT = 55 m. Calculer le rendement global et comparer à la valeur nominale (η_nom = 72 %).',
        solution: 'Ph = ρgQH / 3 600 000 = 1 000 × 9,81 × (80/3600) × 55 / 1 000 = (80 × 55) / 367 = 11,99 kW. Rendement global = Ph / Pa = 11,99 / 22 = 0,545 = 54,5 %. Vs η_nom = 72 %. La dégradation est de (72 - 54,5)/72 × 100 = 24,3 %. Cette chute importante du rendement global justifie une investigation approfondie (mesure des vibrations, inspection de la roue). Surconsommation par rapport à un rendement normal : ΔPa = Ph/η_nom - Ph/η_actuel = 11,99/0,72 - 11,99/0,545 = 16,65 - 22 = - ne s\'applique pas. En réalité, pour le même Ph, Pa_nom = 11,99/0,72 = 16,7 kW vs Pa_actuel = 22 kW. Surconsommation = 5,3 kW.'
      },
      {
        n: '5',
        enonce: 'Une garniture mécanique de pompe présente une fuite de 3 mL/min visible à l\'extérieur. Est-ce normal ? À partir de quel seuil faut-il intervenir ?',
        solution: 'Une garniture mécanique en bon état laisse passer un film microscopique d\'eau qui lubrifie les faces de frottement — environ 1-5 mL/min est considéré comme normal (norme acceptable selon constructeurs). 3 mL/min se situe dans la plage normale. Seuils d\'intervention : une fuite visible > 10-20 mL/min (selon la taille de la pompe) ou une progression rapide de la fuite indique une usure des faces de frottement ou un désalignement. Une fuite nulle pendant longtemps puis une apparition soudaine est souvent le signe d\'une oxydation des faces. Une fuite intermittente (seulement au démarrage) peut indiquer une contamination par un corps dur. Contrôle visuel hebdomadaire recommandé pour détecter l\'aggravation progressive.'
      },
      {
        n: '6',
        enonce: 'Définir un plan de maintenance préventive pour une pompe centrifuge de refoulement AEP de 15 kW, fonctionnant 6 000 h/an.',
        solution: 'Plan de maintenance préventive : (1) Quotidien (par télégestion) : surveillance débit, pression, courant électrique, état des alarmes. (2) Mensuel : mesure des vibrations sur les paliers (accéléromètre), contrôle visuel garniture mécanique (fuite), contrôle niveau huile paliers (si graissage à l\'huile), vérification étanchéité des raccords. (3) Annuel : contrôle alignement arbre pompe/moteur (tolérance < 0,05 mm décalage angulaire), contrôle du jeu en tête de roue, mesure du rendement par comparaison avec courbe constructeur, serrage des boulons de fixation. (4) Tous les 2 ans : remplacement de la garniture mécanique (6 000 h/an × 2 = 12 000 h, durée de vie garniture 8 000-15 000 h). (5) Tous les 4 ans : remplacement des roulements (24 000 h de fonctionnement, durée de vie L10 roulement qualité = 25 000-40 000 h). (6) Tous les 10 ans : révision complète (dépose, inspection roue, remplacement bagues d\'étanchéité, reconditionnement).'
      },
      {
        n: '7',
        enonce: 'Sur une installation de pompage, la consommation électrique mesurée le mois dernier est de 12 400 kWh pour 520 heures de fonctionnement (Q = 45 m³/h constant, H = 38 m). Calculer le rendement global et le comparer à la valeur nominale (η_nom = 68 %). Évaluer le coût de la surconsommation à 0,12 €/kWh.',
        solution: 'Pa_moyen = 12 400 / 520 = 23,85 kW. Ph = 45 × 38 / 367 = 4,659 kW. η_actuel = 4,659 / 23,85 = 0,195 = 19,5 %. Valeur anormalement basse ! Vérification : Pa_nominal = 4,659 / 0,68 = 6,85 kW. Surconsommation mensuelle = (23,85 - 6,85) × 520 = 17 × 520 = 8 840 kWh. Surcoût = 8 840 × 0,12 = 1 061 €/mois. Un rendement de 19,5 % signale une anomalie majeure (pompe tournant à vide partiellement, marche anormale, ou erreur de mesure). À investiguer en urgence.'
      },
      {
        n: '8',
        enonce: 'Comment différencier une dégradation due à l\'usure de la roue d\'une dégradation due à un colmatage partiel, en utilisant uniquement les mesures disponibles sur un SCADA (débit, pression, puissance électrique) ?',
        solution: 'Usure de la roue (jeux augmentés) : les recirculations internes augmentent → à même débit, H diminue ET Pa diminue légèrement (le fluide recirculant ne sort pas, moins d\'énergie transférée au réseau). La courbe H(Q) mesurée s\'aplatit et se déplace vers le bas. Colmatage partiel (obstruction) : l\'obstruction augmente les pertes de charge internes → à même consigne de marche, le débit mesuré baisse fortement et H tend à augmenter légèrement (la pompe "travaille" davantage contre la résistance interne), Pa augmente (plus de couple pour forcer le débit à travers l\'obstruction). Signature typique : débit chute brutalement + pression en sortie monte légèrement + Pa monte = obstruction. Débit chute progressivement + pression chute proportionnellement + Pa chute = usure progressive de roue.'
      }
    ]
  },

  'GEMEAU-072': {
    id: 'GEMEAU-072',
    titre: 'Sécurité d\'exploitation et organisation des interventions',
    fiche: {
      intro: 'L\'exploitation des ouvrages hydrauliques expose les techniciens à des risques graves : électriques, chimiques (chlore, soude, acides), mécaniques (organes mobiles) et liés aux espaces confinés (H₂S, manque d\'oxygène, noyade). Connaître et appliquer les procédures de sécurité est une obligation réglementaire et une nécessité vitale.',
      sections: [
        {
          titre: '1. Risques spécifiques des métiers de l\'eau',
          texte: 'Le secteur de l\'eau présente un profil de risques particulier lié à la nature des ouvrages et des produits manipulés. Le risque électrique est omniprésent dans les stations de pompage (armoires électriques HTB/HTA/BT, moteurs, variateurs). Les interventions sur les équipements électriques doivent suivre la norme NF C 18-510 (habilitations électriques B0, BR, BC, H0, etc.). Une habilitation électrique n\'est pas une compétence acquise une fois pour toutes — elle est réévaluée périodiquement et adaptée aux tensions rencontrées.\n\nLe risque chimique est présent dans toutes les installations de traitement. Le chlore gazeux (Cl₂) est un gaz jaune-verdâtre, plus lourd que l\'air, avec une LIE (Limite Inférieure d\'Explosivité) inexistante mais une valeur limite d\'exposition professionnelle (VLEP) court terme de 1 ppm. La soude (NaOH, solution concentrée 30-50 %) provoque des brûlures chimiques graves en cas de contact. L\'acide fluorosilicique (H₂SiF₆, fluoruration) est corrosif. Le dioxyde de chlore (ClO₂) est un oxydant puissant instable. Les réactifs doivent être stockés séparément, dans des rétentions étanches dimensionnées pour le volume du plus grand conteneur + 10 %.',
          sous_sections: []
        },
        {
          titre: '2. Les espaces confinés',
          texte: 'Un espace confiné est un espace fermé ou partiellement fermé non conçu pour l\'occupation humaine permanente, avec des accès limités et une ventilation naturelle insuffisante. Dans les métiers de l\'eau, les espaces confinés sont nombreux : regards, bâches de pompage, digesteurs, cuves de réactifs, collecteurs visitables, chambre de vannes souterraines.\n\nLes dangers sont : le manque d\'oxygène (O₂ < 19,5 % = danger, < 16 % = perte de conscience immédiate), la présence de gaz toxiques (H₂S dans les réseaux EU, CO dans les bâches avec matière organique en décomposition, CH₄ combustible), la noyade, le piégeage mécanique. La procédure réglementaire pour les espaces confinés est définie par la norme NF X08-070 (ou EN 15258 pour les espaces confinés en général) et le décret relatif à la prévention des risques. Obligatoirement : test d\'atmosphère avant entrée (détecteur multigaz portatif O₂/H₂S/CO/CH₄), ventilation forcée préalable, consignation de toutes les arrivées d\'eau et d\'énergie, présence d\'un guetteur en surface en contact permanent avec la personne à l\'intérieur, équipement de secours à portée (harnais, trépied, corde, ARI).',
          sous_sections: []
        },
        {
          titre: '3. Consignation et permis de travail',
          texte: 'La consignation (ou LOTO : Lock Out Tag Out) est la procédure qui garantit qu\'une installation est mise hors énergie et ne peut pas être remise en marche accidentellement pendant une intervention. Les étapes sont : (1) Identification et listage de toutes les sources d\'énergie (électrique, hydraulique, pneumatique, chimique, gravitaire) ; (2) Séparation : ouverture du disjoncteur principal, fermeture et cadenassage des vannes d\'isolement ; (3) Dissipation des énergies résiduelles (vidange de la conduite sous pression, décharge des condensateurs) ; (4) Cadenassage et étiquetage de chaque point de coupure (cadenas personnel de chaque intervenant) ; (5) Vérification de l\'absence de tension (VAT) avant intervention sur le circuit électrique.\n\nLe permis de travail est un document formel délivré par l\'exploitant à l\'intervenant, qui décrit la nature du travail, les consignations effectuées, les EPI requis, les risques identifiés et les mesures prises. Il est signé par le responsable d\'exploitation (chargé de consignation) et l\'intervenant (chargé de travaux). Pour les entreprises extérieures, un plan de prévention est obligatoire au-delà de 400 h/an ou pour les travaux dangereux (liste R4511-6 Code du travail).',
          sous_sections: []
        },
        {
          titre: '4. Organisation de l\'astreinte et gestion des incidents',
          texte: 'L\'astreinte est l\'organisation qui garantit une réponse rapide aux incidents en dehors des heures ouvrées. Le technicien d\'astreinte doit être joignable et capable d\'intervenir sous un délai défini (souvent < 1 h pour les incidents critiques AEP). Le contrat de service imposé par le cahier des charges DSP (Délégation de Service Public) ou la régie définit les délais d\'intervention selon la criticité.\n\nLa gestion d\'un incident suit une procédure : (1) Réception de l\'alarme (SCADA, téléphone usager) ; (2) Diagnostic à distance (SCADA) et évaluation de la criticité ; (3) Mesures conservatoires à distance (arrêt de pompe, fermeture de vanne) ; (4) Intervention sur site ; (5) Information des autorités (ARS si contamination eau potable, Préfet si risque de coupure prolongée, maire) ; (6) Information des abonnés (message automatisé, site internet) ; (7) Compte-rendu d\'incident et retour d\'expérience. Le retour d\'expérience (REX) est un outil majeur d\'amélioration continue : chaque incident est analysé pour en identifier les causes racines et définir des actions correctives.',
          sous_sections: []
        }
      ],
      points: [
        'Habilitation électrique NF C 18-510 : B0/BR/BC pour les BT, H0 pour la HTA — renouvelable périodiquement',
        'Chlore gazeux : VLEP court terme 1 ppm, plus lourd que l\'air, détecteur fixe obligatoire dans les locaux de chloration',
        'Espace confiné : O₂ > 19,5 % (danger < 19,5 %), H₂S < 5 ppm, CO < 25 ppm avant entrée obligatoire',
        'NF X08-070 : norme espaces confinés — test atmosphère, ventilation, consignation, guetteur, secours',
        'Consignation LOTO : 5 étapes — identifier, séparer, dissiper, cadenasser, vérifier',
        'Permis de travail : document formel signé avant toute intervention sur installation consignée',
        'Plan de prévention : obligatoire avec entreprise extérieure > 400 h/an ou travaux dangereux',
        'Astreinte : délai d\'intervention < 1 h pour incidents critiques AEP',
        'REX (retour d\'expérience) : analyse causes racines après chaque incident — amélioration continue',
        'Rétention chimique : volume = contenant le plus grand + 10 %, matériaux résistants aux produits stockés'
      ],
      formules: [
        'Volume rétention réactifs : V_ret ≥ V_plus_grand_conteneur + 10 % → [m³ ou L]',
        'VLEP chlore gazeux : 0,5 ppm (8h) et 1 ppm (court terme, 15 min) — NF EN 689',
        'Taux O₂ minimal : [O₂] ≥ 19,5 % vol. — en dessous, EPI air comprimé ARI obligatoire',
        'H₂S : VLEP 8h = 1 ppm, VLEP court terme = 5 ppm — odorant à faible concentration mais anesthésiant à forte dose'
      ],
      retenir: 'Habilitation électrique · LOTO · Permis de travail · Espace confiné · H₂S · O₂ · Chlore · EPI · Astreinte · REX · Plan de prévention · NF X08-070'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un technicien doit changer une garniture mécanique sur une pompe de 11 kW (400V triphasé) dans une station de pompage. Décrire la procédure de consignation électrique.',
        solution: '1. Identification : repérer le disjoncteur moteur de la pompe dans l\'armoire électrique (étiquetage préalable obligatoire). 2. Séparation : ouvrir le sectionneur/disjoncteur général de la pompe P1. 3. Cadenassage : apposer le cadenas personnel du technicien sur le sectionneur ouvert (et éventuellement un verrou de barrage sur l\'armoire). Apposer étiquette rouge "CONSIGNÉ - NE PAS MANŒUVRER - NOM + DATE". 4. Dissipation énergie résiduelle : décharger les condensateurs du variateur de fréquence si présent (attendre 5 min après coupure selon documentation constructeur). 5. Vérification absence de tension (VAT) : avec voltmètre ou testeur homologué NF C 18-510, mesurer U entre chaque phase et terre sur les bornes moteur — U = 0 V sur les 3 phases. 6. Mise à la terre et en court-circuit (MALT-CC) si tension > 1 000 V (ici 400 V BT : MALT optionnelle selon les procédures internes). Travail peut commencer.'
      },
      {
        n: '2',
        enonce: 'Avant une descente dans un regard de pompage EU de 3 m de profondeur, le détecteur multigaz indique : O₂ = 18,2 %, H₂S = 4 ppm, CO = 8 ppm, CH₄ = 1,2 % LEL. La descente est-elle autorisée ? Quelles mesures prendre ?',
        solution: 'Analyse : O₂ = 18,2 % < 19,5 % seuil → DANGER, descente interdite sans ARI (Appareil Respiratoire Isolant). H₂S = 4 ppm < VLEP CT 5 ppm → passable mais proche du seuil. CO = 8 ppm < VLEP 25 ppm → acceptable. CH₄ = 1,2 % LEL < 25 % LEL → pas de risque d\'explosion immédiat mais à surveiller. Bilan : descente interdite en raison du déficit en O₂. Mesures : (1) Ventilation forcée pendant 30 min minimum (ventilateur d\'extraction ou d\'insufflation) ; (2) Nouveau test d\'atmosphère après ventilation ; (3) Si O₂ remonte > 20 % et H₂S < 1 ppm : descente autorisée avec détecteur portatif sur l\'intervenant et guetteur en surface ; (4) Si l\'O₂ reste < 19,5 % après ventilation : intervention en ARI obligatoire.'
      },
      {
        n: '3',
        enonce: 'Un sac de 25 kg de coagulant en poudre (chlorure ferrique FeCl₃) se renverse dans la salle de dosage. Le produit est irritant pour les voies respiratoires et corrosif pour la peau. Décrire la procédure de gestion de l\'accident.',
        solution: '1. Protection de l\'intervenant : port du masque FFP2 ou demi-masque avec cartouche acide, lunettes de protection étanches, gants nitrile, combinaison de protection. 2. Confinement : fermer les portes et fenêtres pour éviter la dispersion par courant d\'air. 3. Nettoyage : ne pas souffler la poudre (aérosolisation des particules fines). Ramasser à sec avec pelle et balai humidifié ; placer dans sac plastique double fermé. 4. Neutralisation : pour les traces résiduelles, rincer à l\'eau abondante (FeCl₃ + eau → Fe(OH)₃ + HCl dilué). Recueillir les eaux de lavage (ne pas les jeter dans le réseau sans neutralisation si concentration élevée). 5. Si contact cutané : rincer immédiatement 15 min à grande eau — consulter la fiche de données sécurité (FDS) rubrique 4. 6. Déclarer l\'incident dans le registre de sécurité. 7. REX : vérifier les procédures de manipulation et l\'adéquation de la ventilation de la salle de dosage.'
      },
      {
        n: '4',
        enonce: 'L\'astreinte d\'une régie AEP reçoit une alarme à 2h15 : "Niveau réservoir = 12 % (seuil bas : 20 %)". Le débit de production mesuré est nul alors que les pompes de captage affichent "en marche". Décrire le diagnostic et les actions prioritaires.',
        solution: 'Situation : pompes en marche mais débit nul + niveau réservoir qui baisse → rupture du débit de production. Diagnostic SCADA à distance : (1) Vérifier le débit du captage sur les débitmètres en ligne — si 0 m³/h confirmé alors que pompes en marche → problème d\'aspiration (niveau nappe bas, clapet colmaté, pompe désamorcée) ou coupure conduite (casse) ; (2) Vérifier les pressions sur la conduite de refoulement — si pression très basse (< 0,5 bar) sur toute la ligne → casse de conduite probable ; (3) Vérifier les alarmes de défaut pompe (surcharge, température, vibration). Actions prioritaires : (1) Si forte suspicion de casse de conduite : fermer les vannes de sectionnement pour limiter la perte d\'eau ; prévenir le maire et l\'ARS (risque de coupure > 6 h) ; déclencher plan de secours (citerne mobile) ; (2) Si désamorçage : tenter un réamorçage à distance (séquence de démarrage alternée) ; (3) Intervention physique sur site dans l\'heure pour diagnostic visuel. Durée avant coupure au robinet = niveau_actuel × V_réservoir / Q_consommation_nocturne à estimer.'
      },
      {
        n: '5',
        enonce: 'Un agent d\'exploitation doit intervenir dans une station de pompage pour remplacer un clapet anti-retour sur la conduite de refoulement (DN100, pression de service 6 bar). Identifier toutes les consignations hydrauliques nécessaires.',
        solution: 'Consignations hydrauliques pour accès conduite DN100 sous 6 bar : 1. Consignation côté refoulement : fermer la vanne d\'isolement aval du clapet (vanne 1, côté réseau), placer cadenas + étiquette. 2. Consignation côté aspiration : arrêter la pompe + consignation électrique (LOTO) pour éviter tout redémarrage intempestif. Fermer la vanne d\'aspiration de la pompe si présente. 3. Dépressurisation : ouvrir un purgeur ou un robinet de vidange entre les deux vannes pour mettre à l\'atmosphère la section à démonter. Attendre que la pression soit nulle (mesurer au manomètre 0 bar). 4. Vidange : laisser s\'écouler l\'eau résiduelle dans la conduite dans un seau ou via vanne de vidange de fond. 5. Vérification : confirmer pression nulle et eau stagnante avant démontage des brides. 6. Travail : démonter et remplacer le clapet. 7. Remise en service : refermer les purgeurs, remplir lentement la section, purger l\'air, remettre progressivement en pression, rouvrir les vannes.'
      },
      {
        n: '6',
        enonce: 'Calculer le volume de la rétention chimique pour un local de dosage contenant : 1 bidon de NaOCl de 1 000 L (eau de Javel 13 %), 2 bidons de PAC de 500 L (polyaluminium chloride), 1 fût d\'acide chlorhydrique HCl de 200 L. Les produits sont-ils compatibles entre eux dans la même rétention ?',
        solution: 'Le contenant le plus grand est le bidon de NaOCl = 1 000 L. Volume rétention minimum = 1 000 + 10 % = 1 100 L (norme : volume du plus grand + 10 %). En pratique, on prend souvent le volume total de tous les contenants divisé par 2, ou le volume du plus grand + 100 L. Compatibilité des produits : NaOCl (basique, oxydant) + HCl (acide fort) → INCOMPATIBLES — réaction violente si mélangés, dégagement de chlore gazeux toxique. Ces deux produits ne peuvent pas être dans la même rétention. Solution : créer deux rétentions séparées (1) NaOCl + PAC dans la même rétention (tous deux neutres à basiques, pas de réaction dangereuse) ; (2) HCl seul dans une rétention séparée avec détecteur de chlore gazeux. Volumes : rétention 1 = 1 000 + 100 L = 1 100 L min ; rétention 2 = 200 + 20 L = 220 L min.'
      },
      {
        n: '7',
        enonce: 'Définir les éléments obligatoires d\'un plan de prévention pour une entreprise de maintenance externe intervenant pour révision annuelle de la station de pompage (durée estimée : 2 jours, 3 personnes).',
        solution: 'Plan de prévention obligatoire (décret R4512 Code du travail) pour travaux dangereux même < 400 h : 1. Inspection commune préalable des lieux (avant les travaux, avec les deux chefs d\'établissement). 2. Contenu du plan : identification des entreprises (nom, adresse, responsable) ; nature des travaux (révision pompes, remplacement garnitures) ; date et durée ; liste des risques identifiés : risque électrique (consignation, habilitation requise), risque chimique (réactifs présents), risque espace confiné (regards à proximité), risque chute de hauteur (travaux en fosse) ; mesures de prévention pour chaque risque ; EPI requis ; organisation des secours (point de rassemblement, numéro SAMU/sapeurs-pompiers) ; consignes en cas d\'accident. 3. Signatures : responsable exploitation de la régie + responsable de l\'entreprise extérieure. 4. Affichage sur le chantier pendant toute la durée des travaux. 5. Suivi : réunions de coordination si travaux > 1 jour.'
      },
      {
        n: '8',
        enonce: 'Une usine AEP reçoit une alerte : un employé a ingéré accidentellement de l\'eau de Javel (NaOCl 9,6 %) lors du remplissage d\'un jerrican. Quelles actions immédiates et qui prévenir ?',
        solution: 'Actions immédiates pour ingestion eau de Javel : 1. NE PAS faire vomir (le vomissement risque d\'aggraver les brûlures de l\'œsophage au retour). 2. Rincer la bouche et faire boire de l\'eau (150-200 mL pour diluer). 3. Appeler immédiatement le 15 (SAMU) ou le 18 (Pompiers) OU le 3114 (Centre Antipoison si disponible, anciennement 0 825 812 822). 4. Consulter la Fiche de Données de Sécurité (FDS) du produit section 4 (premiers secours) et communiquer les informations au SAMU : nature du produit (NaOCl 9,6 %), quantité estimée ingérée, symptômes actuels. 5. Ne pas laisser la personne seule — surveiller sa respiration et son état de conscience. 6. Transporter à l\'hôpital avec la FDS. 7. Après l\'incident : déclaration d\'accident du travail dans les 24 h, déclaration à l\'inspection du travail, REX et révision des procédures de manipulation (utilisation de pompette de prélèvement, interdiction de succion à la bouche).'
      }
    ]
  }

};
