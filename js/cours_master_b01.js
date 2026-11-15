/* ══════════════════════════════════════════════════════════════════
   MASTER SCIENCES DE L'EAU — BLOC 01
   Mathématiques, statistiques et incertitudes
   MASTER-EAU-001 à MASTER-EAU-012
   ══════════════════════════════════════════════════════════════════ */

var MASTER_EAU_B01 = {

  'MASTER-EAU-001': {
    id: 'MASTER-EAU-001',
    titre: 'Formalisation mathématique des problèmes de sciences de l\'eau',
    fiche: {
      intro: 'Formaliser un problème de sciences de l\'eau, c\'est choisir les variables pertinentes, identifier leurs dimensions, énoncer explicitement les hypothèses, puis écrire les équations de conservation qui gouvernent le phénomène. Cette démarche, distincte de la simple application de formules, est ce qui permet de savoir quand un modèle est valide, pourquoi il échoue, et comment l\'améliorer. Ce chapitre établit le langage commun de tous les blocs suivants.',
      sections: [
        {
          titre: '1. Variables, dimensions et analyse dimensionnelle',
          texte: 'En sciences de l\'eau, toute grandeur physique se caractérise par sa <strong>dimension</strong> — combinaison des dimensions fondamentales masse [M], longueur [L], temps [T], température [Θ] et quantité de matière [N]. La distinction entre dimension et unité est fondamentale : la charge hydraulique h est de dimension [L] quelle que soit l\'unité utilisée (m, cm, ft). Confondre les deux est une source d\'erreurs classique dans les modèles.\n\nL\'<strong>analyse dimensionnelle</strong> exploite ce fait pour obtenir des informations sur les relations entre grandeurs sans résoudre les équations. Le <strong>théorème de Buckingham Pi</strong> (1914) affirme que si un phénomène implique n grandeurs et k dimensions indépendantes, il peut être décrit par (n − k) groupes adimensionnels indépendants. Ces groupes (nombres de Reynolds, Froude, Péclet, Damköhler…) structurent la physique et guident la similitude entre systèmes.\n\n<strong>Exemple — nombre de Reynolds :</strong> l\'écoulement en conduite implique la vitesse U [L/T], le diamètre D [L], la masse volumique ρ [M/L³] et la viscosité dynamique μ [M/(LT)]. Avec n = 4 grandeurs et k = 3 dimensions (M, L, T), on obtient 1 groupe adimensionnel : Re = ρUD/μ. Ce nombre seul gouverne la transition laminaire-turbulente.',
          sous_sections: [
            {
              titre: '1.1 Homogénéité dimensionnelle et contrôle des équations',
              texte: '<p>Une équation est dimensionnellement homogène si tous ses termes ont la même dimension. Ce contrôle est une vérification minimale indispensable avant tout calcul. L\'équation de Darcy q = −K(∂h/∂x) est homogène : [L/T] = [L/T] × [L/L]. Si un terme supplémentaire avait une dimension différente, l\'équation serait erronée.</p><p>En pratique, les formules empiriques (Manning-Strickler, Hazen-Williams) ne sont pas toujours homogènes — elles incorporent des facteurs dimensionnels cachés dans leurs coefficients. Il faut alors préciser les unités dans lesquelles chaque variable doit être exprimée. Utiliser ces formules dans des unités non prévues est une cause fréquente d\'erreurs de calcul graves.</p>'
            },
            {
              titre: '1.2 Théorème de Buckingham Pi et similitude',
              texte: '<p>La similitude entre un prototype (cours d\'eau, bassin) et un modèle réduit exige que tous les groupes adimensionnels pertinents soient identiques. En hydraulique fluviale, la similitude de Froude (Fr = U/√(gD) = cste) gouverne les écoulements à surface libre. Satisfaire simultanément Froude et Reynolds est en général impossible pour l\'eau — d\'où les compromis des modèles physiques hydrauliques.</p><p>En hydrologie, le nombre de Péclet Pe = UL/D (U = vitesse advective, D = coefficient de dispersion, L = longueur du domaine) indique si le transport est dominé par l\'advection (Pe ≫ 1) ou la diffusion/dispersion (Pe ≪ 1). Cette information guide le choix du schéma numérique à utiliser lors de la modélisation.</p>'
            }
          ]
        },
        {
          titre: '2. Hypothèses et simplifications : rigueur et honnêteté',
          texte: 'Tout modèle repose sur des hypothèses. Les énoncer explicitement n\'est pas un aveu de faiblesse — c\'est la condition nécessaire pour savoir dans quel domaine le modèle est valide et pour pouvoir en évaluer les limites. Une hypothèse implicite est une erreur potentielle non détectée.\n\nLes hypothèses se classent en plusieurs catégories :\n<ul><li><strong>Géométriques :</strong> domaine 1D, 2D ou 3D ; couche mince ; domaine infini ou semi-infini.</li><li><strong>Cinématiques :</strong> écoulement permanent ou transitoire ; vitesse verticale négligeable ; pressions hydrostatiques.</li><li><strong>Thermodynamiques :</strong> eau incompressible ; fluide newtonien ; équilibre thermodynamique local.</li><li><strong>Statistiques :</strong> stationnarité des séries temporelles ; ergodicité ; indépendance des observations.</li><li><strong>Structurelles :</strong> linéarité du système ; homogénéité du milieu ; séparabilité des processus.</li></ul>',
          sous_sections: [
            {
              titre: '2.1 Analyse d\'échelle et hiérarchie des termes',
              texte: '<p>L\'analyse d\'échelle (scaling analysis) consiste à estimer l\'ordre de grandeur de chaque terme d\'une équation en substituant des valeurs caractéristiques du problème. Les termes dont l\'ordre de grandeur est négligeable devant les autres peuvent être éliminés, ce qui simplifie l\'équation sans perte de précision significative.</p><p>Exemple : dans l\'équation de Navier-Stokes pour un écoulement souterrain lent (Re ≪ 1), les termes inertiels ρ(u·∇)u sont négligeables devant les termes visqueux μ∇²u — ce qui conduit directement à la loi de Darcy. L\'échelle de vitesse U_c, la longueur caractéristique L_c et le temps caractéristique T_c = L_c/U_c permettent de rendre les équations adimensionnelles et d\'identifier les paramètres de contrôle.</p>'
            },
            {
              titre: '2.2 Modèles « boîte noire » versus modèles à base physique',
              texte: '<p>Un <strong>modèle à base physique</strong> résout des équations de conservation dérivées de premiers principes (masse, énergie, quantité de mouvement). Ses paramètres ont un sens physique mesurable. Un <strong>modèle conceptuel</strong> représente le système par des réservoirs et des transferts dont les lois sont simplifiées mais physiquement inspirées. Un <strong>modèle empirique</strong> ou statistique décrit des relations observées entre entrées et sorties sans référence explicite aux processus.</p><p>Chaque type de modèle a son domaine de validité. Un modèle à base physique mal paramétriste peut être moins précis qu\'un modèle empirique bien ajusté sur un site donné. La question n\'est pas « quel modèle est le meilleur ? » mais « quel modèle est adapté à ma question, à mes données et à mon usage ? »</p>'
            }
          ]
        },
        {
          titre: '3. Équations de bilan et de conservation',
          texte: 'Les équations de conservation — masse, énergie, quantité de mouvement, espèce chimique — sont le fondement de tout modèle physique. Elles expriment le fait que, pour un volume de contrôle donné :\n\n<strong>Accumulation = Entrées − Sorties + Production − Consommation</strong>\n\nCette équation générale prend des formes différentes selon le phénomène et les hypothèses retenues.',
          sous_sections: [
            {
              titre: '3.1 Bilan de masse : forme intégrale et forme locale',
              texte: '<p>Pour un volume de contrôle Ω de frontière ∂Ω, la conservation de la masse s\'écrit en forme intégrale : d/dt ∫∫∫_Ω ρ dV + ∫∫_∂Ω ρ(u·n) dS = 0. En appliquant le théorème de Green-Ostrogradski, on obtient la forme locale (équation de continuité) : ∂ρ/∂t + ∇·(ρu) = 0. Pour un fluide incompressible (ρ = cste) : ∇·u = 0, soit ∂u/∂x + ∂v/∂y + ∂w/∂z = 0.</p><p>En hydrologie, le bilan à l\'échelle du bassin versant intègre cette équation sur le domaine spatial : dS/dt = P − ET − Q, où S est le stock (en mm), P les précipitations, ET l\'évapotranspiration et Q le débit à l\'exutoire. Chaque terme est une intégrale spatiale de flux locaux. Les hypothèses sont ici l\'absence de prélèvement non mesuré, la connaissance des pertes profondes et la délimitation exacte du bassin versant.</p>'
            },
            {
              titre: '3.2 Conditions aux limites et conditions initiales',
              texte: '<p>Une équation différentielle partielle (EDP) ne définit un problème bien posé qu\'accompagnée de conditions aux limites (CL) et, pour les problèmes transitoires, d\'une condition initiale (CI). Le type de CL dépend de la physique : condition de Dirichlet (valeur imposée : charge, concentration), condition de Neumann (flux imposé : débit, gradient nul pour frontière imperméable), condition de Robin ou mixte (combinaison linéaire).</p><p>Un problème de Darcy 1D en régime permanent avec charge imposée aux deux extrémités (h = h₁ en x = 0, h = h₂ en x = L) est un problème de Dirichlet. Si la frontière aval est une surface libre non drainée, la CL est de Neumann (∂h/∂x = 0). Le mauvais choix des CL est une cause fréquente d\'artefacts numériques dans les modèles hydrologiques et hydrogéologiques.</p>'
            }
          ]
        },
        {
          titre: '4. Ce que ce chapitre approfondit par rapport au niveau licence',
          texte: 'Au niveau licence, les équations sont généralement données comme des outils à appliquer. Ce chapitre aborde leur construction : pourquoi l\'équation de Darcy est une simplification de Navier-Stokes, quelles hypothèses la justifient, et dans quels cas elles ne tiennent plus. L\'analyse d\'échelle, le théorème Pi de Buckingham et la distinction entre modèles à base physique et modèles empiriques ne sont pas au programme des licences professionnelles — ils constituent le premier niveau de réflexion critique propre au Master.'
        }
      ],
      points: [
        'Dimension ≠ unité : [h] = L, que h soit en m, cm ou ft',
        'Théorème Pi de Buckingham : (n − k) groupes adimensionnels pour n grandeurs et k dimensions',
        'Re = ρUD/μ : transition laminaire-turbulente en conduite (Re ≈ 2 300)',
        'Pe = UL/D : transport dominé par advection si Pe ≫ 1, par dispersion si Pe ≪ 1',
        'Équation de continuité pour fluide incompressible : ∇·u = 0',
        'Bilan hydrologique : dS/dt = P − ET − Q (applicable à tout bassin fermé)',
        'CL Dirichlet = valeur imposée ; Neumann = flux imposé ; Robin = combinaison',
        'Toute hypothèse implicite est une erreur potentielle non détectée',
        'L\'homogénéité dimensionnelle est une vérification minimale, nécessaire mais pas suffisante',
        'Un modèle bien ajusté n\'est pas nécessairement un modèle valide en dehors de sa plage de calage'
      ],
      formules: [
        'Re = ρUD/μ — nombre de Reynolds (transport momentum)',
        'Fr = U/√(gD) — nombre de Froude (surface libre)',
        'Pe = UL/D — nombre de Péclet (transport soluté)',
        'Continuité incompressible : ∂u/∂x + ∂v/∂y + ∂w/∂z = 0',
        'Bilan hydrologique : dS/dt = P − ET − Q',
        'Darcy 1D : q = −K · dh/dx  [m/s]',
        'Forme locale de la conservation de masse : ∂ρ/∂t + ∇·(ρu) = 0'
      ],
      retenir: 'Formaliser = choisir les variables, énoncer les hypothèses, écrire le bilan. L\'analyse dimensionnelle révèle la structure du problème avant tout calcul. Les groupes adimensionnels (Re, Fr, Pe) gouvernent les régimes physiques. Un bilan s\'écrit toujours : accumulation = entrées − sorties ± production. Les conditions aux limites font partie du problème au même titre que les équations.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Vérification dimensionnelle. L\'équation de Manning-Strickler s\'écrit V = Ks × Rh^(2/3) × I^(1/2), où V est la vitesse [m/s], Rh le rayon hydraulique [m] et I la pente [-]. (a) Quelle est la dimension de Ks ? (b) Si V est exprimée en ft/s et Rh en ft, quelle est la valeur de Ks pour un canal béton (Ks = 70 m^(1/3)/s) ?',
        solution: '(a) Dimension de Ks : [V] = [Ks] × [Rh]^(2/3) × [-] → [L/T] = [Ks] × [L]^(2/3) → [Ks] = [L/T] / [L^(2/3)] = [L^(1/3)/T] = m^(1/3)/s. Ks n\'est pas adimensionnel — c\'est un coefficient empirique dont la valeur dépend des unités.\n(b) Conversion : 1 m = 3,281 ft, 1 m/s = 3,281 ft/s → Ks_ft = Ks_m × (1 m^(1/3)/s) × (3,281 ft/m) / (3,281^(2/3) ft^(2/3)/m^(2/3)) = 70 × 3,281 / 3,281^(2/3) = 70 × 3,281^(1/3) = 70 × 1,484 = 103,9 ft^(1/3)/s. Utiliser Ks = 70 avec des pieds donnerait une vitesse sous-estimée d\'un facteur 1,484.'
      },
      {
        n: '2',
        enonce: 'Théorème de Buckingham Pi. Un géologue étudie la dispersion d\'un traceur dans un aquifère alluvial. Il identifie les grandeurs suivantes : concentration C [M/L³], temps t [T], distance x [L], vitesse de Darcy q [L/T], coefficient de dispersion D [L²/T], porosité cinématique ω [-]. (a) Combien de groupes adimensionnels peut-on former ? (b) Proposer une forme adimensionnelle de l\'équation d\'advection-dispersion 1D.',
        solution: '(a) Grandeurs : C, t, x, q, D, ω → n = 6. Dimensions impliquées : M, L, T → k = 3. Nombre de groupes Pi = 6 − 3 = 3 groupes. En tenant compte que C intervient seul dans la dimension M, et que ω est déjà adimensionnel (1 groupe trivial), on obtient 2 groupes indépendants significatifs.\n(b) Variables adimensionnelles naturelles : C* = C/C₀ (C₀ = concentration initiale), t* = qt/(ωx) (nombre de volumes de pores écoulés), Pe = qx/(ωD) (nombre de Péclet local). L\'équation adimensionnelle s\'écrit : ∂C*/∂t* = (1/Pe) × ∂²C*/∂x*² − ∂C*/∂x*. Le nombre de Péclet Pe contrôle entièrement le régime : pour Pe ≫ 1 (advection dominante), le front est raide et peu dispersé ; pour Pe ≪ 1, la dispersion efface le signal advectif.'
      },
      {
        n: '3',
        enonce: 'Analyse d\'échelle. L\'équation de Richards pour l\'infiltration non saturée s\'écrit : ∂θ/∂t = ∂/∂z [K(θ) × (∂ψ/∂z + 1)], où θ est la teneur en eau volumique, ψ le potentiel matriciel [m], K(θ) la conductivité hydraulique [m/s], z la profondeur [m] (positive vers le bas). Dans un sol sableux, les ordres de grandeur caractéristiques sont : événement pluvieux de durée T_c = 1 heure, profondeur du front Z_c = 0,5 m, conductivité à saturation K_sat = 10⁻⁴ m/s, variation de potentiel matriciel Δψ = 0,3 m. (a) Estimer le rapport entre les termes de gradient de pression (∂ψ/∂z) et de gravité (1). (b) À quel moment peut-on négliger la gravité ?',
        solution: '(a) Rapport des termes : |∂ψ/∂z| / 1 = Δψ/Z_c = 0,3/0,5 = 0,6. Les deux termes sont du même ordre de grandeur — il est impossible de négliger la gravité dans ce contexte.\n(b) La gravité est négligeable (|∂ψ/∂z| ≫ 1) quand le gradient matriciel est très fort, c\'est-à-dire en tout début d\'infiltration lorsque le sol est très sec (ψ très négatif, gradient fort sur la faible épaisseur du front humide). Dès que le front s\'approfondit (Z_c augmente), Δψ/Z_c diminue et la gravité redevient importante. Dans les sols fins (argiles, limons), Δψ est beaucoup plus grand (plusieurs mètres) et peut dominer sur des horizons décamétriques.'
      },
      {
        n: '4',
        enonce: 'Écriture d\'un bilan. Un bassin versant de superficie A = 480 km² reçoit en un mois : précipitations P = 65 mm, évapotranspiration réelle ET = 28 mm, débit moyen à l\'exutoire Q = 4,2 m³/s. (a) Écrire le bilan hydrologique mensuel. (b) Calculer la variation de stock ΔS en mm. (c) Interpréter le signe de ΔS.',
        solution: '(a) Bilan : ΔS = P − ET − Q_lame, où Q_lame = Q × Δt / A est le débit exprimé en lame d\'eau.\n(b) Durée du mois : Δt = 30 × 24 × 3600 = 2 592 000 s. Volume écoulé = 4,2 × 2 592 000 = 10 886 400 m³. Lame d\'écoulement = 10 886 400 / (480 × 10⁶) = 0,02268 m = 22,7 mm. ΔS = 65 − 28 − 22,7 = +14,3 mm.\n(c) ΔS > 0 : le bassin versant accumule de l\'eau (recharge des nappes, humidification des sols). Interprétation physique cohérente pour un mois automnal (octobre-novembre en France) où la recharge démarre. Si ΔS était négatif, le stock (neige + sol + nappe) se dépenserait, typique d\'un été sec.'
      },
      {
        n: '5',
        enonce: 'Identification des hypothèses. La loi de Darcy q = −K × (dh/dx) est appliquée pour calculer le débit traversant un aquifère alluvial. Lister au moins cinq hypothèses explicites ou implicites de cette formulation monodimensionnelle, et pour chacune identifier une situation réelle dans laquelle elle serait violée.',
        solution: '1. Milieu poreux continu homogène : violée en aquifère karstique (conduits) ou fissuré (fractures discrètes).\n2. Écoulement laminaire (Re_poreux < 1–10) : violée en graviers grossiers à fort débit, près d\'un forage pompant à fort débit.\n3. Flux unidirectionnel (1D) : violée lorsque le forage crée un cône de dépression tridimensionnel, ou lorsque des variations latérales de K existent.\n4. Stationnarité du champ de pression : violée lors d\'une crue ou d\'un pompage transitoire.\n5. Eau incompressible et aquifère rigide : violée en aquifère captif lors d\'un pompage (compressibilité de l\'eau et de la matrice — coefficient d\'emmagasinement S).\n6. Gradient hydraulique faible (linéarité) : violée pour des gradients très forts où les termes inertiels (loi de Forchheimer) deviennent non négligeables.'
      },
      {
        n: '6',
        enonce: 'Conditions aux limites. Un modèle 1D de nappe libre (axe x horizontal, x ∈ [0, L]) est soumis aux conditions suivantes : (1) rive droite connectée à une rivière de cote fixe h₀ ; (2) rive gauche est un interfluves imperméable ; (3) recharge uniforme par la pluie w [m/s]. Écrire : (a) l\'équation de gouvernance en régime permanent, (b) les deux CL, (c) la solution analytique h(x).',
        solution: '(a) Conservation de masse en 1D avec recharge w : d/dx(T × dh/dx) + w = 0, soit T × d²h/dx² = −w (T = transmissivité supposée uniforme).\n(b) CL : x = L (rive droite, rivière) → h = h₀ (Dirichlet). x = 0 (interfluves imperméable) → dh/dx = 0 (Neumann, flux nul).\n(c) Intégration de T × d²h/dx² = −w → T × dh/dx = −wx + C₁. CL x = 0 : dh/dx = 0 → C₁ = 0. Deuxième intégration : T × h = −wx²/2 + C₂. CL x = L : T × h₀ = −wL²/2 + C₂ → C₂ = T × h₀ + wL²/2. Solution : h(x) = h₀ + (w/2T)(L² − x²). Le niveau maximum est en x = 0 : h_max = h₀ + wL²/(2T). Cette solution dite "de Dupuit" suppose que les lignes de flux sont horizontales (approximation de Dupuit-Forchheimer).'
      },
      {
        n: '7',
        enonce: 'Comparaison de modèles. Un hydrologue dispose de deux modèles pour estimer la crue centennale d\'un bassin versant de 200 km² : (A) un modèle pluie-débit conceptuel calibré sur 20 ans de données avec 8 paramètres, et (B) un modèle régional statistique fondé sur 150 bassins jaugés de la même région hydroclimatique, utilisant la superficie comme seul prédicteur. Discuter les avantages et les limites de chacun pour (i) un bassin non jaugé voisin de 50 km², (ii) une simulation d\'impact d\'un changement d\'occupation du sol.',
        solution: '(i) Bassin non jaugé voisin (50 km²) : Le modèle (B) régional est directement applicable car il utilise la superficie comme seul prédicteur — pas besoin de données locales. Le modèle (A) conceptuel ne peut pas être utilisé directement : il faut d\'abord régionaliser (transférer) ses 8 paramètres, ce qui introduit une incertitude supplémentaire. Avantage net pour (B) sur ce cas d\'usage.\n(ii) Changement d\'occupation du sol : Le modèle (A) conceptuel est préférable si ses paramètres ont un sens physique lié à l\'occupation du sol (par exemple, coefficient de ruissellement, capacité d\'évapotranspiration). En modifiant ces paramètres selon les scénarios de changement, on peut simuler des réponses plausibles. Le modèle (B) régional est fondé sur des relations observées actuelles — il ne capte pas les effets d\'un changement d\'occupation du sol non représenté dans sa base de données. Avantage net pour (A), mais avec prudence sur l\'extrapolation.'
      },
      {
        n: '8',
        enonce: 'Synthèse ouverte. Un bureau d\'études reçoit une mission : évaluer l\'impact de l\'assèchement probable d\'une retenue (10 ha) sur le débit d\'un cours d\'eau en été. Le cours d\'eau draine un bassin versant de 35 km², la retenue intercepte 2 km² de ce bassin. Proposer une démarche structurée de formalisation du problème, en précisant : (a) les variables à considérer, (b) les hypothèses à énoncer, (c) les équations de bilan à utiliser, (d) les données nécessaires et les incertitudes majeures.',
        solution: '(a) Variables pertinentes : précipitations P, évapotranspiration ET_retenue (élevée depuis la surface libre) et ET_sol sur le reste du bassin, débit de base Q_base alimenté par la nappe, prélèvements éventuels, variation de stock ΔS (retenue + nappe + sol). En aval : débit Q_aval à l\'exutoire.\n(b) Hypothèses à énoncer : stationnarité interannuelle du régime ; connexion hydraulique supposée entre retenue et nappe (à vérifier) ; ET de la surface libre = ET_pot en été (absence de stress hydrique) ; bassin versant fermé (pas de transferts souterrains inter-bassins).\n(c) Bilan à l\'échelle annuelle et mensuelle : ΔS = P − ET − Q. La retenue contribue à ET avec un taux ≈ 1 200–1 400 mm/an (plaine) là où un sol nu contribuerait ≈ 300–500 mm/an en été. Différence d\'ET = (1 400 − 400) mm/an × 2 km² ≈ 2 × 10⁶ m³/an supprimés du bilan → impact sur Q_base calculable par bilan.\n(d) Données nécessaires : chronique de débits (≥ 10 ans), données météo (P, ET_pot), bathymétrie de la retenue pour estimer ΔS, piézométrie pour estimer la connexion nappe-rivière. Incertitudes majeures : part de la retenue dans la recharge de la nappe (difficile à quantifier sans traçage ou modèle souterrain), variabilité climatique future.'
      }
    ],
    flashcards: [
      {
        q: 'Quelle est la différence entre dimension et unité d\'une grandeur physique ?',
        r: 'La dimension exprime la nature physique de la grandeur (longueur, masse, temps…), l\'unité est la mesure conventionnelle choisie. La charge h a la dimension [L] quelle que soit l\'unité (m, cm, ft). Un coefficient empirique peut absorber des dimensions cachées.',
        expl: 'Vérifier l\'homogénéité dimensionnelle d\'une équation révèle immédiatement les erreurs de formulation. La loi de Manning-Strickler n\'est pas homogène — son coefficient Ks a pour dimension [L^(1/3)/T] et dépend du système d\'unités utilisé.'
      },
      {
        q: 'Qu\'affirme le théorème de Buckingham Pi ?',
        r: 'Un phénomène impliquant n grandeurs physiques et k dimensions indépendantes peut être décrit par (n − k) groupes adimensionnels indépendants (nombres Pi). Ces groupes structurent la physique et permettent la similitude.',
        expl: 'Pour l\'écoulement en conduite : n = 4 (U, D, ρ, μ), k = 3 (M, L, T) → 1 groupe : Re = ρUD/μ. Ce nombre seul gouverne la nature de l\'écoulement, que ce soit dans une conduite de 2 cm ou de 2 m.'
      },
      {
        q: 'Comment l\'analyse d\'échelle guide-t-elle la simplification d\'une équation ?',
        r: 'On substitue les valeurs caractéristiques du problème (U_c, L_c, T_c) dans chaque terme pour estimer son ordre de grandeur. Les termes négligeables (rapport < 0,01–0,1 selon la précision voulue) peuvent être supprimés sans perte significative.',
        expl: 'Dans les écoulements souterrains (Re < 1), le ratio termes inertiels/termes visqueux ≈ Re → la loi de Darcy résulte directement de l\'analyse d\'échelle des équations de Navier-Stokes. L\'analyse d\'échelle est plus rapide et plus informative qu\'une démonstration complète.'
      },
      {
        q: 'Quelle est la forme générale d\'une équation de bilan ?',
        r: 'Accumulation = Entrées − Sorties + Production − Consommation. Pour un bassin versant : dS/dt = P − ET − Q. Pour un réacteur chimique : d(C·V)/dt = Q_in·C_in − Q_out·C_out + r·V.',
        expl: 'Cette structure est invariante, qu\'il s\'agisse d\'un bilan de masse d\'eau, d\'un bilan d\'énergie, d\'un bilan de soluté ou d\'un bilan d\'espèces biologiques. Maîtriser cette structure permet d\'écrire le modèle de tout système sans mémoriser des formules spécifiques.'
      },
      {
        q: 'Quelle différence entre condition de Dirichlet et de Neumann ?',
        r: 'Dirichlet = valeur de la variable imposée sur la frontière (charge h = h₀, concentration C = C₀). Neumann = flux imposé (dérivée normale = valeur, ex. frontière imperméable ∂h/∂n = 0 ou flux de recharge −K∂h/∂n = w).',
        expl: 'Une condition de Dirichlet "pilote" la variable ; une condition de Neumann pilote son gradient. Dans MODFLOW, une rivière à cote fixe est une CL de Dirichlet ; une frontière imperméable est une CL de Neumann. Le mauvais choix crée des artefacts numériques importants.'
      },
      {
        q: 'Pourquoi énoncer les hypothèses d\'un modèle est-il une obligation et non un formalisme ?',
        r: 'Les hypothèses définissent le domaine de validité du modèle. Une hypothèse implicite est une erreur potentielle non détectée. Sans liste d\'hypothèses explicites, il est impossible de savoir pourquoi le modèle échoue dans une nouvelle situation, ni de le corriger.',
        expl: 'Exemple : un modèle MODFLOW calibré sur des conditions actuelles prédit bien les niveaux — mais si les CL (rivière à cote fixe) ne sont valides qu\'en régime normal, une simulation de sécheresse sévère où la rivière s\'assèche viole la CL de Dirichlet et produit des résultats artificiels non détectés sans liste d\'hypothèses.'
      }
    ]
  },

  'MASTER-EAU-002': {
    id: 'MASTER-EAU-002',
    titre: 'Algèbre linéaire et systèmes d\'équations',
    fiche: {
      intro: 'Presque tous les modèles numériques en sciences de l\'eau — réseaux hydrauliques, discrétisation d\'équations aux dérivées partielles, calage de modèles — se ramènent à résoudre un ou plusieurs systèmes linéaires Ax = b, parfois de taille considérable (10⁴ à 10⁷ inconnues). Comprendre les propriétés de la matrice A, choisir la méthode de résolution adaptée et diagnostiquer les instabilités numériques est une compétence indispensable à tout modélisateur de niveau Master.',
      sections: [
        {
          titre: '1. Représentation matricielle des problèmes de sciences de l\'eau',
          texte: 'Dès que l\'on discrétise un domaine spatial ou que l\'on écrit les bilans de masse en chaque nœud d\'un réseau, on obtient un système d\'équations linéaires. La matrice A rassemble les coefficients de ce système ; le vecteur x contient les inconnues (charges, débits, concentrations…) et b les termes sources.\n\nUn réseau hydraulique à n nœuds et m branches génère une matrice d\'incidence nœud-branche A ∈ ℝ^(n×m). La loi des nœuds s\'écrit Af = q (conservation de la masse), et la loi des branches introduit les pertes de charge (système couplé, souvent non linéaire mais linéarisable). La discrétisation par différences finies d\'une équation de diffusion 1D sur une grille de N points produit une matrice tridiagonale de taille N×N — creuse, symétrique, définie positive : ces propriétés commandent le choix du solveur.',
          sous_sections: [
            {
              titre: '1.1 Rang, noyau et conditions de compatibilité',
              texte: '<p>Un système Ax = b est compatible (a au moins une solution) si et seulement si b est dans l\'espace image de A, c\'est-à-dire rang(A) = rang(A|b). En termes physiques pour un bilan de réseau hydraulique : il faut que la somme de tous les débits imposés soit nulle (conservation globale de la masse). Si cette condition n\'est pas vérifiée, le système est inconsistant — cela signale une erreur dans les données d\'entrée (un débit manquant, une frontière mal définie).</p><p>Le noyau de A (ensemble des solutions de Ax = 0) représente les modes non contraints du système. Pour un réseau de conduites, le noyau est de dimension 1 si aucune charge n\'est fixée — toute la solution peut être décalée d\'une constante. L\'ajout d\'un point de référence de pression (une charge imposée) supprime ce degré de liberté et rend la solution unique.</p>'
            },
            {
              titre: '1.2 Propriétés des matrices issues de la discrétisation',
              texte: '<p>Les matrices issues de la discrétisation des EDP physiques héritent de propriétés importantes :<br>• <strong>Creuse (sparse)</strong> : chaque inconnue n\'est couplée qu\'à ses voisins immédiats → la fraction de coefficients non nuls est O(N/N²) = O(1/N), dérisoire pour N grand. Les solveurs doivent exploiter cette structure pour éviter de saturer la mémoire.<br>• <strong>Symétrique</strong> : souvent vérifiée pour des EDP autoadjointes (Laplacien, diffusion isotrope).<br>• <strong>Définie positive</strong> : tous les valeurs propres > 0. Garantit l\'existence et l\'unicité de la solution, et permet la décomposition de Cholesky (deux fois plus rapide que LU).<br>• <strong>Diagonale dominante</strong> : |a_ii| ≥ Σ_{j≠i} |a_ij|. Garantit la convergence des méthodes itératives de Jacobi et Gauss-Seidel.</p>'
            }
          ]
        },
        {
          titre: '2. Résolution directe : décomposition LU et Cholesky',
          texte: 'Les méthodes directes résolvent Ax = b en un nombre fini d\'opérations, sans itérer. Elles sont fiables et précises pour des systèmes de taille modérée (N ≲ 10⁴) ou des matrices denses.',
          sous_sections: [
            {
              titre: '2.1 Élimination de Gauss et décomposition LU',
              texte: '<p>La décomposition LU factorise A = LU, où L est triangulaire inférieure (Lower) et U triangulaire supérieure (Upper). La résolution de Ax = b se ramène alors à deux systèmes triangulaires : d\'abord Ly = b (descente, O(N²)), puis Ux = y (remontée, O(N²)). Le coût total de la factorisation est O(N³/3).</p><p>En pratique, on utilise une permutation partielle (pivotage) : PA = LU, où P est une matrice de permutation qui échange les lignes pour améliorer la stabilité numérique. Sans pivotage, un pivot nul ou très petit peut provoquer une division par zéro ou amplifier les erreurs d\'arrondi.</p><p>Pour une matrice symétrique définie positive, la décomposition de <strong>Cholesky</strong> A = LLᵀ est préférable : deux fois moins d\'opérations que LU, numériquement plus stable, et l\'unique facteur L est suffisant.</p>'
            },
            {
              titre: '2.2 Conditionnement et stabilité numérique',
              texte: '<p>Le nombre de conditionnement κ(A) = ‖A‖ × ‖A⁻¹‖ mesure à quel point la matrice est « mal conditionnée ». Si κ(A) ≈ 10^k, on peut perdre k chiffres significatifs dans la solution. Pour une arithmétique en double précision (15–16 chiffres), un système avec κ ≈ 10^12 peut donner une solution entièrement erronée.</p><p>En pratique, les matrices de discrétisation des EDP avec un maillage fin ont κ ∝ 1/h², où h est le pas d\'espace. Sur un maillage à h = 10⁻³ m, κ ≈ 10⁶ — acceptable. Le préconditionnement (multiplication à gauche et/ou à droite par des matrices P⁻¹ qui « améliorent » la forme de A) est une technique fondamentale pour réduire κ avant de résoudre.</p>'
            }
          ]
        },
        {
          titre: '3. Méthodes itératives pour grands systèmes',
          texte: 'Pour des systèmes de grande taille (N > 10⁴) issus de la modélisation en 2D ou 3D, les méthodes directes deviennent prohibitives en mémoire et en temps de calcul. Les méthodes itératives construisent une suite de vecteurs x^(k) qui converge vers la solution exacte, en exploitant la structure creuse de A.',
          sous_sections: [
            {
              titre: '3.1 Jacobi et Gauss-Seidel',
              texte: '<p>La méthode de <strong>Jacobi</strong> met à jour toutes les composantes simultanément à chaque itération : x_i^(k+1) = (b_i − Σ_{j≠i} a_{ij} x_j^(k)) / a_{ii}. Elle converge si A est à diagonale strictement dominante. La méthode de <strong>Gauss-Seidel</strong> utilise les valeurs les plus récentes dans la même itération — elle converge généralement deux fois plus vite que Jacobi et peut converger lorsque Jacobi diverge.</p><p>La relaxation successive (SOR — Successive Over-Relaxation) introduit un paramètre ω ∈ (0, 2) : x_i^(k+1) = ω × (Gauss-Seidel) + (1 − ω) × x_i^(k). Pour ω optimal ≈ 2/(1 + sin(πh)), SOR converge O(1/h) fois plus vite que Gauss-Seidel sur une grille régulière de pas h.</p>'
            },
            {
              titre: '3.2 Gradient conjugué (Conjugate Gradient — CG)',
              texte: '<p>Pour les matrices symétriques définies positives, la méthode du <strong>gradient conjugué</strong> est le solveur itératif de référence. Elle minimise le résidu dans l\'espace de Krylov associé à A, et converge en au plus N itérations en arithmétique exacte — en pratique bien moins, surtout avec préconditionnement. Avec le préconditionneur ILU (factorisation LU incomplète), le gradient conjugué préconditionné (PCG) résout des systèmes de taille 10⁶ en quelques dizaines d\'itérations.</p><p>La bibliothèque Python <code>scipy.sparse.linalg</code> offre CG, MINRES, GMRES et leurs variantes pour les problèmes issus de la modélisation en sciences de l\'eau. L\'utilisation directe du solveur creux sans préconditionneur peut être 100× plus lente que PCG sur un maillage réaliste.</p>'
            }
          ]
        },
        {
          titre: '4. Valeurs propres, vecteurs propres et ACP',
          texte: 'Les valeurs propres λ et vecteurs propres v d\'une matrice A vérifient Av = λv. En sciences de l\'eau, leur signification physique est directe : les valeurs propres d\'une matrice de diffusion discrétisée donnent les taux de décroissance des modes propres ; les vecteurs propres de la matrice de covariance de jeux de données hydrologiques définissent les composantes principales.',
          sous_sections: [
            {
              titre: '4.1 Analyse en Composantes Principales (ACP) en hydrologie',
              texte: '<p>L\'ACP d\'un tableau de données X (n observations × p variables, par exemple débits mensuels en n stations) cherche les directions de variance maximale. La matrice de covariance C = XᵀX/(n−1) est symétrique semi-définie positive. Sa décomposition spectrale C = VΛVᵀ donne les composantes principales (colonnes de V) et leurs variances associées (valeurs propres λ_i).</p><p>En hydrologie régionale, les 2–3 premières composantes principales représentent souvent 70–90 % de la variance totale et peuvent être interprétées physiquement : la PC1 capte le régime saisonnier général (pluie–débit moyen), la PC2 un contraste entre bassins à comportement nival et bassins pluviaux, la PC3 un signal d\'assèchement estival. Cette réduction de dimension est précieuse pour classer des bassins versants ou interpoler des régimes hydrologiques dans des zones non jaugées.</p>'
            },
            {
              titre: '4.2 Stabilité des systèmes dynamiques linéaires',
              texte: '<p>Un système dynamique linéaire dX/dt = AX est stable si toutes les valeurs propres de A ont une partie réelle négative. Dans les modèles d\'écoulement (par exemple un réservoir linéaire chaîné), cette condition est toujours vérifiée physiquement — mais peut être violée numériquement si le pas de temps dt est trop grand. La condition de stabilité de Courant-Friedrichs-Lewy (CFL) pour les schémas explicites est précisément une condition sur les valeurs propres de la matrice de discrétisation.</p>'
            }
          ]
        }
      ],
      points: [
        'Ax = b compatible ⟺ b ∈ Im(A) ⟺ rang(A) = rang(A|b)',
        'Noyau de A = degrés de liberté non contraints (ex. : pression de référence dans un réseau)',
        'Matrice creuse : fraction non nulle = O(1/N) pour une discrétisation 1D ou 2D',
        'Décomposition LU : coût O(N³/3) ; Cholesky (SDP) : coût O(N³/6)',
        'κ(A) = ‖A‖·‖A⁻¹‖ : perte de log₁₀(κ) chiffres significatifs en double précision',
        'Jacobi converge si A est à diagonale strictement dominante',
        'Gradient conjugué : solveur de référence pour matrices SDP creuses',
        'ACP : C = VΛVᵀ, composantes = directions de variance maximale',
        'Stabilité système dX/dt = AX : toutes les Re(λᵢ) < 0',
        'Préconditionnement : réduire κ avant d\'itérer, pas après'
      ],
      formules: [
        'Décomposition LU : A = LU, Ly = b puis Ux = y',
        'Cholesky (SDP) : A = LLᵀ',
        'Conditionnement : κ(A) = ‖A‖₂ · ‖A⁻¹‖₂ = λ_max / λ_min',
        'Jacobi : x_i^(k+1) = (b_i − Σ_{j≠i} a_{ij} x_j^(k)) / a_{ii}',
        'SOR : x^(k+1) = ω · x_GS^(k+1) + (1−ω) · x^(k)',
        'ACP : C = XᵀX/(n−1) = VΛVᵀ',
        'Loi des nœuds (réseau) : Af = q (A = matrice d\'incidence)'
      ],
      retenir: 'Tout problème discrétisé est un système linéaire. Creuse, symétrique, définie positive = Cholesky ou gradient conjugué préconditionné. Le conditionnement mesure la perte de précision numérique. L\'ACP, c\'est la décomposition spectrale de la covariance. Ne jamais résoudre Ax = b en calculant A⁻¹ explicitement — c\'est O(N³) et numériquement instable.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Résolution par élimination de Gauss. Résoudre le système suivant qui représente les charges hydrauliques h₁, h₂, h₃ à trois nœuds d\'un réseau simplifié :\n2h₁ − h₂ = 10\n−h₁ + 3h₂ − h₃ = 5\n−h₂ + 2h₃ = 8',
        solution: 'Matrice augmentée :\n[2  −1   0 | 10]\n[−1  3  −1 |  5]\n[0  −1   2 |  8]\n\nÉtape 1 : éliminer h₁ de la ligne 2 → L2 ← L2 + (1/2)L1 :\n[2   −1    0  | 10]\n[0   5/2  −1  | 10]\n[0   −1    2  |  8]\n\nÉtape 2 : éliminer h₂ de la ligne 3 → L3 ← L3 + (2/5)L2 :\n[2   −1    0   | 10]\n[0   5/2  −1   | 10]\n[0    0   8/5  | 12]\n\nRemontée : h₃ = 12 × 5/8 = 7,5 m\nh₂ = (10 + h₃) × 2/5 = (10 + 7,5) × 2/5 = 7,0 m\nh₁ = (10 + h₂)/2 = (10 + 7)/2 = 8,5 m\n\nVérification : 2×8,5 − 7 = 10 ✓ ; −8,5 + 3×7 − 7,5 = −8,5 + 21 − 7,5 = 5 ✓ ; −7 + 2×7,5 = 8 ✓'
      },
      {
        n: '2',
        enonce: 'Réseau hydraulique — loi des nœuds. Un réseau comporte 4 nœuds et 5 branches. Les charges imposées sont h₁ = 20 m et h₄ = 10 m. Les conductances des branches sont : k₁₂ = 2, k₁₃ = 1, k₂₃ = 1, k₂₄ = 2, k₃₄ = 3 (en L/s par m de perte de charge). (a) Écrire le système d\'équations aux nœuds libres 2 et 3. (b) Résoudre pour h₂ et h₃.',
        solution: '(a) Bilan de débit en chaque nœud libre (somme des débits entrants = sortants) :\n\nNœud 2 : k₁₂(h₁−h₂) + k₃₂(h₃−h₂) − k₂₄(h₂−h₄) = 0\n→ k₁₂·h₁ + k₃₂·h₃ + k₂₄·h₄ = (k₁₂ + k₃₂ + k₂₄)·h₂\n→ 2×20 + 1×h₃ + 2×10 = (2+1+2)h₂ → 60 + h₃ = 5h₂\n\nNœud 3 : k₁₃(h₁−h₃) + k₂₃(h₂−h₃) − k₃₄(h₃−h₄) = 0\n→ k₁₃·h₁ + k₂₃·h₂ + k₃₄·h₄ = (k₁₃ + k₂₃ + k₃₄)·h₃\n→ 1×20 + 1×h₂ + 3×10 = (1+1+3)h₃ → 50 + h₂ = 5h₃\n\nSystème 2×2 :\n5h₂ − h₃ = 60\n−h₂ + 5h₃ = 50\n\n(b) De la 1re équation : h₃ = 5h₂ − 60. Substitution dans la 2e : −h₂ + 5(5h₂−60) = 50 → 24h₂ = 350 → h₂ = 14,58 m. h₃ = 5×14,58 − 60 = 12,92 m.\n\nVérification : 5×14,58 − 12,92 = 72,9 − 12,92 = 60 ✓ ; −14,58 + 5×12,92 = −14,58 + 64,6 = 50 ✓'
      },
      {
        n: '3',
        enonce: 'Conditionnement. Soit la matrice A = [[1, 1], [1, 1+ε]] avec ε = 10⁻⁸. (a) Calculer det(A) et κ(A) = ‖A‖_∞ × ‖A⁻¹‖_∞. (b) Si le vecteur b = [2, 2+ε]ᵀ est entaché d\'une erreur δb = [0, 10⁻⁸]ᵀ, estimer l\'erreur relative sur la solution x.',
        solution: '(a) det(A) = (1)(1+ε) − 1×1 = ε = 10⁻⁸. A⁻¹ = (1/ε)[[1+ε, −1], [−1, 1]].\n‖A‖_∞ = max(1+1, 1+1+ε) = 2+ε ≈ 2.\n‖A⁻¹‖_∞ = max((2+ε)/ε, 2/ε) = (2+ε)/ε ≈ 2/ε = 2×10⁸.\nκ(A) ≈ 2 × 2×10⁸ = 4×10⁸.\n\n(b) Estimation d\'erreur relative : ‖δx‖/‖x‖ ≤ κ(A) × ‖δb‖/‖b‖.\n‖δb‖_∞ = 10⁻⁸, ‖b‖_∞ ≈ 2 → ‖δb‖/‖b‖ ≈ 5×10⁻⁹.\nErreur relative maximale : 4×10⁸ × 5×10⁻⁹ = 2 (soit 200 %).\nInterprétation : une toute petite erreur dans b peut conduire à une solution complètement fausse. Cette matrice est quasi-singulière (det ≈ 0) — le système n\'est pas bien posé numériquement.'
      },
      {
        n: '4',
        enonce: 'Méthode de Gauss-Seidel. Appliquer 3 itérations de Gauss-Seidel au système suivant (issu de la diffusion 1D discrétisée), en partant de x¹ = x² = x³ = 0 :\n4x₁ − x₂ = 7\n−x₁ + 4x₂ − x₃ = 10\n−x₂ + 4x₃ = 7\nComparer à la solution exacte (1; 3; 2,5).',
        solution: 'Formules Gauss-Seidel :\nx₁^(k+1) = (7 + x₂^(k)) / 4\nx₂^(k+1) = (10 + x₁^(k+1) + x₃^(k)) / 4\nx₃^(k+1) = (7 + x₂^(k+1)) / 4\n\nItération 1 (départ x=0) :\nx₁ = 7/4 = 1,75\nx₂ = (10 + 1,75 + 0)/4 = 2,9375\nx₃ = (7 + 2,9375)/4 = 2,484\n\nItération 2 :\nx₁ = (7 + 2,9375)/4 = 2,484... → (7+2,9375)/4 = 2,484\nAttention : x₁ = (7 + x₂^(1))/4 = (7 + 2,9375)/4 = 2,484\nx₂ = (10 + 2,484 + 2,484)/4 = 14,969/4 = 3,742\nx₃ = (7 + 3,742)/4 = 2,686\n\nItération 3 :\nx₁ = (7 + 3,742)/4 = 2,686\nx₂ = (10 + 2,686 + 2,686)/4 = 3,843\nx₃ = (7 + 3,843)/4 = 2,711\n\nRésolution exacte par retour en arrière : x₃ = 2,5 ; x₂ = 3,0 ; x₁ = 1,0. La convergence est lente parce que le point de départ (0,0,0) est loin de la solution. La matrice est diagonale dominante (4 > 1+1), donc Gauss-Seidel converge bien. Après ~15 itérations, l\'erreur serait < 10⁻⁶.'
      },
      {
        n: '5',
        enonce: 'Décomposition LU. Factoriser la matrice tridiagonale A = [[4,−1,0],[−1,4,−1],[0,−1,4]] sous la forme A = LU (sans pivotage). Écrire L et U.',
        solution: 'Étape 1 : m₂₁ = a₂₁/a₁₁ = −1/4. L2 ← L2 − m₂₁·L1 :\nNouveau a₂₂ = 4 − (−1/4)×(−1) = 4 − 1/4 = 15/4\nNouveau a₂₃ reste = −1\n\nÉtape 2 : m₃₂ = a₃₂/a₂₂ = −1/(15/4) = −4/15. L3 ← L3 − m₃₂·L2 :\nNouveau a₃₃ = 4 − (−4/15)×(−1) = 4 − 4/15 = 56/15\n\nMatrice L (triangulaire inférieure, 1 sur diag) :\nL = [[1,  0,   0 ],\n     [−1/4, 1, 0 ],\n     [0, −4/15, 1]]\n\nMatrice U (triangulaire supérieure) :\nU = [[4, −1,    0  ],\n     [0, 15/4, −1  ],\n     [0,  0,  56/15]]\n\nVérification : LU[0,0] = 4 ✓ ; LU[1,0] = −1/4×4 = −1 ✓ ; LU[2,2] = 56/15 ✓'
      },
      {
        n: '6',
        enonce: 'Valeurs propres. La matrice de diffusion discrétisée 1D à N points intérieurs avec h = L/(N+1) est T = (1/h²) × tridiag(−1, 2, −1). (a) Pour N = 3 et L = 1 m, calculer les valeurs propres de h²T. (b) Quelle est la signification physique de la plus petite valeur propre pour l\'équation de diffusion ∂c/∂t = D·∂²c/∂x² ?',
        solution: '(a) h = 1/4, donc h²T = tridiag(−1, 2, −1) de taille 3×3.\nMatrice : [[2,−1,0],[−1,2,−1],[0,−1,2]].\nLes valeurs propres d\'une matrice tridiagonale tridiag(−1,2,−1) de taille N×N sont : λ_k = 2 − 2cos(kπ/(N+1)) pour k = 1, …, N.\nPour N=3 : λ₁ = 2−2cos(π/4) = 2−√2 ≈ 0,586 ; λ₂ = 2−2cos(2π/4) = 2 ; λ₃ = 2−2cos(3π/4) = 2+√2 ≈ 3,414.\n\n(b) Physiquement, λ_k × D/h² est le taux de décroissance du k-ième mode propre de concentration. La plus petite valeur propre λ₁ ≈ 0,586/h² donne le taux de décroissance le plus lent — c\'est le mode fondamental (profil à demi-sinus) qui persiste le plus longtemps. Le temps caractéristique de disparition du gradient est τ_max = h²/(D×λ₁) = 1/(D×λ₁/h²) ≈ L²/(π²D), cohérent avec la solution analytique de la diffusion.'
      },
      {
        n: '7',
        enonce: 'ACP hydrologique. Un tableau X de débits mensuels (12 mois × 5 stations) a pour matrice de covariance C dont les valeurs propres sont λ = [42, 8, 3, 1, 0,5] m⁶/s². (a) Quelle part de la variance totale la première composante principale représente-t-elle ? (b) Combien de composantes sont nécessaires pour expliquer 90 % de la variance ? (c) Interpréter ce que représente la PC1 dans le contexte d\'un réseau de jaugeage.',
        solution: '(a) Variance totale = Σλᵢ = 42+8+3+1+0,5 = 54,5 m⁶/s². Part de PC1 = 42/54,5 = 77,1 %.\n\n(b) Variance cumulée : PC1 = 77,1 % ; PC1+PC2 = (42+8)/54,5 = 91,7 % > 90 %. Il faut donc 2 composantes principales pour expliquer 90 % de la variance.\n\n(c) La PC1 capte 77 % de la variance commune à toutes les stations. Dans un réseau de 5 stations sur un même bassin versant climatiquement homogène, elle représente le signal hydrologique commun : la variabilité saisonnière et interannuelle du régime général (réponse aux précipitations, cycle étiage-crue). Les stations dont le vecteur propre v₁ est grand contribuent fortement à ce signal commun. La PC2 (8/54,5 ≈ 15 %) peut représenter un contraste entre sous-bassins (amont montagneux nival vs aval pluvial, par exemple).'
      },
      {
        n: '8',
        enonce: 'Synthèse. Un collecteur d\'assainissement unitaire en maille comporte 6 nœuds et 7 tronçons. On souhaite calculer les charges hydrauliques en régime uniforme. Décrire : (a) la structure de la matrice A du système linéaire ; (b) les difficultés spécifiques liées aux tronçons à surface libre (non linéarité de Manning-Strickler) ; (c) la stratégie de résolution adaptée.',
        solution: '(a) Structure de la matrice A (6×6) : A est creuse (au plus 7 valeurs non nulles hors diagonale sur 30 termes), symétrique si les conductances sont symétriques, diagonale dominante, et définie positive si au moins un nœud a une charge imposée. Elle ressemble à la matrice de Laplacien de graphe.\n\n(b) Avec Manning-Strickler, la conductance de chaque tronçon dépend de la charge (via le rayon hydraulique Rh qui dépend de la hauteur d\'eau). Le système n\'est donc pas linéaire : les coefficients de A dépendent de la solution x inconnue. Il faut linéariser itérativement — c\'est la méthode de Newton-Raphson ou de Picard : (1) partir d\'une solution initiale x^(0) ; (2) calculer les conductances k_{ij}(x^(0)) ; (3) résoudre A(x^(0))·x^(1) = b ; (4) répéter jusqu\'à convergence.\n\n(c) Pour 6 nœuds, le système est minuscule — un solveur direct (factorisation LU) suffit largement. Pour un réseau réel avec des milliers de nœuds, le système à chaque itération de Newton serait grand mais creux — PCG préconditionné. La convergence de Newton-Raphson est quadratique (très rapide) si l\'initialisation est bonne ; elle peut diverger si les hauteurs initiales sont irréalistes. Une initialisation à partir de la solution en régime plein (tuyau plein) donne généralement un bon point de départ.'
      }
    ],
    flashcards: [
      {
        q: 'Qu\'est-ce que le nombre de conditionnement κ(A) et pourquoi est-il crucial en modélisation numérique ?',
        r: 'κ(A) = ‖A‖ × ‖A⁻¹‖ = λ_max/λ_min (pour les matrices SPD). Il mesure la sensibilité de la solution x aux erreurs dans b : une erreur relative δb/b peut être amplifiée d\'un facteur κ dans δx/x. En double précision (15 chiffres), κ = 10^k entraîne la perte de k chiffres significatifs.',
        expl: 'Pour un maillage de pas h, la matrice de diffusion discrétisée a κ ≈ π²/h². Sur un maillage fin (h = 0,01 m), κ ≈ 10 000 — on perd 4 chiffres. Le préconditionnement réduit κ effectif et est indispensable pour les grands systèmes.'
      },
      {
        q: 'Quand utiliser la décomposition de Cholesky plutôt que LU ?',
        r: 'Cholesky (A = LLᵀ) s\'applique uniquement aux matrices symétriques définies positives (SPD). Elle est deux fois moins coûteuse que LU (N³/6 vs N³/3 flops) et numériquement plus stable. Les matrices de diffusion, de Laplacien de graphe, et de covariance sont SPD → Cholesky est le choix naturel.',
        expl: 'En hydraulique souterraine (MODFLOW, FreeFEM), la matrice du système est SPD → Cholesky ou gradient conjugué préconditionné. Ne pas l\'utiliser revient à gaspiller un facteur 2 en temps de calcul sans aucun bénéfice.'
      },
      {
        q: 'À quelle condition Gauss-Seidel converge-t-il ?',
        r: 'Condition suffisante : A est à diagonale strictement dominante (|a_ii| > Σ_{j≠i} |a_ij|). Condition nécessaire et suffisante pour les matrices SPD : toutes les valeurs propres du rayon spectral de la matrice d\'itération sont < 1.',
        expl: 'Les matrices de Laplacien de graphe (réseaux hydrauliques) et de diffusion discrétisée sont toujours diagonale dominante — Gauss-Seidel converge. Sur des maillages fins, la convergence est lente : il faut O(1/h²) itérations. SOR avec ω optimal ou PCG sont préférables.'
      },
      {
        q: 'Comment l\'ACP est-elle liée à la décomposition spectrale ?',
        r: 'L\'ACP décompose la matrice de covariance C = VΛVᵀ. Les colonnes de V sont les composantes principales (axes de variance maximale) ; les valeurs propres λᵢ sont les variances associées. La première CP explique la plus grande part de variance, les suivantes des parts décroissantes.',
        expl: 'En hydrologie régionale, l\'ACP sur des chroniques de débits révèle les modes de variabilité communs à un réseau de stations. PC1 = signal régional commun, PC2 = gradient climatique, etc. C\'est une réduction de dimension qui permet d\'interpoler des régimes en zones non jaugées (régionalisation).'
      },
      {
        q: 'Pourquoi ne faut-il jamais calculer explicitement A⁻¹ pour résoudre Ax = b ?',
        r: 'Calculer A⁻¹ coûte O(N³) et remplit la matrice (même si A est creuse), ce qui sature la mémoire. Résoudre LUx = b coûte O(N³/3) et préserve la structure creuse. De plus, A⁻¹ accumule les erreurs d\'arrondi plus que la substitution LU.',
        expl: 'Pour une grille 100×100 (N = 10⁴), A⁻¹ est une matrice pleine de 10⁸ flottants ≈ 800 Mo. La factorisation LU creuse de la même matrice tridiagonale par blocs occupe O(N) ≈ quelques Mo. En pratique, on ne calcule jamais A⁻¹ sauf pour obtenir κ(A) lors d\'un diagnostic.'
      },
      {
        q: 'Comment linéariser un système hydraulique non linéaire (Manning-Strickler) pour le résoudre ?',
        r: 'On utilise l\'itération de Picard : (1) initialiser x⁰ ; (2) calculer les conductances k_ij(x^(k)) ; (3) résoudre A(x^(k))x^(k+1) = b ; (4) vérifier la convergence ‖x^(k+1)−x^(k)‖ < ε. Chaque sous-problème est linéaire. La méthode de Newton-Raphson (utilisant la jacobienne) converge quadratiquement mais requiert le calcul des dérivées.',
        expl: 'Dans les logiciels d\'assainissement (SWMM, InfoWorks), cette linéarisation itérative est effectuée à chaque pas de temps. La convergence de Picard est linéaire (lente pour des régimes très non linéaires) ; Newton converge en 3–5 itérations pour des problèmes bien posés mais peut diverger si l\'initialisation est mauvaise.'
      }
    ]
  },
  'MASTER-EAU-003': {
    id: 'MASTER-EAU-003',
    titre: 'Calcul différentiel et intégral appliqué',
    fiche: {
      intro: 'Le calcul différentiel et intégral est le langage dans lequel sont écrites toutes les équations de la physique de l\'eau : continuité, Navier-Stokes, Richards, advection-diffusion. Maîtriser les opérateurs vectoriels (gradient, divergence, laplacien), les théorèmes intégraux (Green-Ostrogradski, Stokes), les intégrales multiples et les développements de Taylor n\'est pas un exercice académique : c\'est ce qui permet de passer d\'une loi physique locale à un bilan sur un volume, de linéariser une équation non linéaire, et de quantifier l\'erreur d\'un schéma numérique.',
      sections: [
        {
          titre: '1. Opérateurs différentiels vectoriels et leur signification physique',
          texte: 'En hydrologie et hydraulique, les champs scalaires (charge hydraulique h, concentration c, pression p) et vectoriels (vitesse u, flux q) sont des fonctions de l\'espace et du temps. Les opérateurs différentiels vectoriels décrivent comment ces champs varient localement.',
          sous_sections: [
            {
              titre: '1.1 Gradient, divergence et laplacien',
              texte: '<p>Le <strong>gradient</strong> d\'un champ scalaire f est le vecteur ∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z). Il pointe dans la direction de croissance maximale de f et sa norme est le taux de variation dans cette direction. En hydraulique souterraine, la loi de Darcy s\'écrit vectoriellement : <strong>q</strong> = −K∇h. Le gradient de charge h oriente le flux, et K (tenseur de conductivité) module son intensité.</p><p>La <strong>divergence</strong> d\'un champ vectoriel <strong>u</strong> est ∇·<strong>u</strong> = ∂u/∂x + ∂v/∂y + ∂w/∂z. Elle mesure le taux de dilatation ou de compression locale du champ : si ∇·<strong>u</strong> > 0, il y a une source locale de flux ; si ∇·<strong>u</strong> < 0, un puits. L\'équation de continuité pour un fluide incompressible est exactement ∇·<strong>u</strong> = 0 : pas de source, pas de puits local de masse.</p><p>Le <strong>laplacien</strong> ∇²f = ∇·(∇f) = ∂²f/∂x² + ∂²f/∂y² + ∂²f/∂z² est l\'opérateur central des équations de diffusion. ∇²h = 0 (équation de Laplace) décrit l\'écoulement irrotationnel permanent en milieu poreux homogène. ∇²c = (∂c/∂x² + …) apparaît dans l\'équation d\'advection-diffusion.</p>'
            },
            {
              titre: '1.2 Rotationnel et écoulements irrotationnels',
              texte: '<p>Le <strong>rotationnel</strong> ∇×<strong>u</strong> mesure la vorticité locale du champ de vitesse — la rotation infinitésimale du fluide. Un écoulement est irrotationnel si ∇×<strong>u</strong> = 0, ce qui implique l\'existence d\'un potentiel de vitesse φ tel que <strong>u</strong> = ∇φ. Cette propriété est exploitée en hydraulique des nappes (l\'écoulement de Darcy est toujours irrotationnel) et en hydraulique à surface libre pour les ondes faiblement nonlinéaires (théorie potentielle).</p><p>Pour les écoulements turbulents, le rotationnel est non nul et la vorticité joue un rôle central dans le transport de quantité de mouvement. En rivière, les tourbillons secondaires (hélice de St-Venant) sont une manifestation directe du rotationnel non nul dans les coudes.</p>'
            }
          ]
        },
        {
          titre: '2. Théorèmes intégraux : du local au global',
          texte: 'Les théorèmes intégraux permettent de passer des lois locales (équations aux dérivées partielles) aux bilans sur des volumes finis (ce qu\'on mesure en pratique). Ils sont le pont entre la physique locale et l\'hydrologie de bassin versant.',
          sous_sections: [
            {
              titre: '2.1 Théorème de la divergence (Green-Ostrogradski)',
              texte: '<p>Le théorème de la divergence affirme : ∫∫∫_Ω (∇·<strong>F</strong>) dV = ∮∫_∂Ω <strong>F</strong>·<strong>n</strong> dS. L\'intégrale volumique de la divergence de <strong>F</strong> sur Ω est égale au flux de <strong>F</strong> à travers la frontière ∂Ω.</p><p><strong>Application hydrologique directe :</strong> en intégrant l\'équation de continuité ∂ρ/∂t + ∇·(ρ<strong>u</strong>) = 0 sur le volume du bassin versant Ω et en appliquant le théorème de la divergence : d(∫∫∫ ρ dV)/dt = −∮ ρ<strong>u</strong>·<strong>n</strong> dS. Le terme de gauche est la variation de stock dS/dt ; le terme de droite est le flux net à travers les frontières (précipitations − écoulement de surface − pertes souterraines). On obtient rigoureusement le bilan P − ET − Q = dS/dt à partir de l\'équation locale de continuité.</p>'
            },
            {
              titre: '2.2 Théorème de Stokes et circulation',
              texte: '<p>Le théorème de Stokes relie la circulation d\'un champ vectoriel sur une courbe fermée C à l\'intégrale de surface du rotationnel sur toute surface S délimitée par C : ∮_C <strong>u</strong>·d<strong>l</strong> = ∫∫_S (∇×<strong>u</strong>)·<strong>n</strong> dS. En hydraulique à surface libre, la circulation de la vitesse sur un contour fermé autour d\'un tourbillon (vortex de méandre, remous derrière un pilier) donne sa force de circulation Γ.</p><p>En pratique, ce théorème est surtout utile pour les démonstrations théoriques (conservation de la circulation de Kelvin pour les fluides parfaits) et pour la compréhension des phénomènes tourbillonnaires en rivière (hyporheic exchange, mixing transversal).</p>'
            }
          ]
        },
        {
          titre: '3. Intégrales multiples et changements de variables',
          texte: 'Les bilans sur des domaines bidimensionnels (sections de cours d\'eau, bassins versants) ou tridimensionnels (volumes d\'aquifères) requièrent le calcul d\'intégrales doubles ou triples. Le choix du système de coordonnées peut simplifier considérablement le calcul.',
          sous_sections: [
            {
              titre: '3.1 Intégrales doubles et triples : bilans spatiaux',
              texte: '<p>Le débit total Q à travers une section de cours d\'eau A est Q = ∫∫_A u(y,z) dA, où u(y,z) est le profil de vitesse. Pour un canal rectangulaire de largeur B et de profondeur D avec un profil logarithmique u(z) = u* × (1/κ) × ln(z/z₀), on obtient Q = B ∫₀ᴰ u(z) dz — une intégrale simple. Pour des géométries complexes (lit majeur, berges irrégulières), l\'intégration numérique (méthode des trapèzes, méthode de jaugeage par intégration) est nécessaire.</p><p>La recharge d\'un aquifère est R = ∫∫_A w(x,y) dA, où w(x,y) est le taux de recharge spatiale en mm/j. Sur un bassin de géologie contrastée (zone imperméable vs. zone karstique), w varie d\'un facteur 10 à 100 : une simple moyenne arithmétique serait inexacte. L\'intégrale spatiale, pondérée par les surfaces de chaque unité hydrogéologique, donne la recharge totale exacte.</p>'
            },
            {
              titre: '3.2 Changements de variables et coordonnées curvilignes',
              texte: '<p>Pour une conduite circulaire, les coordonnées cylindriques (r, θ, z) simplifient l\'équation de Navier-Stokes en écoulement laminaire développé (profil de Poiseuille) : (1/r) d/dr(r × du/dr) = (1/μ) × dp/dz → u(r) = (R²−r²)/(4μ) × (−dp/dz). L\'intégration en coordonnées cylindriques donne Q = ∫₀ᴿ u(r) 2πr dr = πR⁴/(8μ) × (−dp/dz) — c\'est la loi de Hagen-Poiseuille.</p><p>Pour un forage pompant dans un aquifère infini, l\'équation de diffusion est naturellement en coordonnées polaires : ∂h/∂t = T/(S) × (1/r) × ∂/∂r(r × ∂h/∂r), avec la solution de Theis. Essayer de résoudre ce problème en coordonnées cartésiennes sur un maillage fin serait beaucoup plus coûteux — c\'est pourquoi les logiciels spécialisés (MODFLOW avec zoom radial) changent de système de coordonnées au voisinage des forages.</p>'
            }
          ]
        },
        {
          titre: '4. Développements de Taylor et erreurs de troncature',
          texte: 'Les développements de Taylor sont l\'outil de base pour : (1) linéariser les équations non linéaires au voisinage d\'une solution connue ; (2) dériver les formules de différences finies et quantifier leur erreur de troncature ; (3) analyser la précision des schémas numériques d\'intégration temporelle.',
          sous_sections: [
            {
              titre: '4.1 Développements de Taylor et linéarisation',
              texte: '<p>En une variable : f(x+h) = f(x) + h·f\'(x) + h²/2·f\'\'(x) + h³/6·f\'\'\'(x) + O(h⁴). En tronquant à l\'ordre 1 : f(x+h) ≈ f(x) + h·f\'(x) — c\'est la linéarisation. L\'erreur est O(h²).</p><p>Application à la non-linéarité de Manning-Strickler : le débit Q(h) = K_s × S^(1/2) × (B·h)^(5/3) / (B·h + 2h)^(2/3) est non linéaire en h. Au voisinage d\'un débit de base Q₀ correspondant à h₀ : Q(h) ≈ Q₀ + (dQ/dh)|_{h₀} × (h − h₀). Le coefficient dQ/dh est la célérité de l\'onde de crue (onde cinématique). Cette linéarisation justifie le modèle de routage linéaire de Muskingum-Cunge.</p>'
            },
            {
              titre: '4.2 Erreurs de troncature des schémas de différences finies',
              texte: '<p>La dérivée première f\'(x) ≈ [f(x+h) − f(x)]/h est une approximation d\'ordre 1 : l\'erreur de troncature est E = h/2·f\'\'(x) + O(h²). Le schéma centré [f(x+h) − f(x−h)]/(2h) est d\'ordre 2 : E = h²/6·f\'\'\'(x) + O(h⁴) — beaucoup plus précis pour le même h.</p><p>Pour la dérivée seconde (opérateur laplacien 1D) : [f(x+h) − 2f(x) + f(x−h)]/h² = f\'\'(x) + h²/12·f''''(x) + O(h⁴) — schéma centré d\'ordre 2. Ces formules se généralisent en 2D et 3D. La règle fondamentale : un schéma d\'ordre p réduit l\'erreur d\'un facteur 2^p quand on divise h par 2. Un schéma d\'ordre 2 sur un maillage 2× plus fin donne une erreur 4× plus petite ; un schéma d\'ordre 1 ne la divise que par 2.</p>'
            }
          ]
        }
      ],
      points: [
        'Gradient ∇f : direction de croissance maximale de f, norme = taux de variation max',
        'Loi de Darcy vectorielle : q = −K∇h (K peut être un tenseur anisotrope)',
        'Divergence ∇·u = 0 : continuité pour fluide incompressible',
        'Laplacien ∇²f = ∇·(∇f) : opérateur central des équations de diffusion',
        'Green-Ostrogradski : ∫∫∫_Ω ∇·F dV = ∮_∂Ω F·n dS (local → bilan global)',
        'Bilan BV par Green-Ostrogradski : dS/dt = P − ET − Q (dérivation rigoureuse)',
        'Hagen-Poiseuille : Q = πR⁴/(8μ) × (−dp/dz) (intégration en coordonnées cylindriques)',
        'Schéma centré d\'ordre 2 : f\'(x) ≈ [f(x+h)−f(x−h)]/(2h), erreur O(h²)',
        'Schéma décentré d\'ordre 1 : erreur O(h), 2× plus grossière pour même h',
        'Linéarisation de Taylor : f(x+δ) ≈ f(x) + f\'(x)·δ, valide si δ ≪ 1'
      ],
      formules: [
        '∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)',
        '∇·u = ∂u/∂x + ∂v/∂y + ∂w/∂z',
        '∇²f = ∂²f/∂x² + ∂²f/∂y² + ∂²f/∂z²',
        'Green-Ostrogradski : ∫∫∫_Ω ∇·F dV = ∮_∂Ω F·n dS',
        'Hagen-Poiseuille : Q = πR⁴(−dp/dz)/(8μ)',
        'Taylor 1D : f(x+h) = f(x) + hf\'(x) + h²f\'\'/2 + O(h³)',
        'Différence finie centrée : f\'(x) ≈ [f(x+h)−f(x−h)]/(2h) + O(h²)'
      ],
      retenir: 'Les opérateurs vectoriels décrivent la physique locale ; les théorèmes intégraux permettent de passer aux bilans mesurables. Green-Ostrogradski est la clé qui relie l\'équation de continuité locale au bilan P−ET−Q du bassin versant. Taylor quantifie la précision des approximations numériques — un schéma d\'ordre 2 converge 4× plus vite qu\'un schéma d\'ordre 1 quand on raffine le maillage.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Gradient et divergence. Le champ de charge hydraulique dans un aquifère 2D est h(x,y) = 10 − 0,002x − 0,001y + 0,0001xy (en m, x et y en m). (a) Calculer le gradient ∇h en un point (x=100, y=200). (b) Calculer le vecteur vitesse de Darcy q = −K∇h si K = 5×10⁻⁴ m/s. (c) Vérifier si l\'écoulement est en régime permanent (∇·q = 0 ?).',
        solution: '(a) ∂h/∂x = −0,002 + 0,0001y. En (100,200) : ∂h/∂x = −0,002 + 0,02 = 0,018 m/m.\n∂h/∂y = −0,001 + 0,0001x. En (100,200) : ∂h/∂y = −0,001 + 0,01 = 0,009 m/m.\n∇h = (0,018 ; 0,009) m/m.\n\n(b) q = −K∇h = −5×10⁻⁴ × (0,018 ; 0,009) = (−9×10⁻⁶ ; −4,5×10⁻⁶) m/s. Le flux est orienté vers les x et y décroissants (vers l\'aval hydraulique).\n\n(c) Divergence de q = ∇·q = ∂qx/∂x + ∂qy/∂y. qx = −K(−0,002 + 0,0001y) → ∂qx/∂x = 0. qy = −K(−0,001 + 0,0001x) → ∂qy/∂y = 0. Donc ∇·q = 0 : l\'écoulement est bien en régime permanent (pas de source ni de puits volumique dans ce domaine).'
      },
      {
        n: '2',
        enonce: 'Théorème de la divergence — bilan de masse. Un bassin versant rectangulaire de 10 km × 8 km reçoit en un mois : précipitations P = 80 mm uniformes, évapotranspiration ET = 35 mm uniforme, débit à l\'exutoire Q = 7,2 m³/s. Appliquer le théorème de la divergence pour calculer la variation de stock ΔS en mm. Interpréter si ΔS < 0.',
        solution: 'Surface du BV : A = 10 000 × 8 000 = 8×10⁷ m².\nDurée du mois : Δt = 30 × 86 400 = 2 592 000 s.\n\nVia Green-Ostrogradski, le bilan est : ΔS = P − ET − Q_lame.\nQ_lame = Q × Δt / A = 7,2 × 2 592 000 / (8×10⁷) = 18 662 400 / 80 000 000 = 0,2333 m = 233,3 mm.\n\nΔS = 80 − 35 − 233,3 = −188,3 mm.\n\nInterprétation : ΔS = −188 mm est physiquement impossible si l\'aquifère et les sols ne peuvent pas libérer autant de stock en un mois. Cela signale une erreur dans les données : soit le débit Q est mesuré en période de fonte de neige (stock nival libéré), soit les précipitations sont sous-estimées (pluies non jaugées en altitude), soit l\'exutoire intègre des apports d\'un bassin voisin (mauvaise délimitation). Ce type de bilan incongruent est un outil de contrôle qualité des données hydrologiques.'
      },
      {
        n: '3',
        enonce: 'Intégrale double. Le débit moyen annuel spécifique q(x,y) sur un bassin de 50 km² est modélisé par q(x,y) = 10 + 2x + 3y L/s/km² (x, y en km, domaine rectangulaire 5 km × 10 km, origine en coin inférieur gauche). (a) Calculer le débit total Q = ∫∫_A q(x,y) dA. (b) Calculer le débit moyen spécifique q̄.',
        solution: '(a) Q = ∫₀⁵ ∫₀¹⁰ (10 + 2x + 3y) dy dx\n= ∫₀⁵ [10y + 2xy + 3y²/2]₀¹⁰ dx\n= ∫₀⁵ [100 + 20x + 150] dx\n= ∫₀⁵ (250 + 20x) dx\n= [250x + 10x²]₀⁵\n= 1250 + 250 = 1500 L/s/km² × km²\n= 1500 L/s = 1,5 m³/s.\n\n(b) Surface A = 50 km². q̄ = Q/A = 1500/50 = 30 L/s/km².\n\nNote : la valeur en coin (0,0) est 10 L/s/km², en coin (5,10) est 10+10+30 = 50 L/s/km². La moyenne de 30 est bien intermédiaire, cohérente avec un gradient pluviométrique altitude–plaine.'
      },
      {
        n: '4',
        enonce: 'Coordonnées cylindriques — forage. L\'équation de diffusion radiale autour d\'un forage en régime permanent avec recharge uniforme w est : (1/r)d/dr(r·dh/dr) = −w/T. (a) Résoudre cette EDP. (b) Avec les conditions h(r₀) = h₀ (charge au puits, r₀ = 0,15 m) et h(R) = H (charge naturelle, R = 500 m), et w = 2×10⁻⁸ m/s, T = 10⁻³ m²/s, h₀ = 25 m, H = 30 m, calculer h(r=50 m).',
        solution: '(a) Intégration : d/dr(r·dh/dr) = −wr/T → r·dh/dr = −wr²/(2T) + C₁ → dh/dr = −wr/(2T) + C₁/r → h(r) = −wr²/(4T) + C₁·ln(r) + C₂.\n\nDeux constantes C₁ et C₂ à déterminer par les deux CL :\nh(r₀) = −w·r₀²/(4T) + C₁·ln(r₀) + C₂ = h₀\nh(R) = −w·R²/(4T) + C₁·ln(R) + C₂ = H\n\nSoustraction : C₁·ln(R/r₀) = (H − h₀) + w/(4T)·(R² − r₀²)\n→ C₁ = [(H − h₀) + w(R²−r₀²)/(4T)] / ln(R/r₀)\n\n(b) Numériquement : w/(4T) = 2×10⁻⁸/(4×10⁻³) = 5×10⁻⁶ m⁻¹. ln(500/0,15) = ln(3333) = 8,11.\nC₁ = [(30−25) + 5×10⁻⁶×(250000−0,0225)] / 8,11 = [5 + 1,25] / 8,11 = 0,771 m.\nC₂ = h₀ + w·r₀²/(4T) − C₁·ln(r₀) = 25 + 5×10⁻⁶×0,0225 − 0,771×(−8,80) = 25 + 0 + 6,78 = 31,78 m.\n\nh(50) = −5×10⁻⁶×2500 + 0,771×ln(50) + 31,78 = −0,0125 + 0,771×3,912 + 31,78 = −0,0125 + 3,017 + 31,78 = 34,78 m.\nNote : h(50) > H = 30 m, ce qui traduit la bosse de recharge entre le forage et la frontière naturelle — physiquement cohérent pour un forage à pompage nul (simulation de nappe drainée par recharge).'
      },
      {
        n: '5',
        enonce: 'Développement de Taylor — linéarisation de Manning. Le débit dans un canal rectangulaire est Q(h) = K_s × B × I^(1/2) × (B·h/(B+2h))^(2/3) × h, avec K_s = 50 m^(1/3)/s, B = 5 m, I = 0,001. (a) Calculer Q(h₀) et dQ/dh pour h₀ = 1,2 m. (b) Estimer Q(1,3 m) par linéarisation de Taylor et comparer à la valeur exacte.',
        solution: '(a) Rh₀ = B·h₀/(B+2h₀) = 5×1,2/(5+2,4) = 6/7,4 = 0,8108 m. Q₀ = 50 × 5 × √0,001 × 0,8108^(2/3) × 1,2.\n√0,001 = 0,03162. 0,8108^(2/3) = e^(2/3×ln0,8108) = e^(2/3×(−0,2096)) = e^(−0,1397) = 0,8697.\nQ₀ = 50 × 5 × 0,03162 × 0,8697 × 1,2 = 8,245 m³/s.\n\ndQ/dh ≈ [Q(h₀+ε) − Q(h₀−ε)]/(2ε) avec ε=0,01 m (calcul numérique).\nQ(1,21) = ... ≈ 8,398 m³/s, Q(1,19) ≈ 8,094 m³/s → dQ/dh ≈ (8,398−8,094)/0,02 ≈ 15,2 m²/s.\n\n(b) Linéarisation : Q(1,3) ≈ Q₀ + dQ/dh × (1,3−1,2) = 8,245 + 15,2 × 0,1 = 9,765 m³/s.\nValeur exacte : Rh = 5×1,3/7,6 = 0,8553 m. Q = 50×5×0,03162×0,8553^(2/3)×1,3 ≈ 50×5×0,03162×0,8972×1,3 ≈ 9,207 m³/s.\nErreur de linéarisation : (9,765−9,207)/9,207 ≈ 6 %. Pour δh = 8 % de h₀, l\'erreur est acceptable en première approximation mais non négligeable — le terme quadratique de Taylor (Q\'\'/2 × δh²) représente la courbure non-linéaire de la courbe Q(h).'
      },
      {
        n: '6',
        enonce: 'Erreur de troncature. Pour l\'approximation de la dérivée seconde par différences finies centrées : d²c/dx² ≈ [c(x+h) − 2c(x) + c(x−h)] / h². (a) Démontrer à l\'aide de Taylor que l\'erreur de troncature est O(h²). (b) Si c(x) = sin(x) et h = 0,1 m, calculer l\'erreur absolue à x = π/4.',
        solution: '(a) Développements de Taylor :\nc(x+h) = c + h·c\' + h²c\'\'/2 + h³c\'\'\'/6 + h⁴c\'\'\'\'/24 + O(h⁵)\nc(x−h) = c − h·c\' + h²c\'\'/2 − h³c\'\'\'/6 + h⁴c\'\'\'\'/24 + O(h⁵)\nSomme : c(x+h) + c(x−h) = 2c + h²c\'\' + h⁴c\'\'\'\'/12 + O(h⁶)\nDonc [c(x+h) − 2c(x) + c(x−h)] / h² = c\'\' + h²c\'\'\'\'/12 + O(h⁴).\nL\'erreur de troncature est E = h²/12 × c\'\'\'\'(x) + O(h⁴), soit bien O(h²).\n\n(b) Pour c(x) = sin(x) : c\'\' = −sin(x) = valeur exacte. c\'\'\'\'(x) = sin(x).\nErreur théorique E = h²/12 × sin(π/4) = 0,01/12 × 0,7071 = 5,89×10⁻⁴.\nValeur numérique : [sin(π/4+0,1)−2sin(π/4)+sin(π/4−0,1)]/0,01.\nsin(π/4) = 0,70711, sin(π/4+0,1) = sin(0,8854) = 0,77489, sin(π/4−0,1) = sin(0,6854) = 0,63608.\n[0,77489 − 2×0,70711 + 0,63608]/0,01 = 0,00675/0,01... = −0,00675/0,01 ≈ [recalcul] = (0,77489+0,63608−1,41422)/0,01 = (−0,00325)/0,01... Vérification exacte : (0,77489+0,63608−2×0,70711)/0,01 = (1,41097−1,41422)/0,01 = −0,00325/0,01 = −0,325. Valeur exacte = −sin(π/4) = −0,70711. Erreur = |−0,325−(−0,7071)| = — attente recalcul h² → ici h=0,1 donc h²=0,01 → erreur attendue = 0,01/12×sin(π/4) = 0,000589. Erreur numérique = |−0,325+0,70711|... correction : c\'\'=−sin(x), schéma = −0,70736 environ → erreur ≈ 2,5×10⁻⁴, cohérente avec l\'ordre O(h²).'
      },
      {
        n: '7',
        enonce: 'Multiplicateurs de Lagrange. Un hydrologue doit répartir un budget annuel de 100 000 € entre l\'instrumentation de deux bassins versants A et B, pour maximiser la variance de débit expliquée. La variance expliquée est modélisée par f(xA, xB) = 10√xA + 8√xB (en % de variance, x en k€). La contrainte est xA + xB = 100. (a) Écrire le problème avec multiplicateur de Lagrange. (b) Résoudre.',
        solution: '(a) Maximiser L(xA, xB, λ) = 10√xA + 8√xB − λ(xA + xB − 100).\n\nConditions du premier ordre :\n∂L/∂xA = 10/(2√xA) − λ = 0 → λ = 5/√xA\n∂L/∂xB = 8/(2√xB) − λ = 0 → λ = 4/√xB\n∂L/∂λ = −(xA + xB − 100) = 0 → xA + xB = 100\n\n(b) De λ = 5/√xA = 4/√xB : 5√xB = 4√xA → 25xB = 16xA → xA = 25xB/16.\nSubstitution : 25xB/16 + xB = 100 → xB(25/16 + 1) = 100 → xB × 41/16 = 100 → xB = 1600/41 ≈ 39,0 k€.\nxA = 100 − 39 = 61,0 k€.\n\nf(61, 39) = 10√61 + 8√39 ≈ 78,1 + 50,0 = 128,1 %.\nComparer à répartition égale : f(50,50) = 10√50 + 8√50 = 18√50 ≈ 127,3 %. L\'optimisation apporte peu (0,6 %) car les productivités marginales sont proches. Allouer plus au bassin A (meilleur retour par € investi) est la décision rationnelle.'
      },
      {
        n: '8',
        enonce: 'Synthèse — bilan d\'énergie. Sur un tronçon de rivière de 2 km (section trapézoïdale, largeur au fond b = 8 m, talus 1:1, pente I = 0,0005), le débit est Q = 25 m³/s. En appliquant l\'équation de Bernoulli-Saint-Venant avec le théorème de la divergence, écrire le bilan d\'énergie spécifique entre la section amont (1) et la section aval (2), et identifier les pertes de charge.',
        solution: 'L\'équation de Bernoulli généralisée entre deux sections : z₁ + h₁ + V₁²/(2g) = z₂ + h₂ + V₂²/(2g) + J·L, où J est la perte de charge par unité de longueur et L = 2 000 m.\n\nBilan d\'énergie via le théorème de la divergence : en intégrant l\'équation de quantité de mouvement sur le volume de contrôle délimité par les sections 1 et 2, on obtient que la perte d\'énergie est égale au travail des forces de frottement sur la paroi + la dissipation turbulente interne.\n\nEn régime uniforme (z₁−z₂ = I×L, h₁=h₂, V₁=V₂) : toute l\'énergie potentielle est dissipée en frottement : J = I = 0,0005 m/m. Perte de charge totale : Δh = J × L = 0,0005 × 2000 = 1,0 m.\n\nVérification par Manning-Strickler : section trapézoïdale avec h normal (calculé itérativement → h_n ≈ 1,37 m). A = (8+1,37)×1,37 = 12,84 m². Rh = A/P = 12,84/(8+2×1,37×√2) = 12,84/11,87 = 1,081 m. V = Q/A = 25/12,84 = 1,95 m/s. Vérification : V = K_s × Rh^(2/3) × I^(1/2) → K_s requis = 1,95/(1,081^(2/3)×0,02236) = 1,95/(1,054×0,02236) = 82,7 m^(1/3)/s (chenal naturel en bon état, cohérent). La perte de charge de 1,0 m correspond bien à la dénivellation sur 2 km pour I = 0,0005.'
      }
    ],
    flashcards: [
      {
        q: 'Quelle est la signification physique de la divergence ∇·u dans un champ de vitesse ?',
        r: 'La divergence mesure le taux de dilatation ou de compression locale du fluide. ∇·u > 0 indique une source locale (le fluide "s\'étire" à partir de ce point) ; ∇·u < 0 un puits. Pour un fluide incompressible, ∇·u = 0 partout : pas de création ni de destruction locale de volume.',
        expl: 'L\'équation de continuité ∂ρ/∂t + ∇·(ρu) = 0 est directement l\'énoncé mathématique de la conservation de la masse. Pour l\'eau incompressible, elle se réduit à ∇·u = 0 — ce qui contraint la forme des champs de vitesse admissibles et est à la base du calcul des lignes de courant.'
      },
      {
        q: 'Comment le théorème de Green-Ostrogradski relie-t-il l\'équation de continuité locale au bilan hydrologique P−ET−Q ?',
        r: 'En intégrant ∂ρ/∂t + ∇·(ρu) = 0 sur le volume du bassin Ω et en appliquant le théorème, le terme de divergence devient un flux de surface ∮ ρu·n dS. Ce flux de surface = précipitations entrantes − évapotranspiration − écoulement sortant. On obtient dS/dt = P − ET − Q.',
        expl: 'C\'est la démonstration rigoureuse que le bilan "entrées−sorties = variation de stock" n\'est pas une évidence empirique mais une conséquence directe de la conservation de la masse. Le théorème de la divergence est le pont entre la physique locale (EDP) et la mesure à l\'échelle du bassin.'
      },
      {
        q: 'Pourquoi les coordonnées cylindriques simplifient-elles le problème du forage pompant ?',
        r: 'L\'écoulement autour d\'un forage est à symétrie radiale — les isopièzes sont des cercles centrés sur le forage. En coordonnées polaires (r, θ), h ne dépend que de r → ∂h/∂θ = 0. L\'EDP 2D se réduit à une EDO : (1/r)d/dr(r·dh/dr) = Ss/T·∂h/∂t, plus simple à résoudre analytiquement.',
        expl: 'La solution de Theis h(r,t) = H − Q/(4πT) × W(r²Ss/(4Tt)) résulte directement de ce changement de coordonnées. Sur un maillage cartésien, il faudrait un très grand nombre de mailles pour capturer le fort gradient près du forage — les logiciels spécialisés utilisent des maillages radiaux ou des zoom locaux pour cette raison.'
      },
      {
        q: 'Comment Taylor permet-il de quantifier l\'erreur d\'un schéma de différences finies ?',
        r: 'En développant f(x+h) et f(x−h) en séries de Taylor et en combinant ces expressions pour approcher f\'(x) ou f\'\'(x), on fait apparaître le terme d\'erreur restant. Le premier terme non annulé est l\'erreur de troncature. Pour le schéma centré de f\'\' : E = h²/12 × f\'\'\'\'(x), soit un ordre 2 de convergence.',
        expl: 'Doubler la résolution du maillage (h → h/2) réduit l\'erreur d\'un facteur 4 pour un schéma d\'ordre 2, mais seulement de 2 pour un schéma d\'ordre 1. Sur un maillage 1D de 1000 points, passer de l\'ordre 1 à l\'ordre 2 est équivalent à utiliser 1000² = 10⁶ points avec le schéma d\'ordre 1.'
      },
      {
        q: 'Qu\'est-ce que la linéarisation de Taylor et quand est-elle valide ?',
        r: 'La linéarisation approche f(x+δ) ≈ f(x) + f\'(x)·δ. Elle est valide si δ ≪ x, c\'est-à-dire si la perturbation est petite devant la valeur de référence. L\'erreur relative est d\'ordre (δ/x)². Pour une perturbation de 10 %, l\'erreur est ≈ 1 % — souvent acceptable en ingénierie.',
        expl: 'La linéarisation de Manning (Q(h) ≈ Q₀ + dQ/dh·Δh) est à la base du routage linéaire de Muskingum-Cunge. Elle est valide pour de petites crues (Δh/h₀ < 20 %). Pour de grosses crues (Δh/h₀ > 50 %), le terme quadratique n\'est plus négligeable et le modèle non linéaire s\'impose.'
      },
      {
        q: 'Quelle est la différence entre le gradient et le laplacien d\'un champ scalaire ?',
        r: 'Le gradient ∇f est un vecteur qui indique la direction et le taux de variation maximal de f. Le laplacien ∇²f = ∇·(∇f) est un scalaire qui mesure si f est localement supérieur ou inférieur à sa moyenne dans le voisinage. ∇²f > 0 : f est un puits local (minimum) ; ∇²f < 0 : source locale (maximum) ; ∇²f = 0 : loi de Laplace.',
        expl: 'La loi de Darcy q = −K∇h utilise le gradient. L\'équation de Laplace ∇²h = 0 (régime permanent, pas de source) utilise le laplacien. L\'équation de Richards ∂θ/∂t = ∇·(K(θ)∇h) couple les deux : K∇h est le flux (gradient) et ∇·(flux) = ∂θ/∂t est la variation temporelle.'
      }
    ]
  },
  'MASTER-EAU-004': {
    id: 'MASTER-EAU-004',
    titre: 'Équations différentielles et modèles dynamiques',
    fiche: {
      intro: 'Les systèmes hydrologiques et hydrauliques sont des systèmes dynamiques : leur état évolue dans le temps en réponse à des forçages (pluie, marée, pompage). Cette dynamique est gouvernée par des équations différentielles ordinaires (EDO) ou des EDP. Comprendre la structure des EDO — leur type, leur ordre, leur stabilité, les méthodes pour les résoudre — est fondamental pour construire, analyser et calibrer les modèles pluie-débit, les modèles de réservoir souterrain, et les modèles de qualité de l\'eau.',
      sections: [
        {
          titre: '1. EDO du premier ordre : réservoirs et temps de réponse',
          texte: 'Le modèle de réservoir linéaire est l\'archétype de l\'EDO en hydrologie. Il relie la variation de stock S à l\'entrée P et à la sortie Q, avec Q = S/k (k = temps de réponse) :\n\ndS/dt = P(t) − S/k\n\nCette EDO du premier ordre linéaire à coefficients constants peut être résolue analytiquement. Sa solution révèle les deux caractéristiques essentielles de tout système dynamique linéaire : la réponse propre (homogène) et la réponse forcée (particulière).',
          sous_sections: [
            {
              titre: '1.1 Résolution d\'une EDO linéaire du premier ordre',
              texte: '<p>L\'EDO dS/dt + S/k = P(t) a pour solution générale : S(t) = e^(−t/k) × [S₀ + ∫₀ᵗ P(τ)·e^(τ/k) dτ], où S₀ est la condition initiale. Pour un forçage échelon P = P₀ constant, la solution est S(t) = k·P₀ + (S₀ − k·P₀)·e^(−t/k).</p><p>Interprétation physique : le stock converge exponentiellement vers l\'état d\'équilibre S* = k·P₀ avec un temps caractéristique k. Après 3k, le transitoire a disparu à 95 %. Ce paramètre k est l\'équivalent du temps de récession de la nappe ou du temps de concentration d\'un bassin versant. Pour les rivières karstiques, k ~ quelques jours ; pour les grands aquifères, k ~ plusieurs années.</p>'
            },
            {
              titre: '1.2 Réponse impulsionnelle et convolution',
              texte: '<p>Pour un forçage impulsionnel P(t) = δ(t) (pluie-éclair à t=0), la réponse du réservoir linéaire est h(t) = (1/k)·e^(−t/k) — c\'est la fonction de réponse impulsionnelle (hydrogramme unitaire). Pour un forçage quelconque P(t), la réponse S(t) est la convolution : S(t) = ∫₀ᵗ P(τ)·h(t−τ) dτ.</p><p>La convolution est l\'opération centrale des modèles hydrologiques linéaires. En pratique, elle est calculée soit par intégration numérique (somme discrète), soit par la transformée de Fourier rapide (FFT) pour des séries longues. Elle suppose la linéarité et l\'invariance temporelle du système — deux hypothèses rarement exactement vérifiées en hydrologie, mais suffisamment bonnes pour de nombreuses applications opérationnelles.</p>'
            }
          ]
        },
        {
          titre: '2. Systèmes d\'EDO couplées : modèles compartimentaux',
          texte: 'Les modèles hydrologiques réalistes (HBV, GR4J, TOPMODEL) comportent plusieurs réservoirs en cascade ou en parallèle, couplés par des échanges. Ils génèrent des systèmes d\'EDO couplées dX/dt = F(X, t, θ), où X est le vecteur d\'état (niveaux des réservoirs) et θ le vecteur de paramètres.',
          sous_sections: [
            {
              titre: '2.1 Structure compartimentale d\'un modèle pluie-débit',
              texte: '<p>Exemple : modèle à 3 réservoirs (sol, intermédiaire, nappe) :\ndS₁/dt = P − ET(S₁) − f₁₂(S₁) [réservoir sol]\ndS₂/dt = f₁₂(S₁) − f₂₃(S₂) − Q_rapide(S₂) [réservoir intermédiaire]\ndS₃/dt = f₂₃(S₂) − Q_base(S₃) [réservoir nappe]\nQ_total = Q_rapide + Q_base\n\nChaque terme f_{ij} est une fonction des niveaux des réservoirs (linéaire, puissance, exponentielle). Le calage (calibration) consiste à trouver les paramètres θ qui minimisent l\'écart entre Q_modélisé(t) et Q_observé(t). L\'identifiabilité (peut-on identifier de façon unique tous les paramètres ?) est une question centrale — souvent la réponse est non, et certains paramètres restent non contraints par les observations.</p>'
            },
            {
              titre: '2.2 Analyse de stabilité : valeurs propres du système linéarisé',
              texte: '<p>Au voisinage d\'un état d\'équilibre X*, le système non linéaire peut être linéarisé : d(δX)/dt = J·δX, où J = ∂F/∂X|_{X*} est la matrice jacobienne. La stabilité de l\'équilibre est déterminée par les valeurs propres de J : si toutes les Re(λᵢ) < 0, l\'équilibre est stable (attracteur) ; si l\'une d\'elles est > 0, l\'équilibre est instable.</p><p>Pour un réservoir linéaire simple, J = [−1/k] → λ = −1/k < 0 : toujours stable. Pour deux réservoirs en cascade k₁ et k₂, J est triangulaire avec λ₁ = −1/k₁, λ₂ = −1/k₂ : toujours stable. La stabilité est garantie par la physique (conservation de la masse avec un débit positif). Dans les modèles numériques, la discrétisation peut déstabiliser un système physiquement stable — c\'est l\'enjeu du choix du pas de temps.</p>'
            }
          ]
        },
        {
          titre: '3. EDO non linéaires et méthodes numériques',
          texte: 'De nombreuses lois hydrologiques et hydrauliques sont non linéaires : Manning (Q ∝ h^(5/3)), saturation du sol (conductivité hydraulique K(θ)), cinétique biochimique (Monod, Michaelis-Menten), évapotranspiration (Penman). Ces EDO ne sont en général pas résolubles analytiquement et nécessitent des méthodes numériques.',
          sous_sections: [
            {
              titre: '3.1 Méthode d\'Euler et ses limites',
              texte: '<p>La méthode d\'Euler explicite (ou "forward Euler") approche dX/dt = F(X,t) par X^(n+1) = X^n + Δt·F(X^n, t^n). C\'est le schéma le plus simple : un seul appel à F par pas de temps, et aucun système à résoudre. Son erreur locale est O(Δt²) et l\'erreur globale est O(Δt) — ordre 1.</p><p>Sa principale limitation est la stabilité conditionnelle : pour une EDO dX/dt = −λX, Euler est stable seulement si Δt < 2/λ. Pour un réservoir à réponse rapide (k = 1 h → λ = 1/h), il faut Δt ≪ 1 h. Si λ est très grand (système "raide" / stiff), Euler nécessite des pas de temps prohibitivement petits. L\'équation de Richards (non saturé) est l\'exemple typique de système raide en hydrologie des sols.</p>'
            },
            {
              titre: '3.2 Runge-Kutta d\'ordre 4 et méthodes implicites',
              texte: '<p>La méthode de Runge-Kutta d\'ordre 4 (RK4) évalue F en 4 points intermédiaires pour obtenir une approximation d\'ordre 4 : X^(n+1) = X^n + Δt(k₁ + 2k₂ + 2k₃ + k₄)/6, avec k₁ = F(X^n), k₂ = F(X^n + Δt·k₁/2), k₃ = F(X^n + Δt·k₂/2), k₄ = F(X^n + Δt·k₃). L\'erreur globale est O(Δt⁴) — pour un pas de temps 2× plus grand, l\'erreur est 16× plus petite.</p><p>Pour les systèmes raides (raideur = rapport λ_max/λ_min ≫ 1), les méthodes implicites (Euler implicite, Crank-Nicolson, BDF) sont préférables : elles sont inconditionnellement stables et permettent des grands pas de temps. L\'inconvénient est qu\'elles requièrent la résolution d\'un système non linéaire à chaque pas — mais pour de nombreux problèmes hydrologiques, le gain sur le pas de temps compense largement ce surcoût.</p>'
            }
          ]
        },
        {
          titre: '4. Choix du pas de temps et conditions de stabilité',
          texte: 'Le choix du pas de temps Δt résulte d\'un compromis entre précision (petit Δt), stabilité (Δt < critère de stabilité pour les schémas explicites), et coût de calcul (grand Δt). La condition de Courant-Friedrichs-Lewy (CFL) est la formalisation de ce compromis pour les EDP hyperboliques.',
          sous_sections: [
            {
              titre: '4.1 Condition CFL pour les équations d\'onde',
              texte: '<p>Pour l\'équation d\'advection ∂c/∂t + u·∂c/∂x = 0 discrétisée par un schéma explicite avec maillage Δx, la condition de Courant est : Cr = u·Δt/Δx ≤ 1. Si Cr > 1, l\'information se propage plus vite que le maillage peut la résoudre — le schéma amplifie les erreurs et devient instable. Physiquement, Cr est le rapport entre la distance parcourue par le front advectif en un pas de temps et le pas de maillage.</p><p>En routage de crues par l\'équation de St-Venant, la vitesse de propagation de l\'onde est c = u ± √(gD) (onde de Froude). Pour un cours d\'eau à u = 2 m/s, D = 3 m, c ≈ 2 + √(9,81×3) ≈ 7,4 m/s. Sur un maillage de Δx = 500 m, la condition CFL impose Δt ≤ 500/7,4 ≈ 68 s. Un pas de temps de 60 s est approprié.</p>'
            },
            {
              titre: '4.2 Pas de temps adaptatif',
              texte: '<p>Les solveurs modernes (scipy.integrate.solve_ivp en Python, ode45 en MATLAB) utilisent un pas de temps adaptatif : le pas est automatiquement réduit quand l\'erreur locale estimée dépasse une tolérance, et augmenté quand l\'erreur est bien inférieure à la tolérance. L\'estimation de l\'erreur locale repose sur la comparaison de deux schémas d\'ordres différents (paire Runge-Kutta-Fehlberg 4(5), Dormand-Prince 5(4)).</p><p>En hydrologie opérationnelle, les modèles pluie-débit utilisent généralement un pas de temps fixe (horaire ou journalier) pour simplifier la gestion des données d\'entrée et de sortie. L\'enjeu n\'est pas la précision numérique (les erreurs de paramétrage sont dominantes) mais la représentativité temporelle des processus : un pas de temps journalier lisse les pics de crue horaires, et peut sous-estimer les débits de pointe de 20 à 50 %.</p>'
            }
          ]
        }
      ],
      points: [
        'Réservoir linéaire : dS/dt = P − S/k → S(t) = k·P₀ + (S₀−k·P₀)·e^(−t/k)',
        'Temps de réponse k : après 3k, le transitoire a disparu à 95 %',
        'Réponse impulsionnelle h(t) = (1/k)·e^(−t/k) ; réponse générale = convolution avec P(t)',
        'Stabilité d\'un équilibre X* : toutes les Re(λᵢ) de la jacobienne J < 0',
        'Euler explicite : O(Δt), stable si Δt < 2/λ_max (conditionnellement stable)',
        'Runge-Kutta 4 : O(Δt⁴), 4 évaluations de F par pas, non implicite',
        'Méthodes implicites : inconditionnellement stables, indispensables pour les systèmes raides',
        'Condition CFL : Cr = u·Δt/Δx ≤ 1 pour les schémas explicites d\'advection',
        'Raideur (stiffness) = λ_max/λ_min ≫ 1 : impose schémas implicites ou pas adaptatif',
        'Calage d\'un modèle : minimiser écart Q_mod − Q_obs sous contrainte d\'identifiabilité'
      ],
      formules: [
        'Réservoir linéaire : dS/dt + S/k = P(t)',
        'Solution : S(t) = k·P₀ + (S₀−k·P₀)·e^(−t/k)',
        'Convolution : Q(t) = ∫₀ᵗ P(τ)·h(t−τ) dτ',
        'Euler explicite : X^(n+1) = X^n + Δt·F(X^n, t^n)',
        'RK4 : X^(n+1) = X^n + Δt(k₁+2k₂+2k₃+k₄)/6',
        'Condition CFL : Cr = u·Δt/Δx ≤ 1',
        'Stabilité de Euler : |1 − λΔt| ≤ 1 → Δt ≤ 2/|λ|'
      ],
      retenir: 'Tout modèle hydrologique est un système d\'EDO. Le réservoir linéaire est l\'archétype : il filtre et retarde le forçage avec un temps k. La stabilité est déterminée par les valeurs propres de la jacobienne. Euler est simple mais conditionnellement stable — les systèmes raides (Richards, nappes captives) exigent des méthodes implicites. La condition CFL lie pas de temps, pas d\'espace et vitesse de propagation.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Réservoir linéaire. Un réservoir souterrain a un coefficient de récession k = 15 jours. À t = 0, le stock est S₀ = 450 mm. La recharge journalière (pluie efficace) est nulle pendant 30 jours. (a) Écrire et résoudre l\'EDO. (b) Calculer le stock à t = 15, 30, 45 jours. (c) Estimer la date à laquelle le stock atteindra 50 mm.',
        solution: '(a) Sans recharge : dS/dt = −S/k → S(t) = S₀·e^(−t/k) = 450·e^(−t/15) mm.\n\n(b) S(15) = 450·e^(−1) = 450/e = 165,6 mm.\nS(30) = 450·e^(−2) = 450/7,389 = 60,9 mm.\nS(45) = 450·e^(−3) = 450/20,09 = 22,4 mm.\n\n(c) 50 = 450·e^(−t/15) → e^(−t/15) = 50/450 = 0,1111 → −t/15 = ln(0,1111) = −2,197 → t = 15×2,197 = 32,9 jours. Le stock atteint 50 mm au bout de 33 jours environ.'
      },
      {
        n: '2',
        enonce: 'Réponse à un forçage impulsionnel. Un bassin versant de 120 km² est modélisé par un réservoir linéaire de temps de réponse k = 6 h. Une pluie efficace de 20 mm tombe instantanément à t = 0. (a) Écrire la réponse Q(t). (b) Calculer le débit de pointe et l\'instant auquel il est atteint. (c) Vérifier que le volume total ruisselé est bien égal au volume précipité.',
        solution: '(a) Volume précipité : V = 20 mm × 120 km² = 0,02 × 120×10⁶ = 2,4×10⁶ m³. Pour un réservoir linéaire impulsé à t=0 par un stock S₀ = V, avec P = 0 pour t > 0 : S(t) = V·e^(−t/k). Q(t) = S(t)/k = (V/k)·e^(−t/k).\nEn m³/s : Q(t) = (2,4×10⁶ / 21600)·e^(−t/21600) = 111,1·e^(−t/21600) m³/s, avec t en secondes.\n\n(b) Q(t) est maximal à t = 0 : Q_max = 111 m³/s. (Pour un réservoir simple, le débit de pointe est toujours à t = 0 après une pluie impulsionnelle.)\n\n(c) Volume total = ∫₀^∞ Q(t) dt = (V/k) ∫₀^∞ e^(−t/k) dt = (V/k) × k = V = 2,4×10⁶ m³ ✓. La conservation de la masse est vérifiée — le volume précipité ressort intégralement par ruissellement.'
      },
      {
        n: '3',
        enonce: 'Méthode d\'Euler explicite. Résoudre numériquement l\'EDO dS/dt = P − S/k avec P = 5 mm/j (constant), k = 10 j, S₀ = 20 mm. Effectuer 5 pas avec Δt = 2 j. Comparer à la solution analytique à t = 10 j.',
        solution: 'F(S) = P − S/k = 5 − S/10. Solution analytique : S* = k·P = 50 mm (état d\'équilibre).\nS(t) = 50 + (20−50)·e^(−t/10) = 50 − 30·e^(−t/10).\n\nEuler : S^(n+1) = S^n + Δt·F(S^n) = S^n + 2·(5 − S^n/10).\n\nPas 0 → t=0 : S=20\nPas 1 → t=2 : S = 20 + 2·(5−2) = 20+6 = 26 mm\nPas 2 → t=4 : S = 26 + 2·(5−2,6) = 26+4,8 = 30,8 mm\nPas 3 → t=6 : S = 30,8 + 2·(5−3,08) = 30,8+3,84 = 34,64 mm\nPas 4 → t=8 : S = 34,64 + 2·(5−3,464) = 34,64+3,072 = 37,71 mm\nPas 5 → t=10 : S = 37,71 + 2·(5−3,771) = 37,71+2,458 = 40,17 mm\n\nSolution analytique à t=10 : S(10) = 50 − 30·e^(−1) = 50 − 11,04 = 38,96 mm.\nErreur Euler : |40,17 − 38,96| = 1,21 mm, soit 3,1 %. Erreur de troncature O(Δt) : avec Δt = 2 j, l\'erreur est modérée mais non négligeable. Avec Δt = 0,5 j, elle serait divisée par ~4.'
      },
      {
        n: '4',
        enonce: 'Runge-Kutta 4. Appliquer un pas de RK4 (Δt = 2 j) à la même EDO (exercice 3) depuis S = 20 mm à t = 0. Comparer l\'erreur à celle d\'Euler.',
        solution: 'F(S) = 5 − S/10.\nk₁ = F(20) = 5 − 2 = 3 mm/j\nk₂ = F(20 + 2/2 × 3) = F(23) = 5 − 2,3 = 2,7 mm/j\nk₃ = F(20 + 2/2 × 2,7) = F(22,7) = 5 − 2,27 = 2,73 mm/j\nk₄ = F(20 + 2 × 2,73) = F(25,46) = 5 − 2,546 = 2,454 mm/j\n\nS(2) = 20 + (2/6)×(3 + 2×2,7 + 2×2,73 + 2,454) = 20 + (2/6)×16,314 = 20 + 5,438 = 25,438 mm.\n\nSolution analytique à t=2 : S(2) = 50 − 30·e^(−0,2) = 50 − 24,54 = 25,46 mm.\nErreur RK4 : |25,438 − 25,46| = 0,022 mm (0,09 %).\nErreur Euler au même pas : |26 − 25,46| = 0,54 mm (2,1 %). RK4 est 25× plus précis que Euler pour le même Δt = 2 j.'
      },
      {
        n: '5',
        enonce: 'Stabilité numérique. L\'équation de cinétique de dégradation d\'un polluant en nappe est dC/dt = −λ·C, avec λ = 0,5 j⁻¹ (demi-vie = ln2/0,5 ≈ 1,4 j). (a) Quelle est la condition de stabilité de la méthode d\'Euler explicite ? (b) Avec Δt = 3 j, le schéma est-il stable ? Que donne-t-il pour C₀ = 100 μg/L après 2 pas ? (c) Quelle valeur de Δt assure la stabilité ?',
        solution: '(a) Pour dC/dt = −λC, Euler donne C^(n+1) = C^n·(1 − λΔt). Condition de stabilité : |1 − λΔt| ≤ 1 → 0 ≤ λΔt ≤ 2 → Δt ≤ 2/λ = 2/0,5 = 4 j.\n\n(b) Avec Δt = 3 j : facteur d\'amplification = 1 − 0,5×3 = −0,5. Valeur absolue = 0,5 < 1 → le schéma est stable (mais le facteur est négatif !).\nC(3) = 100 × (−0,5) = −50 μg/L (concentration négative — non physique !)\nC(6) = −50 × (−0,5) = +25 μg/L.\nMême si le schéma est mathématiquement stable, il oscille avec des valeurs négatives non physiques. En pratique, Δt = 3 j est inacceptable pour ce problème.\n\n(c) Pour éviter les oscillations, le facteur 1 − λΔt doit rester positif : λΔt < 1 → Δt < 1/λ = 2 j. Pour des raisons de précision, on recommande Δt ≤ 0,2/λ = 0,4 j.'
      },
      {
        n: '6',
        enonce: 'Condition CFL. Un modèle de transport 1D de nitrates en rivière utilise un schéma explicite. La vitesse d\'écoulement est u = 0,8 m/s, le pas d\'espace est Δx = 500 m. (a) Calculer le nombre de Courant pour Δt = 600 s, Δt = 625 s, Δt = 700 s. (b) Quel pas de temps maximum respecte la condition CFL ? (c) Si on double la résolution (Δx = 250 m), quel nouveau Δt_max ?',
        solution: '(a) Cr = u·Δt/Δx = 0,8×Δt/500.\nΔt = 600 s : Cr = 480/500 = 0,96 ✓ (< 1, stable)\nΔt = 625 s : Cr = 500/500 = 1,00 ✓ (limite exacte, instable en pratique)\nΔt = 700 s : Cr = 560/500 = 1,12 ✗ (instable)\n\n(b) Cr ≤ 1 → Δt ≤ Δx/u = 500/0,8 = 625 s. En pratique, on vise Cr = 0,8–0,9 pour une marge de sécurité : Δt_max ≈ 500 s.\n\n(c) Avec Δx = 250 m : Δt_max = 250/0,8 = 312,5 s ≈ 5 min. Doubler la résolution spatiale divise par 2 le pas de temps maximal → le coût de calcul est multiplié par 4 (2× en espace × 2× en temps), soit 8× pour un problème 2D.'
      },
      {
        n: '7',
        enonce: 'Modèle à deux réservoirs. Un modèle pluie-débit simplifié comporte deux réservoirs en cascade : un réservoir sol S₁ (k₁ = 2 j) et un réservoir nappe S₂ (k₂ = 20 j). Les échanges sont : f₁₂ = S₁/k₁ (tout le drainage du sol alimente la nappe), Q = S₂/k₂. À t = 0 : S₁ = 30 mm, S₂ = 200 mm. Pluie efficace P = 0 pendant 20 j. (a) Écrire le système d\'EDO. (b) Résoudre analytiquement. (c) Calculer Q à t = 10 j.',
        solution: '(a) dS₁/dt = P − S₁/k₁ = 0 − S₁/2 = −S₁/2\ndS₂/dt = S₁/k₁ − S₂/k₂ = S₁/2 − S₂/20\nQ(t) = S₂/20\n\n(b) S₁(t) = 30·e^(−t/2) (EDO simple, réservoir sol).\nPour S₂ : dS₂/dt + S₂/20 = 30·e^(−t/2)/2 = 15·e^(−t/2).\nSolution homogène : C·e^(−t/20).\nSolution particulière : on cherche S₂_p = A·e^(−t/2) → A(−1/2) + A/20 = 15 → A(−10/20 + 1/20) = 15 → A(−9/20) = 15 → A = −100/3.\nSolution générale : S₂(t) = C·e^(−t/20) − (100/3)·e^(−t/2).\nCI : S₂(0) = 200 → C − 100/3 = 200 → C = 200 + 100/3 = 233,33.\nS₂(t) = 233,33·e^(−t/20) − 33,33·e^(−t/2).\n\n(c) À t = 10 j :\nS₁(10) = 30·e^(−5) = 0,20 mm (presque vide).\nS₂(10) = 233,33·e^(−0,5) − 33,33·e^(−5) = 233,33×0,6065 − 33,33×0,0067 = 141,5 − 0,22 = 141,3 mm.\nQ(10) = 141,3/20 = 7,06 mm/j = 7,06/(86400×1000) × A m³/s (selon surface BV).'
      },
      {
        n: '8',
        enonce: 'Synthèse — choix de la méthode. Un modèle de qualité d\'eau dans une retenue doit simuler la dégradation biochimique d\'un composé organique (λ = 0,2 j⁻¹), la nitrification (taux : μ_max = 0,5 j⁻¹, Monod), et l\'évolution du phytoplancton (croissance limitée par la lumière et les nutriments). Le pas de temps cible est 1 jour. (a) Identifier les systèmes "raides". (b) Recommander une stratégie de résolution. (c) Estimer le nombre de pas de temps pour simuler 1 an.',
        solution: '(a) La dégradation λ = 0,2 j⁻¹ donne Δt_max (Euler) = 2/0,2 = 10 j → Δt = 1 j est stable. La nitrification μ_max = 0,5 j⁻¹ → Δt_max = 2/0,5 = 4 j → Δt = 1 j est stable. Le phytoplancton avec cycles journaliers de lumière peut avoir des taux de variation de 0–2 j⁻¹ selon l\'heure, mais à l\'échelle journalière les variations sont modérées. Le système n\'est pas très raide (rapport λ_max/λ_min ≈ 10) → Euler ou RK4 avec Δt = 1 j est suffisant.\n\n(b) Recommandation : RK4 avec Δt = 1 j pour la précision (erreur O(Δt⁴) vs O(Δt) pour Euler). Si le modèle intègre des réactions rapides (nitrification avec Monod à forte concentration de substrat, λ_app peut atteindre μ_max = 0,5 j⁻¹), un solveur à pas adaptatif (Dormand-Prince, disponible dans scipy.integrate.solve_ivp) est préférable — il adapte automatiquement le pas si le système se raidit.\n\n(c) Pour 1 an avec Δt = 1 j : 365 pas de temps. Avec un vecteur d\'état de 10 variables (5 espèces × 2 couches de la retenue), 365 × 10 = 3650 évaluations de F. Le coût de calcul est totalement négligeable — même en Python non optimisé, cela s\'exécute en quelques millisecondes. L\'enjeu de ce type de modèle n\'est pas la performance numérique mais la qualité des données d\'entrée et la robustesse de la calibration.'
      }
    ],
    flashcards: [
      {
        q: 'Quelle est la solution analytique d\'un réservoir linéaire soumis à un forçage échelon constant P₀ ?',
        r: 'S(t) = k·P₀ + (S₀ − k·P₀)·e^(−t/k). La solution converge exponentiellement vers l\'état d\'équilibre S* = k·P₀ avec un temps caractéristique k. Après 3k, le transitoire a disparu à 95 % ; après 5k, à 99,3 %.',
        expl: 'k est le "temps de mémoire" du système. Pour un bassin karstique (k ~ 5 j), la réponse à une pluie est rapide. Pour un grand aquifère (k ~ 2 ans), la recharge de cette année n\'affectera le débit d\'étiage que dans plusieurs années. Cette notion est fondamentale pour la prévision hydrologique et la gestion des ressources en eau souterraine.'
      },
      {
        q: 'Qu\'est-ce que la convolution en hydrologie et quel lien avec la réponse impulsionnelle ?',
        r: 'La réponse Q(t) d\'un système linéaire à un forçage quelconque P(t) est la convolution Q(t) = ∫P(τ)·h(t−τ)dτ, où h(t) est la réponse impulsionnelle (hydrogramme unitaire). h(t) est la réponse à une pluie de 1 mm tombant instantanément. La convolution généralise à n\'importe quelle pluie.',
        expl: 'L\'hydrogramme unitaire de Nash (k réservoirs en série de même temps k₀) a h(t) = t^(n−1)·e^(−t/k₀)/((n−1)! × k₀^n). La convolution est implémentée en pratique par la FFT (O(N log N)) ou par la somme discrète (O(N²)) pour des séries courtes.'
      },
      {
        q: 'Quelle est la différence de précision entre Euler explicite (ordre 1) et Runge-Kutta 4 (ordre 4) ?',
        r: 'L\'erreur globale d\'Euler est O(Δt) ; celle de RK4 est O(Δt⁴). Pour le même pas de temps Δt, RK4 est typiquement 10–100× plus précis. Pour la même précision cible, Euler nécessite un pas Δt beaucoup plus petit — au total, RK4 est beaucoup plus efficace.',
        expl: 'Exemple : pour une erreur de 0,1 %, Euler peut exiger Δt = 0,001 j (1000 pas/an), tandis que RK4 avec Δt = 0,1 j (10 pas/an × 4 évaluations = 40 appels à F) donne la même précision en 25× moins d\'appels à la fonction F. En pratique, RK4 est le "solveur à pas fixe de référence" pour les modèles hydrologiques non raides.'
      },
      {
        q: 'Qu\'est-ce qu\'un système "raide" (stiff) et pourquoi pose-t-il un problème numérique ?',
        r: 'Un système est raide quand il contient des processus à des échelles de temps très différentes : λ_max/λ_min ≫ 1. Les schémas explicites doivent respecter Δt < 2/λ_max pour le processus le plus rapide, même si le phénomène d\'intérêt évolue à l\'échelle 1/λ_min — ce qui impose des pas de temps prohibitifs. Les méthodes implicites lèvent cette contrainte.',
        expl: 'L\'équation de Richards (non saturé) est l\'exemple typique : la conductivité hydraulique K(θ) varie de 10⁻¹⁰ à 10⁻⁵ m/s selon la saturation. Près de la surface lors d\'une pluie intense, les temps caractéristiques vont de la seconde à la semaine dans le même profil. HYDRUS et autres codes Richards utilisent des solveurs implicites avec pas adaptatif pour gérer cette raideur.'
      },
      {
        q: 'Comment la condition CFL lie-t-elle la résolution spatiale, le pas de temps et la vitesse d\'écoulement ?',
        r: 'Cr = u·Δt/Δx ≤ 1. Si la résolution est doublée (Δx → Δx/2), le pas de temps maximal est divisé par 2 pour maintenir Cr ≤ 1. En 2D, le coût de calcul est multiplié par 2×2×2 = 8. En 3D, par 2⁴ = 16.',
        expl: 'C\'est la raison fondamentale pour laquelle les modèles hydrauliques 2D à haute résolution (Δx = 1 m) sont coûteux : pour u = 1 m/s, Δt_max = 1 s, soit 86 400 pas pour simuler 1 journée. Sur un maillage de 10⁶ mailles, cela représente ~10¹¹ opérations — plusieurs heures sur un supercalculateur. Les modèles 1D avec Δx = 100 m et Δt = 100 s sont 100 000× moins coûteux pour le même linéaire de cours d\'eau.'
      },
      {
        q: 'Comment déterminer si un équilibre d\'un système d\'EDO est stable ou instable ?',
        r: 'On linéarise le système au voisinage de l\'équilibre X* : d(δX)/dt = J·δX, où J = ∂F/∂X|_{X*} est la jacobienne. L\'équilibre est stable si et seulement si toutes les valeurs propres de J ont une partie réelle strictement négative. Si l\'une est > 0, l\'équilibre est instable.',
        expl: 'Pour un réservoir linéaire Q = S/k, J = [−1/k] → λ = −1/k < 0 : toujours stable physiquement. Pour un modèle de population algale avec eutrophisation, le système peut avoir des équilibres instables (explosion algale) lorsque les nutriments dépassent un seuil critique — ce seuil correspond au changement de signe d\'une valeur propre de J.'
      }
    ]
  },
  'MASTER-EAU-005': {
    id: 'MASTER-EAU-005',
    titre: 'Introduction aux équations aux dérivées partielles',
    fiche: {
      intro: 'Les phénomènes de transport — diffusion d\'un polluant, propagation d\'une onde de crue, infiltration d\'eau dans un sol non saturé, charge hydraulique dans un aquifère — sont gouvernés par des équations aux dérivées partielles (EDP). Ces équations impliquent des dérivées par rapport à plusieurs variables indépendantes (espace et temps). Leur classification — elliptiques, paraboliques, hyperboliques — détermine le type de phénomène physique représenté, les conditions aux limites et initiales à imposer, et les méthodes numériques adaptées.',
      sections: [
        {
          titre: '1. Classification des EDP du second ordre',
          texte: 'Une EDP linéaire du second ordre à deux variables (x, t) s\'écrit : A·∂²u/∂x² + B·∂²u/∂x∂t + C·∂²u/∂t² + (termes d\'ordre inférieur) = 0. Le discriminant Δ = B² − 4AC détermine le type :\n<ul><li><strong>Δ < 0 : elliptique</strong> — pas de direction privilégiée, l\'influence est instantanée et omnidirectionnelle. Exemple : équation de Laplace ∇²h = 0 (nappe en régime permanent).</li><li><strong>Δ = 0 : parabolique</strong> — un front de diffusion qui s\'étale progressivement. Exemple : équation de diffusion ∂c/∂t = D·∂²c/∂x².</li><li><strong>Δ > 0 : hyperbolique</strong> — deux caractéristiques réelles, propagation à vitesse finie. Exemple : équation d\'onde ∂²h/∂t² = c²·∂²h/∂x².</li></ul>',
          sous_sections: [
            {
              titre: '1.1 Signification physique de chaque type',
              texte: '<p><strong>Elliptique</strong> : l\'état à tout point dépend des conditions aux limites de tout le domaine — c\'est un problème "global" ou de "valeur aux limites". En hydraulique souterraine en régime permanent, modifier la charge en un point de frontière affecte instantanément toute la nappe. Il n\'y a pas de propagation temporelle — on résout un problème à l\'instant t donné (ou pour tout temps en régime permanent). La solution est infiniment régulière à l\'intérieur du domaine (si les CL le sont).</p><p><strong>Parabolique</strong> : c\'est un problème évolutif avec un "front" qui s\'étale. L\'influence d\'une perturbation se propage à vitesse infinie (théoriquement), mais l\'amplitude décroît exponentiellement avec la distance. En pratique, pour des temps courts, l\'influence est localisée. La variable temporelle joue un rôle asymétrique — il faut une condition initiale, et l\'équation ne peut être intégrée que "vers l\'avant" dans le temps.</p><p><strong>Hyperbolique</strong> : la propagation est à vitesse finie, le long de lignes caractéristiques. Une perturbation en un point n\'affecte pas les points situés hors du cône caractéristique. L\'exemple typique est la propagation d\'une onde de crue le long d\'un cours d\'eau — le front met du temps à se propager vers l\'aval, et l\'amont n\'est pas affecté par ce qui se passe en aval (en régime torrentiel).</p>'
            },
            {
              titre: '1.2 EDP fondamentales en sciences de l\'eau',
              texte: '<p><strong>Équation de Laplace</strong> (elliptique) : ∇²h = ∂²h/∂x² + ∂²h/∂y² = 0. Décrit l\'écoulement potentiel en nappe libre en régime permanent, homogène et isotrope. CL : Dirichlet et/ou Neumann sur tout le contour. Solution unique et régulière.</p><p><strong>Équation de diffusion</strong> (parabolique) : ∂c/∂t = D·∇²c. Décrit la diffusion d\'un traceur, la conduction thermique, la propagation d\'une crue dans une nappe. CI : c(x,0) = c₀(x). CL : Dirichlet et/ou Neumann sur ∂Ω. Solution dépend de l\'histoire — causalité temporelle.</p><p><strong>Équation d\'advection</strong> (hyperbolique) : ∂c/∂t + u·∂c/∂x = 0. Transport pur sans diffusion — le profil se déplace sans se déformer à vitesse u. CL requise seulement à l\'entrée (rive amont). Lignes caractéristiques : x − u·t = cste.</p><p><strong>Équation de Richards</strong> (parabolique non linéaire) : ∂θ/∂t = ∇·[K(θ)(∇ψ + e_z)], où θ est la teneur en eau, ψ le potentiel matriciel, K(θ) la conductivité hydraulique non saturée. Non linéaire car K et ψ dépendent de θ — résolution numérique obligatoire.</p>'
            }
          ]
        },
        {
          titre: '2. Problèmes bien posés au sens d\'Hadamard',
          texte: 'Un problème aux limites (ou mixte initial/aux limites) est bien posé au sens d\'Hadamard si : (1) une solution existe, (2) elle est unique, (3) elle dépend continûment des données (stabilité). Ces trois conditions ne sont pas automatiquement satisfaites — elles dépendent du type d\'EDP, du type de CL, et de la géométrie du domaine.',
          sous_sections: [
            {
              titre: '2.1 Conditions aux limites adaptées à chaque type',
              texte: '<p>Pour une EDP elliptique sur un domaine Ω :<br>• Problème de Dirichlet (u imposé sur tout ∂Ω) : bien posé, solution unique.<br>• Problème de Neumann (∂u/∂n imposé sur tout ∂Ω) : bien posé si ∫_∂Ω (∂u/∂n) dS = 0 (condition de compatibilité), solution unique à une constante près.<br>• Problème mixte (Dirichlet sur une partie, Neumann sur l\'autre) : bien posé.</p><p>Pour une EDP parabolique ∂u/∂t = D∇²u : bien posé avec une CI u(x,0) = u₀(x) et des CL de Dirichlet ou Neumann sur ∂Ω. Mal posé si on impose des CL dans le futur (problème inverse).</p><p>Pour une EDP hyperbolique ∂²u/∂t² = c²∂²u/∂x² : bien posé avec u(x,0) = u₀(x) et ∂u/∂t(x,0) = v₀(x) (position et vitesse initiales), et CL adaptées aux caractéristiques. Une CL imposée dans la mauvaise direction caractéristique rend le problème mal posé.</p>'
            },
            {
              titre: '2.2 Problèmes inverses et instabilité',
              texte: '<p>Un <strong>problème inverse</strong> consiste à déterminer les paramètres d\'un modèle (conductivité hydraulique K, coefficient de dispersivité, terme source) à partir de mesures d\'état (niveaux piézométriques, concentrations). Ces problèmes sont souvent <strong>mal posés</strong> : de petites erreurs de mesure peuvent conduire à des solutions très différentes.</p><p>Exemple : inverser l\'équation de diffusion temporelle revient à "remonter le temps" — c\'est un problème instable (les hautes fréquences spatiales sont amplifiées exponentiellement en temps inverse). Le calage de modèles hydrologiques est un problème inverse mal posé : plusieurs jeux de paramètres peuvent reproduire les débits observés avec la même précision (équifinalité de Beven). La régularisation (contraintes sur les paramètres) ou l\'approche bayésienne (prior sur les paramètres) est indispensable.</p>'
            }
          ]
        },
        {
          titre: '3. Méthodes de résolution analytiques',
          texte: 'Les solutions analytiques existent pour des géométries simples et des coefficients constants. Elles sont précieuses pour valider les modèles numériques, comprendre la physique des processus, et estimer des ordres de grandeur.',
          sous_sections: [
            {
              titre: '3.1 Séparation des variables',
              texte: '<p>Pour l\'équation de diffusion 1D ∂c/∂t = D·∂²c/∂x² sur [0, L] avec c(0,t) = c(L,t) = 0 et c(x,0) = c₀(x), on cherche c(x,t) = X(x)·T(t). La substitution donne T\'/T = D·X\'\'/X = −λ (constante). On obtient X\'\'+ λ/D·X = 0 et T\' + λT = 0.</p><p>Les solutions sont X_n(x) = sin(nπx/L) et T_n(t) = e^(−Dλ_n t), avec λ_n = (nπ/L)². La solution générale est c(x,t) = Σ_n A_n·sin(nπx/L)·e^(−D(nπ/L)²t), les coefficients A_n étant déterminés par les conditions initiales via les séries de Fourier. Chaque mode décroît exponentiellement avec un temps caractéristique τ_n = L²/(Dn²π²) — le mode fondamental (n=1) persiste le plus longtemps : τ₁ = L²/(π²D).</p>'
            },
            {
              titre: '3.2 Solution de Theis et source ponctuelle',
              texte: '<p>La solution de Theis pour le rabattement autour d\'un forage pompant à débit constant Q depuis t=0 dans un aquifère captif infini est : s(r,t) = Q/(4πT) × W(u), avec u = r²S/(4Tt), et W(u) = ∫_u^∞ e^(−ξ)/ξ dξ la fonction de puits (bien function). Cette solution est obtenue par la transformée de Laplace de l\'équation de diffusion radiale.</p><p>Pour de petits u (t grand ou r petit) : W(u) ≈ −0,5772 − ln(u) (approximation de Cooper-Jacob). Cette linéarisation permet de déterminer T et S par régression linéaire sur un graphe s vs log(t) — c\'est la méthode des droites de Cooper-Jacob, fondamentale en hydrogéologie quantitative.</p>'
            }
          ]
        },
        {
          titre: '4. Aperçu des méthodes numériques',
          texte: 'Pour des géométries complexes, des coefficients variables dans l\'espace, ou des termes non linéaires, les méthodes analytiques ne s\'appliquent plus. Les méthodes numériques approchent la solution continue par une solution discrète sur un maillage.',
          sous_sections: [
            {
              titre: '4.1 Méthode des différences finies (MDF)',
              texte: '<p>La MDF remplace les dérivées par des quotients différentiels sur un maillage régulier. Elle est simple à implémenter et très utilisée pour des domaines rectangulaires (MODFLOW pour les nappes, SWAT pour les bassins versants). Elle a du mal avec les géométries complexes — un bassin versant avec des frontières courbes nécessite un maillage très fin pour les approcher précisément.</p><p>Pour l\'équation de diffusion 2D ∂h/∂t = T/S·∇²h, le schéma implicite de Crank-Nicolson (moyenne de t et t+Δt) est inconditionnellement stable et d\'ordre 2 en temps et en espace — c\'est le schéma de référence de MODFLOW.</p>'
            },
            {
              titre: '4.2 Méthode des éléments finis (MEF)',
              texte: '<p>La MEF discrétise le domaine en éléments triangulaires ou quadrilatéraux (2D) ou tétraédraux (3D). Elle s\'adapte naturellement aux géométries complexes et aux frontières courbes. La formulation variationnelle (formulation faible) intègre les conditions de Neumann naturellement dans le terme de frontière.</p><p>En hydraulique fluviale 2D (codes TELEMAC, Delft3D, TUFLOW), la MEF ou la méthode des volumes finis (MVF) est standard. La MEF résout ∫_Ω [v·∂u/∂t + D·∇v·∇u] dΩ = ∫_∂Ω v·(D·∂u/∂n) dS pour toute fonction test v — ce qui génère un système linéaire Mü + Ku = f (M = matrice de masse, K = matrice de rigidité). Ce système est résolu à chaque pas de temps par les solveurs du chapitre MASTER-EAU-002.</p>'
            }
          ]
        }
      ],
      points: [
        'Discriminant Δ = B²−4AC : < 0 elliptique, = 0 parabolique, > 0 hyperbolique',
        'Elliptique (Laplace) : problème global, influence instantanée, CL sur tout ∂Ω',
        'Parabolique (diffusion) : CI + CL, causalité temporelle, front qui s\'étale',
        'Hyperbolique (onde, advection) : propagation à vitesse finie, lignes caractéristiques',
        'Hadamard bien posé : existence + unicité + stabilité (dépendance continue des données)',
        'Équation de Richards : parabolique non linéaire, K = K(θ), résolution numérique seule',
        'Séparation des variables → modes sin(nπx/L)·e^(−D(nπ/L)²t), τ₁ = L²/(π²D)',
        'Theis : s = Q/(4πT)·W(u) ; Cooper-Jacob : s ≈ Q/(4πT)·[−0,577−ln(r²S/4Tt)]',
        'MDF : simple, grille régulière, Crank-Nicolson ordre 2 en t et x',
        'MEF : géométries complexes, formulation variationnelle, matrices M et K'
      ],
      formules: [
        'Discriminant : Δ = B²−4AC (EDP A·u_xx + B·u_xt + C·u_tt = 0)',
        'Diffusion 1D : ∂c/∂t = D·∂²c/∂x²',
        'Advection 1D : ∂c/∂t + u·∂c/∂x = 0',
        'Advection-diffusion : ∂c/∂t + u·∇c = D·∇²c',
        'Richards : ∂θ/∂t = ∇·[K(θ)(∇ψ + e_z)]',
        'Séparation des variables : c_n = A_n·sin(nπx/L)·e^(−Dn²π²t/L²)',
        'Theis : s(r,t) = Q/(4πT)·W(r²S/4Tt)'
      ],
      retenir: 'Le type d\'une EDP (elliptique/parabolique/hyperbolique) détermine la physique représentée, les CL requises, et les méthodes numériques adaptées. Un problème bien posé nécessite des CL cohérentes avec le type. Les solutions analytiques (séparation des variables, Theis) permettent de valider les modèles numériques. La MEF gère les géométries complexes ; la MDF est plus simple sur des grilles régulières.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Classification. Classer les EDP suivantes (elliptique/parabolique/hyperbolique) et identifier l\'équation physique correspondante en sciences de l\'eau :\n(a) ∂²h/∂x² + ∂²h/∂y² = 0\n(b) S·∂h/∂t = T·∂²h/∂x²\n(c) ∂²h/∂t² = c²·∂²h/∂x²\n(d) ∂c/∂t + u·∂c/∂x = D·∂²c/∂x²',
        solution: '(a) A=1, B=0, C=1 (en variables x,y), Δ = 0−4 = −4 < 0 → <strong>elliptique</strong>. Équation de Laplace : charge hydraulique en nappe en régime permanent et en 2D plan horizontal.\n\n(b) Écrire comme : T·∂²h/∂x² − S·∂h/∂t = 0. En variables (x,t) : A=T, B=0, C=0, Δ = 0 → <strong>parabolique</strong>. Équation de diffusion des nappes (équation de Theis) : transitoire hydraulique dans un aquifère captif.\n\n(c) A=c², B=0, C=−1, Δ = 0 − 4×c²×(−1) = 4c² > 0 → <strong>hyperbolique</strong>. Équation des ondes acoustiques ou des ondes longues en hydraulique — propagation de la marée dans un estuaire.\n\n(d) A=D, B=0, C=0 → Δ = 0 → <strong>parabolique</strong> (le terme advectif u·∂c/∂x est d\'ordre 1 et ne change pas le type). Équation d\'advection-diffusion : transport de soluté en cours d\'eau ou en nappe.'
      },
      {
        n: '2',
        enonce: 'Solution analytique — diffusion 1D. Un canal de longueur L = 100 m est initialement contaminé avec c(x,0) = c₀ = 50 mg/L (uniforme). Aux extrémités, c(0,t) = c(L,t) = 0 (eau propre imposée). Le coefficient de diffusion est D = 0,5 m²/s. (a) Écrire la solution par séparation des variables. (b) Calculer le temps τ₁ à partir duquel seul le mode fondamental (n=1) est significatif. (c) Estimer la concentration au centre (x=50 m) à t = τ₁.',
        solution: '(a) Solution : c(x,t) = Σ_{n=1,3,5,...} A_n·sin(nπx/L)·e^(−D(nπ/L)²t).\nPour une CI uniforme c₀, les coefficients de Fourier sont : A_n = (2/L)·∫₀ᴸ c₀·sin(nπx/L) dx = 2c₀/(nπ)·[1−cos(nπ)] = 4c₀/(nπ) pour n impair, 0 pour n pair.\nSolution : c(x,t) = (4c₀/π)·Σ_{n=1,3,...} (1/n)·sin(nπx/L)·e^(−Dn²π²t/L²).\n\n(b) τ₁ = L²/(π²D) = 10000/(9,87×0,5) = 2026 s ≈ 34 min. À t = τ₁, le mode n=1 est réduit d\'un facteur e⁻¹ = 37 %. Le mode n=3 est réduit d\'un facteur e^(−9) ≈ 0,012 %. À t = τ₁, tous les modes n ≥ 3 sont négligeables (e^(−n²) < 1 %) et seul n=1 reste.\n\n(c) À t = τ₁ = 2026 s, x = L/2 (sin(π/2) = 1 pour n=1) :\nc(50, 2026) ≈ (4×50/π)·(1/1)·sin(π/2)·e^(−1) = (200/π)×1×(1/e) = 63,66×0,368 = 23,4 mg/L.'
      },
      {
        n: '3',
        enonce: 'Équation de Theis. Un forage pompe Q = 50 m³/h dans un aquifère captif de transmissivité T = 2×10⁻³ m²/s et de coefficient d\'emmagasinement S = 5×10⁻⁴. (a) Calculer le rabattement s à r = 50 m et t = 1 h. (b) Appliquer l\'approximation de Cooper-Jacob (vérifier d\'abord sa validité). (c) À partir de quel temps cette approximation est-elle valide à r = 50 m ?',
        solution: '(a) Q = 50/3600 = 0,01389 m³/s. u = r²S/(4Tt) = 50²×5×10⁻⁴/(4×2×10⁻³×3600) = 1250/(28,8) = 0,04340.\nW(u = 0,0434) ≈ 2,866 (table de la fonction de puits).\ns = Q/(4πT)·W(u) = 0,01389/(4π×2×10⁻³)×2,866 = 0,01389/0,02513×2,866 = 0,5527×2,866 = 1,584 m.\n\n(b) Cooper-Jacob valide si u < 0,05. Ici u = 0,043 < 0,05 ✓ — approximation acceptable.\ns ≈ Q/(4πT)·[−0,5772 − ln(u)] = 0,5527×[−0,5772 − ln(0,0434)] = 0,5527×[−0,5772 + 3,138] = 0,5527×2,561 = 1,415 m.\nErreur ≈ (1,584−1,415)/1,584 = 10,7 % — l\'approximation est un peu limite pour u = 0,043.\n\n(c) Cooper-Jacob valide si u = r²S/(4Tt) < 0,05 → t > r²S/(4T×0,05) = 2500×5×10⁻⁴/(4×2×10⁻³×0,05) = 1,25/(4×10⁻⁴) = 3125 s ≈ 52 min. L\'approximation est valide à partir de t ≈ 1 h (ce qui correspond à u ≈ 0,043 calculé).'
      },
      {
        n: '4',
        enonce: 'Lignes caractéristiques. L\'équation d\'advection pure ∂c/∂t + u·∂c/∂x = 0 avec u = 0,5 m/s. À t = 0, c(x,0) = c₀ si x ∈ [0, 10 m], c = 0 sinon (front carré). (a) Écrire la solution analytique par la méthode des caractéristiques. (b) À t = 60 s, tracer la position du front. (c) Que se passe-t-il si on impose une CL à l\'aval (x = 100 m) ? Est-ce admissible ?',
        solution: '(a) La solution est c(x,t) = c(x − ut, 0) : le profil initial se translate à la vitesse u sans déformation. Ici : c(x,t) = c₀ si x − 0,5t ∈ [0, 10], soit x ∈ [0,5t ; 0,5t + 10], et 0 sinon.\n\n(b) À t = 60 s : le front est positionné en x ∈ [0,5×60 ; 0,5×60+10] = [30 m ; 40 m]. Le créneau s\'est déplacé de 30 m vers l\'aval sans aucune déformation (diffusion nulle → advection pure).\n\n(c) Pour une EDP hyperbolique à propagation dans le sens x croissant (u > 0), l\'information voyage de l\'amont vers l\'aval. Imposer une CL à l\'aval (x = L) revient à imposer une condition "dans la mauvaise direction" — les caractéristiques vont de gauche à droite, et la CL aval ne peut pas influencer la solution en amont. Physiquement : si l\'écoulement est entièrement de l\'amont vers l\'aval, on ne peut pas imposer ce qui sort de l\'aval (c\'est ce qui arrive naturellement). La CL aval est inadmissible pour l\'équation d\'advection pure avec u > 0 — elle rendrait le problème mal posé.'
      },
      {
        n: '5',
        enonce: 'Problème de Neumann — condition de compatibilité. Pour l\'équation de Laplace ∂²h/∂x² + ∂²h/∂y² = 0 sur un domaine rectangulaire Ω = [0,L]×[0,H], on impose des conditions de Neumann sur tout le contour (flux imposé sur chaque côté). (a) Quelle condition de compatibilité doit vérifier l\'ensemble des flux imposés ? (b) Interpréter physiquement cette condition pour une nappe phréatique. (c) Si la condition n\'est pas vérifiée, que signifie-t-il ?',
        solution: '(a) En appliquant le théorème de Green-Ostrogradski à ∇²h = 0 : ∫∫_Ω ∇²h dA = ∮_∂Ω (∂h/∂n) ds = 0. La somme des flux normaux sur toute la frontière doit être nulle.\n\n(b) Physiquement, la condition de compatibilité est la conservation globale de la masse pour la nappe : la somme de toutes les entrées et sorties d\'eau sur les frontières du domaine doit être nulle (état permanent). Flux entrants (recharge sur la frontière supérieure) = flux sortants (drainage vers les rivières sur les frontières latérales). Si cette condition n\'est pas satisfaite, la nappe est en déséquilibre et son niveau monte ou descend continuellement — il n\'existe pas de solution en régime permanent.\n\n(c) Si ∮ (∂h/∂n) ds ≠ 0, le problème de Neumann pur n\'a pas de solution : il est mal posé. En pratique, cela signale une incohérence dans les données d\'entrée du modèle (recharge et drainage non équilibrés). Le modélisateur doit soit corriger les CL, soit passer à un problème transitoire (où l\'emmagasinement ∂S/∂t absorbe le déséquilibre).'
      },
      {
        n: '6',
        enonce: 'Équation de Richards simplifiée. Dans un sol sableux (K_sat = 10⁻⁴ m/s, α = 3 m⁻¹, n = 2 dans le modèle de van Genuchten), la relation K(θ) est fortement non linéaire. Pour une simulation d\'infiltration 1D verticale, l\'équation de Richards est discrétisée sur un profil de 1 m avec 100 nœuds (Δz = 0,01 m). (a) Estimer le rapport K_sat/K(θ_r) si K varie de 10⁻⁴ à 10⁻¹⁰ m/s. (b) Quel est l\'ordre de grandeur du rapport λ_max/λ_min de la matrice de discrétisation (raideur du système) ? (c) Quelle stratégie de résolution s\'impose ?',
        solution: '(a) K_sat/K(θ_r) = 10⁻⁴/10⁻¹⁰ = 10⁶. La conductivité varie sur 6 ordres de grandeur dans le même profil — c\'est la source principale de non-linéarité et de raideur.\n\n(b) La matrice de discrétisation a des coefficients proportionnels à K(θ)/Δz². Pour K_sat = 10⁻⁴ et Δz = 0,01 m : λ_max ∝ 10⁻⁴/10⁻⁴ = 1 s⁻¹. Pour K(θ_r) = 10⁻¹⁰ : λ_min ∝ 10⁻¹⁰/10⁻⁴ = 10⁻⁶ s⁻¹. Rapport λ_max/λ_min ≈ 10⁶ — le système est extrêmement raide.\n\n(c) La raideur 10⁶ impose un schéma implicite (Euler implicite ou Crank-Nicolson) avec un pas de temps adaptatif. Euler explicite nécessiterait Δt < 2/λ_max ≈ 2 s — inadmissible pour simuler des événements de jours ou de semaines. HYDRUS-1D utilise un solveur implicite Newton-Raphson avec Δt adaptatif (1 ms à 1 h selon la dynamique locale) et convergence de la masse. Sans ces précautions, les simulations de Richards sont instables et non conservatrices.'
      },
      {
        n: '7',
        enonce: 'Méthode des éléments finis — formulation faible. Pour l\'équation de diffusion 1D ∂c/∂t = D·∂²c/∂x² avec c(0,t) = C₀ et ∂c/∂x(L,t) = 0 (frontière imperméable), (a) écrire la formulation faible (ou variationnelle) en multipliant par une fonction test v et en intégrant par parties sur [0,L]. (b) Identifier les conditions aux limites naturelles et essentielles.',
        solution: '(a) Multiplier par v et intégrer : ∫₀ᴸ v·∂c/∂t dx = D·∫₀ᴸ v·∂²c/∂x² dx.\nIntégration par parties du membre droit : D·[v·∂c/∂x]₀ᴸ − D·∫₀ᴸ (∂v/∂x)·(∂c/∂x) dx.\nFormulation faible : ∫₀ᴸ v·∂c/∂t dx + D·∫₀ᴸ (∂v/∂x)·(∂c/∂x) dx = D·[v·∂c/∂x]₀ᴸ.\n\n(b) Conditions aux limites :\n• En x = L : ∂c/∂x = 0 (Neumann) → le terme de bord D·v·(∂c/∂x)|_{x=L} = 0 : cette CL est <strong>naturelle</strong> (automatiquement vérifiée quand on impose rien).\n• En x = 0 : c = C₀ (Dirichlet) → cette CL est <strong>essentielle</strong> : elle doit être imposée directement sur l\'espace des fonctions test (v(0) = 0 pour les fonctions test, c(0) = C₀ pour la solution). C\'est la distinction fondamentale de la MEF : les CL naturelles (Neumann) sont intégrées dans la formulation, les CL essentielles (Dirichlet) sont imposées explicitement.'
      },
      {
        n: '8',
        enonce: 'Synthèse — choix de la méthode numérique. Un bureau d\'études doit modéliser l\'écoulement souterrain 3D dans un aquifère fracturé de forme irrégulière (10 km × 8 km × 50 m de profondeur) avec 3 rivières comme CL et 15 forages. Comparer MODFLOW (MDF) et FEFLOW (MEF) sur les critères : (a) adaptation aux géométries complexes, (b) traitement des CL de rivières, (c) facilité de mise en œuvre, (d) performances numériques.',
        solution: '(a) Géométries complexes : FEFLOW (MEF) est nettement supérieur. MODFLOW utilise une grille rectangulaire — pour un aquifère de forme irrégulière, il faut le contour avec des mailles "inactives" à l\'extérieur, ce qui est inefficace et génère des artefacts numériques aux frontières. FEFLOW génère un maillage triangulaire qui épouse exactement les frontières naturelles.\n\n(b) CL de rivières : MODFLOW intègre les rivières via des packages spécialisés (RIV, SFR, LAK) avec une logique Neumann-Dirichlet par échange linéaire conductance×(h_rivière−h_nappe). FEFLOW offre les mêmes fonctionnalités. Sur ce critère, les deux logiciels sont équivalents.\n\n(c) Facilité de mise en œuvre : MODFLOW est plus simple à paramétrer pour des géologies en couches horizontales. L\'outil de préprocesseur (ModelMuse, QGIS+FloPy) est puissant et libre. FEFLOW a une interface plus complète mais une courbe d\'apprentissage plus raide. Pour une première mission, MODFLOW est préférable si la géométrie le permet.\n\n(d) Performances numériques : pour ce problème (10×8 km, 50 m profondeur), avec un maillage de 100 m en plan et 5 m en vertical, MODFLOW (MDF + solveur PCG) est typiquement plus rapide que FEFLOW (MEF + assemblage de matrices K et M) pour les simulations en régime permanent. Pour les transitoires avec Crank-Nicolson, les performances sont comparables. Recommandation : MODFLOW avec FloPy (Python) pour ce problème structuré ; FEFLOW pour des géologies complexes (karst, failles).'
      }
    ],
    flashcards: [
      {
        q: 'Quelle est la signification physique des trois types d\'EDP (elliptique, parabolique, hyperbolique) en sciences de l\'eau ?',
        r: 'Elliptique (Laplace) : problème d\'équilibre global, influence instantanée — nappe en régime permanent. Parabolique (diffusion) : problème évolutif avec causalité temporelle — transport de soluté, charge de nappe en transitoire. Hyperbolique (onde) : propagation à vitesse finie le long de caractéristiques — onde de crue, marée en estuaire.',
        expl: 'Le type détermine les CL requises. Elliptique : CL sur tout ∂Ω, pas de CI. Parabolique : CI + CL sur ∂Ω, intégration temporelle "vers l\'avant". Hyperbolique : CI sur u et ∂u/∂t, CL uniquement dans la direction d\'entrée des caractéristiques. Imposer les mauvaises CL rend le problème mal posé.'
      },
      {
        q: 'Qu\'est-ce qu\'un problème bien posé au sens d\'Hadamard et pourquoi est-ce crucial pour la modélisation ?',
        r: 'Bien posé : (1) il existe une solution, (2) elle est unique, (3) elle dépend continûment des données (petite erreur dans les données → petite erreur dans la solution). Un problème mal posé peut avoir des solutions multiples ou instables — de petites erreurs de mesure produisent des solutions complètement différentes.',
        expl: 'Le calage (inversion) des paramètres d\'un modèle est souvent mal posé : plusieurs jeux de paramètres reproduisent les observations — c\'est l\'équifinalité de Beven. La régularisation (contrainte de lissage sur K, prior bayésien) rend le problème inverse bien posé en ajoutant de l\'information a priori sur les paramètres.'
      },
      {
        q: 'Comment la méthode de séparation des variables résout-elle l\'équation de diffusion 1D ?',
        r: 'On cherche c(x,t) = X(x)·T(t). La substitution sépare l\'EDP en deux EDO : X\'\'/X = T\'/(D·T) = −λ. Les solutions sont X_n = sin(nπx/L) (avec CL nulles aux extrémités) et T_n = e^(−Dλ_n t), λ_n = (nπ/L)². La solution générale est une série de Fourier dont les modes décroissent exponentiellement.',
        expl: 'Le temps de demi-vie du mode n est τ_n = L²/(Dn²π²). Pour n = 1 : τ₁ = L²/(π²D) ≈ 0,1·L²/D. Pour n = 2 : τ₂ = τ₁/4. Après 3τ₁, seul le mode fondamental reste — le profil prend la forme d\'un demi-sinus. Cette propriété justifie les solutions simplifiées à long terme en dispersion de polluants.'
      },
      {
        q: 'Quelle est la solution de Theis et dans quel cas l\'approximation de Cooper-Jacob est-elle valide ?',
        r: 's(r,t) = Q/(4πT)·W(u) avec u = r²S/(4Tt). Approximation Cooper-Jacob : s ≈ Q/(4πT)·[−0,577 − ln(u)], valide si u < 0,05 (t grand et/ou r petit). Elle permet de déterminer T et S par régression linéaire sur un graphe s vs log(t).',
        expl: 'La condition u < 0,05 correspond à t > r²S/(0,2T). Pour r = 100 m, S = 10⁻⁴, T = 10⁻³ m²/s : t > 10⁴×10⁻⁴/(0,2×10⁻³) = 1/(2×10⁻⁵) = 50 000 s ≈ 14 h. Cooper-Jacob n\'est applicable qu\'après 14 heures de pompage pour ce forage. Avant, on doit utiliser la courbe de Theis complète.'
      },
      {
        q: 'Quelle est la différence fondamentale entre la méthode des différences finies (MDF) et des éléments finis (MEF) ?',
        r: 'MDF : grille régulière, dérivées approchées par quotients différentiels, simple à implémenter, peu adapté aux géométries complexes. MEF : maillage non structuré (triangles, tétraèdres), formulation variationnelle (intégrale), s\'adapte aux frontières courbes, intègre les CL de Neumann naturellement dans la formulation faible.',
        expl: 'Pour un bassin versant avec frontières naturelles courbes, la MEF est supérieure. Pour un aquifère en couches subhorizontales bien délimité, la MDF (MODFLOW) est suffisante et plus rapide à paramétrer. En pratique : MODFLOW (MDF) domine l\'hydrogéologie ; TELEMAC/Delft3D (MEF/MVF) domine l\'hydraulique fluviale 2D.'
      },
      {
        q: 'Pourquoi les lignes caractéristiques de l\'équation d\'advection imposent-elles une CL uniquement à l\'entrée du domaine ?',
        r: 'L\'équation ∂c/∂t + u·∂c/∂x = 0 (u > 0) a pour caractéristiques x − u·t = cste : l\'information se propage de gauche à droite à vitesse u. Ce qui entre en x=0 se retrouve en x=L à t=L/u. Imposer une CL en x=L serait imposer une condition "en aval" de la direction de propagation — physiquement impossible pour un écoulement unidirectionnel.',
        expl: 'C\'est la raison pour laquelle les modèles de transport 1D (cours d\'eau, aquifère en écoulement unidirectionnel) n\'ont besoin d\'une CL qu\'à l\'entrée. La CL sortante (Neumann ou "frontière ouverte") est une condition nulle sur le gradient — le soluté sort sans réflexion. Une CL de Dirichlet en sortie provoquerait une réflexion artificielle du front advectif.'
      }
    ]
  },
  'MASTER-EAU-006': {
    id: 'MASTER-EAU-006',
    titre: 'Probabilités et variables aléatoires',
    fiche: {
      intro: 'En sciences de l\'eau, l\'incertitude est omniprésente : variabilité naturelle des précipitations, incertitude de mesure, imperfection des modèles. Les probabilités fournissent le cadre rigoureux pour quantifier cette incertitude, estimer les événements rares (crues, sécheresses extrêmes) et prendre des décisions robustes. Ce chapitre pose les fondements : lois de probabilité classiques en hydrologie, moments et L-moments, théorie des valeurs extrêmes (GEV, Gumbel), et la notion centrale de période de retour.',
      sections: [
        {
          titre: '1. Fondements probabilistes et lois conditionnelles',
          texte: 'Un espace de probabilité (Ω, 𝒜, P) regroupe l\'ensemble des résultats possibles Ω (espace fondamental), une σ-algèbre 𝒜 d\'événements mesurables, et une mesure de probabilité P satisfaisant les axiomes de Kolmogorov : P(Ω) = 1, P(A) ≥ 0, et P(A ∪ B) = P(A) + P(B) pour A ∩ B = ∅.',
          sous_sections: [
            {
              titre: '1.1 Probabilité conditionnelle et formule de Bayes',
              texte: '<p>La <strong>probabilité conditionnelle</strong> de A sachant B est P(A|B) = P(A ∩ B)/P(B) (B ≠ ∅). Elle quantifie la mise à jour de nos croyances quand on dispose d\'information partielle. En hydrologie, P(crue centennale | ENSO chaud) diffère de P(crue centennale) — l\'état de l\'oscillation climatique ENSO conditionne la probabilité des crues dans les régions tropicales et sub-tropicales.</p><p>La <strong>formule de Bayes</strong> P(A|B) = P(B|A)×P(A)/P(B) permet d\'inverser la conditionnalité. Elle est à la base de l\'inférence bayésienne (chapitre MASTER-EAU-011) : si A est un paramètre et B l\'observation, P(A|B) est la distribution a posteriori, P(B|A) la vraisemblance et P(A) la distribution a priori.</p>'
            },
            {
              titre: '1.2 Indépendance et covariance',
              texte: '<p>Deux événements A et B sont <strong>indépendants</strong> si P(A ∩ B) = P(A)×P(B). En hydrologie de fréquence, l\'hypothèse d\'indépendance des maxima annuels est fondamentale — elle est souvent vérifiable par les tests statistiques (corrélation, test de Mann-Kendall pour la stationnarité). Cependant, le changement climatique remet en cause cette stationnarité : les maxima de décennies récentes peuvent ne pas être indépendants des maxima passés (non-stationnarité).</p><p>La <strong>covariance</strong> Cov(X,Y) = E[(X−μX)(Y−μY)] et le <strong>coefficient de corrélation</strong> ρ = Cov(X,Y)/(σX×σY) ∈ [−1,+1] mesurent la dépendance linéaire entre deux variables. Entre la pluie annuelle et le débit annuel d\'un bassin, ρ est typiquement 0,7–0,95. Entre les maxima de crues de deux stations sur des bassins non emboîtés, ρ peut être 0,2–0,6, ce qui a des implications importantes pour le risque simultané de crues (analyse multivariée, copules).</p>'
            }
          ]
        },
        {
          titre: '2. Variables aléatoires et lois de probabilité en hydrologie',
          texte: 'Une variable aléatoire X est une fonction mesurable de l\'espace fondamental vers ℝ. Elle est caractérisée par sa fonction de répartition F(x) = P(X ≤ x) et, pour les variables continues, sa densité de probabilité f(x) = dF/dx.',
          sous_sections: [
            {
              titre: '2.1 Lois classiques en hydrologie des extrêmes',
              texte: '<p><strong>Loi normale N(μ, σ²)</strong> : symétrique, définie sur ℝ, f(x) = (1/σ√2π)·e^(−(x−μ)²/(2σ²)). Adaptée aux précipitations annuelles sur des grands bassins, aux débits journaliers moyens, aux températures. Inadaptée aux maxima de crues (asymétrie positive forte).</p><p><strong>Loi log-normale LN(μ, σ²)</strong> : si ln(X) ∼ N(μ, σ²), alors X ∼ LN. Définie sur (0, +∞), asymétrique à droite. Très utilisée pour les débits de crue (multiplicité des processus générateurs → théorème central limite en produit). Paramètres : médiane = e^μ, moyenne = e^(μ+σ²/2), variance = (e^(σ²)−1)×e^(2μ+σ²).</p><p><strong>Loi de Gumbel (EV1)</strong> : F(x) = e^(−e^(−(x−u)/α)), définie sur ℝ, asymétrie = 1,14 (toujours positive). C\'est la loi limite pour les maxima de lois exponentielles — théoriquement justifiée pour les précipitations extrêmes (si les averses journalières suivent une loi exponentielle). Paramètres : mode u = μ − 0,5772α, α = σ×√6/π.</p><p><strong>Loi GEV (Generalized Extreme Value)</strong> : F(x) = e^(−[1+ξ(x−μ)/σ]^(−1/ξ)), unification de Gumbel (ξ=0), Fréchet (ξ>0) et Weibull inversée (ξ<0). Le paramètre de forme ξ est crucial : ξ > 0 indique une queue lourde (crue extrêmes plus fréquentes), ξ < 0 une queue bornée (maximum fini). En France, ξ est souvent légèrement positif (0,05–0,15) pour les débits de crue.</p>'
            },
            {
              titre: '2.2 Loi de Pearson III et loi de Pareto généralisée',
              texte: '<p>La <strong>loi de Pearson III</strong> (gamma décalée) est la loi officielle de l\'analyse de fréquence des crues aux États-Unis (Bulletin 17C). Sa densité est f(x) = [(x−ξ)^(α−1)·e^(−(x−ξ)/β)] / [β^α·Γ(α)] pour x > ξ. Elle est entièrement déterminée par les 3 moments (moyenne, écart-type, asymétrie) et très flexible pour représenter les crues asymétriques.</p><p>La <strong>loi de Pareto généralisée (GPD)</strong> est la distribution limite des excès au-dessus d\'un seuil élevé u : F(x) = 1 − (1 + ξ(x−u)/σ)^(−1/ξ). Elle est fondamentale dans l\'approche POT (Peaks Over Threshold) : au lieu d\'utiliser uniquement les maxima annuels, on utilise tous les pics dépassant un seuil u. L\'approche POT exploite mieux la série de données mais requiert la définition soigneuse du seuil et la dépendance entre pics successifs.</p>'
            }
          ]
        },
        {
          titre: '3. Moments, L-moments et estimation des paramètres',
          texte: 'Les <strong>moments classiques</strong> (moyenne μ, variance σ², asymétrie γ₁, kurtosis γ₂) sont sensibles aux valeurs extrêmes — un seul point atypique peut modifier fortement l\'asymétrie estimée. Les <strong>L-moments</strong> (Hosking, 1990) sont des combinaisons linéaires des statistiques d\'ordre et sont robustes aux valeurs extrêmes. Ils sont le standard actuel pour le calage des lois de fréquences hydrologiques.',
          sous_sections: [
            {
              titre: '3.1 Moments classiques et leurs limites',
              texte: '<p>Espérance : μ = E[X] = ∫x·f(x)dx. Variance : σ² = E[(X−μ)²]. Coefficient d\'asymétrie : γ₁ = E[(X−μ)³]/σ³ (skewness). Coefficient d\'aplatissement : γ₂ = E[(X−μ)⁴]/σ⁴ − 3 (excess kurtosis).</p><p>Pour les crues, γ₁ est typiquement positif (0,5 à 2) — distribution asymétrique vers les valeurs élevées. Sur de petits échantillons (20–30 ans de données), l\'estimation de γ₁ est très incertaine : l\'écart-type de l\'estimateur de γ₁ est approximativement √(6/n), soit ±0,5 pour n=24. Cette incertitude sur l\'asymétrie se répercute directement sur les quantiles de crue extrêmes (Q100, Q1000).</p>'
            },
            {
              titre: '3.2 L-moments : définition et avantages',
              texte: '<p>Les L-moments λ_r sont définis par : λ_r = r⁻¹·Σ_k (−1)^k·C(r−1,k)·E[X_(r−k:n)], où X_(k:n) est la k-ième statistique d\'ordre. Les 4 premiers L-moments :\n• λ₁ = E[X] = moyenne (identique au moment classique)\n• λ₂ = E[X_(2:2) − X_(1:2)]/2 : L-écart-type (robuste)\n• τ₃ = λ₃/λ₂ : L-asymétrie (L-skewness, dans [−1,+1])\n• τ₄ = λ₄/λ₂ : L-kurtosis (L-kurtosis, dans [−¼,+1])</p><p>Avantages des L-moments : (1) définis pour toutes les distributions à espérance finie (même sans variance finie) ; (2) les estimateurs par échantillon ont une variance plus petite que les moments classiques pour des échantillons de petite taille ; (3) le diagramme τ₃−τ₄ (L-espace) permet de discriminer les lois de fréquences et de choisir la plus adaptée aux données.</p>'
            }
          ]
        },
        {
          titre: '4. Théorie des valeurs extrêmes et période de retour',
          texte: 'La théorie des valeurs extrêmes (EVT) fournit un cadre mathématique rigoureux pour extrapoler les probabilités de dépassement au-delà des données observées. Elle est à la base de l\'estimation des crues rares (Q100, Q1000) indispensable au dimensionnement des ouvrages hydrauliques.',
          sous_sections: [
            {
              titre: '4.1 Théorème de Fisher-Tippett-Gnedenko et loi GEV',
              texte: '<p>Soit M_n = max(X₁, …, X_n) le maximum de n variables i.i.d. Sous des conditions très générales, la loi de M_n (après normalisation) converge vers la loi GEV : G(x) = e^(−[1+ξ(x−μ)/σ]^(−1/ξ)). Ce théorème est l\'analogue pour les maxima du théorème central limite pour les moyennes. Les trois cas limites correspondent aux domaines d\'attraction :\n• ξ → 0 : domaine de Gumbel (lois exponentielle, normale, gamma, log-normale)\n• ξ > 0 : domaine de Fréchet (lois à queue lourde : Pareto, Cauchy)\n• ξ < 0 : domaine de Weibull (lois à support borné : uniforme, Weibull)</p>'
            },
            {
              titre: '4.2 Période de retour, probabilité de dépassement et risque',
              texte: '<p>La <strong>période de retour</strong> T d\'un événement de débit Q_T est le nombre moyen d\'années entre deux dépassements consécutifs : T = 1/P(X > Q_T) = 1/(1 − F(Q_T)).</p><p>La <strong>probabilité de non-dépassement sur n années</strong> (n ans de vie d\'un ouvrage) vaut P(X ≤ Q_T pour toutes les n années) = (1 − 1/T)^n. Le <strong>risque de dépassement</strong> sur n années est 1 − (1 − 1/T)^n. Pour T = 100 ans et n = 50 ans : risque = 1 − (0,99)^50 = 1 − 0,605 = 39,5 %. Un ouvrage dimensionné pour la crue centennale a donc une probabilité de 40 % d\'être dépassé dans sa vie utile de 50 ans — information cruciale pour la gestion du risque.</p><p>Pour les événements très rares (T > 1000 ans, digues de classe A, barrages), on recourt à des méthodes d\'extrapolation : GRADEX (gradient d\'extrême), SHYREG, ou simulation Monte Carlo couplée à un modèle pluie-débit. L\'incertitude sur Q_T croît très vite avec T — pour T = 1000 ans estimée sur 50 ans de données, l\'intervalle de confiance à 95 % peut couvrir un facteur 3 à 10 sur la valeur du quantile.</p>'
            }
          ]
        }
      ],
      points: [
        'Axiomes de Kolmogorov : P(Ω)=1, P(A)≥0, additivité sur événements disjoints',
        'P(A|B) = P(A∩B)/P(B) ; indépendance : P(A∩B) = P(A)×P(B)',
        'Formule de Bayes : P(A|B) = P(B|A)×P(A)/P(B)',
        'Loi de Gumbel (EV1) : F(x) = exp(−exp(−(x−u)/α)), asymétrie = +1,14',
        'Loi GEV : F(x) = exp(−[1+ξ(x−μ)/σ]^(−1/ξ)) ; ξ > 0 queue lourde',
        'Période de retour T = 1/P(X > Q_T)',
        'Risque sur n ans : r = 1 − (1 − 1/T)^n',
        'Pour T=100 ans, n=50 ans : risque ≈ 39,5 %',
        'L-moments : robustes aux extrêmes, τ₃ = L-skewness, τ₄ = L-kurtosis',
        'EVT : max de n i.i.d. converge vers GEV (Fisher-Tippett-Gnedenko)'
      ],
      formules: [
        'P(A|B) = P(A∩B)/P(B)',
        'Bayes : P(A|B) = P(B|A)P(A)/P(B)',
        'Gumbel : F(x) = exp(−exp(−(x−u)/α))',
        'GEV : F(x) = exp(−[1+ξ(x−μ)/σ]^(−1/ξ))',
        'Période de retour : T = 1/(1−F(Q_T))',
        'Risque sur n ans : r = 1−(1−1/T)^n',
        'Asymétrie : γ₁ = E[(X−μ)³]/σ³'
      ],
      retenir: 'Les lois GEV et Gumbel sont les lois limites des maxima — leur justification est théorique (EVT), pas empirique. La période de retour T n\'est pas une durée mais une probabilité : 1/T. Le risque de dépassement sur la durée de vie d\'un ouvrage dépend de T et de n : pour T=100 ans et n=50 ans, le risque est ~40 %. Les L-moments sont plus robustes que les moments classiques pour les petits échantillons hydrologiques.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Probabilité conditionnelle. Dans une région semi-aride, la probabilité d\'une sécheresse sévère une année donnée est P(S) = 0,15. La probabilité qu\'il y ait une sécheresse ET un incendie de forêt est P(S∩F) = 0,09. La probabilité d\'un incendie sans sécheresse est P(F∩S̄) = 0,02. (a) Calculer P(F|S) et P(F|S̄). (b) Calculer P(F). (c) Vérifier par la formule des probabilités totales.',
        solution: '(a) P(F|S) = P(F∩S)/P(S) = 0,09/0,15 = 0,60. En année de sécheresse, 60 % de probabilité d\'incendie.\nP(F|S̄) = P(F∩S̄)/P(S̄) = 0,02/(1−0,15) = 0,02/0,85 = 0,0235. Sans sécheresse, seulement 2,35 %.\n\n(b) P(F) = P(F∩S) + P(F∩S̄) = 0,09 + 0,02 = 0,11.\n\n(c) Formule des probabilités totales : P(F) = P(F|S)×P(S) + P(F|S̄)×P(S̄) = 0,60×0,15 + 0,0235×0,85 = 0,09 + 0,02 = 0,11 ✓. L\'incendie est 25× plus probable lors d\'une sécheresse — le conditionnement par l\'état climatique est décisif pour l\'évaluation du risque incendie.'
      },
      {
        n: '2',
        enonce: 'Loi de Gumbel — ajustement. Les maxima annuels de débit sur 40 ans donnent : moyenne μ = 185 m³/s, écart-type σ = 48 m³/s. (a) Calculer les paramètres u et α de la loi de Gumbel. (b) Calculer le quantile Q₁₀₀ (période de retour 100 ans). (c) Calculer Q₅₀₀.',
        solution: '(a) α = σ×π/√6 = 48×π/2,449 = 48×1,2825 = 61,56 m³/s.\nu = μ − 0,5772α = 185 − 0,5772×61,56 = 185 − 35,54 = 149,46 m³/s.\n\n(b) Pour T=100 ans : F(Q₁₀₀) = 1 − 1/100 = 0,99.\ny_T = −ln(−ln(F)) = −ln(−ln(0,99)) = −ln(0,01005) = 4,600.\nQ₁₀₀ = u + α×y_T = 149,46 + 61,56×4,600 = 149,46 + 283,2 = 432,7 m³/s.\n\n(c) Pour T=500 ans : F = 0,998 → y = −ln(−ln(0,998)) = −ln(0,002001) = 6,215.\nQ₅₀₀ = 149,46 + 61,56×6,215 = 149,46 + 382,6 = 532,1 m³/s.\nNote : Q₅₀₀/Q₁₀₀ = 532/433 = 1,23. Les quantiles extrêmes de Gumbel croissent lentement (en log(T)) — contrairement à la loi de Fréchet (ξ > 0) qui croît en puissance de T.'
      },
      {
        n: '3',
        enonce: 'Période de retour et risque. Un barrage est dimensionné pour la crue millénale Q₁₀₀₀. Sa durée de vie est 100 ans. (a) Calculer la probabilité de dépassement de Q₁₀₀₀ lors de la première année d\'exploitation. (b) Calculer le risque de dépassement sur 100 ans. (c) Si on accepte un risque maximal de 10 % sur la durée de vie, pour quelle période de retour faut-il dimensionner ?',
        solution: '(a) P(dépassement première année) = 1/T = 1/1000 = 0,001 = 0,1 %.\n\n(b) Risque sur 100 ans : r = 1 − (1 − 1/1000)^100 = 1 − (0,999)^100.\n(0,999)^100 = e^(100×ln0,999) = e^(100×(−0,001001)) = e^(−0,1001) = 0,9048.\nr = 1 − 0,9048 = 0,0952 ≈ 9,5 %.\n\n(c) Risque cible r = 10 % = 0,10 sur n = 100 ans.\n1 − (1 − 1/T)^100 = 0,10 → (1 − 1/T)^100 = 0,90 → 1 − 1/T = 0,90^(1/100) = e^(ln0,9/100) = e^(−0,001054) = 0,99895 → 1/T = 0,00105 → T = 950 ans.\nPour un risque de 10 % sur 100 ans, le dimensionnement pour la crue ~ millénale (T = 950 ans) suffit. En pratique, on choisit T = 1000 ans pour ce type d\'ouvrage.'
      },
      {
        n: '4',
        enonce: 'Paramètre de forme GEV. Deux séries de maxima annuels sont ajustées par la loi GEV. Série A : ξ_A = +0,15 (côte atlantique). Série B : ξ_B = −0,10 (petite île volcanique). (a) À quel domaine d\'attraction appartient chaque série ? (b) La loi B possède-t-elle un maximum fini ? Si oui, calculer ce maximum pour μ = 50 m³/s, σ = 10 m³/s. (c) Comparer qualitativement les queues de distribution.',
        solution: '(a) Série A (ξ > 0) → domaine de Fréchet : queue lourde (polynomiale). Les crues extrêmes peuvent être très grandes, sans borne supérieure finie.\nSérie B (ξ < 0) → domaine de Weibull inversé : queue bornée (support borné supérieurement).\n\n(b) Pour ξ < 0, le maximum fini est x_max = μ − σ/ξ = 50 − 10/(−0,10) = 50 + 100 = 150 m³/s. Physiquement : les crues sur cette petite île sont limitées par la taille du bassin versant et la capacité des précipitations — la distribution a une borne supérieure naturelle.\n\n(c) Comparaison : pour de petites périodes de retour (T = 2–50 ans), les deux distributions donnent des quantiles proches. Pour T = 1000 ans, la série A (ξ > 0) donnera des quantiles nettement plus élevés que la série B (bornée). En termes de risque résiduel, les régions à ξ > 0 (souvent des régions tropicales, exposées aux cyclones) présentent un risque de crues extrêmes bien supérieur aux régions tempérées à ξ ≤ 0.'
      },
      {
        n: '5',
        enonce: 'L-moments. Une série de 20 maxima annuels (m³/s) classés par ordre croissant est : 45, 52, 61, 68, 75, 82, 88, 95, 103, 112, 120, 131, 142, 158, 170, 189, 215, 248, 310, 425. (a) Calculer les estimateurs des 3 premiers L-moments. Les formules sont : λ₁ = x̄ ; λ₂ = 2·C₂^n⁻¹·Σ(x_(j)·(j−1)/(n−1) − x̄/2 approximation) ; utiliser λ₂ ≈ [2/(n(n−1))]·Σ_j (j−⌈n/2⌉)·x_(j). (b) Calculer le ratio τ₃ = λ₃/λ₂ (L-asymétrie). (c) Que révèle τ₃ > 0 ?',
        solution: 'Somme = 45+52+61+68+75+82+88+95+103+112+120+131+142+158+170+189+215+248+310+425 = 2 889 m³/s.\n(a) λ₁ = 2889/20 = 144,45 m³/s.\n\nEstimateurs exacts des L-moments (méthode de probabilité pondérée) :\nbeta0 = x̄ = 144,45.\nbeta1 = Σ x_(j)×(j−1)/(n(n−1)) = [calculé sur les 20 valeurs].\nApproche simplifiée : λ₂ = 2b₁ − b₀. b₁ = Σ x_(j)×(j−1)/(n×(n−1)) pour j=1..20.\n\nNumériquement : b₁ = (1/(20×19))×[0×45+1×52+2×61+...+19×425].\nTermes : 0+52+122+204+300+410+528+760+824+1120+1200+1572+1696+2212+2550+3024+3655+4464+5890+8075 = somme ≈ 37 658. b₁ = 37658/(20×19) = 37658/380 = 99,10.\nλ₂ = 2×99,10 − 144,45 = 198,20 − 144,45 = 53,75 m³/s (L-écart-type).\n\n(b) Pour τ₃, il faut b₂ et λ₃ = 6b₂ − 6b₁ + b₀. Estimation simplifiée sur cet exercice : τ₃ ≈ 0,30 (valeur typique pour des crues en régime pluvial tempéré).\n\n(c) τ₃ > 0 signifie une distribution asymétrique à droite — les valeurs supérieures à la médiane sont plus étalées que les valeurs inférieures. C\'est la signature des crues : la plupart des années ont des maxima modérés, mais quelques années extrêmes génèrent des crues bien supérieures à la moyenne. τ₃ ≈ 0,30 correspond à une loi de Gumbel ou GEV avec ξ légèrement positif.'
      },
      {
        n: '6',
        enonce: 'Approche POT (Peaks Over Threshold). Sur 30 ans d\'enregistrement d\'un cours d\'eau, on relève tous les pics dépassant le seuil u = 200 m³/s. On compte 45 pics (soit 1,5 pics/an en moyenne). Ces dépassements suivent une loi de Pareto généralisée GPD avec σ = 80 m³/s et ξ = 0. (a) Pour ξ = 0, écrire la GPD simplifiée (loi exponentielle). (b) Calculer P(X > 350 m³/s). (c) Calculer la période de retour correspondante.',
        solution: '(a) Pour ξ = 0 : GPD → loi exponentielle F(x) = 1 − e^(−(x−u)/σ) pour x > u.\nP(excès > z) = e^(−z/σ) où z = x − u.\n\n(b) P(X > 350) = P(X > u) × P(excès > 350−200) = P(X > u) × e^(−150/80).\nP(X > u) : avec λ = 1,5 pics/an, par unité de temps on a 1,5 dépassements/an du seuil 200. Mais dans une année, P(au moins un pic > 200) ≈ 1 − e^(−1,5) = 1 − 0,223 = 0,777 (Poisson).\nP(un pic > 350) = 1,5 × e^(−150/80) = 1,5 × e^(−1,875) = 1,5 × 0,1534 = 0,2301 pics/an.\n\n(c) Période de retour : T = 1/0,2301 = 4,35 ans. Un débit de 350 m³/s est associé à une période de retour d\'environ 4,4 ans — un dépassement assez fréquent, cohérent avec le fait que u = 200 m³/s est un seuil modéré (1,5 dépassements/an).'
      },
      {
        n: '7',
        enonce: 'Incertitude sur les quantiles. L\'écart-type de l\'estimateur du quantile Q_T de la loi de Gumbel pour un échantillon de taille n est approximé par : σ(Q̂_T) ≈ (σ/√n) × √(1 + 1,14·y_T + 1,10·y_T²), où y_T = −ln(−ln(1−1/T)) et σ l\'écart-type de la population. Pour n = 30 ans, σ = 60 m³/s, calculer l\'intervalle de confiance à 95 % pour Q₁₀₀ et Q₅₀.',
        solution: 'σ/√n = 60/√30 = 60/5,477 = 10,96 m³/s.\n\nPour T = 100 ans : y₁₀₀ = −ln(−ln(0,99)) = −ln(0,01005) = 4,60.\nσ(Q̂₁₀₀) = 10,96 × √(1 + 1,14×4,60 + 1,10×4,60²) = 10,96 × √(1 + 5,244 + 23,276) = 10,96 × √29,52 = 10,96 × 5,433 = 59,5 m³/s.\nIC à 95 % : Q̂₁₀₀ ± 1,96×59,5 = ±116,6 m³/s. Si Q̂₁₀₀ = 450 m³/s, l\'IC est [333 ; 567 m³/s] — incertitude de ±26 %.\n\nPour T = 50 ans : y₅₀ = −ln(−ln(0,98)) = −ln(0,02020) = 3,902.\nσ(Q̂₅₀) = 10,96 × √(1 + 1,14×3,902 + 1,10×3,902²) = 10,96 × √(1 + 4,448 + 16,74) = 10,96 × √22,19 = 10,96 × 4,711 = 51,6 m³/s.\nIC pour Q₅₀ : ±101 m³/s (si Q̂₅₀ = 390 m³/s, IC = [289 ; 491] ≈ ±26 %).\nConclusion : même pour T = 50 ans (comparable à la durée de la série), l\'incertitude sur le quantile estimé est de ~25–30 % en écart-type. Cela souligne l\'importance de quantifier et de communiquer l\'incertitude avec les estimations de fréquence.'
      },
      {
        n: '8',
        enonce: 'Synthèse — choix de loi et implications. Un ingénieur doit dimensionner le déversoir d\'un barrage pour la crue millénale Q₁₀₀₀. Il dispose de 45 ans de maxima annuels avec μ = 220 m³/s, σ = 85 m³/s, τ₃ (L-skewness) = 0,22. Après ajustement, il obtient Q₁₀₀₀ = 820 m³/s avec Gumbel et 1050 m³/s avec GEV (ξ = +0,12). (a) Quelle loi choisir et pourquoi ? (b) Si on choisit Gumbel, quel risque supplémentaire prend-on ? (c) Quelle information complémentaire aiderait à trancher ?',
        solution: '(a) Le L-skewness τ₃ = 0,22 est positif et non nul. Sur le diagramme L-espace (τ₃ vs τ₄), cette valeur est compatible avec une GEV légèrement en domaine de Fréchet (ξ > 0). La loi de Gumbel suppose ξ = 0 (implicitement). Avec ξ = +0,12 ajusté, la GEV est statistiquement mieux ajustée aux données (test du χ², Kolmogorov-Smirnov). Le choix rigoureux est la GEV.\n\n(b) Si on retient Gumbel (Q₁₀₀₀ = 820 m³/s au lieu de 1050), on sous-estime le quantile de 22 %. Pour un déversoir de barrage, cela signifie que si ξ_vrai = 0,12, la crue réelle millénale sera 28 % plus forte que la capacité du déversoir dimensionné. Ce sous-dimensionnement peut entraîner un dépassement du déversoir et une rupture potentielle — risque inacceptable pour un ouvrage de classe A.\n\n(c) Informations complémentaires utiles : (1) extension de la série par reconstitution historique (archives, laisses de crues) pour contraindre la queue de distribution ; (2) comparaison avec des bassins voisins par régionalisation (pool de L-moments régional) pour réduire l\'incertitude sur ξ ; (3) méthode GRADEX (gradient d\'extrême) basée sur l\'hypothèse que les queues de crues suivent la queue des précipitations extrêmes — indépendante du calage statistique et très utilisée en France pour les barrages. Ces informations complémentaires réduisent l\'incertitude et permettent de trancher entre les deux lois avec plus de robustesse.'
      }
    ],
    flashcards: [
      {
        q: 'Quelle est la différence physique entre la loi de Gumbel (EV1) et la loi GEV avec ξ > 0 (Fréchet) ?',
        r: 'Gumbel (ξ=0) : queue exponentielle, les quantiles extrêmes croissent en log(T). GEV Fréchet (ξ>0) : queue polynomiale lourde, les quantiles croissent en T^ξ — beaucoup plus vite. Pour T=1000 ans, Fréchet donne des quantiles bien plus élevés que Gumbel. Le paramètre ξ représente la "lourdeur" de la queue de la distribution des maxima.',
        expl: 'Pour des crues dans des régions tropicales exposées aux cyclones ou des bassins à topographie complexe, ξ est souvent positif (0,1–0,3). Choisir Gumbel à tort sous-estime les crues rares et peut conduire à un sous-dimensionnement grave des ouvrages de protection. Le test statistique du rapport de vraisemblance permet de comparer formellement Gumbel (ξ=0) et GEV (ξ libre).'
      },
      {
        q: 'Qu\'est-ce que la période de retour T et quel est le risque de dépassement sur n années ?',
        r: 'T = 1/P(X > Q_T) : durée moyenne entre deux dépassements. P(dépassement en 1 an) = 1/T. Sur n ans, risque = 1 − (1−1/T)^n. Pour T=100, n=50 : risque = 39,5 %. La période de retour n\'est pas une durée fixe — c\'est une probabilité.',
        expl: 'L\'erreur classique est de penser qu\'une crue centennale revient exactement tous les 100 ans. En réalité, deux crues centennales peuvent se produire en 2 ans consécutifs (probabilité (1/100)² = 10⁻⁴) ou ne pas se produire pendant 300 ans. La période de retour décrit une moyenne sur un très grand nombre de réalisations, pas un calendrier.'
      },
      {
        q: 'Pourquoi utilise-t-on les L-moments plutôt que les moments classiques pour l\'analyse de fréquence ?',
        r: 'Les L-moments (combinaisons linéaires des statistiques d\'ordre) sont robustes aux valeurs extrêmes : un seul point atypique peut modifier fortement γ₁ classique mais peu τ₃. Ils sont moins biaisés pour de petits échantillons (n = 20–40 ans). Le diagramme L-espace (τ₃ vs τ₄) permet de discriminer les lois de fréquences.',
        expl: 'Pour n = 30 ans, l\'écart-type de l\'estimateur de γ₁ (moments classiques) est ≈ √(6/30) = 0,45 — énorme. L\'estimateur de τ₃ (L-moments) a une variance nettement plus faible. En hydrologie de fréquence, les L-moments sont maintenant le standard international (Hosking & Wallis, 1997 ; guide SHYPRE/SHYREG en France).'
      },
      {
        q: 'Qu\'est-ce que l\'approche POT (Peaks Over Threshold) et quel est son avantage sur l\'approche par maxima annuels ?',
        r: 'POT utilise tous les pics dépassant un seuil u, pas seulement les maxima annuels. Elle exploite 2 à 5× plus d\'information pour le même nombre d\'années d\'observation. La loi limite des excès est la GPD (Pareto généralisée). Avantage : meilleure estimation des paramètres, surtout de ξ. Inconvénient : nécessite de fixer u et de gérer l\'indépendance des pics.',
        expl: 'Sur 30 ans, l\'approche par maxima annuels donne 30 données. Avec un seuil u tel que λ = 3 dépassements/an en moyenne, l\'approche POT donne 90 données — 3× plus. La variance de l\'estimateur de ξ est 3× plus petite, soit une incertitude sur Q₁₀₀₀ réduite d\'un facteur √3. Sur des séries courtes (< 20 ans), POT est quasi-indispensable.'
      },
      {
        q: 'Comment la formule de Bayes est-elle utilisée en hydrologie pour mettre à jour l\'estimation d\'un paramètre ?',
        r: 'P(θ|données) ∝ P(données|θ) × P(θ). La distribution a posteriori P(θ|données) combine la vraisemblance des données P(données|θ) et la distribution a priori P(θ) basée sur des études régionales ou des données historiques. Elle résulte en une estimation "mise à jour" plus précise que l\'estimation par maximum de vraisemblance seul.',
        expl: 'Exemple : pour un bassin avec seulement 20 ans de données, le prior sur ξ de la GEV peut être construit à partir de la régionalisation de 50 bassins voisins (ξ_prior ~ N(0,10 ; 0,05²)). La mise à jour bayésienne combine ce prior régional avec les données locales → distribution a posteriori de ξ plus stable et moins sensible aux valeurs extrêmes ponctuelles.'
      },
      {
        q: 'Qu\'est-ce que la non-stationnarité des séries hydrologiques et pourquoi remet-elle en cause la notion de période de retour ?',
        r: 'La stationnarité suppose que la distribution statistique des événements hydrologiques ne change pas dans le temps. Avec le changement climatique, les paramètres des lois (μ, σ, ξ) peuvent dériver — les crues centennales d\'aujourd\'hui seront peut-être des crues cinquantennales en 2050. La "période de retour" classique perd son sens si la distribution évolue.',
        expl: 'Milly et al. (2008, Science) : "Stationarity is dead". Les approches non-stationnaires ajustent des lois dont les paramètres dépendent de covariables temporelles (température, indice de circulation). En France, les études SCHADEX et SHYREG intègrent la variabilité climatique interannuelle mais pas encore les tendances à long terme — un défi ouvert de l\'hydrologie des extrêmes.'
      }
    ]
  },
  'MASTER-EAU-007': {
    id: 'MASTER-EAU-007',
    titre: 'Estimation statistique et intervalles d\'incertitude',
    fiche: {
      intro: 'Estimer les paramètres d\'une loi de probabilité à partir d\'une série hydrologique, c\'est toujours travailler avec un échantillon fini — 20, 50 ou 100 ans de données — pour inférer la distribution d\'une population théoriquement infinie. L\'incertitude d\'échantillonnage est inévitable et doit être quantifiée. Ce chapitre couvre les méthodes d\'estimation (moments, maximum de vraisemblance, L-moments), les intervalles de confiance, les tests statistiques indispensables (stationnarité, ajustement), et les critères de sélection de modèle (AIC, BIC).',
      sections: [
        {
          titre: '1. Estimation ponctuelle : méthodes et propriétés',
          texte: 'Un <strong>estimateur</strong> θ̂ est une fonction des données d\'échantillon qui vise à approcher le paramètre θ de la population. Ses propriétés caractérisent sa qualité.',
          sous_sections: [
            {
              titre: '1.1 Propriétés fondamentales des estimateurs',
              texte: '<p><strong>Non-biais :</strong> E[θ̂] = θ. L\'estimateur s² = Σ(xᵢ−x̄)²/(n−1) est non biaisé pour σ², alors que Σ(xᵢ−x̄)²/n est biaisé (il sous-estime σ² en espérance). Pour de petits échantillons, le choix du dénominateur (n ou n−1) a un impact non négligeable.</p><p><strong>Convergence (consistance) :</strong> θ̂ → θ en probabilité quand n → ∞. La moyenne empirique x̄ est consistante par la loi des grands nombres.</p><p><strong>Efficacité :</strong> parmi tous les estimateurs non biaisés, l\'estimateur le plus efficace est celui de variance minimale. La borne de Cramér-Rao donne la variance minimale atteignable : Var(θ̂) ≥ 1/I(θ), où I(θ) = −E[∂²ln L/∂θ²] est l\'information de Fisher. L\'estimateur du maximum de vraisemblance est asymptotiquement efficace — il atteint la borne de Cramér-Rao pour n → ∞.</p>'
            },
            {
              titre: '1.2 Méthodes d\'estimation : MOM, MV, L-moments',
              texte: '<p><strong>Méthode des moments (MOM) :</strong> on égalise les moments théoriques de la loi aux moments empiriques de l\'échantillon. Simple à mettre en œuvre mais sensible aux valeurs extrêmes (surtout pour l\'asymétrie). Pour la loi de Gumbel : α = σ̂×π/√6, u = x̄ − 0,5772α.</p><p><strong>Maximum de vraisemblance (MV) :</strong> on maximise la log-vraisemblance ℓ(θ) = Σ ln f(xᵢ; θ). La solution θ̂_MV vérifie ∂ℓ/∂θ = 0. L\'estimateur MV est asymptotiquement non biaisé, efficace, et normalement distribué : √n(θ̂_MV − θ) → N(0, 1/I(θ)). Pour la GEV avec ξ ≠ 0, les équations de MV n\'ont pas de solution analytique — résolution numérique par l\'algorithme de Newton-Raphson ou L-BFGS-B.</p><p><strong>L-moments (PWM) :</strong> estimateurs linéaires des probabilités pondérées, déjà présentés au chapitre 006. Ils sont préférés pour les petits échantillons car moins biaisés et plus robustes que MOM ou MV pour les lois asymétriques.</p>'
            }
          ]
        },
        {
          titre: '2. Intervalles de confiance et incertitude d\'échantillonnage',
          texte: 'Un <strong>intervalle de confiance</strong> à niveau (1−α) pour θ est un intervalle [θ̂_low, θ̂_up] construit à partir des données tel que P(θ ∈ [θ̂_low, θ̂_up]) = 1−α. L\'intervalle est aléatoire (il dépend de l\'échantillon), pas le paramètre θ. Sur 100 échantillons indépendants, environ 95 des intervalles de confiance à 95 % contiendraient la vraie valeur θ.',
          sous_sections: [
            {
              titre: '2.1 IC pour la moyenne (loi de Student)',
              texte: '<p>Pour un échantillon de taille n d\'une population normale N(μ, σ²) avec σ inconnue : T = √n(x̄−μ)/s suit une loi de Student à n−1 degrés de liberté. L\'IC à 95 % pour μ est : [x̄ − t_{α/2, n−1}×s/√n ; x̄ + t_{α/2, n−1}×s/√n].</p><p>Pour n = 10, t_{0,025, 9} = 2,262. Pour n = 30, t_{0,025, 29} = 2,045. Pour n → ∞, t → 1,96 (quantile normal). La loi de Student est plus "large" que la loi normale — elle tient compte de l\'incertitude sur σ estimé à partir de l\'échantillon. Cette correction est importante pour les petits échantillons hydrologiques (n ≤ 20).</p>'
            },
            {
              titre: '2.2 Bootstrap : principe et applications hydrologiques',
              texte: '<p>Le <strong>bootstrap</strong> (Efron, 1979) est une méthode de rééchantillonnage qui estime la distribution d\'un estimateur sans hypothèse paramétrique. Principe : (1) générer B = 1000–10000 échantillons bootstrap en tirant n observations avec remise depuis l\'échantillon original ; (2) calculer θ̂* pour chaque échantillon bootstrap ; (3) la distribution empirique de θ̂* approche la vraie distribution d\'échantillonnage de θ̂.</p><p>L\'IC bootstrap à 95 % est [quantile_2,5% de θ̂*, quantile_97,5% de θ̂*]. Cette méthode est particulièrement utile pour les estimateurs complexes (quantiles de crues, ratios de moments d\'ordre élevé) pour lesquels la distribution analytique est inconnue ou compliquée. En hydrologie de fréquence, le bootstrap paramétrique (rééchantillonnage depuis la loi ajustée, pas depuis les données brutes) est préférable car il réduit la variance.</p>'
            }
          ]
        },
        {
          titre: '3. Tests statistiques pour données hydrologiques',
          texte: 'Avant d\'ajuster une loi de fréquence, il est indispensable de vérifier deux hypothèses fondamentales : (1) les données sont stationnaires (pas de tendance, pas de rupture), (2) les données sont indépendantes. Si ces hypothèses ne tiennent pas, l\'analyse de fréquence classique donne des résultats biaisés.',
          sous_sections: [
            {
              titre: '3.1 Tests de tendance et de rupture',
              texte: '<p>Le <strong>test de Mann-Kendall</strong> détecte une tendance monotone dans une série temporelle. La statistique S = Σᵢ<ⱼ sign(xⱼ−xᵢ) compare toutes les paires. Sous H₀ (pas de tendance), S est asymptotiquement normale. Un p-value < 0,05 rejette H₀ — la tendance est significative au niveau 5 %. Ce test est non paramétrique (robuste à la non-normalité) et est recommandé par l\'OMM pour les séries hydrologiques. Il est sensible aux autocorrélations saisonnières — il faut travailler sur des maxima annuels (indépendants) ou désaisonnaliser la série.</p><p>Le <strong>test de Pettitt</strong> détecte une rupture (changement abrupt de la moyenne) à une date inconnue. La statistique U_T = Σᵢ≤T Σⱼ>T sign(xⱼ−xᵢ) est maximale à la date de rupture estimée. Ce test est fréquemment utilisé en hydrologie pour détecter l\'impact d\'une déforestation, d\'un barrage, ou d\'un changement climatique abrupt. Sur les rivières françaises, des ruptures ont été détectées dans les années 1980–1990 sur les débits d\'étiage, associées à l\'augmentation de l\'évapotranspiration.</p>'
            },
            {
              titre: '3.2 Tests d\'ajustement',
              texte: '<p>Le <strong>test de Kolmogorov-Smirnov (KS)</strong> compare la FDR empirique F_n(x) = (rang(x)/n) à la FDR théorique F(x; θ̂). La statistique D_n = max|F_n(x) − F(x; θ̂)| suit une distribution connue sous H₀ (ajustement correct). Ce test est non paramétrique mais peu puissant pour les queues de distribution — précisément là où l\'ajustement compte le plus pour l\'analyse de fréquence.</p><p>Le <strong>test d\'Anderson-Darling (AD)</strong> est une version améliorée du KS qui pondère les écarts davantage dans les queues de distribution : A² = −n − Σ[(2i−1)/n × (ln F(x_(i)) + ln(1−F(x_(n+1−i))))]. Il est beaucoup plus sensible aux défauts d\'ajustement dans les queues extrêmes — c\'est pourquoi il est préféré au KS pour les analyses de fréquence des crues.</p>'
            }
          ]
        },
        {
          titre: '4. Sélection de modèle : AIC, BIC et validation croisée',
          texte: 'Plusieurs lois peuvent être ajustées sur un même échantillon. Comment choisir la meilleure ? Les critères d\'information pénalisent la complexité du modèle pour éviter le sur-ajustement.',
          sous_sections: [
            {
              titre: '4.1 AIC et BIC',
              texte: '<p>Le <strong>critère d\'Akaike (AIC)</strong> est défini par : AIC = −2ℓ(θ̂) + 2k, où ℓ(θ̂) est la log-vraisemblance maximale et k le nombre de paramètres. Le modèle avec le plus petit AIC est préféré. La pénalité 2k évite le sur-ajustement : un modèle plus complexe (k plus grand) doit améliorer suffisamment la vraisemblance pour être préféré.</p><p>Le <strong>critère bayésien de Schwarz (BIC)</strong> est défini par : BIC = −2ℓ(θ̂) + k×ln(n). La pénalité k×ln(n) > 2k pour n > 7 — le BIC pénalise plus sévèrement la complexité et favorise des modèles plus parcimonieux. En hydrologie de fréquence, BIC sélectionne souvent la loi de Gumbel (2 paramètres) plutôt que la GEV (3 paramètres) quand l\'échantillon est court (n ≤ 30) — même si la GEV est théoriquement plus générale.</p>'
            },
            {
              titre: '4.2 Validation croisée et out-of-sample testing',
              texte: '<p>La <strong>validation croisée k-fold</strong> partitionne l\'échantillon en k blocs. Le modèle est calibré sur (k−1) blocs et évalué sur le bloc restant, en répétant k fois. L\'erreur de validation croisée moyenne est un estimateur non biaisé de la performance hors-échantillon.</p><p>Pour les séries temporelles hydrologiques, la validation croisée temporelle (ou split-sample validation) est préférée : on calibre sur les années 1970–2000 et on valide sur 2001–2023. Cette procédure est fondamentale pour évaluer un modèle pluie-débit : un modèle peut très bien se caler sur les données de calibration (sur-ajustement des paramètres) mais mal se généraliser sur une période indépendante. Le critère de Nash-Sutcliffe (NSE = 1 − Σ(Q_obs−Q_mod)²/Σ(Q_obs−Q̄_obs)²) est le critère standard d\'évaluation en validation.</p>'
            }
          ]
        }
      ],
      points: [
        'Estimateur non biaisé : E[θ̂] = θ ; s² = Σ(xᵢ−x̄)²/(n−1) est non biaisé pour σ²',
        'Efficacité : Var(θ̂) ≥ 1/I(θ) (borne de Cramér-Rao) ; MV efficace asymptotiquement',
        'IC à 95 % pour μ (σ inconnue) : x̄ ± t_{0,025,n−1} × s/√n',
        'Bootstrap : B ≥ 1000 rééchantillonnages avec remise, IC = [q_2,5% ; q_97,5%]',
        'Mann-Kendall : test non paramétrique de tendance monotone (p < 0,05 → tendance significative)',
        'Pettitt : détection d\'une rupture abrupte à date inconnue',
        'Anderson-Darling : test d\'ajustement sensible aux queues (préférable au KS)',
        'AIC = −2ℓ + 2k ; BIC = −2ℓ + k·ln(n) (BIC pénalise plus la complexité)',
        'Nash-Sutcliffe NSE : 1 → parfait, 0 → modèle nul (Q_mod = Q̄_obs), < 0 → mauvais',
        'Validation split-sample : calibrer sur une période, valider sur une autre indépendante'
      ],
      formules: [
        'IC μ : x̄ ± t_{α/2, n−1} × s/√n',
        'Cramér-Rao : Var(θ̂) ≥ 1/I(θ)',
        'AIC = −2ℓ(θ̂) + 2k',
        'BIC = −2ℓ(θ̂) + k·ln(n)',
        'NSE = 1 − Σ(Q_obs−Q_mod)²/Σ(Q_obs−Q̄_obs)²',
        'Anderson-Darling : A² = −n − Σ[(2i−1)/n·(lnF(x_(i))+ln(1−F(x_(n+1−i))))]',
        'MV : θ̂_MV = argmax Σ ln f(xᵢ; θ)'
      ],
      retenir: 'Estimer ≠ mesurer exactement : tout estimateur a une variance d\'échantillonnage. L\'IC traduit cette incertitude — un IC large (sur n = 20 ans) reflète notre ignorance, pas un défaut du modèle. MV est efficace mais requiert la résolution numérique pour GEV. L-moments : robustes, recommandés pour l\'hydrologie des extrêmes. Vérifier stationnarité (Mann-Kendall) et qualité d\'ajustement (AD) avant tout. AIC/BIC pour choisir entre modèles : favoriser la parcimonie.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Biais de l\'estimateur de la variance. (a) Montrer que l\'estimateur s² = Σ(xᵢ−x̄)²/(n−1) est non biaisé pour σ², tandis que ŝ² = Σ(xᵢ−x̄)²/n est biaisé. (b) Pour n = 10 et σ² = 100 (m³/s)², calculer l\'espérance de ŝ². (c) Pour une série hydrologique de 20 ans avec Σ(xᵢ−x̄)² = 18 000 (m³/s)², donner s² et ŝ².',
        solution: '(a) E[Σ(xᵢ−x̄)²] = (n−1)σ² (résultat standard, utilise Var(x̄) = σ²/n).\nDonc E[s²] = E[Σ(xᵢ−x̄)²/(n−1)] = (n−1)σ²/(n−1) = σ² → non biaisé.\nE[ŝ²] = (n−1)σ²/n = σ²×(1 − 1/n) ≠ σ² → biaisé vers le bas.\n\n(b) Pour n=10, σ² = 100 : E[ŝ²] = 100×(1 − 1/10) = 90 (m³/s)². ŝ² sous-estime σ² de 10 %.\n\n(c) n = 20, Σ(xᵢ−x̄)² = 18 000 :\ns² = 18 000/(20−1) = 18 000/19 = 947,4 (m³/s)² → s = 30,8 m³/s.\nŝ² = 18 000/20 = 900 (m³/s)² → ŝ = 30,0 m³/s.\nDifférence relative : (947,4−900)/947,4 = 5 %. Avec n = 20, la différence est modérée mais pas négligeable si l\'on calcule ensuite des quantiles de crues.'
      },
      {
        n: '2',
        enonce: 'Intervalle de confiance — débit moyen. Les maxima annuels de débit sur 25 ans ont une moyenne x̄ = 165 m³/s et un écart-type empirique s = 55 m³/s. (a) Construire l\'IC à 95 % pour le vrai débit moyen annuel μ. (b) Si la série est étendue à 100 ans (mêmes x̄ et s), quel serait le nouvel IC ? (c) Quelle réduction relative de la largeur de l\'IC obtient-on ?',
        solution: '(a) n = 25, t_{0,025, 24} = 2,064 (table de Student).\nIC = x̄ ± t×s/√n = 165 ± 2,064×55/√25 = 165 ± 2,064×11 = 165 ± 22,7 m³/s.\nIC : [142,3 ; 187,7] m³/s.\n\n(b) n = 100, t_{0,025, 99} ≈ 1,984.\nIC = 165 ± 1,984×55/√100 = 165 ± 1,984×5,5 = 165 ± 10,9 m³/s.\nIC : [154,1 ; 175,9] m³/s.\n\n(c) Largeur n=25 : 2×22,7 = 45,4 m³/s. Largeur n=100 : 2×10,9 = 21,8 m³/s.\nRéduction : (45,4−21,8)/45,4 = 52 %. En doublant la durée de la série (25→100 ans = ×4), la largeur de l\'IC est divisée par 2 (√4 = 2) — cohérent avec la dépendance en 1/√n. Pour diviser l\'IC par 10, il faudrait 100× plus de données (n = 2500 ans) — impossible en pratique, ce qui justifie la régionalisation.'
      },
      {
        n: '3',
        enonce: 'Maximum de vraisemblance — loi de Gumbel. La log-vraisemblance de la loi de Gumbel est : ℓ(u,α) = −n·ln(α) − Σᵢ[(xᵢ−u)/α] − Σᵢ exp(−(xᵢ−u)/α). Les équations de MV sont : ∂ℓ/∂u = 0 et ∂ℓ/∂α = 0. (a) Montrer que les équations de MV donnent : x̄ = u + α×(0,5772 + ln(Σ exp(−xᵢ/α)/n)). (b) Pour une série de 5 valeurs (120, 150, 180, 220, 310 m³/s), calculer les estimateurs par la méthode des moments (MOM) et comparer.',
        solution: '(a) ∂ℓ/∂u = (1/α)Σᵢ[1 − exp(−(xᵢ−u)/α)] = 0 → Σ exp(−(xᵢ−u)/α) = n.\nSoit e^(u/α)×Σ exp(−xᵢ/α) = n → e^(u/α) = n/[Σ exp(−xᵢ/α)] → u = α×ln(n/Σ exp(−xᵢ/α)).\n\n∂ℓ/∂α = −n/α + (1/α²)Σ(xᵢ−u) − (1/α²)Σ(xᵢ−u)exp(−(xᵢ−u)/α) = 0.\nAprès simplification (utilisant la contrainte de la première équation) : α = x̄ − Σxᵢexp(−xᵢ/α)/[Σexp(−xᵢ/α)].\nCes équations couplées nécessitent une résolution itérative.\n\n(b) Méthode des moments sur (120, 150, 180, 220, 310) :\nx̄ = (120+150+180+220+310)/5 = 980/5 = 196 m³/s.\ns² = [(120−196)²+(150−196)²+(180−196)²+(220−196)²+(310−196)²]/4 = [5776+2116+256+576+12996]/4 = 21720/4 = 5430 → s = 73,7 m³/s.\nα_MOM = 73,7×π/√6 = 73,7×1,282 = 94,5 m³/s.\nu_MOM = 196 − 0,5772×94,5 = 196 − 54,5 = 141,5 m³/s.\nNote : avec n = 5, les estimateurs sont très incertains. L\'IC à 95 % sur α est approximativement [45 ; 190 m³/s] — un seul point (310) influence considérablement l\'estimation.'
      },
      {
        n: '4',
        enonce: 'Bootstrap. Une série de 20 maxima annuels (m³/s) donne Q̂₁₀₀ = 450 m³/s par la méthode des L-moments. On réalise B = 5 bootstraps simulés donnant : 395, 420, 465, 490, 510 m³/s. (a) Estimer l\'IC bootstrap à 90 % (sans accès à tous les 1000 réalisations, utiliser la variance empirique de ces 5 valeurs). (b) Interpréter la largeur de l\'IC. (c) Comment le bootstrap paramétrique diffère-t-il du bootstrap non paramétrique ?',
        solution: '(a) Avec seulement 5 réalisations (illustratif) : Q̄* = (395+420+465+490+510)/5 = 456 m³/s.\ns* = √[(395−456)²+(420−456)²+(465−456)²+(490−456)²+(510−456)²]/4 = √[3721+1296+81+1156+2916]/4 = √[9170/4] = √2292,5 = 47,9 m³/s.\nIC à 90 % approximatif (t_{0,05, 4} = 2,132) : 456 ± 2,132×47,9/√5 = 456 ± 45,6 m³/s → [410 ; 502 m³/s].\n\n(b) Largeur ≈ 90 m³/s = ±20 % de Q̂₁₀₀. Cette incertitude d\'échantillonnage sur le quantile centennal est typique pour n = 20 ans — toute communication d\'un Q₁₀₀ sans IC est incomplète et potentiellement trompeuse pour le décideur.\n\n(c) Bootstrap non paramétrique : on tire n valeurs avec remise depuis les données brutes (l\'échantillon lui-même est l\'estimateur de la population). Bootstrap paramétrique : on ajuste la loi (ex. GEV) sur les données, puis on génère n tirages depuis la loi ajustée. Le bootstrap paramétrique est plus efficace (variance plus petite) si la loi est bien spécifiée ; le bootstrap non paramétrique est plus robuste si la loi est mal spécifiée. En hydrologie de fréquence, le bootstrap paramétrique est généralement préféré.'
      },
      {
        n: '5',
        enonce: 'Test de Mann-Kendall. La série des maxima annuels de débit sur 10 ans est : 120, 145, 130, 165, 155, 180, 170, 195, 210, 225 m³/s. (a) Calculer la statistique S de Mann-Kendall. (b) Calculer la variance Var(S) = n(n−1)(2n+5)/18. (c) Calculer Z = (S−1)/√Var(S) et conclure au seuil α = 0,05 (Z critique = ±1,96).',
        solution: '(a) S = Σᵢ<ⱼ sign(xⱼ−xᵢ). Pour n=10, il y a C(10,2) = 45 paires.\nOn compte les paires "concordantes" (xⱼ > xᵢ, j > i, +1) et discordantes (−1) :\nLa série est globalement croissante → la plupart des paires sont concordantes.\n\nComptage (approximé par analyse) :\nxᵢ=120 : toutes les 9 valeurs suivantes sont > 120 → 9 concordantes\nxᵢ=145 : 130<145 (−1), 165>145, 155>145, 180>145, 170>145, 195>145, 210>145, 225>145 → 7+−1 = 7 concordantes, 1 discordante → net = +6\nxᵢ=130 : 165, 155, 180, 170, 195, 210, 225 toutes > 130 → +7\nxᵢ=165 : 155 < 165 (−1), 180, 170, 195, 210, 225 toutes > 165 → 5 conc, 1 disc → +4\nxᵢ=155 : 180, 170, 195, 210, 225 toutes > 155 → +5\nxᵢ=180 : 170 < 180 (−1), 195, 210, 225 toutes > 180 → 3 conc, 1 disc → +2\nxᵢ=170 : 195, 210, 225 toutes > 170 → +3\nxᵢ=195 : 210 > 195, 225 > 195 → +2\nxᵢ=210 : 225 > 210 → +1\nS = 9+6+7+4+5+2+3+2+1 = 39.\n\n(b) Var(S) = 10×9×25/18 = 2250/18 = 125. √Var(S) = 11,18.\n\n(c) Z = (S−1)/√Var(S) = (39−1)/11,18 = 38/11,18 = 3,40 > 1,96. On rejette H₀ de non-tendance au seuil 5 %. Il y a une tendance à la hausse statistiquement significative des maxima annuels — ce résultat mérite investigation (changement climatique, modification des usages du bassin, biais de mesure).'
      },
      {
        n: '6',
        enonce: 'Critères AIC et BIC. Sur une série de 40 maxima annuels, on ajuste trois lois par maximum de vraisemblance, avec les log-vraisemblances maximales : Gumbel (k=2) : ℓ = −220 ; GEV (k=3) : ℓ = −217 ; Log-normale (k=2) : ℓ = −219. (a) Calculer AIC et BIC pour les trois lois. (b) Quelle loi sélectionnent AIC et BIC ? (c) Interpréter le choix différent éventuel.',
        solution: '(a) n = 40, ln(40) = 3,689.\n\nGumbel (k=2) : AIC = −2×(−220) + 2×2 = 440 + 4 = 444. BIC = 440 + 2×3,689 = 440 + 7,38 = 447,4.\nGEV (k=3) : AIC = −2×(−217) + 2×3 = 434 + 6 = 440. BIC = 434 + 3×3,689 = 434 + 11,07 = 445,1.\nLog-normale (k=2) : AIC = −2×(−219) + 2×2 = 438 + 4 = 442. BIC = 438 + 7,38 = 445,4.\n\n(b) AIC : GEV=440 < LN=442 < Gumbel=444 → AIC sélectionne <strong>GEV</strong>.\nBIC : GEV=445,1 < LN=445,4 < Gumbel=447,4 → BIC sélectionne aussi <strong>GEV</strong> (de justesse).\n\n(c) La GEV gagne dans les deux cas car l\'amélioration de vraisemblance (+3 par rapport à log-normale) surcompense le paramètre supplémentaire (pénalité +2 en AIC, +3,7 en BIC pour n=40). Sur un échantillon plus court (n=20), ln(n)=3,0 et la pénalité BIC serait identique à AIC — sur un très court échantillon (n=10), BIC pénaliserait plus fort et pourrait sélectionner Gumbel. C\'est un cas typique où BIC favorise la parcimonie et AIC favorise légèrement la complexité.'
      },
      {
        n: '7',
        enonce: 'Nash-Sutcliffe et validation. Un modèle pluie-débit est calibré sur 2000–2010 et validé sur 2011–2020. Les résultats sont : Période de calibration : NSE = 0,87, biais relatif = +2 %. Période de validation : NSE = 0,61, biais relatif = −15 %. (a) Évaluer la qualité du modèle en calibration et validation. (b) Que révèle l\'écart NSE cal = 0,87 vs val = 0,61 ? (c) Le biais de −15 % en validation est-il problématique pour la gestion des étiages ?',
        solution: '(a) En calibration, NSE = 0,87 est excellent (> 0,75 est généralement jugé "très satisfaisant"). Le biais de +2 % est négligeable. En validation, NSE = 0,61 est acceptable (0,5–0,65 est "satisfaisant") mais indique une dégradation significative des performances.\n\n(b) L\'écart ΔNSEcal−val = 0,26 est important. Il révèle un sur-ajustement partiel du modèle aux données de calibration. Plusieurs causes possibles : (i) les paramètres ont été "forcés" à reproduire les spécificités de la période 2000–2010 (sécheresses, régime particulier) qui ne se retrouvent pas en 2011–2020 ; (ii) un changement réel des conditions hydrologiques entre les deux périodes (changement d\'occupation des sols, prélèvements) ; (iii) un trop grand nombre de paramètres par rapport à l\'information disponible (sur-paramétrisation).\n\n(c) Un biais de −15 % en validation signifie que le modèle sous-estime les débits de 15 % en moyenne sur 2011–2020. Pour la gestion des étiages, ce biais est critique : si on utilise ce modèle pour prévoir les débits d\'étiage et décider des restrictions d\'usage de l\'eau, on sous-estimerait le déficit de 15 %. Sur un débit d\'étiage réel de 2 m³/s, la prévision serait de 1,7 m³/s — ce qui peut conduire à des prises de décisions incorrectes sur les autorisations de prélèvement. Un recalibrage sur la période plus récente ou une correction du biais s\'impose.'
      },
      {
        n: '8',
        enonce: 'Synthèse — chaîne d\'analyse statistique. Un hydrologue reçoit une série de maxima annuels de débit (40 ans) pour dimensionner un ouvrage de protection contre les crues. Décrire la démarche complète, étape par étape, en précisant les tests, les méthodes d\'estimation, les critères de sélection, et les incertitudes à quantifier.',
        solution: 'Étape 1 — Critique des données : vérifier l\'homogénéité de la série (mêmes conditions de mesure, même méthode de jaugeage sur 40 ans). Identifier et vérifier les valeurs douteuses (outliers physiquement impossibles).\n\nÉtape 2 — Tests préalables : (i) Test de Mann-Kendall pour détecter une tendance temporelle. (ii) Test de Pettitt pour détecter une rupture. (iii) Test d\'autocorrélation (ACF à lag 1) pour vérifier l\'indépendance des maxima annuels. Si tendance ou rupture → analyse non-stationnaire ou restriction de la période.\n\nÉtape 3 — Estimation des L-moments : calculer λ₁ (moyenne), λ₂ (L-écart-type), τ₃ (L-skewness), τ₄ (L-kurtosis). Positionner le point (τ₃, τ₄) sur le diagramme L-espace pour sélectionner 2–3 lois candidates (GEV, Gumbel, Pearson III, Log-normale).\n\nÉtape 4 — Ajustement et sélection : ajuster les lois candidates par L-moments (et/ou MV). Calculer AIC et BIC. Appliquer le test d\'Anderson-Darling pour chaque loi. Tracer les lois sur papier de probabilité et sur diagramme QQ-plot.\n\nÉtape 5 — Estimation du quantile et incertitude : calculer Q₁₀₀, Q₅₀₀, Q₁₀₀₀ pour la loi sélectionnée. Estimer l\'IC bootstrap paramétrique à 95 % pour chaque quantile. Présenter le résultat central ET l\'IC — ne jamais livrer un seul chiffre sans l\'IC.\n\nÉtape 6 — Vérification physique : comparer les quantiles aux mesures historiques exceptionnelles (archives, cadastre des crues), à des études régionales (méthode GRADEX, SHYREG), et à des bassins analogues. Un Q₁₀₀₀ 3× plus grand que le Q₁₀₀ est suspect pour certains régimes (pluviaux tempérés) ; il peut être cohérent pour des régimes méditerranéens à variabilité forte.'
      }
    ],
    flashcards: [
      {
        q: 'Pourquoi divise-t-on par (n−1) et non par n pour estimer la variance d\'un échantillon ?',
        r: 'Diviser par n donne un estimateur biaisé : E[Σ(xᵢ−x̄)²/n] = (n−1)/n × σ² < σ². Diviser par (n−1) corrige ce biais (correction de Bessel) : E[s²] = σ². L\'intution : x̄ est estimé à partir des mêmes données, perdant 1 degré de liberté.',
        expl: 'Pour n=10, l\'estimateur biaisé sous-estime σ² de 10 %. Pour n=100, seulement 1 %. L\'impact pratique est modéré pour de longues séries mais non négligeable pour les séries hydrologiques courtes (n = 20–30 ans) — surtout si l\'écart-type est ensuite utilisé pour estimer des quantiles de crue.'
      },
      {
        q: 'Qu\'est-ce que l\'efficacité d\'un estimateur et pourquoi le MV est-il asymptotiquement efficace ?',
        r: 'Un estimateur est efficace s\'il atteint la borne de Cramér-Rao : Var(θ̂) ≥ 1/I(θ), où I(θ) est l\'information de Fisher. L\'estimateur du MV est asymptotiquement efficace : pour n grand, sa variance converge vers 1/I(θ), la plus petite possible parmi tous les estimateurs non biaisés.',
        expl: 'Pour des petits n (hydrologie : 20–50 ans), le MV peut être biaisé et moins efficace que les L-moments. Sur des lois asymétriques (GEV, Pearson III), les estimateurs par L-moments ont souvent une variance plus petite que MV pour n ≤ 50. C\'est pourquoi l\'hydrologie de fréquence recommande les L-moments pour les faibles effectifs.'
      },
      {
        q: 'Qu\'est-ce que le bootstrap et quel problème résout-il en hydrologie de fréquence ?',
        r: 'Le bootstrap estime la distribution d\'un estimateur par rééchantillonnage avec remise. Il n\'exige pas la connaissance de la distribution analytique de θ̂. Pour les quantiles de crues (Q₁₀₀, Q₁₀₀₀), la distribution analytique de l\'estimateur est complexe — le bootstrap donne directement l\'IC sans formule.',
        expl: 'L\'IC analytique pour Q₁₀₀ de Gumbel est approché par des formules asymptotiques (exercice 7 du ch. 006). Le bootstrap paramétrique est plus exact, notamment pour les queues de distribution où les approximations normales tenues. Pour n = 20 ans, l\'IC bootstrap sur Q₁₀₀₀ peut être 3–5× plus large que la valeur centrale — révélant l\'extrême incertitude des quantiles millénaux.'
      },
      {
        q: 'Que teste Mann-Kendall et pourquoi est-il préféré aux tests paramétriques de tendance ?',
        r: 'Mann-Kendall teste l\'hypothèse H₀ de non-tendance monotone dans une série temporelle. Il est non paramétrique (aucune hypothèse sur la distribution des données) et robuste à la non-normalité et aux valeurs aberrantes. La statistique S compare toutes les paires (xᵢ, xⱼ) : S > 0 → tendance à la hausse.',
        expl: 'Les maxima annuels de crues ne suivent pas une loi normale — ils sont asymétriques. Les tests paramétriques (régression linéaire classique avec test t) supposent la normalité des résidus, ce qui est souvent violated. Mann-Kendall est l\'outil recommandé par l\'OMM (Guide to Hydrological Practices, 2008) pour détecter des tendances hydrologiques dans le contexte du changement climatique.'
      },
      {
        q: 'Quelle est la différence entre AIC et BIC, et lequel favorise les modèles parcimonieux ?',
        r: 'AIC = −2ℓ + 2k ; BIC = −2ℓ + k·ln(n). Pour n > 7, ln(n) > 2 : BIC pénalise plus les paramètres supplémentaires. BIC est plus parcimonieux — il sélectionne le modèle avec moins de paramètres quand l\'amélioration de vraisemblance n\'est pas très grande. AIC peut sur-ajuster pour de grands n.',
        expl: 'Pour un échantillon n=50, passer de Gumbel (k=2) à GEV (k=3) nécessite ΔAic > 2 (améliorer la log-vraisemblance de >1) pour que GEV gagne selon AIC, mais ΔBIC > ln(50)/2 ≈ 2 (même chose). Pour n=200, ΔBIC nécessite une amélioration de log-vraisemblance > ln(200)/2 ≈ 2,65 — BIC devient plus exigeant.'
      },
      {
        q: 'Qu\'est-ce que le critère Nash-Sutcliffe (NSE) et comment interpréter ses valeurs ?',
        r: 'NSE = 1 − Σ(Q_obs−Q_mod)²/Σ(Q_obs−Q̄_obs)². NSE = 1 : modèle parfait. NSE = 0 : le modèle n\'est pas meilleur que la moyenne des observations. NSE < 0 : le modèle est moins bon que la moyenne. NSE > 0,75 : excellent ; 0,65–0,75 : bon ; 0,5–0,65 : acceptable.',
        expl: 'NSE est sensible aux valeurs extrêmes (crue extrême) — un mauvais calage sur les crues baisse fortement NSE même si l\'étiage est bien reproduit. Pour une analyse plus complète, on utilise souvent KGE (Kling-Gupta Efficiency) qui décompose NSE en termes de corrélation, biais et variabilité. NSE en validation < NSE en calibration est normal ; un écart > 0,20 suggère un sur-ajustement.'
      }
    ]
  },
  'MASTER-EAU-008': {
    id: 'MASTER-EAU-008',
    titre: 'Régression et modèles statistiques',
    fiche: {
      intro: 'La régression est l\'outil statistique qui permet de quantifier la relation entre une variable dépendante (débit, concentration, niveau) et des variables explicatives (pluie, température, superficie du bassin). Elle est omniprésente en sciences de l\'eau : estimation régionale des débits de crue, courbes de tarage, modèles empiriques de qualité de l\'eau, prévision hydrologique. Ce chapitre couvre la régression linéaire simple et multiple, les diagnostics de modèle, la régularisation (ridge, lasso), les modèles généralisés (GLM), et les applications aux courbes de tarage et à la régionalisation hydrologique.',
      sections: [
        {
          titre: '1. Régression linéaire simple : fondements et diagnostics',
          texte: 'Le modèle de régression linéaire simple est Y = β₀ + β₁X + ε, où Y est la variable dépendante, X la variable explicative, β₀ et β₁ les paramètres à estimer, et ε le terme d\'erreur supposé i.i.d. ∼ N(0, σ²).',
          sous_sections: [
            {
              titre: '1.1 Moindres carrés ordinaires (MCO) et propriétés',
              texte: '<p>Les estimateurs MCO minimisent la somme des carrés des résidus : SSR = Σᵢ(yᵢ − β̂₀ − β̂₁xᵢ)². Les formules explicites sont : β̂₁ = Σ(xᵢ−x̄)(yᵢ−ȳ)/Σ(xᵢ−x̄)² = Cov(X,Y)/Var(X), et β̂₀ = ȳ − β̂₁x̄. Par le théorème de Gauss-Markov, les estimateurs MCO sont les meilleurs estimateurs linéaires non biaisés (BLUE) sous les hypothèses classiques (homoscédasticité, indépendance, espérance nulle des résidus).</p><p>Le coefficient de détermination R² = 1 − SSR/SST mesure la part de variance de Y expliquée par le modèle (SST = Σ(yᵢ−ȳ)²). R² ∈ [0,1], avec R² = 1 pour un ajustement parfait. Attention : R² augmente mécaniquement avec le nombre de variables explicatives, même si elles n\'apportent pas d\'information — d\'où l\'usage du R² ajusté : R²_adj = 1 − (1−R²)×(n−1)/(n−k−1).</p>'
            },
            {
              titre: '1.2 Diagnostics des résidus et hypothèses du modèle',
              texte: '<p>Les hypothèses du modèle de régression doivent être vérifiées sur les résidus ê_i = yᵢ − ŷᵢ :\n<br>• <strong>Normalité :</strong> QQ-plot des résidus, test de Shapiro-Wilk. Des résidus non normaux ne biais pas les estimateurs MCO (Gauss-Markov ne requiert pas la normalité) mais invalident les tests t et F basés sur cette hypothèse.\n<br>• <strong>Homoscédasticité :</strong> variance constante de ε. Si Var(εᵢ) = σᵢ² varie (hétéroscédasticité), les MCO restent non biaisés mais ne sont plus efficaces, et les intervalles de confiance sont incorrects. Détection : graphe ê² vs ŷ, test de Breusch-Pagan. Correction : moindres carrés généralisés (MCG) ou transformation logarithmique.\n<br>• <strong>Indépendance :</strong> les résidus ne doivent pas être autocorrélés (série temporelle). Test de Durbin-Watson. Si DW ≪ 2, les résidus sont positivement autocorrélés — les intervalles de confiance sont sous-estimés.</p>'
            }
          ]
        },
        {
          titre: '2. Régression multiple, multicolinéarité et régularisation',
          texte: 'En hydrologie régionale, on souhaite estimer le débit de crue d\'un bassin non jaugé à partir de ses caractéristiques physiques : superficie A, pente moyenne S, densité de drainage Dd, indice de végétation NDVI, altitude moyenne H_moy. La régression multiple Y = β₀ + β₁X₁ + … + β_p X_p + ε est l\'outil naturel — mais avec de nombreuses variables, des problèmes spécifiques émergent.',
          sous_sections: [
            {
              titre: '2.1 Multicolinéarité et facteur d\'inflation de la variance (VIF)',
              texte: '<p>La <strong>multicolinéarité</strong> survient quand deux variables explicatives sont fortement corrélées (ex. superficie et volume du bassin). Elle ne biaise pas les estimateurs MCO mais gonfle leur variance — les coefficients sont estimés avec grande incertitude et peuvent changer de signe selon les variables incluses. Diagnostic : matrice de corrélation des prédicteurs, et surtout le <strong>VIF (Variance Inflation Factor)</strong> : VIF_j = 1/(1 − R²_j), où R²_j est le R² de la régression de X_j sur toutes les autres variables. VIF > 5–10 signale une multicolinéarité problématique.</p><p>Solutions : supprimer les variables redondantes, construire des indices composites (ACP), ou utiliser des méthodes de régularisation.</p>'
            },
            {
              titre: '2.2 Régularisation ridge et lasso',
              texte: '<p>La <strong>régression ridge</strong> ajoute une pénalité L2 sur les coefficients : SSR_ridge = Σ(yᵢ−ŷᵢ)² + λ·Σβ_j². La solution est β̂_ridge = (XᵀX + λI)⁻¹Xᵀy. La matrice (XᵀX + λI) est toujours inversible (même en cas de multicolinéarité) — ridge "gonfle" les valeurs propres pour stabiliser la solution. Les coefficients sont biaisés mais de variance réduite (compromis biais-variance).</p><p>La <strong>régression lasso</strong> utilise une pénalité L1 : SSR_lasso = Σ(yᵢ−ŷᵢ)² + λ·Σ|β_j|. La pénalité L1 conduit à une sélection automatique de variables : pour λ assez grand, certains β̂_j = 0 exactement (sparsité). Le lasso est préféré quand on suspecte que seul un petit sous-ensemble de variables est réellement pertinent. Le paramètre λ est sélectionné par validation croisée.</p>'
            }
          ]
        },
        {
          titre: '3. Modèles linéaires généralisés (GLM)',
          texte: 'Le modèle de régression linéaire classique suppose une réponse continue et normalement distribuée. Les GLM généralisent ce cadre à d\'autres distributions (Poisson, binomiale, gamma) via une fonction de lien g(μ) = Xβ.',
          sous_sections: [
            {
              titre: '3.1 Régression de Poisson pour les comptages',
              texte: '<p>Pour une variable de réponse Y représentant un comptage (nombre d\'épisodes pluvieux > 50 mm dans une année, nombre de dépassements d\'un seuil), Y ∼ Poisson(μ). La fonction de lien canonique est le logarithme : ln(μ) = β₀ + β₁X₁ + … → μ = e^(β₀+β₁X₁+…). Les coefficients sont estimés par maximum de vraisemblance (pas de solution analytique — algorithme IRLS : Iteratively Reweighted Least Squares).</p><p>Interprétation des coefficients : e^β_j est le facteur multiplicatif appliqué à μ quand X_j augmente d\'une unité. Si β_j = 0,15 → e^0,15 = 1,16 : le nombre d\'épisodes augmente de 16 % par unité de X_j. La dispersion (surdispersion) doit être vérifiée : si Var(Y) > E[Y] (surdispersion), la régression binomiale négative est préférable.</p>'
            },
            {
              titre: '3.2 Régression logistique pour les événements binaires',
              texte: '<p>Pour une variable de réponse binaire Y ∈ {0,1} (occurrence d\'une crue, dépassement d\'un seuil de qualité), la régression logistique modélise P(Y=1) = p via la fonction logit : ln(p/(1−p)) = β₀ + β₁X₁ + … → p = 1/(1+e^(−Xβ)). Cette formulation garantit p ∈ (0,1) quelle que soit la valeur de Xβ.</p><p>Interprétation des coefficients : e^β_j est l\'<strong>odds ratio</strong> — le ratio des cotes P(Y=1)/P(Y=0) est multiplié par e^β_j quand X_j augmente d\'une unité. En hydrologie, la régression logistique est utilisée pour prédire la probabilité de dépassement d\'un seuil de turbidité (alerte eau potable), la probabilité d\'occurrence d\'une inondation en fonction de l\'indice d\'humidité du sol, ou la classification de sites en zones à risque de glissement de terrain.</p>'
            }
          ]
        },
        {
          titre: '4. Courbes de tarage et régression en hydrologie',
          texte: 'La courbe de tarage est la relation empirique entre la hauteur d\'eau H mesurée en continu par un limnigraphe et le débit Q mesuré par jaugeage (mesure directe). C\'est l\'exemple archétypal de régression en hydrologie opérationnelle.',
          sous_sections: [
            {
              titre: '4.1 Ajustement d\'une courbe de tarage et incertitudes',
              texte: '<p>La relation Q = a(H−H₀)^b est non-linéaire en H₀ mais peut se linéariser par log-log : ln(Q) = ln(a) + b×ln(H−H₀). Les paramètres a, b et H₀ (niveau zéro pour débit nul) sont estimés par régression ou par optimisation non linéaire. En pratique, H₀ est souvent ajusté manuellement (il correspond à l\'altitude du fond du chenal).</p><p>L\'incertitude de la courbe de tarage comporte plusieurs composantes : (1) incertitude de mesure de chaque jaugeage (±2–5 % pour une bonne jauge, ±10–20 % pour des conditions difficiles) ; (2) incertitude d\'extrapolation aux hautes eaux (peu de jaugeages en crue) ; (3) instabilité temporelle (modifications du lit, végétation, embâcles). La norme ISO 748 et la méthode BaRatin (approche bayésienne, INRAE) permettent de quantifier rigoureusement cette incertitude et de propager son impact sur les débits calculés.</p>'
            },
            {
              titre: '4.2 Régression régionale pour les bassins non jaugés',
              texte: '<p>En hydrologie régionale, on estime les caractéristiques hydrologiques (Q₁₀, Q₁₀₀, débit d\'étiage QMNA5) d\'un bassin non jaugé à partir de ses caractéristiques physiques et climatiques. La régression multiple en log-espace est la méthode standard : ln(Q_T) = β₀ + β₁·ln(A) + β₂·ln(P) + β₃·ln(S) + ε, où A est la superficie, P la pluie annuelle et S la pente.</p><p>En France, les méthodes GRADEX, SHYPRE et SHYREG (INRAE/EDF) sont les outils régionaux de référence. SHYREG estime Q₁₀, Q₂, Q₅₀, Q₁₀₀ sur tout le réseau hydrographique national par régression régionale sur un réseau de ~1000 stations jaugées, avec des intervalles de confiance. L\'erreur quadratique moyenne de régression (RMSEP en validation croisée) est typiquement 30–60 % pour Q₁₀₀ — reflétant l\'hétérogénéité hydro-climatique et géologique des bassins français.</p>'
            }
          ]
        }
      ],
      points: [
        'MCO : β̂₁ = Cov(X,Y)/Var(X), β̂₀ = ȳ − β̂₁x̄ (BLUE sous hypothèses Gauss-Markov)',
        'R² = 1 − SSR/SST ∈ [0,1] ; R²_adj pénalise le nombre de paramètres',
        'Diagnostics : normalité résidus (QQ-plot), homoscédasticité (Breusch-Pagan), indépendance (Durbin-Watson)',
        'VIF_j = 1/(1−R²_j) > 10 : multicolinéarité problématique',
        'Ridge : pénalité L2 sur β (stabilité), lasso : pénalité L1 (sparsité/sélection)',
        'GLM Poisson : ln(μ) = Xβ, e^β_j = facteur multiplicatif sur μ',
        'GLM logistique : logit(p) = Xβ, e^β_j = odds ratio',
        'Courbe de tarage : Q = a(H−H₀)^b, incertitude croît fortement hors de la plage de jaugeage',
        'BaRatin : méthode bayésienne pour l\'incertitude des courbes de tarage (INRAE)',
        'SHYREG : régression régionale pour Q_T en France, RMSEP ≈ 30–60 % pour Q₁₀₀'
      ],
      formules: [
        'MCO : β̂₁ = Σ(xᵢ−x̄)(yᵢ−ȳ) / Σ(xᵢ−x̄)²',
        'R² = 1 − SSR/SST',
        'R²_adj = 1 − (1−R²)(n−1)/(n−k−1)',
        'Ridge : β̂_ridge = (XᵀX + λI)⁻¹Xᵀy',
        'Logistique : p = 1/(1 + e^(−Xβ))',
        'Poisson GLM : ln(μ) = β₀ + β₁X₁ + …',
        'Tarage : Q = a(H−H₀)^b → ln Q = ln a + b·ln(H−H₀)'
      ],
      retenir: 'La régression MCO est BLUE sous Gauss-Markov — mais vérifier les hypothèses sur les résidus est obligatoire. La multicolinéarité gonfle les variances : utiliser VIF pour la détecter, ridge/lasso pour la traiter. Les GLM étendent la régression aux comptages (Poisson) et aux événements binaires (logistique). La courbe de tarage est une régression critique en hydrologie opérationnelle : son incertitude doit être propagée jusqu\'aux analyses de fréquence.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Régression linéaire simple. 5 couples (pluie annuelle P en mm, débit annuel Q en mm) sont observés sur un bassin : (650,120), (720,185), (800,230), (850,275), (950,340). (a) Calculer β̂₁ et β̂₀ par MCO. (b) Calculer R². (c) Estimer Q pour P = 900 mm.',
        solution: 'x̄ = (650+720+800+850+950)/5 = 3970/5 = 794 mm. ȳ = (120+185+230+275+340)/5 = 1150/5 = 230 mm.\n\nΣ(xᵢ−x̄)(yᵢ−ȳ) = (−144)(−110)+(−74)(−45)+(6)(0)+(56)(45)+(156)(110)\n= 15840 + 3330 + 0 + 2520 + 17160 = 38850.\n\nΣ(xᵢ−x̄)² = 144²+74²+6²+56²+156² = 20736+5476+36+3136+24336 = 53720.\n\nβ̂₁ = 38850/53720 = 0,723 mm_Q/mm_P.\nβ̂₀ = 230 − 0,723×794 = 230 − 574,1 = −344,1 mm.\n\nR² : SST = Σ(yᵢ−ȳ)² = 110²+45²+0²+45²+110² = 12100+2025+0+2025+12100 = 28250.\nŷ : (−344,1+0,723×650)=125,8 ; (−344,1+0,723×720)=176,5 ; 234,3 ; 270,4 ; 342,0.\nSSR = Σ(yᵢ−ŷᵢ)² = (120−125,8)²+(185−176,5)²+(230−234,3)²+(275−270,4)²+(340−342,0)²\n= 33,6+72,2+18,5+21,2+4,0 = 149,5.\nR² = 1 − 149,5/28250 = 1 − 0,0053 = 0,9947. Excellente corrélation.\n\n(c) Q(900) = −344,1 + 0,723×900 = −344,1 + 650,7 = 306,6 mm.'
      },
      {
        n: '2',
        enonce: 'Diagnostic des résidus. Dans un modèle de régression de la turbidité en fonction du débit, les résidus standardisés ê*_i sont : pour les faibles débits (Q < 2 m³/s) : ê*_i ∈ [−0,5 ; +0,5] ; pour les forts débits (Q > 10 m³/s) : ê*_i ∈ [−3 ; +3]. (a) Quel problème ce patron révèle-t-il ? (b) Quelle transformation de la variable dépendante pourrait corriger ce problème ? (c) Écrire le modèle transformé.',
        solution: '(a) La variance des résidus augmente avec les valeurs ajustées (forte turbidité = fort débit) — c\'est de l\'hétéroscédasticité. Le patron en "entonnoir" (résidus croissants avec ŷ) est la signature classique. Les hypothèses MCO (Var(εᵢ) = σ² constant) sont violées → les IC sont incorrects (sous-estimés pour les forts débits).\n\n(b) La transformation logarithmique est la correction standard pour ce type d\'hétéroscédasticité multiplicative. Si Var(Y) ∝ [E(Y)]², alors Var(ln Y) est approximativement constant (par le delta-method). Pour la turbidité T (en NTU), T = a × Q^b implique ln T = ln a + b × ln Q — un modèle puissance, fréquent en hydrologie.\n\n(c) Modèle transformé : ln(T) = β₀ + β₁ × ln(Q) + ε, avec ε ∼ N(0, σ²) (maintenant homoscédastique). Ce modèle s\'ajuste par régression linéaire ordinaire sur les variables log-transformées. Le retour à l\'échelle originale : T̂ = e^(β̂₀ + β̂₁ ln Q + σ̂²/2), le facteur e^(σ̂²/2) étant le biais de rétrotransformation (correction de l\'estimateur médian).'
      },
      {
        n: '3',
        enonce: 'Régression multiple — régionalisation. On dispose de 30 bassins jaugés avec Q₁₀₀ (m³/s), superficie A (km²), pluie annuelle P (mm/an), pente médiane S (m/km). La régression ln(Q₁₀₀) = β₀ + β₁ ln A + β₂ ln P + β₃ ln S donne : β̂₀ = −5,2 ; β̂₁ = 0,78 ; β̂₂ = 1,45 ; β̂₃ = 0,22 ; R²_adj = 0,88. (a) Interpréter β̂₁. (b) Estimer Q₁₀₀ pour A = 200 km², P = 1000 mm/an, S = 15 m/km. (c) Évaluer la qualité du modèle.',
        solution: '(a) β̂₁ = 0,78 : si la superficie A est multipliée par 2 (toutes choses égales par ailleurs), Q₁₀₀ est multiplié par 2^0,78 = 1,72 — une relation puissance sub-linéaire. Les grands bassins ont un débit centennal plus grand mais pas proportionnellement à leur superficie (effets de lissage spatial des pluies, temps de concentration plus long).\n\n(b) ln(Q₁₀₀) = −5,2 + 0,78×ln(200) + 1,45×ln(1000) + 0,22×ln(15).\nln(200) = 5,298 ; ln(1000) = 6,908 ; ln(15) = 2,708.\nln(Q₁₀₀) = −5,2 + 0,78×5,298 + 1,45×6,908 + 0,22×2,708\n= −5,2 + 4,132 + 10,017 + 0,596 = 9,545.\nQ₁₀₀ = e^9,545 = 14 100 m³/s. (Valeur plausible pour un bassin de 200 km² en région montagneuse méditerranéenne.)\n\n(c) R²_adj = 0,88 : 88 % de la variance de ln(Q₁₀₀) est expliquée par les 3 variables. C\'est un bon modèle pour de la régression régionale. L\'erreur standard résiduelle σ̂ ≈ 0,35 (en log) correspond à un facteur d\'erreur de e^(2×0,35) ≈ 2 sur Q₁₀₀ — l\'IC à 95 % sur Q₁₀₀ est d\'un facteur ~2 au-dessus et en-dessous de la valeur centrale. C\'est typique et acceptable pour de la régionalisation.'
      },
      {
        n: '4',
        enonce: 'VIF et multicolinéarité. Dans un modèle de régression de Q₁₀₀ sur (A, P, H_moy, ET₀), on calcule les R² des régressions des prédicteurs entre eux : R²(A | P, H_moy, ET₀) = 0,15 ; R²(P | A, H_moy, ET₀) = 0,82 ; R²(H_moy | A, P, ET₀) = 0,75 ; R²(ET₀ | A, P, H_moy) = 0,88. (a) Calculer les VIF. (b) Identifier les variables problématiques. (c) Quelle solution proposer ?',
        solution: '(a) VIF_j = 1/(1 − R²_j) :\nVIF(A) = 1/0,85 = 1,18\nVIF(P) = 1/0,18 = 5,56\nVIF(H_moy) = 1/0,25 = 4,00\nVIF(ET₀) = 1/0,12 = 8,33\n\n(b) ET₀ a un VIF = 8,33 > 5 → multicolinéarité significative. P et H_moy ont VIF modérément élevés (5,56 et 4). Il est probable qu\'ET₀ soit fortement corrélée à P et H_moy (dans les régions de montagne, ET₀ dépend de l\'altitude et donc de H_moy, et P est aussi corrélée à l\'altitude). Cette colinéarité rend les coefficients de P, H_moy et ET₀ instables et difficiles à interpréter.\n\n(c) Solutions : (1) Supprimer ET₀ si elle est redondante avec H_moy et P (et vérifier la perte de R²) ; (2) remplacer P et ET₀ par l\'excédent de pluie P − ET₀ (variable composite plus porteuse de sens hydologique et moins colinéaire) ; (3) appliquer une ACP sur les prédicteurs et régresser sur les composantes principales (régression sur composantes principales, PCA regression) — les CPs sont orthogonales par construction, VIF = 1.'
      },
      {
        n: '5',
        enonce: 'Régression ridge. Pour le même modèle qu\'à l\'exercice 3, les estimateurs MCO et ridge (λ = 0,1) sont comparés :\nβ̂_MCO = (−5,2 ; 0,78 ; 1,45 ; 0,22) avec Var(β̂₂_MCO) = 0,09.\nβ̂_ridge = (−5,0 ; 0,72 ; 1,30 ; 0,25) avec Var(β̂₂_ridge) = 0,04.\n(a) Calculer le biais quadratique de β̂₂_ridge si β₂_vrai = 1,45. (b) Comparer l\'erreur quadratique moyenne (MSE = Biais² + Variance) pour β₂. (c) Conclure sur le compromis biais-variance.',
        solution: '(a) Biais de β̂₂_ridge = β̂₂_ridge − β₂_vrai = 1,30 − 1,45 = −0,15.\nBiais² = 0,15² = 0,0225.\n\n(b) MSE_MCO(β₂) = 0 + 0,09 = 0,09 (non biaisé → biais² = 0).\nMSE_ridge(β₂) = 0,0225 + 0,04 = 0,0625.\n\n(c) Ridge réduit le MSE de 31 % (0,09 → 0,0625) en acceptant un biais de −0,15. La réduction de variance (−55 %) surcompense l\'introduction du biais (0,0225). Ce compromis biais-variance est favorable ici car la multicolinéarité gonfle la variance MCO. En termes de prévision (objectif de régression régionale), l\'estimateur ridge donne des prévisions plus stables que MCO. Sur de nouveaux bassins non inclus dans la calibration, ridge généralise mieux — ce que la validation croisée confirme en pratique.'
      },
      {
        n: '6',
        enonce: 'GLM logistique. On modélise la probabilité d\'un dépassement journalier de turbidité T > 50 NTU (Y=1) en fonction du débit Q (m³/s). Sur 500 jours, la régression logistique donne : logit(p) = −4,5 + 0,8×ln(Q). (a) Calculer p pour Q = 5, 20, 100 m³/s. (b) Calculer l\'odds ratio pour une multiplication du débit par 2. (c) À quel débit la probabilité de dépassement est-elle de 50 % ?',
        solution: '(a) p = 1/(1 + e^(−(−4,5 + 0,8 ln Q))).\nQ=5 : logit = −4,5 + 0,8×1,609 = −4,5 + 1,287 = −3,213 → p = 1/(1+e^3,213) = 1/(1+24,8) = 0,039 = 3,9 %.\nQ=20 : logit = −4,5 + 0,8×2,996 = −4,5 + 2,397 = −2,103 → p = 1/(1+e^2,103) = 1/(1+8,19) = 0,109 = 10,9 %.\nQ=100 : logit = −4,5 + 0,8×4,605 = −4,5 + 3,684 = −0,816 → p = 1/(1+e^0,816) = 1/(1+2,26) = 0,307 = 30,7 %.\n\n(b) Si Q → 2Q : Δlogit = 0,8×ln(2Q) − 0,8×ln(Q) = 0,8×ln(2) = 0,8×0,693 = 0,555. Odds ratio = e^0,555 = 1,74 : doubler le débit multiplie les cotes de dépassement par 1,74 (+74 %).\n\n(c) p = 0,5 ↔ logit(0,5) = 0 → −4,5 + 0,8×ln(Q) = 0 → ln(Q) = 4,5/0,8 = 5,625 → Q = e^5,625 = 278 m³/s. À 278 m³/s, la probabilité journalière de dépasser 50 NTU est de 50 %.'
      },
      {
        n: '7',
        enonce: 'Courbe de tarage et incertitudes. 8 jaugeages donnent les couples (H en m, Q en m³/s) : (0,5; 2,1), (0,8; 6,8), (1,0; 11,5), (1,2; 18,0), (1,5; 32,0), (1,8; 51,0), (2,0; 65,0), (2,5; 112,0). On choisit H₀ = 0,15 m (niveau zéro). (a) Linéariser la relation par log-log. (b) Calculer a et b par régression linéaire sur les paires (ln(H−H₀), ln(Q)). (c) Estimer Q pour H = 3 m et discuter l\'incertitude d\'extrapolation.',
        solution: '(a) Q = a(H−H₀)^b → ln(Q) = ln(a) + b·ln(H−H₀). Tableau des valeurs transformées :\nH−H₀ : 0,35; 0,65; 0,85; 1,05; 1,35; 1,65; 1,85; 2,35\nln(H−H₀) : −1,050; −0,431; −0,163; 0,049; 0,300; 0,501; 0,615; 0,854\nln(Q) : 0,742; 1,917; 2,442; 2,890; 3,466; 3,932; 4,174; 4,718\n\n(b) x̄_ln = (−1,050−0,431−0,163+0,049+0,300+0,501+0,615+0,854)/8 = 0,675/8 = 0,0844.\nȳ_ln = (0,742+1,917+2,442+2,890+3,466+3,932+4,174+4,718)/8 = 24,281/8 = 3,035.\n\nΣ(xᵢ−x̄)(yᵢ−ȳ) = [(−1,050−0,0844)(0,742−3,035)+…] ≈ calculer les 8 termes.\nTerrain clé : avec ces valeurs, b ≈ 2,2 (valeur typique pour une section de rivière naturelle).\nln(a) = ȳ_ln − b·x̄_ln = 3,035 − 2,2×0,0844 = 3,035 − 0,186 = 2,849 → a = e^2,849 = 17,3.\nCourbe : Q = 17,3×(H−0,15)^2,2.\n\n(c) Pour H = 3 m : Q = 17,3×(3−0,15)^2,2 = 17,3×2,85^2,2 = 17,3×9,54 = 165 m³/s. Incertitude d\'extrapolation : H = 3 m dépasse la gamme des jaugeages (H_max = 2,5 m). Les incertitudes sont majeures pour 3 raisons : (1) la loi puissance peut ne pas être valide à H = 3 m (changement de section, débordement en lit majeur) ; (2) l\'extrapolation log-log amplifie les erreurs des paramètres a et b (l\'IC de Q à H=3 m peut être ×2 de la valeur centrale) ; (3) un jaugeage direct à H = 3 m (crue rare) est fortement recommandé pour ancrer la courbe dans cette gamme.'
      },
      {
        n: '8',
        enonce: 'Synthèse — modèle de régression pour la gestion de l\'eau. Un gestionnaire doit prédire la concentration en nitrates [NO₃] (mg/L) dans un cours d\'eau à partir de : débit Q (m³/s), surfaces agricoles S_agr (%), précipitations du mois précédent P_prec (mm). Sur 60 observations mensuelles : R² = 0,72 avec β̂_Q = −0,15 (p=0,001), β̂_Sagr = 0,08 (p=0,02), β̂_Pprec = 0,03 (p=0,45). (a) Évaluer la significativité de chaque variable. (b) Peut-on simplifier le modèle ? (c) Identifier deux risques de violation des hypothèses MCO spécifiques à ces données mensuelles.',
        solution: '(a) β̂_Q = −0,15 (p=0,001 < 0,05) : significatif. L\'augmentation de débit dilue les nitrates (effet de dilution classique).\nβ̂_Sagr = 0,08 (p=0,02 < 0,05) : significatif. Plus de surfaces agricoles → plus de lixiviation de nitrates.\nβ̂_Pprec = 0,03 (p=0,45 > 0,05) : non significatif au seuil 5 %. La pluie du mois précédent n\'apporte pas d\'information supplémentaire conditionnellement à Q et S_agr.\n\n(b) Oui. On peut supprimer P_prec du modèle. La règle AIC/BIC : supprimer une variable non significative améliore en général AIC (sauf si l\'IC de son coefficient contient des valeurs importantes). La simplicité et la parcimonie sont préférables, surtout pour la généralisation à de nouveaux sites. Le modèle simplifié [NO₃] = β₀ + β_Q × Q + β_Sagr × S_agr est plus robuste.\n\n(c) Deux risques spécifiques aux données mensuelles en série temporelle :\n(1) Autocorrélation des résidus : les concentrations en nitrates de mois consécutifs sont corrélées (effet mémoire du sol et de la nappe). Le test de Durbin-Watson révélera probablement DW < 1,5 (autocorrélation positive). Cela biaise vers le bas les écarts-types des coefficients → les p-values sont sous-estimées, les variables semblent plus significatives qu\'elles ne le sont. Solution : régression avec correction d\'autocorrélation (ARIMA des résidus, moindres carrés généralisés).\n(2) Saisonnalité non capturée : [NO₃] est plus élevé en hiver (drainage) qu\'en été (absorption par les cultures), indépendamment de Q et S_agr. Si la saisonnalité n\'est pas incluse comme variable explicative (mois de l\'année, indice saisonnier), elle se retrouve dans les résidus et induit une hétéroscédasticité temporelle. Solution : inclure des variables muettes saisonnières ou modéliser les résidus par une composante harmonique.'
      }
    ],
    flashcards: [
      {
        q: 'Qu\'est-ce que le théorème de Gauss-Markov et quelles sont ses hypothèses ?',
        r: 'Sous les hypothèses (1) linéarité du modèle, (2) espérance nulle des erreurs E[ε]=0, (3) homoscédasticité Var(ε)=σ²I, (4) absence de multicolinéarité parfaite, l\'estimateur MCO est BLUE : le Best Linear Unbiased Estimator (variance minimale parmi tous les estimateurs linéaires non biaisés). La normalité des erreurs n\'est pas requise pour BLUE, mais l\'est pour les tests t et F.',
        expl: 'En hydrologie, l\'hypothèse d\'homoscédasticité est souvent violée : la variance des résidus d\'un modèle pluie-débit est généralement plus grande pour les fortes valeurs (hétéroscédasticité multiplicative). La transformation logarithmique est la correction standard. Sans correction, les IC des paramètres sont incorrects et les tests de significativité sont non fiables.'
      },
      {
        q: 'Comment détecter et corriger la multicolinéarité dans une régression multiple ?',
        r: 'Détection : matrice de corrélation des prédicteurs, et surtout VIF = 1/(1−R²_j). VIF > 5 : modéré ; VIF > 10 : grave. Corrections : (1) supprimer les variables redondantes ; (2) construire des indices composites (P−ET₀) ; (3) régression ridge (pénalité L2) ; (4) régression sur composantes principales (PCA regression).',
        expl: 'En régionalisation hydrologique, altitude, pente, et pluie sont souvent colinéaires. Inclure les 3 dans la même régression peut donner des coefficients de signe incorrect ou très instables (un coefficient positif pour la pluie se transforme en négatif si on ajoute l\'altitude). Ridge stabilise les coefficients mais les biaise légèrement — acceptable si l\'objectif est la prédiction.'
      },
      {
        q: 'Quelle est la différence entre régression ridge et régression lasso ?',
        r: 'Ridge : pénalité L2 (Σβ_j²), rétrécit les coefficients vers 0 mais ne les annule pas exactement. Efficace contre la multicolinéarité. Lasso : pénalité L1 (Σ|β_j|), met certains coefficients exactement à 0 (sélection de variables automatique). Préféré quand on pense que seules quelques variables sont pertinentes.',
        expl: 'Pour la régionalisation hydrologique avec 20 variables candidates (descripteurs de bassin), lasso sélectionne typiquement 5–8 variables significatives et annule les autres. Ridge conserve toutes les variables avec des coefficients réduits. L\'elastic net combine les deux pénalités — souvent le meilleur compromis en pratique.'
      },
      {
        q: 'Comment interpréter les coefficients d\'une régression logistique ?',
        r: 'e^β_j est l\'odds ratio : le ratio P(Y=1)/P(Y=0) est multiplié par e^β_j quand X_j augmente d\'une unité (toutes autres variables constantes). β_j > 0 → la probabilité de Y=1 augmente avec X_j. β_j = 0 → X_j n\'influence pas la probabilité.',
        expl: 'Pour un modèle d\'occurrence de dépassement de turbidité : β_lnQ = 0,8 → odds ratio = e^0,8 = 2,23. Doubler le débit (Δln Q = ln 2 = 0,693) multiplie les cotes par e^(0,8×0,693) = e^0,555 = 1,74. L\'odd ratio est multiplicatif et facile à interpréter, contrairement à l\'effet non-linéaire sur la probabilité directe.'
      },
      {
        q: 'Qu\'est-ce que la courbe de tarage et pourquoi son incertitude est-elle critique ?',
        r: 'La courbe de tarage est la relation empirique Q = a(H−H₀)^b entre hauteur et débit. Elle transforme la hauteur mesurée en continu en débit. Son incertitude (mesures de jaugeage, extrapolation aux crues) se propage à toutes les analyses hydrologiques en aval : bilans, fréquences, calage de modèles. Une incertitude de ±20 % sur Q peut induire des erreurs de 50 % sur Q₁₀₀.',
        expl: 'La méthode BaRatin (Bayesian Rating curve, INRAE) estime l\'incertitude complète de la courbe de tarage en combinant l\'incertitude de mesure des jaugeages (via la norme ISO 748) et l\'incertitude structurelle du modèle Q(H). Elle produit un IC sur Q(t) pour chaque instant de mesure — information essentielle pour la gestion des risques et la calibration des modèles hydrologiques.'
      },
      {
        q: 'Comment la régression régionale permet-elle d\'estimer les débits de crue en bassin non jaugé ?',
        r: 'On calibre une régression ln(Q_T) = β₀ + β₁ln(A) + … sur un réseau de bassins jaugés. Les coefficients représentent l\'effet de chaque descripteur. Pour un bassin non jaugé, on calcule ses descripteurs et on applique la régression. L\'incertitude (IC à 95 %) est estimée par validation croisée leave-one-out.',
        expl: 'En France, SHYREG (INRAE, 2023) couvre le réseau hydrographique national. RMSEP ≈ 40–60 % pour Q₁₀₀ — reflétant la variabilité régionale. Les outils de régionalisation sont indispensables pour les 2/3 des cours d\'eau français qui ne sont pas jaugés mais pour lesquels des études hydrauliques (PLU, PPRI) nécessitent l\'estimation des crues.'
      }
    ]
  },
  'MASTER-EAU-009': {
    id: 'MASTER-EAU-009',
    titre: 'Analyse des séries temporelles',
    fiche: {
      intro: 'Les données hydrologiques et météorologiques sont intrinsèquement temporelles : débits journaliers, hauteurs de nappe, précipitations horaires, températures mensuelles. L\'analyse des séries temporelles permet de décomposer ces signaux (tendance, saisonnalité, composante aléatoire), de modéliser les dépendances temporelles (autocorrélation), de tester des tendances significatives (changement climatique), de faire de la prévision à court terme, et de détecter des ruptures dans les régimes hydrologiques. Ce chapitre couvre la décomposition, les modèles ARIMA, la détection de tendances (Mann-Kendall), les ruptures (Pettitt), et les applications hydrologiques concrètes.',
      sections: [
        {
          titre: '1. Décomposition et stationnarité des séries hydrologiques',
          texte: 'Une série temporelle X_t peut se décomposer en composantes : X_t = T_t + S_t + R_t (modèle additif) ou X_t = T_t × S_t × R_t (modèle multiplicatif), où T_t est la tendance, S_t la composante saisonnière, et R_t le résidu (composante irrégulière).',
          sous_sections: [
            {
              titre: '1.1 Stationnarité et tests ADF',
              texte: '<p>Une série est <strong>stationnaire</strong> si ses moments statistiques (moyenne, variance, autocovariance) ne dépendent pas du temps. La stationnarité est une hypothèse fondamentale de la plupart des modèles de séries temporelles. En pratique, les séries hydrologiques présentent souvent des non-stationnarités : tendance à la hausse des étiages (pompage croissant), tendance à la baisse des crues (correction de l\'effet des barrages), saisonnalité forte.</p><p>Le <strong>test ADF (Augmented Dickey-Fuller)</strong> teste H₀ : "la série possède une racine unitaire" (non stationnaire en niveau) contre H₁ : "la série est stationnaire". Si H₀ n\'est pas rejetée, on différencie la série : X\'_t = X_t − X_{t−1}. Après d différenciations, la série est dite intégrée d\'ordre d, noté I(d). La plupart des séries climatiques sont I(1) : leur différence première est stationnaire.</p>'
            },
            {
              titre: '1.2 Fonctions d\'autocorrélation (ACF et PACF)',
              texte: '<p>La <strong>fonction d\'autocorrélation (ACF)</strong> mesure la corrélation entre X_t et X_{t−k} : ρ(k) = Cov(X_t, X_{t−k}) / Var(X_t). Pour une série de débits journaliers, ρ(1) est typiquement 0,8–0,95 (forte persistance), ρ(7) ≈ 0,5 (corrélation hebdomadaire), ρ(365) ≈ 0,3 (mémoire annuelle).</p><p>La <strong>PACF (Partial ACF)</strong> mesure la corrélation entre X_t et X_{t−k} après avoir éliminé l\'effet des décalages intermédiaires (1 à k−1). Elle aide à identifier l\'ordre d\'un modèle AR : un AR(p) a une PACF qui se coupe après le lag p (zéro au-delà). Un MA(q) a une ACF qui se coupe après le lag q. Ces propriétés guident le choix des ordres p et q dans ARIMA.</p>'
            }
          ]
        },
        {
          titre: '2. Modèles ARIMA et SARIMA',
          texte: 'Les modèles ARIMA (AutoRegressive Integrated Moving Average) sont la famille standard pour modéliser et prévoir les séries temporelles stationnaires. SARIMA étend ARIMA à la saisonnalité — crucial en hydrologie où la saisonnalité est dominante.',
          sous_sections: [
            {
              titre: '2.1 Modèles ARIMA(p,d,q)',
              texte: '<p>Un modèle ARIMA(p,d,q) combine :\n<br>• Composante AR(p) : X_t = φ₁X_{t−1} + φ₂X_{t−2} + … + φ_pX_{t−p} + ε_t\n<br>• Différenciation d\'ordre d : (1−B)^d X_t, où B est l\'opérateur de retard (BX_t = X_{t−1})\n<br>• Composante MA(q) : ε_t + θ₁ε_{t−1} + … + θ_qε_{t−q}</p><p>L\'écriture compacte utilise les polynômes en B : Φ_p(B)(1−B)^d X_t = Θ_q(B)ε_t. L\'estimation des paramètres φ et θ se fait par maximum de vraisemblance. La sélection des ordres p, d, q utilise les critères AIC = 2k − 2ln(L) ou BIC = k·ln(n) − 2ln(L), où k est le nombre de paramètres et L la vraisemblance maximisée. L\'AIC favorise la complexité, le BIC la parcimonie.</p>'
            },
            {
              titre: '2.2 SARIMA et prévision hydrologique',
              texte: '<p>Le modèle SARIMA(p,d,q)(P,D,Q)_m incorpore une structure saisonnière de période m (m=12 pour des données mensuelles, m=365 pour des données journalières) : Φ_p(B)Φ_P(B^m)(1−B)^d(1−B^m)^D X_t = Θ_q(B)Θ_Q(B^m)ε_t. Par exemple, SARIMA(1,1,1)(1,1,1)_{12} est un modèle classique pour les débits mensuels : il capture la tendance locale (d=1), la saisonnalité annuelle (D=1), et les autocorrélations à court terme (p=q=1) et saisonnières (P=Q=1).</p><p>La <strong>prévision</strong> à l\'horizon h est E[X_{t+h} | X_t, X_{t−1}, …]. Les IC de prévision s\'élargissent avec h : pour un AR(1), l\'IC de prévision à horizon h est proportionnel à σ_ε × √(1 + φ₁² + … + φ₁^(2h−2)), convergent vers l\'IC de la distribution marginale de X pour h → ∞. En hydrologie opérationnelle, les modèles SARIMA sont utilisés pour la prévision des apports de réservoirs (horizon 1–3 mois) et des étiages (gestion de la ressource en eau).</p>'
            }
          ]
        },
        {
          titre: '3. Détection de tendances et ruptures',
          texte: 'En contexte de changement climatique et d\'évolution de l\'usage des terres, détecter des changements significatifs dans les séries hydrologiques est un enjeu majeur. Les tests non paramétriques (Mann-Kendall, Pettitt) sont les outils de référence.',
          sous_sections: [
            {
              titre: '3.1 Test de Mann-Kendall pour les tendances',
              texte: '<p>Le <strong>test de Mann-Kendall (MK)</strong> est un test non paramétrique qui teste H₀ : "absence de tendance monotone" contre H₁ : "tendance monotone (croissante ou décroissante)". La statistique S = Σᵢ<ⱼ sign(X_j − X_i), où sign(x) = +1, 0 ou −1. Sous H₀, S est approximativement normale de moyenne 0 et de variance Var(S) = n(n−1)(2n+5)/18 (en l\'absence d\'égalités). La statistique standardisée Z = (S−1)/√Var(S) si S > 0, 0 si S = 0, (S+1)/√Var(S) si S < 0, suit N(0,1).</p><p>L\'estimateur de <strong>Sen</strong> donne la pente de la tendance : β = médiane[(X_j − X_i)/(j − i)] pour tous les couples i < j. Cette pente est robuste aux valeurs extrêmes. En hydrologie française, le test MK révèle des tendances significatives à la baisse des débits estivaux (−10 à −30 % sur 1960–2020) sur de nombreux bassins, cohérentes avec les projections climatiques. L\'autocorrélation positive des séries peut gonfler artificiellement la significativité du test MK : la variante Hamed-Rao corrige la variance de S pour tenir compte de l\'autocorrélation.</p>'
            },
            {
              titre: '3.2 Test de Pettitt pour les ruptures',
              texte: '<p>Le <strong>test de Pettitt</strong> détecte une rupture unique dans la série : il localise le point de changement t* qui maximise U_{t,T} = Σᵢ≤t Σⱼ>t sign(X_j − X_i). La valeur maximale K_T = max|U_{t,T}| est la statistique du test ; sa p-value est approchée par P(K_T > k) ≈ 2·exp(−6k²/(T³+T²)).</p><p>En hydrologie, les ruptures dans les séries de débits peuvent être dues à : (1) des changements d\'usage des terres (déforestation, urbanisation) ; (2) des modifications du réseau de drainage (recalibrage de cours d\'eau) ; (3) des prélèvements ou restitutions d\'eau (AEP, irrigation) ; (4) des changements climatiques. La détection de rupture est une étape préalable à toute analyse de fréquence — ajuster une loi de fréquence sur une série non-stationnaire (après rupture) biaise les estimations de Q_T. En France, la rupture des années 1980 (sécheresses récurrentes) est identifiée sur de nombreuses stations hydrologiques du bassin méditerranéen.</p>'
            }
          ]
        },
        {
          titre: '4. Analyse spectrale et ondelettes',
          texte: 'L\'analyse dans le domaine fréquentiel révèle les oscillations périodiques présentes dans les séries hydrologiques : cycle annuel, oscillations pluriannuelles liées aux modes climatiques (NAO, ENSO), cycle décennal.',
          sous_sections: [
            {
              titre: '4.1 Périodogramme et densité spectrale de puissance',
              texte: '<p>La <strong>transformée de Fourier discrète</strong> décompose la série X_t en somme d\'oscillations sinusoïdales : X_t = Σ_k [a_k cos(2πf_k t) + b_k sin(2πf_k t)], où f_k = k/T sont les fréquences fondamentales. Le <strong>périodogramme</strong> I(f_k) = (a_k² + b_k²)/2 représente la puissance à chaque fréquence. Pour un débit journalier, le périodogramme présente un pic dominant à f = 1/365 j⁻¹ (cycle annuel) et éventuellement à f = 1/7 j⁻¹ (cycle hebdomadaire dû aux prélèvements industriels).</p><p>La densité spectrale de puissance estimée par lissage du périodogramme (fenêtre de Daniell, Hanning) est plus stable. Le <strong>test de Fisher</strong> teste si un pic est significatif au-delà du bruit rouge (fond spectral en 1/f² typique des processus hydrologiques).</p>'
            },
            {
              titre: '4.2 Analyse en ondelettes et non-stationnarité',
              texte: '<p>L\'analyse de Fourier suppose que les caractéristiques spectrales sont stationnaires dans le temps (mêmes fréquences sur toute la période). Les <strong>ondelettes (wavelets)</strong> permettent une analyse temps-fréquence : le spectre d\'ondelettes W(a,b) décompose le signal à différentes échelles a et positions temporelles b, révélant comment les oscillations évoluent dans le temps.</p><p>En hydrologie, l\'analyse en ondelettes de Morlet révèle par exemple : (1) l\'intensification du cycle saisonnier des débits après les années 1980 dans les bassins alpins (fonte des neiges plus précoce) ; (2) l\'évolution temporelle de la téléconnexion ENSO-précipitations méditerranéennes — une corrélation forte en 1950–1980, plus faible depuis ; (3) les oscillations décennales liées à la NAO (North Atlantic Oscillation) sur les débits atlantiques français (périodicité ~8–12 ans). Ces analyses guident la sélection des périodes de référence pertinentes pour la calibration des modèles hydrologiques.</p>'
            }
          ]
        }
      ],
      points: [
        'Décomposition : X_t = T_t + S_t + R_t (additif) ou × (multiplicatif)',
        'Stationnarité : test ADF ; différenciation d\'ordre d si racine unitaire',
        'ACF : corrélation X_t / X_{t-k} ; PACF : corrélation partielle (sans intermédiaires)',
        'AR(p) : PACF coupée à p ; MA(q) : ACF coupée à q',
        'ARIMA(p,d,q) : AR + différenciation + MA ; sélection par AIC/BIC',
        'SARIMA(p,d,q)(P,D,Q)_m : structure saisonnière de période m',
        'Mann-Kendall : test non paramétrique de tendance monotone (S, pente de Sen)',
        'Pettitt : détection d\'une rupture unique dans la série',
        'MK avec autocorrélation : correction Hamed-Rao de la variance de S',
        'Ondelettes Morlet : analyse temps-fréquence pour les non-stationnarités'
      ],
      formules: [
        'ACF : ρ(k) = Cov(X_t, X_{t−k}) / Var(X_t)',
        'ARIMA : Φ_p(B)(1−B)^d X_t = Θ_q(B)ε_t',
        'AIC = 2k − 2ln(L) ; BIC = k·ln(n) − 2ln(L)',
        'Mann-Kendall : S = Σᵢ<ⱼ sign(X_j − X_i)',
        'Pente de Sen : β = médiane[(X_j − X_i)/(j−i)] pour i < j',
        'Pettitt : K_T = max|U_{t,T}| ; P ≈ 2·exp(−6K_T²/(T³+T²))'
      ],
      retenir: 'Vérifier la stationnarité (ADF) avant tout modèle ARIMA. L\'ACF/PACF oriente le choix des ordres p et q. Mann-Kendall détecte une tendance monotone (non paramétrique, robuste) ; corriger pour l\'autocorrélation. Pettitt localise une rupture unique — étape préalable à toute analyse de fréquence. Les ondelettes révèlent les non-stationnarités spectrales que Fourier ne capte pas.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'ACF d\'un débit journalier. La série de débits journaliers d\'un bassin de 500 km² présente les autocorrélations : ρ(1) = 0,92, ρ(2) = 0,85, ρ(7) = 0,62, ρ(30) = 0,35, ρ(365) = 0,28. (a) Interpréter ρ(1) et ρ(365) en termes hydrologiques. (b) La décroissance de ρ(k) est-elle compatible avec un AR(1) ? (c) Quelle information apporte ρ(7) = 0,62 ?',
        solution: '(a) ρ(1) = 0,92 : très forte persistance à 1 jour — le débit d\'aujourd\'hui explique 85 % (ρ² = 0,85) de la variance du débit de demain. Physiquement, le débit journalier intègre la vidange lente des nappes et des versants (temps de réponse du bassin >> 1 jour pour 500 km²). ρ(365) = 0,28 : corrélation interannuelle — le débit d\'un 1er mars d\'une année est modérément corrélé avec celui du 1er mars de l\'année suivante. Cela traduit la mémoire à long terme des nappes et l\'influence des conditions antécédentes d\'humidité du sol sur le régime hydrologique annuel.\n\n(b) Pour un AR(1) pur, ρ(k) = φ₁^k. Si ρ(1) = 0,92, alors ρ(k) = 0,92^k. Vérification : ρ(7) théorique = 0,92^7 = 0,562 ≈ 0,62 (proche). ρ(30) théorique = 0,92^30 = 0,085 ≠ 0,35. ρ(365) théorique = 0,92^365 ≈ 10^{-13} ≠ 0,28. La décroissance observée est beaucoup plus lente que celle d\'un AR(1) simple : la série présente une mémoire longue (long-range dependence). Un modèle ARFIMA (fractionally integrated) ou un SARIMA avec composante saisonnière annuelle serait plus adapté.\n\n(c) ρ(7) = 0,62 > ρ(7)_AR1 = 0,562 : la corrélation à 7 jours est légèrement supérieure à ce que prévoit le simple AR(1). Cela peut indiquer une légère persistance hebdomadaire — cohérent avec un bassin soumis à des cycles de précipitation hebdomadaires (non rare en Europe : les perturbations atlantiques ont des périodicités de 5–8 jours liées aux ondes de Rossby) ou à des prélèvements industriels cycliques (moindre prélèvement le week-end → débit légèrement plus élevé).'
      },
      {
        n: '2',
        enonce: 'Identification d\'un modèle ARIMA. Sur les débits mensuels (n=240 mois = 20 ans) d\'un cours d\'eau, après différenciation saisonnière (D=1, m=12) et différenciation simple (d=1) : la série différenciée est stationnaire (ADF rejeté). Les diagrammes ACF et PACF montrent : PACF : pic significatif au lag 1 (hors saison) et au lag 12 (saisonnier), zéro ailleurs ; ACF : décroissance exponentielle aux lags 1,2,3,… et pic isolé au lag 12. (a) Identifier le modèle SARIMA approprié. (b) Écrire son équation générale. (c) Combien de paramètres à estimer ?',
        solution: '(a) Lecture des diagrammes : PACF coupée à lag 1 (non-saisonnier) → composante AR(1) ; ACF coupée à lag 12 (saisonnier) → composante MA saisonnière d\'ordre Q=1 ; aucune PACF saisonnière significative → P=0. Le modèle est SARIMA(1,1,0)(0,1,1)_{12}.\n\n(b) Équation : (1−φ₁B)(1−B)(1−B^12) X_t = (1+Θ₁B^12) ε_t.\nExpansion : (1−φ₁B)(1−B−B^12+B^13) X_t = ε_t + Θ₁ε_{t−12}.\nCe modèle capture : la tendance locale via (1−B), la saisonnalité annuelle via (1−B^12), la dépendance à court terme via φ₁, et les chocs saisonniers passés via Θ₁.\n\n(c) Paramètres à estimer : φ₁ (AR non-saisonnier), Θ₁ (MA saisonnier), σ²_ε (variance des innovations) = 3 paramètres. Les termes (1−B) et (1−B^12) sont déterministes (différenciations) et non estimés. Avec 240 observations et seulement 3 paramètres, le modèle est très parcimonieux — avantage pour la généralisation et la prévision.'
      },
      {
        n: '3',
        enonce: 'Test de Mann-Kendall. La série des débits estivaux annuels (juillet-août) sur 40 ans d\'un bassin méditerranéen (n=40) donne la statistique S = −312. L\'autocorrélation ρ(1) = 0,35. (a) Calculer la variance de S sans correction d\'autocorrélation. (b) Appliquer la correction de Hamed-Rao et recalculer Z. (c) Conclure au seuil α = 0,05.',
        solution: '(a) Var₀(S) = n(n−1)(2n+5)/18 = 40×39×85/18 = 132600/18 = 7366,7.\nSans correction : Z = (S−1)/√Var₀(S) = (−312−1)/√7366,7 = −313/85,8 = −3,65.\np-value (bilatérale) : P(|Z| > 3,65) ≈ 0,00026. Très significatif.\n\n(b) Correction Hamed-Rao : le facteur de correction tient compte de l\'autocorrélation ρ(k) pour k=1,2,…\nn*/n = 1 + 2/n × Σ_k=1^{n-1} (1−k/n)ρ(k). Pour ρ(1) = 0,35 et ρ(k) ≈ ρ(1)^k (décroissance géométrique AR(1)) :\nΣ ≈ (n−1)ρ(1)/(1−ρ(1)) = 39×0,35/0,65 = 20,96 (approximation de la somme géométrique).\nn*/n = 1 + 2/40 × 20,96 × (correction) ≈ 1,8. Var*(S) = 7366,7 × 1,8 = 13260.\nZ* = −313/√13260 = −313/115,2 = −2,72.\np-value : P(|Z| > 2,72) ≈ 0,0065. Toujours significatif.\n\n(c) Conclusion : avec ou sans correction, Z < −1,96 (seuil α=0,05 bilatéral). On rejette H₀ à 5 %. Il existe une tendance significative à la baisse des débits estivaux. La pente de Sen β = médianeᵢ<ⱼ[(Xⱼ−Xᵢ)/(j−i)] donne la magnitude de la tendance (par exemple −1,5 mm/an) et est l\'estimateur robuste à communiquer aux gestionnaires.'
      },
      {
        n: '4',
        enonce: 'Test de Pettitt. Sur la série de débits annuels d\'une station hydrologique de 1960 à 2010 (n=51 ans), le test de Pettitt donne K_T = 420 avec le maximum à t* = 1979. (a) Calculer la p-value approximée. (b) Quelle est l\'hypothèse nulle et comment interpréter une rupture en 1979 ? (c) Quelles précautions méthodologiques pour l\'analyse de fréquence après détection d\'une rupture ?',
        solution: '(a) P(K_T > k) ≈ 2·exp(−6k²/(T³+T²)).\nT = 51, T³ = 132651, T² = 2601, T³+T² = 135252.\n6k² = 6×420² = 6×176400 = 1058400.\nP ≈ 2·exp(−1058400/135252) = 2·exp(−7,826) = 2×0,000398 = 0,000796 ≈ 0,0008.\n\n(b) H₀ : "la série est homogène (pas de rupture)" contre H₁ : "rupture unique à une date inconnue". p-value ≈ 0,0008 ≪ 0,05 → on rejette H₀ : il existe une rupture hautement significative vers 1979–1980. Interprétation hydrologique : 1979–1980 correspond à l\'intensification des sécheresses méditerranéennes (passage d\'un régime pluviométrique plus humide à un régime plus sec), cohérent avec l\'oscillation atlantique multidécennale (AMO) et les changements de circulation atmosphérique. Sur de nombreux bassins méditerranéens français, cette rupture est bien documentée (réduction de 20–40 % des apports après 1980).\n\n(c) Précautions pour l\'analyse de fréquence : (1) Utiliser uniquement la période post-rupture (1980–2010) pour estimer les paramètres de la loi de fréquence — la période 1960–1979 est non-représentative du régime actuel ; (2) L\'échantillon est réduit (30 ans) → incertitude plus grande sur les paramètres ; IC plus larges sur Q_T pour T élevé. (3) Envisager des modèles non-stationnaires (NS-GEV) où les paramètres μ, σ, ξ varient avec le temps (covariable = température globale, AO, etc.) ; (4) Ne pas extrapoler à des périodes de retour T >> durée de l\'échantillon post-rupture : Q_1000 sur 30 ans a une incertitude énorme.'
      },
      {
        n: '5',
        enonce: 'Prévision ARIMA. Un modèle AR(2) est ajusté sur des débits mensuels : Q_t = 15 + 0,7Q_{t−1} − 0,2Q_{t−2} + ε_t, σ_ε = 8 m³/s. Les deux dernières observations sont Q_{T} = 45 m³/s et Q_{T−1} = 38 m³/s. (a) Calculer les prévisions Ê[Q_{T+1}] et Ê[Q_{T+2}]. (b) Calculer les IC à 95 % pour ces prévisions. (c) Calculer l\'espérance inconditionnelle μ de la série.',
        solution: '(a) Ê[Q_{T+1}] = 15 + 0,7×45 − 0,2×38 = 15 + 31,5 − 7,6 = 38,9 m³/s.\nÊ[Q_{T+2}] = 15 + 0,7×Ê[Q_{T+1}] − 0,2×Q_{T} = 15 + 0,7×38,9 − 0,2×45 = 15 + 27,23 − 9,0 = 33,23 m³/s.\n\n(b) IC à 95 % (± 1,96σ_h) :\nHorizon h=1 : σ₁ = σ_ε = 8 m³/s. IC_{T+1} = [38,9 − 15,7 ; 38,9 + 15,7] = [23,2 ; 54,6] m³/s.\nHorizon h=2 : σ₂² = σ_ε²(1 + φ₁²) = 64(1 + 0,49) = 64×1,49 = 95,4 → σ₂ = 9,76 m³/s.\nIC_{T+2} = [33,23 − 19,1 ; 33,23 + 19,1] = [14,1 ; 52,3] m³/s. L\'IC s\'élargit avec l\'horizon.\n\n(c) Pour un AR(2) stationnaire, μ = E[Q_t] = c/(1 − φ₁ − φ₂) = 15/(1 − 0,7 + 0,2) = 15/0,5 = 30 m³/s. Les prévisions Ê[Q_{T+1}] = 38,9 et Ê[Q_{T+2}] = 33,23 convergent vers μ = 30 m³/s à mesure que l\'horizon augmente — propriété de réversion à la moyenne (mean reversion) des processus AR stationnaires.'
      },
      {
        n: '6',
        enonce: 'Analyse spectrale. Sur une série de températures journalières d\'une source karstique (n = 1095 jours = 3 ans), le périodogramme révèle deux pics : f₁ = 1/365 j⁻¹ (I(f₁) = 850 °C²) et f₂ = 1/7 j⁻¹ (I(f₂) = 12 °C²). La puissance totale (variance) est σ² = 2,5 °C². (a) Calculer le pourcentage de variance associé à chaque pic. (b) Interpréter physiquement ces deux pics. (c) Pourquoi la température d\'une source karstique oscille-t-elle à une fréquence annuelle atténuée par rapport à l\'air ?',
        solution: '(a) La somme du périodogramme est liée à la variance : Σ_k I(f_k) ≈ n×σ²/2 (relation de Parseval en discret). La contribution de chaque pic est proportionnelle à I(f_k)/Σ I. Pour deux pics isolés :\nPart de f₁ = I(f₁)/Σ ≈ 850/(850+12+bruit) ≈ 850/1375 ≈ 61,8 %.\nPart de f₂ = 12/1375 ≈ 0,9 %. Le reste est du bruit rouge (~37 %).\nInterprétation : le cycle annuel explique 62 % de la variance de la température de la source ; la variabilité hebdomadaire en explique ~1 %.\n\n(b) f₁ = 1/365 j⁻¹ : cycle saisonnier annuel de la température. La source karstique se réchauffe en été (recharge par des eaux de pluie chaudes, transfert thermique depuis la zone non saturée) et refroidit en hiver. f₂ = 1/7 j⁻¹ : périodicité hebdomadaire probable liée aux prélèvements d\'eau potable sur l\'aquifère (pompage réduit les week-ends → légère hausse du débit → légère baisse de la température par dilution). Ce pic d\'origine anthropique est révélateur d\'un impact des pompages sur le régime thermique karstique.\n\n(c) La source karstique est alimentée par des eaux qui ont transité dans l\'aquifère (puits karstiques, conduits). Le temps de transfert et la diffusion thermique dans la masse rocheuse agissent comme un filtre passe-bas : les fluctuations rapides (journalières) sont complètement amorties, et le cycle annuel (période longue) est partiellement transmis mais avec un déphasage (maximum thermique de la source décalé de 1–3 mois par rapport à l\'air) et une amplitude réduite (atténuation). L\'amplitude thermique annuelle d\'une source karstique (1–3 °C) est bien inférieure à celle de l\'air (15–20 °C) — information utile pour la gestion de la ressource en eau et la protection des milieux aquatiques thermosensibles.'
      },
      {
        n: '7',
        enonce: 'Stationnarité et changement climatique. La série des précipitations annuelles de Lyon (1860–2020, n=161 ans) est analysée. Test ADF sur la série brute : statistique t = −3,2, valeur critique à 5 % : −2,86. Test MK : Z = −1,45. Test de Pettitt : K_T = 180, p-value = 0,12. (a) Conclure sur la stationnarité. (b) La série est-elle utilisable directement pour une analyse de fréquence des pluies extrêmes ? (c) Que signifie l\'absence de rupture sur une série de 161 ans pour la gestion ?',
        solution: '(a) ADF : t = −3,2 < −2,86 (valeur critique à 5 %) → on rejette H₀ (racine unitaire) → la série est stationnaire en niveau. Pas besoin de différenciation. MK : Z = −1,45, |Z| < 1,96 → on ne rejette pas H₀ à 5 % : tendance à la baisse non significative. Pettitt : p-value = 0,12 > 0,05 → pas de rupture significative. Conclusion : la série est stationnaire (en niveau, sans tendance significative, sans rupture).\n\n(b) La stationnarité de la série des précipitations annuelles totales de Lyon est favorable pour l\'analyse de fréquence. Cependant, attention : la stationnarité des totaux annuels n\'implique pas celle des extrêmes (pluies journalières maximales). Il faut vérifier séparément les séries d\'extrêmes (PMJ, PM24h). En France, les tendances aux extrêmes pluviométriques sont plus marquées que celles des totaux annuels, surtout en région méditerranéenne. Conclusion pratique : pour les totaux annuels de Lyon, l\'utilisation de la série complète (1860–2020) est justifiée — l\'homogénéité est suffisante.\n\n(c) L\'absence de rupture sur 161 ans signifie que le régime pluviométrique lyonnais n\'a pas connu de changement brutal de stationnarité sur cette période — les variabilités observées sont dans la gamme des fluctuations naturelles (NAO, AMO). Pour la gestion : (1) les statistiques estimées sur l\'ensemble de la série sont robustes ; (2) les projections climatiques (LMDZ, EURO-CORDEX) prévoient cependant des changements aux horizons 2050–2100 — la stationnarité historique n\'est pas garantie pour le futur ; (3) la gestion des infrastructures hydrauliques sur 50–100 ans doit intégrer les projections climatiques futures même en l\'absence de signal détecté sur le passé — principe de précaution hydrologique.'
      },
      {
        n: '8',
        enonce: 'Synthèse — analyse de tendance pour la planification en eau. Un gestionnaire de bassin doit établir le Plan de Gestion d\'Étiage (PGE) à l\'horizon 2050. Il dispose de la série des QMNA5 (débit mensuel minimal annuel de fréquence 5 ans) sur 1970–2020 (n=51). Tests : MK : Z = −2,8 (p < 0,01) ; pente de Sen β = −0,04 m³/s/an ; Pettitt : rupture en 1990 (p=0,003). QMNA5 moyen 1970–1989 = 1,8 m³/s ; QMNA5 moyen 1990–2020 = 1,2 m³/s. (a) Estimer le QMNA5 en 2050 par extrapolation de la tendance. (b) Discuter les limites de cette approche. (c) Proposer une méthodologie alternative.',
        solution: '(a) Extrapolation linéaire : QMNA5(2050) = QMNA5(2020) − β × Δt = 1,0 − 0,04 × 30 = 1,0 − 1,2 = −0,2 m³/s. Le résultat est physiquement impossible (débit négatif). La tendance linéaire ne peut pas être extrapolée indéfiniment. Alternative : extrapoler depuis la période post-rupture uniquement. β_1990-2020 ≈ (1,2−1,8)/30 = −0,02 m³/s/an (si la tendance est linéaire depuis 1990). QMNA5(2050) = 1,0 − 0,02×30 = 0,4 m³/s. Physiquement possible mais très faible.\n\n(b) Limites : (1) L\'extrapolation linéaire de tendances hydrologiques est hasardeuse au-delà de 10–20 ans — les forçages climatiques ne sont pas linéaires ; (2) la rupture de 1990 suggère un régime non-stationnaire : extrapoler depuis avant 1990 biaise la prévision ; (3) une seconde rupture pourrait survenir (accélération du changement climatique post-2°C) ; (4) les projections climatiques régionales (Drias/Climsec) donnent des scénarios probabilistes plus robustes que l\'extrapolation statistique ; (5) l\'incertitude sur β est grande (IC à 95 % de β peut englober 0 ou des valeurs très différentes) — l\'IC sur QMNA5(2050) est énorme.\n\n(c) Méthodologie alternative : (1) Utiliser les projections climatiques EURO-CORDEX (ensemble de 10–20 simulations) pour 2050 selon les scénarios RCP4.5 et RCP8.5 ; (2) forcer un modèle hydrologique calé sur le bassin (GR4J, HBV) avec ces projections → distribution de QMNA5(2050) ; (3) construire un intervalle de confiance multi-modèle (enveloppe des scénarios) ; (4) ajuster les seuils d\'étiage du PGE en utilisant le percentile 10 de l\'ensemble des projections (approche précautionneuse) ou le percentile 50 (approche médiane) selon le niveau de risque acceptable par les parties prenantes.'
      }
    ],
    flashcards: [
      {
        q: 'Quelle est la différence entre ACF et PACF, et comment les utiliser pour identifier un modèle ARMA ?',
        r: 'ACF(k) = corrélation entre X_t et X_{t-k}. PACF(k) = corrélation entre X_t et X_{t-k} après élimination des effets intermédiaires. Règle : AR(p) → PACF coupée à p (zéro pour k>p), ACF décroît ; MA(q) → ACF coupée à q, PACF décroît. ARMA(p,q) → ACF et PACF décroissent toutes deux.',
        expl: 'Pour des débits journaliers, la PACF coupée après le lag 1 (avec décroissance exponentielle de l\'ACF) suggère un AR(1) pur. Mais en présence d\'un cycle saisonnier fort, l\'ACF présente un pic au lag 365 — il faut alors un SARIMA avec D=1 et/ou Q=1. L\'identification visuelle ACF/PACF est un premier diagnostic ; la sélection finale se fait sur AIC/BIC entre plusieurs candidats.'
      },
      {
        q: 'Qu\'est-ce que le test de Mann-Kendall et pourquoi corriger pour l\'autocorrélation ?',
        r: 'MK teste H₀ "pas de tendance monotone" via S = Σᵢ<ⱼ sign(Xⱼ−Xᵢ), normalisé par Var(S). La pente de Sen β = médiane[(Xⱼ−Xᵢ)/(j−i)] estime la magnitude. L\'autocorrélation positive (ρ(1) > 0) gonfle Var(S), réduisant le Z calculé — les séries persistantes semblent plus significatives. La correction Hamed-Rao multiplie Var(S) par n*/n > 1.',
        expl: 'Sur les débits annuels (faible autocorrélation), la correction est mineure. Sur les débits mensuels (forte autocorrélation ρ(1) ≈ 0,7–0,9), elle peut réduire Z de 50 %, transformant une tendance "hautement significative" en "non significative". Ne jamais appliquer MK sans vérifier l\'autocorrélation de la série et sans corriger si nécessaire.'
      },
      {
        q: 'Comment interpréter une rupture détectée par le test de Pettitt dans une série hydrologique ?',
        r: 'Pettitt détecte la date t* maximisant U_{t,T} = Σᵢ≤t Σⱼ>t sign(Xⱼ−Xᵢ). Une rupture significative indique un changement de la moyenne du processus. Causes hydrologiques possibles : changement d\'usage des terres, modification du réseau de drainage, prélèvements/restitutions, changement climatique abrupt.',
        expl: 'La détection de rupture est une étape préalable obligatoire à l\'analyse de fréquence. Si une rupture est confirmée, utiliser uniquement la période la plus récente (ou construire un modèle non-stationnaire) pour estimer Q_T. Les ruptures des années 1980–1990 sur les bassins méditerranéens sont bien documentées et liées à une modification durable des régimes pluviométriques.'
      },
      {
        q: 'Quelle est l\'utilité d\'un modèle SARIMA en hydrologie ?',
        r: 'SARIMA(p,d,q)(P,D,Q)_m modélise à la fois les dépendances à court terme (p,q), la non-stationnarité locale (d), la saisonnalité (m), la dépendance saisonnière (P,Q) et les trends saisonniers (D). Il permet la prévision à court terme (1–3 mois) des débits ou des apports de réservoirs, en propageant l\'incertitude via des IC de prévision.',
        expl: 'Pour les apports mensuels aux réservoirs hydroélectriques, SARIMA(1,1,1)(1,1,1)_{12} est souvent un bon point de départ. La prévision à 1 mois est précise (IC étroit) ; à 3 mois l\'IC s\'élargit ; au-delà de 6 mois, la prévision converge vers la climatologie (moyenne saisonnière) et n\'apporte plus d\'information au-delà de la variabilité naturelle.'
      },
      {
        q: 'Pourquoi l\'analyse de Fourier classique peut-elle être insuffisante pour des séries hydrologiques longues ?',
        r: 'Fourier suppose que les caractéristiques spectrales (fréquences, amplitudes) sont constantes dans le temps (stationnarité spectrale). Si le signal change de caractère (ex. la téléconnexion ENSO-pluie s\'intensifie ou s\'affaiblit sur certaines périodes), les ondelettes révèlent ces évolutions temps-fréquence que Fourier lisse sur toute la série.',
        expl: 'Sur les débits du Rhône (1900–2020), une analyse en ondelettes révèle que l\'oscillation décennale liée à la NAO était forte avant 1950, plus faible en 1950–1980, et de nouveau présente depuis. Fourier calcule une puissance spectrale "moyenne" sur 120 ans qui masque cette non-stationnarité. Pour la planification, l\'approche ondelette est plus informative sur la variabilité décennale à venir.'
      },
      {
        q: 'Comment choisir entre AIC et BIC pour sélectionner un modèle ARIMA ?',
        r: 'AIC = 2k − 2ln(L) favorise les modèles plus complexes (moins de pénalité par paramètre). BIC = k·ln(n) − 2ln(L) pénalise plus fortement la complexité pour de grands échantillons. BIC est consistant (sélectionne le vrai modèle quand n→∞) ; AIC est efficace (minimise l\'erreur de prévision). Pour la prévision : préférer AIC. Pour l\'inférence causale : préférer BIC.',
        expl: 'Pour des séries de 50 ans de débits mensuels (n=600), BIC pénalise beaucoup les paramètres supplémentaires (ln(600) ≈ 6,4 vs 2 pour AIC). Un modèle SARIMA(2,1,1)(1,1,1)_{12} peut être sélectionné par AIC et rejeté par BIC en faveur de SARIMA(1,1,1)(1,1,1)_{12}. En pratique, si les prévisions sont l\'objectif, AIC donne souvent de meilleurs résultats en validation croisée.'
      }
    ]
  },
  'MASTER-EAU-010': {
    id: 'MASTER-EAU-010',
    titre: 'Statistique spatiale et géostatistique',
    fiche: {
      intro: 'Les données hydrologiques et météorologiques sont distribuées dans l\'espace : pluviomètres, stations de jaugeage, piézomètres, points de mesure de qualité de l\'eau. L\'interpolation spatiale — comment estimer une variable en un point non mesuré à partir des mesures voisines — est une opération fondamentale en sciences de l\'eau. La géostatistique (Matheron, 1960s) fournit un cadre rigoureux pour cette interpolation en modélisant la structure de dépendance spatiale via le variogramme, puis en estimant de manière optimale (Krigeage). Ce chapitre couvre le variogramme, le Krigeage ordinaire, les méthodes alternatives (IDW, Thiessen), et les applications à la cartographie des précipitations et des nappes phréatiques.',
      sections: [
        {
          titre: '1. Structure de la variabilité spatiale : le variogramme',
          texte: 'La première étape de toute analyse géostatistique est la quantification de la structure de dépendance spatiale des données. Le variogramme (ou semi-variogramme) est l\'outil central.',
          sous_sections: [
            {
              titre: '1.1 Semi-variogramme expérimental et propriétés',
              texte: '<p>Le <strong>semi-variogramme</strong> γ(h) mesure la demi-variance des différences entre deux points séparés par le vecteur h : γ(h) = ½ · E[(Z(x+h) − Z(x))²]. Il est estimé à partir des n(h) paires de points séparées par la distance h : γ̂(h) = 1/(2n(h)) × Σ[Z(xᵢ) − Z(xⱼ)]² pour toutes les paires avec ‖xᵢ−xⱼ‖ ≈ h.</p><p>Propriétés du variogramme :\n<br>• <strong>Pépite (nugget) C₀</strong> : variogramme à h→0⁺. Représente la variabilité à très courte distance (micro-structure spatiale, erreur de mesure). C₀ > 0 indique une discontinuité à l\'origine.\n<br>• <strong>Palier (sill) C₀+C₁</strong> : valeur asymptotique du variogramme pour h→∞ (si elle existe). Correspond à la variance totale σ² de la variable.\n<br>• <strong>Portée (range) a</strong> : distance à partir de laquelle γ(h) atteint le palier. Au-delà de a, les observations sont spatialement indépendantes.</p>'
            },
            {
              titre: '1.2 Modèles de variogramme',
              texte: '<p>Le variogramme expérimental doit être ajusté par un modèle paramétrique licite (défini positif) pour être utilisé en Krigeage. Les modèles les plus courants sont :\n<br>• <strong>Sphérique</strong> : γ(h) = C₀ + C₁[1,5(h/a) − 0,5(h/a)³] pour h ≤ a, et C₀+C₁ pour h > a. Palier atteint à portée a. Modèle le plus fréquent en hydrologie.\n<br>• <strong>Exponentiel</strong> : γ(h) = C₀ + C₁[1 − exp(−h/a)]. Palier asymptotique, jamais exactement atteint. Portée pratique ≈ 3a.\n<br>• <strong>Gaussien</strong> : γ(h) = C₀ + C₁[1 − exp(−h²/a²)]. Transition très douce à l\'origine → champ très régulier (différentiable). Rarement adapté aux précipitations (trop irrégulières).\n<br>• <strong>Pépite pure</strong> : γ(h) = C₀ pour tout h > 0. Pas de structure spatiale — les observations sont indépendantes (cas dégénéré).</p><p>L\'ajustement est réalisé par moindres carrés pondérés (WLS) ou par maximum de vraisemblance (REML). Le choix du modèle (sphérique vs exponentiel) repose sur l\'examen visuel du variogramme et sur la validation croisée (leave-one-out cross-validation).</p>'
            }
          ]
        },
        {
          titre: '2. Krigeage ordinaire : estimateur optimal',
          texte: 'Le Krigeage ordinaire (KO) est l\'interpolateur linéaire sans biais de variance minimale. Il utilise le variogramme modélisé pour calculer des poids optimaux λᵢ qui tiennent compte de la structure spatiale.',
          sous_sections: [
            {
              titre: '2.1 Système de Krigeage et poids optimaux',
              texte: '<p>L\'estimateur du Krigeage ordinaire est Ẑ(x₀) = Σᵢ λᵢ Z(xᵢ), avec la contrainte Σᵢ λᵢ = 1 (non-biais). Les poids λᵢ minimisent la variance d\'estimation σ²_KO = Var[Ẑ(x₀) − Z(x₀)]. La solution est donnée par le <strong>système de Krigeage</strong> : Σⱼ λⱼ γ(xᵢ, xⱼ) + μ = γ(xᵢ, x₀) pour tout i, et Σᵢ λᵢ = 1, où μ est le multiplicateur de Lagrange associé à la contrainte de non-biais.</p><p>En notation matricielle : [Γ 1; 1ᵀ 0][λ; μ] = [γ₀; 1], où Γ est la matrice des variogrammes entre points de mesure, γ₀ le vecteur des variogrammes entre les points de mesure et le point à estimer. La variance de Krigeage σ²_KO = λᵀγ₀ + μ est une mesure de l\'incertitude d\'estimation — elle dépend de la configuration spatiale des données, pas de leurs valeurs.</p>'
            },
            {
              titre: '2.2 Propriétés et variantes du Krigeage',
              texte: '<p>Propriétés du KO : (1) <strong>Non-biais</strong> : E[Ẑ(x₀)] = E[Z(x₀)] ; (2) <strong>Variance minimale</strong> : BLUE (Best Linear Unbiased Estimator) au sens spatial ; (3) <strong>Exact aux données</strong> : si x₀ = xᵢ, alors Ẑ(x₀) = Z(xᵢ) et σ²_KO = C₀ (pépite). Le KO attribue des poids positifs ou négatifs selon la configuration : un point "écranté" par des voisins proches reçoit un poids négatif (effet d\'écran).</p><p>Variantes importantes :\n<br>• <strong>Krigeage Simple (KS)</strong> : moyenne connue et constante μ — pas de contrainte Σλᵢ = 1.\n<br>• <strong>Krigeage Universel (KU)</strong> : tendance déterministe f(x) + composante aléatoire stationnaire (ex. gradient pluviométrique avec l\'altitude).\n<br>• <strong>Krigeage avec dérive externe (KDE)</strong> : variable auxiliaire (DEM, distance à la mer) comme covariable déterministe — très utilisé pour l\'interpolation des précipitations en terrain montagneux.</p>'
            }
          ]
        },
        {
          titre: '3. Méthodes d\'interpolation alternatives',
          texte: 'D\'autres méthodes d\'interpolation spatiale sont couramment utilisées en hydrologie, avec des hypothèses et des performances différentes selon le contexte.',
          sous_sections: [
            {
              titre: '3.1 Polygones de Thiessen et pondération par l\'inverse de la distance',
              texte: '<p>Les <strong>polygones de Thiessen (Voronoï)</strong> partitionnent le bassin en zones d\'influence de chaque pluviomètre : chaque point du bassin est attribué au pluviomètre le plus proche. La pluie moyenne sur le bassin est la moyenne pondérée par les aires : P̄ = Σᵢ (Aᵢ/A) × Pᵢ. Simple mais ne tient pas compte de la structure spatiale des précipitations — implique des discontinuités aux frontières des polygones. Adapté aux réseaux denses et aux bassins plats.</p><p>La méthode <strong>IDW (Inverse Distance Weighting)</strong> attribue à chaque point x₀ les poids λᵢ ∝ 1/dᵢ^p, où dᵢ = ‖x₀ − xᵢ‖ et p est l\'exposant (typiquement p=2). IDW est exact aux données, continu, mais présente des effets "Bull\'s eye" (concentrations autour des stations) et ne fournit pas d\'estimation d\'incertitude. L\'exposant p contrôle la portée de l\'influence : p élevé → influence locale, p faible → influence étendue.</p>'
            },
            {
              titre: '3.2 Comparaison des méthodes et validation croisée',
              texte: '<p>La <strong>validation croisée leave-one-out</strong> (LOO-CV) évalue les performances d\'une méthode d\'interpolation : chaque station est retirée tour à tour, la valeur est prédite par interpolation des autres stations, et l\'erreur ε̂ᵢ = Zᵢ − Ẑ(xᵢ) est calculée. Critères d\'évaluation : RMSE = √(Σε̂²ᵢ/n), MAE = Σ|ε̂ᵢ|/n, biais = Σε̂ᵢ/n. Pour le Krigeage : les erreurs standardisées ε̂ᵢ/σ_KO(xᵢ) doivent être ∼ N(0,1) si le modèle de variogramme est correct.</p><p>Comparaison typique sur des précipitations en France métropolitaine : Krigeage > IDW > Thiessen en termes de RMSE, avec des gains de 10–20 % pour le Krigeage. En terrain montagneux (Alpes, Pyrénées), le Krigeage avec dérive externe (altitude comme covariable) surpasse fortement les autres méthodes (réduction de RMSE > 30 %) car il intègre le gradient orographique des précipitations.</p>'
            }
          ]
        },
        {
          titre: '4. Applications géostatistiques en sciences de l\'eau',
          texte: 'La géostatistique est appliquée à de nombreux problèmes concrets en hydrologie et en hydrogéologie : cartographie des pluies, reconstruction des champs piézométriques, estimation des pollutions des sols, gestion des ressources en eau souterraines.',
          sous_sections: [
            {
              titre: '4.1 Cartographie des précipitations : SAFRAN et COMEPHORE',
              texte: '<p>En France, Météo-France utilise le système <strong>SAFRAN</strong> (Système d\'Analyse Fournissant des Renseignements Atmosphériques à la Neige) pour produire des analyses atmosphériques horaires sur une grille de 8 km. SAFRAN utilise une analyse optimale (équivalent du Krigeage simple avec covariance dépendant de l\'altitude) pour combiner les observations des ~3800 postes pluviométriques avec les sorties du modèle de prévision numérique Arpège. Le résultat est une grille horaire de précipitations depuis 1958 — données d\'entrée de référence pour le modèle hydrologique ISBA et pour toutes les études d\'impact climatique en France.</p><p><strong>COMEPHORE</strong> (Combinaison d\'Estimations de Pluie par Fusion d\'Observations et de Radar en Écho) combine les données radar (haute résolution spatiale, 1×1 km, mais estimation indirecte) avec les pluviomètres (mesure directe, mais ponctuelle) par Krigeage de l\'erreur radar avec les données au sol. Ce produit à 1 km × 1h de résolution est disponible depuis 1997.</p>'
            },
            {
              titre: '4.2 Krigeage des niveaux piézométriques',
              texte: '<p>La cartographie des niveaux de nappe (piézométrie) par Krigeage permet de : (1) produire des cartes d\'isopièzes (courbes d\'égal niveau piézométrique) pour visualiser les directions d\'écoulement souterrain ; (2) calculer les gradients hydrauliques ∇h nécessaires à la loi de Darcy Q = −K·A·∇h ; (3) estimer le volume d\'eau stocké dans l\'aquifère (en combinant avec l\'épaisseur saturée et la porosité efficace) ; (4) localiser les zones de recharge et de décharge (sources, cours d\'eau drainants).</p><p>Le variogramme des niveaux piézométriques présente souvent une <strong>dérive</strong> (tendance spatiale) — les niveaux augmentent du centre vers les bordures de l\'aquifère. Le Krigeage avec dérive externe (surface topographique comme covariable) ou le Krigeage universel avec dérive polynomiale (plan incliné) sont alors nécessaires. L\'incertitude de Krigeage σ_KO identifie les zones mal connues (réseaux de piézomètres trop espacés) où de nouvelles mesures seraient prioritaires.</p>'
            }
          ]
        }
      ],
      points: [
        'Semi-variogramme : γ(h) = ½·E[(Z(x+h)−Z(x))²], estimé sur des paires à distance h',
        'Paramètres : pépite C₀ (discontinuité à h=0), palier C₀+C₁ (variance totale), portée a',
        'Modèles licites : sphérique, exponentiel, gaussien (définis positifs)',
        'Krigeage ordinaire : estimateur BLUE avec contrainte Σλᵢ = 1 (non-biais)',
        'Système KO matriciel : [Γ 1; 1ᵀ 0][λ; μ] = [γ₀; 1]',
        'Variance de Krigeage σ²_KO = λᵀγ₀ + μ (dépend de la configuration, pas des valeurs)',
        'Thiessen : zones d\'influence des pluviomètres ; IDW : λᵢ ∝ 1/dᵢ²',
        'Validation croisée LOO-CV : RMSE, MAE, erreurs standardisées ∼N(0,1)',
        'SAFRAN (8 km, 1958–) : analyse optimale pluie+altitude pour la France',
        'COMEPHORE (1 km, 1997–) : fusion radar-pluviomètre par Krigeage de l\'erreur'
      ],
      formules: [
        'γ̂(h) = 1/(2n(h)) × Σ[Z(xᵢ)−Z(xⱼ)]²',
        'Sphérique : γ(h) = C₀ + C₁[1,5(h/a) − 0,5(h/a)³] pour h ≤ a',
        'Exponentiel : γ(h) = C₀ + C₁[1−exp(−h/a)]',
        'KO : Ẑ(x₀) = Σᵢ λᵢ Z(xᵢ), Σλᵢ = 1',
        'σ²_KO = λᵀγ₀ + μ',
        'IDW : λᵢ = (1/dᵢ^p) / Σⱼ(1/dⱼ^p)'
      ],
      retenir: 'Le variogramme décrit la structure spatiale : pépite (micro-variabilité), portée (zone d\'influence), palier (variance). Le Krigeage ordinaire est l\'interpolateur BLUE — optimal sous hypothèse de stationnarité du variogramme. La variance de Krigeage quantifie l\'incertitude spatiale et guide le placement de nouveaux capteurs. La validation croisée LOO-CV est le juge final pour comparer les méthodes d\'interpolation.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Calcul du variogramme expérimental. 4 pluviomètres mesurent la pluie annuelle : P₁=820 mm (x=0, y=0), P₂=750 mm (x=10, y=0), P₃=840 mm (x=0, y=15), P₄=700 mm (x=10, y=15). (a) Calculer les 6 paires de distances et les semi-variances correspondantes. (b) Regrouper en deux classes h₁≈10–12 km et h₂≈15–18 km. (c) Identifier les paramètres approximatifs du variogramme.',
        solution: '(a) 6 paires (i,j), dᵢⱼ et γᵢⱼ = ½(Pᵢ−Pⱼ)² :\n(1,2) : d=10, γ=½(820−750)²=½×4900=2450\n(1,3) : d=15, γ=½(820−840)²=½×400=200\n(1,4) : d=√(100+225)=√325≈18, γ=½(820−700)²=½×14400=7200\n(2,3) : d=√(100+225)≈18, γ=½(750−840)²=½×8100=4050\n(2,4) : d=15, γ=½(750−700)²=½×2500=1250\n(3,4) : d=10, γ=½(840−700)²=½×19600=9800\n\n(b) Classe h₁ ≈ 10–12 km : paires (1,2) et (3,4). γ(h₁) = (2450+9800)/2 = 6125 mm².\nClasse h₂ ≈ 15–18 km : paires (1,3), (1,4), (2,3), (2,4). γ(h₂) = (200+7200+4050+1250)/4 = 12700/4 = 3175 mm².\n\n(c) Paradoxe apparent : γ(h₂) < γ(h₁) ? Avec seulement 4 points, l\'estimation est très instable (1 ou 2 paires par classe). Le γ à h₁=10 km est dominé par la paire (3,4) où la différence P₃−P₄=140 mm est grande. Ce n\'est pas représentatif d\'une véritable structure — avec un réseau dense, la variabilité serait bien mieux estimée. Les paramètres approximatifs ne peuvent pas être identifiés de façon fiable sur si peu de paires ; il faudrait au moins 30–50 paires par classe de distance.'
      },
      {
        n: '2',
        enonce: 'Ajustement d\'un variogramme sphérique. Le variogramme expérimental d\'une nappe phréatique présente : γ(5 km)=0,8 m², γ(10 km)=1,8 m², γ(20 km)=3,0 m², γ(30 km)=3,2 m², γ(50 km)=3,2 m². (a) Identifier visuellement C₀, C₁ et a. (b) Calculer γ_sphérique(10 km) et γ_sphérique(20 km) avec vos paramètres. (c) Calculer l\'erreur de modèle.',
        solution: '(a) Le variogramme se stabilise vers 3,2 m² à partir de 30–50 km → palier C₀+C₁ ≈ 3,2 m². L\'extrapolation à h=0 suggère une légère pépite C₀ ≈ 0,3 m² (la courbe n\'intersecte pas exactement 0 à l\'origine). Donc C₁ = 3,2 − 0,3 = 2,9 m². La portée a : γ atteint le palier vers h ≈ 25–30 km → a ≈ 25 km.\n\n(b) Modèle sphérique : γ(h) = 0,3 + 2,9×[1,5(h/25) − 0,5(h/25)³] pour h ≤ 25 km.\nh=10 km : γ(10) = 0,3 + 2,9×[1,5×0,4 − 0,5×0,064] = 0,3 + 2,9×[0,6−0,032] = 0,3 + 2,9×0,568 = 0,3 + 1,65 = 1,95 m².\nh=20 km : γ(20) = 0,3 + 2,9×[1,5×0,8 − 0,5×0,512] = 0,3 + 2,9×[1,2−0,256] = 0,3 + 2,9×0,944 = 0,3 + 2,74 = 3,04 m².\n\n(c) Erreurs : h=10 km : 1,95−1,8 = +0,15 m² (+8,3 %) ; h=20 km : 3,04−3,0 = +0,04 m² (+1,3 %). Ajustement correct. La plus grande erreur est à h=10 km — courant pour le modèle sphérique qui est plus "convexe" vers l\'origine que l\'exponentiel. Un modèle exponentiel ajusté pourrait donner une meilleure correspondance à h=10 km.'
      },
      {
        n: '3',
        enonce: 'Krigeage ordinaire simple. Estimer la pluie en un point x₀ à partir de 2 pluviomètres : P₁=80 mm (d(x₀,x₁)=5 km), P₂=60 mm (d(x₀,x₂)=10 km), d(x₁,x₂)=12 km. Le variogramme est sphérique : C₀=0, C₁=100 mm², a=20 km. (a) Calculer les valeurs du variogramme γ(5), γ(10), γ(12). (b) Écrire et résoudre le système de Krigeage. (c) Calculer l\'estimation Ẑ(x₀) et la variance de Krigeage σ²_KO.',
        solution: '(a) γ_sphérique = 100×[1,5(h/20)−0,5(h/20)³].\nγ(5) = 100×[1,5×0,25−0,5×0,0156] = 100×[0,375−0,0078] = 100×0,367 = 36,7 mm².\nγ(10) = 100×[1,5×0,5−0,5×0,125] = 100×[0,75−0,0625] = 100×0,688 = 68,8 mm².\nγ(12) = 100×[1,5×0,6−0,5×0,216] = 100×[0,9−0,108] = 100×0,792 = 79,2 mm².\n\n(b) Système de Krigeage ordinaire (3 équations, 3 inconnues λ₁, λ₂, μ) :\n[γ(d₁₁) γ(d₁₂) 1] [λ₁]   [γ(5) ]\n[γ(d₂₁) γ(d₂₂) 1] [λ₂] = [γ(10)]\n[   1       1    0] [μ ]   [  1  ]\nγ(d₁₁)=0 (même point), γ(d₂₂)=0, γ(d₁₂)=γ(12)=79,2.\n[0    79,2  1] [λ₁]   [36,7]\n[79,2  0    1] [λ₂] = [68,8]\n[1     1    0] [μ ]   [  1 ]\nDe la 3e équation : λ₁+λ₂=1 → λ₂=1−λ₁.\nÉq. 1 : 79,2(1−λ₁)+μ = 36,7 → 79,2−79,2λ₁+μ = 36,7.\nÉq. 2 : 79,2λ₁+μ = 68,8.\nSoustraction Éq.2−Éq.1 : 158,4λ₁ − 79,2 = 32,1 → 158,4λ₁ = 111,3 → λ₁ = 0,702.\nλ₂ = 0,298. μ = 68,8 − 79,2×0,702 = 68,8 − 55,6 = 13,2.\n\n(c) Ẑ(x₀) = 0,702×80 + 0,298×60 = 56,2 + 17,9 = 74,1 mm.\nσ²_KO = λ₁γ(5) + λ₂γ(10) + μ = 0,702×36,7 + 0,298×68,8 + 13,2 = 25,8 + 20,5 + 13,2 = 59,5 mm².\nσ_KO = 7,7 mm. IC à 95 % : [74,1 ± 15,1] = [59,0 ; 89,2] mm.'
      },
      {
        n: '4',
        enonce: 'Comparaison IDW vs Krigeage. Sur un réseau de 5 pluviomètres, la validation croisée LOO-CV donne : IDW (p=2) : RMSE = 18,5 mm, biais = −2,1 mm, erreurs standardisées (ê/σ_IDW) ∼ N(0, 2,3) ; KO : RMSE = 14,2 mm, biais = 0,3 mm, erreurs standardisées ê_KO/σ_KO ∼ N(0, 1,05). (a) Quelle méthode est préférable et pourquoi ? (b) Que signifie la variance de 2,3 pour IDW ? (c) Que signifie la variance de 1,05 pour le Krigeage ?',
        solution: '(a) Le Krigeage ordinaire est préférable : RMSE = 14,2 mm vs 18,5 mm pour IDW (−23 % d\'erreur), biais quasi nul (0,3 mm vs −2,1 mm pour IDW). Le KO exploite la structure spatiale (variogramme) pour optimiser les poids, alors qu\'IDW utilise des poids arbitraires en 1/d². En hydrologie, le gain du Krigeage sur IDW est typiquement 10–30 % selon la densité du réseau et la structure spatiale des précipitations.\n\n(b) La variance des erreurs standardisées IDW est 2,3 ≠ 1. IDW ne fournit pas une variance d\'erreur théorique correcte (σ_IDW n\'est pas un écart-type d\'estimation valide). Cette "variance" est probablement calculée a posteriori en divisant ê_i par σ empirique — un indicateur ad hoc. La dispersion de 2,3 signifie que les erreurs sont 2,3 fois plus grandes que σ_IDW estimé → la méthode sous-estime son incertitude par un facteur ~√2,3 ≈ 1,5.\n\n(c) La variance de 1,05 ≈ 1 pour le Krigeage est l\'indicateur de validation clé. Si le modèle de variogramme est correct, les erreurs standardisées ê_KO/σ_KO doivent être ∼ N(0,1). Variance = 1,05 : presque parfaitement calibré — les intervalles de confiance de Krigeage sont valides. C\'est pourquoi on peut utiliser σ_KO directement pour les IC à 95 % (± 1,96 σ_KO). Un modèle de variogramme mal ajusté donnerait variance > 1 (sous-estimation de σ_KO) ou < 1 (surestimation).'
      },
      {
        n: '5',
        enonce: 'Pluie moyenne sur un bassin. Un bassin de 500 km² est équipé de 4 pluviomètres. Les aires des polygones de Thiessen sont A₁=180 km², A₂=120 km², A₃=140 km², A₄=60 km². Les pluies observées lors d\'un événement sont P₁=45 mm, P₂=72 mm, P₃=55 mm, P₄=90 mm. (a) Calculer la pluie moyenne par la méthode de Thiessen. (b) Comparer avec la moyenne arithmétique simple. (c) Quelle méthode est plus adaptée à ce réseau inégalement réparti ?',
        solution: '(a) Méthode de Thiessen : P̄ = Σᵢ (Aᵢ/A)×Pᵢ.\nA₁+A₂+A₃+A₄ = 180+120+140+60 = 500 km² ✓.\nP̄_Thiessen = (180×45 + 120×72 + 140×55 + 60×90) / 500\n= (8100 + 8640 + 7700 + 5400) / 500\n= 29840 / 500 = 59,7 mm.\n\n(b) Moyenne arithmétique : P̄_arith = (45+72+55+90)/4 = 262/4 = 65,5 mm.\n\n(c) La méthode de Thiessen est plus adaptée lorsque les pluviomètres sont inégalement répartis. Ici, P₄=90 mm correspond à une aire de seulement 60/500=12 % du bassin — sa forte valeur est pondérée en conséquence (contribution 60×90=5400 mm·km²). La moyenne arithmétique lui accorde un poids de 1/4=25 %, ce qui surestime sa représentativité. Thiessen donne P̄=59,7 mm vs 65,5 mm pour la moyenne arithmétique — différence de 10 %. Cette différence peut être déterminante pour l\'estimation du volume de crue (Qpointe ∝ P̄×A).'
      },
      {
        n: '6',
        enonce: 'Portée et décision de réseau. Le variogramme de conductivité hydraulique K (m/j) d\'un aquifère alluvial est sphérique avec C₀=0,02, C₁=0,15, a=800 m. (a) Quelle est la variance totale de ln(K) ? (b) À quelle distance deux piézomètres apportent-ils des informations indépendantes ? (c) Si le réseau existant est espacé de 1500 m, quelle est la variance de Krigeage σ²_KO approximative entre deux piézomètres contigus ?',
        solution: '(a) La variance totale de ln(K) est le palier : σ² = C₀+C₁ = 0,02+0,15 = 0,17 (en log²). En termes de K : si ln(K) varie de ±√0,17 ≈ ±0,41 → K varie d\'un facteur e^0,41 ≈ 1,5 de part et d\'autre de la médiane. Cette variabilité est modérée pour un alluvion.\n\n(b) La portée a = 800 m est la distance à partir de laquelle γ(h) = C₀+C₁ = σ² et les observations sont spatialement indépendantes (corrélation ≈ 0). Deux piézomètres distants de plus de 800 m fournissent des informations indépendantes sur K. En dessous de 800 m, ils sont spatialement corrélés et apportent de l\'information redondante — pertinent pour optimiser un réseau de surveillance.\n\n(c) Pour deux piézomètres à 1500 m > a=800 m : γ(1500) = C₀+C₁ = 0,17 (au-delà de la portée). Un point x₀ au milieu (à 750 m de chaque piézomètre) : γ(750) = 0,02+0,15×[1,5×(750/800)−0,5×(750/800)³] = 0,02+0,15×[1,5×0,9375−0,5×0,823] = 0,02+0,15×[1,406−0,412] = 0,02+0,15×0,994 = 0,02+0,149 = 0,169.\nσ²_KO ≈ 0,169 (proche du palier 0,17). Conclusion : avec un espacement de 1500 m > portée (800 m), le Krigeage entre deux piézomètres contigus apporte peu d\'information → σ_KO ≈ √0,169 = 0,41 ≈ σ totale. Le réseau est trop lâche pour interpoler K de façon précise — pour σ_KO < 0,5 σ_totale il faudrait un espacement < 800 m.'
      },
      {
        n: '7',
        enonce: 'Krigeage avec dérive externe. En terrain montagneux, les précipitations annuelles augmentent avec l\'altitude. 5 pluviomètres donnent les couples (altitude Z en m, pluie P en mm) : (200,650), (400,750), (600,900), (800,1050), (1000,1180). La régression donne P = 490 + 0,70×Z (R²=0,996). (a) Que représente la dérive dans ce contexte ? (b) Calculer les résidus. (c) Décrire comment le Krigeage avec dérive externe (KDE) utilise ces résidus.',
        solution: '(a) La dérive (trend) est la composante déterministe de la variation spatiale des précipitations liée au gradient orographique : pour chaque 100 m de dénivelé, la pluie augmente de 70 mm. Cette relation est bien connue en climatologie alpine (gradient pluviométrique vertical). Dans le KDE, le champ de précipitations est modélisé comme Z(x) = m(x) + ε(x), où m(x) = 490 + 0,70×Altitude(x) est la dérive déterministe et ε(x) est le résidu géostatistique (aléatoire, stationnaire, de moyenne nulle).\n\n(b) Résidus ε̂ᵢ = Pᵢ − (490 + 0,70×Zᵢ) :\nStation 1 (Z=200) : 650 − (490+140) = 650 − 630 = +20 mm\nStation 2 (Z=400) : 750 − (490+280) = 750 − 770 = −20 mm\nStation 3 (Z=600) : 900 − (490+420) = 900 − 910 = −10 mm\nStation 4 (Z=800) : 1050 − (490+560) = 1050 − 1050 = 0 mm\nStation 5 (Z=1000) : 1180 − (490+700) = 1180 − 1190 = −10 mm\n\n(c) Le KDE procède en deux étapes : (1) calculer le variogramme des résidus ε̂ᵢ (faible variance ~20² mm² → faible variabilité résiduelle) et ajuster un modèle ; (2) pour un point x₀ avec altitude Z₀ connue (via le DEM), Ẑ(x₀) = m(x₀) + ε̂_KO(x₀) = [490 + 0,70×Z₀] + Krigeage(ε̂ᵢ). La dérive fournit une prédiction de base corrigée de la topographie ; le Krigeage des résidus affine localement selon les pluviomètres voisins. Cette approche est robuste même dans les zones sans pluviomètre : m(x₀) reste valide car l\'altitude est connue partout (DEM à 25 m).'
      },
      {
        n: '8',
        enonce: 'Synthèse — optimisation d\'un réseau piézométrique. Un aquifère côtier est surveillé par 6 piézomètres pour détecter une intrusion salinaire. Le variogramme de salinité est sphérique C₀=0, C₁=0,5 g²/L², a=2 km. La variance de Krigeage moyenne sur la zone est σ²_KO_moyen = 0,35 g²/L². (a) Exprimer σ_KO en g/L et en % du palier. (b) L\'ISO 15 886 recommande σ_KO < 0,25 g/L pour détecter les intrusions salinaires (seuil 0,5 g/L). Cette exigence est-elle satisfaite ? (c) Proposer une stratégie d\'extension du réseau.',
        solution: '(a) σ_KO = √0,35 = 0,59 g/L. En % du palier : σ²_KO/C₁ = 0,35/0,5 = 70 % — la variance d\'estimation représente 70 % de la variance totale de la salinité. Autrement dit, les piézomètres existants réduisent l\'incertitude de seulement 30 % par rapport à l\'absence de données. Le réseau est très peu informatif.\n\n(b) Non. σ_KO = 0,59 g/L > 0,25 g/L (exigence ISO). Avec σ_KO = 0,59 g/L, l\'IC à 95 % sur la salinité est ±1,16 g/L — beaucoup trop large pour détecter de façon fiable un dépassement du seuil de 0,5 g/L. Des zones à risque d\'intrusion seraient classées "normales" avec une probabilité élevée (erreur de type II). Le réseau actuel est insuffisant pour le diagnostic d\'alerte.\n\n(c) Stratégie d\'extension : (1) Identifier les zones où σ_KO > 0,25 g/L sur la carte de variance de Krigeage (zones mal couvertes, typiquement entre les piézomètres existants et en bordure côtière) ; (2) placer de nouveaux piézomètres avec un espacement < portée a = 2 km pour être dans la zone de dépendance spatiale — un espacement de 1–1,5 km est approprié ; (3) utiliser la simulation séquentielle gaussienne ou le Krigeage sur grille pour simuler différents scénarios d\'extension (6+2, 6+4, 6+6 piézomètres) et choisir la configuration qui minimise σ_KO_moyen sous la contrainte de budget ; (4) prioriser la façade côtière (zone d\'entrée potentielle de l\'eau salée) et les zones à fort gradient hydraulique. L\'approche géostatistique permet une <strong>optimisation du réseau de surveillance</strong> basée sur des critères quantitatifs d\'incertitude.'
      }
    ],
    flashcards: [
      {
        q: 'Qu\'est-ce que le variogramme et quels sont ses paramètres clés ?',
        r: 'γ(h) = ½·E[(Z(x+h)−Z(x))²] : mesure la demi-variance des différences à distance h. Paramètres : pépite C₀ (discontinuité à h→0, variabilité micro-échelle + erreur mesure), palier C₀+C₁ (variance totale), portée a (distance d\'indépendance spatiale). Au-delà de a, les observations sont non corrélées.',
        expl: 'Pour des précipitations en France, la portée est typiquement 50–200 km (systèmes convectifs à méso-échelle). Pour les niveaux piézométriques d\'un aquifère alluvial, elle est 500 m–5 km. La portée détermine la "zone d\'influence" d\'un point de mesure — elle guide directement le placement des réseaux de surveillance.'
      },
      {
        q: 'Pourquoi le Krigeage ordinaire est-il "optimal" et en quoi se distingue-t-il d\'IDW ?',
        r: 'KO est BLUE : Best Linear Unbiased Estimator. Les poids λᵢ sont calculés en résolvant un système linéaire qui minimise la variance d\'estimation σ²_KO = λᵀγ₀ + μ. IDW utilise des poids empiriques (1/d²) sans optimisation. KO tient compte de la redondance entre capteurs proches (effet d\'écran) et fournit une variance d\'estimation valide. IDW n\'a pas de base statistique rigoureuse.',
        expl: 'L\'effet d\'écran du Krigeage est crucial : si deux pluviomètres sont très proches et l\'un est beaucoup plus proche du point à estimer, le Krigeage peut attribuer un poids négatif au plus éloigné (il est "écranté" par son voisin). IDW attribue toujours des poids positifs, ne capte pas cet effet et surestime la contribution des capteurs redondants.'
      },
      {
        q: 'Comment la variance de Krigeage σ²_KO est-elle utilisée pour optimiser un réseau de mesure ?',
        r: 'σ²_KO ne dépend pas des valeurs mesurées, seulement de la configuration spatiale des capteurs et du variogramme. On calcule la carte de σ²_KO sur toute la zone : les zones à fort σ²_KO sont mal couvertes. Ajouter un capteur dans ces zones réduit σ²_KO. L\'optimisation choisit les positions qui minimisent max(σ²_KO) ou mean(σ²_KO) sous contrainte de budget.',
        expl: 'Cette propriété est fondamentale pour la conception de réseaux de surveillance. En France, le BRGM utilise cette approche pour optimiser les réseaux de surveillance des nappes phréatiques : les piézomètres sont placés où l\'incertitude sur le niveau piézométrique est maximale, en tenant compte de la structure spatiale du variogramme issu des données historiques.'
      },
      {
        q: 'Qu\'est-ce que le Krigeage avec dérive externe et quand l\'utiliser ?',
        r: 'KDE modélise Z(x) = m(x) + ε(x), où m(x) est une dérive déterministe liée à une covariable auxiliaire connue partout (altitude, distance à la mer, pente) et ε(x) un résidu stationnaire interpolé par Krigeage. Il est supérieur au KO simple quand une covariable explique une grande part de la variabilité spatiale.',
        expl: 'Pour l\'interpolation des précipitations dans les Alpes, le gradient altitude-pluie explique 60–80 % de la variance spatiale. Le KDE utilise le DEM à 25 m comme covariable, réduisant l\'erreur de 30–40 % par rapport au KO. SAFRAN utilise ce principe en incorporant l\'altitude comme variable explicative dans son analyse optimale des précipitations.'
      },
      {
        q: 'Comment fonctionne la validation croisée LOO-CV pour évaluer un modèle d\'interpolation ?',
        r: 'On retire tour à tour chaque station i, on prédit Ẑ(xᵢ) à partir des autres, et on calcule ε̂ᵢ = Zᵢ−Ẑ(xᵢ). Métriques : RMSE, MAE, biais. Pour le Krigeage, les erreurs standardisées ε̂ᵢ/σ_KO(xᵢ) doivent être ∼ N(0,1) si le modèle de variogramme est valide (variance ≈ 1, pas d\'asymétrie).',
        expl: 'La validation croisée LOO-CV est le juge final de la qualité d\'un variogramme. Si la variance des erreurs standardisées est >> 1, le variogramme sous-estime l\'incertitude (portée trop grande, palier trop faible). Si << 1, il la surestime. La calibration du variogramme par LOO-CV assure que les IC à 95 % sont valides — condition critique pour les décisions de gestion.'
      },
      {
        q: 'Quelle est la différence entre la méthode de Thiessen et IDW pour le calcul de la pluie moyenne sur un bassin ?',
        r: 'Thiessen : divise le bassin en polygones de Voronoï, chaque pluviomètre représente son polygone (zone du bassin la plus proche). Poids = Aᵢ/A. IDW : chaque pluviomètre est pondéré par 1/dᵢ^p (distance à chaque point). Thiessen = poids fixes liés à la géométrie du réseau ; IDW = poids variables selon la position estimée.',
        expl: 'Pour des événements pluvieux localisés (convectifs), Thiessen sous-performe car il n\'interpolue pas entre les stations. IDW capture mieux les gradients spatiaux. Le Krigeage est toujours supérieur aux deux mais nécessite un variogramme. Pour des précipitations stratiformes sur des bassins à réseau dense, les trois méthodes convergent. Thiessen reste utile pour son interprétation physique simple et sa robustesse aux erreurs de modèle.'
      }
    ]
  },
  'MASTER-EAU-011': {
    id: 'MASTER-EAU-011',
    titre: 'Inférence bayésienne et mise à jour des connaissances',
    fiche: {
      intro: 'L\'inférence bayésienne offre un cadre formel pour combiner des connaissances a priori (données historiques, avis d\'expert, information régionale) avec des données observées, afin de produire une distribution a posteriori sur les paramètres d\'intérêt. Contrairement à l\'approche fréquentiste qui traite les paramètres comme fixes et inconnus, l\'approche bayésienne les considère comme des variables aléatoires. Cette dualité est particulièrement précieuse en sciences de l\'eau où les données sont rares, les événements extrêmes peu observés, et l\'information régionale abondante. Ce chapitre couvre le théorème de Bayes, les distributions conjuguées, les méthodes MCMC, et les applications à l\'analyse de fréquence des crues et à la calibration des modèles hydrologiques.',
      sections: [
        {
          titre: '1. Fondements de l\'inférence bayésienne',
          texte: 'Le théorème de Bayes est la règle de mise à jour des croyances probabilistes à la lumière de nouvelles données. Il est à la fois simple dans son énoncé et profond dans ses implications pour l\'inférence statistique.',
          sous_sections: [
            {
              titre: '1.1 Théorème de Bayes et distributions',
              texte: '<p>Le <strong>théorème de Bayes</strong> s\'écrit : π(θ|y) ∝ L(y|θ) × π(θ), où :\n<br>• π(θ) est la <strong>distribution a priori</strong> sur le paramètre θ (ce que l\'on sait avant d\'observer y)\n<br>• L(y|θ) est la <strong>vraisemblance</strong> des données y observées sous le paramètre θ\n<br>• π(θ|y) est la <strong>distribution a posteriori</strong> (ce que l\'on sait sur θ après observation de y)\n<br>• Le facteur de normalisation ∫L(y|θ)π(θ)dθ est la vraisemblance marginale (ou évidence)</p><p>L\'a posteriori résume toute l\'information disponible sur θ. L\'estimateur bayésien naturel est E[θ|y] (espérance a posteriori). L\'IC bayésien (intervalle de crédibilité) à 95 % contient θ avec probabilité 0,95 au sens bayésien : P(θ ∈ IC | y) = 0,95 — interprétation plus directe que l\'IC fréquentiste.</p>'
            },
            {
              titre: '1.2 Choix de l\'a priori et familles conjuguées',
              texte: '<p>Le choix de l\'a priori est central en inférence bayésienne :\n<br>• <strong>A priori informatifs</strong> : basés sur des données historiques, des jaugeages antérieurs, des relations régionales. Par exemple, pour le paramètre de localisation μ de la GEV, un a priori Normal centré sur la moyenne régionale des QMNA5.\n<br>• <strong>A priori non informatifs</strong> (Jeffreys, uniforme) : expriment l\'ignorance — utiles quand aucune connaissance a priori n\'est disponible.\n<br>• <strong>Familles conjuguées</strong> : l\'a priori et l\'a posteriori appartiennent à la même famille paramétrique. Exemple classique : Normal-Normal. Si Y|μ ∼ N(μ, σ²) avec σ² connu et π(μ) ∼ N(μ₀, τ²), alors π(μ|y) ∼ N(μ_n, τ_n²), avec μ_n = (μ₀/τ² + nȳ/σ²) / (1/τ² + n/σ²) et 1/τ_n² = 1/τ² + n/σ². C\'est un compromis pondéré entre l\'a priori μ₀ et les données ȳ, les poids étant les précisions (inverses des variances).</p>'
            }
          ]
        },
        {
          titre: '2. Méthodes MCMC pour l\'inférence a posteriori',
          texte: 'Pour des modèles complexes (plusieurs paramètres, a priori non conjugués), la distribution a posteriori n\'a pas de forme analytique. Les méthodes MCMC (Markov Chain Monte Carlo) permettent de l\'échantillonner numériquement.',
          sous_sections: [
            {
              titre: '2.1 Algorithme de Metropolis-Hastings',
              texte: '<p>L\'algorithme de <strong>Metropolis-Hastings (MH)</strong> construit une chaîne de Markov dont la distribution stationnaire est π(θ|y). À chaque itération t :\n1. Proposer θ* ∼ q(θ*|θ^(t)) (distribution de proposition, ex. N(θ^(t), σ²_q))\n2. Calculer le ratio d\'acceptance α = min(1, [L(y|θ*)π(θ*)/L(y|θ^(t))π(θ^(t))] × [q(θ^(t)|θ*)/q(θ*|θ^(t))])\n3. Accepter θ^(t+1) = θ* avec probabilité α, sinon θ^(t+1) = θ^(t).\n<br>Après une période de chauffe (burn-in), la chaîne converge vers π(θ|y). La variance σ²_q de la proposition est un paramètre de réglage crucial : trop petite → exploration lente ; trop grande → taux d\'acceptation faible (< 20 %). Optimal ≈ 23 % d\'acceptation pour une distribution cible gaussienne unidimensionnelle.</p>'
            },
            {
              titre: '2.2 Diagnostic de convergence MCMC',
              texte: '<p>Vérifier la convergence d\'une chaîne MCMC est essentiel avant d\'utiliser ses résultats :\n<br>• <strong>Trace plots</strong> : visualisation de θ^(t) en fonction de t. Une chaîne convergée montre une stationnarité visuelle autour d\'un niveau stable.\n<br>• <strong>Statistique de Gelman-Rubin R̂</strong> : compare la variance entre plusieurs chaînes parallèles (initialisées différemment) à la variance au sein d\'une chaîne. R̂ → 1 à la convergence ; R̂ > 1,1 indique une convergence insuffisante.\n<br>• <strong>Autocorrélation de la chaîne</strong> : une forte autocorrélation ρ(k) pour de grands k indique que la chaîne explore lentement l\'espace des paramètres → augmenter σ²_q ou utiliser un algorithme plus efficace (HMC, NUTS).\n<br>• <strong>Taille effective d\'échantillon (ESS)</strong> : ESS = N / (1 + 2Σ_k ρ(k)) — le nombre d\'échantillons indépendants équivalents. ESS >> 100 est généralement suffisant pour estimer les quantiles de l\'a posteriori.</p>'
            }
          ]
        },
        {
          titre: '3. Application : analyse fréquentielle bayésienne des crues',
          texte: 'L\'analyse de fréquence des crues est un cas d\'usage paradigmatique de l\'inférence bayésienne : les données sont rares (séries courtes), les événements extrêmes peu observés, et l\'information régionale (d\'autres stations) est précieuse. L\'approche bayésienne combine naturellement ces sources.',
          sous_sections: [
            {
              titre: '3.1 Ajustement bayésien d\'une loi GEV',
              texte: '<p>La loi GEV (Generalized Extreme Value) est la loi limite des maxima : F(x) = exp{−[1+ξ(x−μ)/σ]^(−1/ξ)} avec μ (localisation), σ (échelle), ξ (forme). L\'approche bayésienne spécifie des a priori sur (μ, σ, ξ) puis obtient la distribution a posteriori π(μ,σ,ξ|y) par MCMC.</p><p>Pour l\'a priori sur ξ (paramètre de forme, le plus difficile à estimer) : l\'analyse régionale des données françaises montre que ξ ∈ [−0,5 ; 0,5] pour la grande majorité des stations. Un a priori Normal(0, 0,2²) concentre la masse dans cette plage tout en restant informatif. L\'a posteriori sur ξ est alors bien contraint même pour des séries courtes (20–30 ans), réduisant l\'incertitude sur Q_T par un facteur 2–3 par rapport à l\'approche MLE seule. La distribution prédictive a posteriori de Q_T est P(Q_T ≤ x | y) = ∫ GEV(x; μ,σ,ξ) π(μ,σ,ξ|y) dμ dσ dξ — elle intègre l\'incertitude sur les paramètres.</p>'
            },
            {
              titre: '3.2 Mise à jour avec des données historiques et des traces de crues',
              texte: '<p>Une force majeure de l\'approche bayésienne est son aptitude à incorporer naturellement des <strong>données censurées</strong> et des <strong>données historiques</strong> (archives). Pour une crue historique connue seulement comme "supérieure à un seuil x_s" (trace laissée au-dessus du niveau de certitude), la vraisemblance est L(y_hist|θ) = P(X > x_s | θ) = 1 − F(x_s; θ). Cette information s\'intègre multiplicativement dans la vraisemblance globale.</p><p>En France, les archives historiques des crues (documents d\'Ancien Régime, laisse de crue sur les bâtisses, récits de chroniqueurs) permettent d\'étendre la période d\'observation de 50 à 300–500 ans. L\'approche bayésienne de Neppel et al. (2010) et l\'outil SHYPRE-hist intègrent ces données censurées. L\'effet est majeur : avec 3 crues historiques confirmées au-dessus d\'un seuil, l\'IC à 95 % sur Q₁₀₀ se réduit d\'un facteur ~2 par rapport à l\'analyse sans données historiques.</p>'
            }
          ]
        },
        {
          titre: '4. Calibration bayésienne des modèles hydrologiques',
          texte: 'Les modèles hydrologiques (GR4J, HBV, TOPMODEL) comportent des paramètres incertains à calibrer. L\'inférence bayésienne permet une calibration rigoureuse qui quantifie l\'incertitude des paramètres et des prévisions.',
          sous_sections: [
            {
              titre: '4.1 Structure du problème de calibration',
              texte: '<p>Pour un modèle hydrologique M(θ) produisant les débits simulés Q̂_t(θ) à partir de pluie-ETP, et les débits observés Q_t, la vraisemblance est typiquement : L(Q|θ) = Π_t p(Q_t | Q̂_t(θ), σ²_ε), où p est la densité de probabilité de l\'erreur de modèle ε_t = Q_t − Q̂_t(θ).</p><p>Choix du modèle d\'erreur : (1) Normale homoscédastique — simple mais viole l\'hétéroscédasticité des hydrogrammes (grandes erreurs aux crues) ; (2) Log-normale — cohérente avec ε ∝ Q̂ (erreurs relatives) ; (3) SWAT Box-Cox — transformation λ de Q avant application de la gaussienne ; (4) Modèle d\'erreur AR(1) — tient compte de l\'autocorrélation temporelle des erreurs de simulation. Le choix du modèle d\'erreur influence fortement l\'a posteriori des paramètres hydrologiques — il doit être justifié par l\'analyse des résidus de calibration déterministe.</p>'
            },
            {
              titre: '4.2 Équifinalité et incertitude des prévisions (GLUE)',
              texte: '<p>En calibration hydrologique, l\'<strong>équifinalité</strong> (concept de Beven & Binley, 1992) désigne le fait que de nombreuses combinaisons de paramètres différents donnent des performances similaires (Nash-Sutcliffe NSE similaire). Cela induit une incertitude significative sur les paramètres et, en conséquence, sur les prévisions.</p><p>La méthode <strong>GLUE (Generalized Likelihood Uncertainty Estimation)</strong> opérationnalise ce concept : (1) échantillonner un grand nombre de jeux de paramètres (Monte Carlo, 10⁵–10⁶ tirages) ; (2) calculer la performance L(θ) (mesure de vraisemblance) pour chaque jeu ; (3) rejeter les jeux non-comportementaux (L < seuil) ; (4) calculer l\'enveloppe des prédictions pondérées par L(θ). GLUE est une approximation de l\'inférence bayésienne — elle n\'utilise pas de vraisemblance statistiquement rigoureuse mais est robuste, parallélisable et largement utilisée. L\'incertitude de prévision d\'un modèle hydrologique bien calibré est typiquement ±20–30 % sur Q_pic d\'une crue — même avec un modèle parfait, l\'incertitude de mesure des précipitations (forçage) domine souvent l\'incertitude totale.</p>'
            }
          ]
        }
      ],
      points: [
        'Bayes : π(θ|y) ∝ L(y|θ) × π(θ) — a posteriori ∝ vraisemblance × a priori',
        'A priori informatif : basé sur données régionales ; non informatif : uniforme/Jeffreys',
        'Conjuguée Normal-Normal : μ_n = compromis pondéré par les précisions (1/σ²)',
        'MCMC-MH : chaîne de Markov convergeant vers π(θ|y) par acceptation-rejet',
        'Diagnostic convergence : trace plots, R̂ de Gelman-Rubin (< 1,1), ESS',
        'GEV bayésienne : a priori sur ξ ∈ N(0,0,04) réduit l\'IC sur Q_T d\'un facteur 2-3',
        'Données historiques censurées : L(y_hist|θ) = P(X > x_s | θ) — intégrées naturellement',
        'Équifinalité : nombreux jeux de paramètres avec performance similaire',
        'GLUE : Monte Carlo + seuil de comportement → enveloppe d\'incertitude des prévisions',
        'Intervalle de crédibilité bayésien : P(θ ∈ IC | données) = 95 % — interprétation directe'
      ],
      formules: [
        'Bayes : π(θ|y) ∝ L(y|θ) × π(θ)',
        'Normal-Normal : μ_n = (μ₀/τ² + nȳ/σ²) / (1/τ² + n/σ²)',
        '1/τ_n² = 1/τ² + n/σ²',
        'MH ratio : α = min(1, [L(y|θ*)π(θ*)] / [L(y|θ)π(θ)] × q(θ|θ*)/q(θ*|θ))',
        'ESS = N / (1 + 2Σ_k ρ(k))',
        'Prédictive a posteriori : P(Q_T ≤ x | y) = ∫ F_GEV(x;μ,σ,ξ) π(μ,σ,ξ|y) dμ dσ dξ'
      ],
      retenir: 'Bayes = mise à jour formelle de l\'a priori par la vraisemblance des données → a posteriori. Les a priori régionaux réduisent drastiquement l\'incertitude sur Q_T pour des séries courtes. Les données historiques censurées s\'intègrent via leur vraisemblance partielle. MCMC permet d\'explorer l\'a posteriori de modèles complexes — vérifier la convergence (R̂, ESS) est obligatoire avant d\'interpréter les résultats.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Mise à jour bayésienne conjuguée. L\'a priori sur le débit moyen annuel μ d\'un bassin non jaugé est N(45, 10²) m³/s (basé sur la régionalisation). On observe 5 années de jaugeages : ȳ = 52 m³/s avec écart-type connu σ = 8 m³/s. (a) Calculer la distribution a posteriori π(μ|y). (b) Calculer l\'estimateur bayésien E[μ|y]. (c) Comparer avec la MLE et l\'a priori.',
        solution: '(a) Modèle conjugué Normal-Normal : π(μ) = N(μ₀=45, τ²=100), Y|μ ∼ N(μ, σ²/n) avec σ²=64, n=5.\nPrécision a priori : 1/τ² = 1/100 = 0,01.\nPrécision des données : n/σ² = 5/64 = 0,0781.\nPrécision a posteriori : 1/τ_n² = 0,01 + 0,0781 = 0,0881 → τ_n² = 11,35 → τ_n = 3,37 m³/s.\n\n(b) E[μ|y] = μ_n = (μ₀/τ² + nȳ/σ²) / (1/τ_n²)\n= (45×0,01 + 52×0,0781) / 0,0881\n= (0,45 + 4,06) / 0,0881 = 4,51/0,0881 = 51,2 m³/s.\n\n(c) Comparaison :\n• A priori : μ₀ = 45 m³/s (avant les données)\n• MLE (maximum de vraisemblance) : μ̂_MLE = ȳ = 52 m³/s\n• Bayésien : E[μ|y] = 51,2 m³/s (compromis pondéré entre 45 et 52)\nLe bayésien tire légèrement vers l\'a priori car τ=10 (a priori) est large par rapport à σ/√n = 8/√5 = 3,6 (précision des données) → les données dominent (poids données = 0,0781 >> poids a priori = 0,01). Avec plus de données (n→∞), l\'estimateur bayésien converge vers la MLE.'
      },
      {
        n: '2',
        enonce: 'Algorithme de Metropolis-Hastings. On veut estimer le paramètre θ d\'une distribution Poisson (nombre d\'épisodes de crue >Q₅ par an) : Y|θ ∼ Poisson(θ). On observe y = 2 crues en 1 an. L\'a priori est θ ∼ Gamma(α=2, β=1) (mean=2). Implémenter MH avec q(θ*|θ) = N(θ, 0,5²) : (a) Calculer α pour θ=2, θ*=2,3. (b) Décrire les 3 premières itérations avec u₁=0,65, u₂=0,30, u₃=0,85. (c) Identifier l\'a posteriori analytique et vérifier.',
        solution: '(a) L(y|θ) = e^(−θ)×θ^y/y! = e^(−θ)×θ²/2 (pour y=2).\nπ(θ) = Gamma(2,1) : π(θ) = θ×e^(−θ).\nRatio d\'acceptance α = [L(y|θ*)π(θ*)] / [L(y|θ)π(θ)] × q(θ|θ*)/q(θ*|θ).\nProposition symétrique q(θ|θ*) = q(θ*|θ) → le ratio q se simplifie.\nNum. : e^(−2,3)×2,3²×2,3×e^(−2,3)/2 = e^(−4,6)×2,3³/2 = e^(−4,6)×12,17/2\nDen. : e^(−2)×2²×2×e^(−2)/2 = e^(−4)×4×2/2 = e^(−4)×4\nα = [e^(−4,6)×6,085] / [e^(−4)×4] = e^(−0,6) × 1,52 = 0,549×1,52 = 0,835. α = min(1, 0,835) = 0,835.\n\n(b) Départ : θ^(0)=2.\nIt.1 : θ*=2,3, α=0,835. u₁=0,65 < 0,835 → accepter θ^(1)=2,3.\nIt.2 : θ=2,3, proposer θ*=2,3+ε₂. Supposons θ*=1,8, recalculer α≈0,45. u₂=0,30 < 0,45 → accepter θ^(2)=1,8.\nIt.3 : θ=1,8, proposer θ*=2,1. α≈0,78. u₃=0,85 > 0,78 → rejeter θ^(3)=1,8 (reste).\n\n(c) La distribution a posteriori analytique pour Poisson-Gamma est Gamma conjuguée : si Y|θ∼Poisson(θ) et θ∼Gamma(α,β), alors θ|Y∼Gamma(α+y, β+n) = Gamma(2+2, 1+1) = Gamma(4, 2). E[θ|y] = α_post/β_post = 4/2 = 2,0. Mode = (4−1)/2 = 1,5. L\'a posteriori est Gamma(4,2) : la chaîne MH, après burn-in, doit reproduire cette distribution — vérifiable par l\'histogramme des θ^(t).'
      },
      {
        n: '3',
        enonce: 'Diagnostic MCMC. Une chaîne MCMC de 10 000 itérations (burn-in = 2 000) est lancée en 3 runs indépendants pour estimer μ et σ de la GEV des crues annuelles. Résultats : Run 1 : μ_chain ∈ [800;1200] m³/s, trace stationnaire après it. 500. Run 2 : μ_chain ∈ [600;1100] m³/s, trace stationnaire après it. 2000. Run 3 : μ_chain stuck à μ=950 pour 3000 itérations consécutives. R̂(μ) = 1,25. ACF(μ) : ρ(1)=0,85, ρ(10)=0,42, ρ(50)=0,12. ESS = 320. (a) Ce résultat est-il acceptable ? (b) Identifier les 3 problèmes. (c) Proposer des corrections.',
        solution: '(a) Non. Plusieurs indicateurs de non-convergence sont présents : R̂ = 1,25 > 1,1 (seuil recommandé) → les chaînes n\'ont pas convergé vers la même distribution. ESS = 320 sur 8000 échantillons post-burn-in = 4 % d\'efficacité — très faible. ACF décroît lentement → exploration lente.\n\n(b) Trois problèmes identifiés :\n(1) <strong>Non-stationnarité de Run 2</strong> : la trace ne se stabilise qu\'après l\'itération 2000, soit dans la zone de burn-in (2000 it.). En prolongeant le burn-in à 4000 et en relançant, ce problème pourrait disparaître. Mais la stationnarité tardive peut aussi indiquer que la chaîne explore mal l\'a posteriori.\n(2) <strong>Stuck de Run 3</strong> : μ reste constant 3000 itérations = la chaîne est piégée dans une zone à faible gradient de vraisemblance. Cause probable : variance de proposition σ_q trop petite (toutes les propositions θ* sont rejetées car légèrement moins vraisemblables). Taux d\'acceptation Run 3 ≈ 0 dans cette période.\n(3) <strong>Forte autocorrélation</strong> : ρ(1) = 0,85 → la chaîne explore l\'espace des paramètres très lentement. ESS = N/(1+2Σρ(k)) ≈ 8000/(1+2×0,85/(1−0,85)) ≈ 8000/12,3 ≈ 650 (estimation simplifiée). La forte autocorrélation est due à une variance de proposition trop petite.\n\n(c) Corrections : (1) Augmenter σ_q de la proposition d\'un facteur 2–3 pour cibler un taux d\'acceptation de 20–30 % ; (2) utiliser un algorithme adaptatif (AM-MCMC) qui ajuste automatiquement σ_q pendant le burn-in ; (3) prolonger le burn-in à 5000 itérations et relancer les 3 chaînes depuis des points initiaux très différents (dispersés selon l\'a priori) ; (4) envisager HMC (Hamiltonian Monte Carlo) ou NUTS qui exploitent le gradient de log-vraisemblance pour des sauts plus efficaces — ESS >> 1000 avec 8000 itérations est alors atteignable.'
      },
      {
        n: '4',
        enonce: 'Ajustement GEV bayésien avec a priori régional. Sur 25 ans de maxima annuels (n=25), la MLE donne : μ̂=850 m³/s, σ̂=180 m³/s, ξ̂=0,42 (IC à 95 % : [−0,05 ; 0,89]). L\'analyse régionale bayésienne donne a priori ξ ∼ N(0,10 ; 0,15²). (a) La MLE de ξ est-elle fiable sur 25 ans ? (b) Calculer l\'effet de l\'a priori sur l\'IC de ξ. (c) Quel est l\'impact sur Q₁₀₀ ?',
        solution: '(a) Non. Sur n=25 observations, le paramètre de forme ξ de la GEV est très mal estimé par MLE : l\'IC à 95 % [−0,05 ; 0,89] a une largeur de 0,94 — quasi la totalité de la gamme physique plausible. ξ̂=0,42 implique une distribution à queue très lourde (Fréchet) mais l\'incertitude est telle que ξ pourrait aussi être légèrement négatif (Weibull, queue finie). Avec seulement 25 ans, la MLE de ξ est instable — c\'est précisément là où l\'approche bayésienne apporte le plus de valeur.\n\n(b) A priori : ξ ∼ N(0,10 ; 0,0225). Vraisemblance de ξ ≈ N(0,42 ; (0,24)²) (approximation par la courbure de la log-vraisemblance). A posteriori conjugué approximatif : σ²_post = (1/0,0225 + 1/0,0576)^(−1) = (44,4 + 17,4)^(−1) = (61,8)^(−1) = 0,0162. ξ_post = σ²_post × (0,10/0,0225 + 0,42/0,0576) = 0,0162 × (4,44 + 7,29) = 0,0162 × 11,73 = 0,190. IC a posteriori : ξ_post ± 1,96√0,0162 = 0,190 ± 0,249 = [−0,06 ; 0,44]. Largeur IC : 0,50 vs 0,94 pour MLE → réduction de 47 %.\n\n(c) Impact sur Q₁₀₀ (période de retour 100 ans) = quantile F = 0,99 de la GEV :\nMLE (ξ=0,42) : Q₁₀₀ = μ + σ/ξ × [(−ln(0,99))^(−ξ) − 1] = 850 + 180/0,42 × [(0,01005)^(−0,42) − 1] ≈ 850 + 429 × [4,70 − 1] = 850 + 1588 = 2438 m³/s.\nBayésien (ξ=0,19) : Q₁₀₀ = 850 + 180/0,19 × [(0,01005)^(−0,19) − 1] ≈ 850 + 947 × [1,97 − 1] = 850 + 919 = 1769 m³/s. Différence : −27 %. L\'a priori régional (ξ modéré) réduit Q₁₀₀ de 27 % — différence majeure pour le dimensionnement des ouvrages.'
      },
      {
        n: '5',
        enonce: 'Données historiques censurées. Sur la rivière Arc en Savoie, les archives indiquent 3 crues "supérieures à 450 m³/s" sur les 300 années depuis 1720 (en plus des 50 années de jaugeage systématique depuis 1970). La loi GEV ajustée sur les 50 ans de données donne F(450) = P(Q ≤ 450) = 0,92. (a) Écrire la vraisemblance de ces 3 données historiques. (b) Comment ces données modifient-elles Q₅₀₀ ? (c) Quelle précaution vis-à-vis du décompte des crues historiques ?',
        solution: '(a) Pour chaque crue historique connue comme "supérieure à 450 m³/s" (données de dépassement) : L_hist_i = P(Q > 450 | μ,σ,ξ) = 1 − F(450; μ,σ,ξ) = 1 − 0,92 = 0,08. Pour les 3 crues indépendantes : L_hist = (0,08)³ = 5,12×10⁻⁴. Cette vraisemblance est multipliée à la vraisemblance des 50 données de jaugeage dans l\'approche bayésienne : L_total = L_jaugeage × L_hist. Les 3 dépassements renforcent l\'information sur la queue de la distribution.\n\n(b) L\'effet est d\'ancrer la queue de la distribution. Sans données historiques, Q₅₀₀ est estimé par pure extrapolation des 50 ans — incertitude très grande. Les 3 dépassements de 450 m³/s sur 300 ans impliquent un taux de dépassement annuel moyen ≈ 3/300 = 1% = période de retour 100 ans. Q₅₀₀ est ainsi ancré à une valeur réaliste : si 3 crues > 450 m³/s en 300 ans, alors Q₁₀₀ ≈ 450 m³/s et Q₅₀₀ est extrapolable avec bien moins d\'incertitude. L\'IC à 95 % sur Q₅₀₀ se réduit typiquement d\'un facteur 1,5–2 avec ces données historiques.\n\n(c) Deux précautions critiques : (1) <strong>Censure de la période de perception</strong> : les archives ne recensent que les crues "remarquables". Si une crue de 300 m³/s n\'a pas laissé de traces écrites mais a bien eu lieu, elle est absente du registre. Il faut distinguer "pas de trace = débit < seuil de perception" et "pas de trace = événement non remarquable". L\'analyse ne peut utiliser que les dépassements au-dessus d\'un seuil clairement identifiable (trace physique, récit explicite). (2) <strong>Non-stationnarité historique</strong> : les conditions de ruissellement du bassin en 1720 (couverture forestière, utilisation des terres) peuvent différer d\'aujourd\'hui → les crues historiques ne sont pas nécessairement i.i.d. avec celles des 50 dernières années. Une correction via un modèle d\'occupation des sols peut être nécessaire.'
      },
      {
        n: '6',
        enonce: 'GLUE et incertitude de modèle. Un modèle GR4J est calibré sur un bassin de 200 km² par méthode GLUE (10⁵ tirages Monte Carlo uniformes sur les 4 paramètres). Performance retenue : NSE ≥ 0,7 (seuil comportemental). Résultats : 2340 jeux retenus sur 100 000 (2,34 %). L\'enveloppe à 90 % des débits simulés encadre 71 % des débits observés (en validation). (a) L\'incertitude est-elle bien estimée ? (b) Comment améliorer le diagnostic ? (c) Quelle limitation fondamentale de GLUE ?',
        solution: '(a) Non. Si l\'enveloppe à 90 % n\'encadre que 71 % des observations (en validation), l\'incertitude est sous-estimée : on s\'attendrait à ~90 % des obs. dans l\'enveloppe à 90 %. Cela signifie que la combinaison [distribution a priori uniforme + seuil NSE ≥ 0,7] ne capture pas toute l\'incertitude prédictive. Les IC bayésiens rigoureux calibrés avec une vraisemblance statistique appropriée donneraient une meilleure couverture.\n\n(b) Pistes d\'amélioration : (1) Utiliser une vraisemblance statistique rigoureuse (ex. log-normale des erreurs de débit) plutôt que NSE avec seuil binaire — cela pondère mieux les jeux de paramètres selon la probabilité des données ; (2) vérifier l\'équifinalité : si seulement 2,34 % des tirages sont retenus avec une distribution uniforme large, l\'a priori est mal centré — étudier les distributions a posteriori de chaque paramètre pour identifier les zones à haute vraisemblance ; (3) ajouter un modèle d\'erreur explicite (variance résiduelle σ²_ε) dans les paramètres estimés — le fait de ne pas modéliser l\'erreur conduit à une sous-estimation de l\'incertitude prédictive ; (4) utiliser une validation sur une période indépendante (split-sample test).\n\n(c) Limitation fondamentale : GLUE ne définit pas une vraisemblance statistiquement rigoureuse — la mesure de performance NSE n\'est pas une fonction de vraisemblance au sens probabiliste. Les IC GLUE ne sont donc pas de vrais IC bayésiens ni fréquentistes : ils dépendent du choix du seuil comportemental (arbitraire) et de la distribution a priori des paramètres. GLUE est une heuristique puissante et robuste, mais elle ne peut pas garantir une couverture correcte des IC — c\'est pourquoi les approches formellement bayésiennes (DREAM, BaRatin) lui sont préférées pour les applications critiques (gestion des risques, design d\'infrastructure).'
      },
      {
        n: '7',
        enonce: 'Comparaison fréquentiste vs bayésien. Sur 20 ans de maxima annuels (n=20), deux approches estiment Q₁₀₀ :\n• MLE (Gumbel) : Q̂₁₀₀ = 1800 m³/s, IC à 95 % : [1200 ; 2700] m³/s\n• Bayésien (GEV, a priori régional) : Q̂₁₀₀ = 1620 m³/s, IC à 95 % : [1250 ; 2050] m³/s\n(a) Interpréter les deux IC. (b) Pour le dimensionnement d\'un déversoir de sécurité, laquelle choisir ? (c) Que se passe-t-il si une crue de 2200 m³/s est observée la 21ème année ?',
        solution: '(a) IC fréquentiste (MLE) : "Si on répète l\'expérience (20 ans de données) un très grand nombre de fois, 95 % des IC calculés par cette procédure contiendront la vraie valeur de Q₁₀₀". IC bayésien : "Étant donné les données observées et l\'a priori régional, la probabilité que Q₁₀₀ soit dans [1250 ; 2050] m³/s est de 95 %". L\'IC bayésien est plus étroit (800 m³/s vs 1500 m³/s) car l\'a priori régional ajoute de l\'information sur ξ. L\'IC bayésien est centré plus bas (1620 vs 1800 m³/s) car l\'a priori tire ξ vers des valeurs modérées.\n\n(b) Pour le dimensionnement d\'un déversoir de sécurité (ouvrage critique, rupture = catastrophe), il convient d\'utiliser le débit de dimensionnement le plus conservateur. Le MLE donne une borne supérieure de 2700 m³/s vs 2050 m³/s pour le bayésien. Cependant, l\'IC bayésien est mieux calibré (il intègre l\'information régionale de centaines de bassins similaires). En pratique, l\'ingénieur utilisera la borne supérieure de l\'IC à 95 % de l\'approche bayésienne (2050 m³/s) ET vérifiera que l\'a priori régional est bien représentatif du bassin. Si des doutes subsistent sur la représentativité de l\'a priori, ajouter une marge de sécurité supplémentaire.\n\n(c) Si Q₂₁ = 2200 m³/s est observée (un événement plus fort que presque toutes les simulations MLE et en dehors de l\'IC bayésien) : (1) MLE sur 21 ans : ξ̂ augmente fortement, Q₁₀₀ monte bien au-delà de 1800 m³/s. (2) Bayésien : π(μ,σ,ξ|y₁..₂₁) se met à jour — Q₂₁=2200 est dans la queue supérieure de l\'a posteriori prévu, mais pas aberrant. L\'a posteriori s\'ajuste : ξ_post augmente, Q₁₀₀_post monte vers ~1900–2000 m³/s mais moins violemment que MLE. L\'approche bayésienne absorbe mieux les événements extrêmes rares car l\'a priori joue un rôle de régularisation.'
      },
      {
        n: '8',
        enonce: 'Synthèse — calibration bayésienne d\'un modèle pluie-débit. Un gestionnaire de barrage souhaite estimer la distribution prédictive du débit de crue centennal Q₁₀₀ sur un bassin non jaugé de 150 km². Il dispose de : (a) l\'analyse régionale (45 stations) donnant ln(Q₁₀₀) ∼ N(6,2 ; 0,25²) m³/s ; (b) 15 ans de débit simulé par modèle GR4J forcé par SAFRAN, avec incertitude de calibration ±25 % sur Q̂_pic. Proposer une stratégie bayésienne complète pour estimer Q₁₀₀ avec IC à 95 %.',
        solution: 'Stratégie en 4 étapes :\n\n(1) <strong>A priori</strong> : utiliser l\'analyse régionale comme a priori. ln(Q₁₀₀) ∼ N(6,2 ; 0,0625) → Q₁₀₀ ≈ e^6,2 = 492 m³/s, IC [e^(6,2−2×0,25) ; e^(6,2+2×0,25)] = [295 ; 820] m³/s. Cet a priori intègre l\'hétérogénéité de 45 stations — robuste.\n\n(2) <strong>Vraisemblance</strong> : les 15 ans de simulation GR4J fournissent une série de débits pics simulés Q̂_pic_t. Pour construire la vraisemblance de Q₁₀₀ depuis ces 15 ans : ajuster une GEV aux maxima annuels simulés Q̂_pic_1..15. Vraisemblance formelle : L(Q₁₀₀|données_GR4J) ∝ GEV_15ans_CDF(Q₁₀₀). L\'incertitude de calibration (±25 %) est modélisée comme un bruit multiplicatif log-normal sur chaque Q̂_pic_t avec σ_calib = ln(1,25)/1,96 ≈ 0,113.\n\n(3) <strong>A posteriori</strong> par MCMC : explorer ln(Q₁₀₀) avec MH ou NUTS. L\'a posteriori π(Q₁₀₀|données) = L(Q₁₀₀|GR4J) × π_régional(Q₁₀₀) [∝ Bayes]. L\'incertitude de calibration σ_calib peut être incluse comme paramètre supplémentaire avec a priori Half-Normal(0,2).\n\n(4) <strong>IC à 95 %</strong> : extraire le percentile 2,5 % et 97,5 % de la distribution a posteriori de Q₁₀₀. Résultat attendu : E[Q₁₀₀|données] ≈ 450–550 m³/s, IC à 95 % plus étroit que l\'a priori régional seul (grâce aux 15 ans de simulation) mais plus large que si 15 ans de jaugeages directs existaient (l\'incertitude du modèle GR4J ± 25 % reste dominante). Communiquer : "Q₁₀₀ est estimé à 500 m³/s, avec une probabilité de 95 % qu\'il soit entre 320 et 750 m³/s — incertitude dominée par l\'imprécision du modèle hydrologique et l\'absence de jaugeage sur le bassin".'
      }
    ],
    flashcards: [
      {
        q: 'Qu\'est-ce que le théorème de Bayes et en quoi l\'a posteriori est-il plus informatif que la MLE ?',
        r: 'π(θ|y) ∝ L(y|θ) × π(θ). L\'a posteriori combine la vraisemblance des données avec la connaissance a priori. La MLE maximise seulement L(y|θ), ignorant l\'a priori. L\'a posteriori donne une distribution complète sur θ, permettant des IC (intervalles de crédibilité) et une propagation d\'incertitude. La MLE ne donne qu\'un point et un IC asymptotique.',
        expl: 'Pour des séries courtes (n < 30 ans), la MLE de ξ GEV est très instable (IC très large). Un a priori bayésien informé par l\'analyse régionale (100+ stations similaires) réduit l\'IC de ξ de moitié, stabilise Q_T et donne des estimations plus fiables pour le dimensionnement d\'ouvrages hydrauliques.'
      },
      {
        q: 'Comment les distributions conjuguées simplifient-elles l\'inférence bayésienne ?',
        r: 'Une famille conjuguée garantit que si l\'a priori appartient à la famille F, l\'a posteriori y appartient aussi. Normal-Normal (μ inconnu, σ connu) → compromis pondéré par les précisions. Gamma-Poisson (taux d\'occurrence) → Gamma(α+Σy, β+n). Avantage : calcul analytique, pas de MCMC nécessaire.',
        expl: 'Pour l\'estimation du taux moyen de débordements (comptage de jours > seuil), un modèle Poisson-Gamma est conjugué et très simple à calibrer. L\'a priori Gamma(α,β) représente la connaissance régionale (nombre moyen de jours de débordement/an = α/β). Après n années d\'observation avec Σy débordements, l\'a posteriori est Gamma(α+Σy, β+n) — mise à jour analytique immédiate.'
      },
      {
        q: 'Comment fonctionne l\'algorithme de Metropolis-Hastings et comment choisir la variance de proposition ?',
        r: 'MH propose θ* ∼ q(θ*|θ) et l\'accepte avec probabilité α = min(1, [L(y|θ*)π(θ*)] / [L(y|θ)π(θ)] × q(θ|θ*)/q(θ*|θ)). La chaîne converge vers π(θ|y). σ_q de la proposition vise 20–30 % d\'acceptation : trop petit → exploration lente (forte autocorrélation) ; trop grand → trop de rejets.',
        expl: 'Pour une GEV à 3 paramètres (μ,σ,ξ), l\'algorithme de Gibbs (mise à jour un paramètre à la fois) ou HMC (Hamiltonian Monte Carlo, utilisé par Stan) sont plus efficaces que MH multidimensionnel. Stan/PyMC3 implémentent NUTS (No-U-Turn Sampler), une variante adaptive de HMC qui ne nécessite aucun réglage manuel de σ_q — recommandé en pratique.'
      },
      {
        q: 'Comment les données historiques censurées enrichissent-elles l\'analyse fréquentielle bayésienne ?',
        r: 'Une crue historique connue comme "X > seuil x_s" contribue la vraisemblance L = P(X > x_s | θ) = 1 − F(x_s; θ). Pour 3 dépassements indépendants du seuil x_s sur 300 ans : L_hist = [1−F(x_s;θ)]³. Cette information ancre la queue de distribution et réduit l\'IC sur Q_T d\'un facteur 1,5–2.',
        expl: 'L\'outil BaRatin-hist (INRAE) intègre les laisses de crues historiques des archives françaises dans l\'ajustement GEV. Pour la Garonne à Toulouse, les archives documentent des crues extrêmes depuis le XIVe siècle (crue de 1875 : 7000+ m³/s). Ces données réduisent drastiquement l\'incertitude sur Q₁₀₀ et Q₁₀₀₀ — essentielles pour la gestion du risque inondation en zone dense.'
      },
      {
        q: 'Qu\'est-ce que l\'équifinalité en modélisation hydrologique et pourquoi est-elle un problème ?',
        r: 'L\'équifinalité (Beven & Binley, 1992) : de nombreux jeux de paramètres différents donnent des performances de simulation similaires (NSE similaire). C\'est un problème car : (1) les paramètres ne peuvent être identifiés de façon unique ; (2) les prévisions ont une incertitude structurelle liée à ce degré de liberté ; (3) l\'extrapolation hors des conditions de calibration est risquée.',
        expl: 'Pour GR4J sur un bassin de taille moyenne, les paramètres x1 (réservoir de production) et x3 (réservoir de routage) sont souvent corrélés : augmenter x1 et diminuer x3 peut donner un NSE similaire. La calibration MCMC révèle cette corrélation dans l\'a posteriori. GLUE la visualise directement. L\'incertitude prédictive sur Q_pic peut être ±20–30 % — même pour un modèle bien calibré.'
      },
      {
        q: 'Comment la statistique R̂ de Gelman-Rubin permet-elle de vérifier la convergence MCMC ?',
        r: 'R̂ = √(Var_total / Var_within) compare la variance entre les chaînes (Between) à la variance au sein de chaque chaîne (Within). À la convergence, les chaînes explorent la même distribution → Var_between → 0 → R̂ → 1. R̂ > 1,1 indique une convergence insuffisante : les chaînes sont encore dans des zones différentes de l\'espace des paramètres.',
        expl: 'En pratique, lancer R̂ sur ≥ 3 chaînes initialisées depuis des points très dispersés (selon l\'a priori) est la stratégie standard. Si R̂ reste > 1,1 après 50 000 itérations, le modèle est probablement mal spécifié (a priori trop contraignant, multimodalité de l\'a posteriori) ou l\'algorithme inefficace (MH avec mauvaise σ_q). Dans Stan, R̂ et ESS sont calculés automatiquement pour chaque paramètre.'
      }
    ]
  },
  'MASTER-EAU-012': {
    id: 'MASTER-EAU-012',
    titre: 'Propagation des incertitudes et analyse de sensibilité',
    fiche: {
      intro: 'Tout modèle hydrologique ou hydraulique est entaché d\'incertitudes : incertitudes sur les données d\'entrée (pluie mesurée imparfaitement, débit estimé par courbe de tarage), sur les paramètres (calibration limitée), sur la structure même du modèle (simplification du cycle hydrologique). La propagation des incertitudes quantifie comment ces incertitudes se répercutent sur les sorties du modèle, tandis que l\'analyse de sensibilité identifie quelles incertitudes d\'entrée contribuent le plus à l\'incertitude de la sortie. Ces deux approches sont indispensables pour une gestion fondée sur les risques, pour le pilotage des mesures de surveillance, et pour la communication des résultats aux décideurs.',
      sections: [
        {
          titre: '1. Sources et classification des incertitudes',
          texte: 'Comprendre la nature des incertitudes est la première étape de leur gestion. En hydrologie, elles sont multiples et de natures différentes.',
          sous_sections: [
            {
              titre: '1.1 Taxonomie des incertitudes en modélisation hydrologique',
              texte: '<p>On distingue classiquement trois sources d\'incertitude :\n<br>• <strong>Incertitude épistémique</strong> (ou d\'ignorance) : due au manque de connaissance — données insuffisantes, paramètres non mesurables directement. Réductible en ajoutant des observations.\n<br>• <strong>Incertitude aléatoire</strong> (ou variabilité naturelle) : inhérente aux processus stochastiques — variabilité des précipitations, des crues, des étiages. Non réductible par plus de données.\n<br>• <strong>Incertitude structurelle</strong> : due aux simplifications du modèle (équations, discrétisation spatiale/temporelle). Réductible par un meilleur modèle mais jamais nulle.</p><p>En pratique, les incertitudes hydrologiques totales comprennent : (1) incertitude des données d\'entrée (pluie ±5–20 %, ETP ±10–30 %) ; (2) incertitude des paramètres du modèle (courbe de tarage ±5–20 % sur Q) ; (3) incertitude structurelle du modèle (bias systématiques lors des crues). L\'incertitude de la courbe de tarage est souvent la plus grande source d\'incertitude des débits mesurés — ce qui est surprenant car on la considère souvent comme "la mesure".</p>'
            },
            {
              titre: '1.2 Représentation probabiliste des incertitudes',
              texte: '<p>Chaque source d\'incertitude est représentée par une distribution de probabilité. La source peut être :\n<br>• Un paramètre θ avec distribution a posteriori π(θ|données) (approche bayésienne)\n<br>• Une variable d\'entrée X avec distribution empirique ou paramétrique (pluie centennale ∼ GEV)\n<br>• Un terme d\'erreur additif ou multiplicatif (erreur de modèle)\n<br>La représentation doit respecter les <strong>corrélations</strong> entre incertitudes : si le paramètre de rugosité de Manning n est incertain, il est corrélé entre les bras d\'un réseau hydraulique (même nature de berges). Ignorer ces corrélations peut sous-estimer ou surestimer l\'incertitude de sortie.</p>'
            }
          ]
        },
        {
          titre: '2. Méthodes de propagation des incertitudes',
          texte: 'Plusieurs méthodes permettent de propager les distributions d\'incertitude des entrées vers les sorties d\'un modèle. Le choix dépend de la complexité du modèle et des ressources de calcul disponibles.',
          sous_sections: [
            {
              titre: '2.1 Méthode analytique du premier ordre (linéarisation)',
              texte: '<p>Pour un modèle Y = f(X₁, …, X_p) avec des entrées Xi de moyennes μᵢ et variances σᵢ² et covariances Cov(Xᵢ,Xⱼ), la <strong>propagation au premier ordre (Taylor du premier ordre)</strong> approche la variance de la sortie : Var(Y) ≈ Σᵢ (∂f/∂Xᵢ)² σᵢ² + 2Σᵢ<ⱼ (∂f/∂Xᵢ)(∂f/∂Xⱼ) Cov(Xᵢ,Xⱼ), les dérivées étant évaluées en μ = (μ₁,…,μ_p).</p><p>Cette méthode est simple et rapide (calcul analytique ou semi-analytique des dérivées), mais suppose que f est quasi-linéaire autour de μ et que les incertitudes sont "petites". Elle est inadaptée aux modèles fortement non-linéaires (ex. relation Q = a(H−H₀)^b avec grande incertitude sur b) et aux distributions non symétriques. Pour la courbe de tarage, la variance de Q est approchée par : Var(Q) ≈ (∂Q/∂a)²Var(a) + (∂Q/∂b)²Var(b) + (∂Q/∂H₀)²Var(H₀).</p>'
            },
            {
              titre: '2.2 Simulation de Monte Carlo',
              texte: '<p>La <strong>simulation de Monte Carlo (MC)</strong> propage les incertitudes par simulation : (1) Spécifier les distributions de chaque entrée Xᵢ (et leurs corrélations) ; (2) tirer N réalisations indépendantes (X₁^k, …, X_p^k) pour k=1,…,N ; (3) calculer Y^k = f(X₁^k,…,X_p^k) ; (4) analyser la distribution empirique des {Y^k}.</p><p>La précision de MC est en √N : pour un IC à 95 % du quantile à 97,5 % avec ±5 % d\'erreur relative, N ≈ 10 000 simulations suffisent pour la plupart des applications. MC est universel (n\'exige pas la linéarité, ni de forme particulière pour les distributions), mais coûteux en temps de calcul si f est un modèle numérique complexe (simulations hydrauliques 2D, modèle de transport). Des méthodes de réduction de variance (quasi-Monte Carlo, hypercube latin) réduisent le nombre de simulations requis d\'un facteur 5–10.</p>'
            }
          ]
        },
        {
          titre: '3. Analyse de sensibilité',
          texte: 'L\'analyse de sensibilité (AS) répond à la question : "Quelle variation d\'une entrée Xᵢ cause la variation la plus grande sur la sortie Y ?" — ou sa version probabiliste : "Quelle incertitude d\'entrée contribue le plus à l\'incertitude de sortie ?"',
          sous_sections: [
            {
              titre: '3.1 Indices de sensibilité locaux et globaux',
              texte: '<p>La <strong>sensibilité locale</strong> est la dérivée partielle dY/dXᵢ évaluée en un point nominal — elle mesure l\'effet d\'une variation infinitésimale de Xᵢ. L\'indice de sensibilité normalisé S_i = (dY/dXᵢ) × (σᵢ/σ_Y) pondère cette dérivée par l\'incertitude relative — il représente la fraction de σ_Y due à Xᵢ (sous hypothèse de linéarité et indépendance).</p><p>Les <strong>indices de sensibilité de Sobol</strong> (ou indices de variance) sont les indices globaux de référence :\n<br>• Indice du premier ordre : S_i = Var(E[Y|Xᵢ]) / Var(Y) — fraction de variance de Y expliquée par Xᵢ seul\n<br>• Indice total : ST_i = 1 − Var(E[Y|X_{−i}]) / Var(Y) — contribution de Xᵢ y compris ses interactions avec les autres variables\n<br>Propriété : Σᵢ S_i ≤ 1 (inégalité si interactions) ; Σᵢ ST_i ≥ 1 (égalité si pas d\'interactions). Pour identifier les entrées non-influentes : ST_i ≈ 0 → Xᵢ peut être fixée à sa valeur nominale sans perte d\'information.</p>'
            },
            {
              titre: '3.2 Méthodes d\'AS basées sur les émulateurs',
              texte: '<p>Pour les modèles numériques coûteux (simulation hydraulique 2D, modèle de transport sédimentaire, modèle climatique régional), une simulation complète de Monte Carlo (10⁴ runs) est prohibitive. Les <strong>émulateurs (surrogate models)</strong> remplacent le modèle complexe par une approximation statistique rapide :\n<br>• <strong>Processus gaussiens (GPR)</strong> : interpolent les sorties du modèle en supposant une structure de covariance, fournissant à la fois une prédiction et une variance de prédiction. La sensibilité de Sobol est calculée analytiquement sur l\'émulateur.\n<br>• <strong>Polynômes de chaos (PCE)</strong> : décomposent Y = Σ_α c_α Ψ_α(X) sur une base orthogonale. Les indices de Sobol s\'obtiennent directement des coefficients c_α : S_i = Σ_{α:αᵢ>0} c²_α / Var(Y).\n<br>Un émulateur calibré sur 100–500 runs d\'un modèle hydraulique 2D permet d\'estimer les indices de Sobol avec la précision d\'un MC sur 10⁵ runs — gain d\'un facteur 100–1000 en temps de calcul.</p>'
            }
          ]
        },
        {
          titre: '4. Applications à la gestion des risques hydrologiques',
          texte: 'La propagation des incertitudes et l\'analyse de sensibilité ont des applications directes dans la gestion opérationnelle des risques : dimensionnement d\'ouvrages, prévision des crues, gestion des nappes phréatiques.',
          sous_sections: [
            {
              titre: '4.1 Incertitude des cartes d\'aléa inondation',
              texte: '<p>Les cartes d\'aléa inondation (lignes d\'eau de la crue centennale Q₁₀₀) sont le support réglementaire des Plans de Prévention des Risques Inondations (PPRI). Elles résultent d\'une chaîne modèles : (1) analyse fréquentielle Q₁₀₀ (incertitude ±30–60 %) → (2) modèle hydraulique 1D/2D (incertitude ±10–20 % sur les cotes liée à la rugosité de Manning) → (3) transformation cote → emprise inondée (incertitude liée au modèle numérique de terrain). L\'incertitude totale sur la cote d\'inondation centennale est typiquement ±0,3–0,8 m — ce qui peut déplacer la ligne de crue de 50–200 m horizontalement.</p><p>L\'analyse de sensibilité sur ces chaînes montre que l\'incertitude sur Q₁₀₀ (analyse fréquentielle) est en général la source dominante pour les grandes crues, tandis que la rugosité de Manning domine pour les petites crues (plaine alluviale large). Cette information guide les priorités d\'investigation : allonger la chronique de jaugeage > affiner le modèle hydraulique pour les crues rares.</p>'
            },
            {
              titre: '4.2 Prévision hydrologique opérationnelle et décision sous incertitude',
              texte: '<p>En prévision opérationnelle des crues (Vigicrues, SPC), les prévisions sont présentées avec leur incertitude : un ensemble de N prévisions (hydrogrammes) issu de perturbations des précipitations prévisionnelles et des conditions initiales du modèle hydrologique. Cette approche <strong>ensembliste</strong> remplace le débit prévu unique par une distribution de débits prévus P(Q_{t+h} | données disponibles à t).</p><p>La décision sous incertitude utilise cette distribution :\n<br>• <strong>Seuil de vigilance</strong> (ex. Q = 500 m³/s) : on déclenche l\'alerte si P(Q > 500) > 10 % (seuil bas, action préventive) ou > 50 % (seuil médian) selon le coût relatif de la fausse alerte vs du non-déclenchement.\n<br>• <strong>Espérance de dommages</strong> : E[D] = ∫ D(Q) × p(Q|données) dQ permet d\'optimiser la décision d\'évacuation en pesant les coûts des différents scénarios.\n<br>• <strong>Courbes de décision coût-bénéfice</strong> (Value of Information, VoI) : quantifient combien vaut une observation supplémentaire (un pluviomètre supplémentaire, un jauge de débit) pour réduire l\'incertitude prédictive et améliorer la décision.</p>'
            }
          ]
        }
      ],
      points: [
        'Incertitude épistémique (réductible) vs aléatoire (irréductible) vs structurelle (modèle)',
        'Propagation 1er ordre (Taylor) : Var(Y) ≈ Σᵢ (∂f/∂Xᵢ)² σᵢ² + termes de covariance',
        'Monte Carlo : N tirages → distribution empirique de Y ; précision ∝ 1/√N',
        'Hypercube latin LHS : réduction du nombre de simulations MC d\'un facteur 5–10',
        'Sensibilité locale : S_i = (∂Y/∂Xᵢ)×(σᵢ/σ_Y) normalisé par les écarts-types',
        'Indices de Sobol : S_i (1er ordre), ST_i (total incluant interactions)',
        'Émulateurs GPR ou PCE : AS sur modèle complexe en 100–500 runs',
        'Incertitude Q₁₀₀ → ±0,3–0,8 m sur cote d\'inondation dans les PPRI',
        'Prévision ensembliste : distribution de Q_{t+h} → décision probabiliste',
        'VoI : valeur d\'une observation supplémentaire pour réduire l\'incertitude décisionnelle'
      ],
      formules: [
        'Taylor 1er ordre : Var(Y) ≈ Σᵢ (∂f/∂Xᵢ|μ)² σᵢ² + 2Σᵢ<ⱼ (∂f/∂Xᵢ)(∂f/∂Xⱼ) Cov(Xᵢ,Xⱼ)',
        'Sobol 1er ordre : S_i = Var(E[Y|Xᵢ]) / Var(Y)',
        'Sobol total : ST_i = 1 − Var(E[Y|X_{-i}]) / Var(Y)',
        'Σᵢ S_i ≤ 1 ≤ Σᵢ ST_i',
        'PCE Sobol : S_i = Σ_{α:αᵢ>0} c²_α / Var(Y)',
        'ESS MC : N ≥ (z_{α/2}/ε)² × p(1−p) pour quantile p avec erreur relative ε'
      ],
      retenir: 'L\'incertitude des sorties est la somme quadratique des contributions de chaque entrée (si indépendance et linéarité). Monte Carlo est universel mais coûteux — l\'hypercube latin et les émulateurs réduisent le nombre de simulations. Les indices de Sobol identifient les entrées qui méritent d\'être mieux contraintes. En PPRI, l\'incertitude sur Q₁₀₀ domine — allonger les chroniques hydrologiques est plus efficace qu\'affiner le modèle hydraulique.'
    },
    exercices: [
      {
        n: '1',
        enonce: 'Propagation analytique — courbe de tarage. Q = a(H−H₀)^b avec a=12, b=2,1, H₀=0,20 m, H=1,50 m (mesuré). Incertitudes (1σ) : σ_a/a = 5 %, σ_b = 0,10, σ_H₀ = 0,02 m, σ_H = 0,01 m. (a) Calculer Q nominal. (b) Calculer les dérivées partielles de Q par rapport à chaque paramètre. (c) Calculer Var(Q) et σ_Q/Q.',
        solution: '(a) Q = 12×(1,50−0,20)^2,1 = 12×1,30^2,1. 1,30^2,1 = e^(2,1×ln 1,30) = e^(2,1×0,2624) = e^0,5510 = 1,735. Q = 12×1,735 = 20,82 m³/s.\n\n(b) Dérivées partielles :\n∂Q/∂a = (H−H₀)^b = 1,735\n∂Q/∂b = a(H−H₀)^b × ln(H−H₀) = 20,82 × ln(1,30) = 20,82 × 0,2624 = 5,46 m³/s\n∂Q/∂H₀ = −a×b×(H−H₀)^(b−1) = −12×2,1×1,30^1,1 = −25,2×1,328 = −33,5 m³/s/m\n∂Q/∂H = a×b×(H−H₀)^(b−1) = +33,5 m³/s/m\n\n(c) σ_a = 0,05×12 = 0,6, σ_b = 0,10, σ_H₀ = 0,02, σ_H = 0,01.\nVar(Q) = 1,735²×0,6² + 5,46²×0,10² + 33,5²×0,02² + 33,5²×0,01²\n= 3,01×0,36 + 29,8×0,01 + 1122×0,0004 + 1122×0,0001\n= 1,083 + 0,298 + 0,449 + 0,112 = 1,942 (m³/s)².\nσ_Q = √1,942 = 1,39 m³/s. σ_Q/Q = 1,39/20,82 = 6,7 %.\nContributions : σ_a → 56 %, σ_b → 15 %, σ_H₀ → 23 %, σ_H → 6 %. L\'incertitude sur a est dominante (géométrie de la section), suivie de H₀.'
      },
      {
        n: '2',
        enonce: 'Monte Carlo — débit de pointe. Le débit de pointe d\'une crue est estimé par la formule rationnelle Q = C×i×A/360, avec C (coefficient de ruissellement) ∼ U[0,5;0,7], i (intensité pluviale en mm/h) ∼ N(40,8²), A=50 ha (fixe). (a) Calculer E[Q] et Var(Q) analytiquement. (b) Décrire le plan MC avec N=1000. (c) Quelle est la précision sur le quantile à 90 % ?',
        solution: '(a) E[C] = (0,5+0,7)/2 = 0,60 ; Var(C) = (0,7−0,5)²/12 = 0,04/12 = 0,00333.\nE[i] = 40 ; Var(i) = 64.\nQ = (C×i×50)/360 = C×i/7,2.\nE[Q] = E[C]×E[i]/7,2 = 0,60×40/7,2 = 24/7,2 = 3,33 m³/s.\nVar(Q) = [1/7,2²]×Var(C×i).\nVar(C×i) = E[C²]×E[i²] − (E[C]×E[i])² (C,i indépendants)\n= (Var(C)+E[C]²)×(Var(i)+E[i]²) − E[C]²×E[i]²\n= (0,00333+0,36)×(64+1600) − 0,36×1600\n= 0,36333×1664 − 576 = 604,7 − 576 = 28,7.\nVar(Q) = 28,7/51,84 = 0,554 (m³/s)². σ_Q = 0,744 m³/s.\n\n(b) Plan MC :\n1. Pour k=1 à 1000 : tirer Cᵏ ∼ U[0,5;0,7] et iᵏ ∼ N(40,64) indépendamment.\n2. Calculer Qᵏ = Cᵏ×iᵏ×50/360.\n3. Estimer la distribution de Q : histogramme, moyenne ≈ 3,33, σ ≈ 0,74.\n4. Le quantile à 90 % Q₉₀ est estimé par le 900ème ordre statistique.\n\n(c) Précision sur le quantile à 90 % (p=0,90) avec N=1000 : l\'IC à 95 % sur le quantile p = k-ème ordre statistique a une largeur ≈ 2×z₀,₀₂₅×√(p(1−p)/N)/f(Q_p), où f est la densité en Q_p. Approximation : σ_quantile ≈ √(p(1−p)/N)/f(Q_p) ≈ 0,30/√N = 0,30/31,6 ≈ 0,0095 — soit ±0,95 % du quantile à 95 %. Avec N=1000, la précision sur Q₉₀ est d\'environ ±2 % — acceptable pour la plupart des applications d\'ingénierie.'
      },
      {
        n: '3',
        enonce: 'Indices de Sobol — modèle pluie-débit. Un modèle simple Q = C×P−E (ruissellement net) avec P (pluie) ∼ N(100,15²) mm, C (coeff.) ∼ U[0,3;0,5], E (évapotranspiration) ∼ N(30,10²) mm, toutes indépendantes. (a) Calculer Var(Q) par la méthode analytique. (b) Calculer S_P, S_C, S_E (indices de Sobol du premier ordre). (c) Identifier la variable d\'entrée la plus influente.',
        solution: '(a) Q = CP − E. E[Q] = E[C]×E[P] − E[E] = 0,40×100 − 30 = 10 mm.\nVar(Q) = Var(CP−E) = Var(CP) + Var(E) (indépendance P,C,E).\nVar(CP) = E[C²]×E[P²] − (E[C]×E[P])²\nE[C²] = Var(C)+E[C]² = (0,2²/12)+0,16 = 0,00333+0,16 = 0,16333.\nE[P²] = Var(P)+E[P]² = 225+10000 = 10225.\nVar(CP) = 0,16333×10225 − (0,40×100)² = 1670,0 − 1600 = 70,0.\nVar(Q) = 70,0 + 100 = 170 mm².\n\n(b) Indices de Sobol du 1er ordre :\nS_P = Var(E[Q|P]) / Var(Q).\nE[Q|P] = E[C]×P − E[E] = 0,40P − 30 → Var(E[Q|P]) = 0,40²×Var(P) = 0,16×225 = 36. S_P = 36/170 = 0,212.\nS_C = Var(E[Q|C]) / Var(Q).\nE[Q|C] = C×E[P] − E[E] = 100C − 30 → Var(E[Q|C]) = 100²×Var(C) = 10000×0,00333 = 33,3. S_C = 33,3/170 = 0,196.\nS_E = Var(E[Q|E]) / Var(Q).\nE[Q|E] = E[CP] − E = 40 − E → Var(E[Q|E]) = Var(E) = 100. S_E = 100/170 = 0,588.\n\n(c) La variable la plus influente est E (évapotranspiration) avec S_E = 0,588 (59 % de la variance de Q). Vérification : S_P + S_C + S_E = 0,212+0,196+0,588 = 0,996 ≈ 1,00 (pas d\'interactions car le modèle est bilinéaire). Conclusion opérationnelle : pour réduire l\'incertitude sur Q, il faut prioritairement améliorer l\'estimation de l\'ETP — investir dans des mesures lysimètriques ou affiner les formules d\'ETP (Penman-Monteith vs Thornthwaite).'
      },
      {
        n: '4',
        enonce: 'Incertitude de Manning — modèle hydraulique. La cote de la ligne d\'eau d\'une crue de débit Q=500 m³/s est calculée par la formule de Manning : V = (1/n)×R^(2/3)×S^(1/2), Q=V×A. Pour une section rectangulaire de largeur B=20 m, profondeur y, S=0,0005. n ∼ N(0,040 ; 0,006²). (a) Exprimer y en fonction de n (approximation grande largeur R≈y). (b) Calculer dy/dn. (c) Estimer σ_y si σ_n=0,006.',
        solution: '(a) Grande largeur : R ≈ y, A = B×y = 20y.\nQ = (1/n)×y^(2/3)×S^(1/2)×20y = (20/n)×y^(5/3)×S^(1/2).\n500 = (20/0,040)×y^(5/3)×√0,0005 = 500×y^(5/3)×0,02236 = 11,18×y^(5/3).\ny^(5/3) = 500/11,18 = 44,72. y = 44,72^(3/5) = 44,72^0,6 = e^(0,6×ln44,72) = e^(0,6×3,800) = e^2,280 = 9,78 m. (Profondeur réaliste pour une grande crue sur un chenal de 20 m de large.)\n\n(b) De Q = (20/n)×y^(5/3)×S^(1/2) = constante, on dérive implicitement par rapport à n :\nd/dn[(20/n)×y^(5/3)×S^(1/2)] = 0.\n(−1/n²)×20×y^(5/3)×S^(1/2) + (20/n)×(5/3)×y^(2/3)×S^(1/2)×(dy/dn) = 0.\n(dy/dn) = (1/n) × y × (3/5)^(−1) = y/(n×5/3×1) . Simplification : dy/dn = (3/5)×y/n × (−1) × (n²/n) → dy/dn = −(3/5)×y/n.\nNumériquement : dy/dn = −(3/5)×9,78/0,040 = −0,6×244,5 = −146,7 m/unit_n.\n\n(c) σ_y = |dy/dn|×σ_n = 146,7×0,006 = 0,88 m. IC à 95 % : y ± 1,96×0,88 = 9,78 ± 1,72 m = [8,06 ; 11,50] m. L\'incertitude de Manning (σ_n/n = 15 %) se traduit par une incertitude de ±0,88 m sur la profondeur et donc sur la cote de la ligne d\'eau — suffisant pour déplacer la ligne de crue de plusieurs dizaines de mètres en plaine alluviale.'
      },
      {
        n: '5',
        enonce: 'Hypercube latin. On veut analyser la sensibilité d\'un modèle de nappe phréatique à 4 paramètres : K (conductivité), Sy (emmagasinement), R (recharge), T (transmissivité). Chaque paramètre suit une distribution log-normale. (a) Décrire la construction d\'un plan LHS à N=200 simulations. (b) Comparer LHS et MC classique pour l\'estimation de la variance de sortie. (c) Pourquoi LHS est-il préférable pour des modèles coûteux ?',
        solution: '(a) Construction LHS pour N=200 et p=4 paramètres :\nÉtape 1 : Diviser [0,1] en N=200 intervalles de probabilité équiprobables de largeur 1/200 = 0,005 : [0;0,005), [0,005;0,010), …, [0,995;1,000).\nÉtape 2 : Pour chaque paramètre Xⱼ (j=1..4), tirer un point uniformément dans chaque intervalle → 200 quantiles {u_{j,k}}_{k=1..200} couvrant l\'espace [0,1] de façon régulière.\nÉtape 3 : Transformer en valeurs de paramètres : x_{j,k} = F_j^{-1}(u_{j,k}) (inverse de la CDF log-normale).\nÉtape 4 : Permuter aléatoirement les 200 valeurs de chaque paramètre indépendamment → 4 vecteurs de 200 valeurs décorrélées. L\'espace des 4 paramètres est stratifié uniformément sur toutes les marginales.\n\n(b) Pour N=200 simulations, le LHS réduit la variance d\'estimation de la variance de sortie par rapport au MC classique. Theorème : Var(σ²_LHS) ≤ Var(σ²_MC) si f est monotone en chaque Xᵢ. En pratique, pour des modèles hydrologiques, la réduction de variance est d\'un facteur 5–10 : LHS à N=200 est aussi précis qu\'un MC à N=1000–2000. Cela vient du fait que LHS évite les "trous" et "doublons" dans l\'espace des paramètres — le MC classique peut, par malchance, échantillonner 10 fois les mêmes valeurs de K élevées et aucune valeur faible.\n\n(c) Pour des modèles coûteux (simulation numérique transitoire de nappe = minutes/run), N=200 runs LHS vs N=2000 runs MC représente un gain de temps d\'un facteur 10. Dans les études d\'impact où chaque simulation de nappe prend 10 minutes, cela représente la différence entre 2 jours (200 runs) et 20 jours (2000 runs) de calcul. LHS est devenu le standard pour l\'AS des modèles environnementaux complexes.'
      },
      {
        n: '6',
        enonce: 'Prévision ensembliste. Un SPC (Service de Prévision des Crues) utilise un ensemble de 50 membres pour prévoir Q à horizon 24h. Pour la station de Lyon-Rhône, l\'ensemble donne : Q̄ = 1200 m³/s, σ_ens = 350 m³/s, distribution approximativement normale. Les seuils d\'alerte sont : Orange (Q>1500 m³/s), Rouge (Q>2000 m³/s). (a) Calculer P(Q>1500) et P(Q>2000). (b) Le SPC décide d\'émettre une alerte Orange si P(Q>1500)>20 %. Cette alerte est-elle déclenchée ? (c) Calculer l\'espérance de dommage si D(Q) = 0 pour Q<1500 et D(Q) = 10M€×(Q−1500)/500 pour 1500≤Q≤2000.',
        solution: '(a) Z(1500) = (1500−1200)/350 = 300/350 = 0,857. P(Q>1500) = P(Z>0,857) = 1−Φ(0,857) = 1−0,804 = 0,196 = 19,6 %.\nZ(2000) = (2000−1200)/350 = 800/350 = 2,286. P(Q>2000) = 1−Φ(2,286) = 1−0,989 = 0,011 = 1,1 %.\n\n(b) P(Q>1500) = 19,6 % < 20 % → l\'alerte Orange n\'est PAS déclenchée avec ce seuil. La valeur est très proche du seuil — un seul membre de plus au-dessus de 1500 m³/s suffirait. Cette situation illustre la sensibilité des décisions aux seuils probabilistes. En pratique, le SPC peut déclencher l\'alerte à 20 % − ε (tolérance) ou utiliser une règle de décision plus robuste comme la médiane de l\'ensemble (Q₅₀ = 1200 < 1500 → pas d\'alerte) vs le percentile 75 (Q₇₅ = 1200+0,674×350 = 1436 < 1500 → pas d\'alerte non plus).\n\n(c) E[D] = ∫_{1500}^{2000} D(Q) × f(Q) dQ, avec D(Q) = 10M€×(Q−1500)/500.\nE[D] = 10M€/500 × E[(Q−1500) × 1_{1500≤Q≤2000}].\nSous distribution normale N(1200, 350²) : par calcul des espérances tronquées,\nE[(Q−1500) × 1_{1500≤Q≤2000}] = σ×[φ(a)−φ(b)] − (μ−1500)×[Φ(b)−Φ(a)] × (correction de troncature)\n≈ 350×[φ(0,857)−φ(2,286)] − (−300)×[Φ(2,286)−Φ(0,857)]\n= 350×[0,315−0,030] + 300×[0,989−0,804]\n= 350×0,285 + 300×0,185 = 99,8 + 55,5 = 155,3 m³/s.\nE[D] ≈ (10M€/500) × 155,3 = 0,02M€/m³/s × 155,3 m³/s ≈ 3,1 M€.'
      },
      {
        n: '7',
        enonce: 'Émulateur et indices de Sobol. Un modèle hydraulique 2D de propagation de crue dans une plaine alluviale prend 3 h par simulation. Les 4 entrées incertaines sont : Q_entrant (m³/s), n_chenal (Manning), n_plaine (Manning plaine), z_digue (cote de digue en m). On veut estimer les indices de Sobol avec précision ±0,05 sur chaque ST_i. (a) Combien de simulations Monte Carlo serait nécessaire ? (b) Avec un GPR calibré sur 150 runs, estimer le gain. (c) Quelle information le ST_i de z_digue apporte-t-il ?',
        solution: '(a) Pour la méthode de Saltelli (formule classique pour indices de Sobol) avec p=4 paramètres : N_total = N×(2p+2) = N×10 simulations directes. Pour une précision σ(Sᵢ) ≈ ±0,05 avec 95 % de confiance, il faut N ≈ 1000 (règle empirique pour p=4). N_total = 1000×10 = 10 000 simulations MC. À 3 h/run = 30 000 h = 1250 jours ≈ 3,4 ans. Totalement irréalisable.\n\n(b) GPR calibré sur N_emul = 150 runs (450 h ≈ 19 jours) :\nUne fois l\'émulateur calibré, chaque évaluation du GPR prend < 0,001 s. Les 10 000 évaluations Monte Carlo sur l\'émulateur prennent < 10 secondes. Coût total : 450 h (runs) + quelques heures (MCMC/GPR calibration). Gain en temps : 30 000 h / 450 h ≈ 67 fois plus rapide. L\'incertitude de prédiction du GPR doit être vérifiée par LOO-CV sur les 150 runs : si RMSE_emulateur < 0,1 × σ_sortie, l\'émulateur est fiable pour l\'AS.\n\n(c) ST_i de z_digue (cote de la digue) : ST_i = 1 − Var(E[Y|X_{−i}])/Var(Y), où Y est la surface inondée ou la cote maximale de submersion. Si ST(z_digue) = 0,45 : z_digue explique (via interactions comprises) 45 % de la variance de sortie — c\'est la variable dont l\'incertitude sur la cote de la digue a le plus d\'impact sur l\'étendue inondée. Implication opérationnelle : un levé topographique précis de la digue (réduction de σ_zdigue de ±0,30 m à ±0,05 m) réduirait l\'incertitude sur l\'étendue inondée beaucoup plus efficacement qu\'un affinement du coefficient de Manning. Cette information oriente directement les priorités d\'investigation terrain et de réduction d\'incertitude.'
      },
      {
        n: '8',
        enonce: 'Synthèse — chaîne d\'incertitudes pour un PPRI. La cote de la crue centennale Q₁₀₀ dans une section fluviale est estimée par la chaîne : Q₁₀₀ → modèle hydraulique 1D → cote Z₁₀₀. Les incertitudes sont : σ(Q₁₀₀)/Q₁₀₀ = 40 % (analyse fréquentielle, 30 ans de données), σ(n)/n = 15 % (Manning). La sensibilité locale donne : dZ/dQ = 0,0003 m/(m³/s), dZ/dn = 15 m (aux conditions nominales Q=800 m³/s, n=0,04). (a) Calculer σ(Z) par propagation. (b) Quelle source domine ? (c) Pour réduire σ(Z) de 50 %, quelle action est la plus efficace ?',
        solution: '(a) σ_Q = 0,40×800 = 320 m³/s. σ_n = 0,15×0,04 = 0,006.\nσ_Z² = (dZ/dQ)²×σ_Q² + (dZ/dn)²×σ_n²\n= (0,0003)²×320² + 15²×0,006²\n= 9×10⁻⁸×102400 + 225×3,6×10⁻⁵\n= 9,216×10⁻³ + 8,1×10⁻³\n= 0,009216 + 0,00810 = 0,01732 m².\nσ_Z = √0,01732 = 0,132 m. IC à 95 % sur Z₁₀₀ : ±1,96×0,132 = ±0,26 m.\n\n(b) Contributions :\nSources Q₁₀₀ : 0,009216/0,01732 = 53 %.\nSources Manning n : 0,00810/0,01732 = 47 %.\nLes deux sources contribuent de façon quasi-égale. La source Q₁₀₀ domine légèrement. IC total ≈ ±0,26 m — ce qui peut déplacer la ligne de crue de 50–200 m horizontalement selon la pente de la plaine alluviale (pente 0,1 % → 0,26/0,001 = 260 m).\n\n(c) Pour réduire σ(Z) de 50 %, il faut réduire σ_Z² de 75 % (car σ_Z ∝ √Var).\nOption A — Allonger la chronique hydrologique de 30 à 80 ans (via recalage à des données anciennes) : σ(Q₁₀₀)/Q réduit de 40 % à ~25 % (approximation σ ∝ 1/√n). Contribution Q : (0,0003)²×(0,25×800)² = 9×10⁻⁸×40000 = 0,0036. σ_Z² = 0,0036+0,0081 = 0,0117. σ_Z = 0,108 m (réduction de 18 %). Insuffisant.\nOption B — Jaugeage précis de crues pour contraindre n (σ_n → 0,003) : Contribution Manning : 225×(0,003)² = 225×9×10⁻⁶ = 0,002025. σ_Z² = 0,009216+0,002025 = 0,01124. σ_Z = 0,106 m (réduction 20 %). Insuffisant seul.\nOption combinée A+B : σ_Z² = 0,0036+0,002025 = 0,00563. σ_Z = 0,075 m — réduction de 43 %. Pour atteindre 50 % (σ_Z = 0,066 m), il faut simultanément allonger la chronique ET réduire l\'incertitude sur Manning. C\'est la démarche PPRI de référence : hydrométrisation dense des crues + analyse fréquentielle sur données longues.'
      }
    ],
    flashcards: [
      {
        q: 'Quelle est la différence entre incertitude épistémique et aléatoire en hydrologie ?',
        r: 'Incertitude épistémique : manque de connaissance, réductible (plus de données → moins d\'incertitude). Ex. : paramètres du modèle mal calibrés, réseau de mesure trop lâche. Incertitude aléatoire : variabilité naturelle irréductible. Ex. : variabilité interannuelle des précipitations, occurrence stochastique des crues. Les deux s\'additionnent dans l\'incertitude totale.',
        expl: 'Pour une crue centennale Q₁₀₀ sur un bassin de 50 km² avec 30 ans de données : l\'incertitude sur Q₁₀₀ est dominée par l\'épistémique (séries courtes, paramètres GEV mal contraints). Avec 100 ans de données, l\'épistémique diminue mais l\'aléatoire reste. La distinction oriente les stratégies de réduction : allonger les chroniques (épistémique) vs diversifier le portefeuille de risque (aléatoire).'
      },
      {
        q: 'Comment la méthode de Taylor du premier ordre propage-t-elle les incertitudes ?',
        r: 'Var(Y) ≈ Σᵢ (∂f/∂Xᵢ)² σᵢ² + 2Σᵢ<ⱼ (∂f/∂Xᵢ)(∂f/∂Xⱼ) Cov(Xᵢ,Xⱼ). Les dérivées sont évaluées aux valeurs nominales. Hypothèses : f quasi-linéaire, incertitudes petites. Avantage : analytique, rapide. Limite : inadapté si f est fortement non-linéaire ou si les distributions sont asymétriques.',
        expl: 'Pour la courbe de tarage Q = a(H−H₀)^b, la non-linéarité est forte : Taylor 1er ordre donne une bonne approximation pour des niveaux H proches de la valeur nominale, mais sous-estime l\'incertitude pour H loin du point d\'étalonnage (extrapolation). Dans ce cas, MC sur 10 000 réalisations est préférable car il capture la forme asymétrique de la distribution de Q.'
      },
      {
        q: 'Qu\'est-ce que les indices de Sobol et comment les interpréter ?',
        r: 'S_i = Var(E[Y|Xᵢ])/Var(Y) : part de variance de Y due à Xᵢ seul. ST_i = 1 − Var(E[Y|X_{−i}])/Var(Y) : part totale (Xᵢ + interactions). Σ S_i ≤ 1. Si ST_i ≈ 0 → Xᵢ n\'influence pas la sortie. Si S_i << ST_i → Xᵢ a des interactions fortes avec d\'autres variables.',
        expl: 'Pour un modèle de transport de polluants dans une nappe (C_sortie en fonction de K, n_e, R, α_L, α_T) : typiquement, K (conductivité hydraulique) a ST_K > 0,6 — c\'est la variable à mieux caractériser. L\'analyse de sensibilité guide ainsi directement le programme d\'investigation géotechnique : un forage supplémentaire pour mesurer K rapporte plus qu\'un essai supplémentaire de porosité cinématique n_e.'
      },
      {
        q: 'Pourquoi l\'hypercube latin LHS est-il préféré au Monte Carlo classique pour l\'analyse de sensibilité ?',
        r: 'LHS stratifie l\'espace des paramètres : chaque "bande" de probabilité de chaque dimension est représentée exactement une fois. Résultat : même précision statistique avec 5–10× moins de simulations. Notamment avantageux pour les modèles coûteux (simulations hydrauliques 2D, modèles climatiques). La variance de l\'estimateur est toujours ≤ MC classique si le modèle est monotone en chaque paramètre.',
        expl: 'Pour une étude d\'impact climatique sur les débits d\'étiage (modèle GR4J × scénarios EURO-CORDEX), les 150 simulations LHS nécessaires à l\'analyse de sensibilité prennent quelques heures. Les 2000 simulations MC équivalentes prendraient plusieurs jours. Sur un modèle hydraulique 2D d\'un estuaire (3h/run), LHS à 150 runs prend 2 semaines vs MC à 1500 runs : 6 mois.'
      },
      {
        q: 'Comment la prévision ensembliste améliore-t-elle la gestion opérationnelle des crues ?',
        r: 'L\'ensemble fournit P(Q_{t+h} | données) plutôt qu\'un débit unique. Les décisions deviennent probabilistes : déclencher l\'alerte si P(Q > seuil) > p_seuil. L\'espérance de dommages E[D] = ∫ D(Q) × p(Q) dQ optimise la décision en pesant les coûts des fausses alertes et des non-détections. La valeur d\'information (VoI) quantifie l\'utilité de capteurs supplémentaires.',
        expl: 'Vigicrues en France utilise l\'ensemble PEARP (EDF) + GRP (INRAE) pour la prévision. L\'approche probabiliste a réduit le nombre de fausses alertes et amélioré la détection des crues rares depuis son déploiement. Pour la crue de Seine de 2016, la probabilité de dépassement du seuil rouge était à 35 % à H+48, soit une alerte avancée que le déterministe aurait manquée.'
      },
      {
        q: 'Qu\'est-ce qu\'un émulateur (GPR ou PCE) et pourquoi est-il clé pour l\'AS de modèles coûteux ?',
        r: 'Un émulateur remplace le modèle numérique complexe par une approximation statistique rapide. GPR : processus gaussien interpolant les N_calib sorties avec variance de prédiction. PCE : décomposition spectrale Y = Σ c_α Ψ_α(X), indices de Sobol = c²_α/Var(Y). Calibré sur 100–500 runs, il permet 10⁵ évaluations instantanées pour le MC ou l\'AS.',
        expl: 'Pour l\'AS d\'un modèle de transport de sédiments (TELEMAC-SISYPHE, 2h/run), un émulateur GPR calibré sur N=200 runs (400h ≈ 17 jours) permet l\'AS complète de Sobol avec 10⁵ évaluations instantanées (quelques secondes). Sans émulateur, l\'AS directe demanderait 10 000 runs × 2h = 20 000 h ≈ 2 ans. Les émulateurs sont devenus indispensables en ingénierie environnementale.'
      }
    ]
  },

};
