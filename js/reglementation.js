/* ─── RENDER SPANC ─── */
/* ═══ SPANC — 101 départements ═══ */
const SPANC_DEPTS = [
  {num:'01',name:'Ain',region:'Auvergne-Rhône-Alpes',agence:'RMC',taux:'20–40%',contact:'CD01 - Direction eau et milieux aquatiques',oblig:'Contrôle tous les 10 ans · Rapport avant vente obligatoire'},
  {num:'02',name:'Aisne',region:'Hauts-de-France',agence:'AESN',taux:'30–50%',contact:'SPANC Aisne : demarches.aisne.fr',oblig:'Zones captages prioritaires · Contrôle renforcé'},
  {num:'03',name:'Allier',region:'Auvergne-Rhône-Alpes',agence:'AELB',taux:'30–40%',contact:'CD03 - Service eau et assainissement',oblig:'Contrôle décennal · Rapport avant vente'},
  {num:'04',name:'Alpes-de-Haute-Provence',region:'Provence-Alpes-Côte d\'Azur',agence:'RMC',taux:'20–40%',contact:'CD04 - Service assainissement',oblig:'Contrôle tous les 10 ans'},
  {num:'05',name:'Hautes-Alpes',region:'Provence-Alpes-Côte d\'Azur',agence:'RMC',taux:'30–50%',contact:'CD05 - Direction eau',oblig:'Têtes de bassin alpines prioritaires'},
  {num:'06',name:'Alpes-Maritimes',region:'Provence-Alpes-Côte d\'Azur',agence:'RMC',taux:'20–40%',contact:'CD06 - Service ANC : cg06.fr',oblig:'Zones côtières méditerranéennes prioritaires'},
  {num:'07',name:'Ardèche',region:'Auvergne-Rhône-Alpes',agence:'RMC',taux:'30–50%',contact:'CD07 - SPANC',oblig:'Zones Natura 2000 · Contrôle renforcé'},
  {num:'08',name:'Ardennes',region:'Grand Est',agence:'AERM',taux:'25–40%',contact:'CD08 - Service eau',oblig:'Zones captages Meuse prioritaires'},
  {num:'09',name:'Ariège',region:'Occitanie',agence:'AEAG',taux:'40–60%',contact:'CD09 - SPANC Ariège',oblig:'Têtes de bassin Pyrénées · Taux majorés zones sensibles'},
  {num:'10',name:'Aube',region:'Grand Est',agence:'AESN',taux:'30–45%',contact:'CD10 - Service ANC',oblig:'Nappe de Champagne zone prioritaire'},
  {num:'11',name:'Aude',region:'Occitanie',agence:'RMC',taux:'20–40%',contact:'CD11 - Direction eau',oblig:'Zones côtières méditerranéennes'},
  {num:'12',name:'Aveyron',region:'Occitanie',agence:'AEAG',taux:'35–55%',contact:'CD12 - Service SPANC',oblig:'Causses karstiques · Vulnérabilité élevée'},
  {num:'13',name:'Bouches-du-Rhône',region:'Provence-Alpes-Côte d\'Azur',agence:'RMC',taux:'20–35%',contact:'CD13 - SPANC : departement13.fr',oblig:'Zones côtières et littoral prioritaires'},
  {num:'14',name:'Calvados',region:'Normandie',agence:'AESN',taux:'35–50%',contact:'CD14 - Service eau : calvados.fr',oblig:'Zones côtières Manche et captages prioritaires'},
  {num:'15',name:'Cantal',region:'Auvergne-Rhône-Alpes',agence:'AEAG/AELB',taux:'40–60%',contact:'CD15 - Service ANC',oblig:'Têtes de bassin · Zones Natura 2000 nombreuses'},
  {num:'16',name:'Charente',region:'Nouvelle-Aquitaine',agence:'AEAG',taux:'30–50%',contact:'CD16 - Direction eau : charente.fr',oblig:'Karst charentais · Zones captages prioritaires'},
  {num:'17',name:'Charente-Maritime',region:'Nouvelle-Aquitaine',agence:'AEAG',taux:'30–50%',contact:'CD17 - SPANC : charente-maritime.fr',oblig:'Zones ostréicoles prioritaires · Bassin Marennes-Oléron'},
  {num:'18',name:'Cher',region:'Centre-Val de Loire',agence:'AELB',taux:'30–40%',contact:'CD18 - Service assainissement',oblig:'Bassins versants Loire et Cher'},
  {num:'19',name:'Corrèze',region:'Nouvelle-Aquitaine',agence:'AEAG/AELB',taux:'35–55%',contact:'CD19 - SPANC : correze.fr',oblig:'Têtes de bassin Massif Central · Captages nombreux'},
  {num:'21',name:'Côte-d\'Or',region:'Bourgogne-Franche-Comté',agence:'RMC',taux:'20–35%',contact:'CD21 - Direction eau : cotedor.fr',oblig:'Zones captages Bourgogne'},
  {num:'22',name:'Côtes-d\'Armor',region:'Bretagne',agence:'AELB',taux:'50–70%',contact:'CD22 - SPANC : cotesdarmor.fr',oblig:'Zones algues vertes baie Saint-Brieuc · Programme Breizh-Bocage'},
  {num:'23',name:'Creuse',region:'Nouvelle-Aquitaine',agence:'AEAG/AELB',taux:'35–50%',contact:'CD23 - Service eau : creuse.fr',oblig:'Zone rurale · Fort taux ANC non conformes'},
  {num:'24',name:'Dordogne',region:'Nouvelle-Aquitaine',agence:'AEAG',taux:'30–50%',contact:'CD24 - SPANC : dordogne.fr',oblig:'Karst périgourdin · Captages karstiques prioritaires'},
  {num:'25',name:'Doubs',region:'Bourgogne-Franche-Comté',agence:'RMC',taux:'30–50%',contact:'CD25 - Service ANC : doubs.fr',oblig:'Karst jurassien · Vulnérabilité maximale'},
  {num:'26',name:'Drôme',region:'Auvergne-Rhône-Alpes',agence:'RMC',taux:'20–40%',contact:'CD26 - Direction eau : ladrome.fr',oblig:'Bassins versants Drôme et Rhône'},
  {num:'27',name:'Eure',region:'Normandie',agence:'AESN',taux:'35–50%',contact:'CD27 - SPANC : eure.fr',oblig:'Zones vulnérables nitrates · Nappe Chalk prioritaire'},
  {num:'28',name:'Eure-et-Loir',region:'Centre-Val de Loire',agence:'AESN/AELB',taux:'30–45%',contact:'CD28 - Service eau : eureloir.fr',oblig:'Nappe de Beauce ZRE · Zone ultra-sensible'},
  {num:'29',name:'Finistère',region:'Bretagne',agence:'AELB',taux:'50–70%',contact:'SPANC CD29 : finistere.fr',oblig:'Zones algues vertes prioritaires · Baies Douarnenez et Brest'},
  {num:'30',name:'Gard',region:'Occitanie',agence:'RMC',taux:'20–40%',contact:'CD30 - SPANC : gard.fr',oblig:'Garrigues karstiques · Zones Camargue'},
  {num:'31',name:'Haute-Garonne',region:'Occitanie',agence:'AEAG',taux:'30–50%',contact:'CD31 - Direction eau : haute-garonne.fr',oblig:'Zones captages Garonne · Programme spécifique'},
  {num:'32',name:'Gers',region:'Occitanie',agence:'AEAG',taux:'30–50%',contact:'CD32 - SPANC : gers.fr',oblig:'Fort taux ANC anciens · Priorité régionale'},
  {num:'33',name:'Gironde',region:'Nouvelle-Aquitaine',agence:'AEAG',taux:'25–45%',contact:'CD33 - Service ANC : gironde.fr',oblig:'Zones ostréicoles Bassin d\'Arcachon prioritaires'},
  {num:'34',name:'Hérault',region:'Occitanie',agence:'RMC',taux:'20–40%',contact:'CD34 - Direction eau : herault.fr',oblig:'Zones côtières et lagunaires · Lagune de Thau'},
  {num:'35',name:'Ille-et-Vilaine',region:'Bretagne',agence:'AELB',taux:'50–70%',contact:'SPANC CD35 : ille-et-vilaine.fr',oblig:'Baie du Mont-Saint-Michel · Zones algues vertes'},
  {num:'36',name:'Indre',region:'Centre-Val de Loire',agence:'AELB',taux:'30–40%',contact:'CD36 - Service ANC : indre.fr',oblig:'Zone rurale · Fort taux ANC non conformes'},
  {num:'37',name:'Indre-et-Loire',region:'Centre-Val de Loire',agence:'AELB',taux:'30–40%',contact:'CD37 - SPANC : touraine.fr',oblig:'Zones captages Loire moyenne'},
  {num:'38',name:'Isère',region:'Auvergne-Rhône-Alpes',agence:'RMC',taux:'20–40%',contact:'CD38 - Direction eau : isere.fr',oblig:'Chartreuse et Vercors · Zones Natura 2000'},
  {num:'39',name:'Jura',region:'Bourgogne-Franche-Comté',agence:'RMC',taux:'30–50%',contact:'CD39 - SPANC : jura.fr',oblig:'Karst jurassien · Transit rapide des polluants'},
  {num:'40',name:'Landes',region:'Nouvelle-Aquitaine',agence:'AEAG',taux:'25–45%',contact:'CD40 - Service eau : landes.fr',oblig:'Zones captages et bassins versants landais'},
  {num:'41',name:'Loir-et-Cher',region:'Centre-Val de Loire',agence:'AELB',taux:'30–40%',contact:'CD41 - SPANC : loir-et-cher.fr',oblig:'Sologne · Zones humides vulnérables'},
  {num:'42',name:'Loire',region:'Auvergne-Rhône-Alpes',agence:'AELB/RMC',taux:'30–45%',contact:'CD42 - Direction eau : loire.fr',oblig:'Massif Central et Pilat · Têtes de bassin'},
  {num:'43',name:'Haute-Loire',region:'Auvergne-Rhône-Alpes',agence:'AELB',taux:'40–60%',contact:'CD43 - SPANC : hauteloire.fr',oblig:'Têtes de bassin haute Loire · Natura 2000'},
  {num:'44',name:'Loire-Atlantique',region:'Pays de la Loire',agence:'AELB',taux:'35–50%',contact:'CD44 - Service ANC : loire-atlantique.fr',oblig:'Zones côtières et estuaire Loire · Zones ostréicoles'},
  {num:'45',name:'Loiret',region:'Centre-Val de Loire',agence:'AELB/AESN',taux:'30–45%',contact:'CD45 - SPANC : loiret.fr',oblig:'Nappe de Beauce ZRE · 1ère nappe d\'Europe'},
  {num:'46',name:'Lot',region:'Occitanie',agence:'AEAG',taux:'35–60%',contact:'CD46 - Direction eau : lot.fr',oblig:'Causses karstiques · Urgence nationale contamination'},
  {num:'47',name:'Lot-et-Garonne',region:'Nouvelle-Aquitaine',agence:'AEAG',taux:'30–50%',contact:'CD47 - SPANC : lotetgaronne.fr',oblig:'Garonne et affluents · Zones captages Agen'},
  {num:'48',name:'Lozère',region:'Occitanie',agence:'RMC/AEAG',taux:'40–60%',contact:'CD48 - Service eau : lozere.fr',oblig:'Têtes de bassin · Priorité ANC rurale isolée'},
  {num:'49',name:'Maine-et-Loire',region:'Pays de la Loire',agence:'AELB',taux:'30–45%',contact:'CD49 - SPANC : maine-et-loire.fr',oblig:'Val de Loire · Zones captages Layon'},
  {num:'50',name:'Manche',region:'Normandie',agence:'AESN',taux:'35–50%',contact:'CD50 - Direction eau : manche.fr',oblig:'Zones côtières Manche · Zones baignade prioritaires'},
  {num:'51',name:'Marne',region:'Grand Est',agence:'AESN/AERM',taux:'30–45%',contact:'CD51 - SPANC : marne.fr',oblig:'Nappe de Champagne crayeuse · Zones captages'},
  {num:'52',name:'Haute-Marne',region:'Grand Est',agence:'AERM',taux:'25–40%',contact:'CD52 - Service ANC : hautemarne.fr',oblig:'Sources captées nombreuses · Têtes de bassin Marne'},
  {num:'53',name:'Mayenne',region:'Pays de la Loire',agence:'AELB',taux:'30–50%',contact:'CD53 - SPANC : mayenne.fr',oblig:'Zones captages · Zones vulnérables nitrates'},
  {num:'54',name:'Meurthe-et-Moselle',region:'Grand Est',agence:'AERM',taux:'25–40%',contact:'CD54 - Direction eau : meurthe-et-moselle.fr',oblig:'Nappe des grès vosgiens · Zones industrielles'},
  {num:'55',name:'Meuse',region:'Grand Est',agence:'AERM',taux:'25–40%',contact:'CD55 - SPANC : meuse.fr',oblig:'Karst meusien · Zones vulnérables prioritaires'},
  {num:'56',name:'Morbihan',region:'Bretagne',agence:'AELB',taux:'50–70%',contact:'SPANC CD56 : morbihan.fr',oblig:'Zones algues vertes · Zones ostréicoles · CD56 aide complémentaire 10–15%'},
  {num:'57',name:'Moselle',region:'Grand Est',agence:'AERM',taux:'25–40%',contact:'CD57 - Service eau : moselle.fr',oblig:'Moselle et affluents · Zones minières'},
  {num:'58',name:'Nièvre',region:'Bourgogne-Franche-Comté',agence:'AELB',taux:'30–45%',contact:'CD58 - SPANC : nievre.fr',oblig:'Zone rurale · Fort taux ANC non conformes'},
  {num:'59',name:'Nord',region:'Hauts-de-France',agence:'ARTOIS-PICARDIE',taux:'30–50%',contact:'CD59 - Direction eau : lenord.fr',oblig:'Zones captages Flandres · Programme ANC zones rurales'},
  {num:'60',name:'Oise',region:'Hauts-de-France',agence:'AESN/AP',taux:'30–45%',contact:'CD60 - SPANC : oise.fr',oblig:'Zones captages Oise · Zones vulnérables nitrates'},
  {num:'61',name:'Orne',region:'Normandie',agence:'AESN',taux:'35–50%',contact:'CD61 - Service eau : orne.fr',oblig:'Bocage normand · Zones captages Suisse normande'},
  {num:'62',name:'Pas-de-Calais',region:'Hauts-de-France',agence:'ARTOIS-PICARDIE',taux:'35–50%',contact:'CD62 - SPANC : pasdecalais.fr',oblig:'Zones côtières · Zones vulnérables nitrates'},
  {num:'63',name:'Puy-de-Dôme',region:'Auvergne-Rhône-Alpes',agence:'AEAG/AELB',taux:'35–55%',contact:'CD63 - Direction eau : puydedome.fr',oblig:'Massif Central · Chaîne des Puys Natura 2000'},
  {num:'64',name:'Pyrénées-Atlantiques',region:'Nouvelle-Aquitaine',agence:'AEAG',taux:'40–60%',contact:'CD64 - SPANC : le64.fr',oblig:'Têtes de bassin Pyrénées · Natura 2000 Pays Basque'},
  {num:'65',name:'Hautes-Pyrénées',region:'Occitanie',agence:'AEAG',taux:'45–65%',contact:'CD65 - Service ANC : hautes-pyrenees.fr',oblig:'Têtes de bassin · Zone touristique · Forte pression estivale'},
  {num:'66',name:'Pyrénées-Orientales',region:'Occitanie',agence:'RMC',taux:'20–40%',contact:'CD66 - SPANC : le66.fr',oblig:'Zones côtières méditerranéennes · Stress hydrique'},
  {num:'67',name:'Bas-Rhin',region:'Grand Est',agence:'AERM',taux:'30–45%',contact:'CD67 - Direction eau : bas-rhin.fr',oblig:'Nappe alluviale du Rhin · PRIORITÉ ABSOLUE'},
  {num:'68',name:'Haut-Rhin',region:'Grand Est',agence:'AERM',taux:'30–45%',contact:'CD68 - SPANC : haut-rhin.fr',oblig:'Nappe alluviale du Rhin · Zone ultra-sensible'},
  {num:'69',name:'Rhône',region:'Auvergne-Rhône-Alpes',agence:'RMC',taux:'20–35%',contact:'CD69 - Service eau : rhone.fr',oblig:'Beaujolais · Zones captages'},
  {num:'70',name:'Haute-Saône',region:'Bourgogne-Franche-Comté',agence:'RMC',taux:'25–40%',contact:'CD70 - SPANC : haute-saone.fr',oblig:'Bassins versants Saône · Zones captages agricoles'},
  {num:'71',name:'Saône-et-Loire',region:'Bourgogne-Franche-Comté',agence:'RMC/AELB',taux:'25–40%',contact:'CD71 - Direction eau : saoneetloire.fr',oblig:'Zones viticoles · Sensibilité pesticides'},
  {num:'72',name:'Sarthe',region:'Pays de la Loire',agence:'AELB',taux:'30–45%',contact:'CD72 - SPANC : sarthe.fr',oblig:'Zones captages prioritaires Sarthe'},
  {num:'73',name:'Savoie',region:'Auvergne-Rhône-Alpes',agence:'RMC',taux:'25–45%',contact:'CD73 - Service ANC : savoie.fr',oblig:'Têtes de bassin alpines · Lacs glaciaires · Natura 2000'},
  {num:'74',name:'Haute-Savoie',region:'Auvergne-Rhône-Alpes',agence:'RMC',taux:'25–45%',contact:'CD74 - SPANC : hautesavoie.fr',oblig:'Lac Léman et lac d\'Annecy · PRIORITÉ MAXIMALE'},
  {num:'75',name:'Paris',region:'Île-de-France',agence:'AESN',taux:'—',contact:'Mairie de Paris : paris.fr',oblig:'Réseau collectif quasi-total · ANC exceptionnel'},
  {num:'76',name:'Seine-Maritime',region:'Normandie',agence:'AESN',taux:'35–50%',contact:'CD76 - Direction eau : seine-maritime.fr',oblig:'Nappe de la Craie · Karst crayeux normand'},
  {num:'77',name:'Seine-et-Marne',region:'Île-de-France',agence:'AESN',taux:'30–45%',contact:'CD77 - SPANC : seine-et-marne.fr',oblig:'Zones rurales franciliennes · Nappes prioritaires'},
  {num:'78',name:'Yvelines',region:'Île-de-France',agence:'AESN',taux:'30–40%',contact:'CD78 - Service eau : yvelines.fr',oblig:'Vallée de Seine · Nappes franciliennes'},
  {num:'79',name:'Deux-Sèvres',region:'Nouvelle-Aquitaine',agence:'AEAG/AELB',taux:'30–50%',contact:'CD79 - SPANC : deux-sevres.fr',oblig:'Marais poitevin · Zones humides Natura 2000'},
  {num:'80',name:'Somme',region:'Hauts-de-France',agence:'ARTOIS-PICARDIE',taux:'30–50%',contact:'CD80 - Direction eau : somme.fr',oblig:'Nappe de la Craie picardie · Zones captages Amiens'},
  {num:'81',name:'Tarn',region:'Occitanie',agence:'AEAG',taux:'30–50%',contact:'CD81 - SPANC : tarn.fr',oblig:'Bassins versants Tarn · Montagne Noire'},
  {num:'82',name:'Tarn-et-Garonne',region:'Occitanie',agence:'AEAG',taux:'30–50%',contact:'CD82 - Service ANC : tarn-et-garonne.fr',oblig:'Garonne et bassins versants'},
  {num:'83',name:'Var',region:'Provence-Alpes-Côte d\'Azur',agence:'RMC',taux:'20–40%',contact:'CD83 - SPANC : var.fr',oblig:'Zones côtières méditerranéennes · Forte pression touristique'},
  {num:'84',name:'Vaucluse',region:'Provence-Alpes-Côte d\'Azur',agence:'RMC',taux:'20–40%',contact:'CD84 - Direction eau : vaucluse.fr',oblig:'Fontaine de Vaucluse · Plus grand débit karst Europe'},
  {num:'85',name:'Vendée',region:'Pays de la Loire',agence:'AELB',taux:'30–50%',contact:'CD85 - SPANC : vendee.fr',oblig:'Zones côtières · Marais breton vendéen'},
  {num:'86',name:'Vienne',region:'Nouvelle-Aquitaine',agence:'AEAG',taux:'30–50%',contact:'CD86 - Service eau : vienne.fr',oblig:'Karst viennois · Zones captages prioritaires'},
  {num:'87',name:'Haute-Vienne',region:'Nouvelle-Aquitaine',agence:'AEAG/AELB',taux:'35–55%',contact:'CD87 - SPANC : haute-vienne.fr',oblig:'Têtes de bassin Massif Central · Fort taux ANC NC'},
  {num:'88',name:'Vosges',region:'Grand Est',agence:'AERM',taux:'30–50%',contact:'CD88 - Direction eau : vosges.fr',oblig:'Grès vosgiens · Ressource stratégique Alsace-Lorraine'},
  {num:'89',name:'Yonne',region:'Bourgogne-Franche-Comté',agence:'AESN',taux:'30–45%',contact:'CD89 - SPANC : yonne.fr',oblig:'Karst bourguignon · Zones vulnérabilité élevée'},
  {num:'90',name:'Territoire de Belfort',region:'Bourgogne-Franche-Comté',agence:'AERM',taux:'25–40%',contact:'CD90 - Service ANC : territoiredebelfort.fr',oblig:'Bassins versants Savoureuse'},
  {num:'91',name:'Essonne',region:'Île-de-France',agence:'AESN',taux:'30–45%',contact:'CD91 - SPANC : essonne.fr',oblig:'Zones rurales · Nappe de Beauce sud ZRE'},
  {num:'92',name:'Hauts-de-Seine',region:'Île-de-France',agence:'AESN',taux:'—',contact:'CD92 : hauts-de-seine.fr',oblig:'Réseau collectif quasi-total · ANC marginal'},
  {num:'93',name:'Seine-Saint-Denis',region:'Île-de-France',agence:'AESN',taux:'—',contact:'CD93 : seinesaintdenis.fr',oblig:'Réseau collectif quasi-total'},
  {num:'94',name:'Val-de-Marne',region:'Île-de-France',agence:'AESN',taux:'—',contact:'CD94 : valdemarne.fr',oblig:'Réseau collectif quasi-total'},
  {num:'95',name:'Val-d\'Oise',region:'Île-de-France',agence:'AESN',taux:'30–45%',contact:'CD95 - SPANC : valdoise.fr',oblig:'Zones rurales nord francilien · Captages Oise'},
  {num:'971',name:'Guadeloupe',region:'Outre-Mer',agence:'ODE Guadeloupe',taux:'Variable',contact:'ODE Guadeloupe : eauguadeloupe.fr',oblig:'Régime spécifique DOM · Contacter SPANC local'},
  {num:'972',name:'Martinique',region:'Outre-Mer',agence:'ODE Martinique',taux:'Variable',contact:'ODE Martinique : eau-martinique.fr',oblig:'Régime spécifique DOM · Contacter SPANC local'},
  {num:'973',name:'Guyane',region:'Outre-Mer',agence:'ODE Guyane',taux:'Variable',contact:'CTG Guyane : ct-guyane.fr',oblig:'Programme eau spécifique · Contacter collectivité'},
  {num:'974',name:'La Réunion',region:'Outre-Mer',agence:'ODE Réunion',taux:'Variable',contact:'ODE Réunion : ode-reunion.fr',oblig:'Régime spécifique DOM · Contacter SPANC local'},
  {num:'976',name:'Mayotte',region:'Outre-Mer',agence:'DEAL Mayotte',taux:'Variable',contact:'Préfecture de Mayotte : mayotte.pref.gouv.fr',oblig:'Développement assainissement prioritaire'},
];

