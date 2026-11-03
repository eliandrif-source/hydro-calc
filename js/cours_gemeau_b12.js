var GEMEAU_B12 = {

  'GEMEAU-099': {
    id: 'GEMEAU-099',
    titre: 'Diagnostic hydromorphologique des cours d\'eau',
    fiche: {
      intro: 'Le diagnostic hydromorphologique est la première étape de tout programme de restauration ou de gestion d\'un cours d\'eau. Il permet d\'objectiver l\'état du milieu, de comprendre les dégradations en place et de définir les objectifs à atteindre conformément à la Directive Cadre sur l\'Eau. Un technicien GEMAPI doit maîtriser ces méthodes pour rédiger un état des lieux fiable et défendable devant les partenaires institutionnels.',
      sections: [
        {
          titre: '1. La Directive Cadre sur l\'Eau et le bon état morphologique',
          texte: 'La Directive Cadre sur l\'Eau (DCE 2000/60/CE), transposée en droit français par la Loi sur l\'Eau et les Milieux Aquatiques (LEMA) de 2006, fixe l\'objectif d\'atteindre le bon état écologique et chimique de toutes les masses d\'eau d\'ici 2027. Pour les cours d\'eau, le bon état écologique est évalué sur la base d\'éléments biologiques (macroinvertébrés, diatomées, poissons, macrophytes), physico-chimiques et hydromorphologiques.\n\nL\'état hydromorphologique est considéré comme un facteur de soutien : il ne suffit pas à qualifier l\'état écologique, mais une dégradation morphologique sévère empêche le bon état biologique. Les paramètres hydromorphologiques évalués sont : le régime hydrologique (quantité et dynamique d\'écoulement), la continuité du cours d\'eau (transit sédimentaire et migration des espèces) et les conditions morphologiques (profil en long, profil en travers, substrats, structure des berges, état de la ripisylve).\n\nChaque masse d\'eau est identifiée dans le SDAGE et fait l\'objet d\'un suivi par les services de l\'État (DREAL, OFB). Les résultats sont publiés dans le système d\'information sur l\'eau (Naiades) et servent à orienter les programmes de mesures et les aides des Agences de l\'Eau. Une masse d\'eau en mauvais état hydromorphologique peut bénéficier d\'une dérogation de délai mais doit faire l\'objet d\'un programme d\'actions.',
          sous_sections: [
            {
              titre: '1.1 Masses d\'eau et référentiels',
              texte: 'Une masse d\'eau est l\'unité d\'évaluation de la DCE. Elle est délimitée à partir de critères géographiques (bassin versant), typologiques (taille, pente, géologie) et de pression anthropique. Chaque masse d\'eau est rattachée à un type hydro-écoregion (HER1 et HER2) qui définit l\'état de référence : l\'état qu\'aurait le cours d\'eau en l\'absence de pressions humaines significatives. Connaître le type de sa masse d\'eau est essentiel pour interpréter les indices biologiques (une valeur d\'IBD de 14/20 peut signifier bon état dans une rivière calcaire et état moyen dans une rivière acide des Vosges).'
            }
          ]
        },
        {
          titre: '2. Protocoles de terrain : l\'Indice d\'Altération Morphologique (IAM)',
          texte: 'L\'Indice d\'Altération Morphologique (IAM), développé par l\'INRAE et l\'OFB, est la méthode de référence française pour quantifier les altérations hydromorphologiques d\'un tronçon de cours d\'eau. Il est calculé sur des tronçons homogènes de longueur variable (typiquement 50 fois la largeur plein bord, soit 200 à 1000 m selon la taille de la rivière).\n\nL\'IAM évalue 5 composantes principales : (1) l\'artificialisation du lit (recalibrage, bétonnage, enrochement), (2) la perturbation du transit sédimentaire (seuils, barrages, extractions), (3) la modification du tracé en plan (rectification, canalisation), (4) la disconnexion latérale (digues, remblais, occupation fluviale), (5) la dégradation des berges et de la ripisylve (érosion, piétinement, coupes).\n\nChaque composante est notée de 0 (non altéré) à 3 (très fortement altéré), et une note globale de 0 à 15 est calculée (0-3 très bon, 4-6 bon, 7-9 moyen, 10-12 médiocre, 13-15 mauvais). Sur le terrain, le technicien parcourt le tronçon à pied en remplissant une fiche standardisée, prend des photos géolocalisées et mesure les dimensions caractéristiques (largeur au miroir, largeur plein bord, profondeur, pente).\n\nL\'IAM est complété par des méthodes quantitatives : la méthode du lit de référence (comparaison au profil en long d\'équilibre), l\'inventaire des obstacles à l\'écoulement et des ouvrages transversaux, et la cartographie des faciès d\'écoulement (rapide, radier, plat courant, chenal lentique).',
          sous_sections: [
            {
              titre: '2.1 Préparation de la mission de terrain',
              texte: 'Avant la sortie terrain, le technicien collecte les données bibliographiques disponibles : photographies aériennes historiques (Géoportail Remonter le temps depuis 1950), profil en long issu du MNT Lidar, données sur les ouvrages recensés (ROE, Référentiel des Obstacles à l\'Écoulement), rapports d\'études antérieurs, données de débit (Banque Hydro). Cette phase de bureau permet de délimiter les tronçons homogènes et d\'orienter les observations terrain.'
            }
          ]
        },
        {
          titre: '3. Caractérisation géométrique du chenal',
          texte: 'Le profil en travers est mesuré à plusieurs sections représentatives du tronçon étudié. On distingue : la largeur au miroir (surface libre à l\'étiage), la largeur plein bord (seuil de débordement vers la plaine alluviale), et la profondeur plein bord. Ces mesures permettent de calculer le rapport largeur/profondeur (W/D) qui renseigne sur la forme du chenal : un cours d\'eau à W/D > 20 est considéré comme large et peu profond (cours d\'eau de plaine), tandis qu\'un W/D < 8 caractérise un cours d\'eau encaissé (cours d\'eau de montagne).\n\nLa sinuosité est calculée comme le rapport entre la longueur réelle du chenal et la longueur à vol d\'oiseau sur le même tronçon. Une sinuosité supérieure à 1,3 caractérise un cours d\'eau méandriforme, entre 1,05 et 1,3 un cours d\'eau sinueux, inférieure à 1,05 un cours d\'eau rectiligne (souvent artificiel). La sinuosité est un indicateur clé du niveau d\'artificialisation.\n\nLe substrat du fond est caractérisé par une granulométrie visuelle ou mesurée (D50, D90 en mm). On distingue les substrats fins (limons, sables, D50 < 2 mm), les graviers (D50 = 2-20 mm), les galets (D50 = 20-200 mm) et les blocs (D50 > 200 mm). Un substrat colmaté par des sédiments fins sur un lit naturellement graveleux est signe d\'excès de matières en suspension et de dégradation de l\'habitat pour la reproduction piscicole.',
          sous_sections: []
        },
        {
          titre: '4. Berges, ripisylve et plaine alluviale',
          texte: 'Les berges jouent un rôle fondamental dans la morphologie et le fonctionnement écologique du cours d\'eau. Une berge en bon état présente une végétation rivulaire diversifiée (herbacées, arbustes, arbres de haut jet), une cohésion mécanique assurée par les racines, et une interface eau/terre progressive. Les berges artificialisées (enrochement, béton, palplanches) suppriment ces fonctions et accentuent la vitesse d\'écoulement en crue, transférant l\'énergie vers l\'aval.\n\nLa ripisylve (boisement de bords de cours d\'eau) assure plusieurs fonctions écosystémiques : stabilisation des berges par les racines, ombrage limitant le réchauffement de l\'eau en été, apport de matière organique (feuilles, débris ligneux) constituant la base du réseau trophique des macroinvertébrés, et corridor écologique pour la faune terrestre. Une ripisylve continue sur les deux rives est un critère fort de bon état.\n\nLa plaine alluviale est la zone fonctionnelle du cours d\'eau qui se connecte lors des crues. Elle remplit des fonctions d\'expansion des crues (laminage), d\'épuration (rétention des nutriments, dénitrification), de recharge des nappes alluviales et de refuge pour la biodiversité. La présence de digues, de remblais agricoles ou de zones bâties en plaine alluviale constitue une altération de la disconnexion latérale, identifiée dans l\'IAM.',
          sous_sections: []
        },
        {
          titre: '5. Rédaction du rapport de diagnostic',
          texte: 'Le rapport de diagnostic hydromorphologique présente : (1) la localisation et la description générale de la masse d\'eau (carte, bassins versant, contexte géologique), (2) la méthodologie employée (IAM, relevés terrain), (3) les résultats détaillés par tronçon avec photos et mesures, (4) la synthèse des pressions et altérations identifiées, (5) les objectifs de restauration raisonnés et hiérarchisés. Ce document sert de base au programme de travaux et aux dossiers réglementaires (dossier loi sur l\'eau). Il est soumis à validation par l\'Agence de l\'Eau et les services de l\'État avant tout engagement de travaux.',
          sous_sections: []
        }
      ],
      points: [
        'La DCE 2000/60/CE fixe l\'objectif de bon état écologique pour toutes les masses d\'eau d\'ici 2027',
        'L\'IAM note de 0 à 15 les altérations morphologiques d\'un tronçon sur 5 composantes',
        'La sinuosité mesure le rapport longueur réelle / longueur à vol d\'oiseau (> 1,3 = méandriforme)',
        'Le rapport W/D (largeur/profondeur plein bord) caractérise la forme du chenal',
        'Le D50 est la taille médiane des sédiments du fond (50% plus fins, 50% plus grossiers)',
        'La ripisylve assure stabilisation, ombrage et corridor écologique',
        'La plaine alluviale remplit des fonctions d\'expansion des crues et d\'épuration',
        'Le ROE (Référentiel des Obstacles à l\'Écoulement) recense tous les ouvrages transversaux',
        'Un diagnostic hydromorphologique précède tout programme de restauration',
        'La déconnexion latérale (digues, remblais) est une altération majeure identifiée par l\'IAM',
        'Les données Lidar permettent d\'extraire un MNT précis (±10 cm) pour le profil en long',
        'L\'état hydromorphologique est un facteur de soutien de l\'état écologique dans la DCE'
      ],
      formules: [
        'Sinuosité : S = L_réel / L_vol → [sans unité] ; L_réel = longueur du chenal mesurée, L_vol = longueur à vol d\'oiseau',
        'Rapport largeur/profondeur : W/D = B / h → [sans unité] ; B = largeur plein bord [m], h = profondeur plein bord [m]',
        'Taux d\'artificialisation berges : TA = L_artificielle / L_totale × 100 → [%] ; L_artificielle = longueur de berges enrochées ou bétonnées',
        'Surface boisée ripisylve : Tx_boisement = Surface_ripisylve / (L_cours × largeur_ref) × 100 → [%]'
      ],
      retenir: 'DCE 2000/60/CE · IAM · Sinuosité · W/D · D50 · Ripisylve · ROE · Plaine alluviale · SDAGE · Bon état morphologique · Masse d\'eau · Tronçon homogène'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un tronçon de rivière a une longueur réelle de 2 840 m et une longueur à vol d\'oiseau de 2 100 m. Calculez la sinuosité et précisez le type de tracé.',
        solution: 'S = 2840 / 2100 = 1,35. Sinuosité > 1,3 : cours d\'eau méandriforme. Ce tracé naturel doit être préservé car il dissipe l\'énergie et augmente le temps de transfert des crues.'
      },
      {
        n: '2',
        enonce: 'Un relevé de profil en travers donne : largeur plein bord B = 18 m, profondeur plein bord h = 0,95 m. Calculez W/D et interprétez.',
        solution: 'W/D = 18 / 0,95 = 18,9. Valeur comprise entre 10 et 20 : cours d\'eau de plaine à fond large, typique d\'un cours d\'eau divaguant. Un W/D aussi élevé peut indiquer une phase d\'incision ou un recalibrage ancien qui a élargi le chenal.'
      },
      {
        n: '3',
        enonce: 'Sur 1 200 m de berges relevées, 420 m sont enrochés et 180 m sont bétonnés. Calculez le taux d\'artificialisation.',
        solution: 'L_artificielle = 420 + 180 = 600 m. TA = 600/1200 × 100 = 50%. Ce taux est très élevé : plus de la moitié des berges ne jouent plus leur rôle écologique. L\'IAM attribuera une note d\'altération de 2 à 3 sur cette composante.'
      },
      {
        n: '4',
        enonce: 'Un diagnostic IAM donne les notes suivantes : artificialisation lit = 2, perturbation transit = 3, modification tracé = 1, disconnexion latérale = 2, dégradation berges = 1. Quelle est la note globale et l\'état morphologique ?',
        solution: 'Note globale = 2 + 3 + 1 + 2 + 1 = 9. Classe "état moyen" (7-9). Le transit sédimentaire est la composante la plus dégradée (présence probable d\'ouvrages transversaux). Priorité d\'action : améliorer la continuité sédimentaire.'
      },
      {
        n: '5',
        enonce: 'Un IBD relevé sur une rivière calcaire donne 14,5/20. Sur quelle base interprète-t-on ce résultat et quelle est la classe d\'état ?',
        solution: 'L\'IBD (Indice Biologique Diatomées) s\'interprète par rapport au type hydro-écoregion. Sur une rivière calcaire de plaine (HER2 = calcaires tendres), un IBD de 14,5/20 correspond à un "bon état" (seuil bon/très bon ≈ 17/20 selon le type). La notation doit toujours être comparée aux valeurs-seuils du type, non à une échelle absolue.'
      },
      {
        n: '6',
        enonce: 'Lors d\'un relevé de terrain, on mesure sur 10 stations un D50 moyen de 1,2 mm. Sur le même cours d\'eau il y a 20 ans, les photos montrent un substrat de galets (D50 ≈ 30 mm). Quelle altération cela traduit-il ?',
        solution: 'Une chute de D50 de 30 mm à 1,2 mm indique un colmatage massif du fond par des sédiments fins. Causes possibles : apports de matières en suspension (érosion des terres agricoles, rejets de boues), mais aussi déficit de transport solide (barrage amont retenant les sédiments grossiers). Conséquence écologique majeure : destruction des zones de reproduction des salmonidés (frayères).'
      },
      {
        n: '7',
        enonce: 'Un cours d\'eau de 4,5 km est à diagnostiquer. La largeur plein bord moyenne est 12 m. En combien de tronçons homogènes devrait-on le diviser pour appliquer l\'IAM (longueur recommandée = 50 × largeur) ?',
        solution: 'Longueur d\'un tronçon recommandée = 50 × 12 = 600 m. Nombre de tronçons = 4500 / 600 = 7,5 arrondi à 7 ou 8 tronçons. En pratique, les changements de morphologie, d\'occupation du sol ou de contexte hydraulique (confluences, ouvrages) guideront le découpage réel, qui peut donner des tronçons de 300 à 1000 m.'
      },
      {
        n: '8',
        enonce: 'Une digue parallèle au cours d\'eau isole 8,5 ha de plaine alluviale. Quel est l\'impact sur la fonction d\'expansion des crues, sachant que la hauteur moyenne d\'inondation était de 0,6 m lors des crues Q10 ?',
        solution: 'Volume d\'expansion perdu = 8,5 ha × 0,6 m = 8,5 × 10 000 m² × 0,6 m = 51 000 m³. Ce volume (51 000 m³) aurait été retenu lors d\'une crue décennale, écrêtant le débit de pointe. La digue transfère cette eau vers l\'aval, aggravant les niveaux d\'eau en aval. C\'est une altération de la disconnexion latérale notée 2 à 3 dans l\'IAM.'
      }
    ]
  },

  'GEMEAU-100': {
    id: 'GEMEAU-100',
    titre: 'Transport sédimentaire, érosion et dynamique fluviale',
    fiche: {
      intro: 'Comprendre le transport sédimentaire est indispensable pour diagnostiquer une rivière dégradée, dimensionner un ouvrage (seuil, prise d\'eau) ou concevoir une opération de recharge granulométrique. Les sédiments sont le sang des cours d\'eau : leur déficit ou leur excès conduit à des déséquilibres morphologiques qui dégradent les habitats et aggravent les risques.',
      sections: [
        {
          titre: '1. Caractérisation granulométrique des sédiments',
          texte: 'Les sédiments d\'un cours d\'eau sont décrits par leur distribution granulométrique, obtenue par tamisage en laboratoire ou par photogranulométrie sur le terrain. Les paramètres clés sont le D50 (diamètre médian : 50 % des grains sont plus fins) et le D90 (90 % des grains sont plus fins). Ces valeurs permettent de calculer le coefficient de tri Cu = D60/D10 : un sédiment bien trié (Cu < 2) indique un transport actif de sélection granulométrique, tandis qu\'un sédiment mal trié (Cu > 6) évoque des dépôts de crue peu triés.\n\nLa classification de Wentworth est la référence internationale : argiles (< 0,004 mm), limons (0,004-0,063 mm), sables fins à grossiers (0,063-2 mm), graviers (2-16 mm), galets moyens (16-64 mm), gros galets (64-256 mm), blocs (> 256 mm). Pour un cours d\'eau de plaine à régime mésolithique (nappes herbeuses), les substrats dominants sont les graviers à galets ; tout colmatage par des sables fins signale une perturbation.\n\nLa mesure du D50 se fait sur le terrain par comptage de Wolman (100 cailloux prélevés au hasard, mesurés à l\'axe intermédiaire) ou par photogranulométrie assistée par logiciel (Basegrain, pHoto-sediment). Ces méthodes fournissent une valeur de D50 représentative de la station avec une incertitude d\'environ ±20%.',
          sous_sections: []
        },
        {
          titre: '2. Mobilisation des sédiments : la loi de Shields',
          texte: 'Un grain est mis en mouvement lorsque les forces hydrodynamiques exercées sur lui (traînée et portance) dépassent les forces de résistance (gravité, cohésion). Shields (1936) a établi le critère adimensionnel θ (theta de Shields) qui définit le seuil de mise en mouvement. Ce critère est aujourd\'hui la référence pour le calcul de la compétence hydraulique.\n\nLe paramètre de Shields θ compare la contrainte tangentielle au fond (τ₀) au poids immergé du grain. Pour les rivières graveleuses, le seuil critique de Shields θc est compris entre 0,045 et 0,06 selon la forme des grains. Le débit solide de charriage (transport par roulement et saltation au fond) est calculé à partir des formules de Meyer-Peter-Müller, fondamentales dans la profession.\n\nLa contrainte tangentielle au fond τ₀ = ρ × g × R × J (en N/m²), où ρ = masse volumique de l\'eau (1000 kg/m³), g = 9,81 m/s², R = rayon hydraulique (m), J = pente de la ligne d\'énergie. Pour estimer si les sédiments en place sont mobiles à un débit donné, on compare τ₀ calculé à τ_critique = θc × (ρs - ρ) × g × D50.',
          sous_sections: [
            {
              titre: '2.1 Charriage de fond vs suspension',
              texte: 'Le charriage de fond concerne les grains lourds qui roulent, glissent ou sautent (saltation) au contact du fond : ce sont les graviers et galets. Le transport en suspension concerne les grains fins (sables fins, limons, argiles) qui restent en déséquilibre permanent sous l\'effet de la turbulence. Un troisième mode, le charriage en saltation, concerne les sables grossiers qui effectuent des bonds. En pratique, pour un cours d\'eau de plaine avec D50 = 5 mm, le charriage est dominant. Pour un D50 = 0,1 mm, la suspension domine.'
            }
          ]
        },
        {
          titre: '3. Bilan sédimentaire et indicateurs d\'état',
          texte: 'Le bilan sédimentaire d\'un tronçon compare les apports (erosion des berges, affluents, versants) aux exports (évacuation vers l\'aval) en tenant compte du stockage dans le lit et la plaine. Un bilan déficitaire (exports > apports) conduit à l\'incision du lit (enfoncement du profil en long), à la perte d\'habitat et à la déstabilisation des ouvrages. Un bilan excédentaire entraîne le remblaiement, l\'atterrissement des herbiers et la modification des faciès.\n\nLes causes fréquentes de déficit sédimentaire sont : les extractions granulaires historiques (avant 1994, largement pratiquées dans les rivières françaises), les barrages retenant les sédiments, la recalibration du lit (surcreusement), et la déforestation des versants ayant réduit les apports de bois mort. Des exemples célèbres incluent l\'incision du Rhône aval (–3 à –5 m depuis les années 1950) et de la Loire entre Nevers et Tours.\n\nLe déséquilibre sédimentaire est quantifié par la formule de Lane : QD50 ∝ Qs/J, où Q = débit liquide, D50 = granulométrie du fond, Qs = débit solide, J = pente du fond. Si on augmente J (correction du lit par enrochement) sans modifier Qs, le cours d\'eau s\'incise pour atteindre un nouvel équilibre.',
          sous_sections: []
        },
        {
          titre: '4. Impacts des aménagements sur le transit sédimentaire',
          texte: 'Les seuils et barrages sont les principaux perturbateurs du transit sédimentaire. En amont, ils créent une retenue où les sédiments décantent (efficacité de piégeage proche de 100% pour les fins). En aval, l\'eau limpide (clear water) déferle avec un fort pouvoir érosif, incisant le lit sur plusieurs kilomètres. La restauration de la continuité sédimentaire passe par l\'arasement des seuils, la mise en place de passes à sédiments, ou la recharge artificielle en granulats.\n\nLes travaux de recharge granulométrique consistent à déposer des matériaux calibrés (D50 adapté à la rivière, typiquement 20-60 mm pour une rivière à truites) dans le lit à l\'amont des seuils ou sur des radiers dégradés. Ces chantiers sont aujourd\'hui réalisés dans le cadre des PGCE et financés par les Agences de l\'Eau. Le suivi de l\'évolution des dépôts (bathymétrie, photogranulométrie) est réalisé annuellement.',
          sous_sections: []
        }
      ],
      points: [
        'D50 = diamètre pour lequel 50% des grains sont plus fins ; D90 = diamètre pour lequel 90% sont plus fins',
        'Le critère de Shields θ = τ₀ / [(ρs - ρ) × g × D50] définit le seuil de mise en mouvement',
        'θ_critique ≈ 0,047 pour les graviers (seuil de mobilisation en rivière)',
        'La contrainte tangentielle τ₀ = ρ × g × R × J [N/m²]',
        'Un bilan sédimentaire déficitaire cause l\'incision (enfoncement) du lit',
        'Les barrages piègent les sédiments à 99% et créent une eau limpide érosive en aval',
        'La recharge granulométrique artificielle compense les déficits sédimentaires',
        'Le charriage de fond concerne les graviers/galets (roulement, saltation)',
        'La suspension concerne les sables fins, limons et argiles',
        'La relation de Lane relie débit, pente, débit solide et granulométrie à l\'équilibre',
        'L\'extraction de granulats en rivière est interdite depuis 1994 en France',
        'Le ROE recense les obstacles ; plus de 87 000 obstacles référencés en France'
      ],
      formules: [
        'Contrainte tangentielle fond : τ₀ = ρ × g × R × J → [N/m²] ; ρ = 1 000 kg/m³, g = 9,81 m/s², R = rayon hydraulique [m], J = pente [-]',
        'Paramètre de Shields : θ = τ₀ / [(ρs - ρ) × g × D50] → [sans unité] ; ρs = 2 650 kg/m³ (quartz), D50 [m]',
        'Contrainte critique de Shields : τ_c = θ_c × (ρs - ρ) × g × D50 → [N/m²] ; θ_c ≈ 0,047',
        'Formule de Meyer-Peter-Müller : q_s = 8 × (θ - θ_c)^1,5 × [(ρs/ρ - 1) × g × D50³]^0,5 → [m²/s] ; débit solide unitaire de charriage'
      ],
      retenir: 'D50 · D90 · Shields · Charriage · Suspension · Incision · Recharge · Bilan sédimentaire · Clear water · ROE · Meyer-Peter-Müller · Continuité sédimentaire'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un radier gravelo-sableux présente un D50 = 8 mm, une pente J = 3‰, un rayon hydraulique R = 0,55 m. Calculez τ₀ et déterminez si les sédiments sont en mouvement (θc = 0,047 ; ρs = 2650 kg/m³).',
        solution: 'τ₀ = 1000 × 9,81 × 0,55 × 0,003 = 16,2 N/m². τ_c = 0,047 × (2650 - 1000) × 9,81 × 0,008 = 0,047 × 1650 × 9,81 × 0,008 = 6,1 N/m². τ₀ (16,2) > τ_c (6,1) : les sédiments sont en mouvement actif. θ = 16,2 / (1650 × 9,81 × 0,008) = 16,2 / 129,5 = 0,125, soit plus de 2,6 fois le seuil. Charriage intense.'
      },
      {
        n: '2',
        enonce: 'Sur un radier, on compte 100 galets par comptage de Wolman avec les diamètres (mm) suivants : 50% ont D < 12 mm ; 90% ont D < 35 mm. Donnez D50, D90 et interprétez le substrat.',
        solution: 'D50 = 12 mm (graviers grossiers), D90 = 35 mm (petits galets). Substrat graveleux bien calibré, typique d\'une rivière à truites. Le coefficient de tri Cu = D60/D10 est à calculer sur la courbe complète. Un D50 de 12 mm à une pente de 2-4‰ indique un régime de transport actif et un bon potentiel de frayère salmonicole.'
      },
      {
        n: '3',
        enonce: 'Un barrage de 8 m de hauteur piège 98% des sédiments. Le débit solide naturel entrant est estimé à 3 500 t/an. Quelle masse de sédiments atteint l\'aval chaque année ? Quel volume correspond si ρs_vrac = 1 600 kg/m³ ?',
        solution: 'Sédiments passant à l\'aval = 3 500 × (1 - 0,98) = 3 500 × 0,02 = 70 t/an. Volume = 70 000 kg / 1 600 kg/m³ = 43,75 m³/an. Ce déficit massif (3 430 t/an retenues) provoque une incision et une coarsenning du fond sur plusieurs km en aval. Avant le barrage, 3 500 t/an s\'acheminaient naturellement vers les zones de dépôt.'
      },
      {
        n: '4',
        enonce: 'Des relevés altimétrique de 2000 et 2020 sur un tronçon de 1,5 km montrent que le fond s\'est enfoncé de 0,45 m en moyenne. La largeur du lit est 14 m. Calculez le volume de sédiments perdu.',
        solution: 'Volume érodé = 1 500 m × 14 m × 0,45 m = 9 450 m³ soit environ 9 450 × 1 600 kg/m³ ÷ 1 000 = 15 120 t sur 20 ans, soit ~756 t/an de déficit. Ce résultat justifie une opération de recharge granulométrique et une étude des sources de déficit (extraction, barrage amont).'
      },
      {
        n: '5',
        enonce: 'Une recharge granulométrique de 2 000 m³ de graviers (D50 = 25 mm) est réalisée sur un tronçon de 600 m. Quelle épaisseur moyenne de recharge représente-t-elle pour une largeur utile de 10 m ?',
        solution: 'Épaisseur = 2 000 m³ / (600 m × 10 m) = 2 000 / 6 000 = 0,33 m soit 33 cm. Cette épaisseur est suffisante pour créer de nouvelles frayères et des abris pour les macroinvertébrés. Elle doit être suivie tous les ans pour évaluer le lessivage (départ vers l\'aval) et calibrer les recharges suivantes.'
      },
      {
        n: '6',
        enonce: 'Une rivière à galets a D50 = 45 mm, J = 5‰, largeur B = 22 m, débit Q = 28 m³/s (hauteur h ≈ 1,0 m). Calculez R, τ₀ et vérifiez si les galets sont mobiles.',
        solution: 'R ≈ (B × h)/(B + 2h) = (22 × 1)/(22 + 2) = 22/24 = 0,917 m. τ₀ = 1 000 × 9,81 × 0,917 × 0,005 = 44,95 N/m². τ_c = 0,047 × 1 650 × 9,81 × 0,045 = 34,2 N/m². τ₀ (45) > τ_c (34,2) : les galets de 45 mm sont tout juste en mouvement à ce débit. C\'est le débit morphogène (débit qui façonne le lit).'
      },
      {
        n: '7',
        enonce: 'Un géologue indique que les sédiments fins venant des versants représentent 12 t/km²/an d\'érosion sur un bassin de 85 km². Quel flux de MES atteint le cours d\'eau principal si le taux de livraison sédimentaire (SDR) est 35% ?',
        solution: 'Érosion totale = 12 t/km²/an × 85 km² = 1 020 t/an. Flux livré au cours d\'eau = 1 020 × 0,35 = 357 t/an. Le SDR (Sediment Delivery Ratio) représente la part des sédiments érodés qui atteignent effectivement le réseau hydrographique, le reste se déposant en bas de versant ou en zone tampon. À comparer à la capacité de transport du cours d\'eau pour évaluer le risque de colmatage.'
      },
      {
        n: '8',
        enonce: 'Expliquez pourquoi l\'enrochement des berges sur 800 m d\'un méandre peut provoquer l\'incision du lit en aval, même sans extraction de granulats.',
        solution: 'L\'enrochement empêche l\'érosion latérale des berges, qui était une source naturelle de sédiments grossiers (graviers, galets). En supprimant ces apports, le débit solide sortant dépasse les apports : bilan déficitaire. L\'eau limpide dévale l\'aval avec un θ > θc, érodant le fond (incision). De plus, le bétonnage augmente la vitesse d\'écoulement (rugosité plus faible), augmentant la compétence et l\'érosion du fond. L\'enrochement déplace souvent le problème érosif vers l\'aval.'
      }
    ]
  },

  'GEMEAU-101': {
    id: 'GEMEAU-101',
    titre: 'Zones humides et solutions fondées sur la nature',
    fiche: {
      intro: 'Les zones humides figurent parmi les écosystèmes les plus productifs et les plus menacés de la planète : la France en a perdu plus de 67 % depuis le début du XXe siècle. Leur restauration constitue aujourd\'hui une priorité des politiques de l\'eau, notamment dans le cadre de GEMAPI et des programmes de mesures des SDAGE. Comprendre leurs fonctions et leur réglementation est indispensable pour tout technicien de l\'eau.',
      sections: [
        {
          titre: '1. Définition réglementaire et identification des zones humides',
          texte: 'En France, la définition réglementaire des zones humides est fixée par l\'article L. 211-1 du Code de l\'environnement et précisée par l\'Arrêté du 24 juin 2008 (modifié en 2017 suite à l\'arrêt Commune de Fontenoy). Une zone humide est définie par la présence simultanée (ou d\'un seul critère si l\'autre est difficile à établir) de deux critères : (1) un sol hydromorphe présentant des traces de réduction ou d\'oxydation du fer (taches rouille sur fond gris bleuté en anaérobie), évalué selon les classes GEPPA III et IV ou l\'horizon histique ; (2) une végétation dominée par des espèces hygrophiles listées dans l\'arrêté.\n\nLe protocole terrain d\'identification se déroule en deux temps : (a) relevé de végétation sur des placettes de 25 m² avec identification des espèces et calcul du pourcentage de présence des espèces hygrophiles (> 50% = zone humide) ; (b) sondage pédologique jusqu\'à 1,2 m avec description des horizons et identification des critères d\'hydromorphie (classes GEPPA III = signes de saturation saisonnière). Les deux critères sont indépendants et l\'un ou l\'autre suffit si l\'autre est impossible à évaluer.\n\nL\'inventaire des zones humides est coordonné au niveau national par l\'OFB via le BNDZH (Base Nationale des Données sur les Zones Humides). La DREAL peut imposer un inventaire lors de l\'instruction d\'un dossier loi sur l\'eau. Toute destruction ou altération d\'une zone humide nécessite des mesures compensatoires (doublement de la surface détruite, à superficie et fonctionnalité équivalentes).',
          sous_sections: []
        },
        {
          titre: '2. Services écosystémiques et valeur des zones humides',
          texte: 'Les zones humides rendent des services écosystémiques majeurs, souvent méconnus et sous-évalués économiquement. Ils sont classés en quatre catégories selon la classification TEEB (The Economics of Ecosystems and Biodiversity) :\n\nServices de régulation : (a) Régulation hydrologique : rétention des crues par stockage (1 ha de zone humide peut retenir 1 000 à 5 000 m³), laminage des pointes de crue, recharge des nappes par infiltration. (b) Épuration des eaux : les zones humides à végétation émergente (roselières, cariçaies) dénitrifient les nitrates (200 à 400 kgN/ha/an), fixent les matières en suspension et assimilent le phosphore. (c) Régulation climatique : stockage de carbone dans les tourbières (400 t de C/ha), refroidissement par évapotranspiration.\n\nServices d\'approvisionnement : production de biomasse (roseaux pour toiture, bois de saule), pêche, chasse, pâturage extensif, eau de bonne qualité pour l\'irrigation.\n\nServices culturels : paysage, patrimoine, birdwatching, pédagogie, tourisme vert.\n\nLa valeur économique totale des zones humides françaises est estimée à 30 000 à 50 000 €/ha/an (étude OFB 2019). À titre de comparaison, le coût d\'un bassin d\'orage permettant de stocker 1 000 m³ est de l\'ordre de 200 000 à 500 000 €, soit la valeur d\'un seul ha de zone humide pour ce service seul.',
          sous_sections: []
        },
        {
          titre: '3. Solutions fondées sur la nature (SFN / NBS)',
          texte: 'Les solutions fondées sur la nature (SFN, ou NBS en anglais Nature-Based Solutions) sont définies par la Commission européenne comme des actions qui s\'inspirent et s\'appuient sur les processus naturels pour apporter des solutions à des défis sociétaux, notamment la gestion de l\'eau, l\'adaptation au changement climatique et la biodiversité. Ces solutions sont reconnues comme efficaces et moins coûteuses que les infrastructures grises à long terme.\n\nExemples de SFN en gestion de l\'eau : (1) Reconnexion de zones humides : arasement d\'une digue de protection agricole pour permettre la remontée des crues dans 15 ha de prairie, créant une zone d\'expansion de crue ; (2) Création de mares : maillage de mares (100 m² à 0,5 ha) sur les versants pour retenir le ruissellement et créer des habitats amphibiens ; (3) Restauration de ripisylve : replantation d\'essences indigènes sur les berges (saule, aulne, frêne) pour stabiliser les berges et créer un corridor écologique ; (4) Prairies humides inondables : acquisition et gestion extensive de prairies en zone d\'expansion des crues.\n\nLes SFN sont financées dans le cadre des programmes d\'actions SDAGE/SAGE, des MAEC (Mesures Agro-Environnementales et Climatiques), des programmes LEADER et des appels à projets Agences de l\'Eau. Le ratio coût-bénéfice des SFN est généralement favorable sur une durée de 20-50 ans.',
          sous_sections: []
        },
        {
          titre: '4. Réglementation et mesures compensatoires',
          texte: 'La destruction d\'une zone humide est soumise à autorisation ou déclaration au titre de la loi sur l\'eau (IOTA), en application de la rubrique 3.3.1.0 de la nomenclature. Si la surface détruite est ≥ 1 000 m², une autorisation est requise ; entre 100 m² et 1 000 m², une déclaration suffit. Le dossier doit démontrer l\'absence d\'alternative et proposer des mesures compensatoires (séquence ERC : Éviter, Réduire, Compenser).\n\nLa compensation doit respecter la règle de non-perte nette et, en pratique, exige la restauration ou la création d\'une surface de zone humide de fonctionnalité équivalente, au moins égale à 150% de la surface détruite (coefficient de compensation de 1,5 à 3 selon la fonctionnalité résiduelle). La DREAL peut exiger un suivi écologique sur 10 à 30 ans pour vérifier l\'efficacité des mesures.',
          sous_sections: []
        }
      ],
      points: [
        'Deux critères définissent une ZH : sol hydromorphe (GEPPA III/IV) ET végétation hygrophile (Arrêté 2008)',
        'La France a perdu 67% de ses zones humides depuis le début du XXe siècle',
        '1 ha de zone humide peut stocker 1 000 à 5 000 m³ lors des crues',
        'La dénitrification en zone humide peut atteindre 400 kgN/ha/an',
        'Destruction ZH ≥ 1 000 m² = autorisation loi sur l\'eau (rubrique 3.3.1.0)',
        'La compensation exige au minimum 150% de la surface détruite à fonctionnalité équivalente',
        'Les SFN (Solutions Fondées sur la Nature) sont souvent moins coûteuses que les infrastructures grises',
        'Le BNDZH (Base Nationale des Données ZH) inventorie les zones humides en France',
        'Les MAEC financent la gestion extensive des prairies humides',
        'Les tourbières stockent jusqu\'à 400 t de carbone par hectare',
        'La valeur économique des ZH est estimée à 30 000 - 50 000 €/ha/an',
        'L\'Arrêté du 24 juin 2008 liste les espèces végétales indicatrices de zones humides'
      ],
      formules: [
        'Volume de rétention : V = S × h → [m³] ; S = surface ZH [m²], h = hauteur d\'eau stockée [m]',
        'Dénitrification : flux N = r × S → [kgN/an] ; r = taux de dénitrification [kgN/ha/an], S = surface ZH [ha]',
        'Surface compensatoire minimale : S_comp = k × S_détruite → [m²] ; k = coefficient compensation (1,5 à 3)',
        'Coût évité (infrastructure grise) : C_évité = V_retenu × coût_m³_bassin → [€] ; coût_m³_bassin ≈ 200 à 500 €/m³'
      ],
      retenir: 'GEPPA III · Hydromorphie · Végétation hygrophile · BNDZH · 3.3.1.0 · SFN · MAEC · Compensation · ERC · Dénitrification · Ripisylve · Tourbière'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un relevé pédologique montre des traces d\'oxydo-réduction à 35 cm de profondeur (classe GEPPA III) mais la végétation en place est une culture de maïs (0% espèces hygrophiles). La parcelle est-elle une zone humide réglementaire ?',
        solution: 'Oui. Depuis l\'arrêt Commune de Fontenoy et la modification de l\'Arrêté de 2008, un seul critère suffit si l\'autre est impossible à évaluer en raison de perturbations anthropiques. La culture de maïs a remplacé la végétation naturelle, rendant ce critère non évaluable. Le critère pédologique GEPPA III est donc suffisant pour qualifier la parcelle en zone humide. Le dossier d\'instruction devra en tenir compte.'
      },
      {
        n: '2',
        enonce: 'Une zone humide de 4,5 ha a une capacité de stockage de 2 500 m³/ha. Calculez le volume total retenu. En comparaison, quel serait le coût d\'un bassin équivalent à 350 €/m³ ?',
        solution: 'Volume retenu = 4,5 ha × 2 500 m³/ha = 11 250 m³. Coût équivalent bassin = 11 250 × 350 = 3 937 500 € soit près de 4 M€. La valeur de service de régulation hydrologique de cette ZH est donc d\'environ 875 000 €/ha pour ce seul service. Ce chiffre illustre l\'importance économique de ces milieux.'
      },
      {
        n: '3',
        enonce: 'Un projet routier détruit 0,8 ha de zone humide (classe de fonctionnalité II). La DREAL exige un coefficient compensatoire de 2. Quelle surface de ZH doit être créée ou restaurée ?',
        solution: 'Surface compensatoire = 0,8 ha × 2 = 1,6 ha. De plus, la localisation de la compensation doit être cohérente avec le fonctionnement hydraulique : si possible dans le même sous-bassin versant pour que les services écosystémiques locaux soient maintenus. Un suivi de 10 ans sera probablement demandé pour valider l\'efficacité.'
      },
      {
        n: '4',
        enonce: 'Un technicien réalise un relevé de végétation sur 25 m². Il identifie : Phragmites australis (40%), Carex acutiformis (15%), Poa trivialis (30%), Rumex crispus (10%), espèce non indicatrice (5%). Le sondage montre un horizon gris rédoxique à 55 cm. La parcelle est-elle une ZH ?',
        solution: 'Végétation : espèces hygrophiles = Phragmites australis + Carex acutiformis = 40% + 15% = 55% > 50% : critère végétation POSITIF. Pédologie : horizon gris rédoxique à 55 cm → classe GEPPA III probable : critère sol POSITIF. Les deux critères sont vérifiés : la parcelle est une zone humide réglementaire au sens de l\'Arrêté de 2008.'
      },
      {
        n: '5',
        enonce: 'Une zone humide de 2 ha de roselière reçoit une charge en azote de 180 kgN/ha/an via un ruisseau agricole. Si le taux de dénitrification est 280 kgN/ha/an, quel est le flux de dénitrification total ? La ZH peut-elle absorber toute la charge entrant ?',
        solution: 'Charge entrante = 180 × 2 = 360 kgN/an. Capacité dénitrification = 280 × 2 = 560 kgN/an. 560 > 360 : la zone humide peut théoriquement dénitrifier toute la charge azotée entrante, avec une marge de 200 kgN/an. Cependant, cela suppose une distribution uniforme de l\'eau sur toute la surface et des conditions anaérobies adéquates. En pratique, prévoir une marge de sécurité de 40%.'
      },
      {
        n: '6',
        enonce: 'Un porteur de projet propose de compenser la destruction de 1 200 m² de zone humide par la création d\'une mare de 1 800 m². La DREAL refuse et demande une révision. Expliquez pourquoi.',
        solution: '1 200 m² détruits nécessite au minimum 1 200 × 1,5 = 1 800 m² (coefficient minimum 1,5) de compensation. La surface proposée est à la limite mais le problème est fonctionnel : une mare ne compense pas une zone humide de fond de vallée. La compensation doit être de nature, fonction et localisation équivalentes. La DREAL exigera une zone humide alluviale dans le même bassin versant, pas une mare creusée sur un versant.'
      },
      {
        n: '7',
        enonce: 'Dans le cadre d\'un PTGE, une collectivité envisage de replanter 3 km de ripisylve sur les deux rives d\'un ruisseau. La largeur plantée est 8 m de chaque côté. Calculez la surface boisée créée et le linéaire de corridor.',
        solution: 'Surface boisée = 3 000 m × 2 rives × 8 m = 48 000 m² = 4,8 ha. Longueur de corridor = 3 000 m × 2 rives = 6 km de corridor écologique. Cette action améliore la connectivité pour les espèces terrestres et aquatiques. En termes de services : stabilisation de 6 km de berges, ombrage réduisant la température de l\'eau de 2-4°C, apport de matière organique.'
      },
      {
        n: '8',
        enonce: 'Un suivi de 3 ans sur une zone humide restaurée montre : an 1 = 35% espèces hygrophiles ; an 2 = 52% ; an 3 = 61%. Les sondages pédologiques montrent GEPPA III à partir de l\'an 2. Quelles conclusions peut-on tirer ?',
        solution: 'Trajectoire de restauration positive : le critère végétation est atteint en an 2 (> 50%) et maintenu en an 3 (61%). Le critère pédologique est satisfait dès an 2 également. La zone humide est donc fonctionnelle au sens réglementaire à partir de l\'an 2. En an 3, avec 61% d\'espèces hygrophiles, on peut estimer que les fonctions d\'épuration (dénitrification) et de régulation hydrologique sont en cours de consolidation. Le suivi à 5 et 10 ans est recommandé pour confirmer la durabilité.'
      }
    ]
  },

  'GEMEAU-102': {
    id: 'GEMEAU-102',
    titre: 'Restauration des cours d\'eau et continuité écologique',
    fiche: {
      intro: 'La restauration des cours d\'eau est devenue une priorité de la politique de l\'eau en France depuis la LEMA 2006 et le développement des compétences GEMAPI. Des centaines de chantiers de reméandrement, d\'arasement de seuils et de reconnexion de bras morts sont menés chaque année. Ces travaux exigent une maîtrise technique et réglementaire fine pour être efficaces et durables.',
      sections: [
        {
          titre: '1. Principes de la restauration hydromorphologique',
          texte: 'La restauration d\'un cours d\'eau vise à améliorer le fonctionnement morphologique, hydrologique et biologique d\'un tronçon dégradé, en s\'inspirant d\'un état de référence (cours d\'eau naturel du même type dans la même région, ou état historique). Elle repose sur trois principes fondamentaux : la dynamique naturelle (laisser la rivière se façonner d\'elle-même plutôt que de la modéliser avec précision), la continuité écologique (rétablir le transit des sédiments et la libre circulation des espèces), et la gradualité (agir par étapes progressives et évaluer les effets avant de poursuivre).\n\nLa démarche type comprend : (1) diagnostic initial (IAM, biologie, usages) ; (2) définition des objectifs et des scénarios de restauration ; (3) concertation avec les acteurs (riverains, agriculteurs, pêcheurs, communes) ; (4) dossier réglementaire (DIG ou dossier loi sur l\'eau) ; (5) maîtrise foncière (acquisition ou convention de passage) ; (6) chantier ; (7) suivi post-travaux.\n\nLes opérations sont financées par les Agences de l\'Eau (taux d\'aide 50 à 80% selon les bassins et les priorités), les Régions, les Départements et parfois l\'Europe (FEDER, FEADER). Le maître d\'ouvrage est le plus souvent un EPTB, un syndicat de rivière ou une commune compétente GEMAPI.',
          sous_sections: []
        },
        {
          titre: '2. Techniques de restauration morphologique',
          texte: 'Le reméandrement consiste à recreuser un tracé sinueux pour remplacer un tronçon canalisé rectiligne. L\'ancien chenal est comblé ou laissé en bras mort. Cette technique est particulièrement efficace pour ralentir les vitesses d\'écoulement, diversifier les faciès hydrauliques et recréer des abris pour la faune. Le dimensionnement s\'appuie sur les relations empiriques entre la largeur plein bord et la longueur d\'onde des méandres (largeur d\'onde ≈ 10 à 12 fois la largeur plein bord).\n\nLa reconnexion d\'un bras mort consiste à déblayer le méandre abandonné pour le reconnecter au cours principal. Elle recréé des zones lentiques (courant lent ou nul) essentielles pour la fraie de certaines espèces (brochet, perche) et l\'habitat larvaire. Les travaux consistent en une trouée dans le remblai isolant le bras mort et éventuellement un léger recalibrage pour rétablir un écoulement lors des hautes eaux.\n\nL\'arasement ou l\'effacement de seuils est la technique la plus utilisée pour rétablir la continuité sédimentaire et piscicole. Un seuil arasé est complètement supprimé ; un seuil effacé n\'est que partiellement détruit pour conserver un usage (prise d\'eau, plan d\'eau). L\'arasement doit être accompagné d\'un plan de gestion des sédiments stockés en amont (souvent pollués en contexte urbain : analyser avant tout). La pente se réajuste progressivement sur 5 à 20 ans.',
          sous_sections: []
        },
        {
          titre: '3. La continuité écologique : réglementation et passes à poissons',
          texte: 'La continuité écologique des cours d\'eau est un objectif de la DCE et un principe de la Loi sur l\'Eau. En France, l\'article L. 214-17 du Code de l\'environnement classe les cours d\'eau en deux listes : Liste 1 (L1, axe à forte valeur piscicole) où aucun nouvel obstacle ne peut être créé ; Liste 2 (L2) où les obstacles existants doivent être équipés ou arasés dans un délai de 5 ans après publication de la liste.\n\nLes ouvrages classés L2 doivent permettre la libre circulation des espèces piscicoles et la migration des sédiments (arrêté de 2012). Les solutions techniques sont : passes à poissons (passe à bassins, passe à fentes, rampe en enrochements), rivières de contournement, ascenseurs à poissons pour les grands ouvrages. Le franchissement est évalué par suivi radiopistage ou pièges à poissons (cage de comptage) pour vérifier l\'efficacité.\n\nUne passe à bassins standard est dimensionnée pour une chute d\'eau de 15 à 30 cm par bassin, avec une largeur minimale de 1,5 m et un débit de dimensionnement d\'environ 1/10e du débit moyen du cours d\'eau. La pente de la passe est de 10 à 15% selon les espèces cibles.',
          sous_sections: []
        },
        {
          titre: '4. Suivi post-travaux et évaluation',
          texte: 'Le suivi post-travaux est indispensable pour vérifier l\'efficacité des actions et adapter les interventions futures. Il comprend généralement : (a) suivi hydromorphologique annuel (photos fixes aux mêmes points, levés topographiques, granulométrie) pendant 5 ans ; (b) suivi biologique (IBD et IBGN à T+1, T+3, T+5 sur stations amont/aval et référence) ; (c) suivi piscicole (pêche électrique T+1 et T+3) ; (d) suivi de la végétation rivulaire (état de la ripisylve, espèces indicatrices).\n\nLes résultats sont analysés par rapport aux objectifs fixés et à l\'état initial. Un bilan à 5 ans est généralement présenté à l\'Agence de l\'Eau pour justifier le paiement des dernières tranches de subvention et orienter les priorités du prochain programme d\'actions. La gestion adaptative permet d\'ajuster les mesures si les résultats attendus ne sont pas atteints.',
          sous_sections: []
        }
      ],
      points: [
        'La restauration s\'inspire d\'un état de référence (cours d\'eau naturel du même type)',
        'Liste 1 DCE : aucun nouvel obstacle ; Liste 2 : mise en conformité obligatoire sous 5 ans',
        'L\'arasement d\'un seuil libère la continuité sédimentaire et piscicole',
        'La longueur d\'onde des méandres ≈ 10-12 × largeur plein bord',
        'Une passe à bassins a une chute de 15-30 cm/bassin et une pente de 10-15%',
        'Le suivi post-travaux (IBD, IBGN, pêche électrique) s\'étend sur 5 ans minimum',
        'La DIG (Déclaration d\'Intérêt Général) est la procédure réglementaire pour les travaux rivière',
        'Le maître d\'ouvrage des restaurations est souvent un EPTB ou syndicat GEMAPI',
        'Les Agences de l\'Eau financent 50 à 80% des opérations de restauration',
        'La reconnexion d\'un bras mort recrée des habitats lentiques pour le brochet et la perche',
        'Les sédiments piégés derrière les seuils doivent être analysés avant arasement (pollution)',
        'La gestion adaptative permet d\'ajuster les actions si les résultats ne sont pas atteints'
      ],
      formules: [
        'Longueur d\'onde des méandres : L_onde ≈ 11 × B → [m] ; B = largeur plein bord [m]',
        'Chute par bassin passe à poissons : Δh = H_ouvrage / n_bassins → [m] ; Δh recommandé = 0,15 à 0,30 m',
        'Débit passe à poissons : Q_passe ≈ 0,1 × Q_moy → [m³/s] ; Q_moy = débit interannuel du cours d\'eau',
        'Pente passe à bassins : i = Δh / L_bassin → [m/m] ; i recommandé = 10 à 15%'
      ],
      retenir: 'Reméandrement · Bras mort · Arasement · Continuité écologique · Liste L1/L2 · DIG · EPTB · GEMAPI · IBD · IBGN · Passe à poissons · Gestion adaptative'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un cours d\'eau a une largeur plein bord de 8 m. Estimez la longueur d\'onde naturelle des méandres et la longueur minimale d\'un tronçon à remeandrer pour obtenir 2 méandres complets.',
        solution: 'L_onde = 11 × 8 = 88 m. Pour 2 méandres complets = 2 × 88 = 176 m de longueur d\'onde. En pratique, un tronçon reméandré doit représenter au minimum 5 à 10 longueurs d\'onde pour que la dynamique naturelle s\'installe. Recommandation : prévoir 500 à 900 m de tronçon.'
      },
      {
        n: '2',
        enonce: 'Un seuil de 1,6 m de hauteur doit être équipé d\'une passe à bassins. Chute par bassin = 0,20 m. Pente 12%. Calculez le nombre de bassins et la longueur de la passe.',
        solution: 'Nombre de bassins = H/Δh = 1,6/0,20 = 8 bassins. Longueur d\'un bassin = Δh/pente = 0,20/0,12 = 1,67 m. Longueur totale passe = 8 × 1,67 = 13,3 m. En ajoutant les murs de tête (amont et aval), la passe fait environ 15 à 16 m. Le débit dimensionnant sera ≈ 0,1 × Q_moy du cours d\'eau.'
      },
      {
        n: '3',
        enonce: 'Avant l\'arasement d\'un seuil, des analyses de sédiments révèlent : Cd = 8,5 mg/kg, PCB = 1,2 mg/kg. Les seuils réglementaires SETRA sont Cd ≤ 5 mg/kg et PCB ≤ 0,5 mg/kg. Que décidez-vous ?',
        solution: 'Les deux paramètres dépassent les seuils : Cd (8,5 vs 5) et PCB (1,2 vs 0,5). Ces sédiments sont pollués et ne peuvent pas être remis en suspension librement. L\'arasement nécessite soit une gestion confinée des sédiments (excavation et traitement en filière déchet), soit une remobilisation progressive contrôlée après accord de la DREAL. L\'arasement brutal est interdit. Un plan de gestion des sédiments impacte fortement le coût (peut × 3 à 5 le coût total).'
      },
      {
        n: '4',
        enonce: 'Un suivi IBD donne les résultats suivants : état initial = 11,5/20 ; T+1 = 13,2 ; T+3 = 15,8. Les seuils état moyen/bon pour ce type de cours d\'eau sont 12/20 et 16/20 (bon/très bon). Commentez la trajectoire.',
        solution: 'État initial : 11,5 = état médiocre/moyen (< 12). T+1 : 13,2 = état moyen (entre 12 et 16). T+3 : 15,8 = très proche du seuil bon/très bon. Trajectoire positive : amélioration de +4,3 points en 3 ans. La restauration est efficace. À T+5, on peut espérer atteindre l\'état bon (16/20). C\'est un résultat à valoriser pour l\'Agence de l\'Eau et le rapport de suivi.'
      },
      {
        n: '5',
        enonce: 'Un EPTB souhaite reconnecter un bras mort de 850 m de long. L\'enquête révèle que 65% du bras mort a une profondeur résiduelle de 0,8 m (eau stagnante) et 35% est complètement comblé (profondeur 0). Estimez le volume à curer pour rétablir une profondeur de 1,2 m sur tout le bras.',
        solution: 'Largeur moyenne supposée du bras mort = 6 m (estimé). Zone 1 (65% = 552 m) : comblement à curer = 1,2 - 0,8 = 0,4 m ; V1 = 552 × 6 × 0,4 = 1 325 m³. Zone 2 (35% = 298 m) : comblement total = 1,2 - 0 = 1,2 m ; V2 = 298 × 6 × 1,2 = 2 145 m³. Volume total = 1 325 + 2 145 = 3 470 m³ à excaver. Ces sédiments doivent être analysés avant toute décision d\'évacuation.'
      },
      {
        n: '6',
        enonce: 'Un cours d\'eau classé L2 a 12 ouvrages à mettre en conformité sous 5 ans. 5 seront arasés (coût moyen 30 000 €), 5 équipés d\'une passe (coût moyen 80 000 €), 2 gérés autrement (50 000 €). Estimez le coût total et la part Agence de l\'Eau à 60%.',
        solution: 'Coût arasements = 5 × 30 000 = 150 000 €. Coût passes = 5 × 80 000 = 400 000 €. Coût autres = 2 × 50 000 = 100 000 €. Coût total = 650 000 €. Aide Agence de l\'Eau (60%) = 390 000 €. Reste à charge maître d\'ouvrage = 260 000 €. Ce programme pluriannuel sera inscrit au contrat de rivière ou au programme d\'actions du SDAGE.'
      },
      {
        n: '7',
        enonce: 'Lors de la DIG d\'un projet de restauration, 3 riverains s\'y opposent. Quels sont leurs droits et les étapes de la procédure ?',
        solution: 'La DIG (Déclaration d\'Intérêt Général) est instruite par la Préfecture. Elle comprend : une enquête publique pendant laquelle tout riverain peut déposer des observations. Si les travaux concernent des propriétés privées, le maître d\'ouvrage doit obtenir des conventions de passage ou de travaux (amiable) ; en cas de refus, une servitude peut être imposée par le Préfet si l\'intérêt général est reconnu. L\'opposition de 3 riverains est normale : le commissaire enquêteur formule un avis (favorable/réservé/défavorable) ; le Préfet décide. Un avis défavorable ne bloque pas le projet mais renforce les arguments des opposants.'
      },
      {
        n: '8',
        enonce: 'Un reméandrement a créé un chenal de 2 480 m pour remplacer un canal rectiligne de 1 750 m. Calculez la sinuosité atteinte. Est-ce conforme à l\'objectif (sinuosité cible 1,4) ?',
        solution: 'S = 2 480 / 1 750 = 1,42. L\'objectif de sinuosité 1,4 est atteint (1,42 > 1,4). La restauration a bien créé un tracé méandriforme. En pratique, la sinuosité peut encore évoluer naturellement si les berges ne sont pas trop rigides et si des méandres se développent d\'eux-mêmes. Le suivi topographique annuel permettra de mesurer cette évolution dynamique.'
      }
    ]
  },

  'GEMEAU-103': {
    id: 'GEMEAU-103',
    titre: 'Prévention des inondations et réduction de la vulnérabilité',
    fiche: {
      intro: 'Les inondations sont le premier risque naturel en France, touchant 17 millions d\'habitants et causant en moyenne 650 M€ de dommages annuels (données CGDD 2020). La gestion du risque inondation repose sur une combinaison de mesures structurelles (ouvrages) et non structurelles (réglementation, information, alerte) dans un cadre réglementaire précis articulé autour des PPRI et des PAPI.',
      sections: [
        {
          titre: '1. Cartographie des aléas et analyse du risque inondation',
          texte: 'L\'aléa inondation est caractérisé par sa fréquence (période de retour T en années), sa hauteur d\'eau et sa vitesse d\'écoulement. Les crues de référence réglementaires sont la crue centennale (T=100 ans) ou la plus forte crue connue historiquement si elle est plus importante. La cartographie de l\'aléa est réalisée par modélisation hydraulique (logiciels HEC-RAS, MIKE FLOOD, TUFLOW) à partir des données de débit (Banque Hydro, analyses fréquentielles) et de topographie (MNT Lidar).\n\nL\'aléa est croisé avec les enjeux (population, activités économiques, réseaux, patrimoine) pour définir le risque. Deux documents réglementaires cartographient ce risque : (1) les Territoires à Risque Important d\'Inondation (TRI), définis pour les 122 zones les plus exposées de France en application de la Directive Inondations (2007/60/CE), avec des cartographies pour T=10 (fréquent), T=100 (moyen), T=1000 (exceptionnel) ; (2) les Atlas des Zones Inondables (AZI), documents d\'information non réglementaires produits par les DREAL.\n\nL\'analyse fréquentielle des débits extrêmes utilise des lois statistiques (Gumbel, GEV, Pearson III) pour estimer les débits de retour à partir des chroniques de jaugeage. En France, la méthode SHYREG (régionalisation des crues) permet d\'estimer les débits de crue même en l\'absence de station hydrométrique.',
          sous_sections: []
        },
        {
          titre: '2. Le Plan de Prévention des Risques Inondation (PPRI)',
          texte: 'Le PPRI est le principal outil réglementaire de prévention du risque inondation en France. Prescrit par le Préfet et élaboré par les services de l\'État (DREAL, DDT), il réglemente l\'utilisation du sol dans les zones inondables. Il comprend : (a) une carte de zonage réglementaire avec des zones rouge, bleu foncé et bleu (parfois orange) ; (b) un règlement opposable au tiers.\n\nZone rouge : aléa fort et/ou enjeux sensibles (ICPE, axes d\'évacuation). Toute construction nouvelle est interdite sauf exceptions limitées (équipements d\'intérêt général, extensions légères < 20 m² de l\'existant). Zone bleue : aléa moyen à faible. Les constructions sont autorisées sous conditions (cote plancher au-dessus de la crue de référence + 30 cm, ventilation des parties inondables, absence de cave). Zone blanche : zone non inondable ou hors PPRI.\n\nLe PPRI s\'applique directement aux permis de construire et est annexé aux PLU (Plan Local d\'Urbanisme). En cas de non-respect, la commune peut voir sa responsabilité engagée. La carte des zones inondables est disponible sur Géorisques (georisques.gouv.fr). Plus de 10 000 communes disposent d\'un PPRI approuvé en France.',
          sous_sections: []
        },
        {
          titre: '3. Mesures structurelles de protection contre les crues',
          texte: 'Les mesures structurelles visent à réduire l\'aléa par des aménagements physiques. On distingue : (a) les digues et levées : ouvrages de remblai en terre (ou maçonnerie) le long du cours d\'eau, classés selon leur hauteur et les enjeux protégés. Les digues de classe A (enjeux > 50 000 habitants) sont soumises à une réglementation stricte (étude de danger, plan de surveillance et d\'alerte). La loi du 30 décembre 2017 a transféré la gestion des digues aux EPTB et syndicats compétents GEMAPI. (b) Les bassins d\'écrêtement : réservoirs créés à l\'amont pour stocker la pointe de crue et la restituer progressivement après passage de la crue. Leur efficacité dépend du rapport entre le volume stocké et le volume de la crue (objectif : écrêter le débit de pointe de 20 à 40%). (c) Les zones d\'expansion des crues (ZEC) : espaces naturels maintenus libres d\'urbanisation qui stockent les crues. Moins coûteux que les digues et aux multiples co-bénéfices écologiques. (d) Le recalibrage du lit : élargissement du chenal pour augmenter la section d\'écoulement. Technique controversée car elle transfert l\'aléa vers l\'aval.',
          sous_sections: []
        },
        {
          titre: '4. Mesures non structurelles et gestion de crise',
          texte: 'Les mesures non structurelles sont souvent plus efficaces à long terme en termes de coût-bénéfice. Elles comprennent : (a) La réglementation d\'urbanisme (PPRI) qui limite l\'exposition future des biens et personnes. (b) L\'information préventive : DICRIM (Document d\'Information Communal sur les Risques Majeurs), plan ORSEC inondation, repères de crue légaux en zone inondable. (c) La surveillance et l\'alerte : le réseau Vigicrues (VigicruesFlash pour les cours d\'eau non surveillés) diffuse des bulletins de prévision 24-48h avant les crues majeures. Les collectivités peuvent mettre en place un SDCI (Service de Contrôle des Crues Intercommunal). (d) Les PAPI (Programmes d\'Actions de Prévention des Inondations) contractualisent les actions entre les collectivités et l\'État : 7 axes d\'action (connaissance, surveillance, alerte, PPRI, réduction vulnérabilité bâti existant, ralentissement dynamique, gestion de crise). L\'Agence de l\'Eau et l\'État financent à 40-50% les PAPI labellisés par la Commission Mixte Inondation.',
          sous_sections: []
        }
      ],
      points: [
        'La crue centennale T=100 ans est la crue de référence réglementaire du PPRI',
        'Le PPRI définit zones rouges (construction interdite) et bleues (conditions strictes)',
        'Zone rouge PPRI : toute construction nouvelle interdite sauf exceptions < 20 m²',
        'Les digues classées A protègent plus de 50 000 habitants et sont soumises à étude de danger',
        'Un bassin d\'écrêtement stocke la pointe de crue pour réduire le débit de pointe de 20-40%',
        'Vigicrues fournit des prévisions 24-48h avant les grandes crues',
        'Le PAPI labellise les programmes pluriannuels de prévention inondation',
        'Le DICRIM informe les habitants des risques et consignes dans chaque commune',
        'La loi GEMAPI 2017 a transféré la gestion des digues aux EPTB/syndicats',
        'Les TRI (122 en France) cartographient les crues T=10, T=100 et T=1000',
        'Le recalibrage du lit transfère l\'aléa vers l\'aval : technique controversée',
        'Les ZEC (Zones d\'Expansion des Crues) sont moins coûteuses que les digues'
      ],
      formules: [
        'Volume bassin d\'écrêtement : V_écrêt = (Q_amont - Q_aval_cible) × Δt → [m³] ; Δt = durée de la pointe de crue [s]',
        'Taux d\'écrêtement : TE = (Q_pointe - Q_sortie) / Q_pointe × 100 → [%]',
        'Revanche digue : R = H_crue_T100 + 0,5 m (min) → [m] ; hauteur au-dessus de la ligne d\'eau centennale',
        'Cote plancher PPRI : Z_plancher = Z_crue_ref + 0,30 m → [m NGF] ; cote minimale du plancher habitable'
      ],
      retenir: 'PPRI · Zone rouge/bleue · T=100 · PAPI · DICRIM · Vigicrues · Digue · Bassin d\'écrêtement · ZEC · GEMAPI · TRI · Directive Inondations'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Le débit de pointe entrant dans un bassin d\'écrêtement est 85 m³/s. Le débit de sortie cible est 55 m³/s. La durée de la pointe de crue est 3 heures. Calculez le volume à stocker.',
        solution: 'V = (Q_entrée - Q_sortie) × Δt = (85 - 55) × 3 × 3 600 = 30 × 10 800 = 324 000 m³. Le bassin doit pouvoir stocker 324 000 m³. Ce volume correspond à un bassin de 16,2 ha pour une profondeur moyenne de 2 m. Le taux d\'écrêtement = (85-55)/85 × 100 = 35%, ce qui est un objectif réaliste.'
      },
      {
        n: '2',
        enonce: 'Une digue protège une zone habitée. La cote de la ligne d\'eau centennale est 245,80 m NGF. Quelle est la cote de crête minimale de la digue (revanche min = 0,5 m) ? Quelle est la cote plancher minimale des constructions en zone bleue adjacente ?',
        solution: 'Cote crête digue = 245,80 + 0,50 = 246,30 m NGF. Cote plancher PPRI zone bleue = 245,80 + 0,30 = 246,10 m NGF. Toute nouvelle construction en zone bleue doit avoir son plancher habitable à 246,10 m NGF minimum. En pratique, les maçons locaux connaissent ces cotes inscrites dans le règlement PPRI et les permis de construire.'
      },
      {
        n: '3',
        enonce: 'Un enjeu (usine) est en zone inondable à T=100 ans (hauteur d\'eau prévue 0,9 m). Le dirigeant demande si une digue de protection est possible. Quels arguments donner pour et contre ?',
        solution: 'Pour : protection directe de l\'enjeu, maintien de l\'activité économique, possible si l\'usine crée de l\'emploi local. Contre : une digue classe A nécessite une étude de danger coûteuse (> 100 000 €), une surveillance permanente et un plan d\'alerte (PFMS). Le risque de rupture doit être considéré (inondation soudaine plus dangereuse). De plus, la digue reporte le volume d\'eau sur les zones adjacentes, aggravant les niveaux d\'eau pour les voisins. Alternatives moins invasives : rehaussement du plancher, batardeaux amovibles, adaptation du process pour tolérer l\'inondation.'
      },
      {
        n: '4',
        enonce: 'Une analyse de fréquence Gumbel sur 45 ans de données donne Q̄ = 42 m³/s et σ = 18 m³/s. Estimez Q10 et Q100 (Gumbel : Q_T = Q̄ + K_T × σ, K10 = 1,305, K100 = 3,135).',
        solution: 'Q10 = 42 + 1,305 × 18 = 42 + 23,5 = 65,5 m³/s. Q100 = 42 + 3,135 × 18 = 42 + 56,4 = 98,4 m³/s. Ces débits servent à calibrer les modèles hydrauliques et à définir les zones d\'aléa dans le PPRI. Q10 = aléa moyen (cartographie TRI "fréquent") ; Q100 = crue de référence réglementaire. Q1000 nécessiterait d\'extrapoler encore la loi (à faire avec précaution sur 45 ans de données).'
      },
      {
        n: '5',
        enonce: 'La crue Xynthia de 2010 a causé 53 morts en Vendée dans des zones construites depuis les années 1980. Quelles leçons réglementaires en a-t-on tirées ?',
        solution: 'Xynthia a démontré les limites des PPRI anciens (mal cartographiés) et l\'urbanisation excessive en zone inondable. Conséquences : révision accélérée des PPRI côtiers, création du dispositif "quartiers en bandes rouges" (zones à risque vital exigeant le rachat amiable de 1 500 maisons par l\'État pour 400 M€), renforcement des contrôles préfectoraux sur la constructibilité en zones basses, introduction du principe de vulnérabilité individuelle dans les PPRI, développement des Plans Communaux de Sauvegarde (PCS) obligatoires pour les communes dotées d\'un PPRI.'
      },
      {
        n: '6',
        enonce: 'Un PAPI propose 5 actions sur 6 ans : A = 2 M€ (digue), B = 0,5 M€ (ZEC), C = 0,3 M€ (PPRI révision), D = 0,8 M€ (sensibilisation), E = 0,4 M€ (réduction vulnérabilité bâti). Taux Agence 40%. Calculez la part restant à la charge des collectivités.',
        solution: 'Total PAPI = 2 + 0,5 + 0,3 + 0,8 + 0,4 = 4,0 M€. Aide Agence = 4,0 × 0,40 = 1,6 M€. Reste collectivités = 4,0 - 1,6 = 2,4 M€ (60%). En pratique, les Régions et Départements peuvent co-financer une partie. Rappel : une mesure non structurelle comme l\'action B (ZEC, 0,5 M€) apporte souvent plus de bénéfices à long terme que la digue (A, 2 M€) si l\'on intègre les co-bénéfices écologiques et la durabilité.'
      },
      {
        n: '7',
        enonce: 'Un propriétaire en zone bleue du PPRI veut agrandir sa maison de 45 m². Le règlement PPRI autorise les extensions de 20% de la surface existante dans la limite de 40 m². Sa maison fait 180 m². Peut-il construire ?',
        solution: '20% de 180 m² = 36 m². La limite est min(20%, 40 m²) = min(36, 40) = 36 m². Or le projet est de 45 m² > 36 m² : l\'extension est refusée en l\'état. Le propriétaire peut soit réduire son projet à 36 m², soit démontrer que l\'extension est au-dessus de la cote de référence (plancher surélevé) et qu\'elle n\'augmente pas la vulnérabilité. Le PLU et le règlement PPRI s\'appliquent conjointement.'
      },
      {
        n: '8',
        enonce: 'Un gestionnaire compare deux stratégies de protection : digue (coût 3,5 M€, durée vie 50 ans, maintenance 50 000 €/an) vs bassin d\'écrêtement (coût 2,2 M€, durée vie 50 ans, maintenance 25 000 €/an). Les dommages évités estimés sont 500 000 €/an pour les deux. Calculez les coûts totaux sur 50 ans et le rapport bénéfice-coût.',
        solution: 'Digue : coût total = 3 500 000 + (50 000 × 50) = 3 500 000 + 2 500 000 = 6 000 000 €. Bénéfices = 500 000 × 50 = 25 000 000 €. B/C = 25/6 = 4,17. Bassin : coût total = 2 200 000 + (25 000 × 50) = 2 200 000 + 1 250 000 = 3 450 000 €. Bénéfices = 25 000 000 €. B/C = 25/3,45 = 7,25. Le bassin d\'écrêtement est économiquement plus avantageux (B/C plus élevé). De plus, ses co-bénéfices écologiques (ZH, biodiversité) ne sont pas comptabilisés ici.'
      }
    ]
  },

  'GEMEAU-104': {
    id: 'GEMEAU-104',
    titre: 'Évaluation des opérations et gestion adaptative',
    fiche: {
      intro: 'L\'évaluation des opérations de restauration ou de gestion des milieux aquatiques est une exigence croissante des financeurs publics et un outil indispensable pour améliorer les pratiques. Elle permet de vérifier l\'atteinte des objectifs, de justifier les dépenses publiques et de nourrir le retour d\'expérience. La gestion adaptative, inspirée des approches scientifiques, est la clé d\'une gestion durable des milieux aquatiques.',
      sections: [
        {
          titre: '1. Conception d\'un protocole de suivi',
          texte: 'Un protocole de suivi est conçu avant les travaux pour être opérationnel dès le début de l\'opération. Il définit : (a) les paramètres à suivre (choix justifié en lien avec les objectifs) ; (b) les méthodes standardisées de mesure (pour garantir la comparabilité dans le temps) ; (c) les stations de mesure (amont référence, aval intervention, stations témoins) ; (d) le calendrier et la fréquence (annuel, saisonnier) ; (e) les responsables et le budget.\n\nLes indicateurs de suivi hydromorphologique incluent : la topographie du fond (bathymétrie, profils en travers, photographies fixes géolocalisées), la granulométrie (comptage Wolman), les faciès d\'écoulement (cartographie par faciès : rapide, radier, plat courant, zone lentique). Les indicateurs biologiques standards sont l\'IBD (indice diatomées, NF T90-354), l\'IBGN (indice macroinvertébrés, NF T90-350), l\'IPR (indice poissons rivière, NF T90-344), et l\'IBMR (indice macrophytes).\n\nLe design du suivi doit distinguer l\'effet des travaux de la variabilité naturelle (influence de la pluviométrie sur les indices biologiques). C\'est pourquoi les stations témoins (non restaurées, de même type) sont indispensables pour déconvoluer les effets.',
          sous_sections: []
        },
        {
          titre: '2. Gestion adaptative : principes et mise en œuvre',
          texte: 'La gestion adaptative (adaptive management) est une approche structurée de prise de décision dans un contexte d\'incertitude. Elle consiste à formuler des hypothèses explicites (si on fait X, on observe Y), à les tester par le suivi, puis à ajuster les actions en conséquence. Cette approche, bien rodée en écologie appliquée nord-américaine, est maintenant intégrée dans les programmes GEMAPI.\n\nLe cycle de gestion adaptative comprend : (1) Évaluation de l\'état initial (baseline) ; (2) Définition des objectifs et des modèles conceptuels (comment l\'écosystème fonctionne-t-il ?) ; (3) Plan d\'actions avec indicateurs de succès explicites ; (4) Mise en œuvre des actions ; (5) Suivi et collecte des données ; (6) Analyse et comparaison aux objectifs ; (7) Décision : continuer, ajuster ou abandonner. Retour à (1) si bilan initial à reconsidérer.\n\nExemple pratique : une passe à poissons est installée (objectif : 200 truites/an franchissent l\'ouvrage). Le suivi à T+1 ne comptabilise que 40 individus. La gestion adaptative engage une investigation (problème d\'attractivité ? débit insuffisant ? blocage comportemental ?) et une correction ciblée (augmentation du débit de la passe, ajout de rugosités).',
          sous_sections: []
        },
        {
          titre: '3. Bilan financier, social et communication',
          texte: 'L\'évaluation ne se limite pas aux indicateurs écologiques. Elle doit intégrer : (a) le bilan financier (coût réel vs prévisionnel, coût par unité d\'amélioration, ex : coût par km de cours d\'eau en bon état) ; (b) le bilan social (usages recréatifs, perception des riverains, conflits résolus ou générés) ; (c) le bilan en termes de services écosystémiques (valeur économique des fonctions restaurées).\n\nLa communication des résultats est une partie intégrante de l\'opération. Un rapport de suivi clair, avec des photos avant/après, des graphiques d\'évolution des indices biologiques et un bilan des dépenses, est attendu par l\'Agence de l\'Eau et les élus locaux. Des supports de vulgarisation (plaquettes, panneaux pédagogiques sur site, réunions publiques) permettent de montrer aux riverains les effets tangibles de l\'investissement public.\n\nLe retour d\'expérience (REX) est formalisé dans des bases de données nationales (REFERENTIEL COURS D\'EAU de l\'OFB, BD GEMAPI). Il contribue à l\'amélioration des méthodes et au transfert de connaissances entre gestionnaires.',
          sous_sections: []
        },
        {
          titre: '4. Rapport de suivi GEMAPI à 3 et 6 ans',
          texte: 'Les Agences de l\'Eau exigent généralement un rapport de suivi à 3 ans (bilan intermédiaire) et à 6 ans (bilan final) pour les opérations de restauration subventionnées. Ce rapport doit présenter : (1) l\'état initial des paramètres suivis (rappel des valeurs baseline) ; (2) les résultats des campagnes de suivi (tableaux, graphiques, cartographies) ; (3) l\'analyse comparative par rapport aux objectifs et à l\'état de référence ; (4) l\'évaluation des co-bénéfices observés ; (5) les difficultés rencontrées et les solutions apportées ; (6) les recommandations pour la suite (entretien, surveillance, nouvelles actions).\n\nUn bilan financier détaillé (coûts réels ventilés par poste) est joint au rapport. L\'Agence peut demander un remboursement partiel si les objectifs ne sont pas atteints malgré des travaux conformes aux prévisions. La transparence et la rigueur du rapport de suivi sont donc essentielles pour la pérennité du partenariat financier.',
          sous_sections: []
        }
      ],
      points: [
        'Le protocole de suivi est défini AVANT les travaux pour avoir une baseline solide',
        'IBD (diatomées), IBGN (macroinvertébrés), IPR (poissons), IBMR (macrophytes) sont les 4 indices biologiques courants',
        'Les stations témoins permettent de déconvoluer l\'effet des travaux de la variabilité naturelle',
        'La gestion adaptative ajuste les actions en fonction des résultats du suivi',
        'Un rapport de suivi GEMAPI est attendu à T+3 et T+6 par l\'Agence de l\'Eau',
        'L\'évaluation doit intégrer bilan écologique, financier ET social',
        'Le REX (retour d\'expérience) est formalisé dans la BD OFB/GEMAPI',
        'Une passe à poissons inefficace doit être diagnostiquée et corrigée (gestion adaptative)',
        'La photo-interprétation séries chronologiques (depuis 1950 Géoportail) documente les changements',
        'Le coût par km de cours d\'eau restauré est un indicateur d\'efficacité',
        'La communication (plaquettes, panneaux) valorise l\'investissement auprès du grand public',
        'L\'Agence peut demander remboursement partiel si objectifs non atteints'
      ],
      formules: [
        'Taux d\'atteinte des objectifs : T_obj = (Valeur_T5 - Valeur_T0) / (Valeur_cible - Valeur_T0) × 100 → [%]',
        'Coût par km restauré : C_km = Coût_total / L_restaurée → [€/km]',
        'Efficience : Eff = Bénéfice_écologique / Coût_total → [indice/€] ; bénéfice = gain d\'IBD × longueur',
        'Indice de tendance : IT = (V_T5 - V_T0) / (V_T0 × 5) × 100 → [%/an] ; vitesse d\'amélioration annuelle'
      ],
      retenir: 'Baseline · IBD · IBGN · IPR · Gestion adaptative · REX · T+3/T+6 · Stations témoins · Photo fixe · Rapport suivi · Agence de l\'Eau · Co-bénéfices'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Un suivi IBD donne : T0 = 11,2 ; T+3 = 13,8 ; T+5 = 15,1 (sur 20). L\'objectif fixé était d\'atteindre 14,5 à T+5. Calculez le taux d\'atteinte de l\'objectif.',
        solution: 'T_obj = (15,1 - 11,2) / (14,5 - 11,2) × 100 = 3,9 / 3,3 × 100 = 118%. L\'objectif est dépassé de 18% (valeur atteinte 15,1 > objectif 14,5). C\'est un excellent résultat. Dans le rapport, cela sera présenté comme un succès et justifiera le maintien du taux d\'aide de l\'Agence.'
      },
      {
        n: '2',
        enonce: 'Une passe à poissons est équipée d\'un compteur optique. Les données T+1 montrent 45 franchissements de truite (objectif : 150). L\'analyse révèle que le débit de la passe est 50 L/s en été (min recommandé : 100 L/s). Quelle action de gestion adaptative proposez-vous ?',
        solution: 'Le sous-débit est la cause probable : avec 50 L/s au lieu de 100 L/s, le signal hydraulique d\'attraction est insuffisant et les vitesses dans les bassins sont trop faibles. Gestion adaptative : modifier le réglage du seuil d\'alimentation de la passe pour augmenter le débit à 100-120 L/s, puis re-mesurer à T+2. Si le problème persiste malgré le débit correct, investiguer : orientation de l\'entrée, substrat dans les bassins, ombrage. La décision de corriger doit être documentée avec la valeur mesurée, la cause identifiée et l\'action corrective.'
      },
      {
        n: '3',
        enonce: 'Un programme de restauration sur 4 km de rivière a coûté 286 000 €. Le suivi montre une amélioration de 3,5 points d\'IBD sur l\'ensemble du tronçon restauré. Calculez le coût par km restauré et la progression IBD par km.',
        solution: 'Coût par km = 286 000 / 4 = 71 500 €/km. Gain IBD par km = 3,5 / 4 = 0,875 points/km. Coût par point d\'IBD gagné = 286 000 / 3,5 = 81 700 €/point. Ces ratios servent à comparer l\'efficience de différentes opérations dans les bases de données REX.'
      },
      {
        n: '4',
        enonce: 'Un bassin versant a 3 stations de suivi (amont référence, site restauré, aval non restauré). Une sécheresse exceptionnelle en an 3 fait chuter l\'IBD de toutes les stations de ~2 points. Comment interpréter l\'effet réel des travaux ?',
        solution: 'La station amont référence chute de 2,1 points (effet sécheresse). Le site restauré chute de 1,8 points. L\'aval non restauré chute de 2,3 points. L\'effet sécheresse "naturel" est estimé à environ -2 points. En soustrayant cet effet : gain réel restauration ≈ +0,3 points (chute moins forte que la référence). Sans stations témoins, on conclurait faussement à une dégradation post-travaux. C\'est la valeur fondamentale des stations de contrôle.'
      },
      {
        n: '5',
        enonce: 'Un rapport de suivi à T+3 d\'une opération GEMAPI doit justifier le 2e versement (40% du total de 180 000 €). Les objectifs étaient : IBD > 14/20, IPR < 50% (bon état), sinuosité > 1,3. Les résultats sont : IBD = 14,2, IPR = 55% (état moyen), sinuosité = 1,38. L\'Agence accorde-t-elle le versement ?',
        solution: 'IBD = 14,2 > 14 : objectif atteint. Sinuosité = 1,38 > 1,3 : objectif atteint. IPR = 55% = état moyen : objectif non atteint (bon état = IPR ≤ 50%). 2 objectifs sur 3 sont atteints. En pratique, l\'Agence évalue le dossier globalement et la trajectoire. Si l\'IPR est en amélioration (ex: IPR T0 = 70%) et que les causes de l\'écart sont expliquées et des mesures correctives proposées, le versement sera probablement accordé avec des réserves. Un objectif non atteint n\'entraîne pas automatiquement le refus si la démarche est rigoureuse.'
      },
      {
        n: '6',
        enonce: 'Des riverains d\'un projet de reméandrement s\'inquiètent que la rivière "ne déborde plus dans leurs prairies" alors qu\'elle le faisait avant les travaux de recalibrage des années 1970. Comment répondre et quelle communication mettre en place ?',
        solution: 'Le reméandrement vise à restaurer un fonctionnement proche de l\'état naturel d\'avant les années 1970. La rivière recalibrisée en rectiligne était plus rapide et ne débordait effectivement plus. En restaurant la sinuosité, on augmente légèrement la durée et la fréquence des connexions avec la plaine alluviale lors des crues moyennes (Q2-Q5) : c\'est précisément ce que les écologues cherchent (habitats, prairies humides). La communication doit : (1) montrer des photos de l\'état naturel de référence (avant 1970 si disponible) ; (2) expliquer les bénéfices pour la qualité de l\'eau et la biodiversité ; (3) proposer une réunion publique avec visite du site ; (4) s\'engager à suivre les niveaux d\'eau sur leurs prairies et à intervenir si un préjudice réel est constaté.'
      },
      {
        n: '7',
        enonce: 'Après 5 ans, l\'IBGN d\'un site restauré a progressé de 12/20 à 17/20. L\'indice de tendance annuelle est de combien ? Comment l\'interpréter ?',
        solution: 'IT = (17 - 12) / (12 × 5) × 100 = 5 / 60 × 100 = 8,3 %/an. Soit +8,3% de progression par an par rapport à la valeur initiale. C\'est une progression forte : un cours d\'eau naturel non perturbé ne varie que de 1-2% par an. Cette rapidité reflète l\'effet positif des travaux (amélioration de l\'habitat physique). À comparer à des opérations similaires dans la base REX pour vérifier si ce résultat est cohérent avec d\'autres cas.'
      },
      {
        n: '8',
        enonce: 'Un programme GEMAPI a restauré 12 km de cours d\'eau en 4 ans. Le budget total était 950 000 €. Calculez le coût par km et comparez à la fourchette nationale (40 000 à 120 000 €/km selon l\'OFB). Qu\'en déduire sur la gestion du programme ?',
        solution: 'Coût par km = 950 000 / 12 = 79 167 €/km. Cette valeur est dans la fourchette nationale (40 000-120 000 €/km) et proche de la médiane. Ce résultat indique une bonne maîtrise des coûts. Si le programme avait dépassé 120 000 €/km, il faudrait s\'interroger sur la complexité particulière du site, les coûts des études, ou la gestion des sédiments pollués. En deçà de 40 000 €/km, on peut douter de la qualité ou de l\'ambition des travaux.'
      }
    ]
  }

};
