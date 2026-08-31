/* messagerie.js - HydroCalc — layout split WhatsApp */
var _msgState = { view:'list', threadId:null, otherUserId:null, otherName:null, realtimeSub:null, pendingFile:null };

function _mUserId()   { return (_currentUser && _currentUser.id) || null; }
async function _mGetUid() {
  var uid = _mUserId();
  if (uid) return uid;
  if (!SupaDB) return null;
  try {
    var r = await SupaDB.auth.getUser();
    uid = r.data && r.data.user && r.data.user.id;
    if (uid && _currentUser) _currentUser.id = uid;
    if (uid) window._currentUser = _currentUser;
  } catch(e) {}
  return uid || null;
}
function _mUserName() { if (!_currentUser) return 'Anonyme'; return _currentUser.prenom || _currentUser.name || _currentUser.email || 'Utilisateur'; }
function _mCanUse()   { if (!_currentUser) return false; var p=(_currentUser.plan||'').toLowerCase(); return p==='pro'||p==='etab'||p==='admin'; }
function _mEsc(s)     { return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _mToast(msg, color) {
  var t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:'+(color||'#2E7D32')+';color:white;padding:10px 20px;border-radius:20px;font-size:13px;font-weight:700;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.25);pointer-events:none;transition:opacity .4s';
  document.body.appendChild(t);
  setTimeout(function() { t.style.opacity='0'; setTimeout(function(){ t.remove(); }, 400); }, 2000);
}
function _mTimeAgo(iso) {
  if (!iso) return '';
  var diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diff < 60) return 'à l\'instant';
  if (diff < 3600) return Math.floor(diff/60) + ' min';
  if (diff < 86400) return Math.floor(diff/3600) + ' h';
  return new Date(iso).toLocaleDateString('fr-FR', {day:'2-digit',month:'short'});
}

/* ─── Layout principal ─── */
function renderMessagerie() {
  _msgState.view = 'list';
  _msgState.threadId = null;
  try { _mUnsub(); } catch(e) {}
  var mc = document.getElementById('main-content');
  if (!mc) return;

  if (!_mCanUse()) {
    mc.innerHTML = '<div style="padding:var(--s-4);text-align:center">'
      + '<div style="font-size:40px;margin-bottom:12px">&#x1F512;</div>'
      + '<div style="font-size:14px;font-weight:700;color:var(--c-text-1);margin-bottom:6px">Messagerie Pro</div>'
      + '<div style="font-size:13px;color:var(--c-text-3);margin-bottom:20px">Disponible avec un compte Pro.</div>'
      + '<button onclick="showModule(\'settings\')" style="padding:10px 24px;background:#1565C0;color:white;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">&#x2B50; Passer en Pro</button>'
      + '</div><div class="pb-nav"></div>';
    return;
  }

  mc.innerHTML = '<div id="msg-split" style="display:flex;height:100dvh;overflow:hidden">'
    + '<div id="msg-left" style="width:320px;min-width:260px;flex-shrink:0;border-right:1px solid var(--c-border);display:flex;flex-direction:column;overflow:hidden;background:var(--c-bg);transition:transform .2s">'
      + '<div style="padding:14px 16px 10px;border-bottom:1px solid var(--c-border);flex-shrink:0;display:flex;align-items:center;gap:10px;background:var(--c-bg)">'
        + '<div style="flex:1;font-size:16px;font-weight:800;color:var(--c-text-1)">&#x2709; Messagerie</div>'
        + '<button onclick="_mShowNewConvPanel()" title="Nouvelle conversation" style="border:none;background:#1565C0;color:white;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0">+</button>'
        + '<button id="msg-forum-menu-btn" onclick="event.stopPropagation();_mToggleForumMenu()" style="border:none;background:var(--c-bg-2);color:var(--c-text-2);border-radius:8px;padding:5px 9px;font-size:11px;font-weight:700;cursor:pointer;flex-shrink:0">Forum &#9660;</button>'
      + '</div>'
      + '<div id="msg-left-body" style="flex:1;overflow-y:auto">'
        + '<div style="padding:20px;text-align:center;color:var(--c-text-3)">&#x23F3; Chargement...</div>'
      + '</div>'
    + '</div>'
    + '<div id="msg-right" style="flex:1;display:flex;flex-direction:column;overflow:hidden;background:var(--c-bg-2)">'
      + '<div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:var(--c-text-3)">'
        + '<div style="font-size:60px;opacity:.25">&#x1F4AC;</div>'
        + '<div style="font-size:14px;font-weight:600">Sélectionnez une conversation</div>'
        + '<div style="font-size:12px">ou démarrez-en une nouvelle</div>'
      + '</div>'
    + '</div>'
  + '</div>';

  _mInjectSplitStyles();
  _mRenderList();
}

