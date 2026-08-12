/* ═══════════════════════════════════════════════════
   SAUVEGARDE DES CALCULS
═══════════════════════════════════════════════════ */
function getSavedCalcs() {
  if (!AUTH.user) return [];
  return DataStore.calcs.get(AUTH.user.email);
}
function setSavedCalcs(arr) {
  if (!AUTH.user) return;
  DataStore.calcs.set(AUTH.user.email, arr);
}

function saveCurrentCalc() {
  if (!AUTH.user) { authToast('Connectez-vous pour enregistrer'); return; }
  var boxes = document.querySelectorAll('.result-box.show');
  if (!boxes.length) { authToast('Aucun calcul à enregistrer'); return; }
  var box = boxes[boxes.length - 1];
  var val = box.querySelector('.result-value');
  var det = box.querySelector('.result-detail');
  var titleEl = document.getElementById('top-title');
  var inputs = {};
  var mc = document.getElementById('main-content');
  if (mc) {
    mc.querySelectorAll('input[id], select[id]').forEach(function(el) {
      var label = '';
      var fieldEl = el.closest('.field');
      if (fieldEl) { var lbl = fieldEl.querySelector('.field-label'); if (lbl) label = lbl.textContent.trim(); }
      inputs[el.id] = { label: label || el.id, value: el.value, unit: (el.nextElementSibling && el.nextElementSibling.classList.contains('field-unit')) ? el.nextElementSibling.textContent.trim() : '' };
    });
  }
  var calc = {
    module: titleEl ? titleEl.textContent : 'Calcul',
    valeur: val ? val.textContent : '',
    detail: det ? det.innerHTML : '',
    inputs: inputs,
    moduleId: typeof currentModule !== 'undefined' ? (currentModule || '') : '',
    calcId:   typeof currentCalcId !== 'undefined' ? (currentCalcId || '') : '',
    date: Date.now()
  };
  if (!calc.valeur) { authToast('Aucun résultat à enregistrer'); return; }
  var arr = getSavedCalcs();
  arr.unshift(calc);
  if (arr.length > 50) arr = arr.slice(0, 50);
  setSavedCalcs(arr);
  authToast('Calcul enregistré ✓');
}

// Affiche/masque le bouton flottant selon qu'un résultat est visible
function updateFabSave() {
  var fab = document.getElementById('fab-save');
  if (!fab) return;
  var visible = AUTH.user && document.querySelector('.result-box.show');
  fab.classList.toggle('show', !!visible);
}

// Surveiller l'apparition des résultats
setInterval(updateFabSave, 600);

/* ─── NETTOYAGE HTML → TEXTE BRUT ─── */
function _htmlToText(html) {
  return (html || '')
    .replace(/<br\s*\/?>/gi, ' | ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

/* ─── FORMULES PERSONNALISÉES ─── */
function getSavedFormulas() {
  return DataStore.formulas.get(AUTH.user ? AUTH.user.email : 'guest');
}
function setSavedFormulas(arr) {
  DataStore.formulas.set(AUTH.user ? AUTH.user.email : 'guest', arr);
}
function addFormula() {
  var nom    = (document.getElementById('formula-nom')    || {}).value || '';
  var expr   = (document.getElementById('formula-expr')   || {}).value || '';
  var result = (document.getElementById('formula-result') || {}).value || '';
  var ref    = (document.getElementById('formula-ref')    || {}).value || '';
  if (!nom.trim() || !expr.trim()) { authToast('Indiquez au moins un nom et une formule.'); return; }
  var arr = getSavedFormulas();
  var vars = window._pendingFormulaVars || [];
  window._pendingFormulaVars = [];
  arr.unshift({ nom: nom.trim(), expr: expr.trim(), result: result.trim(), ref: ref.trim(), vars: vars, date: Date.now() });
  setSavedFormulas(arr);
  authToast('Formule enregistrée ✓');
  _refreshCurrentView();
}
function deleteFormula(i) {
  var arr = getSavedFormulas(); arr.splice(i,1); setSavedFormulas(arr); _refreshCurrentView();
}

/* ─── TEXTES RÉGLEMENTAIRES PERSONNALISÉS ─── */
function getSavedRegls() {
  return DataStore.regulations.get(AUTH.user ? AUTH.user.email : 'guest');
}
function setSavedRegls(arr) {
  DataStore.regulations.set(AUTH.user ? AUTH.user.email : 'guest', arr);
}
function addRegl() {
  var nom   = (document.getElementById('regl-nom')   || {}).value || '';
  var ref   = (document.getElementById('regl-ref')   || {}).value || '';
  var texte = (document.getElementById('regl-texte') || {}).value || '';
  if (!nom.trim()) { authToast('Indiquez au moins un nom.'); return; }
  var arr = getSavedRegls();
  arr.unshift({ nom: nom.trim(), ref: ref.trim(), texte: texte.trim(), date: Date.now() });
  setSavedRegls(arr);
  authToast('Texte réglementaire enregistré ✓');
  _refreshCurrentView();
}
function deleteRegl(i) {
  var arr = getSavedRegls(); arr.splice(i,1); setSavedRegls(arr); _refreshCurrentView();
}

/* ─── SÉLECTION POUR RAPPORT ─── */
function _getSelectedCalcs() {
  var arr = getSavedCalcs();
  var selected = [];
  arr.forEach(function(c, i) {
    var cb = document.getElementById('chk-calc-' + i);
    if (cb && cb.checked) selected.push(c);
  });
  if (!selected.length) return arr; /* si rien coché → tout prendre */
  return selected;
}
function _getSelectedFormulas() {
  var arr = getSavedFormulas();
  var selected = [];
  arr.forEach(function(f, i) {
    var cb = document.getElementById('chk-form-' + i);
    if (cb && cb.checked) selected.push(f);
  });
  return selected;
}
function _getSelectedRegls() {
  var arr = getSavedRegls();
  var selected = [];
  arr.forEach(function(r, i) {
    var cb = document.getElementById('chk-regl-' + i);
    if (cb && cb.checked) selected.push(r);
  });
  return selected;
}

/* ─── QUOTA RAPPORT ─── */
function _canGenerateReport() {
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  if (plan === 'free') return { ok: false, reason: 'Les rapports ne sont pas disponibles avec le plan Gratuit.' };
  if (plan === 'admin' || plan === 'etab') return { ok: true };
  if (plan === 'pro') {
    var weekStart = new Date(); weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    var weekKey = weekStart.toISOString().slice(0,10);
    var quota = DataStore.reportQuota.get() || { week: weekKey, count: 0 };
    if (quota.week !== weekKey) quota = { week: weekKey, count: 0 };
    if (quota.count >= 1) return { ok: false, reason: 'Rapport de la semaine déjà généré. Revenez lundi ou passez au plan Établissement.' };
    return { ok: true };
  }
  return { ok: false, reason: 'Plan non reconnu.' };
}

function _incrementReportQuota() {
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  if (plan !== 'pro') return;
  var weekStart = new Date(); weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  var weekKey = weekStart.toISOString().slice(0,10);
  var quota = DataStore.reportQuota.get() || { week: weekKey, count: 0 };
  if (quota.week !== weekKey) quota = { week: weekKey, count: 0 };
  quota.count++;
  DataStore.reportQuota.set(quota);
}

/* ─── UPLOAD LOGO UTILISATEUR ─── */
function uploadUserLogo() {
  var input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = function(e) {
    var file = e.target.files[0]; if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      DataStore.userLogo.set(ev.target.result);
      authToast('Logo enregistré ✓');
      _refreshCurrentView();
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function removeUserLogo() {
  DataStore.userLogo.remove();
  authToast('Logo supprimé');
  _refreshCurrentView();
}

/* ─── TÉLÉCHARGEMENT GÉNÉRIQUE ─── */
function _download(blob, filename) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
}

function _reportDate() { return new Date().toISOString().slice(0,10); }

function _reportHeader() {
  var userName = AUTH.user ? (AUTH.user.name || AUTH.user.email || '') : '';
  var dateStr  = new Date().toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric' });
  var projectTitle = '';
  if (_hcProjectView) {
    var _projs = getSavedProjects();
    var _p = _projs.find(function(x){ return x.id === _hcProjectView; });
    if (_p) projectTitle = (_p.icon ? _p.icon + ' ' : '') + _p.name;
  }
  return { userName: userName, dateStr: dateStr, projectTitle: projectTitle };
}

/* ─── FORMAT HTML ─── */
function generateHTMLReport() {
  var check = _canGenerateReport();
  if (!check.ok) { authToast(check.reason); setTimeout(openSidebar, 800); return; }
  var arr = _getSelectedCalcs();
  var formulas = _getSelectedFormulas();
  if (!arr.length && !formulas.length) { authToast('Aucun élément sélectionné à exporter.'); return; }

  var h = _reportHeader();
  var userLogo = DataStore.userLogo.get();
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var logoHtml = (userLogo && plan !== 'free')
    ? '<img src="' + userLogo + '" style="height:56px;object-fit:contain">'
    : '<div style="font-size:26px;font-weight:900;color:#0A7460;letter-spacing:-1px;font-family:Georgia,serif">HydroCalc</div><div style="font-size:10px;color:#7ECABB;letter-spacing:2px;text-transform:uppercase;margin-top:2px">Application hydraulique</div>';

  var calcsHtml = arr.map(function(c, i) {
    var d = new Date(c.date);
    var dateStr = d.toLocaleDateString('fr-FR') + ' à ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});

    if (c.type === 'outil' && c.outil) {
      var o = c.outil;
      var tColors = {ok:'#166038', warn:'#886000', danger:'#A82018'};
      var tBg     = {ok:'#EAF8F0', warn:'#FDF0D8', danger:'#FDECEA'};
      var interpHtml = o.interpretation.map(function(r) {
        return '<tr style="border-bottom:1px solid var(--c-border)">'
          + '<td style="padding:5px 8px;font-size:10px;font-family:\'Courier New\',monospace;color:' + (tColors[r.t]||'var(--c-text)') + ';background:' + (tBg[r.t]||'var(--c-surface-2)') + '">' + r.val + '</td>'
          + '<td style="padding:5px 8px;font-size:10px;font-weight:700;color:' + (tColors[r.t]||'var(--c-text)') + '">' + r.label + '</td>'
          + '<td style="padding:5px 8px;font-size:10px;color:var(--c-text-2)">' + r.action + '</td>'
          + '</tr>';
      }).join('');
      return '<div style="margin-bottom:16px;border:1px solid var(--c-border);border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(10,80,90,.08)">'
        + '<div style="background:linear-gradient(135deg,#0A5090,#0A3060);padding:10px 16px;display:flex;justify-content:space-between;align-items:center">'
          + '<div style="display:flex;align-items:center;gap:8px">'
            + '<span style="font-size:18px">' + o.ico + '</span>'
            + '<span style="color:#fff;font-size:13px;font-weight:800">' + o.name + '</span>'
            + '<span style="background:rgba(255,255,255,.2);color:#fff;font-size:9px;font-weight:700;padding:2px 8px;border-radius:20px">' + o.cat + '</span>'
          + '</div>'
          + '<span style="font-size:10px;color:rgba(255,255,255,.65)">' + dateStr + '</span>'
        + '</div>'
        + '<div style="padding:14px 16px;background:var(--c-surface)">'
          + '<div style="font-size:11px;color:var(--c-text-2);line-height:1.7;margin-bottom:10px;padding:8px 12px;background:var(--c-surface-2);border-radius:6px;border-left:3px solid #0A5090">' + o.usage + '</div>'
          + '<div style="font-size:10px;font-weight:800;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Principe</div>'
          + '<div style="font-size:11px;color:var(--c-text-2);line-height:1.6;margin-bottom:12px">' + o.principe + '</div>'
          + '<div style="font-size:10px;font-weight:800;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Protocole terrain</div>'
          + '<ol style="margin:0 0 12px 16px;padding:0;font-size:11px;color:var(--c-text-2);line-height:1.7">'
            + o.protocole.map(function(p) { return '<li style="margin-bottom:3px">' + p + '</li>'; }).join('')
          + '</ol>'
          + '<div style="font-size:10px;font-weight:800;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Interprétation</div>'
          + '<table style="width:100%;border-collapse:collapse;font-size:10px;margin-bottom:12px;border:1px solid var(--c-border);border-radius:6px;overflow:hidden">'
            + '<thead><tr style="background:var(--c-surface-2)">'
              + '<th style="padding:5px 8px;text-align:left;font-size:9px;color:var(--c-text-3)">Valeur mesurée</th>'
              + '<th style="padding:5px 8px;text-align:left;font-size:9px;color:var(--c-text-3)">Diagnostic</th>'
              + '<th style="padding:5px 8px;text-align:left;font-size:9px;color:var(--c-text-3)">Action</th>'
            + '</tr></thead>'
            + '<tbody>' + interpHtml + '</tbody>'
          + '</table>'
          + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:10px">'
            + '<div style="background:var(--c-surface-2);border-radius:6px;padding:8px"><div style="font-weight:800;color:var(--c-text-3);margin-bottom:3px">Matériel</div>' + o.materiel + '</div>'
            + '<div style="background:var(--c-warn-l,#FEF0E2);border-radius:6px;padding:8px"><div style="font-weight:800;color:var(--c-danger);margin-bottom:3px">⚠ Précautions</div>' + o.precautions + '</div>'
          + '</div>'
          + '<div style="margin-top:8px;font-size:10px;color:var(--c-text-3);font-style:italic">📖 ' + o.norme + '</div>'
        + '</div>'
      + '</div>';
    }

    /* Calcul classique */
    var detail = (c.detail||'').replace(/<br\s*\/?>/gi,'<br>').replace(/<(?!br)[^>]+>/g,'');
    return '<div style="margin-bottom:16px;border:1px solid #DEE8E4;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(10,116,96,.06)">'
      + '<div style="background:linear-gradient(135deg,#0A7460,#0A5040);padding:10px 16px;display:flex;justify-content:space-between;align-items:center">'
      + '<div style="display:flex;align-items:center;gap:8px">'
      + '<span style="background:rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:3px 10px;border-radius:20px">' + c.module + '</span>'
      + '</div>'
      + '<span style="font-size:10px;color:rgba(255,255,255,.7)">' + dateStr + '</span></div>'
      + '<div style="padding:14px 16px;background:var(--c-surface)">'
      + '<div style="font-size:20px;font-weight:800;color:var(--c-primary);margin-bottom:8px;font-family:Georgia,serif">' + (c.valeur||'') + '</div>'
      + (detail ? '<div style="font-size:12px;color:var(--c-text-2);line-height:1.8;padding:10px 12px;background:var(--c-surface-2);border-radius:8px;border-left:3px solid var(--c-primary)">' + detail + '</div>' : '')
      + '</div></div>';
  }).join('');

  var css = 'body{font-family:Arial,sans-serif;max-width:820px;margin:0 auto;padding:32px 24px;color:#141C18;background:#F3F6F4}'
    + '.page{background:#fff;border-radius:16px;padding:32px;box-shadow:0 4px 24px rgba(0,0,0,.08)}'
    + '.header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:20px;margin-bottom:28px;border-bottom:2px solid #E0F4F0}'
    + '.user-block{text-align:right}'
    + '.user-name{font-size:16px;font-weight:800;color:#141C18}'
    + '.user-date{font-size:11px;color:#617068;margin-top:3px}'
    + '.user-project{font-size:12px;font-weight:700;color:#0A7460;margin-top:4px;padding-top:4px;border-top:1px solid #E0F4F0}'
    + '.section-title{font-size:13px;font-weight:800;color:#617068;text-transform:uppercase;letter-spacing:.08em;margin-bottom:16px}'
    + '.footer{margin-top:28px;padding-top:16px;border-top:1px solid #DEE8E4;text-align:center;font-size:10px;color:#8A9890}'
    + '@media print{body{background:#fff;padding:0}.page{box-shadow:none;border-radius:0}}';

  var formulasHtml = formulas.map(function(f) {
    return '<div style="margin-bottom:12px;border:1px solid #DEE8E4;border-radius:10px;overflow:hidden">'
      + '<div style="background:#E6EEF8;padding:8px 14px"><span style="font-weight:800;font-size:11px;color:#1550A0">📐 ' + f.nom + '</span></div>'
      + '<div style="padding:10px 14px">'
      + '<div style="font-family:\'Courier New\',monospace;font-size:13px;color:#1550A0;background:#EEF3FC;padding:6px 10px;border-radius:6px;margin-bottom:6px">' + f.expr + '</div>'
      + (f.result ? '<div style="font-size:13px;font-weight:700;color:#166038">= ' + f.result + '</div>' : '')
      + '</div></div>';
  }).join('');

  var html = '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">'
    + '<title>Rapport HydroCalc — ' + h.dateStr + '</title>'
    + '<style>' + css + '</style></head><body><div class="page">'
    + '<div class="header">'
    + '<div>' + logoHtml + '</div>'
    + '<div class="user-block">'
    + '<div class="user-name">' + h.userName + '</div>'
    + '<div class="user-date">' + h.dateStr + '</div>'
    + (h.projectTitle ? '<div class="user-project">' + h.projectTitle + '</div>' : '')
    + '</div></div>'
    + (arr.length ? '<div class="section-title">📊 Calculs sélectionnés (' + arr.length + ')</div>' + calcsHtml : '')
    + (formulas.length ? '<div class="section-title" style="margin-top:20px">📐 Formules sélectionnées (' + formulas.length + ')</div>' + formulasHtml : '')
    + '<div class="footer">HydroCalc · hydrocalc.fr · Rapport généré le ' + new Date().toLocaleString('fr-FR') + '</div>'
    + '</div></body></html>';

  _download(new Blob([html], {type:'text/html;charset=utf-8'}), 'HydroCalc_rapport_' + _reportDate() + '.html');
  _incrementReportQuota();
  authToast('Rapport HTML téléchargé ✓');
}

/* ─── FORMAT PDF (jsPDF) ─── */
function generatePDFReport() {
  previewReport('pdf');
}

function _doGeneratePDFReport() {
  var check = _canGenerateReport();
  if (!check.ok) { authToast(check.reason); setTimeout(openSidebar, 800); return; }

  var arr      = _getSelectedCalcs();
  var formulas = _getSelectedFormulas();
  var regls    = _getSelectedRegls ? _getSelectedRegls() : [];
  if (!arr.length && !formulas.length) { authToast('Aucun élément sélectionné à exporter.'); return; }

  if (!window.jspdf) { authToast('Bibliothèque PDF non chargée — vérifiez votre connexion.'); return; }

  var jsPDF = window.jspdf.jsPDF;
  var doc   = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
  var W     = 210;  /* largeur A4 mm */
  var MARGIN = 14;
  var cW     = W - MARGIN * 2;  /* largeur colonne utile */
  var y      = MARGIN;

  /* ── Palette ── */
  var GREEN  = [10, 116, 96];
  var DGREEN = [6, 90, 72];
  var LGRAY  = [243, 246, 244];
  var DGRAY  = [20, 28, 24];
  var MGRAY  = [97, 112, 104];
  var WHITE  = [255, 255, 255];
  var RED    = [192, 57, 43];

  /* ── Helper : nouvelle page si débordement ── */
  function checkPage(needed) {
    if (y + needed > 280) { doc.addPage(); y = MARGIN; }
  }

  /* ── Header ── */
  doc.setFillColor.apply(doc, DGREEN);
  doc.rect(0, 0, W, 22, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor.apply(doc, WHITE);
  doc.text('HydroCalc', MARGIN, 13);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(200, 235, 225);
  doc.text('Application hydraulique professionnelle', MARGIN, 18);

  var h = _reportHeader();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor.apply(doc, WHITE);
  doc.text(h.userName || '', W - MARGIN, 11, { align:'right' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(h.dateStr || '', W - MARGIN, 16, { align:'right' });

  y = 28;

  /* ── Titre rapport ── */
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor.apply(doc, DGRAY);
  doc.text('Rapport de calculs hydrauliques', MARGIN, y);
  y += 7;
  if (h.projectTitle) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor.apply(doc, GREEN);
    doc.text(h.projectTitle, MARGIN, y);
    y += 6;
  }
  y += 1;

  /* ── Ligne de séparation ── */
  doc.setDrawColor.apply(doc, GREEN);
  doc.setLineWidth(0.6);
  doc.line(MARGIN, y, W - MARGIN, y);
  y += 6;

  /* ── Calculs ── */
  if (arr.length) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor.apply(doc, MGRAY);
    doc.text('CALCULS SÉLECTIONNÉS (' + arr.length + ')', MARGIN, y);
    y += 5;

    arr.forEach(function(c) {
      checkPage(28);

      /* Bandeau module */
      doc.setFillColor.apply(doc, GREEN);
      doc.roundedRect(MARGIN, y, cW, 7, 2, 2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor.apply(doc, WHITE);
      var d = new Date(c.date);
      var ds = d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
      doc.text(_pdfSanitize(c.module || ''), MARGIN + 3, y + 4.8);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.text(ds, W - MARGIN - 2, y + 4.8, { align:'right' });
      y += 9;

      /* Valeur */
      if (c.valeur) {
        checkPage(10);
        doc.setFillColor.apply(doc, LGRAY);
        doc.roundedRect(MARGIN, y, cW, 8, 1.5, 1.5, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor.apply(doc, DGREEN);
        var valTxt = _pdfSanitize(_htmlToText ? _htmlToText(c.valeur) : c.valeur);
        var valLines = doc.splitTextToSize(valTxt, cW - 6);
        doc.text(valLines[0] || '', MARGIN + 3, y + 5.5);
        y += 10;
      }

      /* Détail */
      if (c.detail) {
        var detTxt = _pdfSanitize(_htmlToText ? _htmlToText(c.detail) : c.detail);
        var lines = doc.splitTextToSize(detTxt, cW - 6);
        var blockH = lines.length * 4 + 6;
        checkPage(blockH);
        doc.setFillColor(248, 251, 250);
        doc.setDrawColor(200, 225, 218);
        doc.roundedRect(MARGIN, y, cW, blockH, 1.5, 1.5, 'FD');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor.apply(doc, DGRAY);
        lines.forEach(function(l, li) { doc.text(l, MARGIN + 3, y + 5 + li * 4); });
        y += blockH + 3;
      }
      y += 3;
    });
  }

  /* ── Formules ── */
  if (formulas.length) {
    checkPage(12);
    doc.setDrawColor.apply(doc, GREEN);
    doc.line(MARGIN, y, W - MARGIN, y);
    y += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor.apply(doc, MGRAY);
    doc.text('FORMULES (' + formulas.length + ')', MARGIN, y);
    y += 5;

    formulas.forEach(function(f) {
      checkPage(20);
      doc.setFillColor(230, 238, 248);
      doc.setDrawColor(21, 80, 160);
      doc.roundedRect(MARGIN, y, cW, 6, 1.5, 1.5, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(21, 80, 160);
      doc.text(_pdfSanitize(f.nom), MARGIN + 3, y + 4.2);
      y += 8;

      var exprTxt = _pdfSanitize(f.expr);
      var exprLines = doc.splitTextToSize(exprTxt, cW - 6);
      var exprH = exprLines.length * 4.4 + 3;
      checkPage(exprH);
      doc.setFillColor(238, 243, 252);
      doc.roundedRect(MARGIN, y, cW, exprH, 1, 1, 'F');
      doc.setFont('courier', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(21, 80, 160);
      exprLines.forEach(function(l, li) { doc.text(l, MARGIN + 3, y + 4.6 + li * 4.4); });
      y += exprH + 2;

      if (f.vars && f.vars.length) {
        f.vars.forEach(function(v) {
          var vTxt = _pdfSanitize(v);
          var vLines = doc.splitTextToSize('• ' + vTxt, cW - 6);
          checkPage(vLines.length * 4 + 1);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          doc.setTextColor.apply(doc, MGRAY);
          vLines.forEach(function(l, li) { doc.text(l, MARGIN + 2, y + li * 4); });
          y += vLines.length * 4;
        });
      }
      if (f.result) {
        var resTxt = _pdfSanitize('= ' + f.result);
        var resLines = doc.splitTextToSize(resTxt, cW - 6);
        checkPage(resLines.length * 4.2 + 2);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(22, 96, 56);
        resLines.forEach(function(l, li) { doc.text(l, MARGIN + 3, y + li * 4.2); });
        y += resLines.length * 4.2;
      }
      y += 3;
    });
  }

  /* ── Textes réglementaires ── */
  if (regls && regls.length) {
    checkPage(12);
    doc.setDrawColor.apply(doc, GREEN);
    doc.line(MARGIN, y, W - MARGIN, y);
    y += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor.apply(doc, MGRAY);
    doc.text('TEXTES RÉGLEMENTAIRES (' + regls.length + ')', MARGIN, y);
    y += 5;

    regls.forEach(function(r) {
      checkPage(14);
      doc.setFillColor(234, 248, 240);
      doc.setDrawColor(22, 96, 56);
      doc.roundedRect(MARGIN, y, cW, 6, 1.5, 1.5, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(22, 96, 56);
      doc.text(_pdfSanitize(r.nom), MARGIN + 3, y + 4.2);
      y += 8;
      if (r.ref) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(7.5);
        doc.setTextColor.apply(doc, MGRAY);
        doc.text(_pdfSanitize(r.ref), MARGIN + 3, y);
        y += 4;
      }
      if (r.texte) {
        var tLines = doc.splitTextToSize(_pdfSanitize(r.texte), cW - 6);
        tLines.forEach(function(l) { checkPage(4); doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor.apply(doc,DGRAY); doc.text(l, MARGIN+3, y); y+=4; });
      }
      y += 3;
    });
  }

  /* ── Footer sur chaque page ── */
  var pageCount = doc.getNumberOfPages();
  for (var i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setDrawColor(220, 232, 228);
    doc.setLineWidth(0.3);
    doc.line(MARGIN, 288, W - MARGIN, 288);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor.apply(doc, MGRAY);
    doc.text('HydroCalc · hydrocalc.fr · Rapport généré le ' + new Date().toLocaleString('fr-FR'), MARGIN, 292);
    doc.text('Page ' + i + ' / ' + pageCount, W - MARGIN, 292, { align:'right' });
  }

  doc.save('HydroCalc_rapport_' + _reportDate() + '.pdf');
  _incrementReportQuota();
  authToast('Rapport PDF téléchargé ✓');
}

/* ─── FORMAT ODT ─── */
function _xmlEsc(s) {
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function generateODTReport() {
  var check = _canGenerateReport();
  if (!check.ok) { authToast(check.reason); setTimeout(openSidebar, 800); return; }
  var arr = getSavedCalcs();
  if (!arr.length) { authToast('Aucun calcul à exporter.'); return; }
  if (!window.JSZip) { authToast('Bibliothèque ZIP non chargée.'); return; }

  var arr = _getSelectedCalcs();
  var formulas = _getSelectedFormulas();
  if (!arr.length && !formulas.length) { authToast('Aucun élément sélectionné.'); return; }

  var h = _reportHeader();
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var userLogo = DataStore.userLogo.get();
  var _odtLogoXml = 'HydroCalc';
  var _odtImgBuf = null;
  var _odtImgExt = 'png';
  if (userLogo && plan !== 'free') {
    try {
      var _ol_b64 = userLogo.split(',')[1];
      var _ol_ext = userLogo.split(';')[0].split('/')[1] || 'png';
      if (_ol_ext === 'jpeg') _ol_ext = 'jpg';
      _odtImgExt = _ol_ext;
      var _ol_bin = atob(_ol_b64);
      _odtImgBuf = new Uint8Array(_ol_bin.length);
      for (var _oli = 0; _oli < _ol_bin.length; _oli++) _odtImgBuf[_oli] = _ol_bin.charCodeAt(_oli);
      _odtLogoXml = '<draw:frame draw:name="logo" svg:width="3.86cm" svg:height="1.59cm" text:anchor-type="as-char" draw:z-index="0">'
        + '<draw:image xlink:href="Pictures/logo.' + _ol_ext + '" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>'
        + '</draw:frame>';
    } catch(e) { _odtImgBuf = null; _odtLogoXml = 'HydroCalc'; }
  }

  var calcsXml = arr.map(function(c) {
    var d = new Date(c.date);
    var dateStr = d.toLocaleDateString('fr-FR') + ' à ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
    var module = _xmlEsc(c.module||'');

    if (c.type === 'outil' && c.outil) {
      var o = c.outil;
      var lines = '<text:p text:style-name="HC_Module">🔧 ' + _xmlEsc(o.name) + ' — ' + _xmlEsc(o.cat) + '<text:tab/>' + dateStr + '</text:p>'
        + '<text:p text:style-name="HC_Value">' + _xmlEsc(o.usage) + '</text:p>'
        + '<text:p text:style-name="HC_Detail">PRINCIPE : ' + _xmlEsc(o.principe) + '</text:p>'
        + '<text:p text:style-name="HC_Detail">PROTOCOLE :</text:p>'
        + o.protocole.map(function(p, pi) {
            return '<text:p text:style-name="HC_Detail">' + (pi+1) + '. ' + _xmlEsc(p) + '</text:p>';
          }).join('')
        + '<text:p text:style-name="HC_Detail">INTERPRÉTATION :</text:p>'
        + o.interpretation.map(function(r) {
            return '<text:p text:style-name="HC_Detail">• ' + _xmlEsc(r.val) + ' → ' + _xmlEsc(r.label) + ' : ' + _xmlEsc(r.action) + '</text:p>';
          }).join('')
        + '<text:p text:style-name="HC_Detail">MATÉRIEL : ' + _xmlEsc(o.materiel) + '</text:p>'
        + '<text:p text:style-name="HC_Detail">PRÉCAUTIONS : ' + _xmlEsc(o.precautions) + '</text:p>'
        + '<text:p text:style-name="HC_Detail">NORMES : ' + _xmlEsc(o.norme) + '</text:p>'
        + '<text:p text:style-name="HC_Space"> </text:p>';
      return lines;
    }

    var valeur = _xmlEsc(_htmlToText(c.valeur));
    var detail = _xmlEsc(_htmlToText(c.detail));
    return '<text:p text:style-name="HC_Module">' + module + '<text:tab/>' + dateStr + '</text:p>'
      + '<text:p text:style-name="HC_Value">' + valeur + '</text:p>'
      + (detail ? '<text:p text:style-name="HC_Detail">' + detail + '</text:p>' : '')
      + '<text:p text:style-name="HC_Space"> </text:p>';
  }).join('');

  var styles = '<?xml version="1.0" encoding="UTF-8"?>'
    + '<office:document-styles xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"'
    + ' xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0"'
    + ' xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"'
    + ' xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"'
    + ' xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0">'
    + '<office:styles>'
    + '<style:style style:name="HC_Title" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:margin-bottom="0.2cm"/>'
    + '<style:text-properties fo:font-size="22pt" fo:font-weight="bold" fo:color="#0A7460" style:font-name="Arial"/>'
    + '</style:style>'
    + '<style:style style:name="HC_Subtitle" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:margin-bottom="0.4cm" fo:border-bottom="0.5pt solid #0A7460" fo:padding-bottom="0.2cm"/>'
    + '<style:text-properties fo:font-size="10pt" fo:color="#617068" style:font-name="Arial"/>'
    + '</style:style>'
    + '<style:style style:name="HC_UserName" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:text-align="right" fo:margin-bottom="0.1cm"/>'
    + '<style:text-properties fo:font-size="13pt" fo:font-weight="bold" fo:color="#141C18" style:font-name="Arial"/>'
    + '</style:style>'
    + '<style:style style:name="HC_SectionTitle" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:margin-top="0.4cm" fo:margin-bottom="0.3cm"/>'
    + '<style:text-properties fo:font-size="10pt" fo:font-weight="bold" fo:color="#617068" style:font-name="Arial" fo:text-transform="uppercase" fo:letter-spacing="0.08cm"/>'
    + '</style:style>'
    + '<style:style style:name="HC_Module" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:background-color="#E0F4F0" fo:padding="0.15cm" fo:margin-top="0.3cm"/>'
    + '<style:text-properties fo:font-size="9pt" fo:font-weight="bold" fo:color="#0A7460" style:font-name="Arial"/>'
    + '</style:style>'
    + '<style:style style:name="HC_Value" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:margin-left="0.3cm" fo:margin-top="0.1cm" fo:margin-bottom="0.1cm"/>'
    + '<style:text-properties fo:font-size="16pt" fo:font-weight="bold" fo:color="#065A48" style:font-name="Arial"/>'
    + '</style:style>'
    + '<style:style style:name="HC_Detail" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:margin-left="0.3cm" fo:margin-bottom="0.1cm" fo:background-color="#F3F6F4" fo:padding="0.15cm"/>'
    + '<style:text-properties fo:font-size="9pt" fo:color="#3A4840" style:font-name="Arial" fo:line-height="150%"/>'
    + '</style:style>'
    + '<style:style style:name="HC_Space" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:border-bottom="0.5pt solid #DEE8E4" fo:padding-bottom="0.15cm" fo:margin-bottom="0.15cm"/>'
    + '</style:style>'
    + '<style:style style:name="HC_Project" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:margin-bottom="0.3cm" fo:border-top="0.5pt solid #E0F4F0" fo:padding-top="0.2cm"/>'
    + '<style:text-properties fo:font-size="12pt" fo:font-weight="bold" fo:color="#0A7460" style:font-name="Arial"/>'
    + '</style:style>'
    + '<style:style style:name="HC_Footer" style:family="paragraph" style:parent-style-name="Default Paragraph Style">'
    + '<style:paragraph-properties fo:text-align="center" fo:border-top="0.5pt solid #DEE8E4" fo:padding-top="0.2cm" fo:margin-top="0.5cm"/>'
    + '<style:text-properties fo:font-size="8pt" fo:color="#8A9890" style:font-name="Arial"/>'
    + '</style:style>'
    + '</office:styles></office:document-styles>';

  var content = '<?xml version="1.0" encoding="UTF-8"?>'
    + '<office:document-content xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"'
    + ' xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"'
    + ' xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0"'
    + ' xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"'
    + ' xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0"'
    + ' xmlns:xlink="http://www.w3.org/1999/xlink"'
    + ' xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0">'
    + '<office:body><office:text>'
    + '<text:p text:style-name="HC_Title">' + _odtLogoXml + '</text:p>'
    + '<text:p text:style-name="HC_UserName">' + _xmlEsc(h.userName) + '</text:p>'
    + '<text:p text:style-name="HC_Subtitle">Application hydraulique professionnelle · ' + _xmlEsc(h.dateStr) + '</text:p>'
    + (h.projectTitle ? '<text:p text:style-name="HC_Project">' + _xmlEsc(h.projectTitle) + '</text:p>' : '')
    + (arr.length ? '<text:p text:style-name="HC_SectionTitle">Calculs sélectionnés (' + arr.length + ')</text:p>' + calcsXml : '')
    + (formulas.length ? '<text:p text:style-name="HC_SectionTitle">Formules sélectionnées (' + formulas.length + ')</text:p>'
      + formulas.map(function(f){ return '<text:p text:style-name="HC_Module">📐 ' + _xmlEsc(f.nom) + '</text:p>'
        + '<text:p text:style-name="HC_Value">' + _xmlEsc(f.expr) + '</text:p>'
        + (f.result ? '<text:p text:style-name="HC_Detail">= ' + _xmlEsc(f.result) + '</text:p>' : '')
        + '<text:p text:style-name="HC_Space"> </text:p>'; }).join('') : '')
    + '<text:p text:style-name="HC_Footer">HydroCalc · hydrocalc.fr · Généré le ' + _xmlEsc(new Date().toLocaleString('fr-FR')) + '</text:p>'
    + '</office:text></office:body></office:document-content>';

  var manifest = '<?xml version="1.0" encoding="UTF-8"?>'
    + '<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">'
    + '<manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.oasis.opendocument.text"/>'
    + '<manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>'
    + '<manifest:file-entry manifest:full-path="styles.xml" manifest:media-type="text/xml"/>'
    + (_odtImgBuf ? '<manifest:file-entry manifest:full-path="Pictures/" manifest:media-type=""/><manifest:file-entry manifest:full-path="Pictures/logo.' + _odtImgExt + '" manifest:media-type="image/' + _odtImgExt + '"/>' : '')
    + '</manifest:manifest>';

  var zip = new JSZip();
  zip.file('mimetype', 'application/vnd.oasis.opendocument.text', {compression:'STORE'});
  zip.folder('META-INF').file('manifest.xml', manifest);
  zip.file('content.xml', content);
  zip.file('styles.xml', styles);
  if (_odtImgBuf) zip.folder('Pictures').file('logo.' + _odtImgExt, _odtImgBuf);

  zip.generateAsync({type:'blob', mimeType:'application/vnd.oasis.opendocument.text'}).then(function(blob) {
    _download(blob, 'HydroCalc_rapport_' + _reportDate() + '.odt');
    _incrementReportQuota();
    authToast('Rapport ODT téléchargé ✓');
  });
}

/* ─── GÉNÉRATION RAPPORT WORD ─── */
function generateWordReport() {
  var check = _canGenerateReport();
  if (!check.ok) { authToast(check.reason); setTimeout(openSidebar, 800); return; }
  var arr = getSavedCalcs();
  if (!arr.length) { authToast('Aucun calcul à exporter. Sauvegardez d\'abord des calculs.'); return; }
  if (!window.docx) { authToast('Bibliothèque Word non chargée.'); return; }

  var arr = _getSelectedCalcs();
  var formulas = _getSelectedFormulas();
  if (!arr.length && !formulas.length) { authToast('Aucun élément sélectionné.'); return; }

  var D = window.docx;
  var h = _reportHeader();
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var userLogo = DataStore.userLogo.get();

  /* ── En-tête (logo gauche, nom droite) ── */
  var logoRun = [];
  if (userLogo && plan !== 'free') {
    try {
      var b64 = userLogo.split(',')[1];
      var ext = userLogo.split(';')[0].split('/')[1] || 'png';
      if (ext === 'jpeg') ext = 'jpg';
      var binary = atob(b64);
      var buf = new Uint8Array(binary.length);
      for (var ii = 0; ii < binary.length; ii++) buf[ii] = binary.charCodeAt(ii);
      logoRun = [new D.ImageRun({ type: ext, data: buf.buffer, transformation: { width: 110, height: 45 }, altText: { title:'Logo', description:'Logo', name:'Logo' } })];
    } catch(e) {
      logoRun = [new D.TextRun({ text: 'HydroCalc', bold: true, size: 40, color: '0A7460', font: 'Arial' })];
    }
  } else {
    logoRun = [new D.TextRun({ text: 'HydroCalc', bold: true, size: 40, color: '0A7460', font: 'Arial' })];
  }

  var bord = { style: D.BorderStyle.SINGLE, size: 1, color: 'DEE8E4' };
  var bords = { top: bord, bottom: bord, left: bord, right: bord };

  /* Tableau en-tête : logo | nom + date */
  var headerTable = new D.Table({
    width: { size: 9026, type: D.WidthType.DXA },
    columnWidths: [5000, 4026],
    borders: { top: { style: D.BorderStyle.NONE }, bottom: { style: D.BorderStyle.SINGLE, size: 6, color: '0A7460', space: 4 }, left: { style: D.BorderStyle.NONE }, right: { style: D.BorderStyle.NONE }, insideH: { style: D.BorderStyle.NONE }, insideV: { style: D.BorderStyle.NONE } },
    rows: [new D.TableRow({ children: [
      new D.TableCell({
        borders: { top:{style:D.BorderStyle.NONE}, bottom:{style:D.BorderStyle.NONE}, left:{style:D.BorderStyle.NONE}, right:{style:D.BorderStyle.NONE} },
        width: { size: 5000, type: D.WidthType.DXA },
        verticalAlign: D.VerticalAlign.BOTTOM,
        children: [
          new D.Paragraph({ children: logoRun }),
          new D.Paragraph({ children: [new D.TextRun({ text: 'Application hydraulique professionnelle', size: 16, color: '617068', font: 'Arial' })] })
        ]
      }),
      new D.TableCell({
        borders: { top:{style:D.BorderStyle.NONE}, bottom:{style:D.BorderStyle.NONE}, left:{style:D.BorderStyle.NONE}, right:{style:D.BorderStyle.NONE} },
        width: { size: 4026, type: D.WidthType.DXA },
        verticalAlign: D.VerticalAlign.BOTTOM,
        children: [
          new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: h.userName, bold: true, size: 22, color: '141C18', font: 'Arial' })] }),
          new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: h.dateStr, size: 16, color: '617068', font: 'Arial' })] })
        ].concat(h.projectTitle ? [new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: h.projectTitle, bold: true, size: 18, color: '0A7460', font: 'Arial' })] })] : [])
      })
    ]})],
  });

  /* ── Calculs ── */
  var calcChildren = [];
  calcChildren.push(new D.Paragraph({
    children: [new D.TextRun({ text: 'Calculs enregistrés (' + arr.length + ')', bold: true, size: 22, color: '617068', font: 'Arial' })],
    spacing: { before: 240, after: 160 }
  }));

  for (var j = 0; j < arr.length; j++) {
    var c = arr[j];
    var d = new Date(c.date);
    var cDate = d.toLocaleDateString('fr-FR') + ' à ' + d.toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' });

    if (c.type === 'outil' && c.outil) {
      var o = c.outil;
      /* Bandeau bleu fiche outil */
      calcChildren.push(new D.Table({
        width: { size: 9026, type: D.WidthType.DXA },
        columnWidths: [5500, 3526],
        rows: [new D.TableRow({ children: [
          new D.TableCell({
            borders: bords, width: { size: 5500, type: D.WidthType.DXA },
            shading: { fill: '0A3060', type: D.ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new D.Paragraph({ children: [
              new D.TextRun({ text: o.ico + ' ' + o.name + '  ', bold: true, size: 18, color: 'FFFFFF', font: 'Arial' }),
              new D.TextRun({ text: o.cat, size: 14, color: 'B0C8F0', font: 'Arial' })
            ]})]
          }),
          new D.TableCell({
            borders: bords, width: { size: 3526, type: D.WidthType.DXA },
            shading: { fill: '0A3060', type: D.ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: cDate, size: 16, color: 'B0C8F0', font: 'Arial' })] })]
          })
        ]})],
      }));
      /* Usage */
      calcChildren.push(new D.Paragraph({
        children: [new D.TextRun({ text: o.usage, size: 18, color: '0A3060', font: 'Arial', italics: true })],
        spacing: { before: 100, after: 80 }, indent: { left: 140 }
      }));
      /* Principe */
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text: 'PRINCIPE', bold: true, size: 16, color: '617068', font: 'Arial' })], spacing: { before: 80 }, indent: { left: 140 } }));
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text: o.principe, size: 17, color: '3A4840', font: 'Arial' })], spacing: { after: 80 }, indent: { left: 200 } }));
      /* Protocole */
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text: 'PROTOCOLE TERRAIN', bold: true, size: 16, color: '617068', font: 'Arial' })], spacing: { before: 80 }, indent: { left: 140 } }));
      o.protocole.forEach(function(p, pi) {
        calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text: (pi+1) + '. ' + p, size: 17, color: '3A4840', font: 'Arial' })], spacing: { after: 40 }, indent: { left: 200 } }));
      });
      /* Interprétation */
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text: 'INTERPRÉTATION', bold: true, size: 16, color: '617068', font: 'Arial' })], spacing: { before: 80 }, indent: { left: 140 } }));
      o.interpretation.forEach(function(r) {
        var tCol = {ok:'166038', warn:'886000', danger:'A82018'}[r.t] || '3A4840';
        calcChildren.push(new D.Paragraph({ children: [
          new D.TextRun({ text: '• ' + r.val + ' ', bold: true, size: 17, color: tCol, font: 'Arial' }),
          new D.TextRun({ text: '[' + r.label + '] ', italics: true, size: 16, color: tCol, font: 'Arial' }),
          new D.TextRun({ text: '→ ' + r.action, size: 16, color: '3A4840', font: 'Arial' })
        ], spacing: { after: 40 }, indent: { left: 200 } }));
      });
      /* Matériel + Précautions */
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text: 'MATÉRIEL : ', bold: true, size: 16, color: '617068', font: 'Arial' }), new D.TextRun({ text: o.materiel, size: 16, color: '3A4840', font: 'Arial' })], spacing: { before: 80, after: 40 }, indent: { left: 140 } }));
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text: '⚠ PRÉCAUTIONS : ', bold: true, size: 16, color: 'A82018', font: 'Arial' }), new D.TextRun({ text: o.precautions, size: 16, color: 'A82018', font: 'Arial' })], spacing: { after: 40 }, indent: { left: 140 } }));
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text: '📖 NORMES : ' + o.norme, size: 15, color: '617068', font: 'Arial', italics: true })], spacing: { after: 40 }, indent: { left: 140 } }));
    } else {
      var cleanVal = _htmlToText(c.valeur);
      var cleanDet = _htmlToText(c.detail);
      /* Bandeau module + date */
      calcChildren.push(new D.Table({
        width: { size: 9026, type: D.WidthType.DXA },
        columnWidths: [5500, 3526],
        rows: [new D.TableRow({ children: [
          new D.TableCell({
            borders: bords, width: { size: 5500, type: D.WidthType.DXA },
            shading: { fill: '0A7460', type: D.ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new D.Paragraph({ children: [new D.TextRun({ text: c.module, bold: true, size: 18, color: 'FFFFFF', font: 'Arial' })] })]
          }),
          new D.TableCell({
            borders: bords, width: { size: 3526, type: D.WidthType.DXA },
            shading: { fill: '0A7460', type: D.ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            children: [new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: cDate, size: 16, color: 'E0F4F0', font: 'Arial' })] })]
          })
        ]})],
      }));
      /* Résultat */
      calcChildren.push(new D.Paragraph({
        children: [new D.TextRun({ text: cleanVal, bold: true, size: 26, color: '065A48', font: 'Arial' })],
        spacing: { before: 120, after: 80 }, indent: { left: 140 }
      }));
      /* Détail */
      if (cleanDet) {
        calcChildren.push(new D.Paragraph({
          children: [new D.TextRun({ text: cleanDet, size: 18, color: '3A4840', font: 'Arial' })],
          spacing: { after: 120 }, indent: { left: 140 },
          shading: { fill: 'F3F6F4', type: D.ShadingType.CLEAR }
        }));
      }
    }

    /* Séparateur */
    calcChildren.push(new D.Paragraph({
      children: [new D.TextRun('')],
      border: { bottom: { style: D.BorderStyle.SINGLE, size: 2, color: 'DEE8E4', space: 1 } },
      spacing: { after: 160 }
    }));
  }

  /* ── Pied de page ── */
  var footer = new D.Footer({
    children: [new D.Paragraph({
      alignment: D.AlignmentType.CENTER,
      children: [
        new D.TextRun({ text: 'HydroCalc · hydrocalc.fr · Page ', size: 16, color: '8A9890', font: 'Arial' }),
        new D.TextRun({ children: [D.PageNumber.CURRENT], size: 16, color: '8A9890', font: 'Arial' }),
        new D.TextRun({ text: ' / ', size: 16, color: '8A9890', font: 'Arial' }),
        new D.TextRun({ children: [D.PageNumber.TOTAL_PAGES], size: 16, color: '8A9890', font: 'Arial' }),
      ],
      border: { top: { style: D.BorderStyle.SINGLE, size: 2, color: 'DEE8E4', space: 4 } }
    })]
  });

  /* ── Document ── */
  /* Formules sélectionnées */
  if (formulas.length) {
    calcChildren.push(new D.Paragraph({
      children: [new D.TextRun({ text: 'Formules sélectionnées (' + formulas.length + ')', bold: true, size: 22, color: '617068', font: 'Arial' })],
      spacing: { before: 320, after: 160 }
    }));
    formulas.forEach(function(f) {
      var bF = { style: D.BorderStyle.SINGLE, size: 1, color: 'C5D8F0' };
      var bFs = { top: bF, bottom: bF, left: bF, right: bF };
      calcChildren.push(new D.Table({
        width: { size: 9026, type: D.WidthType.DXA }, columnWidths: [9026],
        rows: [new D.TableRow({ children: [new D.TableCell({
          borders: bFs, width: { size: 9026, type: D.WidthType.DXA },
          shading: { fill: '1550A0', type: D.ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 140, right: 140 },
          children: [new D.Paragraph({ children: [new D.TextRun({ text: '📐 ' + f.nom, bold: true, size: 18, color: 'FFFFFF', font: 'Arial' })] })]
        })]})],
      }));
      calcChildren.push(new D.Paragraph({
        children: [new D.TextRun({ text: f.expr, size: 20, color: '1550A0', font: 'Courier New' })],
        spacing: { before: 80, after: 60 }, indent: { left: 140 }
      }));
      if (f.result) {
        calcChildren.push(new D.Paragraph({
          children: [new D.TextRun({ text: '= ' + f.result, bold: true, size: 20, color: '166038', font: 'Arial' })],
          spacing: { after: 120 }, indent: { left: 140 }
        }));
      }
      calcChildren.push(new D.Paragraph({
        children: [new D.TextRun('')],
        border: { bottom: { style: D.BorderStyle.SINGLE, size: 2, color: 'DEE8E4', space: 1 } },
        spacing: { after: 160 }
      }));
    });
  }

  /* Pied de page */
  var footer = new D.Footer({
    children: [new D.Paragraph({
      alignment: D.AlignmentType.CENTER,
      border: { top: { style: D.BorderStyle.SINGLE, size: 2, color: 'DEE8E4', space: 4 } },
      children: [
        new D.TextRun({ text: 'HydroCalc · hydrocalc.fr · Page ', size: 16, color: '8A9890', font: 'Arial' }),
        new D.TextRun({ children: [D.PageNumber.CURRENT], size: 16, color: '8A9890', font: 'Arial' }),
        new D.TextRun({ text: ' / ', size: 16, color: '8A9890', font: 'Arial' }),
        new D.TextRun({ children: [D.PageNumber.TOTAL_PAGES], size: 16, color: '8A9890', font: 'Arial' }),
      ]
    })]
  });

  var doc = new D.Document({
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 }
        }
      },
      footers: { default: footer },
      children: [headerTable, new D.Paragraph({ children: [new D.TextRun('')], spacing: { after: 200 } })].concat(calcChildren)
    }]
  });

  D.Packer.toBlob(doc).then(function(blob) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'HydroCalc_rapport_' + new Date().toISOString().slice(0,10) + '.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    _incrementReportQuota();
    authToast('Rapport Word téléchargé ✓');
  }).catch(function(err) {
    authToast('Erreur lors de la génération : ' + err.message);
  });
}

