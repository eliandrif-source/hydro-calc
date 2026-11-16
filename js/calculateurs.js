/* ─── CALCULATEURS ─── */
var _calcDebitsSub = 0;
var _calcAEPSub = 0;
var _calcAssaisSub = 0;
var _calcFormSub = 0;
var _calcDimSub = 0;

function renderCalc() {
  loadModuleTabs(CALC_TAB_LBLS, 'switchCalcTab');
  document.getElementById('main-content').innerHTML =
    '<div id="calc-content"></div><div class="pb-nav"></div>';
  renderCalcDebits();
}

function switchCalcTab(idx) {
  setTabActive('module-tabs', idx);
  var titles = ['Calculateurs — Débits','Calculateurs — AEP','Calculateurs — Assainissement','Calculateurs — Dimensionnement','Calculateurs — Formules'];
  var t = document.getElementById('top-title');
  if (t) t.textContent = titles[idx] || 'Calculateurs';
  if      (idx === 0) renderCalcDebits();
  else if (idx === 1) renderCalcAEP();
  else if (idx === 2) renderCalcAssainis();
  else if (idx === 3) renderCalcDim();
  else if (idx === 4) renderCalcFormules();
  scrollToTop();
}

function _calcSubPills(items, active, fn) {
  return '<div style="display:flex;gap:6px;flex-wrap:wrap;padding:var(--s-2) var(--s-4) var(--s-1)">'
    + items.map(function(lbl, i) {
        return '<button onclick="' + fn + '(' + i + ')" style="padding:5px 12px;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--f-body);border:1.5px solid '
          + (i === active ? 'var(--c-primary)' : 'var(--c-border)')
          + ';background:' + (i === active ? 'var(--c-primary)' : 'var(--c-surface)')
          + ';color:' + (i === active ? '#fff' : 'var(--c-text-3)') + '">' + lbl + '</button>';
      }).join('')
    + '</div>';
}

function renderCalcDebits() {
  var subs = ['Manning-Strickler','Méthode rat.','Loi de Darcy','Déversoir'];
  var z = document.getElementById('calc-content');
  if (!z) return;
  var html = _calcSubPills(subs, _calcDebitsSub, 'switchDebits');
  if      (_calcDebitsSub === 0) html += _htmlManning();
  else if (_calcDebitsSub === 1) html += _htmlMethodeRat();
  else if (_calcDebitsSub === 2) html += _htmlDarcy();
  else if (_calcDebitsSub === 3) html += _htmlDeversoir();
  z.innerHTML = html;
}
function switchDebits(i) { _calcDebitsSub = i; renderCalcDebits(); }

function renderCalcAEP() {
  var subs = ['Hazen-Williams','HMT pompe','NPSH','Coup de bélier'];
  var z = document.getElementById('calc-content');
  if (!z) return;
  var html = _calcSubPills(subs, _calcAEPSub, 'switchAEP');
  if      (_calcAEPSub === 0) html += _htmlHW();
  else if (_calcAEPSub === 1) html += _htmlHMT();
  else if (_calcAEPSub === 2) html += _htmlNPSH();
  else if (_calcAEPSub === 3) html += _htmlBelier();
  z.innerHTML = html;
}
function switchAEP(i) { _calcAEPSub = i; renderCalcAEP(); }

function renderCalcAssainis() {
  var subs = ['Charges polluantes','Fosse toutes eaux','Épandage ANC'];
  var z = document.getElementById('calc-content');
  if (!z) return;
  var html = _calcSubPills(subs, _calcAssaisSub, 'switchAssainis');
  if      (_calcAssaisSub === 0) html += _htmlCharges();
  else if (_calcAssaisSub === 1) html += _htmlFTE();
  else if (_calcAssaisSub === 2) html += _htmlEpandage();
  z.innerHTML = html;
}
function switchAssainis(i) { _calcAssaisSub = i; renderCalcAssainis(); }

function renderCalcDim() {
  var subs = ['Station pompage','Bassin rétention EP','Réseau gravitaire','STEP / Lagunage'];
  var z = document.getElementById('calc-content');
  if (!z) return;
  var html = _calcSubPills(subs, _calcDimSub, 'switchDim');
  if      (_calcDimSub === 0) html += _htmlStationPompage();
  else if (_calcDimSub === 1) html += _htmlBassinRet();
  else if (_calcDimSub === 2) html += _htmlReseauGrav();
  else if (_calcDimSub === 3) html += _htmlSTEP();
  z.innerHTML = html;
}
function switchDim(i) { _calcDimSub = i; renderCalcDim(); }

function renderCalcFormules() {
  var subs = ['Reynolds','Bernoulli','P. ch. singulières'];
  var z = document.getElementById('calc-content');
  if (!z) return;
  var html = _calcSubPills(subs, _calcFormSub, 'switchFormules');
  if      (_calcFormSub === 0) html += _htmlReynolds();
  else if (_calcFormSub === 1) html += _htmlBernoulli();
  else if (_calcFormSub === 2) html += _htmlPCSing();
  z.innerHTML = html;
}
function switchFormules(i) { _calcFormSub = i; renderCalcFormules(); }

/* ── HTML BUILDERS ── */

function _htmlManning() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<svg viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;height:auto;display:block;margin:0 auto 10px"><defs><marker id="mqa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#059669"/></marker></defs><circle cx="55" cy="48" r="32" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/><circle cx="55" cy="48" r="20" fill="#BFDBFE"/><text x="55" y="52" text-anchor="middle" font-size="8" fill="#1E40AF" font-family="sans-serif" font-weight="700">D</text><text x="55" y="85" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Ks</text><line x1="100" y1="25" x2="260" y2="55" stroke="#92400E" stroke-width="2"/><text x="182" y="20" text-anchor="middle" font-size="9" fill="#92400E" font-family="sans-serif">Pente I</text><line x1="115" y1="43" x2="255" y2="43" stroke="#059669" stroke-width="2.5" marker-end="url(#mqa)"/><text x="185" y="60" text-anchor="middle" font-size="10" fill="#059669" font-family="sans-serif" font-weight="700">Q →</text><text x="185" y="80" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Q = Ks · A · R^(2/3) · I^(1/2)</text></svg>'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Manning-Strickler · Q = Ks × A × R²⸝³ × I^½</div>'
    + '<div class="field"><label class="field-label">Diamètre intérieur DN</label><div class="field-row"><input type="number" id="c-dn" value="300" min="10" step="10"><span class="field-unit">mm</span></div></div>'
    + '<div class="field"><label class="field-label">Coefficient de Strickler Ks</label><div class="field-row"><input type="number" id="c-ks" value="70" min="1" max="150" step="1"><span class="field-unit">m^(1/3)/s</span></div></div>'
    + '<div class="field"><label class="field-label">Pente hydraulique I</label><div class="field-row"><input type="number" id="c-ip" value="3" min="0.01" step="0.1"><span class="field-unit">‰</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcManning()">Calculer</button>'
    + '<div class="result-box" id="res-manning"><div class="result-value" id="rv-manning"></div><div class="result-detail" id="rd-manning"></div>'
    + '<div class="result-formula">Q = Ks · A · R^(2/3) · I^(1/2)</div><div class="result-src">📖 Manning (1891) · Strickler (1923)</div></div>'
    + '</div></div></div>';
}

function _htmlMethodeRat() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Méthode rationnelle · Q = C × i × A / 3 600</div>'
    + '<div class="field"><label class="field-label">Coefficient de ruissellement C</label><div class="field-row"><input type="number" id="c-cr" value="0.5" min="0" max="1" step="0.01"><span class="field-unit">—</span></div></div>'
    + '<div class="field"><label class="field-label">Intensité pluviale i</label><div class="field-row"><input type="number" id="c-ip2" value="30" min="1" step="1"><span class="field-unit">mm/h</span></div></div>'
    + '<div class="field"><label class="field-label">Surface du bassin versant A</label><div class="field-row"><input type="number" id="c-bv" value="5" min="0.01" step="0.1"><span class="field-unit">ha</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcMethodeRat()">Calculer</button>'
    + '<div class="result-box" id="res-rat"><div class="result-value" id="rv-rat"></div><div class="result-detail" id="rd-rat"></div>'
    + '<div class="result-formula">Q (m³/s) = C · i (mm/h) · A (ha) / 3 600</div><div class="result-src">📖 Méthode rationnelle · Kutchling (1889)</div></div>'
    + '</div></div></div>';
}

function _htmlDarcy() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Darcy-Weisbach · ΔH = λ · (L/D) · V²/2g</div>'
    + '<div class="field"><label class="field-label">Débit Q</label><div class="field-row"><input type="number" id="c-dQ" value="50" min="0.01" step="1"><span class="field-unit">m³/h</span></div></div>'
    + '<div class="field"><label class="field-label">Diamètre intérieur D</label><div class="field-row"><input type="number" id="c-dD" value="150" min="10" step="5"><span class="field-unit">mm</span></div></div>'
    + '<div class="field"><label class="field-label">Longueur L</label><div class="field-row"><input type="number" id="c-dL" value="500" min="1" step="1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Rugosité ε (fonte : 0,26 · acier : 0,046 · PEHD : 0,01 mm)</label><div class="field-row"><input type="number" id="c-dE" value="0.1" min="0.001" step="0.01"><span class="field-unit">mm</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcDarcy()">Calculer</button>'
    + '<div class="result-box" id="res-darcy"><div class="result-value" id="rv-darcy"></div><div class="result-detail" id="rd-darcy"></div>'
    + '<div class="result-formula">ΔH = λ · L/D · V²/(2g) · λ Colebrook-White</div><div class="result-src">📖 Darcy (1857) · Colebrook-White (1939)</div></div>'
    + '</div></div></div>';
}

