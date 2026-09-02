import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const configuredOrigins = (Deno.env.get('ALLOWED_ORIGINS') || '')
  .split(',')
  .map((v) => v.trim())
  .filter(Boolean);

const allowedOrigins = new Set([
  'https://hydrocalc.fr',
  'https://www.hydrocalc.fr',
  'http://localhost:3000',
  'http://localhost:5173',
  ...configuredOrigins,
]);

function corsHeaders(req: Request) {
  const origin = req.headers.get('Origin');
  const allowedOrigin = origin && allowedOrigins.has(origin) ? origin : 'https://hydrocalc.fr';
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  };
}

Deno.serve(async (req) => {
  const headers = corsHeaders(req);
  if (req.method === 'OPTIONS') return new Response('ok', { headers });
  if (req.method !== 'POST') return new Response('Méthode non autorisée', { status: 405, headers });

  try {
    const origin = req.headers.get('Origin');
    if (origin && !allowedOrigins.has(origin)) throw new Error('Origine non autorisée');

    const authHeader = req.headers.get('Authorization') || '';
    if (!authHeader.startsWith('Bearer ')) throw new Error('Non authentifié');

    const body = await req.json();
    const targetUserId = typeof body?.userId === 'string' ? body.userId.trim() : '';
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(targetUserId)) {
      throw new Error('Utilisateur invalide');
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
      { auth: { autoRefreshToken: false, persistSession: false } },
    );

    const token = authHeader.slice('Bearer '.length);
    const { data: { user: caller }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !caller) throw new Error('Non authentifié');

    const { data: callerProfile, error: callerProfileError } = await supabase
      .from('profiles')
      .select('is_admin, plan')
      .eq('id', caller.id)
      .single();

    if (callerProfileError || !callerProfile?.is_admin || callerProfile.plan !== 'admin') {
      return new Response(JSON.stringify({ error: 'Administrateur requis' }), {
        status: 403,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    if (targetUserId === caller.id) {
      return new Response(JSON.stringify({ error: 'Le compte administrateur actif ne peut pas se supprimer ici' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const { data: targetProfile, error: targetError } = await supabase
      .from('profiles')
      .select('is_admin, plan')
      .eq('id', targetUserId)
      .single();

    if (targetError || !targetProfile) throw new Error('Compte introuvable');
    if (targetProfile.is_admin || targetProfile.plan === 'admin') {
      return new Response(JSON.stringify({ error: 'Un compte administrateur ne peut pas être supprimé depuis le Coffre' }), {
        status: 403,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const { error: deleteError } = await supabase.auth.admin.deleteUser(targetUserId);
    if (deleteError) throw deleteError;

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('delete-user:', err);
    return new Response(JSON.stringify({ error: (err as Error).message || 'Suppression impossible' }), {
      status: 400,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }
});
