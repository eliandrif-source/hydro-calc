/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — PWA UPDATE COORDINATOR
   A newly activated worker may control a page whose JavaScript was loaded from
   the previous release. Reload once on controllerchange so security fixes and
   the current app shell are applied together.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_PWA_UPDATE_LOADED__) return;
  window.__HC_PWA_UPDATE_LOADED__ = true;

  if (!('serviceWorker' in navigator)) return;

  var RELOAD_KEY = 'hc_sw_controller_reload_v1';
  var reloading = false;

  function alreadyReloadedForThisNavigation() {
    try { return sessionStorage.getItem(RELOAD_KEY) === '1'; }
    catch (e) { return false; }
  }

  function markReload() {
    try { sessionStorage.setItem(RELOAD_KEY, '1'); }
    catch (e) {}
  }

  function clearReloadGuard() {
    try { sessionStorage.removeItem(RELOAD_KEY); }
    catch (e) {}
  }

  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (reloading || alreadyReloadedForThisNavigation()) return;
    reloading = true;
    markReload();
    window.location.reload();
  });

  /* Une navigation stabilisée doit permettre une future mise à jour. On garde
     le marqueur assez longtemps pour éviter une boucle controllerchange/reload,
     puis on le retire pour la prochaine version du service worker. */
  window.setTimeout(clearReloadGuard, 10000);

  window.HydroCalcPwaUpdate = {
    clearReloadGuard: clearReloadGuard
  };
})();