function _mInjectSplitStyles() {
  if (document.getElementById('msg-split-styles')) return;
  var s = document.createElement('style');
  s.id = 'msg-split-styles';
  s.textContent = '@media(max-width:620px){'
    + '#msg-left{width:100% !important;position:absolute;left:0;top:0;bottom:0;z-index:2;}'
    + '#msg-right{width:100% !important;position:absolute;left:0;top:0;bottom:0;z-index:1;}'
    + '#msg-split{position:relative;}'
    + '#msg-split.conv-open #msg-left{transform:translateX(-100%);}'
    + '#msg-split.conv-open #msg-right{z-index:3;}'
    + '}';
  document.head.appendChild(s);
}

/* ─── Liste des conversations (panneau gauche) ─── */
async function _mRenderList() {
  var el = document.getElementById('msg-left-body');
  if (!el) return;

  var uid = await _mGetUid();
  var threads = [], pendingReqs = [];

  if (SupaDB && uid) {
    try {
      var res = await SupaDB.from('message_threads')
        .select('id,user_a_id,user_b_id,user_a_name,user_b_name,last_message,last_message_at,unread_a,unread_b')
        .or('user_a_id.eq.'+uid+',user_b_id.eq.'+uid)
        .order('last_message_at', { ascending: false });
      threads = res.data || [];
    } catch(e) {}
    try {
      var rq = await SupaDB.from('friend_requests').select('id,sender_id,sender_name,created_at').eq('receiver_id', uid).eq('status', 'pending');
      pendingReqs = rq.data || [];
    } catch(e) {}
  }

  var html = '';

  if (pendingReqs.length) {
    html += '<div style="background:rgba(21,101,192,.07);border-bottom:1px solid var(--c-border)">'
      + '<div style="padding:8px 14px 4px;font-size:10px;font-weight:700;color:#1565C0;text-transform:uppercase;letter-spacing:.06em">&#x1F514; Demandes ('+pendingReqs.length+')</div>'
      + pendingReqs.map(function(r) {
          var name = r.sender_name || 'Utilisateur';
          var init = name.charAt(0).toUpperCase();
          return '<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--c-border)">'
            + '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#1565C0,#0D47A1);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:14px;flex-shrink:0">'+_mEsc(init)+'</div>'
            + '<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700;color:var(--c-text-1)">'+_mEsc(name)+'</div><div style="font-size:10px;color:var(--c-text-3)">Demande d\'ami · '+_mTimeAgo(r.created_at)+'</div></div>'
            + '<div style="display:flex;gap:5px;flex-shrink:0">'
              + '<button onclick="_mAcceptRequest(\''+r.id+'\',\''+r.sender_id+'\',\''+_mEsc(name)+'\')" style="border:none;background:#2E7D32;color:white;border-radius:7px;padding:5px 9px;font-size:12px;font-weight:700;cursor:pointer">&#x2714;</button>'
              + '<button onclick="_mRejectRequest(\''+r.id+'\')" style="border:none;background:#C62828;color:white;border-radius:7px;padding:5px 9px;font-size:12px;font-weight:700;cursor:pointer">&#x2715;</button>'
            + '</div>'
          + '</div>';
        }).join('')
    + '</div>';
  }

  if (!threads.length) {
    html += '<div style="padding:32px 20px;text-align:center;color:var(--c-text-3)">'
      + '<div style="font-size:36px;margin-bottom:10px;opacity:.4">&#x1F4AC;</div>'
      + '<div style="font-size:13px">Aucune conversation.</div>'
      + '<div style="margin-top:12px"><button onclick="_mShowNewConvPanel()" style="padding:8px 18px;background:#1565C0;color:white;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer">+ Nouvelle conversation</button></div>'
      + '</div>';
  } else {
    html += threads.map(function(t) {
      var isA = t.user_a_id === uid;
      var otherName = isA ? (t.user_b_name||'Utilisateur') : (t.user_a_name||'Utilisateur');
      var otherId   = isA ? t.user_b_id : t.user_a_id;
      var unread    = isA ? (t.unread_a||0) : (t.unread_b||0);
      var preview   = (t.last_message||'Démarrez la conversation...').substring(0,60);
      var time      = _mTimeAgo(t.last_message_at);
      var active    = _msgState.threadId === t.id;
      return '<div id="thread-row-'+t.id+'" onclick="_mOpenConv(\''+t.id+'\',\''+otherId+'\',\''+_mEsc(otherName)+'\')" style="display:flex;align-items:center;gap:11px;padding:13px 14px;border-bottom:1px solid var(--c-border);cursor:pointer;background:'+(active?'rgba(21,101,192,.10)':'transparent')+';transition:background .15s" onmouseenter="if(this.style.background!==\'rgba(21,101,192,.10)\')this.style.background=\'var(--c-bg-2)\'" onmouseleave="if(this.style.background!==\'rgba(21,101,192,.10)\')this.style.background=\'transparent\'">'
        + '<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#1565C0,#0D47A1);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:16px;flex-shrink:0">'+otherName.charAt(0).toUpperCase()+'</div>'
        + '<div style="flex:1;min-width:0">'
          + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">'
            + '<span style="font-size:13px;font-weight:'+(unread?'700':'600')+';color:var(--c-text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px">'+_mEsc(otherName)+'</span>'
            + '<span style="font-size:10px;color:var(--c-text-3);flex-shrink:0;margin-left:6px">'+time+'</span>'
          + '</div>'
          + '<div style="font-size:11px;color:var(--c-text-'+(unread?'2':'3')+');white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:'+(unread?'600':'400')+'">'+_mEsc(preview)+'</div>'
        + '</div>'
        + (unread ? '<div style="background:#1565C0;color:white;border-radius:50%;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;padding:0 3px">'+unread+'</div>' : '')
      + '</div>';
    }).join('');
  }

  el.innerHTML = html;
}

