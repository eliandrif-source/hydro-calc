/* ═══════════════════════════════════════════════════════════
   OUTILS DE TERRAIN — Fiches techniques par module
   Accès : plan Pro et Établissement uniquement
   ═══════════════════════════════════════════════════════════ */

/* ─── DONNÉES ─── */
var OUTILS_DATA = {

  anc: [
    {
      ico:'🪣', name:'Perméamètre de Porchet', cat:'Test de sol',
      usage:'Mesure de la perméabilité du sol en place · Obligatoire pour dimensionner les filières d\'épandage ANC',
      principe:'Remplissage d\'un trou cylindrique de 10 cm de diamètre avec de l\'eau · Mesure de la vitesse de descente du niveau · Calcul du coefficient K (mm/min)',
      protocole:[
        'Creuser un trou cylindrique Ø 10 cm, profondeur 50–80 cm (niveau épandage)',
        'Saturer le sol : remplir 3 fois de suite et laisser ressuyage complet (12–24 h)',
        'Remplir jusqu\'à 30 cm de hauteur d\'eau, mesurer toutes les 30 min',
        'Stabilisation atteinte quand 3 mesures consécutives identiques (±10%)',
        'K = 30 / T (mm/min) avec T = temps en min pour la descente de 30 mm'
      ],
      interpretation:[
        {val:'K < 1 mm/min', label:'Sol imperméable', t:'danger', action:'Filtre à sable drainé · Tertre · Microstation'},
        {val:'K = 1–15 mm/min', label:'Sol adapté', t:'ok', action:'Tranchées d\'épandage ou filtre à sable non drainé'},
        {val:'K > 15 mm/min', label:'Sol trop perméable', t:'warn', action:'Filtre à sable drainé obligatoire · Risque pollution nappe'},
      ],
      svg: '<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;height:auto;display:block;margin:0 auto">'
        +'<defs><marker id="pg1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#0891B2"/></marker></defs>'
        +'<rect x="0" y="0" width="280" height="200" fill="none"/>'
        +'<rect x="20" y="80" width="240" height="120" fill="#D4A574" opacity="0.4" rx="2"/>'
        +'<text x="140" y="100" text-anchor="middle" font-size="9" fill="#92400E" font-family="sans-serif">Sol en place</text>'
        +'<rect x="100" y="30" width="80" height="120" rx="4" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/>'
        +'<text x="140" y="20" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">Trou Ø 10 cm</text>'
        +'<rect x="102" y="32" width="76" height="50" fill="#BFDBFE" opacity="0.9"/>'
        +'<text x="140" y="62" text-anchor="middle" font-size="9" fill="#1E40AF" font-family="sans-serif" font-weight="700">Eau</text>'
        +'<text x="140" y="74" text-anchor="middle" font-size="8" fill="#1E40AF" font-family="sans-serif">H = 30 cm</text>'
        +'<line x1="80" y1="82" x2="100" y2="82" stroke="#1550A0" stroke-width="1.5" stroke-dasharray="3,2"/>'
        +'<text x="70" y="86" text-anchor="end" font-size="8" fill="#1550A0" font-family="sans-serif">Niveau initial</text>'
        +'<line x1="80" y1="102" x2="100" y2="102" stroke="#D97706" stroke-width="1.5" stroke-dasharray="3,2"/>'
        +'<text x="70" y="106" text-anchor="end" font-size="8" fill="#D97706" font-family="sans-serif">Niveau t+30 min</text>'
        +'<line x1="140" y1="150" x2="140" y2="175" stroke="#0891B2" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#pg1)"/>'
        +'<line x1="120" y1="155" x2="120" y2="175" stroke="#0891B2" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" marker-end="url(#pg1)"/>'
        +'<line x1="160" y1="155" x2="160" y2="175" stroke="#0891B2" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" marker-end="url(#pg1)"/>'
        +'<text x="210" y="165" font-size="8" fill="#0891B2" font-family="sans-serif">Infiltration K</text>'
        +'<line x1="185" y1="82" x2="185" y2="102" stroke="#64748B" stroke-width="1.5"/>'
        +'<line x1="180" y1="82" x2="190" y2="82" stroke="#64748B" stroke-width="1.5"/>'
        +'<line x1="180" y1="102" x2="190" y2="102" stroke="#64748B" stroke-width="1.5"/>'
        +'<text x="200" y="95" font-size="9" fill="#64748B" font-family="sans-serif">ΔH = 30 mm</text>'
        +'<text x="140" y="193" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">K = 30 / T (mm/min) · T = durée descente de 30 mm</text>'
        +'</svg>',
      norme:'DTU 64.1 — Annexe E · Arrêté 07/09/2009 · Guide SPANC',
      materiel:'Tarière 10 cm · Seau 10 L · Règle graduée mm · Chronomètre · Carnet de terrain',
      precautions:'Ne pas tester sol gelé ou saturé · Distance min. 5 m entre 2 tests · Réaliser 3 tests minimum par site',
    },
    {
      ico:'🔭', name:'Piézomètre / sonde de nappe', cat:'Hydrogéologie',
      usage:'Mesure du niveau de la nappe phréatique · Vérifie la distance entre le fond de la filière et la nappe (min. 0,70 m)',
      principe:'Tube perforé mis en place par forage ou battage · Mesure du niveau d\'eau par sonde électroacoustique ou flotteur',
      protocole:[
        'Réaliser un forage jusqu\'à rencontre de la nappe (tarière manuelle ou motorisée)',
        'Mettre en place le tube PVC Ø 50–100 mm perforé sur la zone saturée',
        'Attendre stabilisation 2–4 h (ou 24 h en sol peu perméable)',
        'Mesurer le niveau depuis la surface avec la sonde de mesure',
        'Répéter en hautes eaux (hiver/printemps) — période critique réglementaire'
      ],
      interpretation:[
        {val:'Nappe < 0,70 m du fond filière', label:'Non conforme', t:'danger', action:'Tertre d\'infiltration ou microstation obligatoires'},
        {val:'Nappe entre 0,70 et 1,0 m', label:'Limite', t:'warn', action:'Tertre recommandé · Vérifier en hautes eaux'},
        {val:'Nappe > 1,0 m du fond filière', label:'Conforme', t:'ok', action:'Tranchées ou filtre à sable possible selon K'},
      ],
      svg: '<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;height:auto;display:block;margin:0 auto">'
        +'<rect x="0" y="0" width="280" height="200" fill="none"/>'
        +'<rect x="10" y="0" width="260" height="80" fill="#FEF9C3" opacity="0.5" rx="2"/>'
        +'<text x="140" y="30" text-anchor="middle" font-size="9" fill="#92400E" font-family="sans-serif">Sol non saturé</text>'
        +'<rect x="10" y="80" width="260" height="10" fill="#92400E" opacity="0.2"/>'
        +'<text x="25" y="88" font-size="8" fill="#92400E" font-family="sans-serif">Surface du sol</text>'
        +'<rect x="10" y="130" width="260" height="70" fill="#BFDBFE" opacity="0.4" rx="0 0 2 2"/>'
        +'<line x1="10" y1="130" x2="270" y2="130" stroke="#0891B2" stroke-width="2" stroke-dasharray="6,3"/>'
        +'<text x="25" y="125" font-size="9" fill="#0891B2" font-family="sans-serif" font-weight="700">Niveau nappe — mesure critique</text>'
        +'<rect x="125" y="10" width="10" height="170" rx="3" fill="#E6EEF8" stroke="#1550A0" stroke-width="1.5"/>'
        +'<rect x="126" y="115" width="8" height="55" fill="none" stroke="#1550A0" stroke-width="1" stroke-dasharray="2,2"/>'
        +'<text x="140" y="190" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">Tube PVC perforé</text>'
        +'<line x1="135" y1="50" x2="135" y2="130" stroke="#64748B" stroke-width="1.5"/>'
        +'<text x="145" y="55" font-size="8" fill="#64748B" font-family="sans-serif">Câble sonde</text>'
        +'<circle cx="135" cy="135" r="6" fill="#0891B2" stroke="#1E40AF" stroke-width="1.5"/>'
        +'<text x="150" y="140" font-size="8" fill="#1E40AF" font-family="sans-serif">Flotteur</text>'
        +'<line x1="195" y1="80" x2="195" y2="130" stroke="#DC2626" stroke-width="1.5"/>'
        +'<line x1="190" y1="80" x2="200" y2="80" stroke="#DC2626" stroke-width="1.5"/>'
        +'<line x1="190" y1="130" x2="200" y2="130" stroke="#DC2626" stroke-width="1.5"/>'
        +'<text x="210" y="108" font-size="9" fill="#DC2626" font-family="sans-serif" font-weight="700">h nappe</text>'
        +'<text x="210" y="118" font-size="8" fill="#DC2626" font-family="sans-serif">≥ 0,70 m requis</text>'
        +'</svg>',
      norme:'Arrêté 07/09/2009 Art. 7 · DTU 64.1 § 5.2',
      materiel:'Tarière ou foreuse manuelle · Tubes PVC perforés Ø 50–100 mm · Sonde de niveau électroacoustique · Décamètre',
      precautions:'Mesurer obligatoirement en période de hautes eaux · Protéger le piézomètre contre la pollution de surface',
    },
    {
      ico:'📷', name:'Caméra d\'inspection (endoscopie)', cat:'Diagnostic ouvrage',
      usage:'Inspection visuelle de la FTE, des drains d\'épandage, des regards · Diagnostic avant réhabilitation',
      principe:'Caméra couleur montée sur tige ou câble poussé · Image transmise en temps réel sur écran · Enregistrement vidéo',
      protocole:[
        'Pompage préalable de la fosse si inspection interne (sécurité H2S)',
        'Introduire la caméra par le regard d\'accès ou le regard de tête',
        'Avancer lentement (< 10 cm/s) en tournant à 360° si caméra rotative',
        'Identifier : fissures, décollements, colmatage, intrusions racinaires, niveaux de boues',
        'Enregistrer la vidéo horodatée et géoréférencée pour le rapport SPANC'
      ],
      interpretation:[
        {val:'Fissures > 5 mm ou effondrement', label:'Danger structurel', t:'danger', action:'Remplacement immédiat · Mise en sécurité'},
        {val:'Colmatage partiel > 50%', label:'Non fonctionnel', t:'danger', action:'Curage haute pression + inspection contradictoire'},
        {val:'Dépôts < 30% section', label:'Surveillance', t:'warn', action:'Vidange programmée + contrôle annuel'},
        {val:'Ouvrage propre et intact', label:'Conforme', t:'ok', action:'Prochaine inspection selon plan de maintenance'},
      ],
      norme:'Norme NF EN 13508-2 (cotation défauts) · Guide SPANC 2024',
      materiel:'Caméra couleur Ø 40–150 mm · Enregistreur HD · Torche LED intégrée · EPI (harnais, détecteur 4 gaz)',
      precautions:'Port des EPI obligatoire · Mesurer H2S, O2, CH4 avant toute ouverture · Jamais seul sur site',
    },
    {
      ico:'🔬', name:'Kit analyse terrain (pH/redox/conductivité)', cat:'Chimie eau',
      usage:'Caractérisation des eaux en sortie de filière · Vérification qualité rejet · Dépistage dysfonctionnement',
      principe:'Électrodes spécifiques ou réactifs colorimétiques permettant mesure rapide sur le terrain',
      protocole:[
        'Prélever l\'eau en sortie de filière dans un flacon propre 500 mL',
        'Réaliser les mesures dans les 30 min suivant le prélèvement',
        'Calibrer les électrodes avant chaque session (pH : tampons 4 et 7)',
        'Mesurer : pH · Conductivité · Turbidité · NH4 · NO3 (si kit colorimétrique)',
        'Comparer aux valeurs de référence et noter dans le carnet de suivi'
      ],
      interpretation:[
        {val:'pH < 6,0 ou > 9,0', label:'Hors plage', t:'danger', action:'Dysfonctionnement biologique · Vérifier alimentation filière'},
        {val:'Conductivité > 3 000 µS/cm', label:'Charge excessive', t:'warn', action:'Surcharge hydraulique ou organique'},
        {val:'Turbidité > 30 NTU en sortie drainée', label:'Colmatage', t:'warn', action:'Inspection drain + vérification prétraitement'},
        {val:'Paramètres dans les normes', label:'Conforme', t:'ok', action:'Fonctionnement normal'},
      ],
      norme:'Arrêté 21/07/2015 (si rejet milieu) · Guide CNSA 2024',
      materiel:'Multiparamètre portatif (pH/conductivité/T°) · Kit colorimétrique NH4/NO3 · Flacon prélèvement · Glacière isotherme',
      precautions:'Étalonnage quotidien · Conserver les solutions tampon en dessous de 25°C · Délai < 2 h entre prélèvement et analyse',
    },
  ],

  ac: [
    {
      ico:'🎥', name:'Caméra ITV (Inspection Télévisée)', cat:'Inspection réseau',
      usage:'Inspection des réseaux d\'assainissement gravitaires et sous pression · Diagnostic structurel et fonctionnel · Obligatoire pour réception de travaux',
      principe:'Robot motorisé équipé d\'une caméra panoramique et d\'un laser · Progression autonome dans le réseau · Cotation des défauts en norme NF EN 13508-2',
      protocole:[
        'Localiser les regards amont et aval de la section à inspecter',
        'Bâcher l\'aval pour retenir les eaux · Nettoyage préalable à la pompe haute pression',
        'Introduire le robot par le regard amont · Calibrer la mesure de diamètre',
        'Avancer à vitesse constante < 15 m/min · Rotation 360° tous les 2–3 m',
        'Coter chaque défaut (code + grade 1 à 5 selon NF EN 13508-2) et géoréférencer',
        'Exporter le rapport PDF + vidéo + fichier d\'échange (GML ou CSV)'
      ],
      interpretation:[
        {val:'Défaut structurel grade 4–5', label:'Urgence', t:'danger', action:'Réfection immédiate · Interdire le secteur si risque effondrement'},
        {val:'Défaut structurel grade 3', label:'À planifier', t:'warn', action:'Travaux sous 12 mois · Inclure au programme pluri-annuel'},
        {val:'Défaut fonctionnel (dépôts, contre-pente)', label:'Curage', t:'warn', action:'Curage haute pression + contre-inspection'},
        {val:'Aucun défaut significatif', label:'Bon état', t:'ok', action:'Prochaine ITV selon programme (5–10 ans)'},
      ],
      svg: '<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto">'
        +'<defs><marker id="itva" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#1550A0"/></marker></defs>'
        +'<ellipse cx="150" cy="90" rx="145" ry="60" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/>'
        +'<ellipse cx="150" cy="90" rx="130" ry="48" fill="#F8FAFC" stroke="none"/>'
        +'<rect x="30" y="140" width="240" height="18" fill="#D4A574" opacity="0.5"/>'
        +'<text x="150" y="152" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">Fond conduite — dépôts</text>'
        +'<rect x="55" y="78" width="50" height="24" rx="4" fill="#1550A0"/>'
        +'<circle cx="70" cy="90" r="7" fill="#3B82F6" stroke="white" stroke-width="1.5"/>'
        +'<text x="80" y="86" font-size="7" fill="white" font-family="sans-serif">LED</text>'
        +'<text x="80" y="100" font-size="7" fill="#93C5FD" font-family="sans-serif">CAM</text>'
        +'<line x1="105" y1="90" x2="45" y2="90" stroke="#64748B" stroke-width="2"/>'
        +'<text x="30" y="72" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Câble</text>'
        +'<polygon points="148,58 152,58 155,88 145,88" fill="#FEF3C7" stroke="#D97706" stroke-width="1" opacity="0.8"/>'
        +'<text x="200" y="55" font-size="8" fill="#D97706" font-family="sans-serif">Fissure → code NF EN 13508</text>'
        +'<line x1="182" y1="57" x2="157" y2="60" stroke="#D97706" stroke-width="1" stroke-dasharray="2,2"/>'
        +'<rect x="200" y="72" width="30" height="14" rx="3" fill="#FEE2E2" stroke="#DC2626" stroke-width="1"/>'
        +'<text x="215" y="82" text-anchor="middle" font-size="7" fill="#DC2626" font-family="sans-serif">Racine</text>'
        +'<line x1="200" y1="78" x2="185" y2="82" stroke="#DC2626" stroke-width="1" stroke-dasharray="2,2"/>'
        +'<text x="150" y="148" text-anchor="middle" font-size="7" fill="#1550A0" font-family="sans-serif">Vue caméra — cotation défauts NF EN 13508-2</text>'
        +'</svg>',
      norme:'NF EN 13508-2 · NF EN 752 · DTU 64.1 · Règlement d\'assainissement local',
      materiel:'Robot ITV (tracteur + caméra Ø 150–1200 mm) · Centrale d\'acquisition · Laptop logiciel cotation · Groupes électrogène · EPI réseau',
      precautions:'Neutralisation du réseau obligatoire en amont · Détection gaz (H2S, O2, CH4, CO) · 2 personnes minimum en surface',
    },
    {
      ico:'📡', name:'Débitmètre à ultrasons (clamp-on)', cat:'Métrologie hydraulique',
      usage:'Mesure du débit en conduite pleine sans intervention sur la canalisation · Mesure instantanée ou enregistrement continu',
      principe:'Émission d\'ultrasons entre 2 capteurs fixés à l\'extérieur de la canalisation · Mesure du temps de transit (transit-time) · Calcul de la vitesse et du débit Q = V × S',
      protocole:[
        'Choisir une section droite sans singularité (10D amont, 5D aval minimum)',
        'Nettoyer et abraser légèrement la surface de la conduite (gel couplant)',
        'Positionner les capteurs selon la distance inter-capteur calculée par l\'appareil',
        'Saisir le matériau, le diamètre intérieur et l\'épaisseur de paroi',
        'Vérifier le signal (SOS > 75) · Lancer l\'enregistrement (pas de temps : 1–15 min)',
        'Exporter les données CSV pour traitement'
      ],
      interpretation:[
        {val:'SOS < 50%', label:'Signal faible', t:'danger', action:'Changer le gel couplant · Vérifier le matériau · Essayer autre position'},
        {val:'Débit > capacité nominale réseau', label:'Saturation', t:'danger', action:'Analyse hydro · Délester ou reprogrammer l\'ouvrage'},
        {val:'Débit nocturne anormal (forte pluie sèche)', label:'Eaux parasites', t:'warn', action:'Campagne DIRD · Secteur par secteur'},
        {val:'Mesure stable et cohérente', label:'Fiable', t:'ok', action:'Enregistrement en continu possible'},
      ],
      svg: '<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto">'
        +'<defs><marker id="usa" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><polygon points="0 0,5 2.5,0 5" fill="#1550A0"/></marker>'
        +'<marker id="usb" markerWidth="5" markerHeight="5" refX="1" refY="2.5" orient="auto"><polygon points="5 0,0 2.5,5 5" fill="#059669"/></marker></defs>'
        +'<ellipse cx="150" cy="85" rx="140" ry="65" fill="#E6EEF8" stroke="#1550A0" stroke-width="2.5"/>'
        +'<ellipse cx="150" cy="85" rx="125" ry="52" fill="#BFDBFE" opacity="0.6"/>'
        +'<text x="150" y="89" text-anchor="middle" font-size="10" fill="#1E40AF" font-family="sans-serif" font-weight="700">Écoulement</text>'
        +'<line x1="25" y1="85" x2="275" y2="85" stroke="#1550A0" stroke-width="2.5" marker-end="url(#usa)"/>'
        +'<rect x="10" y="72" width="22" height="26" rx="3" fill="#1550A0"/>'
        +'<text x="21" y="88" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700">T1</text>'
        +'<rect x="268" y="72" width="22" height="26" rx="3" fill="#059669"/>'
        +'<text x="279" y="88" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700">T2</text>'
        +'<line x1="32" y1="80" x2="268" y2="75" stroke="#1550A0" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#usa)"/>'
        +'<line x1="268" y1="95" x2="32" y2="91" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#usb)"/>'
        +'<text x="150" y="68" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">→ t_aval (T1→T2 dans sens écoulement)</text>'
        +'<text x="150" y="105" text-anchor="middle" font-size="8" fill="#059669" font-family="sans-serif">← t_amont (T2→T1 contre écoulement)</text>'
        +'<text x="150" y="128" text-anchor="middle" font-size="9" fill="#64748B" font-family="sans-serif" font-weight="700">V = k × (t_amont − t_aval) / (t_amont × t_aval)</text>'
        +'<text x="150" y="143" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Montage Z : capteurs face à face · Montage V : réflexion paroi</text>'
        +'<text x="150" y="158" text-anchor="middle" font-size="8" fill="#D97706" font-family="sans-serif">⚠ Remplissage > 70 % requis · Profil turbulent stabilisé (10D amont)</text>'
        +'</svg>',
      norme:'NF EN ISO 6416 · Guide Astee métrologie 2021',
      materiel:'Débitmètre ultrasonique (ex. Flexim, Controlotron) · Capteurs adaptés au DN · Gel couplant · Logger intégré · Câble USB/Bluetooth',
      precautions:'Ne fonctionne pas sur conduite vide ou bimétallique · Bulles d\'air = erreur mesure · Température fluide < 130°C',
    },
    {
      ico:'💨', name:'Détecteur de gaz (4 gaz)', cat:'Sécurité réseau',
      usage:'Détection et mesure des gaz dangereux avant entrée en réseau · Obligatoire par le Code du travail (art. R.4412-149)',
      principe:'Électrochimique pour H2S, O2, CO · Catalytique pour CH4/Ex · Alarmes sonores et vibrantes en cas de dépassement des seuils',
      protocole:[
        'Calibrer l\'appareil avec les gaz étalons avant chaque journée (zéro + span)',
        'Allumer l\'appareil à l\'extérieur et laisser chauffer 30 secondes',
        'Abaisser la sonde dans le regard ouvert avant toute descente — attendre 2 min',
        'Vérifier O2 > 19,5% · H2S < 10 ppm · CH4 < 10% LIE · CO < 25 ppm',
        'Garder l\'appareil allumé et accroché pendant toute l\'intervention',
        'En cas d\'alarme : évacuation immédiate, ventilation forcée, SAMU si exposition'
      ],
      interpretation:[
        {val:'H2S > 50 ppm ou O2 < 18%', label:'Danger mortel', t:'danger', action:'Évacuation immédiate · Ventilation · Attendre retour sécurité'},
        {val:'H2S 10–50 ppm ou CH4 > 10% LIE', label:'Risque élevé', t:'warn', action:'Ventilation forcée min. 15 min · Masque ARI'},
        {val:'O2 > 19,5% · H2S < 10 ppm', label:'Sécurisé', t:'ok', action:'Intervention possible avec EPI complets'},
      ],
      svg: '<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;height:auto;display:block;margin:0 auto">'
        +'<ellipse cx="140" cy="95" rx="130" ry="65" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/>'
        +'<ellipse cx="140" cy="95" rx="115" ry="53" fill="#F8FAFC"/>'
        +'<rect x="25" y="140" width="230" height="18" fill="#D4A574" opacity="0.4"/>'
        +'<text x="140" y="152" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">Radier — fond égout</text>'
        +'<rect x="52" y="58" width="14" height="25" rx="3" fill="#D97706"/>'
        +'<text x="59" y="52" text-anchor="middle" font-size="7" fill="#D97706" font-family="sans-serif">H₂S</text>'
        +'<text x="59" y="96" text-anchor="middle" font-size="7" fill="#D97706" font-family="sans-serif">fond</text>'
        +'<text x="59" y="105" text-anchor="middle" font-size="7" fill="#D97706" font-family="sans-serif">(lourd)</text>'
        +'<rect x="126" y="40" width="14" height="35" rx="3" fill="#DC2626"/>'
        +'<text x="133" y="34" text-anchor="middle" font-size="7" fill="#DC2626" font-family="sans-serif">CH₄</text>'
        +'<text x="133" y="85" text-anchor="middle" font-size="7" fill="#DC2626" font-family="sans-serif">voûte</text>'
        +'<text x="133" y="94" text-anchor="middle" font-size="7" fill="#DC2626" font-family="sans-serif">(léger)</text>'
        +'<rect x="190" y="52" width="14" height="28" rx="3" fill="#64748B"/>'
        +'<text x="197" y="46" text-anchor="middle" font-size="7" fill="#64748B" font-family="sans-serif">CO₂</text>'
        +'<rect x="90" y="70" width="30" height="48" rx="5" fill="#1550A0"/>'
        +'<text x="105" y="90" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700">4 GAZ</text>'
        +'<text x="105" y="103" text-anchor="middle" font-size="7" fill="#93C5FD" font-family="sans-serif">DÉTECT.</text>'
        +'<circle cx="105" cy="113" r="4" fill="#4ADE80"/>'
        +'<text x="80" y="132" font-size="7" fill="#059669" font-family="sans-serif">O₂ LED verte = OK</text>'
        +'<text x="140" y="165" text-anchor="middle" font-size="8" fill="#DC2626" font-family="sans-serif">⚠ H₂S : seuil d\'alerte 5 ppm · CH₄ LIE 5 % · O₂ mini 19,5 %</text>'
        +'</svg>',
      norme:'Code du travail R.4412-149 · NF EN 61779 · Recommandation INRS R.447',
      materiel:'Détecteur 4 gaz (O2, H2S, CO, CH4/Ex) · Sonde déportée 1,5 m · Pompe d\'aspiration intégrée · Étalons gaz en coffret',
      precautions:'Jamais entrer dans un réseau sans mesure · Travailleur isolé interdit · Équipement téléphonique obligatoire',
    },
    {
      ico:'🔊', name:'Corrélateur acoustique de fuites', cat:'Recherche de fuites',
      usage:'Localisation précise des fuites sur canalisations AEP enterrées sans fouille · Technique non destructive',
      principe:'2 capteurs posés sur organes accessibles (vannes, bornes) détectent les vibrations sonores de la fuite · Le corrélateur calcule la position par différence de temps de transit',
      protocole:[
        'Identifier deux organes accessibles de part et d\'autre de la fuite supposée',
        'Poser les capteurs et mesurer précisément la distance entre eux',
        'Saisir le matériau et le diamètre de la canalisation (vitesse du son)',
        'Lancer la corrélation (30 s à 5 min) · Attendre résultat stabilisé',
        'La position du pic = position de la fuite (± 0,5 m en conditions favorables)',
        'Confirmer par écoute directe avec géophone avant ouverture de fouille'
      ],
      interpretation:[
        {val:'Pic corrélation net > 80%', label:'Fuite localisée', t:'ok', action:'Ouvrir la fouille à la position indiquée ± 0,5 m'},
        {val:'Pic faible ou multiple', label:'Incertain', t:'warn', action:'Changer la position des capteurs · Essai nuit (moins de bruit)'},
        {val:'Pas de signal', label:'Hors portée', t:'warn', action:'Réduire la distance inter-capteur · Vérifier pression > 2 bar'},
      ],
      svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto">'
        +'<rect x="10" y="55" width="280" height="40" rx="8" fill="#E6EEF8" stroke="#1550A0" stroke-width="2.5"/>'
        +'<text x="155" y="80" text-anchor="middle" font-size="9" fill="#1E40AF" font-family="sans-serif" font-weight="700">Conduite AEP sous pression</text>'
        +'<rect x="130" y="42" width="10" height="15" fill="#DC2626"/>'
        +'<circle cx="135" cy="40" r="5" fill="#FCA5A5" stroke="#DC2626" stroke-width="2"/>'
        +'<text x="135" y="30" text-anchor="middle" font-size="8" fill="#DC2626" font-family="sans-serif" font-weight="700">FUITE</text>'
        +'<rect x="22" y="40" width="20" height="30" rx="4" fill="#1550A0"/>'
        +'<text x="32" y="58" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif">C1</text>'
        +'<rect x="258" y="40" width="20" height="30" rx="4" fill="#059669"/>'
        +'<text x="268" y="58" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif">C2</text>'
        +'<path d="M 135 40 Q 80 20 32 55" stroke="#1550A0" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>'
        +'<path d="M 135 40 Q 190 20 268 55" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>'
        +'<text x="75" y="18" text-anchor="middle" font-size="7" fill="#1550A0" font-family="sans-serif">t₁ → Capteur 1</text>'
        +'<text x="220" y="18" text-anchor="middle" font-size="7" fill="#059669" font-family="sans-serif">t₂ → Capteur 2</text>'
        +'<rect x="115" y="100" width="40" height="36" rx="5" fill="#1550A0"/>'
        +'<text x="135" y="117" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700">CORRÉLA-</text>'
        +'<text x="135" y="127" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700">TEUR</text>'
        +'<line x1="32" y1="70" x2="115" y2="115" stroke="#1550A0" stroke-width="1" stroke-dasharray="3,2"/>'
        +'<line x1="268" y1="70" x2="155" y2="115" stroke="#059669" stroke-width="1" stroke-dasharray="3,2"/>'
        +'<text x="155" y="145" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">d = (Δt × c) / 2 · c = célérité onde dans conduite (~1200 m/s fonte)</text>'
        +'</svg>',
      norme:'Guide SHF recherche fuites 2019 · NF EN 805',
      materiel:'Corrélateur (ex. SebaKMT, Gutermann) · 2 capteurs magnétiques · Câbles ou liaison radio · Ordinateur portatif',
      precautions:'Efficacité réduite sur PE et fonte (amortissement élevé) · Nécessite pression de service · Résultats perturbés par bruits mécaniques proches',
    },
    {
      ico:'💧', name:'Testeur d\'étanchéité (eau / air)', cat:'Contrôle qualité',
      usage:'Vérification de l\'étanchéité des tronçons de réseau à la réception des travaux ou lors de diagnostic',
      principe:'Obturation amont et aval par obturateurs gonflables · Mise en pression à l\'eau (100 mbar) ou à l\'air (50 mbar) · Mesure de la perte de pression sur 15 min',
      protocole:[
        'Nettoyer le tronçon · Poser les obturateurs gonflables amont et aval',
        'Remplir le tronçon d\'eau (ou injecter l\'air) jusqu\'à pression de test',
        'Test eau : P0 = 100 mbar · Attendre 15 min · Mesurer ΔP',
        'Test air : P0 = 50 mbar · Attendre 15 min · Mesurer ΔP (plus sensible)',
        'Calculer la perte de pression admissible selon longueur et diamètre',
        'Localiser la fuite par bulles (test air + eau savonneuse) si non étanche'
      ],
      interpretation:[
        {val:'ΔP > valeur admissible', label:'Non étanche', t:'danger', action:'Localiser et réparer avant remblaiement · Nouveau test'},
        {val:'ΔP entre 80 et 100% du seuil', label:'Limite', t:'warn', action:'Vérifier joints de manchon et raccords · Test prolongé 30 min'},
        {val:'ΔP < valeur admissible', label:'Étanche — Conforme', t:'ok', action:'Signature PV de réception · Remblaiement autorisé'},
      ],
      norme:'NF EN 1610 (pose et essai) · DTU 64.1 · Guide Astee 2016',
      materiel:'Obturateurs gonflables (DN 100 à 600) · Compresseur ou pompe manuelle · Manomètre haute précision (0,1 mbar) · Chronomètre',
      precautions:'Ne pas tester réseau gelé · Pression résidentielle > 0,5 bar suffisante · Prévoir purge d\'air pour test eau',
    },
  ],

  ep: [
    {
      ico:'🔵', name:'Chlorimètre de terrain', cat:'Qualité eau potable',
      usage:'Mesure du chlore résiduel (libre et total) dans le réseau de distribution · Contrôle réglementaire quotidien et lors d\'interventions',
      principe:'Méthode colorimétrique DPD (diéthyl-p-phénylènediamine) · Réaction colorée proportionnelle à la concentration en chlore · Lecture par photomètre portable',
      protocole:[
        'Purger le robinet de prélèvement pendant 2 min avant mesure (eau stagnante)',
        'Rincer la cuvette 3 fois avec l\'eau à analyser',
        'Ajouter 1 comprimé DPD 1 (chlore libre) ou DPD 3 (chlore total) · Écraser',
        'Mélanger 30 secondes · Lire immédiatement (la couleur vire dans les 60 s)',
        'Enregistrer le résultat horodaté et géoréférencé dans le registre'
      ],
      interpretation:[
        {val:'Cl libre < 0,05 mg/L', label:'Insuffisant', t:'danger', action:'Vérifier la source de chloration · Risque de développement bactérien'},
        {val:'Cl libre 0,05–0,10 mg/L', label:'Limite basse', t:'warn', action:'Renforcer la chloration · Inspecter le réseau (temps de séjour)'},
        {val:'Cl libre 0,10–0,50 mg/L', label:'Conforme', t:'ok', action:'Valeurs réglementaires respectées'},
        {val:'Cl libre > 0,50 mg/L', label:'Surtraitement', t:'warn', action:'Réduire le dosage · Risque de THM (trihalométhanes)'},
      ],
      norme:'Arrêté 11/01/2007 (< 0,50 mg/L Cl total) · CSP art. R.1321-2 · OMS 2024',
      materiel:'Chlorimètre photométrique (ex. Hach Pocket ColorimeterII) · Comprimés DPD 1 et DPD 3 · Cuvette Ø 10 mm · Thermomètre',
      precautions:'Mesurer à l\'abri du soleil (photolyse) · Rincer soigneusement après comprimé DPD (toxique) · Calibrer avec eau standard mensuel',
    },
    {
      ico:'🌀', name:'Turbidimètre portable', cat:'Qualité eau potable',
      usage:'Mesure de la turbidité en sortie de traitement et en réseau · Contrôle de l\'efficacité de la filtration et de la floculation',
      principe:'Émission d\'un faisceau lumineux à 860 nm · Mesure de la lumière diffusée à 90° (méthode néphélométrique) · Résultat en NTU (Nephelometric Turbidity Unit)',
      protocole:[
        'Rincer la cellule de mesure 3 fois avec l\'eau à analyser',
        'Remplir lentement sans bulles d\'air (incliner le flacon à 45°)',
        'Essuyer l\'extérieur du flacon (empreintes = erreurs)',
        'Insérer dans l\'appareil · Attendre stabilisation (10–15 s)',
        'Enregistrer : valeur NTU · horodatage · point de prélèvement'
      ],
      interpretation:[
        {val:'Turbidité > 1 NTU (distribution)', label:'Dépassement réglementaire', t:'danger', action:'Arrêter la distribution · Inspection filtres et floculation · ARS à informer'},
        {val:'Turbidité 0,5–1,0 NTU', label:'Surveillance renforcée', t:'warn', action:'Augmenter la fréquence de mesure · Vérifier les filtres'},
        {val:'Turbidité < 0,5 NTU', label:'Conforme', t:'ok', action:'Traitement efficace · Continuer la surveillance normale'},
      ],
      norme:'Arrêté 11/01/2007 : < 1 NTU en distribution · < 0,5 NTU recommandé · Directive 2020/2184',
      materiel:'Turbidimètre portable ISO (ex. Hach 2100P, LaMotte 2020) · Cellules de mesure 10 mL · Solution étalon Formazine · Essuie tout non pelucheux',
      precautions:'Calibrer avec Formazine (0, 20, 100 NTU) à chaque session · Protéger de la lumière entre les mesures · Rincer 5 fois après étalon',
    },
    {
      ico:'🎧', name:'Corrélateur & géophone de fuites AEP', cat:'Recherche de fuites',
      usage:'Détection et localisation des fuites sur réseau AEP · Contrôle du rendement de réseau (objectif > 80% — Plan Eau 2023)',
      principe:'Géophone : écoute directe des bruits de fuite par conduction dans le sol · Corrélateur : calcul de la position par traitement du signal entre 2 capteurs',
      protocole:[
        'Campagne nocturne (0h–4h) : moins de bruit de fond, pression maximale',
        'Écoute géophone tous les 50–100 m sur organes accessibles (ventouses, vannes)',
        'Repérer les points avec bruit caractéristique (sifflement 300–1200 Hz)',
        'Poser le corrélateur sur les 2 organes encadrant le point suspecté',
        'Lancer la corrélation (durée 1–5 min) · Positionner le pic de corrélation',
        'Confirmer par écoute sol directe avec barre d\'écoute avant ouverture de fouille'
      ],
      interpretation:[
        {val:'Rendement < 70%', label:'Réseau très fuyard', t:'danger', action:'Campagne systématique · Sectorisation · Programme travaux urgent'},
        {val:'Rendement 70–80%', label:'Sous le seuil réglementaire', t:'warn', action:'Plan de renouvellement · Campagne annuelle'},
        {val:'Rendement > 80%', label:'Conforme Plan Eau 2023', t:'ok', action:'Maintien surveillance · Campagne biennale'},
      ],
      norme:'Plan Eau 2023 · NF EN 805 · Guide SHF · Décret DUP captages · Art. R.2224-19-3 CGCT',
      materiel:'Géophone électronique (ex. SebaKMT, Sewerin) · Corrélateur radio (2 boîtiers) · Barre d\'écoute mécanique · Registre réseau SIG',
      precautions:'Pression minimale 1,5 bar nécessaire · Inefficace sur PE ≥ 110 mm (amortissement fort) · Résultats compromis par trafic > 200 véh./h',
    },
    {
      ico:'🧫', name:'Kit bactériologique terrain (Colilert)', cat:'Microbiologie',
      usage:'Détection rapide de E. coli et Coliformes totaux dans l\'eau potable · Résultat en 24 h sans laboratoire fixe',
      principe:'Substrat ONPG/MUG : les coliformes totaux produisent une coloration jaune (β-galactosidase) · E. coli produit une fluorescence sous UV 365 nm (β-glucuronidase)',
      protocole:[
        'Prélever 100 mL d\'eau dans flacon stérile thiosulfaté (neutralisation chlore)',
        'Ajouter le réactif Colilert-18 (sachet quantitab) · Agiter 30 secondes',
        'Verser dans le plateau Quanti-Tray (201 puits) · Sceller hermétiquement',
        'Incuber à 35°C ± 0,5°C pendant 18–24 h (boîte isotherme portable)',
        'Lecture : puits jaunes = coliformes totaux · Puits fluorescents UV = E. coli',
        'Calculer le NPP (nombre le plus probable) avec table de conversion'
      ],
      interpretation:[
        {val:'E. coli détecté (≥ 1 UFC/100 mL)', label:'Non conforme — Urgence', t:'danger', action:'Notification ARS immédiate · Restriction ou interruption distribution · Désinfecter'},
        {val:'Coliformes totaux sans E. coli', label:'Contamination à surveiller', t:'warn', action:'Nouveau prélèvement 24 h · Renforcer chloration · Rechercher source'},
        {val:'0 puits positif', label:'Conforme', t:'ok', action:'Résultat enregistré dans registre sanitaire'},
      ],
      norme:'Arrêté 11/01/2007 : E. coli = 0/100 mL · NF EN ISO 9308-1 (référence) · Méthode IDEXX agréée en France depuis 2012',
      materiel:'Kit Colilert-18 (IDEXX) · Plateaux Quanti-Tray 2000 · Scelleuse · Incubateur portable 35°C · Lampe UV 365 nm · Flacons stériles thiosulfatés 100 mL',
      precautions:'Conserver les réactifs au réfrigérateur (2–8°C) · Transport des échantillons < 6 h en glacière 4°C · Résultat non réglementaire si incubation incorrecte',
    },
    {
      ico:'📊', name:'Analyseur multi-paramètres portable', cat:'Physicochimie',
      usage:'Mesure simultanée de pH, conductivité, température, O2 dissous, turbidité, TDS en réseau ou captage · Bilan qualité rapide',
      principe:'Multi-sonde à électrodes spécifiques plongeantes · Compensation automatique en température · Affichage simultané de tous les paramètres',
      protocole:[
        'Calibrer chaque électrode avant session (pH : tampon 4 et 7 · Cond : solution KCl · O2 : air saturé)',
        'Rincer la cellule de mesure 3 fois avec l\'eau à analyser',
        'Plonger la sonde · Attendre stabilisation de tous les paramètres (30–60 s)',
        'Enregistrer la mesure avec localisation GPS intégrée ou manuelle',
        'Comparer aux valeurs limites réglementaires immédiatement'
      ],
      interpretation:[
        {val:'pH hors 6,5–9,0 ou conductivité > 2500 µS/cm', label:'Hors norme', t:'danger', action:'Arrêt distribution si persistant · Recherche source de contamination'},
        {val:'O2 dissous < 5 mg/L', label:'Anoxie suspectée', t:'warn', action:'Vérifier l\'aération · Recherche contamination organique'},
        {val:'Tous paramètres dans normes', label:'Conforme', t:'ok', action:'Enregistrement registre sanitaire'},
      ],
      norme:'Arrêté 11/01/2007 · Directive 2020/2184 · NF EN ISO 10523 (pH) · NF EN ISO 27888 (conductivité)',
      materiel:'Multi-sonde portable (ex. YSI Pro Plus, Hach HQ40d) · Solutions de calibration · Bouchon de remplacement · Chargeur + batterie de secours',
      precautions:'Électrode O2 : renouveler la membrane si < 90% de saturation à l\'air · pH : éviter la dessiccation · Rincer à l\'eau déminéralisée entre les sites',
    },
  ],

  riv: [
    {
      ico:'🌡️', name:'Station limnimétrique / sonde piézo', cat:'Hydrométrie',
      usage:'Mesure en continu du niveau d\'eau (cote NGF) dans un cours d\'eau · Calcul du débit par courbe de tarage · Détection de crues',
      principe:'Capteur de pression piézorésistif immergé mesurant la hauteur de colonne d\'eau · Compensation de la pression atmosphérique par sonde barométrique de surface · Acquisition toutes les 5–15 min',
      protocole:[
        'Installer la sonde dans un tube de protection PVC immergé au fond du lit',
        'Caler le zéro (hauteur d\'eau = 0) au niveau du fond du lit ou du seuil de jaugeage',
        'Vérifier la correspondance hauteur sonde / échelle limnimétrique manuelle',
        'Paramétrer l\'enregistrement (pas de temps, seuils d\'alarme)',
        'Télécharger les données régulièrement (USB ou télétransmission) et corriger les dérives',
        'Jauger régulièrement pour alimenter/valider la courbe de tarage (min. 5 jaugeages)'
      ],
      interpretation:[
        {val:'Niveau > cote seuil alerte', label:'Alerte crue', t:'danger', action:'Prévenir autorités · Vérifier PGRI · Activer PCS communal'},
        {val:'Dérive sonde > 5 cm', label:'Anomalie capteur', t:'warn', action:'Recaler le zéro · Vérifier étanchéité et colmatage du tube'},
        {val:'Signal stable et cohérent', label:'Mesure fiable', t:'ok', action:'Archiver · Alimenter la banque HYDRO'},
      ],
      svg: '<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;height:auto;display:block;margin:0 auto">'
        +'<rect x="0" y="100" width="280" height="80" fill="#BFDBFE" opacity="0.5" rx="0 0 4 4"/>'
        +'<line x1="0" y1="100" x2="280" y2="100" stroke="#0891B2" stroke-width="2"/>'
        +'<text x="140" y="125" text-anchor="middle" font-size="9" fill="#0891B2" font-family="sans-serif" font-weight="700">Niveau d\'eau (H)</text>'
        +'<rect x="0" y="155" width="280" height="25" fill="#D4A574" opacity="0.5"/>'
        +'<text x="140" y="168" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">Fond / lit de la rivière</text>'
        +'<rect x="60" y="10" width="12" height="150" rx="3" fill="#64748B"/>'
        +'<rect x="56" y="0" width="20" height="12" rx="3" fill="#1550A0"/>'
        +'<text x="66" y="9" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif">DATA</text>'
        +'<text x="40" y="18" text-anchor="end" font-size="7" fill="#1550A0" font-family="sans-serif">→ 4G/SCADA</text>'
        +'<line x1="56" y1="100" x2="30" y2="100" stroke="#64748B" stroke-width="1.5" stroke-dasharray="3,2"/>'
        +'<line x1="56" y1="155" x2="30" y2="155" stroke="#64748B" stroke-width="1.5" stroke-dasharray="3,2"/>'
        +'<line x1="35" y1="100" x2="35" y2="155" stroke="#64748B" stroke-width="1.5"/>'
        +'<text x="18" y="130" text-anchor="middle" font-size="8" fill="#DC2626" font-family="sans-serif" font-weight="700">H</text>'
        +'<circle cx="66" cy="160" r="6" fill="#1550A0" stroke="#0C4A6E" stroke-width="1.5"/>'
        +'<text x="85" y="165" font-size="7" fill="#1550A0" font-family="sans-serif">Sonde piézo Ø 22 mm</text>'
        +'<rect x="185" y="60" width="70" height="50" rx="4" fill="#F1F5F9" stroke="#64748B" stroke-width="1.5"/>'
        +'<text x="220" y="82" text-anchor="middle" font-size="7" fill="#64748B" font-family="sans-serif" font-weight="700">COURBE</text>'
        +'<text x="220" y="93" text-anchor="middle" font-size="7" fill="#64748B" font-family="sans-serif">H = f(t)</text>'
        +'<polyline points="190,105 205,95 215,98 225,85 240,88 250,75" fill="none" stroke="#1550A0" stroke-width="1.5"/>'
        +'<text x="220" y="125" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Enregistrement continu 15 min</text>'
        +'</svg>',
      norme:'NF ISO 748 · Guide SCHAPI hydrométrie · Réseau HYDRO Banque nationale',
      materiel:'Sonde piézorésistive (ex. OTT CTD, Levelogger) · Câble de communication · Boîtier enregistreur · Barre de guide PVC · Câble anti-vol inox',
      precautions:'Fixer solidement contre les crues (câble inox + cheville béton) · Vérifier colmatage du tube après chaque crue · Étalonner avec manomètre de précision annuellement',
    },
    {
      ico:'🌊', name:'Courantomètre électromagnétique', cat:'Jaugeage',
      usage:'Mesure de la vitesse d\'écoulement en rivière · Jaugeage par exploration du profil en travers · Calcul du débit par méthode des jaugeages (NF ISO 748)',
      principe:'Effet Faraday : une sphère ou un disque électromagnétique génère un champ dans le fluide · La différence de potentiel mesurée est proportionnelle à la vitesse du courant',
      protocole:[
        'Choisir une section stable, à écoulement uniforme, loin de toute perturbation',
        'Diviser le profil en tranches verticales (min. 10, idéal 20)',
        'Mesurer la profondeur h en chaque verticale',
        'Mesurer la vitesse à 0,6h (ou à 0,2h et 0,8h si h > 50 cm) pendant 30–60 s',
        'Calculer Q = Σ (largeur × profondeur × vitesse) pour chaque tranche',
        'Estimer l\'incertitude (classe A si incertitude < 5% selon NF ISO 748)'
      ],
      interpretation:[
        {val:'Débit < débit réservé (1/10 module)', label:'Étiage critique', t:'danger', action:'Vérifier le respect des débits prélevés · Notifier DREAL'},
        {val:'Incertitude jaugeage > 10%', label:'Mesure peu fiable', t:'warn', action:'Recommencer · Corriger la section · Améliorer le profil'},
        {val:'Jaugeage cohérent avec limnimètre', label:'Fiable', t:'ok', action:'Archiver en banque HYDRO · Alimenter la courbe de tarage'},
      ],
      svg: '<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto">'
        +'<defs><marker id="cema" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#1550A0"/></marker></defs>'
        +'<rect x="0" y="50" width="300" height="110" fill="#BFDBFE" opacity="0.5"/>'
        +'<line x1="0" y1="50" x2="300" y2="50" stroke="#0891B2" stroke-width="2"/>'
        +'<text x="150" y="40" text-anchor="middle" font-size="9" fill="#0891B2" font-family="sans-serif">Surface libre</text>'
        +'<rect x="0" y="160" width="300" height="20" fill="#D4A574" opacity="0.5"/>'
        +'<text x="150" y="172" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">Fond de la rivière</text>'
        +'<line x1="10" y1="50" x2="290" y2="50" stroke="#1550A0" stroke-width="2.5" marker-end="url(#cema)"/>'
        +'<line x1="10" y1="100" x2="290" y2="100" stroke="#1550A0" stroke-width="2.5" marker-end="url(#cema)"/>'
        +'<text x="60" y="97" font-size="8" fill="#1550A0" font-family="sans-serif">V (m/s)</text>'
        +'<line x1="10" y1="150" x2="290" y2="150" stroke="#1550A0" stroke-width="2" marker-end="url(#cema)"/>'
        +'<rect x="138" y="88" width="24" height="24" rx="4" fill="#1550A0"/>'
        +'<text x="150" y="103" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700">EM</text>'
        +'<line x1="150" y1="40" x2="150" y2="88" stroke="#64748B" stroke-width="2"/>'
        +'<text x="165" y="75" font-size="8" fill="#64748B" font-family="sans-serif">Perche</text>'
        +'<line x1="150" y1="112" x2="150" y2="160" stroke="#64748B" stroke-width="2" stroke-dasharray="3,2"/>'
        +'<text x="180" y="138" font-size="8" fill="#64748B" font-family="sans-serif">h = 0,4×H</text>'
        +'<text x="180" y="148" font-size="8" fill="#64748B" font-family="sans-serif">(monoponte)</text>'
        +'<text x="150" y="178" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">V_moy ≈ V_{0,4H} · Q = V_moy × A_section</text>'
        +'</svg>',
      norme:'NF ISO 748 · NF EN ISO 6416 · Guide OFB jaugeages de crue',
      materiel:'Courantomètre EM (ex. OTT MF Pro, Seba FlowSens) · Perche télescopique · Télémètre laser · Carnet de terrain waterproof · Moulinet de secours',
      precautions:'Sécurité crue : harnais + corde de sécurité · Ne pas jauger si V > 1,5 m/s à gué · Crue > 2 ans = jaugeage en bateau ou ADCP',
    },
    {
      ico:'🥅', name:'Filet Surber (échantillonnage benthos)', cat:'Écologie aquatique',
      usage:'Prélèvement standardisé de macroinvertébrés benthiques pour évaluation de la qualité biologique du cours d\'eau (IBD, IBGN, IPR)',
      principe:'Cadre de 0,05 m² délimitant la surface prélevée · Filet de 250–500 µm de vide de maille collectant les organismes décrochés par grattage du substrat',
      protocole:[
        'Choisir une zone représentative (radier gravelo-caillouteux, pleine eau)',
        'Placer le cadre Surber ouverture face au courant, filet dans le sens de l\'écoulement',
        'Gratter et agiter le substrat sur 10 cm de profondeur pendant 1 min',
        'Récupérer les organismes dans le filet · Transférer dans un flacon avec alcool 70° ou formol 4%',
        'Répéter sur 8–12 stations représentatives du tronçon (protocole IBGN)',
        'Trier, identifier et compter au laboratoire selon clés de détermination'
      ],
      interpretation:[
        {val:'IBGN > 17/20', label:'Très bonne qualité', t:'ok', action:'Milieu de référence · Enjeu patrimonial fort · Protéger'},
        {val:'IBGN 13–17', label:'Bonne qualité', t:'ok', action:'Bon état DCE · Surveiller les pressions'},
        {val:'IBGN 9–12', label:'Qualité moyenne', t:'warn', action:'Pression identifiée · Plan d\'action restauration'},
        {val:'IBGN < 9', label:'Mauvaise qualité', t:'danger', action:'Masse d\'eau dégradée · Mesures correctrices urgentes'},
      ],
      svg: '<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;height:auto;display:block;margin:0 auto">'
        +'<defs><marker id="surba" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#1550A0"/></marker></defs>'
        +'<rect x="0" y="40" width="280" height="130" fill="#BFDBFE" opacity="0.4"/>'
        +'<line x1="0" y1="40" x2="280" y2="40" stroke="#0891B2" stroke-width="2"/>'
        +'<text x="140" y="30" text-anchor="middle" font-size="9" fill="#0891B2" font-family="sans-serif">Courant →</text>'
        +'<line x1="50" y1="40" x2="200" y2="40" stroke="#1550A0" stroke-width="2" marker-end="url(#surba)"/>'
        +'<rect x="90" y="40" width="60" height="60" fill="none" stroke="#059669" stroke-width="2.5"/>'
        +'<text x="120" y="75" text-anchor="middle" font-size="8" fill="#059669" font-family="sans-serif" font-weight="700">0,09 m²</text>'
        +'<text x="120" y="87" text-anchor="middle" font-size="7" fill="#059669" font-family="sans-serif">30×30 cm</text>'
        +'<polygon points="150,40 210,60 210,100 150,100" fill="#D1FAE5" stroke="#059669" stroke-width="2" opacity="0.8"/>'
        +'<text x="185" y="78" text-anchor="middle" font-size="8" fill="#065F46" font-family="sans-serif">Filet</text>'
        +'<text x="185" y="88" text-anchor="middle" font-size="7" fill="#065F46" font-family="sans-serif">500 μm</text>'
        +'<rect x="85" y="95" width="70" height="10" fill="#D4A574" stroke="#92400E" stroke-width="1.5"/>'
        +'<text x="120" y="120" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">Substrat — grattage 1 min</text>'
        +'<rect x="225" y="60" width="40" height="55" rx="4" fill="#065F46" stroke="#059669" stroke-width="1.5"/>'
        +'<text x="245" y="82" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700">MACRO-</text>'
        +'<text x="245" y="92" text-anchor="middle" font-size="7" fill="white" font-family="sans-serif" font-weight="700">INVERT.</text>'
        +'<text x="245" y="108" text-anchor="middle" font-size="7" fill="#D1FAE5" font-family="sans-serif">IBG-DCE</text>'
        +'<text x="140" y="155" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Cadre 30×30 cm · Filet 500 μm · 3 min grattage/maille</text>'
        +'<text x="140" y="167" text-anchor="middle" font-size="8" fill="#059669" font-family="sans-serif">Notation IBG-DCE · Indice Biologique Global NF T90-350</text>'
        +'</svg>',
      norme:'NF T90-333 (IBGN) · Norme NF EN 27828 · Protocole DCE 2000/60/CE · Guide OFB bioévaluation',
      materiel:'Cadre Surber 0,05 m² + filet 500 µm · Bocaux à vis 500 mL · Alcool 70° ou formol 4% · Pincette fine · Loupe binoculaire · Clé de détermination Tachet',
      precautions:'EPI imperméabilisation + gilet de sauvetage · Jamais seul · Congélation rapide si transport > 24 h · Formol : utilisation en extérieur uniquement',
    },
    {
      ico:'🔬', name:'Multi-sonde de terrain (O2/pH/Cond/T°)', cat:'Physicochimie eau',
      usage:'Mesure in situ des paramètres physico-chimiques de la qualité des eaux de surface · Diagnostic rapide et suivi longitudinal',
      principe:'Multi-électrodes plongeantes avec compensation automatique en température · Capteur optique luminescent pour l\'O2 dissous (plus de membrane fragile) · Bluetooth vers smartphone',
      protocole:[
        'Calibrer la veille ou le matin : O2 (air saturé 100%), pH (tampons 4 et 7), conductivité (KCl 147 µS/cm)',
        'Plonger la sonde 30 cm sous la surface, à l\'écart de la berge (eau courante représentative)',
        'Agiter légèrement pendant 30 s pour renouveler le film d\'eau au contact de la sonde',
        'Attendre stabilisation de tous les paramètres (60–120 s)',
        'Enregistrer : station · date/heure · coordonnées GPS · tous paramètres',
        'Répéter tous les 500 m à 2 km selon l\'objectif (profil longitudinal)'
      ],
      interpretation:[
        {val:'O2 dissous < 3 mg/L', label:'Anoxie / Dystrophie', t:'danger', action:'Source de pollution organique amont · Prélèvement pour analyse · Signalement OFB'},
        {val:'Conductivité > 1 500 µS/cm', label:'Minéralisation excessive', t:'warn', action:'Rechercher rejets industriels ou agricoles (drains)'},
        {val:'pH < 6 ou > 9', label:'Perturbation chimique', t:'warn', action:'Source acide ou basique amont · Analyse complémentaire'},
        {val:'Tous paramètres dans normes', label:'Bon état physico-chimique', t:'ok', action:'Continuer le suivi selon plan de surveillance DCE'},
      ],
      norme:'Directive Cadre sur l\'Eau 2000/60/CE · NF EN ISO 5814 (O2) · NF T90-008 (pH) · Arrêté 25/01/2010 classes état',
      materiel:'Multi-sonde (ex. YSI Pro DSS, Aqua TROLL 500, Hach HQ40d) · Sonde optique O2 · Solutions calibration · Étui étanche IP68 · Perche télescopique 1,5 m',
      precautions:'Rincer 5 fois entre sites différents · Vérifier le capteur O2 optique (film protecteur intact) · Sonde adaptée eau douce et eau salée selon le contexte',
    },
    {
      ico:'🧲', name:'ADCP (profileur de courant acoustique)', cat:'Jaugeage avancé',
      usage:'Jaugeage en continu par bateau ou télécommandé · Indispensable en crue et sur grandes sections (largeur > 30 m)',
      principe:'Émission d\'ultrasons multifréquences à différents angles · Mesure de l\'effet Doppler sur les particules en suspension · Calcul du profil 3D des vitesses et du débit total',
      protocole:[
        'Monter l\'ADCP sur un catamaran ou embarcation · Vérifier l\'orientation et le compas magnétique',
        'Réaliser 4 traversées minimum (2 aller + 2 retour) pour moyenner les perturbations',
        'Exporter le fichier de données brutes (logiciel WinRiver II ou QRev)',
        'Vérifier la cohérence entre les 4 passages (variabilité < 5%)',
        'Calculer l\'incertitude selon la procédure ISO/TS 24154'
      ],
      interpretation:[
        {val:'Variabilité inter-passages > 10%', label:'Incertitude élevée', t:'warn', action:'Recommencer · Vérifier turbulences et chenal de navigation'},
        {val:'Débit ADCP cohérent avec tarage', label:'Fiable', t:'ok', action:'Archiver en banque HYDRO · Exporter pour modélisation'},
      ],
      svg: '<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto">'
        +'<rect x="0" y="30" width="300" height="130" fill="#BFDBFE" opacity="0.4"/>'
        +'<line x1="0" y1="30" x2="300" y2="30" stroke="#0891B2" stroke-width="2"/>'
        +'<text x="150" y="20" text-anchor="middle" font-size="9" fill="#0891B2" font-family="sans-serif">Surface libre · embarcation ou câble</text>'
        +'<rect x="0" y="155" width="300" height="25" fill="#D4A574" opacity="0.5"/>'
        +'<text x="150" y="168" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">Fond de rivière</text>'
        +'<rect x="130" y="20" width="40" height="20" rx="4" fill="#1550A0"/>'
        +'<text x="150" y="34" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700">ADCP</text>'
        +'<line x1="150" y1="40" x2="110" y2="110" stroke="#1550A0" stroke-width="1.5" stroke-dasharray="4,2"/>'
        +'<line x1="150" y1="40" x2="150" y2="120" stroke="#1550A0" stroke-width="1.5" stroke-dasharray="4,2"/>'
        +'<line x1="150" y1="40" x2="190" y2="110" stroke="#1550A0" stroke-width="1.5" stroke-dasharray="4,2"/>'
        +'<line x1="150" y1="40" x2="130" y2="130" stroke="#64748B" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>'
        +'<text x="90" y="125" font-size="8" fill="#1550A0" font-family="sans-serif">Fx1</text>'
        +'<text x="145" y="135" font-size="8" fill="#1550A0" font-family="sans-serif">Fx2</text>'
        +'<text x="185" y="125" font-size="8" fill="#1550A0" font-family="sans-serif">Fx3</text>'
        +'<text x="115" y="55" font-size="7" fill="#64748B" font-family="sans-serif">Cellules de mesure</text>'
        +'<circle cx="108" cy="60" r="3" fill="#1550A0" opacity="0.6"/>'
        +'<circle cx="120" cy="72" r="3" fill="#1550A0" opacity="0.6"/>'
        +'<circle cx="132" cy="84" r="3" fill="#1550A0" opacity="0.6"/>'
        +'<circle cx="144" cy="96" r="3" fill="#1550A0" opacity="0.6"/>'
        +'<text x="230" y="70" font-size="7" fill="#1550A0" font-family="sans-serif">Profil de vitesse</text>'
        +'<polyline points="215,45 230,55 225,70 235,85 228,100 238,115 232,130 242,145" fill="none" stroke="#1550A0" stroke-width="1.5"/>'
        +'<text x="150" y="178" text-anchor="middle" font-size="7" fill="#64748B" font-family="sans-serif">3–4 faisceaux · profils V par cellules 0,10–1,0 m · Q = Σ Vᵢ × Aᵢ</text>'
        +'</svg>',
      norme:'ISO/TS 24154 · NF EN ISO 6416 · Guide OFB ADCP 2020 · Protocole SCHAPI',
      materiel:'ADCP (ex. Teledyne RiverPro, SonTek RiverSurveyor) · Catamaran télécommandé ou motorisé · GPS RTK · Logiciel WinRiver II ou QRev · Gilet sauvetage',
      precautions:'Profondeur minimum 0,50 m · Ne pas utiliser si V > 4 m/s · Risques de choc catamaran en crue · Formation obligatoire (certification OFB recommandée)',
    },
  ]
};

