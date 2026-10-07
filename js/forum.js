/* forum.js - Architecture salons */

var FORUM_SALONS = [
  { id:'hydraulique',    label:'Hydraulique',        ico:'📐', color:'#1565C0', desc:'Calculs · Débits · Dimensionnement' },
  { id:'reglementation', label:'Réglementation',     ico:'⚖️',  color:'#6A1B9A', desc:'Arrêtés · DCE · Police de l eau' },
  { id:'gemapi',         label:'GEMAPI',              ico:'🌊', color:'#0288D1', desc:'Compétence · Taxe · EPCI · PAPI' },
  { id:'assainissement', label:'Assainissement',     ico:'🔧', color:'#00695C', desc:'AC · ANC · Réseaux · Step' },
  { id:'eau-potable',    label:'Eau potable',         ico:'💧', color:'#1976D2', desc:'AEP · Traitement · Réseau · Qualité' },
  { id:'milieux',        label:'Milieux aquatiques',  ico:'🌿', color:'#2E7D32', desc:'Rivières · Zones humides · Continuité' },
  { id:'terrain',        label:'Terrain et Chantier', ico:'🏗️', color:'#E65100', desc:'Mesures · Relevés · Notes chantier' },
  { id:'administratif',  label:'Administratif',       ico:'📋', color:'#455A64', desc:'IOTA · Marchés · Procédures · DCE' },
  { id:'general',        label:'Général',             ico:'💬', color:'#757575', desc:'Toutes questions hors thèmes' },
];

var FORUM_SUGGESTIONS = {
  hydraulique: [
    "Comment calculer le débit de crue Q10 sur un petit bassin versant ?",
    "Quelle formule pour dimensionner un collecteur EP en zone urbaine ?",
    "Manning-Strickler : comment choisir le coefficient Ks en terrain naturel ?",
    "Comment estimer la hauteur normale dans un canal trapézoïdal ?"
  ],
  reglementation: [
    "Quelles sont les distances réglementaires pour un forage privé ?",
    "Comment interpréter l’arrêté du 21 juillet 2015 sur l’ANC ?",
    "Quels documents exiger pour un dossier Loi sur l’eau IOTA ?",
    "Quand déclenche-t-on une étude d’impact sur les milieux aquatiques ?"
  ],
  gemapi: [
    "Comment répartir la taxe GEMAPI entre les collectivités membres ?",
    "Quelles compétences sont obligatoires pour un EPCI en GEMAPI ?",
    "Comment monter un dossier PAPI pour un territoire à risque inondation ?",
    "Différence entre EPAGE et EPTB : quand créer l’un ou l’autre ?"
  ],
  assainissement: [
    "Comment dimensionner une fosse toutes eaux pour 5 équivalents habitants ?",
    "Quelles sont les règles d’épandage pour un système ANC par tranchées ?",
    "Comment calculer la pente minimale d’un réseau séparatif ?",
    "Quels critères pour choisir entre lagunage et filtre planté de roseaux ?"
  ],
  "eau-potable": [
    "Comment calculer la dose de chlore au point de mise en distribution ?",
    "Quelle pression minimale garantir en bout de réseau AEP ?",
    "Comment dimensionner un réservoir de tête pour une commune de 2 000 hab ?",
    "Quelle pompe choisir pour un forage de 15 m et 5 m³/h ?"
  ],
  milieux: [
    "Comment calculer le débit réservé (1/10 module) sur une prise d’eau ?",
    "Quels indicateurs biologiques pour évaluer l’état écologique d’un cours d’eau ?",
    "Comment aménager une passe à poissons sur un seuil existant ?",
    "Quelles obligations pour la continuité écologique en 2025 ?"
  ],
  terrain: [
    "Quelle méthode pour mesurer le débit d’un petit cours d’eau à gué ?",
    "Comment relever une coupe transversale d’un cours d’eau avec un niveau ?",
    "Quels EPI obligatoires pour une intervention en galerie d’assainissement ?",
    "Comment tester l’étanchéité d’un réseau neuf avant réception ?"
  ],
  administratif: [
    "Quels documents pour un dossier de déclaration IOTA à faible impact ?",
    "Comment rédiger un cahier des charges pour un BET hydraulique ?",
    "Quels délais légaux pour instruire un dossier de déclaration loi sur l’eau ?",
    "Comment calculer les pénalités de retard sur un marché de travaux ?"
  ],
  general: [
    "Quelles études pour devenir technicien en hydraulique fluviale ?",
    "Quels logiciels gratuits de simulation hydraulique 1D/2D ?",
    "Comment se former à la GEMAPI en arrivant sur un nouveau poste ?",
    "Quelle différence entre un SDAEP et un schéma directeur AEP ?"
  ]
};

var _forumState = { view:'salons', salon:null, postId:null, filter:'recent', page:0, PAGE_SIZE:20 };

