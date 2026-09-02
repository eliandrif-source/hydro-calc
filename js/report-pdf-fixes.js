/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — REPORT/PDF RUNTIME FIXES
   Loaded after report-security.js.

   - Build the PDF successfully before consuming the server quota.
   - Normalize user logos to PNG/JPEG and bounded dimensions/size.
   - Route all legacy preview/PDF entry points through the safe renderer.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_REPORT_PDF_FIXES_LOADED__) return;
  window.__HC_REPORT_PDF_FIXES_LOADED__ = true;

  function toast(msg) {
    if (typeof window.authToast === 'function') window.authToast(msg);
  }

  function reportFilename(model) {
    var helper = window.HydroCalcReportSecurity;
    var title = helper && helper.pdfText ? helper.pdfText(model.title || 'Rapport HydroCalc') : String(model.title || 'Rapport HydroCalc');
    title = title.replace(/[^A-Za-z0-9À-ÿ._-]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 80) || 'Rapport_HydroCalc';
    return title + '_' + new Date().toISOString().slice(0, 10) + '.pdf';
  }

  async function consumeReportQuota() {
    if (!window.AUTH || !AUTH.user) { toast('Connectez-vous pour générer un rapport.'); return false; }
    if (typeof window.hcConsumeUsage === 'function') {
      try {
        var usage = await window.hcConsumeUsage('report_weekly');
        if (!usage || usage.allowed === false) {
          toast('Quota de rapports atteint pour votre abonnement.');
          return false;
        }
        return true;
      } catch (e) {
        toast('Impossible de vérifier le quota de rapport. Réessayez.');
        return false;
      }
    }
    if ((AUTH.user.plan || 'free') === 'free') {
      toast('Les rapports ne sont pas disponibles avec le plan Gratuit.');
      return false;
    }
    return true;
  }

  async function safePdfExport() {
    var H = window.HydroCalcReportSecurity;
    if (!H || typeof H.collectModel !== 'function' || typeof H.buildPdf !== 'function') {
      toast('Le moteur PDF sécurisé n’est pas chargé.');
      return;
    }
    var model = H.collectModel();
    if (!model || !(model.calculations.length || model.formulas.length || model.regulations.length)) {
      toast('Aucun élément sélectionné à exporter.');
      return;
    }

    /* Rendering first prevents a broken browser/jsPDF/logo from burning quota. */
    var doc;
    try {
      doc = H.buildPdf(model);
      if (!doc || typeof doc.save !== 'function') throw new Error('document PDF invalide');
    } catch (err) {
      console.error('HydroCalc PDF preflight error', err);
      toast('Le PDF n’a pas pu être préparé : ' + String((err && err.message) || 'erreur de rendu').slice(0, 120));
      return;
    }

    if (!(await consumeReportQuota())) return;
    try {
      doc.save(reportFilename(model));
      toast('Rapport PDF généré ✓');
    } catch (err) {
      console.error('HydroCalc PDF save error', err);
      toast('Le navigateur n’a pas pu enregistrer le PDF.');
    }
  }

  function normalizedLogoData(file, done) {
    if (!file || !/^image\/(png|jpeg)$/i.test(file.type || '')) {
      done(new Error('Choisissez un fichier PNG ou JPEG.'));
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      done(new Error('Le logo doit faire moins de 2 Mo.'));
      return;
    }
    var reader = new FileReader();
    reader.onerror = function () { done(new Error('Impossible de lire le logo.')); };
    reader.onload = function (ev) {
      var img = new Image();
      img.onerror = function () { done(new Error('Image invalide.')); };
      img.onload = function () {
        var maxW = 1200, maxH = 500;
        var scale = Math.min(1, maxW / img.naturalWidth, maxH / img.naturalHeight);
        var w = Math.max(1, Math.round(img.naturalWidth * scale));
        var h = Math.max(1, Math.round(img.naturalHeight * scale));
        var canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        var ctx = canvas.getContext('2d');
        if (!ctx) { done(new Error('Canvas indisponible.')); return; }
        ctx.drawImage(img, 0, 0, w, h);
        var mime = /^image\/png$/i.test(file.type) ? 'image/png' : 'image/jpeg';
        var data;
        try { data = canvas.toDataURL(mime, mime === 'image/jpeg' ? 0.9 : undefined); }
        catch (e) { done(new Error('Impossible de normaliser le logo.')); return; }
        if (data.length > 3 * 1024 * 1024) {
          /* JPEG fallback limits PDF memory usage for unusually complex PNGs. */
          try { data = canvas.toDataURL('image/jpeg', 0.86); } catch (e2) {}
        }
        if (data.length > 3 * 1024 * 1024) { done(new Error('Logo encore trop lourd après optimisation.')); return; }
        done(null, data);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  window.uploadUserLogo = function () {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/png,image/jpeg';
    input.onchange = function (ev) {
      var file = ev.target.files && ev.target.files[0];
      if (!file) return;
      normalizedLogoData(file, function (err, data) {
        if (err) { toast(err.message); return; }
        try {
          if (!window.DataStore || !DataStore.userLogo || typeof DataStore.userLogo.set !== 'function') throw new Error('stockage indisponible');
          DataStore.userLogo.set(data);
          toast('Logo optimisé et enregistré ✓');
          if (typeof window._refreshCurrentView === 'function') window._refreshCurrentView();
        } catch (e) { toast('Impossible d’enregistrer le logo.'); }
      });
    };
    input.click();
  };

  window.generatePDFReport = safePdfExport;
  window._doGeneratePDFReport = safePdfExport;
  var safeHtml = window.generateHTMLReport;
  window.previewReport = function (format) {
    return String(format || '').toLowerCase() === 'html' ? safeHtml() : safePdfExport();
  };

  window.HydroCalcReportPdfFixes = {
    consumeReportQuota: consumeReportQuota,
    normalizedLogoData: normalizedLogoData,
    reportFilename: reportFilename
  };
})();
