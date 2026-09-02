const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'messaging-security.js'), 'utf8');
const uiSource = fs.readFileSync(path.join(__dirname, '..', 'js', 'messaging-ui-security.js'), 'utf8');
const controlsSource = fs.readFileSync(path.join(__dirname, '..', 'js', 'messaging-controls.js'), 'utf8');
const migration = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'migrations', '20260902_messaging_security.sql'), 'utf8');
const followup = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'migrations', '202609021900_messaging_followup.sql'), 'utf8');
const safetyMigration = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'migrations', '202609022030_messaging_blocking_reports.sql'), 'utf8');

const context = {
  window: { confirm: () => true, prompt: () => 'spam' },
  document: {
    createElement: () => ({ style:{}, dataset:{}, addEventListener(){}, appendChild(){}, set textContent(v){ this._text=v; }, get textContent(){ return this._text; } }),
    createDocumentFragment: () => ({ appendChild(){} }),
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
vm.runInContext(controlsSource, context, { filename:'messaging-controls.js' });

const S = context.window.HydroCalcMessagingSecurity;
const C = context.window.HydroCalcMessagingControls;
assert.ok(S, 'security bridge should expose testable helpers');
assert.ok(C, 'safety controls should expose testable helpers');
assert.equal(S.maxFileBytes, 10 * 1024 * 1024);
assert.ok(S.allowedMime.includes('application/pdf'));
assert.ok(S.allowedMime.includes('image/jpeg'));
assert.ok(!S.allowedMime.some(x => x.startsWith('video/')), 'video attachments are intentionally excluded');
assert.equal(S.displayName('  Alice\u0000\nDupont  '), 'AliceDupont');
assert.equal(S.safeExtension('rapport.final.PDF'), 'pdf');
assert.equal(S.safeExtension('sans-extension'), 'bin');
assert.equal(C.cleanReason('  spam\n\u0000 agressif  '), 'spam agressif');
assert.equal(C.pageSize, 50);
assert.ok(context.window.HydroCalcMessagingUI && context.window.HydroCalcMessagingUI.safeListRenderer);
assert.ok(!uiSource.includes('onclick='), 'secure list renderer must not create inline event handlers');
assert.ok(!uiSource.includes('.innerHTML'), 'secure list renderer must not use innerHTML');
assert.ok(!controlsSource.includes('.innerHTML'), 'message safety controls must remain DOM-only');
assert.match(controlsSource, /order\('created_at',\{ascending:false\}\)\.limit\(PAGE_SIZE\+1\)/);
assert.match(controlsSource, /Charger les messages précédents/);
assert.match(controlsSource, /q=q\.lt\('created_at',before\)/);

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

assert.match(safetyMigration, /create table if not exists public\.message_blocks/);
assert.match(safetyMigration, /create table if not exists public\.message_reports/);
assert.match(safetyMigration, /create or replace function public\.message_block_user/);
assert.match(safetyMigration, /create or replace function public\.message_report_private/);
assert.match(safetyMigration, /public\.message_is_blocked_pair\(v_uid,v_other\)/);
assert.match(safetyMigration, /public\.message_is_blocked_pair\(v_uid,p_receiver\)/);
assert.match(safetyMigration, /unique \(reporter_id, message_id\)/);

console.log('messaging-security: private attachments, RPC authority, privacy, pagination, anti-spam, blocking and reporting regressions OK');
