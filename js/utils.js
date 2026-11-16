
/* ─── HELPER COMPAT (remplace ?. pour les anciens Android) ─── */
function getV(id){ var e=document.getElementById(id); return e?e.value:''; }
function getEl(id){ return document.getElementById(id)||null; }

/* ─── BREADCRUMB (no-op — pas d'élément UI dédié) ─── */
function setBreadcrumb() {}

/* ─── FEATURE FLAGS — passer à true pour réactiver ─── */
var FEATURES = {
  messagerie: false,
  forum: false
};

function _showComingSoonToast() {
  var t = document.getElementById('hc-coming-soon-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'hc-coming-soon-toast';
    t.setAttribute('role', 'status');
    t.setAttribute('aria-live', 'polite');
    t.textContent = '🛠️ Outil en cours de développement — prochainement disponible !';
    document.body.appendChild(t);
  }
  t.classList.add('visible');
  clearTimeout(t._hcTimer);
  t._hcTimer = setTimeout(function() { t.classList.remove('visible'); }, 3000);
}

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

/* ═══ DESKTOP NAV ═══ */
function renderDesktopNav() {
  var el = document.getElementById('hc-desk-sidebar');
  if (!el) return;

  var user = (typeof AUTH !== 'undefined') ? AUTH.user : null;
  var cur  = currentModule;

  var navItems = [
    { id:'home',       ico:'🏠', label:'Accueil',          action:'goHome()' },
    { id:'calc-hub',   ico:'🔢', label:'Calculateurs',      action:"showModule('calc-hub')" },
    { id:'cours',      ico:'🎓', label:'Cours',             action:"showModule('cours')" },
    { id:'qcm',        ico:'✅', label:'QCM',               action:"showModule('qcm')" },
    { id:'refmat',     ico:'🔩', label:'Références',        action:"showModule('refmat')" },
    { id:'regl',       ico:'📋', label:'Réglementation',    action:"showModule('regl')" },
  ];
  var communItems = [
    { id:'messagerie', ico:'💬', label:'Messagerie',        action:"showModule('messagerie')" },
    { id:'forum',      ico:'🗣️', label:'Forum',             action:"showModule('forum')" },
  ];
  var myItems = [
    { id:'dossiers',   ico:'📁', label:'Mes dossiers',      action:"showModule('dossiers')" },
    { id:'stats',      ico:'📊', label:'Mon parcours',      action:"showModule('stats')" },
  ];

  function _navBtn(item) {
    var isActive = (!cur && item.id === 'home') || (cur === item.id);
    return '<button class="hc-desk-nav-item' + (isActive ? ' active' : '') + '" onclick="closeNavDrawer();' + item.action + '">'
      + '<span class="hc-desk-nav-ico">' + item.ico + '</span>'
      + '<span class="hc-desk-nav-label">' + item.label + '</span>'
      + '</button>';
  }

  var initials = '?', name = '', email = '';
  if (user) {
    name  = user.name || user.email.split('@')[0];
    email = user.email;
    initials = name.slice(0,2).toUpperCase();
  }

  var html = '<div class="hc-desk-logo">'
    + '<img src="./images/logo-light.png" alt="HydroCalc" onerror="this.style.display=\'none\'">'
    + '<div class="hc-desk-logo-text">'
      + '<div class="hc-desk-logo-name">HydroCalc</div>'
      + '<div class="hc-desk-logo-sub">Application hydraulique</div>'
    + '</div>'
    + '<button class="hc-desk-sidebar-close" onclick="closeNavDrawer()" title="Fermer">✕</button>'
  + '</div>';

  navItems.forEach(function(it) { html += _navBtn(it); });

  if (user) {
    html += '<div class="hc-desk-nav-section">Communauté</div>';
    communItems.forEach(function(it) {
      var disabled = (it.id === 'messagerie' && !FEATURES.messagerie) || (it.id === 'forum' && !FEATURES.forum);
      if (disabled) {
        html += '<button class="hc-desk-nav-item hc-feat-disabled" onclick="_showComingSoonToast()" aria-label="' + it.label + ' — prochainement disponible">'
          + '<span class="hc-desk-nav-ico">' + it.ico + '</span>'
          + '<span class="hc-desk-nav-label">' + it.label + ' <span class="hc-badge-soon">Bientôt</span></span>'
          + '</button>';
      } else {
        html += _navBtn(it);
      }
    });
    html += '<div class="hc-desk-nav-section">Mon espace</div>';
    myItems.forEach(function(it) { html += _navBtn(it); });
  }

  html += '<div style="flex:1"></div>';

  if (user) {
    var planKey   = user.plan || 'free';
    var planColor = { free:'#607D8B', pro:'#1565C0', etab:'#6A1B9A', admin:'#B71C1C' }[planKey] || '#607D8B';
    var planLabel = { free:'Gratuit', pro:'Pro', etab:'Établissement', admin:'Admin' }[planKey] || 'Gratuit';
    html += '<div class="hc-desk-user-footer" onclick="closeNavDrawer();openProfile()">'
      + '<div class="hc-desk-user-avatar">' + initials + '</div>'
      + '<div class="hc-desk-user-info">'
        + '<div class="hc-desk-user-name">' + _escHtml(name) + '</div>'
        + '<div class="hc-desk-user-email">' + _escHtml(email) + '</div>'
      + '</div>'
      + '<span style="font-size:11px;font-weight:700;color:#fff;padding:2px 7px;border-radius:20px;background:' + planColor + ';flex-shrink:0">' + planLabel + '</span>'
      + '</div>';
  } else {
    html += '<button onclick="closeNavDrawer();openProfile()" style="margin:12px;padding:9px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-sm);font-family:var(--f-body);font-size:12px;font-weight:700;cursor:pointer">Se connecter</button>';
  }

  el.innerHTML = html;

  /* Mettre à jour l'avatar dans le topbar */
  var userBtn = document.getElementById('hc-desk-user-btn');
  if (userBtn) userBtn.textContent = user ? initials : '?';
}

