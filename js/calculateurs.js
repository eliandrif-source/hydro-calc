function renderCalc(theme) {
  renderCalcHub(theme);
}

var _calcHubTab = 0;

var _calcHubThemes = {
  ac: {
    ico:'🌊', name:'Assainissement collectif',
    color:'var(--c-ac)', colorl:'var(--c-ac-l)',
    items:[
      { id:'manning',    ico:'🔵', name:'Manning-Strickler',        desc:'Débit plein · Vitesse · Pente' },
      { id:'mp',         ico:'〇', name:'Manning section partielle', desc:'Section circulaire en charge partielle' },
      { id:'rationnelle',ico:'🌧️', name:'Méthode rationnelle',      desc:'Débit de pointe · Bassins versants · Q = CiA' },
      { id:'belier',     ico:'💥', name:'Coup de bélier',           desc:'Surpression · Célérité · Protection réseau' },
      { id:'debit-nuit', ico:'🌙', name:'Débit de nuit EU',          desc:'Mesure de débit · Unités personnalisables · Débit minimum nocturne' },
      { id:'step-dim',   ico:'🏭', name:'Dimensionnement STEP',       desc:'Boues activées · Lagunage · FPR · Lit bactérien · Biodisques · Décanteur' },
    ]
  },
  anc: {
    ico:'🏡', name:'Assainissement non collectif',
    color:'var(--c-anc)', colorl:'var(--c-anc-l)',
    items:[
      { id:'epandage', ico:'🌾', name:'Surface d\'épandage',  desc:'Filière par K Porchet · EH · Tranchées · FPR' },
      { id:'fte',      ico:'🪣', name:'Fosse toutes eaux',    desc:'Volume · Vidange · Dimensionnement DTU 64.1' },
      { id:'charges',  ico:'⚗️', name:'Charges polluantes',  desc:'DBO₅ · DCO · MES · Azote · NTK' },
      { id:'porchet',  ico:'🪛', name:'Perméabilité Porchet', desc:'K sol · DTU 64.1 · Mesures terrain · Classement filière' },
    ]
  },
  ep: {
    ico:'💧', name:'Eau potable — AEP',
    color:'var(--c-ep)', colorl:'var(--c-ep-l)',
    items:[
      { id:'pression',  ico:'📊', name:'Pression AEP',      desc:'Pertes de charge · Hazen-Williams · HMT réseau' },
      { id:'chloration',ico:'🟡', name:'Chloration',        desc:'Dose totale · Débit injection · Javel' },
      { id:'reservoir', ico:'🏗️', name:'Réservoir AEP',    desc:'Volume · Temps de séjour · Réserve incendie' },
      { id:'pompe',     ico:'⚙️', name:'Pompe — HMT',      desc:'Hauteur manométrique totale · Point de fonctionnement' },
      { id:'npsh',      ico:'🔩', name:'NPSH — Cavitation', desc:'Hauteur d\'aspiration max · Sécurité pompe' },
      { id:'fuite-aep', ico:'💧', name:'Débit de fuite AEP', desc:'Index départ/arrivée · Pas de temps · m³/h · L/s' },
    ]
  },
  riv: {
    ico:'🏞️', name:'Milieux aquatiques',
    color:'var(--c-riv)', colorl:'var(--c-riv-l)',
    items:[
      { id:'shields',  ico:'🪨', name:'Transport solide Shields', desc:'Contrainte critique · Charriage · Fond mobile' },
      { id:'langelier',ico:'🧫', name:'Indice de Langelier',      desc:'Saturation calcaire · Agressivité · pH équilibre' },
    ]
  },
};

function renderCalcHub(forceTheme) {
  var t = document.getElementById('top-title');
  if (t) t.textContent = 'Calculateurs';

  /* Mode thème unique : pas de tabs, contexte filtré */
  if (forceTheme && _calcHubThemes[forceTheme]) {
    var _tb = document.getElementById('tab-bar');
    if (_tb) _tb.style.display = 'none';
    var theme = _calcHubThemes[forceTheme];
    var html = '<div class="module-hero" style="--cat-color:'+theme.color+'">'
      + '<span class="mh-icon">⚡</span>'
      + '<div class="mh-title">Calculateurs</div>'
      + '<div class="mh-sub">'+theme.ico+' '+theme.name+'</div>'
      + '</div>'
      + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2);margin-top:var(--s-3)">';
    theme.items.forEach(function(c) {
      html += '<div class="mod-list-card" onclick="showCalcById(\''+c.id+'\')">'
        + '<div class="mlc-icon" style="background:'+theme.colorl+';font-size:20px">'+c.ico+'</div>'
        + '<div class="mlc-body"><div class="mlc-name">'+c.name+'</div><div class="mlc-sub">'+c.desc+'</div></div>'
        + '<span class="mlc-arrow">›</span></div>';
    });
    html += '</div><div class="pb-nav"></div>';
    document.getElementById('main-content').innerHTML = html;
    document.getElementById('main-content').scrollTop = 0;
    return;
  }

  /* Mode global : tous les thèmes avec onglets */
  loadModuleTabs(['AC', 'ANC', 'EP', 'Milieux aquatiques'], 'switchCalcHubTab');

  var keys = ['ac','anc','ep','riv'];
  var theme = _calcHubThemes[keys[_calcHubTab]];

  var html = `
    <div class="module-hero" style="--cat-color:${theme.color}">
      <span class="mh-icon">⚡</span>
      <div class="mh-title">Calculateurs</div>
      <div class="mh-sub">${theme.ico} ${theme.name}</div>
    </div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2);margin-top:var(--s-3)">
  `;

  theme.items.forEach(function(c) {
    html += `<div class="mod-list-card" onclick="showCalcById('${c.id}')">
      <div class="mlc-icon" style="background:${theme.colorl};font-size:20px">${c.ico}</div>
      <div class="mlc-body">
        <div class="mlc-name">${c.name}</div>
        <div class="mlc-sub">${c.desc}</div>
      </div>
      <span class="mlc-arrow">›</span>
    </div>`;
  });

  html += `</div><div class="pb-nav"></div>`;
  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

function switchCalcHubTab(idx) {
  _calcHubTab = idx;
  renderCalcHub();
}

function showCalcById(id) {
  var mc = document.getElementById('main-content');
  var titles = {
    'epandage':'Surface d\'épandage ANC', 'fte':'Fosse toutes eaux',
    'manning':'Manning-Strickler', 'rationnelle':'Méthode rationnelle',
    'charges':'Charges polluantes', 'pression':'Pression AEP',
    'mp':'Manning section partielle', 'belier':'Coup de bélier',
    'langelier':'Indice de Langelier', 'shields':'Transport solide Shields',
    'pompe':'Pompe — HMT', 'npsh':'NPSH — Cavitation',
    'chloration':'Chloration', 'reservoir':'Réservoir AEP',
    'debit-nuit':'Débit de nuit EU',
    'fuite-aep':'Débit de fuite AEP',
    'porchet':'Perméabilité Porchet',
    'step-dim':'Dimensionnement STEP',
    'step-ba':'Boues activées',
    'step-lagunage':'Lagunage naturel & aéré',
    'step-fpr':'Filtres plantés de roseaux',
    'step-lit':'Lit bactérien',
    'step-biodisques':'Biodisques',
    'step-decanteur':'Décanteur primaire / secondaire',
  };
  var te = document.getElementById('top-title');
  if (te && titles[id]) te.textContent = titles[id];

  var calcaIds = { 'mp':renderCalcaManning, 'belier':renderCalcaBelier, 'langelier':renderCalcaLangelier, 'shields':renderCalcaShields, 'pompe':renderCalcaPompeHMT, 'npsh':renderCalcaNPSH };
  var calcIds  = { 'epandage':renderCalcEpandage, 'fte':renderCalcFTE, 'manning':renderCalcManning, 'rationnelle':renderCalcMethodeRat, 'charges':renderCalcCharges, 'pression':renderCalcPression, 'debit-nuit':renderCalcDebitNuit, 'fuite-aep':renderCalcFuiteAEP, 'porchet':renderCalcPorchet, 'step-dim':renderCalcSTEPHub, 'step-ba':renderCalcSTEPBA, 'step-lagunage':renderCalcSTEPLagunage, 'step-fpr':renderCalcSTEPFPR, 'step-lit':renderCalcSTEPLit, 'step-biodisques':renderCalcSTEPBiodisques, 'step-decanteur':renderCalcSTEPDecanteur };

  if (id === 'chloration' || id === 'reservoir') {
    renderCalcSuppl();
    if (id === 'reservoir') {
      setTimeout(function() {
        var cards = document.querySelectorAll('#main-content .card');
        if (cards[1]) cards[1].scrollIntoView({ behavior:'smooth', block:'start' });
      }, 80);
    }
    return;
  }
  if (calcaIds[id]) {
    window.currentCalcId = id;
    mc.innerHTML = '<div id="calca-content"></div><div class="pb-nav"></div>';
    calcaIds[id]();
    return;
  }
  if (calcIds[id]) {
    window.currentCalcId = id;
    mc.innerHTML = '<div id="calc-content"></div><div class="pb-nav"></div>';
    calcIds[id]();
  }
}