/* ─── Nouvelle conv — panneau gauche ─── */
function _mShowNewConvPanel() {
  var el = document.getElementById('msg-left-body');
  if (!el) return;
  el.innerHTML = '<div style="padding:10px 14px 8px;border-bottom:1px solid var(--c-border);display:flex;align-items:center;gap:8px">'
    + '<button onclick="_mRenderList()" style="border:none;background:none;cursor:pointer;font-size:16px;color:var(--c-text-3);padding:0">&#x2190;</button>'
    + '<input id="msg-search-user" oninput="_mSearchUsers(this.value)" placeholder="Rechercher un nom…" autocomplete="off" style="flex:1;padding:8px 12px;border:1.5px solid var(--c-border);border-radius:10px;background:var(--c-bg-2);color:var(--c-text-1);font-size:13px;outline:none">'
  + '</div>'
  + '<div id="msg-user-list" style="padding:10px 14px">'
    + '<div style="text-align:center;color:var(--c-text-3);padding:24px 0;font-size:12px">&#x1F50D; Tapez au moins 2 caractères</div>'
  + '</div>';
  setTimeout(function() { var i = document.getElementById('msg-search-user'); if (i) i.focus(); }, 50);
}

var _mSearchTimer = null;
function _mSearchUsers(q) {
  clearTimeout(_mSearchTimer);
  var el = document.getElementById('msg-user-list'); if (!el) return;
  if (!q || q.trim().length < 2) {
    el.innerHTML = '<div style="text-align:center;color:var(--c-text-3);padding:24px 0;font-size:12px">&#x1F50D; Tapez au moins 2 caractères</div>';
    return;
  }
  el.innerHTML = '<div style="text-align:center;color:var(--c-text-3);padding:20px;font-size:12px">&#x23F3; Recherche...</div>';
  _mSearchTimer = setTimeout(function() { _mDoSearch(q.trim()); }, 300);
}

