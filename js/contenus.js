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
  if (!checkCalcLimit()) return;
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
  if (!checkCalcLimit()) return;
  const dn = parseFloat(getV('c-dn'))||300;
  const ks = parseFloat(getV('c-ks'))||90;
  const ip = parseFloat(getV('c-ip'))||3;
  const D = dn/1000, I = ip/1000;
  const A = Math.PI*D*D/4, Rh = D/4;
  const Q = ks*A*Math.pow(Rh,2/3)*Math.pow(I,0.5);
  const V = Q/A;
  const pratique = typeof _isPratique === 'function' && _isPratique();
  const res = document.getElementById('res-mann');
  res.classList.add('show');
  var unitBadge = '<span class="unit-badge">' + (pratique ? 'Pratique' : 'SI') + '</span>';
  var qDisplay = pratique
    ? 'Q = ' + (Q*3600).toFixed(2) + ' m³/h = ' + (Q*1000).toFixed(2) + ' L/s'
    : 'Q = ' + (Q*1000).toFixed(2) + ' L/s = ' + Q.toFixed(5) + ' m³/s';
  document.getElementById('rv-mn').innerHTML = qDisplay + unitBadge;
  document.getElementById('rd-mn').innerHTML = `• DN = ${dn} mm · K = ${ks} · I = ${ip}‰<br>• A = ${A.toFixed(4)} m² · Rh = ${(Rh*1000).toFixed(0)} mm<br>• V pleine section = ${V.toFixed(3)} m/s ${V>=0.6?'✓ Auto-curage':'⚠ < 0,6 m/s → risque dépôts'}`;
  res.style.borderLeftColor = V>=0.6?'var(--c-ok)':'var(--c-warn)';
  setTimeout(function() { _drawManningChart(dn, ks, I); }, 50);
}

function _drawManningChart(dnRef, ks, I) {
  var res = document.getElementById('res-mann');
  if (!res) return;
  var existing = document.getElementById('manning-chart-wrap');
  if (existing) existing.remove();
  var DNS = [150, 200, 250, 300, 400, 500, 600, 800];
  var Qs = DNS.map(function(dn) {
    var d = dn/1000, A = Math.PI*d*d/4, Rh = d/4;
    return ks * A * Math.pow(Rh, 2/3) * Math.pow(I, 0.5) * 1000;
  });
  var wrap = document.createElement('div');
  wrap.id = 'manning-chart-wrap';
  wrap.className = 'chart-wrap';
  wrap.innerHTML = '<div class="chart-title">📊 Débit pleine section par DN (K=' + ks + ', I=' + (I*1000).toFixed(1) + '‰) — L/s</div><canvas id="manning-canvas" height="120" style="width:100%"></canvas>';
  res.appendChild(wrap);
  var canvas = document.getElementById('manning-canvas');
  var rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = Math.max(rect.width || 280, 280);
  var ctx = canvas.getContext('2d');
  var w = canvas.width, h = canvas.height;
  var pad = {l:8, r:8, t:6, b:20};
  var n = DNS.length;
  var bw = Math.floor((w - pad.l - pad.r) / n) - 3;
  var maxQ = Math.max.apply(null, Qs);
  var chartH = h - pad.t - pad.b;
  ctx.clearRect(0, 0, w, h);
  DNS.forEach(function(dn, i) {
    var q = Qs[i];
    var bh = Math.max(2, chartH * q / maxQ);
    var x = pad.l + i * ((w - pad.l - pad.r) / n) + 1;
    var y = h - pad.b - bh;
    var isActive = dn === dnRef;
    ctx.fillStyle = isActive ? '#0A7460' : '#BDD8D0';
    if (ctx.roundRect) { ctx.beginPath(); ctx.roundRect(x, y, bw, bh, [3,3,0,0]); ctx.fill(); }
    else { ctx.fillRect(x, y, bw, bh); }
    ctx.fillStyle = isActive ? '#065A48' : '#8A9890';
    ctx.font = (isActive ? 'bold ' : '') + '9px Outfit,sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(dn, x + bw/2, h - pad.b + 13);
    if (bh > 16) {
      ctx.fillStyle = '#fff';
      ctx.font = '8px Outfit,sans-serif';
      ctx.fillText(q.toFixed(0), x + bw/2, y + 11);
    }
  });
}

