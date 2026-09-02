/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — FORUM MÉTIER
   Forum professionnel orienté questions techniques et retours terrain.
   Les contenus utilisateurs sont rendus uniquement via textContent.
═══════════════════════════════════════════════════════════════ */
var FORUM_SALONS = [
  {id:'hydraulique',label:'Hydraulique',ico:'🌊',color:'#1565C0',desc:'Écoulements, réseaux, pertes de charge'},
  {id:'aep',label:'Eau potable',ico:'💧',color:'#087FEA',desc:'AEP, pompage, traitement, stockage'},
  {id:'assainissement',label:'Assainissement collectif',ico:'🏭',color:'#4054B2',desc:'Réseaux, STEP, exploitation'},
  {id:'anc',label:'ANC / SPANC',ico:'🏡',color:'#0A7460',desc:'Filières, sol, contrôle, retours terrain'},
  {id:'rivieres-gemapi',label:'Rivières & GEMAPI',ico:'🏞️',color:'#0A5090',desc:'Cours d’eau, ouvrages, continuité, inondation'},
  {id:'reglementation',label:'Réglementation',ico:'📋',color:'#A02020',desc:'Textes, interprétation et veille'},
  {id:'formation',label:'Formation',ico:'🎓',color:'#6B4C00',desc:'BTS GEMEAU, études, méthodes'},
  {id:'terrain',label:'Terrain & matériel',ico:'🧰',color:'#166038',desc:'Mesures, instrumentation, pratiques'}
];

var _forumState = { salonId:'hydraulique', postId:null, search:'' };

