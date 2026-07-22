/* ══════════════════════════════════════════════════════════════════
   QCM PROFESSEUR — HydroCalc
   Création, partage (URL + QR), passation élève, envoi résultats
   ══════════════════════════════════════════════════════════════════ */

/* ─── Accès ─── */
function _qcmCanCreate() {
  if (typeof AUTH === 'undefined' || !AUTH.user) return false;
  var p = AUTH.user.plan || '';
  return p === 'etab' || p === 'admin';
}

/* ═══════════════════════════════════════════════════
   BANQUE DE QCM (36 QCM / 720 questions, ex-plateforme externe,
   maintenant unifiée — accès restreint par plan d'abonnement)
═══════════════════════════════════════════════════ */
var QCM_BANK_PRO_WEEKLY_LIMIT = 10;

function _qcmBankAccess() {
  var p = (typeof AUTH !== 'undefined' && AUTH.user) ? (AUTH.user.plan || 'free') : 'free';
  if (p === 'etab' || p === 'admin') return 'unlimited';
  if (p === 'pro') return 'limited';
  return 'none';
}

function _qcmBankWeekKey() {
  var u = (typeof AUTH !== 'undefined' && AUTH.user) ? AUTH.user.email : 'guest';
  var now = new Date();
  var startOfYear = new Date(now.getFullYear(), 0, 1);
  var week = Math.floor((now - startOfYear) / 604800000);
  return 'hc_qcmbank_week_' + u + '_' + now.getFullYear() + '_' + week;
}
function _qcmBankWeekCount() {
  return parseInt(localStorage.getItem(_qcmBankWeekKey()) || '0', 10);
}
function _qcmBankWeekIncrement() {
  localStorage.setItem(_qcmBankWeekKey(), (_qcmBankWeekCount() + 1).toString());
}
function _qcmBankWeekRemaining() {
  return Math.max(0, QCM_BANK_PRO_WEEKLY_LIMIT - _qcmBankWeekCount());
}

function renderQCMBankTheme(theme) {
  if (typeof QCM_BANK === 'undefined') return;
  var list = QCM_BANK.filter(function(q){ return q.theme === theme; });
  if (!list.length) return;
  var t0 = list[0];
  var topTitle = document.getElementById('top-title');
  if (topTitle) topTitle.textContent = t0.themeName;

  var html = '<div style="background:' + t0.color + ';padding:16px var(--s-4)">'
    + '<div style="font-size:22px;margin-bottom:6px">' + t0.ico + '</div>'
    + '<div style="font-size:16px;font-weight:800;color:#fff">' + t0.themeName + '</div>'
    + '<div style="font-size:11px;color:rgba(255,255,255,.75);margin-top:2px">' + list.length + ' QCM · ' + t0.theme + '</div>'
    + '</div>'
    + '<div class="section-header" style="padding-top:var(--s-3)">QCM disponibles</div>'
    + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">';

  var isProf = typeof AUTH !== 'undefined' && AUTH.user && (AUTH.user.plan === 'etab' || AUTH.user.plan === 'admin');

  list.forEach(function(q) {
    var idx = QCM_BANK.indexOf(q);
    html += '<div style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-md);padding:var(--s-3) var(--s-4)">'
      + '<div style="font-size:13px;font-weight:700;color:var(--c-text);line-height:1.4">' + q.title + '</div>'
      + '<div style="font-size:11px;color:var(--c-text-3);margin-top:3px">' + q.desc + '</div>'
      + '<div style="margin-top:4px;font-size:10px;color:var(--c-text-4)">' + q.questions.length + ' questions</div>'
      + '<div style="display:flex;gap:6px;margin-top:10px">'
        + '<button onclick="_startBankQCM(' + idx + ')" style="flex:1;padding:10px;background:' + t0.color + ';color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:var(--f-body)">▶ S\'entraîner</button>'
      + '</div>'
    + '</div>';
  });

  html += '</div><div class="pb-nav"></div>';
  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0,0);
}

function _startBankQCM(idx) {
  if (typeof QCM_BANK === 'undefined' || !QCM_BANK[idx]) return;
  var access = _qcmBankAccess();
  if (access === 'none') { if (typeof authToast === 'function') authToast('QCM réservés au plan Pro, Établissement ou Admin'); return; }
  if (access === 'limited') {
    if (_qcmBankWeekRemaining() <= 0) { if (typeof authToast === 'function') authToast('Limite hebdomadaire atteinte — passez à Établissement pour un accès illimité.'); return; }
    _qcmBankWeekIncrement();
  }
  _startStudentQCM(QCM_BANK[idx], true);
}

function _launchLiveSessionFromBank(idx) {
  if (typeof QCM_BANK === 'undefined' || !QCM_BANK[idx]) return;
  if (!_qcmCanCreate()) { if (typeof authToast === 'function') authToast('Réservé aux comptes Établissement et Admin'); return; }
  if (!window.Peer) { if (typeof authToast === 'function') authToast('PeerJS non chargé — vérifiez votre connexion.'); return; }
  var qcm = QCM_BANK[idx];
  try { localStorage.setItem('hc_host_session_pending', JSON.stringify({ qcm: qcm, ts: Date.now() })); } catch(e) {}
  var base = window.location.href.split('?')[0].split('#')[0];
  window.open(base + '?hostQCM=' + encodeURIComponent(qcm.id), '_blank');
}

/* ─── Stockage QCMs du prof ─── */
function _qcmUser() {
  return (typeof AUTH !== 'undefined' && AUTH.user) ? AUTH.user.email : 'guest';
}
function _getAllQCMs() {
  return DataStore.qcm.getAll(_qcmUser());
}
function _saveAllQCMs(arr) {
  DataStore.qcm.saveAll(_qcmUser(), arr);
}

/* ─── Stockage résultats de sessions ─── */
function _qcmGetResults(qcmId) {
  return DataStore.qcm.getResults(_qcmUser(), qcmId);
}
function _qcmSaveResult(qcmId, result) {
  var arr = _qcmGetResults(qcmId);
  result.date = result.date || Date.now();
  arr.unshift(result);
  if (arr.length > 200) arr = arr.slice(0, 200);
  DataStore.qcm.saveResults(_qcmUser(), qcmId, arr);
}

/* ─── Générateur d'ID session ─── */
function _qcmGenId() {
  var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var id = '';
  for (var i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

/* ─── Encoder / Décoder QCM dans URL ─── */
function _qcmEncode(session) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(session))));
}
function _qcmDecode(str) {
  try { return JSON.parse(decodeURIComponent(escape(atob(str)))); } catch(e) { return null; }
}
function _qcmBuildUrl(session) {
  var base = window.location.href.split('#')[0];
  return base + '#qcm=' + _qcmEncode(session);
}

/* ═══════════════════════════════════════════════════
   PAGE GESTIONNAIRE QCM (côté prof)
═══════════════════════════════════════════════════ */
function openQCMManager() {
  if (!_qcmCanCreate()) {
    if (typeof authToast === 'function') authToast('Accès réservé aux comptes Établissement et Administrateur.');
    return;
  }
  if (typeof closeSidebar === 'function') closeSidebar();

  var qcms = _getAllQCMs();
  var topTitle = document.getElementById('top-title');
  if (topTitle) topTitle.textContent = '📝 Mes QCM';

  var html = '<div style="padding-bottom:40px">'
    + '<div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px">'
      + '<button onclick="goHome()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:34px;height:34px;font-size:16px;cursor:pointer">←</button>'
      + '<div style="font-size:20px;font-weight:800;color:var(--c-text)">📝 Mes QCM</div>'
    + '</div>'

    + '<div style="padding:0 12px 8px">'
      + '<button onclick="openQCMBuilder(null)" style="width:100%;padding:13px;background:var(--c-primary);color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:800;cursor:pointer;font-family:var(--f-body);display:flex;align-items:center;justify-content:center;gap:8px">➕ Créer un nouveau QCM</button>'
    + '</div>'
    + '<div style="padding:0 12px 12px">'
      + '<button onclick="openProfExercices()" style="width:100%;padding:11px;background:var(--c-surface);color:var(--c-primary);border:1.5px solid var(--c-primary);border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:var(--f-body);display:flex;align-items:center;justify-content:center;gap:8px">📝 Mes exercices personnalisés</button>'
    + '</div>';

  if (!qcms.length) {
    html += '<div style="text-align:center;padding:40px 20px;color:var(--c-text-4)">'
      + '<div style="font-size:36px;margin-bottom:10px">📋</div>'
      + '<div style="font-size:13px;font-weight:600">Aucun QCM créé</div>'
      + '<div style="font-size:11px;margin-top:6px">Créez votre premier QCM en cliquant sur le bouton ci-dessus</div>'
    + '</div>';
  } else {
    html += '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;padding:0 16px 8px">Mes QCM (' + qcms.length + ')</div>';
    qcms.forEach(function(q, i) {
      var url = _qcmBuildUrl(q);
      html += '<div style="margin:0 12px 8px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:14px;overflow:hidden">'
        + '<div style="padding:14px 16px">'
          + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">'
            + '<div style="flex:1">'
              + '<div style="font-size:14px;font-weight:800;color:var(--c-text);margin-bottom:4px">' + q.title + '</div>'
              + '<div style="font-size:11px;color:var(--c-text-3)">' + q.questions.length + ' question(s) · Code : <strong style="color:var(--c-primary);letter-spacing:.1em">' + q.id + '</strong></div>'
            + '</div>'
            + '<button onclick="_qcmDelete(' + i + ')" style="background:none;border:none;color:var(--c-danger);font-size:18px;cursor:pointer;padding:2px 4px;flex-shrink:0">🗑️</button>'
          + '</div>'
        + '</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:0;border-top:1px solid var(--c-border)">'
          + '<button onclick="openQCMBuilder(' + i + ')" style="padding:10px 4px;background:none;border:none;border-right:1px solid var(--c-border);font-size:11px;font-weight:700;color:var(--c-text-2);cursor:pointer;font-family:var(--f-body)">✏️ Modifier</button>'
          + '<button onclick="showQCMShare(' + i + ')" style="padding:10px 4px;background:none;border:none;border-right:1px solid var(--c-border);font-size:11px;font-weight:700;color:var(--c-primary);cursor:pointer;font-family:var(--f-body)">📤 Partager</button>'
          + '<button onclick="_qcmShowHistory(\'' + q.id + '\',\'' + q.title.replace(/'/g,"\\'") + '\')" style="padding:10px 4px;background:none;border:none;border-right:1px solid var(--c-border);font-size:11px;font-weight:700;color:var(--c-form,#6B4C00);cursor:pointer;font-family:var(--f-body)">📊 Résultats</button>'
          + '<button onclick="_qcmPreview(' + i + ')" style="padding:10px 4px;background:none;border:none;font-size:11px;font-weight:700;color:var(--c-text-2);cursor:pointer;font-family:var(--f-body)">▶ Tester</button>'
        + '</div>'
      + '</div>';
    });
  }

  html += '<div style="height:40px"></div></div>';
  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0, 0);
}

/* ═══════════════════════════════════════════════════
   BUILDER — Créer / Modifier un QCM
═══════════════════════════════════════════════════ */
var _qcmDraft = null;  /* QCM en cours d'édition */

var _qcmStyleDefaults = { hideResults: false, hideExpl: false, randomOrder: false, timer: 0, penalty: false, penaltyPoints: 1, penaltyMsg: "Si une faute est commise au mot <strong>Bernoulli</strong>, −1 point sur le résultat final." };

function openQCMBuilder(idx) {
  if (idx !== null && idx !== undefined) {
    _qcmDraft = JSON.parse(JSON.stringify(_getAllQCMs()[idx]));
    _qcmDraft._editIdx = idx;
  } else {
    _qcmDraft = { id: _qcmGenId(), title: '', profEmail: AUTH.user ? AUTH.user.email : '', profName: AUTH.user ? AUTH.user.name : '', questions: [], style: Object.assign({}, _qcmStyleDefaults) };
  }
  if (!_qcmDraft.style) _qcmDraft.style = Object.assign({}, _qcmStyleDefaults);
  _renderQCMBuilder();
}

