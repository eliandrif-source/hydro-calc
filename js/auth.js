/* ═══════════════════════════════════════════════════
   SAUVEGARDE DES CALCULS
═══════════════════════════════════════════════════ */
function getSavedCalcs() {
  if (!AUTH.user) return [];
  return JSON.parse(_safeStorage.getItem('hc_calcs_' + AUTH.user.email) || '[]');
}
function setSavedCalcs(arr) {
  if (!AUTH.user) return;
  _safeStorage.setItem('hc_calcs_' + AUTH.user.email, JSON.stringify(arr));
}

function saveCurrentCalc() {
  if (!AUTH.user) { authToast('Connectez-vous pour enregistrer'); return; }
  // Trouver le dernier result-box visible
  var boxes = document.querySelectorAll('.result-box.show');
  if (!boxes.length) { authToast('Aucun calcul à enregistrer'); return; }
  var box = boxes[boxes.length - 1];
  var val = box.querySelector('.result-value');
  var det = box.querySelector('.result-detail');
  var titleEl = document.getElementById('top-title');
  var calc = {
    module: titleEl ? titleEl.textContent : 'Calcul',
    valeur: val ? val.textContent : '',
    detail: det ? det.innerHTML : '',
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

/* ─── QUOTA RAPPORT ─── */
function _canGenerateReport() {
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  if (plan === 'free') return { ok: false, reason: 'Les rapports ne sont pas disponibles avec le plan Gratuit.' };
  if (plan === 'admin' || plan === 'etab') return { ok: true };
  if (plan === 'pro') {
    var weekStart = new Date(); weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    var weekKey = weekStart.toISOString().slice(0,10);
    var raw = _safeStorage.getItem('hc_report_quota');
    var quota = raw ? JSON.parse(raw) : { week: weekKey, count: 0 };
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
  var raw = _safeStorage.getItem('hc_report_quota');
  var quota = raw ? JSON.parse(raw) : { week: weekKey, count: 0 };
  if (quota.week !== weekKey) quota = { week: weekKey, count: 0 };
  quota.count++;
  _safeStorage.setItem('hc_report_quota', JSON.stringify(quota));
}

/* ─── UPLOAD LOGO UTILISATEUR ─── */
function uploadUserLogo() {
  var input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = function(e) {
    var file = e.target.files[0]; if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      _safeStorage.setItem('hc_user_logo', ev.target.result);
      authToast('Logo enregistré ✓');
      renderCalcHistory();
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function removeUserLogo() {
  _safeStorage.removeItem('hc_user_logo');
  authToast('Logo supprimé');
  renderCalcHistory();
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
  return { userName: userName, dateStr: dateStr };
}

/* ─── FORMAT HTML ─── */
function generateHTMLReport() {
  var check = _canGenerateReport();
  if (!check.ok) { authToast(check.reason); setTimeout(openSidebar, 800); return; }
  var arr = getSavedCalcs();
  if (!arr.length) { authToast('Aucun calcul à exporter.'); return; }

  var h = _reportHeader();
  var userLogo = _safeStorage.getItem('hc_user_logo');
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var logoHtml = (userLogo && plan !== 'free')
    ? '<img src="' + userLogo + '" style="height:60px;object-fit:contain">'
    : '<div style="font-size:28px;font-weight:900;color:#0A7460;letter-spacing:-1px">HydroCalc</div>';

  var calcsHtml = arr.map(function(c) {
    var d = new Date(c.date);
    var dateStr = d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
    var detail = (c.detail||'').replace(/<br\s*\/?>/gi,'<br>').replace(/<(?!br)[^>]+>/g,'');
    return '<div style="margin-bottom:20px;border:1px solid #DEE8E4;border-radius:10px;overflow:hidden">'
      + '<div style="background:#E0F4F0;padding:8px 14px;display:flex;justify-content:space-between;align-items:center">'
      + '<span style="font-weight:800;font-size:12px;color:#0A7460;text-transform:uppercase">' + c.module + '</span>'
      + '<span style="font-size:11px;color:#617068">' + dateStr + '</span></div>'
      + '<div style="padding:12px 14px">'
      + '<div style="font-size:18px;font-weight:700;color:#065A48;margin-bottom:6px">' + (c.valeur||'') + '</div>'
      + '<div style="font-size:12px;color:#3A4840;line-height:1.7">' + detail + '</div>'
      + '</div></div>';
  }).join('');

  var html = '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">'
    + '<title>Rapport HydroCalc — ' + h.dateStr + '</title>'
    + '<style>body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;padding:0 20px;color:#141C18}'
    + '@media print{body{margin:0}}</style></head><body>'
    + '<div style="display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid #0A7460;padding-bottom:14px;margin-bottom:24px">'
    + '<div>' + logoHtml
    + '<div style="font-size:12px;color:#617068;margin-top:4px">Application hydraulique professionnelle</div></div>'
    + '<div style="text-align:right">'
    + '<div style="font-weight:700;font-size:14px">' + h.userName + '</div>'
    + '<div style="font-size:12px;color:#617068">' + h.dateStr + '</div></div></div>'
    + '<h2 style="color:#0A7460;font-size:16px;margin-bottom:16px">Calculs enregistrés (' + arr.length + ')</h2>'
    + calcsHtml
    + '<div style="margin-top:30px;padding-top:12px;border-top:1px solid #DEE8E4;text-align:center;font-size:10px;color:#8A9890">'
    + 'HydroCalc · hydrocalc.fr · Rapport généré le ' + new Date().toLocaleString('fr-FR') + '</div>'
    + '</body></html>';

  _download(new Blob([html], {type:'text/html;charset=utf-8'}), 'HydroCalc_rapport_' + _reportDate() + '.html');
  _incrementReportQuota();
  authToast('Rapport HTML téléchargé ✓');
}

/* ─── FORMAT ODT ─── */
function generateODTReport() {
  var check = _canGenerateReport();
  if (!check.ok) { authToast(check.reason); setTimeout(openSidebar, 800); return; }
  var arr = getSavedCalcs();
  if (!arr.length) { authToast('Aucun calcul à exporter.'); return; }
  if (!window.JSZip) { authToast('Bibliothèque ZIP non chargée.'); return; }

  var h = _reportHeader();
  var userLogo = _safeStorage.getItem('hc_user_logo');
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var logoName = (userLogo && plan !== 'free') ? 'logo_utilisateur' : 'HydroCalc';

  var calcsXml = arr.map(function(c) {
    var d = new Date(c.date);
    var dateStr = d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
    var valeur  = _htmlToText(c.valeur).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    var detail  = _htmlToText(c.detail).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    var module  = (c.module||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    return '<text:p text:style-name="module_header">' + module + '   ' + dateStr + '</text:p>'
      + '<text:p text:style-name="calc_value">' + valeur + '</text:p>'
      + (detail ? '<text:p text:style-name="calc_detail">' + detail + '</text:p>' : '')
      + '<text:p text:style-name="separator"> </text:p>';
  }).join('');

  var content = '<?xml version="1.0" encoding="UTF-8"?>'
    + '<office:document-content xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"'
    + ' xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"'
    + ' xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0"'
    + ' xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0">'
    + '<office:automatic-styles>'
    + '<style:style style:name="title" style:family="paragraph"><style:text-properties fo:font-size="20pt" fo:font-weight="bold" fo:color="#0A7460"/></style:style>'
    + '<style:style style:name="subtitle" style:family="paragraph"><style:text-properties fo:font-size="11pt" fo:color="#617068"/></style:style>'
    + '<style:style style:name="module_header" style:family="paragraph"><style:paragraph-properties fo:background-color="#E0F4F0" fo:padding="4pt"/><style:text-properties fo:font-size="10pt" fo:font-weight="bold" fo:color="#0A7460"/></style:style>'
    + '<style:style style:name="calc_value" style:family="paragraph"><style:text-properties fo:font-size="14pt" fo:font-weight="bold" fo:color="#065A48"/></style:style>'
    + '<style:style style:name="calc_detail" style:family="paragraph"><style:text-properties fo:font-size="10pt" fo:color="#3A4840"/></style:style>'
    + '<style:style style:name="separator" style:family="paragraph"><style:paragraph-properties fo:border-bottom="0.5pt solid #DEE8E4" fo:padding-bottom="6pt" fo:margin-bottom="10pt"/></style:style>'
    + '<style:style style:name="footer_style" style:family="paragraph"><style:text-properties fo:font-size="9pt" fo:color="#8A9890"/></style:style>'
    + '</office:automatic-styles>'
    + '<office:body><office:text>'
    + '<text:p text:style-name="title">' + logoName + '</text:p>'
    + '<text:p text:style-name="subtitle">Application hydraulique professionnelle · ' + h.dateStr + ' · ' + h.userName + '</text:p>'
    + '<text:p text:style-name="separator"> </text:p>'
    + calcsXml
    + '<text:p text:style-name="footer_style">HydroCalc · hydrocalc.fr · Généré le ' + new Date().toLocaleString('fr-FR') + '</text:p>'
    + '</office:text></office:body></office:document-content>';

  var manifest = '<?xml version="1.0" encoding="UTF-8"?>'
    + '<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0">'
    + '<manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.oasis.opendocument.text"/>'
    + '<manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>'
    + '</manifest:manifest>';

  var zip = new JSZip();
  zip.file('mimetype', 'application/vnd.oasis.opendocument.text', {compression:'STORE'});
  zip.folder('META-INF').file('manifest.xml', manifest);
  zip.file('content.xml', content);

  zip.generateAsync({type:'blob', mimeType:'application/vnd.oasis.opendocument.text'}).then(function(blob) {
    _download(blob, 'HydroCalc_rapport_' + _reportDate() + '.odt');
    _incrementReportQuota();
    authToast('Rapport ODT téléchargé ✓');
  });
}

/* ─── GÉNÉRATION RAPPORT WORD ─── */
function generateWordReport() {
  var check = _canGenerateReport();
  if (!check.ok) {
    authToast(check.reason);
    setTimeout(function(){ openSidebar(); }, 800);
    return;
  }
  var arr = getSavedCalcs();
  if (!arr.length) { authToast('Aucun calcul à exporter. Sauvegardez d\'abord des calculs.'); return; }

  if (!window.docx) { authToast('Bibliothèque Word non chargée. Vérifiez votre connexion.'); return; }

  var D = window.docx;
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var userName = AUTH.user ? (AUTH.user.name || AUTH.user.email || '') : '';
  var dateStr = new Date().toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric' });
  var userLogo = _safeStorage.getItem('hc_user_logo');

  /* ── En-tête ── */
  var headerChildren = [];

  if (userLogo && plan !== 'free') {
    /* Logo utilisateur (base64 → ArrayBuffer) */
    try {
      var b64 = userLogo.split(',')[1];
      var ext = userLogo.split(';')[0].split('/')[1] || 'png';
      var binary = atob(b64);
      var buf = new Uint8Array(binary.length);
      for (var i = 0; i < binary.length; i++) buf[i] = binary.charCodeAt(i);
      headerChildren.push(new D.Paragraph({
        children: [new D.ImageRun({
          type: ext, data: buf.buffer,
          transformation: { width: 120, height: 50 },
          altText: { title: 'Logo', description: 'Logo', name: 'Logo' }
        })]
      }));
    } catch(e) { /* logo invalide, on ignore */ }
  } else {
    /* Logo HydroCalc texte */
    headerChildren.push(new D.Paragraph({
      children: [new D.TextRun({ text: 'HydroCalc', bold: true, size: 36, color: '0A7460', font: 'Arial' })],
    }));
  }

  headerChildren.push(new D.Paragraph({
    children: [new D.TextRun({ text: 'Application hydraulique professionnelle', size: 18, color: '617068', font: 'Arial' })],
    spacing: { after: 100 }
  }));
  headerChildren.push(new D.Paragraph({
    children: [
      new D.TextRun({ text: 'Rapport de calculs — ' + dateStr, size: 18, color: '3A4840', font: 'Arial' }),
      new D.TextRun({ text: '     ' + userName, size: 18, color: '617068', font: 'Arial' }),
    ],
    border: { bottom: { style: D.BorderStyle.SINGLE, size: 6, color: '0A7460', space: 4 } },
    spacing: { after: 200 }
  }));

  /* ── Calculs ── */
  var calcChildren = [];
  calcChildren.push(new D.Paragraph({
    children: [new D.TextRun({ text: 'Calculs enregistrés (' + arr.length + ')', bold: true, size: 26, color: '0A7460', font: 'Arial' })],
    spacing: { after: 160 }
  }));

  var border = { style: D.BorderStyle.SINGLE, size: 1, color: 'DEE8E4' };
  var borders = { top: border, bottom: border, left: border, right: border };

  for (var j = 0; j < arr.length; j++) {
    var c = arr[j];
    var d = new Date(c.date);
    var cDate = d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' });
    var cleanVal = _htmlToText(c.valeur);
    var cleanDet = _htmlToText(c.detail);

    /* Ligne module + date */
    calcChildren.push(new D.Table({
      width: { size: 9026, type: D.WidthType.DXA },
      columnWidths: [5500, 3526],
      rows: [new D.TableRow({ children: [
        new D.TableCell({
          borders: borders,
          width: { size: 5500, type: D.WidthType.DXA },
          shading: { fill: 'E0F4F0', type: D.ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new D.Paragraph({ children: [new D.TextRun({ text: c.module, bold: true, size: 18, color: '0A7460', font: 'Arial' })] })]
        }),
        new D.TableCell({
          borders: borders,
          width: { size: 3526, type: D.WidthType.DXA },
          shading: { fill: 'E0F4F0', type: D.ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: cDate, size: 16, color: '617068', font: 'Arial' })] })]
        })
      ]})],
    }));

    /* Résultat */
    calcChildren.push(new D.Paragraph({
      children: [new D.TextRun({ text: cleanVal, bold: true, size: 24, color: '065A48', font: 'Arial' })],
      spacing: { before: 100, after: 60 },
      indent: { left: 120 }
    }));

    /* Détail */
    if (cleanDet) {
      calcChildren.push(new D.Paragraph({
        children: [new D.TextRun({ text: cleanDet, size: 18, color: '3A4840', font: 'Arial' })],
        spacing: { after: 160 },
        indent: { left: 120 }
      }));
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
  var doc = new D.Document({
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 }
        }
      },
      footers: { default: footer },
      children: headerChildren.concat(calcChildren)
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

function renderCalcHistory() {
  var arr = getSavedCalcs();
  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  var canPDF = plan !== 'free';

  var html = '<div class="profile-hero" style="background:linear-gradient(135deg,var(--c-primary-d),var(--c-primary))">'
    + '<div style="font-size:36px;margin-bottom:6px">💾</div>'
    + '<div class="profile-name">Mes calculs enregistrés</div>'
    + '<div class="profile-email">' + arr.length + ' calcul(s) sauvegardé(s)</div>'
    + '</div>';

  if (!arr.length) {
    html += '<div style="text-align:center;padding:40px 20px;color:var(--c-text-4)">'
      + '<div style="font-size:36px;margin-bottom:12px">📭</div>'
      + '<div style="font-size:13px;font-weight:600;margin-bottom:6px">Aucun calcul enregistré</div>'
      + '<div style="font-size:12px;line-height:1.6">Faites un calcul, puis appuyez sur le bouton 💾 en bas à droite pour le sauvegarder.</div>'
      + '</div>';
  } else {
    /* Bouton rapport Word */
    if (canPDF) {
      var userLogo = _safeStorage.getItem('hc_user_logo');
      html += '<div style="padding:var(--s-3) var(--s-4) 0;display:flex;flex-direction:column;gap:var(--s-2)">';
      /* Logo */
      html += '<div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);display:flex;align-items:center;gap:var(--s-3)">'
        + '<span style="font-size:20px">🖼️</span>'
        + '<div style="flex:1"><div style="font-size:12px;font-weight:700;margin-bottom:2px">Logo du rapport</div>'
        + '<div style="font-size:11px;color:var(--c-text-3)">' + (userLogo ? 'Logo personnalisé chargé' : 'Logo HydroCalc par défaut') + '</div></div>'
        + (userLogo
          ? '<button onclick="removeUserLogo()" style="padding:5px 10px;background:var(--c-danger-l);color:var(--c-danger);border:none;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer">Supprimer</button>'
          : '')
        + '<button onclick="uploadUserLogo()" style="padding:5px 10px;background:var(--c-primary-l);color:var(--c-primary);border:none;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer">'
        + (userLogo ? 'Changer' : 'Importer') + '</button>'
        + '</div>';
      /* Boutons 3 formats */
      html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--s-2)">'
        + '<button onclick="generateHTMLReport()" style="padding:10px 6px;background:#1550A0;color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">🌐 HTML</button>'
        + '<button onclick="generateODTReport()" style="padding:10px 6px;background:#166038;color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">📝 ODT</button>'
        + '<button onclick="generateWordReport()" style="padding:10px 6px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:11px;font-weight:700;cursor:pointer">📄 DOCX</button>'
        + '</div></div>';
    } else {
      html += '<div style="padding:var(--s-3) var(--s-4) 0">'
        + '<div style="background:var(--c-surface-3);border:1px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3);display:flex;align-items:center;gap:var(--s-3)">'
        + '<span style="font-size:24px">📄</span>'
        + '<div style="flex:1"><div style="font-size:12px;font-weight:700;margin-bottom:2px">Rapport Word</div>'
        + '<div style="font-size:11px;color:var(--c-text-3)">Disponible à partir du plan Pro</div></div>'
        + '<button onclick="openSidebar()" style="padding:6px 12px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer">Voir les offres</button>'
        + '</div></div>';
    }

    html += '<div style="padding-top:var(--s-3)">';
    for (var i = 0; i < arr.length; i++) {
      var c = arr[i];
      var d = new Date(c.date);
      html += '<div class="calc-hist-item">'
        + '<div class="chi-head">'
        + '<span class="chi-module">' + c.module + '</span>'
        + '<span class="chi-date">' + d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}) + '</span>'
        + '<button class="chi-del" onclick="deleteCalc(' + i + ')">🗑️</button>'
        + '</div>'
        + '<div class="chi-value">' + c.valeur + '</div>'
        + '<div class="chi-detail">' + c.detail + '</div>'
        + '</div>';
    }
    html += '</div>';
    html += '<div style="padding:var(--s-4)"><button class="auth-btn-ghost" onclick="clearAllCalcs()" style="color:var(--c-danger);border-color:var(--c-danger)">Tout effacer</button></div>';
  }
  html += '<div class="pb-nav"></div>';
  document.getElementById('profile-content').innerHTML = html;
  authShow('auth-profile');
  var hdr = document.querySelector('#auth-profile .auth-hdr-title');
  if (hdr) hdr.textContent = 'Mes calculs';
}

