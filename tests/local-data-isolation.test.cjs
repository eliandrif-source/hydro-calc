const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const store = fs.readFileSync(path.join(__dirname, '..', 'js', 'data-store.js'), 'utf8');
const auth = fs.readFileSync(path.join(__dirname, '..', 'js', 'auth-security.js'), 'utf8');

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

assert.match(auth, /localStorage\.removeItem\('etab_codes'\)/,
  'legacy establishment access-code storage must be purged');
assert.match(auth, /window\._etabGetCodes\s*=\s*function\s*\(\)/,
  'legacy establishment getter must be replaced by the server-backed cache facade');
assert.match(auth, /window\._etabSaveCodes\s*=\s*function\s*\(\)[\s\S]*removeItem\('etab_codes'\)/,
  'legacy establishment writes must stay disabled');
assert.match(auth, /rpc\('create_access_code'\)/,
  'new establishment codes must be created by Supabase RPC');
assert.match(auth, /rpc\('revoke_access_code'/,
  'establishment-code revocation must be handled by Supabase RPC');

console.log('local-data-isolation: browser identity disabled, legacy remember/access-code storage purged and report logo isolated by account');
