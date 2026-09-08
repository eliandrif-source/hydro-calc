/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — MESSAGING SECURITY BRIDGE
   Requires supabase/migrations/20260902_messaging_security.sql.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_MESSAGING_SECURITY_LOADED__) return;
  window.__HC_MESSAGING_SECURITY_LOADED__ = true;

  var ALLOWED_MIME = new Set([
    'image/jpeg','image/png','image/webp','application/pdf','text/plain','text/csv',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ]);
  var MAX_FILE = 10 * 1024 * 1024;
  var previewObjectUrl = null;

  function toast(msg, color) {
    if (typeof window._mToast === 'function') window._mToast(msg, color);
    else if (typeof window.authToast === 'function') window.authToast(msg);
  }
  function currentUid() {
    return (window.AUTH && AUTH._uid) || (window._currentUser && _currentUser.id) || null;
  }
  async function uid() {
    var id = currentUid();
    if (id) return id;
    if (!window.SupaDB) return null;
    var r = await SupaDB.auth.getUser();
    return r && r.data && r.data.user ? r.data.user.id : null;
  }
  function clear(el) { while (el && el.firstChild) el.removeChild(el.firstChild); }
  function node(tag, text, style) {
    var el = document.createElement(tag);
    if (text != null) el.textContent = String(text);
    if (style) el.style.cssText = style;
    return el;
  }
  function button(label, handler, style) {
    var b = node('button', label, style);
    b.type = 'button'; b.addEventListener('click', handler); return b;
  }
  function displayName(v) { return String(v || 'Membre HydroCalc').replace(/[\u0000-\u001f\u007f]/g,'').trim().slice(0,120) || 'Membre HydroCalc'; }

  window._mDoSearch = async function (q) {
    var el = document.getElementById('msg-user-list'); if (!el || !window.SupaDB) return;
    q = String(q || '').trim();
    if (q.length < 2) return;
    var usersRes = await SupaDB.rpc('search_message_members', { p_query:q });
    if (usersRes.error) { clear(el); el.appendChild(node('div','Recherche indisponible.','text-align:center;color:var(--c-danger);padding:16px;font-size:12px')); return; }
    var users = usersRes.data || [];
    var frRes = await SupaDB.from('friend_requests').select('id,sender_id,receiver_id,status');
    var me = await uid(), frMap = {};
    (frRes.data || []).forEach(function (fr) {
      var other = fr.sender_id === me ? fr.receiver_id : fr.sender_id;
      frMap[other] = { id:fr.id, status:fr.status, isSender:fr.sender_id === me };
    });
    clear(el);
    if (!users.length) { el.appendChild(node('div','Aucun membre trouvé.','text-align:center;color:var(--c-text-3);padding:24px 0;font-size:12px')); return; }
    users.forEach(function (u) {
      var name = displayName(u.name), fr = frMap[u.id];
      var row = node('div',null,'display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--c-border)');
      row.appendChild(node('div',name.charAt(0).toUpperCase(),'width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#1565C0,#0D47A1);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:14px;flex-shrink:0'));
      var body=node('div',null,'flex:1;min-width:0'); body.appendChild(node('div',name,'font-size:13px;font-weight:700;color:var(--c-text-1)')); body.appendChild(node('div','Membre HydroCalc','font-size:10px;color:var(--c-text-3)')); row.appendChild(body);
      if (fr && fr.status === 'accepted') row.appendChild(button('💬',function(){ window.startConversation(u.id,name); },'border:none;background:#1565C0;color:white;border-radius:7px;padding:5px 10px;cursor:pointer'));
      else if (fr && fr.status === 'pending' && fr.isSender) row.appendChild(node('span','⏳ En attente','font-size:10px;color:var(--c-text-3);font-weight:600'));
      else if (fr && fr.status === 'pending') row.appendChild(button('✔',function(){ window._mAcceptRequest(fr.id,u.id,name); },'border:none;background:#2E7D32;color:white;border-radius:7px;padding:5px 10px;cursor:pointer'));
      else row.appendChild(button('＋ Ajouter',function(){ window._mSendRequest(u.id,name); },'background:var(--c-bg-2);border:1.5px solid #1565C0;color:#1565C0;border-radius:7px;padding:5px 10px;font-size:11px;font-weight:700;cursor:pointer'));
      el.appendChild(row);
    });
  };

  window._mSendRequest = async function (otherId) {
    if (!window.SupaDB) return;
    var r = await SupaDB.rpc('send_friend_request', { p_receiver:otherId });
    if (r.error) { toast('Impossible d’envoyer la demande.','#C62828'); return; }
    toast(r.data === 'accepted' ? 'Contact accepté ✓' : 'Demande envoyée ✓');
    var q=(document.getElementById('msg-search-user')||{}).value||''; if(q.trim().length>=2) window._mDoSearch(q);
  };
  window._mAcceptRequest = async function (requestId, senderId, senderName) {
    if (!window.SupaDB) return;
    var r=await SupaDB.rpc('respond_friend_request',{p_request_id:requestId,p_accept:true});
    if(r.error||r.data!==true){toast('Impossible d’accepter la demande.','#C62828');return;}
    window.startConversation(senderId,displayName(senderName));
  };
  window._mRejectRequest = async function (requestId) {
    if (!window.SupaDB) return;
    var r=await SupaDB.rpc('respond_friend_request',{p_request_id:requestId,p_accept:false});
    if(r.error||r.data!==true){toast('Impossible de refuser la demande.','#C62828');return;}
    if(typeof window._mRenderList==='function') window._mRenderList();
  };

  window.startConversation = async function (otherId, otherName) {
    if (!window.SupaDB) return;
    var r=await SupaDB.rpc('message_get_or_create_thread',{p_other:otherId});
    if(r.error||!r.data){toast('Conversation indisponible : contact accepté requis.','#C62828');return;}
    if(typeof window.showModule==='function') window.showModule('messagerie');
    setTimeout(function(){ if(typeof window._mOpenConv==='function') window._mOpenConv(r.data,otherId,displayName(otherName)); },100);
  };

  window._mOnFileSelected = function (input) {
    var file=input.files&&input.files[0]; if(!file)return;
    if(file.size>MAX_FILE){toast('Fichier trop lourd : 10 Mo maximum.','#C62828');input.value='';return;}
    if(!ALLOWED_MIME.has(file.type)){toast('Type de fichier non autorisé.','#C62828');input.value='';return;}
    if(previewObjectUrl){URL.revokeObjectURL(previewObjectUrl);previewObjectUrl=null;}
    window._msgState.pendingFile=file;
    var p=document.getElementById('msg-file-preview'); if(!p)return; clear(p); p.style.display='flex';
    var wrap=node('div',null,'display:flex;align-items:center;gap:10px;background:var(--c-bg-2);border-radius:10px;padding:8px 12px;width:100%;box-sizing:border-box');
    if(file.type.indexOf('image/')===0){previewObjectUrl=URL.createObjectURL(file);var im=node('img');im.src=previewObjectUrl;im.alt='Aperçu de la pièce jointe';im.style.cssText='height:54px;max-width:90px;border-radius:8px;object-fit:cover';wrap.appendChild(im);}else wrap.appendChild(node('span','📄','font-size:26px'));
    var info=node('div',null,'flex:1;min-width:0');info.appendChild(node('div',file.name,'font-size:12px;font-weight:600;color:var(--c-text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis'));info.appendChild(node('div',(file.size/1024/1024).toFixed(2)+' Mo','font-size:11px;color:var(--c-text-3)'));wrap.appendChild(info);
    wrap.appendChild(button('✕',function(){window._mClearFile();},'border:none;background:none;cursor:pointer;font-size:18px;color:var(--c-text-3)'));p.appendChild(wrap);
  };
  var legacyClear=window._mClearFile;
  window._mClearFile=function(){if(previewObjectUrl){URL.revokeObjectURL(previewObjectUrl);previewObjectUrl=null;}if(typeof legacyClear==='function')legacyClear();else{window._msgState.pendingFile=null;}};

  function safeExtension(name) {
    var m=String(name||'').toLowerCase().match(/\.([a-z0-9]{1,8})$/); return m?m[1]:'bin';
  }
  window._mSend = async function () {
    var input=document.getElementById('msg-input'); if(!input||!window.SupaDB)return;
    var content=String(input.value||'').trim(), file=window._msgState&&_msgState.pendingFile, thread=window._msgState&&_msgState.threadId;
    if(!thread||(!content&&!file))return;
    if(content.length>5000){toast('Message trop long : 5 000 caractères maximum.','#C62828');return;}
    var attachmentPath=null, attachmentType=null, me=await uid();
    var sendBtn=document.querySelector('[onclick="_mSend()"]'); if(sendBtn)sendBtn.disabled=true;
    try{
      if(file){
        if(file.size>MAX_FILE||!ALLOWED_MIME.has(file.type))throw new Error('pièce jointe refusée');
        attachmentPath=me+'/'+Date.now()+'_'+Math.random().toString(36).slice(2)+'.'+safeExtension(file.name);
        var up=await SupaDB.storage.from('message-attachments').upload(attachmentPath,file,{contentType:file.type,upsert:false});if(up.error)throw up.error;attachmentType=file.type;
      }
      var r=await SupaDB.rpc('message_send',{p_thread_id:thread,p_content:content||null,p_attachment_path:attachmentPath,p_attachment_type:attachmentType});
      if(r.error)throw r.error;
      input.value='';input.style.height='auto';window._mClearFile();
      await window._mLoadMessages(thread); if(typeof window._mRenderList==='function')window._mRenderList();
    }catch(e){
      if(attachmentPath){try{await SupaDB.storage.from('message-attachments').remove([attachmentPath]);}catch(_) {}}
      toast('Message non envoyé. Réessayez.','#C62828');
    }finally{if(sendBtn)sendBtn.disabled=false;}
  };

  async function signedAttachment(path) {
    if(!path)return '';
    if(/^https:\/\//i.test(path)) {
      try { var u=new URL(path); if(!/\.supabase\.co$/i.test(u.hostname)) return ''; return u.href; } catch(e){ return ''; }
    }
    var r=await SupaDB.storage.from('message-attachments').createSignedUrl(path,300);
    return r.error||!r.data?'':r.data.signedUrl;
  }
  window._mLoadMessages = async function (threadId) {
    var c=document.getElementById('msg-list');if(!c||!window.SupaDB)return;
    var r=await SupaDB.from('messages').select('id,sender_id,contenu,created_at,attachment_url,attachment_type').eq('thread_id',threadId).eq('is_deleted',false).order('created_at',{ascending:true}).limit(100);
    var msgs=r.data||[], me=await uid(); clear(c);
    if(!msgs.length){c.appendChild(node('div','Aucun message. Dites bonjour !','text-align:center;color:var(--c-text-3);font-size:12px;padding:20px'));return;}
    for(var i=0;i<msgs.length;i++){
      var m=msgs[i], mine=m.sender_id===me, outer=node('div',null,'display:flex;flex-direction:column;align-items:'+(mine?'flex-end':'flex-start'));
      var bubble=node('div',null,'max-width:min(72%,520px);background:'+(mine?'#1565C0':'var(--c-surface)')+';color:'+(mine?'white':'var(--c-text-1)')+';padding:9px 13px;border-radius:'+(mine?'16px 16px 4px 16px':'16px 16px 16px 4px')+';font-size:13px;line-height:1.5;overflow-wrap:anywhere;box-shadow:0 1px 3px rgba(0,0,0,.08)');
      if(m.attachment_url){
        var signed=await signedAttachment(m.attachment_url), type=String(m.attachment_type||'');
        if(signed&&type.indexOf('image/')===0){var im=node('img');im.src=signed;im.alt='Pièce jointe';im.loading='lazy';im.style.cssText='max-width:220px;width:100%;border-radius:10px;display:block;cursor:zoom-in;margin-bottom:6px';im.addEventListener('click',function(ev){window.open(ev.currentTarget.src,'_blank','noopener');});bubble.appendChild(im);}
        else if(signed){var a=node('a','📄 Ouvrir la pièce jointe','display:block;color:inherit;font-size:12px;font-weight:700;margin-bottom:6px');a.href=signed;a.target='_blank';a.rel='noopener noreferrer';bubble.appendChild(a);}
      }
      if(m.contenu){var span=node('span',m.contenu);span.style.whiteSpace='pre-wrap';bubble.appendChild(span);}
      outer.appendChild(bubble);
      var dt=new Date(m.created_at), lbl=Number.isFinite(dt.getTime())?dt.toLocaleString('fr-FR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):'';outer.appendChild(node('div',lbl,'font-size:10px;color:var(--c-text-3);margin-top:2px;padding:0 4px'));c.appendChild(outer);
    }
    c.scrollTop=c.scrollHeight;
  };
  window._mMarkRead=async function(threadId){if(window.SupaDB)await SupaDB.rpc('message_mark_read',{p_thread_id:threadId});};

  window.HydroCalcMessagingSecurity={allowedMime:Array.from(ALLOWED_MIME),maxFileBytes:MAX_FILE,displayName:displayName,safeExtension:safeExtension};
})();
