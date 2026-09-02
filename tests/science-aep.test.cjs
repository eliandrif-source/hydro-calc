const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-aep.js'), 'utf8');
const context = {
  window: {},
  document: {
    getElementById: () => null,
    querySelector: () => null,
    createElement: () => ({
      className: '',
      innerHTML: '',
      parentNode: null,
      closest: () => null
    })
  },
  console
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename: 'science-aep.js' });

const science = context.window.HydroCalcScience;
const hw = science.hazenWilliamsHeadloss;
const pump = science.pumpHeadPower;
const vapor = science.waterVaporPressureBar;
const npsh = science.npshAvailable;

assert.equal(typeof hw, 'function');
assert.equal(typeof pump, 'function');
assert.equal(typeof vapor, 'function');
assert.equal(typeof npsh, 'function');

/* Hazen-Williams: Q=10 L/s, D=150 mm, C=130, L=200 m. */
const r = hw(0.01, 0.15, 130, 200);
assert.ok(Math.abs(r.velocityMs - 0.5658842421045167) < 1e-12);
assert.ok(Math.abs(r.gradient - 0.0026452785778308466) < 1e-12);
assert.ok(Math.abs(r.headlossM - 0.5290557155661693) < 1e-12);
assert.ok(Math.abs(r.headlossPerKmM - 2.6452785778308466) < 1e-12);

/* Pump HMT: 50 m3/h, Hg 15 m, losses 4 m, residual 3 m, eta 70 %. */
const p = pump(50, 15, 4, 3, 0.70, 1000);
assert.equal(p.hmtM, 22);
assert.ok(Math.abs(p.hydraulicPowerKw - 2.9964763888888886) < 1e-12);
assert.ok(Math.abs(p.estimatedInputPowerKw - 4.280680555555556) < 1e-12);

/* NIST Antoine water vapor pressure around 20 °C ~= 0.02337 bar. */
const pv20 = vapor(20);
assert.ok(Math.abs(pv20 - 0.023367271176828124) < 1e-12);

/* Open-tank NPSHa: standard atmosphere, pump 3 m above water, 0.5 m suction losses. */
const n = npsh(3, 0.5, 20, 1.01325, 3, 1, 998.2);
assert.ok(Math.abs(n.atmosphericHeadM - 10.350906159085211) < 1e-12);
assert.ok(Math.abs(n.vaporHeadM - 0.2387095298744086) < 1e-12);
assert.ok(Math.abs(n.npshAvailableM - 6.6121966292108025) < 1e-12);
assert.ok(Math.abs(n.actualMarginM - 3.6121966292108025) < 1e-12);
assert.equal(n.passesDesignMargin, true);

assert.throws(() => hw(0, 0.15, 130, 200), /flow/);
assert.throws(() => hw(0.01, 0, 130, 200), /diameter/);
assert.throws(() => hw(0.01, 0.15, 0, 200), /Hazen-Williams/);
assert.throws(() => pump(50, 15, 4, 3, 1.1, 1000), /efficiency/);
assert.throws(() => vapor(80), /temperature/);
assert.throws(() => npsh(3, -0.1, 20, 1.01325, 3, 1, 998.2), /suction losses/);

console.log('science-aep: Hazen-Williams + HMT + NPSH regressions OK');