function _renderQCMBuilder() {
  var d = _qcmDraft;
  var topTitle = document.getElementById('top-title');
  if (topTitle) topTitle.textContent = '✏️ ' + (d.title || 'Nouveau QCM');

  var html = '<div style="padding-bottom:60px">'
    + '<div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px">'
      + '<button onclick="openQCMManager()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:34px;height:34px;font-size:16px;cursor:pointer">←</button>'
      + '<div style="font-size:18px;font-weight:800;color:var(--c-text)">✏️ ' + (d._editIdx !== undefined ? 'Modifier' : 'Créer') + ' un QCM</div>'
    + '</div>'

    /* Infos générales */
    + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;padding:12px 16px 6px">Informations</div>'
    + '<div style="margin:0 12px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:14px;padding:14px 16px">'
      + '<div style="font-size:12px;font-weight:600;color:var(--c-text-2);margin-bottom:4px">Titre du QCM</div>'
      + '<input id="qcm-title" type="text" value="' + (d.title||'') + '" placeholder="Ex : QCM Hydraulique — Manning-Strickler" oninput="_qcmDraft.title=this.value" style="width:100%;padding:9px 12px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:13px;box-sizing:border-box;margin-bottom:10px">'
      + '<div style="font-size:12px;font-weight:600;color:var(--c-text-2);margin-bottom:4px">Votre e-mail (pour recevoir les résultats)</div>'
      + '<input id="qcm-email" type="email" value="' + (d.profEmail||'') + '" placeholder="votre@email.fr" oninput="_qcmDraft.profEmail=this.value" style="width:100%;padding:9px 12px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:13px;box-sizing:border-box">'
    + '</div>'

    /* Questions */
    + '<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px 6px">'
      + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em">Questions (' + d.questions.length + ')</div>'
      + '<div style="display:flex;gap:8px">'
        + '<button onclick="_qcmAddFromApp()" style="padding:5px 10px;background:var(--c-primary-l);color:var(--c-primary);border:1.5px solid var(--c-primary);border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--f-body)">📚 Depuis l\'app</button>'
        + '<button onclick="_qcmAddCustom()" style="padding:5px 10px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--f-body)">➕ Personnalisée</button>'
      + '</div>'
    + '</div>';

  if (!d.questions.length) {
    html += '<div style="margin:0 12px;background:var(--c-surface-2);border:1.5px dashed var(--c-border);border-radius:14px;padding:28px 20px;text-align:center;color:var(--c-text-4)">'
      + '<div style="font-size:28px;margin-bottom:8px">❓</div>'
      + '<div style="font-size:12px">Ajoutez des questions depuis la bibliothèque de l\'app ou créez les vôtres</div>'
    + '</div>';
  } else {
    d.questions.forEach(function(q, i) {
      html += '<div style="margin:0 12px 8px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;overflow:hidden">'
        + '<div style="padding:12px 14px;display:flex;align-items:flex-start;gap:10px">'
          + '<div style="min-width:26px;height:26px;background:var(--c-primary-l);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:var(--c-primary);flex-shrink:0">' + (i+1) + '</div>'
          + '<div style="flex:1;min-width:0">'
            + '<div style="font-size:12px;font-weight:700;color:var(--c-text);margin-bottom:6px;line-height:1.4">' + q.q + '</div>'
            + q.choices.map(function(ch, ci) {
                var isCorrect = ci === q.correct;
                return '<div style="font-size:11px;padding:3px 8px;border-radius:6px;margin-bottom:3px;background:' + (isCorrect ? 'var(--c-ok-l,#EAF8F0)' : 'var(--c-surface-2)') + ';color:' + (isCorrect ? 'var(--c-ok,#166038)' : 'var(--c-text-3)') + ';font-weight:' + (isCorrect ? '700' : '400') + '">'
                  + String.fromCharCode(65+ci) + '. ' + ch + (isCorrect ? ' ✓' : '') + '</div>';
              }).join('')
          + '</div>'
          + '<div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">'
            + '<button onclick="_qcmEditQ(' + i + ')" style="background:none;border:none;font-size:16px;cursor:pointer;padding:2px">✏️</button>'
            + '<button onclick="_qcmRemoveQ(' + i + ')" style="background:none;border:none;color:var(--c-danger);font-size:16px;cursor:pointer;padding:2px">🗑️</button>'
          + '</div>'
        + '</div>'
      + '</div>';
    });
  }

  /* Options de style */
  var st = d.style || {};
  html += '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;padding:12px 16px 6px">Options de session</div>'
    + '<div style="margin:0 12px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:14px;overflow:hidden">'
    + _qcmStyleToggleRow('Masquer les résultats', 'Les élèves ne voient pas si leur réponse est correcte', 'hideResults', st.hideResults, false)
    + _qcmStyleToggleRow('Masquer les explications', 'Aucune explication affichée après chaque réponse', 'hideExpl', st.hideExpl, false)
    + _qcmStyleToggleRow('Ordre aléatoire', 'Questions mélangées différemment pour chaque élève', 'randomOrder', st.randomOrder, false)
    + _qcmPenaltyBlock(st)
    + '<div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between">'
      + '<div>'
        + '<div style="font-size:13px;font-weight:600;color:var(--c-text)">⏱ Chronomètre par question</div>'
        + '<div style="font-size:11px;color:var(--c-text-3);margin-top:2px">0 = pas de limite</div>'
      + '</div>'
      + '<div style="display:flex;align-items:center;gap:6px">'
        + '<input type="number" min="0" max="300" value="' + (st.timer||0) + '" onchange="_qcmDraft.style.timer=parseInt(this.value)||0" style="width:60px;padding:6px 8px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:13px;text-align:center">'
        + '<span style="font-size:12px;color:var(--c-text-3)">sec</span>'
      + '</div>'
    + '</div>'
    + '</div>';

  /* Bouton sauvegarder */
  html += '<div style="padding:16px 12px 0">'
    + '<button onclick="_qcmSaveDraft()" style="width:100%;padding:13px;background:var(--c-primary);color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:800;cursor:pointer;font-family:var(--f-body)">💾 Enregistrer le QCM</button>'
  + '</div></div>';

  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0, 0);
}

function _qcmStyleToggleRow(label, desc, key, val, last) {
  var border = last ? '' : 'border-bottom:1px solid var(--c-border);';
  var on = !!val;
  return '<div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between;' + border + '">'
    + '<div>'
      + '<div style="font-size:13px;font-weight:600;color:var(--c-text)">' + label + '</div>'
      + '<div style="font-size:11px;color:var(--c-text-3);margin-top:2px">' + desc + '</div>'
    + '</div>'
    + '<button onclick="_qcmToggleStyle(\'' + key + '\')" id="style-toggle-' + key + '" style="width:46px;height:26px;border-radius:13px;border:none;background:' + (on ? 'var(--c-primary)' : 'var(--c-border)') + ';cursor:pointer;position:relative;transition:background .2s;flex-shrink:0">'
      + '<span style="position:absolute;top:3px;' + (on ? 'right:3px' : 'left:3px') + ';width:20px;height:20px;border-radius:50%;background:#fff;transition:all .2s"></span>'
    + '</button>'
  + '</div>';
}

function _qcmPenaltyBlock(st) {
  var on = !!st.penalty;
  var pts = st.penaltyPoints !== undefined ? st.penaltyPoints : 1;
  var msg = st.penaltyMsg || 'Si une faute est commise, −' + pts + ' point(s) est appliqué au score final.';
  return '<div style="border-bottom:1px solid var(--c-border)">'
    /* Ligne toggle */
    + '<div style="padding:12px 16px;display:flex;align-items:center;justify-content:space-between">'
      + '<div>'
        + '<div style="font-size:13px;font-weight:600;color:var(--c-text)">⚠️ Pénalité par faute</div>'
        + '<div style="font-size:11px;color:var(--c-text-3);margin-top:2px">Retire des points pour chaque mauvaise réponse</div>'
      + '</div>'
      + '<button onclick="_qcmToggleStyle(\'penalty\')" id="style-toggle-penalty" style="width:46px;height:26px;border-radius:13px;border:none;background:' + (on?'var(--c-primary)':'var(--c-border)') + ';cursor:pointer;position:relative;transition:background .2s;flex-shrink:0">'
        + '<span style="position:absolute;top:3px;' + (on?'right:3px':'left:3px') + ';width:20px;height:20px;border-radius:50%;background:#fff;transition:all .2s"></span>'
      + '</button>'
    + '</div>'
    /* Détails pénalité — visibles seulement si activé */
    + '<div id="penalty-details" style="display:' + (on?'block':'none') + ';padding:0 16px 14px;border-top:1px dashed var(--c-border);background:var(--c-surface-2)">'
      + '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;padding-top:10px">'
        + '<div style="font-size:12px;font-weight:600;color:var(--c-text);white-space:nowrap">Points retirés par faute :</div>'
        + '<input type="number" min="1" max="10" value="' + pts + '" id="penalty-pts-input" onchange="_qcmDraft.style.penaltyPoints=parseInt(this.value)||1;_qcmUpdatePenaltyPreview()" style="width:56px;padding:6px 8px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:13px;text-align:center">'
      + '</div>'
      + '<div style="font-size:11px;font-weight:600;color:var(--c-text-2);margin-bottom:6px">Message affiché aux élèves :</div>'
      + '<textarea id="penalty-msg-input" rows="2" oninput="_qcmDraft.style.penaltyMsg=this.value.replace(/Bernoulli/g,\'<strong>Bernoulli</strong>\')" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:12px;box-sizing:border-box;resize:vertical">' + msg.replace(/<strong>|<\/strong>/g,'') + '</textarea>'
      + '<div style="font-size:10px;color:var(--c-text-4);margin-top:2px">Le mot <strong>Bernoulli</strong> sera automatiquement mis en gras dans le message affiché.</div>'
      + '<div style="font-size:10px;font-style:italic;color:var(--c-text-4);margin-top:4px">Aperçu : affiché en bandeau orange pendant le QCM</div>'
    + '</div>'
  + '</div>';
}

var _qcmDefaultPenaltyMsg = "Si une faute est commise au mot <strong>Bernoulli</strong>, −1 point sur le résultat final.";

function _qcmUpdatePenaltyPreview() {
  var pts = _qcmDraft.style.penaltyPoints || 1;
  var msgEl = document.getElementById('penalty-msg-input');
  if (!msgEl) return;
  /* Remplacer seulement si le message n'a pas été personnalisé */
  var currentMsg = _qcmDraft.style.penaltyMsg || '';
  var stripped = currentMsg.replace(/<strong>|<\/strong>/g, '');
  if (stripped.includes('Bernoulli') || currentMsg === '') {
    var updated = "Si une faute est commise au mot <strong>Bernoulli</strong>, −" + pts + ' point' + (pts > 1 ? 's' : '') + ' sur le résultat final.';
    msgEl.value = updated.replace(/<strong>|<\/strong>/g, '');
    _qcmDraft.style.penaltyMsg = updated;
  }
}

function _qcmToggleStyle(key) {
  if (!_qcmDraft.style) _qcmDraft.style = {};
  _qcmDraft.style[key] = !_qcmDraft.style[key];
  var on = _qcmDraft.style[key];
  /* Mettre à jour le toggle visuellement sans re-render complet */
  var btn = document.getElementById('style-toggle-' + key);
  if (btn) {
    btn.style.background = on ? 'var(--c-primary)' : 'var(--c-border)';
    var dot = btn.querySelector('span');
    if (dot) { dot.style.right = on ? '3px' : ''; dot.style.left = on ? '' : '3px'; }
  }
  /* Afficher/masquer le bloc détails pénalité */
  if (key === 'penalty') {
    var details = document.getElementById('penalty-details');
    if (details) details.style.display = on ? 'block' : 'none';
  }
  /* Synchroniser en live si session active */
  _qcmLiveBroadcast({ type: 'styleUpdate', style: _qcmDraft.style });
}

function _qcmRemoveQ(i) {
  _qcmDraft.questions.splice(i, 1);
  _renderQCMBuilder();
}

function _qcmSaveDraft() {
  if (!_qcmDraft.title.trim()) { if (typeof authToast === 'function') authToast('Donnez un titre au QCM.'); return; }
  if (!_qcmDraft.profEmail || !_qcmDraft.profEmail.includes('@')) { if (typeof authToast === 'function') authToast('Indiquez votre e-mail pour recevoir les résultats.'); return; }
  if (_qcmDraft.questions.length < 1) { if (typeof authToast === 'function') authToast('Ajoutez au moins une question.'); return; }
  var arr = _getAllQCMs();
  if (_qcmDraft._editIdx !== undefined) {
    arr[_qcmDraft._editIdx] = _qcmDraft;
  } else {
    arr.unshift(_qcmDraft);
  }
  delete _qcmDraft._editIdx;
  _saveAllQCMs(arr);
  if (typeof authToast === 'function') authToast('QCM enregistré ✓');
  openQCMManager();
}

function _qcmDelete(i) {
  if (!confirm('Supprimer ce QCM ?')) return;
  var arr = _getAllQCMs();
  arr.splice(i, 1);
  _saveAllQCMs(arr);
  openQCMManager();
}

/* ─── Ajouter une question personnalisée ─── */
function _qcmAddCustom() {
  window._qcmEditIdx = null;
  _qcmOpenQuestionModal(null);
}

function _qcmEditQ(i) {
  window._qcmEditIdx = i;
  _qcmOpenQuestionModal(_qcmDraft.questions[i]);
}