function calcFTE() {
  if (!checkCalcLimit()) return;
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

/* ─── HUB CALCULATEURS ─── */
function renderCalcHub() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-ac)">
      <button class="mh-back-btn" onclick="goHome()">‹ Accueil</button>
      <span class="mh-icon">🔢</span>
      <div class="mh-title">Calculateurs</div>
      <div class="mh-sub">Hydraulique · Eau potable · Assainissement · STEU · Unités</div>
      <div class="mh-tags"><span class="mh-tag">Manning</span><span class="mh-tag">FTE</span><span class="mh-tag">Bélier</span><span class="mh-tag">Chloration</span></div>
    </div>
    <div class="section-header">Calculs hydrauliques</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'⚡',name:'Calculateurs principaux',sub:'Manning-Strickler · Darcy-Weisbach · FTE · Charges · Q/S',id:'calc'},
        {ico:'🧮',name:'Calculateurs avancés',sub:'Manning partiel · Coup de bélier · NPSH · Shields · Passes à poissons',id:'calca'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-ac)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-ac-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="section-header">Eau potable & assainissement</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'📐',name:'Calculateurs complémentaires',sub:'Chloration · Réservoir · STEU · Langelier · Pompe HMT',id:'calcs'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-ac)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-ac-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="section-header">Outils</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'🔄',name:'Convertisseur d\'unités',sub:'Débit · Pression · Concentration · Surface · Température',id:'conv'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-ac)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-ac-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="pb-nav"></div>`;
}

/* ─── RENDER CONVERTISSEUR ─── */
function renderConv() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  const CONVS = {
    debit:{ name:'Débit', units:[{id:'ls',l:'L/s',f:v=>v},{id:'m3h',l:'m³/h',f:v=>v*3.6},{id:'m3j',l:'m³/j',f:v=>v*86.4},{id:'lmin',l:'L/min',f:v=>v*60},{id:'m3s',l:'m³/s',f:v=>v/1000},{id:'galmin',l:'gal US/min',f:v=>v*15.85},{id:'lh',l:'L/h',f:v=>v*3600}], toLs:[v=>v,v=>v/3.6,v=>v/86.4,v=>v/60,v=>v*1000,v=>v/15.85,v=>v/3600], fromLs:[v=>v,v=>v*3.6,v=>v*86.4,v=>v*60,v=>v/1000,v=>v*15.85,v=>v*3600], ref:'1 L/s = 3,6 m³/h = 86,4 m³/j = 60 L/min' },
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
  loadModuleTabs(['Manning partiel','Coup de bélier','Langelier','Shields','Pompe HMT','NPSH','Darcy-Weisbach','Manning naturel'], 'switchCalcaTab');
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
  else if (idx === 6) renderCalcaDarcy();
  else if (idx === 7) renderCalcaManningNat();
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
  if (!checkCalcLimit()) return;
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
  if (!checkCalcLimit()) return;
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
  if (!checkCalcLimit()) return;
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
  if (!checkCalcLimit()) return;
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
  if (!checkCalcLimit()) return;
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
  if (!checkCalcLimit()) return;
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
/* ═══════════════════════════════════════════════════
   DARCY-WEISBACH + COLEBROOK-WHITE
   3 modes : calculer hf / D / Q
   Régime laminaire (f=64/Re), transitoire, turbulent
   Colebrook-White : itération à point fixe sur x=1/√f
═══════════════════════════════════════════════════ */
function renderCalcaDarcy() {
  var z = document.getElementById('calca-content');
  if (!z) return;
  z.innerHTML =
    '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🔧 Darcy-Weisbach — Colebrook-White</div>'
    + '<div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Formule universelle pour conduites sous pression (AEP, pompage). Valide pour tout régime. Colebrook-White résout f par itération. Comparaison avec Hazen-Williams affichée si applicable (T ≤ 30°C, turbulent).</span></div>'
    + '<div class="field"><label class="field-label">Mode de calcul</label>'
    + '<select id="dw-mode" class="field-inp" onchange="dwToggleMode()">'
    + '<option value="0">Calculer hf — perte de charge (Q, D, L connus)</option>'
    + '<option value="1">Calculer D — diamètre nécessaire (Q, hf, L connus)</option>'
    + '<option value="2">Calculer Q — débit disponible (D, hf, L connus)</option>'
    + '</select></div>'
    + '<div id="dw-fq" class="field"><label class="field-label">Débit Q</label>'
    + '<div class="field-row"><input type="number" id="dw-q" value="15" step="0.5" min="0.01"><span class="field-unit">L/s</span></div></div>'
    + '<div id="dw-fd" class="field"><label class="field-label">Diamètre intérieur D</label>'
    + '<div class="field-tip">DN 100 ≈ 103 mm · DN 150 ≈ 155 mm · DN 200 ≈ 204 mm · DN 300 ≈ 309 mm (PEHD PE100)</div>'
    + '<div class="field-row"><input type="number" id="dw-d" value="100" step="1" min="1"><span class="field-unit">mm</span></div></div>'
    + '<div class="field"><label class="field-label">Longueur L</label>'
    + '<div class="field-row"><input type="number" id="dw-l" value="250" step="10" min="0.1"><span class="field-unit">m</span></div></div>'
    + '<div id="dw-fhf" class="field" style="display:none"><label class="field-label">Perte de charge hf <em>(modes D et Q)</em></label>'
    + '<div class="field-row"><input type="number" id="dw-hf" value="3" step="0.1" min="0.001"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Matériau — rugosité absolue ε</label>'
    + '<select id="dw-mat" class="field-inp">'
    + '<option value="7e-6">PEHD / PVC neuf (ε = 0,007 mm)</option>'
    + '<option value="2e-5">PVC vieilli (ε = 0,02 mm)</option>'
    + '<option value="1e-4" selected>Fonte ductile revêtue (ε = 0,10 mm)</option>'
    + '<option value="2.5e-4">Fonte ductile vieillie (ε = 0,25 mm)</option>'
    + '<option value="5e-4">Acier soudé (ε = 0,50 mm)</option>'
    + '<option value="3e-4">Béton lisse (ε = 0,30 mm)</option>'
    + '<option value="1.5e-3">Béton rugueux (ε = 1,5 mm)</option>'
    + '</select></div>'
    + '<div class="field"><label class="field-label">Température de l\'eau T</label>'
    + '<div class="field-tip">Influe sur la viscosité cinématique ν — eau à 15°C : ν ≈ 1,14×10⁻⁶ m²/s</div>'
    + '<div class="field-row"><input type="number" id="dw-t" value="15" step="5" min="0" max="100"><span class="field-unit">°C</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcDarcyWeisbach()">Calculer</button>'
    + '<div class="result-box" id="res-dw"><div class="result-value" id="rv-dw"></div><div class="result-detail" id="rd-dw"></div>'
    + '<div class="result-formula">hf = f × L/D × V²/(2g) · 1/√f = −2 log₁₀(ε/3,7D + 2,51/(Re√f)) [Colebrook-White]</div>'
    + '<div class="result-src">📖 Darcy H. (1857) · Weisbach J. (1845) · Colebrook C.F. &amp; White C.M. (1939) · Swamee &amp; Jain (1976)</div></div>'
    + '</div></div></div>'
    + '<div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Viscosité cinématique ν de l\'eau</div>'
    + '<div class="kv-grid">'
    + [['0°C','1,787×10⁻⁶'],['5°C','1,518×10⁻⁶'],['10°C','1,307×10⁻⁶'],['15°C','1,139×10⁻⁶'],['20°C','1,004×10⁻⁶'],['25°C','0,893×10⁻⁶'],['30°C','0,801×10⁻⁶'],['40°C','0,658×10⁻⁶']].map(function(r){return '<div class="kv-item"><div class="kv-key">'+r[0]+'</div><div class="kv-val">'+r[1]+' m²/s</div></div>';}).join('')
    + '</div></div></div>'
    + '<div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Diagramme de Moody — repères</div>'
    + '<div class="kv-grid">'
    + [['Re < 2 000','Laminaire · f = 64/Re · indépendant de ε'],['2 000–4 000','Zone de transition · instable · non fiable'],['4 000–10⁵','Turbulent lisse (Blasius) · f ≈ 0,316/Re^0,25'],['> 10⁵','Turbulent rugueux · f tend vers constante f(ε/D)'],['Re → ∞','Pleinement rugueux · 1/√f = −2 log(ε/3,7D)']].map(function(r){return '<div class="kv-item full"><div class="kv-key">'+r[0]+'</div><div class="kv-val">'+r[1]+'</div></div>';}).join('')
    + '</div></div></div>';
}

function dwToggleMode() {
  var mode = parseInt((document.getElementById('dw-mode') || {}).value || 0);
  var fhf = document.getElementById('dw-fhf');
  var fd  = document.getElementById('dw-fd');
  var fq  = document.getElementById('dw-fq');
  if (!fhf) return;
  fhf.style.display = mode === 0 ? 'none' : '';
  fd.style.display  = mode === 1 ? 'none' : '';
  fq.style.display  = mode === 2 ? 'none' : '';
}

function calcDarcyWeisbach() {
  if (!checkCalcLimit()) return;
  var mode = parseInt(document.getElementById('dw-mode').value);
  var T   = parseFloat(document.getElementById('dw-t').value)  || 15;
  var ep  = parseFloat(document.getElementById('dw-mat').value);
  var L   = parseFloat(document.getElementById('dw-l').value)  || 250;
  var g   = 9.81;

  // Viscosité cinématique (Poiseuille, m²/s)
  var nu = 1.792e-6 / (1 + 0.0337*T + 0.000221*T*T);

  var Q, D, hf, Re, f, V, A;

  if (mode === 0) {
    Q = (parseFloat(document.getElementById('dw-q').value) || 15) / 1000;
    D = (parseFloat(document.getElementById('dw-d').value) || 100) / 1000;
    A = Math.PI * D * D / 4;
    V = Q / A;
    Re = V * D / nu;
    f  = _dwFriction(Re, ep, D);
    hf = f * (L / D) * V * V / (2 * g);

  } else if (mode === 1) {
    Q   = (parseFloat(document.getElementById('dw-q').value) || 15) / 1000;
    hf  = parseFloat(document.getElementById('dw-hf').value) || 3;
    var S1 = hf / L;
    // Initialisation par Swamee-Jain explicite en D
    var t1 = Math.pow(ep, 1.25) * Math.pow(L * Q*Q / (g * hf), 4.75);
    var t2 = nu * Math.pow(Q, 9.4) * Math.pow(L / (g * hf), 5.2);
    D = 0.66 * Math.pow(t1 + t2, 0.04);
    if (!isFinite(D) || D <= 0) D = 0.1;
    // Itération : D^5 = f × 8 × Q² / (π² × g × S)
    for (var it = 0; it < 50; it++) {
      A  = Math.PI * D * D / 4;
      V  = Q / A;
      Re = V * D / nu;
      f  = _dwFriction(Re, ep, D);
      var D_new = Math.pow(f * 8 * Q*Q / (Math.PI*Math.PI * g * S1), 0.2);
      if (!isFinite(D_new) || D_new <= 0) break;
      if (Math.abs(D_new - D) < 1e-7) { D = D_new; break; }
      D = D_new;
    }
    A  = Math.PI * D * D / 4;
    V  = Q / A;
    Re = V * D / nu;
    f  = _dwFriction(Re, ep, D);
    hf = f * (L / D) * V * V / (2 * g);

  } else {
    D   = (parseFloat(document.getElementById('dw-d').value) || 100) / 1000;
    hf  = parseFloat(document.getElementById('dw-hf').value) || 3;
    var S2 = hf / L;
    // Formule explicite DW pour V (turbulent)
    var sq  = Math.sqrt(2 * g * D * S2);
    var arg0 = ep / (3.7 * D) + 2.51 * nu / (D * sq);
    if (arg0 > 0) {
      V = -2 * sq * Math.log10(arg0);
    } else {
      V = 0;
    }
    // Régime laminaire : vérifier V > 0 et Re < 2000
    if (V <= 0) {
      // Laminaire : V = g × D² × S / (32ν)
      V = g * D * D * S2 / (32 * nu);
    }
    Q  = V * Math.PI * D * D / 4;
    Re = V * D / nu;
    f  = _dwFriction(Re, ep, D);
    // Recalc V avec f connu pour cohérence
    V  = Math.sqrt(2 * g * D * hf / (f * L));
    Q  = V * Math.PI * D * D / 4;
    Re = V * D / nu;
  }

  if (!isFinite(V) || V < 0 || !isFinite(hf)) {
    var rb = document.getElementById('res-dw'); rb.classList.add('show');
    rb.style.borderLeftColor = 'var(--c-danger)';
    document.getElementById('rv-dw').textContent = 'Résultat non calculable — vérifier les paramètres';
    document.getElementById('rd-dw').innerHTML = '• Vérifier que hf > 0, Q > 0, D > 0, L > 0';
    return;
  }

  var Qls  = (Q * 1000).toFixed(3);
  var Qm3h = (Q * 3600).toFixed(2);
  var Dmm  = (D * 1000).toFixed(1);
  var S    = hf / L;

  var regime, regClass;
  if (Re < 2000) { regime = 'Laminaire (Re < 2 000) — f = 64/Re'; regClass = 'ok'; }
  else if (Re < 4000) { regime = 'Transitoire (2 000 ≤ Re < 4 000) — résultat instable'; regClass = 'warn'; }
  else { regime = 'Turbulent (Re ≥ 4 000) — Colebrook-White itératif'; regClass = 'ok'; }

  var vOk = V >= 0.5 && V <= 2.5;
  var rb = document.getElementById('res-dw');
  rb.classList.add('show');
  rb.style.borderLeftColor = (regClass === 'warn' || !vOk) ? 'var(--c-warn)' : 'var(--c-ok)';

  var mainVal = mode === 0
    ? 'hf = ' + hf.toFixed(3) + ' m  ·  gradient = ' + (S*1000).toFixed(2) + ' ‰'
    : mode === 1
    ? 'D = ' + Dmm + ' mm  ·  DN conseillé : ' + _dwNormDN(D*1000)
    : 'Q = ' + Qls + ' L/s  =  ' + Qm3h + ' m³/h';

  document.getElementById('rv-dw').textContent = mainVal;

  // Comparaison Hazen-Williams (turbulent AEP, T ≤ 30°C)
  var hwLine = '';
  if (Re >= 4000 && T <= 30 && mode !== 2) {
    // C Hazen-Williams approx selon ε
    var hwC = ep <= 7e-6 ? 150 : ep <= 2e-5 ? 140 : ep <= 1e-4 ? 130 : ep <= 2.5e-4 ? 110 : ep <= 5e-4 ? 100 : 80;
    var Rh = D / 4;
    var S_hw = Math.pow(V / (0.8492 * hwC * Math.pow(Rh, 0.63)), 1/0.54);
    var hf_hw = S_hw * L;
    var ecart = ((hf_hw - hf) / hf * 100).toFixed(1);
    hwLine = '<br>• Hazen-Williams (C≈' + hwC + ') → hf = ' + hf_hw.toFixed(3) + ' m · écart = ' + ecart + '% vs DW'
           + (Math.abs(parseFloat(ecart)) > 15 ? ' ⚠ Écart significatif — DW est la référence' : ' ✓ Résultats cohérents');
  }

  document.getElementById('rd-dw').innerHTML =
    '• Q = ' + Qls + ' L/s = ' + Qm3h + ' m³/h  ·  D = ' + Dmm + ' mm  ·  L = ' + L + ' m<br>'
    + '• V = ' + V.toFixed(4) + ' m/s  ·  ν(' + T + '°C) = ' + (nu*1e6).toFixed(4) + '×10⁻⁶ m²/s<br>'
    + '• Re = ' + Math.round(Re).toLocaleString('fr-FR') + ' → ' + regime + '<br>'
    + '• f (Darcy) = ' + f.toFixed(6) + '  ·  ε/D = ' + (ep/D*1000).toFixed(4) + '‰<br>'
    + '• hf = ' + hf.toFixed(4) + ' m sur ' + L + ' m  ·  gradient S = ' + (S*1000).toFixed(3) + ' ‰'
    + (mode === 1 ? '<br>• D hydraulique = ' + Dmm + ' mm → DN normalisé : ' + _dwNormDN(D*1000) : '')
    + hwLine + '<br>'
    + (Re < 4000 ? '⚠ Régime transitoire — résultat incertain, éviter cette plage de fonctionnement'
    : V < 0.5 ? '⚠ V < 0,5 m/s — risque de dépôts (EU) ou désinfection insuffisante (AEP)'
    : V > 2.5 ? '⚠ V > 2,5 m/s — risque d\'érosion, coups de bélier, bruit'
    : '✓ Vitesse dans la plage recommandée (0,5–2,5 m/s)');
}

function _dwFriction(Re, ep, D) {
  if (Re <= 0) return 0.02;
  if (Re < 2000) return 64 / Re;
  if (Re < 4000) {
    var fL = 64 / 2000;
    var fT = _dwColebrook(4000, ep, D);
    var t  = (Re - 2000) / 2000;
    return fL * (1 - t) + fT * t;
  }
  return _dwColebrook(Re, ep, D);
}

function _dwColebrook(Re, ep, D) {
  var epsD = ep / D;
  // Initialisation Swamee-Jain (explicit)
  var f0 = 0.25 / Math.pow(Math.log10(epsD/3.7 + 5.74/Math.pow(Re, 0.9)), 2);
  if (!isFinite(f0) || f0 <= 0) f0 = 0.02;
  // Itération à point fixe sur x = 1/√f
  var x = 1 / Math.sqrt(f0);
  for (var i = 0; i < 60; i++) {
    var arg = epsD / 3.7 + 2.51 / (Re * x);
    if (arg <= 0) break;
    var xn = -2 * Math.log10(arg);
    if (Math.abs(xn - x) < 1e-10) { x = xn; break; }
    x = xn;
  }
  var f = 1 / (x * x);
  return (isFinite(f) && f > 0) ? f : f0;
}

function _dwNormDN(Dmm) {
  var dns = [20,25,32,40,50,63,80,100,125,150,200,250,300,350,400,500,600,700,800,900,1000,1200,1400,1600];
  for (var i = 0; i < dns.length; i++) {
    if (dns[i] >= Math.ceil(Dmm)) return 'DN ' + dns[i];
  }
  return 'DN ' + (Math.ceil(Dmm/100)*100);
}

/* ═══════════════════════════════════════════════════
   MANNING-STRICKLER — SECTION NATURELLE (TRAPÉZOÏDE)
   Modes : calculer Q / calculer hauteur normale h
   Nombre de Froude, régime fluvial/torrentiel
═══════════════════════════════════════════════════ */
function renderCalcaManningNat() {
  var z = document.getElementById('calca-content');
  if (!z) return;
  z.innerHTML =
    '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🏞️ Manning-Strickler — section naturelle</div>'
    + '<div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Section trapézoïdale. m=0 → rectangulaire · b=0 → triangulaire. Calcule le débit (h connu) ou la hauteur normale (Q connu). Affiche le nombre de Froude et le régime hydraulique.</span></div>'
    + '<div class="field"><label class="field-label">Mode</label>'
    + '<select id="mn-mode" class="field-inp" onchange="mnToggleMode()">'
    + '<option value="0">Calculer Q — débit (h connu)</option>'
    + '<option value="1">Calculer h — hauteur normale (Q connu)</option>'
    + '</select></div>'
    + '<div class="field"><label class="field-label">Largeur au radier b</label>'
    + '<div class="field-tip">b = 0 pour section triangulaire pure · b > 0 rectangulaire ou trapézoïdale · "radier" = fond plat du canal</div>'
    + '<div class="field-row"><input type="number" id="mn-b" value="3" step="0.5" min="0"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Talus m (H:V)</label>'
    + '<div class="field-tip">m = 0 vertical · m = 1 talus 45° · m = 1,5 (3/2) · m = 2 pente douce</div>'
    + '<div class="field-row"><input type="number" id="mn-m" value="1.5" step="0.5" min="0"><span class="field-unit">H:V</span></div></div>'
    + '<div class="field"><label class="field-label">Coefficient de Strickler K</label>'
    + '<div class="field-tip">Canal béton lisse : 70–80 · Canal béton ordinaire : 60–70 · Fossé engazonné : 25–35 · Rivière naturelle propre : 35–45 · Lit rugueux : 15–25</div>'
    + '<div class="field-row"><input type="number" id="mn-k" value="40" step="5" min="1"><span class="field-unit">m^(1/3)/s</span></div></div>'
    + '<div class="field"><label class="field-label">Pente I</label>'
    + '<div class="field-row"><input type="number" id="mn-i" value="2" step="0.5" min="0.01"><span class="field-unit">‰</span></div></div>'
    + '<div id="mn-fh" class="field"><label class="field-label">Hauteur d\'eau h</label>'
    + '<div class="field-row"><input type="number" id="mn-h" value="1.2" step="0.1" min="0.01"><span class="field-unit">m</span></div></div>'
    + '<div id="mn-fq" class="field" style="display:none"><label class="field-label">Débit Q</label>'
    + '<div class="field-row"><input type="number" id="mn-q" value="15" step="1" min="0.001"><span class="field-unit">m³/s</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcManningNat()">Calculer</button>'
    + '<div class="result-box" id="res-mn"><div class="result-value" id="rv-mn"></div><div class="result-detail" id="rd-mn"></div>'
    + '<div class="result-formula">A=(b+m×h)×h · P=b+2h√(1+m²) · T=b+2mh · Q=K×A×Rh^(2/3)×I^(1/2) · Fr=V/√(gA/T)</div>'
    + '<div class="result-src">📖 Manning R. (1891) · Strickler A. (1923) · NF EN 752 · Chaudhry M.H. (2008)</div></div>'
    + '</div></div></div>'
    + '<div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Valeurs de K usuelles</div>'
    + '<div class="kv-grid">'
    + [['Canal béton lisse','70–80'],['Canal béton ordinaire','60–70'],['Cunette parabolique','55–65'],['Fossé béton','55–65'],['Fossé engazonné','25–35'],['Rivière naturelle propre','35–45'],['Rivière avec végétation','20–30'],['Lit de crue (plaine)','10–20']].map(function(r){return '<div class="kv-item"><div class="kv-key">'+r[0]+'</div><div class="kv-val">K = '+r[1]+'</div></div>';}).join('')
    + '</div></div></div>';
}

function mnToggleMode() {
  var mode = parseInt((document.getElementById('mn-mode') || {}).value || 0);
  var fh = document.getElementById('mn-fh');
  var fq = document.getElementById('mn-fq');
  if (!fh) return;
  fh.style.display = mode === 0 ? '' : 'none';
  fq.style.display = mode === 1 ? '' : 'none';
}

function calcManningNat() {
  if (!checkCalcLimit()) return;
  var mode = parseInt(document.getElementById('mn-mode').value);
  var b    = parseFloat(document.getElementById('mn-b').value);
  var ms   = parseFloat(document.getElementById('mn-m').value);
  var K    = parseFloat(document.getElementById('mn-k').value) || 40;
  var Iper = (parseFloat(document.getElementById('mn-i').value) || 2) / 1000;
  if (isNaN(b))  b  = 3;
  if (isNaN(ms)) ms = 1.5;
  var g = 9.81;

  var rb = document.getElementById('res-mn');

  if (b <= 0 && ms <= 0) {
    rb.classList.add('show'); rb.style.borderLeftColor = 'var(--c-danger)';
    document.getElementById('rv-mn').textContent = 'Erreur : b et m ne peuvent pas être tous deux ≤ 0';
    document.getElementById('rd-mn').innerHTML = '• Saisir au moins une largeur (b > 0) ou un talus (m > 0)';
    return;
  }

  function _sectionQ(h) {
    if (h <= 0) return 0;
    var A = (b + ms * h) * h;
    var P = b + 2 * h * Math.sqrt(1 + ms * ms);
    if (P <= 0 || A <= 0) return 0;
    return K * A * Math.pow(A / P, 2 / 3) * Math.sqrt(Iper);
  }

  var h, Q;
  if (mode === 0) {
    h = parseFloat(document.getElementById('mn-h').value) || 1.2;
    Q = _sectionQ(h);
  } else {
    Q = parseFloat(document.getElementById('mn-q').value) || 15;
    var hL = 1e-5, hH = 500;
    if (_sectionQ(hH) < Q) { hH = 10000; }
    if (_sectionQ(hH) < Q) {
      rb.classList.add('show'); rb.style.borderLeftColor = 'var(--c-danger)';
      document.getElementById('rv-mn').textContent = 'Débit irréalisable avec ces paramètres — augmenter K, I, b ou m';
      document.getElementById('rd-mn').innerHTML = '';
      return;
    }
    for (var it = 0; it < 120; it++) {
      var hM = (hL + hH) / 2;
      if (_sectionQ(hM) < Q) hL = hM; else hH = hM;
      if (hH - hL < 1e-8) break;
    }
    h = (hL + hH) / 2;
  }

  if (!isFinite(Q) || Q <= 0 || !isFinite(h) || h <= 0) {
    rb.classList.add('show'); rb.style.borderLeftColor = 'var(--c-danger)';
    document.getElementById('rv-mn').textContent = 'Résultat non calculable — vérifier les paramètres';
    document.getElementById('rd-mn').innerHTML = '';
    return;
  }

  var A  = (b + ms * h) * h;
  var P  = b + 2 * h * Math.sqrt(1 + ms * ms);
  var T  = b + 2 * ms * h;   // largeur surface libre
  var Rh = A / P;
  var V  = Q / A;
  var Dh = T > 0 ? A / T : Rh;  // profondeur hydraulique
  var Fr = V / Math.sqrt(g * Dh);

  var Qm3h = (Q * 3600).toFixed(2);
  var regime = Fr < 0.9  ? 'Fluvial (Fr = ' + Fr.toFixed(3) + ' < 1)'
             : Fr > 1.1  ? 'Torrentiel (Fr = ' + Fr.toFixed(3) + ' > 1)'
             : 'Critique (Fr = ' + Fr.toFixed(3) + ' ≈ 1 — instable)';

  rb.classList.add('show');
  rb.style.borderLeftColor = Fr > 1.1 ? 'var(--c-warn)' : (V < 0.3 || V > 5) ? 'var(--c-warn)' : 'var(--c-ok)';

  document.getElementById('rv-mn').textContent =
    mode === 0
    ? 'Q = ' + Q.toFixed(4) + ' m³/s  =  ' + Qm3h + ' m³/h'
    : 'h = ' + h.toFixed(4) + ' m  ·  V = ' + V.toFixed(3) + ' m/s';

  document.getElementById('rd-mn').innerHTML =
    '• Section : b = ' + b + ' m · m = ' + ms + ':1 · K = ' + K + ' · I = ' + (Iper*1000).toFixed(3) + ' ‰<br>'
    + '• A = ' + A.toFixed(4) + ' m² · P mouillé = ' + P.toFixed(4) + ' m · T (surface libre) = ' + T.toFixed(4) + ' m<br>'
    + '• Rh = ' + Rh.toFixed(4) + ' m · Dh (prof. hydraulique) = ' + Dh.toFixed(4) + ' m<br>'
    + '• V = ' + V.toFixed(4) + ' m/s · Q = ' + Q.toFixed(4) + ' m³/s = ' + Qm3h + ' m³/h<br>'
    + '• ' + regime + '<br>'
    + (Fr > 1.1 ? '⚠ Régime torrentiel — risque d\'érosion, protection du lit et des berges recommandée'
    : Fr < 0.1 ? '⚠ Nombre de Froude très faible — risque de dépôts sédimentaires importants'
    : V < 0.3  ? '⚠ V < 0,3 m/s — risque de dépôt de sédiments fins'
    : V > 5    ? '⚠ V > 5 m/s — risque d\'érosion intense, revêtement obligatoire'
    : '✓ Régime fluvial — conditions hydrauliques normales');
}

/* ──────────────────────────────────────────────── */

function renderCalcSuppl() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-aides)">
      <span class="mh-icon">📐</span>
      <div class="mh-title">Calculateurs complémentaires</div>
      <div class="mh-sub">Chloration · Réservoir AEP · Besoins AEP · Débit EU · Bassin EP · Poste relevage · FPR · Lagunage · Boues activées · Q/Qₚ · CT · UV · Dilution · Décanteur · Jaugeage · Coagulation · Hazen-Williams · TH Adoucissement</div>
      <div class="mh-tags"><span class="mh-tag">AEP</span><span class="mh-tag">Assainissement</span><span class="mh-tag">Eau pluviale</span><span class="mh-tag">STEU</span></div>
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
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🏘️ Besoins en eau AEP — dimensionnement réseau</div>
        <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Calcule les débits de pointe journalier et horaire ainsi que le débit de dimensionnement avec réserve incendie (NF S 62-200 type A : 2 × 30 m³/h pendant 2 h).</span></div>
        <div class="calc-zone">
          <div class="field"><label class="field-label">Population raccordée P</label><div class="field-row"><input type="number" id="aep-p" value="1500" step="100" min="10"><span class="field-unit">hab</span></div></div>
          <div class="field"><label class="field-label">Dotation spécifique d</label><div class="field-tip">Rural : 150 L/hab/j · Urbain moyen : 200 · Touristique : 300–400 · Industriel à calculer séparément</div><div class="field-row"><input type="number" id="aep-d" value="200" step="10" min="10"><span class="field-unit">L/hab/j</span></div></div>
          <div class="field"><label class="field-label">Coeff. de pointe journalière Cp</label><div class="field-tip">Cp = 1,2–1,5 (grand réseau) · 1,5–1,8 (réseau rural) · 1,3 courant</div><div class="field-row"><input type="number" id="aep-cp" value="1.3" step="0.1" min="1"><span class="field-unit">—</span></div></div>
          <div class="field"><label class="field-label">Coeff. de pointe horaire Ch</label><div class="field-tip">Ch = 1,5–2,0 (grand réseau) · 2,0–3,0 (petit réseau) · 2,0 courant</div><div class="field-row"><input type="number" id="aep-ch" value="2.0" step="0.1" min="1"><span class="field-unit">—</span></div></div>
          <button class="btn btn-primary" onclick="calcBesoinAEP()">Calculer</button>
          <div class="result-box" id="res-aep">
            <div class="result-value" id="rv-aep"></div>
            <div class="result-detail" id="rd-aep"></div>
            <div class="result-formula">Q_moy = P×d/1000 · Q_pj = Q_moy×Cp · Q_ph = Q_pj/24×Ch · Q_dim = Q_ph + Q_inc</div>
            <div class="result-src">📖 NF EN 805 · NF S 62-200 · Circulaire 77-284 · Guide FNCCR</div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🚽 Débit de pointe EU — formule de Babbitt</div>
        <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Formule de Babbitt (CCTG Fasc. 70) : Cp = (18+√P‰)/(4+√P‰) avec P en milliers d'habitants. Encadrée entre 1,7 et 4,0. Débit minimum de 1,5 L/s appliqué.</span></div>
        <div class="calc-zone">
          <div class="field"><label class="field-label">Population raccordée P</label><div class="field-row"><input type="number" id="eu-p" value="800" step="100" min="10"><span class="field-unit">hab</span></div></div>
          <div class="field"><label class="field-label">Dotation EU spécifique d</label><div class="field-tip">EU résidentiel : 120–160 L/hab/j · Urbain mixte : 150–200 · Ratio 80 % de l\'eau potable consommée</div><div class="field-row"><input type="number" id="eu-d" value="150" step="10" min="10"><span class="field-unit">L/hab/j</span></div></div>
          <div class="field"><label class="field-label">Facteur eaux parasites fx</label><div class="field-tip">Réseau neuf : 1,0 · Réseau ancien infiltrations modérées : 1,2 · Réseau dégradé : 1,5</div><div class="field-row"><input type="number" id="eu-fx" value="1.2" step="0.1" min="1"><span class="field-unit">—</span></div></div>
          <button class="btn btn-primary" onclick="calcDebitEU()">Calculer</button>
          <div class="result-box" id="res-eu">
            <div class="result-value" id="rv-eu"></div>
            <div class="result-detail" id="rd-eu"></div>
            <div class="result-formula">Q_ts = P×d/86400 · Cp = (18+√(P/1000))/(4+√(P/1000)) · Q_pte = max(Cp×Q_ts, 1,5 L/s)</div>
            <div class="result-src">📖 Babbitt H.E. (1922) · CCTG Fascicule 70 · NF EN 752</div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🌧️ Bassin de rétention EP — bilan de masse simplifié</div>
        <div class="alert warn" style="margin-bottom:var(--s-3)"><span class="alert-icon">⚠</span><span>Méthode simplifiée (bilan de masse à la durée tc). Pour toute étude réglementaire, utiliser la méthode des pluies avec les coefficients de Montana locaux (SDAGE, PLU).</span></div>
        <div class="calc-zone">
          <div class="field"><label class="field-label">Superficie du bassin versant A</label><div class="field-row"><input type="number" id="ep-a" value="5" step="0.5" min="0.01"><span class="field-unit">ha</span></div></div>
          <div class="field"><label class="field-label">Coefficient de ruissellement Cb</label><div class="field-tip">Toiture : 0,9–1,0 · Voirie bitumée : 0,7–0,9 · Espace vert : 0,1–0,3 · Mixte urbain : 0,3–0,6</div><div class="field-row"><input type="number" id="ep-cb" value="0.5" step="0.05" min="0.01" max="1"><span class="field-unit">—</span></div></div>
          <div class="field"><label class="field-label">Débit de rejet autorisé Qs</label><div class="field-tip">Rejet en milieu naturel : souvent 2–3 L/s/ha · Réseau aval saturé : 1 L/s/ha · Urbain dense : 10 L/s/ha</div><div class="field-row"><input type="number" id="ep-qs" value="3" step="1" min="0"><span class="field-unit">L/s/ha</span></div></div>
          <div class="field"><label class="field-label">Pluie de projet hp</label><div class="field-tip">Période de retour T=10 ans : 35–50 mm (France) · T=30 ans : 55–70 mm · T=100 ans : 80–100 mm</div><div class="field-row"><input type="number" id="ep-hp" value="40" step="5" min="1"><span class="field-unit">mm</span></div></div>
          <div class="field"><label class="field-label">Temps de concentration tc</label><div class="field-tip">Petit BV urbain : 10–20 min · BV périurbain : 20–40 min · Grand BV rural : 60–120 min</div><div class="field-row"><input type="number" id="ep-tc" value="30" step="5" min="5"><span class="field-unit">min</span></div></div>
          <button class="btn btn-primary" onclick="calcBassinEP()">Calculer</button>
          <div class="result-box" id="res-ep">
            <div class="result-value" id="rv-ep"></div>
            <div class="result-detail" id="rd-ep"></div>
            <div class="result-formula">Va = 10×Cb×hp×A · Vs = Qs×A×tc×60/1000 · V_bassin = max(0, Va−Vs)</div>
            <div class="result-src">📖 CERTU (1994) · SETRA — Guide technique bassins de retenue EP · SDAGE</div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">⛽ Poste de relevage EU / ANC — dimensionnement</div>
        <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Calcule le volume utile de la bâche, la puissance absorbée et le diamètre de refoulement. La HMT doit inclure toutes les pertes de charge (utiliser Darcy-Weisbach pour les pertes linéaires).</span></div>
        <div class="calc-zone">
          <div class="field"><label class="field-label">Débit de pointe Q</label><div class="field-tip">Utiliser le Q pointe EU calculé ci-dessus · Appliquer un coefficient de 1,2–1,5 en cas d\'incertitude</div><div class="field-row"><input type="number" id="pr-q" value="30" step="5" min="0.1"><span class="field-unit">m³/h</span></div></div>
          <div class="field"><label class="field-label">Hauteur manométrique totale HMT</label><div class="field-tip">HMT = Hg (géométrique) + hf_refoul + hf_aspir + Hp résiduelle · Vérifier avec onglet Darcy-Weisbach</div><div class="field-row"><input type="number" id="pr-hmt" value="12" step="1" min="0.1"><span class="field-unit">m</span></div></div>
          <div class="field"><label class="field-label">Rendement global η (pompe + moteur)</label><div class="field-tip">Petite pompe (Q &lt; 10 m³/h) : 50–60% · Moyenne : 65–75% · Grande : 75–85%</div><div class="field-row"><input type="number" id="pr-eta" value="65" step="5" min="10" max="98"><span class="field-unit">%</span></div></div>
          <div class="field"><label class="field-label">Nb démarrages max / heure N</label><div class="field-tip">Moteurs 0,75–4 kW : max 15/h · 4–22 kW : max 8–10/h · > 22 kW : max 4–6/h · Pompe immergée EU : 10/h courant</div><div class="field-row"><input type="number" id="pr-n" value="10" step="1" min="1" max="30"><span class="field-unit">/h</span></div></div>
          <button class="btn btn-primary" onclick="calcPosteRelevage()">Calculer</button>
          <div class="result-box" id="res-pr">
            <div class="result-value" id="rv-pr"></div>
            <div class="result-detail" id="rd-pr"></div>
            <div class="result-formula">V_utile = Q/(4×N) · P_hyd = ρ×g×Q×HMT/3600 · P_abs = P_hyd/η · D_ref = √(4Q/(π×V_ref))</div>
            <div class="result-src">📖 CCTG Fascicule 81 · NF EN ISO 9906 · Guide STEPfrance (2020)</div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🌿 Filtre Planté de Roseaux (FPR) — dimensionnement</div>
        <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Standard ASTEE / SATESE France : 5 m²/EH en VF 2-massifs alternés. Vérification charge hydraulique ≤ 0,25 m/j par massif. 10 m²/EH en HF.</span></div>
        <div class="calc-zone">
          <div class="field"><label class="field-label">Équivalents-habitants EH</label><div class="field-row"><input type="number" id="fpr-eh" value="200" step="50" min="5"><span class="field-unit">EH</span></div></div>
          <div class="field"><label class="field-label">Débit journalier Q</label><div class="field-tip">1 EH ≈ 150–200 L/j · Q ≈ EH × 0,20 m³/j</div><div class="field-row"><input type="number" id="fpr-q" value="40" step="5" min="0.1"><span class="field-unit">m³/j</span></div></div>
          <div class="field"><label class="field-label">DBO₅ entrée</label><div class="field-tip">EU domestique brut : 150–250 mg/L · EU dilués : 80–150 mg/L · 1 EH = 60 g DBO₅/j</div><div class="field-row"><input type="number" id="fpr-dbo5e" value="200" step="10" min="1"><span class="field-unit">mg/L</span></div></div>
          <div class="field"><label class="field-label">Objectif DBO₅ sortie</label><div class="field-tip">Milieu sensible : 25 mg/L · Arrêté 22/06/2007 (&lt; 2 000 EH) : 35 mg/L</div><div class="field-row"><input type="number" id="fpr-dbo5s" value="25" step="5" min="1"><span class="field-unit">mg/L</span></div></div>
          <div class="field"><label class="field-label">Type de filtre</label>
            <select id="fpr-type" class="field-inp">
              <option value="vf">VF — Flux Vertical (standard ASTEE France)</option>
              <option value="hf">HF — Flux Horizontal (2ème étage ou site contraint)</option>
            </select></div>
          <button class="btn btn-primary" onclick="calcFPR()">Calculer</button>
          <div class="result-box" id="res-fpr">
            <div class="result-value" id="rv-fpr"></div>
            <div class="result-detail" id="rd-fpr"></div>
            <div class="result-formula">S_VF = max(EH×5 ; 2×Q/0,25) · S_HF = max(EH×10 ; Q/0,10) · C_hyd = Q/S_massif</div>
            <div class="result-src">📖 ASTEE/SATESE (2015) · Guide FPR Irstea · Arrêté 22/06/2007</div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🏞️ Lagunage naturel — dimensionnement 2 lagunes</div>
        <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Lagune facultative + lagune de maturation. Correction thermique Mara-Pearson (θ=1,07). Guideline France tempérée : 20 m²/EH. Résultat = max(guide, cinétique).</span></div>
        <div class="calc-zone">
          <div class="field"><label class="field-label">Équivalents-habitants EH</label><div class="field-row"><input type="number" id="lag-eh" value="500" step="50" min="5"><span class="field-unit">EH</span></div></div>
          <div class="field"><label class="field-label">Débit journalier Q</label><div class="field-row"><input type="number" id="lag-q" value="100" step="10" min="0.1"><span class="field-unit">m³/j</span></div></div>
          <div class="field"><label class="field-label">DBO₅ entrée</label><div class="field-row"><input type="number" id="lag-dbo5e" value="200" step="10" min="1"><span class="field-unit">mg/L</span></div></div>
          <div class="field"><label class="field-label">Objectif DBO₅ sortie</label><div class="field-tip">Rejet standard : 25 mg/L · Milieu moins sensible : 35 mg/L</div><div class="field-row"><input type="number" id="lag-dbo5s" value="30" step="5" min="1"><span class="field-unit">mg/L</span></div></div>
          <div class="field"><label class="field-label">Température de dimensionnement T_min</label><div class="field-tip">France Nord : 5–8°C · France Sud : 8–12°C · Tropical : 15–25°C · Prendre le mois le plus froid</div><div class="field-row"><input type="number" id="lag-t" value="8" step="1" min="1" max="35"><span class="field-unit">°C</span></div></div>
          <button class="btn btn-primary" onclick="calcLagunage()">Calculer</button>
          <div class="result-box" id="res-lag">
            <div class="result-value" id="rv-lag"></div>
            <div class="result-detail" id="rd-lag"></div>
            <div class="result-formula">t_s(T) = t_s_15 × 1,07^(15−T) · S = Q × t_s / h · S_adoptée = max(S_guide, S_cinétique)</div>
            <div class="result-src">📖 CEMAGREF (1997) · Mara &amp; Pearson (1986) · Arrêté 22/06/2007 · Guide SATESE</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">⚙️</div>
        <div>
          <div class="card-title">Boues activées — Aération prolongée</div>
          <div class="card-subtitle">Dimensionnement STEU petite capacité · Volume bassin · Âge des boues</div>
        </div>
      </div>
      <div class="card-body">
        <div class="field"><label class="field-label">EH (équivalents-habitants)</label><div class="field-row"><input type="number" id="ba-eh" value="500" step="50" min="1"><span class="field-unit">EH</span></div></div>
        <div class="field"><label class="field-label">Débit journalier Q</label><div class="field-tip">Guide : 180–200 L/EH/j (effluents domestiques)</div><div class="field-row"><input type="number" id="ba-q" value="100" step="10" min="1"><span class="field-unit">m³/j</span></div></div>
        <div class="field"><label class="field-label">DBO₅ entrée</label><div class="field-row"><input type="number" id="ba-dbo5e" value="200" step="10" min="1"><span class="field-unit">mg/L</span></div></div>
        <div class="field"><label class="field-label">Objectif DBO₅ sortie</label><div class="field-tip">Rejet standard : 25 mg/L · Milieu sensible : 10 mg/L</div><div class="field-row"><input type="number" id="ba-dbo5s" value="25" step="5" min="1"><span class="field-unit">mg/L</span></div></div>
        <div class="field"><label class="field-label">Concentration MVES</label><div class="field-tip">Aération prolongée : 3–5 g/L · Valeur typique : 3,5 g/L</div><div class="field-row"><input type="number" id="ba-mves" value="3.5" step="0.5" min="1" max="8"><span class="field-unit">g/L</span></div></div>
        <div class="field"><label class="field-label">Charge massique Cm</label><div class="field-tip">Aération prolongée : 0,05–0,15 · Standard : 0,10 kg DBO₅/kg MES/j</div><div class="field-row"><input type="number" id="ba-cm" value="0.10" step="0.01" min="0.01" max="0.5"><span class="field-unit">kg/kg/j</span></div></div>
        <button class="btn btn-primary" onclick="calcBouesActivees()">Calculer</button>
        <div class="result-box" id="res-ba">
          <div class="result-value" id="rv-ba"></div>
          <div class="result-detail" id="rd-ba"></div>
          <div class="result-formula">V = F_DBO_élim / (Cm × MVES) · te = M_MES / ΔX · O₂ = 1,0·F_élim + 0,12·M_MES</div>
          <div class="result-src">📖 Guide FNDAE n°25 · DTU-STEU · Arrêté 22/06/2007</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">📊</div>
        <div>
          <div class="card-title">Rapports hydrauliques — Section circulaire partielle</div>
          <div class="card-subtitle">Q/Qₚ et V/Vₚ en fonction de y/D · Vérification auto-curage</div>
        </div>
      </div>
      <div class="card-body">
        <div class="field"><label class="field-label">Diamètre DN</label><div class="field-row"><input type="number" id="qqp-d" value="400" step="50" min="50" max="3000"><span class="field-unit">mm</span></div></div>
        <div class="field"><label class="field-label">Coefficient Manning K</label><div class="field-tip">Béton lisse : 70–80 · PVC : 90–100 · Grès : 75</div><div class="field-row"><input type="number" id="qqp-k" value="75" step="5" min="30" max="120"></div></div>
        <div class="field"><label class="field-label">Pente I</label><div class="field-row"><input type="number" id="qqp-i" value="3" step="0.5" min="0.1" max="200"><span class="field-unit">mm/m</span></div></div>
        <button class="btn btn-primary" onclick="calcQQp()">Générer tableau</button>
        <div class="result-box" id="res-qqp">
          <div class="result-value" id="rv-qqp"></div>
          <div class="result-detail" id="rd-qqp" style="overflow-x:auto;font-size:0.82rem"></div>
          <div class="result-formula">θ = 2·arccos(1−2y/D) · A = D²/8·(θ−sinθ) · Q = K·A·(A/P)²/³·√I</div>
          <div class="result-src">📖 Manning-Strickler · Babcock (1953) · DTU 60.11 · CCTG Fasc. 70</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">💧</div>
        <div>
          <div class="card-title">CT Désinfection — Chloration Cl₂</div>
          <div class="card-subtitle">Inactivation Giardia par chlore libre · Vérification CT appliqué vs CT requis</div>
        </div>
      </div>
      <div class="card-body">
        <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>CT = Concentration résiduelle × t₁₀. Pour Cryptosporidium : CT₃‑log Cl₂ &gt; 11 600 mg·min/L → UV ou ozone indispensable.</span></div>
        <div class="field"><label class="field-label">Concentration résiduelle Cl₂</label><div class="field-row"><input type="number" id="ct-c" value="0.5" step="0.1" min="0.01" max="10"><span class="field-unit">mg/L</span></div></div>
        <div class="field"><label class="field-label">Temps de contact t₁₀</label><div class="field-tip">t₁₀ = temps au 10ᵉ percentile de sortie du réacteur. t₁₀ ≈ baffling factor × V_cuve/Q · Contacteur tubulaire : bf ≈ 0,9 · Bassin sans chicanes : bf ≈ 0,1</div><div class="field-row"><input type="number" id="ct-t" value="30" step="5" min="1" max="600"><span class="field-unit">min</span></div></div>
        <div class="field"><label class="field-label">pH de l'eau</label><div class="field-row"><input type="number" id="ct-ph" value="7.0" step="0.5" min="6" max="9"><span class="field-unit">—</span></div></div>
        <div class="field"><label class="field-label">Température T</label><div class="field-row"><input type="number" id="ct-temp" value="10" step="1" min="0" max="30"><span class="field-unit">°C</span></div></div>
        <div class="field"><label class="field-label">Log d'inactivation visé (Giardia)</label><div class="field-tip">Eau potable FR : 3-log minimum · Eau de surface : 4-log recommandé · Eau souterraine protégée : 2-log</div><div class="field-row"><input type="number" id="ct-li" value="3" step="0.5" min="0.5" max="6"></div></div>
        <button class="btn btn-primary" onclick="calcCTDesinfection()">Calculer</button>
        <div class="result-box" id="res-ct">
          <div class="result-value" id="rv-ct"></div>
          <div class="result-detail" id="rd-ct"></div>
          <div class="result-formula">CT = C × t₁₀ · CT_requis = 38 × 1,13^(10−T) × f_pH × LI/3</div>
          <div class="result-src">📖 USEPA Guidance Manual (1991) · WHO Guidelines DWQ (2022) · Arrêté 11/01/2007</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">🌊</div>
        <div>
          <div class="card-title">Dilution en cours d'eau — Mélange rejet/rivière</div>
          <div class="card-subtitle">Concentration de mélange · Taux de dilution · Débit minimum nécessaire</div>
        </div>
      </div>
      <div class="card-body">
        <div class="field"><label class="field-label">Débit cours d'eau amont Q_amont</label><div class="field-row"><input type="number" id="dil-qa" value="1000" step="100" min="1"><span class="field-unit">m³/j</span></div></div>
        <div class="field"><label class="field-label">Concentration amont C_amont</label><div class="field-tip">Choisir le paramètre déclassant : DBO₅, MES, NH₄⁺, conductivité…</div><div class="field-row"><input type="number" id="dil-ca" value="3" step="1" min="0"><span class="field-unit">mg/L</span></div></div>
        <div class="field"><label class="field-label">Débit rejet Q_rejet</label><div class="field-row"><input type="number" id="dil-qr" value="100" step="10" min="0.1"><span class="field-unit">m³/j</span></div></div>
        <div class="field"><label class="field-label">Concentration rejet C_rejet</label><div class="field-row"><input type="number" id="dil-cr" value="25" step="5" min="0"><span class="field-unit">mg/L</span></div></div>
        <div class="field"><label class="field-label">Objectif qualité C_objectif</label><div class="field-tip">Bon état DCE : DBO₅ ≤ 6 mg/L · NH₄⁺ ≤ 0,5 mg/L · Rejet standard : DBO₅ ≤ 25 mg/L</div><div class="field-row"><input type="number" id="dil-cobj" value="6" step="1" min="0"><span class="field-unit">mg/L</span></div></div>
        <button class="btn btn-primary" onclick="calcDilution()">Calculer</button>
        <div class="result-box" id="res-dil">
          <div class="result-value" id="rv-dil"></div>
          <div class="result-detail" id="rd-dil"></div>
          <div class="result-formula">C_mél = (Q_a·C_a + Q_r·C_r)/(Q_a+Q_r) · τ = Q_a/Q_r · Q_min = Q_r·(C_r−C_obj)/(C_obj−C_a)</div>
          <div class="result-src">📖 DCE 2000/60/CE · SEQ-Eau v2 · Arrêté 22/06/2007</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">🔬</div>
        <div>
          <div class="card-title">Vitesse de chute Stokes — Dimensionnement décanteur</div>
          <div class="card-subtitle">Particules en suspension · Débit surfacique · Surface minimale</div>
        </div>
      </div>
      <div class="card-body">
        <div class="field"><label class="field-label">Débit à traiter Q</label><div class="field-row"><input type="number" id="dec-q" value="10" step="1" min="0.1"><span class="field-unit">m³/h</span></div></div>
        <div class="field"><label class="field-label">Diamètre médian des particules d₅₀</label><div class="field-tip">Turbidité kaolin : 5–20 μm · Floc alun : 30–100 μm · Sable fin : 100–250 μm · MES eau usée : 20–80 μm</div><div class="field-row"><input type="number" id="dec-d" value="50" step="5" min="1" max="5000"><span class="field-unit">μm</span></div></div>
        <div class="field"><label class="field-label">Masse volumique particules ρ_p</label><div class="field-tip">Floc alun : 1 050–1 200 · Argile : 1 800–2 000 · Sable : 2 600–2 650 · MES boues : 1 050</div><div class="field-row"><input type="number" id="dec-rho" value="1100" step="50" min="1001" max="3000"><span class="field-unit">kg/m³</span></div></div>
        <div class="field"><label class="field-label">Température T</label><div class="field-row"><input type="number" id="dec-t" value="15" step="1" min="0" max="40"><span class="field-unit">°C</span></div></div>
        <div class="field"><label class="field-label">Coefficient de sécurité k_s</label><div class="field-tip">Décanteur simple : 1,5–2,0 · Lamellaire : 1,2–1,5 · En présence de court-circuit : 2,0–3,0</div><div class="field-row"><input type="number" id="dec-ks" value="1.5" step="0.5" min="1" max="5"></div></div>
        <button class="btn btn-primary" onclick="calcDecanteur()">Calculer</button>
        <div class="result-box" id="res-dec">
          <div class="result-value" id="rv-dec"></div>
          <div class="result-detail" id="rd-dec"></div>
          <div class="result-formula">vs = g(ρ_p−ρ_e)d²/(18μ) · q_s = vs/k_s · A_min = Q/q_s</div>
          <div class="result-src">📖 Stokes (1851) · Metcalf &amp; Eddy · Guide technique eau potable ASTEE</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">📏</div>
        <div>
          <div class="card-title">Jaugeage — Mesure de débit in situ</div>
          <div class="card-subtitle">Dilution par injection continue · Déversoir triangulaire (Thomson)</div>
        </div>
      </div>
      <div class="card-body">
        <div class="field">
          <label class="field-label">Méthode</label>
          <select id="jaug-mode" class="field-select" onchange="jaugToggleMode()">
            <option value="dil">Dilution — injection continue de traceur</option>
            <option value="dev">Déversoir triangulaire (Thomson)</option>
          </select>
        </div>
        <div id="jaug-dil">
          <div class="field"><label class="field-label">Débit d'injection q</label><div class="field-tip">Injecter en continu jusqu'à plateau aval stable</div><div class="field-row"><input type="number" id="jaug-qinj" value="0.1" step="0.05" min="0.001"><span class="field-unit">L/s</span></div></div>
          <div class="field"><label class="field-label">Concentration traceur injecté C_inj</label><div class="field-tip">NaCl : 100–200 g/L · Rhodamine B : 1–10 g/L · Fluorescéine : 1–5 g/L</div><div class="field-row"><input type="number" id="jaug-cinj" value="100" step="10" min="0.001"><span class="field-unit">g/L</span></div></div>
          <div class="field"><label class="field-label">Concentration fond amont C_fond</label><div class="field-row"><input type="number" id="jaug-cfond" value="0" step="0.1" min="0"><span class="field-unit">mg/L</span></div></div>
          <div class="field"><label class="field-label">Concentration plateau aval C_aval</label><div class="field-row"><input type="number" id="jaug-cplat" value="2.5" step="0.1" min="0.001"><span class="field-unit">mg/L</span></div></div>
        </div>
        <div id="jaug-dev" style="display:none">
          <div class="field"><label class="field-label">Charge sur le déversoir h</label><div class="field-tip">Mesurer à ≥ 3h en amont de la crête · Plage valide : h = 0,05–0,60 m</div><div class="field-row"><input type="number" id="jaug-h" value="0.25" step="0.01" min="0.01" max="1.5"><span class="field-unit">m</span></div></div>
          <div class="field"><label class="field-label">Angle d'ouverture α</label><div class="field-tip">Standard Thomson : 90° · Autres mesures : 30°, 45°, 60°, 120°</div><div class="field-row"><input type="number" id="jaug-theta" value="90" step="15" min="10" max="150"><span class="field-unit">°</span></div></div>
          <div class="field"><label class="field-label">Coefficient de débit C_d</label><div class="field-tip">Déversoir vif 90° non noyé : 0,585–0,600 · Formule Thomson : C_d = 0,587</div><div class="field-row"><input type="number" id="jaug-cd" value="0.587" step="0.005" min="0.4" max="0.75"></div></div>
        </div>
        <button class="btn btn-primary" onclick="calcJaugeage()">Calculer</button>
        <div class="result-box" id="res-jaug">
          <div class="result-value" id="rv-jaug"></div>
          <div class="result-detail" id="rd-jaug"></div>
          <div class="result-formula">Dilution : Q = q·(C_inj−C_aval)/(C_aval−C_fond) · Déversoir : Q = 8/15·C_d·tan(α/2)·√(2g)·h^(5/2)</div>
          <div class="result-src">📖 ISO 748 · NF EN ISO 8368 · Réalimeau (CNRS) · LCPC méthode dilution</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">⚗️</div>
        <div>
          <div class="card-title">Coagulation / Floculation — Dosage réactifs AEP</div>
          <div class="card-subtitle">Alun · PAC · FeCl₃ · Consommation alcalinité · Production de boues</div>
        </div>
      </div>
      <div class="card-body">
        <div class="field">
          <label class="field-label">Type de coagulant</label>
          <select id="coag-type" class="field-select">
            <option value="alun">Alun — Al₂(SO₄)₃·18H₂O (sulfate d'aluminium hydraté)</option>
            <option value="pac">PAC — Polychlorure d'aluminium (solution)</option>
            <option value="fecl3">FeCl₃ — Chlorure ferrique</option>
          </select>
        </div>
        <div class="field"><label class="field-label">Débit à traiter Q</label><div class="field-row"><input type="number" id="coag-q" value="1000" step="100" min="1"><span class="field-unit">m³/j</span></div></div>
        <div class="field"><label class="field-label">Dose de coagulant</label><div class="field-tip">Alun : 20–80 mg/L · PAC : 10–50 mg/L · FeCl₃ : 5–30 mg/L (selon turbidité)</div><div class="field-row"><input type="number" id="coag-dose" value="30" step="5" min="1"><span class="field-unit">mg/L</span></div></div>
        <div class="field"><label class="field-label">MES entrée</label><div class="field-row"><input type="number" id="coag-mes" value="20" step="5" min="0"><span class="field-unit">mg/L</span></div></div>
        <div class="field"><label class="field-label">TAC de l'eau brute</label><div class="field-tip">Eau douce : 50–100 mg/L · Eau dure : 150–400 mg/L · Résiduel min requis : 30 mg CaCO₃/L</div><div class="field-row"><input type="number" id="coag-tac" value="150" step="10" min="10"><span class="field-unit">mg CaCO₃/L</span></div></div>
        <div class="field"><label class="field-label">Rendement de décantation η</label><div class="field-row"><input type="number" id="coag-eta" value="90" step="5" min="10" max="100"><span class="field-unit">%</span></div></div>
        <button class="btn btn-primary" onclick="calcCoagulation()">Calculer</button>
        <div class="result-box" id="res-coag">
          <div class="result-value" id="rv-coag"></div>
          <div class="result-detail" id="rd-coag"></div>
          <div class="result-formula">m = Q×dose/1000 · ΔTAC = dose×f_alk · m_boues = m×f_floc + Q×MES×η/1000</div>
          <div class="result-src">📖 Rodier — Analyse de l'eau · Guide ASTEE coagulation · NF EN ISO 7887</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">🔧</div>
        <div>
          <div class="card-title">Hazen-Williams — Réseau AEP en charge</div>
          <div class="card-subtitle">Perte de charge · Vitesse · Vérification dimensionnement</div>
        </div>
      </div>
      <div class="card-body">
        <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Formule empirique valable pour eau à température ambiante (10–25°C). Plus simple que Darcy-Weisbach pour le prédimensionnement des réseaux.</span></div>
        <div class="field"><label class="field-label">Débit Q</label><div class="field-row"><input type="number" id="hw-q" value="5" step="0.5" min="0.001"><span class="field-unit">L/s</span></div></div>
        <div class="field"><label class="field-label">Diamètre intérieur D</label><div class="field-row"><input type="number" id="hw-d" value="100" step="10" min="10" max="3000"><span class="field-unit">mm</span></div></div>
        <div class="field"><label class="field-label">Coefficient C_HW</label><div class="field-tip">PVC / PEHD neuf : 150 · Fonte ductile revêtue : 130 · Acier : 120 · Béton : 100–110 · Fonte vieille : 80–100</div><div class="field-row"><input type="number" id="hw-c" value="130" step="5" min="50" max="160"></div></div>
        <div class="field"><label class="field-label">Longueur de la conduite L</label><div class="field-row"><input type="number" id="hw-l" value="500" step="50" min="1"><span class="field-unit">m</span></div></div>
        <button class="btn btn-primary" onclick="calcHazenWilliams()">Calculer</button>
        <div class="result-box" id="res-hw">
          <div class="result-value" id="rv-hw"></div>
          <div class="result-detail" id="rd-hw"></div>
          <div class="result-formula">Q = 0,2785 · C · D^2,63 · J^0,54 · hf = J · L</div>
          <div class="result-src">📖 Hazen-Williams (1905) · NF EN 805 · DTU 60.11 · Fascicule 71 CCTG</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">☀️</div>
        <div>
          <div class="card-title">UV Désinfection — Dose & vérification</div>
          <div class="card-subtitle">Inactivation par rayonnement UV · Giardia · Cryptosporidium · E. coli</div>
        </div>
      </div>
      <div class="card-body">
        <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>UV efficace sur Cryptosporidium (insensible au Cl₂) · Pas de résiduel protecteur en réseau · Dose en mJ/cm² à UVT₂₅₄ de référence.</span></div>
        <div class="field">
          <label class="field-label">Organisme cible</label>
          <select id="uv-org" class="field-select">
            <option value="giardia">Giardia lamblia</option>
            <option value="crypto">Cryptosporidium parvum</option>
            <option value="ecoli">E. coli (indicateur fécal)</option>
          </select>
        </div>
        <div class="field"><label class="field-label">Log d'inactivation visé</label><div class="field-row"><input type="number" id="uv-li" value="3" step="0.5" min="0.5" max="6"></div></div>
        <div class="field"><label class="field-label">Dose nominale du réacteur</label><div class="field-tip">Valeur du constructeur à UVT_réf = 95% · Réacteurs LP courants : 30–100 mJ/cm²</div><div class="field-row"><input type="number" id="uv-dnom" value="40" step="5" min="1" max="500"><span class="field-unit">mJ/cm²</span></div></div>
        <div class="field"><label class="field-label">Transmittance UV₂₅₄ de l'eau</label><div class="field-tip">Eau de surface traitée : 85–95% · Eau souterraine : 90–98% · Effluent secondaire : 55–75%</div><div class="field-row"><input type="number" id="uv-uvt" value="92" step="1" min="10" max="99"><span class="field-unit">%</span></div></div>
        <button class="btn btn-primary" onclick="calcUVDesinfection()">Calculer</button>
        <div class="result-box" id="res-uv">
          <div class="result-value" id="rv-uv"></div>
          <div class="result-detail" id="rd-uv"></div>
          <div class="result-formula">D_eff = D_nom × (UVT/95)² · Dose_req(USEPA 2006) selon organisme + log</div>
          <div class="result-src">📖 USEPA UV Guidance Manual (2006) · WHO DWQ (2022) · Arrêté 11/01/2007 AEP</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-icon">💎</div>
        <div>
          <div class="card-title">TH — Dureté &amp; Adoucissement par échange ionique</div>
          <div class="card-subtitle">Titre hydrotimétrique · Bypass · Autonomie résine · NaCl régénération</div>
        </div>
      </div>
      <div class="card-body">
        <div class="field"><label class="field-label">TH entrée</label><div class="field-tip">Eau douce Bretagne : 5–15°f · Seine : 25–35°f · Eau calcaire Bourgogne : 40–60°f</div><div class="field-row"><input type="number" id="th-in" value="30" step="5" min="1" max="100"><span class="field-unit">°f</span></div></div>
        <div class="field"><label class="field-label">TH objectif distribution</label><div class="field-tip">Recommandation AEP FR : 15–35°f · Anti-corrosion : ≥ 15°f · Anti-entartrage : ≤ 25°f</div><div class="field-row"><input type="number" id="th-obj" value="20" step="5" min="0" max="100"><span class="field-unit">°f</span></div></div>
        <div class="field"><label class="field-label">Débit journalier Q</label><div class="field-row"><input type="number" id="th-q" value="10" step="1" min="0.1"><span class="field-unit">m³/j</span></div></div>
        <div class="field"><label class="field-label">Volume de résine</label><div class="field-row"><input type="number" id="th-vres" value="100" step="10" min="1"><span class="field-unit">L</span></div></div>
        <div class="field"><label class="field-label">Capacité d'échange de la résine</label><div class="field-tip">Résine cationique forte (Na⁺) : 1,2–1,8 eq/L · Valeur typique : 1,5 eq/L</div><div class="field-row"><input type="number" id="th-cap" value="1.5" step="0.1" min="0.5" max="3"><span class="field-unit">eq/L</span></div></div>
        <button class="btn btn-primary" onclick="calcTHAdoucissement()">Calculer</button>
        <div class="result-box" id="res-th">
          <div class="result-value" id="rv-th"></div>
          <div class="result-detail" id="rd-th"></div>
          <div class="result-formula">TH[eq/L] = TH[°f]×0,0002 · V_traitable = cap/TH_éq · Bypass = TH_obj/TH_in</div>
          <div class="result-src">📖 Arrêté 11/01/2007 AEP · NF T90-008 · Guide ASTEE adoucissement</div>
        </div>
      </div>
    </div>
    <div class="pb-nav"></div>`;
}

