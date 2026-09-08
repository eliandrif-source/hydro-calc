/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — REPORT FORMAT ROUTER
   Keeps ODT/DOCX exports while bypassing the legacy innerHTML preview modal.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_REPORT_FORMAT_FIXES_LOADED__) return;
  window.__HC_REPORT_FORMAT_FIXES_LOADED__ = true;

  var safeHtml = window.generateHTMLReport;
  var safePdf = window.generatePDFReport;

  function toast(msg) { if (typeof window.authToast === 'function') window.authToast(msg); }

  function selected(name) {
    try { return typeof window[name] === 'function' ? (window[name]() || []) : []; }
    catch (e) { return []; }
  }

  function safeFilename(ext) {
    var report = window.HydroCalcReportSecurity;
    var model = report && typeof report.collectModel === 'function' ? report.collectModel() : { title:'Rapport HydroCalc' };
    var base = report && typeof report.pdfText === 'function' ? report.pdfText(model.title || 'Rapport HydroCalc') : String(model.title || 'Rapport HydroCalc');
    base = base.replace(/[^A-Za-z0-9À-ÿ._-]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 80) || 'Rapport_HydroCalc';
    return base + '_' + new Date().toISOString().slice(0, 10) + '.' + ext;
  }

  function builderPromise(builder, arr, formulas, regls) {
    return new Promise(function (resolve, reject) {
      var settled = false;
      var timer = setTimeout(function () {
        if (!settled) { settled = true; reject(new Error('délai de génération dépassé')); }
      }, 30000);
      try {
        builder(arr, formulas, regls, function (blob) {
          if (settled) return;
          settled = true; clearTimeout(timer);
          if (!blob) reject(new Error('fichier vide')); else resolve(blob);
        });
      } catch (e) {
        if (!settled) { settled = true; clearTimeout(timer); reject(e); }
      }
    });
  }

  async function exportOffice(format) {
    var arr = selected('_getSelectedCalcs');
    var formulas = selected('_getSelectedFormulas');
    var regls = selected('_getSelectedRegls');
    if (!arr.length && !formulas.length && !regls.length) { toast('Aucun élément sélectionné à exporter.'); return; }

    var builder = format === 'odt' ? window._buildODTBlob : window._buildDOCXBlob;
    if (typeof builder !== 'function') { toast('Le générateur ' + format.toUpperCase() + ' n’est pas disponible.'); return; }

    toast('Préparation du rapport ' + format.toUpperCase() + '…');
    var blob;
    try { blob = await builderPromise(builder, arr, formulas, regls); }
    catch (err) {
      console.error('HydroCalc ' + format + ' report error', err);
      toast('Impossible de générer le rapport ' + format.toUpperCase() + '.');
      return;
    }

    var pdfFixes = window.HydroCalcReportPdfFixes;
    var quota = pdfFixes && typeof pdfFixes.consumeReportQuota === 'function' ? pdfFixes.consumeReportQuota : null;
    if (typeof quota === 'function' && !(await quota())) return;
    if (typeof quota !== 'function' && window.AUTH && window.AUTH.user && (window.AUTH.user.plan || 'free') === 'free') {
      toast('Les rapports ne sont pas disponibles avec le plan Gratuit.'); return;
    }

    try {
      if (typeof window._download === 'function') window._download(blob, safeFilename(format));
      else {
        var url = URL.createObjectURL(blob), a = document.createElement('a');
        a.href = url; a.download = safeFilename(format); document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }
      toast('Rapport ' + format.toUpperCase() + ' généré ✓');
    } catch (err2) {
      console.error('HydroCalc ' + format + ' download error', err2);
      toast('Le navigateur n’a pas pu enregistrer le rapport ' + format.toUpperCase() + '.');
    }
  }

  window.generateODTReport = function () { return exportOffice('odt'); };
  window.generateWordReport = function () { return exportOffice('docx'); };
  window.generateDOCXReport = function () { return exportOffice('docx'); };
  window.previewReport = function (format) {
    format = String(format || '').toLowerCase();
    if (format === 'html') return safeHtml();
    if (format === 'pdf') return safePdf();
    if (format === 'odt') return exportOffice('odt');
    if (format === 'docx') return exportOffice('docx');
    toast('Format de rapport inconnu.');
  };

  /* Legacy modal downloads are no longer an authority for report generation. */
  window.downloadFromPreview = function () {
    var fmt = String(window._previewFmt || '').toLowerCase();
    return window.previewReport(fmt || 'pdf');
  };

  window.HydroCalcReportFormats = { exportOffice: exportOffice, safeFilename: safeFilename };
})();