/* ═══════════════════════════════════════════════════
   SYSTÈME DE PROJETS
   ═══════════════════════════════════════════════════ */
function getSavedProjects() {
  if (!AUTH.user) return [];
  return DataStore.projects.get(AUTH.user.email);
}
function setSavedProjects(arr) {
  if (!AUTH.user) return;
  DataStore.projects.set(AUTH.user.email, arr);
}

var _hcProjectView = null; /* null = accueil projets, id = projet ouvert */

var PROJECT_COLORS = [
  { id:'teal',   bg:'#0A7460', light:'#E0F4F0', label:'Vert eau' },
  { id:'blue',   bg:'#1550A0', light:'#E6EEF8', label:'Bleu' },
  { id:'violet', bg:'#5B2DA0', light:'#EDE6F8', label:'Violet' },
  { id:'orange', bg:'#9A4200', light:'#FEF0E2', label:'Orange' },
  { id:'red',    bg:'#A82018', light:'#FDECEA', label:'Rouge' },
  { id:'olive',  bg:'#5A6000', light:'#F0F2D8', label:'Olive' },
  { id:'riv',    bg:'#0A5090', light:'#E0ECF8', label:'Rivière' },
  { id:'anc',    bg:'#065A48', light:'#DFF4EE', label:'ANC' },
];
var PROJECT_ICONS = ['📁','🏗️','💧','🌊','🔬','📊','🗓️','⭐','🏡','🔧','📋','🌿','⚗️','🏛️','🔩','🎯'];

function renderCalcHistory() {
  _hcProjectView = null;
  _renderProjectHome();
}

function _renderProjectHome() {
  var allCalcs   = getSavedCalcs();
  var projects   = getSavedProjects();
  var plan       = AUTH.user ? (AUTH.user.plan || 'free') : 'free';

  var html = '<div class="profile-hero" style="background:linear-gradient(135deg,var(--c-primary-d),var(--c-primary))">'
    + '<div style="font-size:36px;margin-bottom:6px">📁</div>'
    + '<div class="profile-name">Mes projets</div>'
    + '<div class="profile-email">' + projects.length + ' projet(s) · ' + allCalcs.length + ' calcul(s) enregistré(s)</div>'
    + '</div>';

  /* ── Bouton Nouveau projet ── */
  html += '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<button onclick="showNewProjectModal()" style="width:100%;padding:12px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">'
    + '<span style="font-size:18px">+</span> Nouveau projet</button>'
    + '</div>';

  /* ── Grille des projets ── */
  if (projects.length) {
    html += '<div class="section-header" style="padding-top:var(--s-3)">Projets<span class="sh-count">' + projects.length + '</span></div>';
    html += '<div style="padding:0 var(--s-4);display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)">';
    projects.forEach(function(p) {
      var cnt   = allCalcs.filter(function(c){ return c.projectId === p.id; }).length;
      var col   = PROJECT_COLORS.find(function(c){ return c.id === p.color; }) || PROJECT_COLORS[0];
      html += '<div onclick="openProject(\'' + p.id + '\')" style="background:var(--c-surface);border:2px solid ' + col.bg + ';border-radius:var(--r-lg);padding:var(--s-3);cursor:pointer;position:relative;transition:box-shadow .15s" '
        + 'onmouseover="this.style.boxShadow=\'0 4px 16px rgba(0,0,0,.12)\'" onmouseout="this.style.boxShadow=\'\'">'
        + '<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:var(--s-2)">'
          + '<div style="width:40px;height:40px;background:' + col.bg + ';border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;font-size:20px">' + (p.icon||'📁') + '</div>'
          + '<button onclick="event.stopPropagation();showProjectMenu(\'' + p.id + '\',this)" style="background:none;border:none;color:var(--c-text-4);font-size:18px;cursor:pointer;padding:2px 6px;border-radius:var(--r-sm)">⋯</button>'
        + '</div>'
        + '<div style="font-size:13px;font-weight:800;color:var(--c-text);margin-bottom:3px;line-height:1.3">' + p.name + '</div>'
        + '<div style="font-size:10px;color:var(--c-text-3)">' + cnt + ' élément' + (cnt > 1 ? 's' : '') + '</div>'
        + '<div id="pm-' + p.id + '" style="display:none;position:absolute;top:8px;right:8px;background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-md);padding:4px;z-index:10;box-shadow:var(--sh-2);min-width:140px">'
          + '<button onclick="event.stopPropagation();renameProjectPrompt(\'' + p.id + '\')" style="display:block;width:100%;text-align:left;padding:7px 10px;background:none;border:none;font-family:var(--f-body);font-size:12px;cursor:pointer;border-radius:4px" onmouseover="this.style.background=\'var(--c-surface-2)\'" onmouseout="this.style.background=\'none\'">✏️ Renommer</button>'
          + '<button onclick="event.stopPropagation();deleteProject(\'' + p.id + '\')" style="display:block;width:100%;text-align:left;padding:7px 10px;background:none;border:none;font-family:var(--f-body);font-size:12px;cursor:pointer;color:var(--c-danger);border-radius:4px" onmouseover="this.style.background=\'var(--c-danger-l)\'" onmouseout="this.style.background=\'none\'">🗑️ Supprimer</button>'
        + '</div>'
      + '</div>';
    });
    html += '</div>';
  }

  /* ── Sans dossier ── */
  var unassigned = allCalcs.filter(function(c){ return !c.projectId; });

  if (!allCalcs.length) {
    html += '<div style="text-align:center;padding:40px 20px;color:var(--c-text-4)">'
      + '<div style="font-size:36px;margin-bottom:12px">📭</div>'
      + '<div style="font-size:13px;font-weight:600;margin-bottom:6px">Aucun calcul enregistré</div>'
      + '<div style="font-size:12px;line-height:1.6">Faites un calcul, puis appuyez sur le bouton 💾 en bas à droite pour le sauvegarder.</div>'
      + '</div>';
  }

  if (unassigned.length) {
    html += '<div class="section-header" style="padding-top:var(--s-3)">Sans dossier<span class="sh-count">' + unassigned.length + '</span></div>';
    html += _calcSearchBar();
    html += '<div style="padding:0 var(--s-4)">';
    var groups = _groupCalcsByDate(unassigned);
    html += _renderCalcGroup('Aujourd\'hui', groups.today, allCalcs, projects, true);
    html += _renderCalcGroup('Cette semaine', groups.week, allCalcs, projects, true);
    html += _renderCalcGroup('Ce mois-ci', groups.month, allCalcs, projects, true);
    html += _renderCalcGroup('Plus anciens', groups.older, allCalcs, projects, true);
    html += '</div>';
  }

  html += '<div class="pb-nav"></div>';
  document.getElementById('profile-content').innerHTML = html;
  authShow('auth-profile');
  var hdr = document.querySelector('#auth-profile .auth-hdr-title');
  if (hdr) hdr.textContent = 'Mes projets';
}

/* ─── OUVRIR UN PROJET ─── */
function openProject(projectId) {
  _hcProjectView = projectId;
  var projects  = getSavedProjects();
  var allCalcs  = getSavedCalcs();
  var p         = projects.find(function(x){ return x.id === projectId; });
  if (!p) { renderCalcHistory(); return; }

  var col     = PROJECT_COLORS.find(function(c){ return c.id === p.color; }) || PROJECT_COLORS[0];
  var calcs   = allCalcs.filter(function(c){ return c.projectId === projectId; });
  var plan    = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var canPDF  = plan !== 'free';

  var html = '<div style="background:' + col.bg + ';padding:20px 16px 16px">'
    + '<button onclick="_renderProjectHome()" style="display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.18);border:none;border-radius:var(--r-pill);padding:6px 12px;color:#fff;font-family:var(--f-body);font-size:12px;font-weight:700;cursor:pointer;margin-bottom:12px">← Projets</button>'
    + '<div style="display:flex;align-items:center;gap:12px">'
      + '<div style="width:48px;height:48px;background:rgba(255,255,255,.2);border-radius:var(--r-lg);display:flex;align-items:center;justify-content:center;font-size:24px">' + (p.icon||'📁') + '</div>'
      + '<div><div style="font-size:18px;font-weight:800;color:#fff">' + p.name + '</div>'
        + '<div style="font-size:11px;color:rgba(255,255,255,.7);margin-top:2px">' + calcs.length + ' élément(s)</div></div>'
    + '</div>'
  + '</div>';

  /* Rapport (si plan Pro/Etab) */
  if (canPDF && calcs.length) {
    var userLogo = DataStore.userLogo.get();
    html += '<div style="padding:var(--s-3) var(--s-4) 0;display:flex;flex-direction:column;gap:var(--s-2)">';
    html += '<div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);display:flex;align-items:center;gap:var(--s-3)">'
      + '<span style="font-size:20px">🖼️</span>'
      + '<div style="flex:1"><div style="font-size:12px;font-weight:700;margin-bottom:2px">Logo du rapport</div>'
      + '<div style="font-size:11px;color:var(--c-text-3)">' + (userLogo ? 'Logo personnalisé' : 'Logo HydroCalc') + '</div></div>'
      + (userLogo ? '<button onclick="removeUserLogo()" style="padding:5px 10px;background:var(--c-danger-l);color:var(--c-danger);border:none;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer">Supprimer</button>' : '')
      + '<button onclick="uploadUserLogo()" style="padding:5px 10px;background:var(--c-primary-l);color:var(--c-primary);border:none;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer">' + (userLogo ? 'Changer' : 'Importer') + '</button>'
      + '</div>';
    var planPdf = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
    var canPdf = (planPdf !== 'free' && planPdf !== 'gratuit');
    html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:var(--s-2)">'
      + '<button onclick="previewReport(\'html\')" style="padding:10px 4px;background:#1550A0;color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">🌐 HTML</button>'
      + '<button onclick="previewReport(\'odt\')" style="padding:10px 4px;background:#166038;color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">📝 ODT</button>'
      + '<button onclick="previewReport(\'docx\')" style="padding:10px 4px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">📄 DOCX</button>'
      + (canPdf
        ? '<button onclick="generatePDFReport()" style="padding:10px 4px;background:#C0392B;color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">📕 PDF</button>'
        : '<button onclick="authToast(\'Le PDF est disponible avec le plan Pro ou Établissement.\');setTimeout(openSidebar,800)" style="padding:10px 4px;background:var(--c-surface-2);color:var(--c-text-4);border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">🔒 PDF</button>')
      + '</div></div>';
  }

  if (!calcs.length) {
    html += '<div style="text-align:center;padding:40px 20px;color:var(--c-text-4)">'
      + '<div style="font-size:32px;margin-bottom:10px">📭</div>'
      + '<div style="font-size:13px;font-weight:600">Dossier vide</div>'
      + '<div style="font-size:11px;margin-top:6px">Déplacez des calculs dans ce projet depuis "Sans dossier"</div>'
      + '</div>';
  } else {
    html += '<div class="section-header" style="padding-top:var(--s-3)">Calculs du projet<span class="sh-count">' + calcs.length + '</span></div>';
    html += _calcSearchBar();
    html += '<div style="padding:0 var(--s-4)">';
    var projGroups = _groupCalcsByDate(calcs);
    var projProjects = getSavedProjects();
    html += _renderCalcGroup('Aujourd\'hui', projGroups.today, allCalcs, projProjects, false);
    html += _renderCalcGroup('Cette semaine', projGroups.week, allCalcs, projProjects, false);
    html += _renderCalcGroup('Ce mois-ci', projGroups.month, allCalcs, projProjects, false);
    html += _renderCalcGroup('Plus anciens', projGroups.older, allCalcs, projProjects, false);
    html += '</div>';
  }

  /* Formules */
  var formulas = getSavedFormulas();
  html += _formulasSectionHtml(formulas);

  /* Textes réglementaires */
  var regls = getSavedRegls();
  html += _reglsSectionHtml(regls);

  html += '<div style="padding:var(--s-4)"><button class="auth-btn-ghost" onclick="deleteProject(\'' + projectId + '\')" style="color:var(--c-danger);border-color:var(--c-danger)">Supprimer ce projet</button></div>';
  html += '<div class="pb-nav"></div>';
  document.getElementById('profile-content').innerHTML = html;
  authShow('auth-profile');
  var hdr = document.querySelector('#auth-profile .auth-hdr-title');
  if (hdr) hdr.textContent = p.name;
}

