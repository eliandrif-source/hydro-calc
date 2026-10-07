# HydroCalc — Évolutions techniques à prévoir

Document de cadrage pour passer la plateforme QCM d'un fonctionnement local (démonstration) à un service en ligne commercialisable.

Deux chantiers indépendants sont décrits :

1. **Backend temps réel** — pour que les sessions prof/élèves fonctionnent sur des appareils différents.
2. **Système de paiement** — pour encaisser réellement les abonnements.

---

## État actuel

La plateforme stocke toutes ses données dans le `localStorage` du navigateur. Conséquences :

- Les comptes, sessions et résultats ne vivent que dans **un seul navigateur, sur un seul appareil**.
- Une session lancée sur l'ordinateur du professeur **n'est pas visible** sur les tablettes des élèves.
- Les abonnements (Gratuit / Pro / Établissement) sont **simulés** : changer de formule ne fait que modifier une valeur locale, sans aucun paiement.

C'est parfait pour une démonstration ou un usage sur un poste partagé (tableau interactif), mais insuffisant pour un vrai service multi-utilisateurs.

---

## Chantier 1 — Backend temps réel

### Objectif

Permettre qu'un professeur lance une session sur son poste, et que 30 élèves la rejoignent depuis 30 appareils différents, avec un suivi des réponses en direct.

### Solution recommandée : Supabase ou Firebase

Les deux sont des services « backend-as-a-service » : ils fournissent une base de données en ligne, l'authentification et la synchronisation temps réel, sans avoir à gérer un serveur soi-même.

| Critère | Supabase | Firebase (Firestore) |
|---|---|---|
| Base de données | PostgreSQL (SQL classique) | NoSQL (documents) |
| Temps réel | Oui (abonnements live) | Oui (listeners) |
| Authentification incluse | Oui | Oui |
| Offre gratuite | Généreuse (jusqu'à 50 000 utilisateurs actifs/mois) | Généreuse |
| Hébergement | Européen possible (RGPD) | Principalement US/global |
| Prise en main | SQL familier | Spécifique Google |

**Recommandation : Supabase**, principalement pour l'hébergement européen (RGPD, données d'élèves mineurs) et la base SQL plus simple à auditer.

### Données à migrer du localStorage vers la base

| Donnée locale actuelle | Table en base |
|---|---|
| `hc_accounts` (professeurs) | `professeurs` |
| `hc_visitor_accounts` (visiteurs) | `utilisateurs` |
| `hc_global_sessions` (sessions) | `sessions` + `participants` |
| `hc_custom_qcms` (QCM créés) | `qcms` |
| Résultats des élèves | `resultats` |

### Schéma de base proposé (Supabase / PostgreSQL)

```
professeurs       (id, email, nom, etablissement, mot_de_passe_hash, plan, cree_le)
utilisateurs      (id, email, nom, plan, cree_le)
sessions          (id, code, qcm_id, professeur_id, statut, cree_le)
participants      (id, session_id, prenom, nom, rejoint_le, termine, score, reponses_json)
qcms              (id, theme, titre, description, questions_json, auteur_id)
resultats         (id, utilisateur_id, qcm_id, score, date, reponses_json)
abonnements       (id, utilisateur_id, plan, statut, debut, fin, stripe_id)
```

### Fonctionnement temps réel

Le professeur ouvre la vue de session. Au lieu d'un `setInterval` qui relit le `localStorage` toutes les 3 secondes (méthode actuelle), on s'abonne aux changements de la table `participants` :

```javascript
// Remplace le polling localStorage actuel
const canal = supabase
  .channel('session-' + codeSession)
  .on('postgres_changes',
      { event: '*', schema: 'public', table: 'participants',
        filter: 'session_id=eq.' + sessionId },
      (payload) => {
        // Un élève vient de rejoindre ou de répondre
        rafraichirVueSession();
      })
  .subscribe();
```

Quand un élève répond, son appareil écrit dans `participants`, et la vue du professeur se met à jour instantanément — sur tous les appareils.

### Étapes de mise en œuvre

1. Créer un projet Supabase (gratuit pour démarrer), choisir la région Europe.
2. Créer les tables ci-dessus via l'interface SQL.
3. Remplacer dans le code chaque appel `localStorage.getItem/setItem` par un appel à l'API Supabase (`supabase.from('table').select/insert/update`).
4. Remplacer le polling `setInterval` par les abonnements temps réel.
5. Activer les règles de sécurité (Row Level Security) : un professeur ne voit que ses sessions, un élève n'écrit que ses propres réponses.
6. Tester avec plusieurs appareils réels.

**Charge estimée : 4 à 7 jours de développement** pour un développeur connaissant JavaScript.

---

## Chantier 2 — Système de paiement

### Objectif

Encaisser réellement les abonnements Pro (9,90 €/mois) et Établissement (49 €/mois), avec facturation récurrente automatique.

### Solution recommandée : Stripe