function _htmlDeversoir() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;height:auto;display:block;margin:0 auto 10px"><defs><marker id="deva" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#1550A0"/></marker></defs><rect x="0" y="50" width="280" height="50" fill="#E2E8F0"/><rect x="120" y="20" width="40" height="80" fill="#94A3B8"/><rect x="0" y="20" width="120" height="30" fill="#BFDBFE" opacity="0.8"/><text x="60" y="37" text-anchor="middle" font-size="9" fill="#1E40AF" font-family="sans-serif" font-weight="700">H (charge amont)</text><line x1="30" y1="20" x2="30" y2="50" stroke="#1550A0" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="10" y1="50" x2="120" y2="50" stroke="#1550A0" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="30" y1="34" x2="50" y2="34" stroke="#1550A0" stroke-width="1.5"/><text x="55" y="38" font-size="8" fill="#1550A0" font-family="sans-serif">H</text><line x1="120" y1="72" x2="280" y2="72" stroke="#1550A0" stroke-width="2"/><line x1="200" y1="50" x2="240" y2="72" stroke="#1550A0" stroke-width="2.5" marker-end="url(#deva)"/><text x="230" y="62" font-size="9" fill="#1550A0" font-family="sans-serif">Q →</text><line x1="120" y1="85" x2="160" y2="85" stroke="#64748B" stroke-width="1.5"/><line x1="160" y1="85" x2="160" y2="92" stroke="#64748B" stroke-width="1.5"/><line x1="160" y1="92" x2="280" y2="92" stroke="#64748B" stroke-width="1.5"/><text x="140" y="100" font-size="8" fill="#64748B" font-family="sans-serif">L (seuil)</text></svg>'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Déversoir seuil · Q = μ · L · H^(3/2)</div>'
    + '<div class="field"><label class="field-label">Type de déversoir</label>'
    + '<select id="c-devType" class="field-inp"><option value="rect">Rectangulaire large (μ = 1,70)</option><option value="min">Mince (μ = 1,84)</option><option value="tri">Triangulaire 90° (μ = 1,42)</option></select></div>'
    + '<div class="field"><label class="field-label">Longueur du seuil L</label><div class="field-row"><input type="number" id="c-devL" value="2" min="0.1" step="0.1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Charge amont H</label><div class="field-row"><input type="number" id="c-devH" value="0.3" min="0.01" step="0.01"><span class="field-unit">m</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcDeversoir()">Calculer</button>'
    + '<div class="result-box" id="res-dev"><div class="result-value" id="rv-dev"></div><div class="result-detail" id="rd-dev"></div>'
    + '<div class="result-formula">Q = μ · L · H^(3/2) (rect.) · Q = μ · H^(5/2) (tri.)</div><div class="result-src">📖 Bazin (1898) · Kindsvater &amp; Carter (1957)</div></div>'
    + '</div></div></div>';
}

function _htmlHW() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Hazen-Williams · V = 0,8492 · C · R^0,63 · S^0,54</div>'
    + '<div class="field"><label class="field-label">Coeff. Hazen-Williams C<br><small style="font-weight:400;font-size:10px">Fonte neuve: 130 · Acier: 120 · PEHD: 150 · Béton: 100 · Fonte vieille: 80</small></label><div class="field-row"><input type="number" id="c-chw" value="120" min="50" max="160" step="5"><span class="field-unit">—</span></div></div>'
    + '<div class="field"><label class="field-label">Diamètre intérieur D</label><div class="field-row"><input type="number" id="c-dhw" value="200" min="10" step="10"><span class="field-unit">mm</span></div></div>'
    + '<div class="field"><label class="field-label">Pente piézométrique S</label><div class="field-row"><input type="number" id="c-shw" value="2" min="0.01" step="0.1"><span class="field-unit">m/km</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcHWMain()">Calculer</button>'
    + '<div class="result-box" id="res-hw"><div class="result-value" id="rv-hw"></div><div class="result-detail" id="rd-hw"></div>'
    + '<div class="result-formula">V = 0,8492 · C · R^0,63 · S^0,54</div><div class="result-src">📖 Hazen &amp; Williams (1905) · Hydraulique AEP</div></div>'
    + '</div></div></div>';
}

function _htmlHMT() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto 10px"><defs><marker id="hmta" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#1550A0"/></marker></defs><rect x="5" y="35" width="55" height="60" rx="4" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/><text x="32" y="68" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif" font-weight="700">BÂCHE</text><line x1="60" y1="75" x2="90" y2="75" stroke="#1550A0" stroke-width="2.5" marker-end="url(#hmta)"/><rect x="90" y="62" width="45" height="26" rx="4" fill="#1550A0"/><text x="112" y="79" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700">POMPE</text><line x1="135" y1="75" x2="195" y2="75" stroke="#1550A0" stroke-width="2.5"/><line x1="195" y1="75" x2="195" y2="25" stroke="#1550A0" stroke-width="2.5"/><line x1="195" y1="25" x2="265" y2="25" stroke="#1550A0" stroke-width="2.5" marker-end="url(#hmta)"/><text x="238" y="20" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">P résid.</text><line x1="5" y1="35" x2="5" y2="25" stroke="#92400E" stroke-width="1" stroke-dasharray="3,2"/><line x1="5" y1="25" x2="195" y2="25" stroke="#92400E" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/><line x1="112" y1="25" x2="112" y2="62" stroke="#92400E" stroke-width="1.5"/><text x="125" y="48" font-size="8" fill="#92400E" font-family="sans-serif">Hg</text><text x="150" y="105" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">HMT = Hg + ΔHl + ΔHs + P_aval</text></svg>'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">HMT pompe · Hmt = Hg + ΔHl + ΔHs + P_aval/ρg</div>'
    + '<div class="field"><label class="field-label">Hauteur géométrique Hg</label><div class="field-row"><input type="number" id="c-hHg" value="20" min="0" step="0.5"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Pertes de charge linéaires ΔHl</label><div class="field-row"><input type="number" id="c-hDhl" value="3" min="0" step="0.1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Pertes de charge singulières ΔHs</label><div class="field-row"><input type="number" id="c-hDhs" value="1" min="0" step="0.1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Pression résiduelle requise aval</label><div class="field-row"><input type="number" id="c-hPav" value="10" min="0" step="1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Débit Q</label><div class="field-row"><input type="number" id="c-hQ" value="30" min="0.1" step="1"><span class="field-unit">m³/h</span></div></div>'
    + '<div class="field"><label class="field-label">Rendement pompe η</label><div class="field-row"><input type="number" id="c-hEta" value="75" min="10" max="95" step="1"><span class="field-unit">%</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcHMT()">Calculer</button>'
    + '<div class="result-box" id="res-hmt"><div class="result-value" id="rv-hmt"></div><div class="result-detail" id="rd-hmt"></div>'
    + '<div class="result-formula">HMT = Hg + ΔHl + ΔHs + P_aval · P = ρgQH/η</div><div class="result-src">📖 NF EN ISO 9906 · Hydraulique des pompes</div></div>'
    + '</div></div></div>';
}

function _htmlNPSH() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">NPSH disponible · NPSHd = (Pa−Pv)/ρg − Hs − ΔHas</div>'
    + '<div class="field"><label class="field-label">Pression atmosphérique Pa</label><div class="field-row"><input type="number" id="c-nPa" value="101325" min="80000" step="100"><span class="field-unit">Pa</span></div></div>'
    + '<div class="field"><label class="field-label">Pression de vapeur Pv (eau 20°C : 2 338 Pa)</label><div class="field-row"><input type="number" id="c-nPv" value="2338" min="100" step="100"><span class="field-unit">Pa</span></div></div>'
    + '<div class="field"><label class="field-label">Hauteur d\'aspiration Hs (+ aspiration / − refoulement)</label><div class="field-row"><input type="number" id="c-nHs" value="4" step="0.1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Pertes de charge aspiration ΔHas</label><div class="field-row"><input type="number" id="c-nDH" value="0.5" min="0" step="0.05"><span class="field-unit">m</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcNPSH()">Calculer</button>'
    + '<div class="result-box" id="res-npsh"><div class="result-value" id="rv-npsh"></div><div class="result-detail" id="rd-npsh"></div>'
    + '<div class="result-formula">NPSHd = (Pa − Pv)/(ρg) − Hs − ΔHas</div><div class="result-src">📖 NF EN ISO 9906 · Cavitation pompes</div></div>'
    + '</div></div></div>';
}

function _htmlBelier() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Coup de bélier · Joukowski · ΔP = ρ · c · ΔV</div>'
    + '<div class="field"><label class="field-label">Vitesse d\'écoulement V</label><div class="field-row"><input type="number" id="c-bV" value="1.5" min="0.1" step="0.1"><span class="field-unit">m/s</span></div></div>'
    + '<div class="field"><label class="field-label">Célérité d\'onde c (eau/PEHD : 200–400 m/s · eau/fonte : 1000–1200 m/s)</label><div class="field-row"><input type="number" id="c-bC" value="1000" min="100" max="1500" step="50"><span class="field-unit">m/s</span></div></div>'
    + '<div class="field"><label class="field-label">Longueur conduite L</label><div class="field-row"><input type="number" id="c-bL" value="500" min="1" step="10"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Masse volumique ρ</label><div class="field-row"><input type="number" id="c-bRho" value="1000" min="900" max="1100" step="10"><span class="field-unit">kg/m³</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcBelier()">Calculer</button>'
    + '<div class="result-box" id="res-belier"><div class="result-value" id="rv-belier"></div><div class="result-detail" id="rd-belier"></div>'
    + '<div class="result-formula">ΔP = ρ · c · ΔV · Phase critique si t &lt; 2L/c</div><div class="result-src">📖 Joukowski (1898) · NF EN 805 coups de bélier</div></div>'
    + '</div></div></div>';
}