/* ─── RENDU D'UN ITEM CALCUL ─── */
function _calcItemHtml(c, idx, projects, showMoveBtn) {
  var d = new Date(c.date);
  var now = new Date();
  var isToday = d.toDateString() === now.toDateString();
  var timeStr = isToday
    ? d.toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' })
    : d.toLocaleDateString('fr-FR', { day:'2-digit', month:'short' }) + ' ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});

  var assignedProject = c.projectId ? projects.find(function(p){ return p.id === c.projectId; }) : null;
  var col = assignedProject ? (PROJECT_COLORS.find(function(cc){ return cc.id === assignedProject.color; }) || PROJECT_COLORS[0]) : null;

  var isOutil = c.type === 'outil';
  var accentColor = isOutil ? 'var(--c-riv)' : 'var(--c-primary)';
  var accentLight = isOutil ? 'var(--c-riv-l)' : 'var(--c-primary-l)';
  var moduleLabel = isOutil ? ('🔧 ' + c.module) : c.module;

  /* Badge projet */
  var projBadge = (assignedProject && showMoveBtn && col)
    ? '<span style="font-size:9px;background:' + col.light + ';color:' + col.bg + ';border:1px solid ' + col.bg + ';border-radius:var(--r-pill);padding:2px 7px;font-weight:700;white-space:nowrap">' + (assignedProject.icon||'📁') + ' ' + assignedProject.name + '</span>'
    : '';

  /* Inputs chips */
  var inputsHtml = '';
  if (!isOutil && c.inputs && Object.keys(c.inputs).length) {
    var pairs = Object.keys(c.inputs).slice(0, 4).map(function(k) {
      var inp = c.inputs[k];
      return '<span style="display:inline-flex;align-items:center;gap:3px;background:var(--c-surface-3);border:1px solid var(--c-border);border-radius:4px;padding:2px 7px;font-size:10px;color:var(--c-text-3)">'
        + (inp.label || k) + ' <strong style="color:var(--c-text-2)">' + inp.value + '</strong>'
        + (inp.unit ? '<span style="color:var(--c-text-4);margin-left:1px">' + inp.unit + '</span>' : '')
        + '</span>';
    }).join('');
    inputsHtml = '<div style="display:flex;flex-wrap:wrap;gap:3px;margin:6px 0 4px">' + pairs + '</div>';
  }
  if (isOutil) {
    var o = c.outil || {};
    inputsHtml = o.usage ? '<div style="font-size:11px;color:var(--c-text-3);margin:4px 0 2px">' + o.usage.split('·')[0].trim() + '</div>' : '';
  }

  /* Bouton déplacer */
  var moveBtn = showMoveBtn && projects.length
    ? '<button onclick="event.stopPropagation();showMoveMenu(' + idx + ',this)" title="Déplacer dans un dossier" style="flex-shrink:0;background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-pill);padding:4px 9px;font-size:10px;font-weight:700;cursor:pointer;color:var(--c-text-3)">📁</button>'
    : '';

  /* Bouton relancer */
  var relaunchBtn = c.moduleId
    ? '<button onclick="event.stopPropagation();_relaunchCalc(' + idx + ')" style="padding:5px 12px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--f-body)">▶ Relancer</button>'
    : '';

  return '<div class="calc-hist-item" style="position:relative;border-left:3px solid ' + accentColor + ';border-radius:var(--r-md);background:var(--c-surface);border:1.5px solid var(--c-border);border-left:4px solid ' + accentColor + ';padding:var(--s-3);margin-bottom:var(--s-2)">'

    /* Ligne 1 : module + date + actions */
    + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;flex-wrap:wrap">'
      + '<input type="checkbox" id="chk-calc-' + idx + '" checked style="width:15px;height:15px;accent-color:var(--c-primary);cursor:pointer;flex-shrink:0">'
      + '<span style="font-size:10px;font-weight:800;background:' + accentLight + ';color:' + accentColor + ';border-radius:var(--r-pill);padding:3px 9px;flex-shrink:0">' + moduleLabel + '</span>'
      + projBadge
      + '<span style="font-size:10px;color:var(--c-text-4);margin-left:auto;white-space:nowrap">🕐 ' + timeStr + '</span>'
    + '</div>'

    /* Résultat principal — bien visible */
    + '<div style="font-size:16px;font-weight:800;color:var(--c-text);margin-bottom:2px;line-height:1.3">' + c.valeur + '</div>'

    /* Inputs / détail */
    + inputsHtml
    + (c.detail && !isOutil ? '<div style="font-size:11px;color:var(--c-text-3);line-height:1.5;margin-top:2px">' + c.detail + '</div>' : '')

    /* Actions */
    + '<div style="display:flex;align-items:center;gap:6px;margin-top:8px">'
      + relaunchBtn
      + moveBtn
      + '<button onclick="event.stopPropagation();deleteCalc(' + idx + ')" title="Supprimer" style="flex-shrink:0;margin-left:auto;background:none;border:1px solid var(--c-border);border-radius:var(--r-pill);padding:4px 10px;font-size:10px;font-weight:700;cursor:pointer;color:var(--c-danger)">🗑 Supprimer</button>'
    + '</div>'

    + '<div id="move-menu-' + idx + '" style="display:none"></div>'
  + '</div>';
}

/* ─── BARRE DE RECHERCHE CALCULS ─── */
function _calcSearchBar() {
  return '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div style="display:flex;align-items:center;gap:8px;background:var(--c-surface-2);border:1.5px solid var(--c-border);border-radius:var(--r-lg);padding:8px 12px">'
    + '<span style="font-size:15px">🔍</span>'
    + '<input id="calc-search" type="text" placeholder="Rechercher un calcul…" oninput="_filterCalcs(this.value)" '
    + 'style="border:none;background:transparent;font-family:var(--f-body);font-size:13px;outline:none;flex:1;color:var(--c-text)" autocomplete="off">'
    + '<button onclick="document.getElementById(\'calc-search\').value=\'\';_filterCalcs(\'\')" style="background:none;border:none;cursor:pointer;font-size:14px;color:var(--c-text-4);padding:0">✕</button>'
    + '</div>'
    + '</div>';
}

function _filterCalcs(q) {
  q = (q || '').toLowerCase().trim();
  var items = document.querySelectorAll('#profile-content .calc-hist-item');
  var groups = document.querySelectorAll('#profile-content .calc-date-group');
  items.forEach(function(el) {
    var text = el.textContent.toLowerCase();
    el.style.display = (!q || text.includes(q)) ? '' : 'none';
  });
  groups.forEach(function(g) {
    var visible = Array.from(g.querySelectorAll('.calc-hist-item')).some(function(el){ return el.style.display !== 'none'; });
    g.style.display = visible ? '' : 'none';
  });
}

/* ─── GROUPEMENT PAR DATE ─── */
function _renderCalcGroup(label, calcs, allCalcs, projects, showMoveBtn) {
  if (!calcs.length) return '';
  var html = '<div class="calc-date-group">'
    + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;padding:10px var(--s-4) 4px;display:flex;align-items:center;gap:6px">'
    + '<span>' + label + '</span><span style="font-weight:500;color:var(--c-text-5)">· ' + calcs.length + '</span></div>';
  calcs.forEach(function(c) {
    var globalIdx = allCalcs.indexOf(c);
    html += _calcItemHtml(c, globalIdx, projects, showMoveBtn);
  });
  return html + '</div>';
}

function _groupCalcsByDate(calcs) {
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var weekAgo = new Date(today - 6 * 86400000);
  var monthAgo = new Date(today - 29 * 86400000);
  var groups = { today:[], week:[], month:[], older:[] };
  calcs.forEach(function(c) {
    var d = new Date(c.date);
    if (d >= today)    groups.today.push(c);
    else if (d >= weekAgo)  groups.week.push(c);
    else if (d >= monthAgo) groups.month.push(c);
    else groups.older.push(c);
  });
  return groups;
}

/* ─── FORMULES ─── */
function _formulasSectionHtml(formulas) {
  var html = '<div class="section-header" style="padding-top:var(--s-4)">Mes formules personnalisées</div>';
  html += '<div style="padding:0 var(--s-4);margin-bottom:var(--s-3)">';
  html += '<div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s-2)">'
      + '<div style="font-size:11px;font-weight:700">➕ Ajouter une formule</div>'
      + '<button onclick="showFormulaPicker()" style="display:flex;align-items:center;gap:5px;padding:5px 10px;background:var(--c-primary-l);color:var(--c-primary);border:1.5px solid var(--c-primary);border-radius:var(--r-pill);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">📚 Bibliothèque</button>'
    + '</div>'
    + '<div style="position:relative">'
    + '<input id="formula-nom" type="text" placeholder="Nom (ex: Débit Manning)" autocomplete="off" oninput="_formulaNomSuggest(this.value)" onblur="setTimeout(function(){var s=document.getElementById(\'formula-nom-suggest\');if(s)s.style.display=\'none\'},180)" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;margin-bottom:0;box-sizing:border-box">'
    + '<div id="formula-nom-suggest" style="display:none;position:absolute;left:0;right:0;top:100%;background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-sm);z-index:999;max-height:180px;overflow-y:auto;box-shadow:0 4px 12px rgba(0,0,0,.1)"></div>'
    + '</div>'
    + '<div style="margin-bottom:6px"></div>'
    + '<input id="formula-expr" type="text" placeholder="Formule (ex: Q = K × A × Rh^(2/3) × I^(1/2))" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;margin-bottom:6px;box-sizing:border-box">'
    + '<input id="formula-ref" type="text" placeholder="Explication des variables (ex: K en m^1/3/s · I en m/m)" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;margin-bottom:6px;box-sizing:border-box">'
    + '<input id="formula-result" type="text" placeholder="Résultat ou valeur (facultatif)" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;margin-bottom:8px;box-sizing:border-box">'
    + '<button onclick="addFormula()" style="width:100%;padding:9px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;font-weight:700;cursor:pointer">Enregistrer la formule</button>'
    + '</div>';
  if (formulas.length) {
    formulas.forEach(function(f, i) {
      html += '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-2);display:flex;align-items:flex-start;gap:var(--s-2)">'
        + '<input type="checkbox" id="chk-form-' + i + '" checked style="width:16px;height:16px;accent-color:var(--c-primary);cursor:pointer;margin-top:2px;flex-shrink:0">'
        + '<div style="flex:1"><div style="font-size:12px;font-weight:700;margin-bottom:3px">📐 ' + f.nom + '</div>'
        + '<div style="font-family:\'Courier New\',monospace;font-size:11px;color:var(--c-primary);background:var(--c-primary-l);padding:3px 8px;border-radius:4px;display:inline-block;margin-bottom:4px">' + f.expr + '</div>'
        + (f.vars && f.vars.length ? '<div style="margin-bottom:3px;padding:5px 7px;background:var(--c-surface-2);border-radius:5px;border-left:2px solid var(--c-primary)">' + f.vars.map(function(v){return '<div style="font-size:10px;color:var(--c-text-2);line-height:1.7">' + v + '</div>';}).join('') + '</div>' : '')
        + (f.ref ? '<div style="font-size:10px;color:var(--c-text-3);margin-top:2px;font-style:italic">' + f.ref + '</div>' : '')
        + (f.result ? '<div style="font-size:11px;font-weight:700;color:var(--c-ok);margin-top:2px">= ' + f.result + '</div>' : '')
        + '</div>'
        + '<button onclick="deleteFormula(' + i + ')" style="background:none;border:none;color:var(--c-danger);font-size:16px;cursor:pointer;padding:2px 4px">🗑️</button>'
        + '</div>';
    });
  } else {
    html += '<div style="text-align:center;padding:16px;color:var(--c-text-4);font-size:12px">Aucune formule enregistrée</div>';
  }
  html += '</div>';
  return html;
}

/* ─── TEXTES RÉGLEMENTAIRES — section rapport ─── */
function _reglsSectionHtml(regls) {
  var html = '<div class="section-header" style="padding-top:var(--s-4)">Textes réglementaires</div>';
  html += '<div style="padding:0 var(--s-4);margin-bottom:var(--s-3)">';
  html += '<div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-3)">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s-2)">'
      + '<div style="font-size:11px;font-weight:700">➕ Ajouter un texte réglementaire</div>'
      + '<button onclick="showReglPicker()" style="display:flex;align-items:center;gap:5px;padding:5px 10px;background:var(--c-primary-l);color:var(--c-primary);border:1.5px solid var(--c-primary);border-radius:var(--r-pill);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">📋 Réglementation</button>'
    + '</div>'
    + '<input id="regl-nom" type="text" placeholder="Nom (ex: Arrêté du 07/09/2009)" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;margin-bottom:6px;box-sizing:border-box">'
    + '<input id="regl-ref" type="text" placeholder="Référence (ex: JORF 09/10/2009)" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;margin-bottom:6px;box-sizing:border-box">'
    + '<textarea id="regl-texte" rows="3" placeholder="Points clés ou résumé (facultatif)" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;margin-bottom:8px;box-sizing:border-box;resize:vertical"></textarea>'
    + '<button onclick="addRegl()" style="width:100%;padding:9px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;font-weight:700;cursor:pointer">Enregistrer le texte</button>'
    + '</div>';
  if (regls.length) {
    regls.forEach(function(r, i) {
      html += '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-2);display:flex;align-items:flex-start;gap:var(--s-2)">'
        + '<input type="checkbox" id="chk-regl-' + i + '" checked style="width:16px;height:16px;accent-color:var(--c-primary);cursor:pointer;margin-top:2px;flex-shrink:0">'
        + '<div style="flex:1"><div style="font-size:12px;font-weight:700;margin-bottom:3px">📋 ' + r.nom + '</div>'
        + (r.ref ? '<div style="font-size:10px;font-weight:700;color:var(--c-primary);margin-bottom:4px">' + r.ref + '</div>' : '')
        + (r.texte ? '<div style="font-size:11px;color:var(--c-text-3);white-space:pre-wrap;line-height:1.5">' + r.texte + '</div>' : '')
        + '</div>'
        + '<button onclick="deleteRegl(' + i + ')" style="background:none;border:none;color:var(--c-danger);font-size:16px;cursor:pointer;padding:2px 4px">🗑️</button>'
        + '</div>';
    });
  } else {
    html += '<div style="text-align:center;padding:16px;color:var(--c-text-4);font-size:12px">Aucun texte réglementaire enregistré</div>';
  }
  html += '</div>';
  return html;
}

/* ─── MENUS CONTEXTUEL PROJET ─── */
function showProjectMenu(id, btn) {
  var menus = document.querySelectorAll('[id^="pm-"]');
  menus.forEach(function(m) { if (m.id !== 'pm-' + id) m.style.display = 'none'; });
  var m = document.getElementById('pm-' + id);
  if (m) m.style.display = m.style.display === 'block' ? 'none' : 'block';
  document.addEventListener('click', function closeMenu(e) {
    if (!e.target.closest('[id^="pm-"]') && !e.target.closest('button')) {
      if (m) m.style.display = 'none';
    }
    document.removeEventListener('click', closeMenu);
  }, { once: true });
}

/* ─── DÉPLACER UN CALCUL VERS UN PROJET ─── */
function showMoveMenu(calcIdx, btn) {
  var container = document.getElementById('move-menu-' + calcIdx);
  if (!container) return;
  if (container.style.display === 'block') { container.style.display = 'none'; return; }

  var projects = getSavedProjects();
  var allCalcs = getSavedCalcs();
  var c = allCalcs[calcIdx];
  var currentProjId = c ? c.projectId : null;

  var inner = '<div style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-md);padding:6px;margin-top:6px;box-shadow:var(--sh-2)">'
    + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;padding:4px 8px 6px">Déplacer vers…</div>';

  if (currentProjId) {
    inner += '<button onclick="moveCalcToProject(' + calcIdx + ',null)" style="display:block;width:100%;text-align:left;padding:7px 10px;background:none;border:none;font-family:var(--f-body);font-size:12px;cursor:pointer;border-radius:4px;color:var(--c-text-3)" onmouseover="this.style.background=\'var(--c-surface-2)\'" onmouseout="this.style.background=\'none\'">🗂️ Retirer du dossier</button>';
  }
  projects.forEach(function(p) {
    if (p.id === currentProjId) return;
    var col = PROJECT_COLORS.find(function(c){ return c.id === p.color; }) || PROJECT_COLORS[0];
    inner += '<button onclick="moveCalcToProject(' + calcIdx + ',\'' + p.id + '\')" style="display:block;width:100%;text-align:left;padding:7px 10px;background:none;border:none;font-family:var(--f-body);font-size:12px;cursor:pointer;border-radius:4px" onmouseover="this.style.background=\'var(--c-surface-2)\'" onmouseout="this.style.background=\'none\'">'
      + '<span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;background:' + col.bg + ';border-radius:4px;font-size:10px;margin-right:6px">' + (p.icon||'📁') + '</span>' + p.name
    + '</button>';
  });
  if (!projects.length) {
    inner += '<div style="padding:8px 10px;font-size:11px;color:var(--c-text-4)">Aucun projet créé</div>';
  }
  inner += '</div>';

  container.innerHTML = inner;
  container.style.display = 'block';
}

function moveCalcToProject(calcIdx, projectId) {
  var arr = getSavedCalcs();
  if (!arr[calcIdx]) return;
  if (projectId) arr[calcIdx].projectId = projectId;
  else delete arr[calcIdx].projectId;
  setSavedCalcs(arr);
  var container = document.getElementById('move-menu-' + calcIdx);
  if (container) container.style.display = 'none';
  if (_hcProjectView) openProject(_hcProjectView);
  else _renderProjectHome();
  authToast(projectId ? 'Calcul déplacé dans le projet ✓' : 'Calcul retiré du dossier ✓');
}

/* ─── CRUD PROJETS ─── */
function showNewProjectModal() {
  var existing = document.getElementById('hc-new-project');
  if (existing) existing.remove();

  var defaultColor = PROJECT_COLORS[0];
  var defaultIcon  = '📁';
  window._npColor  = defaultColor.id;
  window._npIcon   = defaultIcon;

  var colorsHtml = PROJECT_COLORS.map(function(c) {
    return '<button id="npc-' + c.id + '" onclick="selectProjectColor(\'' + c.id + '\')" title="' + c.label + '" '
      + 'style="width:28px;height:28px;border-radius:50%;background:' + c.bg + ';border:3px solid ' + (c.id === defaultColor.id ? '#fff' : 'transparent') + ';cursor:pointer;outline:2px solid ' + (c.id === defaultColor.id ? c.bg : 'transparent') + ';transition:all .15s"></button>';
  }).join('');

  var iconsHtml = PROJECT_ICONS.map(function(ico) {
    return '<button onclick="selectProjectIcon(\'' + ico + '\',this)" style="width:36px;height:36px;border:2px solid var(--c-border);border-radius:8px;background:var(--c-surface-2);font-size:18px;cursor:pointer;transition:all .15s" onmouseover="this.style.background=\'var(--c-primary-l)\'" onmouseout="this.style.background=\'var(--c-surface-2)\'">' + ico + '</button>';
  }).join('');

  var modal = document.createElement('div');
  modal.id = 'hc-new-project';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;align-items:flex-end;justify-content:stretch';

  modal.innerHTML = '<div style="background:var(--c-surface);border-radius:20px 20px 0 0;padding:24px 20px 32px;width:100%;box-sizing:border-box;max-height:85vh;overflow-y:auto;box-shadow:0 -8px 40px rgba(0,0,0,.2)">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">'
      + '<div style="font-size:16px;font-weight:800">Nouveau projet</div>'
      + '<button onclick="closeNewProjectModal()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer">✕</button>'
    + '</div>'
    + '<div id="np-preview" style="width:56px;height:56px;background:' + defaultColor.bg + ';border-radius:var(--r-lg);display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 20px">' + defaultIcon + '</div>'
    + '<div style="margin-bottom:16px">'
      + '<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">Nom du projet</div>'
      + '<input id="np-name" type="text" placeholder="Ex: Projet ANC — Commune de Bessèges" maxlength="60" '
        + 'style="width:100%;padding:10px 12px;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;box-sizing:border-box;outline:none" '
        + 'onfocus="this.style.borderColor=\'var(--c-primary)\'" onblur="this.style.borderColor=\'var(--c-border)\'">'
    + '</div>'
    + '<div style="margin-bottom:16px">'
      + '<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">Couleur</div>'
      + '<div style="display:flex;gap:8px;flex-wrap:wrap">' + colorsHtml + '</div>'
    + '</div>'
    + '<div style="margin-bottom:20px">'
      + '<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">Icône</div>'
      + '<div style="display:flex;gap:6px;flex-wrap:wrap">' + iconsHtml + '</div>'
    + '</div>'
    + '<button onclick="createProject()" style="width:100%;padding:13px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:14px;font-weight:800;cursor:pointer">Créer le projet</button>'
  + '</div>';

  modal.addEventListener('click', function(e) { if (e.target === modal) closeNewProjectModal(); });
  document.body.appendChild(modal);
  setTimeout(function() { var n = document.getElementById('np-name'); if (n) n.focus(); }, 100);
}

function selectProjectColor(colorId) {
  window._npColor = colorId;
  var col = PROJECT_COLORS.find(function(c){ return c.id === colorId; }) || PROJECT_COLORS[0];
  PROJECT_COLORS.forEach(function(c) {
    var btn = document.getElementById('npc-' + c.id);
    if (btn) { btn.style.border = '3px solid ' + (c.id === colorId ? '#fff' : 'transparent'); btn.style.outline = '2px solid ' + (c.id === colorId ? c.bg : 'transparent'); }
  });
  var preview = document.getElementById('np-preview');
  if (preview) preview.style.background = col.bg;
}

function selectProjectIcon(icon, btn) {
  window._npIcon = icon;
  document.querySelectorAll('#hc-new-project button[onclick^="selectProjectIcon"]').forEach(function(b) {
    b.style.background = 'var(--c-surface-2)'; b.style.borderColor = 'var(--c-border)';
  });
  if (btn) { btn.style.background = 'var(--c-primary-l)'; btn.style.borderColor = 'var(--c-primary)'; }
  var preview = document.getElementById('np-preview');
  if (preview) preview.textContent = icon;
}

function createProject() {
  var name = (document.getElementById('np-name') || {}).value || '';
  if (!name.trim()) { authToast('Donnez un nom au projet'); return; }
  var projects = getSavedProjects();
  var project = { id: Date.now() + '_' + Math.random().toString(36).slice(2,7), name: name.trim(), color: window._npColor || 'teal', icon: window._npIcon || '📁', date: Date.now() };
  projects.unshift(project);
  setSavedProjects(projects);
  closeNewProjectModal();
  _renderProjectHome();
  authToast('Projet "' + project.name + '" créé ✓');
}

function closeNewProjectModal() {
  var m = document.getElementById('hc-new-project');
  if (m) m.remove();
}

function renameProjectPrompt(id) {
  var projects = getSavedProjects();
  var p = projects.find(function(x){ return x.id === id; });
  if (!p) return;
  var newName = prompt('Nouveau nom du projet :', p.name);
  if (!newName || !newName.trim()) return;
  p.name = newName.trim();
  setSavedProjects(projects);
  _renderProjectHome();
}

function deleteProject(id) {
  if (!confirm('Supprimer ce projet ? Les calculs qu\'il contient passeront en "Sans dossier".')) return;
  var projects = getSavedProjects().filter(function(p){ return p.id !== id; });
  setSavedProjects(projects);
  /* Retirer le projectId de tous les calcs */
  var calcs = getSavedCalcs().map(function(c) {
    if (c.projectId === id) { delete c.projectId; } return c;
  });
  setSavedCalcs(calcs);
  _hcProjectView = null;
  _renderProjectHome();
  authToast('Projet supprimé · Calculs conservés en "Sans dossier"');
}

/* ─── RÉÉCRIRE deleteCalc et clearAllCalcs pour rester dans la bonne vue ─── */

function _refreshCurrentView() {
  if (_hcProjectView) openProject(_hcProjectView);
  else _renderProjectHome();
}

/* ─── SECTION "mes calculs" (pour générer _getSelectedCalcs depuis la vue projet) ─── */
function _getSelectedCalcs() {
  var arr = getSavedCalcs();
  /* Si on est dans un projet : ne prendre que les calcs de ce projet */
  if (_hcProjectView) arr = arr.filter(function(c){ return c.projectId === _hcProjectView; });
  var selected = [];
  arr.forEach(function(c, i) {
    /* L'index dans le DOM correspond à l'index global */
    var globalIdx = getSavedCalcs().indexOf(c);
    var cb = document.getElementById('chk-calc-' + globalIdx);
    if (!cb || cb.checked) selected.push(c);
  });
  if (!selected.length) return arr;
  return selected;
}

function deleteCalc(i) {
  var arr = getSavedCalcs();
  arr.splice(i, 1);
  setSavedCalcs(arr);
  _refreshCurrentView();
}

function _relaunchCalc(i) {
  var arr = getSavedCalcs();
  var c = arr[i];
  if (!c) return;
  var hasCalcId  = c.calcId && typeof showCalcById === 'function';
  var hasModule  = c.moduleId && typeof showModule === 'function';
  if (!hasCalcId && !hasModule) return;

  closeProfile();
  setTimeout(function() {
    if (hasCalcId) {
      showCalcById(c.calcId);
    } else {
      showModule(c.moduleId);
    }
    if (c.inputs && Object.keys(c.inputs).length) {
      setTimeout(function() {
        var filled = 0;
        Object.keys(c.inputs).forEach(function(id) {
          var el = document.getElementById(id);
          if (el) { el.value = c.inputs[id].value; filled++; }
        });
        if (filled > 0) {
          authToast('✓ ' + filled + ' champ' + (filled > 1 ? 's' : '') + ' rechargé' + (filled > 1 ? 's' : '') + ' — cliquez sur Calculer');
        } else {
          authToast('Calculateur ouvert — saisissez vos valeurs');
        }
      }, 350);
    }
  }, 150);
}
function clearAllCalcs() {
  if (confirm('Effacer tous les calculs enregistrés ?')) {
    setSavedCalcs([]);
    _hcProjectView = null;
    _renderProjectHome();
  }
}

/* ═══════════════════════════════════════════════════
   SYSTÈME D'AUTHENTIFICATION
═══════════════════════════════════════════════════ */

var AUTH = { user: null };

var PLANS_HC = {
  free:    { name:'Gratuit',        icon:'🌱', price:'0 €',        color:'var(--c-text-3)', badgeClass:'plan-free-badge' },
  pro:     { name:'Pro',            icon:'⚡', price:'5,90 €/mois', color:'#4A28A0',        badgeClass:'plan-pro-badge'  },
  etab:    { name:'Établissement',  icon:'🏛️', price:'24 €/mois',  color:'#065A48',        badgeClass:'plan-etab-badge' },
  admin:   { name:'Administrateur', icon:'🔑', price:'—',           color:'#A02020',        badgeClass:'plan-etab-badge' },
};

/* ─── HASH SHA-256 (Web Crypto API) ─── */
function _sha256(str) {
  var buf = new TextEncoder().encode(str);
  return crypto.subtle.digest('SHA-256', buf).then(function(hash) {
    return Array.from(new Uint8Array(hash)).map(function(b){ return b.toString(16).padStart(2,'0'); }).join('');
  });
}

/* ─── COMPTE ADMIN (hash stocké, jamais le mot de passe en clair) ─── */
var _ADMIN_EMAIL = 'eliandrif@gmail.com';
var _ADMIN_HASH  = '2636c9f40f1d5e38c2a8b5b27591b78195090b360e591231eeaa34a5677b619a';

/* Garantit que le compte admin reste admin/plan illimité quoi qu'il arrive
   en base (profil corrompu, plan changé par erreur, etc.) */
function _forceAdminIfNeeded(user) {
  if (user && user.email && user.email.toLowerCase() === _ADMIN_EMAIL) {
    user.plan = 'admin';
    user.isAdmin = true;
    if (SupaDB) {
      SupaDB.auth.getUser().then(function(res) {
        if (res.data && res.data.user && (res.data.user.id)) {
          SupaDB.from('profiles').update({ plan: 'admin', is_admin: true }).eq('id', res.data.user.id);
        }
      });
    }
  }
  return user;
}

/* Récupère le profil Supabase d'un utilisateur, avec nouvelle(s) tentative(s).
   Juste après un getSession()/signIn, le client Supabase peut mettre quelques
   centaines de ms à propager le JWT aux requêtes REST (RLS) → la requête
   `.single()` échoue alors avec une erreur 406 (0 ligne visible). On retente
   plutôt que d'abandonner immédiatement. */
function _fetchProfileWithRetry(userId, attemptsLeft) {
  attemptsLeft = (attemptsLeft === undefined) ? 4 : attemptsLeft;
  return SupaDB.from('profiles').select('*').eq('id', userId).single()
    .then(function(res) {
      if (res.error && attemptsLeft > 0) {
        return new Promise(function(resolve) {
          setTimeout(function() { resolve(_fetchProfileWithRetry(userId, attemptsLeft - 1)); }, 400);
        });
      }
      return res;
    });
}

function getHCAccounts() {
  const a = DataStore.accounts.getAll();
  delete a['demo@hydrocalc.fr'];
  return a;
}
function saveHCAccounts(a) { DataStore.accounts.saveAll(a); }

function toggleAuthPwd(inputId, btn) {
  var el = document.getElementById(inputId);
  if (!el) return;
  if (el.type === 'password') {
    el.type = 'text';
    btn.textContent = '🙈';
  } else {
    el.type = 'password';
    btn.textContent = '👁';
  }
}

function authShow(screenId) {
  document.querySelectorAll('.auth-screen').forEach(function(s){ s.classList.add('hidden'); });
  var el = document.getElementById(screenId);
  if (el) el.classList.remove('hidden');
}