function deleteCalc(i) {
  var arr = getSavedCalcs();
  arr.splice(i, 1);
  setSavedCalcs(arr);
  renderCalcHistory();
}
function clearAllCalcs() {
  if (confirm('Effacer tous les calculs enregistrés ?')) {
    setSavedCalcs([]);
    renderCalcHistory();
  }
}

/* ═══════════════════════════════════════════════════
   SYSTÈME D'AUTHENTIFICATION
═══════════════════════════════════════════════════ */

var AUTH = { user: null };

var PLANS_HC = {
  free:    { name:'Gratuit',        icon:'🌱', price:'0 €',        color:'var(--c-text-3)', badgeClass:'plan-free-badge' },
  pro:     { name:'Pro',            icon:'⚡', price:'5,90 €/mois', color:'#4A28A0',        badgeClass:'plan-pro-badge'  },
  etab:    { name:'Établissement',  icon:'🏛️', price:'35 €/mois',  color:'#065A48',        badgeClass:'plan-etab-badge' },
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

function getHCAccounts() {
  const a = JSON.parse(_safeStorage.getItem('hc_main_accounts') || '{}');
  if (!a['demo@hydrocalc.fr']) {
    a['demo@hydrocalc.fr'] = { name:'Utilisateur Démo', profile:'technicien', pwd:'hydro2024', plan:'pro', joined:Date.now(), lastLogin:null, favorites:[], history:[] };
    _safeStorage.setItem('hc_main_accounts', JSON.stringify(a));
  }
  return a;
}
function saveHCAccounts(a) { _safeStorage.setItem('hc_main_accounts', JSON.stringify(a)); }

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
  var email   = (getV('login-email') || '').trim().toLowerCase();
  var pwd     = getV('login-pwd') || '';
  var remember = document.getElementById('login-remember');
  var rememberMe = remember && remember.checked;
  var errEl   = document.getElementById('login-err');

  if (errEl) errEl.style.display = 'none';

  /* Compte admin : vérification par hash SHA-256 */
  if (email === _ADMIN_EMAIL) {
    _sha256(pwd).then(function(hash) {
      if (hash !== _ADMIN_HASH) {
        if (errEl) errEl.style.display = 'block'; return;
      }
      AUTH.user = { email: email, name: 'Administrateur', plan: 'admin', isAdmin: true };
      if (rememberMe) {
        _safeStorage.setItem('hc_remember', JSON.stringify({ email: email, token: _ADMIN_HASH.slice(0,16), isAdmin: true }));
      } else {
        _safeStorage.removeItem('hc_remember');
      }
      _doEnterApp();
    });
    return;
  }

  /* Comptes normaux */
  var accounts = getHCAccounts();
  if (!accounts[email] || accounts[email].pwd !== pwd) {
    if (errEl) errEl.style.display = 'block'; return;
  }
  accounts[email].lastLogin = Date.now();
  saveHCAccounts(accounts);
  AUTH.user = Object.assign({ email: email }, accounts[email]);
  if (rememberMe) {
    _safeStorage.setItem('hc_remember', JSON.stringify({ email: email, token: accounts[email].pwd.slice(0,8) }));
  } else {
    _safeStorage.removeItem('hc_remember');
  }
  _doEnterApp();
}

