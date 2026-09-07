const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const sql = fs.readFileSync(path.join(__dirname, '..', 'supabase/preflight/production_preflight.sql'), 'utf8');

assert.match(sql, /to_regclass\('public\.friend_requests'\)/i);
assert.match(sql, /to_regclass\('public\.message_threads'\)/i);
assert.match(sql, /to_regclass\('public\.messages'\)/i);
assert.match(sql, /if .* is not null then/i);
assert.match(sql, /raise notice/i);
assert.doesNotMatch(sql, /\b(insert|update|delete|truncate|alter|drop|create table)\b/i,
  'production preflight must not perform persistent writes/schema changes');

console.log('preflight-safety: optional community tables are guarded and script remains read-only');
