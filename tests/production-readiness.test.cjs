const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(ROOT, p));

const requiredMigrations = [
  'supabase/migrations/20260830_baseline_schema.sql',
  'supabase/migrations/20260831_security_hardening.sql',
  'supabase/migrations/202608310100_auth_entitlements.sql',
  'supabase/migrations/202608310200_trial_security.sql',
  'supabase/migrations/20260901_server_quotas.sql',
  'supabase/migrations/20260902_forum_foundation.sql',
  'supabase/migrations/202609020100_messaging_security.sql',
  'supabase/migrations/202609021900_messaging_followup.sql',
  'supabase/migrations/202609022030_messaging_blocking_reports.sql',
  'supabase/migrations/202609022200_community_moderation_search.sql',
  'supabase/migrations/202609072130_community_integrity.sql',
  'supabase/migrations/202609072131_messaging_realtime_authorization.sql',
  'supabase/migrations/202609072200_admin_moderation_workflow.sql',
  'supabase/migrations/202609072201_sanction_enforcement.sql',
  'supabase/migrations/202609072202_profiles_admin_rls_recursion_fix.sql',
  'supabase/migrations/202609072203_moderation_privacy_notifications.sql',
  'supabase/migrations/202609072204_security_definer_search_path_hardening.sql'
];
requiredMigrations.forEach((file) => assert.ok(exists(file), `missing production migration: ${file}`));

[
  'supabase/functions/create-checkout-session/index.ts',
  'supabase/functions/create-portal-session/index.ts',
  'supabase/functions/stripe-webhook/index.ts',
  'supabase/functions/delete-user/index.ts'
].forEach((file) => assert.ok(exists(file), `missing edge function: ${file}`));

[
  'docs/DEPLOYMENT_SECURITY.md','docs/PRODUCTION_SMOKE_TESTS.md','docs/DEPENDENCY_SECURITY.md',
  'docs/SUPABASE_ENVIRONMENTS.md','supabase/preflight/production_preflight.sql','SECURITY.md',
  '.github/PULL_REQUEST_TEMPLATE.md','_headers'
].forEach((file) => assert.ok(exists(file), `missing production/governance asset: ${file}`));

assert.equal(exists('HydroCalc_QCM_Platform.html'), false,'insecure legacy standalone QCM platform must remain retired');
const redirects = read('_redirects');
assert.match(redirects, /HydroCalc_QCM_Platform\.html\s+\/HydroCalc_Design_Unifie\.html\s+302!/);

const ignore = read('.gitignore');
assert.match(ignore, /^\.env$/m); assert.match(ignore, /^\.env\.\*$/m); assert.match(ignore, /^supabase\/\.temp\/$/m);

const headers = read('_headers');
assert.match(headers, /X-Content-Type-Options:\s*nosniff/i); assert.match(headers, /Referrer-Policy:\s*strict-origin-when-cross-origin/i);
assert.match(headers, /X-Frame-Options:\s*DENY/i); assert.match(headers, /frame-ancestors\s+'none'/i);
assert.match(headers, /script-src\s+'self'\s+'unsafe-inline'/i); assert.match(headers, /style-src\s+'self'\s+'unsafe-inline'\s+https:\/\/fonts\.googleapis\.com/i);
assert.match(headers, /font-src\s+'self'\s+https:\/\/fonts\.gstatic\.com\s+data:/i);
assert.match(headers, /\/sw\.js[\s\S]*Cache-Control:\s*no-cache, no-store, must-revalidate/i);
assert.match(headers, /\/js\/\*[\s\S]*Cache-Control:\s*no-cache, must-revalidate/i);
assert.ok(!headers.includes('/HydroCalc_QCM_Platform.html'));