function authToast(msg) {
  var el = document.getElementById('auth-toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(function(){ el.classList.remove('show'); }, 2500);
}

function authLogin() {
  var email      = (getV('login-email') || '').trim().toLowerCase();
  var pwd        = getV('login-pwd') || '';
  var remember   = document.getElementById('login-remember');
  var rememberMe = remember && remember.checked;
  var errEl      = document.getElementById('login-err');
  var btnEl      = document.querySelector('#auth-login .auth-btn-submit');
  if (errEl) errEl.style.display = 'none';


  if (!SupaDB) { authToast('Connexion impossible (hors-ligne)'); return; }
  if (btnEl) { btnEl.disabled = true; btnEl.textContent = 'Connexion…'; }

  var _supaLoginUser = null;
  SupaDB.auth.signInWithPassword({ email: email, password: pwd })
    .then(function(res) {
      if (res.error) throw new Error('auth');
      AUTH._uid = res.data.user.id;
      _supaLoginUser = res.data.user;
      return _fetchProfileWithRetry(res.data.user.id);
    })
    .then(function(res) {
      var p = res.data || {};
      AUTH.user = _forceAdminIfNeeded({
        email:      p.email      || email,
        name:       p.name       || email,
        plan:       p.plan       || 'free',
        isAdmin:    p.is_admin   || false,
        profile:    p.profile    || '',
        trialUsed:  p.trial_used || false,
        trialStart: p.trial_start ? new Date(p.trial_start).getTime() : null,
        invite_code: p.invite_code || null
      });
      _applyMetaCodeOverride(_supaLoginUser);
      if (rememberMe) DataStore.session.setRemember({ email: email, supa: true });
      else DataStore.session.clearRemember();
      _doEnterApp();
    })
    .catch(function() {
      if (errEl) errEl.style.display = 'block';
    })
    .finally(function() {
      if (btnEl) { btnEl.disabled = false; btnEl.textContent = 'Se connecter'; }
    });
}


function authRegister() {
  var name    = (getV('reg-name') || '').trim();
  var email   = (getV('reg-email') || '').trim().toLowerCase();
  var profile = getV('reg-profile') || '';
  var pwd     = getV('reg-pwd') || '';
  var pwd2    = getV('reg-pwd2') || '';
  var errEl   = document.getElementById('register-err');
  var btnEl   = document.querySelector('#auth-register .auth-btn-submit');
  var showErr = function(m){ if (errEl){ errEl.textContent = m; errEl.style.display = 'block'; } };
  if (!name)                return showErr('Veuillez indiquer votre nom.');
  if (!email.includes('@')) return showErr('Adresse e-mail invalide.');
  if (!profile)             return showErr('Choisissez votre profil.');
  if (pwd.length < 6)       return showErr('Mot de passe trop court (6 caractères minimum).');
  if (pwd !== pwd2)         return showErr('Les mots de passe ne correspondent pas.');

  if (!SupaDB) { authToast('Inscription impossible (hors-ligne)'); return; }
  if (btnEl) { btnEl.disabled = true; btnEl.textContent = 'Création…'; }

  var isAdminEmail = (email === _ADMIN_EMAIL);
  var inviteCode   = ((getV('reg-invite-code') || '').trim().toUpperCase()) || null;
  var planInit     = isAdminEmail ? 'admin' : (inviteCode ? 'etab' : 'free');

  /* Vérifier le code d'invitation si fourni */
  var codeCheck = (inviteCode && SupaDB)
    ? SupaDB.from('access_codes').select('code,used_by').eq('code', inviteCode).single()
    : Promise.resolve({ data: null, error: null });

  codeCheck.then(function(codeRes) {
    if (inviteCode) {
      if (!codeRes.data) { showErr('Code d\'accès invalide.'); if(btnEl){btnEl.disabled=false;btnEl.textContent='Créer mon compte';} return; }
      if (codeRes.data.used_by) { showErr('Ce code a déjà été utilisé.'); if(btnEl){btnEl.disabled=false;btnEl.textContent='Créer mon compte';} return; }
    }
    SupaDB.auth.signUp({ email: email, password: pwd })
      .then(function(res) {
        if (res.error) throw res.error;
        var uid = res.data.user.id;
        return SupaDB.rpc('create_profile', {
          p_id:       uid,
          p_email:    email,
          p_name:     name,
          p_profile:  profile,
          p_plan:     planInit,
          p_is_admin: isAdminEmail
        }).then(function() {
          if (inviteCode) {
            /* SECURITY DEFINER — fonctionne même sans session établie */
            SupaDB.rpc('claim_access_code', { p_code: inviteCode, p_user_id: uid }).catch(function(){});
          }
        });
      })
      .then(function() {
        AUTH.user = { email: email, name: name, plan: planInit, is_admin: isAdminEmail, profile: profile };
        AUTH._newRegistration = true;
        authToast('Compte créé ! Bienvenue ' + name.split(' ')[0] + (inviteCode ? ' — Accès Établissement activé 🎟️' : ' 🎉'));
        _doEnterApp();
      })
      .catch(function(err) {
        var msg = (err && err.message) || '';
        if (msg.includes('already registered') || msg.includes('already been registered')) {
          showErr('Un compte existe déjà avec cet email.');
        } else {
          showErr(msg || 'Erreur lors de la création du compte.');
        }
        if (btnEl) { btnEl.disabled = false; btnEl.textContent = 'Créer mon compte'; }
      });
  });
}

function _toggleInviteCode() {
  var field = document.getElementById('invite-code-field');
  if (field) field.style.display = field.style.display === 'none' ? 'block' : 'none';
}

function authForgot() {
  var email = (getV('forgot-email') || '').trim().toLowerCase();
  if (!email.includes('@')){ authToast('Email invalide'); return; }
  if (!SupaDB) { authToast('Impossible (hors-ligne)'); return; }
  SupaDB.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + window.location.pathname
  }).then(function() {
    authToast('Email de réinitialisation envoyé ✓');
    setTimeout(function(){ authShow('auth-login'); }, 1500);
  });
}

/* ─── Nouveau mot de passe (après clic sur le lien reçu par email) ─── */
function authUpdatePassword() {
  var pwd   = getV('reset-pwd')  || '';
  var pwd2  = getV('reset-pwd2') || '';
  var errEl = document.getElementById('reset-pwd-err');
  var btnEl = document.querySelector('#auth-reset-password .auth-btn-submit');
  var showErr = function(m){ if (errEl){ errEl.textContent = m; errEl.style.display = 'block'; } };

  if (pwd.length < 6)  return showErr('Mot de passe trop court (6 caractères minimum).');
  if (pwd !== pwd2)    return showErr('Les mots de passe ne correspondent pas.');
  if (!SupaDB)         return showErr('Impossible (hors-ligne).');

  if (errEl) errEl.style.display = 'none';
  if (btnEl) { btnEl.disabled = true; btnEl.textContent = 'Mise à jour…'; }

  SupaDB.auth.updateUser({ password: pwd })
    .then(function(res) {
      if (res.error) throw res.error;
      authToast('Mot de passe mis à jour ✓ Vous pouvez vous reconnecter.');
      SupaDB.auth.signOut().then(function() {
        AUTH.user = null;
        document.querySelectorAll('.auth-screen').forEach(function(s){ s.classList.add('hidden'); });
        authShow('auth-login');
      });
    })
    .catch(function(err) {
      showErr((err && err.message) || 'Erreur lors de la mise à jour.');
    })
    .finally(function() {
      if (btnEl) { btnEl.disabled = false; btnEl.textContent = 'Valider le nouveau mot de passe'; }
    });
}

function authContinueGuest() {
  AUTH.user = null;
  _doEnterApp();
}

function _doEnterApp() {
  if (AUTH.user) DataStore.session.setCurrent({ email: AUTH.user.email, isAdmin: AUTH.user.isAdmin || false });

  /* ── Démarrer le timer d'inactivité ── */
  _inactivityStart();

  /* ── Appliquer le statut d'essai ── */
  _applyTrialPlan();

  document.querySelectorAll('.auth-screen').forEach(function(s){ s.classList.add('hidden'); });
  var profileBtn = document.getElementById('profile-btn');
  if (profileBtn) {
    profileBtn.style.display = AUTH.user ? 'flex' : 'none';
    if (AUTH.user) {
      var initials = AUTH.user.name.split(' ').map(function(w){ return w[0]; }).join('').slice(0,2).toUpperCase();
      profileBtn.textContent = initials;
      profileBtn.style.fontFamily = 'var(--f-display)';
      profileBtn.style.fontSize   = '12px';
      profileBtn.style.background = 'var(--c-primary-l)';
      profileBtn.style.color      = 'var(--c-primary)';
      profileBtn.style.fontWeight = '700';
      profileBtn.style.borderColor = 'var(--c-primary-m)';
    }
  }
  var isNew = AUTH._newRegistration;
  AUTH._newRegistration = false;
  _showDedicaceScreen(function() {
    renderHome();
    if (isNew) setTimeout(_showTrialOffer, 600);
    else _checkTrialExpiredToast();
  });
}

/* ═══════════════════════════════════════════════════
   PÉRIODE D'ESSAI 7 JOURS
═══════════════════════════════════════════════════ */

function _getTrialStatus(user) {
  if (!user || user.isAdmin) return 'none';
  if (!user.trialUsed) return 'none';
  var elapsed = Date.now() - (user.trialStart || 0);
  return elapsed < 7 * 86400000 ? 'active' : 'expired';
}

function _trialDaysLeft(user) {
  if (!user || !user.trialStart) return 0;
  var remaining = 7 * 86400000 - (Date.now() - user.trialStart);
  return Math.max(0, Math.ceil(remaining / 86400000));
}

function _applyTrialPlan() {
  if (!AUTH.user || AUTH.user.isAdmin) return;
  var status = _getTrialStatus(AUTH.user);
  if (status === 'active') {
    AUTH.user._basePlan = AUTH.user.plan;
    AUTH.user.plan = 'pro';
  } else if (status === 'expired' && AUTH.user.plan === 'pro' && AUTH.user._basePlan) {
    AUTH.user.plan = AUTH.user._basePlan;
  }
}

function startTrial() {
  if (!AUTH.user) return;
  var status = _getTrialStatus(AUTH.user);
  if (status !== 'none') { authToast('Essai déjà utilisé sur ce compte.'); _closeTrialModal(); return; }
  var accounts = getHCAccounts();
  var acc = accounts[AUTH.user.email];
  if (!acc) return;
  acc.trialUsed  = true;
  acc.trialStart = Date.now();
  saveHCAccounts(accounts);
  AUTH.user.trialUsed  = true;
  AUTH.user.trialStart = acc.trialStart;
  AUTH.user._basePlan  = AUTH.user.plan;
  AUTH.user.plan       = 'pro';
  _closeTrialModal();
  authToast('🎉 Essai Pro activé — 7 jours d\'accès illimité !');
  if (typeof renderSidebarPlans === 'function') renderSidebarPlans();
}

function _closeTrialModal() {
  var m = document.getElementById('hc-trial-modal');
  if (m) m.remove();
}

function _checkTrialExpiredToast() {
  if (!AUTH.user) return;
  var status = _getTrialStatus(AUTH.user);
  if (status === 'expired') {
    setTimeout(function() {
      authToast('Votre essai Pro de 7 jours est terminé. Passez à Pro pour continuer.');
    }, 1200);
  }
}

function _showTrialOffer() {
  if (!AUTH.user) return;
  if (_getTrialStatus(AUTH.user) !== 'none') return;

  var modal = document.createElement('div');
  modal.id = 'hc-trial-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-end';

  modal.innerHTML = '<div style="background:var(--c-surface);border-radius:20px 20px 0 0;padding:28px 24px 36px;max-height:80vh;overflow-y:auto">'
    + '<div style="text-align:center;margin-bottom:20px">'
      + '<div style="font-size:44px;margin-bottom:10px">🎉</div>'
      + '<div style="font-size:19px;font-weight:800;color:var(--c-text);margin-bottom:6px">Bienvenue sur HydroCalc !</div>'
      + '<div style="font-size:13px;color:var(--c-text-3);line-height:1.6">Profitez de <strong style="color:var(--c-primary)">7 jours d\'accès Pro gratuit</strong><br>pour découvrir toutes les fonctionnalités.</div>'
    + '</div>'
    + '<div style="background:var(--c-primary-l);border:1.5px solid var(--c-primary);border-radius:14px;padding:16px;margin-bottom:20px">'
      + '<div style="font-size:11px;font-weight:800;color:var(--c-primary);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Inclus pendant l\'essai</div>'
      + ['🧮 Calculateurs avancés illimités', '📄 Export rapports (ODT · DOCX)', '🛠️ Outils de terrain', '📚 Cours & flashcards complets', '💾 Sauvegarde illimitée'].map(function(f) {
          return '<div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--c-text-2);margin-bottom:6px">'
            + '<span style="color:var(--c-ok);font-weight:700">✓</span>' + f + '</div>';
        }).join('')
    + '</div>'
    + '<button onclick="startTrial()" style="width:100%;padding:14px;background:var(--c-primary);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:800;cursor:pointer;font-family:var(--f-body);margin-bottom:10px">🚀 Démarrer mon essai gratuit</button>'
    + '<button onclick="_closeTrialModal()" style="width:100%;padding:11px;background:none;border:none;font-size:13px;color:var(--c-text-4);cursor:pointer;font-family:var(--f-body)">Plus tard</button>'
  + '</div>';

  modal.addEventListener('click', function(e) { if (e.target === modal) _closeTrialModal(); });
  document.body.appendChild(modal);
}

function _showDedicaceScreen(onDone) {
  var overlay = document.createElement('div');
  overlay.id = 'hc-dedicace';
  overlay.style.cssText = [
    'position:fixed;inset:0;z-index:99999',
    'background:var(--c-bg)',
    'display:flex;flex-direction:column;align-items:center;justify-content:center',
    'padding:40px 32px',
    'opacity:0;transition:opacity .6s ease',
    'pointer-events:none',
  ].join(';');

  overlay.innerHTML = [
    '<div style="font-family:var(--f-display);font-size:52px;font-weight:800;color:var(--c-primary);letter-spacing:.06em;text-align:center">',
      'HYDROCALC',
    '</div>',
    '<div style="position:absolute;bottom:52px;left:0;right:0;text-align:center">',
      '<p style="font-family:var(--f-display);font-size:12px;font-style:italic;color:var(--c-text-4);line-height:1.7">',
        'Inspiré de notre grand maître à tous — <span style="color:var(--c-text-3);font-weight:600">J.M.R</span>',
      '</p>',
    '</div>',
  ].join('');

  document.body.appendChild(overlay);

  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      overlay.style.opacity = '1';
      setTimeout(function() {
        overlay.style.opacity = '0';
        setTimeout(function() {
          overlay.remove();
          onDone();
        }, 600);
      }, 2000);
    });
  });
}

function authLogout() {
  if (SupaDB) SupaDB.auth.signOut();
  DataStore.session.clearCurrent();
  DataStore.session.clearRemember();
  AUTH.user = null;
  _inactivityStop();
  document.querySelectorAll('.auth-screen').forEach(function(s){ s.classList.add('hidden'); });
  var _as=document.getElementById('auth-splash'); if(_as) _as.classList.remove('hidden');
  var profileBtn = document.getElementById('profile-btn');
  if (profileBtn){ profileBtn.style.display = 'none'; profileBtn.textContent = '👤'; }
  authToast('Déconnexion réussie');
}

/* ─── Déconnexion automatique après 20 min d'inactivité ─── */
var _inactivityTimer = null;
var _INACTIVITY_MS = 20 * 60 * 1000;

function _inactivityReset() {
  if (!AUTH.user) return;
  clearTimeout(_inactivityTimer);
  _inactivityTimer = setTimeout(function() {
    if (!AUTH.user) return;
    authToast('Session expirée — reconnexion requise');
    setTimeout(function() { authLogout(); }, 1500);
  }, _INACTIVITY_MS);
}

function _inactivityStop() {
  clearTimeout(_inactivityTimer);
  _inactivityTimer = null;
}

function _inactivityStart() {
  ['mousemove','mousedown','keydown','touchstart','scroll','click'].forEach(function(ev) {
    document.addEventListener(ev, _inactivityReset, { passive: true });
  });
  _inactivityReset();
}

function _applyMetaCodeOverride(supaUser) {
  /* supaUser = objet user Supabase (contient user_metadata) — appelé de façon synchrone */
  if (!AUTH.user || !supaUser) return;
  var meta = supaUser.user_metadata || {};
  if (meta.hc_code) {
    AUTH.user.plan = 'etab';
    AUTH.user.invite_code = meta.hc_code;
  }
}

function _applyLocalCodeOverride(uid) {
  /* Conservé pour compatibilité — ne fait plus rien (remplacé par _applyMetaCodeOverride) */
}

function applyAccessCode() {
  var code = ((document.getElementById('profile-access-code') || {}).value || '').trim().toUpperCase();
  if (!code) { authToast('Entrez un code d\'accès.'); return; }
  if (!AUTH.user) { authToast('Connexion requise.'); return; }
  if (!code.match(/^HC-[A-Z0-9]{4}-[A-Z0-9]{4}$/)) { authToast('Code invalide. Format attendu : HC-XXXX-XXXX'); return; }
  if (!SupaDB) { authToast('Connexion internet requise.'); return; }

  var btn = document.querySelector('#profile-access-code + button');
  if (btn) { btn.disabled = true; btn.textContent = '…'; }

  /* updateUser() modifie les métadonnées du compte auth — toujours autorisé */
  SupaDB.auth.updateUser({ data: { hc_code: code, hc_plan: 'etab' } })
    .then(function(res) {
      if (res.error) throw res.error;
      /* Marquer le code utilisé dans access_codes (best-effort, pour le Coffre admin) */
      SupaDB.auth.getUser().then(function(ur) {
        var uid = ur.data && ur.data.user && ur.data.user.id;
        if (uid) SupaDB.from('access_codes').update({ used_by: uid, used_at: new Date().toISOString() }).eq('code', code).catch(function(){});
      }).catch(function(){});
      AUTH.user.plan = 'etab';
      AUTH.user.invite_code = code;
      if (btn) { btn.disabled = false; btn.textContent = 'Appliquer'; }
      authToast('✅ Code appliqué — Accès Établissement activé en permanence !');
      buildProfile();
      if (typeof renderSidebarPlans === 'function') renderSidebarPlans();
    })
    .catch(function(err) {
      if (btn) { btn.disabled = false; btn.textContent = 'Appliquer'; }
      authToast('Erreur : ' + ((err && err.message) || 'impossible d\'appliquer le code.'));
    });
}

function removeAccessCode() {
  if (!AUTH.user || !SupaDB) return;
  if (!confirm('Retirer le code d\'accès ? Votre compte repassera en plan Gratuit.')) return;
  SupaDB.auth.updateUser({ data: { hc_code: null, hc_plan: null } })
    .then(function(res) {
      if (res.error) throw res.error;
      AUTH.user.plan = 'free';
      AUTH.user.invite_code = null;
      authToast('Code retiré. Compte repassé en Gratuit.');
      buildProfile();
      if (typeof renderSidebarPlans === 'function') renderSidebarPlans();
    })
    .catch(function(err) { authToast('Erreur : ' + ((err && err.message) || 'impossible de retirer le code.')); });
}

function openProfile() {
  if (!AUTH.user){ authShow('auth-login'); return; }
  buildProfile();
  authShow('auth-profile');
}

function closeProfile() {
  var _apr=document.getElementById('auth-profile'); if(_apr) _apr.classList.add('hidden');
}

function buildProfile() {
  var u = AUTH.user;
  var plan = PLANS_HC[u.plan] || PLANS_HC.gratuit;
  var initials = u.name.split(' ').map(function(w){ return w[0]; }).join('').slice(0,2).toUpperCase();
  var profileLabels = { 'etudiant-bts':'Étudiant BTS GEMEAU','etudiant-sup':'Étudiant BUT / Master','technicien':'Technicien eau','ingenieur':'Ingénieur hydraulicien','spanc':'Agent SPANC','collectivite':'Agent collectivité','bureau-etude':'Bureau d\'études','autre':'Professionnel' };
  var joined = new Date(u.joined).toLocaleDateString('fr-FR', {day:'numeric',month:'long',year:'numeric'});

  var html = '<div class="profile-hero">'
    + '<div class="profile-avatar">' + initials + '</div>'
    + '<div class="profile-name">' + u.name + '</div>'
    + '<div class="profile-email">' + u.email + '</div>'
    + '<div style="margin-bottom:var(--s-3)"><span class="profile-plan-badge ' + plan.badgeClass + '">' + plan.icon + ' ' + plan.name + '</span></div>'
    + '<div class="profile-stats">'
    + '<div class="pstat"><div class="pstat-val">' + (u.history||[]).length + '</div><div class="pstat-lbl">Modules vus</div></div>'
    + '<div class="pstat"><div class="pstat-val">' + (u.favorites||[]).length + '</div><div class="pstat-lbl">Favoris</div></div>'
    + '<div class="pstat"><div class="pstat-val">' + Math.floor((Date.now()-u.joined)/86400000) + '</div><div class="pstat-lbl">Jours membre</div></div>'
    + '</div></div>';

  // Infos personnelles
  html += '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Informations personnelles</div>'
    + '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-lg);overflow:hidden;box-shadow:var(--sh-1)">';
  [['👤','Nom',u.name],['📧','Email',u.email],['💼','Profil',profileLabels[u.profile]||u.profile||'—'],['📅','Membre depuis',joined]].forEach(function(row){
    html += '<div style="display:flex;align-items:center;gap:var(--s-3);padding:12px var(--s-4);border-bottom:1px solid var(--c-border)">'
      + '<span style="font-size:16px;flex-shrink:0">' + row[0] + '</span>'
      + '<div style="flex:1"><div style="font-size:10px;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.04em;font-weight:700">' + row[1] + '</div>'
      + '<div style="font-size:13px;font-weight:500;margin-top:1px">' + row[2] + '</div></div></div>';
  });
  html += '</div></div>';

  // Mes calculs enregistrés
  var nbCalcs = getSavedCalcs().length;
  html += '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div class="plan-row" onclick="renderCalcHistory()" style="cursor:pointer">'
    + '<div class="plan-row-ico">💾</div>'
    + '<div class="plan-row-info"><div class="plan-row-name">Mes calculs enregistrés</div>'
    + '<div class="plan-row-desc">' + nbCalcs + ' calcul(s) sauvegardé(s)</div></div>'
    + '<div style="font-size:18px;color:var(--c-text-4)">›</div>'
    + '</div></div>';

  // Abonnements
  html += '<div style="padding:var(--s-3) var(--s-4) 0"><div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Mon abonnement</div>';
  Object.entries(PLANS_HC).forEach(function(entry){
    var pid = entry[0]; var p = entry[1];
    if (pid === 'admin' && u.plan !== 'admin') return; /* le plan admin n'est pas un choix proposé aux autres utilisateurs */
    var isCurrent = u.plan === pid;
    html += '<div class="plan-row' + (isCurrent?' current':'') + '" onclick="' + (u.plan==='admin' ? 'void(0)' : 'selectHCPlan(\''+pid+'\')') + '">'
      + '<div class="plan-row-ico">' + p.icon + '</div>'
      + '<div class="plan-row-info"><div class="plan-row-name">' + p.name + (isCurrent?' ✓':'') + '</div>'
      + '<div class="plan-row-desc">' + (pid==='free'?'Accès complet à l\'application':pid==='pro'?'Plateforme QCM + modules avancés':pid==='etab'?'Licence établissement · QCM illimités':'Compte administrateur') + '</div></div>'
      + '<div class="plan-row-price" style="color:' + p.color + '">' + p.price + '</div></div>';
  });
  html += '</div>';

  // Upgrade si gratuit
  if (u.plan === 'free') {
    html += '<div class="upgrade-banner"><div class="ub-ico">⭐</div><div class="ub-text"><div class="ub-title">Passez à Pro</div><div class="ub-sub">Plateforme QCM · 600 questions · Historique progression</div></div><button class="ub-btn" onclick="selectHCPlan(\'pro\')">5,90 €/mois</button></div>';
  }

  /* Annuler / gérer l'abonnement via portail Stripe */
  if (u.plan === 'pro' || u.plan === 'etab') {
    html += '<div style="padding:var(--s-2) var(--s-4) 0">'
      + '<button onclick="stripeOpenPortal()" style="width:100%;padding:11px;background:none;border:1.5px solid var(--c-border);border-radius:var(--r-lg);font-family:var(--f-body);font-size:12.5px;font-weight:600;color:var(--c-text-3);cursor:pointer">Gérer mon abonnement</button>'
    + '</div>';
  }

  /* Compteur abonnés + Coffre — admin seulement */
  if (u.plan === 'admin') {
    html += '<div id="admin-stats" style="padding:var(--s-2) var(--s-4) 0">'
      + '<div style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:var(--r-lg);padding:14px 16px">'
      + '<div style="color:rgba(255,255,255,.7);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Abonnés en temps réel</div>'
      + '<div id="admin-stats-inner" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">'
      + '<div style="text-align:center"><div style="font-size:20px;font-weight:800;color:#fff" id="stat-free">…</div><div style="font-size:10px;color:rgba(255,255,255,.6)">Free</div></div>'
      + '<div style="text-align:center"><div style="font-size:20px;font-weight:800;color:#fbbf24" id="stat-pro">…</div><div style="font-size:10px;color:rgba(255,255,255,.6)">Pro</div></div>'
      + '<div style="text-align:center"><div style="font-size:20px;font-weight:800;color:#60a5fa" id="stat-etab">…</div><div style="font-size:10px;color:rgba(255,255,255,.6)">Établ.</div></div>'
      + '</div></div></div>';
    html += '<div style="padding:4px var(--s-4) 0">'
      + '<button onclick="openCoffre()" style="width:100%;padding:12px;background:linear-gradient(135deg,#7c3aed,#a855f7);border:none;border-radius:var(--r-lg);font-family:var(--f-body);font-size:13px;font-weight:700;color:#fff;cursor:pointer">🗄️ Coffre Admin · Codes d\'accès</button>'
    + '</div>';
  }

  // Code d'accès
  var _activeCode = u.invite_code || (AUTH._uid ? (function(){ try{ return localStorage.getItem('hc_active_code_' + AUTH._uid); }catch(e){ return null; } })() : null);
  html += '<div style="padding:var(--s-3) var(--s-4) 0">'
    + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Code d\'accès</div>'
    + '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-lg);padding:14px var(--s-4)">';
  if (u.plan === 'etab' && !u.is_admin) {
    html += '<div style="display:flex;align-items:center;gap:var(--s-3);margin-bottom:10px">'
      + '<span style="font-size:20px">🎟️</span>'
      + '<div style="flex:1">'
        + '<div style="font-size:10px;color:var(--c-text-4);text-transform:uppercase;font-weight:700;letter-spacing:.04em">Code actif</div>'
        + '<div style="font-size:15px;font-weight:900;color:var(--c-primary);letter-spacing:.12em;margin-top:2px">' + (_activeCode || '—') + '</div>'
        + '<div style="font-size:10px;color:var(--c-ok,#166038);margin-top:2px;font-weight:600">✓ Accès Établissement activé en permanence</div>'
      + '</div>'
    + '</div>'
    + '<button onclick="removeAccessCode()" style="width:100%;padding:9px;background:none;border:1.5px solid var(--c-border);border-radius:var(--r-lg);font-family:var(--f-body);font-size:12px;font-weight:700;color:var(--c-text-3);cursor:pointer">Retirer ce code</button>';
  } else {
    html += '<div style="font-size:12px;color:var(--c-text-3);margin-bottom:10px">Entrez un code d\'accès pour activer un accès Établissement permanent.</div>'
      + '<div style="display:flex;gap:8px">'
        + '<input id="profile-access-code" type="text" placeholder="HC-XXXX-XXXX" maxlength="14" oninput="this.value=this.value.toUpperCase()" style="flex:1;padding:9px 12px;border:1.5px solid var(--c-border);border-radius:var(--r-lg);font-family:var(--f-body);font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:var(--c-surface-2);color:var(--c-text)">'
        + '<button onclick="applyAccessCode()" style="padding:9px 16px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-lg);font-family:var(--f-body);font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap">Appliquer</button>'
      + '</div>';
  }
  html += '</div></div>';

  // Déconnexion
  html += '<div style="padding:var(--s-3) var(--s-4) var(--s-2)">'
    + '<button onclick="authLogout()" style="width:100%;padding:12px;background:var(--c-danger-l);color:var(--c-danger);border:1.5px solid var(--c-danger);border-radius:var(--r-lg);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer">Se déconnecter</button></div>';

  // Zone de danger : suppression du compte
  if (u.plan !== 'admin') {
    html += '<div style="padding:var(--s-2) var(--s-4) var(--s-6)">'
      + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Zone de danger</div>'
      + '<button onclick="deleteMyAccount()" style="width:100%;padding:12px;background:none;border:1.5px solid var(--c-danger);border-radius:var(--r-lg);font-family:var(--f-body);font-size:13px;font-weight:700;color:var(--c-danger);cursor:pointer">🗑️ Supprimer mon compte définitivement</button>'
      + '<div style="font-size:10.5px;color:var(--c-text-4);text-align:center;margin-top:6px">Toutes vos données seront définitivement effacées. Action irréversible.</div>'
    + '</div>';
  }

  document.getElementById('profile-content').innerHTML = html;

  /* Charger les stats abonnés en temps réel (admin uniquement) */
  if (u.plan === 'admin' && SupaDB) {
    SupaDB.from('profiles').select('plan').then(function(res) {
      if (!res.data) return;
      var free = res.data.filter(function(p){return p.plan==='free';}).length;
      var pro  = res.data.filter(function(p){return p.plan==='pro';}).length;
      var etab = res.data.filter(function(p){return p.plan==='etab';}).length;
      var fEl = document.getElementById('stat-free');
      var pEl = document.getElementById('stat-pro');
      var eEl = document.getElementById('stat-etab');
      if (fEl) fEl.textContent = free;
      if (pEl) pEl.textContent = pro;
      if (eEl) eEl.textContent = etab;
    });
  }
}

/* ─── Suppression définitive du compte ─── */
function deleteMyAccount() {
  if (!AUTH.user || !SupaDB) { authToast('Impossible (hors-ligne)'); return; }
  if (!confirm('Supprimer définitivement votre compte HydroCalc ?\n\nToutes vos données (calculs, projets, formules, QCM) seront perdues. Cette action est irréversible.')) return;
  if (!confirm('Dernière confirmation : voulez-vous vraiment supprimer votre compte "' + AUTH.user.email + '" ?')) return;

  var email = AUTH.user.email;
  authToast('Suppression en cours…');

  SupaDB.rpc('delete_user')
    .then(function(res) {
      if (res.error) throw res.error;
      if (typeof DataStore !== 'undefined' && DataStore.clearUserData) DataStore.clearUserData(email);
      DataStore.session.clearCurrent();
      DataStore.session.clearRemember();
      return SupaDB.auth.signOut();
    })
    .then(function() {
      AUTH.user = null;
      document.querySelectorAll('.auth-screen').forEach(function(s){ s.classList.add('hidden'); });
      authShow('auth-splash');
      authToast('Compte supprimé. Au revoir !');
    })
    .catch(function(err) {
      authToast('Erreur : ' + ((err && err.message) || 'impossible de supprimer le compte.'));
    });
}

function selectHCPlan(planId) {
  if (!AUTH.user) return;

  /* Annulation → portail Stripe si abonné payant avec compte Supabase */
  if (planId === 'free' && (AUTH.user.plan === 'pro' || AUTH.user.plan === 'etab') && SupaDB) {
    if (typeof stripeOpenPortal === 'function') { stripeOpenPortal(); return; }
  }

  /* Espace établissement si déjà abonné */
  if (planId === 'etab' && (AUTH.user.plan === 'etab' || AUTH.user.plan === 'admin')) {
    if (typeof showEtabEspace === 'function') showEtabEspace(); return;
  }

  /* Upgrade vers plan payant → Stripe Checkout */
  if (planId === 'etab' && SupaDB) {
    showEtabPricingModal(); return;
  }
  if (planId === 'pro' && SupaDB) {
    showProPricingModal(); return;
  }

  /* Fallback direct (compte démo local ou admin) */
  AUTH.user.plan = planId;
  if (SupaDB) {
    SupaDB.auth.getUser().then(function(res) {
      if (res.data && res.data.user) {
        SupaDB.from('profiles').update({ plan: planId }).eq('id', res.data.user.id);
      }
    });
  }
  var accounts = getHCAccounts();
  if (accounts[AUTH.user.email]) { accounts[AUTH.user.email].plan = planId; saveHCAccounts(accounts); }
  authToast('Abonnement ' + PLANS_HC[planId].name + ' activé ✓');
  buildProfile();
}

