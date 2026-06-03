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

function renderCalcHistory() {
  var arr = getSavedCalcs();
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
  html += '<div class="pb"></div>';
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

let AUTH = { user: null };

const PLANS_HC = {
  gratuit: { name:'Gratuit', icon:'🎯', price:'0 €', color:'var(--c-text-3)', badgeClass:'plan-free-badge' },
  pro:     { name:'Pro',     icon:'⭐', price:'9,90 €/mois', color:'#4A28A0', badgeClass:'plan-pro-badge' },
  expert:  { name:'Expert',  icon:'🏆', price:'19,90 €/mois', color:'#065A48', badgeClass:'plan-etab-badge' },
};

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
  var email = (getV('login-email') || '').trim().toLowerCase();
  var pwd   = getV('login-pwd') || '';
  var errEl = document.getElementById('login-err');
  var accounts = getHCAccounts();
  if (!accounts[email] || accounts[email].pwd !== pwd) {
    if (errEl) errEl.style.display = 'block'; return;
  }
  if (errEl) errEl.style.display = 'none';
  accounts[email].lastLogin = Date.now();
  saveHCAccounts(accounts);
  AUTH.user = Object.assign({ email: email }, accounts[email]);
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
  if (AUTH.user) _safeStorage.setItem('hc_current_session', JSON.stringify({ email: AUTH.user.email }));
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

/* INIT */
(function initAuth(){
  var saved = _safeStorage.getItem('hc_current_session');
  if (saved) {
    try {
      var s = JSON.parse(saved);
      var accounts = getHCAccounts();
      if (accounts[s.email]) {
        AUTH.user = Object.assign({ email: s.email }, accounts[s.email]);
        _doEnterApp();
        return;
      }
    } catch(e) {}
  }
  // Afficher le splash auth
  var _as=document.getElementById('auth-splash'); if(_as) _as.classList.remove('hidden');
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
    desc: 'Accès limité avec publicité. Idéal pour découvrir l\'application.',
    current: true,
    features: [
      { ok: false, txt: 'Publicités affichées' },
      { ok: true,  txt: 'Calculateurs de base' },
      { ok: false, txt: 'Calculateurs avancés limités' },
      { ok: false, txt: 'Glossaire complet' },
      { ok: false, txt: 'QCM illimités' },
      { ok: false, txt: 'Sauvegarde des calculs' },
      { ok: false, txt: 'SPANC 101 départements' },
    ],
    btnLabel: 'Plan actuel',
    btnClass: 'plan-btn-current'
  },
  {
    id: 'pro',
    ico: '⚡',
    name: 'Pro',
    price: '5,90 €',
    period: '/mois',
    desc: 'Sans publicité, accès étendu. Pour les professionnels et étudiants actifs.',
    current: false,
    features: [
      { ok: true,  txt: 'Sans publicité' },
      { ok: true,  txt: 'Calculateurs de base' },
      { ok: true,  txt: 'Calculateurs avancés' },
      { ok: true,  txt: 'Glossaire complet' },
      { ok: true,  txt: 'QCM illimités' },
      { ok: true,  txt: 'Sauvegarde des calculs' },
      { ok: false, txt: 'SPANC 101 départements' },
    ],
    btnLabel: 'Choisir Pro',
    btnClass: 'plan-btn-primary'
  },
  {
    id: 'etab',
    ico: '🏛️',
    name: 'Établissement',
    price: '35 €',
    period: '/mois',
    priceBis: '190 € /an',
    desc: 'Tout illimité pour les établissements scolaires et entreprises.',
    current: false,
    features: [
      { ok: true, txt: 'Sans publicité' },
      { ok: true, txt: 'Calculateurs de base' },
      { ok: true, txt: 'Calculateurs avancés' },
      { ok: true, txt: 'Glossaire complet' },
      { ok: true, txt: 'QCM illimités' },
      { ok: true, txt: 'Sauvegarde des calculs' },
      { ok: true, txt: 'SPANC 101 départements' },
    ],
    btnLabel: 'Choisir Établissement',
    btnClass: 'plan-btn-primary'
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
      return '<div class="plan-feat ' + (f.ok ? 'ok' : 'no') + '">' + (f.ok ? '✓' : '✗') + ' ' + f.txt + '</div>';
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
    ['Calculateurs base',     '✓','✓','✓'],
    ['Calculateurs avancés',  '⚠','✓','✓'],
    ['Glossaire complet',     '⚠','✓','✓'],
    ['QCM illimités',         '✗','✓','✓'],
    ['Sauvegarde calculs',    '✗','✓','✓'],
    ['SPANC 101 depts',       '✗','✗','✓'],
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
