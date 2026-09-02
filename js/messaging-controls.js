/* HydroCalc — blocage membre + signalement de message privé, rendu DOM sûr. */
(function(){
  'use strict';
  if(window.__HC_MESSAGING_CONTROLS_LOADED__)return;
  window.__HC_MESSAGING_CONTROLS_LOADED__=true;

  var baseOpen=window._mOpenConv;

  function n(tag,text,style){var e=document.createElement(tag);if(text!=null)e.textContent=String(text);if(style)e.style.cssText=style;return e;}
  function b(text,fn,style){var e=n('button',text,style);e.type='button';e.addEventListener('click',fn);return e;}
  function clear(e){while(e&&e.firstChild)e.removeChild(e.firstChild);}
  function toast(msg,color){if(typeof window._mToast==='function')window._mToast(msg,color);else if(typeof window.authToast==='function')window.authToast(msg);}
  async function uid(){if(window.AUTH&&AUTH._uid)return AUTH._uid;if(window._currentUser&&_currentUser.id)return _currentUser.id;if(!window.SupaDB)return null;var r=await SupaDB.auth.getUser();return r&&r.data&&r.data.user?r.data.user.id:null;}
  function cleanReason(v){return String(v||'').replace(/[\u0000-\u001f\u007f]/g,' ').replace(/\s+/g,' ').trim().slice(0,1000);}

  async function isBlocked(otherId){
    if(!window.SupaDB||!otherId)return false;
    var r=await SupaDB.from('message_blocks').select('blocked_id').eq('blocked_id',otherId).limit(1);
    return !r.error&&Array.isArray(r.data)&&r.data.length>0;
  }

  async function toggleBlock(otherId,otherName,button){
    if(!window.SupaDB||!otherId)return;
    var blocked=await isBlocked(otherId);
    var promptText=blocked?'Débloquer '+otherName+' ?':'Bloquer '+otherName+' ? Cette personne ne pourra plus vous envoyer de message ni de demande de contact.';
    if(!window.confirm(promptText))return;
    button.disabled=true;
    var r=await SupaDB.rpc('message_block_user',{p_other:otherId,p_block:!blocked});
    button.disabled=false;
    if(r.error||r.data!==true){toast('Action impossible.','#C62828');return;}
    toast(blocked?'Membre débloqué ✓':'Membre bloqué ✓');
    await decorateHeader(otherId,otherName);
  }

  async function decorateHeader(otherId,otherName){
    var right=document.getElementById('msg-right');if(!right)return;
    var header=right.firstElementChild;if(!header)return;
    var existing=document.getElementById('msg-member-safety');if(existing)existing.remove();
    var wrap=n('div',null,'display:flex;align-items:center;gap:6px;flex-shrink:0');wrap.id='msg-member-safety';
    var blocked=await isBlocked(otherId);
    var blockBtn=b(blocked?'Débloquer':'Bloquer',function(){toggleBlock(otherId,otherName,blockBtn);},'border:1px solid '+(blocked?'#9ecdb0':'#efc4c0')+';background:'+(blocked?'#f0fbf4':'#fff5f4')+';color:'+(blocked?'#166038':'#A82018')+';border-radius:8px;padding:5px 8px;font-size:10px;font-weight:750;cursor:pointer');
    wrap.appendChild(blockBtn);header.appendChild(wrap);
  }

  if(typeof baseOpen==='function'){
    window._mOpenConv=async function(threadId,otherId,otherName){
      await baseOpen(threadId,otherId,otherName);
      await decorateHeader(otherId,String(otherName||'ce membre'));
    };
  }

  async function signedAttachment(path){
    if(!path)return '';
    if(/^https:\/\//i.test(path)){
      try{var u=new URL(path);if(!/\.supabase\.co$/i.test(u.hostname))return '';return u.href;}catch(e){return '';}
    }
    var r=await SupaDB.storage.from('message-attachments').createSignedUrl(path,300);
    return r.error||!r.data?'':r.data.signedUrl;
  }

  async function reportMessage(messageId){
    if(!window.SupaDB||!messageId)return;
    var reason=window.prompt('Pourquoi signalez-vous ce message ?\nEx. spam, harcèlement, contenu inapproprié, tentative d’arnaque.');
    reason=cleanReason(reason);if(!reason)return;
    if(reason.length<3){toast('Motif trop court.','#C62828');return;}
    var r=await SupaDB.rpc('message_report_private',{p_message_id:messageId,p_reason:reason});
    if(r.error){toast('Signalement impossible.','#C62828');return;}
    toast('Message signalé à la modération ✓');
  }

  window._mLoadMessages=async function(threadId){
    var c=document.getElementById('msg-list');if(!c||!window.SupaDB)return;
    var r=await SupaDB.from('messages').select('id,sender_id,contenu,created_at,attachment_url,attachment_type').eq('thread_id',threadId).eq('is_deleted',false).order('created_at',{ascending:true}).limit(100);
    var msgs=r.data||[],me=await uid();clear(c);
    if(r.error){c.appendChild(n('div','Impossible de charger les messages.','padding:20px;text-align:center;color:var(--c-danger);font-size:12px'));return;}
    if(!msgs.length){c.appendChild(n('div','Aucun message. Dites bonjour !','text-align:center;color:var(--c-text-3);font-size:12px;padding:20px'));return;}
    for(var i=0;i<msgs.length;i++){
      var m=msgs[i],mine=m.sender_id===me,outer=n('div',null,'display:flex;flex-direction:column;align-items:'+(mine?'flex-end':'flex-start'));
      var bubble=n('div',null,'max-width:min(72%,520px);background:'+(mine?'#1565C0':'var(--c-surface)')+';color:'+(mine?'white':'var(--c-text-1)')+';padding:9px 13px;border-radius:'+(mine?'16px 16px 4px 16px':'16px 16px 16px 4px')+';font-size:13px;line-height:1.5;overflow-wrap:anywhere;box-shadow:0 1px 3px rgba(0,0,0,.08)');
      if(m.attachment_url){
        var signed=await signedAttachment(m.attachment_url),type=String(m.attachment_type||'');
        if(signed&&type.indexOf('image/')===0){var im=n('img');im.src=signed;im.alt='Pièce jointe';im.loading='lazy';im.style.cssText='max-width:220px;width:100%;border-radius:10px;display:block;cursor:zoom-in;margin-bottom:6px';im.addEventListener('click',function(ev){window.open(ev.currentTarget.src,'_blank','noopener');});bubble.appendChild(im);}
        else if(signed){var a=n('a','📄 Ouvrir la pièce jointe','display:block;color:inherit;font-size:12px;font-weight:700;margin-bottom:6px');a.href=signed;a.target='_blank';a.rel='noopener noreferrer';bubble.appendChild(a);}
      }
      if(m.contenu){var span=n('span',m.contenu);span.style.whiteSpace='pre-wrap';bubble.appendChild(span);}
      outer.appendChild(bubble);
      var meta=n('div',null,'display:flex;align-items:center;gap:7px;margin-top:2px;padding:0 4px');
      var dt=new Date(m.created_at),label=Number.isFinite(dt.getTime())?dt.toLocaleString('fr-FR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):'';
      meta.appendChild(n('span',label,'font-size:10px;color:var(--c-text-3)'));
      if(!mine)meta.appendChild(b('Signaler',function(id){return function(){reportMessage(id);};}(m.id),'border:none;background:transparent;color:var(--c-text-4);padding:0;font-size:9.5px;text-decoration:underline;cursor:pointer'));
      outer.appendChild(meta);c.appendChild(outer);
    }
    c.scrollTop=c.scrollHeight;
  };

  window.HydroCalcMessagingControls={cleanReason:cleanReason,reportMessage:reportMessage,isBlocked:isBlocked};
})();