/* ─── BANNIÈRE UPGRADE ─── */
function _outilsUpgradeBanner(module) {
  var labels = {anc:'Assainissement non collectif', ac:'Assainissement collectif', ep:'Eau potable', riv:'Milieu naturel'};
  return '<div style="background:linear-gradient(135deg,#1A0850,#2D1580);border-radius:var(--r-xl);padding:var(--s-4);margin:var(--s-3) var(--s-4);display:flex;align-items:center;gap:var(--s-3)">'
    + '<span style="font-size:28px">🔧</span>'
    + '<div style="flex:1">'
      + '<div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:3px">Outils de terrain — ' + (labels[module]||'') + '</div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.65);line-height:1.5">Les fiches techniques des outils de terrain sont réservées aux abonnements <strong style="color:#C8B4FF">Pro</strong> et <strong style="color:#C8B4FF">Établissement</strong>.</div>'
    + '</div>'
    + '<button onclick="openSidebar()" style="padding:8px 14px;background:#C8B4FF;color:#1A0850;border:none;border-radius:var(--r-pill);font-size:11px;font-weight:800;cursor:pointer;white-space:nowrap;flex-shrink:0">Voir les offres</button>'
  + '</div>';
}

/* ─── RENDER PRINCIPAL ─── */
function renderOutilsTerrain(module) {
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';

  var _tb = document.getElementById('tab-bar');
  if (_tb) _tb.style.display = 'none';

  var modLabels = {anc:'ANC', ac:'Assainissement collectif', ep:'Eau potable', riv:'Milieu naturel'};
  var modColors = {anc:'var(--c-anc)', ac:'var(--c-ac)', ep:'var(--c-ep)', riv:'var(--c-riv)'};
  var modIcos   = {anc:'🏡', ac:'🔧', ep:'💧', riv:'🌊'};
  var color = modColors[module] || 'var(--c-primary)';
  var colorl = color.replace(')', '-l)');
  var label = modLabels[module] || '';

  var html = '<div class="module-hero" style="--cat-color:' + color + '">'
    + '<button class="mh-back-btn" onclick="goHome()">‹ Accueil</button>'
    + '<span class="mh-icon">' + (modIcos[module]||'🔧') + '</span>'
    + '<div class="mh-title">Outils de terrain — ' + label + '</div>'
    + '<div class="mh-sub">Fiches techniques · Protocoles · Interprétation · Normes</div>'
    + '<div class="mh-tags"><span class="mh-tag">Pro & Établissement</span><span class="mh-tag">' + (OUTILS_DATA[module]||[]).length + ' fiches</span></div>'
  + '</div>';

  if (plan === 'free') {
    html += _outilsUpgradeBanner(module);
    document.getElementById('main-content').innerHTML = html + '<div class="pb-nav"></div>';
    return;
  }

  var outils = OUTILS_DATA[module] || [];
  html += '<div style="padding:var(--s-2) var(--s-4) 0">'
    + '<div class="alert info"><span class="alert-icon">ℹ</span><span>Cliquez sur chaque outil pour afficher le protocole complet, les critères d\'interprétation et les normes applicables.</span></div>'
    + '</div>'
    + '<div class="section-header">' + outils.length + ' outil' + (outils.length > 1 ? 's' : '') + ' de terrain<span class="sh-count">' + outils.length + '</span></div>'
    + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';

  outils.forEach(function(o, i) {
    var id = 'ot-' + module + '-' + i;
    html += '<div class="regl-card" style="border-left:3px solid ' + color + '">'
      + '<div onclick="toggleOutil(\'' + id + '\')" style="cursor:pointer;display:flex;align-items:flex-start;gap:var(--s-3);padding:var(--s-3) var(--s-4)">'
        + '<div class="rc-icon" style="background:' + colorl + ';font-size:22px;flex-shrink:0">' + o.ico + '</div>'
        + '<div style="flex:1;min-width:0">'
          + '<div class="rc-name">' + o.name + '</div>'
          + '<div style="display:flex;align-items:center;gap:var(--s-2);margin-top:3px">'
            + '<span class="badge badge-ok" style="font-size:9px">' + o.cat + '</span>'
            + '<div class="rc-ref" style="margin:0">' + o.usage.split('·')[0].trim() + '</div>'
          + '</div>'
        + '</div>'
        + '<span id="' + id + '-arr" style="font-size:22px;color:var(--c-text-4);transition:transform .22s;line-height:1;font-weight:300;flex-shrink:0">&#x203A;</span>'
      + '</div>'
      + '<div id="' + id + '" style="display:none;border-top:1px solid var(--c-border);padding:var(--s-3) var(--s-4)">'
        + '<div style="font-size:var(--t-sm);color:var(--c-text-2);line-height:1.7;margin-bottom:var(--s-3)">' + o.usage + '</div>'

        + '<div style="margin-bottom:var(--s-3)">'
          + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Principe de fonctionnement</div>'
          + '<div style="font-size:var(--t-sm);color:var(--c-text-2);line-height:1.7;background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3)">' + o.principe + '</div>'
        + '</div>'

        + (o.svg ? '<div style="margin-bottom:var(--s-3);text-align:center;background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3)">' + o.svg + '</div>' : '')

        + '<div style="margin-bottom:var(--s-3)">'
          + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Protocole terrain</div>'
          + '<div style="display:flex;flex-direction:column;gap:5px">'
          + o.protocole.map(function(p, pi) {
              return '<div style="display:flex;gap:var(--s-2);font-size:var(--t-sm);color:var(--c-text-2);line-height:1.6">'
                + '<span style="font-weight:800;color:' + color + ';flex-shrink:0;min-width:18px">' + (pi + 1) + '.</span>'
                + '<span>' + p + '</span>'
              + '</div>';
            }).join('')
          + '</div>'
        + '</div>'

        + '<div style="margin-bottom:var(--s-3)">'
          + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Interprétation des résultats</div>'
          + '<div style="display:flex;flex-direction:column;gap:var(--s-2)">'
          + o.interpretation.map(function(r) {
              return '<div class="alert ' + r.t + '" style="flex-direction:column;align-items:flex-start;gap:3px">'
                + '<div style="display:flex;align-items:center;gap:var(--s-2);width:100%">'
                  + '<span style="font-size:10px;font-weight:800;font-family:var(--f-mono)">' + r.val + '</span>'
                  + '<span class="badge badge-' + (r.t === 'ok' ? 'ok' : r.t === 'danger' ? 'danger' : 'warn') + '" style="font-size:9px;margin-left:auto">' + r.label + '</span>'
                + '</div>'
                + '<div style="font-size:10px;color:var(--c-text-2)">→ ' + r.action + '</div>'
              + '</div>';
            }).join('')
          + '</div>'
        + '</div>'

        + '<div class="kv-grid" style="margin-bottom:var(--s-3)">'
          + '<div class="kv-item" style="grid-column:1/-1"><div class="kv-key">Matériel nécessaire</div><div class="kv-val" style="font-size:11px;line-height:1.6">' + o.materiel + '</div></div>'
          + '<div class="kv-item" style="grid-column:1/-1"><div class="kv-key">Précautions & sécurité</div><div class="kv-val" style="font-size:11px;line-height:1.6;color:var(--c-danger)">' + o.precautions + '</div></div>'
          + '<div class="kv-item" style="grid-column:1/-1"><div class="kv-key">Normes & références</div><div class="kv-val" style="font-size:11px">' + o.norme + '</div></div>'
        + '</div>'
        + '<button id="' + id + '-save" onclick="saveOutilToReport(\'' + module + '\',' + i + ',this)" '
          + 'style="width:100%;padding:9px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px">'
          + '💾 Ajouter cette fiche au rapport</button>'
      + '</div>'
    + '</div>';
  });

  html += '</div><div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

/* ─── SAUVEGARDE FICHE OUTIL DANS LE RAPPORT ─── */
function saveOutilToReport(module, idx, btn) {
  if (!AUTH.user) { authToast('Connectez-vous pour enregistrer'); return; }
  var o = (OUTILS_DATA[module] || [])[idx];
  if (!o) return;

  var modLabels = {anc:'ANC', ac:'Assainissement collectif', ep:'Eau potable', riv:'Milieu naturel'};

  /* Texte brut structuré pour ODT/DOCX */
  var detail = 'USAGE : ' + o.usage
    + '\n\nPRINCIPE : ' + o.principe
    + '\n\nPROTOCOLE :\n' + o.protocole.map(function(p, i) { return (i+1) + '. ' + p; }).join('\n')
    + '\n\nINTERPRÉTATION :\n' + o.interpretation.map(function(r) {
        return '• ' + r.val + ' → ' + r.label + ' : ' + r.action;
      }).join('\n')
    + '\n\nMATÉRIEL : ' + o.materiel
    + '\n\nPRÉCAUTIONS : ' + o.precautions
    + '\n\nNORMES : ' + o.norme;

  var entry = {
    type:   'outil',
    module: 'Outils terrain — ' + (modLabels[module] || module),
    valeur: o.ico + ' ' + o.name,
    detail: detail,
    outil:  o,       /* données complètes pour rendu HTML riche */
    date:   Date.now()
  };

  var arr = getSavedCalcs();
  /* Éviter les doublons (même nom déjà sauvegardé aujourd'hui) */
  var today = new Date().toDateString();
  var exists = arr.some(function(c) {
    return c.type === 'outil' && c.valeur === entry.valeur
      && new Date(c.date).toDateString() === today;
  });
  if (exists) { authToast('Fiche déjà ajoutée au rapport ✓'); return; }

  arr.unshift(entry);
  if (arr.length > 50) arr = arr.slice(0, 50);
  setSavedCalcs(arr);

  /* Feedback visuel sur le bouton */
  if (btn) {
    btn.textContent = '✓ Fiche ajoutée au rapport';
    btn.style.background = 'var(--c-ok)';
    btn.disabled = true;
    setTimeout(function() {
      btn.innerHTML = '💾 Ajouter cette fiche au rapport';
      btn.style.background = 'var(--c-primary)';
      btn.disabled = false;
    }, 3000);
  }
  authToast('Fiche "' + o.name + '" ajoutée au rapport ✓');
}

function toggleOutil(id) {
  var b = document.getElementById(id);
  var a = document.getElementById(id + '-arr');
  if (!b) return;
  var open = b.style.display === 'block';
  b.style.display = open ? 'none' : 'block';
  if (a) a.style.transform = open ? '' : 'rotate(90deg)';
}
