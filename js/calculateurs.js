function renderCalc() {
  loadModuleTabs(CALC_TAB_LBLS, 'switchCalcTab');
  document.getElementById('main-content').innerHTML =
    '<div id="calc-content"></div><div class="pb-nav"></div>';
  renderCalcEpandage();
}

function switchCalcTab(idx) {
  setTabActive('module-tabs', idx);
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
      </div>
    </div></div>
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

function calcChargesMain(){
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

function calcHWMain(){
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

function calcFTEAnc(){
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