async function _mDoSearch(q) {
  var el = document.getElementById('msg-user-list'); if (!el) return;
  var uid = await _mGetUid(); var users = []; var frMap = {};
  if (SupaDB && uid) {
    try {
      var res = await SupaDB.from('profiles')
        .select('id,name,email')
        .neq('id', uid)
        .or('name.ilike.*'+q+'*,email.ilike.*'+q+'*')
        .order('name', { ascending: true })
        .limit(20);
      if (res.error) throw res.error;
      users = res.data || [];
      var frRes = await SupaDB.from('friend_requests')
        .select('id,sender_id,receiver_id,status')
        .or('sender_id.eq.'+uid+',receiver_id.eq.'+uid);
      (frRes.data||[]).forEach(function(fr) {
        var otherId = fr.sender_id === uid ? fr.receiver_id : fr.sender_id;
        frMap[otherId] = { id: fr.id, status: fr.status, isSender: fr.sender_id === uid };
      });
    } catch(e) {
      el.innerHTML = '<div style="text-align:center;color:var(--c-danger);padding:16px;font-size:12px">Erreur : '+_mEsc(e.message||String(e))+'</div>';
      return;
    }
  }
  if (!users.length) {
    el.innerHTML = '<div style="text-align:center;color:var(--c-text-3);padding:24px 0;font-size:12px">Aucun résultat pour «&#x202F;'+_mEsc(q)+'&#x202F;»</div>';
    return;
  }
  el.innerHTML = users.map(function(u) {
    var displayName = u.name || u.email || 'Utilisateur';
    var init = displayName.charAt(0).toUpperCase();
    var fr = frMap[u.id];
    var actionBtn = '';
    if (fr && fr.status === 'accepted') {
      actionBtn = '<button onclick="event.stopPropagation();startConversation(\''+u.id+'\',\''+_mEsc(displayName)+'\')" style="border:none;background:#1565C0;color:white;border-radius:7px;padding:5px 10px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap">&#x1F4AC;</button>';
    } else if (fr && fr.status === 'pending' && fr.isSender) {
      actionBtn = '<span style="font-size:10px;color:var(--c-text-3);font-weight:600;white-space:nowrap">&#x23F3; En attente</span>';
    } else if (fr && fr.status === 'pending' && !fr.isSender) {
      actionBtn = '<button onclick="event.stopPropagation();_mAcceptRequest(\''+fr.id+'\',\''+u.id+'\',\''+_mEsc(displayName)+'\')" style="border:none;background:#2E7D32;color:white;border-radius:7px;padding:5px 10px;font-size:11px;font-weight:700;cursor:pointer">&#x2714;</button>';
    } else {
      actionBtn = '<button onclick="event.stopPropagation();_mSendRequest(\''+u.id+'\',\''+_mEsc(displayName)+'\')" style="border:none;background:var(--c-bg-2);border:1.5px solid #1565C0;color:#1565C0;border-radius:7px;padding:5px 10px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap">&#x2795; Ajouter</button>';
    }
    return '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--c-border)">'
      + '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#1565C0,#0D47A1);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:14px;flex-shrink:0">'+init+'</div>'
      + '<div style="flex:1;min-width:0">'
        + '<div style="font-size:13px;font-weight:700;color:var(--c-text-1)">'+_mEsc(displayName)+'</div>'
        + '<div style="font-size:10px;color:var(--c-text-3)">Membre HydroCalc</div>'
      + '</div>'
      + actionBtn
    + '</div>';
  }).join('');
}

async function _mSendRequest(userId, userName) {
  if (!SupaDB) return;
  var uid = await _mGetUid(); if (!uid) { alert('Connectez-vous pour envoyer une demande.'); return; }
  var senderName = (_currentUser && _currentUser.name) || (_currentUser && _currentUser.email) || 'Utilisateur';
  try {
    var ins = await SupaDB.from('friend_requests')
      .upsert(
        { sender_id:uid, sender_name:senderName, receiver_id:userId, status:'pending' },
        { onConflict: 'sender_id,receiver_id', ignoreDuplicates: false }
      );
    if (ins.error) throw ins.error;
    _mToast('Demande envoyée ✓');
    var q = (document.getElementById('msg-search-user')||{}).value||'';
    if (q.length >= 2) _mDoSearch(q);
  } catch(e) { _mToast('Erreur : '+(e.message||''), '#C62828'); }
}

async function _mAcceptRequest(reqId, senderId, senderName) {
  if (!SupaDB) return;
  try {
    await SupaDB.from('friend_requests').update({ status:'accepted' }).eq('id', reqId);
    startConversation(senderId, senderName);
  } catch(e) {}
}