function authDemoFill() {
  var emailEl = document.getElementById('login-email');
  var pwdEl   = document.getElementById('login-pwd');
  if (emailEl) emailEl.value = 'demo@hydrocalc.fr';
  if (pwdEl)   pwdEl.value   = 'hydro2024';
  authToast('Champs pré-remplis · Cliquez sur Se connecter');
}

function authRegister() {
  var name    = (getV('reg-name') || '').trim();
  var email   = (getV('reg-email') || '').trim().toLowerCase();
  var profile = getV('reg-profile') || '';
  var pwd     = getV('reg-pwd') || '';
  var pwd2    = getV('reg-pwd2') || '';
  var errEl   = document.getElementById('register-err');
  var showErr = function(m){ if (errEl){ errEl.textContent = m; errEl.style.display = 'block'; } };
  if (!name)               return showErr('Veuillez indiquer votre nom.');
  if (!email.includes('@')) return showErr('Adresse e-mail invalide.');
  if (!profile)            return showErr('Choisissez votre profil.');
  if (pwd.length < 6)      return showErr('Mot de passe trop court (6 caractères minimum).');
  if (pwd !== pwd2)        return showErr('Les mots de passe ne correspondent pas.');
  var accounts = getHCAccounts();
  if (accounts[email])     return showErr('Un compte existe déjà avec cet email.');
  accounts[email] = { name:name, profile:profile, pwd:pwd, plan:'gratuit', joined:Date.now(), lastLogin:Date.now(), favorites:[], history:[] };
  saveHCAccounts(accounts);
  AUTH.user = Object.assign({ email:email }, accounts[email]);
  authToast('Compte créé ! Bienvenue ' + name.split(' ')[0] + ' 🎉');
  _doEnterApp();
}

