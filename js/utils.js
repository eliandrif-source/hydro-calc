
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
  if (plan !== 'free') return true;

  var today = new Date().toISOString().slice(0, 10);
  var raw = _safeStorage.getItem('hc_calc_quota');
  var quota = raw ? JSON.parse(raw) : { date: today, count: 0 };
  if (quota.date !== today) { quota = { date: today, count: 0 }; }

  if (quota.count >= 10) {
    showCalcLimitModal();
    return false;
  }
  quota.count++;
  _safeStorage.setItem('hc_calc_quota', JSON.stringify(quota));
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
  { id:'calc',  ico:'⚡', name:'Calculateurs principaux',   sub:'ANC · AC · EP · Rivières',           color:'var(--c-anc)',  tags:['ANC','AC','EP','Rivières'],    cat:'calculs',    featured:true  },
  { id:'calca', ico:'🧮', name:'Calculateurs avancés',      sub:'Manning · Bélier · NPSH · Shields',  color:'var(--c-ac)',   tags:['Manning','Bélier','NPSH'],     cat:'calculs'  },
  { id:'calcs', ico:'📐', name:'Calculateurs complémentaires', sub:'Chlore · Réservoir · STEU',       color:'var(--c-aides)',tags:['Chlore','Réservoir','STEU'],   cat:'calculs'  },
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
  { id:'mat',   ico:'🔩', name:'Matériaux & Équipements',  sub:'PVC · Fonte · Pompes · SCADA',       color:'var(--c-mat)', tags:['PVC','Fonte','Pompes'],        cat:'reference',  isNew:true  },
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
function renderHome() {
  setNav('');
  document.getElementById('tab-bar').style.display = 'none';
  document.getElementById('top-title').textContent = 'HydroCalc';

  var categories = [
    { id:'ac',    ico:'🔧', name:'Assainissement collectif',     sub:'Réseaux EU/EP · Calculs · Ouvrages',         color:'var(--c-ac)',   colorl:'var(--c-ac-l)'   },
    { id:'anc',   ico:'🏡', name:'Assainissement non collectif', sub:'Filières ANC · SPANC · Aides financières',   color:'var(--c-anc)',  colorl:'var(--c-anc-l)'  },
    { id:'ep',    ico:'💧', name:'Eau potable',                  sub:'Potabilisation · Normes · Réseau AEP',        color:'var(--c-ep)',   colorl:'var(--c-ep-l)'   },
    { id:'riv',   ico:'🌊', name:'Milieu naturel',               sub:'Rivières · Hydrologie · Crues · Nappes',     color:'var(--c-riv)',  colorl:'var(--c-riv-l)'  },
    { id:'gloss', ico:'📖', name:'Formulaire & Glossaire',       sub:'200+ termes · Formules · Acronymes',         color:'var(--c-ref)',  colorl:'var(--c-ref-l)'  },
    { id:'regl',  ico:'📋', name:'Réglementation',               sub:'Arrêtés · DCE · Police de l\'eau · REUT',   color:'var(--c-regl)', colorl:'var(--c-regl-l)' },
    { id:'mat',   ico:'🔩', name:'Référence & Matériaux',        sub:'PVC · Fonte · Pompes · Équipements',         color:'var(--c-mat)',  colorl:'var(--c-mat-l)'  },
  ];

  var html = `
    <div class="home-hero">
      <div class="hh-brand">
        <div class="hh-icon">💧</div>
        <div><div class="hh-name">HydroCalc</div><div class="hh-sub">Application hydraulique professionnelle</div></div>
      </div>
      <div class="hh-stats">
        <div class="hs-item"><div class="hs-val">7</div><div class="hs-lbl">Domaines</div></div>
        <div class="hs-item"><div class="hs-val">60+</div><div class="hs-lbl">Calculateurs</div></div>
        <div class="hs-item"><div class="hs-val">720</div><div class="hs-lbl">Questions QCM</div></div>
      </div>
    </div>
    <div class="section-header">Choisissez votre domaine</div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
  `;

  for (var i=0; i<categories.length; i++) {
    var c = categories[i];
    html += `<div class="mod-list-card" style="--cat-color:${c.color}" onclick="showModule('${c.id}')">
      <div class="mlc-icon" style="background:${c.colorl};font-size:22px">${c.ico}</div>
      <div class="mlc-body">
        <div class="mlc-name" style="font-size:var(--t-md)">${c.name}</div>
        <div class="mlc-sub">${c.sub}</div>
      </div>
      <span class="mlc-arrow">›</span>
    </div>`;
  }

  html += `</div>
    <div style="text-align:center;padding:var(--s-4) var(--s-4) var(--s-2);font-size:9px;color:var(--c-text-4);letter-spacing:.03em;line-height:1.7;font-style:italic">
      Application hydraulique professionnelle · BTS GEMEAU · Techniciens eau
    </div>
    <div class="pb-nav"></div>`;

  document.getElementById('main-content').innerHTML = html;
  document.getElementById('main-content').scrollTop = 0;
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
  var m = MODULES_META.find(function(x){ return x.id === id; });
  if (m) document.getElementById('top-title').textContent = m.name.split('—')[0].trim();

  // Renderer explicite par module (pas de référence en objet)
  if      (id === 'ac')     renderAC();
  else if (id === 'calc')   renderCalc();
  else if (id === 'calca')  renderCalcAvances();
  else if (id === 'calcs')  renderCalcSuppl();
  else if (id === 'conv')   renderConv();
  else if (id === 'ouv')    renderOuvrages();
  else if (id === 'anc')    renderANC();
  else if (id === 'nc')     renderNC();
  else if (id === 'aides')  renderAides();
  else if (id === 'spanc')  renderSPANC();
  else if (id === 'ep')     renderEP();
  else if (id === 'riv')    renderRiv();
  else if (id === 'gloss')  renderGloss();
  else if (id === 'cours')  renderCours();
  else if (id === 'form')   renderFormations();
  else if (id === 'regl')   renderRegl();
  else if (id === 'mat')    renderMateriaux();
  else if (id === 'design') renderDesignSystem();
  else renderModuleSimple(id);

  // Nav highlight
  var navMap = {
    ac:'nav-ac', calc:'nav-ac', calca:'nav-ac', calcs:'nav-ac', conv:'nav-ac', ouv:'nav-ac',
    anc:'nav-anc', nc:'nav-anc', aides:'nav-anc', spanc:'nav-anc',
    ep:'nav-ep',
    riv:'nav-riv',
    gloss:'nav-gloss', cours:'nav-gloss', form:'nav-gloss', regl:'nav-gloss', mat:'nav-gloss'
  };
  setNav(navMap[id] || '');
}

function setNav(id) {
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  if(id){ var _ne=document.getElementById(id); if(_ne) _ne.classList.add('active'); }
}

function goHome() { currentModule=null; renderHome(); }

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

