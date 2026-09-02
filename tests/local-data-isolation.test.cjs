const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const store = fs.readFileSync(path.join(__dirname, '..', 'js', 'data-store.js'), 'utf8');

assert.match(store, /removeItem\('hc_main_accounts'\)/,
  'legacy local account database must be purged');
assert.match(store, /accounts:\s*\{[\s\S]*getAll:\s*function\(\)\s*\{\s*return \{\};\s*\}/,
  'legacy local accounts must never be an identity source');
assert.match(store, /saveAll:\s*function\(\)\s*\{\s*remove\('hc_main_accounts'\);\s*\}/,
  'legacy local account writes must stay disabled');
assert.match(store, /legacyRemember[\s\S]*legacyRemember\.supa !== true[\s\S]*remove\('hc_remember'\)/,
  'legacy non-Supabase remember tokens must be purged');

assert.match(store, /function activeUserEmail\(\)/);
assert.match(store, /activeUserKey\('hc_user_logo_'\)/,
  'report logo must be namespaced to the active account');
assert.ok(!/userLogo:\s*\{[\s\S]{0,250}get:\s*function\(\)\s*\{\s*return _safeStorage\.getItem\('hc_user_logo'\)/.test(store),
  'global report logo key must never be read');
assert.match(store, /removeItem\('hc_user_logo'\)/,
  'legacy global logo must be purged rather than ambiguously migrated');
assert.match(store, /clearUserData:[\s\S]*hc_user_logo_/,
  'user-data purge must remove the account-scoped report logo');

console.log('local-data-isolation: browser identity disabled, legacy remember token purged and report logo isolated by account');