function _qcmOpenQuestionModal(existing) {
  var isEdit = existing !== null && existing !== undefined;
  var modal = document.createElement('div');
  modal.id = 'hc-qcm-add-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-end';

  modal.innerHTML = '<div style="background:var(--c-surface);border-radius:20px 20px 0 0;max-height:90vh;overflow-y:auto;padding:20px 16px 32px">'
    + '<div style="font-size:16px;font-weight:800;color:var(--c-text);margin-bottom:14px">' + (isEdit ? '✏️ Modifier la question' : '➕ Nouvelle question') + '</div>'

    + '<div style="font-size:11px;font-weight:700;color:var(--c-text-3);margin-bottom:4px">Question</div>'
    + '<textarea id="qcm-new-q" rows="3" placeholder="Saisissez votre question..." style="width:100%;padding:9px 12px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:13px;box-sizing:border-box;resize:vertical;margin-bottom:12px">' + (isEdit ? _escHtml(existing.q) : '') + '</textarea>'

    + [0,1,2,3].map(function(ci) {
        return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'
          + '<button onclick="_qcmSetCorrect(' + ci + ')" id="qcm-correct-btn-' + ci + '" style="min-width:28px;height:28px;border-radius:50%;border:2px solid var(--c-border);background:var(--c-surface-2);font-size:12px;font-weight:800;cursor:pointer;color:var(--c-text-3)">' + String.fromCharCode(65+ci) + '</button>'
          + '<input id="qcm-choice-' + ci + '" type="text" placeholder="Réponse ' + String.fromCharCode(65+ci) + '..." value="' + (isEdit ? _escQ(existing.choices[ci] || '') : '') + '" style="flex:1;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:12px">'
        + '</div>';
      }).join('')

    + '<div id="qcm-correct-hint" style="font-size:11px;color:var(--c-text-4);margin-bottom:14px">'
      + (isEdit ? '✓ Bonne réponse actuelle : ' + String.fromCharCode(65 + existing.correct) + ' — cliquez pour changer' : 'Cliquez sur une lettre (A/B/C/D) pour marquer la bonne réponse')
    + '</div>'

    + '<div style="font-size:11px;font-weight:700;color:var(--c-text-3);margin-bottom:4px">Explication (facultatif)</div>'
    + '<input id="qcm-new-expl" type="text" placeholder="Explication affichée après la réponse..." value="' + (isEdit ? _escQ(existing.expl || '') : '') + '" style="width:100%;padding:8px 12px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:12px;box-sizing:border-box;margin-bottom:16px">'

    + '<button onclick="_qcmConfirmCustom()" style="width:100%;padding:12px;background:var(--c-primary);color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:800;cursor:pointer;font-family:var(--f-body);margin-bottom:8px">' + (isEdit ? '💾 Enregistrer les modifications' : 'Ajouter la question') + '</button>'
    + '<button onclick="_qcmCloseModal()" style="width:100%;padding:10px;background:none;border:none;font-size:13px;color:var(--c-text-4);cursor:pointer;font-family:var(--f-body)">Annuler</button>'
  + '</div>';

  window._qcmCorrectIdx = isEdit ? existing.correct : null;
  modal.addEventListener('click', function(e) { if (e.target === modal) _qcmCloseModal(); });
  document.body.appendChild(modal);

  /* Colorier le bouton de la bonne réponse si on est en mode édition */
  if (isEdit) {
    setTimeout(function() { _qcmSetCorrect(existing.correct); }, 50);
  }
}

function _qcmSetCorrect(ci) {
  window._qcmCorrectIdx = ci;
  for (var i = 0; i < 4; i++) {
    var btn = document.getElementById('qcm-correct-btn-' + i);
    if (!btn) continue;
    if (i === ci) {
      btn.style.background = 'var(--c-ok,#166038)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--c-ok,#166038)';
    } else {
      btn.style.background = 'var(--c-surface-2)';
      btn.style.color = 'var(--c-text-3)';
      btn.style.borderColor = 'var(--c-border)';
    }
  }
  var hint = document.getElementById('qcm-correct-hint');
  if (hint) { hint.textContent = '✓ Bonne réponse : ' + String.fromCharCode(65+ci); hint.style.color = 'var(--c-ok)'; }
}

function _qcmConfirmCustom() {
  var q = (document.getElementById('qcm-new-q') || {}).value || '';
  var choices = [0,1,2,3].map(function(i){ return ((document.getElementById('qcm-choice-'+i)||{}).value||'').trim(); });
  var correct = window._qcmCorrectIdx;
  var expl = (document.getElementById('qcm-new-expl') || {}).value || '';

  if (!q.trim()) { if (typeof authToast === 'function') authToast('Saisissez la question.'); return; }
  if (choices.some(function(c){ return !c; })) { if (typeof authToast === 'function') authToast('Remplissez les 4 choix de réponse.'); return; }
  if (correct === null || correct === undefined) { if (typeof authToast === 'function') authToast('Sélectionnez la bonne réponse (A/B/C/D).'); return; }

  var editIdx = window._qcmEditIdx;
  if (editIdx !== null && editIdx !== undefined && _qcmDraft.questions[editIdx]) {
    _qcmDraft.questions[editIdx] = { q: q.trim(), choices: choices, correct: correct, expl: expl.trim() };
  } else {
    _qcmDraft.questions.push({ q: q.trim(), choices: choices, correct: correct, expl: expl.trim() });
  }
  window._qcmEditIdx = null;
  _qcmCloseModal();
  _renderQCMBuilder();
}

function _qcmCloseModal() {
  var m = document.getElementById('hc-qcm-add-modal');
  if (m) m.remove();
  var m2 = document.getElementById('hc-qcm-app-picker');
  if (m2) m2.remove();
}

/* ─── Ajouter depuis les flashcards de l'app ─── */
function _qcmAddFromApp() {
  if (typeof COURS_DATA === 'undefined') { if (typeof authToast === 'function') authToast('Module Cours non chargé.'); return; }

  var modal = document.createElement('div');
  modal.id = 'hc-qcm-app-picker';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-end';

  var body = '<div style="background:var(--c-surface);border-radius:20px 20px 0 0;max-height:85vh;display:flex;flex-direction:column;overflow:hidden">'
    + '<div style="padding:16px 20px 10px;border-bottom:1px solid var(--c-border);display:flex;align-items:center;justify-content:space-between;flex-shrink:0">'
      + '<div style="font-size:15px;font-weight:800;color:var(--c-text)">📚 Questions depuis l\'app</div>'
      + '<button onclick="_qcmCloseModal()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:30px;height:30px;font-size:16px;cursor:pointer">✕</button>'
    + '</div>'
    + '<div style="overflow-y:auto;flex:1;padding:12px 16px 20px">';

  Object.keys(COURS_DATA).forEach(function(fId) {
    var f = COURS_DATA[fId];
    body += '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin:10px 0 6px">' + f.ico + ' ' + f.name + '</div>';
    f.annees.forEach(function(a) {
      a.matieres.forEach(function(m) {
        m.chapitres.forEach(function(c) {
          if (!c.flashcards || !c.flashcards.length) return;
          body += '<div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:10px;padding:10px 12px;margin-bottom:6px;cursor:pointer" onclick="_qcmImportChap(\'' + fId + '\',\'' + a.id + '\',\'' + m.id + '\',\'' + c.id + '\')">'
            + '<div style="font-size:12px;font-weight:700;color:var(--c-text)">' + c.titre + '</div>'
            + '<div style="font-size:10px;color:var(--c-text-3);margin-top:2px">' + c.flashcards.length + ' question(s) disponibles</div>'
          + '</div>';
        });
      });
    });
  });

  body += '</div></div>';
  modal.innerHTML = body;
  modal.addEventListener('click', function(e) { if (e.target === modal) _qcmCloseModal(); });
  document.body.appendChild(modal);
}

function _qcmImportChap(fId, aId, mId, cId) {
  var f = COURS_DATA[fId];
  if (!f) return;
  var annee = f.annees.find(function(a){ return a.id === aId; });
  if (!annee) return;
  var mat = annee.matieres.find(function(m){ return m.id === mId; });
  if (!mat) return;
  var chap = mat.chapitres.find(function(c){ return c.id === cId; });
  if (!chap || !chap.flashcards) return;

  /* Convertir flashcards → QCM 4 choix */
  /* Pour les mauvaises réponses, on prend des réponses d'autres cartes du même chapitre */
  var allAnswers = chap.flashcards.map(function(fc){ return fc.r; });

  var added = 0;
  chap.flashcards.forEach(function(fc) {
    var wrongPool = allAnswers.filter(function(r){ return r !== fc.r; });
    /* Mélanger le pool et prendre 3 mauvaises réponses */
    wrongPool.sort(function(){ return Math.random() - .5; });
    var wrongs = wrongPool.slice(0, 3);
    if (wrongs.length < 3) return; /* Pas assez de mauvaises réponses */

    /* Insérer la bonne réponse à une position aléatoire */
    var correctIdx = Math.floor(Math.random() * 4);
    var choices = [];
    var wi = 0;
    for (var i = 0; i < 4; i++) {
      if (i === correctIdx) choices.push(fc.r);
      else choices.push(wrongs[wi++]);
    }

    _qcmDraft.questions.push({ q: fc.q, choices: choices, correct: correctIdx, expl: fc.expl || '' });
    added++;
  });

  _qcmCloseModal();
  if (typeof authToast === 'function') authToast(added + ' question(s) importée(s) ✓');
  _renderQCMBuilder();
}

/* ═══════════════════════════════════════════════════
   PARTAGE — Code + QR Code
═══════════════════════════════════════════════════ */
function showQCMShare(idx) {
  var qcm = _getAllQCMs()[idx];
  if (!qcm) return;
  var base = window.location.href.split('?')[0].split('#')[0];
  var url  = base + '?joinCode=' + encodeURIComponent(qcm.id);

  var modal = document.createElement('div');
  modal.id = 'hc-qcm-share';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-end';

  modal.innerHTML = '<div style="background:var(--c-surface);border-radius:20px 20px 0 0;padding:20px 20px 36px;max-height:85vh;overflow-y:auto">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">'
      + '<div style="font-size:16px;font-weight:800;color:var(--c-text)">📤 Partager le QCM</div>'
      + '<button onclick="document.getElementById(\'hc-qcm-share\').remove()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:30px;height:30px;font-size:16px;cursor:pointer">✕</button>'
    + '</div>'

    + '<div style="font-size:13px;font-weight:700;color:var(--c-text);margin-bottom:4px">' + qcm.title + '</div>'
    + '<div style="font-size:11px;color:var(--c-text-3);margin-bottom:20px">' + qcm.questions.length + ' questions</div>'

    + '<div style="background:var(--c-surface-2);border:1px solid var(--c-border);border-radius:12px;padding:12px 14px;margin-bottom:16px;font-size:12px;color:var(--c-text-3);line-height:1.5">'
      + '💡 Lancez d\'abord la session — le code et le QR code apparaîtront ensuite pour que les élèves puissent rejoindre.'
    + '</div>'

    + '<button onclick="document.getElementById(\'hc-qcm-share\').remove();_launchLiveSession(' + idx + ')" style="width:100%;padding:14px;background:linear-gradient(135deg,#8B0000,#C0392B);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:800;cursor:pointer;font-family:var(--f-body);margin-bottom:10px">🔴 Lancer la session en direct</button>'
    + '<button onclick="_qcmCopyLink(\'' + idx + '\')" style="width:100%;padding:11px;background:var(--c-surface-2);border:1.5px solid var(--c-border);border-radius:10px;font-size:13px;font-weight:700;color:var(--c-text-2);cursor:pointer;font-family:var(--f-body);margin-bottom:8px">📋 Copier le lien de partage</button>'
    + '<button onclick="_qcmShareMail(\'' + idx + '\')" style="width:100%;padding:11px;background:none;border:1.5px solid var(--c-border);border-radius:10px;font-size:13px;font-weight:700;color:var(--c-text-2);cursor:pointer;font-family:var(--f-body)">✉️ Envoyer par e-mail</button>'
  + '</div>';

  modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
}

function _qcmCopyLink(idx) {
  var qcm = _getAllQCMs()[idx];
  if (!qcm) return;
  var base = window.location.href.split('?')[0].split('#')[0];
  var url  = base + '?joinCode=' + encodeURIComponent(qcm.id);
  navigator.clipboard.writeText(url).then(function() {
    if (typeof authToast === 'function') authToast('Lien copié ✓');
  }).catch(function() {
    if (typeof authToast === 'function') authToast('Copiez le lien manuellement.');
  });
}

function _qcmShareMail(idx) {
  var qcm = _getAllQCMs()[idx];
  if (!qcm) return;
  var base = window.location.href.split('?')[0].split('#')[0];
  var url  = base + '?joinCode=' + encodeURIComponent(qcm.id);
  var subject = encodeURIComponent('QCM HydroCalc — ' + qcm.title);
  var body = encodeURIComponent('Bonjour,\n\nVoici le lien pour accéder au QCM "' + qcm.title + '" :\n\n' + url + '\n\nCode de session : ' + qcm.id + '\n\nBonne révision !');
  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
}

function _qcmPreview(idx) {
  var qcm = _getAllQCMs()[idx];
  if (!qcm) return;
  _startStudentQCM(qcm, true);
}

/* ═══════════════════════════════════════════════════
   CÔTÉ ÉLÈVE — Passation du QCM
═══════════════════════════════════════════════════ */
var _qcmSession = null;
var _qcmStudentState = null;

