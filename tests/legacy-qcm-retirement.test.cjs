const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const legacy = path.join(ROOT, 'HydroCalc_QCM_Platform.html');
const redirects = fs.readFileSync(path.join(ROOT, '_redirects'), 'utf8');

assert.equal(fs.existsSync(legacy), false,
  'legacy standalone QCM platform must remain removed: it used browser-only professor accounts and localStorage sessions');
assert.match(redirects, /^\/HydroCalc_QCM_Platform\.html\s+\/HydroCalc_Design_Unifie\.html\s+302!$/m,
  'old .html QCM URL must force-redirect to the secured main application');
assert.match(redirects, /^\/HydroCalc_QCM_Platform\s+\/HydroCalc_Design_Unifie\.html\s+302!$/m,
  'old extensionless QCM URL must force-redirect to the secured main application');

console.log('legacy-qcm-retirement: insecure standalone QCM removed and historical URLs redirected');
