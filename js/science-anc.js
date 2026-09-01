/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — ANC SCIENTIFIC GUARD
   Corrects verified regulatory/reference statements left in legacy screens.
   Does not certify the historical Porchet equation or surface-sizing rules.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_ANC_LOADED__) return;
  window.__HC_SCIENCE_ANC_LOADED__ = true;

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

  /* The legacy Porchet screen cites ISO 22282-4, which is the pumping-test
     part of the geohydraulic series. Do not use ISO 22282-5 as proof of the
     exact historical equation either: it is a general infiltrometer standard. */
  if (typeof window.renderCalcPorchet === 'function') {
    var legacyRenderPorchet = window.renderCalcPorchet;
    window.renderCalcPorchet = function () {
      var result = legacyRenderPorchet.apply(this, arguments);
      var root = document.getElementById('calc-content');
      if (!root) return result;
      var src = root.querySelector('#res-po .result-src');
      if (src) src.textContent = '📖 Arrêté du 7 septembre 2009 modifié, annexe 1 : test de Porchet ou essai de perméabilité/percolation équivalent. Équation HydroCalc : validation normative en cours.';
      var formula = root.querySelector('#res-po .result-formula');
      if (formula) {
        formula.title = 'Équation conservée pour audit. Ne pas l’interpréter comme une formule imposée par NF EN ISO 22282-4.';
      }
      var headings = root.querySelectorAll('div');
      headings.forEach(function (el) {
        if ((el.textContent || '').trim() === '📋 Classement perméabilité — DTU 64.1') {
          el.textContent = '📋 Interprétation de la perméabilité — plages réglementaires à distinguer';
        }
      });
      patchLegacyANCText(root);
      return result;
    };
  }

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

  /* Apply factual corrections to dynamically rendered ANC reference cards.
     MutationObserver is limited to main-content and exact legacy phrases. */
  var main = document.getElementById('main-content');
  if (main && typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(function () { patchLegacyANCText(main); });
    observer.observe(main, { childList: true, subtree: true });
    patchLegacyANCText(main);
  }
})();