/* ─── RENDER NC ─── */
function renderNC() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color: var(--c-nc)">
      <span class="mh-icon">⚠️</span>
      <div class="mh-title">Installations non conformes</div>
      <div class="mh-sub">13 ouvrages historiques · Guide réhabilitation · Usage professionnel SPANC</div>
      <div class="mh-tags"><span class="mh-tag">Usage SPANC</span><span class="mh-tag">Historique</span><span class="mh-tag">Réhabilitation</span></div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="alert danger"><span class="alert-icon">⚠️</span><span>Base professionnelle. Ces installations <strong>ne peuvent plus être installées à neuf</strong>. Leur présence impose une mise en conformité dans les délais légaux.</span></div>
    </div>
    ${[
      {ico:'🚫',name:'Fosse septique (eaux vannes seules)',ref:'Interdite depuis Arrêté 07/09/2009',delai:'Délai NC : 4 ans (sans danger) · 1 an si danger sanitaire',desc:'Ne traite pas les eaux ménagères (50% de la pollution). Remplacement par FTE obligatoire.'},
      {ico:'⛔',name:'Puisard (trou d\'infiltration direct)',ref:'Interdit depuis Loi Eau n°92-3 du 03/01/1992',delai:'Danger sanitaire → délai réhab. 1 AN MAXIMUM',desc:'Rejet direct d\'eaux brutes en nappe phréatique. Risque épidémique. Comblement + filière conforme obligatoires.'},
      {ico:'⬛',name:'Plateau absorbant',ref:'Non conforme DTU 64.1 (profondeur insuffisante)',delai:'Mise en conformité exigée dès contrôle SPANC',desc:'Épandage superficiel → risque d\'affleurement. Sol trop humide → tertre ou microstation nécessaires.'},
    ].map(nc=>`
    <div style="padding:var(--s-2) var(--s-4) 0">
      <div class="fiche-card" style="border-left:3px solid var(--c-nc)">
        <div class="fiche-head">
          <div class="fiche-icon" style="background:var(--c-nc-l)">${nc.ico}</div>
          <div style="flex:1">
            <div class="fiche-name">${nc.name}</div>
            <div class="fiche-sub">${nc.ref}</div>
          </div>
          <span class="badge badge-danger">NON CONFORME</span>
        </div>
        <div style="padding:0 var(--s-4) var(--s-3);display:flex;flex-direction:column;gap:5px;border-top:1px solid var(--c-border)">
          <div class="alert danger" style="margin-top:var(--s-2)"><span class="alert-icon">⏱</span><span>${nc.delai}</span></div>
          <div style="font-size:var(--t-sm);color:var(--c-text-3);line-height:1.75">${nc.desc}</div>
        </div>
      </div>
    </div>`).join('')}
    <div class="pb-nav"></div>`;
}

/* ─── DESIGN SYSTEM ─── */
function renderDesignSystem() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('top-title').textContent = 'Design System';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:#3A4840">
      <span class="mh-icon">🎨</span>
      <div class="mh-title">Design System HydroCalc</div>
      <div class="mh-sub">Tokens · Composants · Typographie · Couleurs · Système unifié v3</div>
    </div>

    <div class="section-header">🎨 Palette de couleurs</div>
    <div style="padding:0 var(--s-4)">
      <div class="card card-p">
        <div class="kv-grid">
          ${[['Primaire (ANC)','#0A7460','var(--c-anc)'],['Assainissement','#1550A0','var(--c-ac)'],['Eau potable','#886000','var(--c-ep)'],['Rivières','#0A5090','var(--c-riv)'],['Formation','#6B4C00','var(--c-form)'],['Réglementation','#A02020','var(--c-regl)'],['Non-conforme','#A82018','var(--c-nc)'],['Aides','#166038','var(--c-aides)']].map(([n,hex,v])=>`
          <div class="kv-item" style="border-left:4px solid ${hex}">
            <div class="kv-key">${n}</div>
            <div class="kv-val" style="color:${hex};font-weight:700">${hex}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="section-header" style="margin-top:var(--s-3)">📝 Typographie</div>
    <div style="padding:0 var(--s-4)">
      <div class="card card-p">
        <div style="font-family:var(--f-display);font-size:30px;margin-bottom:var(--s-2)">Fraunces — Titres</div>
        <div style="font-family:var(--f-display);font-size:22px;margin-bottom:var(--s-2)">Affichage des résultats</div>
        <div style="font-size:var(--t-base);margin-bottom:var(--s-2)">Outfit Regular — Corps de texte principal</div>
        <div style="font-size:var(--t-sm);color:var(--c-text-3)">Outfit Small — Descriptions et détails</div>
      </div>
    </div>

    <div class="section-header" style="margin-top:var(--s-3)">🧩 Composants</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Alertes</div>
        <div style="display:flex;flex-direction:column;gap:var(--s-2)">
          <div class="alert ok"><span class="alert-icon">✓</span><span>Installation conforme · Délai respecté</span></div>
          <div class="alert warn"><span class="alert-icon">⚠</span><span>Attention · Vérification recommandée</span></div>
          <div class="alert danger"><span class="alert-icon">✗</span><span>Non conforme · Action requise</span></div>
          <div class="alert info"><span class="alert-icon">ℹ</span><span>Information · Référence normative</span></div>
        </div>
      </div>
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Badges</div>
        <div style="display:flex;gap:var(--s-2);flex-wrap:wrap">
          <span class="badge badge-primary">ANC</span>
          <span class="badge badge-ok">Conforme</span>
          <span class="badge badge-warn">À vérifier</span>
          <span class="badge badge-danger">Non conforme</span>
          <span class="badge badge-info">Information</span>
          <span class="badge badge-new">NEW</span>
        </div>
      </div>
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Boutons</div>
        <div style="display:flex;flex-direction:column;gap:var(--s-2)">
          <button class="btn btn-primary">Calculer</button>
          <button class="btn btn-ghost">Annuler</button>
        </div>
      </div>
    </div>
    <div class="pb-nav"></div>`;
}

/* ─── MODULE SIMPLE ─── */
function renderModuleSimple(id) {
  const m = MODULES_META.find(x=>x.id===id) || {name:id, ico:'📄', color:'var(--c-primary)', sub:''};
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:${m.color}">
      <span class="mh-icon">${m.ico}</span>
      <div class="mh-title">${m.name}</div>
      <div class="mh-sub">${m.sub}</div>
    </div>
    <div style="padding:var(--s-4)">
      <div class="alert info"><span class="alert-icon">📁</span><span>Ce module est disponible dans le fichier <strong>${id && (MODULES_META.find(function(x){return x.id===id;})||{name:id}).name || id}.html</strong>. Ouvrez le fichier correspondant pour accéder au contenu complet.</span></div>
    </div>
    <div class="pb-nav"></div>`;
}

/* ─── CALCULATEURS ─── */
function calcEpandage() {
  const eh = parseInt(getV('c-eh'))||5;
  const k = parseFloat(getV('c-k'))||3;
  const ch = Math.min(k*0.006, 0.10);
  const s = (eh*150/(ch*1000)).toFixed(1);
  const res = document.getElementById('res-epandage');
  res.classList.add('show');
  document.getElementById('rv-ep').textContent = `Surface = ${s} m²`;
  document.getElementById('rd-ep').innerHTML = `• EH = ${eh} · K = ${k} mm/min · Charge hydraulique ≈ ${ch.toFixed(3)} m/j<br>• Dimensions indicatives : ~${Math.round(Math.sqrt(parseFloat(s)*2))} m × ${Math.round(Math.sqrt(parseFloat(s)/2))} m`;
  const warn = k<1 ? {t:'danger',msg:'⚠ K < 1 mm/min : tranchées inadaptées → filtre à sable drainé ou microstation'} :
               k>15 ? {t:'warn',msg:'⚠ K > 15 mm/min : sol trop perméable → filtre à sable drainé obligatoire'} :
               {t:'ok',msg:'✓ Sol adapté aux tranchées d\'épandage · Vérifier distances (≥ 35 m des puits)'};
  res.style.borderLeftColor = warn.t==='ok'?'var(--c-ok)':warn.t==='warn'?'var(--c-warn)':'var(--c-danger)';
  const warnDiv = res.querySelector('.result-formula');
  const warnEl = document.createElement('div');
  warnEl.className = `alert ${warn.t}`;
  warnEl.innerHTML = `<span class="alert-icon">${warn.t==='ok'?'✓':'⚠'}</span><span>${warn.msg}</span>`;
  res.querySelector('.result-src').after(warnEl);
}

