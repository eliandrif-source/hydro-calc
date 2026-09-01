/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — ANC SCIENTIFIC GUARD
   Verified ANC calculations and regulatory interpretation.

   Sources verified 2026-09-01:
   - Arrêté du 7 septembre 2009 modifié, art. 6, 11 and annexe 1.
   - Cerema, Recommandations pour la commande d'études d'infiltrabilité
     des sols: Porchet test, 150 mm bore, 4 h pre-wetting, V10 over 10 min.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_ANC_LOADED__) return;
  window.__HC_SCIENCE_ANC_LOADED__ = true;

  function finitePositive(value) {
    return Number.isFinite(value) && value > 0;
  }

  function patchLegacyANCText(root) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var t = node.nodeValue || '';
      if (/Vidange FTE\s*\/\s*4 ans/i.test(t)) {
        node.nodeValue = t.replace(/Vidange FTE\s*\/\s*4 ans/gi, 'Vidange selon hauteur de boues');
      }
      if (/Tous les 4 ans minimum\s*\(contractuelle\)/i.test(t)) {
        node.nodeValue = t.replace(/Tous les 4 ans minimum\s*\(contractuelle\)/gi, 'Selon hauteur de boues et notice du dispositif');
      }
      if (/Vidange[^·\n]*tous les 4 ans/i.test(t)) {
        node.nodeValue = t.replace(/Vidange[^·\n]*tous les 4 ans/gi, 'Vidange à adapter à la hauteur de boues');
      }
    });
  }

  /* ── Porchet — standard Cerema field protocol ────────────────
     Cerema reports for the standard 150 mm bore:
       pre-wetting: 4 h
       measurement: injected volume V10 during 10 min
       k = 6.79e-5 × V10, with V10 in mm³ and k in mm/h.
     Since 1 L = 1e6 mm³, k [mm/h] = 67.9 × V10 [L]. */
  function porchetFromV10(volumeLitres) {
    var v10 = Number(volumeLitres);
    if (!finitePositive(v10)) throw new RangeError('V10 must be > 0');
    var kMmH = 67.9 * v10;
    return {
      volumeLitres10min: v10,
      permeabilityMmH: kMmH,
      permeabilityMS: kMmH / 3600000,
      protocolBoreDiameterMm: 150,
      protocolPrewetHours: 4,
      protocolMeasureMinutes: 10
    };
  }

  function ancStatus(kMmH) {
    if (window.HydroCalcScience && typeof window.HydroCalcScience.ancPermeabilityStatus === 'function') {
      return window.HydroCalcScience.ancPermeabilityStatus(kMmH);
    }
    return {
      kMmH: kMmH,
      soilTreatmentRange: kMmH >= 15 && kMmH <= 500,
      treatedWaterInfiltrationRange: kMmH >= 10 && kMmH <= 500,
      belowSoilTreatmentRange: kMmH < 15,
      aboveRegulatoryRange: kMmH > 500
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.porchetFromV10 = porchetFromV10;

  /* Replace the legacy falling-head Porchet screen. The old equation was not
     demonstrated to match the reference it cited. This UI implements the
     directly documented Cerema field protocol instead. */
  window.renderCalcPorchet = function () {
    var root = document.getElementById('calc-content');
    if (!root) return;
    root.innerHTML =
      '<div style="padding:var(--s-3) var(--s-4) 0"><div class="card card-p">' +
        '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-3)">💧 Test de Porchet — perméabilité du sol</div>' +
        '<div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Protocole de référence utilisé ici : forage Ø 150 mm, imbibition préalable 4 h, puis mesure du volume d’eau injecté pendant 10 min pour maintenir le niveau. Le résultat caractérise localement le point testé.</span></div>' +
        '<div class="calc-zone">' +
          '<div class="field"><label class="field-label">Volume injecté pendant 10 min (V10)</label><div class="field-hint">Volume nécessaire pour maintenir le niveau d’eau pendant la phase de mesure.</div><div class="field-row"><input type="number" id="po-v10" value="1" step="0.05" min="0.001"><span class="field-unit">L / 10 min</span></div></div>' +
          '<button class="btn btn-primary" onclick="calcPorchet()">Calculer la perméabilité</button>' +
          '<div class="result-box" id="res-po"><div class="result-value" id="rv-po"></div><div class="result-detail" id="rd-po"></div>' +
            '<div class="result-formula">K = 67,9 × V10 &nbsp;·&nbsp; K en mm/h, V10 en L pour le protocole Ø150 mm</div>' +
            '<div class="result-src">📖 Cerema — recommandations pour les études d’infiltrabilité · Arrêté du 7 septembre 2009 modifié, annexe 1</div>' +
          '</div>' +
          '<div id="po-classement" style="display:none"></div>' +
        '</div>' +
      '</div></div>' +
      '<div style="padding:var(--s-2) var(--s-4)"><div class="card card-p">' +
        '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Lecture réglementaire nationale</div>' +
        '<div class="kv-grid">' +
          '<div class="kv-item"><div class="kv-key">Traitement par le sol en place</div><div class="kv-val">15 à 500 mm/h · art. 6</div></div>' +
          '<div class="kv-item"><div class="kv-key">Infiltration d’eaux traitées</div><div class="kv-val">10 à 500 mm/h · art. 11</div></div>' +
        '</div>' +
        '<div style="font-size:10.5px;color:var(--c-text-4);line-height:1.55;margin-top:var(--s-2)">Ces plages ne suffisent pas, à elles seules, à choisir ou dimensionner une filière : profondeur de sol, nappe, pente, surface disponible, étude de sol, règles de l’art et prescriptions locales restent à vérifier.</div>' +
      '</div></div>';
  };

  window.calcPorchet = function () {
    var input = document.getElementById('po-v10');
    var box = document.getElementById('res-po');
    var valueEl = document.getElementById('rv-po');
    var detailEl = document.getElementById('rd-po');
    var statusEl = document.getElementById('po-classement');
    if (!input || !box || !valueEl || !detailEl || !statusEl) return;

    try {
      var result = porchetFromV10(parseFloat(input.value));
      var status = ancStatus(result.permeabilityMmH);
      var text;
      var tone = 'info';
      if (status.aboveRegulatoryRange) {
        text = 'K > 500 mm/h : valeur hors des plages nationales des articles 6 et 11. Une forte perméabilité ne valide pas automatiquement une filière ; vérifier notamment la protection des eaux souterraines.';
        tone = 'warn';
      } else if (status.soilTreatmentRange) {
        text = 'K est dans la plage 15–500 mm/h de l’article 6 pour le traitement par le sol en place, sous réserve de toutes les autres conditions du site.';
        tone = 'ok';
      } else if (status.treatedWaterInfiltrationRange) {
        text = 'K est entre 10 et 15 mm/h : compatible avec la plage d’infiltration d’eaux traitées de l’article 11, mais sous le minimum de 15 mm/h de l’article 6 pour le traitement par le sol en place.';
        tone = 'warn';
      } else {
        text = 'K < 10 mm/h : valeur sous les plages nationales citées pour le traitement par le sol en place et l’infiltration d’eaux traitées. Une solution adaptée doit être étudiée.';
        tone = 'danger';
      }

      box.classList.add('show');
      box.style.borderLeftColor = tone === 'ok' ? 'var(--c-ok)' : tone === 'danger' ? 'var(--c-danger)' : 'var(--c-warn)';
      valueEl.textContent = 'K = ' + result.permeabilityMmH.toFixed(1) + ' mm/h';
      detailEl.textContent = 'V10 = ' + result.volumeLitres10min.toFixed(3) + ' L en 10 min · K = ' + result.permeabilityMmH.toFixed(1) + ' mm/h = ' + result.permeabilityMS.toExponential(3) + ' m/s · protocole : Ø150 mm, imbibition 4 h.';
      statusEl.style.display = 'block';
      statusEl.className = 'alert ' + tone;
      statusEl.textContent = text;
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeur invalide';
      detailEl.textContent = 'Le volume injecté V10 doit être strictement positif.';
      statusEl.style.display = 'none';
    }
  };

  /* The legacy epandage calculator converted K into an assumed hydraulic load
     with an undocumented coefficient, then displayed a precise surface. That
     value is removed until a traceable design reference is implemented. */
  window.calcEpandage = function () {
    var eh = parseInt(((document.getElementById('c-eh') || {}).value), 10);
    var k = parseFloat(((document.getElementById('c-k') || {}).value));
    var box = document.getElementById('res-epandage');
    var valueEl = document.getElementById('rv-ep');
    var detailEl = document.getElementById('rd-ep');
    if (!box || !valueEl || !detailEl) return;

    try {
      if (!Number.isInteger(eh) || eh < 1) throw new RangeError('EH invalid');
      var status = ancStatus(k);
      box.classList.add('show');
      if (status.soilTreatmentRange) {
        box.style.borderLeftColor = 'var(--c-ok)';
        valueEl.textContent = 'Pré-diagnostic : perméabilité dans la plage de l’article 6';
      } else {
        box.style.borderLeftColor = 'var(--c-warn)';
        valueEl.textContent = 'Pré-diagnostic : conditions de l’article 6 non établies';
      }
      detailEl.textContent =
        'Dimensionnement de référence : ' + eh + ' EH · K = ' + k.toFixed(1) + ' mm/h. ' +
        (status.soilTreatmentRange ? 'La perméabilité est comprise entre 15 et 500 mm/h. ' : 'La perméabilité n’est pas dans la plage 15–500 mm/h. ') +
        'La surface et la longueur des tranchées ne sont plus calculées à partir d’un coefficient non sourcé : elles doivent être déterminées à partir de l’étude de sol, des quantités à infiltrer et des règles de l’art applicables.';
    } catch (err) {
      box.classList.add('show');
      box.style.borderLeftColor = 'var(--c-warn)';
      valueEl.textContent = 'Valeurs invalides';
      detailEl.textContent = 'Le nombre d’EH doit être un entier positif et K doit être strictement positif.';
    }
  };

  /* There is a second historical FTE calculation path in utils.js. Keep its
     result consistent with the audited engine when that legacy UI is used. */
  if (typeof window.calcFTE === 'function' && window.HydroCalcScience && typeof window.HydroCalcScience.fteSizing === 'function') {
    window.calcFTE = function () {
      var input = document.getElementById('fte-pp');
      var box = document.getElementById('res-fte');
      var valueEl = document.getElementById('rv-fte');
      var detailEl = document.getElementById('rd-fte');
      if (!input || !box || !valueEl || !detailEl) return;
      try {
        var r = window.HydroCalcScience.fteSizing(parseInt(input.value, 10));
        box.classList.add('show');
        box.style.borderLeftColor = 'var(--c-ok)';
        valueEl.textContent = r.volumeLitres.toLocaleString('fr-FR') + ' L = ' + r.volumeM3.toFixed(1) + ' m³';
        detailEl.textContent = 'Pièces principales : ' + r.mainRooms + ' · Dimensionnement de référence : ' + r.equivalentInhabitants + ' EH · Vidange à adapter à la hauteur de boues ; seuil réglementaire généralement 50 % du volume utile, sous réserve des dispositions propres au dispositif.';
      } catch (err) {
        box.classList.add('show');
        box.style.borderLeftColor = 'var(--c-warn)';
        valueEl.textContent = 'Valeur invalide';
        detailEl.textContent = 'Le nombre de pièces principales doit être un entier positif.';
      }
    };
  }

  var main = document.getElementById('main-content');
  if (main && typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(function () { patchLegacyANCText(main); });
    observer.observe(main, { childList: true, subtree: true });
    patchLegacyANCText(main);
  }
})();