function _htmlCharges() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Charges polluantes par EH · DBO₅ = 54 g/EH·j</div>'
    + '<div class="field"><label class="field-label">Nombre d\'équivalents-habitants (EH)</label><div class="field-row"><input type="number" id="c-eh2" value="1000" min="1" step="1"><span class="field-unit">EH</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcChargesMain()">Calculer</button>'
    + '<div class="result-box" id="res-charges"><div class="result-value" id="rv-charges"></div><div class="result-detail" id="rd-charges"></div>'
    + '<div class="result-formula">DBO₅ : 54 g/EH·j · DCO : 120 g/EH·j · MES : 90 g/EH·j</div><div class="result-src">📖 Arrêté 21/07/2015 · Tableau STEP réglementaire</div></div>'
    + '</div></div></div>';
}

function _htmlFTE() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Volume fosse toutes eaux réglementaire</div>'
    + '<div class="field"><label class="field-label">Pièces principales</label><div class="field-row"><input type="number" id="c-pp" value="4" min="1" step="1"><span class="field-unit">pp</span></div></div>'
    + '<div class="field"><label class="field-label">Occupants réels</label><div class="field-row"><input type="number" id="c-pers" value="4" min="1" step="1"><span class="field-unit">pers.</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcFTEMain()">Calculer</button>'
    + '<div class="result-box" id="res-fte"><div class="result-value" id="rv-fte"></div><div class="result-detail" id="rd-fte"></div>'
    + '<div class="result-formula">V = 3 000 L si pp ≤ 5 · + 1 000 L/pp au-delà</div><div class="result-src">📖 Arrêté 07/09/2009 art. 6 · DTU 64.1</div></div>'
    + '</div></div></div>';
}

function _htmlEpandage() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Surface d\'épandage ANC · S = EH × 150 / (K × 1 000)</div>'
    + '<div class="field"><label class="field-label">Équivalents-habitants (EH)</label><div class="field-row"><input type="number" id="c-eh" value="5" min="1" step="1"><span class="field-unit">EH</span></div></div>'
    + '<div class="field"><label class="field-label">Perméabilité du sol K</label><div class="field-row"><input type="number" id="c-k" value="5" min="0.1" step="0.5"><span class="field-unit">mm/min</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcEpandage()">Calculer</button>'
    + '<div class="result-box" id="res-epandage"><div class="result-value" id="rv-epandage"></div><div class="result-detail" id="rd-epandage"></div>'
    + '<div class="result-formula">S = EH × 150 / (K × 1 000) avec K en mm/min</div><div class="result-src">📖 DTU 64.1 · Arrêté 07/09/2009</div></div>'
    + '</div></div></div>';
}

function _htmlReynolds() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Nombre de Reynolds · Re = V·D/ν</div>'
    + '<div class="field"><label class="field-label">Vitesse V</label><div class="field-row"><input type="number" id="c-rV" value="1" min="0.01" step="0.1"><span class="field-unit">m/s</span></div></div>'
    + '<div class="field"><label class="field-label">Dimension caractéristique D</label><div class="field-row"><input type="number" id="c-rD" value="100" min="1" step="1"><span class="field-unit">mm</span></div></div>'
    + '<div class="field"><label class="field-label">Viscosité cinématique ν (eau 20°C : 1,004)</label><div class="field-row"><input type="number" id="c-rNu" value="1.004" min="0.1" step="0.001"><span class="field-unit">×10⁻⁶ m²/s</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcReynolds()">Calculer</button>'
    + '<div class="result-box" id="res-reynolds"><div class="result-value" id="rv-reynolds"></div><div class="result-detail" id="rd-reynolds"></div>'
    + '<div class="result-formula">Re = V·D/ν · Laminaire : Re&lt;2300 · Turbulent : Re&gt;4000</div><div class="result-src">📖 Osborne Reynolds (1883)</div></div>'
    + '</div></div></div>';
}

function _htmlBernoulli() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Bernoulli · P₁/ρg + V₁²/2g + z₁ = P₂/ρg + V₂²/2g + z₂</div>'
    + '<div class="field"><label class="field-label">Section 1 — Pression P₁</label><div class="field-row"><input type="number" id="c-bP1" value="200000" step="1000"><span class="field-unit">Pa</span></div></div>'
    + '<div class="field"><label class="field-label">Section 1 — Vitesse V₁</label><div class="field-row"><input type="number" id="c-bV1" value="0.5" min="0" step="0.1"><span class="field-unit">m/s</span></div></div>'
    + '<div class="field"><label class="field-label">Section 1 — Altitude z₁</label><div class="field-row"><input type="number" id="c-bZ1" value="10" step="0.1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Section 2 — Vitesse V₂</label><div class="field-row"><input type="number" id="c-bV2" value="2" min="0" step="0.1"><span class="field-unit">m/s</span></div></div>'
    + '<div class="field"><label class="field-label">Section 2 — Altitude z₂</label><div class="field-row"><input type="number" id="c-bZ2" value="5" step="0.1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Masse volumique ρ</label><div class="field-row"><input type="number" id="c-bRho2" value="1000" min="900" step="10"><span class="field-unit">kg/m³</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcBernoulli()">Calculer</button>'
    + '<div class="result-box" id="res-bernoulli"><div class="result-value" id="rv-bernoulli"></div><div class="result-detail" id="rd-bernoulli"></div>'
    + '<div class="result-formula">P₂ = P₁ + ρg(z₁−z₂) + ρ(V₁²−V₂²)/2</div><div class="result-src">📖 Daniel Bernoulli (1738) · Hydrodynamica</div></div>'
    + '</div></div></div>';
}

function _htmlPCSing() {
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Pertes de charge singulières · Δh = ξ · V²/2g</div>'
    + '<div class="field"><label class="field-label">Type de singularité</label>'
    + '<select id="c-pcType" class="field-inp">'
    + '<option value="0.5">Entrée conduite bord vif (ξ = 0,50)</option>'
    + '<option value="1.0">Sortie conduite (ξ = 1,0)</option>'
    + '<option value="0.15">Coude 45° (ξ = 0,15)</option>'
    + '<option value="0.3">Coude 90° (ξ = 0,30)</option>'
    + '<option value="0.5">Té passage direct (ξ = 0,50)</option>'
    + '<option value="5.0">Vanne papillon mi-ouverte (ξ = 5,0)</option>'
    + '<option value="0.05">Clapet anti-retour (ξ = 0,05)</option>'
    + '<option value="custom">Valeur personnalisée</option>'
    + '</select></div>'
    + '<div class="field"><label class="field-label">Coefficient ξ (si personnalisé)</label><div class="field-row"><input type="number" id="c-pcXi" value="0.5" min="0.01" step="0.01"><span class="field-unit">—</span></div></div>'
    + '<div class="field"><label class="field-label">Vitesse V</label><div class="field-row"><input type="number" id="c-pcV" value="1.5" min="0.01" step="0.1"><span class="field-unit">m/s</span></div></div>'
    + '<div class="field"><label class="field-label">Nombre de singularités n</label><div class="field-row"><input type="number" id="c-pcN" value="1" min="1" step="1"><span class="field-unit">—</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcPCSing()">Calculer</button>'
    + '<div class="result-box" id="res-pcsing"><div class="result-value" id="rv-pcsing"></div><div class="result-detail" id="rd-pcsing"></div>'
    + '<div class="result-formula">Δh = n · ξ · V²/(2g) · g = 9,81 m/s²</div><div class="result-src">📖 Idel\'cik (1969) · Handbook of Hydraulic Resistance</div></div>'
    + '</div></div></div>';
}