async function _mRejectRequest(reqId) {
  if (!SupaDB) return;
  try {
    await SupaDB.from('friend_requests').update({ status:'rejected' }).eq('id', reqId);
    _mRenderList();
  } catch(e) {}
}

/* ─── Ouverture d'une conversation (panneau droit) ─── */
async function _mOpenConv(threadId, otherId, otherName) {
  _msgState.view='conv'; _msgState.threadId=threadId; _msgState.otherUserId=otherId; _msgState.otherName=otherName;
  _mUnsub();

  var split = document.getElementById('msg-split');
  if (split) split.classList.add('conv-open');

  document.querySelectorAll('[id^="thread-row-"]').forEach(function(el) {
    el.style.background = 'transparent';
  });
  var activeRow = document.getElementById('thread-row-'+threadId);
  if (activeRow) activeRow.style.background = 'rgba(21,101,192,.10)';

  var right = document.getElementById('msg-right');
  if (!right) return;

  right.innerHTML = '<div style="padding:10px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--c-border);background:var(--c-bg);flex-shrink:0">'
    + '<button onclick="_mBackToList()" style="border:none;background:none;cursor:pointer;font-size:20px;color:var(--c-text-2);padding:0 4px 0 0;display:flex;align-items:center">&#x2190;</button>'
    + '<div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#1565C0,#0D47A1);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:14px;flex-shrink:0">'+_mEsc(otherName).charAt(0).toUpperCase()+'</div>'
    + '<div style="flex:1;min-width:0">'
      + '<div style="font-weight:700;font-size:14px;color:var(--c-text-1)">'+_mEsc(otherName)+'</div>'
    + '</div>'
  + '</div>'
  + '<div id="msg-list" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:6px"></div>'
  + '<div style="border-top:1px solid var(--c-border);background:var(--c-bg);flex-shrink:0">'
    + '<div id="msg-file-preview" style="display:none;padding:8px 14px 0"></div>'
    + '<div style="padding:10px 14px;display:flex;gap:8px;align-items:flex-end">'
      + '<input type="file" id="msg-file-input" accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.csv" style="display:none" onchange="_mOnFileSelected(this)">'
      + '<button onclick="document.getElementById(\'msg-file-input\').click()" title="Joindre" style="padding:9px 11px;background:var(--c-bg-2);color:var(--c-text-2);border:1.5px solid var(--c-border);border-radius:22px;font-size:15px;cursor:pointer;flex-shrink:0">&#x1F4CE;</button>'
      + '<textarea id="msg-input" rows="1" placeholder="Votre message…" onkeydown="_mKeyDown(event)" oninput="this.style.height=\'auto\';this.style.height=Math.min(this.scrollHeight,120)+\'px\'" style="flex:1;padding:9px 14px;border:1.5px solid var(--c-border);border-radius:22px;background:var(--c-bg-2);color:var(--c-text-1);font-size:13px;outline:none;resize:none;font-family:inherit;line-height:1.5;max-height:120px"></textarea>'
      + '<button onclick="_mSend()" style="padding:9px 14px;background:#1565C0;color:white;border:none;border-radius:22px;font-size:16px;cursor:pointer;flex-shrink:0">&#x27A4;</button>'
    + '</div>'
  + '</div>';

  await _mLoadMessages(threadId);
  _mMarkRead(threadId);
  _mSubscribeRealtime(threadId);

  var inp = document.getElementById('msg-input');
  if (inp) inp.focus();
}

function _mBackToList() {
  var split = document.getElementById('msg-split');
  if (split) split.classList.remove('conv-open');
  _msgState.threadId = null;
  var right = document.getElementById('msg-right');
  if (right) right.innerHTML = '<div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:var(--c-text-3);height:100%"><div style="font-size:60px;opacity:.25">&#x1F4AC;</div><div style="font-size:14px;font-weight:600">Sélectionnez une conversation</div></div>';
}

