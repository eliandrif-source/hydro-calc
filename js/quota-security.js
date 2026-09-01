/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — QUOTA SECURITY BRIDGE
   Gates quota-limited actions through Supabase consume_usage().
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_QUOTA_SECURITY_LOADED__) return;
  window.__HC_QUOTA_SECURITY_LOADED__ = true;

  var bypassClicks = new WeakSet();

  function toast(msg) {
    if (typeof window.authToast === 'function') window.authToast(msg);
  }

  function isAuthenticatedUser() {
    return !!(window.AUTH && window.AUTH.user && window.SupaDB && typeof window.hcConsumeUsage === 'function');
  }

  function quotaMessage(kind, usage) {
    if (kind === 'calc_daily') return 'Limite quotidienne atteinte : ' + (usage.limit_value || 10) + ' calculs.';
    if (kind === 'report_weekly') return 'Votre quota de rapport pour cette semaine est atteint.';
    if (kind === 'qcm_weekly') return 'Votre quota QCM pour cette semaine est atteint.';
    return 'Quota atteint.';
  }

  async function consume(kind) {
    if (!isAuthenticatedUser()) return { allowed: true, unmetered: true };
    try {
      var usage = await window.hcConsumeUsage(kind);
      if (!usage || usage.error) {
        console.error('[HydroCalc] quota error', usage && usage.error);
        toast('Impossible de vérifier votre quota. Réessayez.');
        return { allowed: false, error: true };
      }
      if (!usage.allowed) toast(quotaMessage(kind, usage));
      return usage;
    } catch (err) {
      console.error('[HydroCalc] quota exception', err);
      toast('Impossible de vérifier votre quota. Réessayez.');
      return { allowed: false, error: true };
    }
  }

  /* ── Calculateurs ─────────────────────────────────────────────
     Most legacy calculators expose an inline button labelled Calculer inside
     #calc-content / #calca-content. Capture the click before the inline handler,
     consume server quota, then replay it exactly once if allowed. */
  document.addEventListener('click', function (event) {
    var button = event.target && event.target.closest ? event.target.closest('button') : null;
    if (!button) return;
    if (bypassClicks.has(button)) { bypassClicks.delete(button); return; }

    var scope = button.closest('#calc-content, #calca-content');
    if (!scope) return;
    var label = (button.textContent || '').replace(/\s+/g, ' ').trim();
    if (!/(^|\s)calculer(\s|$|→|✓)/i.test(label)) return;
    if (!isAuthenticatedUser()) return; // guest/local demo remains legacy behaviour

    event.preventDefault();
    event.stopImmediatePropagation();
    var oldDisabled = button.disabled;
    button.disabled = true;

    consume('calc_daily').then(function (usage) {
      button.disabled = oldDisabled;
      if (!usage.allowed) return;
      bypassClicks.add(button);
      button.click();
    });
  }, true);

  /* ── Rapports ──────────────────────────────────────────────── */
  function hasReportContent() {
    try {
      var calcs = typeof window._getSelectedCalcs === 'function' ? window._getSelectedCalcs() : [];
      var formulas = typeof window._getSelectedFormulas === 'function' ? window._getSelectedFormulas() : [];
      var regls = typeof window._getSelectedRegls === 'function' ? window._getSelectedRegls() : [];
      return !!((calcs && calcs.length) || (formulas && formulas.length) || (regls && regls.length));
    } catch (e) {
      return false;
    }
  }

  function gateReportFunction(name) {
    if (typeof window[name] !== 'function') return;
    var legacy = window[name];
    window[name] = async function () {
      var plan = window.AUTH && window.AUTH.user ? (window.AUTH.user.plan || 'free') : 'free';
      if (plan === 'free') {
        toast('Les rapports ne sont pas disponibles avec le plan Gratuit.');
        return;
      }
      if (!hasReportContent()) {
        toast('Aucun élément sélectionné à exporter.');
        return;
      }
      if (!isAuthenticatedUser()) return legacy.apply(this, arguments);

      var usage = await consume('report_weekly');
      if (!usage.allowed) return;

      var oldCan = window._canGenerateReport;
      var oldInc = window._incrementReportQuota;
      window._canGenerateReport = function () { return { ok: true }; };
      window._incrementReportQuota = function () {};
      try {
        return legacy.apply(this, arguments);
      } finally {
        window._canGenerateReport = oldCan;
        window._incrementReportQuota = oldInc;
      }
    };
  }

  ['generateHTMLReport', '_doGeneratePDFReport', '_doGenerateDOCXReport', '_doGenerateODTReport'].forEach(gateReportFunction);

  /* ── Banque QCM ──────────────────────────────────────────────
     Pro is limited to 10 starts/week. Establishment/Admin remain unlimited.
     The legacy implementation increments localStorage; this override makes
     Supabase the authoritative counter and never calls that increment helper. */
  if (typeof window._startBankQCM === 'function') {
    window._startBankQCM = async function (idx) {
      if (typeof window.QCM_BANK === 'undefined' || !window.QCM_BANK[idx]) return;
      var access = typeof window._qcmBankAccess === 'function' ? window._qcmBankAccess() : 'none';
      if (access === 'none') {
        toast('QCM réservés au plan Pro, Établissement ou Admin');
        return;
      }
      if (access === 'limited') {
        if (!isAuthenticatedUser()) {
          toast('Reconnectez-vous pour utiliser les QCM Pro.');
          return;
        }
        var usage = await consume('qcm_weekly');
        if (!usage.allowed) return;
      }
      if (typeof window._startStudentQCM === 'function') window._startStudentQCM(window.QCM_BANK[idx], true);
    };
  }

  window.hcQuotaConsume = consume;
})();