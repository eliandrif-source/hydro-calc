# HydroCalc — Audit Forum & Messagerie

Dernière passe : 2026-09-02

## Conclusion produit

Les deux fonctions méritent d'être conservées, mais elles ne doivent pas jouer le même rôle.

- **Forum : fonctionnalité communautaire principale.** Il capitalise les questions techniques, méthodes, sources et solutions afin qu'une réponse utile reste retrouvable.
- **Messagerie : fonctionnalité privée secondaire.** Elle sert à poursuivre un échange, travailler entre collègues, accompagner un apprenant ou discuter d'un projet précis.

Le différenciateur HydroCalc est la chaîne métier : **question → contexte/données → calcul HydroCalc → hypothèses → réponse → source → solution validée**.

## Forum — état actuel

Le fichier `js/forum.js`, absent du dépôt lors de l'audit initial, a été reconstruit et versionné.

Le forum dispose maintenant de :

- huit salons métier : Hydraulique, AEP, Assainissement collectif, ANC/SPANC, Rivières & GEMAPI, Réglementation, Formation, Terrain & matériel ;
- création de questions et réponses ;
- statut ouvert / résolu / verrouillé / masqué ;
- réponse marquée comme solution par l'auteur de la question ou un administrateur ;
- signalement et modération ;
- limitations anti-spam côté serveur ;
- rendu DOM sûr via `textContent` ;
- recherche **serveur** du titre et du corps ;
- filtres `Tous`, `Ouverts`, `Sans réponse`, `Résolus` ;
- partage direct d'un calcul/projet HydroCalc vers une nouvelle discussion.

Le forum reste volontairement sans pièces jointes dans cette première fondation.

Fichiers principaux : `js/forum.js`, `js/forum-enhancements.js`, `supabase/migrations/20260902_forum_foundation.sql`, `supabase/migrations/202609022200_community_moderation_search.sql`.

## Messagerie — état actuel

### Autorité serveur

Les demandes de contact, créations de fils, envois et compteurs de non-lus passent par RPC serveur :

- `send_friend_request` ;
- `respond_friend_request` ;
- `message_get_or_create_thread` ;
- `message_send` ;
- `message_mark_read`.

Les mutations directes des tables sont retirées au rôle `authenticated`.

### Confidentialité et rendu

La recherche historique exposait `id,name,email`. Le RPC `search_message_members` ne retourne plus que `id` et `name` parmi les membres autorisés à utiliser la messagerie.

Les listes et bulles utilisent maintenant des nœuds DOM, `textContent` et `addEventListener` plutôt que des noms injectés dans des handlers `onclick`.

### Pièces jointes

- bucket `message-attachments` privé ;
- 10 Mo maximum ;
- JPEG, PNG, WebP, PDF, TXT, CSV, DOCX, XLSX ;
- chemins d'objet privés et URLs signées temporaires ;
- lecture réservée aux participants du fil ;
- migration des anciennes URLs publiques stockées en base ;
- pas de vidéo.

### Blocage, signalement et historique

Un membre peut être bloqué/débloqué. Un blocage empêche nouvelle demande de contact, création de fil et nouvel envoi.

Chaque message reçu peut être signalé. L'administrateur ne reçoit via la file de modération **que le message explicitement signalé**, jamais le fil privé complet ni le chemin d'une pièce jointe privée.

L'historique charge les 50 messages les plus récents puis permet de charger les messages précédents en conservant la position de lecture.

Fichiers principaux : `js/messaging-security.js`, `js/messaging-ui-security.js`, `js/messaging-controls.js`, `supabase/migrations/20260902_messaging_security.sql`, `202609021900_messaging_followup.sql`, `202609022030_messaging_blocking_reports.sql`.

## Modération admin

Le Coffre Admin comporte maintenant une file de modération commune forum + messagerie :

- vues À traiter / Traités / Classés / Tous ;
- contenu signalé, motif, auteur et rapporteur ;
- traitement sans masquer ;
- classement sans suite ;
- masquage du contenu signalé + traitement ;
- aucune lecture du reste d'une conversation privée.

Frontend : `js/community-admin.js`.
RPC : `community_admin_reports`, `community_admin_review_report`, `community_admin_hide_reported_target`.

## Partage calcul / projet

`js/share-community.js` ajoute :

- `↗ Partager` sur les calculs enregistrés ;
- `↗ Partager le projet` dans un projet ouvert ;
- résumé texte : module, résultat, entrées, détail/hypothèses et avertissement d'interprétation ;
- publication au forum avec salon, titre et texte modifiables ;
- préparation du même résumé dans la messagerie, modifiable avant envoi.

Le HTML enregistré dans les anciens détails de calcul n'est pas injecté dans le partage : il est converti en texte.

## Reste à faire avant statut production

Priorité haute :

1. appliquer **dans l'ordre** les migrations forum/messagerie/modération sur le projet Supabase réel ;
2. vérifier la compatibilité du schéma réel et résoudre les éventuels doublons détectés par les preflights ;
3. test navigateur à deux comptes : demande, acceptation, message, non-lu, realtime, pièce jointe, URL signée, blocage, signalement et pagination ;
4. test administrateur : signalements forum et privés, masquer, traiter, classer, verrouiller/réouvrir ;
5. test du partage calcul/projet vers forum et messagerie sur mobile + desktop ;
6. définir et publier une politique de conservation/suppression des messages et pièces jointes.

Priorité UX suivante : préférences de notifications, code de conduite communautaire, règles de publication, tags techniques supplémentaires et éventuellement statistiques communautaires sobres.

## Tests

Le workflow GitHub Actions exécute désormais les régressions scientifiques, rapports, messagerie, forum, modération et partage communautaire. La passe incluant le partage et la modération est verte sur `security-hardening`.

## Verdict

**Forum : à conserver et à mettre davantage en avant.** Il devient le lieu où HydroCalc transforme un calcul isolé en connaissance métier vérifiable.

**Messagerie : à conserver volontairement simple.** Elle est désormais mieux protégée et doit rester orientée projet/formation/échange professionnel plutôt que réseau social généraliste.
