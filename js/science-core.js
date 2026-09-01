/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — SCIENTIFIC CORE
   Small, auditable calculation engines progressively replacing legacy logic.

   Scientific verification: 2026-09-01
   Manning-Strickler reference:
   ASTEE / Cerema, Mémento technique 2017, § IV.2.3, eq. 42.
   Q = K · S · Rh^(2/3) · I^(1/2)
   Rh = wetted area / wetted perimeter.
   For a full circular pipe: S = πD²/4 and Rh = D/4.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_CORE_LOADED__) return;
  window.__HC_SCIENCE_CORE_LOADED__ = true;

  function finitePositive(value) {
    return Number.isFinite(value) && value > 0;
  }

  function manningFullPipe(diameterM, stricklerK, slopeMmPerM) {
    if (!finitePositive(diameterM)) throw new RangeError('diameter must be > 0');
    if (!finitePositive(stricklerK)) throw new RangeError('Strickler K must be > 0');
    if (!finitePositive(slopeMmPerM)) throw new RangeError('slope must be > 0');

    var slope = slopeMmPerM / 1000; // ‰ -> m/m
    var area = Math.PI * diameterM * diameterM / 4;
    var hydraulicRadius = diameterM / 4;
    var velocity = stricklerK * Math.pow(hydraulicRadius, 2 / 3) * Math.sqrt(slope);
    var flowM3s = area * velocity;

    return {
      diameterM: diameterM,
      stricklerK: stricklerK,
      slope: slope,
      areaM2: area,
      hydraulicRadiusM: hydraulicRadius,
      velocityMs: velocity,
      flowM3s: flowM3s,
      flowLs: flowM3s * 1000,
      flowM3h: flowM3s * 3600
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.manningFullPipe = manningFullPipe;

  /* Verified replacement for the legacy UI handler. */
  window.calcManning = function () {
    var diameterMm = parseFloat((document.getElementById('c-dn') || {}).value);
    var stricklerK = parseFloat((document.getElementById('c-ks') || {}).value);
    var slopePermille = parseFloat((document.getElementById('c-ip') || {}).value);
    var box = document.getElementById('res-mann');
    var valueEl = document.getElementById('rv-mn');
    var detailEl = document.getElementById('rd-mn');
    if (!box || !valueEl || !detailEl) return;

    try {
      var result = manningFullPipe(diameterMm / 1000, stricklerK, slopePermille);
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-ok)';
      valueEl.textContent = result.flowLs.toFixed(2) + ' L/s · ' + result.flowM3h.toFixed(1) + ' m³/h';
      detailEl.textContent =
        'D = ' + result.diameterM.toFixed(3) + ' m · ' +
        'I = ' + result.slope.toFixed(5) + ' m/m · ' +
        'A = ' + result.areaM2.toFixed(4) + ' m² · ' +
        'Rh = ' + result.hydraulicRadiusM.toFixed(4) + ' m · ' +
        'V = ' + result.velocityMs.toFixed(3) + ' m/s · ' +
        'Q = ' + result.flowM3s.toFixed(5) + ' m³/s';
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeurs invalides';
      detailEl.textContent = 'Le diamètre, le coefficient de Strickler et la pente doivent être strictement positifs.';
    }
  };

  /* Regression vector (independent hand-check):
     D=300 mm, K=90, I=3‰
     A=0.0706858 m²; Rh=0.075 m; V=0.876686 m/s
     Q=0.0619693 m³/s = 61.9693 L/s = 223.089 m³/h. */
})();