/* ═══ RENDER HOME ═══ */
function renderHome() {
  setNav('');
  document.getElementById('tab-bar').style.display = 'none';
  document.getElementById('top-title').textContent = 'HydroCalc';

  renderDesktopNav();

  var user  = (typeof AUTH !== 'undefined') ? AUTH.user : null;
  var email = user ? user.email : null;
  var act   = (email && typeof DataStore !== 'undefined') ? DataStore.activity.updateStreak(email) : null;

  var deskHtml = _buildDesktopHome(user, act);
  document.getElementById('main-content').innerHTML =
    '<div class="hc-home-desk">' + deskHtml + '</div>';
  document.getElementById('main-content').scrollTop = 0;
}

function _buildDesktopHome(user, act) {
  var tools = [
    { ico:'🏡', name:'Assainissement non collectif', sub:'Ouvrages · Filières · Conformité · Réhab.', action:"showModule('fiches-anc')" },
    { ico:'🔵', name:'Assainissement collectif',     sub:'Réseaux EU · EP · Calculs · Terrain',      action:"showModule('ac')" },
    { ico:'💧', name:'Eau potable',                  sub:'AEP · Chloration · Pression · Qualité',    action:"showModule('ep')" },
    { ico:'🌿', name:'Milieu naturel',               sub:'Hydraulique · Rivières · Environnement',   action:"showModule('riv')" },
  ];
  var learns = [
    { ico:'🎓', name:'Cours',         sub:'BTS GEMEAU · BUT · Master\nFiches de révision', color:'var(--c-form)', colorl:'var(--c-form-l)', action:"showModule('cours')" },
    { ico:'✅', name:'QCM',           sub:'Entraînement · 36 thèmes\nUE1 à UE6',           color:'var(--c-anc)',  colorl:'var(--c-anc-l)',  action:"showModule('qcm')" },
    { ico:'📋', name:'Réglementation',sub:'Arrêtés · DCE\nPolice de l\'eau · REUT',        color:'var(--c-regl)', colorl:'var(--c-regl-l)', action:"showModule('regl')" },
    { ico:'🔩', name:'Références',    sub:'Glossaire · Formules\nMatériaux · Équipements', color:'var(--c-mat)',  colorl:'var(--c-mat-l)',  action:"showModule('refmat')" },
  ];

  /* Hero */
  var heroName    = user ? _escHtml(user.name || user.email.split('@')[0]) : 'Bienvenue';
  var heroSub     = user ? 'Votre espace pour calculer, apprendre et échanger.' : 'Application hydraulique professionnelle';
  var streak      = (act && act.streak) ? act.streak : 0;
  var planKey     = user ? (user.plan || 'free') : null;
  var planLabel   = planKey ? ({ free:'Gratuit', pro:'Pro', etab:'Établissement', admin:'Admin' }[planKey] || 'Gratuit') : null;
  var planColor   = planKey ? ({ free:'#607D8B', pro:'#1565C0', etab:'#6A1B9A', admin:'#B71C1C' }[planKey] || '#607D8B') : '#607D8B';

  var resumeBtn = '';
  if (act && act.lastModule && act.lastModuleName) {
    resumeBtn = '<button class="hc-hero-resume-btn" onclick="showModule(\'' + _escHtml(act.lastModule) + '\')">'
      + '▶ Reprendre le cours <strong>' + _escHtml(act.lastModuleName.split('—')[0].trim().slice(0, 28)) + '</strong>'
      + '</button>';
  }

  var heroCard = user
    ? '<div class="hc-hero-card">'
        + '<div class="hc-hero-card-label">Mon activité</div>'
        + '<div class="hc-hero-card-stats">'
          + (streak > 0 ? '<div class="hc-hero-stat"><div class="hc-hero-stat-val">🔥 ' + streak + '</div><div class="hc-hero-stat-lbl">jour' + (streak > 1 ? 's' : '') + ' de suite</div></div>' : '')
          + '<div class="hc-hero-stat"><div class="hc-hero-stat-val">14</div><div class="hc-hero-stat-lbl">modules</div></div>'
          + '<div class="hc-hero-stat"><div class="hc-hero-stat-val">60+</div><div class="hc-hero-stat-lbl">calculs</div></div>'
        + '</div>'
        + (planLabel ? '<div class="hc-hero-plan-badge" style="background:' + planColor + '" onclick="showModule(\'stats\')">' + planLabel + '</div>' : '')
      + '</div>'
    : '<div class="hc-hero-card">'
        + '<div class="hc-hero-card-label">Application</div>'
        + '<div class="hc-hero-card-stats">'
          + '<div class="hc-hero-stat"><div class="hc-hero-stat-val">14</div><div class="hc-hero-stat-lbl">modules</div></div>'
          + '<div class="hc-hero-stat"><div class="hc-hero-stat-val">60+</div><div class="hc-hero-stat-lbl">calculs</div></div>'
          + '<div class="hc-hero-stat"><div class="hc-hero-stat-val">720</div><div class="hc-hero-stat-lbl">questions</div></div>'
        + '</div>'
      + '</div>';

  /* Grille outils */
  var toolsHtml = tools.map(function(t) {
    return '<div class="hc-tool-card" onclick="' + t.action + '">'
      + '<div class="hc-tool-card-ico">' + t.ico + '</div>'
      + '<div class="hc-tool-card-name">' + t.name + '</div>'
      + '<div class="hc-tool-card-sub">' + t.sub + '</div>'
      + '<div class="hc-tool-card-arrow">›</div>'
    + '</div>';
  }).join('');

  /* Grille apprendre */
  var learnHtml = learns.map(function(l) {
    return '<div class="hc-learn-card" onclick="' + l.action + '">'
      + '<div class="hc-learn-card-ico" style="background:' + l.colorl + '">' + l.ico + '</div>'
      + '<div>'
        + '<div class="hc-learn-card-name">' + l.name + '</div>'
        + '<div class="hc-learn-card-sub">' + l.sub.replace(/\n/g, '<br>') + '</div>'
      + '</div>'
    + '</div>';
  }).join('');

  /* Panneau droit */
  var rightHtml = '<div class="hc-right-section-title">Mes dossiers</div>'
    + '<div class="hc-right-card" onclick="showModule(\'dossiers\')">'
      + '<div class="hc-right-card-head"><span class="hc-right-card-ico">📁</span><span class="hc-right-card-name">Mes dossiers</span></div>'
      + '<div class="hc-right-card-sub">Comptes rendus, rapports, documents</div>'
    + '</div>';

  if (user) {
    rightHtml += '<div class="hc-right-section-title">Communauté</div>'
      + '<button class="hc-right-link' + (!FEATURES.messagerie ? ' hc-feat-disabled' : '') + '" onclick="' + (!FEATURES.messagerie ? '_showComingSoonToast()' : "showModule('messagerie')") + '" aria-label="Messagerie' + (!FEATURES.messagerie ? ' — prochainement disponible' : '') + '">'
        + '<span class="hc-right-link-ico">💬</span><span class="hc-right-link-name">Messagerie' + (!FEATURES.messagerie ? ' <span class="hc-badge-soon">Bientôt</span>' : '') + '</span><span class="hc-right-link-arr">›</span>'
      + '</button>'
      + '<button class="hc-right-link' + (!FEATURES.forum ? ' hc-feat-disabled' : '') + '" onclick="' + (!FEATURES.forum ? '_showComingSoonToast()' : "showModule('forum')") + '" aria-label="Forum' + (!FEATURES.forum ? ' — prochainement disponible' : '') + '">'
        + '<span class="hc-right-link-ico">🗣️</span><span class="hc-right-link-name">Forum' + (!FEATURES.forum ? ' <span class="hc-badge-soon">Bientôt</span>' : '') + '</span><span class="hc-right-link-arr">›</span>'
      + '</button>'
      + '<div class="hc-right-section-title">Mon parcours</div>'
      + '<div class="hc-right-card" onclick="showModule(\'stats\')">'
        + '<div class="hc-right-card-head"><span class="hc-right-card-ico">🌱</span><span class="hc-right-card-name">Mon parcours</span></div>'
        + '<div class="hc-right-card-sub">Retrouvez vos cours et vos entraînements</div>'
      + '</div>';
  }

  /* Section communauté + mon espace — visible sous 1280px quand panneau droit caché */
  var extraMob = '';
  if (user) {
    var extraItems = [
      { ico:'💬', name:'Messagerie',    sub:'Messages privés · Partage de fichiers', action: FEATURES.messagerie ? "showModule('messagerie')" : '_showComingSoonToast()', disabled: !FEATURES.messagerie },
      { ico:'🗣️', name:'Forum',         sub:'Questions · Réponses · Discussions',    action: FEATURES.forum ? "showModule('forum')" : '_showComingSoonToast()', disabled: !FEATURES.forum },
      { ico:'📁', name:'Mes dossiers',  sub:'Comptes rendus · Rapports · Documents', action:"showModule('dossiers')", disabled: false },
      { ico:'📚', name:'Mes cours perso', sub:'Créer et partager vos cours',         action:"showModule('cours-perso')", disabled: false },
    ];
    extraMob = '<div class="hc-home-extra-mob">'
      + '<h2 class="hc-home-section-title">Communauté &amp; Mon espace</h2>'
      + '<p class="hc-home-section-sub">Accédez aux fonctionnalités collaboratives et à votre espace personnel.</p>'
      + '<div class="hc-learn-grid">'
      + extraItems.map(function(it) {
          return '<div class="hc-learn-card' + (it.disabled ? ' hc-feat-disabled' : '') + '" onclick="' + it.action + '"' + (it.disabled ? ' tabindex="0" role="button" aria-label="' + it.name + ' — prochainement disponible" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){' + it.action + '}"' : '') + '>'
            + '<div class="hc-learn-card-ico" style="background:var(--c-surface-2)">' + it.ico + '</div>'
            + '<div><div class="hc-learn-card-name">' + it.name + (it.disabled ? ' <span class="hc-badge-soon">Bientôt</span>' : '') + '</div>'
            + '<div class="hc-learn-card-sub">' + it.sub + '</div></div>'
            + '</div>';
        }).join('')
      + '</div></div>';
  }

  return '<div class="hc-hero">'
    + '<div class="hc-hero-left">'
      + '<div class="hc-hero-greeting">Bonjour,</div>'
      + '<div class="hc-hero-name">' + heroName + '</div>'
      + '<div class="hc-hero-sub">' + heroSub + '</div>'
      + resumeBtn
    + '</div>'
    + '<div class="hc-hero-right">' + heroCard + '</div>'
  + '</div>'
  + '<div class="hc-home-body">'
    + '<div class="hc-home-main">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">'
        + '<h2 class="hc-home-section-title">Thèmes</h2>'
        + '<button class="hc-new-calc-btn" onclick="showModule(\'calc-hub\')">+ Nouveau calcul</button>'
      + '</div>'
      + '<p class="hc-home-section-sub">Accédez rapidement à votre domaine de travail.</p>'
      + '<div class="hc-tools-grid">' + toolsHtml + '</div>'
      + '<h2 class="hc-home-section-title">Apprendre et explorer</h2>'
      + '<p class="hc-home-section-sub">Développez vos compétences en hydraulique grâce à nos ressources pédagogiques.</p>'
      + '<div class="hc-learn-grid">' + learnHtml + '</div>'
      + extraMob
    + '</div>'
    + '<div class="hc-home-right">' + rightHtml + '</div>'
  + '</div>';
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
  if ((id === 'messagerie' && !FEATURES.messagerie) || (id === 'forum' && !FEATURES.forum)) {
    _showComingSoonToast();
    return;
  }
  currentModule = id;
  if (typeof renderDesktopNav === 'function') renderDesktopNav();
  scrollToTop();

  if (typeof AUTH !== 'undefined' && AUTH.user && typeof DataStore !== 'undefined') {
    var titleEl = document.getElementById('top-title');
    var mName = (titleEl ? titleEl.textContent : '') || id;
    setTimeout(function() {
      var t2 = document.getElementById('top-title');
      DataStore.activity.setLastModule(AUTH.user.email, id, t2 ? t2.textContent : mName);
    }, 300);
  }

  // Titre top-bar
  var TITRES = {
    messagerie:'Messagerie',
    forum:'Forum',
    dossiers:'Mes dossiers',
    'cours-perso':'Mes cours',
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
    'calca-ac':'Calculateurs avancés',
    'calca-ep':'Calculateurs avancés',
    'calca-riv':'Calculateurs avancés',
    calcs:'Calculateurs complémentaires',
    conv:'Convertisseur d\'unités',
    ouv:'Ouvrages AC & EP',
    spanc:'SPANC — Départements',
    aides:'Aides financières ANC',
    nc:'Non conformes',
    mat:'Matériaux & Équipements',
    form:'Formations supérieures',
    'anc-trad':          'ANC — Filières traditionnelles',
    'anc-agree':         'ANC — Filières agréées',
    'anc-filieres':      'ANC — Filières',
    'anc-comparateur':   'ANC — Comparateur',
    'anc-pretraitement': 'ANC — Prétraitement',
    'anc-collecte':      'ANC — Collecte',
    'anc-rejet':         'ANC — Rejet',
    'anc-ventilation':   'ANC — Ventilation',
  };
  var titre = TITRES[id];
  if (!titre) {
    var m = MODULES_META.find(function(x){ return x.id === id; });
    if (m) titre = m.name.split('—')[0].trim();
  }
  var titleEl = document.getElementById('top-title');
  if (titleEl && titre) titleEl.textContent = titre;

  // Renderer explicite par module (pas de référence en objet)
  if      (id === 'stats')  renderStats();
  else if (id === 'refmat') renderRefMat();
  else if (id === 'qcm')    renderQCMHub();
  else if (id === 'ac')     renderAC();
  else if (id === 'calc-hub') renderCalcHub();
  else if (id === 'calc')   renderCalc();
  else if (id === 'calc-anc') { renderCalc(); if (typeof switchCalcTab === 'function') switchCalcTab(2); }
  else if (id === 'calca')     renderCalcAvances('');
  else if (id === 'calca-ac')  renderCalcAvances('ac');
  else if (id === 'calca-ep')  renderCalcAvances('ep');
  else if (id === 'calca-riv') renderCalcAvances('riv');
  else if (id === 'calcs')  renderCalcSuppl();
  else if (id === 'conv')   renderConv();
  else if (id === 'ouv')    renderOuvrages();
  else if (id === 'anc-home') renderANCHub();
  else if (id === 'fiches-anc') renderANCHub();
  else if (id === 'anc-trad')  renderANCFilTrad();
  else if (id === 'anc-agree') renderANCFilAgree();
  else if (id.indexOf('fiche-anc-') === 0) renderANCOuvrageDetail(id.slice('fiche-anc-'.length));
  else if (id === 'anc')    renderANC();
  else if (id === 'anc-filieres')      { renderANC(); if (typeof switchANCTab === 'function') switchANCTab(0); }
  else if (id === 'anc-comparateur')   { renderANC(); if (typeof switchANCTab === 'function') switchANCTab(1); }
  else if (id === 'anc-pretraitement') { renderANC(); if (typeof switchANCTab === 'function') switchANCTab(2); }
  else if (id === 'anc-collecte')      { renderANC(); if (typeof switchANCTab === 'function') switchANCTab(3); }
  else if (id === 'anc-rejet')         { renderANC(); if (typeof switchANCTab === 'function') switchANCTab(4); }
  else if (id === 'anc-ventilation')   { renderANC(); if (typeof switchANCTab === 'function') switchANCTab(5); }
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
  else if (id === 'mat')        renderMateriaux();
  else if (id === 'design')     renderDesignSystem();
  else if (id === 'messagerie') renderMessagerie();
  else if (id === 'forum')      renderForum();
  else if (id === 'dossiers')   renderDossiersHub();
  else if (id === 'cours-perso') renderCoursPersoCreer();
  else if (id === 'settings') { if (typeof openSettings === 'function') openSettings(); }
  else renderModuleSimple(id);

  // Nav highlight
  var navMap = {
    refmat:'nav-gloss', gloss:'nav-gloss', mat:'nav-gloss',
    qcm:'nav-anc',
    ac:'nav-ac', calc:'nav-ac', calca:'nav-ac', calcs:'nav-ac', conv:'nav-ac', ouv:'nav-ac',
    'anc-home':'nav-anc', 'fiches-anc':'nav-anc', anc:'nav-anc', nc:'nav-anc', aides:'nav-anc', spanc:'nav-anc', 'outils-anc':'nav-anc',
    'anc-trad':'nav-anc', 'anc-agree':'nav-anc',
    'anc-filieres':'nav-anc', 'anc-comparateur':'nav-anc', 'anc-pretraitement':'nav-anc', 'anc-collecte':'nav-anc', 'anc-rejet':'nav-anc', 'anc-ventilation':'nav-anc',
    'outils-ac':'nav-ac', 'outils-ep':'nav-ep', 'outils-riv':'nav-riv',
    ep:'nav-ep',
    riv:'nav-riv', pap:'nav-riv',
    gloss:'nav-gloss', cours:'nav-gloss', form:'nav-gloss', regl:'nav-gloss', mat:'nav-gloss'
  };
  setNav(navMap[id] || '');
}