function calcManning() {
  const dn = parseFloat(getV('c-dn'))||300;
  const ks = parseFloat(getV('c-ks'))||90;
  const ip = parseFloat(getV('c-ip'))||3;
  const D = dn/1000, I = ip/1000;
  const A = Math.PI*D*D/4, Rh = D/4;
  const Q = ks*A*Math.pow(Rh,2/3)*Math.pow(I,0.5);
  const V = Q/A;
  const res = document.getElementById('res-mann');
  res.classList.add('show');
  document.getElementById('rv-mn').textContent = `Q = ${(Q*1000).toFixed(2)} L/s = ${(Q*3600).toFixed(2)} m³/h`;
  document.getElementById('rd-mn').innerHTML = `• DN = ${dn} mm · K = ${ks} · I = ${ip}‰<br>• A = ${A.toFixed(4)} m² · Rh = ${(Rh*1000).toFixed(0)} mm<br>• V pleine section = ${V.toFixed(3)} m/s ${V>=0.6?'✓ Auto-curage':'⚠ < 0,6 m/s → risque dépôts'}`;
  res.style.borderLeftColor = V>=0.6?'var(--c-ok)':'var(--c-warn)';
}

function calcFTE() {
  const pp = parseInt(getV('fte-pp'))||4;
  const v = pp<=5?3000:3000+(pp-5)*1000;
  const res = document.getElementById('res-fte');
  res.classList.add('show');
  document.getElementById('rv-fte').textContent = `${v.toLocaleString()} L = ${(v/1000).toFixed(1)} m³`;
  document.getElementById('rd-fte').innerHTML = `• Pièces principales : ${pp} · EH réglementaires : ${pp+1}<br>• Accumulation boues ≈ ${pp*30} L/an → Vidange tous les ~${Math.floor(v*0.5/(pp*30))} ans`;
}

/* ─── TABS ─── */
function setTabs(tabs) {
  var bar = document.getElementById('tab-bar');
  if (!bar) return;
  bar.style.display = 'flex';
  bar.innerHTML = tabs.map(function(t, i) {
    return '<button class="tab-pill' + (i===0?' active':'') + '" onclick="setActiveTab(this)">' + t + '</button>';
  }).join('');
}
function setActiveTab(btn) {
  var pills = document.querySelectorAll('.tab-pill');
  for (var i = 0; i < pills.length; i++) pills[i].classList.remove('active');
  btn.classList.add('active');
}

/* ─── FICHES ─── */
function toggleFiche(i) {
  var b = document.getElementById('fb-' + i);
  var a = document.getElementById('fa-' + i);
  if (!b) return;
  var open = b.classList.toggle('open');
  if (a) { a.style.transform = open ? 'rotate(90deg)' : ''; a.style.transition = 'transform .2s'; }
}

