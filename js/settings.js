/* ══════════════════════════════════════════════════════════════════
   PARAMÈTRES — HydroCalc
   Page dédiée complète : compte, apparence, calculs, données, à propos
   ══════════════════════════════════════════════════════════════════ */

var HC_SETTINGS_KEY = 'hc_settings_v1';

var HC_SETTINGS_DEFAULT = {
  theme:    'light',
  font:     'normal',
  accent:   'green',
  density:  'normal',
  units:    'si',
  decimals: '2',
  strickler: '80',
  eh:        '150',
  defaultProject: '',
};

/* ─── Charger / Sauvegarder / Appliquer ─── */
function _getSettings() {
  return Object.assign({}, HC_SETTINGS_DEFAULT, DataStore.settings.get());
}

function _saveSettings(s) {
  DataStore.settings.set(s);
}

function _applySettings(s) {
  var root = document.documentElement;
  var effectiveTheme = s.theme;
  if (s.theme === 'auto') {
    effectiveTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.setAttribute('data-theme', effectiveTheme);
  root.removeAttribute('data-font');
  if (s.font !== 'normal') root.setAttribute('data-font', s.font);
  root.removeAttribute('data-accent');
  if (s.accent !== 'green') root.setAttribute('data-accent', s.accent);
  root.removeAttribute('data-density');
  if (s.density && s.density !== 'normal') root.setAttribute('data-density', s.density);
}

function initSettings() {
  _applySettings(_getSettings());
}

/* ─── Écoute changement OS ─── */
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
    var s = _getSettings();
    if (s.theme === 'auto') _applySettings(s);
  });
}

