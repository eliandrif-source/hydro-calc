/* HydroCalc — gestion personnelle des utilisateurs bloqués, DOM sûr. */
(function(){
  'use strict';
  if(window.__HC_MESSAGING_BLOCKS_LOADED__)return;
  window.__HC_MESSAGING_BLOCKS_LOADED__=true;

  function n(tag,text,css){var e=document.createElement(tag);if(text!=null)e.textContent=String(text);if(css)e.style.cssText=css;return e;}
  function b(text,fn,css){var e=n('button',text,css);e.type='button';e.addEventListener('click',fn);return e;}
  function toast(msg){if(typeof window.authToast==='function')window.authToast(msg);else if(typeof window._mToast==='function')window._mToast(msg);}
  function fmtDate(value){var d=new Date(value);return Number.isFinite(d.getTime())?d.toLocaleDateString('fr-FR',{day:'2-digit',month:'long',year:'numeric'}):'—';}

  async function listBlocks(){
    if(!window.SupaDB)return {data:[],error:new Error('offline')};
    return SupaDB.rpc('message_my_blocks');
  }

  async function unblock(id,name,button,onDone){
    if(!id||!window.SupaDB)return;
    if(!window.confirm('Débloquer '+String(name||'ce membre')+' ? Cette personne pourra de nouveau vous contacter si les autres règles de messagerie l’autorisent.'))return;
    if(button)button.disabled=true;
    var r=await SupaDB.rpc('message_block_user',{p_other:id,p_block:false});
    if(button)button.disabled=false;
    if(r.error||r.data!==true){toast('Déblocage impossible.');return;}
    toast('Membre débloqué ✓');
    if(typeof onDone==='function')onDone();
  }

  async function renderList(host){
    if(!host)return;
    host.replaceChildren(n('div','Chargement…','padding:16px;text-align:center;color:var(--c-text-3);font-size:11px'));
    var r=await listBlocks();host.replaceChildren();
    if(r.error){host.appendChild(n('div','Impossible de charger vos utilisateurs bloqués.','padding:14px;color:var(--c-danger);font-size:11px'));return;}
    var rows=r.data||[];
    if(!rows.length){host.appendChild(n('div','Vous n’avez bloqué aucun utilisateur.','padding:18px;text-align:center;color:var(--c-text-3);font-size:11px'));return;}
    rows.forEach(function(row){
      var card=n('div',null,'display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid var(--c-border)');
      var avatar=n('div',(row.blocked_name||'M').trim().slice(0,1).toUpperCase(),'width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--c-primary-l,#E8F2FF);color:var(--c-primary);font-weight:850;flex:none');
      var info=n('div',null,'flex:1;min-width:0');info.appendChild(n('div',row.blocked_name||'Membre HydroCalc','font-size:12px;font-weight:800;color:var(--c-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap'));
      info.appendChild(n('div','Bloqué le '+fmtDate(row.blocked_at),'font-size:9.5px;color:var(--c-text-3);margin-top:2px'));
      var btn=b('Débloquer',function(){unblock(row.blocked_id,row.blocked_name,btn,function(){renderList(host);});},'border:1px solid #9BCFAE;background:#F0FBF4;color:#166038;border-radius:8px;padding:6px 9px;font-size:10px;font-weight:750;cursor:pointer;flex:none');
      card.appendChild(avatar);card.appendChild(info);card.appendChild(btn);host.appendChild(card);
    });
  }

  function openPanel(){
    var old=document.getElementById('hc-blocked-users-modal');if(old)old.remove();
    var modal=n('div',null,'position:fixed;inset:0;z-index:10020;background:rgba(10,24,40,.55);display:flex;align-items:flex-end;justify-content:center');modal.id='hc-blocked-users-modal';
    var card=n('section',null,'width:100%;max-width:520px;max-height:86vh;overflow:auto;background:var(--c-surface);border-radius:18px 18px 0 0;padding:18px;padding-bottom:calc(18px + env(safe-area-inset-bottom))');
    var head=n('div',null,'display:flex;align-items:flex-start;gap:10px;margin-bottom:8px');var title=n('div',null,'flex:1');title.appendChild(n('div','Utilisateurs bloqués','font-size:17px;font-weight:850;color:var(--c-text)'));title.appendChild(n('div','Cette liste est privée. Les personnes bloquées ne sont pas informées de votre décision.','font-size:10.5px;color:var(--c-text-3);line-height:1.45;margin-top:3px'));
    var close=b('×',function(){modal.remove();},'border:none;background:transparent;color:var(--c-text-3);font-size:25px;line-height:1;cursor:pointer;padding:0 4px');close.setAttribute('aria-label','Fermer');head.appendChild(title);head.appendChild(close);card.appendChild(head);
    var list=n('div');list.id='hc-blocked-users-list';card.appendChild(list);modal.appendChild(card);modal.addEventListener('click',function(e){if(e.target===modal)modal.remove();});document.body.appendChild(modal);renderList(list);
  }

  function installEntry(){
    if(document.getElementById('hc-blocked-users-entry'))return;
    var root=document.getElementById('coffre-content');if(!root)return;
    var section=n('section',null,'padding:0 var(--s-4) var(--s-5)');section.id='hc-blocked-users-entry';
    var card=n('div',null,'border:1px solid var(--c-border);background:var(--c-surface);border-radius:12px;padding:13px 14px;display:flex;align-items:center;gap:10px');
    var txt=n('div',null,'flex:1');txt.appendChild(n('div','Confidentialité · Utilisateurs bloqués','font-size:12.5px;font-weight:800;color:var(--c-text)'));txt.appendChild(n('div','Consultez votre liste personnelle et débloquez un membre à tout moment.','font-size:10px;color:var(--c-text-3);margin-top:3px;line-height:1.4'));
    card.appendChild(txt);card.appendChild(b('Gérer',openPanel,'border:1px solid var(--c-border);background:var(--c-bg);color:var(--c-primary);border-radius:8px;padding:7px 10px;font-size:10px;font-weight:800;cursor:pointer'));section.appendChild(card);root.appendChild(section);
  }

  var baseBuild=window.buildCoffre;
  if(typeof baseBuild==='function')window.buildCoffre=async function(){await baseBuild();installEntry();};
  window.HydroCalcMessagingBlocks={open:openPanel,renderList:renderList,list:listBlocks};
})();