async function _mLoadMessages(threadId) {
  var container = document.getElementById('msg-list'); if (!container) return;
  var msgs = [];
  if (SupaDB) {
    try {
      var res = await SupaDB.from('messages').select('id,sender_id,sender_name,contenu,created_at,is_deleted,attachment_url,attachment_type').eq('thread_id', threadId).eq('is_deleted', false).order('created_at', { ascending: true }).limit(100);
      msgs = res.data || [];
    } catch(e) {}
  }
  if (!msgs.length) { container.innerHTML = '<div style="text-align:center;color:var(--c-text-3);font-size:12px;padding:20px">Aucun message. Dites bonjour !</div>'; return; }
  var uid = _mUserId();
  container.innerHTML = msgs.map(function(m) {
    var mine = m.sender_id === uid;
    var time = _mTimeAgo(m.created_at);
    var br = mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px';
    var bg = mine ? '#1565C0' : 'var(--c-surface)';
    var co = mine ? 'white' : 'var(--c-text-1)';
    var attachHTML = '';
    if (m.attachment_url) {
      var atype = m.attachment_type || '';
      if (atype.indexOf('image') === 0) {
        attachHTML = '<img src="'+_mEsc(m.attachment_url)+'" onclick="window.open(\''+_mEsc(m.attachment_url)+'\')" style="max-width:220px;width:100%;border-radius:10px;display:block;cursor:zoom-in;margin-bottom:'+(m.contenu?'6px':'0')+'">';
      } else if (atype.indexOf('video') === 0) {
        attachHTML = '<video src="'+_mEsc(m.attachment_url)+'" controls playsinline style="max-width:220px;width:100%;border-radius:10px;display:block;margin-bottom:'+(m.contenu?'6px':'0')+'"></video>';
      } else {
        var fname = m.attachment_url.split('/').pop().split('?')[0];
        attachHTML = '<a href="'+_mEsc(m.attachment_url)+'" target="_blank" style="display:flex;align-items:center;gap:8px;background:rgba(0,0,0,.1);border-radius:8px;padding:8px 10px;color:'+co+';text-decoration:none;margin-bottom:'+(m.contenu?'6px':'0')+'"><span style="font-size:20px">&#x1F4C4;</span><span style="font-size:12px;font-weight:600;word-break:break-all">'+_mEsc(decodeURIComponent(fname))+'</span></a>';
      }
    }
    var bubble = (attachHTML || m.contenu)
      ? '<div style="max-width:72%;background:'+bg+';color:'+co+';padding:9px 13px;border-radius:'+br+';font-size:13px;line-height:1.5;word-break:break-word;box-shadow:0 1px 3px rgba(0,0,0,.08)">'
          + attachHTML
          + (m.contenu ? '<span style="white-space:pre-wrap">'+_mEsc(m.contenu)+'</span>' : '')
        + '</div>'
      : '';
    return '<div style="display:flex;flex-direction:column;align-items:'+(mine?'flex-end':'flex-start')+'">'
      + bubble
      + '<div style="font-size:10px;color:var(--c-text-3);margin-top:2px;padding:0 4px">'+time+'</div>'
      + '</div>';
  }).join('');
  container.scrollTop = container.scrollHeight;
}

function _mKeyDown(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); _mSend(); } }

function _mOnFileSelected(input) {
  var file = input.files && input.files[0]; if (!file) return;
  if (file.size > 50 * 1024 * 1024) { alert('Fichier trop lourd (max 50 Mo).'); input.value = ''; return; }
  _msgState.pendingFile = file;
  var preview = document.getElementById('msg-file-preview'); if (!preview) return;
  var isImg = file.type.indexOf('image') === 0;
  var isVid = file.type.indexOf('video') === 0;
  var thumb = isImg ? '<img src="'+URL.createObjectURL(file)+'" style="height:54px;border-radius:8px;object-fit:cover">'
    : isVid ? '<span style="font-size:26px">&#x1F3AC;</span>' : '<span style="font-size:26px">&#x1F4C4;</span>';
  preview.style.display = 'flex';
  preview.innerHTML = '<div style="display:flex;align-items:center;gap:10px;background:var(--c-bg-2);border-radius:10px;padding:8px 12px;width:100%;box-sizing:border-box">'
    + thumb
    + '<div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600;color:var(--c-text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+_mEsc(file.name)+'</div><div style="font-size:11px;color:var(--c-text-3)">'+(file.size/1024/1024).toFixed(2)+' Mo</div></div>'
    + '<button onclick="_mClearFile()" style="border:none;background:none;cursor:pointer;font-size:18px;color:var(--c-text-3)">&#x2715;</button>'
  + '</div>';
}

