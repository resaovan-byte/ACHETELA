# 🚀 Guide de déploiement complet - ACHETELA

## Résumé

Ce guide vous aidera à configurer et déployer votre site ACHETELA sur Vercel en quelques minutes.

---

## 📋 Étape 1 : Vérifications préalables

### ✅ Checklist

- [ ] Code disponible sur GitHub (resaovan-byte/ACHETELA)
- [ ] Branche `main` contient le code à déployer
- [ ] Fichiers `package.json` et `next.config.js` présents
- [ ] Node.js 18+ installé localement (pour les tests)

**Vérification locally (optionnel) :**
```bash
node --version  # Devrait afficher v18+
npm install
npm run build
npm start  # Test local sur http://localhost:3000
```

---

## 🌐 Étape 2 : Déployer sur Vercel

### Option A : Intégration Git (Recommandée ⭐)

Cette méthode est la plus simple et la plus efficace.

#### Setup :

1. **Créer un compte Vercel** (si nécessaire)
   - Allez sur https://vercel.com
   - Cliquez "Sign Up"
   - Connectez-vous avec GitHub

2. **Importer le dépôt**
   - Sur le dashboard Vercel, cliquez "New Project"
   - Sélectionnez "Import Git Repository"
   - Recherchez et sélectionnez `resaovan-byte/ACHETELA`

3. **Configuration du projet**
   - **Framework Preset** : Next.js (auto-détecté)
   - **Root Directory** : ./
   - **Build Command** : `npm run build`
   - **Output Directory** : `.next` (auto-détecté)

4. **Variables d'environnement** (si nécessaire)
   - Ajoutez depuis `.env.example` si applicable
   - Format : `NEXT_PUBLIC_API_URL=https://api.example.com`

5. **Cliquer "Deploy"**
   - Vercel construit et déploie automatiquement
   - Vous recevez une URL de production

#### Résultat :
- ✅ Site live à l'URL Vercel
- ✅ Déploiements automatiques à chaque push sur `main`
- ✅ Prévisualisations automatiques pour les PRs

**Aucune configuration GitHub Actions n'est nécessaire avec cette approche.**

---

### Option B : Déploiement via GitHub Actions

Si vous préférez contrôler le déploiement via GitHub Actions :

#### Setup :

1. **Générer un token Vercel**
   - Vercel Settings → Tokens
   - Cliquez "Create Token"
   - Copiez le token

2. **Récupérer les IDs du projet**
   ```bash
   # Localement, dans le repo ACHETELA
   npx vercel link
   # Répondez aux questions
   
   # Cela crée .vercel/project.json avec:
   # - orgId
   # - projectId
   ```

3. **Ajouter les secrets GitHub**
   - Allez sur GitHub : Settings → Secrets and variables → Actions
   - Ajouter 3 secrets :
     - `VERCEL_TOKEN` = votre token Vercel
     - `VERCEL_ORG_ID` = orgId du `.vercel/project.json`
     - `VERCEL_PROJECT_ID` = projectId du `.vercel/project.json`

4. **Le workflow est déjà configuré** 
   - Le fichier `.github/workflows/deploy-vercel.yml` s'exécute automatiquement à chaque push

#### Résultat :
- ✅ Déploiements contrôlés par GitHub Actions
- ✅ Logs de build visibles dans l'onglet "Actions"
- ✅ Notifications d'état intégrées

---

## ✅ Vérification du déploiement

### Checklist de validation

1. **Accédez à l'URL**
   ```
   https://achetela.vercel.app
   (ou votre domaine personnalisé)
   ```

2. **Vérifiez les performances**
   - Page se charge < 2 secondes
   - Pas d'erreurs dans la console du navigateur

3. **Testez les fonctionnalités**
   - Cliquez sur les liens
   - Vérifiez le CSS est chargé
   - Testez la responsivité (mobile/tablet/desktop)

4. **Vérifiez les logs**
   ```
   Vercel Dashboard → Deployments → Logs
   GitHub Actions → Actions → Dernier run
   ```

---

## 🔄 Mises à jour et maintenance

### Pour mettre le site à jour :

1. **Effectuez vos changements localement**
   ```bash
   git checkout main
   git pull origin main
   # Éditez vos fichiers
   npm run build  # Tester localement
   ```

2. **Committez et poussez**
   ```bash
   git add .
   git commit -m "feat: update homepage"
   git push origin main
   ```

3. **C'est tout!** 🎉
   - Vercel voit le push
   - Déploiement automatique en ~1 minute
   - Votre site est à jour

### Environnements

| Branche | Environnement | URL | Auto-déploie |
|---------|---------------|-----|-------------|
| `main` | Production | vercel.app | ✅ Oui |
| `pull/*` | Preview | Pull Request | ✅ Oui |

---

## 🆘 Dépannage

### Le déploiement échoue

**Symptôme** : "Build failed" sur Vercel

**Solutions** :
```bash
# 1. Vérifiez localement
npm ci    # Installation clean
npm run lint  # Vérifier les erreurs
npm run build  # Builder

# 2. Consultez les logs
# Vercel → Deployments → [Failed] → Logs
# Cherchez l'erreur en rouge

# 3. Problèmes courants
# - Erreur TypeScript : npm run build montre l'erreur
# - Dépendances manquantes : npm install + git push
# - Build timeout : augmentez le timeout dans vercel.json
```

### Le site est down après déploiement

**Symptôme** : "504 Gateway Timeout" ou "503 Service Unavailable"

**Solutions** :
```bash
# 1. Attendez 2-3 minutes (le déploiement se stabilise)

# 2. Vérifiez l'état sur Vercel
# Dashboard → Deployments → Status

# 3. Rollback vers la version précédente
# Deployments → [Précédent] → Promote to Production

# 4. Vérifiez les resources
# Project Settings → Usage
```

### Les variables d'environnement ne sont pas chargées

**Symptôme** : `undefined` ou erreur de connexion à l'API

**Solutions** :
```bash
# 1. Vérifiez que les variables existent
# Vercel → Settings → Environment Variables

# 2. Pour les variables publiques, utilisez le préfixe
# NEXT_PUBLIC_API_URL=...  ✅ Correct
# SECRET_KEY=...  ❌ Pas visible au client

# 3. Redéployez après ajout de variables
# Deployments → [Dernier] → Redeploy
```

---

## 🎯 Prochaines étapes (Optionnel)

### Ajouter un domaine personnalisé

1. Vercel Dashboard → Settings → Domains
2. Entrez votre domaine (ex: achetela.com)
3. Mettez à jour les DNS records chez votre registraire

### Ajouter des secrets d'API

1. Créez un fichier `.env.local` localement (non versionné)
2. Ajoutez les secrets sur Vercel → Settings → Environment Variables
3. Redéployez pour les charger

### Monitorer les performances

- **Vercel Analytics** : Tableau de bord des metrics
- **Web Vitals** : Accessible via Vercel ou Google Search Console
- **Status Page** : Vérifier l'uptime

---

## 📞 Support

- **Documentation officielle** : https://vercel.com/docs
- **GitHub Issues** : Ouvrez une issue sur ACHETELA
- **Discord Vercel** : Community support
- **Vercel Status** : https://vercel-status.com

---

**Voilà! Votre site est maintenant en production! 🚀**

Pour toute question ou mise à jour, consultez le README.md ou contactez l'équipe.