function _htmlStationPompage() {
  var svg = '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto 12px"><defs><marker id="spa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#1550A0"/></marker><marker id="spb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#059669"/></marker></defs><rect x="5" y="30" width="70" height="80" rx="4" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/><text x="40" y="55" text-anchor="middle" font-size="9" fill="#1550A0" font-family="sans-serif" font-weight="700">BÂCHE</text><text x="40" y="68" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">V utile</text><line x1="5" y1="70" x2="75" y2="70" stroke="#1550A0" stroke-width="1.5" stroke-dasharray="4,2"/><text x="40" y="90" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">N max dém/h</text><line x1="75" y1="80" x2="110" y2="80" stroke="#1550A0" stroke-width="2.5" marker-end="url(#spa)"/><rect x="110" y="65" width="50" height="30" rx="5" fill="#1550A0"/><text x="135" y="84" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif" font-weight="700">POMPE</text><text x="135" y="58" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">HMT · η · P</text><line x1="160" y1="80" x2="220" y2="80" stroke="#059669" stroke-width="2.5" marker-end="url(#spb)"/><line x1="220" y1="80" x2="220" y2="30" stroke="#059669" stroke-width="2.5"/><text x="240" y="58" font-size="8" fill="#059669" font-family="sans-serif">Refoulement</text><line x1="5" y1="18" x2="75" y2="18" stroke="#92400E" stroke-width="1" stroke-dasharray="3,2"/><line x1="75" y1="18" x2="220" y2="18" stroke="#92400E" stroke-width="1" stroke-dasharray="3,2"/><line x1="135" y1="18" x2="135" y2="65" stroke="#92400E" stroke-width="1.5" stroke-dasharray="3,2"/><text x="150" y="14" font-size="8" fill="#92400E" font-family="sans-serif">Hg</text><text x="135" y="125" text-anchor="middle" font-size="8" fill="#D97706" font-family="sans-serif">⚠ Volume utile ≥ Q × 60 / (4 × N_max)</text></svg>';
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + svg
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Station de pompage — volume bâche & puissance</div>'
    + '<div class="field"><label class="field-label">Débit nominal Q</label><div class="field-row"><input type="number" id="sp-Q" value="30" min="0.1" step="1"><span class="field-unit">m³/h</span></div></div>'
    + '<div class="field"><label class="field-label">HMT pompe</label><div class="field-row"><input type="number" id="sp-HMT" value="25" min="1" step="1"><span class="field-unit">m</span></div></div>'
    + '<div class="field"><label class="field-label">Rendement pompe η</label><div class="field-row"><input type="number" id="sp-eta" value="72" min="10" max="95" step="1"><span class="field-unit">%</span></div></div>'
    + '<div class="field"><label class="field-label">Nombre max démarrages/h</label><div class="field-row"><input type="number" id="sp-N" value="10" min="1" max="30" step="1"><span class="field-unit">dém/h</span></div></div>'
    + '<div class="field"><label class="field-label">Coefficient de sécurité volume (≥ 1)</label><div class="field-row"><input type="number" id="sp-coef" value="1.2" min="1" max="3" step="0.1"><span class="field-unit">—</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcStationPompage()">Calculer</button>'
    + '<div class="result-box" id="res-sp"><div class="result-value" id="rv-sp"></div><div class="result-detail" id="rd-sp"></div>'
    + '<div class="result-formula">V_utile = Q × 60 / (4 × N) · P = ρgQH / (3600 × η)</div><div class="result-src">📖 NF EN ISO 9906 · Règles dimensionnement postes de refoulement</div></div>'
    + '</div></div></div>';
}

function _htmlBassinRet() {
  var svg = '<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto 12px"><defs><marker id="bra" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#1550A0"/></marker><marker id="brb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#059669"/></marker></defs><polygon points="30,15 10,100 290,100 270,15" fill="#BFDBFE" stroke="#1550A0" stroke-width="2"/><text x="150" y="65" text-anchor="middle" font-size="11" fill="#1550A0" font-family="sans-serif" font-weight="700">BASSIN</text><text x="150" y="80" text-anchor="middle" font-size="9" fill="#1E40AF" font-family="sans-serif">V (m³)</text><line x1="0" y1="55" x2="30" y2="55" stroke="#1550A0" stroke-width="2.5" marker-end="url(#bra)"/><text x="15" y="48" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">Q_ep</text><line x1="270" y1="55" x2="300" y2="55" stroke="#059669" stroke-width="2.5" marker-end="url(#brb)"/><text x="285" y="48" text-anchor="middle" font-size="8" fill="#059669" font-family="sans-serif">Q_fuite</text><line x1="30" y1="100" x2="270" y2="100" stroke="#1550A0" stroke-width="1.5"/><line x1="30" y1="100" x2="30" y2="55" stroke="#64748B" stroke-width="1" stroke-dasharray="3,2"/><line x1="270" y1="100" x2="270" y2="55" stroke="#64748B" stroke-width="1" stroke-dasharray="3,2"/><text x="150" y="115" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">V = (Q_ep − Q_fuite) × D_vidange</text></svg>';
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + svg
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Bassin de rétention EP — volume (méthode des pluies simplifiée)</div>'
    + '<div class="field"><label class="field-label">Surface active imperméabilisée A</label><div class="field-row"><input type="number" id="br-A" value="2" min="0.01" step="0.1"><span class="field-unit">ha</span></div></div>'
    + '<div class="field"><label class="field-label">Coefficient de ruissellement C</label><div class="field-row"><input type="number" id="br-C" value="0.80" min="0.01" max="1" step="0.01"><span class="field-unit">—</span></div></div>'
    + '<div class="field"><label class="field-label">Débit de fuite spécifique admissible</label><div class="field-row"><input type="number" id="br-Qf" value="3" min="0.1" max="50" step="0.5"><span class="field-unit">L/s/ha</span></div></div>'
    + '<div class="field"><label class="field-label">Période de retour</label>'
    + '<select id="br-T" class="field-inp"><option value="10">T = 10 ans — i₁₀ ≈ 35 mm/h (durée 1h)</option><option value="30">T = 30 ans — i₃₀ ≈ 45 mm/h</option><option value="100">T = 100 ans — i₁₀₀ ≈ 60 mm/h</option></select></div>'
    + '<div class="field"><label class="field-label">Durée de vidange autorisée</label><div class="field-row"><input type="number" id="br-D" value="24" min="1" max="72" step="1"><span class="field-unit">h</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcBassinRet()">Calculer</button>'
    + '<div class="result-box" id="res-br"><div class="result-value" id="rv-br"></div><div class="result-detail" id="rd-br"></div>'
    + '<div class="result-formula">V = (Q_ep − Q_fuite) × D_vid · Q_ep = C × i × A</div><div class="result-src">📖 Méthode des pluies · DTU 60.11 · STU local à vérifier</div></div>'
    + '</div></div></div>';
}

function _htmlReseauGrav() {
  var svg = '<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto 12px"><defs><marker id="rga" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#059669"/></marker></defs><line x1="10" y1="20" x2="290" y2="55" stroke="#92400E" stroke-width="2"/><text x="150" y="15" text-anchor="middle" font-size="8" fill="#92400E" font-family="sans-serif">Profil en long — pente I</text><rect x="30" y="28" width="240" height="20" rx="3" fill="#E6EEF8" stroke="#1550A0" stroke-width="1.5"/><text x="150" y="42" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">DN — conduite gravitaire</text><line x1="30" y1="38" x2="270" y2="38" stroke="#059669" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#rga)"/><text x="150" y="60" text-anchor="middle" font-size="9" fill="#059669" font-family="sans-serif">V — Ks — Q</text><line x1="80" y1="48" x2="80" y2="80" stroke="#64748B" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="220" y1="53" x2="220" y2="80" stroke="#64748B" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="80" y1="75" x2="220" y2="75" stroke="#64748B" stroke-width="1.5"/><text x="150" y="90" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Taux de remplissage h/D</text><text x="150" y="105" text-anchor="middle" font-size="8" fill="#D97706" font-family="sans-serif">⚠ V ≥ 0,60 m/s auto-curage / V ≤ 3,0 m/s</text></svg>';
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + svg
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Réseau gravitaire — débit et vérification auto-curage</div>'
    + '<div class="field"><label class="field-label">Diamètre intérieur DN</label><div class="field-row"><input type="number" id="rg-DN" value="300" min="80" step="25"><span class="field-unit">mm</span></div></div>'
    + '<div class="field"><label class="field-label">Coefficient de Strickler Ks</label><div class="field-row"><input type="number" id="rg-Ks" value="70" min="30" max="120" step="5"><span class="field-unit">m^(1/3)/s</span></div></div>'
    + '<div class="field"><label class="field-label">Pente I</label><div class="field-row"><input type="number" id="rg-I" value="3" min="0.1" step="0.1"><span class="field-unit">‰</span></div></div>'
    + '<div class="field"><label class="field-label">Taux de remplissage h/D (pleine section = 1)</label><div class="field-row"><input type="number" id="rg-hD" value="0.70" min="0.1" max="1" step="0.05"><span class="field-unit">—</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcReseauGrav()">Calculer</button>'
    + '<div class="result-box" id="res-rg"><div class="result-value" id="rv-rg"></div><div class="result-detail" id="rd-rg"></div>'
    + '<div class="result-formula">Q = Ks · A · R^(2/3) · I^(1/2) · Section partielle par ratio h/D</div><div class="result-src">📖 Manning-Strickler · EN 752 · CCTG fascicule 70</div></div>'
    + '</div></div></div>';
}

