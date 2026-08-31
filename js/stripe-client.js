/* ═══════════════════════════════════════════════════
   STRIPE CLIENT — HydroCalc
   Le navigateur ne transmet plus de Price ID ni de niveau d'accès.
   Le mapping prix/abonnement est validé par l'Edge Function Supabase.
═══════════════════════════════════════════════════ */
var STRIPE_PK = 'pk_test_51TnL41RoaEvjU7M7IBgppniueRsxF7t3sQBfJ1OSx5ylq8SPPYSWthquQe7RDCo8IngR1KRRCwU0EHeb4oVGdkYl00e9n0y3dA';

/* Clés d'offres autorisées côté interface (le serveur reste l'autorité). */
var STRIPE_PLANS = {
  pro: true,
  pro_annual: true,
  etab: true,
  etab_annual: true
};

/* URL de base des Edge Functions Supabase */
var SUPABASE_FUNCTIONS_URL = 'https://vbdsqvmgtwsjxckpcosi.supabase.co/functions/v1';

/* ─── Lancer le Stripe Checkout ─── */
function stripeStartCheckout(planId) {
  if (!AUTH.user) { authShow('auth-login'); return; }
  if (!STRIPE_PLANS[planId]) {
    authToast('Offre inconnue');
    return;
  }

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
        successUrl: window.location.origin + window.location.pathname + '?stripe=success',
        cancelUrl:  window.location.origin + window.location.pathname + '?stripe=cancel'
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
        returnUrl: window.location.origin + window.location.pathname
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
        var uid = AUTH._uid || AUTH.user.id;
        if (!uid) return;
        SupaDB.from('profiles').select('*').eq('id', uid).single()
          .then(function(res) {
            if (res.data) {
              AUTH.user.plan = res.data.is_admin === true ? 'admin' : (res.data.plan || 'free');
              AUTH.user.isAdmin = res.data.is_admin === true;
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

/* ─── Charger le pont de sécurité après les scripts historiques ───
   auth.js est encore monolithique. Le bridge est volontairement chargé une
   fois la page terminée afin que ses overrides soient les dernières définitions
   actives, sans devoir réécrire le fichier historique en une seule opération. */
(function _loadAuthSecurityBridge() {
  function loadBridge() {
    if (document.getElementById('hc-auth-security-bridge')) return;
    var script = document.createElement('script');
    script.id = 'hc-auth-security-bridge';
    script.src = 'js/auth-security.js';
    script.async = false;
    document.body.appendChild(script);
  }
  if (document.readyState === 'complete') loadBridge();
  else window.addEventListener('load', loadBridge, { once: true });
})();
