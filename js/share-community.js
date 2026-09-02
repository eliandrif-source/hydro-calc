/* HydroCalc — partager un calcul/projet vers forum ou messagerie. */
(function(){
  'use strict';
  if(window.__HC_SHARE_COMMUNITY_LOADED__)return;
  window.__HC_SHARE_COMMUNITY_LOADED__=true;

  var pendingDraft=null,observer=null;
  function n(tag,text,css){var e=document.createElement(tag);if(text!=null)e.textContent=String(text);if(css)e.style.cssText=css;return e;}
  function b(text,fn,css){var e=n('button',text,css);e.type='button';e.addEventListener('click',fn);return e;}
  function toast(msg){if(typeof window.authToast==='function')window.authToast(msg);else if(typeof window._mToast==='function')window._mToast(msg);}
  function clean(v,max){return String(v==null?'':v).replace(/<br\s*\/?>/gi,'\n').replace(/<[^>]*>/g,' ').replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/\s+/g,' ').trim().slice(0,max||4000);}
  function currentEmail(){return window.AUTH&&AUTH.user?AUTH.user.email:null;}
  function calcs(){return typeof window.getSavedCalcs==='function'?window.getSavedCalcs():(window.DataStore&&currentEmail()?DataStore.calcs.get(currentEmail()):[]);}
  function projects(){return typeof window.getSavedProjects==='function'?window.getSavedProjects():(window.DataStore&&currentEmail()?DataStore.projects.get(currentEmail()):[]);}
  function inputLines(inputs){
    if(!inputs||typeof inputs!=='object')return [];
    return Object.keys(inputs).slice(0,12).map(function(k){var x=inputs[k]||{},label=clean(x.label||k,80),val=clean(x.value,100),unit=clean(x.unit,30);return '- '+label+' : '+val+(unit?' '+unit:'');}).filter(function(x){return !/:\s*$/.test(x);});
  }
  function calcSummary(c){
    c=c||{};var lines=['Calcul HydroCalc — '+clean(c.module||'Calcul',140),'Résultat : '+clean(c.valeur||'—',500)];
    var ins=inputLines(c.inputs);if(ins.length)lines.push('','Entrées :',ins.join('\n'));
    var d=clean(c.detail,1200);if(d)lines.push('','Détail / hypothèses : '+d);
    lines.push('','À vérifier selon le contexte du projet, le domaine de validité de la méthode et les sources techniques/réglementaires applicables.');
    return lines.join('\n').slice(0,5000);
  }
  function projectSummary(p){
    p=p||{};var list=calcs().filter(function(c){return c.projectId===p.id;});var lines=['Projet HydroCalc — '+clean(p.name||'Projet',140),list.length+' calcul(s) enregistré(s).'];
    list.slice(0,10).forEach(function(c,i){lines.push('',''+(i+1)+'. '+clean(c.module||'Calcul',120)+' — '+clean(c.valeur||'—',280));});
    if(list.length>10)lines.push('','… '+(list.length-10)+' autre(s) calcul(s) dans le projet.');
    lines.push('','Les résultats partagés restent des éléments de calcul à interpréter avec les hypothèses, unités et limites de chaque méthode.');return lines.join('\n').slice(0,5000);
  }

  function closeModal(){var x=document.getElementById('hc-share-modal');if(x)x.remove();}
  function modal(title,summary){
    closeModal();
    var overlay=n('div',null,'position:fixed;inset:0;z-index:12000;background:rgba(7,18,34,.58);display:flex;align-items:center;justify-content:center;padding:16px');overlay.id='hc-share-modal';
    var box=n('div',null,'width:min(560px,100%);max-height:88dvh;overflow:auto;background:var(--c-surface);border:1px solid var(--c-border);border-radius:16px;padding:17px;box-shadow:0 18px 60px rgba(0,0,0,.28)');
    var head=n('div',null,'display:flex;align-items:center;gap:10px;margin-bottom:10px');var tt=n('div',null,'flex:1');tt.appendChild(n('div','Partager','font-size:16px;font-weight:850;color:var(--c-text-1)'));tt.appendChild(n('div',title,'font-size:10.5px;color:var(--c-text-3);margin-top:2px'));head.appendChild(tt);head.appendChild(b('✕',closeModal,'border:none;background:transparent;color:var(--c-text-3);font-size:18px;cursor:pointer'));box.appendChild(head);
    var prev=n('pre',summary,'white-space:pre-wrap;overflow-wrap:anywhere;background:var(--c-bg-2);border:1px solid var(--c-border);border-radius:10px;padding:10px 11px;font-family:var(--f-body);font-size:10.5px;line-height:1.45;color:var(--c-text-2);max-height:230px;overflow:auto');box.appendChild(prev);
    box.appendChild(n('div','Choisir une destination','font-size:10px;font-weight:800;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.04em;margin:13px 0 7px'));
    var choices=n('div',null,'display:grid;grid-template-columns:1fr 1fr;gap:9px');
    choices.appendChild(b('💬 Messagerie',function(){pendingDraft=summary;window.__HC_SHARE_DRAFT__=summary;closeModal();if(typeof window.showModule==='function')window.showModule('messagerie');setTimeout(function(){if(typeof window._mShowNewConvPanel==='function')window._mShowNewConvPanel();},120);},'border:1px solid #B7D4F4;background:#F1F7FE;color:#124E8A;border-radius:10px;padding:11px;font-size:11px;font-weight:800;cursor:pointer'));
    choices.appendChild(b('🧭 Forum',function(){showForumComposer(title,summary,box);},'border:1px solid #A8D5C7;background:#F0FBF7;color:#16604B;border-radius:10px;padding:11px;font-size:11px;font-weight:800;cursor:pointer'));
    box.appendChild(choices);overlay.appendChild(box);overlay.addEventListener('click',function(e){if(e.target===overlay)closeModal();});document.body.appendChild(overlay);
  }

  function showForumComposer(title,summary,box){
    var old=box.querySelector('[data-share-forum]');if(old)old.remove();var area=n('div',null,'margin-top:12px;border-top:1px solid var(--c-border);padding-top:12px');area.dataset.shareForum='1';
    var select=n('select',null,'width:100%;padding:9px;border:1px solid var(--c-border);border-radius:9px;background:var(--c-bg);color:var(--c-text-1);font:inherit;font-size:11px');(window.FORUM_SALONS||[]).forEach(function(s){var o=n('option',s.label);o.value=s.id;select.appendChild(o);});area.appendChild(select);
    var input=n('input');input.maxLength=180;input.value=('Question autour de '+title).slice(0,180);input.style.cssText='width:100%;box-sizing:border-box;margin-top:8px;padding:9px 10px;border:1px solid var(--c-border);border-radius:9px;background:var(--c-bg);color:var(--c-text-1);font:inherit;font-size:11px';area.appendChild(input);
    var ta=n('textarea');ta.rows=9;ta.maxLength=10000;ta.value=summary+'\n\nQuestion / contexte complémentaire :\n';ta.style.cssText='width:100%;box-sizing:border-box;margin-top:8px;padding:9px 10px;border:1px solid var(--c-border);border-radius:9px;background:var(--c-bg);color:var(--c-text-1);font:inherit;font-size:11px;line-height:1.45;resize:vertical';area.appendChild(ta);
    var send=b('Publier sur le forum',async function(){if(!window.SupaDB)return;send.disabled=true;var r=await SupaDB.rpc('forum_create_post',{p_salon_id:select.value,p_title:input.value,p_body:ta.value});send.disabled=false;if(r.error){toast('Publication impossible. Vérifiez le contenu.');return;}closeModal();toast('Discussion créée ✓');if(typeof window.showModule==='function')window.showModule('forum');setTimeout(function(){if(window.HydroCalcForum&&typeof HydroCalcForum.openPost==='function')HydroCalcForum.openPost(r.data);},180);},'margin-top:8px;border:none;background:#1565C0;color:#fff;border-radius:9px;padding:9px 12px;font-size:10.5px;font-weight:800;cursor:pointer');area.appendChild(send);box.appendChild(area);ta.focus();
  }

  function shareCalcIndex(idx){var c=calcs()[Number(idx)];if(!c){toast('Calcul introuvable.');return;}modal(clean(c.module||'Calcul',140),calcSummary(c));}
  function shareProject(id){var p=projects().find(function(x){return String(x.id)===String(id);});if(!p){toast('Projet introuvable.');return;}modal(clean(p.name||'Projet',140),projectSummary(p));}

  function injectCalcButtons(){
    document.querySelectorAll('.calc-hist-item').forEach(function(card){if(card.querySelector('[data-hc-share-calc]'))return;var cb=card.querySelector('input[id^="chk-calc-"]');if(!cb)return;var idx=cb.id.replace('chk-calc-','');var btn=b('↗ Partager',function(e){e.stopPropagation();shareCalcIndex(idx);},'border:1px solid var(--c-border);background:var(--c-bg-2);color:var(--c-primary);border-radius:8px;padding:5px 8px;font-size:9.5px;font-weight:750;cursor:pointer;margin-top:7px');btn.dataset.hcShareCalc='1';card.appendChild(btn);});
  }
  function injectProjectButton(){
    if(!window._hcProjectView)return;var pc=document.getElementById('profile-content');if(!pc||pc.querySelector('[data-hc-share-project]'))return;var btn=b('↗ Partager le projet',function(){shareProject(window._hcProjectView);},'margin:8px 16px 0;border:1px solid var(--c-primary);background:var(--c-surface);color:var(--c-primary);border-radius:9px;padding:7px 10px;font-size:10px;font-weight:800;cursor:pointer');btn.dataset.hcShareProject='1';pc.insertBefore(btn,pc.firstChild&&pc.firstChild.nextSibling?pc.firstChild.nextSibling:pc.firstChild);}
  function scan(){injectCalcButtons();injectProjectButton();}
  observer=new MutationObserver(function(){scan();});observer.observe(document.body,{childList:true,subtree:true});setTimeout(scan,300);

  var baseOpenConv=window._mOpenConv;
  if(typeof baseOpenConv==='function')window._mOpenConv=async function(){var r=await baseOpenConv.apply(this,arguments);var draft=window.__HC_SHARE_DRAFT__||pendingDraft;if(draft){var input=document.getElementById('msg-input');if(input&&!input.value){input.value=draft;input.dispatchEvent(new Event('input',{bubbles:true}));window.__HC_SHARE_DRAFT__=null;pendingDraft=null;toast('Résumé prêt à envoyer. Vous pouvez le modifier avant envoi.');}}return r;};

  window.HydroCalcShare={calcSummary:calcSummary,projectSummary:projectSummary,shareCalcIndex:shareCalcIndex,shareProject:shareProject};
})();
