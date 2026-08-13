
/* ─── Logo préchargé pour PDF ─── */
var _pdfIconDataUrl = null;
(function() {
  var img = new Image();
  img.onload = function() {
    var c = document.createElement('canvas');
    c.width = img.naturalWidth; c.height = img.naturalHeight;
    c.getContext('2d').drawImage(img, 0, 0);
    _pdfIconDataUrl = c.toDataURL('image/png');
  };
  img.src = './images/icon.png';
})();

/* ─── HELPER COMPAT (remplace ?. pour les anciens Android) ─── */
function getV(id){ var e=document.getElementById(id); return e?e.value:''; }
function getEl(id){ return document.getElementById(id)||null; }

/* ─── STORAGE SÉCURISÉ (fallback mémoire si localStorage bloqué) ─── */
var _memStore = {};
var _safeStorage = {
  getItem: function(k){ try{ return localStorage.getItem(k); }catch(e){ return _memStore[k]||null; } },
  setItem: function(k,v){ try{ localStorage.setItem(k,v); }catch(e){ _memStore[k]=v; } },
  removeItem: function(k){ try{ localStorage.removeItem(k); }catch(e){ delete _memStore[k]; } }
};

/* ─── LIMITE CALCULS JOURNALIERS (plan gratuit : 10/jour) ─── */
function checkCalcLimit() {
  var plan = AUTH && AUTH.user ? (AUTH.user.plan || 'free') : 'free';
  if (plan !== 'free' || (AUTH.user && AUTH.user.isAdmin)) return true;

  var today = new Date().toISOString().slice(0, 10);
  var quota = DataStore.calcQuota.get() || { date: today, count: 0 };
  if (quota.date !== today) { quota = { date: today, count: 0 }; }

  if (quota.count >= 10) {
    showCalcLimitModal();
    return false;
  }
  quota.count++;
  DataStore.calcQuota.set(quota);
  return true;
}

function showCalcLimitModal() {
  var existing = document.getElementById('calc-limit-modal');
  if (existing) { existing.style.display = 'flex'; return; }
  var modal = document.createElement('div');
  modal.id = 'calc-limit-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:500;background:rgba(0,0,0,.5);display:flex;align-items:flex-end;justify-content:center;padding:var(--s-4)';
  modal.innerHTML =
    '<div style="background:var(--c-surface);border-radius:var(--r-xl) var(--r-xl) var(--r-md) var(--r-md);padding:var(--s-5) var(--s-4);width:100%;max-width:400px;text-align:center">' +
      '<div style="font-size:40px;margin-bottom:var(--s-3)">🧮</div>' +
      '<div style="font-family:var(--f-display);font-size:20px;margin-bottom:var(--s-2)">Limite quotidienne atteinte</div>' +
      '<div style="font-size:13px;color:var(--c-text-3);line-height:1.6;margin-bottom:var(--s-4)">Vous avez utilisé vos <strong>10 calculs gratuits</strong> du jour.<br>Revenez demain ou passez au plan Pro pour des calculs illimités.</div>' +
      '<button onclick="openSidebar();document.getElementById(\'calc-limit-modal\').style.display=\'none\'" style="width:100%;padding:13px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-lg);font-family:var(--f-body);font-size:14px;font-weight:700;cursor:pointer;margin-bottom:var(--s-2)">💎 Voir les abonnements</button>' +
      '<button onclick="document.getElementById(\'calc-limit-modal\').style.display=\'none\'" style="width:100%;padding:11px;background:transparent;border:1.5px solid var(--c-border);border-radius:var(--r-lg);font-family:var(--f-body);font-size:13px;color:var(--c-text-3);cursor:pointer">Fermer</button>' +
    '</div>';
  document.body.appendChild(modal);
}

