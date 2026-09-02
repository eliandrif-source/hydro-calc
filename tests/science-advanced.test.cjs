const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-advanced.js'), 'utf8');
const context = {
  window: {},
  document: { getElementById: () => null, createElement: () => ({}) },
  console
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename: 'science-advanced.js' });

const science = context.window.HydroCalcScience;
const partial = science.manningPartialCircular;
const hammer = science.waterHammerJoukowsky;

assert.equal(typeof partial, 'function');
assert.equal(typeof hammer, 'function');

// D=300 mm, y=240 mm, K=90, I=3‰.
const p = partial(0.300, 0.240, 90, 3);
assert.ok(Math.abs(p.thetaRad - 4.4285948711763625) < 1e-12, 'segment angle');
assert.ok(Math.abs(p.areaM2 - 0.060621692300734074) < 1e-12, 'wetted area');
assert.ok(Math.abs(p.wettedPerimeterM - 0.6642892306764544) < 1e-12, 'wetted perimeter');
assert.ok(Math.abs(p.hydraulicRadiusM - 0.0912579784546593) < 1e-12, 'hydraulic radius');
assert.ok(Math.abs(p.topWidthM - 0.24) < 1e-12, 'top width');
assert.ok(Math.abs(p.hydraulicDepthM - 0.25259038458639205) < 1e-12, 'hydraulic depth A/T');
assert.ok(Math.abs(p.flowLs - 60.57290774154014) < 1e-9, 'flow L/s');
assert.ok(Math.abs(p.velocityMs - 0.9991952623336227) < 1e-12, 'velocity');
assert.ok(Math.abs(p.froude - 0.6347569364256261) < 1e-12, 'Froude uses A/T');
assert.throws(() => partial(0.3, 0.3, 90, 3), /lower than diameter/);
assert.throws(() => partial(0.3, 0, 90, 3), /depth/);

// L=500 m, ΔV=1.2 m/s, a=400 m/s, static gauge pressure=4 bar, tf=1 s.
const h = hammer(500, 1.2, 400, 4, 1);
assert.ok(Math.abs(h.criticalTimeS - 2.5) < 1e-12, 'critical time 2L/a');
assert.equal(h.rapidClosure, true);
assert.ok(Math.abs(h.deltaHeadM - 48.92966360856269) < 1e-12, 'Joukowsky head rise');
assert.ok(Math.abs(h.deltaPressureBar - 4.8) < 1e-12, 'Joukowsky pressure rise');
assert.ok(Math.abs(h.maxGaugeBar - 8.8) < 1e-12, 'theoretical max gauge pressure');
assert.ok(Math.abs(h.minGaugeBarTheoretical + 0.8) < 1e-12, 'do not clamp theoretical depression to zero');

const slow = hammer(500, 1.2, 400, 4, 3);
assert.equal(slow.rapidClosure, false, 'tf > Tc is not an instantaneous closure');
assert.throws(() => hammer(0, 1, 400, 4, 1), /length/);
assert.throws(() => hammer(500, 1, 0, 4, 1), /wave speed/);
assert.throws(() => hammer(500, 1, 400, 4, 0), /closure time/);

console.log('science-advanced: partial Manning + Joukowsky water-hammer regressions OK');