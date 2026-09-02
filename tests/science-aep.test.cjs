const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-aep.js'), 'utf8');
const context = {
  window: {},
  document: { getElementById: () => null },
  console
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename: 'science-aep.js' });

const fn = context.window.HydroCalcScience.hazenWilliamsHeadloss;
assert.equal(typeof fn, 'function');

/* Q=10 L/s, D=150 mm, C=130, L=200 m. */
const r = fn(0.01, 0.15, 130, 200);
assert.ok(Math.abs(r.velocityMs - 0.5658842421045167) < 1e-12);
assert.ok(Math.abs(r.gradient - 0.0026452785778308466) < 1e-12);
assert.ok(Math.abs(r.headlossM - 0.5290557155661693) < 1e-12);
assert.ok(Math.abs(r.headlossPerKmM - 2.6452785778308466) < 1e-12);

assert.throws(() => fn(0, 0.15, 130, 200), /flow/);
assert.throws(() => fn(0.01, 0, 130, 200), /diameter/);
assert.throws(() => fn(0.01, 0.15, 0, 200), /Hazen-Williams/);

console.log('science-aep: Hazen-Williams regression OK');