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

  var html = '<div class="module-hero" style="--cat-color:var(--c-anc)">'
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

  /* Raccourcis calculateurs */
  html += '<div style="padding:var(--s-2) var(--s-4)">'
    +'<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Calculateurs ANC</div>'
    +'<div style="display:flex;gap:var(--s-2);flex-wrap:wrap">'
    +'<button onclick="showModule(\'calc-anc\')" style="padding:7px 14px;background:var(--c-anc-l);border:1px solid var(--c-anc);border-radius:var(--r-md);font-size:12px;font-weight:700;color:var(--c-anc);cursor:pointer">⚡ Épandage · FTE · Porchet</button>'
    +'<button onclick="renderANCComparateur()" style="padding:7px 14px;background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);font-size:12px;color:var(--c-text-2);cursor:pointer">📊 Comparer les filières</button>'
    +'<button onclick="renderANCAideChoix()" style="padding:7px 14px;background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);font-size:12px;color:var(--c-text-2);cursor:pointer">🧭 Quelle filière ?</button>'
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
   COMPARATEUR — REDIRECT VERS CALCULATEUR EXISTANT
   ═══════════════════════════════════════════════════════════ */
function renderANCComparateur() {
  showModule('anc');
  setTimeout(function(){ if(typeof switchANCTab==='function') switchANCTab(1); }, 150);
}

/* ═══════════════════════════════════════════════════════════
   AIDE AU CHOIX — WIZARD
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
    +'<div style="font-size:13px;font-weight:800;color:var(--c-text)">🧭 Quelle filière étudier ?</div></div>'
  +'</div>';

  var steps = [
    { q:'Perméabilité du sol (test Porchet)', opts:['K < 1 mm/min (imperméable)','K = 1–15 mm/min (perméable)','K > 15 mm/min (très perméable)','Non testée'], key:'perm' },
    { q:'Profondeur de nappe', opts:['Nappe affleurante (< 0,7 m)','Nappe profonde (> 0,7 m)','Non connue'], key:'nappe' },
    { q:'Surface disponible', opts:['< 50 m²','50–200 m²','> 200 m²'], key:'surface' },
    { q:'Alimentation électrique disponible à proximité', opts:['Oui','Non'], key:'elec' },
    { q:'Usage de l\'habitation', opts:['Résidence principale (occupation permanente)','Résidence secondaire (occupation intermittente)'], key:'usage' },
  ];

  if (step < steps.length) {
    var s = steps[step];
    html += '<div style="padding:var(--s-3) var(--s-4)">';
    html += '<div style="background:var(--c-anc-l);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
      +'<div style="font-size:10px;color:var(--c-anc);font-weight:700;margin-bottom:4px">Question '+(step+1)+' / '+steps.length+'</div>'
      +'<div style="font-size:13px;font-weight:800;color:var(--c-text)">'+s.q+'</div>'
    +'</div>';
    html += '<div style="display:flex;flex-direction:column;gap:var(--s-2)">';
    s.opts.forEach(function(opt){
      html += '<button onclick="ancWizardNext('+step+',\''+s.key+'\','+JSON.stringify(opt)+')" '
        +'style="padding:var(--s-3) var(--s-4);background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-md);font-size:13px;font-weight:600;color:var(--c-text);cursor:pointer;text-align:left">'
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
  var filières = [];
  var perm = ans.perm||'';
  var nappe = ans.nappe||'';
  var surface = ans.surface||'';
  var elec = ans.elec||'';
  var usage = ans.usage||'';

  if (nappe.indexOf('affleurante')>=0) {
    filières.push({nom:'Tertre d\'infiltration',raison:'Nappe affleurante — filière surélevée obligatoire',ico:'⛰️'});
  } else if (perm.indexOf('< 1')>=0) {
    filières.push({nom:'Filtre à sable drainé',raison:'Sol imperméable (K < 1 mm/min) — infiltration impossible',ico:'🟠'});
    if (elec==='Oui') filières.push({nom:'Microstation agréée CE',raison:'Sol imperméable + électricité disponible',ico:'⚙️'});
    filières.push({nom:'Filtre compact agréé CE',raison:'Sol imperméable + surface réduite',ico:'📦'});
  } else if (perm.indexOf('1–15')>=0) {
    filières.push({nom:'Tranchées d\'épandage',raison:'Sol perméable (K = 1–15 mm/min) — filière classique',ico:'🌿'});
    filières.push({nom:'Filtre à sable non drainé',raison:'Sol perméable — alternative compacte',ico:'🪨'});
  } else if (perm.indexOf('> 15')>=0) {
    filières.push({nom:'Tranchées d\'épandage',raison:'Sol très perméable — vérifier la protection des captages (35 m)',ico:'🌿'});
    filières.push({nom:'Filtre à sable drainé',raison:'Perméabilité élevée — distance sécurité à respecter',ico:'🟠'});
  } else {
    filières.push({nom:'Test de perméabilité (Porchet) requis',raison:'Sans résultat de perméabilité, aucune filière ne peut être dimensionnée',ico:'🔬'});
  }

  if (surface.indexOf('< 50')>=0 && elec==='Oui') filières = [{nom:'Microstation agréée CE',raison:'Surface très réduite + électricité disponible',ico:'⚙️'},{nom:'Filtre compact agréé CE',raison:'Surface très réduite',ico:'📦'}];
  if (usage.indexOf('secondaire')>=0) filières = filières.map(function(f){ return Object.assign({},f,{note:'Vérifier la tolérance à l\'intermittence — surtout pour les microstations'}); });

  var html = '<div style="padding:var(--s-3) var(--s-4)">';
  html += '<div style="background:#D1FAE5;border:1.5px solid #059669;border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
    +'<div style="font-size:11px;font-weight:800;color:#065F46;margin-bottom:4px">Filières potentiellement à étudier</div>'
    +'<div style="font-size:10px;color:#065F46;line-height:1.5">Cette sélection est indicative. Elle ne remplace pas une étude de conception ni le contrôle du SPANC. Toujours vérifier les conditions locales.</div>'
  +'</div>';
  html += '<div style="display:flex;flex-direction:column;gap:var(--s-2);margin-bottom:var(--s-3)">';
  filières.forEach(function(f){
    html += '<div style="padding:var(--s-3);background:var(--c-surface);border:1px solid var(--c-border);border-left:3px solid #059669;border-radius:var(--r-md)">'
      +'<div style="font-size:13px;font-weight:700;color:var(--c-text)">'+f.ico+' '+f.nom+'</div>'
      +'<div style="font-size:11px;color:var(--c-text-3);margin-top:4px">'+f.raison+'</div>'
      +(f.note?'<div style="font-size:10px;color:#D97706;margin-top:4px">⚠ '+f.note+'</div>':'')
    +'</div>';
  });
  html += '</div>';
  html += '<button onclick="renderANCAideChoix(0,{})" style="width:100%;padding:var(--s-3);background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);font-size:13px;cursor:pointer;color:var(--c-text-2)">↩ Recommencer</button>';
  html += '<button onclick="showModule(\'calc-anc\')" style="width:100%;margin-top:var(--s-2);padding:var(--s-3);background:var(--c-anc-l);border:1px solid var(--c-anc);border-radius:var(--r-md);font-size:13px;cursor:pointer;color:var(--c-anc);font-weight:700">⚡ Calculer les surfaces</button>';
  html += '</div>';
  return html;
}
