-- Table de stockage persistant des données utilisateur (calculs, formules, projets, réglementations)
-- Remplace localStorage : chaque ligne = un "tiroir" (store_key) pour un utilisateur

CREATE TABLE IF NOT EXISTS user_store (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  store_key   text NOT NULL,
  data        jsonb NOT NULL DEFAULT '[]',
  updated_at  timestamptz DEFAULT now(),
  UNIQUE(user_id, store_key)
);

ALTER TABLE user_store ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_store_self" ON user_store
  FOR ALL
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Index pour les lectures par utilisateur
CREATE INDEX IF NOT EXISTS idx_user_store_uid ON user_store(user_id);
