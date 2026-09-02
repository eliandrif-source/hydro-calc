const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-step.js'), 'utf8');

const context = {
  window: {},
  document: {
    getElementById: () => null,
    createTreeWalker: () => ({ nextNode: () => false }),
    createElement: () => ({
      style: {},
      appendChild() {},
      querySelector() { return null; },
      querySelectorAll() { return []; },
      innerHTML: '',
      textContent: ''
    })
  },
  NodeFilter: { SHOW_TEXT: 4 },
  console
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename: 'science-step.js' });

const science = context.window.HydroCalcScience;
const fn = science.stepMinimumPerformance;
const fpr = science.fprPrefeasibility;
const ba = science.activatedSludgePrefeasibility;
const clarifier = science.clarifierHydraulicSizing;
assert.equal(typeof fn, 'function');
assert.equal(typeof fpr, 'function');
assert.equal(typeof ba, 'function');
assert.equal(typeof clarifier, 'function');

const below = fn(1.19);
assert.equal(below.annex3Applies, false);

const low = fn(60);
assert.equal(low.annex3Applies, true);
assert.deepEqual(JSON.parse(JSON.stringify(low.dbo5)), {
  maxMgL: 35,
  minRemovalPct: 60,
  redhibitoryMgL: 70
});
assert.deepEqual(JSON.parse(JSON.stringify(low.dco)), {
  maxMgL: 200,
  minRemovalPct: 60,
  redhibitoryMgL: 400
});
assert.equal(low.mes.maxMgL, null);
assert.equal(low.mes.minRemovalPct, 50);
assert.equal(low.mes.redhibitoryMgL, 85);
assert.equal(low.mes.optionalForPerformanceCompliance, true);

const high = fn(120);
assert.deepEqual(JSON.parse(JSON.stringify(high.dbo5)), {
  maxMgL: 25,
  minRemovalPct: 80,
  redhibitoryMgL: 50
});
assert.deepEqual(JSON.parse(JSON.stringify(high.dco)), {
  maxMgL: 125,
  minRemovalPct: 75,
  redhibitoryMgL: 250
});
assert.equal(high.mes.maxMgL, 35);
assert.equal(high.mes.minRemovalPct, 90);
assert.equal(high.mes.redhibitoryMgL, 85);

const fprCase = fpr(200, 60, 70, 50, 0.15, 20);
assert.ok(Math.abs(fprCase.verticalAreaOrganicM2 - 171.4285714) < 1e-6);
assert.ok(Math.abs(fprCase.verticalAreaHydraulicM2 - 333.3333333) < 1e-6);
assert.ok(Math.abs(fprCase.verticalAreaM2 - 333.3333333) < 1e-6);
assert.equal(fprCase.firstStageCasings, 3);
assert.ok(Math.abs(fprCase.verticalAreaPerCasingM2 - 111.1111111) < 1e-6);
assert.ok(Math.abs(fprCase.horizontalAreaM2 - 600) < 1e-9);

const baCase = ba(5000, 60, 0.15, 3.5, 1250, 100, 1.0, 0.8, 30);
assert.ok(Math.abs(baCase.dbo5KgDay - 300) < 1e-9);
assert.ok(Math.abs(baCase.biomassMvsKg - 2000) < 1e-9);
assert.ok(Math.abs(baCase.aerationVolumeM3 - 571.4285714) < 1e-6);
assert.ok(Math.abs(baCase.avgFlowM3H - 52.0833333) < 1e-6);
assert.equal(baCase.peakFlowM3H, 100);
assert.ok(Math.abs(baCase.clarifierAreaM2 - 100) < 1e-9);
assert.ok(Math.abs(baCase.sludgeProductionKgMsDay - 240) < 1e-9);
assert.ok(Math.abs(baCase.extractedSludgeM3Day - 8) < 1e-9);

const clarCase = clarifier(60, 120, 1.2, 3.5);
assert.ok(Math.abs(clarCase.areaM2 - 100) < 1e-9);
assert.ok(Math.abs(clarCase.volumeM3 - 350) < 1e-9);
assert.ok(Math.abs(clarCase.detentionAtMeanH - (350 / 60)) < 1e-9);
assert.ok(Math.abs(clarCase.detentionAtPeakH - (350 / 120)) < 1e-9);

assert.throws(() => fn(-1), /CBPO/);
assert.throws(() => fn(Number.NaN), /CBPO/);
assert.throws(() => fpr(0, 60, 70, 50, 0.15, 20), /FPR/);
assert.throws(() => fpr(200, 60, 70, 0, 0.15, 20), /FPR/);
assert.throws(() => ba(5000, 60, 0.15, 3.5, 1250, 0, 1, 0.8, 30), /activated sludge/);
assert.throws(() => clarifier(60, 0, 1.2, 3.5), /clarifier/);

console.log('science-step: annex 3 + FPR + activated sludge + clarifier regressions OK');