function calcChlorationSuppl() {
  if (!checkCalcLimit()) return;
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

function calcReservoirSuppl() {
  if (!checkCalcLimit()) return;
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

function calcBesoinAEP() {
  if (!checkCalcLimit()) return;
  const P   = parseFloat(document.getElementById('aep-p').value)  || 1500;
  const d   = parseFloat(document.getElementById('aep-d').value)  || 200;
  const Cp  = parseFloat(document.getElementById('aep-cp').value) || 1.3;
  const Ch  = parseFloat(document.getElementById('aep-ch').value) || 2.0;
  const Qmoy   = P * d / 1000;                     // m³/j
  const Qpj    = Qmoy * Cp;                        // m³/j
  const Qph    = Qpj / 24 * Ch;                    // m³/h
  const Qph_ls = Qph / 3.6;                        // L/s
  const Qinc   = 60;                               // m³/h NF S 62-200 type A
  const Qdim   = Qph + Qinc;                       // m³/h
  const Vres   = Qmoy * 0.5;                       // m³ — indicatif 50% Q_moy
  const rb = document.getElementById('res-aep'); rb.classList.add('show');
  rb.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-aep').textContent = 'Q pointe = ' + Qph.toFixed(2) + ' m³/h  ·  Q dim. (avec incendie) = ' + Qdim.toFixed(0) + ' m³/h';
  document.getElementById('rd-aep').innerHTML =
    '• Q moyen = ' + Qmoy.toFixed(0) + ' m³/j = ' + (Qmoy/24).toFixed(2) + ' m³/h<br>'
    + '• Q pointe journalière (×Cp=' + Cp + ') = ' + Qpj.toFixed(0) + ' m³/j<br>'
    + '• Q pointe horaire (×Ch=' + Ch + ') = ' + Qph.toFixed(2) + ' m³/h = ' + Qph_ls.toFixed(3) + ' L/s<br>'
    + '• Réserve incendie NF S 62-200 type A = 60 m³/h pendant 2 h = 120 m³<br>'
    + '• Q dimensionnement (pointe + incendie) = ' + Qdim.toFixed(0) + ' m³/h = ' + (Qdim/3.6).toFixed(2) + ' L/s<br>'
    + '• Volume réservoir indicatif (≈50% Q_j) = ' + Vres.toFixed(0) + ' m³<br>'
    + (Qph_ls < 1 ? '⚠ Débit pointe très faible — réseau minimaliste, vérifier les conditions de pression minimale'
    : Qph_ls > 100 ? '⚠ Débit élevé — étude hydraulique de réseau recommandée'
    : '✓ Valeurs cohérentes — à compléter par dimensionnement hydraulique du réseau');
}

function calcDebitEU() {
  if (!checkCalcLimit()) return;
  const P   = parseInt(document.getElementById('eu-p').value)    || 800;
  const d   = parseFloat(document.getElementById('eu-d').value)  || 150;
  const fx  = parseFloat(document.getElementById('eu-fx').value) || 1.2;
  const Qts = P * d / 86400;                               // L/s
  const Pk  = P / 1000;                                    // milliers d'habitants
  const sqP = Math.sqrt(Pk);
  const Cp_raw = (18 + sqP) / (4 + sqP);
  const Cp  = Math.min(4.0, Math.max(1.7, Cp_raw));        // encadré [1,7 ; 4,0]
  const Qpte = Math.max(Cp * Qts, 1.5);                    // min 1,5 L/s
  const Qdim = Qpte * fx;
  const Qdim_m3h = Qdim * 3.6;
  const rb = document.getElementById('res-eu'); rb.classList.add('show');
  rb.style.borderLeftColor = Qts < 0.3 ? 'var(--c-warn)' : 'var(--c-ok)';
  document.getElementById('rv-eu').textContent = 'Q pointe EU = ' + Qpte.toFixed(2) + ' L/s  ·  Cp = ' + Cp.toFixed(3);
  document.getElementById('rd-eu').innerHTML =
    '• Q temps sec Q_ts = P×d/86400 = ' + P + '×' + d + '/86400 = ' + Qts.toFixed(4) + ' L/s<br>'
    + '• Babbitt : Cp_brut = (18+√' + Pk.toFixed(3) + ')/(4+√' + Pk.toFixed(3) + ') = ' + Cp_raw.toFixed(3) + ' → encadré = ' + Cp.toFixed(3) + '<br>'
    + '• Q pointe = max(Cp×Q_ts, 1,5) = max(' + (Cp*Qts).toFixed(3) + ' ; 1,5) = ' + Qpte.toFixed(3) + ' L/s<br>'
    + '• Q dim. avec eaux parasites (×' + fx + ') = ' + Qdim.toFixed(3) + ' L/s = ' + Qdim_m3h.toFixed(2) + ' m³/h<br>'
    + (Qts < 0.1 ? '⚠ Q_ts très faible — risque de stagnation, pente minimale à vérifier (V ≥ 0,6 m/s en EU)'
    : Cp_raw > 4.0 ? '⚠ Cp théorique > 4,0 (population très faible) — plafonné à 4,0'
    : Cp_raw < 1.7 ? '⚠ Cp théorique < 1,7 (très grande population) — plancher appliqué à 1,7'
    : '✓ Coefficient de Babbitt dans la plage standard');
}

function calcBassinEP() {
  if (!checkCalcLimit()) return;
  const A   = parseFloat(document.getElementById('ep-a').value)  || 5;
  const Cb  = parseFloat(document.getElementById('ep-cb').value) || 0.5;
  const Qs  = parseFloat(document.getElementById('ep-qs').value) || 3;
  const hp  = parseFloat(document.getElementById('ep-hp').value) || 40;
  const tc  = parseFloat(document.getElementById('ep-tc').value) || 30;
  if (Cb <= 0 || Cb > 1 || A <= 0 || tc <= 0 || hp <= 0) {
    const rb2 = document.getElementById('res-ep'); rb2.classList.add('show');
    rb2.style.borderLeftColor = 'var(--c-danger)';
    document.getElementById('rv-ep').textContent = 'Paramètres invalides — vérifier les valeurs saisies';
    document.getElementById('rd-ep').innerHTML = '';
    return;
  }
  const i_mmh = hp / tc * 60;                         // intensité [mm/h]
  const Qi    = Cb * i_mmh * A / 360;                  // Q apport [m³/s]
  const Qr    = Qs * A / 1000;                         // Q rejet [m³/s]
  const Va    = 10 * Cb * hp * A;                      // volume apporté [m³]
  const Vs    = Qs * A * tc * 60 / 1000;               // volume sorti [m³]
  const Vb    = Math.max(0, Va - Vs);                  // volume bassin [m³]
  const S_bas = Vb > 0 ? Vb / 2.0 : 0;                // surface (h_eau = 2 m)
  const rb = document.getElementById('res-ep'); rb.classList.add('show');
  if (Vb <= 0) {
    rb.style.borderLeftColor = 'var(--c-ok)';
    document.getElementById('rv-ep').textContent = 'Pas de bassin nécessaire — Q rejet ≥ Q apport';
    document.getElementById('rd-ep').innerHTML =
      '• Q apport = ' + (Qi*1000).toFixed(2) + ' L/s · Q rejet autorisé = ' + (Qr*1000).toFixed(2) + ' L/s<br>'
      + '• Le débit de rejet autorisé (Qs×A = ' + (Qr*1000).toFixed(2) + ' L/s) absorbe la totalité du ruissellement généré';
    return;
  }
  rb.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-ep').textContent = 'V bassin = ' + Vb.toFixed(0) + ' m³  ·  S ≈ ' + S_bas.toFixed(0) + ' m² (h eau = 2 m)';
  document.getElementById('rd-ep').innerHTML =
    '• BV : A = ' + A + ' ha · Cb = ' + Cb + ' · Qs = ' + Qs + ' L/s/ha<br>'
    + '• Pluie projet : hp = ' + hp + ' mm · tc = ' + tc + ' min · i moy = ' + i_mmh.toFixed(1) + ' mm/h<br>'
    + '• Q apport max (méth. rationnelle) = ' + (Qi*1000).toFixed(2) + ' L/s · Q rejet = ' + (Qr*1000).toFixed(2) + ' L/s<br>'
    + '• Volume apporté Va = 10×' + Cb + '×' + hp + '×' + A + ' = ' + Va.toFixed(0) + ' m³<br>'
    + '• Volume sorti Vs = ' + Qs + '×' + A + '×' + tc + '×60/1000 = ' + Vs.toFixed(0) + ' m³<br>'
    + '• Volume à stocker = ' + Va.toFixed(0) + ' − ' + Vs.toFixed(0) + ' = ' + Vb.toFixed(0) + ' m³<br>'
    + '• Surface bassin (h eau = 2 m) ≈ ' + S_bas.toFixed(0) + ' m² = ' + (S_bas/10000).toFixed(4) + ' ha<br>'
    + '⚠ Méthode simplifiée — vérification réglementaire obligatoire avec Montana local et SDAGE';
}

function calcPosteRelevage() {
  if (!checkCalcLimit()) return;
  const Q_m3h = parseFloat(document.getElementById('pr-q').value)   || 30;
  const HMT   = parseFloat(document.getElementById('pr-hmt').value) || 12;
  const eta   = (parseFloat(document.getElementById('pr-eta').value) || 65) / 100;
  const N     = parseInt(document.getElementById('pr-n').value)     || 10;
  const Q_m3s = Q_m3h / 3600;
  const Q_ls  = Q_m3h / 3.6;
  const Vutile = Q_m3h / (4 * N);                    // m³
  const P_hyd  = 1000 * 9.81 * Q_m3s * HMT;         // W
  const P_abs  = P_hyd / eta;                        // W
  const P_kW   = P_abs / 1000;
  const V_ref  = 1.5;                                // vitesse refoulement cible [m/s]
  const D_ref_m  = Math.sqrt(4 * Q_m3s / (Math.PI * V_ref));
  const D_ref_mm = D_ref_m * 1000;
  const DN_ref   = _dwNormDN(D_ref_mm);
  const t_rem_s  = Vutile * 3600 / Q_m3h;            // secondes (remplissage théorique = V/Q)
  const rb = document.getElementById('res-pr'); rb.classList.add('show');
  rb.style.borderLeftColor = Vutile < 0.1 ? 'var(--c-warn)' : 'var(--c-ok)';
  document.getElementById('rv-pr').textContent = 'V bâche ≥ ' + Vutile.toFixed(3) + ' m³  ·  P absorbée ≈ ' + P_kW.toFixed(2) + ' kW';
  document.getElementById('rd-pr').innerHTML =
    '• Q pointe = ' + Q_m3h + ' m³/h = ' + Q_ls.toFixed(2) + ' L/s<br>'
    + '• HMT = ' + HMT + ' m · η = ' + (eta*100).toFixed(0) + '%<br>'
    + '• V utile bâche = Q/(4×N) = ' + Q_m3h + '/(4×' + N + ') = ' + Vutile.toFixed(3) + ' m³<br>'
    + '• P hydraulique = ρ×g×Q×HMT = 1000×9,81×' + Q_m3s.toFixed(5) + '×' + HMT + ' = ' + (P_hyd/1000).toFixed(3) + ' kW<br>'
    + '• P absorbée = ' + (P_hyd/1000).toFixed(3) + '/0,' + Math.round(eta*100) + ' = ' + P_kW.toFixed(3) + ' kW<br>'
    + '• Temps cycle théorique ≈ ' + t_rem_s.toFixed(0) + ' s (= V_utile/Q_pompe × 3600)<br>'
    + '• Ø refoulement (V≈1,5 m/s) = ' + D_ref_mm.toFixed(0) + ' mm → ' + DN_ref + '<br>'
    + '• Configuration recommandée : 2 pompes (1 + 1 secours), vannes + clapets anti-retour, télégestion<br>'
    + (Vutile < 0.05 ? '⚠ V utile < 50 L — vérifier la fréquence de démarrage réelle (moteur à risque)'
    : P_kW > 22 ? '⚠ P > 22 kW — démarrage étoile-triangle ou variateur de fréquence conseillé'
    : '✓ Dimensionnement cohérent — à valider avec la courbe de la pompe choisie');
}

function calcFPR() {
  if (!checkCalcLimit()) return;
  var EH    = parseInt(document.getElementById('fpr-eh').value)    || 200;
  var Q     = parseFloat(document.getElementById('fpr-q').value)   || 40;
  var DBO5e = parseFloat(document.getElementById('fpr-dbo5e').value) || 200;
  var DBO5s = parseFloat(document.getElementById('fpr-dbo5s').value) || 25;
  var type  = document.getElementById('fpr-type').value;
  if (EH <= 0 || Q <= 0 || DBO5s >= DBO5e) {
    var rb2 = document.getElementById('res-fpr'); rb2.classList.add('show');
    rb2.style.borderLeftColor = 'var(--c-danger)';
    document.getElementById('rv-fpr').textContent = 'Paramètres invalides (DBO₅ sortie doit être < DBO₅ entrée)';
    document.getElementById('rd-fpr').innerHTML = '';
    return;
  }
  var S_adopted, n_massifs, h_lit, C_max, S_EH, S_hyd;
  if (type === 'vf') {
    n_massifs = 2; h_lit = 0.75; C_max = 0.25;
    S_EH  = EH * 5;
    S_hyd = n_massifs * Q / C_max;
  } else {
    n_massifs = 1; h_lit = 0.60; C_max = 0.10;
    S_EH  = EH * 10;
    S_hyd = n_massifs * Q / C_max;
  }
  S_adopted = Math.max(S_EH, S_hyd);
  var S_massif = S_adopted / n_massifs;
  var C_eff    = Q / S_massif;
  var ratio    = (S_adopted / EH).toFixed(1);
  var charge_DBO = EH * 60 / S_adopted;  // g DBO₅/m²/j — guideline ≤ 20–25 g/m²/j
  var C_ok     = C_eff <= C_max + 0.001;
  var DBO_ok   = charge_DBO <= 25;
  var rb = document.getElementById('res-fpr'); rb.classList.add('show');
  rb.style.borderLeftColor = (!C_ok || !DBO_ok) ? 'var(--c-warn)' : 'var(--c-ok)';
  document.getElementById('rv-fpr').textContent =
    'S ' + (type === 'vf' ? 'VF' : 'HF') + ' = ' + S_adopted.toFixed(0) + ' m²  ·  ' + ratio + ' m²/EH  ·  ' + n_massifs + ' massif' + (n_massifs > 1 ? 's' : '') + ' de ' + S_massif.toFixed(0) + ' m²';
  document.getElementById('rd-fpr').innerHTML =
    '• ' + EH + ' EH · Q = ' + Q + ' m³/j · DBO₅ : ' + DBO5e + ' → ' + DBO5s + ' mg/L<br>'
    + '• Guideline ASTEE (' + (type === 'vf' ? '5' : '10') + ' m²/EH) = ' + S_EH.toFixed(0) + ' m²<br>'
    + '• Charge hydraulique max = Q×' + n_massifs + '/' + C_max + ' m/j = ' + S_hyd.toFixed(0) + ' m²<br>'
    + '• Surface retenue = max(' + S_EH.toFixed(0) + ' ; ' + S_hyd.toFixed(0) + ') = <strong>' + S_adopted.toFixed(0) + ' m²</strong><br>'
    + '• C_hyd effective = ' + Q + '/' + S_massif.toFixed(0) + ' = ' + C_eff.toFixed(3) + ' m/j ' + (C_ok ? '✓ ≤ ' + C_max : '⚠ > ' + C_max) + ' m/j<br>'
    + '• Charge DBO₅ surfacique = ' + EH + '×60/' + S_adopted.toFixed(0) + ' = ' + charge_DBO.toFixed(1) + ' g/m²/j ' + (DBO_ok ? '✓ ≤ 25 g/m²/j' : '⚠ > 25 g/m²/j — surdimensionner') + '<br>'
    + '• Lit filtrant : ' + (type === 'vf' ? 'macadam 10–20 mm, h = 0,75 m, alimentation bâchée par siphon' : 'gravier 5–20 mm, h = 0,60 m, alimentation continue') + '<br>'
    + '• ⚠ Confirmer avec bureau d\'études SATESE local · Étanchéité géomembrane · Autorisation préfectorale obligatoire';
}

function calcLagunage() {
  if (!checkCalcLimit()) return;
  var EH    = parseInt(document.getElementById('lag-eh').value)      || 500;
  var Q     = parseFloat(document.getElementById('lag-q').value)     || 100;
  var DBO5e = parseFloat(document.getElementById('lag-dbo5e').value) || 200;
  var DBO5s = parseFloat(document.getElementById('lag-dbo5s').value) || 30;
  var T     = parseFloat(document.getElementById('lag-t').value)     || 8;
  if (EH <= 0 || Q <= 0 || DBO5s >= DBO5e) {
    var rb2 = document.getElementById('res-lag'); rb2.classList.add('show');
    rb2.style.borderLeftColor = 'var(--c-danger)';
    document.getElementById('rv-lag').textContent = 'Paramètres invalides';
    document.getElementById('rd-lag').innerHTML = '';
    return;
  }
  var theta = 1.07;
  // Temps de séjour ref à 15°C — CEMAGREF 1997
  var ts1_15 = 30;  // j — lagune facultative
  var ts2_15 = 10;  // j — lagune de maturation
  var h1 = 1.0, h2 = 0.6; // m
  // Correction thermique de Mara-Pearson
  var ts1 = ts1_15 * Math.pow(theta, 15 - T);
  var ts2 = ts2_15 * Math.pow(theta, 15 - T);
  // Surfaces cinétiques (modèle 1er ordre)
  var S1_cin = Q * ts1 / h1;
  var S2_cin = Q * ts2 / h2;
  // Guideline CEMAGREF : 12 m²/EH L1 + 8 m²/EH L2
  var S1_guide = EH * 12;
  var S2_guide = EH * 8;
  // Valeur retenue = max
  var S1 = Math.max(S1_cin, S1_guide);
  var S2 = Math.max(S2_cin, S2_guide);
  var S_tot = S1 + S2;
  var ratio = (S_tot / EH).toFixed(1);
  // Volumes
  var V1 = S1 * h1;
  var V2 = S2 * h2;
  // Temps séjour effectif
  var ts1_eff = V1 / Q;
  var ts2_eff = V2 / Q;
  // Vérif abattement DBO5 attendu (modèle 1er ordre - basé sur ts_eff)
  var K1_T = 0.30 * Math.pow(theta, T - 15); // k [j-1] lagune facultative
  var K2_T = 0.15 * Math.pow(theta, T - 15); // k [j-1] lagune maturation
  var DBO5_inter = DBO5e / (1 + K1_T * ts1_eff);
  var DBO5_out   = DBO5_inter / (1 + K2_T * ts2_eff);
  var rend_tot   = ((DBO5e - DBO5_out) / DBO5e * 100).toFixed(1);
  var ok_rejet   = DBO5_out <= DBO5s * 1.1; // 10% tolerance
  var rb = document.getElementById('res-lag'); rb.classList.add('show');
  rb.style.borderLeftColor = !ok_rejet ? 'var(--c-warn)' : 'var(--c-ok)';
  document.getElementById('rv-lag').textContent =
    'S tot = ' + S_tot.toFixed(0) + ' m²  ·  ' + ratio + ' m²/EH  ·  DBO₅ calculée ≈ ' + DBO5_out.toFixed(1) + ' mg/L';
  document.getElementById('rd-lag').innerHTML =
    '• ' + EH + ' EH · Q = ' + Q + ' m³/j · T_min = ' + T + '°C<br>'
    + '• Correction θ=1,07 → ts1(' + T + '°C) = ' + ts1_15 + '×1,07^' + (15-T) + ' = ' + ts1.toFixed(1) + ' j · ts2 = ' + ts2.toFixed(1) + ' j<br>'
    + '<strong>Lagune facultative (L1)</strong> : max(cin ' + S1_cin.toFixed(0) + ' m² ; guide ' + S1_guide.toFixed(0) + ' m²) = ' + S1.toFixed(0) + ' m² (h = ' + h1 + ' m) · ts_eff = ' + ts1_eff.toFixed(1) + ' j<br>'
    + '<strong>Lagune maturation (L2)</strong> : max(cin ' + S2_cin.toFixed(0) + ' m² ; guide ' + S2_guide.toFixed(0) + ' m²) = ' + S2.toFixed(0) + ' m² (h = ' + h2 + ' m) · ts_eff = ' + ts2_eff.toFixed(1) + ' j<br>'
    + '• S totale = ' + S1.toFixed(0) + ' + ' + S2.toFixed(0) + ' = <strong>' + S_tot.toFixed(0) + ' m²</strong> (' + ratio + ' m²/EH)<br>'
    + '• DBO₅ simulée : ' + DBO5e + ' → ' + DBO5_inter.toFixed(1) + ' → ' + DBO5_out.toFixed(1) + ' mg/L (rendement ' + rend_tot + '%)<br>'
    + (ok_rejet ? '✓ Objectif DBO₅ ≤ ' + DBO5s + ' mg/L atteint' : '⚠ DBO₅ calculée (' + DBO5_out.toFixed(1) + ' mg/L) > objectif — augmenter les surfaces') + '<br>'
    + '• ⚠ Imperméabilisation (argile compactée ou géomembrane) · Zone tampon 50 m (habitations) · Autorisation préfectorale obligatoire';
}

function calcBouesActivees() {
  if (!checkCalcLimit()) return;
  var EH    = parseInt(document.getElementById('ba-eh').value)      || 500;
  var Q     = parseFloat(document.getElementById('ba-q').value)     || 100;
  var DBO5e = parseFloat(document.getElementById('ba-dbo5e').value) || 200;
  var DBO5s = parseFloat(document.getElementById('ba-dbo5s').value) || 25;
  var MVES  = parseFloat(document.getElementById('ba-mves').value)  || 3.5;
  var Cm    = parseFloat(document.getElementById('ba-cm').value)    || 0.10;

  var eta    = (DBO5e - DBO5s) / DBO5e;
  var F_DBO  = Q * DBO5e / 1000;
  var F_elim = F_DBO * eta;
  var V_bas  = F_elim / (Cm * MVES);
  var M_MES  = MVES * V_bas;
  var DeltaX = 0.65 * F_elim;
  var te     = M_MES / DeltaX;
  var O2     = 1.0 * F_elim + 0.12 * M_MES;
  var P_kW   = (O2 / 24) / 1.5;
  var Q_pte  = Q / 24 * 2.5;
  var A_cla  = Q_pte / 1.0;
  var D_cla  = Math.sqrt(4 * A_cla / Math.PI);
  var Q_rec  = Q / 24 * 0.75;

  var te_ok = te >= 15 && te <= 50;
  var rb = document.getElementById('res-ba');
  rb.classList.add('show');
  rb.style.borderLeftColor = te_ok ? 'var(--c-ok)' : 'var(--c-warn)';

  document.getElementById('rv-ba').textContent =
    'V bassin = ' + V_bas.toFixed(0) + ' m³  ·  te = ' + te.toFixed(1) + ' j  ·  M_MES = ' + M_MES.toFixed(0) + ' kg';

  document.getElementById('rd-ba').innerHTML =
    '• ' + EH + ' EH · Q = ' + Q + ' m³/j · DBO₅ : ' + DBO5e + ' → ' + DBO5s + ' mg/L · η = ' + (eta * 100).toFixed(1) + '%<br>'
    + '• F_DBO entrant = ' + F_DBO.toFixed(2) + ' kg/j · F_DBO éliminé = ' + F_elim.toFixed(2) + ' kg/j<br>'
    + '• V bassin = F_élim / (Cm × MVES) = ' + F_elim.toFixed(2) + ' / (' + Cm + ' × ' + MVES + ') = <strong>' + V_bas.toFixed(0) + ' m³</strong><br>'
    + '• Masse boues M_MES = MVES × V = ' + MVES + ' × ' + V_bas.toFixed(0) + ' = ' + M_MES.toFixed(0) + ' kg<br>'
    + '• Prod. boues ΔX = 0,65 × F_élim = 0,65 × ' + F_elim.toFixed(2) + ' = ' + DeltaX.toFixed(2) + ' kg/j<br>'
    + '• Âge des boues te = M_MES / ΔX = ' + M_MES.toFixed(0) + ' / ' + DeltaX.toFixed(2) + ' = <strong>' + te.toFixed(1) + ' j</strong> '
    + (te_ok ? '✓ plage aération prolongée (15–50 j)' : '⚠ Hors plage 15–50 j — revoir Cm ou MVES') + '<br>'
    + '• Besoin O₂ = 1,0×' + F_elim.toFixed(2) + ' + 0,12×' + M_MES.toFixed(0) + ' = <strong>' + O2.toFixed(1) + ' kg O₂/j</strong><br>'
    + '• Puissance aération ≈ <strong>' + P_kW.toFixed(2) + ' kW</strong> (α·ρ = 1,5 kg O₂/kWh)<br>'
    + '• Clarificateur : A ≥ Q_pte / 1,0 = ' + Q_pte.toFixed(1) + ' / 1,0 = <strong>' + A_cla.toFixed(0) + ' m²</strong> · D ≈ ' + D_cla.toFixed(1) + ' m<br>'
    + '• Recirculation boues ≈ ' + Q_rec.toFixed(1) + ' m³/h (r = 0,75)';
}

function calcQQp() {
  if (!checkCalcLimit()) return;
  var Dmm = parseFloat(document.getElementById('qqp-d').value) || 400;
  var K   = parseFloat(document.getElementById('qqp-k').value) || 75;
  var Imm = parseFloat(document.getElementById('qqp-i').value) || 3;

  var D   = Dmm / 1000;
  var sqI = Math.sqrt(Imm / 1000);

  var A_f = Math.PI * D * D / 4;
  var P_f = Math.PI * D;
  var Q_f = K * A_f * Math.pow(D / 4, 2 / 3) * sqI;
  var V_f = Q_f / A_f;

  var yD_vals = [0.05,0.10,0.15,0.20,0.25,0.30,0.35,0.40,0.45,0.50,
                 0.55,0.60,0.65,0.70,0.75,0.80,0.85,0.90,0.95,1.00];
  var V_max_ok = false;
  var tbl = '<table style="width:100%;border-collapse:collapse">'
          + '<thead><tr style="background:var(--surface-2)">'
          + '<th style="padding:3px 6px;text-align:right">y/D</th>'
          + '<th style="padding:3px 6px;text-align:right">y (mm)</th>'
          + '<th style="padding:3px 6px;text-align:right">Q (L/s)</th>'
          + '<th style="padding:3px 6px;text-align:right">Q/Qₚ</th>'
          + '<th style="padding:3px 6px;text-align:right">V (m/s)</th>'
          + '<th style="padding:3px 6px;text-align:right">V/Vₚ</th>'
          + '</tr></thead><tbody>';

  for (var i = 0; i < yD_vals.length; i++) {
    var yD = yD_vals[i];
    var Q_i, V_i;
    if (yD >= 1.0) {
      Q_i = Q_f; V_i = V_f;
    } else {
      var th = 2 * Math.acos(1 - 2 * yD);
      var A  = D * D / 8 * (th - Math.sin(th));
      var P  = D / 2 * th;
      var Rh = A / P;
      Q_i = K * A * Math.pow(Rh, 2 / 3) * sqI;
      V_i = A > 0 ? Q_i / A : 0;
    }
    if (V_i >= 0.70) V_max_ok = true;
    var QQp = Q_i / Q_f;
    var VVp = V_i / V_f;
    var hl = '';
    if (yD >= 0.90 && yD <= 0.95) hl = 'background:rgba(255,120,0,0.12)';
    else if (yD >= 0.78 && yD <= 0.82) hl = 'background:rgba(60,180,60,0.12)';
    tbl += '<tr style="' + hl + 'border-bottom:1px solid var(--border)">'
         + '<td style="padding:2px 6px;text-align:right">' + yD.toFixed(2) + '</td>'
         + '<td style="padding:2px 6px;text-align:right">' + (yD * Dmm).toFixed(0) + '</td>'
         + '<td style="padding:2px 6px;text-align:right">' + (Q_i * 1000).toFixed(2) + '</td>'
         + '<td style="padding:2px 6px;text-align:right">' + QQp.toFixed(3) + '</td>'
         + '<td style="padding:2px 6px;text-align:right">' + V_i.toFixed(3) + '</td>'
         + '<td style="padding:2px 6px;text-align:right">' + VVp.toFixed(3) + '</td>'
         + '</tr>';
  }
  tbl += '</tbody></table>';

  var rb = document.getElementById('res-qqp');
  rb.classList.add('show');
  rb.style.borderLeftColor = V_max_ok ? 'var(--c-ok)' : 'var(--c-warn)';

  document.getElementById('rv-qqp').textContent =
    'DN' + Dmm + '  ·  Qₚ = ' + (Q_f * 1000).toFixed(2) + ' L/s  ·  Vₚ = ' + V_f.toFixed(3) + ' m/s';

  document.getElementById('rd-qqp').innerHTML =
    '• Pleine section : Qₚ = ' + (Q_f * 1000).toFixed(2) + ' L/s · Vₚ = ' + V_f.toFixed(3) + ' m/s<br>'
    + '• Q_max ≈ 1,076×Qₚ à y/D ≈ 0,94 (fond orangé) | V_max ≈ 1,14×Vₚ à y/D ≈ 0,81 (fond vert)<br>'
    + '• Auto-curage : V ≥ 0,70 m/s requis · '
    + (V_max_ok ? '✓ Condition atteinte' : '⚠ V_max < 0,70 m/s — risque de dépôt, augmenter pente ou réduire DN') + '<br>'
    + tbl;
}

function calcCTDesinfection() {
  if (!checkCalcLimit()) return;
  var C    = parseFloat(document.getElementById('ct-c').value)    || 0.5;
  var t    = parseFloat(document.getElementById('ct-t').value)    || 30;
  var pH   = parseFloat(document.getElementById('ct-ph').value)   || 7.0;
  var T    = parseFloat(document.getElementById('ct-temp').value) || 10;
  var LI   = parseFloat(document.getElementById('ct-li').value)   || 3;

  var CT_appl = C * t;

  var f_T = Math.pow(1.13, 10 - T);

  var pH_vals = [6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0];
  var pH_fac  = [0.4, 0.6, 1.0, 1.5, 2.5, 4.0, 6.0];
  var f_pH = 1.0;
  if (pH <= pH_vals[0]) {
    f_pH = pH_fac[0];
  } else if (pH >= pH_vals[pH_vals.length - 1]) {
    f_pH = pH_fac[pH_fac.length - 1];
  } else {
    for (var i = 0; i < pH_vals.length - 1; i++) {
      if (pH >= pH_vals[i] && pH <= pH_vals[i + 1]) {
        var alpha = (pH - pH_vals[i]) / (pH_vals[i + 1] - pH_vals[i]);
        f_pH = pH_fac[i] + alpha * (pH_fac[i + 1] - pH_fac[i]);
        break;
      }
    }
  }

  var CT_per_log = 38 * f_T * f_pH / 3;
  var CT_req     = CT_per_log * LI;
  var LI_att     = CT_appl / CT_per_log;
  var ok         = CT_appl >= CT_req;

  var rb = document.getElementById('res-ct');
  rb.classList.add('show');
  rb.style.borderLeftColor = ok ? 'var(--c-ok)' : 'var(--c-warn)';

  document.getElementById('rv-ct').textContent =
    'CT appliqué = ' + CT_appl.toFixed(1) + ' mg·min/L  ·  CT requis = ' + CT_req.toFixed(1) + ' mg·min/L  ·  LI atteint = ' + LI_att.toFixed(2) + '-log';

  document.getElementById('rd-ct').innerHTML =
    '• C = ' + C + ' mg/L · t₁₀ = ' + t + ' min · pH = ' + pH + ' · T = ' + T + '°C · Cible : ' + LI + '-log Giardia<br>'
    + '• CT appliqué = C × t₁₀ = ' + C + ' × ' + t + ' = <strong>' + CT_appl.toFixed(1) + ' mg·min/L</strong><br>'
    + '• Correction T : f_T = 1,13^(10−' + T + ') = ' + f_T.toFixed(3) + ' · Correction pH ' + pH + ' : f_pH = ' + f_pH.toFixed(2) + '<br>'
    + '• CT₃₋log ref (pH 7, 10°C) = 38 mg·min/L → CT/log à conditions actuelles = 38 × ' + f_T.toFixed(3) + ' × ' + f_pH.toFixed(2) + ' / 3 = ' + CT_per_log.toFixed(2) + ' mg·min/L/log<br>'
    + '• CT requis pour ' + LI + '-log Giardia = ' + CT_per_log.toFixed(2) + ' × ' + LI + ' = <strong>' + CT_req.toFixed(1) + ' mg·min/L</strong><br>'
    + '• Log inactivation Giardia atteint = ' + CT_appl.toFixed(1) + ' / ' + CT_per_log.toFixed(2) + ' = <strong>' + LI_att.toFixed(2) + '-log</strong><br>'
    + (ok
      ? '✓ CT suffisant — objectif ' + LI + '-log Giardia atteint'
      : '⚠ CT insuffisant — déficit : ' + (CT_req - CT_appl).toFixed(1) + ' mg·min/L · Augmenter C ou t₁₀') + '<br>'
    + '• Cryptosporidium : insensible au Cl₂ (CT₃₋log > 11 600 mg·min/L) → UV ≥ 8,5 mJ/cm² ou ozone ≥ 0,5 mg·min/L<br>'
    + '• Résiduel réglementaire en distribution : 0,1–0,3 mg/L Cl₂ libre (Arrêté 11/01/2007)';
}

function calcDilution() {
  if (!checkCalcLimit()) return;
  var Qa   = parseFloat(document.getElementById('dil-qa').value)   || 1000;
  var Ca   = parseFloat(document.getElementById('dil-ca').value)   || 3;
  var Qr   = parseFloat(document.getElementById('dil-qr').value)   || 100;
  var Cr   = parseFloat(document.getElementById('dil-cr').value)   || 25;
  var Cobj = parseFloat(document.getElementById('dil-cobj').value) || 6;

  var Qaval = Qa + Qr;
  var Cmel  = (Qa * Ca + Qr * Cr) / Qaval;
  var tau   = Qa / Qr;
  var ok    = Cmel <= Cobj;

  var rb = document.getElementById('res-dil');
  rb.classList.add('show');
  rb.style.borderLeftColor = ok ? 'var(--c-ok)' : 'var(--c-warn)';

  document.getElementById('rv-dil').textContent =
    'C_mélange = ' + Cmel.toFixed(2) + ' mg/L  ·  τ = ' + tau.toFixed(1) + '  ·  Q_aval = ' + Qaval.toFixed(0) + ' m³/j';

  var rd = '• Q_amont = ' + Qa + ' m³/j, C_amont = ' + Ca + ' mg/L · Q_rejet = ' + Qr + ' m³/j, C_rejet = ' + Cr + ' mg/L<br>'
    + '• C_mélange = (' + Qa + '×' + Ca + ' + ' + Qr + '×' + Cr + ') / ' + Qaval + ' = <strong>' + Cmel.toFixed(2) + ' mg/L</strong><br>'
    + '• Taux de dilution τ = Q_amont / Q_rejet = ' + Qa + ' / ' + Qr + ' = <strong>' + tau.toFixed(1) + '</strong><br>'
    + '• Flux rejeté = ' + (Qr * Cr / 1000).toFixed(3) + ' kg/j · Flux amont = ' + (Qa * Ca / 1000).toFixed(3) + ' kg/j<br>';

  if (Cr <= Cobj) {
    rd += '• ✓ C_rejet ≤ C_objectif — rejet directement conforme, dilution non nécessaire<br>';
  } else if (Ca >= Cobj) {
    rd += '• ⚠ C_amont ≥ C_objectif — cours d\'eau déjà dégradé en amont du point de rejet<br>';
  } else {
    var Qa_nec = Qr * (Cr - Cobj) / (Cobj - Ca);
    rd += (ok
      ? '• ✓ C_mélange (' + Cmel.toFixed(2) + ' mg/L) ≤ objectif (' + Cobj + ' mg/L) — compatible au débit actuel<br>'
      : '• ⚠ C_mélange (' + Cmel.toFixed(2) + ' mg/L) > objectif (' + Cobj + ' mg/L) — débit amont insuffisant<br>')
      + '• Débit amont minimum : Q_min = Q_r×(C_r−C_obj)/(C_obj−C_a) = ' + Qr + '×(' + Cr + '−' + Cobj + ')/(' + Cobj + '−' + Ca + ') = <strong>' + Qa_nec.toFixed(0) + ' m³/j</strong><br>';
  }

  rd += '• Modèle conservatif sans auto-épuration. Pour DBO₅ avec cinétique : C(x) = C_mél × e^(−K·x/V_r)';
  document.getElementById('rd-dil').innerHTML = rd;
}

function calcDecanteur() {
  if (!checkCalcLimit()) return;
  var Q   = parseFloat(document.getElementById('dec-q').value)   || 10;
  var d   = parseFloat(document.getElementById('dec-d').value)   || 50;
  var rho = parseFloat(document.getElementById('dec-rho').value) || 1100;
  var T   = parseFloat(document.getElementById('dec-t').value)   || 15;
  var ks  = parseFloat(document.getElementById('dec-ks').value)  || 1.5;

  var g     = 9.81;
  var d_m   = d * 1e-6;
  var mu    = 1.787e-3 / (1 + 0.0337 * T + 2.21e-4 * T * T);
  var vs_ms = g * (rho - 1000) * d_m * d_m / (18 * mu);
  var vs_mh = vs_ms * 3600;
  var Re    = 1000 * vs_ms * d_m / mu;
  var ok    = Re < 0.5;

  var qs   = vs_mh / ks;
  var A    = Q / qs;
  var th_h = (A * 3) / Q;

  var rb = document.getElementById('res-dec');
  rb.classList.add('show');
  rb.style.borderLeftColor = ok ? 'var(--c-ok)' : 'var(--c-warn)';

  document.getElementById('rv-dec').textContent =
    'vs = ' + vs_mh.toFixed(4) + ' m/h  ·  q_s = ' + qs.toFixed(4) + ' m/h  ·  A_min = ' + A.toFixed(1) + ' m²';

  document.getElementById('rd-dec').innerHTML =
    '• Q = ' + Q + ' m³/h · d₅₀ = ' + d + ' μm · ρ_p = ' + rho + ' kg/m³ · T = ' + T + '°C · μ = ' + (mu * 1e3).toFixed(3) + ' mPa·s<br>'
    + '• vs (Stokes) = g(ρ_p−ρ_e)d²/(18μ) = 9,81×' + (rho-1000) + '×(' + d + 'e-6)²/(18×' + (mu*1e3).toFixed(4) + 'e-3) = <strong>' + vs_ms.toFixed(6) + ' m/s = ' + vs_mh.toFixed(4) + ' m/h</strong><br>'
    + '• Re = ρ_e·vs·d/μ = <strong>' + Re.toFixed(4) + '</strong> → ' + (ok ? '✓ Re < 0,5 · loi de Stokes valide' : '⚠ Re ≥ 0,5 · loi de Stokes invalide — utiliser loi d\'Allen ou Newton') + '<br>'
    + '• q_s design = vs / k_s = ' + vs_mh.toFixed(4) + ' / ' + ks + ' = <strong>' + qs.toFixed(4) + ' m/h</strong><br>'
    + '• Surface minimale A = Q / q_s = ' + Q + ' / ' + qs.toFixed(4) + ' = <strong>' + A.toFixed(1) + ' m²</strong><br>'
    + '• Volume (H = 3 m) = ' + (A * 3).toFixed(1) + ' m³ · Temps de séjour ≈ ' + (th_h * 60).toFixed(0) + ' min<br>'
    + '• Repères : décanteur statique q_s ≤ 1 m/h · décanteur lamellaire q_s ≤ 10 m/h';
}

function jaugToggleMode() {
  var mode = document.getElementById('jaug-mode').value;
  document.getElementById('jaug-dil').style.display = mode === 'dil' ? '' : 'none';
  document.getElementById('jaug-dev').style.display = mode === 'dev' ? '' : 'none';
}

function calcJaugeage() {
  if (!checkCalcLimit()) return;
  var mode = document.getElementById('jaug-mode').value;
  var rb = document.getElementById('res-jaug');
  rb.classList.add('show');

  if (mode === 'dil') {
    var q_inj  = parseFloat(document.getElementById('jaug-qinj').value)  || 0.1;
    var C_inj  = parseFloat(document.getElementById('jaug-cinj').value)  || 100;
    var C_fond = parseFloat(document.getElementById('jaug-cfond').value) || 0;
    var C_plat = parseFloat(document.getElementById('jaug-cplat').value) || 2.5;

    var C_inj_mgL = C_inj * 1000;
    var dC = C_plat - C_fond;
    if (dC <= 0) {
      rb.style.borderLeftColor = 'var(--c-warn)';
      document.getElementById('rv-jaug').textContent = '⚠ C_aval doit être > C_fond';
      document.getElementById('rd-jaug').innerHTML = '';
      return;
    }
    var Q_Ls  = q_inj * (C_inj_mgL - C_plat) / dC;
    var Q_m3s = Q_Ls / 1000;

    rb.style.borderLeftColor = 'var(--c-ok)';
    document.getElementById('rv-jaug').textContent =
      'Q = ' + Q_Ls.toFixed(2) + ' L/s  =  ' + Q_m3s.toFixed(5) + ' m³/s  =  ' + (Q_m3s * 86400).toFixed(0) + ' m³/j';
    document.getElementById('rd-jaug').innerHTML =
      '• Injection : q = ' + q_inj + ' L/s · C_inj = ' + C_inj + ' g/L = ' + C_inj_mgL.toFixed(0) + ' mg/L<br>'
      + '• C_fond = ' + C_fond + ' mg/L · C_plateau = ' + C_plat + ' mg/L<br>'
      + '• Q = q × (C_inj − C_aval) / (C_aval − C_fond) = ' + q_inj + ' × (' + C_inj_mgL.toFixed(0) + ' − ' + C_plat + ') / (' + C_plat + ' − ' + C_fond + ') = <strong>' + Q_Ls.toFixed(2) + ' L/s</strong><br>'
      + '• Traceurs courants : NaCl (conductivité) · Rhodamine B (fluorométrie) · Fluorescéine (colorimétrie)<br>'
      + '• Conditions : injection homogène en section · mélange complet ≥ 10–30×largeur en aval de l\'injection';

  } else {
    var h     = parseFloat(document.getElementById('jaug-h').value)     || 0.25;
    var theta = parseFloat(document.getElementById('jaug-theta').value) || 90;
    var Cd    = parseFloat(document.getElementById('jaug-cd').value)    || 0.587;

    var alpha_rad = theta * Math.PI / 180;
    var Q_m3s = (8 / 15) * Cd * Math.tan(alpha_rad / 2) * Math.sqrt(2 * 9.81) * Math.pow(h, 2.5);
    var Q_Ls  = Q_m3s * 1000;

    rb.style.borderLeftColor = 'var(--c-ok)';
    document.getElementById('rv-jaug').textContent =
      'Q = ' + Q_Ls.toFixed(3) + ' L/s  =  ' + Q_m3s.toFixed(6) + ' m³/s';
    document.getElementById('rd-jaug').innerHTML =
      '• Déversoir triangulaire · α = ' + theta + '° · C_d = ' + Cd + ' · h = ' + h + ' m<br>'
      + '• Q = 8/15 × C_d × tan(α/2) × √(2g) × h^(5/2)<br>'
      + '  = 8/15 × ' + Cd + ' × tan(' + (theta/2).toFixed(1) + '°) × ' + Math.sqrt(2*9.81).toFixed(3) + ' × ' + h + '^2,5<br>'
      + '  = <strong>' + Q_m3s.toFixed(6) + ' m³/s = ' + Q_Ls.toFixed(3) + ' L/s</strong><br>'
      + '• Thomson 90° simplifié : Q ≈ 1,38 × h^2,5 · (' + (1.38 * Math.pow(h, 2.5) * 1000).toFixed(3) + ' L/s pour h = ' + h + ' m)<br>'
      + '• ⚠ Mesurer h à ≥ 3h en amont · Crête vive · Déversoir non noyé · Hauteur minimale h ≥ 50 mm';
  }
}

function calcCoagulation() {
  if (!checkCalcLimit()) return;
  var type = document.getElementById('coag-type').value;
  var Q    = parseFloat(document.getElementById('coag-q').value)    || 1000;
  var dose = parseFloat(document.getElementById('coag-dose').value) || 30;
  var MES  = parseFloat(document.getElementById('coag-mes').value)  || 20;
  var TAC  = parseFloat(document.getElementById('coag-tac').value)  || 150;
  var eta  = parseFloat(document.getElementById('coag-eta').value)  || 90;

  var fAlk, fFloc, label;
  if (type === 'alun') {
    fAlk = 0.450; fFloc = 0.234; label = 'Alun Al₂(SO₄)₃·18H₂O';
  } else if (type === 'pac') {
    fAlk = 0.430; fFloc = 0.400; label = 'PAC';
  } else {
    fAlk = 0.923; fFloc = 0.659; label = 'FeCl₃';
  }

  var m_coag  = Q * dose / 1000;
  var dAlk    = dose * fAlk;
  var TAC_res = TAC - dAlk;
  var m_floc  = m_coag * fFloc;
  var m_MES   = Q * MES * eta / 100 / 1000;
  var m_boues = m_floc + m_MES;
  var V_boues = m_boues / 10;

  var tac_ok = TAC_res >= 30;
  var rb = document.getElementById('res-coag');
  rb.classList.add('show');
  rb.style.borderLeftColor = tac_ok ? 'var(--c-ok)' : 'var(--c-warn)';

  document.getElementById('rv-coag').textContent =
    'm_coag = ' + m_coag.toFixed(1) + ' kg/j  ·  Boues = ' + m_boues.toFixed(1) + ' kg MS/j  ·  TAC résid. = ' + TAC_res.toFixed(0) + ' mg/L';

  document.getElementById('rd-coag').innerHTML =
    '• ' + label + ' · Dose = ' + dose + ' mg/L · Q = ' + Q + ' m³/j · MES = ' + MES + ' mg/L · TAC = ' + TAC + ' mg CaCO₃/L<br>'
    + '• Consommation coagulant = Q×dose/1000 = <strong>' + m_coag.toFixed(1) + ' kg/j = ' + (m_coag * 365 / 1000).toFixed(2) + ' t/an</strong><br>'
    + '• Consommation alcalinité Δ_TAC = ' + dose + ' × ' + fAlk + ' = <strong>' + dAlk.toFixed(1) + ' mg CaCO₃/L</strong><br>'
    + '• TAC résiduelle = ' + TAC + ' − ' + dAlk.toFixed(1) + ' = <strong>' + TAC_res.toFixed(0) + ' mg CaCO₃/L</strong> '
    + (tac_ok ? '✓ ≥ 30 mg/L' : '⚠ < 30 mg/L — risque de pH acide, ajouter chaux ou soude') + '<br>'
    + '• Floc coagulant = ' + m_coag.toFixed(1) + ' × ' + fFloc + ' = ' + m_floc.toFixed(1) + ' kg/j<br>'
    + '• MES décantées = ' + Q + ' × ' + MES + ' × ' + eta + '% / 1000 = ' + m_MES.toFixed(1) + ' kg/j<br>'
    + '• Boues totales = <strong>' + m_boues.toFixed(1) + ' kg MS/j</strong> · Volume à 1% siccité ≈ <strong>' + V_boues.toFixed(2) + ' m³/j</strong>';
}

function calcHazenWilliams() {
  if (!checkCalcLimit()) return;
  var Q_Ls = parseFloat(document.getElementById('hw-q').value) || 5;
  var D_mm = parseFloat(document.getElementById('hw-d').value) || 100;
  var C    = parseFloat(document.getElementById('hw-c').value) || 130;
  var L    = parseFloat(document.getElementById('hw-l').value) || 500;

  var Q_m3s = Q_Ls / 1000;
  var D     = D_mm / 1000;
  var A     = Math.PI * D * D / 4;
  var V     = Q_m3s / A;

  // J = (Q / (0.2785 × C × D^2.63))^(1/0.54) [m/m]
  var J     = Math.pow(Q_m3s / (0.2785 * C * Math.pow(D, 2.63)), 1 / 0.54);
  var hf    = J * L;
  var J_mkm = J * 1000;

  var v_ok  = V >= 0.3 && V <= 3.0;
  var j_ok  = J_mkm >= 1 && J_mkm <= 10;

  var rb = document.getElementById('res-hw');
  rb.classList.add('show');
  rb.style.borderLeftColor = (v_ok && j_ok) ? 'var(--c-ok)' : 'var(--c-warn)';

  document.getElementById('rv-hw').textContent =
    'hf = ' + hf.toFixed(2) + ' m  ·  J = ' + J_mkm.toFixed(2) + ' m/km  ·  V = ' + V.toFixed(3) + ' m/s';

  document.getElementById('rd-hw').innerHTML =
    '• Q = ' + Q_Ls + ' L/s · D = ' + D_mm + ' mm · C_HW = ' + C + ' · L = ' + L + ' m<br>'
    + '• V = Q/A = ' + Q_Ls + 'e-3 / (π×' + D_mm + '²/4×1e-6) = <strong>' + V.toFixed(3) + ' m/s</strong> ' + (v_ok ? '✓ (0,3–3,0 m/s)' : '⚠ Hors plage AEP 0,3–3,0 m/s') + '<br>'
    + '• J = (Q / (0,2785·C·D^2,63))^(1/0,54)<br>'
    + '  = (' + Q_m3s.toFixed(5) + ' / (0,2785 × ' + C + ' × ' + D + '^2,63))^1,852<br>'
    + '  = <strong>' + J_mkm.toFixed(2) + ' m/km</strong> ' + (j_ok ? '✓ (1–10 m/km)' : '⚠ Hors plage usuelle 1–10 m/km') + '<br>'
    + '• hf = J × L = ' + J_mkm.toFixed(2) + 'e-3 × ' + L + ' = <strong>' + hf.toFixed(2) + ' m</strong><br>'
    + '• Pression résiduelle = P_source − hf − Δz · Minimum requis AEP : 10 m CE en points hauts<br>'
    + '• Comparaison Darcy-Weisbach : utiliser onglet Calculateurs avancés pour vérification avec Colebrook';
}

function calcUVDesinfection() {
  if (!checkCalcLimit()) return;
  var org   = document.getElementById('uv-org').value;
  var li    = parseFloat(document.getElementById('uv-li').value)   || 3;
  var D_nom = parseFloat(document.getElementById('uv-dnom').value) || 40;
  var UVT   = parseFloat(document.getElementById('uv-uvt').value)  || 92;

  var doses = {
    giardia: [0, 1.5, 3.0, 5.0, 11.0, 14.0, 18.0],
    crypto:  [0, 2.5, 5.8, 8.5, 12.0, 15.0, 22.0],
    ecoli:   [0, 1.4, 3.5, 6.0, 11.0, 16.0, 22.0]
  };
  var labels = {
    giardia: 'Giardia lamblia',
    crypto:  'Cryptosporidium parvum',
    ecoli:   'E. coli'
  };

  var li_c  = Math.max(0.5, Math.min(li, 6));
  var li_lo = Math.max(1, Math.floor(li_c));
  var li_hi = Math.min(6, Math.ceil(li_c));
  var d     = doses[org];
  var D_req = li_lo === li_hi ? d[li_lo]
              : d[li_lo] + (li_c - li_lo) * (d[li_hi] - d[li_lo]);

  var D_eff = D_nom * Math.pow(UVT / 95, 2);
  var ok    = D_eff >= D_req;

  var rb = document.getElementById('res-uv');
  rb.classList.add('show');
  rb.style.borderLeftColor = ok ? 'var(--c-ok)' : 'var(--c-warn)';

  document.getElementById('rv-uv').textContent =
    'D_req = ' + D_req.toFixed(1) + ' mJ/cm²  ·  D_eff = ' + D_eff.toFixed(1) + ' mJ/cm²';

  document.getElementById('rd-uv').innerHTML =
    '• ' + labels[org] + ' · ' + li + '-log · UVT₂₅₄ = ' + UVT + '% · D_nominale = ' + D_nom + ' mJ/cm²<br>'
    + '• Dose requise (USEPA 2006) : <strong>' + D_req.toFixed(1) + ' mJ/cm²</strong><br>'
    + '• Correction UVT : D_eff = ' + D_nom + ' × (' + UVT + '/95)² = <strong>' + D_eff.toFixed(1) + ' mJ/cm²</strong><br>'
    + (ok
      ? '✓ D_eff (' + D_eff.toFixed(1) + ') ≥ D_req (' + D_req.toFixed(1) + ') — objectif atteint'
      : '⚠ D_eff (' + D_eff.toFixed(1) + ') < D_req (' + D_req.toFixed(1) + ') — déficit ' + (D_req - D_eff).toFixed(1) + ' mJ/cm² · Réduire Q ou augmenter puissance') + '<br>'
    + '• Doses indicatives LP 254 nm (mJ/cm²) :<br>'
    + '  Giardia : 1-log→1,5 · 2-log→3,0 · 3-log→5,0 · 4-log→11,0<br>'
    + '  Crypto : 1-log→2,5 · 2-log→5,8 · 3-log→8,5 · 4-log→12,0<br>'
    + '  E.coli : 1-log→1,4 · 2-log→3,5 · 3-log→6,0 · 4-log→11,0<br>'
    + '• UV : très efficace sur Crypto (contrairement au Cl₂) · Virus : doses très élevées (MS2→39 mJ/cm² 3-log)';
}

function calcTHAdoucissement() {
  if (!checkCalcLimit()) return;
  var TH_in  = parseFloat(document.getElementById('th-in').value)   || 30;
  var TH_obj = parseFloat(document.getElementById('th-obj').value)  || 20;
  var Q      = parseFloat(document.getElementById('th-q').value)    || 10;
  var V_res  = parseFloat(document.getElementById('th-vres').value) || 100;
  var cap    = parseFloat(document.getElementById('th-cap').value)  || 1.5;

  var TH_mgL  = TH_in * 10;
  var TH_mmol = TH_in * 0.1;
  var TH_dGer = TH_in / 1.783;
  var TH_eqL  = TH_in * 0.0002;  // eq/L (1°f=10mgCaCO3/L, 50g/eq → 0.0002 eq/L)

  var classe;
  if (TH_in < 10)      classe = 'Très douce';
  else if (TH_in < 15) classe = 'Douce';
  else if (TH_in < 25) classe = 'Moyennement dure';
  else if (TH_in < 40) classe = 'Dure';
  else                  classe = 'Très dure';

  var Q_byp_pct = TH_obj >= TH_in ? 100 : (TH_obj / TH_in) * 100;
  var Q_tr_pct  = 100 - Q_byp_pct;
  var Q_tr_m3j  = Q * Q_tr_pct / 100;

  var V_per_L    = cap / TH_eqL;          // L water per L resin
  var V_regen_m3 = V_res * V_per_L / 1000;
  var autonomie  = Q_tr_m3j > 0 ? V_regen_m3 / Q_tr_m3j : Infinity;
  var m_NaCl     = V_res * 0.120;          // kg (120 g/L resin)

  var obj_ok = TH_obj >= 15 && TH_obj <= 35;
  var rb = document.getElementById('res-th');
  rb.classList.add('show');
  rb.style.borderLeftColor = obj_ok ? 'var(--c-ok)' : 'var(--c-warn)';

  document.getElementById('rv-th').textContent =
    TH_in + '°f (' + classe + ')  ·  Bypass = ' + Q_byp_pct.toFixed(0) + '%  ·  Autonomie ≈ ' + (isFinite(autonomie) ? autonomie.toFixed(1) + ' j' : '∞');

  document.getElementById('rd-th').innerHTML =
    '• TH = ' + TH_in + '°f = ' + TH_mgL + ' mg CaCO₃/L = ' + TH_mmol.toFixed(1) + ' mmol/L = ' + TH_dGer.toFixed(1) + '°d · <strong>' + classe + '</strong><br>'
    + '• Objectif ' + TH_obj + '°f ' + (obj_ok ? '✓ plage AEP 15–35°f' : '⚠ Hors recommandation 15–35°f') + '<br>'
    + '• Bypass : Q_byp = TH_obj/TH_in = ' + TH_obj + '/' + TH_in + ' = <strong>' + Q_byp_pct.toFixed(1) + '%</strong> · Q_traité = <strong>' + Q_tr_pct.toFixed(1) + '%</strong><br>'
    + '  Mélange : ' + TH_in + ' × ' + (Q_byp_pct/100).toFixed(3) + ' + 0 × ' + (Q_tr_pct/100).toFixed(3) + ' = <strong>' + (TH_in * Q_byp_pct / 100).toFixed(1) + '°f</strong><br>'
    + '• TH_éq = ' + TH_in + ' × 0,0002 = ' + TH_eqL.toFixed(4) + ' eq/L<br>'
    + '• V_traitable/L résine = cap/TH_éq = ' + cap + '/' + TH_eqL.toFixed(4) + ' = <strong>' + V_per_L.toFixed(0) + ' L/L rés.</strong><br>'
    + '• Volume avant régénération = ' + V_res + ' × ' + V_per_L.toFixed(0) + ' L = <strong>' + V_regen_m3.toFixed(2) + ' m³</strong><br>'
    + '• Q sur résine = ' + Q_tr_m3j.toFixed(2) + ' m³/j → autonomie ≈ <strong>' + (isFinite(autonomie) ? autonomie.toFixed(1) + ' jours' : 'illimitée') + '</strong><br>'
    + '• NaCl régénération = ' + V_res + ' L × 120 g/L = <strong>' + (m_NaCl * 1000).toFixed(0) + ' g = ' + m_NaCl.toFixed(2) + ' kg</strong>';
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
    {ico:'💧',sigle:'BTS MDE',name:'BTS Métiers de l\'Eau',orga:'MEN · Lycées techniques',niveau:'Bac+2',color:'var(--c-ac)',desc:'Forme des techniciens en AEP, assainissement, STEU, contrôle qualité. Modules : hydraulique, traitement, instrumentation, réglementation, gestion.',coursId:'bts-gemeau'},
    {ico:'🌊',sigle:'BTSA GEMEAU',name:'BTSA Gestion et Maîtrise de l\'Eau',orga:'Ministère Agriculture · Lycées agricoles',niveau:'Bac+2',color:'var(--c-anc)',desc:'Hydraulique agricole, ANC, milieux aquatiques, réglementation. 6 UE. Fort contenu terrain et SPANC.',coursId:'bts-gemeau'},
    {ico:'🎓',sigle:'LP EAU',name:'Licence Pro Métiers de l\'Eau',orga:'Universités · IUT',niveau:'Bac+3',color:'var(--c-ep)',desc:'Spécialisation après BTS/BUT. Exploitation réseau, traitement avancé, milieux aquatiques, droit de l\'eau. Souvent en alternance.',coursId:'licence-pro'},
    {ico:'🔬',sigle:'M2 EAU',name:'Master Sciences de l\'Eau',orga:'Universités · AgroParisTech · SupAgro',niveau:'Bac+5',color:'var(--c-aides)',desc:'Hydrologie, hydrogéologie, qualité des eaux, modélisation (MODFLOW). Theis/Cooper-Jacob, PFAS, NDWI. Débouche sur BRGM, bureaux d\'études, Agences.',coursId:'master-eau'},
    {ico:'🏛️',sigle:'ENGEES',name:'Ingénieur ENGEES',orga:'ENGEES Strasbourg',niveau:'Bac+5/6',color:'var(--c-form)',desc:'Seule école d\'ingénieur spécialisée eau. Saint-Venant, Bishop, marchés publics, changement climatique. Partenariats OFB, INRAE, Agences de l\'eau.',coursId:null},
    {ico:'🏆',sigle:'MS EPA',name:'Mastère Spécialisé® EPA',orga:'ENGEES · Accréditation CGE',niveau:'Post-ingénieur',color:'var(--c-regl)',desc:'Formation d\'excellence post-ingénieur. PSE/HACCP, SDG6, tarification, coopération internationale. Référence nationale cadres du secteur eau.',coursId:null},
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
      <div class="mod-list-card" style="--cat-color:${f.color}" ${f.coursId ? `onclick="renderCoursFormation('${f.coursId}')"` : ''}>
        <div class="mlc-icon">${f.ico}</div>
        <div class="mlc-body">
          <div style="font-size:10px;font-weight:800;color:${f.color};letter-spacing:.06em;text-transform:uppercase;margin-bottom:2px">${f.sigle}</div>
          <div class="mlc-name">${f.name}</div>
          <div class="mlc-sub">${f.orga}</div>
          <div style="font-size:11px;color:var(--c-text-3);margin-top:5px;line-height:1.6">${f.desc}</div>
          <div class="mlc-tags" style="margin-top:6px">
            <span class="mlc-tag">${f.niveau}</span>
            ${f.coursId ? '<span class="mlc-tag" style="background:var(--c-ok-l);color:var(--c-ok)">📚 Cours disponibles</span>' : ''}
          </div>
        </div>
        ${f.coursId ? '<span class="mlc-arrow">›</span>' : ''}
      </div>`).join('')}
    </div>
    <div class="pb-nav"></div>`;
}

/* ─── RENDER MATÉRIAUX ─── */
function renderMateriaux() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';

  var cats = [
    {
      id:'canal', ico:'🔵', title:'Canalisations', color:'var(--c-ac)',
      items:[
        {ico:'🔵',name:'PVC assainissement (PVC-U)',sub:'NF EN 1401 · EU/EP gravitaire · DN 100–630',color:'var(--c-ac)',colorl:'var(--c-ac-l)',
          specs:{'Norme':'NF EN 1401','DN courants':'100–630 mm','Strickler K':'90–100','Pression':'Gravitaire (SDR 34–51)','Durée de vie':'≥ 50 ans','Marques':'Nicoll · Wavin · Saint-Gobain PAM'},
          avantages:['Excellent coefficient de Manning-Strickler K = 90–100','Très léger : pose rapide, économie de main-d\'œuvre','Résistance chimique aux effluents domestiques et industriels légers','Disponible en SN4, SN8, SN16 selon la profondeur','Assemblage rapide par emboîtement à joints à lèvres'],
          inconvenients:['Fragile aux chocs à basse température (< −5 °C)','Sensible aux hydrocarbures concentrés et solvants','Résistance au feu limitée (usage intérieur)','DN > 630 mm peu disponible'],
          note:'Utiliser SN8 minimum en voirie, SN16 sous forte charge (route nationale, voie ferrée).'},
        {ico:'🟤',name:'PEHD (Polyéthylène Haute Densité)',sub:'NF EN 13244 · AEP sous pression · Forage dirigé',color:'var(--c-ep)',colorl:'var(--c-ep-l)',
          specs:{'Norme':'NF EN 13244','Classes':'PE80 · PE100 · PE100-RC','PN courants':'PN6 à PN25','DN':'20–1 200 mm','Durée de vie':'≥ 50 ans','Marques':'Uponor · Wavin · Georg Fischer (GF)'},
          avantages:['Soudage bout-à-bout → conduite monobloc sans points faibles','Souple : pose en courbe, forage dirigé, microtunneling','Excellente résistance chimique (pH 2–14)','Légèreté : DN110 PN10 ≈ 1,5 kg/m','PE100-RC : résistance à la fissuration par contrainte'],
          inconvenients:['Soudage exige opérateur qualifié + machine thermofusion','Sensible aux UV (protection bitume ou enfouissement)','Coefficient de dilatation élevé (gestion en surface)','Moins rigide que fonte sous forte pression externe'],
          note:'PE100 recommandé pour l\'AEP. PE100-RC obligatoire pour pose sans lit de sable (tranchée étroite).'},
        {ico:'⚙️',name:'Fonte ductile (FD)',sub:'NF EN 545/598 · Grands DN · Durée > 100 ans',color:'var(--c-ref)',colorl:'var(--c-ref-l)',
          specs:{'Norme AEP':'NF EN 545','Norme EU':'NF EN 598','DN':'80–2 000 mm','Revêtement int.':'Mortier de ciment centrifugé','Strickler K':'100–130 (neuf)','Durée de vie':'> 100 ans','Marques':'Saint-Gobain PAM · Pont-à-Mousson · Tyton'},
          avantages:['Résistance mécanique exceptionnelle (allongement rupture > 10%)','Joints automatiques anti-traction (Tyton, Express)','Durée de vie > 100 ans avec revêtement zinc + mortier','DN très grands disponibles (jusqu\'à DN2 000)','Résistance aux coups de bélier'],
          inconvenients:['Très lourd : DN300 ≈ 95 kg/m → engins nécessaires','Coût élevé : 2–5× le PEHD','Délai d\'approvisionnement long pour grands DN','Corrosion externe possible en sol agressif'],
          note:'Privilégier la fonte pour DN > 300 mm en AEP, zones sismiques, et traversées de cours d\'eau.'},
        {ico:'🟫',name:'Grès cérame (GC)',sub:'NF EN 295 · EU gravitaire · Très longue durée',color:'var(--c-anc)',colorl:'var(--c-anc-l)',
          specs:{'Norme':'NF EN 295','DN courants':'100–600 mm','Strickler K':'70–90','Résistance':'Très haute aux acides','Durée de vie':'> 100 ans','Marques':'Steinzeug-Keramo · Naylor'},
          avantages:['Résistance chimique exceptionnelle (acides, bases, H2S)','Durée de vie > 100 ans sans entretien','Surface lisse intérieure : bonnes performances hydrauliques','Aucune corrosion, aucun vieillissement'],
          inconvenients:['Fragile aux chocs et aux efforts mécaniques','Assemblage par manchons : attention à l\'étanchéité','Lourd : DN200 ≈ 35 kg/m','Peu utilisé au-delà de DN 600 mm'],
          note:'Usage privilégié en assainissement industriel (acides, effluents agressifs) et en réhabilitation de réseaux anciens.'},
        {ico:'🏗️',name:'Béton armé (BAC)',sub:'NF EN 1916 · Collecteurs EU/EP DN ≥ 400',color:'var(--c-riv)',colorl:'var(--c-riv-l)',
          specs:{'Norme':'NF EN 1916','DN courants':'400–3 000 mm','Strickler K':'60–80','Revêtement':'Ciment alumineux ou PEHD','Durée de vie':'50–80 ans','Marques':'Prefaest · Bonna Sabla · Vicat'},
          avantages:['Adapté aux très grands diamètres','Résistance aux charges importantes','Coût matière réduit pour grands ouvrages','Disponible en forme ovoïde, circulaire, rectangulaire'],
          inconvenients:['Sensible au H2S (attaque bactérienne du ciment)','Joints = points sensibles à l\'infiltration','Lourd → pose longue et coûteuse','Réhabilitation complexe'],
          note:'Protection obligatoire contre le H2S par revêtement ciment alumineux ou chemisage PEHD pour tout ouvrage EU à forte charge organique.'},
        {ico:'🔧',name:'Acier inoxydable (Inox)',sub:'EN 10217-7 · Installations industrielles · Potable',color:'var(--c-ep)',colorl:'var(--c-ep-l)',
          specs:{'Grades courants':'304 (L) · 316 (L)','DN':'15–600 mm','Pression':'PN6 à PN40','Assemblage':'Soudage TIG · Raccords DIN','Durée de vie':'> 50 ans','Marques':'Georg Fischer · Viega · Buderus'},
          avantages:['Hygiénique : conforme contact alimentaire ACS','Résistance à la corrosion même en milieu chloré','Haute résistance mécanique et thermique (−200°C à +800°C)','Recyclable à 100%'],
          inconvenients:['Coût élevé (5–10× PVC)','Soudage nécessite atmosphère inerte (TIG)','Corrosion par piqûres en milieu chloruré si grade inadapté'],
          note:'Grade 316L obligatoire en eau de mer ou milieu riche en chlorures. 304L suffisant pour eau potable standard.'},
        {ico:'⚠️',name:'Amiante-ciment (AC)',sub:'INTERDIT à neuf · EPI FFP3 · Déchet dangereux',color:'var(--c-nc)',colorl:'var(--c-nc-l)',
          specs:{'Statut':'INTERDIT à neuf (Décret 96-1133)','EPI':'Masque FFP3 + combinaison type 5','Entreprise':'Certifiée SS4 obligatoire','Déchet':'DIS → sac PEHD double + BSDa','Remplacement':'PEHD ou Fonte ductile'},
          avantages:['Aucun avantage pour un matériau interdit'],
          inconvenients:['Fibres d\'amiante cancérogènes (mésothéliome)','Tout travail sans protection = délit pénal','Traçabilité déchets obligatoire (BSDa)','Coût de dépose et traitement très élevé'],
          note:'Tout réseau en AC rencontré en travaux doit faire l\'objet d\'un plan de retrait SS4. Ne jamais casser, scier ou meulre sans EPI FFP3.'},
      ]
    },
    {
      id:'pompes', ico:'⚡', title:'Pompes & Surpresseurs', color:'var(--c-ep)',
      items:[
        {ico:'⚡',name:'Pompes centrifuges immergées',sub:'Grundfos · KSB · Flygt (Xylem) · Sulzer',color:'var(--c-ep)',colorl:'var(--c-ep-l)',
          specs:{'Principaux fabricants':'Grundfos · KSB · Flygt (Xylem) · Sulzer','Gammes AEP':'Grundfos SP · KSB Boa · Flygt NB','Gammes EU':'Grundfos S · Flygt N · Sulzer ABS','Courbe':'Q-H caractéristique fournie constructeur','Rendement':'65–90% selon point de fonctionnement','Régulation':'Vitesse variable (VFD) recommandée'},
          avantages:['Compact : installation dans la bâche','Pas de problème d\'amorçage','Large plage de débit et HMT','Moteur refroidi par le liquide pompé'],
          inconvenients:['Maintenance complexe (extraction de la pompe)','Coût d\'entretien élevé pour les eaux chargées','Câblage électrique immergé = contrainte'],
          note:'Grundfos domine le marché AEP (série SP pour forages). Flygt (Xylem) leader sur le marché EU/eaux usées avec les séries N et C.'},
        {ico:'🔄',name:'Surpresseurs & Groupes de pompage',sub:'Grundfos Hydro MPC · DAB · Wilo · Ebara',color:'var(--c-ep)',colorl:'var(--c-ep-l)',
          specs:{'Marques':'Grundfos Hydro MPC · DAB · Wilo · Ebara','Régulation':'Variateur de fréquence intégré','Pression consigne':'Réglable 1–16 bar selon modèle','Redondance':'Pompe secours automatique','Certification AEP':'ACS obligatoire pour contact eau potable'},
          avantages:['Maintien de pression constant (0±0,1 bar)','Économie d\'énergie par variateur intégré','Démarrage progressif → pas de coup de bélier','Supervision intégrée (alarmes, compteurs)'],
          inconvenients:['Coût d\'investissement élevé','Nécessite alimentation électrique de qualité','Risque légionelles si eau stagne (T > 25°C)'],
          note:'Pour les réseaux AEP, choisir uniquement des matériaux ACS (acier inox 304/316, EPDM). Vérifier la certification sur le site du Ministère.'},
        {ico:'🌊',name:'Pompes de relevage EU/EP',sub:'Flygt · Grundfos · Jung Pumpen · Sulzer ABS',color:'var(--c-ac)',colorl:'var(--c-ac-l)',
          specs:{'Marques EU':'Flygt (Xylem) · Grundfos S · Sulzer ABS','Marques EP':'Jung Pumpen · Wilo · Lowara','Roue':'Vortex (EU chargée) · Canal (EU diluée)','Dégrillage':'Automatique sur certains modèles','Sondes':'Niveau flotteur ou ultrasons'},
          avantages:['Roue vortex : passage des matières en suspension','Auto-nettoyage de la roue sur certains modèles','Résine époxy anticorrosion en standard','Surveillance à distance possible (SCADA)'],
          inconvenients:['Entretien régulier obligatoire (garnitures mécaniques)','Accumulation de graisses → curage périodique','Bruit possible en cas de cavitation'],
          note:'Pour EU chargées (restaurant, industriel), toujours choisir une roue vortex ou à canal libre. Le Flygt N est la référence mondiale sur ce segment.'},
      ]
    },
    {
      id:'vannes', ico:'🔩', title:'Vannes & Robinetterie', color:'var(--c-ref)',
      items:[
        {ico:'🔩',name:'Vannes guillotine (à opercule)',sub:'NF EN 1171 · Réseau AEP · Isolement DN50–DN600',color:'var(--c-ref)',colorl:'var(--c-ref-l)',
          specs:{'Norme':'NF EN 1171','DN courants':'50–600 mm','Pression':'PN10 à PN25','Corps':'Fonte ductile · Inox','Étanchéité':'Siège caoutchouc EPDM','Marques':'AVK · Hawle · Saint-Gobain · Belgicast'},
          avantages:['Très faible perte de charge en position ouverte','Résistance aux corps étrangers','Longue durée de vie (> 30 ans)','Disponible télécommandable'],
          inconvenients:['Ne règle pas le débit (tout ou rien)','Opercule fragile si manœuvre trop fréquente'],
          note:'Standard sur les réseaux AEP de DN50 à DN600. AVK et Hawle sont les marques dominantes en France.'},
        {ico:'🔵',name:'Vannes papillon (à disque)',sub:'NF EN 593 · Grands DN · Isolement rapide',color:'var(--c-ep)',colorl:'var(--c-ep-l)',
          specs:{'Norme':'NF EN 593','DN courants':'50–2 000 mm','Pression':'PN6 à PN25','Manœuvre':'Manuel · Motorisé · Pneumatique','Marques':'Ebro · Keystone · Alfa Laval · Georg Fischer'},
          avantages:['Compact et léger → économique pour grands DN','Ouverture/fermeture rapide (90°)','Motorisable facilement','Faible coût'],
          inconvenients:['Perte de charge plus élevée que vanne guillotine','Siège sensible aux corps abrasifs'],
          note:'Privilégier en sortie de station de pompage ou en collecteur principal. Motorisation AUMA ou Rotork pour télécommande SCADA.'},
        {ico:'🟡',name:'Réducteurs de pression (PRV)',sub:'NF EN 1567 · Maintien aval constant · 1–16 bar',color:'var(--c-anc)',colorl:'var(--c-anc-l)',
          specs:{'Norme':'NF EN 1567','DN courants':'25–300 mm','Pression aval':'Réglable 1–10 bar','Précision':'± 0,2 bar','Marques':'Watts · Bermad · Singer · Cla-Val','Entretien':'Révision membrane tous les 5 ans'},
          avantages:['Protection du réseau aval contre les surpressions','Réduction des pertes par fuites','Amélioration durée de vie des équipements aval','Versions pilotées pour télégestion'],
          inconvenients:['Nécessite by-pass pour maintenance','Colmatage possible par dépôts calcaires','Réglage délicat en zone de faible débit'],
          note:'Indispensable en zone de relief (pression statique > 6 bar). Bermad et Cla-Val sont les références pour les applications sous pression variable.'},
        {ico:'🔴',name:'Clapets anti-retour',sub:'NF EN 12334 · Protection contre le refoulement',color:'var(--c-nc)',colorl:'var(--c-nc-l)',
          specs:{'Norme':'NF EN 12334','Types':'Battant · Double battant · À ressort','DN courants':'15–600 mm','Pression max':'PN25','Marques':'Watts · AVK · Hawle · Socla'},
          avantages:['Protection indispensable contre les retours de canalisation','Faible coût','Pas de maintenance si milieu propre'],
          inconvenients:['Coup de bélier au claquement si fermeture rapide','Colmatage possible en EU chargée'],
          note:'Toujours installer un clapet à ressort en sortie de pompe pour éviter le coup de bélier. Clapet double battant recommandé pour DN > 200 mm.'},
      ]
    },
    {
      id:'compteurs', ico:'📊', title:'Comptage & Instrumentation', color:'var(--c-riv)',
      items:[
        {ico:'📊',name:'Compteurs d\'eau volumétriques',sub:'NF EN 14154 · AEP · Relève manuelle ou radio',color:'var(--c-riv)',colorl:'var(--c-riv-l)',
          specs:{'Norme':'NF EN 14154 · OIML R49','Types':'Woltmann · Vitesse · Electromagnétique','Classe':'C (Qmin = Q3/100) · D (Q3/200)','Télé-relève':'Module radio M-Bus · NB-IoT','Marques':'Itron (Actaris) · Kamstrup · Sensus · Diehl'},
          avantages:['Mesure précise de la consommation (classe C ou D)','Modules radio pour relève à distance','Détection des fuites nocturnes','Longue durée de vie (10–15 ans)'],
          inconvenients:['Classe C insuffisante pour les petits débits','Remplacement obligatoire à échéance métrologique (10 ans en général)','Sensible aux impuretés (filtration amont recommandée)'],
          note:'Kamstrup Multical et Itron Cyble dominent le marché français. Pour la télé-relève, le protocole M-Bus (EN 13757) est le standard européen.'},
        {ico:'🌊',name:'Débitmètres électromagnétiques',sub:'Krohne · Endress+Hauser · Siemens · ABB',color:'var(--c-ep)',colorl:'var(--c-ep-l)',
          specs:{'Principe':'Loi de Faraday (effet électromagnétique)','DN courants':'15–3 000 mm','Précision':'± 0,5%','Fluide':'Eau (σ ≥ 5 µS/cm) · EU · Boues diluées','Marques':'Krohne Optiflux · E+H Promag · Siemens Sitrans · ABB ProcessMaster'},
          avantages:['Aucune perte de charge (conduit plein lisse)','Précision ± 0,5% sur grande plage de débit','Mesure bidirectionnelle','Pas de pièce mobile → pas d\'usure'],
          inconvenients:['Nécessite conduit plein en permanence','Ne fonctionne pas sur fluides non conducteurs (eau déminéralisée)','Coût élevé pour grands DN'],
          note:'Endress+Hauser Promag W et Krohne Optiflux sont les références en France pour l\'AEP et l\'assainissement. Prévoir 5× DN de droite amont, 3× DN aval.'},
        {ico:'📡',name:'Sondes de niveau ultrasoniques',sub:'Endress+Hauser · VEGA · Siemens · Emerson',color:'var(--c-anc)',colorl:'var(--c-anc-l)',
          specs:{'Principe':'Temps de vol ultrasonique','Plage':'0,2–15 m (selon modèle)','Précision':'± 5 mm','Température':'−40 à +80°C','Sorties':'4–20 mA · HART · Profibus','Marques':'E+H Micropilot · VEGA Vegapuls · Siemens Milltronics'},
          avantages:['Sans contact → aucune usure ni colmatage','Installation simple (piquage DN 80)','Adapté aux bassins, canaux, cuves','Visualisation niveau + débit (loi de déversoir)'],
          inconvenients:['Zone aveugle (0,2–0,5 m en surface)','Interférences possibles avec turbulences, vapeur, mousse'],
          note:'VEGA Vegapuls 64 (radar 80 GHz) a largement remplacé l\'ultrasonique en milieu difficile. Toujours vérifier la zone aveugle par rapport au niveau maxi.'},
        {ico:'🖥️',name:'Automates & SCADA',sub:'Schneider · Siemens · ABB · Sofrel · Lacroix',color:'var(--c-ref)',colorl:'var(--c-ref-l)',
          specs:{'Automates':'Schneider M340 · Siemens S7 · ABB AC500','RTU terrain':'Sofrel S550 · Lacroix Sofrel · Carel','Protocoles':'Modbus · DNP3 · IEC 60870-5 · IEC 61850','Supervision':'Topkapi · IGS · PCVUE · Intouch · WinCC','Communication':'GSM/GPRS · LoRaWAN · Fibre'},
          avantages:['Supervision temps réel de tous les ouvrages','Alertes automatiques (alarmes, dépassements)','Traçabilité des données (obligation réglementaire)','Optimisation énergétique par régulation automatique'],
          inconvenients:['Coût d\'infrastructure élevé','Cybersécurité : réseaux OT à protéger (IEC 62443)','Nécessite des techniciens spécialisés'],
          note:'Sofrel (Lacroix) est le leader français pour les RTU en eau et assainissement. La communication LoRaWAN se développe pour les points isolés.'},
      ]
    },
    {
      id:'anc_equip', ico:'🌿', title:'Équipements ANC', color:'var(--c-anc)',
      items:[
        {ico:'🌿',name:'Microstations d\'épuration agréées',sub:'BioRoc · Orenco · Roth · Klaro · Infiltrea',color:'var(--c-anc)',colorl:'var(--c-anc-l)',
          specs:{'Agrément':'CE + Ministère MTES obligatoire','Procédés':'SBR · Cultures fixées · Cultures libres','EH':'3 à 20 EH (résidentiel)','Rejet':'< 30 mg/L DBO5 · < 125 mg/L DCO','Entretien':'Contrat 1×/an obligatoire','Marques':'BioRoc · Orenco AdvanTex · Roth · Klaro'},
          avantages:['Petite surface nécessaire (< 5 m²)','Performant en DBO5 et DCO','Adapté aux contraintes d\'espace','Agréé pour parcelles non drainantes'],
          inconvenients:['Coût élevé (8 000–15 000 €)','Contrat de maintenance obligatoire','Énergie électrique nécessaire (100–300 W)','Sensible aux absences prolongées (biologie)'],
          note:'BioRoc (technologie cultures fixées) et Orenco AdvanTex (filtration textile) sont parmi les plus fiables. Vérifier l\'agrément sur la liste officielle du MTES.'},
        {ico:'🏺',name:'Fosses toutes eaux (FTE)',sub:'DTU 64.1 · Béton · PEHD · Fibre de verre',color:'var(--c-anc)',colorl:'var(--c-anc-l)',
          specs:{'Norme':'DTU 64.1 · NF EN 12566-1','Volume ≤ 5 pp':'3 000 L','Volume > 5 pp':'+1 000 L/pp supplémentaire','Matériaux':'Béton · PEHD · PRV','Vidange':'Tous les 4 ans minimum (contractuelle)','Marques':'Sotralentz · Graf · Roth · Siplast'},
          avantages:['Prétraitement efficace (décantation + fermentation)','Durée de vie > 30 ans si entretenu','Nombreux fabricants → prix compétitif','Facilement vérifiable par vidange'],
          inconvenients:['Odeurs possibles si ventilation insuffisante','Colmatage si surcharge organique','Obligation de vidange non respectée fréquemment'],
          note:'La ventilation primaire (Ø 100 mm) et secondaire est OBLIGATOIRE. Sans ventilation correcte, les gaz corrodent la fosse et créent des odeurs.'},
        {ico:'🌾',name:'Filtres compacts agréés CE',sub:'Filtre à tourbe · Zéolithe · Coco · BioRoc',color:'var(--c-anc)',colorl:'var(--c-anc-l)',
          specs:{'Agrément':'CE selon NF EN 12566-3','Matériaux filtrants':'Tourbe · Coco · Zéolithe · Pouzzolane','Surface':'4–20 m² selon EH et agrément','Rejet':'DBO5 < 35 mg/L','Durée matériau':'5–15 ans selon type','Marques':'BioRoc · Biofiltre · Epur Nature · Eparco'},
          avantages:['Surface réduite vs épandage classique','Pas d\'eau électrique nécessaire (gravitaire)','Performances homologuées CE'],
          inconvenients:['Remplacement du matériau filtrant nécessaire','Coût du matériau à long terme','Non adapté à toutes les perméabilités de sol'],
          note:'Toujours respecter la notice d\'installation du fabricant pour l\'agrément. Une installation non conforme annule l\'agrément et engage la responsabilité de l\'installateur.'},
      ]
    },
  ];

  var html = '<div class="module-hero" style="--cat-color:var(--c-mat)">'
    + '<span class="mh-icon">🔩</span>'
    + '<div class="mh-title">Matériaux & Équipements</div>'
    + '<div class="mh-sub">Canalisations · Pompes · Vannes · Comptage · ANC · Marques & Normes</div>'
    + '<div class="mh-tags"><span class="mh-tag">NF EN</span><span class="mh-tag">Marques</span><span class="mh-tag">Comparatif</span></div>'
    + '</div>';

  html += '<div style="padding:var(--s-2) var(--s-4) 0"><div class="card card-p">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Tableau comparatif — Canalisations</div>'
    + '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px">'
    + '<tr style="background:var(--c-mat);color:#fff">'
    + '<th style="padding:6px 8px;text-align:left">Matériau</th>'
    + '<th style="padding:6px 8px;text-align:center">K (Strickler)</th>'
    + '<th style="padding:6px 8px;text-align:center">Durée de vie</th>'
    + '<th style="padding:6px 8px;text-align:center">Pression max</th>'
    + '<th style="padding:6px 8px;text-align:center">Statut</th>'
    + '</tr>'
    + [
        ['PVC-U','90–100','≥ 50 ans','Gravitaire','✓','var(--c-ok)'],
        ['PEHD PE100','90–100','≥ 50 ans','PN25','✓','var(--c-ok)'],
        ['Fonte ductile','100–130','> 100 ans','PN25+','✓','var(--c-ok)'],
        ['Grès cérame','70–90','> 100 ans','Gravitaire','✓','var(--c-ok)'],
        ['Béton armé','60–80','50–80 ans','Gravitaire','✓','var(--c-ok)'],
        ['Acier inox 316L','120–140','> 50 ans','PN40','✓','var(--c-ok)'],
        ['Amiante-ciment','—','INTERDIT','—','⛔','var(--c-danger)'],
      ].map(function(r){return '<tr style="border-bottom:1px solid var(--c-border)">'
        +'<td style="padding:6px 8px;font-weight:600">'+r[0]+'</td>'
        +'<td style="padding:6px 8px;text-align:center;color:var(--c-text-3)">'+r[1]+'</td>'
        +'<td style="padding:6px 8px;text-align:center;color:var(--c-text-3)">'+r[2]+'</td>'
        +'<td style="padding:6px 8px;text-align:center;color:var(--c-text-3)">'+r[3]+'</td>'
        +'<td style="padding:6px 8px;text-align:center;color:'+r[5]+';font-weight:700">'+r[4]+'</td>'
        +'</tr>';}).join('')
    + '</table></div></div></div>';

  cats.forEach(function(cat, ci) {
    html += '<div class="section-header" style="margin-top:var(--s-3)">'
      + cat.ico + ' ' + cat.title
      + '<span class="sh-count">' + cat.items.length + '</span></div>';
    html += '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';
    cat.items.forEach(function(m, i) {
      var uid = 'fm-' + ci + '-' + i;
      html += '<div class="fiche-card" style="--cat-color:' + m.color + '" id="' + uid + '">'
        + '<div class="fiche-stripe" style="background:' + m.color + '"></div>'
        + '<div class="fiche-head" onclick="toggleFicheM(\'' + uid + '\')">'
        + '<div class="fiche-icon" style="background:' + m.colorl + '">' + m.ico + '</div>'
        + '<div style="flex:1"><div class="fiche-name">' + m.name + '</div><div class="fiche-sub">' + m.sub + '</div></div>'
        + '<span class="fiche-arrow" id="' + uid + '-a">›</span>'
        + '</div>'
        + '<div class="fiche-body" id="' + uid + '-b">'
        + '<div class="kv-grid" style="margin-bottom:var(--s-2)">'
        + Object.entries(m.specs).map(function(e){return '<div class="kv-item"><div class="kv-key">'+e[0]+'</div><div class="kv-val">'+e[1]+'</div></div>';}).join('')
        + '</div>'
        + '<div style="display:flex;flex-direction:column;gap:4px">'
        + m.avantages.map(function(a){return '<div class="alert ok" style="font-size:10px"><span class="alert-icon">✓</span><span>'+a+'</span></div>';}).join('')
        + m.inconvenients.map(function(a){return '<div class="alert '+(a.includes('INTERDIT')||a.includes('interdit')?'danger':'warn')+'" style="font-size:10px"><span class="alert-icon">⚠</span><span>'+a+'</span></div>';}).join('')
        + (m.note ? '<div class="alert info" style="font-size:10px;margin-top:4px"><span class="alert-icon">ℹ</span><span><b>Note :</b> '+m.note+'</span></div>' : '')
        + '</div></div></div>';
    });
    html += '</div>';
  });

  html += '<div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
}

function toggleFicheM(uid) {
  var b = document.getElementById(uid + '-b');
  var a = document.getElementById(uid + '-a');
  if (!b) return;
  var open = b.classList.toggle('open');
  if (a) { a.style.transform = open ? 'rotate(90deg)' : ''; a.style.transition = 'transform .2s'; }
}

function toggleFiche3(i) {
  var b = document.getElementById('fm-b-' + i);
  var a = document.getElementById('fm-a-' + i);
  if (!b) return;
  var open = b.classList.toggle('open');
  if (a) { a.style.transform = open ? 'rotate(90deg)' : ''; a.style.transition = 'transform .2s'; }
}

function openPDF() { window.print(); }

/* ─── RÉFÉRENCES & MATÉRIAUX ─── */
function renderRefMat() {
  var _tb = document.getElementById('tab-bar'); if (_tb) _tb.style.display = 'none';
  document.getElementById('main-content').innerHTML =
    '<div class="module-hero" style="--cat-color:var(--c-mat);background-image:linear-gradient(to right,#2C3A50 38%,rgba(44,58,80,0.88) 54%,rgba(44,58,80,0.35) 75%,transparent 92%),url(\'./images/mat-banner.png\');background-size:cover;background-position:right center;background-color:#2C3A50">'
    + '<span class="mh-icon">🔩</span>'
    + '<div class="mh-title">Références & Matériaux</div>'
    + '<div class="mh-sub">Glossaire · Formules · Acronymes · Matériaux · Équipements</div>'
    + '<div class="mh-tags"><span class="mh-tag">200+ termes</span><span class="mh-tag">Formules</span><span class="mh-tag">Matériaux</span></div>'
    + '</div>'
    + '<div class="section-header">Référence technique</div>'
    + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">'
    + [
        {ico:'📖', name:'Glossaire hydraulique',   sub:'200+ termes · Définitions · Anglais', id:'gloss'},
        {ico:'🔩', name:'Matériaux & Équipements', sub:'PVC · Fonte · PEHD · Pompes · SCADA', id:'mat'},
        {ico:'🔧', name:'Ouvrages AC & EP',        sub:'Regards · Bassins · MBR · PRV',       id:'ouv'},
      ].map(function(m){
        return '<div class="mod-list-card" style="--cat-color:var(--c-mat)" onclick="showModule(\'' + m.id + '\')">'
          + '<div class="mlc-icon" style="background:var(--c-mat-l)">' + m.ico + '</div>'
          + '<div class="mlc-body"><div class="mlc-name">' + m.name + '</div><div class="mlc-sub">' + m.sub + '</div></div>'
          + '<span class="mlc-arrow">›</span></div>';
      }).join('')
    + '</div><div class="pb-nav"></div>';
}

/* ─── HUB QCM ─── */
function renderQCMHub() {
  var _tb = document.getElementById('tab-bar'); if (_tb) _tb.style.display = 'none';

  var html = '<div class="module-hero" style="--cat-color:var(--c-anc);background-image:linear-gradient(to right,#065F46 38%,rgba(6,95,70,0.88) 54%,rgba(6,95,70,0.35) 75%,transparent 92%),url(\'./images/qcm-banner.png\');background-size:cover;background-position:right center;background-color:#065F46">'
    + '<span class="mh-icon">✅</span>'
    + '<div class="mh-title">QCM</div>'
    + '<div class="mh-sub">720 questions · 36 thèmes · Entraînement par formation</div>'
    + '<div class="mh-tags"><span class="mh-tag">BTS GEMEAU</span><span class="mh-tag">BUT</span><span class="mh-tag">Master</span></div>'
    + '</div>';

  /* ── Espace prof / session en direct ── */
  html += '<div class="section-header">Sessions en direct</div>';
  html += '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';
  if (typeof AUTH !== 'undefined' && AUTH.user && (AUTH.user.plan === 'etab' || AUTH.user.plan === 'admin')) {
    html += '<div class="mod-list-card" style="--cat-color:var(--c-anc)" onclick="openQCMManager()">'
      + '<div class="mlc-icon" style="background:var(--c-anc-l);font-size:24px">📝</div>'
      + '<div class="mlc-body"><div class="mlc-name">Mes QCM</div>'
      + '<div class="mlc-sub">Créer un QCM personnalisé · Lancer une session en direct</div></div>'
      + '<span class="mlc-arrow">›</span></div>';
  }
  html += '<div class="mod-list-card" style="--cat-color:var(--c-ac)" onclick="openQCMJoinPage()">'
    + '<div class="mlc-icon" style="background:var(--c-ac-l);font-size:24px">📡</div>'
    + '<div class="mlc-body"><div class="mlc-name">Espace élève / professeur (session en direct)</div>'
    + '<div class="mlc-sub">Rejoindre une session avec un code · Connexion professeur</div></div>'
    + '<span class="mlc-arrow">›</span></div>';
  html += '</div>';

  /* ── Entraînement ── */
  var access = typeof _qcmBankAccess === 'function' ? _qcmBankAccess() : 'free';
  var examLocked = (access === 'free');
  html += '<div class="section-header" style="margin-top:var(--s-3)">Entraînement</div>';
  html += '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';
  html += '<div class="mod-list-card" style="--cat-color:#6A1B9A' + (examLocked?';opacity:.6':'') + '" onclick="_startExamMode()">'
    + '<div class="mlc-icon" style="background:#F3E5F5;font-size:24px">' + (examLocked?'🔒':'🎓') + '</div>'
    + '<div class="mlc-body"><div class="mlc-name">Simulation d\'examen BTS</div>'
    + '<div class="mlc-sub">' + (examLocked ? 'Réservé Pro &amp; Établissement' : '20 questions · 30 min · Mix de toutes les UE · Note /20') + '</div></div>'
    + '<span class="mlc-arrow">›</span></div>';
  html += '<div class="mod-list-card" style="--cat-color:var(--c-primary)" onclick="showModule(\'stats\')">'
    + '<div class="mlc-icon" style="background:var(--c-primary-l,#E3F2FD);font-size:24px">📊</div>'
    + '<div class="mlc-body"><div class="mlc-name">Mes statistiques</div>'
    + '<div class="mlc-sub">Progression par UE · Streak · Questions à retravailler</div></div>'
    + '<span class="mlc-arrow">›</span></div>';
  html += '</div>';

  /* ── Bandeau crédits (free / limited) ── */
  if (access === 'free') {
    var freeBank = typeof _qcmFreeBank === 'function' ? _qcmFreeBank() : 0;
    var bankColor = freeBank > 10 ? 'var(--c-primary)' : freeBank > 3 ? '#B8860B' : 'var(--c-danger,#C0392B)';
    html += '<div style="margin:8px var(--s-4) 0;background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:12px">'
      + '<div style="font-size:28px;font-weight:800;color:' + bankColor + ';min-width:36px;text-align:center">' + freeBank + '</div>'
      + '<div>'
        + '<div style="font-size:12px;font-weight:700;color:var(--c-text-1)">Crédits QCM disponibles</div>'
        + '<div style="font-size:10px;color:var(--c-text-3)">+1 crédit par jour · max 30 · 10 offerts au départ</div>'
      + '</div>'
      + '</div>';
  }
  if (access === 'limited') {
    var proBank = typeof _qcmProRemaining === 'function' ? _qcmProRemaining() : 0;
    var proColor = proBank > 30 ? 'var(--c-primary)' : proBank > 10 ? '#B8860B' : 'var(--c-danger,#C0392B)';
    html += '<div style="margin:8px var(--s-4) 0;background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:12px">'
      + '<div style="font-size:28px;font-weight:800;color:' + proColor + ';min-width:36px;text-align:center">' + proBank + '</div>'
      + '<div>'
        + '<div style="font-size:12px;font-weight:700;color:var(--c-text-1)">Crédits QCM disponibles</div>'
        + '<div style="font-size:10px;color:var(--c-text-3)">+5 crédits par jour · max 150 · 5 offerts au départ</div>'
      + '</div>'
      + '</div>';
  }

  /* ── Banque de QCM (36 QCM / 720 questions), groupée par thème ── */
  html += '<div class="section-header" style="margin-top:var(--s-3)">Banque de QCM par thème</div>';
  html += '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';
  if (typeof QCM_BANK !== 'undefined') {
    var themes = [];
    QCM_BANK.forEach(function(q) {
      if (!themes.some(function(t){ return t.theme === q.theme; })) {
        themes.push({ theme: q.theme, themeName: q.themeName, ico: q.ico, color: q.color, colorl: q.colorl, count: 0 });
      }
    });
    themes.forEach(function(t) {
      t.count = QCM_BANK.filter(function(q){ return q.theme === t.theme; }).length;
      html += '<div class="mod-list-card" style="--cat-color:' + t.color + '" onclick="renderQCMBankTheme(\'' + t.theme + '\')">'
        + '<div class="mlc-icon" style="background:' + t.colorl + '">' + t.ico + '</div>'
        + '<div class="mlc-body"><div class="mlc-name">' + t.themeName + '</div><div class="mlc-sub">' + t.count + ' QCM · ' + t.theme + '</div></div>'
        + '<span class="mlc-arrow">›</span></div>';
    });
  }
  html += '</div>';

  html += '<div class="pb-nav"></div>';

  document.getElementById('main-content').innerHTML = html;
}

/* ─── ASSAINISSEMENT NON COLLECTIF — Hub de navigation ─── */
function renderANCHub() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-anc)">
      <button class="mh-back-btn" onclick="goHome()">‹ Accueil</button>
      <span class="mh-icon">🏡</span>
      <div class="mh-title">Assainissement non collectif</div>
      <div class="mh-sub">Filières · SPANC · Réglementation · Aides · Non conformes</div>
      <div class="mh-tags"><span class="mh-tag">31 ouvrages</span><span class="mh-tag">101 depts SPANC</span><span class="mh-tag">Aides cumulables</span></div>
    </div>
    <div class="section-header">Calculateurs ANC</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'🏡',name:'Filières ANC',sub:'Dimensionnement · 31 ouvrages · Fosses · FPR · Microstation',id:'anc-filieres'},
        {ico:'🔍',name:'Comparateur filières',sub:'Comparer filières · Critères techniques · Budget',id:'anc-comparateur'},
        {ico:'⚙️',name:'Prétraitement',sub:'Fosse toutes eaux · Bac dégraisseur · Volumes réglementaires',id:'anc-pretraitement'},
        {ico:'🌱',name:'Collecte & distribution',sub:'Canalisations · Regards · Distribution après traitement',id:'anc-collecte'},
        {ico:'💧',name:'Rejet & exutoire',sub:'Percolation · Rejet sol · Types d\'exutoires admis',id:'anc-rejet'},
        {ico:'🌬️',name:'Ventilation',sub:'Aération amont/aval · Extraction · Normes DTU 64.1',id:'anc-ventilation'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-anc)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-anc-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="section-header">Ouvrages & filières</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'📚',name:'Fiches ouvrages ANC',sub:'31 ouvrages détaillés · Filières · Comparateur · Rejet',id:'anc'},
        {ico:'⚠️',name:'Installations non conformes',sub:'Puisard · Fosse septique · Guide réhabilitation',id:'nc'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-anc)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-anc-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="section-header">Référence & réglementation</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'📋',name:'Réglementation ANC',sub:'Arrêtés 2009/2021/2024 · Vente immobilière',id:'regl-anc'},
        {ico:'🗺️',name:'SPANC — 101 départements',sub:'Contacts · Obligations · Taux d\'aide locaux',id:'spanc'},
        {ico:'💰',name:'Aides financières ANC',sub:'Éco-PTZ · TVA 5,5% · Agences eau · ANAH',id:'aides'},
        {ico:'🔩',name:'Matériaux & équipements ANC',sub:'Canalisations · Microstations · FPR',id:'mat'},
        {ico:'🔧',name:'Outils de terrain ANC',sub:'Perméamètre · Piézomètre · Caméra · Kit chimie',id:'outils-anc'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-anc)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-anc-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="pb-nav"></div>`;
}

/* ─── ASSAINISSEMENT COLLECTIF ─── */
function renderAC() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-ac);background-image:linear-gradient(to right,#1550A0 38%,rgba(21,80,160,0.88) 54%,rgba(21,80,160,0.35) 75%,transparent 92%),url('./images/ac-banner.png');background-size:cover;background-position:right center;background-color:#1550A0">
      <button class="mh-back-btn" onclick="goHome()">‹ Accueil</button>
      <span class="mh-icon">🔧</span>
      <div class="mh-title">Assainissement collectif</div>
      <div class="mh-sub">Réseaux EU/EP · Calculateurs · Ouvrages · Dimensionnement</div>
      <div class="mh-tags"><span class="mh-tag">Réseaux EU</span><span class="mh-tag">Eaux pluviales</span><span class="mh-tag">Calculs</span></div>
    </div>
    <div class="section-header">Calculateurs</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'⚡',name:'Calculateurs principaux',sub:'Manning-Strickler · FTE · EP · Charges',id:'calc'},
        {ico:'🧮',name:'Calculateurs avancés',sub:'Manning partiel · Coup de bélier · NPSH',id:'calca'},
        {ico:'📐',name:'Calculateurs complémentaires',sub:'Réservoir · STEU',id:'calcs'},
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
        {ico:'📋',name:'Réglementation assainissement',sub:'Arrêtés · DCE · Normes',id:'regl-ac'},
        {ico:'🔩',name:'Matériaux & Équipements',sub:'PVC · Fonte · Pompes · SCADA',id:'mat'},
        {ico:'🔧',name:'Outils de terrain AC',sub:'Caméra ITV · Débitmètre · Détecteur gaz · Corrélateur fuites',id:'outils-ac'},
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
    <div class="module-hero" style="--cat-color:var(--c-ep);background-image:linear-gradient(to right,#886000 38%,rgba(136,96,0,0.88) 54%,rgba(136,96,0,0.35) 75%,transparent 92%),url('./images/ep-banner.png');background-size:cover;background-position:right center;background-color:#886000">
      <button class="mh-back-btn" onclick="goHome()">‹ Accueil</button>
      <span class="mh-icon">💧</span>
      <div class="mh-title">Eau potable</div>
      <div class="mh-sub">Potabilisation · Normes · Traitement · Réseau AEP</div>
      <div class="mh-tags"><span class="mh-tag">Normes</span><span class="mh-tag">Traitement</span><span class="mh-tag">AEP</span></div>
    </div>
    <div class="section-header">Outils & calculs</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${[
        {ico:'🧮',name:'Calculs réseau AEP',sub:'Langelier · Pompe HMT · NPSH',id:'calca'},
        {ico:'📐',name:'Calculateurs eau potable',sub:'Chloration · Réservoir',id:'calcs'},
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
        {ico:'📋',name:'Réglementation eau potable',sub:'Code santé · Limites qualité · UE',id:'regl-ep'},
        {ico:'📖',name:'Glossaire & formules',sub:'Termes · Paramètres physico-chimiques',id:'gloss'},
        {ico:'🔩',name:'Matériaux & équipements AEP',sub:'Canalisations · Pompes · Compteurs',id:'mat'},
        {ico:'🔧',name:'Outils de terrain EP',sub:'Chlorimètre · Turbidimètre · Corrélateur fuites · Kit bactério',id:'outils-ep'},
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
    <div class="module-hero" style="--cat-color:var(--c-riv);background-image:linear-gradient(to right,#0A5090 38%,rgba(10,80,144,0.88) 54%,rgba(10,80,144,0.35) 75%,transparent 92%),url('./images/mn-banner.png');background-size:cover;background-position:right center;background-color:#0A5090">
      <button class="mh-back-btn" onclick="goHome()">‹ Accueil</button>
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
        {ico:'🐟',name:'Passes à poissons',sub:'6 types · Bassins · Fentes verticales · Anguilles · Dimensionnement',id:'pap'},
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
        {ico:'📋',name:'Réglementation milieu naturel',sub:'Police de l\'eau · IOTA · DCE',id:'regl-riv'},
        {ico:'📖',name:'Glossaire hydrologie',sub:'Termes · Formules · Débits',id:'gloss'},
        {ico:'🔧',name:'Outils de terrain milieu naturel',sub:'Limnimètre · Courantomètre · Surber · Multi-sonde · ADCP',id:'outils-riv'},
      ].map(function(m){ return `
      <div class="mod-list-card" style="--cat-color:var(--c-riv)" onclick="showModule('${m.id}')">
        <div class="mlc-icon" style="background:var(--c-riv-l)">${m.ico}</div>
        <div class="mlc-body"><div class="mlc-name">${m.name}</div><div class="mlc-sub">${m.sub}</div></div>
        <span class="mlc-arrow">›</span>
      </div>`; }).join('')}
    </div>
    <div class="pb-nav"></div>`;
}

