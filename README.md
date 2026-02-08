# ACHETELA Marketplace

> **Votre application marketplace de confiance**

## 🚀 Démarrage rapide

### Conditions préalables
- Node.js 18+
- npm ou yarn

### Développement local

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Ouvrir dans le navigateur
# http://localhost:3000
```

### Build pour la production

```bash
# Construire le projet
npm run build

# Démarrer le serveur en production
npm start
```

## 📋 Structure du projet

```
├── app/
│   ├── layout.tsx          # Layout racine avec métadonnées
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── package.json            # Dépendances & scripts
├── tsconfig.json           # Configuration TypeScript
├── next.config.js          # Configuration Next.js
├── vercel.json             # Configuration de déploiement Vercel
└── .env.example            # Template des variables d'environnement
```

## 🌐 Déploiement

Ce projet est automatiquement déployé sur **Vercel** à chaque push sur la branche `main`.

### Étapes de configuration

#### Option 1 : Intégration GitHub via Vercel (⭐ Recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Importez ce dépôt
4. Vercel détecte automatiquement la configuration Next.js
5. Définissez les variables d'environnement si nécessaire (voir `.env.example`)
6. Cliquez sur "Deploy"

#### Option 2 : Déploiement via GitHub Actions

1. Générez un token Vercel :
   - Vercel Settings → Tokens → Create Token
   
2. Copiez les IDs du projet :
   - `VERCEL_ORG_ID` et `VERCEL_PROJECT_ID` depuis `.vercel/project.json` après un `vercel link`

3. Ajoutez les secrets GitHub (Settings → Secrets and variables → Actions):
   ```
   VERCEL_TOKEN=<votre_token>
   VERCEL_ORG_ID=<votre_org_id>
   VERCEL_PROJECT_ID=<votre_project_id>
   ```

4. À chaque push sur `main`, le workflow GitHub Actions déclenche le déploiement

### Voir les déploiements

- **Production** : Automatique à chaque push sur main
- **Preview** : Sur les pull requests
- **Logs** : Onglet GitHub Actions pour les logs de build

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarrer le serveur dev (hot reload) |
| `npm run build` | Build pour la production |
| `npm start` | Lancer le serveur en production localement |
| `npm run lint` | Vérifier le code avec ESLint |
| `npm run export` | Exporter en site statique (si nécessaire) |

## 🔧 Fichiers de configuration

- **vercel.json** : Paramètres de build et déploiement Vercel
- **next.config.js** : Configuration du framework Next.js
- **tsconfig.json** : Options du compilateur TypeScript
- **.eslintrc.json** : Règles ESLint pour la qualité du code
- **.gitignore** : Fichiers exclus de git

## 🛠 Technologies utilisées

- **Framework** : [Next.js 14](https://nextjs.org)
- **Language** : [TypeScript](https://www.typescriptlang.org)
- **Hosting** : [Vercel](https://vercel.com)
- **CI/CD** : GitHub Actions
- **Linting** : ESLint

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation React](https://react.dev)

## 💡 Conseils pour le développement

- Utilisez TypeScript pour la sécurité des types
- Suivez les [bonnes pratiques Next.js](https://nextjs.org/learn)
- Gardez les composants dans le répertoire `app/`
- Exploitez les fonctionnalités intégrées de Next.js (optimisation d'images, chargement de polices, etc.)

## 📞 Support

Pour les problèmes ou questions :
1. Consultez la [documentation Next.js](https://nextjs.org/docs)
2. Consultez le [support Vercel](https://vercel.com/support)
3. Ouvrez une issue sur GitHub

---

**Bon codage! 🎉**