/* ─── RENDER CONVERTISSEUR ─── */
function renderConv() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  const CONVS = {
    debit:{ name:'Débit', units:[{id:'ls',l:'L/s',f:v=>v},{id:'m3h',l:'m³/h',f:v=>v*3.6},{id:'m3j',l:'m³/j',f:v=>v*86.4},{id:'lmin',l:'L/min',f:v=>v*60},{id:'m3s',l:'m³/s',f:v=>v/1000},{id:'galmin',l:'gal US/min',f:v=>v*15.85},{id:'lh',l:'L/h',f:v=>v*3600}], fromLs:[v=>v,v=>v/3.6,v=>v/86.4,v=>v/60,v=>v*1000,v=>v/15.85,v=>v/3600], ref:'1 L/s = 3,6 m³/h = 86,4 m³/j = 60 L/min' },
    pression:{ name:'Pression', units:[{id:'bar',l:'bar'},{id:'mce',l:'m CE'},{id:'kpa',l:'kPa'},{id:'psi',l:'psi'},{id:'atm',l:'atm'},{id:'mbar',l:'mbar'}], toLs:[v=>v,v=>v/10.197,v=>v/100,v=>v/14.504,v=>v/0.9869,v=>v/1000], fromLs:[v=>v,v=>v*10.197,v=>v*100,v=>v*14.504,v=>v*0.9869,v=>v*1000], ref:'1 bar = 10,197 m CE = 100 kPa = 14,504 psi · Pression service AEP : 2–6 bar' },
    concentration:{ name:'Concentration', units:[{id:'mgl',l:'mg/L'},{id:'gm3',l:'g/m³'},{id:'ugl',l:'µg/L'},{id:'gl',l:'g/L'},{id:'ppm',l:'ppm'}], toLs:[v=>v,v=>v,v=>v/1000,v=>v*1000,v=>v], fromLs:[v=>v,v=>v,v=>v*1000,v=>v/1000,v=>v], ref:'1 mg/L = 1 g/m³ = 1000 µg/L = 0,001 g/L · PFAS < 0,1 µg/L · Nitrates < 50 mg/L' },
    surface:{ name:'Surface', units:[{id:'m2',l:'m²'},{id:'ha',l:'ha'},{id:'km2',l:'km²'},{id:'cm2',l:'cm²'}], toLs:[v=>v,v=>v*10000,v=>v*1e6,v=>v/10000], fromLs:[v=>v,v=>v/10000,v=>v/1e6,v=>v*10000], ref:'1 ha = 10 000 m² · 1 km² = 100 ha · ANC : tranchées 20–60 m² · FPR : 5 m²/EH' },
    temperature:{ name:'Température', units:[{id:'c',l:'°C'},{id:'f',l:'°F'},{id:'k',l:'K'}], toLs:[v=>v,v=>(v-32)*5/9,v=>v-273.15], fromLs:[v=>v,v=>v*9/5+32,v=>v+273.15], ref:'0°C = 32°F = 273,15 K · Nitrification arrêtée < 5°C · Eau potable distrib. : 8–20°C' },
    durete:{ name:'Dureté', units:[{id:'f',l:'°f (Fr)'},{id:'caco3',l:'mg/L CaCO₃'},{id:'mmol',l:'mmol/L'},{id:'d',l:'°d (all.)'}], toLs:[v=>v,v=>v/10,v=>v/5.005,v=>v*1.7848], fromLs:[v=>v,v=>v*10,v=>v*5.005,v=>v/1.7848], ref:'1°f = 10 mg/L CaCO₃ · Eau douce < 15°f · Eau dure > 30°f · Eau très dure > 40°f' },
  };
  window.CONVS = CONVS;
  window.curConvCat = 'debit';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-riv)">
      <span class="mh-icon">🔄</span>
      <div class="mh-title">Convertisseur d'unités</div>
      <div class="mh-sub">8 catégories · Conversion en temps réel · Références secteur eau</div>
      <div class="mh-tags"><span class="mh-tag">Débit</span><span class="mh-tag">Pression</span><span class="mh-tag">Concentration</span><span class="mh-tag">Surface</span><span class="mh-tag">Température</span><span class="mh-tag">Dureté</span></div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div style="display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:var(--s-2)">
        ${Object.entries(CONVS).map(([k,c],i)=>`<button class="tab-pill${i===0?' active':''}" onclick="switchConv('${k}',this)">${c.name}</button>`).join('')}
      </div>
    </div>
    <div id="conv-zone" style="padding:var(--s-2) var(--s-4) var(--s-3)"></div>
    <div class="pb-nav"></div>`;
  renderConvZone('debit');
}

function switchConv(cat, btn) {
  document.querySelectorAll('.tab-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  window.curConvCat = cat;
  renderConvZone(cat);
}

function renderConvZone(cat) {
  const c = window.CONVS[cat];
  const zone = document.getElementById('conv-zone');
  zone.innerHTML = `
    <div class="card card-p" style="margin-bottom:var(--s-2)">
      <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">${c.name} — Valeur à convertir</div>
      <div style="display:grid;grid-template-columns:1fr auto;gap:var(--s-2);margin-bottom:var(--s-3)">
        <input id="conv-val" type="number" value="1" step="any" oninput="doConvert('${cat}')"
          style="padding:12px var(--s-3);border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-display);font-size:24px;font-weight:600;color:var(--c-primary);background:var(--c-surface);width:100%">
        <select id="conv-unit" onchange="doConvert('${cat}')"
          style="padding:10px var(--s-3);border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:var(--t-base);background:var(--c-surface);color:var(--c-text);min-width:100px">
          ${c.units.map((u,i)=>`<option value="${i}">${u.l}</option>`).join('')}
        </select>
      </div>
      <div class="kv-grid" id="conv-results" style="grid-template-columns:1fr 1fr"></div>
      <div style="margin-top:var(--s-2);font-family:monospace;font-size:10px;color:var(--c-primary);background:var(--c-primary-l);padding:var(--s-2) var(--s-3);border-radius:var(--r-sm);border-left:2px solid var(--c-primary)">${c.ref}</div>
    </div>`;
  doConvert(cat);
}

function doConvert(cat) {
  const c = window.CONVS[cat];
  const val = parseFloat(getV('conv-val'))||0;
  const unitIdx = parseInt(getV('conv-unit'))||0;
  const base = c.toLs[unitIdx](val);
  const grid = document.getElementById('conv-results');
  if(!grid) return;
  grid.innerHTML = c.units.map((u,i)=>{
    const converted = c.fromLs[i](base);
    const fmt = n => {
      if(n===0) return '0';
      const a = Math.abs(n);
      if(a>=1e6) return (n/1e6).toPrecision(4)+' M';
      if(a>=1e3) return parseFloat(n.toPrecision(5)).toLocaleString('fr-FR');
      if(a>=1) return parseFloat(n.toPrecision(6)).toLocaleString('fr-FR');
      if(a>=1e-3) return parseFloat(n.toPrecision(4)).toLocaleString('fr-FR');
      return n.toExponential(3);
    };
    const sel = i===unitIdx;
    return `<div class="kv-item" style="${sel?'border:1.5px solid var(--c-primary);background:var(--c-primary-l)':''}">
      <div class="kv-key" style="${sel?'color:var(--c-primary)':''}">${u.l}</div>
      <div style="font-family:var(--f-display);font-size:${converted>1e6||converted.toString().length>8?'14':'18'}px;font-weight:600;color:${sel?'var(--c-primary)':'var(--c-text)'}">${fmt(converted)}</div>
    </div>`;
  }).join('');
}

/* ─── CALCULATEURS AVANCÉS — onglets ─── */
var CALCA_TAB_LBLS = ['Manning partiel','Coup de bélier','Langelier','Shields','Pompe HMT','NPSH'];

function renderCalcAvances() {
  loadModuleTabs(['Manning partiel','Coup de bélier','Langelier','Shields','Pompe HMT','NPSH'], 'switchCalcaTab');
  document.getElementById('main-content').innerHTML =
    '<div id="calca-content"></div><div class="pb-nav"></div>';
  renderCalcaManning();
}

function switchCalcaTab(idx) {
  setTabActive('module-tabs', idx);
  if      (idx === 0) renderCalcaManning();
  else if (idx === 1) renderCalcaBelier();
  else if (idx === 2) renderCalcaLangelier();
  else if (idx === 3) renderCalcaShields();
  else if (idx === 4) renderCalcaPompeHMT();
  else if (idx === 5) renderCalcaNPSH();
  scrollToTop();
}

function renderCalcaManning() {
  document.getElementById('calca-content').innerHTML =
    '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🔵 Manning — section partiellement remplie</div>'
    + '<div class="calc-zone">'
    + '<div class="field"><label class="field-label">Diamètre intérieur D</label><div class="field-row"><input type="number" id="mp-d" value="300" step="50"><span class="field-unit">mm</span></div></div>'
    + '<div class="field"><label class="field-label">Hauteur d\'eau y</label><div class="field-hint">Doit être inférieure à D</div><div class="field-row"><input type="number" id="mp-y" value="240" step="10"><span class="field-unit">mm</span></div></div>'
    + '<div class="field"><label class="field-label">Coefficient K (Strickler)</label><div class="field-tip">PVC/PEHD : 90–100 · Béton : 65–80</div><div class="field-row"><input type="number" id="mp-k" value="90" step="5"><span class="field-unit">m^(1/3)/s</span></div></div>'
    + '<div class="field"><label class="field-label">Pente I</label><div class="field-row"><input type="number" id="mp-i" value="3" step="0.5"><span class="field-unit">‰</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcManningPartiel()">Calculer</button>'
    + '<div class="result-box" id="res-mp"><div class="result-value" id="rv-mp"></div><div class="result-detail" id="rd-mp"></div>'
    + '<div class="result-formula">θ=2arccos(1-2y/D) · A=D²/8×(θ-sinθ) · Q=K×A×Rh^(2/3)×I^(1/2)</div>'
    + '<div class="result-src">📖 Manning R. (1891) · NF EN 752</div></div>'
    + '</div></div></div>';
}

function renderCalcaBelier() {
  document.getElementById('calca-content').innerHTML =
    '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">⚡ Coup de bélier — surpression et célérité</div>'
    + '<div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>La surpression maxi survient lors d\'une fermeture rapide (tf &lt; Tc = 2L/a). Résultat appliqué à la pression statique.</span></div>'
    + '<div class="calc-zone">'
    + '<div class="field"><label class="field-label">Longueur de conduite L</label><div class="field-row"><input type="number" id="cb-l" value="500" step="50"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Vitesse d\'écoulement V</label><div class="field-tip">Vitesse normale en régime permanent</div><div class="field-row"><input type="number" id="cb-v" value="1.2" step="0.1"><span class="field-unit">m/s</span></div></div>'
    + '<div class="field"><label class="field-label">Matériau</label>'
    + '<select id="cb-mat" class="field-inp" style="appearance:none">'
    + '<option value="1200">Acier (a = 1 200 m/s)</option>'
    + '<option value="400" selected>PEHD (a = 400 m/s)</option>'
    + '<option value="500">PVC (a = 500 m/s)</option>'
    + '<option value="1000">Fonte ductile (a = 1 000 m/s)</option>'
    + '<option value="1000">Béton armé (a = 1 000 m/s)</option>'
    + '</select></div>'
    + '<div class="field"><label class="field-label">Pression statique</label><div class="field-row"><input type="number" id="cb-ps" value="4" step="0.5"><span class="field-unit">bar</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcCoupBelier()">Calculer</button>'
    + '<div class="result-box" id="res-cb"><div class="result-value" id="rv-cb"></div><div class="result-detail" id="rd-cb"></div>'
    + '<div class="result-formula">ΔP = ρ × a × ΔV · Tc = 2L/a · ΔH = a×V/g</div>'
    + '<div class="result-src">📖 Joukowski N. (1898) · CCTG Fascicule 71</div></div>'
    + '</div></div></div>';
}

function renderCalcaLangelier() {
  document.getElementById('calca-content').innerHTML =
    '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">⚗️ Indice de Langelier (IL)</div>'
    + '<div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>IL &gt; 0 : eau entartrante · IL &lt; 0 : eau agressive · Cible réseau AEP : IL ∈ [−0,5 ; +0,5]</span></div>'
    + '<div class="calc-zone">'
    + '<div class="field"><label class="field-label">pH mesuré</label><div class="field-row"><input type="number" id="il-ph" value="7.4" step="0.1"><span class="field-unit">pH</span></div></div>'
    + '<div class="field"><label class="field-label">TH (dureté totale)</label><div class="field-row"><input type="number" id="il-th" value="25" step="1"><span class="field-unit">°f</span></div></div>'
    + '<div class="field"><label class="field-label">TAC (alcalinité)</label><div class="field-row"><input type="number" id="il-tac" value="20" step="1"><span class="field-unit">°f</span></div></div>'
    + '<div class="field"><label class="field-label">Température de l\'eau</label><div class="field-row"><input type="number" id="il-t" value="15" step="1"><span class="field-unit">°C</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcLangelierAvance()">Calculer IL</button>'
    + '<div class="result-box" id="res-il"><div class="result-value" id="rv-il"></div><div class="result-detail" id="rd-il"></div>'
    + '<div class="result-formula">IL = pH − pHs · pHs = f(T, TH, TAC)</div>'
    + '<div class="result-src">📖 Langelier W.F. (1936) · CSP art. R.1321-2</div></div>'
    + '</div></div></div>';
}

function renderCalcaShields() {
  document.getElementById('calca-content').innerHTML =
    '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🪨 Shields — seuil de mise en mouvement des sédiments</div>'
    + '<div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Calcule le diamètre minimal des blocs résistant à l\'arrachement par l\'écoulement. Utilisé pour la protection des berges et radiers.</span></div>'
    + '<div class="calc-zone">'
    + '<div class="field"><label class="field-label">Vitesse d\'écoulement V</label><div class="field-row"><input type="number" id="sh-v" value="2.5" step="0.1"><span class="field-unit">m/s</span></div></div>'
    + '<div class="field"><label class="field-label">Densité des blocs ρs</label><div class="field-tip">Granite : 2 650 · Calcaire : 2 500 · Enrochements : 2 700 kg/m³</div><div class="field-row"><input type="number" id="sh-rhos" value="2650" step="50"><span class="field-unit">kg/m³</span></div></div>'
    + '<div class="field"><label class="field-label">Angle de talus β</label><div class="field-tip">Lit du cours d\'eau : 0° · Talus incliné : 20–35°</div><div class="field-row"><input type="number" id="sh-beta" value="0" step="5"><span class="field-unit">°</span></div></div>'
    + '<div class="field"><label class="field-label">Facteur de sécurité Fs</label><div class="field-tip">Zone calme : 1,3 · Zone turbulente : 1,5</div><div class="field-row"><input type="number" id="sh-fs" value="1.3" step="0.1"><span class="field-unit">—</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcShields()">Calculer d min</button>'
    + '<div class="result-box" id="res-sh"><div class="result-value" id="rv-sh"></div><div class="result-detail" id="rd-sh"></div>'
    + '<div class="result-formula">d_min = V²×ρ / (2g×θc×(ρs−ρ)×cos(β)×Fs) · θc = 0,047</div>'
    + '<div class="result-src">📖 Shields A. (1936) · Guide enrochements Eurocodes</div></div>'
    + '</div></div></div>';
}

function renderCalcaPompeHMT() {
  document.getElementById('calca-content').innerHTML =
    '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">⚙️ Pompe — HMT et puissance</div>'
    + '<div class="calc-zone">'
    + '<div class="field"><label class="field-label">Débit Q</label><div class="field-row"><input type="number" id="pm-q" value="50" step="5"><span class="field-unit">m³/h</span></div></div>'
    + '<div class="field"><label class="field-label">Hauteur géométrique Hg</label><div class="field-tip">Différence de niveau aspiration–refoulement</div><div class="field-row"><input type="number" id="pm-hg" value="15" step="1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Pertes de charge hf</label><div class="field-tip">Pertes linéaires + singulières totales</div><div class="field-row"><input type="number" id="pm-hf" value="4" step="0.5"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Pression résiduelle Hp</label><div class="field-tip">Pression requise au point de livraison (bar × 10,2)</div><div class="field-row"><input type="number" id="pm-hp" value="3" step="1"><span class="field-unit">m CE</span></div></div>'
    + '<div class="field"><label class="field-label">Rendement global η</label><div class="field-tip">Pompe + moteur · Petite pompe : 55–65% · Grande : 78–85%</div><div class="field-row"><input type="number" id="pm-eta" value="70" step="5"><span class="field-unit">%</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcPompeHMT()">Calculer HMT et puissance</button>'
    + '<div class="result-box" id="res-pm"><div class="result-value" id="rv-pm"></div><div class="result-detail" id="rd-pm"></div>'
    + '<div class="result-formula">HMT = Hg + hf + Hp · P_hyd = ρ×g×Q×HMT/3600 · P_abs = P_hyd/η</div>'
    + '<div class="result-src">📖 NF EN ISO 9906 · Karassik I. (2001). Pump Handbook</div></div>'
    + '</div></div></div>';
}

function renderCalcaNPSH() {
  document.getElementById('calca-content').innerHTML =
    '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">💧 NPSH — anti-cavitation</div>'
    + '<div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Condition anti-cavitation : NPSHd &gt; NPSHr + 0,5 m. Si non respecté : dommages rapides à la pompe.</span></div>'
    + '<div class="calc-zone">'
    + '<div class="field"><label class="field-label">Hauteur d\'aspiration Ha</label><div class="field-tip">Positif si pompe au-dessus du plan d\'eau, négatif si en dessous</div><div class="field-row"><input type="number" id="np-ha" value="3" step="0.5"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Pertes de charge aspiration hfa</label><div class="field-row"><input type="number" id="np-hfa" value="0.5" step="0.1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Température de l\'eau T</label><div class="field-tip">Influe sur la pression de vapeur Pv</div><div class="field-row"><input type="number" id="np-t" value="20" step="5"><span class="field-unit">°C</span></div></div>'
    + '<div class="field"><label class="field-label">NPSHr (donné par constructeur)</label><div class="field-row"><input type="number" id="np-npsh" value="3" step="0.5"><span class="field-unit">m</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcNPSH()">Vérifier la cavitation</button>'
    + '<div class="result-box" id="res-np"><div class="result-value" id="rv-np"></div><div class="result-detail" id="rd-np"></div>'
    + '<div class="result-formula">NPSHd = Patm/(ρg) − Ha − hfa − Pv(T)/(ρg) · Condition : NPSHd &gt; NPSHr + 0,5 m</div>'
    + '<div class="result-src">📖 NF EN ISO 9906 · Karassik I. (2001)</div></div>'
    + '</div></div></div>';
}

/* ─── FONCTIONS DE CALCUL AVANCÉ ─── */
function calcCoupBelier() {
  var L    = parseFloat(getV('cb-l')) || 500;
  var V    = parseFloat(getV('cb-v')) || 1.2;
  var a    = parseFloat(document.getElementById('cb-mat').value) || 400;
  var Pstat= parseFloat(getV('cb-ps')) || 4;
  var rho  = 1000;
  var g    = 9.81;
  var Tc   = (2 * L / a).toFixed(2);
  var dH   = (a * V / g).toFixed(1);
  var dP   = (rho * a * V / 100000).toFixed(2); // en bar
  var Pmax = (Pstat + parseFloat(dP)).toFixed(2);
  var Pmin = Math.max(0, Pstat - parseFloat(dP)).toFixed(2);
  var r = document.getElementById('res-cb'); r.classList.add('show');
  var safe = Pmax < 16;
  r.style.borderLeftColor = safe ? 'var(--c-ok)' : 'var(--c-danger)';
  document.getElementById('rv-cb').textContent = 'ΔP = ' + dP + ' bar | Tc = ' + Tc + ' s';
  document.getElementById('rd-cb').innerHTML =
    '• Célérité a = ' + a + ' m/s · Tc = 2×' + L + '/' + a + ' = ' + Tc + ' s<br>'
    + '• Surpression ΔH = ' + dH + ' m CE = ' + dP + ' bar<br>'
    + '• Pression maxi = ' + Pstat + ' + ' + dP + ' = ' + Pmax + ' bar<br>'
    + '• Pression mini = ' + Pmin + ' bar<br>'
    + '• Classe pression conseillée : PN ' + (parseFloat(Pmax) <= 10 ? '10' : parseFloat(Pmax) <= 16 ? '16' : '25') + '<br>'
    + '• ' + (safe ? '✓ Pression maxi compatible PN16' : '⚠ Pression maxi dépasse PN16 — prévoir protection (soupape, réservoir surpresseur)');
}

function calcShields() {
  var V    = parseFloat(getV('sh-v')) || 2.5;
  var rhos = parseFloat(getV('sh-rhos')) || 2650;
  var beta = parseFloat(getV('sh-beta')) || 0;
  var Fs   = parseFloat(getV('sh-fs')) || 1.3;
  var g    = 9.81; var rho = 1000; var thetac = 0.047;
  var betaRad = beta * Math.PI / 180;
  var dmin = (V * V * rho) / (2 * g * thetac * (rhos - rho) * Math.cos(betaRad) * Fs);
  var dmin_mm = (dmin * 1000).toFixed(0);
  var dmin_cm = (dmin * 100).toFixed(1);
  var r = document.getElementById('res-sh'); r.classList.add('show');
  r.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-sh').textContent = 'd min = ' + dmin_mm + ' mm (' + dmin_cm + ' cm)';
  document.getElementById('rd-sh').innerHTML =
    '• V = ' + V + ' m/s · ρs = ' + rhos + ' kg/m³ · β = ' + beta + '°<br>'
    + '• Fs = ' + Fs + ' · θc Shields = 0,047<br>'
    + '• Diamètre minimum des blocs : ' + dmin_mm + ' mm = ' + dmin_cm + ' cm<br>'
    + '• Classe granulométrique : ' + (dmin < 0.06 ? 'Sable' : dmin < 0.2 ? 'Gravier fin' : dmin < 0.63 ? 'Gravier grossier' : dmin < 2 ? 'Caillou' : 'Enrochement') + '<br>'
    + '• Note : pour une berge inclinée, utiliser β réel mesuré sur le terrain';
}

function calcPompeHMT() {
  var Q   = parseFloat(getV('pm-q')) || 50;
  var Hg  = parseFloat(getV('pm-hg')) || 15;
  var hf  = parseFloat(getV('pm-hf')) || 4;
  var Hp  = parseFloat(getV('pm-hp')) || 3;
  var eta = (parseFloat(getV('pm-eta')) || 70) / 100;
  var HMT = Hg + hf + Hp;
  var Phyd = (1000 * 9.81 * (Q / 3600) * HMT / 1000).toFixed(2);
  var Pabs = (parseFloat(Phyd) / eta).toFixed(2);
  var r = document.getElementById('res-pm'); r.classList.add('show');
  r.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-pm').textContent = 'HMT = ' + HMT.toFixed(1) + ' m CE | P_abs = ' + Pabs + ' kW';
  document.getElementById('rd-pm').innerHTML =
    '• HMT = ' + Hg + ' + ' + hf + ' + ' + Hp + ' = ' + HMT.toFixed(1) + ' m CE<br>'
    + '• HMT = ' + (HMT / 10.2).toFixed(2) + ' bar · 1 bar = 10,2 m CE<br>'
    + '• P hydraulique = ' + Phyd + ' kW<br>'
    + '• P absorbée (η = ' + (eta*100) + '%) = ' + Pabs + ' kW<br>'
    + '• Courant à 400V/cos φ=0,85 ≈ ' + (parseFloat(Pabs) / (1.732 * 0.4 * 0.85)).toFixed(1) + ' A<br>'
    + '• Puissance normalisée conseillée : ' + [0.37,0.55,0.75,1.1,1.5,2.2,3,4,5.5,7.5,11,15,18.5,22,30,37,45,55,75,90,110,132,160].find(function(p){return p>=parseFloat(Pabs);}) + ' kW';
}

function calcNPSH() {
  var Ha   = parseFloat(getV('np-ha')) || 3;
  var hfa  = parseFloat(getV('np-hfa')) || 0.5;
  var T    = parseFloat(getV('np-t')) || 20;
  var NPSHr= parseFloat(getV('np-npsh')) || 3;
  // Pression de vapeur selon T (formule Antoine simplifiée)
  var Pv = 0.0238 * Math.exp(0.0411 * T); // bar approx
  var PvMCE = Pv * 10.2; // m CE
  var Patm  = 10.33; // m CE
  var NPSHd = Patm - Ha - hfa - PvMCE;
  var marge  = NPSHd - NPSHr;
  var ok     = marge >= 0.5;
  var r = document.getElementById('res-np'); r.classList.add('show');
  r.style.borderLeftColor = ok ? 'var(--c-ok)' : 'var(--c-danger)';
  document.getElementById('rv-np').textContent = 'NPSHd = ' + NPSHd.toFixed(2) + ' m | Marge = ' + marge.toFixed(2) + ' m';
  document.getElementById('rd-np').innerHTML =
    '• Patm = ' + Patm + ' m CE · Ha = ' + Ha + ' m · hfa = ' + hfa + ' m<br>'
    + '• Pv(' + T + '°C) ≈ ' + Pv.toFixed(4) + ' bar = ' + PvMCE.toFixed(3) + ' m CE<br>'
    + '• NPSHd = ' + Patm + ' − ' + Ha + ' − ' + hfa + ' − ' + PvMCE.toFixed(2) + ' = ' + NPSHd.toFixed(2) + ' m<br>'
    + '• NPSHr constructeur = ' + NPSHr + ' m · Marge = ' + marge.toFixed(2) + ' m<br>'
    + '• ' + (ok ? '✓ Pas de risque de cavitation (marge ≥ 0,5 m)' : '⚠ RISQUE DE CAVITATION — réduire Ha ou augmenter NPSHr minimum');
}

function calcManningPartiel() {
  var D = parseFloat(getV('mp-d')) / 1000 || 0.3;
  var y = parseFloat(getV('mp-y')) / 1000 || 0.24;
  var K = parseFloat(getV('mp-k')) || 90;
  var I = parseFloat(getV('mp-i')) / 1000 || 0.003;
  if (y >= D) { alert('y doit être inférieure à D'); return; }
  var theta = 2 * Math.acos(1 - 2 * y / D);
  var A     = D * D / 8 * (theta - Math.sin(theta));
  var P     = D / 2 * theta;
  var Rh    = A / P;
  var Q     = K * A * Math.pow(Rh, 2/3) * Math.pow(I, 0.5);
  var V     = Q / A;
  var Fr    = V / Math.sqrt(9.81 * y);
  var r = document.getElementById('res-mp'); r.classList.add('show');
  r.style.borderLeftColor = V >= 0.6 ? 'var(--c-ok)' : 'var(--c-warn)';
  document.getElementById('rv-mp').textContent = 'Q = ' + (Q*1000).toFixed(2) + ' L/s · V = ' + V.toFixed(3) + ' m/s';
  document.getElementById('rd-mp').innerHTML =
    '• y/D = ' + (y/D*100).toFixed(1) + '% · θ = ' + (theta*180/Math.PI).toFixed(1) + '°<br>'
    + '• A = ' + A.toFixed(4) + ' m² · Rh = ' + (Rh*1000).toFixed(1) + ' mm<br>'
    + '• Fr = ' + Fr.toFixed(3) + ' → ' + (Fr < 1 ? 'Régime fluvial ✓' : 'Régime torrentiel ⚠') + '<br>'
    + '• Auto-curage : ' + (V >= 0.6 ? '✓ V ≥ 0,60 m/s' : '⚠ V < 0,60 m/s — risque de dépôts');
}

function calcLangelierAvance() {
  var pH = parseFloat(getV('il-ph')) || 7.4;
  var TH = parseFloat(getV('il-th')) || 25;
  var TAC= parseFloat(getV('il-tac')) || 20;
  var T  = parseFloat(getV('il-t')) || 15;
  var pCa    = -Math.log10(TH / 50 / 1000 / 100.09);
  var pAlc   = -Math.log10(TAC / 50 / 1000 / 61);
  var pK2pKs = 2.1 + (T - 25) * 0.019;
  var pHs    = pK2pKs + pCa + pAlc - 1.0;
  var IL     = (pH - pHs).toFixed(2);
  var r = document.getElementById('res-il'); r.classList.add('show');
  var type = parseFloat(IL) > 0.5 ? 'danger' : parseFloat(IL) < -0.5 ? 'warn' : 'ok';
  r.style.borderLeftColor = type === 'ok' ? 'var(--c-ok)' : type === 'warn' ? 'var(--c-warn)' : 'var(--c-danger)';
  document.getElementById('rv-il').textContent = 'pHs = ' + pHs.toFixed(2) + ' | IL = ' + IL;
  document.getElementById('rd-il').innerHTML =
    '• pH mesuré = ' + pH + ' · pHs = ' + pHs.toFixed(2) + '<br>'
    + '• IL = ' + IL + ' → ' + (parseFloat(IL) > 0.5 ? '⚠ Eau entartrante (dépôts CaCO₃)' : parseFloat(IL) < -0.5 ? '⚠ Eau agressive (corrosion canalisations)' : '✓ Eau équilibrée');
}
function renderCalcSuppl() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-aides)">
      <span class="mh-icon">📐</span>
      <div class="mh-title">Calculateurs complémentaires</div>
      <div class="mh-sub">Chloration · Réservoir AEP · Réseau séparatif · Méthode rationnelle · STEU</div>
      <div class="mh-tags"><span class="mh-tag">Chlore</span><span class="mh-tag">Réservoir</span><span class="mh-tag">STEU</span></div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🟡 Chloration — Dose et débit d'injection</div>
        <div class="calc-zone">
          <div class="field"><label class="field-label">Débit à traiter</label><div class="field-row"><input type="number" id="cl-q" value="80" step="5"><span class="field-unit">m³/h</span></div></div>
          <div class="field"><label class="field-label">Demande en chlore</label><div class="field-hint">Chlore consommé par la matière organique avant d'établir un résiduel.</div><div class="field-tip">💡 Eau de surface : 1–3 mg/L · Eau souterraine : 0,2–0,8 mg/L</div><div class="field-row"><input type="number" id="cl-dem" value="0.8" step="0.1"><span class="field-unit">mg/L</span></div></div>
          <div class="field"><label class="field-label">Résiduel libre souhaité</label><div class="field-tip">💡 NF EN 805 : 0,05–0,3 mg/L · Max légal : 0,5 mg/L</div><div class="field-row"><input type="number" id="cl-res" value="0.2" step="0.05"><span class="field-unit">mg/L</span></div></div>
          <div class="field"><label class="field-label">Concentration solution hypochlorite</label><div class="field-tip">💡 Eau de Javel 48° = 126 g/L · Javel 12° = 36 g/L</div><div class="field-row"><input type="number" id="cl-c" value="36" step="1"><span class="field-unit">g Cl₂/L</span></div></div>
          <button class="btn btn-primary" onclick="calcChlorationSuppl()">Calculer</button>
          <div class="result-box" id="res-cl">
            <div class="result-value" id="rv-cl"></div>
            <div class="result-detail" id="rd-cl"></div>
            <div class="result-formula">Dose totale = Demande + Résiduel · Q_inj = Dose × Q / Conc</div>
            <div class="result-src">📖 Arrêté 11/01/2007 · CSP art. R.1321-2</div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🏗️ Réservoir AEP — Volume et temps de séjour</div>
        <div class="calc-zone">
          <div class="field"><label class="field-label">Volume journalier distribué</label><div class="field-row"><input type="number" id="rv-j" value="500" step="50"><span class="field-unit">m³/j</span></div></div>
          <div class="field"><label class="field-label">Tranche de régulation</label><div class="field-tip">💡 30–40% du volume journalier</div><div class="field-row"><input type="number" id="rv-reg" value="35" step="5"><span class="field-unit">%</span></div></div>
          <div class="field"><label class="field-label">Réserve incendie</label><div class="field-tip">💡 Standard NFS 62-200 : 120 m³ minimum</div><div class="field-row"><input type="number" id="rv-inc" value="120" step="60"><span class="field-unit">m³</span></div></div>
          <button class="btn btn-primary" onclick="calcReservoirSuppl()">Calculer</button>
          <div class="result-box" id="res-rv">
            <div class="result-value" id="rv-r"></div>
            <div class="result-detail" id="rd-r"></div>
            <div class="result-formula">V = V_régulation + V_incendie + V_sécurité · Ts = V/Q_moy</div>
            <div class="result-src">📖 NF EN 805 · NF S 62-200 · Guide FNCCR</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-nav"></div>`;
}

