/* ═══════════════════════════════════════════════════════════
   MODULE ANC — ASSAINISSEMENT NON COLLECTIF
   Portail structuré · Catégories · Fiches 3 niveaux · SVG
   ═══════════════════════════════════════════════════════════ */

/* ─── CATÉGORIES ─── */
var ANC_CATS = {
  primary:    { id:'primary',    label:'Traitement primaire',    ico:'🔵', color:'#1550A0', colorl:'#E6EEF8', regl:'Prétraitement — Arrêté 07/09/2009' },
  secondary:  { id:'secondary',  label:'Traitement secondaire',  ico:'🟢', color:'#059669', colorl:'#D1FAE5', regl:'Traitement — Arrêté 07/09/2009' },
  evacuation: { id:'evacuation', label:'Évacuation',             ico:'💧', color:'#0891B2', colorl:'#CFFAFE', regl:'Devenir des eaux traitées — conditions réglementaires' },
  annexe:     { id:'annexe',     label:'Équipements annexes',    ico:'🔧', color:'#64748B', colorl:'#F1F5F9', regl:'Distribution · Contrôle · Relevage · Ventilation' },
  cas:        { id:'cas',        label:'Cas particuliers',       ico:'⚠️',  color:'#D97706', colorl:'#FEF3C7', regl:'Situations spécifiques — analyse individuelle requise' },
};

var ANC_SUBCAT_LABELS = {
  pretraitement: 'Prétraitement',
  sol_en_place:  'Sol en place',
  massif:        'Massifs filtrants',
  compact:       'Filières compactes agréées',
  micro:         'Microstations',
  fpr:           'Filtres plantés (FPR)',
  infiltration:  'Infiltration dans le sol',
  rejet_milieu:  'Rejet en milieu superficiel',
  distribution:  'Distribution',
  controle:      'Contrôle',
  relevage:      'Relevage',
  ventilation_s: 'Ventilation',
};

/* ─── DONNÉES ENRICHIES PAR OUVRAGE ─── */
var ANC_EXTRA = {
  'fosse-toutes-eaux': {
    cat:'primary', subcat:'pretraitement',
    essentiel:'Reçoit toutes les eaux usées domestiques et assure le prétraitement par décantation, flottation et digestion partielle. Le traitement n\'est pas complet — un traitement secondaire est obligatoire en aval.',
    points:['Toutes eaux : WC + douche + cuisine + linge — les eaux pluviales sont strictement exclues','3 zones : flottants (haut) · zone liquide (milieu) · boues (fond)','Vidange obligatoire quand les boues atteignent 50 % du volume utile','Ventilation obligatoire Ø ≥ 100 mm sortant au-dessus du faîtage'],
    chainPrev:['🏠 Habitation'],
    chainNext:['Traitement secondaire','Évacuation'],
    linkedCalcs:[{label:'Calculer le volume',id:'calc-anc'}],
    danger:'⚠ ESPACE CONFINÉ — Gaz toxiques (H₂S, méthane). Ne jamais descendre dans une fosse.',
  },
  'fosse-septique': {
    cat:'primary', subcat:'pretraitement',
    essentiel:'Ancien ouvrage recevant uniquement les eaux-vannes (WC). Interdit à neuf depuis 2009. Sa présence impose de retracer le circuit complet des eaux ménagères — souvent non-conforme.',
    points:['Eaux-vannes uniquement (WC) — les eaux ménagères suivaient un autre circuit','Interdite à neuf depuis le 31/12/2009','Nécessite un diagnostic complet de l\'installation existante','Ne pas confondre avec une fosse toutes eaux'],
    chainPrev:['🏠 Habitation (WC uniquement)'],
    chainNext:['Traitement secondaire (eaux-vannes)','? Eaux ménagères — circuit à identifier'],
    linkedCalcs:[],
    danger:'⚠ ESPACE CONFINÉ — Gaz toxiques. Ne jamais descendre sans équipement adapté.',
  },
  'bac-a-graisses': {
    cat:'primary', subcat:'pretraitement',
    essentiel:'Intercepte les graisses issues de la cuisine avant qu\'elles n\'atteignent la fosse ou la filière aval. Petit volume — entretien bien plus fréquent qu\'une fosse.',
    points:['Cuisine uniquement — pas les autres eaux usées','Retient les graisses par flottation naturelle','Nettoyage fréquent requis (mensuel à trimestriel selon usage)','Un bac saturé colmate rapidement la filière aval'],
    chainPrev:['🏠 Cuisine'],
    chainNext:['Fosse toutes eaux / Réseau ANC'],
    linkedCalcs:[],
  },
  'prefiltre': {
    cat:'primary', subcat:'pretraitement',
    essentiel:'Protège le traitement secondaire des matières en suspension résiduelles sortant de la fosse. Un colmatage anormalement rapide signale un problème en amont.',
    points:['Positionné en sortie de fosse, avant le traitement secondaire','Retient les matières en suspension résiduelles','Colmatage rapide = signe d\'alerte à chercher en amont (fosse)','Nettoyage sans envoyer les matières vers le traitement secondaire'],
    chainPrev:['Fosse toutes eaux'],
    chainNext:['Traitement secondaire'],
    linkedCalcs:[],
  },
  'regard-repartition': {
    cat:'annexe', subcat:'distribution',
    essentiel:'Distribue équitablement l\'effluent prétraité entre plusieurs branches de traitement. Un mauvais calage entraîne surcharge et sous-charge alternées, réduisant les performances globales.',
    points:['Calé rigoureusement à l\'horizontal pour une répartition uniforme','Une branche sèche + une autre en surcharge = répartiteur défaillant ou obstrué','Doit rester accessible en permanence','Surveiller les racines et les obstructions'],
    chainPrev:['Fosse toutes eaux / Préfiltre'],
    chainNext:['Tranchées d\'épandage (×N)','Filtres (×N)'],
    linkedCalcs:[],
  },
  'tranchees-epandage': {
    cat:'secondary', subcat:'sol_en_place',
    essentiel:'Dispositif de traitement secondaire le plus répandu. L\'épuration se fait par interaction entre l\'effluent, le sol naturel, les microorganismes et l\'oxygène. Le sol est à la fois support de traitement et milieu récepteur.',
    points:['Le sol naturel = filtre + biofilm bactérien — pas un simple sol de passage','Dimensionnement par test Porchet (perméabilité K = 1–15 mm/min)','Surface = EH × 200 / (K en m/j × 1000)','Aucune circulation ni construction au-dessus de la zone d\'épandage'],
    chainPrev:['Fosse toutes eaux','Boîte de répartition'],
    chainNext:['Sol naturel / Évacuation par infiltration'],
    linkedCalcs:[{label:'Surface épandage',id:'calc-anc'},{label:'Test Porchet',id:'calc-anc'}],
  },
  'lit-epandage': {
    cat:'secondary', subcat:'sol_en_place',
    essentiel:'Principe voisin des tranchées avec une distribution organisée sur une zone filtrante. Même mécanisme de traitement par le sol naturel en place.',
    points:['Alternative aux tranchées selon la topographie du terrain','Distribution uniforme sur la surface filtrante','Sol naturel = support de traitement','Aucune circulation au-dessus du lit'],
    chainPrev:['Fosse toutes eaux'],
    chainNext:['Sol naturel / Évacuation'],
    linkedCalcs:[{label:'Surface épandage',id:'calc-anc'}],
  },
  'fsv-nd': {
    cat:'secondary', subcat:'massif',
    essentiel:'Massif filtrant artificiel en sable utilisé quand le sol en place ne convient pas. Non drainé : l\'eau épurée s\'infiltre naturellement sous le massif dans le sol naturel.',
    points:['Sable de granulométrie définie : 0,25–2 mm, lavé','Charge hydraulique : 0,08 m/j → surface = EH × 150 / 80','Infiltration naturelle sous le massif — perméabilité du sol naturel requise','Aucune imperméabilisation de la surface du filtre'],
    chainPrev:['Fosse toutes eaux','Boîte de répartition'],
    chainNext:['Sol naturel / Évacuation par infiltration'],
    linkedCalcs:[{label:'Surface filtre sable',id:'calc-anc'}],
  },
  'fsv-d': {
    cat:'secondary', subcat:'massif',
    essentiel:'Variante drainée du filtre à sable : les drains en fond de massif collectent l\'eau épurée vers un exutoire autorisé. Un rejet drainé n\'est jamais automatiquement autorisé.',
    points:['Drains en fond collectent l\'eau épurée vers un regard de sortie','Exutoire réglementaire obligatoire : accord propriétaire du fossé ou autorisation','Charge hydraulique : 0,10 m/j','Filière drainée ≠ rejet autorisé de fait'],
    chainPrev:['Fosse toutes eaux'],
    chainNext:['Regard de sortie','Exutoire autorisé (fossé, milieu)'],
    linkedCalcs:[{label:'Surface filtre sable drainé',id:'calc-anc'}],
  },
  'tertre': {
    cat:'secondary', subcat:'massif',
    essentiel:'Massif de sable construit EN ÉLÉVATION au-dessus du terrain naturel. Utilisé en nappe affleurante, zone humide ou terrain peu perméable. Peut nécessiter un poste de relevage.',
    points:['Construit hors sol : 0,5 à 1,5 m au-dessus du terrain naturel','Nécessaire en zone inondable ou nappe affleurante','Poste de relevage souvent nécessaire pour amener l\'effluent','Charge hydraulique : 0,12 m/j'],
    chainPrev:['Fosse toutes eaux','Poste de relevage (si nécessaire)'],
    chainNext:['Sol naturel / Évacuation par infiltration à la base du tertre'],
    linkedCalcs:[{label:'Surface tertre',id:'calc-anc'}],
  },
  'poste-relevage': {
    cat:'annexe', subcat:'relevage',
    essentiel:'Pompe les effluents quand la gravité est insuffisante. Panne critique : sans alarme, le refoulement vers l\'habitation est possible. Entretien régulier indispensable.',
    points:['Déclenchement automatique par flotteur ou capteur de niveau','Alarme niveau haut = sécurité essentielle à maintenir active','Panne = risque de refoulement — intervention rapide nécessaire','Vérifier coffret électrique, pompe et flotteurs périodiquement'],
    chainPrev:['Fosse toutes eaux / Prétraitement'],
    chainNext:['Tertre / Filtre en point haut'],
    linkedCalcs:[{label:'Calculateurs AC/EP',id:'calc'}],
  },
  'filtre-compact': {
    cat:'secondary', subcat:'compact',
    essentiel:'Dispositif agréé CE à emprise réduite. Toutes les caractéristiques (entretien, fréquences, performances) dépendent de l\'agrément du modèle. Consulter impérativement le guide fabricant.',
    points:['Agrément CE obligatoire (NF EN 12566)','Emprise au sol réduite vs filières traditionnelles','Entretien uniquement selon le guide du dispositif agréé CE','Ne pas généraliser les spécifications d\'un modèle à toute la famille'],
    chainPrev:['Prétraitement primaire (selon dispositif)'],
    chainNext:['Évacuation selon dispositif agréé'],
    linkedCalcs:[],
  },
  'microstation-boues-activees': {
    cat:'secondary', subcat:'micro',
    essentiel:'Microstation biologique avec bactéries en suspension (boues activées) alimentées en air. Très efficace mais dépend de l\'électricité — une coupure prolongée détruit la biomasse.',
    points:['Aération continue ou intermittente selon modèle agréé','Coupure d\'air > 24–48h → mort de la biomasse → semaines de rétablissement','Contrat d\'entretien annuel obligatoire','Consulter exclusivement le guide d\'utilisation du dispositif agréé'],
    chainPrev:['Prétraitement selon modèle'],
    chainNext:['Évacuation selon agrément'],
    linkedCalcs:[],
  },
  'microstation-sbr': {
    cat:'secondary', subcat:'micro',
    essentiel:'Microstation à cycles séquentiels (remplissage → aération → décantation → évacuation) dans un réacteur unique géré par automate.',
    points:['4 phases alternées dans un même réacteur','Automate = composant critique — surveiller les alarmes de cycle','Performances définies par le guide du dispositif agréé','Électricité indispensable au fonctionnement'],
    chainPrev:['Prétraitement selon modèle'],
    chainNext:['Évacuation selon agrément'],
    linkedCalcs:[],
  },
  'microstation-culture-fixee': {
    cat:'secondary', subcat:'micro',
    essentiel:'Les bactéries colonisent des supports fixes. Plus résistant aux variations de charge et aux interruptions que les boues activées en suspension.',
    points:['Biofilm fixé sur supports (disques, anneaux, matériau de garnissage)','Plus résistant à l\'intermittence que les boues activées','Entretien selon le guide du dispositif agréé CE','Électricité indispensable'],
    chainPrev:['Prétraitement selon modèle'],
    chainNext:['Évacuation selon agrément'],
    linkedCalcs:[],
  },
  'filtre-plante': {
    cat:'secondary', subcat:'fpr',
    essentiel:'Filière extensive utilisant un massif filtrant végétalisé (roseaux). Le traitement est biologique dans la rhizosphère — les plantes participent mais ne sont pas le seul facteur d\'épuration.',
    points:['Traitement biologique dans la rhizosphère du massif filtrant','Les roseaux maintiennent la porosité et facilitent les échanges gazeux','Grande emprise au sol : 5 m²/EH en FPR vertical (mono-étage)','Gestion de la végétation obligatoire (fauche, désherbage espèces invasives)'],
    chainPrev:['Fosse toutes eaux'],
    chainNext:['Drainage / Évacuation'],
    linkedCalcs:[{label:'Surface FPR',id:'calc-anc'}],
  },
  'toilettes-seches': {
    cat:'cas', subcat:null,
    essentiel:'Système sans eau autorisé sous conditions réglementaires strictes. Une filière ANC pour les eaux ménagères reste OBLIGATOIRE même avec des toilettes sèches.',
    points:['Autorisé sous conditions (Arrêté 07/09/2009 art. 4 · Arrêté 10/07/2024)','Filière ANC eaux ménagères = obligatoire en parallèle','Gestion des sous-produits réglementée — épandage encadré','Ne jamais supprimer la filière eaux ménagères'],
    chainPrev:['🏠 Habitation (matières fécales uniquement)'],
    chainNext:['Compostage / valorisation encadrée (matières)','→ Filière ANC eaux ménagères (obligatoire, séparée)'],
    linkedCalcs:[],
  },
  'regard-collecte': {
    cat:'annexe', subcat:'controle',
    essentiel:'Boîte de visite permettant inspection, prélèvement et diagnostic de l\'écoulement. Obligatoirement accessible — un regard enterré rend le contrôle SPANC impossible.',
    points:['Accessible en permanence — aucun enfouissement définitif','Couvercle fermé = sécurité + étanchéité aux odeurs','Permet prélèvement et inspection visuelle de l\'effluent','Inaccessibilité = non-conformité possible lors du contrôle SPANC'],
    chainPrev:['Traitement secondaire / Drains de collecte'],
    chainNext:['Évacuation / Rejet'],
    linkedCalcs:[],
  },
  'ventilation': {
    cat:'annexe', subcat:'ventilation_s',
    essentiel:'Évacue les gaz produits par la digestion anaérobie (méthane, H₂S). Obligatoire, Ø ≥ 100 mm. Des odeurs dans l\'habitation indiquent souvent une ventilation défaillante — à vérifier EN PRIORITÉ.',
    points:['Obligatoire pour toute fosse toutes eaux — Ø ≥ 100 mm','Sortie au-dessus du faîtage de toiture','H₂S toxique + méthane inflammable : ne jamais obstruer ni supprimer','Odeurs dans l\'habitation → vérifier ventilation avant d\'ouvrir la fosse'],
    chainPrev:['Fosse toutes eaux (gaz produits par digestion anaérobie)'],
    chainNext:['Atmosphère extérieure (toiture)'],
    linkedCalcs:[],
    danger:'⚠ H₂S toxique + méthane inflammable — ne jamais obstruer.',
  },
  'evacuation-infiltration': {
    cat:'evacuation', subcat:'infiltration',
    essentiel:'Restitution de l\'eau traitée au sol. Mode naturel et préférentiel. Conditionné par la perméabilité du sol, la profondeur de nappe et l\'éloignement des captages.',
    points:['Test Porchet indispensable pour valider la perméabilité','Distance minimale 35 m de tout captage AEP','Nappe < 0,7 m du fond de filière → filière drainée ou tertre requis','Ne pas confondre traitement et évacuation'],
    chainPrev:['Traitement secondaire complet'],
    chainNext:['Sol / Nappe phréatique'],
    linkedCalcs:[{label:'Test Porchet / Perméabilité',id:'calc-anc'}],
  },
  'rejet-milieu': {
    cat:'evacuation', subcat:'rejet_milieu',
    essentiel:'Rejet de l\'eau traitée vers un fossé ou cours d\'eau. JAMAIS automatique — nécessite une autorisation et un traitement complet préalable.',
    points:['Autorisation préfectorale ou accord du propriétaire de l\'exutoire requis','Traitement complet = condition sine qua non','Un filtre drainé ≠ autorisation de rejet automatique','Arrêté préfectoral peut imposer des seuils de qualité de rejet'],
    chainPrev:['Traitement secondaire complet'],
    chainNext:['Fossé / Cours d\'eau / Milieu superficiel'],
    linkedCalcs:[],
  },
  'installation-agricole': {
    cat:'cas', subcat:null,
    essentiel:'Une fosse à lisier ou à purin n\'est PAS une fosse toutes eaux ANC. Cadre réglementaire distinct (ICPE, RSD). Ne jamais conclure automatiquement à la conformité ANC.',
    points:['Effluents agricoles ≠ eaux usées domestiques','Réglementation ICPE ou RSD selon les seuils d\'élevage','Mélange flux domestiques/agricoles = cas à analyser individuellement','Ne jamais conclure à la conformité sans identifier tous les flux et leur statut réglementaire'],
    chainPrev:['Exploitation agricole (effluents spécifiques)'],
    chainNext:['Stockage / Épandage réglementé (ICPE / RSD)'],
    linkedCalcs:[],
  },
};

/* ─── HELPER : récupère la fiche complète ─── */
function _ancGetFiche(id) {
  var base = (typeof FICHES_ANC !== 'undefined') ? FICHES_ANC.find(function(x){ return x.id === id; }) : null;
  var extra = ANC_EXTRA[id] || {};
  if (!base) return null;
  return Object.assign({}, base, extra);
}

