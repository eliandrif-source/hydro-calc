/* ═══════════════════════════════════════════════════════════
   DOSSIERS PERSO — Rapports, CR de réunion, Documents
   ═══════════════════════════════════════════════════════════ */

/* ─── HUB DOSSIERS ─── */
function renderDossiersHub() {
  setBreadcrumb([{ label: 'Dossiers perso' }]);
  var mc = document.getElementById('main-content');
  if (!mc) return;

  var html = '<div class="module-hero" style="--cat-color:#7C3AED;background-image:linear-gradient(to right,#7C3AED 38%,rgba(124,58,237,0.88) 54%,rgba(124,58,237,0.35) 75%,transparent 92%),url(\'./images/dossiers-banner.png\');background-size:cover;background-position:right center;background-color:#7C3AED">'
    + '<button class="mh-back-btn" onclick="goHome()">‹ Accueil</button>'
    + '<span class="mh-icon">📁</span>'
    + '<div class="mh-title">Dossiers perso</div>'
    + '<div class="mh-sub">Rapports · Comptes rendus · Documents exportables</div>'
    + '<div class="mh-tags"><span class="mh-tag">Pro & Établissement</span></div>'
    + '</div>';

  html += '<div class="section-header" style="margin-top:var(--s-3)">Mes documents</div>';
  html += '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';

  var cards = [
    { ico:'💾', name:'Mes calculs & rapports', sub:'Calculs sauvegardés · Export PDF · DOCX · ODT', fn:'renderCalcHistory()', color:'#1D4ED8', colorl:'#DBEAFE' },
    { ico:'📝', name:'CR de réunion', sub:'Générer · Personnaliser · Exporter DOCX', fn:'renderCRReunion()', color:'#7C3AED', colorl:'#EDE9FE' },
  ];

  cards.forEach(function(c) {
    html += '<div class="mod-list-card" onclick="' + c.fn + '">'
      + '<div class="mlc-icon" style="background:' + c.colorl + ';font-size:22px">' + c.ico + '</div>'
      + '<div class="mlc-body">'
        + '<div class="mlc-name">' + c.name + '</div>'
        + '<div class="mlc-sub">' + c.sub + '</div>'
      + '</div>'
      + '<span class="mlc-arrow">›</span>'
    + '</div>';
  });

  html += '</div><div class="pb-nav"></div>';
  mc.innerHTML = html;
}

