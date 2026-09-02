const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const product = fs.readFileSync(path.join(__dirname, '..', 'js', 'product-ux-hardening.js'), 'utf8');
const stripe = fs.readFileSync(path.join(__dirname, '..', 'js', 'stripe-client.js'), 'utf8');

assert.match(product, /window\.showEtabPricingModal\s*=\s*function/);
assert.match(product, /window\.etabLaunchCheckout\s*=\s*function/);
assert.match(product, /stripeStartCheckout\(isAnnual \? 'etab_annual' : 'etab'\)/);
assert.ok(!product.includes('etab-qty-input'), 'secure establishment modal must not ask for an unbilled seat quantity');
assert.ok(!product.includes('ETAB_TIERS'), 'client tier pricing must not be checkout authority');
assert.ok(!product.includes('.innerHTML'), 'product UX hardening should use DOM/textContent, not HTML interpolation');
assert.match(product, /jusqu’à 30 codes d’accès/i);
assert.match(product, /certaines fonctions avancées/i);
assert.ok(!product.includes("donne accès à l'ensemble de l'application"));
assert.match(product, /18 modules · 70\+ calculateurs/);
assert.match(product, /statusBar\.style\.display\s*=\s*'none'/);
assert.match(product, /'nav-ac': \['Assain\. coll\.'/);
assert.match(product, /'nav-anc': \['ANC'/);
assert.match(product, /'nav-riv': \['Rivières'/);
assert.match(product, /'nav-gloss': \['Formules'/);

assert.match(stripe, /_disableLegacyClientGateEarly/);
assert.match(stripe, /site-gate/);
assert.match(stripe, /hc-product-ux-hardening/);
assert.match(stripe, /js\/product-ux-hardening\.js/);

console.log('product-ux-hardening: billing, plan copy, legacy gate and primary navigation regressions OK');
