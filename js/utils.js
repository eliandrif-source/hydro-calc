
/* ─── HELPER COMPAT (remplace ?. pour les anciens Android) ─── */
function getV(id){ var e=document.getElementById(id); return e?e.value:''; }
function getEl(id){ return document.getElementById(id)||null; }

/* ─── STORAGE SÉCURISÉ (fallback mémoire si localStorage bloqué) ─── */
var _memStore = {};
var _safeStorage = {
  getItem: function(k){ try{ return _safeStorage.getItem(k); }catch(e){ return _memStore[k]||null; } },
  setItem: function(k,v){ try{ _safeStorage.setItem(k,v); }catch(e){ _memStore[k]=v; } },
  removeItem: function(k){ try{ _safeStorage.removeItem(k); }catch(e){ delete _memStore[k]; } }
};

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
  setNav('nav-home');
  document.getElementById('tab-bar').style.display = 'none';
  document.getElementById('top-title').textContent = 'HydroCalc';

  const cats = ['calculs','anc','formation','reference'];
  let html = `
    <div class="home-hero">
      <div class="hh-brand">
        <div class="hh-icon">💧</div>
        <div><div class="hh-name">HydroCalc</div><div class="hh-sub">Application hydraulique professionnelle</div></div>
      </div>
      <div class="hh-stats">
        <div class="hs-item"><div class="hs-val">14</div><div class="hs-lbl">Modules</div></div>
        <div class="hs-item"><div class="hs-val">60+</div><div class="hs-lbl">Calculateurs</div></div>
        <div class="hs-item"><div class="hs-val">300+</div><div class="hs-lbl">Fiches</div></div>
      </div>
    </div>

    <div class="search-container">
      <div class="search-bar">
        <span class="search-ico">🔍</span>
        <input type="text" placeholder="Rechercher dans tous les modules…" readonly onclick="this.placeholder='Tapez votre recherche…'" id="global-inp">
      </div>
    </div>

    <div class="recent-section">
      <div class="section-header" style="padding:0 0 8px">🕒 <span style="margin-left:4px">Récemment utilisés</span></div>
      <div class="recent-chips">
        ${['calc','anc','gloss','cours','aides'].map(id=>{
          const m=MODULES_META.find(x=>x.id===id);
          return `<div class="recent-chip" onclick="showModule('${m.id}')" style="--cat-color:${m.color}">${m.ico} ${m.name.split('—')[0].trim()}</div>`;
        }).join('')}
      </div>
    </div>
  `;

  cats.forEach(cat => {
    const mods = MODULES_META.filter(m=>m.category===cat||m.cat===cat);
    if(!mods.length) return;
    const cfg = CATS_CONFIG[cat];
    html += `<div class="section-header" style="color:${cfg.color}">${cfg.lbl}<span class="sh-count">${mods.length}</span></div>
    <div class="mod-grid" style="margin-bottom:16px">`;
    mods.forEach(m=>{
      const tags = m.tags.map(t=>`<span class="mgc-tag">${t}</span>`).join('');
      const featured = m.featured;
      html += `<div class="mod-grid-card${featured?' span2':''}" style="--cat-color:${m.color}" onclick="showModule('${m.id}')">
        ${m.isNew?'<span class="new-badge">NEW</span>':''}
        <span class="mgc-icon">${m.ico}</span>
        <div><div class="mgc-name">${m.name}</div><div class="mgc-sub">${m.sub}</div><div class="mgc-tags">${tags}</div></div>
      </div>`;
    });
    html += '</div>';
  });

  html += `<div style="text-align:center;padding:var(--s-3) var(--s-4) var(--s-2);font-size:9px;color:var(--c-text-4);letter-spacing:.03em;line-height:1.7;font-style:italic">
    Application inspirée de notre grand maître à tous J. M. R.
  </div>`;
  html += '<div class="pb-nav"></div>';
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
  if      (id === 'calc')   renderCalc();
  else if (id === 'calca')  renderCalcAvances();
  else if (id === 'calcs')  renderCalcSuppl();
  else if (id === 'conv')   renderConv();
  else if (id === 'anc')    renderANC();
  else if (id === 'nc')     renderNC();
  else if (id === 'ouv')    renderOuvrages();
  else if (id === 'gloss')  renderGloss();
  else if (id === 'cours')  renderCours();
  else if (id === 'form')   renderFormations();
  else if (id === 'spanc')  renderSPANC();
  else if (id === 'aides')  renderAides();
  else if (id === 'regl')   renderRegl();
  else if (id === 'mat')    renderMateriaux();
  else if (id === 'design') renderDesignSystem();
  else renderModuleSimple(id);

  // Nav highlight
  var navMap = {
    calc:'nav-calc', calca:'nav-calc', calcs:'nav-calc', conv:'nav-calc',
    anc:'nav-anc', nc:'nav-anc', ouv:'nav-anc', aides:'nav-anc', spanc:'nav-anc',
    cours:'nav-ref', form:'nav-ref', regl:'nav-more', gloss:'nav-ref', mat:'nav-ref'
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