function _startStudentQCM(session, isPreview) {
  _qcmSession = session;
  _qcmStudentState = {
    idx: 0,
    answers: [],   /* index de la réponse choisie par l'élève */
    isPreview: isPreview || false,
    studentName: '',
  };

  /* Appliquer ordre aléatoire si activé */
  if (session.style && session.style.randomOrder) {
    var shuffled = session.questions.slice().sort(function(){ return Math.random() - .5; });
    _qcmSession = Object.assign({}, session, { questions: shuffled });
  }

  if (isPreview) {
    _qcmStudentState.studentName = (AUTH.user ? AUTH.user.name : 'Prévisualisation');
    _renderStudentQCM();
    return;
  }

  /* Demander le nom de l'élève */
  var mc = document.getElementById('main-content');
  mc.innerHTML = '<div style="min-height:100vh;background:var(--c-bg);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;text-align:center">'
    + '<div style="font-size:40px;margin-bottom:12px">📝</div>'
    + '<div style="font-size:18px;font-weight:800;color:var(--c-text);margin-bottom:6px">' + session.title + '</div>'
    + '<div style="font-size:12px;color:var(--c-text-3);margin-bottom:8px">' + session.questions.length + ' questions · Prof : ' + (session.profName || session.profEmail) + '</div>'
    + '<div style="font-size:11px;color:var(--c-text-4);margin-bottom:' + (session.style && session.style.penalty ? '10px' : '24px') + '">Code : <strong style="letter-spacing:.1em">' + session.id + '</strong></div>'
    + (session.style && session.style.penalty
        ? '<div style="font-size:12px;font-style:italic;color:#886000;background:#FDF0D8;border:1px solid #C8A000;border-radius:8px;padding:8px 14px;margin-bottom:20px;max-width:320px">⚠️ ' + (session.style.penaltyMsg || 'Si une faute est commise, −' + (session.style.penaltyPoints||1) + ' point(s) est appliqué au score final.') + '</div>'
        : '')
    + '<div style="width:100%;max-width:320px">'
      + '<input id="qcm-student-name" type="text" placeholder="Votre nom et prénom" style="width:100%;padding:12px;border:1.5px solid var(--c-border);border-radius:10px;font-family:var(--f-body);font-size:14px;box-sizing:border-box;margin-bottom:12px;text-align:center">'
      + '<button onclick="_qcmStartWithName()" style="width:100%;padding:13px;background:var(--c-primary);color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:800;cursor:pointer;font-family:var(--f-body)">▶ Démarrer</button>'
    + '</div>'
  + '</div>';
  window.scrollTo(0,0);
}

function _renderStudentQCM() {
  var s = _qcmStudentState;
  var session = _qcmSession;
  var idx = s.idx;
  var questions = session.questions;

  if (idx >= questions.length) { _renderStudentScore(); return; }

  var q = questions[idx];
  var prog = Math.round((idx / questions.length) * 100);
  var style = (session && session.style) || {};

  var html = '<div style="min-height:100vh;background:var(--c-bg);display:flex;flex-direction:column">'

    /* Header */
    + '<div style="background:var(--c-primary);padding:12px 16px;display:flex;align-items:center;justify-content:space-between">'
      + '<div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.8)">' + session.title + '</div>'
      + '<div style="font-size:12px;font-weight:800;color:#fff">' + (idx+1) + ' / ' + questions.length + '</div>'
    + '</div>'

    /* Barre de progression */
    + '<div style="height:4px;background:rgba(0,0,0,.1)">'
      + '<div style="height:100%;width:' + prog + '%;background:var(--c-ok,#166038);transition:width .3s"></div>'
    + '</div>'

    + (style.penalty ? '<div style="background:#FDF0D8;padding:6px 16px;text-align:center"><span style="font-size:11px;font-style:italic;color:#886000">⚠️ ' + (style.penaltyMsg || 'Si une faute est commise, −' + (style.penaltyPoints||1) + ' point(s)') + '</span></div>' : '')

    + '<div style="padding:var(--s-4);flex:1;display:flex;flex-direction:column;gap:var(--s-3)">'

      /* Question */
      + '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-lg);padding:var(--s-4)">'
        + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Question ' + (idx+1) + '</div>'
        + '<div style="font-size:15px;font-weight:700;color:var(--c-text);line-height:1.5">' + q.q + '</div>'
      + '</div>'

      /* Choix */
      + '<div style="display:flex;flex-direction:column;gap:var(--s-2)">'
      + q.choices.map(function(ch, ci) {
          return '<button onclick="_qcmAnswer(' + ci + ')" '
            + 'style="width:100%;padding:14px 16px;background:var(--c-surface);border:2px solid var(--c-border);border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;font-weight:600;cursor:pointer;text-align:left;display:flex;align-items:center;gap:12px;color:var(--c-text)" '
            + 'onmouseover="this.style.borderColor=\'var(--c-primary)\';this.style.background=\'var(--c-primary-l)\'" onmouseout="this.style.borderColor=\'var(--c-border)\';this.style.background=\'var(--c-surface)\'">'
            + '<span style="min-width:28px;height:28px;border-radius:50%;background:var(--c-primary-l);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0">' + String.fromCharCode(65+ci) + '</span>'
            + ch
            + '</button>';
        }).join('')
      + '</div>'

    + '</div>'
  + '</div>';

  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0,0);
}

function _qcmAnswer(choiceIdx) {
  var s = _qcmStudentState;
  var q = _qcmSession.questions[s.idx];
  var isCorrect = choiceIdx === q.correct;
  s.answers.push({ chosen: choiceIdx, correct: q.correct, ok: isCorrect });

  /* Envoyer la réponse au prof si connecté en live */
  _qcmSendToProf({ type:'answer', qIdx: s.idx, chosen: choiceIdx, ok: isCorrect });

  var style = (_qcmSession && _qcmSession.style) || {};

  /* Afficher le feedback (bonne/mauvaise) — sauf si masqué */
  var buttons = document.querySelectorAll('#main-content button[onclick^="_qcmAnswer"]');
  buttons.forEach(function(btn, bi) {
    btn.onclick = null;
    btn.style.cursor = 'default';
    btn.onmouseover = null;
    btn.onmouseout  = null;
    if (!style.hideResults) {
      if (bi === q.correct) {
        btn.style.borderColor = 'var(--c-ok,#166038)';
        btn.style.background  = 'var(--c-ok-l,#EAF8F0)';
        btn.style.color       = 'var(--c-ok,#166038)';
      } else if (bi === choiceIdx && !isCorrect) {
        btn.style.borderColor = 'var(--c-danger,#A82018)';
        btn.style.background  = 'var(--c-danger-l,#FDECEA)';
        btn.style.color       = 'var(--c-danger,#A82018)';
      }
    } else if (bi === choiceIdx) {
      /* Juste montrer la sélection sans feedback */
      btn.style.borderColor = 'var(--c-primary)';
      btn.style.background  = 'var(--c-primary-l)';
    }
  });

  if (q.expl && !style.hideExpl) {
    var explDiv = document.createElement('div');
    explDiv.style.cssText = 'margin:0 var(--s-4) var(--s-3);padding:10px 14px;background:var(--c-surface-2);border-radius:var(--r-md);border-left:3px solid var(--c-primary);font-size:12px;color:var(--c-text-2);line-height:1.6';
    explDiv.innerHTML = '💡 ' + q.expl;
    var flexDiv = document.querySelector('#main-content > div > div:last-child');
    if (flexDiv) flexDiv.appendChild(explDiv);
  }

  /* Bouton Suivant */
  var nextBtn = document.createElement('div');
  nextBtn.style.cssText = 'padding:0 var(--s-4) var(--s-4)';
  nextBtn.innerHTML = '<button onclick="_qcmNext()" style="width:100%;padding:14px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-md);font-family:var(--f-body);font-size:14px;font-weight:800;cursor:pointer">'
    + (s.idx + 1 < _qcmSession.questions.length ? 'Question suivante →' : '🏁 Voir les résultats') + '</button>';
  var flexDiv2 = document.querySelector('#main-content > div > div:last-child');
  if (flexDiv2) flexDiv2.appendChild(nextBtn);
}

function _qcmNext() {
  _qcmStudentState.idx++;
  _renderStudentQCM();
}

/* ─── Écran de score élève ─── */
function _renderStudentScore() {
  var s    = _qcmStudentState;
  var ok    = s.answers.filter(function(a){ return a.ok; }).length;
  var wrong = s.answers.filter(function(a){ return !a.ok; }).length;
  var total = _qcmSession.questions.length;
  var style = (_qcmSession && _qcmSession.style) || {};
  var penaltyPts = style.penaltyPoints || 1;
  var rawScore = style.penalty ? Math.max(0, ok - wrong * penaltyPts) : ok;
  var pct  = total ? Math.round(rawScore / total * 100) : 0;
  var emoji = pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '📖';
  var bg    = pct >= 80 ? '#166038' : pct >= 50 ? '#886000' : '#A82018';
  var msg   = pct >= 80 ? 'Excellent résultat !' : pct >= 50 ? 'Bon travail, continuez !' : 'À retravailler.';
  var scoreLabel = style.penalty
    ? rawScore + ' pt' + (rawScore > 1 ? 's' : '') + ' / ' + total + ' (' + ok + ' ✓ − ' + wrong + ' ✗)'
    : ok + ' / ' + total + ' bonnes réponses';

  /* Envoyer le score final au prof si connecté en live */
  _qcmSendToProf({ type:'done', name: s.studentName, score: rawScore, total: total, pct: pct, ok: ok, wrong: wrong, penalty: !!style.penalty });

  var detailLines = _qcmSession.questions.map(function(q, i) {
    var a = s.answers[i];
    if (!a) return '';
    return (a.ok ? '✅' : '❌') + ' Q' + (i+1) + ' : ' + q.q.slice(0,60) + (q.q.length>60?'…':'') + ' → ' + q.choices[a.chosen];
  }).join('\n');

  var mailBody = 'Nom : ' + s.studentName + '\n'
    + 'QCM : ' + _qcmSession.title + '\n'
    + 'Score : ' + ok + '/' + total + ' (' + pct + '%)\n'
    + 'Date : ' + new Date().toLocaleString('fr-FR') + '\n\n'
    + 'Détail :\n' + detailLines;

  var mailHref = 'mailto:' + (_qcmSession.profEmail||'') + '?subject=' + encodeURIComponent('Résultats QCM — ' + s.studentName + ' — ' + _qcmSession.title) + '&body=' + encodeURIComponent(mailBody);

  var html = '<div style="padding:var(--s-4);text-align:center;min-height:100vh;background:var(--c-bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--s-3)">'
    + '<div style="font-size:56px">' + emoji + '</div>'
    + '<div style="font-size:26px;font-weight:900;color:' + bg + '">' + pct + '%</div>'
    + '<div style="font-size:15px;font-weight:700;color:var(--c-text)">' + scoreLabel + '</div>'
    + (style.penalty ? '<div style="font-size:11px;font-style:italic;color:#886000;background:#FDF0D8;border:1px solid #C8A000;border-radius:8px;padding:6px 12px">⚠️ ' + (style.penaltyMsg || '−' + (style.penaltyPoints||1) + ' point(s) par faute') + '</div>' : '')
    + '<div style="font-size:12px;color:var(--c-text-3)">' + msg + '</div>'

    + '<div style="width:100%;max-width:320px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-lg);padding:var(--s-3)">'
      + '<div style="height:10px;background:var(--c-border);border-radius:5px;overflow:hidden;margin-bottom:8px">'
        + '<div style="height:100%;width:' + pct + '%;background:' + bg + ';border-radius:5px"></div>'
      + '</div>'
      + '<div style="font-size:11px;color:var(--c-text-3);text-align:left">' + s.studentName + ' · ' + _qcmSession.title + '</div>'
    + '</div>'

    + (!s.isPreview ? '<a href="' + mailHref + '" style="display:block;width:100%;max-width:320px;padding:13px;background:var(--c-primary);color:#fff;border-radius:10px;font-size:14px;font-weight:800;text-decoration:none;text-align:center">✉️ Envoyer mes résultats au prof</button></a>' : '')

    + '<button onclick="goHome()" style="padding:10px 24px;background:none;border:1.5px solid var(--c-border);border-radius:10px;font-size:13px;color:var(--c-text-3);cursor:pointer;font-family:var(--f-body)">← Retour à l\'app</button>'
  + '</div>';

  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0,0);
}

/* ═══════════════════════════════════════════════════
   SESSION EN DIRECT — CÔTÉ PROFESSEUR (PeerJS)
═══════════════════════════════════════════════════ */
var _livePeer        = null;   /* Peer PeerJS du prof */
var _liveSession     = null;   /* QCM en cours */
var _liveStudents    = {};     /* { studentName: { conn, answers:[], currentQ, done, score } } */
var _liveDashRefresh = null;   /* setInterval du dashboard */

function _qcmPeerId(sessionId) {
  return 'hcqcm-' + sessionId.toLowerCase();
}

function _launchLiveSession(idx) {
  var qcm = _getAllQCMs()[idx];
  if (!qcm) return;
  if (!window.Peer) { if (typeof authToast === 'function') authToast('PeerJS non chargé — vérifiez votre connexion.'); return; }

  var mc = document.getElementById('main-content');
  if (mc) {
    mc.innerHTML = '<div style="min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:40px 24px;text-align:center">'
      + '<div style="font-size:44px">🔴</div>'
      + '<div style="font-size:16px;font-weight:800;color:var(--c-text)">' + qcm.title + '</div>'
      + '<div style="font-size:13px;color:var(--c-text-3)">Connexion de la session en cours…</div>'
      + '<div style="display:flex;gap:6px;align-items:center;margin-top:4px">'
        + '<div style="width:8px;height:8px;border-radius:50%;background:var(--c-primary);animation:hc-dot-pulse 1.2s ease-in-out 0s infinite both"></div>'
        + '<div style="width:8px;height:8px;border-radius:50%;background:var(--c-primary);animation:hc-dot-pulse 1.2s ease-in-out .2s infinite both"></div>'
        + '<div style="width:8px;height:8px;border-radius:50%;background:var(--c-primary);animation:hc-dot-pulse 1.2s ease-in-out .4s infinite both"></div>'
      + '</div>'
    + '</div>'
    + '<style>@keyframes hc-dot-pulse{0%,80%,100%{opacity:.2;transform:scale(.7)}40%{opacity:1;transform:scale(1)}}</style>';
    window.scrollTo(0, 0);
  }

  _doLaunchLiveSession(qcm);
}

