var GEMEAU_B07 = {

  'GEMEAU-051': {
    id: 'GEMEAU-051',
    titre: 'Lecture d\'un système hydraulique et définition du problème',
    fiche: {
      intro: 'Un technicien de réseau AEP reçoit un dossier d\'extension : plan de masse, profil en long, tableau des débits de pointe. Avant tout calcul, il doit identifier chaque composant du système, repérer les nœuds critiques et recenser les données disponibles. Cette lecture méthodique conditionne la fiabilité de toute l\'étude hydraulique.',
      sections: [
        {
          titre: '1. Les composants d\'un système hydraulique',
          texte: 'Un système hydraulique complet comprend plusieurs familles d\'éléments interconnectés. Les éléments sources (captage, forage, prise en rivière, réservoir de tête) fournissent l\'eau au système. Les éléments de transport (conduites, canalisations, adducteurs) assurent le transfert. Les éléments de régulation (pompes, surpresseurs, réducteurs de pression, vannes) modifient les conditions d\'écoulement. Les éléments de stockage (réservoirs, châteaux d\'eau, bâches) amortissent les variations de demande. Enfin, les éléments de distribution (branchements, antennes, bouches d\'incendie) desservent les abonnés.\n\nDans un schéma hydraulique, chaque composant est représenté par un symbole normalisé. La pompe est figurée par un cercle avec une flèche indiquant le sens d\'écoulement. Le réservoir est représenté par un rectangle ouvert en haut avec le niveau d\'eau. Les vannes motorisées portent une croix avec un indicateur d\'actionneur. Les compteurs et débitmètres sont symbolisés par des cercles avec le symbole de mesure associé. Maîtriser cette sémiographie permet de lire un schéma P&ID (Process and Instrumentation Diagram) comme un texte technique.',
          sous_sections: [
            {
              titre: '1.1 Source et alimentation',
              texte: 'La source est caractérisée par sa cote altimétrique Z_s (en mètres NGF), sa capacité maximale Q_max (en m³/h ou L/s), et sa pression disponible H_s. Un forage profond de 40 m avec une pompe immergée est noté différemment d\'un réservoir gravitaire posé à 120 m NGF. Ces paramètres déterminent l\'énergie disponible en tête de réseau.'
            },
            {
              titre: '1.2 Nœuds et tronçons',
              texte: 'Un nœud est un point de jonction entre deux tronçons ou plus, ou un point de prélèvement. Chaque nœud est caractérisé par sa cote Z (m NGF), sa pression P (bar ou m CE) et son débit prélevé Q_k. Un tronçon est un segment de conduite reliant deux nœuds successifs, caractérisé par sa longueur L, son diamètre DN, son matériau et son débit de transit Q_ij.'
            }
          ]
        },
        {
          titre: '2. Lecture du profil en long',
          texte: 'Le profil en long est la représentation graphique de l\'axe d\'une conduite dans un plan vertical. L\'axe horizontal représente la distance cumulée depuis le point de départ (en mètres), et l\'axe vertical représente l\'altitude en mètres NGF. On y trouve la ligne de terrain naturel (TN), la ligne de fond de fouille (profondeur minimale d\'enfouissement = 0,80 m hors gel en France), et la ligne représentant la génératrice supérieure de la conduite.\n\nSur ce profil, on reporte également la ligne piézométrique (voir chapitre GEMEAU-052), qui traduit la pression disponible en chaque point. Lorsque la ligne piézométrique descend en dessous de la conduite, la pression devient positive (situation normale). Si elle passe en dessous de la conduite à un point haut, il peut y avoir dépression ou désamorçage. Les points hauts du profil sont donc des points critiques à vérifier impérativement.\n\nUn profil en long se lit de gauche à droite dans le sens d\'écoulement. On repère : les changements de pente (points hauts et points bas), les traversées d\'ouvrages (routes, cours d\'eau, voies ferrées), les changements de matériau ou de diamètre, et les emplacements des organes hydrauliques (vannes, ventouses, purges). Chaque point singulier doit être noté avec sa cote altimétrique précise.',
          sous_sections: []
        },
        {
          titre: '3. Données nécessaires à un calcul hydraulique',
          texte: 'Avant d\'entamer tout calcul, le technicien dresse un tableau de données. Pour chaque tronçon : longueur L (m), diamètre intérieur D (mm), matériau et état de surface, débit à transiter Q (L/s ou m³/h). Pour chaque nœud : cote altimétrique Z (m NGF), débit prélevé ou injecté Q_k, pression de service minimale exigée P_min.\n\nPour les sources : niveau des plus hautes eaux (PHE) et des plus basses eaux (PBE) pour les réservoirs, débit maximal et minimal disponible, cote du radier et de la surverse. Pour les ouvrages de régulation : pertes de charge intrinsèques des vannes (Cv ou Kv), pression nominale PN, caractéristiques de la pompe si présente.\n\nUne erreur fréquente consiste à confondre les unités : 1 bar = 10,2 m CE, 1 m CE = 9 806 Pa ≈ 0,098 bar. La pression de service standard en AEP est comprise entre 3 et 7 bar (30 à 70 m CE). En dessous de 2 bar, le service est insuffisant ; au-dessus de 10 bar, on risque d\'endommager les canalisations et compteurs.',
          sous_sections: []
        },
        {
          titre: '4. Identification des points critiques',
          texte: 'Les points critiques sont les nœuds ou tronçons qui risquent de ne pas respecter les contraintes de pression ou de débit. On distingue : les points hauts (risque de pression insuffisante ou de dépression), les points bas (risque de pression excessive, nécessité de réducteur), les extremités d\'antennes (point le plus défavorisé en débit et pression simultanément), les tronçons de grand diamètre à faible débit (risque de stagnation et de croissance bactérienne).\n\nMéthodologie de repérage : (1) Tracer le profil en long et localiser les points hauts et bas. (2) Calculer la pression statique maximale en chaque point bas (P = ρg×ΔZ). (3) Estimer la pression résiduelle aux extremités en appliquant les pertes de charge. (4) Comparer aux plages admissibles. Les résultats guident le choix des équipements : réducteurs de pression (PRV) aux points bas, ventouses aux points hauts, pompes de surpression aux extremités trop éloignées.',
          sous_sections: []
        }
      ],
      points: [
        'Un système hydraulique comprend : source, transport, régulation, stockage et distribution',
        'Le profil en long montre les cotes altimétriques (NGF), les pentes et les points singuliers',
        'Un nœud est un point de jonction caractérisé par Z (m NGF), P (bar) et Q_k (L/s)',
        'Un tronçon est défini par L (m), DN (mm), matériau et Q (L/s)',
        '1 bar = 10,2 m CE ; pression de service AEP = 3 à 7 bar',
        'Les points hauts sont critiques pour la dépression ; les points bas pour la surpression',
        'Lire un schéma P&ID nécessite de maîtriser les symboles normalisés de chaque composant',
        'Les données minimales pour un calcul : Z, Q, DN, L, matériau pour chaque nœud et tronçon',
        'La pression statique maximale = ρg × ΔZ : à vérifier aux points bas',
        'Les ventouses et purges se positionnent respectivement aux points hauts et bas du profil'
      ],
      formules: [
        'Pression statique : P = ρ × g × ΔZ → [Pa] ; ρ = 1 000 kg/m³, g = 9,81 m/s², ΔZ = différence d\'altitude en m',
        'Conversion bar/m CE : H(m CE) = P(bar) × 10,2 → [m] ; 1 bar ≈ 10 m de colonne d\'eau',
        'Débit : Q = V × A → [m³/s] ; V = vitesse (m/s), A = section (m²)',
        'Section circulaire : A = π × D² / 4 → [m²] ; D = diamètre intérieur en m'
      ],
      retenir: 'Lire d\'abord le profil en long avant tout calcul · Identifier source, nœuds, tronçons et points singuliers · 1 bar = 10,2 m CE · Points hauts = risque dépression · Points bas = risque surpression · Recenser toutes les données avant de calculer'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un réservoir est à la cote 145 m NGF. Un abonné est à la cote 78 m NGF, à 2 000 m de distance par une conduite DN150 PVC. Calculez la pression statique disponible à l\'abonné (sans écoulement).',
        solution: 'Pression statique = différence de cotes × 0,098 bar/m = (145 - 78) = 67 m CE. En bar : 67 / 10,2 = 6,57 bar. Cette pression est dans la plage admissible (3-7 bar). Sans écoulement, la pression à l\'abonné est donc 6,57 bar.'
      },
      {
        n: '2',
        enonce: 'Un schéma hydraulique comporte 5 nœuds : N1 (Z=120 m, Q=0), N2 (Z=105 m, Q=2 L/s), N3 (Z=98 m, Q=3 L/s), N4 (Z=102 m, Q=1,5 L/s), N5 (Z=88 m, Q=2,5 L/s). Le débit total fourni par la source en N1 est de 9 L/s. Vérifiez l\'équilibre des débits au nœud N1.',
        solution: 'Somme des prélèvements aux nœuds N2 à N5 = 2 + 3 + 1,5 + 2,5 = 9 L/s. Le débit fourni par la source (9 L/s) est égal à la somme des prélèvements. L\'équilibre est vérifié (loi de conservation de la masse).'
      },
      {
        n: '3',
        enonce: 'Un point bas du profil est à la cote 32 m NGF, alimenté depuis un réservoir à 95 m NGF. Calculez la pression statique en bar et vérifiez si un réducteur est nécessaire (P_max = 7 bar).',
        solution: 'ΔZ = 95 - 32 = 63 m CE. P = 63 / 10,2 = 6,18 bar. Cette pression est inférieure à 7 bar, donc pas de réducteur nécessaire dans cette configuration statique. Mais en régime transitoire (coup de bélier), la pression peut dépasser cette valeur.'
      },
      {
        n: '4',
        enonce: 'Une conduite DN100 transporte un débit de 12 L/s. Calculez la vitesse d\'écoulement. La vitesse est-elle dans la plage admissible pour une conduite AEP (0,5 à 2 m/s) ?',
        solution: 'Section : A = π × 0,1² / 4 = 0,00785 m². Débit : Q = 12 L/s = 0,012 m³/s. Vitesse : V = Q / A = 0,012 / 0,00785 = 1,53 m/s. La vitesse est dans la plage admissible (0,5 - 2 m/s). ✓'
      },
      {
        n: '5',
        enonce: 'Un profil en long montre un point haut à Z = 130 m NGF sur un tronçon alimenté depuis un réservoir à Z = 128 m NGF. La pression de service requise est 2 bar minimum. Quelle pression faut-il maintenir en tête du tronçon pour que le point haut soit alimenté ?',
        solution: 'La cote du point haut (130 m) est SUPÉRIEURE à la cote du réservoir (128 m). La différence de cotes est défavorable : ΔZ = 130 - 128 = +2 m (le point haut est 2 m au-dessus du réservoir). Pour avoir 2 bar (20,4 m CE) au point haut, il faut : P_tête = P_min + ΔZ(m CE) + pertes de charge. En statique : P_tête ≥ 20,4 + 2 = 22,4 m CE ≈ 2,2 bar. Une pompe de surpression est nécessaire.'
      },
      {
        n: '6',
        enonce: 'Convertir les pressions suivantes : (a) 4,5 bar en m CE, (b) 52 m CE en bar, (c) 350 kPa en m CE.',
        solution: '(a) 4,5 bar × 10,2 = 45,9 m CE. (b) 52 / 10,2 = 5,1 bar. (c) 350 kPa = 0,35 MPa = 3,5 bar → 3,5 × 10,2 = 35,7 m CE. Rappel : 1 bar = 100 kPa = 10,2 m CE.'
      },
      {
        n: '7',
        enonce: 'Un réseau ramifié alimente 3 antennes depuis un nœud central N0 (Z = 110 m, P = 5 bar). Les antennes ont des débits Q1 = 4 L/s, Q2 = 6 L/s, Q3 = 3 L/s. Quel débit doit fournir la source au nœud N0 ?',
        solution: 'Loi de conservation des débits au nœud N0 : Q_source = Q1 + Q2 + Q3 = 4 + 6 + 3 = 13 L/s. Le débit injecté par la source doit être égal à la somme des débits soutirés.'
      },
      {
        n: '8',
        enonce: 'Identifiez, pour un réseau AEP de bourg rural, les données minimales à collecter avant de commencer une étude hydraulique. Présentez-les sous forme de tableau (tronçons et nœuds).',
        solution: 'Pour chaque tronçon : longueur L (m), diamètre DN (mm), matériau (PVC, fonte, PE...), rugosité k, débit estimé Q (L/s). Pour chaque nœud : cote NGF Z (m), débit prélevé Q_k (L/s), pression de service requise P_min (bar). Pour les sources : cote PHE et PBE, débit maximal disponible Q_max. Ces données permettent de calculer les pertes de charge et de vérifier les pressions en tous points.'
      }
    ]
  },

  'GEMEAU-052': {
    id: 'GEMEAU-052',
    titre: 'Lignes de charge et lignes piézométriques',
    fiche: {
      intro: 'Lors de la conception d\'un adducteur gravitaire de 15 km reliant une source de montagne à un château d\'eau, le projeteur trace les lignes piézométriques sur le profil en long pour s\'assurer qu\'aucun point du tracé n\'est en dépression. Ce tracé, basé sur l\'équation de Bernoulli généralisée, est l\'outil fondamental de tout calcul de réseau sous pression.',
      sections: [
        {
          titre: '1. L\'équation de Bernoulli généralisée',
          texte: 'L\'équation de Bernoulli exprime la conservation de l\'énergie dans un écoulement. Entre deux sections 1 et 2 d\'une conduite, elle s\'écrit : Z₁ + P₁/(ρg) + V₁²/(2g) = Z₂ + P₂/(ρg) + V₂²/(2g) + ΔJ₁₋₂. Chaque terme a la dimension d\'une hauteur (mètre) : Z est l\'énergie potentielle (cote altimétrique en m NGF), P/(ρg) est l\'énergie de pression (hauteur piézométrique en m CE), V²/(2g) est l\'énergie cinétique, ΔJ est la somme des pertes de charge entre 1 et 2 (pertes régulières + singulières).\n\nLa charge totale H en un point est : H = Z + P/(ρg) + V²/(2g). La charge hydraulique diminue toujours dans le sens de l\'écoulement en régime permanent (à moins d\'apport d\'énergie par une pompe). Pour une conduite de diamètre constant, V₁ = V₂ et le terme V²/(2g) se simplifie. Dans la pratique des réseaux d\'eau, la vitesse est faible (0,5 à 2 m/s) et l\'énergie cinétique V²/(2g) est de l\'ordre de 0,01 à 0,20 m, négligeable devant les hauteurs en jeu (plusieurs dizaines à centaines de mètres). C\'est pourquoi on se contente souvent de tracer la seule ligne piézométrique.',
          sous_sections: []
        },
        {
          titre: '2. La ligne piézométrique',
          texte: 'La hauteur piézométrique en un point est h_p = Z + P/(ρg). Elle représente la hauteur jusqu\'à laquelle l\'eau monterait dans un tube piézométrique vertical raccordé à la conduite en ce point. C\'est la hauteur piézométrique, non la pression relative, qui est constante dans un fluide au repos.\n\nSur un profil en long, la ligne piézométrique est tracée en trait plein au-dessus du profil de la conduite. La distance verticale entre la ligne piézométrique et la conduite représente la pression disponible en mètre CE. Si la ligne piézométrique est à 40 m au-dessus de la conduite, la pression est 40 m CE ≈ 3,9 bar. Si elle est au niveau de la conduite (ou en dessous), la pression est nulle ou négative : l\'eau ne coule plus et des phénomènes de cavitation peuvent apparaître.\n\nPour tracer la ligne piézométrique, on part d\'un point de référence connu : niveau d\'eau dans le réservoir (h_p = Z_réservoir + 0 = Z_réservoir, car la pression en surface est atmosphérique = 0 relatif) et on soustrait les pertes de charge successives. Si le tronçon A→B a une perte de charge de 8 m, alors h_p(B) = h_p(A) - 8 m.',
          sous_sections: []
        },
        {
          titre: '3. La ligne de charge totale',
          texte: 'La ligne de charge totale (LCT) est H = Z + P/(ρg) + V²/(2g). Elle est toujours au-dessus de la ligne piézométrique d\'une hauteur V²/(2g). Entre deux points d\'une conduite de diamètre constant, la LCT est parallèle à la ligne piézométrique. Aux changements de diamètre, les deux lignes divergent ou convergent selon que la vitesse augmente ou diminue.\n\nEn pratique, pour les réseaux d\'eau (vitesses < 2 m/s) : V²/(2g) < 0,20 m. Ce terme est négligeable dans la plupart des études. On confond souvent ligne piézométrique et ligne de charge pour les réseaux d\'eau. C\'est une approximation acceptable lorsque les vitesses sont modérées.\n\nAttention : à la sortie d\'une conduite débouchant à l\'air libre (réservoir, exutoire), toute l\'énergie cinétique est dissipée. La LCT chute brusquement de V²/(2g) à la sortie, tandis que la ligne piézométrique reste à la cote du plan d\'eau du réservoir aval.',
          sous_sections: []
        },
        {
          titre: '4. Gradient hydraulique et pression négative',
          texte: 'Le gradient hydraulique (ou pente de la ligne piézométrique) est : i = ΔH / L (adimensionnel, ou m/m). Il est souvent exprimé en m/km ou en ‰. Pour un tronçon de longueur L = 1 000 m avec une perte de charge de 5 m, le gradient est i = 5/1 000 = 0,005 = 5 ‰. Plus le gradient est fort, plus les pertes de charge sont importantes (conduite sous-dimensionnée ou débit trop élevé).\n\nLa pression négative (dépression) apparaît lorsque la ligne piézométrique descend en dessous de la conduite. Cela peut se produire aux points hauts du profil. Une dépression signifie que l\'eau est mise en tension, ce qui est physiquement possible jusqu\'à environ -1 bar (10 m CE) avant que l\'eau ne se vaporise (vaporisation à la pression de vapeur saturante). Dans les réseaux d\'eau, on évite toute dépression car elle provoque : dégazage (formation de poches d\'air), croissance bactérienne, aspiration de l\'eau du sol (pollution par succion), coups de bélier lors du retour à la pression normale. La règle de sécurité est de maintenir une pression minimale de 1 m CE en tout point, et de 3 m CE aux extrémités d\'antennes.',
          sous_sections: []
        }
      ],
      points: [
        'Charge totale : H = Z + P/(ρg) + V²/(2g) — diminue toujours dans le sens de l\'écoulement',
        'Hauteur piézométrique : h_p = Z + P/(ρg) — distance verticale entre ligne piézométrique et conduite = pression en m CE',
        'En surface libre d\'un réservoir : h_p = Z_réservoir (pression atmosphérique = 0 relatif)',
        'Ligne piézométrique tracée en partant du réservoir amont et en soustrayant les pertes de charge',
        'Gradient hydraulique i = ΔH/L (m/m) ou en ‰ ou m/km',
        'Pression négative = dépression : risque de dégazage, aspiration de sol, coup de bélier',
        'Pour les réseaux d\'eau, énergie cinétique V²/(2g) souvent négligeable (< 0,20 m)',
        'Pression minimale recommandée : ≥ 1 m CE en tout point, ≥ 3 m CE aux extrémités',
        'Point haut du profil = point critique à vérifier en priorité pour la dépression',
        'À la sortie libre (exutoire), la LCT chute de V²/(2g) par dissipation de l\'énergie cinétique'
      ],
      formules: [
        'Bernoulli généralisé : Z₁ + P₁/(ρg) + V₁²/(2g) = Z₂ + P₂/(ρg) + V₂²/(2g) + ΔJ → [m] ; ΔJ = pertes de charge 1→2',
        'Charge totale : H = Z + P/(ρg) + V²/(2g) → [m] ; Z = cote NGF, P/(ρg) = hauteur de pression, V²/2g = hauteur cinétique',
        'Hauteur piézométrique : h_p = Z + P/(ρg) → [m] ; P en Pa, ρg = 9 810 N/m³',
        'Énergie cinétique : V²/(2g) → [m] ; V = vitesse (m/s), g = 9,81 m/s²',
        'Gradient hydraulique : i = ΔH / L → [m/m] ou [‰] ; ΔH = chute de charge (m), L = longueur (m)',
        'Pression en bar : P(bar) = h_p(m CE) / 10,2 → [bar]'
      ],
      retenir: 'La ligne piézométrique = Z + P/(ρg) · Elle part du niveau du réservoir et descend de ΔJ à chaque tronçon · Distance entre la ligne et la conduite = pression disponible en m CE · Si la ligne passe sous la conduite = dépression dangereuse · Vérifier en priorité les points hauts du profil'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un réservoir A est à Z_A = 120 m NGF. Une conduite DN200 L=2 000 m relie A à un nœud B (Z_B = 95 m NGF). Les pertes de charge du tronçon A-B sont ΔJ = 12 m. Calculez la hauteur piézométrique et la pression disponible en B.',
        solution: 'Hauteur piézométrique en A (départ de la surface libre du réservoir) : h_p(A) = 120 m. Perte de charge : ΔJ = 12 m. Hauteur piézométrique en B : h_p(B) = h_p(A) - ΔJ = 120 - 12 = 108 m. Pression en B = h_p(B) - Z_B = 108 - 95 = 13 m CE = 13/10,2 = 1,27 bar. La pression de service est faible (< 2 bar), il faudra vérifier la pression aux extrémités d\'antennes.'
      },
      {
        n: '2',
        enonce: 'Sur un profil en long, un point haut H est à Z_H = 118 m NGF. La hauteur piézométrique calculée en H est h_p(H) = 115 m. Que se passe-t-il ? Quelle solution proposer ?',
        solution: 'La hauteur piézométrique (115 m) est inférieure à la cote de la conduite (118 m). La pression est : P = (115 - 118) × 9 810 = -29 430 Pa ≈ -0,29 bar (dépression de 3 m CE). La conduite est en dépression au point haut : risque de dégazage, coup de bélier, contamination. Solutions : augmenter la pression en tête (pompe de surpression), réduire les pertes de charge (augmenter le DN), poser une ventouse automatique au point haut.'
      },
      {
        n: '3',
        enonce: 'Calculez l\'énergie cinétique V²/(2g) pour une conduite DN150 transportant Q = 15 L/s. Comparez à une pression de 5 bar.',
        solution: 'Section : A = π × 0,15² / 4 = 0,01767 m². Vitesse : V = Q/A = 0,015/0,01767 = 0,849 m/s. Énergie cinétique : V²/(2g) = 0,849²/(2×9,81) = 0,721/19,62 = 0,037 m CE. Pression de 5 bar = 51 m CE. Le terme cinétique (0,037 m) représente 0,07% de la pression disponible : il est bien négligeable.'
      },
      {
        n: '4',
        enonce: 'Un adducteur de 5 km a un gradient hydraulique de 3,5 ‰. Calculez la perte de charge totale sur cet adducteur.',
        solution: 'Gradient i = 3,5 ‰ = 0,0035 m/m. Longueur L = 5 000 m. Perte de charge : ΔJ = i × L = 0,0035 × 5 000 = 17,5 m. La ligne piézométrique baisse de 17,5 m entre l\'entrée et la sortie de cet adducteur.'
      },
      {
        n: '5',
        enonce: 'Un réseau a une ligne piézométrique à 95 m NGF en son point A. Le tronçon A→B (L=800 m) a des pertes de charge de 4,5 m. Le tronçon B→C (L=600 m) a des pertes de charge de 3 m. Les cotes sont : Z_B = 80 m, Z_C = 72 m. Calculez les pressions en B et C.',
        solution: 'h_p(A) = 95 m. h_p(B) = 95 - 4,5 = 90,5 m. P_B = (90,5 - 80) = 10,5 m CE = 1,03 bar. h_p(C) = 90,5 - 3 = 87,5 m. P_C = (87,5 - 72) = 15,5 m CE = 1,52 bar. Les pressions sont faibles mais positives. Le point le plus défavorisé est B (1,03 bar).'
      },
      {
        n: '6',
        enonce: 'Tracez (schématiquement) la ligne piézométrique d\'un adducteur gravitaire partant d\'un réservoir à Z=140 m, passant par un point haut à Z=135 m (km 3), puis arrivant à un réservoir aval à Z=90 m (km 10). La perte de charge totale sur 10 km est 45 m.',
        solution: 'LP départ = 140 m. LP arrivée = 140 - 45 = 95 m (supérieure à 90 m donc pression au réservoir aval = 5 m CE ✓). Au km 3 (point haut Z=135 m) : LP ≈ 140 - (45×3/10) = 140 - 13,5 = 126,5 m. Pression au point haut = 126,5 - 135 = -8,5 m CE → DÉPRESSION ! Il faut revoir le tracé ou augmenter la LP de départ (rehausser le réservoir ou ajouter une pompe).'
      },
      {
        n: '7',
        enonce: 'Pour éviter la dépression au point haut (Z=135 m, km 3) de l\'exercice précédent, quelle doit être la hauteur piézométrique minimale au départ du réservoir A ? (conserver une pression de 2 m CE au point haut)',
        solution: 'Pression minimale au point haut = 2 m CE. LP minimale au point haut = Z_pointhaut + P_min = 135 + 2 = 137 m. Entre le départ et le km 3 : ΔJ(0→3 km) = 45 × 3/10 = 13,5 m. LP minimale au départ = LP(km3) + ΔJ(0→3) = 137 + 13,5 = 150,5 m. Il faut relever la cote du réservoir à 150,5 m NGF minimum, ou installer une pompe apportant 150,5 - 140 = 10,5 m de HMT supplémentaire.'
      },
      {
        n: '8',
        enonce: 'Une conduite DN100 (V = 1,2 m/s) alimente un nœud B. À B, la conduite se divise en deux antennes DN80 (Q = 6 L/s chacune). Calculez les vitesses dans les trois tronçons et vérifiez la conservation du débit.',
        solution: 'Tronçon amont DN100 : A = π×0,1²/4 = 0,00785 m², Q = V×A = 1,2×0,00785 = 0,00942 m³/s = 9,42 L/s. Chaque antenne DN80 : Q = 6 L/s = 0,006 m³/s, A = π×0,08²/4 = 0,00503 m², V = 0,006/0,00503 = 1,19 m/s. Conservation : Q_amont = 9,42 L/s ≈ Q_antenne1 + Q_antenne2 = 6 + 6 = 12 L/s → INCOHÉRENCE. Il faut soit Q_amont = 12 L/s et recalculer V_amont = 12/7,85 = 1,53 m/s, soit Q par antenne = 9,42/2 = 4,71 L/s.'
      }
    ]
  },

  'GEMEAU-053': {
    id: 'GEMEAU-053',
    titre: 'Calcul des pertes de charge régulières',
    fiche: {
      intro: 'Un bureau d\'études dimensionne le renouvellement d\'une conduite de refoulement de 3 km entre un poste de pompage et un réservoir. Pour choisir le diamètre et vérifier que la pompe peut vaincre les pertes de charge, le technicien doit calculer précisément les pertes de charge régulières avec la formule de Darcy-Weisbach et les données réelles du matériau retenu.',
      sections: [
        {
          titre: '1. Origine des pertes de charge régulières',
          texte: 'Les pertes de charge régulières (ou linéaires) résultent du frottement visqueux entre le fluide et la paroi interne de la conduite. Ce frottement est dû à la viscosité de l\'eau et à la rugosité de la paroi. En régime laminaire (Reynolds < 2 000, très rare en distribution d\'eau), les pertes de charge sont proportionnelles à la vitesse : ΔH = 32μLV/(ρgD²) (loi de Hagen-Poiseuille). En régime turbulent (Reynolds > 4 000, cas général en AEP et assainissement), les pertes de charge sont proportionnelles au carré de la vitesse : ΔH = λ(L/D)(V²/2g).\n\nPour les conduites de distribution d\'eau (DN > 50 mm, V = 0,5-2 m/s), le nombre de Reynolds est toujours supérieur à 10 000 : on est en régime turbulent rugueux. La résistance hydraulique de la conduite est alors contrôlée par la rugosité relative k/D plutôt que par la viscosité.',
          sous_sections: []
        },
        {
          titre: '2. La formule de Darcy-Weisbach',
          texte: 'La formule universelle de Darcy-Weisbach est : ΔH = λ × (L/D) × (V²/2g). Où ΔH est la perte de charge en mètres (m), λ est le coefficient de frottement (adimensionnel, compris entre 0,01 et 0,05), L est la longueur de la conduite en mètres, D est le diamètre intérieur en mètres, V est la vitesse moyenne de l\'écoulement en m/s, g est l\'accélération de pesanteur (9,81 m/s²).\n\nCette formule est valable pour tout régime d\'écoulement (laminaire ou turbulent) et tout type de fluide, à condition d\'utiliser le bon coefficient λ. On peut aussi l\'exprimer en charge hydraulique linéaire J = ΔH/L = λ × V²/(2gD) (en m/m ou m/km). Pour un calcul rapide en réseaux d\'eau, on peut écrire en m/km : J(m/km) = 1000 × λ × V²/(2gD).',
          sous_sections: []
        },
        {
          titre: '3. Détermination du coefficient de frottement λ',
          texte: 'Le coefficient λ dépend du régime d\'écoulement (nombre de Reynolds Re = VD/ν) et de la rugosité relative ε = k/D (avec k la rugosité absolue de la paroi en mm).\n\nEn régime turbulent lisse (Re < 10⁵) : λ est donné par la formule de Blasius : λ = 0,316 × Re^(-0,25). En régime turbulent rugueux (Re grand et k/D significatif) : on utilise la formule de Colebrook-White implicite : 1/√λ = -2 log(k/(3,7D) + 2,51/(Re√λ)). Cette formule se résout par itération ou par l\'approximation explicite de Swamee-Jain : λ = 0,25 / [log(k/(3,7D) + 5,74/Re^0,9)]².\n\nRugosités absolues k (en mm) des matériaux courants : PVC lisse neuf : 0,003-0,01 mm, PEHD neuf : 0,005-0,01 mm, Fonte ductile revêtue : 0,1-0,3 mm, Fonte grise ancienne : 0,5-3 mm, Béton centrifugé : 0,1-0,3 mm, Béton coulé en place : 0,5-3 mm, Acier neuf : 0,04-0,1 mm, Acier rouillé : 0,2-1 mm. Avec le temps, les incrustation calcaires ou biologiques augmentent la rugosité effective : on majore souvent k de 50% pour les réseaux anciens.',
          sous_sections: []
        },
        {
          titre: '4. Application numérique et formule de Hazen-Williams',
          texte: 'Exemple complet : conduite DN150 PVC (k = 0,01 mm), L = 500 m, Q = 15 L/s = 0,015 m³/s. Diamètre intérieur réel du DN150 PVC ≈ 153 mm = 0,153 m. Vitesse : V = Q/A = 0,015/(π×0,153²/4) = 0,015/0,01839 = 0,816 m/s. Re = VD/ν = 0,816×0,153/(10^-6) = 124 848 (turbulent rugueux). k/D = 0,01/153 = 6,5×10^-5. λ ≈ 0,018 (lecture Moody ou calcul Colebrook). J = λ×V²/(2gD) = 0,018×0,816²/(2×9,81×0,153) = 0,018×0,666/3 = 0,00399 m/m = 3,99 m/km. ΔH = J×L = 0,00399×500 = 2,0 m.\n\nLa formule de Hazen-Williams, empirique, est populaire aux États-Unis pour les réseaux AEP : V(m/s) = 0,8492 × C × R_h^0,63 × I^0,54. Où C est le coefficient de Hazen-Williams (PVC: C=150, fonte neuve: C=130, fonte ancienne: C=80-100, béton: C=100-120), R_h = D/4 pour une conduite plein, I = gradient hydraulique. En pratique française, on lui préfère Darcy-Weisbach.',
          sous_sections: []
        }
      ],
      points: [
        'Pertes de charge régulières = frottement visqueux : ΔH = λ(L/D)(V²/2g)',
        'En AEP, écoulement toujours turbulent (Re >> 2 000) : λ dépend de la rugosité relative k/D',
        'PVC lisse : k = 0,003-0,01 mm → λ ≈ 0,015-0,020 → conduites très favorables',
        'Fonte ancienne : k = 0,5-3 mm → λ peut atteindre 0,04-0,05 → pertes de charge élevées',
        'J = ΔH/L = perte de charge linéaire (m/m ou m/km) — utile pour les calculs de réseaux',
        'Doubler la vitesse quadruple les pertes de charge (relation en V²)',
        'Doubler le débit dans le même DN quadruple aussi les pertes de charge',
        'Colebrook-White est la formule de référence (implicite en λ) ; Swamee-Jain = approximation explicite',
        'Majorer k de 50% pour les réseaux anciens (incrustation)',
        'Hazen-Williams : formule empirique US, C = 150 pour PVC — non recommandée pour de nouveaux projets en France'
      ],
      formules: [
        'Darcy-Weisbach : ΔH = λ × (L/D) × (V²/2g) → [m] ; λ adimensionnel, L et D en m, V en m/s',
        'Charge linéaire : J = λ × V² / (2g × D) → [m/m] ; J en m/km = 1000 × J',
        'Nombre de Reynolds : Re = V × D / ν → adimensionnel ; ν = 10⁻⁶ m²/s à 20°C pour l\'eau',
        'Rugosité relative : ε = k / D → adimensionnel ; k en m, D en m',
        'Blasius (turbulent lisse, Re < 10⁵) : λ = 0,316 × Re^(-0,25)',
        'Swamee-Jain : λ = 0,25 / [log(k/(3,7D) + 5,74/Re^0,9)]²',
        'Vitesse : V = Q / A = 4Q / (π × D²) → [m/s] ; Q en m³/s, D en m'
      ],
      retenir: 'Darcy-Weisbach ΔH = λ(L/D)(V²/2g) — formule de référence · λ dépend de Re et k/D (diagramme de Moody) · PVC : k≈0,01 mm, fonte : k=0,1-3 mm · Pertes de charge ∝ V² : doubler V → ×4 les pertes · J en m/km est pratique pour les projets de réseaux'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Calculez la perte de charge sur une conduite DN200 PVC (k=0,01 mm, D_int=204 mm), L=1 200 m, Q=40 L/s. Donnez J en m/km et ΔH en m. (ν = 10⁻⁶ m²/s)',
        solution: 'A = π×0,204²/4 = 0,03267 m². V = 0,040/0,03267 = 1,225 m/s. Re = 1,225×0,204/10⁻⁶ = 249 900. ε = 0,01/204 = 4,9×10⁻⁵. Swamee-Jain : λ = 0,25/[log(4,9×10⁻⁵/3,7 + 5,74/249900^0,9)]² ≈ 0,25/[log(1,32×10⁻⁵ + 0,0000355)]² ≈ 0,25/[-4,35]² ≈ 0,25/18,9 ≈ 0,0132. J = 0,0132×1,225²/(2×9,81×0,204) = 0,0132×1,501/4,00 = 0,00495 m/m = 4,95 m/km. ΔH = 0,00495×1200 = 5,94 m.'
      },
      {
        n: '2',
        enonce: 'Une conduite DN100 fonte grise ancienne (k=2 mm) transporte Q=8 L/s sur L=400 m. Calculez λ et ΔH. Comparez à une conduite PVC de même DN (k=0,01 mm).',
        solution: 'DN100 fonte : D_int ≈ 0,100 m. A = π×0,01/4 = 0,00785 m². V = 0,008/0,00785 = 1,02 m/s. Re = 1,02×0,1/10⁻⁶ = 102 000. ε_fonte = 2/100 = 0,02. λ_fonte = 0,25/[log(0,02/3,7 + 5,74/102000^0,9)]² ≈ 0,25/[log(0,0054 + 0,000105)]² ≈ 0,25/[-2,27]² ≈ 0,0485. ΔH_fonte = 0,0485×(400/0,1)×(1,02²/19,62) = 0,0485×4000×0,0531 = 10,3 m. Avec PVC : ε = 0,0001, λ ≈ 0,0185, ΔH_PVC = 0,0185×4000×0,0531 = 3,93 m. La fonte ancienne a des pertes de charge 2,6× plus élevées que le PVC.'
      },
      {
        n: '3',
        enonce: 'Pour le même réseau, le débit est doublé de 8 à 16 L/s (conduite DN100 PVC, L=400 m). Estimez le nouveau J. Vérifiez que les pertes de charge sont environ 4 fois plus élevées.',
        solution: 'Pour Q=16 L/s : V=2×1,02=2,04 m/s (hors plage recommandée, mais pour l\'exercice). Re = 2,04×0,1/10⁻⁶ = 204 000. λ ≈ 0,018 (légèrement différent). J_Q16 = 0,018×(2,04²)/(2×9,81×0,1) = 0,018×4,16/1,962 = 0,0382 m/m. J_Q8 ≈ 0,0185×(1,02²/1,962) = 0,00980 m/m. Rapport = 0,0382/0,00980 = 3,9 ≈ 4. La relation en V² est bien vérifiée (doubler V ≈ quadrupler les pertes de charge).'
      },
      {
        n: '4',
        enonce: 'Quel diamètre minimum choisir pour transporter Q=25 L/s sur L=2 000 m avec une perte de charge maximale admissible de 10 m ? (PVC, k=0,01 mm, estimation λ=0,018)',
        solution: 'J_max = ΔH/L = 10/2000 = 0,005 m/m. Formule : J = λV²/(2gD) = λQ²/(2gDA²) = λQ²×16/(2gDπ²D⁴) = 8λQ²/(gπ²D⁵). D⁵ = 8λQ²/(gπ²J) = 8×0,018×0,025²/(9,81×9,87×0,005) = 8×0,018×0,000625/0,484 = 0,0000186 m⁵. D = (1,86×10⁻⁵)^0,2 = (1,86×10⁻⁵)^(1/5). log D = log(1,86×10⁻⁵)/5 = -4,73/5 = -0,946. D = 10^(-0,946) = 0,113 m = 113 mm → choisir DN125 PVC (D_int ≈ 128 mm). Vérification avec DN125 : V = 4×0,025/(π×0,128²) = 1,55 m/s ✓, J ≈ 4,1 m/km, ΔH = 8,2 m < 10 m ✓.'
      },
      {
        n: '5',
        enonce: 'Un adducteur béton DN400 (k=0,5 mm, D_int=400 mm), L=5 000 m, Q=120 L/s. Calculez J en m/km et la perte de charge totale.',
        solution: 'A = π×0,4²/4 = 0,1257 m². V = 0,12/0,1257 = 0,954 m/s. Re = 0,954×0,4/10⁻⁶ = 381 600. ε = 0,5/400 = 0,00125. Colebrook (ou Swamee-Jain) : λ ≈ 0,021. J = 0,021×0,954²/(2×9,81×0,4) = 0,021×0,910/7,848 = 0,00243 m/m = 2,43 m/km. ΔH = 0,00243×5000 = 12,2 m.'
      },
      {
        n: '6',
        enonce: 'Un réseau viticole de 20 ha nécessite un débit de pointe de 30 L/s. La conduite principale PEHD (k=0,01 mm) doit transporter ce débit sur 1 500 m avec ΔH ≤ 8 m. Choisissez le DN et vérifiez.',
        solution: 'J_max = 8/1500 = 0,00533 m/m. Avec λ≈0,017 (PEHD) : D⁵ = 8×0,017×0,030²/(9,81×9,87×0,00533) = 8×0,017×0,0009/0,516 = 2,37×10⁻⁴ → D = (2,37×10⁻⁴)^0,2 = 0,119 m. Choisir DN125 PEHD (D_int = 125 mm). V = 4×0,030/(π×0,125²) = 2,44 m/s → trop élevé. Choisir DN160 (D_int=160 mm) : V = 4×0,030/(π×0,16²) = 1,49 m/s ✓, Re=238000, λ≈0,016, J=0,016×1,49²/(2×9,81×0,16)=3,5 m/km, ΔH=5,2 m < 8 m ✓.'
      },
      {
        n: '7',
        enonce: 'Comparez les pertes de charge d\'une conduite DN150 PVC neuf (k=0,01 mm) et d\'une conduite DN150 fonte ancienne incrustée (k=3 mm) pour Q=12 L/s, L=1 000 m.',
        solution: 'DN150 D_int=153 mm. A=0,01839 m². V=12/1000/0,01839=0,653 m/s. Re=0,653×0,153/10⁻⁶=99 900. PVC : ε=0,01/153=6,5×10⁻⁵, λ≈0,018, J=0,018×0,653²/(2×9,81×0,153)=0,018×0,426/3,00=0,00256 m/m → ΔH=2,56 m. Fonte : ε=3/153=0,0196, λ≈0,047, J=0,047×0,426/3,00=0,00668 m/m → ΔH=6,68 m. La fonte ancienne a des pertes de charge 2,6× plus élevées : réhabilitation ou remplacement recommandé.'
      },
      {
        n: '8',
        enonce: 'Un bureau d\'études hésite entre DN150 et DN200 PVC pour transporter Q=20 L/s sur L=2 000 m. Comparez les pertes de charge et les vitesses pour les deux options.',
        solution: 'DN150 (D=153 mm) : A=0,01839 m², V=0,020/0,01839=1,09 m/s, Re=1,09×0,153/10⁻⁶=166700, λ≈0,0172, J=0,0172×1,09²/(2×9,81×0,153)=0,0172×1,188/3,00=0,00681 m/m=6,81 m/km, ΔH=13,6 m. DN200 (D=204 mm) : A=0,03267 m², V=0,020/0,03267=0,612 m/s, Re=0,612×0,204/10⁻⁶=124900, λ≈0,0165, J=0,0165×0,612²/(2×9,81×0,204)=0,0165×0,375/4,00=0,00155 m/m=1,55 m/km, ΔH=3,1 m. Le DN200 réduit les pertes de charge de 77% mais coûte plus cher à l\'investissement. Arbitrage selon le coût du pompage sur la durée de vie.'
      }
    ]
  },

  'GEMEAU-054': {
    id: 'GEMEAU-054',
    titre: 'Calcul des pertes de charge singulières',
    fiche: {
      intro: 'Lors du dimensionnement d\'un poste de refoulement, le technicien doit prendre en compte non seulement les pertes de charge régulières dans les conduites, mais aussi toutes les résistances locales : coudes, tés de branchement, réductions, vanne d\'arrêt, clapet anti-retour. Sur les courtes longueurs (conduites de pompe, postes), les pertes singulières peuvent représenter 20 à 50% des pertes de charge totales.',
      sections: [
        {
          titre: '1. Définition et origine',
          texte: 'Les pertes de charge singulières (ou locales) apparaissent aux discontinuités géométriques d\'une conduite : changements de direction (coudes), changements de section (convergents, divergents, réductions brusques), jonctions (tés, bifurcations), organes de robinetterie (vannes, clapets, régulateurs). Ces pertes sont dues à des décollements de la veine fluide, des turbulences locales et des chocs qui dissipent de l\'énergie.\n\nPhysiquement, la veine fluide ne peut pas suivre les changements brusques de direction ou de section : elle se détache de la paroi, crée des zones mortes et des tourbillons, qui dissipent de l\'énergie mécanique en chaleur. La dissipation est d\'autant plus forte que le changement est brusque et la vitesse élevée.',
          sous_sections: []
        },
        {
          titre: '2. Coefficient de perte de charge ξ',
          texte: 'La perte de charge singulière est exprimée par : ΔH_s = ξ × V²/(2g). Où ξ (xi) est le coefficient de résistance locale (adimensionnel, propre à chaque type de singularité), V est la vitesse de référence (généralement dans la section aval, ou la plus petite section). Ce coefficient est déterminé expérimentalement.\n\nValeurs typiques de ξ : Coude à 90° rayon court : ξ = 1,0-1,5 ; Coude à 90° rayon long (R=3D) : ξ = 0,2-0,5 ; Coude à 45° : ξ = 0,3-0,5 ; Té en dérivation : ξ = 1,0-1,5 ; Té droit : ξ = 0,1-0,3 ; Réduction brusque (entrée de conduite) : ξ = 0,5 ; Élargissement brusque (sortie) : ξ = (1-A1/A2)² (formule de Borda) ; Vanne à opercule plein ouvert : ξ = 0,1-0,3 ; Vanne à papillon plein ouvert : ξ = 0,2-0,5 ; Clapet anti-retour à battant : ξ = 2,0-5,0 ; Clapet anti-retour à ressort : ξ = 3,0-8,0 ; Compteur volumétrique : ξ = 5-15 selon perte de charge nominale. Ces valeurs sont indicatives : se référer aux données constructeur pour les organes de robinetterie.',
          sous_sections: []
        },
        {
          titre: '3. Méthode des longueurs équivalentes',
          texte: 'La méthode des longueurs équivalentes consiste à exprimer la perte de charge singulière comme une perte de charge régulière équivalente sur une longueur fictive L_éq de la même conduite : L_éq = ξ × D / λ. La perte de charge est donc : ΔH_s = λ × (L_éq/D) × V²/(2g) = ξ × V²/(2g). Cette méthode est pratique car elle permet de ramener toutes les résistances (régulières + singulières) à une longueur totale équivalente : L_tot = L_réelle + Σ(L_éq_singularités).\n\nExemple : coude 90° (ξ = 1,0) sur DN100 PVC (λ = 0,018) : L_éq = 1,0 × 0,1 / 0,018 = 5,6 m. Un coude DN100 équivaut donc à 5,6 m de conduite rectiligne du même diamètre. Pour un clapet anti-retour (ξ = 5) sur DN100 : L_éq = 5 × 0,1 / 0,018 = 27,8 m !',
          sous_sections: []
        },
        {
          titre: '4. Cumul et règles pratiques',
          texte: 'En pratique, on dresse un tableau des singularités, on calcule la longueur équivalente totale, et on ajoute à la longueur réelle. Exemple pour un poste de refoulement DN100, Q=10 L/s : 1 clapet anti-retour (ξ=4) + 2 coudes 90° courts (ξ=1,2 chacun) + 1 vanne à opercule (ξ=0,2) + 1 compteur (ΔH_c = 1 m pour ce débit). V = 10/0,00785 = 1,27 m/s. V²/2g = 0,0822 m. ΔH_singulier = (4 + 2×1,2 + 0,2) × 0,0822 = 6,6 × 0,0822 = 0,54 m + 1 m (compteur) = 1,54 m.\n\nRègle des 10-20% : pour des réseaux de distribution longue distance (adducteurs de plusieurs km), les pertes singulières représentent 10-20% des pertes régulières. Il est courant d\'ajouter un forfait de 10-20% sur les pertes régulières pour en tenir compte sans les calculer en détail. Cette approximation n\'est pas valable pour les postes de pompage ou les réseaux urbains avec de nombreux organes.',
          sous_sections: []
        }
      ],
      points: [
        'ΔH_s = ξ × V²/(2g) — ξ est propre à chaque singularité',
        'Coude 90° court : ξ ≈ 1,2 ; coude rayon long : ξ ≈ 0,3 ; clapet anti-retour : ξ ≈ 3-8',
        'Longueur équivalente : L_éq = ξ × D / λ — permet de raisonner en longueur fictive',
        'Élargissement brusque : ΔH = (V₁-V₂)²/(2g) (formule de Borda-Carnot)',
        'Réduction brusque (entrée de conduite) : ξ ≈ 0,5',
        'Sur les adducteurs longs : pertes singulières = 10-20% des pertes régulières (forfait)',
        'Sur les postes de pompage : pertes singulières peuvent dépasser 30% — toujours calculer',
        'Clapet anti-retour : perte de charge importante, à prendre en compte dès le dimensionnement de la pompe',
        'Vanne à papillon partiellement fermée : ξ augmente très fortement (ξ > 50 à 50% d\'ouverture)',
        'Données constructeur = référence absolue pour les organes de robinetterie industrielle'
      ],
      formules: [
        'Perte de charge singulière : ΔH_s = ξ × V²/(2g) → [m] ; ξ adimensionnel, V en m/s',
        'Longueur équivalente : L_éq = ξ × D / λ → [m] ; D en m, λ adimensionnel',
        'Élargissement brusque (Borda) : ΔH = (V₁ - V₂)² / (2g) → [m] ; V₁ > V₂',
        'Perte totale : ΔH_tot = λ(L+ΣL_éq)/D × V²/(2g) → [m]'
      ],
      retenir: 'ΔH_s = ξ × V²/2g · ξ dépend du type de singularité (coude, vanne, clapet) · Longueur équivalente = façon de cumuler régulières + singulières · Sur poste de pompage : toujours calculer les singulières · Clapet anti-retour = perte de charge importante ξ ≈ 3-8'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un tronçon de conduite DN150 PVC (λ=0,018, L=200 m, Q=18 L/s) comporte 3 coudes à 90° (ξ=1,2 chacun) et 1 vanne à opercule plein ouvert (ξ=0,2). Calculez les pertes de charge singulières et les pertes totales.',
        solution: 'A=π×0,153²/4=0,01839 m². V=0,018/0,01839=0,979 m/s. V²/2g=0,979²/19,62=0,0488 m. ΔH_singulier=(3×1,2+0,2)×0,0488=(3,6+0,2)×0,0488=3,8×0,0488=0,185 m. Longueur équivalente : L_éq=(3×1,2+0,2)×0,153/0,018=3,8×8,5=32,3 m. L_tot=200+32,3=232,3 m. J=0,018×0,979²/(2×9,81×0,153)=0,018×0,958/3,00=0,00575 m/m. ΔH_tot=0,00575×232,3=1,34 m (ou ΔH_reg=0,00575×200=1,15 m + ΔH_s=0,185 m = 1,33 m ✓).'
      },
      {
        n: '2',
        enonce: 'Un poste de pompage DN100 comprend (à la refoulement) : 1 clapet anti-retour (ξ=5), 1 vanne d\'isolement (ξ=0,3), 2 coudes 90° (ξ=1,2), 1 réduction DN80→DN100 (ξ=0,3 basé sur V dans DN80), Q=8 L/s. Calculez la perte de charge singulière totale.',
        solution: 'DN100 : A=0,00785 m², V_100=0,008/0,00785=1,019 m/s, V²/2g=0,0529 m. Clapet+vanne+coudes (basés sur V_100) : (5+0,3+2×1,2)×0,0529=7,7×0,0529=0,407 m. DN80 : A=π×0,08²/4=0,00503 m², V_80=0,008/0,00503=1,590 m/s, V²/2g=0,1287 m. Réduction : 0,3×0,1287=0,039 m. ΔH_s_total=0,407+0,039=0,446 m. À comparer à la HMT de la pompe (typiquement 20-50 m) : les singulières représentent ici environ 1-2% → vérification que le clapet est bien prépondérant.'
      },
      {
        n: '3',
        enonce: 'Calculez la longueur équivalente d\'un clapet anti-retour DN150 (ξ=6), λ=0,018 D_int=153 mm. Exprimez en mètres de conduite équivalente.',
        solution: 'L_éq = ξ × D / λ = 6 × 0,153 / 0,018 = 0,918 / 0,018 = 51 m. Ce clapet DN150 équivaut à 51 m de conduite droite. Sur une conduite de refoulement de 500 m réels, cela représente une augmentation de 10% de la longueur hydraulique.'
      },
      {
        n: '4',
        enonce: 'L\'eau passe brusquement d\'une conduite DN100 (V=2 m/s) à une conduite DN200 (V=0,5 m/s). Calculez la perte de charge par élargissement brusque (formule de Borda).',
        solution: 'ΔH_Borda = (V₁-V₂)²/(2g) = (2,0-0,5)²/(2×9,81) = 1,5²/19,62 = 2,25/19,62 = 0,115 m. Cette perte de charge correspond à l\'énergie dissipée par les tourbillons dans la zone d\'élargissement brusque. Pour un convergent progressif (angle < 15°), cette perte serait réduite à 0,02-0,05 m.'
      },
      {
        n: '5',
        enonce: 'Un adducteur DN300 (λ=0,020, L=8 000 m, Q=80 L/s) comporte diverses singularités. Estimez les pertes de charge totales en utilisant la règle des 15% pour les singulières.',
        solution: 'A=π×0,30²/4=0,07069 m². V=0,080/0,07069=1,132 m/s. Re=1,132×0,3/10⁻⁶=339600. J=0,020×1,132²/(2×9,81×0,3)=0,020×1,281/5,886=0,00435 m/m. ΔH_régulier=0,00435×8000=34,8 m. Pertes singulières (forfait 15%) = 34,8×0,15=5,2 m. ΔH_total = 34,8+5,2=40,0 m. La HMT de la pompe doit être au moins 40 m + différence de cotes.'
      },
      {
        n: '6',
        enonce: 'Une vanne papillon DN200 est à 50% d\'ouverture (ξ=45). Q=30 L/s. Calculez la perte de charge à travers cette vanne. Comparez à ξ=0,4 (pleine ouverture).',
        solution: 'A=π×0,204²/4=0,03267 m². V=0,030/0,03267=0,918 m/s. V²/2g=0,918²/19,62=0,0430 m. Pleine ouverture : ΔH=0,4×0,0430=0,017 m. À 50% : ΔH=45×0,0430=1,93 m. La vanne partiellement fermée crée une perte de charge 113 fois plus élevée que la pleine ouverture. La régulation de débit par vanne est très inefficace énergétiquement : préférer la régulation par variation de vitesse (variateur de fréquence sur pompe).'
      },
      {
        n: '7',
        enonce: 'Une conduite de refoulement DN80 PVC (λ=0,018, L=150 m) comporte : 1 clapet anti-retour (ξ=7), 3 coudes 90° (ξ=1,5 chacun), 1 vanne (ξ=0,3). Q=6 L/s. Calculez ΔH total et la longueur équivalente totale.',
        solution: 'D_int=80 mm=0,08 m. A=π×0,08²/4=0,00503 m². V=0,006/0,00503=1,193 m/s. V²/2g=1,193²/19,62=0,0726 m. Σξ=7+3×1,5+0,3=7+4,5+0,3=11,8. ΔH_s=11,8×0,0726=0,857 m. L_éq_totale=11,8×0,08/0,018=52,4 m. L_tot=150+52,4=202,4 m. J=0,018×1,193²/(2×9,81×0,08)=0,018×1,423/1,570=0,01631 m/m. ΔH_tot=0,01631×202,4=3,30 m. Vérification : ΔH_reg=0,01631×150=2,45 m + ΔH_s=0,857 m = 3,31 m ✓.'
      },
      {
        n: '8',
        enonce: 'Comparez les pertes de charge singulières d\'un coude 90° à grand rayon (ξ=0,3) et d\'un coude à faible rayon (ξ=1,5) sur DN200, Q=50 L/s. Quel est le gain en m CE ?',
        solution: 'A=π×0,204²/4=0,03267 m². V=0,050/0,03267=1,531 m/s. V²/2g=1,531²/19,62=0,119 m. Coude grand rayon : ΔH=0,3×0,119=0,036 m. Coude faible rayon : ΔH=1,5×0,119=0,179 m. Gain = 0,179-0,036=0,143 m CE par coude. Sur 10 coudes dans un réseau : gain total = 1,43 m CE ≈ 0,14 bar. Pour une pompe de 30 m HMT, utiliser des coudes grand rayon réduit la HMT de 4,8% → économie d\'énergie significative sur la durée de vie.'
      }
    ]
  },

  'GEMEAU-055': {
    id: 'GEMEAU-055',
    titre: 'Dimensionnement d\'une conduite simple',
    fiche: {
      intro: 'Une commune souhaite créer un nouveau hameau de 150 habitations. Le service technique doit dimensionner la conduite de desserte depuis le réservoir principal, distant de 1 800 m, positionné à une cote supérieure. Le technicien doit choisir le diamètre nominal qui respecte à la fois la vitesse d\'écoulement, la pression de service à l\'abonné le plus défavorisé, et la pression maximale admissible.',
      sections: [
        {
          titre: '1. Méthodologie globale de dimensionnement',
          texte: 'Le dimensionnement d\'une conduite simple se déroule en cinq étapes successives. (1) Définir le débit de dimensionnement Q (débit de pointe, débit incendie, débit diurne maximum). (2) Choisir une vitesse admissible V et calculer le diamètre théorique D = √(4Q/πV). (3) Normaliser au DN commercial supérieur et recalculer la vitesse réelle. (4) Calculer les pertes de charge ΔH = J × L (régulières + 15% singulières). (5) Vérifier que la pression résiduelle en bout de conduite est dans la plage acceptable (P_min < P < P_max).\n\nSi la pression résiduelle est insuffisante, on augmente le DN pour réduire les pertes de charge, ou on installe une pompe. Si la pression est excessive (point bas), on installe un réducteur de pression (PRV). Le résultat final est une conduite cohérente avec les contraintes hydrauliques, économiques (coût de la conduite) et énergétiques (coût de pompage éventuel).',
          sous_sections: []
        },
        {
          titre: '2. Vitesses admissibles et débits de calcul',
          texte: 'La vitesse d\'écoulement est le premier paramètre à optimiser. Une vitesse trop faible (< 0,3 m/s) favorise la stagnation de l\'eau, le développement biofilm et les incrustations. Une vitesse trop élevée (> 2,5 m/s) provoque des pertes de charge excessives, une abrasion accélérée, et des risques de coup de bélier.\n\nPlages recommandées : AEP en distribution (conduite principale DN50-DN300) : 0,5-2 m/s ; AEP longue distance (adducteurs DN > 300 mm) : 0,8-1,5 m/s ; Refoulement de pompe : 1,0-2,5 m/s ; Assainissement (écoulement gravitaire) : 0,6-3 m/s (auto-curage > 0,6 m/s) ; Irrigation : 0,5-2 m/s.\n\nLe débit de dimensionnement est le débit maximal susceptible d\'être transporté. Pour l\'AEP résidentielle, on utilise le débit de pointe journalière (DPJ) : Q_DPJ = Q_moyen × Coefficient de pointe. Le coefficient de pointe est de l\'ordre de 1,5 à 3 selon la taille de la commune et la présence de grands consommateurs.',
          sous_sections: []
        },
        {
          titre: '3. Calcul du diamètre et normalisation',
          texte: 'Le diamètre théorique est calculé depuis la contrainte de vitesse : D_th = √(4Q/(π×V)). Pour V = 1,0 m/s et Q = 15 L/s = 0,015 m³/s : D_th = √(4×0,015/(π×1,0)) = √(0,0191) = 0,138 m = 138 mm. On choisit le DN commercial immédiatement supérieur : DN150 (D_int réel ≈ 153 mm en PVC). La vitesse réelle dans le DN150 : V_réel = 4Q/(π×D²) = 4×0,015/(π×0,153²) = 0,060/0,01839 = 0,816 m/s. Cette vitesse est dans la plage (0,5-2 m/s) ✓.\n\nLes diamètres nominaux commerciaux (DN) normalisés en PVC pression (NF EN ISO 4422) : DN50, DN63, DN75, DN90, DN110, DN125, DN140, DN160, DN200, DN250, DN315, DN400, DN500. Les diamètres intérieurs dépendent de la classe de pression (PN6, PN10, PN16). Pour DN150 en PN10 (5 bar de pression maximale), l\'épaisseur nominale et le diamètre intérieur varient selon le fabricant : D_int ≈ 153-158 mm. Toujours vérifier les données constructeur pour le calcul hydraulique précis.',
          sous_sections: []
        },
        {
          titre: '4. Vérification des pressions et application Bernoulli',
          texte: 'Après avoir choisi le DN, on vérifie la pression résiduelle au point de livraison (bout de conduite) via l\'équation de Bernoulli généralisée. Pour un système gravitaire (réservoir amont + conduite + point de livraison aval) : P_livraison/(ρg) = (Z_réservoir - Z_livraison) - ΔJ_total. En clair : pression disponible (m CE) = différence de cotes (m) - pertes de charge totales (m).\n\nExemple : réservoir à Z=120 m, point de livraison à Z=95 m, ΔJ=12 m. P_livraison = (120-95)-12 = 13 m CE = 1,27 bar. Cette pression est supérieure à 2 bar ? Non → il faut vérifier. La pression minimale réglementaire à l\'aval du compteur abonné est fixée à 1 bar (10 m CE) en France (arrêté du 17 décembre 2008). En pratique, on vise 2 bar minimum au point de livraison pour maintenir 1 bar chez l\'abonné après la chute de charge dans la conduite interne. La pression maximale admissible est généralement 6-8 bar (risque de casse des compteurs, des robinets et du réseau intérieur).',
          sous_sections: []
        }
      ],
      points: [
        'Étapes : définir Q → choisir V → calculer D → normaliser DN → calculer ΔJ → vérifier pressions',
        'Vitesse admissible AEP : 0,5 à 2 m/s pour éviter stagnation et pertes de charge excessives',
        'D_th = √(4Q/πV) → normaliser au DN commercial supérieur',
        'Pression résiduelle = différence de cotes - pertes de charge totales (Bernoulli simplifié)',
        'Pression minimale réglementaire AEP France : 1 bar à l\'aval du compteur',
        'Pression maximale admissible : 6 à 8 bar (protection des compteurs et réseau intérieur)',
        'Si P_résiduelle insuffisante : augmenter DN ou ajouter une pompe',
        'Si P_résiduelle excessive : installer un réducteur de pression (PRV)',
        'Le débit de pointe = débit moyen × coefficient de pointe (1,5 à 3 selon contexte)',
        'Pertes de charge totales = régulières + 15% forfaitaire pour singulières (ou calcul détaillé)'
      ],
      formules: [
        'Diamètre théorique : D_th = √(4Q / (π × V)) → [m] ; Q en m³/s, V en m/s',
        'Vitesse réelle : V = 4Q / (π × D²) → [m/s] ; Q en m³/s, D en m',
        'Pression résiduelle gravitaire : P/(ρg) = (Z_amont - Z_aval) - ΔJ_total → [m CE]',
        'Pression en bar : P(bar) = P(m CE) / 10,2',
        'Perte de charge totale avec forfait : ΔH_tot = 1,15 × J × L → [m] ; J en m/m'
      ],
      retenir: 'Méthode en 5 étapes : Q → V → D_th → DN commercial → vérif pressions · Vitesse : 0,5-2 m/s · P_min AEP = 1 bar · P_max = 6-8 bar · Si pression trop faible → augmenter DN · Si pression trop forte → réducteur de pression'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Dimensionnez la conduite principale AEP pour un hameau de 200 habitants. Q_moyen = 1,5 L/s. Coefficient de pointe = 2,0. Conduite PVC (k=0,01 mm), longueur L=2 500 m. Réservoir à Z=115 m, hameau à Z=82 m.',
        solution: 'Q_pointe = 1,5 × 2,0 = 3,0 L/s. Vitesse cible : 1,0 m/s. D_th = √(4×0,003/(π×1,0)) = √(0,00382) = 0,0618 m = 61,8 mm → DN63 ou DN75. Choix DN75 PVC (D_int=75,2 mm). V=4×0,003/(π×0,0752²)=0,012/0,00445=2,70 m/s → trop élevé! Prendre DN90 (D_int=90,2 mm): V=0,012/π×0,0902²/4=0,012/0,00639=1,88 m/s → limite haute mais acceptable. ΔJ: Re=1,88×0,0902/10⁻⁶=169600, λ≈0,018, J=0,018×1,88²/(2×9,81×0,0902)=0,018×3,534/1,770=0,0359 m/m. ΔH_tot=1,15×0,0359×2500=103 m. P_livraison = (115-82)-103 = -70 m CE → NÉGATIF! Il faut un DN beaucoup plus grand. Choisir DN125 (D_int=126,6mm): V=0,012/π×0,1266²/4=0,012/0,01259=0,953 m/s ✓. J=0,018×0,953²/(2×9,81×0,1266)=0,018×0,908/2,484=0,00658 m/m, ΔH=1,15×0,00658×2500=18,9 m. P=33-18,9=14,1 m CE=1,38 bar ✓.'
      },
      {
        n: '2',
        enonce: 'Calculez le diamètre théorique pour transporter Q=50 L/s à la vitesse de 1,2 m/s. Quel DN commercial choisir ? Quelle est la vitesse réelle dans ce DN ?',
        solution: 'D_th = √(4×0,050/(π×1,2)) = √(0,0531) = 0,230 m = 230 mm. DN commercial supérieur : DN250 (D_int≈252 mm). V_réel = 4×0,050/(π×0,252²) = 0,200/0,0499 = 1,001 m/s. Vitesse dans la plage admissible ✓. Note : on aurait pu choisir DN200 (D_int=204 mm) : V = 0,200/0,03267 = 1,53 m/s — aussi acceptable mais pertes de charge plus élevées.'
      },
      {
        n: '3',
        enonce: 'Une conduite de refoulement DN100 PVC (D_int=103 mm), L=800 m, Q=10 L/s. Le réservoir aval est à Z=50 m, la bâche d\'aspiration à Z=30 m. Calculez la HMT (Hauteur Manométrique Totale) nécessaire pour la pompe.',
        solution: 'V=4×0,010/(π×0,103²)=0,040/0,00834=4,80 m/s → trop élevé! Mais continuons pour l\'exercice. Re=4,80×0,103/10⁻⁶=494400, λ≈0,013. J=0,013×4,80²/(2×9,81×0,103)=0,013×23,04/2,019=0,148 m/m. ΔH_reg=0,148×800=118 m → aberrant pour une conduite de refoulement réaliste. Conclusion : DN100 est trop petit pour 10 L/s (V trop élevée). En réalité, il faudrait DN150 (V=0,816 m/s, J=5,75 m/km, ΔH_reg=4,6 m, HMT = ΔZ + ΔH = (50-30) + 4,6×1,15 = 20 + 5,3 = 25,3 m).'
      },
      {
        n: '4',
        enonce: 'Un point bas du réseau est à Z=22 m NGF, alimenté depuis un réservoir à Z=95 m. La pression de service maximale admissible est 7 bar. Faut-il installer un réducteur de pression ? Si oui, régler la pression de sortie à 4 bar.',
        solution: 'Pression statique en ce point = (95-22) = 73 m CE = 73/10,2 = 7,15 bar > 7 bar. OUI, un réducteur de pression est nécessaire. En régime dynamique (avec pertes de charge), la pression sera légèrement inférieure mais reste proche de la statique en période de faible consommation. Le PRV sera réglé à 4 bar (40,8 m CE).'
      },
      {
        n: '5',
        enonce: 'Comparez le coût hydraulique (pertes de charge annuelles × débit × heures de fonctionnement) de DN150 vs DN200 pour transporter Q=30 L/s, L=3 000 m, 8 000 h/an. PVC, λ≈0,017.',
        solution: 'DN150 (D=153mm): V=0,030/0,01839=1,631 m/s, J=0,017×1,631²/(2×9,81×0,153)=0,017×2,660/3,001=0,01507 m/m, ΔH=45,2 m. DN200 (D=204mm): V=0,030/0,03267=0,919 m/s, J=0,017×0,919²/(2×9,81×0,204)=0,017×0,845/4,002=0,003587 m/m, ΔH=10,8 m. Puissance perdue (P=ρgQΔH) : DN150: P=1000×9,81×0,030×45,2=13 300 W=13,3 kW. DN200: P=1000×9,81×0,030×10,8=3 177 W=3,2 kW. Économie annuelle (0,10€/kWh): (13,3-3,2)×8000×0,10=8 080 €/an. Surcoût DN200 vs DN150 sur 3 000 m : environ 30 000-50 000 €. Retour sur investissement < 5 ans.'
      },
      {
        n: '6',
        enonce: 'Une antenne terminale DN63 PVC (D_int=61,2 mm) alimente 20 maisons (Q_pointe = 4 L/s), L=400 m. Z_départ=88 m NGF, LP_départ=102 m NGF. Calculez la pression résiduelle en bout d\'antenne (Z=75 m).',
        solution: 'A=π×0,0612²/4=0,00294 m². V=0,004/0,00294=1,36 m/s ✓. Re=1,36×0,0612/10⁻⁶=83200. λ≈0,019. J=0,019×1,36²/(2×9,81×0,0612)=0,019×1,850/1,200=0,0293 m/m. ΔH_reg=0,0293×400=11,7 m. ΔH_tot=1,15×11,7=13,5 m. LP_bout=102-13,5=88,5 m. P_bout=LP_bout-Z_bout=88,5-75=13,5 m CE=1,32 bar. Supérieur à 1 bar ✓. La pression est acceptable mais limite — envisager DN75 pour davantage de réserve.'
      },
      {
        n: '7',
        enonce: 'Un village de 800 habitants est alimenté depuis un réservoir à Z=140 m. La conduite principale DN200 PVC (L=3 500 m) dessert les points les plus éloignés à Z=98 m. Q_pointe = 25 L/s. Vérifiez si la pression est acceptable aux deux extrémités.',
        solution: 'V=4×0,025/(π×0,204²)=0,100/0,03267=3,062 m/s — trop élevé pour DN200! Essayons DN250 (D_int=252mm): V=0,100/π×0,252²/4=0,100/0,04990=2,004 m/s — limite haute. Utilisons DN250. Re=2,004×0,252/10⁻⁶=504700, λ≈0,0155. J=0,0155×2,004²/(2×9,81×0,252)=0,0155×4,016/4,946=0,01258 m/m. ΔH_tot=1,15×0,01258×3500=50,7 m. P_extrémité=(140-98)-50,7=42-50,7=-8,7 m CE → NÉGATIF! Il faut DN315 ou une pompe de surpression.'
      },
      {
        n: '8',
        enonce: 'Rédigez synthétiquement la note de calcul pour une conduite DN125 PVC (D_int=126,6 mm), L=1 200 m, Q_pointe=8 L/s, réservoir à Z=105 m, abonné le plus défavorisé à Z=88 m. (λ=0,017)',
        solution: 'NOTE DE CALCUL CONDUITE DN125 PVC. Données : D=0,1266 m, L=1200 m, Q=8 L/s=0,008 m³/s, Z_amont=105 m, Z_aval=88 m. Section A=π×0,1266²/4=0,01259 m². Vitesse V=0,008/0,01259=0,635 m/s ∈ [0,5;2] ✓. Re=0,635×0,1266/10⁻⁶=80400. Perte de charge régulière : J=0,017×0,635²/(2×9,81×0,1266)=0,017×0,403/2,484=0,00276 m/m. ΔH_reg=0,00276×1200=3,31 m. ΔH_tot=1,15×3,31=3,81 m. Pression résiduelle P=(105-88)-3,81=17-3,81=13,2 m CE=1,29 bar ✓ (>1 bar). CONCLUSION : DN125 PVC est adapté — vitesse et pression correctes.'
      }
    ]
  },

  'GEMEAU-056': {
    id: 'GEMEAU-056',
    titre: 'Réseaux ramifiés et réseaux maillés',
    fiche: {
      intro: 'Le gestionnaire d\'un réseau AEP de ville moyenne doit analyser la capacité du réseau existant à alimenter un nouveau quartier. Il dispose d\'un modèle numérique (logiciel Epanet) mais doit aussi savoir réaliser des calculs à la main sur des sous-réseaux simples. La distinction entre réseau ramifié (calcul direct) et réseau maillé (calcul itératif) est fondamentale pour choisir la méthode appropriée.',
      sections: [
        {
          titre: '1. Réseaux ramifiés',
          texte: 'Un réseau ramifié (ou réseau en arborescence) est un réseau dans lequel il n\'existe qu\'un seul chemin hydraulique entre la source et chaque nœud. Il n\'y a pas de boucle : si l\'on coupe un tronçon, une partie du réseau est privée d\'alimentation. C\'est la topologie typique des réseaux ruraux et des réseaux d\'irrigation.\n\nCalcul d\'un réseau ramifié : on part des extrémités et on remonte vers la source. Étape 1 (débits) : les débits dans chaque tronçon se calculent par la loi des nœuds (conservation du débit) : Q_tronçon = somme des débits soutirés en aval. On commence par les antennes terminales (Q_terminal = Q_abonnés desservis) et on cumule vers l\'amont. Étape 2 (charges) : on part de la source (h_p connue) et on calcule les pertes de charge tronçon par tronçon vers les extrémités. En chaque nœud : h_p(aval) = h_p(amont) - ΔJ(tronçon). La pression en tout nœud est : P = h_p - Z.\n\nSi la pression en un nœud terminal est insuffisante, on peut : augmenter le DN du tronçon critique, créer un nouveau raccordement (qui transforme le réseau en maillé), ou installer une pompe de surpression.',
          sous_sections: []
        },
        {
          titre: '2. Réseaux maillés et méthode de Hardy-Cross',
          texte: 'Un réseau maillé comporte des boucles fermées : il existe plusieurs chemins hydrauliques entre la source et certains nœuds. La sécurité d\'alimentation est meilleure (rupture d\'un tronçon = alimentation possible par un chemin alternatif) mais le calcul est plus complexe car les débits dans les tronçons ne sont pas directement déterminés par la loi des nœuds (plusieurs solutions vérifient la loi des nœuds, mais une seule vérifie aussi la loi des mailles).\n\nLa méthode de Hardy-Cross est la méthode itérative classique de résolution des réseaux maillés. Pour chaque maille, la somme algébrique des pertes de charge est nulle en régime permanent (loi des mailles) : ΣΔJ_i = 0. Si ce n\'est pas vérifié, on calcule une correction de débit ΔQ pour chaque maille : ΔQ = -ΣJ_i / (2 × Σ|J_i/Q_i|). On applique cette correction aux débits de tous les tronçons de la maille (+ ou - selon le sens). On répète jusqu\'à ce que |ΔQ| < ε (convergence). La convergence est généralement atteinte en 5-10 itérations pour les réseaux courants.',
          sous_sections: []
        },
        {
          titre: '3. Réseaux gravitaires vs sous pression',
          texte: 'Un réseau gravitaire fonctionne par différence de niveau : l\'eau s\'écoule du réservoir (haut) vers les abonnés (bas) sans pompe. C\'est le cas des réseaux de gravité alpine, des irrigations par canal et des réseaux de drainage. La ligne piézométrique correspond exactement à la surface libre du réservoir amont, et elle décroît sous l\'effet des pertes de charge.\n\nUn réseau sous pression (pressurisé) est alimenté par une ou plusieurs pompes. La pression est maintenue par la pompe au-dessus de la pression atmosphérique dans tout le réseau. C\'est le cas des réseaux d\'assainissement sous pression (conduite de refoulement d\'un poste de pompage), des réseaux d\'irrigation par aspersion, et des réseaux AEP dans les zones plates sans réservoir dominant.\n\nLes logiciels de modélisation hydraulique (Epanet, gratuit, développé par l\'US EPA) permettent de calculer les débits et pressions dans des réseaux complexes (centaines de nœuds et tronçons) en quelques secondes. Ils intègrent automatiquement la méthode de Hardy-Cross ou des méthodes de gradient. Cependant, la connaissance des fondements théoriques (lois des nœuds et des mailles) est indispensable pour interpréter correctement les résultats.',
          sous_sections: []
        },
        {
          titre: '4. Sectorisation et gestion des pressions',
          texte: 'La sectorisation consiste à diviser le réseau en zones hydrauliquement indépendantes (secteurs ou DMZ : Distinct Metered Zones), séparées par des vannes normalement fermées et équipées de compteurs de sectorisation. Les objectifs sont : contrôle et réduction des pertes (RFU = Rendement Fonctionnel d\'Usage), gestion des pressions par secteur, localisation rapide des fuites par bilan de nuit, meilleure connaissance du patrimoine réseau.\n\nLa gestion de la pression (modulation nocturne) consiste à réduire la pression dans les secteurs la nuit (période de faible consommation), ce qui réduit les fuites (une baisse de pression de 20% réduit les fuites de 10-20%) et diminue la fréquence des casses. Un réducteur de pression télécommandé ou piloté par un automate peut moduler automatiquement la pression selon l\'heure et la demande.',
          sous_sections: []
        }
      ],
      points: [
        'Réseau ramifié : un seul chemin source→nœud, calcul direct par la loi des nœuds',
        'Réseau maillé : boucles → meilleure sécurité mais calcul itératif (Hardy-Cross ou logiciel)',
        'Loi des nœuds : ΣQ_entrants = ΣQ_sortants en tout nœud (conservation du débit)',
        'Loi des mailles : Σ ΔJ_i = 0 autour de toute boucle fermée (en régime permanent)',
        'Hardy-Cross : correction ΔQ = -ΣJ_i / (2Σ|J_i/Q_i|) par boucle, à itérer jusqu\'à convergence',
        'Réseau gravitaire : alimenté par différence de niveau, sans pompe',
        'Réseau sous pression : alimenté par pompe — HMT = ΔZ + ΔJ_total',
        'Epanet (US EPA, gratuit) : logiciel de référence pour la modélisation hydraulique des réseaux',
        'Sectorisation (DMZ) : diviser en zones indépendantes pour contrôler les fuites et les pressions',
        'Modulation de pression nocturne : réduire la pression la nuit pour diminuer les fuites et les casses'
      ],
      formules: [
        'Loi des nœuds : ΣQ_i = 0 → [m³/s] ; Q entrants positifs, soutirés négatifs',
        'Loi des mailles : Σ(J_i × L_i) = 0 → [m] autour de toute boucle en régime permanent',
        'Correction Hardy-Cross : ΔQ = -ΣJ_i / (2 × Σ|J_i/Q_i|) → [m³/s] ; J en m, Q en m³/s',
        'Pression en tout nœud : P = (h_p - Z) × ρg → [Pa] ou P(bar) = (h_p - Z) / 10,2'
      ],
      retenir: 'Ramifié = calcul direct, vulnérable · Maillé = calcul itératif (Hardy-Cross), redondant · Loi des nœuds + loi des mailles = base du calcul de réseau · Epanet pour les réseaux complexes · Sectorisation = outil de gestion des fuites et des pressions'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un réseau ramifié simple : source S (h_p=80 m), tronçon S-A (ΔJ=5 m, Z_A=60 m), tronçon A-B (ΔJ=3 m, Z_B=58 m), tronçon A-C (ΔJ=6 m, Z_C=65 m). Calculez la pression en A, B et C.',
        solution: 'h_p(A)=80-5=75 m. P_A=(75-60)=15 m CE=1,47 bar. h_p(B)=75-3=72 m. P_B=(72-58)=14 m CE=1,37 bar. h_p(C)=75-6=69 m. P_C=(69-65)=4 m CE=0,39 bar. Le nœud C est le plus défavorisé (4 m CE < pression minimale de 10 m CE). Il faut soit augmenter le DN du tronçon A-C, soit rehausser la source.'
      },
      {
        n: '2',
        enonce: 'Dans un réseau ramifié, calculez les débits dans chaque tronçon : Q_B=3 L/s, Q_C=5 L/s, Q_D=2 L/s (à partir d\'un tronçon B se ramifiant en C et D). Tronçon principal S-B ?',
        solution: 'Loi des nœuds au nœud B : Q_SB = Q_B + Q_tronçon_B-C + Q_tronçon_B-D. Mais Q_B=3 L/s est le prélèvement en B. Q_tronçon_BD = 2 L/s (vers D). Q_tronçon_BC = 5 L/s (vers C). Q_SB = 3 + 5 + 2 = 10 L/s. Le tronçon principal S-B transporte 10 L/s.'
      },
      {
        n: '3',
        enonce: 'Pour une maille rectangulaire simple avec 4 tronçons (A-B, B-C, C-D, D-A), les débits initiaux estimés sont Q_AB=8, Q_BC=3, Q_CD=5, Q_DA=2 L/s (sens horaire). Les pertes de charge sont J_AB=4 m, J_BC=1 m, J_CD=3 m, J_DA=1,5 m. Calculez ΔQ (1 itération Hardy-Cross). (Sens horaire = positif)',
        solution: 'Σ J_i (avec signes selon sens) = 4 + 1 - 3 - 1,5 = 0,5 m ≠ 0 → déséquilibre. Σ|J_i/Q_i| = 4/8 + 1/3 + 3/5 + 1,5/2 = 0,500 + 0,333 + 0,600 + 0,750 = 2,183 m/(m³/s)×1000. ΔQ = -0,5/(2×2,183) = -0,5/4,366 = -0,115 L/s. On corrige : Q_AB=8-0,115=7,885 L/s, Q_BC=3-0,115=2,885 L/s, Q_CD=5+0,115=5,115 L/s, Q_DA=2+0,115=2,115 L/s. Répéter jusqu\'à |ΔQ|<0,01 L/s.'
      },
      {
        n: '4',
        enonce: 'Expliquez pourquoi un réseau maillé est préféré à un réseau ramifié pour l\'alimentation d\'un hôpital. Quels sont les inconvénients ?',
        solution: 'Avantages du réseau maillé pour un hôpital : sécurité d\'alimentation (si un tronçon est rompu, l\'hôpital est alimenté par un chemin alternatif) ; pressions plus homogènes ; possibilité d\'isoler un tronçon pour entretien sans couper l\'alimentation. Inconvénients : coût d\'investissement supérieur (plus de conduites, plus de vannes) ; calcul hydraulique plus complexe ; en cas de très faible consommation, les vitesses dans certains tronçons peuvent être quasi nulles (risque de stagnation de l\'eau → problème qualité).'
      },
      {
        n: '5',
        enonce: 'Un réseau AEP d\'une ville de 5 000 habitants est sectorisé en 4 DMZ. Le compteur de secteur de la DMZ3 indique un débit nocturne minimum de 6 L/s alors que la consommation légitime nocturne estimée est de 1,5 L/s. Calculez le volume de fuite journalier dans ce secteur.',
        solution: 'Débit de fuite = débit nocturne - consommation légitime = 6,0 - 1,5 = 4,5 L/s. Volume fuite quotidien = 4,5 L/s × 86 400 s = 388 800 L/j ≈ 389 m³/j. Si la journée comporte une période diurne de consommation plus élevée, les fuites sont proportionnelles à la pression, donc plus importantes en journée. Estimation pessimiste annuelle : 389 × 365 = 142 085 m³/an. À 1,5 €/m³, coût annuel de la fuite : 213 000 €/an — justifie un programme de recherche de fuites.'
      },
      {
        n: '6',
        enonce: 'Loi des nœuds : Au nœud A, 3 tronçons arrivent avec Q1=12 L/s, Q2=8 L/s, et 2 tronçons partent avec Q3=?, Q4=7 L/s. Q1 et Q2 sont injectés, Q3 et Q4 sont soutirés. Calculez Q3.',
        solution: 'Loi de conservation du débit : ΣQ_entrants = ΣQ_sortants. Q1 + Q2 = Q3 + Q4. 12 + 8 = Q3 + 7. Q3 = 20 - 7 = 13 L/s. Le tronçon 3 transporte 13 L/s en sortant du nœud A.'
      },
      {
        n: '7',
        enonce: 'Un réseau maillé a une boucle avec Σ J_i = -2,4 m et Σ|J_i/Q_i| = 3,6 m/(L/s). Calculez ΔQ et indiquez dans quel sens appliquer la correction.',
        solution: 'ΔQ = -ΣJ_i / (2 × Σ|J_i/Q_i|) = -(-2,4) / (2 × 3,6) = +2,4 / 7,2 = +0,333 L/s. La correction est positive (+0,333 L/s dans le sens de convention de la boucle). Les débits des tronçons de sens horaire (si c\'est la convention positive) augmentent de 0,333 L/s, ceux de sens anti-horaire diminuent de 0,333 L/s. Cette correction tend à équilibrer la loi des mailles (rendre Σ J_i → 0).'
      },
      {
        n: '8',
        enonce: 'Décrivez les 4 étapes principales d\'une étude de modélisation hydraulique d\'un réseau communal avec le logiciel Epanet.',
        solution: 'Étape 1 - Collecte des données : relever les tronçons (DN, longueur, matériau, âge), les nœuds (cote Z, débit prélevé), les pompes (courbe H-Q) et réservoirs (cote du plan d\'eau). Étape 2 - Saisie du modèle : créer les nœuds et tronçons dans Epanet, renseigner les paramètres hydrauliques (rugosité, coefficients), calibrer le modèle sur des mesures de terrain (pression et débit mesurés = calculés). Étape 3 - Simulations : simuler en régime permanent (instantané) et en simulation étendue sur 24h (profil de consommation journalier). Étape 4 - Analyse et préconisations : identifier les nœuds à pression insuffisante ou excessive, les tronçons sous-dimensionnés, les vitesses anormales, et proposer des améliorations (renforcement, création de maille, réducteur de pression).'
      }
    ]
  },

  'GEMEAU-057': {
    id: 'GEMEAU-057',
    titre: 'Géométrie des écoulements à surface libre',
    fiche: {
      intro: 'Un technicien d\'assainissement doit vérifier la capacité hydraulique d\'un collecteur béton DN600 existant pour y raccorder un nouveau lotissement. Avant d\'appliquer la formule de Manning-Strickler, il doit d\'abord maîtriser la géométrie de la section hydraulique : section mouillée, périmètre mouillé, rayon hydraulique. Ces paramètres varient avec le niveau d\'eau dans la conduite, rendant le calcul plus complexe qu\'en conduite pleine.',
      sections: [
        {
          titre: '1. Types de sections hydrauliques',
          texte: 'Un écoulement à surface libre est un écoulement pour lequel l\'interface eau-air est à pression atmosphérique. Les canaux et collecteurs d\'assainissement fonctionnent généralement en écoulement à surface libre (partiellement pleins). Les principales formes de sections utilisées en hydraulique urbaine et agricole sont : la section rectangulaire (canaux en béton ou maçonnerie, simples à calculer), la section trapézoïdale (canaux en terre ou béton, stable et économique), la section circulaire (collecteurs assainissement et conduites gravitaires), la section en U ou voûte (galeries souterraines), et la section ovoïde (collecteurs urbains anciens, meilleure auto-curage à faible débit).\n\nChaque forme de section a des avantages spécifiques. La section circulaire est universelle pour les collecteurs car elle résiste bien aux charges extérieures et offre une bonne vitesse d\'auto-curage. La section trapézoïdale est la plus économique pour les grands canaux d\'irrigation car elle peut être réalisée en terre compactée sans béton. La section rectangulaire est utilisée pour les canaux à débit précis (canaux d\'amenée de turbines, seuils de mesure).',
          sous_sections: []
        },
        {
          titre: '2. Paramètres géométriques fondamentaux',
          texte: 'Pour tout type de section, on définit : h = hauteur d\'eau (tirant d\'eau, en m), A = section mouillée ou section hydraulique (surface de la section traversée par l\'eau, en m²), P = périmètre mouillé (longueur du contour mouillé : fond + rives, en m, sans la surface libre), R_h = rayon hydraulique = A/P (en m, paramètre clé de la formule de Manning-Strickler), T = largeur au miroir (largeur de la surface libre, en m).\n\nPour une section rectangulaire de largeur b et hauteur d\'eau h : A = b × h, P = b + 2h, R_h = (bh)/(b+2h), T = b. Pour une section trapézoïdale de base b, pente de rives m (largeur horizontale pour 1 m de hauteur verticale) et hauteur h : A = (b + mh) × h, P = b + 2h√(1+m²), R_h = A/P, T = b + 2mh. Pour une section circulaire de diamètre D, avec un angle au centre 2θ (mesuré depuis le bas) : A = (D²/4)(θ - sinθ cosθ) = (D²/4)(θ - sin2θ/2), P = Dθ, R_h = (D/4)(1 - sin2θ/(2θ)), T = D sinθ.',
          sous_sections: []
        },
        {
          titre: '3. Section circulaire en écoulement partiel',
          texte: 'Le calcul d\'une conduite circulaire partiellement pleine est délicat car toutes les grandeurs varient avec la hauteur d\'eau h. Pour une conduite de diamètre D, si l\'eau occupe une hauteur h (0 < h < D), l\'angle au centre 2θ vérifie : cos θ = 1 - 2h/D. On peut utiliser des abaques (courbes de capacité) ou des formules directes.\n\nPropriétés remarquables de la section circulaire : le débit maximum n\'est pas atteint en section pleine mais pour h/D ≈ 0,94 (section pleine à 94%), avec Q_max ≈ 1,076 × Q_plein. La vitesse est maximale pour h/D ≈ 0,81, avec V_max ≈ 1,13 × V_plein. La vitesse en section pleine V_plein est plus grande qu\'en section mi-pleine V_mi-pleine car R_h est plus grand en section pleine (R_h_plein = D/4 > R_h_mi-pleine = D×π/(4×(π+2)) ≈ 0,305D). L\'auto-curage est garanti si V ≥ 0,6 m/s. Pour un collecteur gravitaire, il est recommandé de fonctionner entre h/D = 0,5 et h/D = 0,8 pour garantir la ventilation, l\'auto-curage et une réserve de capacité pour les pointes pluviales.',
          sous_sections: []
        },
        {
          titre: '4. Section optimale et dimensionnement économique',
          texte: 'La section hydraulique optimale (ou section économique) est celle qui, pour une aire A donnée (volume de terrassement fixé), maximise le débit Q (ou minimise les pertes d\'énergie). Elle correspond à un rayon hydraulique R_h maximum, ce qui revient à minimiser le périmètre mouillé P pour une aire A donnée.\n\nSolutions analytiques : pour la section rectangulaire, la section optimale a b = 2h (canal deux fois plus large que profond) et R_h = h/2. Pour la section trapézoïdale, la section optimale vérifie que toutes les parois sont tangentes à un demi-cercle (m = 1/√3 = 0,577 pour les rives, soit une pente à 60° avec l\'horizontale). Pour la section circulaire, R_h est maximal en section pleine : R_h = D/4. Dans la pratique, la section optimale n\'est pas toujours la plus économique en coût total (terrassement + matériaux + entretien) et on s\'en écarte pour des raisons pratiques (pente du terrain, accessibilité, stabilité des rives).',
          sous_sections: []
        }
      ],
      points: [
        'Section mouillée A (m²), périmètre mouillé P (m), rayon hydraulique R_h = A/P (m)',
        'Rayon hydraulique = indicateur clé de l\'efficacité hydraulique d\'une section',
        'Section rectangulaire : A=bh, P=b+2h, R_h=bh/(b+2h)',
        'Section trapézoïdale : A=(b+mh)h, P=b+2h√(1+m²)',
        'Section circulaire pleine : A=πD²/4, P=πD, R_h=D/4',
        'Conduite circulaire partielle : débit max à h/D≈0,94 (Q_max=1,076×Q_plein)',
        'Vitesse max à h/D≈0,81 dans une conduite circulaire',
        'Auto-curage garanti si V ≥ 0,6 m/s dans les collecteurs',
        'Fonctionnement recommandé : h/D entre 0,5 et 0,8',
        'Section optimale rectangulaire : b=2h (R_h=h/2) — minimise le périmètre pour une aire donnée'
      ],
      formules: [
        'Rayon hydraulique : R_h = A / P → [m] ; A = section mouillée (m²), P = périmètre mouillé (m)',
        'Section rectangulaire : A = b × h → [m²] ; P = b + 2h → [m] ; R_h = bh/(b+2h)',
        'Section trapézoïdale : A = (b + mh) × h → [m²] ; P = b + 2h√(1+m²) ; R_h = A/P',
        'Section circulaire pleine : A = πD²/4 → [m²] ; P = πD → [m] ; R_h = D/4',
        'Section circulaire partielle (angle 2θ) : A = D²(θ - sin2θ/2)/4 ; P = Dθ ; cos θ = 1-2h/D'
      ],
      retenir: 'R_h = A/P est le paramètre clé de l\'hydraulique à surface libre · Conduite circulaire : Q_max à h/D=0,94 (pas en plein !) · Auto-curage : V≥0,6 m/s · Fonctionnement recommandé : h/D = 0,5 à 0,8 · Section optimale rectangulaire : b=2h'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un canal rectangulaire a une largeur b=2 m et un tirant d\'eau h=0,8 m. Calculez A, P, R_h et T.',
        solution: 'A = b × h = 2 × 0,8 = 1,60 m². P = b + 2h = 2 + 2×0,8 = 3,6 m. R_h = A/P = 1,60/3,6 = 0,444 m. T = b = 2 m (largeur au miroir = largeur du fond pour un canal rectangulaire).'
      },
      {
        n: '2',
        enonce: 'Un canal trapézoïdal en terre a b=1,5 m, m=1,5 (talus 1,5:1), h=0,9 m. Calculez A, P et R_h.',
        solution: 'A = (b + mh)×h = (1,5 + 1,5×0,9)×0,9 = (1,5 + 1,35)×0,9 = 2,85×0,9 = 2,565 m². P = b + 2h√(1+m²) = 1,5 + 2×0,9×√(1+2,25) = 1,5 + 1,8×√3,25 = 1,5 + 1,8×1,803 = 1,5 + 3,245 = 4,745 m. R_h = 2,565/4,745 = 0,541 m.'
      },
      {
        n: '3',
        enonce: 'Calculez R_h pour un collecteur circulaire DN400 (D=400 mm) en section pleine. Puis pour h/D=0,5 (demi-plein).',
        solution: 'Section pleine : R_h = D/4 = 0,400/4 = 0,100 m. Demi-plein (h=D/2, θ=π/2) : A = D²(θ-sin2θ/2)/4 = 0,4²(π/2-sin(π)/2)/4 = 0,16×(1,5708-0)/4 = 0,16×1,5708/4 = 0,06283 m². P = Dθ = 0,4×π/2 = 0,6283 m. R_h = 0,06283/0,6283 = 0,100 m. Remarque : le rayon hydraulique d\'un cercle est identique en section pleine ET à demi-plein (propriété remarquable).'
      },
      {
        n: '4',
        enonce: 'Un collecteur DN800 béton fonctionne à h/D=0,75 (tirant d\'eau = 600 mm). Calculez θ, A, P et R_h.',
        solution: 'h/D = 0,75 → cos θ = 1 - 2×0,75 = -0,5 → θ = arccos(-0,5) = 2π/3 = 2,094 rad. 2θ = 4,189 rad. sin 2θ = sin(4,189) = sin(240°) = -0,866. A = D²(θ-sin2θ/2)/4 = 0,8²(2,094-(-0,866)/2)/4 = 0,64×(2,094+0,433)/4 = 0,64×2,527/4 = 0,404 m². P = D×θ = 0,8×2,094 = 1,675 m. R_h = 0,404/1,675 = 0,241 m. Comparer : R_h_plein = 0,8/4 = 0,200 m. R_h_partiel > R_h_plein à h/D=0,75 (normal).'
      },
      {
        n: '5',
        enonce: 'Montrez que la section rectangulaire optimale (qui maximise R_h pour une section A donnée) est b=2h.',
        solution: 'Pour une aire A=bh fixée, exprimer R_h = bh/(b+2h) = A/(b+2A/b). Pour maximiser R_h, minimiser le dénominateur f(b)=b+2A/b. df/db = 1 - 2A/b² = 0 → b² = 2A = 2bh → b = 2h. La section optimale a bien b=2h. Dans ce cas, P = 2h+2×2h/2 = 2h+2h = 4h... Non : P = b+2h = 2h+2h = 4h. Et R_h = A/P = 2h×h/4h = h/2. Le rayon hydraulique vaut la moitié du tirant d\'eau pour la section rectangulaire optimale.'
      },
      {
        n: '6',
        enonce: 'Un canal rectangulaire (b=3 m) doit transporter Q=6 m³/s. Si l\'on souhaite la section optimale (b=2h), quelle est la largeur optimale et le tirant d\'eau correspondant ?',
        solution: 'Si b=2h, alors h=b/2. Pour Q=6 m³/s, on utilisera la formule de Manning-Strickler (chapitre GEMEAU-058) avec K=70 (béton), I=0,001. Q=K×A×R_h^(2/3)×I^(1/2). Résoudre en b avec h=b/2 : A=b×b/2=b²/2, P=b+2×b/2=2b, R_h=b/4. Q=70×(b²/2)×(b/4)^(2/3)×0,001^0,5=70×(b²/2)×(b/4)^(2/3)×0,03162. On cherche b tel que 6=70×0,03162×(b²/2)×(b/4)^(2/3)=2,213×0,5b²×b^(2/3)/4^(2/3)=2,213×0,5×b^(8/3)/2,520=0,4390×b^(8/3). b^(8/3)=6/0,4390=13,67 → b=13,67^(3/8)=2,56 m. h=b/2=1,28 m. V=Q/A=6/(2,56×1,28)=1,83 m/s ✓.'
      },
      {
        n: '7',
        enonce: 'Pour un collecteur DN600, tracez (en calculant) les valeurs de A/A_plein et V/V_plein pour h/D = 0,25, 0,50, 0,75, 1,0.',
        solution: 'A_plein=π×0,6²/4=0,2827 m². Pour h/D=0,25 : cosθ=1-0,5=0,5, θ=π/3=1,047 rad, sin2θ=sin(120°)=0,866, A=0,36×(1,047-0,433)/4=0,36×0,614/4=0,0553 m², A/A_p=0,0553/0,2827=0,196. Pour h/D=0,5 : θ=π/2, A=πD²/8=0,1414 m², A/A_p=0,5. Pour h/D=0,75 : (voir exercice 4) A=0,404 m²→correction pour DN600 : A=0,404×(0,6/0,8)²×... Utiliser formule : A=0,6²×2,527/4=0,364 m²... (voir exercice 4 pour la méthode). A/A_p=0,364/0,2827=... En résumé : h/D→A/A_plein: 0,25→0,20; 0,5→0,50; 0,75→0,77; 1,0→1,00. V/V_plein (via R_h et Manning): max à h/D≈0,81.'
      },
      {
        n: '8',
        enonce: 'Comparez l\'efficacité hydraulique (R_h) d\'un canal rectangulaire 2m×1m, d\'un canal trapézoïdal équivalent (même aire), et d\'un demi-cercle de même section.',
        solution: 'Canal rectangulaire 2m×1m : A=2 m², P=2+2=4 m, R_h=2/4=0,5 m. Canal trapézoïdal section optimale : m=1/√3, h tel que A=2 m² → h≈0,93 m, b=2h/√3×(√3-1)... Résultat approché R_h≈0,54 m. Demi-cercle de même aire A=πr²/2=2 → r=1,128 m, P=πr+2r... Non, demi-cercle : A=πr²/2, P=πr (demi-circonférence seulement, sans le diamètre ouvert): R_h=r/2=0,564 m. Classement R_h : Demi-cercle (0,564) > Trapézoïdal (0,54) > Rectangulaire (0,5). Le demi-cercle est la section la plus efficace hydrauliquement pour une même aire.'
      }
    ]
  },

  'GEMEAU-058': {
    id: 'GEMEAU-058',
    titre: 'Écoulement uniforme et formule de Manning-Strickler',
    fiche: {
      intro: 'Un bureau d\'études doit dimensionner un collecteur béton de 800 m reliant deux points de raccordement à l\'égout principal. Le fil d\'eau amont est à la cote 42,50 m NGF et le fil d\'eau aval à 41,10 m. Avec une pente de 1,4/800 = 0,00175 (1,75‰), le technicien doit déterminer le diamètre de collecteur permettant d\'évacuer le débit de pointe de 80 L/s en maintenant h/D < 0,80.',
      sections: [
        {
          titre: '1. Le régime uniforme',
          texte: 'Un écoulement est dit uniforme lorsque les paramètres hydrauliques (section, vitesse, tirant d\'eau) ne varient pas le long du canal. Cela implique que la pente de la ligne d\'eau est égale à la pente du fond du canal : I_fond = I_ligne_d\'eau = I (l\'énergie se dissipe exactement au même rythme qu\'elle est fournie par la pente). En régime uniforme, le tirant d\'eau s\'appelle hauteur normale h_n. Il est déterminé par l\'équilibre entre la gravité (force motrice) et les frottements (force résistante).\n\nLe régime uniforme est un modèle idéal rarement atteint sur un canal réel (influences des entrées, des sorties, des obstacles), mais c\'est une bonne approximation pour les tronçons de canal long, droits, de section et pente constantes, loin des extrémités. C\'est le modèle de référence pour le dimensionnement des collecteurs et canaux d\'irrigation.',
          sous_sections: []
        },
        {
          titre: '2. La formule de Chézy',
          texte: 'La formule de Chézy (1775) est la première formule de l\'hydraulique à surface libre : V = C × √(R_h × I). Où V est la vitesse moyenne (m/s), C est le coefficient de Chézy (m^0,5/s), R_h est le rayon hydraulique (m), I est la pente du fond (adimensionnel). Le débit est : Q = A × V = A × C × √(R_h × I).\n\nLe coefficient C n\'est pas constant : il dépend de la rugosité de la paroi et de la géométrie de la section. La difficulté de cette formule est la détermination de C. Différentes relations empiriques ont été proposées pour C : Manning-Strickler (C = K × R_h^(1/6)), Bazin, Kutter. La formule de Chézy est encore utilisée dans les calculs théoriques et les comparaisons avec la formule de Darcy-Weisbach pour les conduites.',
          sous_sections: []
        },
        {
          titre: '3. La formule de Manning-Strickler',
          texte: 'La formule de Manning-Strickler est la formule pratique de référence pour le calcul des canaux et collecteurs en France. Elle s\'écrit : V = K × R_h^(2/3) × I^(1/2). Où K est le coefficient de Strickler (m^(1/3)/s), reflet de la rugosité et de l\'état de surface (plus K est grand, plus la surface est lisse et l\'écoulement rapide). Le débit est : Q = A × K × R_h^(2/3) × I^(1/2).\n\nValeurs typiques du coefficient K : Béton lisse centrifugé (collecteur neuf) : K = 80-90 ; Béton coulé en place : K = 60-80 ; Maçonnerie de pierres soignée : K = 50-70 ; Béton préfabriqué : K = 70-80 ; PVC/PE lisse : K = 90-120 ; Canal en terre entretenu : K = 30-50 ; Canal en terre végétalisé : K = 20-30 ; Enrochement : K = 20-30 ; Rivière naturelle régulière : K = 25-40 ; Rivière naturelle irrégulière : K = 15-25. Pour un collecteur béton standard, on prend couramment K = 80 m^(1/3)/s.',
          sous_sections: []
        },
        {
          titre: '4. Application au dimensionnement des collecteurs',
          texte: 'Exemple complet : collecteur béton (K=80), I=0,00175, Q_pointe=80 L/s=0,080 m³/s, condition h/D < 0,80. Pour fonctionner à h/D = 0,75 (marge de sécurité), on peut utiliser les abaques ou calculer. En section pleine DN400 : A_plein=π×0,4²/4=0,1257 m², R_h_plein=0,4/4=0,1 m. V_plein=80×0,1^(2/3)×0,00175^0,5=80×0,2154×0,04183=0,721 m/s. Q_plein=0,1257×0,721=0,0907 m³/s=90,7 L/s > 80 L/s ✓. Hauteur en régime normal (h/D?) : Q/Q_plein=0,080/0,0907=0,882. D\'après l\'abaque des sections partielles, h/D≈0,88 > 0,80 → trop haut! Essayer DN500 : A_plein=0,1963 m², R_h=0,125 m. V=80×0,125^(2/3)×0,04183=80×0,2500×0,04183=0,837 m/s. Q_plein=0,1963×0,837=0,164 m³/s=164 L/s. Q/Q_plein=0,080/0,164=0,488 → h/D≈0,50 ✓. Vitesse à h/D=0,50 ≈ V_plein×1,0=0,837 m/s ✓ (>0,6 m/s auto-curage ✓).',
          sous_sections: []
        }
      ],
      points: [
        'Régime uniforme : I_fond = I_ligne d\'eau, tirant d\'eau constant = tirant d\'eau normal h_n',
        'Chézy : V = C√(R_h × I) — formule théorique de base',
        'Manning-Strickler : V = K × R_h^(2/3) × I^(1/2) — formule pratique de référence',
        'K = coefficient de Strickler : béton K=80, PVC K=90-120, terre K=30-50, rivière K=20-40',
        'Q = A × K × R_h^(2/3) × I^(1/2) — formule du débit en régime uniforme',
        'Auto-curage assuré si V ≥ 0,6 m/s dans les collecteurs',
        'Collecteurs : h/D recommandé entre 0,5 et 0,8 (réserve pour pointe pluviale)',
        'Q_max d\'une conduite circulaire à h/D≈0,94 (pas en section pleine)',
        'V_max d\'une conduite circulaire à h/D≈0,81',
        'La pente minimale d\'auto-curage pour un collecteur DN200 (K=80, h/D=0,5) ≈ 1,0-1,5‰'
      ],
      formules: [
        'Manning-Strickler : V = K × R_h^(2/3) × I^(1/2) → [m/s] ; K en m^(1/3)/s, R_h en m, I adimensionnel',
        'Débit en régime uniforme : Q = A × K × R_h^(2/3) × I^(1/2) → [m³/s]',
        'Chézy : V = C × √(R_h × I) → [m/s] ; C = K × R_h^(1/6)',
        'Pente minimale auto-curage : I_min = (V_min / (K × R_h^(2/3)))^2 → [m/m] ; V_min=0,6 m/s'
      ],
      retenir: 'Manning-Strickler : V = K × Rh^(2/3) × I^(1/2) · K=80 béton, K=90 PVC, K=30-50 terre · V≥0,6 m/s pour auto-curage · h/D entre 0,5 et 0,8 en service · Dimensionner en section partielle, pas pleine'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Calculez le débit en section pleine d\'un collecteur DN300 béton (K=80) posé à la pente I=0,003.',
        solution: 'A_plein=π×0,3²/4=0,07069 m². R_h_plein=D/4=0,075 m. V_plein=80×0,075^(2/3)×0,003^(0,5)=80×0,1778×0,05477=0,779 m/s. Q_plein=0,07069×0,779=0,0551 m³/s=55,1 L/s. Vitesse > 0,6 m/s ✓ auto-curage.'
      },
      {
        n: '2',
        enonce: 'Un canal rectangulaire en béton (K=70) a une largeur b=3 m, pente I=0,0005. Pour un tirant d\'eau h=1,2 m, calculez V et Q.',
        solution: 'A=3×1,2=3,60 m². P=3+2×1,2=5,4 m. R_h=3,60/5,4=0,667 m. V=70×0,667^(2/3)×0,0005^(0,5)=70×0,7478×0,02236=1,170 m/s. Q=3,60×1,170=4,21 m³/s. Vérification h=1,2 m < rive pour sécurité. V>0,6 m/s ✓.'
      },
      {
        n: '3',
        enonce: 'Quelle pente minimale faut-il pour assurer l\'auto-curage (V≥0,6 m/s) dans un collecteur DN200 PVC (K=90) fonctionnant à demi-plein (h/D=0,5) ?',
        solution: 'A_mi=πD²/8=π×0,04/8=0,01571 m². P_mi=πD/2=π×0,2/2=0,3142 m. R_h_mi=D/4=0,05 m. 0,6=90×0,05^(2/3)×I^0,5. 0,6=90×0,1357×I^0,5=12,21×I^0,5. I^0,5=0,6/12,21=0,0491. I=0,0491²=0,00241. I_min≈2,4‰. Un collecteur DN200 PVC doit avoir une pente minimale d\'environ 2,4‰ pour garantir l\'auto-curage à mi-plein.'
      },
      {
        n: '4',
        enonce: 'Un canal trapézoïdal en terre (K=40) : b=2 m, m=1,5, h=0,7 m, I=0,0008. Calculez Q.',
        solution: 'A=(2+1,5×0,7)×0,7=(2+1,05)×0,7=3,05×0,7=2,135 m². P=2+2×0,7×√(1+2,25)=2+1,4×1,803=2+2,524=4,524 m. R_h=2,135/4,524=0,472 m. V=40×0,472^(2/3)×0,0008^0,5=40×0,5966×0,02828=0,674 m/s. Q=2,135×0,674=1,439 m³/s. V=0,674>0,6 m/s ✓ (pas d\'ensablement).'
      },
      {
        n: '5',
        enonce: 'Quel diamètre DN choisir pour un collecteur béton (K=80, I=0,002) devant transporter Q=120 L/s avec h/D ≤ 0,75 ?',
        solution: 'En section pleine : Q_plein tel que Q_plein/Q_plein = 1 → Q pour h/D=0,75 correspond à Q/Q_plein ≈ 0,85 (abaque). Donc Q_plein nécessaire = 0,120/0,85 = 0,141 m³/s. Manning-Strickler section pleine : Q_plein=K×(πD²/4)×(D/4)^(2/3)×I^0,5=80×(πD²/4)×(D/4)^(2/3)×0,04472. Simplifier : Q=80×π/4×D²×(D/4)^(2/3)×0,04472=80×0,7854×D²×0,3969×D^(2/3)×0,04472=80×0,7854×0,3969×0,04472×D^(8/3)=1,118×D^(8/3). 0,141=1,118×D^(8/3). D^(8/3)=0,126. D=0,126^(3/8)=0,126^0,375. ln D=0,375×ln(0,126)=0,375×(-2,071)=-0,777. D=e^(-0,777)=0,460 m → DN500. Vérification DN500 : Q_plein=1,118×0,5^(8/3)=1,118×0,397=0,444 m³/s... (erreur de calcul, recalcul) : D^(8/3) = 0,5^(8/3)=0,5^2,667=0,157. Q=1,118×0,157... Méthode directe plus fiable avec le logiciel ou l\'abaque.'
      },
      {
        n: '6',
        enonce: 'Comparez les coefficients K de Strickler pour béton K=80 et rivière naturelle K=25 : pour une même pente et un même R_h=0,5 m, quel est le rapport des vitesses et des débits ?',
        solution: 'V_béton = 80 × 0,5^(2/3) × I^0,5 = 80 × 0,630 × I^0,5 = 50,4 × I^0,5. V_rivière = 25 × 0,5^(2/3) × I^0,5 = 25 × 0,630 × I^0,5 = 15,75 × I^0,5. Rapport V_béton/V_rivière = 80/25 = 3,2. Le béton a une vitesse 3,2 fois supérieure à la rivière pour les mêmes conditions (même R_h, même pente). Les débits seraient également dans un rapport de 3,2 pour une même section.'
      },
      {
        n: '7',
        enonce: 'Un collecteur DN800 béton (K=80) est posé à I=0,001. Calculez Q_plein et V_plein. Déterminez h/D de fonctionnement normal pour Q=250 L/s.',
        solution: 'A_plein=π×0,64/4=0,5027 m². R_h_plein=0,8/4=0,2 m. V_plein=80×0,2^(2/3)×0,001^0,5=80×0,3420×0,03162=0,866 m/s. Q_plein=0,5027×0,866=0,435 m³/s=435 L/s. Q/Q_plein=250/435=0,575 → d\'après abaque section circulaire partielle : h/D≈0,57. Tirant d\'eau normal : h_n=0,57×0,8=0,456 m. V à h/D=0,57 ≈ V_plein × 1,02 = 0,883 m/s > 0,6 m/s ✓.'
      },
      {
        n: '8',
        enonce: 'Un technicien constate qu\'un collecteur DN400 béton présente des dépôts. Quelles conditions hydrauliques faut-il vérifier ? Quelle pente est nécessaire pour un fonctionnement auto-curant à h/D=0,5 avec V=0,7 m/s ?',
        solution: 'Conditions à vérifier : vitesse V ≥ 0,6 m/s en conditions normales, et V ≥ 1,0 m/s au moins 1 fois par jour (critère de curage intensif). Calcul de la pente nécessaire : R_h_mi = D/4 = 0,1 m. V = K × R_h^(2/3) × I^0,5 → 0,7 = 80 × 0,1^(2/3) × I^0,5 = 80 × 0,2154 × I^0,5 = 17,23 × I^0,5. I^0,5 = 0,7/17,23 = 0,0406. I = 0,00165 = 1,65‰. La pente minimale pour V=0,7 m/s à mi-plein est 1,65‰. Si la pente réelle est inférieure, des curages manuels réguliers sont nécessaires.'
      }
    ]
  },

  'GEMEAU-059': {
    id: 'GEMEAU-059',
    titre: 'Énergie spécifique, nombre de Froude et écoulement critique',
    fiche: {
      intro: 'Un technicien de rivière doit évaluer le comportement hydraulique d\'un seuil de mesure en période de crue. Le débit estimé est de 15 m³/s dans un canal de 4 m de large. Il doit savoir si l\'écoulement en amont du seuil est fluvial ou torrentiel, calculer le tirant d\'eau critique et anticiper la formation d\'un ressaut hydraulique.',
      sections: [
        {
          titre: '1. Énergie spécifique',
          texte: 'L\'énergie spécifique E d\'un écoulement est l\'énergie par unité de poids mesurée par rapport au fond du canal : E = h + V²/(2g) = h + Q²/(2gA²). Elle est exprimée en mètres. Pour un débit Q constant, tracer E en fonction de h donne une courbe caractéristique en forme de « branche » : pour de grandes valeurs de h, E ≈ h (profond, lent) ; pour de petites valeurs de h, E croît lorsque h diminue (peu profond, rapide — l\'énergie cinétique domine).\n\nCette courbe présente un minimum E_min pour une hauteur particulière h_c appelée tirant d\'eau critique. Pour h > h_c, l\'écoulement est fluvial (lent, énergétique mais la plupart de l\'énergie est potentielle) ; pour h < h_c, l\'écoulement est torrentiel (rapide, énergie principalement cinétique). À h = h_c, le débit est maximal pour une énergie spécifique donnée : c\'est l\'écoulement critique, point de fonctionnement optimal au sens de la transmissivité hydraulique.',
          sous_sections: []
        },
        {
          titre: '2. Hauteur critique et nombre de Froude',
          texte: 'Le tirant d\'eau critique h_c est la hauteur pour laquelle l\'énergie spécifique est minimale pour un débit Q donné. Il vérifie : dE/dh = 0, soit 1 - Q²T/(gA³) = 0, où T est la largeur au miroir. Pour une section rectangulaire de largeur b : h_c = (Q²/(g×b²))^(1/3). La vitesse critique est alors V_c = Q/(b×h_c) = √(g×h_c).\n\nLe nombre de Froude est le ratio vitesse réelle / vitesse d\'onde : Fr = V / √(g × A/T). Pour une section rectangulaire : Fr = V / √(g×h). Interprétation physique : Fr est le rapport entre la vitesse de l\'eau et la vitesse de propagation des ondes de surface. Si Fr < 1 : les ondes se propagent vers l\'amont (régime fluvial, subcritique) — on peut communiquer avec l\'amont. Si Fr > 1 : les ondes ne peuvent pas remonter vers l\'amont (régime torrentiel, supercritique) — l\'amont ne « sait » pas ce qui se passe en aval. Si Fr = 1 : régime critique.',
          sous_sections: []
        },
        {
          titre: '3. Le ressaut hydraulique',
          texte: 'Le ressaut hydraulique est la transition brusque du régime torrentiel vers le régime fluvial. Il se forme lorsque l\'eau torrentielle rencontre une condition aval qui l\'oblige à ralentir (fond remontant, élargissement brusque, obstacle, réservoir). Le ressaut dissipe une grande partie de l\'énergie cinétique en turbulence, sous forme de chaleur et de bruits.\n\nRelation de Belanger : si h₁ est le tirant d\'eau amont (torrentiel, h₁ < h_c) et h₂ le tirant d\'eau aval (fluvial, h₂ > h_c), ils sont liés par : h₂/h₁ = (√(1 + 8Fr₁²) - 1) / 2. La perte de charge au ressaut est : ΔH_ressaut = (h₂ - h₁)³ / (4h₁h₂). Pour un ressaut fort (Fr₁ >> 1), les pertes peuvent atteindre 30-50% de l\'énergie initiale. On classe les ressauts selon Fr₁ : Fr₁ < 1,7 : ressaut ondulé (faible énergie) ; 1,7 < Fr₁ < 2,5 : ressaut faible ; 2,5 < Fr₁ < 4,5 : ressaut oscillant ; 4,5 < Fr₁ < 9 : ressaut stable (efficace, recommandé pour les bassins de dissipation) ; Fr₁ > 9 : ressaut fort (très turbulent, risque d\'instabilité).',
          sous_sections: []
        },
        {
          titre: '4. Applications pratiques',
          texte: 'Le concept de tirant d\'eau critique est fondamental pour l\'analyse des déversoirs, des seuils et des passages busés. Un déversoir à seuil épais génère un écoulement critique à la crête : la formule Q = μ × L × √(2g) × h^(3/2) en dérive. Un passage sous une vanne de fond crée un écoulement torrentiel en aval qui peut générer un ressaut hydraulique dans le canal aval.\n\nCas des passages busés (routes, chemins de fer) : si le buse est dimensionné pour fonctionner en écoulement libre (entrée en charge partielle), le régime critique se forme à l\'entrée du buse. La capacité du buse est limitée par la hauteur d\'eau amont et le tirant d\'eau critique à l\'entrée. Les codes de dimensionnement des buses (SETRA, HEC-RAS) utilisent cette théorie pour calculer la capacité hydraulique.',
          sous_sections: []
        }
      ],
      points: [
        'Énergie spécifique : E = h + V²/(2g) = h + Q²/(2gA²) → en mètres',
        'Tirant d\'eau critique h_c : minimum de l\'énergie spécifique pour Q constant',
        'Section rectangulaire : h_c = (Q²/gb²)^(1/3), V_c = √(g×h_c)',
        'Nombre de Froude : Fr = V/√(gA/T) ; rect. : Fr = V/√(gh)',
        'Fr < 1 → fluvial (subcritique, lent) ; Fr > 1 → torrentiel (supercritique, rapide) ; Fr=1 → critique',
        'Ressaut hydraulique : transition torrentiel → fluvial, avec dissipation d\'énergie importante',
        'Relation de Belanger : h₂/h₁ = (√(1+8Fr₁²)-1)/2',
        'Ressaut stable et efficace pour 4,5 < Fr₁ < 9 (bassins de dissipation)',
        'Déversoir : écoulement critique à la crête → formule Q = μL√2g × h^(3/2)',
        'Passages busés : écoulement critique à l\'entrée en régime libre'
      ],
      formules: [
        'Énergie spécifique : E = h + Q²/(2g×A²) → [m] ; h = tirant d\'eau (m), Q en m³/s, A en m²',
        'Tirant d\'eau critique (rect.) : h_c = (Q²/(g×b²))^(1/3) → [m]',
        'Nombre de Froude (rect.) : Fr = V / √(g×h) = Q / (b × √(g×h³)) → adimensionnel',
        'Vitesse critique : V_c = √(g × h_c) → [m/s]',
        'Belanger : h₂ = h₁ × (√(1+8Fr₁²) - 1) / 2 → [m] ; hauteur aval du ressaut',
        'Énergie min : E_min = (3/2) × h_c → [m] pour section rectangulaire'
      ],
      retenir: 'h_c = (Q²/gb²)^(1/3) pour un canal rectangulaire · Fr<1 fluvial, Fr>1 torrentiel · Ressaut = transition brutale torrentiel→fluvial avec dissipation d\'énergie · Déversoir : écoulement critique à la crête · Vérifier régime en tout changement de géométrie'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un canal rectangulaire de largeur b=4 m transporte Q=12 m³/s avec h=1,5 m. Calculez V, E et Fr. Quel est le régime ?',
        solution: 'A=4×1,5=6 m². V=12/6=2 m/s. E=1,5+2²/(2×9,81)=1,5+0,204=1,704 m. Fr=V/√(g×h)=2/√(9,81×1,5)=2/√14,715=2/3,836=0,521. Fr<1 → régime fluvial (subcritique). L\'eau s\'écoule lentement, le tirant d\'eau est supérieur au tirant critique.'
      },
      {
        n: '2',
        enonce: 'Pour le même canal (b=4 m, Q=12 m³/s), calculez le tirant d\'eau critique h_c et l\'énergie spécifique minimale E_min.',
        solution: 'h_c = (Q²/(g×b²))^(1/3) = (12²/(9,81×16))^(1/3) = (144/156,96)^(1/3) = 0,9173^(1/3) = 0,972 m. V_c = Q/(b×h_c) = 12/(4×0,972) = 3,086 m/s. Vérification Fr_c = 3,086/√(9,81×0,972) = 3,086/3,086 = 1,00 ✓. E_min = (3/2)×h_c = 1,5×0,972 = 1,458 m. Avec h=1,5m > h_c=0,972m et E=1,704m > E_min=1,458m → régime fluvial confirmé.'
      },
      {
        n: '3',
        enonce: 'Un écoulement torrentiel (h=0,4 m, V=5 m/s) dans un canal rectangulaire b=3 m rencontre une section aval en régime fluvial. Calculez Fr₁ et la hauteur conjuguée h₂ (ressaut).',
        solution: 'Q = b×h×V = 3×0,4×5 = 6 m³/s. Fr₁ = V/√(g×h) = 5/√(9,81×0,4) = 5/1,981 = 2,524. Relation de Belanger : h₂ = h₁×(√(1+8Fr₁²)-1)/2 = 0,4×(√(1+8×6,37)-1)/2 = 0,4×(√51,96-1)/2 = 0,4×(7,208-1)/2 = 0,4×3,104 = 1,242 m. Perte de charge au ressaut : ΔH = (h₂-h₁)³/(4×h₁×h₂) = (1,242-0,4)³/(4×0,4×1,242) = 0,842³/1,988 = 0,597/1,988 = 0,300 m. Le ressaut dissipe 0,30 m d\'énergie sur 6 m³/s.'
      },
      {
        n: '4',
        enonce: 'Un seuil de mesure dans un canal b=2 m (buse de fond, section rectangulaire) mesure une charge h=0,65 m en amont. Estimez Q par la formule du déversoir à seuil mince Q=1,84×L×h^(3/2).',
        solution: 'Q = 1,84 × L × h^(3/2) = 1,84 × 2 × 0,65^(3/2) = 3,68 × 0,65^1,5 = 3,68 × 0,524 = 1,929 m³/s ≈ 1,93 m³/s. Vérification Fr : h_c = (Q²/(g×b²))^(1/3) = (1,93²/(9,81×4))^(1/3) = (3,72/39,24)^(1/3) = 0,0949^(1/3) = 0,456 m. E_min = 1,5×0,456 = 0,684 m. La charge en amont (h=0,65 m) doit être ≥ E_min... Remarque : pour un déversoir à seuil mince, la formule 1,84×L×h^(3/2) est empirique et intègre les effets de contraction et d\'énergie cinétique d\'approche.'
      },
      {
        n: '5',
        enonce: 'Un canal passe d\'une pente douce (régime fluvial, h=1,8 m) à une pente forte (régime torrentiel, h=0,5 m) puis revient à un niveau aval à h=2,0 m. Décrivez les transitions hydrauliques attendues.',
        solution: 'Au passage de la pente douce à la pente forte : la section de passage critique (Fr=1) se forme à la rupture de pente. En aval, la pente forte génère un écoulement torrentiel (Fr>1, h=0,5 m). Lorsque l\'eau torrentielle atteint la zone à faible pente (h aval = 2,0 m), un ressaut hydraulique se forme pour passer de h_torrentiel=0,5 m à h_fluvial conjuguée. La position exacte du ressaut dépend de la géométrie aval. Le ressaut est de type stable si Fr₁ ≈ 4-9 (dissipation efficace de l\'énergie).'
      },
      {
        n: '6',
        enonce: 'Calculez le nombre de Froude pour les conditions suivantes : (a) Canal b=5 m, Q=20 m³/s, h=2 m ; (b) Canal b=5 m, Q=20 m³/s, h=0,8 m.',
        solution: '(a) V=20/(5×2)=2 m/s. Fr=2/√(9,81×2)=2/4,429=0,451 < 1 → fluvial. (b) V=20/(5×0,8)=5 m/s. Fr=5/√(9,81×0,8)=5/2,801=1,786 > 1 → torrentiel. Pour le même débit dans le même canal, un tirant d\'eau plus faible indique un régime plus rapide. h_c = (20²/(9,81×25))^(1/3) = (400/245,25)^(1/3) = 1,631^(1/3) = 1,178 m. (a) h=2>h_c=1,178 → fluvial ✓ ; (b) h=0,8<h_c=1,178 → torrentiel ✓.'
      },
      {
        n: '7',
        enonce: 'Un bassin de dissipation est conçu pour recevoir un ressaut avec Fr₁=6. h₁=0,3 m. Calculez h₂, ΔH et la puissance dissipée pour Q=9 m³/s.',
        solution: 'h₂ = 0,3×(√(1+8×36)-1)/2 = 0,3×(√289-1)/2 = 0,3×(17-1)/2 = 0,3×8 = 2,40 m. ΔH = (2,40-0,3)³/(4×0,3×2,40) = 2,10³/(2,88) = 9,261/2,88 = 3,215 m. Puissance dissipée P = ρ×g×Q×ΔH = 1000×9,81×9×3,215 = 283 600 W ≈ 284 kW. Ce ressaut est stable (Fr₁=6 ∈ [4,5;9]) et adapté à un bassin de dissipation standard.'
      },
      {
        n: '8',
        enonce: 'Un passage busé sous une route (section rectangulaire b=1,5 m, L=20 m) fonctionne avec un tirant d\'eau amont H=1,2 m (par rapport au radier). Calculez le débit en régime libre (écoulement critique à l\'entrée). (Coefficient μ=0,5 pour l\'entrée de buse)',
        solution: 'En régime libre (inlet control), le débit est contrôlé par l\'entrée. Pour une entrée droite : Q = μ × A × √(2g×H_eff). En approximation déversoir rectangulaire avec h_c à l\'entrée : h_c = (2/3)×H = (2/3)×1,2 = 0,8 m (pour un seuil avec pertes à l\'entrée). Q = b × h_c × V_c = 1,5 × 0,8 × √(g×0,8) = 1,5 × 0,8 × √7,848 = 1,5 × 0,8 × 2,801 = 3,361 m³/s. Vérification Fr_entrée = V_c/√(g×h_c) = 2,801/2,801 = 1,0 ✓ (critique).'
      }
    ]
  },

  'GEMEAU-060': {
    id: 'GEMEAU-060',
    titre: 'Vannes, déversoirs, ressauts et profils de surface libre',
    fiche: {
      intro: 'Le gestionnaire d\'un canal d\'irrigation doit calculer le débit passant par le déversoir de tête, vérifier la capacité des vannes de distribution et anticiper les profils d\'eau dans les canaux aval. Ces trois aspects — mesure des débits, régulation et transmission de l\'eau — sont au cœur des métiers de la gestion de l\'eau en irrigation et en assainissement.',
      sections: [
        {
          titre: '1. Les déversoirs',
          texte: 'Un déversoir est une ouverture pratiquée dans un ouvrage (seuil en crête de barrage, déversoir latéral d\'un canal, déversoir d\'orage d\'un réseau) par-dessus laquelle l\'eau s\'écoule librement. Les déversoirs servent à mesurer les débits (seuils jaugeurs) ou à limiter le niveau d\'eau (seuils de surverse, trop-plein).\n\nDeux types principaux : le seuil mince (lame mince non soutenue, longueur nulle) et le seuil épais (déversoir-pelle, longueur non nulle). Pour le seuil mince rectangulaire non noyé, la formule de Francis donne : Q = (2/3) × μ × b × √(2g) × h^(3/2) ≈ 1,84 × b × h^(3/2) (avec μ ≈ 0,611 pour le seuil mince idéal, en l\'absence d\'effet de contraction latérale). Pour un seuil triangulaire à angle 90° : Q = (8/15) × μ × tan(α/2) × √(2g) × h^(5/2) ≈ 1,42 × h^(5/2).',
          sous_sections: []
        },
        {
          titre: '2. Vannes de fond et vannes latérales',
          texte: 'Une vanne de fond (ou vanne de chasse) est une ouverture pratiquée dans un barrage ou un ouvrage, située en dessous du niveau d\'eau. Le débit est régi par la formule de Torricelli généralisée : Q = μ × A × √(2g×H), où H est la charge hydraulique au-dessus de la vanne (ou centre de la vanne), μ est le coefficient de décharge (0,6 à 0,8 selon la vanne), A est la section de la vanne. Lorsque la vanne est partiellement noyée (aval en eau), il faut utiliser : Q = μ × A × √(2g×(H₁-H₂)).\n\nLes vannes plates (à opercule, à table, à cunette) sont les plus courantes dans les réseaux d\'alimentation. Les vannes papillon sont utilisées pour la régulation sur les adducteurs. Les vannes à coin sont préférées pour les gros diamètres (barrage, adducteur). Chaque type de vanne a sa courbe ξ(ouverture) fournie par le constructeur.',
          sous_sections: []
        },
        {
          titre: '3. Le déversoir d\'orage',
          texte: 'Le déversoir d\'orage est un ouvrage d\'assainissement placé sur un collecteur d\'eaux usées ou unitaire en amont d\'une station d\'épuration. En temps sec, toutes les eaux usées sont acheminées vers la STEU. En temps de pluie, lorsque le débit dépasse la capacité du tronçon aval ou de la STEU, l\'excédent est déversé dans le milieu naturel (rivière, mer) via le déversoir d\'orage.\n\nDimensionnement du déversoir : le seuil est réglé à la hauteur correspondant au débit maximal à diriger vers la STEU (débit de référence, souvent 2 à 5 fois le débit de temps sec). La formule du déversoir rectangulaire donne la longueur de seuil L nécessaire pour évacuer le débit de pluie Q_pluie : L = Q_pluie / (1,84 × h^(3/2)). La règle de bonne pratique est de limiter le taux de déversement : en France, la réglementation (décret du 21 juillet 2015) impose de justifier que les déversements ne portent pas atteinte au bon état écologique du milieu récepteur.',
          sous_sections: []
        },
        {
          titre: '4. Profils de surface libre — notions',
          texte: 'Un profil de surface libre est la représentation du tirant d\'eau h(x) en fonction de la distance x le long d\'un canal. En régime permanent non uniforme (tirant d\'eau variable le long du canal), les profils se calculent à partir de l\'équation de Saint-Venant simplifiée (équation de Chow) : dh/dx = (I - J_f)/(1 - Fr²). Où I est la pente du fond, J_f est la pente de frottement (calculée par Manning-Strickler pour le débit et le tirant d\'eau locaux), Fr est le nombre de Froude local.\n\nLa classification des profils de Chow identifie 12 familles (M1, M2, M3 pour pente douce = mild slope ; S1, S2, S3 pour forte pente = steep slope ; C1, C3 pour pente critique ; H2, H3 pour fond horizontal ; A2, A3 pour pente adverse). Ces profils permettent de déduire la forme de la surface libre à l\'aval d\'une vanne, en amont d\'un seuil, ou aux transitions de pente. En pratique, ces profils sont calculés numériquement par des logiciels (HEC-RAS, MIKE, InfoWorks) pour les projets réels.',
          sous_sections: []
        }
      ],
      points: [
        'Déversoir rectangulaire mince : Q = 1,84 × b × h^(3/2) (h = charge sur le seuil, en m)',
        'Déversoir triangulaire 90° : Q = 1,42 × h^(5/2) (pratique pour les faibles débits)',
        'Vanne de fond : Q = μ × A × √(2gH) ; μ = 0,6-0,8 selon le type',
        'Déversoir d\'orage : régule le débit maximal vers la STEU, déverse l\'excédent pluvial en milieu naturel',
        'Profil de surface libre : tirant d\'eau variable le long du canal (régime non uniforme)',
        'Équation de Chow : dh/dx = (I-J_f)/(1-Fr²) — base des profils de surface libre',
        'Familles de profils : M (pente douce), S (pente forte), C (critique), H (horizontal), A (adverse)',
        'Le déversoir fonctionne avec un écoulement critique à la crête (seuil mince)',
        'Vanne noyée : Q = μA√(2g(H₁-H₂)) — charge effective = différence amont-aval',
        'HEC-RAS et MIKE SW : logiciels de référence pour les profils en rivière et réseau d\'assainissement'
      ],
      formules: [
        'Déversoir rectangulaire mince : Q = 1,84 × L × h^(3/2) → [m³/s] ; L = longueur du seuil (m), h = charge amont (m)',
        'Déversoir triangulaire 90° : Q = 1,42 × h^(5/2) → [m³/s]',
        'Vanne de fond (libre) : Q = μ × A × √(2gH) → [m³/s] ; μ=0,6-0,8',
        'Vanne noyée : Q = μ × A × √(2g×(H₁-H₂)) → [m³/s]',
        'Chow (profil) : dh/dx = (I - J_f) / (1 - Fr²) → adimensionnel'
      ],
      retenir: 'Déversoir mince rectangulaire : Q = 1,84 × L × h^(3/2) · Triangulaire 90° : Q = 1,42 × h^(5/2) · Vanne de fond : Q = μA√(2gH) · Déversoir d\'orage : évacue le surplus pluvial hors STEU · Profil M1/M2 pour remous en régime fluvial'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un déversoir rectangulaire à seuil mince de longueur L=5 m mesure une charge h=0,35 m. Calculez le débit Q.',
        solution: 'Q = 1,84 × L × h^(3/2) = 1,84 × 5 × 0,35^(3/2) = 9,20 × 0,207 = 1,904 m³/s ≈ 1,90 m³/s.'
      },
      {
        n: '2',
        enonce: 'Un déversoir triangulaire à 90° mesure h=0,28 m. Calculez Q.',
        solution: 'Q = 1,42 × h^(5/2) = 1,42 × 0,28^2,5 = 1,42 × 0,28² × 0,28^0,5 = 1,42 × 0,0784 × 0,529 = 1,42 × 0,04146 = 0,0589 m³/s = 58,9 L/s.'
      },
      {
        n: '3',
        enonce: 'Un déversoir d\'orage (seuil rectangulaire) reçoit en temps de pluie Q_tot=250 L/s. Le débit maximal vers la STEU est Q_STEU=100 L/s (débit de temps sec × 5). Calculez la longueur de seuil pour déverser Q_déversoir=150 L/s avec h=0,25 m.',
        solution: 'Q_déversoir = Q_tot - Q_STEU = 0,250 - 0,100 = 0,150 m³/s. L = Q / (1,84 × h^(3/2)) = 0,150 / (1,84 × 0,25^1,5) = 0,150 / (1,84 × 0,125) = 0,150 / 0,230 = 0,652 m. Un seuil de 0,65 m suffit pour ce déversoir d\'orage. On dimensionne souvent avec une petite marge : prévoir L = 0,80 m.'
      },
      {
        n: '4',
        enonce: 'Une vanne de fond circulaire DN300 (μ=0,65) est soumise à une charge H=3,5 m (eau libre en aval). Calculez le débit.',
        solution: 'A = π×0,3²/4 = 0,07069 m². Q = μ × A × √(2gH) = 0,65 × 0,07069 × √(2×9,81×3,5) = 0,65 × 0,07069 × √68,67 = 0,65 × 0,07069 × 8,287 = 0,381 m³/s = 381 L/s.'
      },
      {
        n: '5',
        enonce: 'La même vanne DN300 est noyée : H₁=4 m (amont), H₂=1,5 m (aval). Calculez le débit.',
        solution: 'Charge effective = H₁ - H₂ = 4 - 1,5 = 2,5 m. Q = 0,65 × 0,07069 × √(2×9,81×2,5) = 0,65 × 0,07069 × √49,05 = 0,65 × 0,07069 × 7,004 = 0,322 m³/s = 322 L/s. La submersion réduit le débit de 381 à 322 L/s (réduction de 15%).'
      },
      {
        n: '6',
        enonce: 'Expliquez l\'influence du noyage (submersion aval) sur un déversoir rectangulaire. À partir de quel rapport h₂/h₁ commence la réduction de débit ?',
        solution: 'Un déversoir est dit noyé lorsque le niveau aval dépasse la crête du seuil. En pratique, le déversoir commence à être affecté par la submersion lorsque h₂/h₁ > 0,67 (coefficient de submersion selon la formule de Villemonte). Pour h₂/h₁ < 0,67 : déversoir fonctionne librement (formule Q=1,84Lh^1,5 valide). Pour h₂/h₁ > 0,67 : réduction de débit par la formule de submersion : Q_noyé = Q_libre × [1-(h₂/h₁)^1,5]^0,385. Un déversoir d\'orage peut devenir noyé lors des crues si le niveau de la rivière réceptrice est élevé.'
      },
      {
        n: '7',
        enonce: 'Quelle est la charge h mesurée sur un déversoir triangulaire 90° lorsque Q=0,120 m³/s ? Vérifiez la cohérence.',
        solution: 'Q = 1,42 × h^(5/2) → h^(5/2) = Q/1,42 = 0,120/1,42 = 0,08451. h = 0,08451^(2/5) = 0,08451^0,4. log h = 0,4 × log(0,08451) = 0,4 × (-1,073) = -0,429. h = 10^(-0,429) = 0,372 m. Vérification : Q = 1,42 × 0,372^2,5 = 1,42 × 0,372² × 0,372^0,5 = 1,42 × 0,1384 × 0,6100 = 1,42 × 0,08440 = 0,1198 ≈ 0,120 m³/s ✓.'
      },
      {
        n: '8',
        enonce: 'Un seuil rectangulaire de 2 m de long, à la cote 100 m NGF, est dans un canal d\'irrigation. Le niveau en amont est à 100,45 m NGF. Calculez le débit et la puissance hydraulique dissipée au seuil (ΔH ≈ h = 0,45 m).',
        solution: 'h = 100,45 - 100,00 = 0,45 m. Q = 1,84 × 2 × 0,45^(3/2) = 3,68 × 0,302 = 1,111 m³/s. Puissance dissipée : P = ρ × g × Q × ΔH = 1000 × 9,81 × 1,111 × 0,45 = 4 901 W ≈ 4,9 kW. Cette puissance dissipée crée des turbulences en aval du seuil. Si le fond n\'est pas protégé (radier en béton ou enrochement), l\'érosion peut compromettre la stabilité de l\'ouvrage.'
      }
    ]
  },

  'GEMEAU-061': {
    id: 'GEMEAU-061',
    titre: 'Besoins en irrigation et bilan hydrique à la parcelle',
    fiche: {
      intro: 'Un conseiller irrigation de chambre d\'agriculture reçoit un agriculteur maïsiculteur : 45 ha de maïs grain dans le Lot-et-Garonne, prélevés dans la Garonne. La retenue collinaire de l\'exploitation est à sec depuis juillet. Le conseiller doit calculer les besoins en eau restants jusqu\'à la récolte et vérifier si le débit maximal prélevable (120 m³/h) permet de répondre à la demande en pointe de juillet.',
      sections: [
        {
          titre: '1. L\'évapotranspiration',
          texte: 'L\'évapotranspiration (ET) est la somme de l\'évaporation du sol et de la transpiration des plantes. C\'est la principale sortie d\'eau d\'une parcelle agricole. L\'ETp (évapotranspiration potentielle ou de référence) est l\'ET d\'une culture hypothétique de référence (gazon bien irrigué). Elle dépend des conditions climatiques (température, rayonnement, vent, humidité) et est calculée par la méthode FAO-Penman-Monteith : ETp = [0,408×Δ(Rn-G) + γ×(900/(T+273))×u₂×(es-ea)] / [Δ+γ(1+0,34u₂)]. En pratique, l\'ETp est fournie par les services météo régionaux (Météo-France, Chambres d\'agriculture) sous forme de données journalières ou pentadaires.\n\nL\'ETr (évapotranspiration réelle d\'une culture) est calculée à partir de l\'ETp par : ETr = Kc × ETp. Où Kc est le coefficient cultural (crop coefficient), qui varie avec le stade de développement de la plante. Valeurs de Kc pour le maïs : levée : 0,30 ; développement végétatif : 0,30→1,20 ; floraison (stade critique) : 1,20-1,25 ; grain laiteux : 1,00 ; maturité : 0,60.',
          sous_sections: []
        },
        {
          titre: '2. Le bilan hydrique journalier',
          texte: 'Le bilan hydrique est l\'équation de conservation de l\'eau dans le sol pour une culture : ΔRU = P + I - ETr - D - R. Où ΔRU est la variation de la réserve utile du sol (RU, en mm), P est la pluie efficace (mm), I est l\'irrigation (mm), ETr est l\'évapotranspiration réelle (mm), D est le drainage (eau qui percolé sous la zone racinaire), R est le ruissellement. On néglige souvent D et R pour les calculs d\'irrigation (sol bien drainé, pas de pluie torrentielle).\n\nLa réserve utile (RU) est la quantité d\'eau disponible pour la plante entre la capacité au champ (CC) et le point de flétrissement (PF) : RU = (CC - PF) × profondeur racinaire. Pour un maïs en plein développement (profondeur racinaire ≈ 80 cm) sur un sol limon-argileux (CC - PF ≈ 120 mm/m) : RU = 0,120 × 0,80 = 0,096 m = 96 mm. La dose d\'irrigation se déclenche lorsque la RU disponible descend en dessous de la RFU (Réserve Facilement Utilisable) : RFU = 0,6 × RU = 58 mm.',
          sous_sections: []
        },
        {
          titre: '3. Calcul de la dose d\'irrigation',
          texte: 'La dose nette d\'irrigation (d_nette) est la quantité d\'eau à apporter pour ramener la RU à sa valeur optimale. Elle est limitée par la capacité d\'infiltration du sol et la profondeur de la zone racinaire. Pour un maïs : d_nette = 25-35 mm par apport (tous les 4-8 jours en juillet). La dose brute tient compte du rendement d\'application (η_a) : d_brute = d_nette / η_a. Les rendements d\'application dépendent de la technique : goutte-à-goutte : η_a = 0,90-0,95 ; aspersion localisée : η_a = 0,75-0,85 ; aspersion grande couverture : η_a = 0,65-0,80 ; pivot : η_a = 0,80-0,90 ; gravitaire : η_a = 0,50-0,70.\n\nLe besoin de pointe (débit d\'irrigation en juillet) est estimé par : Q_besoin = (ETr_jour × S) / (h_arrosage × η_a). Où ETr_jour est en mm/jour, S est la superficie en ha, h_arrosage est la durée d\'arrosage par jour en heures. Pour 45 ha de maïs, ETr = 7 mm/j en juillet, aspersion, η_a=0,80, arrosage 20h/j : Q_besoin = (7 × 45 × 10) / (20 × 0,80) = 3 150 / 16 = 197 m³/h.',
          sous_sections: []
        },
        {
          titre: '4. Calendrier d\'irrigation et gestion des restrictions',
          texte: 'Le calendrier d\'irrigation est établi à partir des bilans hydriques hebdomadaires ou décadaires. Il précise les dates d\'irrigation prévisionnelles, les doses à apporter, et le débit prélevé. Ce calendrier est soumis aux services de police de l\'eau pour justifier le volume annuel autorisé (VAN = Volume Autorisé Annuel) dans le cadre d\'une autorisation de prélèvement loi sur l\'eau (article L214-3 du Code de l\'Environnement).\n\nEn période de sécheresse, des arrêtés préfectoraux de restriction peuvent limiter les débits de prélèvement ou interdire l\'irrigation. Il existe 4 niveaux de vigilance : Vigilance (information), Alerte (réduction de 50%), Alerte renforcée (réduction de 75%), Crise (interdiction totale sauf urgences). La stratégie de l\'agriculteur doit intégrer ces contraintes réglementaires, notamment pour le maïs dont la floraison (stade sensible) tombe souvent en période de restriction. Les solutions de stockage (retenues, réservoirs) permettent de s\'affranchir partiellement des restrictions en prélevant en automne-hiver pour irriguer en été.',
          sous_sections: []
        }
      ],
      points: [
        'ETp = évapotranspiration de référence (Penman-Monteith), fournie par les services météo',
        'ETr = Kc × ETp ; Kc (maïs) : 0,30 levée → 1,20 floraison → 0,60 maturité',
        'Bilan hydrique : ΔRU = P + I - ETr (D et R négligés en irrigation)',
        'Réserve utile RU = (CC - PF) × profondeur racinaire — eau disponible pour la plante',
        'RFU = 0,6 × RU — seuil de déclenchement de l\'irrigation',
        'Dose nette = 25-35 mm par apport pour le maïs en juillet',
        'Dose brute = dose nette / η_a (rendement d\'application : goutte-à-goutte 90%, aspersion 75-85%)',
        'Q_besoin = ETr_jour (mm) × Surface (ha) × 10 / (h_arrosage × η_a) → [m³/h]',
        'Volume Annuel Autorisé (VAN) : cadre réglementaire loi sur l\'eau (art. L214-3 Code Env.)',
        '4 niveaux de restriction : Vigilance, Alerte (50%), Alerte renforcée (75%), Crise (100%)'
      ],
      formules: [
        'ETr = Kc × ETp → [mm/j] ; Kc = coefficient cultural',
        'Bilan journalier : ΔRU = P + I - ETr → [mm] ; RU = réserve utile (mm)',
        'Dose brute : d_brute = d_nette / η_a → [mm] ; η_a = rendement d\'application',
        'Débit de pointe : Q = ETr(mm/j) × S(ha) × 10 / (h(h/j) × η_a) → [m³/h]',
        'Réserve utile : RU = (θ_CC - θ_PF) × H_racines → [mm] ; θ en m³/m³, H en mm'
      ],
      retenir: 'ETr = Kc × ETp · Bilan hydrique : ΔRU = P + I - ETr · RFU = 0,6 × RU = seuil de déclenchement · Dose brute = dose nette / η_a · Débit besoin = ETr(mm) × ha × 10 / (h_arrosage × η_a) · Restrictions possibles en été : prévoir stockage hivernal'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Parcelle de maïs de 30 ha en juillet. ETp = 6 mm/j, Kc = 1,15. Pluie sur la semaine = 8 mm. Calcul de l\'ETr hebdomadaire et du déficit par rapport aux pluies.',
        solution: 'ETr journalière = Kc × ETp = 1,15 × 6 = 6,9 mm/j. ETr hebdomadaire = 6,9 × 7 = 48,3 mm. Déficit hebdomadaire = ETr - P = 48,3 - 8 = 40,3 mm. L\'agriculteur doit apporter 40,3 mm d\'irrigation par semaine (sans compter les pertes η_a).'
      },
      {
        n: '2',
        enonce: 'Sol limoneux sur 30 ha : RU = 100 mm, RFU = 60 mm. RU actuelle = 55 mm. ETr = 6,9 mm/j, aucune pluie prévue. Dans combien de jours faut-il irriguer ? Quelle dose nette apporter ?',
        solution: 'RU actuelle = 55 mm, RFU = 60 mm. Le seuil de déclenchement (RFU=60 mm) est déjà dépassé (55 < 60) → irrigation immédiate. Dose nette = RU_max - RU_actuelle = 100 - 55 = 45 mm. On apporte 45 mm pour remplir la réserve utile. Durée avant prochain arrosage (sans pluie) : (RU_plein - RFU)/ETr = (100-60)/6,9 = 40/6,9 = 5,8 jours → arrosage tous les 6 jours environ.'
      },
      {
        n: '3',
        enonce: 'Un pivot centre sur 60 ha (η_a=0,85) doit apporter une dose nette de 30 mm. Combien de temps faut-il pour un tour complet si le débit disponible est 180 m³/h ?',
        solution: 'Dose brute = 30/0,85 = 35,3 mm = 353 m³/ha. Volume total = 353 × 60 = 21 180 m³. Durée = Volume / Débit = 21 180 / 180 = 117,7 heures ≈ 4,9 jours. Pour une dose de 30 mm nette sur 60 ha avec un pivot de 180 m³/h, le tour complet dure environ 5 jours.'
      },
      {
        n: '4',
        enonce: 'En plein été, ETr = 7,5 mm/j sur 45 ha de maïs irrigué à l\'aspersion (η_a=0,78), 18 h d\'arrosage par jour. Calculez le débit nécessaire en m³/h. Le prélèvement autorisé est 150 m³/h : est-ce suffisant ?',
        solution: 'Q = ETr × S × 10 / (h × η_a) = 7,5 × 45 × 10 / (18 × 0,78) = 3 375 / 14,04 = 240 m³/h. Le débit nécessaire (240 m³/h) est supérieur au prélèvement autorisé (150 m³/h). Solutions : allonger la durée d\'arrosage (24h/j si pompe et réseau permettent : Q=7,5×45×10/(24×0,78)=180 m³/h → toujours > 150), réduire la surface irriguée, améliorer le rendement d\'application (passer à du goutte-à-goutte η_a=0,92), ou utiliser une réserve collinaire pour compléter.'
      },
      {
        n: '5',
        enonce: 'Calculez le volume d\'eau nécessaire pour irriguer 20 ha de maïs du 15 juin au 15 août (60 jours). ETr moyenne = 5,5 mm/j, pluies efficaces moyennes = 1,5 mm/j, η_a = 0,82.',
        solution: 'Besoin net journalier = ETr - P = 5,5 - 1,5 = 4,0 mm/j = 40 m³/ha/j. Volume net total = 4,0 × 60 × 20 = 4 800 m³/ha × 20 ha = 4 800 m³/ha... Correction : 4,0 mm/j × 60 j = 240 mm net par ha. Volume net total = 240 × 20 × 10 = 48 000 m³. Volume brut = 48 000 / 0,82 = 58 537 m³. Le dossier de déclaration de prélèvement doit indiquer un volume annuel de 58 500 m³ (arrondi).'
      },
      {
        n: '6',
        enonce: 'Un bilan hydrique hebdomadaire sur une parcelle : RU début = 70 mm, ETr = 7 mm/j, P = 15 mm (lundi), dose I = 25 mm (vendredi). Calculez la RU chaque jour de la semaine.',
        solution: 'Lundi : RU = 70 + 15 - 7 = 78 mm. Mardi : RU = 78 - 7 = 71 mm. Mercredi : RU = 71 - 7 = 64 mm. Jeudi : RU = 64 - 7 = 57 mm (sous RFU supposée = 60 mm → arrosage déclenché). Vendredi matin : arrosage de 25 mm. RU = 57 + 25 - 7 = 75 mm. Samedi : 75 - 7 = 68 mm. Dimanche : 68 - 7 = 61 mm. RU fin de semaine = 61 mm.'
      },
      {
        n: '7',
        enonce: 'Expliquez pourquoi le stade floraison du maïs (Kc=1,20) est dit "stade sensible". Quelles conséquences sur la gestion des restrictions d\'eau ?',
        solution: 'La floraison (mi-juillet en France) correspond au maximum de croissance et d\'activité physiologique du maïs : la plante transpire au maximum (Kc=1,20) et sa demande en eau est maximale. Un stress hydrique de 5 à 7 jours à ce stade peut réduire le rendement de 30 à 50% car la fécondation des épis est compromise. C\'est donc le stade où l\'irrigation est la plus critique. Or, juillet est aussi le mois où les arrêtés de restriction sont les plus probables (étiage des cours d\'eau). Les agriculteurs doivent anticiper en remplissant leurs retenues collinaires en automne-hiver et en négociant des dérogations préfectorales pour ce stade si des restrictions sont prononcées.'
      },
      {
        n: '8',
        enonce: 'Une commune souhaite créer un périmètre irrigué de 200 ha (maïs, ETr moyenne mai-août = 4 mm/j, P = 1 mm/j, η_a=0,80). Calculez le volume d\'eau annuel à prélever et le débit de pointe à fournir (arrosage 20h/j).',
        solution: 'Durée de la saison : mai-août = 122 jours. Besoin net par ha = (4-1) × 122 = 366 mm = 3 660 m³/ha. Volume net total = 3 660 × 200 = 732 000 m³. Volume brut = 732 000/0,80 = 915 000 m³/an. Débit de pointe (juillet : ETr_max=7 mm/j) : Q = 7 × 200 × 10 / (20 × 0,80) = 14 000 / 16 = 875 m³/h. Ce débit de pointe nécessite un ouvrage de prise important et des conduites de gros diamètre. Le volume annuel de 915 000 m³ devra être autorisé par la DDTM.'
      }
    ]
  },

  'GEMEAU-062': {
    id: 'GEMEAU-062',
    titre: 'Conception et pilotage d\'un réseau d\'irrigation',
    fiche: {
      intro: 'Un syndicat d\'irrigants doit rénover le réseau d\'irrigation collectif de 500 ha dans la plaine alluviale de la Dordogne. Le projet comprend le remplacement des canaux à ciel ouvert vieillissants par un réseau sous pression en PEHD, alimenté par une station de pompage modernisée avec variation de vitesse. Le bureau d\'études doit concevoir le réseau depuis la prise d\'eau jusqu\'aux bornes d\'exploitation.',
      sections: [
        {
          titre: '1. Systèmes d\'irrigation et critères de choix',
          texte: 'Les principaux systèmes d\'irrigation se distinguent par leur mode d\'application d\'eau et leur efficacité. L\'irrigation gravitaire (gravitaire de surface, par submersion, par sillons) utilise la gravité pour distribuer l\'eau sur la parcelle. Simple à mettre en œuvre mais efficacité faible (η_a = 50-70%) et nécessite des terrains plats. Encore majoritaire dans les grandes plaines rizicoles mais en recul en France.\n\nL\'aspersion (canons, asperseurs fixes, pivot, enrouleur) pulvérise l\'eau au-dessus des cultures. Efficacité η_a = 70-90% selon le vent et l\'heure d\'arrosage. Le pivot centre est le système le plus automatisé (600 à 1 000 ha par machine), bien adapté aux grandes parcelles circulaires. L\'enrouleur est flexible (n\'importe quelle forme de parcelle) mais plus coûteux en main d\'œuvre.\n\nLa micro-irrigation (goutte-à-goutte, micro-aspersion) apporte l\'eau directement à la zone racinaire. Efficacité η_a = 90-95%. Adapté aux cultures à fort intérêt économique (vignes, maraîchage, arboriculture). Coût d\'installation élevé mais économies d\'eau importantes (réduction de 30-50% par rapport à l\'aspersion) et possibilité de fertigation (injection d\'engrais avec l\'eau).',
          sous_sections: []
        },
        {
          titre: '2. Dimensionnement du réseau sous pression',
          texte: 'Un réseau collectif d\'irrigation sous pression comprend : la station de pompage (ou prise gravitaire), l\'adducteur principal (grande conduite de transport), le réseau de distribution (conduites secondaires et tertiaires), et les bornes d\'exploitation (point de livraison à l\'agriculteur). La borne est le point de séparation entre le réseau collectif (géré par le syndicat) et le réseau privé (géré par l\'agriculteur).\n\nLe dimensionnement s\'effectue en mode de fonctionnement simultané : un pourcentage des irrigants utilise le réseau en même temps. En France, le taux de simultanéité varie de 0,3 (réseau peu intensif) à 0,7 (réseau intensif en été) selon les régions et les cultures. Pour un réseau de 500 ha avec débit-borne de 15 m³/h et 50 bornes, le débit de pointe avec taux de simultanéité 0,5 : Q_pointe = 50 × 15 × 0,5 = 375 m³/h. Ce débit dimensionne la pompe et l\'adducteur principal.',
          sous_sections: []
        },
        {
          titre: '3. Automatisation et pilotage de l\'irrigation',
          texte: 'L\'automatisation de l\'irrigation permet de réduire les volumes consommés et la main d\'œuvre tout en améliorant la répartition de l\'eau. Les équipements d\'un système automatisé sont : sondes capacitives ou tensiomètres (mesure de l\'humidité du sol, déclenchement automatique des apports), télémétrie (transmission des données vers un PC ou smartphone), débitmètres sur chaque borne (mesure des volumes prélevés, télétransmis pour facturation), automates programmables (programmation des tours d\'eau), télécommande des vannes motorisées.\n\nLe pilotage par l\'évapotranspiration calculée (méthode FAO-56) utilise les données météo en temps réel (station météo agronomique sur le périmètre, ou données Météo-France) pour calculer l\'ETr de chaque culture et déclencher l\'irrigation automatiquement. Ce pilotage optimise les doses : les études montrent des économies d\'eau de 15-25% par rapport à un pilotage empirique.',
          sous_sections: []
        },
        {
          titre: '4. Gestion des tours d\'eau et entretien',
          texte: 'Les tours d\'eau sont l\'organisation temporelle de la distribution de l\'eau entre les irrigants. Dans un réseau collectif, l\'accès simultané de tous les irrigants est impossible (réseau sous-dimensionné pour cela, pour des raisons économiques). Le gestionnaire organise des créneaux d\'arrosage par îlots ou par bornes, en essayant de satisfaire les contraintes agronomiques (arroser de préférence la nuit, respecter les stades culturaux sensibles).\n\nL\'entretien d\'un réseau d\'irrigation comprend : chasse des conduites en début et fin de saison, purge des points bas, vérification des clapets et compteurs de bornes, contrôle des seuils de pression aux bornes (un manque de pression indique une fuite ou un mauvais paramétrage), nettoyage des filtres (obligatoire avant le goutte-à-goutte). Les principales pannes : colmatage des filtres, clapet défaillant, coup de bélier suite à coupure d\'électricité (vérifier les protections anti-bélier : soupape d\'air, cheminée anti-bélier, variateur de vitesse sur la pompe).',
          sous_sections: []
        }
      ],
      points: [
        'Efficacités d\'application : gravitaire 50-70%, aspersion 70-90%, goutte-à-goutte 90-95%',
        'Pivot centre : le plus automatisé, η_a=85-90%, 60-120 ha par unité (France)',
        'Réseau collectif sous pression : adducteur → réseau distribution → bornes',
        'Taux de simultanéité : 0,3-0,7 selon intensité ; Q_pointe = Nb_bornes × Q_borne × taux',
        'Pilotage ETp : automatisation basée sur le bilan hydrique calculé à partir des données météo',
        'Sonde capacitive ou tensiomètre : mesure l\'humidité du sol pour déclencher l\'irrigation',
        'Fertigation : injection d\'engrais avec l\'eau d\'irrigation via le goutte-à-goutte',
        'Tours d\'eau : organisation temporelle des créneaux d\'arrosage pour un réseau collectif',
        'Coupure brusque de pompe = coup de bélier → protection par variateur de vitesse ou cheminée',
        'Volume Annuel Autorisé (VAN) : encadrement réglementaire du prélèvement (DDTM, PTGE)'
      ],
      formules: [
        'Débit de pointe réseau collectif : Q_pointe = N_bornes × Q_borne × k_simult → [m³/h]',
        'Dose brute par borne : d_brute = d_nette / η_a → [mm] ; d_nette = besoin net (mm)',
        'Pression à la borne : P_borne = P_service_min + ΔH_réseau → [bar] ; min 2-3 bar selon équipement',
        'Débit-borne agriculteur : Q = V_cle × A_orifice × √(2g×(P_borne - P_min)) → [m³/h]'
      ],
      retenir: 'Goutte-à-goutte η_a=90-95% (le plus économe) · Aspersion η_a=75-85% · Réseau collectif : taux de simultanéité 0,5 pour dimensionner le débit de pointe · Pilotage automatique : économie de 15-25% d\'eau · Tour d\'eau = organisation des créneaux · Protection anti-bélier obligatoire sur les grosses stations'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un réseau collectif comporte 80 bornes, débit-borne de 18 m³/h, taux de simultanéité = 0,45. Calculez le débit de pointe à fournir par la station de pompage.',
        solution: 'Q_pointe = N × Q_borne × k = 80 × 18 × 0,45 = 648 m³/h. La station de pompage doit pouvoir fournir 648 m³/h en régime de pointe. La pompe sera dimensionnée pour 650-700 m³/h avec une réserve de 5-10%.'
      },
      {
        n: '2',
        enonce: 'Comparez le volume d\'eau consommé pour irriguer 10 ha de maïs (dose nette 30 mm) selon 3 systèmes : gravitaire (η_a=0,60), aspersion (η_a=0,80), goutte-à-goutte (η_a=0,93).',
        solution: 'Volume net = 30 mm × 10 ha × 10 = 3 000 m³. Gravitaire : V_brut = 3000/0,60 = 5 000 m³. Aspersion : V_brut = 3000/0,80 = 3 750 m³. Goutte-à-goutte : V_brut = 3000/0,93 = 3 226 m³. Économie goutte-à-goutte vs gravitaire : (5000-3226)/5000 = 35%. Sur 20 apports/saison, l\'économie annuelle pour 10 ha est : (5000-3226)×20 = 35 480 m³. Avec un coût de prélèvement de 0,05 €/m³ (redevance agence de l\'eau), économie annuelle = 1 774 €.'
      },
      {
        n: '3',
        enonce: 'Dimensionnez la conduite principale d\'un réseau d\'irrigation PEHD (k=0,01 mm) reliant la station de pompage (Z=42 m) à la borne la plus éloignée (Z=35 m, L=2 500 m). Q_pointe = 200 m³/h. Pression minimale à la borne = 4 bar. (λ≈0,014)',
        solution: 'Q=200/3600=0,0556 m³/s. Pression résiduelle requise à la borne = 4 bar = 40,8 m CE. Énergie disponible (hors ΔJ) = Z_pompage - Z_borne + H_pompe. En gravitaire : si Z=42>Z=35 : ΔZ=+7 m à l\'avantage. H_dispo = 7 m (gravitaire) + 40,8 m (pression borne min) = 47,8 m. Budget pertes de charge : ΔJ_max = (pression en tête - pression minimale borne) = il faut H_pompe + ΔZ ≥ ΔJ + P_borne. Dimensionnement conduite : vitesse V=1,2 m/s, D=√(4×0,0556/(π×1,2))=0,243 m → DN250 (D_int=252mm). V=0,0556/0,04990=1,114 m/s. J=0,014×1,114²/(2×9,81×0,252)=0,014×1,241/4,946=0,00352 m/m. ΔJ=0,00352×2500=8,8 m. P_borne=7+H_pompe-8,8≥40,8 m. H_pompe min = 40,8+8,8-7=42,6 m. HMT station = 42,6 m.'
      },
      {
        n: '4',
        enonce: 'Un réseau goutte-à-goutte dessert 8 ha de vigne (débit de pointe 12 m³/h/ha). Calculez le débit total, le diamètre de l\'adducteur principal (V_max=1,5 m/s) et la surface de filtration nécessaire (vitesse filtrante max = 0,015 m/s).',
        solution: 'Q_total = 12 × 8 = 96 m³/h = 0,02667 m³/s. Diamètre : D = √(4×0,02667/(π×1,5)) = √(0,02264) = 0,150 m → DN160 PEHD (D_int=160mm). V=0,02667/π×0,16²/4=0,02667/0,02011=1,327 m/s ✓. Surface de filtration : S_filtre = Q/V_filtration = 0,02667/0,015 = 1,78 m². Prévoir un filtre à disques ou à sable de 2 m² minimum pour le goutte-à-goutte (filtre fin obligatoire pour éviter le colmatage des goutteurs).'
      },
      {
        n: '5',
        enonce: 'Un agriculteur utilise un enrouleur à turbine (arroseur canon) : débit 60 m³/h, largeur d\'arrosage 70 m, vitesse d\'avancement 25 m/h. Calculez la hauteur d\'eau apportée par passage.',
        solution: 'Volume d\'eau par mètre avancé = Q × (1/vitesse avancement) = 60 m³/h ÷ 25 m/h = 2,4 m³/m linéaire. Ce volume est réparti sur une largeur de 70 m : Hauteur = Volume/(largeur) = 2,4/70 = 0,0343 m = 34,3 mm par passage. Dose d\'arrosage ≈ 34 mm en une seule passe. Pour une dose de 25 mm : augmenter la vitesse d\'avancement à V = 60/(25×70/1000×100×10) = 60×1000/(25×70×10) = 60000/17500 = 3,43... → V = Q/(largeur×dose) × 1000 = 60000/(70×25) = 34,3 m/h.'
      },
      {
        n: '6',
        enonce: 'Une station de pompage d\'irrigation est équipée d\'un variateur de fréquence (VFD). En juillet, elle fonctionne 16h/j à Q=400 m³/h, H=50 m. La nuit (8h), elle maintient une pression de 3 bar avec Q=100 m³/h, H=35 m. Rendement pompe=0,80. Calculez la consommation électrique journalière.',
        solution: 'Puissance hydraulique = ρgQH/η. Jour (16h) : P_j = 1000×9,81×(400/3600)×50/0,80 = 1000×9,81×0,1111×50/0,80 = 67 900 W = 67,9 kW. Énergie jour = 67,9 × 16 = 1 086 kWh. Nuit (8h) : P_n = 1000×9,81×(100/3600)×35/0,80 = 1000×9,81×0,02778×35/0,80 = 11 880 W = 11,9 kW. Énergie nuit = 11,9 × 8 = 95 kWh. Énergie totale = 1086 + 95 = 1 181 kWh/j. À 0,10 €/kWh : coût = 118 €/j. Sur 60 jours de saison : 7 080 €/saison.'
      },
      {
        n: '7',
        enonce: 'Expliquez comment le pilotage automatique par ETp permet d\'économiser de l\'eau par rapport au pilotage empirique (arrosage à date et dose fixes).',
        solution: 'Le pilotage empirique (ex: arroser 30 mm tous les 6 jours) ne tient pas compte des variations climatiques réelles. Certaines semaines, les pluies suffisent et l\'irrigation est inutile. D\'autres semaines, l\'ETp est élevée et la dose fixe est insuffisante. Le pilotage par ETp calcule chaque jour le déficit hydrique réel (ETr - pluies efficaces) et déclenche l\'irrigation uniquement quand la RU tombe sous la RFU. Les études de terrain montrent 15-25% d\'économie d\'eau : sur 500 ha, cela représente 15-25% de 500×500m³=250 000 m³ → économie de 37 500 à 62 500 m³/an, soit 37 500 à 62 500 € d\'économie en redevances de prélèvement.'
      },
      {
        n: '8',
        enonce: 'Un coup de bélier survient lors d\'une coupure brutale d\'alimentation électrique sur une station de pompage (Q=500 m³/h, V_conduite=1,5 m/s, célérité onde=1 200 m/s, longueur refoulement=1 000 m). Estimez la surpression maximale.',
        solution: 'Surpression coup de bélier (formule de Joukowski) : ΔP = ρ × a × V = 1000 × 1200 × 1,5 = 1 800 000 Pa = 18 bar. Cette surpression de 18 bar s\'ajoute à la pression de service (disons 5 bar) → pression totale = 23 bar → risque de rupture de conduite! En pratique, un variateur de fréquence sur la pompe ramène V à 0 progressivement (arrêt sur 10-30s) et réduit ΔP à 2-3 bar. Sans variateur : installer une cheminée d\'équilibre ou un réservoir à air comprimé anti-bélier.'
      }
    ]
  }

};
