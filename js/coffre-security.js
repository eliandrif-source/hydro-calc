/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — COFFRE ADMIN SAFE RENDERER
   Replaces the legacy admin dashboard renderer that interpolated profile
   names/emails into innerHTML and inline onclick attributes.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  if (window.__HC_COFFRE_SECURITY_LOADED__) return;
  window.__HC_COFFRE_SECURITY_LOADED__ = true;

  function node(tag, css, text) {
    var el = document.createElement(tag);
    if (css) el.style.cssText = css;
    if (text !== undefined && text !== null) el.textContent = String(text);
    return el;
  }

  function toast(message) {
    if (typeof window.authToast === 'function') window.authToast(message);
  }

  function isServerAdmin() {
    return !!(window.AUTH && window.AUTH.user && window.AUTH.user.isAdmin === true && window.AUTH.user.plan === 'admin');
  }

  function planMeta(plan) {
    return {
      free:  { label: 'Free', color: '#6b7280' },
      pro:   { label: 'Pro ⭐', color: '#d97706' },
      etab:  { label: 'Établ. 🏫', color: '#2563eb' },
      admin: { label: 'Admin 🔑', color: '#7c3aed' }
    }[plan] || { label: String(plan || '—'), color: '#6b7280' };
  }

  function addActionButton(parent, label, title, borderColor, active, handler) {
    var btn = node('button');
    btn.type = 'button';
    btn.title = title || '';
    btn.textContent = label;
    btn.style.cssText = 'padding:3px 8px;border-radius:6px;border:1.5px solid ' + borderColor + ';background:' + (active ? borderColor : 'transparent') + ';color:' + (active ? '#fff' : borderColor) + ';font-size:10px;font-weight:700;cursor:pointer;font-family:var(--f-body);margin-right:4px';
    btn.disabled = !!active;
    btn.addEventListener('click', handler);
    parent.appendChild(btn);
  }

  function renderDirectory(container, profiles) {
    var heading = node('div', 'font-weight:700;font-size:14px;margin:22px 0 10px;display:flex;align-items:center;gap:8px');
    heading.appendChild(document.createTextNode('📋 Annuaire des inscrits'));
    var count = node('span', 'font-size:12px;font-weight:600;padding:2px 9px;border-radius:20px;background:var(--c-primary);color:#fff', profiles.length);
    heading.appendChild(count);
    container.appendChild(heading);

    var toolbar = node('div', 'display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap');
    var search = node('input', 'flex:1;min-width:180px;padding:8px 12px;border-radius:var(--r-md);border:1px solid var(--c-border);background:var(--c-surface);color:var(--c-text);font-size:12px;font-family:var(--f-body)');
    search.id = 'coffre-search';
    search.placeholder = '🔍 Rechercher par nom ou email…';
    search.addEventListener('input', function () {
      var q = search.value.toLowerCase().trim();
      container.querySelectorAll('.coffre-user-row').forEach(function (row) {
        var match = !q || (row.dataset.name || '').indexOf(q) !== -1 || (row.dataset.email || '').indexOf(q) !== -1;
        row.style.display = match ? '' : 'none';
      });
    });
    toolbar.appendChild(search);

    var copyAll = node('button', 'padding:7px 14px;border-radius:var(--r-md);border:1px solid var(--c-border);background:var(--c-surface);color:var(--c-text);font-size:12px;font-weight:600;cursor:pointer;font-family:var(--f-body);white-space:nowrap', '📧 Copier tous les emails');
    copyAll.type = 'button';
    copyAll.addEventListener('click', function () {
      if (typeof window.coffreCopyAllEmails === 'function') window.coffreCopyAllEmails();
    });
    toolbar.appendChild(copyAll);

    var csv = node('button', copyAll.style.cssText, '⬇️ Exporter CSV');
    csv.type = 'button';
    csv.addEventListener('click', function () {
      if (typeof window.coffreExportCSV === 'function') window.coffreExportCSV();
    });
    toolbar.appendChild(csv);
    container.appendChild(toolbar);

    var wrap = node('div', 'overflow-x:auto;border-radius:var(--r-lg);border:1px solid var(--c-border)');
    var table = node('table', 'width:100%;border-collapse:collapse;font-size:12px');
    table.id = 'coffre-user-table';
    var thead = document.createElement('thead');
    var hr = node('tr', 'background:var(--c-surface-2,var(--c-surface));border-bottom:2px solid var(--c-border)');
    ['Nom', 'Email', 'Plan', 'Inscrit le', 'Actions'].forEach(function (label) {
      hr.appendChild(node('th', 'padding:9px 12px;text-align:left;font-weight:700;color:var(--c-text-2)', label));
    });
    thead.appendChild(hr);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    profiles.forEach(function (profile, index) {
      var row = node('tr', (index % 2 === 0 ? 'background:var(--c-surface);' : 'background:var(--c-bg,var(--c-surface));') + 'border-bottom:1px solid var(--c-border)');
      row.className = 'coffre-user-row';
      row.dataset.name = String(profile.name || '').toLowerCase();
      row.dataset.email = String(profile.email || '').toLowerCase();

      var nameCell = node('td', 'padding:9px 12px;font-weight:600;color:var(--c-text)', profile.name || '—');
      row.appendChild(nameCell);

      var emailCell = node('td', 'padding:9px 12px');
      var mail = node('a', 'color:var(--c-primary);text-decoration:none;font-family:monospace;font-size:11px', profile.email || '—');
      mail.href = typeof window.hcSafeMailHref === 'function' ? window.hcSafeMailHref(profile.email || '') : '#';
      emailCell.appendChild(mail);
      row.appendChild(emailCell);

      var pm = planMeta(profile.plan);
      var planCell = node('td', 'padding:9px 12px');
      var badge = node('span', 'font-size:11px;font-weight:700;padding:2px 9px;border-radius:20px;color:' + pm.color, pm.label);
      badge.style.background = pm.color + '22';
      planCell.appendChild(badge);
      row.appendChild(planCell);

      var joined = profile.joined_at ? new Date(profile.joined_at).toLocaleDateString('fr-FR') : '—';
      row.appendChild(node('td', 'padding:9px 12px;color:var(--c-text-3)', joined));

      var actions = node('td', 'padding:9px 12px;white-space:nowrap');
      var copy = node('button', 'padding:3px 8px;border-radius:6px;border:1px solid var(--c-border);background:transparent;color:var(--c-text-3);font-size:11px;cursor:pointer;font-family:var(--f-body);margin-right:4px', '📋');
      copy.type = 'button';
      copy.title = 'Copier l\'email';
      copy.addEventListener('click', function () {
        if (typeof window.coffreCopyEmail === 'function') window.coffreCopyEmail(profile.email || '');
      });
      actions.appendChild(copy);

      if (profile.plan !== 'admin') {
        addActionButton(actions, 'Pro', 'Passer Pro', '#d97706', profile.plan === 'pro', function () {
          if (typeof window.coffrePlanChange === 'function') window.coffrePlanChange(profile.id, 'pro');
        });
        addActionButton(actions, 'Établ.', 'Passer Établissement', '#2563eb', profile.plan === 'etab', function () {
          if (typeof window.coffrePlanChange === 'function') window.coffrePlanChange(profile.id, 'etab');
        });
        addActionButton(actions, 'Free', 'Repasser Free', '#6b7280', profile.plan === 'free', function () {
          if (typeof window.coffrePlanChange === 'function') window.coffrePlanChange(profile.id, 'free');
        });
        addActionButton(actions, '🗑️', 'Supprimer ce compte', 'var(--c-danger,#A82018)', false, function () {
          if (typeof window.coffreDeleteUser === 'function') window.coffreDeleteUser(profile.id, profile.name || profile.email || 'Utilisateur');
        });
      }
      row.appendChild(actions);
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrap.appendChild(table);
    container.appendChild(wrap);
  }

  window._renderCoffreAnnuaire = function () {
    var table = document.getElementById('coffre-user-table');
    if (!table || !table.parentNode || !table.parentNode.parentNode) return;
    var parent = table.parentNode.parentNode;
    var marker = parent.querySelector('[data-hc-safe-directory]');
    if (marker) marker.remove();
    var safe = node('div');
    safe.dataset.hcSafeDirectory = '1';
    renderDirectory(safe, window._coffreProfiles || []);
    table.parentNode.replaceWith(safe);
  };

  window.buildCoffre = async function () {
    var root = document.getElementById('coffre-content');
    if (!root) return;
    root.replaceChildren(node('div', 'text-align:center;padding:40px;color:var(--c-text-3)', 'Chargement…'));

    if (!window.SupaDB) {
      root.replaceChildren(node('div', 'padding:24px;color:var(--c-text-3)', 'Supabase non connecté.'));
      return;
    }
    if (!isServerAdmin()) {
      root.replaceChildren(node('div', 'padding:24px;color:var(--c-danger)', 'Accès administrateur requis.'));
      return;
    }

    try {
      var results = await Promise.all([
        window.SupaDB.from('profiles').select('id,email,name,plan,joined_at').order('joined_at', { ascending: false }),
        window.SupaDB.from('payments').select('amount_cents,currency,status,created_at').order('created_at', { ascending: false }).limit(100),
        window.SupaDB.from('subscriptions').select('plan,status').eq('status', 'active'),
        window.SupaDB.from('access_codes').select('code,used_by,used_at').order('code')
      ]);

      results.forEach(function (r) { if (r.error) throw r.error; });
      var profiles = results[0].data || [];
      var payments = results[1].data || [];
      var activeSubs = results[2].data || [];
      var codes = results[3].data || [];
      window._coffreProfiles = profiles;
      window._coffreSupaCodes = {};
      codes.forEach(function (c) { window._coffreSupaCodes[c.code] = c; });

      var content = node('div', 'padding:0 var(--s-4) var(--s-6)');
      var totalRev = payments.filter(function (p) { return p.status === 'succeeded'; })
        .reduce(function (sum, p) { return sum + Number(p.amount_cents || 0); }, 0);
      var values = [
        ['💰', 'Revenu total', (totalRev / 100).toFixed(2) + ' €'],
        ['✅', 'Abonnés actifs', activeSubs.length],
        ['⭐', 'Comptes Pro', profiles.filter(function (p) { return p.plan === 'pro'; }).length],
        ['🏫', 'Comptes Établ.', profiles.filter(function (p) { return p.plan === 'etab'; }).length],
        ['🆓', 'Comptes Free', profiles.filter(function (p) { return p.plan === 'free'; }).length],
        ['👤', 'Total inscrits', profiles.length]
      ];
      var grid = node('div', 'display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px');
      values.forEach(function (kpi) {
        var card = node('div', 'background:var(--c-surface);border-radius:var(--r-lg);padding:14px 16px;border:1px solid var(--c-border)');
        card.appendChild(node('div', 'font-size:20px;margin-bottom:4px', kpi[0]));
        card.appendChild(node('div', 'font-size:22px;font-weight:800;color:var(--c-text)', kpi[2]));
        card.appendChild(node('div', 'font-size:11px;color:var(--c-text-3);margin-top:2px', kpi[1]));
        grid.appendChild(card);
      });
      content.appendChild(grid);

      content.appendChild(node('div', 'font-weight:700;font-size:14px;margin-bottom:10px', 'Derniers paiements'));
      if (!payments.length) {
        content.appendChild(node('div', 'color:var(--c-text-3);font-size:13px', 'Aucun paiement enregistré.'));
      } else {
        var paymentsList = node('div', 'display:flex;flex-direction:column;gap:8px');
        payments.slice(0, 15).forEach(function (payment) {
          var row = node('div', 'display:flex;justify-content:space-between;align-items:center;background:var(--c-surface);border-radius:var(--r-md);padding:10px 14px;border:1px solid var(--c-border)');
          var left = document.createElement('div');
          left.appendChild(node('div', 'font-size:13px;font-weight:600', (Number(payment.amount_cents || 0) / 100).toFixed(2) + ' ' + String(payment.currency || 'eur').toUpperCase()));
          left.appendChild(node('div', 'font-size:11px;color:var(--c-text-3)', payment.created_at ? new Date(payment.created_at).toLocaleDateString('fr-FR') : '—'));
          row.appendChild(left);
          var ok = payment.status === 'succeeded';
          row.appendChild(node('div', 'font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;background:' + (ok ? '#d1fae5' : '#fee2e2') + ';color:' + (ok ? '#065f46' : '#991b1b'), ok ? 'OK' : 'Échec'));
          paymentsList.appendChild(row);
        });
        content.appendChild(paymentsList);
      }

      renderDirectory(content, profiles);
      root.replaceChildren(content);
    } catch (error) {
      console.error('HydroCalc coffre render error:', error);
      root.replaceChildren(node('div', 'padding:24px;color:var(--c-text-3)', 'Impossible de charger le Coffre Admin.'));
      toast('Erreur lors du chargement du Coffre Admin');
    }
  };
})();
