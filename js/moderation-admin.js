/* HydroCalc — notifications et sanctions de modération, réservé admin, DOM sûr. */
(function(){
  'use strict';
  if(window.__HC_MODERATION_ADMIN_LOADED__)return;
  window.__HC_MODERATION_ADMIN_LOADED__=true;

  function n(tag,text,css){var e=document.createElement(tag);if(text!=null)e.textContent=String(text);if(css)e.style.cssText=css;return e;}
  function b(text,fn,css){var e=n('button',text,css);e.type='button';e.addEventListener('click',fn);return e;}
  function admin(){return !!(window.AUTH&&AUTH.user&&AUTH.user.isAdmin===true&&AUTH.user.plan==='admin');}
  function toast(msg){if(typeof window.authToast==='function')window.authToast(msg);}
  function fmt(v){var d=new Date(v);return Number.isFinite(d.getTime())?d.toLocaleString('fr-FR'):'—';}

  async function pendingCount(){if(!window.SupaDB||!admin())return 0;var r=await SupaDB.rpc('moderation_pending_count');return r.error?0:Number(r.data||0);}
  async function refreshBadge(){
    if(!admin())return;var count=await pendingCount();var badge=document.getElementById('hc-moderation-badge');
    if(!badge){badge=n('span','0','position:fixed;right:14px;top:14px;z-index:9500;min-width:24px;height:24px;padding:0 6px;border-radius:999px;background:#A82018;color:white;display:none;align-items:center;justify-content:center;font-size:10px;font-weight:850;box-shadow:0 2px 8px rgba(0,0,0,.2)');badge.id='hc-moderation-badge';badge.title='Nouveaux signalements à examiner';document.body.appendChild(badge);}
    badge.textContent=count>99?'99+':String(count);badge.style.display=count>0?'inline-flex':'none';
  }

  async function decide(reportId,decision){
    var note=window.prompt(decision==='no_action'?'Note interne facultative :':'Motif / note interne de la décision :');if(note===null)return false;
    var until=null;if(decision==='suspend'){var raw=window.prompt('Fin de suspension (date/heure locale, ex. 2026-09-15 18:00) :');if(!raw)return false;var d=new Date(raw);if(!Number.isFinite(d.getTime())||d<=new Date()){toast('Date de suspension invalide.');return false;}until=d.toISOString();}
    var r=await SupaDB.rpc('moderation_decide_report',{p_report_id:reportId,p_decision:decision,p_note:note||null,p_suspend_until:until});
    if(r.error||r.data!==true){toast('Décision impossible : '+(r.error&&r.error.message?r.error.message:'réessayez'));return false;}toast('Décision de modération enregistrée ✓');await refreshBadge();return true;
  }

  async function openDecision(reportId){
    var r=await SupaDB.rpc('moderation_get_report',{p_report_id:reportId});if(r.error||!r.data||!r.data.length){toast('Dossier de modération inaccessible.');return;}
    var item=r.data[0],old=document.getElementById('hc-moderation-decision');if(old)old.remove();
    var modal=n('div',null,'position:fixed;inset:0;z-index:10030;background:rgba(10,24,40,.6);display:flex;align-items:flex-end;justify-content:center');modal.id='hc-moderation-decision';
    var card=n('section',null,'width:100%;max-width:560px;max-height:88vh;overflow:auto;background:var(--c-surface);border-radius:18px 18px 0 0;padding:18px;padding-bottom:calc(18px + env(safe-area-inset-bottom))');
    var head=n('div',null,'display:flex;gap:8px;align-items:flex-start');var title=n('div',null,'flex:1');title.appendChild(n('div','Décision de modération','font-size:16px;font-weight:850'));title.appendChild(n('div','Seul le message explicitement signalé est affiché.','font-size:10px;color:var(--c-text-3);margin-top:3px'));head.appendChild(title);head.appendChild(b('×',function(){modal.remove();},'border:none;background:none;font-size:24px;cursor:pointer;color:var(--c-text-3)'));card.appendChild(head);
    card.appendChild(n('div',item.message_content||'[contenu non textuel]','white-space:pre-wrap;overflow-wrap:anywhere;background:var(--c-bg);border-radius:10px;padding:11px;margin-top:12px;font-size:12px;line-height:1.5'));
    card.appendChild(n('div','Motif : '+(item.report_reason||'—'),'font-size:10.5px;color:#8A2C24;background:#FFF5F4;border-radius:8px;padding:9px;margin-top:8px;white-space:pre-wrap'));
    var actions=n('div',null,'display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:12px');
    [['Aucune action','no_action'],['Avertissement','warning'],['Suspendre','suspend'],['Bannir communauté','ban']].forEach(function(x){var btn=b(x[0],async function(){btn.disabled=true;var ok=await decide(reportId,x[1]);btn.disabled=false;if(ok){modal.remove();if(window.HydroCalcCommunityAdmin)HydroCalcCommunityAdmin.loadQueue();}},'border:1px solid var(--c-border);background:var(--c-bg);color:'+(x[1]==='ban'?'#A82018':'var(--c-text)')+';border-radius:9px;padding:9px;font-size:10.5px;font-weight:800;cursor:pointer');actions.appendChild(btn);});card.appendChild(actions);modal.appendChild(card);document.body.appendChild(modal);
  }

  async function loadNotifications(host){
    host.replaceChildren(n('div','Chargement…','padding:12px;color:var(--c-text-3);font-size:10px'));var r=await SupaDB.rpc('moderation_notifications',{p_limit:30});host.replaceChildren();
    if(r.error){host.appendChild(n('div','Notifications indisponibles.','font-size:10px;color:var(--c-danger)'));return;}
    var rows=r.data||[];if(!rows.length){host.appendChild(n('div','Aucune notification de modération.','font-size:10.5px;color:var(--c-text-3);padding:8px 0'));return;}
    rows.forEach(function(x){var row=n('div',null,'display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--c-border)');var info=n('div',null,'flex:1');info.appendChild(n('div',x.title,'font-size:10.5px;font-weight:'+(x.read_at?'650':'850')));info.appendChild(n('div',fmt(x.created_at),'font-size:9px;color:var(--c-text-3);margin-top:2px'));row.appendChild(info);if(x.report_id)row.appendChild(b('Examiner',async function(){await SupaDB.rpc('moderation_mark_notification_read',{p_notification_id:x.id});await openDecision(x.report_id);loadNotifications(host);},'border:1px solid var(--c-border);background:var(--c-bg);color:var(--c-primary);border-radius:7px;padding:5px 7px;font-size:9.5px;font-weight:800;cursor:pointer'));host.appendChild(row);});
  }

  async function loadSanctions(host){
    var r=await SupaDB.from('moderation_sanctions').select('id,user_id,action,reason,starts_at,ends_at,active,created_at').eq('active',true).order('created_at',{ascending:false}).limit(50);host.replaceChildren();
    if(r.error){host.appendChild(n('div','Sanctions indisponibles.','font-size:10px;color:var(--c-danger)'));return;}var rows=r.data||[];if(!rows.length){host.appendChild(n('div','Aucune sanction communautaire active.','font-size:10.5px;color:var(--c-text-3);padding:8px 0'));return;}
    rows.forEach(function(x){var row=n('div',null,'padding:9px 0;border-bottom:1px solid var(--c-border)');row.appendChild(n('div',(x.action==='warning'?'Avertissement':x.action==='suspend'?'Suspension':'Bannissement')+' · '+String(x.user_id).slice(0,8)+'…','font-size:10.5px;font-weight:800'));row.appendChild(n('div',x.reason,'font-size:9.5px;color:var(--c-text-3);margin:3px 0;white-space:pre-wrap;overflow-wrap:anywhere'));if(x.ends_at)row.appendChild(n('div','Jusqu’au '+fmt(x.ends_at),'font-size:9px;color:var(--c-text-3)'));row.appendChild(b('Lever la sanction',async function(){var note=window.prompt('Motif de la levée (facultatif) :');if(note===null)return;var rr=await SupaDB.rpc('moderation_lift_sanction',{p_sanction_id:x.id,p_note:note||null});if(rr.error||rr.data!==true){toast('Impossible de lever la sanction.');return;}toast('Sanction levée ✓');loadSanctions(host);},'margin-top:6px;border:1px solid #9BCFAE;background:#F0FBF4;color:#166038;border-radius:7px;padding:5px 7px;font-size:9.5px;font-weight:800;cursor:pointer'));host.appendChild(row);});
  }

  function install(){
    if(!admin())return;var root=document.getElementById('coffre-content');if(!root||document.getElementById('hc-moderation-ops'))return;var section=n('section',null,'padding:0 var(--s-4) var(--s-6)');section.id='hc-moderation-ops';section.appendChild(n('div','🔔 Centre de modération','font-size:14px;font-weight:850;margin:24px 0 4px'));section.appendChild(n('div','Notifications de signalements et sanctions communautaires. Une sanction ne supprime pas le compte ni les projets de calcul.','font-size:10.5px;color:var(--c-text-3);line-height:1.45;margin-bottom:10px'));
    section.appendChild(n('div','Notifications','font-size:10px;font-weight:850;text-transform:uppercase;color:var(--c-text-3);margin:10px 0 5px'));var notes=n('div');section.appendChild(notes);section.appendChild(n('div','Sanctions actives','font-size:10px;font-weight:850;text-transform:uppercase;color:var(--c-text-3);margin:16px 0 5px'));var sanctions=n('div');section.appendChild(sanctions);root.appendChild(section);loadNotifications(notes);loadSanctions(sanctions);refreshBadge();
  }

  var baseBuild=window.buildCoffre;if(typeof baseBuild==='function')window.buildCoffre=async function(){await baseBuild();install();};
  window.HydroCalcModerationAdmin={refreshBadge:refreshBadge,openDecision:openDecision,install:install};
  window.setInterval(function(){if(admin())refreshBadge();},60000);setTimeout(refreshBadge,2500);
})();