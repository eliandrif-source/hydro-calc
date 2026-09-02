const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-fishpass.js'), 'utf8');
const context = { window: {}, document: { getElementById: () => null }, console };
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename: 'science-fishpass.js' });

const fn = context.window.HydroCalcScience.poolFishPassHydraulics;
assert.equal(typeof fn, 'function');

const r = fn(2, 0.15, 0.5, 2.5, 1.5, 1, 0.62);
assert.equal(r.numberOfDrops, 14);
assert.ok(Math.abs(r.actualDropM - 0.14285714285714285) < 1e-12);
assert.ok(Math.abs(r.theoreticalVelocityMs - 1.0379876134686221) < 1e-12);
assert.ok(Math.abs(r.poolVolumeM3 - 3.75) < 1e-12);
assert.ok(Math.abs(r.dissipatedPowerW - 700.7142857142857) < 1e-9);
assert.ok(Math.abs(r.volumetricPowerWm3 - 186.85714285714283) < 1e-9);

assert.throws(() => fn(0, 0.15, 0.5, 2.5, 1.5, 1, 0.62), /total head/);
assert.throws(() => fn(2, 0, 0.5, 2.5, 1.5, 1, 0.62), /target drop/);
assert.throws(() => fn(2, 0.15, 0.5, 2.5, 1.5, 1, 2), /coefficient/);

console.log('science-fishpass: hydraulic predesign regression OK');