/* ═══════════════════════════════════════════════════
   COMPARATEUR FILIÈRES ANC
═══════════════════════════════════════════════════ */
function renderComparateurFilieres() {
  var wrap = document.getElementById('comparateur-filieres-wrap');
  if (!wrap) return;
  var eh = parseInt(getV('c-eh')) || 5;
  var k  = parseFloat(getV('c-k')) || 3;

  var filieres = [
    { nom:'Tranchées d\'épandage',     ch:0.06, kMin:1,  kMax:15, surfMin:eh*150/(0.06*1000), surfReco:eh*200/(0.06*1000), surfSpanc:eh*200/(0.06*1000), empreinte:'Grande',     entretien:'Faible', cout:'★★☆' },
    { nom:'Filtre à sable non drainé', ch:0.08, kMin:0,  kMax:50, surfMin:eh*150/(0.08*1000), surfReco:eh*200/(0.08*1000), surfSpanc:Math.max(eh*200/(0.08*1000), eh*3),         empreinte:'Moyenne',    entretien:'Faible', cout:'★★☆' },
    { nom:'Filtre à sable drainé',     ch:0.10, kMin:0,  kMax:99, surfMin:eh*150/(0.10*1000), surfReco:Math.max(eh*200/(0.10*1000), eh*2),              surfSpanc:eh*5,           empreinte:'Moyenne',    entretien:'Faible', cout:'★★★' },
    { nom:'Tertre d\'infiltration',    ch:0.12, kMin:0,  kMax:99, surfMin:eh*150/(0.12*1000), surfReco:Math.max(eh*200/(0.12*1000), eh*2),              surfSpanc:eh*5,           empreinte:'Grande',     entretien:'Moyen',  cout:'★★★' },
    { nom:'FPR vertical',              ch:null, kMin:0,  kMax:99, surfMin:eh*5,               surfReco:eh*5,               surfSpanc:eh*5,              empreinte:'Faible',     entretien:'Moyen',  cout:'★★★' },
    { nom:'FPR horizontal',            ch:null, kMin:0,  kMax:99, surfMin:eh*3,               surfReco:eh*3,               surfSpanc:eh*3,              empreinte:'Faible',     entretien:'Moyen',  cout:'★★★' },
    { nom:'Microstation agréée CE',    ch:null, kMin:0,  kMax:99, surfMin:2,                  surfReco:2,                  surfSpanc:2,                 empreinte:'Très faible', entretien:'Élevé', cout:'★★★' },
  ];

  function makeRows(filieres, surfKey) {
    return filieres.map(function(f) {
      var compatible = (k >= f.kMin && k <= f.kMax);
      var rowClass = compatible ? 'row-hl' : '';
      var compatBadge = compatible
        ? '<span class="cf-ok">✓ Compatible</span>'
        : '<span class="cf-no">✗ Inadapté</span>';
      var surf = f[surfKey];
      var surfStr = surf ? surf.toFixed(1) + ' m²' : '—';
      return '<tr class="' + rowClass + '"><td>' + f.nom + '</td><td>' + compatBadge + '</td><td><strong>' + surfStr + '</strong></td><td>' + f.empreinte + '</td><td>' + f.entretien + '</td><td>' + f.cout + '</td></tr>';
    }).join('');
  }

  var tableHead = '<thead><tr><th>Filière</th><th>Compatibilité</th><th>Surface</th><th>Empreinte</th><th>Entretien</th><th>Coût relatif</th></tr></thead>';

  wrap.innerHTML = '<div style="padding:0 var(--s-4) var(--s-3)">'

    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🗂 Comparateur filières — ' + eh + ' EH · K = ' + k + ' mm/min</div>'

    + '<div class="card card-p" style="margin-bottom:var(--s-3)">'
      + '<div style="display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-2)">'
        + '<span style="font-size:16px">📋</span>'
        + '<div>'
          + '<div style="font-size:12px;font-weight:800;color:var(--c-text)">Surfaces minimales réglementaires</div>'
          + '<div style="font-size:10px;color:var(--c-text-4)">Arrêté 07/09/2009 · 150 L/EH/j · Minimum légal absolu</div>'
        + '</div>'
      + '</div>'
      + '<div style="overflow-x:auto"><table class="comparateur-table">' + tableHead + '<tbody>' + makeRows(filieres, 'surfMin') + '</tbody></table></div>'
      + '<div style="font-size:10px;color:var(--c-text-4);margin-top:var(--s-2);line-height:1.5">⚠ Seuil légal minimum. Peut être refusé par certains SPANC appliquant des règles locales plus strictes.</div>'
    + '</div>'

    + '<div class="card card-p" style="margin-bottom:var(--s-3)">'
      + '<div style="display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-2)">'
        + '<span style="font-size:16px">✅</span>'
        + '<div>'
          + '<div style="font-size:12px;font-weight:800;color:var(--c-text)">Surfaces recommandées — Bureau d\'études / SPANC standard</div>'
          + '<div style="font-size:10px;color:var(--c-text-4)">DTU 64.1 (2018) · 200 L/EH/j · 2 m²/EH minimum filières infiltration · Valeurs couramment validées</div>'
        + '</div>'
      + '</div>'
      + '<div style="overflow-x:auto"><table class="comparateur-table">' + tableHead + '<tbody>' + makeRows(filieres, 'surfReco') + '</tbody></table></div>'
      + '<div style="font-size:10px;color:var(--c-text-4);margin-top:var(--s-2);line-height:1.5">✓ Pratique courante · FPR et microstation inchangés (dimensionnement surfacique fixe) · Lignes vertes = filières adaptées au K mesuré</div>'
    + '</div>'

    + '<div class="card card-p" style="border:1.5px solid var(--c-warn)">'
      + '<div style="display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-2)">'
        + '<span style="font-size:16px">⚠️</span>'
        + '<div>'
          + '<div style="font-size:12px;font-weight:800;color:var(--c-text)">Surfaces SPANC conservateurs — Certains départements</div>'
          + '<div style="font-size:10px;color:var(--c-text-4)">Ex. Lot-et-Garonne, certains SPANC 47/33/34… · 5 m²/EH pour filières drainées · Vérifier le règlement de service local</div>'
        + '</div>'
      + '</div>'
      + '<div style="overflow-x:auto"><table class="comparateur-table">' + tableHead + '<tbody>' + makeRows(filieres, 'surfSpanc') + '</tbody></table></div>'
      + '<div style="font-size:10px;color:var(--c-warn,#D97706);margin-top:var(--s-2);line-height:1.5;font-weight:600">⚠ Ces valeurs ne sont pas dans le DTU national — elles reflètent des pratiques locales plus contraignantes. Toujours consulter votre SPANC avant tout dépôt de dossier.</div>'
    + '</div>'

  + '</div>';

  wrap.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function switchCalcTab(idx) {
  setTabActive('module-tabs', idx);
  var titles = ['Calcul — Épandage','Calcul — FTE','Calcul — Manning','Calcul — Méthode rat.','Calcul — Charges','Calcul — Pression'];
  var t = document.getElementById('top-title');
  if (t) t.textContent = titles[idx] || 'Calculs';
  if      (idx === 0) renderCalcEpandage();
  else if (idx === 1) renderCalcFTE();
  else if (idx === 2) renderCalcManning();
  else if (idx === 3) renderCalcMethodeRat();
  else if (idx === 4) renderCalcCharges();
  else if (idx === 5) renderCalcPression();
  scrollToTop();
}

function renderCalcEpandage() {
  document.getElementById('calc-content').innerHTML = `
    <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🌾 Surface d'épandage ANC</div>
      <div class="calc-zone">
        <div class="field">
          <label class="field-label">Équivalents-habitants (EH)</label>
          <div class="field-hint">1 EH par pièce principale + 1. Règle DTU 64.1.</div>
          <div class="field-tip">💡 Studio = 2 EH · T3 = 4 EH · Maison 5P = 6 EH</div>
          <div class="field-row"><input type="number" id="c-eh" value="5" min="1" step="1"><span class="field-unit">EH</span></div>
        </div>
        <div class="field">
          <label class="field-label">Perméabilité K (test Porchet)</label>
          <div class="field-hint">Résultat du test de percolation in situ. Détermine la filière adaptée.</div>
          <div class="field-tip">💡 K &lt; 1 → filtre drainé · 1–15 → tranchées · > 15 → filtre drainé obligatoire</div>
          <div class="field-row"><input type="number" id="c-k" value="3" step="0.5" min="0.1"><span class="field-unit">mm/min</span></div>
        </div>
        <button class="btn btn-primary" onclick="calcEpandage()">Calculer la surface</button>
        <div class="result-box" id="res-epandage">
          <div class="result-value" id="rv-ep"></div>
          <div class="result-detail" id="rd-ep"></div>
          <div class="result-formula"><span>S = <span class="mf"><span class="n">EH × 150 L/j</span><span class="d">C<sub>h</sub> × 1 000</span></span></span><span class="rf-sep">·</span><span>C<sub>h</sub> = f(K)</span></div>
          <div class="result-src">📖 DTU 64.1 · Arrêté 07/09/2009</div>
        </div>
        <button class="btn btn-ghost" style="margin-top:var(--s-2);font-size:12px" onclick="renderComparateurFilieres()">🗂 Comparer toutes les filières</button>
      </div>
    </div></div>
    <div id="comparateur-filieres-wrap"></div>
    <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📐 Charges hydrauliques par filière</div>
      <div class="kv-grid">
        ${[['Tranchées épandage','0,06 m/j (K = 1–15)'],['Filtre sable non drainé','0,08 m/j'],['Filtre sable drainé','0,10 m/j'],['Tertre d\'infiltration','0,12 m/j'],['FPR vertical','5 m²/EH (surfacique)'],['FPR horizontal','3 m²/EH (surfacique)']].map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}
      </div>
    </div></div>`;
}

function renderCalcFTE() {
  document.getElementById('calc-content').innerHTML = `
    <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🪣 Volume Fosse Toutes Eaux (FTE)</div>
      <div class="calc-zone">
        <div class="field">
          <label class="field-label">Pièces principales</label>
          <div class="field-hint">Chambres + salon. Hors cuisine, SdB, WC, couloir, garage.</div>
          <div class="field-tip">💡 T2 = 2 pp · T3 = 3 pp · Maison 5P = 5 pp</div>
          <div class="field-row"><input type="number" id="f-pp" value="4" min="1" step="1"><span class="field-unit">pp</span></div>
        </div>
        <div class="field">
          <label class="field-label">Occupants réels</label>
          <div class="field-hint">Nombre de personnes vivant dans le logement (pour estimer la fréquence de vidange).</div>
          <div class="field-row"><input type="number" id="f-pers" value="4" min="1" step="1"><span class="field-unit">pers.</span></div>
        </div>
        <button class="btn btn-primary" onclick="calcFTEMain()">Calculer le volume FTE</button>
        <div class="result-box" id="res-fte2">
          <div class="result-value" id="rv-fte2"></div>
          <div class="result-detail" id="rd-fte2"></div>
          <div class="result-formula"><span>V = 3 000 L &nbsp;si pp ≤ 5</span><span class="rf-sep">·</span><span>V = 3 000 + (pp − 5) × 1 000 L &nbsp;si pp &gt; 5</span></div>
          <div class="result-src">📖 Arrêté 07/09/2009 art. 6 · DTU 64.1</div>
        </div>
      </div>
    </div></div>
    <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📐 Données réglementaires FTE</div>
      <div class="kv-grid">
        <div class="kv-item"><div class="kv-key">Volume min (≤ 5 pp)</div><div class="kv-val">3 000 L = 3 m³</div></div>
        <div class="kv-item"><div class="kv-key">Au-delà de 5 pp</div><div class="kv-val">+1 000 L par pp suppl.</div></div>
        <div class="kv-item"><div class="kv-key">Vidange légale max.</div><div class="kv-val">Tous les 4 ans</div></div>
        <div class="kv-item"><div class="kv-key">Accumulation boues</div><div class="kv-val">~30 L/EH/an</div></div>
        <div class="kv-item full"><div class="kv-key">Norme</div><div class="kv-val">DTU 64.1 · Arrêté du 07/09/2009 art. 6 · NF EN 12566-1</div></div>
        <div class="kv-item full"><div class="kv-key">Matériaux autorisés</div><div class="kv-val">Béton armé · PEHD · Polypropylène · Fibre de verre</div></div>
      </div>
      <div class="alert info" style="margin-top:var(--s-2)"><span class="alert-icon">ℹ</span><span>La fosse septique (eaux vannes seules) est <strong>interdite à neuf depuis 2009</strong>. Seule la FTE (toutes eaux) est autorisée.</span></div>
    </div></div>`;
}

function calcFTEMain() {
  if (!checkCalcLimit()) return;
  const pp = parseInt(getV('f-pp'))||4;
  const pers = parseInt(getV('f-pers'))||4;
  const v = pp<=5 ? 3000 : 3000+(pp-5)*1000;
  const boues = pers*30;
  const vidange = Math.floor(v*0.5/boues);
  const res = document.getElementById('res-fte2'); res.classList.add('show');
  res.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-fte2').textContent = `${v.toLocaleString()} L = ${(v/1000).toFixed(1)} m³`;
  document.getElementById('rd-fte2').innerHTML = `• Pièces principales : ${pp} · EH réglementaires : ${pp+1}<br>• Accumulation boues : ${boues} L/an (${pers} pers. × 30 L/an)<br>• Vidange conseillée : tous les ~${vidange} an${vidange>1?'s':''} (avant 50% remplissage)`;
}

function renderCalcManning() {
  document.getElementById('calc-content').innerHTML = `
    <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🔵 Manning-Strickler — Débit collecteur plein</div>
      <div class="calc-zone">
        <div class="field">
          <label class="field-label">Diamètre intérieur D</label>
          <div class="field-tip">💡 DN 200 · DN 300 · DN 400 · DN 600 · DN 800</div>
          <div class="field-row"><input type="number" id="c-dn" value="300" step="50"><span class="field-unit">mm</span></div>
        </div>
        <div class="field">
          <label class="field-label">Coefficient K (Strickler)</label>
          <div class="field-tip">💡 PVC/PEHD : 90–100 · Béton : 65–80 · Grès : 70 · Fonte : 100</div>
          <div class="field-row"><input type="number" id="c-ks" value="90" step="5"><span class="field-unit">m^(1/3)/s</span></div>
        </div>
        <div class="field">
          <label class="field-label">Pente I</label>
          <div class="field-hint">Pente longitudinale de la canalisation.</div>
          <div class="field-tip">💡 Pente min EU : 3‰ · Pente min EP : 5‰</div>
          <div class="field-row"><input type="number" id="c-ip" value="3" step="0.5"><span class="field-unit">‰</span></div>
        </div>
        <button class="btn btn-primary" onclick="calcManning()">Calculer le débit</button>
        <div class="result-box" id="res-mann">
          <div class="result-value" id="rv-mn"></div>
          <div class="result-detail" id="rd-mn"></div>
          <div class="result-formula"><span>Q = K · A · R<sub>h</sub><sup>2/3</sup> · I<sup>1/2</sup></span><span class="rf-sep">·</span><span>R<sub>h</sub> = <span class="mf"><span class="n">D</span><span class="d">4</span></span></span><span class="rf-sep">·</span><span>A = <span class="mf"><span class="n">π · D²</span><span class="d">4</span></span></span></div>
          <div class="result-src">📖 Manning R. (1891) · NF EN 752 · CCTG Fascicule 70</div>
        </div>
      </div>
    </div></div>
    <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📐 Coefficients K de référence</div>
      <div class="kv-grid">
        ${[['PVC/PEHD neuf','90–100'],['Béton lisse neuf','70–80'],['Béton vieilli','60–70'],['Grès cérame','70–90'],['Fonte ductile neuve','100–130'],['Rivière naturelle','25–45']].map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}
      </div>
    </div></div>`;
}

function renderCalcDebitNuit() {
  document.getElementById('calc-content').innerHTML = `
    <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🌙 Débit de nuit EU — Mesure & conversion</div>
      <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Le débit minimum nocturne (1h–5h) permet de détecter les eaux parasites permanentes (EPIP). Saisir le volume mesuré sur la période de mesure.</span></div>
      <div class="calc-zone">
        <div class="field">
          <label class="field-label">Volume mesuré</label>
          <div class="field-row">
            <input type="number" id="dn-vol" value="12" step="0.1" style="flex:1">
            <select id="dn-vol-unit" style="width:90px;padding:8px;border-radius:8px;border:1.5px solid var(--c-border);background:var(--c-surface-2);color:var(--c-text);font-size:var(--t-sm)">
              <option value="L">L (litres)</option>
              <option value="m3" selected>m³</option>
              <option value="hL">hL</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="field-label">Durée de mesure</label>
          <div class="field-row">
            <input type="number" id="dn-dur" value="60" step="1" style="flex:1">
            <select id="dn-dur-unit" style="width:90px;padding:8px;border-radius:8px;border:1.5px solid var(--c-border);background:var(--c-surface-2);color:var(--c-text);font-size:var(--t-sm)">
              <option value="s">secondes</option>
              <option value="min" selected>minutes</option>
              <option value="h">heures</option>
            </select>
          </div>
        </div>
        <button class="btn btn-primary" onclick="calcDebitNuit()">Calculer le débit</button>
        <div class="result-box" id="res-dn" style="display:none">
          <div style="font-size:var(--t-xs);font-weight:700;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Résultats — toutes unités</div>
          <div id="rv-dn" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)"></div>
          <div class="result-formula" style="margin-top:var(--s-2)"><span>Q = <span class="mf"><span class="n">Volume</span><span class="d">Durée</span></span></span></div>
          <div class="result-src">📖 Guide EPIP 2016 (ASTEE) · DTU 64.1 · NF EN 752</div>
        </div>
      </div>
    </div></div>
    <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📋 Valeurs de référence — Débit de nuit EU</div>
      <div class="kv-grid">
        ${[
          ['EPIP faibles (réseau sain)','< 0,05 L/s/km'],
          ['EPIP modérées','0,05–0,2 L/s/km'],
          ['EPIP élevées','> 0,2 L/s/km'],
          ['Débit de pointe EU (200 hab/km)','≈ 3–5 L/s'],
          ['Plage de mesure nocturne','1h00–5h00'],
          ['Méthode de référence','ASTEE / EPIP 2016'],
        ].map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}
      </div>
    </div></div>`;
}

function calcDebitNuit() {
  var vol = parseFloat(document.getElementById('dn-vol').value) || 0;
  var volUnit = document.getElementById('dn-vol-unit').value;
  var dur = parseFloat(document.getElementById('dn-dur').value) || 0;
  var durUnit = document.getElementById('dn-dur-unit').value;
  if (!vol || !dur) return;
  var volM3 = volUnit === 'L' ? vol/1000 : volUnit === 'hL' ? vol/10 : vol;
  var durS  = durUnit === 'min' ? dur*60 : durUnit === 'h' ? dur*3600 : dur;
  var qMs = volM3 / durS;
  var qLs = qMs * 1000;
  var qM3h = qMs * 3600;
  var qM3j = qMs * 86400;
  var box = document.getElementById('res-dn');
  var rv  = document.getElementById('rv-dn');
  box.style.display = 'block'; box.classList.add('show');
  rv.innerHTML = [
    ['L/s', qLs.toFixed(4)],
    ['m³/h', qM3h.toFixed(4)],
    ['m³/j', qM3j.toFixed(2)],
    ['m³/s', qMs.toFixed(6)],
  ].map(function(r){ return '<div style="background:var(--c-surface-3,var(--c-surface-2));border-radius:8px;padding:10px 12px"><div style="font-size:11px;color:var(--c-text-3)">' + r[0] + '</div><div style="font-size:var(--t-lg);font-weight:800;color:var(--c-ac)">' + r[1] + '</div></div>'; }).join('');
}

function renderCalcFuiteAEP() {
  document.getElementById('calc-content').innerHTML = `
    <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">💧 Débit de fuite AEP — Index compteur</div>
      <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Relever l'index du compteur au départ puis à l'arrivée, saisir le pas de temps entre les deux relevés. Le débit de fuite est calculé automatiquement.</span></div>
      <div class="calc-zone">
        <div class="field">
          <label class="field-label">Index départ (m³)</label>
          <div class="field-tip">💡 Relevé initial — noter l'heure exacte</div>
          <div class="field-row"><input type="number" id="fa-idx1" value="0" step="0.001" style="flex:1"><span class="field-unit">m³</span></div>
        </div>
        <div class="field">
          <label class="field-label">Index arrivée (m³)</label>
          <div class="field-tip">💡 Relevé final après le pas de temps</div>
          <div class="field-row"><input type="number" id="fa-idx2" value="0.5" step="0.001" style="flex:1"><span class="field-unit">m³</span></div>
        </div>
        <div class="field">
          <label class="field-label">Pas de temps</label>
          <div class="field-row">
            <input type="number" id="fa-dur" value="60" step="1" style="flex:1">
            <select id="fa-dur-unit" style="width:100px;padding:8px;border-radius:8px;border:1.5px solid var(--c-border);background:var(--c-surface-2);color:var(--c-text);font-size:var(--t-sm)">
              <option value="min" selected>minutes</option>
              <option value="h">heures</option>
              <option value="s">secondes</option>
            </select>
          </div>
        </div>
        <button class="btn btn-primary" onclick="calcFuiteAEP()">Calculer le débit de fuite</button>
        <div class="result-box" id="res-fa" style="display:none">
          <div style="font-size:var(--t-xs);font-weight:700;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Résultats</div>
          <div id="rv-fa" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)"></div>
          <div class="result-formula" style="margin-top:var(--s-2)"><span>Q = <span class="mf"><span class="n">Index<sub>arrivée</sub> − Index<sub>départ</sub></span><span class="d">Pas de temps</span></span></span></div>
          <div class="result-src">📖 NF EN 14154 · Guide rendement réseau ASTEE 2013</div>
        </div>
      </div>
    </div></div>
    <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📋 Seuils de référence — Pertes en réseau AEP</div>
      <div class="kv-grid">
        ${[
          ['Réseau performant (ILC)','< 3 m³/km/j'],
          ['Réseau acceptable','3–8 m³/km/j'],
          ['Réseau dégradé','> 8 m³/km/j'],
          ['Rendement minimal (Grenelle)','> 85 % (agglomérations)'],
          ['Débit minimum nocturne (bon réseau)','< 1 L/s pour 1 000 abonnés'],
          ['Heure de mesure recommandée','2h00–4h00 (débit min.)'],
        ].map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}
      </div>
    </div></div>`;
}

function calcFuiteAEP() {
  var idx1 = parseFloat(document.getElementById('fa-idx1').value) || 0;
  var idx2 = parseFloat(document.getElementById('fa-idx2').value) || 0;
  var dur  = parseFloat(document.getElementById('fa-dur').value)  || 0;
  var durUnit = document.getElementById('fa-dur-unit').value;
  if (!dur || idx2 <= idx1) {
    var box = document.getElementById('res-fa');
    box.style.display = 'block'; box.classList.add('show');
    document.getElementById('rv-fa').innerHTML = '<div style="grid-column:1/-1;color:var(--c-warn);font-weight:700">⚠ L\'index arrivée doit être supérieur à l\'index départ, et le pas de temps > 0.</div>';
    return;
  }
  var volM3 = idx2 - idx1;
  var durH  = durUnit === 'min' ? dur / 60 : durUnit === 's' ? dur / 3600 : dur;
  var qM3h  = volM3 / durH;
  var qLs   = qM3h / 3.6;
  var qM3j  = qM3h * 24;
  var box = document.getElementById('res-fa');
  var rv  = document.getElementById('rv-fa');
  box.style.display = 'block'; box.classList.add('show');
  rv.innerHTML = [
    ['Volume perdu', volM3.toFixed(3) + ' m³'],
    ['Débit de fuite', qM3h.toFixed(4) + ' m³/h'],
    ['Débit de fuite', qLs.toFixed(4) + ' L/s'],
    ['Extrapolé sur 24h', qM3j.toFixed(2) + ' m³/j'],
  ].map(function(r){ return '<div style="background:var(--c-surface-3,var(--c-surface-2));border-radius:8px;padding:10px 12px"><div style="font-size:11px;color:var(--c-text-3)">' + r[0] + '</div><div style="font-size:var(--t-lg);font-weight:800;color:var(--c-ep)">' + r[1] + '</div></div>'; }).join('');
}

function renderCalcPorchet() {
  var selStyle = 'width:100%;padding:10px 12px;border-radius:10px;border:1.5px solid var(--c-border);background:var(--c-surface-2);color:var(--c-text);font-size:var(--t-sm);font-family:var(--f-body)';
  document.getElementById('calc-content').innerHTML = `
    <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🪛 Perméabilité sol — Méthode Porchet</div>
      <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span><strong>Protocole DTU 64.1 :</strong> Forer un trou cylindrique, saturer le sol (2 remplissages préalables). Remplir à h₁, mesurer la hauteur h₂ après le pas de temps Δt. Répéter 3 mesures et prendre la valeur stabilisée.</span></div>
      <div class="calc-zone">

        <div class="field">
          <label class="field-label">Instrument de forage</label>
          <select id="po-instrument" style="${selStyle}" onchange="porchetInstrumentChange()">
            <option value="tariere-50"  data-r="50"  data-d="100">🪛 Tarière manuelle Ø 100 mm — r = 50 mm (standard DTU 64.1)</option>
            <option value="tariere-80"  data-r="80"  data-d="160">🪛 Tarière manuelle Ø 160 mm — r = 80 mm</option>
            <option value="tariere-100" data-r="100" data-d="200">🪛 Tarière manuelle Ø 200 mm — r = 100 mm</option>
            <option value="tariere-125" data-r="125" data-d="250">🔩 Tarière mécanique Ø 250 mm — r = 125 mm</option>
            <option value="cylindre-150" data-r="150" data-d="300">⚙️ Cylindre métallique Ø 300 mm — r = 150 mm</option>
            <option value="custom"       data-r=""   data-d="">✏️ Diamètre personnalisé…</option>
          </select>
        </div>

        <div class="field" id="po-custom-wrap" style="display:none">
          <label class="field-label">Diamètre du trou Ø</label>
          <div class="field-hint">Mesurer le diamètre intérieur réel du forage.</div>
          <div class="field-row">
            <input type="number" id="po-diam-custom" value="120" step="5" oninput="porchetDiamChange()">
            <span class="field-unit">mm</span>
          </div>
          <div style="font-size:11px;color:var(--c-text-3);margin-top:4px">→ Rayon r = <span id="po-r-display">60</span> mm</div>
        </div>
        <input type="hidden" id="po-r" value="50">

        <div class="field">
          <label class="field-label">Instrument de mesure des hauteurs</label>
          <select id="po-mesure" style="${selStyle}">
            <option value="regle">📏 Règle graduée (mm)</option>
            <option value="double-decimetre">📐 Double décimètre (mm)</option>
            <option value="limnimetre">🔭 Limnimètre à pointe (mm)</option>
            <option value="capteur">📡 Capteur de pression numérique (mm)</option>
            <option value="flotteur">🟡 Flotteur + cordelette graduée (mm)</option>
          </select>
        </div>

        <div class="field">
          <label class="field-label">Instrument de mesure du temps</label>
          <select id="po-chrono" style="${selStyle}">
            <option value="chrono-phone">📱 Chronomètre smartphone</option>
            <option value="chrono-montre">⌚ Montre chronomètre</option>
            <option value="chrono-pro">⏱️ Chronomètre de précision (±0,1 s)</option>
            <option value="datalogger">🖥️ Enregistreur automatique (datalogger)</option>
          </select>
        </div>

        <div style="border-top:1px solid var(--c-border);margin:var(--s-2) 0;padding-top:var(--s-2)">
          <div style="font-size:var(--t-xs);font-weight:700;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Mesures terrain</div>
        </div>

        <div class="field">
          <label class="field-label">Hauteur d'eau initiale h₁</label>
          <div class="field-hint">Hauteur mesurée depuis le fond du trou au départ du chronomètre.</div>
          <div class="field-row"><input type="number" id="po-h1" value="300" step="10"><span class="field-unit">mm</span></div>
        </div>
        <div class="field">
          <label class="field-label">Hauteur d'eau finale h₂</label>
          <div class="field-hint">Hauteur mesurée à la fin du pas de temps Δt.</div>
          <div class="field-row"><input type="number" id="po-h2" value="240" step="10"><span class="field-unit">mm</span></div>
        </div>
        <div class="field">
          <label class="field-label">Pas de temps Δt</label>
          <div class="field-tip">💡 Sol perméable : 15 min · Sol peu perméable : 30 min · Sol très peu perméable : 60 min</div>
          <div class="field-row"><input type="number" id="po-dt" value="30" step="1"><span class="field-unit">min</span></div>
        </div>

        <button class="btn btn-primary" onclick="calcPorchet()">Calculer la perméabilité K</button>
        <div class="result-box" id="res-po" style="display:none">
          <div style="font-size:var(--t-xs);font-weight:700;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Résultats</div>
          <div id="rv-po-instrument" style="font-size:11px;color:var(--c-text-3);margin-bottom:var(--s-2)"></div>
          <div id="rv-po" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2);margin-bottom:var(--s-2)"></div>
          <div id="po-classement" style="margin-top:var(--s-2)"></div>
          <div class="result-formula" style="margin-top:var(--s-2)"><span>K = <span class="mf"><span class="n">r</span><span class="d">2 · Δt</span></span> × ln<span class="mf"><span class="n">2h<sub>1</sub> + r</span><span class="d">2h<sub>2</sub> + r</span></span></span></div>
          <div class="result-src">📖 DTU 64.1 (2013) · Arrêté 07/09/2009 · NF EN ISO 22282-4</div>
        </div>
      </div>
    </div></div>

    <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📋 Classement perméabilité — DTU 64.1</div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="background:var(--c-anc-l)">
            <th style="padding:8px;text-align:left;border-radius:6px 0 0 0">Classe</th>
            <th style="padding:8px;text-align:left">K (mm/h)</th>
            <th style="padding:8px;text-align:left">K (m/s)</th>
            <th style="padding:8px;text-align:left;border-radius:0 6px 0 0">Filières compatibles</th>
          </tr></thead>
          <tbody>
            ${[
              ['Sol imperméable','< 1','< 2,8×10⁻⁷','❌ Aucune filière gravitaire — microstation agréée CE obligatoire'],
              ['Sol peu perméable','1 – 10','2,8×10⁻⁷ – 2,8×10⁻⁶','Filtre à sable drainé · FPR vertical · Microstation'],
              ['Sol perméable','10 – 50','2,8×10⁻⁶ – 1,4×10⁻⁵','Tranchées d\'épandage · Filtre à sable non drainé · FPR'],
              ['Sol très perméable','50 – 500','1,4×10⁻⁵ – 1,4×10⁻⁴','Épandage gravitaire · Tranchées · Tertre possible'],
              ['Sol excessivement perméable','> 500','> 1,4×10⁻⁴','⚠ Risque pollution — filière drainée + distance sécurité'],
            ].map(function(r){ return '<tr style="border-bottom:1px solid var(--c-border)"><td style="padding:7px 8px;font-weight:600">'+r[0]+'</td><td style="padding:7px 8px;color:var(--c-anc)">'+r[1]+'</td><td style="padding:7px 8px;font-size:11px;color:var(--c-text-3)">'+r[2]+'</td><td style="padding:7px 8px;font-size:11px">'+r[3]+'</td></tr>'; }).join('')}
          </tbody>
        </table>
      </div>
    </div></div>

    <div style="padding:0 var(--s-4) var(--s-2)"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">🔬 Protocole terrain — Méthode Porchet</div>
      <div style="display:flex;flex-direction:column;gap:var(--s-2)">
        ${[
          ['1','Forage','Creuser un trou cylindrique à la tarière, profondeur ≥ 1 m (zone d\'épuration) · Dégager les parois, nettoyer le fond'],
          ['2','Saturation','Remplir 2 fois complètement et laisser s\'écouler — saturer le sol (évite les effets de sécheresse)'],
          ['3','Mesure','Remplir jusqu\'à h₁, déclencher le chronomètre. Mesurer h₂ après Δt (15 à 30 min selon sol)'],
          ['4','Répétitions','Réaliser 3 mesures consécutives — retenir la valeur stabilisée (3ᵉ mesure généralement)'],
          ['5','Localisation','3 sondages minimum sur la parcelle, aux emplacements prévus pour le dispositif'],
        ].map(function(r){ return '<div style="display:flex;gap:var(--s-2);align-items:flex-start"><div style="min-width:26px;height:26px;border-radius:50%;background:var(--c-anc-l);color:var(--c-anc);font-weight:800;font-size:12px;display:flex;align-items:center;justify-content:center">'+r[0]+'</div><div><div style="font-weight:700;font-size:13px">'+r[1]+'</div><div style="font-size:12px;color:var(--c-text-3);margin-top:2px">'+r[2]+'</div></div></div>'; }).join('')}
      </div>
    </div></div>`;
}

function porchetInstrumentChange() {
  var sel = document.getElementById('po-instrument');
  var opt = sel.options[sel.selectedIndex];
  var r = opt.getAttribute('data-r');
  var wrap = document.getElementById('po-custom-wrap');
  if (opt.value === 'custom') {
    wrap.style.display = '';
    porchetDiamChange();
  } else {
    wrap.style.display = 'none';
    document.getElementById('po-r').value = r;
  }
}

function porchetDiamChange() {
  var d = parseFloat(document.getElementById('po-diam-custom').value) || 0;
  var r = d / 2;
  document.getElementById('po-r').value = r;
  document.getElementById('po-r-display').textContent = r;
}

function calcPorchet() {
  var r  = parseFloat(document.getElementById('po-r').value)  || 0;
  var h1 = parseFloat(document.getElementById('po-h1').value) || 0;
  var h2 = parseFloat(document.getElementById('po-h2').value) || 0;
  var dt = parseFloat(document.getElementById('po-dt').value) || 0;
  var box = document.getElementById('res-po');
  var rv  = document.getElementById('rv-po');
  var cl  = document.getElementById('po-classement');
  if (!r || !dt || h2 >= h1 || h1 <= 0) {
    box.style.display = 'block';
    rv.innerHTML = '<div style="grid-column:1/-1;color:var(--c-warn);font-weight:700">⚠ h₁ doit être supérieur à h₂ et tous les champs doivent être renseignés.</div>';
    cl.innerHTML = '';
    return;
  }
  var dtMin = dt;
  var arg = (2*h1 + r) / (2*h2 + r);
  if (arg <= 0 || arg === 1) {
    box.style.display = 'block';
    rv.innerHTML = '<div style="grid-column:1/-1;color:var(--c-warn);font-weight:700">⚠ Valeurs incohérentes — vérifier h₁, h₂ et r.</div>';
    cl.innerHTML = '';
    return;
  }
  var kMmMin = (r / (2 * dtMin)) * Math.log(arg);
  var kMmH   = kMmMin * 60;
  var kMs    = kMmH / 3600000;
  var instrSel   = document.getElementById('po-instrument');
  var mesureSel  = document.getElementById('po-mesure');
  var chronoSel  = document.getElementById('po-chrono');
  var instrTxt   = instrSel.options[instrSel.selectedIndex].text.replace(/data-.*/, '');
  var mesureTxt  = mesureSel.options[mesureSel.selectedIndex].text;
  var chronoTxt  = chronoSel.options[chronoSel.selectedIndex].text;
  document.getElementById('rv-po-instrument').innerHTML =
    '🪛 ' + instrTxt + ' &nbsp;·&nbsp; ' + mesureTxt + ' &nbsp;·&nbsp; ' + chronoTxt +
    ' &nbsp;·&nbsp; r = ' + r + ' mm';
  box.style.display = 'block';
  box.classList.add('show');
  rv.innerHTML = [
    ['K (mm/h)',  kMmH.toFixed(2)],
    ['K (mm/min)', kMmMin.toFixed(4)],
    ['K (m/s)',   kMs.toExponential(2)],
    ['K (m/j)',   (kMs * 86400).toFixed(2)],
  ].map(function(r){ return '<div style="background:var(--c-surface-3,var(--c-surface-2));border-radius:8px;padding:10px 12px"><div style="font-size:11px;color:var(--c-text-3)">'+r[0]+'</div><div style="font-size:var(--t-lg);font-weight:800;color:var(--c-anc)">'+r[1]+'</div></div>'; }).join('');
  var classes = [
    { max:1,   label:'Sol imperméable',              color:'#ef4444', badge:'❌', filiere:'Microstation agréée CE obligatoire' },
    { max:10,  label:'Sol peu perméable',             color:'#f97316', badge:'⚠️', filiere:'Filtre à sable drainé · FPR vertical' },
    { max:50,  label:'Sol perméable',                 color:'#22c55e', badge:'✅', filiere:'Tranchées d\'épandage · Filtre sable non drainé' },
    { max:500, label:'Sol très perméable',            color:'#0ea5e9', badge:'✅', filiere:'Épandage gravitaire · Tranchées' },
    { max:Infinity, label:'Sol excessivement perméable', color:'#a855f7', badge:'⚠️', filiere:'Filière drainée + distance sécurité requise' },
  ];
  var cls = classes.find(function(c){ return kMmH < c.max; }) || classes[classes.length-1];
  cl.innerHTML = '<div style="border-radius:10px;padding:12px 14px;background:'+cls.color+'1a;border:1.5px solid '+cls.color+'44">'
    + '<div style="font-size:13px;font-weight:800;color:'+cls.color+'">'+cls.badge+' '+cls.label+'</div>'
    + '<div style="font-size:12px;color:var(--c-text-3);margin-top:4px">K = '+kMmH.toFixed(1)+' mm/h → '+cls.filiere+'</div>'
    + '</div>';
}

/* ═══════════════════════════════════════════════════
   DIMENSIONNEMENT STEP — HUB + CALCULATEURS
═══════════════════════════════════════════════════ */
function renderCalcSTEPHub() {
  var mc = document.getElementById('calc-content');
  var procedes = [
    { id:'step-ba',        ico:'🔵', name:'Boues activées',            sub:'Faible / moyenne / forte charge · Cm · Volume bassin · Clarificateur',     color:'#1a5276', colorl:'#d6eaf8' },
    { id:'step-lagunage',  ico:'🌿', name:'Lagunage naturel & aéré',   sub:'Surface lagunage naturel · Lagunage aéré · Charge surfacique',              color:'#1a7a4a', colorl:'#e8f5ee' },
    { id:'step-fpr',       ico:'🌾', name:'Filtres plantés de roseaux', sub:'FPR vertical 1er étage · FPR horizontal · Surface · Charge hydraulique',   color:'#5C8A1C', colorl:'#EEF5E0' },
    { id:'step-lit',       ico:'🪨', name:'Lit bactérien',             sub:'Charge volumique · Volume · Taux de recirculation · DCO/DBO5',             color:'#6B4226', colorl:'#F5EFE0' },
    { id:'step-biodisques',ico:'⚙️', name:'Biodisques',                sub:'Surface disques · Charge surfacique · Nombre de modules',                  color:'#5A189A', colorl:'#F3E8FF' },
    { id:'step-decanteur', ico:'⬇️', name:'Décanteur primaire / secondaire', sub:'Surface · Vitesse ascensionnelle · Charge hydraulique · Boues',       color:'#0A5090', colorl:'#E6EEF8' },
  ];
  var html = '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-1)">🏭 Choisir un procédé à dimensionner</div>'
    + '<div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Chaque calculateur suit la démarche réglementaire française (Arrêté du 21/07/2015 · Norme NF EN 12255 · guide SATESE). Entrer la capacité en EH ou le débit journalier.</span></div>'
    + '<div style="display:flex;flex-direction:column;gap:var(--s-2)">';
  procedes.forEach(function(p) {
    html += '<div class="mod-list-card" style="--cat-color:'+p.color+'" onclick="showCalcById(\''+p.id+'\')">'
      + '<div class="mlc-icon" style="background:'+p.colorl+';font-size:20px">'+p.ico+'</div>'
      + '<div class="mlc-body"><div class="mlc-name">'+p.name+'</div><div class="mlc-sub">'+p.sub+'</div></div>'
      + '<span class="mlc-arrow">›</span></div>';
  });
  html += '</div>';
  html += '<div style="margin-top:var(--s-3)"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📋 Comparatif rapide des procédés</div>'
    + '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px">'
    + '<thead><tr style="background:var(--c-ac-l)">'
    + '<th style="padding:7px 8px;text-align:left">Procédé</th><th style="padding:7px 8px">EH typique</th><th style="padding:7px 8px">Emprise</th><th style="padding:7px 8px">Énergie</th><th style="padding:7px 8px">Entretien</th></tr></thead><tbody>'
    + [
        ['Boues activées faible charge','> 5 000','Faible','Élevée ⚡⚡⚡','Élevé'],
        ['Boues activées moy. charge','500–5 000','Faible','Moyenne ⚡⚡','Moyen'],
        ['Lagunage naturel','< 5 000','Très grande','Nulle ✅','Faible'],
        ['Lagunage aéré','200–10 000','Grande','Moyenne ⚡⚡','Faible'],
        ['FPR vertical','50–5 000','Moyenne','Faible ⚡','Faible'],
        ['Lit bactérien','500–50 000','Moyenne','Moyenne ⚡⚡','Moyen'],
        ['Biodisques','100–5 000','Faible','Faible ⚡','Moyen'],
      ].map(function(r){ return '<tr style="border-bottom:1px solid var(--c-border)">'
        + '<td style="padding:6px 8px;font-weight:600">'+r[0]+'</td>'
        + '<td style="padding:6px 8px;text-align:center;color:var(--c-ac)">'+r[1]+'</td>'
        + '<td style="padding:6px 8px;text-align:center">'+r[2]+'</td>'
        + '<td style="padding:6px 8px;text-align:center">'+r[3]+'</td>'
        + '<td style="padding:6px 8px;text-align:center">'+r[4]+'</td>'
        + '</tr>'; }).join('')
    + '</tbody></table></div></div></div>';
  html += '</div>';
  mc.innerHTML = html;
}

function _stepField(id, label, val, unit, tip, hint) {
  return '<div class="field">'
    + '<label class="field-label">'+label+'</label>'
    + (hint ? '<div class="field-hint">'+hint+'</div>' : '')
    + (tip  ? '<div class="field-tip">💡 '+tip+'</div>' : '')
    + '<div class="field-row"><input type="number" id="'+id+'" value="'+val+'" step="any"><span class="field-unit">'+unit+'</span></div>'
    + '</div>';
}
function _stepResult(pairs, color) {
  return pairs.map(function(r){
    return '<div style="background:var(--c-surface-3,var(--c-surface-2));border-radius:8px;padding:10px 12px">'
      + '<div style="font-size:11px;color:var(--c-text-3)">'+r[0]+'</div>'
      + '<div style="font-size:var(--t-lg);font-weight:800;color:'+(color||'var(--c-ac)')+'">'+r[1]+'</div>'
      + '</div>';
  }).join('');
}
function _stepResBox(id) {
  return '<div class="result-box" id="'+id+'" style="display:none">'
    + '<div style="font-size:var(--t-xs);font-weight:700;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Résultats</div>'
    + '<div id="'+id+'-vals" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)"></div>'
    + '<div id="'+id+'-note" style="margin-top:var(--s-2);font-size:11px;color:var(--c-text-3)"></div>'
    + '<div class="result-src" style="margin-top:var(--s-2)" id="'+id+'-src"></div>'
    + '</div>';
}
function _stepShow(boxId, pairs, note, src, color) {
  var box = document.getElementById(boxId);
  if (!box) return;
  box.style.display = 'block';
  box.classList.add('show');
  document.getElementById(boxId+'-vals').innerHTML = _stepResult(pairs, color);
  if (note) document.getElementById(boxId+'-note').innerHTML = note;
  if (src)  document.getElementById(boxId+'-src').innerHTML  = '📖 ' + src;
}
function _gv(id) { return parseFloat(document.getElementById(id).value) || 0; }

function _stepModeSelector(calcFn) {
  return '<div style="background:var(--c-surface-2);border-radius:var(--r-md);padding:10px 12px;margin-bottom:var(--s-3);display:flex;flex-direction:column;gap:6px">'
    + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em">Mode de dimensionnement DBO₅</div>'
    + '<select id="step-mode-dbo" onchange="'+calcFn+'()" style="width:100%;padding:8px 10px;border-radius:8px;border:1.5px solid var(--c-border);background:var(--c-surface);color:var(--c-text);font-size:var(--t-sm);font-family:var(--f-body)">'
      + '<option value="60">📋 Minimum légal — 60 g DBO₅/EH/j · Arrêté 22/06/2007</option>'
      + '<option value="70" selected>✅ Recommandé SATESE / BE — 70 g DBO₅/EH/j · DTU 64.1 (2018)</option>'
    + '</select>'
    + '<div style="font-size:10px;color:var(--c-text-4)">Le mode recommandé intègre une marge de sécurité courante pour les STEP en France</div>'
  + '</div>';
}
function _stepGetDBO5Base() {
  var el = document.getElementById('step-mode-dbo');
  return el ? parseFloat(el.value) : 60;
}

/* ── Boues activées ── */
function renderCalcSTEPBA() {
  var selStyle = 'width:100%;padding:10px 12px;border-radius:10px;border:1.5px solid var(--c-border);background:var(--c-surface-2);color:var(--c-text);font-size:var(--t-sm);font-family:var(--f-body)';
  document.getElementById('calc-content').innerHTML = `
  <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🔵 Boues activées — Dimensionnement</div>
    <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Calcule le volume du bassin d'aération, la surface du clarificateur et la production de boues selon la charge massique choisie. Référence : Arrêté 21/07/2015 · NF EN 12255-6.</span></div>
    <div class="calc-zone">
      <div class="field">
        <label class="field-label">Régime de charge</label>
        <select id="ba-regime" style="${selStyle}" onchange="calcSTEPBA()">
          <option value="fc" data-cm="0.08" data-age="25">Faible charge — Cm ≈ 0,08 kgDBO5/kgMVS/j · Âge boues 20–30 j (nitrification complète)</option>
          <option value="mc" data-cm="0.15" data-age="12" selected>Moyenne charge — Cm ≈ 0,15 kgDBO5/kgMVS/j · Âge boues 8–15 j</option>
          <option value="hc" data-cm="0.40" data-age="5">Forte charge — Cm ≈ 0,40 kgDBO5/kgMVS/j · Âge boues 3–6 j</option>
          <option value="custom" data-cm="" data-age="">✏️ Valeurs personnalisées…</option>
        </select>
      </div>
      <div id="ba-custom-wrap" style="display:none;gap:var(--s-2);flex-direction:column">
        ${_stepField('ba-cm-custom','Charge massique Cm personnalisée','0.15','kgDBO₅/kgMVS/j','','','')}
        ${_stepField('ba-age-custom','Âge des boues personnalisé','12','jours','','')}
      </div>
      ${_stepModeSelector('calcSTEPBA')}
      ${_stepField('ba-eh','Capacité nominale','5000','EH','1 EH = 60 g DBO₅/j (min. légal) ou 70 g (recommandé) selon le mode choisi','')}
      ${_stepField('ba-mvs','Concentration MVS bassin','3.5','g/L','Faible charge : 2–4 g/L · Moy. charge : 3–5 g/L','')}
      ${_stepField('ba-va','Vitesse ascensionnelle clarificateur','1.0','m/h','Faible charge : 0,5–1 m/h · Moy. : 1–1,5 m/h · Forte : 1,5–2 m/h','')}
      ${_stepField('ba-qj','Débit journalier moyen','1250','m³/j','Valeur par défaut : 250 L/hab/j','')}
      <button class="btn btn-primary" onclick="calcSTEPBA()">Dimensionner</button>
      ${_stepResBox('res-ba')}
    </div>
  </div></div>
  <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📋 Référentiel charges massiques</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px">
      <thead><tr style="background:var(--c-ac-l)">
        <th style="padding:7px 8px;text-align:left">Régime</th><th style="padding:7px 8px">Cm (kgDBO₅/kgMVS/j)</th><th style="padding:7px 8px">Âge boues (j)</th><th style="padding:7px 8px">Nitrification</th><th style="padding:7px 8px">Usage typique</th>
      </tr></thead><tbody>
        ${[
          ['Faible charge','0,05–0,10','20–30','Complète ✅','> 5 000 EH, rejet sensible'],
          ['Moyenne charge','0,10–0,20','8–15','Partielle','500–5 000 EH'],
          ['Forte charge','0,25–0,50','3–6','Nulle ❌','> 50 000 EH (étape 1 de 2)'],
          ['Aération prolongée','< 0,05','> 30','Très complète','< 500 EH, faible entretien'],
        ].map(function(r){return '<tr style="border-bottom:1px solid var(--c-border)"><td style="padding:6px 8px;font-weight:600">'+r[0]+'</td><td style="padding:6px 8px;text-align:center;color:var(--c-ac)">'+r[1]+'</td><td style="padding:6px 8px;text-align:center">'+r[2]+'</td><td style="padding:6px 8px;text-align:center">'+r[3]+'</td><td style="padding:6px 8px">'+r[4]+'</td></tr>';}).join('')}
      </tbody>
    </table></div>
  </div></div>`;
  document.getElementById('ba-regime').addEventListener('change', function(){
    var opt = this.options[this.selectedIndex];
    var wrap = document.getElementById('ba-custom-wrap');
    wrap.style.display = opt.value === 'custom' ? 'flex' : 'none';
  });
}
function calcSTEPBA() {
  var sel = document.getElementById('ba-regime');
  var opt = sel ? sel.options[sel.selectedIndex] : null;
  var cm  = opt && opt.value !== 'custom' ? parseFloat(opt.getAttribute('data-cm')) : _gv('ba-cm-custom');
  var eh  = _gv('ba-eh'), mvs = _gv('ba-mvs'), va = _gv('ba-va'), qj = _gv('ba-qj');
  if (!cm || !eh || !mvs || !va || !qj) return;
  var dbo5Base = _stepGetDBO5Base();
  var dbo5j   = eh * dbo5Base / 1000;     // kg DBO5/j
  var massMVS = dbo5j / cm;               // kg MVS
  var volBA   = massMVS / mvs;            // m³ bassin aération
  var tsh     = volBA / (qj / 24);        // h
  var qph     = qj / 24;                  // m³/h
  var surfClar = qph / va;                // m²
  var diamClar = Math.sqrt(4 * surfClar / Math.PI); // m
  var prodBoues = dbo5j * 0.8;            // kg MS/j (coefficient 0,8 kgMS/kgDBO5 moy. charge)
  var volBoues  = prodBoues / 30;         // m³/j (boues à 3 % MS = 30 kg/m³)
  _stepShow('res-ba', [
    ['Charge DBO₅ journalière', dbo5j.toFixed(1) + ' kg/j'],
    ['Masse MVS nécessaire', massMVS.toFixed(0) + ' kg MVS'],
    ['Volume bassin aération', volBA.toFixed(0) + ' m³'],
    ['TSH bassin', tsh.toFixed(1) + ' h'],
    ['Débit de pointe (Q/h)', qph.toFixed(1) + ' m³/h'],
    ['Surface clarificateur', surfClar.toFixed(1) + ' m²'],
    ['Diamètre clarificateur', diamClar.toFixed(2) + ' m'],
    ['Production boues (MS)', prodBoues.toFixed(1) + ' kg MS/j'],
    ['Volume boues à extraire', volBoues.toFixed(2) + ' m³/j'],
  ], '⚠ Vérifier TSH bassin : 8–24h (moy. charge). Clarificateur : va ≤ 1,5 m/h en pointe. Production boues : coefficient 0,8 kgMS/kgDBO5 (moy. charge). Base DBO₅ : '+dbo5Base+' g/EH/j.', 'Arrêté 21/07/2015 · NF EN 12255-6 · Guide technique SATESE', '#1a5276');
}

/* ── Lagunage naturel & aéré ── */
function renderCalcSTEPLagunage() {
  document.getElementById('calc-content').innerHTML = `
  <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🌿 Lagunage — Dimensionnement</div>
    <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Le lagunage naturel est une filière sans énergie, adaptée aux zones rurales. Basé sur la charge surfacique en DBO₅. 3 bassins en série recommandés (DTU 64.1).</span></div>
    <div class="calc-zone">
      <div class="field">
        <label class="field-label">Type de lagunage</label>
        <select id="lag-type" style="width:100%;padding:10px 12px;border-radius:10px;border:1.5px solid var(--c-border);background:var(--c-surface-2);color:var(--c-text);font-size:var(--t-sm);font-family:var(--f-body)">
          <option value="nat">🌿 Lagunage naturel (LN) — sans aération artificielle</option>
          <option value="aere">💨 Lagunage aéré (LA) — avec aérateurs de surface</option>
        </select>
      </div>
      ${_stepModeSelector('calcSTEPLagunage')}
      ${_stepField('lag-eh','Capacité','500','EH','Lagunage naturel : 50–5 000 EH recommandé','')}
      ${_stepField('lag-cs','Charge surfacique DBO₅','100','kg DBO₅/ha/j','LN zone tempérée : 80–120 · LN zone chaude : 150–200 · LA : 200–400','')}
      ${_stepField('lag-prof','Profondeur des bassins','1.0','m','LN : 0,8–1,5 m · LA : 2–4 m','')}
      <button class="btn btn-primary" onclick="calcSTEPLagunage()">Dimensionner</button>
      ${_stepResBox('res-lag')}
    </div>
  </div></div>
  <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📐 Répartition 3 bassins en série (LN)</div>
    <div class="kv-grid">
      ${[['Bassin 1 (anaérobie)','30–40 % surface totale — dégrillé, dessablé'],['Bassin 2 (facultatif)','40–50 % — zone active algues/bactéries'],['Bassin 3 (maturation)','20–30 % — finition, réduction coliformes'],['Pente berges','1H/3V minimum — protection érosion'],['Revanche','0,5 m au-dessus du niveau haut'],['Distance habitation','200 m minimum (odeurs)']].map(function(r){return '<div class="kv-item"><div class="kv-key">'+r[0]+'</div><div class="kv-val">'+r[1]+'</div></div>';}).join('')}
    </div>
  </div></div>`;
}
function calcSTEPLagunage() {
  var eh = _gv('lag-eh'), cs = _gv('lag-cs'), prof = _gv('lag-prof');
  if (!eh || !cs || !prof) return;
  var dbo5Base = _stepGetDBO5Base();
  var dbo5j   = eh * dbo5Base / 1000;     // kg DBO5/j
  var surfHa  = dbo5j / cs;               // ha
  var surfM2  = surfHa * 10000;           // m²
  var vol     = surfM2 * prof;            // m³
  var tsh     = vol / (eh * 0.25);        // jours (0,25 m³/hab/j)
  var type = document.getElementById('lag-type').value;
  var note = type === 'nat'
    ? '3 bassins en série. Bassin 1 : 35 % · Bassin 2 : 45 % · Bassin 3 : 20 % de la surface totale. TSH recommandé : 20–30 jours en LN.'
    : 'Lagunage aéré : 2 bassins suffisent. Puissance aérateurs : 15–20 W/m² de bassin. TSH recommandé : 5–10 jours.';
  _stepShow('res-lag', [
    ['Charge DBO₅ journalière', dbo5j.toFixed(1) + ' kg/j'],
    ['Surface totale', surfM2.toFixed(0) + ' m² (' + surfHa.toFixed(3) + ' ha)'],
    ['Volume total', vol.toFixed(0) + ' m³'],
    ['TSH estimé', tsh.toFixed(1) + ' jours'],
    ['Bassin 1 (35 %)', (surfM2*0.35).toFixed(0) + ' m²'],
    ['Bassin 2 (45 %)', (surfM2*0.45).toFixed(0) + ' m²'],
    ['Bassin 3 (20 %)', (surfM2*0.20).toFixed(0) + ' m²'],
  ], note + ' Base DBO₅ : '+dbo5Base+' g/EH/j.', 'Circulaire 12/05/1981 · Guide lagunage ASTEE 2005 · DTU 64.1', '#1a7a4a');
}

/* ── Filtres plantés de roseaux ── */
function renderCalcSTEPFPR() {
  document.getElementById('calc-content').innerHTML = `
  <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🌾 Filtres plantés de roseaux (FPR) — Dimensionnement</div>
    <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Filière extensive à faible énergie. FPR vertical en 1er étage (2 unités alternées), FPR horizontal en 2ème étage optionnel. Charge surfacique DBO₅ : 60–80 g/m²/j (vertical).</span></div>
    <div class="calc-zone">
      <div class="field">
        <label class="field-label">Type de filtre</label>
        <select id="fpr-type" style="width:100%;padding:10px 12px;border-radius:10px;border:1.5px solid var(--c-border);background:var(--c-surface-2);color:var(--c-text);font-size:var(--t-sm);font-family:var(--f-body)">
          <option value="v1">🌾 FPR Vertical 1er étage (alimentation intermittente)</option>
          <option value="h2">🌊 FPR Horizontal 2ème étage (complémentaire)</option>
          <option value="v1h2">🌾🌊 Combiné V1 + H2 (filière complète)</option>
        </select>
      </div>
      ${_stepModeSelector('calcSTEPFPR')}
      ${_stepField('fpr-eh','Capacité','200','EH','FPR : efficace jusqu\'à 5 000 EH','')}
      ${_stepField('fpr-cs-v','Charge surfacique FPR vertical','70','g DBO₅/m²/j','Standard France : 60–80 g/m²/j (Arrêté 2015)','')}
      ${_stepField('fpr-cs-h','Charge surfacique FPR horizontal','20','g DBO₅/m²/j','Standard : 15–25 g/m²/j','')}
      ${_stepField('fpr-ch-hyd','Charge hydraulique FPR vertical','0.15','m/j','Max recommandé : 0,15–0,20 m/j · 150–200 mm/j','')}
      <button class="btn btn-primary" onclick="calcSTEPFPR()">Dimensionner</button>
      ${_stepResBox('res-fpr')}
    </div>
  </div></div>
  <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📐 Spécifications techniques FPR</div>
    <div class="kv-grid">
      ${[['Matériau filtrant V1','Gravier 2–8 mm (épaisseur 60–80 cm)'],['Fond imperméable','Géomembrane PEHD 1,5 mm'],['Drainage fond V1','Réseau drains Ø 100 collectés en regard'],['Alimentation','Bâchées intermittentes (pompe + timer) 4×/j'],['Alternance unités','Repos minimum 3 jours / unité'],['Roseaux (Phragmites)','Densité plantation : 4 pieds/m²'],['Pente surface','0 % (alimentation uniforme)']].map(function(r){return '<div class="kv-item"><div class="kv-key">'+r[0]+'</div><div class="kv-val">'+r[1]+'</div></div>';}).join('')}
    </div>
  </div></div>`;
}
function calcSTEPFPR() {
  var eh = _gv('fpr-eh'), csv = _gv('fpr-cs-v'), csh = _gv('fpr-cs-h'), chhyd = _gv('fpr-ch-hyd');
  if (!eh || !csv) return;
  var type     = document.getElementById('fpr-type').value;
  var dbo5Base = _stepGetDBO5Base();
  var dbo5j    = eh * dbo5Base / 1000;    // kg DBO5/j
  var surfV    = (dbo5j * 1000) / csv;    // m² (csv en g/m²/j)
  var qj       = eh * 0.25;              // m³/j
  var surfVhyd = qj / chhyd;              // m² par charge hydraulique
  var surfVfin = Math.max(surfV, surfVhyd);// retenir la plus contraignante
  var surfH   = (dbo5j * 1000) / csh;
  var pairs = [['Charge DBO₅/j', dbo5j.toFixed(2)+' kg/j'], ['Débit journalier', qj.toFixed(1)+' m³/j']];
  if (type !== 'h2') {
    pairs.push(['Surface FPR vertical (charge DBO₅)', surfV.toFixed(0)+' m²']);
    pairs.push(['Surface FPR vertical (charge hydraulique)', surfVhyd.toFixed(0)+' m²']);
    pairs.push(['Surface retenue (critère le plus strict)', surfVfin.toFixed(0)+' m²']);
    pairs.push(['Surf. / unité (2 unités alternées)', (surfVfin/2).toFixed(0)+' m² × 2']);
  }
  if (type !== 'v1') {
    pairs.push(['Surface FPR horizontal', surfH.toFixed(0)+' m²']);
  }
  var note = '2 unités FPR vertical en alternance (repos 3 jours minimum). Vérifier la charge hydraulique : critère souvent plus contraignant que DBO₅ sur les petites STEP. Base DBO₅ : '+dbo5Base+' g/EH/j.';
  _stepShow('res-fpr', pairs, note, 'Arrêté 21/07/2015 · Guide FPR IRSTEA 2014 · NF EN 12566-5', '#5C8A1C');
}

/* ── Lit bactérien ── */
function renderCalcSTEPLit() {
  document.getElementById('calc-content').innerHTML = `
  <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🪨 Lit bactérien — Dimensionnement</div>
    <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Le lit bactérien (ou percolateur) est un réacteur biologique à cultures fixées. L'effluent percolé sur un matériau support (roche volcanique, plastique alvéolaire). Recirculation recommandée pour stabiliser la charge.</span></div>
    <div class="calc-zone">
      <div class="field">
        <label class="field-label">Matériau de remplissage</label>
        <select id="lit-mat" style="width:100%;padding:10px 12px;border-radius:10px;border:1.5px solid var(--c-border);background:var(--c-surface-2);color:var(--c-text);font-size:var(--t-sm);font-family:var(--f-body)">
          <option value="pouzz" data-cv="0.5">🪨 Pouzzolane (scories volcaniques) — Cv = 0,5 kgDBO₅/m³/j</option>
          <option value="plastique" data-cv="2.0">⬜ Plastique alvéolaire (haute densité) — Cv = 2,0 kgDBO₅/m³/j</option>
          <option value="caillou" data-cv="0.3">🪨 Cailloux concassés — Cv = 0,3 kgDBO₅/m³/j</option>
        </select>
      </div>
      ${_stepModeSelector('calcSTEPLit')}
      ${_stepField('lit-eh','Capacité','2000','EH','','')}
      ${_stepField('lit-recir','Taux de recirculation R','1.0','× Qj','R = 0,5 à 2 × débit journalier · Réduit les variations de charge','')}
      ${_stepField('lit-haut','Hauteur du lit','3.0','m','Pouzzolane : 2–4 m · Plastique : 4–8 m','')}
      <button class="btn btn-primary" onclick="calcSTEPLit()">Dimensionner</button>
      ${_stepResBox('res-lit')}
    </div>
  </div></div>`;
}
function calcSTEPLit() {
  var sel  = document.getElementById('lit-mat');
  var cv   = parseFloat(sel.options[sel.selectedIndex].getAttribute('data-cv'));
  var eh   = _gv('lit-eh'), recir = _gv('lit-recir'), haut = _gv('lit-haut');
  if (!eh || !cv || !haut) return;
  var dbo5Base = _stepGetDBO5Base();
  var dbo5j   = eh * dbo5Base / 1000;
  var volLit  = dbo5j / cv;
  var surfLit = volLit / haut;
  var diamLit = Math.sqrt(4 * surfLit / Math.PI);
  var qj      = eh * 0.25;
  var qrecir  = qj * recir;
  _stepShow('res-lit', [
    ['Charge DBO₅/j', dbo5j.toFixed(1)+' kg/j'],
    ['Volume lit bactérien', volLit.toFixed(0)+' m³'],
    ['Surface du lit', surfLit.toFixed(1)+' m²'],
    ['Diamètre équivalent', diamLit.toFixed(2)+' m'],
    ['Débit de recirculation', qrecir.toFixed(1)+' m³/j'],
    ['Débit total sur lit', (qj*(1+recir)).toFixed(1)+' m³/j'],
  ], 'Compléter par un décanteur secondaire (va ≤ 1,5 m/h). Charge volumique Cv : valeur en régime stabilisé avec recirculation.', 'NF EN 12255-7 · Guide technique SATESE · Metcalf & Eddy', '#6B4226');
}

/* ── Biodisques ── */
function renderCalcSTEPBiodisques() {
  document.getElementById('calc-content').innerHTML = `
  <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">⚙️ Biodisques — Dimensionnement</div>
    <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Les biodisques (RBC — Rotating Biological Contactor) sont des disques plastiques en rotation lente (2–5 tr/min) partiellement immergés dans l'effluent. La biomasse fixée s'oxyde à l'air à chaque tour.</span></div>
    <div class="calc-zone">
      ${_stepModeSelector('calcSTEPBiodisques')}
      ${_stepField('bd-eh','Capacité','500','EH','Biodisques : 100–5 000 EH','')}
      ${_stepField('bd-cs','Charge surfacique DBO₅','6','g DBO₅/m²/j','Norme NF EN 12255-8 : 5–8 g DBO₅/m²/j · Nitrification : 3–5 g/m²/j','')}
      ${_stepField('bd-surf-mod','Surface par module','10000','m²','Module standard : 10 000 à 15 000 m² de surface de disques','')}
      <button class="btn btn-primary" onclick="calcSTEPBiodisques()">Dimensionner</button>
      ${_stepResBox('res-bd')}
    </div>
  </div></div>
  <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📐 Caractéristiques des biodisques</div>
    <div class="kv-grid">
      ${[['Diamètre disques','2–3,6 m (standard : 3 m)'],['Vitesse rotation','2–5 tr/min'],['Immersion','40 % du diamètre'],['Matériau disques','PE haute densité (PEHD) alvéolaire'],['Nombre étages','3–4 étages en série recommandés'],['Charge surfacique (carbone)','5–8 g DBO₅/m²/j'],['Charge surfacique (azote)','3–5 g DBO₅/m²/j (nitrification)']].map(function(r){return '<div class="kv-item"><div class="kv-key">'+r[0]+'</div><div class="kv-val">'+r[1]+'</div></div>';}).join('')}
    </div>
  </div></div>`;
}
function calcSTEPBiodisques() {
  var eh = _gv('bd-eh'), cs = _gv('bd-cs'), surfMod = _gv('bd-surf-mod');
  if (!eh || !cs || !surfMod) return;
  var dbo5Base = _stepGetDBO5Base();
  var dbo5j   = eh * dbo5Base / 1000;
  var surfTot = (dbo5j * 1000) / cs;
  var nbMod   = Math.ceil(surfTot / surfMod);
  _stepShow('res-bd', [
    ['Charge DBO₅/j', dbo5j.toFixed(1)+' kg/j'],
    ['Surface totale de disques', surfTot.toFixed(0)+' m²'],
    ['Nombre de modules', nbMod+' module(s)'],
    ['Surface installée', (nbMod*surfMod).toFixed(0)+' m² (réelle)'],
  ], 'Chaque module comprend 3–4 étages en série. Prévoir un décanteur secondaire en aval (va ≤ 1,5 m/h). Protéger des intempéries (hangar ou capot).', 'NF EN 12255-8 · Guide Cemagref 2003 · Metcalf & Eddy', '#5A189A');
}

/* ── Décanteur primaire / secondaire ── */
function renderCalcSTEPDecanteur() {
  document.getElementById('calc-content').innerHTML = `
  <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">⬇️ Décanteur primaire / secondaire — Dimensionnement</div>
    <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Le dimensionnement d'un décanteur repose sur la vitesse ascensionnelle (va) et la charge hydraulique surfacique. Décanteur primaire : élimination des MES grossières. Secondaire : clarification des boues activées ou des effluents de lit bactérien.</span></div>
    <div class="calc-zone">
      <div class="field">
        <label class="field-label">Type de décanteur</label>
        <select id="dec-type" style="width:100%;padding:10px 12px;border-radius:10px;border:1.5px solid var(--c-border);background:var(--c-surface-2);color:var(--c-text);font-size:var(--t-sm);font-family:var(--f-body)" onchange="calcSTEPDecanteur()">
          <option value="pri" data-va="1.5" data-vamax="2.5">⬇️ Décanteur primaire — va = 1,0–2,0 m/h</option>
          <option value="sec-fc" data-va="0.8" data-vamax="1.2">🔵 Décanteur secondaire faible charge — va = 0,5–1,0 m/h</option>
          <option value="sec-mc" data-va="1.2" data-vamax="1.8" selected>🔵 Décanteur secondaire moyenne charge — va = 1,0–1,5 m/h</option>
          <option value="sec-hc" data-va="1.8" data-vamax="2.5">🔵 Décanteur secondaire forte charge — va = 1,5–2,5 m/h</option>
          <option value="lam" data-va="8" data-vamax="12">🔲 Décanteur lamellaire — va apparente = 8–12 m/h</option>
        </select>
      </div>
      ${_stepField('dec-qh','Débit moyen horaire Qmoy','60','m³/h','= Débit journalier / 24','')}
      ${_stepField('dec-qp','Débit de pointe Qpointe','120','m³/h','Généralement 2 × Qmoy en réseau unitaire','')}
      ${_stepField('dec-va','Vitesse ascensionnelle va (temps sec)','1.2','m/h','Valeur de référence selon le type choisi','')}
      ${_stepField('dec-prof','Profondeur utile (zone décantation)','3.5','m','Décanteur circulaire : 3–5 m · Lamellaire : 2–3 m + modules','')}
      <button class="btn btn-primary" onclick="calcSTEPDecanteur()">Dimensionner</button>
      ${_stepResBox('res-dec')}
    </div>
  </div></div>
  <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
    <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📋 Valeurs de va de référence (NF EN 12255)</div>
    <div class="kv-grid">
      ${[['Décanteur primaire','1,0–2,0 m/h (ts) · 2,5 m/h max pointe'],['Secondaire faible charge','0,5–1,0 m/h · 1,5 m/h max pointe'],['Secondaire moy. charge','1,0–1,5 m/h · 2,0 m/h max pointe'],['Secondaire forte charge','1,5–2,5 m/h · 3,0 m/h max pointe'],['Décanteur lamellaire','8–12 m/h apparent (débit/surface projetée)'],['Rapport L/D (circulaire)','1,5–3 m/ml de périmètre'],['Racleur fond','Pente fond : 1/12 vers le puits central']].map(function(r){return '<div class="kv-item"><div class="kv-key">'+r[0]+'</div><div class="kv-val">'+r[1]+'</div></div>';}).join('')}
    </div>
  </div></div>`;
  var sel = document.getElementById('dec-type');
  var opt = sel.options[sel.selectedIndex];
  document.getElementById('dec-va').value = opt.getAttribute('data-va');
}
function calcSTEPDecanteur() {
  var sel  = document.getElementById('dec-type');
  if (!sel) return;
  var opt  = sel.options[sel.selectedIndex];
  var vamax = parseFloat(opt.getAttribute('data-vamax')) || 2;
  document.getElementById('dec-va').value = opt.getAttribute('data-va');
  var qh = _gv('dec-qh'), qp = _gv('dec-qp'), va = _gv('dec-va'), prof = _gv('dec-prof');
  if (!qh || !va || !prof) return;
  var surfTs  = qh / va;
  var surfQp  = qp / vamax;
  var surfFin = Math.max(surfTs, surfQp);
  var diam    = Math.sqrt(4 * surfFin / Math.PI);
  var vol     = surfFin * prof;
  var tsh     = vol / qh;
  _stepShow('res-dec', [
    ['Surface (temps sec, Qmoy)', surfTs.toFixed(1)+' m²'],
    ['Surface (pointe, Qp/vamax)', surfQp.toFixed(1)+' m²'],
    ['Surface retenue (critère le +strict)', surfFin.toFixed(1)+' m²'],
    ['Diamètre (décanteur circulaire)', diam.toFixed(2)+' m'],
    ['Volume utile', vol.toFixed(0)+' m³'],
    ['TSH à Qmoy', tsh.toFixed(2)+' h ('+( tsh*60).toFixed(0)+' min)'],
  ], 'Toujours vérifier aux deux débits (temps sec ET pointe). TSH min recommandé : 1h30 (décanteur primaire) · 2h (secondaire faible charge).', 'NF EN 12255-4 · Arrêté 21/07/2015 · Guide SATESE OIEau', '#0A5090');
}

function renderCalcMethodeRat() {
  document.getElementById('calc-content').innerHTML = `
    <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">⛈️ Méthode rationnelle — Débit de pointe EP</div>
      <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Valable pour S ≤ 2 km². Au-delà, utiliser une méthode pluie-débit (GR4J).</span></div>
      <div class="calc-zone">
        <div class="field">
          <label class="field-label">Coefficient de ruissellement C</label>
          <div class="field-tip">💡 Toiture : 0,90 · Bitume : 0,85 · Pelouse : 0,20 · Mixte urbain : 0,60</div>
          <div class="field-row"><input type="number" id="mr-c" value="0.6" step="0.05" min="0" max="1"><span class="field-unit">sans dim.</span></div>
        </div>
        <div class="field">
          <label class="field-label">Surface du bassin versant A</label>
          <div class="field-row"><input type="number" id="mr-a" value="5" step="0.5" min="0"><span class="field-unit">ha</span></div>
        </div>
        <div class="field">
          <label class="field-label">Intensité de la pluie i</label>
          <div class="field-hint">Intensité pour la durée = Tc et la période de retour choisie. Courbes IDF Météo-France.</div>
          <div class="field-tip">💡 T10 bassin parisien ≈ 25–35 mm/h pour Tc = 20–30 min</div>
          <div class="field-row"><input type="number" id="mr-i" value="25" step="1"><span class="field-unit">mm/h</span></div>
        </div>
        <button class="btn btn-primary" onclick="calcMethodeRatMain()">Calculer le débit de pointe</button>
        <div class="result-box" id="res-mr">
          <div class="result-value" id="rv-mr"></div>
          <div class="result-detail" id="rd-mr"></div>
          <div class="result-formula"><span>Q = <span class="mf"><span class="n">C · i · A</span><span class="d">360</span></span></span><span class="rf-sep">·</span><span style="opacity:0.7;font-size:0.9em">L/s, A en ha, i en mm/h</span></div>
          <div class="result-src">📖 Mulvaney T.J. (1851) · Instructions Techniques 1977 · CERTU</div>
        </div>
      </div>
    </div></div>`;
}

function calcMethodeRatMain() {
  if (!checkCalcLimit()) return;
  const C = parseFloat(getV('mr-c'))||0.6;
  const A = parseFloat(getV('mr-a'))||5;
  const i = parseFloat(getV('mr-i'))||25;
  const Q = (C*i*A/360).toFixed(2);
  const res = document.getElementById('res-mr'); res.classList.add('show');
  res.style.borderLeftColor='var(--c-ok)';
  document.getElementById('rv-mr').textContent=`Q_pointe = ${Q} L/s = ${(parseFloat(Q)/1000*3600).toFixed(3)} m³/s`;
  document.getElementById('rd-mr').innerHTML=`• C = ${C} · i = ${i} mm/h · A = ${A} ha<br>• Q = ${C} × ${i} × ${A} / 360 = ${Q} L/s<br>• Collecteur à prévoir : DN ≥ ${Math.ceil(1000*Math.sqrt(parseFloat(Q)/1000/(90*Math.pow(0.075,2/3)*Math.pow(0.005,0.5))*4/Math.PI)*2)*50} mm indicatif`;
}

function renderCalcCharges() {
  document.getElementById('calc-content').innerHTML = `
    <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">💧 Charges polluantes — Calcul par EH</div>
      <div class="calc-zone">
        <div class="field">
          <label class="field-label">Équivalents-habitants</label>
          <div class="field-row"><input type="number" id="ch-eh" value="5" min="1" step="1"><span class="field-unit">EH</span></div>
        </div>
        <div class="field">
          <label class="field-label">Personnes réelles</label>
          <div class="field-hint">Pour recalculer avec la charge réelle (peut différer des EH réglementaires).</div>
          <div class="field-row"><input type="number" id="ch-pers" value="4" min="1" step="1"><span class="field-unit">pers.</span></div>
        </div>
        <button class="btn btn-primary" onclick="calcChargesMain()">Calculer les charges</button>
        <div id="res-ch-wrap" style="display:none;display:flex;flex-direction:column;gap:var(--s-3);margin-top:var(--s-3)">
          <div id="res-ch-min"  style="display:none;background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3);border-left:3px solid var(--c-border)"></div>
          <div id="res-ch-reco" style="display:none;background:var(--c-surface-2);border-radius:var(--r-md);padding:var(--s-3);border-left:3px solid #16A34A"></div>
          <div style="font-size:10px;color:var(--c-text-4);line-height:1.5">DCO = DBO₅ × 2,25 · MES = DBO₅ × 1,5 · Coefficients moyens eaux usées domestiques<br>📖 Arrêté 22/06/2007 · Directive ERU 91/271/CEE · DTU 64.1 2018</div>
        </div>
      </div>
    </div></div>
    <div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📐 Référence 1 EH</div>
      <div class="kv-grid">
        ${[['DBO₅','60 g/j'],['DCO','135 g/j'],['MES','90 g/j'],['NTK (azote)','15 g/j'],['Pt (phosphore)','4 g/j'],['Volume EU','150 L/j']].map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}
      </div>
    </div></div>`;
}

function calcChargesMain() {
  if (!checkCalcLimit()) return;
  var eh   = parseInt(getV('ch-eh'))  || 5;
  var pers = parseInt(getV('ch-pers')) || 4;

  function chargesBlock(containerId, dbo, vol, label, sublabel, color) {
    var el = document.getElementById(containerId);
    if (!el) return;
    el.style.display = 'block';
    el.innerHTML =
      '<div style="font-size:12px;font-weight:800;color:'+color+';margin-bottom:6px">'+label+'</div>'
      + '<div style="font-size:10px;color:var(--c-text-4);margin-bottom:8px">'+sublabel+'</div>'
      + '<div style="font-size:13px;font-weight:700;color:var(--c-text);margin-bottom:6px">DBO₅ = '+(eh*dbo)+' g/j · Vol = '+(eh*vol)+' L/j</div>'
      + '<div style="font-size:var(--t-sm);color:var(--c-text-2);line-height:1.8">'
        + '• <strong>DBO₅ :</strong> '+(eh*dbo)+' g/j · DCO : '+(eh*Math.round(dbo*2.25))+' g/j · MES : '+(eh*Math.round(dbo*1.5))+' g/j<br>'
        + '• <strong>NTK :</strong> '+(eh*15)+' g/j · Pt : '+(eh*4)+' g/j · Volume : '+(eh*vol)+' L/j'
        + (pers !== eh ? '<br>• Charge réelle ('+pers+' pers.) : DBO₅ = '+(pers*dbo)+' g/j · Vol = '+(pers*vol)+' L/j' : '')
      + '</div>';
  }

  var wrap = document.getElementById('res-ch-wrap');
  if (!wrap) return;
  wrap.style.display = 'block';
  wrap.classList.add('result-box', 'show');
  chargesBlock('res-ch-min',  60,  150, '📋 Minimum réglementaire', 'Arrêté 22/06/2007 · Directive ERU 91/271/CEE · 60 g DBO₅/EH/j · 150 L/EH/j', 'var(--c-text-4)');
  chargesBlock('res-ch-reco', 70,  200, '✅ Recommandé SATESE / Bureau d\'études', 'DTU 64.1 (2018) · Pratique courante STEP · 70 g DBO₅/EH/j · 200 L/EH/j — marge de sécurité dimensionnement', '#15803D');
}

function renderCalcPression(){
  document.getElementById('calc-content').innerHTML=`
    <div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">💧 Hazen-Williams — Perte de charge AEP</div>
      <div class="calc-zone">
        <div class="field">
          <label class="field-label">Débit Q</label>
          <div class="field-row"><input type="number" id="hw-q" value="10" step="0.5"><span class="field-unit">L/s</span></div>
        </div>
        <div class="field">
          <label class="field-label">Diamètre intérieur D</label>
          <div class="field-row"><input type="number" id="hw-d" value="150" step="10"><span class="field-unit">mm</span></div>
        </div>
        <div class="field">
          <label class="field-label">Coefficient C (Hazen-Williams)</label>
          <div class="field-tip">💡 PEHD : 140–150 · Fonte neuve : 130 · Fonte vieillie : 80–100</div>
          <div class="field-row"><input type="number" id="hw-c" value="130" step="5"><span class="field-unit">sans dim.</span></div>
        </div>
        <div class="field">
          <label class="field-label">Longueur du tronçon</label>
          <div class="field-row"><input type="number" id="hw-l" value="200" step="10"><span class="field-unit">m</span></div>
        </div>
        <button class="btn btn-primary" onclick="calcHWMain()">Calculer la perte de charge</button>
        <div class="result-box" id="res-hw">
          <div class="result-value" id="rv-hw"></div>
          <div class="result-detail" id="rd-hw"></div>
          <div class="result-formula"><span>V = 0,8492 · C · R<sup>0,63</sup> · S<sup>0,54</sup></span><span class="rf-sep">·</span><span>S = <span class="mf"><span class="n">h<sub>f</sub></span><span class="d">L</span></span></span><span class="rf-sep">·</span><span>R = <span class="mf"><span class="n">D</span><span class="d">4</span></span></span></div>
          <div class="result-src">📖 Hazen & Williams (1905) · CCTG Fascicule 71</div>
        </div>
      </div>
    </div></div>`;
}

function calcHWMain() {
  if (!checkCalcLimit()) return;
  const q=parseFloat(getV('hw-q'))||10;
  const d=parseFloat(getV('hw-d'))/1000||0.15;
  const C=parseFloat(getV('hw-c'))||130;
  const L=parseFloat(getV('hw-l'))||200;
  const A=Math.PI*d*d/4, V=q/1000/A;
  const R=d/4;
  const S=Math.pow(V/(0.8492*C*Math.pow(R,0.63)),1/0.54);
  const hf=S*L;
  const res=document.getElementById('res-hw'); res.classList.add('show');
  res.style.borderLeftColor=V<=2?'var(--c-ok)':'var(--c-warn)';
  document.getElementById('rv-hw').textContent=`hf = ${hf.toFixed(2)} m · V = ${V.toFixed(3)} m/s`;
  document.getElementById('rd-hw').innerHTML=`• Q = ${q} L/s · DN = ${d*1000} mm · C = ${C}<br>• V = ${V.toFixed(3)} m/s · Gradient S = ${(S*1000).toFixed(2)}‰<br>• Perte de charge = ${hf.toFixed(2)} m sur ${L} m<br>${V>2?'⚠ V > 2 m/s : risque de coups de bélier · Augmenter le diamètre':'✓ Vitesse dans la plage recommandée AEP (0,5–2 m/s)'}`;
}

/* ─── RENDER ANC ─── */
const ANC_TAB_LBLS = ['Filières','Comparateur','Prétraitement','Collecte','Rejet','Ventilation'];

function renderANC() {
  loadModuleTabs(ANC_TAB_LBLS, 'switchANCTab');
  document.getElementById('main-content').innerHTML =
    '<div id="anc-content"></div><div class="pb-nav"></div>';
  renderANCFilieres();
}

function switchANCTab(idx) {
  setTabActive('module-tabs', idx);
  var titles = ['ANC — Filières','ANC — Comparateur','ANC — Prétraitement','ANC — Collecte','ANC — Rejet','ANC — Ventilation'];
  var t = document.getElementById('top-title');
  if (t) t.textContent = titles[idx] || 'ANC';
  if      (idx === 0) renderANCFilieres();
  else if (idx === 1) renderANCComparateur();
  else if (idx === 2) renderANCPretraitement();
  else if (idx === 3) renderANCCollecte();
  else if (idx === 4) renderANCRejet();
  else if (idx === 5) renderANCVentilation();
  scrollToTop();
}

const FICHES_FILIERES = [
  {ico:'🌾',name:'Tranchées d\'épandage',sub:'K = 1–15 mm/min · Sol perméable',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Perméabilité':'K = 1–15 mm/min','Profondeur':'0,6–0,7 m recouvrement','Drain':'PVC Ø 100 mm perforé','Pente drain':'Max 0,5%','K Strickler':'90–100','Norme':'DTU 64.1 · Arrêté 07/09/2009'}},
  {ico:'🟡',name:'Filtre à sable non drainé',sub:'Sol perméabilité moyenne · Infiltration totale',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Perméabilité':'K > 1 mm/min','Épaisseur sable':'0,7 m minimum','Granulométrie sable':'0,25–2 mm (lavé)','Charge hydro.':'0,08 m/j','Surface':'EH × 150 / (0,08 × 1 000)','Norme':'DTU 64.1'}},
  {ico:'🟠',name:'Filtre à sable drainé',sub:'Sol imperméable · Rejet en fossé',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Perméabilité':'K < 1 mm/min','Drain collecte':'Ø 100 mm pente 0,5%','Rejet':'Fossé pluvial ou milieu','Charge hydro.':'0,10 m/j','Autorisation':'Propriétaire fossé','Norme':'DTU 64.1'}},
  {ico:'⛰️',name:'Tertre d\'infiltration',sub:'Nappe affleurante · Filière surélevée',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Hauteur surélevée':'0,5–1,5 m au-dessus sol','Distance nappe':'≥ 0,7 m (fond filière)','Charge hydro.':'0,12 m/j','Matériau':'Sable 0,25–2 mm importé','Norme':'DTU 64.1 art. 8'}},
  {ico:'⚙️',name:'Microstation d\'épuration',sub:'Agréée CE · NF EN 12566-3 · Tous sols',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Norme':'NF EN 12566-3','Capacité':'4–20 EH','Rendement DBO₅':'> 90%','Électricité':'150–300 kWh/an','Contrat entretien':'Obligatoire annuel','Durée vie':'15–25 ans'}},
  {ico:'🌾',name:'FPR Vertical (phytoépuration)',sub:'Phytoépuration à flux vertical · Agréé CE',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Charge surfacique':'5 m²/EH (mono-étage)','Granulat':'Gravier 2–8 mm surface','Alimentation':'Bâchées séquentielles','Roseaux':'Phragmites australis','Norme':'NF EN 12566-3','Durée vie':'> 30 ans'}},
];

function renderANCFilieres() {
  document.getElementById('anc-content').innerHTML = `
    <div class="search-container" style="padding-top:var(--s-2)"><div class="search-bar"><span class="search-ico">🔍</span><input type="text" id="anc-filiere-search" placeholder="Rechercher une filière…" oninput="filterANCFilieres(this.value)"></div></div>
    <div class="section-header" id="anc-filiere-header">Filières de traitement<span class="sh-count">${FICHES_FILIERES.length} fiches</span></div>
    <div id="anc-filiere-list" style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${FICHES_FILIERES.map((f,i)=>`
      <div class="fiche-card" style="--cat-color:${f.color}" id="ff-${i}">
        <div class="fiche-stripe" style="background:${f.color}"></div>
        <div class="fiche-head" onclick="toggleFicheANC('ff',${i})">
          <div class="fiche-icon" style="background:${f.colorl}">${f.ico}</div>
          <div style="flex:1"><div class="fiche-name">${f.name}</div><div class="fiche-sub">${f.sub}</div></div>
          <span class="fiche-arrow" id="ff-a-${i}">›</span>
        </div>
        <div class="fiche-body" id="ff-b-${i}">
          <div class="kv-grid">${Object.entries(f.specs).map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}</div>
          <span class="src-pill">📖 DTU 64.1 · Arrêté 07/09/2009</span>
        </div>
      </div>`).join('')}
    </div>`;
}


function filterANCFilieres(q) {
  var ql = (q || '').toLowerCase().trim();
  var list = document.getElementById('anc-filiere-list');
  var header = document.getElementById('anc-filiere-header');
  if (!list) return;
  var filtered = ql ? FICHES_FILIERES.filter(function(f) {
    return (f.name + ' ' + f.sub + ' ' + Object.values(f.specs).join(' ')).toLowerCase().indexOf(ql) >= 0;
  }) : FICHES_FILIERES;
  if (header) header.innerHTML = 'Filières de traitement<span class="sh-count">' + filtered.length + ' fiche' + (filtered.length > 1 ? 's' : '') + '</span>';
  list.innerHTML = filtered.length ? filtered.map(function(f) {
    var i = FICHES_FILIERES.indexOf(f);
    return '<div class="fiche-card" style="--cat-color:' + f.color + '" id="ff-' + i + '">'
      + '<div class="fiche-stripe" style="background:' + f.color + '"></div>'
      + '<div class="fiche-head" onclick="toggleFicheANC(\'ff\',' + i + ')">'
        + '<div class="fiche-icon" style="background:' + f.colorl + '">' + f.ico + '</div>'
        + '<div style="flex:1"><div class="fiche-name">' + f.name + '</div><div class="fiche-sub">' + f.sub + '</div></div>'
        + '<span class="fiche-arrow" id="ff-a-' + i + '">›</span>'
      + '</div>'
      + '<div class="fiche-body" id="ff-b-' + i + '">'
        + '<div class="kv-grid">' + Object.entries(f.specs).map(function(e) { return '<div class="kv-item"><div class="kv-key">' + e[0] + '</div><div class="kv-val">' + e[1] + '</div></div>'; }).join('') + '</div>'
        + '<span class="src-pill">📖 DTU 64.1 · Arrêté 07/09/2009</span>'
      + '</div></div>';
  }).join('') : '<div style="text-align:center;padding:30px;color:var(--c-text-3)">Aucune filière trouvée</div>';
}

/* ─── COMPARATEUR DE FILIÈRES ANC ─── */
var ANC_FILIERES_DATA = [
  { nom:'Tranchées d\'épandage', ico:'🌾',
    sol:['permeable'], surface:'200–400 m²', surfaceVal:30, cout:'4 000–7 000 €', coutVal:5500,
    entretien:'Vidange FTE /4 ans', entretienVal:100, elec:'Aucune', elecVal:0,
    charge:'Bonne (sol tampon)', paysage:'Invisible (enterré)', agrement:'DTU 64.1',
    avantages:'Aucune énergie · Pas d\'entretien mécanique · Économique',
    inconvenients:'Grande surface · Sol perméable requis · Pas de rejet contrôlé' },
  { nom:'Filtre à sable non drainé', ico:'🟡',
    sol:['permeable','moyen'], surface:'25–30 m²', surfaceVal:5, cout:'6 000–9 000 €', coutVal:7500,
    entretien:'Vidange FTE /4 ans', entretienVal:100, elec:'Aucune', elecVal:0,
    charge:'Bonne', paysage:'Invisible (enterré)', agrement:'DTU 64.1',
    avantages:'Compact · Aucune énergie · Robuste',
    inconvenients:'Sable de qualité requis · Colmatage possible à long terme' },
  { nom:'Filtre à sable drainé', ico:'🟠',
    sol:['impermeable'], surface:'25–30 m²', surfaceVal:5, cout:'7 000–10 000 €', coutVal:8500,
    entretien:'Vidange FTE /4 ans', entretienVal:100, elec:'Aucune', elecVal:0,
    charge:'Bonne', paysage:'Invisible (enterré)', agrement:'DTU 64.1',
    avantages:'Adapté sol imperméable · Aucune énergie',
    inconvenients:'Nécessite exutoire (fossé) + autorisation · Sable de qualité' },
  { nom:'Tertre d\'infiltration', ico:'⛰️',
    sol:['nappe','impermeable'], surface:'30–60 m²', surfaceVal:8, cout:'8 000–12 000 €', coutVal:10000,
    entretien:'Vidange FTE /4 ans', entretienVal:100, elec:'Aucune', elecVal:0,
    charge:'Bonne', paysage:'Butte visible', agrement:'DTU 64.1',
    avantages:'Adapté nappe haute · Aucune énergie',
    inconvenients:'Emprise importante · Butte visible · Sable importé coûteux' },
  { nom:'Microstation boues activées', ico:'⚙️',
    sol:['permeable','moyen','impermeable','nappe'], surface:'5–10 m²', surfaceVal:2, cout:'6 500–10 000 €', coutVal:8000,
    entretien:'Contrat annuel + vidange', entretienVal:300, elec:'150–300 kWh/an', elecVal:250,
    charge:'Sensible aux à-coups', paysage:'Invisible (regard)', agrement:'NF EN 12566-3',
    avantages:'Très compact · Tous sols · Bon rendement',
    inconvenients:'Électricité · Contrat entretien obligatoire · Sensible résidence secondaire' },
  { nom:'Microstation culture fixée', ico:'🔧',
    sol:['permeable','moyen','impermeable','nappe'], surface:'5–10 m²', surfaceVal:2, cout:'7 000–11 000 €', coutVal:9000,
    entretien:'Contrat annuel + vidange', entretienVal:300, elec:'100–250 kWh/an', elecVal:180,
    charge:'Plus robuste que boues activées', paysage:'Invisible (regard)', agrement:'NF EN 12566-3',
    avantages:'Compact · Tous sols · Plus tolérant aux variations',
    inconvenients:'Électricité · Contrat entretien obligatoire' },
  { nom:'Filtre compact (coco/zéolite)', ico:'🥥',
    sol:['permeable','moyen','impermeable','nappe'], surface:'10–18 m²', surfaceVal:3, cout:'8 000–13 000 €', coutVal:10500,
    entretien:'Remplacement média 10–15 ans', entretienVal:150, elec:'Aucune (gravitaire)', elecVal:0,
    charge:'Très bonne', paysage:'Invisible (enterré)', agrement:'NF EN 12566-3',
    avantages:'Pas d\'électricité · Compact · Robuste aux à-coups',
    inconvenients:'Remplacement périodique du média filtrant · Coût initial' },
  { nom:'Filtre planté de roseaux', ico:'🌱',
    sol:['permeable','moyen','impermeable','nappe'], surface:'30–50 m²', surfaceVal:6, cout:'8 000–14 000 €', coutVal:11000,
    entretien:'Faucardage annuel · Curage 10–15 ans', entretienVal:80, elec:'Aucune (gravitaire)', elecVal:0,
    charge:'Excellente (forte inertie)', paysage:'Végétalisé (esthétique)', agrement:'NF EN 12566-3',
    avantages:'Aucune énergie · Très robuste aux à-coups · Écologique · Faible entretien',
    inconvenients:'Grande surface · Faucardage annuel · Coût initial' },
];

var ancFiltreSol = 'tous';
var ancFiltreUsage = 'tous';

function renderANCComparateur() {
  var html = '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div class="card card-p">'
    + '<div style="font-family:var(--f-display);font-size:var(--t-lg);margin-bottom:4px">Comparateur de filières ANC</div>'
    + '<div style="font-size:12px;color:var(--c-text-3);line-height:1.6;margin-bottom:var(--s-3)">Sélectionnez votre contexte pour voir les filières adaptées et les comparer.</div>'
    + '<div style="font-size:11px;font-weight:700;margin-bottom:6px">Type de sol</div>'
    + '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:var(--s-3)">'
    + ancSolBtn('tous','Tous') + ancSolBtn('permeable','Perméable') + ancSolBtn('moyen','Moyen') + ancSolBtn('impermeable','Imperméable') + ancSolBtn('nappe','Nappe haute')
    + '</div>'
    + '<div style="font-size:11px;font-weight:700;margin-bottom:6px">Usage</div>'
    + '<div style="display:flex;flex-wrap:wrap;gap:6px">'
    + ancUsageBtn('tous','Tous') + ancUsageBtn('principale','Résidence principale') + ancUsageBtn('secondaire','Résidence secondaire')
    + '</div>'
    + '</div></div>'
    + '<div id="anc-comp-results"></div>';
  document.getElementById('anc-content').innerHTML = html;
  renderANCCompResults();
}

function ancSolBtn(val, lbl) {
  var active = ancFiltreSol === val;
  return '<button onclick="setAncSol(\'' + val + '\')" style="padding:6px 12px;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--f-body);border:1.5px solid ' + (active?'var(--c-anc)':'var(--c-border)') + ';background:' + (active?'var(--c-anc)':'var(--c-surface)') + ';color:' + (active?'#fff':'var(--c-text-3)') + '">' + lbl + '</button>';
}
function ancUsageBtn(val, lbl) {
  var active = ancFiltreUsage === val;
  return '<button onclick="setAncUsage(\'' + val + '\')" style="padding:6px 12px;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--f-body);border:1.5px solid ' + (active?'var(--c-anc)':'var(--c-border)') + ';background:' + (active?'var(--c-anc)':'var(--c-surface)') + ';color:' + (active?'#fff':'var(--c-text-3)') + '">' + lbl + '</button>';
}
function setAncSol(v) { ancFiltreSol = v; renderANCComparateur(); }
function setAncUsage(v) { ancFiltreUsage = v; renderANCComparateur(); }

function renderANCCompResults() {
  var list = ANC_FILIERES_DATA.filter(function(f) {
    if (ancFiltreSol !== 'tous' && f.sol.indexOf(ancFiltreSol) < 0) return false;
    // Résidence secondaire : exclure les filières sensibles aux à-coups (boues activées)
    if (ancFiltreUsage === 'secondaire' && f.charge.indexOf('Sensible') === 0) return false;
    return true;
  });

  var html = '<div class="section-header">' + list.length + ' filière(s) adaptée(s)</div>'
    + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';

  if (!list.length) {
    html += '<div style="text-align:center;padding:30px;color:var(--c-text-4);font-size:12px">Aucune filière ne correspond à ces critères. Élargissez la sélection.</div>';
  } else {
    list.forEach(function(f, i) {
      html += '<div class="card" style="padding:var(--s-3) var(--s-4)">'
        + '<div style="display:flex;align-items:center;gap:var(--s-3);margin-bottom:var(--s-2)">'
        + '<div style="font-size:24px">' + f.ico + '</div>'
        + '<div style="flex:1"><div style="font-size:14px;font-weight:700">' + f.nom + '</div>'
        + '<div style="font-size:11px;color:var(--c-text-3)">' + f.agrement + '</div></div></div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:var(--s-2)">'
        + ancCompCell('📐 Surface', f.surface)
        + ancCompCell('💶 Coût', f.cout)
        + ancCompCell('🔧 Entretien', f.entretien)
        + ancCompCell('⚡ Électricité', f.elec)
        + ancCompCell('📊 Résistance à-coups', f.charge)
        + ancCompCell('🏞️ Paysage', f.paysage)
        + '</div>'
        + '<div style="background:var(--c-ok-l);border-radius:var(--r-sm);padding:7px 10px;margin-bottom:5px;font-size:11px;color:var(--c-ok);line-height:1.5"><strong>+ Avantages :</strong> ' + f.avantages + '</div>'
        + '<div style="background:var(--c-danger-l);border-radius:var(--r-sm);padding:7px 10px;font-size:11px;color:var(--c-danger);line-height:1.5"><strong>− Limites :</strong> ' + f.inconvenients + '</div>'
        + '</div>';
    });
  }
  html += '</div>';

  // Tableau de synthèse comparatif
  if (list.length > 1) {
    html += '<div class="section-header" style="padding-top:var(--s-4)">Synthèse comparative</div>'
      + '<div style="padding:0 var(--s-4)"><div style="overflow-x:auto;border:1px solid var(--c-border);border-radius:var(--r-lg)">'
      + '<table style="width:100%;border-collapse:collapse;font-size:11px;min-width:420px">'
      + '<thead><tr style="background:var(--c-anc);color:#fff">'
      + '<th style="padding:8px;text-align:left">Filière</th><th style="padding:8px">Surface</th><th style="padding:8px">Coût moy.</th><th style="padding:8px">Élec.</th></tr></thead><tbody>';
    list.forEach(function(f, i) {
      html += '<tr style="border-top:1px solid var(--c-border);background:' + (i%2?'var(--c-surface-2)':'var(--c-surface)') + '">'
        + '<td style="padding:8px;font-weight:600">' + f.ico + ' ' + f.nom + '</td>'
        + '<td style="padding:8px;text-align:center">' + f.surface + '</td>'
        + '<td style="padding:8px;text-align:center">' + (f.coutVal/1000).toFixed(1) + ' k€</td>'
        + '<td style="padding:8px;text-align:center">' + (f.elecVal ? f.elecVal + ' kWh' : '—') + '</td></tr>';
    });
    html += '</tbody></table></div>'
      + '<div style="font-size:10px;color:var(--c-text-4);margin-top:6px;line-height:1.5">Coûts indicatifs installation (hors terrassement spécifique). Sources : DTU 64.1, retours SPANC, ADEME.</div></div>';
  }

  document.getElementById('anc-comp-results').innerHTML = html;
}

function ancCompCell(label, value) {
  return '<div style="background:var(--c-surface-2);border-radius:var(--r-sm);padding:6px 8px">'
    + '<div style="font-size:9px;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.03em;font-weight:700">' + label + '</div>'
    + '<div style="font-size:11px;font-weight:600;margin-top:1px">' + value + '</div></div>';
}

function renderANCPretraitement() {
  var items = [
    {ico:'🪣',name:'Fosse toutes eaux (FTE)',sub:'Prétraitement obligatoire · Toutes eaux usées',specs:{'Volume min ≤5 pp':'3 000 L','Au-delà':'+ 1 000 L/pp','Matériaux':'Béton · PEHD · Fibre de verre','Vidange':'Min. tous les 4 ans','Norme':'DTU 64.1 · Arrêté 07/09/2009'}},
    {ico:'🫙',name:'Bac dégraisseur',sub:'Interception des graisses cuisine · Obligatoire si cuisine > 10 m',specs:{'Volume':'50–200 L','Norme':'NF EN 1825','Entretien':'Curage 2×/an minimum','Matériau':'PEHD ou béton','Obligation':'Cuisine > 10 m de la FTE ou cuisine pro'}},
    {ico:'🔲',name:'Préfiltre sortie de fosse',sub:'Filtration mécanique · Protection de la filière',specs:{'Types':'Grille inox · Géotextile · Pouzzolane','Maille':'3–5 mm','Entretien':'Nettoyage annuel au jet','Durée vie':'10–20 ans','Norme':'DTU 64.1'}},
  ];
  document.getElementById('anc-content').innerHTML = `
    <div class="section-header" style="padding-top:var(--s-3)">Ouvrages de prétraitement<span class="sh-count">${items.length}</span></div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${items.map((f,i)=>`
      <div class="fiche-card" style="--cat-color:var(--c-ep)" id="fp-${i}">
        <div class="fiche-stripe" style="background:var(--c-ep)"></div>
        <div class="fiche-head" onclick="toggleFicheANC('fp',${i})">
          <div class="fiche-icon" style="background:var(--c-ep-l)">${f.ico}</div>
          <div style="flex:1"><div class="fiche-name">${f.name}</div><div class="fiche-sub">${f.sub}</div></div>
          <span class="fiche-arrow" id="fp-a-${i}">›</span>
        </div>
        <div class="fiche-body" id="fp-b-${i}">
          <div class="kv-grid">${Object.entries(f.specs).map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}</div>
        </div>
      </div>`).join('')}
    </div>
    <div style="padding:0 var(--s-4) var(--s-3)"><div class="card card-p">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🧮 Volume FTE réglementaire</div>
      <div class="calc-zone">
        <div class="field"><label class="field-label">Pièces principales</label><div class="field-row"><input type="number" id="fte-pp2" value="4" min="1" step="1"><span class="field-unit">pp</span></div></div>
        <div class="field"><label class="field-label">Occupants réels</label><div class="field-row"><input type="number" id="fte-pers2" value="4" min="1" step="1"><span class="field-unit">pers.</span></div></div>
        <button class="btn btn-primary" onclick="calcFTEAnc()">Calculer</button>
        <div class="result-box" id="res-fte-anc">
          <div class="result-value" id="rv-fte-anc"></div>
          <div class="result-detail" id="rd-fte-anc"></div>
          <div class="result-formula"><span>V = 3 000 L &nbsp;si pp ≤ 5</span><span class="rf-sep">·</span><span>+1 000 L/pp au-delà</span></div>
          <div class="result-src">📖 Arrêté 07/09/2009 art. 6 · DTU 64.1</div>
        </div>
      </div>
    </div></div>`;
}

function calcFTEAnc() {
  if (!checkCalcLimit()) return;
  const pp=parseInt(getV('fte-pp2'))||4;
  const pers=parseInt(getV('fte-pers2'))||4;
  const v=pp<=5?3000:3000+(pp-5)*1000;
  const b=pers*30;
  const r=document.getElementById('res-fte-anc'); r.classList.add('show');
  r.style.borderLeftColor='var(--c-ok)';
  document.getElementById('rv-fte-anc').textContent=`${v.toLocaleString()} L = ${(v/1000).toFixed(1)} m³`;
  document.getElementById('rd-fte-anc').innerHTML=`• PP = ${pp} · EH régl. = ${pp+1}<br>• Boues ≈ ${b} L/an → Vidange tous les ~${Math.floor(v*0.5/b)} ans`;
}

function renderANCCollecte() {
  document.getElementById('anc-content').innerHTML = `
    <div class="section-header" style="padding-top:var(--s-3)">Collecte & distribution</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'🔵',name:'Regard de départ',sub:'Premier ouvrage de collecte, sortie de l\'habitation',specs:{'Matériau':'PVC Ø 300–400 mm','Pente canalisation':'Min. 2% vers FTE','Norme':'NF EN 476 · DTU 64.1'}},
        {ico:'🔀',name:'Regard de répartition',sub:'Distribution équilibrée entre branches de drains',specs:{'Fond':'Plan (répartition par débordement)','Branches max':'6 branches maximum','Norme':'DTU 64.1'}},
        {ico:'⬆️',name:'Poste de relevage',sub:'Pompage si topographie défavorable',specs:{'Débit pompe':'0,5–5 m³/h','HMT typique':'2–8 m','Redondance':'2 pompes recommandées','Alarme':'Niveau haut obligatoire','Norme':'NF EN 12050'}},
      ].map((f,i)=>`
      <div class="fiche-card" style="--cat-color:var(--c-ac)" id="fc2-${i}">
        <div class="fiche-stripe" style="background:var(--c-ac)"></div>
        <div class="fiche-head" onclick="toggleFicheANC('fc2',${i})">
          <div class="fiche-icon" style="background:var(--c-ac-l)">${f.ico}</div>
          <div style="flex:1"><div class="fiche-name">${f.name}</div><div class="fiche-sub">${f.sub}</div></div>
          <span class="fiche-arrow" id="fc2-a-${i}">›</span>
        </div>
        <div class="fiche-body" id="fc2-b-${i}">
          <div class="kv-grid">${Object.entries(f.specs).map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}</div>
        </div>
      </div>`).join('')}
    </div>`;
}

function renderANCRejet() {
  document.getElementById('anc-content').innerHTML = `
    <div class="section-header" style="padding-top:var(--s-3)">Rejet & exutoire</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'💧',name:'Drain de collecte',sub:'Collecte des eaux traitées en fond de filière drainée',specs:{'Matériau':'PVC Ø 100 mm perforé','Pente':'0,5–1%','Enrobage':'Graviers 20/40 mm','Norme':'DTU 64.1'}},
        {ico:'🔵',name:'Regard de rejet',sub:'Point de contrôle de conformité en sortie de filière',specs:{'Accès':'Obligatoire pour prélèvement SPANC','Norme':'Arrêté 27/04/2012 · Arrêté 07/09/2009'}},
        {ico:'🌊',name:'Fossé d\'infiltration / exutoire',sub:'Rejet final des eaux traitées au milieu',specs:{'Longueur':'10–30 m selon débit','Autorisation':'Propriétaire fossé requise','Distance puits':'Min. 35 m','Norme':'Arrêté 07/09/2009 · Code envt'}},
      ].map((f,i)=>`
      <div class="fiche-card" style="--cat-color:var(--c-anc)" id="fr2-${i}">
        <div class="fiche-stripe" style="background:var(--c-anc)"></div>
        <div class="fiche-head" onclick="toggleFicheANC('fr2',${i})">
          <div class="fiche-icon" style="background:var(--c-anc-l)">${f.ico}</div>
          <div style="flex:1"><div class="fiche-name">${f.name}</div><div class="fiche-sub">${f.sub}</div></div>
          <span class="fiche-arrow" id="fr2-a-${i}">›</span>
        </div>
        <div class="fiche-body" id="fr2-b-${i}">
          <div class="kv-grid">${Object.entries(f.specs).map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}</div>
        </div>
      </div>`).join('')}
    </div>`;
}

function renderANCVentilation() {
  document.getElementById('anc-content').innerHTML = `
    <div class="section-header" style="padding-top:var(--s-3)">Ventilation</div>
    <div style="padding:0 var(--s-4)">
      <div class="alert danger" style="margin-bottom:var(--s-2)"><span class="alert-icon">⚠️</span><span>La <strong>ventilation primaire est OBLIGATOIRE</strong> pour toute installation ANC. Elle évacue les gaz de fermentation (H₂S, CH₄) et protège les siphons sanitaires du désamorçage.</span></div>
    </div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'💨',name:'Ventilation primaire',sub:'Prolongement chute → au-dessus du faîtage · OBLIGATOIRE',specs:{'Type':'Prolongement chute principale','Diamètre':'Ø 100 mm','Hauteur min':'0,40 m au-dessus faîtage','Distance ouvrants':'Min. 1 m des fenêtres','Chapeau':'Obligatoire (anti-pluie)','Norme':'DTU 60.11 · DTU 64.1'}},
        {ico:'🌬️',name:'Ventilation secondaire',sub:'Extraction directe depuis la fosse · Complémentaire',specs:{'Matériau':'PVC Ø 100 mm','Sortie':'Au-dessus du faîtage','Chapeau':'Ventilation obligatoire','Norme':'DTU 64.1'}},
        {ico:'🔃',name:'Regard d\'aération de filière',sub:'Oxygénation du massif filtrant par convection naturelle',specs:{'Position':'Extrémité aval des drains','Principe':'Convection naturelle (pas d\'énergie)','Avantage':'Maintient conditions aérobies','Norme':'DTU 64.1'}},
      ].map((f,i)=>`
      <div class="fiche-card" style="--cat-color:var(--c-riv)" id="fv-${i}">
        <div class="fiche-stripe" style="background:var(--c-riv)"></div>
        <div class="fiche-head" onclick="toggleFicheANC('fv',${i})">
          <div class="fiche-icon" style="background:var(--c-riv-l)">${f.ico}</div>
          <div style="flex:1"><div class="fiche-name">${f.name}</div><div class="fiche-sub">${f.sub}</div></div>
          <span class="fiche-arrow" id="fv-a-${i}">›</span>
        </div>
        <div class="fiche-body" id="fv-b-${i}">
          <div class="kv-grid">${Object.entries(f.specs).map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}</div>
        </div>
      </div>`).join('')}
    </div>`;
}

function toggleFicheANC(prefix, i) {
  var b = document.getElementById(prefix + '-b-' + i);
  var a = document.getElementById(prefix + '-a-' + i);
  if (!b) return;
  var open = b.classList.toggle('open');
  if (a) { a.style.transform = open ? 'rotate(90deg)' : ''; a.style.transition = 'transform .2s'; }
}

/* ═══ PASSES À POISSONS ═══ */
function renderPassesPoissons() {
  loadModuleTabs(['🐟 Types de passes', '📐 Calculateur'], 'switchPAPTab');
  document.getElementById('main-content').innerHTML =
    '<div id="pap-content"></div><div class="pb-nav"></div>';
  renderPAPTypes();
}

function switchPAPTab(idx) {
  setTabActive('module-tabs', idx);
  if      (idx === 0) renderPAPTypes();
  else if (idx === 1) renderPAPCalc();
  scrollToTop();
}

var PAP_TYPES = [
  {
    ico:'🪜', name:'Passe à bassins successifs', color:'var(--c-riv)', colorl:'var(--c-riv-l)',
    sub:'Type le plus répandu en France · Espèces cyprinicoles & salmonicoles',
    specs:{
      'Principe':"Bassins en cascade reliés par des échancrures ou déversoirs · Dissipation de l'énergie par turbulence",
      'Dénivelé/bassin':'0,10–0,30 m (salmonidés) · 0,10–0,20 m (cyprinidés)',
      'Débit unitaire':'0,02–0,10 m³/s selon largeur échancrure',
      'Vitesse eau':'< 1,5 m/s passage échancrure · < 0,5 m/s zone repos',
      'Dimensions bassin':'min. 2 m × 1,5 m × 1,0 m (petits cours d\'eau)',
      'Largeur échancrure':'0,30–0,50 m (salmonidés) · 0,20–0,40 m (cyprinidés)',
      'Espèces cibles':'Salmonidés · Cyprinidés · Anguilles · Aloses',
      'Norme':'Guide ICE 2014 · Arrêté du 11/09/2015'
    },
    avantages:['Robuste et peu sensible aux variations de débit','Facile d\'entretien','Adapté à de nombreuses espèces'],
    inconvenients:['Longueur importante pour forts dénivelés','Coût élevé sur grands ouvrages']
  },
  {
    ico:'⛵', name:'Passe à ralentisseurs (rampe rugueuse)', color:'var(--c-riv)', colorl:'var(--c-riv-l)',
    sub:'Rampe avec blocs et rugosités · Aspect naturel · Seuils faibles',
    specs:{
      'Principe':'Rampe à forte rugosité (blocs, gabions) imitant un radier naturel · Faible hauteur d\'eau',
      'Pente':'5–12% selon espèces et débit',
      'Épaisseur lame d\'eau':'0,20–0,40 m au-dessus des blocs',
      'Vitesse':'< 1,5 m/s entre les blocs (zones refuge 0,3–0,5 m/s)',
      'Granulométrie blocs':'Ø 0,5–1,0 m · Masse > 300 kg (stabilité)',
      'Usage':'Seuils faible hauteur < 2 m · Remplacement seuil naturel',
      'Espèces cibles':'Salmonidés principalement · Loche · Lamproie',
      'Norme':'Onema 2011 · Guide technique blocs'
    },
    avantages:['Aspect naturel intégré','Continuité sédimentaire possible','Efficace pour espèces rhéophiles'],
    inconvenients:['Peu efficace pour cyprinidés','Sensible à la végétation','Débit minimum permanent requis']
  },
  {
    ico:'💧', name:'Passe à fentes verticales', color:'var(--c-riv)', colorl:'var(--c-riv-l)',
    sub:'Haute performance · Tolérante aux variations de niveau aval',
    specs:{
      'Principe':'Cloisons avec fente verticale pleine hauteur · Fonctionnement indépendant du niveau aval',
      'Dénivelé/bassin':'0,10–0,20 m',
      'Largeur fente':'0,15–0,30 m selon espèces · min. 0,10 m',
      'Vitesse fente':'0,8–1,2 m/s (recommandé < 1,0 m/s pour cyprinidés)',
      'Débit':'0,015–0,05 m³/s par fente',
      'Dimensions bassin':'L ≥ 8 × largeur fente · l ≥ 2 × L',
      'Espèces cibles':'Toutes espèces · Particulièrement adaptée anguilles et lamproies',
      'Norme':'Guide ICE 2014 · Clay & Chaloner 1995'
    },
    avantages:['Très tolérant aux variations de niveau (±30 cm)','Efficace pour toutes espèces','Pas d\'envasement'],
    inconvenients:['Conception complexe','Coût supérieur aux bassins classiques']
  },
  {
    ico:'🔩', name:'Ascenseur à poissons', color:'var(--c-riv)', colorl:'var(--c-riv-l)',
    sub:'Solution mécanique · Grands barrages H > 10 m',
    specs:{
      'Principe':'Bac collecteur rempli d\'eau remonte mécaniquement (écluse ou élévateur à poissons)',
      'Hauteur franchissable':'Illimitée · Principalement H > 10 m',
      'Volume bac':'5–50 m³ selon espèces et effectifs',
      'Débit attrait':'0,5–3 m³/s',
      'Fréquence cycle':'1–4 fois/jour selon période de migration',
      'Espèces cibles':'Grands migrateurs (Saumon, Alose, Esturgeon) · Anguilles',
      'Exemples France':'Barrages de Strasbourg (Rhin) · Saint-Agne (Garonne)',
      'Contrainte':'Nécessite exploitation active et surveillance quotidienne'
    },
    avantages:['Seule solution viable pour très grands ouvrages','Efficace si bien géré'],
    inconvenients:['Coût exploitation élevé','Nécessite personnel dédié','Panne = blocage complet']
  },
  {
    ico:'🌿', name:'Rivière de contournement', color:'var(--c-riv)', colorl:'var(--c-riv-l)',
    sub:'Bras artificiel naturalisé · Solution la plus écologique',
    specs:{
      'Principe':'Canal ou bras naturalisé contournant le barrage · Restauration continuité complète',
      'Longueur':'Variable · Typiquement 5–50× hauteur à franchir',
      'Pente':'0,5–3% selon espèces et terrain',
      'Débit':'10–30% du module (min. 1/10e débit réservé)',
      'Profil en travers':'Trapézoïdal naturalisé · Berges végétalisées · Substrat diversifié',
      'Espèces cibles':'Toutes espèces · Idéal pour benthos et sédiments',
      'Coût':'Élevé mais fonctionnalité maximale',
      'Norme':'Arrêté du 11/09/2015 · DCE continuité écologique'
    },
    avantages:['Solution la plus complète (faune benthique + poissons + sédiments)','Entretien réduit','Fort gain biodiversité'],
    inconvenients:['Foncier disponible requis','Coût initial élevé','Entretien végétation régulier']
  },
  {
    ico:'🐍', name:'Passe à anguilles', color:'var(--c-riv)', colorl:'var(--c-riv-l)',
    sub:'Spécifique Anguilla anguilla · Rampe à substrat brsse ou gravier',
    specs:{
      'Principe':'Rampe à substrat (brosse, galets) permettant de ramper hors de l\'eau · Comportement benthique',
      'Pente':'30–50% (rampe courte) · 15–25% (longue)',
      'Largeur':'min. 0,20 m (recommandé 0,30 m)',
      'Substrat':'Brosses synthétiques Ø 15 mm · ou galets 10–30 mm',
      'Lame d\'eau':'2–5 mm sur substrat (humidification suffisante)',
      'Longueur max.':'6 m par tronçon (palier intermédiaire au-delà)',
      'Réglementation':'Plan national anguille 2010 · Règlement CE 1100/2007',
      'Obligation':'Tout ouvrage classé L1 en zone anguille'
    },
    avantages:['Spécifique et très efficace pour anguilles','Peu coûteux','Compact'],
    inconvenients:['Réservé aux anguilles uniquement','Entretien anti-colmatage fréquent']
  }
];

function renderPAPTypes() {
  var z = document.getElementById('pap-content');
  if (!z) return;
  var html = '<div style="padding:var(--s-2) var(--s-4) 0">'
    + '<div class="alert info"><span class="alert-icon">ℹ</span><span>6 types de dispositifs de franchissement réglementés en France · Obligation issue de la Loi sur l\'eau 2006 (L.214-17 Code env.) · Classement cours d\'eau liste 1 et 2.</span></div>'
    + '</div>'
    + '<div class="section-header">6 dispositifs de franchissement<span class="sh-count">6</span></div>'
    + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';

  PAP_TYPES.forEach(function(p, i) {
    html += '<div class="regl-card" style="border-left:3px solid ' + p.color + '">'
      + '<div onclick="togglePAP(' + i + ')" style="cursor:pointer;display:flex;align-items:flex-start;gap:var(--s-3);padding:var(--s-3) var(--s-4)">'
        + '<div class="rc-icon" style="background:' + p.colorl + ';font-size:22px;flex-shrink:0">' + p.ico + '</div>'
        + '<div style="flex:1;min-width:0">'
          + '<div class="rc-name">' + p.name + '</div>'
          + '<div class="rc-ref" style="margin-top:2px">' + p.sub + '</div>'
        + '</div>'
        + '<span id="pap-a-' + i + '" style="font-size:22px;color:var(--c-text-4);transition:transform .22s;line-height:1;font-weight:300;flex-shrink:0">&#x203A;</span>'
      + '</div>'
      + '<div id="pap-b-' + i + '" style="display:none;border-top:1px solid var(--c-border);padding:var(--s-3) var(--s-4)">'
        + '<div class="kv-grid">'
        + Object.entries(p.specs).map(function(kv) {
            return '<div class="kv-item"><div class="kv-key">' + kv[0] + '</div><div class="kv-val" style="font-size:11px">' + kv[1] + '</div></div>';
          }).join('')
        + '</div>'
        + '<div style="margin-top:var(--s-3);display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)">'
          + '<div style="background:var(--c-ok-l);border:1px solid var(--c-ok);border-radius:var(--r-md);padding:var(--s-2)">'
            + '<div style="font-size:10px;font-weight:800;color:var(--c-ok);text-transform:uppercase;margin-bottom:var(--s-1)">Avantages</div>'
            + p.avantages.map(function(a) { return '<div style="font-size:10px;color:var(--c-text-2);line-height:1.6">· ' + a + '</div>'; }).join('')
          + '</div>'
          + '<div style="background:var(--c-warn-l);border:1px solid var(--c-warn);border-radius:var(--r-md);padding:var(--s-2)">'
            + '<div style="font-size:10px;font-weight:800;color:var(--c-warn);text-transform:uppercase;margin-bottom:var(--s-1)">Limites</div>'
            + p.inconvenients.map(function(a) { return '<div style="font-size:10px;color:var(--c-text-2);line-height:1.6">· ' + a + '</div>'; }).join('')
          + '</div>'
        + '</div>'
      + '</div>'
    + '</div>';
  });

  html += '</div><div style="height:var(--s-4)"></div>';
  z.innerHTML = html;
}

function togglePAP(i) {
  var b = document.getElementById('pap-b-' + i);
  var a = document.getElementById('pap-a-' + i);
  if (!b) return;
  var open = b.style.display === 'block';
  b.style.display = open ? 'none' : 'block';
  if (a) a.style.transform = open ? '' : 'rotate(90deg)';
}

function renderPAPCalc() {
  var z = document.getElementById('pap-content');
  if (!z) return;
  z.innerHTML = '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div class="alert info"><span class="alert-icon">ℹ</span><span>Dimensionnement pour <strong>passe à bassins successifs</strong> et <strong>passe à fentes verticales</strong> · Méthodes ICE 2014 et Larinier et al. 2002.</span></div>'
    + '</div>'
    + '<div class="section-header">Paramètres</div>'
    + '<div style="padding:0 var(--s-4)">'
      + '<div class="card card-p">'
        + '<div class="field"><label class="field-label">Hauteur totale à franchir (H)</label>'
          + '<div class="field-row"><input type="number" id="pap-H" value="2.0" step="0.1" min="0.1" oninput="calcPAP()"><span class="field-unit">m</span></div></div>'
        + '<div class="field"><label class="field-label">Type de passe</label>'
          + '<select id="pap-type" class="field-inp" onchange="calcPAP()">'
            + '<option value="bassins">Bassins successifs (dénivelé 0,20 m/bassin)</option>'
            + '<option value="fentes">Fentes verticales (dénivelé 0,15 m/bassin)</option>'
          + '</select></div>'
        + '<div class="field"><label class="field-label">Espèces cibles</label>'
          + '<select id="pap-esp" class="field-inp" onchange="calcPAP()">'
            + '<option value="saumon">Salmonidés (Saumon, Truite fario)</option>'
            + '<option value="cyprin">Cyprinidés (Barbeau, Gardon, Brochet)</option>'
            + '<option value="anguille">Anguille</option>'
            + '<option value="alose">Grande Alose / Alose feinte</option>'
          + '</select></div>'
        + '<div class="field"><label class="field-label">Débit disponible pour la passe (Q)</label>'
          + '<div class="field-row"><input type="number" id="pap-Q" value="0.5" step="0.05" min="0.01" oninput="calcPAP()"><span class="field-unit">m³/s</span></div></div>'
      + '</div>'
    + '</div>'
    + '<div id="pap-result" style="padding:0 var(--s-4);margin-top:var(--s-2)"></div>';
  calcPAP();
}

function calcPAP() {
  var Hel  = document.getElementById('pap-H');
  var Qel  = document.getElementById('pap-Q');
  var tel  = document.getElementById('pap-type');
  var eel  = document.getElementById('pap-esp');
  var res  = document.getElementById('pap-result');
  if (!Hel || !res) return;

  var H    = parseFloat(Hel.value)  || 2.0;
  var Q    = parseFloat(Qel.value)  || 0.5;
  var type = tel ? tel.value : 'bassins';
  var esp  = eel ? eel.value : 'saumon';

  var deltah, wFente, vFente, lBassin, wBassin;
  if (type === 'bassins') {
    deltah  = (esp === 'saumon' || esp === 'alose') ? 0.20 : 0.15;
    lBassin = (esp === 'alose') ? 3.0 : 2.5;
    wBassin = (esp === 'alose') ? 2.0 : 1.5;
  } else {
    deltah  = (esp === 'saumon' || esp === 'alose') ? 0.15 : 0.12;
    wFente  = (esp === 'saumon' || esp === 'alose') ? 0.25 : 0.20;
    vFente  = (esp === 'saumon') ? 1.0 : 0.8;
    lBassin = Math.round(wFente * 8 * 100) / 100;
    wBassin = Math.round(wFente * 16 * 100) / 100;
  }

  var hautBassin   = 1.0;
  var nBassins     = Math.ceil(H / deltah);
  var longueurTot  = (nBassins * (lBassin + 0.3)).toFixed(1);
  var vEch         = type === 'bassins' ? (Math.sqrt(2 * 9.81 * deltah) * 0.62).toFixed(2) : (vFente || 1.0).toFixed(2);
  var puissBas     = (1000 * 9.81 * Q * deltah).toFixed(0);
  var puissVol     = (parseFloat(puissBas) / (wBassin * lBassin * hautBassin)).toFixed(0);

  var alerts = [];
  if (Q < 0.02)  alerts.push({t:'danger', v:'Débit trop faible — attrait insuffisant (minimum recommandé : 0,02 m³/s)'});
  if (H > 5)     alerts.push({t:'warn',   v:'Hauteur > 5 m — envisager un ascenseur à poissons ou une rivière de contournement'});
  if (esp === 'anguille') alerts.push({t:'info', v:'Pour les anguilles, une passe à anguilles spécifique (rampe à substrat) est souvent plus efficace'});
  if (parseFloat(puissVol) > 200) alerts.push({t:'danger', v:'Puissance volumique > 200 W/m³ — turbulences excessives · Réduire le dénivelé/bassin'});

  var espCrit = {
    saumon:  {n:'Salmonidés',   vmax:'2,0 m/s', repos:'< 0,5 m/s', hmin:'0,30 m', dmin:'35 m',  norm:'Arrêté 11/09/2015 · Liste 1'},
    cyprin:  {n:'Cyprinidés',   vmax:'1,2 m/s', repos:'< 0,3 m/s', hmin:'0,20 m', dmin:'10 m',  norm:'Arrêté 11/09/2015 · Liste 2'},
    anguille:{n:'Anguille',     vmax:'0,8 m/s', repos:'< 0,3 m/s', hmin:'0,10 m', dmin:'—',     norm:'Plan national anguille 2010'},
    alose:   {n:'Grande Alose', vmax:'1,5 m/s', repos:'< 0,4 m/s', hmin:'0,30 m', dmin:'50 m',  norm:'Plan gestion alose · PDM DCE'}
  }[esp];

  var html = alerts.map(function(a) {
    return '<div class="alert ' + a.t + '" style="margin-bottom:var(--s-2)"><span class="alert-icon">' + (a.t==='danger'?'⛔':a.t==='warn'?'⚠':'ℹ') + '</span><span>' + a.v + '</span></div>';
  }).join('');

  html += '<div class="card card-p" style="background:linear-gradient(135deg,var(--c-riv-l),#fff);margin-bottom:var(--s-2)">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-riv);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Dimensionnement — ' + (type === 'bassins' ? 'Bassins successifs' : 'Fentes verticales') + '</div>'
    + '<div class="kv-grid">'
      + '<div class="kv-item"><div class="kv-key">Nombre de bassins</div><div class="kv-val" style="font-size:var(--t-lg);color:var(--c-riv)">' + nBassins + '</div></div>'
      + '<div class="kv-item"><div class="kv-key">Dénivelé / bassin</div><div class="kv-val">' + deltah + ' m</div></div>'
      + '<div class="kv-item"><div class="kv-key">Longueur totale estimée</div><div class="kv-val" style="color:var(--c-riv)">' + longueurTot + ' m</div></div>'
      + '<div class="kv-item"><div class="kv-key">Dimensions 1 bassin (L×l×h)</div><div class="kv-val">' + lBassin + ' × ' + wBassin + ' × ' + hautBassin + ' m</div></div>'
      + (type === 'bassins'
          ? '<div class="kv-item"><div class="kv-key">Vitesse échancrure</div><div class="kv-val">' + vEch + ' m/s</div></div>'
          : '<div class="kv-item"><div class="kv-key">Largeur fente</div><div class="kv-val">' + wFente + ' m</div></div>'
            + '<div class="kv-item"><div class="kv-key">Vitesse en fente</div><div class="kv-val">' + vEch + ' m/s</div></div>')
      + '<div class="kv-item"><div class="kv-key">Puissance dissipée / bassin</div><div class="kv-val">' + puissBas + ' W</div></div>'
      + '<div class="kv-item"><div class="kv-key">Puissance volumique</div>'
        + '<div class="kv-val' + (parseFloat(puissVol) > 200 ? '' : '') + '" style="' + (parseFloat(puissVol) > 200 ? 'color:var(--c-danger)' : '') + '">' + puissVol + ' W/m³</div></div>'
    + '</div>'
  + '</div>'
  + '<div class="card card-p" style="margin-bottom:var(--s-2)">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Critères espèce cible — ' + espCrit.n + '</div>'
    + '<div class="kv-grid">'
      + '<div class="kv-item"><div class="kv-key">Vitesse max admissible</div><div class="kv-val">' + espCrit.vmax + '</div></div>'
      + '<div class="kv-item"><div class="kv-key">Zone de repos</div><div class="kv-val">' + espCrit.repos + '</div></div>'
      + '<div class="kv-item"><div class="kv-key">Tirant d\'eau minimum</div><div class="kv-val">' + espCrit.hmin + '</div></div>'
      + '<div class="kv-item"><div class="kv-key">Distance passe/barrage</div><div class="kv-val">' + espCrit.dmin + '</div></div>'
      + '<div class="kv-item" style="grid-column:1/-1"><div class="kv-key">Réglementation applicable</div><div class="kv-val">' + espCrit.norm + '</div></div>'
    + '</div>'
  + '</div>'
  + '<div class="alert info"><span class="alert-icon">📖</span><span>Sources : ICE 2014 · Larinier et al. (2002) <em>Passes à poissons</em> · OFB · Arrêté du 11/09/2015 · Art. L.214-17 Code de l\'environnement</span></div>';

  res.innerHTML = html;
}



