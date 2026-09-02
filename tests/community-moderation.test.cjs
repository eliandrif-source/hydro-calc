const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'community-admin.js'), 'utf8');
const migration = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'migrations', '202609022200_community_moderation_search.sql'), 'utf8');

const context = {
  window: {},
  document: {
    createElement: () => ({ style:{}, addEventListener(){}, appendChild(){}, replaceChildren(){}, querySelectorAll(){return []}, dataset:{} }),
    createTextNode: () => ({}),
    getElementById: () => null
  },
  console,
  Date,
  String,
  Array,
  Number,
  Math
};
context.window.window=context.window;
vm.createContext(context);
vm.runInContext(source, context, {filename:'community-admin.js'});

assert.ok(context.window.HydroCalcCommunityAdmin);
assert.ok(!source.includes('.innerHTML'), 'community moderation must render with DOM/textContent only');
assert.match(source,/community_admin_reports/);
assert.match(source,/community_admin_review_report/);
assert.match(source,/community_admin_hide_reported_target/);

assert.match(migration,/create or replace function public\.community_admin_reports/);
assert.match(migration,/where public\.forum_is_admin\(auth\.uid\(\)\)/);
assert.match(migration,/'message'::text as kind/);
assert.match(migration,/join public\.messages m on m\.id=mr\.message_id/);
assert.ok(!/community_admin_reports[\s\S]*join public\.message_threads/.test(migration), 'admin report feed must not expose the private thread');
assert.ok(!/community_admin_reports[\s\S]*attachment_url/.test(migration), 'admin report feed must not expose private attachment paths');
assert.match(migration,/update public\.messages set is_deleted=true where id=v_target/);
assert.match(migration,/p_status not in \('reviewed','dismissed'\)/);

console.log('community-moderation: scoped report visibility and DOM-only admin queue regressions OK');
