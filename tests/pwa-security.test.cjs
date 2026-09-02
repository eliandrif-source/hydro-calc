const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const sw = fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');
const stripe = fs.readFileSync(path.join(__dirname, '..', 'js', 'stripe-client.js'), 'utf8');
const update = fs.readFileSync(path.join(__dirname, '..', 'js', 'pwa-update.js'), 'utf8');

assert.match(sw, /CACHE_NAME\s*=\s*'hydrocalc-v303-security-20260902'/);
assert.match(sw, /function isSameOrigin\(request\)/);
assert.match(sw, /if \(!isSameOrigin\(request\)\) return;/);
assert.match(sw, /request\.headers\.get\('Authorization'\)/);
assert.match(sw, /if \(isCriticalAppAsset\(request\)\)[\s\S]*networkFirst\(request\)/);
assert.match(sw, /if \(isLocalStaticAsset\(request\)\)[\s\S]*cacheFirstStatic\(request\)/);

[
  './js/pwa-update.js',
  './js/auth-security.js',
  './js/product-ux-hardening.js',
  './js/xss-security.js',
  './js/quota-security.js',
  './js/report-security.js',
  './js/messaging-security.js',
  './js/forum-enhancements.js',
  './js/home-ux-enhancements.js'
].forEach((asset) => {
  assert.ok(sw.includes(asset), `PWA shell must include critical asset ${asset}`);
});

assert.match(stripe, /hc-pwa-update/);
assert.match(stripe, /js\/pwa-update\.js/);
assert.match(update, /serviceWorker\.addEventListener\('controllerchange'/);
assert.match(update, /window\.location\.reload\(\)/);
assert.match(update, /sessionStorage/);
assert.match(update, /reloading/);

assert.ok(!/caches\.match\(e\.request\)[\s\S]*if \(cached\) return cached[\s\S]*fetch\(e\.request\)/.test(sw),
  'service worker must not use the old generic cache-first strategy');
assert.ok(!/cache\.put\(e\.request/.test(sw),
  'service worker must not cache every successful GET request');

console.log('pwa-security: same-origin isolation, network-first critical assets and one-shot update reload regressions OK');
