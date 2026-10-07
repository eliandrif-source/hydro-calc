/* ══════════════════════════════════════════════════════════════════
   SUPABASE CLIENT — HydroCalc
   Clé anon (publique) — safe côté client.
   Pour brancher : charger le CDN Supabase avant ce script.
   ══════════════════════════════════════════════════════════════════ */

var SUPABASE_URL  = 'https://vbdsqvmgtwsjxckpcosi.supabase.co';
var SUPABASE_ANON = 'sb_publishable_Tnm8fK_rYqF9JI8FlJYdXw_puupQ9u5';

var SupaDB = (typeof supabase !== 'undefined' && supabase.createClient)
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON)
  : null;
