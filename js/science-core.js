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

    var slope = slopeMmPerM / 1000;
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

  /* ── Rational method — peak stormwater flow ──────────────────
     Cerema Hydrouti: rainfall is assumed uniform and constant; peak flow is
     reached when the storm duration equals the catchment concentration time.
     With i in mm/h and A in ha:
       Q [m³/s] = C · i · A / 360
       Q [L/s]  = C · i · A / 0.36
     The method's area/domain limits depend on context; do not present 2 km² as
     a universal regulatory boundary. */
  function rationalPeakFlow(runoffCoefficient, intensityMmH, areaHa) {
    var c = Number(runoffCoefficient);
    var i = Number(intensityMmH);
    var a = Number(areaHa);
    if (!Number.isFinite(c) || c < 0 || c > 1) throw new RangeError('runoff coefficient must be between 0 and 1');
    if (!finitePositive(i)) throw new RangeError('rainfall intensity must be > 0');
    if (!finitePositive(a)) throw new RangeError('catchment area must be > 0');
    var flowM3s = c * i * a / 360;
    return {
      runoffCoefficient: c,
      intensityMmH: i,
      areaHa: a,
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

  /* ── ANC permeability — regulatory interpretation only ───────
     Arrêté 07/09/2009 modifié:
       art. 6: soil-in-place treatment permeability 15..500 mm/h
       art. 11: treated-water infiltration permeability 10..500 mm/h
     These ranges do NOT by themselves select a treatment technology. */
  function ancPermeabilityStatus(kMmH) {
    var k = Number(kMmH);
    if (!finitePositive(k)) throw new RangeError('permeability must be > 0');
    return {
      kMmH: k,
      soilTreatmentRange: k >= 15 && k <= 500,
      treatedWaterInfiltrationRange: k >= 10 && k <= 500,
      belowSoilTreatmentRange: k < 15,
      aboveRegulatoryRange: k > 500
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.manningFullPipe = manningFullPipe;
  window.HydroCalcScience.rationalPeakFlow = rationalPeakFlow;
  window.HydroCalcScience.fteSizing = fteSizing;
  window.HydroCalcScience.ancPermeabilityStatus = ancPermeabilityStatus;

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

  /* Patch the rational-method renderer so displayed units match the verified
     engine. The old /360 expression is m³/s, not L/s. */
  if (typeof window.renderCalcMethodeRat === 'function') {
    var legacyRenderRational = window.renderCalcMethodeRat;
    window.renderCalcMethodeRat = function () {
      var result = legacyRenderRational.apply(this, arguments);
      var root = document.getElementById('calc-content');
      if (!root) return result;
      var alert = root.querySelector('.alert.info span:last-child');
      if (alert) alert.textContent = 'Méthode simplifiée : utiliser une intensité IDF correspondant au temps de concentration du bassin et à la période de retour retenue. Le domaine de validité dépend du contexte et du référentiel de projet.';
      var formula = root.querySelector('#res-mr .result-formula');
      if (formula) formula.textContent = 'Q = C × i × A / 0,36  (L/s) · A en ha · i en mm/h';
      var src = root.querySelector('#res-mr .result-src');
      if (src) src.textContent = '📖 Cerema — Hydrouti · Méthode rationnelle · intensité pour une durée égale au temps de concentration';
      return result;
    };
  }

  window.calcMethodeRatMain = function () {
    var c = parseFloat((document.getElementById('mr-c') || {}).value);
    var a = parseFloat((document.getElementById('mr-a') || {}).value);
    var i = parseFloat((document.getElementById('mr-i') || {}).value);
    var box = document.getElementById('res-mr');
    var valueEl = document.getElementById('rv-mr');
    var detailEl = document.getElementById('rd-mr');
    if (!box || !valueEl || !detailEl) return;
    try {
      var result = rationalPeakFlow(c, i, a);
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-ok)';
      valueEl.textContent = 'Q_pointe = ' + result.flowLs.toFixed(2) + ' L/s = ' + result.flowM3s.toFixed(3) + ' m³/s';
      detailEl.textContent =
        'C = ' + result.runoffCoefficient + ' · i = ' + result.intensityMmH + ' mm/h · A = ' + result.areaHa + ' ha · ' +
        'Q = C × i × A / 360 = ' + result.flowM3s.toFixed(5) + ' m³/s. ' +
        'L’intensité doit être choisie pour une durée égale au temps de concentration.';
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeurs invalides';
      detailEl.textContent = 'C doit être compris entre 0 et 1 ; la surface et l’intensité doivent être strictement positives.';
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

  /* ANC screen: remove the mm/min regulatory confusion. This patch does not
     certify the legacy surface-sizing coefficients; those remain under audit. */
  if (typeof window.renderCalcEpandage === 'function') {
    var legacyRenderEpandage = window.renderCalcEpandage;
    window.renderCalcEpandage = function () {
      var result = legacyRenderEpandage.apply(this, arguments);
      var root = document.getElementById('calc-content');
      if (!root) return result;
      var eh = document.getElementById('c-eh');
      if (eh) {
        var field = eh.closest('.field');
        var hint = field && field.querySelector('.field-hint');
        var tip = field && field.querySelector('.field-tip');
        if (hint) hint.textContent = 'Pour une maison individuelle, le dimensionnement de référence est le nombre de pièces principales, sauf cas particuliers prévus par la réglementation.';
        if (tip) tip.textContent = '💡 Exemple : 5 pièces principales → 5 EH en règle générale.';
      }
      var kInput = document.getElementById('c-k');
      if (kInput) {
        kInput.value = '30';
        kInput.step = '1';
        var kField = kInput.closest('.field');
        var kHint = kField && kField.querySelector('.field-hint');
        var kTip = kField && kField.querySelector('.field-tip');
        var unit = kInput.parentElement && kInput.parentElement.querySelector('.field-unit');
        if (unit) unit.textContent = 'mm/h';
        if (kHint) kHint.textContent = 'Perméabilité mesurée du sol. Les seuils réglementaires nationaux sont exprimés en mm/h.';
        if (kTip) kTip.textContent = '💡 Traitement par le sol en place : 15–500 mm/h (art. 6). Infiltration des eaux traitées : 10–500 mm/h (art. 11).';
      }
      var formula = root.querySelector('#res-epandage .result-formula');
      if (formula) formula.textContent = 'Dimensionnement surfacique : vérifier DTU 64.1, étude de sol et prescriptions du SPANC. Les seuils K seuls ne suffisent pas à choisir une filière.';
      var src = root.querySelector('#res-epandage .result-src');
      if (src) src.textContent = '📖 Arrêté du 7 septembre 2009 modifié — art. 6 et 11 · DTU 64.1 à vérifier selon filière';
      return result;
    };
  }

  /* Keep the Porchet numerical formula for now, but replace the legacy
     technology-prescriptive classification with the verified legal ranges. */
  if (typeof window.calcPorchet === 'function') {
    var legacyCalcPorchet = window.calcPorchet;
    window.calcPorchet = function () {
      var result = legacyCalcPorchet.apply(this, arguments);
      var r = parseFloat((document.getElementById('po-r') || {}).value);
      var h1 = parseFloat((document.getElementById('po-h1') || {}).value);
      var h2 = parseFloat((document.getElementById('po-h2') || {}).value);
      var dt = parseFloat((document.getElementById('po-dt') || {}).value);
      var cl = document.getElementById('po-classement');
      if (!cl || !finitePositive(r) || !finitePositive(dt) || !(h1 > h2) || h2 < 0) return result;
      var kMmH = (r / (2 * dt)) * Math.log((2 * h1 + r) / (2 * h2 + r)) * 60;
      try {
        var status = ancPermeabilityStatus(kMmH);
        var message;
        if (status.aboveRegulatoryRange) {
          message = 'K = ' + kMmH.toFixed(1) + ' mm/h : au-dessus de 500 mm/h. Le sol est hors des plages réglementaires nationales citées aux articles 6 et 11 ; une étude adaptée est nécessaire.';
        } else if (status.soilTreatmentRange) {
          message = 'K = ' + kMmH.toFixed(1) + ' mm/h : dans la plage 15–500 mm/h de l’article 6 pour le traitement par le sol en place, sous réserve des autres conditions du site.';
        } else if (status.treatedWaterInfiltrationRange) {
          message = 'K = ' + kMmH.toFixed(1) + ' mm/h : dans la plage 10–500 mm/h de l’article 11 pour l’infiltration d’eaux traitées, mais sous 15 mm/h pour le traitement par le sol en place de l’article 6.';
        } else {
          message = 'K = ' + kMmH.toFixed(1) + ' mm/h : sous 10 mm/h, donc hors de la plage d’infiltration de l’article 11. Étude et solution adaptées nécessaires.';
        }
        cl.textContent = message;
        cl.style.cssText = 'margin-top:var(--s-2);border-radius:10px;padding:12px 14px;background:var(--c-surface-2);border:1.5px solid var(--c-border);font-size:12px;line-height:1.55;color:var(--c-text-2)';
      } catch (err) {}
      return result;
    };
  }

  /* Regression vectors:
     Manning: D=300 mm, K=90, I=3‰ -> 61.9693 L/s.
     Rational: C=0.6, i=25 mm/h, A=5 ha -> 0.208333 m³/s = 208.333 L/s.
     FTE: 5 PP -> 3 m³; 6 PP -> 4 m³; 8 PP -> 6 m³. */
})();