const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-rivers.js'), 'utf8');
const context = { window: {}, document: { getElementById: () => null }, console };
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename: 'science-rivers.js' });

const sci = context.window.HydroCalcScience;
assert.equal(typeof sci.shieldsIncipientMotion, 'function');
assert.equal(typeof sci.langelierSaturationIndex, 'function');

/* Shields: tau=15 Pa, d=20 mm, quartz-like rho_s=2650 kg/m3. */
const sh = sci.shieldsIncipientMotion(15, 0.02, 2650, 1000, 0.047);
assert.ok(Math.abs(sh.shields - 0.04633490872022982) < 1e-12);
assert.ok(Math.abs(sh.criticalShearPa - 15.21531) < 1e-10);
assert.equal(sh.incipientMotionExceeded, false);
assert.ok(sh.mobilityRatio < 1);

const sh2 = sci.shieldsIncipientMotion(16, 0.02, 2650, 1000, 0.047);
assert.equal(sh2.incipientMotionExceeded, true);
assert.throws(() => sci.shieldsIncipientMotion(-1, 0.02, 2650, 1000, 0.047), /bed shear/);
assert.throws(() => sci.shieldsIncipientMotion(10, 0, 2650, 1000, 0.047), /grain diameter/);

/* EPA-style LSI example vector. */
const lsi = sci.langelierSaturationIndex(7.4, 15, 300, 150, 100);
assert.ok(Math.abs(lsi.pHs - 7.954391427015176) < 1e-12);
assert.ok(Math.abs(lsi.lsi - (-0.554391427015176)) < 1e-12);
assert.ok(lsi.lsi < 0);
assert.throws(() => sci.langelierSaturationIndex(7.4, 15, 0, 150, 100), /TDS/);
assert.throws(() => sci.langelierSaturationIndex(7.4, 15, 300, 0, 100), /calcium hardness/);

console.log('science-rivers: Shields and Langelier regressions OK');