function _doLaunchLiveSession(qcm) {
  _liveSession  = qcm;
  _liveStudents = {};

  var peerId = _qcmPeerId(qcm.id);
  _livePeer = new Peer(peerId);

  _livePeer.on('open', function() {
    if (typeof authToast === 'function') authToast('Session en direct ouverte ✓');
    _renderLiveDashboard();
  });

  _livePeer.on('connection', function(conn) {
    conn.on('open', function() {
      conn.send({ type: 'session', qcm: { title: qcm.title, id: qcm.id, questions: qcm.questions } });
    });
    conn.on('data', function(data) { _handleStudentData(conn, data); });
    conn.on('close', function() {
      if (conn._studentName && _liveStudents[conn._studentName]) {
        _liveStudents[conn._studentName].connected = false;
        _refreshLiveDashboard();
      }
    });
  });

  _livePeer.on('error', function(err) {
    if (typeof authToast === 'function') authToast('Erreur session : ' + err.type);
    _closeLiveSession();
  });
}

function _waitAndLaunchHost(qcm, attempts) {
  attempts = attempts || 0;
  if (attempts > 75) return;
  if (typeof AUTH !== 'undefined' && AUTH.user && document.getElementById('main-content')) {
    localStorage.removeItem('hc_host_session_pending');
    /* L'auth-splash (ou tout autre écran d'auth) reste affiché par-dessus
       #main-content tant qu'on ne le masque pas explicitement — ce parcours
       ne passe jamais par _doEnterApp() qui s'en charge normalement. */
    document.querySelectorAll('.auth-screen').forEach(function(s){ s.classList.add('hidden'); });
    var gate = document.getElementById('site-gate');
    if (gate) gate.style.display = 'none';
    _doLaunchLiveSession(qcm);
    return;
  }
  setTimeout(function() { _waitAndLaunchHost(qcm, attempts + 1); }, 200);
}

function _handleStudentData(conn, data) {
  if (data.type === 'join') {
    conn._studentName = data.name;
    _liveStudents[data.name] = {
      conn: conn, name: data.name, answers: [],
      currentQ: 0, done: false, score: 0, connected: true,
      total: _liveSession.questions.length,
    };
    _refreshLiveDashboard();
  } else if (data.type === 'answer') {
    var st = _liveStudents[conn._studentName];
    if (!st) return;
    st.answers[data.qIdx] = { chosen: data.chosen, ok: data.ok };
    st.currentQ = data.qIdx + 1;
    st.score = st.answers.filter(function(a){ return a && a.ok; }).length;
    _refreshLiveDashboard();
  } else if (data.type === 'done') {
    var st2 = _liveStudents[conn._studentName || data.name];
    if (!st2) return;
    st2.done = true;
    st2.score = data.score;
    st2.pct   = data.pct;
    /* Sauvegarder le résultat côté prof */
    if (_liveSession) {
      _qcmSaveResult(_liveSession.id, {
        name: data.name, score: data.score, total: data.total,
        pct: data.pct, ok: data.ok, wrong: data.wrong,
        penalty: data.penalty, date: Date.now(),
        qcmTitle: _liveSession.title,
        answers: st2.answers || []
      });
    }
    _refreshLiveDashboard();
  }
}

function _closeLiveSession() {
  if (_livePeer) { _livePeer.destroy(); _livePeer = null; }
  _liveSession  = null;
  _liveStudents = {};
  if (typeof authToast === 'function') authToast('Session fermée.');
  openQCMManager();
}

function _renderLiveDashboard() {
  var qcm = _liveSession;
  var topTitle = document.getElementById('top-title');
  if (topTitle) topTitle.textContent = '🔴 Session en direct';

  var base = window.location.href.split('?')[0].split('#')[0];
  var url  = base + '?joinCode=' + encodeURIComponent(qcm.id);

  var html = '<div id="live-dashboard" style="padding-bottom:40px">'

    /* Header */
    + '<div style="background:linear-gradient(135deg,#8B0000,#C0392B);padding:14px 16px">'
      + '<div style="display:flex;align-items:center;justify-content:space-between">'
        + '<div>'
          + '<div style="font-size:11px;color:rgba(255,255,255,.7);margin-bottom:2px">🔴 Session en direct</div>'
          + '<div style="font-size:16px;font-weight:800;color:#fff">' + qcm.title + '</div>'
        + '</div>'
        + '<div style="display:flex;gap:6px">'
          + '<button onclick="_qcmExportCSV(\'' + qcm.id + '\',\'' + qcm.title.replace(/'/g,"\\'") + '\')" style="padding:7px 12px;background:rgba(255,255,255,.15);color:#fff;border:1.5px solid rgba(255,255,255,.3);border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;font-family:var(--f-body)">⬇ CSV</button>'
          + '<button onclick="_closeLiveSession()" style="padding:7px 14px;background:rgba(255,255,255,.2);color:#fff;border:1.5px solid rgba(255,255,255,.4);border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;font-family:var(--f-body)">⏹ Fermer</button>'
        + '</div>'
      + '</div>'
    + '</div>'

    /* Code + QR */
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:12px 12px 0">'
      + '<div style="background:var(--c-primary-l);border:2px solid var(--c-primary);border-radius:12px;padding:12px;text-align:center">'
        + '<div style="font-size:9px;font-weight:800;color:var(--c-primary);text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px">Code</div>'
        + '<div style="font-size:28px;font-weight:900;color:var(--c-primary);letter-spacing:.2em;font-family:monospace">' + qcm.id + '</div>'
      + '</div>'
      + '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:8px;text-align:center">'
        + '<div id="live-qr" style="display:inline-block"></div>'
      + '</div>'
    + '</div>'

    /* Contrôles style en live */
    + '<div style="padding:10px 12px 0">'
      + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;margin-bottom:6px">Options en direct</div>'
      + '<div id="live-style-controls" style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;overflow:hidden"></div>'
    + '</div>'

    /* Élèves connectés */
    + '<div style="padding:10px 12px 0">'
      + '<div id="live-students-panel"></div>'
    + '</div>'

  + '</div>';

  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0, 0);

  /* QR code */
  setTimeout(function() {
    var qrEl = document.getElementById('live-qr');
    if (!qrEl) return;
    if (window.QRCode) {
      new QRCode(qrEl, { text: url, width: 100, height: 100, colorDark: '#0A5040', colorLight: '#ffffff' });
    } else {
      qrEl.innerHTML = '<img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&color=0A5040&data=' + encodeURIComponent(url) + '" width="100" height="100">';
    }
  }, 100);

  _refreshLiveDashboard();
}

function _qcmLiveBroadcast(data) {
  Object.values(_liveStudents).forEach(function(st) {
    if (st.conn && st.conn.open) {
      try { st.conn.send(data); } catch(e) {}
    }
  });
}

function _renderLiveStyleControls() {
  var ctrl = document.getElementById('live-style-controls');
  if (!ctrl || !_liveSession) return;
  var st = _liveSession.style || {};

  var rows = [
    { key:'hideResults', label:'Masquer les résultats', ico:'🙈' },
    { key:'hideExpl',    label:'Masquer les explications', ico:'💬' },
    { key:'randomOrder', label:'Ordre aléatoire', ico:'🔀' },
    { key:'penalty',     label:'Pénalité −1 faute', ico:'⚠️' },
  ];

  ctrl.innerHTML = rows.map(function(r, i) {
    var on = !!st[r.key];
    var border = i < rows.length - 1 ? 'border-bottom:1px solid var(--c-border);' : '';
    return '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;' + border + '">'
      + '<div style="font-size:12px;font-weight:600;color:var(--c-text)">' + r.ico + ' ' + r.label + '</div>'
      + '<button onclick="_qcmLiveToggle(\'' + r.key + '\')" id="live-toggle-' + r.key + '" style="width:42px;height:24px;border-radius:12px;border:none;background:' + (on?'var(--c-primary)':'var(--c-border)') + ';cursor:pointer;position:relative;transition:background .2s;flex-shrink:0">'
        + '<span style="position:absolute;top:2px;' + (on?'right:2px':'left:2px') + ';width:20px;height:20px;border-radius:50%;background:#fff;transition:all .2s"></span>'
      + '</button>'
    + '</div>';
  }).join('');
}

function _qcmLiveToggle(key) {
  if (!_liveSession) return;
  if (!_liveSession.style) _liveSession.style = {};
  _liveSession.style[key] = !_liveSession.style[key];
  var on = _liveSession.style[key];
  /* Mise à jour visuelle immédiate */
  var btn = document.getElementById('live-toggle-' + key);
  if (btn) {
    btn.style.background = on ? 'var(--c-primary)' : 'var(--c-border)';
    var dot = btn.querySelector('span');
    if (dot) { dot.style.right = on ? '2px' : ''; dot.style.left = on ? '' : '2px'; }
  }
  /* Diffuser aux élèves */
  _qcmLiveBroadcast({ type: 'styleUpdate', style: _liveSession.style });
  if (typeof authToast === 'function') authToast((on ? '🔒 ' : '🔓 ') + (key === 'hideResults' ? 'Résultats ' + (on?'masqués':'visibles') : key === 'hideExpl' ? 'Explications ' + (on?'masquées':'visibles') : 'Ordre ' + (on?'aléatoire':'fixe')));
}

function _refreshLiveDashboard() {
  var panel = document.getElementById('live-students-panel');
  if (!panel) return;

  _renderLiveStyleControls();

  var students = Object.values(_liveStudents);
  var total = _liveSession ? _liveSession.questions.length : 0;

  if (!students.length) {
    panel.innerHTML = '<div style="text-align:center;padding:28px 16px;color:var(--c-text-4)">'
      + '<div style="font-size:32px;margin-bottom:8px">⏳</div>'
      + '<div style="font-size:13px;font-weight:600">En attente d\'élèves…</div>'
      + '<div style="font-size:11px;margin-top:4px">Partagez le code ou le QR code</div>'
    + '</div>';
    return;
  }

  var html = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">'
    + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em">'
      + students.length + ' élève(s) · ' + students.filter(function(s){ return s.done; }).length + ' terminé(s)'
    + '</div>'
  + '</div>';

  students.forEach(function(st) {
    var pct = total ? Math.round(st.score / total * 100) : 0;
    var prog = total ? Math.round(st.currentQ / total * 100) : 0;
    var barColor = st.done ? (pct >= 80 ? '#166038' : pct >= 50 ? '#886000' : '#A82018') : 'var(--c-primary)';
    var penalty = _liveSession && _liveSession.style && _liveSession.style.penalty;
    var displayScore = penalty ? Math.max(0, st.score - (st.answers.filter(function(a){ return a && !a.ok; }).length)) : st.score;
    var statusBadge = st.done
      ? '<span style="background:' + (pct>=80?'#EAF8F0':pct>=50?'#FDF0D8':'#FDECEA') + ';color:' + (pct>=80?'#166038':pct>=50?'#886000':'#A82018') + ';font-size:10px;font-weight:800;padding:2px 8px;border-radius:10px">' + (penalty ? displayScore + 'pt' : pct + '%') + '</span>'
      : '<span style="background:var(--c-primary-l);color:var(--c-primary);font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px">Q' + st.currentQ + '/' + total + '</span>';

    html += '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:12px 14px;margin-bottom:8px">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">'
        + '<div style="display:flex;align-items:center;gap:8px">'
          + '<div style="width:10px;height:10px;border-radius:50%;background:' + (st.connected ? '#22C55E' : '#999') + '"></div>'
          + '<div style="font-size:13px;font-weight:700;color:var(--c-text)">' + st.name + '</div>'
        + '</div>'
        + statusBadge
      + '</div>'
      /* Barre de progression */
      + '<div style="height:6px;background:var(--c-border);border-radius:3px;overflow:hidden">'
        + '<div style="height:100%;width:' + (st.done ? pct : prog) + '%;background:' + barColor + ';border-radius:3px;transition:width .4s"></div>'
      + '</div>'
      /* Détail réponses */
      + (st.answers.length ? '<div style="margin-top:8px;display:flex;gap:4px;flex-wrap:wrap">'
          + st.answers.map(function(a, i) {
              return '<div title="Q' + (i+1) + '" style="width:22px;height:22px;border-radius:4px;background:' + (a.ok?'#EAF8F0':'#FDECEA') + ';border:1px solid ' + (a.ok?'#166038':'#A82018') + ';display:flex;align-items:center;justify-content:center;font-size:10px">' + (a.ok?'✓':'✗') + '</div>';
            }).join('')
          + '</div>' : '')
    + '</div>';
  });

  panel.innerHTML = html;
}

/* ═══════════════════════════════════════════════════
   SESSION EN DIRECT — CÔTÉ ÉLÈVE (PeerJS)
═══════════════════════════════════════════════════ */
var _studentConn = null;

