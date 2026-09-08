/* HydroCalc — safe DOM renderer for messaging conversation/contact list. */
(function(){
  'use strict';
  if(window.__HC_MESSAGING_UI_SECURITY_LOADED__)return;
  window.__HC_MESSAGING_UI_SECURITY_LOADED__=true;

  function n(tag,text,style){var e=document.createElement(tag);if(text!=null)e.textContent=String(text);if(style)e.style.cssText=style;return e;}
  function b(text,fn,style){var e=n('button',text,style);e.type='button';e.addEventListener('click',function(ev){ev.stopPropagation();fn(ev);});return e;}
  function clear(e){while(e&&e.firstChild)e.removeChild(e.firstChild);}
  function name(v){return window.HydroCalcMessagingSecurity?HydroCalcMessagingSecurity.displayName(v):String(v||'Membre HydroCalc');}
  function ago(iso){if(typeof window._mTimeAgo==='function')return window._mTimeAgo(iso);return '';}
  async function uid(){if(window.AUTH&&AUTH._uid)return AUTH._uid;if(window._currentUser&&_currentUser.id)return _currentUser.id;if(!window.SupaDB)return null;var r=await SupaDB.auth.getUser();return r&&r.data&&r.data.user?r.data.user.id:null;}

  window._mRenderList=async function(){
    var root=document.getElementById('msg-left-body');if(!root||!window.SupaDB)return;
    clear(root);root.appendChild(n('div','Chargement…','padding:20px;text-align:center;color:var(--c-text-3);font-size:12px'));
    var me=await uid();if(!me){clear(root);root.appendChild(n('div','Reconnectez-vous pour accéder à la messagerie.','padding:24px;text-align:center;color:var(--c-text-3);font-size:12px'));return;}
    var tr=await SupaDB.from('message_threads').select('id,user_a_id,user_b_id,user_a_name,user_b_name,last_message,last_message_at,unread_a,unread_b').order('last_message_at',{ascending:false});
    var rq=await SupaDB.from('friend_requests').select('id,sender_id,sender_name,created_at,status').eq('receiver_id',me).eq('status','pending');
    clear(root);
    (rq.data||[]).forEach(function(r){
      var row=n('div',null,'display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--c-border);background:rgba(21,101,192,.055)');
      var nm=name(r.sender_name);row.appendChild(n('div',nm.charAt(0).toUpperCase(),'width:36px;height:36px;border-radius:50%;background:#1565C0;color:white;display:flex;align-items:center;justify-content:center;font-weight:800;flex-shrink:0'));
      var body=n('div',null,'flex:1;min-width:0');body.appendChild(n('div',nm,'font-size:12px;font-weight:800;color:var(--c-text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis'));body.appendChild(n('div','Demande de contact · '+ago(r.created_at),'font-size:10px;color:var(--c-text-3);margin-top:2px'));row.appendChild(body);
      row.appendChild(b('✓',function(){window._mAcceptRequest(r.id,r.sender_id,nm);},'border:none;background:#2E7D32;color:white;border-radius:7px;padding:5px 9px;cursor:pointer'));
      row.appendChild(b('✕',function(){window._mRejectRequest(r.id);},'border:none;background:#C62828;color:white;border-radius:7px;padding:5px 9px;cursor:pointer'));
      root.appendChild(row);
    });
    var threads=tr.data||[];
    if(!threads.length){var empty=n('div',null,'padding:32px 20px;text-align:center;color:var(--c-text-3)');empty.appendChild(n('div','💬','font-size:34px;opacity:.45;margin-bottom:8px'));empty.appendChild(n('div','Aucune conversation.','font-size:12px'));empty.appendChild(b('+ Nouvelle conversation',function(){window._mShowNewConvPanel();},'margin-top:12px;padding:8px 14px;border:none;background:#1565C0;color:white;border-radius:9px;font-size:11px;font-weight:800;cursor:pointer'));root.appendChild(empty);return;}
    threads.forEach(function(t){
      var isA=t.user_a_id===me, otherId=isA?t.user_b_id:t.user_a_id, nm=name(isA?t.user_b_name:t.user_a_name), unread=isA?(t.unread_a||0):(t.unread_b||0);
      var row=n('div',null,'display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid var(--c-border);cursor:pointer;background:'+(window._msgState&&_msgState.threadId===t.id?'rgba(21,101,192,.09)':'transparent'));row.id='thread-row-'+t.id;row.tabIndex=0;
      function open(){window._mOpenConv(t.id,otherId,nm);}
      row.addEventListener('click',open);row.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
      row.appendChild(n('div',nm.charAt(0).toUpperCase(),'width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#1565C0,#0D47A1);color:white;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;flex-shrink:0'));
      var body=n('div',null,'flex:1;min-width:0');var top=n('div',null,'display:flex;align-items:center;justify-content:space-between;gap:8px');top.appendChild(n('span',nm,'font-size:12px;font-weight:'+(unread?'800':'650')+';color:var(--c-text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis'));top.appendChild(n('span',ago(t.last_message_at),'font-size:9.5px;color:var(--c-text-4);flex-shrink:0'));body.appendChild(top);body.appendChild(n('div',String(t.last_message||'Démarrez la conversation…').slice(0,90),'font-size:10.5px;color:var(--c-text-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:3px'));row.appendChild(body);
      if(unread)row.appendChild(n('span',unread>99?'99+':String(unread),'min-width:19px;height:19px;padding:0 4px;border-radius:999px;background:#1565C0;color:white;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;flex-shrink:0'));
      root.appendChild(row);
    });
  };

  window.HydroCalcMessagingUI={safeListRenderer:true};
})();
