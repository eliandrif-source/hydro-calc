/* ═══════════════════════════════════════════════════
   SERVICE WORKER — HydroCalc PWA
   Cache-first · Mode hors-ligne complet
═══════════════════════════════════════════════════ */
var CACHE_NAME = 'hydrocalc-v163';

var ASSETS = [
  './',
  './HydroCalc_Design_Unifie.html',
  './styles.css',
  './js/supabase-client.js',
  './js/stripe-client.js',
  './js/data-store.js',
  './js/utils.js',
  './js/calculateurs.js',
  './js/glossaire.js',
  './js/reglementation.js',
  './js/contenus.js',
  './js/outils_terrain.js',
  './js/cours.js',
  './js/settings.js',
  './js/qcm_bank.js',
  './js/qcm_prof.js',
  './js/dossiers.js',
  './js/auth.js',
  './libs/docx.js',
  './libs/jszip.js',
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.allSettled(
        ASSETS.map(function(url) {
          return cache.add(url).catch(function() {});
        })
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  var url = e.request.url;
  if (url.startsWith('chrome-extension://') || url.startsWith('data:')) return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      }).catch(function() {
        /* Hors-ligne : ne servir le fallback app que pour une navigation
           vers la page principale, jamais pour une autre page (QCM Platform...) */
        var isMainNav = e.request.mode === 'navigate'
          && (url.endsWith('/') || url.endsWith('HydroCalc_Design_Unifie.html'));
        if (isMainNav) return caches.match('./HydroCalc_Design_Unifie.html');
        return Response.error();
      });
    })
  );
});
