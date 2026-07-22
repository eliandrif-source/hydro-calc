/* ══════════════════════════════════════════════════════════════════
   COURS — HydroCalc
   BTS GEMEAU · Licence Pro · Master · BUT
   ══════════════════════════════════════════════════════════════════ */

/* ─── DONNÉES ─────────────────────────────────────────────────────── */
const COURS_DATA = {

  /* ══ BTS GEMEAU / BTS MDE ══════════════════════════════════════════ */
  'bts-gemeau': {
    name: 'BTS Métiers de l\'Eau / BTSA GEMEAU',
    sigle: 'BTS GEMEAU',
    ico: '💧',
    color: '#0A7460',
    colorl: '#E0F4F0',
    niveau: 'Bac+2',
    organisme: 'MEN / Ministère de l\'Agriculture',
    desc: 'Formation aux métiers de l\'eau : alimentation en eau potable, assainissement collectif et non collectif, milieux aquatiques, STEU.',
    annees: [
      /* ── Première année ── */
      {
        id: 'an1',
        name: 'Première année',
        matieres: [

          /* ── Hydraulique générale ── */
          {
            id: 'hydraulique',
            name: 'Hydraulique générale',
            ico: '🌊',
            color: '#0A5090',
            colorl: '#E6EEF8',
            chapitres: [
              {
                id: 'hyd-1',
                titre: 'Propriétés physiques des fluides',
                fiche: {
                  intro: 'L\'eau est un fluide incompressible dont les propriétés varient avec la température. La connaissance de ces propriétés est essentielle pour tout calcul hydraulique.',
                  sections: [
                    {
                      titre: 'Masse volumique et poids volumique',
                      texte: 'La masse volumique ρ (kg/m³) représente la masse par unité de volume d\'eau. Elle atteint son maximum à 4 °C (ρ = 1 000 kg/m³) et diminue légèrement au-delà — à 20 °C, ρ = 998 kg/m³. Cette faible variation est négligeable en hydraulique courante.\n\nLe poids volumique γ = ρ × g (N/m³) est la force exercée par un volume d\'eau. À 20 °C : γ = 998 × 9,81 = 9 790 N/m³ ≈ 9,81 kN/m³. En pratique, on retient souvent γ ≈ 10 kN/m³ pour les estimations rapides, ce qui revient à dire que 1 m³ d\'eau pèse environ 1 tonne.',
                    },
                    {
                      titre: 'Viscosité dynamique et cinématique',
                      texte: 'La viscosité mesure la résistance interne d\'un fluide à l\'écoulement. On distingue deux grandeurs :\n\n• La viscosité dynamique μ (Pa·s) traduit les forces de frottement entre couches adjacentes. À 20 °C : μ = 1,002 × 10⁻³ Pa·s.\n\n• La viscosité cinématique ν = μ/ρ (m²/s) entre directement dans les calculs hydrauliques (nombre de Reynolds). À 20 °C : ν ≈ 10⁻⁶ m²/s = 1 mm²/s = 1 cSt.\n\nPoint crucial : contrairement aux gaz, la viscosité d\'un liquide DIMINUE quand la température augmente. L\'eau à 60 °C (ν ≈ 0,47 × 10⁻⁶) est presque deux fois plus fluide qu\'à 20 °C. En hiver, l\'eau plus visqueuse génère des nombres de Reynolds plus faibles et des pertes de charge légèrement supérieures.',
                    },
                    {
                      titre: 'Compressibilité et tension superficielle',
                      texte: 'L\'eau est quasi-incompressible : son module de compressibilité K ≈ 2,2 GPa signifie qu\'une pression de 220 bar ne comprime le volume que de 1 %. Dans la quasi-totalité des calculs hydrauliques, on considère l\'eau rigoureusement incompressible (ρ = constante). La compressibilité n\'intervient qu\'en régime transitoire lors des coups de bélier (fermeture rapide de vanne).\n\nLa tension superficielle σ ≈ 0,073 N/m à 20 °C est la force par unité de longueur à l\'interface eau-air. Elle est responsable de la capillarité (montée dans les tubes fins), de la sphéricité des gouttes, et de certains phénomènes de mouillage. En hydraulique des réseaux elle est négligée, mais intervient dans les études de sol et de drainage.',
                    },
                  ],
                  points: [
                    '💧 Masse volumique ρ : 1 000 kg/m³ à 4 °C (maximum), 998 kg/m³ à 20 °C',
                    '🌡️ Viscosité dynamique μ : 1,002 × 10⁻³ Pa·s à 20 °C — diminue quand T augmente',
                    '📐 Viscosité cinématique ν = μ/ρ : ≈ 10⁻⁶ m²/s à 20 °C (1 mm²/s)',
                    '🗜️ Module de compressibilité K ≈ 2,2 GPa → l\'eau est quasi-incompressible',
                    '🫧 Tension superficielle σ ≈ 0,073 N/m à 20 °C — responsable de la capillarité',
                    '⚠️ Contrairement aux gaz, la viscosité d\'un liquide DIMINUE quand T augmente',
                    '📏 Poids volumique γ = ρ × g ≈ 9 810 N/m³ (≈ 10 kN/m³ en première approche)',
                  ],
                  formules: [
                    'ν = μ / ρ — viscosité cinématique (m²/s)',
                    'γ = ρ × g — poids volumique (N/m³)',
                  ],
                  retenir: 'À 20 °C : ρ ≈ 998 kg/m³ (maximum à 4 °C : 1 000 kg/m³), ν ≈ 10⁻⁶ m²/s. La viscosité diminue avec la chaleur.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Propriétés de l\'eau selon la température</div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr><th style="text-align:left;padding:7px 10px;background:var(--c-surface-2);color:var(--c-text);font-weight:700;border-bottom:2px solid var(--c-border)">Propriété</th><th style="text-align:center;padding:7px 10px;background:rgba(0,90,138,.18);color:#005A8A;font-weight:700;border-bottom:2px solid rgba(0,90,138,.5)">4 °C (max ρ)</th><th style="text-align:center;padding:7px 10px;background:rgba(10,116,96,.18);color:#0A7460;font-weight:700;border-bottom:2px solid rgba(10,116,96,.5)">20 °C ★</th><th style="text-align:center;padding:7px 10px;background:rgba(122,79,0,.12);color:#7A4F00;font-weight:700;border-bottom:2px solid rgba(122,79,0,.4)">60 °C</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:7px 10px;font-weight:600;color:var(--c-text)">ρ (kg/m³)</td><td style="text-align:center;padding:7px;font-weight:700;color:#005A8A">1 000,0</td><td style="text-align:center;padding:7px;font-weight:700;color:#0A7460">998,2</td><td style="text-align:center;padding:7px;color:var(--c-text-3)">983,2</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:7px 10px;font-weight:600;color:var(--c-text)">μ × 10³ (Pa·s)</td><td style="text-align:center;padding:7px;font-weight:700;color:#005A8A">1,567</td><td style="text-align:center;padding:7px;font-weight:700;color:#0A7460">1,002</td><td style="text-align:center;padding:7px;color:var(--c-text-3)">0,466</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:7px 10px;font-weight:600;color:var(--c-text)">ν × 10⁶ (m²/s)</td><td style="text-align:center;padding:7px;font-weight:700;color:#005A8A">1,567</td><td style="text-align:center;padding:7px;font-weight:700;color:#0A7460">1,004</td><td style="text-align:center;padding:7px;color:var(--c-text-3)">0,474</td></tr><tr><td style="padding:7px 10px;font-weight:600;color:var(--c-text)">γ (kN/m³)</td><td style="text-align:center;padding:7px;font-weight:700;color:#005A8A">9,810</td><td style="text-align:center;padding:7px;font-weight:700;color:#0A7460">9,789</td><td style="text-align:center;padding:7px;color:var(--c-text-3)">9,644</td></tr></tbody></table></div><div style="margin-top:8px;font-size:10px;color:var(--c-text-4)">★ Référence standard · La viscosité DIMINUE quand T augmente (contrairement aux gaz)</div></div>',
                },
                flashcards: [
                  { q: 'Masse volumique de l\'eau à 4 °C ?', r: '1 000 kg/m³ — c\'est le maximum (l\'eau est la plus dense à 4 °C)', expl: 'Au-delà ou en-deçà de 4 °C, la masse volumique diminue légèrement.' },
                  { q: 'Unité de la viscosité cinématique ?', r: 'm²/s (ou mm²/s = cSt). 1 cSt = 10⁻⁶ m²/s', expl: 'L\'eau à 20 °C a ν ≈ 1 mm²/s = 1 cSt, ce qui simplifie les calculs.' },
                  { q: 'Comment la viscosité de l\'eau évolue-t-elle avec la température ?', r: 'Elle DIMINUE quand la température AUGMENTE (l\'eau chaude est plus fluide)', expl: 'Contrairement aux gaz, les liquides voient leur viscosité baisser avec la chaleur (agitation thermique réduit les liaisons H).' },
                  { q: 'Lien entre viscosité dynamique μ et cinématique ν ?', r: 'ν = μ / ρ  (m²/s = Pa·s / kg·m⁻³)', expl: 'La viscosité cinématique intègre la densité du fluide, ce qui facilite l\'utilisation dans le nombre de Reynolds.' },
                  { q: 'Pourquoi dit-on que l\'eau est quasi-incompressible ?', r: 'Son module de compressibilité K ≈ 2,2 GPa : une pression de 22 bars réduit le volume de seulement 0,1 %', expl: 'En hydraulique courante, on néglige la compressibilité. Elle n\'intervient que pour les coups de bélier.' },
                  { q: 'Qu\'est-ce que la tension superficielle ?', r: 'Force par unité de longueur (N/m) à l\'interface eau-air. σ ≈ 0,073 N/m à 20 °C', expl: 'Elle explique la capillarité (montée d\'eau dans un tube fin), la sphéricité des gouttes et les insectes marchant sur l\'eau.' },
                ],
                exercices: [
                  {
                    id: 'ex-hyd1-1',
                    titre: 'Propriétés physiques de l\'eau à 20 °C',
                    source: 'D\'après BTS Métiers de l\'Eau — Épreuve E4 Hydraulique',
                    difficulte: 'facile',
                    enonce: 'Un réseau d\'eau potable distribue de l\'eau à 20 °C. Les données du fabricant indiquent : masse volumique ρ = 998 kg/m³, viscosité dynamique μ = 1,002 × 10⁻³ Pa·s. On prendra g = 9,81 m/s².',
                    questions: [
                      { num: '1', texte: 'Calculer la viscosité cinématique ν de l\'eau à 20 °C. Exprimer le résultat en m²/s et en mm²/s.', indice: 'La viscosité cinématique est le rapport de la viscosité dynamique sur la masse volumique : ν = μ / ρ', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Masse volumique : ρ = 998 kg/m³\nViscosité dynamique : μ = 1,002 × 10⁻³ Pa·s' },
                        { titre: 'Formule de la viscosité cinématique', detail: 'ν = μ / ρ     (unité : m²/s)' },
                        { titre: 'Calcul de ν', detail: 'ν = 1,002 × 10⁻³ / 998\nν = 1,004 × 10⁻⁶ m²/s' },
                        { titre: 'Conversion en mm²/s', detail: '1 mm²/s = 10⁻⁶ m²/s\nν ≈ 1,004 mm²/s ≈ 1 mm²/s = 1 cSt\nRègle pratique : à 20 °C, ν ≈ 10⁻⁶ m²/s — valeur de référence à retenir' },
                      ] },
                      { num: '2', texte: 'Calculer le poids volumique γ de l\'eau. Exprimer le résultat en N/m³ et kN/m³.', indice: 'γ = ρ × g (le poids volumique est la force gravitationnelle par unité de volume)', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Masse volumique : ρ = 998 kg/m³\nAccélération gravitationnelle : g = 9,81 m/s²' },
                        { titre: 'Formule du poids volumique', detail: 'γ = ρ × g     (unité : N/m³)' },
                        { titre: 'Calcul de γ (poids volumique)', detail: 'γ = 998 × 9,81\nγ = 9 790 N/m³\nγ = 9,79 kN/m³' },
                        { titre: 'Valeur approchée utilisée en pratique', detail: 'γ ≈ 9 810 N/m³ ≈ 9,81 kN/m³ ≈ 10 kN/m³\nL\'approximation à 10 kN/m³ est courante pour les calculs rapides.' },
                      ] },
                      { num: '3', texte: 'En hiver, la température de l\'eau descend à 8 °C (ρ = 999,8 kg/m³, μ = 1,386 × 10⁻³ Pa·s). Comment évoluent ν et γ ? Quelle conséquence pratique ?', indice: 'Refaire les calculs avec les nouvelles valeurs et comparer.', reponse: [
                        { titre: 'Données à 8 °C (hiver)', detail: 'Masse volumique : ρ = 999,8 kg/m³\nViscosité dynamique : μ = 1,386 × 10⁻³ Pa·s\ng = 9,81 m/s²' },
                        { titre: 'Calcul de ν à 8 °C', detail: 'ν(8°C) = μ / ρ = 1,386 × 10⁻³ / 999,8\nν(8°C) = 1,386 × 10⁻⁶ m²/s\n→ Hausse de +38 % par rapport à 20 °C (1,004 × 10⁻⁶ m²/s)' },
                        { titre: 'Calcul de γ à 8 °C', detail: 'γ(8°C) = ρ × g = 999,8 × 9,81\nγ(8°C) = 9 808 N/m³ ≈ 9,81 kN/m³\n→ Variation < 0,2 % par rapport à 20 °C : quasi identique' },
                        { titre: 'Conséquence pratique en réseau', detail: 'La viscosité augmente fortement en hiver (+38 %) :\n• Nombre de Reynolds plus faible → risque de régime laminaire dans les petites conduites\n• Pertes de charge légèrement supérieures\n• Puissance de pompage légèrement accrue\nLe poids volumique γ varie très peu : il n\'influence pas significativement les calculs de pression statique.' },
                      ] },
                    ],
                  },
                  {
                    id: 'ex-hyd1-2',
                    titre: 'Comparaison eau / huile hydraulique',
                    source: 'Exercice type BTS Métiers de l\'Eau — Année 1',
                    difficulte: 'moyen',
                    enonce: 'Un technicien compare les propriétés de l\'eau (ρ = 998 kg/m³, μ = 1,002 × 10⁻³ Pa·s) et d\'une huile hydraulique (ρ = 880 kg/m³, μ = 46 × 10⁻³ Pa·s) utilisée dans un vérin.',
                    questions: [
                      { num: '1', texte: 'Calculer la viscosité cinématique de chaque fluide. Lequel est le plus visqueux ?', indice: 'Calculer ν = μ/ρ pour chaque fluide, puis comparer.', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Eau : ρ_eau = 998 kg/m³, μ_eau = 1,002 × 10⁻³ Pa·s\nHuile : ρ_huile = 880 kg/m³, μ_huile = 46 × 10⁻³ Pa·s' },
                        { titre: 'Formule utilisée', detail: 'ν = μ / ρ     (unité : m²/s)' },
                        { titre: 'Calcul de ν pour l\'eau', detail: 'ν_eau = 1,002 × 10⁻³ / 998\nν_eau ≈ 1,00 × 10⁻⁶ m²/s = 1 mm²/s' },
                        { titre: 'Calcul de ν pour l\'huile hydraulique', detail: 'ν_huile = 46 × 10⁻³ / 880\nν_huile ≈ 52,3 × 10⁻⁶ m²/s = 52,3 mm²/s' },
                        { titre: 'Comparaison et conclusion', detail: 'Rapport : ν_huile / ν_eau = 52,3 / 1,00 ≈ 52\nL\'huile est 52 fois plus visqueuse que l\'eau.\n→ Avantage en vérin : meilleure transmission de pression, moins de fuites\n→ Inconvénient : pertes de charge bien plus élevées dans les conduites' },
                      ] },
                      { num: '2', texte: 'Pour un écoulement dans un tube DN 20 mm à V = 0,5 m/s, calculer le nombre de Reynolds pour chaque fluide. Quel est le régime d\'écoulement ?', indice: 'Re = V × D / ν. Rappel : Re < 2000 = laminaire, Re > 4000 = turbulent.', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Diamètre : D = 20 mm = 0,020 m\nVitesse : V = 0,5 m/s\nν_eau = 1,00 × 10⁻⁶ m²/s\nν_huile = 52,3 × 10⁻⁶ m²/s' },
                        { titre: 'Formule du nombre de Reynolds', detail: 'Re = V × D / ν     (sans unité)' },
                        { titre: 'Calcul de Re pour l\'eau', detail: 'Re_eau = 0,5 × 0,020 / (1,00 × 10⁻⁶)\nRe_eau = 0,010 / (1,00 × 10⁻⁶)\nRe_eau = 10 000  →  turbulent (Re > 4 000)' },
                        { titre: 'Calcul de Re pour l\'huile', detail: 'Re_huile = 0,5 × 0,020 / (52,3 × 10⁻⁶)\nRe_huile = 0,010 / (52,3 × 10⁻⁶)\nRe_huile ≈ 191  →  laminaire (Re < 2 000)' },
                        { titre: 'Conclusion — impact sur les calculs', detail: 'À même vitesse et même diamètre, les deux fluides sont dans des régimes opposés.\n• Eau (Re = 10 000) : turbulent → utiliser les formules de Darcy-Weisbach ou Manning-Strickler\n• Huile (Re = 191) : laminaire → utiliser la loi de Hagen-Poiseuille (λ = 64/Re)\nLes formules de pertes de charge ne sont pas les mêmes selon le régime.' },
                      ] },
                    ],
                  },
                ],
              },
              {
                id: 'hyd-2',
                titre: 'Hydrostatique — pression et poussées',
                fiche: {
                  intro: 'L\'hydrostatique étudie les fluides au repos. La pression augmente linéairement avec la profondeur et se transmet intégralement (Pascal).',
                  sections: [
                    {
                      titre: 'Loi fondamentale de l\'hydrostatique',
                      texte: 'Dans un fluide au repos, la pression augmente avec la profondeur selon : P = P₀ + ρ·g·h, où h est la profondeur comptée positivement vers le bas depuis la surface libre.\n\nEn réseau d\'eau potable, on exprime la pression en relatif (P₀ = 0) : seule la hauteur de colonne d\'eau compte. Règle pratique : chaque mètre de hauteur d\'eau ajoute ρ·g ≈ 9 810 Pa ≈ 0,1 bar. Ainsi, un château d\'eau dont le fond est à 20 m au-dessus d\'un abonné fournit 20 × 0,1 = 2 bar de pression statique.\n\nLa réglementation française impose une pression minimale de 1 bar chez l\'abonné et recommande de ne pas dépasser 6 bar pour éviter les dommages sur les installations intérieures.',
                    },
                    {
                      titre: 'Théorème de Pascal et vases communicants',
                      texte: 'Le théorème de Pascal (1653) établit que toute variation de pression appliquée en un point d\'un fluide incompressible au repos se transmet instantanément et intégralement en tout point.\n\nC\'est le fondement des systèmes hydrauliques : un vérin de petite section peut exercer une force considérable sur un piston de grande section (F₂ = F₁ × S₂/S₁).\n\nLes vases communicants en découlent directement : deux récipients reliés par un tuyau et contenant le même fluide au repos présentent le même niveau libre, quelle que soit la forme ou la section des récipients. En réseau AEP, un château d\'eau et le réseau qu\'il alimente sont à la même charge piézométrique en régime statique (sans consommation).',
                    },
                    {
                      titre: 'Poussée d\'Archimède',
                      texte: 'Tout corps partiellement ou totalement immergé dans un fluide subit une force verticale vers le haut : Π = ρ_fluide × g × V_immergé. Cette poussée est égale au poids du volume de fluide déplacé.\n\nUn corps flotte si son poids est inférieur à la poussée maximale (totalement immergé) : condition ρ_corps < ρ_fluide.\n\nEn hydraulique urbaine, la poussée d\'Archimède est essentielle pour :\n• Les vannes à flotteur (contrôle automatique du niveau dans les bâches)\n• La stabilité des conduites vides enterrées en zone inondable (risque de soulèvement)\n• Le calcul des massifs d\'ancrage pour ouvrages submersibles',
                    },
                    {
                      titre: 'Pression relative, absolue et hauteur piézométrique',
                      texte: 'La pression absolue intègre la pression atmosphérique : P_abs = P_rel + P_atm (P_atm ≈ 1,013 bar = 101 325 Pa). Les manomètres mesurent la pression relative ; les capteurs absolus donnent la pression totale. En réseau AEP, on travaille toujours en relatif.\n\nLa hauteur piézométrique H = z + P/(ρg) exprime l\'énergie de pression en mètres de colonne d\'eau (m CE). C\'est la hauteur à laquelle l\'eau monterait dans un tube ouvert connecté au point considéré. En régime statique, H est identique en tout point d\'un réseau connecté. En régime dynamique, H décroît dans le sens de l\'écoulement (pertes de charge).',
                    },
                  ],
                  points: [
                    '📐 Loi fondamentale : P = P₀ + ρ·g·h  (h = profondeur comptée positivement vers le bas)',
                    '🔄 Théorème de Pascal : toute variation de pression se transmet intégralement en tout point du fluide',
                    '⬆️ Poussée d\'Archimède : Π = ρ_fluide × g × V_immergé, dirigée verticalement vers le haut',
                    '📏 Hauteur piézométrique : H_piézo = z + P/(ρg) — représente l\'énergie de pression en mètres',
                    '⚖️ Pression relative : mesurée par rapport à l\'atmosphère (P_atm = 101 325 Pa ≈ 10,3 m CE)',
                    '🔗 Vases communicants : même fluide au repos → même niveau libre quelle que soit la forme',
                    '💡 1 bar = 10,197 m CE = 100 kPa — à retenir pour convertir pression/hauteur d\'eau',
                  ],
                  formules: [
                    'P = P₀ + ρgh — pression hydrostatique',
                    'Π = ρ·g·V — poussée d\'Archimède (N)',
                    'H_piézo = z + P/(ρg) — charge piézométrique (m)',
                  ],
                  retenir: '1 bar ≈ 10 m CE. La pression absolue = pression relative + 1,013 bar atmosphérique.',
                  schema: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;padding:8px;box-sizing:border-box"><rect x="61" y="45" width="88" height="144" fill="rgba(14,165,233,0.2)"/><rect x="60" y="20" width="90" height="170" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="60" y1="45" x2="150" y2="45" stroke="#0EA5E9" stroke-width="1.5" stroke-dasharray="5,3"/><text x="105" y="36" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.7">P₀ (atmosphère)</text><text x="155" y="43" font-size="8" fill="currentColor" opacity="0.6">← surface libre</text><line x1="52" y1="45" x2="52" y2="100" stroke="currentColor" stroke-width="1.5"/><line x1="47" y1="45" x2="57" y2="45" stroke="currentColor" stroke-width="1.5"/><line x1="47" y1="100" x2="57" y2="100" stroke="currentColor" stroke-width="1.5"/><text x="38" y="76" text-anchor="middle" font-size="11" fill="currentColor" font-weight="700" transform="rotate(-90,38,76)">h₁</text><line x1="38" y1="45" x2="38" y2="158" stroke="currentColor" stroke-width="1.5"/><line x1="33" y1="45" x2="43" y2="45" stroke="currentColor" stroke-width="1.5"/><line x1="33" y1="158" x2="43" y2="158" stroke="currentColor" stroke-width="1.5"/><text x="24" y="105" text-anchor="middle" font-size="11" fill="currentColor" font-weight="700" transform="rotate(-90,24,105)">h₂</text><polygon points="150,45 150,190 265,190" fill="rgba(14,165,233,0.1)" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="4,3"/><line x1="150" y1="100" x2="192" y2="100" stroke="#0EA5E9" stroke-width="2.5"/><polygon points="192,96 202,100 192,104" fill="#0EA5E9"/><text x="206" y="104" font-size="10" fill="#0EA5E9" font-weight="600">P₁ = ρ·g·h₁</text><line x1="150" y1="158" x2="238" y2="158" stroke="#0EA5E9" stroke-width="2.5"/><polygon points="238,154 248,158 238,162" fill="#0EA5E9"/><text x="252" y="162" font-size="10" fill="#0EA5E9" font-weight="600">P₂ = ρ·g·h₂</text><text x="20" y="188" font-size="9" fill="currentColor" opacity="0.6">Répartition</text><text x="20" y="199" font-size="9" fill="currentColor" opacity="0.6">des pressions</text><text x="195" y="206" text-anchor="middle" font-size="11" fill="currentColor" font-weight="800">P = P₀ + ρ · g · h</text></svg>',
                },
                flashcards: [
                  { q: 'Formule de la pression hydrostatique ?', r: 'P = P₀ + ρ·g·h  (Pa, avec h en mètres)', expl: 'Chaque mètre de profondeur ajoute ρg ≈ 9 810 Pa ≈ 0,098 bar ≈ 1 mCE = 100 cm CE.' },
                  { q: 'Énoncé du théorème de Pascal', r: 'Toute variation de pression appliquée en un point d\'un fluide incompressible au repos se transmet intégralement en tout point', expl: 'Principe des vérins hydrauliques : une petite force sur une petite surface crée une grande force sur une grande surface.' },
                  { q: 'Formule de la poussée d\'Archimède ?', r: 'Π = ρ_fluide × g × V_immergé  (N), dirigée vers le haut', expl: 'Un objet flotte si Π ≥ P_objet, c\'est-à-dire si sa masse volumique moyenne ≤ celle du fluide.' },
                  { q: 'Quelle est la différence entre pression absolue et relative ?', r: 'P_abs = P_rel + P_atm. Un manomètre mesure P_rel ; un capteur absolu mesure P_abs', expl: 'En réseau AEP, on exprime toujours la pression en relatif (0 bar rel. = 1,013 bar abs.).' },
                  { q: 'Convertir 3 bar en mètres de colonne d\'eau', r: '3 bar × 10,197 ≈ 30,6 m CE', expl: 'Règle pratique : 1 bar ≈ 10 m CE. Pour 3 bar : 3 × 10 = 30 m CE (légèrement > en réalité).' },
                  { q: 'Qu\'est-ce que la hauteur piézométrique ?', r: 'H = z + P/(ρg) : somme de l\'altitude z et de la pression en mètres', expl: 'En régime statique, H_piézo est la même partout dans un fluide connecté. En dynamique, elle décroît dans le sens de l\'écoulement.' },
                ],
                exercices: [
                  {
                    id: 'ex-hyd2-1',
                    titre: 'Pression dans un réservoir et conversion bar / m CE',
                    source: 'D\'après BTS Métiers de l\'Eau — Épreuve E4 Session 2021',
                    difficulte: 'facile',
                    enonce: 'Un château d\'eau cylindrique contient de l\'eau (ρ = 1 000 kg/m³, g = 9,81 m/s²). Le fond du réservoir se trouve à l\'altitude z = 32 m. Le niveau d\'eau dans la cuve est à z = 47 m (hauteur d\'eau = 15 m). La pression atmosphérique est P_atm = 1,013 bar.',
                    questions: [
                      { num: '1', texte: 'Calculer la pression relative au fond du réservoir, en Pa puis en bar.', indice: 'La pression relative = pression due à la colonne d\'eau = ρ × g × h, avec h = hauteur d\'eau au-dessus du point.', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Masse volumique : ρ = 1 000 kg/m³\ng = 9,81 m/s²\nHauteur d\'eau au-dessus du fond : h = 47 - 32 = 15 m' },
                        { titre: 'Formule de la pression relative', detail: 'P_rel = ρ × g × h     (unité : Pa)' },
                        { titre: 'Calcul de P_rel en Pa', detail: 'P_rel = 1 000 × 9,81 × 15\nP_rel = 147 150 Pa' },
                        { titre: 'Conversion en bar', detail: '1 bar = 100 000 Pa\nP_rel = 147 150 / 100 000 ≈ 1,47 bar' },
                        { titre: 'Vérification par la règle pratique', detail: '1 m CE ≈ 0,0981 bar ≈ 0,1 bar\n15 m CE × 0,0981 = 1,47 bar ✓' },
                      ] },
                      { num: '2', texte: 'Calculer la pression absolue au fond du réservoir.', indice: 'P_abs = P_rel + P_atm', reponse: [
                        { titre: 'Données nécessaires', detail: 'Pression relative calculée : P_rel = 1,47 bar\nPression atmosphérique : P_atm = 1,013 bar' },
                        { titre: 'Formule de la pression absolue', detail: 'P_abs = P_rel + P_atm     (unité : bar)' },
                        { titre: 'Calcul de P_abs (pression absolue)', detail: 'P_abs = 1,47 + 1,013\nP_abs = 2,48 bar' },
                        { titre: 'Vérification en Pa', detail: '147 150 + 101 325 = 248 475 Pa ≈ 2,48 × 10⁵ Pa ✓' },
                      ] },
                      { num: '3', texte: 'Un abonné est raccordé au réseau à l\'altitude z = 28 m. La pression disponible chez lui est de 2,5 bar relatif. Vérifier si la pression minimale réglementaire (1 bar rel.) est respectée.', indice: 'Comparer directement la pression disponible avec la pression minimale requise.', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Pression disponible chez l\'abonné : P_dispo = 2,5 bar rel.\nPression minimale réglementaire : P_min = 1 bar rel.' },
                        { titre: 'Vérification de la conformité', detail: 'Condition à respecter : P_dispo ≥ P_min\n2,5 bar ≥ 1 bar  →  ✓ CONFORME\nLa pression minimale réglementaire est respectée.' },
                        { titre: 'Conversion en m CE (pour information)', detail: '1 bar = 10,197 m CE\nP_dispo = 2,5 × 10,197 = 25,5 m CE' },
                        { titre: 'Rappel réglementaire', detail: 'Pression minimale : 1 bar (réseau AEP)\nPression maximale recommandée : 6 bar (au-delà → fuites, casse de canalisation)\nPression optimale en distribution : 2 à 4 bar' },
                      ] },
                    ],
                  },
                  {
                    id: 'ex-hyd2-2',
                    titre: 'Poussée d\'Archimède sur un flotteur de vanne',
                    source: 'Exercice type BTS GEMEAU — Ouvrages hydrauliques',
                    difficulte: 'moyen',
                    enonce: 'Une vanne à flotteur sphérique est utilisée dans un réservoir d\'eau potable. Le flotteur est une sphère creuse en plastique de diamètre D = 200 mm et de masse m = 120 g. L\'eau a ρ = 998 kg/m³, g = 9,81 m/s².',
                    questions: [
                      { num: '1', texte: 'Calculer le volume du flotteur sphérique.', indice: 'Volume d\'une sphère : V = (4/3) × π × R³, avec R = D/2.', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Diamètre du flotteur : D = 200 mm = 0,200 m\nRayon : R = D / 2 = 0,200 / 2 = 0,100 m' },
                        { titre: 'Formule du volume d\'une sphère', detail: 'V = (4/3) × π × R³     (unité : m³)' },
                        { titre: 'Calcul du volume V', detail: 'V = (4/3) × π × (0,100)³\nV = (4/3) × 3,14159 × 0,001\nV = 4,189 × 10⁻³ m³' },
                        { titre: 'Conversion en litres', detail: '1 m³ = 1 000 L\nV = 4,189 × 10⁻³ × 1 000 ≈ 4,19 L' },
                      ] },
                      { num: '2', texte: 'Calculer la poussée d\'Archimède quand le flotteur est entièrement immergé.', indice: 'Π = ρ_eau × g × V_immergé', reponse: [
                        { titre: 'Données nécessaires', detail: 'Masse volumique de l\'eau : ρ_eau = 998 kg/m³\ng = 9,81 m/s²\nVolume immergé (flotteur entier) : V = 4,189 × 10⁻³ m³' },
                        { titre: 'Formule de la poussée d\'Archimède', detail: 'Π = ρ_fluide × g × V_immergé     (unité : N)' },
                        { titre: 'Calcul de Π (poussée d\'Archimède)', detail: 'Π = 998 × 9,81 × 4,189 × 10⁻³\nΠ = 998 × 9,81 × 0,004189\nΠ ≈ 41,0 N' },
                      ] },
                      { num: '3', texte: 'Le flotteur flotte-t-il ? Quelle fraction de son volume est immergée à l\'équilibre ?', indice: 'À l\'équilibre : Π = Poids. Calculer le poids du flotteur (m × g), puis V_immergé = m / ρ_eau.', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Masse du flotteur : m = 120 g = 0,120 kg\ng = 9,81 m/s²\nρ_eau = 998 kg/m³\nVolume total du flotteur : V_total = 4,189 × 10⁻³ m³' },
                        { titre: 'Calcul du poids du flotteur', detail: 'P_flotteur = m × g\nP_flotteur = 0,120 × 9,81\nP_flotteur = 1,177 N' },
                        { titre: 'Vérification : le flotteur flotte-t-il ?', detail: 'Condition pour flotter : Π_max ≥ Poids\nΠ_max (totalement immergé) = 41,0 N\nPoids = 1,177 N\n41,0 N >> 1,177 N  →  ✓ Le flotteur flotte largement' },
                        { titre: 'Calcul du volume réellement immergé à l\'équilibre', detail: 'À l\'équilibre : Π = Poids → ρ_eau × g × V_immergé = m × g\nV_immergé = m / ρ_eau\nV_immergé = 0,120 / 998 = 1,202 × 10⁻⁴ m³' },
                        { titre: 'Calcul de la fraction immergée', detail: 'Fraction = V_immergé / V_total\nFraction = 1,202 × 10⁻⁴ / 4,189 × 10⁻³\nFraction ≈ 0,029 = 2,9 %\n→ Seulement 3 % du flotteur est sous l\'eau. Il flotte très haut, ce qui lui permet de fermer efficacement la vanne dès que le niveau monte.' },
                      ] },
                    ],
                  },
                ],
              },
              {
                id: 'hyd-3',
                titre: 'Hydrodynamique — équation de Bernoulli',
                fiche: {
                  intro: 'En régime permanent, l\'équation de Bernoulli exprime la conservation de l\'énergie entre deux sections d\'un écoulement. Elle est la base de tous les calculs hydrauliques.',
                  sections: [
                    {
                      titre: 'Équation de continuité — conservation du débit',
                      texte: 'Pour un fluide incompressible en régime permanent, le débit volumique Q reste constant le long d\'une conduite sans branchement : Q = A₁·V₁ = A₂·V₂.\n\nLa section circulaire A = π·D²/4 (m²). Conséquence directe : si le diamètre est divisé par 2, la section est divisée par 4 et la vitesse est multipliée par 4. Cette relation explique l\'effet Venturi et gouverne le dimensionnement des conduites.\n\nConversion pratique : 1 L/s = 3,6 m³/h (multiplier par 3,6 pour passer de L/s à m³/h).',
                    },
                    {
                      titre: 'Équation de Bernoulli — conservation de l\'énergie',
                      texte: 'L\'équation de Bernoulli (Daniel Bernoulli, 1738) traduit la conservation de l\'énergie dans un écoulement idéal en régime permanent :\n\nz₁ + P₁/(ρg) + V₁²/(2g) = z₂ + P₂/(ρg) + V₂²/(2g) + hf\n\nChaque terme est une hauteur en mètres :\n• z : hauteur géodésique (altitude)\n• P/(ρg) : charge piézométrique (pression convertie en m CE)\n• V²/(2g) : charge cinétique (énergie de vitesse)\n• hf : pertes de charge entre les deux sections\n\nEn réseau sous pression, la charge cinétique V²/(2g) est souvent faible (< 0,1 m pour V = 1,4 m/s) et parfois négligée. Les pertes de charge hf doivent être compensées par une différence d\'altitude ou une pompe.',
                    },
                    {
                      titre: 'Nombre de Reynolds et régimes d\'écoulement',
                      texte: 'Le nombre de Reynolds Re = V·D/ν (sans dimension) compare les forces d\'inertie aux forces visqueuses :\n\n• Re < 2 000 → régime laminaire : couches de fluide parallèles, échanges purement diffusifs. Pertes proportionnelles à V.\n• 2 000 < Re < 4 000 → régime transitoire : instable, alternance laminaire/turbulent.\n• Re > 4 000 → régime turbulent : tourbillons, mélange actif. Pertes ≈ proportionnelles à V².\n\nEn réseau AEP typique (V = 1 m/s, D = 100 mm, ν = 10⁻⁶ m²/s) : Re = 100 000 → toujours turbulent. En assainissement (grandes conduites, grandes vitesses), Re peut dépasser 10⁶.',
                    },
                    {
                      titre: 'Effet Venturi et cavitation',
                      texte: 'Dans un rétrécissement, la continuité impose V₂ > V₁, et Bernoulli impose P₂ < P₁ : l\'énergie cinétique augmente au détriment de la pression. C\'est l\'effet Venturi, exploité dans les débitmètres à dépression et les injecteurs de produits chimiques.\n\nLa cavitation survient quand la pression locale chute jusqu\'à la pression de vapeur saturante de l\'eau (P_vap ≈ 0,023 bar à 20 °C) : des bulles de vapeur se forment puis s\'effondrent violemment (implosion), causant vibrations, bruit et érosion des parois. La cavitation est un danger dans les pompes centrifuges, les vannes à forte chute de pression et partout où les vitesses sont élevées.',
                    },
                  ],
                  points: [
                    '🔄 Équation de continuité : Q = A₁·V₁ = A₂·V₂ (conservation du débit)',
                    '⚡ Bernoulli sans pertes : z + P/(ρg) + V²/(2g) = constante (charge totale H en mètres)',
                    '3️⃣ Les 3 termes : géodésique z + piézométrique P/(ρg) + cinétique V²/(2g)',
                    '🔢 Nombre de Reynolds : Re = V·D/ν',
                    '   Re < 2 000 → laminaire | 2 000–4 000 → transitoire | > 4 000 → turbulent',
                    '🌀 En réseau sous pression : Re >> 4 000 → toujours turbulent',
                    '🎯 Effet Venturi : rétrécissement → V augmente → P diminue (conservation énergie)',
                    '📊 Débit : Q = V × A (m³/s), V = vitesse moyenne dans la section A',
                  ],
                  formules: [
                    'Q = A·V — débit (m³/s)',
                    'z₁ + P₁/(ρg) + V₁²/(2g) = z₂ + P₂/(ρg) + V₂²/(2g) + h_f — Bernoulli généralisé',
                    'Re = V·D/ν — nombre de Reynolds (sans dimension)',
                  ],
                  retenir: 'Bernoulli = conservation de la charge totale H = z + P/(ρg) + V²/(2g). Les pertes de charge h_f réduisent H.',
                  schema: '<svg viewBox="0 0 320 195" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;padding:8px;box-sizing:border-box"><rect x="25" y="55" width="130" height="80" fill="rgba(14,165,233,0.18)" stroke="currentColor" stroke-width="2"/><polygon points="155,55 185,75 185,115 155,135" fill="rgba(14,165,233,0.18)" stroke="currentColor" stroke-width="2"/><rect x="185" y="75" width="110" height="40" fill="rgba(255,120,0,0.15)" stroke="currentColor" stroke-width="2"/><line x1="18" y1="55" x2="18" y2="135" stroke="currentColor" stroke-width="1.5"/><polygon points="15,62 18,54 21,62" fill="currentColor"/><polygon points="15,128 18,136 21,128" fill="currentColor"/><text x="10" y="99" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" transform="rotate(-90,10,99)">D₁</text><line x1="302" y1="75" x2="302" y2="115" stroke="currentColor" stroke-width="1.5"/><polygon points="299,82 302,74 305,82" fill="currentColor"/><polygon points="299,108 302,116 305,108" fill="currentColor"/><text x="311" y="99" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" transform="rotate(90,311,99)">D₂</text><line x1="45" y1="95" x2="88" y2="95" stroke="#0EA5E9" stroke-width="3"/><polygon points="88,91 98,95 88,99" fill="#0EA5E9"/><text x="60" y="85" text-anchor="middle" font-size="9" fill="#0EA5E9" font-weight="700">V₁ lente</text><text x="60" y="148" text-anchor="middle" font-size="9" fill="#0EA5E9">P₁ haute</text><rect x="45" y="150" width="30" height="30" fill="rgba(14,165,233,0.5)" rx="3"/><text x="60" y="170" text-anchor="middle" font-size="8" fill="white" font-weight="700">P₁</text><line x1="205" y1="95" x2="258" y2="95" stroke="#E06010" stroke-width="3"/><polygon points="258,91 268,95 258,99" fill="#E06010"/><text x="235" y="85" text-anchor="middle" font-size="9" fill="#E06010" font-weight="700">V₂ rapide</text><text x="235" y="148" text-anchor="middle" font-size="9" fill="#E06010">P₂ basse</text><rect x="220" y="155" width="30" height="18" fill="rgba(255,120,0,0.5)" rx="3"/><text x="235" y="168" text-anchor="middle" font-size="8" fill="white" font-weight="700">P₂</text><text x="160" y="190" text-anchor="middle" font-size="10" fill="currentColor" font-weight="700">Q = A₁·V₁ = A₂·V₂ — D₁ &gt; D₂ → V₂ &gt; V₁ → P₂ &lt; P₁</text></svg>',
                },
                flashcards: [
                  { q: 'Formule de l\'équation de continuité ?', r: 'Q = A₁·V₁ = A₂·V₂  (débit volumique constant en écoulement incompressible)', expl: 'Un rétrécissement de section double la vitesse. Cela est utilisé pour mesurer les débits (venturi, diaphragme).' },
                  { q: 'Quels sont les 3 termes de l\'équation de Bernoulli ?', r: '1) z : hauteur géodésique (m) 2) P/ρg : hauteur de pression (m) 3) V²/2g : hauteur cinétique (m)', expl: 'Leur somme = charge totale H (m). En l\'absence de pertes, H est constant le long d\'un filet.' },
                  { q: 'Valeurs du nombre de Reynolds délimitant les régimes ?', r: 'Re < 2 000 : laminaire | 2 000 – 4 000 : transitoire | Re > 4 000 : turbulent', expl: 'En réseau AEP (V ≈ 1 m/s, D = 100 mm, ν = 10⁻⁶) : Re = 10⁵ → toujours turbulent.' },
                  { q: 'Formule du nombre de Reynolds ?', r: 'Re = V·D/ν  (V en m/s, D en m, ν en m²/s)', expl: 'Re compare les forces d\'inertie aux forces visqueuses. Grand Re = turbulence dominante.' },
                  { q: 'Qu\'est-ce que l\'effet Venturi ?', r: 'Dans un rétrécissement, V augmente et P diminue (énergie conservée)', expl: 'Utilisé dans les débitmètres Venturi et les injecteurs. La dépression permet d\'aspirer un autre fluide.' },
                  { q: 'Convertir 12 L/s en m³/h', r: '12 L/s × 3,6 = 43,2 m³/h', expl: '1 L/s = 3,6 m³/h. Règle pratique : multiplier par 3,6 pour passer de L/s à m³/h.' },
                ],
                exercices: [
                  {
                    id: 'ex-hyd3-1',
                    titre: 'Débit et vitesse dans un changement de diamètre',
                    source: 'D\'après BTS Métiers de l\'Eau — Épreuve E4 Session 2020',
                    difficulte: 'facile',
                    enonce: 'Une conduite principale DN 150 mm (D₁ = 150 mm) se raccorde à une conduite secondaire DN 100 mm (D₂ = 100 mm). Le débit circulant est Q = 15 L/s. On néglige les pertes de charge dans cette question.',
                    questions: [
                      { num: '1', texte: 'Calculer les sections S₁ et S₂ des deux conduites en m².', indice: 'Section d\'un cercle : S = π × D² / 4', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'DN 150 : D₁ = 150 mm = 0,150 m\nDN 100 : D₂ = 100 mm = 0,100 m' },
                        { titre: 'Formule de la section d\'un cercle', detail: 'S = π × D² / 4     (unité : m²)' },
                        { titre: 'Calcul de S₁ (section DN 150)', detail: 'S₁ = π × (0,150)² / 4\nS₁ = π × 0,0225 / 4\nS₁ = 0,01767 m²' },
                        { titre: 'Calcul de S₂ (section DN 100)', detail: 'S₂ = π × (0,100)² / 4\nS₂ = π × 0,0100 / 4\nS₂ = 0,007854 m²' },
                      ] },
                      { num: '2', texte: 'Calculer les vitesses V₁ et V₂ dans chaque conduite. Les vitesses sont-elles dans les plages recommandées pour un réseau AEP (0,5 à 2 m/s) ?', indice: 'Équation de continuité : Q = S × V, donc V = Q / S. Convertir Q en m³/s : 15 L/s = 0,015 m³/s.', reponse: [
                        { titre: 'Données nécessaires', detail: 'Débit : Q = 15 L/s = 0,015 m³/s\nS₁ = 0,01767 m² (DN 150)\nS₂ = 0,007854 m² (DN 100)' },
                        { titre: 'Formule de la vitesse', detail: 'V = Q / S     (unité : m/s)\nIssue de l\'équation de continuité : Q = S × V' },
                        { titre: 'Calcul de V₁ (vitesse dans DN 150)', detail: 'V₁ = Q / S₁ = 0,015 / 0,01767\nV₁ = 0,849 m/s\n✓ Dans la plage recommandée AEP (0,5 à 2 m/s)' },
                        { titre: 'Calcul de V₂ (vitesse dans DN 100)', detail: 'V₂ = Q / S₂ = 0,015 / 0,007854\nV₂ = 1,910 m/s\n✓ Acceptable (proche de la limite de 2 m/s)\nRemarque : réduire encore la section ferait dépasser 2 m/s → risque de coups de bélier.' },
                      ] },
                      { num: '3', texte: 'En utilisant l\'équation de Bernoulli (sans pertes), si la pression en section 1 est P₁ = 3,2 bar rel. et les deux sections sont à la même altitude, calculer la pression P₂ en section 2.', indice: 'Bernoulli horizontal sans perte : P₁/(ρg) + V₁²/(2g) = P₂/(ρg) + V₂²/(2g)\nDonc P₂ = P₁ + ρ/2 × (V₁² - V₂²)', reponse: [
                        { titre: 'Données nécessaires', detail: 'P₁ = 3,2 bar = 320 000 Pa\nV₁ = 0,849 m/s (DN 150)\nV₂ = 1,910 m/s (DN 100)\nρ = 998 kg/m³\nMêmes altitudes : z₁ = z₂' },
                        { titre: 'Formule — Bernoulli horizontal sans pertes', detail: 'P₁/(ρg) + V₁²/(2g) = P₂/(ρg) + V₂²/(2g)\nSoit : P₂ = P₁ + ρ/2 × (V₁² − V₂²)' },
                        { titre: 'Calcul de la variation de pression ΔP', detail: 'ΔP = ρ/2 × (V₁² − V₂²)\nΔP = 998/2 × (0,849² − 1,910²)\nΔP = 499 × (0,721 − 3,648)\nΔP = 499 × (−2,927)\nΔP = −1 461 Pa  →  la pression baisse dans la conduite étroite' },
                        { titre: 'Calcul de P₂ (pression en DN 100)', detail: 'P₂ = P₁ + ΔP = 320 000 − 1 461\nP₂ = 318 539 Pa ≈ 3,19 bar\nChute de pression : 3,20 − 3,19 = 0,01 bar — négligeable (effet Venturi faible ici)' },
                      ] },
                    ],
                  },
                  {
                    id: 'ex-hyd3-2',
                    titre: 'Nombre de Reynolds et régime d\'écoulement',
                    source: 'Exercice type BTS GEMEAU — Hydraulique des réseaux',
                    difficulte: 'moyen',
                    enonce: 'Un collecteur d\'assainissement DN 300 mm transporte un débit de Q = 45 L/s à pleine section. L\'eau est à 15 °C : ρ = 999 kg/m³, ν = 1,14 × 10⁻⁶ m²/s.',
                    questions: [
                      { num: '1', texte: 'Calculer la vitesse d\'écoulement V dans la conduite pleine.', indice: 'Q = S × V, avec S = π × D² / 4. Convertir Q en m³/s.', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Diamètre : D = 300 mm = 0,300 m\nDébit : Q = 45 L/s = 0,045 m³/s' },
                        { titre: 'Calcul de la section S (section pleine)', detail: 'S = π × D² / 4\nS = π × (0,300)² / 4\nS = π × 0,090 / 4\nS = 0,07069 m²' },
                        { titre: 'Calcul de la vitesse V (conduite pleine)', detail: 'V = Q / S\nV = 0,045 / 0,07069\nV = 0,637 m/s' },
                      ] },
                      { num: '2', texte: 'Calculer le nombre de Reynolds. Quel est le régime d\'écoulement ?', indice: 'Re = V × D / ν', reponse: [
                        { titre: 'Données nécessaires', detail: 'Vitesse : V = 0,637 m/s\nDiamètre : D = 0,300 m\nViscosité cinématique à 15 °C : ν = 1,14 × 10⁻⁶ m²/s' },
                        { titre: 'Formule du nombre de Reynolds', detail: 'Re = V × D / ν     (sans unité)' },
                        { titre: 'Calcul de Re', detail: 'Re = 0,637 × 0,300 / (1,14 × 10⁻⁶)\nRe = 0,1911 / (1,14 × 10⁻⁶)\nRe = 167 632' },
                        { titre: 'Détermination du régime d\'écoulement', detail: 'Re = 167 632  >>  4 000  →  régime turbulent\nEn assainissement, les Re sont typiquement de 10⁴ à 10⁶ : l\'écoulement est pratiquement toujours turbulent.' },
                      ] },
                      { num: '3', texte: 'La vitesse minimale d\'auto-curage est 0,6 m/s. Ce collecteur satisfait-il cette exigence ?', indice: 'Comparer la vitesse calculée avec 0,6 m/s.', reponse: [
                        { titre: 'Données nécessaires', detail: 'Vitesse à pleine section : V = 0,637 m/s\nVitesse minimale d\'auto-curage : V_min = 0,6 m/s (exigence réglementaire assainissement)' },
                        { titre: 'Vérification de l\'auto-curage', detail: 'Condition : V ≥ V_min\n0,637 m/s ≥ 0,6 m/s  →  ✓ Auto-curage respecté (de peu : +6 %)' },
                        { titre: 'Point de vigilance — fonctionnement partiel', detail: 'Cette vérification est faite à pleine section (débit de pointe).\nEn fonctionnement normal (conduite non pleine), la vitesse peut être inférieure à 0,6 m/s.\n→ Il faut obligatoirement vérifier la vitesse au débit de temps sec (débit minimum) pour s\'assurer qu\'il n\'y aura pas de dépôts.' },
                      ] },
                    ],
                  },
                ],
              },
              {
                id: 'hyd-4',
                titre: 'Pertes de charge',
                fiche: {
                  intro: 'Les pertes de charge sont les dissipations d\'énergie dues aux frottements dans les conduites. Elles déterminent les pressions disponibles et le dimensionnement des pompes.',
                  sections: [
                    {
                      titre: 'Pertes de charge régulières (linéaires)',
                      texte: 'Les pertes régulières sont dues aux frottements du fluide sur la paroi sur toute la longueur de la conduite. La formule générale est celle de Darcy-Weisbach :\n\nΔhf = λ·(L/D)·V²/(2g)\n\nλ est le coefficient de frottement (sans dimension), L la longueur (m), D le diamètre (m), V la vitesse (m/s). En régime laminaire, λ = 64/Re. En régime turbulent, λ dépend de la rugosité relative ε/D (diagramme de Moody).\n\nPour les conduites à surface libre (assainissement gravitaire), on utilise plutôt la formule de Manning-Strickler : V = K·Rh^(2/3)·I^(1/2), qui intègre directement la pente I et le rayon hydraulique Rh = A/P_mouillé (= D/4 pour une conduite pleine circulaire).',
                    },
                    {
                      titre: 'Coefficient de Strickler K et rugosité',
                      texte: 'Le coefficient K de Strickler (m^(1/3)/s) caractérise la rugosité de la paroi : plus K est élevé, plus la paroi est lisse et moins les pertes sont importantes.\n\nValeurs courantes :\n• PVC, PEHD neuf : K = 90–100\n• Fonte ductile neuve : K = 100–130\n• Béton lisse : K = 70–80\n• Béton ordinaire : K = 60–70\n• Conduite ancienne entartrée : K = 40–60\n• Maçonnerie, pierres : K = 40–50\n\nEn vieillissant, K diminue : une conduite en fonte peut passer de K = 120 à K = 50 après 50 ans avec dépôts et tuberculation. Cela entraîne une augmentation des pertes et une réduction du débit disponible.',
                    },
                    {
                      titre: 'Pertes de charge singulières',
                      texte: 'Les pertes singulières (ou localisées) sont dues aux perturbations de l\'écoulement aux singularités : coudes, vannes, réductions, jonctions... La formule générale est :\n\nΔhs = ξ·V²/(2g)\n\noù ξ est le coefficient de perte propre à chaque accessoire. Valeurs typiques :\n• Coude 90° faible rayon : ξ ≈ 1,0–1,5\n• Coude 90° grand rayon : ξ ≈ 0,3–0,5\n• Vanne en pleine ouverture : ξ ≈ 0,1–0,2\n• Clapet anti-retour : ξ ≈ 2,5–3,0\n• Té avec déviation : ξ ≈ 1,0–1,5\n\nLes pertes singulières peuvent aussi s\'exprimer en longueur équivalente Leq = ξ·D/λ, ce qui permet de les ajouter à la longueur réelle dans la formule de Darcy.',
                    },
                    {
                      titre: 'Gradient hydraulique et bilan énergétique',
                      texte: 'Le gradient hydraulique J = Δh/L (m/m, souvent exprimé en ‰) est la pente de la ligne piézométrique. En distribution AEP, J est typiquement de 2 à 5 ‰ pour des vitesses de 0,5 à 1,5 m/s.\n\nDans le bilan complet (Bernoulli généralisé), les pertes totales sont :\nhf_total = Σ(λ·L/D·V²/2g) + Σ(ξ·V²/2g)\n\nCes pertes doivent être compensées soit par la hauteur géodésique (château d\'eau en hauteur), soit par une pompe (hauteur manométrique totale HMT). La vitesse joue un rôle majeur : doubler la vitesse quadruple les pertes de charge (terme V²). Il est crucial d\'optimiser les diamètres pour maintenir des vitesses dans la plage 0,5–2 m/s en AEP.',
                    },
                  ],
                  points: [
                    '📉 Pertes régulières (linéaires) : dues aux frottements sur toute la longueur',
                    '   Darcy-Weisbach : Δhf = λ·(L/D)·V²/(2g)  (λ = facteur de Darcy)',
                    '   Manning-Strickler : V = K·Rh^(2/3)·I^(1/2)  (canaux et conduites à surface libre)',
                    '📐 Coefficient K de Strickler : PVC neuf 90–100 · Fonte 100–130 · Béton 60–80',
                    '🌀 Rayon hydraulique : Rh = A / P_mouillé (conduite pleine : Rh = D/4)',
                    '🔩 Pertes singulières : Δhs = ξ·V²/(2g)  (ξ selon l\'accessoire)',
                    '   Coude 90° : ξ ≈ 1,0–1,5 | Vanne pleine ouverture : ξ ≈ 0,1 | Clapet : ξ ≈ 2,5',
                    '📊 Gradient hydraulique J = Δh / L (m/m ou ‰)',
                    '⚡ Vitesses recommandées AEP : 0,5–2 m/s (éviter dépôts < 0,5, coups de bélier > 2)',
                  ],
                  formules: [
                    'Δhf = λ·(L/D)·V²/(2g) — Darcy-Weisbach (m)',
                    'V = K·Rh^(2/3)·I^(1/2) — Manning-Strickler (m/s)',
                    'Δhs = ξ·V²/(2g) — pertes singulières (m)',
                    'J = Δh/L — gradient hydraulique (m/m)',
                  ],
                  retenir: 'Les pertes de charge totales = Σ pertes régulières + Σ pertes singulières. Elles s\'additionnent dans le Bernoulli généralisé.',
                  schema: '<svg viewBox="0 0 320 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;padding:8px;box-sizing:border-box"><rect x="30" y="85" width="240" height="42" fill="rgba(14,165,233,0.15)" stroke="currentColor" stroke-width="2"/><text x="30" y="80" text-anchor="middle" font-size="11" fill="currentColor" font-weight="700">A</text><text x="270" y="80" text-anchor="middle" font-size="11" fill="currentColor" font-weight="700">B</text><line x1="80" y1="106" x2="150" y2="106" stroke="#0EA5E9" stroke-width="2.5"/><polygon points="150,102 161,106 150,110" fill="#0EA5E9"/><text x="195" y="109" font-size="10" fill="currentColor" opacity="0.7">Q →</text><line x1="30" y1="28" x2="270" y2="66" stroke="var(--c-primary,#0A7460)" stroke-width="2.5"/><circle cx="30" cy="28" r="4" fill="var(--c-primary,#0A7460)"/><circle cx="270" cy="66" r="4" fill="var(--c-primary,#0A7460)"/><text x="130" y="19" text-anchor="middle" font-size="9" fill="var(--c-primary,#0A7460)" font-weight="700">Ligne piézométrique (HGL)</text><line x1="30" y1="28" x2="30" y2="85" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" opacity="0.45"/><line x1="270" y1="66" x2="270" y2="85" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" opacity="0.45"/><text x="16" y="60" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.8" transform="rotate(-90,16,60)">P₁/(ρg)</text><text x="284" y="78" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.8" transform="rotate(-90,284,78)">P₂/(ρg)</text><line x1="290" y1="28" x2="290" y2="66" stroke="#E06010" stroke-width="2"/><polygon points="287,35 290,27 293,35" fill="#E06010"/><polygon points="287,59 290,67 293,59" fill="#E06010"/><text x="300" y="51" font-size="11" fill="#E06010" font-weight="700">Δh</text><line x1="30" y1="143" x2="270" y2="143" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="138" x2="30" y2="148" stroke="currentColor" stroke-width="1.5"/><line x1="270" y1="138" x2="270" y2="148" stroke="currentColor" stroke-width="1.5"/><text x="150" y="158" text-anchor="middle" font-size="10" fill="currentColor">L (longueur de la conduite)</text><text x="160" y="177" text-anchor="middle" font-size="11" fill="currentColor" font-weight="800">J = Δh / L    →    Δhf = J × L (m)</text></svg>',
                },
                flashcards: [
                  { q: 'Formule de Manning-Strickler ?', r: 'V = K · Rh^(2/3) · I^(1/2)  (V en m/s, Rh en m, I en m/m)', expl: 'K est le coefficient de rugosité : plus il est élevé, moins la paroi est rugueuse (PVC > béton > maçonnerie).' },
                  { q: 'Valeur de K Strickler pour du PVC neuf ?', r: 'K = 90 à 100 m^(1/3)/s', expl: 'Fonte ductile neuve : 100–130. Béton courant : 70–80. Conduite vieille + entartrée : 40–60.' },
                  { q: 'Formule des pertes de charge singulières ?', r: 'Δhs = ξ · V²/(2g)  (ξ = coefficient sans dimension selon l\'accessoire)', expl: 'Les pertes singulières sont importantes aux vitesses élevées (V² !). Pour les réseaux longs, elles représentent 10–20 % des pertes totales.' },
                  { q: 'Qu\'est-ce que le rayon hydraulique Rh ?', r: 'Rh = A / P_mouillé. Pour une conduite circulaire pleine : Rh = D/4', expl: 'Pour une conduite de D = 200 mm pleine : Rh = 0,2/4 = 0,05 m. Rh est maximal quand la conduite travaille pleine.' },
                  { q: 'Quelle est la plage de vitesse recommandée en réseau AEP ?', r: '0,5 à 2 m/s (idéalement 0,8–1,5 m/s)', expl: '< 0,5 m/s : risque de dépôts et stagnation. > 2 m/s : risque de coups de bélier, bruit, usure.' },
                  { q: 'Qu\'est-ce que le gradient hydraulique J ?', r: 'J = Δh / L (m/m ou ‰). Représente la pente de la ligne piézométrique', expl: 'Un gradient de 1 ‰ = 1 mm de perte de charge par mètre de conduite. En AEP, J est souvent 2–5 ‰.' },
                ],
                exercices: [
                  {
                    id: 'ex-hyd4-1',
                    titre: 'Dimensionnement par Manning-Strickler',
                    source: 'D\'après BTS Métiers de l\'Eau — Épreuve E4 Session 2019',
                    difficulte: 'moyen',
                    enonce: 'Un collecteur d\'eaux pluviales en béton (K = 70 m¹/³/s) doit évacuer un débit de pointe Q = 120 L/s. La pente disponible est I = 3 ‰ (0,003 m/m). On cherche le diamètre minimal permettant d\'écouler ce débit à pleine section.',
                    questions: [
                      { num: '1', texte: 'Rappeler la formule de Manning-Strickler et exprimer le débit Q en fonction du diamètre D pour une conduite circulaire pleine.', indice: 'V = K × Rh^(2/3) × I^(1/2), Q = V × S. Pour une conduite pleine : Rh = D/4, S = π×D²/4.', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Matériau béton : K = 70 m¹/³/s\nQ = 0,120 m³/s\nPente : I = 0,003 m/m\nConduite pleine : Rh = D/4, S = π × D² / 4' },
                        { titre: 'Formule de Manning-Strickler', detail: 'V = K × Rh^(2/3) × I^(1/2)' },
                        { titre: 'Expression de Q en fonction de D', detail: 'Q = V × S = K × (D/4)^(2/3) × I^(1/2) × π × D² / 4\nRegroupement des termes en D :\nQ = K × (π/4) × (1/4^(2/3)) × I^(1/2) × D^(8/3)' },
                        { titre: 'Calcul du coefficient numérique', detail: '4^(2/3) = 1,587\nI^(1/2) = (0,003)^(0,5) = 0,05477\nCoefficient = 70 × (π/4) / 1,587 × 0,05477\n= 70 × 0,7854 × 0,03451 = 1,897\n→ Q = 1,897 × D^(8/3)' },
                      ] },
                      { num: '2', texte: 'En déduire le diamètre minimal D pour Q = 0,120 m³/s. Quel DN normalisé choisir ? (DN normalisés courants : 300, 400, 500, 600 mm)', indice: 'D^(8/3) = Q / 1,897, puis D = (Q/1,897)^(3/8). Choisir le DN normalisé immédiatement supérieur.', reponse: [
                        { titre: 'Données nécessaires', detail: 'Q = 0,120 m³/s\nRelation obtenue : Q = 1,897 × D^(8/3)\nDN normalisés disponibles : 300, 400, 500, 600 mm' },
                        { titre: 'Isoler D^(8/3)', detail: 'D^(8/3) = Q / 1,897\nD^(8/3) = 0,120 / 1,897\nD^(8/3) = 0,06326' },
                        { titre: 'Calcul de D par la puissance inverse', detail: 'D = (0,06326)^(3/8) = (0,06326)^0,375\nMéthode logarithmique :\nlog(0,06326) = −1,199\n−1,199 × 0,375 = −0,4496\nD = 10^(−0,4496) = 0,355 m = 355 mm' },
                        { titre: 'Choix du DN normalisé', detail: 'D calculé = 355 mm → choisir le DN immédiatement supérieur : DN 400 mm' },
                        { titre: 'Vérification — capacité du DN 400', detail: 'Q_pleine (DN 400) = 1,897 × (0,400)^(8/3)\n= 1,897 × 0,1748 = 0,332 m³/s\n0,332 m³/s >> 0,120 m³/s  →  ✓ Capacité largement suffisante' },
                      ] },
                      { num: '3', texte: 'Calculer la vitesse à pleine section dans le DN 400 retenu. L\'auto-curage est-il assuré ?', indice: 'V = Q / S, S = π × D² / 4. Vitesse minimale d\'auto-curage = 0,6 m/s.', reponse: [
                        { titre: 'Données nécessaires', detail: 'DN retenu : D = 400 mm = 0,400 m\nDébit : Q = 0,120 m³/s\nVitesse minimale d\'auto-curage : V_min = 0,6 m/s' },
                        { titre: 'Calcul de la section pleine S', detail: 'S = π × D² / 4\nS = π × (0,400)² / 4\nS = 0,1257 m²' },
                        { titre: 'Calcul de la vitesse V à pleine section', detail: 'V = Q / S\nV = 0,120 / 0,1257\nV = 0,954 m/s' },
                        { titre: 'Vérification de l\'auto-curage', detail: 'V = 0,954 m/s  >  V_min = 0,6 m/s  →  ✓ Auto-curage assuré\nLa conduite DN 400 est surdimensionnée (+59 % de capacité) mais garantit un bon auto-curage des dépôts.' },
                      ] },
                    ],
                  },
                  {
                    id: 'ex-hyd4-2',
                    titre: 'Pertes de charge totales sur un réseau AEP',
                    source: 'D\'après BTS Métiers de l\'Eau — Hydraulique des réseaux AEP',
                    difficulte: 'difficile',
                    enonce: 'Une conduite AEP en PVC (K = 90 m¹/³/s) de DN 100 mm et longueur L = 250 m alimente un lotissement. Le débit est Q = 6 L/s. La conduite comprend : 3 coudes 90° (ξ = 1,2 chacun), 1 vanne de sectionnement pleine ouverture (ξ = 0,1), 1 clapet anti-retour (ξ = 2,5). On prendra g = 9,81 m/s².',
                    questions: [
                      { num: '1', texte: 'Calculer la vitesse V dans la conduite.', indice: 'V = Q / S, S = π × D² / 4. Convertir Q en m³/s.', reponse: [
                        { titre: 'Données de l\'énoncé', detail: 'Conduite PVC : K = 90 m¹/³/s, DN 100 mm = 0,100 m, L = 250 m\nDébit : Q = 6 L/s\nAccessoires : 3 coudes 90° (ξ = 1,2), 1 vanne pleine ouv. (ξ = 0,1), 1 clapet (ξ = 2,5)' },
                        { titre: 'Conversion du débit en m³/s', detail: 'Q = 6 L/s = 6 × 10⁻³ m³/s = 0,006 m³/s' },
                        { titre: 'Calcul de la section S', detail: 'S = π × D² / 4\nS = π × (0,100)² / 4\nS = 7,854 × 10⁻³ m²' },
                        { titre: 'Calcul de la vitesse V', detail: 'V = Q / S\nV = 0,006 / 7,854 × 10⁻³\nV = 0,764 m/s  →  ✓ Dans la plage recommandée AEP (0,5 à 2 m/s)' },
                      ] },
                      { num: '2', texte: 'Calculer le gradient hydraulique J par Manning-Strickler, puis les pertes de charge régulières Δhf sur toute la longueur.', indice: 'V = K × Rh^(2/3) × J^(1/2) → J = (V / (K × Rh^(2/3)))². Pour conduite pleine : Rh = D/4. Δhf = J × L.', reponse: [
                        { titre: 'Données nécessaires', detail: 'V = 0,764 m/s\nD = 0,100 m, K = 90 m¹/³/s, L = 250 m' },
                        { titre: 'Calcul du rayon hydraulique Rh (conduite pleine)', detail: 'Rh = D / 4\nRh = 0,100 / 4 = 0,025 m' },
                        { titre: 'Calcul de Rh^(2/3)', detail: 'Rh^(2/3) = (0,025)^(2/3)\n= (0,025)^0,667\n= 0,0855' },
                        { titre: 'Calcul du gradient hydraulique J', detail: 'De V = K × Rh^(2/3) × J^(1/2), on tire :\nJ = (V / (K × Rh^(2/3)))²\nJ = (0,764 / (90 × 0,0855))²\nJ = (0,764 / 7,695)²\nJ = (0,09929)² = 9,86 × 10⁻³ m/m ≈ 9,9 ‰' },
                        { titre: 'Calcul des pertes de charge régulières Δhf', detail: 'Δhf = J × L\nΔhf = 9,86 × 10⁻³ × 250\nΔhf = 2,47 m' },
                      ] },
                      { num: '3', texte: 'Calculer les pertes de charge singulières Σ Δhs dues aux accessoires, puis les pertes de charge totales.', indice: 'Δhs = ξ × V²/(2g) pour chaque accessoire. Sommer tous les ξ pour obtenir Σξ.', reponse: [
                        { titre: 'Données nécessaires', detail: 'V = 0,764 m/s, g = 9,81 m/s²\nAccessoires : 3 coudes 90° (ξ = 1,2 chacun), 1 vanne (ξ = 0,1), 1 clapet (ξ = 2,5)\nΔhf = 2,47 m (calculé à la question 2)' },
                        { titre: 'Calcul de la charge cinétique V²/(2g)', detail: 'V²/(2g) = (0,764)² / (2 × 9,81)\n= 0,584 / 19,62\n= 0,02977 m' },
                        { titre: 'Calcul de la somme des coefficients de perte Σξ', detail: '3 coudes 90° : 3 × 1,2 = 3,6\n1 vanne pleine ouverture : 0,1\n1 clapet anti-retour : 2,5\nΣξ = 3,6 + 0,1 + 2,5 = 6,2' },
                        { titre: 'Calcul des pertes de charge singulières ΣΔhs', detail: 'Δhs = ξ × V²/(2g)  par accessoire\nΣΔhs = Σξ × V²/(2g)\nΣΔhs = 6,2 × 0,02977\nΣΔhs = 0,184 m' },
                        { titre: 'Calcul des pertes de charge totales', detail: 'Δh_totales = Δhf + ΣΔhs\nΔh_totales = 2,47 + 0,18\nΔh_totales = 2,65 m\n\nPart des pertes singulières : 0,18 / 2,65 = 6,8 %\n→ Faible, typique d\'une conduite longue de 250 m. Sur une conduite courte avec de nombreux accessoires, cette part peut dépasser 30 %.' },
                      ] },
                    ],
                  },
                ],
              },
              {
                id: 'hyd-5',
                titre: 'Pompes et stations de pompage',
                fiche: {
                  intro: 'Les pompes centrifuges sont les plus utilisées en AEP et assainissement. Leur dimensionnement repose sur la courbe caractéristique et le point de fonctionnement.',
                  points: [
                    '🔄 Pompe centrifuge : transfert d\'énergie par rotation (turbine) → la plus courante en eau',
                    '📈 Courbe caractéristique pompe : H = f(Q), fournie par le fabricant (HMT décroît quand Q croît)',
                    '📉 Courbe réseau : H_res = Δz + K·Q² (hauteur géodésique + pertes de charge)',
                    '🎯 Point de fonctionnement : intersection des deux courbes → (Q_fonct, H_fonct)',
                    '⚠️ Cavitation : vaporisation en aspiration si P < P_vapeur → bruit, érosion, chute de performances',
                    '📐 NPSH (Net Positive Suction Head) : doit respecter NPSH_dispo > NPSH_requis + 0,5 m',
                    '⚡ Rendement global η = P_hydraulique / P_absorbée = ρ·g·Q·H / P_moteur',
                    '🔀 Couplage série : H s\'additionnent (même Q) → utile si pression insuffisante',
                    '🔀 Couplage parallèle : Q s\'additionnent (même H) → utile pour augmenter le débit',
                  ],
                  formules: [
                    'H_réseau = Δz + K·Q² — courbe réseau (m)',
                    'NPSH_dispo = (P_asp - P_vap)/(ρg) - h_asp — charge nette disponible',
                    'η = ρgQH / P_moteur — rendement global (sans dimension)',
                    'P = ρ·g·Q·H / η — puissance absorbée (W)',
                  ],
                  retenir: 'Le point de fonctionnement = intersection pompe-réseau. Toujours vérifier NPSH_dispo > NPSH_requis pour éviter la cavitation.',
                  schema: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;padding:8px;box-sizing:border-box"><text x="160" y="14" text-anchor="middle" font-size="9" font-weight="800" fill="currentColor" opacity=".6" text-transform="uppercase">COURBES POMPE — RÉSEAU</text><line x1="42" y1="20" x2="42" y2="175" stroke="currentColor" stroke-width="1.5"/><line x1="42" y1="175" x2="300" y2="175" stroke="currentColor" stroke-width="1.5"/><polygon points="39,22 42,14 45,22" fill="currentColor"/><polygon points="298,172 306,175 298,178" fill="currentColor"/><text x="38" y="18" text-anchor="end" font-size="9" fill="currentColor" opacity=".7">HMT</text><text x="308" y="179" font-size="9" fill="currentColor" opacity=".7">Q</text><text x="36" y="178" text-anchor="end" font-size="8" fill="currentColor" opacity=".5">0</text><text x="36" y="90" text-anchor="end" font-size="8" fill="currentColor" opacity=".5">25m</text><text x="36" y="27" text-anchor="end" font-size="8" fill="currentColor" opacity=".5">50m</text><line x1="42" y1="90" x2="45" y2="90" stroke="currentColor" stroke-width="1" opacity=".3"/><path d="M42,27 Q130,45 290,168" fill="none" stroke="#C0392B" stroke-width="2.5"/><text x="295" y="163" font-size="9" font-weight="700" fill="#C0392B" text-anchor="end">Courbe pompe</text><path d="M42,148 Q130,138 290,55" fill="none" stroke="#0A5090" stroke-width="2" stroke-dasharray="7,4"/><text x="295" y="52" font-size="9" font-weight="700" fill="#0A5090" text-anchor="end">Courbe réseau</text><circle cx="166" cy="98" r="7" fill="#166038" opacity=".9"/><circle cx="166" cy="98" r="4" fill="#fff"/><line x1="166" y1="106" x2="166" y2="175" stroke="#166038" stroke-width="1" stroke-dasharray="4,3" opacity=".6"/><text x="170" y="88" font-size="9" font-weight="800" fill="#166038">Point de fonctionnement</text><path d="M42,165 Q120,140 166,125 Q210,140 290,165" fill="none" stroke="#E06010" stroke-width="1.5" stroke-dasharray="4,2" opacity=".7"/><text x="180" y="140" font-size="8" fill="#E06010" opacity=".9">η rendement</text></svg>',
                },
                flashcards: [
                  { q: 'Qu\'est-ce que le point de fonctionnement d\'une pompe ?', r: 'L\'intersection de la courbe H=f(Q) de la pompe et de la courbe H=f(Q) du réseau', expl: 'Si la courbe réseau monte (pression statique élevée), le débit de fonctionnement sera plus faible que le débit nominal.' },
                  { q: 'Qu\'est-ce que la cavitation et quand apparaît-elle ?', r: 'Formation de bulles de vapeur lorsque la pression locale tombe sous la pression de vapeur de l\'eau', expl: 'Elle cause bruit, vibrations et érosion. On l\'évite en limitant la hauteur d\'aspiration et les pertes à l\'aspiration.' },
                  { q: 'Formule du rendement global d\'une pompe ?', r: 'η = (ρ · g · Q · H) / P_moteur  (résultat entre 0 et 1)', expl: 'Un rendement de 0,75 signifie que 25 % de la puissance absorbée est perdue (frottements, fuites, pertes mécaniques).' },
                  { q: 'Couplage série : quel effet ?', r: 'Les HMT s\'additionnent pour le même débit Q. Ex : 2 pompes de 20 m → 40 m HMT', expl: 'Utilisé quand la pression est insuffisante : long refoulement, point haut. Les pompes doivent avoir la même courbe.' },
                  { q: 'Couplage parallèle : quel effet ?', r: 'Les débits s\'additionnent pour la même HMT. Ex : 2 pompes de 50 m³/h → 100 m³/h', expl: 'Utilisé en pointe ou pour la redondance. Le point de fonctionnement se déplace sur la courbe réseau.' },
                  { q: 'Comment calcule-t-on la puissance d\'une pompe ?', r: 'P_absorbée = ρ·g·Q·H / η  (W). Avec ρ=1000, g=9,81 : P = 9810·Q·H/η', expl: 'Pour Q=0,01 m³/s, H=20 m, η=0,7 : P = 9810 × 0,01 × 20 / 0,7 ≈ 2 800 W = 2,8 kW.' },
                ],
              },
            ],
          },

          /* ── Chimie et qualité de l'eau ── */
          {
            id: 'chimie',
            name: 'Chimie et qualité de l\'eau',
            ico: '🔬',
            color: '#7B2D8B',
            colorl: '#F0E6F8',
            chapitres: [
              {
                id: 'chi-1',
                titre: 'Paramètres physico-chimiques — T°, pH, conductivité, turbidité',
                fiche: {
                  intro: 'Les paramètres physico-chimiques caractérisent la qualité de l\'eau avant tout traitement. Ils sont mesurés en continu sur le terrain ou en laboratoire et déclenchent des alertes si les seuils réglementaires sont dépassés.',
                  points: [
                    '🌡️ Température (°C) : influence la solubilité de l\'O₂, la vitesse des réactions et la croissance bactérienne. Norme AEP : ≤ 25 °C',
                    '⚗️ pH : échelle de 0 (acide) à 14 (basique). Eau neutre = 7. Norme AEP : 6,5 – 9,0. Mesure par électrode de verre',
                    '⚡ Conductivité électrique (µS/cm) : reflète la minéralisation totale. Eau distillée ≈ 0 µS/cm, eau douce 100–500, eau de mer ≈ 50 000',
                    '☁️ Turbidité (NTU — Nephelometric Turbidity Unit) : matières en suspension. Norme AEP < 1 NTU au robinet, < 0,5 NTU après filtration',
                    '💨 Oxygène dissous (mg/L) : saturation à 20 °C = 9,1 mg/L. < 2 mg/L → anoxie (mort des poissons)',
                    '⚡ Potentiel d\'oxydo-réduction Eh (mV) : positif = milieu oxydant, négatif = milieu réducteur (anaérobie)',
                    '🔍 MES (Matières En Suspension, mg/L) : filtrées sur 0,45 µm. Distinctes de la turbidité (qui est optique)',
                  ],
                  formules: [
                    'pH = -log[H⁺] — définition du pH',
                    'O₂ sat. (mg/L) ≈ 14,6 – 0,39·T (approximation pratique entre 0 et 30 °C)',
                  ],
                  retenir: 'pH 6,5–9, turbidité < 1 NTU, conductivité reflet de la minéralisation, O₂ dissous indicateur de vie aquatique.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Paramètres physico-chimiques — valeurs de référence</div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr><th style="text-align:left;padding:6px 8px;background:var(--c-surface-2);color:var(--c-text);font-weight:700;border-bottom:2px solid var(--c-border)">Paramètre</th><th style="text-align:center;padding:6px 8px;background:var(--c-surface-2);color:var(--c-text);font-weight:700;border-bottom:2px solid var(--c-border)">Unité</th><th style="text-align:center;padding:6px 8px;background:rgba(10,116,96,.15);color:#0A7460;font-weight:700;border-bottom:2px solid rgba(10,116,96,.4)">Norme AEP</th><th style="text-align:left;padding:6px 8px;background:var(--c-surface-2);color:var(--c-text);font-weight:700;border-bottom:2px solid var(--c-border)">Signification</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">🌡️ Température</td><td style="text-align:center;padding:6px 8px;color:var(--c-text-3)">°C</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#0A7460">≤ 25 °C</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Croissance bactérienne accélérée au-delà</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">⚗️ pH</td><td style="text-align:center;padding:6px 8px;color:var(--c-text-3)">—</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#0A7460">6,5 – 9,0</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Corrosion &lt;6,5 · entartrage &gt;9</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">⚡ Conductivité</td><td style="text-align:center;padding:6px 8px;color:var(--c-text-3)">µS/cm</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#0A7460">≤ 2 500</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Reflet de la minéralisation totale</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">☁️ Turbidité</td><td style="text-align:center;padding:6px 8px;color:var(--c-text-3)">NTU</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#0A7460">&lt; 1 NTU</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Masque microorganismes · réduit désinfection</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">💨 O₂ dissous</td><td style="text-align:center;padding:6px 8px;color:var(--c-text-3)">mg/L</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#0A7460">sat. = 9,1</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">&lt; 2 mg/L = anoxie · mort des poissons</td></tr><tr><td style="padding:6px 8px;font-weight:600">🔋 Redox Eh</td><td style="text-align:center;padding:6px 8px;color:var(--c-text-3)">mV</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#0A7460">+ oxydant</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Négatif = milieu anaérobie (Fe, Mn dissous)</td></tr></tbody></table></div></div>',
                },
                flashcards: [
                  { q: 'Quelle est la norme de pH pour l\'eau potable ?', r: 'pH entre 6,5 et 9,0 (Directive 2020/2184)', expl: 'Un pH trop bas (< 6,5) rend l\'eau agressive (corrosion des canalisations). Trop élevé (> 9) : goût désagréable et risque d\'entartrage.' },
                  { q: 'Unité de la turbidité et norme AEP ?', r: 'NTU (Nephelometric Turbidity Unit). Norme : < 1 NTU au robinet', expl: 'La turbidité mesure la diffusion de la lumière par les particules. Une eau trouble peut masquer des microorganismes et réduire l\'efficacité de la désinfection.' },
                  { q: 'Que mesure la conductivité électrique d\'une eau ?', r: 'Sa minéralisation totale (ions dissous). Plus l\'eau est minéralisée, plus elle conduit le courant', expl: 'Eau de source peu minéralisée : ~100 µS/cm. Eau très minéralisée (Évian) : ~300 µS/cm. Eau de mer : ~50 000 µS/cm.' },
                  { q: 'Valeur de la saturation en O₂ dissous à 20 °C ?', r: '9,1 mg/L (100 % de saturation)', expl: 'L\'O₂ dissous diminue quand la température augmente. À 30 °C, la saturation tombe à ~7,5 mg/L. En dessous de 2 mg/L, on parle d\'anoxie.' },
                  { q: 'Quelle est la norme de température de l\'eau potable ?', r: '≤ 25 °C (valeur guide, pas paramètre de conformité strict)', expl: 'Au-delà de 25 °C, les bactéries se développent plus vite (notamment Legionella dans les réseaux d\'eau chaude).' },
                  { q: 'Différence entre turbidité (NTU) et MES (mg/L) ?', r: 'Turbidité = mesure optique (diffusion lumière). MES = mesure gravimétrique (filtration + pesée)', expl: 'Les deux sont corrélées mais pas identiques. La turbidité est plus rapide sur le terrain ; les MES sont plus précises en laboratoire.' },
                ],
              },
              {
                id: 'chi-2',
                titre: 'Dureté, TAC, TAP et équilibre calco-carbonique',
                fiche: {
                  intro: 'La dureté et l\'alcalinité définissent l\'agressivité ou l\'incrustabilité d\'une eau vis-à-vis des canalisations. L\'indice de Langelier permet d\'évaluer cet équilibre.',
                  points: [
                    '💎 Dureté totale TH (Titre Hydrotimétrique) : [Ca²⁺] + [Mg²⁺] exprimés en °f (degrés français)',
                    '   1 °f = 10 mg/L de CaCO₃ = 0,1 mmol/L',
                    '   Eau douce < 15 °f | Eau modérément dure 15–30 °f | Eau dure > 30 °f | Eau très dure > 40 °f',
                    '🔬 TAC (Titre Alcalimétrique Complet) : mesure les bicarbonates HCO₃⁻, carbonates CO₃²⁻ et hydroxydes OH⁻ — exprimé en °f',
                    '   TAC = principal tampon de l\'eau → résiste aux variations de pH',
                    '🧪 TAP (Titre Alcalimétrique simple) : mesure uniquement CO₃²⁻ et OH⁻. Si TAP = 0 → pas de carbonates ni d\'hydroxyles libres',
                    '⚖️ Indice de Langelier IL = pH_mesuré – pH_s (pH de saturation en CaCO₃)',
                    '   IL > 0 → eau incrustante (dépôt calcaire) | IL < 0 → eau agressive (corrosion) | IL ≈ 0 → eau équilibrée',
                    '🔧 Traitements : décarbonatation (eau trop dure), reminéralisation au CO₂/calcaire (eau trop douce/agressive)',
                  ],
                  formules: [
                    'TH (°f) = (Ca²⁺ en mg/L / 4,01) + (Mg²⁺ en mg/L / 2,43)',
                    'IL = pH_réel – pH_s  (pH_s calculé en fonction de TH, TAC, T°, conductivité)',
                    '1 °f = 10 mg/L CaCO₃ = 0,1 mmol/L',
                  ],
                  retenir: 'TH > 30 °f = eau dure (entartrage). IL < 0 = eau agressive (corrosion canalisations). TAC = pouvoir tampon de l\'eau.',
                  schema: '<svg viewBox="0 0 320 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;padding:8px;box-sizing:border-box"><text x="160" y="14" text-anchor="middle" font-size="9" font-weight="800" fill="currentColor" opacity=".6">DURETÉ (TH) ET INDICE DE LANGELIER (IL)</text><text x="16" y="42" font-size="9" font-weight="700" fill="currentColor" opacity=".7">TH (°f)</text><rect x="42" y="30" width="55" height="22" rx="4" fill="rgba(14,165,233,0.35)"/><text x="69" y="45" text-anchor="middle" font-size="9" font-weight="700" fill="#0070B0">0–15</text><text x="69" y="58" text-anchor="middle" font-size="8" fill="#0070B0">Douce</text><rect x="100" y="30" width="60" height="22" rx="4" fill="rgba(22,160,56,0.3)"/><text x="130" y="45" text-anchor="middle" font-size="9" font-weight="700" fill="#166038">15–30</text><text x="130" y="58" text-anchor="middle" font-size="8" fill="#166038">Modérée</text><rect x="163" y="30" width="60" height="22" rx="4" fill="rgba(230,140,0,0.3)"/><text x="193" y="45" text-anchor="middle" font-size="9" font-weight="700" fill="#886000">30–40</text><text x="193" y="58" text-anchor="middle" font-size="8" fill="#886000">Dure</text><rect x="226" y="30" width="60" height="22" rx="4" fill="rgba(192,57,43,0.3)"/><text x="256" y="45" text-anchor="middle" font-size="9" font-weight="700" fill="#A82018">&gt; 40</text><text x="256" y="58" text-anchor="middle" font-size="8" fill="#A82018">Très dure</text><text x="16" y="95" font-size="9" font-weight="700" fill="currentColor" opacity=".7">IL</text><rect x="42" y="83" width="70" height="22" rx="4" fill="rgba(192,57,43,0.3)"/><text x="77" y="98" text-anchor="middle" font-size="9" font-weight="700" fill="#A82018">IL &lt; −0,5</text><text x="77" y="111" text-anchor="middle" font-size="8" fill="#A82018">Agressive 🔴</text><rect x="116" y="83" width="74" height="22" rx="4" fill="rgba(22,160,56,0.3)"/><text x="153" y="98" text-anchor="middle" font-size="9" font-weight="700" fill="#166038">−0,5 à +0,5</text><text x="153" y="111" text-anchor="middle" font-size="8" fill="#166038">Équilibrée ✅</text><rect x="194" y="83" width="75" height="22" rx="4" fill="rgba(230,140,0,0.3)"/><text x="231" y="98" text-anchor="middle" font-size="9" font-weight="700" fill="#886000">IL &gt; +0,5</text><text x="231" y="111" text-anchor="middle" font-size="8" fill="#886000">Incrustante 🟠</text><line x1="42" y1="130" x2="286" y2="130" stroke="currentColor" stroke-width="1" opacity=".2"/><text x="160" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor" opacity=".6">TAC = pouvoir tampon (résistance aux variations de pH)</text><rect x="42" y="155" width="244" height="16" rx="4" fill="none" stroke="var(--c-primary)" stroke-width="1.5"/><text x="68" y="167" font-size="9" fill="var(--c-primary)">TAC &lt; 5 °f</text><text x="100" y="167" font-size="9" fill="var(--c-primary)">→</text><text x="115" y="167" font-size="9" fill="var(--c-primary)">peu tamponné</text><text x="185" y="167" font-size="9" fill="var(--c-primary)">TAC &gt; 15 °f →</text><text x="248" y="167" font-size="9" fill="var(--c-primary)">bien tamponné</text></svg>',
                },
                flashcards: [
                  { q: 'Qu\'est-ce que la dureté totale TH d\'une eau ?', r: 'Somme des ions Ca²⁺ et Mg²⁺ exprimée en degrés français (°f). 1 °f = 10 mg/L CaCO₃', expl: 'L\'eau dure provoque le calcaire dans les canalisations et les appareils électroménagers. L\'eau trop douce est agressive pour les métaux.' },
                  { q: 'Seuils de classification de la dureté de l\'eau', r: '< 15 °f : douce | 15–30 °f : moyennement dure | > 30 °f : dure | > 40 °f : très dure', expl: 'À titre indicatif : Paris ≈ 28 °f (dure), eau de pluie < 5 °f (très douce), certaines eaux du Massif Central < 10 °f.' },
                  { q: 'Que mesure le TAC ?', r: 'Le Titre Alcalimétrique Complet : bicarbonates HCO₃⁻ + carbonates CO₃²⁻ + hydroxydes OH⁻ (en °f)', expl: 'Le TAC représente le pouvoir tampon de l\'eau. Un TAC élevé stabilise le pH face aux apports acides ou alcalins.' },
                  { q: 'Qu\'indique l\'indice de Langelier ?', r: 'IL = pH_réel – pH_s. IL > 0 : eau incrustante | IL < 0 : eau agressive | IL = 0 : eau équilibrée', expl: 'En réseau AEP, on vise IL légèrement positif (0 à +0,5) pour former un dépôt protecteur fin sans entartrage excessif.' },
                  { q: 'Différence entre TAC et TAP ?', r: 'TAP mesure CO₃²⁻ + OH⁻ uniquement. TAC = TAP + HCO₃⁻. En général TAP ≈ 0 dans les eaux naturelles', expl: 'Si TAP > 0, l\'eau contient des carbonates libres ou des hydroxydes : milieu très alcalin ou eau traitée à la chaux.' },
                  { q: 'Comment traiter une eau trop douce et agressive ?', r: 'Reminéralisation : injection de CO₂ + passage sur lit de calcaire (carbonate de calcium), ou ajout de chaux', expl: 'Une eau trop douce (IL < -1) corrode les canalisations métalliques et dissout le plomb des anciennes conduites.' },
                ],
              },
              {
                id: 'chi-3',
                titre: 'Micropolluants — nitrates, pesticides, PFAS, métaux lourds',
                fiche: {
                  intro: 'Les micropolluants sont des substances présentes à l\'état de traces (µg/L, ng/L) mais potentiellement toxiques. Leur surveillance est encadrée par des normes strictes en constante évolution.',
                  points: [
                    '🌱 Nitrates NO₃⁻ : norme AEP 50 mg/L. Origine : agriculture (engrais, lisier). Risque : méthémoglobinémie chez les nourrissons',
                    '⚠️ Nitrites NO₂⁻ : norme AEP 0,5 mg/L. Très toxiques, intermédiaire nitrification. Indicateur de contamination bactériologique',
                    '🌿 Pesticides : norme 0,1 µg/L par substance individuelle, 0,5 µg/L pour le total. Origine : agriculture, jardins, voies ferrées',
                    '🧪 PFAS (substances per- et polyfluoroalkylées) : norme 2026 (Directive 2020/2184) — 0,1 µg/L par substance PFAS spécifique, 0,5 µg/L somme des 20 PFAS. Très persistants ("polluants éternels")',
                    '⚗️ Métaux lourds — normes AEP : Pb < 10 µg/L | As < 10 µg/L | Hg < 1 µg/L | Cd < 5 µg/L | Cr < 50 µg/L',
                    '🛢️ HAP (hydrocarbures aromatiques polycycliques) : norme 0,1 µg/L (somme 6 HAP OMS). Origine : goudrons, ruissellement routier',
                    '💊 Résidus médicamenteux : pas encore de norme AEP en France mais surveillance accrue (antibiotiques, hormones)',
                    '📊 Origine des pollutions diffuses : 70 % agricoles (N, P, pesticides), 30 % urbaines et industrielles',
                  ],
                  formules: [
                    'Conversion : NO₃⁻ (mg N/L) × 4,43 = NO₃⁻ (mg/L) — attention aux deux expressions',
                  ],
                  retenir: 'Nitrates < 50 mg/L, pesticides < 0,1 µg/L/substance, PFAS < 0,1 µg/L (norme 2026), Pb < 10 µg/L.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Micropolluants — normes eau potable (Directive 2020/2184)</div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr><th style="text-align:left;padding:6px 8px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700">Polluant</th><th style="text-align:center;padding:6px 8px;background:rgba(192,57,43,.12);color:#A82018;border-bottom:2px solid rgba(192,57,43,.4);font-weight:700">Norme AEP</th><th style="text-align:left;padding:6px 8px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700">Principale source</th><th style="text-align:left;padding:6px 8px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700">Risque santé</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">🌱 Nitrates NO₃⁻</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#A82018">50 mg/L</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Agriculture (engrais, lisier)</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Méthémoglobinémie nourrissons</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">🌿 Pesticides</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#A82018">0,1 µg/L</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Agriculture, jardins, voies ferrées</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Perturbation endocrinienne, cancers</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">🧪 PFAS</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#A82018">0,1 µg/L ★</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Mousses AFFF, revêtements</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Suspicion cancérogène (persistants)</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">⚗️ Plomb (Pb)</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#A82018">10 µg/L</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Anciennes canalisations plomb</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Neurotoxique (enfants ++)</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">☣️ Arsenic (As)</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#A82018">10 µg/L</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Géologie naturelle, industrie</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Cancérogène avéré</td></tr><tr><td style="padding:6px 8px;font-weight:600">💊 Résidus méd.</td><td style="text-align:center;padding:6px 8px;font-weight:700;color:#886000">surveillance</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Rejets hospitaliers / domestiques</td><td style="padding:6px 8px;color:var(--c-text-3);font-size:10px">Résistances antibiotiques</td></tr></tbody></table></div><div style="margin-top:8px;font-size:9px;color:var(--c-text-4)">★ Norme PFAS applicable 2026 (Directive 2020/2184) — 0,5 µg/L pour la somme des 20 PFAS ciblés</div></div>',
                },
                flashcards: [
                  { q: 'Norme AEP pour les nitrates ?', r: '50 mg/L (valeur réglementaire). Valeur guide OMS : 50 mg/L également', expl: 'Au-delà de 50 mg/L, l\'eau ne peut plus être distribuée. Entre 25 et 50 mg/L : mesures de gestion. Risque principal : méthémoglobinémie chez les nourrissons < 3 mois.' },
                  { q: 'Norme AEP pour les pesticides ?', r: '0,1 µg/L par substance individuelle — 0,5 µg/L pour la somme de tous les pesticides', expl: 'Cette norme est "de précaution" : elle ne correspond pas à une dose toxique connue mais à une limite analytique. Elle est l\'une des plus strictes au monde.' },
                  { q: 'Que sont les PFAS et pourquoi sont-ils problématiques ?', r: 'Substances per- et polyfluoroalkylées : très stables, ne se dégradent pas dans l\'environnement ("polluants éternels"). Suspicion de cancérogénicité', expl: 'Présents dans les mousses anti-incendie AFFF, revêtements antiadhésifs, textiles imperméables. Nouvelle norme 2026 : 0,1 µg/L par PFAS, 0,5 µg/L en somme.' },
                  { q: 'Norme AEP pour le plomb (Pb) ?', r: '10 µg/L au robinet du consommateur (Directive 2020/2184, applicable en 2036)', expl: 'Ancienne norme : 25 µg/L. Le plomb provient des anciennes canalisations intérieures (branchements en plomb). Neurotoxique pour les enfants.' },
                  { q: 'Quelle est la principale source de nitrates dans les eaux souterraines ?', r: 'L\'agriculture : épandage d\'engrais azotés et de lisier. Les nitrates lessivés atteignent les nappes', expl: 'Les zones de captage en contexte agricole intensif (Bretagne, plaines céréalières) sont les plus touchées. Les Zones de Protection de Captage (ZPC) visent à réduire ces apports.' },
                  { q: 'Pourquoi surveiller les nitrites NO₂⁻ en plus des nitrates ?', r: 'Les nitrites sont des intermédiaires de la nitrification, très toxiques (norme 0,5 mg/L). Leur présence peut indiquer une contamination bactériologique', expl: 'En réseau de distribution, des nitrites peuvent se former par dénitrification dans les zones de stagnation. C\'est un signal d\'alerte qualité.' },
                ],
              },
              {
                id: 'chi-4',
                titre: 'Méthodes d\'analyse et interprétation des résultats',
                fiche: {
                  intro: 'L\'analyse de l\'eau combine des mesures terrain (in situ) et des analyses de laboratoire. La rigueur du prélèvement conditionne la qualité des résultats.',
                  points: [
                    '🏕️ Mesures in situ (terrain) : T°, pH, conductivité, O₂ dissous, turbidité, redox → sonde multiparamètre',
                    '🧪 Analyses de laboratoire accréditées COFRAC (norme NF EN ISO 17025)',
                    '🔬 Principales méthodes analytiques :',
                    '   • Ions majeurs (NO₃⁻, SO₄²⁻, Cl⁻, Ca²⁺…) : chromatographie ionique',
                    '   • Métaux : spectrométrie d\'absorption atomique (SAA) ou ICP-MS (ultra-traces)',
                    '   • Pesticides et PFAS : chromatographie liquide couplée à la spectrométrie de masse (LC-MS/MS)',
                    '   • Microbiologie : filtration sur membrane + milieu de culture (E. coli, entérocoques)',
                    '📏 Unités : mg/L (ppm) → µg/L (ppb) → ng/L (ppt) → les PFAS se mesurent au ng/L',
                    '📋 Surveillance réglementaire : fréquence fixée par le préfet selon le débit distribué (décret du 11/01/2007)',
                    '   Distribution > 1 000 m³/j : analyses plus fréquentes (P1 à P3 selon le paramètre)',
                    '🚨 Interprétation : conformité / non-conformité → restriction d\'usage, traitement, information consommateurs',
                  ],
                  formules: [
                    '1 mg/L = 1 ppm (partie par million) = 1 g/m³',
                    '1 µg/L = 1 ppb (partie par milliard) = 0,001 mg/L',
                    '1 ng/L = 1 ppt (partie par trillion) = 0,000001 mg/L',
                  ],
                  retenir: 'Mesures terrain = multiparamètre. Labo accrédité COFRAC pour la conformité AEP. µg/L = ppb, ng/L = ppt.',
                  schema: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;padding:8px;box-sizing:border-box"><text x="160" y="14" text-anchor="middle" font-size="9" font-weight="800" fill="currentColor" opacity=".6">CHAÎNE D\'ANALYSE — DU TERRAIN AU RAPPORT</text><rect x="8" y="25" width="50" height="34" rx="6" fill="rgba(14,165,233,0.2)" stroke="rgba(14,165,233,0.6)" stroke-width="1.5"/><text x="33" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#0070B0">🏕️</text><text x="33" y="52" text-anchor="middle" font-size="8" font-weight="700" fill="#0070B0">Prélèvement</text><polygon points="60,42 70,38 70,46" fill="currentColor" opacity=".4"/><rect x="72" y="25" width="50" height="34" rx="6" fill="rgba(10,116,96,0.2)" stroke="rgba(10,116,96,0.6)" stroke-width="1.5"/><text x="97" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#0A7460">📡</text><text x="97" y="52" text-anchor="middle" font-size="8" font-weight="700" fill="#0A7460">In situ</text><polygon points="124,42 134,38 134,46" fill="currentColor" opacity=".4"/><rect x="136" y="25" width="50" height="34" rx="6" fill="rgba(122,45,139,0.2)" stroke="rgba(122,45,139,0.6)" stroke-width="1.5"/><text x="161" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#7B2D8B">🔬</text><text x="161" y="52" text-anchor="middle" font-size="8" font-weight="700" fill="#7B2D8B">Labo COFRAC</text><polygon points="188,42 198,38 198,46" fill="currentColor" opacity=".4"/><rect x="200" y="25" width="50" height="34" rx="6" fill="rgba(230,140,0,0.2)" stroke="rgba(230,140,0,0.6)" stroke-width="1.5"/><text x="225" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#886000">📊</text><text x="225" y="52" text-anchor="middle" font-size="8" font-weight="700" fill="#886000">Interprétation</text><polygon points="252,42 262,38 262,46" fill="currentColor" opacity=".4"/><rect x="264" y="25" width="50" height="34" rx="6" fill="rgba(22,96,56,0.2)" stroke="rgba(22,96,56,0.6)" stroke-width="1.5"/><text x="289" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#166038">📋</text><text x="289" y="52" text-anchor="middle" font-size="8" font-weight="700" fill="#166038">Rapport ARS</text><text x="160" y="82" text-anchor="middle" font-size="9" font-weight="700" fill="currentColor" opacity=".7">Unités de concentration</text><rect x="20" y="90" width="65" height="26" rx="4" fill="rgba(10,116,96,.15)" stroke="rgba(10,116,96,.4)" stroke-width="1"/><text x="52" y="101" text-anchor="middle" font-size="9" font-weight="700" fill="#0A7460">mg/L = ppm</text><text x="52" y="112" text-anchor="middle" font-size="8" fill="#0A7460">nitrates, O₂…</text><rect x="95" y="90" width="65" height="26" rx="4" fill="rgba(122,45,139,.15)" stroke="rgba(122,45,139,.4)" stroke-width="1"/><text x="127" y="101" text-anchor="middle" font-size="9" font-weight="700" fill="#7B2D8B">µg/L = ppb</text><text x="127" y="112" text-anchor="middle" font-size="8" fill="#7B2D8B">pesticides, Pb…</text><rect x="170" y="90" width="65" height="26" rx="4" fill="rgba(192,57,43,.15)" stroke="rgba(192,57,43,.4)" stroke-width="1"/><text x="202" y="101" text-anchor="middle" font-size="9" font-weight="700" fill="#A82018">ng/L = ppt</text><text x="202" y="112" text-anchor="middle" font-size="8" fill="#A82018">PFAS, hormones…</text><rect x="245" y="90" width="60" height="26" rx="4" fill="rgba(0,70,160,.12)" stroke="rgba(0,70,160,.35)" stroke-width="1"/><text x="275" y="101" text-anchor="middle" font-size="9" font-weight="700" fill="#0A5090">× 1 000</text><text x="275" y="112" text-anchor="middle" font-size="8" fill="#0A5090">entre niveaux</text></svg>',
                },
                flashcards: [
                  { q: 'Quelle accréditation doit avoir un laboratoire pour des analyses réglementaires AEP ?', r: 'Accréditation COFRAC (Comité Français d\'Accréditation) selon la norme ISO 17025', expl: 'Sans accréditation COFRAC, les résultats ne peuvent pas être utilisés pour statuer sur la conformité réglementaire d\'une eau distribuée.' },
                  { q: 'Quelle méthode utilise-t-on pour analyser les métaux à l\'état de traces ?', r: 'Spectrométrie d\'absorption atomique (SAA) ou ICP-MS (spectrométrie de masse à plasma induit)', expl: 'L\'ICP-MS permet de mesurer des concentrations en ng/L (ppt), nécessaire pour les PFAS et certains métaux à l\'état d\'ultra-traces.' },
                  { q: 'Convertir 50 µg/L en mg/L', r: '50 µg/L = 0,05 mg/L', expl: '1 mg/L = 1 000 µg/L. Pour convertir µg/L → mg/L : diviser par 1 000. La norme nitrates (50 mg/L) = 50 000 µg/L.' },
                  { q: 'Qu\'est-ce qu\'une sonde multiparamètre ?', r: 'Instrument de terrain mesurant simultanément T°, pH, conductivité, O₂ dissous, turbidité et parfois redox', expl: 'Elle permet une mesure in situ rapide sans prélèvement. Indispensable pour le suivi de chantier, le contrôle de rejets ou l\'exploration d\'aquifères.' },
                  { q: 'Comment est déterminée la fréquence de surveillance d\'une eau distribuée ?', r: 'Par le préfet, selon le volume distribué (m³/j) et la qualité de la ressource. Plus le débit est grand, plus la surveillance est fréquente', expl: 'Référence : décret 2007-49. Un réseau distribuant > 1 000 m³/j a des analyses P1 (routine), P2 (complètes) et P3 (renforcées).' },
                  { q: 'Quelle méthode pour analyser les pesticides dans l\'eau ?', r: 'Chromatographie liquide couplée à la spectrométrie de masse en tandem (LC-MS/MS)', expl: 'Cette méthode permet de détecter des centaines de pesticides en un seul passage à des concentrations < 0,01 µg/L, bien en dessous de la norme.' },
                ],
              },
            ],
          },

          /* ── Biologie et microbiologie ── */
          {
            id: 'biologie',
            name: 'Biologie et microbiologie de l\'eau',
            ico: '🦠',
            color: '#166038',
            colorl: '#E0F4EC',
            chapitres: [
              {
                id: 'bio-1',
                titre: 'Écosystèmes aquatiques et chaînes trophiques',
                fiche: {
                  intro: 'Un écosystème aquatique est un ensemble d\'organismes vivants (biocénose) en interaction avec leur milieu physico-chimique (biotope). Sa santé est révélatrice de la qualité de l\'eau.',
                  points: [
                    '🌿 Producteurs primaires : algues microscopiques (phytoplancton), macroalgues, macrophytes — fixent le CO₂ par photosynthèse',
                    '🦐 Consommateurs primaires : zooplancton, invertébrés benthiques (gammares, éphémères…)',
                    '🐟 Consommateurs secondaires et tertiaires : poissons, oiseaux, mammifères',
                    '🍂 Décomposeurs : bactéries et champignons — recyclent la matière organique en nutriments minéraux',
                    '☀️ Facteurs limitants : lumière, T°, O₂ dissous, azote (N), phosphore (P)',
                    '🔴 Eutrophisation : enrichissement excessif en N et P → prolifération algale → mort des algues → décomposition → hypoxie → mort de la faune',
                    '🌊 Notion de continuum fluvial : source (eaux froides, rapides, O₂ élevé) → aval (eaux chaudes, lentes, chargées)',
                    '📊 IBE (Indice Biotique Étendu) : évalue la qualité biologique d\'un cours d\'eau sur 20',
                  ],
                  formules: [
                    'DBO₅ (mg O₂/L) : demande biochimique en O₂ sur 5 jours à 20 °C — mesure la biodégradabilité',
                    'DCO (mg O₂/L) : demande chimique en O₂ — mesure la totalité de la pollution organique oxydable',
                  ],
                  retenir: 'Eutrophisation = trop de N et P → algues → hypoxie. DBO₅ mesure la pollution biodégradable, DCO la pollution totale.',
                  schema: '<svg viewBox="0 0 320 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;padding:8px;box-sizing:border-box"><text x="160" y="14" text-anchor="middle" font-size="9" font-weight="800" fill="currentColor" opacity=".6">CHAÎNE TROPHIQUE AQUATIQUE</text><ellipse cx="160" cy="50" rx="45" ry="18" fill="rgba(22,160,56,0.25)" stroke="rgba(22,160,56,0.7)" stroke-width="1.5"/><text x="160" y="47" text-anchor="middle" font-size="9" font-weight="700" fill="#166038">🌿 Producteurs</text><text x="160" y="59" text-anchor="middle" font-size="8" fill="#166038">Algues · phytoplancton</text><line x1="110" y1="68" x2="85" y2="90" stroke="currentColor" stroke-width="1.5" opacity=".5" marker-end="url(#arr)"/><line x1="210" y1="68" x2="235" y2="90" stroke="currentColor" stroke-width="1.5" opacity=".5" marker-end="url(#arr)"/><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor" opacity=".5"/></marker></defs><ellipse cx="70" cy="105" rx="40" ry="16" fill="rgba(14,165,233,0.2)" stroke="rgba(14,165,233,0.6)" stroke-width="1.5"/><text x="70" y="102" text-anchor="middle" font-size="9" font-weight="700" fill="#0070B0">🦐 Consomm. 1</text><text x="70" y="114" text-anchor="middle" font-size="8" fill="#0070B0">zooplancton · invertébrés</text><ellipse cx="250" cy="105" rx="40" ry="16" fill="rgba(14,165,233,0.2)" stroke="rgba(14,165,233,0.6)" stroke-width="1.5"/><text x="250" y="102" text-anchor="middle" font-size="9" font-weight="700" fill="#0070B0">🐟 Consomm. 2</text><text x="250" y="114" text-anchor="middle" font-size="8" fill="#0070B0">poissons herbivores</text><line x1="70" y1="121" x2="130" y2="143" stroke="currentColor" stroke-width="1.5" opacity=".5" marker-end="url(#arr)"/><line x1="250" y1="121" x2="190" y2="143" stroke="currentColor" stroke-width="1.5" opacity=".5" marker-end="url(#arr)"/><ellipse cx="160" cy="155" rx="42" ry="16" fill="rgba(192,57,43,0.2)" stroke="rgba(192,57,43,0.6)" stroke-width="1.5"/><text x="160" y="152" text-anchor="middle" font-size="9" font-weight="700" fill="#A82018">🦅 Consomm. 3</text><text x="160" y="164" text-anchor="middle" font-size="8" fill="#A82018">poissons carnivores · oiseaux</text></svg>',
                },
                flashcards: [
                  { q: 'Qu\'est-ce que l\'eutrophisation ?', r: 'Enrichissement excessif d\'un milieu aquatique en nutriments (N, P) → prolifération d\'algues → déficit en O₂ → mort de la faune', expl: 'L\'eutrophisation touche lacs, étangs et estuaires. Elle est principalement due aux rejets agricoles (nitrates, phosphates) et aux STEP.' },
                  { q: 'Rôle des décomposeurs dans un écosystème aquatique ?', r: 'Ils décomposent la matière organique morte en nutriments minéraux (N, P, C), bouclant le cycle de la matière', expl: 'Sans décomposeurs, les nutriments seraient bloqués dans la matière morte. Ils sont essentiels à la fertilité du milieu et à l\'auto-épuration.' },
                  { q: 'Quelle est la différence entre DBO₅ et DCO ?', r: 'DBO₅ = pollution biodégradable (oxydée par les bactéries en 5 j). DCO = pollution totale oxydable (chimique)', expl: 'Le rapport DCO/DBO₅ indique la biodégradabilité : si < 2, l\'eau est facilement traitable biologiquement. Si > 3, présence de substances réfractaires.' },
                  { q: 'Qu\'est-ce que le phytoplancton ?', r: 'Algues microscopiques en suspension dans l\'eau, productrices primaires grâce à la photosynthèse', expl: 'En excès (bloom algal), elles consomment tout l\'O₂ lors de leur décomposition et peuvent produire des toxines (cyanobactéries).' },
                  { q: 'Quels sont les deux facteurs nutritifs responsables de l\'eutrophisation ?', r: 'L\'azote (N) et le phosphore (P), apportés par les engrais agricoles et les rejets d\'eaux usées', expl: 'Le phosphore est souvent le facteur limitant en eau douce. Le contrôle du P dans les STEP (déphosphatation) est une priorité réglementaire.' },
                  { q: 'Qu\'est-ce que le continuum fluvial ?', r: 'Gradient longitudinal d\'une rivière : de la source (froide, rapide, O₂ élevé) vers l\'aval (chaude, lente, plus chargée)', expl: 'La structure des communautés biologiques change selon ce continuum. Un déséquilibre (barrage, rejet) interrompt ce gradient naturel.' },
                ],
              },
              {
                id: 'bio-2',
                titre: 'Microbiologie de l\'eau — bactéries, virus, protozoaires',
                fiche: {
                  intro: 'Les agents pathogènes microbiologiques sont la principale cause de maladies d\'origine hydrique. Leur détection et leur élimination sont au cœur du traitement de l\'eau potable.',
                  points: [
                    '🦠 Bactéries pathogènes : Escherichia coli (gastro-entérites), Salmonella (salmonellose), Legionella (légionellose, voie aérosol), Campylobacter (le + fréquent en France)',
                    '🔬 Virus entériques : norovirus, hépatite A, rotavirus — plus petits que les bactéries, plus résistants au chlore et aux UV',
                    '🟤 Protozoaires : Cryptosporidium parvum et Giardia lamblia — résistants au chlore ! Seuls filtration et UV efficaces',
                    '💩 Voie de contamination principale : féco-orale (ingestion d\'eau ou aliments contaminés par des matières fécales)',
                    '🌬️ Legionella : exception — transmission par inhalation d\'aérosols (douches, tours aéroréfrigérantes, jacuzzis)',
                    '📊 Persistance dans l\'eau : Cryptosporidium > 1 an dans l\'eau froide | virus > 100 jours | bactéries végétatives : quelques semaines',
                    '🔢 Dose infectieuse : très faible pour Cryptosporidium (< 10 oocystes) et norovirus (< 18 particules)',
                  ],
                  formules: [
                    'Log reduction = log₁₀(C_entrée / C_sortie) — mesure l\'efficacité d\'une barrière de traitement',
                    'Objectif OMS : 6 log de réduction pour les virus, 4 log pour Cryptosporidium',
                  ],
                  retenir: 'Cryptosporidium et Giardia résistent au chlore → barrière physique (filtration, UV) obligatoire. Legionella = aérosol, pas ingestion.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Microorganismes pathogènes dans l\'eau</div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:10.5px"><thead><tr><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Microorganisme</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Type</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Résist. Cl₂</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Maladie</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Barrière</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">E. coli</td><td style="padding:5px 7px;text-align:center">Bactérie</td><td style="padding:5px 7px;text-align:center;background:rgba(22,96,56,.12);color:#166038;font-weight:700">Faible</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Gastro-entérite, infections</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Chlore efficace</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Salmonella</td><td style="padding:5px 7px;text-align:center">Bactérie</td><td style="padding:5px 7px;text-align:center;background:rgba(22,96,56,.12);color:#166038;font-weight:700">Faible</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Fièvre typhoïde, salmonellose</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Chlore efficace</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Legionella</td><td style="padding:5px 7px;text-align:center">Bactérie</td><td style="padding:5px 7px;text-align:center;background:rgba(230,140,0,.15);color:#886000;font-weight:700">Modérée</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Légionellose (aérosol)</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">T° &gt; 60 °C</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Norovirus</td><td style="padding:5px 7px;text-align:center">Virus</td><td style="padding:5px 7px;text-align:center;background:rgba(230,140,0,.15);color:#886000;font-weight:700">Modérée</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Gastro-entérite virale</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">UV + chlore</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Cryptosporidium</td><td style="padding:5px 7px;text-align:center">Protozoaire</td><td style="padding:5px 7px;text-align:center;background:rgba(192,57,43,.15);color:#A82018;font-weight:700">Élevée ⚠️</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Cryptosporidiose (oocystes)</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Filtration + UV</td></tr><tr><td style="padding:5px 7px;font-weight:600">Giardia</td><td style="padding:5px 7px;text-align:center">Protozoaire</td><td style="padding:5px 7px;text-align:center;background:rgba(192,57,43,.15);color:#A82018;font-weight:700">Élevée ⚠️</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Giardiase (kystes résistants)</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Filtration + UV</td></tr></tbody></table></div></div>',
                },
                flashcards: [
                  { q: 'Pourquoi Cryptosporidium est-il particulièrement dangereux pour l\'eau potable ?', r: 'Il résiste au chlore à doses usuelles, sa dose infectieuse est très faible (< 10 oocystes), et il persiste plus d\'un an dans l\'eau froide', expl: 'La seule protection efficace est la filtration (1 µm absolu) ou les UV. La contamination de Milwaukee en 1993 (400 000 cas) est la référence mondiale.' },
                  { q: 'Quelle est la voie de contamination de Legionella pneumophila ?', r: 'Inhalation d\'aérosols contaminés (douches, TAR, spa). PAS par ingestion d\'eau potable', expl: 'Legionella prolifère entre 25 et 45 °C dans les réseaux d\'eau chaude. Prévention : maintien T° > 60 °C en production et > 50 °C partout.' },
                  { q: 'Qu\'est-ce que la "réduction log" en traitement de l\'eau ?', r: 'Réduction log = log₁₀(Cin/Csortie). 1 log = réduction de 90 %, 3 log = 99,9 %, 6 log = 99,9999 %', expl: 'L\'OMS recommande 6 log de réduction pour les virus entériques. Une filière complète (coagulation + filtration + chloration) atteint 8–10 log.' },
                  { q: 'Les virus sont-ils plus ou moins résistants au chlore que les bactéries ?', r: 'Plus résistants. Les bactéries végétatives sont détruites rapidement par le chlore, les virus nécessitent des doses plus élevées ou des temps de contact plus longs', expl: 'Norovirus : CT (concentration × temps) nécessaire ≈ 10 fois celui de E. coli. L\'ozone est plus efficace que le chlore contre les virus.' },
                  { q: 'Quelle bactérie est la plus fréquemment impliquée dans les toxi-infections alimentaires et gastro-entérites d\'origine hydrique en France ?', r: 'Campylobacter jejuni (le plus fréquent), suivi de Salmonella et E. coli entérotoxinogène', expl: 'Campylobacter est très présent dans les élevages avicoles et porcins. Il peut contaminer les nappes phréatiques proches d\'élevages.' },
                  { q: 'Pourquoi les protozoaires (Cryptosporidium, Giardia) sont-ils résistants au chlore ?', r: 'Ils forment des spores (oocystes/kystes) à paroi épaisse qui protègent le parasite contre les oxydants chimiques', expl: 'La CT nécessaire pour inactiver Cryptosporidium par le chlore serait toxique pour les consommateurs. Les UV (40 mJ/cm²) sont l\'alternative recommandée.' },
                ],
              },
              {
                id: 'bio-3',
                titre: 'Indicateurs de contamination fécale',
                fiche: {
                  intro: 'Plutôt que de rechercher tous les pathogènes (trop nombreux et coûteux), on utilise des indicateurs bactériologiques qui signalent une contamination fécale. Leur absence garantit (statistiquement) la sécurité microbiologique.',
                  points: [
                    '💩 Contamination fécale : présence de matières fécales humaines ou animales dans l\'eau → risque pathogènes',
                    '🦠 Coliformes totaux : bactéries Gram⁻, 37 °C, indicateurs généraux de contamination (pas spécifiques fécaux)',
                    '✅ E. coli (Escherichia coli) : indicateur spécifique de contamination fécale humaine/animale. Norme AEP : 0 UFC/100 mL',
                    '🔵 Entérocoques intestinaux : plus résistants que E. coli → indicateurs de contamination ancienne ou traitée. Norme : 0 UFC/100 mL',
                    '⚫ Spores de Clostridium sulfito-réducteurs (CSR) : très résistants → indicateurs d\'événements de contamination passés',
                    '📊 Bactéries coliformes 22 °C et 37 °C : indicateurs de la qualité générale (biomasse, recontamination réseau)',
                    '🔬 Méthodes de dénombrement : filtration sur membrane (ISO 9308-1) et NPP (Nombre le Plus Probable)',
                    '🚨 Si E. coli détecté en distribution : enquête obligatoire + mesures correctives immédiates',
                  ],
                  formules: [
                    'UFC = Unités Formant Colonies (méthode de dénombrement bactériologique)',
                    'NPP = Nombre le Plus Probable (méthode statistique pour dénombrer des microorganismes)',
                  ],
                  retenir: '0 E. coli / 100 mL = exigence absolue eau potable. 0 entérocoques / 100 mL. E. coli = indicateur fécal de référence.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Indicateurs microbiologiques de qualité</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px"><div style="background:rgba(192,57,43,.10);border:1.5px solid rgba(192,57,43,.4);border-radius:8px;padding:10px;text-align:center"><div style="font-size:20px;font-weight:900;color:#A82018">0</div><div style="font-size:11px;font-weight:700;color:var(--c-text);margin:2px 0">E. coli / 100 mL</div><div style="font-size:9.5px;color:var(--c-text-3)">Indicateur fécal de référence<br>Origine : matières fécales humaines/animales</div></div><div style="background:rgba(192,57,43,.10);border:1.5px solid rgba(192,57,43,.4);border-radius:8px;padding:10px;text-align:center"><div style="font-size:20px;font-weight:900;color:#A82018">0</div><div style="font-size:11px;font-weight:700;color:var(--c-text);margin:2px 0">Entérocoques / 100 mL</div><div style="font-size:9.5px;color:var(--c-text-3)">Résistent mieux au chlore<br>Indicateur complémentaire</div></div></div><div style="font-size:10px;font-weight:700;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Hiérarchie des indicateurs</div><div style="display:flex;flex-direction:column;gap:4px"><div style="display:flex;align-items:center;gap:8px;background:var(--c-surface);border-radius:6px;padding:6px 10px"><div style="width:10px;height:10px;border-radius:50%;background:#2563EB;flex-shrink:0"></div><div style="font-size:10.5px"><span style="font-weight:700">Indicateurs de contamination fécale :</span> <span style="color:var(--c-text-3)">E. coli, entérocoques → signalent une pollution fécale</span></div></div><div style="display:flex;align-items:center;gap:8px;background:var(--c-surface);border-radius:6px;padding:6px 10px"><div style="width:10px;height:10px;border-radius:50%;background:#16A34A;flex-shrink:0"></div><div style="font-size:10.5px"><span style="font-weight:700">Indicateurs de process :</span> <span style="color:var(--c-text-3)">Coliformes totaux → vérifient l\'efficacité de la désinfection</span></div></div><div style="display:flex;align-items:center;gap:8px;background:var(--c-surface);border-radius:6px;padding:6px 10px"><div style="width:10px;height:10px;border-radius:50%;background:#D97706;flex-shrink:0"></div><div style="font-size:10.5px"><span style="font-weight:700">Clostridium perfringens :</span> <span style="color:var(--c-text-3)">traces de pollution ancienne / kystes de protozoaires</span></div></div><div style="display:flex;align-items:center;gap:8px;background:var(--c-surface);border-radius:6px;padding:6px 10px"><div style="width:10px;height:10px;border-radius:50%;background:#7C3AED;flex-shrink:0"></div><div style="font-size:10.5px"><span style="font-weight:700">Bactéries aérobies revivifiables :</span> <span style="color:var(--c-text-3)">&lt; 100 UFC/mL à 22 °C → qualité générale réseau</span></div></div></div></div>',
                },
                flashcards: [
                  { q: 'Quelle est la norme microbiologique fondamentale de l\'eau potable ?', r: '0 E. coli / 100 mL et 0 entérocoques / 100 mL (Directive 2020/2184)', expl: 'C\'est une valeur absolue : la présence d\'un seul E. coli déclenche une non-conformité et des mesures correctives obligatoires.' },
                  { q: 'Pourquoi utilise-t-on des indicateurs plutôt que de chercher directement les pathogènes ?', r: 'Les pathogènes (virus, parasites) sont trop nombreux, difficiles à cultiver et coûteux à analyser. Les indicateurs sont rapides et peu coûteux', expl: 'Un bon indicateur doit être : présent avec les pathogènes, absent en eau saine, plus résistant que les pathogènes (garantie de sécurité).' },
                  { q: 'Quelle est la différence entre E. coli et les coliformes totaux ?', r: 'E. coli = indicateur spécifique fécal. Coliformes totaux = groupe plus large, incluant des bactéries non fécales (environnement, sol)', expl: 'Des coliformes totaux sans E. coli peuvent indiquer une contamination du réseau (biofilm, entrée de sol) sans contamination fécale.' },
                  { q: 'Pourquoi les entérocoques sont-ils utilisés en plus d\'E. coli ?', r: 'Ils sont plus résistants au chlore et à la dessiccation → ils persistent plus longtemps et signalent des contaminations que E. coli ne détecterait plus', expl: 'En eau de baignade, les entérocoques sont le paramètre de référence car ils survivent mieux en eau salée et sous UV solaires.' },
                  { q: 'Qu\'est-ce que la méthode de filtration sur membrane ?', r: 'On filtre 100 mL d\'eau sur une membrane à 0,45 µm, puis on incube la membrane sur milieu sélectif. On compte les colonies', expl: 'C\'est la méthode de référence ISO 9308-1 pour E. coli et coliformes. Résultat en 24 h. Avantage : simple, précise, peu coûteuse.' },
                  { q: 'Que signifie "0 UFC/100 mL" pour E. coli ?', r: 'Aucune colonie d\'E. coli détectée dans 100 mL d\'eau. UFC = Unité Formant Colonie', expl: 'Cette valeur seuil est absolue : 1 UFC/100 mL suffit à déclencher une non-conformité. C\'est le niveau le plus exigeant de la réglementation eau.' },
                ],
              },
              {
                id: 'bio-4',
                titre: 'Indices biologiques — IBD, IBGN, IPR',
                fiche: {
                  intro: 'Les indices biologiques évaluent la qualité écologique d\'un cours d\'eau via les organismes vivants. Ils intègrent les perturbations passées et constituent les paramètres de l\'état écologique imposé par la DCE.',
                  points: [
                    '🔬 IBD (Indice Biologique Diatomées) : basé sur les algues diatomées fixées aux substrats. Sensibles à la pollution organique et aux nutriments. Note /20. Très bon état ≥ 17',
                    '🦋 IBGN (Indice Biologique Global Normalisé) : macroinvertébrés benthiques (insectes, vers, crustacés). Note /20. Indicateur de perturbations physiques et chimiques. Très bon état ≥ 17',
                    '🐟 IPR (Indice Poisson Rivière) : compare le peuplement observé à un peuplement de référence. Valeur proche de 0 = très bon état. Score > 16 = mauvais état',
                    '🌱 IBMR (Indice Biologique Macrophytes en Rivière) : végétation aquatique. Sensible à l\'eutrophisation. Note sur 20',
                    '📋 DCE impose : atteindre le bon état écologique (IBD ≥ 13, IBGN ≥ 13) pour 2027',
                    '🗓️ Fréquence de suivi : IBD et IBGN tous les 3 ans en réseau de contrôle opérationnel, 6 ans en surveillance',
                    '⚠️ Limites : les indices sont "intégrateurs" (passé récent), donc délai entre la pollution et le signal biologique',
                  ],
                  formules: [
                    'Note IBD : de 1 (très mauvais) à 20 (très bon état) selon la composition des assemblages de diatomées',
                    'Note IBGN : de 0 à 20, calculée à partir de la diversité taxonomique et de la présence de groupes sentinelles',
                  ],
                  retenir: 'IBD = diatomées (chimique). IBGN = invertébrés (physico-chimique). IPR = poissons (intégrateur global). Tous requis par la DCE.',
                  schema: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto"><defs><marker id="arr4" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="var(--c-text-3)"/></marker></defs><text x="260" y="16" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">INDICES BIOLOGIQUES DCE</text><!-- IBD --><rect x="20" y="30" width="140" height="80" rx="8" fill="rgba(37,99,235,.12)" stroke="rgba(37,99,235,.5)" stroke-width="1.5"/><text x="90" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#1D4ED8">IBD</text><text x="90" y="65" text-anchor="middle" font-size="9" fill="var(--c-text-3)">Indice Biologique Diatomées</text><text x="90" y="78" text-anchor="middle" font-size="9" fill="var(--c-text)">🔬 Algues microscopiques</text><text x="90" y="91" text-anchor="middle" font-size="9" fill="var(--c-text)">sur substrat dur (pierres)</text><text x="90" y="104" text-anchor="middle" font-size="9" fill="#1D4ED8" font-weight="700">→ qualité chimique</text><!-- IBGN --><rect x="190" y="30" width="140" height="80" rx="8" fill="rgba(22,163,74,.12)" stroke="rgba(22,163,74,.5)" stroke-width="1.5"/><text x="260" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#15803D">IBGN</text><text x="260" y="65" text-anchor="middle" font-size="9" fill="var(--c-text-3)">Indice Biologique Global</text><text x="260" y="78" text-anchor="middle" font-size="9" fill="var(--c-text)">🦗 Macro-invertébrés</text><text x="260" y="91" text-anchor="middle" font-size="9" fill="var(--c-text)">benthiques (larves, vers)</text><text x="260" y="104" text-anchor="middle" font-size="9" fill="#15803D" font-weight="700">→ qualité physico-chimique</text><!-- IPR --><rect x="360" y="30" width="140" height="80" rx="8" fill="rgba(217,119,6,.12)" stroke="rgba(217,119,6,.5)" stroke-width="1.5"/><text x="430" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#B45309">IPR</text><text x="430" y="65" text-anchor="middle" font-size="9" fill="var(--c-text-3)">Indice Poissons Rivière</text><text x="430" y="78" text-anchor="middle" font-size="9" fill="var(--c-text)">🐟 Peuplements piscicoles</text><text x="430" y="91" text-anchor="middle" font-size="9" fill="var(--c-text)">par pêche électrique</text><text x="430" y="104" text-anchor="middle" font-size="9" fill="#B45309" font-weight="700">→ intégrateur global</text><!-- Arrows to result --><line x1="90" y1="110" x2="260" y2="145" stroke="var(--c-text-3)" stroke-width="1.2" marker-end="url(#arr4)"/><line x1="260" y1="110" x2="260" y2="142" stroke="var(--c-text-3)" stroke-width="1.2" marker-end="url(#arr4)"/><line x1="430" y1="110" x2="260" y2="145" stroke="var(--c-text-3)" stroke-width="1.2" marker-end="url(#arr4)"/><!-- DCE Result --><rect x="150" y="148" width="220" height="60" rx="8" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.5)" stroke-width="2"/><text x="260" y="168" text-anchor="middle" font-size="11" font-weight="800" fill="#6D28D9">État écologique DCE</text><text x="260" y="182" text-anchor="middle" font-size="9" fill="var(--c-text-3)">Très bon / Bon / Moyen / Médiocre / Mauvais</text><text x="260" y="196" text-anchor="middle" font-size="9" fill="#6D28D9" font-weight="700">L\'indice le plus déclassant s\'impose</text></svg>',
                },
                flashcards: [
                  { q: 'Sur quels organismes est basé l\'IBGN ?', r: 'Les macroinvertébrés benthiques (vivant sur le fond) : larves d\'insectes, vers, crustacés, mollusques', expl: 'Certains groupes (éphémères, plécoptères) sont très sensibles à la pollution → leur présence indique un très bon état. D\'autres (vers tubifex) tolèrent une forte pollution.' },
                  { q: 'Quelle est la valeur seuil du bon état écologique pour l\'IBD ?', r: 'IBD ≥ 13/20 pour le bon état. IBD ≥ 17 pour le très bon état', expl: 'L\'objectif de la DCE est d\'atteindre au moins le bon état (≥ 13) pour toutes les masses d\'eau d\'ici 2027.' },
                  { q: 'Pourquoi utilise-t-on les diatomées pour l\'IBD ?', r: 'Ce sont des algues microscopiques très sensibles aux nutriments (N, P) et aux pollutions organiques, et leur composition varie selon la qualité de l\'eau', expl: 'Il existe des milliers d\'espèces de diatomées, chacune ayant des préférences écologiques précises. L\'IBD exploite cette diversité spécifique.' },
                  { q: 'Qu\'est-ce que l\'IPR mesure exactement ?', r: 'L\'écart entre le peuplement piscicole observé et le peuplement attendu dans un cours d\'eau non perturbé de même type', expl: 'Si la truite (espèce de référence en eaux froides) a disparu d\'une rivière qui lui était favorable, l\'IPR le révèle. Plus le score est bas, meilleur est l\'état.' },
                  { q: 'À quelle fréquence les indices biologiques sont-ils mesurés en réseau de contrôle opérationnel ?', r: 'Tous les 3 ans (IBD, IBGN). En réseau de surveillance (RCS) : tous les 6 ans', expl: 'Le réseau opérationnel surveille les masses d\'eau en risque de ne pas atteindre les objectifs DCE. Le réseau de surveillance couvre l\'ensemble des masses d\'eau.' },
                  { q: 'Quelle est la principale limite des indices biologiques ?', r: 'Ils intègrent des perturbations passées (délai entre pollution et réponse des organismes). Ils ne détectent pas les pollutions aiguës récentes', expl: 'Après une amélioration de la qualité de l\'eau, les organismes benthiques mettent plusieurs années à recoloniser : l\'indice améliore lentement.' },
                ],
              },
            ],
          },

          /* ── Réglementation ── */
          {
            id: 'reglementation',
            name: 'Réglementation de l\'eau',
            ico: '📋',
            color: '#8B4513',
            colorl: '#FBF0E6',
            chapitres: [
              {
                id: 'reg-1',
                titre: 'Code de l\'environnement et Loi sur l\'eau — LEMA 2006',
                fiche: {
                  intro: 'Le droit de l\'eau français repose sur un principe fondateur : l\'eau est "patrimoine commun de la nation". La LEMA de 2006 organise la gestion de l\'eau à l\'échelle des bassins versants.',
                  points: [
                    '📜 Loi du 3 janvier 1992 : "L\'eau fait partie du patrimoine commun de la nation" (art. L210-1 Code envt). Première vraie loi-cadre sur l\'eau en France',
                    '📋 LEMA — Loi sur l\'Eau et les Milieux Aquatiques du 30 décembre 2006 : modernise la gestion de l\'eau, transpose la DCE, crée l\'ONEMA (devenu OFB)',
                    '🗺️ SDAGE (Schéma Directeur d\'Aménagement et de Gestion des Eaux) : document de planification à l\'échelle des 7 grands bassins hydrographiques, révisé tous les 6 ans',
                    '📍 SAGE (Schéma d\'Aménagement et de Gestion des Eaux) : déclinaison locale du SDAGE sur un sous-bassin ou une nappe',
                    '🏛️ 6 Agences de l\'eau : AESN (Seine-Normandie), AELB (Loire-Bretagne), AEAG (Adour-Garonne), RMC (Rhône-Méditerranée-Corse), AERM (Rhin-Meuse), AP (Artois-Picardie)',
                    '👮 Police de l\'eau : DDT(M), OFB (Office Français de la Biodiversité) — contrôle les IOTA',
                    '⚙️ IOTA (Installations, Ouvrages, Travaux, Activités) : nomenclature eau — 3 régimes : autorisation, déclaration, ou rien (selon impact)',
                    '💰 Redevances des Agences : "pollueur-payeur" et "préleveur-payeur" → financement des travaux d\'épuration et de restauration',
                  ],
                  formules: [],
                  retenir: 'L\'eau = patrimoine commun (L210-1). SDAGE = outil de planification bassin. Agences de l\'eau = financement. IOTA = régime d\'autorisation des travaux.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Architecture institutionnelle de la LEMA</div><div style="display:flex;flex-direction:column;gap:6px"><div style="display:flex;align-items:stretch;gap:8px"><div style="background:rgba(37,99,235,.12);border:1.5px solid rgba(37,99,235,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:11px;font-weight:800;color:#1D4ED8">🏛️ Code de l\'environnement L210-1</div><div style="font-size:9.5px;color:var(--c-text-3);margin-top:3px">« L\'eau fait partie du patrimoine commun de la nation »<br>Droit à l\'eau potable (art. L210-1, 2006)</div></div></div><div style="display:flex;gap:8px"><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px 10px;flex:1"><div style="font-size:10.5px;font-weight:700;color:var(--c-text)">📋 SDAGE</div><div style="font-size:9.5px;color:var(--c-text-3);margin-top:2px">Schéma Directeur d\'Aménagement et de Gestion des Eaux<br><span style="font-weight:600;color:var(--c-text)">Cycle 6 ans · Échelle bassin hydrographique</span></div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px 10px;flex:1"><div style="font-size:10.5px;font-weight:700;color:var(--c-text)">📋 SAGE</div><div style="font-size:9.5px;color:var(--c-text-3);margin-top:2px">Schéma d\'Aménagement et de Gestion des Eaux<br><span style="font-weight:600;color:var(--c-text)">Sous-bassin · Compatible SDAGE</span></div></div></div><div style="display:flex;gap:8px"><div style="background:rgba(22,163,74,.10);border:1.5px solid rgba(22,163,74,.35);border-radius:8px;padding:8px 10px;flex:1"><div style="font-size:10.5px;font-weight:700;color:#15803D">💰 Agences de l\'eau (6)</div><div style="font-size:9.5px;color:var(--c-text-3);margin-top:2px">Financement par redevances pollueurs/préleveurs → subventions → collectivités + industriels</div></div><div style="background:rgba(217,119,6,.10);border:1.5px solid rgba(217,119,6,.35);border-radius:8px;padding:8px 10px;flex:1"><div style="font-size:10.5px;font-weight:700;color:#B45309">⚖️ IOTA</div><div style="font-size:9.5px;color:var(--c-text-3);margin-top:2px">Installations, Ouvrages, Travaux, Activités<br><span style="font-weight:600;color:var(--c-text)">Autorisation / Déclaration / Sans formalité</span></div></div></div><div style="background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.3);border-radius:8px;padding:7px 10px;font-size:9.5px;color:var(--c-text-3)"><span style="font-weight:700;color:#6D28D9">Acteurs clés : </span>OFB (police), DDT (préfet), ARS (santé), CLE (comité local eau), CRE (comité rivière)</div></div></div>',
                },
                flashcards: [
                  { q: 'Quel article du Code de l\'environnement proclame l\'eau "patrimoine commun de la nation" ?', r: 'Article L210-1 du Code de l\'environnement (issu de la loi du 3 janvier 1992)', expl: 'Cet article pose le principe fondateur : l\'eau n\'est pas une marchandise ordinaire, elle appartient à tous. Il fonde toute la politique de l\'eau française.' },
                  { q: 'Qu\'est-ce que la LEMA et quand a-t-elle été adoptée ?', r: 'Loi sur l\'Eau et les Milieux Aquatiques du 30 décembre 2006. Elle modernise la gestion de l\'eau et transpose la DCE en droit français', expl: 'La LEMA a créé l\'ONEMA (Office National de l\'Eau et des Milieux Aquatiques), devenu OFB en 2019 par fusion avec l\'AFB.' },
                  { q: 'Qu\'est-ce qu\'un SDAGE ?', r: 'Schéma Directeur d\'Aménagement et de Gestion des Eaux : document de planification de la politique de l\'eau à l\'échelle d\'un grand bassin hydrographique', expl: 'Il fixe les orientations pour atteindre le bon état des eaux (DCE). Révisé tous les 6 ans. En France : 7 SDAGE métropolitains + 5 outre-mer.' },
                  { q: 'Quelles sont les 6 agences de l\'eau françaises ?', r: 'AESN (Seine-Normandie), AELB (Loire-Bretagne), AEAG (Adour-Garonne), RMC (Rhône-Méditerranée-Corse), AERM (Rhin-Meuse), AP (Artois-Picardie)', expl: 'Chaque agence perçoit des redevances auprès des usagers (collectivités, industriels) et reverse des aides pour les travaux d\'eau et d\'assainissement.' },
                  { q: 'Qu\'est-ce qu\'une IOTA ?', r: 'Installation, Ouvrage, Travaux ou Activité ayant un impact sur l\'eau. Selon l\'importance : autorisation, déclaration, ou exemption (nomenclature annexe à l\'art. R214-1)', expl: 'Ex : un forage > 200 m³/j nécessite une autorisation. Une prise d\'eau < 400 m³/h avec retour intégral nécessite seulement une déclaration.' },
                  { q: 'Quel organisme assure la police de l\'eau en France ?', r: 'L\'OFB (Office Français de la Biodiversité) et les DDT(M) (Directions Départementales des Territoires)', expl: 'Les agents de l\'OFB ont des pouvoirs de police judiciaire : ils peuvent dresser des procès-verbaux et réaliser des prélèvements d\'office en cas de pollution.' },
                ],
              },
              {
                id: 'reg-2',
                titre: 'Directive Cadre sur l\'Eau — DCE 2000 et objectifs',
                fiche: {
                  intro: 'La DCE est le texte fondateur de la politique de l\'eau européenne. Elle impose d\'atteindre le "bon état" de toutes les masses d\'eau selon des critères biologiques et chimiques stricts.',
                  points: [
                    '🇪🇺 Directive 2000/60/CE du 23 octobre 2000 : texte de référence pour l\'ensemble des pays de l\'UE',
                    '🎯 Objectif principal : atteindre le "bon état" de toutes les masses d\'eau (superficielles et souterraines) — délais : 2015, puis 2021, puis 2027',
                    '💧 5 types de masses d\'eau : cours d\'eau, lacs, eaux de transition (estuaires), eaux côtières, eaux souterraines',
                    '🟢 État écologique : 5 classes (très bon / bon / moyen / médiocre / mauvais) — évalué par IBD, IBGN, IPR + paramètres physico-chimiques',
                    '🔵 État chimique : "bon" ou "mauvais" selon les 45 substances prioritaires (liste prioritaire UE)',
                    '☠️ 8 substances dangereuses prioritaires (SDp) : objectif zéro rejet (mercure, cadmium, HAP, PCB…)',
                    '🗺️ Masse d\'eau = unité de gestion cohérente. France : ~12 000 masses d\'eau de surface + ~600 masses d\'eau souterraine',
                    '📊 Programme de surveillance obligatoire : réseau de contrôle de surveillance (RCS) + contrôle opérationnel (RCO)',
                  ],
                  formules: [],
                  retenir: 'DCE 2000 : bon état écologique + chimique d\'ici 2027. 5 classes d\'état. 45 substances prioritaires dont 8 "zéro rejet". Évaluation par indices biologiques.',
                  schema: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><text x="250" y="15" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">CLASSES D\'ÉTAT ÉCOLOGIQUE DCE</text><!-- 5 color bands --><rect x="20" y="30" width="88" height="50" rx="0" fill="#0EA5E9"/><rect x="108" y="30" width="88" height="50" rx="0" fill="#22C55E"/><rect x="196" y="30" width="88" height="50" rx="0" fill="#EAB308"/><rect x="284" y="30" width="88" height="50" rx="0" fill="#F97316"/><rect x="372" y="30" width="108" height="50" rx="0" fill="#EF4444"/><!-- Labels inside --><text x="64" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="white">Très bon</text><text x="64" y="66" text-anchor="middle" font-size="9" fill="rgba(255,255,255,.85)">Référence</text><text x="152" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="white">Bon</text><text x="152" y="66" text-anchor="middle" font-size="9" fill="rgba(255,255,255,.85)">Objectif DCE</text><text x="240" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="white">Moyen</text><text x="240" y="66" text-anchor="middle" font-size="9" fill="rgba(255,255,255,.85)">→ Action</text><text x="328" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="white">Médiocre</text><text x="328" y="66" text-anchor="middle" font-size="9" fill="rgba(255,255,255,.85)">→ Action urgente</text><text x="426" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="white">Mauvais</text><text x="426" y="66" text-anchor="middle" font-size="9" fill="rgba(255,255,255,.85)">→ Prioritaire</text><!-- France 2022 marker --><line x1="220" y1="25" x2="220" y2="85" stroke="#1E293B" stroke-width="2" stroke-dasharray="4,2"/><text x="220" y="22" text-anchor="middle" font-size="8" fill="#1E293B" font-weight="700">France ≈ 43 % ↕</text><!-- Info boxes --><rect x="20" y="95" width="215" height="50" rx="8" fill="rgba(37,99,235,.08)" stroke="rgba(37,99,235,.3)" stroke-width="1"/><text x="127" y="113" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--c-text)">État chimique : 45 substances prioritaires</text><text x="127" y="126" text-anchor="middle" font-size="9" fill="var(--c-text-3)">8 substances → objectif « zéro rejet »</text><text x="127" y="139" text-anchor="middle" font-size="9" fill="var(--c-text-3)">Ex : mercure, HAP, tributylétain</text><rect x="265" y="95" width="215" height="50" rx="8" fill="rgba(22,163,74,.08)" stroke="rgba(22,163,74,.3)" stroke-width="1"/><text x="372" y="113" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--c-text)">Règle du plus déclassant</text><text x="372" y="126" text-anchor="middle" font-size="9" fill="var(--c-text-3)">État = min(écologique, chimique)</text><text x="372" y="139" text-anchor="middle" font-size="9" fill="var(--c-text-3)">MEFM → bon potentiel (≠ bon état)</text><!-- Deadline --><rect x="20" y="158" width="460" height="30" rx="6" fill="rgba(239,68,68,.08)" stroke="rgba(239,68,68,.3)" stroke-width="1"/><text x="250" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="#DC2626">Échéance : « Bon état » d\'ici 2027 (3ᵉ cycle SDAGE — prolongé 2 fois)</text></svg>',
                },
                flashcards: [
                  { q: 'Quelle est la référence réglementaire de la DCE ?', r: 'Directive 2000/60/CE du Parlement européen et du Conseil du 23 octobre 2000', expl: 'La DCE est transposée en droit français principalement par la LEMA (2006) et diverses ordonnances. Le SDAGE est l\'outil de sa mise en œuvre.' },
                  { q: 'Quel est l\'objectif central de la DCE ?', r: 'Atteindre le "bon état" de toutes les masses d\'eau européennes (écologique et chimique)', expl: 'L\'objectif initial de 2015 a été reporté à 2021 puis 2027 pour la majorité des masses d\'eau en raison des difficultés de mise en œuvre.' },
                  { q: 'Quelles sont les 5 classes d\'état écologique de la DCE ?', r: 'Très bon — Bon — Moyen — Médiocre — Mauvais', expl: 'L\'objectif est d\'atteindre au moins le "bon état". Le "très bon état" est protégé (non-dégradation). L\'état est évalué par des indices biologiques (IBD, IBGN, IPR).' },
                  { q: 'Quelle est la différence entre état écologique et état chimique ?', r: 'État écologique : biologie + physico-chimie (5 niveaux). État chimique : conformité aux 45 substances prioritaires (binaire : bon ou mauvais)', expl: 'Une masse d\'eau peut avoir un bon état écologique mais un mauvais état chimique (ex. mercure héritage industriel). Les deux doivent être atteints.' },
                  { q: 'Qu\'est-ce qu\'une substance dangereuse prioritaire (SDp) selon la DCE ?', r: 'Substance présentant un risque inacceptable pour l\'environnement aquatique, pour laquelle l\'objectif est zéro rejet dans l\'eau', expl: 'Exemples : mercure, cadmium, PCB, dioxines. 8 SDp au départ, liste élargie. Objectif "zéro rejet" = élimination progressive des émissions.' },
                  { q: 'Qu\'est-ce que le réseau de contrôle opérationnel (RCO) ?', r: 'Réseau de surveillance ciblé sur les masses d\'eau à risque de ne pas atteindre le bon état DCE. Fréquence de suivi renforcée', expl: 'Distinct du RCS (réseau de contrôle de surveillance), qui couvre toutes les masses d\'eau à fréquence standard pour établir l\'état de référence.' },
                ],
              },
              {
                id: 'reg-3',
                titre: 'Normes qualité eau potable — Directive 2020/2184',
                fiche: {
                  intro: 'La Directive 2020/2184 (eau potable) remplace la Directive 98/83/CE. Elle renforce les exigences sur les PFAS, le plomb, fixe une approche par les risques et inclut des paramètres émergents.',
                  points: [
                    '📜 Directive (UE) 2020/2184 du 16 décembre 2020 — transposée en droit français le 12 janvier 2023',
                    '🦠 Paramètres microbiologiques : E. coli = 0 UFC/100 mL | Entérocoques = 0 UFC/100 mL (inchangé)',
                    '🌿 Nitrates : 50 mg/L | Nitrites (distribution) : 0,5 mg/L | Nitrites (traitement) : 0,1 mg/L',
                    '🌿 Pesticides : 0,1 µg/L / substance | Total pesticides : 0,5 µg/L',
                    '🧪 PFAS (nouveauté 2020) : 0,1 µg/L / substance PFAS spécifique | Somme 20 PFAS : 0,5 µg/L',
                    '⚗️ Plomb (Pb) : 10 µg/L (transitoire jusqu\'en 2036, puis 5 µg/L) — ancienne norme : 25 µg/L',
                    '🔩 Bisphénol A : 2,5 µg/L (nouveau paramètre — perturbateur endocrinien)',
                    '🔴 Chlorure de vinyle (PVC dégradé) : 0,5 µg/L',
                    '⚠️ Approche basée sur les risques (ABR) : évaluation du système d\'alimentation de la captation au robinet, obligatoire dès 2026',
                    '📊 Légionelles dans les eaux chaudes sanitaires : < 1 000 UFC/L (recommandation Directive)',
                  ],
                  formules: [],
                  retenir: 'PFAS : 0,1 µg/L par substance (nouveau). Pb : 10 µg/L (→ 5 µg/L en 2036). E. coli : 0/100 mL. Approche par les risques obligatoire dès 2026.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Normes eau potable — paramètres clés (directive 2020/2184)</div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:10.5px"><thead><tr><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Paramètre</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Limite 2024</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Évolution</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Risque</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">E. coli</td><td style="padding:5px 7px;text-align:center;font-weight:800;color:#A82018">0 / 100 mL</td><td style="padding:5px 7px;text-align:center;font-size:9px;color:var(--c-text-3)">Inchangé</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Infections intestinales, épidémies</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Nitrates (NO₃⁻)</td><td style="padding:5px 7px;text-align:center;font-weight:800;color:#886000">50 mg/L</td><td style="padding:5px 7px;text-align:center;font-size:9px;color:var(--c-text-3)">Inchangé</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Méthémoglobinémie nourrissons</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Plomb (Pb)</td><td style="padding:5px 7px;text-align:center;font-weight:800;color:#886000">10 µg/L</td><td style="padding:5px 7px;text-align:center;font-size:9px;color:#A82018;font-weight:700">→ 5 µg/L en 2036</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Neurotoxique, branchements plomb</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Pesticides (∑)</td><td style="padding:5px 7px;text-align:center;font-weight:800;color:#886000">0,5 µg/L</td><td style="padding:5px 7px;text-align:center;font-size:9px;color:var(--c-text-3)">0,1 µg/L / substance</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Perturbateurs endocriniens, cancers</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">PFAS (∑ 20 sub.)</td><td style="padding:5px 7px;text-align:center;font-weight:800;color:#A82018">0,1 µg/L / sub.</td><td style="padding:5px 7px;text-align:center;font-size:9px;color:#A82018;font-weight:700">Nouveau 2026 ⚠️</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Cancérigènes, immunotoxiques</td></tr><tr><td style="padding:5px 7px;font-weight:600">Turbidité</td><td style="padding:5px 7px;text-align:center;font-weight:800;color:#166038">1 NTU</td><td style="padding:5px 7px;text-align:center;font-size:9px;color:var(--c-text-3)">Inchangé</td><td style="padding:5px 7px;font-size:9.5px;color:var(--c-text-3)">Protection chlore, esthétique</td></tr></tbody></table></div><div style="background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.25);border-radius:6px;padding:7px 10px;margin-top:8px;font-size:9.5px;color:var(--c-text-3)"><span style="font-weight:700;color:#6D28D9">PGSSE obligatoire dès 2026 : </span>Approche par les risques (Water Safety Plan) — identifier les dangers de la source au robinet</div></div>',
                },
                flashcards: [
                  { q: 'Quelle directive remplace la Directive 98/83/CE sur l\'eau potable ?', r: 'Directive (UE) 2020/2184 du 16 décembre 2020, transposée en France le 12 janvier 2023', expl: 'Cette révision majeure intègre les polluants émergents (PFAS), renforce les normes sur le plomb et introduit une approche basée sur les risques.' },
                  { q: 'Quelle est la nouvelle norme pour les PFAS dans l\'eau potable ?', r: '0,1 µg/L par substance PFAS individuelle — 0,5 µg/L pour la somme des 20 PFAS réglementés', expl: 'Ces valeurs s\'appliquent progressivement. En 2026, un plan de surveillance PFAS est obligatoire pour tous les captages. Les PFAS ne sont pas éliminés par le traitement classique (chlore, sable).' },
                  { q: 'Quelle est l\'évolution de la norme plomb dans la Directive 2020 ?', r: '10 µg/L actuellement (jusqu\'en 2036), puis 5 µg/L. Ancienne norme : 25 µg/L', expl: 'L\'enjeu principal est le remplacement des branchements en plomb encore présents dans les réseaux, notamment dans les vieux immeubles. Coût estimé : plusieurs milliards d\'euros en France.' },
                  { q: 'Qu\'est-ce que l\'approche basée sur les risques (ABR) imposée par la Directive 2020 ?', r: 'Évaluation des risques sur tout le système : bassin versant → captage → traitement → réseau → robinet du consommateur', expl: 'L\'ABR remplace une surveillance uniquement au robinet par une gestion proactive des risques. Elle est obligatoire pour les distributeurs > 1 000 m³/j dès 2026.' },
                  { q: 'Quelle est la norme pour les pesticides individuels dans l\'eau potable ?', r: '0,1 µg/L par substance active individuelle — 0,5 µg/L pour la somme de tous les pesticides', expl: 'Cette norme "de précaution" (fixée en 1980, maintenue) est indépendante de la toxicité réelle. Elle est parmi les plus strictes au monde et pousse à chercher des alternatives aux pesticides.' },
                  { q: 'Quel est le nouveau paramètre "perturbateur endocrinien" introduit par la Directive 2020 ?', r: 'Le bisphénol A (BPA) avec une norme de 2,5 µg/L', expl: 'Le BPA peut migrer des plastiques et revêtements des canalisations dans l\'eau. Il est suspecté d\'effets sur le système hormonal à faibles doses.' },
                ],
              },
            ],
          },
        ],
      },

      /* ── Deuxième année ── */
      {
        id: 'an2',
        name: 'Deuxième année',
        matieres: [

          /* ── Traitement des eaux potables ── */
          {
            id: 'traitement-ep',
            name: 'Traitement des eaux potables',
            ico: '🚰',
            color: '#0A5090',
            colorl: '#E6EEF8',
            chapitres: [
              {
                id: 'tep-1',
                titre: 'Filières de traitement selon la qualité de la ressource',
                fiche: {
                  intro: 'Le traitement de l\'eau potable est adapté à la qualité de la ressource (souterraine ou superficielle) et aux polluants présents. Le principe fondamental est le traitement par "barrières multiples".',
                  points: [
                    '💡 Principe des barrières multiples : chaque étape élimine partiellement les polluants. L\'association de barrières garantit la sécurité sanitaire',
                    '🏔️ Eau souterraine de bonne qualité : désinfection seule (chlore ou UV) — ex. source de montagne peu minéralisée',
                    '⛏️ Eau souterraine avec fer/manganèse : aération (oxydation Fe²⁺→Fe³⁺) + filtration + désinfection',
                    '🌊 Eau de surface (rivière, lac) : filière complète — coagulation + floculation + décantation + filtration + désinfection',
                    '🧪 Eau polluée (pesticides, matières organiques, PFAS) : filière avancée — CAG (charbon actif en grains) + procédés membranaires (NF/OI)',
                    '🌊 Eau saumâtre ou de mer : osmose inverse (OI) + reminéralisation',
                    '📊 Choix de la filière : basé sur l\'analyse de la ressource brute (physico-chimique + microbiologique + émergents)',
                    '⚖️ Arrêté du 11/01/2007 : fixe les procédés de traitement autorisés pour l\'eau potable en France',
                  ],
                  formules: [],
                  retenir: 'Eau souterraine propre → désinfection seule. Eau de surface → filière complète. Polluants émergents → CAG ou membranes. Toujours plusieurs barrières.',
                  schema: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px;display:block;margin:0 auto"><defs><marker id="arr5" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto"><path d="M0,0 L0,7 L8,3.5 Z" fill="#94A3B8"/></marker></defs><text x="280" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">FILIÈRE DE TRAITEMENT AEP — EAU DE SURFACE</text><!-- Steps --><rect x="10" y="28" width="68" height="44" rx="6" fill="rgba(14,165,233,.15)" stroke="rgba(14,165,233,.6)" stroke-width="1.5"/><text x="44" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#0369A1">Prétraitement</text><text x="44" y="58" text-anchor="middle" font-size="8" fill="var(--c-text-3)">dégrillage</text><text x="44" y="68" text-anchor="middle" font-size="8" fill="var(--c-text-3)">tamisage</text><line x1="78" y1="50" x2="93" y2="50" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#arr5)"/><rect x="93" y="28" width="68" height="44" rx="6" fill="rgba(14,165,233,.15)" stroke="rgba(14,165,233,.6)" stroke-width="1.5"/><text x="127" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#0369A1">Coagulation</text><text x="127" y="58" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Al₂(SO₄)₃</text><text x="127" y="68" text-anchor="middle" font-size="8" fill="var(--c-text-3)">pH 6–7,5</text><line x1="161" y1="50" x2="176" y2="50" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#arr5)"/><rect x="176" y="28" width="68" height="44" rx="6" fill="rgba(22,163,74,.12)" stroke="rgba(22,163,74,.5)" stroke-width="1.5"/><text x="210" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#15803D">Floculation</text><text x="210" y="58" text-anchor="middle" font-size="8" fill="var(--c-text-3)">agitation</text><text x="210" y="68" text-anchor="middle" font-size="8" fill="var(--c-text-3)">lente → flocs</text><line x1="244" y1="50" x2="259" y2="50" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#arr5)"/><rect x="259" y="28" width="68" height="44" rx="6" fill="rgba(22,163,74,.12)" stroke="rgba(22,163,74,.5)" stroke-width="1.5"/><text x="293" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#15803D">Décantation</text><text x="293" y="58" text-anchor="middle" font-size="8" fill="var(--c-text-3)">séparation</text><text x="293" y="68" text-anchor="middle" font-size="8" fill="var(--c-text-3)">gravité</text><line x1="327" y1="50" x2="342" y2="50" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#arr5)"/><rect x="342" y="28" width="68" height="44" rx="6" fill="rgba(217,119,6,.12)" stroke="rgba(217,119,6,.5)" stroke-width="1.5"/><text x="376" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#B45309">Filtration</text><text x="376" y="58" text-anchor="middle" font-size="8" fill="var(--c-text-3)">sable + CAG</text><text x="376" y="68" text-anchor="middle" font-size="8" fill="var(--c-text-3)">micropollants</text><line x1="410" y1="50" x2="425" y2="50" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#arr5)"/><rect x="425" y="28" width="68" height="44" rx="6" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.5)" stroke-width="1.5"/><text x="459" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#DC2626">Désinfection</text><text x="459" y="58" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Cl₂ / UV / O₃</text><text x="459" y="68" text-anchor="middle" font-size="8" fill="var(--c-text-3)">résiduel</text><line x1="493" y1="50" x2="508" y2="50" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#arr5)"/><rect x="508" y="35" width="44" height="30" rx="6" fill="rgba(14,165,233,.25)" stroke="rgba(14,165,233,.7)" stroke-width="1.5"/><text x="530" y="54" text-anchor="middle" font-size="9" font-weight="800" fill="#0369A1">🚰 AEP</text><!-- Barrier labels --><text x="44" y="85" text-anchor="middle" font-size="7.5" fill="var(--c-text-4)">Barrière 1</text><text x="210" y="85" text-anchor="middle" font-size="7.5" fill="var(--c-text-4)">Barrière 2</text><text x="376" y="85" text-anchor="middle" font-size="7.5" fill="var(--c-text-4)">Barrière 3</text><text x="459" y="85" text-anchor="middle" font-size="7.5" fill="var(--c-text-4)">Barrière 4</text><!-- Eau souterraine note --><rect x="10" y="100" width="540" height="22" rx="5" fill="rgba(22,163,74,.08)" stroke="rgba(22,163,74,.3)" stroke-width="1"/><text x="280" y="115" text-anchor="middle" font-size="9" fill="var(--c-text-3)"><tspan font-weight="700" fill="#15803D">Eau souterraine : </tspan>souvent désinfection seule (Cl₂) — si qualité constante et nappe protégée</text></svg>',
                },
                flashcards: [
                  { q: 'Qu\'est-ce que le principe des barrières multiples en traitement de l\'eau ?', r: 'Chaque étape de traitement constitue une barrière partielle. L\'accumulation de barrières garantit la qualité finale même si l\'une est défaillante', expl: 'Exemple : coagulation (3 log) + filtration (2 log) + chloration (3 log) = 8 log de réduction des pathogènes. Si une barrière faillit, les autres compensent.' },
                  { q: 'Quelle filière pour une eau souterraine contenant du fer et du manganèse ?', r: 'Aération (oxydation du Fe²⁺ en Fe³⁺ insoluble) + filtration sur sable (rétention des flocs de fer/manganèse) + désinfection', expl: 'Le fer et le manganèse donnent une eau colorée (brunâtre), au goût métallique et favorisent le développement bactérien dans le réseau.' },
                  { q: 'Quelle est la filière complète pour une eau de surface ?', r: 'Coagulation → floculation → décantation → filtration sur sable → désinfection (± charbon actif si micropollants)', expl: 'Chaque étape traite un type de pollution spécifique : la coagulation/décantation élimine les MES et colloïdes ; la filtration affine ; la désinfection tue les germes.' },
                  { q: 'Quel traitement pour une eau contenant des pesticides ou PFAS ?', r: 'Adsorption sur charbon actif en grains (CAG) ou nanofiltration/osmose inverse (procédés membranaires)', expl: 'Le chlore et le sable n\'éliminent pas les micropolluants organiques. Le CAG adsorbe les molécules organiques ; les membranes les rejettent physiquement.' },
                  { q: 'Quel texte réglementaire fixe les procédés de traitement autorisés pour l\'eau potable ?', r: 'Arrêté du 11 janvier 2007 relatif aux limites et références de qualité de l\'eau destinée à la consommation humaine', expl: 'Cet arrêté liste les réactifs autorisés (coagulants, désinfectants, correcteurs de pH) et leurs doses maximales pour la production d\'eau potable.' },
                  { q: 'Pourquoi une eau de mer traitée par osmose inverse nécessite-t-elle une reminéralisation ?', r: 'L\'OI élimine quasiment tous les ions → eau déminéralisée, agressive pour les canalisations et déséquilibrée pour la santé. Reminéralisation = CO₂ + calcaire', expl: 'L\'eau déminéralisée (conductivité < 10 µS/cm) est très agressive (indice de Langelier très négatif). Elle dissout les canalisations et a un goût "plat".' },
                ],
              },
              {
                id: 'tep-2',
                titre: 'Coagulation, floculation et décantation',
                fiche: {
                  intro: 'La coagulation-floculation-décantation est la première grande étape de la filière complète. Elle élimine les particules en suspension, les colloïdes et une partie de la matière organique dissoute.',
                  points: [
                    '⚡ Coagulation : les particules naturelles portent une charge négative (répulsion mutuelle). On ajoute un coagulant chargé positivement pour neutraliser cette charge',
                    '🧪 Coagulants courants : sulfate d\'aluminium Al₂(SO₄)₃ · 18H₂O ("alun"), chlorure ferrique FeCl₃, poly-chlorure d\'aluminium (PAC)',
                    '🌀 Floculation : agitation douce (palettes) → les particules déstabilisées s\'agglomèrent en flocs visibles (flocons)',
                    '⬇️ Décantation : les flocs sédimentent par gravité. Types : statique (bassin rectangulaire), lamellaire (accélérée par lamelles inclinées)',
                    '📐 pH optimal de coagulation : aluminium : pH 6,0–7,5 | Fer : pH 5,0–8,5 (plus large, plus robuste)',
                    '🧫 Jar-test : test de laboratoire pour déterminer la dose optimale de coagulant et le pH optimal',
                    '🔬 Adjuvants : polyélectrolytes anioniques ou cationiques pour renforcer les flocs et accélérer la décantation',
                    '🟤 Boues produites : 0,5–5 % du volume traité. Gestion : déshydratation (filtre-presse, centrifugeuse) + valorisation/décharge',
                  ],
                  formules: [
                    'Al₂(SO₄)₃ + 6H₂O → 2Al(OH)₃↓ + 3SO₄²⁻ + 6H⁺ — réaction de coagulation à l\'aluminium',
                    'Dose coagulant ≈ 10–100 mg/L selon turbidité et COT de l\'eau brute',
                  ],
                  retenir: 'Coagulation = neutralisation des charges. Floculation = agglomération. Décantation = séparation par gravité. pH optimal Al : 6–7,5. Dosage par jar-test.',
                  schema: '<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto"><text x="240" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">COAGULATION-FLOCULATION-DÉCANTATION</text><!-- Step 1: particules chargées --><rect x="20" y="25" width="120" height="70" rx="8" fill="rgba(239,68,68,.08)" stroke="rgba(239,68,68,.4)" stroke-width="1.5"/><text x="80" y="42" text-anchor="middle" font-size="9" font-weight="700" fill="#DC2626">COAGULATION</text><text x="80" y="55" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Ajout Al³⁺ ou Fe³⁺</text><text x="80" y="66" text-anchor="middle" font-size="8" fill="var(--c-text-3)">→ neutralise les charges</text><text x="80" y="77" text-anchor="middle" font-size="8" fill="var(--c-text-3)">— agitation rapide</text><text x="80" y="88" text-anchor="middle" font-size="8" fill="#DC2626" font-weight="600">pH 6–7,5 (Al)</text><!-- Step 2 --><rect x="180" y="25" width="120" height="70" rx="8" fill="rgba(217,119,6,.10)" stroke="rgba(217,119,6,.45)" stroke-width="1.5"/><text x="240" y="42" text-anchor="middle" font-size="9" font-weight="700" fill="#B45309">FLOCULATION</text><text x="240" y="55" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Agitation lente</text><text x="240" y="66" text-anchor="middle" font-size="8" fill="var(--c-text-3)">→ micro-flocs</text><text x="240" y="77" text-anchor="middle" font-size="8" fill="var(--c-text-3)">→ macro-flocs visibles</text><text x="240" y="88" text-anchor="middle" font-size="8" fill="#B45309" font-weight="600">Polymère si besoin</text><!-- Step 3 --><rect x="340" y="25" width="120" height="70" rx="8" fill="rgba(22,163,74,.10)" stroke="rgba(22,163,74,.45)" stroke-width="1.5"/><text x="400" y="42" text-anchor="middle" font-size="9" font-weight="700" fill="#15803D">DÉCANTATION</text><text x="400" y="55" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Flocs tombent</text><text x="400" y="66" text-anchor="middle" font-size="8" fill="var(--c-text-3)">par gravité</text><text x="400" y="77" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Eau clarifiée en surface</text><text x="400" y="88" text-anchor="middle" font-size="8" fill="#15803D" font-weight="600">Boues extraites</text><!-- Arrows --><line x1="140" y1="60" x2="178" y2="60" stroke="#94A3B8" stroke-width="2" marker-end="url(#arr5)"/><line x1="300" y1="60" x2="338" y2="60" stroke="#94A3B8" stroke-width="2" marker-end="url(#arr5)"/><!-- Jar test --><rect x="20" y="112" width="440" height="55" rx="8" fill="rgba(37,99,235,.07)" stroke="rgba(37,99,235,.3)" stroke-width="1"/><text x="240" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="#1D4ED8">🧪 Jar-test — Optimisation du dosage</text><text x="240" y="142" text-anchor="middle" font-size="9" fill="var(--c-text-3)">6 béchers en parallèle · doses croissantes · agitation identique</text><text x="240" y="156" text-anchor="middle" font-size="9" fill="var(--c-text-3)">Mesure turbidité résiduelle → choisir la dose optimale</text></svg>',
                },
                flashcards: [
                  { q: 'Pourquoi les particules en suspension dans l\'eau naturelle ne décantent-elles pas spontanément ?', r: 'Elles portent une charge négative en surface → répulsion électrostatique mutuelle → maintien en suspension stable (colloïdes)', expl: 'Cette stabilité colloïdale est rompue par le coagulant (chargé positivement). Une fois déstabilisées, les particules s\'agglomèrent (floculation).' },
                  { q: 'Quels sont les deux coagulants minéraux les plus utilisés ?', r: 'Sulfate d\'aluminium Al₂(SO₄)₃ ("alun") et chlorure ferrique FeCl₃', expl: 'Le chlorure ferrique est plus efficace sur une plage de pH plus large et à l\'eau froide. L\'aluminium est moins coûteux mais plus sensible au pH.' },
                  { q: 'Quel est le pH optimal de coagulation pour les sels d\'aluminium ?', r: 'pH 6,0 à 7,5. En dehors de cette plage, la coagulation est inefficace (Al reste en solution)', expl: 'À pH > 8, l\'aluminium forme Al(OH)₄⁻ (soluble). À pH < 5, il reste Al³⁺ (soluble). Seule la forme Al(OH)₃ précipite et coagule.' },
                  { q: 'À quoi sert le jar-test ?', r: 'Test de laboratoire simulant la coagulation-floculation pour déterminer la dose optimale de coagulant et le pH optimal pour une eau donnée', expl: 'On teste plusieurs doses dans 6 béchers en parallèle. On mesure turbidité résiduelle et pH après floculation et décantation. Essentiel pour régler la station.' },
                  { q: 'Quelle est la différence entre un décanteur statique et lamellaire ?', r: 'Décanteur statique : grand bassin horizontal lent. Décanteur lamellaire : lamelles inclinées qui raccourcissent la distance de sédimentation → même surface, débit 5–10× plus élevé', expl: 'Les décanteurs lamellaires sont privilégiés dans les nouvelles installations ou pour augmenter la capacité sans agrandir le génie civil.' },
                  { q: 'Que sont les boues de décantation et comment sont-elles traitées ?', r: 'Flocs sédimentés (Al(OH)₃ + matières organiques + MES). Épaississement + déshydratation (filtre-presse) + mise en décharge ou valorisation agricole (si conforme)', expl: 'Les boues de potabilisation sont souvent valorisées comme amendement agricole si leur composition le permet. Sinon : installation de stockage de déchets non dangereux (ISDND).' },
                ],
              },
              {
                id: 'tep-3',
                titre: 'Filtration sur sable et charbon actif en grains (CAG)',
                fiche: {
                  intro: 'La filtration affine le traitement après décantation et adsorbe les micropolluants organiques. Le charbon actif est la barrière indispensable contre les pesticides et les substances émergentes.',
                  points: [
                    '🏖️ Filtration rapide sur sable : vitesse 5–10 m/h. Retient flocs résiduels, MES, microorganismes. Doit être précédée de coagulation',
                    '🐢 Filtration lente sur sable : vitesse 0,1–0,3 m/h. Se forme un bio-film (schmutzdecke) = couche biologique active très épurante. Pas besoin de coagulation préalable',
                    '⬛ Charbon Actif en Grains (CAG) : adsorption des micropolluants organiques (pesticides, HAP, goûts, odeurs, PFAS partiellement)',
                    '   Surface spécifique 800–1 200 m²/g → très grande capacité d\'adsorption',
                    '   Durée de vie : 2–5 ans. Régénération : thermique (900 °C) ou biologique (biofilm)',
                    '⬛ Charbon Actif en Poudre (CAP) : ajouté directement en suspension. Usage ponctuel (pics de pesticides, algues). Éliminé à la décantation',
                    '🔄 Contre-lavage des filtres : eau + air injectés à contre-courant toutes les 24–72 h → décolmatage. Eau de lavage = effluent à traiter',
                    '📊 Contrôle : mesure de la turbidité filtrée (< 0,5 NTU en sortie de filtre), pertes de charge, durée de cycle',
                  ],
                  formules: [
                    'EBCT (Empty Bed Contact Time) = volume CAG / débit — temps de contact minimum pour adsorption efficace ≥ 10–15 min',
                    'Taux de chargement filtration rapide : 5–10 m/h',
                  ],
                  retenir: 'Filtration rapide = clarification mécanique. CAG = adsorption micropollants (pesticides, goûts/odeurs). EBCT ≥ 10 min pour efficacité du CAG.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Filtration rapide vs CAG — comparatif</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><div style="background:rgba(14,165,233,.08);border:1.5px solid rgba(14,165,233,.4);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#0369A1;margin-bottom:6px">🏗️ Filtration rapide sur sable</div><div style="display:flex;flex-direction:column;gap:3px;font-size:9.5px;color:var(--c-text-3)"><div>• Vitesse : 5–10 m/h</div><div>• Élimine : MES, flocs résiduels, turbidité</div><div>• Backwash : 1–2 fois/jour</div><div>• Efficacité : clarification mécanique</div><div style="color:#0369A1;font-weight:600;margin-top:4px">✅ Indispensable avant désinfection</div></div></div><div style="background:rgba(22,163,74,.08);border:1.5px solid rgba(22,163,74,.4);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#15803D;margin-bottom:6px">⚗️ Charbon Actif en Grains (CAG)</div><div style="display:flex;flex-direction:column;gap:3px;font-size:9.5px;color:var(--c-text-3)"><div>• EBCT : ≥ 10 min (Empty Bed Contact Time)</div><div>• Élimine : pesticides, goûts, odeurs, THM</div><div>• Durée de vie : 2–5 ans → régénération</div><div>• Surface spécifique : 800–1200 m²/g</div><div style="color:#15803D;font-weight:600;margin-top:4px">✅ Indispensable pour micropollants</div></div></div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px 10px"><div style="font-size:10px;font-weight:700;color:var(--c-text);margin-bottom:5px">Mécanisme d\'adsorption sur CAG</div><div style="display:flex;align-items:center;gap:12px;font-size:9px;color:var(--c-text-3)"><div style="text-align:center"><div style="font-size:20px">🧫</div><div>Molécule<br>polluant</div></div><div style="font-size:16px;color:var(--c-text-3)">→</div><div style="text-align:center"><div style="font-size:20px">⬛</div><div>Pores du<br>charbon</div></div><div style="font-size:16px;color:var(--c-text-3)">→</div><div style="text-align:center"><div style="font-size:20px">🔗</div><div>Adsorption<br>physique (VdW)</div></div><div style="font-size:16px;color:var(--c-text-3)">→</div><div style="text-align:center"><div style="font-size:20px">💧</div><div>Eau<br>épurée</div></div></div></div></div>',
                },
                flashcards: [
                  { q: 'Quelle est la différence entre filtration rapide et filtration lente sur sable ?', r: 'Rapide (5–10 m/h) : traitement physique, retient les flocs. Lente (0,1–0,3 m/h) : biofilm (schmutzdecke) très épurant, élimine aussi les germes', expl: 'La filtration lente est très efficace mais nécessite de grandes surfaces. La filtration rapide est plus compacte mais nécessite une coagulation préalable.' },
                  { q: 'Pourquoi utilise-t-on du charbon actif en grains (CAG) ?', r: 'Pour adsorber les micropolluants organiques (pesticides, HAP, goûts, odeurs) que les autres traitements n\'éliminent pas', expl: 'La très grande surface spécifique du CAG (jusqu\'à 1 200 m²/g) permet d\'adsorber des molécules organiques à très faibles concentrations (ng/L à µg/L).' },
                  { q: 'Qu\'est-ce que l\'EBCT (Empty Bed Contact Time) ?', r: 'Temps de contact entre l\'eau et le CAG = volume du filtre CAG / débit. Minimum requis : 10–15 minutes pour une adsorption efficace', expl: 'Un EBCT trop court : l\'eau passe trop vite, les molécules n\'ont pas le temps d\'être adsorbées. On dimensionne la hauteur du lit en conséquence.' },
                  { q: 'Quelle est la différence entre CAG et CAP ?', r: 'CAG = filtre permanent (2–5 ans, régénérable). CAP = poudre injectée en suspension, usage ponctuel, retirée à la décantation', expl: 'Le CAP est utilisé pour des pics saisonniers (prolifération algale → goûts/odeurs) ou des pollutions accidentelles. Il est moins coûteux ponctuellement mais non régénérable.' },
                  { q: 'Comment se décolmate un filtre à sable rapide ?', r: 'Contre-lavage : injection d\'eau + air à contre-courant (expansionfluide du lit) toutes les 24–72 h selon le colmatage', expl: 'L\'eau de lavage (très chargée) est collectée et recyclée en tête de filière. Elle ne peut pas être rejetée directement dans le milieu naturel.' },
                  { q: 'Qu\'est-ce que le "schmutzdecke" dans la filtration lente ?', r: 'Biofilm biologique qui se forme à la surface du sable lent après quelques semaines : communauté de bactéries, algues, protozoaires très efficace pour épurer l\'eau', expl: 'La formation du schmutzdecke (terme allemand = "peau sale") prend 2–6 semaines. C\'est une technologie très ancienne mais encore utilisée pour des petites communautés.' },
                ],
              },
              {
                id: 'tep-4',
                titre: 'Désinfection — chlore, UV, ozone',
                fiche: {
                  intro: 'La désinfection est la dernière barrière contre les pathogènes. Chaque agent désinfectant a ses avantages et limites. La chloration maintient un résiduel protecteur dans le réseau.',
                  points: [
                    '🟡 Chloration : agent le plus utilisé en France. Formes : Cl₂ gazeux (usines), hypochlorite de sodium NaClO, dioxyde de chlore ClO₂',
                    '   Chlore résiduel libre maintenu en distribution : 0,05–0,3 mg/L (arrêté 11/01/2007)',
                    '   CT minimum requis : Cl₂ × temps (mg·min/L). Ex : CT = 20 pour E. coli à pH 7',
                    '⚠️ Sous-produits de chloration (SPD) : trihalométhanes (THM) < 100 µg/L | acides haloacétiques (AHA) < 60 µg/L. Formés par réaction chlore × matières organiques',
                    '🔵 UV (ultraviolets) : longueur d\'onde 254 nm. Efficace contre Cryptosporidium, Giardia et virus. Dose minimale : 40 mJ/cm². Pas de résiduel dans le réseau → post-chloration obligatoire',
                    '🟣 Ozone O₃ : puissant oxydant, détruit virus, pesticides, micropollants. Dose 1–3 mg/L. Demi-vie très courte → résiduel nul → post-chloration obligatoire',
                    '🧬 Ozone → peut former des bromates BrO₃⁻ (cancérogène possible) si eau contient du bromure Br⁻ — norme bromates : 10 µg/L',
                    '📊 Combinaisons courantes : O₃ + CAG + Cl₂ | UV + Cl₂ (eau souterraine sans MO)',
                  ],
                  formules: [
                    'CT (mg·min/L) = C_désinfectant (mg/L) × t_contact (min) — efficacité de la désinfection',
                    'Log-inactivation = f(CT, T°, pH) — se lit sur les tables CT de l\'OMS',
                  ],
                  retenir: 'Chlore = désinfectant + résiduel réseau. UV = efficace Cryptosporidium, pas de résiduel. Ozone = puissant mais pas de résiduel. THM < 100 µg/L.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Désinfectants — comparatif</div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:10px"><thead><tr><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Désinfectant</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Bactéries</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Virus</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Cryptos.</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Résiduel</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Sous-produits</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:700;color:#0369A1">💧 Chlore (Cl₂)</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓✓</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓</td><td style="padding:5px 7px;text-align:center;background:rgba(239,68,68,.10);color:#A82018;font-weight:700">✗</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓✓</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">THM &lt; 100 µg/L, HAA</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:700;color:#B45309">☀️ UV (254 nm)</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓✓</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓✓</td><td style="padding:5px 7px;text-align:center;background:rgba(239,68,68,.10);color:#A82018;font-weight:700">✗</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Aucun</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:700;color:#7C3AED">🔵 Ozone (O₃)</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓✓</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓✓</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓</td><td style="padding:5px 7px;text-align:center;background:rgba(239,68,68,.10);color:#A82018;font-weight:700">✗</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Bromates si Br⁻</td></tr><tr><td style="padding:5px 7px;font-weight:700;color:#15803D">🟡 Chloramine</td><td style="padding:5px 7px;text-align:center;background:rgba(217,119,6,.10);color:#886000;font-weight:700">✓✓</td><td style="padding:5px 7px;text-align:center;background:rgba(217,119,6,.10);color:#886000;font-weight:700">✓</td><td style="padding:5px 7px;text-align:center;background:rgba(239,68,68,.10);color:#A82018;font-weight:700">✗</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700">✓✓</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Moins de THM</td></tr></tbody></table></div></div>',
                },
                flashcards: [
                  { q: 'Pourquoi maintient-on un chlore résiduel dans le réseau de distribution ?', r: 'Pour éviter la recontamination bactériologique entre la station et le robinet. Minimum 0,05 mg/L aux points les plus éloignés', expl: 'Le réseau peut être contaminé par des entrées d\'eau non traitée (joints, fuites, travaux). Le chlore résiduel tue les bactéries qui pourraient entrer.' },
                  { q: 'Qu\'est-ce que le concept CT en désinfection ?', r: 'CT = Concentration du désinfectant (mg/L) × Temps de contact (min). La valeur CT nécessaire dépend du pathogène, de la T° et du pH', expl: 'Pour inactiver 3 log de Giardia à 10 °C, pH 7 : CT chlore ≈ 165 mg·min/L. Pour Cryptosporidium : CT chlore >> 1 000 (donc UV ou O₃ obligatoire).' },
                  { q: 'Quels sont les sous-produits de chloration (SPD) et leur norme ?', r: 'Trihalométhanes (THM) : < 100 µg/L. Acides haloacétiques (AHA) : < 60 µg/L. Formés par réaction chlore + matière organique naturelle', expl: 'Pour limiter les SPD : réduire la dose de chlore et les matières organiques (filtration sur CAG) avant chloration, et éviter le surchlorage.' },
                  { q: 'Pourquoi l\'UV est-il particulièrement adapté pour Cryptosporidium ?', r: 'Les UV endommagent l\'ADN des oocystes de Cryptosporidium de façon irréversible. Ils sont résistants au chlore mais très sensibles aux UV à 254 nm', expl: 'Dose minimale : 10 mJ/cm² pour 2 log de réduction. 40 mJ/cm² pour 3 log. L\'OFB recommande 40 mJ/cm² comme minimum pour l\'eau potable.' },
                  { q: 'Quel sous-produit dangereux peut être formé lors d\'une ozonation ?', r: 'Les bromates BrO₃⁻ (cancérogène présumé), formés si l\'eau brute contient du bromure Br⁻. Norme AEP : 10 µg/L', expl: 'Les eaux littorales et certaines nappes contiennent naturellement des bromures. L\'ozonation les oxyde en bromates. Parade : réduire la dose d\'ozone ou prétraiter.' },
                  { q: 'Quelle combinaison de traitements est la plus efficace contre les micropolluants et les pathogènes ?', r: 'Ozonation + filtration sur CAG + post-chloration : élimine micropollants (O₃ + CAG), pathogènes (O₃ + Cl₂) et maintient un résiduel (Cl₂)', expl: 'Cette filière est très efficace mais coûteuse (investissement O₃ élevé). Réservée aux grandes usines ou aux ressources de mauvaise qualité.' },
                ],
              },
              {
                id: 'tep-5',
                titre: 'Traitements avancés — nanofiltration et osmose inverse',
                fiche: {
                  intro: 'Les procédés membranaires permettent d\'éliminer les polluants que les traitements classiques ne peuvent pas traiter : PFAS, nitrates, salinité. Ils sont de plus en plus utilisés face aux pollutions émergentes.',
                  points: [
                    '🔬 Hiérarchie des membranes (du moins au plus serré) : MF (0,1–10 µm) > UF (0,01–0,1 µm) > NF (0,001–0,01 µm) > OI (< 0,001 µm)',
                    '🔵 Microfiltration (MF) et Ultrafiltration (UF) : éliminent bactéries, parasites, virus (UF). Pression 0,5–4 bar. Remplacent avantageusement la filtration sur sable',
                    '🟡 Nanofiltration (NF) : élimine pesticides, PFAS, dureté (ions divalents Ca²⁺, Mg²⁺), couleur. Pression 5–20 bar. Rétention sélective',
                    '🔴 Osmose inverse (OI) : élimine quasi tout (sels, PFAS, nitrates, métaux, virus). Pression 15–80 bar. Taux de conversion 60–80 %',
                    '🌊 OI dessalement : pression > 60 bar pour l\'eau de mer (TDS ≈ 35 000 mg/L). Très énergivore (3–10 kWh/m³)',
                    '⚠️ Concentrat : 20–40 % du volume traité, très chargé en polluants retenus → évacuation obligatoire (milieu naturel si autorisation, égout, réinjection)',
                    '🔧 CIP (Cleaning In Place) : nettoyage chimique des membranes (acide, base, biocide) tous les quelques mois contre l\'entartrage et le biofouling',
                    '💧 Perméat déminéralisé : reminéralisation obligatoire avant distribution (CO₂ + calcaire) pour corriger l\'équilibre calco-carbonique',
                  ],
                  formules: [
                    'Taux de conversion r = Q_perméat / Q_alimentation × 100 (%) — ex : r = 75 % → 25 % de concentrat',
                    'Flux membranaire J = Q_perméat / Surface (L/h/m² ou LMH)',
                  ],
                  retenir: 'OI = élimination totale mais énergivore + concentrat. NF = sélectif (dureté, pesticides). Toujours reminéraliser le perméat. Taux conversion OI : 60–80 %.',
                  schema: '<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">PROCÉDÉS MEMBRANAIRES — TAILLE DES PORES</text><!-- Scale bar --><rect x="20" y="30" width="460" height="16" rx="0" fill="none" stroke="var(--c-border)" stroke-width="1"/><rect x="20" y="30" width="115" height="16" rx="0" fill="rgba(239,68,68,.2)"/><rect x="135" y="30" width="115" height="16" rx="0" fill="rgba(217,119,6,.2)"/><rect x="250" y="30" width="115" height="16" rx="0" fill="rgba(22,163,74,.2)"/><rect x="365" y="30" width="115" height="16" rx="0" fill="rgba(14,165,233,.2)"/><text x="77" y="42" text-anchor="middle" font-size="8.5" font-weight="700" fill="#A82018">Osmose Inverse</text><text x="192" y="42" text-anchor="middle" font-size="8.5" font-weight="700" fill="#B45309">Nanofiltration</text><text x="307" y="42" text-anchor="middle" font-size="8.5" font-weight="700" fill="#15803D">Ultrafiltration</text><text x="422" y="42" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0369A1">Microfiltration</text><!-- Pore sizes --><text x="77" y="62" text-anchor="middle" font-size="8" fill="var(--c-text-3)">&lt; 0,001 µm</text><text x="192" y="62" text-anchor="middle" font-size="8" fill="var(--c-text-3)">0,001–0,01 µm</text><text x="307" y="62" text-anchor="middle" font-size="8" fill="var(--c-text-3)">0,01–0,1 µm</text><text x="422" y="62" text-anchor="middle" font-size="8" fill="var(--c-text-3)">0,1–10 µm</text><!-- What they remove --><text x="77" y="77" text-anchor="middle" font-size="7.5" fill="#A82018">ions, sel, tout</text><text x="192" y="77" text-anchor="middle" font-size="7.5" fill="#B45309">dureté, pesticides</text><text x="307" y="77" text-anchor="middle" font-size="7.5" fill="#15803D">virus, protéines</text><text x="422" y="77" text-anchor="middle" font-size="7.5" fill="#0369A1">bactéries, MES</text><!-- OI detailed --><rect x="20" y="95" width="220" height="60" rx="8" fill="rgba(239,68,68,.07)" stroke="rgba(239,68,68,.35)" stroke-width="1"/><text x="130" y="112" text-anchor="middle" font-size="9.5" font-weight="700" fill="#DC2626">Osmose Inverse — points clés</text><text x="130" y="125" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">Pression : 10–80 bar · Conversion : 60–80 %</text><text x="130" y="137" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">Concentrat : 20–40 % → élimination</text><text x="130" y="149" text-anchor="middle" font-size="8.5" fill="#DC2626" font-weight="600">Reminéralisation perméat obligatoire</text><!-- NF detailed --><rect x="260" y="95" width="220" height="60" rx="8" fill="rgba(217,119,6,.07)" stroke="rgba(217,119,6,.35)" stroke-width="1"/><text x="370" y="112" text-anchor="middle" font-size="9.5" font-weight="700" fill="#B45309">Nanofiltration — points clés</text><text x="370" y="125" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">Pression : 5–15 bar · sélectif Ca²⁺/Mg²⁺</text><text x="370" y="137" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">Élimine pesticides + dureté</text><text x="370" y="149" text-anchor="middle" font-size="8.5" fill="#B45309" font-weight="600">Eau adoucie + déminéralisée partielle</text></svg>',
                },
                flashcards: [
                  { q: 'Dans quel ordre croissant de "finesse" classe-t-on les membranes ?', r: 'MF < UF < NF < OI (du moins au plus serré). MF laisse passer les bactéries, OI retient les ions', expl: 'La sélectivité augmente avec la pression nécessaire. MF : 0,5 bar. OI eau douce : 15–25 bar. OI eau de mer : 60–80 bar.' },
                  { q: 'Quelle membrane est utilisée pour éliminer les PFAS de l\'eau potable ?', r: 'La nanofiltration (NF) ou l\'osmose inverse (OI). La NF retient les PFAS > C8. L\'OI retient pratiquement tous les PFAS', expl: 'Les PFAS à chaîne courte (C4, C6) peuvent traverser certaines membranes NF. L\'OI est plus sûre mais plus énergivore et produit plus de concentrat.' },
                  { q: 'Qu\'est-ce que le concentrat et comment est-il géré ?', r: 'Volume d\'eau rejeté (20–40 %) très concentré en polluants retenus par la membrane. Géré par rejet au milieu naturel (autorisation), réseau d\'assainissement ou réinjection', expl: 'Le concentrat pose un problème environnemental : rejeter des PFAS ou des nitrates concentrés dans le milieu peut aggraver la pollution à la source.' },
                  { q: 'Pourquoi doit-on reminéraliser l\'eau après osmose inverse ?', r: 'L\'OI produit une eau très déminéralisée (conductivité < 50 µS/cm), agressive et instable. La reminéralisation (CO₂ + calcaire) rétablit l\'équilibre calco-carbonique', expl: 'Une eau trop douce corrode les canalisations (cuivre, acier) et a un goût "plat" désagréable. L\'OMS recommande une minéralisation minimale après traitement par membranes.' },
                  { q: 'Quelle est la consommation énergétique typique de l\'osmose inverse pour l\'eau douce ?', r: '0,3–1 kWh/m³ pour l\'eau douce (nitrates, pesticides). 3–10 kWh/m³ pour le dessalement de l\'eau de mer', expl: 'L\'OI est l\'étape la plus énergivore d\'une filière de potabilisation. La récupération d\'énergie sur le concentrat (échangeurs de pression) réduit la consommation du dessalement.' },
                  { q: 'Qu\'est-ce que le CIP (Cleaning In Place) des membranes ?', r: 'Nettoyage chimique in situ des membranes : acide (détartrage), base (matières organiques), biocide (biofilm). Périodicité : mensuelle à semestrielle', expl: 'Sans CIP régulier, les membranes se colmatent (fouling) par dépôts calcaires, biofilm ou colloïdes. Le flux chute et la consommation d\'énergie augmente.' },
                ],
              },
            ],
          },

          /* ── Assainissement collectif ── */
          {
            id: 'assainissement',
            name: 'Assainissement collectif',
            ico: '🏭',
            color: '#5C4A1E',
            colorl: '#F5EFE0',
            chapitres: [
              {
                id: 'ac-1',
                titre: 'Réseaux d\'assainissement — séparatifs et unitaires',
                fiche: {
                  intro: 'Le réseau d\'assainissement collecte les eaux usées domestiques et/ou les eaux pluviales pour les acheminer vers la STEP. Le choix du système conditionne les performances épuratoires et les coûts d\'exploitation.',
                  points: [
                    '🔵 Réseau séparatif : deux canalisations distinctes — EU (eaux usées) vers STEP, EP (eaux pluviales) vers milieu naturel ou bassin de rétention',
                    '🟤 Réseau unitaire : une seule canalisation collectant EU + EP. Avantage : investissement initial réduit. Inconvénient : surcharge hydraulique en pluie → déversements',
                    '🟡 Réseau pseudo-séparatif : séparatif de conception mais avec mauvais branchements (EP dans EU). Très fréquent dans le parc existant',
                    '🚨 Déversoir d\'orage (DO) : ouvrage sur réseau unitaire qui déleste le trop-plein vers le milieu naturel en cas de pluie. Réglementé (arrêté 21/07/2015 si Q > 120 m³/h)',
                    '📐 Règles de conception : pente minimale 2 ‰ (EU gravitaire) — vitesse d\'auto-curage ≥ 0,6 m/s — DN minimal 200 mm pour EU',
                    '🔍 Diagnostic réseau : ITV (inspection télévisée), test colorimétrique, mesures de débit. Permet de détecter les eaux parasites',
                    '💧 Eaux parasites permanentes (EP) : eau souterraine infiltrée dans les réseaux EU → surdimensionnement STEP et dilution des boues',
                    '🏗️ Zonage d\'assainissement : document d\'urbanisme définissant les zones raccordées au réseau collectif vs. ANC',
                  ],
                  formules: [
                    'Pente minimale auto-curage EU : I ≥ 2 ‰ pour DN200, à vérifier avec Manning-Strickler',
                    'Vitesse d\'auto-curage : V ≥ 0,6 m/s à pleine section (EU), V ≥ 0,3 m/s à débit de pointe (EP)',
                  ],
                  retenir: 'Séparatif = 2 réseaux (EU + EP). Unitaire = 1 réseau + déversoirs d\'orage. Auto-curage : V ≥ 0,6 m/s, pente ≥ 2 ‰. Diagnostiquer les eaux parasites.',
                  schema: '<svg viewBox="0 0 500 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><defs><marker id="aw" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 Z" fill="#94A3B8"/></marker></defs><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">SYSTÈMES D\'ASSAINISSEMENT COLLECTIF</text><!-- Séparatif --><rect x="10" y="25" width="225" height="120" rx="8" fill="rgba(22,163,74,.06)" stroke="rgba(22,163,74,.4)" stroke-width="1.5"/><text x="122" y="40" text-anchor="middle" font-size="10" font-weight="800" fill="#15803D">SYSTÈME SÉPARATIF</text><!-- EU pipe --><rect x="25" y="50" width="195" height="22" rx="4" fill="rgba(239,68,68,.15)" stroke="rgba(239,68,68,.5)" stroke-width="1.2"/><text x="65" y="65" font-size="8.5" fill="#DC2626" font-weight="700">EU — Eaux Usées</text><text x="180" y="65" font-size="8" fill="var(--c-text-3)">→ STEP</text><!-- EP pipe --><rect x="25" y="80" width="195" height="22" rx="4" fill="rgba(14,165,233,.15)" stroke="rgba(14,165,233,.5)" stroke-width="1.2"/><text x="65" y="95" font-size="8.5" fill="#0369A1" font-weight="700">EP — Eaux Pluviales</text><text x="180" y="95" font-size="8" fill="var(--c-text-3)">→ Milieu</text><text x="122" y="118" text-anchor="middle" font-size="8" fill="var(--c-text-3)">✅ Protection milieu · ❌ Coût doublement</text><text x="122" y="130" text-anchor="middle" font-size="8" fill="var(--c-text-3)">⚠️ Risque IEP (intrusions eaux parasites)</text><!-- Unitaire --><rect x="265" y="25" width="225" height="120" rx="8" fill="rgba(217,119,6,.06)" stroke="rgba(217,119,6,.4)" stroke-width="1.5"/><text x="377" y="40" text-anchor="middle" font-size="10" font-weight="800" fill="#B45309">SYSTÈME UNITAIRE</text><!-- Single pipe --><rect x="280" y="50" width="195" height="22" rx="4" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.5)" stroke-width="1.2"/><text x="377" y="65" text-anchor="middle" font-size="8.5" fill="#6D28D9" font-weight="700">EU + EP — 1 seul réseau</text><!-- Overflow --><rect x="280" y="80" width="90" height="22" rx="4" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.5)" stroke-width="1.2"/><text x="325" y="95" text-anchor="middle" font-size="8" fill="#DC2626" font-weight="700">→ STEP</text><rect x="380" y="80" width="95" height="22" rx="4" fill="rgba(14,165,233,.12)" stroke="rgba(14,165,233,.5)" stroke-width="1.2"/><text x="427" y="95" text-anchor="middle" font-size="8" fill="#0369A1" font-weight="700">D.O. → Milieu</text><text x="377" y="118" text-anchor="middle" font-size="8" fill="var(--c-text-3)">✅ 1 seul réseau (économique)</text><text x="377" y="130" text-anchor="middle" font-size="8" fill="var(--c-text-3)">❌ Déversoirs d\'orage (DO) polluants</text><!-- Auto-curage --><rect x="10" y="158" width="480" height="25" rx="5" fill="rgba(37,99,235,.07)" stroke="rgba(37,99,235,.3)" stroke-width="1"/><text x="250" y="174" text-anchor="middle" font-size="9" fill="var(--c-text-3)"><tspan font-weight="700" fill="#1D4ED8">Auto-curage : </tspan>V ≥ 0,6 m/s · Pente ≥ 2 ‰ · Section pleine ≤ 80 %</text></svg>',
                },
                flashcards: [
                  { q: 'Quelle est la différence entre réseau séparatif et unitaire ?', r: 'Séparatif : 2 réseaux distincts (EU vers STEP, EP vers milieu). Unitaire : 1 seul réseau (EU+EP) avec déversoirs d\'orage en cas de pluie', expl: 'Le réseau séparatif protège mieux le milieu naturel (pas de déversement d\'EU) mais est plus coûteux à construire. La majorité des villes françaises ont un réseau unitaire historique.' },
                  { q: 'Qu\'est-ce qu\'un déversoir d\'orage (DO) ?', r: 'Ouvrage sur réseau unitaire qui déverse le trop-plein (EU diluées) vers le milieu naturel lorsque le débit dépasse la capacité de transport', expl: 'Les DO sont réglementés depuis l\'arrêté du 21/07/2015. Obligatoirement équipés d\'autosurveillance si Q > 120 m³/h ou STEP > 2 000 EH.' },
                  { q: 'Pourquoi la pente minimale d\'un collecteur EU est-elle de 2 ‰ ?', r: 'Pour atteindre une vitesse d\'auto-curage ≥ 0,6 m/s à pleine section, évitant les dépôts de matières dans la conduite', expl: 'En dessous de 0,6 m/s, les matières en suspension sédimentent et forment des dépôts qui réduisent la section et créent des nuisances olfactives.' },
                  { q: 'Qu\'est-ce que le réseau pseudo-séparatif ?', r: 'Réseau conçu en séparatif mais avec des mauvais raccordements : EP dans le réseau EU, ou EU dans le réseau EP', expl: 'Très fréquent dans le parc existant. Les EP dans EU surchargent la STEP en pluie. Les EU dans EP polluent directement le milieu naturel sans traitement.' },
                  { q: 'Qu\'est-ce que le zonage d\'assainissement ?', r: 'Document délimitant les zones relevant de l\'assainissement collectif (réseau public) et les zones où l\'ANC est obligatoire', expl: 'C\'est une pièce obligatoire du PLU (Plan Local d\'Urbanisme). Une habitation en zone ANC ne peut pas être raccordée au réseau collectif.' },
                  { q: 'Qu\'est-ce que l\'ITV en diagnostic de réseau ?', r: 'Inspection Télévisée des canalisations : caméra robotisée qui parcourt le réseau et détecte les défauts (fissures, déformations, mauvais branchements)', expl: 'L\'ITV est la technique de référence pour le diagnostic d\'un réseau. Elle est obligatoire pour les STEP > 10 000 EH (autosurveillance réglementaire).' },
                ],
              },
              {
                id: 'ac-2',
                titre: 'Dimensionnement des collecteurs gravitaires',
                fiche: {
                  intro: 'Le dimensionnement d\'un collecteur doit garantir l\'évacuation des débits de pointe (EU et EP) avec une vitesse d\'auto-curage suffisante et un fonctionnement à surface libre.',
                  points: [
                    '📊 Débit moyen EU : Q_moy = dotation (L/j/habitant) × nb habitants / 86 400',
                    '   Dotation courante en France : 150–250 L/j/habitant',
                    '📈 Débit de pointe EU : Q_p = k × Q_moy avec k = 1,5 + 2,5/√Q_moy (Q en L/s)',
                    '   Si Q_moy < 1 L/s : k = 3 (coefficient forfaitaire)',
                    '🌧️ Débit de pointe EP (méthode rationnelle) : Q = C × i × A / 360 (en L/s)',
                    '   C = coefficient de ruissellement (imperméable ≈ 0,9 ; espaces verts ≈ 0,2)',
                    '   i = intensité pluie (mm/h) pour la période de retour choisie (T = 10 ans courant)',
                    '   A = surface du bassin versant (ha)',
                    '📐 Dimensionnement hydraulique : Manning-Strickler Q = K·A·Rh^(2/3)·I^(1/2)',
                    '   Conduite circulaire pleine : A = π·D²/4, Rh = D/4',
                    '   Fonctionnement préconisé : 70–80 % de la section pleine (pas 100 %)',
                    '⚡ Vitesses limites : V_min 0,6 m/s (auto-curage EU) — V_max 3–4 m/s (éviter abrasion)',
                  ],
                  formules: [
                    'Q_moy EU (L/s) = N × dotation / 86400',
                    'k = 1,5 + 2,5/√Q_moy — coefficient de pointe horaire EU',
                    'Q_EP = C × i × A / 360 — méthode rationnelle (L/s)',
                    'Q = K · A · Rh^(2/3) · I^(1/2) — Manning-Strickler',
                  ],
                  retenir: 'Débit de pointe EU = k × Q_moy. Méthode rationnelle pour EP. Manning-Strickler pour dimensionner. Fonctionner à 70–80 % de la section pleine.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Dimensionnement hydraulique des réseaux</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><div style="background:rgba(239,68,68,.08);border:1.5px solid rgba(239,68,68,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#DC2626;margin-bottom:6px">EU — Eaux usées</div><div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 6px 6px 0;padding:6px 10px;font-family:monospace;font-size:11px;font-weight:700;color:var(--c-primary);margin-bottom:6px">Qp = k × Qmoy</div><div style="font-size:9px;color:var(--c-text-3)"><div>k = coefficient de pointe</div><div>k = 1,5 + 2,5/√Qmoy (Qmoy en L/s)</div><div>k ≥ 3 si Qmoy &lt; 1 L/s</div></div></div><div style="background:rgba(14,165,233,.08);border:1.5px solid rgba(14,165,233,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#0369A1;margin-bottom:6px">EP — Méthode rationnelle</div><div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 6px 6px 0;padding:6px 10px;font-family:monospace;font-size:11px;font-weight:700;color:var(--c-primary);margin-bottom:6px">Q = C × i × A</div><div style="font-size:9px;color:var(--c-text-3)"><div>C = coeff. ruissellement (0,2–0,9)</div><div>i = intensité pluie (L/s/ha)</div><div>A = superficie BV (ha)</div></div></div></div><div style="background:rgba(22,163,74,.08);border:1.5px solid rgba(22,163,74,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#15803D;margin-bottom:6px">Manning-Strickler — vitesse en section pleine</div><div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 6px 6px 0;padding:6px 10px;font-family:monospace;font-size:11px;font-weight:700;color:var(--c-primary);margin-bottom:6px">V = Ks × Rh^(2/3) × I^(1/2)</div><div style="font-size:9px;color:var(--c-text-3);display:flex;gap:16px"><div>Ks = coeff. Strickler (béton lisse : 80)<br>Rh = rayon hydraulique = A/P (m)</div><div>I = pente (m/m)<br>Fonctionnement cible : 70–80 % section</div></div></div></div>',
                },
                flashcards: [
                  { q: 'Formule du coefficient de pointe horaire k pour les EU ?', r: 'k = 1,5 + 2,5 / √Q_moy  (Q_moy en L/s). Si Q_moy < 1 L/s : k = 3 forfaitaire', expl: 'Le coefficient de pointe reflète les variations journalières : plus le débit moyen est faible (petite commune), plus les pointes sont proportionnellement importantes.' },
                  { q: 'Formule de la méthode rationnelle pour le débit EP de pointe ?', r: 'Q = C × i × A / 360  (L/s, avec A en ha, i en mm/h)', expl: 'Valide pour les bassins versants < 2 km². Pour les grands bassins : méthodes complexes (Gradex, SHYREG). Le coefficient 360 vient de la conversion d\'unités (1 mm/h sur 1 ha = 2,78 L/s).' },
                  { q: 'Pourquoi dimensionne-t-on un collecteur à 70–80 % de la section pleine et non 100 % ?', r: 'Pour conserver une marge de sécurité face aux incertitudes de débit et éviter la mise en charge (écoulement sous pression)', expl: 'Un collecteur en charge peut provoquer des refoulements dans les caves. La marge à 70–80 % absorbe les pointes non prévues et les apports parasites.' },
                  { q: 'Que vaut le coefficient de ruissellement C pour une surface imperméable ?', r: 'C ≈ 0,9 pour les surfaces imperméables (toits, voiries). C ≈ 0,2 pour les espaces verts. C ≈ 0,6 pour un quartier mixte', expl: 'Le coefficient de ruissellement exprime la fraction des précipitations qui ruisselle (le reste s\'infiltre ou s\'évapore). Il est crucial pour le dimensionnement des réseaux EP.' },
                  { q: 'Pourquoi limiter la vitesse maximale dans un collecteur ?', r: 'Au-delà de 3–4 m/s, l\'eau chargée de sable érode les parois (abrasion). Risque d\'usure prématurée et de fuites', expl: 'En pratique, les grandes pentes (terrain montagneux) peuvent imposer des vitesses élevées. On utilise alors des cascades ou des chutes pour dissiper l\'énergie.' },
                  { q: 'Quelle est la dotation moyenne en eau usée par habitant utilisée en France ?', r: '150 à 250 L/j/habitant selon le contexte (rural, urbain, activités). Valeur courante : 200 L/j/hab', expl: 'La dotation varie selon les habitudes, le niveau de vie et la présence d\'activités industrielles ou commerciales. Elle diminue dans les villes où l\'eau est chère.' },
                ],
              },
              {
                id: 'ac-3',
                titre: 'Stations d\'épuration à boues activées',
                fiche: {
                  intro: 'Les boues activées constituent le procédé d\'épuration biologique le plus répandu pour les STEP urbaines. Les bactéries en suspension dégradent la matière organique en conditions aérobies.',
                  points: [
                    '⚙️ Prétraitements (obligatoires) : dégrillage (≥ 6 mm) + dessablage + déshuilage → protègent les équipements aval',
                    '🟤 Décantation primaire (facultative) : sépare les MES décantables → réduit la charge des bassins biologiques de 30–40 %',
                    '🌀 Bassin d\'aération (réacteur biologique) : mélange boues activées + eaux usées + air (insufflation ou turbines)',
                    '   Bactéries aérobies dégradent la MO : C + O₂ → CO₂ + H₂O + nouvelle biomasse',
                    '📊 Charges : faible charge ≤ 0,15 kg DBO₅/kg MVS/j (meilleure qualité, plus de boues stabilisées) | forte charge ≥ 0,4 kg DBO₅/kg MVS/j',
                    '⬇️ Clarificateur (décanteur secondaire) : séparation eau traitée / boues. Recirculation des boues (50–100 % du Q entrée)',
                    '🔬 Nitrification : NH₄⁺ → NO₂⁻ → NO₃⁻ par bactéries nitrifiantes (Nitrosomonas, Nitrobacter). Besoin O₂ ≥ 2 mg/L',
                    '🔄 Dénitrification : NO₃⁻ → N₂ (gaz) par bactéries dénitrifiantes en conditions anoxies (sans O₂ dissous)',
                    '📏 Paramètres clés : IB (Indice de Boues, mL/g) ≤ 150 bon, AB (âge des boues, jours) = SRT',
                  ],
                  formules: [
                    'Charge massique Cm = Q×DBO₅ / (V×X) [kg DBO₅/kg MVS/j] — critère de dimensionnement',
                    'IB (Indice de Boue) = volume boues sédimentées 30 min (mL) / concentration boues (g/L)',
                    'EH (Equivalent Habitant) = 60 g DBO₅/j — unité de référence de charge polluante',
                  ],
                  retenir: 'Boues activées = bactéries aérobies + aération + clarificateur. Faible charge = meilleure qualité + boues stabilisées. IB ≤ 150 = boues bien décantables.',
                  schema: '<svg viewBox="0 0 540 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:540px;display:block;margin:0 auto"><defs><marker id="ab" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 Z" fill="#94A3B8"/></marker></defs><text x="270" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">BOUES ACTIVÉES — SCHÉMA DE PRINCIPE</text><!-- Pretreatments --><rect x="10" y="28" width="70" height="50" rx="6" fill="rgba(14,165,233,.12)" stroke="rgba(14,165,233,.5)" stroke-width="1.5"/><text x="45" y="47" text-anchor="middle" font-size="9" font-weight="700" fill="#0369A1">Prétraite-</text><text x="45" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#0369A1">ments</text><text x="45" y="72" text-anchor="middle" font-size="7.5" fill="var(--c-text-3)">dégrillage</text><!-- Arrow --><line x1="80" y1="53" x2="110" y2="53" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#ab)"/><!-- Bassin aération --><rect x="110" y="28" width="150" height="50" rx="6" fill="rgba(22,163,74,.12)" stroke="rgba(22,163,74,.5)" stroke-width="1.5"/><text x="185" y="47" text-anchor="middle" font-size="9" font-weight="700" fill="#15803D">Bassin d\'aération</text><text x="185" y="60" text-anchor="middle" font-size="8" fill="var(--c-text-3)">bactéries + O₂ → dégradation</text><text x="185" y="72" text-anchor="middle" font-size="8" fill="#15803D">MBour = Mc / MES</text><!-- Arrow --><line x1="260" y1="53" x2="290" y2="53" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#ab)"/><!-- Clarificateur --><rect x="290" y="28" width="130" height="50" rx="6" fill="rgba(14,165,233,.12)" stroke="rgba(14,165,233,.5)" stroke-width="1.5"/><text x="355" y="47" text-anchor="middle" font-size="9" font-weight="700" fill="#0369A1">Clarificateur</text><text x="355" y="60" text-anchor="middle" font-size="8" fill="var(--c-text-3)">décantation boues</text><text x="355" y="72" text-anchor="middle" font-size="8" fill="var(--c-text-3)">IB ≤ 150 mL/g ✓</text><!-- Arrow to output --><line x1="420" y1="53" x2="450" y2="53" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#ab)"/><!-- Output --><rect x="450" y="37" width="80" height="30" rx="6" fill="rgba(22,163,74,.15)" stroke="rgba(22,163,74,.5)" stroke-width="1.5"/><text x="490" y="53" text-anchor="middle" font-size="8.5" font-weight="700" fill="#15803D">Rejet</text><text x="490" y="63" text-anchor="middle" font-size="8" fill="var(--c-text-3)">traité</text><!-- Recirculation arrow --><path d="M355 78 L355 105 L185 105 L185 78" fill="none" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#ab)" stroke-dasharray="4,3"/><text x="270" y="118" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Recirculation des boues (50–100 % Qe)</text><!-- Excess sludge --><path d="M355 78 L355 130" fill="none" stroke="#B45309" stroke-width="1.5" marker-end="url(#ab)"/><text x="390" y="145" font-size="8" fill="#B45309" font-weight="600">Boues en excès</text><text x="390" y="155" font-size="7.5" fill="var(--c-text-3)">→ traitement boues</text><!-- Charge table --><rect x="10" y="140" width="250" height="28" rx="5" fill="rgba(37,99,235,.07)" stroke="rgba(37,99,235,.3)" stroke-width="1"/><text x="135" y="152" text-anchor="middle" font-size="8.5" font-weight="700" fill="#1D4ED8">Charge massique (Cm)</text><text x="135" y="163" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Faible &lt; 0,1 kgDBO/kgMES·j · Forte : 0,3–0,5</text></svg>',
                },
                flashcards: [
                  { q: 'Quel est le principe des boues activées ?', r: 'Des bactéries en suspension dans le bassin d\'aération dégradent la matière organique en présence d\'oxygène. Les boues sont séparées en clarificateur et recirculées', expl: 'La recirculation des boues maintient une forte concentration de biomasse (3–6 g MVS/L). L\'excédent de boues (boues en excès) est extrait quotidiennement.' },
                  { q: 'Quelle est la différence entre faible charge et forte charge ?', r: 'Faible charge : Cm ≤ 0,15 kgDBO₅/kgMVS/j → meilleure qualité du rejet, boues minéralisées. Forte charge : Cm ≥ 0,4 → rejet de moins bonne qualité, boues fermentescibles', expl: 'Les STEP urbaines modernes fonctionnent en faible charge (parfois très faible charge < 0,05 = aération prolongée). La faible charge permet la nitrification.' },
                  { q: 'Qu\'est-ce que l\'Équivalent Habitant (EH) ?', r: '1 EH = 60 g DBO₅/j = 120 g DCO/j = 15 g N/j = 4 g P/j — unité de capacité des STEP', expl: 'La taille d\'une STEP est exprimée en EH. Une STEP de 100 000 EH traite la charge d\'une ville de 100 000 habitants en équivalent organique.' },
                  { q: 'Qu\'est-ce que l\'Indice de Boue (IB) et quelle valeur traduit des boues de bonne qualité ?', r: 'IB = volume sédimenté des boues en 30 min (mL/L) / concentration en boues (g/L). IB ≤ 150 mL/g = bonnes boues décantables', expl: 'Un IB élevé (> 200) indique des boues filamenteuses qui décantent mal, risque de fuite de boues dans le rejet. Cause : bulking filamenteux, carence en O₂, changement de substrat.' },
                  { q: 'Quelles conditions sont nécessaires pour la nitrification ?', r: 'O₂ dissous ≥ 2 mg/L, T° > 10 °C, pH 7–8, faible charge, temps de séjour suffisant des boues (SRT > 10 jours à 15 °C)', expl: 'Les bactéries nitrifiantes (Nitrosomonas, Nitrobacter) sont plus lentes que les hétérotrophes. Si le SRT est trop court, elles sont lessivées de la STEP.' },
                  { q: 'Quelle est la différence entre nitrification et dénitrification ?', r: 'Nitrification : NH₄⁺ → NO₃⁻ (oxydation, aérobie, consomme O₂). Dénitrification : NO₃⁻ → N₂ (réduction, anoxie, produit de l\'azote gazeux)', expl: 'Pour éliminer l\'azote total, il faut les deux étapes en série (zones aérobies et anoxies alternées). La dénitrification nécessite une source de carbone (MO).' },
                ],
              },
              {
                id: 'ac-4',
                titre: 'Traitements tertiaires et gestion des boues',
                fiche: {
                  intro: 'Le traitement tertiaire affine le rejet pour atteindre les normes environnementales. Les boues produites doivent être stabilisées et valorisées selon une filière réglementée.',
                  points: [
                    '🎯 Normes de rejet (arrêté 22/06/2007) : DBO₅ < 25 mg/L | DCO < 125 mg/L | MES < 35 mg/L | NGL < 10–15 mg/L | PT < 1–2 mg/L (selon taille STEP)',
                    '🔵 Traitements tertiaires courants : filtration sur sable (MES résiduelles) | désinfection UV (coliformes) | lagunage de finition | filtres plantés de roseaux (FPR)',
                    '🌿 Zones de rejet végétalisées (ZRV) : traitement des eaux de lavage, finition par végétation aquatique',
                    '🟤 Filière boues : épaississement (gravité ou flottation) → stabilisation → déshydratation → valorisation/élimination',
                    '🔥 Digestion anaérobie (méthanisation) : dégradation de la MO en absence d\'O₂ → biogaz (60 % CH₄) + boues digérées stabilisées. T° 35–38 °C (mésophile)',
                    '🚜 Épandage agricole : valorisation principale (boues = amendement organique riche en N et P). Nécessite plan d\'épandage + analyses + agrément préfectoral',
                    '⚠️ Contraintes épandage : distances (50 m cours d\'eau, 100 m captage), périodes, charges en métaux lourds (arrêté 08/01/1998)',
                    '♻️ Alternatives : compostage + épandage | incinération avec récupération énergie | ISDND (décharge) en dernier recours',
                  ],
                  formules: [
                    'Production de biogaz ≈ 0,35 m³ CH₄/kg DCO éliminée — estimation rendement méthanisation',
                    'Production boues ≈ 60–120 g MS/EH/j (varie selon le procédé)',
                  ],
                  retenir: 'Normes rejet : DBO₅ < 25, DCO < 125, NGL < 15 mg/L. Boues : digestion → biogaz + stabilisation → épandage agricole (voie principale en France).',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Normes de rejet STEP et filière boues</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><div><div style="font-size:10px;font-weight:700;color:var(--c-text);margin-bottom:6px">Arrêté du 21 juillet 2015 (> 10 000 EH)</div><div style="display:flex;flex-direction:column;gap:3px"><div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--c-surface);border-radius:4px;font-size:9.5px"><span>DBO₅</span><span style="font-weight:700;color:#15803D">&lt; 25 mg/L</span></div><div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--c-surface);border-radius:4px;font-size:9.5px"><span>DCO</span><span style="font-weight:700;color:#15803D">&lt; 125 mg/L</span></div><div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--c-surface);border-radius:4px;font-size:9.5px"><span>MES</span><span style="font-weight:700;color:#15803D">&lt; 35 mg/L</span></div><div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--c-surface);border-radius:4px;font-size:9.5px"><span>NGL</span><span style="font-weight:700;color:#886000">&lt; 15 mg/L</span></div><div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--c-surface);border-radius:4px;font-size:9.5px"><span>NTK</span><span style="font-weight:700;color:#886000">&lt; 10 mg/L</span></div><div style="display:flex;justify-content:space-between;padding:4px 8px;background:var(--c-surface);border-radius:4px;font-size:9.5px"><span>Ptotal</span><span style="font-weight:700;color:#A82018">&lt; 2 mg/L</span></div></div></div><div><div style="font-size:10px;font-weight:700;color:var(--c-text);margin-bottom:6px">Filière traitement des boues</div><div style="display:flex;flex-direction:column;gap:4px;font-size:9px;color:var(--c-text-3)"><div style="display:flex;align-items:center;gap:6px;padding:4px 8px;background:var(--c-surface);border-radius:4px"><span style="font-size:14px">🌊</span><span><strong>Épaississement</strong> — réduire volume (siccité 2→4 %)</span></div><div style="display:flex;align-items:center;gap:6px;padding:4px 8px;background:var(--c-surface);border-radius:4px"><span style="font-size:14px">⚗️</span><span><strong>Digestion anaérobie</strong> — biogaz (CH₄ 60 %) + stabilisation</span></div><div style="display:flex;align-items:center;gap:6px;padding:4px 8px;background:var(--c-surface);border-radius:4px"><span style="font-size:14px">🔩</span><span><strong>Déshydratation</strong> — centrifugation/filtre (siccité 20–25 %)</span></div><div style="display:flex;align-items:center;gap:6px;padding:4px 8px;background:rgba(22,163,74,.08);border:1px solid rgba(22,163,74,.3);border-radius:4px"><span style="font-size:14px">🌱</span><span><strong>Épandage agricole</strong> — 70 % des boues en France (arrêté 8/1/1998)</span></div></div></div></div></div>',
                },
                flashcards: [
                  { q: 'Quelles sont les normes de rejet DBO₅ et DCO pour les STEP > 10 000 EH ?', r: 'DBO₅ < 25 mg/L et DCO < 125 mg/L (arrêté 22/06/2007 relatif aux STEU)', expl: 'Ces valeurs correspondent à une réduction de ≥ 80 % de la DBO₅ et ≥ 75 % de la DCO par rapport aux eaux brutes urbaines typiques.' },
                  { q: 'Quel est le principe de la digestion anaérobie des boues ?', r: 'Dégradation de la matière organique des boues par des bactéries anaérobies (sans O₂) → biogaz (≈ 60 % CH₄) + boues digérées stabilisées', expl: 'La méthanisation réduit le volume de boues de 30–40 % et produit de l\'énergie (le biogaz peut couvrir 30–50 % des besoins énergétiques de la STEP).' },
                  { q: 'Quelles sont les conditions réglementaires pour l\'épandage agricole des boues de STEP ?', r: 'Plan d\'épandage approuvé, analyses régulières (métaux lourds, composés traces organiques), distances réglementaires, périodes d\'interdiction', expl: 'L\'arrêté du 08/01/1998 fixe les teneurs maximales en métaux lourds des boues épandues. Les boues ne peuvent pas être épandues à moins de 50 m d\'un cours d\'eau.' },
                  { q: 'Qu\'est-ce qu\'un filtre planté de roseaux (FPR) ?', r: 'Traitement extensif : les eaux usées (ou boues liquides) sont filtrées à travers un substrat planté de Phragmites australis (roseaux communs)', expl: 'Les FPR combinées (2 étages) peuvent traiter les eaux brutes directement (sans prétraitement). Ils sont très utilisés pour les petites communes (< 5 000 EH) : faible coût d\'exploitation.' },
                  { q: 'Quelle est la norme de rejet en azote total NGL pour une grande STEP ?', r: 'NGL (Azote Global) < 10 à 15 mg/L selon la taille et la zone sensible (arrêté 22/06/2007)', expl: 'En zone sensible (estuaires, lagunes, baies eutrophisées), les normes N et P sont plus strictes. La dénitrification et la déphosphatation sont alors obligatoires.' },
                  { q: 'Quelles sont les alternatives à l\'épandage agricole pour les boues de STEP ?', r: 'Compostage (boues + déchets verts) → épandage | incinération avec récupération énergie | mise en décharge (ISDND) en dernier recours', expl: 'La tendance est à la réduction de la mise en décharge et au développement de la valorisation matière (épandage, compostage) et énergétique (incinération, méthanisation).' },
                ],
              },
            ],
          },

          /* ── ANC ── */
          {
            id: 'anc',
            name: 'Assainissement non collectif (ANC)',
            ico: '🏡',
            color: '#2D6A4F',
            colorl: '#D8F3DC',
            chapitres: [
              {
                id: 'anc-1',
                titre: 'Contexte réglementaire ANC — Arrêtés 2009, 2021 et 2024',
                fiche: {
                  intro: 'L\'ANC concerne environ 5 millions de logements en France non raccordés au réseau collectif. Il est encadré par un corpus réglementaire précis et contrôlé obligatoirement par le SPANC.',
                  points: [
                    '📜 Arrêté du 07/09/2009 : prescriptions techniques fondatrices — volumes minimaux, filières, distances réglementaires',
                    '✏️ Arrêté du 26/02/2021 : modification de l\'arrêté 2009 — renforcement maintenance préventive, précision critères NC',
                    '🆕 Arrêté du 10/07/2024 (en vigueur 01/01/2025) : autosurveillance annuelle par le propriétaire, carnet de suivi numérique obligatoire, contrat entretien microstation ≥ 2 ans',
                    '🚫 Fosse septique (eaux vannes seules) : interdite à neuf depuis l\'arrêté 2009',
                    '📐 Distances réglementaires : ≥ 5 m de l\'habitation | ≥ 35 m de tout captage | ≥ 3 m d\'une limite de propriété',
                    '👮 SPANC (Service Public d\'Assainissement Non Collectif) : contrôle obligatoire (conception/réalisation + bon fonctionnement tous les 10 ans)',
                    '⚠️ Non-conformité avec danger sanitaire : délai 1 an pour travaux | NC sans danger : délai 4 ans',
                    '🏠 Vente immobilière : rapport SPANC < 3 ans obligatoire dans le Dossier de Diagnostic Technique (DDT)',
                  ],
                  formules: [],
                  retenir: 'Fosse septique interdite à neuf (2009). Distance captage : 35 m. NC avec danger : 1 an de délai. SPANC contrôle tous les 10 ans. Arrêté 2024 = carnet numérique.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Assainissement non collectif — réglementation</div><div style="display:flex;flex-direction:column;gap:6px"><div style="display:flex;gap:8px"><div style="background:rgba(239,68,68,.10);border:1.5px solid rgba(239,68,68,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:700;color:#DC2626">❌ Fosse septique toutes eaux</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Interdite à neuf depuis 2009<br>Remplacée par : fosse toutes eaux (FTE)</div></div><div style="background:rgba(22,163,74,.10);border:1.5px solid rgba(22,163,74,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:700;color:#15803D">✅ Filière conforme</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">FTE → épandage ou filtre à sable<br>ou microstation agréée</div></div></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px"><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:6px;padding:7px;text-align:center"><div style="font-size:16px">📏</div><div style="font-size:9.5px;font-weight:700;color:var(--c-text)">35 m</div><div style="font-size:8.5px;color:var(--c-text-3)">distance min captage AEP</div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:6px;padding:7px;text-align:center"><div style="font-size:16px">⏱️</div><div style="font-size:9.5px;font-weight:700;color:var(--c-text)">1 an</div><div style="font-size:8.5px;color:var(--c-text-3)">NC avec danger → mise en conformité</div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:6px;padding:7px;text-align:center"><div style="font-size:16px">🔍</div><div style="font-size:9.5px;font-weight:700;color:var(--c-text)">10 ans</div><div style="font-size:8.5px;color:var(--c-text-3)">périodicité contrôle SPANC</div></div></div><div style="background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.3);border-radius:6px;padding:7px 10px;font-size:9px;color:var(--c-text-3)"><span style="font-weight:700;color:#6D28D9">Arrêté 2024 : </span>carnet numérique d\'entretien obligatoire — traçabilité des vidanges et interventions</div></div></div>',
                },
                flashcards: [
                  { q: 'Depuis quelle année la fosse septique (eaux vannes seules) est-elle interdite à neuf ?', r: 'Depuis l\'arrêté du 07/09/2009 (applicatoin 01/10/2009). Seule la fosse toutes eaux est autorisée', expl: 'La fosse septique ne traitait que les eaux vannes. La fosse toutes eaux (FTE) reçoit les eaux vannes + eaux ménagères, ce qui améliore la performance du système.' },
                  { q: 'Quelle est la distance minimale entre un épandage ANC et un captage d\'eau potable ?', r: '35 mètres minimum (arrêté 07/09/2009)', expl: 'Cette distance protège les captages de la pollution par les effluents traités par le sol. Elle peut être augmentée par le préfet en zone sensible (karst, captages stratégiques).' },
                  { q: 'Quel est le délai de mise en conformité pour une non-conformité ANC "avec danger" ?', r: '1 an maximum pour réaliser les travaux de mise en conformité (arrêté 2024)', expl: 'Une NC "avec danger" = rejet direct sans traitement, contact avec personnes, pollution de captage, etc. La NC "sans danger" donne 4 ans. En vente immobilière, l\'acheteur dispose de 1 an.' },
                  { q: 'Qu\'est-ce que le SPANC ?', r: 'Service Public d\'Assainissement Non Collectif : service obligatoire géré par la collectivité, chargé du contrôle des installations ANC de son territoire', expl: 'Le SPANC contrôle la conception, la réalisation des nouvelles installations, et le bon fonctionnement de toutes les installations tous les 10 ans. Il perçoit une redevance.' },
                  { q: 'Quelles sont les nouveautés de l\'arrêté du 10 juillet 2024 ?', r: 'Autosurveillance annuelle obligatoire par le propriétaire avec carnet de suivi numérique. Contrat d\'entretien microstation : durée minimale 2 ans (contre annuel avant)', expl: 'Entré en vigueur le 1er janvier 2025. L\'objectif est d\'améliorer la maintenance préventive et de responsabiliser les propriétaires sur le suivi de leur installation.' },
                  { q: 'Quand un rapport SPANC est-il obligatoire lors d\'une vente immobilière ?', r: 'Toujours : un rapport de contrôle de moins de 3 ans doit figurer dans le Dossier de Diagnostic Technique (DDT) annexé à la promesse de vente', expl: 'Si le rapport est absent ou non conforme, le notaire doit en informer les parties. L\'acheteur dispose de 1 an après la vente pour mettre en conformité (sauf danger).' },
                ],
              },
              {
                id: 'anc-2',
                titre: 'Filières agréées et dimensionnement ANC',
                fiche: {
                  intro: 'Le choix de la filière ANC dépend de la perméabilité du sol, de la surface disponible et du niveau de traitement requis. Toutes les filières reposent sur la fosse toutes eaux comme premier traitement.',
                  points: [
                    '🪣 Fosse toutes eaux (FTE) : 1er traitement — décantation + préfermentation. Volume minimum : 3 000 L pour ≤ 5 pièces principales (PP), +1 000 L/PP au-delà',
                    '🌱 Tranchées d\'épandage : épandage en sol en place. Surface : 5 m × nbre PP (ex : 5 PP → 25 m de tranchées). Ksat sol ≥ 10 mm/h requis',
                    '🏔️ Tertre d\'infiltration : sol de substitution surélevé quand la nappe est peu profonde ou le sol imperméable',
                    '🔵 Lit filtrant drainé : sable lavé + drain de collecte → rejet vers milieu superficiel. Ksat sol < 10 mm/h',
                    '🟢 Filtres compacts agréés CE : géotextile + tourbe, zéolithe, coco… Surface réduite (< 5 m²). Utile en terrain contraint',
                    '⚙️ Microstations à boues activées ou cultures fixées : épuration biologique poussée. Rejet vers sol ou fossé (selon arrêté). Contrat entretien ≥ 2 ans obligatoire',
                    '📋 Agrément filières CE : liste publiée sur le site du Ministère. Chaque filière a une notice dimensionnement + conditions installation',
                    '🔍 Test de perméabilité (Porchet) : mesure du Ksat in situ — indispensable pour le choix de la filière',
                  ],
                  formules: [
                    'Volume FTE (L) = 3 000 + (nbre PP – 5) × 1 000  pour nbre PP > 5',
                    'Surface tranchées (m) = 5 × nbre PP (longueur totale avec espacement ≥ 1,5 m entre tranchées)',
                  ],
                  retenir: 'FTE : 3 000 L pour 5 PP. Tranchées : 5 m/PP, sol Ksat ≥ 10 mm/h. Si sol imperméable : lit filtrant drainé. Microstation : contrat entretien obligatoire.',
                  schema: '<svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto"><defs><marker id="aa" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 Z" fill="#94A3B8"/></marker></defs><text x="260" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">FILIÈRES ANC — CHOIX SELON LE SOL</text><!-- Decision diamond --><polygon points="100,30 160,60 100,90 40,60" fill="rgba(37,99,235,.12)" stroke="rgba(37,99,235,.5)" stroke-width="1.5"/><text x="100" y="57" text-anchor="middle" font-size="8.5" font-weight="700" fill="#1D4ED8">Sol ?</text><text x="100" y="68" text-anchor="middle" font-size="8" fill="#1D4ED8">Ksat</text><!-- Perméable branch --><line x1="160" y1="60" x2="220" y2="60" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#aa)"/><text x="190" y="55" text-anchor="middle" font-size="7.5" fill="var(--c-text-3)">≥ 10 mm/h</text><rect x="220" y="40" width="130" height="40" rx="6" fill="rgba(22,163,74,.10)" stroke="rgba(22,163,74,.45)" stroke-width="1.5"/><text x="285" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#15803D">Tranchées d\'épandage</text><text x="285" y="72" text-anchor="middle" font-size="8" fill="var(--c-text-3)">5 m/PP · 3 tranchées min</text><!-- Imperméable branch --><line x1="100" y1="90" x2="100" y2="115" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#aa)"/><text x="60" y="108" text-anchor="middle" font-size="7.5" fill="var(--c-text-3)">&lt; 10 mm/h</text><rect x="40" y="118" width="120" height="40" rx="6" fill="rgba(217,119,6,.10)" stroke="rgba(217,119,6,.45)" stroke-width="1.5"/><text x="100" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="#B45309">Lit filtrant drainé</text><text x="100" y="148" text-anchor="middle" font-size="8" fill="var(--c-text-3)">sable 0/4 · rejet drain</text><!-- FTE box --><rect x="370" y="25" width="135" height="55" rx="6" fill="rgba(239,68,68,.08)" stroke="rgba(239,68,68,.4)" stroke-width="1.5"/><text x="437" y="43" text-anchor="middle" font-size="9.5" font-weight="800" fill="#DC2626">Fosse toutes eaux</text><text x="437" y="56" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Toujours en 1ᵉʳ</text><text x="437" y="67" text-anchor="middle" font-size="8.5" fill="#DC2626" font-weight="600">3 000 L pour 5 PP</text><!-- Arrow from FTE to decision --><line x1="370" y1="52" x2="163" y2="58" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#aa)" stroke-dasharray="4,3"/><text x="270" y="46" text-anchor="middle" font-size="7.5" fill="var(--c-text-3)">EU prétraitées</text><!-- Microstation alternative --><rect x="370" y="100" width="135" height="50" rx="6" fill="rgba(124,58,237,.08)" stroke="rgba(124,58,237,.4)" stroke-width="1.5"/><text x="437" y="118" text-anchor="middle" font-size="9.5" font-weight="800" fill="#6D28D9">Microstation</text><text x="437" y="130" text-anchor="middle" font-size="8" fill="var(--c-text-3)">agréée — toutes zones</text><text x="437" y="142" text-anchor="middle" font-size="8" fill="#6D28D9" font-weight="600">Contrat entretien obligatoire</text><!-- Vidange note --><rect x="20" y="168" width="480" height="14" rx="4" fill="rgba(14,165,233,.07)" stroke="rgba(14,165,233,.3)" stroke-width="1"/><text x="260" y="178" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Vidange FTE : tous les 4 ans min · Vidangeur agréé · Bordereau de suivi</text></svg>',
                },
                flashcards: [
                  { q: 'Quel est le volume minimal d\'une fosse toutes eaux pour une maison de 5 pièces principales ?', r: '3 000 litres minimum (arrêté 07/09/2009). +1 000 L par pièce principale au-delà de 5', expl: 'Pour une maison de 7 PP : 3 000 + 2 × 1 000 = 5 000 L. Le volume assure un temps de séjour suffisant pour la décantation et la préfermentation des effluents.' },
                  { q: 'Quelle perméabilité du sol est requise pour des tranchées d\'épandage ?', r: 'Ksat ≥ 10 mm/h (perméabilité mesurée par test de Porchet ou test d\'infiltration)', expl: 'Si Ksat < 10 mm/h : sol trop imperméable → les effluents ne s\'infiltrent pas → filière alternative (lit filtrant drainé, tertre). Si Ksat > 500 mm/h : sol trop perméable → risque de pollution de nappe.' },
                  { q: 'Dans quel cas utilise-t-on un tertre d\'infiltration ?', r: 'Quand la nappe est proche de la surface (< 1 m), quand le sol est imperméable ou quand le relief ne permet pas les tranchées en déblai', expl: 'Le tertre surélevé de 0,6 à 1 m crée une distance supplémentaire entre les effluents épurés et la nappe. Il utilise du sable de granulométrie contrôlée comme sol de substitution.' },
                  { q: 'Qu\'est-ce qu\'un filtre compact agréé CE ?', r: 'Filière préfabriquée contenant un matériau filtrant spécifique (tourbe, coco, zéolithe…) agréée par le Ministère. Surface très réduite, adaptée aux terrains contraints', expl: 'L\'agrément CE est délivré après évaluation des performances épuratoires. Chaque constructeur publie une notice de dimensionnement. La liste est mise à jour sur le site du Ministère.' },
                  { q: 'Quelle est la différence entre lit filtrant drainé et lit filtrant non drainé ?', r: 'Drainé : drain de collecte → rejet vers fossé/milieu. Non drainé : effluents s\'infiltrent dans le sol sous le filtre. Le drainé est utilisé quand le sol est imperméable', expl: 'Le lit filtrant drainé est une filière à épuration biologique et physique. Le rejet final doit respecter des valeurs limites fixées par arrêté préfectoral.' },
                  { q: 'Pourquoi un contrat d\'entretien est-il obligatoire pour les microstations ?', r: 'Les microstations sont des installations mécaniques et biologiques complexes nécessitant un suivi régulier pour maintenir leurs performances épuratoires', expl: 'L\'arrêté 2024 impose un contrat d\'entretien d\'au moins 2 ans. Sans entretien, la microstation peut se dérégler et rejeter des effluents non traités — non-conformité SPANC.' },
                ],
              },
              {
                id: 'anc-3',
                titre: 'Contrôle SPANC et diagnostics de terrain',
                fiche: {
                  intro: 'Le SPANC intervient à toutes les étapes de vie d\'une installation ANC : conception, réalisation et fonctionnement. Ses agents réalisent des visites terrain et établissent des rapports réglementaires.',
                  points: [
                    '📋 4 types de contrôles SPANC : conception (avant travaux) | réalisation (pendant) | bon fonctionnement (tous les 10 ans) | entretien',
                    '🟢 Conformité : installation respecte les arrêtés en vigueur, pas de danger sanitaire ni environnemental',
                    '🟡 NC sans danger : non-conformité mais pas de risque immédiat (défaut de distance, absence de ventilation). Délai : 4 ans',
                    '🔴 NC avec danger : rejet direct, risque sanitaire avéré. Délai : 1 an pour travaux',
                    '🔬 Outils de diagnostic terrain : perméamètre de Porchet (Ksat), piézomètre (niveau nappe), caméra inspection, kit analyse eau (test E. coli)',
                    '📏 Test de Porchet : mesure du rabattement dans un trou de 20 cm de diamètre. Calcul du Ksat en mm/h',
                    '📊 Rapport SPANC : document officiel remis au propriétaire, annexé lors de la vente immobilière. Conservation obligatoire',
                    '💰 Redevance SPANC : perçue par la collectivité auprès de tous les propriétaires en zone ANC — financement du service public',
                  ],
                  formules: [
                    'Ksat (mm/h) = π × r² × ΔH / (8 × r × Δt) — formule de Porchet simplifiée',
                    '   r = rayon du trou (m), ΔH = variation du niveau d\'eau (m), Δt = temps (h)',
                  ],
                  retenir: 'SPANC = 4 types de contrôles. NC avec danger = 1 an. Porchet mesure le Ksat. Rapport SPANC < 3 ans obligatoire en vente. Redevance = financement service.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">SPANC — Service Public d\'Assainissement Non Collectif</div><div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px"><div style="font-size:10px;font-weight:700;color:var(--c-text);margin-bottom:2px">4 types de contrôles</div><div style="display:flex;gap:6px"><div style="flex:1;background:var(--c-surface);border-left:3px solid #0369A1;border-radius:0 6px 6px 0;padding:6px 8px"><div style="font-size:9.5px;font-weight:700;color:#0369A1">1. Conception</div><div style="font-size:8.5px;color:var(--c-text-3)">Avant travaux — filière adaptée au sol</div></div><div style="flex:1;background:var(--c-surface);border-left:3px solid #15803D;border-radius:0 6px 6px 0;padding:6px 8px"><div style="font-size:9.5px;font-weight:700;color:#15803D">2. Réalisation</div><div style="font-size:8.5px;color:var(--c-text-3)">Pendant travaux — avant remblaiement</div></div><div style="flex:1;background:var(--c-surface);border-left:3px solid #B45309;border-radius:0 6px 6px 0;padding:6px 8px"><div style="font-size:9.5px;font-weight:700;color:#B45309">3. Fonctionnement</div><div style="font-size:8.5px;color:var(--c-text-3)">Tous les 10 ans — état des ouvrages</div></div><div style="flex:1;background:var(--c-surface);border-left:3px solid #DC2626;border-radius:0 6px 6px 0;padding:6px 8px"><div style="font-size:9.5px;font-weight:700;color:#DC2626">4. Vente</div><div style="font-size:8.5px;color:var(--c-text-3)">Rapport &lt; 3 ans obligatoire</div></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:rgba(22,163,74,.08);border:1px solid rgba(22,163,74,.3);border-radius:6px;padding:8px"><div style="font-size:9.5px;font-weight:700;color:#15803D;margin-bottom:4px">🔩 Test Porchet — perméabilité</div><div style="font-size:8.5px;color:var(--c-text-3)">Trou 30 cm Ø, remplissage eau, mesure vitesse infiltration<br>Ksat = f(hauteur chute/temps)</div></div><div style="background:rgba(217,119,6,.08);border:1px solid rgba(217,119,6,.3);border-radius:6px;padding:8px"><div style="font-size:9.5px;font-weight:700;color:#B45309;margin-bottom:4px">⚠️ Non-conformités</div><div style="font-size:8.5px;color:var(--c-text-3)"><span style="font-weight:600;color:#DC2626">NC avec danger :</span> 1 an max<br><span style="font-weight:600;color:#B45309">NC sans danger :</span> 4 ans max (vente)</div></div></div></div>',
                },
                flashcards: [
                  { q: 'Quels sont les 4 types de contrôles du SPANC ?', r: '1) Contrôle de conception (projet) 2) Contrôle de réalisation (chantier) 3) Bon fonctionnement (périodique, ≤ 10 ans) 4) Contrôle de l\'entretien', expl: 'Le contrôle de réalisation est fait avant remblaiement des tranchées — l\'agent SPANC doit vérifier les dimensions, les pentes et la conformité de l\'installation visible.' },
                  { q: 'Qu\'est-ce que le test de Porchet ?', r: 'Test de perméabilité in situ : on remplit un trou cylindrique (Ø 20 cm) et on mesure la vitesse de baisse du niveau d\'eau → calcul du Ksat (mm/h)', expl: 'Le test de Porchet est réalisé par le bureau d\'études avant le dépôt de permis de construire. Il conditionne le choix de la filière ANC. Obligatoire pour toute nouvelle installation.' },
                  { q: 'Qu\'est-ce qu\'une non-conformité "avec danger sanitaire" ?', r: 'Situation présentant un risque direct pour la santé humaine ou l\'environnement : rejet direct sans traitement, présence d\'un puits à moins de 35 m, submersion permanente', expl: 'Le SPANC notifie le propriétaire par courrier. Délai de 1 an pour travaux. Si inaction : la collectivité peut intervenir d\'office et facturer les travaux au propriétaire.' },
                  { q: 'Comment est financé le SPANC ?', r: 'Par une redevance obligatoire payée par tous les propriétaires en zone ANC, proportionnelle à la consommation d\'eau ou forfaitaire selon la collectivité', expl: 'La redevance SPANC est distincte de la redevance assainissement collectif. Elle finance les salaires des agents, les visites terrain, les analyses et la gestion administrative.' },
                  { q: 'À quoi sert le piézomètre dans un diagnostic ANC ?', r: 'À mesurer le niveau de la nappe phréatique. Indispensable pour choisir la filière (distance nappe / fond des tranchées ≥ 0,5 m minimum)', expl: 'Si la nappe est à moins de 0,5 m de profondeur, les tranchées d\'épandage sont interdites. Il faut un tertre ou un lit filtrant drainé. Le piézomètre mesure aussi les variations saisonnières.' },
                  { q: 'Quelle est la fréquence maximale du contrôle de bon fonctionnement du SPANC ?', r: 'Tous les 10 ans maximum. Certaines collectivités contrôlent tous les 6 ou 8 ans. Le propriétaire peut demander un contrôle volontaire', expl: 'L\'arrêté 2024 renforce cette périodicité et impose une autosurveillance annuelle par le propriétaire (relevé du carnet de suivi numérique).' },
                ],
              },
            ],
          },

          /* ── Milieux aquatiques ── */
          {
            id: 'milieux',
            name: 'Milieux aquatiques',
            ico: '🌿',
            color: '#1B4332',
            colorl: '#D8F3DC',
            chapitres: [
              {
                id: 'mil-1',
                titre: 'Morphologie des cours d\'eau et processus naturels',
                fiche: {
                  intro: 'La morphologie d\'un cours d\'eau résulte de l\'équilibre dynamique entre les apports solides, le débit liquide et la géologie. Comprendre ces processus est essentiel pour toute intervention de restauration.',
                  points: [
                    '🌊 Trois types de cours d\'eau en plan : rectiligne (rare, artificiel) | méandriforme (sinueux, plaine) | en tresses (charge sédimentaire élevée, pente forte)',
                    '📏 Profil en travers : lit d\'étiage (filet d\'eau) — lit mineur (entre berges) — lit majeur (inondable) — plaine alluviale',
                    '🌄 Profil en long : pente décroissante de la source vers l\'aval. Ruptures = seuils naturels ou barrages',
                    '🪨 Transport solide : charriage (roulement au fond) + saltation + suspension. Débit solide Qs ∝ Q^n (n ≈ 2–3)',
                    '⚖️ Critère de Shields : seuil de mise en mouvement des sédiments. Au-delà : érosion. En dessous : dépôt',
                    '🌿 Ripisylve : végétation riveraine des berges — stabilise les berges, ombrage, filtre les nutriments. Protégée par le code de l\'environnement',
                    '🔧 Restauration hydromorphologique : reméandrage, reconnexion lit majeur, suppression seuils, recharge granulométrique',
                    '🐟 Continuité écologique : libre circulation des poissons et transit sédimentaire. Obligation DCE — effacement ou aménagement des seuils',
                  ],
                  formules: [
                    'Rapport de sinuosité = longueur du chenal / longueur de la vallée (méandriforme > 1,5)',
                    'Q plein bord ≈ Q de référence morphogène = débit formateur du lit mineur (T ≈ 1,5–2 ans)',
                  ],
                  retenir: 'Lit mineur = entre berges. Lit majeur = inondable. Ripisylve protège les berges. Continuité écologique (DCE) = libre passage poissons + sédiments.',
                  schema: '<svg viewBox="0 0 500 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">MORPHOLOGIE D\'UN COURS D\'EAU</text><!-- Lit majeur (full width) --><rect x="10" y="25" width="480" height="120" rx="0" fill="rgba(22,163,74,.06)"/><text x="30" y="42" font-size="8.5" font-weight="700" fill="#15803D">Lit majeur</text><text x="30" y="53" font-size="7.5" fill="var(--c-text-3)">(zone inondable)</text><!-- Left ripisylve --><rect x="10" y="55" width="80" height="70" rx="0" fill="rgba(22,163,74,.18)"/><text x="50" y="85" text-anchor="middle" font-size="8" font-weight="700" fill="#15803D" transform="rotate(-90,50,85)">Ripisylve</text><!-- Right ripisylve --><rect x="410" y="55" width="80" height="70" rx="0" fill="rgba(22,163,74,.18)"/><text x="450" y="90" text-anchor="middle" font-size="8" font-weight="700" fill="#15803D" transform="rotate(90,450,90)">Ripisylve</text><!-- Lit mineur --><rect x="90" y="55" width="320" height="70" rx="0" fill="rgba(14,165,233,.12)" stroke="rgba(14,165,233,.5)" stroke-width="1"/><text x="250" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#0369A1">Lit mineur</text><text x="250" y="83" text-anchor="middle" font-size="8" fill="var(--c-text-3)">(entre berges pleines)</text><!-- Water --><ellipse cx="250" cy="105" rx="130" ry="18" fill="rgba(14,165,233,.3)"/><text x="250" y="109" text-anchor="middle" font-size="9" font-weight="700" fill="#0369A1">💧 Chenal d\'écoulement</text><!-- Annotations --><text x="420" y="42" text-anchor="middle" font-size="8" fill="var(--c-text-3)">PPRI = zonage réglementaire</text><!-- Legend --><rect x="10" y="155" width="480" height="14" rx="4" fill="rgba(124,58,237,.06)" stroke="rgba(124,58,237,.25)" stroke-width="1"/><text x="250" y="165" text-anchor="middle" font-size="8" fill="var(--c-text-3)"><tspan font-weight="700" fill="#6D28D9">Continuité écologique : </tspan>libre passage poissons + transport sédiments (ouvrages = passes à poissons)</text></svg>',
                },
                flashcards: [
                  { q: 'Quels sont les 3 types de cours d\'eau selon leur tracé en plan ?', r: 'Rectiligne (rare, artificiel) — Méandriforme (sinueux, plaine alluviale) — En tresses (forte charge sédimentaire, pente forte)', expl: 'Le méandre est la forme d\'équilibre naturelle en plaine. Le recalibrage rectiligne des rivières perturbe l\'équilibre et accélère la vitesse, aggravant les crues aval.' },
                  { q: 'Qu\'est-ce que le lit majeur d\'un cours d\'eau ?', r: 'Espace inondé lors des crues courantes (T ≈ 2 à 10 ans). Au-delà des berges du lit mineur, il joue un rôle de stockage temporaire des crues', expl: 'L\'urbanisation du lit majeur aggrave les crues (ruissellement + accélération). Le PPRI (Plan de Prévention des Risques d\'Inondation) le protège de l\'urbanisation.' },
                  { q: 'Qu\'est-ce que le transport solide en charriage ?', r: 'Déplacement des sédiments les plus grossiers (graviers, galets) par roulement et glissement au fond du lit', expl: 'Le charriage est déclenché quand la contrainte de cisaillement dépasse le critère de Shields (dépend de la taille des grains). Les barrages bloquent ce transit et affament l\'aval.' },
                  { q: 'Quel est le rôle de la ripisylve ?', r: 'Végétation des berges : stabilisation mécanique (racines), ombrage (régule T°), filtration des nitrates, habitat faune', expl: 'La ripisylve réduit l\'érosion des berges et maintient une eau fraîche (vital pour les salmonidés). Sa suppression aggrave les crues et réchauffe les eaux.' },
                  { q: 'Qu\'est-ce que la continuité écologique et pourquoi est-elle obligatoire ?', r: 'Libre circulation des poissons (migration) et transit libre des sédiments. Obligatoire par la DCE et le classement des cours d\'eau (art. L214-17 Code envt)', expl: 'Les ouvrages (barrages, seuils) sur les cours d\'eau classés doivent être équipés de passes à poissons ou être effacés. Échéance : 2027 pour la plupart des ouvrages.' },
                  { q: 'Qu\'est-ce que la restauration hydromorphologique d\'un cours d\'eau ?', r: 'Ensemble de travaux visant à rétablir les processus naturels : reméandrage, reconnexion du lit majeur, suppression de seuils, recharge granulométrique', expl: 'Financée par les Agences de l\'eau et les collectivités. La restauration améliore l\'état écologique (IBD, IBGN) et réduit les risques d\'inondation par stockage naturel en lit majeur.' },
                ],
              },
              {
                id: 'mil-2',
                titre: 'DCE — état écologique et chimique des masses d\'eau',
                fiche: {
                  intro: 'La DCE évalue la qualité des eaux selon deux dimensions indépendantes : l\'état écologique (biologie + physico-chimie) et l\'état chimique (substances dangereuses). L\'objectif est le "bon état" d\'ici 2027.',
                  points: [
                    '🗂️ 4 catégories de masses d\'eau de surface : cours d\'eau | plans d\'eau | eaux de transition (estuaires) | eaux côtières',
                    '🟢 État écologique : 5 classes — Très bon / Bon / Moyen / Médiocre / Mauvais',
                    '   Évalué par : indices biologiques (IBD, IBGN, IPR) + paramètres physico-chimiques généraux (O₂, nutriments, T°, pH)',
                    '🔵 État chimique : Bon ou Mauvais — basé sur 45 substances prioritaires (SP) dont 8 substances dangereuses prioritaires (SDp)',
                    '🏆 Objectif : bon état = état écologique "bon" ET état chimique "bon"',
                    '🏗️ MEFM (Masse d\'Eau Fortement Modifiée) : cours d\'eau canalisés, barrages, ports. Objectif réduit = "bon potentiel écologique" (BPE)',
                    '📋 Exemptions possibles (art. 4.4 DCE) : report d\'échéance pour raisons techniques, économiques ou naturelles. Justification obligatoire dans le SDAGE',
                    '📊 Résultats France 2022 : ~ 43 % des masses d\'eau en bon ou très bon état écologique | ~ 37 % en bon état chimique hors ubiquitaires',
                  ],
                  formules: [],
                  retenir: 'Bon état = bon état écologique (IBD/IBGN/IPR ≥ bon) ET bon état chimique (45 SP). MEFM = bon potentiel. France 2022 : ~43 % bon état écologique.',
                  schema: '<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">ÉTAT ÉCOLOGIQUE DCE — France 2022</text><!-- Pie chart approximation as segmented bar --><rect x="20" y="28" width="460" height="50" rx="6" fill="none" stroke="var(--c-border)" stroke-width="1"/><rect x="20" y="28" width="197" height="50" rx="0" fill="#22C55E"/><rect x="217" y="28" width="90" height="50" rx="0" fill="#EAB308"/><rect x="307" y="28" width="80" height="50" rx="0" fill="#F97316"/><rect x="387" y="28" width="93" height="50" rx="0" fill="#EF4444"/><!-- Labels on bar --><text x="118" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="white">43 %</text><text x="118" y="64" text-anchor="middle" font-size="8.5" fill="rgba(255,255,255,.9)">Bon/TB</text><text x="262" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="white">19 %</text><text x="262" y="64" text-anchor="middle" font-size="8.5" fill="rgba(255,255,255,.9)">Moyen</text><text x="347" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="white">17 %</text><text x="347" y="64" text-anchor="middle" font-size="8.5" fill="rgba(255,255,255,.9)">Méd.</text><text x="433" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="white">21 %</text><text x="433" y="64" text-anchor="middle" font-size="8.5" fill="rgba(255,255,255,.9)">Mauvais</text><!-- Objectif DCE marker --><line x1="197" y1="22" x2="197" y2="78" stroke="#1E293B" stroke-width="2" stroke-dasharray="4,2"/><text x="197" y="18" text-anchor="middle" font-size="8" fill="#1E293B" font-weight="700">Objectif : 100 % ici</text><!-- Info grid --><rect x="20" y="95" width="220" height="70" rx="8" fill="rgba(14,165,233,.07)" stroke="rgba(14,165,233,.3)" stroke-width="1"/><text x="130" y="112" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369A1">Composition état global</text><text x="130" y="126" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">État = min(écologique, chimique)</text><text x="130" y="139" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">Indice biologique + physico-chimie</text><text x="130" y="152" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">+ hydromorphologie</text><text x="130" y="162" text-anchor="middle" font-size="8" fill="#DC2626" font-weight="600">→ le plus déclassant s\'impose</text><rect x="260" y="95" width="220" height="70" rx="8" fill="rgba(22,163,74,.07)" stroke="rgba(22,163,74,.3)" stroke-width="1"/><text x="370" y="112" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803D">MEFM — Masses d\'eau</text><text x="370" y="126" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">fortement modifiées ou artificielles</text><text x="370" y="139" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">Objectif : bon potentiel</text><text x="370" y="152" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">(≠ bon état pour masses naturelles)</text></svg>',
                },
                flashcards: [
                  { q: 'Combien y a-t-il de classes d\'état écologique selon la DCE ?', r: '5 classes : Très bon — Bon — Moyen — Médiocre — Mauvais', expl: 'L\'objectif est d\'atteindre au moins la classe "Bon". Le "Très bon" correspond à l\'état de référence non perturbé. On ne peut pas dégrader une masse d\'eau de bonne qualité.' },
                  { q: 'Quelle est la différence entre état écologique et état chimique ?', r: 'État écologique : biologie + physico-chimie générale (5 classes). État chimique : 45 substances prioritaires (binaire : bon ou mauvais)', expl: 'Une rivière peut avoir un très bon état écologique mais un mauvais état chimique (traces de mercure industriel). Les deux critères doivent être atteints pour le "bon état".' },
                  { q: 'Qu\'est-ce qu\'une Masse d\'Eau Fortement Modifiée (MEFM) ?', r: 'Masse d\'eau dont la morphologie a été profondément modifiée par l\'homme (canal, barrage, port) et qui ne peut pas atteindre le "bon état" sans contrainte économique ou sociale inacceptable', expl: 'Pour les MEFM, l\'objectif n\'est pas le "bon état" mais le "bon potentiel écologique" (BPE). Ex : le canal de la Marne au Rhin est une MEFM.' },
                  { q: 'Quels sont les paramètres physico-chimiques généraux évalués pour l\'état écologique ?', r: 'Température, O₂ dissous, pH, conductivité, nutriments (N total, NO₃⁻, PO₄³⁻, phosphore total), turbidité', expl: 'Ces paramètres sont des "éléments de qualité physico-chimiques" soutenant la biologie. Un excès de phosphore (> 0,1 mg P/L) peut dégrader l\'état écologique même si la biologie est bonne.' },
                  { q: 'Quel est le taux approximatif de masses d\'eau en bon état écologique en France (2022) ?', r: 'Environ 43 % des masses d\'eau de surface en bon ou très bon état écologique', expl: 'La France est en retard sur les objectifs DCE. Les pressions agricoles (nitrates, pesticides) et morphologiques (ouvrages) sont les principales causes de non-atteinte du bon état.' },
                  { q: 'Que permet l\'article 4.4 de la DCE ?', r: 'Des dérogations (reports d\'échéance) pour atteindre le bon état, justifiées par des raisons techniques (travaux complexes), économiques ou naturelles (délai de récupération biologique)', expl: 'Les reports doivent être justifiés dans le SDAGE et notifiés à la Commission européenne. Ils ne sont pas automatiques : l\'État doit démontrer que les objectifs restent atteignables.' },
                ],
              },
              {
                id: 'mil-3',
                titre: 'Zones humides — rôles, identification et gestion',
                fiche: {
                  intro: 'Les zones humides sont des milieux de transition entre terre et eau, parmi les plus riches en biodiversité. Elles jouent des fonctions hydrologiques majeures et sont protégées par de nombreux textes réglementaires.',
                  points: [
                    '📖 Définition (art. L211-1 Code envt) : "terrains habituellement inondés ou gorgés d\'eau douce, salée ou saumâtre de façon permanente ou temporaire"',
                    '🌿 Types : tourbières | prairies humides | mares | roselières | ripisylves | marais côtiers | mangroves',
                    '💧 Fonctions hydrologiques : laminage des crues (stockage temporaire) | soutien des étiages | recharge des nappes | rétention des sédiments',
                    '🌱 Fonctions épuratoires : dénitrification (abattement NO₃⁻), rétention phosphore, filtration des MES',
                    '🦋 Fonctions écologiques : habitats de reproduction pour amphibiens, oiseaux, insectes | corridors biologiques | biodiversité végétale',
                    '🌡️ Fonctions climatiques : stockage carbone (tourbières = puits de CO₂) | régulation microclimatique',
                    '🔍 Critères d\'identification (arrêté 24/06/2008) : végétation hygrophile (espèces indicatrices) OU sol hydromorphe (gleysol) OU inondation ≥ 1 mois/an',
                    '⚖️ Séquence ERC : Éviter → Réduire → Compenser. Compensation zones humides : ratio ≥ 2:1 en surface',
                    '🌍 Conventions et protections : Convention RAMSAR | Natura 2000 (Habitats, Oiseaux) | arrêtés de biotope | inscription SDAGE',
                  ],
                  formules: [],
                  retenir: 'Zones humides = régulation crues + épuration N/P + biodiversité. Identification : végétation hygrophile ou sol hydromorphe. Compensation ERC : ratio ≥ 2:1.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Zones humides — fonctions et identification</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px"><div style="background:rgba(14,165,233,.10);border:1.5px solid rgba(14,165,233,.4);border-radius:8px;padding:8px;text-align:center"><div style="font-size:18px">🌊</div><div style="font-size:9.5px;font-weight:700;color:#0369A1;margin-top:2px">Régulation hydraulique</div><div style="font-size:8.5px;color:var(--c-text-3);margin-top:3px">Tampon crues · étiages<br>Recharge nappes</div></div><div style="background:rgba(22,163,74,.10);border:1.5px solid rgba(22,163,74,.4);border-radius:8px;padding:8px;text-align:center"><div style="font-size:18px">🌿</div><div style="font-size:9.5px;font-weight:700;color:#15803D;margin-top:2px">Épuration naturelle</div><div style="font-size:8.5px;color:var(--c-text-3);margin-top:3px">Rétention N, P<br>Sédimentation MES</div></div><div style="background:rgba(217,119,6,.10);border:1.5px solid rgba(217,119,6,.4);border-radius:8px;padding:8px;text-align:center"><div style="font-size:18px">🦋</div><div style="font-size:9.5px;font-weight:700;color:#B45309;margin-top:2px">Biodiversité</div><div style="font-size:8.5px;color:var(--c-text-3);margin-top:3px">Habitat espèces<br>protégées</div></div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px;margin-bottom:8px"><div style="font-size:10px;font-weight:700;color:var(--c-text);margin-bottom:6px">Critères d\'identification (arrêté 24/06/2008)</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;font-size:9px;color:var(--c-text-3)"><div style="display:flex;align-items:flex-start;gap:5px"><span style="color:#0369A1;font-weight:700;flex-shrink:0">OU</span><span>Végétation hygrophile (roselières, aulnaies, juncaies…)</span></div><div style="display:flex;align-items:flex-start;gap:5px"><span style="color:#0369A1;font-weight:700;flex-shrink:0">OU</span><span>Sol hydromorphe (gley, pseudogley — traces rouille/gris)</span></div></div></div><div style="background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.3);border-radius:6px;padding:7px 10px;font-size:9px;color:var(--c-text-3)"><span style="font-weight:700;color:#6D28D9">Séquence ERC : </span>Éviter → Réduire → Compenser — Compensation ZH : ratio ≥ 2:1 (créer 2 ha pour 1 ha détruit)</div></div>',
                },
                flashcards: [
                  { q: 'Quels sont les 3 critères réglementaires d\'identification d\'une zone humide ?', r: '1) Végétation hygrophile (liste espèces indicatrices) 2) Sol hydromorphe (trace de gleyfication) 3) Inondation ≥ 1 mois par an (au moins une fois tous les 5 ans)', expl: 'Un seul critère suffit pour qualifier la zone humide (arrêté du 24/06/2008 modifié). La présence de saules, roseaux ou joncs est souvent le premier indice.' },
                  { q: 'Quel est le rôle des zones humides dans la régulation des crues ?', r: 'Elles stockent temporairement les eaux de crue en lit majeur et les restituent lentement, écrêtant les pics de débit et retardant la propagation des crues', expl: '1 ha de zone humide peut stocker 1 000 à 5 000 m³ d\'eau. La suppression des zones humides (drainage, remblaiement) aggrave directement les crues aval.' },
                  { q: 'Qu\'est-ce que la séquence ERC dans le cadre des zones humides ?', r: 'Éviter (ne pas impacter la zone humide) → Réduire (minimiser l\'impact) → Compenser (créer ou restaurer une zone humide ailleurs, ratio ≥ 2:1)', expl: 'La compensation est un minimum légal, pas un droit à détruire. Le porteur de projet doit prouver qu\'il a d\'abord tout mis en œuvre pour éviter et réduire avant de compenser.' },
                  { q: 'Pourquoi les tourbières sont-elles importantes pour le climat ?', r: 'Elles stockent d\'énormes quantités de carbone (jusqu\'à 1 500 t C/ha), accumulé pendant des millénaires. Leur drainage libère CO₂ et méthane (puissants GES)', expl: 'Les tourbières couvrent 3 % des terres émergées mais stockent ≈ 30 % du carbone terrestre. Leur protection est un enjeu climatique mondial (Convention RAMSAR).' },
                  { q: 'Qu\'est-ce que la Convention RAMSAR ?', r: 'Convention internationale (1971, Ramsar, Iran) sur les zones humides d\'importance internationale. 172 pays signataires, plus de 2 400 sites désignés mondialement', expl: 'En France : 55 sites RAMSAR (Camargue, Marais Poitevin, Baie de Somme…). Un site RAMSAR bénéficie d\'une protection renforcée et d\'un suivi de l\'état de conservation.' },
                  { q: 'Quelle fonction épuratoire les zones humides assurent-elles vis-à-vis de l\'azote ?', r: 'Dénitrification : les bactéries anaérobies transforment NO₃⁻ en N₂ (gaz) — élimination définitive de l\'azote sans résidu', expl: 'Les zones humides en aval de terres agricoles peuvent abattre 60–90 % des nitrates. Elles servent de "filtre naturel" et sont valorisées dans les programmes agro-environnementaux (MAEC).' },
                ],
              },
            ],
          },

          /* ── Instrumentation ── */
          {
            id: 'instrumentation',
            name: 'Instrumentation et automatisme',
            ico: '⚙️',
            color: '#6B4226',
            colorl: '#F5EFE0',
            chapitres: [
              {
                id: 'ins-1',
                titre: 'Capteurs de mesure — débit, pression, niveau, qualité',
                fiche: {
                  intro: 'La mesure en continu est le fondement de l\'exploitation des réseaux d\'eau et des STEP. Chaque grandeur physique dispose de technologies adaptées à la nature du fluide et aux contraintes de terrain.',
                  points: [
                    '🔵 Débitmètre électromagnétique (EM) : principe de Faraday (fluide conducteur = eau + électrolytes). Très précis (±0,5 %), pas de perte de charge. Standard AEP et EU',
                    '🔊 Débitmètre ultrasonique transit-time : mesure le temps de propagation des ultrasons. Clamp-on = sans découpe de conduite. Adapté eau propre',
                    '🌊 Débitmètre ultrasonique Doppler : décalage fréquence sur particules/bulles. Adapté eaux chargées (EU, boues)',
                    '🔺 Débitmètre Venturi / diaphragme : mesure la différence de pression. Robuste, sans pièces mobiles. Adapté aux grandes conduites',
                    '⬇️ Capteurs de pression : piézorésistifs (déformation membrane), portée 0–1 à 0–600 bar. Signal 4–20 mA ou numérique',
                    '📏 Capteurs de niveau : ultrasons (sans contact) | radar (haute précision) | piézométrique (pression d\'eau = niveau) | à flotteur (simple)',
                    '🔬 Sonde multiparamètre : mesure simultanée T°, pH, conductivité, O₂, turbidité, redox. Déploiement en réseau ou sur cours d\'eau',
                    '💡 Capteurs en ligne : NO₃⁻ (mesure UV), turbidité (néphélémétrie), chlore résiduel (ampérométrie)',
                  ],
                  formules: [
                    'Loi de Faraday (débitmètre EM) : U = B × D × V (U = tension induite, B = champ magnétique, D = diamètre, V = vitesse)',
                    'Signal standard industriel : 4 mA = 0 % de la mesure — 20 mA = 100 % de la plage',
                  ],
                  retenir: 'Débitmètre EM = précis, eau conductrice (AEP/EU). Doppler = eaux chargées. Signal 4–20 mA = standard industriel. Sonde multiparamètre = diagnostic rapide terrain.',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Capteurs hydrauliques — comparatif</div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:10px"><thead><tr><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Capteur</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Principe</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Application</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Précision</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:700;color:#0369A1">Débit. EM</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Champ magnétique (loi Faraday)</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">AEP, EU propres — eau conductrice</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700;font-size:9px">±0,5 %</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:700;color:#B45309">Doppler</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Effet Doppler (particules)</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">EU chargées, eaux pluviales</td><td style="padding:5px 7px;text-align:center;background:rgba(217,119,6,.12);color:#886000;font-weight:700;font-size:9px">±2–5 %</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:700;color:#6D28D9">Ultrasons</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Temps transit ondes US</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Eau claire, sans pièces mobiles</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700;font-size:9px">±1 %</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:700;color:#15803D">Venturi</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Dépression (Bernoulli)</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Canaux ouverts + ΔP capteur</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700;font-size:9px">±1–2 %</td></tr><tr><td style="padding:5px 7px;font-weight:700;color:#DC2626">Capteur P</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Jauge de contrainte / piézo</td><td style="padding:5px 7px;font-size:9px;color:var(--c-text-3)">Niveau réseau, STEP, bassins</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700;font-size:9px">±0,1 %</td></tr></tbody></table></div><div style="background:rgba(37,99,235,.07);border:1px solid rgba(37,99,235,.3);border-radius:6px;padding:6px 10px;margin-top:8px;font-size:9px;color:var(--c-text-3)"><span style="font-weight:700;color:#1D4ED8">Signal 4–20 mA : </span>4 mA = 0 % mesure · 20 mA = 100 % · Standard industriel — résistant aux perturbations électriques</div></div>',
                },
                flashcards: [
                  { q: 'Quel est le principe du débitmètre électromagnétique ?', r: 'Loi de Faraday : un fluide conducteur en mouvement dans un champ magnétique génère une tension proportionnelle à la vitesse. U = B × D × V', expl: 'Applicable uniquement aux fluides conducteurs (σ > 5 µS/cm). Eau potable, eaux usées, boues. Pas pour l\'eau ultra-pure ou les hydrocarbures.' },
                  { q: 'Quelle technologie de débitmètre utiliser pour des eaux usées chargées en MES ?', r: 'Débitmètre ultrasonique Doppler : les ultrasons se réfléchissent sur les particules en suspension → mesure de la vitesse par effet Doppler', expl: 'Le transit-time (temps de propagation) fonctionne sur eau claire. Le Doppler fonctionne sur eau chargée. On choisit selon la nature du fluide à mesurer.' },
                  { q: 'Qu\'est-ce que le signal 4–20 mA en instrumentation industrielle ?', r: 'Signal analogique standard : 4 mA correspond à 0 % de la mesure, 20 mA correspond à 100 % de la plage. Robuste aux perturbations électromagnétiques', expl: 'Le 4 mA (et non 0 mA) permet de détecter les coupures de fil (qui donneraient 0 mA). Toujours alimenter la boucle 4–20 mA avec une alimentation 24 VDC.' },
                  { q: 'Quelle est la différence entre un capteur de niveau ultrasonique et piézométrique ?', r: 'Ultrasonique : mesure la distance par écho sonore, sans contact avec le liquide. Piézométrique : mesure la pression de la colonne d\'eau, immergé', expl: 'L\'ultrasonique est idéal pour les cuves propres (réservoirs d\'eau potable). Le piézométrique est robuste pour les fosses, puits ou canaux chargés.' },
                  { q: 'Comment mesure-t-on les nitrates en ligne dans un cours d\'eau ?', r: 'Par spectrométrie UV : les ions NO₃⁻ absorbent la lumière UV à 220 nm. La concentration est proportionnelle à l\'absorbance mesurée', expl: 'Les sondes nitrates UV sont très répandues pour la surveillance des cours d\'eau et l\'autosurveillance des STEP. Elles mesurent en continu sans réactif.' },
                  { q: 'Dans quel cas utilise-t-on un débitmètre clamp-on ?', r: 'Quand on ne peut pas ou ne veut pas interrompre le service (pas de découpe de conduite). Capteurs collés sur l\'extérieur du tuyau', expl: 'Le clamp-on est utilisé pour des mesures temporaires (diagnostic réseau, campagne de mesure) ou des installations sans by-pass. Précision moindre que l\'EM (±1–2 %).' },
                ],
              },
              {
                id: 'ins-2',
                titre: 'Automates programmables (API) et SCADA',
                fiche: {
                  intro: 'L\'automatisation des ouvrages d\'eau (STEP, stations de pompage, usines de potabilisation) repose sur des API qui exécutent la logique de commande, supervisés par un SCADA centralisant les données.',
                  points: [
                    '🖥️ API (Automate Programmable Industriel) : calculateur industriel robuste qui lit les capteurs, exécute un programme logique et commande les actionneurs (pompes, vannes)',
                    '📋 Langages de programmation API (norme IEC 61131-3) : Ladder (schéma contact, électriciens) | FBD (blocs fonctionnels) | ST (texte structuré, informaticiens)',
                    '🔄 Cycle API : lecture entrées → exécution programme → écriture sorties. Temps de cycle : 1–100 ms',
                    '🖥️ SCADA (Supervisory Control And Data Acquisition) : logiciel de supervision — affiche l\'état des ouvrages, mémorise les historiques, gère les alarmes',
                    '👁️ IHM (Interface Homme Machine) : écran tactile ou PC sur lequel l\'opérateur visualise et interagit avec le processus',
                    '🔗 Protocoles de communication terrain : Modbus RTU/TCP (le plus courant en eau) | PROFIBUS | 4–20 mA analogique | HART (numérique sur la boucle 4–20 mA)',
                    '🌐 Protocoles réseau industriel : OPC-UA (standard interopérabilité) | DNP3 (télécontrôle eau/énergie) | MQTT (IoT industriel)',
                    '🔒 Cybersécurité ICS : les systèmes industriels eau sont des infrastructures critiques — segmentation réseau, mises à jour, authentification',
                  ],
                  formules: [],
                  retenir: 'API = cerveau de l\'automatisme. SCADA = supervision globale. Modbus = protocole terrain standard en eau. Cycle : lecture capteurs → programme → commande actionneurs.',
                  schema: '<svg viewBox="0 0 520 165" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto"><defs><marker id="api" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 Z" fill="#94A3B8"/></marker></defs><text x="260" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">ARCHITECTURE AUTOMATISME — SCADA</text><!-- Level 3: SCADA --><rect x="160" y="25" width="200" height="35" rx="6" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.5)" stroke-width="1.5"/><text x="260" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#6D28D9">SCADA / Supervision</text><text x="260" y="53" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">IHM · historiques · alarmes · rapports</text><!-- Level 2: API --><rect x="80" y="78" width="160" height="35" rx="6" fill="rgba(37,99,235,.12)" stroke="rgba(37,99,235,.5)" stroke-width="1.5"/><text x="160" y="93" text-anchor="middle" font-size="10" font-weight="700" fill="#1D4ED8">API / PLC</text><text x="160" y="106" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">programme · boucles PID · séquences</text><!-- Level 1: Field --><rect x="20" y="130" width="100" height="28" rx="5" fill="rgba(22,163,74,.10)" stroke="rgba(22,163,74,.4)" stroke-width="1"/><text x="70" y="148" text-anchor="middle" font-size="8.5" font-weight="700" fill="#15803D">Capteurs</text><rect x="130" y="130" width="100" height="28" rx="5" fill="rgba(239,68,68,.10)" stroke="rgba(239,68,68,.4)" stroke-width="1"/><text x="180" y="148" text-anchor="middle" font-size="8.5" font-weight="700" fill="#DC2626">Actionneurs</text><!-- Arrows API-SCADA --><line x1="200" y1="78" x2="222" y2="60" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#api)"/><line x1="260" y1="60" x2="237" y2="78" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#api)"/><!-- Arrows field-API --><line x1="70" y1="130" x2="120" y2="113" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#api)"/><line x1="155" y1="113" x2="155" y2="130" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#api)"/><!-- Modbus label --><text x="95" y="76" font-size="7.5" fill="var(--c-text-3)">Modbus RTU/TCP</text><!-- RTU --><rect x="300" y="78" width="160" height="35" rx="6" fill="rgba(14,165,233,.10)" stroke="rgba(14,165,233,.4)" stroke-width="1.5"/><text x="380" y="93" text-anchor="middle" font-size="10" font-weight="700" fill="#0369A1">RTU Télégestion</text><text x="380" y="106" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">4G · LoRa · Sigfox</text><line x1="340" y1="78" x2="320" y2="60" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#api)"/><!-- Cycle box --><rect x="330" y="125" width="180" height="35" rx="5" fill="rgba(217,119,6,.08)" stroke="rgba(217,119,6,.3)" stroke-width="1"/><text x="420" y="139" text-anchor="middle" font-size="8.5" font-weight="700" fill="#B45309">Cycle API</text><text x="420" y="152" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Lire → Traiter → Écrire (~ 10–100 ms)</text></svg>',
                },
                flashcards: [
                  { q: 'Quelle est la différence entre un API et un SCADA ?', r: 'API = automate terrain qui exécute la logique de commande en temps réel. SCADA = logiciel de supervision centralisé qui surveille et collecte les données de plusieurs API', expl: 'L\'API commande directement la pompe. Le SCADA affiche l\'état, l\'historique et envoie des alarmes. En cas de panne du SCADA, l\'API continue de fonctionner.' },
                  { q: 'Quels sont les langages de programmation d\'un API selon la norme IEC 61131-3 ?', r: 'Ladder (LD) — blocs fonctionnels (FBD) — texte structuré (ST) — liste d\'instructions (IL) — grafcet/SFC', expl: 'Le Ladder est le plus utilisé en industrie de l\'eau (héritage des logiques à relais électromécaniques). Le texte structuré se rapproche de la programmation informatique.' },
                  { q: 'Qu\'est-ce que le protocole Modbus ?', r: 'Protocole de communication maître-esclave très répandu dans l\'industrie de l\'eau. Modbus RTU (série RS485) ou Modbus TCP/IP (réseau Ethernet)', expl: 'Un débitmètre, une pompe ou une sonde pH communiquent souvent en Modbus avec l\'API. C\'est un protocole simple, robuste et universel.' },
                  { q: 'Qu\'est-ce qu\'un cycle API et quelle est sa durée typique ?', r: 'Séquence répétée : lecture des entrées (capteurs) → exécution du programme → écriture des sorties (actionneurs). Durée : 1 à 100 ms selon la complexité', expl: 'Un cycle de 10 ms signifie que l\'API réagit en moins de 10 ms à un changement d\'état d\'un capteur. Pour la gestion de pompes, 100 ms est amplement suffisant.' },
                  { q: 'Pourquoi la cybersécurité est-elle un enjeu pour les systèmes SCADA d\'eau ?', r: 'Les réseaux d\'eau et STEP sont des infrastructures critiques. Une attaque peut modifier des dosages de réactifs, arrêter des pompes ou déclencher des alarmes intempestives', expl: 'En 2021, une usine de potabilisation en Floride a subi une attaque : un pirate a tenté d\'augmenter la dose de soude caustique × 100. Isolement des réseaux SCADA d\'Internet = mesure prioritaire.' },
                  { q: 'Qu\'est-ce que l\'IHM (Interface Homme Machine) ?', r: 'Écran (tactile ou PC) permettant à l\'opérateur de visualiser l\'état du processus, acquitter les alarmes et envoyer des commandes manuelles', expl: 'L\'IHM peut être locale (pupitre sur la STEP) ou déportée (SCADA sur serveur). Elle affiche les synoptiques, les courbes de tendance et la liste des alarmes actives.' },
                ],
              },
              {
                id: 'ins-3',
                titre: 'Télégestion des réseaux d\'eau',
                fiche: {
                  intro: 'La télégestion permet de surveiller et piloter à distance des ouvrages dispersés (stations de pompage, réservoirs, surpresseurs). Elle réduit les déplacements et améliore la réactivité face aux incidents.',
                  points: [
                    '📡 Définition : système de surveillance et de commande à distance d\'ouvrages répartis géographiquement',
                    '🏗️ Architecture : capteur/actionneur → RTU (Remote Terminal Unit) → réseau de communication → serveur télégestion → opérateur',
                    '📶 Réseaux de communication utilisés : GPRS/4G (réseau cellulaire) | LoRaWAN / Sigfox (LPWAN IoT, faible débit, longue portée) | radio UHF propriétaire | fibre optique',
                    '📊 Fonctions principales : mesure en temps réel | alarmes (SMS, email, application) | commandes à distance (marche/arrêt pompes, ouverture vannes) | historiques et courbes',
                    '⚡ Avantages : réduction des rondes terrain | réactivité incidents | optimisation énergétique (pilotage pompes aux heures creuses) | bilan eau (rendement réseau)',
                    '📋 Obligations réglementaires : autosurveillance STEP (arrêté 22/06/2007) — télétransmission des données au ROSEAU (Réseau d\'Observation et de Surveillance des Eaux)',
                    '💧 Autosurveillance AEP : suivi débit distribué, chlore résiduel, pression, turbidité — en continu ou horaire selon le réseau',
                    '🔋 Alimentation des RTU isolés : panneaux solaires + batterie. Consommation LoRa : quelques mA → autonomie plusieurs années',
                  ],
                  formules: [
                    'Rendement réseau = Volume facturé / Volume mis en distribution × 100 (%)',
                    'ILP (Indice Linéaire de Perte) = Pertes réelles (m³/j) / longueur réseau (km) — seuil de performance',
                  ],
                  retenir: 'Télégestion = RTU + réseau comm. (4G, LoRa) + serveur. Fonctions : mesure, alarmes, commandes, historiques. Autosurveillance STEP obligatoire (arrêté 2007).',
                  schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Télégestion et autosurveillance</div><div style="display:flex;flex-direction:column;gap:6px"><div style="display:flex;gap:8px"><div style="background:rgba(37,99,235,.08);border:1.5px solid rgba(37,99,235,.35);border-radius:8px;padding:9px;flex:2"><div style="font-size:10.5px;font-weight:800;color:#1D4ED8;margin-bottom:5px">📡 Architecture télégestion</div><div style="display:flex;align-items:center;gap:8px;font-size:9px;color:var(--c-text-3)"><div style="text-align:center"><div style="font-size:14px">🏭</div><div>Site distant<br>RTU/API</div></div><div style="font-size:12px">→</div><div style="text-align:center"><div style="font-size:14px">📶</div><div>Réseau<br>4G/LoRa</div></div><div style="font-size:12px">→</div><div style="text-align:center"><div style="font-size:14px">🖥️</div><div>Serveur<br>SCADA</div></div><div style="font-size:12px">→</div><div style="text-align:center"><div style="font-size:14px">📱</div><div>Astreinte<br>SMS/App</div></div></div></div><div style="background:rgba(22,163,74,.08);border:1.5px solid rgba(22,163,74,.35);border-radius:8px;padding:9px;flex:1"><div style="font-size:10.5px;font-weight:800;color:#15803D;margin-bottom:5px">Fonctions</div><div style="font-size:9px;color:var(--c-text-3);display:flex;flex-direction:column;gap:2px"><div>📊 Mesures temps réel</div><div>🔔 Alarmes automatiques</div><div>⚙️ Commandes à distance</div><div>📁 Historiques / tendances</div></div></div></div><div style="background:rgba(239,68,68,.08);border:1.5px solid rgba(239,68,68,.35);border-radius:8px;padding:9px"><div style="font-size:10.5px;font-weight:800;color:#DC2626;margin-bottom:5px">⚖️ Autosurveillance STEP — Arrêté du 22/06/2007</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:9px;color:var(--c-text-3)"><div><span style="font-weight:600;color:var(--c-text)">&gt; 10 000 EH :</span><br>mesure Q continu<br>analyses mensuelles</div><div><span style="font-weight:600;color:var(--c-text)">Rapport annuel :</span><br>bilan entrée/sortie<br>transmis à la DDT</div><div><span style="font-weight:600;color:var(--c-text)">Déversements DO :</span><br>débitmètre DO<br>événements enregistrés</div></div></div></div></div>',
                },
                flashcards: [
                  { q: 'Qu\'est-ce qu\'un RTU (Remote Terminal Unit) ?', r: 'Unité de télécontrôle déportée : acquiert les mesures des capteurs locaux, les transmet au serveur de télégestion et exécute les commandes distantes', expl: 'Le RTU est l\'équivalent d\'un petit API avec une interface de communication radio ou cellulaire. Il est souvent alimenté par panneau solaire + batterie pour les sites isolés.' },
                  { q: 'Quels réseaux de communication sont utilisés pour la télégestion ?', r: 'GPRS/4G (réseau mobile, ubiquitaire) | LoRaWAN/Sigfox (IoT bas débit, longue portée, économe) | radio UHF propriétaire | fibre optique (sites importants)', expl: 'LoRa est de plus en plus utilisé pour les capteurs de niveau et pression (faible débit suffisant, très économe en énergie). La 4G reste la référence pour les sites nécessitant du débit.' },
                  { q: 'Qu\'est-ce que le rendement de réseau AEP et comment est-il calculé ?', r: 'Rendement = Volume facturé / Volume mis en distribution × 100 %. Un réseau performant a un rendement ≥ 85 %', expl: 'Les pertes (fuites) représentent en France environ 20 % du volume produit. La télégestion permet de détecter les fuites nocturnes (débit minimum nocturne anormal).' },
                  { q: 'Qu\'est-ce que l\'ILP (Indice Linéaire de Perte) ?', r: 'ILP = pertes réelles (m³/j) / longueur de réseau (km). Bon réseau : ILP < 3 m³/j/km. Mauvais : ILP > 10', expl: 'L\'ILP est un indicateur de performance du réseau plus équitable que le rendement (un réseau dense urbain a structurellement plus de fuites qu\'un réseau rural).' },
                  { q: 'Quelles sont les obligations réglementaires d\'autosurveillance pour les STEP ?', r: 'Arrêté du 22/06/2007 : mesure en continu débit entrant/sortant, turbidité sortie, et transmission mensuelle des données au ROSEAU (base nationale)', expl: 'Les STEP > 100 000 EH ont des obligations renforcées (analyseurs en ligne DCO, NH₄, NO₃). Les données sont publiques et visibles sur le portail national de l\'assainissement.' },
                  { q: 'Comment la télégestion contribue-t-elle à l\'optimisation énergétique ?', r: 'En pilotant les pompes aux heures creuses (tarif électrique réduit), en optimisant les points de fonctionnement et en détectant les anomalies de consommation', expl: 'L\'énergie représente 50–70 % des coûts d\'exploitation d\'une STEP ou d\'un réseau AEP. Un système de télégestion intelligent peut réduire la facture électrique de 15–25 %.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  /* ══ LICENCE PRO MÉTIERS DE L'EAU ══════════════════════════════════ */
  'licence-pro': {
    name: 'Licence Professionnelle Métiers de l\'Eau',
    sigle: 'Licence Pro EAU',
    ico: '🎓',
    color: '#1550A0',
    colorl: '#E6EEF8',
    niveau: 'Bac+3',
    organisme: 'Universités — IUT',
    desc: 'Spécialisation après BTS/BUT : exploitation réseau, traitement avancé, milieux aquatiques, droit de l\'eau. Souvent en alternance.',
    annees: [
      {
        id: 'an1',
        name: 'Année de spécialisation (Bac+3)',
        matieres: [

          /* ── Hydrologie appliquée ── */
          { id: 'hydrologie', name: 'Hydrologie appliquée', ico: '⛰️', color: '#0A5090', colorl: '#E6EEF8', chapitres: [
            {
              id: 'hyd-lp-1',
              titre: 'Cycle de l\'eau et bilans hydrologiques',
              fiche: {
                intro: 'Le cycle hydrologique décrit la circulation de l\'eau entre l\'atmosphère, la surface et le sous-sol. Le bilan hydrologique quantifie ces transferts à l\'échelle d\'un bassin versant.',
                points: [
                  '🌧️ Cycle : précipitations → interception (végétation) → ruissellement de surface → infiltration → percolation → nappe → exfiltration → cours d\'eau → évapotranspiration → atmosphère',
                  '📐 Bassin versant (BV) : surface drainée par un cours d\'eau, délimitée par la ligne de partage des eaux (ligne de crête). Unité de gestion hydrologique',
                  '⚖️ Bilan hydrologique : P = ETR + Q + ΔS',
                  '   P = précipitations | ETR = évapotranspiration réelle | Q = ruissellement (débit) | ΔS = variation du stock (nappes, neige)',
                  '💧 Coefficient d\'écoulement Ce = Q/P (sans unité). Varie de 0,05 (milieu aride) à 0,8 (montagne imperméable)',
                  '🌿 ETP (Évapotranspiration Potentielle) : formule de Penman-Monteith (FAO) — dépend T°, humidité, vent, rayonnement',
                  '📊 Données hydrométrie : stations de mesure (HYDRO, Vigicrues), courbes de tarage, module (débit moyen interannuel)',
                  '🗺️ Module spécifique : débit par unité de surface du BV (L/s/km²) — compare les bassins entre eux',
                ],
                formules: [
                  'P = ETR + Q + ΔS — bilan hydrologique (mm ou m³)',
                  'Ce = Q / P — coefficient d\'écoulement (–)',
                  'Module = débit moyen interannuel (m³/s ou L/s/km²)',
                ],
                retenir: 'Bilan : P = ETR + Q + ΔS. Ce = Q/P. Le bassin versant = unité de gestion. Module = débit moyen interannuel. Données : banque HYDRO, Vigicrues.',
                schema: '<svg viewBox="0 0 500 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><defs><marker id="bv" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 Z" fill="#94A3B8"/></marker></defs><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">BILAN HYDROLOGIQUE</text><ellipse cx="250" cy="38" rx="55" ry="22" fill="rgba(14,165,233,.2)" stroke="rgba(14,165,233,.6)" stroke-width="1.5"/><text x="250" y="35" text-anchor="middle" font-size="10" font-weight="800" fill="#0369A1">P = Précipitations</text><text x="250" y="48" text-anchor="middle" font-size="8" fill="#0369A1">pluie + neige</text><line x1="250" y1="60" x2="250" y2="82" stroke="#0369A1" stroke-width="2" marker-end="url(#bv)"/><rect x="120" y="85" width="260" height="55" rx="8" fill="rgba(22,163,74,.10)" stroke="rgba(22,163,74,.5)" stroke-width="1.5"/><text x="250" y="103" text-anchor="middle" font-size="10" font-weight="800" fill="#15803D">Bassin versant</text><text x="250" y="118" text-anchor="middle" font-size="9" fill="var(--c-text-3)">P = ETR + Q + ΔS</text><text x="250" y="130" text-anchor="middle" font-size="8" fill="var(--c-text-3)">Ce = Q/P · Module = Q moyen interannuel</text><line x1="175" y1="85" x2="130" y2="60" stroke="#EF4444" stroke-width="1.5" marker-end="url(#bv)"/><text x="125" y="58" text-anchor="end" font-size="8.5" font-weight="700" fill="#EF4444">ETR</text><text x="125" y="48" text-anchor="end" font-size="7.5" fill="var(--c-text-3)">évapotranspiration</text><line x1="380" y1="112" x2="435" y2="112" stroke="#0369A1" stroke-width="2" marker-end="url(#bv)"/><text x="460" y="115" font-size="9" font-weight="700" fill="#0369A1">Q</text><line x1="250" y1="140" x2="250" y2="160" stroke="#B45309" stroke-width="1.5" marker-end="url(#bv)"/><text x="265" y="158" font-size="8.5" fill="#B45309" font-weight="700">ΔS = variation stock (nappes, neige)</text><rect x="20" y="165" width="200" height="16" rx="4" fill="rgba(14,165,233,.08)" stroke="rgba(14,165,233,.3)" stroke-width="1"/><text x="120" y="176" text-anchor="middle" font-size="8" fill="var(--c-text-3)"><tspan font-weight="700" fill="#0369A1">Données :</tspan> banque HYDRO · Vigicrues</text></svg>',
              },
              flashcards: [
                { q: 'Formule du bilan hydrologique ?', r: 'P = ETR + Q + ΔS  (précipitations = évapotranspiration réelle + débit + variation de stock)', expl: 'Sur une longue période (> 10 ans) et à l\'échelle annuelle, ΔS ≈ 0. On peut alors écrire : Q = P – ETR, ce qui permet d\'estimer la ressource renouvelable.' },
                { q: 'Comment est délimité un bassin versant ?', r: 'Par la ligne de partage des eaux : ligne reliant les points hauts (crêtes) séparant les eaux vers deux bassins différents. Délimitation sur carte topographique ou MNT', expl: 'Un bassin versant topographique peut différer d\'un bassin versant hydrogéologique (les eaux souterraines peuvent traverser une ligne de crête).' },
                { q: 'Que représente le coefficient d\'écoulement Ce ?', r: 'Ce = Q/P : fraction des précipitations qui ruisselle vers les cours d\'eau. Ce varie de 0,05 (milieu aride) à 0,8 (montagne granitique imperméable)', expl: 'Le reste (1 – Ce) retourne à l\'atmosphère par évapotranspiration. En France métropolitaine, Ce moyen ≈ 0,3–0,5 selon les régions.' },
                { q: 'Qu\'est-ce que le module d\'un cours d\'eau ?', r: 'Le débit moyen interannuel (m³/s). Calculé sur une longue série (> 20 ans). C\'est la valeur de référence pour caractériser une rivière', expl: 'Le module sert de base aux calculs réglementaires (débit réservé = module/10) et aux études d\'impact (prélèvements, rejets).' },
                { q: 'Qu\'est-ce que la banque de données HYDRO ?', r: 'Base nationale des données hydrométriques (débits, niveaux) des cours d\'eau français. Gérée par le SCHAPI et les DREAL. Accès public via hubeau.eaufrance.fr', expl: 'HYDRO contient les chroniques de débits depuis parfois 1880. Indispensable pour les études hydrologiques (fréquence des crues, étiages de référence).' },
                { q: 'Qu\'est-ce que l\'évapotranspiration potentielle (ETP) ?', r: 'Quantité d\'eau évaporée et transpirée par la végétation si l\'eau est disponible en quantité illimitée. ETP > ETR réelle si déficit hydrique', expl: 'En France : ETP annuelle ≈ 600–800 mm. La formule de Penman-Monteith (FAO) est la référence internationale. Elle intègre température, humidité relative, vent et rayonnement solaire.' },
              ],
            },
            {
              id: 'hyd-lp-2',
              titre: 'Précipitations, ruissellement et crues',
              fiche: {
                intro: 'Les crues sont les événements hydrologiques extrêmes qui menacent les personnes et les biens. Leur caractérisation statistique et leur prévision reposent sur l\'analyse des précipitations et des modèles pluie-débit.',
                points: [
                  '🌧️ Mesure des précipitations : pluviomètre (bague collectrice), pluviographe (enregistreur), radar météo (Doppler — résolution 1 km)',
                  '📊 Courbes IDF (Intensité-Durée-Fréquence) : outil réglementaire donnant l\'intensité pluviale (mm/h) en fonction de la durée et la période de retour',
                  '📈 Hydrogramme de crue : débit en fonction du temps. Caractéristiques : temps de montée, débit de pointe Qp, volume, temps de décrue',
                  '🔢 Période de retour T (ans) : probabilité annuelle de dépassement p = 1/T. Crue T = 100 ans = probabilité 1/100 = 1 % chaque année',
                  '📐 Méthode rationnelle (BV < 2 km²) : Q = C × i × A / 360 (L/s)',
                  '🏔️ Méthode GRADEX (grands BV) : extrapolation statistique des débits de crue pour les faibles probabilités (crues rares)',
                  '💻 Modèles pluie-débit : GR4J (4 paramètres, modèle conceptuel) — MIKE FLOOD — HEC-HMS. Simuler le débit à partir des précipitations',
                  '⚠️ PPRI (Plan de Prévention des Risques d\'Inondation) : cartographie zones inondables (aléa + enjeux). Opposable aux tiers (annexe PLU)',
                ],
                formules: [
                  'Q = C × i × A / 360 — méthode rationnelle (L/s, A en ha, i en mm/h)',
                  'p = 1/T — probabilité annuelle de dépassement d\'une crue de période de retour T',
                ],
                retenir: 'IDF = outil clé pour le dimensionnement EP. Crue T100 = p=1%. Méthode rationnelle pour BV < 2 km². PPRI = zonage réglementaire inondation.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Crues et périodes de retour — notions clés</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><div style="background:rgba(239,68,68,.08);border:1.5px solid rgba(239,68,68,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#DC2626;margin-bottom:6px">Période de retour T</div><div style="display:flex;flex-direction:column;gap:4px;font-size:9px;color:var(--c-text-3)"><div style="display:flex;justify-content:space-between;padding:3px 6px;background:var(--c-surface);border-radius:4px"><span>Crue T2</span><span style="font-weight:700">p = 50 %/an</span></div><div style="display:flex;justify-content:space-between;padding:3px 6px;background:var(--c-surface);border-radius:4px"><span>Crue T10</span><span style="font-weight:700">p = 10 %/an</span></div><div style="display:flex;justify-content:space-between;padding:3px 6px;background:rgba(239,68,68,.12);border-radius:4px;font-weight:600"><span>Crue T100</span><span style="color:#DC2626">p = 1 %/an</span></div><div style="display:flex;justify-content:space-between;padding:3px 6px;background:var(--c-surface);border-radius:4px"><span>Crue T1000</span><span style="font-weight:700">p = 0,1 %/an</span></div></div><div style="font-size:8.5px;color:var(--c-text-3);margin-top:5px;font-style:italic">Référence PPRI : T100 en général</div></div><div style="background:rgba(37,99,235,.08);border:1.5px solid rgba(37,99,235,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#1D4ED8;margin-bottom:6px">Courbes IDF</div><div style="font-size:9px;color:var(--c-text-3);margin-bottom:6px">Intensité — Durée — Fréquence<br>Outil de base pour dimensionnement EP</div><div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 6px 6px 0;padding:5px 8px;font-family:monospace;font-size:10px;font-weight:700;color:var(--c-primary)">i = a(T) / (b + t)^c</div><div style="font-size:8.5px;color:var(--c-text-3);margin-top:4px">Méthode Montana · Coefficients selon la zone et T</div></div></div><div style="background:rgba(22,163,74,.08);border:1px solid rgba(22,163,74,.3);border-radius:8px;padding:8px 10px"><div style="font-size:10px;font-weight:700;color:#15803D;margin-bottom:4px">Méthode rationnelle (BV &lt; 2 km²)</div><div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 6px 6px 0;padding:5px 8px;font-family:monospace;font-size:11px;font-weight:700;color:var(--c-primary);margin-bottom:5px">Q = C × i(T,tc) × A</div><div style="font-size:9px;color:var(--c-text-3)">tc = temps de concentration · C = coeff. ruissellement · A = superficie</div></div></div>',
              },
              flashcards: [
                { q: 'Qu\'est-ce qu\'une courbe IDF ?', r: 'Courbe Intensité-Durée-Fréquence : donne l\'intensité pluviale (mm/h) pour une durée d\'événement et une période de retour donnée', expl: 'Exemple : pour T = 10 ans et durée 1h, une IDF de Paris donne i ≈ 25 mm/h. Utilisée pour dimensionner les réseaux EP, les bassins de rétention, les déversoirs.' },
                { q: 'Qu\'est-ce que la période de retour d\'une crue ?', r: 'T (ans) = 1/p où p est la probabilité annuelle de dépassement. Une crue T100 a p = 1% chaque année, pas qu\'une fois tous les 100 ans exactement', expl: 'Un événement T100 peut se produire deux fois en 5 ans. La probabilité d\'avoir au moins un T100 en 100 ans est : 1-(1-1/100)^100 ≈ 63 %.' },
                { q: 'Qu\'est-ce que l\'hydrogramme de crue ?', r: 'Graphique débit = f(temps) pour un événement pluvieux. Comprend : temps de montée → pic Qp → décrue. La forme dépend du BV, du sol et de la pluie', expl: 'Un BV imperméable et dense → montée rapide et pic élevé. Un BV forestier avec sol perméable → montée lente et pic écrêté. La restauration des zones humides réduit les pics.' },
                { q: 'Pour quels bassins versants la méthode rationnelle est-elle valable ?', r: 'BV < 2 km² (petits bassins urbains ou ruraux). Au-delà, les hypothèses de la méthode ne sont plus valides', expl: 'La méthode rationnelle suppose que la pluie est uniforme et que la durée de la pluie = le temps de concentration du BV. Pour les grands BV, on utilise GRADEX ou des modèles pluie-débit.' },
                { q: 'Qu\'est-ce que le PPRI et quelle est sa portée juridique ?', r: 'Plan de Prévention des Risques d\'Inondation : cartographie l\'aléa inondation et définit des zones réglementaires. Annexé au PLU → opposable aux tiers', expl: 'En zone rouge (aléa fort), toute construction est en général interdite. En zone bleue (aléa modéré), des prescriptions s\'imposent (plancher surélevé, matériaux adaptés).' },
                { q: 'Qu\'est-ce que le modèle GR4J ?', r: 'Modèle pluie-débit conceptuel à 4 paramètres (Génie Rural, journalier) — transforme les séries de pluie et ETP en débit journalier calculé', expl: 'GR4J est un modèle simple mais performant, développé par INRAE. Très utilisé en France pour la simulation hydrologique et la prévision des crues.' },
              ],
            },
            {
              id: 'hyd-lp-3',
              titre: 'Étiages et débits réservés',
              fiche: {
                intro: 'Les étiages représentent les périodes de faibles débits, critiques pour les usages de l\'eau (prélèvements, dilution des rejets, vie aquatique). Leur gestion est encadrée par des débits réglementaires minimaux.',
                points: [
                  '📉 Étiage : période de basses eaux. En France : principalement été-automne (fonte des neiges passée + déficit estival). Aggravé par le changement climatique',
                  '📊 VCN10 (m³/s) : débit moyen minimum sur 10 jours consécutifs pour une année donnée. Indicateur couramment utilisé pour caractériser la sévérité d\'un étiage',
                  '📊 QMNA5 : débit mensuel sec de période de retour 5 ans = débit de référence réglementaire pour les autorisations de prélèvements et de rejets',
                  '⚖️ Débit réservé (ou débit minimum biologique) : débit à maintenir obligatoirement en aval de tout ouvrage prélevant de l\'eau',
                  '   Règle générale : 1/10 du module (débit moyen annuel) — ou 1/40 du module si l\'ouvrage existait avant 1984',
                  '🚨 Seuils d\'alerte sécheresse : DDT fixe par arrêté préfectoral 4 niveaux (vigilance → alerte → alerte renforcée → crise). Restrictions d\'usage progressives',
                  '🌡️ Changement climatique : augmentation de la fréquence et de la sévérité des étiages. QMNA5 en baisse de 20–40 % d\'ici 2050 selon les scénarios RCP8.5',
                  '💡 DSA (Débit de Salubrité Aquatique) : débit minimal pour maintenir la vie aquatique — souvent supérieur au débit réservé réglementaire',
                ],
                formules: [
                  'Débit réservé = Module / 10 (règle générale — art. L214-18 Code envt)',
                  'QMNA5 = débit mensuel minimum dépassé 4 années sur 5 (fréquence de non-dépassement 20 %)',
                ],
                retenir: 'QMNA5 = débit de référence réglementaire. Débit réservé = module/10. Étiages aggravés par le CC (-20 à -40% d\'ici 2050). VCN10 = indicateur de sévérité.',
                schema: '<svg viewBox="0 0 500 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">ÉTIAGES — INDICATEURS RÉGLEMENTAIRES</text><!-- Hydrograph --><polyline points="10,55 40,50 70,45 100,40 130,45 160,58 190,80 220,105 250,120 280,125 310,118 340,100 370,80 400,60 430,50 460,45 490,48" fill="none" stroke="rgba(14,165,233,.7)" stroke-width="2.5"/><line x1="10" y1="55" x2="490" y2="55" stroke="var(--c-border)" stroke-width="0.5" stroke-dasharray="3,2"/><text x="495" y="58" font-size="7.5" fill="var(--c-text-3)">Module</text><!-- QMNA5 line --><line x1="10" y1="120" x2="490" y2="120" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="6,3"/><text x="495" y="123" font-size="7.5" fill="#EF4444" font-weight="700">QMNA5</text><!-- Débit réservé line --><line x1="10" y1="135" x2="490" y2="135" stroke="#B45309" stroke-width="1.5" stroke-dasharray="4,3"/><text x="495" y="138" font-size="7.5" fill="#B45309" font-weight="700">Q rés.</text><!-- X axis --><line x1="10" y1="150" x2="490" y2="150" stroke="var(--c-border)" stroke-width="1"/><text x="10" y="162" font-size="7.5" fill="var(--c-text-3)">J</text><text x="60" y="162" font-size="7.5" fill="var(--c-text-3)">F</text><text x="110" y="162" font-size="7.5" fill="var(--c-text-3)">M</text><text x="160" y="162" font-size="7.5" fill="var(--c-text-3)">A</text><text x="210" y="162" font-size="7.5" fill="var(--c-text-3)">M</text><text x="260" y="162" font-size="7.5" fill="var(--c-text-3)">J</text><text x="310" y="162" font-size="7.5" fill="var(--c-text-3)">J</text><text x="360" y="162" font-size="7.5" fill="var(--c-text-3)">A</text><text x="410" y="162" font-size="7.5" fill="var(--c-text-3)">S</text><text x="460" y="162" font-size="7.5" fill="var(--c-text-3)">O</text><!-- Definitions box --><rect x="130" y="155" width="230" height="14" rx="4" fill="rgba(239,68,68,.07)"/><text x="245" y="165" text-anchor="middle" font-size="7.5" fill="var(--c-text-3)"><tspan font-weight="700" fill="#EF4444">QMNA5 :</tspan> plus bas débit mensuel de fréquence 1/5 ans · Q réservé = module/10</text></svg>',
              },
              flashcards: [
                { q: 'Qu\'est-ce que le QMNA5 ?', r: 'Débit Mensuel Minimum de fréquence 5 ans de retour : le débit du mois le plus sec qui n\'est dépassé (vers le bas) qu\'une fois tous les 5 ans', expl: 'C\'est la référence pour fixer les débits réservés et encadrer les prélèvements d\'eau. Les autorisations IOTA vérifient que le prélèvement ne descend pas sous le QMNA5.' },
                { q: 'Quelle est la règle générale pour le débit réservé ?', r: '1/10 du module (débit moyen interannuel). Valeur minimale à maintenir en aval de tout ouvrage de prélèvement ou de retenue', expl: 'Art. L214-18 du Code de l\'environnement. Si l\'ouvrage existait avant 1984 et n\'a pas fait l\'objet d\'une nouvelle autorisation : débit réservé = module/40.' },
                { q: 'Qu\'est-ce que le VCN10 ?', r: 'Volume (débit) Caractéristique de crue Négative sur 10 jours : débit minimal moyen sur 10 jours consécutifs, calculé sur une année donnée', expl: 'Le VCN10 quinquennal sec (VQCN10-5) est le VCN10 de période de retour 5 ans = l\'un des indicateurs officiels pour caractériser les étiages sévères.' },
                { q: 'Quels sont les 4 niveaux d\'alerte sécheresse ?', r: 'Vigilance → Alerte → Alerte renforcée → Crise. Chaque niveau déclenche des restrictions d\'usage (agriculture, industrie, collectivités, particuliers)', expl: 'Les restrictions progressent : en crise, l\'irrigation agricole peut être totalement interdite. Le portail "propluvia" (gouvernement) cartographie les arrêtés en temps réel.' },
                { q: 'Comment le changement climatique affecte-t-il les étiages en France ?', r: 'Augmentation de la fréquence et de la sévérité. QMNA5 en baisse de 20–40 % d\'ici 2050 sur les bassins méditerranéens et atlantiques selon les scénarios RCP8.5', expl: 'La recharge hivernale des nappes diminue (moins de pluies hivernales, plus d\'évaporation). Les étiages commencent plus tôt et durent plus longtemps, mettant en tension les usages.' },
                { q: 'Pourquoi le débit réservé peut-il être insuffisant pour la vie aquatique ?', r: 'Le débit réservé (module/10) est un minimum légal, souvent inférieur au Débit de Salubrité Aquatique (DSA) nécessaire pour maintenir les habitats et la faune piscicole', expl: 'Des études montrent qu\'un DSA correspond souvent à 30–40 % du module. Le module/10 ne permet pas toujours le maintien des espèces les plus exigeantes (salmonidés).' },
              ],
            },
          ]},

          /* ── Droit et gestion de l'eau ── */
          { id: 'droit-eau', name: 'Droit et gestion de l\'eau', ico: '⚖️', color: '#8B4513', colorl: '#FBF0E6', chapitres: [
            {
              id: 'dr-lp-1',
              titre: 'Domanialité et propriété de l\'eau',
              fiche: {
                intro: 'Le statut juridique de l\'eau et des cours d\'eau détermine qui en est propriétaire, qui peut l\'utiliser et selon quelles règles. L\'eau n\'est pas une marchandise ordinaire : c\'est un bien commun à usage réglementé.',
                points: [
                  '📜 Art. L210-1 Code envt : "L\'eau fait partie du patrimoine commun de la nation." Son usage appartient à tous dans le respect des lois.',
                  '🌊 Domaine Public Fluvial (DPF) : cours d\'eau navigables/flottables + lacs domaniaux → propriété de l\'État ou des collectivités. Géré par VNF ou les Départements',
                  '🏡 Cours d\'eau non domaniaux : lit appartient aux propriétaires riverains (moitié chacun jusqu\'à la ligne médiane). Mais usage de l\'eau = droit d\'usage encadré',
                  '⛏️ Eaux souterraines : art. 552 Code Civil → propriétaire du terrain est propriétaire de l\'eau, MAIS prélèvements soumis à autorisation IOTA au-delà des seuils',
                  '💰 Prix de l\'eau : France ≈ 2,10 €/m³ TTC (eau + assainissement). Varie de 1,50 à 5 €/m³ selon les territoires',
                  '🌍 ODD 6 de l\'ONU (Agenda 2030) : accès universel à l\'eau potable et à l\'assainissement d\'ici 2030',
                  '🔒 Loi BROTTES (2013) : interdiction de coupure d\'eau aux résidences principales (droit à l\'eau). Avance de trésorerie possible par les CCAS',
                  '🏛️ Services eau : SPIC (Service Public Industriel et Commercial) — délégués à des entreprises privées (DSP) ou gérés en régie',
                ],
                formules: [],
                retenir: 'Eau = patrimoine commun (L210-1). Cours d\'eau domaniaux = État/collectivités. Cours d\'eau non domaniaux = riverains. Eaux souterraines = propriétaire terrain (sous conditions).',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Propriété de l\'eau en France</div><div style="display:flex;flex-direction:column;gap:5px"><div style="display:flex;gap:8px"><div style="background:rgba(37,99,235,.10);border:1.5px solid rgba(37,99,235,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:800;color:#1D4ED8">🏛️ Cours d\'eau domaniaux</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Propriété État / collectivités<br>Navigables + flottables classifiés<br>Ex : Rhône, Loire, Seine</div></div><div style="background:rgba(22,163,74,.10);border:1.5px solid rgba(22,163,74,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:800;color:#15803D">🏡 Cours d\'eau non domaniaux</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Propriété riverains (jusqu\'au milieu)<br>Obligation d\'entretien (L215-14)<br>Servitude de passage rive</div></div></div><div style="display:flex;gap:8px"><div style="background:rgba(217,119,6,.10);border:1.5px solid rgba(217,119,6,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:800;color:#B45309">💧 Eaux souterraines</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Propriétaire du terrain (C.civ 552)<br>Mais usage limité par : IOTA, débits réservés, protection captages<br>État = gardien de la ressource</div></div><div style="background:rgba(124,58,237,.10);border:1.5px solid rgba(124,58,237,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:800;color:#6D28D9">☔ Eaux de pluie</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Propriétaire terrain<br>Récupération légale (décret 2008)<br>Usage intérieur limité (WC, arrosage)</div></div></div><div style="background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.3);border-radius:6px;padding:7px 10px;font-size:9px;color:var(--c-text-3)"><span style="font-weight:700;color:#0369A1">L210-1 Code de l\'environnement : </span>« L\'eau fait partie du patrimoine commun de la nation. Sa protection, sa mise en valeur et le développement de la ressource utilisable... »</div></div></div>',
              },
              flashcards: [
                { q: 'Qu\'est-ce que le Domaine Public Fluvial (DPF) ?', r: 'Ensemble des cours d\'eau navigables et flottables + lacs domaniaux appartenant à l\'État ou aux Régions/Départements. Géré par VNF pour les canaux et rivières navigables', expl: 'Les berges et le lit des cours d\'eau du DPF sont inaliénables. Les riverains ont des droits d\'usage mais pas de propriété. Les ports intérieurs font aussi partie du DPF.' },
                { q: 'Qui est propriétaire du lit d\'un cours d\'eau non domanial ?', r: 'Les propriétaires riverains, chacun jusqu\'à la ligne médiane du cours d\'eau (mi-lit). En l\'absence de riverain identifié : l\'État', expl: 'Cette règle est fixée par l\'art. L215-2 du Code de l\'environnement. Le propriétaire riverain a des obligations : entretien des berges, laissez-passer des engins d\'entretien.' },
                { q: 'À qui appartiennent les eaux souterraines en France ?', r: 'Au propriétaire du terrain (art. 552 Code Civil), mais les prélèvements sont soumis à autorisation ou déclaration IOTA au-delà de seuils fixés par la nomenclature eau', expl: 'En pratique, un forage domestique (≤ 1 000 m³/an, usage domestique) est libre. Au-delà, déclaration ou autorisation. Un forage industriel ou agricole est très encadré.' },
                { q: 'Qu\'est-ce que la Loi BROTTES (2013) prévoit pour le droit à l\'eau ?', r: 'Interdiction de coupure d\'eau dans les résidences principales toute l\'année. Maintien d\'un débit minimum si impayé. Aide via les CCAS (avance de trésorerie)', expl: 'Avant 2013, les coupures d\'eau pour impayés étaient possibles. Cette loi reconnaît l\'eau comme droit fondamental. Les factures impayées restent dues : c\'est une avance, pas une remise.' },
                { q: 'Quelle est la différence entre une régie et une DSP pour les services d\'eau ?', r: 'Régie = la collectivité gère directement le service (agents publics, budget municipal). DSP (Délégation de Service Public) = contrat avec un opérateur privé (Veolia, Suez, Saur…)', expl: 'En France, environ 50 % de la population est en DSP, 50 % en régie. La tendance récente est le retour en régie (Paris, Grenoble, Bordeaux…) pour des raisons de transparence et de coût.' },
                { q: 'Quel est l\'ODD 6 de l\'ONU et son objectif ?', r: 'Objectif de Développement Durable 6 : garantir l\'accès de tous à l\'eau et à l\'assainissement, et assurer une gestion durable des ressources en eau d\'ici 2030', expl: 'En 2023, 2,2 milliards de personnes n\'avaient pas accès à l\'eau potable gérée de façon sûre. L\'ODD 6 est très loin d\'être atteint à l\'échelle mondiale.' },
              ],
            },
            {
              id: 'dr-lp-2',
              titre: 'Police de l\'eau et procédures IOTA',
              fiche: {
                intro: 'La police de l\'eau encadre tous les projets susceptibles d\'affecter les milieux aquatiques. La procédure IOTA soumet les travaux à autorisation ou déclaration selon leur impact potentiel.',
                points: [
                  '👮 Police de l\'eau : exercée par l\'OFB (Office Français de la Biodiversité) et les DDT(M) (Direction Départementale des Territoires). Pouvoirs de police judiciaire',
                  '⚙️ IOTA : Installations, Ouvrages, Travaux, Activités soumis à la nomenclature eau (art. R214-1 Code envt)',
                  '3️⃣ 3 régimes selon l\'impact : Autorisation (dossier complet + enquête publique + arrêté préfectoral) | Déclaration (dossier simplifié, récépissé) | Aucune formalité',
                  '📋 Dossier loi sur l\'eau (autorisation) : description du projet + état initial + impact sur les eaux + mesures ERC + étude d\'incidence',
                  '🔍 Enquête publique (autorisation) : obligatoire pour les projets les plus impactants. Commissaire enquêteur indépendant. Durée ≥ 30 jours',
                  '🚨 Sanctions : arrêt des travaux + remise en état + amende (jusqu\'à 75 000 € et 2 ans de prison pour les infractions graves)',
                  '📜 DIG (Déclaration d\'Intérêt Général) : procédure permettant à une collectivité d\'intervenir sur des terrains privés pour des travaux d\'entretien ou de restauration de cours d\'eau',
                  '🌡️ Arrêtés-cadre sécheresse : mesures de restriction des usages de l\'eau par niveau d\'alerte (vigilance → crise). Préfet de département',
                ],
                formules: [],
                retenir: 'IOTA = 3 régimes (autorisation, déclaration, sans formalité). OFB + DDT = police de l\'eau. DIG = intervention collective sur terrain privé. Infraction → remise en état + amende.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">IOTA — Nomenclature eau (art. R214-1)</div><div style="display:flex;gap:8px;margin-bottom:10px"><div style="background:rgba(239,68,68,.10);border:1.5px solid rgba(239,68,68,.45);border-radius:8px;padding:8px 12px;flex:1;text-align:center"><div style="font-size:18px">📋</div><div style="font-size:10.5px;font-weight:800;color:#DC2626;margin-top:3px">Autorisation</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Rubrique 1° — impact fort<br>Dossier Loi sur l\'eau<br>Arrêté préfectoral</div></div><div style="background:rgba(217,119,6,.10);border:1.5px solid rgba(217,119,6,.45);border-radius:8px;padding:8px 12px;flex:1;text-align:center"><div style="font-size:18px">📩</div><div style="font-size:10.5px;font-weight:800;color:#B45309;margin-top:3px">Déclaration</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Rubrique 2° — impact modéré<br>Récépissé préfecture<br>Délai 2 mois</div></div><div style="background:rgba(22,163,74,.10);border:1.5px solid rgba(22,163,74,.45);border-radius:8px;padding:8px 12px;flex:1;text-align:center"><div style="font-size:18px">✅</div><div style="font-size:10.5px;font-weight:800;color:#15803D;margin-top:3px">Sans formalité</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">En dessous des seuils<br>Aucune procédure<br>Mais bonnes pratiques</div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:6px;padding:7px 10px"><div style="font-size:9.5px;font-weight:700;color:var(--c-text);margin-bottom:4px">👮 Police de l\'eau</div><div style="font-size:9px;color:var(--c-text-3)"><span style="font-weight:600">OFB</span> (Office Français Biodiversité) + <span style="font-weight:600">DDT</span><br>Contrôles · PV · Mise en demeure · Amende</div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:6px;padding:7px 10px"><div style="font-size:9.5px;font-weight:700;color:var(--c-text);margin-bottom:4px">🤝 DIG</div><div style="font-size:9px;color:var(--c-text-3)">Déclaration d\'Intérêt Général<br>Intervention collectivité sur terrain privé pour travaux d\'intérêt public (entretien cours d\'eau)</div></div></div></div>',
              },
              flashcards: [
                { q: 'Qu\'est-ce qu\'une IOTA ?', r: 'Installation, Ouvrage, Travaux ou Activité susceptible d\'affecter les eaux ou les milieux aquatiques, soumis à la nomenclature eau (R214-1)', expl: 'Exemples : forage, prise d\'eau, rejet en cours d\'eau, remblaiement en zone humide, modification du lit d\'une rivière, construction d\'un barrage.' },
                { q: 'Quels sont les 3 régimes de la nomenclature eau ?', r: 'Autorisation (impacts forts → enquête publique + arrêté préfectoral) | Déclaration (impacts modérés → récépissé) | Aucune formalité (impact négligeable)', expl: 'Le seuil entre déclaration et autorisation dépend du type d\'ouvrage et de sa taille. Ex : prise d\'eau en rivière < 200 m³/h = déclaration ; > 1 000 m³/h = autorisation.' },
                { q: 'Qu\'est-ce que la DIG ?', r: 'Déclaration d\'Intérêt Général : arrêté préfectoral qui autorise une collectivité à intervenir sur des propriétés privées (berges, lit) pour des travaux d\'entretien de cours d\'eau', expl: 'Sans DIG, une collectivité ne peut pas travailler sur terrain privé. La DIG est souvent couplée à un plan de gestion pluriannuel (5 ans) financé par les Agences de l\'eau.' },
                { q: 'Quelles sont les sanctions d\'une infraction à la police de l\'eau ?', r: 'Arrêt immédiat des travaux + obligation de remise en état + amende jusqu\'à 75 000 € + peine d\'emprisonnement jusqu\'à 2 ans (infractions graves)', expl: 'Les agents de l\'OFB ont un statut de police judiciaire : ils peuvent constater des infractions, dresser des PV et déclencher des poursuites pénales.' },
                { q: 'Quel organisme exerce principalement la police de l\'eau en France ?', r: 'L\'OFB (Office Français de la Biodiversité) et les DDT(M) (Directions Départementales des Territoires et de la Mer)', expl: 'L\'OFB (créé en 2020 par fusion de l\'ONEMA et de l\'AFB) compte environ 2 800 agents. Ses inspecteurs environnementaux contrôlent les installations, les rejets et les prélèvements.' },
                { q: 'Qu\'est-ce qu\'une enquête publique dans le cadre d\'une autorisation IOTA ?', r: 'Procédure obligatoire pour les projets soumis à autorisation : un commissaire enquêteur indépendant recueille les observations du public pendant ≥ 30 jours, puis rend un avis', expl: 'L\'avis du commissaire enquêteur n\'est pas contraignant pour le préfet, mais un avis défavorable motivé est un signal fort. Il doit être suivi sauf motif impérieux.' },
              ],
            },
          ]},

          /* ── Exploitation des réseaux ── */
          { id: 'exploitation', name: 'Exploitation des réseaux AEP', ico: '🔧', color: '#0A7460', colorl: '#E0F4F0', chapitres: [
            {
              id: 'exp-lp-1',
              titre: 'Maintenance préventive et corrective des réseaux AEP',
              fiche: {
                intro: 'L\'exploitation d\'un réseau d\'eau potable exige un programme de maintenance rigoureux pour garantir la continuité du service, la qualité de l\'eau et la durabilité des ouvrages.',
                points: [
                  '🛠️ Maintenance préventive : interventions planifiées pour éviter les pannes. Ex : vidange/nettoyage réservoirs (1/an), renouvellement joints vannes (5–10 ans), purges réseau',
                  '🚨 Maintenance corrective : intervention suite à une fuite, une rupture, une panne de pompe ou une contamination. Délai d\'intervention ≤ 4h (astreinte 24h/24)',
                  '🔄 Taux de renouvellement recommandé : 1–1,5 % du linéaire par an. France : ~0,6 %/an → déficit chronique → vieillissement du parc',
                  '🔧 Techniques de réhabilitation sans tranchée : gainage (résine projetée à l\'intérieur), chemisage (tubage PEHD ou fibre de verre), éclatement (pipe bursting)',
                  '📋 RPQS (Rapport sur le Prix et la Qualité du Service) : rapport annuel obligatoire pour toute collectivité. Indicateurs de performance publiés (SISPEA)',
                  '💧 Indicateurs de performance clés : rendement réseau | ILP (Indice Linéaire de Pertes) | taux de renouvellement | taux de conformité bactériologique et physico-chimique',
                  '⚠️ Plan de gestion des crises : procédure d\'urgence (contamination, rupture d\'alimentation). ARS notifiée immédiatement en cas d\'alerte qualité',
                  '🗓️ Plan Pluriannuel de Renouvellement (PPR) : programmation des travaux à 5–10 ans selon l\'état du réseau (données ITV, âge, matériaux, incidents)',
                ],
                formules: [
                  'Taux de renouvellement = km renouvelés / km total × 100 (% par an)',
                  'Taux de casse = nombre de réparations de fuites / 100 km de réseau / an — indicateur de dégradation',
                ],
                retenir: 'Renouvellement cible : 1–1,5 %/an. France : 0,6 % = insuffisant. Maintenance préventive planifiée > corrective. Techniques sans tranchée pour réhabilitation. RPQS obligatoire.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Gestion patrimoniale des réseaux d\'eau</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px"><div style="background:rgba(239,68,68,.10);border:1.5px solid rgba(239,68,68,.4);border-radius:8px;padding:8px;text-align:center"><div style="font-size:22px;font-weight:900;color:#DC2626">0,6 %</div><div style="font-size:9.5px;font-weight:700;color:var(--c-text)">Taux France actuel</div><div style="font-size:8.5px;color:var(--c-text-3);margin-top:2px">Insuffisant — durée de vie réseau&nbsp;: 167 ans</div></div><div style="background:rgba(22,163,74,.10);border:1.5px solid rgba(22,163,74,.4);border-radius:8px;padding:8px;text-align:center"><div style="font-size:22px;font-weight:900;color:#15803D">1–1,5 %</div><div style="font-size:9.5px;font-weight:700;color:var(--c-text)">Taux cible</div><div style="font-size:8.5px;color:var(--c-text-3);margin-top:2px">Durée de vie cible : 70–100 ans</div></div><div style="background:rgba(37,99,235,.10);border:1.5px solid rgba(37,99,235,.4);border-radius:8px;padding:8px;text-align:center"><div style="font-size:22px;font-weight:900;color:#1D4ED8">30 %</div><div style="font-size:9.5px;font-weight:700;color:var(--c-text)">Réseau &gt; 40 ans</div><div style="font-size:8.5px;color:var(--c-text-3);margin-top:2px">Fonte grise &amp; amiante-ciment</div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px"><div style="font-size:10px;font-weight:700;color:var(--c-text);margin-bottom:5px">Techniques sans tranchée (NTT)</div><div style="font-size:9px;color:var(--c-text-3);display:flex;flex-direction:column;gap:3px"><div>• <span style="font-weight:600">Chemisage :</span> manchon résine ou PE</div><div>• <span style="font-weight:600">Tubage :</span> nouveau tuyau inséré</div><div>• <span style="font-weight:600">Éclatement :</span> remplacement Ø supérieur</div><div style="color:#15803D;font-weight:600;margin-top:3px">✅ Coût −40 % / tranchée ouverte</div></div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px"><div style="font-size:10px;font-weight:700;color:var(--c-text);margin-bottom:5px">RPQS — Rapport Annuel</div><div style="font-size:9px;color:var(--c-text-3);display:flex;flex-direction:column;gap:3px"><div>Obligatoire pour tout service eau</div><div>Indicateurs : rendement, ILP, taux renouvellement</div><div>Présenté au conseil municipal</div><div style="color:#1D4ED8;font-weight:600;margin-top:3px">📊 Publié sur SISPEA (sinoe.org)</div></div></div></div></div>',
              },
              flashcards: [
                { q: 'Quel est le taux de renouvellement recommandé pour un réseau AEP ?', r: '1 à 1,5 % du linéaire par an. La France renouvelle en moyenne ~0,6 %/an, insuffisant pour maintenir l\'état du parc', expl: 'À 0,6 %/an, une conduite dure en moyenne 167 ans avant d\'être renouvelée. De nombreuses canalisations ont déjà 80–100 ans et fuient de plus en plus.' },
                { q: 'Qu\'est-ce que le gainage et le chemisage d\'une conduite ?', r: 'Techniques de réhabilitation sans tranchée : gainage = résine polymérisée in situ à l\'intérieur (réduction du diamètre de 5–10 %) | chemisage = insertion d\'un tube PEHD ou fibre de verre', expl: 'Ces techniques évitent de creuser des tranchées en voirie (coûteuses, longues, perturbation du trafic). Elles conviennent aux conduites dégradées mais encore structurellement stables.' },
                { q: 'Qu\'est-ce que le RPQS ?', r: 'Rapport sur le Prix et la Qualité du Service : document annuel obligatoire pour toutes les collectivités. Indicateurs de performance publiés sur le portail SISPEA', expl: 'Le RPQS contient : prix de l\'eau, rendement, taux de renouvellement, taux de conformité, nombre d\'analyses, volumes distribués. Permet la comparaison entre collectivités.' },
                { q: 'Qu\'est-ce que le taux de casse d\'un réseau ?', r: 'Nombre de réparations de fuites pour 100 km de réseau et par an. Réseau en bon état : < 25 casses/100 km/an. Réseau dégradé : > 100 casses', expl: 'Le taux de casse permet d\'identifier les tronçons à prioriser dans le Plan Pluriannuel de Renouvellement (PPR). Un taux > 100 justifie généralement un renouvellement immédiat.' },
                { q: 'Qu\'est-ce que le plan de gestion des crises pour un réseau AEP ?', r: 'Procédure documentée déclenchée en cas d\'alerte qualité ou de rupture d\'alimentation : alerte ARS, information abonnés, distribution d\'eau alternative, mesures conservatoires', expl: 'Toute non-conformité microbiologique doit être signalée à l\'ARS sous 24h. L\'ARS peut imposer des restrictions d\'usage (eau non potable) ou l\'arrêt de la distribution.' },
                { q: 'Qu\'est-ce que le "pipe bursting" (éclatement) ?', r: 'Technique sans tranchée : on tire un outil conique qui éclate l\'ancienne conduite vers l\'extérieur tout en tirant simultanément la nouvelle conduite PEHD', expl: 'L\'éclatement permet d\'augmenter le diamètre de la conduite (car l\'ancienne est fragmentée et poussée dans le sol). Idéal pour les conduites en fonte ou en amiante-ciment.' },
              ],
            },
            {
              id: 'exp-lp-2',
              titre: 'Rendement de réseau et bilan entrées-sorties',
              fiche: {
                intro: 'Le rendement d\'un réseau AEP mesure l\'efficacité du service : plus il est élevé, moins l\'eau produite est perdue en fuites avant d\'arriver aux abonnés. Sa mesure et son amélioration sont des priorités réglementaires.',
                points: [
                  '📊 Rendement réseau = Volume consommé autorisé / Volume mis en distribution × 100 (%)',
                  '   Volume consommé autorisé = facturé aux abonnés + usages municipaux (fontaines, nettoyage voirie) + usages de lutte contre incendies',
                  '⚠️ Seuil réglementaire (décret 2012-97) : rendement < 50 % (ou ILP > 10) → programme d\'actions obligatoire dans les 2 ans',
                  '📏 ILP (Indice Linéaire de Pertes) = Volume pertes (m³/j) / longueur réseau (km)',
                  '   ILP < 3 m³/j/km = très bon | 3–8 = acceptable | > 10 = mauvais',
                  '🔍 Méthodes de détection des fuites : bruit-corrélation (micro + corrélateur) | prélocalisateur acoustique | gaz traceur (hélium) | thermographie IR',
                  '🌙 Débit minimum nocturne (0h–4h) : mesure du débit le plus bas de la nuit. Permet d\'estimer les fuites (consommation nocturne légitime ≈ 1,5 L/h/abonné)',
                  '🗺️ Sectorisation : découpage du réseau en zones étanches mesurées individuellement → localisation des secteurs avec les plus fortes pertes',
                ],
                formules: [
                  'Rendement (%) = V_consommé_autorisé / V_mis_en_distribution × 100',
                  'ILP (m³/j/km) = Pertes (m³/j) / linéaire réseau (km)',
                  'Pertes = V_mis_en_distribution – V_consommé_autorisé',
                ],
                retenir: 'Rendement = V_consommé/V_produit. ILP = pertes/km. Seuil alerte : rendement < 50 % ou ILP > 10 → plan d\'action obligatoire. Détection : corrélateur acoustique.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Indicateurs de pertes en eau — rendement réseau</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><div style="background:rgba(37,99,235,.08);border:1.5px solid rgba(37,99,235,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#1D4ED8;margin-bottom:6px">Rendement du réseau</div><div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 6px 6px 0;padding:6px 10px;font-family:monospace;font-size:11px;font-weight:700;color:var(--c-primary);margin-bottom:6px">R = Vcons / Vprod × 100</div><div style="font-size:9px;color:var(--c-text-3)"><div style="display:flex;justify-content:space-between;padding:2px 0"><span>Très bon</span><span style="color:#15803D;font-weight:700">&gt; 85 %</span></div><div style="display:flex;justify-content:space-between;padding:2px 0"><span>Acceptable</span><span style="color:#886000;font-weight:700">75–85 %</span></div><div style="display:flex;justify-content:space-between;padding:2px 0"><span>⚠️ Seuil alerte</span><span style="color:#DC2626;font-weight:700">&lt; 50 %</span></div></div></div><div style="background:rgba(217,119,6,.08);border:1.5px solid rgba(217,119,6,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#B45309;margin-bottom:6px">ILP — Indice Linéaire de Pertes</div><div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 6px 6px 0;padding:6px 10px;font-family:monospace;font-size:11px;font-weight:700;color:var(--c-primary);margin-bottom:6px">ILP = Vpertes / L × 365</div><div style="font-size:9px;color:var(--c-text-3)"><div>Unité : m³/km/j</div><div style="display:flex;justify-content:space-between;padding:2px 0"><span>Acceptable</span><span style="color:#15803D;font-weight:700">&lt; 5 m³/km/j</span></div><div style="display:flex;justify-content:space-between;padding:2px 0"><span>⚠️ Plan obligatoire</span><span style="color:#DC2626;font-weight:700">&gt; 10 m³/km/j</span></div></div></div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px 10px"><div style="font-size:10px;font-weight:700;color:var(--c-text);margin-bottom:5px">🔊 Corrélateur acoustique — principe</div><div style="font-size:9px;color:var(--c-text-3)">Deux capteurs de part et d\'autre d\'une fuite → corrélation des signaux acoustiques → localisation par décalage temporel. Précision : ±0,5 m</div></div></div>',
              },
              flashcards: [
                { q: 'Formule du rendement de réseau AEP ?', r: 'Rendement (%) = Volume consommé autorisé / Volume mis en distribution × 100', expl: 'Le "consommé autorisé" inclut les abonnés facturés + usages municipaux (fontaines, arrosage, nettoyage). La différence avec le volume produit = pertes réelles + pertes apparentes.' },
                { q: 'Quel est le seuil réglementaire déclenchant un programme d\'actions obligatoire ?', r: 'Rendement < 50 % OU ILP > 10 m³/j/km (décret 2012-97). Programme d\'amélioration à déposer dans les 2 ans', expl: 'En dessous de ce seuil, la collectivité ne peut plus augmenter ses prélèvements sans présenter un plan d\'action. Les Agences de l\'eau peuvent aussi conditionner leurs subventions au rendement.' },
                { q: 'Comment fonctionne la corrélation acoustique pour détecter les fuites ?', r: 'Deux microphones sont posés sur la conduite à distance. La fuite émet un bruit. Le corrélateur calcule l\'écart de temps d\'arrivée du bruit → localise la fuite', expl: 'La précision est de ±1 m sur une conduite en métal, ±5 m sur du PVC. La méthode est rapide et ne nécessite pas de creuser. Elle est indispensable pour les pertes nocturnes.' },
                { q: 'Qu\'est-ce que le débit minimum nocturne et à quoi sert-il ?', r: 'Débit le plus faible mesuré la nuit (0h–4h). La consommation légitime nocturne ≈ 1,5 L/h/abonné. L\'excédent = estimation des fuites actives', expl: 'Ex : secteur de 500 abonnés, DMN = 5 m³/h. Conso légitime = 500 × 1,5 = 750 L/h = 0,75 m³/h. Fuites estimées = 5 – 0,75 = 4,25 m³/h = 102 m³/j.' },
                { q: 'Qu\'est-ce que la sectorisation d\'un réseau ?', r: 'Découpage du réseau en secteurs hydrauliquement isolables et mesurables individuellement (compteur sectoriel). Permet d\'identifier les zones à fortes pertes', expl: 'Chaque secteur (500–2 000 abonnés) est équipé d\'un compteur de sectorisation. On compare le volume entrant au volume facturé sur le secteur : l\'écart = pertes du secteur.' },
                { q: 'Quelle est la différence entre pertes réelles et pertes apparentes ?', r: 'Pertes réelles = fuites physiques (eau quitte le réseau). Pertes apparentes = erreurs de comptage, fraudes, volumes non mesurés (dépassent les compteurs)', expl: 'Les pertes apparentes représentent souvent 1–3 % du volume distribué. Elles sont réduites par le renouvellement des compteurs vieillissants (sous-comptage systématique après 15–20 ans).' },
              ],
            },
            {
              id: 'exp-lp-3',
              titre: 'Sécurité sanitaire et Plan de Gestion des Risques (Water Safety Plan)',
              fiche: {
                intro: 'Le Water Safety Plan (WSP) ou Plan de Gestion de la Sécurité Sanitaire de l\'Eau (PGSSE) est l\'approche préventive imposée par la Directive 2020/2184. Il identifie tous les risques de la captation au robinet.',
                points: [
                  '📋 PGSSE (Plan de Gestion de la Sécurité Sanitaire de l\'Eau) : version française du Water Safety Plan de l\'OMS. Obligatoire depuis janvier 2023 (Directive 2020/2184)',
                  '🎯 Principe : approche basée sur les risques (ABR) — identifier et maîtriser les dangers avant qu\'ils n\'atteignent le consommateur (préventif vs réactif)',
                  '🗺️ Périmètre du PGSSE : de la ressource (bassin versant) → captage → traitement → stockage → distribution → branchement → robinet',
                  '⚠️ Dangers identifiés : microbiologiques (Cryptosporidium, Legionella) | chimiques (pesticides, PFAS, nitrates) | physiques (turbidité) | radiologiques',
                  '📊 Évaluation des risques : probabilité × gravité → hiérarchisation des risques → mesures de maîtrise prioritaires',
                  '🔄 HACCP adapté à l\'eau : Hazard Analysis and Critical Control Points. Identifier les CCP (points critiques de maîtrise) dans la filière',
                  '👁️ Surveillance opérationnelle : mesures en continu (turbidité, chlore) permettant de réagir en temps réel sans attendre l\'analyse de labo',
                  '📋 Obligations : producteurs > 1 000 m³/j doivent soumettre leur PGSSE à l\'ARS avant 2026. Mise à jour tous les 6 ans minimum',
                ],
                formules: [],
                retenir: 'PGSSE = Water Safety Plan obligatoire depuis 2023. ABR = identifier les risques de la source au robinet. Surveillance opérationnelle = temps réel. Soumis à l\'ARS avant 2026.',
                schema: '<svg viewBox="0 0 500 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><defs><marker id="pgsse" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 Z" fill="#94A3B8"/></marker></defs><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">PGSSE — PLAN DE GESTION SÉCURISÉE (Water Safety Plan)</text><!-- Steps --><rect x="10" y="28" width="80" height="50" rx="6" fill="rgba(22,163,74,.12)" stroke="rgba(22,163,74,.5)" stroke-width="1.5"/><text x="50" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#15803D">1. Ressource</text><text x="50" y="60" text-anchor="middle" font-size="8" fill="var(--c-text-3)">captage</text><text x="50" y="71" text-anchor="middle" font-size="8" fill="var(--c-text-3)">périmètre</text><line x1="90" y1="53" x2="105" y2="53" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#pgsse)"/><rect x="105" y="28" width="80" height="50" rx="6" fill="rgba(14,165,233,.12)" stroke="rgba(14,165,233,.5)" stroke-width="1.5"/><text x="145" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#0369A1">2. Filière</text><text x="145" y="60" text-anchor="middle" font-size="8" fill="var(--c-text-3)">traitement</text><text x="145" y="71" text-anchor="middle" font-size="8" fill="var(--c-text-3)">barrières</text><line x1="185" y1="53" x2="200" y2="53" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#pgsse)"/><rect x="200" y="28" width="80" height="50" rx="6" fill="rgba(217,119,6,.12)" stroke="rgba(217,119,6,.5)" stroke-width="1.5"/><text x="240" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#B45309">3. Distribution</text><text x="240" y="60" text-anchor="middle" font-size="8" fill="var(--c-text-3)">réseau</text><text x="240" y="71" text-anchor="middle" font-size="8" fill="var(--c-text-3)">réservoirs</text><line x1="280" y1="53" x2="295" y2="53" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#pgsse)"/><rect x="295" y="28" width="80" height="50" rx="6" fill="rgba(239,68,68,.12)" stroke="rgba(239,68,68,.5)" stroke-width="1.5"/><text x="335" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#DC2626">4. Branchement</text><text x="335" y="60" text-anchor="middle" font-size="8" fill="var(--c-text-3)">compteur</text><text x="335" y="71" text-anchor="middle" font-size="8" fill="var(--c-text-3)">robinet</text><line x1="375" y1="53" x2="390" y2="53" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#pgsse)"/><rect x="390" y="37" width="100" height="30" rx="6" fill="rgba(22,163,74,.2)" stroke="rgba(22,163,74,.6)" stroke-width="1.5"/><text x="440" y="54" text-anchor="middle" font-size="9" font-weight="700" fill="#15803D">🚰 Robinet</text><!-- ABR --><rect x="10" y="93" width="480" height="35" rx="6" fill="rgba(37,99,235,.07)" stroke="rgba(37,99,235,.3)" stroke-width="1"/><text x="250" y="108" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1D4ED8">ABR — Analyse par Barrière de Risques</text><text x="250" y="121" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">Identifier aléas → évaluer probabilité × impact → prioriser actions préventives</text><!-- Surveillance --><rect x="10" y="138" width="220" height="30" rx="5" fill="rgba(22,163,74,.07)" stroke="rgba(22,163,74,.3)" stroke-width="1"/><text x="120" y="152" text-anchor="middle" font-size="8.5" font-weight="700" fill="#15803D">Surveillance opérationnelle</text><text x="120" y="163" text-anchor="middle" font-size="8" fill="var(--c-text-3)">pH, Cl₂ résiduel, turbidité — en continu</text><rect x="250" y="138" width="240" height="30" rx="5" fill="rgba(239,68,68,.07)" stroke="rgba(239,68,68,.3)" stroke-width="1"/><text x="370" y="152" text-anchor="middle" font-size="8.5" font-weight="700" fill="#DC2626">Obligation légale</text><text x="370" y="163" text-anchor="middle" font-size="8" fill="var(--c-text-3)">PGSSE soumis à l\'ARS avant 2026</text></svg>',
              },
              flashcards: [
                { q: 'Qu\'est-ce que le PGSSE et depuis quand est-il obligatoire ?', r: 'Plan de Gestion de la Sécurité Sanitaire de l\'Eau (Water Safety Plan) : obligatoire depuis la transposition de la Directive 2020/2184 en droit français (janvier 2023)', expl: 'Il doit être soumis à l\'ARS avant 2026 pour les producteurs > 1 000 m³/j. C\'est une approche préventive systémique qui remplace la simple conformité au robinet.' },
                { q: 'Quel est le principe de l\'approche basée sur les risques (ABR) ?', r: 'Identifier, évaluer et maîtriser tous les dangers (micro, chimiques, physiques) tout au long du système eau — de la ressource au robinet — avant qu\'ils n\'impactent la qualité', expl: 'L\'ABR est proactive : on ne attend pas le résultat d\'analyse non conforme. On identifie les situations à risque et on met en place des barrières préventives.' },
                { q: 'Quel est le périmètre du PGSSE ?', r: 'De la ressource (bassin versant) jusqu\'au robinet du consommateur : captage → traitement → réservoirs → réseau de distribution → branchements', expl: 'Le PGSSE est plus large que l\'ancienne surveillance : il inclut le bassin versant (pressions agricoles, industrielles) et les réseaux intérieurs des bâtiments (risque Legionella).' },
                { q: 'Qu\'est-ce que la surveillance opérationnelle dans le cadre du PGSSE ?', r: 'Mesures en temps réel de paramètres clés (turbidité, chlore résiduel, pH) permettant de détecter immédiatement une anomalie sans attendre une analyse de laboratoire', expl: 'Ex : une montée de turbidité en sortie de filtre > 0,3 NTU déclenche une alarme et peut arrêter la distribution en quelques minutes, avant que l\'eau non conforme n\'atteigne le réseau.' },
                { q: 'Qu\'est-ce qu\'un CCP (Critical Control Point) dans la logique HACCP appliquée à l\'eau ?', r: 'Point dans la filière de traitement où la maîtrise est essentielle : une défaillance à ce point crée un risque sanitaire inacceptable pour le consommateur', expl: 'Ex : la chloration finale est un CCP (si la dose de chlore est insuffisante, des pathogènes atteignent le réseau). La mesure de maîtrise = chlore résiduel maintenu entre 0,1 et 0,5 mg/L.' },
                { q: 'Pour quels producteurs le PGSSE est-il obligatoire et quelle est l\'échéance de soumission à l\'ARS ?', r: 'Obligatoire pour tous les producteurs d\'eau > 1 000 m³/j. Soumission à l\'ARS avant le 12 janvier 2026', expl: 'Les petits systèmes (< 1 000 m³/j) ont une approche simplifiée. L\'ARS valide le PGSSE et peut demander des mesures complémentaires. Mise à jour tous les 6 ans minimum.' },
              ],
            },
          ]},
        ],
      },
    ],
  },

  /* ══ MASTER SCIENCES DE L'EAU ══════════════════════════════════════ */
  'master-eau': {
    name: 'Master Sciences de l\'Eau',
    sigle: 'Master Eau',
    ico: '🔬',
    color: '#5A189A',
    colorl: '#F3E8FF',
    niveau: 'Bac+5',
    organisme: 'Universités — AgroParisTech — SupAgro',
    desc: 'Hydrologie, hydrogéologie, modélisation (MODFLOW), qualité des eaux, changement climatique. Débouchés : BRGM, bureaux d\'études, Agences de l\'eau.',
    annees: [
      {
        id: 'an1',
        name: 'Master 1',
        matieres: [
          { id: 'hydrogeologie', name: 'Hydrogéologie', ico: '🗺️', color: '#5A189A', colorl: '#F3E8FF', chapitres: [
            {
              id: 'hg-m1-1',
              titre: 'Aquifères — types, propriétés et paramètres hydrauliques',
              fiche: {
                intro: 'Un aquifère est une formation géologique poreuse ou fissurée qui contient et transmet de l\'eau souterraine en quantité exploitable. La connaissance de ses paramètres est indispensable pour dimensionner les captages.',
                points: [
                  '🌊 Nappe libre : surface piézométrique à pression atmosphérique. Niveau fluctue avec les recharges. Plus vulnérable aux pollutions de surface',
                  '🔵 Nappe captive : aquifère coincé entre deux couches imperméables (aquitards). Pression > Patm. Forage artésien si P > Patm au niveau du sol',
                  '🏖️ Milieu poreux : sables et graviers — porosité d\'interstices (p = 20–35 %). Aquifères alluviaux (Rhin, Rhône, Seine…)',
                  '🪨 Milieu karstique : calcaires fissurés et dissous — réseau de galeries, circulations rapides (km/j), très vulnérables aux pollutions',
                  '📐 Perméabilité K (m/s) : facilité d\'écoulement. Gravier = 10⁻³–10⁻¹ | Sable = 10⁻⁵–10⁻³ | Argile = 10⁻¹⁰–10⁻⁸ (imperméable)',
                  '📊 Transmissivité T = K × e (m²/s) : K × épaisseur mouillée. Paramètre clé pour le débit d\'un forage',
                  '💾 Coefficient d\'emmagasinement S (–) : volume d\'eau libéré par unité de surface pour une baisse de charge unitaire. Nappe libre S ≈ porosité efficace (0,05–0,25) | Nappe captive S = 10⁻⁵–10⁻³',
                  '📏 Loi de Darcy : Q = K × i × A (i = Δh/L = gradient hydraulique, A = section)',
                ],
                formules: [
                  'Q = K × i × A — loi de Darcy (m³/s)',
                  'T = K × e — transmissivité (m²/s)',
                  'v_réelle = K × i / ω_eff — vitesse réelle de l\'eau (ω_eff = porosité efficace)',
                ],
                retenir: 'Nappe libre : surface libre à Patm. Captive : sous pression. K (m/s) = perméabilité. T = K×e = transmissivité. S très petit pour nappe captive.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Perméabilités typiques des terrains</div><div style="overflow-x:auto;margin-bottom:10px"><table style="width:100%;border-collapse:collapse;font-size:10px"><thead><tr><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:left">Terrain</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">K (m/s)</th><th style="padding:5px 7px;background:var(--c-surface-2);border-bottom:2px solid var(--c-border);font-weight:700;text-align:center">Aquifère ?</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Graviers</td><td style="padding:5px 7px;text-align:center;font-family:monospace;font-size:9.5px">10⁻³ → 10⁻¹</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700;font-size:9px">Excellent</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Sables</td><td style="padding:5px 7px;text-align:center;font-family:monospace;font-size:9.5px">10⁻⁵ → 10⁻³</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700;font-size:9px">Bon</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Calcaire fissuré/karstique</td><td style="padding:5px 7px;text-align:center;font-family:monospace;font-size:9.5px">10⁻² → 10⁻¹</td><td style="padding:5px 7px;text-align:center;background:rgba(22,163,74,.12);color:#15803D;font-weight:700;font-size:9px">Très bon ⚠️</td></tr><tr style="border-bottom:1px solid var(--c-border)"><td style="padding:5px 7px;font-weight:600">Limons</td><td style="padding:5px 7px;text-align:center;font-family:monospace;font-size:9.5px">10⁻⁸ → 10⁻⁵</td><td style="padding:5px 7px;text-align:center;background:rgba(217,119,6,.12);color:#886000;font-weight:700;font-size:9px">Faible</td></tr><tr><td style="padding:5px 7px;font-weight:600">Argiles</td><td style="padding:5px 7px;text-align:center;font-family:monospace;font-size:9.5px">10⁻¹⁰ → 10⁻⁸</td><td style="padding:5px 7px;text-align:center;background:rgba(239,68,68,.12);color:#A82018;font-weight:700;font-size:9px">Aquitard ✗</td></tr></tbody></table></div><div style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.3);border-radius:6px;padding:7px 10px;font-size:9px;color:var(--c-text-3)"><span style="font-weight:700;color:#1D4ED8">T = K × e : </span>transmissivité (m²/s) · S nappe libre ≈ 5–25 % · S nappe captive = 10⁻⁵–10⁻³ (compressibilité)</div></div>',
              },
              flashcards: [
                { q: 'Quelle est la différence entre nappe libre et nappe captive ?', r: 'Libre : surface piézométrique à pression atmosphérique, fluctue selon les recharges. Captive : sous pression entre deux couches imperméables, niveau piézométrique au-dessus du toit de l\'aquifère', expl: 'Un forage artésien (eau jaillissante) exploite une nappe captive dont la pression est supérieure à la pression atmosphérique au niveau du sol. Ex : bassin de Paris.' },
                { q: 'Qu\'est-ce que la transmissivité T ?', r: 'T = K × e (m²/s) : produit de la perméabilité par l\'épaisseur saturée. Représente la facilité de transmission horizontale de l\'eau dans l\'aquifère', expl: 'T est le paramètre le plus important pour estimer le débit d\'un forage. T > 10⁻³ m²/s = aquifère productif. T < 10⁻⁵ = aquifère faible rendement.' },
                { q: 'Quelle est la valeur typique du coefficient d\'emmagasinement S pour une nappe captive ?', r: 'S = 10⁻⁵ à 10⁻³ (très faible). Pour une nappe libre : S ≈ porosité efficace = 0,05 à 0,25 (100× à 1000× plus élevé)', expl: 'La nappe captive libère très peu d\'eau par baisse de charge (compressibilité de l\'eau et de l\'aquifère). C\'est pourquoi les nappes captives se rabattent rapidement sous pompage.' },
                { q: 'Quelle est la loi de Darcy et ses conditions d\'application ?', r: 'Q = K × i × A. Valable en régime laminaire (Re < 1–10), ce qui correspond à la quasi-totalité des écoulements en milieux poreux', expl: 'En milieu karstique (galeries larges), l\'écoulement peut être turbulent → Darcy non valide. On utilise des traceurs pour caractériser ces aquifères complexes.' },
                { q: 'Pourquoi les aquifères karstiques sont-ils très vulnérables aux pollutions ?', r: 'Circulation très rapide de l\'eau (galeries, conduits) → pas de filtration naturelle → une pollution de surface peut atteindre un captage en quelques heures à jours', expl: 'Les périmètres de protection des captages karstiques doivent être très larges. Une bactérie introduite en surface peut parcourir plusieurs km avant d\'être détectée en captage.' },
                { q: 'Quelle est la gamme de perméabilité K pour des sables ?', r: 'K = 10⁻⁵ à 10⁻³ m/s. Graviers : 10⁻³–10⁻¹. Argiles : 10⁻¹⁰–10⁻⁸ (imperméable). Calcaires karstiques : 10⁻²–10⁻¹', expl: 'La perméabilité varie sur 10 ordres de grandeur dans la nature. C\'est l\'un des paramètres les plus difficiles à mesurer et les plus variables spatialement.' },
              ],
            },
            {
              id: 'hg-m1-2',
              titre: 'Pompages d\'essai — méthodes de Theis et Cooper-Jacob',
              fiche: {
                intro: 'Le pompage d\'essai est la méthode de référence pour déterminer les paramètres hydrauliques d\'un aquifère (T et S) in situ. L\'interprétation graphique des courbes de rabattement permet d\'identifier le comportement de l\'aquifère.',
                points: [
                  '🏗️ Dispositif : forage de pompage à débit constant Q + 1 à 3 piézomètres d\'observation à distance r (m)',
                  '📉 Rabattement s(r,t) = H₀ – H(r,t) : baisse du niveau piézométrique depuis le début du pompage',
                  '📐 Méthode de Theis (1935) : s = Q/(4πT) × W(u) avec u = r²S/(4Tt)',
                  '   W(u) = fonction puits (table ou calcul numérique). Calage graphique courbe observée / courbe type',
                  '📏 Méthode de Cooper-Jacob (t grand, u < 0,05) : s = Q/(4πT) × [ln(2,25Tt) – ln(r²S)]',
                  '   Graphe s vs. log(t) → droite. Pente Δs = Q/(4πT) × ln(10). Ordonnée à l\'origine → S',
                  '🔄 Test de récupération : après arrêt du pompage, la remontée s\' vs. log(t/t\') → droite de pente identique → T',
                  '⚠️ Limites : homogénéité, isotropie, aquifère infini, régime transitoire → souvent non respectées',
                  '📊 Effets frontières : barrière imperméable (doublement du rabattement) | limite d\'alimentation (rabattement se stabilise)',
                ],
                formules: [
                  's = Q/(4πT) × W(u) — Theis (u = r²S/4Tt)',
                  's ≈ Q/(4πT) × [ln(2,25Tt) – ln(r²S)] — Cooper-Jacob (u < 0,05)',
                  'Pente Cooper-Jacob : Δs = Q × ln(10) / (4πT) = 0,183 × Q / T',
                ],
                retenir: 'Theis = référence (toutes conditions). Cooper-Jacob = approximation graphique simple (t grand). Pente droite → T. Ordonnée origine → S. Récupération → vérification T.',
                schema: '<svg viewBox="0 0 500 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">COOPER-JACOB — RABATTEMENT EN TEMPS</text><!-- Axes --><line x1="60" y1="20" x2="60" y2="155" stroke="var(--c-text-3)" stroke-width="1.5"/><line x1="60" y1="155" x2="480" y2="155" stroke="var(--c-text-3)" stroke-width="1.5"/><text x="270" y="170" text-anchor="middle" font-size="9" fill="var(--c-text-3)">log(t) — temps de pompage</text><text x="15" y="90" text-anchor="middle" font-size="9" fill="var(--c-text-3)" transform="rotate(-90,15,90)">s (m) — rabattement</text><!-- Straight line (Cooper-Jacob valid zone) --><line x1="180" y1="130" x2="460" y2="55" stroke="#0369A1" stroke-width="2.5"/><!-- Data points (early - not valid) --><circle cx="90" cy="148" r="3.5" fill="#94A3B8"/><circle cx="110" cy="145" r="3.5" fill="#94A3B8"/><circle cx="130" cy="141" r="3.5" fill="#94A3B8"/><circle cx="150" cy="137" r="3.5" fill="#94A3B8"/><circle cx="170" cy="132" r="3.5" fill="#94A3B8"/><!-- Data points (valid zone) --><circle cx="200" cy="127" r="3.5" fill="#0369A1"/><circle cx="240" cy="117" r="3.5" fill="#0369A1"/><circle cx="280" cy="107" r="3.5" fill="#0369A1"/><circle cx="330" cy="94" r="3.5" fill="#0369A1"/><circle cx="380" cy="80" r="3.5" fill="#0369A1"/><circle cx="440" cy="63" r="3.5" fill="#0369A1"/><!-- Slope annotation --><line x1="250" y1="113" x2="360" y2="113" stroke="#EF4444" stroke-width="1" stroke-dasharray="3,2"/><line x1="360" y1="113" x2="360" y2="88" stroke="#EF4444" stroke-width="1" stroke-dasharray="3,2"/><text x="295" y="108" text-anchor="middle" font-size="8" fill="#EF4444">1 cycle log</text><text x="380" y="101" font-size="8.5" fill="#EF4444" font-weight="700">Δs</text><!-- T formula --><rect x="60" y="5" width="200" height="12" rx="3" fill="rgba(37,99,235,.1)"/><text x="160" y="14" text-anchor="middle" font-size="8.5" font-weight="700" fill="#1D4ED8">T = 0,183 Q / Δs</text><!-- S formula --><rect x="280" y="5" width="200" height="12" rx="3" fill="rgba(22,163,74,.1)"/><text x="380" y="14" text-anchor="middle" font-size="8.5" font-weight="700" fill="#15803D">S = 2,25 T t₀ / r²</text><!-- Early time note --><rect x="60" y="128" width="110" height="16" rx="4" fill="rgba(217,119,6,.1)"/><text x="115" y="139" text-anchor="middle" font-size="7.5" fill="#B45309">⚠️ Non valide</text><!-- Valid zone note --><text x="350" y="142" text-anchor="middle" font-size="7.5" fill="#0369A1">Zone Cooper-Jacob valide</text></svg>',
              },
              flashcards: [
                { q: 'Qu\'est-ce que le rabattement dans un pompage d\'essai ?', r: 's = H₀ – H(t) : différence entre le niveau initial et le niveau mesuré pendant le pompage. Il augmente avec le temps et diminue avec la distance', expl: 'Le rabattement est mesuré dans le forage pompé et dans les piézomètres d\'observation. Plus on est près du forage, plus le rabattement est grand (cône de dépression).' },
                { q: 'Quelle condition doit être respectée pour appliquer Cooper-Jacob ?', r: 'u = r²S/(4Tt) < 0,05 : cette condition est respectée pour t grand (pompage prolongé) ou r petit (piézomètre proche)', expl: 'En pratique, on attend généralement t > 10 minutes pour les aquifères poreux. Pour un aquifère captif (S petit), la condition est atteinte plus rapidement.' },
                { q: 'Comment détermine-t-on T avec la méthode de Cooper-Jacob ?', r: 'On trace s vs. log(t). La droite a une pente Δs = Q × 0,183 / T. Donc T = 0,183 × Q / Δs', expl: 'Δs = montée du rabattement par cycle logarithmique de temps (ex : entre t=1 min et t=10 min). Plus Δs est grand, plus T est petit (aquifère peu transmissif).' },
                { q: 'Comment détermine-t-on S avec Cooper-Jacob ?', r: 'S = 2,25 × T × t₀ / r² où t₀ est le temps pour lequel la droite coupe l\'axe s = 0 (extrapolation)', expl: 'S est déterminé uniquement avec les piézomètres d\'observation (pas dans le forage pompé à cause des pertes de charge). r = distance piézomètre-forage.' },
                { q: 'Qu\'est-ce qu\'un test de récupération ?', r: 'Après arrêt du pompage, on mesure la remontée du niveau s\' = s(Δt). Graphe s\' vs. log(t/Δt) → droite de pente = Q×0,183/T → calcul T indépendant', expl: 'La récupération est souvent plus fiable que le pompage car moins affectée par les fluctuations du débit pompé. Elle confirme la valeur de T obtenue pendant le pompage.' },
                { q: 'Qu\'est-ce que l\'effet de barrière imperméable sur une courbe de pompage ?', r: 'Une barrière imperméable proche crée un double rabattement : la courbe s vs. log(t) se redresse (pente double) à partir du moment où le cône d\'influence atteint la barrière', expl: 'En appliquant la méthode des images, on simule un forage virtuel symétrique par rapport à la barrière. La somme des deux rabattements reproduit l\'effet réel observé.' },
              ],
            },
            {
              id: 'hg-m1-3',
              titre: 'Modélisation numérique des eaux souterraines — MODFLOW',
              fiche: {
                intro: 'La modélisation numérique simule le comportement d\'un aquifère sur des domaines complexes et des longues échéances. MODFLOW (USGS) est le standard mondial des modèles d\'eaux souterraines.',
                points: [
                  '💻 MODFLOW (Modular 3D Groundwater Flow Model) : code USGS en domaine public depuis 1984. Standard mondial. Interfaces graphiques : GMS, ModelMuse, FEFLOW',
                  '📐 Équation résolue : Ss × ∂h/∂t = ∇(K·∇h) + W (Ss = emmagasinement spécifique, W = sources/puits)',
                  '🗺️ Discrétisation : grille 3D régulière (colonnes × rangées × couches). Chaque maille = K, Ss, recharge',
                  '🔵 Conditions aux limites : charge imposée (rivière, lac, frontière) | débit imposé (pluie, pompage) | flux nul (limite imperméable)',
                  '🔧 Packages spéciaux : RIV (rivière) | DRN (drain) | EVT (évapotranspiration) | WEL (forage) | RCH (recharge)',
                  '📊 Calibration : ajuster K et Ss pour minimiser l\'écart entre h calculés et h observés (piézomètres). Méthode PEST (paramètre estimation)',
                  '🎯 Utilisations pratiques : gestion des captages | impact d\'un projet (carrière, urbanisation) | délimitation des périmètres de protection | prévision étiages',
                  '⚠️ Incertitude du modèle : toujours analyser la sensibilité aux paramètres. Un modèle non calibré peut être trompeur',
                ],
                formules: [
                  'Ss × ∂h/∂t = ∂/∂x(Kx·∂h/∂x) + ∂/∂y(Ky·∂h/∂y) + ∂/∂z(Kz·∂h/∂z) + W — équation de diffusivité',
                  'Résidu = h_calculé – h_observé → minimiser par calibration',
                ],
                retenir: 'MODFLOW = standard mondial (USGS, gratuit). Grille 3D + conditions limites. Calibration = ajuster K/Ss sur piézomètres réels. Toujours vérifier l\'incertitude.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Modélisation numérique des aquifères — MODFLOW</div><div style="display:flex;flex-direction:column;gap:6px"><div style="display:flex;gap:8px"><div style="background:rgba(37,99,235,.10);border:1.5px solid rgba(37,99,235,.4);border-radius:8px;padding:8px 12px;flex:2"><div style="font-size:10.5px;font-weight:800;color:#1D4ED8;margin-bottom:5px">📐 Structure du modèle</div><div style="display:flex;gap:12px;font-size:9px;color:var(--c-text-3)"><div><div>• Grille 3D : mailles carrées/rectangulaires</div><div>• Couches : chaque horizon géologique</div><div>• Pas de temps : transitoire ou permanent</div></div><div><div>• Conditions aux limites : river, drain, recharge</div><div>• Paramètres : K, Ss, porosité</div><div>• Sorties : charges piézo., débits</div></div></div></div><div style="background:rgba(22,163,74,.10);border:1.5px solid rgba(22,163,74,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:800;color:#15803D;margin-bottom:5px">Logiciels libres</div><div style="font-size:9px;color:var(--c-text-3)"><div>• MODFLOW (USGS) — mondial</div><div>• FEFLOW — MEF</div><div>• Visual MODFLOW — interface</div><div>• FREEWAT — open source</div></div></div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px 10px"><div style="font-size:10px;font-weight:700;color:var(--c-text);margin-bottom:5px">Étapes de modélisation</div><div style="display:flex;gap:8px;font-size:9px;color:var(--c-text-3)"><div style="flex:1;text-align:center;padding:5px;background:rgba(14,165,233,.08);border-radius:5px"><span style="font-weight:700;color:#0369A1">1. Conceptualisation</span><br>géologie, limites</div><div style="flex:1;text-align:center;padding:5px;background:rgba(22,163,74,.08);border-radius:5px"><span style="font-weight:700;color:#15803D">2. Maillage</span><br>discrétisation</div><div style="flex:1;text-align:center;padding:5px;background:rgba(217,119,6,.08);border-radius:5px"><span style="font-weight:700;color:#B45309">3. Calage</span><br>ajuster K sur piézos</div><div style="flex:1;text-align:center;padding:5px;background:rgba(124,58,237,.08);border-radius:5px"><span style="font-weight:700;color:#6D28D9">4. Validation</span><br>période indépendante</div><div style="flex:1;text-align:center;padding:5px;background:rgba(239,68,68,.08);border-radius:5px"><span style="font-weight:700;color:#DC2626">5. Prédiction</span><br>scénarios futurs</div></div></div></div></div>',
              },
              flashcards: [
                { q: 'Qu\'est-ce que MODFLOW et qui le développe ?', r: 'Code de simulation des écoulements souterrains en 3D, développé par l\'USGS (United States Geological Survey). Domaine public, gratuit, standard mondial depuis 1984', expl: 'MODFLOW est utilisé par tous les grands bureaux d\'études en hydrogéologie, le BRGM, les Agences de l\'eau. Des dizaines de versions et extensions existent (MT3DMS pour le transport).' },
                { q: 'Qu\'est-ce que la calibration d\'un modèle hydrogéologique ?', r: 'Processus d\'ajustement des paramètres (K, Ss) du modèle pour minimiser l\'écart entre les charges calculées et les charges observées aux piézomètres réels', expl: 'La calibration peut être manuelle (essai-erreur) ou automatique (PEST, UCODE). Un modèle bien calibré ne garantit pas qu\'il est juste pour d\'autres conditions (extrapolation risquée).' },
                { q: 'Quelles sont les principales conditions aux limites utilisées dans MODFLOW ?', r: 'Charge imposée (rivière, lac, frontière connue) | débit imposé (pompage, recharge) | flux nul (limite imperméable, crête de partage)', expl: 'Le choix des conditions aux limites est crucial. Une mauvaise condition peut fausser tout le modèle. La frontière doit être éloignée de la zone d\'intérêt (≥ 5× le rayon d\'influence).' },
                { q: 'À quoi sert un modèle MODFLOW pour la gestion des captages ?', r: 'Simuler l\'impact de différents scénarios de pompage, délimiter les périmètres de protection (isochrones), prévoir l\'impact d\'un projet sur les niveaux de nappe', expl: 'L\'isochrone 50 jours délimite le périmètre rapproché de protection d\'un captage AEP. Elle est calculée par suivi de particules (MODPATH) dans MODFLOW.' },
                { q: 'Qu\'est-ce que le package RIV dans MODFLOW ?', r: 'Package Rivière : modélise les échanges hydrauliques entre la rivière et l\'aquifère (exfiltration si nappe haute, infiltration si rivière en charge)', expl: 'La rivière peut alimenter ou drainer la nappe selon les conditions. MODFLOW calcule le débit d\'échange proportionnellement à la différence de charge et à la conductance du lit.' },
                { q: 'Pourquoi analyse-t-on la sensibilité d\'un modèle ?', r: 'Pour identifier quels paramètres ont le plus d\'influence sur les résultats et évaluer l\'incertitude des prédictions selon l\'incertitude sur les paramètres', expl: 'Si le modèle est très sensible à K (une variation de 20 % change les résultats de 50 %), les prédictions sont incertaines. Il faut alors plus de données terrain pour contraindre K.' },
              ],
            },
          ]},

          { id: 'qualite-avancee', name: 'Qualité avancée des eaux', ico: '🧪', color: '#166038', colorl: '#E0F4EC', chapitres: [
            {
              id: 'qa-m1-1',
              titre: 'PFAS — analyse, écotoxicologie et normes 2026',
              fiche: {
                intro: 'Les PFAS sont les polluants émergents les plus préoccupants pour les eaux souterraines et potables. Leur extrême persistance et leur toxicité à faible dose justifient les nouvelles normes très strictes de la Directive 2020.',
                points: [
                  '🧪 PFAS (Per- et PolyFluoroAlkylated Substances) : famille de 12 000+ composés. Liaison C-F = la plus forte en chimie → quasi-indestructibles dans l\'environnement',
                  '🏭 Sources principales : mousses AFFF (lutte anti-incendie aéroports, bases militaires) | revêtements antiadhésifs (Téflon) | textiles imperméables (Gore-Tex) | boues d\'épuration épandues',
                  '⚠️ Toxicité : cancérogènes (PFOA, PFOS classés CMR2) | perturbateurs thyroïdiens et immunitaires | reprotoxiques | transfert mère-enfant (placenta, lait maternel)',
                  '🌍 "Polluants éternels" (forever chemicals) : aucune biodégradation naturelle. Ubiquitaires : retrouvés dans l\'Arctique, la faune sauvage, le sang humain',
                  '📋 Directive 2020/2184 : 0,1 µg/L par PFAS individuel (liste 20 PFAS) | 0,5 µg/L pour la somme. Applicable progressivement',
                  '🔬 Analyse : LC-MS/MS (chromatographie liquide couplée spectrométrie de masse). Limite détection : ng/L. Accréditation COFRAC obligatoire',
                  '🔵 Traitement : CAG efficace PFAS ≥ C8. Nanofiltration partielle. Osmose inverse = quasi-totale. PFAS à courte chaîne (C4, C6) = difficiles à éliminer',
                  '🔴 Concentrat OI contenant PFAS : problème majeur → incinération haute température (> 1 100°C) nécessaire pour destruction',
                ],
                formules: [],
                retenir: 'PFAS = 12 000 composés, liaison C-F indestructible. Sources : AFFF, Téflon, boues. Norme : 0,1 µg/L/substance. Traitement : CAG (C8+) ou OI. Concentrat = incinération.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">PFAS — Polluants éternels</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><div style="background:rgba(239,68,68,.08);border:1.5px solid rgba(239,68,68,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#DC2626;margin-bottom:6px">Caractéristiques</div><div style="display:flex;flex-direction:column;gap:3px;font-size:9px;color:var(--c-text-3)"><div>• ~12 000 composés recensés</div><div>• Liaison C-F la plus forte en chimie</div><div>• Persistance : &gt; 100 ans dans l\'env.</div><div>• Bioaccumulation dans la chaîne alim.</div><div style="color:#DC2626;font-weight:600;margin-top:4px">→ « polluants éternels »</div></div></div><div style="background:rgba(217,119,6,.08);border:1.5px solid rgba(217,119,6,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#B45309;margin-bottom:6px">Sources principales</div><div style="display:flex;flex-direction:column;gap:3px;font-size:9px;color:var(--c-text-3)"><div>• AFFF : mousses anti-incendie aéroports</div><div>• Téflon (PTFE) : revêtements poêles</div><div>• Boues STEP industrielles</div><div>• Textiles imperméabilisés (Gore-Tex)</div><div>• Emballages alimentaires</div></div></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.3);border-radius:6px;padding:8px"><div style="font-size:9.5px;font-weight:700;color:#1D4ED8;margin-bottom:4px">Traitement</div><div style="font-size:9px;color:var(--c-text-3)"><div>• CAG efficace pour chaînes C8+ (PFOS, PFOA)</div><div>• OI : élimination totale mais concentrat</div><div>• Concentrat → incinération haute T° (1 200 °C)</div></div></div><div style="background:rgba(22,163,74,.08);border:1px solid rgba(22,163,74,.3);border-radius:6px;padding:8px"><div style="font-size:9.5px;font-weight:700;color:#15803D;margin-bottom:4px">Normes 2026</div><div style="font-size:9px;color:var(--c-text-3)"><div>0,1 µg/L / substance (20 PFAS)</div><div>0,5 µg/L total (somme des 20)</div><div>Analyse obligatoire AEP 2026</div></div></div></div></div>',
              },
              flashcards: [
                { q: 'Pourquoi les PFAS sont-ils appelés "polluants éternels" ?', r: 'La liaison carbone-fluor (C-F) est la plus forte en chimie organique → aucune enzyme naturelle ne peut la rompre. Les PFAS s\'accumulent dans les organismes et l\'environnement sans se dégrader', expl: 'La demi-vie des PFOS dans le corps humain est de 5–8 ans. Dans les sols, certains PFAS ont des demi-vies de plusieurs décennies. Même à des températures de 500°C, certains survivent.' },
                { q: 'Quelle est la principale source de contamination des sols et nappes par les PFAS en France ?', r: 'Les mousses AFFF (aqueous film forming foam) utilisées pour l\'entraînement anti-incendie dans les aéroports et bases militaires. Les boues d\'épuration épandues sont la 2e source', expl: 'Les sites aéroportuaires (Roissy, Nice, Bordeaux, bases militaires) sont les zones les plus contaminées. La contamination peut s\'étendre sur plusieurs km en aval hydrogéologique.' },
                { q: 'Quelle méthode d\'analyse est utilisée pour les PFAS à l\'état de traces ?', r: 'LC-MS/MS (chromatographie liquide à haute performance couplée à la spectrométrie de masse en tandem). Limite de détection : 1–5 ng/L', expl: 'Sans LC-MS/MS, les PFAS sont indétectables. Cette technique permet d\'identifier et quantifier des centaines de PFAS en un seul passage. Elle nécessite une accréditation COFRAC.' },
                { q: 'Quel traitement élimine le mieux les PFAS de l\'eau potable ?', r: 'L\'osmose inverse (OI) retient quasi 100 % des PFAS. Le CAG est efficace pour les PFAS longue chaîne (≥ C8). La nanofiltration est intermédiaire', expl: 'Les PFAS à courte chaîne (C4, C6) résistent au CAG et à certaines NF. Seule l\'OI les retient. Problème : le concentrat OI contient tous les PFAS → destruction obligatoire par incinération à > 1 100°C.' },
                { q: 'Quels organes ou systèmes sont principalement affectés par les PFAS ?', r: 'Foie (hépatotoxicité), thyroïde (perturbation hormonale), système immunitaire (immunosuppression), reins et testicules (PFOA/PFOS : cancérogènes CMR2)', expl: 'Les PFAS se fixent aux protéines plasmatiques et s\'accumulent dans le foie. Effets chez l\'enfant : réduction de la réponse vaccinale, perturbation du développement.' },
                { q: 'Quelle est la norme PFAS dans l\'eau potable fixée par la Directive 2020/2184 ?', r: '0,1 µg/L par substance PFAS individuelle — 0,5 µg/L pour la somme des 20 PFAS réglementés. Applicabilité progressive selon les États membres', expl: 'L\'OMS a proposé en 2022 des valeurs guide encore plus strictes pour PFOS (100 ng/L) et PFOA (100 ng/L). Les États-Unis ont fixé des normes à 4 ng/L pour certains PFAS en 2024.' },
              ],
            },
            {
              id: 'qa-m1-2',
              titre: 'Perturbateurs endocriniens et microplastiques',
              fiche: {
                intro: 'Perturbateurs endocriniens et microplastiques sont deux catégories de polluants émergents qui font l\'objet d\'une surveillance croissante, même en l\'absence de normes complètes.',
                points: [
                  '🧬 Perturbateurs endocriniens (PE) : substances qui imitent, bloquent ou modifient les hormones. Effets à très faibles doses (ng/L voire pg/L)',
                  '💊 PE prioritaires en eau : 17α-éthinylestradiol (EE2 — contraceptif oral) | bisphénol A (BPA) | phtalates | nonylphénols | pesticides organochlorés (DDT, lindane)',
                  '🐟 Impact aquatique : féminisation des poissons mâles (imposex), réduction de la fertilité, hermaphrodisme. Observé à EE2 ≥ 1 ng/L dans les rivières en aval de STEP',
                  '⚠️ Élimination STEP : insuffisante pour EE2 (STEP classiques éliminent 50–90 % → résidu actif). Traitement complémentaire : ozonation + CAG',
                  '🔵 Microplastiques : particules plastiques < 5 mm. Sources : dégradation déchets plastiques | fibres textiles synthétiques (lavage) | granulés de pneus (routes)',
                  '🔴 Nanoplastiques (< 1 µm) : passent les barrières biologiques (sang-cerveau, placenta). Très préoccupants mais difficiles à analyser',
                  '💧 Dans l\'eau potable : microplastiques retrouvés dans l\'eau du robinet et en bouteille. Pas encore de normes AEP. Élimination : filtration < 1 µm (UF) efficace',
                  '🌡️ Effets PE à faible dose : courbe dose-réponse non linéaire (effet cocktail — mélange de PE à faibles doses = synergie toxique)',
                ],
                formules: [],
                retenir: 'PE = hormones mimétiques à ng/L. EE2 féminise les poissons. Traitement : ozonation + CAG. Microplastiques = < 5 mm. Nanoplastiques franchissent les barrières bio.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Perturbateurs endocriniens &amp; microplastiques</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><div style="background:rgba(124,58,237,.08);border:1.5px solid rgba(124,58,237,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#6D28D9;margin-bottom:6px">🧬 Perturbateurs endocriniens (PE)</div><div style="display:flex;flex-direction:column;gap:3px;font-size:9px;color:var(--c-text-3)"><div>• Effets à des concentrations de <strong>ng/L</strong></div><div>• EE2 (éthinylestradiol) : féminise les poissons</div><div>• Bisphenol A : intersexualité des amphibiens</div><div>• Sources : pilules contraceptives, plastiques</div><div style="color:#6D28D9;font-weight:600;margin-top:4px">Traitement : ozonation + CAG</div></div></div><div style="background:rgba(37,99,235,.08);border:1.5px solid rgba(37,99,235,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#1D4ED8;margin-bottom:6px">🔵 Microplastiques</div><div style="display:flex;flex-direction:column;gap:3px;font-size:9px;color:var(--c-text-3)"><div>• Taille : &lt; 5 mm (microplastiques)</div><div>• Taille : &lt; 1 µm (nanoplastiques) ⚠️</div><div>• Sources : dégradation emballages, fibres</div><div>• Nanoplastiques franchissent barrière intestinale</div><div style="color:#1D4ED8;font-weight:600;margin-top:4px">Traitement : ultrafiltration (OI)</div></div></div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px 10px"><div style="font-size:9.5px;font-weight:700;color:var(--c-text);margin-bottom:4px">Principaux perturbateurs endocriniens dans l\'eau</div><div style="display:flex;gap:8px;flex-wrap:wrap;font-size:9px;color:var(--c-text-3)"><span style="padding:3px 7px;background:rgba(124,58,237,.1);border-radius:12px">EE2 (pilule)</span><span style="padding:3px 7px;background:rgba(124,58,237,.1);border-radius:12px">BPA (plastiques)</span><span style="padding:3px 7px;background:rgba(124,58,237,.1);border-radius:12px">DEHP (plastifiants)</span><span style="padding:3px 7px;background:rgba(124,58,237,.1);border-radius:12px">Atrazine (herbicide)</span><span style="padding:3px 7px;background:rgba(124,58,237,.1);border-radius:12px">Alkylphénols (détergents)</span></div></div></div>',
              },
              flashcards: [
                { q: 'Qu\'est-ce qu\'un perturbateur endocrinien ?', r: 'Substance exogène qui interfère avec le système hormonal : imite les hormones (agoniste), les bloque (antagoniste) ou modifie leur synthèse/métabolisme', expl: 'Le caractère PE se manifeste souvent à des doses très inférieures aux doses toxiques classiques. La relation dose-réponse peut être non monotone (U inversé).' },
                { q: 'Quel PE est le plus préoccupant pour les milieux aquatiques ?', r: '17α-éthinylestradiol (EE2) : hormone synthétique des contraceptifs oraux. Féminise les poissons mâles (réduction spermatogenèse, intersex) à des concentrations de 1 ng/L', expl: 'L\'EE2 est éliminé à 50–90 % par les STEP classiques. Le résidu actif dans les rivières françaises en aval de STEP est suffisant pour affecter la reproduction des poissons.' },
                { q: 'Comment éliminer efficacement l\'EE2 dans une STEP ou une usine de potabilisation ?', r: 'Ozonation (oxydation de l\'EE2) suivie de filtration sur charbon actif en grains (CAG). L\'ozonation seule peut former des produits de transformation encore actifs', expl: 'L\'association O₃ + CAG est la référence pour éliminer les PE. Des études montrent une réduction de > 90 % de l\'activité oestrogénique sur des rivières équipées de cette technologie.' },
                { q: 'Quelle est la définition des microplastiques ?', r: 'Particules plastiques de taille < 5 mm. Primaires (fabriqués petits : cosmétiques, granulés industriels) ou secondaires (fragmentation de macro-déchets plastiques)', expl: 'On les retrouve dans tous les compartiments : eau douce, eau de mer, sédiments, air, nourriture, corps humain. La contamination est planétaire et irréversible à l\'échelle humaine.' },
                { q: 'Comment les microplastiques sont-ils éliminés dans l\'eau potable ?', r: 'La filtration membranaire < 1 µm (ultrafiltration) est efficace. Les traitements conventionnels (coagulation-filtration sable) éliminent 70–80 % des microplastiques > 20 µm', expl: 'Les nanoplastiques (< 1 µm) nécessitent des membranes très fines (OI/NF). Ils sont potentiellement plus dangereux car ils traversent les barrières biologiques.' },
                { q: 'Qu\'est-ce que l\'effet cocktail des perturbateurs endocriniens ?', r: 'Synergie toxique de plusieurs PE présents simultanément à faibles doses individuellement non actives. Le mélange peut produire un effet hormonal significatif', expl: 'C\'est un défi réglementaire majeur : chaque substance respecte la norme, mais la combinaison de 10–20 PE à faibles doses produit un effet global. Les mélanges sont rarement évalués.' },
              ],
            },
          ]},
        ],
      },

      {
        id: 'an2',
        name: 'Master 2',
        matieres: [
          { id: 'climatologie', name: 'Changement climatique et ressources en eau', ico: '🌍', color: '#E85D04', colorl: '#FFF0E0', chapitres: [
            {
              id: 'cc-m2-1',
              titre: 'Impacts du changement climatique sur les débits et la ressource en eau',
              fiche: {
                intro: 'Le changement climatique modifie profondément le cycle de l\'eau en France et dans le monde. Les ressources en eau sont menacées par des étiages plus sévères, des crues plus intenses et une modification de la recharge des nappes.',
                points: [
                  '🌡️ Scénarios GIEC : RCP2.6 (+2°C) | RCP4.5 (+2,5°C) | RCP8.5 (business as usual : +4 à +5°C d\'ici 2100)',
                  '🇫🇷 France : T° en hausse de +1,4°C depuis 1900. Projections : +1,5 à +4°C d\'ici 2100 selon scénarios',
                  '🌧️ Précipitations : moins d\'été (–20 % à –30 % dans le Sud) | plus intenses (pluies extrêmes) | enneigement en forte baisse montagne',
                  '📉 Modules (débits moyens) : –10 % à –40 % d\'ici 2050 selon bassins. Méditerranée et Sud-Ouest : les plus touchés',
                  '🏔️ Glaciers alpins : réduction de 70 % du volume depuis 1850. Disparition prévue avant 2100 → perte du "château d\'eau" alpin',
                  '🌊 Eaux souterraines : recharge hivernale réduite → niveaux piézométriques estivaux plus bas. Sécheresses 2003, 2018, 2022 : records historiques',
                  '⚖️ Conflits d\'usage exacerbés : agriculture (70 % des prélèvements en été) vs AEP vs hydroélectricité vs milieux aquatiques',
                  '🔴 Changements qualitatifs : eau de surface plus chaude → prolifération cyanobactéries | concentration des polluants en étiage | efficacité réduite des STEP en chaleur',
                ],
                formules: [
                  'Forçage radiatif (W/m²) = mesure de l\'effet de serre additionnel. +4 W/m² pour RCP8.5',
                  'Résilience hydrologique = capacité d\'un système eau à absorber les chocs climatiques sans changement de régime',
                ],
                retenir: 'RCP8.5 = +4°C d\'ici 2100. Modules en baisse de –10 à –40 %. Étiages plus sévères. Glaciers en voie de disparition. Conflits d\'usage agriculture/AEP/milieux.',
                schema: '<svg viewBox="0 0 500 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">SCÉNARIOS CLIMATIQUES GIEC — IMPACTS EAU</text><!-- RCP bars --><text x="60" y="36" text-anchor="middle" font-size="9" font-weight="700" fill="var(--c-text)">Scénario</text><text x="180" y="36" text-anchor="middle" font-size="9" font-weight="700" fill="var(--c-text)">T° 2100</text><text x="320" y="36" text-anchor="middle" font-size="9" font-weight="700" fill="var(--c-text)">Impact modules France</text><text x="450" y="36" text-anchor="middle" font-size="9" font-weight="700" fill="var(--c-text)">Risque</text><!-- RCP2.6 --><rect x="10" y="42" width="480" height="28" rx="4" fill="rgba(22,163,74,.08)"/><text x="60" y="61" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803D">RCP 2.6</text><text x="180" y="61" text-anchor="middle" font-size="9.5" fill="var(--c-text-3)">+1 à +1,5 °C</text><rect x="250" y="48" width="60" height="14" rx="2" fill="rgba(22,163,74,.3)"/><text x="320" y="60" text-anchor="middle" font-size="8.5" fill="#15803D">–5 à –10 %</text><text x="450" y="61" text-anchor="middle" font-size="9" fill="#15803D">⬇️ Gérable</text><!-- RCP4.5 --><rect x="10" y="74" width="480" height="28" rx="4" fill="rgba(217,119,6,.08)"/><text x="60" y="93" text-anchor="middle" font-size="9.5" font-weight="700" fill="#B45309">RCP 4.5</text><text x="180" y="93" text-anchor="middle" font-size="9.5" fill="var(--c-text-3)">+2 à +2,5 °C</text><rect x="250" y="80" width="90" height="14" rx="2" fill="rgba(217,119,6,.3)"/><text x="320" y="92" text-anchor="middle" font-size="8.5" fill="#B45309">–10 à –25 %</text><text x="450" y="93" text-anchor="middle" font-size="9" fill="#B45309">⬇️ Tension</text><!-- RCP8.5 --><rect x="10" y="106" width="480" height="28" rx="4" fill="rgba(239,68,68,.10)"/><text x="60" y="125" text-anchor="middle" font-size="9.5" font-weight="700" fill="#DC2626">RCP 8.5</text><text x="180" y="125" text-anchor="middle" font-size="9.5" fill="var(--c-text-3)">+3 à +4 °C</text><rect x="250" y="112" width="140" height="14" rx="2" fill="rgba(239,68,68,.35)"/><text x="320" y="124" text-anchor="middle" font-size="8.5" fill="#DC2626">–20 à –40 %</text><text x="450" y="125" text-anchor="middle" font-size="9" fill="#DC2626">⬇️ Crise</text><!-- Conflicts box --><rect x="10" y="148" width="480" height="35" rx="6" fill="rgba(124,58,237,.07)" stroke="rgba(124,58,237,.3)" stroke-width="1"/><text x="250" y="163" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6D28D9">Conflits d\'usage anticipés</text><text x="250" y="176" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">Agriculture (irrigation) vs AEP vs Milieux aquatiques vs Énergie (hydroélectricité)</text></svg>',
              },
              flashcards: [
                { q: 'Qu\'est-ce que le scénario RCP8.5 du GIEC ?', r: 'Scénario "business as usual" : pas de réduction des émissions de GES. Concentration CO₂ > 1 000 ppm en 2100. Hausse T° de +4 à +5°C. Forçage radiatif +8,5 W/m²', expl: 'Le RCP8.5 est le scénario pessimiste de référence pour les études d\'impact. Il est malheureusement proche de la trajectoire réelle d\'émissions des 10 dernières années.' },
                { q: 'Quel impact le CC a-t-il sur les modules (débits moyens) des rivières françaises ?', r: 'Baisse de 10 à 40 % des modules d\'ici 2050 selon les bassins. Les bassins méditerranéens et sud-atlantiques sont les plus touchés (–25 à –40 %)', expl: 'Certains bassins (Rhône alpin) maintiennent leurs débits à court terme grâce à la fonte glaciaire, mais subiront une chute brutale quand les glaciers auront disparu.' },
                { q: 'Pourquoi la disparition des glaciers alpins est-elle un enjeu critique ?', r: 'Les glaciers stockent l\'eau en hiver et la restituent en été (étiage naturellement soutenu). Sans eux, les débits d\'été des rivières alpines chuteront drastiquement', expl: 'Le glacier de la Mer de Glace (Chamonix) a perdu 150 m de profondeur depuis 1850. Les glaciers pyrénéens seront probablement disparus avant 2050. L\'Arve, l\'Isère, le Gave en seront affectés.' },
                { q: 'Pourquoi les étiages sont-ils plus concentrés en polluants lors des sécheresses ?', r: 'Le débit est plus faible → le facteur de dilution diminue → les mêmes rejets de STEP, agricoles et industriels produisent des concentrations plus élevées dans le cours d\'eau', expl: 'En étiage sévère, certains cours d\'eau sont constitués à plus de 50 % d\'effluents de STEP. La DCO, les nitrates, les perturbateurs endocriniens s\'y concentrent au-delà des normes.' },
                { q: 'Quels usages de l\'eau sont en conflit lors des étiages exacerbés par le CC ?', r: 'Agriculture (irrigation, 70 % des prélèvements estivaux) vs AEP vs hydroélectricité vs maintien des débits réservés pour les milieux aquatiques', expl: 'Les arrêtés sécheresse imposent des restrictions par niveau d\'alerte. En crise, l\'AEP est prioritaire. Les conflits sont particulièrement aigus dans les bassins Adour-Garonne et Rhône-Méditerranée.' },
                { q: 'Comment le changement climatique affecte-t-il la qualité de l\'eau des STEP ?', r: 'T° élevée réduit la solubilité de l\'O₂ et accélère les processus biologiques → risque de déficit en O₂ dans les bassins d\'aération + prolifération de cyanobactéries dans les réservoirs', expl: 'Les STEP dimensionnées pour T° < 25°C peuvent voir leurs performances se dégrader si la T° des eaux usées dépasse 30°C en été. La nitrification est particulièrement affectée.' },
              ],
            },
            {
              id: 'cc-m2-2',
              titre: 'Adaptation des systèmes d\'eau potable et d\'assainissement',
              fiche: {
                intro: 'L\'adaptation au changement climatique impose de repenser la gestion des ressources en eau : sécurisation des approvisionnements, économies d\'eau, réutilisation et nouvelles technologies.',
                points: [
                  '🔀 Sécurisation AEP : diversification des ressources (interconnexions réseaux, nouvelles captations) + augmentation des capacités de stockage (réservoirs, barrages)',
                  '💧 Économies d\'eau : réduction des fuites (rendement ≥ 85 %) | tarification progressive par blocs (premiers m³ bon marché, suivants plus chers) | compteurs intelligents (AMI)',
                  '♻️ REUT (Réutilisation des Eaux Usées Traitées) : arrosage espaces verts, toilettes, irrigation agricole, industrie. Règlement UE 2020/741 + décret France 2022',
                  '   REUT irrigation : qualité requise selon le type de culture (NGL < 10 mg/L, E. coli < 10 UFC/100 mL pour cultures alimentaires)',
                  '🌧️ Récupération eaux pluviales : usages non potables (WC, arrosage, nettoyage). Réglementation française : citerne + robinet différencié + étiquetage',
                  '🌊 Dessalement : solution de dernier recours (énergie intensive : 3–10 kWh/m³). Utilisé aux Canaries, en Martinique, dans les DROM. Envisagé pour Paris d\'ici 2050',
                  '🏗️ Adaptation des STEP : prétraitements renforcés pour les crues (surverses) | biofiltration pour les étiages concentrés | réfrigération artificielle des bassins biologiques',
                  '📋 Plans de gestion sécheresse (PGS) : obligation pour les collectivités > 5 000 abonnés. Scénarios d\'alimentation alternative, réduction des fuites prioritaire',
                ],
                formules: [],
                retenir: 'REUT = réutilisation EUT (règlement UE 2020/741). Économies : fuites + compteurs intelligents. Sécurisation = interconnexions + stockage. Dessalement = dernier recours.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Stratégies d\'adaptation — ressources en eau</div><div style="display:flex;flex-direction:column;gap:6px"><div style="display:flex;gap:8px"><div style="background:rgba(22,163,74,.10);border:1.5px solid rgba(22,163,74,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:800;color:#15803D">💧 REUT (réutilisation)</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Règlement UE 2020/741<br>EUT traitées → irrigation agricole<br>Classe A → maraîchage direct</div></div><div style="background:rgba(37,99,235,.10);border:1.5px solid rgba(37,99,235,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:800;color:#1D4ED8">📊 Économies actives</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Réduction fuites (ILP)<br>Compteurs intelligents AMR/AMI<br>Redevance progressive</div></div><div style="background:rgba(217,119,6,.10);border:1.5px solid rgba(217,119,6,.4);border-radius:8px;padding:8px 12px;flex:1"><div style="font-size:10.5px;font-weight:800;color:#B45309">🔗 Sécurisation</div><div style="font-size:9px;color:var(--c-text-3);margin-top:3px">Interconnexions réseaux<br>Stockage stratégique<br>Ressources de substitution</div></div></div><div style="background:rgba(239,68,68,.08);border:1.5px solid rgba(239,68,68,.35);border-radius:8px;padding:8px 12px"><div style="font-size:10.5px;font-weight:800;color:#DC2626;margin-bottom:4px">🌊 Dessalement — dernier recours</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:9px;color:var(--c-text-3)"><div><div>• Osmose inverse (OI) : 3–5 kWh/m³</div><div>• Concentrat : saumure → impact milieu marin</div></div><div><div>• Coût : 0,5–1 €/m³ (vs 0,1–0,3 €/m³ AEP classique)</div><div>• Pertinent en zone côtière sous tension</div></div></div></div></div></div>',
              },
              flashcards: [
                { q: 'Qu\'est-ce que la REUT et quelle est sa réglementation en France ?', r: 'Réutilisation des Eaux Usées Traitées pour des usages non potables. Règlement UE 2020/741 + décret français n°2022-336. Usages autorisés : irrigation agricole, arrosage espaces verts, nettoyage voirie', expl: 'La REUT est très développée en Espagne (20 % des eaux épurées réutilisées) et en Israël (90 %). France : seulement 1 % pour l\'instant, mais en forte progression post-sécheresses 2022.' },
                { q: 'Qu\'est-ce qu\'un compteur intelligent (AMI) et quel avantage pour l\'adaptation au CC ?', r: 'Advanced Metering Infrastructure : compteur d\'eau avec transmission à distance des données (horaire ou quotidienne). Détecte les fuites domestiques, alerte les consommateurs et optimise la facturation', expl: 'Un compteur intelligent détecte une consommation nocturne anormale (fuite robinet, WC) et alerte le propriétaire. Les gains sur les pertes domestiques peuvent atteindre 10–15 % de la consommation.' },
                { q: 'Pourquoi le dessalement est-il considéré comme "solution de dernier recours" ?', r: 'Très énergivore (3–10 kWh/m³ vs 0,3 kWh pour une eau souterraine) → coût élevé et fort impact carbone. Génère un concentrat salin à éliminer', expl: 'Pour produire 1 m³ d\'eau potable par dessalement, on consomme autant d\'énergie que pour produire 10 m³ d\'eau souterraine. Le bilan carbone est très défavorable sans énergie renouvelable.' },
                { q: 'Quelles mesures concrètes d\'adaptation les STEP doivent-elles adopter face au CC ?', r: 'Gestion des surverses par temps de pluie intense (biofiltres, by-pass contrôlés) + adaptation aux températures élevées estivales (ventilation, ombrage bassins) + traitement tertiaire renforcé en étiage', expl: 'En 2022, plusieurs STEP en France ont eu des difficultés de nitrification en été (T° bassins > 30°C). Des modèles de simulation permettent de prévoir ces situations et d\'adapter le traitement.' },
                { q: 'Qu\'est-ce que la tarification progressive par blocs ?', r: 'Les premiers m³ consommés (tranche sociale) sont facturés à un tarif bas. Les m³ suivants sont progressivement plus chers. Encourage les économies d\'eau tout en garantissant l\'accès au droit à l\'eau', expl: 'Ce système punit la surconsommation (arrosage intensif, piscines) tout en préservant l\'accès à l\'eau pour les ménages modestes. Dunkerque, Montpellier et d\'autres villes l\'ont adopté.' },
                { q: 'Qu\'est-ce qu\'un Plan de Gestion de la Sécheresse (PGS) ?', r: 'Document préventif identifiant les ressources alternatives, les mesures d\'économies, les interconnexions de secours et les procédures d\'alerte pour maintenir l\'AEP en situation de sécheresse sévère', expl: 'La sécheresse 2022 a montré que de nombreuses communes n\'avaient pas de PGS. Le gouvernement a rendu ces plans obligatoires pour les collectivités > 5 000 abonnés à partir de 2024.' },
              ],
            },
          ]},
        ],
      },
    ],
  },

  /* ══ BUT GTE (option eau) ══════════════════════════════════════════ */
  'but-gte': {
    name: 'BUT Génie Thermique et Énergie — option Eau',
    sigle: 'BUT GTE',
    ico: '🏗️',
    color: '#0A5090',
    colorl: '#E6EEF8',
    niveau: 'Bac+3',
    organisme: 'IUT — Ministère de l\'Enseignement Supérieur',
    desc: 'BUT en 3 ans avec option eau : hydraulique appliquée, systèmes de pompage, instrumentation, exploitation.',
    annees: [
      {
        id: 'an1',
        name: 'Semestres 1 à 6',
        matieres: [
          { id: 'hydraulique-but', name: 'Hydraulique appliquée', ico: '🌊', color: '#0A5090', colorl: '#E6EEF8', chapitres: [
            {
              id: 'hyd-but-1',
              titre: 'Réseaux sous pression — simulation et optimisation',
              fiche: {
                intro: 'La simulation des réseaux hydrauliques permet de calculer pressions et débits en tous points, d\'optimiser les diamètres et d\'anticiper les coups de bélier avant la mise en service.',
                points: [
                  '💻 Logiciels de simulation : EPANET (USEPA, gratuit, standard mondial) | WaterGEMS | SynerGEE | PORTEAU (INRAE, gratuit)',
                  '📐 Régime permanent : simulation des pressions et débits en état stationnaire. Vérification des pressions (2–6 bar) et des vitesses (0,5–2 m/s)',
                  '📈 Régime transitoire (coups de bélier) : onde de pression lors d\'une fermeture rapide de vanne ou d\'un arrêt de pompe',
                  '   ΔP = ρ × c × ΔV (c = célérité de l\'onde ≈ 1 000–1 300 m/s dans l\'eau en conduite)',
                  '⚠️ Protection anti-bélier : chaudière (réservoir air comprimé) | vanne à fermeture lente | soupape de décharge | ventouse',
                  '🔺 Nœud réseau : conservation des débits (Σ Q entrant = Σ Q sortant). Maille : conservation de l\'énergie (Σ ΔH = 0)',
                  '📊 Optimisation diamètres : minimiser le coût (investissement + exploitation). NomoCom ou formule empirique : V ≈ 0,5–1,5 m/s recommandée',
                  '🗺️ Sectorisation : zones de pression différentes séparées par des régulateurs (RDP). Évite les pressions excessives (> 8 bar = risque de fuites)',
                ],
                formules: [
                  'ΔP_bélier = ρ × c × ΔV — surpression due au coup de bélier (Pa)',
                  'c = √(E/ρ) — célérité de l\'onde (E = module de compressibilité, ρ = masse volumique)',
                  'ΣQ_nœud = 0 et ΣΔH_maille = 0 — équations de Hardy-Cross',
                ],
                retenir: 'EPANET = simulation réseau (gratuit). Coup de bélier : ΔP = ρcΔV. Protection : chaudière ou vanne lente. Pressions cibles : 2–6 bar. V : 0,5–2 m/s.',
                schema: '<div style="padding:14px"><div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Hydraulique des réseaux maillés — EPANET</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><div style="background:rgba(37,99,235,.08);border:1.5px solid rgba(37,99,235,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#1D4ED8;margin-bottom:6px">🖥️ EPANET (EPA — gratuit)</div><div style="font-size:9px;color:var(--c-text-3);display:flex;flex-direction:column;gap:3px"><div>• Simulation hydraulique + qualité eau</div><div>• Nœuds (demandes) + arcs (tuyaux)</div><div>• Réseau maillé : méthode du gradient</div><div>• Sorties : P, V, age eau, Cl₂ résiduel</div><div style="color:#1D4ED8;font-weight:600;margin-top:4px">Standard mondial, interface graphique</div></div></div><div style="background:rgba(239,68,68,.08);border:1.5px solid rgba(239,68,68,.35);border-radius:8px;padding:10px"><div style="font-size:11px;font-weight:800;color:#DC2626;margin-bottom:6px">⚡ Coup de bélier</div><div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 6px 6px 0;padding:5px 8px;font-family:monospace;font-size:10.5px;font-weight:700;color:var(--c-primary);margin-bottom:5px">ΔP = ρ × c × ΔV</div><div style="font-size:9px;color:var(--c-text-3)"><div>c = célérité onde ≈ 1000–1400 m/s</div><div style="font-weight:600;color:var(--c-text);margin-top:3px">Protection :</div><div>• Vanne à fermeture lente (&gt; 30 s)</div><div>• Chaudière anti-bélier</div></div></div></div><div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:8px;padding:8px 10px"><div style="font-size:9.5px;font-weight:700;color:var(--c-text);margin-bottom:5px">Plages de fonctionnement cibles</div><div style="display:flex;gap:12px;font-size:9px;color:var(--c-text-3)"><div><span style="font-weight:600;color:#0369A1">Pression :</span> 2–6 bar (20–60 m CE)<br>Min : ≥ 1 bar en pointe · Max : ≤ 8 bar</div><div><span style="font-weight:600;color:#15803D">Vitesse :</span> 0,5–2 m/s<br>&lt; 0,5 m/s → stagnation (qualité) · &gt; 2 m/s → bruit</div></div></div></div>',
              },
              flashcards: [
                { q: 'Qu\'est-ce qu\'EPANET et qui le développe ?', r: 'Logiciel de simulation hydraulique des réseaux sous pression, développé par l\'USEPA (Agence américaine de protection de l\'environnement). Gratuit, standard mondial', expl: 'EPANET simule le débit, la pression, la qualité de l\'eau (âge de l\'eau, chlore résiduel) en régime permanent et quasi-statique. Interface graphique simple et importation de données GIS.' },
                { q: 'Formule du coup de bélier de Joukowski ?', r: 'ΔP = ρ × c × ΔV (Pa). c ≈ 1 200 m/s dans une conduite en fonte, ρ = 1 000 kg/m³', expl: 'Pour ΔV = 1 m/s (fermeture rapide d\'une vanne) : ΔP = 1 000 × 1 200 × 1 = 1 200 000 Pa = 12 bar ! D\'où l\'importance de fermer lentement les vannes (t_fermeture > 2L/c).' },
                { q: 'Quelles sont les méthodes de protection contre les coups de bélier ?', r: 'Chaudière anti-bélier (réservoir air comprimé) | vanne à fermeture lente | soupape de décharge (by-pass calibré) | ventouse (admission d\'air) | volant d\'inertie sur pompe', expl: 'La chaudière anti-bélier est la solution la plus courante. Elle absorbe la surpression en comprimant l\'air emprisonné. Elle doit être dimensionnée pour la surpression maximale attendue.' },
                { q: 'Qu\'est-ce que la méthode de Hardy-Cross pour les réseaux maillés ?', r: 'Méthode itérative de calcul des débits dans les mailles : on part d\'une distribution initiale et on corrige successivement jusqu\'à satisfaire les deux lois (Kirchhoff) : ΣQ=0 aux nœuds et ΣΔH=0 dans les mailles', expl: 'EPANET utilise une méthode similaire (gradient hydraulique). La méthode de Hardy-Cross est aujourd\'hui calculée par ordinateur, mais comprendre son principe aide à diagnostiquer les modèles.' },
                { q: 'Pourquoi sépare-t-on un réseau en zones de pression ?', r: 'Pour maintenir une pression de service acceptable (2–6 bar) partout. Sans régulation, les points bas ont une pression > 10 bar → fuites, casses. Les RDP (régulateurs de pression) créent des zones', expl: 'Un réseau de collines requiert des zones de pression différentes selon l\'altitude. Sans RDP, les zones basses auraient une pression excessive → sur-fuites → mauvais rendement.' },
                { q: 'Quelle vitesse d\'écoulement recommande-t-on dans un réseau AEP ?', r: '0,5 à 2 m/s en régime nominal. < 0,5 m/s : risque de dépôts et vieillissement de l\'eau (goûts, qualité). > 2 m/s : risque de coups de bélier et bruit', expl: 'La vitesse optimale se situe entre 0,8 et 1,5 m/s. Cette plage équilibre les pertes de charge (pas trop élevées), l\'auto-curage et la protection contre les coups de bélier.' },
              ],
            },
            {
              id: 'hyd-but-2',
              titre: 'Systèmes de pompage — choix, régulation et variation de vitesse',
              fiche: {
                intro: 'Le choix et la régulation des pompes sont des compétences clés du technicien eau. La variation de vitesse (VSP) est la solution la plus efficace énergétiquement pour adapter le débit à la demande.',
                points: [
                  '📈 Courbe pompe H=f(Q) : HMT décroît quand Q augmente. Fournie par le fabricant pour la vitesse nominale N (tr/min)',
                  '🎯 Point de fonctionnement : intersection courbe pompe / courbe réseau (H_rés = Δz + K·Q²)',
                  '⚡ Variation de vitesse (VSP = Variable Speed Pump) : lois de similitude (affinité) :',
                  '   Q₂/Q₁ = N₂/N₁ | H₂/H₁ = (N₂/N₁)² | P₂/P₁ = (N₂/N₁)³',
                  '💰 Économies énergie : réduire N de 20 % → P réduite de (0,8)³ = 51 % → économie 49 %',
                  '🔧 Variateur de fréquence (VFD/VSD) : convertisseur électronique qui modifie la fréquence d\'alimentation du moteur (50 Hz → 30 Hz = N réduite à 60 %)',
                  '🔗 Multi-pompes : 2–3 pompes en parallèle avec mise en route en cascade. 1 pompe à débit faible, 2 pompes à débit fort',
                  '🛡️ Protections pompe : pressostat anti-désamorçage | clapet anti-retour | soupape de sécurité | détection de vibrations (cavitation)',
                ],
                formules: [
                  'Q₂ = Q₁ × (N₂/N₁) | H₂ = H₁ × (N₂/N₁)² | P₂ = P₁ × (N₂/N₁)³ — lois de similitude',
                  'NPSH_dispo = (P_atm + ρgh_asp – P_vap) / (ρg) — NPSH disponible',
                ],
                retenir: 'VSP : P ∝ N³ → réduire N = économies cubed. VFD = variateur de fréquence. Multi-pompes en parallèle = flexibilité. Vérifier NPSH_dispo > NPSH_requis.',
                schema: '<svg viewBox="0 0 500 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">LOIS DE SIMILITUDE DES POMPES</text><!-- Axes --><line x1="60" y1="25" x2="60" y2="155" stroke="var(--c-text-3)" stroke-width="1.5"/><line x1="60" y1="155" x2="470" y2="155" stroke="var(--c-text-3)" stroke-width="1.5"/><text x="265" y="170" text-anchor="middle" font-size="9" fill="var(--c-text-3)">Débit Q (m³/h)</text><text x="20" y="90" text-anchor="middle" font-size="9" fill="var(--c-text-3)" transform="rotate(-90,20,90)">H (m)</text><!-- Curve N100% --><path d="M80,60 Q180,65 280,100 Q350,125 420,148" fill="none" stroke="#0369A1" stroke-width="2.5"/><text x="425" y="145" font-size="8.5" font-weight="700" fill="#0369A1">N = 100 %</text><!-- Curve N80% --><path d="M80,90 Q160,95 240,115 Q310,130 380,148" fill="none" stroke="#22C55E" stroke-width="2" stroke-dasharray="5,3"/><text x="385" y="145" font-size="8.5" fill="#22C55E">N = 80 %</text><!-- Curve N60% --><path d="M80,118 Q140,122 200,132 Q250,140 300,148" fill="none" stroke="#F97316" stroke-width="2" stroke-dasharray="3,3"/><text x="305" y="145" font-size="8.5" fill="#F97316">N = 60 %</text><!-- Power law annotation --><rect x="75" y="28" width="230" height="55" rx="6" fill="rgba(37,99,235,.08)" stroke="rgba(37,99,235,.3)" stroke-width="1"/><text x="190" y="45" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1D4ED8">Lois de similitude</text><text x="190" y="58" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)" font-family="monospace">Q ∝ N · H ∝ N² · P ∝ N³</text><text x="190" y="72" text-anchor="middle" font-size="8.5" fill="#DC2626" font-weight="600">Réduire N de 20 % → P réduite de 49 % !</text><!-- System curve --><path d="M60,148 Q200,140 340,90" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="6,2"/><text x="345" y="87" font-size="8" fill="#EF4444">Courbe réseau</text></svg>',
              },
              flashcards: [
                { q: 'Si on réduit la vitesse d\'une pompe de 20 %, quel est le gain de puissance ?', r: 'P₂/P₁ = (0,8)³ = 0,51 → la puissance est réduite de 49 % ! (Loi de similitude : P ∝ N³)', expl: 'C\'est la règle "cubique" : une réduction modeste de vitesse donne un gain énergétique très significatif. D\'où l\'intérêt des variateurs de vitesse pour les pompes tournant souvent à charge partielle.' },
                { q: 'Qu\'est-ce qu\'un variateur de fréquence (VFD) ?', r: 'Convertisseur électronique (AC/DC/AC) qui modifie la fréquence d\'alimentation du moteur asynchrone. Fréquence < 50 Hz → vitesse réduite proportionnellement', expl: 'Le VFD permet une régulation continue de 0 à 100 % de la vitesse. Il améliore la durée de vie de la pompe (démarrages progressifs), réduit les coups de bélier et économise 20–50 % d\'énergie.' },
                { q: 'Comment fonctionne un système multi-pompes en parallèle ?', r: 'Plusieurs pompes branchées en parallèle sur le même collecteur. La mise en route est en cascade : 1 pompe si débit faible, 2 ou 3 si débit élevé. La HMT reste sensiblement la même', expl: 'Avantage : flexibilité + redondance (panne d\'une pompe = service maintenu par les autres). Les pompes doivent avoir des courbes similaires pour une répartition équitable du débit.' },
                { q: 'Qu\'est-ce que le NPSH et pourquoi est-il crucial ?', r: 'Net Positive Suction Head : charge disponible à l\'aspiration. Si NPSH_dispo < NPSH_requis → cavitation → bulles de vapeur → érosion, bruit, perte de débit', expl: 'La cavitation est provoquée par une pression trop basse à l\'aspiration (hauteur d\'aspiration trop grande, température élevée, pertes de charge trop importantes côté aspiration).' },
                { q: 'Comment détermine-t-on le point de fonctionnement d\'une pompe ?', r: 'C\'est l\'intersection de la courbe H=f(Q) de la pompe et de la courbe H=f(Q) du réseau : H_rés = Δz_géodésique + K×Q²', expl: 'Si le réseau change (vanne fermée, pression statique plus haute), la courbe réseau monte → le point de fonctionnement se déplace vers un débit plus faible. La pompe peut même ne pas démarrer si Δz > HMT_max.' },
                { q: 'Quelle protection est indispensable contre le désamorçage d\'une pompe ?', r: 'Pressostat basse pression côté aspiration (ou détecteur de débit) qui coupe l\'alimentation si la pression d\'aspiration est insuffisante (pas d\'eau = fonctionnement à sec = destruction rapide)', expl: 'Une pompe centrifuge fonctionnant à sec peut être détruite en quelques secondes (échauffement joint mécanique, grippage). Le pressostat est la protection de base obligatoire.' },
              ],
            },
          ]},

          { id: 'instrumentation-but', name: 'Métrologie et instrumentation', ico: '⚙️', color: '#6B4226', colorl: '#F5EFE0', chapitres: [
            {
              id: 'ins-but-1',
              titre: 'Métrologie des capteurs — précision, étalonnage et chaîne de mesure',
              fiche: {
                intro: 'La métrologie est la science de la mesure. En instrumentation industrielle, comprendre les notions de justesse, fidélité, incertitude et étalonnage est indispensable pour garantir la fiabilité des données exploitées.',
                points: [
                  '🎯 Justesse (biais) : écart systématique entre la mesure et la valeur vraie. Éliminé par étalonnage',
                  '🔁 Fidélité (reproductibilité) : dispersion des mesures répétées dans les mêmes conditions. Liée aux erreurs aléatoires',
                  '🎯 Exactitude : combinaison de justesse + fidélité. Un instrument juste et fidèle est exact',
                  '📏 Incertitude de mesure (norme GUM) : incertitude type u + incertitude élargie U = k×u (k=2 pour 95 % de confiance)',
                  '📋 Étalonnage : comparaison à un étalon de référence traçable au SI. Certificat COFRAC pour mesures réglementaires AEP',
                  '🔗 Chaîne de mesure : capteur → conditionneur → convertisseur A/N → API → supervision. Chaque maillon ajoute une incertitude',
                  '💧 Compteurs abonnés : classe B (standard), C, D (haute précision). Renouvellement tous les 10–15 ans (sous-comptage au vieillissement)',
                  '🌡️ Vérification in situ : débitmètre EM installé → vérification par débitmètre ultrasons clamp-on temporaire (±2 %)',
                ],
                formules: [
                  'U = k × u_c — incertitude élargie (k=2 → confiance 95 %)',
                  'Classe de précision = erreur maximale admissible / plage de mesure × 100 (%)',
                  'Signal 4–20 mA : valeur mesurée = (I – 4) × (Vmax – Vmin) / 16 + Vmin',
                ],
                retenir: 'Justesse = biais (étalonnage). Fidélité = dispersion (répétabilité). U = 2u = incertitude à 95 %. COFRAC obligatoire pour mesures AEP. Compteurs vieillissent → sous-comptent.',
                schema: '<svg viewBox="0 0 500 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto"><text x="250" y="14" text-anchor="middle" font-size="10" font-weight="800" fill="var(--c-text-4)" letter-spacing="1">MÉTROLOGIE — QUALITÉ DES MESURES</text><!-- 4 targets --><text x="65" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="var(--c-text)">Juste + Fidèle</text><text x="185" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="var(--c-text)">Juste − Fidèle</text><text x="305" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="var(--c-text)">− Juste + Fidèle</text><text x="435" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="var(--c-text)">− Juste − Fidèle</text><!-- Target 1: accurate + precise --><circle cx="65" cy="80" r="38" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="65" cy="80" r="25" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="65" cy="80" r="12" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="63" cy="79" r="3" fill="#22C55E"/><circle cx="67" cy="81" r="3" fill="#22C55E"/><circle cx="64" cy="76" r="3" fill="#22C55E"/><circle cx="66" cy="82" r="3" fill="#22C55E"/><!-- Target 2: accurate + not precise --><circle cx="185" cy="80" r="38" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="185" cy="80" r="25" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="185" cy="80" r="12" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="172" cy="67" r="3" fill="#EAB308"/><circle cx="193" cy="90" r="3" fill="#EAB308"/><circle cx="180" cy="95" r="3" fill="#EAB308"/><circle cx="197" cy="70" r="3" fill="#EAB308"/><!-- Target 3: biased + precise --><circle cx="305" cy="80" r="38" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="305" cy="80" r="25" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="305" cy="80" r="12" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="290" cy="65" r="3" fill="#F97316"/><circle cx="294" cy="68" r="3" fill="#F97316"/><circle cx="292" cy="63" r="3" fill="#F97316"/><circle cx="288" cy="67" r="3" fill="#F97316"/><!-- Target 4: bad --><circle cx="435" cy="80" r="38" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="435" cy="80" r="25" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="435" cy="80" r="12" fill="none" stroke="var(--c-border)" stroke-width="1"/><circle cx="450" cy="58" r="3" fill="#EF4444"/><circle cx="420" cy="98" r="3" fill="#EF4444"/><circle cx="445" cy="95" r="3" fill="#EF4444"/><circle cx="418" cy="65" r="3" fill="#EF4444"/><!-- Labels --><text x="65" y="130" text-anchor="middle" font-size="8" fill="#22C55E" font-weight="700">✓ Idéal</text><text x="185" y="130" text-anchor="middle" font-size="8" fill="#EAB308">Étalonnage OK</text><text x="305" y="130" text-anchor="middle" font-size="8" fill="#F97316">Biais systématique</text><text x="435" y="130" text-anchor="middle" font-size="8" fill="#EF4444">À refaire</text><!-- Formulas --><rect x="10" y="145" width="480" height="32" rx="6" fill="rgba(37,99,235,.07)" stroke="rgba(37,99,235,.3)" stroke-width="1"/><text x="250" y="158" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1D4ED8">Incertitude élargie U = k × u (k=2 → 95 %) · GUM Guide</text><text x="250" y="171" text-anchor="middle" font-size="8.5" fill="var(--c-text-3)">COFRAC accréditation obligatoire pour analyses AEP · EN ISO 17025</text></svg>',
              },
              flashcards: [
                { q: 'Quelle est la différence entre justesse et fidélité en métrologie ?', r: 'Justesse = absence de biais (centrage sur la vraie valeur). Fidélité = faible dispersion des mesures répétées. Un instrument peut être fidèle mais pas juste (biais constant)', expl: 'Analogie cible de tir : juste = flèches centrées sur le milieu. Fidèle = flèches groupées. Exact = juste + fidèle (groupées au centre).' },
                { q: 'Qu\'est-ce que l\'incertitude élargie U ?', r: 'U = k × u_c (k = 2 pour 95 % de confiance). C\'est l\'intervalle dans lequel se trouve la valeur vraie avec 95 % de probabilité', expl: 'Ex : mesure = 10,0 mg/L, u_c = 0,2 mg/L → U = 0,4 mg/L → résultat : 10,0 ± 0,4 mg/L à 95 %. En dessous de cette incertitude, la mesure n\'est pas significativement différente.' },
                { q: 'Pourquoi les compteurs abonnés vieillissants sous-comptent-ils ?', r: 'Les mécanismes s\'usent et la turbine tourne moins vite pour le même débit → sous-enregistrement des petits débits (fuites nocturnes, petite consommation)', expl: 'Un compteur de classe B en fin de vie peut sous-mesurer de 10–20 % la consommation réelle. Ce sous-comptage contribue aux "pertes apparentes" et réduit le rendement apparent du réseau.' },
                { q: 'Qu\'est-ce que l\'étalonnage et quand est-il obligatoire avec accréditation COFRAC ?', r: 'Étalonnage = comparaison à un étalon de référence traçable. COFRAC obligatoire pour les mesures réglementaires AEP (chlore résiduel, turbidité, pH, paramètres microbiologiques)', expl: 'Sans étalonnage COFRAC, les résultats d\'analyse ne peuvent pas servir à statuer sur la conformité réglementaire de l\'eau. Un simple étalonnage interne (non COFRAC) ne suffit pas.' },
                { q: 'Comment interpréter un signal 4–20 mA reçu de 12 mA pour un capteur de pression 0–10 bar ?', r: 'Valeur = (12 – 4) × (10 – 0) / 16 + 0 = 8/16 × 10 = 5 bar', expl: '4 mA → 0 bar, 20 mA → 10 bar. Le signal est proportionnel dans la plage. Le 4 mA "plancher" (non nul) permet de détecter une coupure de câble (qui donnerait 0 mA ≠ 4 mA normal).' },
                { q: 'Qu\'est-ce qu\'une vérification in situ d\'un débitmètre installé ?', r: 'On pose temporairement un débitmètre de référence (ultrasonique clamp-on) sur la conduite pour comparer sa mesure avec celle du débitmètre installé et déterminer la dérive', expl: 'Si l\'écart entre les deux est > 2–5 %, le débitmètre installé doit être recalibré ou remplacé. La vérification in situ évite le démontage coûteux du capteur et l\'interruption du service.' },
              ],
            },
          ]},
        ],
      },
    ],
  },
};

/* ─── ÉTAT NAVIGATION ─────────────────────────────────────────────── */
var _coursState = { fId: null, aId: null, mId: null, cId: null, flashIdx: 0, flashRevealed: false };

/* ─── UTILITAIRES ─────────────────────────────────────────────────── */
function _coursGetFormation(fId)  { return COURS_DATA[fId]; }
function _coursGetAnnee(fId, aId) {
  var f = COURS_DATA[fId]; if (!f) return null;
  return f.annees.find(function(a){ return a.id === aId; });
}
function _coursGetMatiere(fId, aId, mId) {
  var a = _coursGetAnnee(fId, aId); if (!a) return null;
  return a.matieres.find(function(m){ return m.id === mId; });
}
function _coursGetChapitre(fId, aId, mId, cId) {
  var m = _coursGetMatiere(fId, aId, mId); if (!m) return null;
  return m.chapitres.find(function(c){ return c.id === cId; });
}
function _nb(arr) { return arr ? arr.length : 0; }

/* ─── HUB PRINCIPAL ──────────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════
   PROGRESSION FLASHCARDS
═══════════════════════════════════════════════════ */
function _flashProgressKey() {
  var u = (typeof AUTH !== 'undefined' && AUTH.user) ? AUTH.user.email : 'guest';
  return 'hc_flash_progress_' + u;
}

function _getAllFlashProgress() {
  try { return JSON.parse(localStorage.getItem(_flashProgressKey()) || '{}'); } catch(e) { return {}; }
}

function _saveFlashProgress(fId, aId, mId, cId, pct, ok, total) {
  var data = _getAllFlashProgress();
  var key = fId + '|' + aId + '|' + mId + '|' + cId;
  var prev = data[key];
  data[key] = {
    pct: pct, ok: ok, total: total,
    date: Date.now(),
    best: prev ? Math.max(prev.best || 0, pct) : pct,
  };
  localStorage.setItem(_flashProgressKey(), JSON.stringify(data));
}

function _getChapProgress(fId, aId, mId, cId) {
  var data = _getAllFlashProgress();
  return data[fId + '|' + aId + '|' + mId + '|' + cId] || null;
}

function renderCours() {
  var _tb = document.getElementById('tab-bar'); if (_tb) _tb.style.display = 'none';
  var html = '<div class="module-hero" style="--cat-color:var(--c-form)">'
    + '<span class="mh-icon">🎓</span>'
    + '<div class="mh-title">Cours & Révisions</div>'
    + '<div class="mh-sub">BTS GEMEAU · Licence Pro · Master · BUT — Fiches & Flashcards</div>'
    + '<div class="mh-tags"><span class="mh-tag">Fiches résumées</span><span class="mh-tag">Flashcards QCM</span><span class="mh-tag">Référentiel EN</span></div>'
    + '</div>'
    + '<div class="section-header">Choisir une formation<span class="sh-count">' + Object.keys(COURS_DATA).length + '</span></div>'
    + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';

  Object.keys(COURS_DATA).forEach(function(fId) {
    var f = COURS_DATA[fId];
    var nbChaps = 0;
    f.annees.forEach(function(a){ a.matieres.forEach(function(m){ nbChaps += m.chapitres.length; }); });
    html += '<div class="mod-list-card" style="--cat-color:' + f.color + '" onclick="renderCoursFormation(\'' + fId + '\')">'
      + '<div class="mlc-icon" style="background:' + f.colorl + ';font-size:22px">' + f.ico + '</div>'
      + '<div class="mlc-body">'
        + '<div style="font-size:10px;font-weight:800;color:' + f.color + ';text-transform:uppercase;letter-spacing:.06em;margin-bottom:2px">' + f.sigle + ' · ' + f.niveau + '</div>'
        + '<div class="mlc-name">' + f.name + '</div>'
        + '<div class="mlc-sub">' + f.organisme + '</div>'
        + '<div style="font-size:11px;color:var(--c-text-3);margin-top:4px;line-height:1.5">' + f.desc + '</div>'
        + '<div style="margin-top:6px"><span style="background:' + f.colorl + ';color:' + f.color + ';font-size:10px;font-weight:700;padding:2px 8px;border-radius:var(--r-pill)">' + nbChaps + ' chapitres</span></div>'
      + '</div>'
      + '<span class="mlc-arrow">›</span>'
      + '</div>';
  });

  html += '</div><div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

/* ─── VUE FORMATION ──────────────────────────────────────────────── */
function renderCoursFormation(fId) {
  _coursState.fId = fId;
  var f = _coursGetFormation(fId); if (!f) return;
  var html = _coursBreadcrumb([{ label: 'Cours', fn: 'renderCours()' }, { label: f.sigle }]);

  html += '<div style="background:' + f.color + ';padding:20px var(--s-4) 16px">'
    + '<div style="font-size:28px;margin-bottom:8px">' + f.ico + '</div>'
    + '<div style="font-size:18px;font-weight:800;color:#fff">' + f.name + '</div>'
    + '<div style="font-size:11px;color:rgba(255,255,255,.75);margin-top:4px">' + f.organisme + ' · ' + f.niveau + '</div>'
    + '</div>';

  html += _coursFormationDownloadBtn(fId);

  f.annees.forEach(function(a) {
    html += '<div class="section-header" style="padding-top:var(--s-3)">' + a.name + '</div>'
      + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';
    a.matieres.forEach(function(m) {
      var done = m.chapitres.filter(function(c){ return c.fiche !== null; }).length;
      html += '<div class="mod-list-card" style="--cat-color:' + m.color + '" onclick="renderCoursMatiere(\'' + fId + '\',\'' + a.id + '\',\'' + m.id + '\')">'
        + '<div class="mlc-icon" style="background:' + m.colorl + ';font-size:20px">' + m.ico + '</div>'
        + '<div class="mlc-body">'
          + '<div class="mlc-name">' + m.name + '</div>'
          + '<div style="margin-top:4px;display:flex;gap:6px;align-items:center">'
            + '<span style="font-size:10px;color:var(--c-text-3)">' + m.chapitres.length + ' chapitre(s)</span>'
            + (done > 0 ? '<span style="background:' + m.colorl + ';color:' + m.color + ';font-size:9px;font-weight:700;padding:1px 6px;border-radius:var(--r-pill)">' + done + ' disponible(s)</span>' : '<span style="background:var(--c-surface-2);color:var(--c-text-4);font-size:9px;font-weight:700;padding:1px 6px;border-radius:var(--r-pill)">Bientôt</span>')
          + '</div>'
        + '</div>'
        + '<span class="mlc-arrow">›</span>'
        + '</div>';
    });
    html += '</div>';
  });

  html += '<div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

/* ─── VUE MATIÈRE ────────────────────────────────────────────────── */
function renderCoursMatiere(fId, aId, mId) {
  _coursState.fId = fId; _coursState.aId = aId; _coursState.mId = mId;
  var f = _coursGetFormation(fId);
  var a = _coursGetAnnee(fId, aId);
  var m = _coursGetMatiere(fId, aId, mId);
  if (!m) return;

  var html = _coursBreadcrumb([
    { label: 'Cours', fn: 'renderCours()' },
    { label: f.sigle, fn: 'renderCoursFormation(\'' + fId + '\')' },
    { label: m.name },
  ]);

  html += '<div style="background:' + m.color + ';padding:16px var(--s-4)">'
    + '<div style="font-size:22px;margin-bottom:6px">' + m.ico + '</div>'
    + '<div style="font-size:16px;font-weight:800;color:#fff">' + m.name + '</div>'
    + '<div style="font-size:11px;color:rgba(255,255,255,.75);margin-top:2px">' + a.name + ' · ' + f.sigle + '</div>'
    + '</div>'
    + _coursMatiereDownloadBtn(fId, aId, mId)
    + '<div class="section-header" style="padding-top:var(--s-3)">Chapitres<span class="sh-count">' + m.chapitres.length + '</span></div>'
    + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';

  m.chapitres.forEach(function(c, i) {
    var hasFiche = c.fiche !== null;
    var nbCards  = c.flashcards ? c.flashcards.length : 0;
    var prog     = hasFiche && nbCards > 0 ? _getChapProgress(fId, aId, mId, c.id) : null;

    /* Badge de progression */
    var badge = '';
    var borderColor = hasFiche ? m.color : 'var(--c-border)';
    if (prog) {
      var best = prog.best || prog.pct;
      if (best >= 80) {
        badge = '<span style="background:#EAF8F0;color:#166038;font-size:10px;font-weight:800;padding:2px 8px;border-radius:var(--r-pill);border:1px solid #166038">✅ ' + best + '%</span>';
        borderColor = '#166038';
      } else if (best >= 50) {
        badge = '<span style="background:#FDF0D8;color:#886000;font-size:10px;font-weight:800;padding:2px 8px;border-radius:var(--r-pill);border:1px solid #886000">💪 ' + best + '%</span>';
        borderColor = '#886000';
      } else {
        badge = '<span style="background:#FDECEA;color:#A82018;font-size:10px;font-weight:800;padding:2px 8px;border-radius:var(--r-pill);border:1px solid #A82018">📖 ' + best + '%</span>';
      }
    }

    /* Barre de progression mini */
    var miniBar = '';
    if (prog) {
      var barColor = prog.best >= 80 ? '#166038' : prog.best >= 50 ? '#886000' : '#A82018';
      miniBar = '<div style="margin-top:6px;height:3px;background:var(--c-border);border-radius:2px;overflow:hidden">'
        + '<div style="height:100%;width:' + (prog.best||prog.pct) + '%;background:' + barColor + ';border-radius:2px"></div>'
        + '</div>';
    }

    html += '<div style="background:var(--c-surface);border:1.5px solid ' + borderColor + ';border-radius:var(--r-md);padding:var(--s-3) var(--s-4);cursor:' + (hasFiche ? 'pointer' : 'default') + ';opacity:' + (hasFiche ? '1' : '.55') + '"'
      + (hasFiche ? ' onclick="renderCoursChapitre(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + c.id + '\')"' : '')
      + '>'
      + '<div style="display:flex;align-items:flex-start;gap:var(--s-3)">'
        + '<div style="min-width:28px;height:28px;background:' + (hasFiche ? m.colorl : 'var(--c-surface-2)') + ';border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:' + (hasFiche ? m.color : 'var(--c-text-4)') + '">' + (i+1) + '</div>'
        + '<div style="flex:1">'
          + '<div style="font-size:13px;font-weight:700;color:' + (hasFiche ? 'var(--c-text)' : 'var(--c-text-3)') + ';line-height:1.4">' + c.titre + '</div>'
          + '<div style="margin-top:5px;display:flex;align-items:center;gap:6px;flex-wrap:wrap">'
            + (hasFiche ? '<span style="background:' + m.colorl + ';color:' + m.color + ';font-size:9px;font-weight:700;padding:2px 6px;border-radius:var(--r-pill)">📚 Fiche</span>' : '')
            + (nbCards > 0 ? '<span style="background:' + m.colorl + ';color:' + m.color + ';font-size:9px;font-weight:700;padding:2px 6px;border-radius:var(--r-pill)">🃏 ' + nbCards + '</span>' : '')
            + (!hasFiche ? '<span style="background:var(--c-surface-2);color:var(--c-text-4);font-size:9px;padding:2px 6px;border-radius:var(--r-pill)">Bientôt disponible</span>' : '')
            + badge
          + '</div>'
          + miniBar
        + '</div>'
        + (hasFiche ? '<span style="color:var(--c-text-4);font-size:18px">›</span>' : '')
      + '</div></div>';
  });

  html += '</div><div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

/* ─── VUE CHAPITRE (FICHE RÉSUMÉE) ──────────────────────────────── */
function renderCoursChapitre(fId, aId, mId, cId) {
  _coursState.fId = fId; _coursState.aId = aId; _coursState.mId = mId; _coursState.cId = cId;
  var f = _coursGetFormation(fId);
  var m = _coursGetMatiere(fId, aId, mId);
  var c = _coursGetChapitre(fId, aId, mId, cId);
  if (!c || !c.fiche) return;

  var fi = c.fiche;
  var html = _coursBreadcrumb([
    { label: 'Cours', fn: 'renderCours()' },
    { label: f.sigle, fn: 'renderCoursFormation(\'' + fId + '\')' },
    { label: m.name, fn: 'renderCoursMatiere(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\')' },
    { label: 'Chapitre' },
  ]);

  html += '<div style="background:' + m.color + ';padding:16px var(--s-4) 20px">'
    + '<div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">' + m.name + '</div>'
    + '<div style="font-size:17px;font-weight:800;color:#fff;line-height:1.4">' + c.titre + '</div>'
    + '</div>';

  /* Badge progression si déjà fait */
  var chapProg = _getChapProgress(fId, aId, mId, cId);
  if (chapProg) {
    var best = chapProg.best || chapProg.pct;
    var pBg = best >= 80 ? '#EAF8F0' : best >= 50 ? '#FDF0D8' : '#FDECEA';
    var pColor = best >= 80 ? '#166038' : best >= 50 ? '#886000' : '#A82018';
    var pEmoji = best >= 80 ? '✅' : best >= 50 ? '💪' : '📖';
    var pMsg = best >= 80 ? 'Chapitre maîtrisé' : best >= 50 ? 'En bonne progression' : 'À retravailler';
    var pDate = new Date(chapProg.date).toLocaleDateString('fr-FR');
    html += '<div style="margin:var(--s-3) var(--s-4) 0;background:' + pBg + ';border:1px solid ' + pColor + ';border-radius:var(--r-md);padding:10px 14px;display:flex;align-items:center;gap:10px">'
      + '<div style="font-size:22px">' + pEmoji + '</div>'
      + '<div style="flex:1">'
        + '<div style="font-size:12px;font-weight:800;color:' + pColor + '">' + pMsg + ' — ' + best + '%</div>'
        + '<div style="font-size:10px;color:' + pColor + ';opacity:.75">Meilleur score · ' + chapProg.ok + '/' + chapProg.total + ' cartes · ' + pDate + '</div>'
        + '<div style="margin-top:5px;height:4px;background:rgba(0,0,0,.1);border-radius:2px;overflow:hidden">'
          + '<div style="height:100%;width:' + best + '%;background:' + pColor + ';border-radius:2px"></div>'
        + '</div>'
      + '</div>'
    + '</div>';
  }

  /* Introduction */
  html += '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3)">'
    + '<div style="font-size:12px;color:var(--c-text-3);line-height:1.7;font-style:italic">' + fi.intro + '</div>'
    + '</div></div>';

  /* Sections explicatives */
  if (fi.sections && fi.sections.length) {
    fi.sections.forEach(function(sec) {
      html += '<div class="section-header" style="padding-top:var(--s-3)">📖 ' + sec.titre + '</div>'
        + '<div style="padding:0 var(--s-4)">'
        + '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3)">'
        + _renderSectionTexte(sec.texte)
        + '</div></div>';
    });
  }

  /* Points clés */
  html += '<div class="section-header" style="padding-top:var(--s-3)">📌 ' + (fi.sections && fi.sections.length ? 'Résumé' : 'Points clés') + '</div>'
    + '<div style="padding:0 var(--s-4)">'
    + '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3)">'
    + '<ul style="margin:0;padding:0 0 0 var(--s-3);list-style:none">';
  fi.points.forEach(function(p) {
    html += '<li style="font-size:12px;color:var(--c-text);line-height:1.7;margin-bottom:6px;padding-left:4px">' + p + '</li>';
  });
  html += '</ul></div></div>';

  /* Formules */
  if (fi.formules && fi.formules.length) {
    html += '<div class="section-header" style="padding-top:var(--s-3)">📐 Formules clés</div>'
      + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:6px">';
    fi.formules.forEach(function(form) {
      html += '<div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 var(--r-sm) var(--r-sm) 0;padding:8px 12px;font-family:\'Courier New\',monospace;font-size:12px;color:var(--c-primary);font-weight:600">' + form + '</div>';
    });
    html += '</div>';
  }

  /* Schéma illustratif */
  if (fi.schema) {
    html += '<div class="section-header" style="padding-top:var(--s-3)">📊 Schéma</div>'
      + '<div style="padding:0 var(--s-4)">'
      + '<div style="border:1px solid var(--c-border);border-radius:var(--r-md);overflow:hidden;background:var(--c-surface)">'
      + fi.schema
      + '</div></div>';
  }

  /* À retenir */
  html += '<div style="padding:var(--s-3) var(--s-4)">'
    + '<div style="background:var(--c-ok-l,#EAF8F0);border:1.5px solid var(--c-ok,#166038);border-radius:var(--r-md);padding:var(--s-3)">'
    + '<div style="font-size:10px;font-weight:800;color:var(--c-ok,#166038);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px">✅ À retenir</div>'
    + '<div style="font-size:12px;color:var(--c-text);font-weight:600;line-height:1.6">' + fi.retenir + '</div>'
    + '</div></div>';

  /* Bouton fiche PDF */
  html += _coursFicheDownloadBtn(fId, aId, mId, cId);

  /* Bouton flashcards */
  if (c.flashcards && c.flashcards.length) {
    var _fa = (typeof _coursFlashAccess === 'function') ? _coursFlashAccess() : 'none';
    var flashLabel, flashSub, flashBtnStyle;
    if (_fa === 'unlimited') {
      flashLabel = '🃏 Démarrer les flashcards (' + c.flashcards.length + ')';
      flashSub = '';
      flashBtnStyle = 'background:' + m.color + ';color:#fff;';
    } else if (_fa === 'limited') {
      var rem = (typeof _flashWeekRemaining === 'function') ? _flashWeekRemaining() : FLASH_PRO_WEEKLY_LIMIT;
      flashLabel = '🃏 Démarrer les flashcards (' + c.flashcards.length + ')';
      flashSub = '<div style="text-align:center;font-size:11px;color:var(--c-text-4);margin-top:6px">⚡ ' + rem + ' session' + (rem > 1 ? 's' : '') + ' restante' + (rem > 1 ? 's' : '') + ' cette semaine · Illimité avec Établissement</div>';
      flashBtnStyle = rem > 0 ? 'background:' + m.color + ';color:#fff;' : 'background:var(--c-surface-2);color:var(--c-text-3);border:1.5px solid var(--c-border);';
    } else {
      flashLabel = '🔒 Flashcards — Plan Pro requis';
      flashSub = '<div style="text-align:center;font-size:11px;color:var(--c-text-4);margin-top:6px">Les fiches de cours sont accessibles gratuitement</div>';
      flashBtnStyle = 'background:var(--c-surface-2);color:var(--c-text-3);border:1.5px solid var(--c-border);';
    }
    html += '<div style="padding:0 var(--s-4) var(--s-4)">'
      + '<button onclick="startFlashcards(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\')" '
      + 'style="width:100%;padding:14px;' + flashBtnStyle + 'border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">'
      + flashLabel + '</button>'
      + flashSub
      + '</div>';
  }

  /* Bouton exercices */
  if (c.exercices && c.exercices.length) {
    html += '<div style="padding:0 var(--s-4) var(--s-3)">'
      + '<button onclick="startExercices(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\')" '
      + 'style="width:100%;padding:14px;background:var(--c-surface);color:' + m.color + ';border:2px solid ' + m.color + ';border-radius:var(--r-md);font-family:var(--f-body);font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">'
      + '📝 Exercices BTS (' + c.exercices.length + ')</button>'
      + '</div>';
  }

  html += '<div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

/* ═══════════════════════════════════════════════════
   FICHES DE RÉVISION TÉLÉCHARGEABLES (PDF)
   Accès : Pro / Étab / Admin
═══════════════════════════════════════════════════ */
function _coursFicheAccess() {
  var p = _coursUserPlan();
  return (p === 'pro' || p === 'etab' || p === 'admin');
}

function _coursFicheDownloadBtn(fId, aId, mId, cId) {
  var has = _coursFicheAccess();
  return '<div style="padding:0 var(--s-4) var(--s-3)">'
    + '<button onclick="' + (has ? '_downloadFichePDF(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\')' : 'authToast(\'Fiches PDF réservées aux plans Pro, Établissement et Admin\')') + '" '
    + 'style="width:100%;padding:13px;' + (has ? 'background:var(--c-surface);color:var(--c-primary);border:1.5px solid var(--c-primary)' : 'background:var(--c-surface-2);color:var(--c-text-3);border:1.5px solid var(--c-border)') + ';border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">'
    + (has ? '📥 Télécharger la fiche de révision (PDF)' : '🔒 Fiche PDF — Plan Pro requis')
    + '</button></div>';
}

function _coursMatiereDownloadBtn(fId, aId, mId) {
  var has = _coursFicheAccess();
  return '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<button onclick="' + (has ? '_downloadMatierePDF(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\')' : 'authToast(\'Fiches PDF réservées aux plans Pro, Établissement et Admin\')') + '" '
    + 'style="width:100%;padding:13px;' + (has ? 'background:rgba(255,255,255,.15);color:#fff;border:1.5px solid rgba(255,255,255,.4)' : 'background:rgba(255,255,255,.1);color:rgba(255,255,255,.6);border:1.5px solid rgba(255,255,255,.25)') + ';border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">'
    + (has ? '📥 Télécharger ce thème (PDF)' : '🔒 Fiche thème PDF — Plan Pro requis')
    + '</button></div>';
}

function _coursFormationDownloadBtn(fId) {
  var has = _coursFicheAccess();
  return '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<button onclick="' + (has ? '_downloadFormationPDF(\'' + fId + '\')' : 'authToast(\'Fiches PDF réservées aux plans Pro, Établissement et Admin\')') + '" '
    + 'style="width:100%;padding:13px;' + (has ? 'background:rgba(255,255,255,.15);color:#fff;border:1.5px solid rgba(255,255,255,.4)' : 'background:rgba(255,255,255,.1);color:rgba(255,255,255,.6);border:1.5px solid rgba(255,255,255,.25)') + ';border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">'
    + (has ? '📦 Télécharger toute la formation (PDF)' : '🔒 Pack complet PDF — Plan Pro requis')
    + '</button></div>';
}

/* ─── Assainissement du texte pour jsPDF (polices standard = WinAnsi/Latin-1) ───
   Les lettres grecques, symboles math et emojis ne sont pas supportés par les
   polices standard de jsPDF : ils cassent le calcul de largeur de texte et
   provoquent un chevauchement en cascade sur tout le reste de la ligne.
   On les remplace par un équivalent texte lisible, et on retire tout le reste. */
var _PDF_SYMBOL_MAP = {
  'Δ':'D', 'Π':'Pi', 'Σ':'somme', 'α':'alpha', 'γ':'gamma', 'η':'eta', 'λ':'lambda',
  'μ':'mu', 'ν':'nu', 'ξ':'xi', 'π':'pi', 'ρ':'rho', 'σ':'sigma', 'ω':'omega',
  '∂':'d', '∇':'grad', '√':'racine', '∝':'prop. a', '≠':'!=',
  '≤':'<=', '≥':'>=', '←':'<-', '→':'->', '↓':'(bas)', '↑':'(haut)',
  '─':'-', '═':'=',
  '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-',
  '₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9'
};
/* Caractères hors Latin-1 mais quand même supportés par l'encodage WinAnsi
   des polices standard jsPDF (tiret cadratin, puce, points de suspension...) */
var _PDF_WINANSI_EXTRA = {
  0x2013:1, 0x2014:1, 0x2018:1, 0x2019:1, 0x201C:1, 0x201D:1,
  0x2022:1, 0x2026:1, 0x2030:1, 0x2039:1, 0x203A:1, 0x20AC:1, 0x2122:1
};
function _pdfSanitize(str) {
  if (!str) return '';
  var out = '';
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    var cp = str.codePointAt(i);
    if (_PDF_SYMBOL_MAP[ch] !== undefined) { out += ' ' + _PDF_SYMBOL_MAP[ch] + ' '; continue; }
    if (cp <= 0xFF || _PDF_WINANSI_EXTRA[cp]) { out += ch; continue; }
    /* caractère hors Latin-1 (emoji, pictogramme, drapeau...) : on l'ignore */
    if (cp > 0xFFFF) i++; /* sauter le 2e élément d'une paire surrogate */
  }
  out = out.replace(/^[\s:.\-–—]+/, '').replace(/\s{2,}/g, ' ').trim();
  return out;
}

/* ─── Découpage du texte en segments stylés (surlignage) ───
   - MOTS EN MAJUSCULES (déjà utilisés dans le contenu pour l'emphase) → orange
   - Valeurs numériques + unité (ex: "9 810 Pa", "1 000 kg/m³") → bleu        */
function _fichePdfSegments(rawText) {
  var text = _pdfSanitize(rawText);
  var NUM_RE = /\d[\d\s,.  ]*\s?(?:kg\/m³|m³\/[hs]|L\/s|Pa\.?s|m²\/s|kPa|MPa|GPa|N\/m³|m\s?CE|cm\s?CE|°C|mm|cm|km|m\/s²?|m³|N\b|Pa\b|bar|%)/g;
  var segs = [], lastIdx = 0, m;
  while ((m = NUM_RE.exec(text))) {
    if (m.index > lastIdx) segs.push({ t: text.slice(lastIdx, m.index), style: 'normal' });
    segs.push({ t: m[0], style: 'num' });
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < text.length) segs.push({ t: text.slice(lastIdx), style: 'normal' });

  var CAPS_RE = /\b[A-ZÀÂÉÈÊËÎÏÔŒÙÛÜŸÇ]{3,}\b/g;
  var finalSegs = [];
  segs.forEach(function(s) {
    if (s.style !== 'normal') { finalSegs.push(s); return; }
    var idx = 0, cm;
    CAPS_RE.lastIndex = 0;
    while ((cm = CAPS_RE.exec(s.t))) {
      if (cm.index > idx) finalSegs.push({ t: s.t.slice(idx, cm.index), style: 'normal' });
      finalSegs.push({ t: cm[0], style: 'caps' });
      idx = cm.index + cm[0].length;
    }
    if (idx < s.t.length) finalSegs.push({ t: s.t.slice(idx), style: 'normal' });
  });
  return finalSegs;
}

/* ─── Rendu d'un texte multi-style avec retour à la ligne automatique ───
   Renvoie le y final (bas du bloc) ── */
function _drawRichText(doc, text, x0, y0, maxWidth, lineHeight, colors) {
  var segments = _fichePdfSegments(text);
  var x = x0, y = y0;
  doc.setFontSize(9.3);
  doc.setFont('helvetica', 'normal');
  var spaceW = doc.getTextWidth(' ');

  segments.forEach(function(seg) {
    var tokens = seg.t.split(/(\s+)/).filter(function(w){ return w.length; });
    tokens.forEach(function(w) {
      if (/^\s+$/.test(w)) { x += spaceW; return; }
      var bold = seg.style !== 'normal';
      doc.setFont('helvetica', bold ? 'bold' : 'normal');
      var ww = doc.getTextWidth(w);
      if (x + ww > x0 + maxWidth) { x = x0; y += lineHeight; }
      if (seg.style === 'num') {
        doc.setFillColor.apply(doc, colors.numBg);
        doc.rect(x - 0.4, y - 3.1, ww + 0.8, 4, 'F');
        doc.setTextColor.apply(doc, colors.num);
      } else if (seg.style === 'caps') {
        doc.setFillColor.apply(doc, colors.capsBg);
        doc.rect(x - 0.4, y - 3.1, ww + 0.8, 4, 'F');
        doc.setTextColor.apply(doc, colors.caps);
      } else {
        doc.setTextColor.apply(doc, colors.normal);
      }
      doc.text(w, x, y);
      x += ww + spaceW;
    });
  });
  doc.setFont('helvetica', 'normal');
  return y;
}

/* ─── Mesure le nombre de lignes qu'occupera un texte riche (pour la pagination) ─── */
function _richTextLineCount(doc, text, maxWidth) {
  var segments = _fichePdfSegments(text);
  doc.setFontSize(9.3);
  var x = 0, lines = 1;
  var spaceW = doc.getTextWidth(' ');
  segments.forEach(function(seg) {
    var tokens = seg.t.split(/(\s+)/).filter(function(w){ return w.length; });
    tokens.forEach(function(w) {
      if (/^\s+$/.test(w)) { x += spaceW; return; }
      doc.setFont('helvetica', seg.style !== 'normal' ? 'bold' : 'normal');
      var ww = doc.getTextWidth(w);
      if (x + ww > maxWidth) { x = 0; lines++; }
      x += ww + spaceW;
    });
  });
  doc.setFont('helvetica', 'normal');
  return lines;
}

var _FICHE_COLORS = {
  normal: [30, 38, 34], num: [12, 90, 150], numBg: [222, 238, 250],
  caps: [180, 70, 10], capsBg: [253, 232, 210]
};

/* ─── Construit le contenu PDF d'UN chapitre, à partir de y, retourne y final ───
   doc, m (matière), c (chapitre), y, W, MARGIN, cW, checkPage(needed) ── */
function _renderFichePdfBlock(doc, m, c, y, MARGIN, cW, checkPage, addPage) {
  var fi = c.fiche;
  var col = _hexToRgb(m.color);
  var colL = _hexToRgb(m.colorl);

  /* Bandeau titre chapitre */
  checkPage(14);
  doc.setFillColor.apply(doc, col);
  doc.roundedRect(MARGIN, y, cW, 11, 1.5, 1.5, 'F');
  doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
  doc.setTextColor(255,255,255);
  doc.text(_pdfSanitize(c.titre), MARGIN + 4, y + 7.3);
  y += 16;

  /* Intro */
  var introLines = doc.splitTextToSize(_pdfSanitize(fi.intro), cW - 8);
  checkPage(introLines.length * 4.6 + 8);
  doc.setFillColor(246, 248, 247);
  doc.roundedRect(MARGIN, y, cW, introLines.length * 4.6 + 6, 1.5, 1.5, 'F');
  doc.setFont('helvetica', 'italic'); doc.setFontSize(9);
  doc.setTextColor(80, 92, 86);
  introLines.forEach(function(l, i) { doc.text(l, MARGIN + 4, y + 5 + i * 4.6); });
  y += introLines.length * 4.6 + 10;

  /* Points clés */
  checkPage(8);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5);
  doc.setTextColor.apply(doc, col);
  doc.text('POINTS CLÉS', MARGIN, y);
  y += 5;

  fi.points.forEach(function(p) {
    var nLines = _richTextLineCount(doc, p, cW - 9);
    var blockH = nLines * 4.6 + 4;
    checkPage(blockH + 2);
    doc.setFillColor.apply(doc, colL);
    doc.roundedRect(MARGIN, y, cW, blockH, 1.2, 1.2, 'F');
    _drawRichText(doc, p, MARGIN + 4, y + 4.6, cW - 9, 4.6, _FICHE_COLORS);
    y += blockH + 2.5;
  });
  y += 3;

  /* Formules */
  if (fi.formules && fi.formules.length) {
    checkPage(8);
    doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5);
    doc.setTextColor(12, 90, 150);
    doc.text('FORMULES CLÉS', MARGIN, y);
    y += 5;
    fi.formules.forEach(function(form) {
      var formTxt = _pdfSanitize(form);
      var formLines = doc.splitTextToSize(formTxt, cW - 8);
      var fH = formLines.length * 4.4 + 3;
      checkPage(fH + 1.5);
      doc.setFillColor(222, 238, 250);
      doc.roundedRect(MARGIN, y, cW, fH, 1.2, 1.2, 'F');
      doc.setFont('courier', 'bold'); doc.setFontSize(9);
      doc.setTextColor(12, 70, 120);
      formLines.forEach(function(l, i) { doc.text(l, MARGIN + 4, y + 4.6 + i * 4.4); });
      y += fH + 1.5;
    });
    y += 2;
  }

  /* À retenir */
  var retLines = doc.splitTextToSize(_pdfSanitize(fi.retenir), cW - 10);
  checkPage(retLines.length * 4.6 + 10);
  doc.setFillColor(230, 248, 238);
  doc.setDrawColor(22, 96, 56);
  doc.setLineWidth(0.4);
  doc.roundedRect(MARGIN, y, cW, retLines.length * 4.6 + 9, 1.5, 1.5, 'FD');
  doc.setFont('helvetica', 'bold'); doc.setFontSize(8.3);
  doc.setTextColor(22, 96, 56);
  doc.text('À RETENIR', MARGIN + 4, y + 5);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(9.2);
  doc.setTextColor(20, 50, 32);
  retLines.forEach(function(l, i) { doc.text(l, MARGIN + 4, y + 10 + i * 4.6); });
  y += retLines.length * 4.6 + 13;

  return y;
}

function _hexToRgb(hex) {
  hex = (hex || '#0A7460').replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(function(c){ return c + c; }).join('');
  var num = parseInt(hex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function _pdfFicheHeader(doc, W, MARGIN, color, title, subtitle) {
  var col = _hexToRgb(color);
  doc.setFillColor.apply(doc, col);
  doc.rect(0, 0, W, 24, 'F');
  doc.setFont('helvetica', 'bold'); doc.setFontSize(15);
  doc.setTextColor(255,255,255);
  doc.text('HydroCalc — Fiche de révision', MARGIN, 11);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
  doc.setTextColor(255,255,255);
  doc.text(_pdfSanitize(title), MARGIN, 18);
  if (subtitle) {
    doc.setFontSize(7.5);
    doc.text(_pdfSanitize(subtitle), W - MARGIN, 18, { align: 'right' });
  }
}

function _downloadFichePDF(fId, aId, mId, cId) {
  if (!_coursFicheAccess()) { authToast('Fiches PDF réservées aux plans Pro, Établissement et Admin'); return; }
  if (!window.jspdf) { authToast('Bibliothèque PDF non chargée — vérifiez votre connexion.'); return; }
  var f = _coursGetFormation(fId), m = _coursGetMatiere(fId, aId, mId), c = _coursGetChapitre(fId, aId, mId, cId);
  if (!c || !c.fiche) return;

  var jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  var W = 210, MARGIN = 14, cW = W - MARGIN * 2, y = 32;

  function checkPage(needed) { if (y + needed > 280) { doc.addPage(); y = 14; } }

  _pdfFicheHeader(doc, W, MARGIN, m.color, m.name, f.sigle);
  y = _renderFichePdfBlock(doc, m, c, y, MARGIN, cW, checkPage);

  doc.setFont('helvetica', 'normal'); doc.setFontSize(7);
  doc.setTextColor(150, 160, 155);
  doc.text('Généré avec HydroCalc · hydrocalc.fr', MARGIN, 292);

  doc.save('Fiche_' + c.titre.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 50) + '.pdf');
  if (typeof authToast === 'function') authToast('Fiche PDF téléchargée ✓');
}

function _downloadFormationPDF(fId) {
  if (!_coursFicheAccess()) { authToast('Fiches PDF réservées aux plans Pro, Établissement et Admin'); return; }
  if (!window.jspdf) { authToast('Bibliothèque PDF non chargée — vérifiez votre connexion.'); return; }
  var f = _coursGetFormation(fId);
  if (!f) return;

  var jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  var W = 210, MARGIN = 14, cW = W - MARGIN * 2, y = 32;
  var fCol = _hexToRgb(f.color);

  function checkPage(needed) { if (y + needed > 280) { doc.addPage(); y = 14; } }

  /* Couverture */
  doc.setFillColor.apply(doc, fCol);
  doc.rect(0, 0, W, 297, 'F');
  doc.setFont('helvetica', 'bold'); doc.setFontSize(26);
  doc.setTextColor(255,255,255);
  doc.text('HydroCalc', W/2, 110, { align: 'center' });
  doc.setFontSize(13);
  doc.text('Pack de fiches de révision', W/2, 122, { align: 'center' });
  doc.setFont('helvetica', 'normal'); doc.setFontSize(16);
  doc.text(_pdfSanitize(f.name), W/2, 145, { align: 'center', maxWidth: cW });
  doc.setFontSize(10);
  doc.text(_pdfSanitize(f.organisme + ' - ' + f.niveau), W/2, 155, { align: 'center' });
  var totalChap = 0;
  f.annees.forEach(function(a){ a.matieres.forEach(function(m){ totalChap += m.chapitres.filter(function(c){return c.fiche;}).length; }); });
  doc.setFontSize(9);
  doc.text(totalChap + ' fiches de révision', W/2, 270, { align: 'center' });

  doc.addPage(); y = 14;

  f.annees.forEach(function(a) {
    a.matieres.forEach(function(m) {
      m.chapitres.forEach(function(c) {
        if (!c.fiche) return;
        _pdfFicheHeader(doc, W, MARGIN, m.color, m.name, f.sigle + ' · ' + a.name);
        y = 32;
        y = _renderFichePdfBlock(doc, m, c, y, MARGIN, cW, checkPage);
        doc.addPage(); y = 14;
      });
    });
  });

  /* Retirer la dernière page vide ajoutée en trop */
  if (doc.internal.getNumberOfPages() > 1) {
    doc.deletePage(doc.internal.getNumberOfPages());
  }

  doc.save('HydroCalc_' + f.sigle.replace(/[^a-zA-Z0-9]/g, '_') + '_fiches_revision.pdf');
  if (typeof authToast === 'function') authToast('Pack PDF téléchargé (' + totalChap + ' fiches) ✓');
}

function _downloadMatierePDF(fId, aId, mId) {
  if (!_coursFicheAccess()) { authToast('Fiches PDF réservées aux plans Pro, Établissement et Admin'); return; }
  if (!window.jspdf) { authToast('Bibliothèque PDF non chargée — vérifiez votre connexion.'); return; }
  var f = _coursGetFormation(fId);
  var a = _coursGetAnnee(fId, aId);
  var m = _coursGetMatiere(fId, aId, mId);
  if (!m) return;
  var chaps = m.chapitres.filter(function(c){ return c.fiche; });
  if (!chaps.length) { authToast('Aucune fiche disponible pour ce thème.'); return; }

  var jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  var W = 210, MARGIN = 14, cW = W - MARGIN * 2, y = 32;

  function checkPage(needed) { if (y + needed > 280) { doc.addPage(); y = 14; } }

  chaps.forEach(function(c, idx) {
    _pdfFicheHeader(doc, W, MARGIN, m.color, m.name, f.sigle + ' · ' + a.name);
    y = 32;
    y = _renderFichePdfBlock(doc, m, c, y, MARGIN, cW, checkPage);
    if (idx < chaps.length - 1) { doc.addPage(); y = 14; }
  });

  doc.save('HydroCalc_' + m.name.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 50) + '_fiches.pdf');
  if (typeof authToast === 'function') authToast('Fiches du thème téléchargées (' + chaps.length + ') ✓');
}

/* ─── FLASHCARDS ─────────────────────────────────────────────────── */
var FLASH_PRO_WEEKLY_LIMIT = 7;

function _coursUserPlan() {
  if (typeof AUTH !== 'undefined' && AUTH.user) return AUTH.user.plan || 'free';
  return 'guest';
}

function _coursFlashAccess() {
  var p = _coursUserPlan();
  if (p === 'etab' || p === 'admin') return 'unlimited';
  if (p === 'pro')                   return 'limited';
  return 'none';
}

/* ── Compteur hebdomadaire Pro ── */
function _flashWeekKey() {
  var u = (typeof AUTH !== 'undefined' && AUTH.user) ? AUTH.user.email : 'guest';
  var now = new Date();
  var startOfYear = new Date(now.getFullYear(), 0, 1);
  var week = Math.floor((now - startOfYear) / 604800000);
  return 'hc_flash_week_' + u + '_' + now.getFullYear() + '_' + week;
}

function _flashWeekCount() {
  return parseInt(localStorage.getItem(_flashWeekKey()) || '0', 10);
}

function _flashWeekIncrement() {
  var key = _flashWeekKey();
  localStorage.setItem(key, (_flashWeekCount() + 1).toString());
}

function _flashWeekRemaining() {
  return Math.max(0, FLASH_PRO_WEEKLY_LIMIT - _flashWeekCount());
}

function startFlashcards(fId, aId, mId, cId) {
  var access = _coursFlashAccess();
  var m = _coursGetMatiere(fId, aId, mId);
  var c = _coursGetChapitre(fId, aId, mId, cId);

  if (access === 'none') {
    _coursState.fId = fId; _coursState.aId = aId; _coursState.mId = mId; _coursState.cId = cId;
    _renderFlashcardPaywall(m, (c && c.flashcards) ? c.flashcards.length : 0, 'none');
    return;
  }

  if (access === 'limited' && _flashWeekRemaining() === 0) {
    _coursState.fId = fId; _coursState.aId = aId; _coursState.mId = mId; _coursState.cId = cId;
    _renderFlashcardPaywall(m, (c && c.flashcards) ? c.flashcards.length : 0, 'weekly');
    return;
  }

  if (access === 'limited') _flashWeekIncrement();

  _coursState.fId = fId; _coursState.aId = aId; _coursState.mId = mId; _coursState.cId = cId;
  _coursState.flashIdx = 0;
  _coursState.flashRevealed = false;
  _coursState.flashScores = [];
  renderFlashcard();
}

function renderFlashcard() {
  var c = _coursGetChapitre(_coursState.fId, _coursState.aId, _coursState.mId, _coursState.cId);
  var m = _coursGetMatiere(_coursState.fId, _coursState.aId, _coursState.mId);
  if (!c || !c.flashcards) return;

  var cards = c.flashcards;
  var idx = _coursState.flashIdx;
  var revealed = _coursState.flashRevealed;

  if (idx >= cards.length) { renderFlashcardScore(); return; }


  var card = cards[idx];
  var prog = Math.round((idx / cards.length) * 100);

  var html = '<div style="min-height:100vh;background:var(--c-bg);display:flex;flex-direction:column">';

  /* Barre de progression */
  html += '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s-2)">'
      + '<button onclick="renderCoursChapitre(\'' + _coursState.fId + '\',\'' + _coursState.aId + '\',\'' + _coursState.mId + '\',\'' + _coursState.cId + '\')" '
        + 'style="background:none;border:none;font-family:var(--f-body);font-size:12px;color:var(--c-text-3);cursor:pointer;padding:0">← Fiche</button>'
      + '<div style="font-size:11px;font-weight:700;color:var(--c-text-4)">' + (idx+1) + ' / ' + cards.length + '</div>'
    + '</div>'
    + '<div style="height:4px;background:var(--c-border);border-radius:2px;overflow:hidden">'
      + '<div style="height:100%;width:' + prog + '%;background:' + m.color + ';border-radius:2px;transition:width .3s"></div>'
    + '</div></div>';

  /* Carte */
  html += '<div style="flex:1;padding:var(--s-4);display:flex;flex-direction:column;gap:var(--s-3)">';

  /* Recto — question */
  html += '<div style="background:var(--c-surface);border:2px solid ' + m.color + ';border-radius:var(--r-lg);padding:var(--s-4);text-align:center;min-height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center">'
    + '<div style="font-size:10px;font-weight:800;color:' + m.color + ';text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">❓ Question</div>'
    + '<div style="font-size:15px;font-weight:700;color:var(--c-text);line-height:1.5">' + card.q + '</div>'
    + '</div>';

  if (!revealed) {
    /* Bouton retourner */
    html += '<button onclick="_coursReveal()" '
      + 'style="width:100%;padding:14px;background:' + m.color + ';color:#fff;border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:14px;font-weight:700;cursor:pointer">'
      + '👁 Voir la réponse</button>';
  } else {
    /* Verso — réponse */
    html += '<div style="background:' + m.colorl + ';border:2px solid ' + m.color + ';border-radius:var(--r-lg);padding:var(--s-4)">'
      + '<div style="font-size:10px;font-weight:800;color:' + m.color + ';text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">✅ Réponse</div>'
      + '<div style="font-size:14px;font-weight:700;color:var(--c-text);line-height:1.6;margin-bottom:var(--s-2)">' + card.r + '</div>'
      + (card.expl ? '<div style="font-size:11px;color:var(--c-text-3);line-height:1.6;padding-top:var(--s-2);border-top:1px solid ' + m.color + '30">💡 ' + card.expl + '</div>' : '')
      + '</div>';
    /* Boutons je savais / à revoir */
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)">'
      + '<button onclick="_coursFlashNext(false)" '
        + 'style="padding:12px;background:var(--c-danger-l,#FDECEA);color:var(--c-danger,#A82018);border:1.5px solid var(--c-danger,#A82018);border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer">'
        + '🔁 À revoir</button>'
      + '<button onclick="_coursFlashNext(true)" '
        + 'style="padding:12px;background:var(--c-ok-l,#EAF8F0);color:var(--c-ok,#166038);border:1.5px solid var(--c-ok,#166038);border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer">'
        + '✅ Je savais</button>'
      + '</div>';
  }

  html += '</div></div>';
  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

function _coursReveal() {
  _coursState.flashRevealed = true;
  renderFlashcard();
}

function _coursFlashNext(knew) {
  _coursState.flashScores.push(knew);
  _coursState.flashIdx++;
  _coursState.flashRevealed = false;
  renderFlashcard();
}

function renderFlashcardScore() {
  var scores = _coursState.flashScores;
  var total = scores.length;
  var ok = scores.filter(function(s){ return s; }).length;
  var pct = total ? Math.round(ok / total * 100) : 0;
  var m = _coursGetMatiere(_coursState.fId, _coursState.aId, _coursState.mId);
  var c = _coursGetChapitre(_coursState.fId, _coursState.aId, _coursState.mId, _coursState.cId);

  /* ── Sauvegarder la progression ── */
  _saveFlashProgress(_coursState.fId, _coursState.aId, _coursState.mId, _coursState.cId, pct, ok, total);

  var emoji = pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '📖';
  var msg   = pct >= 80 ? 'Excellent ! Maîtrise solide du chapitre.' : pct >= 50 ? 'Bien ! Quelques points à retravailler.' : 'Continue à réviser, tu vas y arriver !';
  var bg    = pct >= 80 ? '#166038' : pct >= 50 ? '#886000' : '#A82018';

  var html = '<div style="padding:var(--s-4);text-align:center">'
    + '<div style="font-size:56px;margin-bottom:var(--s-3)">' + emoji + '</div>'
    + '<div style="font-size:22px;font-weight:800;color:' + bg + ';margin-bottom:var(--s-2)">' + pct + '%</div>'
    + '<div style="font-size:14px;font-weight:700;color:var(--c-text);margin-bottom:4px">' + ok + ' / ' + total + ' cartes réussies</div>'
    + '<div style="font-size:12px;color:var(--c-text-3);margin-bottom:var(--s-4)">' + msg + '</div>'
    + '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
      + '<div style="font-size:11px;font-weight:700;color:var(--c-text);margin-bottom:4px">' + c.titre + '</div>'
      + '<div style="height:10px;background:var(--c-border);border-radius:5px;overflow:hidden">'
        + '<div style="height:100%;width:' + pct + '%;background:' + bg + ';border-radius:5px;transition:width .5s"></div>'
      + '</div>'
    + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)">'
      + '<button onclick="startFlashcards(\'' + _coursState.fId + '\',\'' + _coursState.aId + '\',\'' + _coursState.mId + '\',\'' + _coursState.cId + '\')" '
        + 'style="padding:12px;background:' + m.color + ';color:#fff;border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer">🔄 Recommencer</button>'
      + '<button onclick="renderCoursChapitre(\'' + _coursState.fId + '\',\'' + _coursState.aId + '\',\'' + _coursState.mId + '\',\'' + _coursState.cId + '\')" '
        + 'style="padding:12px;background:' + m.colorl + ';color:' + m.color + ';border:1.5px solid ' + m.color + ';border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer">📚 Revoir la fiche</button>'
    + '</div></div>'
    + '<div class="pb-nav"></div>';

  document.getElementById('main-content').innerHTML = html;
}

function _renderFlashcardPaywall(m, totalCards, reason) {
  var isNone    = reason === 'none';
  var isWeekly  = reason === 'weekly';

  var title   = isNone ? 'Accès non disponible' : 'Quota hebdomadaire atteint';
  var emoji   = isNone ? '🔒' : '📅';
  var message = isNone
    ? 'Les flashcards sont réservées aux abonnés <strong>Pro</strong> et <strong>Établissement</strong>.<br>Le plan Gratuit donne accès aux fiches de cours uniquement.'
    : 'Vous avez utilisé vos <strong>' + FLASH_PRO_WEEKLY_LIMIT + ' sessions Pro</strong> cette semaine.<br>Revenez lundi ou passez à la licence Établissement pour un accès illimité.';

  var html = '<div style="min-height:100vh;background:var(--c-bg);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;text-align:center">'
    + '<div style="font-size:48px;margin-bottom:16px">' + emoji + '</div>'
    + '<div style="font-size:18px;font-weight:800;color:var(--c-text);margin-bottom:8px">' + title + '</div>'
    + '<div style="font-size:13px;color:var(--c-text-3);line-height:1.7;margin-bottom:24px">' + message + '</div>'
    + '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:14px;overflow:hidden;width:100%;max-width:300px;margin-bottom:24px">';

  var plans = isNone
    ? [
        { ico:'⚡', name:'Pro', price:'5,90 €/mois', features:['7 sessions de flashcards / semaine','Calculateurs avancés','Export rapports'], btn:'Passer à Pro', action:'openSidebar()' },
        { ico:'🏛️', name:'Établissement', price:'35 €/mois', features:['Sessions illimitées','Accès tout inclus','Licence professeur'], btn:'Licence Établissement', action:'openSidebar()' },
      ]
    : [
        { ico:'🏛️', name:'Établissement', price:'35 €/mois', features:['Sessions illimitées chaque semaine','Accès tout inclus','Idéal pour les enseignants'], btn:'Passer Établissement', action:'openSidebar()' },
      ];

  plans.forEach(function(p, i) {
    var border = i < plans.length - 1 ? 'border-bottom:1px solid var(--c-border);' : '';
    html += '<div style="padding:14px 16px;' + border + 'text-align:left">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">'
        + '<div style="font-size:14px;font-weight:800;color:var(--c-text)">' + p.ico + ' ' + p.name + '</div>'
        + '<div style="font-size:12px;font-weight:700;color:var(--c-primary)">' + p.price + '</div>'
      + '</div>'
      + p.features.map(function(f){ return '<div style="font-size:11px;color:var(--c-text-3);margin-bottom:3px"><span style="color:var(--c-ok)">✓ </span>' + f + '</div>'; }).join('')
      + '<button onclick="' + p.action + '" style="width:100%;margin-top:10px;padding:9px;background:var(--c-primary);color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:var(--f-body)">' + p.btn + '</button>'
      + '</div>';
  });

  html += '</div>';

  if (isNone && _coursUserPlan() === 'free') {
    html += '<button onclick="if(typeof _showTrialOffer===\'function\')_showTrialOffer()" style="width:100%;max-width:300px;padding:13px;background:linear-gradient(135deg,var(--c-primary),#0d9e7e);color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:800;cursor:pointer;font-family:var(--f-body);margin-bottom:10px">🚀 Essai Pro gratuit — 7 jours</button>';
  }

  html += '<button onclick="renderCoursChapitre(\'' + _coursState.fId + '\',\'' + _coursState.aId + '\',\'' + _coursState.mId + '\',\'' + _coursState.cId + '\')" style="width:100%;max-width:300px;padding:11px;background:none;border:1.5px solid var(--c-border);border-radius:12px;font-size:13px;color:var(--c-text-3);cursor:pointer;font-family:var(--f-body)">← Retour à la fiche</button>'
    + '</div><div class="pb-nav"></div>';

  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

/* ═══════════════════════════════════════════════════
   EXERCICES BTS — Liste et détail
═══════════════════════════════════════════════════ */

function startExercices(fId, aId, mId, cId) {
  _coursState.fId = fId; _coursState.aId = aId; _coursState.mId = mId; _coursState.cId = cId;
  var f = _coursGetFormation(fId);
  var m = _coursGetMatiere(fId, aId, mId);
  var c = _coursGetChapitre(fId, aId, mId, cId);
  if (!c || !c.exercices || !c.exercices.length) return;

  var html = _coursBreadcrumb([
    { label: 'Cours', fn: 'renderCours()' },
    { label: f.sigle, fn: 'renderCoursFormation(\'' + fId + '\')' },
    { label: m.name, fn: 'renderCoursMatiere(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\')' },
    { label: c.titre, fn: 'renderCoursChapitre(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\')' },
    { label: 'Exercices' },
  ]);

  html += '<div style="padding:var(--s-3) var(--s-4) var(--s-2)">'
    + '<div style="font-size:16px;font-weight:800;color:var(--c-text);margin-bottom:2px">📝 Exercices — ' + c.titre + '</div>'
    + '<div style="font-size:12px;color:var(--c-text-3)">Questions type annales BTS · Corrigés détaillés</div>'
    + '</div>';

  var diffColors = { facile: '#166038', moyen: '#7A4F00', difficile: '#8B1A1A' };
  var diffBg    = { facile: '#EAF8F0', moyen: '#FFF8E1', difficile: '#FFF0F0' };

  c.exercices.forEach(function(ex, idx) {
    var dc = diffColors[ex.difficulte] || '#555';
    var db = diffBg[ex.difficulte]    || '#f5f5f5';
    var nq = ex.questions ? ex.questions.length : 0;
    html += '<div style="margin:0 var(--s-4) var(--s-3);background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-md);overflow:hidden">'
      + '<div style="padding:var(--s-3) var(--s-4);cursor:pointer;display:flex;align-items:flex-start;gap:var(--s-3)" onclick="renderExerciceDetail(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\',' + idx + ')">'
        + '<div style="min-width:36px;height:36px;background:' + m.colorl + ';border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:' + m.color + '">' + (idx+1) + '</div>'
        + '<div style="flex:1">'
          + '<div style="font-size:13px;font-weight:700;color:var(--c-text);margin-bottom:4px">' + ex.titre + '</div>'
          + '<div style="font-size:11px;color:var(--c-text-4);margin-bottom:6px">' + ex.source + '</div>'
          + '<div style="display:flex;gap:6px;flex-wrap:wrap">'
            + '<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px;background:' + db + ';color:' + dc + '">' + ex.difficulte.toUpperCase() + '</span>'
            + '<span style="font-size:10px;color:var(--c-text-4);padding:2px 6px;background:var(--c-surface-2);border-radius:20px">' + nq + ' question' + (nq > 1 ? 's' : '') + '</span>'
          + '</div>'
        + '</div>'
        + '<span style="color:' + m.color + ';font-size:18px;align-self:center">›</span>'
      + '</div>'
    + '</div>';
  });

  html += '<div style="padding:0 var(--s-4) var(--s-4)">'
    + '<button onclick="renderCoursChapitre(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\')" '
    + 'style="width:100%;padding:11px;background:none;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-size:13px;color:var(--c-text-3);cursor:pointer;font-family:var(--f-body)">← Retour à la fiche</button>'
    + '</div><div class="pb-nav"></div>';

  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

function renderExerciceDetail(fId, aId, mId, cId, exIdx) {
  var f = _coursGetFormation(fId);
  var m = _coursGetMatiere(fId, aId, mId);
  var c = _coursGetChapitre(fId, aId, mId, cId);
  if (!c || !c.exercices || !c.exercices[exIdx]) return;
  var ex = c.exercices[exIdx];

  var diffColors = { facile: '#166038', moyen: '#7A4F00', difficile: '#8B1A1A' };
  var diffBg    = { facile: '#EAF8F0', moyen: '#FFF8E1', difficile: '#FFF0F0' };
  var dc = diffColors[ex.difficulte] || '#555';
  var db = diffBg[ex.difficulte]    || '#f5f5f5';

  var html = _coursBreadcrumb([
    { label: 'Cours', fn: 'renderCours()' },
    { label: f.sigle, fn: 'renderCoursFormation(\'' + fId + '\')' },
    { label: m.name, fn: 'renderCoursMatiere(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\')' },
    { label: c.titre, fn: 'renderCoursChapitre(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\')' },
    { label: 'Exercices', fn: 'startExercices(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\')' },
    { label: 'Exercice ' + (exIdx+1) },
  ]);

  html += '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">'
      + '<span style="font-size:10px;font-weight:700;padding:3px 10px;border-radius:20px;background:' + db + ';color:' + dc + '">' + ex.difficulte.toUpperCase() + '</span>'
    + '</div>'
    + '<div style="font-size:16px;font-weight:800;color:var(--c-text);margin-bottom:2px">' + ex.titre + '</div>'
    + '<div style="font-size:11px;color:var(--c-text-4);margin-bottom:var(--s-3)">' + ex.source + '</div>'
    + '<div style="background:var(--c-surface-2);border-left:3px solid ' + m.color + ';border-radius:0 var(--r-sm) var(--r-sm) 0;padding:var(--s-3);margin-bottom:var(--s-3)">'
      + '<div style="font-size:10px;font-weight:800;color:' + m.color + ';text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">📋 Énoncé</div>'
      + '<div style="font-size:13px;color:var(--c-text);line-height:1.7">' + ex.enonce + '</div>'
    + '</div>'
    + '</div>';

  if (ex.questions && ex.questions.length) {
    ex.questions.forEach(function(q, qi) {
      var qid = 'exq-' + exIdx + '-' + qi;
      html += '<div style="margin:0 var(--s-4) var(--s-3);background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-md);overflow:hidden">'
        + '<div style="padding:var(--s-3);border-bottom:1px solid var(--c-border)">'
          + '<div style="display:flex;align-items:flex-start;gap:var(--s-2)">'
            + '<div style="min-width:24px;height:24px;background:' + m.color + ';border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff">' + q.num + '</div>'
            + '<div style="font-size:13px;color:var(--c-text);line-height:1.6;font-weight:600">' + q.texte + '</div>'
          + '</div>'
        + '</div>'
        + '<div style="display:flex;gap:0;border-top:1px solid var(--c-border)">'
          + '<button onclick="_exToggle(\'' + qid + '-ind\')" style="flex:1;padding:10px;background:none;border:none;border-right:1px solid var(--c-border);font-family:var(--f-body);font-size:12px;font-weight:700;color:#7A4F00;cursor:pointer">💡 Indice</button>'
          + '<button onclick="_exToggle(\'' + qid + '-rep\')" style="flex:1;padding:10px;background:none;border:none;font-family:var(--f-body);font-size:12px;font-weight:700;color:' + m.color + ';cursor:pointer">✅ Corrigé</button>'
        + '</div>'
        + '<div id="' + qid + '-ind" style="display:none;padding:var(--s-3);background:#FFF8E1;border-top:1px solid #F0D080">'
          + '<div style="font-size:10px;font-weight:800;color:#7A4F00;margin-bottom:4px">💡 INDICE</div>'
          + '<div style="font-size:12px;color:#5A3C00;line-height:1.6">' + q.indice + '</div>'
        + '</div>'
        + '<div id="' + qid + '-rep" style="display:none;padding:var(--s-3);background:#EAF8F0;border-top:1px solid #A8DFC0">'
          + '<div style="font-size:10px;font-weight:800;color:#166038;margin-bottom:8px">✅ CORRIGÉ DÉTAILLÉ</div>'
          + _renderCorrigeSteps(q.reponse)
        + '</div>'
      + '</div>';
    });
  }

  var prevBtn = exIdx > 0
    ? '<button onclick="renderExerciceDetail(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\',' + (exIdx-1) + ')" style="flex:1;padding:11px;background:none;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-size:13px;color:var(--c-text-3);cursor:pointer;font-family:var(--f-body)">← Exercice précédent</button>'
    : '';
  var nextBtn = exIdx < c.exercices.length - 1
    ? '<button onclick="renderExerciceDetail(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\',' + (exIdx+1) + ')" style="flex:1;padding:11px;background:' + m.color + ';border:none;border-radius:var(--r-md);font-size:13px;color:#fff;font-weight:700;cursor:pointer;font-family:var(--f-body)">Exercice suivant →</button>'
    : '';

  if (prevBtn || nextBtn) {
    html += '<div style="padding:0 var(--s-4) var(--s-3);display:flex;gap:var(--s-2)">' + prevBtn + nextBtn + '</div>';
  }
  html += '<div style="padding:0 var(--s-4) var(--s-3)">'
    + '<button onclick="startExercices(\'' + fId + '\',\'' + aId + '\',\'' + mId + '\',\'' + cId + '\')" '
    + 'style="width:100%;padding:10px;background:none;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-size:12px;color:var(--c-text-3);cursor:pointer;font-family:var(--f-body)">← Tous les exercices</button>'
    + '</div><div class="pb-nav"></div>';

  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

function _exToggle(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function _renderCorrigeSteps(reponse) {
  if (typeof reponse === 'string') {
    return '<div style="font-size:12px;color:#0D3D22;line-height:1.8;white-space:pre-line">' + reponse + '</div>';
  }
  return reponse.map(function(step) {
    return '<div style="margin-bottom:10px">'
      + '<div style="font-size:10px;font-weight:800;color:#166038;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px">▶ ' + step.titre + '</div>'
      + '<div style="font-size:12px;color:#0D3D22;line-height:1.75;white-space:pre-line;background:rgba(255,255,255,0.6);padding:7px 10px;border-radius:6px;border-left:2px solid rgba(22,96,56,0.35)">' + step.detail + '</div>'
    + '</div>';
  }).join('');
}

/* ─── RENDU TEXTE DE SECTION (détection auto des équations) ────── */
function _renderSectionTexte(texte) {
  var lines = texte.split('\n');
  var html = '';
  var paraLines = [];

  function flushPara() {
    if (!paraLines.length) return;
    html += '<p style="font-size:12.5px;color:var(--c-text);line-height:1.9;margin:0 0 8px">' + paraLines.join('<br>') + '</p>';
    paraLines = [];
  }

  lines.forEach(function(line) {
    var t = line.trim();
    if (t === '') {
      flushPara();
      return;
    }
    var isEq = /=/.test(t)
      && /[·×\/\^²³ρνμγλξπΔΣ√⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(t)
      && !/^[•\-\*]/.test(t)
      && t.length < 120;
    if (isEq) {
      flushPara();
      html += '<div style="background:var(--c-primary-l);border-left:3px solid var(--c-primary);border-radius:0 8px 8px 0;padding:9px 16px;margin:6px 0 10px;font-family:\'Courier New\',monospace;font-size:13px;font-weight:700;color:var(--c-primary);overflow-x:auto;white-space:nowrap">' + t + '</div>';
    } else {
      paraLines.push(t);
    }
  });
  flushPara();
  return html;
}

/* ─── BREADCRUMB ─────────────────────────────────────────────────── */
function _coursBreadcrumb(items) {
  var html = '<div style="padding:var(--s-2) var(--s-4);display:flex;align-items:center;gap:4px;overflow-x:auto;scrollbar-width:none;background:var(--c-surface-2);border-bottom:1px solid var(--c-border)">';
  items.forEach(function(item, i) {
    if (i > 0) html += '<span style="color:var(--c-text-4);font-size:12px">›</span>';
    if (item.fn) {
      html += '<button onclick="' + item.fn + '" style="background:none;border:none;font-family:var(--f-body);font-size:12px;color:var(--c-primary);cursor:pointer;white-space:nowrap;padding:2px 0">' + item.label + '</button>';
    } else {
      html += '<span style="font-size:12px;color:var(--c-text-3);white-space:nowrap;font-weight:600">' + item.label + '</span>';
    }
  });
  html += '</div>';
  return html;
}