Stripe est le standard pour les abonnements en ligne. Il gère les paiements récurrents, les factures, les relances, et le respect des normes bancaires (DSP2, 3D Secure).

### Important : pourquoi un serveur est obligatoire ici

Un paiement **ne peut pas** être traité uniquement depuis la page web (le navigateur). Les clés secrètes Stripe ne doivent jamais être exposées côté client. Il faut une petite partie serveur (quelques fonctions) pour :

- créer une session de paiement,
- recevoir la confirmation de Stripe (webhook),
- activer l'abonnement dans la base.

Si vous avez choisi Supabase au chantier 1, ses **Edge Functions** suffisent — pas besoin d'un serveur séparé.

### Configuration Stripe

1. Créer un compte Stripe (gratuit, commission ~1,5 % + 0,25 € par transaction européenne).
2. Créer deux **produits** avec prix récurrents mensuels :
   - Pro — 9,90 €/mois
   - Établissement — 49,00 €/mois
3. Récupérer les identifiants de prix (`price_xxx`).

### Parcours d'abonnement

```
Utilisateur clique « Choisir Pro »
        ↓
Fonction serveur crée une session Stripe Checkout
        ↓
Redirection vers la page de paiement sécurisée Stripe
        ↓
Paiement réussi → Stripe envoie un webhook au serveur
        ↓
Le serveur active le plan dans la table « abonnements »
        ↓
L'utilisateur revient sur HydroCalc avec son accès Pro
```

### Exemple de fonction serveur (Supabase Edge Function)

```javascript
// Créer une session de paiement
import Stripe from 'stripe';
const stripe = new Stripe(STRIPE_CLE_SECRETE);

Deno.serve(async (req) => {
  const { plan, emailUtilisateur } = await req.json();
  const prix = plan === 'pro' ? 'price_PRO_ID' : 'price_ETAB_ID';

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: prix, quantity: 1 }],
    customer_email: emailUtilisateur,
    success_url: 'https://hydrocalc.fr/succes',
    cancel_url: 'https://hydrocalc.fr/annule',
  });

  return new Response(JSON.stringify({ url: session.url }));
});
```

### Gestion des abonnements

- **Renouvellement** : automatique chaque mois par Stripe.
- **Résiliation** : Stripe fournit un « portail client » prêt à l'emploi où l'utilisateur gère son abonnement.
- **Échec de paiement** : Stripe relance automatiquement et notifie.
- **Synchronisation** : le webhook met à jour le statut dans la base (actif / suspendu / annulé) — c'est cette valeur qui débloque les fonctionnalités dans l'app.

### Cas particulier : licence Établissement

Les établissements scolaires paient rarement par carte en ligne. Prévoir deux options :

1. **Paiement par carte** via Stripe (pour test ou petites structures).
2. **Facturation sur devis / bon de commande** (mandat administratif) — process manuel : vous activez le compte établissement à réception du bon de commande. C'est le mode dominant dans l'Éducation nationale.

### Étapes de mise en œuvre

1. Créer le compte Stripe et les produits.
2. Écrire 2 fonctions serveur : création de session + réception du webhook.
3. Brancher les boutons d'abonnement existants sur la fonction de création de session.
4. Mettre à jour l'activation du plan pour lire le statut réel en base (au lieu de la valeur locale simulée).
5. Activer le portail client Stripe pour la résiliation.
6. Tester en mode « bac à sable » Stripe avant la mise en production.

**Charge estimée : 3 à 5 jours de développement.**

---

## Récapitulatif et ordre conseillé

| Chantier | Dépendance | Charge | Coût récurrent |
|---|---|---|---|
| 1. Backend temps réel | Aucune | 4–7 j | 0 € au départ, puis selon usage |
| 2. Paiement Stripe | Recommandé après le 1 | 3–5 j | ~1,5 % + 0,25 €/transaction |

**Ordre conseillé : d'abord le backend** (chantier 1), car le paiement (chantier 2) s'appuie dessus pour stocker les abonnements et héberger les fonctions serveur.

### Points d'attention RGPD

La plateforme traitera des données d'élèves, potentiellement **mineurs**. À prévoir :

- Hébergement des données en Europe (d'où le choix Supabase région UE).
- Information claire des utilisateurs et consentement.
- Possibilité de suppression des comptes et données.
- Durée de conservation limitée des résultats.
- Pour les établissements : une convention de traitement des données peut être exigée.

---

## Ce qui ne change pas

Tout le contenu pédagogique déjà produit reste valable et réutilisable tel quel :

- les **36 QCM / 720 questions** (stockés en JavaScript, à migrer simplement vers la table `qcms`) ;
- l'interface des trois modes (professeur, élève, visiteur) ;
- la logique de correction et de notation ;
- l'application principale HydroCalc (calculateurs, glossaire, réglementation) qui fonctionne indépendamment.

Les deux chantiers concernent uniquement l'**infrastructure**, pas le contenu ni l'expérience utilisateur visible.
