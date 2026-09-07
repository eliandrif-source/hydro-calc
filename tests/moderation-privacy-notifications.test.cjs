const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const sql = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'migrations', '202609072203_moderation_privacy_notifications.sql'), 'utf8');

assert.match(sql, /message_my_blocks\s*\(\s*\)/i);
assert.match(sql, /where\s+b\.blocker_id\s*=\s*auth\.uid\(\)/i);
assert.match(sql, /message_my_reports\s*\(\s*\)/i);
assert.doesNotMatch(sql.match(/create or replace function public\.message_my_reports[\s\S]*?\$\$;/i)?.[0] || '', /admin_note|reviewed_by|decision/i);
assert.match(sql, /create table if not exists public\.admin_notifications/i);
assert.match(sql, /recipient_admin_id\s*=\s*auth\.uid\(\)/i);
assert.match(sql, /message_report_notify_admins/i);
assert.match(sql, /report already decided/i);
assert.match(sql, /self sanction forbidden/i);
assert.match(sql, /admin sanction requires separate governance/i);
assert.match(sql, /moderation_lift_sanction/i);
assert.match(sql, /set search_path\s*=\s*''/i);
assert.match(sql, /revoke all on function public\.moderation_decide_report[^;]+from public, anon/i);

console.log('moderation-privacy-notifications: personal blocks, private reports, durable admin alerts and idempotent sanctions are guarded');
