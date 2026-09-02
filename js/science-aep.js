/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — AEP SCIENTIFIC CORE
   First audited AEP engine: Hazen-Williams headloss.

   Hazen-Williams is an empirical water-pipe relation. C is a design input,
   not a universal material constant. Transient safety is handled separately.
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

  /* SI form used by the legacy UI:
     V = 0.8492 C Rh^0.63 S^0.54
     For a full circular pipe Rh = D/4 and S = hf/L.
     q input is m3/s, D and L in metres. */
  function hazenWilliamsHeadloss(flowM3s, diameterM, coefficientC, lengthM) {
    var q = positive(flowM3s, 'flow');
    var d = positive(diameterM, 'diameter');
    var c = positive(coefficientC, 'Hazen-Williams C');
    var l = positive(lengthM, 'length');
    var areaM2 = Math.PI * d * d / 4;
    var velocityMs = q / areaM2;
    var hydraulicRadiusM = d / 4;
    var gradient = Math.pow(velocityMs / (0.8492 * c * Math.pow(hydraulicRadiusM, 0.63)), 1 / 0.54);
    var headlossM = gradient * l;
    return {
      flowM3s: q,
      diameterM: d,
      coefficientC: c,
      lengthM: l,
      areaM2: areaM2,
      velocityMs: velocityMs,
      hydraulicRadiusM: hydraulicRadiusM,
      gradient: gradient,
      headlossM: headlossM,
      headlossPerKmM: gradient * 1000
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.hazenWilliamsHeadloss = hazenWilliamsHeadloss;

  if (typeof window.renderCalcPression === 'function') {
    var legacyRender = window.renderCalcPression;
    window.renderCalcPression = function () {
      var out = legacyRender.apply(this, arguments);
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
})();