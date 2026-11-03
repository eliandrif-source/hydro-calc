var GEMEAU_B11 = {

  'GEMEAU-093': {
    id: 'GEMEAU-093',
    titre: 'Diagnostic d\'un projet d\'assainissement non collectif',
    fiche: {
      intro: 'L\'assainissement non collectif (ANC) concerne les habitations non raccordées au réseau public, soit environ 5,5 millions d\'installations en France. Le technicien GEMEAU intervient pour le contrôle, la conception et la réhabilitation de ces systèmes dans le cadre du SPANC (Service Public d\'Assainissement Non Collectif).',
      sections: [
        {
          titre: '1. Contexte réglementaire de l\'ANC',
          texte: 'La réglementation de l\'assainissement non collectif a été profondément réformée depuis la loi sur l\'eau et les milieux aquatiques (LEMA) du 30 décembre 2006. Cette loi a rendu obligatoire :\n\n**Le SPANC** (Service Public d\'Assainissement Non Collectif), mis en place par toutes les communes avant le 31 décembre 2005. Le SPANC est un service public industriel et commercial (SPIC) qui assure 4 missions :\n1. Contrôle de conception des nouvelles installations (avant travaux)\n2. Contrôle de bonne exécution (vérification du chantier)\n3. Contrôle périodique de bon fonctionnement (diagnostic tous les 8-10 ans)\n4. Accompagnement des usagers en vue de réhabilitation\n\nL\'**arrêté du 7 septembre 2009** (modifié par l\'arrêté du 27 avril 2012) définit les prescriptions techniques applicables aux ANC pour les installations de 1 à 20 EH, les filières autorisées, les distances à respecter et les obligations de contrôle.\n\nLa **vente immobilière** déclenche un contrôle obligatoire par le SPANC : si l\'installation est non conforme avec risque sanitaire ou environnemental, le propriétaire doit réaliser les travaux dans un délai d\'1 an après la signature de l\'acte de vente.',
          sous_sections: []
        },
        {
          titre: '2. Étude de sol et tests d\'aptitude',
          texte: 'Avant de dimensionner une filière ANC, on réalise une étude de définition du sol (ou étude hydrogéologique) comprenant :\n\n**Le sondage pédologique** à la tarière manuelle ou mécanique : on extrait des carottes de sol à différentes profondeurs (0-30 cm, 30-60 cm, 60-90 cm) pour identifier la texture, la structure, la couleur et la présence de traces d\'oxydation/réduction (taches rouille = battement de nappe). Les informations recueillies permettent de classifier le sol (perméable, semi-perméable, imperméable) et d\'identifier les horizons favorables à l\'infiltration.\n\n**Le test de perméabilité (test de percolation ou Porchet)** : on creuse un trou de dimension normée (30 cm × 30 cm ou cylindrique Ø10 cm) dans l\'horizon filtrant identifié, on le remplit d\'eau et on mesure la vitesse de descente du plan d\'eau. La perméabilité K (en mm/h ou m/s) est calculée.\n\nClassification selon la perméabilité :\n- K > 500 mm/h (très perméable : grave, sable grossier) : risque de pollution du sous-sol, filtration insuffisante → filière inadaptée ou filière avec gros volume\n- 10 < K < 500 mm/h (perméable à semi-perméable) : filière traditionnelle applicable\n- 1 < K < 10 mm/h (semi-perméable) : filtres compacts ou filières adaptées\n- K < 1 mm/h (imperméable : argile, roche) : filière hors-sol obligatoire (tertre filtrant, microstation)',
          sous_sections: [
            {
              titre: '2.1 Distances réglementaires à respecter',
              texte: 'L\'arrêté du 7 septembre 2009 impose des distances minimales entre le dispositif d\'épandage et certains éléments : ≥ 35 m d\'un captage d\'eau potable (puits, forage, source) ; ≥ 3 m de tout bâtiment ou arbre ; ≥ 3 m de la limite de propriété (accord voisin envisageable pour rapprochement) ; hors zone inondable. Ces distances ne peuvent pas être réduites, sauf cas dérogatoires justifiés par une étude hydrogéologique.'
            }
          ]
        },
        {
          titre: '3. Données de dimensionnement',
          texte: 'Le dimensionnement d\'une filière ANC est basé sur le nombre de pièces principales (PP) de l\'habitation selon l\'arrêté de 2012 :\n- ≤ 5 PP : 3 m³ de fosse toutes eaux (FTE), surface d\'épandage minimum selon filière\n- 6-7 PP : 4 m³ de FTE\n- 8-9 PP : 5 m³ de FTE\n\nLe débit de référence est de 150-200 L/PP/j, soit 750-1 000 L/j pour 5 PP.\n\nLe résultat de l\'étude de sol fixe la filière adaptée. Elle doit être décrite dans une note de dimensionnement jointe au dossier SPANC, qui comprend :\n1. Description du terrain (pédologie, topographie, hydrologie)\n2. Résultats des tests de perméabilité\n3. Filière retenue et dimensionnement\n4. Plan de masse côté\n5. Descriptif des matériaux et mise en œuvre',
          sous_sections: []
        }
      ],
      points: [
        'SPANC = service public obligatoire depuis 2005, 4 missions de contrôle ANC',
        'Arrêté 7 sept. 2009 = prescriptions techniques pour 1 à 20 EH',
        'Vente immobilière = contrôle SPANC obligatoire, 1 an pour travaux si non conforme',
        'Sondage pédologique = texture, structure, traces d\'oxydation-réduction de la nappe',
        'Test de perméabilité (Porchet) : K > 10 mm/h = filière traditionnelle applicable',
        'K < 1 mm/h (argile/roche) = filière hors-sol obligatoire (tertre ou microstation)',
        'FTE ≥ 3 m³ pour 5 PP, ≥ 4 m³ pour 6-7 PP, ≥ 5 m³ pour 8-9 PP',
        'Distances réglementaires : 35 m d\'un captage, 3 m d\'un bâtiment ou de la limite de propriété',
        'Dossier SPANC = pédologie + tests + filière + plan + descriptif matériaux',
        'Débit de référence : 150-200 L/PP/j pour le dimensionnement de l\'épandage'
      ],
      formules: [
        'Surface tranchées filtrantes : S = 5 m²/EH × N_EH → [m²] (arrêté 2012 pour K = 15-500 mm/h)',
        'Volume FTE : V = 3 m³ pour N_PP ≤ 5, +1 m³ par tranche de 2 PP supplémentaires → [m³]',
        'Perméabilité Porchet : K = (ln(y1/y2)) / (t2-t1) × r²/2h → [m/s] ; r = rayon, h = hauteur eau'
      ],
      retenir: 'SPANC = 4 missions · K > 10 mm/h = tranchées filtrantes · K < 1 mm/h = hors-sol · FTE ≥ 3 m³ · 35 m d\'un captage · Vente = contrôle obligatoire'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un particulier veut construire une maison de 6 pièces principales sur un terrain dont le test de percolation donne K = 8 mm/h. Le terrain est à 28 m d\'un puits de voisin et à 4 m de la limite de propriété. (a) Quelle filière ANC est compatible avec K = 8 mm/h ? (b) Quelles distances réglementaires posent problème ? (c) Quelle est la taille de la FTE nécessaire ?',
        solution: '(a) K = 8 mm/h < 10 mm/h → filière traditionnelle par tranchées filtrantes difficile. On se situe en zone semi-perméable : filière compacte (filtre à copeaux de coco, filtre à zéolite) ou tertre filtrant recommandés.\n(b) Distance au puits : 28 m < 35 m réglementaires → NON CONFORME. Distance limite de propriété : 4 m > 3 m → OK.\n(c) 6 PP : FTE ≥ 4 m³. Choix recommandé : FTE 4 m³ + microstation ou filtre compact agréé, avec dérogation ou déplacement si accord avec le voisin propriétaire du puits.'
      },
      {
        n: '2',
        enonce: 'Un SPANC réalise un contrôle de bon fonctionnement. L\'installation comporte une FTE de 3 m³ et des tranchées filtrantes de 18 m de long (largeur 0,60 m). La maison a 5 pièces principales, le test de percolation K = 35 mm/h. (a) La FTE est-elle conforme en volume ? (b) La surface d\'épandage est-elle suffisante ? (c) Quelle est la cote de conformité SPANC ?',
        solution: '(a) 5 PP → FTE minimale = 3 m³. FTE installée = 3 m³ → CONFORME.\n(b) Nombre d\'EH pour 5 PP ≈ 5 EH (estimation). Surface réglementaire = 5 × 5 = 25 m². Surface installée = 18 × 0,60 = 10,8 m² < 25 m² → NON CONFORME (surface insuffisante).\n(c) Cote SPANC : non-conforme nécessitant des travaux (défaut d\'épandage sous-dimensionné). Le propriétaire doit réaliser une extension des tranchées ou changer de filière dans un délai fixé par le SPANC.'
      }
    ]
  },

  'GEMEAU-094': {
    id: 'GEMEAU-094',
    titre: 'Filières traditionnelles et traitement par le sol',
    fiche: {
      intro: 'Les filières d\'assainissement non collectif traditionnelles reposent sur le traitement des eaux usées par le sol. Après un prétraitement en fosse toutes eaux, les eaux pré-épurées sont infiltrées dans un massif filtrant où les bactéries du sol achèvent l\'épuration par dégradation biologique et rétention physique.',
      sections: [
        {
          titre: '1. La fosse toutes eaux (FTE)',
          texte: 'La fosse toutes eaux (ou fosse septique toutes eaux) est le premier maillon indispensable de toute filière ANC. Elle reçoit toutes les eaux usées de l\'habitation (eaux vannes WC + eaux ménagères lave-vaisselle, cuisine, douche, bain, lave-linge).\n\n**Fonctionnement** : la FTE réalise un prétraitement par décantation (sédiment de boues lourdes au fond) et flottation (croûtes de graisses et matières en surface). La partie médiane (effluent clarifiée) s\'écoule vers le dispositif d\'épandage. Un filtre à chicanes ou un filtre à chaussettes (géotextile) limite le passage des particules vers l\'épandage.\n\n**Composition des boues en FTE** : 3-6 % de siccité. Volume des boues : ≈ 100-200 L/an pour une maison 5 PP. La FTE doit être vidangée tous les 3-4 ans (obligation contractuelle dans le cadre du SPANC). La vidange est réalisée par camion pompe vacuum agréé ; le contenu est transporté et traité dans une STEP ou valorisé en compostage.\n\n**Composition de l\'effluent sortant de FTE** : DBO5 ≈ 120-180 mg/L (réduction de 40-50 % par rapport aux eaux brutes), MES ≈ 50-100 mg/L. L\'effluent est encore chargé et doit impérativement être traité par le dispositif d\'épandage.',
          sous_sections: []
        },
        {
          titre: '2. Les tranchées filtrantes',
          texte: 'Les tranchées filtrantes sont des tranchées drainantes remplies d\'un matériau filtrant (gravier roulé 10-40 mm) dans lequel est posé un tuyau de dispersion à joints ouverts ou perforé. L\'effluent FTE s\'écoule dans les tranchées et percolé dans le sol environnant.\n\n**Dimensionnement** (arrêté 2012) :\n- Surface d\'épandage : 5 m²/EH pour K entre 15 et 500 mm/h\n- Tranchées en parallèle (pas en série), largeur 0,50-0,60 m, profondeur de la base de gravier ≥ 0,70 m / nappe phréatique\n- Tuyau à joints ouverts DN100 ou géotextile à fentes\n- Pente longitudinale des tranchées : 0,2-0,5 % pour distribution uniforme\n\n**Matériaux** :\n- Gravier roulé 10-40 mm (non calcaire pour zones acides) : hauteur ≥ 20 cm au-dessus et en dessous du tuyau\n- Géotextile anti-contamination (250 g/m²) séparant le gravier du sol naturel\n- Remblai en terre végétale non compactée (permet l\'aération du sol)\n\n**Entretien** : le sol des tranchées peut se colmater progressivement (biofilm + particules). Une inspection visuelle périodique (refus en surface, odeurs) permet de détecter un colmatage précoce. La remise en état nécessite le remplacement du gravier filtrant.',
          sous_sections: []
        },
        {
          titre: '3. Variantes : lit filtrant drainé et tertre filtrant',
          texte: '**Le lit filtrant drainé horizontal** est une variante des tranchées adaptée aux sols peu perméables (K < 15 mm/h). L\'effluent percolé est recueilli par un drain de collecte en fond de lit et rejeté vers un exutoire (cours d\'eau, fossé, puits d\'infiltration en fond de tertre). La surface de sable fin (0/4 mm lavé, 60-80 cm d\'épaisseur) réalise la filtration. Surface ≈ 5 m²/EH.\n\n**Le tertre filtrant hors-sol** est destiné aux sols imperméables (K < 1 mm/h) ou à nappe affleurante. On construit un talus artificiel de 0,70-1,20 m de hauteur rempli de sable filtrant importé. Les eaux traitées sont collectées en fond de tertre et rejetées vers un exutoire. Emprise foncière importante (10-15 m²/EH). Réhabilitation possible en milieu contraint.\n\n**Surface et contexte** : pour une maison de 5 EH :\n- Tranchées filtrantes : 5 × 5 = 25 m² (K > 15 mm/h)\n- Lit filtrant drainé : 5 × 5 = 25 m² (K = 5-15 mm/h)\n- Tertre filtrant : 5 × 10 à 15 = 50-75 m² (K < 5 mm/h)',
          sous_sections: []
        }
      ],
      points: [
        'FTE = prétraitement obligatoire (décantation + flottation) avant tout dispositif d\'épandage',
        'FTE ≥ 3 m³ pour 5 PP, vidange obligatoire tous 3-4 ans',
        'Tranchées filtrantes : 5 m²/EH, gravier 10-40 mm, K = 15-500 mm/h',
        'Tranchées parallèles (jamais en série), pente 0,2-0,5 %, largeur 0,50-0,60 m',
        'Géotextile anti-contamination entre gravier et sol naturel',
        'Lit filtrant drainé : sol peu perméable K = 5-15 mm/h, drain de collecte en fond',
        'Tertre filtrant hors-sol : sol imperméable K < 1 mm/h ou nappe affleurante',
        'Effluent FTE : DBO5 ≈ 150 mg/L, MES ≈ 75 mg/L, encore très chargé',
        'Distance nappe / fond de tranchée : ≥ 0,70 m de distance verticale',
        'Colmatage tranchées = refus en surface ou odeurs = inspection + remplacement gravier'
      ],
      formules: [
        'Surface tranchées/lit filtrant : S = 5 × N_EH → [m²] pour K = 15–500 mm/h',
        'Volume gravier tranchée : V_grav = L × l × (e_sous + e_dessus) → [m³] ; e ≈ 0,20 m chacun',
        'Volume FTE : V = 3 + (N_PP - 5)/2 → [m³] arrondi au m³ supérieur pour N_PP > 5'
      ],
      retenir: 'FTE + épandage = filière de base · 5 m²/EH pour K > 15 mm/h · Gravier 10-40 mm · Tertre si K < 1 mm/h · Vidange FTE tous 3-4 ans · 0,70 m au-dessus de la nappe'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Une maison de 4 pièces principales doit être équipée d\'un ANC. K = 45 mm/h. La nappe phréatique est à 1,20 m de profondeur. (a) Quelle filière est adaptée ? (b) Dimensionnez la surface d\'épandage (4 EH). (c) Définissez la profondeur maximale de la base du gravier des tranchées.',
        solution: '(a) K = 45 mm/h → entre 15 et 500 mm/h : TRANCHÉES FILTRANTES adaptées.\n(b) Surface = 5 × 4 = 20 m². On peut faire 4 tranchées de 8 m × 0,60 m = 19,2 m² ≈ 20 m² (en ajustant légèrement la longueur).\n(c) Distance nappe requise ≥ 0,70 m. Nappe à 1,20 m de profondeur. Profondeur maximale de la base du gravier = 1,20 - 0,70 = 0,50 m. Le fond des tranchées sera donc à 0,50 m de profondeur, avec le sol naturel à 0,50 m. Le tuyau est posé dans le gravier à environ 0,30-0,40 m de profondeur.'
      },
      {
        n: '2',
        enonce: 'Une FTE d\'une maison de 5 personnes est vidangée après 4 ans. Le volume des boues extraites est de 600 L. Le technicien estime que le taux de remplissage maximal acceptable est de 50 % du volume utile de la FTE (3 m³ = 3 000 L de volume utile). (a) La fréquence de vidange était-elle adéquate ? (b) Calculez la production annuelle de boues par personne. (c) Si la FTE avait 4 m³, quel aurait été le délai recommandé pour ne pas dépasser 50 % de remplissage ?',
        solution: '(a) Volume boues = 600 L après 4 ans. 50 % du volume utile = 1 500 L. Or 600 L < 1 500 L → la fréquence de 4 ans était adéquate (taux de remplissage 20 % seulement — vidange prématurée possible).\n(b) Production annuelle = 600 / 4 ans / 5 personnes = 30 L/personne/an.\n(c) FTE 4 m³ : volume utile = 4 000 L. Seuil 50 % = 2 000 L. Délai = 2 000 / (30 × 5) = 2 000 / 150 = 13,3 ans. Recommandation : vidange tous 10-12 ans pour cette FTE 4 m³.'
      }
    ]
  },

  'GEMEAU-095': {
    id: 'GEMEAU-095',
    titre: 'Dispositifs agréés et comparaison des filières',
    fiche: {
      intro: 'Depuis l\'arrêté du 7 septembre 2009, de nombreuses filières d\'assainissement non collectif compactes bénéficient d\'un agrément ministériel délivré après évaluation par des organismes accrédités (LCPC, CERIB). Ces filières offrent des alternatives aux tranchées filtrantes traditionnelles pour les sols contraignants ou les terrains de petite superficie.',
      sections: [
        {
          titre: '1. Les filières agréées : classification',
          texte: 'Les filières agréées sont classées selon le type de traitement réalisé :\n\n**Type 4 seul** : traitement primaire et secondaire assuré par la filière, sans dispositif de dispersion. Nécessite un exutoire pour le rejet des eaux traitées (fossé, cours d\'eau, puits d\'infiltration) ou un sol adéquat en aval. Exemples : filtres compacts à copeaux de coco ou à zéolite, dont l\'effluent de qualité > aux tranchées filtrantes peut être infiltré sur de petites surfaces.\n\n**Type 3+4** : traitement primaire + secondaire complet, éventuellement avec nitrification poussée, équivalent à une microstation. L\'effluent est rejeté vers un exutoire ou épandu après traitement.\n\n**Microstations (type 3+4)** :\n- **Boues activées** : mini-bassin d\'aération + clarificateur secondaire intégré. Traitement compact (2-5 m²), effluent de qualité (DBO5 < 25 mg/L si bien réglée). Consommation électrique ≈ 0,7-1,5 kWh/j. Entretien semestriel par prestataire agréé. Production de boues à vidanger annuellement.\n- **Cultures fixées** : lit bactérien rotatif (disques biologiques) ou lit immerge à garnissage. Plus robustes aux variations de charge, moins sensibles aux coupures électriques.\n- **Filtres compacts** : filtres à matériaux naturels (copeaux de bois, coco, écorce, zéolite) dimensionnés selon le flux hydraulique et organique. Pas d\'énergie pour les filtres passifs.',
          sous_sections: []
        },
        {
          titre: '2. Tableau comparatif des filières',
          texte: 'Chaque filière présente des avantages et des contraintes :\n\n| Filière | Surface (m²/EH) | Énergie | Entretien | Coût install. (5 EH) | Qualité effluent |\n|---|---|---|---|---|---|\n| Tranchées filtrantes | 5 | Non | Faible | 4 000-8 000 € | Bonne si sol adapté |\n| Lit filtrant drainé | 5 | Non | Faible | 5 000-9 000 € | Bonne |\n| Tertre filtrant | 10-15 | Non | Faible | 8 000-15 000 € | Bonne |\n| Filtre compact (coco, zéolite) | 1-3 | Faible/Non | Moyen | 6 000-10 000 € | Bonne à très bonne |\n| Microstation boues activées | 2-4 | Oui | Élevé | 7 000-12 000 € | Très bonne |\n| Microstation cultures fixées | 2-4 | Oui | Moyen | 7 000-12 000 € | Très bonne |\n| FPR (filtre planté roseaux) | 2,5-5 | Non | Très faible | 8 000-15 000 € | Excellente |\n\nLe coût global sur 20 ans inclut l\'investissement initial, les coûts d\'entretien annuels (150-500 €/an pour microstation, 50-150 €/an pour filière passive) et les vidanges (200-500 €/vidange).\n\nLe choix de filière doit prendre en compte : la perméabilité du sol, la superficie disponible, la présence d\'un exutoire, les aspects réglementaires locaux et l\'acceptabilité par le propriétaire.',
          sous_sections: []
        },
        {
          titre: '3. Conditions d\'accès et vérification de l\'agrément',
          texte: 'Pour être installée légalement, une filière agréée doit :\n1. Figurer sur la liste des dispositifs ayant obtenu un avis favorable du ministère en charge de l\'environnement (liste disponible sur le site du ministère et du CSTB)\n2. Être dimensionnée selon les prescriptions de sa fiche d\'utilisation\n3. Être installée par un professionnel RGE (Reconnu Garant de l\'Environnement) ou compétent en ANC\n4. Faire l\'objet d\'un dossier de contrôle avant travaux auprès du SPANC\n\nLa marque NF (filière certifiée NF DTU 64.1) ou les marquages CE et ACS (contact eau potable pour les matériaux) attestent de la conformité des matériaux utilisés.',
          sous_sections: []
        }
      ],
      points: [
        'Filières agréées depuis l\'arrêté du 7 sept 2009, évaluées par organismes accrédités',
        'Type 4 seul = traitement sans exutoire requis pour dispersion ; type 3+4 = microstation',
        'Microstations boues activées : compact (2-4 m²), énergivore, entretien semestriel',
        'Filtres compacts (coco, zéolite) : passifs, 1-3 m²/EH, bon rapport qualité/prix',
        'FPR = excellente qualité effluent, peu d\'entretien, mais 2,5-5 m²/EH',
        'Coût installation 5 EH : 4 000-15 000 € selon filière',
        'Vérifier agrément = liste MTES, fiche d\'utilisation, installateur RGE',
        'Entretien microstation : prestataire agréé 2 fois/an obligatoire',
        'Choix filière = perméabilité sol + surface + exutoire + budget',
        'NF DTU 64.1 = norme de référence pour la mise en oeuvre des filières ANC'
      ],
      formules: [
        'Coût global 20 ans : C_total = C_install + (C_annuel × 20) + (C_vidange × n_vidanges) → [€]',
        'Surface microstation : S = 2 à 4 m² (emprise totale cuve + regard, hors épandage) → [m²]'
      ],
      retenir: 'Agrément ministériel requis · Type 4 = sans exutoire · Microstation = compact + énergie + entretien · FPR = qualité excellente + peu entretien · RGE obligatoire'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un propriétaire a un terrain de 600 m² dont 200 m² sont constructibles. K = 3 mm/h (sol semi-imperméable). Il n\'y a pas de fossé ni de cours d\'eau à proximité. Quelle(s) filière(s) ANC peut-on lui proposer ? Justifiez.',
        solution: 'K = 3 mm/h < 10 mm/h : tranchées filtrantes et lit filtrant drainé classiques ne sont pas applicables. Pas de fossé ni cours d\'eau : rejet vers exutoire impossible.\nOptions adaptées :\n1. Tertre filtrant hors-sol : applicable (K < 5 mm/h) mais surface 10-15 m²/EH × 5 EH = 50-75 m² — compatible avec l\'espace disponible.\n2. Filtre compact avec infiltration lente : certains filtres agréés permettent un rejet par infiltration même à K = 3 mm/h sur de petites surfaces (≈ 3-5 m²).\n3. Microstation avec puits d\'infiltration en aval : le puits creusé dans une couche plus perméable en profondeur peut servir d\'exutoire.\nRecommandation : microstation cultures fixées + puits d\'infiltration (économie sur la surface d\'emprise).'
      },
      {
        n: '2',
        enonce: 'Comparez deux filières pour une maison de 5 EH sur 20 ans. Filière A : tranchées filtrantes (coût installation 6 500 €, entretien 80 €/an, vidange FTE 300 € tous 4 ans). Filière B : microstation boues activées (coût installation 9 500 €, contrat entretien 350 €/an, vidange annuelle 200 €). Laquelle est la plus économique sur 20 ans ?',
        solution: 'Filière A (tranchées) : C = 6 500 + (80 × 20) + (300 × 5 vidanges) = 6 500 + 1 600 + 1 500 = 9 600 €.\nFilière B (microstation) : C = 9 500 + (350 × 20) + (200 × 20 vidanges) = 9 500 + 7 000 + 4 000 = 20 500 €.\nFilière A est plus économique de 20 500 - 9 600 = 10 900 € sur 20 ans, sous réserve que le sol soit adapté aux tranchées (K ≥ 15 mm/h). Si le sol impose une microstation (K < 10 mm/h), le surcoût est inévitable.'
      }
    ]
  },

  'GEMEAU-096': {
    id: 'GEMEAU-096',
    titre: 'Contrôle, entretien et réhabilitation des installations ANC',
    fiche: {
      intro: 'Le SPANC effectue des contrôles périodiques pour s\'assurer du bon fonctionnement des installations ANC. La détection précoce des dysfonctionnements permet d\'éviter les pollutions des eaux souterraines ou de surface et de prévenir les troubles sanitaires liés à des rejets d\'eaux usées non traitées.',
      sections: [
        {
          titre: '1. Contrôle de bon fonctionnement par le SPANC',
          texte: 'Le contrôle de bon fonctionnement est réalisé sur site, généralement tous les 8-10 ans, par un agent du SPANC habilité. Il examine :\n\n**Accessibilité et état général** : accès aux regards, état de la FTE (couvercles, ventilations), absence de végétation pénétrant dans les ouvrages.\n\n**Niveau des boues dans la FTE** : si les boues occupent plus de 50 % du volume utile, vidange recommandée. Le technicien utilise un pige (tube creux gradué) pour mesurer la hauteur des boues et des flottants.\n\n**Odeurs** : une odeur nauséabonde autour de la FTE ou des regards peut indiquer une mauvaise ventilation (bouchon dans la colonne de chute ou l\'évent) ou une FTE pleine.\n\n**Refus en surface** : la présence d\'eau usée en surface (flaques, sols gorgés, verdure luxuriante) sur la zone d\'épandage indique un colmatage des tranchées.\n\n**Distances de sécurité** : vérification que les distances réglementaires sont toujours respectées (nouvelle construction, puits créé postérieurement).\n\n**Grille de diagnostic et cotation** :\n- Conforme (C) : installation fonctionnant normalement\n- Non conforme sans risque immédiat (NC1) : défaut mineur (exemple : ventilation insuffisante), surveillance ou maintenance recommandée\n- Non conforme avec risque sanitaire ou environnemental (NC2) : rejet direct, colmatage total, FTE non étanche — travaux obligatoires dans un délai fixé',
          sous_sections: []
        },
        {
          titre: '2. Entretien préventif',
          texte: 'L\'entretien d\'une installation ANC comprend plusieurs actions régulières :\n\n**Entretien de la FTE** :\n- Vidange complète tous les 3-4 ans (ou lorsque les boues dépassent 50 % du volume) par camion vacuum agréé\n- Vérification de l\'étanchéité et de la ventilation\n- Nettoyage du filtre à chicanes si présent\n\n**Entretien du dispositif de répartition** :\n- Vérification que le tuyau de répartition n\'est pas bouché (regard avant épandage)\n- Nettoyage au jet haute pression si nécessaire\n\n**Entretien de la zone d\'épandage** :\n- Ne pas planter d\'arbres sur la zone (racines pénétrant dans les tranchées)\n- Ne pas circuler avec des engins lourds (compactage du sol)\n- Ne pas bétonner ou imperméabiliser au-dessus des tranchées\n- Ne pas irriguer la surface en période sèche (risque de saturation)\n\n**Entretien d\'une microstation** :\n- Contrat d\'entretien semestriel obligatoire avec le fabricant ou un prestataire agréé\n- Vérification des niveaux d\'alarme, des membranes, du compresseur\n- Vidange des boues selon la fréquence prescrite par le fabricant (annuelle à biennale)',
          sous_sections: []
        },
        {
          titre: '3. Réhabilitation des installations défaillantes',
          texte: 'Lorsqu\'un dysfonctionnement est détecté, la nature des travaux de réhabilitation dépend de la cause.\n\n**Surcharge hydraulique** (débit trop élevé pour la surface d\'épandage) :\n- Réduire les apports (chasse d\'eau économique, récupération eaux pluviales)\n- Ajouter des tranchées supplémentaires\n- Remplacer par une filière plus adaptée (microstation)\n\n**Colmatage irréversible des tranchées** :\n- Remplacement complet du gravier filtrant (travaux de terrassement)\n- Changement de filière vers un système compact ou une microstation\n\n**FTE non étanche** :\n- Inspection et réparation des fissures par injection de résine ou création d\'une FTE neuve\n\n**Absence de FTE** (installation ancienne avec simple fosse septique EU seul) :\n- Installation obligatoire d\'une FTE toutes eaux avant le dispositif d\'épandage existant\n\n**Délais réglementaires** :\n- 1 an après signature de l\'acte de vente (si diagnostiqué lors d\'une vente)\n- 4 ans maximum après notification de non-conformité dans les autres cas\n- Travaux urgents (risque sanitaire avéré) : délai immédiat ou très court fixé par le SPANC',
          sous_sections: []
        }
      ],
      points: [
        'Contrôle SPANC tous les 8-10 ans sur site, grille de diagnostic C/NC1/NC2',
        'NC2 = risque sanitaire ou environnemental = travaux obligatoires',
        'Refus en surface ou odeurs = signal d\'alerte de dysfonctionnement',
        'Niveau boues FTE > 50 % du volume utile = vidange recommandée',
        'Vidange FTE tous 3-4 ans, camion agréé, traitement en STEP ou compostage',
        'Ne pas planter d\'arbres ni bétonner au-dessus des tranchées',
        'Microstation : contrat entretien semestriel obligatoire',
        'Réhabilitation colmatage : remplacement gravier ou changement de filière',
        'Délai travaux : 1 an si vente, 4 ans sinon, immédiat si risque sanitaire',
        'Absence de FTE = installation obligatoire avant le dispositif d\'épandage existant'
      ],
      formules: [
        'Taux de remplissage FTE : T = V_boues [L] / V_utile [L] × 100 → [%] ; T > 50 % = vidange recommandée',
        'Fréquence vidange : n_vid = V_utile × 0,5 / Production_annuelle_boues → [années]'
      ],
      retenir: 'Contrôle SPANC = C / NC1 / NC2 · Refus surface = colmatage · FTE 50% = vidanger · Arbre sur tranchée = interdit · 1 an pour travaux si vente'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un agent SPANC visite une installation ancienne. Il observe : refus d\'eau usée en surface au-dessus des tranchées, odeurs dans le jardin, FTE dernière vidangée il y a 6 ans. La FTE est de 3 m³ (5 PP). (a) Quels dysfonctionnements identifiez-vous ? (b) Quelle cote SPANC attribuez-vous ? (c) Quelles actions recommandez-vous en priorité ?',
        solution: '(a) Refus en surface = colmatage probable des tranchées. Odeurs = ventilation insuffisante ou FTE trop pleine. 6 ans sans vidange = boues probablement au-delà de 50 % du volume utile.\n(b) Cote NC2 : risque sanitaire (refus en surface contenant pathogènes) et risque environnemental (ruissellement vers cours d\'eau).\n(c) Actions par ordre de priorité :\n1. Vidange immédiate de la FTE (urgence).\n2. Inspection de la ventilation (débouchage).\n3. Investigation sur les tranchées : sondage, inspection visuelle, test d\'absorption.\n4. Si colmatage irréversible : programme de réhabilitation (remplacement gravier ou filière compacte).\n5. Notification au propriétaire des travaux obligatoires dans les délais réglementaires.'
      }
    ]
  },

  'GEMEAU-097': {
    id: 'GEMEAU-097',
    titre: 'Gestion intégrée des eaux pluviales',
    fiche: {
      intro: 'L\'imperméabilisation croissante des bassins versants urbains modifie profondément le cycle de l\'eau : le ruissellement s\'accélère, les volumes ruisselés augmentent et les risques d\'inondation s\'aggravent. La gestion intégrée des eaux pluviales à la source, en alternative aux réseaux traditionnels, est devenue le paradigme de l\'aménagement durable.',
      sections: [
        {
          titre: '1. Impacts de l\'imperméabilisation',
          texte: 'Avant urbanisation, un bassin versant naturel présente un coefficient de ruissellement C = 0,05-0,20 (10-20 % des précipitations ruissellent, le reste s\'infiltre ou s\'évapotranspire). Après urbanisation, C peut atteindre 0,70-0,90 pour les centres-villes denses. Les conséquences sont :\n\n**Augmentation des débits de pointe** : pour une même pluie, le débit de pointe ruisselé peut être multiplié par 5 à 10. Les cours d\'eau récepteurs sont soumis à des crues plus fréquentes et plus violentes.\n\n**Réduction de la recharge des nappes** : la pluie ne s\'infiltre plus, réduisant la ressource en eau souterraine et l\'alimentation des cours d\'eau en étiage.\n\n**Dégradation de la qualité des eaux de ruissellement** : le premier flot de ruissellement (first flush) est particulièrement chargé en polluants (hydrocarbures, métaux lourds, MES, bactéries) issus des surfaces balayées (voiries, parkings, toitures).\n\n**Contexte réglementaire** : la loi sur l\'eau LEMA 2006 impose aux aménageurs de ne pas aggraver le ruissellement par rapport à l\'état naturel du terrain. La réglementation locale (règlement de collecte EP de la collectivité) peut fixer un débit de fuite maximal autorisé (exemple : 3 L/s/ha) pour les nouvelles constructions.',
          sous_sections: []
        },
        {
          titre: '2. Techniques de gestion à la source',
          texte: '**Toitures végétalisées (ou toits verts)** : substrat de croissance + végétaux sur toiture plate ou faiblement inclinée. Rétention de 40-80 % des précipitations courantes par capillarité et évapotranspiration. Bénéfice thermique et acoustique en plus. Emprise limitée (en hauteur, pas au sol).\n\n**Jardins de pluie (rain gardens)** : dépressions végétalisées dans les jardins privés ou espaces publics recevant les eaux de toiture et permettant leur infiltration lente. Efficacité sur les pluies courantes jusqu\'à 30 mm. Aucun entretien intensif requis, bénéfice paysager.\n\n**Noues enherbées** : fossés peu profonds végétalisés, en bordure de voirie ou entre parcelles. Fonctionnent par ruissellement en surface (contrairement aux caniveaux enterrés), ralentissent l\'écoulement (réduction de la vitesse), favorisent la sédimentation et l\'infiltration. Pente longitudinale 0,2-0,5 %, profondeur 20-40 cm, section trapézoïdale.\n\n**Tranchées drainantes** : tranchées remplies de grave drainante enrobant un drain perforé. Elles infiltrent les EP ou les acheminent vers un exutoire avec un débit limité. Adaptées aux parkings, voiries.\n\n**Puits d\'infiltration** : ouvrages cylindriques creusés jusqu\'à une couche perméable, permettant l\'infiltration directe des EP (eaux peu chargées). À équiper d\'un préfiltre pour éviter le colmatage.\n\n**Chaussées drainantes** : revêtements poreux (enrobé drainant, pavés perméables, gravillons) permettant l\'infiltration directe des eaux à travers la surface. Réduit le ruissellement de surface à quasi-zéro.',
          sous_sections: []
        },
        {
          titre: '3. Calcul simplifié d\'un bassin de rétention',
          texte: 'Un bassin de rétention stocke les eaux pluviales excédentaires pendant la durée d\'un épisode pluvieux et les restitue lentement vers le réseau ou le milieu naturel (débit de fuite limité).\n\n**Méthode des volumes (simplifiée)** : pour une pluie de durée D (h) sur un bassin versant A (ha) avec coefficient de ruissellement C :\n\n- Débit entrant : Q_ent = i [mm/h] × C × A [ha] × 10000 / 3600 [m³/s] = i × C × A / 0,36 [L/s]\n- Avec i = intensité de pluie de référence (Montana : i = a × D^(-b))\n\n- Volume de stockage = ∫(Q_ent - Q_fuite) dt pour la durée critique D_crit\n\n**Cas simplifié avec durée critique** :\nV_stock = (Q_ent - Q_fuite) × D_crit\nOù D_crit est la durée pour laquelle V_stock est maximum (souvent 20-60 min pour pluies décennales en zone urbaine).\n\nPour trouver la durée critique : calculer V(D) = (i(D) × C × A / 0,36 - Q_fuite [L/s]) × D [s] pour plusieurs valeurs de D et trouver le maximum.',
          sous_sections: []
        }
      ],
      points: [
        'Imperméabilisation → C de 0,1 (naturel) à 0,8 (urbain dense) → débit de pointe × 5-10',
        'LEMA 2006 : pas d\'aggravation du ruissellement — débit de fuite souvent ≤ 3 L/s/ha',
        'Premier flot (first flush) = plus chargé en polluants (HC, métaux, MES)',
        'Toitures végétalisées : rétention 40-80 % des pluies courantes',
        'Noues enherbées : fossé végétalisé, pente 0,2-0,5 %, profondeur 20-40 cm',
        'Chaussées drainantes : ruissellement quasi nul, infiltration directe',
        'Bassin de rétention : volume = (Q_ent - Q_fuite) × durée critique',
        'Durée critique = durée pour laquelle le volume de stockage est maximum',
        'Courbes IDF Montana : i = a × D^(-b), a et b paramètres locaux fournis par Météo-France',
        'Puits d\'infiltration = sol perméable requis (K ≥ 10 mm/h) + préfiltre obligatoire'
      ],
      formules: [
        'Débit de ruissellement : Q = i [mm/h] × C × A [ha] / 0,36 → [L/s] ; i = intensité pluie',
        'Pluie Montana : i = a × D^(-b) → [mm/h] ; D = durée [min], a et b = paramètres locaux',
        'Volume bassin (simplifié) : V = (Q_ent - Q_fuite) × D_crit → [m³] ; D_crit en secondes'
      ],
      retenir: 'Urbanisation → C ×5-10 · Débit fuite ≤ 3 L/s/ha · First flush = traiter · Noues + toitures vertes + bassin = gestion intégrée · V_bassin = (Q_ent - Q_fuite) × D_crit'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un lotissement de 3 ha (C = 0,70) doit limiter son débit de fuite à 3 L/s/ha. La pluie de référence décennale est caractérisée par Montana : a = 9,2, b = 0,60 (D en min, i en mm/h). (a) Calculez le débit de fuite maximal autorisé. (b) Pour une durée de pluie D = 30 min, calculez i, Q_entrant et le volume de stockage.',
        solution: '(a) Q_fuite_max = 3 × 3 = 9 L/s.\n(b) i = 9,2 × 30^(-0,60) = 9,2 / 30^0,60. 30^0,60 = exp(0,60 × ln30) = exp(0,60 × 3,401) = exp(2,041) = 7,70. i = 9,2 / 7,70 = 1,195 mm/min = 71,7 mm/h.\nQ_entrant = 71,7 × 0,70 × 3 / 0,36 = 417 L/s.\nVolume = (417 - 9) × 30 × 60 = 408 × 1800 = 734 400 L ≈ 734 m³.\nUn bassin de rétention de 750 m³ est nécessaire pour cette pluie décennale de 30 min.'
      }
    ]
  },

  'GEMEAU-098': {
    id: 'GEMEAU-098',
    titre: 'Dimensionnement et entretien des ouvrages pluviaux',
    fiche: {
      intro: 'Le dimensionnement des ouvrages de gestion des eaux pluviales (noues, bassins de rétention, tranchées drainantes) doit être fondé sur des calculs hydrauliques rigoureux. L\'entretien régulier de ces ouvrages est indispensable pour maintenir leurs performances à long terme et éviter les colmatages ou les débordements.',
      sections: [
        {
          titre: '1. Dimensionnement d\'une noue enherbée',
          texte: 'Une noue est un fossé herbeux à faible pente longitudinale qui permet la collecte, le stockage temporaire et l\'infiltration des eaux pluviales de voirie ou de toiture.\n\n**Paramètres de dimensionnement** :\n- Section hydraulique : trapézoïdale (pente de talus 2H:1V à 3H:1V), largeur en fond 0,3-0,8 m, profondeur 0,2-0,5 m\n- Vitesse maximale en surface libre : V ≤ 0,3-0,5 m/s pour préserver le gazon\n- Pente longitudinale : 0,2-0,5 %\n- Volume de stockage : S_section × L × taux de remplissage\n\n**Méthode de calcul** :\n1. Calculer le débit de ruissellement Q (en L/s) depuis la surface drainée avec la méthode rationnelle\n2. Calculer la section mouillée nécessaire pour ce débit à V = 0,3 m/s : S = Q / 0,3\n3. Dimensionner la section trapézoïdale correspondante\n4. Vérifier que le volume de stockage correspond à la pluie de projet\n\n**Vérification à la pluie décennale** : le niveau d\'eau dans la noue ne doit pas dépasser 90 % de sa profondeur pour éviter les débordements sur voirie.',
          sous_sections: []
        },
        {
          titre: '2. Dimensionnement d\'un bassin de rétention ou d\'infiltration',
          texte: 'Un bassin de rétention est un ouvrage de stockage temporaire des eaux pluviales. Il peut être :\n- **À ciel ouvert** : bassin enherbé intégré dans le paysage, moins coûteux\n- **Enterré** : cuves béton, plastiques alvéolées (type Ecodal, Storm-Box), parking couvert\n- **Semi-enterré** : talus créant une digue naturelle\n\n**Étapes de dimensionnement** :\n1. Calculer le débit de référence entrant Q_ref (pluie décennale sur le bassin versant, méthode rationnelle ou IDF)\n2. Fixer le débit de fuite Q_fuite (défini par la réglementation locale, souvent 3 L/s/ha)\n3. Calculer le volume de stockage V par la méthode des volumes ou de la courbe enveloppe (débits entrants - débits sortants vs. temps)\n4. Choisir les dimensions du bassin (V = L × l × H_utile ou V = S_plan × H_utile)\n5. Concevoir l\'organe de régulation du débit de fuite (seuil à crête mince, orifice calibré, vanne modulante)\n\n**Organes hydrauliques d\'un bassin** :\n- **Déversoir d\'entrée** : seuil déversant permettant l\'entrée des EP\n- **Orifice de fuite calibré** : orifice de taille calculée pour respecter Q_fuite = Cd × A × √(2gh) où h est la charge hydraulique\n- **Surverse de sécurité** : seuil de débordement d\'urgence pour les pluies supérieures à la pluie de projet',
          sous_sections: [
            {
              titre: '2.1 Formule de l\'orifice de décharge',
              texte: 'La décharge par orifice noyé : Q_fuite = Cd × A × √(2 × g × h). Avec Cd = coefficient de décharge ≈ 0,60-0,65 pour un orifice simple, A = section de l\'orifice [m²], g = 9,81 m/s², h = charge hydraulique au-dessus du centre de l\'orifice [m]. En fixant Q_fuite (L/s) et h (h = hauteur de stockage maximale), on calcule A et donc le diamètre D_orifice.'
            }
          ]
        },
        {
          titre: '3. Entretien des ouvrages pluviaux',
          texte: 'L\'entretien régulier est indispensable pour maintenir les performances hydrauliques et épuratoires des ouvrages pluviaux.\n\n**Noues enherbées** :\n- Fauche de l\'herbe 2-4 fois/an (pas de tonte à ras, maintenir une hauteur ≥ 5 cm pour favoriser l\'infiltration)\n- Enlèvement des déchets flottants après chaque épisode pluvieux\n- Inspection du fond après fortes pluies : si colmatage (surface imperméable), scarification du sol au rotobroyeur\n- Inspection des extrémités et des cunettes de raccordement\n\n**Bassins à ciel ouvert** :\n- Curage du fond : enlèvement des boues décantées 1 à 2 fois/an selon le bassin versant\n- Inspection et nettoyage de l\'orifice de fuite et du déversoir (risque de colmatage par feuilles, plastiques)\n- Contrôle de la berge (érosion, terriers de rongeurs)\n- Vérification de la signalisation de sécurité (grille de protection, clôture)\n\n**Structures enterrées (cuves plastiques)** :\n- Nettoyage au jet haute pression tous les 2-5 ans\n- Inspection par caméra si non accessible\n- Remplacement des matériaux filtrants selon le fabricant',
          sous_sections: []
        }
      ],
      points: [
        'Noue : section trapézoïdale, pente 0,2-0,5 %, V ≤ 0,3-0,5 m/s, profondeur 0,2-0,5 m',
        'Bassin rétention : volume = (Q_ent - Q_fuite) × durée critique',
        'Débit fuite par orifice : Q = Cd × A × √(2gh), Cd ≈ 0,60-0,65',
        'Bassin à ciel ouvert : curage fond 1-2 fois/an, nettoyage orifice de fuite',
        'Structures enterrées : nettoyage HJ 2-5 ans + inspection caméra',
        'Surverse de sécurité obligatoire pour pluies > pluie de projet',
        'Noue : fauche 2-4 fois/an, scarification si colmatage du fond',
        'Pluie de dimensionnement : souvent T10 pour les bassins, T2-T5 pour les noues',
        'Signalisation et clôture de sécurité obligatoires pour bassins à ciel ouvert > 1 m de profondeur',
        'Grille de protection sur l\'orifice de fuite = entretien trimestriel minimum'
      ],
      formules: [
        'Décharge orifice : Q_fuite = Cd × A × √(2 × g × h) → [m³/s] ; Cd ≈ 0,62, A [m²], h [m]',
        'Diamètre orifice : D = √(4 × A / π) → [m] ; A = Q_fuite / (Cd × √(2gh))',
        'Volume utile bassin : V = S_plan [m²] × H_utile [m] → [m³]'
      ],
      retenir: 'Noue V ≤ 0,3 m/s · Orifice fuite Q = Cd×A×√(2gh) · Curage bassin 1-2/an · Grille orifice trimestrielle · Surverse sécurité obligatoire · T10 pour dimensionnement bassins'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un bassin de rétention doit stocker V = 500 m³ avec une hauteur utile de 1,50 m. Le débit de fuite autorisé est Q_fuite = 20 L/s = 0,020 m³/s. La hauteur maximale au-dessus de l\'orifice de décharge est h = 1,20 m (charge hydraulique au niveau de retenue maximal). Cd = 0,62. (a) Calculez la superficie du plan d\'eau du bassin. (b) Calculez la section de l\'orifice de fuite. (c) Calculez le diamètre de l\'orifice.',
        solution: '(a) S = V / H_utile = 500 / 1,50 = 333 m² → dimensions indicatives : 20 m × 17 m.\n(b) A = Q_fuite / (Cd × √(2×g×h)) = 0,020 / (0,62 × √(2 × 9,81 × 1,20)) = 0,020 / (0,62 × √23,544) = 0,020 / (0,62 × 4,852) = 0,020 / 3,008 = 0,00665 m².\n(c) D = √(4 × 0,00665 / π) = √(0,02660 / π) = √0,008467 = 0,092 m = 92 mm. On choisit un orifice de Ø100 mm (valeur standard supérieure) en vérifiant le débit de fuite résultant.'
      },
      {
        n: '2',
        enonce: 'Une noue enherbée de 120 m de long doit collecter le ruissellement d\'un parking de 0,8 ha (C = 0,85). La pluie de projet est de 30 mm/h pendant 20 min. La pente longitudinale de la noue est I = 0,003 m/m. En utilisant une section trapézoïdale de fond 0,5 m, talus 2H:1V et profondeur 0,3 m, et K = 30 (végétation), vérifiez que la vitesse reste ≤ 0,3 m/s.',
        solution: 'Débit entrant Q = 30 × 0,85 × 0,8 / 0,36 = 56,7 L/s ≈ 0,057 m³/s.\nSection trapézoïdale pour profondeur y = 0,30 m, fond b = 0,5 m, talus m = 2 : A = (b + m×y)×y = (0,5 + 2×0,3)×0,3 = (0,5+0,6)×0,3 = 1,1×0,3 = 0,33 m².\nPérimètre mouillé P = b + 2×y×√(1+m²) = 0,5 + 2×0,3×√5 = 0,5 + 0,6×2,236 = 0,5 + 1,342 = 1,842 m.\nRh = A/P = 0,33/1,842 = 0,179 m.\nV = K × Rh^(2/3) × I^(1/2) = 30 × (0,179)^(2/3) × (0,003)^(1/2) = 30 × 0,320 × 0,0548 = 0,526 m/s > 0,3 m/s.\nVitesse EXCESSIVE. Solution : augmenter la section (fond 0,8 m, profondeur 0,4 m) ou réduire la pente longitudinale à 0,001 m/m pour limiter la vitesse.'
      }
    ]
  }

};
