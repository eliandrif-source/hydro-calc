/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — MILIEUX AQUATIQUES / QUALITÉ D'EAU
   Audited engines: Shields incipient motion + Langelier SI.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_RIVERS_LOADED__) return;
  window.__HC_SCIENCE_RIVERS_LOADED__ = true;

  function finite(v, label) {
    var n = Number(v);
    if (!Number.isFinite(n)) throw new RangeError(label + ' must be finite');
    return n;
  }
  function positive(v, label) {
    var n = finite(v, label);
    if (n <= 0) throw new RangeError(label + ' must be > 0');
    return n;
  }

  /* Shields criterion for non-cohesive grains:
     theta = tau_b / ((rho_s-rho) g d)
     This engine deliberately accepts bed shear stress tau_b as an input.
     It does NOT infer tau_b from mean velocity alone. */
  function shieldsIncipientMotion(bedShearPa, grainDiameterM, sedimentDensityKgM3, waterDensityKgM3, criticalShields) {
    var tau = finite(bedShearPa, 'bed shear stress');
    if (tau < 0) throw new RangeError('bed shear stress must be >= 0');
    var d = positive(grainDiameterM, 'grain diameter');
    var rhoS = positive(sedimentDensityKgM3 == null ? 2650 : sedimentDensityKgM3, 'sediment density');
    var rho = positive(waterDensityKgM3 == null ? 1000 : waterDensityKgM3, 'water density');
    if (rhoS <= rho) throw new RangeError('sediment density must exceed water density');
    var thetaC = positive(criticalShields == null ? 0.047 : criticalShields, 'critical Shields parameter');
    var g = 9.81;
    var denom = (rhoS - rho) * g * d;
    var theta = tau / denom;
    var tauCriticalPa = thetaC * denom;
    return {
      bedShearPa: tau,
      grainDiameterM: d,
      sedimentDensityKgM3: rhoS,
      waterDensityKgM3: rho,
      criticalShields: thetaC,
      shields: theta,
      criticalShearPa: tauCriticalPa,
      mobilityRatio: theta / thetaC,
      incipientMotionExceeded: theta >= thetaC
    };
  }

  /* EPA-style simplified Langelier Saturation Index:
     pHs = (9.3 + A + B) - (C + D)
     A=(log10(TDS)-1)/10
     B=-13.12 log10(T+273)+34.55
     C=log10(Ca hardness as CaCO3)-0.4
     D=log10(alkalinity as CaCO3)
     LSI=pH-pHs. */
  function langelierSaturationIndex(pH, temperatureC, tdsMgL, calciumHardnessMgLAsCaCO3, alkalinityMgLAsCaCO3) {
    var ph = finite(pH, 'pH');
    var t = finite(temperatureC, 'temperature');
    if (t <= -273.15) throw new RangeError('temperature must exceed absolute zero');
    var tds = positive(tdsMgL, 'TDS');
    var calcium = positive(calciumHardnessMgLAsCaCO3, 'calcium hardness');
    var alk = positive(alkalinityMgLAsCaCO3, 'alkalinity');
    var A = (Math.log10(tds) - 1) / 10;
    var B = -13.12 * Math.log10(t + 273) + 34.55;
    var C = Math.log10(calcium) - 0.4;
    var D = Math.log10(alk);
    var pHs = (9.3 + A + B) - (C + D);
    var lsi = ph - pHs;
    return { pH: ph, temperatureC: t, tdsMgL: tds, calciumHardnessMgLAsCaCO3: calcium,
      alkalinityMgLAsCaCO3: alk, A: A, B: B, C: C, D: D, pHs: pHs, lsi: lsi };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.shieldsIncipientMotion = shieldsIncipientMotion;
  window.HydroCalcScience.langelierSaturationIndex = langelierSaturationIndex;

  window.renderCalcaShields = function () {
    var z = document.getElementById('calca-content');
    if (!z) return;
    z.innerHTML = '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
      + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">🪨 Shields — seuil de mise en mouvement</div>'
      + '<div class="alert info"><span class="alert-icon">ℹ</span><span>Le critère de Shields utilise la contrainte de cisaillement au fond τb. Une vitesse moyenne seule ne permet pas de déterminer cette contrainte sans modèle hydraulique complémentaire.</span></div>'
      + '<div class="calc-zone">'
      + '<div class="field"><label class="field-label">Contrainte au fond τb</label><div class="field-row"><input type="number" id="sh-tau" value="15" step="1" min="0"><span class="field-unit">Pa</span></div></div>'
      + '<div class="field"><label class="field-label">Diamètre du grain d</label><div class="field-row"><input type="number" id="sh-d" value="20" step="1" min="0.01"><span class="field-unit">mm</span></div></div>'
      + '<div class="field"><label class="field-label">Masse volumique sédiment ρs</label><div class="field-row"><input type="number" id="sh-rhos" value="2650" step="10"><span class="field-unit">kg/m³</span></div></div>'
      + '<div class="field"><label class="field-label">Paramètre critique θc</label><div class="field-tip">0,047 est une valeur historique Meyer-Peter & Müller ; choisir la formulation adaptée au sédiment et au modèle de transport.</div><div class="field-row"><input type="number" id="sh-thetac" value="0.047" step="0.001" min="0.001"><span class="field-unit">—</span></div></div>'
      + '<button class="btn btn-primary" onclick="calcShields()">Évaluer la mobilité</button>'
      + '<div class="result-box" id="res-sh"><div class="result-value" id="rv-sh"></div><div class="result-detail" id="rd-sh"></div><div class="result-formula">θ = τb / [(ρs − ρ) g d]</div><div class="result-src">📖 Critère de Shields · HEC-RAS Sediment Technical Reference Manual</div></div>'
      + '</div></div></div>';
  };

  window.calcShields = function () {
    var box = document.getElementById('res-sh'), val = document.getElementById('rv-sh'), det = document.getElementById('rd-sh');
    if (!box || !val || !det) return;
    try {
      var r = shieldsIncipientMotion(
        parseFloat((document.getElementById('sh-tau') || {}).value),
        parseFloat((document.getElementById('sh-d') || {}).value) / 1000,
        parseFloat((document.getElementById('sh-rhos') || {}).value), 1000,
        parseFloat((document.getElementById('sh-thetac') || {}).value)
      );
      box.classList.add('show');
      box.style.borderLeftColor = r.incipientMotionExceeded ? 'var(--c-warn)' : 'var(--c-ok)';
      val.textContent = 'θ = ' + r.shields.toFixed(4) + ' · θc = ' + r.criticalShields.toFixed(4);
      det.textContent = 'τb = ' + r.bedShearPa.toFixed(2) + ' Pa · τcrit = ' + r.criticalShearPa.toFixed(2) + ' Pa · rapport θ/θc = ' + r.mobilityRatio.toFixed(2) + '. '
        + (r.incipientMotionExceeded ? 'Le seuil choisi est dépassé : mise en mouvement potentielle.' : 'Le seuil choisi n’est pas dépassé.')
        + ' Ce résultat concerne des sédiments non cohésifs et dépend du θc retenu.';
    } catch (e) {
      box.classList.add('show'); box.style.borderLeftColor='var(--c-warn)'; val.textContent='Valeurs invalides'; det.textContent=e.message;
    }
  };

  window.renderCalcaLangelier = function () {
    var z = document.getElementById('calca-content');
    if (!z) return;
    z.innerHTML = '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">'
      + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">⚗️ Indice de saturation de Langelier</div>'
      + '<div class="alert info"><span class="alert-icon">ℹ</span><span>Le LSI indique l’état de saturation vis-à-vis du carbonate de calcium. Il ne constitue pas, à lui seul, un diagnostic complet de corrosion du réseau.</span></div>'
      + '<div class="calc-zone">'
      + '<div class="field"><label class="field-label">pH mesuré</label><div class="field-row"><input type="number" id="il-ph" value="7.4" step="0.1"><span class="field-unit">pH</span></div></div>'
      + '<div class="field"><label class="field-label">Température</label><div class="field-row"><input type="number" id="il-t" value="15" step="1"><span class="field-unit">°C</span></div></div>'
      + '<div class="field"><label class="field-label">Solides dissous totaux (TDS)</label><div class="field-row"><input type="number" id="il-tds" value="300" step="10"><span class="field-unit">mg/L</span></div></div>'
      + '<div class="field"><label class="field-label">Dureté calcique</label><div class="field-tip">Saisir la dureté due au calcium, exprimée en mg/L comme CaCO₃ ; ne pas utiliser automatiquement le TH total.</div><div class="field-row"><input type="number" id="il-ca" value="150" step="10"><span class="field-unit">mg/L CaCO₃</span></div></div>'
      + '<div class="field"><label class="field-label">Alcalinité</label><div class="field-row"><input type="number" id="il-alk" value="100" step="10"><span class="field-unit">mg/L CaCO₃</span></div></div>'
      + '<button class="btn btn-primary" onclick="calcLangelierAvance()">Calculer LSI</button>'
      + '<div class="result-box" id="res-il"><div class="result-value" id="rv-il"></div><div class="result-detail" id="rd-il"></div><div class="result-formula">LSI = pH − pHs</div><div class="result-src">📖 Langelier · méthode simplifiée de calcul pHs documentée par l’US EPA</div></div>'
      + '</div></div></div>';
  };

  window.calcLangelierAvance = function () {
    var box=document.getElementById('res-il'), val=document.getElementById('rv-il'), det=document.getElementById('rd-il');
    if (!box || !val || !det) return;
    try {
      var r=langelierSaturationIndex(
        parseFloat((document.getElementById('il-ph')||{}).value), parseFloat((document.getElementById('il-t')||{}).value),
        parseFloat((document.getElementById('il-tds')||{}).value), parseFloat((document.getElementById('il-ca')||{}).value),
        parseFloat((document.getElementById('il-alk')||{}).value));
      box.classList.add('show');
      box.style.borderLeftColor=Math.abs(r.lsi)<=0.5?'var(--c-ok)':'var(--c-warn)';
      val.textContent='pHs = '+r.pHs.toFixed(2)+' · LSI = '+r.lsi.toFixed(2);
      det.textContent=(r.lsi>0?'Eau sursaturée vis-à-vis de CaCO₃ : tendance à la précipitation.':r.lsi<0?'Eau sous-saturée vis-à-vis de CaCO₃ : tendance à dissoudre CaCO₃.':'Équilibre de saturation vis-à-vis de CaCO₃.')
        +' Le LSI ne suffit pas pour conclure à la corrosion ou à la conformité sanitaire.';
    } catch(e) { box.classList.add('show'); box.style.borderLeftColor='var(--c-warn)'; val.textContent='Valeurs invalides'; det.textContent=e.message; }
  };
})();