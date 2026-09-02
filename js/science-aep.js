/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — AEP SCIENTIFIC CORE
   Audited engines: Hazen-Williams, pump HMT/power, NPSH available,
   chlorine mass balance and reservoir storage pre-sizing.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_AEP_LOADED__) return;
  window.__HC_SCIENCE_AEP_LOADED__ = true;

  function positive(v, label) {
    var n = Number(v);
    if (!Number.isFinite(n) || n <= 0) throw new RangeError(label + ' must be > 0');
    return n;
  }
  function nonNegative(v, label) {
    var n = Number(v);
    if (!Number.isFinite(n) || n < 0) throw new RangeError(label + ' must be >= 0');
    return n;
  }

  function hazenWilliamsHeadloss(flowM3s, diameterM, coefficientC, lengthM) {
    var q = positive(flowM3s, 'flow');
    var d = positive(diameterM, 'diameter');
    var c = positive(coefficientC, 'Hazen-Williams C');
    var l = positive(lengthM, 'length');
    var areaM2 = Math.PI * d * d / 4;
    var velocityMs = q / areaM2;
    var hydraulicRadiusM = d / 4;
    var gradient = Math.pow(velocityMs / (0.8492 * c * Math.pow(hydraulicRadiusM, 0.63)), 1 / 0.54);
    return {
      flowM3s: q,
      diameterM: d,
      coefficientC: c,
      lengthM: l,
      areaM2: areaM2,
      velocityMs: velocityMs,
      hydraulicRadiusM: hydraulicRadiusM,
      gradient: gradient,
      headlossM: gradient * l,
      headlossPerKmM: gradient * 1000
    };
  }

  function pumpHeadPower(flowM3h, geometricHeadM, lossesM, residualHeadM, overallEfficiency, densityKgM3) {
    var qh = positive(flowM3h, 'flow');
    var hg = Number(geometricHeadM);
    var hf = nonNegative(lossesM, 'losses');
    var hp = nonNegative(residualHeadM, 'residual head');
    var eta = positive(overallEfficiency, 'efficiency');
    var rho = densityKgM3 == null ? 1000 : positive(densityKgM3, 'density');
    if (!Number.isFinite(hg)) throw new RangeError('geometric head must be finite');
    if (eta > 1) throw new RangeError('efficiency must be <= 1');
    var hmt = hg + hf + hp;
    if (!(hmt > 0)) throw new RangeError('HMT must be > 0');
    var q = qh / 3600;
    var hydraulicPowerKw = rho * 9.80665 * q * hmt / 1000;
    return {
      flowM3h: qh,
      flowM3s: q,
      hmtM: hmt,
      hydraulicPowerKw: hydraulicPowerKw,
      estimatedInputPowerKw: hydraulicPowerKw / eta,
      efficiency: eta,
      densityKgM3: rho
    };
  }

  /* NIST Chemistry WebBook Antoine parameters, P in bar and T in kelvin. */
  function waterVaporPressureBar(tempC) {
    var tC = Number(tempC);
    if (!Number.isFinite(tC) || tC < 0 || tC > 60) throw new RangeError('water temperature must be between 0 and 60 °C');
    var tK = tC + 273.15;
    var a, b, c;
    if (tK <= 303) { a = 5.40221; b = 1838.675; c = -31.737; }
    else { a = 5.20389; b = 1733.926; c = -39.485; }
    return Math.pow(10, a - b / (tK + c));
  }

  function npshAvailable(suctionLiftM, suctionLossM, tempC, atmosphericPressureBarAbs, npshRequiredM, designMarginM, densityKgM3) {
    var ha = Number(suctionLiftM);
    var hfa = nonNegative(suctionLossM, 'suction losses');
    var patm = positive(atmosphericPressureBarAbs, 'absolute atmospheric pressure');
    var req = nonNegative(npshRequiredM, 'NPSHr');
    var marginReq = nonNegative(designMarginM, 'design margin');
    var rho = densityKgM3 == null ? 998.2 : positive(densityKgM3, 'density');
    if (!Number.isFinite(ha)) throw new RangeError('suction lift must be finite');
    var pvBar = waterVaporPressureBar(tempC);
    var pressureHeadM = patm * 100000 / (rho * 9.80665);
    var vaporHeadM = pvBar * 100000 / (rho * 9.80665);
    var availableM = pressureHeadM - ha - hfa - vaporHeadM;
    var actualMarginM = availableM - req;
    return {
      vaporPressureBar: pvBar,
      atmosphericHeadM: pressureHeadM,
      vaporHeadM: vaporHeadM,
      npshAvailableM: availableM,
      npshRequiredM: req,
      actualMarginM: actualMarginM,
      requiredMarginM: marginReq,
      passesDesignMargin: actualMarginM >= marginReq
    };
  }

  /* Simplified chlorine dose mass balance. This calculates dosing only; it
     does not prove disinfection performance, CT, breakpoint or compliance. */
  function chlorineDose(flowM3h, chlorineDemandMgL, targetResidualMgL, solutionConcentrationGCl2L) {
    var q = positive(flowM3h, 'flow');
    var demand = nonNegative(chlorineDemandMgL, 'chlorine demand');
    var residual = nonNegative(targetResidualMgL, 'target residual');
    var concentration = positive(solutionConcentrationGCl2L, 'solution concentration');
    var doseMgL = demand + residual;
    var chlorineMassGh = doseMgL * q; // 1 mg/L × 1 m3 = 1 g
    var injectionLh = chlorineMassGh / concentration;
    return {
      flowM3h: q,
      doseMgL: doseMgL,
      chlorineMassGh: chlorineMassGh,
      chlorineMassKgDay: chlorineMassGh * 24 / 1000,
      injectionLh: injectionLh,
      injectionLDay: injectionLh * 24,
      targetResidualMgL: residual
    };
  }

  /* Storage pre-sizing. Fire reserve is deliberately separated from normal
     operational storage because a dedicated fire volume may not participate
     in normal turnover/mixing. */
  function reservoirStorage(dailyDemandM3, regulationPercent, securityHours, fireReserveM3) {
    var vj = positive(dailyDemandM3, 'daily demand');
    var reg = nonNegative(regulationPercent, 'regulation percent');
    var hours = nonNegative(securityHours, 'security hours');
    var fire = nonNegative(fireReserveM3, 'fire reserve');
    if (reg > 100) throw new RangeError('regulation percent must be <= 100');
    var regulationM3 = vj * reg / 100;
    var securityM3 = vj * hours / 24;
    var operationalStorageM3 = regulationM3 + securityM3;
    var totalStructuralVolumeM3 = operationalStorageM3 + fire;
    return {
      regulationM3: regulationM3,
      securityM3: securityM3,
      fireReserveM3: fire,
      operationalStorageM3: operationalStorageM3,
      totalStructuralVolumeM3: totalStructuralVolumeM3,
      nominalTurnoverOperationalH: operationalStorageM3 / vj * 24,
      nominalTurnoverIfAllMixedH: totalStructuralVolumeM3 / vj * 24
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.hazenWilliamsHeadloss = hazenWilliamsHeadloss;
  window.HydroCalcScience.pumpHeadPower = pumpHeadPower;
  window.HydroCalcScience.waterVaporPressureBar = waterVaporPressureBar;
  window.HydroCalcScience.npshAvailable = npshAvailable;
  window.HydroCalcScience.chlorineDose = chlorineDose;
  window.HydroCalcScience.reservoirStorage = reservoirStorage;

  if (typeof window.renderCalcPression === 'function') {
    var legacyRenderHW = window.renderCalcPression;
    window.renderCalcPression = function () {
      var out = legacyRenderHW.apply(this, arguments);
      var root = document.getElementById('calc-content');
      if (!root) return out;
      var cInput = document.getElementById('hw-c');
      if (cInput && cInput.closest) {
        var field = cInput.closest('.field');
        var tip = field && field.querySelector('.field-tip');
        if (tip) tip.textContent = '💡 C est un coefficient empirique de projet : choisir une valeur justifiée par le matériau, l’état intérieur, l’âge et le référentiel retenu.';
      }
      var src = root.querySelector('#res-hw .result-src');
      if (src) src.textContent = '📖 Hazen-Williams — relation empirique de pertes de charge en conduite d’eau. Vérifier C et le domaine d’emploi du projet.';
      return out;
    };
  }

  window.calcHWMain = function () {
    var qLs = parseFloat((document.getElementById('hw-q') || {}).value);
    var dMm = parseFloat((document.getElementById('hw-d') || {}).value);
    var c = parseFloat((document.getElementById('hw-c') || {}).value);
    var lengthM = parseFloat((document.getElementById('hw-l') || {}).value);
    var box = document.getElementById('res-hw'), valueEl = document.getElementById('rv-hw'), detailEl = document.getElementById('rd-hw');
    if (!box || !valueEl || !detailEl) return;
    try {
      var r = hazenWilliamsHeadloss(qLs / 1000, dMm / 1000, c, lengthM);
      box.classList.add('show');
      valueEl.textContent = 'hf = ' + r.headlossM.toFixed(2) + ' m · V = ' + r.velocityMs.toFixed(3) + ' m/s';
      detailEl.textContent = 'Q = ' + qLs + ' L/s · D intérieur = ' + dMm + ' mm · C = ' + c + ' · gradient = ' + (r.gradient * 1000).toFixed(3) + ' ‰ · perte de charge = ' + r.headlossM.toFixed(2) + ' m sur ' + lengthM + ' m. La vitesse est un résultat hydraulique à confronter aux critères du projet ; elle ne permet pas à elle seule de conclure sur le risque de coup de bélier.';
      box.style.borderLeftColor = 'var(--c-ok)';
    } catch (err) {
      box.classList.add('show'); box.style.borderLeftColor = 'var(--c-warn)'; valueEl.textContent = 'Valeurs invalides'; detailEl.textContent = 'Le débit, le diamètre intérieur, le coefficient C et la longueur doivent être strictement positifs.';
    }
  };

  if (typeof window.renderCalcaPompeHMT === 'function') {
    var legacyRenderPump = window.renderCalcaPompeHMT;
    window.renderCalcaPompeHMT = function () {
      var out = legacyRenderPump.apply(this, arguments);
      var src = document.querySelector('#res-pm .result-src');
      if (src) src.textContent = '📖 HMT par bilan de charge · puissance hydraulique ρgQH. Le choix final pompe/moteur exige les courbes constructeur au point de fonctionnement.';
      return out;
    };
  }

  window.calcPompeHMT = function () {
    var box = document.getElementById('res-pm'), valueEl = document.getElementById('rv-pm'), detailEl = document.getElementById('rd-pm');
    if (!box || !valueEl || !detailEl) return;
    try {
      var r = pumpHeadPower(parseFloat((document.getElementById('pm-q') || {}).value), parseFloat((document.getElementById('pm-hg') || {}).value), parseFloat((document.getElementById('pm-hf') || {}).value), parseFloat((document.getElementById('pm-hp') || {}).value), parseFloat((document.getElementById('pm-eta') || {}).value) / 100, 1000);
      box.classList.add('show'); box.style.borderLeftColor = 'var(--c-ok)';
      valueEl.textContent = 'HMT = ' + r.hmtM.toFixed(2) + ' m CE · P hydraulique = ' + r.hydraulicPowerKw.toFixed(2) + ' kW';
      detailEl.textContent = 'Puissance absorbée estimée = ' + r.estimatedInputPowerKw.toFixed(2) + ' kW pour η global = ' + (r.efficiency * 100).toFixed(1) + ' %. Pré-dimensionnement uniquement : sélectionner la pompe sur sa courbe Q-H, vérifier le rendement au point de fonctionnement, le NPSH et dimensionner le moteur selon les données constructeur.';
    } catch (err) {
      box.classList.add('show'); box.style.borderLeftColor = 'var(--c-warn)'; valueEl.textContent = 'Valeurs invalides'; detailEl.textContent = 'Vérifier le débit, les hauteurs et le rendement. La HMT résultante doit être positive et 0 < η ≤ 100 %.';
    }
  };

  function addNpshInputs() {
    var tInput = document.getElementById('np-t');
    if (!tInput || document.getElementById('np-patm')) return;
    var field = tInput.closest ? tInput.closest('.field') : null;
    if (!field || !field.parentNode) return;
    var patm = document.createElement('div');
    patm.className = 'field hc-npsh-extra';
    patm.innerHTML = '<label class="field-label">Pression atmosphérique absolue</label><div class="field-hint">Dépend de l’altitude et de la météo. 1,01325 bar = atmosphère standard au niveau de la mer.</div><div class="field-row"><input type="number" id="np-patm" value="1.01325" min="0.5" step="0.001"><span class="field-unit">bar abs</span></div>';
    field.parentNode.insertBefore(patm, field.nextSibling);
    var margin = document.createElement('div');
    margin.className = 'field hc-npsh-extra';
    margin.innerHTML = '<label class="field-label">Marge NPSH de projet</label><div class="field-hint">À définir avec le constructeur et le référentiel du projet ; ne pas utiliser une marge universelle implicite.</div><div class="field-row"><input type="number" id="np-margin" value="1.0" min="0" step="0.1"><span class="field-unit">m</span></div>';
    patm.parentNode.insertBefore(margin, patm.nextSibling);
  }

  if (typeof window.renderCalcaNPSH === 'function') {
    var legacyRenderNpsh = window.renderCalcaNPSH;
    window.renderCalcaNPSH = function () {
      var out = legacyRenderNpsh.apply(this, arguments);
      addNpshInputs();
      var alert = document.querySelector('#calca-content .alert.info');
      if (alert) alert.textContent = 'Comparer le NPSH disponible de l’installation au NPSH requis de la pompe, avec une marge de projet définie avec le constructeur. NPSHr dépend du débit et doit être lu sur la courbe constructeur.';
      var src = document.querySelector('#res-np .result-src');
      if (src) src.textContent = '📖 NPSH installation/pompe : KSB · pression de vapeur de l’eau : NIST Chemistry WebBook.';
      return out;
    };
  }

  window.calcNPSH = function () {
    var box = document.getElementById('res-np'), valueEl = document.getElementById('rv-np'), detailEl = document.getElementById('rd-np');
    if (!box || !valueEl || !detailEl) return;
    try {
      var r = npshAvailable(parseFloat((document.getElementById('np-ha') || {}).value), parseFloat((document.getElementById('np-hfa') || {}).value), parseFloat((document.getElementById('np-t') || {}).value), parseFloat((document.getElementById('np-patm') || {}).value), parseFloat((document.getElementById('np-npsh') || {}).value), parseFloat((document.getElementById('np-margin') || {}).value), 998.2);
      box.classList.add('show'); box.style.borderLeftColor = r.passesDesignMargin ? 'var(--c-ok)' : 'var(--c-danger)';
      valueEl.textContent = 'NPSHa = ' + r.npshAvailableM.toFixed(2) + ' m · marge réelle = ' + r.actualMarginM.toFixed(2) + ' m';
      detailEl.textContent = 'Pv eau = ' + r.vaporPressureBar.toFixed(4) + ' bar · tête atmosphérique = ' + r.atmosphericHeadM.toFixed(2) + ' m · tête vapeur = ' + r.vaporHeadM.toFixed(2) + ' m · NPSHr = ' + r.npshRequiredM.toFixed(2) + ' m · marge de projet = ' + r.requiredMarginM.toFixed(2) + ' m. ' + (r.passesDesignMargin ? 'Critère de marge saisi respecté.' : 'Critère de marge non respecté : augmenter le NPSHa (réduire hauteur/pertes d’aspiration, augmenter pression amont) ou choisir une pompe dont le NPSHr au point de fonctionnement est plus faible.');
    } catch (err) {
      box.classList.add('show'); box.style.borderLeftColor = 'var(--c-warn)'; valueEl.textContent = 'Valeurs invalides'; detailEl.textContent = 'Vérifier les données d’aspiration, la pression atmosphérique absolue, NPSHr et la température de l’eau (0 à 60 °C dans ce moteur).';
    }
  };

  function patchSupplementalAep() {
    var residual = document.getElementById('cl-res');
    if (residual && residual.closest) {
      var rf = residual.closest('.field');
      var rt = rf && rf.querySelector('.field-tip');
      if (rt) rt.textContent = '💡 Cible opérationnelle de projet. Le calcul de dose ne constitue pas à lui seul une validation de désinfection ni une limite réglementaire de chlore libre.';
    }
    var fire = document.getElementById('rv-inc');
    if (fire && fire.closest) {
      var ff = fire.closest('.field');
      var ft = ff && ff.querySelector('.field-tip');
      if (ft) ft.textContent = '💡 Volume à renseigner selon le risque et le RDDECI applicable ; 120 m³ n’est pas un minimum national universel.';
      if (!document.getElementById('rv-sec-h') && ff && ff.parentNode) {
        var sf = document.createElement('div');
        sf.className = 'field hc-reservoir-extra';
        sf.innerHTML = '<label class="field-label">Autonomie / sécurité de projet</label><div class="field-hint">Hypothèse explicite de stockage hors régulation et hors réserve incendie.</div><div class="field-row"><input type="number" id="rv-sec-h" value="8" min="0" step="1"><span class="field-unit">h</span></div>';
        ff.parentNode.insertBefore(sf, ff.nextSibling);
      }
    }
    var clSrc = document.querySelector('#res-cl .result-src');
    if (clSrc) clSrc.textContent = '📖 Bilan massique simplifié de chloration. La conformité sanitaire dépend aussi du procédé, du temps de contact, de la qualité de l’eau et des sous-produits.';
    var rvSrc = document.querySelector('#res-rv .result-src');
    if (rvSrc) rvSrc.textContent = '📖 Pré-dimensionnement de stockage AEP · réserve incendie à définir selon DECI/RDDECI et analyse du risque.';
  }

  if (typeof window.renderCalcSuppl === 'function') {
    var legacyRenderSuppl = window.renderCalcSuppl;
    window.renderCalcSuppl = function () {
      var out = legacyRenderSuppl.apply(this, arguments);
      patchSupplementalAep();
      return out;
    };
  }

  window.calcChlorationSuppl = function () {
    var box = document.getElementById('res-cl'), valueEl = document.getElementById('rv-cl'), detailEl = document.getElementById('rd-cl');
    if (!box || !valueEl || !detailEl) return;
    try {
      var r = chlorineDose(parseFloat((document.getElementById('cl-q') || {}).value), parseFloat((document.getElementById('cl-dem') || {}).value), parseFloat((document.getElementById('cl-res') || {}).value), parseFloat((document.getElementById('cl-c') || {}).value));
      box.classList.add('show'); box.style.borderLeftColor = 'var(--c-ok)';
      valueEl.textContent = 'Dose = ' + r.doseMgL.toFixed(2) + ' mg/L · injection = ' + r.injectionLh.toFixed(3) + ' L/h';
      detailEl.textContent = 'Masse de chlore = ' + r.chlorineMassGh.toFixed(1) + ' g/h = ' + r.chlorineMassKgDay.toFixed(3) + ' kg/j · solution = ' + r.injectionLDay.toFixed(2) + ' L/j. Le résiduel saisi est une cible opérationnelle : vérifier expérimentalement la demande, le temps de contact, le point de prélèvement, les sous-produits et les prescriptions sanitaires applicables.';
    } catch (err) {
      box.classList.add('show'); box.style.borderLeftColor = 'var(--c-warn)'; valueEl.textContent = 'Valeurs invalides'; detailEl.textContent = 'Débit et concentration de solution doivent être positifs ; demande et résiduel doivent être nuls ou positifs.';
    }
  };

  window.calcReservoirSuppl = function () {
    var box = document.getElementById('res-rv'), valueEl = document.getElementById('rv-r'), detailEl = document.getElementById('rd-r');
    if (!box || !valueEl || !detailEl) return;
    try {
      var r = reservoirStorage(parseFloat((document.getElementById('rv-j') || {}).value), parseFloat((document.getElementById('rv-reg') || {}).value), parseFloat((document.getElementById('rv-sec-h') || {}).value), parseFloat((document.getElementById('rv-inc') || {}).value));
      box.classList.add('show'); box.style.borderLeftColor = 'var(--c-ok)';
      valueEl.textContent = 'Stockage opérationnel = ' + r.operationalStorageM3.toFixed(0) + ' m³ · volume total avec incendie = ' + r.totalStructuralVolumeM3.toFixed(0) + ' m³';
      detailEl.textContent = 'Régulation = ' + r.regulationM3.toFixed(0) + ' m³ · autonomie/sécurité = ' + r.securityM3.toFixed(0) + ' m³ · réserve incendie saisie = ' + r.fireReserveM3.toFixed(0) + ' m³. Temps de renouvellement nominal du stockage opérationnel = ' + r.nominalTurnoverOperationalH.toFixed(1) + ' h. Si toute la réserve incendie participe réellement au volume mélangé, le temps théorique devient ' + r.nominalTurnoverIfAllMixedH.toFixed(1) + ' h. Vérifier la configuration hydraulique réelle, les volumes morts et la qualité d’eau.';
    } catch (err) {
      box.classList.add('show'); box.style.borderLeftColor = 'var(--c-warn)'; valueEl.textContent = 'Valeurs invalides'; detailEl.textContent = 'Vérifier demande journalière, tranche de régulation (0–100 %), autonomie et réserve incendie.';
    }
  };
})();