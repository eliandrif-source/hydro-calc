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
    const matchQ = !q || d.num.includes(q) || d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q) || (d.oblig||'').toLowerCase().includes(q) || (d.contact||'').toLowerCase().includes(q) || (d.agence||'').toLowerCase().includes(q);
    return matchRegion && matchQ;
  });
  document.getElementById('spanc-count').textContent = list.length;
  renderSPANCList(list);
}

var _deptOpenId = null;
function _toggleDeptCard(num) {
  var body = document.getElementById('dc-body-' + num);
  var arrow = document.getElementById('dc-arrow-' + num);
  if (!body) return;
  var isOpen = body.style.display !== 'none';
  if (_deptOpenId && _deptOpenId !== num) {
    var ob = document.getElementById('dc-body-' + _deptOpenId);
    var oa = document.getElementById('dc-arrow-' + _deptOpenId);
    if (ob) ob.style.display = 'none';
    if (oa) oa.style.transform = '';
  }
  body.style.display = isOpen ? 'none' : 'block';
  if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(90deg)';
  _deptOpenId = isOpen ? null : num;
}

function _deptAidesHTML(d) {
  var agence = d.agence || '';
  var taux = d.taux && d.taux !== '—' ? d.taux : '20–40%';
  var rows = [
    ['Agence de l\'eau ' + agence, taux + ' du montant HT des travaux', 'Dossier AVANT travaux · Zones prioritaires uniquement'],
    ['Éco-PTZ ANC', 'Jusqu\'à 10 000 €', 'Prêt taux zéro 15 ans · Artisan RGE · Résidence principale'],
    ['TVA réduite 5,5%', 'Automatique sur facture', 'Logement > 2 ans · Résidence principale ou secondaire'],
    ['ANAH (propriétaires modestes)', 'Jusqu\'à 50% du HT', 'Revenus modestes · Dossier MaPrimeRénov\''],
    ['Conseil Départemental ' + d.num, '10–25% selon zonage', 'Renseignements : ' + d.contact],
  ];
  var html = '<table style="width:100%;border-collapse:collapse;font-size:10.5px">'
    + '<tr style="background:var(--c-surface-2)"><th style="padding:5px 7px;text-align:left;font-weight:700;border-bottom:2px solid var(--c-border)">Dispositif</th>'
    + '<th style="padding:5px 7px;text-align:left;font-weight:700;border-bottom:2px solid var(--c-border)">Montant</th>'
    + '<th style="padding:5px 7px;text-align:left;font-weight:700;border-bottom:2px solid var(--c-border)">Conditions</th></tr>';
  rows.forEach(function(r) {
    html += '<tr style="border-bottom:1px solid var(--c-border)">'
      + '<td style="padding:5px 7px;font-weight:600">'+r[0]+'</td>'
      + '<td style="padding:5px 7px;color:var(--c-ok);font-weight:700">'+r[1]+'</td>'
      + '<td style="padding:5px 7px;color:var(--c-text-3)">'+r[2]+'</td></tr>';
  });
  return html + '</table>'
    + '<div class="alert warn" style="font-size:10px;margin-top:6px"><span class="alert-icon">⚠</span><span>Les aides Agence de l\'eau sont réservées aux zones prioritaires (captages, baignade, zones sensibles) — vérifier l\'éligibilité avant de démarrer les travaux.</span></div>';
}

function _deptReglHTML(d) {
  var zonesText = d.oblig || 'Contrôle décennal standard';
  return '<div style="display:flex;flex-direction:column;gap:5px">'
    + '<div class="alert info" style="font-size:10px"><span class="alert-icon">📋</span><span><b>Obligations locales :</b> ' + zonesText + '</span></div>'
    + '<div class="alert info" style="font-size:10px"><span class="alert-icon">⏱</span><span><b>Fréquence contrôle :</b> Tous les 10 ans maximum (Art. L.2224-8 CGCT) — certains SPANC appliquent 8 ans</span></div>'
    + '<div class="alert info" style="font-size:10px"><span class="alert-icon">💰</span><span><b>Redevance SPANC :</b> Variable selon collectivité — généralement 70–150 € par contrôle périodique</span></div>'
    + '<div class="alert warn" style="font-size:10px"><span class="alert-icon">📄</span><span><b>Rapport avant vente :</b> Rapport SPANC de moins de 3 ans obligatoire dans le DDT (Décret 2012-274)</span></div>'
    + '<div class="alert danger" style="font-size:10px"><span class="alert-icon">⛔</span><span><b>Refus d\'accès SPANC :</b> Redevance quadruplée jusqu\'à levée de l\'obstruction — Art. L.1331-8 CSP</span></div>'
    + '</div>';
}

function _deptArretesHTML(d) {
  var agence = d.agence || '';
  var region = d.region || '';
  var isZoneSensible = d.oblig && (d.oblig.includes('captage') || d.oblig.includes('algues') || d.oblig.includes('karst') || d.oblig.includes('nappe') || d.oblig.includes('Nappe') || d.oblig.includes('côtière') || d.oblig.includes('ostréi'));
  var isBretagne = region.includes('Bretagne');
  var isNormandie = region.includes('Normandie');
  var isAlpin = d.oblig && (d.oblig.includes('alpin') || d.oblig.includes('Alpin') || d.oblig.includes('Alpes') || d.oblig.includes('Pyrénées') || d.oblig.includes('Natura 2000'));
  var html = '<div style="display:flex;flex-direction:column;gap:5px">';
  if (isZoneSensible) html += '<div class="alert danger" style="font-size:10px"><span class="alert-icon">🔴</span><span><b>Zone prioritaire :</b> ' + d.oblig + ' — subventions majorées de l\'Agence ' + agence + '</span></div>';
  if (isBretagne) html += '<div class="alert danger" style="font-size:10px"><span class="alert-icon">🌿</span><span><b>Programme algues vertes :</b> Plan de lutte contre la prolifération des algues vertes — délai réhabilitation réduit à 18 mois en zone prioritaire</span></div>';
  if (isNormandie) html += '<div class="alert warn" style="font-size:10px"><span class="alert-icon">💧</span><span><b>Nappe de la Craie :</b> Aquifère karstique très vulnérable — distances réglementaires renforcées (50 m puits au lieu de 35 m dans certaines communes)</span></div>';
  if (isAlpin) html += '<div class="alert warn" style="font-size:10px"><span class="alert-icon">⛰</span><span><b>Zone de montagne :</b> Gel hivernal à prendre en compte (protection des canalisations ANC) · Contraintes Natura 2000 sur choix de filière</span></div>';
  html += '<div class="alert info" style="font-size:10px"><span class="alert-icon">🗺</span><span><b>Zones vulnérables nitrates :</b> Consulter l\'arrêté préfectoral de désignation des zones vulnérables du département sur Légifrance ou prefecture-' + d.num + '.gouv.fr</span></div>';
  html += '<div class="alert info" style="font-size:10px"><span class="alert-icon">📍</span><span><b>Périmètres de captage :</b> Toute installation ANC dans un périmètre de protection rapproché (PPR) d\'un captage AEP nécessite une autorisation préfectorale spécifique</span></div>';
  html += '<div class="alert info" style="font-size:10px"><span class="alert-icon">🌊</span><span><b>SDAGE ' + agence + ' 2022–2027 :</b> Objectif bon état des masses d\'eau — les ANC NC dans les bassins versants dégradés font l\'objet d\'un programme de réhabilitation prioritaire</span></div>';
  return html + '</div>';
}

function _deptContactHTML(d) {
  var num = d.num;
  var deptSlug = 'cd' + num;
  return '<div style="display:flex;flex-direction:column;gap:5px">'
    + '<div class="alert ok" style="font-size:10px"><span class="alert-icon">🌊</span><span><b>Agence de l\'eau :</b> ' + d.agence
      + (d.agence === 'RMC' ? ' — eaurmc.fr' : d.agence === 'AEAG' ? ' — eau-adour-garonne.fr' : d.agence === 'AELB' ? ' — eau-loire-bretagne.fr' : d.agence === 'AESN' ? ' — eau-seine-normandie.fr' : d.agence === 'AERM' ? ' — eau-rhin-meuse.fr' : d.agence === 'ARTOIS-PICARDIE' ? ' — eau-artois-picardie.fr' : '')
      + '</span></div>'
    + '<div class="alert warn" style="font-size:10px"><span class="alert-icon">🏛</span><span><b>SPANC départemental :</b> ' + d.contact + '</span></div>'
    + '<div class="alert info" style="font-size:10px"><span class="alert-icon">🔗</span><span><b>Site préfecture :</b> www.prefecture-' + (num.length === 2 ? num : num.toLowerCase()) + '.gouv.fr — Arrêtés préfectoraux, zones vulnérables</span></div>'
    + '<div class="alert info" style="font-size:10px"><span class="alert-icon">📞</span><span><b>ANAH locale :</b> Délégation locale ANAH du département — aide à la réhabilitation pour propriétaires modestes</span></div>'
    + '<div class="alert info" style="font-size:10px"><span class="alert-icon">🔍</span><span><b>Légifrance :</b> Rechercher "ANC ' + d.name + '" pour les arrêtés préfectoraux locaux</span></div>'
    + '</div>';
}

function _spancDeptCard(d) {
  var taux = d.taux && d.taux !== '—' ? d.taux : null;
  var tabs = [
    {ico:'📋', lbl:'Règlement local', fn: _deptReglHTML},
    {ico:'⚖️', lbl:'Arrêtés préfectoraux', fn: _deptArretesHTML},
    {ico:'💶', lbl:'Aides financières', fn: _deptAidesHTML},
    {ico:'📞', lbl:'Contacts', fn: _deptContactHTML},
  ];
  var bodyHTML = '<div id="dc-body-' + d.num + '" style="display:none;border-top:1px solid var(--c-border);padding:var(--s-2) var(--s-3)">';
  bodyHTML += '<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:var(--s-2)">'
    + tabs.map(function(tab, i) {
        return '<button onclick="_deptTab(\'' + d.num + '\',' + i + ')" id="dctab-' + d.num + '-' + i + '" style="padding:4px 10px;border-radius:var(--r-pill);border:1.5px solid var(--c-border);background:'+(i===0?'var(--c-ep)':'var(--c-surface)')+';color:'+(i===0?'#fff':'var(--c-text-3)')+';font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)">'
          + tab.ico + ' ' + tab.lbl + '</button>';
      }).join('') + '</div>';
  bodyHTML += '<div id="dc-tab-content-' + d.num + '">' + tabs[0].fn(d) + '</div>';
  bodyHTML += '</div>';

  return '<div class="dept-card" style="border-left:3px solid var(--c-ep)">'
    + '<div class="dc-head" onclick="_toggleDeptCard(\'' + d.num + '\')" style="cursor:pointer">'
      + '<div class="dc-num" style="font-size:' + (d.num.length > 2 ? '10px' : '11px') + '">' + d.num + '</div>'
      + '<div style="flex:1"><div class="dc-name">' + d.name + '</div><div class="dc-region">' + d.region + '</div></div>'
      + (taux ? '<span class="badge badge-ok" style="flex-shrink:0;margin-right:4px">' + taux + '</span>' : '')
      + '<span id="dc-arrow-' + d.num + '" style="font-size:20px;color:var(--c-text-4);transition:transform .2s;line-height:1">›</span>'
    + '</div>'
    + bodyHTML
    + '</div>';
}

var _deptTabFns = [_deptReglHTML, _deptArretesHTML, _deptAidesHTML, _deptContactHTML];

function _deptCardInnerHTML(d) {
  var tabs = [
    {ico:'📋', lbl:'Règlement local'},
    {ico:'⚖️', lbl:'Arrêtés préfectoraux'},
    {ico:'💶', lbl:'Aides financières'},
    {ico:'📞', lbl:'Contacts'},
  ];
  var html = '<div class="card card-p" style="padding:var(--s-3)">';
  html += '<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:var(--s-2)">'
    + tabs.map(function(tab, i) {
        return '<button onclick="_deptTabInline(\'' + d.num + '\',' + i + ')" id="dtinl-' + d.num + '-' + i + '" style="padding:4px 10px;border-radius:var(--r-pill);border:1.5px solid var(--c-border);background:'+(i===0?'var(--c-ep)':'var(--c-surface)')+';color:'+(i===0?'#fff':'var(--c-text-3)')+';font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body)">'
          + tab.ico + ' ' + tab.lbl + '</button>';
      }).join('') + '</div>';
  html += '<div id="dtinl-content-' + d.num + '">' + _deptReglHTML(d) + '</div>';
  html += '</div>';
  return html;
}

function _deptTabInline(num, idx) {
  var d = SPANC_DEPTS.find(function(x){ return x.num === num; });
  if (!d) return;
  var content = document.getElementById('dtinl-content-' + num);
  if (!content) return;
  content.innerHTML = _deptTabFns[idx](d);
  for (var i = 0; i < 4; i++) {
    var btn = document.getElementById('dtinl-' + num + '-' + i);
    if (btn) {
      btn.style.background = i === idx ? 'var(--c-ep)' : 'var(--c-surface)';
      btn.style.color = i === idx ? '#fff' : 'var(--c-text-3)';
    }
  }
}

function _deptTab(num, idx) {
  var d = SPANC_DEPTS.find(function(x){ return x.num === num; });
  if (!d) return;
  var content = document.getElementById('dc-tab-content-' + num);
  if (!content) return;
  content.innerHTML = _deptTabFns[idx](d);
  for (var i = 0; i < 4; i++) {
    var btn = document.getElementById('dctab-' + num + '-' + i);
    if (btn) {
      btn.style.background = i === idx ? 'var(--c-ep)' : 'var(--c-surface)';
      btn.style.color = i === idx ? '#fff' : 'var(--c-text-3)';
    }
  }
}

function _spancUpgradeBanner() {
  return '<div style="background:linear-gradient(135deg,#1A0850,#2D1580);border-radius:var(--r-xl);padding:var(--s-4);margin:var(--s-3) 0;display:flex;align-items:center;gap:var(--s-3)">' +
    '<span style="font-size:28px">🗺️</span>' +
    '<div style="flex:1">' +
      '<div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:3px">Accédez aux 101 départements</div>' +
      '<div style="font-size:11px;color:rgba(255,255,255,.65);line-height:1.5">Passez à l\'abonnement Établissement pour consulter tous les SPANC sans restriction.</div>' +
    '</div>' +
    '<button onclick="openSidebar()" style="padding:8px 14px;background:#C8B4FF;color:#1A0850;border:none;border-radius:var(--r-pill);font-size:11px;font-weight:800;cursor:pointer;white-space:nowrap;flex-shrink:0">Voir les offres</button>' +
  '</div>';
}

function renderSPANCList(list) {
  if(!list) list = SPANC_DEPTS;
  var container = document.getElementById('spanc-list');
  if(!container) return;

  var plan = AUTH.user ? (AUTH.user.plan || 'free') : 'free';

  // Plan Pro : pas d'accès SPANC
  if(plan === 'pro') {
    container.innerHTML =
      '<div class="alert warn" style="margin-bottom:var(--s-3)"><span class="alert-icon">ℹ️</span><span>Le SPANC n\'est pas inclus dans le plan Pro. Passez au plan Établissement pour y accéder.</span></div>' +
      _spancUpgradeBanner();
    return;
  }

  // Plan Gratuit : 1 département au choix
  if(plan === 'free') {
    var savedDept = DataStore.spancDept.get();
    // Si aucun département choisi et on affiche toute la liste → proposer de choisir
    if(!savedDept && list.length > 1) {
      container.innerHTML =
        '<div class="alert warn" style="margin-bottom:var(--s-3)"><span class="alert-icon">⚠️</span><span><strong>Plan Gratuit :</strong> vous pouvez choisir 1 seul département SPANC. Ce choix sera mémorisé.</span></div>' +
        '<div style="display:flex;flex-direction:column;gap:var(--s-2)">' +
        list.map(function(d) {
          return '<div style="display:flex;align-items:center;gap:var(--s-2);padding:10px var(--s-3);background:var(--c-surface);border:1px solid var(--c-border);border-radius:var(--r-md);cursor:pointer" onclick="spancChooseDept(\'' + d.num + '\')">' +
            '<div class="dc-num" style="font-size:' + (d.num.length > 2 ? '10px' : '11px') + ';width:36px;height:36px;background:var(--c-ep-l);border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;color:var(--c-ep);font-weight:800;flex-shrink:0">' + d.num + '</div>' +
            '<div><div style="font-size:var(--t-sm);font-weight:700">' + d.name + '</div><div style="font-size:10px;color:var(--c-text-3)">' + d.region + '</div></div>' +
            '<span style="margin-left:auto;color:var(--c-text-4);font-size:18px">›</span>' +
          '</div>';
        }).join('') +
        '</div>' +
        _spancUpgradeBanner();
      return;
    }
    // Département déjà choisi → afficher uniquement celui-là
    if(savedDept) {
      var chosen = SPANC_DEPTS.find(function(d){ return d.num === savedDept; });
      if(chosen) {
        container.innerHTML =
          '<div class="alert warn" style="margin-bottom:var(--s-3)"><span class="alert-icon">⚠️</span><span><strong>Plan Gratuit :</strong> 1 seul département SPANC est disponible avec votre abonnement. <span style="color:var(--c-primary);font-weight:700;cursor:pointer" onclick="spancChangeDept()">Changer de département</span></span></div>' +
          _spancDeptCard(chosen) +
          _spancUpgradeBanner();
        return;
      }
    }
  }

  // Plan Établissement ou liste vide : accès complet
  if(!list.length) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--c-text-3)">Aucun département trouvé</div>';
    return;
  }
  container.innerHTML = list.map(function(d){ return _spancDeptCard(d); }).join('');
}

function spancChooseDept(num) {
  DataStore.spancDept.set(num);
  renderSPANCList();
}

