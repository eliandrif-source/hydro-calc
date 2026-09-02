const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const schema = fs.readFileSync(path.join(ROOT, 'supabase', 'schema.sql'), 'utf8');
const deploy = fs.readFileSync(path.join(ROOT, 'docs', 'DEPLOYMENT_SECURITY.md'), 'utf8');

assert.match(schema, /SOURCE DE VÉRITÉ\s*:\s*`supabase\/migrations\//i);
assert.match(schema, /uniquement de commentaires/i);

const executable = schema
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('--'))
  .join('\n');
assert.equal(executable, '', 'supabase/schema.sql must remain a non-executable retirement notice');

assert.ok(!/create\s+(?:table|policy|function)|alter\s+table|security\s+definer/i.test(executable),
  'legacy executable schema must never return');

[
  '20260831_security_hardening.sql',
  '20260831_auth_entitlements.sql',
  '20260831_trial_security.sql',
  '20260901_server_quotas.sql',
  '20260902_messaging_security.sql',
  '202609021900_messaging_followup.sql',
  '202609022030_messaging_blocking_reports.sql',
  '20260902_forum_foundation.sql',
  '202609022200_community_moderation_search.sql'
].forEach((migration) => {
  assert.ok(schema.includes(migration), `schema retirement notice must point to ${migration}`);
  assert.ok(deploy.includes(migration), `deployment runbook must point to ${migration}`);
});

console.log('schema-source-of-truth: legacy executable schema retired; migrations are canonical');