function _connectToProfPeer(sessionId, studentName, onSessionReceived) {
  if (!window.Peer) { onSessionReceived(null); return; }
  var peer = new Peer();
  peer.on('open', function() {
    var conn = peer.connect(_qcmPeerId(sessionId), { reliable: true });
    conn.on('open', function() {
      _studentConn = conn;
      conn.send({ type: 'join', name: studentName });
    });
    conn.on('data', function(data) {
      if (data.type === 'session') {
        onSessionReceived(data.qcm);
      } else if (data.type === 'styleUpdate') {
        /* Mise à jour style en direct */
        if (_qcmSession) _qcmSession.style = data.style;
      }
    });
    conn.on('error', function() { onSessionReceived(null); });
    setTimeout(function() { if (!_studentConn) onSessionReceived(null); }, 5000);
  });
  peer.on('error', function() { onSessionReceived(null); });
}

function _qcmSendToProf(data) {
  if (_studentConn && _studentConn.open) {
    try { _studentConn.send(data); } catch(e) {}
  }
}

/* ─── Modifier le démarrage élève pour tenter la connexion live ─── */
function _qcmStartWithName() {
  var name = (document.getElementById('qcm-student-name') || {}).value || '';
  if (!name.trim()) { if (typeof authToast === 'function') authToast('Indiquez votre nom.'); return; }
  _qcmStudentState.studentName = name.trim();

  /* Tenter connexion live au prof */
  var sessionId = _qcmSession ? _qcmSession.id : null;
  if (sessionId && window.Peer) {
    var mc = document.getElementById('main-content');
    if (mc) mc.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:12px;color:var(--c-text-3)">'
      + '<div style="font-size:32px">🔗</div>'
      + '<div style="font-size:13px">Connexion à la session du professeur…</div>'
    + '</div>';

    _connectToProfPeer(sessionId, name.trim(), function(liveSession) {
      if (liveSession) {
        /* Le prof est en direct : utiliser ses questions */
        _qcmSession = Object.assign({}, _qcmSession, liveSession);
        if (typeof authToast === 'function') authToast('Connecté à la session en direct ✓');
      }
      _renderStudentQCM();
    });
  } else {
    _renderStudentQCM();
  }
}

