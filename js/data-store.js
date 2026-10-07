/* ══════════════════════════════════════════════════════════════════
   DATA STORE — couche d'abstraction de stockage HydroCalc
   Primaire : localStorage (via _safeStorage) — synchrone, immédiat
   Secondaire : Supabase — activé par DataStore.sync.enable() au login
   ══════════════════════════════════════════════════════════════════ */

var DataStore = (function() {

  function _uuid() {
    try { return crypto.randomUUID(); } catch(e) {}
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  function read(key, fallback) {
    try { var raw = _safeStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
    catch(e) { return fallback; }
  }
  function write(key, value) { _safeStorage.setItem(key, JSON.stringify(value)); }
  function remove(key) { _safeStorage.removeItem(key); }
  function userKey(prefix, email) { return prefix + (email || 'guest'); }

  var _syncOn = false;

  /* ── Sync Supabase : calculs ────────────────────────────────────── */
  async function _syncCalcs(email, arr) {
    if (!_syncOn || typeof SupaDB === 'undefined') return;
    arr.forEach(function(c){ if (!c._id) c._id = _uuid(); });
    write(userKey('hc_calcs_', email), arr);
    var rows = arr.map(function(c) {
      return { id: c._id, module: c.module||'', module_id: c.moduleId||'', valeur: c.valeur||'', detail: c.detail||'', inputs: c };
    });
    try {
      var { data: ex } = await SupaDB.from('saved_calculations').select('id');
      var exIds = (ex||[]).map(function(r){ return r.id; });
      var locIds = rows.map(function(r){ return r.id; });
      var del = exIds.filter(function(id){ return locIds.indexOf(id) === -1; });
      if (del.length) await SupaDB.from('saved_calculations').delete().in('id', del);
      if (rows.length) await SupaDB.from('saved_calculations').upsert(rows);
    } catch(e) {}
  }

  /* ── Sync Supabase : formules ───────────────────────────────────── */
  async function _syncFormulas(email, arr) {
    if (!_syncOn || typeof SupaDB === 'undefined') return;
    arr.forEach(function(f){ if (!f._id) f._id = _uuid(); });
    write(userKey('hc_formulas_', email), arr);
    var rows = arr.map(function(f) {
      return { id: f._id, nom: f.nom, expr: f.expr, result: f.result||'', ref: f.ref||'', vars: f.vars||[] };
    });
    try {
      var { data: ex } = await SupaDB.from('saved_formulas').select('id');
      var exIds = (ex||[]).map(function(r){ return r.id; });
      var locIds = rows.map(function(r){ return r.id; });
      var del = exIds.filter(function(id){ return locIds.indexOf(id) === -1; });
      if (del.length) await SupaDB.from('saved_formulas').delete().in('id', del);
      if (rows.length) await SupaDB.from('saved_formulas').upsert(rows);
    } catch(e) {}
  }

  /* ── Sync Supabase : textes réglementaires ──────────────────────── */
  async function _syncRegs(email, arr) {
    if (!_syncOn || typeof SupaDB === 'undefined') return;
    arr.forEach(function(r){ if (!r._id) r._id = _uuid(); });
    write(userKey('hc_regls_', email), arr);
    var rows = arr.map(function(r) {
      return { id: r._id, nom: r.nom, contenu: JSON.stringify(r) };
    });
    try {
      var { data: ex } = await SupaDB.from('saved_regulations').select('id');
      var exIds = (ex||[]).map(function(r){ return r.id; });
      var locIds = rows.map(function(r){ return r.id; });
      var del = exIds.filter(function(id){ return locIds.indexOf(id) === -1; });
      if (del.length) await SupaDB.from('saved_regulations').delete().in('id', del);
      if (rows.length) await SupaDB.from('saved_regulations').upsert(rows);
    } catch(e) {}
  }

  return {

    /* ─── Comptes ─── */
    accounts: {
      getAll: function() { return read('hc_main_accounts', {}); },
      saveAll: function(accounts) { write('hc_main_accounts', accounts); }
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

    /* ─── Logo personnalisé (data URL, stocké en clair) ─── */
    userLogo: {
      get: function() { return _safeStorage.getItem('hc_user_logo'); },
      set: function(dataUrl) { _safeStorage.setItem('hc_user_logo', dataUrl); },
      remove: function() { remove('hc_user_logo'); }
    },

    /* ─── Calculs sauvegardés ─── */
    calcs: {
      get: function(email) { return read(userKey('hc_calcs_', email), []); },
      set: function(email, arr) { write(userKey('hc_calcs_', email), arr); _syncCalcs(email, arr); }
    },

    /* ─── Bibliothèque de formules personnelles ─── */
    formulas: {
      get: function(email) { return read(userKey('hc_formulas_', email), []); },
      set: function(email, arr) { write(userKey('hc_formulas_', email), arr); _syncFormulas(email, arr); }
    },

    /* ─── Réglementations sauvegardées ─── */
    regulations: {
      get: function(email) { return read(userKey('hc_regls_', email), []); },
      set: function(email, arr) { write(userKey('hc_regls_', email), arr); _syncRegs(email, arr); }
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
      getResults: function(email, qcmId) { return read('hc_qcm_res_' + (email||'guest') + '_' + qcmId, []); },
      saveResults: function(email, qcmId, arr) { write('hc_qcm_res_' + (email||'guest') + '_' + qcmId, arr); }
    },

    /* ─── Questions QCM manquées (mode adaptatif) ─── */
    qcmWeak: {
      get: function(email, theme) { return read('hc_qcmw_' + (email||'guest') + '_' + (theme||''), []); },
      set: function(email, theme, arr) { write('hc_qcmw_' + (email||'guest') + '_' + (theme||''), arr); },
      addWrong: function(email, theme, q) {
        var arr = this.get(email, theme);
        if (!arr.some(function(x){ return x.q === q.q; }))
          arr.push({ q:q.q, choices:q.choices, correct:q.correct, expl:q.expl||'' });
        if (arr.length > 200) arr = arr.slice(-200);
        this.set(email, theme, arr);
      },
      removeRight: function(email, theme, qText) {
        var arr = this.get(email, theme).filter(function(x){ return x.q !== qText; });
        this.set(email, theme, arr);
      },
      count: function(email, theme) { return this.get(email, theme).length; }
    },

    /* ─── Statistiques QCM par thème ─── */
    qcmStats: {
      get: function(email) { return read('hc_qcmst_' + (email||'guest'), {}); },
      set: function(email, obj) { write('hc_qcmst_' + (email||'guest'), obj); },
      record: function(email, theme, ok, total) {
        var d = this.get(email);
        if (!d[theme]) d[theme] = { sessions:0, ok:0, total:0 };
        d[theme].sessions++;
        d[theme].ok    += ok;
        d[theme].total += total;
        this.set(email, d);
      }
    },

    /* ─── Activité utilisateur : streak + dernier module + dernier QCM ─── */
    activity: {
      get: function(email) {
        return read('hc_act_' + (email || 'guest'), { streak:0, lastDate:null, lastModule:null, lastModuleName:null, lastQcm:null });
      },
      set: function(email, obj) { write('hc_act_' + (email || 'guest'), obj); },
      updateStreak: function(email) {
        var a = this.get(email);
        var today = new Date().toISOString().slice(0,10);
        if (a.lastDate === today) return a;
        var yest = new Date(Date.now() - 864e5).toISOString().slice(0,10);
        a.streak = (a.lastDate === yest) ? (a.streak || 0) + 1 : 1;
        a.lastDate = today;
        this.set(email, a);
        return a;
      },
      setLastModule: function(email, moduleId, moduleName) {
        var a = this.get(email);
        a.lastModule = moduleId;
        a.lastModuleName = moduleName || moduleId;
        this.set(email, a);
      },
      setLastQcm: function(email, theme, title, score, total) {
        var a = this.get(email);
        a.lastQcm = { theme:theme, title:title, score:score, total:total, date:Date.now() };
        this.set(email, a);
      }
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
    },

    /* ─── Sync multi-appareils (Supabase) ──────────────────────────── */
    sync: {
      enable: function() { _syncOn = true; },
      disable: function() { _syncOn = false; },

      pull: async function(email) {
        if (typeof SupaDB === 'undefined') return;
        try {
          /* Calculs */
          var { data: calcs } = await SupaDB.from('saved_calculations').select('*').order('created_at', { ascending: false });
          if (calcs && calcs.length) {
            var remote = calcs.map(function(r) {
              var obj = (r.inputs && typeof r.inputs === 'object') ? Object.assign({}, r.inputs) : {};
              obj._id      = r.id;
              obj.module   = obj.module   || r.module   || '';
              obj.moduleId = obj.moduleId || r.module_id || '';
              obj.valeur   = obj.valeur   || r.valeur   || '';
              obj.detail   = obj.detail   || r.detail   || '';
              if (!obj.date) obj.date = new Date(r.created_at).getTime();
              return obj;
            });
            var local = read(userKey('hc_calcs_', email), []);
            var localIds = local.map(function(x){ return x._id; }).filter(Boolean);
            var toAdd = remote.filter(function(x){ return localIds.indexOf(x._id) === -1; });
            if (toAdd.length) {
              var merged = toAdd.concat(local);
              merged.sort(function(a,b){ return (b.date||0) - (a.date||0); });
              if (merged.length > 50) merged = merged.slice(0, 50);
              write(userKey('hc_calcs_', email), merged);
            }
          }

          /* Formules */
          var { data: fms } = await SupaDB.from('saved_formulas').select('*').order('created_at', { ascending: false });
          if (fms && fms.length) {
            var remoteF = fms.map(function(r) {
              return { _id: r.id, nom: r.nom, expr: r.expr, result: r.result||'', ref: r.ref||'', vars: r.vars||[], date: new Date(r.created_at).getTime() };
            });
            var localF = read(userKey('hc_formulas_', email), []);
            var localFIds = localF.map(function(x){ return x._id; }).filter(Boolean);
            var toAddF = remoteF.filter(function(x){ return localFIds.indexOf(x._id) === -1; });
            if (toAddF.length) write(userKey('hc_formulas_', email), toAddF.concat(localF));
          }

          /* Textes réglementaires */
          var { data: regs } = await SupaDB.from('saved_regulations').select('*').order('created_at', { ascending: false });
          if (regs && regs.length) {
            var remoteR = regs.map(function(r) {
              try { var obj = JSON.parse(r.contenu); obj._id = r.id; return obj; } catch(e) { return null; }
            }).filter(Boolean);
            var localR = read(userKey('hc_regls_', email), []);
            var localRIds = localR.map(function(x){ return x._id; }).filter(Boolean);
            var toAddR = remoteR.filter(function(x){ return localRIds.indexOf(x._id) === -1; });
            if (toAddR.length) write(userKey('hc_regls_', email), toAddR.concat(localR));
          }
        } catch(e) {}
      },

      pushAll: function(email) {
        _syncCalcs(email, read(userKey('hc_calcs_', email), []));
        _syncFormulas(email, read(userKey('hc_formulas_', email), []));
        _syncRegs(email, read(userKey('hc_regls_', email), []));
      }
    }

  };
})();