/* ═══════════════════════════════════════════════════
   PAGE PARAMÈTRES COMPLÈTE
═══════════════════════════════════════════════════ */
function openSettings() {
  var s = _getSettings();
  var u = (typeof AUTH !== 'undefined' && AUTH.user) ? AUTH.user : null;
  var plan = u ? (u.plan || 'free') : 'guest';
  var planInfo = (typeof PLANS_HC !== 'undefined' && PLANS_HC[plan]) ? PLANS_HC[plan] : { name:'Invité', icon:'👤', color:'var(--c-text-3)' };

  /* Fermer la sidebar si ouverte */
  if (typeof closeSidebar === 'function') closeSidebar();

  /* Breadcrumb / top bar */
  if (typeof setTopTitle === 'function') setTopTitle('⚙️ Paramètres');
  var topTitle = document.getElementById('top-title');
  if (topTitle) topTitle.textContent = '⚙️ Paramètres';

  /* Helpers HTML ────────────────────────────────── */
  function sectionTitle(label) {
    return '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;padding:20px 16px 8px">' + label + '</div>';
  }

  function card(content) {
    return '<div style="margin:0 12px 2px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:14px;overflow:hidden">' + content + '</div>';
  }

  function row(ico, label, right, onclick, last) {
    var border = last ? '' : 'border-bottom:1px solid var(--c-border);';
    var cursor = onclick ? 'cursor:pointer;' : '';
    var clickAttr = onclick ? ' onclick="' + onclick + '"' : '';
    return '<div' + clickAttr + ' style="display:flex;align-items:center;padding:13px 16px;gap:12px;' + border + cursor + '">'
      + '<span style="font-size:18px;width:24px;text-align:center;flex-shrink:0">' + ico + '</span>'
      + '<span style="flex:1;font-size:13px;font-weight:500;color:var(--c-text)">' + label + '</span>'
      + '<span style="font-size:12px;color:var(--c-text-3)">' + (right || '') + '</span>'
      + '</div>';
  }

  function pillGroup(options, settingKey, currentVal) {
    var html = '<div style="display:flex;gap:6px;flex-wrap:wrap">';
    options.forEach(function(opt) {
      var active = currentVal === opt.id;
      html += '<button onclick="_setSetting(\'' + settingKey + '\',\'' + opt.id + '\')" style="padding:7px 14px;border-radius:20px;border:1.5px solid ' + (active ? 'var(--c-primary)' : 'var(--c-border)') + ';background:' + (active ? 'var(--c-primary)' : 'var(--c-surface-2)') + ';color:' + (active ? '#fff' : 'var(--c-text-2)') + ';font-size:12px;font-weight:' + (active ? '700' : '500') + ';cursor:pointer;font-family:var(--f-body)">' + opt.label + '</button>';
    });
    html += '</div>';
    return html;
  }

  function colorDots(accents, currentVal) {
    var html = '<div style="display:flex;gap:10px;flex-wrap:wrap">';
    accents.forEach(function(a) {
      var active = currentVal === a.id;
      html += '<button onclick="_setSetting(\'accent\',\'' + a.id + '\')" title="' + a.label + '" style="width:32px;height:32px;border-radius:50%;background:' + a.color + ';border:3px solid ' + (active ? 'var(--c-primary)' : 'transparent') + ';outline:' + (active ? '2px solid var(--c-primary)' : 'none') + ';outline-offset:2px;cursor:pointer;transition:.15s"></button>';
    });
    html += '</div>';
    return html;
  }

  function settingRow(ico, label, controlHtml, last) {
    var border = last ? '' : 'border-bottom:1px solid var(--c-border);';
    return '<div style="padding:14px 16px;' + border + '">'
      + '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'
        + '<span style="font-size:16px">' + ico + '</span>'
        + '<span style="font-size:13px;font-weight:600;color:var(--c-text)">' + label + '</span>'
      + '</div>'
      + controlHtml
      + '</div>';
  }

  function numInputRow(ico, label, settingKey, val, min, max, unit, last) {
    var border = last ? '' : 'border-bottom:1px solid var(--c-border);';
    return '<div style="display:flex;align-items:center;padding:13px 16px;gap:12px;' + border + '">'
      + '<span style="font-size:18px;width:24px;text-align:center;flex-shrink:0">' + ico + '</span>'
      + '<span style="flex:1;font-size:13px;font-weight:500;color:var(--c-text)">' + label + '</span>'
      + '<div style="display:flex;align-items:center;gap:6px">'
        + '<input type="number" value="' + val + '" min="' + min + '" max="' + max + '" onchange="_setSetting(\'' + settingKey + '\',this.value)" style="width:64px;padding:5px 8px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:13px;text-align:center;background:var(--c-surface-2);color:var(--c-text)">'
        + '<span style="font-size:11px;color:var(--c-text-3)">' + unit + '</span>'
      + '</div>'
      + '</div>';
  }

  /* ── Section compte ────────────────────────────── */
  var accountSection = '';
  if (u) {
    var initials = u.name.split(' ').map(function(w){ return w[0]; }).join('').slice(0,2).toUpperCase();
    accountSection = sectionTitle('Mon compte')
      + card(
        '<div style="display:flex;align-items:center;gap:14px;padding:16px">'
          + '<div style="width:48px;height:48px;border-radius:50%;background:var(--c-primary-l);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;flex-shrink:0">' + initials + '</div>'
          + '<div style="flex:1;min-width:0">'
            + '<div style="font-size:15px;font-weight:700;color:var(--c-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + u.name + '</div>'
            + '<div style="font-size:11px;color:var(--c-text-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + u.email + '</div>'
            + '<div style="margin-top:5px;display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:12px;background:var(--c-primary-l);font-size:11px;font-weight:700;color:var(--c-primary)">'
              + planInfo.icon + ' ' + planInfo.name
            + '</div>'
          + '</div>'
        + '</div>'
        + (plan === 'free'
          ? '<div style="border-top:1px solid var(--c-border);padding:12px 16px"><button onclick="if(typeof openProfile===\'function\')openProfile()" style="width:100%;padding:9px;background:var(--c-primary);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:var(--f-body)">⚡ Passer à Pro — 5,90 €/mois</button></div>'
          : '')
      );
  } else {
    accountSection = sectionTitle('Mon compte')
      + card(
        '<div style="padding:16px;text-align:center">'
          + '<div style="font-size:32px;margin-bottom:8px">👤</div>'
          + '<div style="font-size:13px;color:var(--c-text-2);margin-bottom:12px">Vous n\'êtes pas connecté</div>'
          + '<button onclick="authLogout()" style="padding:9px 20px;background:var(--c-primary);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:var(--f-body)">Se connecter</button>'
        + '</div>'
      );
  }

  /* ── Section apparence ─────────────────────────── */
  var apparenceSection = sectionTitle('Apparence')
    + card(
      settingRow('🌓', 'Thème',
        pillGroup([
          { id:'light', label:'☀️ Clair' },
          { id:'dark',  label:'🌙 Sombre' },
          { id:'auto',  label:'🖥️ Système' },
        ], 'theme', s.theme)
      )
      + settingRow('🔤', 'Taille du texte',
        pillGroup([
          { id:'small',  label:'Petit' },
          { id:'normal', label:'Normal' },
          { id:'large',  label:'Grand' },
        ], 'font', s.font)
      )
      + settingRow('🎨', 'Couleur d\'accent',
        colorDots([
          { id:'green',  label:'Vert eau',  color:'#0A7460' },
          { id:'blue',   label:'Bleu',      color:'#1550A0' },
          { id:'violet', label:'Violet',    color:'#5A189A' },
          { id:'orange', label:'Orange',    color:'#C05A10' },
          { id:'teal',   label:'Turquoise', color:'#0891B2' },
        ], s.accent)
      )
      + settingRow('📐', 'Densité d\'affichage',
        pillGroup([
          { id:'compact', label:'Compact' },
          { id:'normal',  label:'Normal' },
          { id:'airy',    label:'Aéré' },
        ], 'density', s.density || 'normal'),
        true
      )
    );

  /* ── Section calculs & unités ──────────────────── */
  var calcsSection = sectionTitle('Calculs & unités')
    + card(
      settingRow('📏', 'Système d\'unités',
        pillGroup([
          { id:'si',      label:'SI (m³/s, m, Pa)' },
          { id:'pratique', label:'Pratique (L/s, mm, bar)' },
        ], 'units', s.units || 'si')
      )
      + settingRow('🔢', 'Décimales affichées',
        pillGroup([
          { id:'2', label:'2 (0,00)' },
          { id:'3', label:'3 (0,000)' },
          { id:'4', label:'4 (0,0000)' },
        ], 'decimals', s.decimals || '2')
      )
      + numInputRow('🌊', 'Coefficient de Strickler par défaut', 'strickler', s.strickler || '80', '20', '130', 'm^1/3/s')
      + numInputRow('👤', 'Dotation par EH par défaut', 'eh', s.eh || '150', '50', '300', 'L/j·EH', true)
    );

  /* ── Section projets & données ─────────────────── */
  var donneesSection = sectionTitle('Projets & données')
    + card(
      row('📤', 'Exporter toutes mes données', '→', '_exportAllData()')
      + row('📥', 'Importer des données', '→', '_importDataTrigger()')
      + row('🗑️', 'Effacer tous mes calculs', '<span style="color:var(--c-danger)">Supprimer</span>', '_clearAllDataConfirm()', true)
    )
    + '<input type="file" id="hc-import-file" accept=".json" style="display:none" onchange="_importDataFromFile(this)">';

  /* ── Section à propos ──────────────────────────── */
  var aboutSection = sectionTitle('À propos')
    + card(
      row('📋', 'Version', 'HydroCalc v2.0', '', false)
      + row('📅', 'Mise à jour', 'Juin 2026', '', false)
      + row('📜', 'Mentions légales', '→', '_showLegal(\'mentions\')')
      + row('📄', 'CGU', '→', '_showLegal(\'cgu\')')
      + row('✉️', 'Nous contacter', '→', '_contactSupport()', true)
    )
    + card(
      '<div style="padding:14px 16px">'
        + '<button onclick="_resetSettings()" style="width:100%;padding:10px;background:none;border:1.5px solid var(--c-border);border-radius:10px;font-size:13px;font-weight:600;color:var(--c-text-3);cursor:pointer;font-family:var(--f-body)">Réinitialiser les paramètres</button>'
      + '</div>'
    );

  /* ── Assemblage ────────────────────────────────── */
  var html = '<div style="padding-bottom:32px">'
    + '<div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px">'
      + '<button onclick="goHome()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:34px;height:34px;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0">←</button>'
      + '<div style="font-size:20px;font-weight:800;color:var(--c-text)">⚙️ Paramètres</div>'
    + '</div>'
    + accountSection
    + apparenceSection
    + calcsSection
    + donneesSection
    + aboutSection
    + '<div style="height:40px"></div>'
  + '</div>';

  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0, 0);
}