function _htmlSTEP() {
  var svg = '<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto 12px"><defs><marker id="sta" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#1550A0"/></marker></defs><rect x="5" y="30" width="50" height="55" rx="4" fill="#E6EEF8" stroke="#1550A0" stroke-width="2"/><text x="30" y="52" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif" font-weight="700">PRÉ-</text><text x="30" y="63" text-anchor="middle" font-size="8" fill="#1550A0" font-family="sans-serif">TRAIT.</text><line x1="55" y1="57" x2="75" y2="57" stroke="#1550A0" stroke-width="2" marker-end="url(#sta)"/><rect x="75" y="25" width="70" height="65" rx="4" fill="#D1FAE5" stroke="#059669" stroke-width="2"/><text x="110" y="52" text-anchor="middle" font-size="8" fill="#065F46" font-family="sans-serif" font-weight="700">RÉACTEUR</text><text x="110" y="63" text-anchor="middle" font-size="8" fill="#065F46" font-family="sans-serif">BIO · V (m³)</text><circle cx="100" cy="78" r="3" fill="none" stroke="#059669" stroke-width="1.5"/><circle cx="115" cy="75" r="2" fill="none" stroke="#059669" stroke-width="1.5"/><circle cx="127" cy="79" r="4" fill="none" stroke="#059669" stroke-width="1.5"/><line x1="145" y1="57" x2="165" y2="57" stroke="#059669" stroke-width="2" marker-end="url(#sta)"/><rect x="165" y="30" width="55" height="55" rx="4" fill="#CFFAFE" stroke="#0891B2" stroke-width="2"/><text x="192" y="52" text-anchor="middle" font-size="8" fill="#0E4F66" font-family="sans-serif" font-weight="700">CLARIF.</text><line x1="220" y1="57" x2="240" y2="57" stroke="#0891B2" stroke-width="2" marker-end="url(#sta)"/><rect x="240" y="43" width="55" height="28" rx="4" fill="#F1F5F9" stroke="#64748B" stroke-width="1.5"/><text x="267" y="60" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Rejet</text><text x="150" y="108" text-anchor="middle" font-size="8" fill="#64748B" font-family="sans-serif">Charges entrantes EH → volumes ouvrages</text></svg>';
  return '<div style="padding:0 var(--s-4)"><div class="card card-p"><div class="calc-zone">'
    + svg
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">STEP — dimensionnement simplifié boues activées</div>'
    + '<div class="field"><label class="field-label">Capacité nominale</label><div class="field-row"><input type="number" id="st-EH" value="500" min="5" step="5"><span class="field-unit">EH</span></div></div>'
    + '<div class="field"><label class="field-label">Temps de séjour hydraulique (TSH)</label><div class="field-row"><input type="number" id="st-TSH" value="8" min="4" max="24" step="0.5"><span class="field-unit">h</span></div></div>'
    + '<div class="field"><label class="field-label">Charge volumique en DBO₅</label><div class="field-row"><input type="number" id="st-Cv" value="0.4" min="0.1" max="2" step="0.05"><span class="field-unit">kg DBO₅/m³·j</span></div></div>'
    + '<div class="field"><label class="field-label">Ratio effluent journalier</label><div class="field-row"><input type="number" id="st-q" value="200" min="100" max="400" step="10"><span class="field-unit">L/EH·j</span></div></div>'
    + '<button class="btn btn-primary" onclick="calcSTEP()">Calculer</button>'
    + '<div class="result-box" id="res-step"><div class="result-value" id="rv-step"></div><div class="result-detail" id="rd-step"></div>'
    + '<div class="result-formula">V = DBO₅ / Cv · Q = EH × q · Surface clarif. = Q/V_clarif</div><div class="result-src">📖 Arrêté 21/07/2015 · Metcalf & Eddy · ASTEE guide STEP</div></div>'
    + '</div></div></div>';
}

/* ── FONCTIONS DE CALCUL ── */

function calcStationPompage() {
  var Q    = parseFloat(document.getElementById('sp-Q').value)    || 0;
  var HMT  = parseFloat(document.getElementById('sp-HMT').value)  || 0;
  var eta  = parseFloat(document.getElementById('sp-eta').value)  || 72;
  var N    = parseFloat(document.getElementById('sp-N').value)    || 10;
  var coef = parseFloat(document.getElementById('sp-coef').value) || 1.2;
  if (!Q || !HMT) { alert('Renseigner Q et HMT.'); return; }
  var Vutile = Math.round((Q / 3.6) * (60 / (4 * N)) * 1000 * coef);
  var P_abs  = parseFloat((1000 * 9.81 * (Q / 3600) * HMT / (eta / 100) / 1000).toFixed(2));
  var P_inst = parseFloat((P_abs * 1.15).toFixed(2));
  var E      = parseFloat((P_abs / Q).toFixed(3));
  var res = document.getElementById('res-sp');
  res.classList.add('show');
  document.getElementById('rv-sp').textContent = 'V bâche utile = ' + Vutile + ' L';
  document.getElementById('rd-sp').innerHTML =
    'Puissance absorbée : <b>' + P_abs + ' kW</b><br>'
    + 'Puissance installée (×1,15) : <b>' + P_inst + ' kW</b><br>'
    + 'Énergie spécifique : <b>' + E + ' kWh/m³</b><br>'
    + 'Débit : ' + Q + ' m³/h · HMT : ' + HMT + ' m · η : ' + eta + ' %';
}

function calcBassinRet() {
  var A  = parseFloat(document.getElementById('br-A').value)  || 0;
  var C  = parseFloat(document.getElementById('br-C').value)  || 0;
  var Qf = parseFloat(document.getElementById('br-Qf').value) || 3;
  var D  = parseFloat(document.getElementById('br-D').value)  || 24;
  var selT = document.getElementById('br-T');
  var T = selT ? selT.value : '10';
  if (!A || !C) { alert('Renseigner A et C.'); return; }
  var iH   = T === '10' ? 35 : (T === '30' ? 45 : 60);
  var Qep  = C * iH / 1000 / 3600 * A * 10000;
  var Qf_ms = Qf * A / 1000;
  var Vbrut = Math.max(0, (Qep - Qf_ms) * D * 3600);
  var Vutil = Math.round(Vbrut * 1.2);
  var surf  = parseFloat((Vutil / 2.0).toFixed(0));
  var res = document.getElementById('res-br');
  res.classList.add('show');
  document.getElementById('rv-br').textContent = 'V brut ≈ ' + Math.round(Vbrut) + ' m³  →  V utile (×1,2) = ' + Vutil + ' m³';
  document.getElementById('rd-br').innerHTML =
    'Q_ep entrant : ' + (Qep * 1000).toFixed(1) + ' L/s · Q_fuite : ' + (Qf_ms * 1000).toFixed(1) + ' L/s<br>'
    + 'Surface bassin (h = 2 m) : <b>≈ ' + surf + ' m²</b><br>'
    + 'Pluie de référence T' + T + ' : i = ' + iH + ' mm/h (indicatif — vérifier données locales)<br>'
    + '<span style="color:var(--c-warn);font-size:10px">⚠ Résultat indicatif · Ajuster avec l\'abaque de la commune · DTU local</span>';
}

function calcReseauGrav() {
  var DN = parseFloat(document.getElementById('rg-DN').value) || 0;
  var Ks = parseFloat(document.getElementById('rg-Ks').value) || 70;
  var I  = parseFloat(document.getElementById('rg-I').value)  || 3;
  var hD = parseFloat(document.getElementById('rg-hD').value) || 0.7;
  if (!DN) { alert('Renseigner DN.'); return; }
  var D    = DN / 1000;
  var A_ps = Math.PI * D * D / 4;
  var R_ps = D / 4;
  var Qps  = Ks * A_ps * Math.pow(R_ps, 2 / 3) * Math.pow(I / 1000, 0.5);
  var Vps  = Qps / A_ps;
  var hDc  = Math.min(hD, 0.99);
  var theta   = 2 * Math.acos(1 - 2 * hDc);
  var A_part  = (D * D / 8) * (theta - Math.sin(theta));
  var P_part  = D / 2 * theta;
  var Rh_part = P_part > 0 ? A_part / P_part : 0;
  var Q_part  = Ks * A_part * Math.pow(Rh_part, 2 / 3) * Math.pow(I / 1000, 0.5);
  var V_part  = A_part > 0 ? Q_part / A_part : 0;
  var okAC   = V_part >= 0.60;
  var okVmax = V_part <= 3.0;
  var res = document.getElementById('res-rg');
  res.classList.add('show');
  document.getElementById('rv-rg').textContent = 'Q = ' + (Q_part * 1000).toFixed(1) + ' L/s · V = ' + V_part.toFixed(2) + ' m/s';
  document.getElementById('rd-rg').innerHTML =
    'Pleine section : Q_ps = ' + (Qps * 1000).toFixed(1) + ' L/s · V_ps = ' + Vps.toFixed(2) + ' m/s<br>'
    + 'Section partielle h/D = ' + hD + ' : Q = ' + (Q_part * 1000).toFixed(1) + ' L/s<br>'
    + (okAC ? '<span style="color:#059669">✅ Auto-curage OK (V ≥ 0,60 m/s)</span>' : '<span style="color:#DC2626">⛔ V &lt; 0,60 m/s — risque de dépôts</span>') + '<br>'
    + (!okVmax ? '<span style="color:#DC2626">⛔ V &gt; 3,0 m/s — risque d\'érosion</span><br>' : '')
    + 'Rh partielle = ' + Rh_part.toFixed(4) + ' m · A partielle = ' + (A_part * 10000).toFixed(1) + ' cm²';
}

function calcSTEP() {
  var EH  = parseFloat(document.getElementById('st-EH').value)  || 0;
  var TSH = parseFloat(document.getElementById('st-TSH').value) || 8;
  var Cv  = parseFloat(document.getElementById('st-Cv').value)  || 0.4;
  var q   = parseFloat(document.getElementById('st-q').value)   || 200;
  if (!EH) { alert('Renseigner la capacité EH.'); return; }
  var DBO5    = EH * 54 / 1000;
  var DCO     = EH * 120 / 1000;
  var MES     = EH * 90 / 1000;
  var Qj      = EH * q / 1000;
  var Qpointe = Qj / 24 * 3.5;
  var V_react  = parseFloat((DBO5 / Cv).toFixed(0));
  var V_bassin = parseFloat((Qj * TSH / 24).toFixed(0));
  var S_clarif = parseFloat((Qpointe / 0.8).toFixed(0));
  var res = document.getElementById('res-step');
  res.classList.add('show');
  document.getElementById('rv-step').textContent = 'V réacteur ≈ ' + V_react + ' m³ · Q_j = ' + Math.round(Qj) + ' m³/j';
  document.getElementById('rd-step').innerHTML =
    'Charges entrantes : DBO₅ = ' + DBO5.toFixed(1) + ' kg/j · DCO = ' + DCO.toFixed(1) + ' kg/j · MES = ' + MES.toFixed(1) + ' kg/j<br>'
    + 'Volume réacteur (charge volumique Cv) : <b>' + V_react + ' m³</b><br>'
    + 'Volume réacteur (TSH = ' + TSH + ' h) : <b>' + V_bassin + ' m³</b><br>'
    + 'Surface clarificateur (V_asc = 0,8 m/h) : <b>≈ ' + S_clarif + ' m²</b><br>'
    + 'Débit de pointe estimé : ' + Qpointe.toFixed(1) + ' m³/h<br>'
    + '<span style="color:var(--c-warn);font-size:10px">⚠ Dimensionnement indicatif — À valider par bureau d\'études · Arrêté 21/07/2015</span>';
}