/* ─── DASHBOARD ADMIN "COFFRE" ─── */
function openCoffre() {
  if (!AUTH.user || AUTH.user.plan !== 'admin') return;
  authShow('auth-coffre');
  buildCoffre();
}

function buildCoffre() {
  var el = document.getElementById('coffre-content');
  if (!el) return;
  el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--c-text-3)">Chargement…</div>';

  if (!SupaDB) { el.innerHTML = '<div style="padding:24px;color:var(--c-text-3)">Supabase non connecté.</div>'; return; }

  Promise.all([
    SupaDB.from('profiles').select('id,email,name,plan,joined_at').order('joined_at', { ascending: false }),
    SupaDB.from('payments').select('amount_cents,currency,status,created_at').order('created_at', { ascending: false }).limit(100),
    SupaDB.from('subscriptions').select('plan,status').eq('status', 'active'),
    SupaDB.from('access_codes').select('code,used_by,used_at').order('code')
  ]).then(function(results) {
    var profiles    = (results[0].data || []);
    var payments    = (results[1].data || []);
    /* Construire une map code→{used_by} pour _renderEtabCodesInCoffre */
    var supaCodesMap = {};
    (results[3].data || []).forEach(function(c){ supaCodesMap[c.code] = c; });
    window._coffreSupaCodes = supaCodesMap;
    var activeSubs  = (results[2].data || []);
    var accessCodes = (results[3].data || []);

    var totalRevCents = payments.filter(function(p) { return p.status === 'succeeded'; })
      .reduce(function(acc, p) { return acc + p.amount_cents; }, 0);
    var countPro  = profiles.filter(function(p) { return p.plan === 'pro'; }).length;
    var countEtab = profiles.filter(function(p) { return p.plan === 'etab'; }).length;
    var countFree = profiles.filter(function(p) { return p.plan === 'free'; }).length;

    var html = '<div style="padding:0 var(--s-4) var(--s-6)">';

    /* Résumé KPI */
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">';
    var kpis = [
      { label:'Revenu total', val: (totalRevCents/100).toFixed(2) + ' €', ico:'💰' },
      { label:'Abonnés actifs', val: activeSubs.length, ico:'✅' },
      { label:'Comptes Pro', val: countPro, ico:'⭐' },
      { label:'Comptes Établ.', val: countEtab, ico:'🏫' },
      { label:'Comptes Free', val: countFree, ico:'🆓' },
      { label:'Total inscrits', val: profiles.length, ico:'👤' },
    ];
    kpis.forEach(function(k) {
      html += '<div style="background:var(--c-surface);border-radius:var(--r-lg);padding:14px 16px;border:1px solid var(--c-border)">'
        + '<div style="font-size:20px;margin-bottom:4px">' + k.ico + '</div>'
        + '<div style="font-size:22px;font-weight:800;color:var(--c-text)">' + k.val + '</div>'
        + '<div style="font-size:11px;color:var(--c-text-3);margin-top:2px">' + k.label + '</div>'
        + '</div>';
    });
    html += '</div>';

    /* Derniers paiements */
    html += '<div style="font-weight:700;font-size:14px;margin-bottom:10px">Derniers paiements</div>';
    if (!payments.length) {
      html += '<div style="color:var(--c-text-3);font-size:13px">Aucun paiement enregistré.</div>';
    } else {
      html += '<div style="display:flex;flex-direction:column;gap:8px">';
      payments.slice(0, 15).forEach(function(p) {
        var date = new Date(p.created_at).toLocaleDateString('fr-FR');
        var ok   = p.status === 'succeeded';
        html += '<div style="display:flex;justify-content:space-between;align-items:center;background:var(--c-surface);border-radius:var(--r-md);padding:10px 14px;border:1px solid var(--c-border)">'
          + '<div><div style="font-size:13px;font-weight:600">' + (p.amount_cents/100).toFixed(2) + ' ' + p.currency.toUpperCase() + '</div>'
          + '<div style="font-size:11px;color:var(--c-text-3)">' + date + '</div></div>'
          + '<div style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;background:' + (ok?'#d1fae5':'#fee2e2') + ';color:' + (ok?'#065f46':'#991b1b') + '">' + (ok?'OK':'Échec') + '</div>'
          + '</div>';
      });
      html += '</div>';
    }

    /* ── Annuaire des inscrits ── */
    window._coffreProfiles = profiles;
    var allEmails = profiles.map(function(p){ return p.email; }).join(', ');
    html += '<div style="font-weight:700;font-size:14px;margin:22px 0 10px;display:flex;align-items:center;gap:8px">'
      + '📋 Annuaire des inscrits'
      + '<span style="font-size:12px;font-weight:600;padding:2px 9px;border-radius:20px;background:var(--c-primary);color:#fff">' + profiles.length + '</span>'
      + '</div>';
    html += '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">'
      + '<input id="coffre-search" oninput="coffreSearch()" placeholder="🔍 Rechercher par nom ou email…" style="flex:1;min-width:180px;padding:8px 12px;border-radius:var(--r-md);border:1px solid var(--c-border);background:var(--c-surface);color:var(--c-text);font-size:12px;font-family:var(--f-body)">'
      + '<button onclick="coffreCopyAllEmails()" style="padding:7px 14px;border-radius:var(--r-md);border:1px solid var(--c-border);background:var(--c-surface);color:var(--c-text);font-size:12px;font-weight:600;cursor:pointer;font-family:var(--f-body);white-space:nowrap">📧 Copier tous les emails</button>'
      + '<button onclick="coffreExportCSV()" style="padding:7px 14px;border-radius:var(--r-md);border:1px solid var(--c-border);background:var(--c-surface);color:var(--c-text);font-size:12px;font-weight:600;cursor:pointer;font-family:var(--f-body);white-space:nowrap">⬇️ Exporter CSV</button>'
      + '</div>';
    html += '<div style="overflow-x:auto;border-radius:var(--r-lg);border:1px solid var(--c-border)">'
      + '<table id="coffre-user-table" style="width:100%;border-collapse:collapse;font-size:12px">'
      + '<thead><tr style="background:var(--c-surface-2,var(--c-surface));border-bottom:2px solid var(--c-border)">'
      + '<th style="padding:9px 12px;text-align:left;font-weight:700;color:var(--c-text-2)">Nom</th>'
      + '<th style="padding:9px 12px;text-align:left;font-weight:700;color:var(--c-text-2)">Email</th>'
      + '<th style="padding:9px 12px;text-align:left;font-weight:700;color:var(--c-text-2)">Plan</th>'
      + '<th style="padding:9px 12px;text-align:left;font-weight:700;color:var(--c-text-2)">Inscrit le</th>'
      + '<th style="padding:9px 12px;text-align:left;font-weight:700;color:var(--c-text-2)">Actions</th>'
      + '</tr></thead>'
      + '<tbody>';
    profiles.forEach(function(p, idx) {
      var planColor = { free:'#6b7280', pro:'#d97706', etab:'#2563eb', admin:'#7c3aed' }[p.plan] || '#6b7280';
      var planLabel = { free:'Free', pro:'Pro ⭐', etab:'Établ. 🏫', admin:'Admin 🔑' }[p.plan] || p.plan;
      var joinDate  = p.joined_at ? new Date(p.joined_at).toLocaleDateString('fr-FR') : '—';
      var rowBg = idx % 2 === 0 ? 'background:var(--c-surface)' : 'background:var(--c-bg,var(--c-surface))';
      html += '<tr class="coffre-user-row" data-name="' + (p.name || '').toLowerCase() + '" data-email="' + (p.email || '').toLowerCase() + '" style="' + rowBg + ';border-bottom:1px solid var(--c-border)">'
        + '<td style="padding:9px 12px;font-weight:600;color:var(--c-text)">' + (p.name || '<em style="color:var(--c-text-3)">—</em>') + '</td>'
        + '<td style="padding:9px 12px">'
          + '<a href="mailto:' + p.email + '" style="color:var(--c-primary);text-decoration:none;font-family:monospace;font-size:11px">' + p.email + '</a>'
        + '</td>'
        + '<td style="padding:9px 12px"><span style="font-size:11px;font-weight:700;padding:2px 9px;border-radius:20px;background:' + planColor + '22;color:' + planColor + '">' + planLabel + '</span></td>'
        + '<td style="padding:9px 12px;color:var(--c-text-3)">' + joinDate + '</td>'
        + '<td style="padding:9px 12px">'
          + '<button onclick="coffreCopyEmail(\'' + p.email + '\')" title="Copier l\'email" style="padding:3px 8px;border-radius:6px;border:1px solid var(--c-border);background:transparent;color:var(--c-text-3);font-size:11px;cursor:pointer;font-family:var(--f-body)">📋</button>'
          + (p.plan !== 'admin' ? ' <button onclick="coffrePlanChange(\'' + p.id + '\',\'pro\')" title="Passer Pro" style="padding:3px 8px;border-radius:6px;border:1.5px solid #d97706;background:' + (p.plan==='pro'?'#d97706':'transparent') + ';color:' + (p.plan==='pro'?'#fff':'#d97706') + ';font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)" ' + (p.plan==='pro'?'disabled':'') + '>Pro</button>'
            + ' <button onclick="coffrePlanChange(\'' + p.id + '\',\'etab\')" title="Passer Établ." style="padding:3px 8px;border-radius:6px;border:1.5px solid #2563eb;background:' + (p.plan==='etab'?'#2563eb':'transparent') + ';color:' + (p.plan==='etab'?'#fff':'#2563eb') + ';font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)" ' + (p.plan==='etab'?'disabled':'') + '>Établ.</button>'
            + ' <button onclick="coffrePlanChange(\'' + p.id + '\',\'free\')" title="Repasser Free" style="padding:3px 8px;border-radius:6px;border:1.5px solid #6b7280;background:' + (p.plan==='free'?'#6b7280':'transparent') + ';color:' + (p.plan==='free'?'#fff':'#6b7280') + ';font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)" ' + (p.plan==='free'?'disabled':'') + '>Free</button>'
            + ' <button onclick="coffreDeleteUser(\'' + p.id + '\',\'' + (p.name || p.email).replace(/'/g,'') + '\')" title="Supprimer ce compte" style="padding:3px 8px;border-radius:6px;border:1.5px solid var(--c-danger,#A82018);background:transparent;color:var(--c-danger,#A82018);font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)">🗑️</button>' : '')
        + '</td>'
        + '</tr>';
    });
    html += '</tbody></table></div>';

    html += '</div>';

    el.innerHTML = html;
    _renderEtabCodesInCoffre(supaCodesMap);
  }).catch(function(err) {
    el.innerHTML = '<div style="padding:24px;color:var(--c-text-3)">Supabase indisponible. Données locales chargées.</div>';
    _renderEtabCodesInCoffre();
  });
}

