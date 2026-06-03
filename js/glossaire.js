/* ─── RENDER GLOSSAIRE ─── */
/* ═══ GLOSSAIRE — onglets ═══ */
const GLOSS_TAB_LBLS = ['📖 Glossaire A→Z','🔢 Formules','🔤 Acronymes','🏛️ Organismes'];

function renderGloss() {
  loadModuleTabs(['📖 Glossaire A→Z','🔢 Formules','🔤 Acronymes','🏛️ Organismes'], 'switchGlossTab');
  document.getElementById('main-content').innerHTML =
    '<div class="search-container" style="padding-top:var(--s-2)">'
    + '<div class="search-bar"><span class="search-ico">🔍</span>'
    + '<input type="text" id="gloss-search" placeholder="Rechercher un terme, formule, acronyme…" oninput="onGlossSearch(this.value)">'
    + '</div></div>'
    + '<div id="gloss-content"></div>'
    + '<div class="pb-nav"></div>';
  window.glossTab = 0;
  renderGlossTermes('');
}

function switchGlossTab(idx) {
  setTabActive('module-tabs', idx);
  window.glossTab = idx;
  var si = document.getElementById('gloss-search');
  if (si) si.value = '';
  if      (idx === 0) renderGlossTermes('');
  else if (idx === 1) renderGlossFormules('');
  else if (idx === 2) renderGlossAcronymes('');
  else if (idx === 3) renderGlossOrganismes('');
  scrollToTop();
}

function onGlossSearch(q) {
  var idx = window.glossTab || 0;
  var ql = q.toLowerCase();
  if      (idx === 0) renderGlossTermes(ql);
  else if (idx === 1) renderGlossFormules(ql);
  else if (idx === 2) renderGlossAcronymes(ql);
  else if (idx === 3) renderGlossOrganismes(ql);
}

/* ─── TERMES ─── */
const TERMES_DB = [
  {m:'Aération',cat:'AC',cc:'var(--c-ac)',def:'Apport d\'O₂ dans un bassin biologique par diffuseurs à bulles fines ou agitateurs de surface.',form:'Besoins O₂ ≈ 1,5 × L_DBO₅ (kg O₂/j)'},
  {m:'Âge des boues θc',cat:'STEU',cc:'var(--c-ac)',def:'Temps de séjour moyen des boues dans le système. Paramètre fondamental de dimensionnement biologique.',form:'θc = V × MES / (Qex × MESex) · Nitrification : θc ≥ 15 j (hiver)'},
  {m:'Alcalinité (TAC)',cat:'Qualité eau',cc:'var(--c-anc)',def:'Capacité d\'une eau à neutraliser les acides. Exprimée en °f. Rôle tampon pour le pH.',form:'TAC (°f) = [HCO₃⁻] (mg/L) / 12,2'},
  {m:'Aquifère',cat:'Hydrogéologie',cc:'var(--c-riv)',def:'Formation géologique perméable et saturée constituant une réserve d\'eau exploitable.',form:'T = K × b (m²/s) · S : 0,05–0,25 (libre) · 10⁻⁵–10⁻³ (captive)'},
  {m:'Autosurveillance',cat:'Réglementation',cc:'var(--c-regl)',def:'Obligation de mesure, enregistrement et transmission des données de qualité des effluents. Arrêté 22/06/2007.',form:'Paramètres : DBO₅, DCO, MES, NTK, Pt, débit · Fréquence selon taille STEU'},
  {m:'Bac dégraisseur',cat:'ANC',cc:'var(--c-anc)',def:'Ouvrage de prétraitement interceptant les graisses en sortie de cuisine avant la FTE.',form:'V = Q × tr (L) · tr = 3–5 min · Norme NF EN 1825'},
  {m:'Bassin versant',cat:'Hydrologie',cc:'var(--c-riv)',def:'Aire drainée par un cours d\'eau et ses affluents vers un exutoire commun.',form:'P = ETR + R + ΔS · Tc Kirpich = 0,0663×L^0,77×J^(-0,385) (h)'},
  {m:'Cavitation',cat:'Pompes',cc:'var(--c-ac)',def:'Formation de bulles de vapeur en aspiration quand la pression locale descend sous la pression de vapeur saturante.',form:'NPSHd > NPSHr + 0,5 m · NPSHd = Patm/(ρg) - Ha - hfa - Pv/(ρg)'},
  {m:'Coefficient de pointe (Cp)',cat:'AC',cc:'var(--c-ac)',def:'Rapport entre le débit de pointe et le débit moyen des EU. Utilisé pour dimensionner les collecteurs.',form:'Cp = 1,5 + 2,5/√Qmoy · (Qmoy en L/s) · Qpointe = Qmoy × Cp'},
  {m:'Conductivité',cat:'Qualité eau',cc:'var(--c-anc)',def:'Capacité de l\'eau à conduire le courant électrique. Indicateur de minéralisation globale.',form:'EP : 50–1 000 µS/cm · Eau de pluie : 5–40 µS/cm · Eau de mer : ~50 000 µS/cm'},
  {m:'Continuité écologique',cat:'Réglementation',cc:'var(--c-regl)',def:'Libre circulation des espèces aquatiques et transit des sédiments. Loi Biodiversité 2016, L.214-17.',form:'Liste 1 : aucun nouvel obstacle · Liste 2 : délit 5 ans pour se conformer'},
  {m:'Coup de bélier',cat:'Hydraulique',cc:'var(--c-ac)',def:'Onde de surpression/dépression transitoire lors d\'une variation rapide de débit.',form:'ΔP = ρ × a × ΔV · a = √(K_eau/(ρ×(1+K_eau×D/(E×e)))) · Tc = 2L/a'},
  {m:'Crue centennale (Q100)',cat:'Hydrologie',cc:'var(--c-riv)',def:'Débit ayant une probabilité de 1%/an d\'être dépassé. Référence PPRi.',form:'Gumbel : F(x) = e^(-e^(-(x-u)/α)) · T = 1/(1-F(x))'},
  {m:'DBO₅',cat:'Qualité eau',cc:'var(--c-anc)',def:'Demande Biochimique en Oxygène à 5 jours. Quantité d\'O₂ consommée pour dégrader la MO à 20°C.',form:'1 EH = 60 g DBO₅/j · EU brutes : 150–300 mg/L · Rejet STEU < 25 mg/L'},
  {m:'DCO',cat:'Qualité eau',cc:'var(--c-anc)',def:'Demande Chimique en Oxygène. Oxyde toute la MO (biodégradable + récalcitrante).',form:'1 EH = 135 g DCO/j · Ratio DBO₅/DCO : 0,5–0,7 (EU dom.) · Rejet < 125 mg/L'},
  {m:'Décantation',cat:'Traitement eau',cc:'var(--c-ep)',def:'Séparation gravitaire des MES par différence de densité.',form:'Vs (Stokes) = (ρp-ρf)×g×d²/(18μ) · Décanteur lamellaire : Vs × S_lam'},
  {m:'Dénitrification',cat:'STEU',cc:'var(--c-ac)',def:'Réduction bactérienne NO₃⁻ → N₂ en conditions anoxiques.',form:'Besoins C/N : 5–8 g DBO₅ / g NO₃-N · Dénitrification spécifique : 0,03–0,15 g NO₃-N/(g MVS·h)'},
  {m:'Dureté (TH)',cat:'Qualité eau',cc:'var(--c-ep)',def:'Concentration en Ca²⁺ + Mg²⁺. Exprimée en °f. Responsable du tartre.',form:'1°f = 4 mg/L Ca²⁺ · 1°f = 2,4 mg/L Mg²⁺ · 1°f = 10 mg/L CaCO₃'},
  {m:'EH (Équivalent-Habitant)',cat:'AC',cc:'var(--c-ac)',def:'Unité de charge polluante de référence correspondant à un habitant moyen.',form:'1 EH = 60g DBO₅ = 135g DCO = 90g MES = 15g NTK = 4g Pt = 150 L/j'},
  {m:'Eutrophisation',cat:'Milieux',cc:'var(--c-riv)',def:'Enrichissement excessif en nutriments (NO₃, PO₄) entraînant prolifération algale et anoxie.',form:'Facteur limitant eau douce : Pt · Limite eutrophisation : Pt > 0,02–0,05 mg/L'},
  {m:'Évapotranspiration (ETP)',cat:'Hydrologie',cc:'var(--c-riv)',def:'Quantité d\'eau évaporée + transpirée dans des conditions optimales.',form:'Turc : ETP = 0,40×(Ra×(T+15))/(T+15+f(h)) · P = ETR + R + ΔS'},
  {m:'Filtre planté de roseaux (FPR)',cat:'ANC',cc:'var(--c-anc)',def:'Phytoépuration utilisant des roseaux (Phragmites australis) comme support biologique.',form:'FPRv : 5 m²/EH · FPRh : 3 m²/EH · Agréé CE NF EN 12566-3'},
  {m:'Fosse toutes eaux (FTE)',cat:'ANC',cc:'var(--c-anc)',def:'Ouvrage de prétraitement ANC recevant toutes les EU (vannes + ménagères).',form:'V = 3 000 L (≤5 pp) · +1 000 L/pp au-delà · Arrêté 07/09/2009'},
  {m:'Froude (nombre de)',cat:'Hydraulique',cc:'var(--c-ac)',def:'Compare forces inertielles et gravitaires. Régit le type d\'écoulement à surface libre.',form:'Fr = V/√(g×h) · Fr < 1 : fluvial · Fr = 1 : critique · Fr > 1 : torrentiel'},
  {m:'Gradient hydraulique',cat:'Hydrogéologie',cc:'var(--c-riv)',def:'Rapport perte de charge / longueur de trajet. Détermine la direction et la vitesse d\'écoulement souterrain.',form:'i = Δh/L · V_Darcy = K × i · K argile : < 10⁻⁸ m/s · K sable : 10⁻⁵ m/s'},
  {m:'HMT (Hauteur Manométrique Totale)',cat:'Pompes',cc:'var(--c-ac)',def:'Somme de la hauteur géométrique, des pertes de charge et de la pression résiduelle.',form:'HMT = Hg + hf + Hp (m CE) · P_hyd = ρ×g×Q×HMT/3600 (kW)'},
  {m:'Indice de Langelier (IL)',cat:'EP',cc:'var(--c-ep)',def:'Indice d\'équilibre calco-carbonique. Risque d\'entartrage ou de corrosion réseau AEP.',form:'IL = pH - pHs · IL > 0 : entartrante · IL < 0 : agressive · Cible : [-0,5 ; +0,5]'},
  {m:'Manning-Strickler',cat:'Hydraulique',cc:'var(--c-ac)',def:'Formule empirique d\'écoulement à surface libre permanent et uniforme. Standard pour collecteurs et rivières.',form:'Q = K × A × Rh^(2/3) × I^(1/2) · Rh = A/P · K PVC : 90–100 · K béton : 65–80'},
  {m:'MES (Matières En Suspension)',cat:'Qualité eau',cc:'var(--c-anc)',def:'Fraction solide retenue sur filtre 0,45 µm. Indicateur de turbidité et de charge particulaire.',form:'1 EH = 90 g MES/j · EU brutes : 150–350 mg/L · Rejet STEU < 35 mg/L'},
  {m:'Microstation d\'épuration',cat:'ANC',cc:'var(--c-anc)',def:'Traitement biologique compact agréé CE. Technologies : SBR, lit bactérien, FPR.',form:'Norme NF EN 12566-3 · Rendement DBO₅ > 90% · Rejet DBO₅ < 35 mg/L (D4)'},
  {m:'Nitrification',cat:'STEU',cc:'var(--c-ac)',def:'Oxydation NH₄⁺ → NO₂⁻ (Nitrosomonas) → NO₃⁻ (Nitrobacter). Processus aérobie.',form:'NH₄⁺ → NO₃⁻ · Besoins O₂ = 4,6 g/g NH₄-N · θc ≥ 15 j (hiver, < 10°C)'},
  {m:'NPSH',cat:'Pompes',cc:'var(--c-ac)',def:'Net Positive Suction Head. Hauteur nette disponible en aspiration évitant la cavitation.',form:'NPSHd = Patm/(ρg) - Ha - hfa - Pv(T)/(ρg) · Condition : NPSHd > NPSHr + 0,5 m'},
  {m:'NTK (Azote Total Kjeldahl)',cat:'Qualité eau',cc:'var(--c-anc)',def:'Somme de l\'azote ammoniacal NH₄⁺ et de l\'azote organique.',form:'1 EH = 15 g NTK/j · EU brutes : 30–60 mg/L · Rejet STEU sensible : < 10 mg/L'},
  {m:'O₂ dissous',cat:'Milieux',cc:'var(--c-riv)',def:'Teneur en oxygène dissous dans l\'eau. Indicateur essentiel de la qualité écologique.',form:'Saturation 20°C : 9,1 mg/L · Anoxie : < 2 mg/L · Seuil saumon : > 7 mg/L'},
  {m:'Osmose inverse (OI)',cat:'EP',cc:'var(--c-ep)',def:'Séparation membranaire sous pression. Seule technique vraiment efficace contre les PFAS.',form:'Rétention PFAS > 95% · Pression eau douce : 5–15 bar · Taux conversion : 60–80%'},
  {m:'PFAS',cat:'Polluants',cc:'var(--c-regl)',def:'Per- et polyfluoroalkyl substances. Polluants éternels. Liaisons C-F très stables. > 4 600 molécules.',form:'Limite EP : PFAS totaux < 0,1 µg/L (Directive 2020/2184 · dès 2026)'},
  {m:'pH',cat:'Qualité eau',cc:'var(--c-anc)',def:'Potentiel Hydrogène. Mesure d\'acidité ou de basicité. Influence solubilité des métaux.',form:'pH = -log₁₀[H⁺] · EP réglementaire : 6,5–9,0 · Neutralité : pH = 7'},
  {m:'Phosphore total (Pt)',cat:'Qualité eau',cc:'var(--c-anc)',def:'Somme du phosphore dissous (PO₄³⁻) et particulaire. Principal facteur d\'eutrophisation.',form:'1 EH = 4 g Pt/j · EU brutes : 6–15 mg/L · Rejet STEU > 10 000 EH zone sensible : < 1 mg/L'},
  {m:'Perméabilité (K)',cat:'Hydrogéologie',cc:'var(--c-riv)',def:'Aptitude d\'un milieu poreux à être traversé par un fluide. Paramètre fondamental Darcy.',form:'K argile : < 10⁻⁸ m/s · K sable fin : 10⁻⁵ m/s · K graviers : 10⁻² m/s · Q = K×A×i'},
  {m:'Rayon hydraulique (Rh)',cat:'Hydraulique',cc:'var(--c-ac)',def:'Rapport section mouillée / périmètre mouillé. Caractérise l\'efficacité hydraulique d\'une section.',form:'Rh = A/P · Section pleine circulaire : Rh = D/4'},
  {m:'Reynolds (nombre de)',cat:'Hydraulique',cc:'var(--c-ac)',def:'Compare forces inertielles et visqueuses. Définit le régime laminaire ou turbulent.',form:'Re = V×D/ν · ν eau 20°C : 10⁻⁶ m²/s · Laminaire : Re < 2 000 · Turbulent : Re > 4 000'},
  {m:'SPANC',cat:'Réglementation',cc:'var(--c-regl)',def:'Service Public d\'Assainissement Non Collectif. Contrôle obligatoire depuis la LEMA 2006.',form:'Délai NC danger : 1 an · NC sans danger : 4 ans · Refus accès : +400% redevance'},
  {m:'Transmissivité (T)',cat:'Hydrogéologie',cc:'var(--c-riv)',def:'Capacité d\'un aquifère à transmettre de l\'eau. T = K × b.',form:'T = K × b (m²/s) · Cooper-Jacob : T = 0,183 × Q / Δs · Nappe exploitable : T > 10⁻³ m²/s'},
  {m:'Turbidité',cat:'Qualité eau',cc:'var(--c-ep)',def:'Trouble d\'une eau par les MES. Mesurée en NTU par diffusion de la lumière.',form:'EP distribuée : < 1 NTU · Captage surface : < 2 NTU · Alerte Cryptosporidium > 1 NTU'},
  {m:'Vitesse auto-curage',cat:'AC',cc:'var(--c-ac)',def:'Vitesse minimale d\'écoulement pour éviter les dépôts dans un collecteur.',form:'EU : V ≥ 0,60 m/s · EP : V ≥ 0,50 m/s · V max AC : 3 m/s'},
  {m:'Zone humide',cat:'Milieux',cc:'var(--c-riv)',def:'Terrain inondé ou gorgé d\'eau de façon permanente ou temporaire. Protection renforcée.',form:'Compensation : 1 ha détruit → 2 ha compensés (Loi Biodiversité 2016)'},
];

