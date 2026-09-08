# HydroCalc — Smoke tests production

Date de préparation : 2026-09-07

À exécuter après migrations + Edge Functions et avant ouverture publique. Utiliser au minimum trois identités de test : membre A, membre B, administrateur. Aucun test ne doit utiliser un compte réel d'un client.

## Authentification et privilèges

- [ ] A crée un compte : le profil serveur est `free`, `is_admin=false`.
- [ ] A ne peut pas modifier directement son `plan` ni `is_admin` via Supabase client.
- [ ] Un code Établissement valide ne peut être réclamé que par l'utilisateur authentifié.
- [ ] Un code révoqué/utilisé ne peut pas être réutilisé.
- [ ] Réinitialisation du mot de passe refuse moins de 8 caractères côté application.
- [ ] Déconnexion puis reconnexion restaure le plan depuis le serveur.
- [ ] « Découvrir sans compte » permet de parcourir l'application mais un bouton Calculer ouvre l'inscription au lieu d'exécuter le moteur.
- [ ] Un simple paramètre d'URL QCM ne confère aucun plan, rôle ou privilège supplémentaire.
- [ ] `hc_main_accounts` et un ancien remember token non-Supabase ne peuvent pas recréer une identité HydroCalc.

## Quotas

- [ ] Compte free : consommation calcul enregistrée côté serveur.
- [ ] Rechargement/localStorage vidé ne remet pas le quota à zéro.
- [ ] Compte Pro/Admin/Établissement suit les limites prévues.
- [ ] Essai actif est reconnu côté serveur ; essai expiré ne l'est plus.
- [ ] Une action refusée n'est pas contournable par appel direct du frontend historique.
- [ ] Le mode invité ne permet pas de contourner le quota de calcul du compte Gratuit.

## Établissement

- [ ] L'espace Établissement charge les codes depuis Supabase.
- [ ] Créer un code appelle le RPC serveur et le nouveau code apparaît après rechargement.
- [ ] Révoquer un code appelle le RPC serveur et son état est conservé après reconnexion.
- [ ] La clé `etab_codes` est absente de `localStorage` avant et après création/révocation.
- [ ] Modifier manuellement `etab_codes` dans DevTools ne change ni le plan ni les codes réellement valides.
- [ ] Un utilisateur non autorisé ne peut pas créer/révoquer de code par appel RPC direct.
- [ ] Le nombre maximum de codes et la promesse commerciale correspondent au plan Stripe réellement vendu.

## Stripe

- [ ] Checkout Pro mensuel.
- [ ] Checkout Pro annuel.
- [ ] Checkout Établissement selon le modèle commercial finalement validé.
- [ ] Le Price ID effectif est choisi côté serveur.
- [ ] Le navigateur n'embarque ni clé Stripe secrète ni clé publishable de test devenue inutile.
- [ ] Les Edge Functions refusent une origine navigateur hors allowlist.
- [ ] Le webhook active le bon entitlement.
- [ ] Rejouer le même webhook ne duplique pas le paiement.
- [ ] Un événement de facturation ne rétrograde jamais un administrateur.
- [ ] Le portail Stripe refuse un `returnUrl` hors origine autorisée.

## Calculs et rapports

- [ ] Un calcul audité produit le vecteur attendu.
- [ ] Un calcul invalide affiche une erreur sans résultat trompeur.
- [ ] Rapport PDF : nom/projet contenant `<script>` est rendu comme texte.
- [ ] Rapport : formule/réglementation sauvegardée contenant HTML hostile est rendue comme texte.
- [ ] Le logo personnalisé d'un compte A n'apparaît jamais dans le rapport du compte B sur le même navigateur.
- [ ] Quota rapport est contrôlé serveur.
- [ ] Mise en page A4 vérifiée visuellement sur plusieurs pages, notamment avec contenu long et logo large.

## Forum

- [ ] A crée une question ; B la voit.
- [ ] Recherche serveur retrouve un sujet hors première page.
- [ ] Filtres ouvert / sans réponse / résolu fonctionnent.
- [ ] B répond ; A marque la solution.
- [ ] Un contenu masqué n'est plus visible par A/B mais reste modérable par Admin.
- [ ] B signale un contenu ; Admin voit seulement les données nécessaires au traitement.
- [ ] Un non-admin ne peut appeler les RPC admin.

