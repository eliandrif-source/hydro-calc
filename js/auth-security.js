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

    // An admin entitlement is valid only when the server-side flag says so.
    if (plan === 'admin' && !isAdmin) plan = 'free';
    if (isAdmin) plan = 'admin';

    return Object.assign({}, previous, {
      email:       (p && p.email) || previous.email || '',
      name:        (p && p.name) || previous.name || (p && p.email) || '',
      plan:        plan,
      isAdmin:     isAdmin,
      profile:     (p && p.profile) || previous.profile || '',
      trialUsed:   !!(p && p.trial_used),
      trialStart:  p && p.trial_start ? new Date(p.trial_start).getTime() : null,
      joined:      p && p.joined_at ? new Date(p.joined_at).getTime() : (previous.joined || Date.now()),
      invite_code: null
    });
  }

  async function _refreshServerProfile(options) {
    options = options || {};
    if (!window.SupaDB || !window.AUTH) return null;

    var authRes = await window.SupaDB.auth.getUser();
    var authUser = authRes && authRes.data ? authRes.data.user : null;
    if (!authUser) return null;

    var res = await window.SupaDB.from('profiles').select('*').eq('id', authUser.id).single();
    if (res.error || !res.data) return null;

    window.AUTH._uid = authUser.id;
    window.AUTH.user = _profileToUser(res.data, window.AUTH.user || { email: authUser.email || '' });

    if (options.applyTrial !== false && typeof window._applyTrialPlan === 'function') {
      window._applyTrialPlan();
    }
    if (options.rebuildProfile && typeof window.buildProfile === 'function') {
      window.buildProfile();
    }
    return window.AUTH.user;
  }

  // Legacy auth.js calls this during login/session restore. The browser is no
  // longer allowed to promote an account based on an email or local constant.
  window._forceAdminIfNeeded = function (user) {
    if (!user) return user;
    user.isAdmin = user.isAdmin === true || user.is_admin === true;
    if (user.isAdmin) user.plan = 'admin';
    else if (user.plan === 'admin') user.plan = 'free';
    return user;
  };

  function _registrationError(el, message) {
    if (!el) return;
    el.textContent = message;
    el.style.display = 'block';
  }

  async function _claimCodeIfPossible(code) {
    code = (code || '').trim().toUpperCase();
    if (!code || !window.SupaDB) return true;
    var claim = await window.SupaDB.rpc('claim_access_code', { p_code: code });
    return !claim.error && claim.data === true;
  }

  // Registration always starts FREE. Establishment access is granted only by
  // the atomic server RPC claim_access_code(). Admin status is never inferred
  // from an email address in the browser.
  window.authRegister = async function () {
    var name    = ((typeof window.getV === 'function' ? window.getV('reg-name') : '') || '').trim();
    var email   = ((typeof window.getV === 'function' ? window.getV('reg-email') : '') || '').trim().toLowerCase();
    var profile = (typeof window.getV === 'function' ? window.getV('reg-profile') : '') || '';
    var pwd     = (typeof window.getV === 'function' ? window.getV('reg-pwd') : '') || '';
    var pwd2    = (typeof window.getV === 'function' ? window.getV('reg-pwd2') : '') || '';
    var invite  = ((typeof window.getV === 'function' ? window.getV('reg-invite-code') : '') || '').trim().toUpperCase();
    var errEl   = document.getElementById('register-err');
    var btnEl   = document.querySelector('#auth-register .auth-btn-submit');

    if (errEl) errEl.style.display = 'none';
    if (!name) return _registrationError(errEl, 'Veuillez indiquer votre nom.');
    if (!email || !email.includes('@')) return _registrationError(errEl, 'Adresse e-mail invalide.');
    if (!profile) return _registrationError(errEl, 'Choisissez votre profil.');
    if (pwd.length < 8) return _registrationError(errEl, 'Mot de passe trop court (8 caractères minimum).');
    if (pwd !== pwd2) return _registrationError(errEl, 'Les mots de passe ne correspondent pas.');
    if (!window.SupaDB) return _toast('Inscription impossible (hors-ligne)');

    if (btnEl) { btnEl.disabled = true; btnEl.textContent = 'Création…'; }

    try {
      var signUp = await window.SupaDB.auth.signUp({
        email: email,
        password: pwd,
        options: { data: { name: name, profile: profile } }
      });
      if (signUp.error) throw signUp.error;

      var session = signUp.data && signUp.data.session;
      if (!session) {
        // Email confirmation can be enabled in Supabase. Keep the code only for
        // the current browser session and claim it after the first real sign-in.
        if (invite) sessionStorage.setItem('hc_pending_access_code', invite);
        _toast('Compte créé. Confirmez votre adresse e-mail puis connectez-vous.');
        if (typeof window.authShow === 'function') window.authShow('auth-login');
        return;
      }

      // The DB trigger already creates a FREE profile. This RPC is retained for
      // compatibility and only updates safe fields on the authenticated profile.
      var uid = session.user.id;
      var profileRes = await window.SupaDB.rpc('create_profile', {
        p_id: uid,
        p_email: email,
        p_name: name,
        p_profile: profile,
        p_plan: 'free',
        p_is_admin: false
      });
      if (profileRes.error) throw profileRes.error;

      if (invite) {
        var claimed = await _claimCodeIfPossible(invite);
        if (!claimed) throw new Error('Code d’accès invalide, expiré ou déjà utilisé.');
      }

      await _refreshServerProfile({ applyTrial: false });
      window.AUTH._newRegistration = true;
      _toast('Compte créé ! Bienvenue ' + name.split(' ')[0] + (invite ? ' — accès Établissement activé 🎟️' : ' 🎉'));
      if (typeof window._doEnterApp === 'function') window._doEnterApp();
    } catch (err) {
      var msg = (err && err.message) || 'Erreur lors de la création du compte.';
      if (/already registered|already been registered/i.test(msg)) msg = 'Un compte existe déjà avec cet email.';
      _registrationError(errEl, msg);
    } finally {
      if (btnEl) { btnEl.disabled = false; btnEl.textContent = 'Créer mon compte'; }
    }
  };

  // Server-backed establishment codes. The legacy view remains usable but its
  // synchronous storage functions now read a cache filled from Supabase.
  window._etabGetCodes = function () {
    return _accessCodesCache.slice();
  };
  window._etabSaveCodes = function () {
    // Intentionally disabled: access codes are server-owned data.
  };

  window.showEtabEspace = function () {
    if (!window.SupaDB || typeof _legacyShowEtabEspace !== 'function') {
      if (typeof _legacyShowEtabEspace === 'function') _legacyShowEtabEspace();
      return;
    }

    window.SupaDB.from('access_codes')
      .select('code,used_by,created_at,used_at')
      .is('revoked_at', null)
      .order('created_at', { ascending: false })
      .then(function (res) {
        if (res.error) {
          _toast('Impossible de charger les codes établissement.');
          return;
        }
        _accessCodesCache = (res.data || []).map(function (row) {
          return {
            code: row.code,
            used: !!row.used_by,
            createdAt: row.created_at,
            usedAt: row.used_at || null
          };
        });
        _legacyShowEtabEspace();
      });
  };

  window.etabGenerateCode = function () {
    if (!window.SupaDB) return _toast('Supabase non connecté');
    window.SupaDB.rpc('create_access_code').then(function (res) {
      if (res.error) {
        _toast(res.error.message === 'access code limit reached' ? 'Limite de 30 codes atteinte.' : 'Impossible de générer le code.');
        return;
      }
      _toast('Code généré : ' + res.data);
      window.showEtabEspace();
    });
  };

  window._etabDeleteCode = function (code) {
    if (!window.SupaDB) return _toast('Supabase non connecté');
    window.SupaDB.rpc('revoke_access_code', { p_code: code }).then(function (res) {
      if (res.error || res.data !== true) {
        _toast('Ce code ne peut pas être supprimé.');
        return;
      }
      _toast('Code révoqué ✓');
      window.showEtabEspace();
    });
  };

  // Trial activation is persisted atomically on the server. A refresh or a
  // second browser can no longer reset/restart the trial locally.
  window.startTrial = function () {
    if (!window.SupaDB || !window.AUTH || !window.AUTH.user) return;
    window.SupaDB.rpc('start_my_trial').then(async function (res) {
      if (res.error || !res.data) {
        _toast('Essai déjà utilisé ou non disponible pour ce compte.');
        if (typeof window._closeTrialModal === 'function') window._closeTrialModal();
        return;
      }
      window.AUTH.user = _profileToUser(res.data, window.AUTH.user);
      if (typeof window._applyTrialPlan === 'function') window._applyTrialPlan();
      if (typeof window._closeTrialModal === 'function') window._closeTrialModal();
      _toast('🎉 Essai Pro activé — 7 jours d’accès illimité !');
      if (typeof window.renderSidebarPlans === 'function') window.renderSidebarPlans();
    });
  };

  // Claim a code saved during sign-up when email confirmation was required.
  if (window.SupaDB && window.SupaDB.auth && typeof window.SupaDB.auth.onAuthStateChange === 'function') {
    window.SupaDB.auth.onAuthStateChange(function (event, session) {
      if (event !== 'SIGNED_IN' || !session || !session.user) return;
      var pending = sessionStorage.getItem('hc_pending_access_code');
      if (!pending) return;
      setTimeout(async function () {
        var ok = await _claimCodeIfPossible(pending);
        if (ok) {
          sessionStorage.removeItem('hc_pending_access_code');
          await _refreshServerProfile({ applyTrial: true, rebuildProfile: false });
          _toast('Accès Établissement activé 🎟️');
        }
      }, 250);
    });
  }

  // Correct any legacy local entitlement shortly after this bridge loads.
  setTimeout(function () {
    _refreshServerProfile({ applyTrial: true, rebuildProfile: false }).catch(function () {});
  }, 0);
})();
