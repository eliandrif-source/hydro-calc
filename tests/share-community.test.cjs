const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'share-community.js'), 'utf8');

class MO { constructor(cb){ this.cb=cb; } observe(){} disconnect(){} }
const fakeEl = () => ({
  style:{}, dataset:{}, childNodes:[], value:'',
  appendChild(x){this.childNodes.push(x);return x;},
  insertBefore(x){this.childNodes.push(x);return x;},
  addEventListener(){}, querySelector(){return null;}, querySelectorAll(){return [];},
  remove(){}, focus(){}, dispatchEvent(){}, set textContent(v){this._text=v;}, get textContent(){return this._text;}
});
const context = {
  window: { AUTH:{user:{email:'pro@example.test',plan:'pro'}}, FORUM_SALONS:[{id:'hydraulique',label:'Hydraulique'}] },
  document: { createElement:()=>fakeEl(), getElementById:()=>null, querySelectorAll:()=>[], body:fakeEl() },
  console, String, Array, Object, Math, Number, Date, RegExp, URL,
  MutationObserver:MO,
  Event:function(){},
  setTimeout:()=>0,
  clearTimeout:()=>{}
};
context.window.window=context.window;
context.window.document=context.document;
context.window.MutationObserver=MO;
context.DataStore={calcs:{get:()=>[]},projects:{get:()=>[]}};
context.window.DataStore=context.DataStore;
vm.createContext(context);
vm.runInContext(source,context,{filename:'share-community.js'});

const S=context.window.HydroCalcShare;
assert.ok(S);
const calc={
  module:'Manning <script>alert(1)</script>',
  valeur:'61,97 L/s',
  detail:'<b>Q = K S Rh<sup>2/3</sup> I<sup>1/2</sup></b>',
  inputs:{d:{label:'Diamètre',value:'0.30',unit:'m'},k:{label:'Strickler',value:'90',unit:''}}
};
const summary=S.calcSummary(calc);
assert.match(summary,/Résultat : 61,97 L\/s/);
assert.match(summary,/Diamètre : 0.30 m/);
assert.match(summary,/Strickler : 90/);
assert.ok(!summary.includes('<script>'));
assert.ok(!summary.includes('<b>'));
assert.match(summary,/À vérifier selon le contexte du projet/);
assert.ok(!source.includes('.innerHTML'), 'share bridge must stay DOM-only');
assert.match(source,/forum_create_post/);
assert.match(source,/__HC_SHARE_DRAFT__/);
assert.match(source,/data-hc-share-calc|hcShareCalc/);
assert.match(source,/Partager le projet/);

console.log('share-community: text-only summaries and forum/messaging sharing regressions OK');