function authForgot() {
  var email = (getV('forgot-email') || '').trim().toLowerCase();
  if (!email.includes('@')){ authToast('Email invalide'); return; }
  authToast('Si ce compte existe, un email vous a été envoyé.');
  setTimeout(function(){ authShow('auth-login'); }, 1500);
}

function authContinueGuest() {
  AUTH.user = null;
  _doEnterApp();
}

function _doEnterApp() {
  // Sauvegarder la session
  if (AUTH.user) _safeStorage.setItem('hc_current_session', JSON.stringify({ email: AUTH.user.email, isAdmin: AUTH.user.isAdmin || false }));
  // Cacher tous les écrans auth
  document.querySelectorAll('.auth-screen').forEach(function(s){ s.classList.add('hidden'); });
  // Bouton profil
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
  renderHome();
}

function authLogout() {
  _safeStorage.removeItem('hc_current_session');
  AUTH.user = null;
  document.querySelectorAll('.auth-screen').forEach(function(s){ s.classList.add('hidden'); });
  var _as=document.getElementById('auth-splash'); if(_as) _as.classList.remove('hidden');
  var profileBtn = document.getElementById('profile-btn');
  if (profileBtn){ profileBtn.style.display = 'none'; profileBtn.textContent = '👤'; }
  authToast('Déconnexion réussie');
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
    var isCurrent = u.plan === pid;
    html += '<div class="plan-row' + (isCurrent?' current':'') + '" onclick="' + (pid!=='expert'?'selectHCPlan(\''+pid+'\')':'authToast(\'Contactez-nous : contact@hydrocalc.fr\')') + '">'
      + '<div class="plan-row-ico">' + p.icon + '</div>'
      + '<div class="plan-row-info"><div class="plan-row-name">' + p.name + (isCurrent?' ✓':'') + '</div>'
      + '<div class="plan-row-desc">' + (pid==='gratuit'?'Accès complet à l\'application':pid==='pro'?'Plateforme QCM + modules avancés':'Licence établissement') + '</div></div>'
      + '<div class="plan-row-price" style="color:' + p.color + '">' + p.price + '</div></div>';
  });
  html += '</div>';

  // Upgrade si gratuit
  if (u.plan === 'gratuit') {
    html += '<div class="upgrade-banner"><div class="ub-ico">⭐</div><div class="ub-text"><div class="ub-title">Passez à Pro</div><div class="ub-sub">Plateforme QCM · 600 questions · Historique progression</div></div><button class="ub-btn" onclick="selectHCPlan(\'pro\')">9,90 €/mois</button></div>';
  }

  // Déconnexion
  html += '<div style="padding:var(--s-3) var(--s-4) var(--s-6)">'
    + '<button onclick="authLogout()" style="width:100%;padding:12px;background:var(--c-danger-l);color:var(--c-danger);border:1.5px solid var(--c-danger);border-radius:var(--r-lg);font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer">Se déconnecter</button></div>';

  document.getElementById('profile-content').innerHTML = html;
}