function closeSettings() {
  var m = document.getElementById('hc-settings-panel');
  if (m) m.remove();
}

/* ─── Modifier un réglage (applique + re-render) ─── */
function _setSetting(key, val) {
  var s = _getSettings();
  s[key] = val;
  _saveSettings(s);
  _applySettings(s);
  openSettings();
}

/* ─── Réinitialiser ─── */
function _resetSettings() {
  if (!confirm('Réinitialiser tous les paramètres d\'apparence et de calcul ?')) return;
  _saveSettings(Object.assign({}, HC_SETTINGS_DEFAULT));
  _applySettings(HC_SETTINGS_DEFAULT);
  openSettings();
  if (typeof authToast === 'function') authToast('Paramètres réinitialisés ✓');
}

/* ─── Export données ─── */
function _exportAllData() {
  var u = (typeof AUTH !== 'undefined' && AUTH.user) ? AUTH.user : null;
  var key = u ? u.email : 'guest';
  var data = {
    version: '2.0',
    date: new Date().toISOString(),
    user: u ? { name: u.name, email: u.email, plan: u.plan } : null,
    settings: _getSettings(),
  };
  Object.assign(data, DataStore.exportUserData(key));
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'hydrocalc_backup_' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  if (typeof authToast === 'function') authToast('Export téléchargé ✓');
}