function renderGlossTermes(q='') {
  const list = q ? TERMES_DB.filter(t=>(t.m+t.def+(t.form||'')).toLowerCase().includes(q)) : TERMES_DB;
  const byL = {};
  list.forEach(t=>{const l=t.m[0].toUpperCase();if(!byL[l])byL[l]=[];byL[l].push(t);});
  let html = `<div class="section-header">Termes ${q?'— résultats':'A→Z'}<span class="sh-count">${list.length}</span></div>`;
  if(!list.length){html+='<div class="empty-state" style="text-align:center;padding:40px;color:var(--c-text-3)">Aucun terme trouvé</div>';document.getElementById('gloss-content').innerHTML=html;return;}
  Object.keys(byL).sort().forEach(l=>{
    html += `<div style="padding:var(--s-2) var(--s-4) var(--s-1);font-family:var(--f-display);font-size:28px;color:var(--c-primary);opacity:.35;font-weight:600">${l}</div>`;
    html += `<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">`;
    byL[l].forEach(t=>{
      html += `<div class="gloss-item card">
        <div class="gi-top">
          <span class="gi-word">${t.m}</span>
          <span class="badge" style="background:color-mix(in srgb,${t.cc} 12%,transparent);color:${t.cc};margin-left:auto">${t.cat}</span>
        </div>
        <div class="gi-def">${t.def}</div>
        ${t.form?`<div style="margin-top:var(--s-2);font-family:'Courier New',monospace;font-size:12px;font-weight:800;color:var(--c-primary);background:var(--c-primary-l);padding:var(--s-2) var(--s-3);border-radius:var(--r-sm);border-left:3px solid var(--c-primary);line-height:1.8">${t.form}</div>`:''}
      </div>`;
    });
    html += `</div>`;
  });
  document.getElementById('gloss-content').innerHTML = html;
}