/* ─── CR DE RÉUNION ─── */
function renderCRReunion() {
  setBreadcrumb([
    { label: 'Dossiers perso', fn: 'renderDossiersHub()' },
    { label: 'CR de réunion' }
  ]);
  var mc = document.getElementById('main-content');
  if (!mc) return;

  var html = '<div style="padding:8px var(--s-4);border-bottom:1px solid var(--c-border);display:flex;align-items:center">'
    + '<button onclick="renderDossiersHub()" style="border:none;background:none;cursor:pointer;font-size:13px;color:var(--c-text-2);font-weight:600;padding:0">← Dossiers</button>'
    + '</div>';
  html += '<div style="padding:var(--s-4)">';

  html += '<div style="font-size:18px;font-weight:700;color:var(--c-text-1);margin-bottom:var(--s-2)">📝 Nouveau compte rendu</div>';
  html += '<div style="font-size:13px;color:var(--c-text-3);margin-bottom:var(--s-4)">Remplissez le formulaire puis exportez en DOCX</div>';

  html += '<div style="display:flex;flex-direction:column;gap:var(--s-3)">';

  /* ── Bloc entête ── */
  html += _crSection('Identification', [
    _crField('cr-projet',    'Nom du projet / affaire', 'text',     'Ex : SIEHGSC — Réseau AEP Vignaux'),
    _crField('cr-numero',    'N° du CR',                'text',     'Ex : 4'),
    _crField('cr-date',      'Date de la réunion',      'date',     ''),
    _crField('cr-lieu',      'Lieu',                    'text',     'Ex : Mairie de Vignaux'),
    _crField('cr-objet',     'Objet de la réunion',     'text',     'Ex : Réunion de chantier — phase travaux'),
    _crField('cr-redacteur', 'Rédacteur du CR',         'text',     'Ex : Elian D.'),
  ]);

  /* ── Participants ── */
  html += _crSection('Participants', []);
  html += '<div id="cr-participants-list" style="display:flex;flex-direction:column;gap:var(--s-2);padding:0 var(--s-4)">';
  html += _crParticipantRow(0);
  html += '</div>';
  html += '<div style="padding:var(--s-2) var(--s-4)">'
    + '<button onclick="_crAddParticipant()" style="background:var(--c-surface-2);border:1px dashed var(--c-border);border-radius:8px;padding:8px 16px;font-size:13px;color:var(--c-primary);cursor:pointer;width:100%">+ Ajouter un participant</button>'
    + '</div>';

  /* ── Points abordés ── */
  html += _crSection('Points abordés', []);
  html += '<div id="cr-points-list" style="display:flex;flex-direction:column;gap:var(--s-2);padding:0 var(--s-4)">';
  html += _crPointRow(0);
  html += '</div>';
  html += '<div style="padding:var(--s-2) var(--s-4)">'
    + '<button onclick="_crAddPoint()" style="background:var(--c-surface-2);border:1px dashed var(--c-border);border-radius:8px;padding:8px 16px;font-size:13px;color:var(--c-primary);cursor:pointer;width:100%">+ Ajouter un point</button>'
    + '</div>';

  /* ── Actions / décisions ── */
  html += _crSection('Actions et décisions', []);
  html += '<div id="cr-actions-list" style="display:flex;flex-direction:column;gap:var(--s-2);padding:0 var(--s-4)">';
  html += _crActionRow(0);
  html += '</div>';
  html += '<div style="padding:var(--s-2) var(--s-4)">'
    + '<button onclick="_crAddAction()" style="background:var(--c-surface-2);border:1px dashed var(--c-border);border-radius:8px;padding:8px 16px;font-size:13px;color:var(--c-primary);cursor:pointer;width:100%">+ Ajouter une action</button>'
    + '</div>';

  /* ── Prochaine réunion ── */
  html += _crSection('Prochaine réunion', [
    _crField('cr-prochaine-date', 'Date prévue',  'date', ''),
    _crField('cr-prochaine-lieu', 'Lieu prévu',   'text', 'Si connue'),
  ]);

  /* ── Bouton export ── */
  html += '<div style="padding:var(--s-2) var(--s-4) var(--s-4)">'
    + '<button onclick="_crExportDocx()" style="background:var(--c-primary);color:#fff;border:none;border-radius:10px;padding:14px 24px;font-size:15px;font-weight:600;cursor:pointer;width:100%">📄 Exporter en DOCX</button>'
    + '</div>';

  html += '</div></div><div class="pb-nav"></div>';
  mc.innerHTML = html;
}

/* ─── HELPERS UI ─── */
function _crSection(title, fields) {
  var html = '<div style="background:var(--c-surface-2);border-radius:12px;padding:var(--s-3) var(--s-4);margin:0 var(--s-4)">'
    + '<div style="font-size:14px;font-weight:700;color:var(--c-text-1);margin-bottom:' + (fields.length ? 'var(--s-3)' : '0') + '">' + title + '</div>';
  fields.forEach(function(f) { html += f; });
  html += '</div>';
  return html;
}

function _crField(id, label, type, placeholder) {
  return '<div style="margin-bottom:var(--s-2)">'
    + '<label style="font-size:12px;color:var(--c-text-3);display:block;margin-bottom:4px">' + label + '</label>'
    + '<input id="' + id + '" type="' + type + '" placeholder="' + placeholder + '" '
    + 'style="width:100%;box-sizing:border-box;padding:10px 12px;border:1px solid var(--c-border);border-radius:8px;background:var(--c-surface-1);color:var(--c-text-1);font-size:14px;font-family:var(--f-body)">'
    + '</div>';
}

var _crPartCount = 1;
var _crPointCount = 1;
var _crActionCount = 1;

function _crParticipantRow(idx) {
  return '<div id="cr-part-' + idx + '" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;align-items:center">'
    + '<input placeholder="Nom Prénom" style="padding:9px 12px;border:1px solid var(--c-border);border-radius:8px;background:var(--c-surface-1);color:var(--c-text-1);font-size:13px;font-family:var(--f-body)" id="cr-part-nom-' + idx + '">'
    + '<input placeholder="Organisme / Rôle" style="padding:9px 12px;border:1px solid var(--c-border);border-radius:8px;background:var(--c-surface-1);color:var(--c-text-1);font-size:13px;font-family:var(--f-body)" id="cr-part-org-' + idx + '">'
    + '</div>';
}

