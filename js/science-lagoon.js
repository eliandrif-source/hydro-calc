/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — NATURAL LAGOON SCIENTIFIC CORE
   French classic natural-lagoon pre-sizing from Cemagref/EPNAC references.
   Verified 2026-09-02.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_LAGOON_LOADED__) return;
  window.__HC_SCIENCE_LAGOON_LOADED__ = true;

  function positive(v) { return Number.isFinite(v) && v > 0; }

  /* Classic French natural lagoon: 3 basins in series, total 11 m2/EH,
     distributed 6 + 2.5 + 2.5 m2/EH, approximately 1 m deep.
     This is a technical reference configuration, not a regulatory minimum. */
  function naturalLagoonClassic(eh, depthM) {
    var n = Number(eh);
    var depth = depthM == null ? 1 : Number(depthM);
    if (!positive(n) || !positive(depth)) throw new RangeError('natural lagoon inputs must be > 0');
    var basin1M2 = n * 6;
    var basin2M2 = n * 2.5;
    var basin3M2 = n * 2.5;
    var totalAreaM2 = basin1M2 + basin2M2 + basin3M2;
    return {
      eh: n,
      depthM: depth,
      basin1M2: basin1M2,
      basin2M2: basin2M2,
      basin3M2: basin3M2,
      totalAreaM2: totalAreaM2,
      areaPerEhM2: totalAreaM2 / n,
      totalVolumeM3: totalAreaM2 * depth,
      basinSharesPct: [basin1M2 / totalAreaM2 * 100, basin2M2 / totalAreaM2 * 100, basin3M2 / totalAreaM2 * 100]
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.naturalLagoonClassic = naturalLagoonClassic;

  function patchLagoonScreen() {
    var root = document.getElementById('calc-content');
    if (!root) return;
    var cs = document.getElementById('lag-cs');
    if (cs) {
      var field = cs.closest ? cs.closest('.field') : null;
      if (field) {
        var label = field.querySelector('.field-label');
        var tip = field.querySelector('.field-tip');
        if (label) label.textContent = 'Charge surfacique — variante / lagunage aéré';
        if (tip) tip.textContent = '💡 Cette valeur n’est pas utilisée pour le calcul de la filière naturelle classique, dimensionnée sur 11 m²/EH.';
      }
    }
    var depth = document.getElementById('lag-prof');
    if (depth) {
      var depthField = depth.closest ? depth.closest('.field') : null;
      var dTip = depthField && depthField.querySelector('.field-tip');
      if (dTip) dTip.textContent = '💡 Lagunage naturel classique français : environ 1 m ; adapter au projet et aux contraintes locales.';
    }
    var cards = root.querySelectorAll ? root.querySelectorAll('.card') : [];
    for (var i = 0; i < cards.length; i++) {
      var txt = cards[i].textContent || '';
      if (txt.indexOf('Répartition 3 bassins en série') !== -1) {
        var items = cards[i].querySelectorAll('.kv-item');
        if (items.length >= 3) {
          items[0].querySelector('.kv-val').textContent = '6 m²/EH — bassin principal d’abattement carboné';
          items[1].querySelector('.kv-val').textContent = '2,5 m²/EH';
          items[2].querySelector('.kv-val').textContent = '2,5 m²/EH';
        }
      }
    }
  }

  if (typeof window.renderCalcSTEPLagunage === 'function') {
    var legacyRender = window.renderCalcSTEPLagunage;
    window.renderCalcSTEPLagunage = function () {
      var r = legacyRender.apply(this, arguments);
      patchLagoonScreen();
      return r;
    };
  }

  window.calcSTEPLagunage = function () {
    var typeEl = document.getElementById('lag-type');
    var type = typeEl ? typeEl.value : 'nat';
    var eh = parseFloat((document.getElementById('lag-eh') || {}).value);
    var depth = parseFloat((document.getElementById('lag-prof') || {}).value);
    var box = document.getElementById('res-lag');

    if (type !== 'nat') {
      if (box) {
        box.style.display = 'block';
        box.classList.add('show');
        var vals = document.getElementById('res-lag-vals');
        var note = document.getElementById('res-lag-note');
        var src = document.getElementById('res-lag-src');
        if (vals) vals.innerHTML = '<div style="grid-column:1/-1;background:var(--c-surface-2);border-radius:8px;padding:12px"><div style="font-weight:800;color:var(--c-warn)">Lagunage aéré : modèle en cours d’audit</div><div style="font-size:11px;color:var(--c-text-3);margin-top:5px">HydroCalc ne réutilise plus automatiquement le modèle du lagunage naturel. Le dimensionnement doit intégrer le procédé d’aération, la charge, la température, les besoins en oxygène et le temps de séjour.</div></div>';
        if (note) note.textContent = 'Aucun dimensionnement chiffré n’est présenté tant que le modèle lagunage aéré n’est pas validé.';
        if (src) src.textContent = '📖 Séparation volontaire des modèles naturel et aéré — audit scientifique en cours';
      }
      return;
    }

    try {
      var r = naturalLagoonClassic(eh, depth);
      var pairs = [
        ['Surface totale', r.totalAreaM2.toFixed(0) + ' m² (' + r.areaPerEhM2.toFixed(1) + ' m²/EH)'],
        ['Bassin 1', r.basin1M2.toFixed(0) + ' m² — 6 m²/EH'],
        ['Bassin 2', r.basin2M2.toFixed(0) + ' m² — 2,5 m²/EH'],
        ['Bassin 3', r.basin3M2.toFixed(0) + ' m² — 2,5 m²/EH'],
        ['Répartition', r.basinSharesPct.map(function (x) { return x.toFixed(1) + ' %'; }).join(' · ')],
        ['Volume géométrique', r.totalVolumeM3.toFixed(0) + ' m³ à h = ' + r.depthM.toFixed(2) + ' m']
      ];
      var noteText = 'Configuration technique française classique issue du retour d’expérience Cemagref/EPNAC : trois bassins en série, 6 + 2,5 + 2,5 m²/EH, profondeur voisine de 1 m. Ce ratio est une règle de conception de référence et non un minimum réglementaire national. Vérifier charges réelles, réseau, climat, hydraulique et objectif de rejet.';
      if (typeof window._stepShow === 'function') window._stepShow('res-lag', pairs, noteText, 'Cemagref/SATESE — lagunage naturel, retour d’expérience France · EPNAC/INRAE', '#1a7a4a');
      patchLagoonScreen();
    } catch (err) {
      if (box) box.textContent = 'Valeurs invalides : capacité et profondeur doivent être strictement positives.';
    }
  };

  /* Regression: 500 EH -> 5500 m2 total = 3000 + 1250 + 1250 m2. */
})();