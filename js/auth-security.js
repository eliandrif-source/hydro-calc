/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — AUTH SECURITY BRIDGE
   Sensitive identity/entitlement decisions are owned by Supabase.
   This file intentionally overrides legacy browser-only behaviours.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  if (window.__HC_AUTH_SECURITY_LOADED__) return;
  window.__HC_AUTH_SECURITY_LOADED__ = true;

  var _legacyShowEtabEspace = window.showEtabEspace;
  var _accessCodesCache = [];

  function _toast(msg) {
    if (typeof window.authToast === 'function') window.authToast(msg);
  }

  function _profileToUser(p, previous) {
    previous = previous || {};
    var isAdmin = p && p.is_admin === true;
    var plan = (p && p.plan) || 'free';
    if (plan === 'admin' && !isAdmin) plan = 'free';
    if (isAdmin) plan = 'admin';
    return Object.assign({}, previous, {
      email:(p&&p.email)||previous.email||'', name:(p&&p.name)||previous.name||(p&&p.email)||'',
      plan:plan, isAdmin:isAdmin, profile:(p&&p.profile)||previous.profile||'',
      trialUsed:!!(p&&p.trial_used), trialStart:p&&p.trial_start?new Date(p.trial_start).getTime():null,
      joined:p&&p.joined_at?new Date(p.joined_at).getTime():(previous.joined||Date.now()), invite_code:null
    });
  }

  async function _refreshServerProfile(options) {
    options=options||{}; if(!window.SupaDB||!window.AUTH)return null;
    var authRes=await window.SupaDB.auth.getUser(); var authUser=authRes&&authRes.data?authRes.data.user:null;
    if(!authUser)return null;
    var res=await window.SupaDB.from('profiles').select('*').eq('id',authUser.id).single();
    if(res.error||!res.data)return null;
    window.AUTH._uid=authUser.id; window.AUTH.user=_profileToUser(res.data,window.AUTH.user||{email:authUser.email||''});
    if(options.applyTrial!==false&&typeof window._applyTrialPlan==='function')window._applyTrialPlan();
    if(options.rebuildProfile&&typeof window.buildProfile==='function')window.buildProfile();
    return window.AUTH.user;
  }

  window._forceAdminIfNeeded=function(user){if(!user)return user;user.isAdmin=user.isAdmin===true||user.is_admin===true;if(user.isAdmin)user.plan='admin';else if(user.plan==='admin')user.plan='free';return user;};

  function _registrationError(el,message){if(!el)return;el.textContent=message;el.style.display='block';}
  async function _claimCodeIfPossible(code){code=(code||'').trim().toUpperCase();if(!code||!window.SupaDB)return true;var claim=await window.SupaDB.rpc('claim_access_code',{p_code:code});return !claim.error&&claim.data===true;}

  window.authRegister=async function(){
    var name=((typeof window.getV==='function'?window.getV('reg-name'):'')||'').trim();
    var email=((typeof window.getV==='function'?window.getV('reg-email'):'')||'').trim().toLowerCase();
    var profile=(typeof window.getV==='function'?window.getV('reg-profile'):'')||'';
    var pwd=(typeof window.getV==='function'?window.getV('reg-pwd'):'')||'';
    var pwd2=(typeof window.getV==='function'?window.getV('reg-pwd2'):'')||'';
    var invite=((typeof window.getV==='function'?window.getV('reg-invite-code'):'')||'').trim().toUpperCase();
    var errEl=document.getElementById('register-err'),btnEl=document.querySelector('#auth-register .auth-btn-submit');
    if(errEl)errEl.style.display='none';
    if(!name)return _registrationError(errEl,'Veuillez indiquer votre nom.');
    if(!email||!email.includes('@'))return _registrationError(errEl,'Adresse e-mail invalide.');
    if(!profile)return _registrationError(errEl,'Choisissez votre profil.');
    if(pwd.length<8)return _registrationError(errEl,'Mot de passe trop court (8 caractères minimum).');
    if(pwd!==pwd2)return _registrationError(errEl,'Les mots de passe ne correspondent pas.');
    if(!window.SupaDB)return _toast('Inscription impossible (hors-ligne)');
    if(btnEl){btnEl.disabled=true;btnEl.textContent='Création…';}
    try{
      var signUp=await window.SupaDB.auth.signUp({email:email,password:pwd,options:{data:{name:name,profile:profile}}});
      if(signUp.error)throw signUp.error;
      var session=signUp.data&&signUp.data.session;
      if(!session){if(invite)sessionStorage.setItem('hc_pending_access_code',invite);_toast('Vérifiez votre e-mail pour confirmer votre inscription.');if(typeof window.authShow==='function')window.authShow('auth-login');return;}
      window.AUTH._uid=session.user.id;
      if(invite){var claimed=await _claimCodeIfPossible(invite);if(!claimed)throw new Error('Code établissement invalide ou déjà utilisé.');}
      await _refreshServerProfile({applyTrial:true,rebuildProfile:false});
      if(typeof window._doEnterApp==='function')window._doEnterApp();
    }catch(err){_registrationError(errEl,(err&&err.message)||'Inscription impossible.');}
    finally{if(btnEl){btnEl.disabled=false;btnEl.textContent='Créer mon compte';}}
  };

  window.authUpdatePassword=async function(){
    var pwd=(typeof window.getV==='function'?window.getV('reset-pwd'):'')||'';
    var pwd2=(typeof window.getV==='function'?window.getV('reset-pwd2'):'')||'';
    var errEl=document.getElementById('reset-pwd-err');
    var btnEl=document.querySelector('#auth-reset-password .auth-btn-submit');
    function showErr(msg){if(errEl){errEl.textContent=msg;errEl.style.display='block';}}
    if(pwd.length<8)return showErr('Mot de passe trop court (8 caractères minimum).');
    if(pwd!==pwd2)return showErr('Les mots de passe ne correspondent pas.');
    if(!window.SupaDB)return showErr('Impossible (hors-ligne).');
    if(errEl)errEl.style.display='none';if(btnEl){btnEl.disabled=true;btnEl.textContent='Mise à jour…';}
    try{
      var res=await window.SupaDB.auth.updateUser({password:pwd});if(res.error)throw res.error;
      _toast('Mot de passe mis à jour ✓ Vous pouvez vous reconnecter.');
      await window.SupaDB.auth.signOut();window.AUTH.user=null;
      document.querySelectorAll('.auth-screen').forEach(function(s){s.classList.add('hidden');});
      if(typeof window.authShow==='function')window.authShow('auth-login');
    }catch(err){showErr((err&&err.message)||'Erreur lors de la mise à jour.');}
    finally{if(btnEl){btnEl.disabled=false;btnEl.textContent='Valider le nouveau mot de passe';}}
  };

  window.showEtabEspace=function(){
    if(!window.SupaDB||!window.AUTH||!window.AUTH.user)return _toast('Supabase non connecté');
    window.SupaDB.from('access_codes').select('code,used_by,used_at,created_at,revoked_at').is('revoked_at',null).order('created_at',{ascending:false}).then(function(res){
      if(res.error){_toast('Impossible de charger les codes établissement.');return;}
      _accessCodesCache=res.data||[];window._etabSecureCodes=_accessCodesCache;
      if(typeof _legacyShowEtabEspace==='function'){
        var oldGet=window._etabGetCodes;window._etabGetCodes=function(){return _accessCodesCache.map(function(c){return{code:c.code,used:!!c.used_by,usedBy:c.used_by,usedAt:c.used_at};});};
        try{_legacyShowEtabEspace();}finally{window._etabGetCodes=oldGet;}
      }
    });
  };

  window.etabGenerateCode=function(){if(!window.SupaDB)return _toast('Supabase non connecté');window.SupaDB.rpc('create_access_code').then(function(res){if(res.error){_toast('Impossible de générer le code : '+res.error.message);return;}_toast('Code généré : '+res.data);window.showEtabEspace();});};
  window._etabDeleteCode=function(code){if(!window.SupaDB)return _toast('Supabase non connecté');window.SupaDB.rpc('revoke_access_code',{p_code:code}).then(function(res){if(res.error||res.data!==true){_toast('Ce code ne peut pas être supprimé.');return;}_toast('Code révoqué ✓');window.showEtabEspace();});};

  window.startTrial=function(){if(!window.SupaDB||!window.AUTH||!window.AUTH.user)return;window.SupaDB.rpc('start_my_trial').then(async function(res){if(res.error||!res.data){_toast('Essai déjà utilisé ou non disponible pour ce compte.');if(typeof window._closeTrialModal==='function')window._closeTrialModal();return;}window.AUTH.user=_profileToUser(res.data,window.AUTH.user);if(typeof window._applyTrialPlan==='function')window._applyTrialPlan();if(typeof window._closeTrialModal==='function')window._closeTrialModal();_toast('🎉 Essai Pro activé — 7 jours d’accès illimité !');if(typeof window.renderSidebarPlans==='function')window.renderSidebarPlans();});};

  window.selectHCPlan=function(planId){
    if(!window.AUTH||!window.AUTH.user)return;
    var current=window.AUTH.user.plan||'free';
    if(window.AUTH.user.isAdmin||current==='admin'){_toast('Le compte administrateur est géré côté serveur.');return;}
    if(planId==='free'){
      if(current==='pro'||current==='etab'){if(typeof window.stripeOpenPortal==='function')window.stripeOpenPortal();return;}
      _toast('Le plan Gratuit est déjà actif.');return;
    }
    if(planId==='etab'&&(current==='etab')){if(typeof window.closeProfile==='function')window.closeProfile();if(typeof window.showEtabEspace==='function')window.showEtabEspace();return;}
    if(planId==='etab'){if(typeof window.showEtabPricingModal==='function')window.showEtabPricingModal();return;}
    if(planId==='pro'){if(typeof window.showProPricingModal==='function')window.showProPricingModal();return;}
    _toast('Offre inconnue.');
  };

  /* Server-authoritative quota API. New/async callers should await this. */
  window.hcConsumeUsage=async function(kind){
    if(!window.SupaDB||!window.AUTH||!window.AUTH.user)return{allowed:false,used:0,limit_value:0,error:'authentication required'};
    var res=await window.SupaDB.rpc('consume_usage',{p_kind:kind});
    if(res.error)return{allowed:false,used:0,limit_value:0,error:res.error.message};
    var row=Array.isArray(res.data)?res.data[0]:res.data;
    return row||{allowed:false,used:0,limit_value:0};
  };
  window.hcGetUsage=async function(kind){
    if(!window.SupaDB)return null;var res=await window.SupaDB.rpc('get_my_usage',{p_kind:kind});if(res.error)return null;return Array.isArray(res.data)?res.data[0]:res.data;
  };

  window.checkCalcLimit=function(){
    var plan=window.AUTH&&window.AUTH.user?(window.AUTH.user.plan||'free'):'free';
    if(plan!=='free'||(window.AUTH.user&&window.AUTH.user.isAdmin))return true;
    if(window.SupaDB){console.warn('[HydroCalc] legacy synchronous quota check bypassed; migrate caller to hcConsumeUsage(calc_daily).');return true;}
    return false;
  };

  if(window.SupaDB&&window.SupaDB.auth&&typeof window.SupaDB.auth.onAuthStateChange==='function'){
    window.SupaDB.auth.onAuthStateChange(function(event,session){if(event!=='SIGNED_IN'||!session||!session.user)return;var pending=sessionStorage.getItem('hc_pending_access_code');if(!pending)return;setTimeout(async function(){var ok=await _claimCodeIfPossible(pending);if(ok){sessionStorage.removeItem('hc_pending_access_code');await _refreshServerProfile({applyTrial:true,rebuildProfile:false});_toast('Accès Établissement activé 🎟️');}},250);});
  }
  setTimeout(function(){_refreshServerProfile({applyTrial:true,rebuildProfile:false}).catch(function(){});},0);
})();