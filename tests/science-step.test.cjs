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

const fn = context.window.HydroCalcScience.stepMinimumPerformance;
assert.equal(typeof fn, 'function');

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

assert.throws(() => fn(-1), /CBPO/);
assert.throws(() => fn(Number.NaN), /CBPO/);

console.log('science-step: annex 3 regulatory regressions OK');