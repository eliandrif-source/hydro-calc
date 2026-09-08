/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — SECURE REPORT RENDERER
   One sanitized report model -> standalone HTML / deterministic jsPDF.

   Goals:
   - never interpolate untrusted saved content as executable HTML;
   - avoid CSS custom properties in downloaded standalone reports;
   - avoid DOM-to-canvas/html2canvas PDF rendering and its clipping issues;
   - control A4 pagination, wrapping, headers and footers explicitly;
   - keep report quotas server-authoritative when the secure quota RPC exists.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_REPORT_SECURITY_LOADED__) return;
  window.__HC_REPORT_SECURITY_LOADED__ = true;

  var COLORS = {
    navy: '#123B72', blue: '#087FEA', pale: '#DCEEFF', ink: '#27313D',
    muted: '#687585', paper: '#FFFFFF', soft: '#F4F7FA', line: '#D9E1E8',
    ok: '#166038', warn: '#886000', danger: '#A82018'
  };

  function text(value, max) {
    var s = value == null ? '' : String(value);
    s = s.replace(/\u0000/g, '').replace(/[\u0001-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
    s = s.replace(/\r\n?/g, '\n');
    if (max && s.length > max) s = s.slice(0, max) + '…';
    return s.trim();
  }

  function htmlEscape(value) {
    return text(value).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
    });
  }

  function htmlToPlain(value) {
    var raw = text(value);
    if (!raw) return '';
    if (typeof DOMParser !== 'undefined') {
      try {
        var doc = new DOMParser().parseFromString('<div>' + raw + '</div>', 'text/html');
        var root = doc.body.firstChild;
        if (root) {
          root.querySelectorAll('br').forEach(function (br) { br.replaceWith('\n'); });
          root.querySelectorAll('li').forEach(function (li) { li.insertBefore(doc.createTextNode('- '), li.firstChild); li.appendChild(doc.createTextNode('\n')); });
          return text(root.textContent).replace(/\n\s*\n\s*\n+/g, '\n\n');
        }
      } catch (e) {}
    }
    return text(raw
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<li[^>]*>/gi, '- ')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'"));
  }

  function arrayOfText(value, maxItems, maxEach) {
    if (!Array.isArray(value)) return [];
    return value.slice(0, maxItems || 100).map(function (v) { return text(v, maxEach || 4000); }).filter(Boolean);
  }

  function safeDataImage(value) {
    var s = text(value);
    if (!/^data:image\/(png|jpe?g);base64,[A-Za-z0-9+/=\s]+$/i.test(s)) return '';
    /* Avoid pathological localStorage images crashing jsPDF / downloads. */
    if (s.length > 3 * 1024 * 1024) return '';
    return s;
  }

  function dateLabel(value) {
    var d = new Date(Number(value) || value || Date.now());
    if (!Number.isFinite(d.getTime())) d = new Date();
    try {
      return d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' });
    } catch (e) {
      return d.toISOString().slice(0, 16).replace('T', ' ');
    }
  }

  function cleanInputs(inputs) {
    if (!inputs || typeof inputs !== 'object') return [];
    return Object.keys(inputs).slice(0, 80).map(function (key) {
      var v = inputs[key] || {};
      return {
        label: text(v.label || key, 180),
        value: text(v.value, 500),
        unit: text(v.unit, 80)
      };
    });
  }

  function cleanTool(outil) {
    if (!outil || typeof outil !== 'object') return null;
    return {
      name: text(outil.name, 240),
      category: text(outil.cat, 120),
      usage: htmlToPlain(outil.usage),
      principle: htmlToPlain(outil.principe),
      protocol: arrayOfText(outil.protocole, 40, 3000),
      equipment: arrayOfText(outil.materiel || outil['matériel'], 40, 3000),
      precautions: arrayOfText(outil.precautions || outil['précautions'], 40, 3000),
      standard: text(outil.norme, 1000),
      interpretation: Array.isArray(outil.interpretation) ? outil.interpretation.slice(0, 60).map(function (r) {
        r = r || {};
        return { level:text(r.t, 30), value:text(r.val, 500), label:text(r.label, 1000), action:text(r.action, 3000) };
      }) : []
    };
  }

  function cleanCalc(c) {
    c = c || {};
    return {
      module: text(c.module || 'Calcul', 300),
      value: htmlToPlain(c.valeur),
      detail: htmlToPlain(c.detail),
      inputs: cleanInputs(c.inputs),
      date: dateLabel(c.date),
      type: text(c.type, 40),
      tool: cleanTool(c.outil)
    };
  }

  function cleanFormula(f) {
    f = f || {};
    return {
      name: text(f.nom, 300), expression: text(f.expr, 3000), result: text(f.result, 3000),
      reference: text(f.ref, 1200), date: dateLabel(f.date)
    };
  }

  function cleanRegulation(r) {
    r = r || {};
    return { name:text(r.nom, 300), reference:text(r.ref, 1200), body:htmlToPlain(r.texte), date:dateLabel(r.date) };
  }

  function selected(fnName, fallbackName) {
    try {
      if (typeof window[fnName] === 'function') return window[fnName]() || [];
      if (typeof window[fallbackName] === 'function') return window[fallbackName]() || [];
    } catch (e) {}
    return [];
  }

  function collectModel() {
    var header = {};
    try { if (typeof window._reportHeader === 'function') header = window._reportHeader() || {}; } catch (e) {}
    var calcs = selected('_getSelectedCalcs', 'getSavedCalcs').map(cleanCalc);
    var formulas = selected('_getSelectedFormulas', 'getSavedFormulas').map(cleanFormula);
    var regulations = selected('_getSelectedRegls', 'getSavedRegls').map(cleanRegulation);
    var logo = '';
    try {
      if (window.DataStore && DataStore.userLogo && typeof DataStore.userLogo.get === 'function') logo = safeDataImage(DataStore.userLogo.get());
    } catch (e) {}
    if (!logo) logo = safeDataImage(window._pdfIconLightDataUrl || window._pdfIconDataUrl || '');
    return {
      title: text(header.projectTitle || 'Rapport technique HydroCalc', 300),
      author: text(header.userName, 300),
      date: text(header.dateStr || dateLabel(Date.now()), 200),
      generatedAt: dateLabel(Date.now()),
      logo: logo,
      calculations: calcs,
      formulas: formulas,
      regulations: regulations,
      engine: 'HydroCalc report renderer 1.0'
    };
  }

  function hasContent(model) {
    return model.calculations.length || model.formulas.length || model.regulations.length;
  }

  async function authorizeExport() {
    if (!window.AUTH || !AUTH.user) {
      if (typeof window.authToast === 'function') authToast('Connectez-vous pour générer un rapport.');
      return false;
    }
    if (typeof window.hcConsumeUsage === 'function') {
      try {
        var usage = await window.hcConsumeUsage('report_weekly');
        if (usage === false || (usage && usage.allowed === false)) {
          if (typeof window.authToast === 'function') authToast('Quota de rapports atteint pour votre abonnement.');
          return false;
        }
        return true;
      } catch (err) {
        if (typeof window.authToast === 'function') authToast('Impossible de vérifier le quota de rapport. Réessayez.');
        return false;
      }
    }
    /* Fail closed for free accounts if the secure server quota bridge is absent. */
    var plan = AUTH.user.plan || 'free';
    if (plan === 'free') {
      if (typeof window.authToast === 'function') authToast('Les rapports ne sont pas disponibles avec le plan Gratuit.');
      return false;
    }
    return true;
  }

  function standaloneHtml(model) {
    function para(v) { return '<p>' + htmlEscape(v).replace(/\n/g, '<br>') + '</p>'; }
    function rows(inputs) {
      if (!inputs.length) return '';
      return '<table><thead><tr><th>Donnée</th><th>Valeur</th></tr></thead><tbody>' + inputs.map(function (i) {
        return '<tr><td>' + htmlEscape(i.label) + '</td><td>' + htmlEscape(i.value + (i.unit ? ' ' + i.unit : '')) + '</td></tr>';
      }).join('') + '</tbody></table>';
    }
    var logo = model.logo ? '<img class="logo" src="' + model.logo + '" alt="Logo">' : '<div class="wordmark">HydroCalc</div>';
    var calcs = model.calculations.map(function (c) {
      var tool = '';
      if (c.tool) {
        var t = c.tool;
        tool += t.usage ? '<h4>Usage</h4>' + para(t.usage) : '';
        tool += t.principle ? '<h4>Principe</h4>' + para(t.principle) : '';
        if (t.protocol.length) tool += '<h4>Protocole</h4><ol>' + t.protocol.map(function (x) { return '<li>' + htmlEscape(x) + '</li>'; }).join('') + '</ol>';
        if (t.equipment.length) tool += '<h4>Matériel</h4><ul>' + t.equipment.map(function (x) { return '<li>' + htmlEscape(x) + '</li>'; }).join('') + '</ul>';
        if (t.precautions.length) tool += '<h4>Précautions</h4><ul>' + t.precautions.map(function (x) { return '<li>' + htmlEscape(x) + '</li>'; }).join('') + '</ul>';
        if (t.interpretation.length) tool += '<h4>Interprétation</h4><table><thead><tr><th>Valeur</th><th>Lecture</th><th>Action</th></tr></thead><tbody>' + t.interpretation.map(function (r) {
          return '<tr><td>' + htmlEscape(r.value) + '</td><td>' + htmlEscape(r.label) + '</td><td>' + htmlEscape(r.action) + '</td></tr>';
        }).join('') + '</tbody></table>';
        if (t.standard) tool += '<div class="source">Référence : ' + htmlEscape(t.standard) + '</div>';
      }
      return '<section class="card"><div class="card-head"><div><h3>' + htmlEscape(c.tool && c.tool.name ? c.tool.name : c.module) + '</h3>'
        + (c.tool && c.tool.category ? '<span class="tag">' + htmlEscape(c.tool.category) + '</span>' : '') + '</div><span class="date">' + htmlEscape(c.date) + '</span></div>'
        + (c.value ? '<div class="result">' + htmlEscape(c.value) + '</div>' : '')
        + (c.detail ? '<div class="detail">' + htmlEscape(c.detail).replace(/\n/g, '<br>') + '</div>' : '')
        + rows(c.inputs) + tool + '</section>';
    }).join('');
    var formulas = model.formulas.length ? '<section class="chapter"><h2>Formules enregistrées</h2>' + model.formulas.map(function (f) {
      return '<div class="card"><div class="card-head"><h3>' + htmlEscape(f.name || 'Formule') + '</h3><span class="date">' + htmlEscape(f.date) + '</span></div>'
        + '<div class="formula">' + htmlEscape(f.expression) + '</div>'
        + (f.result ? '<p><strong>Résultat :</strong> ' + htmlEscape(f.result) + '</p>' : '')
        + (f.reference ? '<div class="source">Référence : ' + htmlEscape(f.reference) + '</div>' : '') + '</div>';
    }).join('') + '</section>' : '';
    var regulations = model.regulations.length ? '<section class="chapter"><h2>Références réglementaires enregistrées</h2>' + model.regulations.map(function (r) {
      return '<div class="card"><div class="card-head"><h3>' + htmlEscape(r.name || 'Référence') + '</h3><span class="date">' + htmlEscape(r.date) + '</span></div>'
        + (r.reference ? '<div class="source">' + htmlEscape(r.reference) + '</div>' : '') + (r.body ? para(r.body) : '') + '</div>';
    }).join('') + '</section>' : '';

    return '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
      + '<title>' + htmlEscape(model.title) + '</title><style>'
      + '@page{size:A4;margin:16mm 18mm 17mm}*{box-sizing:border-box}html{background:#eef2f6}body{margin:0 auto;max-width:210mm;background:#fff;color:' + COLORS.ink + ';font-family:Inter,Arial,sans-serif;font-size:10.5pt;line-height:1.5;padding:0 18mm 18mm;overflow-wrap:anywhere}'
      + '.hero{margin:0 -18mm 10mm;padding:14mm 18mm 9mm;background:' + COLORS.navy + ';color:#fff;display:flex;align-items:flex-end;justify-content:space-between;gap:10mm}.logo{max-width:42mm;max-height:15mm;object-fit:contain}.wordmark{font-size:22pt;font-weight:800}.hero h1{font-size:20pt;line-height:1.15;margin:0 0 2mm}.meta{font-size:9pt;color:#d9e9ff}.chapter>h2{font-size:14pt;color:' + COLORS.navy + ';border-bottom:2px solid ' + COLORS.blue + ';padding-bottom:2mm;margin:8mm 0 4mm}.card{border:1px solid ' + COLORS.line + ';border-radius:3mm;padding:4.5mm;margin:0 0 4mm;break-inside:avoid-page;page-break-inside:avoid;background:#fff}.card-head{display:flex;align-items:flex-start;justify-content:space-between;gap:5mm;margin-bottom:3mm}.card h3{font-size:11.5pt;color:' + COLORS.navy + ';margin:0}.card h4{font-size:9pt;color:' + COLORS.muted + ';text-transform:uppercase;letter-spacing:.04em;margin:4mm 0 1.5mm}.date{font-size:8pt;color:' + COLORS.muted + ';white-space:nowrap}.tag{display:inline-block;margin-top:1.5mm;padding:.7mm 2mm;border-radius:9mm;background:' + COLORS.pale + ';color:' + COLORS.navy + ';font-size:7.5pt;font-weight:700}.result{font-size:13pt;font-weight:800;color:' + COLORS.navy + ';background:' + COLORS.soft + ';border-left:3px solid ' + COLORS.blue + ';padding:3mm;margin-bottom:3mm}.detail,p{margin:1.5mm 0 3mm;white-space:normal}.formula{font-family:Consolas,"Courier New",monospace;background:' + COLORS.soft + ';padding:3mm;border-radius:2mm;white-space:pre-wrap}.source{font-size:8.5pt;color:' + COLORS.muted + ';margin-top:2.5mm}table{width:100%;border-collapse:collapse;table-layout:fixed;margin:3mm 0;font-size:9pt;break-inside:auto}thead{display:table-header-group}tr{break-inside:avoid}th,td{border:1px solid ' + COLORS.line + ';padding:2mm;vertical-align:top;overflow-wrap:anywhere}th{background:' + COLORS.soft + ';color:' + COLORS.navy + ';text-align:left}ol,ul{margin:1mm 0 3mm 5mm;padding-left:4mm}li{margin:1mm 0}.footer-note{margin-top:8mm;padding-top:3mm;border-top:1px solid ' + COLORS.line + ';font-size:8pt;color:' + COLORS.muted + '}'
      + '@media print{html{background:#fff}body{max-width:none;padding:0}.hero{margin-top:-16mm}.card{box-shadow:none}}@media(max-width:700px){body{padding:0 14px 20px}.hero{margin:0 -14px 20px;padding:28px 14px 20px;display:block}.logo{margin-bottom:14px}.card-head{display:block}.date{display:block;margin-top:4px}table{font-size:8.5pt}}'
      + '</style></head><body><header class="hero"><div>' + logo + '</div><div><h1>' + htmlEscape(model.title) + '</h1><div class="meta">' + htmlEscape(model.author) + (model.author ? ' - ' : '') + htmlEscape(model.date) + '</div></div></header>'
      + '<main>' + (calcs ? '<section class="chapter"><h2>Calculs et outils</h2>' + calcs + '</section>' : '') + formulas + regulations + '</main>'
      + '<div class="footer-note">Rapport généré par HydroCalc. Les résultats restent à confronter aux hypothèses, au domaine de validité des méthodes, aux données de projet et aux exigences applicables. Moteur : ' + htmlEscape(model.engine) + '.</div>'
      + '</body></html>';
  }

  function pdfText(value) {
    var s = htmlToPlain(value).normalize ? htmlToPlain(value).normalize('NFKC') : htmlToPlain(value);
    var map = { 'Δ':'Delta', 'δ':'delta', 'θ':'theta', 'Θ':'Theta', 'ρ':'rho', 'η':'eta', 'π':'pi', 'Π':'Pi', '√':'sqrt', '≤':'<=', '≥':'>=', '≈':'~', '→':'->', '←':'<-', '×':'x', '·':'.', '–':'-', '—':'-', '−':'-', '’':"'", '“':'"', '”':'"', '•':'-', '…':'...' };
    s = s.replace(/[ΔδθΘρηπΠ√≤≥≈→←×·–—−’“”•…]/g, function (c) { return map[c] || c; });
    /* jsPDF built-in Helvetica is reliable for WinAnsi; remove emoji / unsupported planes. */
    s = s.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '');
    s = s.replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF]/g, '?');
    return text(s);
  }

  function getJsPDF() {
    return (window.jspdf && window.jspdf.jsPDF) || window.jsPDF || null;
  }

  function imageFormat(data) {
    if (/^data:image\/png/i.test(data)) return 'PNG';
    if (/^data:image\/jpe?g/i.test(data)) return 'JPEG';
    return '';
  }

  function buildPdf(model) {
    var JsPDF = getJsPDF();
    if (!JsPDF) throw new Error('jsPDF indisponible');
    var doc = new JsPDF({ orientation:'portrait', unit:'mm', format:'a4', compress:true, putOnlyUsedFonts:true });
    var pageW = 210, pageH = 297, left = 18, right = 18, top = 20, bottom = 17;
    var usableW = pageW - left - right;
    var y = top;

    function setColor(hex) { var n = parseInt(hex.slice(1), 16); doc.setTextColor((n>>16)&255, (n>>8)&255, n&255); }
    function fillColor(hex) { var n = parseInt(hex.slice(1), 16); doc.setFillColor((n>>16)&255, (n>>8)&255, n&255); }
    function drawColor(hex) { var n = parseInt(hex.slice(1), 16); doc.setDrawColor((n>>16)&255, (n>>8)&255, n&255); }

    function pageHeader() {
      y = top;
      setColor(COLORS.navy); doc.setFont('helvetica', 'bold'); doc.setFontSize(9);
      doc.text('HydroCalc', left, 10.5);
      setColor(COLORS.muted); doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5);
      doc.text(pdfText(model.title), pageW - right, 10.5, { align:'right', maxWidth:110 });
      drawColor(COLORS.line); doc.setLineWidth(0.2); doc.line(left, 13, pageW - right, 13);
    }

    function addPage() { doc.addPage(); pageHeader(); }
    function ensure(mm) { if (y + mm > pageH - bottom) addPage(); }

    function wrapped(str, width, size, style, color, lineGap) {
      str = pdfText(str);
      if (!str) return;
      size = size || 9; style = style || 'normal'; color = color || COLORS.ink; lineGap = lineGap || 1.25;
      doc.setFont('helvetica', style); doc.setFontSize(size); setColor(color);
      var lines = [];
      str.split('\n').forEach(function (part, idx) {
        var sub = part ? doc.splitTextToSize(part, width) : [''];
        lines = lines.concat(sub);
        if (idx < str.split('\n').length - 1) lines.push('');
      });
      var lineH = size * 0.3528 * lineGap;
      lines.forEach(function (line) {
        ensure(lineH + 0.5);
        doc.text(line || ' ', left, y);
        y += lineH;
      });
    }

    function chapter(title) {
      ensure(14); y += 2;
      setColor(COLORS.navy); doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
      doc.text(pdfText(title), left, y); y += 3;
      fillColor(COLORS.blue); doc.rect(left, y, 36, 0.8, 'F'); y += 6;
    }

    function labelValue(label, value) {
      value = pdfText(value); label = pdfText(label);
      var labelW = 55, valueW = usableW - labelW - 4;
      doc.setFontSize(8.2);
      var lLines = doc.splitTextToSize(label, labelW);
      var vLines = doc.splitTextToSize(value, valueW);
      var count = Math.max(lLines.length, vLines.length);
      var h = Math.max(7, count * 3.6 + 2.4);
      ensure(h);
      fillColor(COLORS.soft); doc.rect(left, y, usableW, h, 'F');
      setColor(COLORS.muted); doc.setFont('helvetica', 'bold'); doc.text(lLines, left + 2, y + 4.3);
      setColor(COLORS.ink); doc.setFont('helvetica', 'normal'); doc.text(vLines, left + labelW + 3, y + 4.3);
      y += h + 1;
    }

    function cardTitle(title, date) {
      ensure(15);
      drawColor(COLORS.line); doc.setLineWidth(0.25); doc.roundedRect(left, y, usableW, 10, 2, 2, 'S');
      setColor(COLORS.navy); doc.setFont('helvetica', 'bold'); doc.setFontSize(10.5);
      var titleLines = doc.splitTextToSize(pdfText(title), usableW - 50);
      doc.text(titleLines.slice(0, 2), left + 3, y + 4.2);
      setColor(COLORS.muted); doc.setFont('helvetica', 'normal'); doc.setFontSize(7);
      doc.text(pdfText(date), pageW - right - 3, y + 4.2, { align:'right' });
      y += Math.max(11, titleLines.slice(0,2).length * 4.1 + 4);
    }

    function resultBox(value) {
      if (!value) return;
      var lines;
      doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
      lines = doc.splitTextToSize(pdfText(value), usableW - 8);
      var h = Math.max(11, lines.length * 4.4 + 5);
      ensure(h + 2);
      fillColor(COLORS.soft); doc.rect(left, y, usableW, h, 'F');
      fillColor(COLORS.blue); doc.rect(left, y, 1.2, h, 'F');
      setColor(COLORS.navy); doc.text(lines, left + 4, y + 5.3);
      y += h + 2.5;
    }

    function subheading(v) {
      ensure(7); setColor(COLORS.muted); doc.setFont('helvetica', 'bold'); doc.setFontSize(8.2);
      doc.text(pdfText(v).toUpperCase(), left, y); y += 4.5;
    }

    function list(items, ordered) {
      items.forEach(function (item, i) {
        var prefix = ordered ? String(i + 1) + '. ' : '- ';
        wrapped(prefix + item, usableW - 2, 8.5, 'normal', COLORS.ink, 1.2);
      });
      if (items.length) y += 1.5;
    }

    function addCalculation(c) {
      cardTitle(c.tool && c.tool.name ? c.tool.name : c.module, c.date);
      resultBox(c.value);
      if (c.detail) { subheading('Détail'); wrapped(c.detail, usableW, 8.7, 'normal', COLORS.ink, 1.22); y += 1.5; }
      if (c.inputs.length) {
        subheading('Données');
        c.inputs.forEach(function (i) { labelValue(i.label, i.value + (i.unit ? ' ' + i.unit : '')); });
        y += 1;
      }
      if (c.tool) {
        var t = c.tool;
        if (t.usage) { subheading('Usage'); wrapped(t.usage, usableW, 8.6); y += 1; }
        if (t.principle) { subheading('Principe'); wrapped(t.principle, usableW, 8.6); y += 1; }
        if (t.protocol.length) { subheading('Protocole'); list(t.protocol, true); }
        if (t.equipment.length) { subheading('Matériel'); list(t.equipment, false); }
        if (t.precautions.length) { subheading('Précautions'); list(t.precautions, false); }
        if (t.interpretation.length) {
          subheading('Interprétation');
          t.interpretation.forEach(function (r) { labelValue(r.value || r.label, (r.label ? r.label + (r.action ? ' - ' : '') : '') + r.action); });
        }
        if (t.standard) { wrapped('Référence : ' + t.standard, usableW, 7.8, 'italic', COLORS.muted, 1.18); }
      }
      y += 5;
    }

    pageHeader();
    /* Cover / report header */
    ensure(42);
    if (model.logo) {
      try {
        var fmt = imageFormat(model.logo);
        if (fmt) doc.addImage(model.logo, fmt, left, y, 34, 12, undefined, 'FAST');
      } catch (e) {}
    }
    y += 17;
    setColor(COLORS.navy); doc.setFont('helvetica', 'bold'); doc.setFontSize(19);
    var titleLines = doc.splitTextToSize(pdfText(model.title), usableW);
    doc.text(titleLines, left, y); y += titleLines.length * 7 + 2;
    setColor(COLORS.muted); doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
    if (model.author) { doc.text(pdfText(model.author), left, y); y += 4.5; }
    doc.text(pdfText(model.date), left, y); y += 8;
    fillColor(COLORS.pale); doc.roundedRect(left, y, usableW, 13, 2, 2, 'F');
    setColor(COLORS.navy); doc.setFontSize(8.5);
    doc.text('Rapport technique - calculs, hypothèses, résultats et références sélectionnées.', left + 4, y + 5.2);
    doc.text('Les résultats doivent être confrontés au domaine de validité de chaque méthode.', left + 4, y + 9.2);
    y += 19;

    if (model.calculations.length) {
      chapter('Calculs et outils');
      model.calculations.forEach(addCalculation);
    }
    if (model.formulas.length) {
      chapter('Formules enregistrées');
      model.formulas.forEach(function (f) {
        cardTitle(f.name || 'Formule', f.date);
        if (f.expression) { subheading('Expression'); wrapped(f.expression, usableW, 9, 'normal', COLORS.ink, 1.2); }
        if (f.result) { subheading('Résultat'); wrapped(f.result, usableW, 9, 'bold', COLORS.navy, 1.2); }
        if (f.reference) wrapped('Référence : ' + f.reference, usableW, 7.8, 'italic', COLORS.muted, 1.18);
        y += 4;
      });
    }
    if (model.regulations.length) {
      chapter('Références réglementaires enregistrées');
      model.regulations.forEach(function (r) {
        cardTitle(r.name || 'Référence', r.date);
        if (r.reference) wrapped(r.reference, usableW, 8.2, 'bold', COLORS.navy, 1.18);
        if (r.body) wrapped(r.body, usableW, 8.6, 'normal', COLORS.ink, 1.22);
        y += 4;
      });
    }

    ensure(22); y += 4; drawColor(COLORS.line); doc.line(left, y, pageW - right, y); y += 5;
    wrapped('Rapport généré par HydroCalc. Les résultats restent à confronter aux hypothèses, aux données de projet, au domaine de validité des méthodes et aux exigences applicables.', usableW, 7.6, 'italic', COLORS.muted, 1.2);

    var pages = doc.getNumberOfPages();
    for (var p = 1; p <= pages; p++) {
      doc.setPage(p); drawColor(COLORS.line); doc.setLineWidth(0.2); doc.line(left, pageH - 11.5, pageW - right, pageH - 11.5);
      setColor(COLORS.muted); doc.setFont('helvetica', 'normal'); doc.setFontSize(7);
      doc.text('HydroCalc - ' + pdfText(model.engine), left, pageH - 7.5);
      doc.text('Page ' + p + ' / ' + pages, pageW - right, pageH - 7.5, { align:'right' });
    }
    return doc;
  }

  function filename(ext, model) {
    var base = pdfText(model.title || 'Rapport HydroCalc').replace(/[^A-Za-z0-9À-ÿ._-]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 80) || 'Rapport_HydroCalc';
    var d = new Date().toISOString().slice(0, 10);
    return base + '_' + d + '.' + ext;
  }

  async function exportHtml() {
    var model = collectModel();
    if (!hasContent(model)) { if (typeof authToast === 'function') authToast('Aucun élément sélectionné à exporter.'); return; }
    if (!(await authorizeExport())) return;
    try {
      var blob = new Blob([standaloneHtml(model)], { type:'text/html;charset=utf-8' });
      if (typeof window._download === 'function') window._download(blob, filename('html', model));
      else {
        var url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = filename('html', model); a.click(); setTimeout(function(){URL.revokeObjectURL(url);}, 1000);
      }
      if (typeof authToast === 'function') authToast('Rapport HTML généré ✓');
    } catch (err) {
      console.error('HydroCalc report HTML error', err);
      if (typeof authToast === 'function') authToast('Erreur pendant la génération du rapport HTML.');
    }
  }

  async function exportPdf() {
    var model = collectModel();
    if (!hasContent(model)) { if (typeof authToast === 'function') authToast('Aucun élément sélectionné à exporter.'); return; }
    if (!(await authorizeExport())) return;
    try {
      var doc = buildPdf(model);
      doc.save(filename('pdf', model));
      if (typeof authToast === 'function') authToast('Rapport PDF généré ✓');
    } catch (err) {
      console.error('HydroCalc report PDF error', err);
      if (typeof authToast === 'function') authToast('Erreur pendant la génération du PDF : ' + text(err && err.message, 120));
    }
  }

  window.HydroCalcReportSecurity = {
    text: text,
    htmlEscape: htmlEscape,
    htmlToPlain: htmlToPlain,
    safeDataImage: safeDataImage,
    cleanCalc: cleanCalc,
    collectModel: collectModel,
    standaloneHtml: standaloneHtml,
    pdfText: pdfText,
    buildPdf: buildPdf
  };

  /* Replace all common legacy report entry points. */
  window.generateHTMLReport = exportHtml;
  window.generatePDFReport = exportPdf;
  window._doGeneratePDFReport = exportPdf;
  window.previewReport = function (format) {
    return String(format || '').toLowerCase() === 'html' ? exportHtml() : exportPdf();
  };
  window._canGenerateReport = function () {
    var plan = window.AUTH && AUTH.user ? (AUTH.user.plan || 'free') : 'free';
    if (!window.AUTH || !AUTH.user) return { ok:false, reason:'Connexion requise.' };
    if (plan === 'free') return { ok:false, reason:'Les rapports ne sont pas disponibles avec le plan Gratuit.' };
    return { ok:true, serverAuthoritative:true };
  };
  window._incrementReportQuota = function () { /* legacy local quota disabled */ };
})();