(function(){
  'use strict';
  function el(tag,text,style){var n=document.createElement(tag);if(text!=null)n.textContent=String(text);if(style)n.style.cssText=style;return n;}
  function btn(text,fn,style){var b=el('button',text,style);b.type='button';b.addEventListener('click',fn);return b;}
  function clear(n){while(n&&n.firstChild)n.removeChild(n.firstChild);}
  function toast(msg){if(typeof window.authToast==='function')window.authToast(msg);else if(typeof window._mToast==='function')window._mToast(msg);}
  function user(){return window.AUTH&&AUTH.user?AUTH.user:null;}
  function uid(){return (window.AUTH&&AUTH._uid)||(user()&&user().id)||null;}
  function isAdmin(){return !!(user()&&(user().isAdmin||user().is_admin||user().plan==='admin'));}
  function salon(id){return FORUM_SALONS.find(function(s){return s.id===id;})||FORUM_SALONS[0];}
  function time(iso){var d=new Date(iso);if(!Number.isFinite(d.getTime()))return '';var sec=(Date.now()-d.getTime())/1000;if(sec<60)return 'à l’instant';if(sec<3600)return Math.floor(sec/60)+' min';if(sec<86400)return Math.floor(sec/3600)+' h';if(sec<604800)return Math.floor(sec/86400)+' j';return d.toLocaleDateString('fr-FR',{day:'2-digit',month:'short',year:'numeric'});}
  function statusBadge(status){var map={open:['Ouvert','#E3F2FD','#1565C0'],solved:['Résolu','#E8F5E9','#2E7D32'],locked:['Verrouillé','#FFF3E0','#A45A00'],hidden:['Masqué','#FDECEA','#A82018']},v=map[status]||map.open;return el('span',v[0],'display:inline-flex;padding:2px 7px;border-radius:999px;background:'+v[1]+';color:'+v[2]+';font-size:10px;font-weight:800');}

  function shell(){
    var mc=document.getElementById('main-content');if(!mc)return null;clear(mc);
    var wrap=el('div',null,'display:flex;min-height:calc(100dvh - 58px);background:var(--c-bg-2)');wrap.id='forum-shell';
    var side=el('aside',null,'width:260px;flex-shrink:0;background:var(--c-bg);border-right:1px solid var(--c-border);padding:14px 10px;overflow-y:auto');side.id='forum-side';
    var head=el('div',null,'padding:4px 8px 14px');head.appendChild(el('div','Forum HydroCalc','font-size:17px;font-weight:850;color:var(--c-text-1)'));head.appendChild(el('div','Entraide technique et retours de terrain','font-size:11px;color:var(--c-text-3);margin-top:3px;line-height:1.4'));side.appendChild(head);
    FORUM_SALONS.forEach(function(s){var b=btn('',function(){window._fOpenSalon(s.id);},'width:100%;border:none;background:'+(s.id===_forumState.salonId?'rgba(21,101,192,.09)':'transparent')+';border-radius:10px;padding:9px 10px;margin-bottom:3px;display:flex;align-items:center;gap:9px;text-align:left;cursor:pointer;color:var(--c-text-1)');b.dataset.salon=s.id;b.appendChild(el('span',s.ico,'font-size:18px'));var body=el('span');body.appendChild(el('span',s.label,'display:block;font-size:12px;font-weight:750'));body.appendChild(el('span',s.desc,'display:block;font-size:9.5px;color:var(--c-text-3);margin-top:2px'));b.appendChild(body);side.appendChild(b);});
    var main=el('section',null,'flex:1;min-width:0;display:flex;flex-direction:column;overflow:hidden');main.id='forum-main';wrap.appendChild(side);wrap.appendChild(main);mc.appendChild(wrap);
    var st=document.getElementById('forum-runtime-style');if(!st){st=el('style');st.id='forum-runtime-style';st.textContent='@media(max-width:720px){#forum-shell{display:block!important}#forum-side{width:100%!important;border-right:none!important;border-bottom:1px solid var(--c-border);display:flex;overflow-x:auto;padding:8px!important}#forum-side>div:first-child{display:none}#forum-side button{min-width:145px!important}#forum-main{min-height:70dvh}}';document.head.appendChild(st);}
    return main;
  }

  function empty(main,msg){clear(main);main.appendChild(el('div',msg,'padding:42px 20px;text-align:center;color:var(--c-text-3);font-size:13px'));}

  window.renderForum=function(){
    _forumState.postId=null;
    var main=shell();if(!main)return;
    if(!user()){empty(main,'Connectez-vous pour accéder au forum professionnel HydroCalc.');return;}
    if(!window.SupaDB){empty(main,'Forum indisponible hors connexion.');return;}
    window._fOpenSalon(_forumState.salonId||'hydraulique');
  };

  function header(main,s){
    var h=el('div',null,'background:var(--c-bg);border-bottom:1px solid var(--c-border);padding:14px 18px;display:flex;align-items:center;gap:12px;flex-wrap:wrap');
    var title=el('div',null,'flex:1;min-width:180px');title.appendChild(el('div',s.ico+' '+s.label,'font-size:16px;font-weight:850;color:var(--c-text-1)'));title.appendChild(el('div',s.desc,'font-size:11px;color:var(--c-text-3);margin-top:2px'));h.appendChild(title);
    var search=el('input');search.type='search';search.placeholder='Rechercher dans ce salon…';search.value=_forumState.search;search.style.cssText='min-width:190px;max-width:280px;flex:1;padding:8px 11px;border:1px solid var(--c-border);border-radius:9px;background:var(--c-bg-2);color:var(--c-text-1);font:inherit;font-size:12px';search.addEventListener('input',function(){_forumState.search=search.value;window._fLoadPosts();});h.appendChild(search);
    h.appendChild(btn('+ Poser une question',function(){showComposer(s.id);},'border:none;background:#1565C0;color:white;padding:9px 13px;border-radius:9px;font-size:11px;font-weight:800;cursor:pointer'));main.appendChild(h);
    var list=el('div',null,'flex:1;overflow-y:auto;padding:14px 18px');list.id='forum-list';main.appendChild(list);
  }

  window._fOpenSalon=function(id){
    if(!FORUM_SALONS.some(function(s){return s.id===id;}))id='hydraulique';_forumState.salonId=id;_forumState.postId=null;
    var main=document.getElementById('forum-main')||shell();if(!main)return;clear(main);header(main,salon(id));
    document.querySelectorAll('#forum-side button[data-salon]').forEach(function(b){b.style.background=b.dataset.salon===id?'rgba(21,101,192,.09)':'transparent';});
    window._fLoadPosts();
  };

  window._fLoadPosts=async function(){
    var list=document.getElementById('forum-list');if(!list||!window.SupaDB)return;clear(list);list.appendChild(el('div','Chargement…','padding:20px;text-align:center;color:var(--c-text-3);font-size:12px'));
    var r=await SupaDB.from('forum_posts').select('id,author_id,author_name,salon_id,title,body,status,reply_count,last_activity_at,created_at').eq('salon_id',_forumState.salonId).order('last_activity_at',{ascending:false}).limit(60);
    clear(list);if(r.error){list.appendChild(el('div','Impossible de charger les discussions.','padding:20px;text-align:center;color:var(--c-danger);font-size:12px'));return;}
    var q=String(_forumState.search||'').trim().toLocaleLowerCase('fr');var posts=(r.data||[]).filter(function(p){return !q||String(p.title||'').toLocaleLowerCase('fr').includes(q)||String(p.body||'').toLocaleLowerCase('fr').includes(q);});
    if(!posts.length){list.appendChild(el('div','Aucune discussion dans ce salon. Posez la première question.','padding:38px 16px;text-align:center;color:var(--c-text-3);font-size:12px'));return;}
    posts.forEach(function(p){var card=el('article',null,'background:var(--c-bg);border:1px solid var(--c-border);border-radius:12px;padding:13px 14px;margin-bottom:9px;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.03)');card.tabIndex=0;card.addEventListener('click',function(){openPost(p.id);});card.addEventListener('keydown',function(e){if(e.key==='Enter')openPost(p.id);});var top=el('div',null,'display:flex;align-items:flex-start;gap:8px');var body=el('div',null,'flex:1;min-width:0');body.appendChild(el('div',p.title,'font-size:13px;font-weight:800;color:var(--c-text-1);line-height:1.35'));body.appendChild(el('div',String(p.body||'').slice(0,220)+(String(p.body||'').length>220?'…':''),'font-size:11px;color:var(--c-text-3);line-height:1.45;margin-top:5px;white-space:pre-wrap;overflow-wrap:anywhere'));top.appendChild(body);top.appendChild(statusBadge(p.status));card.appendChild(top);card.appendChild(el('div',(p.author_name||'Membre HydroCalc')+' · '+time(p.last_activity_at)+' · '+(p.reply_count||0)+' réponse'+((p.reply_count||0)>1?'s':''),'font-size:10px;color:var(--c-text-4);margin-top:9px'));list.appendChild(card);});
  };

  function showComposer(salonId){
    var main=document.getElementById('forum-main');if(!main)return;clear(main);var s=salon(salonId);var h=el('div',null,'padding:14px 18px;border-bottom:1px solid var(--c-border);background:var(--c-bg);display:flex;align-items:center;gap:9px');h.appendChild(btn('←',function(){window._fOpenSalon(salonId);},'border:none;background:none;font-size:20px;color:var(--c-text-2);cursor:pointer'));h.appendChild(el('div','Nouvelle question — '+s.label,'font-size:15px;font-weight:800;color:var(--c-text-1)'));main.appendChild(h);var form=el('div',null,'max-width:760px;width:100%;margin:0 auto;padding:20px');form.appendChild(el('label','Titre','display:block;font-size:11px;font-weight:800;color:var(--c-text-2);margin-bottom:5px'));var title=el('input');title.maxLength=180;title.placeholder='Ex. Choix du coefficient K pour une conduite ancienne';title.style.cssText='width:100%;padding:10px 12px;border:1px solid var(--c-border);border-radius:9px;background:var(--c-bg);color:var(--c-text-1);font:inherit;box-sizing:border-box';form.appendChild(title);form.appendChild(el('label','Contexte et question','display:block;font-size:11px;font-weight:800;color:var(--c-text-2);margin:14px 0 5px'));var body=el('textarea');body.maxLength=10000;body.rows=10;body.placeholder='Décrivez le contexte, les données, les hypothèses et ce que vous avez déjà vérifié. Citez vos sources si possible.';body.style.cssText='width:100%;padding:11px 12px;border:1px solid var(--c-border);border-radius:9px;background:var(--c-bg);color:var(--c-text-1);font:inherit;line-height:1.5;resize:vertical;box-sizing:border-box';form.appendChild(body);form.appendChild(el('div','Conseil : une question technique avec unités, hypothèses et référence est beaucoup plus facile à résoudre.','font-size:10px;color:var(--c-text-3);margin:7px 0 16px'));var send=btn('Publier la question',async function(){send.disabled=true;var r=await SupaDB.rpc('forum_create_post',{p_salon_id:salonId,p_title:title.value,p_body:body.value});send.disabled=false;if(r.error){toast(r.error.message&&r.error.message.includes('rate limit')?'Trop de publications. Réessayez plus tard.':'Vérifiez le titre et le contenu.');return;}toast('Question publiée ✓');openPost(r.data);},'border:none;background:#1565C0;color:white;padding:10px 16px;border-radius:9px;font-size:12px;font-weight:800;cursor:pointer');form.appendChild(send);main.appendChild(form);title.focus();
  }

  async function openPost(id){
    _forumState.postId=id;var main=document.getElementById('forum-main');if(!main)return;clear(main);main.appendChild(el('div','Chargement…','padding:30px;text-align:center;color:var(--c-text-3)'));
    var pr=await SupaDB.from('forum_posts').select('id,author_id,author_name,salon_id,title,body,status,reply_count,created_at').eq('id',id).single();if(pr.error||!pr.data){empty(main,'Discussion introuvable.');return;}var p=pr.data;var rr=await SupaDB.from('forum_replies').select('id,author_id,author_name,body,is_solution,is_hidden,created_at').eq('post_id',id).order('created_at',{ascending:true});var replies=rr.data||[];clear(main);
    var top=el('div',null,'padding:12px 18px;border-bottom:1px solid var(--c-border);background:var(--c-bg);display:flex;align-items:center;gap:10px');top.appendChild(btn('←',function(){window._fOpenSalon(p.salon_id);},'border:none;background:none;font-size:20px;color:var(--c-text-2);cursor:pointer'));var tt=el('div',null,'flex:1');tt.appendChild(el('div',p.title,'font-size:15px;font-weight:850;color:var(--c-text-1)'));tt.appendChild(el('div',(p.author_name||'Membre HydroCalc')+' · '+time(p.created_at),'font-size:10px;color:var(--c-text-3);margin-top:2px'));top.appendChild(tt);top.appendChild(statusBadge(p.status));main.appendChild(top);
    var sc=el('div',null,'flex:1;overflow-y:auto;padding:16px 18px');var original=el('article',null,'max-width:850px;margin:0 auto 14px;background:var(--c-bg);border:1px solid var(--c-border);border-radius:12px;padding:15px');original.appendChild(el('div',p.body,'white-space:pre-wrap;overflow-wrap:anywhere;font-size:12.5px;line-height:1.6;color:var(--c-text-1)'));var actions=el('div',null,'display:flex;gap:8px;margin-top:12px;flex-wrap:wrap');actions.appendChild(btn('⚑ Signaler',function(){report('post',p.id);},'border:1px solid var(--c-border);background:var(--c-bg-2);color:var(--c-text-3);border-radius:8px;padding:6px 9px;font-size:10px;cursor:pointer'));if(isAdmin()){actions.appendChild(btn(p.status==='locked'?'Réouvrir':'Verrouiller',async function(){await moderate('post',p.id,p.status==='locked'?'reopen':'lock');openPost(p.id);},'border:1px solid var(--c-border);background:var(--c-bg-2);border-radius:8px;padding:6px 9px;font-size:10px;cursor:pointer'));actions.appendChild(btn('Masquer',async function(){await moderate('post',p.id,'hide');window._fOpenSalon(p.salon_id);},'border:1px solid #efc4c0;background:#fff5f4;color:#A82018;border-radius:8px;padding:6px 9px;font-size:10px;cursor:pointer'));}original.appendChild(actions);sc.appendChild(original);
    var rh=el('div',(replies.length||0)+' réponse'+(replies.length>1?'s':''),'max-width:850px;margin:0 auto 8px;font-size:11px;font-weight:800;color:var(--c-text-2)');sc.appendChild(rh);
    replies.forEach(function(r){var card=el('article',null,'max-width:850px;margin:0 auto 8px;background:'+(r.is_solution?'#F0FBF4':'var(--c-bg)')+';border:1px solid '+(r.is_solution?'#9BD3AD':'var(--c-border)')+';border-radius:11px;padding:12px 13px');var meta=el('div',null,'display:flex;align-items:center;gap:8px;margin-bottom:7px');meta.appendChild(el('span',r.author_name||'Membre HydroCalc','font-size:10px;font-weight:800;color:var(--c-text-2)'));meta.appendChild(el('span',time(r.created_at),'font-size:9.5px;color:var(--c-text-4)'));if(r.is_solution)meta.appendChild(el('span','✓ Solution','font-size:9px;font-weight:800;color:#166038;background:#DCF3E4;border-radius:999px;padding:2px 7px'));card.appendChild(meta);card.appendChild(el('div',r.body,'white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;line-height:1.55;color:var(--c-text-1)'));var a=el('div',null,'display:flex;gap:7px;margin-top:9px');a.appendChild(btn('⚑ Signaler',function(){report('reply',r.id);},'border:none;background:transparent;color:var(--c-text-4);font-size:9.5px;cursor:pointer'));if((p.author_id===uid()||isAdmin())&&!r.is_solution&&p.status!=='locked')a.appendChild(btn('✓ Marquer solution',async function(){var x=await SupaDB.rpc('forum_mark_solution',{p_post_id:p.id,p_reply_id:r.id});if(!x.error)openPost(p.id);},'border:none;background:transparent;color:#166038;font-size:9.5px;font-weight:800;cursor:pointer'));if(isAdmin())a.appendChild(btn('Masquer',async function(){await moderate('reply',r.id,'hide');openPost(p.id);},'border:none;background:transparent;color:#A82018;font-size:9.5px;cursor:pointer'));card.appendChild(a);sc.appendChild(card);});
    if(p.status!=='locked'&&p.status!=='hidden'){var reply=el('div',null,'max-width:850px;margin:14px auto 28px;background:var(--c-bg);border:1px solid var(--c-border);border-radius:11px;padding:12px');reply.appendChild(el('div','Votre réponse','font-size:11px;font-weight:800;color:var(--c-text-2);margin-bottom:6px'));var ta=el('textarea');ta.rows=5;ta.maxLength=8000;ta.placeholder='Répondez avec une méthode vérifiable, les unités et une source lorsque c’est pertinent.';ta.style.cssText='width:100%;box-sizing:border-box;padding:9px 10px;border:1px solid var(--c-border);border-radius:8px;background:var(--c-bg-2);color:var(--c-text-1);font:inherit;font-size:12px;line-height:1.5;resize:vertical';reply.appendChild(ta);var sb=btn('Publier la réponse',async function(){sb.disabled=true;var x=await SupaDB.rpc('forum_reply',{p_post_id:p.id,p_body:ta.value});sb.disabled=false;if(x.error){toast('Réponse non publiée. Vérifiez le contenu.');return;}openPost(p.id);},'margin-top:8px;border:none;background:#1565C0;color:white;border-radius:8px;padding:8px 12px;font-size:10.5px;font-weight:800;cursor:pointer');reply.appendChild(sb);sc.appendChild(reply);}main.appendChild(sc);
  }

  async function report(kind,id){var reason=window.prompt('Pourquoi signalez-vous ce contenu ?');if(!reason)return;var args={p_post_id:kind==='post'?id:null,p_reply_id:kind==='reply'?id:null,p_reason:reason};var r=await SupaDB.rpc('forum_report',args);toast(r.error?'Signalement impossible.':'Signalement transmis ✓');}
  async function moderate(kind,id,action){var r=await SupaDB.rpc('forum_admin_moderate',{p_kind:kind,p_id:id,p_action:action});if(r.error)toast('Action de modération refusée.');return r;}

  window.HydroCalcForum={salons:FORUM_SALONS,openPost:openPost};
})();