## Messagerie privée

- [ ] A envoie une demande à B ; B accepte.
- [ ] Un seul fil existe pour la paire A/B.
- [ ] A envoie un message ; B reçoit le non-lu et le realtime.
- [ ] A joint un PDF autorisé inférieur à la limite.
- [ ] L'objet Storage n'a pas d'URL publique exploitable.
- [ ] Un compte C ne peut lire ni le fil ni la pièce jointe A/B.
- [ ] B bloque A ; A ne peut plus envoyer de nouveau message.
- [ ] B voit A dans sa propre zone « Utilisateurs bloqués » ; A et C ne peuvent pas consulter cette liste.
- [ ] B débloque A ; la liste est mise à jour et le contact redevient possible si aucune autre restriction ne l'empêche.
- [ ] B signale un message exact ; Admin voit ce message signalé mais pas l'historique complet du fil.
- [ ] Le signalement crée une notification admin persistante et le badge en attente est mis à jour.
- [ ] Admin traite le signalement ; le statut est mis à jour et une seconde décision sur le même dossier est refusée.
- [ ] Une suspension/bannissement bloque les nouvelles écritures communautaires sans supprimer le compte ou ses projets.
- [ ] Admin peut lever une sanction et cette levée est auditée.

## Partage HydroCalc

- [ ] Partager un calcul vers le forum préremplit un résumé texte exploitable.
- [ ] Partager un projet liste correctement ses calculs.
- [ ] Partager vers messagerie préremplit le message sans l'envoyer automatiquement.
- [ ] Du HTML hostile présent dans un calcul sauvegardé ne devient jamais du HTML actif lors du partage.

## Coffre Admin

- [ ] Accessible uniquement à l'administrateur serveur.
- [ ] Annuaire et paiements s'affichent sans `innerHTML` utilisateur dangereux.
- [ ] Changement de plan autorisé utilise le RPC admin.
- [ ] Suppression d'un utilisateur non-admin fonctionne via Edge Function.
- [ ] Auto-suppression admin refusée.
- [ ] Suppression d'un autre admin refusée.
- [ ] File de modération forum + messagerie fonctionne.

## Hébergement et en-têtes HTTP

- [ ] `X-Content-Type-Options: nosniff` est présent sur la page principale.
- [ ] `Referrer-Policy: strict-origin-when-cross-origin` est présent.
- [ ] HydroCalc ne peut pas être intégré dans une iframe externe (`X-Frame-Options: DENY` / `frame-ancestors 'none'`).
- [ ] La CSP réellement servie limite `script-src`, `style-src` et `font-src` aux hôtes inventoriés.
- [ ] `sw.js` est servi avec `Cache-Control: no-cache, no-store, must-revalidate`.
- [ ] Les fichiers `/js/*` sont servis avec revalidation et ne restent pas figés par le CDN d'hébergement.
- [ ] L'ancienne URL `HydroCalc_QCM_Platform.html` redirige vers l'application principale et aucun fichier legacy n'est servi.

## Mobile / PWA

- [ ] Navigation principale utilisable sur largeur téléphone.
- [ ] Formulaires calculateurs sans débordement horizontal.
- [ ] Forum et messagerie restent utilisables au clavier mobile.
- [ ] Installation PWA et lancement standalone.
- [ ] Le service worker actif est `hydrocalc-v307-security-20260907`.
- [ ] Mise à jour du service worker ne conserve pas une ancienne version incompatible des bridges.
- [ ] Lors d'un nouveau `controllerchange`, la page se recharge une seule fois et n'entre pas dans une boucle de reload.
- [ ] Après mise à jour, les caches antérieurs à v307 ont disparu de Cache Storage.
- [ ] Hors ligne, aucune réponse Supabase/Stripe/API d'un utilisateur précédent n'est accessible depuis Cache Storage.

## Critère final

Un seul échec de confidentialité inter-utilisateurs, d'élévation de privilège, de webhook non vérifié, d'autorité commerciale restaurable depuis `localStorage` ou de calcul scientifique critique implique **NO-GO** jusqu'à correction et nouveau passage complet des tests concernés.
