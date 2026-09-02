const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(ROOT, p));

const requiredMigrations = [
  'supabase/migrations/20260831_security_hardening.sql',
  'supabase/migrations/20260831_auth_entitlements.sql',
  'supabase/migrations/20260831_trial_security.sql',
  'supabase/migrations/20260901_server_quotas.sql',
  'supabase/migrations/20260902_messaging_security.sql',
  'supabase/migrations/202609021900_messaging_followup.sql',
  'supabase/migrations/202609022030_messaging_blocking_reports.sql',
  'supabase/migrations/20260902_forum_foundation.sql',
  'supabase/migrations/202609022200_community_moderation_search.sql'
];
requiredMigrations.forEach((file) => assert.ok(exists(file), `missing production migration: ${file}`));

[
  'supabase/functions/create-checkout-session/index.ts',
  'supabase/functions/create-portal-session/index.ts',
  'supabase/functions/stripe-webhook/index.ts',
  'supabase/functions/delete-user/index.ts'
].forEach((file) => assert.ok(exists(file), `missing edge function: ${file}`));

[
  'docs/DEPLOYMENT_SECURITY.md',
  'docs/PRODUCTION_SMOKE_TESTS.md',
  'supabase/preflight/production_preflight.sql',
  '_headers'
].forEach((file) => assert.ok(exists(file), `missing production runbook asset: ${file}`));

const ignore = read('.gitignore');
assert.match(ignore, /^\.env$/m);
assert.match(ignore, /^\.env\.\*$/m);
assert.match(ignore, /^supabase\/\.temp\/$/m);

const headers = read('_headers');
assert.match(headers, /X-Content-Type-Options:\s*nosniff/i);
assert.match(headers, /Referrer-Policy:\s*strict-origin-when-cross-origin/i);
assert.match(headers, /X-Frame-Options:\s*DENY/i);
assert.match(headers, /frame-ancestors\s+'none'/i);
assert.match(headers, /\/sw\.js[\s\S]*Cache-Control:\s*no-cache, no-store, must-revalidate/i);
assert.match(headers, /\/js\/\*[\s\S]*Cache-Control:\s*no-cache, must-revalidate/i);

const stripeClient = read('js/stripe-client.js');
assert.ok(!/priceId\s*:/.test(stripeClient), 'browser must not send a Stripe Price ID');
assert.ok(!/price_id\s*:/.test(stripeClient), 'browser must not send a Stripe price_id');
assert.match(stripeClient, /body:JSON\.stringify\(\{planId:planId/);

const checkout = read('supabase/functions/create-checkout-session/index.ts');
assert.match(checkout, /PRICE_BY_PLAN|PRODUCTS|PRICE/,
  'checkout function must contain server-side price mapping');
assert.match(checkout, /Authorization/);

const webhook = read('supabase/functions/stripe-webhook/index.ts');
assert.match(webhook, /constructEvent|signature/i, 'webhook must verify Stripe signature');
assert.match(webhook, /is_admin/);

const clientFiles = [
  'HydroCalc_Design_Unifie.html',
  'js/stripe-client.js',
  'js/auth-security.js',
  'js/product-ux-hardening.js',
  'js/report-security.js',
  'js/messaging-security.js',
  'js/forum.js'
];
const clientText = clientFiles.map((file) => `${file}\n${read(file)}`).join('\n');
assert.ok(!/sk_live_[A-Za-z0-9]+/.test(clientText), 'Stripe secret key must never appear in browser code');
assert.ok(!/service_role[^\n]{0,20}["'][A-Za-z0-9._-]{20,}/i.test(clientText), 'Supabase service-role secret must never appear in browser code');

const authBridge = read('js/auth-security.js');
assert.match(authBridge, /_forceAdminIfNeeded/);
assert.match(authBridge, /authRegister/);
assert.match(authBridge, /update_my_profile|claim_access_code|start_my_trial/);

const deploy = read('docs/DEPLOYMENT_SECURITY.md');
requiredMigrations.forEach((file) => {
  const name = path.basename(file);
  assert.ok(deploy.includes(name), `deployment runbook must mention ${name}`);
});

console.log('production-readiness: migrations, edge functions, headers, secret hygiene and deployment package checks OK');
