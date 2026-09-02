/* ═══════════════════════════════════════════════════
   STRIPE CLIENT — HydroCalc
   Le navigateur ne transmet plus de Price ID ni de niveau d'accès.
   Le mapping prix/abonnement est validé par l'Edge Function Supabase.
═══════════════════════════════════════════════════ */
var STRIPE_PK = 'pk_test_51TnL41RoaEvjU7M7IBgppniueRsxF7t3sQBfJ1OSx5ylq8SPPYSWthquQe7RDCo8IngR1KRRCwU0EHeb4oVGdkYl00e9n0y3dA';

var STRIPE_PLANS = { pro:true, pro_annual:true, etab:true, etab_annual:true };
var SUPABASE_FUNCTIONS_URL = 'https://vbdsqvmgtwsjxckpcosi.supabase.co/functions/v1';

/* Le verrou historique était uniquement du JavaScript client et ne constitue pas
   un contrôle d'accès. On le retire dès le chargement de ce script pour éviter
   qu'il bloque/flash l'interface avant le chargement des bridges. */
(function _disableLegacyClientGateEarly(){
  function removeGate(){
    var gate=document.getElementById('site-gate');
    if(gate)gate.remove();
    try{localStorage.removeItem('hc_site_gate_ok');}catch(e){}
    window._siteGateCheck=function(){var g=document.getElementById('site-gate');if(g)g.remove();};
  }
  if(document.readyState==='loading'){
    removeGate();
    document.addEventListener('DOMContentLoaded',removeGate,{once:true});
  }else removeGate();
})();

function stripeStartCheckout(planId) {
  if (!AUTH.user) { authShow('auth-login'); return; }
  if (!STRIPE_PLANS[planId]) { authToast('Offre inconnue'); return; }
  authToast('Redirection vers le paiement sécurisé…');
  SupaDB.auth.getSession().then(function(res) {
    var token = res.data && res.data.session ? res.data.session.access_token : null;
    if (!token) { authToast('Reconnectez-vous pour continuer'); return; }
    fetch(SUPABASE_FUNCTIONS_URL + '/create-checkout-session', {
      method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
      body:JSON.stringify({planId:planId,successUrl:window.location.origin+window.location.pathname+'?stripe=success',cancelUrl:window.location.origin+window.location.pathname+'?stripe=cancel'})
    }).then(function(r){return r.json();}).then(function(data){
      if(data.url) window.location.href=data.url; else authToast('Erreur de paiement : '+(data.error||'Réessayez'));
    }).catch(function(){authToast('Impossible de contacter le serveur de paiement');});
  });
}

function stripeOpenPortal() {
  if (!AUTH.user) return;
  authToast('Ouverture du portail de gestion…');
  SupaDB.auth.getSession().then(function(res) {
    var token=res.data&&res.data.session?res.data.session.access_token:null;
    if(!token){authToast('Reconnectez-vous pour continuer');return;}
    fetch(SUPABASE_FUNCTIONS_URL+'/create-portal-session',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify({returnUrl:window.location.origin+window.location.pathname})})
      .then(function(r){return r.json();}).then(function(data){if(data.url)window.location.href=data.url;else authToast('Erreur : '+(data.error||'Réessayez'));})
      .catch(function(){authToast('Impossible de contacter le serveur de paiement');});
  });
}

(function _handleStripeReturn(){
  var params=new URLSearchParams(window.location.search);
  if(params.get('stripe')==='success'){
    history.replaceState({},'',window.location.pathname);
    setTimeout(function(){
      authToast('Paiement confirmé ! Votre abonnement est actif.');
      if(AUTH.user&&SupaDB){
        var uid=AUTH._uid||AUTH.user.id;if(!uid)return;
        SupaDB.from('profiles').select('*').eq('id',uid).single().then(function(res){
          if(res.data){AUTH.user.plan=res.data.is_admin===true?'admin':(res.data.plan||'free');AUTH.user.isAdmin=res.data.is_admin===true;if(typeof buildProfile==='function')buildProfile();}
        });
      }
    },1200);
  }else if(params.get('stripe')==='cancel'){
    history.replaceState({},'',window.location.pathname);setTimeout(function(){authToast('Paiement annulé.');},800);
  }
})();

(function _loadSecurityBridges(){
  function appendScript(id,src,onload){
    if(document.getElementById(id)){if(onload)onload();return;}
    var script=document.createElement('script');script.id=id;script.src=src;script.async=false;if(onload)script.onload=onload;document.body.appendChild(script);
  }
  function loadBridges(){
    appendScript('hc-auth-security-bridge','js/auth-security.js',function(){
      appendScript('hc-product-ux-hardening','js/product-ux-hardening.js',function(){
        appendScript('hc-home-ux-enhancements','js/home-ux-enhancements.js',function(){
          appendScript('hc-xss-security-bridge','js/xss-security.js',function(){
            appendScript('hc-coffre-security-bridge','js/coffre-security.js',function(){
              appendScript('hc-quota-security-bridge','js/quota-security.js',function(){
                appendScript('hc-report-security-bridge','js/report-security.js',function(){
                  appendScript('hc-report-pdf-fixes','js/report-pdf-fixes.js',function(){
                    appendScript('hc-report-format-fixes','js/report-format-fixes.js',function(){
                      appendScript('hc-messaging-security','js/messaging-security.js',function(){
                        appendScript('hc-messaging-ui-security','js/messaging-ui-security.js',function(){
                          appendScript('hc-messaging-controls','js/messaging-controls.js',function(){
                            appendScript('hc-community-admin','js/community-admin.js',function(){
                              appendScript('hc-forum-enhancements','js/forum-enhancements.js',function(){
                                appendScript('hc-share-community','js/share-community.js',function(){
                                  appendScript('hc-science-core','js/science-core.js',function(){
                                    appendScript('hc-science-advanced','js/science-advanced.js',function(){
                                      appendScript('hc-science-anc','js/science-anc.js',function(){
                                        appendScript('hc-science-step','js/science-step.js',function(){
                                          appendScript('hc-science-lagoon','js/science-lagoon.js',function(){
                                            appendScript('hc-science-biofilm','js/science-biofilm.js',function(){
                                              appendScript('hc-science-aep','js/science-aep.js',function(){
                                                appendScript('hc-science-rivers','js/science-rivers.js',function(){
                                                  appendScript('hc-science-fishpass','js/science-fishpass.js');
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',loadBridges,{once:true});
  else loadBridges();
})();