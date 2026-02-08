# ACHETELA

## Déploiement

Ce dépôt inclut un workflow GitHub Actions pour déployer automatiquement sur Vercel lors d'un push sur la branche `main`.

- Configurez le secret `VERCEL_TOKEN` dans les Secrets du dépôt (Settings → Secrets).
- Le workflow exécute `npm ci`, `npm run build` (si présents) puis `npx vercel --prod`.

Si vous préférez utiliser l'intégration Git de Vercel (recommandé), connectez simplement le dépôt dans l'interface Vercel et suivez les instructions.