/* ── FONCTIONS DE CALCUL ── */

function calcMethodeRat() {
  if (!checkCalcLimit()) return;
  var C = parseFloat(getV('c-cr'))  || 0.5;
  var i = parseFloat(getV('c-ip2')) || 30;
  var A = parseFloat(getV('c-bv'))  || 5;
  var Q = C * i * A / 3600;
  var r = document.getElementById('res-rat'); r.classList.add('show');
  r.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-rat').textContent = Q.toFixed(4) + ' m³/s = ' + (Q * 1000).toFixed(1) + ' L/s';
  document.getElementById('rd-rat').innerHTML = '• C = ' + C + ' · i = ' + i + ' mm/h · A = ' + A + ' ha'
    + '<br>• Q = ' + C + ' × ' + i + ' × ' + A + ' / 3 600 = ' + Q.toFixed(4) + ' m³/s';
}

function calcDarcy() {
  if (!checkCalcLimit()) return;
  var Q   = parseFloat(getV('c-dQ')) || 50;
  var D   = (parseFloat(getV('c-dD')) || 150) / 1000;
  var L   = parseFloat(getV('c-dL')) || 500;
  var eps = (parseFloat(getV('c-dE')) || 0.1) / 1000;
  var Qs  = Q / 3600;
  var A   = Math.PI * D * D / 4;
  var V   = Qs / A;
  var nu  = 1.004e-6;
  var Re  = V * D / nu;
  var lam, n = 0;
  if (Re < 2300) {
    lam = 64 / Re;
  } else {
    lam = 0.02;
    for (n = 0; n < 30; n++) {
      var lam2 = 1 / Math.pow(-2 * Math.log10(eps / (3.7 * D) + 2.51 / (Re * Math.sqrt(lam))), 2);
      if (Math.abs(lam2 - lam) < 1e-9) break;
      lam = lam2;
    }
  }
  var dH = lam * (L / D) * V * V / (2 * 9.81);
  var r  = document.getElementById('res-darcy'); r.classList.add('show');
  r.style.borderLeftColor = dH < 100 ? 'var(--c-ok)' : 'var(--c-warn)';
  document.getElementById('rv-darcy').textContent = 'ΔH = ' + dH.toFixed(2) + ' m  (gradient = ' + (dH / L * 1000).toFixed(2) + ' m/km)';
  document.getElementById('rd-darcy').innerHTML = '• V = ' + V.toFixed(2) + ' m/s · Re = ' + Math.round(Re) + ' → ' + (Re < 2300 ? 'laminaire' : Re < 4000 ? 'transitoire' : 'turbulent')
    + '<br>• λ = ' + lam.toFixed(5) + ' (Colebrook-White, ' + n + ' itér.)';
}

function calcDeversoir() {
  if (!checkCalcLimit()) return;
  var typeEl = document.getElementById('c-devType');
  var type   = typeEl ? typeEl.value : 'rect';
  var L      = parseFloat(getV('c-devL')) || 2;
  var H      = parseFloat(getV('c-devH')) || 0.3;
  var mu, Q;
  if (type === 'tri') {
    mu = 1.42; Q = mu * Math.pow(H, 2.5);
  } else {
    mu = type === 'min' ? 1.84 : 1.70;
    Q  = mu * L * Math.pow(H, 1.5);
  }
  var r = document.getElementById('res-dev'); r.classList.add('show');
  r.style.borderLeftColor = 'var(--c-ok)';
  var lbl = type === 'rect' ? 'Rectangulaire large' : type === 'min' ? 'Mince' : 'Triangulaire 90°';
  document.getElementById('rv-dev').textContent = 'Q = ' + Q.toFixed(3) + ' m³/s = ' + (Q * 1000).toFixed(0) + ' L/s';
  document.getElementById('rd-dev').innerHTML = '• Type : ' + lbl + ' · μ = ' + mu
    + '<br>• L = ' + L + ' m · H = ' + H + ' m (vitesse approche négligée)';
}

function calcHMT() {
  if (!checkCalcLimit()) return;
  var Hg  = parseFloat(getV('c-hHg'))  || 20;
  var Dhl = parseFloat(getV('c-hDhl')) || 3;
  var Dhs = parseFloat(getV('c-hDhs')) || 1;
  var Pav = parseFloat(getV('c-hPav')) || 10;
  var Q   = parseFloat(getV('c-hQ'))   || 30;
  var eta = (parseFloat(getV('c-hEta')) || 75) / 100;
  var Hmt = Hg + Dhl + Dhs + Pav;
  var Pw  = 1000 * 9.81 * (Q / 3600) * Hmt / eta;
  var r   = document.getElementById('res-hmt'); r.classList.add('show');
  r.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-hmt').textContent = 'HMT = ' + Hmt.toFixed(1) + ' m · P_abs = ' + (Pw / 1000).toFixed(2) + ' kW';
  document.getElementById('rd-hmt').innerHTML = '• Hg = ' + Hg + ' m · ΔHl = ' + Dhl + ' m · ΔHs = ' + Dhs + ' m · P_aval = ' + Pav + ' m'
    + '<br>• P_hydraulique = ' + (1000 * 9.81 * (Q / 3600) * Hmt / 1000).toFixed(2) + ' kW · η = ' + (eta * 100) + '%';
}

function calcNPSH() {
  if (!checkCalcLimit()) return;
  var Pa  = parseFloat(getV('c-nPa')) || 101325;
  var Pv  = parseFloat(getV('c-nPv')) || 2338;
  var Hs  = parseFloat(getV('c-nHs')) || 4;
  var DH  = parseFloat(getV('c-nDH')) || 0.5;
  var NPSHd = (Pa - Pv) / (1000 * 9.81) - Hs - DH;
  var r = document.getElementById('res-npsh'); r.classList.add('show');
  r.style.borderLeftColor = NPSHd > 0 ? 'var(--c-ok)' : 'var(--c-danger)';
  document.getElementById('rv-npsh').textContent = 'NPSHd = ' + NPSHd.toFixed(2) + ' m';
  document.getElementById('rd-npsh').innerHTML = (NPSHd > 0
    ? '• Marge positive — vérifier NPSHd &gt; NPSHr pompe (marge ≥ 0,5 m recommandée)'
    : '⚠ NPSHd négatif — risque cavitation · Réduire Hs ou les pertes aspiration')
    + '<br>• (Pa−Pv)/ρg = ' + ((Pa - Pv) / (1000 * 9.81)).toFixed(2) + ' m · Hs = ' + Hs + ' m · ΔHas = ' + DH + ' m';
}

function calcBelier() {
  if (!checkCalcLimit()) return;
  var V   = parseFloat(getV('c-bV'))   || 1.5;
  var c   = parseFloat(getV('c-bC'))   || 1000;
  var L   = parseFloat(getV('c-bL'))   || 500;
  var rho = parseFloat(getV('c-bRho')) || 1000;
  var dP  = rho * c * V;
  var dH  = dP / (rho * 9.81);
  var tc  = 2 * L / c;
  var r   = document.getElementById('res-belier'); r.classList.add('show');
  r.style.borderLeftColor = dH < 100 ? 'var(--c-ok)' : 'var(--c-danger)';
  document.getElementById('rv-belier').textContent = 'ΔP = ' + (dP / 1000).toFixed(1) + ' kPa = ' + dH.toFixed(1) + ' m CE';
  document.getElementById('rd-belier').innerHTML = '• ΔP = ρ·c·V = ' + rho + '×' + c + '×' + V + ' = ' + Math.round(dP / 1000) + ' kPa'
    + '<br>• Temps phase critique 2L/c = ' + tc.toFixed(2) + ' s'
    + (dH > 150 ? '<br>⚠ Surpression élevée — prévoir protection (clapet, chaudron, vase d\'expansion)' : '');
}

function calcReynolds() {
  if (!checkCalcLimit()) return;
  var V  = parseFloat(getV('c-rV'))  || 1;
  var D  = (parseFloat(getV('c-rD')) || 100) / 1000;
  var nu = (parseFloat(getV('c-rNu')) || 1.004) * 1e-6;
  var Re = V * D / nu;
  var regime = Re < 2300 ? 'Laminaire' : Re < 4000 ? 'Transitoire' : 'Turbulent';
  var lam = Re < 2300 ? (64 / Re) : (1 / Math.pow(-2 * Math.log10(2.51 / (Re * Math.sqrt(0.02))), 2));
  var r  = document.getElementById('res-reynolds'); r.classList.add('show');
  r.style.borderLeftColor = Re > 4000 ? 'var(--c-ok)' : 'var(--c-warn)';
  document.getElementById('rv-reynolds').textContent = 'Re = ' + Math.round(Re).toLocaleString() + ' → ' + regime;
  document.getElementById('rd-reynolds').innerHTML = '• V = ' + V + ' m/s · D = ' + (D * 1000) + ' mm · ν = ' + (nu * 1e6).toFixed(3) + '×10⁻⁶ m²/s'
    + '<br>• λ ≈ ' + lam.toFixed(5) + ' (Darcy-Weisbach)';
}

