const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-lagoon.js'), 'utf8');
const context = {
  window: {},
  document: { getElementById: () => null },
  console
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename: 'science-lagoon.js' });

const fn = context.window.HydroCalcScience.naturalLagoonClassic;
assert.equal(typeof fn, 'function');

const r = fn(500, 1.0);
assert.equal(r.basin1M2, 3000);
assert.equal(r.basin2M2, 1250);
assert.equal(r.basin3M2, 1250);
assert.equal(r.totalAreaM2, 5500);
assert.equal(r.areaPerEhM2, 11);
assert.equal(r.totalVolumeM3, 5500);
assert.ok(Math.abs(r.basinSharesPct[0] - 54.5454545) < 1e-6);
assert.ok(Math.abs(r.basinSharesPct[1] - 22.7272727) < 1e-6);
assert.ok(Math.abs(r.basinSharesPct[2] - 22.7272727) < 1e-6);

assert.throws(() => fn(0, 1), /natural lagoon/);
assert.throws(() => fn(500, 0), /natural lagoon/);

console.log('science-lagoon: classic natural lagoon regression OK');