function calcChlorationSuppl(){
  const q=parseFloat(document.getElementById('cl-q').value)||80;
  const dem=parseFloat(document.getElementById('cl-dem').value)||0.8;
  const res=parseFloat(document.getElementById('cl-res').value)||0.2;
  const conc=parseFloat(document.getElementById('cl-c').value)||36;
  const dose=dem+res;
  const qinj=(dose*q/conc).toFixed(2);
  const kgj=(dose*q*24/1000).toFixed(2);
  const rb=document.getElementById('res-cl'); rb.classList.add('show');
  rb.style.borderLeftColor=res>0.5?'var(--c-danger)':res>=0.05?'var(--c-ok)':'var(--c-warn)';
  document.getElementById('rv-cl').textContent=`Dose = ${dose.toFixed(2)} mg/L · Q injection = ${qinj} L/h`;
  document.getElementById('rd-cl').innerHTML=`• Demande = ${dem} mg/L · Résiduel = ${res} mg/L<br>• Débit injection : ${qinj} L/h = ${(parseFloat(qinj)*24).toFixed(0)} L/j<br>• Consommation = ${kgj} kg Cl₂/j<br>${res>0.5?'⚠ Résiduel > 0,5 mg/L : dépasse le max réglementaire':res>=0.05?'✓ Résiduel dans la plage recommandée (0,05–0,3 mg/L)':'⚠ Résiduel < 0,05 mg/L : protection insuffisante'}`;
}

