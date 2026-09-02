const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'report-security.js'), 'utf8');
const context = {
  window: {},
  document: { getElementById: () => null, createElement: () => ({}) },
  console,
  Blob: global.Blob,
  URL: global.URL,
  setTimeout,
  Date,
  Number,
  String,
  Object,
  Array,
  Math,
  RegExp
};
context.window.window = context.window;
context.window.AUTH = { user: { plan: 'admin', name: 'Test' } };
vm.createContext(context);
vm.runInContext(source, context, { filename: 'report-security.js' });

const R = context.window.HydroCalcReportSecurity;
assert.ok(R);

assert.equal(R.htmlEscape(`<img src=x onerror="alert(1)">&'`), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;&amp;&#39;');
assert.equal(R.htmlToPlain('Débit<br><b>25 L/s</b>'), 'Débit\n25 L/s');
assert.equal(R.safeDataImage('javascript:alert(1)'), '');
assert.equal(R.safeDataImage('data:image/svg+xml;base64,AAAA'), '');
assert.equal(R.safeDataImage('data:image/png;base64,AAAA'), 'data:image/png;base64,AAAA');

const calc = R.cleanCalc({
  module: '<svg onload=alert(1)>Manning',
  valeur: '<b>Q = 25 L/s</b>',
  detail: 'A < 2<br>V > 1',
  inputs: { q: { label: '<img onerror=1>Débit', value: '25', unit: 'L/s' } },
  date: Date.UTC(2026, 8, 2)
});
assert.equal(calc.value, 'Q = 25 L/s');
assert.match(calc.module, /<svg/); // model keeps text; renderer must escape it
assert.equal(calc.inputs[0].label, '<img onerror=1>Débit');

const model = {
  title: '<script>alert(1)</script> Projet',
  author: 'Jean & Jeanne',
  date: '02 septembre 2026',
  generatedAt: '02/09/2026',
  logo: '',
  calculations: [calc],
  formulas: [{ name:'F<sub>x</sub>', expression:'Q = C × i × A', result:'<img onerror=1>', reference:'ASTEE', date:'02/09/2026' }],
  regulations: [{ name:'Article <1>', reference:'L.211-7', body:'Texte <b>important</b>', date:'02/09/2026' }],
  engine: 'test'
};
const html = R.standaloneHtml(model);
assert.ok(!html.includes('<script>alert(1)</script>'));
assert.ok(html.includes('&lt;script&gt;alert(1)&lt;/script&gt; Projet'));
assert.ok(html.includes('&lt;img onerror=1&gt;'));
assert.ok(!html.includes('var(--'));
assert.ok(html.includes('@page{size:A4'));
assert.ok(html.includes('table-layout:fixed'));
assert.ok(html.includes('break-inside:avoid-page'));

const pdf = R.pdfText('ΔH = ρ × V² / 2 ; θ ≤ 0,047 → OK — test ₅');
assert.ok(pdf.includes('DeltaH'));
assert.ok(pdf.includes('rho x V2 / 2'));
assert.ok(pdf.includes('theta <= 0,047 -> OK - test 5'));
assert.ok(!/[\u{1F000}-\u{1FAFF}]/u.test(pdf));

console.log('report-security: sanitization and layout regressions OK');
