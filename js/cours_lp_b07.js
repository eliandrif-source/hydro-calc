var LP_EAU_B07 = {

'LP-EAU-053': {
  fiche: {
    intro: 'La stratégie de maintenance détermine comment prévenir, détecter et corriger les défaillances des équipements d\'un service d\'eau. Choisir la bonne politique de maintenance suppose de hiérarchiser les équipements selon leur criticité, leurs modes de défaillance et les conséquences d\'un arrêt. Ce chapitre développe les méthodes AMDEC, ABC, TPM et MBF appliquées aux installations hydrauliques.',
    sections: [
      {
        titre: 'A. Situation professionnelle et objectifs',
        texte: '<p>Sur le Territoire des Trois Rivières, le responsable technique du service eau potable constate une augmentation de 18 % des interventions correctives en deux ans. La moitié des arrêts de pompage dépassent 4 heures. Il doit revoir la politique de maintenance pour réduire les pannes critiques sans augmenter les coûts de personnel.</p><p>Objectifs : identifier et hiérarchiser les équipements selon leur criticité, choisir la politique de maintenance adaptée à chaque équipement, construire un plan de maintenance annuel et mesurer son efficacité.</p>'
      },
      {
        titre: 'B. Ce chapitre approfondit par rapport au BTS/BTSA',
        texte: '<p>Au niveau BTS/BTSA, vous avez appris à effectuer des rondes de surveillance, à renseigner un bon d\'intervention et à réaliser des opérations de maintenance de premier niveau. Dans ce chapitre, vous passez à la conception de la politique de maintenance : quels équipements surveiller en priorité, avec quelle méthode, et selon quels critères décider d\'une intervention préventive plutôt que corrective.</p><p>La différence essentielle est le passage de <em>l\'exécution guidée</em> à <em>la décision argumentée</em> : vous devez justifier vos choix par une analyse formalisée et les défendre face aux contraintes budgétaires.</p>'
      },
      {
        titre: 'C. Rappel ciblé',
        texte: '<p>Une <strong>défaillance</strong> est l\'arrêt ou la dégradation d\'une fonction d\'un équipement. On distingue la défaillance <em>soudaine</em> (rupture) de la défaillance <em>progressive</em> (usure, encrassement). La <strong>MTBF</strong> (Mean Time Between Failures) mesure le temps moyen entre deux défaillances ; la <strong>MTTR</strong> (Mean Time To Repair) mesure le temps moyen de réparation. La <strong>disponibilité</strong> D = MTBF / (MTBF + MTTR) est le principal indicateur de fiabilité opérationnelle.</p>'
      },
      {
        titre: 'D. Notions et mécanismes',
        texte: '<p><strong>Analyse ABC (Pareto) :</strong> classe les équipements en trois catégories selon leur contribution aux coûts ou aux temps d\'arrêt. Les équipements A (20 % des références, 80 % des coûts) appellent une attention prioritaire. Cette analyse rapide permet d\'orienter les ressources de maintenance sans AMDEC complète.</p><p><strong>AMDEC (Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité) :</strong> pour chaque équipement, on recense les modes de défaillance possibles, on évalue leur probabilité d\'occurrence (O), leur gravité (G) et leur probabilité de non-détection (D). L\'indice de criticité C = O × G × D guide la priorisation des actions.</p><p><strong>TPM (Total Productive Maintenance) :</strong> implique les opérateurs dans la maintenance de base (nettoyage, lubrification, contrôle visuel) pour détecter précocement les anomalies. Réduit le nombre d\'interventions non planifiées.</p><p><strong>MBF (Maintenance Basée sur la Fiabilité) :</strong> analyse les fonctions de l\'équipement et leurs modes de défaillance critiques pour définir la stratégie la plus efficace : préventive systématique, conditionnelle ou corrective acceptée. Chaque décision doit être justifiée par l\'analyse des conséquences.</p><p><strong>Politiques de maintenance possibles :</strong> corrective (intervention après panne), préventive systématique (remplacement à intervalles fixes), préventive conditionnelle (intervention selon état mesuré), prédictive (anticipation par analyse de tendances). Le choix dépend du rapport coût de défaillance / coût de prévention et de la criticité sur le service.</p>'
      },
      {
        titre: 'E. Méthodes professionnelles',
        texte: '<p><strong>Démarche de hiérarchisation en 4 étapes :</strong></p><ol><li><strong>Inventaire fonctionnel :</strong> liste des équipements avec leur fonction principale, leur redondance éventuelle et leur impact en cas de défaillance (arrêt service, risque sanitaire, surcoût).</li><li><strong>Analyse ABC :</strong> classer par coût de défaillance annuel (pièces + main-d\'œuvre + pénalités) pour identifier les équipements A prioritaires.</li><li><strong>AMDEC simplifiée :</strong> pour les équipements A, recenser les 3 à 5 modes de défaillance principaux, noter O, G, D (1 à 10), calculer C = O×G×D, classer et définir les actions correctives pour C > seuil fixé (souvent 100).</li><li><strong>Affectation des politiques :</strong> équipements A critique → préventive conditionnelle ou systématique. Équipements B → préventive systématique allégée. Équipements C → corrective acceptée avec stock de pièces.</li></ol><p><strong>Indicateurs de suivi :</strong> taux de panne (nb pannes/mois), taux de réalisation du préventif (% gammes effectuées / prévues), coût de maintenance rapporté au coût de remplacement (taux CIL), disponibilité des équipements critiques.</p>'
      },
      {
        titre: 'F. Formules et exemples résolus',
        texte: '<p><strong>Disponibilité opérationnelle :</strong><br><code>D = MTBF / (MTBF + MTTR)</code><br>Exemple : pompe de surpression, MTBF = 2 100 h, MTTR = 6 h → D = 2 100 / 2 106 = <strong>0,997 (99,7 %)</strong></p><p><strong>Indice de criticité AMDEC :</strong><br><code>C = O × G × D</code><br>Exemple : joint d\'étanchéité de pompe. O = 5 (défaillance régulière), G = 7 (arrêt pompe, impact service), D = 4 (détectable par fuite visible). C = 5 × 7 × 4 = <strong>140</strong> → supérieur au seuil 100, action préventive conditionnelle requise.</p><p><strong>Coût global d\'une politique de maintenance :</strong><br><code>CT = Ccorr + Cprev + Cindispo</code><br>CT = coût total annuel, Ccorr = coût des pannes (pièces + MO + urgence), Cprev = coût du préventif, Cindispo = coût de l\'indisponibilité (pénalités, production perdue). L\'optimum est le minimum de CT.</p>'
      },
      {
        titre: 'G. Dysfonctionnements et limites',
        texte: '<p><strong>Pièges courants :</strong> confondre criticité AMDEC et fréquence de panne — un équipement rare mais catastrophique (G = 10) peut avoir C élevé même avec O faible. Ne pas réviser l\'AMDEC après modification de l\'équipement ou changement de contexte opérationnel. Sous-estimer le coût réel de l\'indisponibilité (pénalités contractuelles, plaintes usagers, astreintes).</p><p><strong>Limites des méthodes :</strong> L\'AMDEC repose sur l\'expertise de l\'équipe ; les notations O, G, D sont subjectives et doivent être validées collectivement. La TPM nécessite une culture d\'entreprise adaptée — difficile à mettre en place sans formation des opérateurs. La maintenance prédictive (vibrations, thermographie) nécessite des investissements en capteurs et en logiciels d\'analyse qui se justifient uniquement pour les équipements critiques.</p>'
      },
      {
        titre: 'H. Fiche de révision',
        texte: '<p><strong>À retenir :</strong> ABC pour hiérarchiser rapidement → AMDEC pour analyser les équipements A → politique de maintenance selon criticité et rapport coût/bénéfice. MTBF et MTTR mesurent la fiabilité. C = O×G×D (seuil typique 100). La MBF justifie chaque choix par les conséquences de la défaillance.</p><p><strong>Points de vigilance :</strong> réviser l\'AMDEC après tout changement matériel. Inclure le coût de l\'indisponibilité dans l\'arbitrage. Associer les opérateurs à la démarche TPM. Ne pas confondre disponibilité (ratio temps) et fiabilité (probabilité de bon fonctionnement).</p>'
      }
    ],
    points: [
      'Analyse ABC : 20 % des équipements concentrent 80 % des coûts de maintenance',
      'AMDEC : C = O × G × D — seuil d\'action souvent fixé à 100',
      'MBF : justifie chaque politique de maintenance par les conséquences de la défaillance',
      'Disponibilité D = MTBF / (MTBF + MTTR)',
      'TPM : implication des opérateurs dans la maintenance de premier niveau',
      'Coût total = coûts correctifs + coûts préventifs + coûts d\'indisponibilité',
      'Politique corrective acceptable uniquement si coût de défaillance < coût de prévention et criticité faible',
      'Indicateurs clés : taux de panne, taux de réalisation du préventif, disponibilité'
    ],
    formules: [
      'D = MTBF / (MTBF + MTTR) — disponibilité opérationnelle (sans unité)',
      'C = O × G × D — indice de criticité AMDEC (O, G, D de 1 à 10)',
      'CT = Ccorr + Cprev + Cindispo — coût total annuel de maintenance (€/an)'
    ],
    retenir: 'La stratégie de maintenance commence par la hiérarchisation ABC et l\'AMDEC pour cibler les équipements critiques. La politique choisie (corrective, préventive systématique, conditionnelle) se justifie par l\'analyse des conséquences et le coût global, pas uniquement par la fréquence des pannes passées.'
  },
  exercices: [
    { n: 1, enonce: 'Une pompe présente MTBF = 1 800 h et MTTR = 8 h. Calculer sa disponibilité. Comparer à une pompe redondante dont chaque unité a MTBF = 1 800 h et MTTR = 2 h (réparation rapide grâce à une pièce en stock).', solution: '<strong>Pompe seule :</strong> D = 1800/(1800+8) = 1800/1808 = <strong>0,9956 (99,56 %)</strong><br><strong>Pompe redondante (système parallèle) :</strong> Dindispo unitaire = 1 − 0,9989 = 0,0011. Dindispo système = 0,0011² = 0,0000012. Disponibilité système ≈ <strong>0,9999988 (99,9999 %)</strong>. La redondance améliore radicalement la disponibilité pour les équipements critiques.' },
    { n: 2, enonce: 'Réaliser une AMDEC simplifiée pour le clapet anti-retour d\'un poste de refoulement. Modes de défaillance possibles : (1) reste bloqué ouvert, (2) reste bloqué fermé, (3) fuite lente. Proposer des notes O, G, D et des actions.', solution: '<strong>(1) Bloqué ouvert :</strong> O=4, G=8 (retour d\'eau, risque de désamorçage), D=6 (difficile à détecter sans mesure) → C=192. Action : inspection annuelle, contrôle de pression différentielle.<br><strong>(2) Bloqué fermé :</strong> O=3, G=9 (arrêt total du refoulement), D=2 (alarme débit nul) → C=54. Action : corrective acceptable avec détection rapide.<br><strong>(3) Fuite lente :</strong> O=6, G=4, D=5 → C=120. Action : inspection semestrielle.' },
    { n: 3, enonce: 'Le service des Trois Rivières dépense 42 000 €/an en maintenance corrective pour 3 pompes principales. Une politique préventive conditionnelle (analyse vibrations trimestrielle + remplacement préventif des roulements) coûterait 18 000 €/an. L\'indisponibilité actuelle engendre 15 000 €/an de coûts (astreintes, eau non distribuée). Comparer les deux politiques.', solution: '<strong>Politique actuelle :</strong> CT = 42 000 + 0 + 15 000 = <strong>57 000 €/an</strong><br><strong>Politique conditionnelle :</strong> Le préventif réduit les pannes de 70 % → corrective résiduelle ≈ 42 000 × 0,30 = 12 600. Indisponibilité résiduelle ≈ 15 000 × 0,30 = 4 500. CT = 12 600 + 18 000 + 4 500 = <strong>35 100 €/an</strong>. Économie : 21 900 €/an. La politique conditionnelle est rentable, avec retour sur investissement inférieur à 1 an.' },
    { n: 4, enonce: 'Expliquer la différence entre maintenance préventive systématique et maintenance conditionnelle, en donnant un exemple pour chaque type d\'équipement rencontré dans un service d\'eau potable.', solution: '<strong>Systématique :</strong> remplacement ou révision à intervalles fixes (ex. : vidange et remplacement joints d\'un compteur toutes les 10 000 h, indépendamment de l\'état). Avantage : simple à planifier. Inconvénient : peut remplacer des pièces encore en bon état ou laisser passer une dégradation rapide.<br><strong>Conditionnelle :</strong> intervention déclenchée par un indicateur d\'état (ex. : remplacement roulements de pompe quand vibration dépasse 4,5 mm/s RMS). Avantage : utilise les pièces jusqu\'à leur fin de vie réelle. Inconvénient : nécessite des capteurs et de l\'analyse.' },
    { n: 5, enonce: 'Qu\'est-ce que le taux CIL (Coût d\'Intervention Lié) et quelle valeur indique qu\'il faut envisager le remplacement d\'une pompe plutôt que sa réparation ?', solution: 'Le taux CIL = Dépenses de maintenance cumulées / Coût de remplacement neuf × 100 (%). Un taux CIL supérieur à <strong>50-60 %</strong> indique que la pompe a consommé la moitié ou plus de sa valeur en maintenance. Au-delà, il est généralement plus économique de remplacer l\'équipement qu\'de continuer à le réparer. Ce seuil doit être adapté selon le contexte (pièces disponibles, durée de vie résiduelle estimée).' },
    { n: 6, enonce: 'Dans le cadre de la démarche TPM, quelles tâches de maintenance de premier niveau peuvent être confiées aux agents d\'exploitation d\'une station de pompage ? Quelles précautions préalables sont nécessaires ?', solution: '<strong>Tâches de premier niveau (agents d\'exploitation) :</strong> nettoyage extérieur des pompes et armoires électriques, lubrification des paliers selon plan, contrôle visuel des fuites et de l\'état des joints, lecture et enregistrement des paramètres (pression, débit, ampérage), serrage des boulons accessibles, remplacement des filtres à air.<br><strong>Précautions :</strong> formation initiale à chaque tâche, vérification de l\'absence de risque électrique ou mécanique, procédures écrites, supervision par le technicien de maintenance lors des premières réalisations, traçabilité dans le GMAO.' }
  ],
  flashcards: [
    { q: 'Que signifie AMDEC et quelle est la formule de criticité ?', r: 'Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité. C = O × G × D (Occurrence × Gravité × Détectabilité)', expl: 'Chaque facteur est noté de 1 à 10. Un indice C > 100 justifie généralement une action préventive. L\'AMDEC doit être réalisée en équipe pluridisciplinaire.' },
    { q: 'Quelle est la formule de la disponibilité opérationnelle ?', r: 'D = MTBF / (MTBF + MTTR). MTBF = temps moyen entre pannes, MTTR = temps moyen de réparation', expl: 'D proche de 1 indique un équipement très fiable et/ou rapidement réparable. La disponibilité est améliorée soit en augmentant la MTBF (meilleure maintenance préventive), soit en réduisant la MTTR (stock de pièces, procédures de réparation).' },
    { q: 'Dans quelle situation la maintenance corrective est-elle acceptable ?', r: 'Quand le coût de la défaillance (pièces + MO + indisponibilité) est inférieur au coût du préventif, et que la criticité est faible (pas de risque sanitaire, équipement redondant)', expl: 'La corrective acceptée ne signifie pas l\'absence de surveillance : un stock de pièces de rechange et une procédure d\'intervention rapide restent nécessaires.' },
    { q: 'Qu\'est-ce que la MBF (Maintenance Basée sur la Fiabilité) ?', r: 'Méthode qui analyse les fonctions des équipements et leurs modes de défaillance pour choisir la politique de maintenance la plus efficace selon les conséquences réelles des défaillances', expl: 'La MBF évite le préventif systématique inutile et la corrective dangereuse. Elle s\'applique en priorité aux équipements critiques pour la sécurité ou la continuité de service.' }
  ]
},

'LP-EAU-054': {
  fiche: {
    intro: 'Le diagnostic des défaillances mécaniques et hydrauliques des pompes et équipements connexes repose sur l\'analyse de symptômes mesurables : vibrations anormales, bruit, échauffement, pertes de débit, cavitation. Identifier la cause réelle d\'une défaillance — plutôt que d\'en traiter les symptômes — permet d\'éviter la récidive et d\'optimiser les interventions de maintenance.',
    sections: [
      {
        titre: 'A. Situation professionnelle et objectifs',
        texte: '<p>Au poste de pompage principal des Trois Rivières, une pompe de transfert AEP présente depuis 3 semaines un bruit sourd intermittent et une légère diminution du débit refoulé. La température du palier avant a augmenté de 8 °C. Un arrêt non planifié serait critique (service sans redondance jusqu\'à la mise en service de la pompe de secours prévue dans 2 mois). Objectif : diagnostiquer la cause, estimer l\'urgence d\'intervention et proposer un plan d\'action.</p>'
      },
      {
        titre: 'B. Ce chapitre approfondit par rapport au BTS/BTSA',
        texte: '<p>Au niveau BTS/BTSA, vous avez appris à lire les caractéristiques d\'une pompe, à vérifier le point de fonctionnement et à reconnaître les signes d\'alarme évidents (température excessive, débit nul). Ce chapitre vous amène à <em>raisonner sur les causes profondes</em> à partir de mesures quantitatives : analyser un spectre de vibrations, interpréter une courbe de débit en fonction du temps, utiliser l\'analyse d\'huile et décider de l\'urgence d\'une intervention sur la base d\'un arbre des causes.</p>'
      },
      {
        titre: 'C. Rappel ciblé',
        texte: '<p>La <strong>cavitation</strong> se produit quand la pression en un point du circuit tombe en dessous de la pression de vapeur saturante du fluide. Des bulles de vapeur se forment et s\'effondrent violemment, générant bruit, vibrations et érosion. Elle est caractérisée par le <strong>NPSHr</strong> (Net Positive Suction Head requis) et le <strong>NPSHd</strong> (disponible). La condition de non-cavitation est NPSHd > NPSHr + marge de sécurité (souvent 0,5 m). La <strong>courbe H(Q)</strong> d\'une pompe est modifiée par l\'usure : la hauteur et le débit diminuent.</p>'
      },
      {
        titre: 'D. Notions et mécanismes',
        texte: '<p><strong>Vibrations :</strong> toute pompe tourne génère des vibrations dont le spectre fréquentiel est caractéristique. La norme ISO 10816 définit des seuils par classe de machine. L\'analyse spectrale identifie la source : fréquence de rotation (balourd), fréquence de passage des aubes (Nf × nombre d\'aubes), harmoniques (désalignement), hautes fréquences (roulements défectueux). Un accéléromètre positionné sur le palier mesure la vitesse vibratoire en mm/s RMS.</p><p><strong>Désalignement :</strong> défaut entre l\'axe moteur et l\'axe de la pompe. Génère des vibrations à 1× et 2× la fréquence de rotation, et une usure prématurée des accouplements et des roulements. Se détecte par mesure laser ou par comparateur. Se corrige par cales sous le moteur.</p><p><strong>Balourd :</strong> défaut d\'équilibrage du rotor. Génère une vibration à exactement 1× la fréquence de rotation. Se corrige par équilibrage dynamique (meulage ou ajout de masse).</p><p><strong>Usure des roulements :</strong> génère des vibrations à haute fréquence (pics à des fréquences caractéristiques des défauts : BPFI, BPFO, BSF). L\'analyse d\'huile révèle la présence de particules métalliques. L\'échauffement du palier est un signe tardif.</p><p><strong>Cavitation :</strong> bruit de gravier, vibrations aléatoires haute fréquence, érosion des aubes. Peut être due à un niveau de bâche trop bas, une perte de charge en aspiration excessive, une vitesse de rotation trop élevée ou un fluide trop chaud.</p><p><strong>Colmatage ou érosion des aubes :</strong> décalage de la courbe H(Q) vers les bas débits ou les faibles hauteurs. Se détecte par comparaison des mesures de débit et de pression avec la courbe d\'origine cataloguée.</p>'
      },
      {
        titre: 'E. Méthodes professionnelles',
        texte: '<p><strong>Arbre des causes pour le diagnostic pompe :</strong></p><ol><li>Mesurer et enregistrer : débit, pression aspiration/refoulement, ampérage, température paliers, vibrations (si capteur disponible).</li><li>Comparer aux valeurs de référence (mise en service) ou aux seuils constructeur.</li><li>Identifier le symptôme principal : perte de performance, bruit anormal, échauffement, vibrations.</li><li>Remonter aux causes possibles via l\'arbre de défaillance :  perte de débit → usure aubes OU colmatage OU cavitation OU recirculation interne. Bruit sourd → cavitation OU roulement OU corps étranger. Échauffement palier → lubrification insuffisante OU roulement usé OU surcharge radiale (désalignement).</li><li>Confirmer la cause par un test discriminant (augmenter le niveau en aspiration pour éliminer la cavitation, mesure laser pour le désalignement).</li><li>Décider : intervention urgente (défaillance imminente) ou programmée (dégradation lente).</li></ol>'
      },
      {
        titre: 'F. Formules et exemples résolus',
        texte: '<p><strong>NPSHd disponible :</strong><br><code>NPSHd = (Pa − Pv) / (ρ·g) + z − Hasp</code><br>Pa = pression atmosphérique (Pa abs), Pv = pression de vapeur saturante (Pa), ρ = masse volumique (kg/m³), z = hauteur statique d\'aspiration (m, négatif si aspiration en charge), Hasp = pertes de charge en aspiration (m).<br>Exemple : T = 20 °C, Pv = 2 338 Pa, Pa = 101 325 Pa, z = −3 m (aspiration 3 m sous le plan d\'eau), Hasp = 1,2 m.<br>NPSHd = (101 325 − 2 338)/(1 000 × 9,81) + 3 − 1,2 = 10,09 + 3 − 1,2 = <strong>11,89 m</strong>. Si NPSHr = 4 m → marge = 7,89 m : pas de risque de cavitation dans ces conditions.</p><p><strong>Vitesse vibratoire RMS et seuils ISO 10816 :</strong><br>Groupe 2 (pompes centrifuges ≤ 15 kW) : bon état &lt; 2,3 mm/s, acceptable 2,3–4,5 mm/s, mauvais 4,5–7,1 mm/s, dangereux > 7,1 mm/s. Une mesure de 5,2 mm/s indique un état mauvais → intervention programmée à court terme.</p>'
      },
      {
        titre: 'G. Dysfonctionnements et limites',
        texte: '<p><strong>Erreurs d\'interprétation fréquentes :</strong> confondre vibration d\'origine hydraulique (instabilité de débit) et vibration mécanique (roulement, balourd). La mesure sans analyse spectrale ne permet pas de distinguer les causes. Prendre une seule mesure ponctuelle sans comparaison temporelle ne donne pas la tendance.</p><p><strong>Limites du diagnostic terrain sans équipement spécialisé :</strong> sans analyseur de spectre, le diagnostic reste présumptif. L\'analyse d\'huile (ferrographie) permet de détecter l\'usure des roulements avant tout symptôme sonore ou thermique, mais nécessite un laboratoire ou un kit d\'analyse dédié. La thermographie infrarouge (détection d\'échauffements anormaux) est très efficace mais coûteuse.</p>'
      },
      {
        titre: 'H. Fiche de révision',
        texte: '<p><strong>Symptômes / causes :</strong> bruit de gravier → cavitation (vérifier NPSHd > NPSHr). Vibration 1× rotation → balourd. Vibration 2× rotation → désalignement. Haute fréquence → roulement. Perte de débit → usure aubes ou colmatage. Échauffement palier → lubrification ou roulement.<br><strong>Outils :</strong> analyse vibratoire (accéléromètre + spectre), mesure laser (désalignement), thermographie, analyse d\'huile, comparaison courbe H(Q) cataloguée.</p>'
      }
    ],
    points: [
      'NPSHd > NPSHr + marge (0,5 m min) : condition nécessaire pour éviter la cavitation',
      'Vibration 1× rotation = balourd ; 2× rotation = désalignement ; HF = roulement',
      'Seuils ISO 10816 Gr.2 : bon < 2,3 mm/s, acceptable < 4,5, mauvais < 7,1, dangereux > 7,1 mm/s',
      'Diagnostic = mesurer + comparer aux valeurs de référence + identifier symptôme + remonter aux causes',
      'Désalignement : corriger par mesure laser et cales ; balourd : équilibrage dynamique',
      'Cavitation : augmenter NPSHd (réduire hauteur aspiration, pertes de charge) ou réduire vitesse',
      'Analyse d\'huile : détecte l\'usure des roulements avant les symptômes mécaniques'
    ],
    formules: [
      'NPSHd = (Pa − Pv)/(ρ·g) + z − Hasp (en m)',
      'Condition anti-cavitation : NPSHd > NPSHr + 0,5 m',
      'Vitesse vibratoire RMS (mm/s) — seuils ISO 10816 selon classe machine'
    ],
    retenir: 'Le diagnostic d\'une défaillance pompe repose sur la mesure et la comparaison aux références, pas uniquement sur l\'écoute. L\'analyse spectrale des vibrations identifie la nature du défaut. La cavitation est diagnostiquée par comparaison NPSHd/NPSHr. Remonter systématiquement aux causes profondes évite les récidives.'
  },
  exercices: [
    { n: 1, enonce: 'Une pompe aspire en charge : plan d\'eau à +1,5 m au-dessus de l\'axe pompe, pertes de charge aspiration = 0,8 m, T = 25 °C (Pv = 3 167 Pa), Pa = 101 325 Pa. NPSHr constructeur = 3,5 m. Calculer NPSHd et vérifier le risque de cavitation.', solution: 'NPSHd = (101325 − 3167)/(1000 × 9,81) + 1,5 − 0,8 = 10,00 + 1,5 − 0,8 = <strong>10,70 m</strong>. Marge = 10,70 − 3,5 = 7,2 m. Aucun risque de cavitation dans ces conditions.' },
    { n: 2, enonce: 'Une analyse vibratoire sur une pompe centrifuge 7,5 kW donne : vibration à 1× rotation = 3,8 mm/s, à 2× = 1,2 mm/s, à haute fréquence = 0,9 mm/s. Interpréter selon ISO 10816 et proposer une action.', solution: 'Groupe 2 (≤ 15 kW). Vibration 3,8 mm/s à 1× → zone "acceptable" (2,3–4,5 mm/s). Cause probable : balourd. Les autres fréquences sont faibles. Action : surveillance mensuelle, programmer l\'équilibrage dynamique du rotor lors du prochain arrêt préventif. Pas d\'urgence immédiate.' },
    { n: 3, enonce: 'Suite à une réparation, le débit d\'une pompe a chuté de 48 m³/h à 39 m³/h pour la même hauteur manométrique. La courbe H(Q) fabricant est disponible. Quelles sont les deux causes possibles et comment les distinguer ?', solution: '<strong>Cause 1 : usure des aubes</strong> (jeu entre aubes et volute augmenté). Se manifeste par une courbe H(Q) décalée vers le bas. Vérifier en comparant les mesures HMT/débit actuels à la courbe originale. <strong>Cause 2 : recirculation interne</strong> (joint d\'étanchéité entre aspiration et refoulement usé). Se détecte par mesure de débit sur aspiration et refoulement simultanément. Si débit aspiration > débit refoulement : fuite interne confirmée.' },
    { n: 4, enonce: 'Qu\'est-ce que le "bruit de gravier" sur une pompe et quelle mesure simple réalisée sur site permet de confirmer la cavitation ?', solution: 'Le bruit de gravier est le son produit par l\'implosion des bulles de cavitation. <strong>Test simple :</strong> augmenter temporairement le niveau de la bâche ou réduire le débit (vanne côté refoulement légèrement fermée pour réduire la vitesse). Si le bruit disparaît quand on ferme la vanne (réduction débit) ou qu\'on augmente le niveau, la cavitation est confirmée. Inversement, ouvrir la vanne de refoulement aggrave le phénomène.' }
  ],
  flashcards: [
    { q: 'Quelle est la condition pour éviter la cavitation dans une pompe ?', r: 'NPSHd > NPSHr + marge de sécurité (généralement 0,5 m minimum)', expl: 'NPSHd dépend de la hauteur d\'aspiration, des pertes de charge en aspiration et de la pression de vapeur. En été (eau chaude) ou à haute altitude, NPSHd diminue.' },
    { q: 'Une vibration à 2× la fréquence de rotation d\'une pompe indique quel défaut ?', r: 'Désalignement entre l\'axe moteur et l\'axe pompe', expl: 'Se corrige par mesure au comparateur ou laser, puis calage du moteur. Le désalignement génère aussi une usure rapide de l\'accouplement et des roulements.' },
    { q: 'Quelle différence entre MTBF et MTTR ?', r: 'MTBF (Mean Time Between Failures) = temps moyen entre deux pannes. MTTR (Mean Time To Repair) = temps moyen de réparation', expl: 'D = MTBF/(MTBF+MTTR). Pour améliorer la disponibilité : augmenter MTBF (meilleure maintenance préventive) ou réduire MTTR (pièces en stock, procédures rapides).' }
  ]
},

'LP-EAU-055': {
  fiche: {
    intro: 'La maintenance préventive repose sur des gammes d\'opérations planifiées, des historiques d\'équipements et une gestion documentaire rigoureuse. Les outils GMAO (Gestion de la Maintenance Assistée par Ordinateur) centralisent les informations et permettent d\'analyser les performances. Ce chapitre détaille la construction d\'un plan de maintenance et les pratiques documentaires indispensables à un service d\'eau.',
    sections: [
      {
        titre: 'A. Situation professionnelle et objectifs',
        texte: '<p>Le service des Trois Rivières n\'a pas de GMAO. Les bons d\'intervention sont sur papier et les historiques de pannes sont partiellement saisis dans un tableur. Lors du départ en retraite du technicien principal, 15 ans d\'historique informel ont disparu. L\'objectif de ce chapitre est de concevoir un système documentaire de maintenance minimal, efficace et pérenne, puis de comprendre comment une GMAO améliore ce système.</p>'
      },
      {
        titre: 'B. Ce chapitre approfondit par rapport au BTS/BTSA',
        texte: '<p>Au BTS/BTSA, vous avez renseigné des fiches d\'intervention et participé aux rondes. Ce chapitre vous amène à <em>concevoir</em> le système de maintenance : définir les gammes, structurer les historiques, choisir les indicateurs de suivi et utiliser un GMAO pour analyser les performances et planifier les interventions.</p>'
      },
      {
        titre: 'C. Rappel ciblé',
        texte: '<p>Une <strong>gamme de maintenance</strong> est la description détaillée des opérations à effectuer sur un équipement : nature de l\'opération, outillage nécessaire, durée estimée, fréquence, niveau de technicité requis, consignations à effectuer, pièces de rechange à prévoir. Elle sert à la fois à former les nouveaux agents et à assurer la traçabilité.</p>'
      },
      {
        titre: 'D. Notions et mécanismes',
        texte: '<p><strong>Structure d\'un plan de maintenance annuel :</strong> liste des équipements, fréquences d\'intervention (journalière, hebdomadaire, mensuelle, annuelle), répartition dans le calendrier (charge de travail), coût estimé, ressources nécessaires. Le plan doit intégrer les contraintes opérationnelles (périodes de pointe, arrêts programmés des installations).</p><p><strong>Gamme d\'opérations :</strong> décrit précisément chaque tâche préventive. Exemple pour inspection mensuelle pompe centrifuge : (1) consignation électrique si nécessaire, (2) contrôle visuel des fuites de presse-étoupe ou garniture, (3) mesure température paliers avec thermomètre contact, (4) contrôle niveau d\'huile ou état de la graisse, (5) écoute du bruit de fonctionnement, (6) lecture des paramètres process (débit, pression, ampérage), (7) enregistrement dans le GMAO, (8) déconsignation.</p><p><strong>GMAO (Gestion de Maintenance Assistée par Ordinateur) :</strong> système d\'information dédié à la maintenance. Fonctions principales : gestion des équipements (nomenclature, caractéristiques), ordres de travail (OT) préventifs et correctifs, historiques par équipement, gestion des stocks de pièces de rechange, indicateurs de performance (MTBF, MTTR, taux de réalisation du préventif, budget).</p><p><strong>Gestion des pièces de rechange :</strong> identifier les pièces critiques (délai d\'approvisionnement long, rupture de stock engendrant un arrêt prolongé) et constituer un stock de sécurité. Méthode : classement ABC des pièces par criticité × valeur. Les pièces A critiques sont maintenues en stock permanent. Les pièces C sont commandées à la demande.</p>'
      },
      {
        titre: 'E. Méthodes professionnelles',
        texte: '<p><strong>Construction d\'une gamme de maintenance en 5 étapes :</strong></p><ol><li>Lister les points de contrôle de l\'équipement (mécanique, hydraulique, électrique, instrumenté).</li><li>Définir la nature du contrôle : visuel, mesure, remplacement systématique.</li><li>Fixer la fréquence selon les recommandations constructeur et l\'expérience d\'exploitation.</li><li>Rédiger la procédure en langage simple, illustrée de schémas si possible.</li><li>Associer la durée estimée et les pièces de rechange nécessaires.</li></ol><p><strong>Analyse de l\'historique des pannes :</strong> classification des pannes par équipement et par cause. Identification des modes de défaillance répétitifs. Révision des gammes préventives pour cibler les causes les plus fréquentes.</p>'
      },
      {
        titre: 'F. Formules et exemples résolus',
        texte: '<p><strong>Taux de réalisation du préventif (TRP) :</strong><br><code>TRP = (nb gammes réalisées / nb gammes planifiées) × 100 (%)</code><br>Objectif typique : TRP > 90 %. Un TRP < 70 % indique une sous-charge du préventif ou des ressources insuffisantes.</p><p><strong>Coût de maintenance rapporté à la valeur de remplacement :</strong><br><code>CIR = Dépenses annuelles maintenance / Valeur de remplacement neuf × 100 (%)</code><br>Repère industriel : CIR entre 2 et 5 % est normal pour des installations bien entretenues. CIR > 8 % suggère un renouvellement à étudier.</p><p><strong>Exemple :</strong> pour une station de pompage (valeur remplacement : 180 000 €), dépenses maintenance 2024 : 7 200 € → CIR = 7 200/180 000 × 100 = <strong>4 %</strong> — dans la norme.</p>'
      },
      {
        titre: 'G. Dysfonctionnements et limites',
        texte: '<p><strong>Erreurs fréquentes :</strong> gammes trop génériques (pas applicables à l\'équipement précis), fréquences copiées du constructeur sans adaptation à l\'usage réel (un moteur en fonctionnement continu s\'use plus vite qu\'un moteur en démarrage/arrêt). Historiques non renseignés par manque de temps — le GMAO n\'est utile que si alimenté régulièrement.</p><p><strong>Limites du GMAO :</strong> coût d\'implémentation et de formation. Pour un petit service (< 5 agents), un tableur bien structuré peut être suffisant. L\'important est la traçabilité, pas l\'outil utilisé.</p>'
      },
      {
        titre: 'H. Fiche de révision',
        texte: '<p>Gamme = description détaillée de l\'opération préventive (nature, fréquence, durée, pièces). GMAO = outil de centralisation des OT, historiques, stocks. TRP = gammes réalisées / planifiées × 100. CIR = coût maintenance / valeur remplacement × 100 (cible 2-5 %). Pièces critiques en stock permanent. L\'historique est le principal outil de diagnostic des défaillances répétitives.</p>'
      }
    ],
    points: [
      'Gamme de maintenance : procédure détaillée de chaque opération préventive',
      'GMAO : centralise les OT, historiques d\'équipements, stocks et indicateurs',
      'TRP = gammes réalisées / gammes planifiées × 100 — objectif > 90 %',
      'CIR = coût maintenance / valeur remplacement × 100 — normal 2-5 %',
      'Pièces critiques (délai long, panne grave) = stock permanent',
      'Analyse des historiques : identifier les modes de défaillance répétitifs et réviser les gammes',
      'Maintenance préventive efficace = gammes adaptées à l\'usage réel, pas seulement au constructeur'
    ],
    formules: [
      'TRP = (gammes réalisées / gammes planifiées) × 100 (%)',
      'CIR = (dépenses annuelles maintenance / valeur de remplacement neuf) × 100 (%)'
    ],
    retenir: 'La maintenance préventive n\'est efficace que si elle est documentée et tracée. Les gammes doivent être adaptées à l\'usage réel. Les historiques permettent d\'identifier les défaillances récurrentes et d\'améliorer les gammes en continu. Le GMAO est un outil d\'aide à la décision, pas une fin en soi.'
  },
  exercices: [
    { n: 1, enonce: 'En janvier, 24 gammes préventives sont planifiées sur les 3 pompes. 20 sont réalisées. En février, 18 planifiées, 18 réalisées. Calculer le TRP mensuel et le TRP cumulé T1-T2.', solution: 'TRP janvier = 20/24 × 100 = <strong>83,3 %</strong>. TRP février = 18/18 × 100 = <strong>100 %</strong>. TRP cumulé = (20+18)/(24+18) × 100 = 38/42 × 100 = <strong>90,5 %</strong>. Le TRP cumulé dépasse 90 % — objectif atteint sur la période.' },
    { n: 2, enonce: 'Une station de traitement AEP a une valeur de remplacement estimée à 2 400 000 €. Les dépenses de maintenance sur l\'année s\'élèvent à 68 000 €. Calculer le CIR et commenter.', solution: 'CIR = 68 000 / 2 400 000 × 100 = <strong>2,83 %</strong>. Ce taux est dans la fourchette normale (2-5 %). L\'installation est correctement entretenue sans sur-maintenance. Si des équipements vieillissants augmentent le CIR au-dessus de 6-8 %, un programme de renouvellement sera à envisager.' },
    { n: 3, enonce: 'Rédiger une gamme d\'inspection mensuelle pour un surpresseur de réseau AEP (liste des points à vérifier, durée estimée, fréquence).', solution: '<strong>Gamme M01 — Surpresseur AEP — inspection mensuelle (45 min)</strong><br>1. Lecture compteur heures de fonctionnement.<br>2. Contrôle visuel : fuites visibles sur les raccords, état des joints de bâche et couvercle.<br>3. Mesure température moteur et paliers (thermomètre contact).<br>4. Écoute bruit de fonctionnement (roulements, cavitation).<br>5. Lecture pression aspiration et refoulement ; comparer aux valeurs de référence.<br>6. Lecture ampérage moteur ; comparer à la valeur nominale ± 10 %.<br>7. Niveau d\'huile ou état de la graisse.<br>8. Test fonctionnel organe de sécurité (soupape de décharge si accessible).<br>9. Enregistrement GMAO : valeurs mesurées, anomalies, actions décidées.' }
  ],
  flashcards: [
    { q: 'Qu\'est-ce qu\'une gamme de maintenance ?', r: 'Description détaillée d\'une opération préventive : nature, fréquence, outillage, durée, pièces, niveau de technicité et procédure de consignation', expl: 'Une bonne gamme permet à un agent non spécialiste de réaliser l\'opération correctement et en sécurité. Elle doit être révisée quand l\'équipement ou les conditions d\'exploitation changent.' },
    { q: 'Quelle est la valeur cible du TRP (taux de réalisation du préventif) ?', r: 'Supérieur à 90 %. En dessous de 70 %, le programme préventif n\'est pas tenu et les risques de panne augmentent', expl: 'Un TRP insuffisant peut révéler un manque de ressources, des gammes inadaptées (trop longues, mal planifiées) ou un manque de priorité donnée au préventif face aux urgences correctives.' }
  ]
},

'LP-EAU-056': {
  fiche: {
    intro: 'Le diagnostic énergétique d\'un système de pompage quantifie les consommations, identifie les pertes et les marges d\'optimisation. Dans les services d\'eau, le pompage représente souvent 60 à 80 % de la facture énergétique. L\'analyse du rendement global — de la fourniture électrique jusqu\'au fluide élevé — permet de cibler les actions à fort impact.',
    sections: [
      {
        titre: 'A. Situation professionnelle et objectifs',
        texte: '<p>Le directeur du syndicat des Trois Rivières souhaite réduire la facture d\'électricité qui a augmenté de 22 % en 3 ans malgré une production d\'eau stable. Un audit énergétique est commandé pour les 4 stations de pompage du syndicat. Objectifs : mesurer les rendements actuels, calculer la consommation spécifique, identifier les marges d\'amélioration et estimer les économies potentielles.</p>'
      },
      {
        titre: 'B. Ce chapitre approfondit par rapport au BTS/BTSA',
        texte: '<p>Au BTS/BTSA, vous avez appris à calculer la puissance hydraulique et électrique d\'une pompe. Ce chapitre vous amène à réaliser un <em>bilan énergétique complet</em> incluant tous les postes de perte, à interpréter les résultats dans le contexte d\'exploitation (variation de charge, calage des pompes), et à justifier des recommandations technico-économiques face à un maître d\'ouvrage.</p>'
      },
      {
        titre: 'C. Rappel ciblé',
        texte: '<p>La <strong>puissance hydraulique utile</strong> est l\'énergie par unité de temps transmise au fluide : Pu = ρ·g·Q·HMT (W). La <strong>puissance absorbée</strong> par le moteur électrique est Pa = U·I·cos(φ)·√3 (W, triphasé). Le <strong>rendement global</strong> η_g = Pu / Pa. Il intègre les pertes dans le moteur (η_moteur ≈ 0,88–0,96), l\'accouplement, la pompe (η_pompe ≈ 0,55–0,85) et les pertes variateur (η_var ≈ 0,96–0,98 si présent). η_g = η_moteur × η_accouplement × η_pompe.</p>'
      },
      {
        titre: 'D. Notions et mécanismes',
        texte: '<p><strong>Consommation spécifique (Ecs) :</strong> rapport entre l\'énergie consommée et le volume pompé. Ecs = kWh / m³. Permet de comparer l\'efficacité de systèmes différents indépendamment du volume pompé. Valeurs typiques pour l\'eau potable : 0,2 à 0,8 kWh/m³ selon les hauteurs. L\'augmentation de la Ecs à volume constant est le signe d\'une dégradation.</p><p><strong>Index de performance énergétique (IPE) :</strong> rapport Ecs mesurée / Ecs théorique pour la même HMT et le même débit avec une pompe neuve performante. IPE > 1,3 signale un système énergétiquement dégradé justifiant un audit approfondi.</p><p><strong>Causes de surconsommation :</strong> (1) dégradation de la pompe (usure des aubes → rendement pompe chute). (2) Point de fonctionnement décalé par rapport au BEP (Best Efficiency Point) : la pompe fonctionne à débit trop faible ou trop fort. (3) Régulation par vanne de refoulement (gaspillage par étranglement). (4) Moteur sous-dimensionné ou surdimensionné. (5) Réseau avec fuites importantes (pompe refoule eau perdue).</p><p><strong>Mesures de terrain pour l\'audit :</strong> compteur d\'énergie (kWh) ou pinces ampèremétriques + voltmètre + cos(φ), débitmètre ultrasonique non intrusif, manomètres aspiration/refoulement. La campagne de mesures doit couvrir différentes situations d\'exploitation (nuit/jour, hiver/été) pour tenir compte de la variabilité.</p>'
      },
      {
        titre: 'E. Méthodes professionnelles',
        texte: '<p><strong>Protocole d\'audit énergétique pompage en 6 étapes :</strong></p><ol><li>Collecte des données de conception : courbes H(Q) des pompes, plans du réseau, HMT nominale, volume annuel pompé, factures EDF.</li><li>Campagne de mesures : Pa (puissance électrique absorbée), Q (débit), HMT (différence de pression + différence de hauteur), en régime établi et pour plusieurs points de fonctionnement.</li><li>Calcul des rendements : η_pompe = Pu / (Pa / η_moteur), η_global = Pu / Pa.</li><li>Calcul de la Ecs et de l\'IPE.</li><li>Comparaison aux valeurs théoriques et identification des postes de perte.</li><li>Propositions hiérarchisées : remplacement pompe usée, calage du BEP, suppression de l\'étranglement par variateur de vitesse, isolation des conduites si pertes thermiques.</li></ol>'
      },
      {
        titre: 'F. Formules et exemples résolus',
        texte: '<p><strong>Puissances et rendement :</strong><br>Pu = ρ × g × Q × HMT (W) | Pa = √3 × U × I × cos(φ) (W) | η_g = Pu / Pa<br>Exemple : Q = 85 m³/h = 0,02361 m³/s, HMT = 42 m, Pa mesurée = 18 500 W.<br>Pu = 1000 × 9,81 × 0,02361 × 42 = <strong>9 723 W</strong>.<br>η_g = 9 723 / 18 500 = <strong>0,526 (52,6 %)</strong>. Si la courbe constructeur indique η_pompe = 0,76 au BEP, et η_moteur = 0,92 → η_g théorique = 0,76 × 0,92 = 0,699 = 70 %. L\'écart (52,6 % vs 70 %) représente une dégradation de 25 % du rendement → diagnostic usure pompe ou point de fonctionnement décalé.</p><p><strong>Consommation spécifique :</strong><br>Ecs = Pa × t / V = kWh / m³<br>Exemple : Pa = 18 500 W, fonctionnement 1 400 h/an, volume annuel = 950 000 m³.<br>Énergie = 18,5 × 1 400 = 25 900 kWh. Ecs = 25 900 / 950 000 = <strong>0,0273 kWh/m³</strong>. (NB : vérifier cohérence volume × HMT avec énergie hydraulique théorique.)</p>'
      },
      {
        titre: 'G. Dysfonctionnements et limites',
        texte: '<p><strong>Erreurs fréquentes :</strong> ne mesurer Pa qu\'en un seul point de fonctionnement non représentatif. Oublier les pertes variateur si présent. Calculer η_pompe sans soustraire les pertes moteur (η_g ≠ η_pompe). Comparer des Ecs sans tenir compte des HMT différentes (service de plaine ≠ service de relief).</p><p><strong>Limites :</strong> la mesure de Pa par pinces ampéremétriques sans cos(φ) peut surestimer la puissance réelle de 10-15 %. L\'IPE dépend du choix de la pompe de référence — préciser l\'hypothèse.</p>'
      },
      {
        titre: 'H. Fiche de révision',
        texte: '<p>Pu = ρgQH. Pa = √3UIcosφ. η_g = Pu/Pa. Ecs = kWh/m³ pompé. IPE = Ecs mesurée / Ecs théorique (objectif < 1,3). Causes de surconsommation : usure pompe, décalage BEP, régulation par vanne, pertes réseau. Audit = mesures sur site en conditions représentatives.</p>'
      }
    ],
    points: [
      'Pu = ρ·g·Q·HMT (W) — puissance hydraulique utile',
      'η_g = Pu / Pa — rendement global (moteur × accouplement × pompe)',
      'Ecs (kWh/m³) : indicateur de comparaison indépendant du volume',
      'IPE > 1,3 : système énergétiquement dégradé, audit justifié',
      'Causes de dégradation : usure aubes, fonctionnement hors BEP, régulation par vanne',
      'Mesures d\'audit : Pa (pince ampère + cosφ), Q (ultrasonique), HMT (manomètres)',
      'Variateur de vitesse : économie 20-40 % si débit variable (courbe réseau à forte part de pression dynamique)'
    ],
    formules: [
      'Pu = ρ × g × Q × HMT (W)',
      'Pa = √3 × U × I × cos(φ) (W) — triphasé',
      'η_g = Pu / Pa (sans unité)',
      'Ecs = Énergie consommée (kWh) / Volume pompé (m³)'
    ],
    retenir: 'L\'audit énergétique d\'un système de pompage compare le rendement mesuré au rendement théorique et calcule la consommation spécifique. L\'IPE permet de décider si une intervention est justifiée. Les principales marges : calage au BEP, remplacement de pompe usée, variateur de vitesse si charge variable.'
  },
  exercices: [
    { n: 1, enonce: 'Une pompe refoule Q = 60 m³/h, HMT = 35 m. Pa mesurée = 10 500 W. Calculer Pu, η_g et commenter par rapport à un rendement théorique de 0,68.', solution: 'Q = 60/3600 = 0,01667 m³/s. Pu = 1000 × 9,81 × 0,01667 × 35 = <strong>5 712 W</strong>. η_g = 5 712 / 10 500 = <strong>0,544 (54,4 %)</strong>. Écart par rapport au théorique (68 %) : (68-54,4)/68 = 20 % de rendement perdu. Causes à investiguer : usure rotor, point de fonctionnement décalé, pertes mécaniques.' },
    { n: 2, enonce: 'Une station pompe 320 000 m³/an et consomme 128 000 kWh/an. Calculer Ecs. La valeur théorique pour HMT = 28 m et η_g = 0,65 est Ecs_th = 0,116 kWh/m³. Calculer l\'IPE et conclure.', solution: 'Ecs = 128 000 / 320 000 = <strong>0,400 kWh/m³</strong>. IPE = 0,400 / 0,116 = <strong>3,45</strong>. IPE très supérieur à 1,3 : système fortement dégradé. Audit approfondi indispensable. Économie potentielle si Ecs ramenée à 0,15 kWh/m³ (IPE = 1,3) : (0,400 − 0,15) × 320 000 = <strong>80 000 kWh/an économisés</strong>.' }
  ],
  flashcards: [
    { q: 'Qu\'est-ce que la consommation spécifique (Ecs) et quelle est son utilité ?', r: 'Ecs = énergie consommée (kWh) / volume pompé (m³). Permet de comparer des systèmes de taille différente et de détecter une dégradation énergétique indépendamment du volume annuel', expl: 'Pour être comparables, les Ecs doivent être calculées pour des HMT similaires. Une augmentation de Ecs à HMT constante signale une dégradation de la pompe ou un changement de point de fonctionnement.' },
    { q: 'Quelle est la formule du rendement global d\'un système de pompage ?', r: 'η_g = Pu / Pa = (ρ·g·Q·HMT) / Pa. η_g = η_moteur × η_accouplement × η_pompe', expl: 'Un rendement global de 50 % signifie que la moitié de l\'énergie électrique consommée est perdue en chaleur dans le moteur et la pompe. Les pompes neuves atteignent η_global 60-75 %.' }
  ]
},


'LP-EAU-057': {
  fiche: {
    intro: 'L\'optimisation énergétique des installations de traitement des eaux — stations d\'épuration, usines de potabilisation, postes de pompage — est un levier majeur de réduction des coûts d\'exploitation. L\'aération des bassins biologiques, le pompage et le brassage représentent ensemble 70 à 90 % de la consommation électrique d\'une STEP. Ce chapitre présente les méthodes d\'analyse et les solutions d\'optimisation applicables.',
    sections: [
      { titre: 'A. Situation professionnelle et objectifs', texte: '<p>La STEP des Trois Rivières (12 000 EH, boues activées faible charge) consomme 580 000 kWh/an, soit 0,46 kWh/m³ traité. La valeur de référence nationale pour ce type de STEP est 0,30–0,35 kWh/m³. Le maître d\'ouvrage demande un plan d\'optimisation visant 25 % d\'économies. Objectifs : identifier les postes de consommation, quantifier les marges et proposer des actions hiérarchisées par retour sur investissement.</p>' },
      { titre: 'B. Ce chapitre approfondit par rapport au BTS/BTSA', texte: '<p>Au BTS/BTSA, vous avez appris à exploiter une aération — régler l\'oxygène dissous, détecter une panne de surpresseur. Ce chapitre vous amène à réaliser un <em>bilan de consommation par poste</em>, à quantifier les gains d\'un variateur de vitesse ou d\'une régulation de l\'aération, et à justifier les investissements par une analyse de rentabilité.</p>' },
      { titre: 'C. Rappel ciblé', texte: '<p>Le <strong>transfert d\'oxygène</strong> par un aérateur dépend de la puissance installée, du type d\'aérateur (fine bulle, disque, turbine), de la géométrie du bassin et des conditions hydrauliques. L\'efficacité standard de transfert (EST) est exprimée en kgO₂/kWh. Une fine bulle bien conçue atteint 2,5–4 kgO₂/kWh ; une aération de surface 1,5–2,5 kgO₂/kWh. La puissance d\'aération nécessaire dépend de la charge en DBO₅ à traiter et du taux d\'oxygénation.</p>' },
      { titre: 'D. Notions et mécanismes', texte: '<p><strong>Répartition type des consommations d\'une STEP boues activées :</strong> aération des bassins biologiques 50–60 %, recirculation des boues 10–15 %, pompage des effluents 10–15 %, traitement des boues 10–15 %, éclairage et auxiliaires 5–10 %.</p><p><strong>Optimisation de l\'aération :</strong> la régulation en cascade mesure l\'O₂ dissous dans le bassin et ajuste la vitesse des surpresseurs (ou turbines) pour maintenir une consigne (souvent 1,5–2,5 mgO₂/L). Sans régulation, l\'aération tourne à puissance fixe — surconsommation systématique aux heures creuses (nuit, week-end). Un variateur de vitesse sur surpresseur permet de réduire la consommation de 25–40 % en exploitation réelle.</p><p><strong>Optimisation du pompage :</strong> planifier les pompages aux heures creuses tarifaires (tarif HC/HP EDF). Utiliser les capacités de stockage (bâches, réservoirs) pour décaler les pompages. Dimensionner les pompes au plus proche du BEP pour les débits réels.</p><p><strong>Valorisation de la digestion :</strong> sur les STEP > 5 000 EH avec méthanisation, le biogaz peut alimenter un cogénérateur. L\'autosuffisance énergétique partielle (40–70 %) est atteignable. Ce n\'est pas accessible aux petites STEP sans digestion.</p><p><strong>Efficacité des moteurs :</strong> remplacer les moteurs IE1 (norme ancienne) par des moteurs IE3 ou IE4 : gain de rendement 2–5 % selon la puissance. Rentable lors du remplacement en fin de vie.</p>' },
      { titre: 'E. Méthodes professionnelles', texte: '<p><strong>Bilan de consommation par poste :</strong></p><ol><li>Installer des sous-compteurs d\'énergie par poste (aération, pompage, boues) pendant 3 mois minimum couvrant différentes saisons.</li><li>Calculer la consommation spécifique par poste : kWh/m³ traité, kWh/kgDBO₅ éliminée pour l\'aération.</li><li>Comparer aux valeurs de référence (Ademe, agences de l\'eau) et aux STEP similaires.</li><li>Identifier les postes > 15 % au-dessus des références.</li><li>Calculer le retour sur investissement de chaque action potentielle : économie annuelle (kWh × prix kWh), coût de l\'investissement, TRC = investissement / économie annuelle.</li></ol>' },
      { titre: 'F. Formules et exemples résolus', texte: '<p><strong>Consommation spécifique aération :</strong><br>Cs_aer = Énergie aération (kWh/an) / Charge DBO₅ éliminée (kgDBO₅/an)<br>Référence boues activées faible charge : 0,8–1,2 kWh/kgDBO₅. Valeur > 1,5 kWh/kgDBO₅ → optimisation nécessaire.</p><p><strong>Économie par variateur de vitesse :</strong><br>E_économie = Pa_fixe × (1 − (N_min/N_max)³) × t_base × f_charge<br>Approximation loi des affinités : puissance varie au cube de la vitesse. Si un surpresseur tourne à 70 % de sa vitesse maximale 60 % du temps → économie ≈ Pa × (1−0,70³) × 0,60 = Pa × 0,657 × 0,60 ≈ <strong>39 % d\'économie</strong> sur la période concernée.</p><p><strong>Exemple chiffré :</strong> surpresseur Pa_fixe = 55 kW, 8 000 h/an. Sans régulation : 55 × 8 000 = 440 000 kWh/an. Avec variateur et régulation O₂ : fonctionnement moyen à 65 % de la puissance → 440 000 × 0,65 = 286 000 kWh. Économie : 154 000 kWh/an × 0,12 €/kWh = <strong>18 480 €/an</strong>. Coût variateur + régulation : 25 000 € → TRC = 25 000 / 18 480 = <strong>1,35 an</strong>.</p>' },
      { titre: 'G. Dysfonctionnements et limites', texte: '<p>Ne pas baser les calculs de gain sur des hypothèses de charge constante — la charge en DBO₅ est très variable (heure, saison, événements). Un dimensionnement optimisé pour la charge de pointe est surdimensionné pour la charge moyenne (60–70 % du temps). La régulation de l\'aération doit gérer les transitoires de charge sans défaut de nitrification.</p><p>La méthanisation est rentable uniquement pour des STEP > 5 000-10 000 EH avec un investissement significatif. Ne pas la recommander pour de petites STEP sans analyse de faisabilité préalable.</p>' },
      { titre: 'H. Fiche de révision', texte: '<p>Aération = 50-60 % conso STEP. Variateur + régulation O₂ → économie 25-40 %. TRC = investissement / économie annuelle. Cs_aer (kWh/kgDBO₅) compare à la référence 0,8-1,2. Pompage aux heures creuses tarifaires. Remplacer moteurs IE1 par IE3 lors du renouvellement.</p>' }
    ],
    points: [
      'Aération = 50-60 % de la consommation électrique d\'une STEP boues activées',
      'Variateur de vitesse + régulation O₂ dissous : économie 25-40 % sur l\'aération',
      'TRC = investissement / économie annuelle — objectif < 5 ans pour solutions techniques',
      'Cs_aer (kWh/kgDBO₅) : référence boues activées 0,8-1,2 kWh/kgDBO₅',
      'Pompage aux heures creuses : décalage de charge grâce aux stockages',
      'Loi des affinités : puissance varie au cube de la vitesse de rotation',
      'Moteurs IE3 / IE4 : remplacer les IE1 lors du renouvellement en fin de vie'
    ],
    formules: [
      'Cs_aer = Énergie aération (kWh/an) / Charge DBO₅ éliminée (kgDBO₅/an)',
      'Puissance ∝ N³ (loi des affinités) — économie variateur ≈ 1 − (N_min/N_max)³',
      'TRC = Investissement (€) / Économie annuelle (€/an)'
    ],
    retenir: 'L\'optimisation énergétique d\'une STEP commence par un bilan de consommation par poste, suivi d\'une comparaison aux références et d\'une hiérarchisation des actions par retour sur investissement. La régulation de l\'aération et les variateurs de vitesse sur surpresseurs sont les leviers les plus rentables.'
  },
  exercices: [
    { n: 1, enonce: 'Une STEP traite 1 200 kgDBO₅/j. L\'aération consomme 1 850 kWh/j. Calculer Cs_aer et commenter par rapport à la référence 0,8-1,2 kWh/kgDBO₅. Proposer deux actions.', solution: 'Cs_aer = 1850 / 1200 = <strong>1,54 kWh/kgDBO₅</strong>. Supérieur à la fourchette haute (1,2). Suroptimisation nécessaire.<br>Actions : (1) Installer une régulation O₂ dissous avec variateurs sur surpresseurs (si absents). (2) Vérifier l\'efficacité de transfert des diffuseurs (colmatage possible — nettoyage ou remplacement).' },
    { n: 2, enonce: 'Un surpresseur de 90 kW fonctionne à vitesse fixe 7 500 h/an. Avec un variateur de vitesse, on estime qu\'il fonctionnerait en moyenne à 72 % de sa vitesse nominale. Calculer la consommation avec et sans variateur et l\'économie annuelle (prix kWh = 0,13 €).', solution: 'Sans variateur : 90 × 7 500 = <strong>675 000 kWh/an</strong>.<br>Avec variateur : puissance à 72 % de vitesse ≈ 90 × 0,72³ = 90 × 0,373 = 33,6 kW. Conso = 33,6 × 7 500 = <strong>252 000 kWh/an</strong>.<br>Économie = (675 000 − 252 000) × 0,13 = 423 000 × 0,13 = <strong>54 990 €/an</strong>. TRC pour variateur 45 000 € = 45 000/54 990 = <strong>0,82 an</strong> — investissement très rentable.' }
  ],
  flashcards: [
    { q: 'Quelle est la loi des affinités appliquée à la puissance d\'un ventilateur ou surpresseur ?', r: 'La puissance varie au cube de la vitesse de rotation : P ∝ N³. Réduire la vitesse à 70 % réduit la puissance à 0,70³ = 0,34 (34 %)', expl: 'C\'est pourquoi les variateurs de vitesse sont très rentables sur les machines soumises à des charges variables : 30 % de réduction de vitesse → 66 % d\'économie de puissance.' }
  ]
},

'LP-EAU-058': {
  fiche: {
    intro: 'L\'analyse des risques professionnels dans les installations hydrauliques de traitement et de pompage est une obligation légale (Document Unique d\'Évaluation des Risques — DUER) et un impératif de sécurité. Les interventions sur les équipements (consignation électrique, travaux en espace confiné, manipulation de produits chimiques) nécessitent des procédures rigoureuses pour protéger les intervenants.',
    sections: [
      { titre: 'A. Situation professionnelle et objectifs', texte: '<p>Lors d\'une intervention de maintenance sur une pompe de refoulement des boues (fosse fermée), un agent perd connaissance à cause d\'une atmosphère enrichie en CO₂. L\'accident est sans gravité, mais une enquête est diligentée. Le service doit revoir la procédure d\'intervention en espace confiné. Objectifs : identifier les risques spécifiques aux installations de traitement des eaux, maîtriser les procédures de consignation et de travail en espace confiné.</p>' },
      { titre: 'B. Ce chapitre approfondit par rapport au BTS/BTSA', texte: '<p>Au BTS/BTSA, vous avez été sensibilisé aux EPI et aux règles de sécurité de base. Ce chapitre aborde la <em>démarche structurée d\'analyse des risques</em> (DUER, arbre des causes), les procédures de consignation électrique et pneumatique, et la gestion des travaux en espace confiné selon les exigences réglementaires françaises.</p>' },
      { titre: 'C. Rappel ciblé', texte: '<p>Le <strong>DUER</strong> (Document Unique d\'Évaluation des Risques) est obligatoire pour tout employeur (Code du Travail, art. R4121-1). Il répertorie les risques identifiés et les mesures de prévention associées. Il doit être mis à jour au moins annuellement et lors de tout changement. La <strong>consignation</strong> est l\'ensemble des opérations qui rendent une installation sans énergie et empêchent toute remise en énergie intempestive pendant une intervention.</p>' },
      { titre: 'D. Notions et mécanismes', texte: '<p><strong>Risques spécifiques aux installations eau/assainissement :</strong></p><ul><li>Espaces confinés (regards, fosses, digesteurs) : atmosphères appauvries en O₂, enrichies en CO₂, H₂S, CH₄, NH₃. Risque d\'asphyxie ou d\'intoxication.</li><li>Risques électriques : armoires humides, tableaux non protégés, moteurs immergés.</li><li>Risques chimiques : chlore gazeux, hypochlorite, coagulants acides ou basiques, réactifs de déphosphatation.</li><li>Risques mécaniques : pièces en rotation (pompes), conduites sous pression, risque de retour de fluide.</li><li>Risques biologiques : eaux usées brutes (pathogènes), aérosols des STEP.</li></ul><p><strong>Procédure de consignation électrique (norme NF C 18-510) :</strong> (1) séparation de la source (ouverture du sectionneur), (2) condamnation (cadenas personnel), (3) identification (étiquette), (4) vérification d\'absence de tension (VAT), (5) mise à la terre si nécessaire.</p><p><strong>Travail en espace confiné (Décret 2017-1819) :</strong> analyse préalable de l\'atmosphère (O₂, CO, H₂S, inflammables) avec un multi-gaz, ventilation préalable, présence d\'un surveillant extérieur, moyens d\'extraction disponibles, arrêt et consignation de toutes les arrivées de fluide, procédure d\'urgence écrite.</p><p><strong>Permis de travail :</strong> document formalisé autorisant une intervention spécifique sur une installation, validé par l\'exploitant et l\'intervenant. Obligatoire pour les travaux dangereux et les interventions d\'entreprises extérieures (Plan de Prévention).</p>' },
      { titre: 'E. Méthodes professionnelles', texte: '<p><strong>Protocole d\'intervention en espace confiné :</strong></p><ol><li>Identification et classification de l\'espace confiné (ECA niveau 1, 2 ou 3 selon les risques).</li><li>Analyse des risques spécifiques : nature et source des contaminants potentiels, ventilation naturelle, historique des incidents.</li><li>Arrêt et consignation : fermeture de toutes les vannes d\'arrivée, pose de plaques pleines si nécessaire, consignation électrique de tout équipement.</li><li>Mesure d\'atmosphère : O₂ (seuil d\'alerte < 20,5 % et > 23,5 %), CO (VME 20 ppm), H₂S (VLEP 5 ppm), CH₄ (LIE).</li><li>Ventilation forcée préalable minimum 10 volumes de l\'espace.</li><li>Intervention avec EPI adaptés, surveillant extérieur permanent, système de récupération.</li><li>Surveiller l\'atmosphère en continu pendant l\'intervention.</li></ol>' },
      { titre: 'F. Formules et exemples résolus', texte: '<p><strong>Exemple d\'analyse de risque simplifiée (arbre de causes) :</strong><br>Fait dommageable : agent perd connaissance en fosse de pompage.<br>Causes immédiates : atmosphère appauvrie en O₂ (mesure : 17 %). Causes profondes : pas de mesure d\'atmosphère préalable, absence de ventilation, pas de surveillant extérieur, procédure inexistante.<br>Barrières défaillantes : DUER ne mentionnait pas cet espace, pas de formation spécifique espace confiné.<br>Actions correctives : mettre à jour le DUER, acheter un multi-gaz, rédiger la procédure, former les agents, créer le registre des espaces confinés.</p>' },
      { titre: 'G. Dysfonctionnements et limites', texte: '<p>Ne jamais pénétrer dans un espace confiné sans avoir mesuré l\'atmosphère, même si l\'espace était accessible sans incident les fois précédentes : la composition de l\'atmosphère peut varier rapidement (fermentation, décomposition, fuite). Le H₂S est pernicieux : il anesthésie l\'odorat à forte concentration — l\'absence d\'odeur ne signifie pas l\'absence de danger. Le CH₄ produit par la digestion peut atteindre des concentrations explosibles.</p>' },
      { titre: 'H. Fiche de révision', texte: '<p>DUER = obligatoire, mis à jour annuellement. Consignation : séparation + condamnation + identification + VAT. Espace confiné : mesure multi-gaz AVANT entrée, ventilation, surveillant extérieur. Seuils H₂S : VLEP 5 ppm, immédiatement dangereux > 50 ppm. Permis de travail pour interventions dangereuses et entreprises extérieures.</p>' }
    ],
    points: [
      'DUER obligatoire : recensement des risques + mesures de prévention, mis à jour annuellement',
      'Consignation électrique : séparation + condamnation (cadenas) + identification + VAT',
      'Espace confiné : mesure atmosphère AVANT entrée (O₂, CO, H₂S, CH₄), ventilation, surveillant',
      'H₂S : inodore à forte concentration (anesthésie olfactive) — VLEP 5 ppm en France',
      'Permis de travail : obligatoire pour interventions dangereuses et entreprises extérieures',
      'Risques spécifiques eau/assainissement : H₂S, CO₂, CH₄, chlore, biologiques, pression',
      'Plan de Prévention avec les entreprises extérieures (Code du Travail R4512-6)'
    ],
    formules: [
      'Seuils atmosphère espace confiné : O₂ 20,5-23,5 %, H₂S VLEP 5 ppm, CO VME 20 ppm',
      'Ventilation préalable : min. 10 volumes de l\'espace avant entrée'
    ],
    retenir: 'L\'analyse des risques professionnels passe par la mise à jour du DUER, la formalisation des procédures de consignation et l\'application stricte du protocole espaces confinés. La mesure d\'atmosphère avant toute entrée est non négociable. Les risques les plus graves (H₂S, asphyxie) surviennent sans symptômes préalables.'
  },
  exercices: [
    { n: 1, enonce: 'Lister les 5 étapes de la consignation électrique selon NF C 18-510 et expliquer le rôle de chaque étape.', solution: '1. <strong>Séparation de la source</strong> : ouvrir le sectionneur ou le disjoncteur principal — interrompre l\'alimentation électrique. 2. <strong>Condamnation</strong> : pose d\'un cadenas personnel sur l\'organe de sectionnement — empêcher toute remise en tension intempestive par un tiers. 3. <strong>Identification</strong> : étiquette de consignation avec nom, date, raison — informer les autres intervenants. 4. <strong>Vérification d\'absence de tension (VAT)</strong> : avec un VAT calibré et vérifié — confirmer l\'absence de tension résiduelle (condensateurs, générateurs). 5. <strong>Mise à la terre et en court-circuit (MALT/CC)</strong> si nécessaire pour les travaux sur circuits HT ou risque de réalimentation.' },
    { n: 2, enonce: 'Rédiger une check-list de 8 points à vérifier avant de faire descendre un agent dans un regard de pompage (espace confiné niveau 2).', solution: '1. Fermeture et condamnation de toutes les vannes d\'arrivée de liquide.<br>2. Consignation électrique des pompes et équipements dans le regard.<br>3. Mesure d\'atmosphère (O₂, H₂S, CO, CH₄) avec multi-gaz étalonné.<br>4. Résultats dans les seuils : O₂ 20,5–23,5 %, H₂S < 5 ppm, CO < 20 ppm, CH₄ < 10 % LIE.<br>5. Ventilation forcée en cours pendant toute l\'intervention.<br>6. Désignation et présence effective d\'un surveillant extérieur (ne quitte pas le poste).<br>7. EPI adaptés : détecteur portatif multi-gaz, harnais + ligne de vie, radio.<br>8. Procédure d\'urgence connue, moyens d\'extraction disponibles et vérifiés.' }
  ],
  flashcards: [
    { q: 'Pourquoi le H₂S est-il particulièrement dangereux dans les espaces confinés ?', r: 'Il est inodore à forte concentration car il anesthésie l\'odorat. L\'absence d\'odeur d\'oeuf pourri ne signifie pas l\'absence de danger. Il est immédiatement dangereux pour la vie au-dessus de 50 ppm', expl: 'Le H₂S se produit par décomposition des matières organiques sulfurées dans les eaux usées et les boues. Il est présent dans les regards d\'assainissement, les digesteurs et les bâches de stockage de boues.' }
  ]
},

'LP-EAU-059': {
  fiche: {
    intro: 'La continuité d\'exploitation d\'un service d\'eau potable ou d\'assainissement est une obligation de service public. Face à une défaillance majeure — panne électrique prolongée, casse de conduite, incident qualité, crue — le service doit disposer d\'un Plan de Continuité d\'Activité (PCA) permettant de maintenir les fonctions essentielles et de rétablir rapidement le service normal.',
    sections: [
      { titre: 'A. Situation professionnelle et objectifs', texte: '<p>Une coupure EDF de 36 heures affecte la station de pompage principale des Trois Rivières. Les groupes électrogènes de secours démarrent mais l\'un des deux tombe en panne après 4 heures. Le réservoir principal commence à se vider. Le chef d\'exploitation doit gérer la crise en temps réel, communiquer avec les élus et les usagers, et décider des restrictions d\'usage. Objectifs : concevoir un PCA efficace, définir les priorités d\'exploitation en situation dégradée et préparer les équipes aux exercices.</p>' },
      { titre: 'B. Ce chapitre approfondit par rapport au BTS/BTSA', texte: '<p>Au BTS/BTSA, vous avez géré des incidents simples (panne pompe, défaut de chloration). Ce chapitre vous prépare à <em>organiser la réponse à une crise multi-équipements</em>, à prioriser les actions en temps contraint, à communiquer avec les autorités et à documenter la gestion de l\'incident pour l\'amélioration continue.</p>' },
      { titre: 'C. Rappel ciblé', texte: '<p>Un <strong>PCA</strong> (Plan de Continuité d\'Activité) définit, pour chaque scénario de crise identifié, les actions à mener, les responsables, les délais, les ressources et les procédures de communication. Il repose sur une analyse préalable des scénarios de risque et de leur impact. L\'ANSSI et les guides sectoriels (ASTEE, ARS) fournissent des cadres méthodologiques.</p>' },
      { titre: 'D. Notions et mécanismes', texte: '<p><strong>Scénarios de crise typiques :</strong> défaillance électrique (panne réseau, orage), défaillance de la ressource (sécheresse, pollution accidentelle, crue), rupture de conduite principale, incident qualité (contamination, dépassement de paramètres), défaillance informatique (SCADA), pandémie ou plan social réduisant les effectifs.</p><p><strong>Priorités de service en situation dégradée :</strong> (1) alimentation en eau des établissements sensibles (hôpitaux, EHPAD, dialyse), (2) alimentation des défenses incendie, (3) alimentation des abonnés prioritaires (eau chaude sanitaire, restauration collective), (4) alimentation générale. La coupure de certains secteurs permet de préserver la pression dans les secteurs prioritaires.</p><p><strong>Moyens de secours :</strong> groupes électrogènes (vérification périodique du gasoil et du démarrage), alimentation électrique de remplacement via le réseau de distribution (convention avec le gestionnaire), stockages supplémentaires (réservoirs flexibles), interconnexions avec services voisins, distribution par camion-citerne.</p><p><strong>Communication de crise :</strong> chaîne d\'alerte (astreinte → chef exploitation → directeur → élu → ARS si qualité → Préfecture si risque majeur). Messages usagers : délai estimé de rétablissement, recommandations d\'usage (eau non potable, restriction des arrosages). Ne pas promettre une durée de rétablissement non maîtrisée.</p>' },
      { titre: 'E. Méthodes professionnelles', texte: '<p><strong>Élaboration du PCA en 5 phases :</strong></p><ol><li>Identification des scénarios (analyse de risques, REX d\'autres services, risques locaux).</li><li>Pour chaque scénario : délai maximal acceptable avant impact sur les usagers, fonctions minimales à maintenir, ressources nécessaires (personnel, matériel, énergie).</li><li>Rédaction des procédures de réponse : qui fait quoi dans les premières 2 h, 6 h, 24 h.</li><li>Vérification de la disponibilité des ressources et moyens de secours.</li><li>Tests et exercices annuels (simulation de crise sur table, test des groupes électrogènes, test de l\'interconnexion).</li></ol>' },
      { titre: 'F. Formules et exemples résolus', texte: '<p><strong>Calcul de l\'autonomie du réservoir :</strong><br>t_autonomie = V_utile (m³) / Q_consommation (m³/h)<br>Exemple : réservoir 1 200 m³, volume utile 900 m³ (90 % - 10 % mort), consommation de pointe 85 m³/h (sans pompage). Autonomie = 900 / 85 = <strong>10,6 heures</strong>. Délai maximum avant intervention : 10 h. Si pompage disponible à 50 % (1 groupe sur 2) : Q_pompage = 60 m³/h, Q_net = 60 − 85 = −25 m³/h (descente lente) → nouveau délai avant fond : 900/25 = <strong>36 heures</strong>.</p>' },
      { titre: 'G. Dysfonctionnements et limites', texte: '<p>Les PCA non testés sont souvent inadaptés à la réalité de la crise : procédures trop longues, contacts obsolètes, groupes électrogènes non maintenus. L\'exercice annuel sur table minimum est indispensable. Les conventions d\'interconnexion avec les services voisins doivent être formalisées et testées : une interconnexion théorique mais jamais mise en service ne peut pas être fiable lors d\'une vraie crise.</p>' },
      { titre: 'H. Fiche de révision', texte: '<p>PCA = scénarios identifiés + procédures + responsables + délais + moyens. Priorités : hôpitaux > incendie > usagers généraux. Autonomie réservoir = volume utile / débit consommé. Communication : ne pas promettre une durée non maîtrisée. Exercice annuel obligatoire pour maintenir l\'opérationnalité du PCA.</p>' }
    ],
    points: [
      'PCA : scénarios → procédures → responsables → délais → ressources → exercices',
      'Autonomie réservoir = volume utile / débit consommé (en heures)',
      'Priorités eau : hôpitaux/EHPAD > défense incendie > usagers généraux',
      'Groupes électrogènes : tests démarrage mensuels + vérification gasoil + maintien contrat entretien',
      'Communication de crise : chaîne d\'alerte formalisée, ne pas promettre une durée non maîtrisée',
      'Interconnexions avec services voisins : formalisées et testées, pas seulement théoriques',
      'Exercice de crise annuel indispensable pour valider les procédures et les contacts'
    ],
    formules: [
      't_autonomie = V_utile (m³) / Q_consommation (m³/h)',
      'Q_net = Q_pompage_secours − Q_consommation (si négatif : vidange lente)'
    ],
    retenir: 'La continuité d\'exploitation repose sur un PCA construit sur des scénarios réalistes, testé annuellement et maintenu à jour. L\'autonomie du réservoir est le paramètre clé pour prioriser les interventions en cas de panne de pompage. La communication avec les autorités et les usagers doit être préparée à l\'avance.'
  },
  exercices: [
    { n: 1, enonce: 'Un réservoir de 800 m³ (volume utile 700 m³) alimente une commune de 3 200 habitants. La consommation moyenne est de 45 m³/h. Calculer l\'autonomie sans pompage. La pompe de secours assure 30 m³/h. Calculer le délai avant que le réservoir atteigne le niveau mort avec la pompe de secours.', solution: 'Autonomie sans pompage : 700 / 45 = <strong>15,6 heures</strong>.<br>Avec pompe secours : Q_net = 30 − 45 = −15 m³/h. Délai = 700 / 15 = <strong>46,7 heures</strong>. La pompe de secours triple l\'autonomie, donnant le temps de réparer l\'équipement principal.' }
  ],
  flashcards: [
    { q: 'Quelle est la priorité d\'alimentation en eau en situation de pénurie ou de panne de pompage ?', r: '1. Établissements de santé (hôpitaux, dialyse, EHPAD), 2. Défense incendie, 3. Usagers généraux', expl: 'Certains services peuvent mettre en place des restrictions d\'arrosage ou de lavage pour préserver les usages prioritaires. Le service peut sectionner des secteurs non prioritaires pour maintenir la pression dans les zones critiques.' }
  ]
},

'LP-EAU-060': {
  fiche: {
    intro: 'L\'analyse technico-économique permet de comparer objectivement des solutions d\'amélioration d\'une installation (remplacement d\'équipement, automatisation, nouveaux procédés) en tenant compte du coût global sur toute la durée de vie et de la valeur temporelle de l\'argent. Les outils VAN, TRI et analyse de sensibilité permettent de justifier un investissement face à une collectivité ou un maître d\'ouvrage.',
    sections: [
      { titre: 'A. Situation professionnelle et objectifs', texte: '<p>Le syndicat des Trois Rivières étudie trois options pour moderniser sa station de pompage : (A) remplacement simple des pompes usées, (B) remplacement avec variateurs de vitesse et télésurveillance, (C) refonte complète avec automatisation avancée. Les élus demandent une analyse économique sur 20 ans pour arbitrer. Objectifs : calculer les coûts globaux, actualiser les flux, calculer VAN et TRI pour chaque option.</p>' },
      { titre: 'B. Ce chapitre approfondit par rapport au BTS/BTSA', texte: '<p>Au BTS/BTSA, vous avez calculé des puissances et des consommations. Ce chapitre vous amène à réaliser une <em>analyse économique complète</em> incluant l\'actualisation financière, le coût total de possession (TCO), le calcul du VAN et du TRI, et l\'analyse de sensibilité aux hypothèses clés.</p>' },
      { titre: 'C. Rappel ciblé', texte: '<p>La <strong>valeur actualisée nette (VAN)</strong> mesure la valeur d\'un investissement en tenant compte du fait qu\'un euro aujourd\'hui vaut plus qu\'un euro dans 10 ans (valeur temporelle de l\'argent). Le <strong>taux d\'actualisation</strong> (souvent 4 % pour les collectivités) représente le coût du capital ou le taux de rendement alternatif. VAN > 0 : l\'investissement est rentable. <strong>TRI</strong> = taux d\'actualisation pour lequel VAN = 0 ; plus le TRI est élevé, plus l\'investissement est attractif.</p>' },
      { titre: 'D. Notions et mécanismes', texte: '<p><strong>Coût total de possession (TCO — Total Cost of Ownership) :</strong> somme de tous les coûts sur la durée de vie : acquisition + installation + formation + énergie + maintenance préventive + maintenance corrective − valeur résiduelle. Permet de comparer des équipements avec des profils coût/performance différents (ex. : pompe bon marché à maintenance fréquente vs. pompe performante à coût initial élevé).</p><p><strong>Actualisation :</strong> les flux futurs sont ramenés à leur valeur présente en les divisant par (1+r)^t. Facteur d\'actualisation a_t = 1/(1+r)^t. VAN = −I₀ + Σ[Ft × a_t] où I₀ = investissement initial, Ft = flux net annuel (économies − coûts), t = année.</p><p><strong>Délai de retour sur investissement simple (TRC) :</strong> I₀ / Économie annuelle. Simple mais ne tient pas compte de l\'actualisation ni des variations annuelles. Utilisé pour les décisions rapides.</p><p><strong>Analyse de sensibilité :</strong> faire varier les hypothèses clés (prix de l\'énergie, taux d\'actualisation, durée de vie, coût de maintenance) et observer l\'impact sur la VAN. Identifie les paramètres critiques pour la rentabilité.</p>' },
      { titre: 'E. Méthodes professionnelles', texte: '<p><strong>Protocole d\'analyse TCO-VAN en 6 étapes :</strong></p><ol><li>Définir la durée d\'analyse (durée de vie de l\'équipement ou horizon de décision).</li><li>Inventorier tous les flux : investissement initial, coûts annuels (énergie + maintenance), économies par rapport au statu quo, valeur résiduelle à la fin.</li><li>Construire le tableau des flux actualisés année par année.</li><li>Calculer la VAN à différents taux d\'actualisation.</li><li>Calculer le TRI par itération ou par la fonction TRI d\'un tableur.</li><li>Analyser la sensibilité : faire varier le prix de l\'énergie ±20 % et la durée de vie ±5 ans.</li></ol>' },
      { titre: 'F. Formules et exemples résolus', texte: '<p><strong>Formule de la VAN :</strong><br>VAN = −I₀ + Σ[Ft / (1+r)^t] pour t de 1 à n<br>Exemple simplifié : remplacement d\'une pompe, I₀ = 12 000 €, économie annuelle Ft = 2 400 €/an pendant 10 ans, taux r = 4 %.<br>Annuité actualisée = 2 400 × [1 − (1,04)^(-10)] / 0,04 = 2 400 × 8,111 = 19 466 €.<br>VAN = −12 000 + 19 466 = <strong>+7 466 €</strong>. Investissement rentable (VAN > 0).</p><p><strong>TRI :</strong> taux r pour lequel VAN = 0. Dans l\'exemple : I₀ = 12 000, Ft = 2 400 → TRI ≈ 15,1 % (calculé par tableur ou par essais successifs). TRI > 4 % (taux d\'actualisation) confirme la rentabilité.</p>' },
      { titre: 'G. Dysfonctionnements et limites', texte: '<p>Ne pas confondre TRC (délai simple) et TRI (taux actualisé). Le TRC ignore la valeur temporelle de l\'argent et les flux variables — il surestime la rentabilité pour les projets à longue durée de vie. Les hypothèses d\'économies d\'énergie sont sensibles au prix futur de l\'électricité — une analyse de sensibilité sur ±30 % du prix est indispensable. Ne pas oublier les coûts de démantèlement ou de dépollution dans le TCO des équipements de traitement chimique.</p>' },
      { titre: 'H. Fiche de révision', texte: '<p>TCO = acquisition + installation + énergie + maintenance − valeur résiduelle. VAN = −I₀ + Σ[Ft/(1+r)^t]. TRI = r pour VAN = 0. TRC = I₀ / économie annuelle (simple, non actualisé). Analyse de sensibilité : faire varier prix énergie ±20 %, durée de vie ±5 ans. VAN > 0 et TRI > taux d\'actualisation → investissement justifié.</p>' }
    ],
    points: [
      'TCO (Total Cost of Ownership) = coût global sur toute la durée de vie',
      'VAN = −I₀ + Σ[Ft/(1+r)^t] — VAN > 0 : investissement rentable',
      'TRI = taux d\'actualisation pour VAN = 0 — comparer au taux cible (souvent 4-6 % collectivités)',
      'TRC (délai simple) = I₀ / économie annuelle — ne tient pas compte de l\'actualisation',
      'Facteur d\'actualisation : a_t = 1/(1+r)^t',
      'Analyse de sensibilité : varier les hypothèses clés pour identifier les paramètres critiques',
      'Prix de l\'énergie = paramètre le plus sensible pour les projets d\'optimisation énergétique'
    ],
    formules: [
      'VAN = −I₀ + Σ[Ft / (1+r)^t] (€)',
      'Facteur d\'actualisation : a_t = 1 / (1+r)^t',
      'TRC = I₀ / économie annuelle (ans, non actualisé)',
      'Annuité actualisée = F × [1 − (1+r)^(−n)] / r (flux constant F pendant n ans)'
    ],
    retenir: 'L\'analyse technico-économique justifie les investissements par le coût total de possession et la valeur actualisée nette, pas uniquement par le délai de retour simple. L\'analyse de sensibilité est indispensable car les hypothèses (prix énergie, durée de vie) influencent fortement les résultats sur 15-20 ans.'
  },
  exercices: [
    { n: 1, enonce: 'Un variateur de vitesse coûte 18 000 € à l\'installation. Les économies annuelles d\'énergie sont estimées à 4 500 €/an. Durée de vie 15 ans, valeur résiduelle nulle, taux d\'actualisation 4 %. Calculer VAN et TRI.', solution: 'Annuité actualisée (15 ans, 4 %) = 4 500 × [1 − 1,04^(-15)] / 0,04 = 4 500 × 11,118 = 50 032 €.<br>VAN = −18 000 + 50 032 = <strong>+32 032 €</strong>. Investissement très rentable.<br>TRI : par tableur, TRI ≈ <strong>24,8 %</strong> (bien supérieur au taux cible 4 %). TRC simple = 18 000 / 4 500 = <strong>4 ans</strong>.' },
    { n: 2, enonce: 'Mêmes données que l\'exercice 1, mais le prix de l\'énergie augmente de 30 % (économies = 5 850 €/an) ou diminue de 20 % (économies = 3 600 €/an). Calculer les VAN dans chaque cas et commenter la sensibilité.', solution: 'Prix +30 % : Annuité = 5 850 × 11,118 = 65 040. VAN = −18 000 + 65 040 = <strong>+47 040 €</strong>.<br>Prix −20 % : Annuité = 3 600 × 11,118 = 40 025. VAN = −18 000 + 40 025 = <strong>+22 025 €</strong>.<br>Dans tous les cas VAN > 0 : l\'investissement est robuste face aux variations de prix de l\'énergie. Le TRC simple varie de 3,1 à 5 ans.' }
  ],
  flashcards: [
    { q: 'Quelle est la différence entre TRC (délai de retour simple) et TRI (taux de rentabilité interne) ?', r: 'TRC = I₀ / économie annuelle (en années, simple). TRI = taux d\'actualisation qui annule la VAN (tient compte de la valeur temporelle de l\'argent et des flux variables)', expl: 'Le TRC est simple à calculer mais surestime la rentabilité pour les projets longs. Le TRI est plus rigoureux mais nécessite un tableur ou des itérations. Pour les collectivités, comparer le TRI au taux d\'emprunt (souvent 3-5 %).' }
  ]
},

};