function calcReservoirSuppl(){
  const vj=parseFloat(document.getElementById('rv-j').value)||500;
  const reg=parseFloat(document.getElementById('rv-reg').value)||35;
  const inc=parseFloat(document.getElementById('rv-inc').value)||120;
  const vreg=vj*reg/100;
  const vsec=vj*8/24;
  const vtot=vreg+inc+vsec;
  const ts=(vtot/vj*24).toFixed(1);
  const rb=document.getElementById('res-rv'); rb.classList.add('show');
  rb.style.borderLeftColor=parseFloat(ts)>48?'var(--c-warn)':'var(--c-ok)';
  document.getElementById('rv-r').textContent=`V total = ${vtot.toFixed(0)} m³ · Ts = ${ts} h`;
  document.getElementById('rd-r').innerHTML=`• Tranche régulation (${reg}%) = ${vreg.toFixed(0)} m³<br>• Réserve incendie = ${inc} m³ · Sécurité (8h) = ${vsec.toFixed(0)} m³<br>${parseFloat(ts)>48?'⚠ Ts > 48h : risque de stagnation et perte de chlore résiduel':'✓ Temps de séjour correct'}`;
}

/* ─── RENDER OUVRAGES AC & EP ─── */
function renderOuvrages() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  const ouvrages = [
    {ico:'🔵',name:'Regard de visite',sub:'Accès et inspection des collecteurs',color:'var(--c-ac)',colorl:'var(--c-ac-l)',specs:{'Espacement max':'50 m','Diamètre min':'1 000 mm (visite)','Norme':'NF EN 476 · CCTG Fasc. 70','Couvercle':'D400 (40 t) en zone carrossable'}},
    {ico:'🌊',name:'Déversoir d\'orage (DO)',sub:'Délestage réseau en temps de pluie',color:'var(--c-ac)',colorl:'var(--c-ac-l)',specs:{'Taux dilution min':'5–10','Autosurveillance':'Obligatoire si Q > 120 m³/h','Norme':'Arrêté 21/07/2015','Milieu récepteur':'Cours d\'eau ou bassin'}},
    {ico:'🏊',name:'Bassin de rétention pluviale',sub:'Stockage et régulation des eaux pluviales',color:'var(--c-ac)',colorl:'var(--c-ac-l)',specs:{'Vidange':'≤ 24h (réglementaire)','Débit de fuite':'1–3 L/s/ha','Norme':'Guide CERTU · Loi LEMA 2006','Entretien':'Curage sédiments 1–5 ans'}},
    {ico:'🔽',name:'Vanne PRV (réductrice de pression)',sub:'Protection réseau AEP · Pression constante aval',color:'var(--c-ep)',colorl:'var(--c-ep-l)',specs:{'Pression amont':'2–16 bar','Pression aval':'1–10 bar (réglable)','Norme':'NF EN 1567 · NF EN 805','Entretien':'Annuel (ressort, membrane)'}},
    {ico:'💎',name:'Osmose inverse',sub:'PFAS · Nitrates · Dessalement',color:'var(--c-ep)',colorl:'var(--c-ep-l)',specs:{'Rétention PFAS':'> 95%','Pression eau douce':'5–15 bar','Taux conversion':'60–80%','Norme':'Directive 2020/2184'}},
  ];
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-ac)">
      <span class="mh-icon">🔧</span>
      <div class="mh-title">Ouvrages AC & EP</div>
      <div class="mh-sub">Regards · Bassins · Déversoirs · PRV · OI · MBR · Sectorisation</div>
      <div class="mh-tags"><span class="mh-tag">Assainissement</span><span class="mh-tag">Eau potable</span><span class="mh-tag">Normes</span></div>
    </div>
    <div class="search-container"><div class="search-bar"><span class="search-ico">🔍</span><input type="text" placeholder="Rechercher un ouvrage…"></div></div>
    <div class="section-header">Ouvrages disponibles<span class="sh-count">${ouvrages.length} fiches</span></div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${ouvrages.map((o,i)=>`
      <div class="fiche-card" style="--cat-color:${o.color}" id="fo-${i}">
        <div class="fiche-stripe" style="background:${o.color}"></div>
        <div class="fiche-head" onclick="toggleFiche2(${i})">
          <div class="fiche-icon" style="background:${o.colorl}">${o.ico}</div>
          <div style="flex:1"><div class="fiche-name">${o.name}</div><div class="fiche-sub">${o.sub}</div></div>
          <span class="fiche-arrow" id="fo-a-${i}">›</span>
        </div>
        <div class="fiche-body" id="fo-b-${i}">
          <div class="kv-grid">${Object.entries(o.specs).map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}</div>
        </div>
      </div>`).join('')}
    </div>
    <div class="pb-nav"></div>`;
}
function toggleFiche2(i) {
  var b = document.getElementById('fo-b-' + i);
  var a = document.getElementById('fo-a-' + i);
  if (!b) return;
  var open = b.classList.toggle('open');
  if (a) { a.style.transform = open ? 'rotate(90deg)' : ''; a.style.transition = 'transform .2s'; }
}

/* ─── RENDER FORMATIONS SUPÉRIEURES ─── */
function renderFormations() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  const formations = [
    {ico:'💧',sigle:'BTS MDE',name:'BTS Métiers de l\'Eau',orga:'MEN · Lycées techniques',niveau:'Bac+2',color:'var(--c-ac)',desc:'Forme des techniciens en AEP, assainissement, STEU, contrôle qualité. Modules : hydraulique, traitement, instrumentation, réglementation, gestion.'},
    {ico:'🌊',sigle:'BTSA GEMEAU',name:'BTSA Gestion et Maîtrise de l\'Eau',orga:'Ministère Agriculture · Lycées agricoles',niveau:'Bac+2',color:'var(--c-anc)',desc:'Hydraulique agricole, ANC, milieux aquatiques, réglementation. 6 UE. Fort contenu terrain et SPANC.'},
    {ico:'🎓',sigle:'LP EAU',name:'Licence Pro Métiers de l\'Eau',orga:'Universités · IUT',niveau:'Bac+3',color:'var(--c-ep)',desc:'Spécialisation après BTS/BUT. Exploitation réseau, traitement avancé, milieux aquatiques, droit de l\'eau. Souvent en alternance.'},
    {ico:'🔬',sigle:'M2 EAU',name:'Master Sciences de l\'Eau',orga:'Universités · AgroParisTech · SupAgro',niveau:'Bac+5',color:'var(--c-aides)',desc:'Hydrologie, hydrogéologie, qualité des eaux, modélisation (MODFLOW). Theis/Cooper-Jacob, PFAS, NDWI. Débouche sur BRGM, bureaux d\'études, Agences.'},
    {ico:'🏛️',sigle:'ENGEES',name:'Ingénieur ENGEES',orga:'ENGEES Strasbourg',niveau:'Bac+5/6',color:'var(--c-form)',desc:'Seule école d\'ingénieur spécialisée eau. Saint-Venant, Bishop, marchés publics, changement climatique. Partenariats OFB, INRAE, Agences de l\'eau.'},
    {ico:'🏆',sigle:'MS EPA',name:'Mastère Spécialisé® EPA',orga:'ENGEES · Accréditation CGE',niveau:'Post-ingénieur',color:'var(--c-regl)',desc:'Formation d\'excellence post-ingénieur. PSE/HACCP, SDG6, tarification, coopération internationale. Référence nationale cadres du secteur eau.'},
  ];
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-form)">
      <span class="mh-icon">🏛️</span>
      <div class="mh-title">Formations supérieures eau</div>
      <div class="mh-sub">BTS MDE · BTSA GEMEAU · Licence Pro · Master · ENGEES · Mastère Spécialisé</div>
      <div class="mh-tags"><span class="mh-tag">Bac+2 à Bac+6</span><span class="mh-tag">8 formations</span><span class="mh-tag">QCM · Mémo</span></div>
    </div>
    <div class="section-header">Toutes les formations<span class="sh-count">${formations.length}</span></div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${formations.map(f=>`
      <div class="mod-list-card" style="--cat-color:${f.color}">
        <div class="mlc-icon">${f.ico}</div>
        <div class="mlc-body">
          <div style="font-size:10px;font-weight:800;color:${f.color};letter-spacing:.06em;text-transform:uppercase;margin-bottom:2px">${f.sigle}</div>
          <div class="mlc-name">${f.name}</div>
          <div class="mlc-sub">${f.orga}</div>
          <div style="font-size:11px;color:var(--c-text-3);margin-top:5px;line-height:1.6">${f.desc}</div>
          <div class="mlc-tags" style="margin-top:6px"><span class="mlc-tag">${f.niveau}</span></div>
        </div>
      </div>`).join('')}
    </div>
    <div class="pb-nav"></div>`;
}

