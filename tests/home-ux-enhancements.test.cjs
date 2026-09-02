const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'home-ux-enhancements.js'), 'utf8');
const stripe = fs.readFileSync(path.join(__dirname, '..', 'js', 'stripe-client.js'), 'utf8');

assert.match(source, /data-hc-home-resume|hcHomeResume/);
assert.match(source, /Reprendre/);
assert.match(source, /Mes projets/);
assert.match(source, /window\.renderHome\s*=\s*function/);
assert.match(source, /window\.openProject/);
assert.match(source, /window\._relaunchCalc/);
assert.ok(!source.includes('.innerHTML'), 'recent work renderer must not interpolate saved project/calculation data into HTML');
assert.ok(!source.includes('onclick='), 'recent work renderer must use event listeners');
assert.match(stripe, /hc-home-ux-enhancements/);
assert.match(stripe, /js\/home-ux-enhancements\.js/);

console.log('home-ux-enhancements: recent work resume and DOM-safe rendering regressions OK');