function _fAuthUser() { return (typeof _currentUser !== 'undefined' && _currentUser) || (typeof AUTH !== 'undefined' && AUTH.user) || null; }
function _fCanWrite() {
  var u = _fAuthUser(); if (!u) return false;
  var p = (u.plan || '').toLowerCase();
  return p === 'pro' || p === 'etab' || p === 'admin';
}
function _fIsAdmin() { var u = _fAuthUser(); return u && (u.plan||'').toLowerCase() === 'admin'; }
function _fUserId()   { var u = _fAuthUser(); return (u && u.id) ? u.id : null; }
function _fUserName() { var u = _fAuthUser(); if (!u) return 'Anonyme'; var full=u.prenom||u.name||u.email||'Utilisateur'; return full.split(' ')[0]; }
function _fFirstName(name) { return (name||'Anonyme').split(' ')[0]; }
function _fEsc(s) { return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _fLabelStyle() { return 'display:block;font-size:11px;color:var(--c-text-3);font-weight:600;margin-bottom:4px;text-transform:uppercase;letter-spacing:.04em'; }
function _fInputStyle(ta) { return 'width:100%;box-sizing:border-box;padding:9px 11px;border:1.5px solid var(--c-border);border-radius:8px;background:var(--c-bg-2);color:var(--c-text-1);font-size:13px;outline:none;'+(ta?'resize:vertical;font-family:inherit;line-height:1.6':''); }
function _fVoteBtn(active,color) { return 'border:none;background:'+(active?(color||'#1565C0'):'var(--c-bg-2)')+';color:'+(active?'white':'var(--c-text-3)')+';border-radius:8px;padding:4px 10px;font-size:12px;font-weight:700;cursor:pointer'; }
function _fBackBtnHTML(fn) { return '<div style="padding:10px var(--s-4);display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--c-border)"><button onclick="'+fn+'" style="border:none;background:none;cursor:pointer;font-size:13px;color:var(--c-text-2);font-weight:600">← Retour</button></div>'; }

function _fSuggestionsHTML(salon) {
  var suggs = FORUM_SUGGESTIONS[salon.id] || [];
  if (!suggs.length) return '';
  var chips = suggs.slice(0, 3).map(function(q) {
    var safe = q.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    return '<button onclick="_fShowNew(\'' + safe + '\')" style="background:var(--c-bg-2);border:1.5px solid var(--c-border);border-radius:20px;padding:7px 13px;font-size:12px;color:var(--c-text-2);cursor:pointer;white-space:nowrap;text-align:left;transition:border-color .15s" onmouseenter="this.style.borderColor=\'' + salon.color + '\';this.style.color=\'' + salon.color + '\'" onmouseleave="this.style.borderColor=\'var(--c-border)\';this.style.color=\'var(--c-text-2)\'">💡 ' + _fEsc(q) + '</button>';
  }).join('');
  return '<div style="padding:0 var(--s-4) 10px"><div style="font-size:11px;color:var(--c-text-3);font-weight:600;margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em">Questions fréquentes · cliquez pour pré-remplir</div><div style="display:flex;flex-direction:column;gap:6px">' + chips + '</div></div>';
}

function _fQuickBarHTML(salon) {
  return '<div style="padding:var(--s-3) var(--s-4);border-top:1px solid var(--c-border);background:var(--c-bg);position:sticky;bottom:0">'
    + '<div style="display:flex;gap:8px;align-items:center">'
    + '<input id="forum-quick-input" type="text" placeholder="Posez votre question…" maxlength="200" onkeydown="if(event.key===\'Enter\')_fQuickSend()" style="flex:1;padding:10px 14px;border:1.5px solid var(--c-border);border-radius:10px;background:var(--c-bg-2);color:var(--c-text-1);font-size:13px;outline:none;transition:border-color .15s" onfocus="this.style.borderColor=\'' + salon.color + '\'" onblur="this.style.borderColor=\'var(--c-border)\'">'
    + '<button onclick="_fQuickSend()" style="padding:10px 16px;background:' + salon.color + ';color:white;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap">✏️ Poser</button>'
    + '</div>'
    + '</div>';
}

function _fQuickSend() {
  if (!_fCanWrite()) { showModule('settings'); return; }
  var inp = document.getElementById('forum-quick-input');
  var val = inp ? inp.value.trim() : '';
  _fShowNew(val);
}

function renderForum() {
  _forumState.view = 'salons'; _forumState.salon = null; _forumState.postId = null;
  _fRenderSalons();
}

async function _fRenderSalons() {
  var mc = document.getElementById('main-content');
  if (!mc) return;
  var counts = {};
  if (SupaDB) {
    try {
      await Promise.all(FORUM_SALONS.map(function(s) {
        return SupaDB.from('forum_posts').select('*', { count:'exact', head:true }).eq('is_deleted', false).eq('channel', s.id).then(function(r){ counts[s.id] = r.count || 0; });
      }));
    } catch(e) {}
  }
  var salonsHTML = FORUM_SALONS.map(function(s) {
    var nb = counts[s.id] || 0;
    return '<div onclick="_fOpenSalon(\''+s.id+'\')" style="background:var(--c-bg);border:1.5px solid var(--c-border);border-radius:14px;padding:16px;cursor:pointer;transition:border-color .15s,transform .1s;display:flex;flex-direction:column;gap:6px" onmouseenter="this.style.borderColor=\''+s.color+'\';this.style.transform=\'translateY(-1px)\'" onmouseleave="this.style.borderColor=\'var(--c-border)\';this.style.transform=\'\'">'
      +'<div style="display:flex;align-items:center;gap:10px">'
        +'<div style="width:40px;height:40px;border-radius:10px;background:'+s.color+'18;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">'+s.ico+'</div>'
        +'<div><div style="font-size:13px;font-weight:700;color:var(--c-text-1)">'+s.label+'</div><div style="font-size:11px;color:var(--c-text-3)">'+nb+' question'+(nb>1?'s':'')+'</div></div>'
      +'</div>'
      +'<div style="font-size:11px;color:var(--c-text-3);line-height:1.5">'+s.desc+'</div>'
      +'</div>';
  }).join('');
  mc.innerHTML = '<div class="module-hero" style="background:linear-gradient(135deg,#1565C0,#0D47A1)">'
    +'<span class="mh-icon">💬</span><div class="mh-title">Forum communautaire</div>'
    +'<div class="mh-sub">Choisissez un salon · Questions · Réponses · Entraide</div></div>'
    +'<div style="padding:var(--s-3) var(--s-4)">'
    +(!_fCanWrite() ? '<div style="background:#FFF8E1;color:#F57F17;border-radius:10px;padding:10px 14px;font-size:12px;text-align:center;margin-bottom:var(--s-3)">🔒 Compte Pro requis pour poster · <a href="#" onclick="showModule(\'settings\')" style="color:#F57F17;font-weight:700">Passer en Pro</a></div>' : '')
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+salonsHTML+'</div></div><div class="pb-nav"></div>';
}

function _fOpenSalon(salonId) {
  _forumState.view='list'; _forumState.salon=salonId; _forumState.filter='recent'; _forumState.page=0;
  _fRenderList();
}

function _fSalonHeaderHTML(salon) {
  return '<div style="padding:var(--s-3) var(--s-4) var(--s-2);display:flex;align-items:center;gap:12px">'
    +'<div style="width:44px;height:44px;border-radius:12px;background:'+salon.color+'18;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">'+salon.ico+'</div>'
    +'<div><div style="font-size:15px;font-weight:700;color:var(--c-text-1)">'+salon.label+'</div><div style="font-size:11px;color:var(--c-text-3)">'+salon.desc+'</div></div>'
    +(_fCanWrite() ? '<button onclick="_fShowNew()" style="margin-left:auto;padding:8px 14px;background:'+salon.color+';color:white;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap">✏️ Poser</button>' : '')
    +'</div>';
}

function _fFiltersHTML() {
  return '<div style="padding:0 var(--s-4) 8px;display:flex;gap:6px;overflow-x:auto">'
    +[['recent','🕒 Récent'],['popular','🔥 Populaire'],['unsolved','❓ Sans réponse']].map(function(b) {
      var active=_forumState.filter===b[0];
      return '<button onclick="_forumState.filter=\''+b[0]+'\';_fRenderList()" style="border:none;padding:6px 12px;border-radius:20px;font-size:12px;cursor:pointer;white-space:nowrap;font-weight:'+(active?'700':'400')+';background:'+(active?'#1565C0':'var(--c-bg-2)')+';color:'+(active?'white':'var(--c-text-2)')+'">'+b[1]+'</button>';
    }).join('')+'</div>';
}

async function _fRenderList() {
  var mc=document.getElementById('main-content'); if(!mc) return;
  var salon=FORUM_SALONS.find(function(s){return s.id===_forumState.salon;})||FORUM_SALONS[0];
  mc.innerHTML=_fBackBtnHTML('_fRenderSalons()')+_fSalonHeaderHTML(salon)+_fFiltersHTML()+'<div style="padding:20px;text-align:center;color:var(--c-text-3)">⏳ Chargement…</div>';
  var posts=[],error=null;
  if(SupaDB){try{
    var q=SupaDB.from('forum_posts')
      .select('id,user_id,titre,contenu,channel,created_at,votes_count,answers_count,is_solved,is_pinned,author_name,author_plan')
      .eq('is_deleted',false).eq('channel',_forumState.salon);
    if(_forumState.filter==='popular') q=q.order('votes_count',{ascending:false});
    else if(_forumState.filter==='unsolved') q=q.eq('is_solved',false).order('created_at',{ascending:false});
    else q=q.order('is_pinned',{ascending:false}).order('created_at',{ascending:false});
    q=q.range(_forumState.page*_forumState.PAGE_SIZE,(_forumState.page+1)*_forumState.PAGE_SIZE-1);
    var res=await q; posts=res.data||[]; error=res.error;
  }catch(e){error=e;}}
  var listHTML='';
  if(error){ listHTML='<div style="padding:20px;text-align:center;color:var(--c-danger)">⚠️ '+(error.message||'Erreur')+'</div>'; }
  else if(!posts.length){
    listHTML='<div style="padding:var(--s-4);text-align:center;color:var(--c-text-3)"><div style="font-size:36px;margin-bottom:10px">'+salon.ico+'</div><div>Aucune question dans ce salon.</div>'
      +(_fCanWrite()?'<div style="margin-top:12px"><button onclick="_fShowNew()" style="padding:8px 20px;background:'+salon.color+';color:white;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">✏️ Poser la première question</button></div>':'')+'</div>';
  } else {
    listHTML='<div>'+posts.map(function(p){return _fPostCardHTML(p,salon.color);}).join('')+'</div>';
  }
  var quickBar = _fCanWrite() ? _fQuickBarHTML(salon) : '';
  mc.innerHTML=_fBackBtnHTML('_fRenderSalons()')+_fSalonHeaderHTML(salon)+_fFiltersHTML()+_fSuggestionsHTML(salon)+listHTML+quickBar+'<div class="pb-nav"></div>';
}

function _fPostCardHTML(p,ac) {
  var date=p.created_at?new Date(p.created_at).toLocaleDateString('fr-FR'):'';
  var pb=p.author_plan==='admin'?'🛡️':p.author_plan==='etab'?'🏛️':p.author_plan==='pro'?'⭐':'';
  var pin=p.is_pinned?'<span style="color:#F57F17;font-size:10px;font-weight:700">📌 · </span>':'';
  var firstName=_fFirstName(p.author_name);
  var isMe=p.user_id&&p.user_id===_fUserId();
  var replyBtn=_fCanWrite()
    ?'<button onclick="event.stopPropagation();_fReplyToPost(\''+p.id+'\')" style="border:none;background:var(--c-bg-2);color:'+(ac||'#1565C0')+';border-radius:8px;padding:4px 11px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap">💬 Répondre</button>'
    :'';
  var authorHTML=isMe
    ?'<span style="font-size:10px;color:var(--c-text-3)">'+pb+' '+_fEsc(firstName)+' (moi) · '+date+'</span>'
    :'<span onclick="event.stopPropagation();_fShowUserCard(\''+p.user_id+'\',\''+_fEsc(p.author_name)+'\')" style="font-size:10px;color:'+(ac||'#1565C0')+';cursor:pointer;font-weight:600;text-decoration:underline;text-underline-offset:2px">'+pb+' '+_fEsc(firstName)+'</span><span style="font-size:10px;color:var(--c-text-3)"> · '+date+'</span>';
  return '<div onclick="_fOpenPost(\''+p.id+'\')" style="padding:14px var(--s-4);border-bottom:1px solid var(--c-border);cursor:pointer;transition:background .15s" onmouseenter="this.style.background=\'var(--c-bg-2)\'" onmouseleave="this.style.background=\'\'">'
    +'<div style="display:flex;gap:12px;align-items:flex-start">'
      +'<div style="display:flex;flex-direction:column;align-items:center;gap:3px;min-width:38px">'
        +'<div style="font-size:15px;font-weight:700;color:'+((p.votes_count||0)>0?(ac||'#1565C0'):'var(--c-text-3)')+'">'+( p.votes_count||0)+'</div>'
        +'<div style="font-size:9px;color:var(--c-text-3)">vote'+((p.votes_count||0)>1?'s':'')+'</div>'
        +'<div style="background:'+(p.is_solved?'#2E7D32':'#607D8B')+';color:white;border-radius:5px;padding:2px 5px;font-size:10px;font-weight:700">'+(p.is_solved?'✅':'💬')+' '+(p.answers_count||0)+'</div>'
      +'</div>'
      +'<div style="flex:1;min-width:0">'
        +'<div style="font-size:14px;font-weight:700;color:var(--c-text-1);margin-bottom:4px;line-height:1.4">'+pin+_fEsc(p.titre)+'</div>'
        +'<div style="font-size:12px;color:var(--c-text-3);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:6px">'+_fEsc((p.contenu||'').substring(0,160))+'</div>'
        +'<div style="display:flex;align-items:center;justify-content:space-between;gap:8px">'+authorHTML+replyBtn+'</div>'
      +'</div>'
    +'</div></div>';
}

async function _fShowUserCard(userId, fullName) {
  if (!userId) return;
  var existing = document.getElementById('f-user-card-overlay');
  if (existing) existing.remove();
  var firstName = _fFirstName(fullName);
  var init = firstName.charAt(0).toUpperCase();
  var overlay = document.createElement('div');
  overlay.id = 'f-user-card-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:600;background:rgba(0,0,0,.4);display:flex;align-items:flex-end;justify-content:center';
  overlay.innerHTML = '<div style="background:var(--c-bg);border-radius:20px 20px 0 0;padding:var(--s-4);width:100%;max-width:480px;animation:fadeSlideDown .2s">'
    + '<div style="width:40px;height:4px;border-radius:2px;background:var(--c-border);margin:0 auto 16px"></div>'
    + '<div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">'
      + '<div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#1565C0,#0D47A1);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:22px">'+_fEsc(init)+'</div>'
      + '<div><div style="font-size:16px;font-weight:700;color:var(--c-text-1)" id="fuc-name">'+_fEsc(firstName)+'</div><div style="font-size:12px;color:var(--c-text-3)">Membre HydroCalc</div></div>'
    + '</div>'
    + '<div id="fuc-action" style="text-align:center;color:var(--c-text-3);font-size:13px">&#x23F3; Chargement...</div>'
    + '<button onclick="document.getElementById(\'f-user-card-overlay\').remove()" style="margin-top:14px;width:100%;padding:10px;background:var(--c-bg-2);border:none;border-radius:10px;font-size:13px;color:var(--c-text-2);cursor:pointer;font-weight:600">Fermer</button>'
  + '</div>';
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);

  if (!SupaDB || !_fUserId()) { document.getElementById('fuc-action').innerHTML = '<div style="color:var(--c-text-3);font-size:12px">Connectez-vous pour envoyer une demande.</div>'; return; }
  var uid = _fUserId();
  try {
    var frRes = await SupaDB.from('friend_requests').select('id,sender_id,status')
      .or('and(sender_id.eq.'+uid+',receiver_id.eq.'+userId+'),and(sender_id.eq.'+userId+',receiver_id.eq.'+uid+')').limit(1);
    var fr = frRes.data && frRes.data[0];
    var actionEl = document.getElementById('fuc-action'); if (!actionEl) return;
    var safeFullName = fullName.replace(/'/g, "\\'");
    if (fr && fr.status === 'accepted') {
      actionEl.innerHTML = '<button onclick="showModule(\'messagerie\');startConversation(\''+userId+'\',\''+_fEsc(fullName)+'\');document.getElementById(\'f-user-card-overlay\').remove()" style="width:100%;padding:11px;background:#1565C0;color:white;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">&#x1F4AC; Envoyer un message</button>';
    } else if (fr && fr.status === 'pending' && fr.sender_id === uid) {
      actionEl.innerHTML = '<div style="padding:10px;background:var(--c-bg-2);border-radius:10px;font-size:13px;color:var(--c-text-3);text-align:center">&#x23F3; Demande d\'ami envoy&eacute;e — en attente de r&eacute;ponse</div>';
    } else if (fr && fr.status === 'pending' && fr.sender_id !== uid) {
      actionEl.innerHTML = '<button onclick="_fAcceptFriendReq(\''+fr.id+'\',\''+userId+'\',\''+_fEsc(fullName)+'\')" style="width:100%;padding:11px;background:#2E7D32;color:white;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">&#x2714; Accepter la demande d\'ami</button>';
    } else {
      actionEl.innerHTML = '<button onclick="_fSendFriendReq(\''+userId+'\',\''+_fEsc(fullName)+'\')" style="width:100%;padding:11px;background:#1565C0;color:white;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">&#x2795; Envoyer une demande d\'ami</button>';
    }
  } catch(e) {}
}

async function _fSendFriendReq(userId, fullName) {
  var uid = _fUserId(); if (!uid || !SupaDB) return;
  try {
    await SupaDB.from('friend_requests').insert({ sender_id:uid, sender_name:_fUserName()+' '+((_fAuthUser()&&_fAuthUser().name)||''), receiver_id:userId, status:'pending' });
    var el = document.getElementById('fuc-action'); if (el) el.innerHTML = '<div style="padding:10px;background:#E8F5E9;border-radius:10px;font-size:13px;color:#2E7D32;text-align:center;font-weight:600">&#x2714; Demande envoy&eacute;e !</div>';
  } catch(e) { alert('Erreur : '+(e.message||'')); }
}

async function _fAcceptFriendReq(reqId, senderId, senderName) {
  if (!SupaDB) return;
  try {
    await SupaDB.from('friend_requests').update({ status:'accepted' }).eq('id', reqId);
    var overlay = document.getElementById('f-user-card-overlay'); if (overlay) overlay.remove();
    showModule('messagerie');
    startConversation(senderId, senderName);
  } catch(e) {}
}

function _fReplyToPost(postId) {
  _fOpenPost(postId).then(function() {
    setTimeout(function() {
      var ta = document.getElementById('forum-answer-text');
      if (ta) { ta.focus(); ta.scrollIntoView({ behavior:'smooth', block:'center' }); }
    }, 150);
  }).catch(function(){});
}

async function _fOpenPost(id) {
  _forumState.view='post'; _forumState.postId=id;
  var mc=document.getElementById('main-content');
  var salon=FORUM_SALONS.find(function(s){return s.id===_forumState.salon;})||FORUM_SALONS[0];
  mc.innerHTML=_fBackBtnHTML("_fOpenSalon('"+_forumState.salon+"')")+'<div style="padding:20px;text-align:center;color:var(--c-text-3)">⏳</div>';
  var post=null,answers=[],myVotes={};
  if(SupaDB){try{
    var uid=_fUserId();
    var [rp,ra,rv]=await Promise.all([
      SupaDB.from('forum_posts').select('id,user_id,titre,contenu,channel,created_at,votes_count,answers_count,is_solved,is_pinned,author_name,author_plan').eq('id',id).single(),
      SupaDB.from('forum_answers').select('id,post_id,user_id,author_name,author_plan,contenu,votes_count,is_best_answer,is_deleted,created_at').eq('post_id',id).eq('is_deleted',false).order('is_best_answer',{ascending:false}).order('votes_count',{ascending:false}),
      uid?SupaDB.from('forum_votes').select('target_id,value').eq('user_id',uid):Promise.resolve({data:[]})
    ]);
    post=rp.data; answers=ra.data||[];
    (rv.data||[]).forEach(function(v){myVotes[v.target_id]=v.value;});
  }catch(e){}}
  if(!post){mc.innerHTML=_fBackBtnHTML("_fOpenSalon('"+_forumState.salon+"')")+'<div style="padding:20px;text-align:center;color:var(--c-danger)">⚠️ Question introuvable.</div><div class="pb-nav"></div>';return;}
  var date=post.created_at?new Date(post.created_at).toLocaleDateString('fr-FR',{day:'2-digit',month:'long',year:'numeric'}):'';
  var canWrite=_fCanWrite(),isOwner=post.user_id===_fUserId(),myPV=myVotes[post.id]||0;
  var answersHTML=answers.length?answers.map(function(a){return _fAnswerHTML(a,myVotes[a.id]||0,isOwner,post.is_solved,salon.color);}).join('')
    :'<div data-empty-answers style="padding:16px;text-align:center;color:var(--c-text-3);background:var(--c-bg-2);border-radius:10px">💬 Aucune réponse. '+(canWrite?'Soyez le premier !':'')+'</div>';
  mc.innerHTML=_fBackBtnHTML("_fOpenSalon('"+_forumState.salon+"')")
    +'<div style="padding:var(--s-3) var(--s-4)">'
      +'<div style="background:var(--c-bg);border-radius:12px;border:1px solid var(--c-border);padding:var(--s-3);margin-bottom:var(--s-3)">'
        +(post.is_solved?'<div style="background:#E8F5E9;color:#2E7D32;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:700;margin-bottom:10px">✅ Question résolue</div>':'')
        +(post.is_pinned?'<div style="color:#F57F17;font-size:11px;font-weight:700;margin-bottom:6px">📌 Épinglée</div>':'')
        +'<h2 style="font-size:15px;font-weight:700;color:var(--c-text-1);margin:0 0 10px;line-height:1.4">'+_fEsc(post.titre)+'</h2>'
        +'<div style="font-size:13px;color:var(--c-text-2);line-height:1.7;white-space:pre-wrap;margin-bottom:14px">'+_fEsc(post.contenu)+'</div>'
        +'<div style="display:flex;align-items:center;justify-content:space-between">'
          +'<div style="font-size:11px;color:var(--c-text-3)">'+_fEsc(post.author_name||'Anonyme')+' · '+date+'</div>'
          +'<div style="display:flex;gap:6px;align-items:center">'
            +'<button data-vote="'+post.id+'" onclick="_fVote(\'post\',\''+post.id+'\',1)" style="'+_fVoteBtn(myPV===1,salon.color)+'">👍 '+(post.votes_count||0)+'</button>'
            +(_fIsAdmin()?'<button onclick="_fPin(\''+post.id+'\','+(!post.is_pinned)+')" style="border:none;background:none;cursor:pointer;font-size:13px;color:'+(post.is_pinned?'#F57F17':'var(--c-text-3)')+'">📌</button>':'')
            +((isOwner||_fIsAdmin())?'<button onclick="_fDeletePost(\''+post.id+'\')" style="border:none;background:none;cursor:pointer;font-size:13px;color:var(--c-danger)">🗑️</button>':'')
          +'</div>'
        +'</div>'
      +'</div>'
      +'<div id="forum-answers-count" style="font-weight:700;font-size:13px;color:var(--c-text-1);margin-bottom:10px">'+answers.length+' réponse'+(answers.length>1?'s':'')+'</div>'
      +'<div id="forum-answers-list">'+answersHTML+'</div>'
      +(canWrite?_fAnswerFormHTML(post.id,salon.color):'<div style="background:#FFF8E1;color:#F57F17;border-radius:10px;padding:12px;font-size:12px;text-align:center;margin-top:var(--s-3)">🔒 Compte Pro requis pour répondre</div>')
    +'</div><div class="pb-nav"></div>';
}

function _fAnswerHTML(a,myVote,isPostOwner,isSolved,ac) {
  var date=a.created_at?new Date(a.created_at).toLocaleDateString('fr-FR'):'';
  var isMine=a.user_id===_fUserId();
  return '<div data-answer="'+a.id+'" style="background:'+(a.is_best_answer?'#E8F5E9':'var(--c-bg)')+';border:1.5px solid '+(a.is_best_answer?'#2E7D32':'var(--c-border)')+';border-radius:10px;padding:var(--s-3);margin-bottom:10px;position:relative">'
    +(a.is_best_answer?'<div style="position:absolute;top:-1px;right:12px;background:#2E7D32;color:white;font-size:10px;font-weight:700;padding:2px 8px;border-radius:0 0 6px 6px">✅ Meilleure réponse</div>':'')
    +'<div style="font-size:13px;color:var(--c-text-2);line-height:1.7;white-space:pre-wrap;margin-bottom:10px">'+_fEsc(a.contenu)+'</div>'
    +'<div style="display:flex;align-items:center;justify-content:space-between">'
      +'<div>'+(a.user_id===_fUserId()?'<span style="font-size:11px;color:var(--c-text-3)">'+_fEsc(_fFirstName(a.author_name))+' (moi) · '+date+'</span>':'<span onclick="event.stopPropagation();_fShowUserCard(\''+a.user_id+'\',\''+_fEsc(a.author_name)+'\')" style="font-size:11px;color:#1565C0;cursor:pointer;font-weight:600;text-decoration:underline;text-underline-offset:2px">'+_fEsc(_fFirstName(a.author_name))+'</span><span style="font-size:11px;color:var(--c-text-3)"> · '+date+'</span>')+'</div>'
      +'<div style="display:flex;gap:6px;align-items:center">'
        +'<button data-vote="'+a.id+'" onclick="_fVote(\'answer\',\''+a.id+'\',1)" style="'+_fVoteBtn(myVote===1,ac)+'">👍 '+(a.votes_count||0)+'</button>'
        +((isPostOwner&&!isSolved)?'<button onclick="_fMarkBest(\''+a.id+'\',\''+a.post_id+'\')" style="border:none;background:#E8F5E9;color:#2E7D32;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;cursor:pointer">✅ Meilleure</button>':'')
        +((isMine||_fIsAdmin())?'<button onclick="_fDeleteAnswer(\''+a.id+'\')" style="border:none;background:none;cursor:pointer;font-size:13px;color:var(--c-danger)">🗑️</button>':'')
      +'</div>'
    +'</div></div>';
}

function _fAnswerFormHTML(postId,ac) {
  return '<div style="background:var(--c-bg);border-radius:12px;border:1px solid var(--c-border);padding:var(--s-3);margin-top:var(--s-3)">'
    +'<div style="font-weight:700;font-size:13px;margin-bottom:8px">✍️ Votre réponse</div>'
    +'<textarea id="forum-answer-text" rows="5" placeholder="Rédigez votre réponse avec le maximum de détails et citez vos sources…" style="width:100%;box-sizing:border-box;padding:10px;border:1.5px solid var(--c-border);border-radius:8px;background:var(--c-bg-2);color:var(--c-text-1);font-size:13px;font-family:inherit;line-height:1.6;resize:vertical;outline:none"></textarea>'
    +'<button id="forum-answer-btn" onclick="_fSubmitAnswer(\''+postId+'\')" style="margin-top:8px;width:100%;padding:11px;background:'+(ac||'#1565C0')+';color:white;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">📤 Publier ma réponse</button>'
    +'</div>';
}

function _fShowNew(prefill) {
  if(!_fCanWrite()){showModule('settings');return;}
  var salon=FORUM_SALONS.find(function(s){return s.id===_forumState.salon;})||FORUM_SALONS[0];
  var mc=document.getElementById('main-content');
  mc.innerHTML=_fBackBtnHTML("_fOpenSalon('"+salon.id+"')")
    +'<div style="padding:var(--s-3) var(--s-4)">'
      +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:var(--s-3)">'
        +'<div style="width:36px;height:36px;border-radius:9px;background:'+salon.color+'18;display:flex;align-items:center;justify-content:center;font-size:18px">'+salon.ico+'</div>'
        +'<div><div style="font-size:11px;color:var(--c-text-3);font-weight:600">Salon · '+salon.label+'</div><div style="font-size:14px;font-weight:700;color:var(--c-text-1)">Nouvelle question</div></div>'
      +'</div>'
      +'<div style="display:flex;flex-direction:column;gap:14px">'
        +'<div><label style="'+_fLabelStyle()+'">Titre *</label><input id="forum-new-titre" placeholder="Ex: Comment calculer Q10 sur un petit bassin versant ?" style="'+_fInputStyle()+'" maxlength="200"></div>'
        +'<div><label style="'+_fLabelStyle()+'">Description détaillée *</label><textarea id="forum-new-contenu" rows="8" placeholder="Contexte · Données disponibles · Ce que vous avez déjà essayé…" style="'+_fInputStyle(true)+'"></textarea></div>'
        +'<button id="forum-submit-btn" onclick="_fSubmitNew(\''+salon.id+'\')" style="width:100%;padding:12px;background:'+salon.color+';color:white;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer">📤 Publier la question</button>'
      +'</div>'
    +'</div><div class="pb-nav"></div>';
  var t=document.getElementById('forum-new-titre');
  if(t){ if(prefill) t.value=prefill; t.focus(); if(prefill) t.setSelectionRange(prefill.length,prefill.length); }
}

async function _fSubmitNew(salonId) {
  var titre=(document.getElementById('forum-new-titre')||{}).value.trim();
  var contenu=(document.getElementById('forum-new-contenu')||{}).value.trim();
  if(!titre){alert('Donnez un titre à votre question.');return;}
  if(contenu.length<20){alert('La description doit faire au moins 20 caractères.');return;}
  if(!SupaDB) return;
  var btn=document.getElementById('forum-submit-btn');
  if(btn){btn.disabled=true;btn.textContent='⏳ Publication…';}
  var res=await SupaDB.from('forum_posts').insert({user_id:_fUserId(),author_name:_fUserName(),author_plan:((_fAuthUser()&&_fAuthUser().plan)||'free'),titre:titre,contenu:contenu,channel:salonId,tags:[salonId],votes_count:0,answers_count:0,is_solved:false,is_pinned:false,is_deleted:false});
  if(res.error){alert('Erreur : '+res.error.message);if(btn){btn.disabled=false;btn.textContent='📤 Publier la question';}return;}
  _forumState.salon=salonId; _fRenderList();
}

async function _fSubmitAnswer(postId) {
  var ta=document.getElementById('forum-answer-text'); if(!ta) return;
  var contenu=ta.value.trim();
  if(contenu.length<10){alert('La réponse doit faire au moins 10 caractères.');return;}
  if(!SupaDB) return;
  var btn=document.getElementById('forum-answer-btn');
  if(btn){btn.disabled=true;btn.textContent='⏳ Publication…';}
  var insertRes;
  try {
    insertRes=await SupaDB.from('forum_answers').insert({post_id:postId,user_id:_fUserId(),author_name:_fUserName(),author_plan:((_fAuthUser()&&_fAuthUser().plan)||'free'),contenu:contenu,votes_count:0,is_best_answer:false,is_deleted:false});
  } catch(e) {
    insertRes={error:e};
  }
  if(insertRes&&insertRes.error){
    alert('Erreur : '+(insertRes.error.message||'impossible de publier la réponse'));
    if(btn){btn.disabled=false;btn.textContent='📤 Publier ma réponse';}
    return;
  }
  SupaDB.rpc('increment_answers',{post_id:postId}).catch(function(){});
  ta.value='';
  if(btn){btn.disabled=false;btn.textContent='📤 Publier ma réponse';}
  var list=document.getElementById('forum-answers-list');
  var cnt=document.getElementById('forum-answers-count');
  if(list){
    var empty=list.querySelector('[data-empty-answers]');
    if(empty) empty.remove();
    var salon=FORUM_SALONS.find(function(s){return s.id===_forumState.salon;})||FORUM_SALONS[0];
    var fakeA={id:'tmp'+Date.now(),post_id:postId,user_id:_fUserId(),author_name:_fUserName(),author_plan:((_fAuthUser()&&_fAuthUser().plan)||'free'),contenu:contenu,votes_count:0,is_best_answer:false,created_at:new Date().toISOString()};
    var wrap=document.createElement('div');
    wrap.innerHTML=_fAnswerHTML(fakeA,0,false,false,salon.color);
    list.appendChild(wrap.firstChild);
    if(cnt){var n=list.querySelectorAll('[data-answer]').length;cnt.textContent=n+' réponse'+(n>1?'s':'');}
    list.lastElementChild&&list.lastElementChild.scrollIntoView({behavior:'smooth',block:'nearest'});
    return;
  }
  _fOpenPost(postId);
}

async function _fVote(type,targetId,value) {
  var uid=_fUserId(); if(!uid){alert('Connectez-vous pour voter.');return;} if(!SupaDB) return;
  var btn=document.querySelector('[data-vote="'+targetId+'"]');
  if(btn){btn.disabled=true;}
  await SupaDB.from('forum_votes').upsert({user_id:uid,target_id:targetId,target_type:type,value:value},{onConflict:'user_id,target_id'});
  await SupaDB.rpc('refresh_votes',{target_id:targetId,target_type:type}).catch(function(){});
  var tbl=type==='post'?'forum_posts':'forum_answers';
  var r=await SupaDB.from(tbl).select('votes_count').eq('id',targetId).single().catch(function(){return null;});
  var salon=FORUM_SALONS.find(function(s){return s.id===_forumState.salon;})||FORUM_SALONS[0];
  btn=document.querySelector('[data-vote="'+targetId+'"]');
  if(btn&&r&&r.data!=null){
    btn.textContent='👍 '+(r.data.votes_count||0);
    btn.setAttribute('style',_fVoteBtn(true,salon.color));
    btn.disabled=false;
    return;
  }
  if(_forumState.view==='post') _fOpenPost(_forumState.postId); else _fRenderList();
}

async function _fMarkBest(answerId,postId) {
  if(!SupaDB) return;
  await Promise.all([
    SupaDB.from('forum_answers').update({is_best_answer:true}).eq('id',answerId),
    SupaDB.from('forum_posts').update({is_solved:true}).eq('id',postId)
  ]);
  _fOpenPost(postId);
}

async function _fPin(postId,pinned) {
  if(!SupaDB||!_fIsAdmin()) return;
  await SupaDB.from('forum_posts').update({is_pinned:pinned}).eq('id',postId);
  _fOpenPost(postId);
}

async function _fDeletePost(postId) {
  if(!confirm('Supprimer cette question ?')) return; if(!SupaDB) return;
  await SupaDB.from('forum_posts').update({is_deleted:true}).eq('id',postId);
  _fOpenSalon(_forumState.salon);
}

async function _fDeleteAnswer(answerId) {
  if(!confirm('Supprimer cette réponse ?')) return; if(!SupaDB) return;
  await SupaDB.from('forum_answers').update({is_deleted:true}).eq('id',answerId);
  var card=document.querySelector('[data-answer="'+answerId+'"]');
  if(card){
    card.remove();
    var cnt=document.getElementById('forum-answers-count');
    var list=document.getElementById('forum-answers-list');
    if(cnt&&list){var n=list.querySelectorAll('[data-answer]').length;cnt.textContent=n+' réponse'+(n>1?'s':'');}
    return;
  }
  _fOpenPost(_forumState.postId);
}
