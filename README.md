# Albatros.studio (carte de visite)

Site statique minimal pour présence web officielle.

## Contenu
- `index.html` : page publique
- `vercel.json` : redirection `www.albatros.studio` -> `albatros.studio`
- `docs/brainstorms/...` : note de cadrage

## Prévisualisation locale
Ouvrir directement `index.html` dans un navigateur.

## Déploiement Vercel (UI)
1. Pousser ce dossier sur GitHub.
2. Importer le repo dans Vercel.
3. Ajouter les domaines `albatros.studio` et `www.albatros.studio`.
4. Vérifier que `www` redirige vers le domaine racine.

## Email temporaire sans Google Workspace
Utiliser ImprovMX et créer l'alias:
- `contact@albatros.studio` -> `robinkliphuis@gmail.com`

DNS à ajouter:
- `MX` `@` -> `mx1.improvmx.com` priorité `10`
- `MX` `@` -> `mx2.improvmx.com` priorité `20`
- `TXT` `@` -> `v=spf1 include:spf.improvmx.com ~all`
