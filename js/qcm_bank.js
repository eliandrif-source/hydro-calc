/* ══════════════════════════════════════════════════════════════════
   BANQUE DE QCM HYDROCALC — 36 QCM / 720 questions
   Issue de l'ancienne plateforme QCM autonome, migrée et unifiée
   dans le système QCM principal (js/qcm_prof.js).
   ══════════════════════════════════════════════════════════════════ */

var QCM_BANK = [
 {
  "id": "ue1-1",
  "theme": "UE1",
  "themeName": "Hydraulique générale",
  "ico": "💧",
  "color": "#0A7460",
  "colorl": "#E0F4F0",
  "title": "Manning-Strickler et coefficients",
  "desc": "Écoulement gravitaire · Coefficients K · Collecteurs EU/EP",
  "questions": [
   {
    "q": "Le coefficient de Strickler K pour un tuyau PVC neuf est :",
    "choices": [
     "60–70",
     "70–80",
     "90–100",
     "110–120"
    ],
    "correct": 2,
    "expl": "PVC/PEHD neuf : K = 90–100. Fonte ductile neuve : K = 130. Béton vieux : K = 60–70."
   },
   {
    "q": "La formule de Manning-Strickler est :",
    "choices": [
     "Q = K × A × Rh² × I",
     "Q = K × A × Rh^(2/3) × I^(1/2)",
     "Q = K × A × Rh^(1/2) × I^(2/3)",
     "Q = K / (A × Rh × I)"
    ],
    "correct": 1,
    "expl": "Q = K × A × Rh^(2/3) × I^(1/2). K = Strickler, A = section mouillée, Rh = rayon hydraulique, I = pente."
   },
   {
    "q": "Le rayon hydraulique Rh d'une conduite circulaire pleine est :",
    "choices": [
     "D",
     "D/2",
     "D/4",
     "D²/4"
    ],
    "correct": 2,
    "expl": "Rh = A/P = (πD²/4)/(πD) = D/4. Pour une section pleine circulaire de diamètre D."
   },
   {
    "q": "La vitesse minimale d'auto-curage dans un collecteur EU est :",
    "choices": [
     "0,3 m/s",
     "0,6 m/s",
     "1,0 m/s",
     "1,5 m/s"
    ],
    "correct": 1,
    "expl": "V ≥ 0,60 m/s pour éviter les dépôts dans les collecteurs EU. NF EN 752 · CCTG Fascicule 70."
   },
   {
    "q": "La pente minimale réglementaire pour un collecteur EU est :",
    "choices": [
     "1‰",
     "3‰",
     "5‰",
     "10‰"
    ],
    "correct": 1,
    "expl": "Pente min EU : 3‰ = 0,003 m/m. Pour EP : 5‰ minimum recommandé."
   },
   {
    "q": "Le coefficient de Strickler K pour une rivière naturelle est :",
    "choices": [
     "60–80",
     "25–45",
     "90–100",
     "100–130"
    ],
    "correct": 1,
    "expl": "Rivière naturelle : K = 25–45 selon la végétation et la section. Cours d'eau très sinueux : K = 20."
   },
   {
    "q": "Le régime fluvial (lent) correspond à :",
    "choices": [
     "Fr > 1",
     "Fr = 1",
     "Fr < 1",
     "Fr = 0"
    ],
    "correct": 2,
    "expl": "Fr = V/√(g×h). Fr < 1 : régime fluvial (tranquille). Fr > 1 : régime torrentiel. Fr = 1 : régime critique."
   },
   {
    "q": "Le débit de pointe EU est calculé par :",
    "choices": [
     "Qp = Qmoy / Cp",
     "Qp = Qmoy × Cp",
     "Qp = Qmoy + Cp",
     "Qp = Cp / Qmoy"
    ],
    "correct": 1,
    "expl": "Qp = Qmoy × Cp où Cp = 1,5 + 2,5/√Qmoy (Qmoy en L/s). Plus le débit est faible, plus Cp est élevé."
   },
   {
    "q": "Pour Qmoy = 4 L/s, le coefficient de pointe Cp est :",
    "choices": [
     "2,75",
     "3,25",
     "4,0",
     "1,75"
    ],
    "correct": 0,
    "expl": "Cp = 1,5 + 2,5/√4 = 1,5 + 2,5/2 = 1,5 + 1,25 = 2,75."
   },
   {
    "q": "Le nombre de Reynolds Re définit :",
    "choices": [
     "L'énergie totale de l'écoulement",
     "Le rapport forces inertielles / forces visqueuses",
     "La pente de la ligne piézométrique",
     "Le débit volumique"
    ],
    "correct": 1,
    "expl": "Re = V×D/ν. Re < 2000 : laminaire. 2000 < Re < 4000 : transitoire. Re > 4000 : turbulent."
   },
   {
    "q": "La viscosité cinématique de l'eau à 20°C est :",
    "choices": [
     "10⁻³ m²/s",
     "10⁻⁶ m²/s",
     "10⁻⁹ m²/s",
     "10⁻⁴ m²/s"
    ],
    "correct": 1,
    "expl": "ν eau à 20°C = 10⁻⁶ m²/s = 1 cSt. À 10°C : 1,3×10⁻⁶ m²/s. La viscosité diminue quand T augmente."
   },
   {
    "q": "L'équation de continuité en régime permanent est :",
    "choices": [
     "Q = A₁V₁ + A₂V₂",
     "Q = A₁V₁ = A₂V₂",
     "Q = A₁/V₁ = A₂/V₂",
     "Q = V₁×V₂"
    ],
    "correct": 1,
    "expl": "Conservation du débit : Q = A×V = constante. Si A diminue → V augmente (effet Venturi)."
   },
   {
    "q": "Dans la formule de Hazen-Williams Q = 0,2785×C×D^2,63×S^0,54, C représente :",
    "choices": [
     "La section mouillée",
     "Le coefficient de rugosité",
     "La pente",
     "Le débit critique"
    ],
    "correct": 1,
    "expl": "C est le coefficient de Hazen-Williams. PEHD : 140-150, Fonte neuve : 130, Fonte vieillie : 80-100."
   },
   {
    "q": "La profondeur critique hc pour une section rectangulaire de largeur b est :",
    "choices": [
     "(Q²/g)^(1/2)",
     "(Q²/(g×b²))^(1/3)",
     "Q/(g×b)",
     "(Q/b)^(2/3)/g"
    ],
    "correct": 1,
    "expl": "hc = (Q²/(g×b²))^(1/3). À la profondeur critique, Fr = 1 et l'énergie spécifique est minimale."
   },
   {
    "q": "Le taux de remplissage maximal recommandé pour un collecteur EU est :",
    "choices": [
     "50%",
     "70%",
     "90%",
     "100%"
    ],
    "correct": 1,
    "expl": "y/D ≤ 70% en régime permanent. Au-delà, les surpressions lors des crues risquent de créer des mises en charge."
   },
   {
    "q": "Pour une pente I = 5‰, cela équivaut à :",
    "choices": [
     "0,05 m/m",
     "0,005 m/m",
     "0,0005 m/m",
     "5 m/m"
    ],
    "correct": 1,
    "expl": "5‰ = 5/1000 = 0,005 m/m. Lecture : pour 1000 m de collecteur, la différence de niveau est de 5 m."
   },
   {
    "q": "Le coefficient K de Strickler pour du béton vieilli (20 ans) est :",
    "choices": [
     "90–100",
     "70–80",
     "60–70",
     "50–60"
    ],
    "correct": 2,
    "expl": "Béton vieilli : K = 60–70. Le vieillissement, les incrustations et les racines réduisent K par rapport au neuf (70–80)."
   },
   {
    "q": "La formule de Bernoulli exprime :",
    "choices": [
     "La conservation du débit",
     "La conservation de l'énergie",
     "La conservation de la masse volumique",
     "La conservation de la viscosité"
    ],
    "correct": 1,
    "expl": "P/(ρg) + V²/(2g) + z = constante. Somme des énergies : pression + cinétique + potentielle = constante."
   },
   {
    "q": "Dans un collecteur partiellement rempli à y/D = 0,8, le débit est environ :",
    "choices": [
     "80% du débit plein",
     "95% du débit plein",
     "105% du débit plein",
     "120% du débit plein"
    ],
    "correct": 2,
    "expl": "À y/D = 0,8, Q ≈ 105% du débit plein section. Le maximum de débit est atteint pour y/D ≈ 0,93."
   },
   {
    "q": "La section mouillée A d'une conduite circulaire partiellement remplie (angle θ) est :",
    "choices": [
     "A = D²/4×θ",
     "A = D²/8×(θ-sinθ)",
     "A = D²/8×sinθ",
     "A = D/4×θ"
    ],
    "correct": 1,
    "expl": "A = D²/8×(θ-sinθ) où θ = 2×arccos(1-2y/D) est l'angle en radians."
   }
  ]
 },
 {
  "id": "ue1-2",
  "theme": "UE1",
  "themeName": "Hydraulique générale",
  "ico": "⚙️",
  "color": "#0A7460",
  "colorl": "#E0F4F0",
  "title": "Pompes et coup de bélier",
  "desc": "HMT · NPSH · Puissance · Coup de bélier · Loi des affinités",
  "questions": [
   {
    "q": "La Hauteur Manométrique Totale (HMT) est :",
    "choices": [
     "Hg seulement",
     "Hg + hf + Hp",
     "hf seulement",
     "Hp seulement"
    ],
    "correct": 1,
    "expl": "HMT = Hg (hauteur géométrique) + hf (pertes de charge) + Hp (pression résiduelle). En mètres de colonne d'eau."
   },
   {
    "q": "La puissance hydraulique d'une pompe est :",
    "choices": [
     "P = ρ×g×HMT×Q/1000",
     "P = HMT×Q",
     "P = Q/HMT",
     "P = ρ×HMT"
    ],
    "correct": 0,
    "expl": "P_hyd = ρ×g×Q×HMT/3600 (kW) avec Q en m³/h. 1 m CE = 9,81 kPa = 0,0981 bar."
   },
   {
    "q": "Le phénomène de cavitation survient quand :",
    "choices": [
     "NPSHd > NPSHr",
     "NPSHd < NPSHr",
     "NPSHd = NPSHr",
     "NPSHd = 0"
    ],
    "correct": 1,
    "expl": "Cavitation si NPSHd < NPSHr. La pression locale descend sous la pression de vapeur saturante → bulles de vapeur."
   },
   {
    "q": "Selon la loi des affinités, si on réduit la vitesse de 20%, la puissance est réduite de :",
    "choices": [
     "20%",
     "40%",
     "49%",
     "80%"
    ],
    "correct": 2,
    "expl": "P ∝ N³. Si N₂/N₁ = 0,8 → P₂/P₁ = 0,8³ = 0,512. Économie = 1 - 0,512 = 48,8% ≈ 49%."
   },
   {
    "q": "Le coup de bélier est :",
    "choices": [
     "Une vibration de la pompe",
     "Une onde de pression lors d'une fermeture rapide de vanne",
     "Un colmatage de la canalisation",
     "Un défaut de ventilation"
    ],
    "correct": 1,
    "expl": "ΔP = ρ×a×ΔV. Célérité a = 1000-1400 m/s (acier), 300-500 m/s (PEHD). Tc = 2L/a."
   },
   {
    "q": "La célérité du coup de bélier dans une conduite PEHD est d'environ :",
    "choices": [
     "1400 m/s",
     "800 m/s",
     "400 m/s",
     "100 m/s"
    ],
    "correct": 2,
    "expl": "PEHD : a ≈ 300-500 m/s. Acier : 1000-1400 m/s. PVC : 400-600 m/s. Plus le matériau est souple, plus a est faible."
   },
   {
    "q": "Le NPSH disponible NPSHd est :",
    "choices": [
     "La pression atmosphérique / (ρg)",
     "Patm/(ρg) - Ha - hfa - Pv/(ρg)",
     "Ha + hfa + Pv/(ρg)",
     "HMT - Ha"
    ],
    "correct": 1,
    "expl": "NPSHd = Patm/(ρg) - Ha - hfa - Pv(T)/(ρg). Ha = hauteur d'aspiration. hfa = pertes aspiration. Pv = pression vapeur."
   },
   {
    "q": "Pour fonctionner sans cavitation, on doit avoir :",
    "choices": [
     "NPSHd = 0",
     "NPSHd > NPSHr + 0,5 m",
     "NPSHd < NPSHr",
     "NPSHd = NPSHr"
    ],
    "correct": 1,
    "expl": "Condition anti-cavitation : NPSHd > NPSHr + 0,5 m de marge de sécurité (NF EN ISO 9906)."
   },
   {
    "q": "Le point de fonctionnement d'une pompe est :",
    "choices": [
     "La puissance maximale",
     "L'intersection courbe pompe H=f(Q) et courbe réseau Hr=kQ²",
     "Le débit maximal",
     "Le rendement maximal"
    ],
    "correct": 1,
    "expl": "Le point de fonctionnement est l'intersection entre H=f(Q) (courbe pompe) et Hr=kQ² (courbe réseau)."
   },
   {
    "q": "La règle de fermeture lente pour éviter le coup de bélier impose :",
    "choices": [
     "tf > L/a",
     "tf > L/V",
     "tf > 2L/a",
     "tf = L/a"
    ],
    "correct": 2,
    "expl": "tf > Tc = 2L/a (temps aller-retour de l'onde). Fermeture progressive sur 3-5× Tc pour atténuer ΔP."
   },
   {
    "q": "En doublant la vitesse de rotation N d'une pompe, le débit Q :",
    "choices": [
     "Reste identique",
     "Double",
     "Quadruple",
     "Est divisé par 2"
    ],
    "correct": 1,
    "expl": "Loi des affinités : Q ∝ N. Si N double → Q double. Également : H ∝ N², P ∝ N³."
   },
   {
    "q": "Le rendement global d'une petite pompe centrifuge est généralement :",
    "choices": [
     "30-45%",
     "55-65%",
     "78-85%",
     "92-98%"
    ],
    "correct": 1,
    "expl": "Petites pompes (< 10 kW) : η = 55-65%. Grandes pompes (> 50 kW) : η = 78-85%. Inclut pompe + moteur."
   },
   {
    "q": "La pression de vapeur de l'eau à 20°C est :",
    "choices": [
     "0,024 bar",
     "0,24 bar",
     "2,4 bar",
     "24 bar"
    ],
    "correct": 0,
    "expl": "Pv(20°C) = 0,024 bar = 2,4 m CE = 2337 Pa. À 100°C : Pv = 1,013 bar (eau bout)."
   },
   {
    "q": "Un variateur de fréquence (VFD) permet principalement de :",
    "choices": [
     "Augmenter le NPSH disponible",
     "Adapter la vitesse au débit demandé pour économiser l'énergie",
     "Augmenter la HMT",
     "Réduire la cavitation"
    ],
    "correct": 1,
    "expl": "VFD : adapter N au besoin. P ∝ N³ → économies majeures à débit partiel. Obligatoire sur pompes > 18,5 kW (EU ErP)."
   },
   {
    "q": "La condition sur la pression atmosphérique standard est :",
    "choices": [
     "1,013 bar = 10,33 m CE",
     "1 bar = 10 m CE",
     "1,5 bar = 15 m CE",
     "0,5 bar = 5 m CE"
    ],
    "correct": 0,
    "expl": "Patm = 1,013 bar = 101 325 Pa = 10,33 m CE. Utilisé dans le calcul du NPSHd."
   },
   {
    "q": "Une pompe péristaltique est idéale pour :",
    "choices": [
     "Pomper de l'eau claire à grand débit",
     "Doser des réactifs chimiques corrosifs",
     "Pomper des eaux de rivière chargées",
     "Augmenter la pression d'un réseau AEP"
    ],
    "correct": 1,
    "expl": "Pompe péristaltique : dosage réactifs (chlore, NaOCl, soude...). Auto-amorçante, précision ±1%, pas de contact produit/mécanique."
   },
   {
    "q": "La pompe immergée (submersible) pour poste de relevage EU doit avoir :",
    "choices": [
     "Une roue fermée standard",
     "Une roue à passage libre (vortex ou semi-ouverte)",
     "Un corps en PVC",
     "Un débit minimal de 50 m³/h"
    ],
    "correct": 1,
    "expl": "Roue vortex ou semi-ouverte : passage des solides (chiffons, lingettes...). IP68 obligatoire. Rails de guidage."
   },
   {
    "q": "La célérité du coup de bélier dans l'acier est d'environ :",
    "choices": [
     "300-500 m/s",
     "800-1000 m/s",
     "1000-1400 m/s",
     "2000-3000 m/s"
    ],
    "correct": 2,
    "expl": "Acier : a = 1000-1400 m/s (vitesse du son dans l'acier). Plus le matériau est rigide, plus a est élevée."
   },
   {
    "q": "Le volume utile d'une bâche de relevage est calculé par :",
    "choices": [
     "V = Q_entrée × temps remplissage",
     "V = Q_pompe × (Q_pompe - Q_entrée) / (Q_pompe × N_max)",
     "V = Q_pompe / N_max",
     "V = Q_entrée / N_max"
    ],
    "correct": 1,
    "expl": "V = Q_entrée × (Q_pompe - Q_entrée) / (Q_pompe × N_max) × 3600. N_max = démarrages/h max (6 pour petite pompe)."
   },
   {
    "q": "La norme de référence pour les essais de pompes est :",
    "choices": [
     "NF EN 12050",
     "NF EN ISO 9906",
     "NF EN 805",
     "NF EN 13244"
    ],
    "correct": 1,
    "expl": "NF EN ISO 9906 : essais de performance des pompes roto-dynamiques. 3 niveaux d'acceptation (1A, 1B, 2B)."
   }
  ]
 },
 {
  "id": "ue1-3",
  "theme": "UE1",
  "themeName": "Hydraulique générale",
  "ico": "🌊",
  "color": "#0A7460",
  "colorl": "#E0F4F0",
  "title": "Hydraulique à surface libre",
  "desc": "Canaux · Rivières · Régimes · Ouvrages hydrauliques",
  "questions": [
   {
    "q": "Un ressaut hydraulique se produit quand :",
    "choices": [
     "Fr < 1 en amont",
     "Fr > 1 en amont passe à Fr < 1 en aval",
     "Fr = 1 partout",
     "Fr < 1 partout"
    ],
    "correct": 1,
    "expl": "Le ressaut hydraulique est la transition brusque du régime torrentiel (Fr>1) au régime fluvial (Fr<1). Dissipation d'énergie."
   },
   {
    "q": "La formule de Manning pour un canal rectangulaire donne Q. Si on double la largeur b :",
    "choices": [
     "Q double",
     "Q augmente de moins du double",
     "Q augmente de plus du double",
     "Q reste identique"
    ],
    "correct": 2,
    "expl": "Si b double → A double, P augmente (mais pas du double) → Rh augmente → Q augmente de plus du double."
   },
   {
    "q": "Un déversoir à seuil mince a un coefficient de débit Cd d'environ :",
    "choices": [
     "0,20",
     "0,42",
     "0,65",
     "0,90"
    ],
    "correct": 1,
    "expl": "Seuil mince : Cd ≈ 0,42 (Kindsvater & Carter 1957). Q = Cd × (2/3) × √(2g) × l × h^(3/2)."
   },
   {
    "q": "La vitesse de sédimentation d'un grain de sable de 200 µm selon Stokes est :",
    "choices": [
     "0,022 mm/s",
     "2,2 mm/s",
     "22 mm/s",
     "220 mm/s"
    ],
    "correct": 2,
    "expl": "Vs = (ρs-ρ)×g×d²/(18×µ). Sable 200µm, ρs=2650 kg/m³ → Vs ≈ 22 mm/s. Kaolin 1µm : Vs ≈ 0,001 mm/s."
   },
   {
    "q": "Le critère de Shields θc = 0,047 définit :",
    "choices": [
     "Le rendement des pompes",
     "Le seuil de mise en mouvement des sédiments",
     "La pente critique",
     "Le nombre de Froude critique"
    ],
    "correct": 1,
    "expl": "Shields (1936) : mise en mouvement si θ > 0,047. τ = ρ×g×Rh×I (contrainte de cisaillement). Utilisé pour les enrochements."
   },
   {
    "q": "Dans un canal trapézoïdal de fond b et talus m, la section mouillée A est :",
    "choices": [
     "A = b×y",
     "A = (b+m×y)×y",
     "A = b×y + m×y²",
     "A = b×y/2"
    ],
    "correct": 1,
    "expl": "A = (b + m×y) × y. P = b + 2×y×√(1+m²). Rh = A/P. La section trapézoïdale est la plus courante pour les canaux."
   },
   {
    "q": "La pente critique I_c d'un canal est celle pour laquelle :",
    "choices": [
     "Fr = 0",
     "Fr = 1",
     "Fr > 1",
     "Fr < 0,5"
    ],
    "correct": 1,
    "expl": "À la pente critique Ic, l'écoulement est critique (Fr = 1). I < Ic : régime fluvial. I > Ic : régime torrentiel."
   },
   {
    "q": "Le tirant d'eau normal y_n dans un canal est :",
    "choices": [
     "La profondeur maximale",
     "La profondeur pour laquelle l'écoulement est uniforme permanent",
     "La profondeur critique",
     "Le niveau de la berge"
    ],
    "correct": 1,
    "expl": "y_n est la profondeur pour un écoulement uniforme permanent (Manning). Q_donné = K×A(y_n)×Rh(y_n)^(2/3)×I^(1/2)."
   },
   {
    "q": "L'équation de Saint-Venant décrit :",
    "choices": [
     "L'écoulement souterrain",
     "Les ondes de crue en régime transitoire",
     "La qualité de l'eau en rivière",
     "La pompe centrifuge"
    ],
    "correct": 1,
    "expl": "Saint-Venant (1871) : équations 1D continuité + dynamique pour les ondes de crue. Base de HEC-RAS, MIKE FLOOD."
   },
   {
    "q": "Une prise d'eau latérale dans un canal extrait un débit q. En aval :",
    "choices": [
     "Le tirant d'eau augmente obligatoirement",
     "Le débit et le tirant d'eau peuvent augmenter ou diminuer",
     "Le débit diminue forcément",
     "La vitesse reste identique"
    ],
    "correct": 1,
    "expl": "Selon le régime (fluvial/torrentiel) et le débit prélevé, le tirant d'eau peut augmenter ou diminuer. Analyse par Manning."
   },
   {
    "q": "La formule de la chute d'eau (déversoir rectangulaire) est Q = :",
    "choices": [
     "Cd × b × √(2g) × h^(3/2)",
     "Cd × (2/3) × √(2g) × b × h^(3/2)",
     "Cd × b × g × h",
     "Cd × b × h²"
    ],
    "correct": 1,
    "expl": "Q = Cd × (2/3) × √(2g) × b × h^(3/2). Pour seuil mince : Cd ≈ 0,42. Pour seuil épais : Cd ≈ 0,60-0,65."
   },
   {
    "q": "Dans un cours d'eau, le numéro de classement L1 (continuité écologique) signifie :",
    "choices": [
     "Aucune règle spécifique",
     "Pas de nouvel obstacle autorisé",
     "Mise en conformité dans les 5 ans",
     "Passe à poissons optionnelle"
    ],
    "correct": 1,
    "expl": "Liste 1 : cours d'eau à protéger → aucun nouvel ouvrage faisant obstacle. Liste 2 : délai 5 ans pour se conformer."
   },
   {
    "q": "Le nombre de Froude Fr d'un écoulement rapide (torrentiel) est :",
    "choices": [
     "Fr < 1",
     "Fr = 1",
     "Fr > 1",
     "Fr = 0"
    ],
    "correct": 2,
    "expl": "Fr = V/√(g×h) > 1 : régime torrentiel (supercritique). La vitesse est supérieure à la célérité des ondes de gravité."
   },
   {
    "q": "Un seuil fixe dans une rivière crée une zone de :",
    "choices": [
     "Sédimentation en amont et érosion en aval",
     "Érosion en amont et sédimentation en aval",
     "Érosion des deux côtés",
     "Sédimentation des deux côtés"
    ],
    "correct": 0,
    "expl": "En amont du seuil : zone de dépôt (remous, vitesse réduite). En aval : zone d'érosion intense (chute et ressaut). Fragmentation de la continuité sédimentaire."
   },
   {
    "q": "La passe à poissons type Larinier est efficace pour une densité de dissipation :",
    "choices": [
     "> 500 W/m³",
     "> 300 W/m³",
     "≤ 150 W/m³",
     "≤ 50 W/m³"
    ],
    "correct": 2,
    "expl": "Densité d'énergie dissipée ≤ 150 W/m³ pour les salmonidés. P = ρ×g×Q×Δh. V_bassin = P / densité_max."
   },
   {
    "q": "Le test de perméabilité Lefranc est utilisé pour :",
    "choices": [
     "Mesurer la perméabilité des sols en place",
     "Tester la résistance des tuyaux",
     "Mesurer la vitesse en rivière",
     "Estimer le débit d'une source"
    ],
    "correct": 0,
    "expl": "Essai Lefranc (en forage) : K = f(Q, géométrie, charge). Complément au Porchet (surface) pour milieux saturés."
   },
   {
    "q": "L'équation de continuité en régime transitoire (1D) est :",
    "choices": [
     "∂A/∂t + ∂Q/∂x = 0",
     "∂Q/∂t = 0",
     "∂A/∂x = 0",
     "∂V/∂t + V∂V/∂x = 0"
    ],
    "correct": 0,
    "expl": "∂A/∂t + ∂Q/∂x = 0 (conservation de la masse). Complétée par l'équation dynamique pour Saint-Venant."
   },
   {
    "q": "La vitesse de l'écoulement dans un canal est mesurée par :",
    "choices": [
     "Un piézomètre",
     "Un courantomètre ou ADCP (Doppler)",
     "Un turbidimètre",
     "Un pH-mètre"
    ],
    "correct": 1,
    "expl": "ADCP (Acoustic Doppler Current Profiler) : mesure la vitesse par effet Doppler sur les particules. Standard pour les jaugeages en rivière."
   },
   {
    "q": "Le débit d'une source peut être mesuré par :",
    "choices": [
     "La méthode volumétrique (seau + chronomètre)",
     "Un débitmètre électromagnétique uniquement",
     "Un ADCP",
     "Un pH-mètre"
    ],
    "correct": 0,
    "expl": "Faibles débits : méthode volumétrique (Q = V/t). Débits moyens : seuil jaugeur triangulaire (Thomson) ou rectangulaire. Grands débits : ADCP."
   },
   {
    "q": "La transmissivité T d'un aquifère est :",
    "choices": [
     "T = K/b",
     "T = K × b",
     "T = K + b",
     "T = b/K"
    ],
    "correct": 1,
    "expl": "T = K × b (m²/s). K = conductivité hydraulique (m/s), b = épaisseur saturée (m). Nappe exploitable : T > 10⁻³ m²/s."
   }
  ]
 },
 {
  "id": "ue1-4",
  "theme": "UE1",
  "themeName": "Hydraulique générale",
  "ico": "📐",
  "color": "#0A7460",
  "colorl": "#E0F4F0",
  "title": "Pertes de charge et réseaux",
  "desc": "Darcy-Weisbach · Hazen-Williams · Réseaux maillés · Singularités",
  "questions": [
   {
    "q": "La perte de charge singulière dans un coude est calculée par :",
    "choices": [
     "hs = f×L/D×V²/(2g)",
     "hs = k×V²/(2g)",
     "hs = L×V",
     "hs = k×Q²"
    ],
    "correct": 1,
    "expl": "hs = k×V²/(2g). k dépend du type de singularité (coude, vanne, réduction...). k coude 90° : ≈ 0,5-1,5."
   },
   {
    "q": "La formule de Darcy-Weisbach est :",
    "choices": [
     "hf = f×L/D×V²/(2g)",
     "hf = L×V²/(2g)",
     "hf = f×D/L×V²",
     "hf = 10,67×Q^1,852/(C^1,852×D^4,877)"
    ],
    "correct": 0,
    "expl": "hf = f×L/D×V²/(2g). f = facteur de friction (Colebrook-White ou Moody). Applicable à tout fluide et régime."
   },
   {
    "q": "Dans un réseau maillé, les lois de Kirchhoff imposent :",
    "choices": [
     "Que tous les débits soient égaux",
     "La conservation du débit aux nœuds et la fermeture des pressions en boucle",
     "Que les vitesses soient identiques",
     "Que les pertes de charge soient nulles"
    ],
    "correct": 1,
    "expl": "Loi des nœuds : ΣQ = 0. Loi des mailles : ΣhF = 0. Méthode de Hardy-Cross pour résoudre les réseaux maillés."
   },
   {
    "q": "Le facteur de friction f de Colebrook dépend de :",
    "choices": [
     "Re et ε/D seulement",
     "Re, D et L",
     "Re seulement",
     "ε/D seulement"
    ],
    "correct": 0,
    "expl": "1/√f = -2×log(ε/(3,7D) + 2,51/(Re×√f)). f dépend du nombre de Reynolds Re et de la rugosité relative ε/D."
   },
   {
    "q": "Pour un réseau en séries, le débit total est :",
    "choices": [
     "La somme des débits de chaque tronçon",
     "Le même dans chaque tronçon",
     "La moyenne des débits",
     "Le produit des débits"
    ],
    "correct": 1,
    "expl": "Réseau en série : Q₁ = Q₂ = Q₃ = Q_total. Les pertes de charge s'additionnent : hf_total = Σhf_i."
   },
   {
    "q": "La rugosité absolue ε du PEHD est d'environ :",
    "choices": [
     "0,046 mm (comme l'acier)",
     "0,0015 mm",
     "0,25 mm",
     "2,5 mm"
    ],
    "correct": 1,
    "expl": "PEHD : ε ≈ 0,0015 mm (très lisse). Acier commercial : ε = 0,046 mm. Béton : ε = 0,3-3 mm. Fonte vieille : ε = 0,5-2 mm."
   },
   {
    "q": "Un réseau en parallèle a les propriétés suivantes :",
    "choices": [
     "Même débit dans chaque branche",
     "Même perte de charge dans chaque branche",
     "Même vitesse dans chaque branche",
     "Même longueur pour chaque branche"
    ],
    "correct": 1,
    "expl": "Réseau en parallèle : hf₁ = hf₂. Q_total = Q₁ + Q₂. Les pressions aux nœuds d'entrée et de sortie sont identiques."
   },
   {
    "q": "La méthode de Hardy-Cross est utilisée pour :",
    "choices": [
     "Dimensionner une pompe",
     "Résoudre des réseaux maillés par itérations successives",
     "Calculer les pertes singulières",
     "Mesurer la pression dans un réseau"
    ],
    "correct": 1,
    "expl": "Hardy-Cross (1936) : itérations ΔQ = -ΣhF / (n×ΣhF/Q) jusqu'à convergence. Base des logiciels EPANET, WaterGEMS."
   },
   {
    "q": "La pression de service recommandée dans un réseau AEP est :",
    "choices": [
     "0,5-1 bar",
     "2-6 bar",
     "8-12 bar",
     "15-20 bar"
    ],
    "correct": 1,
    "expl": "NF EN 805 : pression de service 2-6 bar (20-61 m CE). Pression max : 6 bar standard, 10 bar exceptionnel."
   },
   {
    "q": "Une vanne PRV (réductrice de pression) permet de :",
    "choices": [
     "Augmenter la pression en aval",
     "Maintenir une pression constante en aval quelle que soit la pression amont",
     "Mesurer le débit",
     "Filtrer l'eau"
    ],
    "correct": 1,
    "expl": "PRV (Pressure Reducing Valve) : pression aval constante réglable. Pression amont jusqu'à 16 bar → aval 1-10 bar."
   },
   {
    "q": "L'Indice Linéaire de Pertes (ILP) d'un réseau AEP est :",
    "choices": [
     "ILP = Volume mis en distribution × longueur réseau",
     "ILP = (Vp - Vc) / L réseau en m³/km/j",
     "ILP = Vc / Vp × 100",
     "ILP = Q_fuites / Q_total"
    ],
    "correct": 1,
    "expl": "ILP = (Volume produit - Volume consommé) / Longueur réseau. Objectif < 3 m³/km/j. Source : indicateurs IWA/OIEau."
   },
   {
    "q": "La sectorisation d'un réseau AEP consiste à :",
    "choices": [
     "Diviser le réseau en zones isolables pour mesurer et localiser les fuites",
     "Augmenter la pression dans toutes les zones",
     "Remplacer les branchements plomb",
     "Installer des PRV partout"
    ],
    "correct": 0,
    "expl": "Sectorisation : DMA (District Metered Areas). Mesure nocturne du débit entrant (MNF = fuites + consommation nocturne)."
   },
   {
    "q": "La corrélation entre pression et débit de fuites est :",
    "choices": [
     "Q_fuites ∝ P^0,5",
     "Q_fuites ∝ P",
     "Q_fuites ∝ P²",
     "Q_fuites est indépendant de P"
    ],
    "correct": 0,
    "expl": "Q_fuites ≈ k × P^N où N ≈ 0,5-1,5. Réduire la pression de 10% → réduction fuites 5-15%. Gestion de pression = 1er levier."
   },
   {
    "q": "Le Minimum Night Flow (MNF) d'un secteur est utilisé pour :",
    "choices": [
     "Dimensionner les pompes",
     "Estimer le débit de fuites (consommation nocturne négligeable)",
     "Calculer la HMT",
     "Mesurer la demande de pointe"
    ],
    "correct": 1,
    "expl": "MNF (2h-4h du matin) ≈ fuites + consommation légère. Q_fuites ≈ MNF - consommation_nocturne_estimée (IWA)."
   },
   {
    "q": "Un compteur électromagnétique mesure le débit par :",
    "choices": [
     "La mesure de la pression différentielle",
     "La loi de Faraday : tension = f(vitesse du fluide conducteur)",
     "L'effet Doppler sur les particules",
     "La mesure de la force centrifuge"
    ],
    "correct": 1,
    "expl": "Loi de Faraday : V = E/(k×B×D). Précision ±0,5%, aucune perte de charge, tuyau plein obligatoire, conductivité ≥ 5 µS/cm."
   },
   {
    "q": "La qualité requise (NTU) pour l'eau potable distribuée est :",
    "choices": [
     "< 10 NTU",
     "< 5 NTU",
     "< 1 NTU",
     "< 0,1 NTU"
    ],
    "correct": 2,
    "expl": "Turbidité EP en distribution < 1 NTU (arrêté 11/01/2007). Alerte Cryptosporidium si turbidité > 1 NTU à la sortie de station."
   },
   {
    "q": "Le rendement d'un réseau AEP est calculé par :",
    "choices": [
     "R = Vp/Vc",
     "R = Vc/Vp × 100%",
     "R = (Vp-Vc)/Vp",
     "R = Vp-Vc"
    ],
    "correct": 1,
    "expl": "Rendement = Volume consommé / Volume mis en distribution × 100. Objectif RPQS : ≥ 80% (sinon schéma directeur obligatoire)."
   },
   {
    "q": "Le dégazage dans une conduite AEP peut créer :",
    "choices": [
     "Une augmentation de pression",
     "Des poches d'air = rupture d'écoulement et coups de bélier",
     "Un meilleur rendement",
     "Une coloration de l'eau"
    ],
    "correct": 1,
    "expl": "Poches d'air = obstruction + instabilités. Solution : ventouses (extracteurs d'air) aux points hauts du réseau."
   },
   {
    "q": "Les pertes régulières (linéaires) dans une conduite varient comme :",
    "choices": [
     "hf ∝ V",
     "hf ∝ V²",
     "hf ∝ V^0,5",
     "hf ∝ V³"
    ],
    "correct": 1,
    "expl": "hf = f×L/D×V²/(2g). En turbulent pleinement développé : hf ∝ V² ≈ Q². En laminaire : hf ∝ V (Hagen-Poiseuille)."
   },
   {
    "q": "L'essai de pression (test d'étanchéité) d'une canalisation neuve se fait à :",
    "choices": [
     "P de service",
     "1,5 × P de service",
     "3 × P de service",
     "P atmosphérique"
    ],
    "correct": 1,
    "expl": "Test d'étanchéité : 1,5 × Pmax de service pendant 1h minimum. CCTG Fascicule 71. PVC PN16 : test à 24 bar."
   }
  ]
 },
 {
  "id": "ue1-5",
  "theme": "UE1",
  "themeName": "Hydraulique générale",
  "ico": "🔵",
  "color": "#0A7460",
  "colorl": "#E0F4F0",
  "title": "Dimensionnement des réseaux EU/EP",
  "desc": "Méthode rationnelle · Bassins · Réseau séparatif · Collecteurs",
  "questions": [
   {
    "q": "La méthode rationnelle donne le débit de pointe par :",
    "choices": [
     "Q = C × A × i",
     "Q = C × i × A / 360",
     "Q = A × i / C",
     "Q = C / (i × A)"
    ],
    "correct": 1,
    "expl": "Q (L/s) = C × i (mm/h) × A (ha) / 360. Valable pour S ≤ 2 km². C = coefficient de ruissellement, i = intensité IDF."
   },
   {
    "q": "Le coefficient de ruissellement C d'une toiture est d'environ :",
    "choices": [
     "0,20",
     "0,50",
     "0,90",
     "1,20"
    ],
    "correct": 2,
    "expl": "Toiture : C ≈ 0,90. Bitume : 0,85. Gravier : 0,40. Pelouse : 0,20. Forêt : 0,10. Toujours 0 ≤ C ≤ 1."
   },
   {
    "q": "Le temps de concentration Tc par la formule de Kirpich est :",
    "choices": [
     "Tc = L^0,77 / J^0,385",
     "Tc = 0,0663 × L^0,77 × J^(-0,385)",
     "Tc = L / V",
     "Tc = A^0,5 / J"
    ],
    "correct": 1,
    "expl": "Kirpich (1940) : Tc (h) = 0,0663 × L^0,77 × J^(-0,385). L en km, J = pente m/m. Pour BV < 2 km²."
   },
   {
    "q": "La méthode des pluies (Instruction Technique 1977) est utilisée pour :",
    "choices": [
     "Calculer l'ETR",
     "Dimensionner les bassins de rétention pluviaux",
     "Estimer la DBO₅",
     "Calculer le débit de pointe souterrain"
    ],
    "correct": 1,
    "expl": "IT 1977 : V = max[(Q_entrée(t) - Q_fuite) × t]. Durée optimale à tester entre 5 et 180 minutes."
   },
   {
    "q": "Le débit de fuite couramment admis en milieu urbain est :",
    "choices": [
     "0,1 L/s/ha",
     "2 L/s/ha",
     "10 L/s/ha",
     "50 L/s/ha"
    ],
    "correct": 1,
    "expl": "Débit de fuite courant : 2 L/s/ha. Peut être 1 L/s/ha en zone dense ou fixé par arrêté municipal."
   },
   {
    "q": "Un réseau séparatif comporte :",
    "choices": [
     "Une seule canalisation pour EU + EP",
     "Deux réseaux distincts : un pour EU, un pour EP",
     "Un réseau EU + fossé ouvert pour EP",
     "Trois réseaux : EU, EP toitures et EP voiries"
    ],
    "correct": 1,
    "expl": "Réseau séparatif : canalisation EU (vers STEU) + canalisation EP distincte (vers milieu ou bassin). Standard pour nouveaux quartiers."
   },
   {
    "q": "Un réseau unitaire reçoit :",
    "choices": [
     "Uniquement les EU",
     "Uniquement les EP",
     "Toutes les eaux (EU + EP mélangées)",
     "Uniquement les eaux industrielles"
    ],
    "correct": 2,
    "expl": "Réseau unitaire : EU + EP dans la même canalisation. Problème : déversements DO en temps de pluie (dilution × 5 min.)."
   },
   {
    "q": "Pour un bassin de rétention, le temps de vidange maximum est :",
    "choices": [
     "6 heures",
     "24 heures",
     "72 heures",
     "1 semaine"
    ],
    "correct": 1,
    "expl": "Vidange en 24h maximum (réglementaire). Évite la fermentation, protège le milieu récepteur et libère le volume pour la prochaine pluie."
   },
   {
    "q": "La technique des noues est une technique alternative de gestion EP qui :",
    "choices": [
     "Pompe les eaux pluviales vers le réseau",
     "Permet l'infiltration et le laminage par des fossés végétalisés",
     "Stocke les eaux pluviales dans des citernes",
     "Traite les eaux pluviales chimiquement"
    ],
    "correct": 1,
    "expl": "Noues : fossés végétalisés peu profonds. Infiltration, évapotranspiration et tampon hydraulique. ZAN → indispensable en milieu urbain."
   },
   {
    "q": "La loi Lema 2006 a rendu obligatoire :",
    "choices": [
     "Le tout-à-l'égout pour toutes les communes",
     "La gestion séparée des EU et EP pour toutes constructions neuves",
     "Le branchement à un réseau EU pour les zones < 200 EH",
     "La réutilisation des eaux pluviales"
    ],
    "correct": 1,
    "expl": "LEMA 2006 : séparation EU/EP obligatoire pour nouvelles constructions. Les communes doivent définir leur zonage d'assainissement."
   },
   {
    "q": "La courbe IDF donne l'intensité pluviale i en fonction de :",
    "choices": [
     "La surface du bassin et du débit",
     "La durée et la période de retour",
     "La pente et le type de sol",
     "La température et l'altitude"
    ],
    "correct": 1,
    "expl": "IDF : Intensité-Durée-Fréquence. i = a/(Tc+b)^n selon région et période de retour. Météo-France publie les IDF par station."
   },
   {
    "q": "Le volume d'un bassin de rétention avec Q_fuite = 5 L/s, Q_entrée_max = 25 L/s et durée optimale de 30 min est :",
    "choices": [
     "12 m³",
     "36 m³",
     "600 m³",
     "1800 m³"
    ],
    "correct": 1,
    "expl": "V = (Q_entrée - Q_fuite) × t × 60 = (25 - 5) × 30 × 60 / 1000 = 36 m³. En litres : 36 000 L."
   },
   {
    "q": "Un puits d'infiltration est adapté si la perméabilité K du sol est :",
    "choices": [
     "K < 1 mm/h",
     "K > 10 mm/h",
     "K entre 1 et 5 mm/h",
     "K quelconque"
    ],
    "correct": 1,
    "expl": "Puits d'infiltration : K > 10 mm/h. Pour K entre 1 et 10 : tranchées drainantes. K < 1 : drainage et rejet réseau."
   },
   {
    "q": "La directive ERU (91/271/CEE) concerne :",
    "choices": [
     "Les eaux potables",
     "La collecte et le traitement des eaux urbaines résiduaires",
     "Les pesticides dans les eaux souterraines",
     "La REUT"
    ],
    "correct": 1,
    "expl": "Directive ERU : eaux urbaines résiduaires. Impose des niveaux de traitement selon taille agglomération et sensibilité du milieu."
   },
   {
    "q": "La somme des débits entrant et sortant d'un nœud d'un réseau maillé est :",
    "choices": [
     "Positive",
     "Négative",
     "Nulle",
     "Égale au débit de la pompe"
    ],
    "correct": 2,
    "expl": "Loi des nœuds (Kirchhoff) : ΣQ_entrant = ΣQ_sortant → ΣQ = 0. Conservation du volume en régime permanent."
   },
   {
    "q": "L'autosurveillance des déversoirs d'orage (DO) est obligatoire si :",
    "choices": [
     "Le réseau a plus de 100 branchements",
     "Le débit transité dépasse 120 m³/h",
     "Le DO est situé en zone sensible",
     "Le réseau a plus de 50 ans"
    ],
    "correct": 1,
    "expl": "Arrêté 21/07/2015 : autosurveillance DO si débit > 120 m³/h. Mesure du débit et durée de déversement. Rapport annuel DREAL."
   },
   {
    "q": "Un système de sécurité sur un réseau EP peut être :",
    "choices": [
     "Un compteur d'eau",
     "Un déversoir de sécurité (by-pass)",
     "Un chlorateur",
     "Un filtre à sable"
    ],
    "correct": 1,
    "expl": "By-pass ou déversoir de sécurité : en cas de débordement du bassin de rétention, redirection vers le réseau ou le milieu. Protection du bâti."
   },
   {
    "q": "Le coefficient d'imperméabilisation d'un bassin versant urbain dense est d'environ :",
    "choices": [
     "10-20%",
     "30-40%",
     "60-80%",
     "95-100%"
    ],
    "correct": 2,
    "expl": "Centre-ville dense : coefficient d'imperméabilisation 60-80%. Zones pavillonnaires : 30-50%. Forêt : < 10%."
   },
   {
    "q": "La fréquence de contrôle d'une canalisation EP par inspection télévisée (ITV) est recommandée tous les :",
    "choices": [
     "1-2 ans",
     "5-10 ans",
     "15-20 ans",
     "30 ans"
    ],
    "correct": 1,
    "expl": "ITV recommandée tous les 5-10 ans selon l'âge, le matériau et l'historique des incidents. Priorité aux conduites > 30 ans."
   },
   {
    "q": "La technique du stockage enterré pour gestion EP inclut :",
    "choices": [
     "Puits artésiens",
     "Structures alvéolaires ultra-légères (SAUL) ou cuves béton",
     "Bassins ouverts uniquement",
     "Fossés bétonnés"
    ],
    "correct": 1,
    "expl": "SAUL (poly) ou cuves béton : stockage souterrain. Volume ≥ 30 m³. Vidange gravitaire vers réseau ou pompage. Entretien annuel."
   }
  ]
 },
 {
  "id": "ue2-1",
  "theme": "UE2",
  "themeName": "Assainissement collectif",
  "ico": "🧪",
  "color": "#1248A0",
  "colorl": "#E6EEF8",
  "title": "Paramètres physico-chimiques",
  "desc": "pH · O₂ · Conductivité · Turbidité · Température",
  "questions": [
   {
    "q": "La définition du pH est :",
    "choices": [
     "pH = [H⁺]",
     "pH = log₁₀[H⁺]",
     "pH = -log₁₀[H⁺]",
     "pH = [OH⁻]/[H⁺]"
    ],
    "correct": 2,
    "expl": "pH = -log₁₀[H⁺]. Eau pure à 25°C : [H⁺] = 10⁻⁷ mol/L → pH = 7 (neutre). pH < 7 : acide. pH > 7 : basique."
   },
   {
    "q": "La teneur en O₂ dissous à saturation à 20°C est d'environ :",
    "choices": [
     "4,5 mg/L",
     "9,1 mg/L",
     "14,6 mg/L",
     "20,2 mg/L"
    ],
    "correct": 1,
    "expl": "O₂ dissous à saturation : 14,6 mg/L à 0°C, 9,1 mg/L à 20°C, 7,7 mg/L à 30°C. Plus T augmente, moins il y a d'O₂."
   },
   {
    "q": "L'anoxie d'un milieu aquatique correspond à :",
    "choices": [
     "O₂ > 8 mg/L",
     "O₂ entre 4 et 8 mg/L",
     "O₂ < 2 mg/L",
     "O₂ = 0 mg/L"
    ],
    "correct": 2,
    "expl": "Anoxie : O₂ < 2 mg/L. Stress pour les poissons. Seuil critique saumon : 7 mg/L. Asphyxie : O₂ < 1 mg/L."
   },
   {
    "q": "La conductivité d'une eau minérale est généralement :",
    "choices": [
     "5-40 µS/cm (comme l'eau de pluie)",
     "50-1000 µS/cm",
     "5000-10000 µS/cm",
     "50 000 µS/cm (comme l'eau de mer)"
    ],
    "correct": 1,
    "expl": "Eau minérale : 100-800 µS/cm. Eau de pluie : 5-40 µS/cm. Eau de mer : 50 000 µS/cm. Eau ultra-pure : < 0,1 µS/cm."
   },
   {
    "q": "La turbidité d'une eau est mesurée en :",
    "choices": [
     "mg/L",
     "NTU (Nephelometric Turbidity Unit)",
     "µS/cm",
     "UFC/100 mL"
    ],
    "correct": 1,
    "expl": "Turbidité en NTU (méthode néphélométrique, mesure à 90°). EP : < 1 NTU distribution, < 2 NTU sortie station."
   },
   {
    "q": "Le TAC (Titre Alcalimétrique Complet) mesure :",
    "choices": [
     "La dureté totale",
     "L'alcalinité HCO₃⁻ + CO₃²⁻",
     "L'acidité de l'eau",
     "La teneur en sulfates"
    ],
    "correct": 1,
    "expl": "TAC = [HCO₃⁻] + 2[CO₃²⁻]. TAC (°f) = [HCO₃⁻](mg/L) / 12,2. Rôle tampon pour le pH."
   },
   {
    "q": "L'indice de Langelier IL = +0,8 signifie que l'eau est :",
    "choices": [
     "Légèrement agressive",
     "Fortement agressive",
     "Légèrement entartrante",
     "En équilibre parfait"
    ],
    "correct": 2,
    "expl": "IL = pH - pHs. IL > 0 : entartrante (dépôts CaCO₃). IL > +0,5 : fortement entartrante. Cible réseau : IL ∈ [-0,5 ; +0,5]."
   },
   {
    "q": "La dureté totale TH est exprimée en °f, où 1°f correspond à :",
    "choices": [
     "10 mg/L CaCO₃",
     "1 mg/L CaCO₃",
     "100 mg/L CaCO₃",
     "1 mmol/L Ca²⁺"
    ],
    "correct": 0,
    "expl": "1°f = 10 mg/L CaCO₃ = 0,56 mmol/L = 4 mg/L Ca²⁺ ≈ 2,4 mg/L Mg²⁺. Eau dure : TH > 30°f."
   },
   {
    "q": "Une eau avec TH = 8°f est classée comme :",
    "choices": [
     "Eau très dure",
     "Eau dure",
     "Eau douce",
     "Eau ultra-douce"
    ],
    "correct": 2,
    "expl": "TH < 15°f : eau douce. 15-30°f : eau moyennement dure. 30-40°f : eau dure. > 40°f : eau très dure."
   },
   {
    "q": "Le pH réglementaire de l'eau potable distribuée est :",
    "choices": [
     "5,0-7,0",
     "6,5-9,0",
     "7,0-8,5",
     "8,0-10,0"
    ],
    "correct": 1,
    "expl": "Arrêté 11/01/2007 : pH EP 6,5-9,0. En pratique, 7,2-7,8 pour optimiser la désinfection et limiter la corrosion."
   },
   {
    "q": "La méthode Winkler mesure :",
    "choices": [
     "Le pH",
     "La DBO₅",
     "L'oxygène dissous",
     "La conductivité"
    ],
    "correct": 2,
    "expl": "Winkler : méthode chimique de référence pour O₂ dissous. Oxydation MnO₂ en milieu alcalin, titrage thiosulfate. Précision ±0,05 mg/L."
   },
   {
    "q": "Le potentiel rédox (Eh) d'une eau anoxique est :",
    "choices": [
     "Élevé et positif",
     "Faible ou négatif",
     "Neutre (0 mV)",
     "Toujours +400 mV"
    ],
    "correct": 1,
    "expl": "Eau anoxique, réductrice : Eh < 0 mV. Eau aérée, oxydante : Eh > +200 mV. Le rédox contrôle la spéciation du fer, manganèse, arsenic."
   },
   {
    "q": "La pression de vapeur de l'eau augmente quand :",
    "choices": [
     "La pression atmosphérique augmente",
     "La température augmente",
     "La salinité augmente",
     "La profondeur augmente"
    ],
    "correct": 1,
    "expl": "Pv augmente avec T. Pv(20°C) = 23,4 hPa = 0,024 bar. Pv(60°C) = 199 hPa. Pv(100°C) = 1013 hPa (eau bout)."
   },
   {
    "q": "L'eutrophisation d'un lac est liée principalement à :",
    "choices": [
     "La présence de métaux lourds",
     "L'excès de nutriments (N et P)",
     "La température trop basse",
     "L'absence de lumière"
    ],
    "correct": 1,
    "expl": "Eutrophisation : enrichissement en N et P → prolifération algale → anoxie. Facteur limitant en eau douce : phosphore (P). En eau marine : azote (N)."
   },
   {
    "q": "La DBO₅ d'une eau de rivière non polluée est généralement :",
    "choices": [
     "< 3 mg/L",
     "5-10 mg/L",
     "10-50 mg/L",
     "> 100 mg/L"
    ],
    "correct": 0,
    "expl": "Rivière propre : DBO₅ < 3 mg/L. Très bonne qualité DCE : < 3. Bonne qualité : 3-5. Médiocre : 5-10. Mauvaise : > 10."
   },
   {
    "q": "La couleur d'une eau est mesurée en :",
    "choices": [
     "NTU",
     "mg Pt/L (unités Platine-Cobalt)",
     "µS/cm",
     "mg/L CaCO₃"
    ],
    "correct": 1,
    "expl": "Couleur vraie : mg Pt/L (unité Platine-Cobalt, Hazen). EP : ≤ 15 mg Pt/L (acceptable) / ≤ 10 mg Pt/L (guide). Tourbières : > 100 mg Pt/L."
   },
   {
    "q": "La saturation en O₂ d'une eau à 10°C et 1013 hPa est d'environ :",
    "choices": [
     "7,7 mg/L",
     "11,3 mg/L",
     "14,6 mg/L",
     "9,1 mg/L"
    ],
    "correct": 1,
    "expl": "O₂ dissous à saturation : 14,6 mg/L à 0°C, 11,3 mg/L à 10°C, 9,1 mg/L à 20°C, 7,7 mg/L à 30°C."
   },
   {
    "q": "La relation DBO₅ / DCO pour des eaux usées domestiques brutes est environ :",
    "choices": [
     "DBO₅ > DCO",
     "DBO₅/DCO = 1",
     "DBO₅/DCO ≈ 0,5-0,7",
     "DBO₅/DCO < 0,1"
    ],
    "correct": 2,
    "expl": "Ratio DBO₅/DCO = 0,5-0,7 pour EU domestiques. Si ratio < 0,3 → MO peu biodégradable. Si > 0,7 → très biodégradable."
   },
   {
    "q": "Le COT (Carbone Organique Total) est mesuré par :",
    "choices": [
     "Titrométrie",
     "Oxydation catalytique UV à haute température + détecteur IR",
     "Spectrophotométrie visible",
     "Potentiométrie"
    ],
    "correct": 1,
    "expl": "COT : combustion catalytique à 680°C ou 950°C → CO₂ mesuré par NDIR (infra-rouge non dispersif). Standard NF EN 1484."
   },
   {
    "q": "Le fer en excès dans l'eau potable provoque :",
    "choices": [
     "Aucun effet visible",
     "Coloration rougeâtre et goût métallique",
     "Toxicité aiguë",
     "Une augmentation du pH"
    ],
    "correct": 1,
    "expl": "Fe > 0,2 mg/L (limite EP) : dépôts rouilles, coloration du linge, goût. Causes : dissolution tuyaux ferreux ou eaux souterraines réductrices."
   }
  ]
 },
 {
  "id": "ue2-2",
  "theme": "UE2",
  "themeName": "Assainissement collectif",
  "ico": "⚗️",
  "color": "#1248A0",
  "colorl": "#E6EEF8",
  "title": "Pollution et normes de rejet",
  "desc": "DBO₅ · DCO · MES · NTK · Phosphore · Valeurs limites",
  "questions": [
   {
    "q": "La charge DBO₅ d'un Équivalent-Habitant (EH) est :",
    "choices": [
     "30 g/j",
     "60 g/j",
     "90 g/j",
     "120 g/j"
    ],
    "correct": 1,
    "expl": "1 EH = 60 g DBO₅/j = 135 g DCO/j = 90 g MES/j = 15 g NTK/j = 4 g Pt/j = 150 L/j. Directive ERU 91/271."
   },
   {
    "q": "La limite de rejet DBO₅ pour une STEU standard (< 10 000 EH) est :",
    "choices": [
     "< 5 mg/L",
     "< 25 mg/L",
     "< 50 mg/L",
     "< 100 mg/L"
    ],
    "correct": 1,
    "expl": "Arrêté 22/06/2007 : DBO₅ < 25 mg/L OU rendement > 70%. DCO < 125 mg/L. MES < 35 mg/L."
   },
   {
    "q": "La nitrification est le processus de transformation de :",
    "choices": [
     "NO₃⁻ → N₂",
     "NH₄⁺ → NO₂⁻ → NO₃⁻",
     "NO₃⁻ → NH₄⁺",
     "N₂ → NH₄⁺"
    ],
    "correct": 1,
    "expl": "Nitrification : NH₄⁺ → NO₂⁻ (Nitrosomonas) → NO₃⁻ (Nitrobacter). Aérobie. Besoins O₂ = 4,57 g/g NH₄-N."
   },
   {
    "q": "La dénitrification transforme :",
    "choices": [
     "NH₄⁺ → NO₃⁻",
     "NO₃⁻ → N₂ (gaz)",
     "N₂ → NH₄⁺",
     "NO₃⁻ → NH₄⁺"
    ],
    "correct": 1,
    "expl": "Dénitrification : NO₃⁻ → NO₂⁻ → NO → N₂O → N₂. Anoxique (sans O₂). Besoins carbone : 5-8 g DBO₅ / g NO₃-N."
   },
   {
    "q": "Les phosphates dans les eaux usées proviennent principalement de :",
    "choices": [
     "La respiration humaine",
     "Les lessives et les engrais (voie fécale)",
     "Les toitures",
     "La dégradation de l'azote"
    ],
    "correct": 1,
    "expl": "Phosphore EU domestiques : 4 g Pt/EH/j. Sources : fèces (40%), urines (20%), lessives et cuisine (40%). Seuil eutrophisation : Pt > 0,02 mg/L."
   },
   {
    "q": "Le NTK (Azote Total Kjeldahl) est la somme de :",
    "choices": [
     "NO₃⁻ + NO₂⁻",
     "NH₄⁺ + N organique",
     "NH₄⁺ + NO₃⁻",
     "N total = NTK + NO₃⁻ + NO₂⁻"
    ],
    "correct": 1,
    "expl": "NTK = NH₄⁺ + N organique. N total = NTK + NO₃⁻ + NO₂⁻. EU domestiques brutes : 30-60 mg NTK/L."
   },
   {
    "q": "La limite de rejet en nitrates pour une STEU en zone sensible (> 10 000 EH) est :",
    "choices": [
     "< 2 mg/L NO₃-N",
     "< 10 mg/L NTK",
     "< 50 mg/L NO₃⁻",
     "Aucune limite spécifique"
    ],
    "correct": 1,
    "expl": "Zone sensible > 10 000 EH : NTK < 10 mg/L (été) ou < 15 mg/L. Pt < 2 mg/L (ou < 1 mg/L si > 100 000 EH)."
   },
   {
    "q": "L'indice DCO/DBO₅ d'effluents industriels récalcitrants est :",
    "choices": [
     "0,5-0,7",
     "1-2",
     "> 3",
     "< 0,3"
    ],
    "correct": 2,
    "expl": "Effluents industriels récalcitrants : DCO/DBO₅ > 3 → difficilement biodégradables. Nécessite traitement physico-chimique ou ozone."
   },
   {
    "q": "La teneur en métaux lourds dans les boues de STEU est limitée pour :",
    "choices": [
     "La protection des opérateurs",
     "L'épandage agricole (réglementation boues)",
     "Le rejet en rivière",
     "Le transport des boues"
    ],
    "correct": 1,
    "expl": "Règlement boues : teneurs limites Cd, Cr, Cu, Hg, Ni, Pb, Zn pour épandage agricole (Décret 97-1133). Analyse annuelle obligatoire."
   },
   {
    "q": "La siccité des boues déshydratées (filtre-presse) est de l'ordre de :",
    "choices": [
     "1-5% MS",
     "10-20% MS",
     "25-35% MS",
     "50-60% MS"
    ],
    "correct": 2,
    "expl": "Filtre-presse : 25-35% MS. Centrifugeuse : 18-25% MS. Filtre à bande : 18-22% MS. Lit de séchage : 25-40% MS."
   },
   {
    "q": "L'auto-épuration d'une rivière après un rejet polluant est caractérisée par :",
    "choices": [
     "Une augmentation permanente de la DBO₅",
     "Une courbe en cloche de la DBO₅ puis retour à l'état initial",
     "Une diminution permanente du débit",
     "Une augmentation du pH"
    ],
    "correct": 1,
    "expl": "Courbe de Streeter-Phelps : DBO₅ augmente après le rejet, l'O₂ chute (déficit), puis remonte grâce à la réaération. Retour à l'état initial en aval."
   },
   {
    "q": "Les PFAS (per- et polyfluoroalkyl) sont des polluants qualifiés d'éternels car :",
    "choices": [
     "Ils se dégradent lentement en centaines d'années",
     "Leurs liaisons C-F sont quasi indestructibles (énergie 460 kJ/mol)",
     "Ils sont radioactifs",
     "Ils s'accumulent uniquement dans les sédiments"
    ],
    "correct": 1,
    "expl": "Liaison C-F : 460 kJ/mol (la plus forte en chimie organique). PFAS non dégradables naturellement. > 4600 molécules. Limite EP : 0,1 µg/L totaux."
   },
   {
    "q": "La limite de concentration en nitrates pour l'eau potable est :",
    "choices": [
     "10 mg/L",
     "25 mg/L",
     "50 mg/L",
     "100 mg/L"
    ],
    "correct": 2,
    "expl": "Arrêté 11/01/2007 : NO₃⁻ < 50 mg/L (limite de qualité). Valeur guide OMS : 50 mg/L. Risque méthémoglobinémie nourrissons si > 50 mg/L."
   },
   {
    "q": "La teneur en E. coli dans l'eau potable doit être :",
    "choices": [
     "< 100 UFC/100 mL",
     "< 10 UFC/100 mL",
     "< 1 UFC/100 mL",
     "0 UFC/100 mL"
    ],
    "correct": 3,
    "expl": "E. coli : 0 UFC/100 mL (limite absolue). Arrêté 11/01/2007. Indicateur de contamination fécale."
   },
   {
    "q": "L'indice biotique global (IBGN) d'une rivière évalue :",
    "choices": [
     "La qualité physico-chimique",
     "La qualité hydrobiologique (macroinvertébrés)",
     "La teneur en nitrates",
     "Le débit"
    ],
    "correct": 1,
    "expl": "IBGN (NF T90-350) : 0-20. Note ≥ 13 : excellente qualité. < 5 : mauvaise. Macroinvertébrés = indicateurs biologiques DCE."
   },
   {
    "q": "Le ratio C/N optimal pour la dénitrification est :",
    "choices": [
     "1-2",
     "5-8",
     "15-20",
     "30-50"
    ],
    "correct": 1,
    "expl": "C/N = 5-8 g DBO₅ / g NO₃-N pour dénitrification complète. Si insuffisant : addition de méthanol ou de boues primaires."
   },
   {
    "q": "Le seuil d'eutrophisation en phosphore total pour un lac est :",
    "choices": [
     "< 0,002 mg/L",
     "> 0,02-0,05 mg/L",
     "> 5 mg/L",
     "> 50 mg/L"
    ],
    "correct": 1,
    "expl": "Eutrophisation si Pt > 0,02-0,05 mg/L. Oligotrophe : < 0,01 mg/L. Mésotrophe : 0,01-0,03. Eutrophe : > 0,03 mg/L."
   },
   {
    "q": "La méthode de Kjeldahl mesure :",
    "choices": [
     "Le DCO",
     "Le NTK (azote total organique + ammoniacal)",
     "Le pH",
     "Les MES"
    ],
    "correct": 1,
    "expl": "Méthode Kjeldahl : minéralisation H₂SO₄ + distillation NH₃ + titrage. Mesure NTK. Référence NF EN 13342 et NF T90-110."
   },
   {
    "q": "Le bioxyde de chlore ClO₂ est utilisé comme désinfectant car :",
    "choices": [
     "Il est moins efficace que le chlore",
     "Il ne forme pas de THM (trihalométhanes) contrairement au chlore",
     "Il est moins coûteux",
     "Il se stocke facilement"
    ],
    "correct": 1,
    "expl": "ClO₂ : pas de THM, efficace sur Cryptosporidium, goûts/odeurs. Inconvénient : production in situ obligatoire (instable)."
   },
   {
    "q": "La biodégradabilité ultime (DOC) d'un effluent est mesurée par :",
    "choices": [
     "DBO₅",
     "DBO ultime (≈ DBO₂₈)",
     "DCO",
     "TOC"
    ],
    "correct": 1,
    "expl": "DBO ultime (DBO₂₈ ≈ 1,5 × DBO₅ pour EU domestiques) mesure la biodégradabilité complète. Le reste = matière récalcitrante."
   }
  ]
 },
 {
  "id": "ue2-3",
  "theme": "UE2",
  "themeName": "Assainissement collectif",
  "ico": "🚰",
  "color": "#1248A0",
  "colorl": "#E6EEF8",
  "title": "Eau potable — normes et limites",
  "desc": "Limites de qualité · Références · Captage · Périmètres de protection",
  "questions": [
   {
    "q": "La limite de qualité pour les pesticides individuels dans l'eau potable est :",
    "choices": [
     "0,01 µg/L",
     "0,1 µg/L",
     "1 µg/L",
     "10 µg/L"
    ],
    "correct": 1,
    "expl": "Pesticide individuel : 0,1 µg/L. Total pesticides : 0,5 µg/L. Arrêté 11/01/2007. Valeur très basse (principe de précaution)."
   },
   {
    "q": "La concentration maximale en plomb dans l'eau potable est désormais :",
    "choices": [
     "25 µg/L",
     "10 µg/L",
     "5 µg/L",
     "1 µg/L"
    ],
    "correct": 2,
    "expl": "Plomb : 5 µg/L depuis janvier 2036 (Directive 2020/2184). Auparavant 10 µg/L. Origine : anciens branchements en plomb. Neurotoxique."
   },
   {
    "q": "Les 3 périmètres de protection d'un captage AEP sont :",
    "choices": [
     "Immédiat, rapproché, éloigné",
     "Interne, externe, tampon",
     "Primaire, secondaire, tertiaire",
     "Central, médian, périphérique"
    ],
    "correct": 0,
    "expl": "DUP captage : périmètre immédiat (clôturé, propriété collectivité), rapproché (servitudes), éloigné (réglementation des activités). CSP art. L.1321-2."
   },
   {
    "q": "La turbidité maximale en sortie de station de traitement AEP est :",
    "choices": [
     "0,5 NTU",
     "1 NTU",
     "2 NTU",
     "5 NTU"
    ],
    "correct": 2,
    "expl": "Turbidité sortie station : < 2 NTU (limite qualité), < 0,5 NTU recommandé si désinfection UV/filtration. En distribution : < 1 NTU."
   },
   {
    "q": "La concentration maximale en arsenic dans l'eau potable est :",
    "choices": [
     "1 µg/L",
     "10 µg/L",
     "50 µg/L",
     "100 µg/L"
    ],
    "correct": 1,
    "expl": "Arsenic : 10 µg/L (limite OMS et UE). Origine géologique (Massif Central, Vosges). Cancérigène. Traitement : adsorption sur oxyde de fer."
   },
   {
    "q": "Le CT (Concentration × Temps de contact) sert à dimensionner :",
    "choices": [
     "La coagulation",
     "La désinfection (inactivation des pathogènes)",
     "La filtration",
     "La décantation"
    ],
    "correct": 1,
    "expl": "CT = concentration désinfectant × temps de contact. Plus le CT requis est élevé, plus l'agent pathogène est résistant. Cryptosporidium très résistant au chlore."
   },
   {
    "q": "La dureté recommandée pour une eau de distribution équilibrée est :",
    "choices": [
     "< 5°f",
     "10–25°f",
     "> 50°f",
     "0°f (eau adoucie totale)"
    ],
    "correct": 1,
    "expl": "Dureté optimale 10–25°f : ni agressive (corrosion) ni entartrante. Eau trop douce = corrosive. Eau trop dure = dépôts de tartre."
   },
   {
    "q": "La filtration sur sable lent fonctionne grâce à :",
    "choices": [
     "Une pression élevée",
     "La membrane biologique (schmutzdecke) en surface",
     "Un coagulant chimique",
     "Les UV"
    ],
    "correct": 1,
    "expl": "Sable lent : 0,1–0,3 m/h. Membrane biologique (schmutzdecke) piège et dégrade. Pas de réactif. Adapté aux petites collectivités. Élimine 99% bactéries."
   },
   {
    "q": "La coagulation-floculation a pour but de :",
    "choices": [
     "Tuer les bactéries",
     "Agréger les colloïdes en flocs décantables",
     "Ajuster le pH",
     "Éliminer le calcaire"
    ],
    "correct": 1,
    "expl": "Coagulation (sels d'Al ou Fe) neutralise les charges des colloïdes → floculation forme des flocs → décantation/filtration. Élimine turbidité, MO, micropolluants."
   },
   {
    "q": "La chloration au break-point (point critique) correspond à :",
    "choices": [
     "Le minimum de chlore",
     "La dose où tout l'ammoniac est oxydé et le chlore libre apparaît",
     "La dose maximale autorisée",
     "La dose de pré-chloration"
    ],
    "correct": 1,
    "expl": "Break-point : dose de Cl₂ qui détruit NH₃/chloramines. Au-delà : chlore libre résiduel (désinfectant actif). En-deçà : chloramines (désinfectant faible)."
   },
   {
    "q": "Le résiduel de chlore libre recommandé en distribution est :",
    "choices": [
     "0 mg/L",
     "0,1–0,3 mg/L",
     "1–2 mg/L",
     "> 5 mg/L"
    ],
    "correct": 1,
    "expl": "Chlore libre résiduel : 0,1–0,3 mg/L en sortie réseau (garantit protection bactérienne sans goût). Plan Vigipirate : jusqu'à 0,3 mg/L imposé."
   },
   {
    "q": "L'ozonation de l'eau potable permet :",
    "choices": [
     "Uniquement la désinfection",
     "Désinfection + oxydation des micropolluants + amélioration du goût",
     "Uniquement l'élimination du fer",
     "L'adoucissement"
    ],
    "correct": 1,
    "expl": "Ozone (O₃) : oxydant puissant. Désinfecte, oxyde MO/pesticides/goûts, démanganise. Pas de résiduel → chloration finale nécessaire. Risque bromates."
   },
   {
    "q": "Le charbon actif en grains (CAG) élimine principalement :",
    "choices": [
     "Les bactéries",
     "Les micropolluants organiques (pesticides, médicaments, goûts)",
     "Le calcaire",
     "Les nitrates"
    ],
    "correct": 1,
    "expl": "CAG : adsorption des micropolluants organiques, pesticides, COV, goûts/odeurs. Régénération thermique. Ne retient ni nitrates ni métaux dissous."
   },
   {
    "q": "La concentration maximale en fluorures dans l'eau potable est :",
    "choices": [
     "0,5 mg/L",
     "1,5 mg/L",
     "5 mg/L",
     "15 mg/L"
    ],
    "correct": 1,
    "expl": "Fluorures : 1,5 mg/L. Excès → fluorose dentaire/osseuse. Origine géologique. Certaines eaux minérales en contiennent plus (mention obligatoire)."
   },
   {
    "q": "L'UV (rayonnement ultraviolet) en traitement AEP :",
    "choices": [
     "Laisse un résiduel désinfectant",
     "Inactive les micro-organismes sans résiduel ni sous-produits",
     "Adoucit l'eau",
     "Élimine les nitrates"
    ],
    "correct": 1,
    "expl": "UV 254 nm : inactive bactéries, virus, Cryptosporidium (très efficace). Pas de résiduel → chloration complémentaire. Dose : 40 mJ/cm². Pas de sous-produits."
   },
   {
    "q": "Le bilan d'une analyse de \"première mise en distribution\" (P1, P2) est défini par :",
    "choices": [
     "La LEMA",
     "L'arrêté du 11/01/2007 (programme d'analyses)",
     "La DCE",
     "Le règlement REACH"
    ],
    "correct": 1,
    "expl": "Arrêté 11/01/2007 : définit les programmes d'analyses (P1 routine, P2 complète, D1/D2 distribution). Fréquence selon débit. Réalisés par labos agréés ARS."
   },
   {
    "q": "La concentration en nitrites dans l'eau potable est limitée à :",
    "choices": [
     "0,5 mg/L",
     "0,1 mg/L (sortie station) / 0,5 mg/L (distribution)",
     "5 mg/L",
     "50 mg/L"
    ],
    "correct": 1,
    "expl": "Nitrites : 0,50 mg/L en distribution, 0,10 mg/L en sortie de station. Toxiques (méthémoglobinémie). Issus d'une nitrification incomplète."
   },
   {
    "q": "La reminéralisation d'une eau agressive se fait par :",
    "choices": [
     "Ajout de chlore",
     "Filtration sur carbonate de calcium ou injection de CO₂ + chaux",
     "Osmose inverse",
     "Ozonation"
    ],
    "correct": 1,
    "expl": "Reminéralisation : neutralite (filtration CaCO₃) ou CO₂ + Ca(OH)₂. Augmente TH et TAC, équilibre l'eau (Langelier). Protège canalisations de la corrosion."
   },
   {
    "q": "Le contrôle sanitaire de l'eau potable est assuré par :",
    "choices": [
     "La collectivité",
     "L'Agence Régionale de Santé (ARS)",
     "L'Agence de l'eau",
     "La DREAL"
    ],
    "correct": 1,
    "expl": "ARS : contrôle sanitaire officiel (prélèvements inopinés, analyses labos agréés). Le exploitant fait sa propre autosurveillance en complément. Résultats publics."
   },
   {
    "q": "L'osmose inverse est utilisée pour :",
    "choices": [
     "Désinfecter",
     "Dessaler l'eau de mer ou éliminer nitrates/micropolluants dissous",
     "Augmenter la dureté",
     "Éliminer la turbidité uniquement"
    ],
    "correct": 1,
    "expl": "Osmose inverse : membrane semi-perméable haute pression. Dessalement, élimination nitrates, PFAS, micropolluants. Énergivore. Produit un concentrat (saumure) à gérer."
   }
  ]
 },
 {
  "id": "ue2-4",
  "theme": "UE2",
  "themeName": "Assainissement collectif",
  "ico": "🔬",
  "color": "#1248A0",
  "colorl": "#E6EEF8",
  "title": "Micropolluants et contaminants émergents",
  "desc": "PFAS · Médicaments · Microplastiques · Perturbateurs endocriniens",
  "questions": [
   {
    "q": "Les PFAS sont surnommés \"polluants éternels\" car :",
    "choices": [
     "Ils sont radioactifs",
     "Leur liaison carbone-fluor est quasi indestructible",
     "Ils flottent indéfiniment",
     "Ils se reproduisent"
    ],
    "correct": 1,
    "expl": "Liaison C-F : 460 kJ/mol, la plus forte en chimie organique. Non dégradables naturellement. Bioaccumulables. > 4700 molécules recensées."
   },
   {
    "q": "La limite réglementaire pour la somme des 20 PFAS dans l'eau potable est :",
    "choices": [
     "0,1 µg/L",
     "0,5 µg/L",
     "1 µg/L",
     "10 µg/L"
    ],
    "correct": 0,
    "expl": "Somme 20 PFAS : 0,1 µg/L = 100 ng/L (Directive 2020/2184, applicable 2026). PFAS totaux : 0,5 µg/L. Traitement : charbon actif, osmose inverse, résines."
   },
   {
    "q": "Les résidus médicamenteux dans l'eau proviennent principalement de :",
    "choices": [
     "L'industrie uniquement",
     "L'excrétion humaine et animale + rejets non éliminés en STEU",
     "Les pesticides",
     "La corrosion des canalisations"
    ],
    "correct": 1,
    "expl": "Médicaments : excrétés par l'organisme, rejetés via STEU (mal éliminés en traitement classique). Antibiotiques, anti-inflammatoires, hormones. Effets chroniques étudiés."
   },
   {
    "q": "Un perturbateur endocrinien est une substance qui :",
    "choices": [
     "Détruit les bactéries",
     "Interfère avec le système hormonal même à faible dose",
     "Augmente la dureté",
     "Acidifie l'eau"
    ],
    "correct": 1,
    "expl": "Perturbateur endocrinien : mime/bloque les hormones. Effet à très faible dose, parfois non linéaire. Ex : bisphénol A, certains pesticides, alkylphénols."
   },
   {
    "q": "Les microplastiques dans l'eau sont définis comme des particules de :",
    "choices": [
     "< 5 mm",
     "< 5 µm",
     "> 5 cm",
     "> 1 mm uniquement"
    ],
    "correct": 0,
    "expl": "Microplastiques : < 5 mm. Nanoplastiques : < 1 µm. Sources : dégradation déchets, textiles synthétiques, cosmétiques. Surveillance émergente (Directive 2020/2184)."
   },
   {
    "q": "Le traitement le plus efficace contre les PFAS à chaîne courte est :",
    "choices": [
     "Le charbon actif seul",
     "L'osmose inverse ou les résines échangeuses d'ions",
     "La chloration",
     "La décantation"
    ],
    "correct": 1,
    "expl": "PFAS chaîne courte : peu retenus par charbon actif. Osmose inverse et résines spécifiques plus efficaces. Concentrat à détruire (incinération > 1000°C)."
   },
   {
    "q": "Le bisphénol A (BPA) peut migrer dans l'eau depuis :",
    "choices": [
     "Les conduites en fonte",
     "Certains plastiques et revêtements époxy de réservoirs",
     "Le béton",
     "Les membranes UF"
    ],
    "correct": 1,
    "expl": "BPA : plastiques polycarbonate, résines époxy (revêtements intérieurs réservoirs/canalisations). Perturbateur endocrinien. Interdit dans contenants alimentaires en France."
   },
   {
    "q": "La surveillance des PFAS dans l'eau potable en France a été renforcée par :",
    "choices": [
     "La LEMA 2006",
     "Le Plan d'action PFAS 2023 et la transposition de la Directive 2020/2184",
     "La DCE 2000",
     "La loi NOTRe"
    ],
    "correct": 1,
    "expl": "Plan d'action ministériel PFAS 2023 + transposition Directive eau potable. Campagnes de mesure nationales 2023-2026. Cartographie des points de captage contaminés."
   },
   {
    "q": "Les nitrates restent un contaminant majeur en zone agricole car :",
    "choices": [
     "Ils proviennent des médicaments",
     "Ils sont issus des engrais azotés lessivés vers les nappes",
     "Ils viennent des PFAS",
     "Ils sont produits par chloration"
    ],
    "correct": 1,
    "expl": "Nitrates : engrais et effluents d'élevage lessivés. Limite 50 mg/L. Zones vulnérables (Directive Nitrates). Traitement coûteux (dénitrification, osmose, échange d'ions)."
   },
   {
    "q": "Le 1,4-dioxane est un contaminant émergent qui est :",
    "choices": [
     "Facilement éliminé par charbon actif",
     "Très soluble et difficile à éliminer par les traitements classiques",
     "Un pesticide",
     "Naturellement présent"
    ],
    "correct": 1,
    "expl": "1,4-dioxane : solvant industriel, très soluble, peu adsorbable. Résiste au charbon actif. Traitement : oxydation avancée (UV/H₂O₂). Cancérigène probable."
   },
   {
    "q": "La métabolite de pesticide ESA-métolachlore est surveillée car :",
    "choices": [
     "Elle est inoffensive",
     "Elle dépasse fréquemment 0,1 µg/L dans les nappes",
     "Elle vient des PFAS",
     "Elle est radioactive"
    ],
    "correct": 1,
    "expl": "Métolachlore-ESA : métabolite d'herbicide. Très fréquent dans les nappes (dépassements 0,1 µg/L). Classé \"pertinent\" → soumis à la limite réglementaire depuis 2021."
   },
   {
    "q": "L'oxydation avancée (AOP) pour traiter les micropolluants utilise :",
    "choices": [
     "Du chlore seul",
     "Des radicaux hydroxyles (UV/H₂O₂, ozone/H₂O₂)",
     "De la décantation",
     "Du sable"
    ],
    "correct": 1,
    "expl": "AOP (Advanced Oxidation Process) : génère des radicaux •OH très oxydants. Détruit micropolluants récalcitrants (pesticides, médicaments). Coûteux, énergivore."
   },
   {
    "q": "Le glyphosate et son métabolite AMPA sont :",
    "choices": [
     "Sans danger pour l'eau",
     "Parmi les pesticides les plus détectés dans les eaux de surface",
     "Des PFAS",
     "Des perturbateurs endocriniens prouvés"
    ],
    "correct": 1,
    "expl": "Glyphosate (herbicide) + AMPA (métabolite) : très détectés en eaux de surface. Classé cancérigène probable par le CIRC (2015). Débat scientifique et réglementaire intense."
   },
   {
    "q": "Les substances radioactives dans l'eau potable sont contrôlées via :",
    "choices": [
     "La turbidité",
     "La dose indicative totale (DTI < 0,1 mSv/an)",
     "Le pH",
     "La conductivité"
    ],
    "correct": 1,
    "expl": "DTI (Dose Totale Indicative) < 0,1 mSv/an. Mesure tritium, activité alpha/bêta globale. Origine naturelle (radon, uranium) ou industrielle. Arrêté 11/01/2007."
   },
   {
    "q": "L'antibiorésistance liée aux rejets dans l'eau est un enjeu car :",
    "choices": [
     "Les antibiotiques tuent les poissons",
     "Les bactéries résistantes et gènes de résistance se propagent via les eaux",
     "L'eau devient acide",
     "Les PFAS augmentent"
    ],
    "correct": 1,
    "expl": "Rejets d'antibiotiques (hôpitaux, élevages) → sélection de bactéries résistantes dans les STEU et milieux. Propagation des gènes de résistance. Enjeu One Health."
   },
   {
    "q": "Le mercure dans l'eau potable est limité à :",
    "choices": [
     "0,1 µg/L",
     "1 µg/L",
     "5 µg/L",
     "10 µg/L"
    ],
    "correct": 1,
    "expl": "Mercure : 1 µg/L. Neurotoxique, bioaccumulable (méthylmercure dans les poissons). Origine industrielle. Convention de Minamata (2013) pour réduire les émissions."
   },
   {
    "q": "Les substances per-fluorées s'accumulent particulièrement dans :",
    "choices": [
     "L'air",
     "Le sang humain et les organes (foie, reins)",
     "Les os uniquement",
     "Les cheveux"
    ],
    "correct": 1,
    "expl": "PFAS : bioaccumulation dans le sang, foie, reins. Demi-vie de plusieurs années dans le corps. Effets : cholestérol, thyroïde, immunité, certains cancers."
   },
   {
    "q": "Le seuil de vigilance pour un pesticide \"non pertinent\" (métabolite) est :",
    "choices": [
     "0,1 µg/L",
     "0,9 µg/L",
     "9 µg/L",
     "Aucun seuil"
    ],
    "correct": 1,
    "expl": "Métabolite non pertinent : seuil de vigilance 0,9 µg/L (valeur sanitaire transitoire). Métabolite pertinent : limite 0,1 µg/L. Classement par l'ANSES."
   },
   {
    "q": "La technique d'analyse de référence pour les PFAS est :",
    "choices": [
     "La spectrophotométrie",
     "La chromatographie liquide couplée à la spectrométrie de masse (LC-MS/MS)",
     "La titrimétrie",
     "La conductimétrie"
    ],
    "correct": 1,
    "expl": "LC-MS/MS : seuils de détection au ng/L. Méthode normalisée pour PFAS (NF EN ISO 21675). Coûteuse, laboratoires spécialisés. Permet l'identification molécule par molécule."
   },
   {
    "q": "Le principe de précaution appliqué aux contaminants émergents implique :",
    "choices": [
     "D'attendre la preuve de toxicité",
     "D'agir face à un risque potentiel même sans certitude scientifique complète",
     "D'ignorer les substances non réglementées",
     "De ne traiter que les bactéries"
    ],
    "correct": 1,
    "expl": "Principe de précaution (art. 5 Charte de l'environnement) : mesures de réduction face à un risque grave et incertain. Base de l'abaissement des seuils PFAS, pesticides."
   }
  ]
 },
 {
  "id": "ue2-5",
  "theme": "UE2",
  "themeName": "Assainissement collectif",
  "ico": "🦠",
  "color": "#1248A0",
  "colorl": "#E6EEF8",
  "title": "Microbiologie et hydrobiologie",
  "desc": "Indicateurs bactériens · Pathogènes · Indices biologiques · Milieux",
  "questions": [
   {
    "q": "Escherichia coli est utilisé comme indicateur de :",
    "choices": [
     "Pollution chimique",
     "Contamination fécale récente",
     "Eutrophisation",
     "Dureté"
    ],
    "correct": 1,
    "expl": "E. coli : bactérie du tube digestif. Indicateur de contamination fécale récente. Limite eau potable : 0/100 mL. Présence = risque de pathogènes."
   },
   {
    "q": "Les entérocoques intestinaux sont des indicateurs :",
    "choices": [
     "De pollution chimique",
     "De contamination fécale plus persistante qu'E. coli",
     "De dureté",
     "De turbidité"
    ],
    "correct": 1,
    "expl": "Entérocoques : plus résistants dans l'environnement qu'E. coli. Indicateur de contamination fécale ancienne. Limite eau potable : 0/100 mL."
   },
   {
    "q": "Cryptosporidium est un parasite particulièrement préoccupant car :",
    "choices": [
     "Il est sensible au chlore",
     "Il résiste au chlore et nécessite filtration ou UV",
     "Il est inoffensif",
     "Il vit dans les conduites"
    ],
    "correct": 1,
    "expl": "Cryptosporidium : oocystes résistants au chlore. Élimination par filtration fine ou UV. Cause de gastro-entérites épidémiques (Milwaukee 1993 : 400 000 cas)."
   },
   {
    "q": "Les légionelles se développent préférentiellement :",
    "choices": [
     "Dans l'eau froide < 5°C",
     "Dans l'eau tiède 25–45°C (réseaux ECS, tours aéroréfrigérantes)",
     "Dans l'eau gelée",
     "Dans l'eau distillée"
    ],
    "correct": 1,
    "expl": "Legionella : prolifère à 25–45°C. Risque : ECS, tours aéroréfrigérantes, douches (aérosols). Maintenir ECS > 50°C. Légionellose = pneumonie grave."
   },
   {
    "q": "L'IBGN (Indice Biologique Global Normalisé) évalue :",
    "choices": [
     "La qualité chimique",
     "La qualité biologique d'un cours d'eau via les macroinvertébrés",
     "La turbidité",
     "Le débit"
    ],
    "correct": 1,
    "expl": "IBGN (NF T90-350, remplacé par I2M2/MGCE) : note 0-20 basée sur les macroinvertébrés benthiques. Indicateur de qualité écologique pour la DCE."
   },
   {
    "q": "L'Indice Biologique Diatomées (IBD) utilise :",
    "choices": [
     "Les poissons",
     "Les algues microscopiques (diatomées)",
     "Les bactéries",
     "Les mollusques"
    ],
    "correct": 1,
    "expl": "IBD (NF T90-354) : basé sur les diatomées (algues siliceuses). Sensible à la pollution organique et aux nutriments. Indicateur DCE de l'état écologique."
   },
   {
    "q": "L'eutrophisation d'un plan d'eau se manifeste par :",
    "choices": [
     "Une eau plus claire",
     "Une prolifération d'algues, une chute de l'O₂ et parfois des cyanobactéries",
     "Une augmentation du pH stable",
     "Une baisse de la température"
    ],
    "correct": 1,
    "expl": "Eutrophisation : excès N/P → blooms algaux → mort et décomposition → anoxie. Cyanobactéries toxiques possibles. Facteur limitant en eau douce : phosphore."
   },
   {
    "q": "Les cyanobactéries (algues bleues) sont dangereuses car :",
    "choices": [
     "Elles consomment le chlore",
     "Elles produisent des cyanotoxines (microcystines) hépatotoxiques",
     "Elles augmentent la dureté",
     "Elles sont radioactives"
    ],
    "correct": 1,
    "expl": "Cyanobactéries : produisent microcystines (foie), anatoxines (système nerveux). Blooms en eaux stagnantes eutrophes l'été. Surveillance des eaux de baignade et AEP."
   },
   {
    "q": "Le seuil d'alerte pour les cyanobactéries en eau de baignade (niveau 2) est :",
    "choices": [
     "1 000 cellules/mL",
     "20 000 cellules/mL",
     "100 000 cellules/mL",
     "1 million cellules/mL"
    ],
    "correct": 2,
    "expl": "Niveau 2 (interdiction) : ≥ 100 000 cellules/mL ou présence d'écume. Niveau 1 (information) : 20 000 cellules/mL. Surveillance ARS l'été."
   },
   {
    "q": "L'indice poisson rivière (IPR) évalue :",
    "choices": [
     "La quantité de poissons pêchés",
     "L'écart entre le peuplement piscicole observé et théorique",
     "La taille des poissons",
     "La température de l'eau"
    ],
    "correct": 1,
    "expl": "IPR (NF T90-344) : compare le peuplement piscicole réel au peuplement attendu en l'absence de perturbation. Indicateur DCE. Sensible à la continuité écologique."
   },
   {
    "q": "La désinfection des eaux de baignade naturelles repose sur :",
    "choices": [
     "La chloration systématique",
     "Le suivi d'E. coli et entérocoques + classement annuel",
     "L'ozonation",
     "Les UV"
    ],
    "correct": 1,
    "expl": "Baignades naturelles : Directive 2006/7/CE. Suivi E. coli + entérocoques. Classement (excellent/bon/suffisant/insuffisant) sur 4 ans de données. Pas de désinfection."
   },
   {
    "q": "Le biofilm dans les canalisations d'eau potable :",
    "choices": [
     "Améliore la qualité",
     "Peut abriter des pathogènes et consommer le chlore résiduel",
     "Augmente le débit",
     "Réduit la corrosion"
    ],
    "correct": 1,
    "expl": "Biofilm : communauté bactérienne fixée aux parois. Consomme le chlore, abrite Legionella/amibes, génère goûts/odeurs. Maintenir un résiduel de chlore et une vitesse suffisante."
   },
   {
    "q": "Les protozoaires Giardia se transmettent par :",
    "choices": [
     "L'air",
     "L'eau contaminée par des kystes (voie féco-orale)",
     "Le contact cutané",
     "Les insectes"
    ],
    "correct": 1,
    "expl": "Giardia : kystes résistants dans l'eau, transmis voie féco-orale. Cause de giardiase (diarrhées). Élimination par filtration ou UV (résiste partiellement au chlore)."
   },
   {
    "q": "L'analyse microbiologique standard de l'eau potable recherche :",
    "choices": [
     "Tous les virus",
     "E. coli, entérocoques, bactéries coliformes, germes aérobies",
     "Uniquement les pesticides",
     "Les PFAS"
    ],
    "correct": 1,
    "expl": "Analyse type : E. coli, entérocoques intestinaux, coliformes totaux, micro-organismes revivifiables à 22°C et 36°C, bactéries sulfito-réductrices. Méthodes normalisées."
   },
   {
    "q": "La méthode de dénombrement bactérien par filtration sur membrane permet :",
    "choices": [
     "De mesurer le pH",
     "De compter les bactéries cultivables (UFC) après incubation",
     "De doser le chlore",
     "De mesurer la turbidité"
    ],
    "correct": 1,
    "expl": "Filtration sur membrane 0,45 µm + culture sur milieu sélectif + incubation. Comptage UFC (Unités Formant Colonies). Méthode de référence pour E. coli/coliformes."
   },
   {
    "q": "La norme de qualité environnementale (NQE) sert à évaluer :",
    "choices": [
     "La quantité d'eau",
     "Le bon état chimique des masses d'eau (substances prioritaires)",
     "Le débit",
     "La température"
    ],
    "correct": 1,
    "expl": "NQE : concentrations seuils pour 45+ substances prioritaires (DCE). Dépassement = mauvais état chimique. Métaux, HAP, pesticides, PFOS. Moyenne annuelle et concentration max."
   },
   {
    "q": "Le phytoplancton excessif (chlorophylle a élevée) indique :",
    "choices": [
     "Une eau de bonne qualité",
     "Une eutrophisation et un enrichissement en nutriments",
     "Une faible température",
     "Une eau acide"
    ],
    "correct": 1,
    "expl": "Chlorophylle a : marqueur de biomasse algale. Élevée = eutrophisation. Indicateur DCE pour plans d'eau. Seuils selon le type de masse d'eau."
   },
   {
    "q": "Les amibes libres (Naegleria) dans l'eau chaude présentent un risque :",
    "choices": [
     "Digestif",
     "D'infection cérébrale (méningo-encéphalite) rare mais mortelle",
     "Cutané bénin",
     "Aucun"
    ],
    "correct": 1,
    "expl": "Naegleria fowleri : amibe des eaux chaudes (> 30°C). Méningo-encéphalite amibienne primitive, rare mais mortelle. Risque en eaux thermales/baignades chaudes."
   },
   {
    "q": "La continuité écologique d'un cours d'eau favorise :",
    "choices": [
     "L'entartrage",
     "La circulation des poissons et des sédiments",
     "La chloration",
     "L'évaporation"
    ],
    "correct": 1,
    "expl": "Continuité écologique (DCE + classement L1/L2) : libre circulation des espèces (passes à poissons) et transit sédimentaire. Effacement ou aménagement des obstacles."
   },
   {
    "q": "Le bon état écologique d'une masse d'eau selon la DCE est évalué par :",
    "choices": [
     "La seule analyse chimique",
     "Des éléments biologiques + physico-chimiques + hydromorphologiques",
     "Le débit uniquement",
     "La température uniquement"
    ],
    "correct": 1,
    "expl": "Bon état écologique : éléments biologiques (poissons, invertébrés, diatomées, macrophytes) + physico-chimie soutenant + hydromorphologie. Approche multicritère DCE."
   }
  ]
 },
 {
  "id": "ue2-6",
  "theme": "UE2",
  "themeName": "Assainissement collectif",
  "ico": "🦠",
  "color": "#1248A0",
  "colorl": "#E6EEF8",
  "title": "Microbiologie et désinfection",
  "desc": "Bactériologie · Chloration · UV · Ozone · Légionelles",
  "questions": [
   {
    "q": "La limite réglementaire pour Escherichia coli dans l'eau potable est :",
    "choices": [
     "< 100 UFC/100 mL",
     "< 10 UFC/100 mL",
     "0 UFC/100 mL",
     "< 1000 UFC/100 mL"
    ],
    "correct": 2,
    "expl": "E. coli : 0 UFC/100 mL (absence). Arrêté 11/01/2007. Indicateur direct de contamination fécale récente."
   },
   {
    "q": "Le CT (Concentration × Temps) est utilisé pour :",
    "choices": [
     "Mesurer la dureté",
     "Quantifier l'efficacité d'une désinfection",
     "Calculer la DBO₅",
     "Mesurer la turbidité"
    ],
    "correct": 1,
    "expl": "CT = concentration désinfectant (mg/L) × temps de contact (min). Plus le CT est élevé, plus l'inactivation des pathogènes est forte."
   },
   {
    "q": "Les trihalométhanes (THM) se forment lors de :",
    "choices": [
     "La filtration sur sable",
     "La chloration en présence de matière organique",
     "L'ozonation",
     "La décantation"
    ],
    "correct": 1,
    "expl": "THM = sous-produits de chloration (chlore + MO). Chloroforme principal. Limite EP : 100 µg/L (total des 4 THM). Cancérigènes suspectés."
   },
   {
    "q": "La désinfection UV agit en :",
    "choices": [
     "Oxydant les bactéries",
     "Détruisant l'ADN des micro-organismes",
     "Précipitant les pathogènes",
     "Acidifiant l'eau"
    ],
    "correct": 1,
    "expl": "UV (254 nm) : altération de l'ADN/ARN → inactivation. Dose : 40 mJ/cm² (norme EP). Pas de rémanence (contrairement au chlore)."
   },
   {
    "q": "Un avantage de l'ozone par rapport au chlore est :",
    "choices": [
     "Sa rémanence dans le réseau",
     "Son efficacité sur les kystes de Cryptosporidium",
     "Son faible coût",
     "Sa facilité de stockage"
    ],
    "correct": 1,
    "expl": "Ozone : très oxydant, efficace sur Cryptosporidium et Giardia (résistants au chlore). Inconvénient : pas de rémanence, production in situ, bromates."
   },
   {
    "q": "Les coliformes totaux sont des indicateurs de :",
    "choices": [
     "Pollution chimique",
     "Qualité bactériologique générale",
     "Présence de métaux lourds",
     "Eutrophisation"
    ],
    "correct": 1,
    "expl": "Coliformes totaux : indicateurs de la qualité du traitement et de l'intégrité du réseau. Limite EP : 0/100 mL. Moins spécifiques qu'E. coli."
   },
   {
    "q": "Le chlore résiduel libre recommandé en distribution est :",
    "choices": [
     "0,1 mg/L",
     "0,1 à 0,3 mg/L",
     "1 à 2 mg/L",
     "> 5 mg/L"
    ],
    "correct": 1,
    "expl": "Chlore libre résiduel : 0,1-0,3 mg/L en distribution (rémanence). Trop bas : risque microbiologique. Trop haut : goût et THM."
   },
   {
    "q": "Les bromates sont des sous-produits de :",
    "choices": [
     "La chloration",
     "L'ozonation d'eaux bromurées",
     "La filtration",
     "La coagulation"
    ],
    "correct": 1,
    "expl": "Bromates : sous-produits de l'ozonation en présence de bromures. Limite EP : 10 µg/L. Cancérigènes. Problème surtout en eau de mer dessalée."
   },
   {
    "q": "Légionella pneumophila prolifère préférentiellement à :",
    "choices": [
     "< 20°C",
     "25 à 45°C",
     "> 70°C",
     "0°C"
    ],
    "correct": 1,
    "expl": "Légionelles : prolifèrent à 25-45°C (optimum 37°C). Détruites > 60°C. ECS maintenue > 50°C (55°C au stockage). Risque légionellose par aérosols."
   },
   {
    "q": "Le seuil d'alerte légionelles dans les tours aéroréfrigérantes est :",
    "choices": [
     "10 UFC/L",
     "1 000 UFC/L",
     "100 000 UFC/L",
     "1 000 000 UFC/L"
    ],
    "correct": 2,
    "expl": "TAR : seuil d'action 1000 UFC/L, arrêt à 100 000 UFC/L. Arrêté ICPE 2921. Surveillance mensuelle obligatoire de Legionella pneumophila."
   },
   {
    "q": "La méthode de dénombrement bactérien de référence est :",
    "choices": [
     "La spectrophotométrie",
     "La culture sur milieu gélosé (UFC)",
     "La conductimétrie",
     "La turbidimétrie"
    ],
    "correct": 1,
    "expl": "Dénombrement : culture sur milieu gélosé → comptage des UFC (Unités Formant Colonies). Méthodes rapides : PCR, cytométrie en flux."
   },
   {
    "q": "La filtration membranaire pour analyse bactério retient les bactéries sur un filtre de :",
    "choices": [
     "10 µm",
     "0,45 µm",
     "5 µm",
     "100 µm"
    ],
    "correct": 1,
    "expl": "Filtre 0,45 µm : rétention des bactéries → mise en culture du filtre. Méthode normalisée NF EN ISO 9308 (E. coli et coliformes)."
   },
   {
    "q": "Un biofilm dans une canalisation favorise :",
    "choices": [
     "La désinfection",
     "La protection et la prolifération des micro-organismes",
     "La diminution de la turbidité",
     "L'augmentation du chlore résiduel"
    ],
    "correct": 1,
    "expl": "Biofilm : matrice protégeant les bactéries du chlore. Se développe sur les parois. Relargage possible → recontamination. Purges et renouvellement nécessaires."
   },
   {
    "q": "L'unité de mesure de la dose UV est :",
    "choices": [
     "mg/L",
     "mJ/cm²",
     "UFC/mL",
     "NTU"
    ],
    "correct": 1,
    "expl": "Dose UV = intensité × temps = mJ/cm² (ou J/m²). Dose réglementaire EP : 40 mJ/cm² à 254 nm pour une inactivation efficace."
   },
   {
    "q": "Cryptosporidium est particulièrement préoccupant car :",
    "choices": [
     "Il est sensible au chlore",
     "Ses oocystes résistent à la chloration",
     "Il se développe à haute température",
     "Il est filtré par le sable seul"
    ],
    "correct": 1,
    "expl": "Cryptosporidium : oocystes très résistants au chlore. Élimination par filtration fine, UV ou ozone. Alerte si turbidité > 1 NTU en sortie de station."
   },
   {
    "q": "Le test de potabilité bactériologique complet comprend :",
    "choices": [
     "E. coli + coliformes + entérocoques + flore aérobie",
     "Le pH seulement",
     "La turbidité seulement",
     "Les nitrates seulement"
    ],
    "correct": 0,
    "expl": "Analyse bactério EP : E. coli, coliformes totaux, entérocoques, bactéries sulfito-réductrices, flore aérobie revivifiable (22°C et 36°C)."
   },
   {
    "q": "La rémanence d'un désinfectant désigne :",
    "choices": [
     "Sa toxicité",
     "Sa capacité à rester actif dans le réseau",
     "Sa vitesse d'action",
     "Son coût"
    ],
    "correct": 1,
    "expl": "Rémanence : maintien d'un pouvoir désinfectant dans le réseau (chlore, chloramine). Protège contre les recontaminations. UV et ozone : pas de rémanence."
   },
   {
    "q": "La chloramination consiste à :",
    "choices": [
     "Utiliser du chlore gazeux pur",
     "Combiner chlore et ammoniac pour une rémanence longue",
     "Filtrer sur charbon actif",
     "Ozoner l'eau"
    ],
    "correct": 1,
    "expl": "Chloramination : chlore + ammoniac → chloramines. Rémanence longue, moins de THM. Utilisée pour les grands réseaux. Inconvénient : nitrification possible."
   },
   {
    "q": "Les entérocoques intestinaux sont des indicateurs :",
    "choices": [
     "De pollution chimique",
     "De contamination fécale plus résistants qu'E. coli",
     "De dureté de l'eau",
     "De turbidité"
    ],
    "correct": 1,
    "expl": "Entérocoques : indicateurs de contamination fécale, plus résistants dans l'environnement qu'E. coli. Limite EP : 0/100 mL. Bons traceurs en eau de baignade."
   },
   {
    "q": "Le charbon actif en grain (CAG) élimine principalement :",
    "choices": [
     "Les bactéries",
     "Les micropolluants organiques, goûts et odeurs",
     "Le calcium",
     "Les nitrates"
    ],
    "correct": 1,
    "expl": "CAG : adsorption des micropolluants (pesticides, MO, goûts, odeurs, chlore). Régénération nécessaire. Peut héberger un biofilm (CAG biologique)."
   }
  ]
 },
 {
  "id": "ue2-7",
  "theme": "UE2",
  "themeName": "Assainissement collectif",
  "ico": "🔬",
  "color": "#1248A0",
  "colorl": "#E6EEF8",
  "title": "Traitement de potabilisation",
  "desc": "Coagulation · Floculation · Décantation · Filtration · Affinage",
  "questions": [
   {
    "q": "La coagulation consiste à :",
    "choices": [
     "Augmenter la taille des flocs",
     "Déstabiliser les colloïdes par ajout de réactif",
     "Filtrer l'eau",
     "Désinfecter l'eau"
    ],
    "correct": 1,
    "expl": "Coagulation : neutralisation des charges des colloïdes (chlorure ferrique, sulfate d'alumine). Mélange rapide. Suivie de la floculation."
   },
   {
    "q": "Le coagulant le plus utilisé en France est :",
    "choices": [
     "Le chlore",
     "Le sulfate d'aluminium ou le chlorure ferrique",
     "La soude",
     "Le charbon actif"
    ],
    "correct": 1,
    "expl": "Coagulants : sulfate d'aluminium Al₂(SO₄)₃ ou chlorure ferrique FeCl₃. Dose : 10-100 g/m³ selon turbidité. Optimisée par jar-test."
   },
   {
    "q": "La floculation se caractérise par :",
    "choices": [
     "Un mélange rapide",
     "Une agitation lente favorisant l'agglomération des flocs",
     "Une filtration",
     "Une chloration"
    ],
    "correct": 1,
    "expl": "Floculation : agitation lente (gradient G faible) → agglomération des microflocs en flocs décantables. Temps : 15-30 min. Adjuvant : polymère."
   },
   {
    "q": "Le jar-test permet de déterminer :",
    "choices": [
     "La dureté",
     "La dose optimale de coagulant",
     "Le pH",
     "La conductivité"
    ],
    "correct": 1,
    "expl": "Jar-test : essai en béchers avec doses croissantes de coagulant → observation de la décantation. Détermine dose et pH optimaux."
   },
   {
    "q": "La filtration sur sable rapide a une vitesse de :",
    "choices": [
     "0,1 m/h",
     "5 à 10 m/h",
     "50 m/h",
     "100 m/h"
    ],
    "correct": 1,
    "expl": "Filtre à sable rapide : 5-10 m/h. Filtre lent : 0,1-0,3 m/h (biologique). Lavage à contre-courant régulier pour les filtres rapides."
   },
   {
    "q": "Le procédé de décantation lamellaire augmente :",
    "choices": [
     "La turbidité",
     "La surface de décantation dans un volume réduit",
     "Le temps de contact chlore",
     "La dureté"
    ],
    "correct": 1,
    "expl": "Décanteur lamellaire : lamelles inclinées (55-60°) multipliant la surface de décantation. Compacité accrue. Charge : 1-3 m/h sur surface projetée."
   },
   {
    "q": "L'affinage sur charbon actif intervient :",
    "choices": [
     "Avant la coagulation",
     "Après filtration, pour éliminer micropolluants",
     "Avant le dégrillage",
     "Pendant la chloration"
    ],
    "correct": 1,
    "expl": "Affinage CAG : étape finale, élimine pesticides, goûts, odeurs, micropolluants résiduels. Avant la désinfection finale."
   },
   {
    "q": "La reminéralisation d'une eau trop douce se fait par :",
    "choices": [
     "Ajout de chlore",
     "Ajout de CO₂ + calcaire ou chaux",
     "Filtration UV",
     "Ozonation"
    ],
    "correct": 1,
    "expl": "Reminéralisation : eaux agressives (IL < 0) → ajout CO₂ + passage sur calcaire (CaCO₃) ou injection de chaux. Équilibre calco-carbonique."
   },
   {
    "q": "La nanofiltration retient :",
    "choices": [
     "Uniquement les bactéries",
     "Les ions divalents et grosses molécules",
     "Uniquement les MES",
     "Rien"
    ],
    "correct": 1,
    "expl": "Nanofiltration : seuil 200-1000 Da. Retient ions divalents (Ca²⁺, Mg²⁺ → adoucissement), MO, pesticides. Laisse passer ions monovalents."
   },
   {
    "q": "L'osmose inverse est utilisée pour :",
    "choices": [
     "La filtration grossière",
     "Le dessalement de l'eau de mer",
     "La coagulation",
     "Le dégrillage"
    ],
    "correct": 1,
    "expl": "Osmose inverse : membrane dense sous pression (50-80 bar pour eau de mer). Dessalement, élimination quasi totale des sels. Énergivore."
   },
   {
    "q": "L'aération-stripping élimine :",
    "choices": [
     "Le calcium",
     "Le fer, le manganèse et les gaz dissous (CO₂, H₂S)",
     "Les bactéries",
     "Les nitrates"
    ],
    "correct": 1,
    "expl": "Aération : oxydation Fe²⁺→Fe³⁺ et Mn²⁺, dégazage CO₂, H₂S, COV. Précède la filtration pour éliminer fer et manganèse."
   },
   {
    "q": "Le seuil de coupure d'une ultrafiltration est d'environ :",
    "choices": [
     "0,01-0,1 µm",
     "1-5 µm",
     "10-50 µm",
     "100 µm"
    ],
    "correct": 0,
    "expl": "Ultrafiltration : 0,01-0,1 µm (10-100 kDa). Retient bactéries, virus, MES, colloïdes. Désinfection sans réactif. De plus en plus utilisée en EP."
   },
   {
    "q": "Le lavage à contre-courant d'un filtre à sable sert à :",
    "choices": [
     "Désinfecter le sable",
     "Décolmater et évacuer les particules retenues",
     "Reminéraliser",
     "Ajouter du coagulant"
    ],
    "correct": 1,
    "expl": "Lavage à contre-courant (air + eau) : décolmatage du filtre, évacuation des particules. Déclenché par perte de charge ou turbidité de sortie."
   },
   {
    "q": "La déferrisation biologique utilise :",
    "choices": [
     "Du chlore",
     "Des bactéries ferro-oxydantes",
     "De l'ozone",
     "Du charbon actif"
    ],
    "correct": 1,
    "expl": "Déferrisation biologique : bactéries (Gallionella, Leptothrix) oxydant Fe²⁺. Sur filtre à sable, aération ménagée. Alternative à l'oxydation chimique."
   },
   {
    "q": "L'indice de colmatage SDI (Silt Density Index) mesure :",
    "choices": [
     "La dureté",
     "Le potentiel de colmatage des membranes",
     "Le pH",
     "La DBO₅"
    ],
    "correct": 1,
    "expl": "SDI : test sur filtre 0,45 µm évaluant le pouvoir colmatant de l'eau d'alimentation des membranes. SDI < 3 souhaitable avant osmose inverse."
   },
   {
    "q": "La chaîne classique de potabilisation d'une eau de surface est :",
    "choices": [
     "Chloration directe",
     "Coagulation-floculation-décantation-filtration-désinfection",
     "Filtration seule",
     "Décantation-chloration"
    ],
    "correct": 1,
    "expl": "Filière classique eau de surface : dégrillage → coagulation-floculation → décantation → filtration sable → affinage CAG → désinfection."
   },
   {
    "q": "Une eau souterraine de bonne qualité nécessite généralement :",
    "choices": [
     "Une chaîne complète",
     "Souvent une simple désinfection",
     "Une osmose inverse",
     "Une décantation lamellaire"
    ],
    "correct": 1,
    "expl": "Eaux souterraines protégées : souvent juste une désinfection (chlore/UV). Parfois déferrisation/démanganisation. Moins de traitement que les eaux de surface."
   },
   {
    "q": "Le polymère floculant (adjuvant) permet de :",
    "choices": [
     "Désinfecter",
     "Renforcer et alourdir les flocs",
     "Acidifier",
     "Reminéraliser"
    ],
    "correct": 1,
    "expl": "Polymère (polyacrylamide) : adjuvant de floculation, ponte les microflocs → flocs plus gros et denses → meilleure décantation. Dose : 0,1-1 g/m³."
   },
   {
    "q": "Le temps de séjour dans un décanteur classique est d'environ :",
    "choices": [
     "5 minutes",
     "1 à 3 heures",
     "12 heures",
     "3 jours"
    ],
    "correct": 1,
    "expl": "Décanteur statique : temps de séjour 1-3 h. Vitesse ascensionnelle 1-2 m/h. Décanteur lamellaire/pulsé : plus compact, temps réduit."
   },
   {
    "q": "La démanganisation nécessite un pH :",
    "choices": [
     "Acide (< 5)",
     "Plutôt élevé (> 7,5)",
     "Neutre exactement",
     "Indifférent"
    ],
    "correct": 1,
    "expl": "Oxydation du manganèse Mn²⁺ : plus difficile que le fer, nécessite pH > 7,5-8 et oxydant fort (permanganate, ozone) ou filtre catalytique."
   }
  ]
 },
 {
  "id": "ue2-8",
  "theme": "UE2",
  "themeName": "Assainissement collectif",
  "ico": "📊",
  "color": "#1248A0",
  "colorl": "#E6EEF8",
  "title": "Analyses et autosurveillance",
  "desc": "Prélèvements · Méthodes analytiques · Contrôle sanitaire · SISE-Eaux",
  "questions": [
   {
    "q": "Le contrôle sanitaire de l'eau potable est assuré par :",
    "choices": [
     "L'exploitant seul",
     "L'ARS (Agence Régionale de Santé)",
     "La mairie",
     "Les pompiers"
    ],
    "correct": 1,
    "expl": "Contrôle sanitaire officiel : ARS, prélèvements inopinés. L'exploitant assure la surveillance permanente. Résultats sur SISE-Eaux (data.gouv)."
   },
   {
    "q": "La fréquence du contrôle sanitaire dépend de :",
    "choices": [
     "La couleur de l'eau",
     "Du volume distribué et de la population desservie",
     "De la saison uniquement",
     "Du prix de l'eau"
    ],
    "correct": 1,
    "expl": "Fréquence définie par le Code de la Santé Publique selon le débit/population. Plus l'UDI est grande, plus les analyses sont fréquentes."
   },
   {
    "q": "Un échantillon pour analyse bactériologique doit être :",
    "choices": [
     "Conservé 1 semaine à température ambiante",
     "Analysé sous 24h, conservé à 5°C",
     "Congelé",
     "Exposé à la lumière"
    ],
    "correct": 1,
    "expl": "Échantillon bactério : flacon stérile, conservation 5±3°C, analyse sous 24h. Neutralisation du chlore (thiosulfate) dans le flacon."
   },
   {
    "q": "La chromatographie ionique sert à doser :",
    "choices": [
     "Les bactéries",
     "Les anions (nitrates, sulfates, chlorures, fluorures)",
     "La turbidité",
     "Le pH"
    ],
    "correct": 1,
    "expl": "Chromatographie ionique : séparation et dosage des anions (NO₃⁻, SO₄²⁻, Cl⁻, F⁻) et cations. Précise pour le contrôle des ions majeurs."
   },
   {
    "q": "L'ICP-MS est une méthode pour doser :",
    "choices": [
     "Les métaux et éléments traces",
     "Le pH",
     "La DBO₅",
     "La turbidité"
    ],
    "correct": 0,
    "expl": "ICP-MS (couplage plasma-spectrométrie de masse) : dosage des métaux et éléments traces (Pb, As, Cd, Ni...) à très faibles concentrations (µg/L, ng/L)."
   },
   {
    "q": "La limite de qualité pour le plomb dans l'eau potable est :",
    "choices": [
     "50 µg/L",
     "25 µg/L",
     "10 µg/L",
     "5 µg/L"
    ],
    "correct": 2,
    "expl": "Plomb : 10 µg/L (depuis 2013). Origine : anciens branchements en plomb. Programme de remplacement. Risque de saturnisme, surtout chez l'enfant."
   },
   {
    "q": "Le PSE (Plan de Sécurité de l'Eau) repose sur la méthode :",
    "choices": [
     "ISO 9001",
     "HACCP appliquée à l'eau",
     "Six Sigma",
     "Lean"
    ],
    "correct": 1,
    "expl": "PSE : approche HACCP (analyse des dangers, points critiques) appliquée de la ressource au robinet. Obligatoire pour grandes UDI (directive 2020/2184)."
   },
   {
    "q": "Les PFAS sont analysés par :",
    "choices": [
     "Turbidimétrie",
     "LC-MS/MS (chromatographie liquide-spectrométrie de masse)",
     "pH-métrie",
     "Conductimétrie"
    ],
    "correct": 1,
    "expl": "PFAS : LC-MS/MS, seuils très bas (ng/L). Limite EP : 0,1 µg/L pour la somme de 20 PFAS (2026). Analyse complexe et coûteuse."
   },
   {
    "q": "Un dépassement de limite de qualité impose :",
    "choices": [
     "Rien",
     "Une information de l'ARS et des mesures correctives",
     "La fermeture définitive",
     "Une amende automatique"
    ],
    "correct": 1,
    "expl": "Dépassement : information ARS, recherche de cause, mesures correctives, information des usagers si risque sanitaire. Restriction d'usage possible."
   },
   {
    "q": "La référence de qualité diffère de la limite de qualité car :",
    "choices": [
     "Elle est plus stricte",
     "Elle n'a pas de portée sanitaire directe mais indique un dysfonctionnement",
     "Elle est facultative",
     "Elle concerne les eaux usées"
    ],
    "correct": 1,
    "expl": "Limite de qualité : valeur sanitaire impérative. Référence de qualité : indicateur de bon fonctionnement (ex : fer, chlorures), sans risque sanitaire direct."
   },
   {
    "q": "Le prélèvement en un point représentatif du réseau évite :",
    "choices": [
     "Les frais d'analyse",
     "Les biais liés à la stagnation ou au point de prélèvement",
     "La chloration",
     "La filtration"
    ],
    "correct": 1,
    "expl": "Le point de prélèvement doit être représentatif : purge préalable, robinet adapté. Pour le plomb : prélèvement après stagnation (RDT - random daytime)."
   },
   {
    "q": "Le paramètre \"turbidité\" est mesuré :",
    "choices": [
     "En laboratoire uniquement",
     "En continu en sortie de station et ponctuellement",
     "Une fois par an",
     "Jamais"
    ],
    "correct": 1,
    "expl": "Turbidité : mesurée en continu en sortie de filtration (alerte Cryptosporidium si > 1 NTU) et lors des contrôles. Paramètre clé de l'efficacité du traitement."
   },
   {
    "q": "L'accréditation COFRAC d'un laboratoire garantit :",
    "choices": [
     "Le prix le plus bas",
     "La compétence technique et la fiabilité des analyses",
     "La rapidité uniquement",
     "La proximité géographique"
    ],
    "correct": 1,
    "expl": "COFRAC (norme ISO 17025) : accréditation des laboratoires d'analyse. Obligatoire pour le contrôle sanitaire officiel. Garantit la fiabilité des résultats."
   },
   {
    "q": "Le bilan 24h en entrée/sortie de STEU sert à :",
    "choices": [
     "Mesurer le pH du réseau",
     "Évaluer les rendements épuratoires",
     "Compter les abonnés",
     "Mesurer la pression"
    ],
    "correct": 1,
    "expl": "Bilan 24h (échantillon moyen proportionnel au débit) : mesure des charges entrée/sortie → rendements DBO₅, DCO, MES, N, P. Base de l'autosurveillance STEU."
   },
   {
    "q": "Un échantillon moyen 24h est dit :",
    "choices": [
     "Ponctuel",
     "Composite proportionnel au débit",
     "Instantané",
     "Hebdomadaire"
    ],
    "correct": 1,
    "expl": "Échantillon composite asservi au débit : prélèvements réguliers proportionnels au débit sur 24h → représentatif de la charge réelle. Préleveur automatique réfrigéré."
   },
   {
    "q": "La conductivité d'une eau renseigne sur :",
    "choices": [
     "La teneur en bactéries",
     "La minéralisation globale (sels dissous)",
     "La turbidité",
     "La couleur"
    ],
    "correct": 1,
    "expl": "Conductivité ∝ minéralisation. Eau de montagne : 50-200 µS/cm. Eau calcaire : 400-800 µS/cm. Indicateur rapide d'une pollution ou d'une intrusion saline."
   },
   {
    "q": "Le contrôle des PFAS devient obligatoire en France :",
    "choices": [
     "En 2030",
     "En 2026",
     "En 2020",
     "Jamais"
    ],
    "correct": 1,
    "expl": "PFAS : contrôle obligatoire dès 2026 (transposition directive 2020/2184). Limite 0,1 µg/L pour 20 PFAS. Campagnes de mesure déjà en cours dans les ARS."
   },
   {
    "q": "Une analyse de \"première adduction\" est réalisée :",
    "choices": [
     "Chaque jour",
     "Avant la mise en service d'un nouveau captage",
     "Tous les 10 ans",
     "Jamais"
    ],
    "correct": 1,
    "expl": "Analyse de première adduction : complète, avant autorisation d'exploitation d'une nouvelle ressource. Vérifie l'aptitude de l'eau brute à être potabilisée."
   },
   {
    "q": "Le registre sanitaire d'une UDI doit être :",
    "choices": [
     "Détruit chaque année",
     "Tenu à jour et conservé",
     "Facultatif",
     "Public sans restriction"
    ],
    "correct": 1,
    "expl": "Registre sanitaire : traçabilité des contrôles, incidents, interventions. Tenu à jour par l'exploitant, consultable par l'ARS. Obligation réglementaire."
   },
   {
    "q": "Les résultats du contrôle sanitaire sont publics sur :",
    "choices": [
     "Légifrance",
     "SISE-Eaux / orobnat.sante.gouv.fr",
     "Le BRGM",
     "Météo-France"
    ],
    "correct": 1,
    "expl": "SISE-Eaux (orobnat.sante.gouv.fr) : résultats du contrôle sanitaire EP par commune, accessibles au public. Transparence sur la qualité de l'eau distribuée."
   }
  ]
 },
 {
  "id": "ue3-1",
  "theme": "UE3",
  "themeName": "Eau potable",
  "ico": "🏡",
  "color": "#166038",
  "colorl": "#E2F0E8",
  "title": "Filières ANC et réglementation",
  "desc": "Arrêté 2009 · FTE · Filières · SPANC · Distances",
  "questions": [
   {
    "q": "Le volume minimum d'une fosse toutes eaux (FTE) pour un logement de 4 pièces principales est :",
    "choices": [
     "1 500 L",
     "2 000 L",
     "3 000 L",
     "5 000 L"
    ],
    "correct": 2,
    "expl": "Arrêté 07/09/2009 : V = 3 000 L pour ≤ 5 pièces principales. +1 000 L par pièce au-delà. 4 pp → 3 000 L."
   },
   {
    "q": "La fosse septique (qui ne reçoit que les eaux vannes) est :",
    "choices": [
     "Autorisée pour les nouvelles constructions",
     "Interdite à neuf depuis l'arrêté du 07/09/2009",
     "Obligatoire en zone rurale",
     "Autorisée si le logement a moins de 3 pièces"
    ],
    "correct": 1,
    "expl": "La fosse septique (eaux vannes seules) est interdite à neuf depuis l'Arrêté 07/09/2009. Seule la FTE (toutes eaux) est autorisée."
   },
   {
    "q": "La distance minimale entre une installation ANC et un puits AEP est de :",
    "choices": [
     "5 m",
     "10 m",
     "35 m",
     "100 m"
    ],
    "correct": 2,
    "expl": "Arrêté 07/09/2009 : 35 m minimum entre filière d'épandage et captage AEP. 5 m des habitations. 3 m des limites de parcelle."
   },
   {
    "q": "La perméabilité K adaptée aux tranchées d'épandage est :",
    "choices": [
     "K < 1 mm/min",
     "K = 1 à 15 mm/min",
     "K > 15 mm/min",
     "K quelconque"
    ],
    "correct": 1,
    "expl": "K = 1-15 mm/min : tranchées d'épandage adaptées. K < 1 : filière drainée. K > 15 : sol trop perméable → filière drainée avec rejet."
   },
   {
    "q": "Le SPANC est obligatoire dans toutes les communes depuis :",
    "choices": [
     "1992 (Loi sur l'Eau)",
     "2006 (LEMA)",
     "2009 (Arrêté ANC)",
     "2015 (NOTRe)"
    ],
    "correct": 1,
    "expl": "LEMA 2006 : SPANC obligatoire dans toutes les communes avant 2013 (délai prévu). Contrôle conception, réalisation, bon fonctionnement."
   },
   {
    "q": "La ventilation primaire d'une installation ANC consiste en :",
    "choices": [
     "Un extracteur électrique sur la FTE",
     "Un prolongement de la chute principale au-dessus du faîtage",
     "Un tuyau de ventilation dans la FTE",
     "Une mise à l'air libre de la FTE"
    ],
    "correct": 1,
    "expl": "Ventilation primaire : prolongement Ø100 mm de la chute principale (WC) au-dessus du faîtage (0,4 m min). OBLIGATOIRE. DTU 60.11."
   },
   {
    "q": "La surface d'un filtre planté de roseaux à flux vertical (FPRv) est de :",
    "choices": [
     "1 m²/EH",
     "3 m²/EH",
     "5 m²/EH",
     "10 m²/EH"
    ],
    "correct": 2,
    "expl": "FPRv : 5 m²/EH (monoétage). FPRh (horizontal) : 3 m²/EH. Alimentation en bâchées. Roseaux : Phragmites australis."
   },
   {
    "q": "La fréquence de vidange légale minimale d'une FTE est de :",
    "choices": [
     "1 fois par an",
     "2 fois par an",
     "Tous les 4 ans maximum",
     "Tous les 10 ans"
    ],
    "correct": 2,
    "expl": "Arrêté 09/2009 : vidange avant que les boues occupent 50% du volume utile. En pratique : tous les 4 ans est le maximum légal."
   },
   {
    "q": "La non-conformité avec danger sanitaire impose une réhabilitation dans :",
    "choices": [
     "1 mois",
     "6 mois",
     "1 an",
     "4 ans"
    ],
    "correct": 2,
    "expl": "NC avec danger (contact EP ou baignade) : 1 an. NC sans danger : 4 ans. Arrêté 07/09/2009 modifié 2021 et 2024."
   },
   {
    "q": "Une microstation d'épuration ANC doit être agréée selon :",
    "choices": [
     "DTU 64.1",
     "NF EN 12566-3",
     "Arrêté de 2009 uniquement",
     "NF EN 1825"
    ],
    "correct": 1,
    "expl": "NF EN 12566-3 : norme d'agrément CE pour microstations. Marquage CE obligatoire. Technologies : SBR, filtre bactérien, FPR."
   },
   {
    "q": "Le refus d'accès au SPANC entraîne une majoration de la redevance de :",
    "choices": [
     "50%",
     "100%",
     "200%",
     "400%"
    ],
    "correct": 3,
    "expl": "Loi Climat 2021 (art. 163) : refus d'accès au SPANC → majoration redevance ANC jusqu'à +400% (anciennement 100% LEMA)."
   },
   {
    "q": "Le test Porchet mesure :",
    "choices": [
     "La résistance mécanique du sol",
     "La perméabilité du sol par mesure de la vitesse d'infiltration",
     "Le pH du sol",
     "La teneur en argile"
    ],
    "correct": 1,
    "expl": "Test Porchet : trou de 30×30 cm, saturation initiale, mesure abaissement niveau d'eau. K (mm/min) = ΔV/(S×Δt). DTU 64.1."
   },
   {
    "q": "Le tertre d'infiltration est utilisé quand :",
    "choices": [
     "Le sol est très perméable",
     "La nappe est proche de la surface (affleurante)",
     "Le terrain est en forte pente",
     "Le logement a plus de 10 pièces"
    ],
    "correct": 1,
    "expl": "Tertre : filière surélevée 0,5-1,5 m. Utilisé quand nappe < 0,7 m ou sol imperméable. Sol importé (sable 0,25-2 mm)."
   },
   {
    "q": "La charge hydraulique d'un filtre à sable drainé est de :",
    "choices": [
     "0,04 m/j",
     "0,08 m/j",
     "0,10 m/j",
     "0,20 m/j"
    ],
    "correct": 2,
    "expl": "Filtre à sable drainé : charge hydraulique = 0,10 m/j. ND (non drainé) : 0,08 m/j. Tranchées : 0,06 m/j. Tertre : 0,12 m/j."
   },
   {
    "q": "Le rapport de contrôle SPANC est obligatoire lors de la vente immobilière depuis :",
    "choices": [
     "2006",
     "2009",
     "2012",
     "2015"
    ],
    "correct": 2,
    "expl": "Décret 2012-274 : rapport SPANC < 3 ans obligatoire dans le DDT lors des ventes. Si NC : acheteur a 1 an pour se mettre en conformité."
   },
   {
    "q": "L'Éco-PTZ pour la réhabilitation d'une installation ANC peut financer jusqu'à :",
    "choices": [
     "3 000 €",
     "10 000 €",
     "30 000 €",
     "50 000 €"
    ],
    "correct": 1,
    "expl": "Éco-PTZ ANC : jusqu'à 10 000 € à taux zéro. Sur 15 ans. Artisan RGE obligatoire. Résidence principale uniquement."
   },
   {
    "q": "La TVA réduite de 5,5% s'applique aux travaux ANC sur un logement de plus de :",
    "choices": [
     "1 an",
     "2 ans",
     "5 ans",
     "10 ans"
    ],
    "correct": 1,
    "expl": "TVA 5,5% sur rénovation : logement achevé depuis > 2 ans. Applicable à la réhabilitation ANC, main-d'œuvre + fournitures."
   },
   {
    "q": "Un bac dégraisseur est obligatoire si la cuisine est située à plus de :",
    "choices": [
     "1 m de la FTE",
     "5 m de la FTE",
     "10 m de la FTE",
     "20 m de la FTE"
    ],
    "correct": 2,
    "expl": "Bac dégraisseur recommandé (parfois imposé par SPANC) si cuisine > 10 m de la FTE ou cuisine professionnelle. NF EN 1825."
   },
   {
    "q": "La production de biogaz (CH₄ + CO₂) dans une fosse toutes eaux est un processus :",
    "choices": [
     "Aérobie",
     "Anaérobie",
     "Photosynthétique",
     "Chimique (non biologique)"
    ],
    "correct": 1,
    "expl": "Digestion anaérobie dans la FTE : fermentation méthanique des MO. Produit biogaz (60% CH₄, 40% CO₂) → ventilation OBLIGATOIRE."
   },
   {
    "q": "L'arrêté du 10/07/2024 impose pour les microstations un contrat d'entretien d'une durée minimale de :",
    "choices": [
     "6 mois",
     "1 an",
     "2 ans",
     "5 ans"
    ],
    "correct": 2,
    "expl": "Arrêté 10/07/2024 (en vigueur 01/01/2025) : contrat entretien microstation ≥ 2 ans. Auparavant : annuel. Autosurveillance annuelle obligatoire."
   }
  ]
 },
 {
  "id": "ue3-2",
  "theme": "UE3",
  "themeName": "Eau potable",
  "ico": "🏭",
  "color": "#166038",
  "colorl": "#E2F0E8",
  "title": "Traitement des eaux usées (STEU)",
  "desc": "Boues activées · Âge des boues · Nitrification · Dimensionnement",
  "questions": [
   {
    "q": "L'âge des boues minimum pour assurer la nitrification en hiver (T < 10°C) est :",
    "choices": [
     "5 jours",
     "8 jours",
     "15 jours",
     "25 jours"
    ],
    "correct": 2,
    "expl": "θc ≥ 15 j en hiver pour nitrification complète. En été (T > 15°C) : θc ≥ 10 j. Dénitrification : θc ≥ 25 j."
   },
   {
    "q": "La charge massique des boues activées à faible charge est :",
    "choices": [
     "Cm > 0,20 kg DBO₅/(kg MVS.j)",
     "Cm = 0,07-0,20 kg DBO₅/(kg MVS.j)",
     "Cm < 0,07 kg DBO₅/(kg MVS.j)",
     "Cm < 0,01 kg DBO₅/(kg MVS.j)"
    ],
    "correct": 2,
    "expl": "Faible charge : Cm < 0,07. Moyenne charge : 0,07-0,20. Forte charge : > 0,20. Faible charge → nitrification assurée."
   },
   {
    "q": "La production de boues (MVS) par la formule de Lawrence-McCarty est :",
    "choices": [
     "Px = Y × L_DBO₅",
     "Px = L_DBO₅ / Y",
     "Px = Y × L_DBO₅ / (1 + kd × θc)",
     "Px = kd × L_DBO₅ × θc"
    ],
    "correct": 2,
    "expl": "Px = Y × L_DBO₅ / (1 + kd × θc). Y ≈ 0,6 (synthèse). kd ≈ 0,05 j⁻¹ (endogène). Plus θc est grand, moins on produit de boues."
   },
   {
    "q": "Le bassin d'aération d'une STEU à boues activées contient une concentration MES de :",
    "choices": [
     "0,5-1 g/L",
     "2-4 g/L",
     "8-15 g/L (MBR)",
     "> 20 g/L"
    ],
    "correct": 1,
    "expl": "Boues activées classiques : MES = 2-4 g/L. MBR (Membrane Bioreactor) : MES = 8-15 g/L → bassin plus compact."
   },
   {
    "q": "L'autosurveillance d'une STEU de 5 000 EH impose a minima :",
    "choices": [
     "Un contrôle annuel",
     "Un contrôle mensuel",
     "Un contrôle hebdomadaire",
     "Un contrôle continu"
    ],
    "correct": 1,
    "expl": "Arrêté 22/06/2007 : fréquence selon EH. 5000 EH : mensuelle au minimum pour DBO₅, DCO, MES. Débit : en continu."
   },
   {
    "q": "Le clarificateur secondaire (décanteur) d'une STEU sépare :",
    "choices": [
     "Le sable de l'eau brute",
     "Les boues activées de l'eau épurée",
     "Les graisses en surface",
     "Les matières solides grossières"
    ],
    "correct": 1,
    "expl": "Clarificateur : séparation eau traitée / boues par décantation. Charge surfacique : 0,5-1 m/h (temps de pluie) à 1-2 m/h (temps sec)."
   },
   {
    "q": "Le SBR (Sequencing Batch Reactor) est un procédé :",
    "choices": [
     "Continu en 3 bassins",
     "Discontinu séquentiel dans un seul bassin",
     "Semi-continu avec 2 bassins alternants",
     "Continu avec recirculation"
    ],
    "correct": 1,
    "expl": "SBR : un seul bassin. Cycles séquentiels : remplissage → aération → décantation → vidange → repos. Flexible et compact. Utilisé en microstation ANC."
   },
   {
    "q": "Le traitement tertiaire d'une STEU peut inclure :",
    "choices": [
     "Le dégrillage",
     "La déphosphatation chimique ou biologique",
     "La digestion des boues",
     "La déshydratation"
    ],
    "correct": 1,
    "expl": "Traitement tertiaire : élimination poussée P, N, MES, micropolluants. Déphosphatation : précipitation FeCl₃ ou Al₂(SO₄)₃ ou biologique."
   },
   {
    "q": "La digestion anaérobie des boues produit principalement :",
    "choices": [
     "Du CO₂ uniquement",
     "Du biogaz (60% CH₄ + 40% CO₂)",
     "De l'azote gazeux",
     "De l'hydrogène sulfuré"
    ],
    "correct": 1,
    "expl": "Digestion anaérobie : 60% CH₄ + 40% CO₂ ≈ biogaz. 1 m³ biogaz ≈ 6 kWh. Valorisation en électricité et chaleur (cogénération)."
   },
   {
    "q": "Le dessableur d'une STEU retient les particules de diamètre :",
    "choices": [
     "< 1 µm",
     "> 200 µm (sable)",
     "Entre 1 et 50 µm",
     "Tout ce qui flotte"
    ],
    "correct": 1,
    "expl": "Dessableur : retient sable (d > 200 µm, Vs ≈ 22 mm/s) et graviers. Vitesse horizontale : 0,15-0,30 m/s. Surface : Q/Vs."
   },
   {
    "q": "Le dégraisseur/déshuileur fonctionne par :",
    "choices": [
     "Décantation vers le fond",
     "Flottation des graisses à la surface (densité < eau)",
     "Filtration membranaire",
     "Adsorption sur charbon actif"
    ],
    "correct": 1,
    "expl": "Graisses : ρ < 1000 kg/m³ → flottation. Aide possible : injection d'air (flottation à air dissous DAF). Raclage en surface."
   },
   {
    "q": "La REUT (Réutilisation Eaux Usées Traitées) est encadrée par :",
    "choices": [
     "La LEMA 2006",
     "L'arrêté de 2007",
     "Le règlement UE 2020/741",
     "La DCE 2000"
    ],
    "correct": 2,
    "expl": "Règlement UE 2020/741 (en vigueur juin 2023) : 4 classes A, B, C, D selon usage. Classe A (le plus strict) : E. coli < 10 UFC/100 mL."
   },
   {
    "q": "Les microstations à culture libre (boues activées) nécessitent :",
    "choices": [
     "Aucune énergie",
     "Électricité pour l'aération (150-300 kWh/an/EH)",
     "Uniquement du méthanol",
     "Un entretien mensuel minimum"
    ],
    "correct": 1,
    "expl": "Microstation BA : aération électrique. 150-300 kWh/an. Contrat entretien 2 ans minimum (arrêté 2024). Rendement DBO₅ > 90%."
   },
   {
    "q": "La DCO sort d'un bon traitement secondaire à :",
    "choices": [
     "< 25 mg/L",
     "< 50 mg/L",
     "< 125 mg/L",
     "< 200 mg/L"
    ],
    "correct": 2,
    "expl": "Arrêté 22/06/2007 : DCO < 125 mg/L en rejet (ou rendement > 75%). MES < 35 mg/L. DBO₅ < 25 mg/L."
   },
   {
    "q": "Le phosphore est éliminé biologiquement par :",
    "choices": [
     "Les bactéries nitrifiantes",
     "Les bactéries déphosphatantes (Acinetobacter) via cycles anoxie/aérobie",
     "La dénitrification",
     "L'hydrolyse enzymatique"
    ],
    "correct": 1,
    "expl": "Déphosphatation biologique (BPR) : bactéries PAO (Acinetobacter) accumulent P en conditions alternées anaérobie/aérobie. Élimination : 60-80%."
   },
   {
    "q": "L'indice de Mohlman (IB ou SVI) mesure :",
    "choices": [
     "La charge en DBO₅ des boues",
     "L'aptitude à la décantation des boues (volume de 1g de boues après 30 min)",
     "La teneur en MES de l'effluent",
     "Le pH des boues"
    ],
    "correct": 1,
    "expl": "SVI (Sludge Volume Index) = volume boues (mL) / MES (mg/L). Boues bien décantantes : SVI < 100. Problème décantation : SVI > 150."
   },
   {
    "q": "La production de boues primaires (décanteur primaire) est d'environ :",
    "choices": [
     "10 g MS/EH/j",
     "40-50 g MS/EH/j",
     "100 g MS/EH/j",
     "200 g MS/EH/j"
    ],
    "correct": 1,
    "expl": "Boues primaires : 40-50 g MS/EH/j (sédimentation des MES en suspension). Boues secondaires (BA) : 30-40 g MS/EH/j."
   },
   {
    "q": "L'H₂S (acide sulfhydrique) dans les effluents EU provoque :",
    "choices": [
     "La dé-chloration",
     "La corrosion biogénique du béton par les bactéries thiobacilles",
     "L'entartrage des conduites",
     "La nitrification"
    ],
    "correct": 1,
    "expl": "H₂S → oxydation par Thiobacillus → H₂SO₄ → corrosion acide du béton (corrosion biogénique). Prévention : ventilation, béton sulfato-résistant."
   },
   {
    "q": "Le coefficient de pointe en temps de pluie (coefficient TTP) pour le dimensionnement de la STEU est :",
    "choices": [
     "Cp (TPS) × 2",
     "3 × Qmoy (temps sec) maximum pour les filtres biologiques",
     "Le débit de temps sec uniquement",
     "Qmoy × 10"
    ],
    "correct": 1,
    "expl": "Débit TTP : généralement limité à 3× Qmoy temps sec pour les ouvrages biologiques. L'excédent est by-passé vers le clarificateur ou un bassin tampon."
   },
   {
    "q": "Un MBR (Membrane BioReactor) produit un rejet :",
    "choices": [
     "Similaire à un traitement secondaire classique",
     "Avec DBO₅ < 5 mg/L, MES < 1 mg/L → compatible REUT",
     "Nécessitant un traitement tertiaire systématique",
     "Non réglementé"
    ],
    "correct": 1,
    "expl": "MBR : ultrafiltration intégrée → DBO₅ < 5 mg/L, MES < 1 mg/L, élimination bactéries. Compatible REUT classe A après désinfection."
   }
  ]
 },
 {
  "id": "ue3-3",
  "theme": "UE3",
  "themeName": "Eau potable",
  "ico": "📋",
  "color": "#166038",
  "colorl": "#E2F0E8",
  "title": "SPANC et contrôles ANC",
  "desc": "Missions SPANC · Contrôles · Redevances · Vente immobilière",
  "questions": [
   {
    "q": "Le SPANC est obligatoire dans toutes les communes depuis :",
    "choices": [
     "1992",
     "2006 (LEMA, délai 2013)",
     "2009",
     "2015"
    ],
    "correct": 1,
    "expl": "LEMA 2006 : création du SPANC obligatoire (mise en place avant fin 2012). Contrôle des installations ANC. Service public à caractère industriel et commercial (SPIC)."
   },
   {
    "q": "Les deux missions obligatoires du SPANC sont :",
    "choices": [
     "Construction et vidange",
     "Contrôle de conception/réalisation (neuf) et contrôle de bon fonctionnement (existant)",
     "Financement et travaux",
     "Vente et achat"
    ],
    "correct": 1,
    "expl": "SPANC : 1) contrôle conception + bonne exécution (installations neuves/réhabilitées), 2) contrôle périodique de bon fonctionnement et d'entretien (existant)."
   },
   {
    "q": "La périodicité maximale du contrôle de bon fonctionnement SPANC est :",
    "choices": [
     "Tous les ans",
     "Tous les 10 ans maximum",
     "Tous les 20 ans",
     "Une seule fois"
    ],
    "correct": 1,
    "expl": "Contrôle périodique : au maximum tous les 10 ans (la commune fixe la fréquence, souvent 6-8 ans). Arrêté du 27/04/2012 relatif aux modalités de contrôle."
   },
   {
    "q": "Lors d'une vente immobilière, le rapport de contrôle SPANC doit dater de moins de :",
    "choices": [
     "1 an",
     "3 ans",
     "5 ans",
     "10 ans"
    ],
    "correct": 1,
    "expl": "Vente : diagnostic ANC < 3 ans annexé au DDT (dossier de diagnostic technique). Si non conforme, l'acquéreur a 1 an après la vente pour mettre en conformité."
   },
   {
    "q": "Le délai de mise en conformité après vente d'un bien avec ANC non conforme est :",
    "choices": [
     "1 mois",
     "6 mois",
     "1 an",
     "4 ans"
    ],
    "correct": 2,
    "expl": "Après acquisition : 1 an pour réaliser les travaux de mise en conformité (alors que pour un propriétaire en place sans vente : 4 ans, sauf danger sanitaire)."
   },
   {
    "q": "Une installation ANC sans danger sanitaire jugée non conforme doit être réhabilitée sous :",
    "choices": [
     "1 an",
     "4 ans",
     "10 ans",
     "Pas d'obligation"
    ],
    "correct": 1,
    "expl": "NC sans danger : 4 ans pour réhabiliter. NC avec danger sanitaire ou risque environnemental avéré : 1 an. Arrêté du 27/04/2012 modifié."
   },
   {
    "q": "La redevance SPANC est :",
    "choices": [
     "Un impôt local",
     "La contrepartie du service de contrôle, payée par l'usager",
     "Gratuite",
     "Payée par l'État"
    ],
    "correct": 1,
    "expl": "Redevance SPANC : finance le service (SPIC, équilibre budgétaire obligatoire). Distincte par type de contrôle. Pas d'ANC raccordé = pas de redevance assainissement collectif."
   },
   {
    "q": "Le refus de l'accès au SPANC pour un contrôle entraîne :",
    "choices": [
     "Une amende pénale immédiate",
     "Une majoration de la redevance (jusqu'à 400%)",
     "La démolition",
     "Rien"
    ],
    "correct": 1,
    "expl": "Loi Climat 2021 : refus d'accès → astreinte / majoration de redevance jusqu'à 400% (auparavant 100% sous la LEMA). Le contrôle reste obligatoire."
   },
   {
    "q": "Le zonage d'assainissement délimite notamment les zones :",
    "choices": [
     "Constructibles",
     "D'assainissement collectif et d'assainissement non collectif",
     "Inondables",
     "Agricoles"
    ],
    "correct": 1,
    "expl": "Zonage d'assainissement (art. L2224-10 CGCT) : délimite zones AC / ANC après enquête publique. Délibéré par le conseil municipal ou l'EPCI compétent."
   },
   {
    "q": "Le contrôle de conception d'une installation ANC neuve est réalisé :",
    "choices": [
     "Après les travaux",
     "Avant les travaux, sur dossier (étude de filière)",
     "Pendant la vente",
     "Tous les 10 ans"
    ],
    "correct": 1,
    "expl": "Contrôle de conception : examen du projet (étude de sol et de filière) AVANT travaux. Puis contrôle de bonne exécution avant remblaiement. Avis du SPANC requis."
   },
   {
    "q": "L'étude de sol à la parcelle pour une installation ANC détermine :",
    "choices": [
     "Le prix du terrain",
     "La perméabilité (test Porchet) et l'aptitude des sols à l'épandage",
     "La surface habitable",
     "Le nombre d'habitants"
    ],
    "correct": 1,
    "expl": "Étude de filière : sondages, test de perméabilité (Porchet), niveau de nappe, pente. Détermine la filière adaptée (tranchées, filtre à sable, tertre, microstation)."
   },
   {
    "q": "Le rapport de visite SPANC doit mentionner :",
    "choices": [
     "Le prix de la maison",
     "La conformité, les défauts, les recommandations et les délais de travaux",
     "Le nom des voisins",
     "La valeur locative"
    ],
    "correct": 1,
    "expl": "Rapport SPANC : évaluation de conformité, liste des défauts (avec/sans danger), recommandations d'entretien, délais de mise en conformité éventuels."
   },
   {
    "q": "Un usager peut être exonéré de la redevance de contrôle périodique s'il :",
    "choices": [
     "Refuse le contrôle",
     "Possède une installation neuve sous garantie de bon fonctionnement",
     "Vend sa maison",
     "Habite en ville"
    ],
    "correct": 1,
    "expl": "Une installation neuve récemment contrôlée (conception + exécution) n'est pas immédiatement re-contrôlée. La périodicité court à partir du contrôle initial."
   },
   {
    "q": "Le SPANC peut être géré :",
    "choices": [
     "Uniquement en régie communale",
     "En régie, intercommunalité, ou délégation de service public",
     "Uniquement par l'État",
     "Uniquement par une entreprise privée"
    ],
    "correct": 1,
    "expl": "SPANC : régie communale, transfert à un EPCI (fréquent), syndicat, ou DSP. La compétence ANC peut être communale ou intercommunale (à la différence de l'AC, transférée)."
   },
   {
    "q": "L'entretien (vidange) d'une fosse toutes eaux doit être réalisé par :",
    "choices": [
     "N'importe qui",
     "Une entreprise agréée par le préfet",
     "Le SPANC",
     "La commune"
    ],
    "correct": 1,
    "expl": "Vidange : par un vidangeur agréé préfecture (traçabilité des matières de vidange via bordereau). L'usager conserve les justificatifs pour le contrôle SPANC."
   },
   {
    "q": "En cas de non-réalisation des travaux de mise en conformité dans les délais, le maire peut :",
    "choices": [
     "Ne rien faire",
     "Procéder d'office aux travaux aux frais de l'usager après mise en demeure",
     "Démolir la maison",
     "Augmenter les impôts"
    ],
    "correct": 1,
    "expl": "Pouvoir de police du maire (art. L2212-2 CGCT) : après mise en demeure, exécution d'office possible aux frais du propriétaire. Recours rare mais prévu par la loi."
   },
   {
    "q": "Le contrôle SPANC d'une installation existante évalue en priorité :",
    "choices": [
     "L'esthétique",
     "Les risques sanitaires et environnementaux",
     "La couleur des regards",
     "Le confort"
    ],
    "correct": 1,
    "expl": "Priorité : risque pour la santé des personnes (contact eaux usées, pollution puits) et l'environnement (rejet en milieu sensible). Hiérarchise l'urgence des travaux."
   },
   {
    "q": "La compétence ANC, contrairement à l'eau potable et l'AC, peut rester :",
    "choices": [
     "À l'État",
     "Communale (non obligatoirement transférée à l'EPCI)",
     "À la région",
     "À l'Agence de l'eau"
    ],
    "correct": 1,
    "expl": "NOTRe : eau potable + AC transférés obligatoirement aux EPCI (2020). L'ANC peut rester communale ou être transférée. Beaucoup de SPANC sont intercommunaux par choix."
   },
   {
    "q": "Le financement des travaux ANC des particuliers peut être facilité par :",
    "choices": [
     "Le SPANC directement",
     "L'Éco-PTZ, les aides des Agences de l'eau et la TVA réduite",
     "L'État uniquement",
     "Aucune aide"
    ],
    "correct": 1,
    "expl": "Aides : Éco-PTZ (jusqu'à 10 000 €), subventions Agences de l'eau (selon programme), TVA 5,5%, parfois opérations groupées portées par le SPANC. Variable selon territoire."
   },
   {
    "q": "Le bordereau de suivi des matières de vidange (BSMV) sert à :",
    "choices": [
     "Facturer l'eau",
     "Tracer la destination des boues de vidange jusqu'à leur traitement",
     "Mesurer la consommation",
     "Contrôler le compteur"
    ],
    "correct": 1,
    "expl": "BSMV : traçabilité réglementaire des matières de vidange (volume, origine, destination/filière de traitement agréée). Garantit l'élimination conforme, évite les dépôts sauvages."
   }
  ]
 },
 {
  "id": "ue3-4",
  "theme": "UE3",
  "themeName": "Eau potable",
  "ico": "🏙️",
  "color": "#166038",
  "colorl": "#E2F0E8",
  "title": "Assainissement collectif et réseaux",
  "desc": "Collecteurs · Postes de relevage · Déversoirs · Autosurveillance",
  "questions": [
   {
    "q": "Un réseau d'assainissement séparatif comporte :",
    "choices": [
     "Une seule conduite",
     "Deux réseaux distincts : eaux usées et eaux pluviales",
     "Trois réseaux",
     "Un réseau et un fossé"
    ],
    "correct": 1,
    "expl": "Séparatif : un réseau EU (vers STEU) + un réseau EP (vers milieu/bassin). Standard pour les zones nouvelles. Évite la dilution et les déversements en temps de pluie."
   },
   {
    "q": "Un réseau unitaire pose problème en temps de pluie à cause :",
    "choices": [
     "Du gel",
     "Des déversements d'orage (DO) qui rejettent un mélange EU+EP au milieu",
     "De la sécheresse",
     "De la corrosion"
    ],
    "correct": 1,
    "expl": "Unitaire : EU + EP mélangées. En pluie, les déversoirs d'orage rejettent l'excédent (dilué) au milieu pour protéger la STEU. Source de pollution des cours d'eau."
   },
   {
    "q": "L'autosurveillance des déversoirs d'orage est obligatoire si le débit transité dépasse :",
    "choices": [
     "10 m³/h",
     "120 m³/h (soit ~2000 EH)",
     "1000 m³/h",
     "Aucun seuil"
    ],
    "correct": 1,
    "expl": "Arrêté 21/07/2015 : autosurveillance des DO si charge > 120 kg DBO₅/j (~2000 EH) ou débit > 120 m³/h. Mesure des volumes et durées de déversement. Bilan annuel."
   },
   {
    "q": "Un poste de relevage est nécessaire quand :",
    "choices": [
     "Le terrain est plat",
     "L'écoulement gravitaire n'est plus possible (point bas)",
     "Il pleut",
     "Le réseau est neuf"
    ],
    "correct": 1,
    "expl": "Poste de relevage : pompe les EU d'un point bas vers un point haut quand la pente gravitaire est insuffisante. Équipé de 2 pompes (secours), détection de niveau, alarme."
   },
   {
    "q": "La vitesse minimale d'autocurage dans un collecteur EU est :",
    "choices": [
     "0,3 m/s",
     "0,6 m/s",
     "1,2 m/s",
     "2 m/s"
    ],
    "correct": 1,
    "expl": "V ≥ 0,60 m/s à débit de pointe pour éviter les dépôts. Pente minimale 3‰. Au-delà de 4 m/s : risque d'abrasion. NF EN 752, CCTG Fascicule 70."
   },
   {
    "q": "L'inspection télévisée (ITV) d'un collecteur permet de :",
    "choices": [
     "Mesurer le débit",
     "Détecter fissures, racines, contre-pentes et infiltrations",
     "Doser le chlore",
     "Compter les branchements"
    ],
    "correct": 1,
    "expl": "ITV : caméra autotractée filme l'intérieur. Détecte défauts structurels (fissures, déboîtements) et fonctionnels (dépôts, racines, contre-pentes). Codage selon NF EN 13508."
   },
   {
    "q": "Les eaux claires parasites (ECP) dans un réseau EU sont :",
    "choices": [
     "De l'eau potable",
     "Des eaux d'infiltration (nappe) ou de captage indésirables qui surchargent la STEU",
     "Des eaux industrielles",
     "Des eaux pluviales voulues"
    ],
    "correct": 1,
    "expl": "ECP : infiltrations de nappe (permanentes) ou eaux pluviales mal raccordées (météoriques). Diluent les EU, surchargent la STEU, réduisent son rendement. À réduire."
   },
   {
    "q": "Le test à la fumée sur un réseau sert à :",
    "choices": [
     "Désinfecter",
     "Détecter les mauvais raccordements EP sur le réseau EU",
     "Mesurer la pente",
     "Nettoyer"
    ],
    "correct": 1,
    "expl": "Test à la fumée : injection de fumée dans le réseau EU. La fumée ressort aux gouttières/grilles mal raccordées → identifie les eaux claires parasites météoriques."
   },
   {
    "q": "Un branchement d'assainissement comprend réglementairement :",
    "choices": [
     "Uniquement la canalisation",
     "Le regard de branchement, la canalisation et le dispositif de raccordement",
     "Le compteur d'eau",
     "La pompe"
    ],
    "correct": 1,
    "expl": "Branchement : du regard de façade (limite de propriété) au collecteur public. La partie publique est entretenue par la collectivité. Le particulier entretient sa partie privative."
   },
   {
    "q": "Le curage hydrodynamique d'un collecteur utilise :",
    "choices": [
     "Une brosse",
     "Un jet d'eau haute pression (hydrocureur)",
     "Du chlore",
     "Un produit chimique"
    ],
    "correct": 1,
    "expl": "Hydrocurage : jet d'eau haute pression (120-150 bar) + aspiration des dépôts. Entretien préventif/curatif des collecteurs. Camion hydrocureur combiné."
   },
   {
    "q": "La mise en charge d'un collecteur EU correspond à :",
    "choices": [
     "Un fonctionnement normal",
     "Un écoulement sous pression quand la capacité gravitaire est dépassée",
     "Un curage",
     "Une inspection"
    ],
    "correct": 1,
    "expl": "Mise en charge : le collecteur fonctionne en pression (plein) au lieu d'à surface libre. Risque de débordement, refoulement chez les particuliers. Signe de sous-dimensionnement."
   },
   {
    "q": "Le clapet anti-retour sur un branchement protège contre :",
    "choices": [
     "Le gel",
     "Le refoulement des eaux usées vers l'habitation",
     "Les odeurs",
     "La corrosion"
    ],
    "correct": 1,
    "expl": "Clapet anti-retour : empêche le reflux des EU vers les points bas de l'habitation (caves, sous-sols) en cas de mise en charge du réseau. Recommandé sous le niveau de la voirie."
   },
   {
    "q": "La corrosion biogénique (H₂S) dans les réseaux EU attaque :",
    "choices": [
     "Le PVC",
     "Le béton (transformation en gypse par l'acide sulfurique biogène)",
     "Le PEHD",
     "L'inox"
    ],
    "correct": 1,
    "expl": "H₂S → oxydé en H₂SO₄ par les bactéries Thiobacillus → attaque le béton (couronne des collecteurs, postes). Prévention : ventilation, béton sulfato-résistant, revêtements."
   },
   {
    "q": "Le diagnostic permanent des réseaux d'assainissement est obligatoire depuis 2021 pour les agglomérations de plus de :",
    "choices": [
     "2 000 EH",
     "10 000 EH",
     "100 000 EH",
     "1 million EH"
    ],
    "correct": 1,
    "expl": "Arrêté du 31/07/2020 : diagnostic permanent obligatoire pour les systèmes > 10 000 EH (depuis 2021). Connaissance en continu de l'état et du fonctionnement du réseau."
   },
   {
    "q": "Le taux de collecte d'un système d'assainissement représente :",
    "choices": [
     "Le rendement de la STEU",
     "La part de pollution collectée par rapport à la pollution produite",
     "Le nombre d'abonnés",
     "Le volume facturé"
    ],
    "correct": 1,
    "expl": "Taux de collecte = pollution collectée / pollution générée. Mesure l'efficacité du réseau à acheminer les effluents vers la STEU. Complément du taux de raccordement."
   },
   {
    "q": "Le PGSSE (Plan de Gestion de Sécurité Sanitaire des Eaux) appliqué à l'assainissement vise à :",
    "choices": [
     "Augmenter le débit",
     "Maîtriser les risques sanitaires de la collecte au rejet/réutilisation",
     "Réduire le prix",
     "Construire des routes"
    ],
    "correct": 1,
    "expl": "PGSSE : approche par les risques (méthode HACCP) appliquée à toute la chaîne. Pour la REUT notamment, identification et maîtrise des dangers sanitaires. Démarche préventive."
   },
   {
    "q": "Une station de relevage doit être équipée de :",
    "choices": [
     "Une seule pompe",
     "Au moins deux pompes (dont une de secours) et un système d'alarme",
     "Un compteur uniquement",
     "Un chlorateur"
    ],
    "correct": 1,
    "expl": "Poste de relevage : 2 pompes minimum (fonctionnement alterné + secours), détection de niveau, alarme de défaut/débordement, télésurveillance. Bâche dimensionnée (cycles/h)."
   },
   {
    "q": "Le raccordement au réseau public d'assainissement collectif est obligatoire dans un délai de :",
    "choices": [
     "1 an",
     "2 ans à compter de la mise en service du réseau",
     "5 ans",
     "10 ans"
    ],
    "correct": 1,
    "expl": "Art. L1331-1 CSP : raccordement obligatoire dans les 2 ans suivant la mise en service du collecteur. Au-delà, la commune peut majorer la redevance (jusqu'à 100%)."
   },
   {
    "q": "La participation pour le financement de l'assainissement collectif (PFAC) est due :",
    "choices": [
     "Par tous les habitants",
     "Par les propriétaires lors d'un raccordement nouveau au réseau",
     "Par l'État",
     "Par l'Agence de l'eau"
    ],
    "correct": 1,
    "expl": "PFAC (ex-PRE) : perçue auprès des propriétaires qui se raccordent (construction neuve ou raccordement), pour les économies réalisées en évitant une installation ANC."
   },
   {
    "q": "La télégestion d'un réseau d'assainissement permet :",
    "choices": [
     "De facturer l'eau",
     "La surveillance et le pilotage à distance des ouvrages (postes, DO, STEU)",
     "De mesurer la dureté",
     "De désinfecter"
    ],
    "correct": 1,
    "expl": "Télégestion/supervision (SCADA) : remontée en temps réel des mesures (niveaux, débits, défauts), alarmes, pilotage à distance. Optimise l'exploitation et la réactivité."
   }
  ]
 },
 {
  "id": "ue3-5",
  "theme": "UE3",
  "themeName": "Eau potable",
  "ico": "♻️",
  "color": "#166038",
  "colorl": "#E2F0E8",
  "title": "Boues, valorisation et REUT",
  "desc": "Traitement des boues · Épandage · Méthanisation · Réutilisation",
  "questions": [
   {
    "q": "La siccité d'une boue désigne :",
    "choices": [
     "Sa teneur en eau",
     "Son pourcentage de matière sèche (MS)",
     "Son pH",
     "Sa couleur"
    ],
    "correct": 1,
    "expl": "Siccité = % de matière sèche. Boue liquide : 1-5%. Épaissie : 5-8%. Déshydratée : 20-35%. Séchée : > 85%. Plus la siccité est élevée, moins il y a d'eau à transporter."
   },
   {
    "q": "La déshydratation des boues par centrifugeuse atteint une siccité de :",
    "choices": [
     "5%",
     "18-25%",
     "50%",
     "90%"
    ],
    "correct": 1,
    "expl": "Centrifugeuse : 18-25% MS. Filtre-presse : 25-35%. Filtre à bande : 18-22%. Le choix dépend du volume, du coût et de la destination finale des boues."
   },
   {
    "q": "La méthanisation (digestion anaérobie) des boues produit :",
    "choices": [
     "Du compost",
     "Du biogaz (CH₄ + CO₂) valorisable en énergie",
     "Du chlore",
     "Des nitrates"
    ],
    "correct": 1,
    "expl": "Méthanisation : 60% CH₄ + 40% CO₂. 1 m³ biogaz ≈ 6 kWh. Valorisation : cogénération (élec + chaleur) ou injection biométhane. Réduit aussi le volume de boues."
   },
   {
    "q": "L'épandage agricole des boues de STEU est encadré par :",
    "choices": [
     "La LEMA",
     "Le décret du 08/12/1997 (teneurs en métaux lourds, plan d'épandage)",
     "La DCE",
     "Le code de la route"
    ],
    "correct": 1,
    "expl": "Décret 97-1133 : plan d'épandage, analyses boues (métaux : Cd, Cr, Cu, Hg, Ni, Pb, Zn) et sols, traçabilité, distances. Valorisation agronomique (azote, phosphore)."
   },
   {
    "q": "Le compostage des boues nécessite :",
    "choices": [
     "De l'eau",
     "Un structurant carboné (déchets verts) et de l'oxygène",
     "Du chlore",
     "Du méthane"
    ],
    "correct": 1,
    "expl": "Compostage aérobie : mélange boues + structurant (broyat, déchets verts), montée en température (hygiénisation 55-70°C). Produit un amendement organique stabilisé."
   },
   {
    "q": "L'incinération des boues est privilégiée quand :",
    "choices": [
     "Les boues sont propres",
     "L'épandage est impossible (métaux, manque de surfaces, refus social)",
     "Il pleut",
     "La siccité est faible"
    ],
    "correct": 1,
    "expl": "Incinération : destruction thermique (réduction 90% volume). Utilisée si épandage impossible. Coûteuse, énergivore. Cendres à valoriser (phosphore) ou enfouir."
   },
   {
    "q": "La REUT (Réutilisation des Eaux Usées Traitées) est encadrée par :",
    "choices": [
     "La LEMA",
     "Le règlement UE 2020/741 (4 classes A à D)",
     "La DCE",
     "Le code rural"
    ],
    "correct": 1,
    "expl": "Règlement UE 2020/741 (applicable depuis juin 2023) : REUT pour l'irrigation agricole. 4 classes (A à D) selon le type de culture et le mode d'irrigation. Classe A la plus stricte."
   },
   {
    "q": "La classe A de la REUT (qualité la plus élevée) impose pour E. coli :",
    "choices": [
     "< 1000 UFC/100 mL",
     "≤ 10 UFC/100 mL",
     "< 100 UFC/100 mL",
     "Aucune limite"
    ],
    "correct": 1,
    "expl": "Classe A : E. coli ≤ 10 UFC/100 mL + DBO₅ ≤ 10 mg/L + MES ≤ 10 mg/L + turbidité ≤ 5 NTU. Autorise l'irrigation de cultures consommées crues. Traitement poussé requis."
   },
   {
    "q": "Le Plan Eau 2023 fixe un objectif de développement de la REUT :",
    "choices": [
     "Diviser par 2",
     "Multiplier par 10 d'ici 2030",
     "Supprimer",
     "Aucun objectif"
    ],
    "correct": 1,
    "expl": "Plan Eau (mars 2023) : ×10 la REUT d'ici 2030 (la France réutilise < 1% de ses eaux usées, contre 8% en Espagne, 85% en Israël). Lever les freins réglementaires."
   },
   {
    "q": "Les usages possibles de la REUT incluent :",
    "choices": [
     "L'eau potable directe",
     "L'irrigation, l'arrosage espaces verts, le nettoyage urbain, certains usages industriels",
     "La baignade",
     "Rien"
    ],
    "correct": 1,
    "expl": "REUT : irrigation agricole/espaces verts, nettoyage voirie, lavage, eau industrielle, recharge de nappe (sous conditions). Pas d'usage eau potable direct en France à ce jour."
   },
   {
    "q": "Le chaulage des boues permet :",
    "choices": [
     "De les colorer",
     "D'hygiéniser (pH élevé) et de stabiliser avant épandage",
     "De les liquéfier",
     "De les méthaniser"
    ],
    "correct": 1,
    "expl": "Chaulage : ajout de chaux (CaO/Ca(OH)₂). pH > 12 → hygiénisation (destruction pathogènes), stabilisation, amélioration de la siccité. Apport d'amendement calcique pour les sols."
   },
   {
    "q": "Le séchage solaire des boues sous serre permet d'atteindre une siccité de :",
    "choices": [
     "10%",
     "> 60-80%",
     "5%",
     "100%"
    ],
    "correct": 1,
    "expl": "Séchage solaire : serres + retournement. Atteint 60-80% MS sans énergie fossile. Réduit fortement le volume. Lent, dépend de la météo, nécessite de la surface."
   },
   {
    "q": "Le retour au sol des boues valorise principalement :",
    "choices": [
     "Le chlore",
     "L'azote et le phosphore (valeur fertilisante)",
     "Le calcium uniquement",
     "Les PFAS"
    ],
    "correct": 1,
    "expl": "Boues = engrais : azote, phosphore, matière organique. Valorisation agronomique encadrée. Préoccupation émergente : présence de micropolluants (PFAS, médicaments) dans les boues."
   },
   {
    "q": "La filière \"boues activées\" produit des boues :",
    "choices": [
     "Uniquement primaires",
     "Secondaires (biologiques) en plus des primaires éventuelles",
     "Aucune boue",
     "Du sable"
    ],
    "correct": 1,
    "expl": "Boues activées : production de boues biologiques (secondaires) = bactéries en excès. ~30-40 g MS/EH/j. S'ajoutent aux boues primaires si décantation primaire (40-50 g MS/EH/j)."
   },
   {
    "q": "L'épaississement des boues précède la déshydratation et vise à :",
    "choices": [
     "Les diluer",
     "Réduire le volume en augmentant la concentration (gravitaire ou flottation)",
     "Les chauffer",
     "Les chlorer"
    ],
    "correct": 1,
    "expl": "Épaississement : concentre les boues (de 1% à 5-8% MS) par décantation gravitaire ou flottation, avant déshydratation. Réduit les volumes à traiter en aval."
   },
   {
    "q": "La monodigestion vs codigestion : la codigestion consiste à :",
    "choices": [
     "Digérer les boues seules",
     "Méthaniser les boues avec d'autres déchets organiques (biodéchets, graisses)",
     "Incinérer",
     "Composter"
    ],
    "correct": 1,
    "expl": "Codigestion : boues + substrats externes (graisses, biodéchets, déchets agro-industriels) → plus de biogaz, meilleure rentabilité du méthaniseur. Synergie de traitement."
   },
   {
    "q": "Le plan d'épandage des boues doit être :",
    "choices": [
     "Secret",
     "Déclaré ou autorisé selon le tonnage, avec suivi agronomique",
     "Interdit",
     "Facultatif"
    ],
    "correct": 1,
    "expl": "Plan d'épandage : déclaration ou autorisation (selon flux), parcellaire défini, analyses sols/boues, registre, distances aux habitations/cours d'eau. Suivi par un organisme indépendant."
   },
   {
    "q": "La problématique émergente des PFAS dans les boues conduit à :",
    "choices": [
     "Plus d'épandage",
     "Une restriction possible de l'épandage des boues contaminées",
     "Aucune conséquence",
     "Plus de méthanisation"
    ],
    "correct": 1,
    "expl": "PFAS dans les boues : préoccupation croissante (contamination des sols agricoles). Certains pays restreignent l'épandage. La réglementation française évolue vers une surveillance."
   },
   {
    "q": "Le devenir réglementaire des boues privilégie selon la hiérarchie des déchets :",
    "choices": [
     "L'enfouissement",
     "La valorisation (matière/énergie) avant l'élimination",
     "L'incinération systématique",
     "Le rejet en mer"
    ],
    "correct": 1,
    "expl": "Hiérarchie des déchets : prévention > réemploi > recyclage/valorisation matière (épandage, compost) > valorisation énergétique (méthanisation, incinération avec récup) > élimination."
   },
   {
    "q": "La recharge maîtrisée de nappe (MAR) par REUT permet :",
    "choices": [
     "De polluer la nappe",
     "De reconstituer la ressource souterraine avec une eau traitée et surveillée",
     "D'assécher la nappe",
     "D'augmenter la dureté"
    ],
    "correct": 1,
    "expl": "MAR (Managed Aquifer Recharge) : infiltration contrôlée d'eau traitée pour recharger les nappes (lutte contre la surexploitation, l'intrusion saline). Encadrement strict (qualité, suivi)."
   }
  ]
 },
 {
  "id": "ue3-6",
  "theme": "UE3",
  "themeName": "Eau potable",
  "ico": "🔧",
  "color": "#166038",
  "colorl": "#E2F0E8",
  "title": "Exploitation et maintenance ANC",
  "desc": "Entretien · Vidange · Diagnostic · Réhabilitation · SPANC",
  "questions": [
   {
    "q": "La vidange d'une fosse toutes eaux doit être réalisée quand les boues atteignent :",
    "choices": [
     "10% du volume",
     "30% du volume",
     "50% du volume utile",
     "100% du volume"
    ],
    "correct": 2,
    "expl": "Vidange dès que les boues atteignent 50% du volume utile (Arrêté 07/09/2009). En pratique tous les 4 ans environ pour un foyer standard."
   },
   {
    "q": "Le bordereau de suivi des matières de vidange (BSV) sert à :",
    "choices": [
     "Facturer l'usager",
     "Tracer la destination des boues vidangées",
     "Calculer la TVA",
     "Mesurer le volume de la fosse"
    ],
    "correct": 1,
    "expl": "BSV : traçabilité de la vidange (vidangeur agréé, volume, destination en STEU ou filière agréée). Obligatoire. Remis à l'usager et conservé."
   },
   {
    "q": "Un vidangeur de fosse doit être :",
    "choices": [
     "Un particulier",
     "Une entreprise agréée par le préfet",
     "Le SPANC uniquement",
     "La commune"
    ],
    "correct": 1,
    "expl": "Vidangeur agréé par arrêté préfectoral. Garantit le transport et le traitement réglementaire des matières de vidange. Liste disponible en préfecture/SPANC."
   },
   {
    "q": "Le contrôle de bon fonctionnement par le SPANC a lieu :",
    "choices": [
     "Chaque mois",
     "Périodiquement (max 10 ans, souvent 4-8 ans)",
     "Une seule fois",
     "Jamais"
    ],
    "correct": 1,
    "expl": "Contrôle périodique de bon fonctionnement : fréquence fixée par la collectivité, ≤ 10 ans (Loi 2010). Souvent 4-8 ans. Donne lieu à une redevance."
   },
   {
    "q": "Un défaut d'entretien d'une microstation entraîne souvent :",
    "choices": [
     "Une amélioration du rendement",
     "Un colmatage et une baisse des performances épuratoires",
     "Une augmentation du volume",
     "Aucun effet"
    ],
    "correct": 1,
    "expl": "Microstation mal entretenue : colmatage, boues excédentaires, panne d'aération → rejet non conforme. D'où l'obligation de contrat d'entretien (2 ans min, arrêté 2024)."
   },
   {
    "q": "La ventilation secondaire (extraction) d'une installation ANC évacue :",
    "choices": [
     "L'eau",
     "Les gaz de fermentation (H₂S, CH₄)",
     "Les boues",
     "Les graisses"
    ],
    "correct": 1,
    "expl": "Ventilation secondaire (extraction en toiture, Ø100, avec extracteur statique/éolien) : évacue les gaz odorants et corrosifs. Complète la ventilation primaire."
   },
   {
    "q": "Un colmatage du massif filtrant se traduit par :",
    "choices": [
     "Une eau plus claire",
     "Des remontées d'eau en surface (engorgement)",
     "Une baisse de la consommation",
     "Une odeur de chlore"
    ],
    "correct": 1,
    "expl": "Colmatage : eau qui stagne ou remonte en surface, mauvaises odeurs. Causes : surcharge, défaut d'entretien, graisses. Peut nécessiter un remplacement du massif."
   },
   {
    "q": "Le diagnostic ANC lors d'une vente immobilière est valable :",
    "choices": [
     "1 an",
     "3 ans",
     "6 ans",
     "10 ans"
    ],
    "correct": 1,
    "expl": "Diagnostic ANC : valable 3 ans, intégré au DDT (dossier de diagnostic technique). Si non conforme, l'acquéreur doit réhabiliter dans l'année suivant l'achat."
   },
   {
    "q": "Le bac à graisses doit être entretenu :",
    "choices": [
     "Tous les 5 ans",
     "Régulièrement (tous les 3-6 mois)",
     "Jamais",
     "Tous les 10 ans"
    ],
    "correct": 1,
    "expl": "Bac dégraisseur : vidange/nettoyage tous les 3-6 mois (accumulation rapide de graisses). Sinon colmatage et odeurs. Plus fréquent que la FTE."
   },
   {
    "q": "Une installation neuve doit être contrôlée par le SPANC :",
    "choices": [
     "Jamais",
     "À la conception ET à la réalisation (avant remblaiement)",
     "Seulement 10 ans après",
     "Uniquement à la vente"
    ],
    "correct": 1,
    "expl": "Installation neuve : contrôle de conception (projet) puis de bonne exécution (avant remblaiement, tranchées ouvertes). Deux contrôles obligatoires."
   },
   {
    "q": "La durée de vie moyenne d'une fosse toutes eaux béton est de :",
    "choices": [
     "5 ans",
     "10 ans",
     "30 à 50 ans",
     "100 ans"
    ],
    "correct": 2,
    "expl": "FTE béton : 30-50 ans si bien entretenue. Le massif d'épandage : 15-25 ans (colmatage progressif). La FTE dure plus longtemps que le traitement."
   },
   {
    "q": "Une microstation à culture fixée immergée fonctionne avec :",
    "choices": [
     "Des roseaux",
     "Un support sur lequel se fixe la biomasse épuratrice",
     "Aucun support",
     "Du sable uniquement"
    ],
    "correct": 1,
    "expl": "Culture fixée (lit bactérien immergé, garnissage) : biofilm sur support. Alternative aux boues activées (culture libre). Compacte, robuste aux variations de charge."
   },
   {
    "q": "Le rôle de l'usager dans l'entretien ANC est :",
    "choices": [
     "Nul",
     "Assurer l'entretien courant et les vidanges",
     "Contrôler ses voisins",
     "Délivrer les agréments"
    ],
    "correct": 1,
    "expl": "L'usager est responsable de l'entretien (vidanges, contrat microstation, bon usage). Le SPANC contrôle. La collectivité peut proposer un entretien (compétence facultative)."
   },
   {
    "q": "Une odeur persistante près d'une installation ANC indique souvent :",
    "choices": [
     "Un bon fonctionnement",
     "Un défaut de ventilation ou un colmatage",
     "Une eau trop pure",
     "Un excès de chlore"
    ],
    "correct": 1,
    "expl": "Odeurs : signe de dysfonctionnement (ventilation insuffisante, anaérobiose, colmatage). À diagnostiquer rapidement. La ventilation est souvent en cause."
   },
   {
    "q": "L'eau en sortie d'une filière ANC conforme doit respecter :",
    "choices": [
     "DBO₅ < 35 mg/L et MES < 30 mg/L",
     "Aucune valeur",
     "DBO₅ < 5 mg/L",
     "DCO < 30 mg/L"
    ],
    "correct": 0,
    "expl": "Rejet ANC (arrêté 07/09/2009) : DBO₅ ≤ 35 mg/L et MES ≤ 30 mg/L (sur échantillon moyen 24h pour les dispositifs agréés > 20 EH)."
   },
   {
    "q": "En cas de non-conformité sans danger, le délai de réhabilitation est :",
    "choices": [
     "1 mois",
     "1 an",
     "4 ans",
     "illimité"
    ],
    "correct": 2,
    "expl": "NC sans danger sanitaire ni risque environnemental : réhabilitation dans les 4 ans. Avec danger : 1 an. À la vente : 1 an après acquisition."
   },
   {
    "q": "Le poste de relevage en ANC est nécessaire quand :",
    "choices": [
     "Le terrain est plat",
     "L'exutoire ou le traitement est plus haut que la sortie de la FTE",
     "La nappe est basse",
     "Le sol est perméable"
    ],
    "correct": 1,
    "expl": "Poste de relevage : pompe les effluents vers un point plus haut quand l'écoulement gravitaire est impossible. Maintenance supplémentaire (pompe, flotteurs)."
   },
   {
    "q": "Un regard de répartition sert à :",
    "choices": [
     "Stocker les boues",
     "Répartir équitablement l'effluent entre les tuyaux d'épandage",
     "Ventiler",
     "Désinfecter"
    ],
    "correct": 1,
    "expl": "Regard de répartition : distribue l'effluent de façon homogène entre les drains d'épandage. Doit être de niveau. Accessible pour contrôle."
   },
   {
    "q": "La redevance SPANC finance :",
    "choices": [
     "La construction des installations",
     "Le service public de contrôle (et parfois d'entretien)",
     "La TVA",
     "Les routes"
    ],
    "correct": 1,
    "expl": "Redevance SPANC : finance le service de contrôle (et entretien/réhabilitation si compétences prises). Calculée pour équilibrer le budget du service (SPIC)."
   },
   {
    "q": "Le préleveur lors d'un contrôle de microstation prélève l'eau :",
    "choices": [
     "Dans la FTE",
     "En sortie de l'installation (rejet)",
     "Dans le puits voisin",
     "Dans la cuisine"
    ],
    "correct": 1,
    "expl": "Contrôle de performance : prélèvement en sortie de dispositif (regard de rejet) pour analyser DBO₅, MES. Compare aux valeurs de l'agrément."
   }
  ]
 },
 {
  "id": "ue3-7",
  "theme": "UE3",
  "themeName": "Eau potable",
  "ico": "🌱",
  "color": "#166038",
  "colorl": "#E2F0E8",
  "title": "Filières plantées et écologiques",
  "desc": "Filtres à roseaux · Phytoépuration · Jardins d'assainissement",
  "questions": [
   {
    "q": "Dans un filtre planté de roseaux à écoulement vertical, les roseaux servent à :",
    "choices": [
     "Épurer directement l'eau",
     "Maintenir la perméabilité du massif et oxygéner les rhizomes",
     "Décorer",
     "Filtrer les MES seules"
    ],
    "correct": 1,
    "expl": "Les roseaux (Phragmites australis) : leurs rhizomes empêchent le colmatage, favorisent les bactéries épuratrices et oxygènent. L'épuration est surtout bactérienne."
   },
   {
    "q": "La surface d'un filtre planté vertical (1er étage) est d'environ :",
    "choices": [
     "1 m²/EH",
     "1,2 à 1,5 m²/EH",
     "5 m²/EH",
     "10 m²/EH"
    ],
    "correct": 1,
    "expl": "Filtre planté vertical 1er étage : ~1,2-1,5 m²/EH (système français 2 étages ≈ 2,5 m²/EH total). Plus compact que les anciens systèmes 5 m²/EH."
   },
   {
    "q": "L'alimentation d'un filtre planté vertical se fait :",
    "choices": [
     "En continu",
     "Par bâchées (à-coups) pour répartir et oxygéner",
     "Goutte à goutte",
     "Sous pression constante"
    ],
    "correct": 1,
    "expl": "Alimentation par bâchées : chasse hydraulique répartissant l'effluent sur toute la surface, alternance saturation/aération favorisant l'oxygénation et la nitrification."
   },
   {
    "q": "Le système français de filtres plantés traite :",
    "choices": [
     "Les eaux après FTE uniquement",
     "Directement les eaux usées brutes (sans décantation préalable)",
     "Uniquement les eaux pluviales",
     "L'eau potable"
    ],
    "correct": 1,
    "expl": "Spécificité française : filtres plantés alimentés en eaux brutes (pas de décanteur primaire). Les boues se minéralisent en surface du 1er étage (curage tous les 10-15 ans)."
   },
   {
    "q": "Le faucardage des roseaux consiste à :",
    "choices": [
     "Les arroser",
     "Les faucher annuellement",
     "Les arracher",
     "Les replanter chaque mois"
    ],
    "correct": 1,
    "expl": "Faucardage : fauche annuelle des roseaux (hiver) pour éviter l'accumulation de litière. Entretien léger. Les rhizomes restent en place."
   },
   {
    "q": "Un avantage majeur des filtres plantés est :",
    "choices": [
     "Leur faible emprise au sol",
     "Leur faible consommation énergétique et leur robustesse",
     "Leur invisibilité",
     "Leur traitement de l'azote total complet"
    ],
    "correct": 1,
    "expl": "Filtres plantés : pas (ou peu) d'énergie, robustes aux variations de charge, bonne intégration paysagère, faible production de boues. Emprise au sol importante toutefois."
   },
   {
    "q": "Le filtre planté horizontal est surtout efficace pour :",
    "choices": [
     "La nitrification",
     "La dénitrification et le traitement secondaire",
     "Le dessablage",
     "La chloration"
    ],
    "correct": 1,
    "expl": "Filtre horizontal (saturé) : conditions anoxiques favorables à la dénitrification. Souvent en 2e étage après un vertical (nitrifiant). Combinaison pour traiter l'azote."
   },
   {
    "q": "La filière \"filtre planté\" est adaptée :",
    "choices": [
     "Uniquement aux grandes villes",
     "Aux petites collectivités et à l'ANC regroupé",
     "Aux immeubles de centre-ville",
     "Aux industries chimiques"
    ],
    "correct": 1,
    "expl": "Filtres plantés : idéaux pour petites communes (< 2000 EH) et ANC regroupé (hameaux). Exploitation simple, accessible aux collectivités rurales."
   },
   {
    "q": "Le colmatage de surface d'un filtre planté vertical est limité par :",
    "choices": [
     "La chloration",
     "L'alternance des casiers (repos) et la croissance des roseaux",
     "L'ajout de sable",
     "Le pompage continu"
    ],
    "correct": 1,
    "expl": "Plusieurs casiers en parallèle : alimentation alternée (1 en service, autres au repos) → minéralisation de la couche de boues, prévention du colmatage."
   },
   {
    "q": "La phytoépuration utilise :",
    "choices": [
     "Des poissons",
     "Des plantes et les micro-organismes associés",
     "Des algues toxiques",
     "Du charbon"
    ],
    "correct": 1,
    "expl": "Phytoépuration : plantes (roseaux, joncs, iris) + rhizosphère bactérienne. Les plantes structurent le milieu ; les bactéries assurent l'essentiel de l'épuration."
   },
   {
    "q": "Le rendement DBO₅ d'un système de filtres plantés bien conçu est :",
    "choices": [
     "< 50%",
     "> 90%",
     "Environ 60%",
     "Impossible à évaluer"
    ],
    "correct": 1,
    "expl": "Filtres plantés (2 étages) : rendement DBO₅ > 90%, MES > 90%. Performances comparables aux boues activées pour le carbone. Azote partiel selon configuration."
   },
   {
    "q": "Le lagunage naturel épure grâce à :",
    "choices": [
     "Des membranes",
     "L'action combinée des algues, bactéries et du soleil",
     "L'osmose inverse",
     "La chloration"
    ],
    "correct": 1,
    "expl": "Lagunage naturel : bassins peu profonds, photosynthèse des algues (O₂) + bactéries. Long temps de séjour (40-60 j). Bon abattement bactériologique. Grande emprise."
   },
   {
    "q": "Un inconvénient du lagunage est :",
    "choices": [
     "Sa consommation électrique",
     "Sa grande emprise au sol (10-15 m²/EH)",
     "Son coût énergétique",
     "Sa production de boues élevée"
    ],
    "correct": 1,
    "expl": "Lagunage : emprise 10-15 m²/EH (très grande). Rejet variable selon les algues (MES). Avantage : rustique, peu coûteux, abattement bactério naturel."
   },
   {
    "q": "Les zones de rejet végétalisées (ZRV) servent à :",
    "choices": [
     "Stocker les boues",
     "Affiner le rejet et tamponner avant le milieu naturel",
     "Produire de l'eau potable",
     "Désinfecter au chlore"
    ],
    "correct": 1,
    "expl": "ZRV : zone tampon végétalisée en sortie de STEU. Affinage complémentaire (N, P, bactério), infiltration, biodiversité. Pas un organe de traitement réglementaire à part entière."
   },
   {
    "q": "La plante la plus utilisée en filtre planté en France est :",
    "choices": [
     "Le nénuphar",
     "Le roseau commun (Phragmites australis)",
     "Le bambou",
     "L'algue verte"
    ],
    "correct": 1,
    "expl": "Phragmites australis (roseau commun) : système racinaire dense, robuste, rhizomes perçant la couche de boues. Standard des filtres plantés français."
   },
   {
    "q": "L'accumulation des boues sur un filtre planté vertical impose un curage tous les :",
    "choices": [
     "ans",
     "10 à 15 ans",
     "6 mois",
     "50 ans"
    ],
    "correct": 1,
    "expl": "Les boues minéralisées en surface du 1er étage : curage tous les 10-15 ans seulement (vs vidange FTE tous les 4 ans). Boues compostables."
   },
   {
    "q": "Les filtres plantés tolèrent les variations de charge car :",
    "choices": [
     "Ils ont une grande inertie biologique",
     "Ils sont chauffés",
     "Ils utilisent du chlore",
     "Ils sont sous pression"
    ],
    "correct": 0,
    "expl": "Grande inertie biologique : les filtres plantés encaissent bien les à-coups de charge (résidences secondaires, tourisme) mieux que les microstations à boues activées."
   },
   {
    "q": "Le traitement du phosphore par filtres plantés est :",
    "choices": [
     "Total",
     "Limité (nécessite parfois un massif réactif spécifique)",
     "Impossible",
     "Supérieur aux boues activées"
    ],
    "correct": 1,
    "expl": "P peu retenu par les filtres plantés classiques. Pour l'éliminer : massif réactif (apatite, oxydes de fer) ou étape complémentaire. Limite des filières plantées."
   },
   {
    "q": "Un jardin d'assainissement combine :",
    "choices": [
     "Piscine et fosse",
     "Traitement des eaux et intégration paysagère",
     "Potager et puits",
     "Chloration et UV"
    ],
    "correct": 1,
    "expl": "Jardin d'assainissement : filtres plantés intégrés dans un aménagement paysager (bassins, plantes ornementales). Allie épuration, esthétique et biodiversité."
   },
   {
    "q": "La consommation énergétique d'un filtre planté gravitaire est :",
    "choices": [
     "Élevée",
     "Quasi nulle (écoulement gravitaire)",
     "Identique aux boues activées",
     "Imprévisible"
    ],
    "correct": 1,
    "expl": "Filtre planté gravitaire : aucune énergie si le terrain permet l'écoulement par gravité. Atout majeur en zone rurale. Un poste de relevage en amont peut être nécessaire."
   }
  ]
 },
 {
  "id": "ue3-8",
  "theme": "UE3",
  "themeName": "Eau potable",
  "ico": "🏗️",
  "color": "#166038",
  "colorl": "#E2F0E8",
  "title": "Conception et dimensionnement ANC",
  "desc": "Étude de sol · Calcul des filières · Distances · Implantation",
  "questions": [
   {
    "q": "L'étude de sol préalable à une installation ANC évalue :",
    "choices": [
     "Le prix du terrain",
     "La perméabilité, la profondeur de nappe et la pente",
     "La couleur du sol uniquement",
     "Le voisinage"
    ],
    "correct": 1,
    "expl": "Étude de sol (étude de filière) : test de perméabilité (Porchet), sondages (nappe, roche, hydromorphie), pente. Détermine la filière adaptée. Fortement recommandée."
   },
   {
    "q": "Une perméabilité K = 30 mm/h correspond à un sol :",
    "choices": [
     "Imperméable",
     "Favorable à l'épandage",
     "Trop perméable",
     "Rocheux"
    ],
    "correct": 1,
    "expl": "K = 15-30 mm/h (ou 10-500 mm/h selon référentiel) : sol favorable aux tranchées d'épandage. K < 10 : sol peu perméable → filtre drainé. K très élevé : risque pour la nappe."
   },
   {
    "q": "Le nombre de pièces principales (PP) sert à dimensionner :",
    "choices": [
     "Le nombre de WC",
     "Le volume de la FTE et la capacité de la filière",
     "La couleur de la maison",
     "Le prix"
    ],
    "correct": 1,
    "expl": "Dimensionnement basé sur les PP (séjour + chambres). Capacité = nb PP (souvent assimilé à nb PP = nb EH). FTE : 3000 L jusqu'à 5 PP, +1000 L/PP au-delà."
   },
   {
    "q": "La distance minimale entre l'épandage et un arbre est de :",
    "choices": [
     "1 m",
     "3 m",
     "5 m",
     "10 m"
    ],
    "correct": 1,
    "expl": "Distance épandage/arbre : ≥ 3 m (racines pouvant endommager les drains). Aussi : 5 m de l'habitation, 3 m des limites de propriété, 35 m d'un captage."
   },
   {
    "q": "Une nappe affleurante (< 1 m) impose :",
    "choices": [
     "Des tranchées profondes",
     "Un tertre d'infiltration (filière surélevée)",
     "Un puisard",
     "Aucune adaptation"
    ],
    "correct": 1,
    "expl": "Nappe haute ou sol imperméable : tertre d'infiltration (massif sableux surélevé). Maintient la distance minimale de 1 m avec la nappe. Évite la pollution directe."
   },
   {
    "q": "La pente maximale acceptable pour un épandage classique est d'environ :",
    "choices": [
     "2%",
     "5 à 10%",
     "30%",
     "45%"
    ],
    "correct": 1,
    "expl": "Pente épandage : idéalement < 5%, jusqu'à 10% avec adaptation (tranchées suivant les courbes de niveau). Forte pente → risque de résurgence en aval."
   },
   {
    "q": "Le test de percolation (Porchet) mesure :",
    "choices": [
     "La dureté du sol",
     "La vitesse d'infiltration de l'eau dans le sol",
     "La température",
     "Le pH du sol"
    ],
    "correct": 1,
    "expl": "Test Porchet : trou rempli d'eau, mesure de la vitesse d'abaissement → coefficient de perméabilité K (mm/h). Base du choix de la filière et de son dimensionnement."
   },
   {
    "q": "Pour une maison de 6 pièces principales, le volume de FTE est :",
    "choices": [
     "3 000 L",
     "4 000 L",
     "5 000 L",
     "2 000 L"
    ],
    "correct": 1,
    "expl": "FTE : 3000 L jusqu'à 5 PP, +1000 L par PP supplémentaire. 6 PP → 3000 + 1000 = 4000 L."
   },
   {
    "q": "La longueur de tranchées d'épandage dépend de :",
    "choices": [
     "Le nombre de fenêtres",
     "La perméabilité du sol et le nombre d'EH",
     "La couleur des murs",
     "La distance à la mairie"
    ],
    "correct": 1,
    "expl": "Longueur de tranchées : fonction de K (perméabilité) et du nombre d'EH. Sol moins perméable = plus de longueur. Réparties en drains de 30 m max, espacés de 1,5 m."
   },
   {
    "q": "L'espacement entre deux tranchées d'épandage est d'au moins :",
    "choices": [
     "0,5 m",
     "1,5 m",
     "5 m",
     "10 m"
    ],
    "correct": 1,
    "expl": "Espacement entre axes de tranchées : ≥ 1,5 m (DTU 64.1). Évite l'interférence des bulbes d'infiltration. Profondeur tranchée : 0,6-0,8 m."
   },
   {
    "q": "Une étude hydrogéologique est nécessaire si :",
    "choices": [
     "Le terrain est plat",
     "L'installation est proche d'un captage AEP (périmètre)",
     "La maison est neuve",
     "Le sol est sableux"
    ],
    "correct": 1,
    "expl": "Étude hydrogéologique : exigée en périmètre de protection de captage, zone sensible, ou contexte karstique. Évalue le risque de transfert vers la ressource."
   },
   {
    "q": "Le choix entre filière drainée et non drainée dépend de :",
    "choices": [
     "Le budget seul",
     "La perméabilité du sol et la possibilité d'infiltrer",
     "La taille de la maison",
     "Le nombre d'habitants seul"
    ],
    "correct": 1,
    "expl": "Sol perméable (K suffisant) : filière non drainée (infiltration sur place). Sol imperméable : filière drainée avec rejet (fossé, milieu hydraulique superficiel) après autorisation."
   },
   {
    "q": "Le rejet en milieu hydraulique superficiel nécessite :",
    "choices": [
     "Aucune autorisation",
     "L'accord du propriétaire/gestionnaire de l'exutoire",
     "Une licence de pêche",
     "Un permis de construire"
    ],
    "correct": 1,
    "expl": "Rejet vers fossé/cours d'eau : autorisation du propriétaire ou gestionnaire de l'exutoire (commune, département). Solution de dernier recours si infiltration impossible."
   },
   {
    "q": "Le coefficient d'occupation pour estimer les EH d'une maison est généralement :",
    "choices": [
     "1 EH = 1 m²",
     "1 EH par pièce principale",
     "1 EH = 1 WC",
     "10 EH par maison"
    ],
    "correct": 1,
    "expl": "Règle courante : 1 EH par pièce principale (capacité d'accueil). Une maison T5 (5 PP) ≈ 5 EH. Base du dimensionnement réglementaire ANC."
   },
   {
    "q": "La profondeur d'une fouille pour tranchée d'épandage est d'environ :",
    "choices": [
     "0,2 m",
     "0,6 à 0,8 m",
     "2 m",
     "5 m"
    ],
    "correct": 1,
    "expl": "Tranchée d'épandage : profondeur 0,6-0,8 m, largeur 0,5 m. Drain posé sur lit de gravier (graviers 10-40 mm), recouvert de géotextile puis de terre."
   },
   {
    "q": "L'implantation de l'ANC doit éviter :",
    "choices": [
     "Le sud",
     "Les zones de circulation de véhicules et de stockage",
     "Le nord",
     "Les zones plates"
    ],
    "correct": 1,
    "expl": "Éviter : passage/stationnement de véhicules (tassement, écrasement des drains), arbres, terrasses, piscines. Zone engazonnée accessible pour l'entretien."
   },
   {
    "q": "Le géotextile au-dessus du massif d'épandage sert à :",
    "choices": [
     "Imperméabiliser",
     "Empêcher la terre de colmater le gravier",
     "Drainer l'eau",
     "Désinfecter"
    ],
    "correct": 1,
    "expl": "Géotextile : sépare la terre végétale du gravier, empêche la migration des fines (colmatage). Perméable à l'air et à l'eau. Ne pas utiliser de film imperméable."
   },
   {
    "q": "Pour un sol à dominante argileuse (K faible), la filière recommandée est :",
    "choices": [
     "Tranchées d'épandage classiques",
     "Filtre à sable drainé ou microstation",
     "Puisard",
     "Plateau absorbant"
    ],
    "correct": 1,
    "expl": "Sol argileux (K < 10-15 mm/h) : infiltration impossible → filtre à sable vertical drainé, ou microstation/filtre planté avec rejet. Jamais de puisard (interdit)."
   },
   {
    "q": "Le dimensionnement d'une microstation s'exprime en :",
    "choices": [
     "m³",
     "EH (capacité nominale agréée)",
     "Litres/jour seuls",
     "km"
    ],
    "correct": 1,
    "expl": "Microstation : dimensionnée en EH (capacité nominale figurant sur l'agrément CE). Doit correspondre au nombre de PP du logement. Sous-charge prolongée = dysfonctionnement."
   },
   {
    "q": "La cohérence entre capacité de la filière et taille du logement est vérifiée par :",
    "choices": [
     "L'usager",
     "Le SPANC lors du contrôle de conception",
     "Le facteur",
     "Le voisin"
    ],
    "correct": 1,
    "expl": "Contrôle de conception SPANC : vérifie l'adéquation filière/logement, le respect des distances, l'étude de sol. Avis favorable nécessaire avant travaux."
   }
  ]
 },
 {
  "id": "ue4-1",
  "theme": "UE4",
  "themeName": "Assainissement non collectif",
  "ico": "🌧️",
  "color": "#4A28A0",
  "colorl": "#EEEDFB",
  "title": "Bilan hydrologique et précipitations",
  "desc": "ETR · Ruissellement · Méthode rationnelle · Courbes IDF",
  "questions": [
   {
    "q": "L'équation du bilan hydrologique est :",
    "choices": [
     "P = ETR + Q",
     "P = ETR + R + ΔS",
     "P = ETR × R",
     "P = ETR - R"
    ],
    "correct": 1,
    "expl": "P (précipitations) = ETR (évapotranspiration réelle) + R (ruissellement) + ΔS (variation de stock). Base de tout bilan hydrologique."
   },
   {
    "q": "L'ETP (Évapotranspiration Potentielle) selon Penman-Monteith dépend de :",
    "choices": [
     "Uniquement la température",
     "Rayonnement, T°, humidité, vent et résistance végétale",
     "Uniquement les précipitations",
     "La conductivité du sol"
    ],
    "correct": 1,
    "expl": "Penman-Monteith (FAO-56) : formule complète physique. Utilisée pour irrigation. Référence mondiale remplaçant Thornthwaite."
   },
   {
    "q": "L'ETR (Évapotranspiration Réelle) est toujours :",
    "choices": [
     "Supérieure ou égale à l'ETP",
     "Inférieure ou égale à l'ETP",
     "Égale à l'ETP",
     "Indépendante de l'ETP"
    ],
    "correct": 1,
    "expl": "ETR ≤ ETP. Si P > ETP : ETR = ETP (eau disponible). Si P < ETP : ETR < ETP (stress hydrique). Turc : ETR ≈ P/√(0,9+P²/L²)."
   },
   {
    "q": "La période de retour T d'une pluie centennale est :",
    "choices": [
     "Exactement 100 ans",
     "La période pour laquelle la probabilité de dépassement est 1%/an",
     "La durée de la pluie",
     "La durée de retour minimum"
    ],
    "correct": 1,
    "expl": "T = 100 ans → probabilité 1%/an (= 1/T). En 100 ans : probabilité d'avoir au moins une pluie Q100 = 1-(1-1/100)^100 ≈ 63%."
   },
   {
    "q": "La méthode rationnelle Q = C×i×A/360 est valable pour :",
    "choices": [
     "Tous les bassins versants",
     "S ≤ 2 km²",
     "S > 10 km²",
     "Les bassins versants agricoles uniquement"
    ],
    "correct": 1,
    "expl": "Méthode rationnelle : S ≤ 2 km², Tc < 2h, pluie uniforme sur le BV. Au-delà → modèles pluie-débit (GR4J, HBV, etc.)."
   },
   {
    "q": "Le temps de concentration Tc d'un bassin versant est :",
    "choices": [
     "La durée de la pluie",
     "Le temps que met l'eau du point le plus éloigné pour arriver à l'exutoire",
     "Le temps de retour de la crue",
     "La durée d'une pluie décennale"
    ],
    "correct": 1,
    "expl": "Tc = temps de concentration. Pour la méthode rationnelle, on prend i pour une durée de pluie = Tc (intensité de projet)."
   },
   {
    "q": "Les courbes IDF (Intensité-Durée-Fréquence) sont publiées par :",
    "choices": [
     "La DREAL",
     "Météo-France",
     "L'OFB",
     "Le BRGM"
    ],
    "correct": 1,
    "expl": "Courbes IDF : Météo-France (station météo). Paramètre Montana : i = a/(Tc+b)^n. Variables selon région et période de retour."
   },
   {
    "q": "Pour une région méditerranéenne, l'intensité des pluies de courte durée (T10) est :",
    "choices": [
     "Plus faible qu'en Bretagne",
     "Comparable à celle de Bretagne",
     "Plus élevée qu'en Bretagne",
     "Identique partout en France"
    ],
    "correct": 2,
    "expl": "Méditerranée : pluies intenses de courte durée >> Bretagne. Paramètre a IDF T10 Sud : 6500, Nord : 2700 (unités approchées)."
   },
   {
    "q": "Le débit caractéristique QMNA5 est :",
    "choices": [
     "Le débit moyen annuel",
     "Le débit mensuel minimal dépassé 5 ans sur 6 (étiage)",
     "Le débit de crue cinquantennale",
     "Le débit de pointe maximum"
    ],
    "correct": 1,
    "expl": "QMNA5 : Q mensuel minimal de fréquence 5 ans (probabilité dépassement 80%/an). Référence pour l'étiage et le calcul des débits réservés."
   },
   {
    "q": "La loi de Gumbel est utilisée pour :",
    "choices": [
     "La répartition des débits d'étiage",
     "L'ajustement statistique des débits de crue (maxima annuels)",
     "La simulation de la qualité de l'eau",
     "La distribution des vitesses en rivière"
    ],
    "correct": 1,
    "expl": "Gumbel (GEV type I) : ajustement des maxima annuels. F(x) = exp(-exp(-(x-u)/α)). T = 1/(1-F). Complété par GEV, Log-normale, Pearson III."
   },
   {
    "q": "Le débit décennal Q10 d'une rivière correspond à :",
    "choices": [
     "Un débit atteint 10 fois par an",
     "Un débit dépassé en moyenne 1 fois tous les 10 ans",
     "Le débit moyen sur 10 ans",
     "Le débit minimum observé en 10 ans"
    ],
    "correct": 1,
    "expl": "Q10 : débit de période de retour 10 ans. Probabilité dépassement = 10%/an. Référence pour dimensionnement réseaux pluviaux urbains."
   },
   {
    "q": "L'indice NDWI (Normalized Difference Water Index) utilise les bandes :",
    "choices": [
     "Rouge et Proche-Infrarouge",
     "Vert et Proche-Infrarouge",
     "Bleu et Rouge",
     "SWIR et Proche-Infrarouge"
    ],
    "correct": 1,
    "expl": "NDWI = (Vert - PIR)/(Vert + PIR). Détection eau et humidité des sols sur images satellites (Landsat, Sentinel-2)."
   },
   {
    "q": "La recharge des nappes souterraines correspond à :",
    "choices": [
     "P - ETR - R",
     "ETR + R - P",
     "P + R - ETR",
     "R - P - ETR"
    ],
    "correct": 0,
    "expl": "Recharge ≈ P - ETR - R. Partie des précipitations qui s'infiltre profondément après satisfaction de l'ETR et du ruissellement."
   },
   {
    "q": "Les crues décennales Q10 et centennales Q100 sont liées par :",
    "choices": [
     "Q100 = 10 × Q10",
     "Q100 ≈ 1,5 à 3 × Q10 selon le BV",
     "Q100 = Q10 × T",
     "Q100 = Q10 + 100"
    ],
    "correct": 1,
    "expl": "Ratio Q100/Q10 = 1,5-3 selon la forme de la loi statistique et le type de BV. Pas de relation fixe universelle."
   },
   {
    "q": "Un coefficient de ruissellement C = 0 signifie :",
    "choices": [
     "Tout ruisselle",
     "Rien ne ruisselle (tout s'infiltre ou s'évapore)",
     "La pluie est nulle",
     "Le bassin est imperméable"
    ],
    "correct": 1,
    "expl": "C = 0 : infiltration totale (forêt dense sur sol très perméable). C = 1 : imperméabilité totale (roche nue, asphalte). 0 ≤ C ≤ 1."
   },
   {
    "q": "La méthode SCS-CN (Curve Number) permet de calculer :",
    "choices": [
     "Le débit de pointe uniquement",
     "La lame ruisselée en fonction de la pluie et du CN du bassin",
     "L'ETR quotidienne",
     "La transmissivité de l'aquifère"
    ],
    "correct": 1,
    "expl": "SCS-CN (USDA) : Pe = (P - 0,2S)²/(P + 0,8S) où S = 25400/CN - 254. CN = 0 (tout infiltre) à 100 (tout ruisselle)."
   },
   {
    "q": "Les données hydrométriques de débit en rivière sont disponibles sur :",
    "choices": [
     "ADES (eaux souterraines)",
     "HYDRO (vigicrues.gouv.fr)",
     "SISE-Eaux (EP)",
     "Légifrance"
    ],
    "correct": 1,
    "expl": "HYDRO (banque Hydro) : données débits rivières stations hydrométriques. Géré par SCHAPI/DREAL. vigicrues.fr pour la vigilance crues."
   },
   {
    "q": "Le modèle hydrologique GR4J est :",
    "choices": [
     "Un modèle hydraulique pour les rivières",
     "Un modèle pluie-débit conceptuel à 4 paramètres",
     "Un modèle de qualité de l'eau",
     "Un modèle d'écoulement souterrain"
    ],
    "correct": 1,
    "expl": "GR4J (Génie Rural 4 paramètres Journalier) : INRAE. Reconstitution et prévision des débits à partir des pluies et de l'ETR."
   },
   {
    "q": "La loi de Darcy s'applique à l'écoulement souterrain pour :",
    "choices": [
     "Tous les régimes",
     "Le régime laminaire uniquement (Re < 1-10)",
     "Le régime turbulent",
     "Les grandes vitesses uniquement"
    ],
    "correct": 1,
    "expl": "Darcy valable si Re < 1-10 (milieux poreux). Q = K×i×A. En karst ou near-surface : Darcy peut être invalide (écoulement turbulent)."
   },
   {
    "q": "Le PGRI (Plan de Gestion du Risque Inondation) est révisé tous les :",
    "choices": [
     "2 ans",
     "6 ans",
     "10 ans",
     "20 ans"
    ],
    "correct": 1,
    "expl": "PGRI : révisé tous les 6 ans par district hydrographique (Directive Inondation 2007/60). 1er PGRI : 2015, 2ème : 2021, 3ème : 2027."
   }
  ]
 },
 {
  "id": "ue4-2",
  "theme": "UE4",
  "themeName": "Assainissement non collectif",
  "ico": "⛰️",
  "color": "#4A28A0",
  "colorl": "#EEEDFB",
  "title": "Hydrogéologie et nappes",
  "desc": "Aquifères · Perméabilité · Captage · Piézométrie",
  "questions": [
   {
    "q": "Un aquifère est :",
    "choices": [
     "Une rivière",
     "Une formation géologique perméable contenant et laissant circuler l'eau",
     "Un lac",
     "Une station de pompage"
    ],
    "correct": 1,
    "expl": "Aquifère : roche/sédiment perméable saturé en eau, exploitable. Ex : sables, calcaires fissurés, alluvions. L'aquitard (peu perméable) le sépare/protège."
   },
   {
    "q": "La nappe phréatique est :",
    "choices": [
     "La nappe la plus profonde",
     "La première nappe libre rencontrée depuis la surface",
     "Une nappe captive",
     "Une nappe d'eau salée"
    ],
    "correct": 1,
    "expl": "Nappe phréatique : première nappe libre (surface en contact avec l'atmosphère via la zone non saturée). Vulnérable aux pollutions de surface. Alimente puits et sources."
   },
   {
    "q": "Une nappe captive se caractérise par :",
    "choices": [
     "Une surface libre",
     "Une eau sous pression entre deux couches imperméables",
     "Une faible profondeur",
     "Une eau salée"
    ],
    "correct": 1,
    "expl": "Nappe captive : confinée entre deux couches imperméables, sous pression. Un forage peut être artésien (jaillissant). Mieux protégée mais recharge plus lente."
   },
   {
    "q": "La conductivité hydraulique K (perméabilité de Darcy) s'exprime en :",
    "choices": [
     "m³/s",
     "m/s",
     "s/m",
     "m²"
    ],
    "correct": 1,
    "expl": "K en m/s. Sables : 10⁻³ à 10⁻⁵. Argiles : < 10⁻⁹ (imperméable). Graviers : > 10⁻². Détermine la capacité de l'eau à circuler dans le milieu poreux."
   },
   {
    "q": "La transmissivité T d'un aquifère est :",
    "choices": [
     "T = K/b",
     "T = K × b (perméabilité × épaisseur)",
     "T = b/K",
     "T = K + b"
    ],
    "correct": 1,
    "expl": "T = K × b (m²/s). Capacité de l'aquifère à transmettre l'eau sur toute son épaisseur saturée. Aquifère exploitable : T > 10⁻³ m²/s. Mesurée par pompage d'essai."
   },
   {
    "q": "Le coefficient d'emmagasinement S représente :",
    "choices": [
     "La vitesse de l'eau",
     "Le volume d'eau libéré par unité de surface et de baisse de charge",
     "La température",
     "La salinité"
    ],
    "correct": 1,
    "expl": "S (sans dimension) : volume d'eau libéré/stocké. Nappe libre : S = 0,01-0,3 (porosité efficace). Nappe captive : S = 10⁻³ à 10⁻⁵ (très faible, eau sous pression)."
   },
   {
    "q": "Le rabattement lors d'un pompage est :",
    "choices": [
     "La hausse du niveau",
     "La baisse du niveau piézométrique due au pompage",
     "La température de l'eau",
     "Le débit"
    ],
    "correct": 1,
    "expl": "Rabattement : baisse du niveau d'eau autour du forage (cône de rabattement). Plus le débit est élevé, plus le rabattement est important. Mesuré lors des pompages d'essai."
   },
   {
    "q": "L'essai de pompage (Theis, Jacob) permet de déterminer :",
    "choices": [
     "La couleur de l'eau",
     "La transmissivité et le coefficient d'emmagasinement de l'aquifère",
     "Le pH",
     "Le débit des sources"
    ],
    "correct": 1,
    "expl": "Pompage d'essai : débit constant + mesure du rabattement dans le temps (piézomètres). Méthodes de Theis/Jacob → T et S. Dimensionne l'exploitation durable."
   },
   {
    "q": "La zone non saturée (ZNS) est :",
    "choices": [
     "La nappe elle-même",
     "La couche entre le sol et la nappe, où les pores contiennent air et eau",
     "Une nappe captive",
     "Le fond de l'aquifère"
    ],
    "correct": 1,
    "expl": "ZNS (zone vadose) : entre la surface et le toit de la nappe. Pores partiellement remplis d'eau. Lieu de filtration/épuration mais aussi de transfert de polluants vers la nappe."
   },
   {
    "q": "La piézométrie cartographie :",
    "choices": [
     "La température",
     "Les niveaux et le sens d'écoulement de la nappe",
     "La pollution",
     "Le débit des rivières"
    ],
    "correct": 1,
    "expl": "Carte piézométrique : courbes d'égale charge hydraulique. L'eau s'écoule perpendiculairement aux isopièzes, des hautes vers les basses. Définit les zones d'alimentation/exutoire."
   },
   {
    "q": "Le karst est un aquifère particulier car :",
    "choices": [
     "Il est imperméable",
     "L'eau circule dans des conduits/fissures dissous dans le calcaire (écoulement rapide)",
     "Il contient du sable",
     "Il est toujours salé"
    ],
    "correct": 1,
    "expl": "Karst : calcaire dissous → réseau de fissures et conduits. Écoulement rapide, turbulent (Darcy invalide). Très vulnérable (peu de filtration). Sources karstiques à fort débit variable."
   },
   {
    "q": "L'intrusion saline dans les nappes côtières est causée par :",
    "choices": [
     "La pluie",
     "La surexploitation qui fait remonter le biseau d'eau salée",
     "Le gel",
     "La pollution organique"
    ],
    "correct": 1,
    "expl": "Biseau salé : l'eau de mer (plus dense) s'infiltre sous l'eau douce. La surexploitation abaisse la nappe douce → remontée du sel. Salinisation des captages côtiers. Gérer les prélèvements."
   },
   {
    "q": "La vulnérabilité d'une nappe dépend notamment de :",
    "choices": [
     "Sa couleur",
     "La profondeur, la nature de la ZNS et la perméabilité des terrains de couverture",
     "Son débit",
     "Sa température"
    ],
    "correct": 1,
    "expl": "Vulnérabilité intrinsèque : épaisseur/nature de la couverture, profondeur de la nappe, perméabilité. Méthodes DRASTIC, etc. Oriente la protection des captages."
   },
   {
    "q": "Un forage de reconnaissance sert à :",
    "choices": [
     "Produire de l'eau",
     "Caractériser le sous-sol et l'aquifère (coupe géologique, niveau, qualité)",
     "Stocker l'eau",
     "Irriguer"
    ],
    "correct": 1,
    "expl": "Forage de reconnaissance : explore la géologie, identifie l'aquifère, mesure le niveau et la qualité, teste le débit. Préalable à un forage d'exploitation. Déclaration BSS (BRGM)."
   },
   {
    "q": "Le réseau de surveillance des nappes (piézométrie nationale) est consultable sur :",
    "choices": [
     "Légifrance",
     "ADES (portail national des eaux souterraines)",
     "Vigicrues",
     "SISE-Eaux"
    ],
    "correct": 1,
    "expl": "ADES (Accès aux Données sur les Eaux Souterraines) : portail BRGM. Niveaux piézométriques, qualité des nappes. Outil de suivi de la ressource et de la sécheresse."
   },
   {
    "q": "La recharge d'une nappe a lieu principalement :",
    "choices": [
     "En été",
     "En automne-hiver (faible évapotranspiration, pluies efficaces)",
     "En permanence de façon constante",
     "Jamais"
    ],
    "correct": 1,
    "expl": "Recharge : surtout automne-hiver quand ETP faible et pluies infiltrées. Été : ETP forte → peu de recharge, baisse des niveaux. Suivi crucial pour anticiper les sécheresses."
   },
   {
    "q": "La porosité efficace d'un milieu est :",
    "choices": [
     "La porosité totale",
     "La fraction de pores connectés permettant l'écoulement de l'eau gravitaire",
     "La taille des grains",
     "La perméabilité"
    ],
    "correct": 1,
    "expl": "Porosité efficace : volume d'eau drainable par gravité / volume total. Sable : 15-30%. Argile : forte porosité totale mais porosité efficace quasi nulle (eau liée)."
   },
   {
    "q": "Le débit spécifique d'un forage est :",
    "choices": [
     "Le débit total",
     "Le débit par mètre de rabattement (m³/h/m)",
     "La profondeur",
     "Le diamètre"
    ],
    "correct": 1,
    "expl": "Débit spécifique = Q / rabattement (m³/h/m). Caractérise la productivité du forage. Une baisse dans le temps signale un colmatage ou un vieillissement de l'ouvrage."
   },
   {
    "q": "La déclaration d'un forage domestique est obligatoire :",
    "choices": [
     "Jamais",
     "En mairie (forage prélevant pour usage domestique)",
     "Uniquement si > 1000 m³/j",
     "Seulement en ville"
    ],
    "correct": 1,
    "expl": "Tout forage domestique doit être déclaré en mairie (depuis 2009). Au-delà de 1000 m³/an : régime de déclaration/autorisation Loi sur l'Eau (IOTA). Protège la ressource collective."
   },
   {
    "q": "Les eaux souterraines représentent en France environ :",
    "choices": [
     "10% de l'eau potable",
     "Les deux tiers de l'eau potable distribuée",
     "100% de l'eau potable",
     "Une part négligeable"
    ],
    "correct": 1,
    "expl": "Eaux souterraines : ~2/3 de l'eau potable en France (mieux protégées que les eaux de surface). Le reste provient des rivières/retenues. Ressource stratégique à préserver."
   }
  ]
 },
 {
  "id": "ue4-3",
  "theme": "UE4",
  "themeName": "Assainissement non collectif",
  "ico": "🌊",
  "color": "#4A28A0",
  "colorl": "#EEEDFB",
  "title": "Crues, inondations et risques",
  "desc": "Crues · PPRi · Vigilance · Aléa et vulnérabilité",
  "questions": [
   {
    "q": "Une crue est :",
    "choices": [
     "Une sécheresse",
     "Une augmentation rapide et importante du débit d'un cours d'eau",
     "Une baisse du niveau",
     "Un assèchement"
    ],
    "correct": 1,
    "expl": "Crue : montée des eaux suite à des pluies intenses/fonte. Devient inondation quand l'eau déborde du lit mineur vers le lit majeur. Caractérisée par débit de pointe et durée."
   },
   {
    "q": "Le débit de crue centennale (Q100) a une probabilité annuelle de dépassement de :",
    "choices": [
     "100%",
     "1%",
     "10%",
     "0,1%"
    ],
    "correct": 1,
    "expl": "Q100 : période de retour 100 ans → 1% de chance d'être dépassé chaque année. Sur 100 ans, ~63% de probabilité d'au moins une occurrence. Référence des PPRi."
   },
   {
    "q": "Le PPRi (Plan de Prévention du Risque inondation) est :",
    "choices": [
     "Un document facultatif",
     "Un document réglementaire opposable qui réglemente l'urbanisme en zone inondable",
     "Une carte touristique",
     "Un plan de pompage"
    ],
    "correct": 1,
    "expl": "PPRi : établi par l'État (préfet), annexé au PLU, opposable. Zones rouges (inconstructibles) / bleues (constructibles avec prescriptions). Basé sur la crue de référence (souvent centennale)."
   },
   {
    "q": "Le risque inondation résulte de la combinaison :",
    "choices": [
     "Pluie + vent",
     "Aléa (phénomène) × Vulnérabilité (enjeux exposés)",
     "Débit + température",
     "Nappe + rivière"
    ],
    "correct": 1,
    "expl": "Risque = Aléa × Vulnérabilité. Aléa : intensité/probabilité de la crue. Vulnérabilité : population, biens, activités exposés. Réduire l'un ou l'autre réduit le risque."
   },
   {
    "q": "La vigilance crues est diffusée par :",
    "choices": [
     "Météo-France seule",
     "Vigicrues (réseau SCHAPI/SPC) avec 4 couleurs",
     "Les mairies",
     "La télévision uniquement"
    ],
    "correct": 1,
    "expl": "Vigicrues (vigicrues.gouv.fr) : SCHAPI + Services de Prévision des Crues. 4 niveaux : vert, jaune, orange, rouge. Prévision sur les cours d'eau surveillés."
   },
   {
    "q": "Le lit majeur d'un cours d'eau est :",
    "choices": [
     "Le lit habituel",
     "La zone inondable occupée lors des crues débordantes",
     "Le fond du lit",
     "La source"
    ],
    "correct": 1,
    "expl": "Lit majeur : zone d'expansion des crues au-delà du lit mineur (habituel). Champ d'inondation naturel. Sa préservation (zones d'expansion de crue) protège l'aval."
   },
   {
    "q": "Une crue éclair (flash flood) se caractérise par :",
    "choices": [
     "Une montée lente sur plusieurs jours",
     "Une montée très rapide (quelques heures) sur petits bassins versants",
     "Une absence de danger",
     "Une crue de nappe"
    ],
    "correct": 1,
    "expl": "Crue éclair : réaction rapide de petits BV pentus (méditerranéen, montagne) à des pluies intenses. Très dangereuse (peu d'anticipation). Ex : crues cévenoles."
   },
   {
    "q": "La période de retour T et la probabilité p sont liées par :",
    "choices": [
     "T = p",
     "T = 1/p",
     "T = p²",
     "T = 100 - p"
    ],
    "correct": 1,
    "expl": "T = 1/p. Crue décennale : p = 0,1 (10%/an). Centennale : p = 0,01 (1%/an). Plus T est grand, plus la crue est rare et intense."
   },
   {
    "q": "Les zones d'expansion de crue (ZEC) servent à :",
    "choices": [
     "Construire",
     "Stocker temporairement l'eau et écrêter la crue à l'aval",
     "Pomper",
     "Irriguer"
    ],
    "correct": 1,
    "expl": "ZEC : champs/prairies du lit majeur qui stockent l'eau en crue, réduisant le pic à l'aval. Solution fondée sur la nature. À préserver de l'urbanisation (PPRi, SAGE)."
   },
   {
    "q": "La compétence GEMAPI (Gestion des Milieux Aquatiques et Prévention des Inondations) est confiée depuis 2018 :",
    "choices": [
     "À l'État",
     "Aux EPCI (intercommunalités)",
     "Aux régions",
     "Aux particuliers"
    ],
    "correct": 1,
    "expl": "GEMAPI : compétence obligatoire des EPCI depuis 2018 (loi MAPTAM). Entretien des cours d'eau, digues, ouvrages de protection. Financée par une taxe dédiée possible."
   },
   {
    "q": "Un repère de crue sert à :",
    "choices": [
     "Mesurer le débit en continu",
     "Marquer et conserver la mémoire du niveau atteint lors de crues historiques",
     "Pomper l'eau",
     "Indiquer la profondeur des nappes"
    ],
    "correct": 1,
    "expl": "Repère de crue : marque physique du niveau maximal atteint. Entretien de la mémoire du risque (souvent oubliée). Obligation d'inventaire et de pose dans les communes à risque."
   },
   {
    "q": "La Directive Inondation (2007/60/CE) impose notamment :",
    "choices": [
     "La construction de barrages",
     "La cartographie des risques et des PGRI par district",
     "La suppression des rivières",
     "Le pompage des nappes"
    ],
    "correct": 1,
    "expl": "Directive Inondation : évaluation préliminaire, TRI (Territoires à Risque important), cartographie des aléas, PGRI révisés tous les 6 ans. Réduire les conséquences négatives."
   },
   {
    "q": "Le ralentissement dynamique des crues consiste à :",
    "choices": [
     "Accélérer l'écoulement",
     "Restaurer les zones humides/méandres pour stocker et freiner l'eau",
     "Bétonner les berges",
     "Pomper plus vite"
    ],
    "correct": 1,
    "expl": "Ralentissement dynamique : redonner de l'espace au cours d'eau (méandres, zones humides, haies, ZEC) pour étaler la crue dans le temps. Alternative durable aux digues."
   },
   {
    "q": "L'hydrogramme de crue représente :",
    "choices": [
     "La pluie",
     "L'évolution du débit en fonction du temps",
     "La température",
     "La piézométrie"
    ],
    "correct": 1,
    "expl": "Hydrogramme : courbe débit = f(temps). Montre la montée (concentration), le pic et la décrue (tarissement). Caractérise la réponse du bassin versant à une pluie."
   },
   {
    "q": "Le temps de montée d'une crue est :",
    "choices": [
     "La durée totale",
     "Le délai entre le début de la montée et le pic de débit",
     "La décrue",
     "La période de retour"
    ],
    "correct": 1,
    "expl": "Temps de montée : du début de crue au débit de pointe. Court pour les petits BV pentus (crues éclair), long pour les grands fleuves. Détermine le délai d'anticipation."
   },
   {
    "q": "Les digues de protection contre les inondations sont classées selon :",
    "choices": [
     "Leur couleur",
     "La population protégée (classes A, B, C)",
     "Leur longueur uniquement",
     "Leur âge"
    ],
    "correct": 1,
    "expl": "Digues : classes selon la population protégée (décret 2015-526). Obligations de surveillance, d'études de dangers, d'entretien. Gérées dans le cadre de la GEMAPI."
   },
   {
    "q": "La culture du risque inondation vise à :",
    "choices": [
     "Effrayer la population",
     "Sensibiliser et préparer les habitants (PCS, exercices, repères)",
     "Interdire d'habiter",
     "Augmenter les assurances"
    ],
    "correct": 1,
    "expl": "Culture du risque : information préventive (DICRIM), Plan Communal de Sauvegarde (PCS), exercices, repères de crue. Réduire la vulnérabilité humaine par la préparation."
   },
   {
    "q": "Le régime des catastrophes naturelles (Cat Nat) en France :",
    "choices": [
     "N'existe pas",
     "Indemnise les sinistrés via une surprime d'assurance et un arrêté interministériel",
     "Est gratuit",
     "Concerne seulement l'agriculture"
    ],
    "correct": 1,
    "expl": "Régime Cat Nat (loi 1982) : indemnisation des dommages après arrêté de catastrophe naturelle. Financé par surprime sur les contrats d'assurance (12%). Solidarité nationale."
   },
   {
    "q": "Le débordement de réseau pluvial urbain en cas d'orage est aggravé par :",
    "choices": [
     "Les espaces verts",
     "L'imperméabilisation des sols (ruissellement accru)",
     "Les nappes",
     "Les rivières"
    ],
    "correct": 1,
    "expl": "Imperméabilisation : moins d'infiltration → ruissellement rapide et accru → saturation des réseaux EP → débordements. D'où les techniques alternatives (noues, ZAN)."
   },
   {
    "q": "La submersion marine est un risque côtier lié à :",
    "choices": [
     "La sécheresse",
     "La conjonction de fortes marées, tempêtes et surcotes (parfois aggravée par le climat)",
     "Les nappes",
     "Les rivières de montagne"
    ],
    "correct": 1,
    "expl": "Submersion marine : envahissement temporaire par la mer (tempête + marée haute + surcote). Aggravée par l'élévation du niveau marin (changement climatique). Concernée par les PPRL."
   }
  ]
 },
 {
  "id": "ue4-4",
  "theme": "UE4",
  "themeName": "Assainissement non collectif",
  "ico": "📡",
  "color": "#4A28A0",
  "colorl": "#EEEDFB",
  "title": "Mesures hydrologiques et instrumentation",
  "desc": "Jaugeage · Pluviométrie · Débitmétrie · Télémétrie",
  "questions": [
   {
    "q": "Le jaugeage d'un cours d'eau consiste à :",
    "choices": [
     "Mesurer la température",
     "Mesurer le débit (volume par unité de temps)",
     "Mesurer le pH",
     "Compter les poissons"
    ],
    "correct": 1,
    "expl": "Jaugeage : mesure du débit (m³/s). Méthodes : exploration du champ de vitesses (moulinet, ADCP), dilution de traceur, structures calibrées (seuils, déversoirs)."
   },
   {
    "q": "La courbe de tarage d'une station hydrométrique relie :",
    "choices": [
     "Pluie et débit",
     "Hauteur d'eau et débit",
     "Température et débit",
     "pH et débit"
    ],
    "correct": 1,
    "expl": "Courbe de tarage : relation hauteur (lue en continu) ↔ débit (mesuré ponctuellement par jaugeages). Permet de déduire le débit à partir de la seule hauteur. À réactualiser."
   },
   {
    "q": "L'ADCP (Acoustic Doppler Current Profiler) mesure la vitesse par :",
    "choices": [
     "Pression",
     "Effet Doppler sur les particules en suspension",
     "Conductivité",
     "Température"
    ],
    "correct": 1,
    "expl": "ADCP : émet des ultrasons, mesure le décalage Doppler renvoyé par les particules → profil de vitesses. Standard moderne pour jauger rivières et grands débits."
   },
   {
    "q": "Le moulinet hydrométrique mesure :",
    "choices": [
     "Le pH",
     "La vitesse ponctuelle du courant (rotation d'une hélice)",
     "La pluie",
     "La turbidité"
    ],
    "correct": 1,
    "expl": "Moulinet : hélice dont la vitesse de rotation est proportionnelle à la vitesse du courant. Exploration verticale et horizontale → débit par intégration des vitesses × sections."
   },
   {
    "q": "Un pluviomètre mesure :",
    "choices": [
     "Le débit",
     "La hauteur de pluie tombée (mm)",
     "La vitesse du vent",
     "L'évaporation"
    ],
    "correct": 1,
    "expl": "Pluviomètre : hauteur de précipitation (mm = L/m²). Pluviomètre à augets basculeurs pour l'enregistrement automatique de l'intensité. Réseau Météo-France."
   },
   {
    "q": "1 mm de pluie correspond à :",
    "choices": [
     "1 L/m²",
     "10 L/m²",
     "100 L/m²",
     "1 m³/m²"
    ],
    "correct": 0,
    "expl": "1 mm de pluie = 1 L/m² = 10 m³/ha. Une pluie de 30 mm sur 1 ha = 300 m³. Base des calculs de ruissellement et de dimensionnement des ouvrages pluviaux."
   },
   {
    "q": "La sonde piézométrique (capteur de pression) mesure :",
    "choices": [
     "Le débit",
     "Le niveau d'eau (nappe ou rivière) par la pression de la colonne d'eau",
     "La température",
     "La conductivité"
    ],
    "correct": 1,
    "expl": "Sonde de pression : mesure la hauteur d'eau au-dessus du capteur. Compensée de la pression atmosphérique. Enregistrement en continu des niveaux (nappe, cours d'eau, ouvrages)."
   },
   {
    "q": "Le débitmètre électromagnétique fonctionne selon :",
    "choices": [
     "L'effet Doppler",
     "La loi de Faraday (tension induite par le fluide conducteur)",
     "La pression différentielle",
     "La gravité"
    ],
    "correct": 1,
    "expl": "Débitmètre électromagnétique : loi de Faraday, V = E/(k·B·D). Conduite pleine, fluide conducteur (≥ 5 µS/cm). Précision ±0,5%, aucune perte de charge. Très utilisé en AEP/STEU."
   },
   {
    "q": "La méthode de dilution (traceur) pour mesurer un débit consiste à :",
    "choices": [
     "Pomper l'eau",
     "Injecter un traceur et mesurer sa dilution à l'aval",
     "Mesurer la pluie",
     "Compter les vagues"
    ],
    "correct": 1,
    "expl": "Dilution : injection d'un traceur (sel, fluorescéine) de concentration connue, mesure de la dilution à l'aval → débit. Adaptée aux torrents turbulents où le moulinet est inutilisable."
   },
   {
    "q": "La télétransmission des données hydrométriques permet :",
    "choices": [
     "De facturer l'eau",
     "La remontée automatique en temps réel des mesures vers une base centrale",
     "De désinfecter",
     "De pomper"
    ],
    "correct": 1,
    "expl": "Télétransmission (GSM, satellite, radio) : données de niveau/débit/pluie remontées en temps réel. Base de la vigilance crues et de la gestion de la ressource. Stockées dans la banque Hydro."
   },
   {
    "q": "Le débit d'étiage QMNA5 caractérise :",
    "choices": [
     "La crue",
     "Le débit mensuel minimal de fréquence quinquennale (sécheresse)",
     "Le débit moyen",
     "Le débit de pointe"
    ],
    "correct": 1,
    "expl": "QMNA5 : débit mensuel minimal annuel de période de retour 5 ans. Référence pour l'étiage, les autorisations de prélèvement et le débit réservé (1/10 du module)."
   },
   {
    "q": "Le module d'un cours d'eau est :",
    "choices": [
     "Le débit de crue",
     "Le débit moyen interannuel",
     "Le débit minimal",
     "La hauteur d'eau"
    ],
    "correct": 1,
    "expl": "Module : débit moyen calculé sur plusieurs années. Le débit réservé minimal à laisser à l'aval d'un ouvrage est généralement 1/10 du module (art. L214-18 Code env.)."
   },
   {
    "q": "Le limnimètre (échelle limnimétrique) sert à :",
    "choices": [
     "Mesurer la pluie",
     "Lire visuellement la hauteur d'eau",
     "Mesurer la vitesse",
     "Compter les poissons"
    ],
    "correct": 1,
    "expl": "Limnimètre : échelle graduée fixée dans le cours d'eau. Lecture visuelle de la hauteur d'eau. Complément/secours des capteurs automatiques. Référence de la courbe de tarage."
   },
   {
    "q": "La station hydrométrique de référence en France est gérée via :",
    "choices": [
     "SISE-Eaux",
     "La banque HYDRO (portail hydro.eaufrance.fr)",
     "ADES",
     "Légifrance"
    ],
    "correct": 1,
    "expl": "Banque HYDRO : données de débit des cours d'eau (stations hydrométriques). Gérée par le SCHAPI/DREAL. Complément d'ADES (eaux souterraines) et de Naïades (qualité)."
   },
   {
    "q": "Le radar hydrologique (mesure sans contact) présente l'avantage de :",
    "choices": [
     "Mesurer le pH",
     "Mesurer la vitesse/niveau sans immersion (sécurité en crue)",
     "Désinfecter",
     "Pomper"
    ],
    "correct": 1,
    "expl": "Radar : mesure de surface (vitesse, niveau) sans contact avec l'eau. Sécuritaire et durable en crue (pas d'emportement de matériel). De plus en plus utilisé en hydrométrie."
   },
   {
    "q": "La pluie efficace est :",
    "choices": [
     "Toute la pluie",
     "La fraction de pluie qui ruisselle ou s'infiltre après l'évapotranspiration",
     "La pluie d'orage",
     "La neige"
    ],
    "correct": 1,
    "expl": "Pluie efficace = pluie - ETR. Part qui alimente le ruissellement et la recharge des nappes. Concentrée en automne-hiver. Base du bilan hydrologique et de la recharge."
   },
   {
    "q": "Le pas de temps d'enregistrement pour une crue éclair doit être :",
    "choices": [
     "Journalier",
     "Fin (5 à 15 minutes) pour capter la dynamique rapide",
     "Annuel",
     "Mensuel"
    ],
    "correct": 1,
    "expl": "Crue éclair : dynamique de quelques heures → pas de temps fin (5-15 min) indispensable. Un pas de temps journalier masquerait le pic. Adapté aux capteurs automatiques."
   },
   {
    "q": "La bathymétrie d'un cours d'eau ou retenue mesure :",
    "choices": [
     "La qualité",
     "La profondeur et la forme du fond",
     "Le débit",
     "La pluie"
    ],
    "correct": 1,
    "expl": "Bathymétrie : relevé des profondeurs (sondeur, écho-sondeur). Définit le profil en travers, le volume des retenues, l'envasement des barrages. Utile pour les modèles hydrauliques."
   },
   {
    "q": "La validation/critique des données hydrométriques est nécessaire car :",
    "choices": [
     "Les données sont toujours parfaites",
     "Des erreurs (capteur, embâcle, gel) doivent être détectées et corrigées",
     "C'est interdit",
     "Cela coûte cher"
    ],
    "correct": 1,
    "expl": "Critique des données : détection des valeurs aberrantes (panne capteur, embâcle, gel, dérive de tarage). Indispensable avant exploitation statistique. Travail clé de l'hydrologue."
   },
   {
    "q": "Le réseau de mesure de la qualité des cours d'eau en France est consultable sur :",
    "choices": [
     "HYDRO",
     "Naïades (naiades.eaufrance.fr)",
     "ADES",
     "Vigicrues"
    ],
    "correct": 1,
    "expl": "Naïades : portail national des données de qualité des eaux de surface (physico-chimie, biologie). HYDRO = débits, ADES = nappes. Tous regroupés sous eaufrance.fr."
   }
  ]
 },
 {
  "id": "ue4-5",
  "theme": "UE4",
  "themeName": "Assainissement non collectif",
  "ico": "💧",
  "color": "#4A28A0",
  "colorl": "#EEEDFB",
  "title": "Gestion de la ressource en eau",
  "desc": "Bilan besoins/ressources · Sécheresse · Partage · Changement climatique",
  "questions": [
   {
    "q": "Le bilan besoins-ressources en eau compare :",
    "choices": [
     "Pluie et neige",
     "Les prélèvements/besoins et la disponibilité de la ressource",
     "Le débit et la température",
     "Les nappes et les rivières"
    ],
    "correct": 1,
    "expl": "Bilan besoins-ressources : confronte les demandes (AEP, agriculture, industrie) à la ressource disponible (par bassin, par saison). Identifie les déséquilibres (déficit quantitatif)."
   },
   {
    "q": "Une Zone de Répartition des Eaux (ZRE) est :",
    "choices": [
     "Une zone de loisirs",
     "Un secteur où les besoins dépassent durablement la ressource",
     "Une zone humide",
     "Une zone de baignade"
    ],
    "correct": 1,
    "expl": "ZRE : zone de déséquilibre chronique entre besoins et ressource. Encadrement renforcé des prélèvements (seuils d'autorisation abaissés). Désignée par arrêté préfectoral."
   },
   {
    "q": "L'arrêté sécheresse définit des niveaux de restriction graduels :",
    "choices": [
     "Aucun niveau",
     "Vigilance, alerte, alerte renforcée, crise",
     "Un seul niveau",
     "Dix niveaux"
    ],
    "correct": 1,
    "expl": "4 niveaux : vigilance (sensibilisation), alerte, alerte renforcée, crise (seuls usages prioritaires). Restrictions sur arrosage, lavage, remplissage piscines, prélèvements agricoles."
   },
   {
    "q": "Le débit réservé (débit minimum biologique) à laisser à l'aval d'un ouvrage est au minimum :",
    "choices": [
     "1/100 du module",
     "1/10 du module (parfois 1/20 pour les grands cours d'eau)",
     "Le module entier",
     "Zéro"
    ],
    "correct": 1,
    "expl": "Débit réservé : ≥ 1/10 du module (art. L214-18). 1/20 possible pour les cours d'eau à module > 80 m³/s. Garantit la vie aquatique et les usages à l'aval."
   },
   {
    "q": "Les retenues de substitution (\"bassines\") visent à :",
    "choices": [
     "Produire de l'électricité",
     "Stocker l'eau en hiver pour l'irrigation estivale (sujet débattu)",
     "Traiter l'eau",
     "Inonder"
    ],
    "correct": 1,
    "expl": "Retenues de substitution : remplies l'hiver (eau abondante) pour l'irrigation d'été. Objectif : réduire les prélèvements estivaux. Sujet très débattu (impact sur les nappes, accaparement)."
   },
   {
    "q": "Le changement climatique affecte la ressource en eau par :",
    "choices": [
     "Aucun effet",
     "Modification des régimes de pluie, étiages plus sévères, fonte des glaciers",
     "Plus d'eau partout",
     "Une stabilité totale"
    ],
    "correct": 1,
    "expl": "Changement climatique : étiages plus longs/sévères, crues plus intenses, baisse de recharge des nappes, fonte des glaciers (soutien d'étiage réduit). Adaptation nécessaire (Plan Eau)."
   },
   {
    "q": "Les usages prioritaires de l'eau en période de crise sécheresse sont :",
    "choices": [
     "L'arrosage des golfs",
     "L'eau potable, la santé, la sécurité civile, l'abreuvement",
     "Le lavage des voitures",
     "Le remplissage des piscines"
    ],
    "correct": 1,
    "expl": "Priorité absolue : eau potable, salubrité, sécurité (incendie), santé, abreuvement du bétail. Les usages de confort/loisir sont restreints en premier. Hiérarchie des usages."
   },
   {
    "q": "L'Organisme Unique de Gestion Collective (OUGC) gère :",
    "choices": [
     "L'eau potable",
     "La répartition des volumes d'eau d'irrigation entre agriculteurs",
     "Les barrages",
     "Les stations d'épuration"
    ],
    "correct": 1,
    "expl": "OUGC : porte l'autorisation unique de prélèvement pour l'irrigation sur un territoire et répartit les volumes entre irrigants. Outil de gestion collective dans les ZRE."
   },
   {
    "q": "Le Plan Eau 2023 fixe un objectif de réduction des prélèvements de :",
    "choices": [
     "5%",
     "10% d'ici 2030",
     "50%",
     "Aucun"
    ],
    "correct": 1,
    "expl": "Plan Eau (mars 2023, 53 mesures) : -10% de prélèvements d'ici 2030, sobriété de tous les usages, ×10 la REUT, rénovation des réseaux fuyards, tarification progressive."
   },
   {
    "q": "La sobriété hydrique vise à :",
    "choices": [
     "Gaspiller",
     "Réduire les consommations de tous les usagers (économies d'eau)",
     "Augmenter les prélèvements",
     "Construire des barrages"
    ],
    "correct": 1,
    "expl": "Sobriété : réduire la demande (industrie, agriculture, collectivités, particuliers). Premier levier face à la raréfaction. Récupération d'eau de pluie, équipements économes, REUT."
   },
   {
    "q": "Le SAGE (Schéma d'Aménagement et de Gestion des Eaux) est :",
    "choices": [
     "National",
     "Un document de planification local porté par une Commission Locale de l'Eau (CLE)",
     "Un arrêté de police",
     "Un permis de construire"
    ],
    "correct": 1,
    "expl": "SAGE : décline le SDAGE à l'échelle d'un bassin versant cohérent. Élaboré par la CLE (élus, usagers, État). Opposable. Règle les usages, protège les milieux et la ressource."
   },
   {
    "q": "L'évapotranspiration potentielle (ETP) augmente avec :",
    "choices": [
     "La pluie",
     "La température, le rayonnement, le vent et la sécheresse de l'air",
     "L'humidité",
     "La nuit"
    ],
    "correct": 1,
    "expl": "ETP : demande climatique en eau. Augmente avec température, rayonnement solaire, vent, faible humidité. Détermine les besoins d'irrigation. Formule de référence : Penman-Monteith."
   },
   {
    "q": "Le stress hydrique d'un territoire correspond à :",
    "choices": [
     "Trop d'eau",
     "Une demande qui approche ou dépasse la ressource renouvelable disponible",
     "Une eau polluée",
     "Une eau froide"
    ],
    "correct": 1,
    "expl": "Stress hydrique : ratio prélèvements/ressource élevé. Seuil de stress : > 20% de la ressource prélevée. La France connaît un stress croissant en été dans plusieurs bassins."
   },
   {
    "q": "Les économies d'eau dans l'industrie passent notamment par :",
    "choices": [
     "Plus de rejets",
     "Le recyclage en circuit fermé et l'optimisation des process",
     "Plus de prélèvements",
     "Le gaspillage"
    ],
    "correct": 1,
    "expl": "Industrie : recyclage interne (circuits fermés, cascades), récupération de chaleur/eau, REUT. L'industrie représente une part importante des prélèvements (refroidissement notamment)."
   },
   {
    "q": "La récupération des eaux de pluie pour usages non potables est :",
    "choices": [
     "Interdite",
     "Autorisée et encadrée (arrêté du 21/08/2008)",
     "Obligatoire partout",
     "Réservée aux industries"
    ],
    "correct": 1,
    "expl": "Récupération eaux de pluie : autorisée pour usages extérieurs et certains usages intérieurs (WC, lavage des sols). Arrêté du 21/08/2008. Réseau séparé et signalé (eau non potable)."
   },
   {
    "q": "Le débit objectif d'étiage (DOE) est :",
    "choices": [
     "Le débit de crue",
     "Le débit à respecter à l'étiage pour satisfaire usages et milieux",
     "Le débit moyen",
     "Le débit maximum"
    ],
    "correct": 1,
    "expl": "DOE : valeur de débit d'étiage à respecter en moyenne 8 années sur 10 à un point nodal. Fixé par le SDAGE. En-dessous : déclenchement des mesures de restriction."
   },
   {
    "q": "La désalinisation (dessalement) de l'eau de mer est :",
    "choices": [
     "Gratuite et écologique",
     "Énergivore et coûteuse, utilisée surtout sur les littoraux/îles en stress",
     "Sans rejet",
     "Interdite"
    ],
    "correct": 1,
    "expl": "Dessalement (osmose inverse) : produit de l'eau douce mais énergivore et coûteux, rejette une saumure concentrée. Solution de dernier recours (îles, zones arides côtières)."
   },
   {
    "q": "Le partage de l'eau entre usages (AEP, agriculture, industrie, milieux) relève :",
    "choices": [
     "Du seul marché",
     "D'une gestion concertée (SDAGE, SAGE, CLE) avec priorité à l'eau potable et aux milieux",
     "De l'État seul",
     "Du hasard"
    ],
    "correct": 1,
    "expl": "Partage de l'eau : gestion concertée par bassin (comités de bassin, CLE). Priorité à la santé/AEP et au bon fonctionnement des milieux. Conciliation des usages économiques."
   },
   {
    "q": "La tarification progressive de l'eau encourage :",
    "choices": [
     "Le gaspillage",
     "La sobriété (prix au m³ croissant avec la consommation)",
     "Les fuites",
     "La pollution"
    ],
    "correct": 1,
    "expl": "Tarification progressive : tranches à prix croissant. Première tranche (besoins essentiels) abordable, tranches supérieures dissuasives. Encouragée par le Plan Eau pour la sobriété."
   },
   {
    "q": "Le suivi de la sécheresse en France s'appuie sur :",
    "choices": [
     "La couleur du ciel",
     "Les indicateurs de niveaux de nappes (ADES), débits (HYDRO) et humidité des sols",
     "Les prévisions à 1 an",
     "Le prix de l'eau"
    ],
    "correct": 1,
    "expl": "Suivi sécheresse : piézométrie (ADES), débits d'étiage (HYDRO), humidité des sols (Météo-France), enneigement. Bulletins du BRGM et propluvia.gouv.fr (arrêtés de restriction)."
   }
  ]
 },
 {
  "id": "ue5-1",
  "theme": "UE5",
  "themeName": "Milieux naturels",
  "ico": "📋",
  "color": "#A01C1C",
  "colorl": "#FCEAEA",
  "title": "Réglementation eau et environnement",
  "desc": "LEMA · DCE · NOTRe · Loi Eau · IOTA · SPANC",
  "questions": [
   {
    "q": "La LEMA (Loi sur l'Eau et les Milieux Aquatiques) date de :",
    "choices": [
     "1992",
     "2000",
     "2006",
     "2015"
    ],
    "correct": 2,
    "expl": "LEMA : loi n°2006-1772 du 30/12/2006. Transpose la DCE, crée le SPANC obligatoire, réforme les redevances des Agences de l'eau."
   },
   {
    "q": "La Directive Cadre sur l'Eau (DCE) fixe comme objectif :",
    "choices": [
     "Le bon état chimique uniquement",
     "Le bon état écologique ET chimique de toutes les masses d'eau d'ici 2027",
     "La suppression de tous les obstacles à l'écoulement",
     "L'interdiction des pesticides"
    ],
    "correct": 1,
    "expl": "DCE 2000/60/CE : bon état écologique + chimique de toutes les masses d'eau d'ici 2027. Non-dégradation. 6 districts en France."
   },
   {
    "q": "La compétence eau et assainissement est obligatoire pour les EPCI depuis :",
    "choices": [
     "2015",
     "2017",
     "2020",
     "2025"
    ],
    "correct": 2,
    "expl": "Loi NOTRe 2015 : compétence eau et assainissement des EPCI obligatoire depuis 01/01/2020 (communautés de communes et d'agglomération)."
   },
   {
    "q": "Un ouvrage en cours d'eau soumis à autorisation IOTA doit déposer un dossier à :",
    "choices": [
     "La mairie",
     "La DDT (Service Police de l'Eau)",
     "L'Agence de l'eau",
     "La DREAL directement"
    ],
    "correct": 1,
    "expl": "IOTA (Code envt R.214-1) : dossier Loi sur l'Eau déposé à la DDT. Instruction par le service Police de l'Eau. Enquête publique si autorisation."
   },
   {
    "q": "Le SDAGE est élaboré par :",
    "choices": [
     "Les préfets de région",
     "Les comités de bassin (Agences de l'eau)",
     "La DREAL",
     "Le ministère uniquement"
    ],
    "correct": 1,
    "expl": "SDAGE : Schéma Directeur d'Aménagement et de Gestion des Eaux. Élaboré par le comité de bassin. Révisé tous les 6 ans. Décline la DCE."
   },
   {
    "q": "Le Plan Eau 2023 fixe un objectif de réduction des prélèvements de :",
    "choices": [
     "5%",
     "10%",
     "25%",
     "50%"
    ],
    "correct": 1,
    "expl": "Plan Eau mars 2023 : -10% de prélèvements en eau d'ici 2030. REUT ×10. Rendement réseau AEP < 80% → schéma directeur obligatoire."
   },
   {
    "q": "La Directive Inondation 2007/60/CE a été transposée en France par :",
    "choices": [
     "La LEMA 2006",
     "La loi Grenelle II 2010",
     "La loi NOTRe 2015",
     "La loi Biodiversité 2016"
    ],
    "correct": 1,
    "expl": "Directive Inondation transposée par Grenelle II 2010. Création des PGRI, TRI (122 en France). GEMAPI : compétence EPCI depuis 2018."
   },
   {
    "q": "La Directive eau potable 2020/2184 impose une limite pour les PFAS totaux de :",
    "choices": [
     "1 µg/L",
     "0,1 µg/L",
     "0,01 µg/L",
     "0,001 µg/L"
    ],
    "correct": 1,
    "expl": "Directive 2020/2184 : PFAS totaux (20 listés) < 0,1 µg/L (dès 2026). PFOA, PFOS individuels < 0,02 µg/L. PSE obligatoire > 5000 m³/j."
   },
   {
    "q": "Le PSE (Plan de Sécurité de l'Eau) est obligatoire pour les UDI distribuant plus de :",
    "choices": [
     "1 000 m³/j",
     "5 000 m³/j",
     "10 000 m³/j",
     "50 000 m³/j"
    ],
    "correct": 1,
    "expl": "Directive 2020/2184 (transposition 2026) : PSE obligatoire pour UDI > 5000 m³/j. Méthode HACCP appliquée à l'AEP."
   },
   {
    "q": "Les zones vulnérables nitrates sont définies par :",
    "choices": [
     "La DCE",
     "La Directive Nitrates 91/676/CEE",
     "La LEMA",
     "L'arrêté de 2007"
    ],
    "correct": 1,
    "expl": "Directive Nitrates 91/676/CEE : zones où les eaux dépassent ou risquent de dépasser 50 mg/L NO₃⁻. Programme d'action obligatoire (PAN)."
   },
   {
    "q": "Le principe pollueur-payeur en droit de l'eau se traduit principalement par :",
    "choices": [
     "Les sanctions pénales",
     "Les redevances des Agences de l'eau",
     "L'interdiction des rejets",
     "La responsabilité civile uniquement"
    ],
    "correct": 1,
    "expl": "Redevances Agences : pollution (émissions), prélèvement, modernisation réseaux. Principe pollueur-payeur inscrit dans Code envt L.110-1."
   },
   {
    "q": "Une zone humide détruite doit être compensée par :",
    "choices": [
     "Un paiement à l'État",
     "La création ou restauration de 2 ha pour 1 ha détruit (minimum)",
     "Un reboisement",
     "La compensation n'est pas obligatoire"
    ],
    "correct": 1,
    "expl": "Loi Biodiversité 2016 : séquence ERC (Éviter, Réduire, Compenser). Compensation zones humides : ratio minimum 2:1. OFB contrôle."
   },
   {
    "q": "Le RPQS (Rapport Prix et Qualité du Service) est publié :",
    "choices": [
     "Tous les 5 ans",
     "Chaque année",
     "Tous les 3 ans",
     "Sur demande"
    ],
    "correct": 1,
    "expl": "RPQS : rapport annuel obligatoire pour eau et assainissement. Indicateurs : ILP, rendement IP106, volume, prix, indice connaissance réseau."
   },
   {
    "q": "L'indice de connaissance des réseaux (IP119) est utilisé dans le RPQS pour :",
    "choices": [
     "Mesurer la qualité de l'eau",
     "Évaluer la qualité du plan de gestion patrimonial des réseaux AEP",
     "Calculer les fuites",
     "Estimer le nombre de branchements"
    ],
    "correct": 1,
    "expl": "IP119 : 0-120 points. Évalue la connaissance du réseau (plans, âge conduites, matériaux, branchements plomb...). Obligatoire RPQS."
   },
   {
    "q": "La DUP (Déclaration d'Utilité Publique) d'un captage AEP crée :",
    "choices": [
     "Un périmètre de protection avec servitudes",
     "Une taxe sur les riverains",
     "L'interdiction de toute activité sur 500 m",
     "L'obligation d'acheter les terrains"
    ],
    "correct": 0,
    "expl": "DUP captage : 3 périmètres de protection (immédiat, rapproché, éloigné). Servitudes imposées aux propriétaires. Procédure CODERST."
   },
   {
    "q": "La gestion des espèces exotiques envahissantes (EEE) est encadrée par :",
    "choices": [
     "La DCE",
     "La Loi Biodiversité 2016 et le règlement UE 1143/2014",
     "La LEMA",
     "Le Code rural uniquement"
    ],
    "correct": 1,
    "expl": "Règlement UE 1143/2014 + Loi Biodiversité 2016 : liste EEE préoccupantes. Interdiction introduction, détention, transport. Gestion : OFB + DREAL."
   },
   {
    "q": "Le SAGE (Schéma d'Aménagement et de Gestion des Eaux) est :",
    "choices": [
     "Un document national",
     "Un document de planification locale, déclinaison du SDAGE à l'échelle d'un BV cohérent",
     "Un arrêté préfectoral",
     "Un document facultatif"
    ],
    "correct": 1,
    "expl": "SAGE : document de planification locale. Élaboré par la CLE (Commission Locale de l'Eau). Opposable aux tiers. Décline le SDAGE localement."
   },
   {
    "q": "La TVB (Trame Verte et Bleue) est composée de :",
    "choices": [
     "Uniquement les forêts",
     "Corridors écologiques terrestres (verte) + cours d'eau et zones humides (bleue)",
     "Les zones agricoles uniquement",
     "Les zones urbaines"
    ],
    "correct": 1,
    "expl": "TVB : Grenelle II 2010. Trame bleue = réseau hydrographique + zones humides. SRCE (devenu SRADDET) la décline au niveau régional."
   },
   {
    "q": "Le contentieux européen de la France sur la DCE concerne principalement :",
    "choices": [
     "L'absence de SDAGE",
     "L'insuffisance d'atteinte des objectifs de bon état des masses d'eau",
     "L'absence de directive nitrates",
     "Le retard de transposition LEMA"
    ],
    "correct": 1,
    "expl": "Commission européenne vs France : procédure infraction pour non-atteinte objectifs DCE. France : ~43% masses d'eau en bon état en 2024 (objectif 2027 compromis)."
   },
   {
    "q": "Le ZAN (Zéro Artificialisation Nette) a été introduit par :",
    "choices": [
     "La loi LEMA 2006",
     "La loi Grenelle II 2010",
     "La loi Climat et Résilience 2021",
     "La loi NOTRe 2015"
    ],
    "correct": 2,
    "expl": "Loi Climat 2021 : ZAN. -50% artificialisation 2021-2031. Objectif ZAN 2050. Impact majeur sur gestion EP (sols perméables, noues...)."
   }
  ]
 },
 {
  "id": "ue5-2",
  "theme": "UE5",
  "themeName": "Milieux naturels",
  "ico": "🏛️",
  "color": "#A01C1C",
  "colorl": "#FCEAEA",
  "title": "Institutions et acteurs de l'eau",
  "desc": "Agences de l'eau · Comités de bassin · OFB · Compétences",
  "questions": [
   {
    "q": "La France métropolitaine est découpée en :",
    "choices": [
     "3 bassins",
     "6 grands bassins hydrographiques",
     "13 bassins",
     "100 bassins"
    ],
    "correct": 1,
    "expl": "6 grands bassins : Adour-Garonne, Artois-Picardie, Loire-Bretagne, Rhin-Meuse, Rhône-Méditerranée-Corse, Seine-Normandie. Chacun avec une Agence de l'eau et un comité de bassin."
   },
   {
    "q": "Le comité de bassin est surnommé :",
    "choices": [
     "Le tribunal de l'eau",
     "Le \"parlement de l'eau\"",
     "La banque de l'eau",
     "La police de l'eau"
    ],
    "correct": 1,
    "expl": "Comité de bassin = \"parlement de l'eau\" : élus, usagers (industrie, agriculture, associations), État. Élabore le SDAGE, donne son avis sur les redevances. Gouvernance participative."
   },
   {
    "q": "Les Agences de l'eau ont pour rôle principal :",
    "choices": [
     "De distribuer l'eau",
     "De percevoir des redevances et financer des actions pour l'eau",
     "De construire des barrages",
     "De contrôler les particuliers"
    ],
    "correct": 1,
    "expl": "Agences de l'eau : établissements publics. Perçoivent les redevances (pollueur-payeur), redistribuent en aides aux collectivités/industriels/agriculteurs pour préserver l'eau."
   },
   {
    "q": "L'Office Français de la Biodiversité (OFB) est notamment chargé de :",
    "choices": [
     "Distribuer l'eau",
     "La police de l'environnement et de l'eau, et l'appui aux politiques de biodiversité",
     "Fixer le prix de l'eau",
     "Construire les STEU"
    ],
    "correct": 1,
    "expl": "OFB (créé 2020, fusion AFB + ONCFS) : police de l'eau et de la nature, connaissance, appui. Agents assermentés contrôlant les atteintes aux milieux aquatiques."
   },
   {
    "q": "Le préfet, en matière de police de l'eau, est l'autorité qui :",
    "choices": [
     "Vote les lois",
     "Délivre les autorisations IOTA et fait appliquer la réglementation",
     "Fixe le prix de l'eau",
     "Gère les Agences"
    ],
    "correct": 1,
    "expl": "Préfet : autorité de police de l'eau. Instruit (via la DDT) et délivre les autorisations/déclarations IOTA, prend les arrêtés sécheresse, sanctionne les infractions."
   },
   {
    "q": "La compétence eau potable et assainissement collectif est, depuis 2020 :",
    "choices": [
     "Communale obligatoire",
     "Transférée obligatoirement aux EPCI (intercommunalités)",
     "Régionale",
     "Étatique"
    ],
    "correct": 1,
    "expl": "Loi NOTRe 2015 : transfert obligatoire eau + AC aux communautés de communes/agglomération au 01/01/2020 (assoupli par la loi de 2019 pour certaines communes)."
   },
   {
    "q": "Le SDAGE est élaboré et adopté par :",
    "choices": [
     "L'État seul",
     "Le comité de bassin",
     "La commune",
     "L'Agence de l'eau seule"
    ],
    "correct": 1,
    "expl": "SDAGE : élaboré par le comité de bassin, approuvé par le préfet coordonnateur de bassin. Document de planification à 6 ans qui fixe les orientations pour atteindre le bon état (DCE)."
   },
   {
    "q": "La Commission Locale de l'Eau (CLE) élabore :",
    "choices": [
     "Le SDAGE",
     "Le SAGE (à l'échelle d'un sous-bassin)",
     "Le budget de l'État",
     "Le prix de l'eau"
    ],
    "correct": 1,
    "expl": "CLE : assemblée locale (collège élus, usagers, État) qui élabore et suit le SAGE. Déclinaison locale du SDAGE. Gouvernance de proximité de la gestion de l'eau."
   },
   {
    "q": "Les redevances perçues par les Agences de l'eau reposent sur le principe :",
    "choices": [
     "De l'égalité",
     "Pollueur-payeur et préleveur-payeur",
     "Du volontariat",
     "De la gratuité"
    ],
    "correct": 1,
    "expl": "Redevances : pollution domestique/industrielle, prélèvement, élevage, pollutions diffuses. Principe pollueur-payeur (art. L110-1 Code env.). Financent les programmes d'intervention."
   },
   {
    "q": "Le ministère en charge de l'eau est :",
    "choices": [
     "Le ministère de l'Économie",
     "Le ministère chargé de l'Environnement/Transition écologique",
     "Le ministère de la Défense",
     "Le ministère de la Culture"
    ],
    "correct": 1,
    "expl": "Politique de l'eau pilotée par le ministère de la Transition écologique (Direction de l'Eau et de la Biodiversité). Coordination nationale, transposition des directives UE."
   },
   {
    "q": "Le Conseil Départemental peut intervenir dans le domaine de l'eau via :",
    "choices": [
     "La police de l'eau",
     "L'assistance technique aux petites collectivités (SATESE, etc.)",
     "La fixation du prix",
     "La distribution directe"
    ],
    "correct": 1,
    "expl": "Départements : assistance technique (SATESE pour l'assainissement, aide aux communes rurales). Solidarité territoriale. Compétence facultative mais souvent exercée."
   },
   {
    "q": "Le maire conserve un pouvoir de police en matière de :",
    "choices": [
     "Fixation des redevances Agences",
     "Salubrité publique (raccordements, installations dangereuses)",
     "Élaboration du SDAGE",
     "Délivrance des autorisations IOTA"
    ],
    "correct": 1,
    "expl": "Maire : police de la salubrité (art. L2212-2 CGCT). Peut imposer le raccordement, faire cesser une pollution domestique, exécuter d'office des travaux ANC après mise en demeure."
   },
   {
    "q": "Le Comité National de l'Eau (CNE) a un rôle :",
    "choices": [
     "De police",
     "Consultatif sur la politique nationale de l'eau",
     "De distribution",
     "De construction"
    ],
    "correct": 1,
    "expl": "CNE : instance consultative nationale. Donne son avis sur les grandes orientations, les projets de loi/décret relatifs à l'eau. Réunit les acteurs nationaux du secteur."
   },
   {
    "q": "Les Établissements Publics Territoriaux de Bassin (EPTB) interviennent pour :",
    "choices": [
     "Distribuer l'eau potable",
     "La gestion équilibrée de l'eau et la prévention des inondations à l'échelle d'un bassin",
     "Contrôler les particuliers",
     "Fixer les prix"
    ],
    "correct": 1,
    "expl": "EPTB/EPAGE : structures de bassin pour la GEMAPI, l'aménagement, la prévention des inondations, la gestion de la ressource. Coordination à l'échelle hydrographique cohérente."
   },
   {
    "q": "La transposition des directives européennes sur l'eau relève :",
    "choices": [
     "Des communes",
     "De l'État français (lois et décrets)",
     "Des Agences de l'eau",
     "Des particuliers"
    ],
    "correct": 1,
    "expl": "L'État transpose les directives UE (DCE, ERU, Nitrates, eau potable...) en droit national (lois, décrets, arrêtés). Le non-respect expose la France à des contentieux et amendes."
   },
   {
    "q": "La gouvernance de l'eau en France est qualifiée de :",
    "choices": [
     "Centralisée à 100%",
     "Gestion par bassin versant avec participation des acteurs",
     "Privatisée",
     "Communale exclusivement"
    ],
    "correct": 1,
    "expl": "Modèle français (loi 1964) : gestion par grand bassin hydrographique, démocratie de l'eau (comités de bassin), principe pollueur-payeur. Modèle reconnu internationalement."
   },
   {
    "q": "Le rôle des associations d'usagers et de protection de la nature dans la gouvernance est :",
    "choices": [
     "Inexistant",
     "Reconnu (sièges dans les comités de bassin et CLE)",
     "Décisionnaire seul",
     "Limité au contentieux"
    ],
    "correct": 1,
    "expl": "Associations : représentées dans les comités de bassin et CLE (collège des usagers). Participent à la concertation. Peuvent aussi agir en justice pour faire respecter le droit de l'eau."
   },
   {
    "q": "Le contrôle des ouvrages et prélèvements sur le terrain est assuré par :",
    "choices": [
     "Les maires uniquement",
     "Les agents de l'OFB, des DDT et des DREAL (police de l'eau)",
     "Les Agences de l'eau",
     "Les particuliers"
    ],
    "correct": 1,
    "expl": "Police de l'eau : agents assermentés (OFB, DDT, DREAL). Contrôles, constats d'infraction, procès-verbaux. Pouvoirs administratifs (mise en demeure) et judiciaires (PV au procureur)."
   },
   {
    "q": "La planification de l'eau s'articule du niveau européen au niveau local ainsi :",
    "choices": [
     "Loi → commune",
     "Directives UE → SDAGE (bassin) → SAGE (sous-bassin) → documents d'urbanisme",
     "Commune → État",
     "Aucune hiérarchie"
    ],
    "correct": 1,
    "expl": "Hiérarchie : Directives UE (DCE) → SDAGE par bassin → SAGE par sous-bassin → PLU/SCOT (compatibilité). Emboîtement des échelles pour une gestion cohérente."
   },
   {
    "q": "La Banque des Territoires / Agences de l'eau financent les collectivités par :",
    "choices": [
     "Des amendes",
     "Des subventions et des prêts à taux avantageux (Aqua Prêt, etc.)",
     "Des impôts",
     "Rien"
    ],
    "correct": 1,
    "expl": "Financement : subventions des Agences (programmes pluriannuels), prêts bonifiés (Banque des Territoires, Aqua Prêt). Soutien aux investissements eau/assainissement, surtout en milieu rural."
   }
  ]
 },
 {
  "id": "ue5-3",
  "theme": "UE5",
  "themeName": "Milieux naturels",
  "ico": "⚖️",
  "color": "#A01C1C",
  "colorl": "#FCEAEA",
  "title": "Police de l'eau et procédures IOTA",
  "desc": "Nomenclature IOTA · Autorisation/Déclaration · Sanctions · Loi sur l'eau",
  "questions": [
   {
    "q": "IOTA signifie :",
    "choices": [
     "Institut Officiel des Travaux Aquatiques",
     "Installations, Ouvrages, Travaux et Activités",
     "Indice Officiel de Traitement de l'Au",
     "Inventaire des Ouvrages et Travaux Agricoles"
    ],
    "correct": 1,
    "expl": "IOTA : Installations, Ouvrages, Travaux et Activités ayant un impact sur l'eau et les milieux aquatiques. Soumis à la \"Loi sur l'eau\" (art. L214-1 et suivants du Code de l'environnement)."
   },
   {
    "q": "Les deux régimes de la nomenclature IOTA sont :",
    "choices": [
     "Gratuit et payant",
     "Déclaration (D) et Autorisation (A)",
     "Public et privé",
     "Urbain et rural"
    ],
    "correct": 1,
    "expl": "Selon l'impact : Déclaration (projets modérés, procédure allégée) ou Autorisation (projets importants, étude d'impact, enquête publique). Seuils fixés par la nomenclature (R214-1)."
   },
   {
    "q": "Une autorisation environnementale IOTA nécessite :",
    "choices": [
     "Une simple lettre",
     "Un dossier complet avec étude d'impact et enquête publique",
     "Rien",
     "Un appel téléphonique"
    ],
    "correct": 1,
    "expl": "Autorisation : dossier (état initial, impacts, mesures ERC), instruction par les services de l'État, enquête publique, avis de l'autorité environnementale, arrêté préfectoral."
   },
   {
    "q": "La séquence ERC appliquée aux projets impactant l'eau signifie :",
    "choices": [
     "Étudier, Réaliser, Contrôler",
     "Éviter, Réduire, Compenser",
     "Estimer, Régler, Conclure",
     "Évaluer, Recycler, Construire"
    ],
    "correct": 1,
    "expl": "ERC : Éviter les impacts (priorité), sinon Réduire, et en dernier recours Compenser les impacts résiduels (ex : recréer 2 ha de zone humide pour 1 ha détruit). Loi Biodiversité 2016."
   },
   {
    "q": "La destruction d'une zone humide est :",
    "choices": [
     "Libre",
     "Soumise à la réglementation IOTA et à compensation",
     "Encouragée",
     "Sans conséquence"
    ],
    "correct": 1,
    "expl": "Zone humide : rubrique IOTA spécifique. Destruction soumise à déclaration/autorisation + compensation (ratio ≥ 200% en surface, fonctions équivalentes). Protection renforcée."
   },
   {
    "q": "Le délai de prescription pour une déclaration IOTA tacitement acceptée est généralement :",
    "choices": [
     "1 jour",
     "2 mois (sans opposition de l'administration)",
     "1 an",
     "10 ans"
    ],
    "correct": 1,
    "expl": "Déclaration : si l'administration ne s'oppose pas dans le délai (généralement 2 mois), le projet peut être réalisé (avec d'éventuelles prescriptions). Procédure plus rapide que l'autorisation."
   },
   {
    "q": "Le franchissement/busage d'un cours d'eau est :",
    "choices": [
     "Toujours libre",
     "Soumis à la nomenclature IOTA (impact sur l'écoulement et la continuité)",
     "Interdit partout",
     "Sans réglementation"
    ],
    "correct": 1,
    "expl": "Busage, pont, gué : rubriques IOTA (impact sur l'écoulement, la continuité écologique). Déclaration ou autorisation selon la longueur/impact. Préserver la libre circulation."
   },
   {
    "q": "Le rejet d'eaux pluviales dans le milieu naturel relève :",
    "choices": [
     "D'aucune règle",
     "De la nomenclature IOTA (selon la surface du bassin versant intercepté)",
     "Du seul maire",
     "De l'Agence de l'eau"
    ],
    "correct": 1,
    "expl": "Rejet EP : rubrique 2.1.5.0 IOTA selon la surface du projet (déclaration > 1 ha, autorisation > 20 ha). Encadre débit de fuite, traitement, dispositifs de rétention."
   },
   {
    "q": "Les sanctions administratives en cas d'infraction à la police de l'eau incluent :",
    "choices": [
     "Aucune sanction",
     "Mise en demeure, astreinte, consignation, suspension, travaux d'office",
     "Une médaille",
     "Une réduction d'impôt"
    ],
    "correct": 1,
    "expl": "Sanctions administratives : mise en demeure de régulariser, astreinte journalière, consignation de sommes, suspension de l'activité, exécution d'office. Graduées et indépendantes du pénal."
   },
   {
    "q": "Les sanctions pénales pour pollution de l'eau peuvent atteindre :",
    "choices": [
     "Une simple remontrance",
     "Des amendes lourdes et des peines de prison (délits environnementaux)",
     "10 €",
     "Aucune"
    ],
    "correct": 1,
    "expl": "Délits (Code env.) : amendes (jusqu'à plusieurs centaines de milliers d'euros) et emprisonnement. Le délit d'écocide (2021) renforce les sanctions pour les atteintes graves et durables."
   },
   {
    "q": "L'enquête publique d'un projet soumis à autorisation IOTA vise à :",
    "choices": [
     "Fixer le prix",
     "Informer et recueillir l'avis du public avant décision",
     "Construire",
     "Désinfecter"
    ],
    "correct": 1,
    "expl": "Enquête publique : information et participation du public (commissaire enquêteur, registre). Avis intégré à la décision préfectorale. Garantie démocratique pour les projets impactants."
   },
   {
    "q": "La continuité écologique impose pour les ouvrages en cours d'eau classés (liste 2) :",
    "choices": [
     "Aucune obligation",
     "La mise en conformité (passe à poissons, transit sédimentaire) sous délai",
     "Leur destruction immédiate",
     "Leur agrandissement"
    ],
    "correct": 1,
    "expl": "Liste 2 (art. L214-17) : obligation de restaurer la continuité (passe à poissons, transit des sédiments) dans les 5 ans. Liste 1 : interdiction de nouveaux obstacles."
   },
   {
    "q": "Le débit réservé imposé par la police de l'eau à un ouvrage vise à :",
    "choices": [
     "Produire plus d'électricité",
     "Garantir la vie aquatique à l'aval (minimum biologique)",
     "Vider la rivière",
     "Stocker l'eau"
    ],
    "correct": 1,
    "expl": "Débit réservé (≥ 1/10 du module, art. L214-18) : débit minimal à laisser en permanence à l'aval. Garantit la survie des espèces et les usages aval. Contrôlé par la police de l'eau."
   },
   {
    "q": "L'autorité environnementale rend un avis sur :",
    "choices": [
     "Le prix de l'eau",
     "La qualité de l'étude d'impact des projets soumis à évaluation",
     "Les redevances",
     "Le personnel"
    ],
    "correct": 1,
    "expl": "Autorité environnementale (Ae/MRAe) : avis indépendant sur l'évaluation environnementale des projets/plans. Avis public, joint à l'enquête. Ne décide pas mais éclaire la décision."
   },
   {
    "q": "Le \"porter à connaissance\" en début de procédure IOTA permet :",
    "choices": [
     "De cacher le projet",
     "D'informer l'administration et d'obtenir les contraintes applicables",
     "De payer",
     "De voter"
    ],
    "correct": 1,
    "expl": "Phase amont : le pétitionnaire prend connaissance des contraintes (zonages, SDAGE/SAGE, espèces protégées). Oriente la conception du projet (démarche ERC dès l'amont)."
   },
   {
    "q": "La police de l'eau distingue police administrative et police judiciaire :",
    "choices": [
     "Elles sont identiques",
     "Administrative (prévention/régularisation) et judiciaire (constatation des infractions)",
     "Seule la judiciaire existe",
     "Aucune ne s'applique"
    ],
    "correct": 1,
    "expl": "Police administrative : prévenir, régulariser, sanctionner administrativement. Police judiciaire : constater les infractions (PV), transmettre au procureur. Souvent les mêmes agents assermentés."
   },
   {
    "q": "Un dossier \"Loi sur l'eau\" doit démontrer la compatibilité avec :",
    "choices": [
     "Le code de la route",
     "Le SDAGE et le SAGE applicables",
     "Le budget de l'État",
     "Les horaires de mairie"
    ],
    "correct": 1,
    "expl": "Compatibilité SDAGE/SAGE obligatoire : le projet ne doit pas compromettre les objectifs de bon état et les dispositions du schéma. Pièce essentielle du dossier IOTA."
   },
   {
    "q": "Le régime de l'autorisation environnementale unique regroupe depuis 2017 :",
    "choices": [
     "Une seule autorisation séparée",
     "Plusieurs autorisations (IOTA, ICPE, espèces protégées, défrichement...) en une procédure",
     "Aucune autorisation",
     "Le permis de conduire"
    ],
    "correct": 1,
    "expl": "Autorisation environnementale unique (2017) : guichet unique fusionnant IOTA, ICPE, dérogation espèces protégées, défrichement, etc. Simplification et cohérence de l'instruction."
   },
   {
    "q": "En cas d'urgence (pollution accidentelle), le préfet peut :",
    "choices": [
     "Attendre 6 mois",
     "Prendre des mesures immédiates (arrêté d'urgence, mise en demeure rapide)",
     "Ne rien faire",
     "Augmenter le prix"
    ],
    "correct": 1,
    "expl": "Urgence : pouvoirs de police renforcés. Mesures conservatoires immédiates, arrêté d'urgence, intervention de l'OFB/pompiers. Principe de réaction rapide face au risque pour les milieux."
   },
   {
    "q": "La nomenclature IOTA est codifiée à l'article :",
    "choices": [
     "R214-1 du Code de l'environnement",
     "L1 du Code civil",
     "R110 du Code de la route",
     "L2212 du CGCT"
    ],
    "correct": 0,
    "expl": "Art. R214-1 du Code de l'environnement : tableau des rubriques IOTA (prélèvements, rejets, ouvrages, zones humides...) avec les seuils de déclaration et d'autorisation."
   }
  ]
 },
 {
  "id": "ue5-4",
  "theme": "UE5",
  "themeName": "Milieux naturels",
  "ico": "💶",
  "color": "#A01C1C",
  "colorl": "#FCEAEA",
  "title": "Prix de l'eau, redevances et financement",
  "desc": "Facture d'eau · Redevances · Pollueur-payeur · Aides",
  "questions": [
   {
    "q": "Le prix moyen de l'eau en France (eau + assainissement) est d'environ :",
    "choices": [
     "0,50 €/m³",
     "4,30 €/m³",
     "15 €/m³",
     "50 €/m³"
    ],
    "correct": 1,
    "expl": "Prix moyen ~4,30 €/m³ TTC (2023), variable de 3 à 7 €/m³ selon les territoires. Comprend production/distribution d'eau potable + collecte/traitement des eaux usées + redevances et taxes."
   },
   {
    "q": "La facture d'eau se compose principalement de :",
    "choices": [
     "Un seul prix",
     "Eau potable + assainissement + redevances Agences + TVA",
     "Uniquement la TVA",
     "Le prix du compteur seul"
    ],
    "correct": 1,
    "expl": "Facture : part eau potable (abonnement + consommation), part assainissement, redevances de l'Agence de l'eau (pollution, modernisation), TVA (5,5% eau, 10% assainissement)."
   },
   {
    "q": "Le principe \"l'eau paie l'eau\" signifie :",
    "choices": [
     "L'eau est gratuite",
     "Les services d'eau s'équilibrent par les recettes des usagers (pas le budget général)",
     "L'État paie tout",
     "Les industriels paient tout"
    ],
    "correct": 1,
    "expl": "\"L'eau paie l'eau\" : les budgets eau/assainissement (SPIC) sont équilibrés par les redevances des usagers, distincts du budget général de la collectivité. Pas de subvention du contribuable (sauf petites communes)."
   },
   {
    "q": "La redevance pour pollution domestique est :",
    "choices": [
     "Payée par l'État",
     "Collectée sur la facture d'eau des abonnés",
     "Gratuite",
     "Payée par les industriels seuls"
    ],
    "correct": 1,
    "expl": "Redevance pollution domestique : sur la facture (€/m³ consommé), collectée par l'exploitant pour l'Agence de l'eau. Finance la lutte contre la pollution. Principe pollueur-payeur."
   },
   {
    "q": "La redevance de prélèvement est due par :",
    "choices": [
     "Personne",
     "Ceux qui prélèvent de l'eau (collectivités, industriels, irrigants)",
     "Les piétons",
     "Les touristes"
    ],
    "correct": 1,
    "expl": "Redevance prélèvement : proportionnelle au volume prélevé, modulée selon l'usage et la ressource (plus chère en zone tendue/ZRE). Incite à la sobriété. Perçue par les Agences."
   },
   {
    "q": "La TVA sur la fourniture d'eau potable est de :",
    "choices": [
     "0%",
     "5,5%",
     "10%",
     "20%"
    ],
    "correct": 1,
    "expl": "TVA eau potable : 5,5% (taux réduit, bien de première nécessité). Assainissement : 10%. Ces taux s'appliquent sur les différentes parts de la facture."
   },
   {
    "q": "La tarification progressive consiste à :",
    "choices": [
     "Un prix unique",
     "Des tranches dont le prix au m³ augmente avec la consommation",
     "Un prix dégressif",
     "La gratuité totale"
    ],
    "correct": 1,
    "expl": "Tarification progressive : première tranche (besoins essentiels) à prix bas, tranches supérieures plus chères. Encourage la sobriété. Promue par le Plan Eau 2023. Possible tarification sociale."
   },
   {
    "q": "La tarification sociale de l'eau vise à :",
    "choices": [
     "Augmenter les prix",
     "Garantir l'accès à l'eau des ménages modestes (chèque eau, première tranche réduite)",
     "Privatiser l'eau",
     "Supprimer les compteurs"
    ],
    "correct": 1,
    "expl": "Tarification sociale : aides aux ménages précaires (chèque eau, tarif réduit de la première tranche). Expérimentée puis généralisable. Droit à l'eau (loi Brottes 2013)."
   },
   {
    "q": "Les aides des Agences de l'eau aux collectivités financent notamment :",
    "choices": [
     "Les salaires des élus",
     "Les travaux de réseaux, STEU, protection des captages, restauration des milieux",
     "Les voitures",
     "Les fêtes"
    ],
    "correct": 1,
    "expl": "Aides Agences : subventions/prêts pour stations d'épuration, renouvellement de réseaux, protection des captages, continuité écologique, économies d'eau. Programmes pluriannuels (6 ans)."
   },
   {
    "q": "La part fixe (abonnement) de la facture d'eau est encadrée pour :",
    "choices": [
     "Être illimitée",
     "Ne pas dépasser un plafond (favoriser le prix au volume)",
     "Être supprimée",
     "Être la seule composante"
    ],
    "correct": 1,
    "expl": "Part fixe plafonnée (loi Grenelle 2) : limite l'abonnement pour que la facture dépende surtout du volume consommé (équité, incitation à l'économie). Sauf communes touristiques."
   },
   {
    "q": "Le fonds de solidarité pour le logement (FSL) peut aider :",
    "choices": [
     "Les industriels",
     "Les ménages en difficulté à payer leurs factures d'eau",
     "Les communes riches",
     "Les touristes"
    ],
    "correct": 1,
    "expl": "FSL : aide au paiement des factures (eau, énergie) pour les ménages en difficulté. Une convention \"solidarité eau\" existe souvent avec les distributeurs. Évite les coupures."
   },
   {
    "q": "La loi interdit la coupure d'eau dans une résidence principale :",
    "choices": [
     "Jamais",
     "Toute l'année pour les ménages (loi Brottes 2013)",
     "Seulement l'hiver",
     "Seulement l'été"
    ],
    "correct": 1,
    "expl": "Loi Brottes 2013 + Conseil constitutionnel : interdiction de couper l'eau dans une résidence principale toute l'année (droit à l'eau). Réduction de débit possible mais coupure interdite."
   },
   {
    "q": "Le coût du renouvellement des réseaux d'eau est un enjeu majeur car :",
    "choices": [
     "Les réseaux sont neufs",
     "Le taux de renouvellement actuel (~0,6%/an) est insuffisant face au vieillissement",
     "Il n'y a pas de réseaux",
     "Les réseaux ne vieillissent pas"
    ],
    "correct": 1,
    "expl": "Taux de renouvellement ~0,6%/an → cycle de 150 ans, alors que la durée de vie des conduites est de 50-80 ans. Sous-investissement chronique. Le Plan Eau vise à l'accélérer."
   },
   {
    "q": "La redevance de modernisation des réseaux de collecte finance :",
    "choices": [
     "Les routes",
     "Les investissements d'assainissement (réseaux et stations)",
     "Les écoles",
     "Les hôpitaux"
    ],
    "correct": 1,
    "expl": "Redevance modernisation des réseaux de collecte : sur la facture des abonnés raccordés à l'assainissement. Perçue par l'Agence pour financer les investissements d'assainissement."
   },
   {
    "q": "Le déficit d'investissement dans le petit cycle de l'eau est estimé à :",
    "choices": [
     "Quelques millions",
     "Plusieurs milliards d'euros par an",
     "Zéro",
     "Inconnu"
    ],
    "correct": 1,
    "expl": "Besoin d'investissement supplémentaire estimé à plusieurs milliards d'euros/an (réseaux, traitement des micropolluants, adaptation climatique). Enjeu de financement majeur du secteur."
   },
   {
    "q": "Le prix de l'eau est fixé par :",
    "choices": [
     "L'État",
     "La collectivité (ou son délégataire) responsable du service",
     "L'Agence de l'eau",
     "L'Europe"
    ],
    "correct": 1,
    "expl": "Prix fixé localement par la collectivité organisatrice (délibération), en régie ou via le contrat de DSP. D'où les écarts de prix entre territoires (densité, ressource, mode de gestion)."
   },
   {
    "q": "La facturation au volume réel nécessite :",
    "choices": [
     "Aucun équipement",
     "Un compteur d'eau relevé périodiquement",
     "Une estimation",
     "Un forfait"
    ],
    "correct": 1,
    "expl": "Compteur individuel : base de la facturation au volume consommé (équité, incitation à l'économie). Relevé périodique (ou télérelève). L'individualisation des compteurs est encouragée."
   },
   {
    "q": "Les redevances des Agences de l'eau sont plafonnées et encadrées par :",
    "choices": [
     "Les communes",
     "Le Parlement (loi de finances / loi sur l'eau)",
     "Les usagers",
     "Les industriels"
    ],
    "correct": 1,
    "expl": "Le Parlement fixe les plafonds des redevances et le plafond de dépenses des Agences (loi de finances). Encadrement national de cette fiscalité environnementale affectée."
   },
   {
    "q": "La performance économique d'un service d'eau se mesure notamment par :",
    "choices": [
     "Le nombre d'élus",
     "Le rendement de réseau, le taux d'impayés, le taux de renouvellement",
     "La couleur de l'eau",
     "Le nombre de réunions"
    ],
    "correct": 1,
    "expl": "Indicateurs RPQS : rendement de réseau, ILP, taux de renouvellement des canalisations, taux d'impayés, durée d'extinction de la dette. Suivi de la soutenabilité du service."
   },
   {
    "q": "Le principe pollueur-payeur appliqué à l'eau implique que :",
    "choices": [
     "L'État paie",
     "Celui qui pollue ou prélève contribue financièrement à la réparation/préservation",
     "L'eau est gratuite",
     "Les pauvres paient plus"
    ],
    "correct": 1,
    "expl": "Pollueur-payeur (art. L110-1 Code env., principe UE) : internaliser le coût environnemental. Concrétisé par les redevances. Critiqué car les ménages contribuent davantage que les pollueurs diffus (agriculture)."
   }
  ]
 },
 {
  "id": "ue5-5",
  "theme": "UE5",
  "themeName": "Milieux naturels",
  "ico": "🇪🇺",
  "color": "#A01C1C",
  "colorl": "#FCEAEA",
  "title": "Directives européennes et qualité des milieux",
  "desc": "DCE · ERU · Nitrates · Bon état · Contentieux",
  "questions": [
   {
    "q": "La Directive Cadre sur l'Eau (DCE) date de :",
    "choices": [
     "1991",
     "2000",
     "2010",
     "2020"
    ],
    "correct": 1,
    "expl": "DCE : Directive 2000/60/CE du 23/10/2000. Texte fondateur de la politique européenne de l'eau. Objectif de bon état des masses d'eau, gestion par district hydrographique, participation du public."
   },
   {
    "q": "L'objectif central de la DCE est :",
    "choices": [
     "Privatiser l'eau",
     "Atteindre le bon état écologique et chimique des masses d'eau",
     "Construire des barrages",
     "Supprimer les rivières"
    ],
    "correct": 1,
    "expl": "DCE : bon état (écologique + chimique) de toutes les masses d'eau. Échéance initiale 2015, reportée à 2021 puis 2027 avec dérogations motivées. Principe de non-dégradation."
   },
   {
    "q": "La Directive ERU (Eaux Résiduaires Urbaines) de 1991 impose :",
    "choices": [
     "La gratuité de l'eau",
     "La collecte et le traitement des eaux usées des agglomérations",
     "La privatisation",
     "La suppression des STEU"
    ],
    "correct": 1,
    "expl": "Directive ERU 91/271/CEE : obligation de collecte et de traitement selon la taille de l'agglomération (EH) et la sensibilité du milieu. Base du déploiement des STEU. Révisée en 2024."
   },
   {
    "q": "La Directive Nitrates (1991) vise à :",
    "choices": [
     "Augmenter les engrais",
     "Réduire la pollution des eaux par les nitrates d'origine agricole",
     "Interdire l'agriculture",
     "Construire des STEU"
    ],
    "correct": 1,
    "expl": "Directive Nitrates 91/676/CEE : zones vulnérables (eaux > 50 mg/L NO₃⁻), programmes d'action (couverture des sols, périodes d'épandage, stockage des effluents). Contentieux récurrents pour la France."
   },
   {
    "q": "Le \"bon état chimique\" d'une masse d'eau est évalué par rapport :",
    "choices": [
     "À la couleur",
     "Aux Normes de Qualité Environnementale (NQE) des substances prioritaires",
     "Au débit",
     "Au prix"
    ],
    "correct": 1,
    "expl": "Bon état chimique : respect des NQE pour ~45 substances prioritaires (métaux, HAP, pesticides, PFOS...). Un seul dépassement = mauvais état chimique. Distinct de l'état écologique."
   },
   {
    "q": "Le \"bon état écologique\" intègre :",
    "choices": [
     "Le seul débit",
     "Des éléments biologiques, physico-chimiques et hydromorphologiques",
     "Le seul pH",
     "La seule température"
    ],
    "correct": 1,
    "expl": "Bon état écologique : biologie (poissons, invertébrés, diatomées, macrophytes), physico-chimie soutenant la biologie, hydromorphologie. Classé en 5 états (très bon à mauvais)."
   },
   {
    "q": "La nouvelle Directive eau potable (2020/2184) renforce notamment :",
    "choices": [
     "Le prix",
     "Les limites PFAS, l'approche par les risques (PSE) et l'accès à l'eau",
     "La privatisation",
     "La suppression des contrôles"
    ],
    "correct": 1,
    "expl": "Directive 2020/2184 : PFAS (0,1 µg/L), plomb abaissé, Plan de Sécurité de l'Eau (approche risques de la ressource au robinet), information des usagers, accès à l'eau pour tous."
   },
   {
    "q": "La Directive Inondation (2007/60/CE) impose :",
    "choices": [
     "Des barrages",
     "L'évaluation et la gestion des risques (PGRI, cartographie, TRI)",
     "La suppression des rivières",
     "Le pompage"
    ],
    "correct": 1,
    "expl": "Directive Inondation : évaluation préliminaire, identification des TRI (Territoires à Risque important), cartographie des aléas, PGRI par district révisés tous les 6 ans."
   },
   {
    "q": "La Directive baignade (2006/7/CE) repose sur :",
    "choices": [
     "La chloration",
     "Le suivi d'E. coli et entérocoques + classement des sites",
     "La désinfection UV",
     "Le pH"
    ],
    "correct": 1,
    "expl": "Directive baignade : suivi microbiologique (E. coli, entérocoques), classement (excellent/bon/suffisant/insuffisant) sur 4 ans, profil de baignade, information du public."
   },
   {
    "q": "Le principe de non-dégradation de la DCE signifie :",
    "choices": [
     "On peut polluer",
     "L'état des masses d'eau ne doit pas se détériorer",
     "On doit assécher",
     "On peut tout construire"
    ],
    "correct": 1,
    "expl": "Non-dégradation : interdiction de faire passer une masse d'eau à un état inférieur. Tout projet doit en tenir compte (jurisprudence Weser de la CJUE, 2015). Principe contraignant."
   },
   {
    "q": "Les masses d'eau fortement modifiées (MEFM) bénéficient :",
    "choices": [
     "D'aucune règle",
     "D'un objectif de \"bon potentiel écologique\" adapté",
     "D'une exemption totale",
     "D'une destruction"
    ],
    "correct": 1,
    "expl": "MEFM (ports, canaux, retenues) : objectif de \"bon potentiel écologique\" (adapté aux usages) au lieu du bon état. Reconnaît les altérations hydromorphologiques irréversibles liées aux usages."
   },
   {
    "q": "La France fait l'objet de contentieux européens récurrents sur :",
    "choices": [
     "Le prix de l'eau",
     "Les nitrates et le traitement des eaux résiduaires urbaines",
     "La couleur de l'eau",
     "Le nombre de fontaines"
    ],
    "correct": 1,
    "expl": "Contentieux : Directive Nitrates (zones vulnérables insuffisantes), Directive ERU (agglomérations non conformes). Condamnations et astreintes financières. Pression pour la mise en conformité."
   },
   {
    "q": "Le calendrier de la DCE prévoyait le bon état pour :",
    "choices": [
     "2000",
     "2015, avec reports possibles à 2021 et 2027",
     "2050",
     "Jamais"
    ],
    "correct": 1,
    "expl": "Échéance 2015, reports motivés à 2021 puis 2027 (3 cycles de SDAGE). 2027 = échéance ultime. En France, ~44% des masses d'eau en bon état écologique (objectif loin d'être atteint)."
   },
   {
    "q": "La Directive sur les eaux souterraines (2006/118/CE) fixe :",
    "choices": [
     "Le prix",
     "Des normes de qualité (nitrates, pesticides) et la prévention de la dégradation",
     "La privatisation",
     "Le débit"
    ],
    "correct": 1,
    "expl": "Directive eaux souterraines : NQ (nitrates 50 mg/L, pesticides 0,1 µg/L), valeurs seuils nationales, prévention/limitation des entrées de polluants, inversion des tendances à la hausse."
   },
   {
    "q": "L'évaluation de l'état des masses d'eau est rapportée à la Commission européenne via :",
    "choices": [
     "Le journal local",
     "Les états des lieux et programmes de mesures des SDAGE",
     "Un tweet",
     "Rien"
    ],
    "correct": 1,
    "expl": "Rapportage : états des lieux (tous les 6 ans), SDAGE et programmes de mesures transmis à la Commission. Suivi de la mise en œuvre de la DCE. Transparence et comparaison entre États membres."
   },
   {
    "q": "La révision de la Directive ERU adoptée en 2024 introduit notamment :",
    "choices": [
     "La suppression des STEU",
     "Le traitement quaternaire (micropolluants) et la responsabilité élargie des producteurs",
     "La gratuité",
     "La privatisation"
    ],
    "correct": 1,
    "expl": "ERU révisée (2024) : traitement quaternaire (micropolluants/médicaments) pour les grandes STEU, neutralité énergétique, responsabilité élargie des producteurs (pharma, cosmétique) pour financer."
   },
   {
    "q": "Le \"principe de précaution\" en droit européen de l'environnement permet :",
    "choices": [
     "D'attendre la certitude",
     "D'agir face à un risque potentiel sans attendre la preuve scientifique complète",
     "D'ignorer les risques",
     "De polluer"
    ],
    "correct": 1,
    "expl": "Principe de précaution (art. 191 TFUE, art. 5 Charte fr.) : face à un risque grave et incertain, prendre des mesures de protection. Justifie l'abaissement des seuils (PFAS, pesticides)."
   },
   {
    "q": "Les substances prioritaires dangereuses de la DCE doivent à terme :",
    "choices": [
     "Augmenter",
     "Voir leurs rejets supprimés ou progressivement éliminés",
     "Rester stables",
     "Être ignorées"
    ],
    "correct": 1,
    "expl": "Substances prioritaires dangereuses : objectif de suppression/réduction progressive des émissions, rejets et pertes. Liste évolutive (mercure, certains PBDE, PFOS...). Surveillance renforcée."
   },
   {
    "q": "La participation du public à la politique de l'eau est :",
    "choices": [
     "Interdite",
     "Un principe de la DCE (consultation sur les SDAGE)",
     "Facultative et rare",
     "Réservée aux experts"
    ],
    "correct": 1,
    "expl": "DCE : consultation obligatoire du public sur les projets de SDAGE et programmes de mesures (6 mois). Démocratie environnementale. Convention d'Aarhus (accès à l'information et participation)."
   },
   {
    "q": "L'articulation DCE / autres directives (ERU, Nitrates, baignade) repose sur :",
    "choices": [
     "L'indépendance totale",
     "Une cohérence : les directives sectorielles contribuent aux objectifs de la DCE",
     "La contradiction",
     "Le hasard"
    ],
    "correct": 1,
    "expl": "La DCE est le cadre intégrateur : les directives sectorielles (ERU, Nitrates, baignade, eau potable, eaux souterraines) sont des outils contribuant au bon état visé par la DCE. Cohérence d'ensemble."
   }
  ]
 },
 {
  "id": "ue6-1",
  "theme": "UE6",
  "themeName": "Réglementation & gestion",
  "ico": "📊",
  "color": "#886000",
  "colorl": "#FDF0D8",
  "title": "Gestion des services d'eau",
  "desc": "DSP · RPQS · Tarification · Marchés publics · Indicateurs",
  "questions": [
   {
    "q": "Les deux principaux modes de gestion des services d'eau sont :",
    "choices": [
     "Public et privé",
     "Régie (gestion directe) et Délégation de Service Public (DSP)",
     "Affermage et concession uniquement",
     "Syndicat et communauté de communes"
    ],
    "correct": 1,
    "expl": "Régie : la collectivité gère directement. DSP : délégation à un opérateur privé (affermage, concession, régie intéressée)."
   },
   {
    "q": "Dans un contrat d'affermage, qui réalise les investissements ?",
    "choices": [
     "Le fermier uniquement",
     "La collectivité pour les gros investissements, le fermier pour le renouvellement courant",
     "Le fermier intégralement",
     "La collectivité intégralement"
    ],
    "correct": 1,
    "expl": "Affermage : collectivité = propriétaire des ouvrages et finance l'investissement. Fermier = exploite et finance renouvellement courant (compteurs, branchements...)."
   },
   {
    "q": "Le RPQS doit être transmis à :",
    "choices": [
     "L'Agence de l'eau uniquement",
     "L'observatoire national SISPEA (SDES/Ministère)",
     "La préfecture uniquement",
     "La DREAL et la DDPP"
    ],
    "correct": 1,
    "expl": "RPQS : transmis au service SISPEA (Système d'Information des Services Publics d'Eau et d'Assainissement). Décret 2007-675."
   },
   {
    "q": "L'indicateur ILP (Indice Linéaire de Pertes) d'un réseau est bon si :",
    "choices": [
     "ILP > 10 m³/km/j",
     "ILP > 5 m³/km/j",
     "ILP < 3 m³/km/j",
     "ILP = 0 m³/km/j"
    ],
    "correct": 2,
    "expl": "ILP = (Vp - Vc) / L réseau. ILP < 3 m³/km/j : bon réseau. ILP > 8 : réseau avec fuites importantes. Objectif Plan Eau : rendement ≥ 80%."
   },
   {
    "q": "La durée maximale d'un contrat de DSP eau est de :",
    "choices": [
     "5 ans",
     "12 ans",
     "20 ans",
     "50 ans"
    ],
    "correct": 1,
    "expl": "CCP (Code Commande Publique) : contrats de concession EAU limités à la durée d'amortissement des investissements du délégataire. En pratique : 10-15 ans (eau), 20-30 ans (assainissement)."
   },
   {
    "q": "Le principe de la tarification progressive de l'eau consiste à :",
    "choices": [
     "Facturer moins cher pour les gros consommateurs",
     "Facturer plus cher par m³ au-delà d'un seuil de consommation",
     "Fixer un prix identique pour tous",
     "Facturer selon la distance au réservoir"
    ],
    "correct": 1,
    "expl": "Tarification progressive (par tranches) : encourager la sobriété. Prix/m³ augmente avec la consommation. Tarification sociale possible pour tranche de base."
   },
   {
    "q": "L'indicateur IP119 (connaissance réseaux) atteint 120 points si :",
    "choices": [
     "Aucune fuite détectée",
     "Tous les critères de connaissance du réseau sont remplis (plans, âge, matériaux...)",
     "Le rendement est > 90%",
     "L'ILP < 1 m³/km/j"
    ],
    "correct": 1,
    "expl": "IP119 : 0-120 points. 40 pts : plans à jour. +80 pts supplémentaires si branchements, matériaux, âge des conduites, recherche active de fuites connus."
   },
   {
    "q": "La durée d'amortissement d'une conduite AEP est généralement :",
    "choices": [
     "10-15 ans",
     "25-30 ans",
     "40-60 ans",
     "100 ans"
    ],
    "correct": 2,
    "expl": "Conduite AEP : amortissement 40-60 ans selon matériau. Compteurs : 10-15 ans. Grosses conduites fonte : 50-60 ans. PEHD : 40-50 ans."
   },
   {
    "q": "Le NRW (Non-Revenue Water) représente :",
    "choices": [
     "L'eau facturée aux clients",
     "Le volume mis en distribution non facturé (fuites + pertes administratives)",
     "L'eau des bornes incendie",
     "L'eau de lavage des réseaux"
    ],
    "correct": 1,
    "expl": "NRW (IWA) = fuites réelles + pertes apparentes (comptages, fraudes) + usages autorisés non facturés (lavage réseau, incendie). NRW = Vp - Vc."
   },
   {
    "q": "La méthode de la valeur non rendue (VNR) d'un réseau est utilisée pour :",
    "choices": [
     "Calculer les fuites",
     "Estimer le coût de remplacement des actifs (investissement patrimonial)",
     "Fixer le prix de l'eau",
     "Dimensionner les pompes"
    ],
    "correct": 1,
    "expl": "VNR : coût actuel de remplacement à neuf du patrimoine (conduites, pompes, réservoirs...). Base pour les schémas directeurs et la tarification patrimoniale."
   },
   {
    "q": "Le schéma directeur d'assainissement est obligatoire pour les communes de plus de :",
    "choices": [
     "500 habitants",
     "2 000 habitants",
     "5 000 habitants",
     "10 000 habitants"
    ],
    "correct": 1,
    "expl": "Schéma directeur assainissement obligatoire pour communes > 2000 hab (ou périmètre d'agglomération EU). Diagnostic, programme travaux, zonage."
   },
   {
    "q": "Le zonage d'assainissement (article L2224-10 CGCT) doit être délibéré par :",
    "choices": [
     "Le conseil municipal ou communautaire après enquête publique",
     "La préfecture",
     "L'Agence de l'eau",
     "La DREAL"
    ],
    "correct": 0,
    "expl": "Zonage assainissement : délibération conseil municipal ou EPCI compétent après enquête publique. Définit zones AC, ANC, zonage EP."
   },
   {
    "q": "La redevance assainissement est basée sur :",
    "choices": [
     "La surface de la parcelle",
     "Le volume d'eau consommé (m³ facturés)",
     "Le nombre de pièces",
     "Le revenu fiscal"
    ],
    "correct": 1,
    "expl": "Redevance assainissement = volume m³ consommé × prix unitaire. Pas de redevance si non raccordé en zone ANC (redevance SPANC à la place)."
   },
   {
    "q": "La DSI (Durée de Vie Implicite) d'un réseau AEP est le rapport :",
    "choices": [
     "Long réseau / débit",
     "Linéaire réseau / casse annuelle",
     "Volume distribué / ILP",
     "HMT / puissance pompe"
    ],
    "correct": 1,
    "expl": "DSI = L réseau (km) / casse annuelle (km/an). DSI élevée = bon réseau. DSI faible = réseau dégradé. Complète IP119 pour le diagnostic patrimonial."
   },
   {
    "q": "Le dispositif Éco-PTZ collectivités permet aux EPCI de financer :",
    "choices": [
     "Uniquement les STEU",
     "Les investissements eau et assainissement à taux zéro",
     "L'achat de véhicules électriques",
     "La formation des agents"
    ],
    "correct": 1,
    "expl": "Éco-PTZ collectivités (volet eau) : financement à taux zéro des travaux AEP et assainissement. Maturité jusqu'à 20 ans. Fonds verts 2023."
   },
   {
    "q": "Le coefficient de rendement primaire d'un réseau AEP est IP106 = :",
    "choices": [
     "IP106 = ILP × L réseau",
     "IP106 = Volume mis en distribution / Volume consommé × 100",
     "IP106 = Vc / Vp × 100",
     "IP106 = Vp / Vc × 100"
    ],
    "correct": 2,
    "expl": "IP106 (rendement du réseau) = Vc / Vp × 100. Objectif > 80% (sinon schéma directeur avec programme de renouvellement). Plan Eau 2023."
   },
   {
    "q": "Le prix de l'eau potable en France est en moyenne d'environ :",
    "choices": [
     "0,50 €/m³",
     "2,10 €/m³",
     "5,00 €/m³",
     "10,00 €/m³"
    ],
    "correct": 1,
    "expl": "Prix moyen France EP + assainissement : ≈ 4,20 €/m³ TTC (2022). Eau seule : ≈ 2,10 €/m³. Variations importantes : 1,5 à 7 €/m³ selon zone."
   },
   {
    "q": "La loi NOTRe (2015) concerne notamment les compétences :",
    "choices": [
     "ANC uniquement",
     "Eau potable ET assainissement collectif ET pluvial",
     "Eau potable uniquement",
     "Assainissement collectif uniquement"
    ],
    "correct": 1,
    "expl": "NOTRe : transfert eau potable + assainissement collectif + EP aux EPCI. Le pluvial (GEMAPI) aux EPCI depuis 2018. L'ANC reste possible en commune."
   },
   {
    "q": "La coopération internationale dans le domaine de l'eau est soutenue en France par :",
    "choices": [
     "La loi Oudin-Santini 2005 (1% solidarité eau)",
     "La loi LEMA 2006 uniquement",
     "Le Plan Eau 2023 uniquement",
     "Aucun cadre légal spécifique"
    ],
    "correct": 0,
    "expl": "Loi Oudin-Santini 2005 : les collectivités peuvent consacrer jusqu'à 1% de leur budget eau et assainissement à des actions de coopération internationale."
   },
   {
    "q": "Le SDG6 (Objectif du Développement Durable n°6) porte sur :",
    "choices": [
     "La lutte contre la pauvreté",
     "L'eau propre et l'assainissement pour tous d'ici 2030",
     "L'énergie propre",
     "Les villes durables"
    ],
    "correct": 1,
    "expl": "SDG6 (ODD6) : accès universel à l'eau potable et à l'assainissement d'ici 2030. 2 milliards de personnes sans eau sécurisée (OMS/UNICEF 2022)."
   }
  ]
 },
 {
  "id": "ue6-2",
  "theme": "UE6",
  "themeName": "Réglementation & gestion",
  "ico": "🔧",
  "color": "#886000",
  "colorl": "#FDF0D8",
  "title": "Gestion patrimoniale des réseaux",
  "desc": "Renouvellement · Diagnostic · Durée de vie · Schéma directeur",
  "questions": [
   {
    "q": "La gestion patrimoniale d'un réseau d'eau vise à :",
    "choices": [
     "Augmenter le prix",
     "Optimiser le renouvellement des infrastructures dans le temps",
     "Réduire le personnel",
     "Supprimer les compteurs"
    ],
    "correct": 1,
    "expl": "Gestion patrimoniale : connaître, entretenir et renouveler les ouvrages au bon moment pour garantir le service au moindre coût global sur le long terme. Cœur des schémas directeurs."
   },
   {
    "q": "Le taux de renouvellement moyen des réseaux AEP en France est d'environ :",
    "choices": [
     "0,6%/an",
     "5%/an",
     "10%/an",
     "20%/an"
    ],
    "correct": 0,
    "expl": "Taux de renouvellement AEP ≈ 0,6%/an (soit un renouvellement complet en ~160 ans), inférieur au rythme de vieillissement. Sujet majeur d'investissement pour les décennies à venir."
   },
   {
    "q": "L'indice de connaissance patrimoniale (IP119) va de :",
    "choices": [
     "0 à 20",
     "0 à 120",
     "0 à 100",
     "0 à 1000"
    ],
    "correct": 1,
    "expl": "IP119 : 0 à 120 points. Évalue la connaissance des réseaux (plans, matériaux, âge, branchements, interventions). Score ≥ 40 requis pour les aides des agences de l'eau."
   },
   {
    "q": "La durée de vie d'une conduite en fonte ductile est d'environ :",
    "choices": [
     "10 ans",
     "20 ans",
     "50-100 ans",
     "500 ans"
    ],
    "correct": 2,
    "expl": "Fonte ductile : 50-100 ans. PEHD/PVC : 40-70 ans. Acier : 40-60 ans. La durée dépend du sol (corrosion), des pressions et de la qualité de pose."
   },
   {
    "q": "Le taux de casse d'un réseau s'exprime en :",
    "choices": [
     "casses/km/an",
     "m³/j",
     "€/m",
     "bar"
    ],
    "correct": 0,
    "expl": "Taux de casse : nombre de casses par km de réseau par an. Indicateur clé de l'état patrimonial. Une hausse signale un réseau vieillissant nécessitant un renouvellement accru."
   },
   {
    "q": "Le SIG (Système d'Information Géographique) sert en gestion patrimoniale à :",
    "choices": [
     "Facturer les usagers",
     "Cartographier et gérer les données du réseau",
     "Désinfecter l'eau",
     "Mesurer le pH"
    ],
    "correct": 1,
    "expl": "SIG : cartographie géoréférencée des réseaux (conduites, vannes, compteurs, branchements) avec attributs (matériau, âge, diamètre). Base de la connaissance patrimoniale et de l'exploitation."
   },
   {
    "q": "La priorisation du renouvellement d'une conduite tient compte de :",
    "choices": [
     "Sa couleur",
     "L'âge, le matériau, l'historique de casses et la criticité",
     "Le nom de la rue",
     "La saison"
    ],
    "correct": 1,
    "expl": "Priorisation : croisement âge/matériau (probabilité de défaillance) et criticité (conséquences d'une casse : hôpital, trafic, gros diamètre). Cible les conduites à fort risque."
   },
   {
    "q": "Le récolement (plan de récolement) d'un chantier permet de :",
    "choices": [
     "Facturer",
     "Mettre à jour la cartographie avec les ouvrages réellement posés",
     "Désinfecter",
     "Mesurer le débit"
    ],
    "correct": 1,
    "expl": "Récolement : relevé géoréférencé des ouvrages réellement réalisés en fin de chantier. Indispensable pour maintenir un SIG fiable et localiser les réseaux (réglementation DT-DICT)."
   },
   {
    "q": "La réglementation DT-DICT vise à :",
    "choices": [
     "Fixer le prix de l'eau",
     "Prévenir les dommages aux réseaux lors de travaux",
     "Désinfecter",
     "Mesurer la dureté"
    ],
    "correct": 1,
    "expl": "DT (Déclaration de Travaux) / DICT (Déclaration d'Intention de Commencement de Travaux) : procédure obligatoire avant tous travaux à proximité des réseaux. Géoréférencement précis exigé (classe A)."
   },
   {
    "q": "Le diagnostic permanent des réseaux est obligatoire pour les agglomérations de plus de :",
    "choices": [
     "2 000 EH",
     "10 000 EH",
     "100 000 EH",
     "1 M EH"
    ],
    "correct": 1,
    "expl": "Arrêté 21/07/2015 : diagnostic permanent obligatoire > 10 000 EH (assainissement) depuis 2021. Métrologie continue, connaissance patrimoniale, détection des dysfonctionnements."
   },
   {
    "q": "La VNR (Valeur Nette de Renouvellement) sert à :",
    "choices": [
     "Calculer le pH",
     "Estimer le coût de remise à neuf du patrimoine",
     "Mesurer les fuites",
     "Compter les abonnés"
    ],
    "correct": 1,
    "expl": "VNR : valeur de remplacement à neuf du patrimoine, base du calcul des dotations aux amortissements et de la planification financière du renouvellement."
   },
   {
    "q": "Un schéma directeur d'alimentation en eau potable planifie :",
    "choices": [
     "Le prix de l'eau uniquement",
     "Les investissements et travaux sur 10-15 ans",
     "Le nombre d'employés",
     "Les horaires"
    ],
    "correct": 1,
    "expl": "Schéma directeur AEP : diagnostic + programmation pluriannuelle (10-15 ans) des travaux (renouvellement, sécurisation, interconnexions). Outil stratégique de la collectivité."
   },
   {
    "q": "L'inspection des conduites par capteurs acoustiques détecte :",
    "choices": [
     "La couleur",
     "Les fuites par le bruit qu'elles génèrent",
     "Le pH",
     "La température"
    ],
    "correct": 1,
    "expl": "Corrélateurs acoustiques et pré-localisateurs : détectent les fuites par le bruit caractéristique de l'eau s'échappant sous pression. Couplés à la sectorisation pour cibler les recherches."
   },
   {
    "q": "Le renouvellement d'un branchement plomb est :",
    "choices": [
     "Facultatif",
     "Obligatoire (santé publique)",
     "Interdit",
     "Sans importance"
    ],
    "correct": 1,
    "expl": "Le plomb étant neurotoxique (limite EP 10 µg/L), le remplacement des branchements en plomb est une priorité de santé publique. Programmes de renouvellement systématiques."
   },
   {
    "q": "La modélisation hydraulique d'un réseau (EPANET) sert à :",
    "choices": [
     "Facturer",
     "Simuler pressions et débits pour dimensionner et diagnostiquer",
     "Désinfecter",
     "Compter les abonnés"
    ],
    "correct": 1,
    "expl": "Modèle hydraulique (EPANET, Porteau) : simule le comportement du réseau (pressions, débits, qualité) pour le dimensionnement, le diagnostic et la planification des travaux."
   },
   {
    "q": "La sectorisation contribue à la gestion patrimoniale en :",
    "choices": [
     "Augmentant le prix",
     "Localisant les pertes et ciblant les renouvellements",
     "Désinfectant",
     "Réduisant la pression partout"
    ],
    "correct": 1,
    "expl": "La sectorisation (DMA) mesure les pertes par secteur, identifie les zones à fort taux de fuite et oriente les priorités de renouvellement et de recherche de fuites."
   },
   {
    "q": "Le coût global d'un ouvrage intègre :",
    "choices": [
     "Le seul coût d'achat",
     "Investissement + exploitation + maintenance sur la durée de vie",
     "Le seul coût de pose",
     "La TVA uniquement"
    ],
    "correct": 1,
    "expl": "Coût global (LCC) : investissement initial + exploitation + maintenance + renouvellement sur tout le cycle de vie. Critère de choix bien plus pertinent que le seul coût d'achat."
   },
   {
    "q": "La télégestion d'un réseau permet :",
    "choices": [
     "De facturer plus",
     "La supervision et le pilotage à distance des ouvrages",
     "De changer le pH",
     "De réduire les abonnés"
    ],
    "correct": 1,
    "expl": "Télégestion (SCADA) : supervision à distance des réservoirs, pompes, débits, pressions, alarmes. Optimise l'exploitation, détecte les anomalies, réduit les déplacements."
   },
   {
    "q": "Le taux de renouvellement se calcule sur une moyenne de :",
    "choices": [
     "1 an",
     "5 ans glissants",
     "100 ans",
     "1 mois"
    ],
    "correct": 1,
    "expl": "Le taux de renouvellement réglementaire (RPQS) se calcule sur une moyenne de 5 ans glissants pour lisser les à-coups annuels et refléter la tendance réelle d'investissement."
   },
   {
    "q": "Un réseau bien connu et entretenu permet de :",
    "choices": [
     "Augmenter les fuites",
     "Réduire les coûts et améliorer le rendement",
     "Supprimer le traitement",
     "Arrêter la facturation"
    ],
    "correct": 1,
    "expl": "Connaissance + entretien : meilleur rendement (moins de fuites), interventions ciblées, renouvellement optimisé, continuité de service. Réduit le coût global et sécurise l'approvisionnement."
   }
  ]
 },
 {
  "id": "ue6-3",
  "theme": "UE6",
  "themeName": "Réglementation & gestion",
  "ico": "💶",
  "color": "#886000",
  "colorl": "#FDF0D8",
  "title": "Économie et financement de l'eau",
  "desc": "Budget M49 · Redevances · Prix de l'eau · Aides",
  "questions": [
   {
    "q": "Le budget d'un service d'eau et d'assainissement suit la nomenclature :",
    "choices": [
     "M14",
     "M49",
     "M57",
     "M4"
    ],
    "correct": 1,
    "expl": "M49 : nomenclature comptable des services publics d'eau et d'assainissement (SPIC). Budget annexe équilibré, distinct du budget général de la commune. Principe de l'eau paie l'eau."
   },
   {
    "q": "Le principe \"l'eau paie l'eau\" signifie :",
    "choices": [
     "L'eau est gratuite",
     "Le service est financé par les redevances des usagers",
     "L'État paie tout",
     "Les entreprises paient"
    ],
    "correct": 1,
    "expl": "L'eau paie l'eau : le service (SPIC) s'équilibre par les recettes des usagers (facture d'eau), sans subvention du budget général (sauf petites communes < 3000 hab dérogatoires)."
   },
   {
    "q": "La facture d'eau comprend généralement :",
    "choices": [
     "Une part fixe (abonnement) et une part variable (consommation)",
     "Uniquement un forfait",
     "Uniquement la consommation",
     "Le prix du compteur"
    ],
    "correct": 1,
    "expl": "Facture : part fixe (abonnement) + part proportionnelle (m³ consommés), pour l'eau et l'assainissement, + redevances Agence + TVA. La part fixe est plafonnée (loi)."
   },
   {
    "q": "Les redevances des Agences de l'eau reposent sur le principe :",
    "choices": [
     "Pollueur-payeur",
     "Premier arrivé",
     "Du moins cher",
     "De gratuité"
    ],
    "correct": 0,
    "expl": "Principe pollueur-payeur / préleveur-payeur : redevances pour pollution, prélèvement, modernisation des réseaux. Financent les aides aux travaux (eau, assainissement, milieux)."
   },
   {
    "q": "La TVA sur l'eau potable est de :",
    "choices": [
     "5,5%",
     "10%",
     "20%",
     "0%"
    ],
    "correct": 0,
    "expl": "TVA réduite à 5,5% sur l'eau potable (bien de première nécessité). L'assainissement est à 10%. Ces taux figurent distinctement sur la facture d'eau."
   },
   {
    "q": "Le prix moyen de l'eau (eau + assainissement) en France est d'environ :",
    "choices": [
     "1 €/m³",
     "4 €/m³",
     "15 €/m³",
     "50 €/m³"
    ],
    "correct": 1,
    "expl": "Prix moyen ≈ 4-4,30 €/m³ TTC (eau + assainissement + redevances + TVA), soit ~120 €/an/personne pour 120 L/j. Forte variabilité locale (1,5 à 7 €/m³)."
   },
   {
    "q": "L'amortissement comptable d'un ouvrage permet de :",
    "choices": [
     "Payer les salaires",
     "Constituer des ressources pour le renouvellement",
     "Réduire la TVA",
     "Augmenter le prix"
    ],
    "correct": 1,
    "expl": "Amortissement : étalement comptable du coût d'un bien sur sa durée de vie. Génère une capacité d'autofinancement pour renouveler le patrimoine. Obligatoire en M49."
   },
   {
    "q": "Une régie à autonomie financière dispose :",
    "choices": [
     "D'aucun budget",
     "D'un budget propre équilibré",
     "Du budget de l'État",
     "Du budget départemental"
    ],
    "correct": 1,
    "expl": "Régie autonome : budget annexe propre, conseil d'exploitation, directeur. Gère directement le service. Variante : régie à personnalité morale (établissement public)."
   },
   {
    "q": "La surtaxe communale sur l'eau (en cas de DSP) revient :",
    "choices": [
     "Au délégataire",
     "À la collectivité (pour ses investissements)",
     "À l'État",
     "Aux usagers"
    ],
    "correct": 1,
    "expl": "En DSP, la facture comprend la part du délégataire (exploitation) et la surtaxe collectivité (part communale finançant les investissements dont elle reste maître d'ouvrage)."
   },
   {
    "q": "Le fonds de roulement d'un service d'eau sert à :",
    "choices": [
     "Distribuer des dividendes",
     "Faire face aux décalages de trésorerie",
     "Payer la TVA",
     "Réduire le prix"
    ],
    "correct": 1,
    "expl": "Fonds de roulement : réserve de trésorerie couvrant les décalages entre dépenses et recettes. Un niveau suffisant garantit la continuité financière du service."
   },
   {
    "q": "Les aides des Agences de l'eau financent prioritairement :",
    "choices": [
     "Les salaires",
     "Les travaux d'eau, d'assainissement et de restauration des milieux",
     "La publicité",
     "Les véhicules"
    ],
    "correct": 1,
    "expl": "Aides (subventions, avances) : conditionnées à la performance (rendement, IP119), elles financent renouvellement, mise en conformité STEU, protection captages, continuité écologique."
   },
   {
    "q": "La tarification progressive de l'eau vise à :",
    "choices": [
     "Pénaliser les pauvres",
     "Encourager la sobriété (prix croissant par tranches)",
     "Augmenter les profits",
     "Supprimer l'abonnement"
    ],
    "correct": 1,
    "expl": "Tarification progressive : le prix au m³ augmente avec la consommation. Incite à économiser. Possibilité de première tranche sociale à bas prix (eau vitale)."
   },
   {
    "q": "La tarification saisonnière est utile dans :",
    "choices": [
     "Les zones touristiques",
     "Les zones polaires",
     "Les déserts",
     "Les villes stables"
    ],
    "correct": 0,
    "expl": "Tarification saisonnière : prix plus élevé en période de forte demande (été touristique) pour gérer la ressource et financer les surdimensionnements nécessaires aux pointes."
   },
   {
    "q": "Le compte administratif d'un service d'eau retrace :",
    "choices": [
     "Les prévisions",
     "Les dépenses et recettes réellement réalisées",
     "Les projets futurs",
     "Les salaires uniquement"
    ],
    "correct": 1,
    "expl": "Compte administratif : bilan annuel des réalisations (vs le budget prévisionnel). Voté par l'assemblée délibérante, il rend compte de l'exécution budgétaire du service."
   },
   {
    "q": "Le chèque eau (aide sociale) est destiné :",
    "choices": [
     "Aux entreprises",
     "Aux ménages en difficulté pour payer leur facture",
     "Aux délégataires",
     "À l'État"
    ],
    "correct": 1,
    "expl": "Dispositifs d'aide sociale (chèque eau, tarification sociale) : aident les ménages précaires à régler leur facture, dans le cadre du droit d'accès à l'eau (loi Brottes 2013)."
   },
   {
    "q": "La part de l'assainissement dans la facture d'eau est d'environ :",
    "choices": [
     "5%",
     "40-50%",
     "90%",
     "0%"
    ],
    "correct": 1,
    "expl": "L'assainissement représente environ 40-50% de la facture totale (collecte + traitement + redevance). Sa part a augmenté avec les exigences de traitement renforcées."
   },
   {
    "q": "L'éco-prêt à taux zéro pour collectivités finance :",
    "choices": [
     "Les salaires",
     "Des travaux d'eau et assainissement à taux zéro",
     "La publicité",
     "Les loyers"
    ],
    "correct": 1,
    "expl": "Éco-PTZ collectivités / prêts bonifiés (Banque des Territoires) : financent à taux réduit les investissements eau/assainissement, complétant les aides des agences."
   },
   {
    "q": "La capacité d'autofinancement (CAF) d'un service mesure :",
    "choices": [
     "Le prix de l'eau",
     "Les ressources internes dégagées pour investir",
     "Le nombre d'abonnés",
     "La consommation"
    ],
    "correct": 1,
    "expl": "CAF : ressources internes (recettes - dépenses d'exploitation + amortissements) disponibles pour financer les investissements sans recourir à l'emprunt. Indicateur de santé financière."
   },
   {
    "q": "La péréquation tarifaire consiste à :",
    "choices": [
     "Augmenter les écarts de prix",
     "Harmoniser les prix entre territoires d'un même service",
     "Supprimer les redevances",
     "Privatiser l'eau"
    ],
    "correct": 1,
    "expl": "Péréquation : prix unique sur un territoire mutualisé (intercommunalité), lissant les écarts entre zones denses (peu coûteuses) et rurales (coûteuses). Solidarité territoriale."
   },
   {
    "q": "Le transfert de la compétence eau aux intercommunalités vise notamment :",
    "choices": [
     "À augmenter les prix",
     "La mutualisation des moyens et la péréquation",
     "À supprimer le service",
     "À réduire la qualité"
    ],
    "correct": 1,
    "expl": "Le transfert aux EPCI (loi NOTRe, obligatoire 2026 pour les communautés de communes) mutualise l'ingénierie, harmonise les prix (péréquation) et professionnalise la gestion."
   }
  ]
 },
 {
  "id": "ue6-4",
  "theme": "UE6",
  "themeName": "Réglementation & gestion",
  "ico": "📈",
  "color": "#886000",
  "colorl": "#FDF0D8",
  "title": "Indicateurs de performance",
  "desc": "SISPEA · RPQS · Rendement · Qualité de service",
  "questions": [
   {
    "q": "Le RPQS est un rapport :",
    "choices": [
     "Mensuel",
     "Annuel sur le prix et la qualité du service",
     "Décennal",
     "Hebdomadaire"
    ],
    "correct": 1,
    "expl": "RPQS : Rapport annuel sur le Prix et la Qualité du Service. Présenté à l'assemblée délibérante, public, transmis à l'observatoire SISPEA. Décret 2007-675."
   },
   {
    "q": "L'observatoire national des services d'eau s'appelle :",
    "choices": [
     "ADES",
     "SISPEA",
     "HYDRO",
     "SANDRE"
    ],
    "correct": 1,
    "expl": "SISPEA : Système d'Information sur les Services Publics d'Eau et d'Assainissement. Collecte les indicateurs des RPQS. Données publiques sur services.eaufrance.fr."
   },
   {
    "q": "Le rendement du réseau de distribution (IP106) est :",
    "choices": [
     "Volume consommé / volume produit × 100",
     "Volume produit / consommé",
     "Le débit max",
     "Le nombre de fuites"
    ],
    "correct": 0,
    "expl": "IP106 : rendement = volume consommé autorisé / volume mis en distribution × 100. Objectif réglementaire ≥ 85% (ou seuil Grenelle selon ressource). Indicateur central."
   },
   {
    "q": "L'indice linéaire de pertes (ILP) s'exprime en :",
    "choices": [
     "m³/km/j",
     "€/m",
     "bar",
     "%"
    ],
    "correct": 0,
    "expl": "ILP : pertes (volume non consommé) par km de réseau par jour (m³/km/j). Bon < 3 (rural) à < 10 (urbain). Mieux adapté que le rendement % pour comparer des réseaux de densités différentes."
   },
   {
    "q": "Le taux de conformité microbiologique de l'eau distribuée doit être proche de :",
    "choices": [
     "50%",
     "75%",
     "100%",
     "25%"
    ],
    "correct": 2,
    "expl": "Taux de conformité bactériologique (P101.1) : doit être proche de 100%. Tout dépassement (E. coli, entérocoques) déclenche des mesures correctives et l'information de l'ARS."
   },
   {
    "q": "Le taux d'occurrence des interruptions de service non programmées mesure :",
    "choices": [
     "Les coupures imprévues pour 1000 abonnés",
     "Le prix de l'eau",
     "La dureté",
     "Le pH"
    ],
    "correct": 0,
    "expl": "P151.1 : nombre de coupures non programmées pour 1000 abonnés/an. Indicateur de continuité de service. Une valeur élevée révèle un réseau fragile ou mal exploité."
   },
   {
    "q": "Le délai d'ouverture des branchements neufs est un indicateur de :",
    "choices": [
     "Qualité du service à l'usager",
     "Dureté de l'eau",
     "Rendement",
     "Pression"
    ],
    "correct": 0,
    "expl": "P152.1 : taux de respect du délai d'ouverture des branchements. Indicateur de la qualité de la relation à l'usager (réactivité), suivi dans le RPQS."
   },
   {
    "q": "L'indice de connaissance et de gestion patrimoniale des réseaux d'eau (P103.2B) va de :",
    "choices": [
     "0 à 20",
     "0 à 120",
     "0 à 100",
     "0 à 1000"
    ],
    "correct": 1,
    "expl": "P103.2B (équivalent IP119) : 0 à 120 points. Évalue la connaissance du patrimoine et la planification du renouvellement. Score minimal exigé pour les aides."
   },
   {
    "q": "Le taux de réclamations mesure :",
    "choices": [
     "Les réclamations écrites pour 1000 abonnés",
     "Le prix",
     "La pression",
     "Le débit"
    ],
    "correct": 0,
    "expl": "P155.1 : nombre de réclamations écrites pour 1000 abonnés/an. Indicateur de satisfaction des usagers. Inclut qualité d'eau, facturation, interruptions, pression."
   },
   {
    "q": "Le taux d'impayés sur les factures d'eau est un indicateur :",
    "choices": [
     "Financier et social",
     "De pH",
     "De pression",
     "De dureté"
    ],
    "correct": 0,
    "expl": "P154.0 : taux d'impayés (montant impayé N-1 / facturé N-1). Indicateur financier et social. En hausse en cas de difficultés économiques des ménages."
   },
   {
    "q": "La conformité des rejets d'une STEU est évaluée par rapport :",
    "choices": [
     "Au prix de l'eau",
     "À l'arrêté préfectoral d'autorisation",
     "À la couleur",
     "À la température extérieure"
    ],
    "correct": 1,
    "expl": "P205.3 / P254.3 : conformité des performances des STEU aux prescriptions de l'arrêté préfectoral (DBO₅, DCO, MES, N, P). Suivi par l'autosurveillance et la police de l'eau."
   },
   {
    "q": "L'indice de mise en œuvre de l'assainissement non collectif (SPANC) mesure :",
    "choices": [
     "Le pH",
     "L'étendue des missions du SPANC",
     "La dureté",
     "La pression"
    ],
    "correct": 1,
    "expl": "P301.3 : indice 0-140 reflétant les missions assurées par le SPANC (contrôles conception, réalisation, bon fonctionnement, vente, réhabilitation, entretien). Plus l'indice est élevé, plus le service est complet."
   },
   {
    "q": "Le taux de boues évacuées selon des filières conformes vise :",
    "choices": [
     "0%",
     "100%",
     "50%",
     "25%"
    ],
    "correct": 1,
    "expl": "P206.3 : taux de boues issues des STEU évacuées selon des filières conformes (épandage, compostage, incinération réglementaires). Objectif 100%. Traçabilité exigée."
   },
   {
    "q": "Les indicateurs de performance sont :",
    "choices": [
     "Facultatifs et secrets",
     "Obligatoires et publics (RPQS, SISPEA)",
     "Réservés à l'État",
     "Interdits"
    ],
    "correct": 1,
    "expl": "Les indicateurs descriptifs et de performance sont définis par décret, calculés annuellement, publiés dans le RPQS et transmis à SISPEA. Transparence vis-à-vis des usagers."
   },
   {
    "q": "Un rendement de réseau faible indique :",
    "choices": [
     "Un réseau performant",
     "Des pertes importantes (fuites)",
     "Une eau de qualité",
     "Un prix bas"
    ],
    "correct": 1,
    "expl": "Rendement faible = beaucoup d'eau produite et traitée mais non consommée (fuites, vols, sous-comptage). Gaspillage de ressource et d'énergie. Déclenche un plan d'actions obligatoire."
   },
   {
    "q": "Le linéaire de réseau renouvelé est exprimé en :",
    "choices": [
     "% du linéaire total/an",
     "€",
     "bar",
     "m³"
    ],
    "correct": 0,
    "expl": "P107.2 : taux moyen de renouvellement (% du linéaire renouvelé par an, moyenne 5 ans). Reflète l'effort de maintien du patrimoine. Souvent insuffisant (~0,6%/an national)."
   },
   {
    "q": "La satisfaction des usagers peut être mesurée par :",
    "choices": [
     "Le pH",
     "Des enquêtes et le taux de réclamations",
     "La pression",
     "La dureté"
    ],
    "correct": 1,
    "expl": "Satisfaction : enquêtes périodiques, taux de réclamations, délais de réponse, qualité de l'accueil. De plus en plus suivie dans une logique de service public de qualité."
   },
   {
    "q": "Le taux de desserte par réseau de collecte (assainissement) mesure :",
    "choices": [
     "Le prix",
     "La part de la population raccordable au réseau",
     "La dureté",
     "Le débit"
    ],
    "correct": 1,
    "expl": "P201.1 : taux de desserte = abonnés raccordés ou raccordables / abonnés de la zone d'assainissement collectif. Reflète l'avancement du raccordement."
   },
   {
    "q": "Un benchmark entre services d'eau permet de :",
    "choices": [
     "Augmenter les prix",
     "Comparer les performances et identifier les marges de progrès",
     "Désinfecter",
     "Réduire la qualité"
    ],
    "correct": 1,
    "expl": "Le benchmarking (via SISPEA, observatoires) compare les indicateurs entre services comparables, identifie les bonnes pratiques et les axes d'amélioration. Outil de pilotage."
   },
   {
    "q": "L'amélioration continue d'un service d'eau repose sur :",
    "choices": [
     "L'ignorance des indicateurs",
     "Le suivi des indicateurs et des plans d'action",
     "La hausse des prix",
     "La réduction du personnel"
    ],
    "correct": 1,
    "expl": "Démarche d'amélioration continue : mesurer (indicateurs), analyser, agir (plans d'action), réévaluer. Le RPQS et SISPEA fournissent le cadre de ce pilotage par la performance."
   }
  ]
 },
 {
  "id": "ue6-5",
  "theme": "UE6",
  "themeName": "Réglementation & gestion",
  "ico": "📑",
  "color": "#886000",
  "colorl": "#FDF0D8",
  "title": "Contrats et commande publique",
  "desc": "DSP · Marchés publics · Contrôle délégataire · Régie",
  "questions": [
   {
    "q": "Une Délégation de Service Public (DSP) confie l'exploitation :",
    "choices": [
     "À un autre État",
     "À un opérateur dont la rémunération est liée à l'exploitation",
     "À l'usager",
     "À l'Agence de l'eau"
    ],
    "correct": 1,
    "expl": "DSP (concession) : la collectivité confie le service à un délégataire rémunéré substantiellement par les résultats de l'exploitation (recettes usagers). Risque transféré au délégataire."
   },
   {
    "q": "Le contrat d'affermage se distingue de la concession par :",
    "choices": [
     "Le délégataire finance tous les ouvrages",
     "La collectivité reste maître d'ouvrage des gros investissements",
     "L'absence d'usagers",
     "La gratuité"
    ],
    "correct": 1,
    "expl": "Affermage : la collectivité finance et possède les ouvrages, le fermier les exploite et finance le renouvellement courant. Concession : le concessionnaire finance aussi les gros investissements."
   },
   {
    "q": "La durée d'une DSP est limitée pour :",
    "choices": [
     "Augmenter les prix",
     "Permettre la remise en concurrence et éviter les rentes",
     "Compliquer la gestion",
     "Réduire la qualité"
    ],
    "correct": 1,
    "expl": "La durée est encadrée par le Code de la commande publique (liée à l'amortissement des investissements du délégataire). Limite la durée des rentes et permet une remise en concurrence régulière."
   },
   {
    "q": "Le contrôle du délégataire par la collectivité s'appuie sur :",
    "choices": [
     "Aucun document",
     "Le rapport annuel du délégataire (RAD)",
     "La couleur de l'eau",
     "Le hasard"
    ],
    "correct": 1,
    "expl": "RAD : Rapport Annuel du Délégataire, obligatoire (L1411-3 CGCT). Comptes, indicateurs techniques, état du patrimoine. Base du contrôle de la collectivité sur l'exécution du contrat."
   },
   {
    "q": "Un marché public de travaux pour une STEU est soumis :",
    "choices": [
     "À aucune règle",
     "Au Code de la commande publique",
     "Au code de la route",
     "Au code civil seul"
    ],
    "correct": 1,
    "expl": "Code de la commande publique : procédures de passation (appel d'offres, MAPA selon seuils), publicité, mise en concurrence, critères de choix. Garantit l'égalité de traitement et la transparence."
   },
   {
    "q": "Le maître d'ouvrage d'un projet d'assainissement est :",
    "choices": [
     "L'entreprise de travaux",
     "La collectivité qui commande et finance l'ouvrage",
     "Le bureau d'études",
     "L'usager"
    ],
    "correct": 1,
    "expl": "Maître d'ouvrage (MOA) : la collectivité, propriétaire et commanditaire, qui définit le besoin, finance et réceptionne. Distinct du maître d'œuvre (conception/suivi) et de l'entreprise (réalisation)."
   },
   {
    "q": "Le maître d'œuvre (MOE) d'un chantier assure :",
    "choices": [
     "Le financement",
     "La conception et le suivi des travaux",
     "La facturation des usagers",
     "La distribution de l'eau"
    ],
    "correct": 1,
    "expl": "Maître d'œuvre : bureau d'études/ingénieur assurant la conception, la consultation des entreprises, la direction et le contrôle des travaux pour le compte du maître d'ouvrage."
   },
   {
    "q": "Le MAPA (marché à procédure adaptée) s'applique :",
    "choices": [
     "Au-dessus des seuils européens",
     "En dessous des seuils, avec procédure libre encadrée",
     "Jamais",
     "Uniquement en DSP"
    ],
    "correct": 1,
    "expl": "MAPA : pour les marchés sous les seuils européens, la procédure est librement définie par l'acheteur dans le respect des principes (publicité et mise en concurrence proportionnées)."
   },
   {
    "q": "La régie directe signifie que le service est géré :",
    "choices": [
     "Par une entreprise privée",
     "Directement par la collectivité avec ses moyens",
     "Par l'État",
     "Par les usagers"
    ],
    "correct": 1,
    "expl": "Régie : gestion directe par la collectivité (personnel public, budget annexe M49). Maîtrise complète mais nécessite l'ingénierie en interne. Alternative à la DSP."
   },
   {
    "q": "La SEMOP (société d'économie mixte à opération unique) associe :",
    "choices": [
     "Uniquement le privé",
     "La collectivité et un opérateur privé pour un contrat dédié",
     "Deux États",
     "Les usagers seuls"
    ],
    "correct": 1,
    "expl": "SEMOP : société créée pour un contrat unique, capital partagé collectivité/opérateur privé sélectionné. Forme intermédiaire entre régie et DSP, alliant contrôle public et savoir-faire privé."
   },
   {
    "q": "L'avenant à un contrat de DSP permet :",
    "choices": [
     "De tout changer librement",
     "De modifier le contrat dans des limites encadrées",
     "D'augmenter les prix sans limite",
     "De supprimer le contrôle"
    ],
    "correct": 1,
    "expl": "Avenant : modification du contrat en cours, strictement encadrée par le Code de la commande publique (pas de bouleversement de l'économie du contrat ni de l'objet). Contrôle du juge."
   },
   {
    "q": "La clause de revoyure d'un contrat sert à :",
    "choices": [
     "Réviser périodiquement les conditions",
     "Résilier immédiatement",
     "Augmenter la TVA",
     "Supprimer les indicateurs"
    ],
    "correct": 0,
    "expl": "Clause de revoyure : rendez-vous contractuel périodique pour ajuster les engagements (tarifs, programme de travaux, performances) selon l'évolution du contexte. Sécurise les contrats longs."
   },
   {
    "q": "Le contrôle de la qualité du service délégué incombe :",
    "choices": [
     "Au délégataire seul",
     "À la collectivité délégante",
     "À l'usager",
     "À personne"
    ],
    "correct": 1,
    "expl": "La collectivité reste responsable du service public même délégué : elle contrôle le délégataire (RAD, indicateurs, audits), sanctionne les manquements et défend l'intérêt des usagers."
   },
   {
    "q": "En fin de DSP, les biens de retour reviennent :",
    "choices": [
     "Au délégataire",
     "Gratuitement à la collectivité",
     "À l'État",
     "Aux usagers"
    ],
    "correct": 1,
    "expl": "Biens de retour (ouvrages indispensables au service) : reviennent gratuitement à la collectivité en fin de contrat (amortis pendant la durée). Continuité du service public assurée."
   },
   {
    "q": "Une procédure d'appel d'offres ouvert permet :",
    "choices": [
     "À un seul candidat",
     "À tout candidat de remettre une offre",
     "Aucune candidature",
     "Le choix arbitraire"
    ],
    "correct": 1,
    "expl": "Appel d'offres ouvert : tout opérateur intéressé peut soumissionner. Choix sur critères objectifs prédéfinis (prix, valeur technique...). Garantit concurrence et transparence."
   },
   {
    "q": "Le contrôle de légalité des contrats par le préfet vérifie :",
    "choices": [
     "La couleur de l'eau",
     "La conformité au droit",
     "Le pH",
     "La pression"
    ],
    "correct": 1,
    "expl": "Contrôle de légalité : le préfet vérifie la conformité juridique des actes (délibérations, contrats) des collectivités. Peut déférer au tribunal administratif les actes illégaux."
   },
   {
    "q": "Le règlement de service définit :",
    "choices": [
     "Le prix mondial de l'eau",
     "Les relations entre le service et les usagers (droits/obligations)",
     "La météo",
     "La Bourse"
    ],
    "correct": 1,
    "expl": "Règlement de service : document définissant les conditions de fourniture (abonnement, branchement, facturation, qualité, obligations réciproques). Opposable aux usagers, joint à la 1re facture."
   },
   {
    "q": "La commission consultative des services publics locaux (CCSPL) :",
    "choices": [
     "Fixe les prix mondiaux",
     "Associe usagers et élus au suivi des services",
     "Désinfecte l'eau",
     "Mesure le pH"
    ],
    "correct": 1,
    "expl": "CCSPL : obligatoire pour les collectivités > 10 000 hab. Associe élus et associations d'usagers, examine les rapports (RPQS, RAD), donne un avis sur les projets de DSP. Démocratie participative."
   },
   {
    "q": "Le choix entre régie et DSP relève :",
    "choices": [
     "De l'État",
     "De la libre administration de la collectivité",
     "Du délégataire",
     "De l'usager"
    ],
    "correct": 1,
    "expl": "Le mode de gestion est un choix politique de la collectivité (libre administration). Il s'appuie sur une analyse comparative (coûts, risques, compétences internes, qualité attendue)."
   },
   {
    "q": "Un audit de fin de contrat de DSP vise à :",
    "choices": [
     "Augmenter le prix",
     "Évaluer l'état du service et préparer la suite",
     "Désinfecter",
     "Réduire la qualité"
    ],
    "correct": 1,
    "expl": "Audit de fin de contrat : bilan technique, financier et patrimonial du service avant échéance. Prépare le choix du futur mode de gestion et la remise en concurrence éventuelle."
   }
  ]
 }
];