/* ═══════════════════════════════════════════════════
   PAGE STATISTIQUES PERSONNELLES
═══════════════════════════════════════════════════ */
function renderStats() {
  if (typeof AUTH === 'undefined' || !AUTH.user) {
    if (typeof authToast === 'function') authToast('Connectez-vous pour voir vos statistiques');
    return;
  }
  var email = AUTH.user.email;
  var act   = (typeof DataStore !== 'undefined') ? DataStore.activity.get(email) : {};
  var stats = (typeof DataStore !== 'undefined') ? DataStore.qcmStats.get(email) : {};
  var streak = act.streak || 0;

  var totalSessions = 0, totalOk = 0, totalTotal = 0;
  Object.keys(stats).forEach(function(th) {
    if (th === 'EXAM') return;
    totalSessions += stats[th].sessions || 0;
    totalOk       += stats[th].ok       || 0;
    totalTotal    += stats[th].total    || 0;
  });
  var globalPct = totalTotal ? Math.round(totalOk / totalTotal * 100) : 0;

  var themes = {};
  if (typeof QCM_BANK !== 'undefined') {
    QCM_BANK.forEach(function(qcm) {
      if (!themes[qcm.theme]) themes[qcm.theme] = { name:qcm.themeName, ico:qcm.ico, color:qcm.color, totalQ:0, sessions:0, ok:0, total:0, weak:0 };
      themes[qcm.theme].totalQ += qcm.questions.length;
    });
  }
  Object.keys(stats).forEach(function(th) {
    if (themes[th]) { themes[th].sessions = stats[th].sessions||0; themes[th].ok = stats[th].ok||0; themes[th].total = stats[th].total||0; }
  });
  if (typeof DataStore !== 'undefined') {
    Object.keys(themes).forEach(function(th) { themes[th].weak = DataStore.qcmWeak.count(email, th); });
  }

  var tEl = document.getElementById('top-title'); if (tEl) tEl.textContent = 'Mes statistiques';
  var _tb = document.getElementById('tab-bar');   if (_tb) _tb.style.display = 'none';

  var flameColor = streak > 6 ? '#FF6D00' : streak > 2 ? '#E65100' : '#607D8B';
  var html = '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--s-2);padding:var(--s-3) var(--s-4)">';
  html += '<div style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-lg);padding:var(--s-3);text-align:center">'
    + '<div style="font-size:26px">' + (streak > 0 ? '🔥' : '💧') + '</div>'
    + '<div style="font-size:22px;font-weight:900;color:' + flameColor + ';line-height:1.1">' + streak + '</div>'
    + '<div style="font-size:10px;color:var(--c-text-3);margin-top:2px">jours suite</div></div>';
  html += '<div style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-lg);padding:var(--s-3);text-align:center">'
    + '<div style="font-size:26px">📚</div>'
    + '<div style="font-size:22px;font-weight:900;color:var(--c-primary);line-height:1.1">' + totalSessions + '</div>'
    + '<div style="font-size:10px;color:var(--c-text-3);margin-top:2px">sessions</div></div>';
  html += '<div style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-lg);padding:var(--s-3);text-align:center">'
    + '<div style="font-size:26px">' + (globalPct >= 70 ? '✅' : globalPct >= 50 ? '💪' : '📖') + '</div>'
    + '<div style="font-size:22px;font-weight:900;color:var(--c-text);line-height:1.1">' + globalPct + '%</div>'
    + '<div style="font-size:10px;color:var(--c-text-3);margin-top:2px">score moy.</div></div>';
  html += '</div>';

  if (totalTotal === 0) {
    html += '<div style="padding:var(--s-4);text-align:center">'
      + '<div style="font-size:48px;margin-bottom:8px">🎓</div>'
      + '<div style="font-size:15px;font-weight:700;color:var(--c-text);margin-bottom:6px">Pas encore de statistiques</div>'
      + '<div style="font-size:13px;color:var(--c-text-3);margin-bottom:var(--s-4)">Lance-toi sur les QCM ou simule un examen BTS pour voir ta progression ici !</div>'
      + '<div style="display:flex;gap:var(--s-2);justify-content:center;flex-wrap:wrap">'
        + '<button onclick="showModule(\'qcm\')" style="padding:12px 20px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-size:13px;font-weight:700;cursor:pointer;font-family:var(--f-body)">✅ QCM</button>'
        + '<button onclick="_startExamMode()" style="padding:12px 20px;background:#6A1B9A;color:#fff;border:none;border-radius:var(--r-md);font-size:13px;font-weight:700;cursor:pointer;font-family:var(--f-body)">🎓 Examen</button>'
      + '</div></div>';
  } else {
    html += '<div class="section-header" style="padding-top:var(--s-3)">Progression par UE</div>'
      + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';
    Object.keys(themes).sort().forEach(function(th) {
      var t = themes[th];
      var pct = t.total ? Math.round(t.ok / t.total * 100) : 0;
      var barColor = pct >= 80 ? '#166038' : pct >= 50 ? '#886000' : (t.total > 0 ? '#A82018' : 'var(--c-border)');
      html += '<div style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3) var(--s-4)">'
        + '<div style="display:flex;align-items:center;gap:var(--s-2);margin-bottom:' + (t.sessions > 0 ? '6px' : '0') + '">'
          + '<div style="font-size:18px">' + t.ico + '</div>'
          + '<div style="flex:1;min-width:0">'
            + '<div style="font-size:12px;font-weight:700;color:var(--c-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + t.name + '</div>'
            + '<div style="font-size:10px;color:var(--c-text-3)">' + (t.sessions === 0 ? 'Non commencé · ' + t.totalQ + ' q.' : t.sessions + ' session' + (t.sessions > 1 ? 's' : '') + ' · ' + t.ok + '/' + t.total) + '</div>'
          + '</div>'
          + (t.sessions > 0 ? '<div style="font-size:13px;font-weight:800;color:' + barColor + '">' + pct + '%</div>' : '')
          + (t.weak > 0 ? '<div style="background:#FFEBEE;color:#C62828;font-size:10px;font-weight:700;padding:2px 6px;border-radius:10px;white-space:nowrap;margin-left:4px">🔴' + t.weak + '</div>' : '')
        + '</div>'
        + (t.sessions > 0 ? '<div style="height:6px;background:var(--c-border);border-radius:3px;overflow:hidden"><div style="height:100%;width:' + pct + '%;background:' + barColor + ';border-radius:3px"></div></div>' : '')
      + '</div>';
    });
    html += '</div>';

    var weakThemes = Object.keys(themes).filter(function(th) { return themes[th].weak > 0; });
    if (weakThemes.length > 0) {
      html += '<div class="section-header" style="padding-top:var(--s-3)">À retravailler</div>'
        + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';
      weakThemes.sort(function(a, b) { return themes[b].weak - themes[a].weak; }).forEach(function(th) {
        var t = themes[th];
        html += '<div class="mod-list-card" style="--cat-color:' + t.color + '" onclick="_startAdaptiveQCM(\'' + th + '\')">'
          + '<div class="mlc-icon" style="background:#FFEBEE;font-size:18px">🔴</div>'
          + '<div class="mlc-body"><div class="mlc-name">' + t.ico + ' ' + t.name + '</div><div class="mlc-sub">' + t.weak + ' question' + (t.weak > 1 ? 's' : '') + ' à retravailler</div></div>'
          + '<span class="mlc-arrow" style="color:var(--c-danger)">›</span></div>';
      });
      html += '</div>';
    }
  }

  html += '<div class="section-header" style="padding-top:var(--s-3)">Actions rapides</div>'
    + '<div style="padding:0 var(--s-4) var(--s-4);display:flex;gap:var(--s-2)">'
      + '<button onclick="_startExamMode()" style="flex:1;padding:12px 8px;background:#6A1B9A;color:#fff;border:none;border-radius:var(--r-md);font-size:12px;font-weight:700;cursor:pointer;font-family:var(--f-body)">🎓 Simulation</button>'
      + '<button onclick="showModule(\'qcm\')" style="flex:1;padding:12px 8px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-size:12px;font-weight:700;cursor:pointer;font-family:var(--f-body)">✅ QCM</button>'
    + '</div>'
    + '<div class="pb-nav"></div>';

  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

