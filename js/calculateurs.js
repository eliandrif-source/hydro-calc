function renderCalc() {
  renderCalcHub();
}

function renderCalcHub() {
  var _tb = document.getElementById('tab-bar');
  if (_tb) _tb.style.display = 'none';
  var t = document.getElementById('top-title');
  if (t) t.textContent = 'Calculateurs';

  var themes = [
    {
      ico:'🏡', name:'ANC — Assainissement non collectif',
      color:'var(--c-anc)', colorl:'var(--c-anc-l)',
      items:[
        { id:'epandage',  ico:'🌾', name:'Surface d\'épandage',  desc:'Filière par K Porchet · EH · Tranchées · FPR' },
        { id:'fte',       ico:'🪣', name:'Fosse toutes eaux',    desc:'Volume · Vidange · Dimensionnement DTU 64.1' },
        { id:'charges',   ico:'⚗️', name:'Charges polluantes',  desc:'DBO₅ · DCO · MES · Azote · NTK' },
      ]
    },
    {
      ico:'🌊', name:'Hydraulique — Réseaux & canalisations',
      color:'var(--c-ac)', colorl:'var(--c-ac-l)',
      items:[
        { id:'manning',   ico:'🔵', name:'Manning-Strickler',        desc:'Débit plein · Vitesse · Pente' },
        { id:'mp',        ico:'〇', name:'Manning section partielle', desc:'Section circulaire en charge partielle' },
        { id:'rationnelle',ico:'🌧️',name:'Méthode rationnelle',      desc:'Débit de pointe · Bassins versants · Q = CiA' },
        { id:'belier',    ico:'💥', name:'Coup de bélier',           desc:'Surpression · Célérité · Protection réseau' },
        { id:'shields',   ico:'🪨', name:'Transport solide Shields', desc:'Contrainte critique · Charriage · Fond mobile' },
      ]
    },
    {
      ico:'💧', name:'Eau potable — AEP',
      color:'var(--c-ep)', colorl:'var(--c-ep-l)',
      items:[
        { id:'pression',   ico:'📊', name:'Pression AEP',      desc:'Pertes de charge · Hazen-Williams · HMT réseau' },
        { id:'chloration', ico:'🟡', name:'Chloration',        desc:'Dose totale · Débit injection · Javel' },
        { id:'reservoir',  ico:'🏗️', name:'Réservoir AEP',    desc:'Volume · Temps de séjour · Réserve incendie' },
        { id:'pompe',      ico:'⚙️', name:'Pompe — HMT',      desc:'Hauteur manométrique totale · Point de fonctionnement' },
        { id:'npsh',       ico:'🔩', name:'NPSH — Cavitation', desc:'Hauteur d\'aspiration max · Sécurité pompe' },
      ]
    },
    {
      ico:'🧪', name:'Qualité de l\'eau',
      color:'var(--c-form)', colorl:'var(--c-form-l)',
      items:[
        { id:'langelier', ico:'🧫', name:'Indice de Langelier', desc:'Saturation calcaire · Agressivité · pH équilibre' },
      ]
    },
  ];

  var html = `
    <div class="module-hero" style="--cat-color:var(--c-ac)">
      <span class="mh-icon">⚡</span>
      <div class="mh-title">Calculateurs</div>
      <div class="mh-sub">14 outils · ANC · Hydraulique · AEP · Qualité eau</div>
      <div class="mh-tags"><span class="mh-tag">ANC</span><span class="mh-tag">AC</span><span class="mh-tag">EP</span><span class="mh-tag">Rivières</span></div>
    </div>
  `;

  themes.forEach(function(theme) {
    html += `<div class="section-header">${theme.ico} ${theme.name}</div>`;
    html += `<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">`;
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
    html += `</div>`;
  });

  html += `<div class="pb-nav"></div>`;
  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
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
  };
  var te = document.getElementById('top-title');
  if (te && titles[id]) te.textContent = titles[id];

  var calcaIds = { 'mp':renderCalcaManning, 'belier':renderCalcaBelier, 'langelier':renderCalcaLangelier, 'shields':renderCalcaShields, 'pompe':renderCalcaPompeHMT, 'npsh':renderCalcaNPSH };
  var calcIds  = { 'epandage':renderCalcEpandage, 'fte':renderCalcFTE, 'manning':renderCalcManning, 'rationnelle':renderCalcMethodeRat, 'charges':renderCalcCharges, 'pression':renderCalcPression };

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
    mc.innerHTML = '<div id="calca-content"></div><div class="pb-nav"></div>';
    calcaIds[id]();
    return;
  }
  if (calcIds[id]) {
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
    { nom:'Tranchées d\'épandage',       ch:0.06, kMin:1,  kMax:15, surface: eh*150/(0.06*1000), empreinte:'Grande', entretien:'Faible', cout:'★★☆', sol:'Normal' },
    { nom:'Filtre à sable non drainé',   ch:0.08, kMin:0,  kMax:50, surface: eh*150/(0.08*1000), empreinte:'Moyenne', entretien:'Faible', cout:'★★☆', sol:'Perméable' },
    { nom:'Filtre à sable drainé',       ch:0.10, kMin:0,  kMax:99, surface: eh*150/(0.10*1000), empreinte:'Moyenne', entretien:'Faible', cout:'★★★', sol:'Tout terrain' },
    { nom:'Tertre d\'infiltration',      ch:0.12, kMin:0,  kMax:99, surface: eh*150/(0.12*1000), empreinte:'Grande', entretien:'Moyen', cout:'★★★', sol:'Sol inapte' },
    { nom:'FPR vertical',                ch:null,  kMin:0,  kMax:99, surface: eh*5, empreinte:'Faible', entretien:'Moyen', cout:'★★★', sol:'Tout terrain' },
    { nom:'FPR horizontal',              ch:null,  kMin:0,  kMax:99, surface: eh*3, empreinte:'Faible', entretien:'Moyen', cout:'★★★', sol:'Tout terrain' },
    { nom:'Microstation agréée CE',      ch:null,  kMin:0,  kMax:99, surface: 2,    empreinte:'Très faible', entretien:'Élevé', cout:'★★★', sol:'Tout terrain' },
  ];

  var rows = filieres.map(function(f) {
    var compatible = (k >= f.kMin && k <= f.kMax);
    var rowClass = compatible ? 'row-hl' : '';
    var compatBadge = compatible
      ? '<span class="cf-ok">✓ Compatible</span>'
      : '<span class="cf-no">✗ Inadapté</span>';
    var surf = f.surface ? f.surface.toFixed(1) + ' m²' : '—';
    return '<tr class="' + rowClass + '"><td>' + f.nom + '</td><td>' + compatBadge + '</td><td>' + surf + '</td><td>' + f.empreinte + '</td><td>' + f.entretien + '</td><td>' + f.cout + '</td></tr>';
  }).join('');

  wrap.innerHTML = '<div style="padding:0 var(--s-4) var(--s-2)"><div class="card card-p">' +
    '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">🗂 Comparateur filières — ' + eh + ' EH · K = ' + k + ' mm/min</div>' +
    '<div style="overflow-x:auto"><table class="comparateur-table">' +
    '<thead><tr><th>Filière</th><th>Compatibilité</th><th>Surface</th><th>Empreinte</th><th>Entretien</th><th>Coût relatif</th></tr></thead>' +
    '<tbody>' + rows + '</tbody></table></div>' +
    '<div style="font-size:10px;color:var(--c-text-4);margin-top:var(--s-2)">Lignes vertes = filières adaptées au K mesuré · Surface calculée pour ' + eh + ' EH · Arrêté 07/09/2009 · DTU 64.1</div>' +
    '</div></div>';

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
          <div class="result-formula">S = EH × 150 L/j / (Ch × 1 000) · Ch = f(K)</div>
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
          <div class="result-formula">V = 3 000 L si pp ≤ 5 · V = 3 000 + (pp−5) × 1 000 L si pp > 5</div>
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
          <div class="result-formula">Q = K × A × Rh^(2/3) × I^(1/2) · Rh = D/4 · A = π×D²/4</div>
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
          <div class="result-formula">Q = C × i × A / 360 (L/s, avec A en ha et i en mm/h)</div>
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
        <div class="result-box" id="res-ch">
          <div class="result-value" id="rv-ch"></div>
          <div class="result-detail" id="rd-ch"></div>
          <div class="result-formula">1 EH = 60 g DBO₅/j = 90 g MES/j = 135 g DCO/j = 15 g NTK/j = 4 g Pt/j = 150 L/j</div>
          <div class="result-src">📖 Arrêté 22/06/2007 · Directive ERU 91/271/CEE</div>
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
  const eh=parseInt(getV('ch-eh'))||5;
  const pers=parseInt(getV('ch-pers'))||4;
  const res=document.getElementById('res-ch'); res.classList.add('show');
  res.style.borderLeftColor='var(--c-ok)';
  document.getElementById('rv-ch').textContent=`Charge DBO₅ = ${eh*60} g/j · Volume = ${eh*150} L/j`;
  document.getElementById('rd-ch').innerHTML=
    `• <strong>DBO₅ :</strong> ${eh*60} g/j · DCO : ${eh*135} g/j · MES : ${eh*90} g/j<br>`+
    `• <strong>NTK :</strong> ${eh*15} g/j · Pt : ${eh*4} g/j · Volume : ${eh*150} L/j<br>`+
    (pers!==eh?`• Charge réelle (${pers} pers.) : DBO₅ = ${pers*60} g/j · Vol = ${pers*150} L/j`:'• EH = personnes réelles : charge réglementaire correcte');
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
          <div class="result-formula">V = 0,8492 × C × R^0,63 × S^0,54 · S = hf/L · R = D/4</div>
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
    <div class="search-container" style="padding-top:var(--s-2)"><div class="search-bar"><span class="search-ico">🔍</span><input type="text" placeholder="Rechercher une filière…"></div></div>
    <div class="section-header">Filières de traitement<span class="sh-count">${FICHES_FILIERES.length} fiches</span></div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
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
          <div class="result-formula">V = 3 000 L si pp ≤ 5 · +1 000 L/pp au-delà</div>
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