function _renderCoffreAnnuaire() {
  var tbody = document.querySelector('#coffre-user-table tbody');
  if (!tbody) return;
  var profiles = window._coffreProfiles || [];
  var html = '';
  profiles.forEach(function(p, idx) {
    var planColor = { free:'#6b7280', pro:'#d97706', etab:'#2563eb', admin:'#7c3aed' }[p.plan] || '#6b7280';
    var planLabel = { free:'Free', pro:'Pro ⭐', etab:'Établ. 🏫', admin:'Admin 🔑' }[p.plan] || p.plan;
    var joinDate  = p.joined_at ? new Date(p.joined_at).toLocaleDateString('fr-FR') : '—';
    var rowBg = idx % 2 === 0 ? 'background:var(--c-surface)' : 'background:var(--c-bg,var(--c-surface))';
    html += '<tr class="coffre-user-row" data-name="' + (p.name || '').toLowerCase() + '" data-email="' + (p.email || '').toLowerCase() + '" style="' + rowBg + ';border-bottom:1px solid var(--c-border)">'
      + '<td style="padding:9px 12px;font-weight:600;color:var(--c-text)">' + (p.name || '<em style="color:var(--c-text-3)">—</em>') + '</td>'
      + '<td style="padding:9px 12px"><a href="mailto:' + p.email + '" style="color:var(--c-primary);text-decoration:none;font-family:monospace;font-size:11px">' + p.email + '</a></td>'
      + '<td style="padding:9px 12px"><span style="font-size:11px;font-weight:700;padding:2px 9px;border-radius:20px;background:' + planColor + '22;color:' + planColor + '">' + planLabel + '</span></td>'
      + '<td style="padding:9px 12px;color:var(--c-text-3)">' + joinDate + '</td>'
      + '<td style="padding:9px 12px">'
        + '<button onclick="coffreCopyEmail(\'' + p.email + '\')" title="Copier l\'email" style="padding:3px 8px;border-radius:6px;border:1px solid var(--c-border);background:transparent;color:var(--c-text-3);font-size:11px;cursor:pointer;font-family:var(--f-body)">📋</button>'
        + (p.plan !== 'admin' ? ' <button onclick="coffrePlanChange(\'' + p.id + '\',\'pro\')" style="padding:3px 8px;border-radius:6px;border:1.5px solid #d97706;background:' + (p.plan==='pro'?'#d97706':'transparent') + ';color:' + (p.plan==='pro'?'#fff':'#d97706') + ';font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)" ' + (p.plan==='pro'?'disabled':'') + '>Pro</button>'
          + ' <button onclick="coffrePlanChange(\'' + p.id + '\',\'etab\')" style="padding:3px 8px;border-radius:6px;border:1.5px solid #2563eb;background:' + (p.plan==='etab'?'#2563eb':'transparent') + ';color:' + (p.plan==='etab'?'#fff':'#2563eb') + ';font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)" ' + (p.plan==='etab'?'disabled':'') + '>Établ.</button>'
          + ' <button onclick="coffrePlanChange(\'' + p.id + '\',\'free\')" style="padding:3px 8px;border-radius:6px;border:1.5px solid #6b7280;background:' + (p.plan==='free'?'#6b7280':'transparent') + ';color:' + (p.plan==='free'?'#fff':'#6b7280') + ';font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)" ' + (p.plan==='free'?'disabled':'') + '>Free</button>'
          + ' <button onclick="coffreDeleteUser(\'' + p.id + '\',\'' + (p.name || p.email).replace(/'/g,'') + '\')" style="padding:3px 8px;border-radius:6px;border:1.5px solid var(--c-danger,#A82018);background:transparent;color:var(--c-danger,#A82018);font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)">🗑️</button>' : '')
      + '</td></tr>';
  });
  tbody.innerHTML = html;
}

function _renderEtabCodesInCoffre(supaCodesMap) {
  var existing = document.getElementById('coffre-etab-codes');
  if (existing) existing.remove();
  var el = document.getElementById('coffre-content');
  if (!el) return;

  /* Construire la liste des codes depuis Supabase en priorité, localStorage en complément */
  var supaMap = supaCodesMap || window._coffreSupaCodes || {};
  var profiles = window._coffreProfiles || [];

  /* Codes Supabase → source principale (multi-appareil) */
  var etabCodes = Object.keys(supaMap).map(function(code) {
    var supaEntry = supaMap[code];
    var match = supaEntry.used_by ? profiles.find(function(p){ return p.id === supaEntry.used_by; }) : null;
    return {
      code: code,
      used: !!supaEntry.used_by,
      usedBy: match ? (match.name || match.email) : (supaEntry.used_by ? supaEntry.used_by.slice(0,8) + '…' : null),
      usedEmail: match ? match.email : null,
      usedAt: supaEntry.used_at || null,
      label: null
    };
  });

  /* Ajouter les codes locaux pas encore dans Supabase */
  var localCodes = [];
  try { localCodes = JSON.parse(localStorage.getItem('etab_codes') || '[]'); } catch(e) {}
  localCodes.forEach(function(lc) {
    if (!supaMap[lc.code]) etabCodes.push(lc);
  });

  var used  = etabCodes.filter(function(c){ return !!c.used; });
  var avail = etabCodes.filter(function(c){ return !c.used; });

  var div = document.createElement('div');
  div.id = 'coffre-etab-codes';
  div.style.cssText = 'padding:0 var(--s-4) var(--s-6)';

  var html = '<div style="display:flex;align-items:center;justify-content:space-between;margin:18px 0 10px">'
    + '<div style="font-weight:700;font-size:14px">Codes d\'accès Établissement</div>'
    + '<span style="font-size:11px;color:var(--c-text-3)">'
      + '<span style="color:var(--c-ok,#166038);font-weight:700">' + avail.length + ' dispo</span>'
      + (used.length ? ' · <span style="color:var(--c-danger,#A82018);font-weight:700">⚠ ' + used.length + ' utilisé(s)</span>' : '')
    + '</span>'
    + '</div>'
    + '<button onclick="etabGenerateCodeCoffre()" style="width:100%;padding:10px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer;margin-bottom:14px">+ Générer un code</button>';

  div.innerHTML = html;
  el.appendChild(div);
}

function coffreSearch() {
  var q = (document.getElementById('coffre-search') || {}).value || '';
  q = q.toLowerCase().trim();
  var rows = document.querySelectorAll('.coffre-user-row');
  rows.forEach(function(r) {
    var match = !q || r.dataset.name.indexOf(q) !== -1 || r.dataset.email.indexOf(q) !== -1;
    r.style.display = match ? '' : 'none';
  });
}

function coffreCopyEmail(email) {
  navigator.clipboard.writeText(email).then(function() {
    authToast('Email copié : ' + email);
  }).catch(function() {
    authToast(email);
  });
}


function coffreDeleteUser(userId, userName) {
  var existing = document.getElementById('coffre-delete-modal');
  if (existing) existing.remove();

  var overlay = document.createElement('div');
  overlay.id = 'coffre-delete-modal';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';

  overlay.innerHTML = '<div style="background:var(--c-surface);border-radius:var(--r-lg);padding:28px 24px;max-width:360px;width:100%;box-shadow:0 8px 32px rgba(0,0,0,.25)">'
    + '<div style="font-size:22px;text-align:center;margin-bottom:12px">🗑️</div>'
    + '<div style="font-size:15px;font-weight:800;color:var(--c-text);text-align:center;margin-bottom:8px">Supprimer ce compte ?</div>'
    + '<div style="font-size:13px;color:var(--c-text-3);text-align:center;margin-bottom:20px">Le compte de <strong style="color:var(--c-text)">' + userName + '</strong> sera supprimé définitivement. Cette action est irréversible.</div>'
    + '<div style="display:flex;gap:10px">'
      + '<button onclick="document.getElementById(\'coffre-delete-modal\').remove()" style="flex:1;padding:10px;border-radius:var(--r-md);border:1.5px solid var(--c-border);background:transparent;color:var(--c-text);font-family:var(--f-body);font-size:13px;font-weight:600;cursor:pointer">Annuler</button>'
      + '<button id="coffre-delete-confirm-btn" onclick="coffreDeleteUserConfirm(\'' + userId + '\',\'' + userName.replace(/'/g,'') + '\')" style="flex:1;padding:10px;border-radius:var(--r-md);border:none;background:var(--c-danger,#A82018);color:#fff;font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer">Supprimer</button>'
    + '</div>'
  + '</div>';

  document.body.appendChild(overlay);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
}

function coffreDeleteUserConfirm(userId, userName) {
  var btn = document.getElementById('coffre-delete-confirm-btn');
  if (btn) { btn.textContent = '…'; btn.disabled = true; }

  SupaDB.auth.getSession().then(function(res) {
    var token = res.data && res.data.session ? res.data.session.access_token : null;
    if (!token) { authToast('Session expirée, reconnectez-vous'); return; }

    fetch(SUPABASE_FUNCTIONS_URL + '/delete-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ userId: userId })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      var modal = document.getElementById('coffre-delete-modal');
      if (modal) modal.remove();
      if (data.success) {
        SupaDB.from('profiles').delete().eq('id', userId).catch(function(){});
        if (window._coffreProfiles) {
          window._coffreProfiles = window._coffreProfiles.filter(function(p){ return p.id !== userId; });
        }
        authToast('Compte de ' + userName + ' supprimé ✓');
        _renderCoffreAnnuaire();
      } else {
        authToast('Erreur : ' + (data.error || 'Impossible de supprimer'));
      }
    })
    .catch(function() {
      var modal = document.getElementById('coffre-delete-modal');
      if (modal) modal.remove();
      authToast('Erreur réseau lors de la suppression');
    });
  });
}

function coffreCopyAllEmails() {
  var profiles = window._coffreProfiles || [];
  var emails = profiles.map(function(p){ return p.email; }).filter(Boolean).join(', ');
  if (!emails) { authToast('Aucun email disponible.'); return; }
  navigator.clipboard.writeText(emails).then(function() {
    authToast(profiles.length + ' emails copiés dans le presse-papier ✓');
  }).catch(function() {
    var ta = document.createElement('textarea');
    ta.value = emails;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    authToast(profiles.length + ' emails copiés ✓');
  });
}

function coffreExportCSV() {
  var profiles = window._coffreProfiles || [];
  if (!profiles.length) { authToast('Aucune donnée à exporter.'); return; }
  var rows = [['Nom', 'Email', 'Plan', 'Inscrit le']];
  profiles.forEach(function(p) {
    var d = p.joined_at ? new Date(p.joined_at).toLocaleDateString('fr-FR') : '';
    rows.push([
      '"' + (p.name || '').replace(/"/g, '""') + '"',
      '"' + (p.email || '').replace(/"/g, '""') + '"',
      p.plan || '',
      d
    ]);
  });
  var csv = rows.map(function(r){ return r.join(';'); }).join('\r\n');
  var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'HydroCalc_inscrits_' + new Date().toISOString().slice(0,10) + '.csv';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  authToast('CSV exporté (' + profiles.length + ' inscrits) ✓');
}

function coffrePlanChange(userId, newPlan) {
  if (!SupaDB) { authToast('Supabase non connecté'); return; }
  SupaDB.rpc('admin_update_plan', { p_user_id: userId, p_plan: newPlan }).then(function(res) {
    if (res.error) { authToast('Erreur : ' + res.error.message); return; }
    if (window._coffreProfiles) {
      var p = window._coffreProfiles.find(function(x){ return x.id === userId; });
      if (p) p.plan = newPlan;
    }
    authToast('Plan mis à jour → ' + { free:'Free', pro:'Pro', etab:'Établissement' }[newPlan]);
    _renderCoffreAnnuaire();
  });
}

function _etabMakeCode() {
  var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var r = '';
  for (var i = 0; i < 8; i++) r += chars[Math.floor(Math.random() * chars.length)];
  return 'HC-' + r.slice(0,4) + '-' + r.slice(4);
}

function etabGenerateCodeCoffre() {
  /* Modal inline pour saisir le titre */
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px';
  overlay.innerHTML = '<div style="background:var(--c-surface);border-radius:var(--r-lg);padding:24px 20px;width:100%;max-width:340px;box-shadow:0 8px 40px rgba(0,0,0,.25)">'
    + '<div style="font-size:15px;font-weight:800;color:var(--c-text);margin-bottom:6px">Nouveau code d\'accès</div>'
    + '<div style="font-size:12px;color:var(--c-text-3);margin-bottom:14px">Donnez un titre pour identifier à qui ce code est destiné.</div>'
    + '<input id="_gen-code-label" type="text" placeholder="Ex : Jean Dupont, Promo 2025…" maxlength="60" style="width:100%;padding:10px 12px;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;box-sizing:border-box;margin-bottom:14px;background:var(--c-surface-2);color:var(--c-text)">'
    + '<div style="display:flex;gap:8px">'
      + '<button onclick="this.closest(\'[data-gen-overlay]\').remove()" style="flex:1;padding:10px;background:none;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;color:var(--c-text-3);cursor:pointer">Annuler</button>'
      + '<button onclick="_etabDoGenerate(document.getElementById(\'_gen-code-label\').value);this.closest(\'[data-gen-overlay]\').remove()" style="flex:2;padding:10px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer">✓ Générer</button>'
    + '</div>'
  + '</div>';
  overlay.setAttribute('data-gen-overlay', '1');
  overlay.addEventListener('click', function(e){ if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
  setTimeout(function(){ var inp = document.getElementById('_gen-code-label'); if(inp) inp.focus(); }, 80);
}

function _etabDoGenerate(labelRaw) {
  var label = (labelRaw || '').trim();
  var code = _etabMakeCode();
  var codes = _etabGetCodes();
  codes.push({ code: code, used: false, label: label, createdAt: new Date().toISOString() });
  _etabSaveCodes(codes);
  if (SupaDB) {
    SupaDB.from('access_codes').insert({ code: code, used_by: null, used_at: null })
      .then(function(r) {
        if (r.error) authToast('⚠️ Code local uniquement : ' + r.error.message);
        else authToast('✓ Code généré : ' + (label || code));
      });
  } else {
    authToast('Code généré : ' + (label || code));
  }
  _renderEtabCodesInCoffre();
}

function etabSyncCodesToSupabase() {
  if (!SupaDB) { authToast('Supabase non connecté'); return; }
  var codes = _etabGetCodes().filter(function(c){ return !c.used; });
  if (!codes.length) { authToast('Aucun code disponible à synchroniser'); return; }
  var rows = codes.map(function(c){ return { code: c.code, used_by: null, used_at: null }; });
  SupaDB.from('access_codes').upsert(rows, { onConflict: 'code' }).then(function(r) {
    if (r.error) authToast('Erreur sync : ' + r.error.message);
    else authToast('✓ ' + codes.length + ' code(s) synchronisé(s) vers Supabase');
  });
}

function etabDeleteCodeCoffre(code) {
  if (!SupaDB) return;
  SupaDB.from('access_codes').delete().eq('code', code).then(function(r) {
    if (r.error) { authToast('Erreur : ' + r.error.message); return; }
    /* Supprimer aussi du localStorage si présent */
    var local = _etabGetCodes().filter(function(c){ return c.code !== code; });
    _etabSaveCodes(local);
    authToast('Code supprimé : ' + code);
    buildCoffre();
  });
}

/* INIT — vérification session Supabase au chargement */
(function initAuth(){
  function _showSplash() {
    var _as = document.getElementById('auth-splash');
    if (_as) _as.classList.remove('hidden');
  }

  /* Compte démo (localStorage uniquement) */
  function _tryLocalDemo() {
    try {
      var r = DataStore.session.getRemember();
      if (r && !r.supa) {
        var accounts = getHCAccounts();
        if (accounts[r.email] && accounts[r.email].pwd.slice(0,8) === r.token) {
          AUTH.user = Object.assign({ email: r.email }, accounts[r.email]);
          _doEnterApp(); return true;
        }
      }
    } catch(e) {}
    return false;
  }

  /* Bypass site-gate pour les sessions QCM en direct */
  var _qcmParams = new URLSearchParams(window.location.search);
  if (_qcmParams.get('hostQCM') || _qcmParams.get('joinCode')) {
    _doEnterApp(); return;
  }

  if (!SupaDB) {
    if (!_tryLocalDemo()) _showSplash();
    return;
  }

  /* Lien de réinitialisation de mot de passe cliqué : Supabase déclenche cet
     événement et crée une session temporaire. Afficher l'écran dédié plutôt
     que de laisser l'utilisateur entrer dans l'app normalement. */
  var _recoveryHandled = false;
  SupaDB.auth.onAuthStateChange(function(event) {
    if (event === 'PASSWORD_RECOVERY') {
      _recoveryHandled = true;
      document.querySelectorAll('.auth-screen').forEach(function(s){ s.classList.add('hidden'); });
      authShow('auth-reset-password');
    }
  });

  /* Session Supabase (gère automatiquement le "Se souvenir de moi") */
  setTimeout(function() {
    if (_recoveryHandled) return; /* écran reset déjà affiché */
    var _supaSessionUser = null;
    SupaDB.auth.getSession()
      .then(function(res) {
        if (_recoveryHandled) return;
        var session = res.data && res.data.session;
        if (!session) {
          if (!_tryLocalDemo()) _showSplash();
          return;
        }
        AUTH._uid = session.user.id;
        _supaSessionUser = session.user;
        return _fetchProfileWithRetry(session.user.id);
      })
      .then(function(res) {
        if (_recoveryHandled || !res) return; /* déjà traité ci-dessus */
        if (res.error || !res.data) { _showSplash(); return; }
        var p = res.data;
        AUTH.user = _forceAdminIfNeeded({
          email:      p.email,
          name:       p.name       || p.email,
          plan:       p.plan       || 'free',
          isAdmin:    p.is_admin   || false,
          profile:    p.profile    || '',
          trialUsed:  p.trial_used || false,
          trialStart: p.trial_start ? new Date(p.trial_start).getTime() : null,
          invite_code: p.invite_code || null
        });
        _applyMetaCodeOverride(_supaSessionUser);
        _doEnterApp();
      })
      .catch(function() { if (!_recoveryHandled) _showSplash(); });
  }, 50);
})();

/* ═══════════════════════════════════════════════════
   SIDEBAR & ABONNEMENTS
═══════════════════════════════════════════════════ */
var PLANS = [
  {
    id: 'free',
    ico: '🌱',
    name: 'Gratuit',
    price: '0 €',
    period: '',
    desc: 'Idéal pour découvrir l\'application. Accès limité avec publicité.',
    btnLabel: 'Plan actuel',
    btnClass: 'plan-btn-current',
    features: [
      { ico: '📢', txt: 'Avec publicité' },
      { ico: '🧮', txt: 'Calculateurs de base (10 calculs/jour)' },
      { ico: '🔒', txt: 'Calculateurs avancés non disponibles' },
      { ico: '📖', txt: 'Glossaire (50 termes offerts)' },
      { ico: '🎓', txt: 'QCM (10 QCM offerts)' },
      { ico: '💾', txt: 'Sauvegarde non disponible' },
      { ico: '📄', txt: 'Rapports PDF non disponibles' },
      { ico: '🗺️', txt: 'SPANC (1 département au choix)' },
    ]
  },
  {
    id: 'pro',
    ico: '⚡',
    name: 'Pro',
    price: '5,90 €',
    period: '/mois',
    desc: 'Sans publicité, accès étendu. Pour les professionnels et étudiants actifs.',
    btnLabel: 'Choisir Pro',
    btnClass: 'plan-btn-primary',
    features: [
      { ico: '🚫', txt: 'Sans publicité' },
      { ico: '🧮', txt: 'Calculateurs de base illimités' },
      { ico: '🔓', txt: 'Calculateurs avancés illimités' },
      { ico: '📖', txt: 'Glossaire complet (200+ termes)' },
      { ico: '🎓', txt: 'QCM (10 QCM / semaine)' },
      { ico: '💾', txt: 'Sauvegarde des calculs (50 max)' },
      { ico: '📄', txt: 'Rapports PDF (1 rapport / semaine)' },
      { ico: '🗺️', txt: 'SPANC non disponible' },
    ]
  },
  {
    id: 'etab',
    ico: '🏛️',
    name: 'Établissement',
    price: '24 €',
    period: '/mois',
    priceBis: '190 € /an — soit 2 mois offerts',
    badge: '⭐ Meilleur rapport qualité',
    desc: 'La solution complète pour les établissements scolaires, CFA, bureaux d\'études et collectivités. Tout illimité + outils pédagogiques exclusifs.',
    btnLabel: 'Choisir Établissement',
    btnClass: 'plan-btn-primary',
    features: [
      { ico: '🚫', txt: 'Sans publicité' },
      { ico: '⚡', txt: 'Tous les calculateurs illimités (14 outils)' },
      { ico: '📖', txt: 'Glossaire & formules complet illimité' },
      { ico: '🎓', txt: 'QCM illimités — 720 questions · 36 thèmes' },
      { ico: '📄', txt: 'Rapports PDF illimités (ODT · DOCX · PDF)' },
      { ico: '🗺️', txt: 'SPANC — 101 départements' },
      { ico: '💾', txt: 'Sauvegarde illimitée multi-appareil' },
      { ico: '🔑', txt: 'Codes d\'accès élèves — jusqu\'à 30 apprenants' },
      { ico: '📊', txt: 'Tableau de bord classe — suivi des progrès QCM' },
      { ico: '📝', txt: 'QCM Professeur — créer & personnaliser les questions' },
      { ico: '📞', txt: 'Support prioritaire par email' },
    ]
  }
];

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('open');
  renderSidebarPlans();
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

function _trialBannerHtml() {
  if (!AUTH.user || AUTH.user.isAdmin) return '';
  var status = _getTrialStatus(AUTH.user);

  if (status === 'none') {
    return '<div style="background:linear-gradient(135deg,var(--c-primary),#0d9e7e);border-radius:var(--r-md);padding:14px 16px;margin-bottom:var(--s-3);cursor:pointer" onclick="_showTrialOffer();closeSidebar()">'
      + '<div style="font-size:13px;font-weight:800;color:#fff;margin-bottom:3px">🚀 Essai Pro gratuit — 7 jours</div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.8)">Accès illimité à toutes les fonctionnalités</div>'
      + '<div style="margin-top:8px;display:inline-block;padding:5px 12px;background:rgba(255,255,255,.2);border-radius:20px;font-size:11px;font-weight:700;color:#fff">Démarrer mon essai →</div>'
    + '</div>';
  }

  if (status === 'active') {
    var days = _trialDaysLeft(AUTH.user);
    return '<div style="background:var(--c-primary-l);border:1.5px solid var(--c-primary);border-radius:var(--r-md);padding:12px 14px;margin-bottom:var(--s-3)">'
      + '<div style="font-size:12px;font-weight:800;color:var(--c-primary)">⚡ Essai Pro actif</div>'
      + '<div style="font-size:11px;color:var(--c-text-3);margin-top:2px">'
        + (days > 1 ? days + ' jours restants' : days === 1 ? 'Dernier jour !' : 'Expire aujourd\'hui')
      + '</div>'
    + '</div>';
  }

  if (status === 'expired') {
    return '<div style="background:var(--c-danger-l,#fff5f5);border:1.5px solid var(--c-danger);border-radius:var(--r-md);padding:12px 14px;margin-bottom:var(--s-3)">'
      + '<div style="font-size:12px;font-weight:800;color:var(--c-danger)">⏰ Essai terminé</div>'
      + '<div style="font-size:11px;color:var(--c-text-3);margin-top:2px">Passez à Pro pour continuer</div>'
    + '</div>';
  }

  return '';
}

function renderSidebarPlans() {
  var userPlan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var currentPlan = PLANS.find(function(p){ return p.id === userPlan; }) || PLANS[0];

  var html =
    '<div class="sidebar-section-title">Mon compte</div>' +
    '<div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);margin-bottom:var(--s-4);display:flex;align-items:center;gap:var(--s-3)">' +
      '<span style="font-size:28px">' + currentPlan.ico + '</span>' +
      '<div style="flex:1">' +
        '<div style="font-size:var(--t-sm);font-weight:700">Plan ' + currentPlan.name + '</div>' +
        '<div style="font-size:10px;color:var(--c-text-3)">' + currentPlan.price + (currentPlan.period || '') + '</div>' +
      '</div>' +
    '</div>' +

    _trialBannerHtml() +

    '<button onclick="togglePlansSection()" style="width:100%;padding:14px var(--s-3);background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:var(--t-sm);font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--s-2);margin-bottom:var(--s-4)">' +
      '💎 Voir les abonnements' +
    '</button>' +

    '<div id="plans-section" style="display:none">';

  for (var i = 0; i < PLANS.length; i++) {
    var p = PLANS[i];
    var isCurrent = p.id === userPlan;
    var isEtab = p.id === 'etab';
    var feats = p.features.map(function(f) {
      return '<div class="plan-feat" style="color:var(--c-text-2)">' + f.ico + ' ' + f.txt + '</div>';
    }).join('');
    var cardStyle = isEtab ? 'border:2px solid var(--c-primary);box-shadow:0 0 0 3px var(--c-primary-l);' : '';
    html += '<div class="plan-card' + (isCurrent ? ' current' : '') + '" style="' + cardStyle + '">';
    if (isEtab) {
      html += '<div style="background:var(--c-primary);color:#fff;font-size:10px;font-weight:800;text-align:center;padding:5px 10px;border-radius:6px 6px 0 0;margin:-12px -12px 10px;letter-spacing:.04em">' + p.badge + '</div>';
    }
    html +=
        '<div class="plan-card-top">' +
          '<span class="plan-card-ico">' + p.ico + '</span>' +
          '<span class="plan-card-name">' + p.name + '</span>' +
          '<span class="plan-card-price">' + p.price + '<span>' + p.period + '</span></span>' +
        '</div>';
    if (p.priceBis) {
      html += '<div style="background:var(--c-ok-l,#e8faf4);border:1px solid var(--c-ok);border-radius:6px;padding:6px 10px;margin-bottom:8px;font-size:10.5px;color:var(--c-ok);font-weight:700">🗓️ Annuel : ' + p.priceBis + '</div>';
    }
    html += '<div class="plan-card-desc">' + p.desc + '</div>' +
        '<div class="plan-card-features">' + feats + '</div>' +
        '<button class="plan-card-btn ' + (isCurrent ? 'plan-btn-current' : p.btnClass) + '" onclick="' + (isCurrent ? '' : 'selectPlan(\'' + p.id + '\')') + '">' +
          (isCurrent ? '✓ Plan actuel' : p.btnLabel) +
        '</button>' +
      '</div>';
  }

  html += '<div class="sidebar-section-title" style="margin-top:var(--s-4)">Comparatif des plans</div>';
  html += '<table class="compare-table"><thead><tr>' +
    '<th>Fonctionnalité</th><th>Gratuit</th><th>Pro</th><th style="background:var(--c-primary-l);color:var(--c-primary);font-weight:800">🏛️ Étab.</th>' +
    '</tr></thead><tbody>';

  var rows = [
    ['Sans publicité',           '✗','✓','✓'],
    ['Calculateurs',             '10/jour','Illimités','Illimités'],
    ['Calculateurs avancés',     '✗','✓','✓'],
    ['Glossaire complet',        '⚠','✓','✓'],
    ['QCM',                      '10 offerts','10/sem.','Illimités'],
    ['Rapports PDF',             '✗','1/sem.','Illimités'],
    ['Sauvegarde',               '✗','50 max','Illimitée'],
    ['SPANC',                    '1 dept','✗','101 depts'],
    ['Codes élèves',             '✗','✗','30 codes'],
    ['Tableau de bord classe',   '✗','✗','✓'],
    ['QCM Professeur',           '✗','✗','✓'],
    ['Support prioritaire',      '✗','✗','✓'],
    ['Prix mensuel',             'Gratuit','5,90 €','24 €'],
    ['Prix annuel',              '—','—','190 €'],
  ];

  for (var r = 0; r < rows.length; r++) {
    var isEtabRow = rows[r][3] !== '✗' && rows[r][3] !== rows[r][2] && r >= 8;
    html += '<tr' + (isEtabRow ? ' style="background:var(--c-primary-l)"' : '') + '><td>' + rows[r][0] + '</td>';
    for (var c = 1; c <= 3; c++) {
      var v = rows[r][c];
      var cls = v === '✓' ? 'ct-ok' : v === '✗' ? 'ct-no' : v === '⚠' ? 'ct-part' : '';
      var etabStyle = c === 3 ? ' style="font-weight:700"' : '';
      html += '<td class="' + cls + '"' + etabStyle + '>' + v + '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div><div style="height:var(--s-6)"></div>';

  /* Espace Établissement — Étab + Admin uniquement */
  if (AUTH.user && (AUTH.user.plan === 'etab' || AUTH.user.plan === 'admin')) {
    html += '<div style="padding:0 var(--s-4) var(--s-2)">'
          + '<div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">Espace Établissement</div>'
          + '<div style="display:flex;flex-direction:column;gap:var(--s-2)">'
          + '<button onclick="showEtabEspace();closeSidebar()" style="width:100%;padding:var(--s-3) var(--s-4);background:var(--c-primary-l);border:1.5px solid var(--c-primary);color:var(--c-primary);border-radius:var(--r-md);font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--s-2);font-family:inherit;">🏛️ Tableau de bord classe</button>'
          + '<button onclick="openQCMManager();closeSidebar()" style="width:100%;padding:var(--s-3) var(--s-4);background:var(--c-surface-2);border:1.5px solid var(--c-border);color:var(--c-text-2);border-radius:var(--r-md);font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--s-2);font-family:inherit;" onmouseover="this.style.background=\'var(--c-primary-l)\';this.style.borderColor=\'var(--c-primary)\';this.style.color=\'var(--c-primary)\'" onmouseout="this.style.background=\'var(--c-surface-2)\';this.style.borderColor=\'var(--c-border)\';this.style.color=\'var(--c-text-2)\'">'
          + '📝 Éditeur QCM professeur</button>'
          + '</div></div>';
  }

  html += '<div style="padding:0 var(--s-4) var(--s-2)">'
        + '<button onclick="openSettings()" style="width:100%;padding:var(--s-3) var(--s-4);background:var(--c-surface-2);border:1.5px solid var(--c-border);color:var(--c-text-2);border-radius:var(--r-md);font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--s-2);font-family:inherit;" onmouseover="this.style.background=\'var(--c-primary-l)\';this.style.borderColor=\'var(--c-primary)\';this.style.color=\'var(--c-primary)\'" onmouseout="this.style.background=\'var(--c-surface-2)\';this.style.borderColor=\'var(--c-border)\';this.style.color=\'var(--c-text-2)\'">'
        + '⚙️ Paramètres</button></div>'
        + '<div style="padding:0 var(--s-4) var(--s-6)">'
        + '<button onclick="authLogout();closeSidebar();" style="width:100%;padding:var(--s-3) var(--s-4);background:transparent;border:1.5px solid #e74c3c;color:#e74c3c;border-radius:var(--r-md);font-size:0.95rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--s-2);font-family:inherit;" onmouseover="this.style.background=\'#fdecea\'" onmouseout="this.style.background=\'transparent\'">'
        + '🚪 Quitter</button></div>';

  document.getElementById('sidebar-body').innerHTML = html;
}

function togglePlansSection() {
  var s = document.getElementById('plans-section');
  if (!s) return;
  s.style.display = s.style.display === 'none' ? 'block' : 'none';
}

/* ═══════════════════════════════════════════════════════
   BIBLIOTHÈQUE DE FORMULES
   ═══════════════════════════════════════════════════════ */
var FORMULES_BIBLIO = [
  { cat:'ANC — Dimensionnement', ico:'🏡', items:[
    { nom:'Surface d\'épandage (tranchées)', expr:'S = (N × Qj) / (K × 1000)', ref:'DTU 64.1 · Arrêté 07/09/2009',
      vars:['S = Surface d\'épandage (m²)','N = Nombre d\'équivalents-habitants (EH)','Qj = Débit journalier par EH (L/j·EH) — valeur standard : 150','K = Perméabilité du sol (mm/min) — test Porchet'] },
    { nom:'Volume fosse toutes eaux (FTE)', expr:'V = 3000 L pour ≤ 5 EH, + 1000 L par EH suppl.', ref:'Arrêté 07/09/2009 Art. 7',
      vars:['V = Volume de la fosse (L)','EH = Nombre d\'équivalents-habitants'] },
    { nom:'Surface filtre planté de roseaux (FPR)', expr:'S = 5 × N  (m²/EH)', ref:'NF EN 12566-3 · Mono-étage vertical',
      vars:['S = Surface du filtre (m²)','N = Nombre d\'équivalents-habitants (EH)'] },
    { nom:'Charge hydraulique surface FTS', expr:'q = Q / S', ref:'q max : 0,10 m/j (sable drainé) · 0,08 m/j (sable non drainé)',
      vars:['q = Charge hydraulique surfacique (m/j)','Q = Débit journalier appliqué (m³/j)','S = Surface du filtre (m²)'] },
    { nom:'Distance minimale puits/épandage', expr:'d ≥ 35 m', ref:'Arrêté 07/09/2009 Art. 7',
      vars:['d = Distance minimale entre puits d\'eau potable et zone d\'épandage (m)'] },
  ]},
  { cat:'Hydraulique — Manning-Strickler', ico:'🌊', items:[
    { nom:'Débit pleine section', expr:'Q = K × S × Rh^(2/3) × I^(1/2)', ref:'Manning-Strickler · NF EN 752',
      vars:['Q = Débit (m³/s)','K = Coefficient de Strickler (m^1/3/s) — béton : 70–90 · PVC : 100–110 · naturel : 25–50','S = Section mouillée (m²)','Rh = Rayon hydraulique (m)','I = Pente de la ligne d\'énergie (m/m)'] },
    { nom:'Vitesse d\'écoulement', expr:'V = K × Rh^(2/3) × I^(1/2)', ref:'Manning-Strickler',
      vars:['V = Vitesse moyenne d\'écoulement (m/s)','K = Coefficient de Strickler (m^1/3/s)','Rh = Rayon hydraulique (m)','I = Pente (m/m)'] },
    { nom:'Rayon hydraulique', expr:'Rh = S / P', ref:'Valable pour toute section',
      vars:['Rh = Rayon hydraulique (m)','S = Section mouillée (m²)','P = Périmètre mouillé (m)'] },
    { nom:'Nombre de Froude', expr:'Fr = V / √(g × y)', ref:'Fr < 1 : régime fluvial · Fr > 1 : régime torrentiel',
      vars:['Fr = Nombre de Froude (sans unité)','V = Vitesse d\'écoulement (m/s)','g = Accélération gravitationnelle (9,81 m/s²)','y = Hauteur d\'eau (m)'] },
    { nom:'Section circulaire pleine', expr:'S = π × D² / 4  ;  P = π × D', ref:'Conduite circulaire en charge',
      vars:['S = Section de passage (m²)','P = Périmètre mouillé (m)','D = Diamètre intérieur de la conduite (m)'] },
    { nom:'Hauteur critique', expr:'yc = (Q² / (g × l²))^(1/3)', ref:'Hauteur pour laquelle Fr = 1',
      vars:['yc = Hauteur critique (m)','Q = Débit (m³/s)','g = Accélération gravitationnelle (9,81 m/s²)','l = Largeur au miroir (m)'] },
  ]},
  { cat:'Eaux pluviales & hydro', ico:'🌧️', items:[
    { nom:'Méthode rationnelle (débit de crue)', expr:'Q = C × i × A / 360', ref:'Formule de la méthode rationnelle — NF EN 752',
      vars:['Q = Débit de pointe (m³/s)','C = Coefficient de ruissellement (sans unité, 0 à 1)','i = Intensité de pluie pour la durée tc (mm/h)','A = Surface du bassin versant (ha)'] },
    { nom:'Méthode de Caquot', expr:'Q = K × i^a × A^b × C^c × L^d', ref:'NF EN 752 · Coefficients tabulés selon le type de réseau',
      vars:['Q = Débit de pointe (m³/s)','K, a, b, c, d = Coefficients régionaux tabulés (NF EN 752)','i = Intensité de pluie (mm/h)','A = Surface du bassin versant (ha)','C = Coefficient de ruissellement','L = Longueur du bassin versant (m)'] },
    { nom:'Coefficient d\'imperméabilisation', expr:'C = (Simp × 0,9 + Sveg × 0,2) / A', ref:'Valeurs approchées — adapter selon contexte',
      vars:['C = Coefficient d\'imperméabilisation moyen (sans unité)','Simp = Surface imperméable (ha) — toitures, voiries','Sveg = Surface végétalisée (ha) — pelouses, jardins','A = Surface totale du bassin versant (ha)'] },
    { nom:'Temps de concentration (Kirpich)', expr:'tc = (0,87 × L³ / Δh)^0,385', ref:'Formule de Kirpich',
      vars:['tc = Temps de concentration (h)','L = Longueur du bassin versant (km)','Δh = Dénivelé entre point le plus haut et exutoire (m)'] },
  ]},
  { cat:'Assainissement collectif', ico:'🔧', items:[
    { nom:'Charges polluantes — DBO5', expr:'L = N_EH × 60', ref:'1 EH = 60 g DBO5/j · Arrêté 22/06/2007',
      vars:['L = Charge DBO5 journalière (g DBO5/j)','N_EH = Nombre d\'équivalents-habitants (EH)','60 = Charge unitaire par EH (g DBO5/j·EH)'] },
    { nom:'Taux d\'abattement STEU', expr:'η = (C_entrée - C_sortie) / C_entrée × 100', ref:'DBO5 : η > 70 % ou sortie < 25 mg/L',
      vars:['η = Taux d\'abattement (%)','C_entrée = Concentration en entrée de STEU (mg/L)','C_sortie = Concentration en sortie de STEU (mg/L)'] },
    { nom:'Déversoir d\'orage — taux de dilution', expr:'τ = Q_pluie / Q_sec ≥ 5', ref:'Arrêté 21/07/2015 (valeur indicative)',
      vars:['τ = Taux de dilution (sans unité)','Q_pluie = Débit par temps de pluie en amont du déversoir (m³/s)','Q_sec = Débit par temps sec (m³/s)'] },
    { nom:'Charge volumique biologique', expr:'BVol = L_DBO5 / V_bassin', ref:'Boues activées : BVol = 300–600 g/m³·j (faible charge)',
      vars:['BVol = Charge volumique biologique (g DBO5/m³·j)','L_DBO5 = Charge DBO5 journalière (g DBO5/j)','V_bassin = Volume du bassin d\'aération (m³)'] },
    { nom:'Rendement réseau — pertes', expr:'η_réseau = V_facturé / V_mis_en_distribution × 100', ref:'Plan Eau 2023 : objectif η > 80 %',
      vars:['η = Rendement du réseau (%)','V_facturé = Volume d\'eau facturé aux abonnés (m³)','V_mis = Volume mis en distribution (m³)'] },
  ]},
  { cat:'Eau potable', ico:'💧', items:[
    { nom:'Dose de chlore résiduelle (en réseau)', expr:'[Cl]_résiduel = [Cl]_injection - Σ consommations', ref:'Objectif réseau : 0,05–0,50 mg/L',
      vars:['[Cl]_résiduel = Concentration en chlore résiduel au point de mesure (mg/L)','[Cl]_injection = Concentration injectée en entrée de réseau (mg/L)','Σ consommations = Somme des consommations de chlore le long du réseau (mg/L)'] },
    { nom:'Contact UV (dose)', expr:'D_UV = E × t', ref:'Dose minimale réglementaire : 40 mJ/cm²',
      vars:['D_UV = Dose UV (mJ/cm²)','E = Éclairement UV (mW/cm²)','t = Temps de contact (s)'] },
    { nom:'Capacité réservoir (volume utile)', expr:'V = Q_max_jour × t_autonomie', ref:'Autonomie recommandée : 8–24 h',
      vars:['V = Volume utile du réservoir (m³)','Q_max_jour = Débit de pointe journalier (m³/h)','t_autonomie = Durée d\'autonomie souhaitée (h)'] },
    { nom:'Perte de charge Hazen-Williams', expr:'J = 10,67 × Q^1,852 / (C^1,852 × D^4,87)', ref:'C : PVC ≈ 140 · Fonte neuve ≈ 130 · Fonte ancienne ≈ 100',
      vars:['J = Perte de charge linéaire (m/m)','Q = Débit (m³/s)','C = Coefficient de Hazen-Williams (sans unité)','D = Diamètre intérieur de la conduite (m)'] },
    { nom:'Nitrates (limite réglementaire)', expr:'[NO3] < 50 mg/L', ref:'Arrêté 11/01/2007 · Directive 2020/2184',
      vars:['[NO3] = Concentration en nitrates dans l\'eau distribuée (mg/L)','Seuil : 50 mg/L (valeur limite) · 25 mg/L (valeur de référence)'] },
  ]},
  { cat:'Milieu naturel — Hydrologie', ico:'🌿', items:[
    { nom:'Débit réservé (débit minimal)', expr:'Q_res ≥ 1/10 × Q_module', ref:'Art. L.214-18 Code env.',
      vars:['Q_res = Débit réservé à maintenir à l\'aval (m³/s)','Q_module = Débit moyen interannuel (m³/s)','1/10 = Fraction minimale réglementaire (peut être portée à 1/5 en zone sensible)'] },
    { nom:'Paramètre de Shields (transport solide)', expr:'θ = τ / ((ρs - ρ) × g × d)', ref:'Entraînement si θ > θc ≈ 0,047',
      vars:['θ = Paramètre de Shields (sans unité)','τ = Contrainte de cisaillement au fond (Pa)','ρs = Densité des sédiments (kg/m³) — sable/gravier : 2650','ρ = Densité de l\'eau (kg/m³) — 1000','g = Accélération gravitationnelle (9,81 m/s²)','d = Diamètre caractéristique du grain (m)'] },
    { nom:'Contrainte de cisaillement au fond', expr:'τ = ρ × g × Rh × I', ref:'Formule de Saint-Venant',
      vars:['τ = Contrainte de cisaillement au fond (Pa)','ρ = Densité de l\'eau (kg/m³) — 1000','g = Accélération gravitationnelle (9,81 m/s²)','Rh = Rayon hydraulique (m)','I = Pente de la ligne d\'énergie (m/m)'] },
    { nom:'Puissance spécifique du cours d\'eau', expr:'ω = ρ × g × Q × I / l', ref:'Indicateur de l\'énergie disponible par m² de lit',
      vars:['ω = Puissance spécifique (W/m²)','ρ = Densité de l\'eau (kg/m³) — 1000','g = Accélération gravitationnelle (9,81 m/s²)','Q = Débit (m³/s)','I = Pente (m/m)','l = Largeur en eau (m)'] },
    { nom:'Débit de crue fréquentiel (Myer)', expr:'Q_T = Q_ref × (A / A_ref)^n', ref:'Méthode régionale — n ≈ 0,6–0,8',
      vars:['Q_T = Débit de crue à la période de retour T (m³/s)','Q_ref = Débit de référence sur station jaugée (m³/s)','A = Surface du bassin versant à estimer (km²)','A_ref = Surface du bassin versant de référence (km²)','n = Exposant d\'homothétie régional (0,6–0,8)'] },
  ]},
  { cat:'Passes à poissons', ico:'🐟', items:[
    { nom:'Nombre de bassins (passe à bassins)', expr:'n = H_totale / Δh_bassin', ref:'Δh recommandé : 0,20 m salmonidés · 0,15 m cyprinidés',
      vars:['n = Nombre de bassins (sans unité)','H_totale = Chute totale à franchir (m)','Δh_bassin = Différence de niveau entre deux bassins consécutifs (m)'] },
    { nom:'Vitesse en échancrure (Torricelli)', expr:'V = Cd × √(2 × g × Δh)', ref:'Cd ≈ 0,62 · Limite vitesse : 1,5 m/s salmonidés',
      vars:['V = Vitesse en échancrure (m/s)','Cd = Coefficient de décharge (sans unité) — ≈ 0,62','g = Accélération gravitationnelle (9,81 m/s²)','Δh = Différence de charge entre deux bassins (m)'] },
    { nom:'Puissance volumique dissipée', expr:'P_vol = ρ × g × Q × Δh / Vol_bassin', ref:'Limite réglementaire : P_vol < 200 W/m³',
      vars:['P_vol = Puissance volumique dissipée (W/m³)','ρ = Densité de l\'eau (kg/m³) — 1000','g = Accélération gravitationnelle (9,81 m/s²)','Q = Débit dans la passe (m³/s)','Δh = Chute par bassin (m)','Vol_bassin = Volume d\'un bassin (m³)'] },
    { nom:'Longueur bassin passe à fentes', expr:'L_bassin ≥ 8 × w_fente', ref:'ICE 2014 — Guide technique passes à poissons',
      vars:['L_bassin = Longueur minimale d\'un bassin (m)','w_fente = Largeur de la fente verticale (m)'] },
  ]},
  { cat:'Physique de l\'eau', ico:'⚗️', items:[
    { nom:'Équation de continuité', expr:'Q = V × S = constante', ref:'Conservation du débit (régime permanent incompressible)',
      vars:['Q = Débit volumique (m³/s)','V = Vitesse moyenne de l\'écoulement (m/s)','S = Section de passage (m²)'] },
    { nom:'Équation de Bernoulli', expr:'P/(ρ×g) + V²/(2×g) + z = constante', ref:'Fluide parfait, incompressible, en régime permanent',
      vars:['P = Pression (Pa)','ρ = Densité du fluide (kg/m³) — eau : 1000','g = Accélération gravitationnelle (9,81 m/s²)','V = Vitesse (m/s)','z = Cote altimétrique (m NGF)'] },
    { nom:'Coup de bélier (surpression)', expr:'ΔP = ρ × c × ΔV', ref:'c : PEHD ≈ 400 m/s · Acier ≈ 1200 m/s · Fonte ≈ 1000 m/s',
      vars:['ΔP = Surpression due au coup de bélier (Pa)','ρ = Densité de l\'eau (kg/m³) — 1000','c = Célérité de l\'onde de pression (m/s)','ΔV = Variation de vitesse lors de la fermeture (m/s)'] },
    { nom:'Célérité onde de pression', expr:'c = √(E_eau / ρ) / √(1 + (E_eau × D) / (e × E_mat))', ref:'E_eau = 2,1 GPa',
      vars:['c = Célérité de l\'onde (m/s)','E_eau = Module d\'élasticité de l\'eau (Pa) — 2,1 × 10⁹','ρ = Densité de l\'eau (kg/m³) — 1000','D = Diamètre intérieur (m)','e = Épaisseur de la paroi (m)','E_mat = Module d\'élasticité du matériau (Pa) — Acier : 210 GPa · PEHD : 1 GPa'] },
    { nom:'NPSH disponible', expr:'NPSH_d = (Pa - Pv) / (ρ × g) - H_geo - J_asp', ref:'Condition : NPSH_d > NPSH_r + 0,5 m',
      vars:['NPSH_d = NPSH disponible (m)','Pa = Pression atmosphérique (Pa) — 101 325 Pa','Pv = Pression de vapeur saturante de l\'eau à T° (Pa)','ρ = Densité de l\'eau (kg/m³) — 1000','g = 9,81 m/s²','H_geo = Hauteur géométrique d\'aspiration (m)','J_asp = Pertes de charge côté aspiration (m)'] },
    { nom:'Viscosité cinématique eau (20°C)', expr:'ν = 1,007 × 10⁻⁶ m²/s', ref:'Varie avec T° : 0°C → 1,79 × 10⁻⁶ · 40°C → 0,66 × 10⁻⁶',
      vars:['ν = Viscosité cinématique (m²/s)','T° = Température de l\'eau (°C) — influe directement sur ν'] },
  ]},
];

/* ─── MODAL BIBLIOTHÈQUE ─── */
function showFormulaPicker() {
  var existing = document.getElementById('hc-formula-picker');
  if (existing) { existing.remove(); }

  var modal = document.createElement('div');
  modal.id = 'hc-formula-picker';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-end';

  var panel = document.createElement('div');
  panel.style.cssText = 'background:var(--c-surface,#fff);border-radius:20px 20px 0 0;max-height:85vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -8px 40px rgba(0,0,0,.18)';

  /* Header */
  var hdr = '<div style="padding:16px 20px 10px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--c-border,#e0e8e4)">'
    + '<div><div style="font-size:15px;font-weight:800;color:var(--c-text)">📚 Bibliothèque de formules</div>'
    + '<div style="font-size:11px;color:var(--c-text-3);margin-top:2px">Sélectionnez une formule pour l\'importer</div></div>'
    + '<button onclick="closeFormulaPicker()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0">✕</button>'
    + '</div>';

  /* Recherche */
  var search = '<div style="padding:10px 16px 0">'
    + '<div style="display:flex;align-items:center;gap:8px;background:var(--c-surface-2);border:1.5px solid var(--c-border);border-radius:12px;padding:8px 12px">'
    + '<span style="font-size:16px">🔍</span>'
    + '<input id="fp-search" type="text" placeholder="Rechercher une formule…" oninput="filterFormulaPicker(this.value)" '
    + 'style="border:none;background:transparent;font-family:var(--f-body);font-size:13px;outline:none;flex:1;color:var(--c-text)">'
    + '</div></div>';

  /* Corps — les items sont indexés dans _fpData pour éviter les bugs de guillemets dans onclick */
  window._fpData = [];
  var body = '<div id="fp-body" style="overflow-y:auto;flex:1;padding:10px 16px 20px">';
  FORMULES_BIBLIO.forEach(function(cat) {
    body += '<div class="fp-cat" data-cat="' + cat.cat + '">'
      + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin:10px 0 6px;display:flex;align-items:center;gap:6px">'
      + '<span>' + cat.ico + '</span><span>' + cat.cat + '</span></div>';
    cat.items.forEach(function(f) {
      var idx = window._fpData.length;
      window._fpData.push(f);
      var varsHtml = '';
      if (f.vars && f.vars.length) {
        varsHtml = '<div style="margin-top:6px;padding:6px 8px;background:var(--c-surface-2);border-radius:6px;border-left:2px solid var(--c-primary)">'
          + f.vars.map(function(v) { return '<div style="font-size:10px;color:var(--c-text-2);line-height:1.6">' + v + '</div>'; }).join('')
          + '</div>';
      }
      body += '<div class="fp-item" data-nom="' + f.nom.toLowerCase() + '" data-expr="' + f.expr.toLowerCase() + '" data-fpidx="' + idx + '" '
        + 'style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:10px;padding:10px 12px;margin-bottom:6px;cursor:pointer;transition:border-color .15s" '
        + 'onmouseover="this.style.borderColor=\'var(--c-primary)\'" onmouseout="this.style.borderColor=\'var(--c-border)\'">'
        + '<div style="font-size:12px;font-weight:700;color:var(--c-text);margin-bottom:4px">' + f.nom + '</div>'
        + '<div style="font-family:\'Courier New\',monospace;font-size:11px;color:var(--c-primary);background:var(--c-primary-l);padding:3px 8px;border-radius:6px;display:inline-block;margin-bottom:4px">' + f.expr + '</div>'
        + '<div style="font-size:10px;color:var(--c-text-3);margin-bottom:2px">' + f.ref + '</div>'
        + varsHtml
        + '</div>';
    });
    body += '</div>';
  });
  body += '</div>';

  panel.innerHTML = hdr + search + body;
  modal.appendChild(panel);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) { closeFormulaPicker(); return; }
    var item = e.target.closest('.fp-item');
    if (item) {
      var idx = parseInt(item.getAttribute('data-fpidx'), 10);
      var f = window._fpData[idx];
      if (f) selectFormula(f.nom, f.expr, f.ref, f.vars || []);
    }
  });
  document.body.appendChild(modal);
  setTimeout(function() { var s = document.getElementById('fp-search'); if (s) s.focus(); }, 100);
}

function _formulaNomSuggest(val) {
  var box = document.getElementById('formula-nom-suggest');
  if (!box) return;
  var q = (val || '').toLowerCase().trim();
  if (!q || q.length < 2 || typeof FORMULES_BIBLIO === 'undefined') { box.style.display = 'none'; return; }
  var matches = [];
  FORMULES_BIBLIO.forEach(function(cat) {
    cat.items.forEach(function(f) {
      if (f.nom.toLowerCase().includes(q)) matches.push(f);
    });
  });
  if (!matches.length) { box.style.display = 'none'; return; }
  window._fnsData = matches.slice(0, 8);
  box.innerHTML = window._fnsData.map(function(f, i) {
    return '<div data-fnsidx="' + i + '" '
      + 'style="padding:8px 12px;cursor:pointer;border-bottom:1px solid var(--c-border);font-size:12px" '
      + 'onmouseover="this.style.background=\'var(--c-surface-2)\'" onmouseout="this.style.background=\'\'">'
      + '<div style="font-weight:700;color:var(--c-text)">' + f.nom + '</div>'
      + '<div style="font-family:monospace;font-size:10px;color:var(--c-primary)">' + f.expr + '</div>'
      + '</div>';
  }).join('');
  box.addEventListener('click', function _fnsClick(e) {
    var item = e.target.closest('[data-fnsidx]');
    if (!item) return;
    box.removeEventListener('click', _fnsClick);
    var f = window._fnsData[parseInt(item.getAttribute('data-fnsidx'), 10)];
    if (f) _formulaSuggestSelect(f.nom, f.expr, f.ref || '', f.vars || []);
  });
  box.style.display = 'block';
}

function _formulaSuggestSelect(nom, expr, ref, vars) {
  var nEl = document.getElementById('formula-nom');
  var eEl = document.getElementById('formula-expr');
  var rEl = document.getElementById('formula-ref');
  if (nEl) nEl.value = nom;
  if (eEl) eEl.value = expr;
  if (rEl) rEl.value = ref || '';
  window._pendingFormulaVars = vars || [];
  var box = document.getElementById('formula-nom-suggest');
  if (box) box.style.display = 'none';
}

function filterFormulaPicker(q) {
  q = (q || '').toLowerCase().trim();
  document.querySelectorAll('#hc-formula-picker .fp-item').forEach(function(el) {
    var match = !q || (el.dataset.nom + ' ' + el.dataset.expr).includes(q);
    el.style.display = match ? 'block' : 'none';
  });
  document.querySelectorAll('#hc-formula-picker .fp-cat').forEach(function(cat) {
    var hasVisible = Array.from(cat.querySelectorAll('.fp-item')).some(function(el) { return el.style.display !== 'none'; });
    cat.style.display = hasVisible ? 'block' : 'none';
  });
}

function selectFormula(nom, expr, ref, vars) {
  var nEl   = document.getElementById('formula-nom');
  var eEl   = document.getElementById('formula-expr');
  var refEl = document.getElementById('formula-ref');
  var rEl   = document.getElementById('formula-result');
  if (nEl)   nEl.value   = nom;
  if (eEl)   eEl.value   = expr;
  if (refEl) refEl.value = ref || '';
  if (rEl)   rEl.value   = '';
  window._pendingFormulaVars = vars || [];
  closeFormulaPicker();
  authToast('Formule importée — vérifiez et enregistrez ✓');
  /* Scroll vers le formulaire */
  if (nEl) { nEl.scrollIntoView({ behavior:'smooth', block:'center' }); nEl.focus(); }
}

function closeFormulaPicker() {
  var m = document.getElementById('hc-formula-picker');
  if (m) m.remove();
}

/* ─── PICKER TEXTES RÉGLEMENTAIRES ─── */
function showReglPicker() {
  var existing = document.getElementById('hc-regl-picker');
  if (existing) { existing.remove(); }

  var modal = document.createElement('div');
  modal.id = 'hc-regl-picker';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-end';

  var panel = document.createElement('div');
  panel.style.cssText = 'background:var(--c-surface,#fff);border-radius:20px 20px 0 0;max-height:85vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -8px 40px rgba(0,0,0,.18)';

  var hdr = '<div style="padding:16px 20px 10px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--c-border,#e0e8e4)">'
    + '<div><div style="font-size:15px;font-weight:800;color:var(--c-text)">📋 Textes réglementaires</div>'
    + '<div style="font-size:11px;color:var(--c-text-3);margin-top:2px">Sélectionnez un texte pour l\'importer</div></div>'
    + '<button onclick="closeReglPicker()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0">✕</button>'
    + '</div>';

  var search = '<div style="padding:10px 16px 0">'
    + '<div style="display:flex;align-items:center;gap:8px;background:var(--c-surface-2);border:1.5px solid var(--c-border);border-radius:12px;padding:8px 12px">'
    + '<span style="font-size:16px">🔍</span>'
    + '<input id="rp-search" type="text" placeholder="Rechercher…" oninput="filterReglPicker(this.value)" '
    + 'style="border:none;background:transparent;font-family:var(--f-body);font-size:13px;outline:none;flex:1;color:var(--c-text)">'
    + '</div></div>';

  window._rpData = [];
  var body = '<div id="rp-body" style="overflow-y:auto;flex:1;padding:10px 16px 20px">';
  var CATS = { anc:'ANC', ac:'Assainissement collectif', ep:'Eau potable', milieux:'Milieux naturels', transversal:'Transversal' };
  Object.keys(CATS).forEach(function(key) {
    var list = (typeof REGL_TEXTES !== 'undefined' && REGL_TEXTES[key]) || [];
    if (!list.length) return;
    body += '<div class="rp-cat" data-cat="' + key + '">'
      + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin:10px 0 6px">' + CATS[key] + '</div>';
    list.forEach(function(t) {
      var idx = window._rpData.length;
      window._rpData.push(t);
      body += '<div class="rp-item" data-nom="' + (t.name||'').toLowerCase() + '" data-rpidx="' + idx + '" '
        + 'style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:10px;padding:10px 12px;margin-bottom:6px;cursor:pointer;transition:border-color .15s" '
        + 'onmouseover="this.style.borderColor=\'var(--c-primary)\'" onmouseout="this.style.borderColor=\'var(--c-border)\'">'
        + '<div style="font-size:12px;font-weight:700;color:var(--c-text);margin-bottom:3px">' + (t.ico||'📋') + ' ' + (t.name||'') + '</div>'
        + (t.ref ? '<div style="font-size:10px;color:var(--c-text-3)">' + t.ref + '</div>' : '')
        + '</div>';
    });
    body += '</div>';
  });
  body += '</div>';

  panel.innerHTML = hdr + search + body;
  modal.appendChild(panel);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) { closeReglPicker(); return; }
    var item = e.target.closest('.rp-item');
    if (item) {
      var idx = parseInt(item.getAttribute('data-rpidx'), 10);
      var t = window._rpData[idx];
      if (t) {
        var pts = (t.pts||[]).map(function(p){ return p.v; }).join('\n');
        selectRegl(t.name, t.ref||'', pts);
      }
    }
  });
  document.body.appendChild(modal);
  setTimeout(function() { var s = document.getElementById('rp-search'); if (s) s.focus(); }, 100);
}

function filterReglPicker(q) {
  q = (q || '').toLowerCase().trim();
  document.querySelectorAll('#hc-regl-picker .rp-item').forEach(function(el) {
    el.style.display = (!q || el.dataset.nom.includes(q)) ? 'block' : 'none';
  });
  document.querySelectorAll('#hc-regl-picker .rp-cat').forEach(function(cat) {
    cat.style.display = Array.from(cat.querySelectorAll('.rp-item')).some(function(el) { return el.style.display !== 'none'; }) ? 'block' : 'none';
  });
}

function selectRegl(nom, ref, pts) {
  var nEl = document.getElementById('regl-nom');
  var rEl = document.getElementById('regl-ref');
  var tEl = document.getElementById('regl-texte');
  if (nEl) nEl.value = nom || '';
  if (rEl) rEl.value = ref || '';
  if (tEl) tEl.value = pts || '';
  closeReglPicker();
  authToast('Texte importé — vérifiez et enregistrez ✓');
  if (nEl) { nEl.scrollIntoView({ behavior:'smooth', block:'center' }); nEl.focus(); }
}

function closeReglPicker() {
  var m = document.getElementById('hc-regl-picker');
  if (m) m.remove();
}

/* ═══════════════════════════════════════════════════════
   APERÇU DU RAPPORT — modal plein écran
   ═══════════════════════════════════════════════════════ */
var _previewBlob = null;
var _previewFmt  = null;
var _previewHtml = null;
var _previewName = null;

function previewReport(format) {
  var check = _canGenerateReport();
  if (!check.ok) { authToast(check.reason); setTimeout(openSidebar, 800); return; }

  var arr      = _getSelectedCalcs();
  var formulas = _getSelectedFormulas();
  var regls    = _getSelectedRegls();
  if (!arr.length && !formulas.length && !regls.length) { authToast('Aucun élément sélectionné.'); return; }

  _previewFmt  = format;
  _previewName = 'HydroCalc_rapport_' + _reportDate() + '.' + format;
  _previewBlob = null;
  _previewHtml = null;

  if (format === 'html' || format === 'pdf') {
    _buildHTMLContent(arr, formulas, regls, function(htmlContent) {
      _previewHtml = htmlContent;
      _showPreviewModal();
    });
  } else if (format === 'odt') {
    _buildODTBlob(arr, formulas, regls, function(blob) {
      _previewBlob = blob;
      _showPreviewModal();
    });
  } else if (format === 'docx') {
    authToast('Génération DOCX en cours…');
    _buildDOCXBlob(arr, formulas, regls, function(blob) {
      _previewBlob = blob;
      _showPreviewModal();
    });
  }
}

function _showPreviewModal() {
  var existing = document.getElementById('hc-report-preview');
  if (existing) existing.remove();

  var isHTML = _previewFmt === 'html' || _previewFmt === 'pdf';
  var modal = document.createElement('div');
  modal.id = 'hc-report-preview';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9998;display:flex;flex-direction:column';

  /* Barre d'outils */
  var fmt = { html:'HTML', odt:'ODT', docx:'DOCX', pdf:'PDF' }[_previewFmt] || '';
  var dlLabel = _previewFmt === 'pdf' ? '📕 Générer & Télécharger PDF' : '⬇ Télécharger';
  var toolbar = '<div style="background:#1A2B28;padding:12px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0">'
    + '<div style="font-size:13px;font-weight:800;color:#fff;flex:1">👁 Aperçu — Rapport ' + fmt + '</div>'
    + '<button onclick="downloadFromPreview()" style="display:flex;align-items:center;gap:6px;padding:8px 14px;background:#0A7460;color:#fff;border:none;border-radius:8px;font-family:var(--f-body);font-size:12px;font-weight:700;cursor:pointer">' + dlLabel + '</button>'
    + (_previewFmt !== 'pdf' ? '<button onclick="emailFromPreview()" style="display:flex;align-items:center;gap:6px;padding:8px 14px;background:#1550A0;color:#fff;border:none;border-radius:8px;font-family:var(--f-body);font-size:12px;font-weight:700;cursor:pointer">📧 Envoyer</button>' : '')
    + '<button onclick="closePreviewModal()" style="padding:8px 14px;background:rgba(255,255,255,.1);color:#fff;border:none;border-radius:8px;font-family:var(--f-body);font-size:12px;font-weight:700;cursor:pointer">✕ Fermer</button>'
    + '</div>';

  /* Corps aperçu */
  var body;
  if (isHTML && _previewHtml) {
    /* Rendu iframe */
    body = '<iframe id="preview-iframe" style="flex:1;border:none;background:#fff" sandbox="allow-same-origin"></iframe>';
  } else {
    /* ODT/DOCX : résumé des éléments */
    var arr = _getSelectedCalcs();
    var formulas = _getSelectedFormulas();
    var regls = _getSelectedRegls();
    var items = arr.map(function(c) {
      return '<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--c-surface);border-radius:8px;margin-bottom:6px">'
        + '<span style="font-size:18px">' + (c.type === 'outil' ? '🔧' : '📊') + '</span>'
        + '<div><div style="font-size:12px;font-weight:700">' + (c.type === 'outil' ? c.outil.name : c.module) + '</div>'
        + '<div style="font-size:11px;color:var(--c-text-3)">' + (c.type === 'outil' ? c.outil.cat : _htmlToText(c.valeur).slice(0,80)) + '</div></div>'
        + '</div>';
    }).join('');
    var fItems = formulas.map(function(f) {
      return '<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--c-surface);border-radius:8px;margin-bottom:6px">'
        + '<span style="font-size:18px">📐</span>'
        + '<div><div style="font-size:12px;font-weight:700">' + f.nom + '</div>'
        + '<div style="font-size:11px;color:var(--c-primary);font-family:monospace">' + f.expr + '</div></div>'
        + '</div>';
    }).join('');
    var rItems = regls.map(function(r) {
      return '<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--c-surface);border-radius:8px;margin-bottom:6px">'
        + '<span style="font-size:18px">📋</span>'
        + '<div><div style="font-size:12px;font-weight:700">' + r.nom + '</div>'
        + (r.ref ? '<div style="font-size:11px;color:var(--c-text-3)">' + r.ref + '</div>' : '')
        + '</div>'
        + '</div>';
    }).join('');
    body = '<div style="flex:1;overflow-y:auto;background:var(--c-bg);padding:24px">'
      + '<div style="max-width:640px;margin:0 auto">'
      + '<div style="background:#1A2B28;border-radius:12px;padding:20px;text-align:center;margin-bottom:20px">'
        + '<div style="font-size:32px;margin-bottom:8px">' + (_previewFmt === 'odt' ? '📝' : '📄') + '</div>'
        + '<div style="font-size:15px;font-weight:800;color:#fff">' + _previewName + '</div>'
        + '<div style="font-size:11px;color:rgba(255,255,255,.6);margin-top:4px">Prêt à télécharger ou envoyer par mail</div>'
      + '</div>'
      + (arr.length ? '<div style="font-size:11px;font-weight:800;color:#617068;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">' + arr.length + ' élément(s)</div>' + items : '')
      + (formulas.length ? '<div style="font-size:11px;font-weight:800;color:#617068;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;margin-top:12px">' + formulas.length + ' formule(s)</div>' + fItems : '')
      + (regls.length ? '<div style="font-size:11px;font-weight:800;color:#617068;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;margin-top:12px">' + regls.length + ' texte(s) réglementaire(s)</div>' + rItems : '')
      + '</div></div>';
  }

  modal.innerHTML = toolbar + body;
  document.body.appendChild(modal);

  /* Injecter dans l'iframe après insertion dans le DOM */
  if (isHTML && _previewHtml) {
    var iframe = document.getElementById('preview-iframe');
    if (iframe) {
      iframe.onload = function() {};
      iframe.srcdoc = _previewHtml;
    }
  }
}

/* ─── TÉLÉCHARGEMENT DEPUIS APERÇU ─── */
function downloadFromPreview() {
  if (_previewFmt === 'pdf') {
    closePreviewModal();
    authToast('Génération PDF en cours…');
    setTimeout(_doGeneratePDFReport, 200);
  } else if (_previewFmt === 'html' && _previewHtml) {
    _download(new Blob([_previewHtml], {type:'text/html;charset=utf-8'}), _previewName);
    _incrementReportQuota();
    authToast('Rapport HTML téléchargé ✓');
  } else if (_previewBlob) {
    _download(_previewBlob, _previewName);
    _incrementReportQuota();
    authToast('Rapport ' + _previewFmt.toUpperCase() + ' téléchargé ✓');
  }
}

/* ─── ENVOI PAR MAIL DEPUIS APERÇU ─── */
function emailFromPreview() {
  var h = _reportHeader();
  var subject = encodeURIComponent('Rapport HydroCalc — ' + h.dateStr + ' — ' + h.userName);

  if (_previewFmt === 'html' && _previewHtml) {
    /* Pour HTML : créer un Blob téléchargeable + ouvrir le mailto */
    _download(new Blob([_previewHtml], {type:'text/html;charset=utf-8'}), _previewName);
    setTimeout(function() {
      var body = encodeURIComponent(
        'Bonjour,\n\nVeuillez trouver ci-joint le rapport HydroCalc généré le ' + h.dateStr + '.\n\nLe fichier "' + _previewName + '" a été téléchargé sur votre appareil — merci de l\'attacher à ce mail avant envoi.\n\nCordialement,\n' + h.userName
      );
      window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
    }, 500);
    authToast('Fichier téléchargé — ajoutez-le en pièce jointe dans votre client mail');
  } else if (_previewBlob) {
    /* ODT/DOCX : télécharger puis ouvrir mailto */
    _download(_previewBlob, _previewName);
    setTimeout(function() {
      var body = encodeURIComponent(
        'Bonjour,\n\nVeuillez trouver ci-joint le rapport HydroCalc généré le ' + h.dateStr + '.\n\nLe fichier "' + _previewName + '" a été téléchargé sur votre appareil — merci de l\'attacher à ce mail avant envoi.\n\nCordialement,\n' + h.userName
      );
      window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
    }, 500);
    authToast('Fichier téléchargé — ajoutez-le en pièce jointe dans votre client mail');
  }
  _incrementReportQuota();
}

function closePreviewModal() {
  var m = document.getElementById('hc-report-preview');
  if (m) m.remove();
  _previewBlob = null; _previewHtml = null;
}

/* ─── HELPERS : génération de contenu pour le preview ─── */
function _buildHTMLContent(arr, formulas, regls, callback) {
  /* Réutilise la logique existante de generateHTMLReport */
  var h = _reportHeader();
  var userLogo = DataStore.userLogo.get();
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var logoHtml = (userLogo && plan !== 'free')
    ? '<img src="' + userLogo + '" style="height:56px;object-fit:contain">'
    : '<div style="font-size:26px;font-weight:900;color:#0A7460;letter-spacing:-1px;font-family:Georgia,serif">HydroCalc</div><div style="font-size:10px;color:#7ECABB;letter-spacing:2px;text-transform:uppercase;margin-top:2px">Application hydraulique</div>';

  var calcsHtml = arr.map(function(c) {
    var d = new Date(c.date);
    var dateStr = d.toLocaleDateString('fr-FR') + ' à ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
    if (c.type === 'outil' && c.outil) {
      var o = c.outil;
      var tColors = {ok:'#166038',warn:'#886000',danger:'#A82018'};
      var tBg = {ok:'#EAF8F0',warn:'#FDF0D8',danger:'#FDECEA'};
      return '<div style="margin-bottom:16px;border:1px solid var(--c-border);border-radius:12px;overflow:hidden">'
        + '<div style="background:linear-gradient(135deg,#0A3060,#0A5090);padding:10px 16px;display:flex;justify-content:space-between;align-items:center">'
          + '<span style="color:#fff;font-weight:800;font-size:13px">' + o.ico + ' ' + o.name + '</span>'
          + '<span style="font-size:10px;color:rgba(255,255,255,.6)">' + dateStr + '</span>'
        + '</div>'
        + '<div style="padding:14px 16px;background:var(--c-surface)">'
          + '<div style="font-size:11px;color:var(--c-text-2);margin-bottom:10px;padding:8px;background:var(--c-surface-2);border-left:3px solid #0A5090;border-radius:4px">' + o.usage + '</div>'
          + '<p style="font-size:10px;font-weight:800;color:var(--c-text-3);text-transform:uppercase;margin:0 0 4px">Protocole</p>'
          + '<ol style="margin:0 0 10px 16px;font-size:11px;color:var(--c-text-2)">' + o.protocole.map(function(p) { return '<li>' + p + '</li>'; }).join('') + '</ol>'
          + '<p style="font-size:10px;font-weight:800;color:var(--c-text-3);text-transform:uppercase;margin:0 0 4px">Interprétation</p>'
          + '<table style="width:100%;border-collapse:collapse;font-size:10px;margin-bottom:10px">'
            + '<tr style="background:var(--c-surface-2)"><th style="padding:4px 8px;text-align:left;color:var(--c-text-3)">Valeur</th><th style="padding:4px 8px;text-align:left;color:var(--c-text-3)">Diagnostic</th><th style="padding:4px 8px;text-align:left;color:var(--c-text-3)">Action</th></tr>'
            + o.interpretation.map(function(r) {
                return '<tr><td style="padding:4px 8px;background:' + (tBg[r.t]||'var(--c-surface-2)') + ';color:' + (tColors[r.t]||'var(--c-text)') + '">' + r.val + '</td><td style="padding:4px 8px;font-weight:700;color:' + (tColors[r.t]||'var(--c-text)') + '">' + r.label + '</td><td style="padding:4px 8px;color:var(--c-text-2)">' + r.action + '</td></tr>';
              }).join('')
          + '</table>'
          + '<div style="font-size:10px;color:var(--c-text-3);font-style:italic">📖 ' + o.norme + '</div>'
        + '</div>'
      + '</div>';
    }
    var detail = (c.detail||'').replace(/<br\s*\/?>/gi,'<br>').replace(/<(?!br)[^>]+>/g,'');
    return '<div style="margin-bottom:16px;border:1px solid var(--c-border);border-radius:12px;overflow:hidden">'
      + '<div style="background:linear-gradient(135deg,#0A7460,#0A5040);padding:10px 16px;display:flex;justify-content:space-between;align-items:center">'
        + '<span style="background:rgba(255,255,255,.2);color:#fff;font-size:10px;font-weight:800;padding:3px 10px;border-radius:20px">' + c.module + '</span>'
        + '<span style="font-size:10px;color:rgba(255,255,255,.7)">' + dateStr + '</span>'
      + '</div>'
      + '<div style="padding:14px 16px;background:var(--c-surface)">'
        + '<div style="font-size:20px;font-weight:800;color:var(--c-primary);margin-bottom:8px;font-family:Georgia,serif">' + (c.valeur||'') + '</div>'
        + (detail ? '<div style="font-size:12px;color:var(--c-text-2);padding:10px;background:var(--c-surface-2);border-radius:8px;border-left:3px solid var(--c-primary)">' + detail + '</div>' : '')
      + '</div>'
    + '</div>';
  }).join('');

  var css = 'body{font-family:Arial,sans-serif;max-width:820px;margin:0 auto;padding:32px 24px;color:#141C18;background:#F3F6F4}'
    + '.page{background:#fff;border-radius:16px;padding:32px;box-shadow:0 4px 24px rgba(0,0,0,.08)}'
    + '.header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:20px;margin-bottom:28px;border-bottom:2px solid #E0F4F0}'
    + '.footer{margin-top:28px;padding-top:16px;border-top:1px solid #DEE8E4;text-align:center;font-size:10px;color:#8A9890}'
    + '@media print{body{background:#fff;padding:0}.page{box-shadow:none;border-radius:0}}';

  var formulasHtml = formulas.map(function(f) {
    return '<div style="margin-bottom:12px;border:1px solid var(--c-border);border-radius:10px;overflow:hidden">'
      + '<div style="background:var(--c-surface-2);padding:8px 14px"><span style="font-weight:800;font-size:11px;color:var(--c-primary)">📐 ' + f.nom + '</span></div>'
      + '<div style="padding:10px 14px"><div style="font-family:\'Courier New\',monospace;font-size:13px;color:var(--c-primary);background:var(--c-surface-2);padding:6px 10px;border-radius:6px;margin-bottom:6px">' + f.expr + '</div>'
      + (f.result ? '<div style="font-size:13px;font-weight:700;color:var(--c-ok)">= ' + f.result + '</div>' : '')
      + '</div></div>';
  }).join('');

  var reglsHtml = (regls||[]).map(function(r) {
    return '<div style="margin-bottom:12px;border:1px solid var(--c-border);border-radius:10px;overflow:hidden">'
      + '<div style="background:var(--c-surface-2);padding:8px 14px"><span style="font-weight:800;font-size:11px;color:var(--c-ok)">📋 ' + r.nom + '</span>'
      + (r.ref ? '<span style="font-size:10px;color:var(--c-text-3);margin-left:10px">' + r.ref + '</span>' : '')
      + '</div>'
      + (r.texte ? '<div style="padding:10px 14px;font-size:11px;color:var(--c-text-2);line-height:1.6;white-space:pre-wrap">' + r.texte + '</div>' : '')
      + '</div>';
  }).join('');

  var html = '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Rapport HydroCalc — ' + h.dateStr + '</title>'
    + '<style>' + css + '</style></head><body><div class="page">'
    + '<div class="header"><div>' + logoHtml + '</div>'
    + '<div style="text-align:right"><div style="font-size:16px;font-weight:800">' + h.userName + '</div>'
    + '<div style="font-size:11px;color:#617068">' + h.dateStr + '</div>'
    + (h.projectTitle ? '<div style="font-size:12px;font-weight:700;color:#0A7460;margin-top:4px;padding-top:4px;border-top:1px solid #E0F4F0">' + h.projectTitle + '</div>' : '')
    + '</div></div>'
    + (arr.length ? '<div style="font-size:13px;font-weight:800;color:#617068;text-transform:uppercase;letter-spacing:.08em;margin-bottom:16px">📊 Calculs & fiches (' + arr.length + ')</div>' + calcsHtml : '')
    + (formulas.length ? '<div style="font-size:13px;font-weight:800;color:#617068;text-transform:uppercase;letter-spacing:.08em;margin-bottom:16px;margin-top:20px">📐 Formules (' + formulas.length + ')</div>' + formulasHtml : '')
    + (reglsHtml ? '<div style="font-size:13px;font-weight:800;color:#617068;text-transform:uppercase;letter-spacing:.08em;margin-bottom:16px;margin-top:20px">📋 Textes réglementaires (' + (regls||[]).length + ')</div>' + reglsHtml : '')
    + '<div class="footer">HydroCalc · hydrocalc.fr · Rapport généré le ' + new Date().toLocaleString('fr-FR') + '</div>'
    + '</div></body></html>';

  callback(html);
}

function _buildODTBlob(arr, formulas, regls, callback) {
  if (!window.JSZip) { authToast('Bibliothèque ZIP non chargée.'); return; }
  /* Réutilise generateODTReport mais retourne le blob via callback */
  var h = _reportHeader();
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var userLogo = DataStore.userLogo.get();
  var logoStr = (userLogo && plan !== 'free') ? 'Logo importé' : 'HydroCalc';

  var calcsXml = arr.map(function(c) {
    var d = new Date(c.date);
    var dateStr = d.toLocaleDateString('fr-FR') + ' à ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
    if (c.type === 'outil' && c.outil) {
      var o = c.outil;
      return '<text:p text:style-name="HC_Module">🔧 ' + _xmlEsc(o.name) + ' — ' + _xmlEsc(o.cat) + '<text:tab/>' + dateStr + '</text:p>'
        + '<text:p text:style-name="HC_Value">' + _xmlEsc(o.usage) + '</text:p>'
        + '<text:p text:style-name="HC_Detail">PROTOCOLE :</text:p>'
        + o.protocole.map(function(p, pi) { return '<text:p text:style-name="HC_Detail">' + (pi+1) + '. ' + _xmlEsc(p) + '</text:p>'; }).join('')
        + '<text:p text:style-name="HC_Detail">INTERPRÉTATION :</text:p>'
        + o.interpretation.map(function(r) { return '<text:p text:style-name="HC_Detail">• ' + _xmlEsc(r.val) + ' → ' + _xmlEsc(r.label) + ' : ' + _xmlEsc(r.action) + '</text:p>'; }).join('')
        + '<text:p text:style-name="HC_Detail">NORMES : ' + _xmlEsc(o.norme) + '</text:p>'
        + '<text:p text:style-name="HC_Space"> </text:p>';
    }
    return '<text:p text:style-name="HC_Module">' + _xmlEsc(c.module||'') + '<text:tab/>' + dateStr + '</text:p>'
      + '<text:p text:style-name="HC_Value">' + _xmlEsc(_htmlToText(c.valeur)) + '</text:p>'
      + (_htmlToText(c.detail) ? '<text:p text:style-name="HC_Detail">' + _xmlEsc(_htmlToText(c.detail)) + '</text:p>' : '')
      + '<text:p text:style-name="HC_Space"> </text:p>';
  }).join('');

  var formulasXml = formulas.map(function(f) {
    return '<text:p text:style-name="HC_Module">📐 ' + _xmlEsc(f.nom) + '</text:p>'
      + '<text:p text:style-name="HC_Value">' + _xmlEsc(f.expr) + '</text:p>'
      + (f.result ? '<text:p text:style-name="HC_Detail">= ' + _xmlEsc(f.result) + '</text:p>' : '')
      + '<text:p text:style-name="HC_Space"> </text:p>';
  }).join('');

  var reglsXml = (regls||[]).map(function(r) {
    return '<text:p text:style-name="HC_Module">📋 ' + _xmlEsc(r.nom) + '</text:p>'
      + (r.ref ? '<text:p text:style-name="HC_Detail">' + _xmlEsc(r.ref) + '</text:p>' : '')
      + (r.texte ? r.texte.split('\n').map(function(line) { return '<text:p text:style-name="HC_Detail">' + _xmlEsc(line) + '</text:p>'; }).join('') : '')
      + '<text:p text:style-name="HC_Space"> </text:p>';
  }).join('');

  /* ODT content.xml (simplifié depuis generateODTReport) */
  var content = '<?xml version="1.0" encoding="UTF-8"?>'
    + '<office:document-content xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" office:version="1.3">'
    + '<office:automatic-styles>'
    + '<style:style style:name="HC_Module" style:family="paragraph"><style:text-properties fo:font-weight="bold" fo:color="#065A48" fo:font-size="11pt"/></style:style>'
    + '<style:style style:name="HC_Value" style:family="paragraph"><style:paragraph-properties fo:margin-left="0.5cm"/><style:text-properties fo:font-size="13pt" fo:font-weight="bold" fo:color="#0A5040"/></style:style>'
    + '<style:style style:name="HC_Detail" style:family="paragraph"><style:paragraph-properties fo:margin-left="0.5cm"/><style:text-properties fo:font-size="9pt" fo:color="#3A4840"/></style:style>'
    + '<style:style style:name="HC_Space" style:family="paragraph"><style:text-properties fo:font-size="6pt"/></style:style>'
    + '</office:automatic-styles>'
    + '<office:body><office:text>'
    + '<text:p text:style-name="HC_Module">HydroCalc — ' + _xmlEsc(logoStr) + ' — ' + _xmlEsc(h.userName) + ' — ' + _xmlEsc(h.dateStr) + '</text:p>'
    + '<text:p text:style-name="HC_Space"> </text:p>'
    + calcsXml + formulasXml + reglsXml
    + '</office:text></office:body></office:document-content>';

  var zip = new JSZip();
  zip.file('mimetype', 'application/vnd.oasis.opendocument.text');
  zip.file('content.xml', content);
  zip.file('META-INF/manifest.xml', '<?xml version="1.0" encoding="UTF-8"?><manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"><manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.oasis.opendocument.text"/><manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/></manifest:manifest>');
  zip.generateAsync({ type:'blob', mimeType:'application/vnd.oasis.opendocument.text' }).then(function(blob) {
    callback(blob);
  });
}

function _buildDOCXBlob(arr, formulas, regls, callback) {
  /* Délègue à generateWordReport mais capture le blob */
  /* On reconstruit le doc DOCX et on passe le blob en callback */
  var check = _canGenerateReport();
  if (!check.ok) { authToast(check.reason); return; }

  var D = window.docx;
  if (!D) { authToast('Bibliothèque DOCX non chargée.'); return; }

  var h = _reportHeader();
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var userLogo = DataStore.userLogo.get();
  var logoStr = (userLogo && plan !== 'free') ? 'Logo importé' : 'HydroCalc';

  var bords = {
    top:    { style: D.BorderStyle.NONE, size: 0, color: 'auto' },
    bottom: { style: D.BorderStyle.NONE, size: 0, color: 'auto' },
    left:   { style: D.BorderStyle.NONE, size: 0, color: 'auto' },
    right:  { style: D.BorderStyle.NONE, size: 0, color: 'auto' },
  };

  /* Header table */
  var headerTable = new D.Table({
    width: { size: 9026, type: D.WidthType.DXA },
    columnWidths: [3000, 6026],
    rows: [new D.TableRow({ children: [
      new D.TableCell({
        borders: bords, width: { size: 3000, type: D.WidthType.DXA },
        shading: { fill: '0A5040', type: D.ShadingType.CLEAR },
        margins: { top: 200, bottom: 200, left: 200, right: 200 },
        children: [new D.Paragraph({ children: [new D.TextRun({ text: logoStr, bold: true, size: 32, color: 'FFFFFF', font: 'Arial' })] })]
      }),
      new D.TableCell({
        borders: bords, width: { size: 6026, type: D.WidthType.DXA },
        shading: { fill: '0A5040', type: D.ShadingType.CLEAR },
        margins: { top: 200, bottom: 200, left: 200, right: 200 },
        children: [
          new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: h.userName, bold: true, size: 24, color: 'FFFFFF', font: 'Arial' })] }),
          new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: h.dateStr, size: 18, color: 'E0F4F0', font: 'Arial' })] })
        ]
      })
    ]})],
  });

  var calcChildren = [];
  calcChildren.push(new D.Paragraph({
    children: [new D.TextRun({ text: 'Calculs & fiches (' + arr.length + ')', bold: true, size: 22, color: '617068', font: 'Arial' })],
    spacing: { before: 240, after: 160 }
  }));

  arr.forEach(function(c) {
    var d = new Date(c.date);
    var cDate = d.toLocaleDateString('fr-FR') + ' à ' + d.toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' });
    if (c.type === 'outil' && c.outil) {
      var o = c.outil;
      calcChildren.push(new D.Table({
        width: { size: 9026, type: D.WidthType.DXA }, columnWidths: [5500, 3526],
        rows: [new D.TableRow({ children: [
          new D.TableCell({ borders: bords, shading: { fill: '0A3060', type: D.ShadingType.CLEAR }, margins: { top:80, bottom:80, left:140, right:140 },
            children: [new D.Paragraph({ children: [new D.TextRun({ text: o.ico + ' ' + o.name, bold:true, size:18, color:'FFFFFF', font:'Arial' })] })]
          }),
          new D.TableCell({ borders: bords, shading: { fill: '0A3060', type: D.ShadingType.CLEAR }, margins: { top:80, bottom:80, left:140, right:140 },
            children: [new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: cDate, size:16, color:'B0C8F0', font:'Arial' })] })]
          })
        ]})],
      }));
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text: o.usage, size:18, color:'0A3060', italics:true, font:'Arial' })], spacing:{before:100,after:80}, indent:{left:140} }));
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text:'PROTOCOLE', bold:true, size:16, color:'617068', font:'Arial' })], spacing:{before:80}, indent:{left:140} }));
      o.protocole.forEach(function(p, pi) {
        calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text:(pi+1)+'. '+p, size:17, color:'3A4840', font:'Arial' })], spacing:{after:40}, indent:{left:200} }));
      });
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text:'INTERPRÉTATION', bold:true, size:16, color:'617068', font:'Arial' })], spacing:{before:80}, indent:{left:140} }));
      o.interpretation.forEach(function(r) {
        var col = {ok:'166038',warn:'886000',danger:'A82018'}[r.t]||'3A4840';
        calcChildren.push(new D.Paragraph({ children: [
          new D.TextRun({ text:'• '+r.val+' ['+r.label+'] ', bold:true, size:16, color:col, font:'Arial' }),
          new D.TextRun({ text:'→ '+r.action, size:16, color:'3A4840', font:'Arial' })
        ], spacing:{after:40}, indent:{left:200} }));
      });
      calcChildren.push(new D.Paragraph({ children: [new D.TextRun({ text:'📖 NORMES : '+o.norme, size:15, color:'617068', italics:true, font:'Arial' })], spacing:{after:40}, indent:{left:140} }));
    } else {
      var cleanVal = _htmlToText(c.valeur);
      var cleanDet = _htmlToText(c.detail);
      calcChildren.push(new D.Table({
        width:{size:9026,type:D.WidthType.DXA}, columnWidths:[5500,3526],
        rows:[new D.TableRow({ children:[
          new D.TableCell({ borders:bords, shading:{fill:'0A7460',type:D.ShadingType.CLEAR}, margins:{top:80,bottom:80,left:140,right:140},
            children:[new D.Paragraph({children:[new D.TextRun({text:c.module,bold:true,size:18,color:'FFFFFF',font:'Arial'})]})]
          }),
          new D.TableCell({ borders:bords, shading:{fill:'0A7460',type:D.ShadingType.CLEAR}, margins:{top:80,bottom:80,left:140,right:140},
            children:[new D.Paragraph({alignment:D.AlignmentType.RIGHT,children:[new D.TextRun({text:cDate,size:16,color:'E0F4F0',font:'Arial'})]})]
          })
        ]})]
      }));
      calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:cleanVal,bold:true,size:26,color:'065A48',font:'Arial'})], spacing:{before:120,after:80}, indent:{left:140} }));
      if (cleanDet) calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:cleanDet,size:18,color:'3A4840',font:'Arial'})], spacing:{after:120}, indent:{left:140} }));
    }
    calcChildren.push(new D.Paragraph({ children:[new D.TextRun('')], border:{bottom:{style:D.BorderStyle.SINGLE,size:2,color:'DEE8E4',space:1}}, spacing:{after:160} }));
  });

  if (formulas.length) {
    calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:'Formules personnalisées ('+formulas.length+')',bold:true,size:22,color:'617068',font:'Arial'})], spacing:{before:240,after:160} }));
    formulas.forEach(function(f) {
      calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:'📐 '+f.nom,bold:true,size:20,color:'1550A0',font:'Arial'})], spacing:{before:120,after:60} }));
      calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:f.expr,size:20,color:'1550A0',font:'Courier New'})], spacing:{before:80,after:60}, indent:{left:140} }));
      if (f.result) calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:'= '+f.result,bold:true,size:20,color:'166038',font:'Arial'})], spacing:{after:120}, indent:{left:140} }));
      calcChildren.push(new D.Paragraph({ children:[new D.TextRun('')], border:{bottom:{style:D.BorderStyle.SINGLE,size:2,color:'DEE8E4',space:1}}, spacing:{after:160} }));
    });
  }

  if ((regls||[]).length) {
    calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:'Textes réglementaires ('+regls.length+')',bold:true,size:22,color:'617068',font:'Arial'})], spacing:{before:240,after:160} }));
    regls.forEach(function(r) {
      calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:'📋 '+r.nom,bold:true,size:20,color:'165028',font:'Arial'})], spacing:{before:120,after:40} }));
      if (r.ref) calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:r.ref,size:16,color:'617068',font:'Arial'})], spacing:{after:60}, indent:{left:140} }));
      if (r.texte) r.texte.split('\n').forEach(function(line) {
        calcChildren.push(new D.Paragraph({ children:[new D.TextRun({text:line,size:18,color:'3A4840',font:'Arial'})], spacing:{after:40}, indent:{left:140} }));
      });
      calcChildren.push(new D.Paragraph({ children:[new D.TextRun('')], border:{bottom:{style:D.BorderStyle.SINGLE,size:2,color:'DEE8E4',space:1}}, spacing:{after:160} }));
    });
  }

  var footer = new D.Footer({ children:[new D.Paragraph({
    alignment:D.AlignmentType.CENTER,
    border:{top:{style:D.BorderStyle.SINGLE,size:2,color:'DEE8E4',space:4}},
    children:[
      new D.TextRun({text:'HydroCalc · hydrocalc.fr · Page ',size:16,color:'8A9890',font:'Arial'}),
      new D.TextRun({children:[D.PageNumber.CURRENT],size:16,color:'8A9890',font:'Arial'}),
      new D.TextRun({text:' / ',size:16,color:'8A9890',font:'Arial'}),
      new D.TextRun({children:[D.PageNumber.TOTAL_PAGES],size:16,color:'8A9890',font:'Arial'}),
    ]
  })]});

  var doc = new D.Document({ sections:[{
    properties:{ page:{ size:{width:11906,height:16838}, margin:{top:1134,right:1134,bottom:1134,left:1134} } },
    footers:{ default:footer },
    children:[headerTable, new D.Paragraph({children:[new D.TextRun('')],spacing:{after:200}})].concat(calcChildren)
  }]});

  D.Packer.toBlob(doc).then(function(blob) { callback(blob); }).catch(function(err) { authToast('Erreur DOCX : ' + err.message); });
}