const SPANC_REGIONS = [...new Set(SPANC_DEPTS.map(d=>d.region))].sort();

function renderSPANC() {
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color:var(--c-ep)">
      <span class="mh-icon">🗺️</span>
      <div class="mh-title">SPANC — 101 départements</div>
      <div class="mh-sub">Recherchez par numéro, nom ou région · Contacts · Agences · Taux d\'aide</div>
      <div class="mh-tags"><span class="mh-tag">101 depts</span><span class="mh-tag">Recherche instantanée</span><span class="mh-tag">Aides locales</span></div>
    </div>

    <div style="padding:var(--s-3) var(--s-4) var(--s-2)">
      <div class="search-bar" style="margin-bottom:var(--s-2)">
        <span class="search-ico">🔍</span>
        <input type="text" id="spanc-search"
          placeholder="Tapez un numéro (ex: 29) ou un nom (ex: Finistère)…"
          oninput="filterSPANC()"
          style="font-size:var(--t-base);font-weight:600">
      </div>
      <div style="font-size:var(--t-xs);font-weight:700;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:var(--s-2)">Filtrer par région</div>
      <div style="display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:4px" id="spanc-regions">
        <button class="tab-pill active" onclick="setReglionSPANC('',this)">Tous</button>
        ${SPANC_REGIONS.map(r=>`<button class="tab-pill" onclick="setReglionSPANC('${r}',this)">${r}</button>`).join('')}
      </div>
    </div>

    <div class="section-header" id="spanc-count-h">101 départements<span class="sh-count" id="spanc-count">101</span></div>
    <div id="spanc-list" style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)"></div>
    <div class="pb-nav"></div>`;

  window.spanc_region = '';
  renderSPANCList();
}

function setReglionSPANC(region, btn) {
  window.spanc_region = region;
  document.querySelectorAll('#spanc-regions .tab-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  filterSPANC();
}

function filterSPANC() {
  const q = (getV('spanc-search')||'').toLowerCase().trim();
  const region = window.spanc_region || '';
  let list = SPANC_DEPTS.filter(d => {
    const matchRegion = !region || d.region === region;
    const matchQ = !q || d.num.includes(q) || d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q);
    return matchRegion && matchQ;
  });
  document.getElementById('spanc-count').textContent = list.length;
  renderSPANCList(list);
}

function renderSPANCList(list) {
  if(!list) list = SPANC_DEPTS;
  const container = document.getElementById('spanc-list');
  if(!container) return;
  if(!list.length) {
    container.innerHTML = `<div style="text-align:center;padding:40px;color:var(--c-text-3)">Aucun département trouvé</div>`;
    return;
  }
  container.innerHTML = list.map(d => {
    const taux = d.taux && d.taux !== '—' ? d.taux : null;
    return `<div class="dept-card" style="border-left:3px solid var(--c-ep)">
      <div class="dc-head">
        <div class="dc-num" style="font-size:${d.num.length>2?'10px':'11px'}">${d.num}</div>
        <div style="flex:1">
          <div class="dc-name">${d.name}</div>
          <div class="dc-region">${d.region}</div>
        </div>
        ${taux ? `<span class="badge badge-ok" style="flex-shrink:0">${taux}</span>` : ''}
      </div>
      <div style="display:flex;flex-direction:column;gap:5px">
        <div class="alert info" style="font-size:10px"><span class="alert-icon">📋</span><span>${d.oblig}</span></div>
        <div class="alert ok" style="font-size:10px"><span class="alert-icon">🌊</span><span>Agence : <strong>${d.agence}</strong>${taux ? ' · Taux aide : '+d.taux : ''}</span></div>
        <div class="alert warn" style="font-size:10px"><span class="alert-icon">🌐</span><span>${d.contact}</span></div>
      </div>
    </div>`;
  }).join('');
}

/* ─── RENDER AIDES ─── */
function renderAides() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  const aides = [
    {ico:'🏦',name:'Éco-PTZ ANC',org:'Banques partenaires',montant:'Jusqu\'à 10 000 €',color:'var(--c-aides)',colorl:'var(--c-aides-l)',desc:'Prêt à taux zéro sur 15 ans. Sans avance de fonds. Artisan RGE obligatoire. Résidence principale uniquement.'},
    {ico:'📉',name:'TVA réduite 5,5%',org:'Direction Générale des Finances Publiques',montant:'Automatique sur facture',color:'var(--c-ep)',colorl:'var(--c-ep-l)',desc:'S\'applique automatiquement sur la facture de l\'artisan pour tout logement de plus de 2 ans. Résidences principale et secondaire.'},
    {ico:'🌊',name:'Aides des Agences de l\'eau',org:'6 Agences · Programmes 2022–2027',montant:'20 à 70%',color:'var(--c-ac)',colorl:'var(--c-ac-l)',desc:'Subvention directe dans les zones à enjeux (captages Grenelle, baignade, algues vertes…). Demander AVANT les travaux.'},
    {ico:'🏗️',name:'ANAH — Propriétaires modestes',org:'Agence Nationale de l\'Habitat',montant:'Jusqu\'à 50%',color:'var(--c-orange,#9A4200)',colorl:'#FEF0E2',desc:'Pour propriétaires aux revenus modestes ou très modestes. Jusqu\'à 50% du montant HT. Dossier avant début des travaux.'},
  ];
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color: var(--c-aides)">
      <span class="mh-icon">💰</span>
      <div class="mh-title">Aides Financières ANC</div>
      <div class="mh-sub">Cumulez jusqu'à 4 aides · Éco-PTZ + TVA 5,5% + Agences eau + Aides locales</div>
      <div class="mh-tags"><span class="mh-tag">Jusqu'à 30 000 €</span><span class="mh-tag">Cumulables</span><span class="mh-tag">101 depts</span></div>
    </div>
    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p" style="background:linear-gradient(135deg,var(--c-aides-l),#fff)">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s-2)">
          ${[['Éco-PTZ','10 000 €'],['TVA 5,5%','Automatique'],['Agences','20–70%']].map(([k,v])=>`<div style="text-align:center"><div style="font-family:var(--f-display);font-size:var(--t-lg);color:var(--c-aides)">${v}</div><div style="font-size:9px;color:var(--c-text-3);text-transform:uppercase;letter-spacing:.04em;margin-top:2px">${k}</div></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="section-header" style="margin-top:var(--s-3)">🏦 Dispositifs disponibles<span class="sh-count">${aides.length}</span></div>
    <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
      ${aides.map(a=>`<div class="aide-card" style="border-left:3px solid ${a.color}">
        <div class="ac-top">
          <div class="ac-icon" style="background:${a.colorl}">${a.ico}</div>
          <div class="ac-info"><div class="ac-name">${a.name}</div><div class="ac-org">${a.org}</div></div>
          <div class="ac-amount" style="background:${a.color}">${a.montant}</div>
        </div>
        <div class="ac-body">${a.desc}</div>
      </div>`).join('')}
    </div>
    <div style="margin:var(--s-3) var(--s-4) 0">
      <div class="alert info"><span class="alert-icon">ℹ</span><span>Toutes les demandes doivent être faites <strong>avant le début des travaux</strong>. L'ordre conseillé : rapport SPANC → Agence de l'eau → ANAH → Éco-PTZ sur solde → TVA 5,5% automatique.</span></div>
    </div>
    <div class="pb-nav"></div>`;
}

/* ─── RENDER REGL ─── */
/* ═══ RÉGLEMENTATION — base de textes ═══ */
const REGL_TEXTES = {
  anc:[
    {ico:'🆕',year:2024,isNew:true,color:'var(--c-aides)',colorl:'var(--c-aides-l)',
     name:'Arrêté du 10 juillet 2024 — Prescriptions ANC révisées',
     ref:'NOR : TREL2412832A · JORF 13/07/2024 · En vigueur 1er janvier 2025',
     pts:[
       {t:'ok',v:'🆕 Autosurveillance annuelle obligatoire par le propriétaire (carnet de suivi numérique)'},
       {t:'ok',v:'🆕 Contrat d\'entretien microstation : durée minimale 2 ans (vs annuel avant)'},
       {t:'ok',v:'🆕 Filières agréées CE : liste actualisée publiée sur le site du Ministère'},
       {t:'danger',v:'✗ NC avec danger sanitaire : délai réhabilitation 1 an maximum'},
       {t:'danger',v:'✗ NC sans danger : délai 4 ans · Refus d\'accès SPANC : +400% redevance'},
       {t:'info',v:'ℹ Entrée en vigueur progressive : 1er janvier 2025 pour les nouvelles installations'},
     ]},
    {ico:'📋',year:2021,isNew:false,color:'var(--c-amber,#886000)',colorl:'var(--c-amber-l,#FDF0D8)',
     name:'Arrêté du 26 février 2021 — Modification prescriptions ANC',
     ref:'NOR : TREL2101948A · Modifie l\'arrêté du 07/09/2009',
     pts:[
       {t:'ok',v:'✓ Renforcement des obligations de maintenance préventive'},
       {t:'ok',v:'✓ Précision des critères de non-conformité (avec/sans danger)'},
       {t:'info',v:'ℹ Précise les conditions d\'installation des filières agréées CE'},
       {t:'info',v:'ℹ Actualisation des distances réglementaires pour certaines filières'},
     ]},
    {ico:'📄',year:2009,isNew:false,color:'var(--c-anc)',colorl:'var(--c-anc-l)',
     name:'Arrêté du 07/09/2009 — Prescriptions ANC (texte fondateur)',
     ref:'JORF 09/10/2009 · Toujours en vigueur (modifié 2021 et 2024)',
     pts:[
       {t:'danger',v:'✗ Fosse septique (eaux vannes seules) : interdite à neuf depuis cet arrêté'},
       {t:'danger',v:'✗ Volume FTE minimum : 3 000 L (≤5 pp) · +1 000 L/pp au-delà'},
       {t:'info',v:'ℹ Distance puits / épandage : 35 m minimum · Distance habitation : 5 m'},
       {t:'info',v:'ℹ 6 filières principales définies · Ventilation primaire obligatoire'},
       {t:'ok',v:'✓ Base légale du contrôle SPANC (conception, réalisation, bon fonctionnement)'},
     ]},
    {ico:'📄',year:2012,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Décret n°2012-274 — ANC et vente immobilière',
     ref:'JORF 29/02/2012 · Rapport SPANC dans le DDT (dossier diagnostic technique)',
     pts:[
       {t:'danger',v:'✗ Diagnostic ANC obligatoire dans le DDT pour toute vente immobilière'},
       {t:'danger',v:'✗ Rapport SPANC de moins de 3 ans obligatoire (sinon nouveau contrôle aux frais vendeur)'},
       {t:'info',v:'ℹ Si NC constatée : acheteur dispose de 1 an pour se mettre en conformité'},
       {t:'info',v:'ℹ Le notaire doit informer les parties des obligations ANC'},
     ]},
  ],
  ac:[
    {ico:'♻️',year:2020,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Règlement UE 2020/741 — Réutilisation des eaux usées traitées (REUT)',
     ref:'En vigueur 26 juin 2023 · 4 classes A, B, C, D',
     pts:[
       {t:'ok',v:'✓ Classe A (le plus strict) : E. coli < 10 UFC/100 mL · Légionella < 1 000 UFC/L'},
       {t:'ok',v:'✓ Classe D (le moins strict) : irrigation forestière, pâturages non alimentaires'},
       {t:'info',v:'ℹ France 2024 : < 1% des eaux traitées réutilisées vs 10–15% en Espagne/Italie'},
       {t:'ok',v:'🆕 Plan Eau 2023 : objectif ×10 de REUT d\'ici 2030'},
     ]},
    {ico:'🏭',year:2007,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Arrêté du 22/06/2007 — Collecte et traitement des eaux usées STEU',
     ref:'NOR : DEVO0752257A · Texte de référence pour toutes les STEU',
     pts:[
       {t:'danger',v:'✗ Rejet DBO₅ : < 25 mg/L ou rendement > 70% · DCO : < 125 mg/L · MES : < 35 mg/L'},
       {t:'danger',v:'✗ Autosurveillance obligatoire : fréquence selon taille STEU (trimestrielle à journalière)'},
       {t:'info',v:'ℹ Zone sensible (> 10 000 EH) : NTK < 10 mg/L · Pt < 1 mg/L'},
       {t:'info',v:'ℹ Rapport annuel autosurveillance transmis à la DREAL et l\'Agence de l\'eau'},
     ]},
    {ico:'🏛️',year:2015,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Loi NOTRe du 7 août 2015 — Eau et assainissement EPCI',
     ref:'Loi n°2015-991 · JORF 08/08/2015 · Art. 64 et 66',
     pts:[
       {t:'danger',v:'✗ Depuis 01/01/2020 : eau et assainissement = compétences OBLIGATOIRES des EPCI'},
       {t:'info',v:'ℹ Communautés urbaines et métropoles : compétence obligatoire depuis 2016'},
       {t:'info',v:'ℹ Loi Ferrand-Fesneau 2018 : report à 2026 possible si 25% communes s\'y opposent avant 2019'},
       {t:'info',v:'ℹ Conséquence : fusion syndicats · Renégociation DSP · Mutualisation des moyens'},
     ]},
    {ico:'⚠️',year:2015,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Arrêté du 21/07/2015 — Déversoirs d\'orage',
     ref:'Arrêté relatif aux systèmes d\'assainissement collectif et aux installations de prétraitement',
     pts:[
       {t:'danger',v:'✗ Taux de dilution minimal au déversoir : généralement 5 (réglementaire local)'},
       {t:'danger',v:'✗ Autosurveillance DO obligatoire si débit > 120 m³/h (mesure débit + durée déversements)'},
       {t:'info',v:'ℹ Déclaration annuelle des volumes déversés obligatoire'},
       {t:'info',v:'ℹ Programme de mise en conformité des DO à présenter à l\'autorité compétente'},
     ]},
  ],
  ep:[
    {ico:'💧',year:2020,isNew:false,color:'var(--c-ep)',colorl:'var(--c-ep-l)',
     name:'Directive UE 2020/2184 — Eau potable révisée (PFAS, micropolluants)',
     ref:'Remplace Directive 98/83/CE · Transposition France 2024–2026 (en cours)',
     pts:[
       {t:'danger',v:'✗ PFAS totaux (20 listés) : < 0,1 µg/L · PFOA, PFOS individuels : < 0,02 µg/L · Dès 2026'},
       {t:'danger',v:'✗ Bisphénol A : < 2,5 µg/L · Chlorates : < 0,25 mg/L · Nouveaux paramètres 2026'},
       {t:'danger',v:'✗ Remplacement branchements plomb : délai 2026–2027 (France)'},
       {t:'ok',v:'🆕 PSE (Plan de Sécurité de l\'Eau) : obligatoire pour UDI > 5 000 m³/j dès 2026'},
       {t:'ok',v:'🆕 Droit d\'accès à l\'eau : information sur la qualité + accès gratuit espaces publics'},
       {t:'info',v:'ℹ Microplastiques : sur la watchlist · Surveillance obligatoire · Valeur limite à définir'},
     ]},
    {ico:'📋',year:2007,isNew:false,color:'var(--c-ep)',colorl:'var(--c-ep-l)',
     name:'Arrêté du 11/01/2007 — Limites qualité eau potable',
     ref:'NOR : SANP0720200A · Transposition Directive 98/83/CE',
     pts:[
       {t:'danger',v:'✗ E. coli : 0 UFC/100 mL · Entérocoques : 0 UFC/100 mL (limites absolues)'},
       {t:'danger',v:'✗ Nitrates NO₃⁻ : < 50 mg/L · Plomb : < 10 µg/L (futur : 5 µg/L)'},
       {t:'danger',v:'✗ Turbidité distribution : < 1 NTU · pH : 6,5–9,0 · Chlore résiduel : < 0,5 mg/L'},
       {t:'info',v:'ℹ Désinfection UV : dose minimale 40 mJ/cm² (conf. réglementaire)'},
       {t:'info',v:'ℹ Pesticides totaux : < 0,5 µg/L · Individuellement : < 0,1 µg/L (sauf exceptions)'},
     ]},
    {ico:'🔵',year:1998,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Directive 98/83/CE — Eau destinée à la consommation humaine (ancienne)',
     ref:'Remplacée par Directive 2020/2184 · Toujours en vigueur jusqu\'à transposition complète',
     pts:[
       {t:'info',v:'ℹ 48 paramètres de qualité fixés · Toujours applicable jusqu\'à transposition 2020/2184'},
       {t:'info',v:'ℹ Base du CSP art. R.1321-2 et de l\'Arrêté 11/01/2007'},
     ]},
  ],
  milieux:[
    {ico:'🌊',year:2000,isNew:false,color:'var(--c-riv)',colorl:'var(--c-riv-l)',
     name:'DCE — Directive Cadre sur l\'Eau 2000/60/CE',
     ref:'Directive 2000/60/CE du 23/10/2000 · Pilier de la politique eau européenne',
     pts:[
       {t:'danger',v:'✗ Objectif : bon état écologique ET chimique de toutes les masses d\'eau d\'ici 2027'},
       {t:'danger',v:'✗ Principe de non-dégradation : interdiction de détériorer l\'état d\'une masse d\'eau'},
       {t:'info',v:'ℹ France 2024 : ~43% des masses d\'eau en bon état (objectif loin d\'être atteint)'},
       {t:'info',v:'ℹ 6 districts hydrographiques en France métropolitaine · SDAGE révisé tous les 6 ans'},
       {t:'info',v:'ℹ Contenieux CE : France mise en demeure pour non-atteinte des objectifs'},
     ]},
    {ico:'🌊',year:2007,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Directive Inondation 2007/60/CE',
     ref:'Transposée par Loi Grenelle II 2010 · PGRI · 122 TRI en France',
     pts:[
       {t:'danger',v:'✗ PGRI (Plans de Gestion du Risque Inondation) : 1 par district · Révisés tous les 6 ans'},
       {t:'danger',v:'✗ Cartographie zones inondables : 3 scénarios (T10, T100, T1000)'},
       {t:'danger',v:'✗ PPRi opposable aux tiers · Zone rouge = inconstructible · Annexé au PLU'},
       {t:'info',v:'ℹ 122 TRI (Territoires à Risque Important) identifiés en France'},
       {t:'info',v:'ℹ GEMAPI : compétence EPCI obligatoire depuis 2018 (gestion milieux + prévention inondations)'},
     ]},
    {ico:'🦋',year:2016,isNew:false,color:'var(--c-aides)',colorl:'var(--c-aides-l)',
     name:'Loi Biodiversité du 8 août 2016',
     ref:'Loi n°2016-1087 · JORF 09/08/2016 · Crée l\'OFB (depuis 2020)',
     pts:[
       {t:'ok',v:'🆕 OFB créé en 2020 (AFB + ONCFS) : Police de l\'eau et nature'},
       {t:'danger',v:'✗ Zones humides : 1 ha détruit → 2 ha compensés (ratio minimum)'},
       {t:'danger',v:'✗ EEE (Espèces Exotiques Envahissantes) : obligation de gestion'},
       {t:'info',v:'ℹ Continuité écologique L.214-17 renforcée · Suivi efficacité passes à poissons par OFB'},
       {t:'danger',v:'✗ Atteinte zones humides : jusqu\'à 150 000 € d\'amende + restauration obligatoire'},
     ]},
    {ico:'🌱',year:2010,isNew:false,color:'var(--c-anc)',colorl:'var(--c-anc-l)',
     name:'Loi Grenelle II — Captages prioritaires et TVB',
     ref:'Loi n°2010-788 · 500 captages Grenelle · Trame Verte et Bleue',
     pts:[
       {t:'danger',v:'✗ 500 captages prioritaires Grenelle : plans d\'action BV obligatoires'},
       {t:'danger',v:'✗ Trame Verte et Bleue (TVB) : intégrée obligatoirement dans les documents d\'urbanisme'},
       {t:'info',v:'ℹ Bandes enherbées : 5 m minimum le long des cours d\'eau en zone agricole'},
       {t:'info',v:'ℹ SRCE (devenu SRADDET) : schéma régional de cohérence écologique'},
       {t:'info',v:'ℹ Directive Inondation transposée par cette même loi'},
     ]},
  ],
  transversal:[
    {ico:'💦',year:2023,isNew:true,color:'var(--c-anc)',colorl:'var(--c-anc-l)',
     name:'Plan Eau — 53 mesures pour une gestion sobre (mars 2023)',
     ref:'Annonce présidentielle 30/03/2023 · Suite aux sécheresses historiques 2022',
     pts:[
       {t:'ok',v:'🆕 Objectif : −10% de prélèvements en eau d\'ici 2030 (tous secteurs)'},
       {t:'ok',v:'🆕 REUT : multiplier par 10 d\'ici 2030 · Simplification autorisation'},
       {t:'danger',v:'✗ Rendement réseau AEP < 80% : obligation schéma directeur renforcée'},
       {t:'info',v:'ℹ Agriculture : 57% des prélèvements → priorité des économies'},
       {t:'info',v:'ℹ 100 M€ mobilisés · Tarification progressive de l\'eau expérimentée'},
     ]},
    {ico:'⚖️',year:2006,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'LEMA — Loi sur l\'Eau et les Milieux Aquatiques',
     ref:'Loi n°2006-1772 du 30/12/2006 · Loi fondatrice de la politique eau moderne',
     pts:[
       {t:'danger',v:'✗ SPANC obligatoire dans toutes les communes (délai 2013 pour retardataires)'},
       {t:'danger',v:'✗ DCE transposée : bon état toutes masses d\'eau · Non-dégradation · 6 districts'},
       {t:'danger',v:'✗ Réforme redevances Agences de l\'eau : 7 redevances · Principe pollueur-payeur'},
       {t:'info',v:'ℹ "L\'eau fait partie du patrimoine commun de la nation" — Art. L.210-1 Code envt'},
       {t:'info',v:'ℹ Base légale de l\'arrêté 07/09/2009 (ANC) et de l\'arrêté 22/06/2007 (STEU)'},
     ]},
    {ico:'🌡️',year:2021,isNew:false,color:'var(--c-aides)',colorl:'var(--c-aides-l)',
     name:'Loi Climat et Résilience du 22 août 2021 — Volet eau',
     ref:'Loi n°2021-1104 · Art. 161–163 (volet eau) · Art. 191–199 (ZAN)',
     pts:[
       {t:'danger',v:'✗ Art. 163 : refus d\'accès SPANC → majoration redevance jusqu\'à +400%'},
       {t:'ok',v:'🆕 ZAN (Zéro Artificialisation Nette) : −50% artificialisation 2021–2031 · ZAN total 2050'},
       {t:'info',v:'ℹ Impact fort ZAN sur la gestion des eaux pluviales urbaines (perméabilité sols)'},
       {t:'info',v:'ℹ Levée de certains verrous réglementaires pour la REUT'},
     ]},
    {ico:'🌍',year:2000,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Nomenclature IOTA — Installations, Ouvrages, Travaux et Activités',
     ref:'Code de l\'environnement art. R.214-1 à R.214-56 · Nomenclature eau',
     pts:[
       {t:'info',v:'ℹ Seuil autorisation : impacts importants sur ressource ou milieux aquatiques'},
       {t:'info',v:'ℹ Seuil déclaration : impacts modérés · Dossier simplifié déposé à la DDT'},
       {t:'danger',v:'✗ STEU > 10 000 EH : régime ICPE autorisation (rubrique 2750) · Inspection DREAL'},
       {t:'info',v:'ℹ Barrages, seuils, captages, bassins de rétention : tous soumis à IOTA'},
     ]},
  ],
};

const REGL_TABS = [
  {lbl:'🏡 ANC',           key:'anc'},
  {lbl:'🏙️ Assainissement', key:'ac'},
  {lbl:'💧 Eau potable',   key:'ep'},
  {lbl:'🌊 Milieux',       key:'milieux'},
  {lbl:'🔗 Transversal',   key:'transversal'},
  {lbl:'🗺️ Par département', key:'dept'},
];

/* ═══ CATALOGUE DES TEXTES RÉGLEMENTAIRES PAR CLÉ ═══ */
const REGL_CATALOGUE = {
  anc_fondateur:{
    ico:'📄', year:2009, isNew:false, color:'var(--c-anc)', colorl:'var(--c-anc-l)',
    name:'Arrêté du 07/09/2009 — Prescriptions ANC (texte fondateur)',
    ref:'Applicable à TOUS les départements · DTU 64.1 complémentaire',
    detail:'Texte de référence pour toute installation ANC en France. Définit les prescriptions techniques minimales pour la conception, l\'implantation, la réalisation et l\'entretien des systèmes ANC. Modifié par les arrêtés du 26/02/2021 et du 10/07/2024.',
    lien:'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021258716',
    pts:[
      {t:'danger',v:'✗ FTE obligatoire : 3 000 L (≤5 pp) · +1 000 L/pp au-delà'},
      {t:'danger',v:'✗ Fosse septique (eaux vannes seules) : interdite à neuf'},
      {t:'danger',v:'✗ Distances : 35 m des puits AEP · 5 m des habitations · 3 m des limites de parcelle'},
      {t:'danger',v:'✗ Ventilation primaire : obligatoire (prolongement chute au-dessus du faîtage)'},
      {t:'info',v:'ℹ 6 filières principales : tranchées, filtre sable ND/D, tertre, FPR, microstation agréée CE'},
      {t:'info',v:'ℹ Contrôle SPANC : conception + réalisation + bon fonctionnement (tous les 10 ans)'},
    ]},
  anc_2024:{
    ico:'🆕', year:2024, isNew:true, color:'var(--c-aides)', colorl:'var(--c-aides-l)',
    name:'Arrêté du 10/07/2024 — Prescriptions ANC révisées',
    ref:'NOR : TREL2412832A · JORF 13/07/2024 · En vigueur 1er janvier 2025',
    detail:'Mise à jour majeure de la réglementation ANC depuis 2009. Renforce les obligations d\'autosurveillance, précise les exigences sur les contrats d\'entretien des microstations et actualise la liste des filières agréées CE.',
    lien:'https://www.legifrance.gouv.fr/',
    pts:[
      {t:'ok',v:'🆕 Autosurveillance annuelle obligatoire : carnet de suivi numérique par le propriétaire'},
      {t:'ok',v:'🆕 Contrat d\'entretien microstation : durée minimale 2 ans (vs annuel avant)'},
      {t:'ok',v:'🆕 Filières agréées CE : liste actualisée sur le site du Ministère'},
      {t:'danger',v:'✗ NC avec danger sanitaire : délai réhabilitation 1 AN maximum'},
      {t:'danger',v:'✗ NC sans danger : délai 4 ans · Refus accès SPANC : +400% redevance'},
    ]},
  anc_vente:{
    ico:'📄', year:2012, isNew:false, color:'var(--c-ac)', colorl:'var(--c-ac-l)',
    name:'Décret n°2012-274 — Diagnostic ANC lors de la vente immobilière',
    ref:'NOR : DEVL1200432D · JORF 29/02/2012 · Rapport SPANC dans le DDT',
    detail:'Précise les modalités du diagnostic ANC obligatoire lors des ventes immobilières. Si la NC est constatée, l\'acheteur dispose de 1 an pour se conformer.',
    lien:'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025413992',
    pts:[
      {t:'danger',v:'✗ Rapport SPANC obligatoire dans le DDT pour toute vente immobilière'},
      {t:'danger',v:'✗ Rapport > 3 ans : nouveau contrôle aux frais du vendeur'},
      {t:'danger',v:'✗ Si NC constatée : acheteur dispose de 1 an pour se conformer'},
      {t:'info',v:'ℹ Notaire : doit informer les parties des obligations ANC'},
    ]},
  steu:{
    ico:'🏭', year:2007, isNew:false, color:'var(--c-regl)', colorl:'var(--c-regl-l)',
    name:'Arrêté du 22/06/2007 — Collecte et traitement eaux usées (STEU)',
    ref:'NOR : DEVO0752257A · Texte de référence pour toutes les STEU',
    detail:'Fixe les prescriptions techniques applicables aux systèmes de collecte et de traitement des eaux usées. Définit les niveaux de rejet réglementaires et les obligations d\'autosurveillance.',
    lien:'https://www.legifrance.gouv.fr/loda/id/LEGITEXT000018745461',
    pts:[
      {t:'danger',v:'✗ DBO₅ rejet < 25 mg/L (ou rendement > 70%) · DCO < 125 mg/L · MES < 35 mg/L'},
      {t:'danger',v:'✗ Autosurveillance obligatoire · Rapport annuel → DREAL et Agence de l\'eau'},
      {t:'info',v:'ℹ Zone sensible > 10 000 EH : NTK < 10 mg/L · Pt < 1 mg/L'},
      {t:'info',v:'ℹ Seuil ICPE : STEU > 10 000 EH → autorisation préfectorale (rubrique 2750)'},
    ]},
  icpe:{
    ico:'🏭', year:2006, isNew:false, color:'var(--c-regl)', colorl:'var(--c-regl-l)',
    name:'ICPE — Réglementation STEU > 10 000 EH (Rubrique 2750)',
    ref:'Code de l\'environnement L.511-1 · Nomenclature ICPE · Inspection DREAL',
    detail:'Les stations d\'épuration dépassant certains seuils sont soumises au régime ICPE. Rubrique 2750 fixe les seuils précis. Inspections régulières par la DREAL.',
    lien:'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006834043',
    pts:[
      {t:'danger',v:'✗ STEU > 10 000 EH : autorisation ICPE · Dossier d\'impact + enquête publique'},
      {t:'danger',v:'✗ STEU 2 000–10 000 EH : régime enregistrement'},
      {t:'danger',v:'✗ Non-conformité : mise en demeure → astreinte → suspension → pénal'},
      {t:'info',v:'ℹ Inspection DREAL : 1 à 4 fois/an selon taille et historique'},
    ]},
  notre:{
    ico:'🏛️', year:2015, isNew:false, color:'var(--c-ac)', colorl:'var(--c-ac-l)',
    name:'Loi NOTRe 2015 — Eau et assainissement compétences EPCI',
    ref:'Loi n°2015-991 · JORF 08/08/2015 · Applicable à tous les EPCI',
    detail:'Transfère les compétences eau et assainissement aux EPCI (communautés de communes et d\'agglomération) à compter du 01/01/2020.',
    lien:'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031043460',
    pts:[
      {t:'danger',v:'✗ Depuis 01/01/2020 : eau et assainissement = compétences OBLIGATOIRES des EPCI'},
      {t:'info',v:'ℹ Loi Ferrand-Fesneau 2018 : possibilité de report à 2026 (si 25% communes s\'y opposent)'},
      {t:'info',v:'ℹ Fusion de syndicats · Renégociation DSP · RPQS obligatoire pour chaque EPCI'},
    ]},
  ep_2020:{
    ico:'💧', year:2020, isNew:false, color:'var(--c-ep)', colorl:'var(--c-ep-l)',
    name:'Directive 2020/2184 — Eau potable révisée (PFAS, micropolluants)',
    ref:'Remplace Directive 98/83/CE · Transposition France 2024–2026 (en cours)',
    detail:'Modernise le cadre réglementaire de l\'eau potable en Europe. Introduit des exigences renforcées sur les PFAS, impose le remplacement des branchements en plomb, et crée l\'obligation du PSE (Plan de Sécurité de l\'Eau).',
    lien:'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32020L2184',
    pts:[
      {t:'danger',v:'✗ PFAS totaux (20 listés) : < 0,1 µg/L · PFOA/PFOS : < 0,02 µg/L · Dès 2026'},
      {t:'danger',v:'✗ Bisphénol A : < 2,5 µg/L · Chlorates : < 0,25 mg/L · Nouveaux paramètres 2026'},
      {t:'danger',v:'✗ Remplacement branchements plomb : délai 2026–2027'},
      {t:'ok',v:'🆕 PSE obligatoire pour UDI > 5 000 m³/j · Méthode HACCP appliquée à l\'AEP'},
      {t:'ok',v:'🆕 Droit d\'accès à l\'eau : information qualité + accès gratuit espaces publics'},
    ]},
  ep_2007:{
    ico:'📋', year:2007, isNew:false, color:'var(--c-ep)', colorl:'var(--c-ep-l)',
    name:'Arrêté 11/01/2007 — Limites qualité eau potable',
    ref:'NOR : SANP0720200A · Transposition Directive 98/83/CE · CSP art. R.1321-2',
    detail:'Fixe les 48 paramètres de qualité à surveiller pour l\'eau potable, les fréquences d\'analyse et les procédures en cas de dépassement.',
    lien:'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000561346',
    pts:[
      {t:'danger',v:'✗ E. coli : 0 UFC/100 mL · Entérocoques : 0 UFC/100 mL (limites absolues)'},
      {t:'danger',v:'✗ Nitrates : < 50 mg/L · Plomb : < 10 µg/L (futur : 5 µg/L dès 2026)'},
      {t:'danger',v:'✗ Turbidité distribution : < 1 NTU · pH : 6,5–9,0'},
      {t:'info',v:'ℹ Désinfection UV : dose minimale 40 mJ/cm² · Pesticides totaux : < 0,5 µg/L'},
    ]},
  dce:{
    ico:'🌊', year:2000, isNew:false, color:'var(--c-riv)', colorl:'var(--c-riv-l)',
    name:'DCE 2000/60/CE — Directive Cadre sur l\'Eau',
    ref:'Bon état toutes masses d\'eau d\'ici 2027 · SDAGE tous les 6 ans',
    detail:'Fixe l\'objectif de bon état écologique et chimique de toutes les masses d\'eau d\'ici 2027. La France est soumise à des contentieux européens pour non-atteinte de ces objectifs.',
    lien:'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32000L0060',
    pts:[
      {t:'danger',v:'✗ Bon état écologique ET chimique de toutes les masses d\'eau : objectif 2027'},
      {t:'danger',v:'✗ Principe de non-dégradation : interdit de détériorer l\'état actuel'},
      {t:'info',v:'ℹ France 2024 : ~43% des masses d\'eau en bon état seulement'},
      {t:'info',v:'ℹ 6 districts hydrographiques · SDAGE révisé tous les 6 ans'},
    ]},
  algues_vertes:{
    ico:'🌿', year:2010, isNew:false, color:'var(--c-anc)', colorl:'var(--c-anc-l)',
    name:'Programme national algues vertes — Zones prioritaires Bretagne',
    ref:'Plan de lutte 2010–2027 · Bretagne · AELB taux aide jusqu\'à 70%',
    detail:'Les marées vertes résultent des apports excessifs en nitrates et phosphore. Les 8 baies classées font l\'objet de programmes d\'action incluant le contrôle prioritaire des installations ANC. Taux d\'aide Agence AELB pouvant atteindre 70%.',
    lien:'https://www.bretagne.bzh/actions/mer-et-littoral/algues-vertes/',
    pts:[
      {t:'danger',v:'✗ Zone algues vertes : programme d\'action BV obligatoire · Contrôle SPANC renforcé'},
      {t:'ok',v:'✓ Taux aide Agence AELB : jusqu\'à 70% pour réhabilitation ANC en zones concernées'},
      {t:'info',v:'ℹ Baies concernées : Saint-Brieuc (22), Lieue de Grève (22), Douarnenez (29), Brest (29), Étel (56), Vilaine (56)'},
      {t:'danger',v:'✗ Délais réhabilitation raccourcis · Priorité absolue SPANC'},
    ]},
  captage_grenelle:{
    ico:'🌱', year:2010, isNew:false, color:'var(--c-anc)', colorl:'var(--c-anc-l)',
    name:'Captages prioritaires Grenelle — Plan d\'action BV obligatoire',
    ref:'500 captages identifiés (Grenelle 2007) · Loi Grenelle II 2010',
    detail:'Le Grenelle de l\'Environnement a identifié 500 captages d\'eau potable nécessitant des programmes d\'actions renforcés. Sur ces bassins versants, les ANC non conformes sont ciblées en priorité.',
    lien:'https://www.ecologie.gouv.fr/captages-prioritaires',
    pts:[
      {t:'danger',v:'✗ Plan d\'action obligatoire sur le BV du captage · Réduction pesticides et nitrates'},
      {t:'ok',v:'✓ Taux aide Agence majoré dans les périmètres de captage prioritaire'},
      {t:'danger',v:'✗ DUP obligatoire · Périmètres immédiat, rapproché, éloigné'},
      {t:'info',v:'ℹ 500 captages prioritaires · Résultats 2023 : 40% avec amélioration qualité confirmée'},
    ]},
  zone_vulnerable_nitrates:{
    ico:'🌾', year:2015, isNew:false, color:'var(--c-ep)', colorl:'var(--c-ep-l)',
    name:'Zones vulnérables nitrates — Programme d\'actions nitrates',
    ref:'Directive 91/676/CEE · 4ème programme d\'action · Zones > 50 mg/L NO₃',
    detail:'Zones où les eaux dépassent ou risquent de dépasser 50 mg/L de nitrates. Mesures obligatoires pour les activités agricoles et les rejets domestiques.',
    lien:'https://www.legifrance.gouv.fr/',
    pts:[
      {t:'danger',v:'✗ Limitation des apports azotés · Plans de fertilisation · Périodes d\'interdiction d\'épandage'},
      {t:'info',v:'ℹ Impact ANC : zones à fort enjeu EP · Contrôle renforcé SPANC'},
      {t:'info',v:'ℹ Nitrates EP : < 50 mg/L (limite) · < 25 mg/L (guide)'},
      {t:'info',v:'ℹ Bretagne entière + grandes plaines agricoles (Beauce, Champagne, Picardie)'},
    ]},
  karst:{
    ico:'⛰️', year:1992, isNew:false, color:'var(--c-regl)', colorl:'var(--c-regl-l)',
    name:'Réglementation karst — Protection des aquifères karstiques',
    ref:'Code de l\'environnement · IOTA · Avis hydrogéologue agréé ARS obligatoire',
    detail:'Les aquifères karstiques présentent une vulnérabilité extrême : transit des eaux en heures à jours et épuration quasi nulle. Des règles spécifiques s\'appliquent à toute installation ANC en milieu karstique.',
    lien:'https://www.legifrance.gouv.fr/',
    pts:[
      {t:'danger',v:'✗ Transit très rapide des polluants (heures à jours) · Épuration quasi nulle'},
      {t:'danger',v:'✗ ANC : distances majorées · Filières drainées souvent imposées par arrêté préfectoral'},
      {t:'danger',v:'✗ Avis hydrogéologue agréé ARS OBLIGATOIRE pour toute installation'},
      {t:'info',v:'ℹ Méthode EPIK : évaluation vulnérabilité spécifique karst'},
    ]},
  ppri:{
    ico:'🏠', year:1995, isNew:false, color:'var(--c-regl)', colorl:'var(--c-regl-l)',
    name:'PPRi — Plan de Prévention des Risques d\'Inondation',
    ref:'Loi Barnier 1995 · Code env. L.562-1 · Crue de référence Q100',
    detail:'Délimite les zones inondables et définit les règles de construction. L\'ANC en zone inondable requiert des adaptations techniques spécifiques (tertre, microstation surélevée).',
    lien:'https://www.georisques.gouv.fr',
    pts:[
      {t:'danger',v:'✗ Zone rouge : inconstructible · Zone bleue : constructible avec prescriptions'},
      {t:'danger',v:'✗ ANC en zone inondable : tertre, microstation surélevée ou solution alternative'},
      {t:'info',v:'ℹ PPRi annexé au PLU · Opposable aux tiers · ~12 000 communes avec PPRi'},
    ]},
  nappe_rhin:{
    ico:'💎', year:2006, isNew:false, color:'var(--c-ep)', colorl:'var(--c-ep-l)',
    name:'Protection nappe alluviale du Rhin — Ressource stratégique',
    ref:'SDAGE Rhin-Meuse · Nappe rhénane : 4 millions de personnes · France + Allemagne + Suisse',
    detail:'La nappe alluviale du Rhin est la plus grande nappe d\'eau douce d\'Europe. Sa protection est un enjeu transfrontalier majeur. Toute pollution est considérée d\'urgence nationale.',
    lien:'https://www.eau-rhin-meuse.fr',
    pts:[
      {t:'danger',v:'✗ Ressource stratégique transfrontalière · Toute pollution = urgence nationale'},
      {t:'danger',v:'✗ Priorité absolue : installation ANC NC = danger grave · Délai 1 an MAXIMUM'},
      {t:'danger',v:'✗ Contrôle SPANC ultra-renforcé en 67 et 68 · Taux aide AERM majoré'},
    ]},
  nappe_beauce:{
    ico:'🌾', year:2006, isNew:false, color:'var(--c-ep)', colorl:'var(--c-ep-l)',
    name:'Zone de Répartition des Eaux (ZRE) — Nappe de Beauce',
    ref:'Arrêté préfectoral · 1ère nappe d\'eau douce d\'Europe · ZRE depuis 1994',
    detail:'La nappe de Beauce s\'étend sur 7 000 km² et alimente plus de 200 000 personnes. Elle est en déficit chronique. Classée en ZRE, tout prélèvement est soumis à autorisation renforcée.',
    lien:'https://www.legifrance.gouv.fr/',
    pts:[
      {t:'danger',v:'✗ ZRE : prélèvements soumis à autorisation préfectorale renforcée'},
      {t:'danger',v:'✗ REUT prioritaire · Plan Eau 2023 : zone pilote'},
      {t:'info',v:'ℹ 7 000 km² · Départements 28, 45, 91 · Déficit chronique'},
    ]},
  lema:{
    ico:'⚖️', year:2006, isNew:false, color:'var(--c-regl)', colorl:'var(--c-regl-l)',
    name:'LEMA 2006 — Loi sur l\'Eau et les Milieux Aquatiques',
    ref:'Loi n°2006-1772 du 30/12/2006 · Texte fondateur · Applicable partout',
    detail:'Loi fondatrice de la politique contemporaine de l\'eau en France. Crée le SPANC, transpose la DCE, réforme les redevances des Agences.',
    lien:'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000649171',
    pts:[
      {t:'danger',v:'✗ SPANC obligatoire dans toutes les communes'},
      {t:'danger',v:'✗ Principe pollueur-payeur · Redevances Agences de l\'eau'},
      {t:'info',v:'ℹ "L\'eau fait partie du patrimoine commun de la nation"'},
    ]},
  biodiv:{
    ico:'🦋', year:2016, isNew:false, color:'var(--c-aides)', colorl:'var(--c-aides-l)',
    name:'Loi Biodiversité 2016 — Zones humides et continuité écologique',
    ref:'Loi n°2016-1087 · OFB créé en 2020 · Séquence ERC renforcée',
    detail:'Renforce la protection des milieux aquatiques et zones humides. L\'ANC en zone humide requiert des filières adaptées (tertre, microstation).',
    lien:'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000033016237',
    pts:[
      {t:'danger',v:'✗ Zones humides : 1 ha détruit → 2 ha compensés · Séquence ERC'},
      {t:'danger',v:'✗ ANC en zone humide : tertre obligatoire ou microstation (filière standard interdite)'},
      {t:'info',v:'ℹ OFB : police de l\'eau · Amende jusqu\'à 150 000 €'},
    ]},
  dir_inondation:{
    ico:'🌊', year:2007, isNew:false, color:'var(--c-ac)', colorl:'var(--c-ac-l)',
    name:'Directive Inondation 2007/60/CE — PGRI et TRI',
    ref:'122 TRI en France · PGRI révisé tous les 6 ans · Transposée Grenelle II',
    detail:'Impose l\'évaluation des risques d\'inondation, la cartographie des zones et l\'élaboration de plans de gestion. 122 TRI identifiés en France.',
    lien:'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32007L0060',
    pts:[
      {t:'danger',v:'✗ PGRI (Plans de Gestion du Risque Inondation) : 1 par district · Révisé tous les 6 ans'},
      {t:'danger',v:'✗ Cartographie obligatoire : scénarios T10, T100, T1000'},
      {t:'info',v:'ℹ 122 TRI · GEMAPI : compétence EPCI obligatoire depuis 2018'},
    ]},
  zones_ostreicoles:{
    ico:'🦪', year:2007, isNew:false, color:'var(--c-anc)', colorl:'var(--c-anc-l)',
    name:'Réglementation zones conchylicoles — Protection sanitaire',
    ref:'Arrêtés préfectoraux · Classement DDPP zones A, B, C · Règlement CE 854/2004',
    detail:'Les zones conchylicoles sont classées selon la qualité microbiologique. La zone A requiert E. coli < 230 UFC/100g. Tout ANC NC dans le bassin versant peut provoquer un déclassement avec impact économique majeur pour les ostréiculteurs.',
    lien:'https://agriculture.gouv.fr/',
    pts:[
      {t:'danger',v:'✗ Zone A : E. coli < 230 UFC/100g · ANC NC dans le BV = risque de déclassement'},
      {t:'danger',v:'✗ Priorité réhabilitation ANC ABSOLUE dans ces bassins versants'},
      {t:'ok',v:'✓ Taux aide Agence très élevé : 50–70% dans les zones ostréicoles'},
    ]},
  plan_eau:{
    ico:'💦', year:2023, isNew:true, color:'var(--c-anc)', colorl:'var(--c-anc-l)',
    name:'Plan Eau 2023 — 53 mesures pour une gestion sobre',
    ref:'Annonce présidentielle 30/03/2023 · Objectif −10% prélèvements d\'ici 2030',
    detail:'Réponse gouvernementale aux crises hydriques. 53 mesures : sobriété (−10% prélèvements), REUT (×10), adaptation (changement climatique). Prioritaire dans les zones méditerranéennes et atlantiques.',
    lien:'https://www.ecologie.gouv.fr/plan-eau',
    pts:[
      {t:'ok',v:'🆕 Objectif : −10% de prélèvements en eau d\'ici 2030'},
      {t:'ok',v:'🆕 REUT : multiplier par 10 d\'ici 2030 · Simplification autorisation'},
      {t:'danger',v:'✗ Rendement AEP < 80% : schéma directeur obligatoire renforcé'},
      {t:'info',v:'ℹ 100 M€ mobilisés · Agriculture : 57% des prélèvements'},
    ]},
};


const DEPT_REGL = {
  '01':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '02':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','lema'],
  '03':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '04':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '05':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '06':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '07':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '08':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '09':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '10':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','lema'],
  '11':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '12':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '13':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '14':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','lema'],
  '15':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '16':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '17':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zones_ostreicoles','captage_grenelle','lema'],
  '18':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '19':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '21':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '22':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','algues_vertes','captage_grenelle','zones_ostreicoles','lema'],
  '23':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '24':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '25':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '26':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '27':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','ppri','dir_inondation','lema'],
  '28':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','nappe_beauce','zone_vulnerable_nitrates','captage_grenelle','lema'],
  '29':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','algues_vertes','captage_grenelle','zones_ostreicoles','lema'],
  '30':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','lema'],
  '31':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','lema'],
  '32':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '33':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zones_ostreicoles','captage_grenelle','ppri','dir_inondation','lema'],
  '34':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zones_ostreicoles','lema'],
  '35':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','algues_vertes','captage_grenelle','zones_ostreicoles','lema'],
  '36':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '37':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','lema'],
  '38':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','lema'],
  '39':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '40':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '41':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','biodiv','lema'],
  '42':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '43':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '44':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zones_ostreicoles','captage_grenelle','ppri','dir_inondation','biodiv','lema'],
  '45':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','nappe_beauce','zone_vulnerable_nitrates','captage_grenelle','lema'],
  '46':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '47':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','lema'],
  '48':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '49':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','lema'],
  '50':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zones_ostreicoles','captage_grenelle','dir_inondation','lema'],
  '51':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','lema'],
  '52':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '53':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','lema'],
  '54':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '55':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '56':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','algues_vertes','captage_grenelle','zones_ostreicoles','lema'],
  '57':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '58':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '59':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','ppri','dir_inondation','lema'],
  '60':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','ppri','dir_inondation','lema'],
  '61':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '62':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','dir_inondation','lema'],
  '63':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '64':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','zones_ostreicoles','lema'],
  '65':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '66':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '67':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','nappe_rhin','captage_grenelle','lema'],
  '68':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','nappe_rhin','captage_grenelle','lema'],
  '69':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','lema'],
  '70':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '71':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '72':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','lema'],
  '73':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','lema'],
  '74':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','lema'],
  '75':['steu','notre','dce','ep_2007','ep_2020','lema'],
  '76':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','dir_inondation','lema'],
  '77':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','dir_inondation','lema'],
  '78':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','lema'],
  '79':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','biodiv','captage_grenelle','lema'],
  '80':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','zone_vulnerable_nitrates','captage_grenelle','dir_inondation','lema'],
  '81':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '82':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','ppri','dir_inondation','lema'],
  '83':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','plan_eau','lema'],
  '84':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '85':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','biodiv','dir_inondation','lema'],
  '86':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '87':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '88':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','lema'],
  '89':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','karst','captage_grenelle','lema'],
  '90':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','lema'],
  '91':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','nappe_beauce','captage_grenelle','lema'],
  '92':['steu','icpe','notre','dce','ep_2007','ep_2020','lema'],
  '93':['steu','icpe','notre','dce','ep_2007','ep_2020','lema'],
  '94':['steu','icpe','notre','dce','ep_2007','ep_2020','lema'],
  '95':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','ep_2020','captage_grenelle','ppri','lema'],
  '971':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','lema'],
  '972':['anc_fondateur','anc_2024','anc_vente','steu','notre','dce','ep_2007','lema'],
  '973':['steu','dce','lema'],
  '974':['anc_fondateur','anc_2024','anc_vente','steu','dce','ep_2007','lema'],
  '976':['steu','dce','lema'],
};

function renderReglByDept(q='') {
  const zone = document.getElementById('regl-content');
  if(!zone) return;

  // Si un département est sélectionné
  const selNum = window.reglDeptSel || '';

  if(selNum) {
    const dept = SPANC_DEPTS.find(d=>d.num===selNum);
    const keys = DEPT_REGL[selNum] || ['anc_fondateur','anc_2024','lema','dce'];
    const textes = keys.map(k=>REGL_CATALOGUE[k]).filter(Boolean);

    zone.innerHTML = `
      <div style="padding:var(--s-2) var(--s-4) 0">
        <button onclick="window.reglDeptSel='';renderReglByDept()"
          style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:var(--c-surface-2);border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:var(--t-sm);font-weight:600;cursor:pointer;color:var(--c-text-2);margin-bottom:var(--s-3)">
          ← Retour liste des départements
        </button>
        <div class="card card-p" style="background:linear-gradient(135deg,var(--c-ep-l),#fff);margin-bottom:var(--s-3)">
          <div style="display:flex;align-items:center;gap:var(--s-3)">
            <div class="dc-num" style="width:44px;height:44px;font-size:${dept.num.length>2?'11px':'14px'}">${dept.num}</div>
            <div>
              <div style="font-family:var(--f-display);font-size:var(--t-xl);color:var(--c-primary);margin-bottom:2px">${dept.name}</div>
              <div style="font-size:var(--t-sm);color:var(--c-text-3)">${dept.region} · Agence : ${dept.agence} · Taux aide : ${dept.taux}</div>
            </div>
          </div>
        </div>
        <div class="section-header" style="padding:0 0 var(--s-2)">
          Textes applicables au ${dept.name}
          <span class="sh-count">${textes.length} textes</span>
        </div>
      </div>
      <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
        ${textes.map(t=>reglCardHTML(t)).join('')}
      </div>`;
    return;
  }

  // Liste de sélection des départements
  let list = SPANC_DEPTS.filter(d =>
    !q || d.num.includes(q) || d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q)
  );

  zone.innerHTML = `
    <div style="padding:var(--s-2) var(--s-4)">
      <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ</span><span>Sélectionnez un département pour voir tous les textes réglementaires qui lui sont applicables selon ses caractéristiques (karst, zones algues vertes, captages prioritaires, zones vulnérables nitrates, PPRi...)</span></div>
      <div class="search-bar" style="margin-bottom:var(--s-2)">
        <span class="search-ico">🔍</span>
        <input type="text" id="regl-dept-search" value="${q}"
          placeholder="Numéro (ex: 29) ou nom (ex: Finistère)…"
          oninput="renderReglByDept(this.value.toLowerCase())"
          style="font-size:var(--t-base);font-weight:600">
      </div>
    </div>
    <div class="section-header" style="padding-top:0">${list.length} département${list.length>1?'s':''}</div>
    <div style="padding:0 var(--s-4);display:grid;grid-template-columns:1fr 1fr;gap:var(--s-2)">
      ${list.map(d=>{
        const keys = DEPT_REGL[d.num]||[];
        const nbTextes = keys.length;
        const hasSpecial = keys.some(k=>['algues_vertes','karst','nappe_rhin','nappe_beauce','zones_ostreicoles','zone_vulnerable_nitrates','captage_grenelle','ppri'].includes(k));
        return `<div onclick="window.reglDeptSel='${d.num}';renderReglByDept()"
          style="background:var(--c-surface);border:1.5px solid ${hasSpecial?'var(--c-primary)':'var(--c-border)'};border-radius:var(--r-md);padding:var(--s-3);cursor:pointer;transition:all .15s;box-shadow:var(--sh-1)"
          onmouseover="this.style.boxShadow='var(--sh-2)';this.style.transform='translateY(-1px)'"
          onmouseout="this.style.boxShadow='var(--sh-1)';this.style.transform=''">
          <div style="display:flex;align-items:center;gap:var(--s-2);margin-bottom:var(--s-1)">
            <div class="dc-num" style="width:32px;height:32px;flex-shrink:0;font-size:${d.num.length>2?'9px':'11px'}">${d.num}</div>
            <div style="font-size:var(--t-sm);font-weight:700;line-height:1.3;flex:1">${d.name}</div>
          </div>
          <div style="font-size:10px;color:var(--c-text-3);margin-bottom:var(--s-1)">${d.region}</div>
          <div style="display:flex;align-items:center;justify-content:space-between">
            <span class="badge ${hasSpecial?'badge-primary':'badge-ok'}">${nbTextes} textes</span>
            ${hasSpecial?'<span style="font-size:9px;color:var(--c-primary);font-weight:700">⚡ Spécifique</span>':''}
          </div>
        </div>`;
      }).join('')}
    </div>
    <div style="height:var(--s-4)"></div>`;
}

function renderRegl() {
  loadModuleTabs(['🏡 ANC','🏙️ Assainissement','💧 Eau potable','🌊 Milieux','🔗 Transversal','🗺️ Par département'], 'switchReglTab');
  document.getElementById('main-content').innerHTML =
    '<div class="search-container" style="padding-top:var(--s-2)">'
    + '<div class="search-bar"><span class="search-ico">🔍</span>'
    + '<input type="text" id="regl-search" placeholder="Rechercher un texte ou un département…" oninput="filterRegl(this.value)">'
    + '</div></div>'
    + '<div id="regl-content"></div>'
    + '<div class="pb-nav"></div>';
  window.reglTabIdx = 0;
  window.reglDeptSel = '';
  renderReglTab('anc', '');
}

function switchReglTab(idx) {
  setTabActive('module-tabs', idx);
  window.reglTabIdx = idx;
  window.reglDeptSel = '';
  var sb = document.getElementById('regl-search');
  if (sb) sb.value = '';
  if      (idx === 0) renderReglTab('anc', '');
  else if (idx === 1) renderReglTab('ac', '');
  else if (idx === 2) renderReglTab('ep', '');
  else if (idx === 3) renderReglTab('milieux', '');
  else if (idx === 4) renderReglTab('transversal', '');
  else if (idx === 5) renderReglByDept('');
  scrollToTop();
}


function filterRegl(q) {
  var keyMap = ['anc','ac','ep','milieux','transversal','dept'];
  var key = keyMap[window.reglTabIdx || 0] || 'anc';
  if (key === 'dept') renderReglByDept(q.toLowerCase());
  else renderReglTab(key, q.toLowerCase());
}

function renderReglTab(key, q='') {
  let list = REGL_TEXTES[key]||[];
  if(q) list = list.filter(t=>(t.name+t.ref+t.pts.map(p=>p.v).join(' ')).toLowerCase().includes(q));
  const html = list.length
    ? `<div class="section-header" style="padding-top:var(--s-2)">${list.length} texte${list.length>1?'s':''}</div>
       <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
         ${list.map(t=>reglCardHTML(t)).join('')}
       </div>`
    : `<div style="text-align:center;padding:40px;color:var(--c-text-3)">Aucun texte trouvé</div>`;
  document.getElementById('regl-content').innerHTML = html;
}

/* ─── REGL CARD — cliquable, fonction globale propre ─── */
window._rcId = 0;

function toggleRC(id) {
  var el  = document.getElementById('rcc-' + id);
  var arr = document.getElementById('rca-' + id);
  if (!el) return;
  var open = el.style.display === 'block';
  el.style.display  = open ? 'none' : 'block';
  if (arr) arr.style.transform = open ? '' : 'rotate(90deg)';
  // scroll handled by container
}

function reglCardHTML(t) {
  var id = ++window._rcId;
  var pts = t.pts.map(function(p){
    return '<div class="rc-pt" style="background:var(--c-'+p.t+'-l);color:var(--c-'+p.t+');border-color:var(--c-'+p.t+')">' + p.v + '</div>';
  }).join('');
  var detail = t.detail
    ? '<div style="font-size:var(--t-sm);color:var(--c-text-3);line-height:1.8;margin-top:var(--s-2);padding-top:var(--s-2);border-top:1px solid var(--c-border)">' + t.detail + '</div>'
    : '';
  var lien = t.lien
    ? '<a href="' + t.lien + '" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:700;color:var(--c-primary);background:var(--c-primary-l);padding:3px 10px;border-radius:var(--r-pill);margin-top:var(--s-2);text-decoration:none">🔗 Légifrance / Source officielle</a>'
    : '';
  var newBadge = t.isNew ? '<span class="badge badge-new">NOUVEAU</span>' : '';

  return '<div class="regl-card" style="border-left:3px solid ' + t.color + '">'
    + '<div onclick="toggleRC(' + id + ')" style="cursor:pointer;display:flex;align-items:flex-start;gap:var(--s-3);padding:var(--s-3) var(--s-4)">'
      + '<div class="rc-icon" style="background:' + t.colorl + ';flex-shrink:0">' + t.ico + '</div>'
      + '<div style="flex:1;min-width:0">'
        + '<div class="rc-name">' + t.name + '</div>'
        + '<div class="rc-ref" style="margin-top:2px">' + t.ref + '</div>'
      + '</div>'
      + '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0">'
        + newBadge
        + '<span class="rc-year">' + t.year + '</span>'
        + '<span id="rca-' + id + '" style="font-size:22px;color:var(--c-text-4);transition:transform .22s;line-height:1;font-weight:300">›</span>'
      + '</div>'
    + '</div>'
    + '<div id="rcc-' + id + '" style="display:none;border-top:1px solid var(--c-border);padding:var(--s-3) var(--s-4)">'
      + '<div style="display:flex;flex-direction:column;gap:5px">' + pts + '</div>'
      + detail
      + lien
    + '</div>'
  + '</div>';
}