/* ═══════════════════════════════════════════════════
   MODULES DATA
═══════════════════════════════════════════════════ */
const MODULES_META = [
  { id:'calc',  ico:'⚡', name:'Calculateurs',               sub:'AC · AEP · ANC · Milieux — tous thèmes', color:'var(--c-anc)', tags:['AC','AEP','ANC','Milieux'], cat:'calculs', featured:true },
  { id:'conv',  ico:'🔄', name:'Convertisseur d\'unités',   sub:'Débit · Pression · Concentration',   color:'var(--c-riv)', tags:['m³/h','bar','mg/L'],           cat:'calculs',    isNew:true  },
  { id:'anc',   ico:'🏡', name:'Ouvrages ANC complets',     sub:'31 ouvrages · Filières · Rejet',     color:'var(--c-anc)', tags:['31 ouvrages','Filières'],      cat:'anc',        featured:true  },
  { id:'nc',    ico:'⚠️', name:'Non conformes',             sub:'Puisard · Fosse septique · Réhab.', color:'var(--c-nc)',   tags:['Historique','NC','Réhab.'],    cat:'anc'  },
  { id:'ouv',   ico:'🔧', name:'Ouvrages AC & EP',          sub:'Regards · Bassins · MBR · PRV',      color:'var(--c-ac)',  tags:['AC','EP','Bassins'],           cat:'anc'  },
  { id:'aides', ico:'💰', name:'Aides financières ANC',     sub:'Éco-PTZ · TVA 5,5% · Agences eau',  color:'var(--c-aides)',tags:['Éco-PTZ','TVA 5,5%'],         cat:'anc',        isNew:true  },
  { id:'spanc', ico:'🗺️', name:'SPANC — 101 départements', sub:'Contacts · Obligations · Local',     color:'var(--c-ep)',  tags:['101 depts','Contacts'],        cat:'anc'  },
  { id:'cours', ico:'🎓', name:'BTS GEMEAU — Cours',        sub:'UE1→UE6 · QCM · Fiches mémo',       color:'var(--c-anc)', tags:['UE1–UE6','QCM','Mémo'],       cat:'formation',  featured:true  },
  { id:'form',  ico:'🏛️', name:'Formations supérieures',   sub:'BUT · Master · ENGEES · MS EPA',     color:'var(--c-form)',tags:['Bac+2 à Bac+6','QCM'],        cat:'formation'  },
  { id:'regl',  ico:'📋', name:'Réglementation complète',  sub:'Arrêté 2024 · REUT · NOTRe',         color:'var(--c-regl)',tags:['2024','REUT','DCE'],           cat:'reference'  },
  { id:'gloss', ico:'📖', name:'Glossaire & Références',   sub:'200+ termes · 90+ acronymes',        color:'var(--c-ref)', tags:['Glossaire','Acronymes'],       cat:'reference'  },
  { id:'mat',     ico:'🔩', name:'Matériaux',       sub:'AEP · AC · ANC · DN normalisés', color:'var(--c-mat)', tags:['PVC','Fonte','PEHD','DN'], cat:'reference' },
];

const CATS_CONFIG = {
  calculs:   { lbl: '🧮 Calculateurs',            color: 'var(--c-ac)'   },
  anc:       { lbl: '🏡 ANC & Assainissement',    color: 'var(--c-anc)'  },
  formation: { lbl: '🎓 Formation & Cours',        color: 'var(--c-form)' },
  reference: { lbl: '📚 Référence & Réglementation', color: 'var(--c-regl)'},
};

let currentModule = null;
let qcmState = { idx:0, score:0 };

/* ═══ RENDER HOME ═══ */

var HOME_ALL_SHORTCUTS = [
  { id:'calc',       ico:'⚡', name:'Calculateurs',      sub:'AC · AEP · ANC · Milieux' },
  { id:'conv',       ico:'🔄', name:'Convertisseur',     sub:'Débit · Pression' },
  { id:'cours',      ico:'🎓', name:'Cours',             sub:'52 chapitres' },
  { id:'form',       ico:'🏛️', name:'Formations',        sub:'BUT · Master · ENGEES' },
  { id:'qcm',        ico:'✅', name:'QCM',               sub:'800+ questions · 4 modules' },
  { id:'anc',        ico:'🏡', name:'Ouvrages ANC',      sub:'31 ouvrages' },
  { id:'ouv',        ico:'🔧', name:'Ouvrages AC & EP',  sub:'Regards · Bassins' },
  { id:'nc',         ico:'⚠️', name:'Non conformes',     sub:'Historique · Réhab.' },
  { id:'spanc',      ico:'🗺️', name:'SPANC',             sub:'101 départements' },
  { id:'aides',      ico:'💰', name:'Aides ANC',         sub:'Éco-PTZ · TVA 5,5%' },
  { id:'gloss',      ico:'📖', name:'Glossaire',         sub:'200+ termes' },
  { id:'mat',        ico:'🔩', name:'Matériaux',           sub:'AEP · AC · ANC · DN normalisés' },
  { id:'regl',       ico:'📋', name:'Réglementation',    sub:'Arrêtés · DCE · REUT' },
  { id:'outils',    ico:'📐', name:'Terrain',         sub:'ANC · AC · EP · Rivières' },
  { id:'dossiers',  ico:'📁', name:'Dossiers perso',  sub:'Rapports · CR · Documents' },
];

var HOME_DEFAULT_SHORTCUTS = ['calc','cours','qcm','outils'];

