/* ═══════════════════════════════════════════════════
   CMS — Couche JS : lecture/écriture contenu administrable
   Sécurité : toutes les écritures passent par des RPCs SECURITY DEFINER
   XSS : escapeHtml() obligatoire avant toute injection innerHTML
═══════════════════════════════════════════════════ */
var CMS = (function() {
  var _cache = {};

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  async function load(keys, defaults) {
    defaults = defaults || {};
    var out = Object.assign({}, defaults);
    if (!SupaDB || !keys || !keys.length) return out;
    try {
      var res = await SupaDB.rpc('cms_get_content', { p_keys: keys });
      if (res.error || !res.data) return out;
      res.data.forEach(function(row) {
        _cache[row.key] = row.value;
        out[row.key] = row.value;
      });
    } catch(e) {}
    return out;
  }

  function get(key, fallback) {
    return (_cache[key] !== undefined) ? _cache[key] : (fallback !== undefined ? fallback : '');
  }

  async function upsert(key, value, type) {
    if (!SupaDB) throw new Error('Supabase non disponible');
    var res = await SupaDB.rpc('cms_upsert_content', {
      p_key: key,
      p_value: value,
      p_content_type: type || 'text'
    });
    if (res.error) throw res.error;
    _cache[key] = value;
    return res.data;
  }

  return { load: load, get: get, upsert: upsert, escapeHtml: escapeHtml };
})();
