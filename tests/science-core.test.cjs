const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'science-core.js'), 'utf8');

const context = {
  window: {},
  document: { getElementById: () => null, createElement: () => ({ style: {}, textContent: '' }) },
  console
};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(source, context, { filename: 'science-core.js' });

const science = context.window.HydroCalcScience;
const manning = science.manningFullPipe;
const fte = science.fteSizing;

assert.equal(typeof manning, 'function');
assert.equal(typeof fte, 'function');

const result = manning(0.300, 90, 3);
assert.ok(Math.abs(result.areaM2 - 0.0706858347) < 1e-9, 'full-pipe area');
assert.ok(Math.abs(result.hydraulicRadiusM - 0.075) < 1e-12, 'hydraulic radius D/4');
assert.ok(Math.abs(result.velocityMs - 0.876685814) < 1e-8, 'Manning velocity');
assert.ok(Math.abs(result.flowM3s - 0.061969269) < 1e-8, 'flow m3/s');
assert.ok(Math.abs(result.flowLs - 61.969269) < 1e-6, 'flow L/s');
assert.throws(() => manning(0, 90, 3), /diameter/);
assert.throws(() => manning(0.3, 0, 3), /Strickler/);
assert.throws(() => manning(0.3, 90, 0), /slope/);

assert.deepEqual(
  JSON.parse(JSON.stringify(fte(5))),
  { mainRooms: 5, equivalentInhabitants: 5, volumeM3: 3, volumeLitres: 3000 }
);
assert.equal(fte(6).volumeM3, 4);
assert.equal(fte(8).volumeM3, 6);
assert.equal(fte(8).equivalentInhabitants, 8);
assert.throws(() => fte(0), /main rooms/);
assert.throws(() => fte(4.5), /main rooms/);

console.log('science-core: Manning-Strickler + FTE regressions OK');