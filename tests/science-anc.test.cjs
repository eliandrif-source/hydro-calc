const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const coreSource = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-core.js'), 'utf8');
const ancSource = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-anc.js'), 'utf8');

const context = {
  window: {},
  document: {
    getElementById: () => null,
    createTreeWalker: () => ({ nextNode: () => false }),
  },
  NodeFilter: { SHOW_TEXT: 4 },
  MutationObserver: function () { this.observe = function () {}; },
  console,
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(coreSource, context, { filename: 'science-core.js' });
vm.runInContext(ancSource, context, { filename: 'science-anc.js' });

const science = context.window.HydroCalcScience;
assert.equal(typeof science.porchetFromV10, 'function');

const p1 = science.porchetFromV10(1);
assert.ok(Math.abs(p1.permeabilityMmH - 67.9) < 1e-12);
assert.ok(Math.abs(p1.permeabilityMS - (67.9 / 3600000)) < 1e-15);
assert.equal(p1.protocolBoreDiameterMm, 150);
assert.equal(p1.protocolPrewetHours, 4);
assert.equal(p1.protocolMeasureMinutes, 10);

const p02 = science.porchetFromV10(0.2);
assert.ok(Math.abs(p02.permeabilityMmH - 13.58) < 1e-12);
let status = science.ancPermeabilityStatus(p02.permeabilityMmH);
assert.equal(status.soilTreatmentRange, false);
assert.equal(status.treatedWaterInfiltrationRange, true);

const p8 = science.porchetFromV10(8);
status = science.ancPermeabilityStatus(p8.permeabilityMmH);
assert.equal(status.aboveRegulatoryRange, true);

assert.throws(() => science.porchetFromV10(0), /V10/);
assert.throws(() => science.porchetFromV10(-1), /V10/);
assert.throws(() => science.porchetFromV10(Number.NaN), /V10/);

console.log('science-anc: Porchet protocol + ANC regulatory thresholds OK');