function _homeGetShortcuts() {
  try {
    var saved = localStorage.getItem('home_shortcuts');
    if (saved) {
      var arr = JSON.parse(saved);
      if (Array.isArray(arr) && arr.length === 4) return arr;
    }
  } catch(e) {}
  return HOME_DEFAULT_SHORTCUTS.slice();
}

function _homeSaveShortcuts(arr) {
  try { localStorage.setItem('home_shortcuts', JSON.stringify(arr)); } catch(e) {}
}

/* ─── BREADCRUMB GLOBAL ─── */
function setBreadcrumb(items) {
  var mc = document.getElementById('main-content');
  if (!mc) return;
  var existing = mc.querySelector('.hc-breadcrumb');
  if (existing) existing.remove();
  var bar = document.createElement('div');
  bar.className = 'hc-breadcrumb';
  bar.style.cssText = 'padding:var(--s-2) var(--s-4);display:flex;align-items:center;gap:4px;overflow-x:auto;scrollbar-width:none;background:var(--c-surface-2);border-bottom:1px solid var(--c-border)';
  items.forEach(function(item, i) {
    if (i > 0) {
      var sep = document.createElement('span');
      sep.style.cssText = 'color:var(--c-text-4);font-size:12px';
      sep.textContent = '›';
      bar.appendChild(sep);
    }
    if (item.fn) {
      var btn = document.createElement('button');
      btn.setAttribute('onclick', item.fn);
      btn.style.cssText = 'background:none;border:none;font-family:var(--f-body);font-size:12px;color:var(--c-primary);cursor:pointer;white-space:nowrap;padding:2px 0';
      btn.textContent = item.label;
      bar.appendChild(btn);
    } else {
      var span = document.createElement('span');
      span.style.cssText = 'font-size:12px;color:var(--c-text-3);white-space:nowrap;font-weight:600';
      span.textContent = item.label;
      bar.appendChild(span);
    }
  });
  mc.insertBefore(bar, mc.firstChild);
}

function renderHome() {
  setNav('');
  document.getElementById('tab-bar').style.display = 'none';
  document.getElementById('top-title').textContent = 'HydroCalc';

  var shortcuts = _homeGetShortcuts();

  var html = `
    <div class="home-hero">
      <div class="hh-brand">
        <div class="hh-icon"><img src="./images/logo-dark.png" alt="HydroCalc" style="height:42px;width:auto"></div>
        <div><div class="hh-sub">Application hydraulique professionnelle</div></div>
      </div>
      <div class="hh-stats">
        <div class="hs-item"><div class="hs-val">18</div><div class="hs-lbl">Modules</div></div>
        <div class="hs-item"><div class="hs-val">70+</div><div class="hs-lbl">Calculateurs</div></div>
        <div class="hs-item"><div class="hs-val">800+</div><div class="hs-lbl">Questions</div></div>
      </div>
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;padding:0 var(--s-4) 0;margin-top:var(--s-3)">
      <div class="section-header" style="margin:0;padding:0;border:none">Accès rapide</div>
      <button onclick="homeEditShortcuts()" style="background:none;border:none;cursor:pointer;font-size:11px;color:var(--c-primary);font-family:var(--f-body);padding:4px 8px;border-radius:8px;border:1px solid var(--c-primary);opacity:.8">✏️ Modifier</button>
    </div>

    <div style="padding:var(--s-2) var(--s-4) 0;display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)">
  `;

  shortcuts.forEach(function(sid) {
    var s = HOME_ALL_SHORTCUTS.find(function(x){ return x.id === sid; }) || { id:sid, ico:'📌', name:sid, sub:'' };
    html += `<div class="home-sc-card" onclick="showModule('${s.id}')">
      <div class="hsc-ico">${s.ico}</div>
      <div class="hsc-name">${s.name}</div>
      <div class="hsc-sub">${s.sub}</div>
    </div>`;
  });

  html += `</div>

    <div class="section-header" style="margin-top:var(--s-4)">Mes projets</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
  `;

  var nbCalcs = (typeof getSavedCalcs === 'function') ? getSavedCalcs().length : 0;
  var projets = [
    { fn:'renderCalcHistory()', ico:'💾', name:'Mes calculs & rapports', sub: nbCalcs > 0 ? nbCalcs + ' calcul' + (nbCalcs>1?'s':'') + ' · Export PDF · DOCX · ODT' : 'Calculs sauvegardés · Export PDF · DOCX · ODT', colorl:'#EFF6FF' },
    { fn:'showModule(\'outils\')', ico:'📐', name:'Mes outils terrain', sub:'Mesures · Relevés · Notes de chantier', colorl:'#F0FDF4' },
  ];

  projets.forEach(function(r) {
    html += '<div class="mod-list-card" onclick="' + r.fn + '">'
      + '<div class="mlc-icon" style="background:' + r.colorl + ';font-size:22px">' + r.ico + '</div>'
      + '<div class="mlc-body">'
        + '<div class="mlc-name" style="font-size:var(--t-md)">' + r.name + '</div>'
        + '<div class="mlc-sub">' + r.sub + '</div>'
      + '</div>'
      + '<span class="mlc-arrow">›</span>'
    + '</div>';
  });

  html += `</div>

    <div class="section-header" style="margin-top:var(--s-4)">Ressources</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
  `;

  var resources = [
    { id:'gloss',  ico:'📖', name:'Formules & Glossaire', sub:'200+ termes · 90+ acronymes · Toutes les formules', colorl:'var(--c-ref-l)'  },
    { id:'regl',   ico:'📋', name:'Réglementation',       sub:'Arrêtés · DCE · Police de l\'eau · REUT · Normes',  colorl:'var(--c-regl-l)' },
  ];

  resources.forEach(function(r) {
    html += `<div class="mod-list-card" onclick="showModule('${r.id}')">
      <div class="mlc-icon" style="background:${r.colorl};font-size:22px">${r.ico}</div>
      <div class="mlc-body">
        <div class="mlc-name" style="font-size:var(--t-md)">${r.name}</div>
        <div class="mlc-sub">${r.sub}</div>
      </div>
      <span class="mlc-arrow">›</span>
    </div>`;
  });

  html += `</div>
    <div style="text-align:center;padding:var(--s-4) var(--s-4) var(--s-2);font-size:9px;color:var(--c-text-4);letter-spacing:.03em;line-height:1.7;font-style:italic">
      Application hydraulique professionnelle · BTS GEMEAU · Techniciens eau
    </div>
    <div class="pb-nav"></div>`;

  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
}