/* ─── Import données ─── */
function _importDataTrigger() {
  var fi = document.getElementById('hc-import-file');
  if (fi) fi.click();
}

function _importDataFromFile(input) {
  var file = input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      if (!data.version) throw new Error('Format invalide');
      var u = (typeof AUTH !== 'undefined' && AUTH.user) ? AUTH.user : null;
      var key = u ? u.email : 'guest';
      DataStore.importUserData(key, data);
      if (data.settings) { _saveSettings(data.settings); _applySettings(data.settings); }
      if (typeof authToast === 'function') authToast('Données importées ✓');
      openSettings();
    } catch(err) {
      if (typeof authToast === 'function') authToast('Fichier invalide — import annulé');
    }
    input.value = '';
  };
  reader.readAsText(file);
}

/* ─── Effacer données ─── */
function _clearAllDataConfirm() {
  if (!confirm('Effacer tous vos calculs, projets et formules enregistrés ?\nCette action est irréversible.')) return;
  var u = (typeof AUTH !== 'undefined' && AUTH.user) ? AUTH.user : null;
  var key = u ? u.email : 'guest';
  DataStore.clearUserData(key);
  if (typeof authToast === 'function') authToast('Données effacées ✓');
  openSettings();
}

/* ─── Légal / Contact ─── */
function _showLegal(type) {
  var titles = { mentions: 'Mentions légales', cgu: 'Conditions générales d\'utilisation' };
  var contents = {
    mentions: '<p>HydroCalc est édité par un développeur indépendant.<br>Contact : hydrocalc.app@gmail.com<br>Hébergement : GitHub Pages</p><p>Les calculs fournis sont donnés à titre indicatif et ne sauraient se substituer à l\'avis d\'un professionnel qualifié.</p>',
    cgu: '<p>L\'utilisation de HydroCalc implique l\'acceptation des présentes CGU.<br>L\'application est fournie "telle quelle", sans garantie de résultat.<br>Les données sont stockées localement sur votre appareil.</p>',
  };
  var mc = document.getElementById('main-content');
  mc.innerHTML = '<div style="padding:16px">'
    + '<div style="display:flex;align-items:center;gap:10px;margin-bottom:20px">'
      + '<button onclick="openSettings()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:34px;height:34px;font-size:16px;cursor:pointer">←</button>'
      + '<div style="font-size:17px;font-weight:800;color:var(--c-text)">' + titles[type] + '</div>'
    + '</div>'
    + '<div style="font-size:13px;color:var(--c-text-2);line-height:1.8;background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:16px">' + contents[type] + '</div>'
  + '</div>';
}

function _contactSupport() {
  window.location.href = 'mailto:hydrocalc.app@gmail.com?subject=Support%20HydroCalc';
}
