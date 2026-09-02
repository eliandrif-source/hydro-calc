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
  function finitePositive(v) {
    return Number.isFinite(v) && v > 0;
  }

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
      dbo5: { maxMgL: high ? 25 : 35, minRemovalPct: high ? 80 : 60, redhibitoryMgL: high ? 50 : 70 },
      dco: { maxMgL: high ? 125 : 200, minRemovalPct: high ? 75 : 60, redhibitoryMgL: high ? 250 : 400 },
      mes: {
        maxMgL: high ? 35 : null,
        minRemovalPct: high ? 90 : 50,
        redhibitoryMgL: 85,
        optionalForPerformanceCompliance: true
      },
      note: 'National minimums; prefectural, receiving-water or sensitive-zone requirements may be stricter.'
    };
  }

  function fprPrefeasibility(eh, dbo5GPerEhDay, verticalOrganicLoadGm2Day, designFlowM3Day, verticalHydraulicLoadMDay, horizontalOrganicLoadGm2Day) {
    var n = Number(eh), dbo = Number(dbo5GPerEhDay), csv = Number(verticalOrganicLoadGm2Day);
    var qj = Number(designFlowM3Day), ch = Number(verticalHydraulicLoadMDay), csh = Number(horizontalOrganicLoadGm2Day);
    if (!finitePositive(n) || !finitePositive(dbo) || !finitePositive(csv) || !finitePositive(qj) || !finitePositive(ch)) {
      throw new RangeError('FPR inputs must be > 0');
    }
    var dbo5GDay = n * dbo;
    var verticalAreaOrganicM2 = dbo5GDay / csv;
    var verticalAreaHydraulicM2 = qj / ch;
    var verticalAreaM2 = Math.max(verticalAreaOrganicM2, verticalAreaHydraulicM2);
    var out = {
      eh: n,
      dbo5GDay: dbo5GDay,
      designFlowM3Day: qj,
      verticalAreaOrganicM2: verticalAreaOrganicM2,
      verticalAreaHydraulicM2: verticalAreaHydraulicM2,
      verticalAreaM2: verticalAreaM2,
      firstStageCasings: 3,
      verticalAreaPerCasingM2: verticalAreaM2 / 3
    };
    if (finitePositive(csh)) out.horizontalAreaM2 = dbo5GDay / csh;
    return out;
  }

  /* Activated-sludge pre-sizing. Cm, MVS, surface overflow rate and sludge
     yield are explicit DESIGN INPUTS. The 2015 order does not prescribe these
     values. Clarifier surface is based on the actual design peak flow, not Qj/24. */
  function activatedSludgePrefeasibility(eh, dbo5GPerEhDay, massLoadingKgDbo5KgMvsDay, mvsKgM3, designFlowM3Day, peakFlowM3H, clarifierOverflowRateMH, sludgeYieldKgMsKgDbo5, extractedSludgeKgMsM3) {
    var n = Number(eh), dbo = Number(dbo5GPerEhDay), cm = Number(massLoadingKgDbo5KgMvsDay);
    var mvs = Number(mvsKgM3), qj = Number(designFlowM3Day), qp = Number(peakFlowM3H);
    var va = Number(clarifierOverflowRateMH), y = Number(sludgeYieldKgMsKgDbo5), csludge = Number(extractedSludgeKgMsM3);
    if (![n, dbo, cm, mvs, qj, qp, va, y, csludge].every(finitePositive)) throw new RangeError('activated sludge inputs must be > 0');

    var dbo5KgDay = n * dbo / 1000;
    var biomassMvsKg = dbo5KgDay / cm;
    var aerationVolumeM3 = biomassMvsKg / mvs;
    var avgFlowM3H = qj / 24;
    var hydraulicRetentionTimeH = aerationVolumeM3 / avgFlowM3H;
    var clarifierAreaM2 = qp / va;
    var clarifierDiameterM = Math.sqrt(4 * clarifierAreaM2 / Math.PI);
    var sludgeProductionKgMsDay = dbo5KgDay * y;
    var extractedSludgeM3Day = sludgeProductionKgMsDay / csludge;

    return {
      dbo5KgDay: dbo5KgDay,
      biomassMvsKg: biomassMvsKg,
      aerationVolumeM3: aerationVolumeM3,
      avgFlowM3H: avgFlowM3H,
      peakFlowM3H: qp,
      hydraulicRetentionTimeH: hydraulicRetentionTimeH,
      clarifierOverflowRateMH: va,
      clarifierAreaM2: clarifierAreaM2,
      clarifierDiameterM: clarifierDiameterM,
      sludgeProductionKgMsDay: sludgeProductionKgMsDay,
      extractedSludgeM3Day: extractedSludgeM3Day
    };
  }

  function clarifierHydraulicSizing(meanFlowM3H, peakFlowM3H, designOverflowRateMH, depthM) {
    var qm = Number(meanFlowM3H), qp = Number(peakFlowM3H), va = Number(designOverflowRateMH), depth = Number(depthM);
    if (![qm, qp, va, depth].every(finitePositive)) throw new RangeError('clarifier inputs must be > 0');
    var areaM2 = qp / va;
    var diameterM = Math.sqrt(4 * areaM2 / Math.PI);
    var volumeM3 = areaM2 * depth;
    return {
      meanFlowM3H: qm,
      peakFlowM3H: qp,
      designOverflowRateMH: va,
      areaM2: areaM2,
      diameterM: diameterM,
      volumeM3: volumeM3,
      detentionAtMeanH: volumeM3 / qm,
      detentionAtPeakH: volumeM3 / qp
    };
  }

  window.HydroCalcScience = window.HydroCalcScience || {};
  window.HydroCalcScience.stepMinimumPerformance = stepMinimumPerformance;
  window.HydroCalcScience.fprPrefeasibility = fprPrefeasibility;
  window.HydroCalcScience.activatedSludgePrefeasibility = activatedSludgePrefeasibility;
  window.HydroCalcScience.clarifierHydraulicSizing = clarifierHydraulicSizing;

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

  function insertNumericFieldAfter(anchorId, id, label, value, unit, hint) {
    if (document.getElementById(id)) return;
    var anchor = document.getElementById(anchorId);
    if (!anchor) return;
    var anchorField = anchor.closest ? anchor.closest('.field') : null;
    if (!anchorField || !anchorField.parentNode) return;
    var field = document.createElement('div');
    field.className = 'field';
    field.innerHTML = '<label class="field-label">' + label + '</label>'
      + '<div class="field-hint">' + hint + '</div>'
      + '<div class="field-row"><input type="number" id="' + id + '" min="0.0001" step="any" value="' + value + '"><span class="field-unit">' + unit + '</span></div>';
    anchorField.parentNode.insertBefore(field, anchorField.nextSibling);
  }

  function addFprDesignFlowInput() {
    var ehInput = document.getElementById('fpr-eh');
    if (!ehInput || document.getElementById('fpr-qj')) return;
    var eh = parseFloat(ehInput.value);
    insertNumericFieldAfter('fpr-eh', 'fpr-qj', 'Débit journalier de projet Qj', finitePositive(eh) ? (eh * 0.25).toFixed(1) : '50', 'm³/j', 'À renseigner à partir des données de projet. Le préremplissage conserve seulement l’ancienne hypothèse HydroCalc de 250 L/EH/j.');
  }

  function addBaInputs() {
    var qj = document.getElementById('ba-qj');
    if (!qj) return;
    var qjVal = parseFloat(qj.value);
    insertNumericFieldAfter('ba-qj', 'ba-qp', 'Débit horaire de pointe de projet', finitePositive(qjVal) ? (qjVal / 24).toFixed(1) : '52.1', 'm³/h', 'Renseigner le véritable débit de pointe hydraulique. Le préremplissage est seulement Qj/24 et ne constitue donc pas une pointe.');
    insertNumericFieldAfter('ba-qp', 'ba-yield', 'Coefficient de production de boues', '0.80', 'kg MS/kg DBO₅', 'Hypothèse de calcul à adapter au procédé, à l’âge des boues, à la température et aux performances recherchées.');
    insertNumericFieldAfter('ba-yield', 'ba-sludge-c', 'Concentration des boues extraites', '30', 'kg MS/m³', '30 kg MS/m³ correspond à 3 % de matières sèches ; valeur de projet à adapter.');
  }

  function patchDboSelector() {
    var sel = document.getElementById('step-mode-dbo');
    if (!sel || sel.__hcPatched) return;
    sel.__hcPatched = true;
    if (sel.options && sel.options[0]) sel.options[0].textContent = '📐 Référence EH — 60 g DBO₅/EH/j (définition de l’équivalent-habitant)';
    if (sel.options && sel.options[1]) sel.options[1].textContent = '🧪 Hypothèse de projet — 70 g DBO₅/EH/j (marge à justifier)';
    var parent = sel.parentNode;
    if (parent) {
      var texts = parent.querySelectorAll ? parent.querySelectorAll('div') : [];
      for (var i = 0; i < texts.length; i++) {
        if ((texts[i].textContent || '').indexOf('Le mode recommandé') !== -1) {
          texts[i].textContent = '60 g DBO₅/j définit 1 EH ; une charge de projet supérieure peut être retenue si elle est justifiée par les données et marges de conception.';
        }
      }
    }
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

    patchDboSelector();
    addFprDesignFlowInput();
    addBaInputs();

    replaceText(root, /3 bassins en série recommandés \(DTU 64\.1\)\.?/gi,
      'Configuration de conception à justifier selon les règles de l’art et les objectifs de rejet. Le DTU 64.1 ne constitue pas le référentiel de dimensionnement d’une STEP collective.');
    replaceText(root, /Standard France\s*:\s*60[–-]80 g\/m²\/j \(Arrêté 2015\)/gi,
      'Plage technique de pré-dimensionnement à justifier ; l’arrêté 2015 fixe les performances de rejet, pas cette charge surfacique.');
    replaceText(root, /Arrêté 21\/07\/2015 · Guide FPR IRSTEA 2014 · NF EN 12566-5/gi,
      'Réglementation : arrêté 21/07/2015 (performances) · Conception : guides techniques Irstea/OFB/EPNAC');
    replaceText(root, /Circulaire 12\/05\/1981 · Guide lagunage ASTEE 2005 · DTU 64\.1/gi,
      'Conception : guides techniques de lagunage · Réglementation de rejet : arrêté 21/07/2015');
    replaceText(root, /2 unités FPR vertical en alternance/gi,
      '3 casiers FPR vertical au premier étage en alternance (configuration classique tempérée)');
    replaceText(root, /Repos minimum 3 jours \/ unité/gi,
      'Rotation 2×/semaine : env. 3,5 j alimenté puis 7 j au repos au 1er étage');
    replaceText(root, /\(2 unités alternées\)/gi, '(3 casiers alternés)');
    replaceText(root, /Combiné V1 \+ H2 \(filière complète\)/gi, 'Variante V1 + filtre horizontal H2');
    replaceText(root, /Valeurs de va de référence \(NF EN 12255\)/gi, 'Ordres de grandeur de pré-dimensionnement — à valider pour le projet');
    replaceText(root, /Clarificateur\s*:\s*va\s*≤\s*1,5 m\/h en pointe\.?/gi, 'Clarificateur : vérifier Qp/S avec la décantabilité et la concentration réelles des boues.');

    addAssumptionBadge('ba-mvs', 'concentration MVS de calcul à confirmer par le procédé et le mode d’exploitation.');
    addAssumptionBadge('ba-va', 'charge hydraulique superficielle de conception ; à confronter notamment à l’indice de boue et à la concentration en MES.');
    addAssumptionBadge('ba-qj', 'débit moyen journalier de projet.');
    addAssumptionBadge('lag-cs', 'charge surfacique choisie par le concepteur.');
    addAssumptionBadge('lag-prof', 'profondeur de bassin à justifier selon procédé, site et exploitation.');
    addAssumptionBadge('fpr-cs-v', 'charge organique surfacique issue d’un référentiel de conception, à vérifier pour le procédé retenu.');
    addAssumptionBadge('fpr-cs-h', 'charge organique surfacique issue d’un référentiel de conception, à vérifier pour le procédé retenu.');
    addAssumptionBadge('fpr-ch-hyd', 'charge hydraulique de conception à vérifier pour le procédé, le climat et les eaux reçues.');
    addAssumptionBadge('dec-va', 'charge hydraulique superficielle de calcul. Pour un clarificateur de boues activées, vérifier aussi décantabilité/indice de boue et concentration en MES.');
    addAssumptionBadge('dec-prof', 'profondeur utile de pré-dimensionnement à confirmer par la conception de l’ouvrage.');

    if (!root.querySelector('.hc-step-performance-card')) root.appendChild(performanceCard());
  }

  function wrapRenderer(name) {
    var fn = window[name];
    if (typeof fn !== 'function' || fn.__hcStepWrapped) return;
    var wrapped = function () { var result = fn.apply(this, arguments); patchStepScreen(); return result; };
    wrapped.__hcStepWrapped = true;
    window[name] = wrapped;
  }

  function wrapCalculation(name) {
    var fn = window[name];
    if (typeof fn !== 'function' || fn.__hcStepWrapped) return;
    var wrapped = function () { var result = fn.apply(this, arguments); patchStepScreen(); return result; };
    wrapped.__hcStepWrapped = true;
    window[name] = wrapped;
  }

  ['renderCalcSTEPHub','renderCalcSTEPBA','renderCalcSTEPLagunage','renderCalcSTEPFPR','renderCalcSTEPLit','renderCalcSTEPBiodisques','renderCalcSTEPDecanteur'].forEach(wrapRenderer);
  ['calcSTEPLagunage','calcSTEPLit','calcSTEPBiodisques'].forEach(wrapCalculation);

  window.calcSTEPFPR = function () {
    var eh = parseFloat((document.getElementById('fpr-eh') || {}).value);
    var csv = parseFloat((document.getElementById('fpr-cs-v') || {}).value);
    var csh = parseFloat((document.getElementById('fpr-cs-h') || {}).value);
    var ch = parseFloat((document.getElementById('fpr-ch-hyd') || {}).value);
    var qj = parseFloat((document.getElementById('fpr-qj') || {}).value);
    var typeEl = document.getElementById('fpr-type');
    var type = typeEl ? typeEl.value : 'v1';
    var dboBase = (typeof window._stepGetDBO5Base === 'function') ? Number(window._stepGetDBO5Base()) : 60;
    try {
      var r = fprPrefeasibility(eh, dboBase, csv, qj, ch, csh);
      var pairs = [['Charge DBO₅/j', (r.dbo5GDay / 1000).toFixed(2) + ' kg/j'], ['Débit journalier de projet', r.designFlowM3Day.toFixed(1) + ' m³/j']];
      if (type !== 'h2') {
        pairs.push(['Surface V1 — critère organique', r.verticalAreaOrganicM2.toFixed(0) + ' m²']);
        pairs.push(['Surface V1 — critère hydraulique', r.verticalAreaHydraulicM2.toFixed(0) + ' m²']);
        pairs.push(['Surface V1 retenue', r.verticalAreaM2.toFixed(0) + ' m²']);
        pairs.push(['Surface / casier V1', r.verticalAreaPerCasingM2.toFixed(0) + ' m² × 3 casiers']);
      }
      if (type !== 'v1' && finitePositive(r.horizontalAreaM2)) pairs.push(['Surface filtre horizontal H2', r.horizontalAreaM2.toFixed(0) + ' m²']);
      var note = 'Premier étage classique tempéré : 3 casiers en parallèle, un alimenté et deux au repos ; rotation environ 2 fois par semaine. Les surfaces restent un pré-dimensionnement fondé sur les charges saisies. Le débit Qj doit provenir du projet et non d’un ratio EH implicite.';
      if (type === 'v1h2') note += ' L’association V1 + filtre horizontal est une variante ; elle ne doit pas être confondue avec la filière française classique à deux étages verticaux.';
      if (typeof window._stepShow === 'function') window._stepShow('res-fpr', pairs, note, 'Conception/exploitation : EPNAC · INRAE/OFB · Réglementation de rejet : arrêté 21/07/2015', '#5C8A1C');
      patchStepScreen();
    } catch (err) {
      var boxErr = document.getElementById('res-fpr');
      if (boxErr) boxErr.textContent = 'Valeurs invalides : EH, charges de calcul, débit journalier et charge hydraulique doivent être strictement positifs.';
    }
  };

  window.calcSTEPBA = function () {
    var sel = document.getElementById('ba-regime');
    var opt = sel ? sel.options[sel.selectedIndex] : null;
    var cm = opt && opt.value !== 'custom' ? parseFloat(opt.getAttribute('data-cm')) : parseFloat((document.getElementById('ba-cm-custom') || {}).value);
    var eh = parseFloat((document.getElementById('ba-eh') || {}).value);
    var mvs = parseFloat((document.getElementById('ba-mvs') || {}).value);
    var va = parseFloat((document.getElementById('ba-va') || {}).value);
    var qj = parseFloat((document.getElementById('ba-qj') || {}).value);
    var qp = parseFloat((document.getElementById('ba-qp') || {}).value);
    var yieldCoeff = parseFloat((document.getElementById('ba-yield') || {}).value);
    var sludgeC = parseFloat((document.getElementById('ba-sludge-c') || {}).value);
    var dboBase = (typeof window._stepGetDBO5Base === 'function') ? Number(window._stepGetDBO5Base()) : 60;
    try {
      var r = activatedSludgePrefeasibility(eh, dboBase, cm, mvs, qj, qp, va, yieldCoeff, sludgeC);
      var pairs = [
        ['Charge DBO₅ de projet', r.dbo5KgDay.toFixed(1) + ' kg/j'],
        ['Masse MVS calculée', r.biomassMvsKg.toFixed(0) + ' kg MVS'],
        ['Volume bassin aération', r.aerationVolumeM3.toFixed(0) + ' m³'],
        ['TSH à Q moyen', r.hydraulicRetentionTimeH.toFixed(1) + ' h'],
        ['Débit horaire moyen', r.avgFlowM3H.toFixed(1) + ' m³/h'],
        ['Débit horaire de pointe', r.peakFlowM3H.toFixed(1) + ' m³/h'],
        ['Surface clarificateur (Qp/va)', r.clarifierAreaM2.toFixed(1) + ' m²'],
        ['Diamètre équivalent circulaire', r.clarifierDiameterM.toFixed(2) + ' m'],
        ['Production boues — hypothèse', r.sludgeProductionKgMsDay.toFixed(1) + ' kg MS/j'],
        ['Boues extraites — hypothèse', r.extractedSludgeM3Day.toFixed(2) + ' m³/j']
      ];
      var note = 'Pré-dimensionnement : Cm, MVS, va, rendement de production de boues et concentration des boues extraites sont des hypothèses de projet. La surface du clarificateur est calculée sur le débit de pointe saisi. Pour un clarificateur de boues activées, la vérification finale doit aussi intégrer la décantabilité (indice de boue), la concentration en MES et la charge de solides.';
      if (typeof window._stepShow === 'function') window._stepShow('res-ba', pairs, note, 'INRAE/Cemagref — paramètres de dimensionnement des clarificateurs · NF EN 12255 · Arrêté 21/07/2015 pour performances de rejet', '#1a5276');
      patchStepScreen();
    } catch (err) {
      var box = document.getElementById('res-ba');
      if (box) box.textContent = 'Valeurs invalides : tous les paramètres de pré-dimensionnement doivent être strictement positifs.';
    }
  };

  window.calcSTEPDecanteur = function () {
    var qm = parseFloat((document.getElementById('dec-qh') || {}).value);
    var qp = parseFloat((document.getElementById('dec-qp') || {}).value);
    var va = parseFloat((document.getElementById('dec-va') || {}).value);
    var depth = parseFloat((document.getElementById('dec-prof') || {}).value);
    try {
      var r = clarifierHydraulicSizing(qm, qp, va, depth);
      var pairs = [
        ['Surface hydraulique retenue (Qp/va)', r.areaM2.toFixed(1) + ' m²'],
        ['Diamètre équivalent circulaire', r.diameterM.toFixed(2) + ' m'],
        ['Volume utile géométrique', r.volumeM3.toFixed(0) + ' m³'],
        ['TSH à Q moyen', r.detentionAtMeanH.toFixed(2) + ' h'],
        ['TSH à Q pointe', r.detentionAtPeakH.toFixed(2) + ' h'],
        ['Vitesse ascensionnelle de calcul', r.designOverflowRateMH.toFixed(2) + ' m/h']
      ];
      var note = 'Le dimensionnement hydraulique Qp/va est un premier contrôle. Pour un clarificateur secondaire de boues activées, la validation finale doit intégrer la concentration en MES, l’indice de boue/décantabilité, la charge de solides, le recyclage et les conditions de pointe. Les valeurs de va affichées dans le sélecteur sont des ordres de grandeur, pas des limites réglementaires.';
      if (typeof window._stepShow === 'function') window._stepShow('res-dec', pairs, note, 'INRAE/Cemagref — clarificateurs : Va = Qe/S et dépendance à la qualité/concentration des boues · NF EN 12255-4', '#0A5090');
      patchStepScreen();
    } catch (err) {
      var box = document.getElementById('res-dec');
      if (box) box.textContent = 'Valeurs invalides : débits, vitesse ascensionnelle et profondeur doivent être strictement positifs.';
    }
  };

  /* Regression examples:
     Annex 3: 60 kg DBO5/d -> DBO5 35 mg/L or 60%; 120 -> 25 mg/L or 80%.
     FPR: 200 EH, 60 g/EH/d, 70 g/m2/d, Qj 50 m3/d, 0.15 m/d -> retained 333.33 m2, 111.11 m2/casing.
     Activated sludge: 5000 EH, 60 g/EH/d, Cm=0.15, MVS=3.5 kg/m3, Qj=1250 m3/d, Qp=100 m3/h, va=1.0 -> V=571.43 m3, clarifier=100 m2.
     Clarifier: Qm=60, Qp=120 m3/h, va=1.2 m/h -> area=100 m2. */
})();