function _mClearFile() {
  _msgState.pendingFile = null;
  var p = document.getElementById('msg-file-preview'); if (p) { p.style.display = 'none'; p.innerHTML = ''; }
  var fi = document.getElementById('msg-file-input'); if (fi) fi.value = '';
}

async function _mSend() {
  var input = document.getElementById('msg-input'); if (!input) return;
  var text = input.value.trim();
  var file = _msgState.pendingFile;
  if (!text && !file) return;
  if (!SupaDB) return;
  var tid = _msgState.threadId; var uid = await _mGetUid(); if (!tid || !uid) return;
  var sendBtn = document.querySelector('[onclick="_mSend()"]');
  if (sendBtn) { sendBtn.disabled = true; sendBtn.innerHTML = '&#x23F3;'; }
  input.value = ''; input.style.height = 'auto';
  var attachUrl = null; var attachType = null;
  if (file) {
    try {
      var ext = file.name.split('.').pop();
      var path = uid + '/' + Date.now() + '_' + Math.random().toString(36).slice(2) + '.' + ext;
      var upRes = await SupaDB.storage.from('message-attachments').upload(path, file, { contentType: file.type, upsert: false });
      if (upRes.error) throw upRes.error;
      var urlRes = SupaDB.storage.from('message-attachments').getPublicUrl(path);
      attachUrl = urlRes.data.publicUrl;
      attachType = file.type;
    } catch(e) { alert('Erreur envoi fichier : '+(e.message||'')); if (sendBtn) { sendBtn.disabled = false; sendBtn.innerHTML = '&#x27A4;'; } return; }
    _mClearFile();
  }
  var preview = text || (attachType && attachType.indexOf('image')===0 ? 'Photo' : attachType && attachType.indexOf('video')===0 ? 'Vidéo' : 'Fichier');
  await SupaDB.from('messages').insert({ thread_id:tid, sender_id:uid, sender_name:_mUserName(), contenu:text, attachment_url:attachUrl, attachment_type:attachType, is_deleted:false });
  await SupaDB.from('message_threads').update({ last_message:preview.substring(0,100), last_message_at:new Date().toISOString() }).eq('id', tid);
  if (sendBtn) { sendBtn.disabled = false; sendBtn.innerHTML = '&#x27A4;'; }
  await _mLoadMessages(tid);
  _mRenderList();
}

async function _mMarkRead(threadId) {
  if (!SupaDB || !_mUserId()) return;
  var uid = _mUserId();
  try {
    var res = await SupaDB.from('message_threads').select('user_a_id').eq('id', threadId).single();
    if (!res.data) return;
    var upd = {}; upd[res.data.user_a_id === uid ? 'unread_a' : 'unread_b'] = 0;
    await SupaDB.from('message_threads').update(upd).eq('id', threadId);
  } catch(e) {}
}

function _mSubscribeRealtime(threadId) {
  if (!SupaDB || typeof SupaDB.channel !== 'function') return;
  try {
    _msgState.realtimeSub = SupaDB.channel('messages:'+threadId)
      .on('postgres_changes', { event:'INSERT', schema:'public', table:'messages', filter:'thread_id=eq.'+threadId }, function() { _mLoadMessages(threadId); _mMarkRead(threadId); })
      .subscribe();
  } catch(e) {}
}

function _mUnsub() {
  if (_msgState.realtimeSub && SupaDB && typeof SupaDB.removeChannel === 'function') { try { SupaDB.removeChannel(_msgState.realtimeSub); } catch(e) {} }
  _msgState.realtimeSub = null;
}