/* ─── FORMULES ─── */
const FORMULES_DB = [
  { cat:'Hydraulique générale', color:'var(--c-ac)', icon:'💧', items:[
    { nom:'Manning-Strickler (débit section pleine)',
      formule:'Q = K × A × Rh^(2/3) × I^(1/2)',
      detail:'K = coefficient Strickler · A = section mouillée (m²) · Rh = rayon hydraulique = A/P (m) · I = pente (m/m)',
      valeurs:'K PVC/PEHD : 90–100 · K béton neuf : 70–80 · K grès : 70 · K fonte : 100–130 · K rivière : 25–45',
      src:'Manning R. (1891) · NF EN 752 · CCTG Fascicule 70' },
    { nom:'Manning section partiellement remplie',
      formule:'θ = 2×arccos(1−2y/D) · A = D²/8×(θ−sinθ) · P = D/2×θ · Rh = A/P · Q = K×A×Rh^(2/3)×I^(1/2)',
      detail:'y = hauteur d\'eau (m) · D = diamètre intérieur (m) · θ = angle en radians',
      valeurs:'Taux de remplissage y/D = 0,8 → section courante en réseau EU',
      src:'Manning R. (1891) · NF EN 752' },
    { nom:'Darcy-Weisbach (perte de charge)',
      formule:'hf = f × (L/D) × V²/(2g)',
      detail:'f = facteur de friction (Colebrook-White) · L = longueur (m) · D = diamètre (m) · V = vitesse (m/s)',
      valeurs:'Moody : f dépend de Re et de la rugosité ε/D · ε acier : 0,046 mm · ε PVC : 0,0015 mm',
      src:'Darcy H. (1857) · Weisbach J. (1845)' },
    { nom:'Hazen-Williams (AEP sous pression)',
      formule:'V = 0,8492 × C × R^0,63 × S^0,54   ou   hf = 10,67 × Q^1,852 × L / (C^1,852 × D^4,877)',
      detail:'C = coefficient HW · R = Rh = D/4 · S = gradient hydraulique hf/L · Q en m³/s · D en m',
      valeurs:'C PEHD neuf : 140–150 · C fonte ductile neuve : 130 · C fonte vieillie : 80–100',
      src:'Hazen & Williams (1905) · CCTG Fascicule 71' },
    { nom:'Bernoulli (conservation énergie)',
      formule:'P₁/(ρg) + V₁²/(2g) + z₁ = P₂/(ρg) + V₂²/(2g) + z₂ + hf',
      detail:'P = pression (Pa) · V = vitesse (m/s) · z = cote (m) · hf = pertes de charge (m)',
      valeurs:'Énergie totale = pression + cinétique + potentielle (+ pertes)',
      src:'Bernoulli D. (1738). Hydrodynamica.' },
    { nom:'Équation de continuité',
      formule:'Q = A₁ × V₁ = A₂ × V₂ = constante',
      detail:'Conservation du débit en régime permanent incompressible.',
      valeurs:'Si A diminue → V augmente (effet Venturi)',
      src:'Principe de conservation de la masse' },
    { nom:'Froude (régime écoulement)',
      formule:'Fr = V / √(g × h)',
      detail:'V = vitesse moyenne (m/s) · g = 9,81 m/s² · h = hauteur d\'eau (m)',
      valeurs:'Fr < 1 : fluvial (lent) · Fr = 1 : critique · Fr > 1 : torrentiel (rapide)',
      src:'Froude W. (1874)' },
    { nom:'Reynolds (régime laminaire/turbulent)',
      formule:'Re = V × D / ν',
      detail:'V = vitesse (m/s) · D = diamètre (m) · ν = viscosité cinématique (m²/s)',
      valeurs:'ν eau 20°C = 10⁻⁶ m²/s · Laminaire : Re < 2 000 · Turbulent : Re > 4 000',
      src:'Reynolds O. (1883)' },
    { nom:'Profondeur critique (section rectangulaire)',
      formule:'hc = (Q² / (g × b²))^(1/3)',
      detail:'b = largeur (m) · Q = débit (m³/s) · hc = profondeur critique (m)',
      valeurs:'Si h > hc → fluvial · Si h < hc → torrentiel · Énergie minimale à hc',
      src:'Bélanger J.B. (1828)' },
  ]},
  { cat:'ANC — Assainissement Non Collectif', color:'var(--c-anc)', icon:'🏡', items:[
    { nom:'Surface épandage ANC',
      formule:'S = EH × 150 L/j / (Ch × 1 000)',
      detail:'EH = équivalents-habitants · Ch = charge hydraulique du sol (m/j) · Ch ≈ K × 0,006',
      valeurs:'K = 1 mm/min → Ch = 0,006 m/j → S = 25 m²/EH · Tranchées standard : Ch = 0,06 m/j',
      src:'DTU 64.1 · Arrêté 07/09/2009' },
    { nom:'Volume fosse toutes eaux (FTE)',
      formule:'V = 3 000 L si pp ≤ 5 · V = 3 000 + (pp − 5) × 1 000 L si pp > 5',
      detail:'pp = pièces principales (chambres + salon) · EH = pp + 1',
      valeurs:'4 pp → 3 000 L · 7 pp → 5 000 L · Volume minimum absolu : 3 000 L',
      src:'Arrêté 07/09/2009 art. 6 · DTU 64.1 · NF EN 12566-1' },
    { nom:'Fréquence de vidange FTE',
      formule:'Fréquence = V_FTE × 0,5 / (nb_pers × 30 L/an)',
      detail:'Vidange quand 50% du volume occupé par les boues · Accumulation : ~30 L/EH/an',
      valeurs:'4 personnes · FTE 3 000 L → Vidange tous les ~12,5 ans (max réglementaire : 4 ans)',
      src:'Arrêté 07/09/2009 · Guide SPANC national' },
    { nom:'Surface filtre planté de roseaux (FPR)',
      formule:'S_FPRv = EH × 5 m²/EH · S_FPRh = EH × 3 m²/EH',
      detail:'FPRv = flux vertical (nitrification) · FPRh = flux horizontal (dénitrification)',
      valeurs:'5 EH → FPRv = 25 m² · FPRh = 15 m² · Plantés : Phragmites australis',
      src:'NF EN 12566-3 · ASTEE Guide FPR 2017' },
    { nom:'Test de percolation Porchet',
      formule:'K (mm/min) = ΔV / (S_trou × Δt)',
      detail:'ΔV = volume infiltré (mL) · S_trou = surface du trou (cm²) · Δt = durée (min)',
      valeurs:'K < 1 : sol imperméable → filtre drainé · 1–15 : adapté · > 15 : trop perméable → filtre drainé',
      src:'DTU 64.1 · Norme NF EN ISO 22282-5' },
    { nom:'Charge hydraulique filière',
      formule:'Ch = Q_j / S_filière (m/j) · Q_j = EH × 150 L/j',
      detail:'Ch_tranchées = 0,06 m/j · Ch_filtre sable nd = 0,08 · Ch_filtre drainé = 0,10 · Ch_tertre = 0,12',
      valeurs:'S_min = EH × 150 / (Ch × 1 000) m²',
      src:'DTU 64.1' },
  ]},
  { cat:'Assainissement Collectif', color:'var(--c-ac)', icon:'🏙️', items:[
    { nom:'Coefficient de pointe EU',
      formule:'Cp = 1,5 + 2,5 / √Qmoy',
      detail:'Qmoy en L/s · Qpointe = Qmoy × Cp · Valable pour Qmoy : 1–200 L/s',
      valeurs:'Qmoy = 1 L/s → Cp = 4,0 · Qmoy = 10 L/s → Cp = 2,3 · Qmoy = 100 L/s → Cp = 1,75',
      src:'CCTG Fascicule 70 · NF EN 752' },
    { nom:'Débit de pointe eaux usées',
      formule:'Q_p = EH × 150 × Cp / 86 400 (m³/s)',
      detail:'EH × 150 L/j = volume journalier · Cp = coefficient de pointe',
      valeurs:'500 EH : Qmoy = 0,87 L/s → Cp = 4,2 → Qp = 3,66 L/s',
      src:'CCTG Fascicule 70' },
    { nom:'Déversoir d\'orage — longueur de crête',
      formule:'L = Q_déversé / (Cd × √(2g) × h^(3/2))',
      detail:'Cd = coefficient de débit (seuil mince : 0,42) · h = charge sur le seuil (m) · Q en m³/s',
      valeurs:'Q_déversé = Q_total − Q_transmis_STEU · Taux dilution min : 5',
      src:'Kindsvater & Carter (1957) · Arrêté 21/07/2015 · NF EN 752' },
    { nom:'Bassin d\'orage — méthode des pluies',
      formule:'V = max[(Q_entrée(t) − Q_fuite) × t]  sur toutes les durées t',
      detail:'Q_entrée = C×i×A/360 (L/s) · Q_fuite = débit de rejet autorisé (L/s)',
      valeurs:'Débit de fuite courant : 2 L/s/ha · Durée optimale à tester de 5 à 180 min',
      src:'Instruction Technique 1977 · CERTU guide pluvial' },
    { nom:'Dessablage — vitesse de Stokes',
      formule:'Vs = (ρp − ρf) × g × d² / (18 × μ)',
      detail:'ρp = masse vol. particule (kg/m³) · d = diamètre particule (m) · μ = viscosité dynamique',
      valeurs:'Sable 200 µm : Vs ≈ 22 mm/s · Vitesse horizontale dessableur : 0,15–0,30 m/s',
      src:'Stokes G.G. (1851) · Metcalf & Eddy (2014) · NF EN 12255-3' },
    { nom:'Surface filtre d\'un dessableur',
      formule:'A = Q / Vs · L = A / l · V_horiz = Q / (l × h) ≤ 0,30 m/s',
      detail:'Q = débit (m³/s) · Vs = vitesse de Stokes · l = largeur · h = profondeur utile',
      valeurs:'STEU 10 000 EH (Qp ≈ 100 L/s) → A = 4,5 m² · L = 3 m · l = 1,5 m',
      src:'NF EN 12255-3' },
    { nom:'Charge massique boues activées',
      formule:'Cm = L_DBO₅ / (V × MES)   [kg DBO₅ / (kg MVS × j)]',
      detail:'L_DBO₅ = charge DBO₅ entrante (kg/j) · V = volume bassin (m³) · MES = conc. boues (kg/m³)',
      valeurs:'Faible charge : Cm < 0,07 · Moyenne charge : 0,07–0,20 · Forte charge : > 0,20',
      src:'NF EN 12255 · Metcalf & Eddy (2014)' },
    { nom:'Âge des boues',
      formule:'θc = V × MES / (Qex × MESex)',
      detail:'V = volume bassin (m³) · MES = concentration biomasse · Qex = débit d\'extraction · MESex = MES extraites',
      valeurs:'Nitrification : θc ≥ 10 j (été) · θc ≥ 15 j (hiver < 10°C) · Dénitrification : θc ≥ 25 j',
      src:'NF EN 12255 · Arrêté 22/06/2007' },
    { nom:'Production de boues',
      formule:'Px = Y × L_DBO₅ / (1 + kd × θc)   [kg MVS/j]',
      detail:'Y = coefficient de synthèse ≈ 0,6 · kd = taux d\'endogène ≈ 0,05 j⁻¹',
      valeurs:'Boues à 20°C · MS totale ≈ Px × 1,25 (minéraux inclus)',
      src:'Lawrence & McCarty (1970) · Metcalf & Eddy (2014)' },
  ]},
  { cat:'Eau Potable', color:'var(--c-ep)', icon:'💧', items:[
    { nom:'Chloration — Dose totale',
      formule:'Dose_totale = Demande_chlore + Résiduel_souhaité (mg/L)',
      detail:'Demande = chlore oxydant la MO, Fe, Mn avant résiduel · Résiduel : 0,05–0,3 mg/L (NF EN 805)',
      valeurs:'Eau de surface : Demande = 1–3 mg/L · Eau souterraine : 0,2–0,8 mg/L',
      src:'Arrêté 11/01/2007 · CSP art. R.1321-2' },
    { nom:'Débit d\'injection chlore',
      formule:'Q_inj (L/h) = Dose (mg/L) × Q (m³/h) / Conc_solution (g/L)',
      detail:'Conc_solution = teneur en Cl₂ actif de la solution (eau de Javel 48° = 126 g/L)',
      valeurs:'Consommation annuelle = Q_inj × 24 × 365 (L/an) · Javel 12° = 36 g Cl₂/L',
      src:'Arrêté 11/01/2007' },
    { nom:'Indice de Langelier (IL)',
      formule:'IL = pH − pHs · pHs = pK₂ − pKs + p[Ca²⁺] + p[HCO₃⁻] + 5pf(I)',
      detail:'pH = mesuré · pHs = pH de saturation calculé depuis T, TH, TAC · f(I) = force ionique',
      valeurs:'IL > +0,5 : entartrante (dépôts CaCO₃) · IL < −0,5 : agressive (corrosion) · Cible : ±0,5',
      src:'Langelier W.F. (1936). AWWA Journal · CSP art. R.1321-2' },
    { nom:'Hazen-Williams — débit AEP',
      formule:'V = 0,8492 × C × (D/4)^0,63 × S^0,54   hf = 10,67 × Q^1,852 × L / (C^1,852 × D^4,877)',
      detail:'C = coefficient HW · S = pente hydraulique = hf/L · D en m · Q en m³/s',
      valeurs:'C PEHD : 140–150 · C fonte neuve : 130 · C fonte vieillie : 80–100',
      src:'Hazen & Williams (1905) · CCTG Fascicule 71' },
    { nom:'Réservoir AEP — volume total',
      formule:'V = V_régulation + V_incendie + V_sécurité',
      detail:'V_régl = Vj × 30–40% · V_incendie = 120 m³ min (NF S 62-200) · V_sécu = Qmoy × 8–12 h',
      valeurs:'Ts = V_total / Q_moy ≤ 24–48 h (sinon risque stagnation et chute du chlore résiduel)',
      src:'NF EN 805 · NF S 62-200 · Guide FNCCR' },
    { nom:'Temps de séjour réservoir',
      formule:'Ts = V_utile / Q_moyen (h)',
      detail:'Q_moyen = volume journalier / 24 h · Ts > 48 h : risque de stagnation',
      valeurs:'Ts idéal : 12–24 h · Max acceptable : 48 h (chlore résiduel)',
      src:'NF EN 805 · Recommandations OMS' },
    { nom:'Désinfection UV — puissance',
      formule:'P (W) = Dose (mJ/cm²) × Q (m³/s) × 10⁴ / (Efficacité × UVT)',
      detail:'Dose min : 40 mJ/cm² · UVT = transmission UV à 254 nm · Efficacité réacteur : 60–80%',
      valeurs:'40 mJ/cm² : bactéries · 100 : virus · 400 : Cryptosporidium',
      src:'Arrêté 11/01/2007 · NF EN 14897 · USEPA UVDGM (2006)' },
    { nom:'Beer-Lambert (spectrophotométrie)',
      formule:'A = ε × l × c',
      detail:'A = absorbance · ε = coeff. extinction molaire (L/mol/cm) · l = trajet optique (cm) · c = concentration (mol/L)',
      valeurs:'LOD = 3σ_blanc/pente · LOQ = 10σ_blanc/pente · Base de toute analyse colorimétrique eau',
      src:'Beer A. (1852) · Lambert J.H. (1760)' },
    { nom:'Vitesse de Stokes (décantation EP)',
      formule:'Vs = (ρp − ρf) × g × d² / (18 × μ)',
      detail:'ρp = densité particule · ρf = densité fluide · d = diamètre particule · μ = viscosité',
      valeurs:'Kaolin 1 µm : Vs ≈ 0,001 mm/s · Sable fin 50 µm : Vs ≈ 2 mm/s',
      src:'Stokes G.G. (1851) · NF EN 12255-3' },
  ]},
  { cat:'Hydrologie & Rivières', color:'var(--c-riv)', icon:'🌊', items:[
    { nom:'Méthode rationnelle (débit de pointe)',
      formule:'Q = C × i × A / 360   (L/s, avec A en ha et i en mm/h)',
      detail:'C = coefficient de ruissellement · i = intensité pluie projet (mm/h) · A = surface BV (ha)',
      valeurs:'Valable pour S ≤ 2 km² · T10 en zone urbaine · i lue sur courbes IDF Météo-France pour durée = Tc',
      src:'Mulvaney T.J. (1851) · Instructions Techniques 1977 · CERTU' },
    { nom:'Temps de concentration Tc — Kirpich',
      formule:'Tc = 0,0663 × L^0,77 × J^(−0,385)   (h)',
      detail:'L = longueur talweg principal (km) · J = pente moyenne = ΔH/L (m/m)',
      valeurs:'BV urbain 1 km², J = 1% : Tc ≈ 16 min · Valide pour S < 2 km²',
      src:'Kirpich P.Z. (1940). Civil Engineering · CEREMA Guide hydrologie' },
    { nom:'Temps de concentration — Passini',
      formule:'Tc = 0,108 × (S × L)^(1/3) / J^(1/2)   (h)',
      detail:'S = surface BV (km²) · L = longueur talweg (km) · J = pente (m/m)',
      valeurs:'Complémentaire à Kirpich · Moyenne des deux méthodes recommandée',
      src:'Passini F. (1914)' },
    { nom:'Bilan hydrologique',
      formule:'P = ETR + R + ΔS',
      detail:'P = précipitations · ETR = évapotranspiration réelle · R = ruissellement · ΔS = variation stock',
      valeurs:'Recharge nappe ≈ P − ETR − R · France : ETR ≈ 60–70% de P selon région',
      src:'Thornthwaite C.W. (1948) · Turc L. (1961)' },
    { nom:'Loi de Darcy (écoulement souterrain)',
      formule:'Q = K × A × i   ou   V_Darcy = K × i',
      detail:'K = conductivité hydraulique (m/s) · A = section (m²) · i = gradient hydraulique',
      valeurs:'K argile : 10⁻¹⁰–10⁻⁸ m/s · K sable : 10⁻⁵ m/s · K graviers : 10⁻² m/s',
      src:'Darcy H. (1856). Les fontaines publiques de la ville de Dijon.' },
    { nom:'Theis — Pompage d\'essai',
      formule:'s = Q/(4πT) × W(u)   avec   u = r²S/(4Tt)',
      detail:'s = rabattement (m) · T = transmissivité (m²/s) · S = emmagasinement · r = distance puits',
      valeurs:'W(u) = fonction de puits (tables de Theis) · Applicable si u < 0,05 (Cooper-Jacob)',
      src:'Theis C.V. (1935). Trans. Am. Geophys. Union.' },
    { nom:'Cooper-Jacob — Transmissivité',
      formule:'T = 0,183 × Q / Δs',
      detail:'Δs = variation rabattement par cycle log de temps · Q = débit de pompage (m³/s)',
      valeurs:'Tracé s = f(log t) → droite → T de la pente · Valide pour u < 0,01',
      src:'Cooper & Jacob (1946). Trans. Am. Geophys. Union.' },
    { nom:'Shields — Seuil mise en mouvement',
      formule:'d_min = V² × ρ / (2g × θc × (ρs−ρ) × cos(β) × Fs)',
      detail:'θc = 0,047 (Shields 1936) · ρs = densité bloc · β = angle berge · Fs = facteur sécurité',
      valeurs:'Fs = 1,3 (normal) · Fs = 1,5 (zone turbulente) · Granite ρs = 2 650 kg/m³',
      src:'Shields A. (1936). Anwendung der Ähnlichkeitsmechanik.' },
    { nom:'Distribution de Gumbel (crues)',
      formule:'F(x) = e^(−e^(−(x−u)/α))   T = 1/(1−F(x))',
      detail:'u = paramètre de position · α = paramètre d\'échelle · T = période de retour (ans)',
      valeurs:'Ajustement sur série de maxima annuels · GEV = généralisation de Gumbel',
      src:'Gumbel E.J. (1958). Statistics of Extremes. Columbia University Press.' },
    { nom:'Équations de Saint-Venant (ondes de crue)',
      formule:'∂A/∂t + ∂Q/∂x = 0   (continuité)   ∂Q/∂t + ∂/∂x(Q²/A) + gA(∂h/∂x + Sf) = 0   (dynamique)',
      detail:'A = section mouillée · Q = débit · Sf = pente de frottement · h = hauteur d\'eau',
      valeurs:'Base des modèles HEC-RAS, MIKE FLOOD · 1D pour profils en long · 2D pour zones d\'expansion',
      src:'Saint-Venant A.J.C.B. (1871). Comptes Rendus Acad. Sci.' },
  ]},
  { cat:'Pompes & Hydraulique', color:'var(--c-ac)', icon:'⚙️', items:[
    { nom:'HMT totale d\'une pompe',
      formule:'HMT = Hg + hf + Hp   (m CE)',
      detail:'Hg = hauteur géométrique aspiration-refoulement · hf = pertes de charge totales · Hp = pression résiduelle',
      valeurs:'1 m CE = 0,0981 bar = 9,81 kPa · Pression service AEP : 2–6 bar = 20–61 m CE',
      src:'NF EN ISO 9906 · Karassik I. (2001). Pump Handbook.' },
    { nom:'Puissance hydraulique et absorbée',
      formule:'P_hyd = ρ × g × Q × HMT / 3 600   (kW)   P_abs = P_hyd / η',
      detail:'ρ = 1 000 kg/m³ · Q en m³/h · HMT en m · η = rendement global pompe + moteur',
      valeurs:'η petite pompe : 55–65% · Grande pompe > 50 kW : 78–85%',
      src:'NF EN ISO 9906' },
    { nom:'NPSH disponible (anti-cavitation)',
      formule:'NPSHd = Patm/(ρg) − Ha − hfa − Pv(T)/(ρg)',
      detail:'Patm = 10,33 m CE · Ha = hauteur aspiration · hfa = pertes aspiration · Pv = pression vapeur',
      valeurs:'Pv(20°C) = 0,24 m CE · Pv(60°C) = 2,03 m CE · Condition : NPSHd > NPSHr + 0,5 m',
      src:'NF EN ISO 9906 · Karassik I. (2001)' },
    { nom:'Loi des affinités (variateur de fréquence)',
      formule:'Q₂/Q₁ = N₂/N₁   H₂/H₁ = (N₂/N₁)²   P₂/P₁ = (N₂/N₁)³',
      detail:'N = vitesse de rotation (tr/min) · Réduire la vitesse de 20% → économie de ~49% d\'énergie',
      valeurs:'VFD obligatoire sur pompes > 18,5 kW depuis réglementation UE (ErP directive)',
      src:'ISO 13349 · Affinités des turbomachines' },
    { nom:'Volume utile bâche relevage EU',
      formule:'V_utile = Q_entrée × (Q_pompe − Q_entrée) / (Q_pompe × N_max) × 3 600',
      detail:'Q_entrée = débit EU entrant (L/s) · Q_pompe = débit pompe (L/s) · N_max = démarrages/h',
      valeurs:'N_max : 6/h (petite pompe) · 4/h (grande pompe) · Tj séjour max : < 4 h (H₂S)',
      src:'NF EN 12050 · Guide ASTEE stations de relevage' },
    { nom:'Coup de bélier — célérité',
      formule:'a = √(K_eau / (ρ × (1 + K_eau × D/(E × e))))   ΔP = ρ × a × ΔV',
      detail:'K_eau = 2,2 GPa · E = module élasticité tube · e = épaisseur · D = diamètre · ΔV = variation vitesse',
      valeurs:'a acier : 1 000–1 400 m/s · a PEHD : 300–500 m/s · a PVC : 400–600 m/s · Tc = 2L/a',
      src:'Joukowski N. (1898). Über den hydraulischen Stoss.' },
  ]},
  { cat:'Qualité de l\'eau', color:'var(--c-anc)', icon:'🧪', items:[
    { nom:'Équivalent-Habitant (EH)',
      formule:'1 EH = 60 g DBO₅/j = 135 g DCO/j = 90 g MES/j = 15 g NTK/j = 4 g Pt/j = 150 L/j',
      detail:'Référence pour dimensionner ouvrages ANC, STEU, réseaux EU',
      valeurs:'Charge organique domestique moyenne · Base réglementaire EU (Directive ERU 91/271)',
      src:'Arrêté 22/06/2007 · Directive 91/271/CEE (ERU)' },
    { nom:'Rendement épuratoire',
      formule:'R (%) = (Ce − Cs) / Ce × 100',
      detail:'Ce = concentration entrée (mg/L) · Cs = concentration sortie (mg/L)',
      valeurs:'STEU classique : R(DBO₅) > 90% · R(MES) > 90% · R(NTK) > 70% (avec nitrif.)',
      src:'Arrêté 22/06/2007' },
    { nom:'Nitrification — besoins en O₂',
      formule:'O₂_nitrif = 4,6 × ΔN-NH₄   (g O₂ / g N oxydé)',
      detail:'NH₄⁺ → NO₂⁻ : 3,43 g O₂/g N (Nitrosomonas) · NO₂⁻ → NO₃⁻ : 1,14 g O₂/g N (Nitrobacter)',
      valeurs:'Besoin total : 4,57 g O₂/g NH₄-N · Économie dénitrification : 2,86 g O₂/g NO₃-N réduit',
      src:'Metcalf & Eddy (2014). Wastewater Engineering.' },
    { nom:'Abattement désinfection (Chick-Watson)',
      formule:'ln(N/N₀) = −k × C^n × t',
      detail:'N/N₀ = taux de survie · k = constante d\'inactivation · C = conc. désinfectant · t = temps contact',
      valeurs:'CT (Cl₂ × min) pour 2 log Giardia : 15–30 mg·min/L (pH 7, 10°C)',
      src:'Chick H. (1908) · Watson H.E. (1908). J. Hygiene.' },
    { nom:'Demande en chlore',
      formule:'Demande = Cl₂_injecté − Cl₂_résiduel (mg/L)',
      detail:'Demande = chlore consommé par MO + Fe + Mn + NH₄⁺ avant point de rupture',
      valeurs:'Point de rupture (breakpoint) : NH₄⁺ oxydé en N₂ · Résiduel cible : 0,05–0,3 mg/L',
      src:'AWWA Water Treatment (2011)' },
    { nom:'Indice de Langelier (IL)',
      formule:'IL = pH − pHs · pHs = f(T, TH, TAC) ≈ pK₂−pKs + p[Ca²⁺] + p[HCO₃⁻]',
      detail:'pHs calculé depuis TH (°f), TAC (°f), T (°C) · Formule de Langelier (1936)',
      valeurs:'IL > 0 : entartrante · IL < 0 : agressive · Cible distribution : −0,5 à +0,5',
      src:'Langelier W.F. (1936). AWWA Journal · CSP art. R.1321-2' },
    { nom:'Conversion dureté',
      formule:'1°f = 10 mg/L CaCO₃ = 0,56 mmol/L = 4 mg/L Ca²⁺ ≈ 2,4 mg/L Mg²⁺',
      detail:'1°d (allemand) = 17,85 mg/L CaCO₃ · 1°e (anglais) = 14,29 mg/L CaCO₃',
      valeurs:'Eau douce : TH < 15°f · Eau dure : 30–40°f · Eau très dure : > 40°f',
      src:'NF EN ISO 7980 · Norme AFNOR T90-003' },
    { nom:'Absorbance Beer-Lambert',
      formule:'A = ε × l × c   →   c = A / (ε × l)',
      detail:'A = absorbance (sans unité) · ε = coefficient extinction molaire · l = trajet optique (cm) · c = concentration (mol/L)',
      valeurs:'LOD = 3σ/pente · LOQ = 10σ/pente · Base spectrophotométrie eau',
      src:'Beer A. (1852) · Lambert J.H. (1760)' },
  ]},
];

