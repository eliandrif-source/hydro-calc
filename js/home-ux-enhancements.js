/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — HOME UX ENHANCEMENTS
   Adds a safe "Reprendre" section with recent projects/calculations
   without rewriting the legacy home renderer.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  if (window.__HC_HOME_UX_LOADED__) return;
  window.__HC_HOME_UX_LOADED__ = true;

  function node(tag, css, text) {
    var el = document.createElement(tag);
    if (css) el.style.cssText = css;
    if (text !== undefined && text !== null) el.textContent = String(text);
    return el;
  }

  function safeDate(value) {
    var n = Number(value || 0);
    var d = new Date(n);
    if (!n || Number.isNaN(d.getTime())) return '';
    try { return d.toLocaleDateString('fr-FR', { day:'2-digit', month:'short' }); }
    catch (e) { return ''; }
  }

  function recentWork() {
    var projects = typeof window.getSavedProjects === 'function' ? (window.getSavedProjects() || []) : [];
    var calcs = typeof window.getSavedCalcs === 'function' ? (window.getSavedCalcs() || []) : [];
    var items = [];

    projects.forEach(function (project) {
      var projectCalcs = calcs.filter(function (calc) { return calc.projectId === project.id; });
      var lastCalc = projectCalcs.reduce(function (max, calc) { return Math.max(max, Number(calc.date || 0)); }, 0);
      items.push({
        type: 'project',
        id: project.id,
        title: project.name || 'Projet sans nom',
        icon: project.icon || '📁',
        subtitle: projectCalcs.length + ' calcul' + (projectCalcs.length > 1 ? 's' : ''),
        date: Math.max(Number(project.date || 0), lastCalc)
      });
    });

    calcs.filter(function (calc) { return !calc.projectId; }).slice(0, 6).forEach(function (calc) {
      items.push({
        type: 'calc',
        index: calcs.indexOf(calc),
        title: calc.module || 'Calcul HydroCalc',
        icon: '📊',
        subtitle: String(calc.valeur || '').replace(/\s+/g, ' ').trim().slice(0, 80),
        date: Number(calc.date || 0)
      });
    });

    return items.sort(function (a, b) { return b.date - a.date; }).slice(0, 3);
  }

  function workCard(item) {
    var btn = node('button', 'width:100%;display:flex;align-items:center;gap:10px;text-align:left;padding:11px 12px;border:1px solid var(--c-border);border-radius:var(--r-md);background:var(--c-surface);cursor:pointer;font-family:var(--f-body);color:var(--c-text)');
    btn.type = 'button';
    var icon = node('span', 'width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:var(--c-primary-l);font-size:18px;flex-shrink:0', item.icon);
    btn.appendChild(icon);
    var body = node('span', 'min-width:0;flex:1;display:block');
    body.appendChild(node('span', 'display:block;font-size:12px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis', item.title));
    if (item.subtitle) body.appendChild(node('span', 'display:block;font-size:10px;color:var(--c-text-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px', item.subtitle));
    btn.appendChild(body);
    var date = safeDate(item.date);
    if (date) btn.appendChild(node('span', 'font-size:9px;color:var(--c-text-4);white-space:nowrap', date));
    btn.appendChild(node('span', 'font-size:18px;color:var(--c-text-4)', '›'));

    btn.addEventListener('click', function () {
      if (item.type === 'project' && typeof window.openProject === 'function') window.openProject(item.id);
      else if (item.type === 'calc' && typeof window._relaunchCalc === 'function') window._relaunchCalc(item.index);
    });
    return btn;
  }

  function injectResume() {
    var main = document.getElementById('main-content');
    if (!main || !main.querySelector('.home-hero')) return;
    if (main.querySelector('[data-hc-home-resume]')) return;
    if (!window.AUTH || !window.AUTH.user) return;

    var items = recentWork();
    if (!items.length) return;

    var section = node('section', 'padding:var(--s-3) var(--s-4) 0');
    section.dataset.hcHomeResume = '1';
    var heading = node('div', 'display:flex;align-items:center;justify-content:space-between;margin-bottom:8px');
    heading.appendChild(node('div', 'font-size:13px;font-weight:800;color:var(--c-text)', 'Reprendre'));
    var all = node('button', 'border:none;background:none;color:var(--c-primary);font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body);padding:4px', 'Mes projets →');
    all.type = 'button';
    all.addEventListener('click', function () { if (typeof window.renderCalcHistory === 'function') window.renderCalcHistory(); });
    heading.appendChild(all);
    section.appendChild(heading);

    var list = node('div', 'display:flex;flex-direction:column;gap:7px');
    items.forEach(function (item) { list.appendChild(workCard(item)); });
    section.appendChild(list);

    var hero = main.querySelector('.home-hero');
    hero.insertAdjacentElement('afterend', section);
  }

  var legacyRenderHome = window.renderHome;
  if (typeof legacyRenderHome === 'function') {
    window.renderHome = function () {
      var result = legacyRenderHome.apply(this, arguments);
      injectResume();
      return result;
    };
  }

  injectResume();

  window.HydroCalcHomeUX = {
    recentWork: recentWork,
    injectResume: injectResume
  };
})();
