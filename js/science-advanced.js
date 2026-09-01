/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — ADVANCED SCIENTIFIC CORE
   Audited engines for advanced hydraulic calculators.

   Verification date: 2026-09-01
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_ADVANCED_LOADED__) return;
  window.__HC_SCIENCE_ADVANCED_LOADED__ = true;

  function positive(n, label) {
    n = Number(n);
    if (!Number.isFinite(n) || n <= 0) throw new RangeError(label + ' must be > 0');
    return n;
  }

  /* ── Circular conduit with a free surface ─────────────────────
     Geometry for 0 < y < D:
       theta = 2 acos(1 - 2y/D)
       A = D²/8 (theta - sin theta)
       P = D theta / 2
       Rh = A/P
       T = D sin(theta/2)
       hydraulic depth Dh = A/T
     Manning-Strickler then uses Rh. For Froude in a non-rectangular section,
     the characteristic depth is hydraulic depth A/T, not the vertical y.
  */
  function manningPartialCircular(diameterM, depthM, stricklerK, slopePermille) {
    var D = positive(diameterM, 'diameter');
    var y = positive(depthM, 'depth');
    var K = positive(stricklerK, 'Strickler K');
    var slopePm = positive(slopePermille, 'slope');
    if (y >= D) throw new RangeError('depth must be lower than diameter for free-surface flow');

    var I = slopePm / 1000;
    var theta = 2 * Math.acos(1 - 2 * y / D);
    var area = D * D / 8 * (theta - Math.sin(theta));
    var wettedPerimeter = D * theta / 2;
    var hydraulicRadius = area / wettedPerimeter;
    var topWidth = D * Math.sin(theta / 2);
    var hydraulicDepth = area / topWidth;
    var velocity = K * Math.pow(hydraulicRadius, 2 / 3) * Math.sqrt(I);
    var flowM3s = velocity * area;
    var froude = velocity / Math.sqrt(9.81 * hydraulicDepth);

    return {
      diameterM: D,
      depthM: y,
      relativeDepth: y / D,
      thetaRad: theta,
      thetaDeg: theta * 180 / Math.PI,
      areaM2: area,
      wettedPerimeterM: wettedPerimeter,
      hydraulicRadiusM: hydraulicRadius,
      topWidthM: topWidth,
      hydraulicDepthM: hydraulicDepth,
      slope: I,
      velocityMs: velocity,
      flowM3s: flowM3s,
      flowLs: flowM3s * 1000,
      froude: froude
    };
  }

  /* ── Rapid water hammer / Joukowsky upper bound ───────────────
     USACE EM 1110-3-173:
       Tc = 2L/a
       if complete stopping time tf <= Tc, closure is instantaneous for this
       simplified analysis and maximum theoretical head rise is dH = a*dV/g.
     Joukowsky pressure rise: dP = rho*a*dV.

     Wave speed is an INPUT, not a material constant. It depends on fluid and
     pipe elasticity, diameter/thickness, restraints, etc. Material presets in
     the legacy UI are therefore only indicative starting values.
  */
  function waterHammerJoukowsky(lengthM, velocityChangeMs, waveSpeedMs, staticGaugeBar, closureTimeS) {
    var L = positive(lengthM, 'length');
    var dv = positive(Math.abs(Number(velocityChangeMs)), 'velocity change');
    var a = positive(waveSpeedMs, 'wave speed');
    var p0 = Number(staticGaugeBar);
    var tf = positive(closureTimeS, 'closure time');
    if (!Number.isFinite(p0)) throw new RangeError('static pressure must be finite');

    var rho = 1000;
    var g = 9.81;
    var criticalTimeS = 2 * L / a;
    var rapidClosure = tf <= criticalTimeS;
    var deltaHeadM = a * dv / g;
    var deltaPressurePa = rho * a * dv;
    var deltaPressureBar = deltaPressurePa / 100000;
    var maxGaugeBar = p0 + deltaPressureBar;
    var minGaugeBarTheoretical = p0 - deltaPressureBar;

    return {
      lengthM: L,
      velocityChangeMs: dv,
      waveSpeedMs: a,
      closureTimeS: tf,
      criticalTimeS: criticalTimeS,
      rapidClosure: rapidClosure,
      deltaHeadM: deltaHeadM,
      deltaPressurePa: deltaPressurePa,
      deltaPressureBar: deltaPressureBar,
      staticGaugeBar: p0,
      maxGaugeBar: maxGaugeBar,
      minGaugeBarTheoretical: minGaugeBarTheoretical
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.manningPartialCircular = manningPartialCircular;
  window.HydroCalcScience.waterHammerJoukowsky = waterHammerJoukowsky;

  /* ── UI: partial Manning ───────────────────────────────────── */
  if (typeof window.renderCalcaManning === 'function') {
    var legacyRenderPartial = window.renderCalcaManning;
    window.renderCalcaManning = function () {
      var result = legacyRenderPartial.apply(this, arguments);
      var root = document.getElementById('calca-content');
      if (!root) return result;
      var formula = root.querySelector('#res-mp .result-formula');
      if (formula) formula.textContent = 'θ = 2 arccos(1−2y/D) · A = D²(θ−sinθ)/8 · Rh = A/P · T = D sin(θ/2) · Fr = V/√(g·A/T)';
      var src = root.querySelector('#res-mp .result-src');
      if (src) src.textContent = '📖 Manning-Strickler · géométrie segment circulaire · Froude avec profondeur hydraulique A/T';
      return result;
    };
  }

  window.calcManningPartiel = function () {
    var box = document.getElementById('res-mp');
    var valueEl = document.getElementById('rv-mp');
    var detailEl = document.getElementById('rd-mp');
    if (!box || !valueEl || !detailEl) return;
    try {
      var r = manningPartialCircular(
        parseFloat((document.getElementById('mp-d') || {}).value) / 1000,
        parseFloat((document.getElementById('mp-y') || {}).value) / 1000,
        parseFloat((document.getElementById('mp-k') || {}).value),
        parseFloat((document.getElementById('mp-i') || {}).value)
      );
      box.classList.add('show');
      box.style.borderLeftColor = r.velocityMs >= 0.6 ? 'var(--c-ok)' : 'var(--c-warn)';
      valueEl.textContent = 'Q = ' + r.flowLs.toFixed(2) + ' L/s · V = ' + r.velocityMs.toFixed(3) + ' m/s';
      detailEl.textContent =
        'y/D = ' + (r.relativeDepth * 100).toFixed(1) + ' % · θ = ' + r.thetaDeg.toFixed(1) + '° · ' +
        'A = ' + r.areaM2.toFixed(4) + ' m² · Rh = ' + (r.hydraulicRadiusM * 1000).toFixed(1) + ' mm · ' +
        'T = ' + r.topWidthM.toFixed(3) + ' m · Dh=A/T = ' + r.hydraulicDepthM.toFixed(3) + ' m · ' +
        'Fr = ' + r.froude.toFixed(3) + ' (' + (r.froude < 1 ? 'subcritique/fluvial' : 'supercritique/torrentiel') + '). ' +
        (r.velocityMs >= 0.6 ? 'V ≥ 0,60 m/s.' : 'V < 0,60 m/s : vérifier le risque de dépôts selon le référentiel du projet.');
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeurs invalides';
      detailEl.textContent = 'Pour ce calcul à surface libre : 0 < y < D, K > 0 et pente > 0.';
    }
  };

  /* ── UI: water hammer ──────────────────────────────────────── */
  if (typeof window.renderCalcaBelier === 'function') {
    var legacyRenderBelier = window.renderCalcaBelier;
    window.renderCalcaBelier = function () {
      var result = legacyRenderBelier.apply(this, arguments);
      var root = document.getElementById('calca-content');
      if (!root) return result;

      var info = root.querySelector('.alert.info span:last-child');
      if (info) info.textContent = 'Joukowsky donne la surpression théorique maximale pour un arrêt complet rapide : tf ≤ Tc = 2L/a. Pour une fermeture plus lente ou un réseau complexe, une analyse transitoire est nécessaire.';

      var mat = document.getElementById('cb-mat');
      if (mat) {
        var field = mat.closest('.field');
        var label = field && field.querySelector('.field-label');
        if (label) label.textContent = 'Matériau — préréglage indicatif de célérité';
        var hint = document.createElement('div');
        hint.className = 'field-hint';
        hint.textContent = 'La célérité réelle dépend aussi du diamètre, de l’épaisseur, de l’élasticité de la conduite, du fluide et des conditions d’ancrage.';
        field.appendChild(hint);

        var aField = document.createElement('div');
        aField.className = 'field';
        aField.innerHTML = '<label class="field-label">Célérité retenue a</label><div class="field-row"><input type="number" id="cb-a" value="' + mat.value + '" step="10" min="1"><span class="field-unit">m/s</span></div>';
        field.after(aField);
        mat.addEventListener('change', function () {
          var aInput = document.getElementById('cb-a');
          if (aInput) aInput.value = mat.value;
        });

        var tfField = document.createElement('div');
        tfField.className = 'field';
        tfField.innerHTML = '<label class="field-label">Temps de fermeture / arrêt tf</label><div class="field-hint">À comparer au temps critique Tc = 2L/a.</div><div class="field-row"><input type="number" id="cb-tf" value="1" step="0.1" min="0.01"><span class="field-unit">s</span></div>';
        aField.after(tfField);
      }

      var formula = root.querySelector('#res-cb .result-formula');
      if (formula) formula.textContent = 'Tc = 2L/a · fermeture rapide si tf ≤ Tc · ΔHmax = a·ΔV/g · ΔPmax = ρ·a·ΔV';
      var src = root.querySelector('#res-cb .result-src');
      if (src) src.textContent = '📖 Joukowsky · USACE EM 1110-3-173, §5-5 — analyse simplifiée du coup de bélier';
      return result;
    };
  }

  window.calcCoupBelier = function () {
    var box = document.getElementById('res-cb');
    var valueEl = document.getElementById('rv-cb');
    var detailEl = document.getElementById('rd-cb');
    if (!box || !valueEl || !detailEl) return;
    try {
      var speedEl = document.getElementById('cb-a');
      var matEl = document.getElementById('cb-mat');
      var r = waterHammerJoukowsky(
        parseFloat((document.getElementById('cb-l') || {}).value),
        parseFloat((document.getElementById('cb-v') || {}).value),
        parseFloat(speedEl ? speedEl.value : (matEl || {}).value),
        parseFloat((document.getElementById('cb-ps') || {}).value),
        parseFloat((document.getElementById('cb-tf') || { value: 0.01 }).value)
      );
      box.classList.add('show');
      box.style.borderLeftColor = r.rapidClosure ? 'var(--c-warn)' : 'var(--c-primary)';
      valueEl.textContent = 'ΔP Joukowsky = ' + r.deltaPressureBar.toFixed(2) + ' bar · Tc = ' + r.criticalTimeS.toFixed(2) + ' s';

      var regime = r.rapidClosure
        ? 'Fermeture rapide : tf ≤ Tc, le maximum théorique de Joukowsky est applicable à cet arrêt complet simplifié.'
        : 'Fermeture lente : tf > Tc. La valeur de Joukowsky ci-dessus est une borne théorique, pas la surpression calculée du transitoire réel.';
      var depression = r.minGaugeBarTheoretical < 0
        ? ' La dépression théorique passe sous 0 bar manométrique : vérifier cavitation/séparation de colonne avec un modèle transitoire.'
        : '';

      detailEl.textContent =
        'a = ' + r.waveSpeedMs.toFixed(0) + ' m/s · tf = ' + r.closureTimeS.toFixed(2) + ' s · Tc = 2L/a = ' + r.criticalTimeS.toFixed(2) + ' s · ' +
        'ΔHmax = ' + r.deltaHeadM.toFixed(1) + ' mCE · ΔPmax = ' + r.deltaPressureBar.toFixed(2) + ' bar · ' +
        'Pmax théorique = ' + r.maxGaugeBar.toFixed(2) + ' bar(g) · Pmin symétrique théorique = ' + r.minGaugeBarTheoretical.toFixed(2) + ' bar(g). ' +
        regime + depression + ' Ne pas déduire automatiquement une classe PN de ce calcul simplifié.';
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeurs invalides';
      detailEl.textContent = 'L, ΔV, a et tf doivent être strictement positifs ; la pression statique doit être numérique.';
    }
  };
})();