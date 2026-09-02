/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — PRODUCT / UX HARDENING
   - Removes the obsolete client-side private-test gate.
   - Aligns free-plan copy with actual quotas/features.
   - Replaces misleading per-seat establishment pricing with the
     server-authoritative monthly/annual establishment subscription.
   - Clarifies primary navigation and removes the fake mobile status bar.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  if (window.__HC_PRODUCT_UX_HARDENING_LOADED__) return;
  window.__HC_PRODUCT_UX_HARDENING_LOADED__ = true;

  function node(tag, css, text) {
    var el = document.createElement(tag);
    if (css) el.style.cssText = css;
    if (text !== undefined && text !== null) el.textContent = String(text);
    return el;
  }

  function toast(message) {
    if (typeof window.authToast === 'function') window.authToast(message);
  }

  function removeLegacyGate() {
    var gate = document.getElementById('site-gate');
    if (gate) gate.remove();
    try { localStorage.removeItem('hc_site_gate_ok'); } catch (e) {}
    window._siteGateCheck = function () {
      var g = document.getElementById('site-gate');
      if (g) g.remove();
    };
  }

  function fixRegistrationCopy() {
    var register = document.getElementById('auth-register');
    if (register) {
      var hint = register.querySelector('.auth-hint');
      if (hint) {
        hint.replaceChildren(
          document.createTextNode('En créant un compte, vous acceptez les conditions d’utilisation. '),
          document.createElement('br'),
          document.createTextNode('Le compte Gratuit donne accès aux fonctions gratuites ; certaines fonctions avancées, rapports et services collaboratifs nécessitent un plan éligible.')
        );
      }
      var sub = register.querySelector('.auth-sub');
      if (sub) sub.textContent = 'Créez votre compte gratuit pour utiliser HydroCalc et retrouver vos données. Certaines fonctions avancées sont réservées aux plans Pro et Établissement.';
    }

    var splash = document.getElementById('auth-splash');
    if (splash) {
      var guestButtons = splash.querySelectorAll('button');
      guestButtons.forEach(function (btn) {
        var txt = (btn.textContent || '').replace(/\s+/g, ' ').trim();
        if (/continuer sans compte/i.test(txt)) {
          btn.textContent = 'Découvrir sans compte →';
          btn.title = 'Mode découverte : consultation des contenus ouverts. Un compte gratuit est requis pour lancer un calcul.';
          btn.setAttribute('aria-label', 'Découvrir HydroCalc sans compte, en mode consultation');
        }
      });
    }

    var version = document.querySelector('#auth-splash .auth-version');
    if (version) version.textContent = 'v2.0 · 18 modules · 70+ calculateurs';
  }

  function fixPrimaryNavigation() {
    var statusBar = document.querySelector('.status-bar');
    if (statusBar) {
      statusBar.style.display = 'none';
      statusBar.setAttribute('aria-hidden', 'true');
    }

    var labels = {
      'nav-ac': ['Assain. coll.', 'Assainissement collectif'],
      'nav-anc': ['ANC', 'Assainissement non collectif'],
      'nav-ep': ['Eau potable', 'Eau potable / AEP'],
      'nav-riv': ['Rivières', 'Rivières et milieux aquatiques'],
      'nav-gloss': ['Formules', 'Formules, glossaire et références']
    };
    Object.keys(labels).forEach(function (id) {
      var btn = document.getElementById(id);
      if (!btn) return;
      var lbl = btn.querySelector('.nav-lbl');
      if (lbl) lbl.textContent = labels[id][0];
      btn.title = labels[id][1];
      btn.setAttribute('aria-label', labels[id][1]);
    });

    var nav = document.querySelector('.bottom-nav');
    if (nav) nav.setAttribute('aria-label', 'Navigation principale HydroCalc');
  }

  function billingButton(label, period) {
    var btn = node('button', 'flex:1;padding:10px 12px;border:1.5px solid var(--c-border);border-radius:var(--r-md);font-size:12px;font-weight:800;cursor:pointer;font-family:var(--f-body);transition:all .15s', label);
    btn.type = 'button';
    btn.dataset.period = period;
    btn.addEventListener('click', function () { window.etabSetBilling(period); });
    return btn;
  }

  function refreshBillingButtons() {
    var period = window._etabBilling === 'annual' ? 'annual' : 'monthly';
    document.querySelectorAll('#etab-pricing-modal [data-period]').forEach(function (btn) {
      var active = btn.dataset.period === period;
      btn.style.background = active ? 'var(--c-primary)' : 'var(--c-surface)';
      btn.style.color = active ? '#fff' : 'var(--c-text-2)';
      btn.style.borderColor = active ? 'var(--c-primary)' : 'var(--c-border)';
    });
    var checkout = document.getElementById('etab-checkout-btn');
    if (checkout) checkout.textContent = period === 'annual' ? 'Continuer vers Stripe — annuel →' : 'Continuer vers Stripe — mensuel →';
  }

  window.showEtabPricingModal = function () {
    var existing = document.getElementById('etab-pricing-modal');
    if (existing) existing.remove();
    window._etabBilling = 'monthly';

    var modal = node('div', 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.55);display:flex;align-items:flex-end;justify-content:center;padding:0');
    modal.id = 'etab-pricing-modal';

    var card = node('div', 'background:var(--c-surface);border-radius:var(--r-xl) var(--r-xl) 0 0;width:100%;max-width:480px;padding:var(--s-4);padding-bottom:calc(var(--s-4) + env(safe-area-inset-bottom));max-height:90vh;overflow-y:auto');

    var header = node('div', 'display:flex;align-items:flex-start;gap:12px;margin-bottom:var(--s-3)');
    var titleWrap = node('div', 'flex:1');
    titleWrap.appendChild(node('div', 'font-size:18px;font-weight:800;color:var(--c-text-1)', '🏛️ Abonnement Établissement'));
    titleWrap.appendChild(node('div', 'font-size:11px;color:var(--c-text-3);margin-top:3px;line-height:1.5', 'Un abonnement établissement, jusqu’à 30 codes d’accès à usage unique.'));
    header.appendChild(titleWrap);
    var close = node('button', 'background:none;border:none;font-size:24px;cursor:pointer;color:var(--c-text-3);line-height:1;padding:2px 4px', '×');
    close.type = 'button';
    close.setAttribute('aria-label', 'Fermer');
    close.addEventListener('click', function () { modal.remove(); });
    header.appendChild(close);
    card.appendChild(header);

    var notice = node('div', 'padding:12px 14px;border-radius:var(--r-md);background:var(--c-info-l);border:1px solid var(--c-primary-m);font-size:12px;color:var(--c-text-2);line-height:1.55;margin-bottom:var(--s-3)');
    notice.appendChild(node('div', 'font-weight:800;color:var(--c-primary);margin-bottom:4px', 'Tarification cohérente avec le checkout'));
    notice.appendChild(document.createTextNode('HydroCalc ne calcule plus de faux total par siège dans le navigateur. Le montant final et la périodicité sont affichés par Stripe avant validation du paiement.'));
    card.appendChild(notice);

    var features = node('div', 'display:flex;flex-direction:column;gap:7px;margin-bottom:var(--s-3);font-size:12px;color:var(--c-text-2)');
    ['Jusqu’à 30 codes d’accès élèves/membres', 'Outils pédagogiques et QCM établissement', 'Fonctions collaboratives et rapports selon le plan', 'Gestion de l’abonnement via le portail Stripe'].forEach(function (label) {
      features.appendChild(node('div', 'display:flex;gap:8px;align-items:flex-start', '✓ ' + label));
    });
    card.appendChild(features);

    card.appendChild(node('div', 'font-size:11px;font-weight:800;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:7px', 'Périodicité'));
    var toggle = node('div', 'display:flex;gap:8px;margin-bottom:var(--s-3)');
    toggle.appendChild(billingButton('Mensuel', 'monthly'));
    toggle.appendChild(billingButton('Annuel', 'annual'));
    card.appendChild(toggle);

    var checkout = node('button', 'width:100%;padding:15px;background:var(--c-primary);color:#fff;border:none;border-radius:var(--r-lg);font-size:14px;font-weight:800;cursor:pointer;font-family:var(--f-body)', 'Continuer vers Stripe →');
    checkout.id = 'etab-checkout-btn';
    checkout.type = 'button';
    checkout.addEventListener('click', window.etabLaunchCheckout);
    card.appendChild(checkout);
    card.appendChild(node('div', 'text-align:center;font-size:10px;color:var(--c-text-4);margin-top:8px;line-height:1.45', 'Paiement sécurisé via Stripe. Vérifiez le montant et la périodicité affichés avant validation.'));

    modal.appendChild(card);
    modal.addEventListener('click', function (event) { if (event.target === modal) modal.remove(); });
    document.body.appendChild(modal);
    refreshBillingButtons();
  };

  window.etabSetBilling = function (period) {
    window._etabBilling = period === 'annual' ? 'annual' : 'monthly';
    refreshBillingButtons();
  };

  window.etabQtyChange = function () {};
  window.etabQtyRefresh = function () {};

  window.etabLaunchCheckout = function () {
    var isAnnual = window._etabBilling === 'annual';
    var modal = document.getElementById('etab-pricing-modal');
    if (modal) modal.remove();
    if (typeof window.stripeStartCheckout !== 'function') {
      toast('Paiement indisponible pour le moment');
      return;
    }
    window.stripeStartCheckout(isAnnual ? 'etab_annual' : 'etab');
  };

  removeLegacyGate();
  fixRegistrationCopy();
  fixPrimaryNavigation();
})();