function calcBernoulli() {
  if (!checkCalcLimit()) return;
  var P1  = parseFloat(getV('c-bP1'))  || 200000;
  var V1  = parseFloat(getV('c-bV1'))  || 0.5;
  var z1  = parseFloat(getV('c-bZ1'))  || 10;
  var V2  = parseFloat(getV('c-bV2'))  || 2;
  var z2  = parseFloat(getV('c-bZ2'))  || 5;
  var rho = parseFloat(getV('c-bRho2')) || 1000;
  var g   = 9.81;
  var P2  = P1 + rho * g * (z1 - z2) + rho * (V1 * V1 - V2 * V2) / 2;
  var H1  = P1 / (rho * g) + V1 * V1 / (2 * g) + z1;
  var H2  = P2 / (rho * g) + V2 * V2 / (2 * g) + z2;
  var r   = document.getElementById('res-bernoulli'); r.classList.add('show');
  r.style.borderLeftColor = Math.abs(H2 - H1) < 0.01 ? 'var(--c-ok)' : 'var(--c-warn)';
  document.getElementById('rv-bernoulli').textContent = 'P₂ = ' + (P2 / 1000).toFixed(2) + ' kPa = ' + (P2 / (rho * g)).toFixed(2) + ' m CE';
  document.getElementById('rd-bernoulli').innerHTML = '• H₁ = ' + H1.toFixed(3) + ' m · H₂ = ' + H2.toFixed(3) + ' m (conservation énergie)'
    + '<br>• ΔP = P₂−P₁ = ' + ((P2 - P1) / 1000).toFixed(2) + ' kPa';
}

function calcPCSing() {
  if (!checkCalcLimit()) return;
  var typeEl = document.getElementById('c-pcType');
  var tv     = typeEl ? typeEl.value : '0.5';
  var xi     = tv === 'custom' ? (parseFloat(getV('c-pcXi')) || 0.5) : parseFloat(tv);
  var V      = parseFloat(getV('c-pcV')) || 1.5;
  var n      = parseInt(getV('c-pcN'))   || 1;
  var dh     = n * xi * V * V / (2 * 9.81);
  var r      = document.getElementById('res-pcsing'); r.classList.add('show');
  r.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-pcsing').textContent = 'Δh = ' + dh.toFixed(3) + ' m = ' + (dh * 1000).toFixed(1) + ' mm CE';
  document.getElementById('rd-pcsing').innerHTML = '• ξ = ' + xi + ' · V = ' + V + ' m/s · n = ' + n
    + '<br>• V²/2g = ' + (V * V / (2 * 9.81)).toFixed(4) + ' m · Δh totale = ' + dh.toFixed(3) + ' m';
}

/* ── FONCTIONS CONSERVÉES ── */

function renderComparateurFilieres() {
  var z = document.getElementById('calc-content');
  if (!z) return;
  z.innerHTML = '<div style="padding:var(--s-3) var(--s-4)"><div class="alert info"><span class="alert-icon">ℹ</span><span>Le comparateur de filières ANC est disponible dans le module ANC → onglet Comparateur.</span></div></div>';
}

function calcFTEMain() {
  if (!checkCalcLimit()) return;
  var pp   = parseInt(getV('c-pp'))   || 4;
  var pers = parseInt(getV('c-pers')) || 4;
  var v    = pp <= 5 ? 3000 : 3000 + (pp - 5) * 1000;
  var b    = pers * 30;
  var r    = document.getElementById('res-fte'); r.classList.add('show');
  r.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-fte').textContent = v.toLocaleString() + ' L = ' + (v / 1000).toFixed(1) + ' m³';
  document.getElementById('rd-fte').innerHTML = '• PP = ' + pp + ' · EH régl. = ' + (pp + 1) + '<br>• Boues ≈ ' + b + ' L/an → Vidange tous les ~' + Math.floor(v * 0.5 / b) + ' ans';
}

function calcMethodeRatMain() { calcMethodeRat(); }

function calcChargesMain() {
  if (!checkCalcLimit()) return;
  var eh  = parseInt(getV('c-eh2')) || 1000;
  var dbo = eh * 54;
  var dco = eh * 120;
  var mes = eh * 90;
  var nk  = eh * 11;
  var pt  = eh * 1.8;
  var r   = document.getElementById('res-charges'); r.classList.add('show');
  r.style.borderLeftColor = 'var(--c-ok)';
  document.getElementById('rv-charges').textContent = eh.toLocaleString() + ' EH';
  document.getElementById('rd-charges').innerHTML = '• DBO₅ : ' + (dbo / 1000).toFixed(1) + ' kg/j (' + (dbo / 1000 * 365).toFixed(0) + ' kg/an)'
    + '<br>• DCO : ' + (dco / 1000).toFixed(1) + ' kg/j · MES : ' + (mes / 1000).toFixed(1) + ' kg/j'
    + '<br>• NTK : ' + (nk / 1000).toFixed(1) + ' kg/j · Pt : ' + (pt / 1000).toFixed(2) + ' kg/j';
}

function calcHWMain() {
  if (!checkCalcLimit()) return;
  var C = parseFloat(getV('c-chw')) || 120;
  var D = (parseFloat(getV('c-dhw')) || 200) / 1000;
  var S = (parseFloat(getV('c-shw')) || 2) / 1000;
  var R = D / 4;
  var V = 0.8492 * C * Math.pow(R, 0.63) * Math.pow(S, 0.54);
  var A = Math.PI * D * D / 4;
  var Q = V * A;
  var r = document.getElementById('res-hw'); r.classList.add('show');
  r.style.borderLeftColor = V <= 3 ? 'var(--c-ok)' : 'var(--c-warn)';
  document.getElementById('rv-hw').textContent = 'V = ' + V.toFixed(2) + ' m/s · Q = ' + (Q * 3600).toFixed(1) + ' m³/h = ' + (Q * 1000).toFixed(1) + ' L/s';
  document.getElementById('rd-hw').innerHTML = '• C = ' + C + ' · D = ' + (D * 1000) + ' mm · S = ' + (S * 1000) + ' m/km'
    + '<br>• R = D/4 = ' + (R * 1000).toFixed(0) + ' mm · A = ' + (A * 10000).toFixed(1) + ' cm²'
    + (V > 3 ? '<br>⚠ Vitesse élevée — vérifier résistance conduite' : '');
}

/* ─── RENDER ANC ─── */
const ANC_TAB_LBLS = ['Filières','Comparateur','Prétraitement','Collecte','Rejet','Ventilation'];

