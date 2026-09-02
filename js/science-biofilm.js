/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — FIXED-FILM STEP SCIENCE
   Lit bactérien + biodisques: auditable pre-sizing engines.

   Verification: 2026-09-02
   - NF EN 12255-7: fixed-film biological reactors (current 2026 edition)
   - Cemagref/INRAE: trickling-filter hydraulic load includes recycle flow
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_BIOFILM_LOADED__) return;
  window.__HC_SCIENCE_BIOFILM_LOADED__ = true;

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

  /* Design loads are project inputs, not regulatory constants.
     Organic loading: kg DBO5 / m3 packing / day.
     Hydraulic loading: Qapplied / horizontal footprint, including recycle. */
  function tricklingFilterPreSizing(dbo5KgDay, organicLoadKgM3Day, bedHeightM, designFlowM3Day, recycleRatio) {
    var load = positive(dbo5KgDay, 'DBO5 load');
    var cv = positive(organicLoadKgM3Day, 'organic volumetric load');
    var h = positive(bedHeightM, 'bed height');
    var q = positive(designFlowM3Day, 'design flow');
    var r = nonNegative(recycleRatio, 'recycle ratio');

    var volumeM3 = load / cv;
    var footprintM2 = volumeM3 / h;
    var equivalentDiameterM = Math.sqrt(4 * footprintM2 / Math.PI);
    var appliedFlowM3Day = q * (1 + r);
    var appliedFlowM3Hour = appliedFlowM3Day / 24;
    var hydraulicLoadingMHour = appliedFlowM3Hour / footprintM2;

    return {
      dbo5KgDay: load,
      organicLoadKgM3Day: cv,
      bedHeightM: h,
      designFlowM3Day: q,
      recycleRatio: r,
      volumeM3: volumeM3,
      footprintM2: footprintM2,
      equivalentDiameterM: equivalentDiameterM,
      recycleFlowM3Day: q * r,
      appliedFlowM3Day: appliedFlowM3Day,
      hydraulicLoadingMHour: hydraulicLoadingMHour
    };
  }

  /* Biodisc/RBC pre-sizing by organic surface load. The chosen g DBO5/m2/d
     must come from the selected process/vendor/design reference; EN 12255-7
     provides fixed-film reactor design/performance principles but this bridge
     does not claim one universal mandatory loading value. */
  function biodiscPreSizing(dbo5KgDay, surfaceLoadGm2Day, moduleAreaM2) {
    var loadKg = positive(dbo5KgDay, 'DBO5 load');
    var cs = positive(surfaceLoadGm2Day, 'surface organic load');
    var moduleArea = positive(moduleAreaM2, 'module area');
    var requiredAreaM2 = loadKg * 1000 / cs;
    var modules = Math.ceil(requiredAreaM2 / moduleArea);
    return {
      dbo5KgDay: loadKg,
      surfaceLoadGm2Day: cs,
      moduleAreaM2: moduleArea,
      requiredAreaM2: requiredAreaM2,
      modules: modules,
      installedAreaM2: modules * moduleArea
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.tricklingFilterPreSizing = tricklingFilterPreSizing;
  window.HydroCalcScience.biodiscPreSizing = biodiscPreSizing;

  function addFieldAfter(anchorId, id, label, value, unit, hint) {
    if (document.getElementById(id)) return;
    var anchor = document.getElementById(anchorId);
    if (!anchor || !anchor.closest) return;
    var anchorField = anchor.closest('.field');
    if (!anchorField || !anchorField.parentNode) return;
    var field = document.createElement('div');
    field.className = 'field hc-fixedfilm-field';
    field.innerHTML = '<label class="field-label">' + label + '</label>'
      + '<div class="field-hint">' + hint + '</div>'
      + '<div class="field-row"><input type="number" id="' + id + '" step="any" min="0.001" value="' + value + '"><span class="field-unit">' + unit + '</span></div>';
    anchorField.parentNode.insertBefore(field, anchorField.nextSibling);
  }

  function patchLitRenderer() {
    var root = document.getElementById('calc-content');
    if (!root) return;
    var eh = parseFloat((document.getElementById('lit-eh') || {}).value) || 2000;
    addFieldAfter('lit-eh', 'lit-qj', 'Débit journalier de projet Qj', (eh * 0.25).toFixed(1), 'm³/j',
      'À renseigner avec les données de projet. Le préremplissage 250 L/EH/j conserve seulement l’ancienne hypothèse HydroCalc.');
    var sel = document.getElementById('lit-mat');
    if (sel) {
      var field = sel.closest('.field');
      if (field && !field.querySelector('.hc-lit-warning')) {
        var note = document.createElement('div');
        note.className = 'hc-lit-warning';
        note.style.cssText = 'margin-top:6px;font-size:10.5px;line-height:1.45;color:var(--c-text-4);border-left:2px solid var(--c-warn);padding:6px 8px';
        note.textContent = 'Les charges volumiques associées aux matériaux sont des hypothèses de pré-dimensionnement historiques. Elles doivent être confirmées pour le garnissage, le prétraitement, la température, la recirculation et l’objectif de rejet.';
        field.appendChild(note);
      }
    }
  }

  function patchBiodiscRenderer() {
    var root = document.getElementById('calc-content');
    if (!root) return;
    var cs = document.getElementById('bd-cs');
    if (cs && cs.closest) {
      var field = cs.closest('.field');
      var tip = field && field.querySelector('.field-tip');
      if (tip) tip.textContent = '💡 Hypothèse de conception à choisir selon le procédé, le fournisseur, la température et les objectifs carbone/azote. Ce n’est pas une valeur imposée par NF EN 12255-7.';
    }
    var walker = document.createTreeWalker(root, (typeof NodeFilter !== 'undefined' ? NodeFilter.SHOW_TEXT : 4));
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var t = node.nodeValue || '';
      if (/NF EN 12255-8/.test(t)) node.nodeValue = t.replace(/NF EN 12255-8/g, 'NF EN 12255-7');
      if (/Charge surfacique \(carbone\)/.test(t)) node.nodeValue = t.replace(/Charge surfacique \(carbone\)/g, 'Charge surfacique carbone — valeur de conception');
      if (/Charge surfacique \(azote\)/.test(t)) node.nodeValue = t.replace(/Charge surfacique \(azote\)/g, 'Charge surfacique nitrification — valeur de conception');
    });
  }

  function wrapRenderer(name, patch) {
    var fn = window[name];
    if (typeof fn !== 'function') return;
    window[name] = function () {
      var out = fn.apply(this, arguments);
      patch();
      return out;
    };
  }

  wrapRenderer('renderCalcSTEPLit', patchLitRenderer);
  wrapRenderer('renderCalcSTEPBiodisques', patchBiodiscRenderer);

  window.calcSTEPLit = function () {
    var sel = document.getElementById('lit-mat');
    var eh = parseFloat((document.getElementById('lit-eh') || {}).value);
    var recir = parseFloat((document.getElementById('lit-recir') || {}).value);
    var height = parseFloat((document.getElementById('lit-haut') || {}).value);
    var qj = parseFloat((document.getElementById('lit-qj') || {}).value);
    var cv = sel && sel.options && sel.selectedIndex >= 0 ? parseFloat(sel.options[sel.selectedIndex].getAttribute('data-cv')) : NaN;
    var dboBase = (typeof window._stepGetDBO5Base === 'function') ? Number(window._stepGetDBO5Base()) : 60;
    try {
      var r = tricklingFilterPreSizing(eh * dboBase / 1000, cv, height, qj, recir);
      var pairs = [
        ['Charge DBO₅ de projet', r.dbo5KgDay.toFixed(1) + ' kg/j'],
        ['Volume de garnissage', r.volumeM3.toFixed(0) + ' m³'],
        ['Emprise horizontale', r.footprintM2.toFixed(1) + ' m²'],
        ['Diamètre équivalent', r.equivalentDiameterM.toFixed(2) + ' m'],
        ['Débit de recirculation', r.recycleFlowM3Day.toFixed(1) + ' m³/j'],
        ['Débit appliqué au lit', r.appliedFlowM3Day.toFixed(1) + ' m³/j'],
        ['Charge hydraulique appliquée', r.hydraulicLoadingMHour.toFixed(3) + ' m/h']
      ];
      if (typeof window._stepShow === 'function') window._stepShow('res-lit', pairs,
        'Pré-dimensionnement par charge volumique. La charge hydraulique est calculée sur le débit appliqué au lit, recirculation comprise. Vérifier la distribution hydraulique, le mouillage du support, l’aération, le prétraitement et le clarificateur aval.',
        'NF EN 12255-7 (réacteurs à cultures fixées, édition 2026) · Cemagref/INRAE — conduite hydraulique des lits bactériens', '#6B4226');
      patchLitRenderer();
    } catch (err) {
      var box = document.getElementById('res-lit');
      if (box) { box.style.display = 'block'; box.textContent = 'Valeurs invalides : charge, hauteur, débit de projet et charge volumique doivent être positives ; le taux de recirculation doit être ≥ 0.'; }
    }
  };

  window.calcSTEPBiodisques = function () {
    var eh = parseFloat((document.getElementById('bd-eh') || {}).value);
    var cs = parseFloat((document.getElementById('bd-cs') || {}).value);
    var moduleArea = parseFloat((document.getElementById('bd-surf-mod') || {}).value);
    var dboBase = (typeof window._stepGetDBO5Base === 'function') ? Number(window._stepGetDBO5Base()) : 60;
    try {
      var r = biodiscPreSizing(eh * dboBase / 1000, cs, moduleArea);
      var pairs = [
        ['Charge DBO₅ de projet', r.dbo5KgDay.toFixed(1) + ' kg/j'],
        ['Surface biologique requise', r.requiredAreaM2.toFixed(0) + ' m²'],
        ['Nombre de modules', r.modules + ' module(s)'],
        ['Surface installée', r.installedAreaM2.toFixed(0) + ' m²']
      ];
      if (typeof window._stepShow === 'function') window._stepShow('res-bd', pairs,
        'Pré-dimensionnement par charge organique surfacique saisie. Vérifier le nombre d’étages, la température, la charge du premier étage, la nitrification éventuelle, l’immersion, la vitesse de rotation et la clarification aval selon le procédé retenu.',
        'NF EN 12255-7 (réacteurs à cultures fixées, édition 2026) · guides techniques EPNAC/INRAE', '#5A189A');
      patchBiodiscRenderer();
    } catch (err) {
      var box = document.getElementById('res-bd');
      if (box) { box.style.display = 'block'; box.textContent = 'Valeurs invalides : EH, charge surfacique et surface par module doivent être strictement positifs.'; }
    }
  };
})();