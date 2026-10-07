-- ════════════════════════════════════════════════════════
-- HydroCalc — Remplacement de schémas de cours (admin)
-- À exécuter dans l'éditeur SQL de Supabase
-- ════════════════════════════════════════════════════════

-- 1. Table des remplacements d'images
CREATE TABLE IF NOT EXISTS course_image_overrides (
  chapter_key  TEXT PRIMARY KEY,
  image_url    TEXT NOT NULL,
  uploaded_by  UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Mise à jour automatique de updated_at
CREATE OR REPLACE FUNCTION _set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

DROP TRIGGER IF EXISTS trg_course_image_overrides_updated_at ON course_image_overrides;
CREATE TRIGGER trg_course_image_overrides_updated_at
  BEFORE UPDATE ON course_image_overrides
  FOR EACH ROW EXECUTE FUNCTION _set_updated_at();

-- 2. RLS
ALTER TABLE course_image_overrides ENABLE ROW LEVEL SECURITY;

-- Lecture publique (tout utilisateur connecté ou anonyme peut voir les schémas)
DROP POLICY IF EXISTS "course_images_public_read" ON course_image_overrides;
CREATE POLICY "course_images_public_read"
  ON course_image_overrides FOR SELECT
  USING (true);

-- Écriture réservée aux admins (validé côté backend via la table profiles)
DROP POLICY IF EXISTS "course_images_admin_write" ON course_image_overrides;
CREATE POLICY "course_images_admin_write"
  ON course_image_overrides FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
        AND (plan = 'admin' OR is_admin = true)
    )
  );

-- ════════════════════════════════════════════════════════
-- STORAGE : bucket "course-images"
--
-- À faire manuellement dans Supabase > Storage :
--   1. Créer un bucket nommé exactement :  course-images
--   2. Cocher "Public bucket" (les URL publiques doivent fonctionner)
--   3. Ajouter une politique Storage pour les uploads :
--
--   Nom          : Admin upload only
--   Allowed ops  : INSERT, UPDATE, DELETE
--   Target roles : authenticated
--   USING        :
--     EXISTS (
--       SELECT 1 FROM profiles
--       WHERE id = auth.uid()
--         AND (plan = 'admin' OR is_admin = true)
--     )
--
--   La lecture (SELECT / GET) peut rester "Public" (pas de restriction).
-- ════════════════════════════════════════════════════════