function renderANC() {
  var tb = document.getElementById('tab-bar'); if (tb) tb.style.display = 'none';
  document.getElementById('main-content').innerHTML =
    '<div style="padding:8px var(--s-4);border-bottom:1px solid var(--c-border);display:flex;align-items:center">'
    + '<button onclick="goHome()" style="border:none;background:none;cursor:pointer;font-size:13px;color:var(--c-text-2);font-weight:600;padding:0">← Accueil</button>'
    + '</div>'
    + '<div id="anc-content"></div><div class="pb-nav"></div>';
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
  {ico:'🌾',name:'Tranchées d\'épandage',sub:'Sol apte au traitement et à l\'infiltration · Perméabilité à vérifier par étude de sol',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Perméabilité':'15–500 mm/h (Arrêté 07/09/2009)','Profondeur':'0,6–0,7 m recouvrement','Drain':'PVC Ø 100 mm perforé','Pente drain':'Max 0,5%','Norme':'DTU 64.1 · Arrêté 07/09/2009 modifié'}},
  {ico:'🟡',name:'Filtre à sable non drainé',sub:'Traitement sur sable rapporté · Infiltration dans le sol sous-jacent si celui-ci le permet',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Condition':'Sol sous-jacent apte à l\'infiltration requis','Épaisseur sable':'0,7 m minimum','Granulométrie sable':'0,25–2 mm (lavé)','Charge hydro.':'0,08 m/j','Norme':'DTU 64.1'}},
  {ico:'🟠',name:'Filtre à sable drainé',sub:'Traitement sur sable rapporté · Collecte des eaux traitées · Évacuation à définir selon le site',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Drain collecte':'Ø 100 mm pente 0,5%','Rejet':'Milieu récepteur autorisé (étude justificative + autorisation)','Charge hydro.':'0,10 m/j','Norme':'DTU 64.1'}},
  {ico:'⛰️',name:'Tertre d\'infiltration',sub:'Traitement sur massif surélevé · Adapté nappe haute · Faisabilité à vérifier',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Hauteur surélevée':'0,5–1,5 m au-dessus sol','Distance nappe':'≥ 0,7 m (fond filière)','Charge hydro.':'0,12 m/j','Matériau':'Sable 0,25–2 mm importé','Norme':'DTU 64.1 art. 8'}},
  {ico:'⚙️',name:'Microstation d\'épuration',sub:'Dispositif agréé pour une capacité donnée · Évacuation des eaux traitées à prévoir',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Agrément':'Arrêté 07/09/2009 modifié (≠ marquage CE NF EN 12566-3)','Capacité':'4–20 EH','Rendement DBO₅':'> 90%','Électricité':'100–300 kWh/an','Contrat entretien':'Selon le guide du dispositif','Durée vie':'15–25 ans'}},
  {ico:'🌿',name:'FPR Vertical (phytoépuration)',sub:'Filtre planté à écoulement vertical · Conditions d\'utilisation à vérifier dans l\'agrément',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Charge surfacique':'5 m²/EH (mono-étage)','Granulat':'Gravier 2–8 mm surface','Alimentation':'Bâchées séquentielles','Roseaux':'Phragmites australis','Agrément':'Arrêté 07/09/2009 modifié','Durée vie':'> 30 ans'}},
  {ico:'🥥',name:'Filtre compact (média filtrant)',sub:'Dispositif agréé · Médias variés selon le dispositif · Sans énergie pour le traitement',color:'var(--c-anc)',colorl:'var(--c-anc-l)',specs:{'Médias possibles':'Coco, zéolite, gravier, autres selon agrément','Agrément':'Arrêté 07/09/2009 modifié','Entretien':'Contrôle et remplacement selon le guide du fabricant','Norme':'NF EN 12566-3'}},
];

function renderANCFilieres() {
  document.getElementById('anc-content').innerHTML = `
    <div class="search-container" style="padding-top:var(--s-2)"><div class="search-bar"><span class="search-ico">🔍</span><input type="text" placeholder="Rechercher une filière…"></div></div>
    <div class="section-header">Familles de filières<span class="sh-count">${FICHES_FILIERES.length} fiches</span></div>
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
    sol:['permeable'], surface:'200–400 m²', surfaceVal:30, cout:'Budget indicatif 4 000–7 000 €', coutVal:5500,
    entretien:'Vidange selon accumulation des boues (seuil indicatif 50% volume utile)', entretienVal:100,
    elec:'Sans énergie pour le traitement ; relevage éventuel à prévoir', elecVal:0,
    charge:'Variations de débit : sol tampon', paysage:'Invisible (enterré)', agrement:'DTU 64.1',
    avantages:'Pas d\'énergie pour le traitement · Pas d\'entretien mécanique · Économique',
    inconvenients:'Grande surface · Étude de sol obligatoire · Pas de rejet contrôlé' },
  { nom:'Filtre à sable non drainé', ico:'🟡',
    sol:['permeable','moyen'], surface:'25–30 m²', surfaceVal:5, cout:'Budget indicatif 6 000–9 000 €', coutVal:7500,
    entretien:'Vidange selon accumulation des boues', entretienVal:100,
    elec:'Sans énergie pour le traitement ; relevage éventuel à prévoir', elecVal:0,
    charge:'Bonne', paysage:'Invisible (enterré)', agrement:'DTU 64.1',
    avantages:'Compact · Pas d\'énergie pour le traitement · Robuste',
    inconvenients:'Sable de qualité requis · Colmatage possible à long terme · Sol sous-jacent apte requis' },
  { nom:'Filtre à sable drainé', ico:'🟠',
    sol:['impermeable'], surface:'25–30 m²', surfaceVal:5, cout:'Budget indicatif 7 000–10 000 €', coutVal:8500,
    entretien:'Vidange selon accumulation des boues', entretienVal:100,
    elec:'Sans énergie pour le traitement ; relevage éventuel à prévoir', elecVal:0,
    charge:'Bonne', paysage:'Invisible (enterré)', agrement:'DTU 64.1',
    avantages:'Adapté sol sans pouvoir infiltrant · Pas d\'énergie pour le traitement',
    inconvenients:'Milieu récepteur autorisé requis (étude justificative + autorisation) · Sable de qualité' },
  { nom:'Tertre d\'infiltration', ico:'⛰️',
    sol:['nappe','impermeable'], surface:'30–60 m²', surfaceVal:8, cout:'Budget indicatif 8 000–12 000 €', coutVal:10000,
    entretien:'Vidange selon accumulation des boues', entretienVal:100,
    elec:'Sans énergie pour le traitement ; relevage éventuel à prévoir', elecVal:0,
    charge:'Bonne', paysage:'Butte visible', agrement:'DTU 64.1',
    avantages:'Adapté nappe haute · Pas d\'énergie pour le traitement',
    inconvenients:'Emprise importante · Butte visible · Sable importé coûteux · Faisabilité à vérifier' },
  { nom:'Microstation boues activées', ico:'⚙️',
    sol:['permeable','moyen','impermeable','nappe'], surface:'5–10 m²', surfaceVal:2, cout:'Budget indicatif 6 500–10 000 €', coutVal:8000,
    entretien:'Entretien et vidange selon le guide du dispositif', entretienVal:300,
    elec:'150–300 kWh/an', elecVal:250,
    charge:'Sensible aux variations de débit et de charge polluante', paysage:'Invisible (regard)', agrement:'Arrêté 07/09/2009 modifié',
    avantages:'Très compact · Traitement indépendant du sol · Bon rendement',
    inconvenients:'Électricité · Entretien selon guide du dispositif · Fonctionnement intermittent à vérifier dans l\'agrément' },
  { nom:'Microstation culture fixée', ico:'🔧',
    sol:['permeable','moyen','impermeable','nappe'], surface:'5–10 m²', surfaceVal:2, cout:'Budget indicatif 7 000–11 000 €', coutVal:9000,
    entretien:'Entretien et vidange selon le guide du dispositif', entretienVal:300,
    elec:'100–250 kWh/an', elecVal:180,
    charge:'Variations de débit et d\'alimentation : à vérifier selon agrément', paysage:'Invisible (regard)', agrement:'Arrêté 07/09/2009 modifié',
    avantages:'Compact · Traitement indépendant du sol · Plus tolérant aux variations que les boues activées',
    inconvenients:'Électricité · Entretien selon guide du dispositif · Fonctionnement intermittent à vérifier dans l\'agrément' },
  { nom:'Microstation SBR', ico:'🔄',
    sol:['permeable','moyen','impermeable','nappe'], surface:'5–10 m²', surfaceVal:2, cout:'Budget indicatif 7 000–12 000 €', coutVal:9500,
    entretien:'Entretien et vidange selon le guide du dispositif', entretienVal:300,
    elec:'100–250 kWh/an', elecVal:200,
    charge:'Variations de charge et d\'alimentation : à vérifier selon agrément', paysage:'Invisible (regard)', agrement:'Arrêté 07/09/2009 modifié',
    avantages:'Compact · Traitement indépendant du sol · Cycle séquentiel',
    inconvenients:'Électricité · Automate sensible · Fonctionnement intermittent à vérifier dans l\'agrément' },
  { nom:'Filtre compact (média filtrant)', ico:'🥥',
    sol:['permeable','moyen','impermeable','nappe'], surface:'10–18 m²', surfaceVal:3, cout:'Budget indicatif 8 000–13 000 €', coutVal:10500,
    entretien:'Contrôle et renouvellement selon le média et le guide du fabricant', entretienVal:150,
    elec:'Sans énergie pour le traitement ; relevage éventuel à prévoir', elecVal:0,
    charge:'Variations de débit et de charge : robustesse à vérifier selon le dispositif', paysage:'Invisible (enterré)', agrement:'Arrêté 07/09/2009 modifié',
    avantages:'Pas d\'énergie pour le traitement · Compact · Médias variés selon agrément',
    inconvenients:'Remplacement périodique selon fabricant · Coût initial' },
  { nom:'Filtre planté de roseaux', ico:'🌱',
    sol:['permeable','moyen','impermeable','nappe'], surface:'30–50 m²', surfaceVal:6, cout:'Budget indicatif 8 000–14 000 €', coutVal:11000,
    entretien:'Faucardage annuel · Contrôle et curage selon l\'agrément', entretienVal:80,
    elec:'Sans énergie pour le traitement ; relevage éventuel à prévoir', elecVal:0,
    charge:'Forte inertie biologique · Variations d\'alimentation : à vérifier selon agrément', paysage:'Végétalisé (esthétique)', agrement:'Arrêté 07/09/2009 modifié',
    avantages:'Pas d\'énergie pour le traitement · Robuste · Écologique · Faible entretien mécanique',
    inconvenients:'Grande surface · Faucardage annuel · Fonctionnement intermittent à vérifier dans l\'agrément' },
];

var ancFiltreSol = 'tous';
var ancFiltreUsage = 'tous';

function renderANCComparateur() {
  var html = '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div class="card card-p">'
    + '<div style="font-family:var(--f-display);font-size:var(--t-lg);margin-bottom:4px">Comparateur de filières d\'assainissement non collectif</div>'
    + '<div style="font-size:12px;color:var(--c-text-3);line-height:1.6;margin-bottom:var(--s-3)">Explorez les familles potentiellement compatibles avec votre terrain et votre usage. Le choix définitif dépend des caractéristiques du site, du dimensionnement, des conditions d\'utilisation du dispositif et du contrôle du projet par le SPANC.</div>'
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
    if (ancFiltreUsage === 'secondaire' && f.charge.indexOf('Sensible') === 0) return false;
    return true;
  });

  var html = '<div class="section-header">' + list.length + ' famille(s) de filières à explorer</div>'
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
    '<div style="padding:8px var(--s-4);border-bottom:1px solid var(--c-border);display:flex;align-items:center">'
    + '<button onclick="renderCalc()" style="border:none;background:none;cursor:pointer;font-size:13px;color:var(--c-text-2);font-weight:600;padding:0">← Calculateurs</button>'
    + '</div>'
    + '<div id="pap-content"></div><div class="pb-nav"></div>';
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
        + '<div class="kv-val" style="' + (parseFloat(puissVol) > 200 ? 'color:var(--c-danger)' : '') + '">' + puissVol + ' W/m³</div></div>'
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