function selectHCPlan(planId) {
  if (!AUTH.user) return;
  var accounts = getHCAccounts();
  if (accounts[AUTH.user.email]) { accounts[AUTH.user.email].plan = planId; saveHCAccounts(accounts); AUTH.user.plan = planId; }
  authToast('Abonnement ' + PLANS_HC[planId].name + ' activé ✓');
  buildProfile();
}

/* INIT — connexion automatique si "Se souvenir de moi" */
(function initAuth(){
  try {
    /* 1. Vérifier "Se souvenir de moi" */
    var rem = _safeStorage.getItem('hc_remember');
    if (rem) {
      var r = JSON.parse(rem);
      if (r.isAdmin && r.email === _ADMIN_EMAIL && r.token === _ADMIN_HASH.slice(0,16)) {
        AUTH.user = { email: _ADMIN_EMAIL, name: 'Administrateur', plan: 'admin', isAdmin: true };
        _doEnterApp(); return;
      }
      if (!r.isAdmin) {
        var accounts = getHCAccounts();
        if (accounts[r.email] && accounts[r.email].pwd.slice(0,8) === r.token) {
          AUTH.user = Object.assign({ email: r.email }, accounts[r.email]);
          _doEnterApp(); return;
        }
      }
    }
    /* 2. Session en cours (connexion standard) */
    var saved = _safeStorage.getItem('hc_current_session');
    if (saved) {
      var s = JSON.parse(saved);
      if (s.isAdmin && s.email === _ADMIN_EMAIL) {
        AUTH.user = { email: _ADMIN_EMAIL, name: 'Administrateur', plan: 'admin', isAdmin: true };
        _doEnterApp(); return;
      }
      var accs = getHCAccounts();
      if (accs[s.email]) {
        AUTH.user = Object.assign({ email: s.email }, accs[s.email]);
        _doEnterApp(); return;
      }
    }
  } catch(e) {}
  /* 3. Afficher le splash auth */
  var _as = document.getElementById('auth-splash');
  if (_as) _as.classList.remove('hidden');
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
    price: '35 €',
    period: '/mois',
    priceBis: '190 € /an',
    desc: 'Tout illimité pour les établissements scolaires et entreprises.',
    btnLabel: 'Choisir Établissement',
    btnClass: 'plan-btn-primary',
    features: [
      { ico: '🚫', txt: 'Sans publicité' },
      { ico: '🧮', txt: 'Calculateurs de base illimités' },
      { ico: '🔓', txt: 'Calculateurs avancés illimités' },
      { ico: '📖', txt: 'Glossaire complet illimité' },
      { ico: '🎓', txt: 'QCM illimités (720 questions)' },
      { ico: '💾', txt: 'Sauvegarde illimitée' },
      { ico: '📄', txt: 'Rapports PDF illimités' },
      { ico: '🗺️', txt: 'SPANC 101 départements' },
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

    '<button onclick="togglePlansSection()" style="width:100%;padding:14px var(--s-3);background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:var(--t-sm);font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--s-2);margin-bottom:var(--s-4)">' +
      '💎 Voir les abonnements' +
    '</button>' +

    '<div id="plans-section" style="display:none">';

  for (var i = 0; i < PLANS.length; i++) {
    var p = PLANS[i];
    var isCurrent = p.id === userPlan;
    var feats = p.features.map(function(f) {
      return '<div class="plan-feat" style="color:var(--c-text-2)">' + f.ico + ' ' + f.txt + '</div>';
    }).join('');
    html +=
      '<div class="plan-card' + (isCurrent ? ' current' : '') + '">' +
        '<div class="plan-card-top">' +
          '<span class="plan-card-ico">' + p.ico + '</span>' +
          '<span class="plan-card-name">' + p.name + '</span>' +
          '<span class="plan-card-price">' + p.price + '<span>' + p.period + '</span></span>' +
        '</div>' +
        (p.priceBis ? '<div style="font-size:10px;color:var(--c-ok);font-weight:700;margin-bottom:6px">ou ' + p.priceBis + ' — économisez 2 mois</div>' : '') +
        '<div class="plan-card-desc">' + p.desc + '</div>' +
        '<div class="plan-card-features">' + feats + '</div>' +
        '<button class="plan-card-btn ' + (isCurrent ? 'plan-btn-current' : p.btnClass) + '">' +
          (isCurrent ? '✓ Plan actuel' : p.btnLabel) +
        '</button>' +
      '</div>';
  }

  html += '<div class="sidebar-section-title" style="margin-top:var(--s-4)">Comparatif des plans</div>';
  html += '<table class="compare-table"><thead><tr>' +
    '<th>Fonctionnalité</th><th>Gratuit</th><th>Pro</th><th>Étab.</th>' +
    '</tr></thead><tbody>';

  var rows = [
    ['Sans publicité',        '✗','✓','✓'],
    ['Calculateurs base',     '10/jour','Illimités','Illimités'],
    ['Calculateurs avancés',  '✗','✓','✓'],
    ['Glossaire complet',     '⚠','✓','✓'],
    ['QCM',                   '10 offerts','10/sem.','Illimités'],
    ['Sauvegarde calculs',    '✗','50 max','Illimitée'],
    ['Rapports PDF',          '✗','1/sem.','Illimités'],
    ['SPANC',                 '1 dept','✗','101 depts'],
    ['Prix mensuel',          'Gratuit','5,90 €','35 €'],
    ['Prix annuel',           '—','—','190 €'],
  ];

  for (var r = 0; r < rows.length; r++) {
    html += '<tr><td>' + rows[r][0] + '</td>';
    for (var c = 1; c <= 3; c++) {
      var v = rows[r][c];
      var cls = v === '✓' ? 'ct-ok' : v === '✗' ? 'ct-no' : v === '⚠' ? 'ct-part' : '';
      html += '<td class="' + cls + '">' + v + '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div><div style="height:var(--s-6)"></div>';

  document.getElementById('sidebar-body').innerHTML = html;
}

function togglePlansSection() {
  var s = document.getElementById('plans-section');
  if (!s) return;
  s.style.display = s.style.display === 'none' ? 'block' : 'none';
}