/* ─── Forum dropdown ─── */
function _mToggleForumMenu() {
  var existing = document.getElementById('msg-forum-dropdown');
  if (existing) { existing.remove(); return; }
  var salons = typeof FORUM_SALONS !== 'undefined' ? FORUM_SALONS : [];
  var items = salons.map(function(s) {
    return '<div onclick="_mGoSalon(\''+s.id+'\')" style="display:flex;align-items:center;gap:10px;padding:10px 16px;cursor:pointer" onmouseenter="this.style.background=\'var(--c-bg-2)\'" onmouseleave="this.style.background=\'\'">'
      + '<div style="width:30px;height:30px;border-radius:8px;background:'+s.color+'18;display:flex;align-items:center;justify-content:center;font-size:15px">'+s.ico+'</div>'
      + '<div><div style="font-size:12px;font-weight:700;color:var(--c-text-1)">'+s.label+'</div><div style="font-size:10px;color:var(--c-text-3)">'+s.desc+'</div></div>'
    + '</div>';
  }).join('');
  var dd = document.createElement('div');
  dd.id = 'msg-forum-dropdown';
  dd.style.cssText = 'position:fixed;top:52px;right:8px;z-index:500;background:var(--c-surface);border:1px solid var(--c-border);border-radius:14px;box-shadow:0 8px 32px rgba(0,0,0,.18);width:min(300px,calc(100vw - 16px));overflow:hidden';
  dd.innerHTML = '<div style="padding:12px 16px 8px;border-bottom:1px solid var(--c-border)"><div style="font-size:13px;font-weight:700;color:var(--c-text-1)">Accéder à un salon</div></div>'
    + '<div style="max-height:60vh;overflow-y:auto">'+items+'</div>'
    + '<div style="padding:8px 16px;border-top:1px solid var(--c-border)"><button onclick="showModule(\'forum\');document.getElementById(\'msg-forum-dropdown\').remove()" style="width:100%;padding:8px;background:var(--c-bg-2);border:none;border-radius:8px;font-size:12px;font-weight:600;color:var(--c-text-2);cursor:pointer">Voir tous les salons</button></div>';
  document.body.appendChild(dd);
  setTimeout(function() {
    document.addEventListener('click', function _cl(e) {
      if (!dd.contains(e.target) && e.target.id !== 'msg-forum-menu-btn') { dd.remove(); document.removeEventListener('click', _cl); }
    });
  }, 50);
}

function _mGoSalon(id) {
  var dd = document.getElementById('msg-forum-dropdown'); if (dd) dd.remove();
  if (typeof _fOpenSalon === 'function') { showModule('forum'); setTimeout(function(){ _fOpenSalon(id); }, 50); }
  else showModule('forum');
}

/* ─── Démarrer une conversation depuis l'extérieur ─── */
async function startConversation(otherId, otherName) {
  if (!_mCanUse()) { showModule('settings'); return; }
  var uid = await _mGetUid(); if (!uid || !SupaDB) return;
  if (otherId === uid) { alert('Vous ne pouvez pas vous écrire à vous-même.'); return; }
  try {
    var frCheck = await SupaDB.from('friend_requests')
      .select('status')
      .or('and(sender_id.eq.'+uid+',receiver_id.eq.'+otherId+'),and(sender_id.eq.'+otherId+',receiver_id.eq.'+uid+')')
      .eq('status', 'accepted')
      .limit(1);
    if (!frCheck.data || !frCheck.data.length) {
      alert('Vous devez être amis pour envoyer un message.\nRecherchez cette personne et envoyez-lui une demande d\'ami.');
      return;
    }
  } catch(e) {}
  var tid = null;
  try {
    var res = await SupaDB.from('message_threads').select('id').or('and(user_a_id.eq.'+uid+',user_b_id.eq.'+otherId+'),and(user_a_id.eq.'+otherId+',user_b_id.eq.'+uid+')').limit(1).single();
    if (res.data) tid = res.data.id;
  } catch(e) {}
  if (!tid) {
    try {
      var ins = await SupaDB.from('message_threads').insert({ user_a_id:uid, user_b_id:otherId, user_a_name:_mUserName(), user_b_name:otherName, unread_a:0, unread_b:0 }).select('id').single();
      tid = ins.data && ins.data.id;
    } catch(e) {}
  }
  if (!tid) { alert('Impossible de créer la conversation.'); return; }
  showModule('messagerie');
  setTimeout(function() { _mOpenConv(tid, otherId, otherName); }, 100);
}

async function getUnreadMsgCount() {
  var uid = _mUserId(); if (!uid || !SupaDB) return 0;
  try {
    var res = await SupaDB.from('message_threads').select('user_a_id,unread_a,unread_b').or('user_a_id.eq.'+uid+',user_b_id.eq.'+uid);
    var total = 0;
    (res.data||[]).forEach(function(t) { total += t.user_a_id === uid ? (t.unread_a||0) : (t.unread_b||0); });
    return total;
  } catch(e) { return 0; }
}
