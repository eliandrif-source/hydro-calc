/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — AEP SCIENTIFIC CORE
   Audited engines: Hazen-Williams, pump HMT/power, NPSH available.
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

  /* SI Hazen-Williams form used by the historical UI. */
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

  /* Pump pre-sizing. Q in m3/h, heads in metres, efficiency as 0..1.
     HMT = geometric head + total hydraulic losses + required residual head.
     Hydraulic power = rho*g*Q*H. */
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

  /* NIST Chemistry WebBook Antoine parameters for water.
     P in bar, T in kelvin. Valid here from 0 to 60 °C using the two
     Bridgeman/Aldrich coefficient ranges published by NIST. */
  function waterVaporPressureBar(tempC) {
    var tC = Number(tempC);
    if (!Number.isFinite(tC) || tC < 0 || tC > 60) {
      throw new RangeError('water temperature must be between 0 and 60 °C');
    }
    var tK = tC + 273.15;
    var a, b, c;
    if (tK <= 303) {
      a = 5.40221; b = 1838.675; c = -31.737;
    } else {
      a = 5.20389; b = 1733.926; c = -39.485;
    }
    return Math.pow(10, a - b / (tK + c));
  }

  /* Simplified open-tank NPSHa at the pump reference level.
     suctionLiftM is positive when pump is above free surface and negative
     when flooded. Atmospheric pressure is absolute bar. Reservoir velocity
     head is neglected, matching the intended simple HydroCalc use case. */
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

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.hazenWilliamsHeadloss = hazenWilliamsHeadloss;
  window.HydroCalcScience.pumpHeadPower = pumpHeadPower;
  window.HydroCalcScience.waterVaporPressureBar = waterVaporPressureBar;
  window.HydroCalcScience.npshAvailable = npshAvailable;

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
    var box = document.getElementById('res-hw');
    var valueEl = document.getElementById('rv-hw');
    var detailEl = document.getElementById('rd-hw');
    if (!box || !valueEl || !detailEl) return;
    try {
      var r = hazenWilliamsHeadloss(qLs / 1000, dMm / 1000, c, lengthM);
      box.classList.add('show');
      valueEl.textContent = 'hf = ' + r.headlossM.toFixed(2) + ' m · V = ' + r.velocityMs.toFixed(3) + ' m/s';
      detailEl.textContent = 'Q = ' + qLs + ' L/s · D intérieur = ' + dMm + ' mm · C = ' + c
        + ' · gradient = ' + (r.gradient * 1000).toFixed(3) + ' ‰ · perte de charge = '
        + r.headlossM.toFixed(2) + ' m sur ' + lengthM + ' m. '
        + 'La vitesse est un résultat hydraulique à confronter aux critères du projet ; elle ne permet pas à elle seule de conclure sur le risque de coup de bélier.';
      box.style.borderLeftColor = 'var(--c-ok)';
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeurs invalides';
      detailEl.textContent = 'Le débit, le diamètre intérieur, le coefficient C et la longueur doivent être strictement positifs.';
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
    var box = document.getElementById('res-pm');
    var valueEl = document.getElementById('rv-pm');
    var detailEl = document.getElementById('rd-pm');
    if (!box || !valueEl || !detailEl) return;
    try {
      var r = pumpHeadPower(
        parseFloat((document.getElementById('pm-q') || {}).value),
        parseFloat((document.getElementById('pm-hg') || {}).value),
        parseFloat((document.getElementById('pm-hf') || {}).value),
        parseFloat((document.getElementById('pm-hp') || {}).value),
        parseFloat((document.getElementById('pm-eta') || {}).value) / 100,
        1000
      );
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-ok)';
      valueEl.textContent = 'HMT = ' + r.hmtM.toFixed(2) + ' m CE · P hydraulique = ' + r.hydraulicPowerKw.toFixed(2) + ' kW';
      detailEl.textContent = 'Puissance absorbée estimée = ' + r.estimatedInputPowerKw.toFixed(2) + ' kW pour η global = '
        + (r.efficiency * 100).toFixed(1) + ' %. Cette puissance est un pré-dimensionnement : sélectionner la pompe sur sa courbe Q-H, vérifier le rendement au point de fonctionnement, le NPSH et dimensionner ensuite le moteur selon les données constructeur.';
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeurs invalides';
      detailEl.textContent = 'Vérifier le débit, les hauteurs et le rendement. La HMT résultante doit être positive et 0 < η ≤ 100 %.';
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
    var box = document.getElementById('res-np');
    var valueEl = document.getElementById('rv-np');
    var detailEl = document.getElementById('rd-np');
    if (!box || !valueEl || !detailEl) return;
    try {
      var r = npshAvailable(
        parseFloat((document.getElementById('np-ha') || {}).value),
        parseFloat((document.getElementById('np-hfa') || {}).value),
        parseFloat((document.getElementById('np-t') || {}).value),
        parseFloat((document.getElementById('np-patm') || {}).value),
        parseFloat((document.getElementById('np-npsh') || {}).value),
        parseFloat((document.getElementById('np-margin') || {}).value),
        998.2
      );
      box.classList.add('show');
      box.style.borderLeftColor = r.passesDesignMargin ? 'var(--c-ok)' : 'var(--c-danger)';
      valueEl.textContent = 'NPSHa = ' + r.npshAvailableM.toFixed(2) + ' m · marge réelle = ' + r.actualMarginM.toFixed(2) + ' m';
      detailEl.textContent = 'Pv eau = ' + r.vaporPressureBar.toFixed(4) + ' bar · tête atmosphérique = '
        + r.atmosphericHeadM.toFixed(2) + ' m · tête vapeur = ' + r.vaporHeadM.toFixed(2)
        + ' m · NPSHr = ' + r.npshRequiredM.toFixed(2) + ' m · marge de projet = '
        + r.requiredMarginM.toFixed(2) + ' m. ' + (r.passesDesignMargin
          ? 'Critère de marge saisi respecté.'
          : 'Critère de marge non respecté : augmenter le NPSHa (réduire hauteur/pertes d’aspiration, augmenter pression amont) ou choisir une pompe dont le NPSHr au point de fonctionnement est plus faible.');
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeurs invalides';
      detailEl.textContent = 'Vérifier les données d’aspiration, la pression atmosphérique absolue, NPSHr et la température de l’eau (0 à 60 °C dans ce moteur).';
    }
  };
})();