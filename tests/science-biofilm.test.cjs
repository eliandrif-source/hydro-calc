const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-biofilm.js'), 'utf8');
const context = {
  window: {},
  document: {
    getElementById: () => null,
    createElement: () => ({ className: '', style: {}, innerHTML: '', textContent: '' }),
    createTreeWalker: () => ({ nextNode: () => false })
  },
  NodeFilter: { SHOW_TEXT: 4 },
  console
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename: 'science-biofilm.js' });

const science = context.window.HydroCalcScience;
const trickling = science.tricklingFilterPreSizing;
const biodisc = science.biodiscPreSizing;

assert.equal(typeof trickling, 'function');
assert.equal(typeof biodisc, 'function');

/* 120 kg DBO5/d, Cv 0.5 kg/m3/d, H=3 m => V=240 m3, A=80 m2.
   Q=500 m3/d, recycle R=1 => applied Q=1000 m3/d = 41.6667 m3/h,
   hydraulic loading = 0.520833 m/h. */
const lit = trickling(120, 0.5, 3, 500, 1);
assert.ok(Math.abs(lit.volumeM3 - 240) < 1e-12);
assert.ok(Math.abs(lit.footprintM2 - 80) < 1e-12);
assert.ok(Math.abs(lit.recycleFlowM3Day - 500) < 1e-12);
assert.ok(Math.abs(lit.appliedFlowM3Day - 1000) < 1e-12);
assert.ok(Math.abs(lit.hydraulicLoadingMHour - 0.5208333333333334) < 1e-12);

/* 30 kg DBO5/d at 6 g/m2/d => 5000 m2; 2000 m2/module => 3 modules. */
const bd = biodisc(30, 6, 2000);
assert.ok(Math.abs(bd.requiredAreaM2 - 5000) < 1e-12);
assert.equal(bd.modules, 3);
assert.equal(bd.installedAreaM2, 6000);

assert.throws(() => trickling(0, 0.5, 3, 500, 1), /DBO5/);
assert.throws(() => trickling(120, 0.5, 3, 500, -0.1), /recycle/);
assert.throws(() => biodisc(30, 0, 2000), /surface organic/);

console.log('science-biofilm: trickling filter + biodisc regressions OK');