function _crPointRow(idx) {
  return '<div id="cr-point-' + idx + '" style="display:flex;flex-direction:column;gap:6px">'
    + '<input placeholder="Titre du point (ex : Avancement terrassements)" style="padding:9px 12px;border:1px solid var(--c-border);border-radius:8px;background:var(--c-surface-1);color:var(--c-text-1);font-size:13px;font-family:var(--f-body)" id="cr-point-titre-' + idx + '">'
    + '<textarea placeholder="Contenu / discussion / observations..." rows="3" style="padding:9px 12px;border:1px solid var(--c-border);border-radius:8px;background:var(--c-surface-1);color:var(--c-text-1);font-size:13px;font-family:var(--f-body);resize:vertical" id="cr-point-texte-' + idx + '"></textarea>'
    + '</div>';
}

function _crActionRow(idx) {
  return '<div id="cr-action-' + idx + '" style="display:grid;grid-template-columns:1fr 1fr auto;gap:8px;align-items:center">'
    + '<input placeholder="Action à mener" style="padding:9px 12px;border:1px solid var(--c-border);border-radius:8px;background:var(--c-surface-1);color:var(--c-text-1);font-size:13px;font-family:var(--f-body)" id="cr-action-lib-' + idx + '">'
    + '<input placeholder="Responsable" style="padding:9px 12px;border:1px solid var(--c-border);border-radius:8px;background:var(--c-surface-1);color:var(--c-text-1);font-size:13px;font-family:var(--f-body)" id="cr-action-resp-' + idx + '">'
    + '<input type="date" style="padding:9px 8px;border:1px solid var(--c-border);border-radius:8px;background:var(--c-surface-1);color:var(--c-text-1);font-size:12px;font-family:var(--f-body)" id="cr-action-date-' + idx + '">'
    + '</div>';
}

function _crAddParticipant() {
  var list = document.getElementById('cr-participants-list');
  if (!list) return;
  var div = document.createElement('div');
  div.innerHTML = _crParticipantRow(_crPartCount++);
  list.appendChild(div.firstChild);
}

function _crAddPoint() {
  var list = document.getElementById('cr-points-list');
  if (!list) return;
  var div = document.createElement('div');
  div.innerHTML = _crPointRow(_crPointCount++);
  list.appendChild(div.firstChild);
}

function _crAddAction() {
  var list = document.getElementById('cr-actions-list');
  if (!list) return;
  var div = document.createElement('div');
  div.innerHTML = _crActionRow(_crActionCount++);
  list.appendChild(div.firstChild);
}

