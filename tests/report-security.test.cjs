const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

(async function () {
  const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'report-security.js'), 'utf8');
  const fixesSource = fs.readFileSync(path.join(__dirname, '..', 'js', 'report-pdf-fixes.js'), 'utf8');
  const formatsSource = fs.readFileSync(path.join(__dirname, '..', 'js', 'report-format-fixes.js'), 'utf8');
  const downloads = [];
  const buildCalls = [];
  const context = {
    window: {},
    document: {
      getElementById: () => null,
      createElement: () => ({ click() {}, remove() {} }),
      body: { appendChild() {} }
    },
    console,
    Blob: global.Blob,
    URL: global.URL,
    setTimeout,
    clearTimeout,
    Date,
    Number,
    String,
    Object,
    Array,
    Math,
    RegExp,
    Promise
  };
  context.window.window = context.window;
  context.window.AUTH = { user: { plan: 'admin', name: 'Test' } };
  context.AUTH = context.window.AUTH;
  context.window._getSelectedCalcs = () => [{ module: 'Test', valeur: '1', detail: '', inputs: {}, date: Date.now() }];
  context.window._getSelectedFormulas = () => [];
  context.window._getSelectedRegls = () => [];
  context.window._reportHeader = () => ({ projectTitle: 'Projet Test', userName: 'Test', dateStr: '02 septembre 2026' });
  context.window._download = (blob, filename) => downloads.push({ blob, filename });
  context.window._buildODTBlob = (arr, formulas, regls, cb) => { buildCalls.push('odt'); cb(new Blob(['odt'])); };
  context.window._buildDOCXBlob = (arr, formulas, regls, cb) => { buildCalls.push('docx'); cb(new Blob(['docx'])); };
  context.window.hcConsumeUsage = async () => ({ allowed: true, used: 1, limit_value: 1 });
  context.window.authToast = () => {};
  context.authToast = context.window.authToast;

  vm.createContext(context);
  vm.runInContext(source, context, { filename: 'report-security.js' });
  vm.runInContext(fixesSource, context, { filename: 'report-pdf-fixes.js' });
  vm.runInContext(formatsSource, context, { filename: 'report-format-fixes.js' });

  const R = context.window.HydroCalcReportSecurity;
  const F = context.window.HydroCalcReportPdfFixes;
  const RF = context.window.HydroCalcReportFormats;
  assert.ok(R);
  assert.ok(F);
  assert.ok(RF);

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

  const filename = F.reportFilename({ title:'Projet / Réseau AEP : été 2026' });
  assert.match(filename, /^Projet_Réseau_AEP_été_2026_\d{4}-\d{2}-\d{2}\.pdf$/);
  assert.equal(typeof context.window.generatePDFReport, 'function');
  assert.equal(typeof context.window._doGeneratePDFReport, 'function');
  assert.equal(typeof context.window.previewReport, 'function');

  await context.window.previewReport('odt');
  await context.window.previewReport('docx');
  assert.deepEqual(buildCalls, ['odt', 'docx']);
  assert.equal(downloads.length, 2);
  assert.match(downloads[0].filename, /\.odt$/);
  assert.match(downloads[1].filename, /\.docx$/);

  console.log('report-security: sanitization, standalone layout and all format routing regressions OK');
})().catch((err) => { console.error(err); process.exitCode = 1; });