function renderGlossFormules(q='') {
  let html = `<div style="padding:var(--s-2) var(--s-4) 0">
    <div class="alert info" style="margin-bottom:var(--s-3)"><span class="alert-icon">📐</span><span>Toutes les formules de l'application · Sources normatives · Formules en <strong>gras</strong> pour identification rapide</span></div>
  </div>`;
  FORMULES_DB.forEach(cat=>{
    const filtered = q ? cat.items.filter(f=>(f.nom+f.formule+f.detail+(f.valeurs||'')).toLowerCase().includes(q)) : cat.items;
    if(!filtered.length) return;
    html += `<div class="section-header" style="color:${cat.color}">${cat.icon} ${cat.cat}<span class="sh-count">${filtered.length}</span></div>`;
    html += `<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">`;
    filtered.forEach(f=>{
      html += `<div class="card" style="border-left:3px solid ${cat.color};overflow:hidden">
        <div style="padding:var(--s-2) var(--s-3) var(--s-2)">
          <div style="font-size:var(--t-sm);font-weight:800;color:${cat.color};margin-bottom:var(--s-2)">${f.nom}</div>
          <div style="font-family:'Courier New',monospace;font-size:13px;font-weight:900;color:var(--c-primary);background:var(--c-primary-l);padding:var(--s-2) var(--s-3);border-radius:var(--r-sm);border-left:4px solid var(--c-primary);line-height:1.9;letter-spacing:.01em;margin-bottom:var(--s-2)">${f.formule}</div>
          <div style="font-size:var(--t-xs);color:var(--c-text-3);line-height:1.75;margin-bottom:4px"><strong style="color:var(--c-text-2)">Variables :</strong> ${f.detail}</div>
          ${f.valeurs?`<div style="font-size:var(--t-xs);color:var(--c-text-3);line-height:1.75;margin-bottom:4px"><strong style="color:var(--c-text-2)">Valeurs :</strong> ${f.valeurs}</div>`:''}
          <div style="font-size:10px;color:var(--c-primary);background:var(--c-primary-l);padding:2px 9px;border-radius:var(--r-pill);display:inline-block;margin-top:4px">📖 ${f.src}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  if(!html.includes('<div class="card">')){
    html += '<div style="text-align:center;padding:40px;color:var(--c-text-3)">Aucune formule trouvée pour "'+q+'"</div>';
  }
  document.getElementById('gloss-content').innerHTML = html;
}

/* ─── ACRONYMES ─── */
const ACROS_DB = [
  {s:'ADCP',l:'Acoustic Doppler Current Profiler',d:'Débitmètre à effet Doppler. Mesure vitesse + section → débit en rivière.',dom:'Hydrologie'},
  {s:'AEP',l:'Alimentation en Eau Potable',d:'Production et distribution d\'eau potable.',dom:'Eau potable'},
  {s:'ANSES',l:'Agence Nationale de Sécurité Sanitaire',d:'Évalue les risques sanitaires (PFAS, pesticides, eau potable).',dom:'Institutionnel'},
  {s:'ARS',l:'Agence Régionale de Santé',d:'Contrôle qualité eau potable distribuée · Peut imposer des restrictions.',dom:'Santé'},
  {s:'ASTEE',l:'Association Scientifique et Technique pour l\'Eau et l\'Environnement',d:'Publie les guides techniques de référence (ANC, FPR, réseaux).',dom:'Professionnel'},
  {s:'BA',l:'Boues Activées',d:'Procédé biologique de traitement EU par culture bactérienne aérée en suspension.',dom:'STEU'},
  {s:'BRGM',l:'Bureau de Recherches Géologiques et Minières',d:'Gère ADES (eaux souterraines) et BSS (forages). Référence hydrogéologie.',dom:'Recherche'},
  {s:'BV',l:'Bassin Versant',d:'Aire géographique drainée par un cours d\'eau vers un exutoire commun.',dom:'Hydrologie'},
  {s:'CAG',l:'Charbon Actif en Grains',d:'Filtre adsorbant : pesticides, PFAS, goûts/odeurs. Filière AEP.',dom:'Eau potable'},
  {s:'CCP',l:'Code de la Commande Publique',d:'Règles marchés publics et concessions (remplace code marchés publics).',dom:'Droit public'},
  {s:'CCTP',l:'Cahier des Clauses Techniques Particulières',d:'Exigences techniques d\'un marché public.',dom:'Marchés publics'},
  {s:'CEREMA',l:'Centre d\'Études et d\'Expertise sur les Risques, l\'Environnement, la Mobilité et l\'Aménagement',d:'Expert technique eau pluviale, inondation, hydrologie urbaine.',dom:'Expertise'},
  {s:'Cm',l:'Charge Massique',d:'kg DBO₅ / (kg MVS × j). Paramètre de pilotage des boues activées.',dom:'STEU'},
  {s:'CSP',l:'Code de la Santé Publique',d:'Contient la réglementation eau potable (art. R.1321-1 à R.1321-70).',dom:'Réglementation'},
  {s:'DCE',l:'Directive Cadre sur l\'Eau',d:'Directive 2000/60/CE. Bon état de toutes les masses d\'eau d\'ici 2027.',dom:'Réglementation'},
  {s:'DDT',l:'Direction Départementale des Territoires',d:'Instruit les dossiers IOTA, DUP, zones vulnérables nitrates.',dom:'Administration'},
  {s:'DO',l:'Déversoir d\'Orage',d:'Déleste le réseau EU en temps de pluie. Taux de dilution min : 5.',dom:'Assainissement'},
  {s:'DREAL',l:'Direction Régionale de l\'Environnement, de l\'Aménagement et du Logement',d:'Inspection ICPE, police de l\'eau, PGRI.',dom:'Administration'},
  {s:'DSP',l:'Délégation de Service Public',d:'Gestion déléguée eau/assainissement à un opérateur privé (affermage ou concession).',dom:'Gestion services'},
  {s:'DTU',l:'Document Technique Unifié',d:'Norme technique française. DTU 64.1 = ANC. DTU 60.11 = canalisations.',dom:'Normes'},
  {s:'DUP',l:'Déclaration d\'Utilité Publique',d:'Acte permettant expropriation ou servitudes (captages AEP).',dom:'Droit public'},
  {s:'EH',l:'Équivalent-Habitant',d:'1 EH = 60 g DBO₅/j = 150 L/j. Unité de charge polluante de référence.',dom:'Assainissement'},
  {s:'EPCI',l:'Établissement Public de Coopération Intercommunale',d:'Compétent eau et assainissement depuis loi NOTRe 2020.',dom:'Collectivités'},
  {s:'ETP',l:'Évapotranspiration Potentielle',d:'Évaporation + transpiration en conditions optimales. Paramètre bilan hydro.',dom:'Hydrologie'},
  {s:'FPR',l:'Filtre Planté de Roseaux',d:'Phytoépuration ANC. FPRv (vertical) : 5 m²/EH · FPRh (horizontal) : 3 m²/EH.',dom:'ANC'},
  {s:'FTE',l:'Fosse Toutes Eaux',d:'Prétraitement ANC recevant toutes les EU. Volume min : 3 m³ (≤5 pp).',dom:'ANC'},
  {s:'GEMAPI',l:'Gestion des Milieux Aquatiques et Prévention des Inondations',d:'Compétence obligatoire des EPCI depuis 2018.',dom:'Collectivités'},
  {s:'HMT',l:'Hauteur Manométrique Totale',d:'HMT = Hg + hf + Hp. Paramètre dimensionnant d\'une pompe.',dom:'Pompes'},
  {s:'IBD',l:'Indice Biologique Diatomées',d:'NF T90-354. Score 0–20. Bon état DCE : ≥ 16. Diatomées = algues unicellulaires.',dom:'Milieux'},
  {s:'IDF',l:'Intensité-Durée-Fréquence',d:'Courbes pluies de projet (Météo-France). i = a/(Tc+b)^n selon région.',dom:'Hydrologie'},
  {s:'IL',l:'Indice de Langelier',d:'IL = pH − pHs. IL > 0 : entartrante. IL < 0 : agressive. Cible : ±0,5.',dom:'Eau potable'},
  {s:'ILP',l:'Indice Linéaire de Pertes',d:'ILP = (Vp−Vc)/L réseau (m³/km/j). Objectif : < 3 m³/km/j.',dom:'Réseaux AEP'},
  {s:'INRAE',l:'Institut National de Recherche pour l\'Agriculture, l\'Alimentation et l\'Environnement',d:'Hydrologie (Explore2), FPR, qualité eaux agricoles.',dom:'Recherche'},
  {s:'IOTA',l:'Installations, Ouvrages, Travaux et Activités',d:'Nomenclature eau (Code envt R.214-1). Autorisation ou déclaration selon impact.',dom:'Réglementation'},
  {s:'IPR',l:'Indice Poissons Rivière',d:'Score 0–100. Excellent : < 7. Mauvais : > 54. Cadre DCE.',dom:'Milieux'},
  {s:'ITV',l:'Inspection Télévisée Vidéo',d:'Diagnostic des réseaux par caméra. Détecte fissures, déformations, infiltrations.',dom:'Réseaux'},
  {s:'IWA',l:'International Water Association',d:'Développe indicateurs performance (ILP, ILI, NRW) et standards techniques.',dom:'International'},
  {s:'LEMA',l:'Loi sur l\'Eau et les Milieux Aquatiques',d:'Loi n°2006-1772. Crée SPANC, transpose DCE, réforme redevances Agences.',dom:'Réglementation'},
  {s:'MBR',l:'Membrane Bioreactor (Bioréacteur à Membranes)',d:'BA + ultrafiltration. DBO₅ rejet < 5 mg/L. MES < 1 mg/L. Compatible REUT.',dom:'Traitement'},
  {s:'MES',l:'Matières En Suspension',d:'1 EH = 90 g MES/j. EU brutes : 150–350 mg/L. Rejet STEU : < 35 mg/L.',dom:'Qualité eau'},
  {s:'MNF',l:'Minimum Night Flow',d:'Débit minimum entre 2h–4h. Méthode IWA de détection des fuites (excédent = fuites).',dom:'Réseaux AEP'},
  {s:'MOA',l:'Maîtrise d\'Ouvrage',d:'Entité portant un projet. Définit les besoins, finance et réceptionne les travaux.',dom:'Gestion projet'},
  {s:'MOE',l:'Maîtrise d\'Œuvre',d:'Bureau d\'études chargé de la conception et du suivi de réalisation.',dom:'Gestion projet'},
  {s:'MODFLOW',l:'Modular Three-Dimensional Groundwater Flow Model',d:'Modèle 3D USGS de simulation des écoulements souterrains. Standard mondial.',dom:'Hydrogéologie'},
  {s:'NDWI',l:'Normalized Difference Water Index',d:'NDWI = (Vert−PIR)/(Vert+PIR). Détection eau et humidité sur images satellites.',dom:'Télédétection'},
  {s:'NPSH',l:'Net Positive Suction Head',d:'NPSHd > NPSHr + 0,5 m → pas de cavitation. Paramètre constructeur pompe.',dom:'Pompes'},
  {s:'NQE',l:'Norme de Qualité Environnementale',d:'Concentration max d\'une substance pour le bon état chimique DCE.',dom:'Réglementation'},
  {s:'NRW',l:'Non-Revenue Water',d:'Volume mis en distribution non facturé (fuites + pertes admin). Indicateur IWA.',dom:'Réseaux AEP'},
  {s:'NTK',l:'Azote Total Kjeldahl',d:'NH₄⁺ + N organique. 1 EH = 15 g NTK/j. EU brutes : 30–60 mg/L.',dom:'Qualité eau'},
  {s:'OFB',l:'Office Français de la Biodiversité',d:'Créé 2020 (AFB + ONCFS). Police eau et nature. Surveillance milieux aquatiques.',dom:'Institutionnel'},
  {s:'OI',l:'Osmose Inverse',d:'Rétention PFAS > 95%. Pression eau douce : 5–15 bar. Taux conversion 60–80%.',dom:'Traitement'},
  {s:'PDM',l:'Programme De Mesures',d:'Actions pour atteindre objectifs DCE. Déclinaison opérationnelle du SDAGE.',dom:'Réglementation'},
  {s:'PFAS',l:'Per- and Polyfluoroalkyl Substances',d:'Polluants éternels. > 4 600 molécules. C-F très stables. Limite EP : < 0,1 µg/L.',dom:'Polluants'},
  {s:'PGRI',l:'Plan de Gestion du Risque Inondation',d:'Directive Inondation 2007/60. 1 par district hydro. Révisé tous les 6 ans.',dom:'Risques'},
  {s:'PPRi',l:'Plan de Prévention des Risques d\'Inondation',d:'Délimite zones inondables Q100. Zone rouge = inconstructible. Opposable PLU.',dom:'Risques'},
  {s:'PRV',l:'Pressure Reducing Valve',d:'Vanne réductrice de pression. Pression service AEP : 2–6 bar (NF EN 805).',dom:'Eau potable'},
  {s:'PSE',l:'Plan de Sécurité de l\'Eau',d:'Méthode HACCP appliquée à l\'AEP. Obligatoire UDI > 5 000 m³/j (dès 2026).',dom:'Eau potable'},
  {s:'REUT',l:'Réutilisation des Eaux Usées Traitées',d:'Règlement UE 2020/741. Classes A, B, C, D. Objectif France : ×10 d\'ici 2030.',dom:'Traitement'},
  {s:'RPQS',l:'Rapport sur le Prix et la Qualité du Service',d:'Document annuel obligatoire. Indicateurs : rendement IP106, ILP, volumes, prix.',dom:'Gestion services'},
  {s:'SAGE',l:'Schéma d\'Aménagement et de Gestion des Eaux',d:'Planification locale eau. Décline SDAGE à l\'échelle BV cohérent. Opposable.',dom:'Réglementation'},
  {s:'SBR',l:'Sequencing Batch Reactor',d:'Boues activées cycliques dans un seul bassin. Utilisé en microstation ANC.',dom:'Traitement'},
  {s:'SCADA',l:'Supervisory Control And Data Acquisition',d:'Système supervision et contrôle à distance (pompes, capteurs, vannes).',dom:'Instrumentation'},
  {s:'SDAGE',l:'Schéma Directeur d\'Aménagement et de Gestion des Eaux',d:'Plan gestion eau par district (6 en France). Révisé tous les 6 ans. Décline DCE.',dom:'Réglementation'},
  {s:'SPANC',l:'Service Public d\'Assainissement Non Collectif',d:'Contrôle ANC. Obligatoire depuis LEMA 2006. NC danger : 1 an. Sans danger : 4 ans.',dom:'ANC'},
  {s:'STEP/STEU',l:'Station de Traitement des Eaux Usées',d:'Anciennement STEP. Soumise à autosurveillance (Arrêté 22/06/2007).',dom:'Assainissement'},
  {s:'TAC',l:'Titre Alcalimétrique Complet',d:'Alcalinité totale (HCO₃⁻). En °f. TAC (°f) = [HCO₃⁻] (mg/L) / 12,2.',dom:'Qualité eau'},
  {s:'TH',l:'Titre Hydrotimétrique',d:'Dureté totale Ca²⁺ + Mg²⁺. En °f. 1°f = 10 mg/L CaCO₃. Eau dure : > 30°f.',dom:'Qualité eau'},
  {s:'TRI',l:'Territoire à Risque Important d\'Inondation',d:'122 TRI en France. Directive Inondation. Concentrent 80% des enjeux inondation.',dom:'Risques'},
  {s:'TVB',l:'Trame Verte et Bleue',d:'Réseau écologique national (Grenelle II). Trame bleue = cours d\'eau + zones humides.',dom:'Environnement'},
  {s:'VFD',l:'Variable Frequency Drive (variateur de fréquence)',d:'Pilote la vitesse des pompes. Économies importantes : P ∝ N³.',dom:'Pompes'},
  {s:'ZAN',l:'Zéro Artificialisation Nette',d:'Objectif Loi Climat 2021. −50% artificialisation 2021–2031. ZAN total d\'ici 2050.',dom:'Urbanisme'},
  {s:'ZRE',l:'Zone de Répartition des Eaux',d:'Ressource insuffisante. Restrictions de prélèvement plus strictes. Arrêté préfectoral.',dom:'Réglementation'},
];

function renderGlossAcronymes(q='') {
  const list = q ? ACROS_DB.filter(a=>(a.s+a.l+a.d).toLowerCase().includes(q)) : ACROS_DB;
  const byL = {};
  list.forEach(a=>{const l=a.s[0].toUpperCase();if(!byL[l])byL[l]=[];byL[l].push(a);});
  let html = `<div class="section-header">${q?'Résultats':'Acronymes A→Z'}<span class="sh-count">${list.length}</span></div>`;
  Object.keys(byL).sort().forEach(l=>{
    html += `<div style="padding:var(--s-1) var(--s-4) 0;font-family:var(--f-display);font-size:24px;color:var(--c-primary);opacity:.35;font-weight:600">${l}</div>`;
    html += `<div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:6px">`;
    byL[l].forEach(a=>{
      html += `<div class="card" style="padding:10px 13px;display:flex;gap:var(--s-3);align-items:flex-start">
        <div style="font-size:var(--t-md);font-weight:800;color:var(--c-text);min-width:72px;flex-shrink:0;line-height:1.3">${a.s}</div>
        <div style="flex:1">
          <div style="font-size:var(--t-sm);font-weight:600;margin-bottom:2px;line-height:1.4">${a.l}</div>
          <div style="font-size:10px;color:var(--c-text-3);line-height:1.6">${a.d}</div>
          <span style="font-size:9px;font-weight:700;padding:1px 7px;border-radius:var(--r-pill);background:var(--c-primary-l);color:var(--c-primary);margin-top:4px;display:inline-block">${a.dom}</span>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  document.getElementById('gloss-content').innerHTML = html;
}

/* ─── ORGANISMES ─── */
function renderGlossOrganismes(q='') {
  const orgs = [
    {ico:'🦦',name:'OFB — Office Français de la Biodiversité',type:'Établissement public (créé 2020)',color:'var(--c-aides)',colorl:'var(--c-aides-l)',missions:['Police de l\'eau · Contrôle autorisations IOTA','Surveillance milieux aquatiques (IPR, IBD, IBG-DCE)','Contrôle continuité écologique (L.214-17)','Gestion des espèces exotiques envahissantes (EEE)'],url:'https://www.ofb.gouv.fr'},
    {ico:'🔬',name:'ANSES — Agence Nationale de Sécurité Sanitaire',type:'Agence publique',color:'var(--c-regl)',colorl:'var(--c-regl-l)',missions:['Évaluation risques PFAS, pesticides, nitrates dans l\'eau','Avis sur les valeurs limites réglementaires EP','Expertise contaminants émergents (microplastiques...)'],url:'https://www.anses.fr'},
    {ico:'🏥',name:'ARS — Agence Régionale de Santé',type:'Agence de l\'État',color:'var(--c-regl)',colorl:'var(--c-regl-l)',missions:['Surveillance qualité eau potable distribuée','Validation PSE et UDI · Autorisation captages','Délivrance dérogations · Portail SISE-Eaux'],url:'https://www.ars.sante.fr'},
    {ico:'⛏️',name:'BRGM — Bureau de Recherches Géologiques et Minières',type:'Établissement public de recherche',color:'var(--c-ep)',colorl:'var(--c-ep-l)',missions:['Gestion base ADES (piézométrie + qualité souterraines)','Banque du Sous-Sol (BSS) : forages + logs géologiques','Cartographies hydrogéologiques au 1/50 000'],url:'https://www.brgm.fr'},
    {ico:'🌾',name:'INRAE — Institut National de Recherche Agriculture et Environnement',type:'Établissement public de recherche',color:'var(--c-ep)',colorl:'var(--c-ep-l)',missions:['Hydrologie : Explore2 (projections débit 2050–2100)','Recherche FPR, lagunage, phytoépuration','Qualité eaux agricoles : nitrates, pesticides, PFAS'],url:'https://www.inrae.fr'},
    {ico:'🛣️',name:'CEREMA',type:'Établissement public',color:'var(--c-orange,#9A4200)',colorl:'#FEF0E2',missions:['Hydrologie urbaine · Techniques alternatives EP','Appui PGRI · Modélisation hydraulique (HEC-RAS)','Publication guides techniques (gestion source EP)'],url:'https://www.cerema.fr'},
    {ico:'💧',name:'Agences de l\'eau (×6)',type:'Établissements publics nationaux',color:'var(--c-ac)',colorl:'var(--c-ac-l)',missions:['Collecte redevances (principe pollueur-payeur)','Financement STEU, réseaux, ANC, restauration milieux','Élaboration et animation SDAGE et SAGE'],url:'https://www.lesagencesdeleau.fr'},
    {ico:'📚',name:'ASTEE',type:'Association professionnelle loi 1901',color:'var(--c-ref)',colorl:'var(--c-ref-l)',missions:['Publication guides ANC, FPR, réseaux, EP','Animation groupes de travail PFAS, REUT, CC','Formation professionnelle · Normalisation AFNOR'],url:'https://www.astee.org'},
    {ico:'🎓',name:'ENGEES — École Nationale du Génie de l\'Eau',type:'École d\'ingénieurs',color:'var(--c-form)',colorl:'var(--c-form-l)',missions:['Ingénieur eau et environnement (Bac+5)','Mastère Spécialisé® EPA : référence post-ingénieur','Partenariats INRAE, OFB, Agences de l\'eau'],url:'https://engees.unistra.fr'},
    {ico:'🌍',name:'OIEau — Office International de l\'Eau',type:'Association d\'intérêt général',color:'var(--c-anc)',colorl:'var(--c-anc-l)',missions:['Formation continue secteur eau (> 200 modules/an)','Gestion portail eaufrance.fr · Base de données eau','Coopération internationale (AFD, Banque Mondiale)'],url:'https://www.oieau.org'},
    {ico:'🏛️',name:'DDT — Direction Départementale des Territoires',type:'Service de l\'État',color:'var(--c-ref)',colorl:'var(--c-ref-l)',missions:['Instruction dossiers IOTA (loi sur l\'eau)','Gestion ZRE · DUP captages AEP · Zones vulnérables','Application politiques agricoles eau'],url:'https://www.ecologie.gouv.fr'},
    {ico:'🔍',name:'DREAL — Direction Régionale Environnement',type:'Service de l\'État',color:'var(--c-ref)',colorl:'var(--c-ref-l)',missions:['Inspection ICPE dont STEU > 10 000 EH','Élaboration PGRI et SRADDET · Police de l\'eau','Surveillance barrages et grands ouvrages hydrauliques'],url:'https://www.ecologie.gouv.fr'},
  ];
  const list = q ? orgs.filter(o=>(o.name+o.type+o.missions.join(' ')).toLowerCase().includes(q)) : orgs;
  let html = `<div class="section-header">${q?'Résultats':'Organismes du secteur eau'}<span class="sh-count">${list.length}</span></div>
  <div style="padding:0 var(--s-4);display:flex;flex-direction:column;gap:var(--s-2)">`;
  list.forEach(o=>{
    html += `<div class="card" style="border-left:3px solid ${o.color};overflow:hidden">
      <div style="padding:var(--s-3) var(--s-4);display:flex;align-items:flex-start;gap:var(--s-3)">
        <div style="width:42px;height:42px;border-radius:var(--r-sm);background:${o.colorl};display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${o.ico}</div>
        <div style="flex:1">
          <div style="font-size:var(--t-sm);font-weight:700;margin-bottom:2px;line-height:1.3">${o.name}</div>
          <div style="font-size:10px;color:var(--c-text-3);margin-bottom:var(--s-2)">${o.type}</div>
          <div style="display:flex;flex-direction:column;gap:3px">
            ${o.missions.map(m=>`<div style="font-size:10px;color:var(--c-text-3);display:flex;gap:6px;line-height:1.5">• ${m}</div>`).join('')}
          </div>
          <a href="${o.url}" target="_blank" style="font-size:10px;color:var(--c-primary);display:inline-flex;align-items:center;gap:4px;margin-top:var(--s-2);text-decoration:none">🔗 ${o.url}</a>
        </div>
      </div>
    </div>`;
  });
  html += '</div>';
  document.getElementById('gloss-content').innerHTML = html;
}

/* ─── RENDER COURS ─── */
function renderCours() {
  var _tb=document.getElementById('tab-bar'); if(_tb) _tb.style.display='none';
  const questions = [
    {q:'Le coefficient de Strickler K pour un tuyau PVC neuf est :', opts:['60–70','70–80','90–100','110–120'], a:2, exp:'PVC/PEHD neuf : K = 90–100. Fonte ductile neuve : K = 130. Béton vieux : K = 60–70. Plus K est élevé, moins il y a de pertes de charge.', niv:'Débutant'},
    {q:'La DBO₅ d\'un équivalent-habitant (1 EH) est :', opts:['30 g/j','60 g/j','90 g/j','120 g/j'], a:1, exp:'1 EH = 60 g DBO₅/j = 90 g MES/j = 135 g DCO/j = 15 g NTK/j = 4 g Pt/j = 150 L/j. Source : Arrêté 22/06/2007.', niv:'Débutant'},
    {q:'L\'âge des boues minimum pour la nitrification en hiver (T < 10°C) est :', opts:['5 jours','8 jours','15 jours','25 jours'], a:2, exp:'θc ≥ 15 jours en hiver pour assurer la nitrification complète. Les Nitrosomonas ont une croissance lente à basse température. Sans nitrification : NH₄⁺ passe dans le milieu.', niv:'Intermédiaire'},
  ];
  qcmState = {idx:0, score:0};
  document.getElementById('main-content').innerHTML = `
    <div class="module-hero" style="--cat-color: var(--c-anc)">
      <span class="mh-icon">🎓</span>
      <div class="mh-title">BTS GEMEAU</div>
      <div class="mh-sub">6 Unités d'Enseignement complètes · QCM 3 niveaux · Fiches mémo</div>
      <div class="mh-tags"><span class="mh-tag">UE1→UE6</span><span class="mh-tag">Débutant</span><span class="mh-tag">Intermédiaire</span><span class="mh-tag">Expert</span></div>
    </div>

    <div style="padding:var(--s-3) var(--s-4) 0">
      <div class="card card-p">
        <div style="font-size:var(--t-xs);font-weight:800;color:var(--c-text-4);text-transform:uppercase;letter-spacing:.06em;margin-bottom:var(--s-2)">📖 UE1 — Hydraulique générale</div>
        <div style="font-size:var(--t-sm);color:var(--c-text-3);line-height:1.8;margin-bottom:var(--s-3)">Manning-Strickler · Darcy-Weisbach · Hazen-Williams · Coup de bélier · Pompes centrifuges · Coefficient de pointe EU</div>
        <div class="formula-box">Q = K × A × Rh^(2/3) × I^(1/2)<br>Cp = 1,5 + 2,5/√Qmoy (Qmoy en L/s)<br>ΔP = ρ × a × ΔV (coup de bélier)</div>
        <div class="alert info" style="margin-top:var(--s-2)"><span class="alert-icon">📌</span><span>K PVC/PEHD : 90–100 · K béton : 65–80 · K rivière : 25–45 · V auto-curage EU : ≥ 0,60 m/s</span></div>
      </div>
    </div>

    <div class="section-header" style="margin-top:var(--s-3)">🧩 QCM interactif<span class="sh-count">${questions.length} questions</span></div>
    <div class="qcm-wrap" id="qcm-zone">
      ${renderQCMQuestion(questions, 0)}
    </div>
    <div class="pb-nav"></div>`;
}

function renderQCMQuestion(qs, idx) {
  if(idx >= qs.length) {
    const pct = Math.round(qcmState.score/qs.length*100);
    return `<div class="card card-p" style="text-align:center">
      <div style="font-size:40px;margin-bottom:var(--s-3)">${pct>=80?'🏆':pct>=60?'👍':'📚'}</div>
      <div style="font-family:var(--f-display);font-size:var(--t-2xl);margin-bottom:5px">${qcmState.score} / ${qs.length}</div>
      <div style="font-size:var(--t-sm);color:var(--c-text-3);margin-bottom:var(--s-4)">${pct>=80?'Excellente maîtrise !':pct>=60?'Bon niveau. Révisez les points incorrects.':'À retravailler. Relisez les cours.'}</div>
      <button class="btn btn-primary" onclick="qcmState={idx:0,score:0};renderCours()">Recommencer</button>
    </div>`;
  }
  const q = qs[idx];
  return `<div class="card" style="overflow:hidden">
    <div class="qcm-progress"><div class="qcm-fill" style="width:${idx/qs.length*100}%"></div></div>
    <div class="card-p">
      <div class="qcm-meta"><span>Q${idx+1} / ${qs.length}</span><span class="badge badge-info">${q.niv}</span></div>
      <div class="qcm-question">${q.q}</div>
      <div class="qcm-choices">
        ${q.opts.map((o,i)=>`<button class="qcm-choice" onclick="answerQCM(${i},${q.a},'${encodeURIComponent(q.exp)}',${idx})" data-q="${idx}" data-i="${i}">${o}</button>`).join('')}
      </div>
      <div class="qcm-feedback" id="qcm-fb"></div>
      <button class="qcm-next" id="qcm-next" onclick="nextQCM(${idx})">Question suivante →</button>
    </div>
  </div>`;
}

window.QCM_QUESTIONS = [
  {q:'Le coefficient de Strickler K pour un tuyau PVC neuf est :', opts:['60–70','70–80','90–100','110–120'], a:2, exp:'PVC/PEHD neuf : K = 90–100. Fonte ductile neuve : K = 130. Béton vieux : K = 60–70. Plus K est élevé, moins il y a de pertes de charge.', niv:'Débutant'},
  {q:'La DBO₅ d\'un équivalent-habitant (1 EH) est :', opts:['30 g/j','60 g/j','90 g/j','120 g/j'], a:1, exp:'1 EH = 60 g DBO₅/j = 90 g MES/j = 135 g DCO/j = 15 g NTK/j = 4 g Pt/j = 150 L/j. Source : Arrêté 22/06/2007.', niv:'Débutant'},
  {q:'L\'âge des boues minimum pour la nitrification en hiver est :', opts:['5 jours','8 jours','15 jours','25 jours'], a:2, exp:'θc ≥ 15 jours en hiver pour assurer la nitrification complète. Les Nitrosomonas ont une croissance lente à basse température.', niv:'Intermédiaire'},
];

function answerQCM(chosen, correct, expEnc, idx) {
  const exp = decodeURIComponent(expEnc);
  document.querySelectorAll('.qcm-choice').forEach((b,i)=>{
    b.disabled = true;
    if(i===correct) b.classList.add('correct');
    else if(i===chosen) b.classList.add('wrong');
  });
  if(chosen===correct) qcmState.score++;
  const fb = document.getElementById('qcm-fb');
  fb.style.display='block';
  fb.className = 'qcm-feedback ' + (chosen===correct?'alert ok':'alert danger');
  fb.innerHTML = `<span class="alert-icon">${chosen===correct?'✓':'✗'}</span><span>${chosen===correct?'Correct ! ':'Incorrect. '}${exp}</span>`;
  const nxt = document.getElementById('qcm-next');
  if(nxt) nxt.style.display='block';
}
function nextQCM(idx){
  const next = idx+1;
  qcmState.idx = next;
  document.getElementById('qcm-zone').innerHTML = renderQCMQuestion(window.QCM_QUESTIONS, next);
}