/* ─── EXPORT DOCX ─── */
function _crExportDocx() {
  if (typeof docx === 'undefined') { alert('Librairie DOCX non chargée.'); return; }

  var g = function(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };

  var projet    = g('cr-projet')    || 'Projet';
  var numero    = g('cr-numero')    || '1';
  var date      = g('cr-date')      || '';
  var lieu      = g('cr-lieu')      || '';
  var objet     = g('cr-objet')     || '';
  var redacteur = g('cr-redacteur') || '';
  var dateFr    = date ? new Date(date).toLocaleDateString('fr-FR') : '';
  var dateProch = g('cr-prochaine-date') ? new Date(g('cr-prochaine-date')).toLocaleDateString('fr-FR') : '';
  var lieuProch = g('cr-prochaine-lieu');

  /* ── Participants ── */
  var parts = [];
  for (var i = 0; i < _crPartCount; i++) {
    var n = g('cr-part-nom-' + i), o = g('cr-part-org-' + i);
    if (n) parts.push({ nom: n, org: o });
  }

  /* ── Points ── */
  var points = [];
  for (var j = 0; j < _crPointCount; j++) {
    var t = g('cr-point-titre-' + j), tx = g('cr-point-texte-' + j);
    if (t) points.push({ titre: t, texte: tx });
  }

  /* ── Actions ── */
  var actions = [];
  for (var k = 0; k < _crActionCount; k++) {
    var lib = g('cr-action-lib-' + k), resp = g('cr-action-resp-' + k), dl = g('cr-action-date-' + k);
    if (lib) actions.push({ lib: lib, resp: resp, date: dl ? new Date(dl).toLocaleDateString('fr-FR') : '' });
  }

  var D = docx;

  /* ── Styles ── */
  var bold   = { bold: true };
  var title1 = { bold: true, size: 28, color: '1D4ED8' };
  var title2 = { bold: true, size: 24, color: '1D4ED8' };
  var title3 = { bold: true, size: 22 };
  var normal = { size: 20 };
  var small  = { size: 18, color: '666666' };

  function para(runs, opts) {
    return new D.Paragraph(Object.assign({ children: Array.isArray(runs) ? runs : [runs] }, opts || {}));
  }
  function run(text, style) { return new D.TextRun(Object.assign({ text: text }, style || {})); }
  function sep() { return para([run('')], { spacing: { after: 200 } }); }
  function h1(text) { return para([run(text, title1)], { spacing: { before: 300, after: 150 } }); }
  function h2(text) { return para([run(text, title2)], { spacing: { before: 240, after: 100 } }); }
  function h3(text) { return para([run(text, title3)], { spacing: { before: 200, after: 80 } }); }

  var children = [];

  /* Titre principal */
  children.push(para([run('COMPTE RENDU DE RÉUNION', { bold: true, size: 32, color: '1D4ED8', allCaps: true })], {
    alignment: D.AlignmentType ? D.AlignmentType.CENTER : 'center',
    spacing: { after: 100 },
  }));
  children.push(para([run(projet, { bold: true, size: 26, color: '374151' })], {
    alignment: D.AlignmentType ? D.AlignmentType.CENTER : 'center',
    spacing: { after: 300 },
  }));

  /* Entête informations */
  children.push(h2('INFORMATIONS GÉNÉRALES'));

  var infos = [
    ['N° CR', numero],
    ['Date', dateFr],
    ['Lieu', lieu],
    ['Objet', objet],
    ['Rédacteur', redacteur],
  ];
  infos.forEach(function(row) {
    if (row[1]) {
      children.push(para([
        run(row[0] + ' : ', bold),
        run(row[1], normal),
      ], { spacing: { after: 80 } }));
    }
  });

  children.push(sep());

  /* Participants */
  if (parts.length > 0) {
    children.push(h2('LISTE DES PARTICIPANTS'));
    parts.forEach(function(p) {
      children.push(para([
        run('• ' + p.nom, bold),
        run(p.org ? ' — ' + p.org : '', normal),
      ], { spacing: { after: 60 } }));
    });
    children.push(sep());
  }

  /* Points abordés */
  if (points.length > 0) {
    children.push(h2('POINTS ABORDÉS'));
    points.forEach(function(pt, idx) {
      children.push(h3((idx + 1) + '. ' + pt.titre.toUpperCase()));
      if (pt.texte) {
        pt.texte.split('\n').forEach(function(line) {
          if (line.trim()) children.push(para([run(line, normal)], { spacing: { after: 60 } }));
        });
      }
      children.push(sep());
    });
  }

  /* Actions */
  if (actions.length > 0) {
    children.push(h2('ACTIONS ET DÉCISIONS'));

    /* Tableau actions */
    var tableRows = [];
    tableRows.push(new D.TableRow({
      children: [
        new D.TableCell({ children: [para([run('Action', bold)])], shading: { fill: 'DBEAFE' } }),
        new D.TableCell({ children: [para([run('Responsable', bold)])], shading: { fill: 'DBEAFE' } }),
        new D.TableCell({ children: [para([run('Échéance', bold)])], shading: { fill: 'DBEAFE' } }),
      ],
    }));
    actions.forEach(function(a) {
      tableRows.push(new D.TableRow({
        children: [
          new D.TableCell({ children: [para([run(a.lib, normal)])] }),
          new D.TableCell({ children: [para([run(a.resp, normal)])] }),
          new D.TableCell({ children: [para([run(a.date, normal)])] }),
        ],
      }));
    });

    children.push(new D.Table({
      rows: tableRows,
      width: { size: 9000, type: D.WidthType ? D.WidthType.DXA : 'dxa' },
    }));
    children.push(sep());
  }

  /* Prochaine réunion */
  if (dateProch || lieuProch) {
    children.push(h2('PROCHAINE RÉUNION'));
    if (dateProch) children.push(para([run('Date : ', bold), run(dateProch, normal)], { spacing: { after: 80 } }));
    if (lieuProch) children.push(para([run('Lieu : ', bold), run(lieuProch, normal)], { spacing: { after: 80 } }));
    children.push(sep());
  }

  /* Pied de page */
  children.push(para([run('Document généré par HydroCalc — ' + new Date().toLocaleDateString('fr-FR'), small)], {
    alignment: D.AlignmentType ? D.AlignmentType.RIGHT : 'right',
  }));

  var doc = new D.Document({
    sections: [{
      properties: {
        page: {
          margin: { top: 1000, right: 1000, bottom: 1000, left: 1200 },
        },
      },
      children: children,
    }],
  });

  D.Packer.toBlob(doc).then(function(blob) {
    var dateFile = date ? date.replace(/-/g, '') : 'XXXXXX';
    var filename = 'CR_N' + numero.replace(/\s/g, '') + '_' + dateFile + '_' + projet.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 20) + '.docx';
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    setTimeout(function() { URL.revokeObjectURL(url); }, 2000);
  });
}