/* ═══════════════════════════════════════════════════
   HISTORIQUE DES SESSIONS — PAGE RÉSULTATS
═══════════════════════════════════════════════════ */
function _qcmShowHistory(qcmId, qcmTitle) {
  var results = _qcmGetResults(qcmId);
  var topTitle = document.getElementById('top-title');
  if (topTitle) topTitle.textContent = '📊 Résultats — ' + qcmTitle;

  var avgPct = results.length ? Math.round(results.reduce(function(s,r){ return s + (r.pct||0); }, 0) / results.length) : 0;
  var best   = results.length ? Math.max.apply(null, results.map(function(r){ return r.pct||0; })) : 0;
  var html = '<div style="padding-bottom:60px">'
    + '<div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px">'
      + '<button onclick="openQCMManager()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:34px;height:34px;font-size:16px;cursor:pointer">←</button>'
      + '<div style="flex:1">'
        + '<div style="font-size:16px;font-weight:800;color:var(--c-text)">📊 ' + qcmTitle + '</div>'
        + '<div style="font-size:11px;color:var(--c-text-3)">' + results.length + ' résultat(s) enregistré(s)</div>'
      + '</div>'
      + (results.length ? '<button onclick="_qcmExportCSV(\'' + qcmId + '\',\'' + qcmTitle.replace(/'/g,"\\'") + '\')" style="padding:6px 12px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--f-body)">⬇ CSV</button>' : '')
    + '</div>';

  if (!results.length) {
    html += '<div style="text-align:center;padding:48px 20px;color:var(--c-text-4)">'
      + '<div style="font-size:40px;margin-bottom:12px">📭</div>'
      + '<div style="font-size:13px;font-weight:600">Aucun résultat enregistré</div>'
      + '<div style="font-size:11px;margin-top:6px;line-height:1.7">Les résultats sont sauvegardés automatiquement<br>lors des sessions en direct.</div>'
    + '</div>';
  } else {
    /* Statistiques globales */
    html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:0 12px 12px">'
      + _qcmStatCard('👥', results.length, 'Élèves')
      + _qcmStatCard('📈', avgPct + '%', 'Moy.')
      + _qcmStatCard('🏆', best + '%', 'Meilleur')
    + '</div>';

    /* Barre de distribution */
    html += _qcmDistributionBar(results);

    /* Liste des résultats */
    html += '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;padding:4px 16px 8px">Détail par élève</div>';
    results.forEach(function(r) {
      var pct = r.pct || 0;
      var col = pct >= 80 ? '#166038' : pct >= 50 ? '#886000' : '#A82018';
      var bg  = pct >= 80 ? '#EAF8F0' : pct >= 50 ? '#FDF0D8' : '#FDECEA';
      var d   = r.date ? new Date(r.date).toLocaleDateString('fr-FR', {day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}) : '';
      html += '<div style="margin:0 12px 8px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:12px 14px">'
        + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">'
          + '<div style="font-size:13px;font-weight:700;color:var(--c-text)">' + (r.name || '?') + '</div>'
          + '<span style="background:' + bg + ';color:' + col + ';font-size:12px;font-weight:800;padding:3px 10px;border-radius:10px">' + pct + '%</span>'
        + '</div>'
        + '<div style="height:6px;background:var(--c-border);border-radius:3px;overflow:hidden;margin-bottom:6px">'
          + '<div style="height:100%;width:' + pct + '%;background:' + col + ';border-radius:3px"></div>'
        + '</div>'
        + '<div style="font-size:11px;color:var(--c-text-3);display:flex;gap:12px">'
          + '<span>✓ ' + (r.ok||0) + '/' + (r.total||0) + '</span>'
          + (r.penalty ? '<span>⚠ −' + (r.wrong||0) + ' faute(s)</span>' : '')
          + '<span style="margin-left:auto">' + d + '</span>'
        + '</div>'
        + (r.answers && r.answers.length ? '<div style="margin-top:8px;display:flex;gap:3px;flex-wrap:wrap">'
            + r.answers.map(function(a,i){
                return '<div title="Q'+(i+1)+'" style="width:20px;height:20px;border-radius:3px;background:'+(a.ok?'#EAF8F0':'#FDECEA')+';border:1px solid '+(a.ok?'#166038':'#A82018')+';display:flex;align-items:center;justify-content:center;font-size:9px">'+(a.ok?'✓':'✗')+'</div>';
              }).join('') + '</div>' : '')
      + '</div>';
    });
  }

  html += '<div style="height:40px"></div></div>';
  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0, 0);
}

function _qcmStatCard(ico, val, lbl) {
  return '<div style="background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:12px;text-align:center">'
    + '<div style="font-size:20px;margin-bottom:4px">' + ico + '</div>'
    + '<div style="font-size:18px;font-weight:800;color:var(--c-primary)">' + val + '</div>'
    + '<div style="font-size:10px;color:var(--c-text-4);margin-top:2px">' + lbl + '</div>'
  + '</div>';
}

function _qcmDistributionBar(results) {
  var buckets = [0,0,0,0]; /* <25 / 25-50 / 50-80 / ≥80 */
  results.forEach(function(r) {
    var p = r.pct||0;
    if (p < 25) buckets[0]++;
    else if (p < 50) buckets[1]++;
    else if (p < 80) buckets[2]++;
    else buckets[3]++;
  });
  var n = results.length;
  var cols = ['#A82018','#C8A000','#886000','#166038'];
  var lbls = ['< 25%','25–50%','50–80%','≥ 80%'];
  var bars = buckets.map(function(b,i) {
    var w = n ? Math.round(b/n*100) : 0;
    return '<div style="flex:1;text-align:center">'
      + '<div style="font-size:10px;color:var(--c-text-4);margin-bottom:4px">' + lbls[i] + '</div>'
      + '<div style="height:40px;display:flex;align-items:flex-end;justify-content:center">'
        + '<div style="width:28px;background:' + cols[i] + ';border-radius:3px 3px 0 0;height:' + Math.max(w,4) + '%;opacity:.85"></div>'
      + '</div>'
      + '<div style="font-size:11px;font-weight:700;color:' + cols[i] + ';margin-top:2px">' + b + '</div>'
    + '</div>';
  }).join('');
  return '<div style="margin:0 12px 12px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:12px">'
    + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;margin-bottom:10px">Distribution des scores</div>'
    + '<div style="display:flex;gap:4px;align-items:flex-end">' + bars + '</div>'
  + '</div>';
}

/* ─── Export CSV ─── */
function _qcmExportCSV(qcmId, qcmTitle) {
  var results = _qcmGetResults(qcmId);
  if (!results.length) { if (typeof authToast === 'function') authToast('Aucun résultat à exporter.'); return; }
  var rows = ['Nom,Score (%),Bonnes,Mauvaises,Total,Pénalité,Date'];
  results.forEach(function(r) {
    var d = r.date ? new Date(r.date).toLocaleString('fr-FR') : '';
    rows.push([
      '"' + (r.name||'').replace(/"/g,'""') + '"',
      r.pct || 0,
      r.ok || 0,
      r.wrong || 0,
      r.total || 0,
      r.penalty ? 'Oui' : 'Non',
      '"' + d + '"'
    ].join(','));
  });
  var csv = rows.join('\n');
  var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href = url;
  a.download = 'QCM_' + (qcmTitle || qcmId).replace(/[^a-zA-Z0-9]/g,'_') + '_resultats.csv';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  if (typeof authToast === 'function') authToast('Export CSV téléchargé ✓');
}

/* ═══════════════════════════════════════════════════
   PAGE "REJOINDRE UN QCM" — CÔTÉ ÉLÈVE
═══════════════════════════════════════════════════ */
function openQCMJoinPage() {
  var mc = document.getElementById('main-content');
  var topTitle = document.getElementById('top-title');
  if (topTitle) topTitle.textContent = '🎓 Rejoindre un QCM';

  var isProf = typeof AUTH !== 'undefined' && AUTH.user && (AUTH.user.plan === 'etab' || AUTH.user.plan === 'admin');
  var profName = isProf ? (AUTH.user.name || AUTH.user.email) : '';

  mc.innerHTML = '<div style="padding:0 var(--s-4) var(--s-6)">'

    /* Hero */
    + '<div style="text-align:center;padding:var(--s-5) 0 var(--s-4)">'
      + '<div style="font-size:48px;margin-bottom:var(--s-2)">🎓</div>'
      + '<div style="font-family:var(--f-display);font-size:20px;color:var(--c-text);margin-bottom:var(--s-2)">Rejoindre un QCM</div>'
      + '<div style="font-size:12px;color:var(--c-text-3);line-height:1.6">Entrez le code à 6 lettres donné par votre professeur.</div>'
    + '</div>'

    /* ── Bloc élève ── */
    + '<div style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-xl);padding:var(--s-4);margin-bottom:var(--s-3)">'
      + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;text-align:center;margin-bottom:var(--s-3)">🎓 Espace élève</div>'
      + '<input id="qcm-join-code" type="text" maxlength="6" placeholder="XXXXXX" autocomplete="off" autocorrect="off" autocapitalize="characters" spellcheck="false"'
        + ' style="width:100%;padding:16px;border:2px solid var(--c-border);border-radius:var(--r-lg);font-family:monospace;font-size:28px;font-weight:900;text-align:center;letter-spacing:.2em;text-transform:uppercase;box-sizing:border-box;color:var(--c-primary);outline:none"'
        + ' oninput="this.value=this.value.toUpperCase()"'
        + ' onkeydown="if(event.key===\'Enter\')_qcmJoinByCode()">'
      + '<div style="margin-top:var(--s-3)">'
        + '<input id="qcm-join-name" type="text" placeholder="Votre nom et prénom" autocomplete="name"'
          + ' style="width:100%;padding:12px 14px;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-family:var(--f-body);font-size:14px;box-sizing:border-box;color:var(--c-text);outline:none">'
      + '</div>'
    + '</div>'

    + '<button onclick="_qcmJoinByCode()" style="width:100%;padding:14px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-lg);font-size:14px;font-weight:800;cursor:pointer;font-family:var(--f-body)">▶ Rejoindre la session</button>'

    + '<div id="qcm-join-status" style="margin-top:var(--s-3);text-align:center;font-size:12px;color:var(--c-text-3);min-height:36px"></div>'

    /* ── Séparateur ── */
    + '<div style="display:flex;align-items:center;gap:var(--s-3);margin:var(--s-4) 0">'
      + '<div style="flex:1;height:1px;background:var(--c-border)"></div>'
      + '<div style="font-size:11px;color:var(--c-text-4);white-space:nowrap">Accès professeur</div>'
      + '<div style="flex:1;height:1px;background:var(--c-border)"></div>'
    + '</div>'

    /* ── Bloc prof : déjà connecté OU formulaire de connexion ── */
    + (isProf
        ? _qcmProfConnectedBlock(profName)
        : _qcmProfLoginBlock(AUTH && AUTH.user ? AUTH.user.email : ''))

    + '<div style="height:40px"></div>'
  + '</div>';

  window.scrollTo(0, 0);
  setTimeout(function() { var el = document.getElementById('qcm-join-code'); if (el) el.focus(); }, 100);
}

/* ─── Bloc affiché quand le prof est déjà connecté : actions rapides ─── */
function _qcmProfConnectedBlock(name) {
  var actions = [
    { ico: '📝', label: 'Mes QCM', sub: 'Gérer mes QCM · Lancer une session en direct', fn: 'openQCMManager()' },
    { ico: '➕', label: 'Créer un nouveau QCM', sub: 'Builder de questions personnalisées', fn: 'openQCMBuilder()' },
    { ico: '📚', label: 'Cours & fiches de révision', sub: 'Parcourir les formations · Télécharger en PDF', fn: 'renderCours()' },
  ];
  var cards = actions.map(function(a) {
    return '<div onclick="' + a.fn + '" style="background:var(--c-surface-2);border-radius:var(--r-md);padding:12px 14px;display:flex;align-items:center;gap:12px;cursor:pointer;margin-bottom:8px">'
      + '<div style="font-size:22px">' + a.ico + '</div>'
      + '<div style="flex:1"><div style="font-size:13px;font-weight:700;color:#fff">' + a.label + '</div>'
      + '<div style="font-size:10.5px;color:rgba(255,255,255,.65);margin-top:1px">' + a.sub + '</div></div>'
      + '<span style="color:rgba(255,255,255,.5);font-size:16px">›</span>'
    + '</div>';
  }).join('');

  return '<div style="background:linear-gradient(135deg,var(--c-primary),#0A5040);border-radius:var(--r-xl);padding:var(--s-4)">'
    + '<div style="text-align:center;margin-bottom:var(--s-3)">'
      + '<div style="font-size:28px;margin-bottom:var(--s-2)">✅</div>'
      + '<div style="font-size:14px;font-weight:800;color:#fff;margin-bottom:4px">Connecté en tant que professeur</div>'
      + '<div style="font-size:12px;color:rgba(255,255,255,.75)">' + name + '</div>'
    + '</div>'
    + cards
  + '</div>';
}

/* ─── Formulaire de connexion professeur intégré ─── */
function _qcmProfLoginBlock(prefillEmail) {
  return '<div style="background:var(--c-surface);border:1.5px solid var(--c-border);border-radius:var(--r-xl);padding:var(--s-4)">'
    + '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;text-align:center;margin-bottom:var(--s-3)">📝 Connexion professeur</div>'
    + '<div style="font-size:12px;color:var(--c-text-3);text-align:center;margin-bottom:var(--s-3);line-height:1.6">Connectez-vous avec vos identifiants pour accéder à votre espace QCM.</div>'
    + '<input id="qcm-prof-email" type="email" placeholder="Adresse e-mail" autocomplete="email"'
      + ' value="' + (prefillEmail || '') + '"'
      + ' style="width:100%;padding:11px 14px;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;box-sizing:border-box;margin-bottom:var(--s-2);color:var(--c-text);outline:none">'
    + '<input id="qcm-prof-pwd" type="password" placeholder="Mot de passe" autocomplete="current-password"'
      + ' style="width:100%;padding:11px 14px;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-family:var(--f-body);font-size:13px;box-sizing:border-box;margin-bottom:var(--s-2);color:var(--c-text);outline:none"'
      + ' onkeydown="if(event.key===\'Enter\')_qcmProfLogin()">'
    + '<label style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--c-text-3);cursor:pointer;margin-bottom:var(--s-3)">'
      + '<input type="checkbox" id="qcm-prof-remember" style="width:15px;height:15px;accent-color:var(--c-primary)">'
      + 'Se souvenir de moi'
    + '</label>'
    + '<div id="qcm-prof-login-err" style="display:none;color:var(--c-danger);font-size:11px;text-align:center;margin-bottom:var(--s-2)">Email ou mot de passe incorrect.</div>'
    + '<button onclick="_qcmProfLogin()" style="width:100%;padding:13px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-lg);font-size:13px;font-weight:800;cursor:pointer;font-family:var(--f-body)">🔑 Se connecter &amp; accéder aux QCM</button>'
  + '</div>';
}

/* ─── Authentification professeur depuis la page QCM (via Supabase) ─── */
function _qcmProfLogin() {
  var email      = ((document.getElementById('qcm-prof-email') || {}).value || '').trim().toLowerCase();
  var pwd        = ((document.getElementById('qcm-prof-pwd')   || {}).value || '');
  var rememberEl = document.getElementById('qcm-prof-remember');
  var rememberMe = rememberEl && rememberEl.checked;
  var errEl = document.getElementById('qcm-prof-login-err');
  var btn   = document.querySelector('#main-content button[onclick="_qcmProfLogin()"]');

  if (!email || !pwd) {
    if (errEl) { errEl.textContent = 'Remplissez tous les champs.'; errEl.style.display = 'block'; }
    return;
  }
  if (errEl) errEl.style.display = 'none';
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Vérification…'; }

  var _doSuccess = function(user) {
    AUTH.user = user;
    DataStore.session.setCurrent({ email: user.email, isAdmin: user.isAdmin || false });
    if (rememberMe) DataStore.session.setRemember({ email: user.email, supa: true });
    else DataStore.session.clearRemember();
    if (typeof renderSidebarContent === 'function') renderSidebarContent();
    if (typeof updateFabSave === 'function') updateFabSave();
    if (typeof authToast === 'function') authToast('Connecté en tant que professeur ✓');
    setTimeout(openQCMManager, 300);
  };
  var _doFail = function(msg) {
    if (btn) { btn.disabled = false; btn.textContent = '🔑 Se connecter & accéder aux QCM'; }
    if (errEl) { errEl.textContent = msg || 'Email ou mot de passe incorrect.'; errEl.style.display = 'block'; }
  };

  if (!SupaDB) { _doFail('Connexion impossible (hors-ligne).'); return; }

  SupaDB.auth.signInWithPassword({ email: email, password: pwd })
    .then(function(res) {
      if (res.error) throw new Error('auth');
      return _fetchProfileWithRetry(res.data.user.id);
    })
    .then(function(res) {
      var p = res.data || {};
      if (p.plan !== 'etab' && p.plan !== 'admin') throw new Error('plan');
      _doSuccess({
        email:   p.email   || email,
        name:    p.name    || email,
        plan:    p.plan,
        isAdmin: p.is_admin || false,
        profile: p.profile || ''
      });
    })
    .catch(function(err) {
      if (err && err.message === 'plan') {
        _doFail('Accès réservé aux comptes Établissement et Administrateur.');
      } else {
        _doFail('Email ou mot de passe incorrect.');
      }
    });
}

function _qcmJoinByCode() {
  var code = ((document.getElementById('qcm-join-code') || {}).value || '').trim().toUpperCase();
  var name = ((document.getElementById('qcm-join-name') || {}).value || '').trim();
  var status = document.getElementById('qcm-join-status');

  if (code.length < 6) { if (status) status.innerHTML = '<span style="color:var(--c-danger)">⚠ Entrez un code à 6 caractères.</span>'; return; }
  if (!name) { if (status) status.innerHTML = '<span style="color:var(--c-danger)">⚠ Indiquez votre nom.</span>'; return; }
  if (!window.Peer) { if (status) status.innerHTML = '<span style="color:var(--c-danger)">⚠ PeerJS non disponible. Vérifiez votre connexion internet.</span>'; return; }

  if (status) status.innerHTML = '<span style="color:var(--c-primary)">🔗 Connexion à la session <strong>' + code + '</strong>…</span>';

  var btn = document.querySelector('#main-content button[onclick="_qcmJoinByCode()"]');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Connexion…'; }

  _connectToProfPeer(code, name, function(liveSession) {
    if (btn) { btn.disabled = false; btn.textContent = '▶ Rejoindre la session'; }
    if (liveSession) {
      if (status) status.innerHTML = '<span style="color:var(--c-ok)">✓ Session trouvée ! Démarrage…</span>';
      var session = Object.assign({}, liveSession);
      _qcmStudentState = { idx: 0, answers: [], isPreview: false, studentName: name };
      _qcmSession = session;
      setTimeout(_renderStudentQCM, 500);
    } else {
      if (status) status.innerHTML = '<span style="color:var(--c-danger)">✗ Aucune session active avec le code <strong>' + code + '</strong>.<br><span style="font-size:11px">Vérifiez le code ou demandez au professeur de lancer la session en direct.</span></span>';
    }
  });
}

/* ═══════════════════════════════════════════════════
   ÉDITEUR D'EXERCICES PROF
═══════════════════════════════════════════════════ */

var _exFormData = null;

function _getAllProfExercices() {
  try { return JSON.parse(localStorage.getItem('hc_prof_exercices') || '[]'); } catch(e) { return []; }
}

function _saveProfExercices(arr) {
  try { localStorage.setItem('hc_prof_exercices', JSON.stringify(arr)); } catch(e) {}
}

function openProfExercices() {
  if (!_qcmCanCreate()) {
    if (typeof authToast === 'function') authToast('Accès réservé aux comptes Établissement et Administrateur.');
    return;
  }
  if (typeof closeSidebar === 'function') closeSidebar();

  var exs = _getAllProfExercices();
  var topTitle = document.getElementById('top-title');
  if (topTitle) topTitle.textContent = '📝 Mes exercices';

  var diffColors = { facile: '#166038', moyen: '#886000', difficile: '#A82018' };
  var diffBg     = { facile: '#EAF8F0', moyen: '#FDF0D8', difficile: '#FDECEA' };

  var html = '<div style="padding-bottom:40px">'
    + '<div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px">'
      + '<button onclick="openQCMManager()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:34px;height:34px;font-size:16px;cursor:pointer">←</button>'
      + '<div style="font-size:20px;font-weight:800;color:var(--c-text)">📝 Mes exercices</div>'
    + '</div>'
    + '<div style="padding:0 12px 12px">'
      + '<button onclick="openProfExerciceForm(-1)" style="width:100%;padding:13px;background:var(--c-primary);color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:800;cursor:pointer;font-family:var(--f-body);display:flex;align-items:center;justify-content:center;gap:8px">➕ Créer un exercice</button>'
    + '</div>';

  if (!exs.length) {
    html += '<div style="text-align:center;padding:40px 20px;color:var(--c-text-4)">'
      + '<div style="font-size:36px;margin-bottom:10px">📋</div>'
      + '<div style="font-size:13px;font-weight:600">Aucun exercice créé</div>'
      + '<div style="font-size:11px;margin-top:6px">Créez des exercices personnalisés à exporter en PDF pour vos élèves</div>'
    + '</div>';
  } else {
    html += '<div style="font-size:10px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.07em;padding:0 16px 8px">Mes exercices (' + exs.length + ')</div>';
    exs.forEach(function(ex, i) {
      var dc = diffColors[ex.difficulte] || '#555';
      var db = diffBg[ex.difficulte]    || '#f0f0f0';
      html += '<div style="margin:0 12px 8px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:14px;overflow:hidden">'
        + '<div style="padding:14px 16px">'
          + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">'
            + '<div style="flex:1">'
              + '<div style="font-size:14px;font-weight:800;color:var(--c-text);margin-bottom:4px">' + ex.titre + '</div>'
              + (ex.source ? '<div style="font-size:11px;color:var(--c-text-3);margin-bottom:6px">' + ex.source + '</div>' : '')
              + '<div style="display:flex;gap:6px;flex-wrap:wrap">'
                + '<span style="font-size:10px;font-weight:700;color:' + dc + ';background:' + db + ';border-radius:20px;padding:2px 8px">' + (ex.difficulte || '') + '</span>'
                + '<span style="font-size:10px;color:var(--c-text-4)">' + (ex.questions ? ex.questions.length : 0) + ' question(s)</span>'
              + '</div>'
            + '</div>'
            + '<button onclick="_deleteProfExercice(\'' + ex.id + '\')" style="background:none;border:none;color:var(--c-danger,#C0392B);font-size:18px;cursor:pointer;padding:2px 4px;flex-shrink:0">🗑️</button>'
          + '</div>'
        + '</div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border-top:1px solid var(--c-border)">'
          + '<button onclick="openProfExerciceForm(' + i + ')" style="padding:10px 4px;background:none;border:none;border-right:1px solid var(--c-border);font-size:11px;font-weight:700;color:var(--c-text-2);cursor:pointer;font-family:var(--f-body)">✏️ Modifier</button>'
          + '<button onclick="_exportExercicePDF(\'' + ex.id + '\')" style="padding:10px 4px;background:none;border:none;font-size:11px;font-weight:700;color:var(--c-primary);cursor:pointer;font-family:var(--f-body)">🖨️ Exporter PDF</button>'
        + '</div>'
      + '</div>';
    });
  }

  html += '</div>';
  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0, 0);
}

function openProfExerciceForm(idx) {
  var exs = _getAllProfExercices();
  if (idx >= 0 && exs[idx]) {
    _exFormData = JSON.parse(JSON.stringify(exs[idx]));
    _exFormData._editIdx = idx;
  } else {
    _exFormData = { id: 'pex-' + Date.now(), titre: '', source: '', difficulte: 'moyen', enonce: '', questions: [{ texte: '', indice: '', reponse: '' }], _editIdx: -1 };
  }
  _renderProfExerciceForm();
}

function _addExQuestion() {
  _syncExFormInputs();
  _exFormData.questions.push({ texte: '', indice: '', reponse: '' });
  _renderProfExerciceForm();
}

function _removeExQuestion(i) {
  if (_exFormData.questions.length <= 1) return;
  _syncExFormInputs();
  _exFormData.questions.splice(i, 1);
  _renderProfExerciceForm();
}

function _syncExFormInputs() {
  if (!_exFormData) return;
  var t = document.getElementById('ex-form-titre');   if (t) _exFormData.titre = t.value;
  var s = document.getElementById('ex-form-source');  if (s) _exFormData.source = s.value;
  var d = document.getElementById('ex-form-diff');    if (d) _exFormData.difficulte = d.value;
  var e = document.getElementById('ex-form-enonce');  if (e) _exFormData.enonce = e.value;
  _exFormData.questions.forEach(function(q, i) {
    var qt = document.getElementById('ex-q-' + i + '-texte');   if (qt) q.texte = qt.value;
    var qi = document.getElementById('ex-q-' + i + '-indice');  if (qi) q.indice = qi.value;
    var qr = document.getElementById('ex-q-' + i + '-reponse'); if (qr) q.reponse = qr.value;
  });
}

function _renderProfExerciceForm() {
  var d = _exFormData;
  var topTitle = document.getElementById('top-title');
  if (topTitle) topTitle.textContent = d._editIdx >= 0 ? '✏️ Modifier l\'exercice' : '➕ Créer un exercice';

  var html = '<div style="padding-bottom:80px">'
    + '<div style="padding:16px 16px 4px;display:flex;align-items:center;gap:10px">'
      + '<button onclick="openProfExercices()" style="background:var(--c-surface-2);border:none;border-radius:50%;width:34px;height:34px;font-size:16px;cursor:pointer">←</button>'
      + '<div style="font-size:18px;font-weight:800;color:var(--c-text)">' + (d._editIdx >= 0 ? '✏️ Modifier' : '➕ Créer') + ' un exercice</div>'
    + '</div>'
    + '<div style="padding:0 var(--s-4)">'
      + '<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin:14px 0 5px">Titre *</div>'
      + '<input id="ex-form-titre" value="' + _escQ(d.titre) + '" placeholder="Ex: Calcul de pression dans un réseau" style="width:100%;padding:10px 12px;border:1.5px solid var(--c-border);border-radius:10px;font-family:var(--f-body);font-size:13px;box-sizing:border-box">'
      + '<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin:14px 0 5px">Source (optionnel)</div>'
      + '<input id="ex-form-source" value="' + _escQ(d.source) + '" placeholder="Ex: BTS GEMEAU 2024 — Épreuve E4" style="width:100%;padding:10px 12px;border:1.5px solid var(--c-border);border-radius:10px;font-family:var(--f-body);font-size:13px;box-sizing:border-box">'
      + '<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin:14px 0 5px">Difficulté</div>'
      + '<select id="ex-form-diff" style="width:100%;padding:10px 12px;border:1.5px solid var(--c-border);border-radius:10px;font-family:var(--f-body);font-size:13px;box-sizing:border-box;background:var(--c-surface)">'
        + '<option value="facile"'    + (d.difficulte==='facile'    ? ' selected' : '') + '>⭐ Facile</option>'
        + '<option value="moyen"'     + (d.difficulte==='moyen'     ? ' selected' : '') + '>⭐⭐ Moyen</option>'
        + '<option value="difficile"' + (d.difficulte==='difficile' ? ' selected' : '') + '>⭐⭐⭐ Difficile</option>'
      + '</select>'
      + '<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin:14px 0 5px">Énoncé *</div>'
      + '<textarea id="ex-form-enonce" rows="4" placeholder="Décrivez le contexte et les données du problème…" style="width:100%;padding:10px 12px;border:1.5px solid var(--c-border);border-radius:10px;font-family:var(--f-body);font-size:13px;box-sizing:border-box;resize:vertical">' + _escHtml(d.enonce) + '</textarea>'
    + '</div>'
    + '<div style="font-size:11px;font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;padding:14px var(--s-4) 8px">Questions (' + d.questions.length + ')</div>';

  d.questions.forEach(function(q, i) {
    html += '<div style="margin:0 var(--s-4) 10px;background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:14px">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">'
        + '<div style="font-size:12px;font-weight:800;color:var(--c-text)">Question ' + (i+1) + '</div>'
        + (d.questions.length > 1 ? '<button onclick="_removeExQuestion(' + i + ')" style="background:none;border:none;font-size:16px;color:var(--c-danger,#C0392B);cursor:pointer;padding:0">✕</button>' : '')
      + '</div>'
      + '<div style="font-size:11px;font-weight:700;color:var(--c-text-3);margin-bottom:4px">Texte *</div>'
      + '<textarea id="ex-q-' + i + '-texte" rows="2" placeholder="Ex: Calculer la pression au fond du réservoir…" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:12px;box-sizing:border-box;resize:vertical;margin-bottom:8px">' + _escHtml(q.texte) + '</textarea>'
      + '<div style="font-size:11px;font-weight:700;color:var(--c-text-3);margin-bottom:4px">Indice (optionnel)</div>'
      + '<input id="ex-q-' + i + '-indice" value="' + _escQ(q.indice) + '" placeholder="Ex: Utiliser P = ρ·g·h…" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:12px;box-sizing:border-box;margin-bottom:8px">'
      + '<div style="font-size:11px;font-weight:700;color:var(--c-text-3);margin-bottom:4px">Corrigé</div>'
      + '<textarea id="ex-q-' + i + '-reponse" rows="3" placeholder="Détaillez la solution pas à pas…" style="width:100%;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:8px;font-family:var(--f-body);font-size:12px;box-sizing:border-box;resize:vertical">' + _escHtml(q.reponse) + '</textarea>'
    + '</div>';
  });

  html += '<div style="padding:0 var(--s-4) 10px">'
      + '<button onclick="_addExQuestion()" style="width:100%;padding:11px;background:var(--c-surface);border:1.5px dashed var(--c-border);border-radius:10px;font-size:13px;font-weight:700;color:var(--c-text-3);cursor:pointer;font-family:var(--f-body)">➕ Ajouter une question</button>'
    + '</div>'
    + '<div style="position:fixed;bottom:0;left:0;right:0;padding:12px 16px;background:var(--c-bg);border-top:1px solid var(--c-border);display:flex;gap:10px;z-index:100">'
      + '<button onclick="openProfExercices()" style="flex:1;padding:12px;background:var(--c-surface-2);border:1.5px solid var(--c-border);border-radius:10px;font-size:13px;font-weight:700;color:var(--c-text-2);cursor:pointer;font-family:var(--f-body)">Annuler</button>'
      + '<button onclick="_confirmSaveProfExercice()" style="flex:2;padding:12px;background:var(--c-primary);color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:800;cursor:pointer;font-family:var(--f-body)">💾 Enregistrer</button>'
    + '</div>'
  + '</div>';

  document.getElementById('main-content').innerHTML = html;
  window.scrollTo(0, 0);
}

function _escQ(str) { return (str || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }
function _escHtml(str) { return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function _confirmSaveProfExercice() {
  _syncExFormInputs();
  var d = _exFormData;
  if (!d.titre.trim())  { if (typeof authToast === 'function') authToast('Le titre est obligatoire.'); return; }
  if (!d.enonce.trim()) { if (typeof authToast === 'function') authToast('L\'énoncé est obligatoire.'); return; }
  if (!d.questions.some(function(q){ return q.texte.trim(); })) {
    if (typeof authToast === 'function') authToast('Ajoutez au moins une question.'); return;
  }
  var arr = _getAllProfExercices();
  var toSave = { id: d.id, titre: d.titre, source: d.source, difficulte: d.difficulte, enonce: d.enonce, questions: d.questions };
  if (d._editIdx >= 0 && arr[d._editIdx]) { arr[d._editIdx] = toSave; } else { arr.push(toSave); }
  _saveProfExercices(arr);
  _exFormData = null;
  if (typeof authToast === 'function') authToast('Exercice enregistré ✓');
  openProfExercices();
}

function _deleteProfExercice(id) {
  _saveProfExercices(_getAllProfExercices().filter(function(e){ return e.id !== id; }));
  openProfExercices();
}

function _exportExercicePDF(id) {
  var ex = _getAllProfExercices().find(function(e){ return e.id === id; });
  if (!ex) return;
  var win = window.open('', '_blank');
  if (!win) { if (typeof authToast === 'function') authToast('Autorisez les popups pour exporter.'); return; }

  var diffLabel = { facile: 'Facile', moyen: 'Moyen', difficile: 'Difficile' }[ex.difficulte] || '';

  var qHtml = ex.questions.map(function(q, i) {
    var lineH = Math.max(40, Math.ceil((q.texte || '').length / 80) * 8 + 40);
    return '<div style="margin-bottom:20px;page-break-inside:avoid">'
      + '<p style="font-size:13px;font-weight:700;color:#0A5090;margin-bottom:6px">Question ' + (i+1) + '</p>'
      + '<p style="font-size:13px;line-height:1.7;margin-bottom:10px">' + (q.texte || '').replace(/\n/g,'<br>') + '</p>'
      + (q.indice ? '<p style="background:#EEF4FF;border-left:3px solid #0A5090;padding:6px 12px;font-size:12px;color:#0A5090;margin-bottom:10px"><strong>Indice :</strong> ' + q.indice + '</p>' : '')
      + '<div style="height:' + lineH + 'px;border-bottom:1px dashed #bbb"></div>'
    + '</div>';
  }).join('');

  var corrHtml = ex.questions.filter(function(q){ return q.reponse; }).map(function(q, i) {
    return '<div style="margin-bottom:16px;page-break-inside:avoid">'
      + '<p style="font-size:12px;font-weight:700;color:#166038;margin-bottom:4px">Question ' + (i+1) + '</p>'
      + '<p style="font-size:12px;line-height:1.7;white-space:pre-wrap">' + (q.reponse || '').replace(/</g,'&lt;') + '</p>'
    + '</div>';
  }).join('');

  win.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + ex.titre + '</title>'
    + '<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;padding:28px 36px;color:#111;line-height:1.5}'
    + 'h1{font-size:19px;font-weight:900;color:#0A5090;margin-bottom:4px}'
    + '.meta{font-size:11px;color:#666;margin-bottom:18px}'
    + '.enonce{background:#F0F4FB;border-left:4px solid #0A5090;padding:12px 16px;margin-bottom:24px;line-height:1.7}'
    + '.corrige{margin-top:32px;padding-top:16px;border-top:2px solid #0A5090}'
    + '.corrige-title{font-size:15px;font-weight:900;color:#166038;margin-bottom:12px}'
    + '@media print{.corrige{page-break-before:always}}'
    + '</style></head><body>'
    + '<h1>' + ex.titre + '</h1>'
    + '<div class="meta">' + (ex.source ? ex.source + ' &nbsp;·&nbsp; ' : '') + diffLabel + '</div>'
    + '<div class="enonce"><strong>Énoncé</strong><br><br>' + (ex.enonce || '').replace(/\n/g,'<br>') + '</div>'
    + qHtml
    + (corrHtml ? '<div class="corrige"><p class="corrige-title">✅ Corrigé</p>' + corrHtml + '</div>' : '')
    + '</body></html>');
  win.document.close();
  setTimeout(function(){ win.print(); }, 400);
}

/* ═══════════════════════════════════════════════════
   DÉTECTION AUTO au chargement
   - #qcm=  → mode élève (rejoindre session)
   - ?hostQCM= → mode prof (lancer session dans cet onglet)
═══════════════════════════════════════════════════ */
window.addEventListener('load', function() {

  /* Mode élève : URL avec hash #qcm= */
  var hash = window.location.hash;
  if (hash && hash.startsWith('#qcm=')) {
    var encoded = hash.slice(5);
    var session = _qcmDecode(encoded);
    if (session && session.questions && session.questions.length) {
      setTimeout(function() { _startStudentQCM(session, false); }, 800);
    }
    return;
  }

  var params = new URLSearchParams(window.location.search);

  /* Mode élève via QR code : ?joinCode=CODE → ouvre la page rejoindre avec le code pré-rempli */
  var joinCode = params.get('joinCode');
  if (joinCode) {
    history.replaceState({}, '', window.location.pathname);
    setTimeout(function() {
      openQCMJoinPage();
      setTimeout(function() {
        var inp = document.getElementById('qcm-join-code');
        if (inp) { inp.value = decodeURIComponent(joinCode).toUpperCase(); inp.dispatchEvent(new Event('input')); }
      }, 150);
    }, 800);
    return;
  }

  /* Mode prof : URL avec ?hostQCM=ID (nouvel onglet ouvert par _launchLiveSession) */
  var hostId = params.get('hostQCM');
  if (!hostId) return;

  /* Nettoyer l'URL */
  history.replaceState({}, '', window.location.pathname);

  /* Récupérer le QCM depuis localStorage puis attendre que l'app soit prête */
  try {
    var raw = localStorage.getItem('hc_host_session_pending');
    if (!raw) return;
    var pending = JSON.parse(raw);
    if (!pending || pending.qcm.id !== decodeURIComponent(hostId)) return;
    _waitAndLaunchHost(pending.qcm, 0);
  } catch(e) {}
});
