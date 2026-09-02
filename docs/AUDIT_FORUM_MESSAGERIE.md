# HydroCalc — Audit Forum & Messagerie

Dernière passe : 2026-09-02

## Conclusion produit

Les deux fonctions méritent d'être conservées, mais elles ne doivent pas jouer le même rôle.

- **Forum : fonctionnalité communautaire principale.** Il doit capitaliser les questions techniques, méthodes, sources et solutions afin qu'une réponse utile reste retrouvable par tous les membres.
- **Messagerie : fonctionnalité privée secondaire.** Elle doit servir à poursuivre un échange, travailler entre collègues, accompagner un apprenant ou discuter d'un projet précis. Elle ne doit pas devenir un réseau social généraliste.

Le meilleur différenciateur pour HydroCalc n'est pas un chat de plus, mais une chaîne métier : **question → contexte/données → calcul HydroCalc → hypothèses → réponse → source → solution validée**.

## Situation trouvée

### Forum

Le HTML chargeait `js/forum.js` et `showModule('forum')` appelait `renderForum()`, mais le fichier `js/forum.js` n'était pas présent dans le dépôt. Un déploiement propre pouvait donc aboutir à un module forum cassé ou dépendre d'un ancien cache navigateur.

Le forum a été reconstruit et versionné avec :

- huit salons métier : Hydraulique, AEP, Assainissement collectif, ANC/SPANC, Rivières & GEMAPI, Réglementation, Formation, Terrain & matériel ;
- création de questions et réponses ;
- statut ouvert / résolu / verrouillé / masqué ;
- réponse marquée comme solution par l'auteur de la question ou un administrateur ;
- signalement ;
- modération admin ;
- limitations anti-spam côté serveur ;
- rendu DOM via `textContent` pour les contenus utilisateur ;
- aucune pièce jointe dans cette première fondation, volontairement.

Migration : `supabase/migrations/20260902_forum_foundation.sql`.
Frontend : `js/forum.js`.
Tests : `tests/forum-security.test.cjs`.

## Messagerie — points positifs de l'ancienne UX

L'interface historique avait plusieurs bonnes idées :

- panneau conversations + panneau discussion proche des usages WhatsApp/Teams ;
- adaptation mobile par bascule liste/conversation ;
- non-lus par conversation ;
- demandes de contact avant messagerie ;
- temps réel Supabase ;
- possibilité de joindre un fichier ;
- accès rapide au forum depuis la messagerie.

Ces éléments donnent une base UX pertinente et ne justifient pas une réécriture visuelle totale.

## Messagerie — problèmes corrigés

### Autorité client excessive

Les demandes de contact, créations de fils, envois et compteurs de non-lus reposaient largement sur des écritures directes du navigateur. Des RPC serveur sont maintenant l'autorité pour :

- `send_friend_request` ;
- `respond_friend_request` ;
- `message_get_or_create_thread` ;
- `message_send` ;
- `message_mark_read`.

Les tables restent lisibles seulement dans le périmètre autorisé par RLS et les mutations directes sont retirées au rôle `authenticated`.

### Confidentialité de l'annuaire

La recherche historique sélectionnait `id,name,email` et permettait la recherche par e-mail. Le RPC `search_message_members` ne retourne désormais que `id` et `name`, et uniquement parmi les membres pouvant utiliser la messagerie.

### XSS / handlers inline

Les noms de membres étaient incorporés dans des attributs `onclick`. Le nouveau renderer de listes `js/messaging-ui-security.js` construit les éléments avec `createElement`, `textContent` et `addEventListener`.

Les bulles de messages et pièces jointes sont également rendues via DOM dans `js/messaging-security.js`.

### Pièces jointes

L'ancien système :

- acceptait jusqu'à 50 Mo ;
- acceptait notamment de la vidéo ;
- utilisait `getPublicUrl()` sur le bucket de messagerie.

Le nouveau système :

- bucket `message-attachments` privé ;
- 10 Mo maximum ;
- JPEG, PNG, WebP, PDF, TXT, CSV, DOCX, XLSX ;
- chemin d'objet rattaché au préfixe de l'émetteur ;
- lecture autorisée seulement à un participant du fil ;
- URLs signées temporaires côté client ;
- migration des anciennes URLs publiques stockées en base vers des chemins d'objet.

### Anti-spam

Les publications forum sont limitées côté serveur. Les nouvelles demandes de contact sont également limitées sur 24 h.

### Blocage et signalement privé

Le blocage d'un membre est maintenant stocké côté serveur. Un blocage dans un sens ou dans l'autre empêche une nouvelle demande de contact, la création d'un fil et l'envoi de nouveaux messages. Le membre qui bloque peut ensuite le débloquer depuis la conversation.

Chaque message reçu dispose aussi d'une action **Signaler**. Le signalement enregistre le message exact et le motif, avec une contrainte d'un signalement actif par utilisateur/message. Les signalements sont lisibles par leur auteur ou un administrateur et disposent d'un RPC de traitement admin.

Migration : `supabase/migrations/202609022030_messaging_blocking_reports.sql`.
Frontend : `js/messaging-controls.js`.

## Architecture recommandée

### Forum

Le forum doit évoluer vers des discussions techniquement structurées plutôt que vers des conversations sociales génériques. À terme, une question devrait pouvoir référencer :

- domaine ;
- calculateur HydroCalc ;
- projet/dossier ;
- données d'entrée principales ;
- résultat ;
- hypothèses ;
- source technique/réglementaire ;
- statut résolu ;
- solution acceptée.

### Messagerie

La messagerie devrait permettre principalement :

- « partager ce calcul avec… » ;
- « discuter de ce projet avec… » ;
- échange formateur/apprenant ;
- échange professionnel après une discussion forum ;
- transmission privée d'un document de travail raisonnable.

Elle ne doit pas chercher à reproduire WhatsApp, Discord ou Slack au complet.

## Reste à faire avant statut production

Priorité haute :

1. appliquer et tester les migrations forum/messagerie sur Supabase ;
2. vérifier la compatibilité du schéma réel existant avec les contraintes/indices de la migration ;
3. test navigateur à deux comptes distincts : demande, acceptation, message, non-lu, realtime, pièce jointe, URL signée, blocage et signalement ;
4. test admin du forum : verrouillage, masquage et solution ;
5. tester l'écran/flux admin de traitement des signalements privés ;
6. définir une politique de conservation/suppression des messages et pièces jointes.

Priorité UX suivante :

- pagination ou chargement progressif au-delà de 100 messages ;
- recherche serveur du forum ;
- tags et filtres « résolu / sans réponse » ;
- écran admin des signalements ;
- préférence de notifications ;
- lien direct « partager un calcul/projet » vers forum ou messagerie ;
- code de conduite communautaire et règles de publication.

## Verdict

**Forum : à conserver et à mettre davantage en avant.** La version retrouvée dans le dépôt était techniquement cassée ; la nouvelle fondation correspond beaucoup mieux à la vocation métier d'HydroCalc.

**Messagerie : à conserver, mais à maintenir volontairement simple.** Son interface de base est pertinente ; son problème principal était la sécurité et l'autorité client, pas le concept visuel. Les prochains investissements doivent maintenant aller vers contexte projet/calcul, pagination, notifications et outils de modération plutôt que vers des fonctions sociales supplémentaires.
