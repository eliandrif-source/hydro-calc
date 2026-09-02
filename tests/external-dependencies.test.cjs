const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'HydroCalc_Design_Unifie.html'), 'utf8');
const headers = fs.readFileSync(path.join(ROOT, '_headers'), 'utf8');

const scripts = [...html.matchAll(/<script\s+[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/gi)].map((m) => m[1]);
const expectedScripts = [
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js',
  'https://js.stripe.com/v3/',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://unpkg.com/peerjs@1.5.1/dist/peerjs.min.js'
];
assert.deepEqual(scripts, expectedScripts,
  'external script inventory changed: review and update docs/DEPENDENCY_SECURITY.md intentionally');

const externalStyles = [...html.matchAll(/<link\s+[^>]*href=["'](https:\/\/[^"']+)["'][^>]*>/gi)].map((m) => m[1]);
assert.equal(externalStyles.length, 1, 'only the reviewed Google Fonts stylesheet may be external');
assert.match(externalStyles[0], /^https:\/\/fonts\.googleapis\.com\//);

assert.match(scripts[0], /@supabase\/supabase-js@2\//,
  'current floating Supabase major is a documented release-freeze exception');
assert.match(scripts[2], /jspdf\/2\.5\.1\//);
assert.match(scripts[3], /qrcodejs\/1\.0\.0\//);
assert.match(scripts[4], /peerjs@1\.5\.1\//);

const scriptHosts = [...new Set(scripts.map((url) => new URL(url).origin))];
scriptHosts.forEach((origin) => {
  assert.ok(headers.includes(origin), `CSP must explicitly allow reviewed script host ${origin}`);
});
assert.match(headers, /script-src 'self' 'unsafe-inline'/);
assert.match(headers, /style-src 'self' 'unsafe-inline' https:\/\/fonts\.googleapis\.com/);
assert.match(headers, /font-src 'self' https:\/\/fonts\.gstatic\.com data:/);

const dependencyDoc = fs.readFileSync(path.join(ROOT, 'docs', 'DEPENDENCY_SECURITY.md'), 'utf8');
assert.match(dependencyDoc, /supabase-js@2/i);
assert.match(dependencyDoc, /Stripe\.js/i);
assert.match(dependencyDoc, /version exacte/i);

console.log('external-dependencies: reviewed CDN inventory is frozen, documented and bound to CSP');