function homeEditShortcuts() {
  var current = _homeGetShortcuts();

  var rows = HOME_ALL_SHORTCUTS.map(function(s) {
    var checked = current.indexOf(s.id) !== -1;
    return `<label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--c-border);cursor:pointer">
      <input type="checkbox" data-sid="${s.id}" ${checked?'checked':''} style="width:18px;height:18px;accent-color:var(--c-primary);flex-shrink:0">
      <span style="font-size:20px">${s.ico}</span>
      <span style="flex:1">
        <span style="display:block;font-size:13px;font-weight:600;color:var(--c-text-1)">${s.name}</span>
        <span style="font-size:11px;color:var(--c-text-3)">${s.sub}</span>
      </span>
    </label>`;
  }).join('');

  var modal = document.createElement('div');
  modal.id = 'home-sc-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:600;background:rgba(0,0,0,.5);display:flex;align-items:flex-end;justify-content:center';
  modal.innerHTML = `
    <div style="background:var(--c-surface);border-radius:var(--r-xl) var(--r-xl) 0 0;width:100%;max-width:480px;max-height:85vh;display:flex;flex-direction:column">
      <div style="padding:var(--s-4) var(--s-4) var(--s-2);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--c-border)">
        <div style="font-size:16px;font-weight:700;color:var(--c-text-1)">Personnaliser les raccourcis</div>
        <button onclick="document.getElementById('home-sc-modal').remove()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--c-text-3);line-height:1">×</button>
      </div>
      <div style="padding:0 var(--s-4) 4px;font-size:11px;color:var(--c-text-3);margin-top:var(--s-2)">Sélectionnez exactement 4 raccourcis</div>
      <div style="overflow-y:auto;flex:1;padding:0 var(--s-4)" id="hsc-list">${rows}</div>
      <div style="padding:var(--s-3) var(--s-4);border-top:1px solid var(--c-border)">
        <div id="hsc-warn" style="font-size:11px;color:#e53;margin-bottom:6px;display:none">Sélectionnez exactement 4 raccourcis.</div>
        <button onclick="homeApplyShortcuts()" style="width:100%;padding:13px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-lg);font-size:14px;font-weight:700;cursor:pointer;font-family:var(--f-body)">Enregistrer</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', function(e){ if(e.target===modal) modal.remove(); });
}

function homeApplyShortcuts() {
  var checked = document.querySelectorAll('#hsc-list input[type=checkbox]:checked');
  if (checked.length !== 4) {
    var w = document.getElementById('hsc-warn');
    if (w) w.style.display = 'block';
    return;
  }
  var ids = [];
  checked.forEach(function(cb){ ids.push(cb.dataset.sid); });
  _homeSaveShortcuts(ids);
  var modal = document.getElementById('home-sc-modal');
  if (modal) modal.remove();
  renderHome();
}

/* ═══ RENDER MODULE ═══ */
/* ─── UTILITAIRES SCROLL (mobile-safe) ─── */
function scrollToContent(elId) {
  var mc = document.getElementById('main-content');
  var el = document.getElementById(elId);
  if (!mc) return;
  setTimeout(function() {
    if (el && el.offsetTop > 0) {
      mc.scrollTop = el.offsetTop;
    } else {
      mc.scrollTop = 0;
    }
  }, 30);
}

function scrollToTop() {
  var mc = document.getElementById('main-content');
  if (mc) mc.scrollTop = 0;
}

function showModule(id) {
  currentModule = id;

  // Remonter au sommet du contenu à chaque changement de module
  scrollToTop();

  // Titre top-bar
  var TITRES = {
    refmat:'Références & Matériaux',
    regl:'Réglementation',
    cours:'Cours',
    qcm:'QCM',
    ac:'Assainissement collectif',
    anc:'Ouvrages ANC',
    ep:'Eau potable',
    riv:'Milieu naturel',
    gloss:'Formulaire & Glossaire',
    calc:'Calculateurs',
    calca:'Calculateurs avancés',
    calcs:'Calculateurs complémentaires',
    conv:'Convertisseur d\'unités',
    ouv:'Ouvrages AC & EP',
    spanc:'SPANC — Départements',
    aides:'Aides financières ANC',
    nc:'Non conformes',
    mat:'Matériaux & Équipements',
    form:'Formations supérieures',
    dossiers:'Dossiers perso',
  };
  var titre = TITRES[id];
  if (!titre) {
    var m = MODULES_META.find(function(x){ return x.id === id; });
    if (m) titre = m.name.split('—')[0].trim();
  }
  var titleEl = document.getElementById('top-title');
  if (titleEl && titre) titleEl.textContent = titre;

  // Renderer explicite par module (pas de référence en objet)
  if      (id === 'refmat') renderRefMat();
  else if (id === 'qcm')    renderQCMHub();
  else if (id === 'ac')     renderAC();
  else if (id === 'calc')   renderCalc();
  else if (id === 'calca')  renderCalcAvances();
  else if (id === 'calcs')  renderCalcSuppl();
  else if (id === 'conv')   renderConv();
  else if (id === 'ouv')    renderOuvrages();
  else if (id === 'anc-home') renderANCHome();
  else if (id === 'anc')    renderANC();
  else if (id === 'nc')     renderNC();
  else if (id === 'aides')  renderAides();
  else if (id === 'spanc')  renderSPANC();
  else if (id === 'ep')     renderEP();
  else if (id === 'riv')    renderRiv();
  else if (id === 'pap')    renderPassesPoissons();
  else if (id === 'gloss')  renderGloss();
  else if (id === 'cours')  renderCours();
  else if (id === 'form')   renderFormations();
  else if (id === 'regl')        renderRegl();
  else if (id === 'regl-ep')    renderRegl('ep');
  else if (id === 'regl-anc')   renderRegl('anc');
  else if (id === 'regl-ac')    renderRegl('ac');
  else if (id === 'regl-riv')   renderRegl('milieux');
  else if (id === 'outils-anc') renderOutilsTerrain('anc');
  else if (id === 'outils-ac')  renderOutilsTerrain('ac');
  else if (id === 'outils-ep')  renderOutilsTerrain('ep');
  else if (id === 'outils-riv') renderOutilsTerrain('riv');
  else if (id === 'outils')     renderOutilsHome();
  else if (id === 'dossiers')    renderDossiersHub();
  else if (id === 'dossiers-cr') renderCRReunion();
  else if (id === 'mat')      renderMatHome();
  else if (id === 'mat-aep')  renderMatAEP();
  else if (id === 'mat-ac')   renderMatAC();
  else if (id === 'mat-anc')  renderMatANC();
  else if (id === 'calc-ac')  renderCalc('ac');
  else if (id === 'calc-anc') renderCalc('anc');
  else if (id === 'calc-ep')  renderCalc('ep');
  else if (id === 'calc-riv') renderCalc('riv');
  else if (id === 'design') renderDesignSystem();
  else renderModuleSimple(id);

  // Nav highlight
  var navMap = {
    refmat:'nav-gloss', gloss:'nav-gloss',
    qcm:'nav-anc',
    ac:'nav-ac', calc:'nav-ac', calca:'nav-ac', calcs:'nav-ac', conv:'nav-ac', ouv:'nav-ac',
    'calc-ac':'nav-ac',
    'anc-home':'nav-anc', anc:'nav-anc', nc:'nav-anc', aides:'nav-anc', spanc:'nav-anc', 'outils-anc':'nav-anc', 'mat-anc':'nav-anc', 'calc-anc':'nav-anc',
    'outils-ac':'nav-ac', 'outils-ep':'nav-ep', 'outils-riv':'nav-riv', outils:'nav-anc',
    ep:'nav-ep', 'calc-ep':'nav-ep',
    riv:'nav-riv', pap:'nav-riv', 'calc-riv':'nav-riv',
    cours:'nav-gloss', form:'nav-gloss', regl:'nav-gloss',
    mat:'nav-gloss', 'mat-ac':'nav-ac', 'mat-aep':'nav-ep', 'mat-anc':'nav-anc',
    dossiers:'nav-gloss', 'dossiers-cr':'nav-gloss'
  };
  setNav(navMap[id] || '');
}

function setNav(id) {
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  if(id){ var _ne=document.getElementById(id); if(_ne) _ne.classList.add('active'); }
}

function goHome() { currentModule=null; renderHome(); }

/* ═══════════════════════════════════════════════════
   BOUTON RETOUR GÉNÉRIQUE (toutes pages)
   Intercepte chaque écriture dans #main-content pour
   garder un historique, sans modifier les fonctions
   render* existantes une par une.
═══════════════════════════════════════════════════ */
(function() {
  var _pageStack = [];
  var _restoring = false;

  function _initBackHistory() {
    var el = document.getElementById('main-content');
    if (!el || el.__backHistoryInit) return;
    el.__backHistoryInit = true;

    var proto = Object.getPrototypeOf(el);
    var desc = Object.getOwnPropertyDescriptor(proto, 'innerHTML')
      || Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');

    Object.defineProperty(el, 'innerHTML', {
      get: function() { return desc.get.call(this); },
      set: function(html) {
        if (!_restoring) {
          var prevHtml = desc.get.call(this);
          if (prevHtml && prevHtml.trim()) {
            var titleEl = document.getElementById('top-title');
            _pageStack.push({
              html: prevHtml,
              scrollTop: this.scrollTop,
              title: titleEl ? titleEl.textContent : ''
            });
            if (_pageStack.length > 30) _pageStack.shift();
          }
        }
        desc.set.call(this, html);
        _updateBackBtn();
      },
      configurable: true
    });
  }

  function _updateBackBtn() {
    var btn = document.getElementById('btn-page-back');
    if (btn) btn.style.display = _pageStack.length ? 'flex' : 'none';
  }

  window.goBackPage = function() {
    if (!_pageStack.length) return;
    var prev = _pageStack.pop();
    var el = document.getElementById('main-content');
    _restoring = true;
    el.innerHTML = prev.html;
    _restoring = false;
    el.scrollTop = prev.scrollTop;
    var titleEl = document.getElementById('top-title');
    if (titleEl) titleEl.textContent = prev.title;
    _updateBackBtn();
  };

  /* Le clic sur Accueil / Menu vide l'historique (nouveau point de départ) */
  var _origGoHome = window.goHome;
  window.goHome = function() {
    _pageStack = [];
    _updateBackBtn();
    _origGoHome();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _initBackHistory);
  } else {
    _initBackHistory();
  }
})();

/* ─── RENDER CALC ─── */
/* ─── HELPERS ONGLETS — tabs dans #tab-bar (hors main-content) ─── */
function loadModuleTabs(labels, onclickFn) {
  var bar = document.getElementById('tab-bar');
  if (!bar) return;
  bar.style.display = 'flex';
  bar.innerHTML = labels.map(function(lbl, i) {
    return '<button class="tab-pill' + (i===0?' active':'') + '" id="module-tab-' + i + '" onclick="' + onclickFn + '(' + i + ')">' + lbl + '</button>';
  }).join('');
}

function setTabActive(group, idx) {
  var bar = document.getElementById('tab-bar');
  if (!bar) return;
  var btns = bar.querySelectorAll('.tab-pill');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.toggle('active', i === idx);
  }
}

const CALC_TAB_LBLS = ['Surface épandage','Fosse toutes eaux','Débit Manning','Méthode rationnelle','Charges polluantes','Pression AEP'];

/* ═══════════════════════════════════════════════════
   BOUTON COPIER + PARTAGER SUR LES RESULT-BOX
═══════════════════════════════════════════════════ */
function _injectCopyBtns() {
  document.querySelectorAll('.result-box.show').forEach(function(box) {
    if (box.querySelector('.result-copy-btn')) return;
    var val = box.querySelector('.result-value');
    if (!val || !val.textContent.trim()) return;

    var shareBtn = document.createElement('button');
    shareBtn.className = 'result-share-btn';
    shareBtn.title = 'Partager ce calcul';
    shareBtn.textContent = '🔗';
    shareBtn.onclick = function(e) { e.stopPropagation(); shareCurrentCalc(); };
    box.appendChild(shareBtn);

    var copyBtn = document.createElement('button');
    copyBtn.className = 'result-copy-btn';
    copyBtn.title = 'Copier le résultat';
    copyBtn.textContent = '📋';
    copyBtn.onclick = function(e) {
      e.stopPropagation();
      var det = box.querySelector('.result-detail');
      var text = (val ? val.textContent : '') +
                 (det ? '\n' + _htmlToText(det.innerHTML) : '') +
                 '\n— HydroCalc';
      function _confirm() {
        copyBtn.textContent = '✓'; copyBtn.classList.add('copied');
        setTimeout(function() { copyBtn.textContent = '📋'; copyBtn.classList.remove('copied'); }, 1600);
      }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(_confirm).catch(function() {
          _fallbackCopy(text); _confirm();
        });
      } else { _fallbackCopy(text); _confirm(); }
    };
    box.appendChild(copyBtn);
  });
}
function _fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); } catch(e) {}
  document.body.removeChild(ta);
}
setInterval(_injectCopyBtns, 700);

/* ═══════════════════════════════════════════════════
   PARTAGE PAR LIEN (URL HASH)
═══════════════════════════════════════════════════ */
function shareCurrentCalc() {
  var mc = document.getElementById('main-content');
  var inputs = {};
  if (mc) {
    mc.querySelectorAll('input[id], select[id]').forEach(function(el) {
      if (el.id && el.value !== undefined) inputs[el.id] = el.value;
    });
  }
  var module = typeof currentModule !== 'undefined' ? (currentModule || '') : '';
  try {
    var hash = btoa(encodeURIComponent(JSON.stringify({ m: module, i: inputs })));
    var url = window.location.origin + window.location.pathname + '#calc=' + hash;
    function _done() { authToast('Lien copié ✓ — Partagez-le pour pré-remplir les champs'); }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(_done).catch(function() { _fallbackCopy(url); _done(); });
    } else { _fallbackCopy(url); _done(); }
  } catch(e) { authToast('Impossible de générer le lien'); }
}

function _loadSharedCalcFromURL() {
  try {
    var hash = window.location.hash;
    if (!hash || hash.indexOf('#calc=') !== 0) return;
    var data = JSON.parse(decodeURIComponent(atob(hash.slice(6))));
    if (!data) return;
    history.replaceState(null, '', window.location.pathname);
    var doLoad = function() {
      if (data.i) {
        Object.keys(data.i).forEach(function(id) {
          var el = document.getElementById(id);
          if (el) el.value = data.i[id];
        });
      }
      authToast('Calcul partagé chargé ✓');
    };
    if (data.m) { setTimeout(function() { showModule(data.m); setTimeout(doLoad, 350); }, 900); }
  } catch(e) {}
}

/* ═══════════════════════════════════════════════════
   RECHERCHE GLOBALE
═══════════════════════════════════════════════════ */
var _searchIndex = null;

function _buildSearchIndex() {
  var idx = [];
  if (typeof TERMES_DB !== 'undefined') {
    TERMES_DB.forEach(function(item) {
      idx.push({ title: item.t || item.terme || '', body: item.d || item.def || '', section: 'glossaire', label: '📖 Glossaire', color: 'var(--c-ref)', action: function() { showModule('gloss'); } });
    });
  }
  if (typeof FORMULES_DB !== 'undefined') {
    FORMULES_DB.forEach(function(item) {
      idx.push({ title: item.nom || item.t || '', body: (item.expr || '') + ' ' + (item.ref || ''), section: 'formules', label: '🔢 Formules', color: 'var(--c-mat)', action: function() { showModule('gloss'); } });
    });
  }
  if (typeof ACROS_DB !== 'undefined') {
    ACROS_DB.forEach(function(item) {
      idx.push({ title: item.a || '', body: item.d || '', section: 'acronymes', label: '🔤 Acronymes', color: 'var(--c-ref)', action: function() { showModule('gloss'); } });
    });
  }
  if (typeof REGL_CATALOGUE !== 'undefined') {
    Object.keys(REGL_CATALOGUE).forEach(function(key) {
      var r = REGL_CATALOGUE[key];
      idx.push({ title: r.name || '', body: (r.detail || '') + ' ' + (r.ref || ''), section: 'reglementation', label: '📋 Réglementation', color: 'var(--c-regl)', action: function() { showModule('regl'); } });
    });
  }
  MODULES_META.forEach(function(m) {
    idx.push({ title: m.name, body: m.sub + ' ' + m.tags.join(' '), section: 'modules', label: '📦 Module', color: m.color, action: (function(id) { return function() { showModule(id); }; })(m.id) });
  });
  if (typeof COURS_DATA !== 'undefined') {
    Object.keys(COURS_DATA).forEach(function(fId) {
      var f = COURS_DATA[fId];
      if (!f) return;
      var annees = f.annees || (f.chapitres ? [{ matieres: [{ chapitres: f.chapitres }] }] : []);
      annees.forEach(function(an) {
        (an.matieres || []).forEach(function(mat) {
          (mat.chapitres || []).forEach(function(chap) {
            if (chap.titre) idx.push({ title: chap.titre, body: (chap.desc || '') + ' ' + (mat.nom || ''), section: 'cours', label: '🎓 ' + (f.nom || 'Cours'), color: 'var(--c-form)', action: function() { showModule('cours'); } });
            if (chap.flashcards) chap.flashcards.slice(0, 20).forEach(function(fc) {
              idx.push({ title: fc.q || '', body: fc.a || '', section: 'cours', label: '🎓 Flashcards', color: 'var(--c-form)', action: function() { showModule('cours'); } });
            });
          });
        });
      });
    });
  }
  var formulas = typeof getSavedFormulas === 'function' ? getSavedFormulas() : [];
  formulas.forEach(function(f) {
    idx.push({ title: f.nom, body: f.expr + ' ' + (f.result || ''), section: 'mes-formules', label: '🏛️ Mes formules', color: 'var(--c-mat)', action: function() { showModule('gloss'); } });
  });
  _searchIndex = idx;
}

function openSearch() {
  _searchIndex = null;
  _buildSearchIndex();
  var overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  setTimeout(function() {
    var inp = document.getElementById('search-input');
    if (inp) { inp.value = ''; inp.focus(); }
    var r = document.getElementById('search-results');
    if (r) r.innerHTML = '<div class="search-empty">Commencez à taper pour rechercher…</div>';
  }, 60);
}

function closeSearch() {
  var overlay = document.getElementById('search-overlay');
  if (overlay) overlay.classList.remove('open');
}

function _highlight(text, q) {
  if (!q || !text) return text || '';
  var escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return ('' + text).replace(new RegExp('(' + escaped + ')', 'gi'), '<mark>$1</mark>');
}

function _doSearch(q) {
  var container = document.getElementById('search-results');
  if (!container) return;
  if (!q || q.trim().length < 2) {
    container.innerHTML = '<div class="search-empty">Commencez à taper pour rechercher…</div>';
    return;
  }
  if (!_searchIndex) _buildSearchIndex();
  var ql = q.toLowerCase().trim();
  var results = _searchIndex.filter(function(item) {
    return ((item.title || '') + ' ' + (item.body || '')).toLowerCase().indexOf(ql) !== -1;
  });
  if (!results.length) {
    container.innerHTML = '<div class="search-empty">Aucun résultat pour "<strong>' + _escHtml(q) + '</strong>"</div>';
    return;
  }
  var grouped = {};
  results.slice(0, 60).forEach(function(r) {
    if (!grouped[r.section]) grouped[r.section] = { label: r.label, color: r.color, items: [] };
    grouped[r.section].items.push(r);
  });
  var html = '';
  Object.keys(grouped).forEach(function(sec) {
    var g = grouped[sec];
    html += '<div class="search-section-title">' + g.label + ' — ' + g.items.length + ' résultat' + (g.items.length > 1 ? 's' : '') + '</div>';
    g.items.slice(0, 8).forEach(function(item, i) {
      var absIdx = _searchIndex.indexOf(item);
      var snippet = (item.body || '').substring(0, 110);
      html += '<div class="search-item" style="border-left-color:' + g.color + '" onclick="_searchItemClick(' + absIdx + ')">' +
        '<div class="search-item-title">' + _highlight(_escHtml(item.title), q) + '</div>' +
        (snippet ? '<div class="search-item-sub">' + _highlight(_escHtml(snippet), q) + '…</div>' : '') +
        '</div>';
    });
  });
  container.innerHTML = html;
}

function _escHtml(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function _searchItemClick(idx) {
  if (!_searchIndex || !_searchIndex[idx]) return;
  closeSearch();
  setTimeout(function() { _searchIndex[idx].action(); }, 200);
}

/* ═══════════════════════════════════════════════════
   HELPER SETTINGS
═══════════════════════════════════════════════════ */
function _getSettings() {
  return DataStore.settings.get();
}
function _isPratique() { return _getSettings().units === 'pratique'; }
function _fmtDebit(ls) {
  if (_isPratique()) return (ls * 3.6).toFixed(2) + ' m³/h';
  return (ls / 1000).toFixed(4) + ' m³/s';
}