/* ─── SVG SCHEMAS ─── */
function _ancSVG(id) {
  var svgs = {
'fosse-toutes-eaux': '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<rect x="70" y="60" width="160" height="110" rx="6" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/>'
  +'<rect x="72" y="62" width="156" height="28" rx="3" fill="#C7D2FE"/>'
  +'<text x="150" y="81" text-anchor="middle" font-size="10" font-weight="700" fill="#3730A3" font-family="sans-serif">Flottants / graisses</text>'
  +'<rect x="72" y="90" width="156" height="42" fill="#BFDBFE"/>'
  +'<text x="150" y="115" text-anchor="middle" font-size="10" font-weight="600" fill="#1E40AF" font-family="sans-serif">Zone liquide</text>'
  +'<rect x="72" y="132" width="156" height="36" rx="3" fill="#D97706" opacity="0.35"/>'
  +'<text x="150" y="155" text-anchor="middle" font-size="10" font-weight="700" fill="#78350F" font-family="sans-serif">Boues</text>'
  +'<line x1="10" y1="95" x2="70" y2="95" stroke="#1550A0" stroke-width="3"/>'
  +'<polygon points="64,90 64,100 75,95" fill="#1550A0"/>'
  +'<text x="38" y="87" text-anchor="middle" font-size="9" fill="#1550A0" font-family="sans-serif">Entrée</text>'
  +'<line x1="230" y1="95" x2="290" y2="95" stroke="#1550A0" stroke-width="3"/>'
  +'<polygon points="236,90 236,100 225,95" fill="#1550A0"/>'
  +'<text x="262" y="87" text-anchor="middle" font-size="9" fill="#1550A0" font-family="sans-serif">Sortie</text>'
  +'<line x1="150" y1="60" x2="150" y2="22" stroke="#64748B" stroke-width="2" stroke-dasharray="4,3"/>'
  +'<polygon points="145,26 155,26 150,14" fill="#64748B"/>'
  +'<text x="150" y="11" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Ventilation Ø≥100</text>'
  +'<rect x="138" y="55" width="24" height="7" rx="2" fill="#94A3B8"/>'
  +'<text x="150" y="190" text-anchor="middle" font-size="9" fill="#64748B" font-family="sans-serif">Tampon d\'accès</text>'
  +'</svg>',

'tranchees-epandage': '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<line x1="10" y1="75" x2="290" y2="75" stroke="#92400E" stroke-width="1.5"/>'
  +'<text x="8" y="68" font-size="9" fill="#92400E" font-family="sans-serif">Terrain naturel</text>'
  +'<rect x="30" y="75" width="240" height="70" fill="#FEF3C7" stroke="#D97706" stroke-width="1" stroke-dasharray="3,3"/>'
  +'<circle cx="80" cy="100" r="8" fill="none" stroke="#1550A0" stroke-width="2"/>'
  +'<circle cx="80" cy="100" r="3" fill="#1550A0"/>'
  +'<circle cx="150" cy="100" r="8" fill="none" stroke="#1550A0" stroke-width="2"/>'
  +'<circle cx="150" cy="100" r="3" fill="#1550A0"/>'
  +'<circle cx="220" cy="100" r="8" fill="none" stroke="#1550A0" stroke-width="2"/>'
  +'<circle cx="220" cy="100" r="3" fill="#1550A0"/>'
  +'<text x="150" y="120" text-anchor="middle" font-size="9" fill="#92400E" font-family="sans-serif">Gravier — matériau de répartition</text>'
  +'<rect x="20" y="145" width="260" height="45" fill="#D4A574" opacity="0.4"/>'
  +'<text x="150" y="163" text-anchor="middle" font-size="10" font-weight="600" fill="#78350F" font-family="sans-serif">Sol naturel en place</text>'
  +'<text x="150" y="178" text-anchor="middle" font-size="9" fill="#92400E" font-family="sans-serif">Biofilm bactérien · filtration · épuration</text>'
  +'<text x="80" y="88" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">Drain perforé</text>'
  +'<line x1="80" y1="108" x2="80" y2="145" stroke="#059669" stroke-width="1.5" marker-end="url(#arr)"/>'
  +'<line x1="150" y1="108" x2="150" y2="145" stroke="#059669" stroke-width="1.5"/>'
  +'<line x1="220" y1="108" x2="220" y2="145" stroke="#059669" stroke-width="1.5"/>'
  +'<defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#059669"/></marker></defs>'
  +'</svg>',

'fsv-nd': '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<text x="150" y="15" text-anchor="middle" font-size="9" fill="#1550A0" font-family="sans-serif">Distribution (tuyaux perforés)</text>'
  +'<line x1="40" y1="22" x2="260" y2="22" stroke="#1550A0" stroke-width="2"/>'
  +'<circle cx="80" cy="22" r="4" fill="#1550A0"/><circle cx="150" cy="22" r="4" fill="#1550A0"/><circle cx="220" cy="22" r="4" fill="#1550A0"/>'
  +'<line x1="80" y1="22" x2="80" y2="35" stroke="#1550A0" stroke-width="1.5"/>'
  +'<line x1="150" y1="22" x2="150" y2="35" stroke="#1550A0" stroke-width="1.5"/>'
  +'<line x1="220" y1="22" x2="220" y2="35" stroke="#1550A0" stroke-width="1.5"/>'
  +'<rect x="30" y="35" width="240" height="20" fill="#D9F99D"/>'
  +'<text x="150" y="49" text-anchor="middle" font-size="9" fill="#365314" font-family="sans-serif">Couche de répartition</text>'
  +'<rect x="30" y="55" width="240" height="90" fill="#FEF9C3"/>'
  +'<text x="150" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#713F12" font-family="sans-serif">SABLE</text>'
  +'<text x="150" y="107" text-anchor="middle" font-size="9" fill="#92400E" font-family="sans-serif">0,25–2 mm lavé · biofilm bactérien</text>'
  +'<text x="150" y="122" text-anchor="middle" font-size="9" fill="#92400E" font-family="sans-serif">épaisseur ≥ 0,70 m</text>'
  +'<line x1="80" y1="36" x2="80" y2="145" stroke="#059669" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>'
  +'<line x1="150" y1="36" x2="150" y2="145" stroke="#059669" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>'
  +'<line x1="220" y1="36" x2="220" y2="145" stroke="#059669" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>'
  +'<rect x="20" y="145" width="260" height="40" fill="#D4A574" opacity="0.4"/>'
  +'<text x="150" y="165" text-anchor="middle" font-size="9" fill="#78350F" font-family="sans-serif">Sol naturel — infiltration (non drainé)</text>'
  +'<text x="150" y="195" text-anchor="middle" font-size="8" fill="#0891B2" font-family="sans-serif">Eau épurée s\'infiltre vers nappe</text>'
  +'</svg>',

'fsv-d': '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<text x="150" y="15" text-anchor="middle" font-size="9" fill="#1550A0" font-family="sans-serif">Distribution (tuyaux perforés)</text>'
  +'<line x1="40" y1="22" x2="260" y2="22" stroke="#1550A0" stroke-width="2"/>'
  +'<circle cx="80" cy="22" r="4" fill="#1550A0"/><circle cx="150" cy="22" r="4" fill="#1550A0"/><circle cx="220" cy="22" r="4" fill="#1550A0"/>'
  +'<line x1="80" y1="22" x2="80" y2="35" stroke="#1550A0" stroke-width="1.5"/>'
  +'<line x1="150" y1="22" x2="150" y2="35" stroke="#1550A0" stroke-width="1.5"/>'
  +'<line x1="220" y1="22" x2="220" y2="35" stroke="#1550A0" stroke-width="1.5"/>'
  +'<rect x="30" y="35" width="240" height="20" fill="#D9F99D"/>'
  +'<text x="150" y="49" text-anchor="middle" font-size="9" fill="#365314" font-family="sans-serif">Couche de répartition</text>'
  +'<rect x="30" y="55" width="240" height="80" fill="#FEF9C3"/>'
  +'<text x="150" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="#713F12" font-family="sans-serif">SABLE · 0,25–2 mm</text>'
  +'<text x="150" y="102" text-anchor="middle" font-size="9" fill="#92400E" font-family="sans-serif">Biofilm · épuration biologique</text>'
  +'<rect x="30" y="135" width="240" height="16" fill="#E6EEF8"/>'
  +'<circle cx="80" cy="143" r="5" fill="none" stroke="#1550A0" stroke-width="2"/>'
  +'<circle cx="150" cy="143" r="5" fill="none" stroke="#1550A0" stroke-width="2"/>'
  +'<circle cx="220" cy="143" r="5" fill="none" stroke="#1550A0" stroke-width="2"/>'
  +'<text x="150" y="128" text-anchor="middle" font-size="9" fill="#1550A0" font-family="sans-serif">Drains de collecte Ø 100</text>'
  +'<line x1="30" y1="143" x2="290" y2="143" stroke="#1550A0" stroke-width="2"/>'
  +'<line x1="290" y1="143" x2="290" y2="175" stroke="#0891B2" stroke-width="2.5"/>'
  +'<rect x="275" y="175" width="22" height="16" rx="2" fill="#CFFAFE" stroke="#0891B2" stroke-width="1.5"/>'
  +'<text x="286" y="187" text-anchor="middle" font-size="8" fill="#0891B2" font-family="sans-serif">Regard</text>'
  +'<line x1="297" y1="183" x2="297" y2="210" stroke="#0891B2" stroke-width="2"/>'
  +'<text x="250" y="207" text-anchor="middle" font-size="9" fill="#D97706" font-family="sans-serif">⚠ Exutoire autorisé requis</text>'
  +'</svg>',

'microstation-boues-activees': '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<rect x="20" y="30" width="70" height="130" rx="5" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/>'
  +'<text x="55" y="60" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif" font-weight="700">PRÉ-</text>'
  +'<text x="55" y="72" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif" font-weight="700">TRAITEMENT</text>'
  +'<rect x="110" y="30" width="90" height="130" rx="5" fill="#D1FAE5" stroke="#059669" stroke-width="2"/>'
  +'<text x="155" y="58" text-anchor="middle" font-size="8" fill="#065F46" font-family="sans-serif" font-weight="700">RÉACTEUR</text>'
  +'<text x="155" y="70" text-anchor="middle" font-size="8" fill="#065F46" font-family="sans-serif" font-weight="700">BIOLOGIQUE</text>'
  +'<circle cx="130" cy="110" r="4" fill="none" stroke="#059669" stroke-width="1.5"/>'
  +'<circle cx="148" cy="118" r="3" fill="none" stroke="#059669" stroke-width="1.5"/>'
  +'<circle cx="166" cy="108" r="5" fill="none" stroke="#059669" stroke-width="1.5"/>'
  +'<circle cx="182" cy="120" r="3" fill="none" stroke="#059669" stroke-width="1.5"/>'
  +'<text x="155" y="140" text-anchor="middle" font-size="8" fill="#065F46" font-family="sans-serif">○ Aération / bactéries</text>'
  +'<rect x="215" y="30" width="65" height="130" rx="5" fill="#CFFAFE" stroke="#0891B2" stroke-width="2"/>'
  +'<text x="247" y="60" text-anchor="middle" font-size="8" fill="#0E4F66" font-family="sans-serif" font-weight="700">CLARIFI-</text>'
  +'<text x="247" y="72" text-anchor="middle" font-size="8" fill="#0E4F66" font-family="sans-serif" font-weight="700">CATION</text>'
  +'<line x1="90" y1="95" x2="110" y2="95" stroke="#1550A0" stroke-width="2" marker-end="url(#a2)"/>'
  +'<line x1="200" y1="95" x2="215" y2="95" stroke="#059669" stroke-width="2" marker-end="url(#a2)"/>'
  +'<line x1="280" y1="95" x2="298" y2="95" stroke="#0891B2" stroke-width="2"/>'
  +'<text x="150" y="185" text-anchor="middle" font-size="8" fill="#D97706" font-family="sans-serif">⚡ Électricité indispensable — Agrément CE</text>'
  +'<text x="10" y="24" font-size="9" fill="#1550A0" font-family="sans-serif">Entrée →</text>'
  +'<text x="262" y="90" font-size="9" fill="#0891B2" font-family="sans-serif">→ Sortie</text>'
  +'<defs><marker id="a2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#1550A0"/></marker></defs>'
  +'</svg>',

'poste-relevage': '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<line x1="10" y1="80" x2="90" y2="80" stroke="#1550A0" stroke-width="3"/>'
  +'<polygon points="85,75 85,85 96,80" fill="#1550A0"/>'
  +'<text x="45" y="72" text-anchor="middle" font-size="9" fill="#1550A0" font-family="sans-serif">Arrivée</text>'
  +'<rect x="95" y="40" width="120" height="150" rx="8" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/>'
  +'<text x="155" y="60" text-anchor="middle" font-size="8" fill="#D97706" font-family="sans-serif" font-weight="700">⚠ Niveau haut</text>'
  +'<line x1="105" y1="65" x2="205" y2="65" stroke="#D97706" stroke-width="1.5" stroke-dasharray="4,3"/>'
  +'<rect x="140" y="68" width="6" height="30" rx="3" fill="#64748B"/>'
  +'<circle cx="143" cy="103" r="8" fill="#94A3B8"/>'
  +'<text x="165" y="100" font-size="8" fill="#64748B" font-family="sans-serif">Flotteur</text>'
  +'<text x="105" y="130" font-size="8" fill="#059669" font-family="sans-serif">🔵 Niveau bas</text>'
  +'<line x1="105" y1="134" x2="205" y2="134" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/>'
  +'<rect x="130" y="155" width="50" height="22" rx="4" fill="#1550A0"/>'
  +'<text x="155" y="170" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif">POMPE</text>'
  +'<line x1="215" y1="95" x2="280" y2="95" stroke="#0891B2" stroke-width="3"/>'
  +'<line x1="280" y1="95" x2="280" y2="30" stroke="#0891B2" stroke-width="3"/>'
  +'<text x="252" y="88" font-size="9" fill="#0891B2" font-family="sans-serif">Refoulement</text>'
  +'<text x="155" y="200" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Alarme niveau haut = sécurité essentielle</text>'
  +'</svg>',

'ventilation': '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<polygon points="80,0 220,0 260,50 40,50" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1.5"/>'
  +'<text x="150" y="32" text-anchor="middle" font-size="9" fill="#64748B" font-family="sans-serif">Toiture</text>'
  +'<text x="150" y="10" text-anchor="middle" font-size="9" fill="#64748B" font-family="sans-serif">Sortie ↑</text>'
  +'<line x1="150" y1="50" x2="150" y2="90" stroke="#64748B" stroke-width="3" stroke-dasharray="5,3"/>'
  +'<text x="165" y="75" font-size="9" fill="#64748B" font-family="sans-serif">Ø ≥ 100 mm</text>'
  +'<rect x="30" y="90" width="240" height="8" fill="#E2E8F0"/>'
  +'<text x="235" y="102" font-size="8" fill="#64748B" font-family="sans-serif">Plancher</text>'
  +'<rect x="80" y="130" width="140" height="70" rx="6" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/>'
  +'<text x="150" y="155" text-anchor="middle" font-size="10" font-weight="700" fill="#1550A0" font-family="sans-serif">FOSSE</text>'
  +'<text x="150" y="170" text-anchor="middle" font-size="9" fill="#1550A0" font-family="sans-serif">Toutes Eaux</text>'
  +'<text x="100" y="185" font-size="8" fill="#92400E" font-family="sans-serif">CH₄ H₂S CO₂↑</text>'
  +'<line x1="150" y1="130" x2="150" y2="98" stroke="#64748B" stroke-width="3"/>'
  +'<line x1="10" y1="150" x2="80" y2="150" stroke="#1550A0" stroke-width="2.5"/>'
  +'<polygon points="75,145 75,155 86,150" fill="#1550A0"/>'
  +'<text x="40" y="142" font-size="8" fill="#1550A0" font-family="sans-serif">WC/Réseau</text>'
  +'<line x1="220" y1="150" x2="280" y2="150" stroke="#059669" stroke-width="2.5"/>'
  +'<polygon points="225,145 225,155 214,150" fill="#059669"/>'
  +'<text x="252" y="142" font-size="8" fill="#059669" font-family="sans-serif">Vers filière</text>'
  +'<text x="150" y="210" text-anchor="middle" font-size="8" fill="#D97706" font-family="sans-serif">⚠ Ne jamais condamner ni obstruer</text>'
  +'</svg>',

'tertre-infiltration': '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<defs><marker id="ta" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#059669"/></marker></defs>'
  +'<line x1="0" y1="135" x2="300" y2="135" stroke="#92400E" stroke-width="1.5"/>'
  +'<text x="5" y="148" font-size="8" fill="#92400E" font-family="sans-serif">Sol naturel (nappe haute)</text>'
  +'<polygon points="40,135 65,55 235,55 260,135" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>'
  +'<rect x="72" y="68" width="156" height="35" fill="#FEF9C3" stroke="#CA8A04" stroke-width="1.5"/>'
  +'<text x="150" y="84" text-anchor="middle" font-size="9" fill="#713F12" font-family="sans-serif" font-weight="700">MASSIF SABLE 0,25–4 mm</text>'
  +'<text x="150" y="96" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">épaisseur ≥ 0,70 m</text>'
  +'<rect x="72" y="58" width="156" height="12" fill="#D9F99D"/>'
  +'<text x="150" y="68" text-anchor="middle" font-size="8" fill="#365314" font-family="sans-serif">Couche répartition — gravier 20/40</text>'
  +'<line x1="72" y1="62" x2="228" y2="62" stroke="#1550A0" stroke-width="2"/>'
  +'<circle cx="100" cy="62" r="3" fill="#1550A0"/><circle cx="150" cy="62" r="3" fill="#1550A0"/><circle cx="200" cy="62" r="3" fill="#1550A0"/>'
  +'<text x="150" y="52" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">Tuyaux de distribution perforés</text>'
  +'<line x1="0" y1="100" x2="72" y2="88" stroke="#1550A0" stroke-width="2.5"/>'
  +'<polygon points="67,83 67,93 78,88" fill="#1550A0"/>'
  +'<text x="35" y="93" font-size="8" fill="#1550A0" font-family="sans-serif">Fosse FTE</text>'
  +'<line x1="150" y1="103" x2="150" y2="135" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#ta)"/>'
  +'<text x="150" y="160" text-anchor="middle" font-size="8" fill="#059669" font-family="sans-serif">Infiltration dans le remblai</text>'
  +'<line x1="10" y1="172" x2="290" y2="172" stroke="#0891B2" stroke-width="1.5" stroke-dasharray="5,3"/>'
  +'<text x="5" y="184" font-size="8" fill="#0891B2" font-family="sans-serif">Nappe / niveau haut</text>'
  +'<text x="150" y="198" text-anchor="middle" font-size="8" fill="#D97706" font-family="sans-serif">⚠ Remblai imperméabilisé latéralement</text>'
  +'</svg>',

'filtre-compact': '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<rect x="55" y="35" width="190" height="140" rx="8" fill="#F0F9FF" stroke="#0891B2" stroke-width="2"/>'
  +'<rect x="225" y="38" width="18" height="13" rx="3" fill="#2563EB"/>'
  +'<text x="234" y="49" text-anchor="middle" font-size="8" fill="white" font-family="sans-serif" font-weight="700">CE</text>'
  +'<text x="150" y="27" text-anchor="middle" font-size="9" fill="#0369A1" font-family="sans-serif" font-weight="700">Filtre compact agréé CE</text>'
  +'<rect x="60" y="40" width="180" height="22" fill="#E0F2FE" rx="3"/>'
  +'<text x="150" y="55" text-anchor="middle" font-size="8" fill="#0369A1" font-family="sans-serif" font-weight="700">Distribution uniforme (tuyaux perforés)</text>'
  +'<rect x="60" y="62" width="180" height="60" fill="#FEF9C3"/>'
  +'<text x="150" y="87" text-anchor="middle" font-size="11" fill="#713F12" font-family="sans-serif" font-weight="700">MASSIF FILTRANT</text>'
  +'<text x="150" y="101" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">Matériau agréé — dimensions réduites vs. filtre classique</text>'
  +'<text x="150" y="113" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">performances selon n° agrément CE</text>'
  +'<rect x="60" y="122" width="180" height="22" fill="#DCFCE7" rx="3"/>'
  +'<text x="150" y="137" text-anchor="middle" font-size="8" fill="#166534" font-family="sans-serif" font-weight="700">Collecte drainée + évacuation</text>'
  +'<rect x="60" y="144" width="180" height="26" fill="#E0F2FE" rx="0 0 6 6"/>'
  +'<text x="150" y="157" text-anchor="middle" font-size="8" fill="#0369A1" font-family="sans-serif">Regard de contrôle sortie obligatoire</text>'
  +'<text x="150" y="168" text-anchor="middle" font-size="8" fill="#0369A1" font-family="sans-serif">Exutoire ou infiltration selon contexte</text>'
  +'<line x1="5" y1="78" x2="55" y2="78" stroke="#1550A0" stroke-width="2.5"/>'
  +'<polygon points="50,73 50,83 61,78" fill="#1550A0"/>'
  +'<text x="28" y="70" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">Entrée</text>'
  +'<line x1="245" y1="155" x2="295" y2="155" stroke="#059669" stroke-width="2.5"/>'
  +'<polygon points="240,150 240,160 251,155" fill="#059669"/>'
  +'<text x="270" y="147" text-anchor="middle" font-size="8" fill="#059669" font-family="sans-serif">Sortie</text>'
  +'</svg>',

'filtre-plante-roseaux': '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;height:auto;display:block;margin:0 auto">'
  +'<defs><marker id="fpr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#059669"/></marker></defs>'
  +'<rect x="10" y="80" width="280" height="100" fill="#D4A574" opacity="0.3" rx="3"/>'
  +'<rect x="10" y="80" width="280" height="18" fill="#D9F99D"/>'
  +'<text x="150" y="93" text-anchor="middle" font-size="8" fill="#365314" font-family="sans-serif" font-weight="700">Mulch / couche surface</text>'
  +'<rect x="10" y="98" width="280" height="42" fill="#FEF9C3"/>'
  +'<text x="150" y="117" text-anchor="middle" font-size="10" fill="#713F12" font-family="sans-serif" font-weight="700">GRAVIER — SABLE 0,25–4 mm</text>'
  +'<text x="150" y="130" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">Biofilm bactérien — rhizosphère active</text>'
  +'<rect x="10" y="140" width="280" height="15" fill="#FED7AA"/>'
  +'<text x="150" y="151" text-anchor="middle" font-size="8" fill="#9A3412" font-family="sans-serif">Drains de collecte Ø 100 — fond imperméabilisé</text>'
  +'<line x1="70" y1="0" x2="65" y2="82" stroke="#059669" stroke-width="2.5"/>'
  +'<line x1="67" y1="15" x2="80" y2="8" stroke="#65A30D" stroke-width="1.5"/>'
  +'<line x1="66" y1="35" x2="82" y2="28" stroke="#65A30D" stroke-width="1.5"/>'
  +'<line x1="64" y1="55" x2="79" y2="48" stroke="#65A30D" stroke-width="1.5"/>'
  +'<line x1="150" y1="2" x2="145" y2="82" stroke="#059669" stroke-width="2.5"/>'
  +'<line x1="147" y1="18" x2="163" y2="11" stroke="#65A30D" stroke-width="1.5"/>'
  +'<line x1="146" y1="38" x2="162" y2="31" stroke="#65A30D" stroke-width="1.5"/>'
  +'<line x1="144" y1="58" x2="160" y2="51" stroke="#65A30D" stroke-width="1.5"/>'
  +'<line x1="230" y1="4" x2="225" y2="82" stroke="#059669" stroke-width="2.5"/>'
  +'<line x1="227" y1="20" x2="243" y2="13" stroke="#65A30D" stroke-width="1.5"/>'
  +'<line x1="226" y1="40" x2="242" y2="33" stroke="#65A30D" stroke-width="1.5"/>'
  +'<line x1="224" y1="60" x2="240" y2="53" stroke="#65A30D" stroke-width="1.5"/>'
  +'<line x1="65" y1="82" x2="225" y2="82" stroke="#65A30D" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.6"/>'
  +'<text x="150" y="78" text-anchor="middle" font-size="8" fill="#166534" font-family="sans-serif">Rhizomes Phragmites australis</text>'
  +'<line x1="0" y1="115" x2="10" y2="115" stroke="#1550A0" stroke-width="2.5"/>'
  +'<polygon points="5,110 5,120 16,115" fill="#1550A0"/>'
  +'<text x="5" y="107" font-size="8" fill="#1550A0" font-family="sans-serif">Entrée</text>'
  +'<line x1="290" y1="147" x2="300" y2="147" stroke="#059669" stroke-width="2.5" marker-end="url(#fpr)"/>'
  +'<text x="275" y="140" font-size="8" fill="#059669" font-family="sans-serif">Sortie</text>'
  +'<text x="150" y="172" text-anchor="middle" font-size="8" fill="#78350F" font-family="sans-serif">Surface ≈ 5 m²/EH · Emprise importante</text>'
  +'<text x="150" y="184" text-anchor="middle" font-size="8" fill="#059669" font-family="sans-serif">🌾 Fauche annuelle · pas d\'entretien mécanique</text>'
  +'<text x="150" y="198" text-anchor="middle" font-size="8" fill="#D97706" font-family="sans-serif">⚠ Base imperméabilisée obligatoire (géomembrane)</text>'
  +'</svg>',

  };
  return svgs[id] || null;
}

