/* ══════════════════════════════════════════════════════════════════
   DATA STORE — couche d'abstraction de stockage HydroCalc
   Aujourd'hui : localStorage (via _safeStorage)
   Demain : Supabase (voir supabase/schema.sql pour le schéma cible)

   Les données de travail utilisateur restent isolées localement par compte.
   L'identité, les rôles, les plans, les essais et les quotas sont en revanche
   autoritatifs côté Supabase et ne doivent jamais être reconstruits depuis le
   navigateur.
   ══════════════════════════════════════════════════════════════════ */

var DataStore = (function() {

  function read(key, fallback) {
    try {
      var raw = _safeStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function write(key, value) { _safeStorage.setItem(key, JSON.stringify(value)); }
  function remove(key) { _safeStorage.removeItem(key); }

  function userKey(prefix, email) { return prefix + (email || 'guest'); }
  function activeUserEmail() {
    try {
      return (typeof AUTH !== 'undefined' && AUTH && AUTH.user && AUTH.user.email)
        ? String(AUTH.user.email).trim().toLowerCase()
        : 'guest';
    } catch (e) { return 'guest'; }
  }
  function activeUserKey(prefix) { return userKey(prefix, activeUserEmail()); }

  /* Les anciens comptes locaux et le logo global étaient des reliquats de la
     version pré-Supabase. Ils ne sont plus lus. Une migration automatique serait
     ambiguë sur un appareil partagé, donc ces clés sont simplement purgées. */
  try { _safeStorage.removeItem('hc_main_accounts'); } catch (e) {}
  try { _safeStorage.removeItem('hc_user_logo'); } catch (e) {}

  return {

    /* ─── Identité locale legacy : désactivée ───
       Conservé comme façade de compatibilité pour auth.js, mais aucune donnée
       n'est lue ni enregistrée. Cela rend impossible _tryLocalDemo(). */
    accounts: {
      getAll: function() { return {}; },
      saveAll: function() { remove('hc_main_accounts'); }
    },

    /* ─── Session courante / "se souvenir de moi" ─── */
    session: {
      getRemember: function() { return read('hc_remember', null); },
      setRemember: function(v) { write('hc_remember', v); },
      clearRemember: function() { remove('hc_remember'); },
      getCurrent: function() { return read('hc_current_session', null); },
      setCurrent: function(v) { write('hc_current_session', v); },
      clearCurrent: function() { remove('hc_current_session'); }
    },

    /* ─── Logo personnalisé, isolé par compte ─── */
    userLogo: {
      get: function() { return _safeStorage.getItem(activeUserKey('hc_user_logo_')); },
      set: function(dataUrl) { _safeStorage.setItem(activeUserKey('hc_user_logo_'), dataUrl); },
      remove: function() { remove(activeUserKey('hc_user_logo_')); }
    },

    /* ─── Calculs sauvegardés ─── */
    calcs: {
      get: function(email) { return read(userKey('hc_calcs_', email), []); },
      set: function(email, arr) { write(userKey('hc_calcs_', email), arr); }
    },

    /* ─── Bibliothèque de formules personnelles ─── */
    formulas: {
      get: function(email) { return read(userKey('hc_formulas_', email), []); },
      set: function(email, arr) { write(userKey('hc_formulas_', email), arr); }
    },

    /* ─── Réglementations sauvegardées ─── */
    regulations: {
      get: function(email) { return read(userKey('hc_regls_', email), []); },
      set: function(email, arr) { write(userKey('hc_regls_', email), arr); }
    },

    /* ─── Projets / dossiers ─── */
    projects: {
      get: function(email) { return read(userKey('hc_projects_', email), []); },
      set: function(email, arr) { write(userKey('hc_projects_', email), arr); }
    },

    /* ─── Quota hebdomadaire de rapports PDF ─── */
    reportQuota: {
      get: function() { return read('hc_report_quota', null); },
      set: function(quota) { write('hc_report_quota', quota); }
    },

    /* ─── Quota quotidien de calculs (plan Gratuit) ─── */
    calcQuota: {
      get: function() { return read('hc_calc_quota', null); },
      set: function(quota) { write('hc_calc_quota', quota); }
    },

    /* ─── Paramètres d'apparence / unités ─── */
    settings: {
      get: function() { return read('hc_settings_v1', {}); },
      set: function(s) { write('hc_settings_v1', s); }
    },

    /* ─── Département SPANC sélectionné ─── */
    spancDept: {
      get: function() { return _safeStorage.getItem('hc_spanc_dept'); },
      set: function(dept) { _safeStorage.setItem('hc_spanc_dept', dept); },
      remove: function() { remove('hc_spanc_dept'); }
    },

    /* ─── QCM Professeur ─── */
    qcm: {
      getAll: function(email) { return read(userKey('hc_qcms_', email), []); },
      saveAll: function(email, arr) { write(userKey('hc_qcms_', email), arr); },
      getResults: function(email, qcmId) { return read('hc_qcm_res_' + (email || 'guest') + '_' + qcmId, []); },
      saveResults: function(email, qcmId, arr) { write('hc_qcm_res_' + (email || 'guest') + '_' + qcmId, arr); }
    },

    /* ─── Export / import / purge groupés (page Paramètres) ─── */
    exportUserData: function(email) {
      return {
        calculs: this.calcs.get(email),
        projets: this.projects.get(email),
        formules: this.formulas.get(email),
        regls: this.regulations.get(email)
      };
    },
    importUserData: function(email, data) {
      if (data.calculs)  this.calcs.set(email, data.calculs);
      if (data.projets)  this.projects.set(email, data.projets);
      if (data.formules) this.formulas.set(email, data.formules);
      if (data.regls)    this.regulations.set(email, data.regls);
    },
    clearUserData: function(email) {
      remove(userKey('hc_calcs_', email));
      remove(userKey('hc_projects_', email));
      remove(userKey('hc_formulas_', email));
      remove(userKey('hc_regls_', email));
      remove(userKey('hc_user_logo_', String(email || 'guest').trim().toLowerCase()));
    }

  };
})();