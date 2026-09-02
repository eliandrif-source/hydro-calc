/* ═══════════════════════════════════════════════════
   SERVICE WORKER — HydroCalc PWA
   Production-safe cache policy

   Principes :
   - aucune réponse API / Supabase / Stripe / CDN n'est mise en cache ;
   - HTML, JS et CSS HydroCalc sont network-first pour recevoir les correctifs ;
   - le cache sert uniquement de fallback hors-ligne ;
   - les images/libs locales immuables peuvent être cache-first ;
   - tout changement de politique ou bundle critique incrémente CACHE_NAME.
═══════════════════════════════════════════════════ */
var CACHE_NAME = 'hydrocalc-v301-security-20260902';

var APP_SHELL = [
  './',
  './HydroCalc_Design_Unifie.html',
  './styles.css',
  './manifest.json',

  './js/supabase-client.js',
  './js/stripe-client.js',
  './js/data-store.js',
  './js/utils.js',
  './js/calculateurs.js',
  './js/glossaire.js',
  './js/regl_depts.js',
  './js/reglementation.js',
  './js/contenus.js',
  './js/outils_terrain.js',
  './js/cours.js',
  './js/cours_perso.js',
  './js/forum.js',
  './js/messagerie.js',
  './js/settings.js',
  './js/qcm_bank.js',
  './js/qcm_prof.js',
  './js/dossiers.js',
  './js/auth.js',

  /* Bridges sécurité / production */
  './js/auth-security.js',
  './js/product-ux-hardening.js',
  './js/xss-security.js',
  './js/coffre-security.js',
  './js/quota-security.js',
  './js/report-security.js',
  './js/report-pdf-fixes.js',
  './js/report-format-fixes.js',
  './js/messaging-security.js',
  './js/messaging-ui-security.js',
  './js/messaging-controls.js',
  './js/community-admin.js',
  './js/forum-enhancements.js',
  './js/share-community.js',
  './js/home-ux-enhancements.js',

  /* Moteurs scientifiques audités */
  './js/science-core.js',
  './js/science-advanced.js',
  './js/science-anc.js',
  './js/science-step.js',
  './js/science-lagoon.js',
  './js/science-biofilm.js',
  './js/science-aep.js',
  './js/science-rivers.js',
  './js/science-fishpass.js',

  './images/icon.png',
  './images/logo-dark.png',
  './images/logo-light.png',
  './libs/docx.js',
  './libs/jszip.js'
];

function isSameOrigin(request) {
  try { return new URL(request.url).origin === self.location.origin; }
  catch (e) { return false; }
}

function isLocalStaticAsset(request) {
  if (!isSameOrigin(request)) return false;
  var u = new URL(request.url);
  return /\.(?:png|jpg|jpeg|webp|svg|ico|woff2?|ttf)$/i.test(u.pathname)
    || u.pathname.indexOf('/libs/') !== -1;
}

function isCriticalAppAsset(request) {
  if (!isSameOrigin(request)) return false;
  if (request.mode === 'navigate') return true;
  var u = new URL(request.url);
  return /\.(?:html|js|css)$/i.test(u.pathname)
    || u.pathname === '/'
    || u.pathname.endsWith('/');
}

function cacheableResponse(response) {
  return response && response.ok && response.type !== 'opaque';
}

function networkFirst(request) {
  return fetch(request).then(function(response) {
    if (cacheableResponse(response)) {
      var clone = response.clone();
      caches.open(CACHE_NAME).then(function(cache) {
        cache.put(request, clone).catch(function() {});
      });
    }
    return response;
  }).catch(function() {
    return caches.match(request).then(function(cached) {
      if (cached) return cached;
      if (request.mode === 'navigate') {
        return caches.match('./HydroCalc_Design_Unifie.html').then(function(fallback) {
          return fallback || Response.error();
        });
      }
      return Response.error();
    });
  });
}

function cacheFirstStatic(request) {
  return caches.match(request).then(function(cached) {
    if (cached) return cached;
    return fetch(request).then(function(response) {
      if (cacheableResponse(response)) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(request, clone).catch(function() {});
        });
      }
      return response;
    });
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      /* Un asset optionnel manquant ne doit pas empêcher l'installation. */
      return Promise.allSettled(APP_SHELL.map(function(url) {
        return cache.add(url);
      }));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(key) {
        return key !== CACHE_NAME;
      }).map(function(key) {
        return caches.delete(key);
      }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  var request = event.request;
  if (!request || request.method !== 'GET') return;

  /* Règle de confidentialité : aucune ressource cross-origin n'est touchée.
     Cela exclut notamment Supabase, Stripe, Google Fonts et les CDN. */
  if (!isSameOrigin(request)) return;

  /* Les appels applicatifs non statiques ne doivent jamais être mis en cache. */
  if (request.headers && request.headers.get('Authorization')) return;

  if (isCriticalAppAsset(request)) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isLocalStaticAsset(request)) {
    event.respondWith(cacheFirstStatic(request));
  }
});