/* ─── RENDER MATÉRIAUX ─── */
function renderMateriaux() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  const mats = [
    {ico:'🔵',name:'PVC assainissement (PVC-U)',sub:'NF EN 1401 · Réseau EU/EP gravitaire',color:'var(--c-ac)',colorl:'var(--c-ac-l)',avantages:['K = 90–100 : excellentes perf. hydrauliques','Léger, facile à poser, économique','Résistance chimique aux effluents domestiques'],inconvenients:['Fragile aux chocs à basse température','Sensible aux hydrocarbures concentrés'],specs:{'Norme':'NF EN 1401','DN courants':'100–400 mm','Strickler K':'90–100','Durée de vie':'≥ 50 ans'}},
    {ico:'🟤',name:'PEHD (Polyéthylène HD)',sub:'NF EN 13244 · Réseau sous pression AEP',color:'var(--c-ep)',colorl:'var(--c-ep-l)',avantages:['Soudable → tuyauterie continue sans joints','Très bonne résistance chimique','Souple : pose en courbe, forage dirigé'],inconvenients:['Soudage exige matériel et opérateur formé','Sensible aux UV si exposé'],specs:{'Norme':'NF EN 13244','Classes':'PE80 · PE100 · PE100-RC','PN courants':'PN6 à PN25','Durée de vie':'≥ 50 ans'}},
    {ico:'⚙️',name:'Fonte ductile (FD)',sub:'NF EN 545 · Grands diamètres sous pression',color:'var(--c-ref)',colorl:'var(--c-ref-l)',avantages:['Résistance mécanique exceptionnelle','Durée de vie > 100 ans','Joints anti-traction'],inconvenients:['Très lourd (DN300 ≈ 95 kg/m)','Coûteux · Délai approvisionnement long'],specs:{'Norme AEP':'NF EN 545','Norme EU':'NF EN 598','Strickler K':'100–130 neuf','Durée de vie':'> 100 ans'}},
    {ico:'⚠️',name:'Amiante-ciment (AC)',sub:'INTERDIT à neuf · EPI FFP3 obligatoire',color:'var(--c-nc)',colorl:'var(--c-nc-l)',avantages:['Aucun avantage · Matériau interdit'],inconvenients:['Interdit depuis Décret 96-1133 (1996)','Manipulation = risque fibres cancérogènes','Déchet dangereux → filière agréée obligatoire'],specs:{'Statut':'INTERDIT à neuf','EPI':'FFP3 + combinaison type 5','Entreprise':'SS4 certifiée obligatoire','Déchet':'Dangereux · Sac PEHD double'}},
  ];
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-mat)">
      <span class="mh-icon">🔩</span>
      <div class="mh-title">Matériaux & Équipements</div>
      <div class="mh-sub">PVC · PEHD · Fonte · Béton · Amiante-ciment · Pompes · Instrumentation · SCADA</div>
      <div class="mh-tags"><span class="mh-tag">NF EN</span><span class="mh-tag">Comparatif</span><span class="mh-tag">Normes</span></div>
    </div>
    <div style="padding:var(--s-2) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Tableau comparatif rapide</div>
        <div style="overflow-x:auto">
          <table style="width:100%;border-collapse:collapse;font-size:11px">
            <tr style="background:var(--c-mat);color:#fff"><th style="padding:6px 8px;text-align:left">Matériau</th><th style="padding:6px 8px;text-align:center">K</th><th style="padding:6px 8px;text-align:center">Durée vie</th><th style="padding:6px 8px;text-align:center">Statut</th></tr>
            ${[['PVC-U','90–100','≥ 50 ans','✓','var(--c-ok)'],['PEHD','90–100','≥ 50 ans','✓','var(--c-ok)'],['Fonte ductile','100–130','> 100 ans','✓','var(--c-ok)'],['Grès cérame','70–90','> 100 ans','✓','var(--c-ok)'],['Béton armé','60–80','50–80 ans','✓','var(--c-ok)'],['Amiante-ciment','—','INTERDIT','⛔','var(--c-danger)']].map(([m,k,d,s,c])=>`
            <tr style="border-bottom:1px solid var(--c-border)">
              <td style="padding:6px 8px;font-weight:600">${m}</td>
              <td style="padding:6px 8px;text-align:center;color:var(--c-text-3)">${k}</td>
              <td style="padding:6px 8px;text-align:center;color:var(--c-text-3)">${d}</td>
              <td style="padding:6px 8px;text-align:center;color:${c};font-weight:700">${s}</td>
            </tr>`).join('')}
          </table>
        </div>
      </div>
    </div>
    <div class="section-header" style="margin-top:var(--s-3)">Fiches matériaux<span class="sh-count">${mats.length}</span></div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${mats.map((m,i)=>`
      <div class="fiche-card" style="--cat-color:${m.color}" id="fm-${i}">
        <div class="fiche-stripe" style="background:${m.color}"></div>
        <div class="fiche-head" onclick="toggleFiche3(${i})">
          <div class="fiche-icon" style="background:${m.colorl}">${m.ico}</div>
          <div style="flex:1"><div class="fiche-name">${m.name}</div><div class="fiche-sub">${m.sub}</div></div>
          <span class="fiche-arrow" id="fm-a-${i}">›</span>
        </div>
        <div class="fiche-body" id="fm-b-${i}">
          <div class="kv-grid" style="margin-bottom:var(--s-2)">${Object.entries(m.specs).map(([k,v])=>`<div class="kv-item"><div class="kv-key">${k}</div><div class="kv-val">${v}</div></div>`).join('')}</div>
          <div style="display:flex;flex-direction:column;gap:4px">
            ${m.avantages.map(a=>`<div class="alert ok" style="font-size:10px"><span class="alert-icon">✓</span><span>${a}</span></div>`).join('')}
            ${m.inconvenients.map(a=>`<div class="alert ${a.includes('INTERDIT')||a.includes('danger')?'danger':'warn'}" style="font-size:10px"><span class="alert-icon">⚠</span><span>${a}</span></div>`).join('')}
          </div>
        </div>
      </div>`).join('')}
    </div>
    <div class="pb-nav"></div>`;
}
function toggleFiche3(i) {
  var b = document.getElementById('fm-b-' + i);
  var a = document.getElementById('fm-a-' + i);
  if (!b) return;
  var open = b.classList.toggle('open');
  if (a) { a.style.transform = open ? 'rotate(90deg)' : ''; a.style.transition = 'transform .2s'; }
}

function openPDF() { window.print(); }

/* ─── ASSAINISSEMENT COLLECTIF ─── */
function renderAC() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-ac)">
      <span class="mh-icon">🔧</span>
      <div class="mh-title">Assainissement collectif</div>
      <div class="mh-sub">Réseaux EU/EP · Calculateurs · Ouvrages · Dimensionnement</div>
      <div class="mh-tags"><span class="mh-tag">Réseaux EU</span><span class="mh-tag">Eaux pluviales</span><span class="mh-tag">Calculs</span></div>
    </div>
    <div class="section-header">Calculateurs</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'⚡',name:'Calculateurs principaux',sub:'Manning-Strickler · FTE · EP · Charges',id:'calc'},
        {ico:'🧮',name:'Calculateurs avancés',sub:'Manning partiel · Coup de bélier · NPSH · Shields',id:'calca'},
        {ico:'📐',name:'Calculateurs complémentaires',sub:'Chlore · Réservoir · STEU',id:'calcs'},
        {ico:'🔄',name:'Convertisseur d\'unités',sub:'Débit · Pression · Concentration',id:'conv'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-ac)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-ac-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="section-header">Ouvrages & référence</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'🔧',name:'Ouvrages AC & EP',sub:'Regards · Bassins · MBR · PRV',id:'ouv'},
        {ico:'📋',name:'Réglementation',sub:'Arrêtés · DCE · Normes',id:'regl'},
        {ico:'🔩',name:'Matériaux & Équipements',sub:'PVC · Fonte · Pompes · SCADA',id:'mat'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-ac)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-ac-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="pb-nav"></div>`;
}