const stripeClient = read('js/stripe-client.js');
assert.ok(!/priceId\s*:/.test(stripeClient)); assert.ok(!/price_id\s*:/.test(stripeClient)); assert.ok(!/pk_test_[A-Za-z0-9]+/.test(stripeClient));
assert.match(stripeClient, /body:JSON\.stringify\(\{planId:planId/);
const checkout = read('supabase/functions/create-checkout-session/index.ts');
assert.match(checkout, /PRICE_BY_PLAN|PRODUCTS|PRICE/); assert.match(checkout, /Authorization/); assert.match(checkout, /https:\/\/hydrocalc\.fr/); assert.match(checkout, /https:\/\/www\.hydrocalc\.fr/);
const portal = read('supabase/functions/create-portal-session/index.ts'); assert.match(portal, /https:\/\/hydrocalc\.fr/); assert.match(portal, /Origine de retour non autorisée/);
const webhook = read('supabase/functions/stripe-webhook/index.ts'); assert.match(webhook, /constructEvent|signature/i); assert.match(webhook, /is_admin/);

const clientFiles=['HydroCalc_Design_Unifie.html','js/stripe-client.js','js/auth-security.js','js/product-ux-hardening.js','js/report-security.js','js/messaging-security.js','js/forum.js'];
const clientText=clientFiles.map((file)=>`${file}\n${read(file)}`).join('\n');
assert.ok(!/sk_live_[A-Za-z0-9]+/.test(clientText)); assert.ok(!/service_role[^\n]{0,20}["'][A-Za-z0-9._-]{20,}/i.test(clientText));

const dataStore=read('js/data-store.js');
assert.match(dataStore,/accounts:\s*\{[\s\S]*getAll:\s*function\(\)\s*\{\s*return \{\};\s*\}/); assert.match(dataStore,/activeUserKey\('hc_user_logo_'\)/);
const authBridge=read('js/auth-security.js');
assert.match(authBridge,/_forceAdminIfNeeded/); assert.match(authBridge,/authRegister/); assert.match(authBridge,/update_my_profile|claim_access_code|start_my_trial/);
assert.match(authBridge,/localStorage\.removeItem\('etab_codes'\)/); assert.match(authBridge,/rpc\('create_access_code'\)/); assert.match(authBridge,/rpc\('revoke_access_code'/);

const definerHardening=read('supabase/migrations/202609072204_security_definer_search_path_hardening.sql');
[
  'message_is_blocked_pair','message_block_user','message_report_private','message_admin_review_report',
  'send_friend_request','message_get_or_create_thread','message_send','moderation_pending_count',
  'moderation_get_report','messaging_user_sanctioned','moderation_assert_can_participate','moderation_guard_community_write'
].forEach((fn)=>assert.match(definerHardening,new RegExp(`alter function public\\.${fn}[^;]+set search_path = ''`,'i')));
assert.match(definerHardening,/revoke all on function public\.moderation_guard_community_write\(\) from public, anon, authenticated/i);

const sw=read('sw.js'); assert.match(sw,/hydrocalc-v307-security-20260907/);
const deploy=read('docs/DEPLOYMENT_SECURITY.md');
requiredMigrations.forEach((file)=>{const name=path.basename(file);assert.ok(deploy.includes(name),`deployment runbook must mention ${name}`);});
assert.match(deploy,/hydrocalc-v307-security-20260907/); assert.match(deploy,/etab_codes/); assert.match(deploy,/Allow public access/); assert.match(deploy,/messages:<thread_uuid>/);
const smoke=read('docs/PRODUCTION_SMOKE_TESTS.md'); assert.match(smoke,/hydrocalc-v307-security-20260907/); assert.match(smoke,/etab_codes/);
const environments=read('docs/SUPABASE_ENVIRONMENTS.md');
assert.match(environments,/staging\s*→\s*production/i); assert.match(environments,/supabase db push --dry-run/); assert.match(environments,/Ne jamais utiliser `--include-seed` sur production/i);
assert.match(environments,/db reset --linked[\s\S]*interdit sur production/i); assert.match(environments,/STAGING_PROJECT_ID/); assert.match(environments,/PRODUCTION_PROJECT_ID/); assert.match(environments,/sb_publishable_/); assert.match(environments,/sb_secret_/);

console.log('production-readiness: migrations, governance, RLS/RPC hardening, realtime isolation, community integrity, CSP, v307 PWA, staging, Stripe and secret hygiene checks OK');