/* ═══════════════════════════════════════════════════
   MODAL TARIFICATION ÉTABLISSEMENT
═══════════════════════════════════════════════════ */
var ETAB_TIERS = [
  { min:1,  max:9,  unitPrice:24, label:'Tarif standard' },
  { min:10, max:29, unitPrice:19, label:'-20% · 10 à 29 abonnements' },
  { min:30, max:999,unitPrice:14, label:'-40% · 30 abonnements et plus' },
];

function _etabTier(qty) {
  return ETAB_TIERS.find(function(t){ return qty >= t.min && qty <= t.max; }) || ETAB_TIERS[0];
}

function showProPricingModal() {
  var existing = document.getElementById('pro-pricing-modal');
  if (existing) existing.remove();
  window._proSelectedPlan = 'pro';

  var modal = document.createElement('div');
  modal.id = 'pro-pricing-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.55);display:flex;align-items:flex-end;justify-content:center;padding:0';
  modal.innerHTML = `
    <div style="background:var(--c-surface);border-radius:var(--r-xl) var(--r-xl) 0 0;width:100%;max-width:480px;padding:var(--s-4);padding-bottom:calc(var(--s-4) + env(safe-area-inset-bottom))">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s-3)">
        <div>
          <div style="font-size:18px;font-weight:800;color:var(--c-text-1)">⚡ Abonnement Pro</div>
          <div style="font-size:11px;color:var(--c-text-3);margin-top:2px">Choisissez votre période de facturation</div>
        </div>
        <button onclick="document.getElementById('pro-pricing-modal').remove()" style="background:none;border:none;font-size:24px;cursor:pointer;color:var(--c-text-3);line-height:1;padding:4px">×</button>
      </div>

      <div onclick="proBillingSelect('pro')" id="pro-card-monthly"
        style="border:2px solid var(--c-primary);border-radius:var(--r-lg);padding:var(--s-3);margin-bottom:var(--s-2);cursor:pointer;background:var(--c-primary-l)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:14px;font-weight:800;color:var(--c-text-1)">Mensuel</div>
            <div style="font-size:11px;color:var(--c-text-3)">Résiliable à tout moment</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:22px;font-weight:800;color:var(--c-primary)">5,90 €</div>
            <div style="font-size:10px;color:var(--c-text-3)">/mois</div>
          </div>
        </div>
      </div>

      <div onclick="proBillingSelect('pro_annual')" id="pro-card-annual"
        style="border:2px solid var(--c-border);border-radius:var(--r-lg);padding:var(--s-3);margin-bottom:var(--s-3);cursor:pointer;position:relative">
        <div style="position:absolute;top:-10px;right:12px;background:#0d6e3f;color:#fff;font-size:10px;font-weight:800;padding:3px 10px;border-radius:20px">2 MOIS OFFERTS</div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:14px;font-weight:800;color:var(--c-text-1)">Annuel</div>
            <div style="font-size:11px;color:var(--c-text-3)">59 € facturés en une fois</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:22px;font-weight:800;color:var(--c-text-1)">4,92 €</div>
            <div style="font-size:10px;color:var(--c-text-3)">/mois</div>
          </div>
        </div>
      </div>

      <div style="background:rgba(150,240,216,.1);border:1px solid rgba(150,240,216,.3);border-radius:var(--r-sm);padding:8px 12px;margin-bottom:var(--s-3);font-size:11px;color:var(--c-text-3);text-align:center">
        🎁 7 jours d'essai gratuit · Sans engagement · Résiliable à tout moment
      </div>

      <button onclick="proLaunchCheckout()"
        style="width:100%;padding:15px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-lg);font-size:15px;font-weight:800;cursor:pointer;font-family:var(--f-body)">
        Commencer l'essai gratuit →
      </button>
      <div style="text-align:center;font-size:10px;color:var(--c-text-4);margin-top:8px">Paiement sécurisé via Stripe</div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', function(e){ if(e.target===modal) modal.remove(); });
}

function proBillingSelect(planKey) {
  window._proSelectedPlan = planKey;
  var mCard = document.getElementById('pro-card-monthly');
  var aCard = document.getElementById('pro-card-annual');
  if (mCard) {
    mCard.style.border = planKey === 'pro' ? '2px solid var(--c-primary)' : '2px solid var(--c-border)';
    mCard.style.background = planKey === 'pro' ? 'var(--c-primary-l)' : 'transparent';
  }
  if (aCard) {
    aCard.style.border = planKey === 'pro_annual' ? '2px solid var(--c-primary)' : '2px solid var(--c-border)';
    aCard.style.background = planKey === 'pro_annual' ? 'var(--c-primary-l)' : 'transparent';
  }
}

function proLaunchCheckout() {
  var planKey = window._proSelectedPlan || 'pro';
  var modal = document.getElementById('pro-pricing-modal');
  if (modal) modal.remove();
  if (typeof stripeStartCheckout === 'function') stripeStartCheckout(planKey, 1);
}

function showEtabPricingModal() {
  var existing = document.getElementById('etab-pricing-modal');
  if (existing) { existing.remove(); }

  window._etabBilling = 'monthly';
  var modal = document.createElement('div');
  modal.id = 'etab-pricing-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.55);display:flex;align-items:flex-end;justify-content:center;padding:0';
  modal.innerHTML = `
    <div style="background:var(--c-surface);border-radius:var(--r-xl) var(--r-xl) 0 0;width:100%;max-width:480px;padding:var(--s-4);padding-bottom:calc(var(--s-4) + env(safe-area-inset-bottom))">

      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--s-3)">
        <div>
          <div style="font-size:18px;font-weight:800;color:var(--c-text-1)">🏛️ Abonnement Établissement</div>
          <div style="font-size:11px;color:var(--c-text-3);margin-top:2px">Choisissez le nombre de licences</div>
        </div>
        <button onclick="document.getElementById('etab-pricing-modal').remove()" style="background:none;border:none;font-size:24px;cursor:pointer;color:var(--c-text-3);line-height:1;padding:4px">×</button>
      </div>

      <div style="display:flex;background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-lg);padding:4px;margin-bottom:var(--s-3)">
        <button id="etab-toggle-monthly" onclick="etabSetBilling('monthly')"
          style="flex:1;padding:9px;border:none;border-radius:var(--r-md);font-size:12px;font-weight:700;cursor:pointer;font-family:var(--f-body);background:var(--c-primary);color:#fff;transition:all .2s">
          Mensuel
        </button>
        <button id="etab-toggle-annual" onclick="etabSetBilling('annual')"
          style="flex:1;padding:9px;border:none;border-radius:var(--r-md);font-size:12px;font-weight:700;cursor:pointer;font-family:var(--f-body);background:transparent;color:var(--c-text-2);transition:all .2s">
          Annuel &nbsp;<span style="font-size:9px;font-weight:800;color:#0d6e3f;background:#e6faf3;padding:2px 5px;border-radius:10px">2 MOIS OFFERTS</span>
        </button>
      </div>

      <div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-lg);padding:var(--s-3);margin-bottom:var(--s-3)">
        <div style="font-size:11px;font-weight:700;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Nombre d'abonnements</div>
        <div style="display:flex;align-items:center;gap:var(--s-3)">
          <button onclick="etabQtyChange(-1)" style="width:44px;height:44px;border-radius:var(--r-md);border:1.5px solid var(--c-border);background:var(--c-surface);font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--c-text-1);font-weight:300;flex-shrink:0">−</button>
          <input id="etab-qty-input" type="number" min="1" max="500" value="1"
            oninput="etabQtyRefresh()"
            style="flex:1;text-align:center;font-size:28px;font-weight:800;color:var(--c-text-1);border:1.5px solid var(--c-primary);border-radius:var(--r-md);padding:8px 4px;background:var(--c-surface);font-family:var(--f-display)">
          <button onclick="etabQtyChange(+1)" style="width:44px;height:44px;border-radius:var(--r-md);border:1.5px solid var(--c-border);background:var(--c-surface);font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--c-text-1);font-weight:300;flex-shrink:0">＋</button>
        </div>
      </div>

      <div id="etab-tier-badge" style="margin-bottom:var(--s-3)"></div>

      <div id="etab-price-summary" style="margin-bottom:var(--s-3)"></div>

      <div style="margin-bottom:var(--s-3)">
        <div style="font-size:11px;font-weight:700;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">Paliers tarifaires</div>
        <div style="display:flex;flex-direction:column;gap:4px" id="etab-tiers-list"></div>
      </div>

      <button id="etab-checkout-btn" onclick="etabLaunchCheckout()"
        style="width:100%;padding:15px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-lg);font-size:15px;font-weight:800;cursor:pointer;font-family:var(--f-body)">
        Procéder au paiement →
      </button>
      <div style="text-align:center;font-size:10px;color:var(--c-text-4);margin-top:8px">Paiement sécurisé via Stripe · Sans engagement · Résiliable à tout moment</div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', function(e){ if(e.target===modal) modal.remove(); });
  etabQtyRefresh();
}

