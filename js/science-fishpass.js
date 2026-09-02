/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — PASSES À POISSONS
   Hydraulic pre-design only. Biological acceptance must be assessed with
   target species / ICE or specialist design guidance; no universal species
   thresholds are asserted here.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__HC_SCIENCE_FISHPASS_LOADED__) return;
  window.__HC_SCIENCE_FISHPASS_LOADED__ = true;

  function positive(v, label) {
    var n=Number(v); if(!Number.isFinite(n)||n<=0) throw new RangeError(label+' must be > 0'); return n;
  }

  function poolFishPassHydraulics(totalHeadM, targetDropM, flowM3s, poolLengthM, poolWidthM, poolDepthM, dischargeCoefficient) {
    var H=positive(totalHeadM,'total head');
    var dhTarget=positive(targetDropM,'target drop');
    var Q=positive(flowM3s,'flow');
    var L=positive(poolLengthM,'pool length');
    var W=positive(poolWidthM,'pool width');
    var D=positive(poolDepthM,'pool depth');
    var Cd=dischargeCoefficient==null?1:Number(dischargeCoefficient);
    if(!Number.isFinite(Cd)||Cd<=0||Cd>1.5) throw new RangeError('discharge coefficient out of range');
    var n=Math.ceil(H/dhTarget);
    var dh=H/n;
    var theoreticalVelocityMs=Cd*Math.sqrt(2*9.81*dh);
    var poolVolumeM3=L*W*D;
    var dissipatedPowerW=1000*9.81*Q*dh;
    var volumetricPowerWm3=dissipatedPowerW/poolVolumeM3;
    return {totalHeadM:H,targetDropM:dhTarget,numberOfDrops:n,actualDropM:dh,flowM3s:Q,poolVolumeM3:poolVolumeM3,
      dischargeCoefficient:Cd,theoreticalVelocityMs:theoreticalVelocityMs,dissipatedPowerW:dissipatedPowerW,
      volumetricPowerWm3:volumetricPowerWm3};
  }

  window.HydroCalcScience=window.HydroCalcScience||{};
  window.HydroCalcScience.poolFishPassHydraulics=poolFishPassHydraulics;

  window.renderPAPCalc=function(){
    var z=document.getElementById('pap-content'); if(!z)return;
    z.innerHTML='<div style="padding:var(--s-3) var(--s-4) 0">'
      +'<div class="alert info"><span class="alert-icon">ℹ</span><span>Pré-dimensionnement hydraulique d’une passe à bassins. Les critères biologiques dépendent des espèces cibles, de la géométrie et des conditions de fonctionnement ; les confronter au référentiel ICE et à une étude spécialisée.</span></div></div>'
      +'<div class="section-header">Paramètres hydrauliques</div><div style="padding:0 var(--s-4)"><div class="card card-p">'
      +'<div class="field"><label class="field-label">Hauteur totale à franchir H</label><div class="field-row"><input type="number" id="pap-H" value="2" step="0.1" min="0.01"><span class="field-unit">m</span></div></div>'
      +'<div class="field"><label class="field-label">Dénivelé cible par bassin Δh</label><div class="field-tip">Hypothèse de conception à justifier selon les espèces cibles et le type de passe.</div><div class="field-row"><input type="number" id="pap-dh" value="0.15" step="0.01" min="0.01"><span class="field-unit">m</span></div></div>'
      +'<div class="field"><label class="field-label">Débit dans la passe Q</label><div class="field-row"><input type="number" id="pap-Q" value="0.5" step="0.05" min="0.001"><span class="field-unit">m³/s</span></div></div>'
      +'<div class="field"><label class="field-label">Longueur d’un bassin</label><div class="field-row"><input type="number" id="pap-L" value="2.5" step="0.1"><span class="field-unit">m</span></div></div>'
      +'<div class="field"><label class="field-label">Largeur d’un bassin</label><div class="field-row"><input type="number" id="pap-W" value="1.5" step="0.1"><span class="field-unit">m</span></div></div>'
      +'<div class="field"><label class="field-label">Profondeur utile</label><div class="field-row"><input type="number" id="pap-D" value="1" step="0.1"><span class="field-unit">m</span></div></div>'
      +'<div class="field"><label class="field-label">Coefficient de vitesse Cd</label><div class="field-tip">Coefficient hydraulique de l’ouverture ; 1 donne la vitesse théorique √(2gΔh).</div><div class="field-row"><input type="number" id="pap-Cd" value="0.62" step="0.01"><span class="field-unit">—</span></div></div>'
      +'<button class="btn btn-primary" onclick="calcPAP()">Calculer le pré-dimensionnement</button></div></div>'
      +'<div id="pap-result" style="padding:0 var(--s-4);margin-top:var(--s-2)"></div>';
    window.calcPAP();
  };

  window.calcPAP=function(){
    var res=document.getElementById('pap-result'); if(!res)return;
    try{
      var r=poolFishPassHydraulics(
        parseFloat((document.getElementById('pap-H')||{}).value),parseFloat((document.getElementById('pap-dh')||{}).value),
        parseFloat((document.getElementById('pap-Q')||{}).value),parseFloat((document.getElementById('pap-L')||{}).value),
        parseFloat((document.getElementById('pap-W')||{}).value),parseFloat((document.getElementById('pap-D')||{}).value),
        parseFloat((document.getElementById('pap-Cd')||{}).value));
      res.innerHTML='<div class="card card-p"><div style="font-size:var(--t-xs);font-weight:800;color:var(--c-riv);text-transform:uppercase;margin-bottom:var(--s-2)">Pré-dimensionnement hydraulique</div>'
        +'<div class="kv-grid">'
        +'<div class="kv-item"><div class="kv-key">Nombre de chutes</div><div class="kv-val">'+r.numberOfDrops+'</div></div>'
        +'<div class="kv-item"><div class="kv-key">Δh réel</div><div class="kv-val">'+r.actualDropM.toFixed(3)+' m</div></div>'
        +'<div class="kv-item"><div class="kv-key">Volume d’un bassin</div><div class="kv-val">'+r.poolVolumeM3.toFixed(2)+' m³</div></div>'
        +'<div class="kv-item"><div class="kv-key">Vitesse théorique ouverture</div><div class="kv-val">'+r.theoreticalVelocityMs.toFixed(2)+' m/s</div></div>'
        +'<div class="kv-item"><div class="kv-key">Puissance dissipée / bassin</div><div class="kv-val">'+r.dissipatedPowerW.toFixed(0)+' W</div></div>'
        +'<div class="kv-item"><div class="kv-key">Puissance volumique</div><div class="kv-val">'+r.volumetricPowerWm3.toFixed(0)+' W/m³</div></div>'
        +'</div></div>'
        +'<div class="alert info" style="margin-top:var(--s-2)"><span class="alert-icon">📖</span><span>Référence de diagnostic biologique : méthode ICE (OFB/Onema). Les valeurs ci-dessus sont hydrauliques ; aucune conclusion de franchissabilité par espèce n’est produite automatiquement.</span></div>';
    }catch(e){res.textContent='Valeurs invalides : '+e.message;}
  };
})();