/* ─── POSITION DANS LA FILIÈRE ─── */
function _ancChainView(extra) {
  if (!extra || !extra.chainPrev || !extra.chainNext) return '';
  var items = [];
  extra.chainPrev.forEach(function(s){ items.push({t:'prev', label:s}); });
  items.push({t:'current', label:'[ CLIQUEZ SUR L\'OUVRAGE ]'});
  extra.chainNext.forEach(function(s){ items.push({t:'next', label:s}); });
  return '<div style="margin-bottom:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Position dans l\'installation</div>'
    +'<div style="display:flex;flex-direction:column;align-items:center;gap:4px">'
    +items.map(function(item){
      if(item.t==='current') return '<div style="padding:6px 16px;background:var(--c-anc);color:#fff;border-radius:var(--r-md);font-size:11px;font-weight:800;text-align:center;max-width:200px;width:100%">▶ CET OUVRAGE</div><div style="color:var(--c-text-4);font-size:14px;line-height:1">↓</div>';
      return '<div style="padding:5px 14px;background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);font-size:11px;color:var(--c-text-3);text-align:center;max-width:200px;width:100%">'+item.label+'</div><div style="color:var(--c-text-4);font-size:14px;line-height:1">↓</div>';
    }).join('')
    +'</div></div>';
}

/* ═══════════════════════════════════════════════════════════
   PORTAIL ANC — PAGE D'ACCUEIL
   ═══════════════════════════════════════════════════════════ */
