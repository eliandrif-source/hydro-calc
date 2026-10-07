/* ═══════════════════════════════════════════════════
   COURS PERSONNALISÉS — HydroCalc
   Injecte les formations perso dans COURS_DATA au démarrage
   Création, édition, suppression de formations perso
   Stockage : localStorage (free) | Supabase (pro, à venir)
═══════════════════════════════════════════════════ */

var _CP_KEY = 'hydrocalc_perso_formations';

/* Injection au démarrage */
(function() {
  function _doInject() { if (typeof COURS_DATA !== 'undefined') cpInjectAll(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _doInject);
  else _doInject();
})();

/* ─── CRUD localStorage ─────────────────────────────── */
function _cpLoad() {
  try { return JSON.parse(localStorage.getItem(_CP_KEY) || '[]'); }
  catch(e) { return []; }
}
function _cpSave(list) {
  localStorage.setItem(_CP_KEY, JSON.stringify(list));
}
function _cpGenId(prefix) {
  return (prefix || 'perso') + '_' + Date.now() + '_' + Math.random().toString(36).slice(2,5);
}

/* Injecte les formations perso dans COURS_DATA au démarrage */
function cpInjectAll() {
  var list = _cpLoad();
  list.forEach(function(f) { if (f && f.id) COURS_DATA[f.id] = f; });
}

/* ─── ÉTAT ÉDITEUR ──────────────────────────────────── */
var _cpDraft = null; /* formation en cours d'édition */

function _cpNewFormation() {
  return {
    id: _cpGenId('perso'),
    name: '',
    sigle: 'PERSO',
    ico: '📘',
    color: '#6A1B9A',
    colorl: '#EDE7F6',
    niveau: 'Tous niveaux',
    organisme: 'Personnel',
    desc: '',
    annees: []
  };
}
function _cpNewMatiere() {
  return { id: _cpGenId('pm'), name: '', ico: '📖', color: '#6A1B9A', colorl: '#EDE7F6', chapitres: [] };
}
function _cpNewChapitre() {
  return {
    id: _cpGenId('pc'),
    titre: '',
    fiche: { intro: '', sections: [], points: [], formules: [], retenir: '', schema: null },
    flashcards: [],
    exercices: []
  };
}
function _cpNewSection() { return { titre: '', texte: '', schema: null, img: null }; }
function _cpNewFlashcard() { return { q: '', r: '' }; }
function _cpNewExercice() {
  return { id: _cpGenId('pex'), titre: '', source: '', difficulte: 'moyen', enonce: '', questions: [{ q: '', r: '', formule: '', calcul: '' }] };
}

/* ─── SUPPRESSION ────────────────────────────────────── */
function cpDelete(id) {
  if (!confirm('Supprimer cette formation ? Cette action est irréversible.')) return;
  var list = _cpLoad().filter(function(f) { return f.id !== id; });
  _cpSave(list);
  delete COURS_DATA[id];
  renderFormationsHub();
}

/* ─── SAUVEGARDE DRAFT ───────────────────────────────── */
function _cpSaveDraft() {
  if (!_cpDraft) return;
  var list = _cpLoad();
  var idx = list.findIndex(function(f) { return f.id === _cpDraft.id; });
  if (idx >= 0) list[idx] = _cpDraft;
  else list.push(_cpDraft);
  _cpSave(list);
  COURS_DATA[_cpDraft.id] = _cpDraft;
}

/* ─── LECTURE FORMULAIRE VERS DRAFT ─────────────────── */
function _cpReadForm() {
  if (!_cpDraft) return;
  var g = function(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
  _cpDraft.name = g('cp-name');
  _cpDraft.sigle = g('cp-sigle') || 'PERSO';
  _cpDraft.ico = g('cp-ico') || '📘';
  _cpDraft.color = g('cp-color') || '#6A1B9A';
  _cpDraft.colorl = g('cp-colorl') || '#EDE7F6';
  _cpDraft.niveau = g('cp-niveau') || 'Tous niveaux';
  _cpDraft.organisme = g('cp-orga') || 'Personnel';
  _cpDraft.desc = g('cp-desc');

  /* Matières et chapitres */
  _cpDraft.annees.forEach(function(mat, mi) {
    mat.name = g('cp-mat-name-' + mi) || mat.name;
    mat.ico = g('cp-mat-ico-' + mi) || mat.ico;
    mat.chapitres.forEach(function(chap, ci) {
      chap.titre = g('cp-chap-titre-' + mi + '-' + ci) || chap.titre;
      chap.fiche.intro = g('cp-chap-intro-' + mi + '-' + ci);
      chap.fiche.retenir = g('cp-chap-retenir-' + mi + '-' + ci);
      /* Points clés */
      var pointsEl = document.getElementById('cp-chap-points-' + mi + '-' + ci);
      if (pointsEl) chap.fiche.points = pointsEl.value.split('\n').map(function(p){ return p.trim(); }).filter(Boolean);
      /* Sections */
      chap.fiche.sections.forEach(function(sec, si) {
        sec.titre = g('cp-sec-titre-' + mi + '-' + ci + '-' + si);
        sec.texte = g('cp-sec-texte-' + mi + '-' + ci + '-' + si);
      });
      /* Flashcards */
      chap.flashcards.forEach(function(fc, fi) {
        fc.q = g('cp-fc-q-' + mi + '-' + ci + '-' + fi);
        fc.r = g('cp-fc-r-' + mi + '-' + ci + '-' + fi);
      });
      /* Exercices */
      chap.exercices.forEach(function(ex, ei) {
        ex.titre = g('cp-ex-titre-' + mi + '-' + ci + '-' + ei);
        ex.enonce = g('cp-ex-enonce-' + mi + '-' + ci + '-' + ei);
        ex.source = g('cp-ex-source-' + mi + '-' + ci + '-' + ei);
        if (ex.questions[0]) {
          ex.questions[0].q = g('cp-ex-q-' + mi + '-' + ci + '-' + ei);
          ex.questions[0].r = g('cp-ex-r-' + mi + '-' + ci + '-' + ei);
        }
      });
    });
  });
}

/* ─── ACTIONS DYNAMIQUES (ajout/suppression items) ────── */
function cpAddMatiere() {
  _cpReadForm();
  _cpDraft.annees.push(_cpNewMatiere());
  _cpRenderEditor();
}
function cpDelMatiere(mi) {
  _cpReadForm();
  _cpDraft.annees.splice(mi, 1);
  _cpRenderEditor();
}
function cpAddChapitre(mi) {
  _cpReadForm();
  _cpDraft.annees[mi].chapitres.push(_cpNewChapitre());
  _cpRenderEditor(mi);
}
function cpDelChapitre(mi, ci) {
  _cpReadForm();
  _cpDraft.annees[mi].chapitres.splice(ci, 1);
  _cpRenderEditor(mi);
}
function cpAddSection(mi, ci) {
  _cpReadForm();
  _cpDraft.annees[mi].chapitres[ci].fiche.sections.push(_cpNewSection());
  _cpRenderEditor(mi);
}
function cpDelSection(mi, ci, si) {
  _cpReadForm();
  _cpDraft.annees[mi].chapitres[ci].fiche.sections.splice(si, 1);
  _cpRenderEditor(mi);
}
function cpAddFlashcard(mi, ci) {
  _cpReadForm();
  _cpDraft.annees[mi].chapitres[ci].flashcards.push(_cpNewFlashcard());
  _cpRenderEditor(mi);
}
function cpDelFlashcard(mi, ci, fi) {
  _cpReadForm();
  _cpDraft.annees[mi].chapitres[ci].flashcards.splice(fi, 1);
  _cpRenderEditor(mi);
}
function cpAddExercice(mi, ci) {
  _cpReadForm();
  _cpDraft.annees[mi].chapitres[ci].exercices.push(_cpNewExercice());
  _cpRenderEditor(mi);
}
function cpDelExercice(mi, ci, ei) {
  _cpReadForm();
  _cpDraft.annees[mi].chapitres[ci].exercices.splice(ei, 1);
  _cpRenderEditor(mi);
}

/* Upload image → base64 dans section */
function cpUploadImg(mi, ci, si) {
  var input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = function() {
    var file = input.files[0];
    if (!file) return;
    if (file.size > 500000) { alert('Image trop lourde (max 500 ko). Redimensionnez-la avant de l\'importer.'); return; }
    var reader = new FileReader();
    reader.onload = function(e) {
      _cpReadForm();
      _cpDraft.annees[mi].chapitres[ci].fiche.sections[si].img = e.target.result;
      _cpRenderEditor(mi);
    };
    reader.readAsDataURL(file);
  };
  input.click();
}
function cpRemoveImg(mi, ci, si) {
  _cpReadForm();
  _cpDraft.annees[mi].chapitres[ci].fiche.sections[si].img = null;
  _cpRenderEditor(mi);
}

/* ─── SAUVEGARDE ET QUITTER ────────────────────────────── */
function cpSaveAndExit() {
  _cpReadForm();
  if (!_cpDraft.name) { alert('Donnez un nom à votre formation avant de sauvegarder.'); return; }
  if (_cpDraft.annees.length === 0) { alert('Ajoutez au moins une matière.'); return; }
  _cpSaveDraft();
  _cpDraft = null;
  renderFormationsHub();
}
function cpSaveOnly() {
  _cpReadForm();
  if (!_cpDraft.name) { alert('Donnez un nom à votre formation avant de sauvegarder.'); return; }
  _cpSaveDraft();
  /* Feedback visuel */
  var btn = document.getElementById('cp-save-btn');
  if (btn) { btn.textContent = '✅ Sauvegardé'; btn.style.background = '#2E7D32'; setTimeout(function(){ btn.textContent = '💾 Sauvegarder'; btn.style.background = '#6A1B9A'; }, 1800); }
}

/* ─── RENDU DE L'ÉDITEUR ───────────────────────────────── */
var _cpOpenMat = null; /* index matière ouverte dans l'éditeur */

function _cpRenderEditor(openMat) {
  if (openMat !== undefined) _cpOpenMat = openMat;
  var f = _cpDraft;
  var COLORS = ['#6A1B9A','#1565C0','#2E7D32','#E65100','#B71C1C','#00695C','#37474F','#AD1457'];
  var EMOJIS = ['📘','📗','📙','📕','🌊','💧','🌿','⚖️','📐','🏛️','🔬','🛡️','📊','🗺️','📋','🌍'];

  var colorOpts = COLORS.map(function(c){
    return '<option value="' + c + '"' + (f.color === c ? ' selected' : '') + '>' + c + '</option>';
  }).join('');
  var icoOpts = EMOJIS.map(function(e){
    return '<option value="' + e + '"' + (f.ico === e ? ' selected' : '') + '>' + e + ' ' + e + '</option>';
  }).join('');

  var html = `<div style="background:var(--c-bg-2);min-height:100vh;padding-bottom:80px">
    <!-- Header éditeur -->
    <div style="background:${f.color||'#6A1B9A'};color:white;padding:var(--s-3) var(--s-4);display:flex;align-items:center;gap:12px;position:sticky;top:0;z-index:10">
      <button onclick="if(confirm('Quitter sans sauvegarder ?')){_cpDraft=null;renderFormationsHub();}" style="border:none;background:rgba(255,255,255,.2);color:white;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:13px">← Retour</button>
      <div style="flex:1;font-weight:700;font-size:15px">✏️ ${f.name||'Nouvelle formation'}</div>
      <button id="cp-save-btn" onclick="cpSaveOnly()" style="border:none;background:rgba(255,255,255,.25);color:white;border-radius:6px;padding:6px 14px;cursor:pointer;font-size:13px;font-weight:600">💾 Sauvegarder</button>
    </div>

    <div style="padding:var(--s-3) var(--s-4);display:flex;flex-direction:column;gap:var(--s-3)">

    <!-- Bloc 1 : infos formation -->
    <div style="background:var(--c-bg);border-radius:12px;padding:var(--s-3);border:1.5px solid ${f.color||'#6A1B9A'}22">
      <div style="font-weight:700;color:${f.color||'#6A1B9A'};margin-bottom:12px;font-size:13px;text-transform:uppercase;letter-spacing:.05em">📋 Informations de la formation</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
        <div>
          <label style="font-size:11px;color:var(--c-text-3);font-weight:600">Nom de la formation *</label>
          <input id="cp-name" value="${_esc(f.name)}" placeholder="Ex: Formation sécurité digues" style="${_cpInputStyle()}" oninput="document.querySelector('[data-cpname]').textContent=this.value||'Nouvelle formation'">
        </div>
        <div>
          <label style="font-size:11px;color:var(--c-text-3);font-weight:600">Sigle</label>
          <input id="cp-sigle" value="${_esc(f.sigle)}" placeholder="Ex: DIGUE" style="${_cpInputStyle()}">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:90px 1fr 1fr;gap:10px;margin-bottom:10px">
        <div>
          <label style="font-size:11px;color:var(--c-text-3);font-weight:600">Icône</label>
          <select id="cp-ico" style="${_cpInputStyle()}">${icoOpts}</select>
        </div>
        <div>
          <label style="font-size:11px;color:var(--c-text-3);font-weight:600">Couleur</label>
          <select id="cp-color" style="${_cpInputStyle()}" onchange="document.getElementById('cp-colorl').value=this.value+'22'">${colorOpts}</select>
        </div>
        <div>
          <label style="font-size:11px;color:var(--c-text-3);font-weight:600">Niveau</label>
          <input id="cp-niveau" value="${_esc(f.niveau)}" placeholder="Ex: Avancé" style="${_cpInputStyle()}">
        </div>
      </div>
      <input type="hidden" id="cp-colorl" value="${_esc(f.colorl)}">
      <div style="margin-bottom:10px">
        <label style="font-size:11px;color:var(--c-text-3);font-weight:600">Organisme / Source</label>
        <input id="cp-orga" value="${_esc(f.organisme)}" placeholder="Ex: Service technique, CEREMA…" style="${_cpInputStyle()}">
      </div>
      <div>
        <label style="font-size:11px;color:var(--c-text-3);font-weight:600">Description courte</label>
        <textarea id="cp-desc" rows="2" placeholder="Décrivez en quelques mots l'objectif de cette formation…" style="${_cpInputStyle(true)}">${_esc(f.desc)}</textarea>
      </div>
    </div>

    <!-- Bloc 2 : matières -->
    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <div style="font-weight:700;color:var(--c-text-1);font-size:14px">📚 Matières <span style="color:var(--c-text-3);font-weight:400;font-size:12px">(${f.annees.length})</span></div>
        <button onclick="cpAddMatiere()" style="${_cpBtnStyle(f.color||'#6A1B9A')}">+ Ajouter une matière</button>
      </div>
      ${f.annees.length === 0 ? `<div style="text-align:center;padding:20px;color:var(--c-text-3);background:var(--c-bg);border-radius:10px;border:1.5px dashed var(--c-border)">Cliquez sur "+ Ajouter une matière" pour commencer</div>` : ''}
      <div style="display:flex;flex-direction:column;gap:var(--s-2)">
        ${f.annees.map(function(mat, mi) { return _cpRenderMatiereBlock(mat, mi, f.color||'#6A1B9A'); }).join('')}
      </div>
    </div>

    </div>

    <!-- Bouton final -->
    <div style="position:fixed;bottom:64px;left:0;right:0;padding:10px 16px;background:var(--c-bg-2);border-top:1px solid var(--c-border);display:flex;gap:8px;z-index:10">
      <button onclick="cpSaveAndExit()" style="flex:1;padding:12px;background:${f.color||'#6A1B9A'};color:white;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer">✅ Sauvegarder et terminer</button>
    </div>
  </div>`;

  /* Injecter data-cpname pour maj en temps réel */
  html = html.replace('✏️ ' + (f.name||'Nouvelle formation'), '✏️ <span data-cpname>' + (f.name||'Nouvelle formation') + '</span>');

  document.getElementById('main-content').innerHTML = html;

  /* Scroll vers matière ouverte */
  if (_cpOpenMat !== null) {
    setTimeout(function() {
      var el = document.getElementById('cp-mat-' + _cpOpenMat);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

function _cpRenderMatiereBlock(mat, mi, color) {
  var isOpen = (_cpOpenMat === null || _cpOpenMat === mi);
  return `<div id="cp-mat-${mi}" style="background:var(--c-bg);border-radius:12px;border:1px solid var(--c-border);overflow:hidden">
    <!-- En-tête matière -->
    <div style="display:flex;align-items:center;gap:10px;padding:12px;background:${color}11;border-bottom:1px solid ${color}22;cursor:pointer" onclick="document.getElementById('cp-mat-body-${mi}').style.display=document.getElementById('cp-mat-body-${mi}').style.display==='none'?'block':'none'">
      <select id="cp-mat-ico-${mi}" onclick="event.stopPropagation()" style="width:56px;border:none;background:transparent;font-size:16px;cursor:pointer">
        ${['📖','📐','⚖️','💧','🌊','🌿','🛡️','🔬','📊','🗺️','📋','🏛️'].map(function(e){return '<option value="'+e+'"'+(mat.ico===e?' selected':'')+'>'+e+'</option>';}).join('')}
      </select>
      <input id="cp-mat-name-${mi}" value="${_esc(mat.name)}" placeholder="Nom de la matière *" onclick="event.stopPropagation()" style="flex:1;border:none;background:transparent;font-size:14px;font-weight:600;color:var(--c-text-1);outline:none">
      <span style="font-size:12px;color:var(--c-text-3)">${mat.chapitres.length} chap.</span>
      <button onclick="event.stopPropagation();cpDelMatiere(${mi})" style="border:none;background:none;cursor:pointer;color:var(--c-danger);font-size:16px;padding:2px 6px" title="Supprimer matière">🗑</button>
    </div>
    <!-- Corps matière -->
    <div id="cp-mat-body-${mi}" style="${isOpen?'':'display:none'}">
      <div style="padding:12px;display:flex;flex-direction:column;gap:10px">
        ${mat.chapitres.map(function(chap, ci) { return _cpRenderChapBlock(chap, mi, ci, color); }).join('')}
        <button onclick="cpAddChapitre(${mi})" style="${_cpBtnStyle(color,'ghost')}">+ Ajouter un chapitre</button>
      </div>
    </div>
  </div>`;
}

function _cpRenderChapBlock(chap, mi, ci, color) {
  var fiche = chap.fiche || {};
  var sections = fiche.sections || [];
  var flashcards = chap.flashcards || [];
  var exercices = chap.exercices || [];
  var points = (fiche.points || []).join('\n');

  return `<div style="border:1px solid var(--c-border);border-radius:10px;overflow:hidden">
    <!-- Titre chapitre -->
    <div style="display:flex;align-items:center;gap:8px;padding:10px 12px;background:var(--c-bg-2);border-bottom:1px solid var(--c-border)">
      <span style="font-size:12px;color:${color};font-weight:700">Chap. ${ci+1}</span>
      <input id="cp-chap-titre-${mi}-${ci}" value="${_esc(chap.titre)}" placeholder="Titre du chapitre *" style="flex:1;border:none;background:transparent;font-size:13px;font-weight:600;color:var(--c-text-1);outline:none">
      <button onclick="cpDelChapitre(${mi},${ci})" style="border:none;background:none;cursor:pointer;color:var(--c-danger);font-size:14px" title="Supprimer">✕</button>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:12px">

      <!-- Introduction -->
      <div>
        <label style="${_cpLabelStyle()}">Introduction / Contexte</label>
        <textarea id="cp-chap-intro-${mi}-${ci}" rows="3" placeholder="Présentez le sujet, le contexte, les objectifs d'apprentissage…" style="${_cpInputStyle(true)}">${_esc(fiche.intro||'')}</textarea>
      </div>

      <!-- Sections (contenu principal) -->
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
          <label style="${_cpLabelStyle()}">Sections de contenu</label>
          <button onclick="cpAddSection(${mi},${ci})" style="${_cpBtnStyle(color,'xs')}">+ Section</button>
        </div>
        ${sections.map(function(sec, si) { return _cpRenderSection(sec, mi, ci, si, color); }).join('')}
        ${sections.length===0?'<div style="font-size:11px;color:var(--c-text-3);text-align:center;padding:8px">Aucune section — cliquez sur "+ Section"</div>':''}
      </div>

      <!-- Points clés -->
      <div>
        <label style="${_cpLabelStyle()}">Points clés <span style="font-weight:400">(1 point par ligne)</span></label>
        <textarea id="cp-chap-points-${mi}-${ci}" rows="3" placeholder="Point important 1&#10;Point important 2&#10;…" style="${_cpInputStyle(true)}">${_esc(points)}</textarea>
      </div>

      <!-- À retenir -->
      <div>
        <label style="${_cpLabelStyle()}">À retenir (synthèse courte)</label>
        <textarea id="cp-chap-retenir-${mi}-${ci}" rows="2" placeholder="Message essentiel à retenir de ce chapitre…" style="${_cpInputStyle(true)}">${_esc(fiche.retenir||'')}</textarea>
      </div>

      <!-- Flashcards -->
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
          <label style="${_cpLabelStyle()}">Flashcards <span style="color:var(--c-text-3);font-weight:400">(${flashcards.length})</span></label>
          <button onclick="cpAddFlashcard(${mi},${ci})" style="${_cpBtnStyle('#1565C0','xs')}">+ Flashcard</button>
        </div>
        ${flashcards.map(function(fc, fi) {
          return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px">
            <input id="cp-fc-q-${mi}-${ci}-${fi}" value="${_esc(fc.q)}" placeholder="❓ Question" style="${_cpInputStyle()}">
            <div style="display:flex;gap:4px">
              <input id="cp-fc-r-${mi}-${ci}-${fi}" value="${_esc(fc.r)}" placeholder="💡 Réponse" style="${_cpInputStyle()};flex:1">
              <button onclick="cpDelFlashcard(${mi},${ci},${fi})" style="border:none;background:none;cursor:pointer;color:var(--c-danger);font-size:14px;padding:0 4px">✕</button>
            </div>
          </div>`;
        }).join('')}
      </div>

      <!-- Exercices -->
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
          <label style="${_cpLabelStyle()}">Exercices <span style="color:var(--c-text-3);font-weight:400">(${exercices.length})</span></label>
          <button onclick="cpAddExercice(${mi},${ci})" style="${_cpBtnStyle('#2E7D32','xs')}">+ Exercice</button>
        </div>
        ${exercices.map(function(ex, ei) {
          var q0 = (ex.questions && ex.questions[0]) || { q:'', r:'' };
          return `<div style="border:1px solid var(--c-border);border-radius:8px;padding:10px;margin-bottom:6px">
            <div style="display:flex;gap:6px;margin-bottom:6px">
              <input id="cp-ex-titre-${mi}-${ci}-${ei}" value="${_esc(ex.titre)}" placeholder="Titre de l'exercice" style="${_cpInputStyle()};flex:1">
              <button onclick="cpDelExercice(${mi},${ci},${ei})" style="border:none;background:none;cursor:pointer;color:var(--c-danger);font-size:14px;padding:0 4px">✕</button>
            </div>
            <input id="cp-ex-source-${mi}-${ci}-${ei}" value="${_esc(ex.source)}" placeholder="Source / référence" style="${_cpInputStyle()};margin-bottom:6px">
            <textarea id="cp-ex-enonce-${mi}-${ci}-${ei}" rows="2" placeholder="Énoncé de l'exercice…" style="${_cpInputStyle(true)};margin-bottom:6px">${_esc(ex.enonce)}</textarea>
            <input id="cp-ex-q-${mi}-${ci}-${ei}" value="${_esc(q0.q)}" placeholder="Question principale" style="${_cpInputStyle()};margin-bottom:4px">
            <input id="cp-ex-r-${mi}-${ci}-${ei}" value="${_esc(q0.r)}" placeholder="Réponse / corrigé" style="${_cpInputStyle()}">
          </div>`;
        }).join('')}
      </div>

    </div>
  </div>`;
}

function _cpRenderSection(sec, mi, ci, si, color) {
  return `<div style="border:1px solid ${color}33;border-radius:8px;padding:10px;margin-bottom:6px;background:var(--c-bg-2)">
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
      <span style="font-size:11px;color:${color};font-weight:700;white-space:nowrap">§${si+1}</span>
      <input id="cp-sec-titre-${mi}-${ci}-${si}" value="${_esc(sec.titre)}" placeholder="Titre de la section" style="${_cpInputStyle()};flex:1">
      <button onclick="cpDelSection(${mi},${ci},${si})" style="border:none;background:none;cursor:pointer;color:var(--c-danger);font-size:14px;padding:0 4px">✕</button>
    </div>
    <textarea id="cp-sec-texte-${mi}-${ci}-${si}" rows="4" placeholder="Contenu de la section : explication, définition, contexte réglementaire, retour d'expérience…" style="${_cpInputStyle(true)};margin-bottom:6px">${_esc(sec.texte)}</textarea>
    ${sec.img
      ? `<div style="position:relative;display:inline-block">
          <img src="${sec.img}" style="max-width:100%;max-height:200px;border-radius:6px;border:1px solid var(--c-border)">
          <button onclick="cpRemoveImg(${mi},${ci},${si})" style="position:absolute;top:4px;right:4px;border:none;background:rgba(0,0,0,.6);color:white;border-radius:50%;width:22px;height:22px;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center">✕</button>
         </div>`
      : `<button onclick="cpUploadImg(${mi},${ci},${si})" style="${_cpBtnStyle(color,'ghost')};font-size:11px">📷 Ajouter une image (max 500 ko)</button>`
    }
  </div>`;
}

/* ─── STYLES HELPERS ─────────────────────────────────── */
function _esc(s) { return (s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _cpInputStyle(textarea) {
  return 'width:100%;box-sizing:border-box;padding:8px 10px;border:1.5px solid var(--c-border);border-radius:8px;background:var(--c-bg);color:var(--c-text-1);font-size:13px;outline:none;' + (textarea ? 'resize:vertical;font-family:inherit;line-height:1.5' : '');
}
function _cpLabelStyle() {
  return 'display:block;font-size:11px;color:var(--c-text-3);font-weight:600;margin-bottom:4px;text-transform:uppercase;letter-spacing:.04em';
}
function _cpBtnStyle(color, variant) {
  if (variant === 'ghost') return 'border:1.5px dashed '+color+';background:transparent;color:'+color+';border-radius:8px;padding:6px 12px;cursor:pointer;font-size:12px;font-weight:600;width:100%';
  if (variant === 'xs') return 'border:none;background:'+color+'22;color:'+color+';border-radius:6px;padding:4px 10px;cursor:pointer;font-size:11px;font-weight:700;white-space:nowrap';
  return 'border:none;background:'+color+';color:white;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:12px;font-weight:600';
}

/* ─── POINTS D'ENTRÉE PUBLICS ──────────────────────────── */
function renderCoursPersoCreer() {
  _cpDraft = _cpNewFormation();
  _cpOpenMat = null;
  _cpRenderEditor();
}

function renderCoursPersoEditer(id) {
  var list = _cpLoad();
  var f = list.find(function(x){ return x.id === id; });
  if (!f) return;
  _cpDraft = JSON.parse(JSON.stringify(f));
  _cpOpenMat = null;
  _cpRenderEditor();
}