function setNav(id) {
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  if(id){ var _ne=document.getElementById(id); if(_ne) _ne.classList.add('active'); }
}

function goHome() { closeNavDrawer(); currentModule=null; renderHome(); }

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

const CALC_TAB_LBLS = ['Débits','AEP','Assainissement','Dimensionnement','Formules'];

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
var _searchDebounceTimer = null;

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
      if (!f || !f.chapitres) return;
      f.chapitres.forEach(function(chap) {
        if (chap.titre) idx.push({ title: chap.titre, body: chap.desc || '', section: 'cours', label: '🎓 Cours', color: 'var(--c-form)', action: function() { showModule('cours'); } });
        if (chap.flashcards) chap.flashcards.slice(0, 30).forEach(function(fc) {
          idx.push({ title: fc.q || '', body: fc.a || '', section: 'cours', label: '🎓 Flashcards', color: 'var(--c-form)', action: function() { showModule('cours'); } });
        });
      });
    });
  }
  if (typeof QCM_BANK !== 'undefined') {
    QCM_BANK.forEach(function(qcm) {
      idx.push({ title: qcm.title, body: qcm.desc + ' ' + qcm.themeName, section: 'qcm', label: '✅ QCM', color: qcm.color || 'var(--c-anc)', action: (function(th){ return function(){ if(typeof renderQCMBankTheme==='function') renderQCMBankTheme(th); }; })(qcm.theme) });
      qcm.questions.forEach(function(q) {
        idx.push({ title: q.q, body: q.expl || '', section: 'qcm', label: '✅ QCM · ' + qcm.themeName, color: qcm.color || 'var(--c-anc)', action: (function(th){ return function(){ if(typeof renderQCMBankTheme==='function') renderQCMBankTheme(th); }; })(qcm.theme) });
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
  if (!_searchIndex) _buildSearchIndex();
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
  clearTimeout(_searchDebounceTimer);
  _searchDebounceTimer = setTimeout(function() { _doSearchNow(q); }, 120);
}

function _doSearchNow(q) {
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


/* ═══════════════════════════════════════════════════════════════
   REMPLACEMENT D'IMAGE GLOBAL — admin + modo
   Table Supabase : course_image_overrides (chapter_key, image_url, uploaded_by)
   Bucket Supabase : course-images
   
   Pattern pour tout nouveau schéma :
     <div data-img-key="module:section:id" data-img-cid="container-id">
       <svg>...</svg>   ← ou n'importe quel contenu visuel
     </div>
   Puis appeler _hcActivateImgBoxes() après innerHTML.
   ═══════════════════════════════════════════════════════════════ */

var _hcImgOverrides = {};

function _hcCanEditImages() {
  if (typeof AUTH === 'undefined' || !AUTH.user) return false;
  var p = AUTH.user.plan || '';
  return p === 'admin' || p === 'modo';
}

async function _hcLoadImgOverrides() {
  if (typeof SupaDB === 'undefined') return;
  try {
    var res = await SupaDB.from('course_image_overrides').select('chapter_key,image_url');
    if (!res.error && res.data) {
      res.data.forEach(function(r) {
        _hcImgOverrides[r.chapter_key] = r.image_url;
        if (typeof _courseImageOverrides !== 'undefined') _courseImageOverrides[r.chapter_key] = r.image_url;
      });
    }
  } catch(e) {}
}

function _hcActivateImgBoxes() {
  document.querySelectorAll('[data-img-key]').forEach(function(el) {
    var key = el.getAttribute('data-img-key');
    var cid = el.getAttribute('data-img-cid');
    if (!key || !cid) return;
    el.id = cid;
    el.removeAttribute('data-img-key');
    el.removeAttribute('data-img-cid');
    var override = _hcImgOverrides[key] || null;
    var tpl = document.createElement('template');
    tpl.id = cid + '-orig';
    tpl.innerHTML = el.innerHTML;
    el.parentNode.insertBefore(tpl, el);
    if (override) {
      var newImg = document.createElement('img');
      newImg.src = override;
      newImg.style.cssText = 'max-width:100%;height:auto;border-radius:var(--r-sm)';
      newImg.alt = 'Schéma';
      el.innerHTML = '';
      el.appendChild(newImg);
    }
    if (_hcCanEditImages()) {
      var btns = document.createElement('div');
      btns.style.cssText = 'display:flex;gap:6px;justify-content:flex-end;margin-top:6px';
      if (override) {
        var rb = document.createElement('button');
        rb.setAttribute('onclick', "_hcRestoreImg('" + key + "','" + cid + "')");
        rb.style.cssText = 'font-size:11px;padding:3px 9px;background:var(--c-danger-l,#FFF0F0);border:1px solid var(--c-danger,#E53E3E);border-radius:var(--r-sm);cursor:pointer;color:var(--c-danger,#E53E3E);font-weight:600';
        rb.textContent = '↩ Restaurer';
        btns.appendChild(rb);
      }
      var replBtn = document.createElement('button');
      replBtn.setAttribute('onclick', "_hcReplaceImg('" + key + "','" + cid + "')");
      replBtn.style.cssText = 'font-size:11px;padding:3px 9px;background:var(--c-primary-l,#EBF4FF);border:1px solid var(--c-primary,#2B6CB0);border-radius:var(--r-sm);cursor:pointer;color:var(--c-primary,#2B6CB0);font-weight:600';
      replBtn.textContent = '📷 Remplacer l\'image';
      btns.appendChild(replBtn);
      el.appendChild(btns);
    }
  });
}

async function _hcReplaceImg(imageKey, containerId) {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/png,image/jpeg,image/webp,image/gif,image/svg+xml';
  input.onchange = async function() {
    var file = input.files[0]; if (!file) return;
    if (file.size > 8*1024*1024) { alert('Image trop lourde (max 8 Mo)'); return; }
    var box = document.getElementById(containerId);
    var btn = box ? box.querySelector('[onclick*="_hcReplaceImg"]') : null;
    if (btn) { btn.disabled = true; btn.textContent = '⏳…'; }
    try {
      var ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
      var safePath = 'hc-override/' + imageKey.replace(/[^a-zA-Z0-9]/g,'_') + '_' + Date.now() + '.' + ext;
      var upRes = await SupaDB.storage.from('course-images').upload(safePath, file, { upsert: true, contentType: file.type });
      if (upRes.error) throw upRes.error;
      var url = SupaDB.storage.from('course-images').getPublicUrl(safePath).data.publicUrl;
      var uid = (typeof AUTH !== 'undefined' && AUTH.user) ? AUTH.user.id : null;
      var dbRes = await SupaDB.from('course_image_overrides').upsert(
        { chapter_key: imageKey, image_url: url, uploaded_by: uid },
        { onConflict: 'chapter_key' }
      );
      if (dbRes.error) throw dbRes.error;
      _hcImgOverrides[imageKey] = url;
      if (typeof _courseImageOverrides !== 'undefined') _courseImageOverrides[imageKey] = url;
      if (box) {
        var newImg = document.createElement('img');
        newImg.src = url; newImg.alt = 'Schéma';
        newImg.style.cssText = 'max-width:100%;height:auto;border-radius:var(--r-sm)';
        var old = box.querySelector('svg') || box.querySelector('img') || box.querySelector('div:not([style*="justify"])');
        if (old) old.replaceWith(newImg); else box.insertBefore(newImg, box.firstChild);
        var btnRow = box.querySelector('[style*="justify-content"]');
        if (btnRow && !btnRow.querySelector('[onclick*="_hcRestoreImg"]')) {
          var rb = document.createElement('button');
          rb.setAttribute('onclick', "_hcRestoreImg('" + imageKey + "','" + containerId + "')");
          rb.style.cssText = 'font-size:11px;padding:3px 9px;background:var(--c-danger-l,#FFF0F0);border:1px solid var(--c-danger,#E53E3E);border-radius:var(--r-sm);cursor:pointer;color:var(--c-danger,#E53E3E);font-weight:600';
          rb.textContent = '↩ Restaurer';
          btnRow.insertBefore(rb, btnRow.firstChild);
        }
      }
      alert('✅ Image mise à jour !');
    } catch(e) { alert('❌ ' + ((e && e.message) ? e.message : JSON.stringify(e))); }
    if (btn) { btn.disabled = false; btn.textContent = '📷 Remplacer l\'image'; }
  };
  input.click();
}

async function _hcRestoreImg(imageKey, containerId) {
  if (!confirm('Supprimer l\'image personnalisée et restaurer l\'original ?')) return;
  try {
    var delRes = await SupaDB.from('course_image_overrides').delete().eq('chapter_key', imageKey);
    if (delRes.error) throw delRes.error;
    delete _hcImgOverrides[imageKey];
    if (typeof _courseImageOverrides !== 'undefined') delete _courseImageOverrides[imageKey];
    var box = document.getElementById(containerId);
    var origTpl = document.getElementById(containerId + '-orig');
    if (box && origTpl) {
      var temp = document.createElement('div'); temp.innerHTML = origTpl.innerHTML;
      var origEl = temp.firstElementChild;
      var oldImg = box.querySelector('img');
      if (oldImg && origEl) oldImg.replaceWith(origEl);
      else if (origEl) box.insertBefore(origEl, box.firstChild);
      var btnRow = box.querySelector('[style*="justify-content"]');
      if (btnRow) { var rb = btnRow.querySelector('[onclick*="_hcRestoreImg"]'); if (rb) rb.remove(); }
    }
  } catch(e) { alert('❌ ' + ((e && e.message) ? e.message : JSON.stringify(e))); }
}
