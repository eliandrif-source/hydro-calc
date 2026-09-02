/* HydroCalc — file de modération communautaire admin, rendu DOM sûr. */
(function(){
  'use strict';
  if(window.__HC_COMMUNITY_ADMIN_LOADED__)return;
  window.__HC_COMMUNITY_ADMIN_LOADED__=true;

  var baseBuild=window.buildCoffre;
  var currentStatus='pending';

  function n(tag,text,css){var e=document.createElement(tag);if(text!=null)e.textContent=String(text);if(css)e.style.cssText=css;return e;}
  function b(text,fn,css){var e=n('button',text,css);e.type='button';e.addEventListener('click',fn);return e;}
  function admin(){return !!(window.AUTH&&AUTH.user&&AUTH.user.isAdmin===true&&AUTH.user.plan==='admin');}
  function toast(msg){if(typeof window.authToast==='function')window.authToast(msg);}
  function labelKind(kind){return {forum_post:'Question forum',forum_reply:'Réponse forum',message:'Message privé'}[kind]||kind;}
  function statusLabel(s){return {pending:'À traiter',reviewed:'Traité',dismissed:'Classé sans suite'}[s]||s;}

  function pill(text,bg,co){return n('span',text,'display:inline-flex;align-items:center;padding:3px 8px;border-radius:999px;background:'+bg+';color:'+co+';font-size:9.5px;font-weight:800');}

  async function action(kind,id,status){
    var r=await SupaDB.rpc('community_admin_review_report',{p_kind:kind,p_report_id:id,p_status:status});
    if(r.error||r.data!==true){toast('Action de modération impossible.');return false;}
    toast(status==='reviewed'?'Signalement traité ✓':'Signalement classé ✓');return true;
  }
  async function hide(kind,id){
    if(!window.confirm('Masquer ce contenu signalé et marquer le signalement comme traité ?'))return false;
    var r=await SupaDB.rpc('community_admin_hide_reported_target',{p_kind:kind,p_report_id:id});
    if(r.error||r.data!==true){toast('Impossible de masquer ce contenu.');return false;}
    toast('Contenu masqué et signalement traité ✓');return true;
  }

  function renderCard(item,host){
    var card=n('article',null,'background:var(--c-surface);border:1px solid var(--c-border);border-radius:12px;padding:13px 14px;margin-bottom:9px');
    var top=n('div',null,'display:flex;gap:8px;align-items:flex-start;flex-wrap:wrap');
    var title=n('div',null,'flex:1;min-width:180px');
    title.appendChild(n('div',item.title||labelKind(item.kind),'font-size:12.5px;font-weight:800;color:var(--c-text);line-height:1.35'));
    title.appendChild(n('div',labelKind(item.kind)+' · '+new Date(item.created_at).toLocaleString('fr-FR'),'font-size:9.5px;color:var(--c-text-3);margin-top:3px'));
    top.appendChild(title);
    top.appendChild(pill(statusLabel(item.report_status),item.report_status==='pending'?'#FFF3CD':item.report_status==='reviewed'?'#E4F5EA':'#EEF1F4',item.report_status==='pending'?'#7A5600':item.report_status==='reviewed'?'#166038':'#55606D'));
    card.appendChild(top);

    if(item.salon_id)card.appendChild(n('div','Salon : '+item.salon_id,'font-size:9.5px;color:var(--c-primary);font-weight:700;margin-top:7px'));
    var content=n('div',item.content||'[contenu non textuel]','white-space:pre-wrap;overflow-wrap:anywhere;background:var(--c-bg,var(--c-surface-2));border-radius:9px;padding:10px 11px;margin-top:9px;font-size:11.5px;line-height:1.5;color:var(--c-text)');
    card.appendChild(content);
    card.appendChild(n('div','Motif : '+(item.reason||'—'),'font-size:10.5px;color:#8A2C24;background:#FFF5F4;border-radius:8px;padding:8px 10px;margin-top:8px;white-space:pre-wrap;overflow-wrap:anywhere'));
    card.appendChild(n('div','Auteur : '+(item.author_name||'Membre HydroCalc')+' · Signalé par : '+(item.reporter_name||'Membre HydroCalc'),'font-size:9.5px;color:var(--c-text-3);margin-top:7px'));

    if(item.report_status==='pending'){
      var actions=n('div',null,'display:flex;gap:7px;flex-wrap:wrap;margin-top:10px');
      var hideBtn=b('Masquer + traiter',async function(){hideBtn.disabled=true;var ok=await hide(item.kind,item.report_id);hideBtn.disabled=false;if(ok)loadQueue();},'border:1px solid #E6B5B0;background:#FFF5F4;color:#A82018;border-radius:8px;padding:6px 9px;font-size:10px;font-weight:750;cursor:pointer');
      var reviewBtn=b('Traiter sans masquer',async function(){reviewBtn.disabled=true;var ok=await action(item.kind,item.report_id,'reviewed');reviewBtn.disabled=false;if(ok)loadQueue();},'border:1px solid #9BCFAE;background:#F0FBF4;color:#166038;border-radius:8px;padding:6px 9px;font-size:10px;font-weight:750;cursor:pointer');
      var dismissBtn=b('Classer sans suite',async function(){dismissBtn.disabled=true;var ok=await action(item.kind,item.report_id,'dismissed');dismissBtn.disabled=false;if(ok)loadQueue();},'border:1px solid var(--c-border);background:var(--c-bg);color:var(--c-text-3);border-radius:8px;padding:6px 9px;font-size:10px;font-weight:700;cursor:pointer');
      actions.appendChild(hideBtn);actions.appendChild(reviewBtn);actions.appendChild(dismissBtn);card.appendChild(actions);
    }
    host.appendChild(card);
  }

  async function loadQueue(){
    var host=document.getElementById('coffre-community-list');if(!host||!window.SupaDB||!admin())return;
    host.replaceChildren(n('div','Chargement des signalements…','padding:18px;text-align:center;color:var(--c-text-3);font-size:11px'));
    var r=await SupaDB.rpc('community_admin_reports',{p_status:currentStatus});
    host.replaceChildren();
    if(r.error){host.appendChild(n('div','Impossible de charger les signalements.','padding:16px;color:var(--c-danger);font-size:11px'));return;}
    var rows=r.data||[];
    var count=document.getElementById('coffre-community-count');if(count)count.textContent=String(rows.length);
    if(!rows.length){host.appendChild(n('div','Aucun signalement dans cette vue.','padding:20px;text-align:center;color:var(--c-text-3);font-size:11px'));return;}
    rows.forEach(function(x){renderCard(x,host);});
  }

  function appendModeration(){
    if(!admin())return;
    var root=document.getElementById('coffre-content');if(!root||document.getElementById('coffre-community'))return;
    var section=n('section',null,'padding:0 var(--s-4) var(--s-6)');section.id='coffre-community';
    var head=n('div',null,'display:flex;align-items:center;gap:8px;margin:24px 0 10px');
    head.appendChild(n('div','🛡️ Modération communauté','font-size:14px;font-weight:800;color:var(--c-text)'));
    var count=pill('0','#1565C0','#fff');count.id='coffre-community-count';head.appendChild(count);section.appendChild(head);
    section.appendChild(n('div','Forum et messages privés explicitement signalés. La messagerie complète n’est jamais exposée ici.','font-size:10.5px;color:var(--c-text-3);line-height:1.5;margin-bottom:9px'));
    var tabs=n('div',null,'display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px');
    [['pending','À traiter'],['reviewed','Traités'],['dismissed','Classés'],['all','Tous']].forEach(function(v){var x=b(v[1],function(){currentStatus=v[0];tabs.querySelectorAll('button').forEach(function(z){z.dataset.active='0';z.style.background='var(--c-bg)';z.style.color='var(--c-text-2)';});x.dataset.active='1';x.style.background='#1565C0';x.style.color='#fff';loadQueue();},'border:1px solid var(--c-border);background:'+(v[0]===currentStatus?'#1565C0':'var(--c-bg)')+';color:'+(v[0]===currentStatus?'#fff':'var(--c-text-2)')+';border-radius:8px;padding:6px 10px;font-size:10px;font-weight:750;cursor:pointer');tabs.appendChild(x);});
    section.appendChild(tabs);var list=n('div');list.id='coffre-community-list';section.appendChild(list);root.appendChild(section);loadQueue();
  }

  if(typeof baseBuild==='function'){
    window.buildCoffre=async function(){await baseBuild();appendModeration();};
  }
  window.HydroCalcCommunityAdmin={loadQueue:loadQueue};
})();
