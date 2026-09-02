const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const forum = fs.readFileSync(path.join(__dirname, '..', 'js', 'forum.js'), 'utf8');
const migration = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'migrations', '20260902_forum_foundation.sql'), 'utf8');

const context = {
  window: {},
  document: { createElement: () => ({ style:{}, addEventListener(){}, appendChild(){}, dataset:{} }), getElementById:()=>null, head:{appendChild(){}} },
  console,
  Date,
  Number,
  String,
  Array,
  Math,
  RegExp,
  setTimeout
};
context.window.window=context.window;
vm.createContext(context);
vm.runInContext(forum,context,{filename:'forum.js'});

assert.ok(Array.isArray(context.FORUM_SALONS));
assert.equal(context.FORUM_SALONS.length,8);
assert.ok(context.FORUM_SALONS.some(s=>s.id==='rivieres-gemapi'));
assert.equal(typeof context.window.renderForum,'function');
assert.equal(typeof context.window._fOpenSalon,'function');
assert.ok(context.window.HydroCalcForum);

assert.match(migration,/revoke insert, update, delete on public\.forum_posts from authenticated/);
assert.match(migration,/create or replace function public\.forum_create_post/);
assert.match(migration,/create or replace function public\.forum_reply/);
assert.match(migration,/create or replace function public\.forum_report/);
assert.match(migration,/create or replace function public\.forum_admin_moderate/);
assert.match(migration,/created_at>now\(\)-interval '1 hour'\) >= 5/);
assert.match(migration,/created_at>now\(\)-interval '1 hour'\) >= 30/);
assert.ok(!forum.includes('attachment_url'), 'forum intentionally starts without attachments');
assert.ok(!/\.innerHTML\s*=.*(?:title|body|author_name)/.test(forum), 'untrusted forum fields must not be assigned through innerHTML');

console.log('forum-security: versioned module, moderation and server-write authority regressions OK');
