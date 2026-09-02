/* ═══════════════════════════════════════════════════════════════
   HYDROCALC — XSS SECURITY BRIDGE
   Protects legacy innerHTML renderers from user-controlled values.
   This bridge is loaded after auth.js and overrides high-risk render paths.
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  if (window.__HC_XSS_SECURITY_LOADED__) return;
  window.__HC_XSS_SECURITY_LOADED__ = true;

  function escapeHTML(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function safeText(value, maxLength) {
    var text = String(value == null ? '' : value)
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
    if (maxLength && text.length > maxLength) text = text.slice(0, maxLength);
    return text;
  }

  function safeHrefMail(email) {
    var value = safeText(email, 254).trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'mailto:' + encodeURIComponent(value).replace(/%40/g, '@') : '#';
  }

  window.hcEscapeHTML = escapeHTML;
  window.hcSafeText = safeText;

  /* ── Profil utilisateur ────────────────────────────────────────
     Legacy buildProfile() writes name/email/profile into innerHTML. Execute it
     with an escaped view model, then immediately restore the real model so
     application logic and textContent consumers keep the original values. */
  if (typeof window.buildProfile === 'function') {
    var legacyBuildProfile = window.buildProfile;
    window.buildProfile = function () {
      if (!window.AUTH || !window.AUTH.user) return legacyBuildProfile.apply(this, arguments);

      var realUser = window.AUTH.user;
      var safeUser = Object.assign({}, realUser, {
        name: escapeHTML(safeText(realUser.name || realUser.email || '', 120)),
        email: escapeHTML(safeText(realUser.email || '', 254)),
        profile: escapeHTML(safeText(realUser.profile || '', 80))
      });

      window.AUTH.user = safeUser;
      try {
        return legacyBuildProfile.apply(this, arguments);
      } finally {
        window.AUTH.user = realUser;
      }
    };
  }

  /* ── Suppression d'un compte dans le Coffre ───────────────────
     Build the confirmation modal with DOM APIs so userName can never be parsed
     as markup or injected into an inline onclick attribute. */
  window.coffreDeleteUser = function (userId, userName) {
    var existing = document.getElementById('coffre-delete-modal');
    if (existing) existing.remove();

    userId = safeText(userId, 80);
    userName = safeText(userName, 160);

    var overlay = document.createElement('div');
    overlay.id = 'coffre-delete-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';

    var card = document.createElement('div');
    card.style.cssText = 'background:var(--c-surface);border-radius:var(--r-lg);padding:28px 24px;max-width:360px;width:100%;box-shadow:0 8px 32px rgba(0,0,0,.25)';

    var icon = document.createElement('div');
    icon.style.cssText = 'font-size:22px;text-align:center;margin-bottom:12px';
    icon.textContent = '🗑️';

    var title = document.createElement('div');
    title.style.cssText = 'font-size:15px;font-weight:800;color:var(--c-text);text-align:center;margin-bottom:8px';
    title.textContent = 'Supprimer ce compte ?';

    var message = document.createElement('div');
    message.style.cssText = 'font-size:13px;color:var(--c-text-3);text-align:center;margin-bottom:20px';
    message.appendChild(document.createTextNode('Le compte de '));
    var strong = document.createElement('strong');
    strong.style.color = 'var(--c-text)';
    strong.textContent = userName;
    message.appendChild(strong);
    message.appendChild(document.createTextNode(' sera supprimé définitivement. Cette action est irréversible.'));

    var actions = document.createElement('div');
    actions.style.cssText = 'display:flex;gap:10px';

    var cancel = document.createElement('button');
    cancel.type = 'button';
    cancel.style.cssText = 'flex:1;padding:10px;border-radius:var(--r-md);border:1.5px solid var(--c-border);background:transparent;color:var(--c-text);font-family:var(--f-body);font-size:13px;font-weight:600;cursor:pointer';
    cancel.textContent = 'Annuler';
    cancel.addEventListener('click', function () { overlay.remove(); });

    var confirmBtn = document.createElement('button');
    confirmBtn.type = 'button';
    confirmBtn.id = 'coffre-delete-confirm-btn';
    confirmBtn.style.cssText = 'flex:1;padding:10px;border-radius:var(--r-md);border:none;background:var(--c-danger,#A82018);color:#fff;font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer';
    confirmBtn.textContent = 'Supprimer';
    confirmBtn.addEventListener('click', function () {
      if (typeof window.coffreDeleteUserConfirm === 'function') {
        window.coffreDeleteUserConfirm(userId, userName);
      }
    });

    actions.appendChild(cancel);
    actions.appendChild(confirmBtn);
    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(message);
    card.appendChild(actions);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) overlay.remove();
    });
  };

  /* ── Project creation / rename input normalization ─────────────
     These values are still rendered by legacy templates in several screens.
     Store clean plain text and reject control characters. This is defense in
     depth; output escaping remains the preferred long-term renderer strategy. */
  if (typeof window.createProject === 'function') {
    var legacyCreateProject = window.createProject;
    window.createProject = function () {
      var field = document.getElementById('np-name');
      if (field) field.value = safeText(field.value, 60).trim();
      return legacyCreateProject.apply(this, arguments);
    };
  }

  if (typeof window.renameProjectPrompt === 'function') {
    var legacyRenameProjectPrompt = window.renameProjectPrompt;
    window.renameProjectPrompt = function (id) {
      var originalPrompt = window.prompt;
      window.prompt = function (message, defaultValue) {
        var result = originalPrompt.call(window, message, defaultValue);
        return result == null ? result : safeText(result, 60).trim();
      };
      try {
        return legacyRenameProjectPrompt.call(this, id);
      } finally {
        window.prompt = originalPrompt;
      }
    };
  }

  /* Safe helper for future mail links rendered with DOM APIs. */
  window.hcSafeMailHref = safeHrefMail;
})();
