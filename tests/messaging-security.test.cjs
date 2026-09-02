const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'messaging-security.js'), 'utf8');
const uiSource = fs.readFileSync(path.join(__dirname, '..', 'js', 'messaging-ui-security.js'), 'utf8');
const migration = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'migrations', '20260902_messaging_security.sql'), 'utf8');
const followup = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'migrations', '202609021900_messaging_followup.sql'), 'utf8');

const context = {
  window: {},
  document: {
    createElement: () => ({ style:{}, addEventListener(){}, appendChild(){}, set textContent(v){ this._text=v; }, get textContent(){ return this._text; } }),
    getElementById: () => null,
    querySelector: () => null
  },
  console,
  Set,
  String,
  Array,
  Math,
  Date,
  Number,
  RegExp,
  URL,
  setTimeout,
  clearTimeout
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename:'messaging-security.js' });
vm.runInContext(uiSource, context, { filename:'messaging-ui-security.js' });

const S = context.window.HydroCalcMessagingSecurity;
assert.ok(S, 'security bridge should expose testable helpers');
assert.equal(S.maxFileBytes, 10 * 1024 * 1024);
assert.ok(S.allowedMime.includes('application/pdf'));
assert.ok(S.allowedMime.includes('image/jpeg'));
assert.ok(!S.allowedMime.some(x => x.startsWith('video/')), 'video attachments are intentionally excluded');
assert.equal(S.displayName('  Alice\u0000\nDupont  '), 'AliceDupont');
assert.equal(S.safeExtension('rapport.final.PDF'), 'pdf');
assert.equal(S.safeExtension('sans-extension'), 'bin');
assert.ok(context.window.HydroCalcMessagingUI && context.window.HydroCalcMessagingUI.safeListRenderer);
assert.ok(!uiSource.includes('onclick='), 'secure list renderer must not create inline event handlers');
assert.ok(!uiSource.includes('.innerHTML'), 'secure list renderer must not use innerHTML');

assert.match(migration, /'message-attachments','message-attachments',false,10485760/);
assert.match(migration, /create or replace function public\.search_message_members/);
assert.match(migration, /select p\.id, coalesce\(nullif\(trim\(p\.name\)/);
assert.ok(!/search_message_members[\s\S]{0,1400}p\.email/i.test(migration), 'member search RPC must not expose profile email');
assert.match(migration, /create or replace function public\.message_send/);
assert.match(migration, /revoke insert, update, delete on public\.messages from authenticated/);
assert.match(migration, /message attachments read thread participants/);
assert.match(followup, /storage\/v1\/object\/public\/message-attachments/);
assert.match(followup, />= 20 then/);
assert.match(followup, /created_at > now\(\)-interval '24 hours'/);

console.log('messaging-security: private attachments, RPC authority, privacy, DOM list, legacy backfill and anti-spam regressions OK');
