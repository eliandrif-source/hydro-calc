/* ═══════════════════════════════════════════════════
   STRIPE CLIENT — HydroCalc
   Clé publique de test → remplacer par pk_live_ en production
═══════════════════════════════════════════════════ */
var STRIPE_PK = 'pk_test_51TnL41RoaEvjU7M7IBgppniueRsxF7t3sQBfJ1OSx5ylq8SPPYSWthquQe7RDCo8IngR1KRRCwU0EHeb4oVGdkYl00e9n0y3dA';

/* Prix Stripe (créés dans le dashboard Stripe) */
var STRIPE_PRICES = {
  pro:        'price_1TvJoFRoaEvjU7M7PIrHbQND',  /* 5,90 €/mois  */
  pro_annual: 'price_1U3LG0RoaEvjU7M70g6oxsvv',  /* 59 €/an      */
  etab:        'price_1TvJooRoaEvjU7M7Gc57pi1V',  /* 24 €/mois    */
  etab_annual: 'price_1U3LL3RoaEvjU7M7uyHPM9zu'  /* 240 €/an     */
};

/* URL de base des Edge Functions Supabase */
var SUPABASE_FUNCTIONS_URL = 'https://vbdsqvmgtwsjxckpcosi.supabase.co/functions/v1';

/* ─── Lancer le Stripe Checkout ─── */
function stripeStartCheckout(planId, quantity) {
  if (!AUTH.user) { authShow('auth-login'); return; }
  if (!STRIPE_PRICES[planId]) return;
  var qty = Math.max(1, parseInt(quantity) || 1);

  authToast('Redirection vers le paiement sécurisé…');

  SupaDB.auth.getSession().then(function(res) {
    var token = res.data && res.data.session ? res.data.session.access_token : null;
    if (!token) { authToast('Reconnectez-vous pour continuer'); return; }

    fetch(SUPABASE_FUNCTIONS_URL + '/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        planId: planId,
        priceId: STRIPE_PRICES[planId],
        quantity: qty,
        trialDays: 7,
        successUrl: window.location.href.split('?')[0] + '?stripe=success',
        cancelUrl:  window.location.href.split('?')[0] + '?stripe=cancel'
      })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.url) {
        window.location.href = data.url;
      } else {
        authToast('Erreur de paiement : ' + (data.error || 'Réessayez'));
      }
    })
    .catch(function() {
      authToast('Impossible de contacter le serveur de paiement');
    });
  });
}

/* ─── Ouvrir le portail client Stripe (annulation / modification) ─── */
function stripeOpenPortal() {
  if (!AUTH.user) return;

  authToast('Ouverture du portail de gestion…');

  SupaDB.auth.getSession().then(function(res) {
    var token = res.data && res.data.session ? res.data.session.access_token : null;
    if (!token) { authToast('Reconnectez-vous pour continuer'); return; }

    fetch(SUPABASE_FUNCTIONS_URL + '/create-portal-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        returnUrl: window.location.href.split('?')[0]
      })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.url) {
        window.location.href = data.url;
      } else {
        authToast('Erreur : ' + (data.error || 'Réessayez'));
      }
    })
    .catch(function() {
      authToast('Impossible de contacter le serveur de paiement');
    });
  });
}

/* ─── Gérer le retour depuis Stripe Checkout ─── */
(function _handleStripeReturn() {
  var params = new URLSearchParams(window.location.search);
  if (params.get('stripe') === 'success') {
    history.replaceState({}, '', window.location.pathname);
    setTimeout(function() {
      authToast('Paiement confirmé ! Votre abonnement est actif.');
      if (AUTH.user && SupaDB) {
        SupaDB.from('profiles').select('*').eq('email', AUTH.user.email).single()
          .then(function(res) {
            if (res.data) {
              AUTH.user.plan = res.data.plan;
              if (typeof buildProfile === 'function') buildProfile();
            }
          });
      }
    }, 1200);
  } else if (params.get('stripe') === 'cancel') {
    history.replaceState({}, '', window.location.pathname);
    setTimeout(function() { authToast('Paiement annulé.'); }, 800);
  }
})();