function etabSetBilling(period) {
  window._etabBilling = period;
  var mBtn = document.getElementById('etab-toggle-monthly');
  var aBtn = document.getElementById('etab-toggle-annual');
  if (mBtn) {
    mBtn.style.background = period === 'monthly' ? 'var(--c-primary)' : 'transparent';
    mBtn.style.color = period === 'monthly' ? '#fff' : 'var(--c-text-2)';
  }
  if (aBtn) {
    aBtn.style.background = period === 'annual' ? 'var(--c-primary)' : 'transparent';
    aBtn.style.color = period === 'annual' ? '#fff' : 'var(--c-text-2)';
  }
  etabQtyRefresh();
}

function etabQtyChange(delta) {
  var inp = document.getElementById('etab-qty-input');
  if (!inp) return;
  var v = Math.max(1, Math.min(500, (parseInt(inp.value)||1) + delta));
  inp.value = v;
  etabQtyRefresh();
}

function etabQtyRefresh() {
  var inp = document.getElementById('etab-qty-input');
  if (!inp) return;
  var qty = Math.max(1, Math.min(500, parseInt(inp.value)||1));
  inp.value = qty;

  var isAnnual   = window._etabBilling === 'annual';
  var tier       = _etabTier(qty);
  var totalMonth = tier.unitPrice * qty;
  var totalYear  = totalMonth * 10;
  var totalFull  = 24 * qty;
  var savings    = totalFull - totalMonth;
  var discount   = tier.unitPrice < 24 ? Math.round((1 - tier.unitPrice / 24) * 100) : 0;

  var badgeEl = document.getElementById('etab-tier-badge');
  if (badgeEl) {
    badgeEl.innerHTML = discount > 0
      ? '<div style="display:inline-flex;align-items:center;gap:6px;background:#e6faf3;border:1px solid #0d6e3f;border-radius:20px;padding:5px 12px"><span style="font-size:13px;font-weight:800;color:#065A48">🎉 −' + discount + '% appliqué</span><span style="font-size:11px;color:var(--c-text-3)">' + tier.label + '</span></div>'
      : '<div style="display:inline-flex;align-items:center;gap:6px;background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:20px;padding:5px 12px"><span style="font-size:11px;color:var(--c-text-3)">Tarif standard · Réductions dès 10 abonnements</span></div>';
  }

  var summaryEl = document.getElementById('etab-price-summary');
  if (summaryEl) {
    var displayTotal = isAnnual ? totalYear : totalMonth;
    var displayUnit  = isAnnual ? '/an' : '/mois';
    var strikeHtml = discount > 0
      ? '<span style="font-size:18px;color:rgba(255,255,255,.4);text-decoration:line-through;margin-right:4px">' + (isAnnual ? (totalFull*10) : totalFull).toLocaleString('fr-FR') + ' €</span>'
      : '';
    var savingsHtml = savings > 0 && !isAnnual
      ? '<div style="background:rgba(150,240,216,.15);border:1px solid rgba(150,240,216,.35);border-radius:var(--r-sm);padding:7px 10px;display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">' +
          '<span style="font-size:11px;color:#96F0D8;font-weight:700">💰 Économie mensuelle</span>' +
          '<span style="font-size:13px;font-weight:800;color:#96F0D8">−' + savings.toLocaleString('fr-FR') + ' €/mois</span>' +
        '</div>'
      : '';
    var bottomRowHtml = isAnnual
      ? '<div style="background:rgba(255,255,255,.1);border-radius:var(--r-sm);padding:8px 10px;display:flex;justify-content:space-between;align-items:center">' +
          '<span style="font-size:11px;color:rgba(255,255,255,.7)">💰 Économie vs mensuel</span>' +
          '<span style="font-size:13px;font-weight:800;color:#96F0D8">+' + (totalMonth*2).toLocaleString('fr-FR') + ' € offerts</span>' +
        '</div>'
      : '<div style="background:rgba(255,255,255,.1);border-radius:var(--r-sm);padding:8px 10px;display:flex;justify-content:space-between;align-items:center">' +
          '<span style="font-size:11px;color:rgba(255,255,255,.7)">🗓️ Annuel (2 mois offerts)</span>' +
          '<span style="font-size:13px;font-weight:800;color:#96F0D8">' + totalYear.toLocaleString('fr-FR') + ' €/an</span>' +
        '</div>';
    summaryEl.innerHTML =
      '<div style="background:linear-gradient(135deg,#072018,#0A3828);border-radius:var(--r-lg);padding:var(--s-3) var(--s-4)">' +
        '<div style="display:flex;align-items:baseline;gap:4px;margin-bottom:2px">' +
          strikeHtml +
          '<span style="font-size:32px;font-weight:800;color:#fff">' + displayTotal.toLocaleString('fr-FR') + ' €</span>' +
          '<span style="font-size:13px;color:rgba(255,255,255,.6)">' + displayUnit + '</span>' +
        '</div>' +
        '<div style="font-size:12px;color:rgba(255,255,255,.6);margin-bottom:10px">' +
          qty + ' licence' + (qty > 1 ? 's' : '') + ' × ' + tier.unitPrice + ' €' +
          (discount > 0 ? ' <span style="text-decoration:line-through;opacity:.5">24 €</span>' : '') +
          '/mois/licence' +
        '</div>' +
        savingsHtml +
        bottomRowHtml +
      '</div>';
  }

  var tiersEl = document.getElementById('etab-tiers-list');
  if (tiersEl) {
    tiersEl.innerHTML = ETAB_TIERS.map(function(t) {
      var isActive = tier === t;
      var rangeLabel = t.max >= 999 ? t.min + '+' : t.min + (t.min !== t.max ? '–'+t.max : '');
      return '<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 10px;border-radius:var(--r-sm);' +
        (isActive ? 'background:var(--c-primary-l);border:1px solid var(--c-primary)' : 'background:var(--c-surface-2);border:1px solid var(--c-border)') + '">' +
        '<span style="font-size:12px;color:' + (isActive ? 'var(--c-primary)' : 'var(--c-text-2)') + ';font-weight:' + (isActive?'700':'400') + '">' +
          rangeLabel + ' licence' + (t.min > 1 ? 's' : '') +
        '</span>' +
        '<span style="font-size:12px;font-weight:800;color:' + (isActive ? 'var(--c-primary)' : 'var(--c-text-1)') + '">' +
          t.unitPrice + ' €<span style="font-weight:400;font-size:10px;color:var(--c-text-3)">/lic./mois</span>' +
        '</span>' +
      '</div>';
    }).join('');
  }

  var btn = document.getElementById('etab-checkout-btn');
  if (btn) {
    var btnTotal = isAnnual ? totalYear : totalMonth;
    var btnUnit  = isAnnual ? '/an' : '/mois';
    btn.textContent = 'Payer ' + btnTotal.toLocaleString('fr-FR') + ' €' + btnUnit + ' →';
  }
}

function etabLaunchCheckout() {
  var inp = document.getElementById('etab-qty-input');
  var qty = inp ? Math.max(1, parseInt(inp.value)||1) : 1;
  var isAnnual = window._etabBilling === 'annual';
  var modal = document.getElementById('etab-pricing-modal');
  if (modal) modal.remove();
  if (typeof stripeStartCheckout === 'function') stripeStartCheckout(isAnnual ? 'etab_annual' : 'etab', qty);
}

/* ═══════════════════════════════════════════════════
   ESPACE ÉTABLISSEMENT
═══════════════════════════════════════════════════ */
function showEtabEspace() {
  var mc = document.getElementById('main-content');
  var _tb = document.getElementById('tab-bar');
  if (_tb) _tb.style.display = 'none';
  var t = document.getElementById('top-title');
  if (t) t.textContent = 'Espace Établissement';

  var codes = _etabGetCodes();
  var codesHtml = codes.length === 0
    ? '<div style="text-align:center;padding:var(--s-4);color:var(--c-text-3);font-size:13px">Aucun code généré pour l\'instant.</div>'
    : codes.map(function(c) {
        var used = c.used ? '<span style="font-size:10px;background:#e8faf4;color:var(--c-ok);border-radius:4px;padding:2px 6px;font-weight:700">Utilisé</span>'
                         : '<span style="font-size:10px;background:var(--c-surface-3);color:var(--c-text-3);border-radius:4px;padding:2px 6px">En attente</span>';
        return '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--c-border)">'
          + '<span style="font-family:monospace;font-size:13px;font-weight:800;color:var(--c-primary);flex:1;letter-spacing:.05em">' + c.code + '</span>'
          + used
          + '<button onclick="_etabDeleteCode(\'' + c.code + '\')" style="background:none;border:none;cursor:pointer;font-size:16px;color:var(--c-text-4);padding:2px 4px">🗑</button>'
          + '</div>';
      }).join('');

  var usedCount = codes.filter(function(c){ return c.used; }).length;
  var totalCodes = codes.length;

  mc.innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-primary)">
      <span class="mh-icon">🏛️</span>
      <div class="mh-title">Espace Établissement</div>
      <div class="mh-sub">Gestion des accès élèves · Suivi QCM · Outils pédagogiques</div>
      <div class="mh-tags"><span class="mh-tag">Plan Établissement</span></div>
    </div>

    <div style="padding:var(--s-3) var(--s-4) 0;display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--s-2)">
      <div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:12px;text-align:center">
        <div style="font-size:22px;font-weight:800;color:var(--c-primary)">${totalCodes}</div>
        <div style="font-size:10px;color:var(--c-text-3)">Codes générés</div>
      </div>
      <div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:12px;text-align:center">
        <div style="font-size:22px;font-weight:800;color:var(--c-ok)">${usedCount}</div>
        <div style="font-size:10px;color:var(--c-text-3)">Élèves connectés</div>
      </div>
      <div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:12px;text-align:center">
        <div style="font-size:22px;font-weight:800;color:var(--c-text-2)">${30 - totalCodes}</div>
        <div style="font-size:10px;color:var(--c-text-3)">Codes restants</div>
      </div>
    </div>

    <div class="section-header" style="margin-top:var(--s-3)">Codes d'accès élèves</div>
    <div style="padding:0 var(--s-4)">
      <div class="card card-p">
        <div style="font-size:11px;color:var(--c-text-3);margin-bottom:var(--s-3);line-height:1.5">
          Partagez ces codes à vos élèves lors de leur inscription. Chaque code donne accès au plan Établissement et est à usage unique.
        </div>
        <button onclick="etabGenerateCode()" ${totalCodes >= 30 ? 'disabled style="opacity:.5"' : ''}
          style="width:100%;padding:12px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;margin-bottom:var(--s-3)">
          ＋ Générer un code d'accès ${totalCodes >= 30 ? '(limite 30 atteinte)' : ''}
        </button>
        <div id="etab-codes-list">${codesHtml}</div>
      </div>
    </div>

    <div class="section-header" style="margin-top:var(--s-3)">Outils pédagogiques</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      <div class="mod-list-card" onclick="openQCMManager()">
        <div class="mlc-icon" style="background:var(--c-form-l);font-size:20px">📝</div>
        <div class="mlc-body">
          <div class="mlc-name">Éditeur QCM professeur</div>
          <div class="mlc-sub">Créer · Modifier · Personnaliser les questions</div>
        </div>
        <span class="mlc-arrow">›</span>
      </div>
      <div class="mod-list-card" onclick="showModule('qcm')">
        <div class="mlc-icon" style="background:var(--c-anc-l);font-size:20px">✅</div>
        <div class="mlc-body">
          <div class="mlc-name">QCM — 720 questions illimitées</div>
          <div class="mlc-sub">36 thèmes · UE1 à UE6 · Sessions libres</div>
        </div>
        <span class="mlc-arrow">›</span>
      </div>
      <div class="mod-list-card" onclick="showModule('cours')">
        <div class="mlc-icon" style="background:var(--c-form-l);font-size:20px">🎓</div>
        <div class="mlc-body">
          <div class="mlc-name">Cours — 52 chapitres</div>
          <div class="mlc-sub">BTS GEMEAU · BUT · Master · ENGEES</div>
        </div>
        <span class="mlc-arrow">›</span>
      </div>
    </div>
    <div class="pb-nav"></div>
  `;
  mc.scrollTop = 0;
}

function _etabGetCodes() {
  try { return JSON.parse(localStorage.getItem('etab_codes') || '[]'); } catch(e) { return []; }
}
function _etabSaveCodes(arr) {
  try { localStorage.setItem('etab_codes', JSON.stringify(arr)); } catch(e) {}
}

function etabGenerateCode() {
  var codes = _etabGetCodes();
  var code = _etabMakeCode();
  codes.push({ code: code, used: false, createdAt: new Date().toISOString() });
  _etabSaveCodes(codes);
  authToast('Code généré : ' + code);
  showEtabEspace();
}

function _etabDeleteCode(code) {
  var codes = _etabGetCodes().filter(function(c){ return c.code !== code; });
  _etabSaveCodes(codes);
  showEtabEspace();
}