/* ─── EAU POTABLE ─── */
function renderEP() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-ep)">
      <span class="mh-icon">💧</span>
      <div class="mh-title">Eau potable</div>
      <div class="mh-sub">Potabilisation · Normes · Traitement · Réseau AEP</div>
      <div class="mh-tags"><span class="mh-tag">Normes</span><span class="mh-tag">Traitement</span><span class="mh-tag">AEP</span></div>
    </div>
    <div class="section-header">Outils & calculs</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'📐',name:'Calculateurs eau potable',sub:'Chloration · Réservoir · Langelier',id:'calcs'},
        {ico:'🔄',name:'Convertisseur d\'unités',sub:'mg/L · m³/h · bar',id:'conv'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-ep)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-ep-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="section-header">Référence & réglementation</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'📋',name:'Réglementation eau potable',sub:'Code santé · Limites qualité · UE',id:'regl'},
        {ico:'📖',name:'Glossaire & formules',sub:'Termes · Paramètres physico-chimiques',id:'gloss'},
        {ico:'🔩',name:'Matériaux & équipements AEP',sub:'Canalisations · Pompes · Compteurs',id:'mat'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-ep)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-ep-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="pb-nav"></div>`;
}

/* ─── MILIEU NATUREL ─── */
function renderRiv() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-riv)">
      <span class="mh-icon">🌊</span>
      <div class="mh-title">Milieu naturel</div>
      <div class="mh-sub">Rivières · Hydrologie · Crues · Hydrogéologie</div>
      <div class="mh-tags"><span class="mh-tag">Hydrologie</span><span class="mh-tag">Crues</span><span class="mh-tag">Nappes</span></div>
    </div>
    <div class="section-header">Calculateurs</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'🌊',name:'Hydraulique à surface libre',sub:'Manning · Froude · Régime fluvial',id:'calc'},
        {ico:'🧮',name:'Calculateurs avancés',sub:'Manning partiel · Shields · Coup de bélier',id:'calca'},
        {ico:'🔄',name:'Convertisseur d\'unités',sub:'m³/s · m³/h · L/s',id:'conv'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-riv)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-riv-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="section-header">Référence</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'📋',name:'Réglementation milieu naturel',sub:'Police de l\'eau · IOTA · DCE',id:'regl'},
        {ico:'📖',name:'Glossaire hydrologie',sub:'Termes · Formules · Débits',id:'gloss'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-riv)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-riv-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="pb-nav"></div>`;
}