function spancChangeDept() {
  DataStore.spancDept.remove();
  renderSPANCList();
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
       {t:'danger',v:'✗ NC avec danger sanitaire : délai réhabilitation 4 ANS maximum'},
       {t:'danger',v:'✗ NC sans danger : délai 1 AN si vente · Refus d\'accès SPANC : +400% redevance'},
       {t:'info',v:'ℹ Entrée en vigueur progressive : 1er janvier 2025 pour les nouvelles installations'},
     ],
     detail:'Cet arrêté modernise le texte fondateur de 2009 pour responsabiliser davantage le propriétaire : il doit désormais tenir un carnet de suivi (vidanges, pannes, entretiens) consultable par le SPANC lors de tout contrôle.',
     sections:[
       {title:'Contexte et objectifs', type:'text', content:'L\'arrêté du 10 juillet 2024 constitue la deuxième révision majeure du cadre réglementaire ANC depuis 2009. Il répond à deux constats : d\'une part, le taux de non-conformité des installations ANC reste élevé en France (estimé à 30–35% du parc), et d\'autre part, les contrôles SPANC manquaient de traçabilité documentaire rendant difficile tout recours en cas de litige. Le texte renforce donc la responsabilisation du propriétaire et précise les obligations des prestataires de maintenance.'},
       {title:'Nouvelles obligations en vigueur au 1er janvier 2025', type:'table',
        headers:['Obligation','Avant 2025','Après 2025','Concerné'],
        rows:[
          ['Carnet de suivi','Recommandé','Obligatoire (numérique possible)','Propriétaire'],
          ['Contrat microstation','1 an minimum','2 ans minimum','Propriétaire + installateur'],
          ['Fréquence vidange FTE','Tous les 4 ans','Tous les 4 ans (inchangé)','Vidangeur agréé'],
          ['Rapport SPANC vente','3 ans','3 ans (inchangé)','Notaire + vendeur'],
          ['Autosurveillance','Non obligatoire','Annuelle par propriétaire','Propriétaire'],
        ]},
       {title:'Délais de mise en conformité', type:'alerts', items:[
         {t:'danger', v:'⛔ NC avec danger sanitaire ou environnemental : mise en conformité obligatoire dans un délai de 4 ANS à compter de la notification du SPANC'},
         {t:'warn', v:'⚠ NC sans danger immédiat : délai de 1 AN si vente immobilière (à compter de la signature de l\'acte) — délai prorogeable hors vente si contrainte technique démontrée'},
         {t:'ok', v:'✓ NC documentaire uniquement (carnet absent) : délai de régularisation de 6 MOIS avant première pénalité'},
         {t:'info', v:'ℹ Refus d\'accès au SPANC : majoration de redevance de +400% jusqu\'à la levée de l\'obstruction'},
       ]},
       {title:'Sanctions financières applicables', type:'table',
        headers:['Situation','Sanction','Base légale'],
        rows:[
          ['Refus d\'accès SPANC','Redevance × 4 (quadruplée)','Art. L.1331-8 CSP'],
          ['NC danger non résolue sous 4 ans','Mise en demeure préfectorale + astreinte','Art. L.1331-6 CSP'],
          ['Absence de contrat microstation','Constat NC lors prochain contrôle','Arrêté 10/07/2024'],
          ['Travaux sans déclaration préalable','Amende 1 500 € + remise en état','Code Urba. R.421-9'],
        ]},
       {title:'Impact pour les professionnels ANC', type:'list', items:[
         '<b>Bureaux d\'études :</b> intégrer la notice de carnet de suivi dans tout dossier de conception remis au maître d\'ouvrage',
         '<b>Installateurs :</b> remettre obligatoirement le carnet de suivi vierge + notice d\'entretien à la livraison de l\'installation',
         '<b>Mainteneurs microstations :</b> les contrats d\'entretien doivent désormais avoir une durée minimale de 2 ans — revoir les modèles de contrat types',
         '<b>SPANC :</b> lors de chaque contrôle, vérifier la présence et la tenue du carnet de suivi — son absence constitue un motif de NC documentaire',
         '<b>Notaires :</b> le rapport SPANC doit être daté de moins de 3 ans ET mentionner la conformité du carnet de suivi depuis 2025',
       ]},
     ]},
    {ico:'📋',year:2021,isNew:false,color:'var(--c-amber,#886000)',colorl:'var(--c-amber-l,#FDF0D8)',
     name:'Arrêté du 26 février 2021 — Modification prescriptions ANC',
     ref:'NOR : TREL2101948A · Modifie l\'arrêté du 07/09/2009',
     pts:[
       {t:'ok',v:'✓ Renforcement des obligations de maintenance préventive'},
       {t:'ok',v:'✓ Précision des critères de non-conformité (avec/sans danger)'},
       {t:'info',v:'ℹ Précise les conditions d\'installation des filières agréées CE'},
       {t:'info',v:'ℹ Actualisation des distances réglementaires pour certaines filières'},
     ],
     detail:'Ce texte est la première révision majeure de l\'arrêté de 2009 : il clarifie ce qui distingue une non-conformité "avec danger" (péril sanitaire ou environnemental avéré) d\'une non-conformité "sans danger" (sous-dimensionnement sans rejet polluant constaté). Cette distinction conditionne directement le délai de mise en conformité imposé au propriétaire.',
     sections:[
       {title:'Les deux types de non-conformité', type:'table',
        headers:['Type NC','Critères','Délai réhabilitation','Exemples'],
        rows:[
          ['NC avec danger','Péril sanitaire ou environnemental avéré','4 ANS max après notification SPANC','Rejet direct eaux brutes, puits à < 35 m, zone de baignade'],
          ['NC sans danger','Sous-dimensionnement, défaut entretien, absence document','1 AN si vente (acheteur) · Prorogeable hors vente','FTE volume insuffisant, absence de ventilation secondaire, carnet absent'],
        ]},
       {title:'Ce qui a été clarifié par l\'arrêté de 2021', type:'list', items:[
         '<b>Filières agréées CE :</b> la notice d\'installation fournie par le fabricant prime sur les prescriptions générales de l\'arrêté de 2009 en cas de contradiction',
         '<b>Distances réglementaires :</b> maintien des 35 m / puits, 5 m / habitation, 3 m / limite de propriété pour les filières traditionnelles',
         '<b>Maintenance préventive :</b> la fréquence d\'entretien des microstations est désormais définie par la notice constructeur, pas seulement par arrêté',
         '<b>Rapport SPANC :</b> le contenu minimum du rapport est précisé (identification de l\'installation, localisation, photos, conclusion NC avec/sans danger)',
       ]},
       {title:'Points de vigilance pour les techniciens SPANC', type:'alerts', items:[
         {t:'danger', v:'⛔ La qualification "avec danger" DOIT être documentée : photos du rejet, localisation GPS, mesures si possible — sans cela, le propriétaire peut contester devant le tribunal administratif'},
         {t:'warn', v:'⚠ Une NC "sans danger" mal documentée peut être requalifiée "avec danger" si un incident survient après le contrôle — engageant la responsabilité du SPANC'},
         {t:'ok', v:'✓ La présence du propriétaire (ou son représentant) lors du contrôle est obligatoire — un contrôle en son absence n\'est pas opposable'},
         {t:'info', v:'ℹ Le rapport SPANC doit être transmis dans un délai de 3 mois après la visite — passé ce délai, des indemnités peuvent être demandées'},
       ]},
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
     ],
     detail:'C\'est le texte socle de tout l\'ANC moderne en France : il impose la fosse toutes eaux à la place de l\'ancienne fosse septique, fixe les distances de sécurité et définit les trois missions légales du SPANC.',
     sections:[
       {title:'Distances réglementaires obligatoires', type:'table',
        headers:['Ouvrage','Distance minimale','Remarques'],
        rows:[
          ['Puits ou captage AEP','35 m','Toute filière (épandage, FTE, compact)'],
          ['Habitation du propriétaire','5 m','Mesurée depuis tout ouvrage ANC'],
          ['Limite de propriété','3 m','Clôtures, haies, murs mitoyens'],
          ['Arbres et arbustes','3 m','Risque colmatage par racines'],
          ['Cours d\'eau, fossé','5 m','Depuis tout épandage ou filière drainée'],
          ['Route, voie carrossable','3 m','Sauf si protection béton au-dessus'],
        ]},
       {title:'Les 3 missions légales du SPANC', type:'alerts', items:[
         {t:'info', v:'① Contrôle de conception : avant travaux — vérification de l\'étude de sol, du dimensionnement, du choix de filière en adéquation avec le terrain'},
         {t:'info', v:'② Contrôle de réalisation : pendant ou juste après les travaux — vérification de la mise en œuvre (avant remblayage obligatoire)'},
         {t:'info', v:'③ Contrôle périodique de bon fonctionnement : tous les 10 ans maximum — vérification de l\'entretien, de l\'état de la filière, de l\'absence de rejet polluant'},
       ]},
       {title:'Les 6 filières principales définies', type:'table',
        headers:['Filière','Conditions d\'usage','Surface terrain','Contraintes'],
        rows:[
          ['Tranchées d\'épandage','Perméabilité 15–500 mm/h','100–400 m²','Sol non argileux, pas de nappe < 1 m'],
          ['Lit d\'épandage','Perméabilité 15–500 mm/h','60–200 m²','Variante compacte des tranchées'],
          ['Tertre d\'infiltration','Nappe < 0,7 m du fond filière','200–500 m²','Surhaussement requis : 0,5–1,5 m'],
          ['Filière drainante sur sable','Perméabilité < 15 mm/h','90–140 m²','Rejet eaux traitées vers fossé ou puits'],
          ['Épandage par aspersion','Grandes surfaces agricoles','> 1 000 m²','Traitement secondaire préalable requis'],
          ['Filière agréée CE','Terrain contraint','< 5–20 m²','Notice constructeur prime'],
        ]},
       {title:'Sanctions et pouvoirs du SPANC', type:'list', items:[
         '<b>Refus d\'accès :</b> le SPANC peut majorer la redevance de contrôle jusqu\'à 400% — Art. L.1331-8 CSP',
         '<b>Travaux non déclarés :</b> travaux ANC soumis à Déclaration Préalable (DP) si surface créée > 0 m² — Art. R.421-9 Code Urbanisme',
         '<b>Mise en demeure :</b> après délai non respecté, le préfet peut ordonner la réalisation des travaux d\'office aux frais du propriétaire',
         '<b>Transaction immobilière :</b> NC constatée = obligation de mise en conformité dans l\'an suivant l\'acte (Décret 2012-274)',
         '<b>Raccordement réseau :</b> si le réseau collectif passe à moins de 100 m, le propriétaire dispose de 2 ans pour se raccorder — ANC alors interdit',
       ]},
     ]},
    {ico:'📄',year:2012,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Décret n°2012-274 — ANC et vente immobilière',
     ref:'JORF 29/02/2012 · Rapport SPANC dans le DDT (dossier diagnostic technique)',
     pts:[
       {t:'danger',v:'✗ Diagnostic ANC obligatoire dans le DDT pour toute vente immobilière'},
       {t:'danger',v:'✗ Rapport SPANC de moins de 3 ans obligatoire (sinon nouveau contrôle aux frais vendeur)'},
       {t:'info',v:'ℹ Si NC constatée : acheteur dispose de 1 an pour se mettre en conformité'},
       {t:'info',v:'ℹ Le notaire doit informer les parties des obligations ANC'},
     ],
     detail:'Ce décret a transformé le contrôle ANC en enjeu transactionnel direct : sans rapport de conformité de moins de 3 ans, la vente immobilière ne peut être finalisée sereinement.',
     sections:[
       {title:'Processus lors d\'une vente immobilière', type:'table',
        headers:['Étape','Qui ?','Délai','Obligation'],
        rows:[
          ['Demande de contrôle SPANC','Vendeur','Avant signature compromis','Obligatoire si rapport > 3 ans'],
          ['Réalisation du contrôle','SPANC','Sous 3 mois en général','À la charge du vendeur'],
          ['Intégration au DDT','Notaire','Avant acte authentique','Rapport SPANC dans Dossier Diagnostic Technique'],
          ['Information acheteur','Notaire + vendeur','Lors de la signature','Clause obligatoire dans l\'acte'],
          ['Mise en conformité','Acheteur','1 an après acte de vente','Sauf clause spécifique contraire'],
        ]},
       {title:'Impact sur le prix de vente', type:'list', items:[
         '<b>Installation NC sans danger :</b> l\'acheteur peut négocier une réduction de prix couvrant le coût estimé des travaux (5 000 à 15 000 € selon filière)',
         '<b>Installation NC avec danger :</b> peut bloquer le financement bancaire — certaines banques refusent le prêt ou exigent une clause suspensive de mise en conformité',
         '<b>Absence de rapport SPANC :</b> le notaire ne peut pas finaliser sans rapport valide — nouveau contrôle aux frais du vendeur dans un délai contraint',
         '<b>Rapport favorable :</b> argument de vente positif — l\'installation ANC conforme est un atout dans les zones rurales non raccordables',
       ]},
       {title:'Jurisprudence notable', type:'alerts', items:[
         {t:'info', v:'ℹ CA Lyon 2019 : un acheteur a obtenu la résolution de la vente pour dol, le vendeur ayant dissimulé un rapport SPANC NC antérieur à 3 ans'},
         {t:'info', v:'ℹ Cass. Civ. 3ème 2021 : le vendeur n\'est pas tenu de mettre en conformité avant la vente — seule l\'information de l\'acheteur est obligatoire'},
         {t:'warn', v:'⚠ Un notaire qui omet d\'intégrer le rapport SPANC au DDT engage sa responsabilité professionnelle (assurance RCP notariale)'},
       ]},
     ]},
    {ico:'📐',year:2009,isNew:false,color:'var(--c-anc)',colorl:'var(--c-anc-l)',
     name:'Norme NF DTU 64.1 — Conception et mise en œuvre ANC',
     ref:'Norme AFNOR · Référentiel technique d\'exécution des travaux ANC',
     pts:[
       {t:'info',v:'ℹ Référentiel technique de mise en œuvre, distinct de l\'arrêté réglementaire (2009/2021/2024)'},
       {t:'danger',v:'✗ Non-respect du DTU : assurance décennale du constructeur potentiellement non opposable'},
       {t:'info',v:'ℹ Couvre : terrassement, pose des ouvrages, raccordements, remblayage, contrôle d\'étanchéité'},
       {t:'ok',v:'✓ Référence contractuelle dans les devis et garanties des installateurs agréés'},
     ],
     detail:'Le DTU 64.1 est la norme d\'exécution qui complète les arrêtés réglementaires : alors que l\'arrêté fixe les exigences de résultat (distances, volumes, performances), le DTU précise comment exécuter les travaux dans les règles de l\'art (profondeur de pose, pente des canalisations, protection des ouvrages contre les remontées de nappe, etc.). Pour un professionnel, s\'écarter du DTU sans justification technique documentée expose à un refus de couverture par l\'assurance décennale en cas de sinistre — c\'est donc une référence contractuelle incontournable, au même titre que l\'arrêté lui-même.',
     sections:[
       {title:'Prescriptions techniques clés du DTU 64.1', type:'table',
        headers:['Élément','Prescriptions DTU','Conséquence si non-respect','Contrôlé par'],
        rows:[
          ['Pente des canalisations','Minimum 2% (recommandé 3%)','Stagnation, colmatage, remontées d\'odeurs','SPANC contrôle réalisation'],
          ['Remblayage de la fosse','Matériaux non compactants · Sable ou grave propre','Déformation ou fissuration de la fosse','SPANC avant remblayage'],
          ['Ventilation primaire','Continuité du couvercle à la sortie atmosphérique','Pression dans les canalisations · Clapets siphons inefficaces','Contrôle de réalisation'],
          ['Ventilation secondaire','Extracteur au-dessus du toit (≥ 40 cm après faitage)','Mauvaise évacuation des biogaz · Odeurs intérieures','Contrôle de réalisation'],
          ['Protection anti-nappe','Lestage ou ancrage si nappe < 1 m','Soulèvement de la fosse en période de crue','Étude de sol'],
        ]},
       {title:'DTU et assurance décennale — ce que les installateurs doivent savoir', type:'alerts', items:[
         {t:'danger', v:'⛔ Tout écart par rapport au DTU 64.1 non documenté par une note justificative technique peut entraîner le refus de couverture par l\'assurance dommages-ouvrage en cas de sinistre (infiltrations, odeurs, affaissement)'},
         {t:'warn', v:'⚠ Les filières agréées CE (microstations, filtres compacts) sont régies par leur propre notice d\'installation, qui prime sur le DTU — mais le DTU reste applicable pour les parties communes (fosse, canalisations, ventilation)'},
         {t:'ok', v:'✅ Bonne pratique : remettre au maître d\'ouvrage un DOE (Dossier des Ouvrages Exécutés) avec les plans de récolement, le certificat d\'installation et la référence au DTU 64.1 — indispensable pour le rapport SPANC de réalisation'},
         {t:'info', v:'ℹ La norme DTU 64.1 est éditée par l\'AFNOR et mise à jour périodiquement — la version applicable est celle en vigueur à la date du marché, pas à la date des travaux'},
       ]},
       {title:'Points de contrôle essentiels lors de la réalisation', type:'list', items:[
         '<b>Avant remblayage (obligatoire) :</b> l\'installateur doit prévenir le SPANC pour le contrôle de réalisation — tout remblayage sans contrôle préalable est une irrégularité documentée',
         '<b>Essai d\'étanchéité :</b> le DTU recommande un essai à l\'eau (maintien du niveau 30 minutes) sur la fosse avant mise en service — résultat à consigner dans le carnet de suivi',
         '<b>Repérage des ouvrages :</b> obligations de pose de grilles de repérage et d\'un plan coté remis au propriétaire (localisation exacte de tous les ouvrages pour faciliter les contrôles futurs)',
         '<b>Matériaux :</b> uniquement des fosses et regards certifiés NF ou équivalent CE — les éléments sans marquage CE sont refusés lors du contrôle de réalisation',
       ]},
     ]},
    {ico:'⚖️',year:2006,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Code de la santé publique — Art. L.1331-1 à L.1331-8',
     ref:'Base légale du raccordement et du contrôle des installations privées',
     pts:[
       {t:'danger',v:'✗ Art. L.1331-1 : raccordement à l\'égout obligatoire dans les 2 ans suivant sa mise en service'},
       {t:'danger',v:'✗ Art. L.1331-8 : en cas de non-conformité, le propriétaire peut être mis en demeure par la commune'},
       {t:'info',v:'ℹ Donne au SPANC son fondement légal pour pénétrer dans les propriétés privées (avec préavis)'},
       {t:'info',v:'ℹ Articulé avec le Code général des collectivités territoriales pour la police des eaux'},
     ],
     detail:'Ces articles sont la base légale ultime qui permet au SPANC d\'agir : sans eux, aucun contrôle d\'une installation privée ne serait possible. L\'article L.1331-1 instaure la règle miroir de l\'assainissement collectif et non collectif — toute habitation doit être assainie, soit par raccordement à l\'égout si celui-ci existe à moins de 100 m, soit par une installation ANC conforme. L\'article L.1331-8 donne aux communes (via le SPANC) le pouvoir de mettre en demeure un propriétaire récalcitrant, première étape avant des sanctions financières (majoration de redevance) voire des travaux d\'office aux frais du propriétaire en dernier recours.',
     sections:[
       {title:'Les 8 articles fondateurs du SPANC — résumé', type:'table',
        headers:['Article','Objet','Ce qu\'il permet concrètement'],
        rows:[
          ['L.1331-1','Raccordement à l\'égout obligatoire','Toute habitation à < 100 m du réseau doit se raccorder dans les 2 ans'],
          ['L.1331-1-1','Exception ANC admise','Habitations non raccordables → ANC conforme obligatoire'],
          ['L.1331-4','Mise en conformité avant vente','Le vendeur doit fournir rapport SPANC ≤ 3 ans (Décret 2012-274)'],
          ['L.1331-6','Travaux d\'office','Commune peut faire réaliser les travaux aux frais du propriétaire défaillant'],
          ['L.1331-7','Participation financière au raccordement','La commune peut réclamer une participation pour raccordement à l\'égout'],
          ['L.1331-8','Majoration de redevance','Refus d\'accès SPANC → redevance × 4 jusqu\'à levée obstruction'],
          ['L.1331-9','Pouvoir de contrôle','Agents habilités peuvent pénétrer dans les propriétés privées (préavis 7 jours)'],
          ['L.1331-11','Police sanitaire','Préfet peut ordonner les travaux en urgence pour risque sanitaire avéré'],
        ]},
       {title:'Comment s\'applique l\'obligation de raccordement', type:'alerts', items:[
         {t:'danger', v:'⛔ L.1331-1 : dès qu\'un réseau d\'assainissement collectif est mis en service à moins de 100 m de la façade, l\'installation ANC existante devient INTERDITE et le propriétaire dispose de 2 ans pour se raccorder'},
         {t:'warn', v:'⚠ La distance de 100 m est mesurée en suivi des voies publiques (pas à vol d\'oiseau) — vérifier le tracé exact du réseau sur le plan des réseaux de la commune'},
         {t:'info', v:'ℹ Dérogation possible si raccordement techniquement impossible ou financièrement excessif — à demander à la commune, qui peut accorder un maintien de l\'ANC à titre permanent'},
         {t:'ok', v:'✅ Participation pour raccordement (L.1331-7) : la commune peut demander une participation financière allant jusqu\'à 80% du coût de l\'installation ANC supprimée — à négocier avant signature du DDT lors d\'une vente'},
       ]},
       {title:'Mise en demeure et travaux d\'office — procédure', type:'list', items:[
         '<b>Étape 1 — Notification du SPANC :</b> rapport de contrôle notifié au propriétaire avec délai de mise en conformité (1 à 4 ans selon gravité)',
         '<b>Étape 2 — Constat de carence :</b> si le délai est dépassé sans travaux, le SPANC saisit le maire ou le préfet',
         '<b>Étape 3 — Mise en demeure préfectorale :</b> arrêté préfectoral fixant un délai ultime sous astreinte journalière',
         '<b>Étape 4 — Travaux d\'office (L.1331-6) :</b> en dernier recours, la commune fait réaliser les travaux et récupère les coûts par voie fiscale (taxe foncière supplémentaire)',
         '<b>Sanctions pénales :</b> entrave délibérée au contrôle SPANC = contravention de 5e classe (1 500 € d\'amende)',
       ]},
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
     ],
     detail:'Ce règlement européen — d\'application directe, sans transposition nécessaire — harmonise les exigences sanitaires pour irriguer avec des eaux usées traitées plutôt que de l\'eau potable. La classe requise dépend de la culture et du mode d\'irrigation. En France, la frilosité reste forte ; le Plan Eau 2023 vise à simplifier les autorisations préfectorales.',
     sections:[
       {title:'Les 4 classes de REUT et leurs usages', type:'table',
        headers:['Classe','E. coli (UFC/100mL)','Usage autorisé','Mode d\'irrigation'],
        rows:[
          ['Classe A (le plus strict)','≤ 10','Cultures consommées crues (salade, fraises...)','Tous modes (aspersion, goutte-à-goutte)'],
          ['Classe B','≤ 100','Cultures transformées ou pelées avant consommation','Goutte-à-goutte préférentiel'],
          ['Classe C','≤ 1 000','Cultures non consommées crues (blé, maïs...)','Goutte-à-goutte ou aspersion basse'],
          ['Classe D (le moins strict)','≤ 10 000','Pâturages non alimentaires, forêts industrielles','Aspersion tolérée'],
        ]},
       {title:'Procédure d\'autorisation en France', type:'list', items:[
         '<b>Dossier de demande :</b> déposé en préfecture — inclut l\'étude de risque sanitaire et environnementale, le plan d\'épandage, les analyses de l\'eau traitée',
         '<b>Analyse requise :</b> E. coli, Légionella pneumophila, helminthes, turbidité — fréquence fixée par l\'arrêté préfectoral d\'autorisation',
         '<b>Zone tampon :</b> 50 m minimum entre zone d\'irrigation Classe A et zone d\'habitation · 200 m pour aspersion en zone fréquentée',
         '<b>Traçabilité :</b> registre de suivi obligatoire — volumes utilisés, analyses, incidents — consultable par la police de l\'eau',
         '<b>Plan Eau 2023 :</b> objectif ×10 de REUT d\'ici 2030 — simplification administrative prévue par décret en cours',
       ]},
     ]},
    {ico:'🏭',year:2007,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Arrêté du 22/06/2007 — Collecte et traitement des eaux usées STEU',
     ref:'NOR : DEVO0752257A · Texte de référence pour toutes les STEU',
     pts:[
       {t:'danger',v:'✗ Rejet DBO₅ : < 25 mg/L ou rendement > 70% · DCO : < 125 mg/L · MES : < 35 mg/L'},
       {t:'danger',v:'✗ Autosurveillance obligatoire : fréquence selon taille STEU (trimestrielle à journalière)'},
       {t:'info',v:'ℹ Zone sensible (> 10 000 EH) : NTK < 10 mg/L · Pt < 1 mg/L'},
       {t:'info',v:'ℹ Rapport annuel autosurveillance transmis à la DREAL et l\'Agence de l\'eau'},
     ],
     detail:'Ce texte fixe les normes de rejet que toute station d\'épuration doit respecter, avec des seuils renforcés en zone sensible et zone de baignade.',
     sections:[
       {title:'Normes de rejet selon la taille de la STEU', type:'table',
        headers:['Paramètre','< 2 000 EH','2 000–10 000 EH','> 10 000 EH (zone sensible)'],
        rows:[
          ['DBO₅','< 25 mg/L ou rendement 60%','< 25 mg/L ou rendement 70%','< 25 mg/L ou rendement 70%'],
          ['DCO','< 125 mg/L','< 125 mg/L','< 125 mg/L'],
          ['MES','< 35 mg/L','< 35 mg/L','< 35 mg/L'],
          ['NTK (azote)','Non requis','Non requis','< 10 mg/L (zone sensible > 10 000 EH)'],
          ['Phosphore total','Non requis','Non requis','< 1 mg/L (zone sensible > 10 000 EH)'],
        ]},
       {title:'Fréquences d\'autosurveillance obligatoire', type:'table',
        headers:['Taille STEU','DBO₅/DCO/MES','Azote/Phosphore','Débit'],
        rows:[
          ['< 120 EH','Mensuelle','Non requis','Hebdomadaire'],
          ['120–2 000 EH','Mensuelle','Non requis','Continue ou journalière'],
          ['2 000–10 000 EH','Bimestrielle','Trimestrielle','Continue'],
          ['> 10 000 EH','Hebdomadaire','Hebdomadaire (zone sensible)','Continue + bilan annuel'],
        ]},
       {title:'Sanctions en cas de dépassement', type:'alerts', items:[
         {t:'danger', v:'⛔ Dépassement récurrent DBO₅/DCO/MES : pénalités financières Agence de l\'eau calculées par tonne de pollution excédentaire (barème annuel)'},
         {t:'danger', v:'⛔ Mise en demeure préfectorale : possible si dépassement > 3 fois en 12 mois — peut aboutir à suspension de l\'arrêté d\'autorisation'},
         {t:'warn', v:'⚠ Défaut de transmission autosurveillance : assimilé à un dépassement de seuil pour le calcul des redevances de l\'Agence de l\'eau'},
         {t:'info', v:'ℹ Résultats transmis via VERSEAU (plateforme nationale) — consultation publique possible depuis 2016'},
       ]},
       {title:'Zones sensibles — obligations renforcées', type:'list', items:[
         '<b>Critères zone sensible :</b> masse d\'eau exposée à l\'eutrophisation, zone de baignade, captage AEP important, zone Natura 2000 aquatique',
         '<b>Traitement tertiaire obligatoire</b> pour phosphore (< 1 mg/L) : filière de déphosphatation chimique (chlorure ferrique) ou biologique (procédé EBPR)',
         '<b>Dénitrification :</b> zone sensible azote → NTK < 10 mg/L — procédé à boues activées faible charge avec dénitrification ou filtre biologique',
         '<b>Révision périodique :</b> la liste des zones sensibles est révisée tous les 4 ans par le Ministère — une STEU peut basculer en zone sensible entre deux SDAGE',
       ]},
     ]},
    {ico:'🏛️',year:2015,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Loi NOTRe du 7 août 2015 — Eau et assainissement EPCI',
     ref:'Loi n°2015-991 · JORF 08/08/2015 · Art. 64 et 66',
     pts:[
       {t:'danger',v:'✗ Depuis 01/01/2020 : eau et assainissement = compétences OBLIGATOIRES des EPCI'},
       {t:'info',v:'ℹ Communautés urbaines et métropoles : compétence obligatoire depuis 2016'},
       {t:'info',v:'ℹ Loi Ferrand-Fesneau 2018 : report à 2026 possible si 25% communes s\'y opposent avant 2019'},
       {t:'info',v:'ℹ Conséquence : fusion syndicats · Renégociation DSP · Mutualisation des moyens'},
     ],
     detail:'Cette loi a profondément restructuré le paysage institutionnel de l\'eau en France en retirant aux communes isolées la compétence eau et assainissement au profit des intercommunalités (EPCI). L\'objectif : atteindre une taille critique pour mutualiser l\'ingénierie et investir dans le renouvellement des réseaux vieillissants.',
     sections:[
       {title:'Calendrier de transfert de compétences', type:'table',
        headers:['Type d\'EPCI','Eau potable','Assainissement','Remarque'],
        rows:[
          ['Métropoles et communautés urbaines','Obligatoire depuis 2016','Obligatoire depuis 2016','Déjà effectif'],
          ['Communautés d\'agglomération','Obligatoire depuis 01/01/2020','Obligatoire depuis 01/01/2020','Loi NOTRe initiale'],
          ['Communautés de communes','Obligatoire depuis 01/01/2020','Obligatoire depuis 01/01/2020','Loi Ferrand-Fesneau : report 2026 possible'],
          ['Syndicats intercommunaux','Dissolution ou fusion dans l\'EPCI','Idem','Délai négocié localement'],
        ]},
       {title:'Conséquences pratiques pour les techniciens', type:'alerts', items:[
         {t:'info', v:'ℹ Fusion des syndicats : les règlements de service et les tarifs doivent être harmonisés sur le territoire de l\'EPCI — délai de transition 5 ans possible'},
         {t:'warn', v:'⚠ DSP en cours : les contrats de délégation de service public signés avant le transfert restent en vigueur jusqu\'à leur terme — la compétence est transférée mais le contrat suit'},
         {t:'ok', v:'✓ Mutualisation : les EPCI peuvent désormais disposer d\'une ingénierie interne complète (techniciens réseau, hydrogéologue, ingénieur STEU) — objectif de réduction des coûts sur le long terme'},
         {t:'info', v:'ℹ SPANC : transfert inclut le SPANC — harmonisation des fréquences de contrôle et des tarifs sur tout le territoire intercommunal'},
       ]},
     ]},
    {ico:'⚠️',year:2015,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Arrêté du 21/07/2015 — Déversoirs d\'orage',
     ref:'Arrêté relatif aux systèmes d\'assainissement collectif et aux installations de prétraitement',
     pts:[
       {t:'danger',v:'✗ Taux de dilution minimal au déversoir : généralement 5 (réglementaire local)'},
       {t:'danger',v:'✗ Autosurveillance DO obligatoire si débit > 120 m³/h (mesure débit + durée déversements)'},
       {t:'info',v:'ℹ Déclaration annuelle des volumes déversés obligatoire'},
       {t:'info',v:'ℹ Programme de mise en conformité des DO à présenter à l\'autorité compétente'},
     ],
     detail:'Les déversoirs d\'orage (DO) sont les points du réseau unitaire où les eaux mélangées (usées + pluviales) peuvent être rejetées directement au milieu naturel en cas de forte pluie, sans passer par la station. Cet arrêté impose un suivi quantitatif systématique des rejets et un programme de mise en conformité pour les DO les plus impactants.',
     sections:[
       {title:'Obligations selon le type de réseau', type:'table',
        headers:['Débit DO','Autosurveillance requise','Rapport annuel','Délai conformité'],
        rows:[
          ['< 120 m³/h','Non obligatoire','Non','Schéma directeur si impact avéré'],
          ['120–500 m³/h','Mesure débit + durée déversements','Oui, à la DREAL','Programme travaux si > 4 événements/an'],
          ['> 500 m³/h ou zone sensible','Mesure continue en temps réel','Oui, trimestriel','Programme travaux prioritaire'],
        ]},
       {title:'Points de vigilance', type:'alerts', items:[
         {t:'danger', v:'⛔ Zone de baignade ou captage AEP en aval : tout DO non instrumenté à moins de 2 km est une non-conformité à régulariser en priorité'},
         {t:'warn', v:'⚠ Déversements fréquents (> 4×/an) : indice de dysfonctionnement du réseau — à signaler dans le RPQS et au schéma directeur d\'assainissement'},
         {t:'info', v:'ℹ Résultats transmis via VERSEAU (plateforme nationale) — données publiques consultables en ligne'},
         {t:'ok', v:'✓ Bonne pratique : installer des capteurs de niveau (limnimètres) + alarme SMS — coût 2 000–5 000 € vs amende et redevances pollution'},
       ]},
     ]},
    {ico:'🇪🇺',year:1991,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Directive 91/271/CEE — Traitement des eaux urbaines résiduaires',
     ref:'Directive fondatrice européenne · Révision en cours (2024) pour neutralité carbone 2045',
     pts:[
       {t:'danger',v:'✗ Agglomérations > 2 000 EH : collecte et traitement secondaire obligatoires'},
       {t:'danger',v:'✗ Zones sensibles à l\'eutrophisation : traitement tertiaire (azote/phosphore) renforcé'},
       {t:'info',v:'ℹ Transposée en droit français par l\'arrêté du 22/06/2007 et ses prédécesseurs'},
       {t:'info',v:'ℹ Révision 2024 : extension du traitement quaternaire (micropolluants) pour les grandes STEU'},
     ],
     detail:'C\'est la directive mère de tout l\'assainissement collectif européen : elle a structuré l\'obligation de collecter et traiter les eaux usées pour les agglomérations > 2 000 EH. La France a été condamnée plusieurs fois par la CJUE pour retard. La révision 2024 vise un traitement quaternaire (micropolluants) pour les STEU > 100 000 EH.',
     sections:[
       {title:'Obligations selon la taille de l\'agglomération', type:'table',
        headers:['Taille agglomération','Collecte','Traitement requis','Délai initial'],
        rows:[
          ['< 2 000 EH','Non obligatoire (ANC possible)','Non requis par directive','N/A'],
          ['2 000–10 000 EH','Réseau collectif obligatoire','Traitement secondaire (DBO₅, DCO, MES)','31/12/2005'],
          ['10 000–150 000 EH','Réseau collectif obligatoire','Secondaire + zones sensibles : tertiaire','31/12/1998'],
          ['> 150 000 EH','Réseau collectif obligatoire','Secondaire + tertiaire + (quaternaire 2045)','31/12/1998'],
        ]},
       {title:'Révision 2024 — traitement quaternaire', type:'alerts', items:[
         {t:'ok', v:'🆕 Traitement quaternaire obligatoire pour STEU > 100 000 EH d\'ici 2045 : élimination des micropolluants (résidus médicamenteux, perturbateurs endocriniens)'},
         {t:'info', v:'ℹ Financement : principe de responsabilité élargie du producteur (REP) pharmaceutique — industrie pharma contribue au financement des équipements'},
         {t:'warn', v:'⚠ Neutralité carbone STEU : objectif 2045 pour les stations > 10 000 EH — cogénération des boues, réduction du N₂O obligatoire'},
         {t:'info', v:'ℹ Condamnations France CJUE : plusieurs arrêts pour défaut de traitement en zone sensible (Bretagne, Bassin parisien) — majorations financières notables'},
       ]},
     ]},
    {ico:'📜',year:2006,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Code de la santé publique — Art. L.1331-1 (raccordement à l\'égout)',
     ref:'Obligation de raccordement et sanctions associées',
     pts:[
       {t:'danger',v:'✗ Raccordement obligatoire dans les 2 ans suivant la mise en service du réseau collectif'},
       {t:'danger',v:'✗ Défaut de raccordement : astreinte financière équivalente à la redevance non perçue, majorée'},
       {t:'info',v:'ℹ La commune peut exécuter les travaux de raccordement d\'office, aux frais du propriétaire'},
       {t:'info',v:'ℹ Exonération possible si raccordement techniquement impossible (justification requise)'},
     ],
     detail:'Cet article impose une obligation claire : dès qu\'un réseau collectif est mis en service à proximité d\'une habitation, son propriétaire dispose de 2 ans pour s\'y raccorder et abandonner son installation ANC. En cas de refus persistant, la collectivité peut exécuter les travaux d\'office aux frais du propriétaire.',
     sections:[
       {title:'Délais et exceptions', type:'table',
        headers:['Situation','Délai de raccordement','Exception possible','Qui décide'],
        rows:[
          ['Réseau mis en service — habitation existante','2 ans après mise en service','Impossibilité technique démontrée','Arrêté municipal motivé'],
          ['Construction neuve en zone desservie','Raccordement obligatoire dès construction','Aucune','Permis de construire conditionné'],
          ['Réseau à moins de 100 m (ANC existant)','2 ans','Accord préfectoral si coût excessif','Préfet'],
          ['Zone d\'assainissement non collectif','Pas d\'obligation de raccordement','N/A — ANC obligatoire','Commune (zonage)'],
        ]},
       {title:'Sanctions en cas de non-raccordement', type:'alerts', items:[
         {t:'danger', v:'⛔ Majoration de la redevance d\'assainissement : montant équivalent à ce que le propriétaire aurait payé s\'il était raccordé — cumulatif jusqu\'à la mise en conformité'},
         {t:'danger', v:'⛔ Travaux d\'office : après mise en demeure restée sans effet, la commune exécute les travaux et en récupère le coût + 10% de frais de gestion'},
         {t:'warn', v:'⚠ Transaction immobilière : l\'état de raccordement doit figurer dans le diagnostic assainissement annexé à la promesse de vente — non-conformité = risque de résolution de vente'},
         {t:'info', v:'ℹ Aide financière possible : certaines Agences de l\'eau subventionnent les branchements au réseau — se renseigner auprès de la collectivité compétente'},
       ]},
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
     ],
     detail:'Cette révision marque un changement de philosophie : on passe d\'une approche purement curative (contrôler la qualité au robinet) à une approche préventive "du captage au robinet" via le Plan de Sécurité de l\'Eau (PSE), qui impose aux exploitants d\'identifier et de maîtriser les risques à chaque étape de la chaîne. L\'intégration des PFAS ("polluants éternels", très persistants) répond à une préoccupation sanitaire croissante : de nombreux captages français dépasseront probablement les seuils 2026, ce qui impliquera des investissements en traitement (charbon actif, osmose inverse) pour de nombreuses collectivités d\'ici la transposition complète.',
     sections:[
       {title:'Calendrier de transposition en France', type:'table',
        headers:['Obligation','Échéance','Statut'],
        rows:[
          ['PFAS totaux < 0,1 µg/L','Janvier 2026','Transposition en cours'],
          ['Remplacement branchements plomb','Décembre 2026','Arrêté en préparation'],
          ['Plan de Sécurité de l\'Eau (UDI > 5 000 m³/j)','Janvier 2026','Circulaire ministérielle prévue'],
          ['Information consommateurs en ligne','Juillet 2025','En cours'],
          ['Microplastiques — valeur limite','2030 (watchlist)','Pas encore fixée'],
        ]},
       {title:'Nouveaux paramètres PFAS — limites 2026', type:'table',
        headers:['Paramètre','Nouvelle limite','Procédé de traitement recommandé'],
        rows:[
          ['PFAS totaux (20 listés)','< 0,1 µg/L','Charbon actif en grain ou osmose inverse'],
          ['PFOA / PFOS individuel','< 0,02 µg/L','Charbon actif haute dose + nanofiltration'],
          ['Bisphénol A','< 2,5 µg/L','Nanofiltration ou osmose inverse'],
          ['Chlorates','< 0,25 mg/L','Optimisation de la chloration'],
        ]},
       {title:'Impact pratique pour les exploitants AEP', type:'alerts', items:[
         {t:'danger', v:'⛔ Captages en zones industrielles, proches aéroports ou bases militaires : analyser le PFAS total dès maintenant — seuil 0,1 µg/L sera opposable dès 2026'},
         {t:'warn', v:'⚠ PSE obligatoire pour UDI > 5 000 m³/j en 2026 : démarrer la démarche en 2025 avec bureau d\'études agréé + validation ARS'},
         {t:'ok', v:'✓ Branchements plomb : établir l\'inventaire est la première étape — données disponibles auprès de la mairie ou du syndicat'},
         {t:'info', v:'ℹ Microplastiques : surveillance obligatoire dès 2026 pour UDI > 10 000 m³/j — pas de valeur limite avant 2030'},
       ]},
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
     ],
     detail:'C\'est le texte de référence quotidien pour tout exploitant d\'un réseau d\'eau potable en France : il fixe les limites de qualité opposables, contrôlées par l\'ARS via un programme d\'analyses réglementaires (le fameux "contrôle sanitaire"). Un dépassement, même ponctuel, déclenche une procédure spécifique : information immédiate des consommateurs, recherche de la cause, et restriction d\'usage (ex. "eau impropre à la consommation des nourrissons") si le seuil sanitaire est franchi.',
     sections:[
       {title:'Paramètres microbiologiques — limites absolues', type:'table',
        headers:['Paramètre','Limite','Fréquence','Conséquence dépassement'],
        rows:[
          ['E. coli','0 UFC/100 mL','Programme ARS (P1)','Alerte immédiate + restriction usage'],
          ['Entérocoques','0 UFC/100 mL','Programme ARS (P1)','Alerte immédiate + restriction usage'],
          ['Bactéries sulfito-réductrices','0 spores/100 mL','Programme P2','Indicateur contamination profonde'],
        ]},
       {title:'Paramètres physico-chimiques clés', type:'table',
        headers:['Paramètre','Limite réglementaire','Valeur cible','Enjeu sanitaire'],
        rows:[
          ['Nitrates NO₃⁻','< 50 mg/L','< 25 mg/L','Méthémoglobinémie nourrissons'],
          ['Plomb','< 10 µg/L','< 5 µg/L (futur 2026)','Neurotoxicité enfants'],
          ['Turbidité (distribution)','< 1 NTU','< 0,2 NTU','Efficacité de la désinfection'],
          ['pH','6,5–9,0','7,2–7,8','Corrosion réseau / entartrage'],
          ['Chlore résiduel libre','< 0,5 mg/L','0,1–0,3 mg/L','Protection microbiologique réseau'],
          ['Pesticides totaux','< 0,5 µg/L','< 0,1 µg/L','Contamination agricole'],
        ]},
       {title:'Procédure en cas de dépassement', type:'alerts', items:[
         {t:'danger', v:'⛔ Dépassement microbiologique : information ARS dans les 24h + affichage mairie + information abonnés — restriction d\'usage possible (ne pas boire, ne pas cuisiner)'},
         {t:'danger', v:'⛔ Restriction levée uniquement sur décision formelle de l\'ARS après 2 analyses conformes consécutives'},
         {t:'warn', v:'⚠ Dépassement chimique hors urgence : signalement ARS dans les 72h + plan d\'action correctif à soumettre sous 15 jours'},
         {t:'info', v:'ℹ Résultats transmis via SISE-Eaux (système d\'information santé environnement) — consultables en mairie par tout citoyen'},
       ]},
     ]},
    {ico:'🔵',year:1998,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Directive 98/83/CE — Eau destinée à la consommation humaine (ancienne)',
     ref:'Remplacée par Directive 2020/2184 · Toujours en vigueur jusqu\'à transposition complète',
     pts:[
       {t:'info',v:'ℹ 48 paramètres de qualité fixés · Toujours applicable jusqu\'à transposition 2020/2184'},
       {t:'info',v:'ℹ Base du CSP art. R.1321-2 et de l\'Arrêté 11/01/2007'},
     ],
     detail:'Bien que formellement remplacée par la directive 2020/2184, cette directive historique reste la référence implicite tant que la transposition française n\'est pas achevée sur tous ses volets (le calendrier s\'étend jusqu\'en 2026-2027 pour certains paramètres comme le plomb).',
     sections:[
       {title:'Ce qu\'elle a introduit (encore applicable)', type:'list', items:[
         '<b>48 paramètres de qualité</b> : base de l\'arrêté du 11/01/2007 — E. coli, nitrates, pesticides, métaux lourds',
         '<b>Contrôle sanitaire obligatoire</b> : programme d\'analyses périodiques sur tous les réseaux publics (repris par arrêté 20/06/2007)',
         '<b>Information des consommateurs</b> : rapport annuel de qualité obligatoire, transmis sur facture — toujours en vigueur',
         '<b>Obligations des États membres</b> : assurer eau propre à la consommation pour tous — base juridique des poursuites contre la France pour retard',
       ]},
       {title:'Différences clés avec la directive 2020/2184', type:'table',
        headers:['Sujet','Directive 98/83/CE','Directive 2020/2184'],
        rows:[
          ['PFAS','Non inclus','Limites strictes dès 2026'],
          ['Plomb','< 10 µg/L','< 5 µg/L (délai 2036)'],
          ['Plan de sécurité (PSE)','Non requis','Obligatoire > 5 000 m³/j'],
          ['Droit d\'accès à l\'eau','Non prévu','Article explicite'],
          ['Microplastiques','Absents','Watchlist + surveillance'],
        ]},
     ]},
    {ico:'⚖️',year:2007,isNew:false,color:'var(--c-ep)',colorl:'var(--c-ep-l)',
     name:'Code de la santé publique — Art. R.1321-1 à R.1321-63',
     ref:'Cadre réglementaire complet du contrôle sanitaire des eaux destinées à la consommation humaine',
     pts:[
       {t:'danger',v:'✗ Toute personne responsable de la production/distribution doit assurer la surveillance de l\'eau'},
       {t:'info',v:'ℹ Définit les autorisations préfectorales nécessaires pour exploiter un captage AEP'},
       {t:'info',v:'ℹ Encadre les périmètres de protection des captages (immédiat, rapproché, éloigné)'},
       {t:'danger',v:'✗ Non-déclaration d\'un dépassement de seuil sanitaire : responsabilité pénale du gestionnaire'},
     ],
     detail:'Ces articles forment l\'architecture réglementaire complète qui chapeaute l\'arrêté du 11/01/2007 : ils définissent qui est responsable de quoi (producteur d\'eau, distributeur, ARS), comment un captage doit être autorisé et protégé, et quelles sont les obligations de transparence en cas de problème.',
     sections:[
       {title:'Responsabilités par acteur', type:'table',
        headers:['Acteur','Obligation principale','Sanction en cas de manquement'],
        rows:[
          ['Producteur (syndicat, commune)','Surveiller la qualité en sortie traitement · Informer l\'ARS','Mise en demeure préfectorale + amende'],
          ['Distributeur','Maintenir la qualité jusqu\'au robinet · Carnet sanitaire à jour','Responsabilité pénale si dissimulation'],
          ['ARS','Contrôle sanitaire officiel · Autorisation d\'utilisation','Peut ordonner l\'arrêt de la distribution'],
          ['Préfet','Autorisation d\'exploitation du captage','Peut retirer l\'autorisation'],
        ]},
       {title:'Autorisations préfectorales obligatoires', type:'list', items:[
         '<b>Captage :</b> autorisation préfectorale requise avant tout prélèvement — dossier : étude hydrogéologique + enquête publique + avis du CODERST',
         '<b>Installation de traitement :</b> tout nouveau procédé de désinfection ou traitement doit être notifié à l\'ARS avant mise en service',
         '<b>Périmètres de protection :</b> déclaration d\'Utilité Publique (DUP) obligatoire — délai moyen 3 à 7 ans pour les captages non encore protégés',
         '<b>Dérogation de qualité :</b> si dépassement ponctuel, dérogation ARS possible sous conditions — durée limitée + plan d\'action obligatoire',
       ]},
     ]},
    {ico:'🔬',year:2007,isNew:false,color:'var(--c-ep)',colorl:'var(--c-ep-l)',
     name:'Arrêté du 20 juin 2007 — Programme de surveillance de la qualité',
     ref:'Fixe les fréquences et types d\'analyses du contrôle sanitaire selon la population desservie',
     pts:[
       {t:'info',v:'ℹ Fréquence d\'analyse croissante avec la population desservie (mensuelle à journalière)'},
       {t:'info',v:'ℹ Distingue analyses de type P1 (routine), P2 (complète), et analyses occasionnelles'},
       {t:'danger',v:'✗ Non-respect du programme de surveillance : non-conformité administrative vis-à-vis de l\'ARS'},
     ],
     detail:'Ce texte technique répond à une question très concrète pour les exploitants : combien d\'analyses, de quel type, et à quelle fréquence ? La réponse dépend directement de la taille de l\'unité de distribution (UDI) desservie — plus la population est nombreuse, plus la fréquence et la complétude des analyses augmentent.',
     sections:[
       {title:'Fréquences d\'analyse selon la taille de l\'UDI', type:'table',
        headers:['Volume distribué','Type P1 (routine)','Type P2 (complète)','Paramètres P1'],
        rows:[
          ['< 100 m³/j (< 400 hab.)','1×/trimestre','1×/an','E. coli, turbidité, chlore, pH'],
          ['100–1 000 m³/j','1×/mois','1×/an','E. coli, entérocoques, turbidité, chlore'],
          ['1 000–5 000 m³/j','2×/mois','1×/an + si anomalie','Bactério + paramètres chimiques de base'],
          ['> 5 000 m³/j','Fréquence calculée','Trimestrielle','Tous paramètres réglementaires'],
        ]},
       {title:'Différence P1 / P2', type:'alerts', items:[
         {t:'info', v:'ℹ Analyse P1 (routine) : vérification des paramètres les plus sensibles (bactériologie, turbidité, chlore résiduel, pH) — résultat en 24–48h'},
         {t:'info', v:'ℹ Analyse P2 (complète) : tous les paramètres de l\'arrêté 11/01/2007 — métaux, pesticides, nitrates, hydrocarbures — résultat en 5–10 jours'},
         {t:'warn', v:'⚠ Non-respect du programme de surveillance : assimilé à un dépassement de seuil pour le calcul des redevances Agence de l\'eau — impact financier direct'},
         {t:'ok', v:'✓ Laboratoires agréés obligatoires : liste consultable sur le site du Ministère — prélèvement par un agent assermenté de l\'ARS ou un prestataire agréé'},
       ]},
     ]},
    {ico:'🛡️',year:2001,isNew:false,color:'var(--c-ep)',colorl:'var(--c-ep-l)',
     name:'Décret du 20/12/2001 — Périmètres de protection des captages AEP',
     ref:'Code de l\'environnement art. R.1321-13 · Déclaration d\'Utilité Publique (DUP)',
     pts:[
       {t:'danger',v:'✗ PPI (Périmètre de Protection Immédiat) : clôturé, propriété publique, aucune activité'},
       {t:'danger',v:'✗ PPR (Périmètre de Protection Rapproché) : interdictions ou réglementations précises (épandage, forage, stockage)'},
       {t:'info',v:'ℹ PPE (Périmètre de Protection Éloigné) : recommandations d\'usage sur le BV élargi'},
       {t:'danger',v:'✗ DUP obligatoire avant exploitation · Délai moyen 3–7 ans · Avis hydrogéologue agréé requis'},
       {t:'info',v:'ℹ Captages prioritaires Grenelle : PPR renforcé + plan d\'action agricole sur le BV'},
     ],
     detail:'La procédure de déclaration d\'utilité publique (DUP) qui préside à la création des périmètres de protection est longue et complexe : elle mobilise une étude hydrogéologique, une enquête publique et des arrêtés préfectoraux contraignants pour les propriétaires riverains. Le périmètre immédiat (typiquement quelques centaines de m²) doit être clôturé et appartenir à la collectivité ; le périmètre rapproché (quelques km²) impose des restrictions d\'activité pouvant aller jusqu\'à l\'interdiction d\'épandage ou de stockage de produits phytosanitaires. En pratique, une part non négligeable des captages français (environ un tiers selon les estimations ARS) n\'est toujours pas protégée par une DUP, exposant les collectivités à des risques sanitaires et juridiques.'},
    {ico:'⚗️',year:2008,isNew:false,color:'var(--c-ep)',colorl:'var(--c-ep-l)',
     name:'Arrêté du 25/11/2008 — Désinfection des eaux destinées à la consommation humaine',
     ref:'Chloration, UV, ozonation — niveaux résiduels · Sous-produits de désinfection',
     pts:[
       {t:'danger',v:'✗ Chlore résiduel libre en distribution : 0,1–0,3 mg/L (recommandé) · Maxi 0,5 mg/L'},
       {t:'danger',v:'✗ Trihalométhanes (THM) totaux : < 100 µg/L · Acide haloacétique en surveillance'},
       {t:'info',v:'ℹ UV : dose minimale 40 mJ/cm² (validation conformité EN 14897)'},
       {t:'info',v:'ℹ Ozone : appliqué avant filtration charbon actif pour limiter les bromates (< 10 µg/L)'},
       {t:'warn',v:'⚠ Excès chlore (> 0,5 mg/L) : risque formation THM · Goût et odeur dégradés'},
     ],
     detail:'La désinfection est le dernier rempart contre les risques microbiologiques avant la distribution. La chloration reste le procédé de référence français pour sa persistance dans le réseau, mais elle génère des sous-produits de désinfection (THM) quand le chlore réagit avec la matière organique. Le maintien d\'un résiduel chloré suffisant — ni trop faible (recroissance bactérienne) ni trop élevé (THM, goût) — est un exercice d\'équilibre quotidien.',
     sections:[
       {title:'Comparatif des procédés de désinfection', type:'table',
        headers:['Procédé','Avantages','Limites','Usage typique'],
        rows:[
          ['Chloration (hypochlorite)','Résiduel persistant · Peu coûteux · Simple','Formation THM si MO élevée · Goût possible','Tous réseaux, distribution'],
          ['UV (40 mJ/cm²)','Pas de sous-produits · Efficace contre Crypto','Pas de résiduel · Eau turbide = inefficace','Traitement amont, petites UDI'],
          ['Ozonation','Très efficace · Détruit micropolluants','Pas de résiduel · Coûteux · Bromates possibles','Grandes STEP, eau de surface'],
          ['Dioxyde de chlore (ClO₂)','Résiduel stable · Pas de THM','Chlorites résiduels réglementés','Eau fortement chargée en MO'],
        ]},
       {title:'Seuils et sous-produits à surveiller', type:'alerts', items:[
         {t:'danger', v:'⛔ THM totaux (trihalométhanes) : < 100 µg/L — mesuré en bout de réseau, là où la concentration est maximale'},
         {t:'danger', v:'⛔ Chlore résiduel > 0,5 mg/L au robinet : dépassement réglementaire + formation de THM accélérée'},
         {t:'warn', v:'⚠ Chlore résiduel < 0,05 mg/L en distribution : risque de recroissance bactérienne — surtout en période chaude (T° réseau > 20°C)'},
         {t:'info', v:'ℹ Bromates (ozonation) : < 10 µg/L — paramètre à surveiller systématiquement si ozonation sur eau de surface riche en bromures'},
       ]},
     ]},
    {ico:'🔧',year:2012,isNew:false,color:'var(--c-ep)',colorl:'var(--c-ep-l)',
     name:'Décret 2012-97 — Rapport annuel prix et qualité du service eau potable (RPQS)',
     ref:'Code général des collectivités territoriales L.2224-5 · Indicateurs de performance',
     pts:[
       {t:'danger',v:'✗ RPQS obligatoire avant le 30 juin de l\'année N+1 · Présenté à l\'assemblée délibérante'},
       {t:'danger',v:'✗ Indicateurs clés : rendement réseau · Indice linéaire de pertes · ILC (connaissance patrimoine)'},
       {t:'info',v:'ℹ Rendement < 80% ou ILP > 1,5 m³/km/j (urbain) : obligation de schéma directeur'},
       {t:'info',v:'ℹ Publication obligatoire sur le portail eau.france.fr (SISPEA) dès 2026'},
       {t:'ok',v:'🆕 Plan Eau 2023 : seuils de rendement renforcés · Objectif national 85% d\'ici 2035'},
     ],
     detail:'Le RPQS est le document de référence annuel pour évaluer la performance d\'un service d\'eau potable : le rendement du réseau (eau facturée / eau produite) est son indicateur roi, directement lié aux pertes par fuites. Un réseau à faible rendement constitue non seulement un gâchis de la ressource, mais aussi un surcoût de production que payent indirectement les abonnés.',
     sections:[
       {title:'Indicateurs clés du RPQS eau potable', type:'table',
        headers:['Indicateur','Définition','Seuil d\'alerte','Action déclenchée'],
        rows:[
          ['Rendement réseau','Eau facturée / Eau mise en distribution × 100','< 80% (rural) / < 85% (urbain)','Schéma directeur de réhabilitation obligatoire'],
          ['ILP — Indice Linéaire de Pertes','m³ perdus / km réseau / jour','> 1,5 m³/km/j (urbain)','Idem schéma directeur'],
          ['ILC — Connaissance patrimoine','Inventaire des canalisations','< 40 points / 100','Financement Agence eau conditionné'],
          ['Prix TTC au m³','Eau + assainissement + taxes','Aucun seuil légal','Indicateur de comparaison'],
          ['Taux de réclamations','Réclamations / 1 000 abonnés','> 15 pour 1 000','Indicateur qualité service'],
        ]},
       {title:'Obligations et délais', type:'alerts', items:[
         {t:'danger', v:'⛔ RPQS à présenter en assemblée délibérante avant le 30 juin de l\'année N+1 (ex: RPQS 2024 → avant 30/06/2025)'},
         {t:'danger', v:'⛔ Publication sur SISPEA (eau.france.fr) obligatoire — non-publication = non-conformité administrative signalée par l\'ARS'},
         {t:'warn', v:'⚠ Rendement < 80% sans schéma directeur en cours : financement Agence de l\'eau pour tout nouveau projet conditionné à son établissement'},
         {t:'ok', v:'✓ Plan Eau 2023 : objectif national 85% d\'ici 2035 — Agences de l\'eau priorisent les collectivités ayant un plan de réduction des fuites'},
       ]},
     ]},
    {ico:'🏗️',year:2003,isNew:false,color:'var(--c-ep)',colorl:'var(--c-ep-l)',
     name:'Arrêté du 22/07/2003 — Adduction d\'eau potable — Conception des réseaux',
     ref:'DTU 60.11 complémentaire · Normes NF EN 805 et NF EN 1057',
     pts:[
       {t:'danger',v:'✗ Vitesse distribution : 0,3–1,5 m/s (anti-dépôts/anti-coup de bélier)'},
       {t:'danger',v:'✗ Pression résiduelle minimale : 1 bar au branchement abonné'},
       {t:'info',v:'ℹ Matériaux autorisés contact alimentaire : fonte ductile, PVC-C, PE100, acier inox 316L'},
       {t:'info',v:'ℹ Chambre de comptage : interdite sous voirie principale · Accessibilité maintenance'},
       {t:'danger',v:'✗ Ventouses, purges, régulateurs de pression : obligatoires selon le profil altimétrique'},
     ],
     detail:'Ce texte fixe les prescriptions techniques minimales pour la conception des réseaux d\'adduction et de distribution d\'eau potable : dimensionnement hydraulique, matériaux en contact avec l\'eau, prescriptions de pose, et accessoires obligatoires. Le respect des vitesses d\'écoulement admissibles est crucial pour éviter deux écueils opposés : une vitesse trop faible favorise la formation de dépôts (tartre, biofilm, rouille) et la stagnation pouvant altérer la qualité de l\'eau, tandis qu\'une vitesse trop élevée génère des coups de bélier lors des manœuvres de vannes et accélère l\'usure des équipements. La pression minimale garantie de 1 bar au branchement est une obligation de résultat qui conditionne le bon fonctionnement des installations intérieures des abonnés.'},
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
       {t:'info',v:'ℹ Contentieux CE : France mise en demeure pour non-atteinte des objectifs'},
     ],
     detail:'La DCE a introduit une approche radicalement nouvelle : gérer l\'eau non plus par usage (eau potable, irrigation, pêche…) mais par "masse d\'eau" — unité écologique cohérente. Et pour chaque masse d\'eau : un objectif de résultat mesurable, le "bon état", et une interdiction absolue de dégradation.',
     sections:[
       {title:'Qu\'est-ce que le "bon état" d\'une masse d\'eau ?', type:'table',
        headers:['Type de bon état','Ce qui est mesuré','Indicateurs','État France 2024'],
        rows:[
          ['Bon état écologique','Qualité biologique du milieu','Poissons, invertébrés, macrophytes, diatomées','~43% des masses d\'eau'],
          ['Bon état chimique','Absence de substances dangereuses','41 substances prioritaires (pesticides, métaux lourds, HAP…)','<50% (PFAS = problème majeur)'],
          ['Bon potentiel (MEFE)','Masses d\'eau fortement modifiées (barrages, canaux)','Objectif assoupli mais mesuré','Variable selon le type'],
        ]},
       {title:'Le principe de non-dégradation — comment il s\'applique', type:'alerts', items:[
         {t:'danger', v:'⛔ Un projet peut être REFUSÉ même s\'il ne compromet pas l\'atteinte du bon état — il suffit qu\'il risque de dégrader l\'état actuel d\'une masse d\'eau déjà en bon état'},
         {t:'danger', v:'⛔ Exemple concret : un rejet industriel en rivière en bon état écologique peut être refusé même s\'il respecte les normes, si la DCE est invoquée par l\'instructeur pour non-dégradation'},
         {t:'warn', v:'⚠ La France a reçu une mise en demeure de la Commission Européenne en 2024 pour non-atteinte des objectifs 2015/2021 — ce contentieux accélère l\'instruction stricte des dossiers IOTA au niveau local'},
         {t:'info', v:'ℹ Les SDAGE (révisés tous les 6 ans) déclinent les objectifs DCE par masse d\'eau au niveau national — ils sont opposables aux projets'},
       ]},
       {title:'Les 6 districts hydrographiques français', type:'list', items:[
         '<b>Seine-Normandie</b> — Agence AESN · Ile-de-France, Normandie, Champagne, Picardie',
         '<b>Loire-Bretagne</b> — Agence AELB · Pays de la Loire, Centre, Bretagne, Auvergne partiellement',
         '<b>Rhône-Méditerranée-Corse</b> — Agence RMC · PACA, Rhône-Alpes, Bourgogne partiellement',
         '<b>Adour-Garonne</b> — Agence AEAG · Nouvelle-Aquitaine, Occitanie, Auvergne partiellement',
         '<b>Rhin-Meuse</b> — Agence AERM · Grand Est (Alsace, Lorraine, Champagne Ardenne partiellement)',
         '<b>Artois-Picardie</b> — Agence AP · Hauts-de-France, Nord-Pas-de-Calais',
       ]},
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
     ],
     detail:'Cette directive a imposé une approche par probabilité de crue plutôt que binaire "inondable/non inondable". Elle a engendré les PPRi (Plans de Prévention du Risque Inondation) qui sont opposables aux permis de construire et aux projets d\'aménagement.',
     sections:[
       {title:'Les 3 scénarios de crue réglementaires', type:'table',
        headers:['Scénario','Période de retour','Probabilité annuelle','Usage réglementaire','Zone PPRi typique'],
        rows:[
          ['Crue fréquente (T10)','10 ans','10%','Cartographie de sensibilisation','Information préventive'],
          ['Crue centennale (T100)','100 ans','1%','Référence PPRi · Délimitation zones rouges/bleues','Zone rouge : inconstructible · Zone bleue : prescriptions'],
          ['Crue extrême (T1000)','1 000 ans','0,1%','Cartographie pour PCS et DICRIM','Aléa résiduel pour les ouvrages de protection'],
        ]},
       {title:'PPRi — Impact sur les projets de construction et d\'aménagement', type:'alerts', items:[
         {t:'danger', v:'⛔ Zone rouge PPRi : interdiction de construire quasi absolue — les refus de permis de construire y sont systématiques et légalement solides'},
         {t:'warn', v:'⚠ Zone bleue PPRi : construction possible sous conditions — rehaussement du plancher habitable hors d\'eau (PHH), pas de sous-sol, équipements techniques en étage, matériaux résistants à l\'eau'},
         {t:'info', v:'ℹ Le PPRi est annexé au PLU de la commune et est opposable aux tiers dès sa prescription (même avant approbation définitive)'},
         {t:'info', v:'ℹ PAPI (Programme d\'Actions de Prévention des Inondations) : outil de financement des travaux de protection · Contractualisé entre EPCI et État · Cofinancé par le FPRNM (fonds "Barnier")'},
       ]},
       {title:'Ce que cela implique pour un bureau d\'études hydrauliques', type:'list', items:[
         '<b>Étude hydraulique :</b> le calcul des débits de crue (Q10, Q100) est la base de toute étude d\'aménagement en zone inondable — les modèles HEC-RAS ou MIKE FLOOD sont les plus utilisés',
         '<b>Dossier IOTA :</b> tout projet en zone inondable doit démontrer l\'absence de remontée du niveau de crue (transparence hydraulique) et la non-aggravation du risque pour l\'aval',
         '<b>Compensation volumétrique :</b> si le projet remblaye en zone inondable, un volume de déblai équivalent doit être créé à proximité pour compenser la perte de champ d\'expansion de crue',
         '<b>PCS et DICRIM :</b> les communes en TRI doivent réviser leur Plan Communal de Sauvegarde — les études hydrauliques fournissent les cartes d\'aléas nécessaires',
       ]},
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
     ],
     detail:'Cette loi a réuni en un seul organisme (l\'OFB) toute la police de l\'environnement, et renforcé drastiquement les sanctions sur les zones humides. Le ratio de compensation 1 ha détruit → 2 ha compensés est devenu l\'un des principaux points de blocage des projets d\'aménagement.',
     sections:[
       {title:'L\'OFB — nouveau visage de la police de l\'eau', type:'text', content:'Avant 2020, les agents de l\'ONEMA contrôlaient l\'eau et les milieux aquatiques, tandis que les agents de l\'ONCFS contrôlaient la faune sauvage et la chasse. La fusion en OFB a créé une police de l\'environnement unifiée, avec des agents ayant des pouvoirs de police judiciaire pour constater les infractions environnementales (atteinte aux zones humides, infractions IOTA, pollution des eaux). En pratique, c\'est l\'OFB qui reçoit les signalements de chantiers suspects et qui peut déclencher un procès-verbal transmis au parquet.'},
       {title:'Zones humides — règle de compensation et sanctions', type:'table',
        headers:['Situation','Obligation légale','Sanction si non-respect','Base légale'],
        rows:[
          ['Destruction < 1 ha (rubrique IOTA 3.2.2.0)','Déclaration + compensation 2:1 en surface ET qualité','Arrêt de chantier + remise en état + amende','Code envt L.211-1'],
          ['Destruction ≥ 1 ha','Autorisation + compensation 2:1 + suivi 30 ans','Amende jusqu\'à 150 000 € + emprisonnement possible','Code envt L.163-1'],
          ['Destruction sans déclaration','Irrégularité automatique','Remise en état + amende + responsabilité pénale MO','L.173-1 Code envt'],
          ['Compensation insuffisante en qualité','Refus réception par instructeur','Travaux supplémentaires imposés d\'office','Arrêté d\'autorisation'],
        ]},
       {title:'Espèces Exotiques Envahissantes (EEE) — obligations', type:'alerts', items:[
         {t:'danger', v:'⛔ Tout porteur de projet doit réaliser un inventaire EEE avant travaux : jussie, renouée du Japon, myriophylle aquatique… — leur déplacement sans précaution lors de terrassements est passible de sanction'},
         {t:'warn', v:'⚠ La renouée du Japon en particulier : les terres contaminées ne peuvent pas être utilisées en remblai ou en dépôt sans traitement — elles doivent être gérées en déchets verts spéciaux'},
         {t:'info', v:'ℹ L\'OFB publie la liste officielle des EEE préoccupantes : certaines espèces peuvent bloquer un chantier si leur gestion n\'est pas anticipée dans le dossier IOTA'},
       ]},
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
     ],
     detail:'La loi Grenelle II a créé deux outils majeurs : les 500 captages prioritaires (protéger les points de prélèvement les plus menacés) et la Trame Verte et Bleue (préserver les corridors écologiques dans les documents d\'urbanisme).',
     sections:[
       {title:'Les 500 captages prioritaires Grenelle — pourquoi et comment', type:'text', content:'Ces captages ont été sélectionnés parmi les plus dégradés de France pour leur forte teneur en nitrates ou en pesticides. Autour de chacun, un plan d\'action sur le Bassin d\'Alimentation du Captage (BAC) doit être établi et mis en œuvre : il identifie les sources de pollution et propose des mesures contractuelles avec les agriculteurs (MAE, bandes enherbées, réduction des intrants). L\'objectif : reconquérir la qualité de l\'eau à la source plutôt que de la traiter.'},
       {title:'Trame Verte et Bleue — impact sur l\'urbanisme et l\'hydraulique', type:'table',
        headers:['Composante','Ce qu\'elle protège','Outil réglementaire','Impact pour un projet'],
        rows:[
          ['Trame Bleue','Cours d\'eau, zones humides, ripisylves, plaines inondables','Zonage N ou A du PLU · SRADDET régional','Inconstructibilité possible · Étude d\'impact renforcée'],
          ['Trame Verte','Bois, haies, prairies, corridors terrestres','PLU · SCoT · SRADDET','Limitation de l\'artificialisation dans les continuités'],
          ['Bandes enherbées','Lisières 5 m minimum en zone agricole le long des cours d\'eau','Conditionnalité PAC + arrêté préfectoral','Limite les travaux à moins de 5 m des berges'],
        ]},
       {title:'Ce que cela signifie pour un projet d\'aménagement', type:'alerts', items:[
         {t:'danger', v:'⛔ Un projet situé en continuité écologique TVB identifiée (carte SRADDET) doit démontrer qu\'il ne fragmente pas le corridor — c\'est une condition d\'obtention du permis ou de l\'autorisation IOTA'},
         {t:'warn', v:'⚠ Les PLU et SCoT doivent être compatibles avec le SRADDET (Schéma Régional d\'Aménagement et de Développement Durable) qui cartographie les TVB — vérifier la carte régionale avant tout dépôt de PC ou dossier IOTA'},
         {t:'info', v:'ℹ Pour les captages prioritaires Grenelle : si le projet est dans le BAC, un avis de la collectivité gestionnaire du captage peut être requis dans le dossier IOTA ou DUP'},
       ]},
     ]},
    {ico:'🌾',year:1991,isNew:false,color:'var(--c-riv)',colorl:'var(--c-riv-l)',
     name:'Directive Nitrates 91/676/CEE',
     ref:'Directive européenne · Zones vulnérables et programmes d\'action régionaux',
     pts:[
       {t:'danger',v:'✗ Zones vulnérables : épandage d\'azote organique plafonné (généralement 170 kg N/ha/an)'},
       {t:'danger',v:'✗ Périodes d\'interdiction d\'épandage selon les cultures et le calendrier régional'},
       {t:'info',v:'ℹ Révision des zones vulnérables tous les 4 ans sur la base des mesures de nitrates'},
       {t:'info',v:'ℹ France : contentieux européen récurrent pour zonage insuffisant ou contrôles laxistes'},
     ],
     detail:'Les nitrates agricoles sont la première cause de dégradation des captages d\'eau potable en France rurale. Cette directive classe les territoires les plus touchés en "zones vulnérables" et y impose des programmes d\'action contraignants pour les exploitants agricoles.',
     sections:[
       {title:'Comment fonctionne le classement en zone vulnérable ?', type:'text', content:'Une zone est classée vulnérable aux nitrates lorsque les eaux superficielles ou souterraines dépassent ou risquent de dépasser 50 mg/L de nitrates — le seuil réglementaire pour l\'eau potable. Ce classement déclenche l\'application d\'un Programme d\'Action National (PAN) et de Programmes d\'Action Régionaux (PAR) plus stricts, négociés entre les services de l\'État et les représentants agricoles. La révision intervient tous les 4 ans.'},
       {title:'Principales obligations en zone vulnérable', type:'table',
        headers:['Obligation','Règle générale','Dérogation possible','Contrôle par'],
        rows:[
          ['Plafond d\'azote organique','170 kg N/ha/an (effluents d\'élevage)','Autorisation préfectorale exceptionnelle','DDT + Chambre agriculture'],
          ['Périodes d\'interdiction d\'épandage','Selon calendrier régional (généralement: 1 nov – 15 janv pour les céréales)','Non (périodes fixes)','OFB + DDT'],
          ['Distance aux cours d\'eau','35 m minimum sans bande enherbée · 5 m avec bande enherbée de 5 m','Réduction possible avec couverture végétale','OFB lors de patrouilles'],
          ['Stockage des effluents','Capacité de stockage ≥ durée interdiction d\'épandage','Non applicable (obligation absolue)','Chambre agriculture'],
        ]},
       {title:'Impact sur la gestion des captages AEP', type:'alerts', items:[
         {t:'danger', v:'⛔ Nitrates > 50 mg/L au captage : mise en conformité obligatoire — le gestionnaire AEP doit soit traiter (dénitrification coûteuse), soit mettre en œuvre un plan d\'action agricole sur le bassin d\'alimentation'},
         {t:'warn', v:'⚠ 500 captages prioritaires Grenelle (loi Grenelle II) sont tous en zone vulnérable nitrates — les obligations y sont renforcées avec un suivi spécifique par les Agences de l\'eau'},
         {t:'info', v:'ℹ Pour un professionnel de l\'ANC : vérifier que le terrain d\'épandage ANC n\'est pas en zone vulnérable — si oui, la distance aux cours d\'eau et les conditions d\'infiltration sont soumises à des exigences renforcées par le SPANC'},
       ]},
     ]},
    {ico:'🐟',year:2006,isNew:false,color:'var(--c-riv)',colorl:'var(--c-riv-l)',
     name:'Arrêté du 17/03/2006 — Continuité écologique des cours d\'eau',
     ref:'Code de l\'environnement L.214-17 · Classement liste 1 et liste 2 · Référentiel OFB',
     pts:[
       {t:'danger',v:'✗ Liste 1 (cours d\'eau en très bon état) : aucun nouvel ouvrage faisant obstacle'},
       {t:'danger',v:'✗ Liste 2 : équipement ou effacement de TOUS les ouvrages dans un délai de 5 ans'},
       {t:'info',v:'ℹ Passes à poissons : efficacité contrôlée par l\'OFB · Espèces cibles définies par arrêté préfectoral'},
       {t:'info',v:'ℹ Effacement d\'ouvrage : financé à 50–80% par les Agences de l\'eau · Procédure IOTA'},
       {t:'warn',v:'⚠ Propriétaire d\'un ouvrage en liste 2 inactif au-delà du délai : astreinte journalière + travaux d\'office'},
     ],
     detail:'Le classement en liste 2 est souvent vécu comme une contrainte lourde par les propriétaires de moulins et petits ouvrages hydroélectriques : il impose de rendre la rivière franchissable aux poissons migrateurs (saumons, truites fario, anguilles…) soit en installant une passe à poissons, soit en effaçant totalement l\'ouvrage. L\'effacement est souvent préféré par les gestionnaires de bassin car plus efficace hydrauliquement et écologiquement, mais il se heurte à l\'attachement patrimonial des propriétaires. Le bras de fer juridique et administratif autour de ces classements a alimenté de nombreux contentieux, certains propriétaires contestant la liste elle-même, d\'autres contestant le diagnostic d\'efficacité des passes installées.',
     sections:[
       {title:'Liste 1 vs Liste 2 — ce que cela implique concrètement', type:'table',
        headers:['Classement','Principe','Obligation','Délai','Sanction si inaction'],
        rows:[
          ['Liste 1 (très bon état écologique)','Préserver l\'état actuel · Aucune nouvelle entrave','Refus systématique de tout nouvel ouvrage faisant obstacle','Immédiat (permanent)','Refus d\'autorisation · Annulation permis'],
          ['Liste 2 (à restaurer)','Rétablir la libre circulation des espèces migratrices','Équiper l\'ouvrage d\'une passe à poissons OU l\'effacer','5 ans après classement','Astreinte journalière + travaux d\'office aux frais du propriétaire'],
        ]},
       {title:'Passe à poissons ou effacement — comment choisir ?', type:'alerts', items:[
         {t:'danger', v:'⛔ La passe à poissons n\'est pas automatiquement acceptée : l\'OFB contrôle son efficacité réelle. Si le taux de franchissement est insuffisant (mesuré par radiopistage), une mise en demeure de compléter les travaux ou d\'effacer l\'ouvrage peut suivre'},
         {t:'warn', v:'⚠ L\'effacement est souvent recommandé par les agences de bassin : il rétablit le profil en long naturel, améliore le transport sédimentaire et la température de l\'eau — effets sur le bon état DCE bien au-delà du simple transit des poissons'},
         {t:'info', v:'ℹ Financement Agences de l\'eau : 50–80% du coût HT pour les travaux de continuité écologique — selon les bassins et l\'état d\'urgence de la liste. Priorité aux ouvrages en liste 2 depuis longtemps inactifs'},
         {t:'ok', v:'✅ Espèces cibles en France : saumon atlantique, truite fario, anguille européenne (classée en danger critique), lamproie marine, alose feinte — les espèces cibles sont définies par arrêté préfectoral pour chaque ouvrage'},
       ]},
       {title:'Procédure IOTA pour les travaux de continuité', type:'list', items:[
         '<b>Effacement total :</b> dossier IOTA en autorisation (impact sur lit mineur, sédiments, zones humides) — inclure étude hydraulique avant/après + suivi morphologique 3 ans',
         '<b>Installation d\'une passe :</b> dossier IOTA en déclaration ou autorisation selon la hauteur de l\'ouvrage (rubrique 3.1.1.0) + plan de surveillance de l\'efficacité sur 5 ans',
         '<b>Clause importante :</b> les travaux sur un ouvrage soumis au droit de pêche nécessitent un avis de la Fédération de Pêche départementale — à anticiper dans l\'instruction',
         '<b>Répartition des coûts :</b> si la DIG est utilisée, la collectivité GEMAPI peut prendre en charge les travaux sur les ouvrages privés récalcitrants et récupérer une partie des coûts auprès du propriétaire',
       ]},
     ]},
    {ico:'🏞️',year:2004,isNew:false,color:'var(--c-aides)',colorl:'var(--c-aides-l)',
     name:'Directive Habitats-Faune-Flore 92/43/CEE — Natura 2000 volet aquatique',
     ref:'Directive européenne · ZSC en France · Évaluation des incidences Natura 2000',
     pts:[
       {t:'danger',v:'✗ Évaluation des incidences (EIN) obligatoire pour tout projet dans un site N2000 ou susceptible de l\'affecter'},
       {t:'info',v:'ℹ 1 800 sites Natura 2000 en France · Espèces d\'intérêt communautaire aquatiques : chabot, lamproie, écrevisses à pattes blanches'},
       {t:'info',v:'ℹ N2000 ≠ zone inconstructible · Gestion contractuelle via DOCOB · Mesures compensatoires si impact inévitable'},
       {t:'warn',v:'⚠ Absence d\'EIN pour un projet impactant un site N2000 : irrégularité entachant le permis ou l\'autorisation'},
     ],
     detail:'L\'évaluation des incidences Natura 2000 est un point fréquemment sous-estimé dans l\'instruction des projets hydrauliques : tout aménagement susceptible d\'affecter un site N2000 — même s\'il est en dehors des limites du site — doit faire l\'objet d\'une évaluation, dont la conclusion peut être "pas d\'incidence significative" (ce qui est le cas de la grande majorité des dossiers). En hydraulique, les espèces aquatiques protégées comme l\'écrevisse à pattes blanches (très sensible à la pollution et à l\'échauffement) ou la lamproie marine constituent des indicateurs de la bonne santé des cours d\'eau et peuvent conditionner les débits réservés ou les conditions de rejets à proximité de leurs habitats.',
     sections:[
       {title:'Quand une Évaluation des Incidences Natura 2000 (EIN) est-elle obligatoire ?', type:'alerts', items:[
         {t:'danger', v:'⛔ Tout projet, plan ou programme susceptible d\'affecter un site Natura 2000 — MÊME s\'il est situé EN DEHORS des limites du site — doit faire l\'objet d\'une EIN. La proximité suffit : un rejet dans un cours d\'eau qui traverse un site N2000 en aval déclenche l\'obligation'},
         {t:'danger', v:'⛔ Absence d\'EIN = irrégularité de fond qui entache l\'autorisation et la rend annulable par le juge administratif — et ce même si l\'EIN aurait conclu à "pas d\'incidence significative"'},
         {t:'warn', v:'⚠ La liste des projets soumis à EIN par défaut est fixée par arrêté préfectoral dans chaque département — vérifier la liste locale avant tout dépôt de dossier IOTA en zone potentiellement impactante'},
         {t:'info', v:'ℹ Bonne nouvelle : dans plus de 90% des dossiers IOTA, la conclusion de l\'EIN est "absence d\'incidence significative" — c\'est un formulaire standardisé (cerfa 14734*02) mais il faut le joindre'},
       ]},
       {title:'Espèces aquatiques d\'intérêt communautaire — les plus fréquentes', type:'table',
        headers:['Espèce','Sensibilité principale','Impact hydraulique redouté','Mesures de protection typiques'],
        rows:[
          ['Écrevisse à pattes blanches','Pollution et réchauffement de l\'eau','Rejets thermiques, eutrophisation','Maintien ombre ripisylve, aucun rejet en période estivale'],
          ['Lamproie marine','Franchissabilité des cours d\'eau','Seuils et barrages bloquant la migration','Passe à poissons adaptée (pente douce) ou effacement'],
          ['Chabot','Colmatage du substrat gravier','Matières en suspension lors des travaux','Batardeaux, barrières à limons, travaux en étiage'],
          ['Triton crêté','Destruction des mares et fossés','Remblaiement zones humides annexes','Compensation habitats + suivi 10 ans'],
        ]},
       {title:'Comment rédiger une EIN en pratique', type:'list', items:[
         '<b>Étape 1 — Localisation :</b> identifier les sites Natura 2000 dans un rayon de 5 km (cartographie INPN : inpn.mnhn.fr) et les fiches espèces/habitats pour lesquels le site est désigné',
         '<b>Étape 2 — Analyse des incidences :</b> démontrer que le projet n\'affecte pas les espèces et habitats ayant justifié la désignation — distance, connectivité hydraulique, nature des rejets, emprise temporaire ou permanente',
         '<b>Étape 3 — Conclusion :</b> soit "pas d\'incidence significative" (très fréquent) soit nécessité de mesures d\'atténuation (calendrier de chantier, limitation des rejets, surveillance) soit mesures compensatoires (rare)',
         '<b>Délai :</b> inclure l\'EIN dans le dossier IOTA ou le dossier PC — ne pas attendre une demande de complément de l\'instruction',
       ]},
     ]},
    {ico:'💧',year:2006,isNew:false,color:'var(--c-riv)',colorl:'var(--c-riv-l)',
     name:'SDAGE — Schémas Directeurs d\'Aménagement et de Gestion des Eaux',
     ref:'Code de l\'environnement L.212-1 · Révisés tous les 6 ans · 6 SDAGE métropolitains',
     pts:[
       {t:'danger',v:'✗ SDAGE opposable aux décisions administratives (permis, autorisations IOTA, DUP)'},
       {t:'danger',v:'✗ Dérogation à la non-atteinte du bon état : motif d\'intérêt public majeur + mesures compensatoires'},
       {t:'info',v:'ℹ SAGE (échelle sous-bassin) : compatible avec le SDAGE · Intègre les enjeux locaux'},
       {t:'info',v:'ℹ Bassins : Seine-Normandie, Loire-Bretagne, Rhône-Méditerranée-Corse, Adour-Garonne, Rhin-Meuse, Artois-Picardie'},
       {t:'info',v:'ℹ SDAGE 2022–2027 : intègre changement climatique, REUT, pollutions émergentes (PFAS, médicaments)'},
     ],
     detail:'Le SDAGE est le "plan de gestion" décennal de chaque grand bassin versant : il fixe les objectifs et les règles auxquels toutes les décisions administratives touchant à l\'eau doivent être compatibles. Ignorer le SDAGE applicable à un projet, c\'est s\'exposer à un recours contentieux ou un refus d\'autorisation.',
     sections:[
       {title:'SDAGE vs SAGE — quelle différence ?', type:'table',
        headers:['Document','Échelle','Qui l\'établit','Force juridique','Révisé tous les'],
        rows:[
          ['SDAGE','Grand bassin hydrographique (~100 000 km²)','Comité de bassin + Agence de l\'eau','Opposable — les décisions admin doivent être COMPATIBLES','6 ans'],
          ['SAGE','Sous-bassin versant (~100 à 5 000 km²)','Commission Locale de l\'Eau (CLE)','Opposable — peut être plus strict que le SDAGE','Variable (souvent 10 ans)'],
          ['PGRE','Zone de Répartition des Eaux (ZRE)','Préfet de bassin','Limite les autorisations de prélèvement','Selon besoins'],
        ]},
       {title:'Dispositions clés du SDAGE 2022–2027 (tous bassins)', type:'list', items:[
         '<b>Non-dégradation stricte :</b> tout projet doit démontrer l\'absence d\'impact négatif sur l\'état des masses d\'eau concernées — pas seulement l\'atteinte des objectifs DCE',
         '<b>Zones humides :</b> les SDAGE fixent des objectifs de préservation et de restauration — certains bassins imposent un ratio de compensation 3:1 au lieu du minimum légal de 2:1',
         '<b>Débits réservés :</b> les cours d\'eau en situation d\'étiage critique font l\'objet de règles strictes dans le SDAGE — les prélèvements peuvent être suspendus en période d\'alerte sécheresse',
         '<b>PFAS et micropolluants :</b> les SDAGE 2022–2027 intègrent pour la première fois des dispositions spécifiques aux polluants émergents, avec des obligations de surveillance renforcées',
         '<b>Continuité écologique :</b> la liste des cours d\'eau classés (L1 et L2) découle directement des orientations SDAGE',
       ]},
       {title:'Comment vérifier la compatibilité de son projet avec le SDAGE', type:'alerts', items:[
         {t:'info', v:'ℹ Étape 1 : identifier le bassin hydrographique et le SDAGE applicable (cartographie sur sandre.eaufrance.fr)'},
         {t:'info', v:'ℹ Étape 2 : vérifier si un SAGE est approuvé sur la zone du projet — il peut contenir des règles plus contraignantes'},
         {t:'danger', v:'⛔ Étape 3 : démontrer dans le dossier IOTA ou le rapport d\'impact que le projet est "compatible" avec les orientations et dispositions SDAGE applicables — cette démonstration est souvent insuffisante dans les dossiers mal instruits'},
         {t:'warn', v:'⚠ En cas de doute, consulter la DDT/DDTM locale qui dispose de l\'interprétation préfectorale du SDAGE pour son territoire'},
       ]},
     ]},
    {ico:'🌡️',year:2021,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Plan National d\'Adaptation au Changement Climatique (PNACC-3) — Volet eau',
     ref:'PNACC-3 2024–2030 · ONERC · Projections Météo-France 2050 (DRIAS)',
     pts:[
       {t:'info',v:'ℹ Projections 2050 : −10 à −30% de débit moyen des rivières selon les bassins'},
       {t:'info',v:'ℹ Étiages plus sévères : VCN10 (débit 10 jours consécutifs les plus faibles) en baisse de 30–50%'},
       {t:'danger',v:'✗ Débits réservés réexaminés : recalcul obligatoire si hydrologie de référence invalidée par CC'},
       {t:'ok',v:'🆕 Recharge artificielle des nappes : mesure facilitée par simplification administrative'},
       {t:'info',v:'ℹ Outil DRIAS (Météo-France) : projections climatiques localisées téléchargeables par bassin versant'},
     ],
     detail:'Le PNACC-3 marque un tournant dans la façon dont la réglementation prend en compte l\'aléa climatique dans les projections hydrologiques : les études de dimensionnement (ouvrages de rétention, dimensionnement des débits réservés, études d\'impact sur la ressource) ne peuvent plus ignorer que les données historiques des cours d\'eau sont en train de devenir une référence obsolète sous l\'effet des modifications du régime de précipitations et d\'évapotranspiration. Concrètement, pour les maîtres d\'œuvre, les logiciels de simulation hydraulique (HEC-HMS, MIKE SHE, etc.) devront intégrer les scénarios climatiques DRIAS dans les études à horizon 2050 ou 2100, notamment pour le dimensionnement des bassins de rétention ou l\'évaluation des débits d\'étiage réservés.',
     sections:[
       {title:'Projections hydrologiques 2050 — ce qui va changer', type:'table',
        headers:['Indicateur','Évolution projetée 2050','Conséquence pour l\'hydraulique','Source'],
        rows:[
          ['Débit moyen annuel des rivières','−10 à −30% selon les bassins','Dimensionnement des prises d\'eau à revoir','Météo-France / DRIAS 2023'],
          ['VCN10 (étiage 10 jours)','−30 à −50% en été','Débits réservés actuels intenables en certains secteurs','EXPLORE2 (INRAE/AFB)'],
          ['Crues intenses (T10, T100)','+10 à +30% en fréquence ou intensité selon région','Bassins de rétention sous-dimensionnés','IPCC AR6 / DRIAS'],
          ['Durée des étiages','Allongement de 2 à 6 semaines','Périodes de restriction d\'arrosage plus longues','PNACC-3 2024'],
        ]},
       {title:'Obligations nouvelles pour les études hydrauliques', type:'alerts', items:[
         {t:'danger', v:'⛔ Les études de dimensionnement à horizon 2050+ doivent désormais intégrer les scénarios climatiques DRIAS (disponibles gratuitement sur drias.meteo.fr) — les hydrologues ne peuvent plus se fonder uniquement sur les séries historiques pour dimensionner un ouvrage pérenne'},
         {t:'warn', v:'⚠ Débits réservés (10% du module selon L.214-18) : si l\'hydrologie de référence est invalidée par le changement climatique (module calculé sur des données trop anciennes), un recalcul peut être imposé par la DDT à l\'occasion du renouvellement d\'autorisation'},
         {t:'info', v:'ℹ Recharge artificielle des nappes : le PNACC-3 a simplifié les démarches administratives pour les projets de recharge (Aquifer Storage and Recovery) — outil de stockage hivernal anticipant les étiages estivaux'},
         {t:'ok', v:'✅ Outil DRIAS (drias.meteo.fr) : projections climatiques localisées téléchargeables par commune ou bassin versant, pour 3 scénarios RCP (2,6 — 4,5 — 8,5) et 3 horizons (2030, 2050, 2100)'},
       ]},
       {title:'Ce que cela change pour les professionnels de l\'eau', type:'list', items:[
         '<b>Bureau d\'études hydrauliques :</b> intégrer les projections DRIAS dans les rapports d\'études de dimensionnement des bassins de rétention, des ouvrages de protection et des prises d\'eau — c\'est désormais une attente des instructeurs DDT/DREAL',
         '<b>Services AEP :</b> les schémas directeurs de renouvellement des réseaux doivent anticiper la raréfaction de la ressource — diversification des sources et réduction des pertes priment sur le seul renouvellement à l\'identique',
         '<b>Gestionnaires de STEU :</b> les étiages plus sévères concentrent les polluants dans les cours d\'eau récepteurs — les prescriptions de rejet (norme NGL, phosphore) pourraient être durcies à l\'occasion des révisions d\'arrêtés',
         '<b>Collectivités en zone de montagne :</b> le retrait glaciaire modifie profondément les régimes hydrologiques (glaciaires → nivaux → pluviaux) — certains captages en haute altitude devront être reconnus dans les 10 ans',
       ]},
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
     ],
     detail:'Le Plan Eau n\'est pas un texte de loi mais une feuille de route politique déclinée en mesures réglementaires concrètes (décrets, arrêtés) au fil des mois. Annoncé après les sécheresses historiques de 2022, il engage tous les secteurs (collectivités, agriculture, industrie) dans une trajectoire de sobriété hydrique.',
     sections:[
       {title:'Contexte : pourquoi ce plan ?', type:'text', content:'En 2022, la France a connu sa pire sécheresse depuis 1959 : 93 départements en alerte, des cours d\'eau à l\'arrêt, des pénuries d\'eau potable dans plus de 700 communes. Le Plan Eau est la réponse politique à ce constat : il fixe pour la première fois un objectif chiffré de réduction des prélèvements (−10% d\'ici 2030) et crée des obligations pour les acteurs les moins performants.'},
       {title:'Les 5 axes principaux du Plan Eau', type:'table',
        headers:['Axe','Mesure clé','Horizon','Qui est concerné'],
        rows:[
          ['Sobriété collective','−10% prélèvements tous secteurs','2030','Collectivités, agriculteurs, industriels'],
          ['Réseaux AEP','Rendement < 80% → schéma directeur obligatoire','Immédiat','Services d\'eau potable'],
          ['REUT','Multiplier par 10 la réutilisation des eaux usées traitées','2030','STEU + exploitants agricoles'],
          ['Agriculture','Réduction irrigation + stockage hivernal','2030','Chambres d\'agriculture, irrigants'],
          ['Financement','100 M€ supplémentaires Agences de l\'eau','2024–2027','Agences de l\'eau'],
        ]},
       {title:'Ce que cela change pour les professionnels', type:'list', items:[
         '<b>Exploitants réseaux AEP :</b> si le rendement annuel est inférieur à 80% (ou ILP > seuil), l\'obligation d\'établir un schéma directeur de renouvellement est désormais renforcée et conditionne l\'accès aux aides des Agences de l\'eau',
         '<b>Bureaux d\'études hydrauliques :</b> les études de dimensionnement doivent intégrer les scénarios de sobriété — les simulations "à demande constante" ne seront plus acceptées pour les projets financés par les Agences',
         '<b>STEU :</b> la simplification des autorisations de REUT ouvre de nouvelles perspectives pour valoriser les eaux traitées à l\'irrigation agricole — anticiper les dossiers auprès des DDT',
         '<b>Collectivités :</b> la tarification progressive (prix plus élevé pour les gros consommateurs) est expérimentée dans plusieurs villes pilotes — peut devenir obligatoire après bilan en 2026',
       ]},
       {title:'Mesures déjà traduites en réglementation (2023–2025)', type:'alerts', items:[
         {t:'ok', v:'✅ Décret simplifiant les autorisations de REUT agricole — publié nov. 2023'},
         {t:'ok', v:'✅ Renforcement des seuils de rendement réseau dans les critères d\'éligibilité aux aides Agences de l\'eau'},
         {t:'warn', v:'⚠ Tarification progressive : expérimentation en cours — aucune obligation nationale avant 2026'},
         {t:'info', v:'ℹ 53 mesures au total — suivi de l\'avancement sur eau.gouv.fr'},
       ]},
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
     ],
     detail:'La LEMA est le texte fondateur de la politique de l\'eau moderne en France : elle a transposé la Directive Cadre sur l\'Eau (DCE) et généralisé le SPANC à toutes les communes. Avant elle, le contrôle de l\'ANC était quasi inexistant dans de nombreuses collectivités.',
     sections:[
       {title:'Pourquoi la LEMA est incontournable', type:'text', content:'Avant la LEMA, la réglementation de l\'eau en France était fragmentée : la loi de 1992 posait des bases, mais sans SPANC généralisé, sans objectif chiffré de bon état des masses d\'eau, et avec un financement des Agences peu cohérent. La LEMA a tout structuré en un seul texte fondateur, dont découlent directement les arrêtés techniques (ANC 2009, STEU 2007) que les professionnels appliquent au quotidien.'},
       {title:'Les 4 piliers de la LEMA', type:'table',
        headers:['Pilier','Ce que la loi impose','Texte d\'application','Impact terrain'],
        rows:[
          ['SPANC généralisé','Toutes les communes doivent créer un SPANC avant fin 2013','Art. L.2224-8 CGCT','Contrôle obligatoire de toutes les installations ANC'],
          ['Transposition DCE','Bon état écologique et chimique de toutes les masses d\'eau d\'ici 2015 (reporté 2027)','SDAGE par bassin versant','Contrainte sur tout projet rejetant dans le milieu'],
          ['Réforme redevances','7 redevances distinctes remplacent l\'ancienne taxe unique','Délibérations Agences de l\'eau','Financement des aides ANC, STEU, économies d\'eau'],
          ['Gouvernance','Comités de bassin renforcés · Principe de non-dégradation','Code de l\'environnement L.212-1','Opposition possible à tout projet dégradant le milieu'],
        ]},
       {title:'Les 7 redevances créées par la LEMA', type:'list', items:[
         '<b>① Redevance pour pollution de l\'eau d\'origine domestique</b> — assise sur la consommation d\'eau des abonnés, incluse dans la facture',
         '<b>② Redevance pour pollution de l\'eau d\'origine non domestique</b> — payée par les industriels selon leurs rejets réels (DBO₅, MES, azote…)',
         '<b>③ Redevance pour modernisation des réseaux de collecte</b> — sur les rejets assainissement, finance les travaux de réseaux',
         '<b>④ Redevance pour prélèvement sur la ressource en eau</b> — payée par tout préleveur selon usage et zone géographique',
         '<b>⑤ Redevance pour stockage d\'eau en période d\'étiage</b> — barrages, retenues collinaires',
         '<b>⑥ Redevance pour obstacles sur les cours d\'eau</b> — seuils, barrages impactant la continuité',
         '<b>⑦ Redevance pour protection du milieu aquatique</b> — pêche de loisir, exploitants de plans d\'eau',
       ]},
       {title:'Ce que cela implique pour un professionnel de l\'assainissement', type:'alerts', items:[
         {t:'danger', v:'⛔ Toute installation ANC est sous juridiction SPANC depuis 2013 — un propriétaire sans contrôle depuis plus de 10 ans est en infraction documentaire'},
         {t:'warn', v:'⚠ La redevance modernisation des réseaux (payée par la collectivité à l\'Agence) est redistribuée sous forme d\'aides — pour en bénéficier, les dossiers doivent être déposés AVANT les travaux'},
         {t:'info', v:'ℹ Le principe de non-dégradation DCE (issu de la LEMA) peut bloquer une autorisation IOTA même si le projet est techniquement conforme'},
       ]},
     ]},
    {ico:'🌡️',year:2021,isNew:false,color:'var(--c-aides)',colorl:'var(--c-aides-l)',
     name:'Loi Climat et Résilience du 22 août 2021 — Volet eau',
     ref:'Loi n°2021-1104 · Art. 161–163 (volet eau) · Art. 191–199 (ZAN)',
     pts:[
       {t:'danger',v:'✗ Art. 163 : refus d\'accès SPANC → majoration redevance jusqu\'à +400%'},
       {t:'ok',v:'🆕 ZAN (Zéro Artificialisation Nette) : −50% artificialisation 2021–2031 · ZAN total 2050'},
       {t:'info',v:'ℹ Impact fort ZAN sur la gestion des eaux pluviales urbaines (perméabilité sols)'},
       {t:'info',v:'ℹ Levée de certains verrous réglementaires pour la REUT'},
     ],
     detail:'Cette loi touche l\'eau par deux biais distincts : le renforcement des pouvoirs SPANC (art. 163) et la limitation de l\'artificialisation des sols (ZAN), qui transforme profondément la gestion des eaux pluviales urbaines.',
     sections:[
       {title:'Article 163 — Renforcement des pouvoirs du SPANC', type:'alerts', items:[
         {t:'danger', v:'⛔ Refus d\'accès au contrôle SPANC : la redevance de contrôle peut être majorée jusqu\'à +400% (quadruplée) — et ce jusqu\'à la levée de l\'obstruction'},
         {t:'danger', v:'⛔ La majoration est applicable dès le premier refus documenté — le SPANC doit notifier officiellement par lettre recommandée'},
         {t:'warn', v:'⚠ Avant cet article, les SPANC n\'avaient quasi aucun levier face aux refus : ils ne pouvaient que signaler au préfet. La majoration de redevance est un outil de coercition financière direct'},
         {t:'info', v:'ℹ La commune peut déléguer au SPANC intercommunal le recouvrement de la majoration — elle est recouvrée comme une créance fiscale ordinaire'},
       ]},
       {title:'ZAN — Impact sur la gestion des eaux pluviales', type:'table',
        headers:['Objectif ZAN','Horizon','Conséquence pour l\'hydraulique urbaine','Technique imposée'],
        rows:[
          ['−50% artificialisation vs 2021','2021–2031','Les nouvelles zones à urbaniser doivent compenser l\'imperméabilisation','Noues, fossés enherbés, toits végétalisés'],
          ['Zéro artificialisation nette','2050','Tout m² artificialisé = 1 m² renaturation compensatoire','Désimperméabilisation dans les projets de rénovation'],
          ['Révision PLU/SCoT','3 ans après la loi (2024)','Zonage pluvial révisé dans les documents d\'urbanisme','Débits de fuite réglementés dans les arrêtés de lotissement'],
        ]},
       {title:'Ce que cela change concrètement sur chantier', type:'list', items:[
         '<b>Permis de construire en zone urbanisée :</b> le gestionnaire des eaux pluviales (EPCI ou commune) peut imposer un débit de fuite maximal (souvent 3–5 L/s/ha) — nécessite un bassin de rétention ou des techniques alternatives',
         '<b>Projets de réaménagement :</b> si la surface imperméabilisée augmente, une compensation par des surfaces perméables ou des ouvrages de rétention est exigée dans les études hydrauliques',
         '<b>SPANC :</b> les propriétaires récalcitrants au contrôle peuvent maintenant faire l\'objet d\'une majoration sans attendre une décision préfectorale — gain de temps considérable',
         '<b>REUT :</b> la loi a assoupli les conditions d\'expérimentation de réutilisation des eaux traitées — les projets pilotes sont plus faciles à monter depuis 2022',
       ]},
     ]},
    {ico:'🌍',year:2000,isNew:false,color:'var(--c-ac)',colorl:'var(--c-ac-l)',
     name:'Nomenclature IOTA — Installations, Ouvrages, Travaux et Activités',
     ref:'Code de l\'environnement art. R.214-1 à R.214-56 · Nomenclature eau',
     pts:[
       {t:'info',v:'ℹ Seuil autorisation : impacts importants sur ressource ou milieux aquatiques'},
       {t:'info',v:'ℹ Seuil déclaration : impacts modérés · Dossier simplifié déposé à la DDT'},
       {t:'danger',v:'✗ STEU > 10 000 EH : régime ICPE autorisation (rubrique 2750) · Inspection DREAL'},
       {t:'info',v:'ℹ Barrages, seuils, captages, bassins de rétention : tous soumis à IOTA'},
     ],
     detail:'La nomenclature IOTA est le tableau de référence à consulter AVANT tout projet touchant à l\'eau. Elle détermine si votre projet relève d\'une simple déclaration (D) ou d\'une autorisation environnementale (A) — une erreur de classement peut bloquer ou annuler un chantier.',
     sections:[
       {title:'Comprendre les deux régimes IOTA', type:'table',
        headers:['Régime','Seuil','Instruction','Délai moyen','Risque si non-respect'],
        rows:[
          ['Déclaration (D)','Impacts modérés · Seuil bas de la rubrique','Dossier déposé à la DDT · Opposition dans 2 mois','2–3 mois','Arrêt de chantier + régularisation forcée'],
          ['Autorisation (A)','Impacts importants · Seuil haut de la rubrique','Enquête publique + étude d\'impact','12–24 mois','Arrêt + remise en état aux frais du maître d\'ouvrage'],
          ['ICPE (rubrique 2750)','STEU > 10 000 EH','Inspection DREAL · Arrêté préfectoral spécifique','18–36 mois','Mise en demeure + sanctions pénales possibles'],
        ]},
       {title:'Rubriques IOTA les plus fréquentes en assainissement', type:'table',
        headers:['Rubrique','Objet','Seuil D (déclaration)','Seuil A (autorisation)'],
        rows:[
          ['2.1.1.0','Prélèvement eaux superficielles','< 1 000 m³/h','≥ 1 000 m³/h'],
          ['2.1.2.0','Prélèvement eaux souterraines','< 200 000 m³/an','≥ 200 000 m³/an'],
          ['2.2.1.0','Rejet eaux pluviales réseau ou fossé','Surface BV > 1 ha','Surface BV > 20 ha'],
          ['2.2.3.0','Rejet en mer ou cours d\'eau (STEU)','Rejet < 600 kg DBO₅/j','Rejet ≥ 600 kg DBO₅/j'],
          ['3.1.1.0','Ouvrage en lit mineur (barrage, seuil)','Hauteur < 2 m','Hauteur ≥ 2 m'],
          ['3.2.2.0','Zones humides (destruction)','Surface < 1 ha','Surface ≥ 1 ha'],
        ]},
       {title:'Erreurs classiques et comment les éviter', type:'alerts', items:[
         {t:'danger', v:'⛔ Oublier de vérifier la rubrique 3.2.2.0 (zones humides) : un projet peut être en déclaration au titre d\'une rubrique mais en autorisation au titre d\'une autre — c\'est le régime le plus contraignant qui s\'applique'},
         {t:'warn', v:'⚠ Le cumul de projets (loi sur l\'eau) : plusieurs petits projets réalisés séparément par la même collectivité peuvent être cumulés par l\'administration pour atteindre le seuil d\'autorisation'},
         {t:'info', v:'ℹ Le dossier de déclaration IOTA doit être déposé AVANT le début des travaux — démarrer sans récépissé expose à un arrêt administratif immédiat'},
         {t:'ok', v:'✅ Service de vérification en ligne : guichet unique eau.gouv.fr/iota — permet de vérifier les rubriques applicables avant de déposer un dossier'},
       ]},
     ]},
    {ico:'🏛️',year:2014,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Loi MAPTAM du 27 janvier 2014',
     ref:'Loi n°2014-58 · Crée la compétence GEMAPI et les métropoles',
     pts:[
       {t:'danger',v:'✗ GEMAPI (Gestion des Milieux Aquatiques et Prévention des Inondations) créée par cette loi'},
       {t:'info',v:'ℹ Compétence transférée obligatoirement aux EPCI depuis le 1er janvier 2018'},
       {t:'info',v:'ℹ Crée les métropoles (Lyon, Aix-Marseille, Grand Paris...) aux compétences élargies'},
       {t:'info',v:'ℹ Permet la création d\'une taxe GEMAPI dédiée pour financer les ouvrages'},
     ],
     detail:'La loi MAPTAM a créé la compétence GEMAPI, qui regroupe sous une seule autorité (les EPCI) la gestion des rivières, la prévention des inondations et l\'entretien des digues — là où ces missions étaient auparavant éparpillées entre communes, syndicats de rivière et État.',
     sections:[
       {title:'Qu\'est-ce que la compétence GEMAPI ?', type:'text', content:'Avant 2018, la gestion d\'un cours d\'eau impliquait parfois une dizaine d\'interlocuteurs différents : la commune riveraine, le syndicat de rivière, le département, l\'État… La GEMAPI a mis fin à cette fragmentation en confiant l\'ensemble de ces missions à un seul niveau de collectivité (les EPCI à fiscalité propre — communautés de communes, agglomérations, métropoles). Depuis le 1er janvier 2018, cette compétence leur est obligatoire.'},
       {title:'Les 4 missions de la GEMAPI (art. L.211-7 Code envt)', type:'table',
        headers:['Mission','Contenu','Qui finance','Outil principal'],
        rows:[
          ['1 — Aménagement BV','Entretien des cours d\'eau, restauration du lit, ripisylve','EPCI (taxe GEMAPI)','DIG (Déclaration d\'Intérêt Général)'],
          ['2 — Entretien milieux aquatiques','Gestion des zones humides, continuité écologique, espèces invasives','EPCI + Agences de l\'eau','MAEC, contrats Natura 2000'],
          ['3 — Défense contre inondations','Entretien des digues, systèmes d\'endiguement, PAPI','EPCI + État (FPRNM)','Taxe GEMAPI (plafond 40 €/hab/an)'],
          ['4 — Protection des berges','Ouvrages de protection contre l\'érosion, seuils de fond de vallée','EPCI','Autorisation IOTA + DIG'],
        ]},
       {title:'La taxe GEMAPI — fonctionnement et limites', type:'alerts', items:[
         {t:'info', v:'ℹ La taxe GEMAPI est votée annuellement par l\'EPCI — elle est plafonnée à 40 €/habitant/an (soit ~2 Mds€ maximum au niveau national)'},
         {t:'info', v:'ℹ Elle est adossée aux 4 taxes locales existantes (TH, TFB, TFNB, CFE) — perçue par l\'État et reversée à l\'EPCI'},
         {t:'warn', v:'⚠ De nombreux EPCI n\'ont pas encore levé la taxe : les ouvrages de protection contre les inondations restent sous-financés dans ces territoires'},
         {t:'ok', v:'✅ Les EPCI peuvent déléguer tout ou partie de la compétence GEMAPI à un syndicat mixte (ex : syndicats de rivière) — ce qui est souvent fait pour maintenir les structures existantes'},
       ]},
     ]},
    {ico:'💰',year:2025,isNew:true,color:'var(--c-aides)',colorl:'var(--c-aides-l)',
     name:'Redevances des Agences de l\'eau — Barème 2025–2030',
     ref:'Loi n°2006-1772 (LEMA) · Délibérations agences 2024 · 11e programme 2025–2030',
     pts:[
       {t:'danger',v:'✗ Redevance pollution domestique : tarif polluant par m³ consommé · Incluse dans la facture eau'},
       {t:'danger',v:'✗ Redevance prélèvement : tarif selon usage (AEP, irrigation, industrie) et région hydrologique'},
       {t:'info',v:'ℹ Redevance modernisation des réseaux : assise sur les rejets d\'assainissement · Sert au financement des STEU'},
       {t:'info',v:'ℹ Bonus "économies d\'eau" : réduction redevance prélèvement si rendement réseau > seuil fixé'},
       {t:'ok',v:'🆕 11e programme 2025–2030 : enveloppe 15 Mds€ · Priorités REUT, PFAS, GEMAPI, biodiversité'},
     ],
     detail:'Les Agences de l\'eau fonctionnent comme des intermédiaires financiers : elles collectent des redevances auprès des pollueurs et préleveurs, puis redistribuent ces fonds sous forme d\'aides aux collectivités et porteurs de projets vertueux.',
     sections:[
       {title:'Comment fonctionne le circuit financier des Agences ?', type:'text', content:'Le principe est simple : ceux qui prélèvent de l\'eau ou polluent le milieu paient une redevance à leur Agence de l\'eau. Ces fonds alimentent le programme pluriannuel (6 ans) de l\'Agence, qui les redistribue ensuite sous forme de subventions et d\'avances remboursables aux collectivités, agriculteurs et industriels qui réalisent des travaux d\'amélioration. C\'est un système de solidarité de bassin : les gros pollueurs financent les travaux des petites communes rurales.'},
       {title:'Les principales redevances et qui les paie', type:'table',
        headers:['Redevance','Payée par','Calculée sur','Taux indicatif 2025','Redistribuée pour'],
        rows:[
          ['Pollution domestique','Collectivités (via facture abonné)','m³ consommés × coeff. polluant','0,20–0,45 €/m³ selon bassin','Aides aux STEU, ANC, réseau'],
          ['Prélèvement AEP','Services d\'eau potable','Volume capté annuel','0,04–0,12 €/m³ selon zone','Économies d\'eau, captages'],
          ['Modernisation réseaux','Collectivités (assainissement)','m³ reçus en station','0,12–0,22 €/m³','Renouvellement réseaux, branchements'],
          ['Pollution non domestique','Industriels, élevages intensifs','Rejets réels (DBO₅, azote, phosphore…)','Variable par paramètre polluant','Traitement industriel, dépollution'],
        ]},
       {title:'Priorités du 11e programme 2025–2030', type:'list', items:[
         '<b>PFAS et micropolluants :</b> aide au traitement quaternaire (charbon actif, osmose) pour les STEU et les captages contaminés',
         '<b>REUT :</b> subventions renforcées pour les projets de réutilisation des eaux traitées à l\'irrigation agricole',
         '<b>GEMAPI :</b> financement des programmes de restauration de rivières et des travaux de protection contre les crues',
         '<b>Biodiversité :</b> restauration des zones humides, effacement de seuils, continuité écologique',
         '<b>Sobriété :</b> conditionnement des aides au respect du rendement réseau (seuil 80% AEP) et aux efforts documentés de sobriété',
       ]},
       {title:'Comment obtenir les aides — points de vigilance', type:'alerts', items:[
         {t:'danger', v:'⛔ La demande d\'aide doit OBLIGATOIREMENT être déposée et acceptée AVANT le début des travaux — tout commencement de travaux sans accord de l\'Agence entraîne la perte définitive du droit à la subvention'},
         {t:'warn', v:'⚠ Les aides ANC sont réservées aux zones prioritaires (captages, baignade, zones sensibles) — vérifier l\'éligibilité de la parcelle auprès de l\'Agence avant de conseiller le propriétaire'},
         {t:'info', v:'ℹ Le taux d\'aide varie selon le programme annuel de l\'Agence et la zone géographique — consulter le site de votre Agence (AEAG, AESN, RMC, AELB, AERM, Artois-Picardie)'},
       ]},
     ]},
    {ico:'📐',year:1992,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Loi sur l\'eau du 3 janvier 1992 — Déclaration d\'Intérêt Général (DIG)',
     ref:'Codifiée en Code de l\'environnement art. L.211-7 · Procédure DIG',
     pts:[
       {t:'info',v:'ℹ DIG : permet à une collectivité d\'intervenir sur des cours d\'eau et berges privés'},
       {t:'info',v:'ℹ Compétence GEMAPI (EPCI) depuis 2018 : pilier du financement des travaux en rivière'},
       {t:'danger',v:'✗ DIG obligatoire pour travaux en rivière + berges privées · Enquête publique simplifiée'},
       {t:'info',v:'ℹ Entretien cours d\'eau non domaniaux : obligation légale du propriétaire riverain (art. L.215-14)'},
       {t:'warn',v:'⚠ Défaut d\'entretien du riverain constaté par l\'OFB : mise en demeure préfectorale possible'},
     ],
     detail:'La DIG est le mécanisme légal qui permet à une collectivité d\'intervenir sur des propriétés privées riveraines des cours d\'eau pour y réaliser des travaux d\'entretien ou de restauration — sans l\'accord des propriétaires, à condition de démontrer l\'intérêt général.',
     sections:[
       {title:'Pourquoi la DIG est-elle nécessaire ?', type:'text', content:'En France, la grande majorité des cours d\'eau non domaniaux (petites rivières, rus, fossés principaux) bordent des propriétés privées. Sans la DIG, une collectivité devrait obtenir l\'accord de chaque propriétaire riverain pour entretenir les berges, planter une ripisylve ou effacer un seuil — ce qui est souvent impossible dans la pratique. La DIG permet de passer outre ces refus dès lors que l\'opération est d\'intérêt général et qu\'une enquête publique simplifiée a été menée.'},
       {title:'Procédure DIG — étapes clés', type:'table',
        headers:['Étape','Contenu','Durée','Qui réalise'],
        rows:[
          ['Dossier de DIG','Programme des travaux, plans, carte des propriétaires, justification intérêt général','1–3 mois','EPCI / syndicat GEMAPI'],
          ['Enquête publique simplifiée','Mise à disposition du public du dossier · Registre de remarques','1 mois minimum','Commissaire enquêteur nommé par le tribunal'],
          ['Arrêté préfectoral','Déclaration d\'intérêt général · Autorisation des travaux','1–3 mois après enquête','Préfet de département'],
          ['Réalisation des travaux','Accès aux propriétés privées · Indemnisation si dommages causés','Variable','EPCI ou prestataire mandaté'],
        ]},
       {title:'Obligation d\'entretien du propriétaire riverain', type:'alerts', items:[
         {t:'danger', v:'⛔ Art. L.215-14 : tout propriétaire riverain d\'un cours d\'eau non domanial est légalement tenu de l\'entretenir (faucardage, élagage, enlèvement embâcles) — cette obligation est méconnue mais réelle'},
         {t:'warn', v:'⚠ En cas d\'inondation aggravée par un défaut d\'entretien avéré, la responsabilité civile du propriétaire peut être engagée vis-à-vis des voisins en aval'},
         {t:'info', v:'ℹ L\'OFB peut constater le défaut d\'entretien et saisir le préfet pour mise en demeure — mais en pratique, c\'est la collectivité GEMAPI qui intervient via DIG pour suppléer les propriétaires défaillants'},
         {t:'ok', v:'✅ Le propriétaire peut passer une convention avec l\'EPCI pour déléguer l\'entretien — solution pratique pour les zones de plaine agricole avec nombreux fossés'},
       ]},
     ]},
    {ico:'🔍',year:2016,isNew:false,color:'var(--c-regl)',colorl:'var(--c-regl-l)',
     name:'Arrêté du 21/12/2016 — Déclaration des travaux sur les réseaux (DT-DICT)',
     ref:'Arrêté anti-endommagement · Réforme réseaux 2012 · Classes de précision A/B/C',
     pts:[
       {t:'danger',v:'✗ DT (Déclaration de projet de Travaux) obligatoire au moins 10 jours avant tout chantier'},
       {t:'danger',v:'✗ DICT (Déclaration d\'Intention de Commencement de Travaux) au moins 2 jours avant démarrage'},
       {t:'danger',v:'✗ Classe A (précision ≤ 40 cm) : géoréférencement obligatoire des nouveaux réseaux dès pose'},
       {t:'info',v:'ℹ Portail reseaux-et-canalisations.ineris.fr (guichet unique) : déclaration en ligne'},
       {t:'info',v:'ℹ Responsabilité de l\'exploitant de réseau si cartographie non fournie ou imprécise'},
     ],
     detail:'La DT-DICT est l\'obligation incontournable avant tout terrassement : sans elle, le responsable du chantier porte l\'entière responsabilité des dommages causés aux réseaux enterrés (eau, gaz, électricité, télécom, assainissement).',
     sections:[
       {title:'DT vs DICT — quelle différence ?', type:'table',
        headers:['Document','Qui le fait ?','Quand ?','Délai légal','Valable combien de temps ?'],
        rows:[
          ['DT (Déclaration de projet de Travaux)','Le maître d\'ouvrage ou son représentant','En phase étude / conception','Au moins 10 jours ouvrés avant les travaux','12 mois (renouvelable)'],
          ['DICT (Déclaration Intention Commencement Travaux)','L\'entreprise exécutant les travaux','Juste avant le démarrage réel','Au moins 2 jours ouvrés avant le 1er coup de pelle','3 mois'],
        ]},
       {title:'Les 3 classes de précision des réseaux', type:'table',
        headers:['Classe','Précision cartographique','Précautions sur chantier','Exemples de réseaux'],
        rows:[
          ['Classe A','≤ 40 cm en planimétrie','Repérage terrain suffisant · Précautions normales','Réseau neuf géoréférencé, fibre optique récente'],
          ['Classe B','40 cm à 1,5 m','Détection complémentaire recommandée · Fouilles manuelles si doute','Réseau eau potable années 2000–2010'],
          ['Classe C','> 1,5 m ou inconnu','Investigations complémentaires obligatoires (détection électromagnétique + fouille manuelle) avant engin','Vieux réseaux en fonte, assainissement années 1960–1980'],
        ]},
       {title:'Responsabilités et sanctions', type:'alerts', items:[
         {t:'danger', v:'⛔ Absence de DT/DICT : si un réseau est endommagé, la responsabilité est automatiquement portée sur le donneur d\'ordre et l\'entreprise — sans défense possible, même si le réseau était mal cartographié'},
         {t:'danger', v:'⛔ Réseau classe C sans investigation complémentaire : si un dommage survient, l\'entrepreneur est tenu pour responsable même si l\'exploitant ne lui a pas fourni de plan précis'},
         {t:'warn', v:'⚠ L\'exploitant de réseau (commune, collectivité) a l\'obligation de répondre aux DT/DICT dans les délais légaux et de fournir les plans disponibles — un défaut de réponse peut engager sa responsabilité'},
         {t:'ok', v:'✅ Guichet unique obligatoire : toutes les DT et DICT doivent passer par reseaux-et-canalisations.ineris.fr — les exploitants sont automatiquement notifiés selon les zones géographiques déclarées'},
       ]},
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
      {t:'danger',v:'✗ NC avec danger sanitaire : délai réhabilitation 4 ANS maximum'},
      {t:'danger',v:'✗ NC sans danger : délai 1 AN si vente · Refus accès SPANC : +400% redevance'},
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
      {t:'danger',v:'✗ Priorité absolue : installation ANC NC avec danger grave · Délai 4 ANS MAXIMUM (1 AN si vente)'},
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
    const specialKeys = (DEPT_REGL[selNum]||[]).filter(k=>REGL_CATALOGUE[k]);
    const nationalKeys = new Set((REGL_TEXTES.anc||[]).concat(REGL_TEXTES.ac||[]).concat(REGL_TEXTES.ep||[]).concat(REGL_TEXTES.milieux||[]).concat(REGL_TEXTES.transversal||[]));
    const specialTextes = specialKeys.map(k=>REGL_CATALOGUE[k]).filter(Boolean);

    const themes = [
      {key:'anc',        lbl:'🏡 ANC — Assainissement Non Collectif'},
      {key:'ac',         lbl:'🏙️ Assainissement Collectif'},
      {key:'ep',         lbl:'💧 Eau Potable'},
      {key:'milieux',    lbl:'🌊 Milieux aquatiques & Biodiversité'},
      {key:'transversal',lbl:'🔗 Textes transversaux'},
    ];
    const nationalHTML = themes.map(th=>{
      const list = REGL_TEXTES[th.key]||[];
      if(!list.length) return '';
      return `<div style="margin-bottom:var(--s-3)">
        <div class="section-header" style="padding-top:var(--s-2)">${th.lbl}<span class="sh-count">${list.length}</span></div>
        <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
          ${list.map(t=>reglCardHTML(t,th.key,(REGL_TEXTES[th.key]||[]).indexOf(t))).join('')}
        </div></div>`;
    }).join('');

    const specialHTML = specialTextes.length
      ? `<div class="section-header" style="padding-top:var(--s-2);color:var(--c-primary)">⚡ Spécificités locales — ${dept.name}<span class="sh-count">${specialTextes.length}</span></div>
         <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2);margin-bottom:var(--s-3)">
           ${specialTextes.map(t=>reglCardHTML(t)).join('')}
         </div>`
      : '';

    zone.innerHTML = `
      <div style="padding:var(--s-2) var(--s-4) 0">
        <button onclick="window.reglDeptSel='';renderReglByDept()"
          style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:var(--c-surface-2);border:1.5px solid var(--c-border);border-radius:var(--r-sm);font-family:var(--f-body);font-size:var(--t-sm);font-weight:600;cursor:pointer;color:var(--c-text-2);margin-bottom:var(--s-3)">
          ← Retour liste des départements
        </button>
        <div class="card card-p" style="background:linear-gradient(135deg,var(--c-ep-l),var(--c-surface));margin-bottom:var(--s-3)">
          <div style="display:flex;align-items:center;gap:var(--s-3)">
            <div class="dc-num" style="width:44px;height:44px;font-size:${dept.num.length>2?'11px':'14px'}">${dept.num}</div>
            <div>
              <div style="font-family:var(--f-display);font-size:var(--t-xl);color:var(--c-primary);margin-bottom:2px">${dept.name}</div>
              <div style="font-size:var(--t-sm);color:var(--c-text-3)">${dept.region} · Agence : ${dept.agence} · Taux aide : ${dept.taux}</div>
            </div>
          </div>
        </div>
      </div>
      <div style="padding:0 var(--s-4) var(--s-3)">
        ${_deptCardInnerHTML(dept)}
      </div>
      ${specialHTML}
      ${nationalHTML}`;
    return;
  }

  // Liste de sélection des départements
  let list = SPANC_DEPTS.filter(d =>
    !q || d.num.includes(q) || d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q) || (d.oblig||'').toLowerCase().includes(q) || (d.agence||'').toLowerCase().includes(q)
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

function renderRegl(startKey) {
  // Appelé depuis un module spécifique (ex: AC, EP…) : vue filtrée sans onglets
  if (startKey && startKey !== 'dept') {
    window.reglStartKey = startKey;
    var _tb = document.getElementById('tab-bar');
    if (_tb) _tb.style.display = 'none';
    document.getElementById('main-content').innerHTML =
      '<div class="search-container" style="padding-top:var(--s-2)">'
      + '<div class="search-bar"><span class="search-ico">🔍</span>'
      + '<input type="text" id="regl-search" placeholder="Rechercher un texte…" oninput="filterReglDirect(this.value)">'
      + '</div></div>'
      + '<div id="regl-content"></div>'
      + '<div class="pb-nav"></div>';
    renderReglTab(startKey, '');
    return;
  }

  // Vue générale : 2 onglets
  window.reglStartKey = '';
  loadModuleTabs(['🗺️ Par département','📋 Textes nationaux','⛔ Non conforme / Interdit'], 'switchReglTab');
  document.getElementById('main-content').innerHTML =
    '<div class="search-container" style="padding-top:var(--s-2)">'
    + '<div class="search-bar"><span class="search-ico">🔍</span>'
    + '<input type="text" id="regl-search" placeholder="Rechercher un département ou un texte…" oninput="filterRegl(this.value)">'
    + '</div></div>'
    + '<div id="regl-content"></div>'
    + '<div class="pb-nav"></div>';
  window.reglTabIdx = 0;
  window.reglDeptSel = '';
  setTabActive('module-tabs', 0);
  renderReglByDept('');
}

function switchReglTab(idx) {
  setTabActive('module-tabs', idx);
  window.reglTabIdx = idx;
  window.reglDeptSel = '';
  var sb = document.getElementById('regl-search');
  if (sb) sb.value = '';
  if (idx === 0) renderReglByDept('');
  else if (idx === 2) renderReglNonConforme('');
  else renderReglNational('');
  scrollToTop();
}

function filterReglDirect(q) {
  renderReglTab(window.reglStartKey || 'anc', q.toLowerCase());
}

function filterRegl(q) {
  if (window.reglTabIdx === 1) renderReglNational(q.toLowerCase());
  else if (window.reglTabIdx === 2) renderReglNonConforme(q.toLowerCase());
  else { window.reglDeptSel = ''; renderReglByDept(q.toLowerCase()); }
}

function renderReglNational(q) {
  var themes = [
    {key:'anc',        lbl:'🏡 Assainissement Non Collectif (ANC)'},
    {key:'ac',         lbl:'🏙️ Assainissement Collectif'},
    {key:'ep',         lbl:'💧 Eau Potable'},
    {key:'milieux',    lbl:'🌊 Milieux aquatiques & biodiversité'},
    {key:'transversal',lbl:'🔗 Textes transversaux'},
  ];
  var parts = themes.map(function(th) {
    var list = (REGL_TEXTES[th.key]||[]).filter(function(t) {
      if (!q) return true;
      return (t.name+t.ref+(t.pts||[]).map(function(p){return p.v;}).join(' ')).toLowerCase().indexOf(q) >= 0;
    });
    if (!list.length) return '';
    var total = (REGL_TEXTES[th.key]||[]).length;
    return '<div style="margin-bottom:var(--s-3)">'
      + '<div class="section-header" style="padding-top:var(--s-2)">' + th.lbl
      + ' <span class="sh-count">' + list.length + (q&&list.length<total?' / '+total:'') + '</span></div>'
      + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">'
      + list.map(function(t){return reglCardHTML(t, th.key, (REGL_TEXTES[th.key]||[]).indexOf(t));}).join('')
      + '</div></div>';
  }).join('');
  document.getElementById('regl-content').innerHTML =
    '<div style="padding:var(--s-2) var(--s-4) 0">'
    + '<div class="alert info" style="margin-bottom:var(--s-2)"><span class="alert-icon">ℹ</span><span>Ces textes s\'appliquent <b>identiquement dans tous les départements de France</b>. Pour voir les spécificités locales, utilisez l\'onglet "Par département".</span></div>'
    + '</div>'
    + (parts || '<div style="text-align:center;padding:40px;color:var(--c-text-3)">Aucun texte trouvé</div>');
}

function renderReglNonConforme(q) {
  var modules = [
    {key:'ep',      lbl:'💧 Eau potable',          color:'var(--c-ep,#0A7460)',   colorl:'var(--c-ep-l,#E0F4F0)'},
    {key:'ac',      lbl:'🏙️ Assainissement collectif', color:'var(--c-ac,#1550A0)', colorl:'var(--c-ac-l,#E6EEF8)'},
    {key:'milieux', lbl:'🌊 Milieux naturels',      color:'var(--c-riv,#166038)',  colorl:'var(--c-riv-l,#EAF8F0)'},
  ];

  var totalItems = 0;
  var parts = modules.map(function(mod) {
    var items = [];
    (REGL_TEXTES[mod.key]||[]).forEach(function(t) {
      var dangerPts = (t.pts||[]).filter(function(p) {
        return p.t === 'danger' || p.t === 'warn';
      }).filter(function(p) {
        return !q || p.v.toLowerCase().indexOf(q) >= 0 || t.name.toLowerCase().indexOf(q) >= 0;
      });
      if (dangerPts.length) {
        items.push({text: t, pts: dangerPts});
      }
    });
    if (!items.length) return '';
    totalItems += items.reduce(function(acc, i) { return acc + i.pts.length; }, 0);
    var rows = items.map(function(item) {
      var srcBadge = '<span style="display:inline-block;font-size:9px;font-weight:800;color:var(--c-surface);background:' + mod.color + ';padding:1px 7px;border-radius:var(--r-pill);margin-bottom:4px">' + mod.lbl + '</span>';
      var textName = '<div style="font-size:11px;font-weight:700;color:var(--c-text-2);margin-bottom:6px">' + item.text.ico + ' ' + item.text.name + '</div>';
      var ptsHtml = item.pts.map(function(p) {
        return '<div class="rc-pt" style="background:var(--c-'+p.t+'-l);color:var(--c-'+p.t+');border-color:var(--c-'+p.t+')">' + p.v + '</div>';
      }).join('');
      return '<div style="background:var(--c-surface);border:1.5px solid ' + mod.color + ';border-radius:var(--r-md);padding:var(--s-3) var(--s-4);display:flex;flex-direction:column;gap:4px">'
        + srcBadge + textName
        + '<div style="display:flex;flex-direction:column;gap:5px">' + ptsHtml + '</div>'
        + '</div>';
    }).join('');
    return '<div style="margin-bottom:var(--s-3)">'
      + '<div class="section-header" style="padding-top:var(--s-2)">' + mod.lbl
      + ' <span class="sh-count">' + items.reduce(function(a,i){return a+i.pts.length;},0) + ' point' + (items.reduce(function(a,i){return a+i.pts.length;},0)>1?'s':'') + '</span></div>'
      + '<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">' + rows + '</div>'
      + '</div>';
  }).join('');

  document.getElementById('regl-content').innerHTML =
    '<div style="padding:var(--s-2) var(--s-4) 0">'
    + '<div class="alert danger" style="margin-bottom:var(--s-2)"><span class="alert-icon">⛔</span><span>Synthèse des <b>non-conformités et interdictions réglementaires</b> pour l\'eau potable, l\'assainissement collectif et les milieux naturels.'
    + (totalItems ? ' <b>' + totalItems + ' points</b> répertoriés.' : '') + '</span></div>'
    + '</div>'
    + (parts || '<div style="text-align:center;padding:40px;color:var(--c-text-3)">Aucun point trouvé</div>');
}

function renderReglTab(key, q='') {
  let list = REGL_TEXTES[key]||[];
  let fullList = REGL_TEXTES[key]||[];
  if(q) list = list.filter(t=>(t.name+t.ref+t.pts.map(p=>p.v).join(' ')).toLowerCase().includes(q));
  const downloadAllBtn = (typeof _reglDownloadAllBtn === 'function') ? _reglDownloadAllBtn(key) : '';
  const html = list.length
    ? `<div class="section-header" style="padding-top:var(--s-2)">${list.length} texte${list.length>1?'s':''}</div>
       ${downloadAllBtn}
       <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">
         ${list.map(t=>reglCardHTML(t, key, fullList.indexOf(t))).join('')}
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

function _reglSectionHTML(s) {
  var h = '<div style="margin-top:var(--s-3)">';
  if (s.title) h += '<div style="font-size:11px;font-weight:800;color:var(--c-text-2);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-1);padding-bottom:4px;border-bottom:2px solid var(--c-border)">' + s.title + '</div>';
  if (s.type === 'text') {
    h += '<div style="font-size:var(--t-sm);color:var(--c-text-3);line-height:1.8">' + s.content + '</div>';
  } else if (s.type === 'table') {
    h += '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px">';
    if (s.headers) h += '<tr style="background:var(--c-surface-2)">' + s.headers.map(function(h2){return '<th style="padding:6px 8px;text-align:left;font-weight:700;color:var(--c-text-2);border-bottom:2px solid var(--c-border)">'+h2+'</th>';}).join('') + '</tr>';
    (s.rows||[]).forEach(function(row){
      h += '<tr style="border-bottom:1px solid var(--c-border)">' + row.map(function(cell,ci){return '<td style="padding:6px 8px;'+(ci===0?'font-weight:600':'color:var(--c-text-3)')+'">'+cell+'</td>';}).join('') + '</tr>';
    });
    h += '</table></div>';
  } else if (s.type === 'alerts') {
    h += '<div style="display:flex;flex-direction:column;gap:5px">' + (s.items||[]).map(function(p){return '<div class="rc-pt" style="background:var(--c-'+p.t+'-l);color:var(--c-'+p.t+');border-color:var(--c-'+p.t+')">'+p.v+'</div>';}).join('') + '</div>';
  } else if (s.type === 'list') {
    h += '<ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:3px">' + (s.items||[]).map(function(i){return '<li style="font-size:var(--t-sm);color:var(--c-text-3);line-height:1.6">'+i+'</li>';}).join('') + '</ul>';
  }
  return h + '</div>';
}

function reglCardHTML(t, key, idx) {
  var id = ++window._rcId;
  var pts = t.pts.map(function(p){
    return '<div class="rc-pt" style="background:var(--c-'+p.t+'-l);color:var(--c-'+p.t+');border-color:var(--c-'+p.t+')">' + p.v + '</div>';
  }).join('');
  var detail = t.detail
    ? '<div style="font-size:var(--t-sm);color:var(--c-text-3);line-height:1.8;margin-top:var(--s-2);padding-top:var(--s-2);border-top:1px solid var(--c-border)">' + t.detail + '</div>'
    : '';
  var sections = (t.sections||[]).map(_reglSectionHTML).join('');
  var lien = t.lien
    ? '<a href="' + t.lien + '" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:700;color:var(--c-primary);background:var(--c-primary-l);padding:3px 10px;border-radius:var(--r-pill);margin-top:var(--s-2);text-decoration:none">🔗 Légifrance / Source officielle</a>'
    : '';
  var newBadge = t.isNew ? '<span class="badge badge-new">NOUVEAU</span>' : '';
  var dlBtn = (key !== undefined && idx !== undefined && idx >= 0 && typeof _reglDownloadBtn === 'function')
    ? _reglDownloadBtn(key, idx) : '';

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
      + sections
      + lien
      + dlBtn
    + '</div>'
  + '</div>';
}

/* ═══════════════════════════════════════════════════
   TÉLÉCHARGEMENT PDF DES TEXTES RÉGLEMENTAIRES
   Accès : Pro / Étab / Admin (comme les autres exports PDF)
═══════════════════════════════════════════════════ */
var REGL_CAT_NAMES = {
  anc: 'Assainissement non collectif', ac: 'Assainissement collectif',
  ep: 'Eau potable', milieux: 'Milieux naturels', transversal: 'Réglementation transversale'
};

function _reglPdfAccess() {
  var p = (typeof AUTH !== 'undefined' && AUTH.user) ? (AUTH.user.plan || 'free') : 'free';
  return (p === 'pro' || p === 'etab' || p === 'admin');
}

function _reglDownloadBtn(key, idx) {
  var has = _reglPdfAccess();
  return '<div style="margin-top:var(--s-3)">'
    + '<button onclick="' + (has ? '_downloadReglPDF(\'' + key + '\',' + idx + ')' : 'authToast(\'PDF réservés aux plans Pro, Établissement et Admin\')') + '" '
    + 'style="padding:7px 14px;background:' + (has ? 'var(--c-surface-2)' : 'var(--c-surface-2)') + ';border:1.5px solid ' + (has?'var(--c-primary)':'var(--c-border)') + ';color:' + (has?'var(--c-primary)':'var(--c-text-3)') + ';border-radius:var(--r-pill);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--f-body)">'
    + (has ? '📥 Télécharger ce texte (PDF)' : '🔒 PDF — Plan Pro requis')
    + '</button></div>';
}

function _reglDownloadAllBtn(key) {
  var has = _reglPdfAccess();
  var n = (REGL_TEXTES[key]||[]).length;
  if (!n) return '';
  return '<div style="padding:0 var(--s-4) var(--s-2)">'
    + '<button onclick="' + (has ? '_downloadReglCategoryPDF(\'' + key + '\')' : 'authToast(\'PDF réservés aux plans Pro, Établissement et Admin\')') + '" '
    + 'style="width:100%;padding:11px;background:' + (has?'var(--c-surface)':'var(--c-surface-2)') + ';border:1.5px solid ' + (has?'var(--c-primary)':'var(--c-border)') + ';color:' + (has?'var(--c-primary)':'var(--c-text-3)') + ';border-radius:var(--r-md);font-size:12.5px;font-weight:700;cursor:pointer;font-family:var(--f-body)">'
    + (has ? '📦 Télécharger les ' + n + ' textes de cette catégorie (PDF)' : '🔒 Pack PDF — Plan Pro requis')
    + '</button></div>';
}

function _reglPdfTextHeader(doc, W, MARGIN, color, catName) {
  doc.setFillColor.apply(doc, _hexToRgb(color));
  doc.rect(0, 0, W, 20, 'F');
  doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
  doc.setTextColor(255,255,255);
  doc.text('HydroCalc — Réglementation', MARGIN, 9);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5);
  doc.text(catName, MARGIN, 15);
}

/* Construit le contenu PDF d'UN texte réglementaire à partir de y, retourne y final */
function _renderReglPdfBlock(doc, t, y, MARGIN, cW, checkPage) {
  var col = _hexToRgb(t.color);

  /* Bandeau titre */
  doc.setFont('helvetica', 'bold'); doc.setFontSize(10.5);
  var titleLines = doc.splitTextToSize(_pdfSanitize(t.name), cW - 8);
  var titleH = titleLines.length * 5 + 6;
  checkPage(titleH);
  doc.setFillColor.apply(doc, col);
  doc.roundedRect(MARGIN, y, cW, titleH, 1.5, 1.5, 'F');
  doc.setTextColor(255,255,255);
  titleLines.forEach(function(l,i){ doc.text(l, MARGIN+4, y+5.5+i*5); });
  y += titleH + 2;

  /* Référence */
  doc.setFont('helvetica', 'italic'); doc.setFontSize(8.3);
  var refLines = doc.splitTextToSize(_pdfSanitize(t.ref), cW - 8);
  checkPage(refLines.length * 4.2 + 4);
  doc.setTextColor(97, 112, 104);
  refLines.forEach(function(l,i){ doc.text(l, MARGIN+2, y+i*4.2); });
  y += refLines.length * 4.2 + 5;

  /* Points (ok/danger/info → couleurs) */
  var ptColors = {
    ok:     { bg:[230,248,238], fg:[22,96,56] },
    danger: { bg:[253,236,234], fg:[168,32,24] },
    info:   { bg:[224,238,250], fg:[15,80,140] }
  };
  t.pts.forEach(function(p) {
    var c = ptColors[p.t] || ptColors.info;
    var txt = _pdfSanitize(p.v);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.6);
    var lines = doc.splitTextToSize(txt, cW - 8);
    doc.setTextColor.apply(doc, c.fg);
    lines.forEach(function(l) {
      checkPage(5.5);
      doc.setFillColor.apply(doc, c.bg);
      doc.rect(MARGIN, y - 2, cW, 5, 'F');
      doc.text(l, MARGIN+4, y + 2);
      y += 4.4;
    });
    y += 1.8;
  });

  /* Détail libre éventuel */
  if (t.detail) {
    var dTxt = _pdfSanitize(t.detail.replace(/<[^>]+>/g, ' '));
    var dLines = doc.splitTextToSize(dTxt, cW - 8);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.3);
    doc.setTextColor(40, 48, 44);
    y += 2;
    dLines.forEach(function(l) {
      checkPage(5);
      doc.text(l, MARGIN+2, y+2);
      y += 4.2;
    });
    y += 4;
  }

  /* Sections structurées */
  if (t.sections && t.sections.length) {
    t.sections.forEach(function(sec) {
      /* Titre de section */
      checkPage(10);
      doc.setFont('helvetica', 'bold'); doc.setFontSize(9);
      doc.setTextColor(40, 48, 44);
      var secTitleLines = doc.splitTextToSize(_pdfSanitize(sec.title || ''), cW - 4);
      secTitleLines.forEach(function(l,i){ doc.text(l, MARGIN+2, y+i*4.6); });
      y += secTitleLines.length * 4.6 + 2;
      doc.setDrawColor(190,210,200); doc.setLineWidth(0.3);
      doc.line(MARGIN, y, MARGIN+cW, y); y += 3;

      if (sec.type === 'text' && sec.content) {
        var ctxLines = doc.splitTextToSize(_pdfSanitize(sec.content.replace(/<[^>]+>/g,' ')), cW - 4);
        doc.setFont('helvetica', 'normal'); doc.setFontSize(8);
        doc.setTextColor(50, 60, 55);
        ctxLines.forEach(function(l) {
          checkPage(5);
          doc.text(l, MARGIN+2, y);
          y += 4.0;
        });
        y += 4;
      }

      if (sec.type === 'table' && sec.headers && sec.rows) {
        var colCount = sec.headers.length;
        var colW = cW / colCount;
        /* Header row */
        checkPage(7);
        doc.setFillColor(50, 80, 65);
        doc.rect(MARGIN, y, cW, 6.5, 'F');
        doc.setFont('helvetica', 'bold'); doc.setFontSize(7.5);
        doc.setTextColor(255,255,255);
        sec.headers.forEach(function(h,ci){
          doc.text(_pdfSanitize(h).slice(0,30), MARGIN + ci*colW + 2, y+4.5);
        });
        y += 6.5;
        /* Data rows */
        sec.rows.forEach(function(row, ri) {
          var rowH = 6;
          row.forEach(function(cell) {
            var lines = doc.splitTextToSize(_pdfSanitize(cell.replace(/<[^>]+>/g,' ')), colW - 4);
            rowH = Math.max(rowH, lines.length * 4.2 + 2.5);
          });
          checkPage(rowH + 1);
          doc.setFillColor(ri % 2 === 0 ? 245 : 235, ri % 2 === 0 ? 248 : 245, ri % 2 === 0 ? 246 : 242);
          doc.rect(MARGIN, y, cW, rowH, 'F');
          doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5);
          doc.setTextColor(40, 48, 44);
          row.forEach(function(cell, ci){
            var cellLines = doc.splitTextToSize(_pdfSanitize(cell.replace(/<[^>]+>/g,' ')), colW - 4);
            cellLines.forEach(function(l, li){ doc.text(l, MARGIN + ci*colW + 2, y + 4 + li*4.2); });
          });
          doc.setDrawColor(210,220,215); doc.setLineWidth(0.2);
          doc.rect(MARGIN, y, cW, rowH, 'S');
          y += rowH;
        });
        y += 4;
      }

      if (sec.type === 'alerts' && sec.items) {
        var alertColors = {
          ok:     { bg:[230,248,238], fg:[22,96,56] },
          danger: { bg:[253,236,234], fg:[168,32,24] },
          warn:   { bg:[255,248,225], fg:[136,96,0] },
          info:   { bg:[224,238,250], fg:[15,80,140] }
        };
        sec.items.forEach(function(item) {
          var ac = alertColors[item.t] || alertColors.info;
          var txt = _pdfSanitize((item.v||'').replace(/<[^>]+>/g,' '));
          doc.setFont('helvetica', 'normal'); doc.setFontSize(8.2);
          var aLines = doc.splitTextToSize(txt, cW - 8);
          doc.setTextColor.apply(doc, ac.fg);
          aLines.forEach(function(l) {
            checkPage(5.5);
            doc.setFillColor.apply(doc, ac.bg);
            doc.rect(MARGIN, y - 2, cW, 5, 'F');
            doc.text(l, MARGIN+4, y + 2);
            y += 4.2;
          });
          y += 1.8;
        });
        y += 2;
      }

      if (sec.type === 'list' && sec.items) {
        sec.items.forEach(function(item) {
          var itemTxt = '• ' + _pdfSanitize(item.replace(/<[^>]+>/g,' '));
          doc.setFont('helvetica', 'normal'); doc.setFontSize(8.2);
          var iLines = doc.splitTextToSize(itemTxt, cW - 6);
          checkPage(iLines.length * 4.2 + 2);
          doc.setTextColor(40, 48, 44);
          iLines.forEach(function(l,i){ doc.text(l, MARGIN+3, y+i*4.2); });
          y += iLines.length * 4.2 + 1.5;
        });
        y += 3;
      }
    });
  }

  /* Source */
  if (t.lien) {
    checkPage(6);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5);
    doc.setTextColor(12, 90, 150);
    doc.text(_pdfSanitize(t.lien), MARGIN+2, y);
    y += 6;
  }

  y += 4;
  return y;
}

function _downloadReglPDF(key, idx) {
  if (!_reglPdfAccess()) { authToast('PDF réservés aux plans Pro, Établissement et Admin'); return; }
  if (!window.jspdf) { authToast('Bibliothèque PDF non chargée — vérifiez votre connexion.'); return; }
  var t = (REGL_TEXTES[key]||[])[idx];
  if (!t) return;

  var jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
  var W = 210, MARGIN = 14, cW = W - MARGIN*2, y = 28;
  function checkPage(needed) { if (y + needed > 280) { doc.addPage(); y = 14; } }

  _reglPdfTextHeader(doc, W, MARGIN, t.color, REGL_CAT_NAMES[key] || key);
  y = _renderReglPdfBlock(doc, t, y, MARGIN, cW, checkPage);

  doc.setFont('helvetica','normal'); doc.setFontSize(7);
  doc.setTextColor(150,160,155);
  doc.text('Généré avec HydroCalc · hydrocalc.fr', MARGIN, 292);

  doc.save('HydroCalc_Reglementation_' + t.name.replace(/[^a-zA-Z0-9]/g,'_').slice(0,50) + '.pdf');
  if (typeof authToast === 'function') authToast('Texte réglementaire téléchargé ✓');
}

function _downloadReglCategoryPDF(key) {
  if (!_reglPdfAccess()) { authToast('PDF réservés aux plans Pro, Établissement et Admin'); return; }
  if (!window.jspdf) { authToast('Bibliothèque PDF non chargée — vérifiez votre connexion.'); return; }
  var list = REGL_TEXTES[key]||[];
  if (!list.length) return;

  var jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
  var W = 210, MARGIN = 14, cW = W - MARGIN*2, y = 28;
  var catName = REGL_CAT_NAMES[key] || key;
  function checkPage(needed) { if (y + needed > 280) { doc.addPage(); y = 14; } }

  list.forEach(function(t) {
    _reglPdfTextHeader(doc, W, MARGIN, t.color, catName);
    y = 28;
    y = _renderReglPdfBlock(doc, t, y, MARGIN, cW, checkPage);
    checkPage(0.1); /* force le re-calc avant le prochain texte si tout juste */
  });

  doc.setFont('helvetica','normal'); doc.setFontSize(7);
  doc.setTextColor(150,160,155);
  doc.text('Généré avec HydroCalc · hydrocalc.fr', MARGIN, 292);

  doc.save('HydroCalc_Reglementation_' + key + '_complet.pdf');
  if (typeof authToast === 'function') authToast('Pack PDF téléchargé (' + list.length + ' textes) ✓');
}

