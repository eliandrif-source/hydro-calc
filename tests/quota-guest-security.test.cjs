const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const quota = fs.readFileSync(path.join(__dirname, '..', 'js', 'quota-security.js'), 'utf8');
const sw = fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');

assert.match(quota, /function hasAccount\(\)/);
assert.match(quota, /if \(!hasAccount\(\)\) \{[\s\S]*inviteToRegister\(\)/);
assert.match(quota, /Créez un compte gratuit pour lancer un calcul/);
assert.ok(!quota.includes('guest/local demo remains legacy behaviour'), 'guest calculations must not bypass server-authoritative quotas');
assert.match(quota, /return \{ allowed: false, unauthenticated: true \}/);
assert.match(quota, /event\.preventDefault\(\);[\s\S]*event\.stopImmediatePropagation\(\);/);
assert.match(sw, /hydrocalc-v301-security-20260902/);
assert.match(sw, /\.\/js\/quota-security\.js/);

console.log('quota-guest-security: guest calculators require an account and PWA cache was bumped');
