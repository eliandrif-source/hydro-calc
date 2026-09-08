/* HydroCalc — recherche serveur + filtres métier du forum. */
(function(){
  'use strict';
  if(window.__HC_FORUM_ENHANCEMENTS_LOADED__)return;
  window.__HC_FORUM_ENHANCEMENTS_LOADED__=true;
  if(!window.HydroCalcForum)return;

  var filter='all',timer=null,requestSeq=0,baseOpen=window._fOpenSalon;
  function n(tag,text,css){var e=document.createElement(tag);if(text!=null)e.textContent=String(text);if(css)e.style.cssText=css;return e;}
  function b(text,fn,css){var e=n('button',text,css);e.type='button';e.addEventListener('click',fn);return e;}
  function clear(e){while(e&&e.firstChild)e.removeChild(e.firstChild);}
  function time(iso){var d=new Date(iso);if(!Number.isFinite(d.getTime()))return '';var s=(Date.now()-d.getTime())/1000;if(s<60)return 'à l’instant';if(s<3600)return Math.floor(s/60)+' min';if(s<86400)return Math.floor(s/3600)+' h';if(s<604800)return Math.floor(s/86400)+' j';return d.toLocaleDateString('fr-FR',{day:'2-digit',month:'short',year:'numeric'});}
  function badge(status){var m={open:['Ouvert','#E3F2FD','#1565C0'],solved:['Résolu','#E8F5E9','#2E7D32'],locked:['Verrouillé','#FFF3E0','#A45A00'],hidden:['Masqué','#FDECEA','#A82018']},v=m[status]||m.open;return n('span',v[0],'display:inline-flex;padding:2px 7px;border-radius:999px;background:'+v[1]+';color:'+v[2]+';font-size:10px;font-weight:800');}

  function installFilters(){
    var main=document.getElementById('forum-main');if(!main)return;
    var list=document.getElementById('forum-list');if(!list||document.getElementById('forum-filterbar'))return;
    var bar=n('div',null,'display:flex;gap:6px;align-items:center;flex-wrap:wrap;padding:9px 18px 0;background:var(--c-bg-2)');bar.id='forum-filterbar';
    [['all','Tous'],['open','Ouverts'],['unanswered','Sans réponse'],['solved','Résolus']].forEach(function(v){var x=b(v[1],function(){filter=v[0];bar.querySelectorAll('button').forEach(function(z){z.style.background='var(--c-bg)';z.style.color='var(--c-text-2)';});x.style.background='#1565C0';x.style.color='#fff';window._fLoadPosts();},'border:1px solid var(--c-border);background:'+(filter===v[0]?'#1565C0':'var(--c-bg)')+';color:'+(filter===v[0]?'#fff':'var(--c-text-2)')+';border-radius:8px;padding:5px 9px;font-size:10px;font-weight:750;cursor:pointer');bar.appendChild(x);});
    main.insertBefore(bar,list);
  }

  async function loadNow(seq){
    var list=document.getElementById('forum-list');if(!list||!window.SupaDB)return;
    var state=window._forumState||{};
    var r=await SupaDB.rpc('forum_search_posts',{p_salon_id:state.salonId||'hydraulique',p_query:String(state.search||'').trim()||null,p_filter:filter,p_limit:60,p_offset:0});
    if(seq!==requestSeq)return;
    clear(list);
    if(r.error){list.appendChild(n('div','Recherche indisponible.','padding:20px;text-align:center;color:var(--c-danger);font-size:12px'));return;}
    var posts=r.data||[];
    if(!posts.length){var msg=filter==='unanswered'?'Aucune question sans réponse dans ce salon.':filter==='solved'?'Aucune discussion résolue dans ce salon.':'Aucune discussion correspondante.';list.appendChild(n('div',msg,'padding:38px 16px;text-align:center;color:var(--c-text-3);font-size:12px'));return;}
    posts.forEach(function(p){
      var card=n('article',null,'background:var(--c-bg);border:1px solid var(--c-border);border-radius:12px;padding:13px 14px;margin-bottom:9px;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.03)');card.tabIndex=0;
      function open(){window.HydroCalcForum.openPost(p.id);}card.addEventListener('click',open);card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
      var top=n('div',null,'display:flex;align-items:flex-start;gap:8px');var body=n('div',null,'flex:1;min-width:0');body.appendChild(n('div',p.title,'font-size:13px;font-weight:800;color:var(--c-text-1);line-height:1.35'));body.appendChild(n('div',String(p.body||'').slice(0,220)+(String(p.body||'').length>220?'…':''),'font-size:11px;color:var(--c-text-3);line-height:1.45;margin-top:5px;white-space:pre-wrap;overflow-wrap:anywhere'));top.appendChild(body);top.appendChild(badge(p.status));card.appendChild(top);card.appendChild(n('div',(p.author_name||'Membre HydroCalc')+' · '+time(p.last_activity_at)+' · '+(p.reply_count||0)+' réponse'+((p.reply_count||0)>1?'s':''),'font-size:10px;color:var(--c-text-4);margin-top:9px'));list.appendChild(card);
    });
  }

  window._fLoadPosts=function(){
    var list=document.getElementById('forum-list');if(list){clear(list);list.appendChild(n('div','Recherche…','padding:18px;text-align:center;color:var(--c-text-3);font-size:11px'));}
    clearTimeout(timer);var seq=++requestSeq;timer=setTimeout(function(){loadNow(seq);},180);
  };

  if(typeof baseOpen==='function')window._fOpenSalon=function(id){filter='all';baseOpen(id);installFilters();};

  window.HydroCalcForumEnhancements={getFilter:function(){return filter;}};
})();
