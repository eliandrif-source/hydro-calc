/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — STEP SCIENTIFIC / REGULATORY GUARD
   Separates regulatory requirements from design assumptions.

   Regulatory verification: Arrêté du 21 juillet 2015 modifié,
   art. 7 and annex 3 (checked 2026-09-02).
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_STEP_LOADED__) return;
  window.__HC_SCIENCE_STEP_LOADED__ = true;

  function finiteNonNegative(v) {
    return Number.isFinite(v) && v >= 0;
  }

  /* Minimum national performances from annex 3 for stations receiving
     CBPO >= 1.2 kg DBO5/day. The regulation applies concentration OR minimum
     removal efficiency, with MES optional in the performance-compliance
     judgement as stated in annex 3. Local/environmental requirements may be
     stricter. */
  function stepMinimumPerformance(cbpoKgDbo5Day) {
    var load = Number(cbpoKgDbo5Day);
    if (!finiteNonNegative(load)) throw new RangeError('CBPO must be >= 0');
    if (load < 1.2) {
      return {
        cbpoKgDbo5Day: load,
        annex3Applies: false,
        note: 'Annex 3 table 6 applies from 1.2 kg/day of DBO5; verify the regulatory regime applicable to the installation.'
      };
    }

    var high = load >= 120;
    return {
      cbpoKgDbo5Day: load,
      annex3Applies: true,
      dbo5: {
        maxMgL: high ? 25 : 35,
        minRemovalPct: high ? 80 : 60,
        redhibitoryMgL: high ? 50 : 70
      },
      dco: {
        maxMgL: high ? 125 : 200,
        minRemovalPct: high ? 75 : 60,
        redhibitoryMgL: high ? 250 : 400
      },
      mes: {
        maxMgL: high ? 35 : null,
        minRemovalPct: high ? 90 : 50,
        redhibitoryMgL: 85,
        optionalForPerformanceCompliance: true
      },
      note: 'National minimums; prefectural, receiving-water or sensitive-zone requirements may be stricter.'
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.stepMinimumPerformance = stepMinimumPerformance;

  function replaceText(root, pattern, replacement) {
    if (!root || typeof document.createTreeWalker !== 'function') return;
    var filter = (typeof NodeFilter !== 'undefined') ? NodeFilter.SHOW_TEXT : 4;
    var walker = document.createTreeWalker(root, filter);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var text = node.nodeValue || '';
      if (pattern.test(text)) node.nodeValue = text.replace(pattern, replacement);
      pattern.lastIndex = 0;
    });
  }

  function addAssumptionBadge(inputId, text) {
    var input = document.getElementById(inputId);
    if (!input) return;
    var field = input.closest ? input.closest('.field') : input.parentNode;
    if (!field || field.querySelector('.hc-step-assumption')) return;
    var note = document.createElement('div');
    note.className = 'hc-step-assumption';
    note.style.cssText = 'margin-top:5px;font-size:10.5px;line-height:1.45;color:var(--c-text-4);background:var(--c-surface-2);border-left:2px solid var(--c-warn);padding:6px 8px;border-radius:6px';
    note.textContent = 'Hypothèse de pré-dimensionnement — ' + text + ' Elle n’est pas une valeur imposée par l’arrêté du 21/07/2015.';
    field.appendChild(note);
  }

  function regulatoryCard() {
    var card = document.createElement('div');
    card.className = 'alert info hc-step-regulatory-card';
    card.style.marginBottom = 'var(--s-3)';
    card.innerHTML = '<span class="alert-icon">📘</span><span><strong>Cadre réglementaire :</strong> l’arrêté du 21 juillet 2015 impose un dimensionnement selon les règles de l’art, adapté à la charge et au débit de référence, avec respect des performances de rejet. Les ratios de charge, TSH, vitesses ascensionnelles ou surfaces affichés ci-dessous sont des hypothèses techniques de pré-dimensionnement sauf mention explicite contraire.</span>';
    return card;
  }

  function performanceCard() {
    var card = document.createElement('div');
    card.className = 'card card-p hc-step-performance-card';
    card.style.marginBottom = 'var(--s-3)';
    card.innerHTML = '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Seuils nationaux de rejet — Annexe 3</div>'
      + '<div style="font-size:11px;line-height:1.65;color:var(--c-text-3)">Pour CBPO ≥ 1,2 kg DBO₅/j :<br>'
      + '• si CBPO &lt; 120 kg/j : DBO₅ 35 mg/L ou 60 % · DCO 200 mg/L ou 60 % · MES 50 % ;<br>'
      + '• si CBPO ≥ 120 kg/j : DBO₅ 25 mg/L ou 80 % · DCO 125 mg/L ou 75 % · MES 35 mg/L ou 90 %.<br>'
      + '<span style="color:var(--c-text-4)">Le milieu récepteur, une zone sensible ou une prescription préfectorale peut imposer plus strict.</span></div>';
    return card;
  }

  function patchStepScreen() {
    var root = document.getElementById('calc-content');
    if (!root) return;

    if (!root.querySelector('.hc-step-regulatory-card')) {
      var firstCard = root.querySelector('.card');
      if (firstCard && firstCard.parentNode) firstCard.parentNode.insertBefore(regulatoryCard(), firstCard);
    }

    replaceText(root, /3 bassins en série recommandés \(DTU 64\.1\)\.?/gi,
      'Configuration de conception à justifier selon les règles de l’art et les objectifs de rejet. Le DTU 64.1 ne constitue pas le référentiel de dimensionnement d’une STEP collective.');
    replaceText(root, /Standard France\s*:\s*60[–-]80 g\/m²\/j \(Arrêté 2015\)/gi,
      'Plage technique de pré-dimensionnement à justifier ; l’arrêté 2015 fixe les performances de rejet, pas cette charge surfacique.');
    replaceText(root, /Arrêté 21\/07\/2015 · Guide FPR IRSTEA 2014 · NF EN 12566-5/gi,
      'Réglementation : arrêté 21/07/2015 (performances) · Conception : guides techniques Irstea/OFB');
    replaceText(root, /Circulaire 12\/05\/1981 · Guide lagunage ASTEE 2005 · DTU 64\.1/gi,
      'Conception : guides techniques de lagunage · Réglementation de rejet : arrêté 21/07/2015');

    /* Ratios currently hard-coded in the legacy engines. Keep them visible but
       clearly qualify them until each design model receives its own full audit. */
    addAssumptionBadge('lag-cs', 'charge surfacique choisie par le concepteur.');
    addAssumptionBadge('lag-prof', 'profondeur de bassin à justifier selon procédé, site et exploitation.');
    addAssumptionBadge('fpr-cs-v', 'charge organique surfacique issue d’un référentiel de conception, à vérifier pour le procédé retenu.');
    addAssumptionBadge('fpr-cs-h', 'charge organique surfacique issue d’un référentiel de conception, à vérifier pour le procédé retenu.');
    addAssumptionBadge('fpr-ch-hyd', 'charge hydraulique de conception à vérifier pour le procédé, le climat et les eaux reçues.');
    addAssumptionBadge('dec-va', 'vitesse ascensionnelle de calcul à confirmer avec le type de décanteur et les conditions de pointe.');
    addAssumptionBadge('dec-prof', 'profondeur utile de pré-dimensionnement à confirmer par la conception de l’ouvrage.');

    if (!root.querySelector('.hc-step-performance-card')) root.appendChild(performanceCard());
  }

  function wrapRenderer(name) {
    var fn = window[name];
    if (typeof fn !== 'function' || fn.__hcStepWrapped) return;
    var wrapped = function () {
      var result = fn.apply(this, arguments);
      patchStepScreen();
      return result;
    };
    wrapped.__hcStepWrapped = true;
    window[name] = wrapped;
  }

  function wrapCalculation(name) {
    var fn = window[name];
    if (typeof fn !== 'function' || fn.__hcStepWrapped) return;
    var wrapped = function () {
      var result = fn.apply(this, arguments);
      patchStepScreen();
      return result;
    };
    wrapped.__hcStepWrapped = true;
    window[name] = wrapped;
  }

  ['renderCalcSTEPHub','renderCalcSTEPBA','renderCalcSTEPLagunage','renderCalcSTEPFPR','renderCalcSTEPLit','renderCalcSTEPBiodisques','renderCalcSTEPDecanteur'].forEach(wrapRenderer);
  ['calcSTEPBA','calcSTEPLagunage','calcSTEPFPR','calcSTEPLit','calcSTEPBiodisques','calcSTEPDecanteur'].forEach(wrapCalculation);

  /* Regression examples for annex 3:
     60 kg DBO5/d -> DBO5 35 mg/L or 60%; DCO 200 mg/L or 60%.
     120 kg DBO5/d -> DBO5 25 mg/L or 80%; DCO 125 mg/L or 75%. */
})();