# Idées et demandes futures

## Sidebar rétractable + abonnements (priorité haute)
Barre latérale gauche rétractable avec bouton abonnement intégré.
- Affiche les 3 plans avec tableau de comparaison
- Plans :
  - **Gratuit** : avec publicité, accès limité (restrictions à définir)
  - **Pro** : sans pub, 5,90 €/mois, accès limité (restrictions à définir)
  - **Établissement** : 35 €/mois ou 190 €/an, tout illimité
- Étape suivante : définir les restrictions de chaque plan avec l'utilisateur
- Paiement Stripe prévu à l'étape 4 du cahier des charges

## Période d'essai gratuite 7 jours (priorité haute)
- À chaque nouvelle inscription, afficher un message pop-up proposant 7 jours d'essai gratuit et illimité
- Le même message apparaît dans l'onglet "Abonnement" de la sidebar tant que l'essai n'est pas activé
- Quand l'utilisateur clique "Démarrer mon essai", le message disparaît et le plan passe en "trial" (accès illimité) pendant 7 jours
- Après 7 jours, retour automatique au plan Gratuit avec message d'expiration
- Ne s'affiche qu'une seule fois par compte (stocké en localStorage)

## Tableau de bord admin "Coffre" (étape 4)
Onglet visible uniquement pour l'administrateur (eliandrif@gmail.com).
- Revenus du mois / de l'année
- Liste des abonnés actifs (Pro + Établissement)
- Historique des paiements reçus
- Statistiques : nombre d'utilisateurs par plan
- Données récupérées depuis Stripe (pas stockées dans l'app)
- Nécessite Stripe + Supabase (étapes 3 et 4)

## Rapports de calculs PDF (priorité haute)
- Supprimer le bouton 🖨️ imprimante du top bar
- Ajouter un bouton "📄 Télécharger en PDF" dans l'historique des calculs sauvegardés
- Permettre de créer un rapport : sélectionner plusieurs calculs sauvegardés, générer un PDF mis en page (logo HydroCalc, date, résultats, formules)
- Restrictions par plan :
  - Gratuit : pas de rapport PDF
  - Pro : rapports PDF illimités
  - Établissement : rapports PDF illimités
- Technologie : bibliothèque jsPDF (gratuite, côté client, pas de serveur)
- À implémenter après organisation générale de l'UI

## Onglet "Cours" (priorité haute)
Ajouter un onglet "Cours" bien visible dans la navigation principale.
- Permettre de choisir sa formation (BTS GEMEAU, Licence pro, etc.)
- Accès rapide aux QCM correspondants (depuis HydroCalc_QCM_Platform.html)
- Accès aux fiches de révision
- À traiter en étape 5 du cahier des charges
