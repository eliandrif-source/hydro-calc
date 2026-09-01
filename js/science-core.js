/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — SCIENTIFIC CORE
   Small, auditable calculation engines progressively replacing legacy logic.

   Scientific verification: 2026-09-01
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_CORE_LOADED__) return;
  window.__HC_SCIENCE_CORE_LOADED__ = true;

  function finitePositive(value) {
    return Number.isFinite(value) && value > 0;
  }

  /* ── Manning-Strickler — full circular pipe ──────────────────
     Reference: ASTEE / Cerema, Mémento technique 2017, § IV.2.3.
     Q = K · S · Rh^(2/3) · I^(1/2)
     For a full circular pipe: S = πD²/4 and Rh = D/4. */
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

  /* ── Fosse toutes eaux ────────────────────────────────────────
     References: Arrêté du 7 septembre 2009 modifié, art. 5 and annex 1.
     Up to 5 main rooms: minimum useful volume = 3 m³.
     Above 5: +1 m³ per additional main room.
     Default ANC sizing in EH = number of main rooms, except special cases that
     require a specific study (ERP or disproportionate occupancy).
     Maintenance: article 15 uses sludge height; no universal 4-year maximum. */
  function fteSizing(mainRooms) {
    var pp = Number(mainRooms);
    if (!Number.isInteger(pp) || pp < 1) throw new RangeError('main rooms must be a positive integer');
    var volumeM3 = pp <= 5 ? 3 : 3 + (pp - 5);
    return {
      mainRooms: pp,
      equivalentInhabitants: pp,
      volumeM3: volumeM3,
      volumeLitres: volumeM3 * 1000
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.manningFullPipe = manningFullPipe;
  window.HydroCalcScience.fteSizing = fteSizing;

  /* Verified replacement for the legacy Manning UI handler. */
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

  /* Patch factual labels produced by the legacy FTE renderer without rewriting
     the full monolithic renderer. */
  if (typeof window.renderCalcFTE === 'function') {
    var legacyRenderCalcFTE = window.renderCalcFTE;
    window.renderCalcFTE = function () {
      var result = legacyRenderCalcFTE.apply(this, arguments);
      var calcContent = document.getElementById('calc-content');
      if (!calcContent) return result;

      var items = calcContent.querySelectorAll('.kv-item');
      items.forEach(function (item) {
        var key = item.querySelector('.kv-key');
        var value = item.querySelector('.kv-val');
        if (!key || !value) return;
        if ((key.textContent || '').indexOf('Vidange légale max.') !== -1) {
          key.textContent = 'Seuil réglementaire de vidange';
          value.textContent = 'Avant dépassement de 50 % du volume utile de boues*';
        }
        if ((key.textContent || '').indexOf('Accumulation boues') !== -1) {
          key.textContent = 'Fréquence de vidange';
          value.textContent = 'À adapter à la hauteur réelle de boues';
        }
      });

      var alerts = calcContent.querySelectorAll('.alert.info');
      alerts.forEach(function (alert) {
        if ((alert.textContent || '').indexOf('fosse septique') !== -1) {
          alert.textContent = 'ℹ La fosse toutes eaux reçoit l’ensemble des eaux usées domestiques. Une fosse septique réservée aux seules eaux-vannes ne relève que de certains cas de réhabilitation prévus par la réglementation.';
        }
      });

      var note = document.createElement('div');
      note.style.cssText = 'padding:0 var(--s-4) var(--s-2);font-size:10.5px;color:var(--c-text-4);line-height:1.5';
      note.textContent = '* Sauf mention contraire prévue pour certains dispositifs agréés. Référence vérifiée : arrêté du 7 septembre 2009 modifié, art. 15.';
      calcContent.appendChild(note);
      return result;
    };
  }

  /* Verified replacement for the legacy FTE result handler. */
  window.calcFTEMain = function () {
    var pp = parseInt((document.getElementById('f-pp') || {}).value, 10);
    var box = document.getElementById('res-fte2');
    var valueEl = document.getElementById('rv-fte2');
    var detailEl = document.getElementById('rd-fte2');
    if (!box || !valueEl || !detailEl) return;

    try {
      var result = fteSizing(pp);
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-ok)';
      valueEl.textContent = result.volumeLitres.toLocaleString('fr-FR') + ' L = ' + result.volumeM3.toFixed(1) + ' m³';
      detailEl.textContent =
        'Pièces principales : ' + result.mainRooms +
        ' · Dimensionnement de référence : ' + result.equivalentInhabitants + ' EH' +
        ' · Volume utile minimal réglementaire : ' + result.volumeM3.toFixed(1) + ' m³' +
        ' · Vidange : à adapter à la hauteur de boues (seuil 50 % du volume utile, sauf disposition particulière).';
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeur invalide';
      detailEl.textContent = 'Le nombre de pièces principales doit être un entier positif.';
    }
  };

  /* Regression vector (independent hand-check):
     Manning: D=300 mm, K=90, I=3‰ -> Q=0.0619693 m³/s,
     V=0.876686 m/s, Q=61.9693 L/s = 223.089 m³/h.
     FTE: 5 PP -> 3 m³; 6 PP -> 4 m³; 8 PP -> 6 m³. */
})();