function renderANCHome() {
  var tb = document.getElementById('tab-bar');
  if (tb) tb.style.display = 'none';

  var html = '<div class="module-hero" style="--cat-color:var(--c-anc);background-image:linear-gradient(to right,#065F46 38%,rgba(6,95,70,0.88) 54%,rgba(6,95,70,0.35) 75%,transparent 92%),url(\'./images/anc-banner.webp\');background-size:cover;background-position:right center;background-color:#065F46">'
    +'<span class="mh-icon">🏡</span>'
    +'<div class="mh-title">Assainissement Non Collectif</div>'
    +'<div class="mh-sub">Comprendre · Diagnostiquer · Dimensionner</div>'
    +'<div class="mh-tags"><span class="mh-tag">Tous plans</span><span class="mh-tag">22 ouvrages</span><span class="mh-tag">Arrêté 07/09/2009</span></div>'
  +'</div>';

  /* Barre de recherche */
  html += '<div style="padding:var(--s-3) var(--s-4) var(--s-2)">'
    +'<div class="search-bar"><span class="search-ico">🔍</span>'
    +'<input type="text" id="anc-search" placeholder="Rechercher un ouvrage..." oninput="ancSearchInput(this.value)" style="flex:1;border:none;background:none;font-size:14px;color:var(--c-text);outline:none">'
    +'</div>'
    +'<div id="anc-search-results" style="display:none;margin-top:6px;border:1px solid var(--c-border);border-radius:var(--r-md);background:var(--c-bg);overflow:hidden"></div>'
  +'</div>';

  /* Chaîne de traitement */
  html += '<div style="padding:var(--s-2) var(--s-4)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Chaîne de traitement ANC</div>'
    +'<div style="display:flex;align-items:center;gap:0;overflow-x:auto;padding:2px 0">'
    +_ancChainStep('🏠','Habitation','','#64748B')
    +_ancChainArrow()
    +_ancChainStep('🔵','Prétraitement','réglementaire','#1550A0','primary')
    +_ancChainArrow()
    +_ancChainStep('🟢','Traitement','secondaire','#059669','secondary')
    +_ancChainArrow()
    +_ancChainStep('💧','Évacuation','infiltration / rejet','#0891B2','evacuation')
    +_ancChainArrow()
    +_ancChainStep('🌍','Sol /','milieu','#64748B')
    +'</div>'
    +'<div style="font-size:9px;color:var(--c-text-4);margin-top:6px;line-height:1.4">⚠ Terminologie réglementaire : le prétraitement est nommé « prétraitement », le traitement secondaire est nommé « traitement » dans l\'Arrêté 07/09/2009. La classification Primaire/Secondaire ci-dessus est pédagogique.</div>'
  +'</div>';

  /* Catégories */
  html += '<div style="padding:var(--s-2) var(--s-4) var(--s-1)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Explorer par catégorie</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)">';

  var catCards = [
    {id:'primary',    ico:'🔵', label:'Traitement primaire',   sub:'Fosse · Bac à graisses · Préfiltre',  color:'#1550A0', colorl:'#E6EEF8'},
    {id:'secondary',  ico:'🟢', label:'Traitement secondaire', sub:'Épandage · Filtres · Microstations',   color:'#059669', colorl:'#D1FAE5'},
    {id:'evacuation', ico:'💧', label:'Évacuation',            sub:'Infiltration · Rejet milieu',          color:'#0891B2', colorl:'#CFFAFE'},
    {id:'annexe',     ico:'🔧', label:'Équipements annexes',   sub:'Répartition · Relevage · Ventilation', color:'#64748B', colorl:'#F1F5F9'},
    {id:'cas',        ico:'⚠️', label:'Cas particuliers',      sub:'Toilettes sèches · Agricole',          color:'#D97706', colorl:'#FEF3C7'},
    {id:'diag',       ico:'🔍', label:'Diagnostic',            sub:'Symptômes · Causes · Actions',         color:'#7C3AED', colorl:'#EDE9FE'},
  ];
  catCards.forEach(function(c){
    html += '<div onclick="renderANCCat(\''+c.id+'\')" style="cursor:pointer;background:'+c.colorl+';border:1.5px solid '+c.color+';border-radius:var(--r-md);padding:var(--s-3);transition:opacity .15s" onmousedown="this.style.opacity=\'0.75\'" onmouseup="this.style.opacity=\'1\'">'
      +'<div style="font-size:18px;margin-bottom:4px">'+c.ico+'</div>'
      +'<div style="font-size:12px;font-weight:800;color:'+c.color+';line-height:1.3">'+c.label+'</div>'
      +'<div style="font-size:10px;color:var(--c-text-3);margin-top:3px;line-height:1.4">'+c.sub+'</div>'
    +'</div>';
  });
  html += '</div></div>';

  /* Outils principaux */
  html += '<div style="padding:var(--s-2) var(--s-4)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Outils</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)">'
    +'<button onclick="renderANCAideChoix()" style="padding:var(--s-3);background:var(--c-anc-l);border:1.5px solid var(--c-anc);border-radius:var(--r-md);font-size:12px;font-weight:700;color:var(--c-anc);cursor:pointer;text-align:left">📐 Dimensionnement<br><span style="font-size:10px;font-weight:400;opacity:.8">Filière · Surfaces · Budget</span></button>'
    +'<button onclick="renderANCConformite()" style="padding:var(--s-3);background:#F0FFF4;border:1.5px solid #059669;border-radius:var(--r-md);font-size:12px;font-weight:700;color:#059669;cursor:pointer;text-align:left">✅ Conformité SPANC<br><span style="font-size:10px;font-weight:400;opacity:.8">Grille de contrôle interactive</span></button>'
    +'<button onclick="renderANCRapport()" style="padding:var(--s-3);background:#EEF2FF;border:1.5px solid #4F46E5;border-radius:var(--r-md);font-size:12px;font-weight:700;color:#4F46E5;cursor:pointer;text-align:left">📄 Rapport SPANC<br><span style="font-size:10px;font-weight:400;opacity:.8">Saisir · Exporter · Télécharger</span></button>'
    +'<button onclick="renderANCCalendrier()" style="padding:var(--s-3);background:#FFF7ED;border:1.5px solid #D97706;border-radius:var(--r-md);font-size:12px;font-weight:700;color:#D97706;cursor:pointer;text-align:left">📅 Calendrier entretien<br><span style="font-size:10px;font-weight:400;opacity:.8">Prochaines échéances</span></button>'
    +'<button onclick="showModule(\'calc-anc\')" style="padding:var(--s-3);background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);font-size:12px;color:var(--c-text-2);cursor:pointer;text-align:left">⚡ Calculateurs<br><span style="font-size:10px;opacity:.7">Épandage · FTE · Porchet</span></button>'
    +'<button onclick="renderANCNonConformites()" style="padding:var(--s-3);background:#FFF5F5;border:1.5px solid #DC2626;border-radius:var(--r-md);font-size:12px;font-weight:700;color:#DC2626;cursor:pointer;text-align:left">⚠ NC fréquentes<br><span style="font-size:10px;font-weight:400;opacity:.8">12 non-conformités · solutions</span></button>'
    +'</div>'
  +'</div>';

  html += '<div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

function _ancChainStep(ico, line1, line2, color, catId) {
  var click = catId ? ' onclick="renderANCCat(\''+catId+'\')" style="cursor:pointer;' : ' style="';
  return '<div'+click+'display:flex;flex-direction:column;align-items:center;min-width:60px;flex-shrink:0;gap:2px">'
    +'<div style="width:38px;height:38px;border-radius:50%;background:'+(catId?color+'1A':'#F1F5F9')+';border:1.5px solid '+(catId?color:'#CBD5E1')+';display:flex;align-items:center;justify-content:center;font-size:14px">'+ico+'</div>'
    +'<div style="font-size:9px;font-weight:700;color:'+(catId?color:'#64748B')+';text-align:center;line-height:1.2">'+line1+'</div>'
    +(line2?'<div style="font-size:8px;color:var(--c-text-4);text-align:center">'+line2+'</div>':'')
  +'</div>';
}
function _ancChainArrow() {
  return '<div style="font-size:12px;color:var(--c-text-4);padding:0 2px;margin-top:-4px">›</div>';
}

/* ─── RECHERCHE ─── */
function ancSearchInput(q) {
  var el = document.getElementById('anc-search-results');
  if (!el) return;
  q = (q||'').toLowerCase().trim();
  if (!q || q.length < 2) { el.style.display='none'; return; }
  var matches = [];
  if (typeof FICHES_ANC !== 'undefined') {
    FICHES_ANC.forEach(function(f){
      if ((f.name+' '+(f.cat||'')+(f.role||'')).toLowerCase().indexOf(q)>=0) matches.push(f);
    });
  }
  if (!matches.length) { el.innerHTML='<div style="padding:10px 14px;font-size:12px;color:var(--c-text-3)">Aucun résultat</div>'; el.style.display='block'; return; }
  el.innerHTML = matches.map(function(f){
    var extra = ANC_EXTRA[f.id]||{};
    var cat = ANC_CATS[extra.cat];
    return '<div onclick="renderANCOuvrageDetail(\''+f.id+'\')" style="padding:8px 14px;border-bottom:1px solid var(--c-border);cursor:pointer;display:flex;align-items:center;gap:10px">'
      +'<span style="font-size:16px">'+f.ico+'</span>'
      +'<div><div style="font-size:12px;font-weight:700;color:var(--c-text)">'+f.name+'</div>'
      +'<div style="font-size:10px;color:var(--c-text-3)">'+(cat?cat.label:f.cat)+'</div></div>'
    +'</div>';
  }).join('');
  el.style.display='block';
}

/* ═══════════════════════════════════════════════════════════
   PAGES CATÉGORIES
   ═══════════════════════════════════════════════════════════ */
function renderANCCat(catId) {
  if (catId === 'diag') { renderANCDiag(); return; }
  var tb = document.getElementById('tab-bar');
  if (tb) tb.style.display = 'none';

  var cat = ANC_CATS[catId];
  if (!cat) { renderANCHome(); return; }

  var ouvrages = Object.keys(ANC_EXTRA).filter(function(id){ return ANC_EXTRA[id].cat === catId; });
  var fiches = [];
  ouvrages.forEach(function(id){
    var f = _ancGetFiche(id);
    if (f) fiches.push(f);
  });
  if (typeof FICHES_ANC !== 'undefined') {
    fiches.sort(function(a,b){ return (a.num||99)-(b.num||99); });
  }

  var html = '<div style="display:flex;align-items:center;gap:var(--s-2);padding:var(--s-3) var(--s-4);border-bottom:1px solid var(--c-border);position:sticky;top:0;background:var(--c-bg);z-index:10">'
    +'<button onclick="renderANCHome()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--c-text-3);padding:0;line-height:1">←</button>'
    +'<div style="flex:1"><div style="font-size:10px;color:var(--c-text-4)">ANC</div>'
    +'<div style="font-size:13px;font-weight:800;color:var(--c-text)">'+cat.ico+' '+cat.label+'</div></div>'
  +'</div>';

  html += '<div style="padding:var(--s-3) var(--s-4) var(--s-2)">'
    +'<div style="background:'+cat.colorl+';border-left:3px solid '+cat.color+';border-radius:var(--r-md);padding:var(--s-3)">'
    +'<div style="font-size:11px;color:var(--c-text-2);line-height:1.5">'+cat.regl+'</div>'
    +'</div>'
  +'</div>';

  /* Sous-catégories pour le traitement secondaire */
  if (catId === 'secondary') {
    var subcats = ['sol_en_place','massif','compact','micro','fpr'];
    subcats.forEach(function(sc){
      var scFiches = fiches.filter(function(f){ return ANC_EXTRA[f.id] && ANC_EXTRA[f.id].subcat === sc; });
      if (!scFiches.length) return;
      html += '<div style="padding:var(--s-1) var(--s-4) 0">'
        +'<div style="font-size:10px;font-weight:800;color:#059669;text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2);margin-top:var(--s-1)">'+ANC_SUBCAT_LABELS[sc]+'</div>'
        +'<div style="display:flex;flex-direction:column;gap:var(--s-2)">'
        +scFiches.map(function(f){ return _ancOuvrageCard(f, cat.color, cat.colorl); }).join('')
        +'</div></div>';
    });
  } else {
    html += '<div style="padding:var(--s-1) var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">'
      +fiches.map(function(f){ return _ancOuvrageCard(f, cat.color, cat.colorl); }).join('')
    +'</div>';
  }

  html += '<div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

function _ancOuvrageCard(f, color, colorl) {
  var extra = ANC_EXTRA[f.id]||{};
  return '<div onclick="renderANCOuvrageDetail(\''+f.id+'\')" style="cursor:pointer;background:var(--c-surface);border:1px solid var(--c-border);border-left:3px solid '+color+';border-radius:var(--r-md);padding:var(--s-3)">'
    +'<div style="display:flex;align-items:center;gap:var(--s-3)">'
    +'<div style="min-width:36px;height:36px;border-radius:var(--r-md);background:'+colorl+';display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">'+f.ico+'</div>'
    +'<div style="flex:1;min-width:0">'
    +'<div style="font-size:13px;font-weight:700;color:var(--c-text)">'+f.name+'</div>'
    +'<div style="font-size:11px;color:var(--c-text-3);margin-top:2px;line-height:1.4;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">'+extra.essentiel+'</div>'
    +'</div>'
    +'<span style="font-size:20px;color:var(--c-text-4);flex-shrink:0">›</span>'
    +'</div>'
    +(extra.danger?'<div style="margin-top:8px;font-size:10px;color:#b45309;background:#FEF3C7;border-radius:4px;padding:4px 8px">'+extra.danger+'</div>':'')
  +'</div>';
}

/* ═══════════════════════════════════════════════════════════
   FICHE OUVRAGE — 3 NIVEAUX
   ═══════════════════════════════════════════════════════════ */
function renderANCOuvrageDetail(id, tabIdx) {
  tabIdx = tabIdx || 0;
  var f = _ancGetFiche(id);
  if (!f) { renderANCHome(); return; }
  var extra = ANC_EXTRA[id]||{};
  var cat = ANC_CATS[extra.cat]||{color:'var(--c-anc)',colorl:'var(--c-anc-l)',label:''};

  var tb = document.getElementById('tab-bar');
  if (tb) tb.style.display = 'none';

  var html = '<div style="display:flex;align-items:center;gap:var(--s-2);padding:var(--s-3) var(--s-4);border-bottom:1px solid var(--c-border);position:sticky;top:0;background:var(--c-bg);z-index:10">'
    +'<button onclick="renderANCCat(\''+extra.cat+'\')" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--c-text-3);padding:0;line-height:1">←</button>'
    +'<div style="flex:1;min-width:0">'
    +'<div style="font-size:10px;color:var(--c-text-4)">ANC · '+cat.label+'</div>'
    +'<div style="font-size:13px;font-weight:800;color:var(--c-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+f.ico+' '+f.name+'</div>'
    +'</div>'
    +'<span class="badge" style="background:'+cat.colorl+';color:'+cat.color+';font-size:9px;flex-shrink:0;border-radius:20px;padding:3px 8px;font-weight:700">'+cat.label+'</span>'
  +'</div>';

  /* Tabs Essentiel / Technique / Expert */
  var tabs = ['Essentiel','Technique','Expert'];
  html += '<div style="display:flex;border-bottom:1px solid var(--c-border)">'
    +tabs.map(function(t,i){
      var active = i===tabIdx;
      return '<button onclick="renderANCOuvrageDetail(\''+id+'\','+i+')" style="flex:1;padding:10px 4px;font-size:12px;font-weight:'+(active?'800':'600')+';border:none;background:none;cursor:pointer;color:'+(active?cat.color:'var(--c-text-3)')+';border-bottom:2px solid '+(active?cat.color:'transparent')+'">'+t+'</button>';
    }).join('')
  +'</div>';

  html += '<div style="padding:var(--s-3) var(--s-4)">';
  if (tabIdx===0) html += _ancTabEssentiel(f, extra, cat);
  else if (tabIdx===1) html += _ancTabTechnique(f, extra, cat);
  else html += _ancTabExpert(f, extra, cat);
  html += '</div><div class="pb-nav"></div>';

  document.getElementById('main-content').innerHTML = html;
}

/* ─── TAB 1 : ESSENTIEL ─── */
function _ancTabEssentiel(f, extra, cat) {
  var html = '';

  /* Carte d'identité */
  html += '<div style="background:'+cat.colorl+';border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:'+cat.color+';text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">En résumé</div>'
    +'<div style="font-size:13px;color:var(--c-text);line-height:1.6">'+extra.essentiel+'</div>'
  +'</div>';

  /* Points clés */
  if (extra.points && extra.points.length) {
    html += '<div style="margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Points clés</div>'
      +'<div style="display:flex;flex-direction:column;gap:6px">'
      +extra.points.map(function(p){
        return '<div style="display:flex;gap:var(--s-2);align-items:flex-start;font-size:12px;color:var(--c-text-2);line-height:1.5">'
          +'<span style="color:'+cat.color+';font-weight:800;flex-shrink:0;margin-top:1px">✓</span>'
          +'<span>'+p+'</span>'
        +'</div>';
      }).join('')
      +'</div>'
    +'</div>';
  }

  /* Schéma SVG */
  var svg = _ancSVG(f.id);
  if (svg) {
    html += '<div style="margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Schéma</div>'
      +'<div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3)">'+svg+'</div>'
    +'</div>';
  }

  /* Position dans la filière */
  html += _ancChainViewOuvrage(extra, cat);

  /* Danger */
  if (extra.danger) {
    html += '<div style="background:#FEF3C7;border:1.5px solid #D97706;border-radius:var(--r-md);padding:var(--s-3);font-size:12px;font-weight:700;color:#92400E;margin-bottom:var(--s-3)">'+extra.danger+'</div>';
  }

  /* Calc rapides */
  if (extra.linkedCalcs && extra.linkedCalcs.length) {
    html += '<div style="margin-bottom:var(--s-2)">'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Calculateurs associés</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:var(--s-2)">'
      +extra.linkedCalcs.map(function(c){
        return '<button onclick="showModule(\''+c.id+'\')" style="padding:7px 12px;background:var(--c-anc-l);border:1px solid var(--c-anc);border-radius:var(--r-md);font-size:11px;font-weight:700;color:var(--c-anc);cursor:pointer">⚡ '+c.label+'</button>';
      }).join('')
      +'</div></div>';
  }

  return html;
}

function _ancChainViewOuvrage(extra, cat) {
  if (!extra || (!extra.chainPrev && !extra.chainNext)) return '';
  var html = '<div style="margin-bottom:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Position dans l\'installation</div>'
    +'<div style="display:flex;flex-direction:column;align-items:flex-start;gap:4px">';
  (extra.chainPrev||[]).forEach(function(s){
    html += '<div style="font-size:11px;color:var(--c-text-3);padding:4px 12px;background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:20px">'+s+'</div>'
      +'<div style="font-size:13px;color:var(--c-text-4);margin-left:18px">↓</div>';
  });
  html += '<div style="font-size:12px;font-weight:800;color:'+cat.color+';padding:6px 14px;background:'+cat.colorl+';border:1.5px solid '+cat.color+';border-radius:20px">▶ CET OUVRAGE</div>';
  (extra.chainNext||[]).forEach(function(s){
    html += '<div style="font-size:13px;color:var(--c-text-4);margin-left:18px">↓</div>'
      +'<div style="font-size:11px;color:var(--c-text-3);padding:4px 12px;background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:20px">'+s+'</div>';
  });
  html += '</div></div>';
  return html;
}

/* ─── TAB 2 : TECHNIQUE ─── */
function _ancTabTechnique(f, extra, cat) {
  var html = '';

  /* Rôle détaillé */
  html += '<div style="margin-bottom:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Rôle</div>'
    +'<div style="font-size:var(--t-sm);color:var(--c-text-2);line-height:1.7;background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3)">'+f.role+'</div>'
  +'</div>';

  /* Fonctionnement */
  if (f.fonctionnement) {
    html += '<div style="margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Fonctionnement</div>'
      +'<div style="font-size:var(--t-sm);color:var(--c-text-2);line-height:1.7;background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3);white-space:pre-wrap">'+f.fonctionnement+'</div>'
    +'</div>';
  }

  /* Schéma texte si pas de SVG */
  if (!_ancSVG(f.id) && f.schema) {
    html += '<div style="margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Schéma</div>'
      +'<pre style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);font-size:11px;line-height:1.65;color:var(--c-text-2);overflow-x:auto;white-space:pre;font-family:\'Courier New\',Courier,monospace;margin:0">'+f.schema+'</pre>'
    +'</div>';
  }

  /* Entretien */
  if (f.entretien && f.entretien.length) {
    html += '<div style="margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Points d\'entretien</div>'
      +'<div style="display:flex;flex-direction:column;gap:5px">'
      +f.entretien.map(function(e,i){
        return '<div style="display:flex;gap:var(--s-2);font-size:var(--t-sm);color:var(--c-text-2);line-height:1.5;padding:var(--s-2) var(--s-3);background:var(--c-surface-2);border-radius:var(--r-md)">'
          +'<span style="color:'+cat.color+';font-weight:800;flex-shrink:0">'+(i+1)+'.</span><span>'+e+'</span></div>';
      }).join('')
      +'</div></div>';
  }

  /* Alertes */
  if (f.alertes && f.alertes.length) {
    html += '<div style="margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Signes d\'alerte</div>'
      +'<div style="display:flex;flex-direction:column;gap:5px">'
      +f.alertes.map(function(a){
        var col = a.t==='danger'?'var(--c-danger)':(a.t==='warn'?'#F59E0B':'var(--c-ok)');
        var ico = a.t==='danger'?'🔴':(a.t==='warn'?'🟡':'🟢');
        return '<div style="display:flex;gap:var(--s-2);font-size:var(--t-sm);line-height:1.5;padding:var(--s-2) var(--s-3);background:var(--c-surface-2);border-radius:var(--r-md);border-left:3px solid '+col+'">'
          +'<span style="flex-shrink:0">'+ico+'</span><span style="color:var(--c-text-2)">'+a.v+'</span></div>';
      }).join('')
      +'</div></div>';
  }

  /* Interdits */
  if (f.interdits && f.interdits.length) {
    html += '<div style="margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">À ne jamais faire</div>'
      +'<div style="display:flex;flex-direction:column;gap:5px">'
      +f.interdits.map(function(x){
        return '<div style="display:flex;gap:var(--s-2);font-size:var(--t-sm);color:var(--c-text-2);line-height:1.5;padding:var(--s-2) var(--s-3);background:#FEF2F2;border-radius:var(--r-md);border-left:3px solid var(--c-danger)">'
          +'<span style="color:var(--c-danger);font-weight:800;flex-shrink:0">✗</span><span>'+x+'</span></div>';
      }).join('')
      +'</div></div>';
  }

  return html;
}

/* ─── TAB 3 : EXPERT ─── */
function _ancTabExpert(f, extra, cat) {
  var html = '';

  html += '<div style="margin-bottom:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Références réglementaires</div>'
    +'<div style="background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3)">'
    +'<div style="display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-2)"><span style="font-size:14px">📋</span><span style="font-size:13px;font-weight:700;color:var(--c-text)">'+f.norme+'</span></div>'
    +'<div style="font-size:10px;color:var(--c-text-4);margin-top:4px">Vérifier les textes en vigueur — les arrêtés peuvent être modifiés.</div>'
    +'</div></div>';

  html += '<div style="margin-bottom:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Cadre réglementaire ANC</div>'
    +'<div style="display:flex;flex-direction:column;gap:6px">'
    +[
      ['Arrêté du 07/09/2009 modifié','Prescriptions techniques applicables aux systèmes d\'ANC recevant une charge ≤ 1,2 kg/j DBO₅'],
      ['Arrêté du 10/07/2024','Modifiant l\'arrêté de 2009 — vérifier les nouvelles dispositions'],
      ['DTU 64.1','Mise en œuvre des dispositifs d\'ANC pour maisons d\'habitation individuelle'],
      ['Code de la santé publique L.1331-1 et s.','Obligations et responsabilité du propriétaire'],
    ].map(function(r){
      return '<div style="padding:var(--s-2) var(--s-3);background:var(--c-surface-2);border-radius:var(--r-md)">'
        +'<div style="font-size:11px;font-weight:700;color:var(--c-text)">'+r[0]+'</div>'
        +'<div style="font-size:10px;color:var(--c-text-3);margin-top:2px;line-height:1.4">'+r[1]+'</div>'
      +'</div>';
    }).join('')
    +'</div></div>';

  if (extra.cat === 'secondary' && (extra.subcat === 'compact' || extra.subcat === 'micro' || extra.subcat === 'fpr')) {
    html += '<div style="background:#FEF9C3;border:1.5px solid #CA8A04;border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
      +'<div style="font-size:11px;font-weight:800;color:#713F12;margin-bottom:4px">⚠ Dispositif agréé CE</div>'
      +'<div style="font-size:11px;color:#92400E;line-height:1.5">Pour ce type de dispositif, le dimensionnement, les fréquences d\'entretien, les performances et les conditions de mise en œuvre dépendent de l\'agrément CE spécifique du modèle et de son guide d\'utilisation. Consulter impérativement ces documents avant toute prescription ou intervention.</div>'
    +'</div>';
  }

  html += '<div style="margin-bottom:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Points de contrôle SPANC</div>'
    +'<div style="display:flex;flex-direction:column;gap:5px">'
    +['Accessibilité des regards et tampons','Présence et fonctionnement de la ventilation','Absence d\'eaux pluviales raccordées','État apparent de la cuve/ouvrage (étanchéité, corrosion)','Présence d\'un traitement secondaire adapté raccordé','Absence de rejet non autorisé'].map(function(p){
      return '<div style="display:flex;gap:var(--s-2);font-size:11px;color:var(--c-text-2);padding:6px 10px;background:var(--c-surface-2);border-radius:var(--r-md)">'
        +'<span style="color:var(--c-anc);flex-shrink:0">□</span><span>'+p+'</span></div>';
    }).join('')
    +'</div></div>';

  if (extra.linkedCalcs && extra.linkedCalcs.length) {
    html += '<div>'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Calculateurs HydroCalc</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:var(--s-2)">'
      +extra.linkedCalcs.map(function(c){
        return '<button onclick="showModule(\''+c.id+'\')" style="padding:8px 14px;background:var(--c-anc-l);border:1px solid var(--c-anc);border-radius:var(--r-md);font-size:12px;font-weight:700;color:var(--c-anc);cursor:pointer">⚡ '+c.label+'</button>';
      }).join('')
      +'</div></div>';
  }

  return html;
}

/* ═══════════════════════════════════════════════════════════
   DIAGNOSTIC — SYMPTÔMES
   ═══════════════════════════════════════════════════════════ */
var ANC_SYMPTOMS = [
  {id:'odeurs',     ico:'👃', label:'Odeurs persistantes',    context:'dans ou autour de l\'habitation',
   causes:['Ventilation de fosse obstruée, déboîtée ou insuffisante','Fosse pleine (boues > 50 % du volume)','Siphons vidés (ventilation insuffisante créant une dépression)','Colmatage du traitement secondaire refoulant l\'effluent'],
   controles:['Vérifier l\'émergence de ventilation en toiture (libre, non obstruée)','Mesurer la hauteur de boues dans la fosse','Contrôler les siphons des appareils sanitaires','Inspecter le préfiltre'],
   urgence:'warn'},
  {id:'reflux',     ico:'⬆️', label:'Reflux / refoulement',   context:'dans les canalisations intérieures',
   causes:['Fosse pleine ou sortie bouchée','Traitement secondaire colmaté (retour vers l\'amont)','Pompe de relevage en panne','Obstruction dans le réseau intérieur'],
   controles:['État de la fosse (niveau boues, sortie)','Poste de relevage si présent (pompe, flotteur)','Préfiltre (colmatage)','Regard de collecte (niveau)'],
   urgence:'danger'},
  {id:'stagnation', ico:'🌊', label:'Eau stagnante en surface', context:'sur la zone d\'épandage ou autour du filtre',
   causes:['Colmatage de la filière de traitement','Surcharge hydraulique (débit entrant > capacité)','Nappe trop haute (remontée)','Sol compacté rendant l\'infiltration impossible'],
   controles:['Niveau de nappe proche de la surface ?','Bilan hydraulique : débit journalier vs capacité calculée','Âge et état de la filière (colmatage progressif)','Préfiltre et traitement primaire en amont'],
   urgence:'danger'},
  {id:'odeurs_ext', ico:'🌿', label:'Odeurs sur le terrain',   context:'au-dessus de la filière d\'épandage',
   causes:['Traitement secondaire insuffisant (boues atteignant le filtre)','Préfiltre absent ou défaillant','Filière colmatée — eau insuffisamment épurée','Déséquilibre hydraulique'],
   controles:['Préfiltre (présence, état)','Fosse (hauteur de boues — débordement vers filière ?)','Répartition sur les branches (uniforme ?)','Présence d\'une odeur d\'H₂S (œuf pourri) → conditions anaérobies'],
   urgence:'warn'},
  {id:'alarme',     ico:'🚨', label:'Alarme microstation',     context:'alarme sonore ou visuelle déclenchée',
   causes:['Panne du compresseur d\'aération','Panne de l\'automate ou d\'une électrovanne','Niveau anormal dans le réacteur','Coupure électrique prolongée'],
   controles:['Coffret électrique (disjoncteur, fusible)','Compresseur ou surpresseur (fonctionnement)','Alarme niveau haut : pompe ou électrovanne défaillante ?','Consulter le guide du dispositif agréé pour le diagnostic'],
   urgence:'danger'},
  {id:'lent',       ico:'🐌', label:'Écoulement lent',         context:'dans les canalisations ou WC',
   causes:['Préfiltre ou fosse colmaté(e)','Obstruction partielle dans le réseau','Répartiteur déséquilibré','Ventilation insuffisante (effet de contre-pression)'],
   controles:['Préfiltre (encrassement)','Boîte de répartition (équilibre, obstruction)','Ventilation primaire (libre ?)','Réseau intérieur (corps étrangers)'],
   urgence:'warn'},
];

function renderANCDiag() {
  var tb = document.getElementById('tab-bar');
  if (tb) tb.style.display = 'none';

  var html = '<div style="display:flex;align-items:center;gap:var(--s-2);padding:var(--s-3) var(--s-4);border-bottom:1px solid var(--c-border);position:sticky;top:0;background:var(--c-bg);z-index:10">'
    +'<button onclick="renderANCHome()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--c-text-3);padding:0;line-height:1">←</button>'
    +'<div style="flex:1"><div style="font-size:10px;color:var(--c-text-4)">ANC</div>'
    +'<div style="font-size:13px;font-weight:800;color:var(--c-text)">🔍 Diagnostic</div></div>'
  +'</div>';

  html += '<div style="padding:var(--s-3) var(--s-4)">';
  html += '<div style="background:#FEF9C3;border:1.5px solid #CA8A04;border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3);font-size:11px;color:#92400E;line-height:1.5">⚠ Cet outil est pédagogique. Il ne remplace pas un diagnostic de terrain par un technicien qualifié. Une cause ne peut être confirmée qu\'après inspection physique.</div>';
  html += '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Que constatez-vous ?</div>';
  html += '<div style="display:flex;flex-direction:column;gap:var(--s-2)">';
  ANC_SYMPTOMS.forEach(function(s){
    var col = s.urgence==='danger'?'#DC2626':(s.urgence==='warn'?'#D97706':'#059669');
    html += '<div onclick="renderANCSymptome(\''+s.id+'\')" style="cursor:pointer;padding:var(--s-3);background:var(--c-surface);border:1px solid var(--c-border);border-left:3px solid '+col+';border-radius:var(--r-md);display:flex;align-items:center;gap:var(--s-3)">'
      +'<span style="font-size:22px">'+s.ico+'</span>'
      +'<div style="flex:1"><div style="font-size:13px;font-weight:700;color:var(--c-text)">'+s.label+'</div>'
      +'<div style="font-size:11px;color:var(--c-text-3)">'+s.context+'</div></div>'
      +'<span style="font-size:18px;color:var(--c-text-4)">›</span>'
    +'</div>';
  });
  html += '</div></div><div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

function renderANCSymptome(symId) {
  var s = ANC_SYMPTOMS.find(function(x){ return x.id===symId; });
  if (!s) { renderANCDiag(); return; }
  var col = s.urgence==='danger'?'#DC2626':(s.urgence==='warn'?'#D97706':'#059669');
  var urgLabel = s.urgence==='danger'?'🔴 INTERVENTION URGENTE':(s.urgence==='warn'?'🟡 À SURVEILLER':'🟢 NORMAL');

  var html = '<div style="display:flex;align-items:center;gap:var(--s-2);padding:var(--s-3) var(--s-4);border-bottom:1px solid var(--c-border);position:sticky;top:0;background:var(--c-bg);z-index:10">'
    +'<button onclick="renderANCDiag()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--c-text-3);padding:0;line-height:1">←</button>'
    +'<div style="flex:1"><div style="font-size:10px;color:var(--c-text-4)">ANC · Diagnostic</div>'
    +'<div style="font-size:13px;font-weight:800;color:var(--c-text)">'+s.ico+' '+s.label+'</div></div>'
    +'<span style="font-size:10px;font-weight:700;color:'+col+';flex-shrink:0;background:'+col+'1A;padding:3px 8px;border-radius:20px">'+urgLabel+'</span>'
  +'</div>';

  html += '<div style="padding:var(--s-3) var(--s-4)">';
  html += '<div style="background:'+col+'1A;border:1.5px solid '+col+';border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
    +'<div style="font-size:11px;font-weight:800;color:'+col+';margin-bottom:4px">Symptôme observé</div>'
    +'<div style="font-size:13px;color:var(--c-text);font-weight:700">'+s.label+' — '+s.context+'</div>'
  +'</div>';

  html += '<div style="margin-bottom:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Causes possibles</div>'
    +'<div style="font-size:11px;color:var(--c-text-4);margin-bottom:var(--s-2)">Une seule observation ne confirme pas une cause. Vérifier avant de conclure.</div>'
    +'<div style="display:flex;flex-direction:column;gap:5px">'
    +s.causes.map(function(c,i){
      return '<div style="display:flex;gap:var(--s-2);font-size:12px;color:var(--c-text-2);padding:var(--s-2) var(--s-3);background:var(--c-surface-2);border-radius:var(--r-md)">'
        +'<span style="color:var(--c-text-4);flex-shrink:0">'+(i+1)+'.</span><span>'+c+'</span></div>';
    }).join('')
    +'</div></div>';

  html += '<div style="margin-bottom:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Contrôles à effectuer</div>'
    +'<div style="display:flex;flex-direction:column;gap:5px">'
    +s.controles.map(function(c){
      return '<div style="display:flex;gap:var(--s-2);font-size:12px;color:var(--c-text-2);padding:var(--s-2) var(--s-3);background:var(--c-surface-2);border-radius:var(--r-md)">'
        +'<span style="color:var(--c-anc);flex-shrink:0">→</span><span>'+c+'</span></div>';
    }).join('')
    +'</div></div>';

  html += '<div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
    +'<div style="font-size:11px;font-weight:700;color:#1E40AF;margin-bottom:4px">ℹ Niveau d\'urgence indicatif</div>'
    +'<div style="font-size:11px;color:#1E40AF;line-height:1.5">'+urgLabel+' — ce niveau est pédagogique et ne constitue pas un verdict réglementaire SPANC.</div>'
  +'</div>';

  html += '</div><div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

/* ═══════════════════════════════════════════════════════════
   GRILLE DE CONFORMITÉ SPANC
   ═══════════════════════════════════════════════════════════ */
var _ancConformiteState = {};

var ANC_CONFORMITE = [
  { section:'Prétraitement', items:[
    { id:'pt1', label:'Prétraitement primaire présent (fosse toutes eaux ou équivalent agréé CE)', gravite:'danger', regle:'Art. 6 — Arrêté 07/09/2009' },
    { id:'pt2', label:'Ventilation primaire présente — Ø ≥ 100 mm sortant au-dessus du faîtage', gravite:'danger', regle:'Art. 6' },
    { id:'pt3', label:'Tampon d\'accès identifiable et accessible sans outillage', gravite:'majeur', regle:'Art. 6' },
    { id:'pt4', label:'Aucune eau pluviale raccordée à la fosse', gravite:'majeur', regle:'Art. 6 + CSP L.1331-1' },
    { id:'pt5', label:'Niveau de boues < 50 % du volume utile (vidange à programmer si dépassé)', gravite:'mineur', regle:'Arrêté 07/09/2009' },
    { id:'pt6', label:'Préfiltre présent et dégagé (si filière classique)', gravite:'mineur', regle:'DTU 64.1' },
  ]},
  { section:'Traitement secondaire', items:[
    { id:'ts1', label:'Filière de traitement secondaire présente et raccordée à la fosse', gravite:'danger', regle:'Art. 7 — Arrêté 07/09/2009' },
    { id:'ts2', label:'Aucune construction ni dalle béton sur la zone de traitement', gravite:'danger', regle:'Art. 7' },
    { id:'ts3', label:'Aucune circulation mécanique sur la filière d\'épandage', gravite:'majeur', regle:'Art. 7' },
    { id:'ts4', label:'Regard de répartition calé à l\'horizontal (si présent)', gravite:'majeur', regle:'DTU 64.1' },
    { id:'ts5', label:'Végétation herbacée uniquement — pas d\'arbres ni arbustes à racines profondes', gravite:'mineur', regle:'Art. 7' },
    { id:'ts6', label:'Dispositif agréé CE : contrat d\'entretien en vigueur (si microstation / filtre compact)', gravite:'majeur', regle:'NF EN 12566 + agrément CE' },
  ]},
  { section:'Évacuation', items:[
    { id:'ev1', label:'Mode d\'évacuation défini : infiltration ou rejet autorisé (jamais non défini)', gravite:'danger', regle:'Art. 8 — Arrêté 07/09/2009' },
    { id:'ev2', label:'Distance minimale 35 m de tout captage AEP ou puits privé respectée', gravite:'danger', regle:'Art. 1' },
    { id:'ev3', label:'Absence de rejet non autorisé vers fossé, cours d\'eau ou milieu superficiel', gravite:'danger', regle:'Art. 8 + L.216-6 CE' },
    { id:'ev4', label:'Regard de collecte en sortie de filière accessible pour prélèvement', gravite:'mineur', regle:'Art. 8' },
  ]},
  { section:'Fonctionnement général', items:[
    { id:'gen1', label:'Absence d\'odeurs anormales à l\'intérieur de l\'habitation', gravite:'danger', regle:'Critère fonctionnel' },
    { id:'gen2', label:'Absence de remontée ou d\'épandage d\'effluents en surface visible', gravite:'danger', regle:'Critère fonctionnel' },
    { id:'gen3', label:'Poste de relevage (si présent) : alarme et flotteur fonctionnels', gravite:'majeur', regle:'Arrêté 07/09/2009' },
    { id:'gen4', label:'Carnet d\'entretien ou justificatifs de vidange disponibles', gravite:'mineur', regle:'Arrêté 07/09/2009' },
  ]},
];

function renderANCConformite() {
  var tb = document.getElementById('tab-bar');
  if (tb) tb.style.display = 'none';
  _ancConformiteState = {};

  var totalItems = ANC_CONFORMITE.reduce(function(n,s){ return n+s.items.length; }, 0);

  var html = '<div style="display:flex;align-items:center;gap:var(--s-2);padding:var(--s-3) var(--s-4);border-bottom:1px solid var(--c-border);position:sticky;top:0;background:var(--c-bg);z-index:10">'
    +'<button onclick="renderANCHome()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--c-text-3);padding:0;line-height:1">←</button>'
    +'<div style="flex:1"><div style="font-size:10px;color:var(--c-text-4)">ANC</div>'
    +'<div style="font-size:13px;font-weight:800;color:var(--c-text)">✅ Grille de conformité SPANC</div></div>'
  +'</div>';

  html += '<div style="padding:var(--s-3) var(--s-4)">';

  html += '<div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3);font-size:11px;color:#1E40AF;line-height:1.5">'
    +'Pour chaque critère : <strong>C</strong> = Conforme &nbsp;·&nbsp; <strong>NC</strong> = Non conforme &nbsp;·&nbsp; <strong>NV</strong> = Non vérifiable<br>'
    +'<span style="color:#64748B;font-size:10px">Outil pédagogique — ne remplace pas la conclusion officielle du SPANC.</span>'
  +'</div>';

  html += '<div id="anc-conf-score" style="background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3);display:flex;gap:var(--s-3);align-items:center">'
    +'<div style="flex:1"><div style="font-size:10px;color:var(--c-text-4);font-weight:700;text-transform:uppercase;letter-spacing:.05em">Score</div>'
    +'<div id="anc-conf-score-txt" style="font-size:13px;font-weight:800;color:var(--c-text-3)">0 / '+totalItems+' évalués</div></div>'
    +'<div id="anc-conf-danger-badge" style="display:none;font-size:10px;font-weight:700;color:#DC2626;background:#FEE2E2;padding:3px 8px;border-radius:20px">0 NC danger</div>'
  +'</div>';

  ANC_CONFORMITE.forEach(function(sec) {
    html += '<div style="margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">'+sec.section+'</div>'
      +'<div style="display:flex;flex-direction:column;gap:6px">';

    sec.items.forEach(function(item) {
      var gravColor = item.gravite==='danger' ? '#DC2626' : (item.gravite==='majeur' ? '#D97706' : '#64748B');
      var gravLabel = item.gravite==='danger' ? 'D' : (item.gravite==='majeur' ? 'M' : 'm');
      html += '<div id="anc-ci-'+item.id+'" style="background:var(--c-surface);border:1px solid var(--c-border);border-left:3px solid '+gravColor+';border-radius:var(--r-md);padding:var(--s-2) var(--s-3)">'
        +'<div style="display:flex;align-items:flex-start;gap:var(--s-2);margin-bottom:6px">'
        +'<span style="font-size:9px;font-weight:800;color:'+gravColor+';background:'+gravColor+'18;border-radius:4px;padding:2px 5px;flex-shrink:0;margin-top:1px">'+gravLabel+'</span>'
        +'<div style="font-size:11px;color:var(--c-text-2);line-height:1.45;flex:1">'+item.label+'</div>'
        +'</div>'
        +'<div style="display:flex;gap:5px">'
        +'<button data-conf-item="'+item.id+'" data-conf-val="C" onclick="_ancConformiteClick(\''+item.id+'\',\'C\')" style="flex:1;padding:5px 0;border-radius:var(--r-sm);border:1.5px solid #059669;background:#fff;font-size:11px;font-weight:700;color:#059669;cursor:pointer;transition:all .1s">C</button>'
        +'<button data-conf-item="'+item.id+'" data-conf-val="NC" onclick="_ancConformiteClick(\''+item.id+'\',\'NC\')" style="flex:1;padding:5px 0;border-radius:var(--r-sm);border:1.5px solid #DC2626;background:#fff;font-size:11px;font-weight:700;color:#DC2626;cursor:pointer;transition:all .1s">NC</button>'
        +'<button data-conf-item="'+item.id+'" data-conf-val="NV" onclick="_ancConformiteClick(\''+item.id+'\',\'NV\')" style="flex:1;padding:5px 0;border-radius:var(--r-sm);border:1.5px solid #94A3B8;background:#fff;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;transition:all .1s">NV</button>'
        +'</div>'
        +'<div style="font-size:9px;color:var(--c-text-4);margin-top:4px">'+item.regle+'</div>'
      +'</div>';
    });

    html += '</div></div>';
  });

  html += '<div id="anc-conf-resume" style="display:none;background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3);margin-top:var(--s-3)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Récapitulatif des non-conformités</div>'
    +'<div id="anc-conf-nc-list"></div>'
  +'</div>';

  html += '</div><div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

function _ancConformiteClick(itemId, val) {
  _ancConformiteState[itemId] = val;

  ANC_CONFORMITE.forEach(function(sec) {
    sec.items.forEach(function(item) {
      if (item.id !== itemId) return;
      var btns = document.querySelectorAll('[data-conf-item="'+itemId+'"]');
      btns.forEach(function(b) {
        var bval = b.getAttribute('data-conf-val');
        var active = bval === val;
        var col = bval==='C' ? '#059669' : (bval==='NC' ? '#DC2626' : '#94A3B8');
        b.style.background = active ? col : '#fff';
        b.style.color = active ? '#fff' : col;
        b.style.opacity = active ? '1' : '0.6';
      });
      var row = document.getElementById('anc-ci-'+itemId);
      if (row) {
        var gravColor = item.gravite==='danger' ? '#DC2626' : (item.gravite==='majeur' ? '#D97706' : '#64748B');
        row.style.borderLeft = '3px solid ' + (val==='NC' ? gravColor : (val==='C' ? '#059669' : '#94A3B8'));
        row.style.background = val==='NC' ? '#FFF5F5' : (val==='C' ? '#F0FFF4' : 'var(--c-surface)');
      }
    });
  });

  _ancUpdateConformiteScore();
}

function _ancUpdateConformiteScore() {
  var totalItems = ANC_CONFORMITE.reduce(function(n,s){ return n+s.items.length; }, 0);
  var C=0, NC=0, NV=0, NCdanger=0;
  var ncItems = [];

  ANC_CONFORMITE.forEach(function(sec) {
    sec.items.forEach(function(item) {
      var v = _ancConformiteState[item.id];
      if (v==='C') C++;
      else if (v==='NC') { NC++; ncItems.push(item); if (item.gravite==='danger') NCdanger++; }
      else if (v==='NV') NV++;
    });
  });

  var evaluated = C+NC+NV;
  var scoreTxt = document.getElementById('anc-conf-score-txt');
  var badge = document.getElementById('anc-conf-danger-badge');
  if (scoreTxt) {
    var pct = evaluated ? Math.round(C/evaluated*100) : 0;
    var col = NC===0 ? (evaluated===totalItems?'#059669':'var(--c-text-3)') : (NCdanger>0?'#DC2626':'#D97706');
    scoreTxt.innerHTML = '<span style="color:'+col+';font-size:15px">'+C+' C</span> &nbsp;·&nbsp; '
      +'<span style="color:#DC2626">'+NC+' NC</span> &nbsp;·&nbsp; '
      +'<span style="color:#94A3B8">'+NV+' NV</span>'
      +'<span style="font-size:10px;color:var(--c-text-4);margin-left:8px">'+evaluated+'/'+totalItems+'</span>';
  }
  if (badge) {
    if (NCdanger>0) { badge.style.display=''; badge.textContent=NCdanger+' NC danger'; }
    else badge.style.display='none';
  }

  var resume = document.getElementById('anc-conf-resume');
  var ncList = document.getElementById('anc-conf-nc-list');
  if (resume && ncList) {
    if (ncItems.length) {
      resume.style.display='';
      ncList.innerHTML = ncItems.map(function(item) {
        var gc = item.gravite==='danger'?'#DC2626':(item.gravite==='majeur'?'#D97706':'#64748B');
        return '<div style="padding:var(--s-2) var(--s-3);background:#fff;border:1px solid '+gc+'44;border-left:3px solid '+gc+';border-radius:var(--r-sm);margin-bottom:5px">'
          +'<div style="font-size:11px;font-weight:700;color:'+gc+'">'+item.gravite.toUpperCase()+' — '+item.section+'</div>'
          +'<div style="font-size:11px;color:var(--c-text-2);margin-top:2px;line-height:1.4">'+item.label+'</div>'
          +'<div style="font-size:9px;color:var(--c-text-4);margin-top:3px">'+item.regle+'</div>'
        +'</div>';
      }).join('');
    } else {
      resume.style.display = evaluated===totalItems ? '' : 'none';
      if (evaluated===totalItems) ncList.innerHTML = '<div style="padding:var(--s-3);font-size:12px;color:#059669;font-weight:700">✅ Aucune non-conformité relevée.</div>';
    }
  }
}

/* ═══════════════════════════════════════════════════════════
   COMPARATEUR — REDIRECT VERS CALCULATEUR EXISTANT
   ═══════════════════════════════════════════════════════════ */
function renderANCComparateur() {
  showModule('anc');
  setTimeout(function(){ if(typeof switchANCTab==='function') switchANCTab(1); }, 150);
}

/* ═══════════════════════════════════════════════════════════
   WIZARD DE DIMENSIONNEMENT COMPLET
   ═══════════════════════════════════════════════════════════ */
var _ancWizardState = { step:0, answers:{} };

function renderANCAideChoix(step, answers) {
  step = step || 0;
  answers = answers || {};
  _ancWizardState = { step:step, answers:answers };

  var tb = document.getElementById('tab-bar');
  if (tb) tb.style.display = 'none';

  var html = '<div style="display:flex;align-items:center;gap:var(--s-2);padding:var(--s-3) var(--s-4);border-bottom:1px solid var(--c-border);position:sticky;top:0;background:var(--c-bg);z-index:10">'
    +'<button onclick="renderANCHome()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--c-text-3);padding:0;line-height:1">←</button>'
    +'<div style="flex:1"><div style="font-size:10px;color:var(--c-text-4)">ANC</div>'
    +'<div style="font-size:13px;font-weight:800;color:var(--c-text)">📐 Dimensionnement ANC</div></div>'
  +'</div>';

  var steps = [
    { q:'Capacité de l\'habitation', sub:'Nombre d\'équivalents-habitants (EH) — 1 EH par pièce principale habitée', opts:['1–2 EH (studio, T2)','3–4 EH (T3, T4)','5 EH (T5 ou maison standard)','6–10 EH (grande maison)'], key:'eh' },
    { q:'Perméabilité du sol (test Porchet)', sub:'Résultat de l\'essai de perméabilité', opts:['K < 1 mm/min — sol imperméable (argile)','K = 1–5 mm/min — sol peu perméable','K = 5–15 mm/min — sol perméable (limon, sable)','K > 15 mm/min — sol très perméable (sable)','Test non réalisé'], key:'perm' },
    { q:'Profondeur de nappe phréatique', sub:'Profondeur mesurée ou estimée en période de hautes eaux', opts:['< 0,7 m — nappe affleurante','0,7 – 2 m — nappe proche','> 2 m — nappe profonde','Non connue'], key:'nappe' },
    { q:'Surface disponible pour la filière', sub:'Emprise maximale utilisable (hors accès, plantations, constructions)', opts:['< 30 m²','30 – 100 m²','100 – 300 m²','> 300 m²'], key:'surface' },
    { q:'Alimentation électrique disponible', sub:'À moins de 30 m de la zone de traitement', opts:['Oui','Non'], key:'elec' },
    { q:'Type d\'occupation', sub:'Influence la tolérance à l\'intermittence des filières biologiques', opts:['Résidence principale — occupation permanente','Résidence secondaire — occupation saisonnière ou intermittente'], key:'usage' },
  ];

  if (step < steps.length) {
    var s = steps[step];
    var pct = Math.round((step / steps.length) * 100);
    html += '<div style="padding:var(--s-3) var(--s-4)">';
    html += '<div style="background:var(--c-surface-2);border-radius:4px;height:4px;margin-bottom:var(--s-3);overflow:hidden">'
      +'<div style="height:100%;width:'+pct+'%;background:var(--c-anc);border-radius:4px;transition:width .3s"></div>'
    +'</div>';
    html += '<div style="background:var(--c-anc-l);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;color:var(--c-anc);font-weight:700;margin-bottom:4px">'+( step+1)+' / '+steps.length+'</div>'
      +'<div style="font-size:13px;font-weight:800;color:var(--c-text)">'+s.q+'</div>'
      +(s.sub?'<div style="font-size:10px;color:var(--c-text-4);margin-top:4px;line-height:1.4">'+s.sub+'</div>':'')
    +'</div>';
    html += '<div style="display:flex;flex-direction:column;gap:var(--s-2)">';
    s.opts.forEach(function(opt){
      html += '<button onclick="ancWizardNext('+step+',\''+s.key+'\','+JSON.stringify(opt)+')" '
        +'style="padding:var(--s-3) var(--s-4);background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-md);font-size:13px;font-weight:600;color:var(--c-text);cursor:pointer;text-align:left;transition:border-color .1s" '
        +'onmousedown="this.style.borderColor=\'var(--c-anc)\'" onmouseup="this.style.borderColor=\'var(--c-border)\'">'
        +opt+'</button>';
    });
    html += '</div>';
    if (step > 0) html += '<button onclick="renderANCAideChoix('+(step-1)+','+JSON.stringify(answers)+')" style="margin-top:var(--s-3);background:none;border:none;color:var(--c-text-3);cursor:pointer;font-size:12px">← Question précédente</button>';
    html += '</div>';
  } else {
    html += _ancWizardResult(answers);
  }

  html += '<div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

function ancWizardNext(step, key, val) {
  var ans = Object.assign({}, _ancWizardState.answers);
  ans[key] = val;
  renderANCAideChoix(step+1, ans);
}

function _ancWizardResult(ans) {
  var perm = ans.perm||'';
  var nappe = ans.nappe||'';
  var surface = ans.surface||'';
  var elec = ans.elec||'';
  var usage = ans.usage||'';
  var ehStr = ans.eh||'';

  var eh = ehStr.indexOf('1–2')>=0 ? 2 : (ehStr.indexOf('3–4')>=0 ? 4 : (ehStr.indexOf('5 EH')>=0 ? 5 : (ehStr.indexOf('6–10')>=0 ? 8 : 4)));
  var vFosse = Math.max(eh * 200, 3000);
  var isAffleurante = nappe.indexOf('0,7 m')>=0;
  var isImperméable = perm.indexOf('< 1')>=0;
  var isPeuPerm = perm.indexOf('1–5')>=0;
  var isPerméable = perm.indexOf('5–15')>=0;
  var isTrèsPerméable = perm.indexOf('> 15')>=0;
  var isPetiteSurface = surface.indexOf('< 30')>=0 || surface.indexOf('30 –')>=0;
  var isSecondaire = usage.indexOf('secondaire')>=0;

  var filières = [];

  if (isAffleurante) {
    var sTertre = eh * 6;
    filières.push({ nom:'Tertre d\'infiltration', ico:'⛰️', raison:'Nappe affleurante → filière surélevée obligatoire', dim:'Fosse '+vFosse+' L · Surface tertre ≈ '+sTertre+' m²', budget:'15 000 – 28 000 €', entretien:'Vidange fosse ~3 ans', warn:null });
    if (elec==='Oui') filières.push({ nom:'Microstation agréée CE', ico:'⚙️', raison:'Nappe affleurante + électricité : filière compacte possible', dim:'Fosse '+vFosse+' L · Emprise selon agrément', budget:'8 000 – 14 000 € + contrat ~300 €/an', entretien:'Contrat annuel obligatoire', warn: isSecondaire ? 'Sensible à l\'intermittence — vérifier l\'agrément CE' : null });
  } else if (isImperméable) {
    var sFSD = eh * 4;
    filières.push({ nom:'Filtre à sable vertical drainé', ico:'🟠', raison:'Sol imperméable (K < 1 mm/min) → évacuation par drain obligatoire', dim:'Fosse '+vFosse+' L · Surface filtre ≈ '+sFSD+' m² · Exutoire requis', budget:'10 000 – 18 000 €', entretien:'Vidange fosse ~3 ans · curage drains ~5 ans', warn:'Exutoire = autorisation obligatoire (fossé ou milieu)' });
    if (elec==='Oui') filières.push({ nom:'Microstation agréée CE', ico:'⚙️', raison:'Sol imperméable + électricité', dim:'Fosse '+vFosse+' L · Emprise selon agrément CE', budget:'8 000 – 14 000 € + contrat ~300 €/an', entretien:'Contrat annuel obligatoire', warn: isSecondaire ? 'Sensible à l\'intermittence — vérifier l\'agrément CE' : null });
    filières.push({ nom:'Filtre compact agréé CE', ico:'📦', raison:'Sol imperméable + faible emprise', dim:'Fosse '+vFosse+' L · Emprise réduite selon modèle', budget:'7 000 – 13 000 €', entretien:'Selon guide agrément CE', warn:null });
  } else if (isPeuPerm || isPerméable) {
    var kMoy = isPeuPerm ? 3 : 10;
    var sTranch = Math.round(eh * 200 / (kMoy * 1.44 * 30));
    var sFSVND = eh * 5;
    var sFPR = eh * 5;
    filières.push({ nom:'Tranchées d\'épandage', ico:'🌿', raison:'Sol perméable — filière classique adaptée', dim:'Fosse '+vFosse+' L · Surface épandage ≈ '+Math.max(sTranch,eh*10)+' m² (à affiner avec Porchet)', budget:'5 000 – 10 000 €', entretien:'Vidange fosse ~3 ans · entretien minimal', warn:null });
    filières.push({ nom:'Filtre à sable non drainé', ico:'🪨', raison:'Sol perméable — filtre artificiel, infiltration naturelle sous massif', dim:'Fosse '+vFosse+' L · Surface filtre ≈ '+sFSVND+' m²', budget:'8 000 – 14 000 €', entretien:'Vidange fosse ~3 ans', warn:null });
    if (!isPetiteSurface) filières.push({ nom:'Filtre planté de roseaux (FPR)', ico:'🌾', raison:'Sol perméable + grande emprise disponible', dim:'Fosse '+vFosse+' L · Surface FPR ≈ '+sFPR+' m²', budget:'15 000 – 30 000 €', entretien:'Fauche annuelle · vidange fosse ~3 ans', warn:null });
  } else if (isTrèsPerméable) {
    filières.push({ nom:'Tranchées d\'épandage', ico:'🌿', raison:'Sol très perméable — épandage efficace', dim:'Fosse '+vFosse+' L · Surface épandage à calculer (test Porchet requis)', budget:'5 000 – 10 000 €', entretien:'Vidange fosse ~3 ans', warn:'K > 15 mm/min → vérifier la distance 35 m aux captages AEP' });
  } else {
    filières.push({ nom:'Test de perméabilité (Porchet) indispensable', ico:'🔬', raison:'Sans résultat de perméabilité, aucune filière ne peut être dimensionnée', dim:'—', budget:'~150–300 € (prestataire agréé)', entretien:'—', warn:'Obligatoire avant toute conception de filière d\'épandage' });
  }

  if (isPetiteSurface && elec==='Oui') {
    filières = [
      { nom:'Microstation agréée CE', ico:'⚙️', raison:'Surface très réduite + électricité disponible — filière la plus compacte', dim:'Fosse '+vFosse+' L · Emprise selon agrément CE', budget:'8 000 – 14 000 € + contrat ~300 €/an', entretien:'Contrat annuel obligatoire', warn: isSecondaire ? 'Sensible à l\'intermittence' : null },
      { nom:'Filtre compact agréé CE', ico:'📦', raison:'Surface réduite, pas de contrainte électrique stricte', dim:'Fosse '+vFosse+' L · Emprise réduite selon modèle', budget:'7 000 – 13 000 €', entretien:'Selon guide agrément CE', warn:null },
    ];
  }

  var html = '<div style="padding:var(--s-3) var(--s-4)">';

  html += '<div style="background:#D1FAE5;border:1.5px solid #059669;border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
    +'<div style="font-size:11px;font-weight:800;color:#065F46;margin-bottom:4px">Filières à étudier — '+eh+' EH</div>'
    +'<div style="font-size:10px;color:#065F46;line-height:1.5">Dimensionnements indicatifs (Arrêté 07/09/2009 + DTU 64.1). Ils doivent être affinés par un bureau d\'études et validés par le SPANC.</div>'
  +'</div>';

  html += '<div style="background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-2) var(--s-3);margin-bottom:var(--s-3);display:flex;flex-wrap:wrap;gap:var(--s-2)">';
  [{l:'Fosse toutes eaux',v:vFosse+' L min.'},{l:'Capacité',v:eh+' EH'},{l:'Perméabilité',v:perm.split(' ')[0]||'—'},{l:'Nappe',v:nappe.split(' –')[0]||'—'}].forEach(function(r){
    html += '<div style="background:#fff;border:1px solid var(--c-border);border-radius:var(--r-sm);padding:4px 10px;text-align:center">'
      +'<div style="font-size:9px;color:var(--c-text-4);text-transform:uppercase">'+r.l+'</div>'
      +'<div style="font-size:12px;font-weight:800;color:var(--c-text)">'+r.v+'</div>'
    +'</div>';
  });
  html += '</div>';

  html += '<div style="display:flex;flex-direction:column;gap:var(--s-2);margin-bottom:var(--s-3)">';
  filières.forEach(function(f, i){
    var highlight = i===0 ? 'border:1.5px solid #059669;background:#F0FFF4' : 'border:1px solid var(--c-border);background:var(--c-surface)';
    html += '<div style="'+highlight+';border-radius:var(--r-md);padding:var(--s-3)">'
      +(i===0?'<div style="font-size:9px;font-weight:800;color:#059669;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px">Filière recommandée</div>':'')
      +'<div style="font-size:13px;font-weight:700;color:var(--c-text);margin-bottom:4px">'+f.ico+' '+f.nom+'</div>'
      +'<div style="font-size:11px;color:var(--c-text-3);margin-bottom:6px">'+f.raison+'</div>'
      +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10px">'
        +'<div style="background:var(--c-surface-2);border-radius:var(--r-sm);padding:4px 7px"><span style="color:var(--c-text-4)">Dimensions · </span><span style="font-weight:700;color:var(--c-text)">'+f.dim+'</span></div>'
        +'<div style="background:var(--c-surface-2);border-radius:var(--r-sm);padding:4px 7px"><span style="color:var(--c-text-4)">Budget · </span><span style="font-weight:700;color:var(--c-text)">'+f.budget+'</span></div>'
        +'<div style="background:var(--c-surface-2);border-radius:var(--r-sm);padding:4px 7px;grid-column:1/-1"><span style="color:var(--c-text-4)">Entretien · </span><span style="color:var(--c-text-2)">'+f.entretien+'</span></div>'
      +'</div>'
      +(f.warn?'<div style="margin-top:6px;font-size:10px;color:#D97706;background:#FFFBEB;border-radius:var(--r-sm);padding:4px 8px">⚠ '+f.warn+'</div>':'')
    +'</div>';
  });
  html += '</div>';

  html += '<div style="display:flex;gap:var(--s-2);margin-bottom:var(--s-2)">'
    +'<button onclick="renderANCAideChoix(0,{})" style="flex:1;padding:var(--s-3);background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);font-size:12px;cursor:pointer;color:var(--c-text-2)">↩ Recommencer</button>'
    +'<button onclick="showModule(\'calc-anc\')" style="flex:2;padding:var(--s-3);background:var(--c-anc-l);border:1.5px solid var(--c-anc);border-radius:var(--r-md);font-size:12px;cursor:pointer;color:var(--c-anc);font-weight:700">⚡ Calculer précisément</button>'
  +'</div>';
  html += '</div>';
  return html;
}

/* ═══════════════════════════════════════════════════════════
   RAPPORT DE VISITE SPANC
   ═══════════════════════════════════════════════════════════ */
function renderANCRapport() {
  var tb = document.getElementById('tab-bar');
  if (tb) tb.style.display = 'none';
  var btn = function(id,label,color,bg){
    return '<label style="display:flex;gap:var(--s-2);align-items:flex-start;padding:var(--s-2) var(--s-3);background:'+bg+';border:1.5px solid '+color+';border-radius:var(--r-md);cursor:pointer;margin-bottom:var(--s-2)">'
      +'<input type="radio" name="rp-conclusion" value="'+id+'" style="margin-top:2px;accent-color:'+color+'">'
      +'<div style="font-size:12px;font-weight:700;color:'+color+'">'+label+'</div></label>';
  };
  var field = function(id,label,type,ph){
    return '<div style="margin-bottom:var(--s-2)">'
      +'<label style="display:block;font-size:10px;font-weight:700;color:var(--c-text-3);margin-bottom:3px">'+label+'</label>'
      +'<input id="'+id+'" type="'+type+'" placeholder="'+(ph||'')+'" style="width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid var(--c-border);border-radius:var(--r-sm);font-size:12px;background:var(--c-bg);color:var(--c-text)">'
      +'</div>';
  };
  var section = function(title){ return '<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.04em;margin-bottom:var(--s-2)">'+title+'</div>'; };
  var card = function(content){ return '<div style="background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'+content+'</div>'; };

  var html = '<div style="padding:var(--s-3) var(--s-4)">';
  html += '<div style="display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-3)">'
    +'<button onclick="renderANCHome()" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--c-text-3);padding:0">←</button>'
    +'<div><div style="font-size:16px;font-weight:800;color:var(--c-text)">Rapport de visite SPANC</div>'
    +'<div style="font-size:11px;color:var(--c-text-3)">Saisir puis exporter en fichier téléchargeable</div></div></div>';

  html += card(section('Identification')
    +field('rp-date','Date de visite','date','')
    +field('rp-ref','N° de dossier','text','SPANC-2026-0001')
    +field('rp-adresse','Adresse du bien','text','12 rue des Prés, 47000 Agen')
    +field('rp-proprio','Propriétaire / Occupant','text','Nom Prénom')
    +field('rp-parcelle','Référence cadastrale','text','AB 0123')
    +field('rp-agent','Agent SPANC','text','Nom de l\'agent')
  );

  html += card(section('Installation')
    +'<div style="margin-bottom:var(--s-2)"><label style="display:block;font-size:10px;font-weight:700;color:var(--c-text-3);margin-bottom:3px">Type de filière</label>'
    +'<select id="rp-filiere" style="width:100%;padding:8px 10px;border:1px solid var(--c-border);border-radius:var(--r-sm);font-size:12px;background:var(--c-bg);color:var(--c-text)">'
    +'<option value="">— Sélectionner —</option>'
    +'<option>Fosse toutes eaux + tranchées d\'épandage</option>'
    +'<option>Fosse toutes eaux + filtre à sable non drainé</option>'
    +'<option>Fosse toutes eaux + filtre à sable drainé</option>'
    +'<option>Fosse toutes eaux + tertre d\'infiltration</option>'
    +'<option>Filtre planté de roseaux (FPR)</option>'
    +'<option>Microstation boues activées agréée CE</option>'
    +'<option>Filtre compact agréé CE</option>'
    +'<option>Autre (préciser dans observations)</option>'
    +'</select></div>'
    +field('rp-annee','Année installation estimée','text','ex: 1998')
    +field('rp-eh','Capacité (EH)','text','ex: 5 EH')
    +field('rp-vidange','Dernière vidange fosse','text','ex: 03/2023')
  );

  html += card(section('Observations')
    +'<textarea id="rp-obs" rows="4" placeholder="Constats : état général, anomalies observées, points de vérification..." style="width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid var(--c-border);border-radius:var(--r-sm);font-size:12px;background:var(--c-bg);color:var(--c-text);resize:vertical"></textarea>'
  );

  html += card(section('Conclusion')
    +btn('CONFORME','✅ Conforme — aucun risque sanitaire ou environnemental','#059669','#F0FFF4')
    +btn('NON_CONFORME_4ANS','⚠ Non conforme — délai 4 ans (pas de risque immédiat)','#D97706','#FFFBEB')
    +btn('NON_CONFORME','❌ Non conforme — travaux obligatoires (risque avéré)','#DC2626','#FFF5F5')
  );

  html += '<button onclick="_ancExportRapport()" style="width:100%;padding:var(--s-3);background:var(--c-anc);color:#fff;border:none;border-radius:var(--r-md);font-size:14px;font-weight:800;cursor:pointer;margin-bottom:var(--s-4)">📄 Télécharger le rapport</button>';
  html += '<div class="pb-nav"></div></div>';
  document.getElementById('main-content').innerHTML = html;
}

function _ancExportRapport() {
  var g = function(id){ var el = document.getElementById(id); return el ? (el.tagName==='SELECT'?el.options[el.selectedIndex].text:el.value).trim() : ''; };
  var conclEl = document.querySelector('input[name="rp-conclusion"]:checked');
  var conclVal = conclEl ? conclEl.value : '';
  var conclTextes = {
    'CONFORME':         'CONFORME\nL\'installation ne présente pas de risques sanitaires ou environnementaux.',
    'NON_CONFORME_4ANS':'NON CONFORME — DÉLAI 4 ANS\nNon-conformité sans risque immédiat. Mise en conformité requise dans un délai de 4 ans.',
    'NON_CONFORME':     'NON CONFORME — TRAVAUX OBLIGATOIRES\nL\'installation présente des risques sanitaires ou environnementaux avérés.',
  };
  if (!conclVal) { alert('Sélectionner une conclusion avant d\'exporter.'); return; }
  var d = g('rp-date') ? new Date(g('rp-date')).toLocaleDateString('fr-FR') : new Date().toLocaleDateString('fr-FR');
  var lines = [
    'RAPPORT DE VISITE SPANC',
    '═══════════════════════════════════════════════',
    '',
    'Date de visite     : '+d,
    'N° de dossier      : '+(g('rp-ref')||'—'),
    'Agent SPANC        : '+(g('rp-agent')||'—'),
    '',
    '─── IDENTIFICATION ────────────────────────────',
    'Adresse            : '+(g('rp-adresse')||'—'),
    'Propriétaire       : '+(g('rp-proprio')||'—'),
    'Réf. cadastrale    : '+(g('rp-parcelle')||'—'),
    '',
    '─── INSTALLATION ──────────────────────────────',
    'Type de filière    : '+(g('rp-filiere')||'—'),
    'Année installation : '+(g('rp-annee')||'—'),
    'Capacité           : '+(g('rp-eh')||'—'),
    'Dernière vidange   : '+(g('rp-vidange')||'—'),
    '',
    '─── OBSERVATIONS ──────────────────────────────',
    (g('rp-obs')||'Aucune observation particulière.'),
    '',
    '─── CONCLUSION ────────────────────────────────',
    conclTextes[conclVal],
    '',
    '─── SIGNATURE ─────────────────────────────────',
    'Fait le '+d,
    'L\'agent SPANC : '+(g('rp-agent')||'___________________'),
    '',
    '═══════════════════════════════════════════════',
    'Document généré par HydroCalc — hydrocalc.fr',
  ];
  var blob = new Blob([lines.join('\n')], {type:'text/plain;charset=utf-8'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a'); a.href = url;
  a.download = 'rapport-spanc-'+(g('rp-ref')||d).replace(/[^a-z0-9]/gi,'-').toLowerCase()+'.txt';
  a.click(); URL.revokeObjectURL(url);
  _ancShowToast('✅ Rapport téléchargé');
}

function _ancShowToast(msg) {
  var t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#059669;color:#fff;padding:10px 22px;border-radius:24px;font-size:13px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,0,0,.25);pointer-events:none';
  document.body.appendChild(t);
  setTimeout(function(){ t.style.opacity='0'; t.style.transition='opacity .4s'; setTimeout(function(){ t.remove(); },400); }, 2600);
}

/* ═══════════════════════════════════════════════════════════
   CALENDRIER D'ENTRETIEN
   ═══════════════════════════════════════════════════════════ */
function renderANCCalendrier() {
  var tb = document.getElementById('tab-bar');
  if (tb) tb.style.display = 'none';
  var html = '<div style="padding:var(--s-3) var(--s-4)">';
  html += '<div style="display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-3)">'
    +'<button onclick="renderANCHome()" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--c-text-3);padding:0">←</button>'
    +'<div><div style="font-size:16px;font-weight:800;color:var(--c-text)">Calendrier d\'entretien</div>'
    +'<div style="font-size:11px;color:var(--c-text-3)">Prochaines échéances de maintenance</div></div></div>';

  html += '<div style="background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
    +'<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.04em;margin-bottom:var(--s-2)">Paramètres de l\'installation</div>'
    +'<div style="margin-bottom:var(--s-2)"><label style="display:block;font-size:10px;font-weight:700;color:var(--c-text-3);margin-bottom:3px">Type de filière</label>'
    +'<select id="cal-type" style="width:100%;padding:8px 10px;border:1px solid var(--c-border);border-radius:var(--r-sm);font-size:12px;background:var(--c-bg);color:var(--c-text)">'
    +'<option value="epandage">Tranchées d\'épandage</option>'
    +'<option value="fsv-nd">Filtre à sable non drainé</option>'
    +'<option value="fsv-d">Filtre à sable drainé</option>'
    +'<option value="tertre">Tertre d\'infiltration</option>'
    +'<option value="fpr">Filtre planté de roseaux (FPR)</option>'
    +'<option value="micro">Microstation agréée CE</option>'
    +'<option value="compact">Filtre compact agréé CE</option>'
    +'</select></div>'
    +'<div style="margin-bottom:var(--s-2)"><label style="display:block;font-size:10px;font-weight:700;color:var(--c-text-3);margin-bottom:3px">Dernière vidange fosse</label>'
    +'<input id="cal-vidange" type="month" style="width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid var(--c-border);border-radius:var(--r-sm);font-size:12px;background:var(--c-bg);color:var(--c-text)"></div>'
    +'<div style="margin-bottom:var(--s-2)"><label style="display:block;font-size:10px;font-weight:700;color:var(--c-text-3);margin-bottom:3px">Dernier contrôle SPANC</label>'
    +'<input id="cal-spanc" type="month" style="width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid var(--c-border);border-radius:var(--r-sm);font-size:12px;background:var(--c-bg);color:var(--c-text)"></div>'
    +'<button onclick="_ancCalcCalendrier()" style="width:100%;padding:var(--s-3);background:var(--c-anc);color:#fff;border:none;border-radius:var(--r-md);font-size:13px;font-weight:700;cursor:pointer">📅 Calculer les échéances</button>'
    +'</div>';
  html += '<div id="cal-result"></div>';
  html += '<div class="pb-nav"></div></div>';
  document.getElementById('main-content').innerHTML = html;
}

function _ancCalcCalendrier() {
  var type = document.getElementById('cal-type');
  var vidEl = document.getElementById('cal-vidange');
  var spancEl = document.getElementById('cal-spanc');
  var typeVal = type ? type.value : 'epandage';
  var now = new Date();

  var addMonths = function(d, m){ var r=new Date(d); r.setMonth(r.getMonth()+m); return r; };
  var fmt = function(d){ return d.toLocaleDateString('fr-FR',{month:'long',year:'numeric'}); };
  var urgency = function(d){ var diff=(d-now)/(1000*60*60*24*30); return diff<0?'danger':(diff<6?'warn':'ok'); };

  var tasks = [];

  var vidBase = vidEl && vidEl.value ? new Date(vidEl.value) : addMonths(now,-18);
  tasks.push({ label:'Vidange fosse toutes eaux', ico:'🚜', info:'Quand boues > 50 % volume (≈ 3–4 ans)', due: addMonths(vidBase, 36) });

  var spancBase = spancEl && spancEl.value ? new Date(spancEl.value) : addMonths(now,-36);
  tasks.push({ label:'Contrôle SPANC', ico:'✅', info:'Obligatoire tous les 8–10 ans', due: addMonths(spancBase, 96) });

  if (typeVal === 'micro') {
    tasks.push({ label:'Contrat de maintenance microstation', ico:'⚙️', info:'Contrat annuel obligatoire (agrément CE)', due: addMonths(now, 10) });
    tasks.push({ label:'Vérification aérateurs / membranes', ico:'🔧', info:'Selon préconisations constructeur', due: addMonths(now, 12) });
  }
  if (typeVal === 'fsv-d' || typeVal === 'tertre') {
    tasks.push({ label:'Inspection drains de collecte', ico:'🔍', info:'Curage si colmatage — environ tous les 5 ans', due: addMonths(vidBase, 60) });
  }
  if (typeVal === 'fpr') {
    var marsFauche = new Date(now.getFullYear(), 2, 1);
    if (marsFauche < now) marsFauche.setFullYear(marsFauche.getFullYear()+1);
    tasks.push({ label:'Fauche des roseaux', ico:'🌾', info:'Annuelle — mars idéalement (après période végétation)', due: marsFauche });
    tasks.push({ label:'Inspection étanchéité base', ico:'🛡️', info:'Contrôle géomembrane — tous les 5 ans', due: addMonths(spancBase, 60) });
  }
  if (typeVal === 'compact') {
    tasks.push({ label:'Entretien filtre compact', ico:'📦', info:'Selon guide agrément CE — généralement annuel', due: addMonths(now, 11) });
  }
  tasks.push({ label:'Vérification sortie de ventilation', ico:'💨', info:'S\'assurer que le tuyau est libre (toiture, faîtage)', due: addMonths(now, 6) });
  tasks.push({ label:'Inspection regards et tampons', ico:'🔎', info:'Accessibilité, étanchéité, absence de végétation racinaire', due: addMonths(now, 12) });

  tasks.sort(function(a,b){ return a.due - b.due; });

  var colors = { danger:'#DC2626', warn:'#D97706', ok:'#059669' };
  var bgs =    { danger:'#FFF5F5', warn:'#FFFBEB', ok:'#F0FFF4' };

  var html = '<div style="display:flex;flex-direction:column;gap:var(--s-2);margin-bottom:var(--s-4)">';
  tasks.forEach(function(t) {
    var u = urgency(t.due);
    var retard = t.due < now;
    html += '<div style="background:'+bgs[u]+';border:1.5px solid '+colors[u]+';border-radius:var(--r-md);padding:var(--s-3)">'
      +'<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:var(--s-2)">'
        +'<div>'
          +'<div style="font-size:12px;font-weight:700;color:var(--c-text)">'+t.ico+' '+t.label+'</div>'
          +'<div style="font-size:10px;color:var(--c-text-3);margin-top:2px">'+t.info+'</div>'
        +'</div>'
        +'<div style="text-align:right;flex-shrink:0">'
          +'<div style="font-size:11px;font-weight:800;color:'+colors[u]+'">'+fmt(t.due)+'</div>'
          +(retard?'<div style="font-size:9px;font-weight:700;color:#DC2626">EN RETARD</div>':'')
        +'</div>'
      +'</div>'
    +'</div>';
  });
  html += '</div>';
  document.getElementById('cal-result').innerHTML = html;
}

/* ═══════════════════════════════════════════════════════════
   NON-CONFORMITÉS FRÉQUENTES
   ═══════════════════════════════════════════════════════════ */
function renderANCNonConformites() {
  var tb = document.getElementById('tab-bar');
  if (tb) tb.style.display = 'none';
  var ncs = [
    { risque:'danger', titre:'Absence de prétraitement', cause:'Installation sans fosse ou fosse ancienne hors service', solution:'Mise en place d\'une fosse toutes eaux aux normes (min. 3 m³ pour < 5 EH)', ref:'Art. 6 — Arrêté 07/09/2009' },
    { risque:'danger', titre:'Raccordement eaux pluviales sur la fosse', cause:'Toiture, cour ou parking raccordés aux eaux usées domestiques', solution:'Déconnexion obligatoire — créer un réseau EP séparatif', ref:'Art. 6 — Arrêté 07/09/2009' },
    { risque:'danger', titre:'Rejet direct non traité en milieu superficiel', cause:'Absence ou défaillance totale de filière de traitement', solution:'Mise en place immédiate d\'un traitement secondaire adapté', ref:'Art. 4 — Arrêté 07/09/2009' },
    { risque:'danger', titre:'Fosse enterrée sous construction', cause:'Extension ou construction ultérieure sur la zone d\'épandage ou la fosse', solution:'Déplacement de la filière — emprise dégagée et accessible obligatoire', ref:'Art. 14 — DTU 64.1' },
    { risque:'warn',   titre:'Ventilation absente ou obstruée', cause:'Siphon condensé, tuyau bouché ou absent, conduit non sorti en toiture', solution:'Installer ou déboucher la colonne de ventilation Ø ≥ 100 mm sortant au-dessus du faîtage', ref:'Art. 7 — Arrêté 07/09/2009' },
    { risque:'warn',   titre:'Vidange jamais réalisée ou trop rare', cause:'Boues dépassant 50 % du volume — risque de passage vers la filière', solution:'Vidange immédiate par vidangeur agréé — prévoir contrat tous les 3–4 ans', ref:'Art. 9 — Arrêté 07/09/2009' },
    { risque:'warn',   titre:'Fosse septique (eaux-vannes seules)', cause:'Ouvrage ancien, interdit à neuf depuis 2009 — eaux ménagères non traitées', solution:'Remplacement par fosse toutes eaux — retracer le circuit des eaux ménagères', ref:'Arrêté 07/09/2009 — interdiction nouvelles installations' },
    { risque:'warn',   titre:'Absence de regard de collecte accessible', cause:'Tampon bétonné, recouvert, introuvable', solution:'Localiser et rendre accessible en permanence tous les regards', ref:'Art. 14 — DTU 64.1' },
    { risque:'warn',   titre:'Filière dans zone constructible ou sous végétation racinaire', cause:'Plantation d\'arbres sur la filière, construction d\'abri ou terrasse', solution:'Dégager et interdire toute construction / plantation racinaire dans l\'emprise', ref:'DTU 64.1 — zones d\'exclusion' },
    { risque:'info',   titre:'Absence de préfiltre en sortie de fosse', cause:'Oubli à la conception ou remplacement non effectué', solution:'Installer un préfiltre d\'accès facile — entretien annuel', ref:'DTU 64.1 — recommandation' },
    { risque:'info',   titre:'Dimensionnement insuffisant (< 3 EH pour usage familial)', cause:'Calcul initial sous-estimé ou charge augmentée (extension habitation)', solution:'Vérifier usage réel — redimensionner si nécessaire avec bureau d\'études', ref:'Art. 6 — Arrêté 07/09/2009' },
    { risque:'info',   titre:'Contrat de maintenance microstation absent', cause:'Obligation liée à l\'agrément CE non respectée', solution:'Souscrire un contrat annuel auprès du fabricant ou prestataire agréé', ref:'Guide d\'utilisation agrément CE' },
  ];
  var colors = { danger:'#DC2626', warn:'#D97706', info:'#0891B2' };
  var bgs =    { danger:'#FFF5F5', warn:'#FFFBEB', info:'#F0F9FF' };
  var labels  = { danger:'⛔ Risque élevé', warn:'⚠ Non-conformité', info:'ℹ Attention' };

  var html = '<div style="padding:var(--s-3) var(--s-4)">';
  html += '<div style="display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-3)">'
    +'<button onclick="renderANCHome()" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--c-text-3);padding:0">←</button>'
    +'<div><div style="font-size:16px;font-weight:800;color:var(--c-text)">Non-conformités fréquentes</div>'
    +'<div style="font-size:11px;color:var(--c-text-3)">Référentiel SPANC — Arrêté 07/09/2009</div></div></div>';

  html += '<div style="background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
    +'<div style="font-size:11px;color:var(--c-text-3);line-height:1.5">'
    +'⛔ <b>Risque élevé</b> : non-conformité présentant un risque sanitaire ou environnemental avéré — travaux immédiats.<br>'
    +'⚠ <b>Non-conformité</b> : risque potentiel — travaux requis, délai 4 ans si pas de risque immédiat.<br>'
    +'ℹ <b>Attention</b> : point de vigilance ou défaut mineur à régulariser.'
    +'</div></div>';

  html += '<div style="display:flex;flex-direction:column;gap:var(--s-2);margin-bottom:var(--s-4)">';
  ncs.forEach(function(nc) {
    html += '<div style="border:1.5px solid '+colors[nc.risque]+';border-radius:var(--r-md);background:'+bgs[nc.risque]+';overflow:hidden">'
      +'<div style="padding:var(--s-2) var(--s-3);border-bottom:1px solid '+colors[nc.risque]+'20">'
        +'<span style="font-size:9px;font-weight:800;color:'+colors[nc.risque]+';text-transform:uppercase;letter-spacing:.04em">'+labels[nc.risque]+'</span>'
        +'<div style="font-size:12px;font-weight:800;color:var(--c-text);margin-top:2px">'+nc.titre+'</div>'
      +'</div>'
      +'<div style="padding:var(--s-2) var(--s-3)">'
        +'<div style="font-size:10px;color:var(--c-text-3);margin-bottom:4px"><span style="font-weight:700;color:var(--c-text-2)">Cause · </span>'+nc.cause+'</div>'
        +'<div style="font-size:10px;color:var(--c-text-3);margin-bottom:4px"><span style="font-weight:700;color:#059669">Solution · </span>'+nc.solution+'</div>'
        +'<div style="font-size:9px;color:var(--c-text-4)">📖 '+nc.ref+'</div>'
      +'</div>'
    +'</div>';
  });
  html += '</div>';
  html += '<div class="pb-nav"></div></div>';
  document.getElementById('main-content').innerHTML = html;
}

/* ─── FILIÈRES TRADITIONNELLES ─── */
function renderANCFilTrad() {
  var tb = document.getElementById('tab-bar'); if (tb) tb.style.display = 'none';
  var fiches = [
    { ico:'🪣', name:'Fosse toutes eaux', sub:'Prétraitement obligatoire · Décantation anaérobie · 3 m³ mini',
      schema: `<div style="margin:4px 0 8px">
<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto 10px;border-radius:8px">
  <rect width="420" height="230" fill="#f0fdf4" rx="8"/>
  <text x="210" y="17" text-anchor="middle" font-size="10" font-weight="bold" fill="#065F46" font-family="sans-serif">Coupe de principe — Fosse toutes eaux</text>
  <rect x="60" y="40" width="300" height="162" rx="18" fill="#e0f2fe" stroke="#065F46" stroke-width="2.5"/>
  <rect x="61" y="41" width="298" height="28" rx="18" fill="#f0fdf4" opacity="0.9"/>
  <text x="210" y="59" text-anchor="middle" font-size="9" fill="#059669" font-family="sans-serif" font-weight="bold">Gaz / espace libre</text>
  <rect x="61" y="69" width="298" height="16" fill="#fbbf24" opacity="0.5"/>
  <text x="145" y="81" text-anchor="middle" font-size="8" fill="#92400e" font-family="sans-serif" font-weight="bold">Flottants</text>
  <rect x="61" y="85" width="298" height="60" fill="#93c5fd" opacity="0.35"/>
  <text x="145" y="103" text-anchor="middle" font-size="9" fill="#1e40af" font-family="sans-serif" font-weight="bold">SÉPARATION</text>
  <text x="145" y="118" text-anchor="middle" font-size="9" fill="#1e40af" font-family="sans-serif" font-weight="bold">DÉCANTATION</text>
  <rect x="61" y="145" width="298" height="22" fill="#6366f1" opacity="0.2"/>
  <text x="145" y="160" text-anchor="middle" font-size="8.5" fill="#4338ca" font-family="sans-serif" font-weight="bold">LIQUÉFACTION</text>
  <rect x="61" y="167" width="298" height="34" fill="#78350f" opacity="0.45"/>
  <text x="145" y="188" text-anchor="middle" font-size="9" fill="#451a03" font-family="sans-serif" font-weight="bold">Boues</text>
  <line x1="308" y1="41" x2="308" y2="201" stroke="#065F46" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.7"/>
  <circle cx="326" cy="108" r="4" fill="#6b7280" opacity="0.5"/>
  <circle cx="338" cy="98" r="4" fill="#6b7280" opacity="0.5"/>
  <circle cx="334" cy="116" r="4" fill="#6b7280" opacity="0.5"/>
  <circle cx="348" cy="108" r="4" fill="#6b7280" opacity="0.5"/>
  <circle cx="342" cy="124" r="4" fill="#6b7280" opacity="0.5"/>
  <circle cx="326" cy="122" r="4" fill="#6b7280" opacity="0.5"/>
  <text x="337" y="140" text-anchor="middle" font-size="7.5" fill="#374151" font-family="sans-serif">Préfiltre</text>
  <text x="337" y="92" text-anchor="middle" font-size="7.5" fill="#1e40af" font-family="sans-serif">Zone de clair</text>
  <rect x="8" y="82" width="54" height="10" rx="3" fill="#94a3b8"/>
  <line x1="60" y1="87" x2="60" y2="145" stroke="#94a3b8" stroke-width="9" stroke-linecap="round"/>
  <text x="6" y="77" font-size="8" fill="#1e293b" font-family="sans-serif" font-weight="bold">Entrée</text>
  <text x="4" y="90" font-size="7" fill="#64748b" font-family="sans-serif">Coude</text>
  <text x="2" y="100" font-size="7" fill="#64748b" font-family="sans-serif">plongeur</text>
  <rect x="358" y="104" width="54" height="10" rx="3" fill="#2563eb"/>
  <line x1="360" y1="87" x2="360" y2="109" stroke="#2563eb" stroke-width="9" stroke-linecap="round"/>
  <text x="362" y="122" font-size="7.5" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Sortie</text>
  <text x="358" y="133" font-size="7" fill="#1d4ed8" font-family="sans-serif">vers filière</text>
  <rect x="98" y="28" width="44" height="14" rx="4" fill="#374151"/>
  <text x="120" y="38" text-anchor="middle" font-size="7" fill="#fff" font-family="sans-serif">Tampon</text>
  <rect x="208" y="28" width="44" height="14" rx="4" fill="#374151"/>
  <text x="230" y="38" text-anchor="middle" font-size="7" fill="#fff" font-family="sans-serif">Tampon</text>
  <line x1="318" y1="28" x2="318" y2="6" stroke="#059669" stroke-width="2.5" stroke-dasharray="4,2"/>
  <polygon points="314,6 322,6 318,1" fill="#059669"/>
  <text x="295" y="24" font-size="7" fill="#059669" font-family="sans-serif">Vent. aval</text>
  <text x="210" y="222" text-anchor="middle" font-size="7" fill="#94a3b8" font-family="sans-serif">Schéma pédagogique — dispositifs d'entrée, sortie et ventilation varient selon le modèle</text>
</svg>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 12px">
  <div class="fte-pb" style="background:var(--c-surface-2);border-radius:6px;overflow:hidden">
    <img src="./images/anc-fte-installation-beton.webp" alt="Pose fosse béton" style="width:100%;display:block;border-radius:6px 6px 0 0" onerror="this.closest('.fte-pb').style.display='none'">
    <div style="font-size:9.5px;color:var(--c-text-3);padding:4px 7px;text-align:center">🧱 Fosse béton — pose à l'engin de levage</div>
  </div>
  <div class="fte-pb" style="background:var(--c-surface-2);border-radius:6px;overflow:hidden">
    <img src="./images/anc-fte-installation-pehd.webp" alt="Pose fosse PEHD" style="width:100%;display:block;border-radius:6px 6px 0 0" onerror="this.closest('.fte-pb').style.display='none'">
    <div style="font-size:9.5px;color:var(--c-text-3);padding:4px 7px;text-align:center">🪣 Fosse PEHD/PP — manutention facilitée</div>
  </div>
</div>
<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:0 auto 12px;border-radius:8px">
  <rect width="400" height="210" fill="#f0fdf4" rx="8"/>
  <text x="200" y="15" text-anchor="middle" font-size="10" font-weight="bold" fill="#065F46" font-family="sans-serif">Ventilation de la fosse toutes eaux</text>
  <rect x="145" y="155" width="110" height="40" rx="6" fill="#d1fae5" stroke="#065F46" stroke-width="2"/>
  <text x="200" y="180" text-anchor="middle" font-size="8" fill="#065F46" font-family="sans-serif" font-weight="bold">Fosse toutes eaux</text>
  <polygon points="20,100 90,55 160,100" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
  <rect x="20" y="100" width="140" height="55" fill="#fff7ed" stroke="#c2410c" stroke-width="1.5"/>
  <text x="90" y="136" text-anchor="middle" font-size="20" font-family="sans-serif">🚽</text>
  <line x1="90" y1="155" x2="90" y2="175" stroke="#c2410c" stroke-width="2.5"/>
  <line x1="90" y1="175" x2="145" y2="175" stroke="#c2410c" stroke-width="2.5"/>
  <rect x="70" y="69" width="10" height="33" fill="#c2410c"/>
  <circle cx="75" cy="67" r="8" fill="#ef4444" opacity="0.9"/>
  <text x="75" y="70" text-anchor="middle" font-size="6" fill="#fff" font-family="sans-serif">Ø100</text>
  <text x="75" y="58" text-anchor="middle" font-size="10" font-family="sans-serif">↓</text>
  <text x="75" y="52" text-anchor="middle" font-size="7.5" fill="#c2410c" font-family="sans-serif">air</text>
  <text x="90" y="195" text-anchor="middle" font-size="9" fill="#c2410c" font-family="sans-serif" font-weight="bold">VENTILATION</text>
  <text x="90" y="207" text-anchor="middle" font-size="9" fill="#c2410c" font-family="sans-serif" font-weight="bold">PRIMAIRE</text>
  <polygon points="240,100 310,55 380,100" fill="#bbf7d0" stroke="#059669" stroke-width="1.5"/>
  <rect x="240" y="100" width="140" height="55" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
  <line x1="255" y1="175" x2="310" y2="175" stroke="#059669" stroke-width="2.5"/>
  <line x1="310" y1="175" x2="310" y2="155" stroke="#059669" stroke-width="2.5"/>
  <rect x="303" y="22" width="10" height="35" fill="#059669"/>
  <line x1="288" y1="55" x2="313" y2="55" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="258" y="51" font-size="7.5" fill="#059669" font-family="sans-serif">0,40 m min.</text>
  <text x="313" y="17" text-anchor="middle" font-size="10" font-family="sans-serif">↑</text>
  <text x="313" y="10" text-anchor="middle" font-size="7" fill="#059669" font-family="sans-serif">gaz</text>
  <text x="310" y="195" text-anchor="middle" font-size="9" fill="#059669" font-family="sans-serif" font-weight="bold">VENTILATION</text>
  <text x="310" y="207" text-anchor="middle" font-size="9" fill="#059669" font-family="sans-serif" font-weight="bold">SECONDAIRE</text>
</svg>
<div style="margin:0 0 12px">
  <div style="font-size:11px;font-weight:700;color:var(--c-text-2);margin-bottom:6px;padding-left:8px;border-left:3px solid var(--c-anc)">Dimensionnement réglementaire</div>
  <table style="width:100%;border-collapse:collapse;font-size:11px">
    <thead><tr style="background:rgba(6,95,70,0.08)">
      <th style="padding:5px 8px;text-align:left;border-bottom:1px solid var(--c-border);font-weight:700">Pièces principales</th>
      <th style="padding:5px 8px;text-align:right;border-bottom:1px solid var(--c-border);font-weight:700">Volume mini</th>
    </tr></thead>
    <tbody>
      <tr style="border-bottom:1px solid var(--c-border)"><td style="padding:4px 8px">1 à 5</td><td style="padding:4px 8px;text-align:right;font-weight:700;color:var(--c-anc)">3 000 L</td></tr>
      <tr style="border-bottom:1px solid var(--c-border)"><td style="padding:4px 8px">6</td><td style="padding:4px 8px;text-align:right;font-weight:700">4 000 L</td></tr>
      <tr style="border-bottom:1px solid var(--c-border)"><td style="padding:4px 8px">7</td><td style="padding:4px 8px;text-align:right;font-weight:700">5 000 L</td></tr>
      <tr style="border-bottom:1px solid var(--c-border)"><td style="padding:4px 8px">8</td><td style="padding:4px 8px;text-align:right;font-weight:700">6 000 L</td></tr>
      <tr style="border-bottom:1px solid var(--c-border)"><td style="padding:4px 8px">9</td><td style="padding:4px 8px;text-align:right;font-weight:700">7 000 L</td></tr>
      <tr><td style="padding:4px 8px">10</td><td style="padding:4px 8px;text-align:right;font-weight:700">8 000 L</td></tr>
    </tbody>
  </table>
  <div style="font-size:9px;color:var(--c-text-4);margin-top:4px;padding:0 4px">+1 m³ / pièce principale au-delà de 5 · Exemple : 6 PP → V = 3 + 1 = 4 m³</div>
</div>
<div style="margin:0 0 12px;background:rgba(6,95,70,0.05);border-radius:8px;padding:10px 12px">
  <div style="font-size:11px;font-weight:700;color:var(--c-text-2);margin-bottom:8px;padding-left:8px;border-left:3px solid var(--c-anc)">Caractéristiques hydrauliques</div>
  <div style="font-size:10.5px;color:var(--c-text);margin-bottom:6px">La fosse fonctionne <strong>en charge</strong> : elle reste toujours pleine jusqu'au niveau de sortie. 100 L entrant déplacent 100 L vers l'aval — ce n'est pas une cuve de stockage.</div>
  <div style="display:grid;grid-template-columns:auto 1fr;gap:6px 12px;align-items:start;font-size:10.5px">
    <div style="text-align:center;padding:8px 14px;background:var(--c-surface-2);border-radius:8px;font-size:13px;font-weight:700;color:var(--c-anc);font-style:italic">T = V / Q</div>
    <div style="color:var(--c-text-2)"><strong>T</strong> = temps de séjour (jours)<br><strong>V</strong> = volume hydraulique utile (m³)<br><strong>Q</strong> = débit journalier (m³/j)</div>
  </div>
  <div style="font-size:9px;color:var(--c-text-4);margin-top:7px;border-top:1px solid var(--c-border);padding-top:5px">Exemple illustratif : fosse 3 m³ recevant 600 L/j → T ≈ 5 jours · Ce calcul ne remplace pas le dimensionnement réglementaire</div>
</div>
<div style="margin:0 0 8px">
  <div style="font-size:11px;font-weight:700;color:var(--c-text-2);margin-bottom:6px;padding-left:8px;border-left:3px solid #ef4444">Diagnostic terrain (SPANC)</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:9.5px">
    <div style="font-weight:700;color:var(--c-text-3);padding:3px 6px;background:var(--c-surface-2);border-radius:4px 0 0 0">Symptôme observé</div>
    <div style="font-weight:700;color:var(--c-text-3);padding:3px 6px;background:var(--c-surface-2);border-radius:0 4px 0 0">Hypothèse principale</div>
    <div style="padding:3px 6px;background:rgba(239,68,68,0.06);color:#dc2626">Niveau eau anormalement haut</div><div style="padding:3px 6px;background:rgba(239,68,68,0.06)">Obstruction aval · traitement saturé</div>
    <div style="padding:3px 6px;color:#dc2626">Niveau eau anormalement bas</div><div style="padding:3px 6px">Défaut d'étanchéité · fissure</div>
    <div style="padding:3px 6px;background:rgba(239,68,68,0.06);color:#dc2626">Boues &gt; 50% volume utile</div><div style="padding:3px 6px;background:rgba(239,68,68,0.06)">Vidange insuffisante · surcharge</div>
    <div style="padding:3px 6px;color:#dc2626">Flottants en sortie</div><div style="padding:3px 6px">Déflecteur défectueux · surcharge</div>
    <div style="padding:3px 6px;background:rgba(239,68,68,0.06);color:#dc2626">Odeurs près de l'habitation</div><div style="padding:3px 6px;background:rgba(239,68,68,0.06)">Ventilation défectueuse en priorité</div>
    <div style="padding:3px 6px;color:#dc2626">Entrées d'eaux pluviales</div><div style="padding:3px 6px">Raccordement parasite à tracer</div>
  </div>
</div>
<div style="font-size:9px;color:var(--c-text-4);text-align:center;padding:6px;background:rgba(239,68,68,0.06);border-radius:6px">⚠ Espace confiné — ne jamais pénétrer sans procédure professionnelle · H₂S toxique · CH₄ inflammable</div>
</div>`,
      specs:{ 'Volume minimum':'3 m³ (1–5 pièces) · +1 m³/pièce suppl.', 'Matériaux':'Béton NF EN 12566-1 · PEHD/PP', 'Distance habitation':'> 5 m', 'Distance limite prop.':'> 3 m', 'Distance puits AEP':'> 35 m', 'Ventilation':'Ø ≥ 100 mm · primaire + secondaire', 'Vidange':'≤ 4 ans ou boues > 50% volume utile', 'Préfiltre':'Si présent — entretien selon fabricant', 'Référence':'Arr. 07/09/2009 mod. 03/12/2021 · NF DTU 64.1' } },
    { ico:'🌾', name:'Tranchées d\'épandage', sub:'Épandage souterrain · Sol perméable · 200–400 m²',
      specs:{ 'Perméabilité sol':'15–500 mm/h (étude de sol obligatoire)', 'Profondeur':'0,6–0,7 m de recouvrement', 'Drain':'PVC Ø 100 mm perforé · pente max 0,5%', 'Charge hydraulique':'0,04 m/j', 'Référence':'DTU 64.1 · Arrêté 07/09/2009' } },
    { ico:'🟡', name:'Filtre à sable non drainé', sub:'Sable rapporté · Infiltration naturelle · 25–30 m²',
      specs:{ 'Condition':'Sol sous-jacent apte à l\'infiltration', 'Épaisseur sable':'0,70 m minimum', 'Granulométrie':'0,25–2 mm (lavé, sans fines)', 'Charge hydraulique':'0,08 m/j', 'Référence':'DTU 64.1' } },
    { ico:'🟠', name:'Filtre à sable drainé', sub:'Sable rapporté · Collecte et rejet contrôlé · 25–30 m²',
      specs:{ 'Sol requis':'Sol sans pouvoir infiltrant (argile…)', 'Drain collecte':'Ø 100 mm · pente 0,5%', 'Rejet':'Milieu récepteur autorisé (étude + autorisation)', 'Charge hydraulique':'0,10 m/j', 'Référence':'DTU 64.1' } },
    { ico:'⛰️', name:'Tertre d\'infiltration', sub:'Massif surélevé · Nappe haute · 0,5–1,5 m au-dessus sol',
      specs:{ 'Hauteur':'0,5–1,5 m au-dessus du sol naturel', 'Distance nappe':'≥ 0,7 m fond de filière', 'Charge hydraulique':'0,12 m/j', 'Matériau':'Sable 0,25–2 mm importé', 'Référence':'DTU 64.1 art. 8' } },
  ];
  var html = '<div class="module-hero" style="--cat-color:var(--c-anc);background-image:linear-gradient(to right,#065F46 38%,rgba(6,95,70,0.88) 54%,rgba(6,95,70,0.30) 75%,transparent 92%),url(\'./images/anc-banner.webp\');background-size:cover;background-position:right center;background-color:#065F46">'
    + '<button class="mh-back-btn" onclick="showModule(\'anc-home\')">‹ ANC</button>'
    + '<span class="mh-icon">🏗️</span>'
    + '<div class="mh-title">Filières traditionnelles</div>'
    + '<div class="mh-sub">Épandage · Filtres à sable · Tertre · DTU 64.1</div>'
    + '<div class="mh-tags"><span class="mh-tag">Sans énergie</span><span class="mh-tag">Sol perméable</span><span class="mh-tag">Arrêté 07/09/2009</span></div>'
    + '</div>';
  html += '<div class="section-header">Filières<span class="sh-count">' + fiches.length + ' fiches</span></div>';
  html += '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';
  fiches.forEach(function(f, i) {
    html += '<div class="fiche-card" style="--cat-color:var(--c-anc)" id="ft-' + i + '">'
      + '<div class="fiche-stripe" style="background:var(--c-anc)"></div>'
      + '<div class="fiche-head" onclick="toggleFicheANC(\'ft\',' + i + ')">'
      + '<div class="fiche-icon" style="background:var(--c-anc-l)">' + f.ico + '</div>'
      + '<div style="flex:1"><div class="fiche-name">' + f.name + '</div><div class="fiche-sub">' + f.sub + '</div></div>'
      + '<span class="fiche-arrow" id="ft-a-' + i + '">›</span>'
      + '</div>'
      + '<div class="fiche-body" id="ft-b-' + i + '">'
      + (f.schema ? f.schema : '')
      + '<div class="kv-grid">' + Object.entries(f.specs).map(function(e) { return '<div class="kv-item"><div class="kv-key">' + e[0] + '</div><div class="kv-val">' + e[1] + '</div></div>'; }).join('') + '</div>'
      + '<span class="src-pill">📖 DTU 64.1 · Arrêté 07/09/2009 modifié</span>'
      + '</div></div>';
  });
  html += '</div><div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

/* ─── FILIÈRES AGRÉÉES ─── */
function renderANCFilAgree() {
  var tb = document.getElementById('tab-bar'); if (tb) tb.style.display = 'none';
  var fiches = [
    { ico:'⚙️', name:'Microstation d\'épuration', sub:'Dispositif agréé · Cultures libres ou fixées · 4–20 EH',
      specs:{ 'Agrément':'Arrêté 07/09/2009 modifié (≠ seul marquage CE)', 'Capacité':'4–20 EH', 'Rendement DBO₅':'> 90%', 'Consommation élec.':'100–300 kWh/an', 'Contrat entretien':'Obligatoire selon guide constructeur', 'Durée de vie':'15–25 ans' } },
    { ico:'🌿', name:'FPR — Filtre planté de roseaux (vertical)', sub:'Phytoépuration · Écoulement vertical · 5 m²/EH',
      specs:{ 'Charge surfacique':'5 m²/EH (mono-étage)', 'Granulat surface':'Gravier 2–8 mm', 'Alimentation':'Bâchées séquentielles (siphon ou pompe)', 'Végétaux':'Phragmites australis (roseaux)', 'Agrément':'Arrêté 07/09/2009 modifié', 'Durée de vie':'> 30 ans' } },
    { ico:'🥥', name:'Filtre compact — média filtrant agréé', sub:'Tourbe · Coco · Zéolite · Pouzzolane · compact',
      specs:{ 'Médias possibles':'Coco, zéolite, pouzzolane, selon agrément', 'Agrément':'Arrêté 07/09/2009 modifié · NF EN 12566-3', 'Remplacement':'Selon guide du fabricant (5–15 ans)', 'Surface':'Variable selon EH et agrément', 'Avantage':'Pas d\'énergie pour le traitement · compact' } },
    { ico:'🚽', name:'Toilettes sèches (compostage)', sub:'Zéro eau · Compostage des matières · Conditions strictes',
      specs:{ 'Condition':'Réglementation locale à vérifier (PLU/SPANC)', 'Principe':'Séparation urines / matières · compostage aérobie', 'Rejet':'Eaux ménagères à traiter séparément', 'Avantage':'Zéro eau pour les WC · ressource fertilisante', 'Référence':'Arrêté 07/09/2009 · Guide ASTEE' } },
  ];
  var html = '<div class="module-hero" style="--cat-color:var(--c-anc);background-image:linear-gradient(to right,#065F46 38%,rgba(6,95,70,0.88) 54%,rgba(6,95,70,0.30) 75%,transparent 92%),url(\'./images/anc-banner.webp\');background-size:cover;background-position:right center;background-color:#065F46">'
    + '<button class="mh-back-btn" onclick="showModule(\'anc-home\')">‹ ANC</button>'
    + '<span class="mh-icon">✅</span>'
    + '<div class="mh-title">Filières agréées</div>'
    + '<div class="mh-sub">Microstations · FPR · Filtres compacts · Toilettes sèches</div>'
    + '<div class="mh-tags"><span class="mh-tag">Arrêté 07/09/2009</span><span class="mh-tag">NF EN 12566-3</span><span class="mh-tag">Agrément ministériel</span></div>'
    + '</div>';
  html += '<div class="section-header">Filières agréées<span class="sh-count">' + fiches.length + ' fiches</span></div>';
  html += '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';
  fiches.forEach(function(f, i) {
    html += '<div class="fiche-card" style="--cat-color:var(--c-anc)" id="fa-' + i + '">'
      + '<div class="fiche-stripe" style="background:var(--c-anc)"></div>'
      + '<div class="fiche-head" onclick="toggleFicheANC(\'fa\',' + i + ')">'
      + '<div class="fiche-icon" style="background:var(--c-anc-l)">' + f.ico + '</div>'
      + '<div style="flex:1"><div class="fiche-name">' + f.name + '</div><div class="fiche-sub">' + f.sub + '</div></div>'
      + '<span class="fiche-arrow" id="fa-a-' + i + '">›</span>'
      + '</div>'
      + '<div class="fiche-body" id="fa-b-' + i + '">'
      + '<div class="kv-grid">' + Object.entries(f.specs).map(function(e) { return '<div class="kv-item"><div class="kv-key">' + e[0] + '</div><div class="kv-val">' + e[1] + '</div></div>'; }).join('') + '</div>'
      + '<span class="src-pill">📖 Arrêté 07/09/2009 modifié · NF EN 12566-3</span>'
      + '</div></div>';
  });
  html += '</div><div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}
