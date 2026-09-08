-- HydroCalc — évite les récursions RLS lors des contrôles administrateur.
-- Les politiques qui interrogent profiles depuis une politique profiles doivent
-- passer par un helper SECURITY DEFINER non exposé aux rôles anonymes.

create or replace function public.hc_is_admin(p_uid uuid default auth.uid())
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select p.is_admin from public.profiles p where p.id = p_uid), false);
$$;

revoke all on function public.hc_is_admin(uuid) from public, anon;
grant execute on function public.hc_is_admin(uuid) to authenticated;

-- Remplace uniquement les politiques connues qui se réinterrogent elles-mêmes.
-- Les noms sont détectés dans pg_policy afin de rester compatible avec la baseline.
do $$
declare r record;
begin
  for r in
    select pol.polname
    from pg_policy pol
    join pg_class c on c.oid = pol.polrelid
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname='public' and c.relname='profiles'
      and pg_get_expr(pol.polqual, pol.polrelid) ilike '%is_admin%'
  loop
    execute format('drop policy if exists %I on public.profiles', r.polname);
  end loop;
end $$;

-- Propriétaire : lecture de son profil. Admin : lecture de tous les profils.
drop policy if exists "profiles own or admin read" on public.profiles;
create policy "profiles own or admin read" on public.profiles
for select to authenticated
using (id = auth.uid() or public.hc_is_admin(auth.uid()));
