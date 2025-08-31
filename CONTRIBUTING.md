# 🤝 Guide de contribution

Merci de votre intérêt pour contribuer à **CM Phone Lookup** ! 🎉

Ce document vous guidera à travers le processus de contribution pour améliorer cette librairie de détection d'opérateurs télécoms camerounais.

## 📋 Table des matières

- [Code de conduite](#code-de-conduite)
- [Comment puis-je contribuer ?](#comment-puis-je-contribuer)
- [Guide de développement](#guide-de-développement)
- [Processus de contribution](#processus-de-contribution)
- [Standards de code](#standards-de-code)
- [Tests](#tests)
- [Questions ou problèmes ?](#questions-ou-problèmes)

## 🚀 Code de conduite

Ce projet et tous ses participants sont régis par notre [Code de Conduite](CODE_OF_CONDUCT.md). En participant, vous acceptez de respecter ses termes.

## 💡 Comment puis-je contribuer ?

### 🐛 Signaler des bugs

- Utilisez le template d'issue "Bug Report"
- Décrivez le problème de manière claire et détaillée
- Incluez des étapes pour reproduire le bug
- Ajoutez des captures d'écran si applicable

### ✨ Proposer des fonctionnalités

- Utilisez le template d'issue "Feature Request"
- Expliquez clairement le besoin et l'utilisation
- Décrivez l'impact sur les utilisateurs existants
- Proposez une approche d'implémentation si possible

### 📚 Améliorer la documentation

- Corriger des erreurs ou imprécisions
- Ajouter des exemples d'utilisation
- Traduire en d'autres langues
- Améliorer la lisibilité

### 🔧 Améliorer le code

- Optimiser les performances
- Améliorer la gestion d'erreurs
- Ajouter de nouveaux tests
- Refactoriser le code existant

## 🛠️ Guide de développement

### Prérequis

- Node.js >= 14.0.0
- npm >= 6.0.0
- Git

### Installation

```bash
# Cloner le repository
git clone https://github.com/williamtessa27/cm-phone-lookup.git
cd cm-phone-lookup

# Installer les dépendances
npm install

# Construire le projet
npm run build

# Lancer les tests
npm test
```

### Scripts disponibles

```bash
npm run build      # Construire le projet
npm run test       # Lancer les tests
npm run dev        # Mode développement
npm run clean      # Nettoyer le dossier dist
npm run watch      # Surveillance des changements
npm run lint       # Vérifier le code (si configuré)
npm run format     # Formater le code (si configuré)
```

## 🔄 Processus de contribution

### 1. Fork et clone

1. Fork le repository sur GitHub
2. Clone votre fork localement
3. Ajoutez le repository original comme "upstream"

```bash
git remote add upstream https://github.com/williamtessa27/cm-phone-lookup.git
```

### 2. Créer une branche

Créez une branche pour votre contribution :

```bash
git checkout -b feature/nom-de-la-fonctionnalite
# ou
git checkout -b fix/nom-du-bug
```

### 3. Développer

- Écrivez votre code
- Ajoutez des tests si applicable
- Mettez à jour la documentation
- Respectez les standards de code

### 4. Tester

```bash
npm run build
npm test
```

### 5. Commiter

```bash
git add .
git commit -m "feat: ajouter une nouvelle fonctionnalité

- Description détaillée des changements
- Impact sur les utilisateurs
- Tests ajoutés"
```

### 6. Pousser et créer une Pull Request

```bash
git push origin feature/nom-de-la-fonctionnalite
```

Puis créez une Pull Request sur GitHub avec :
- Description claire des changements
- Référence aux issues concernées
- Captures d'écran si applicable

## 📏 Standards de code

### TypeScript

- Utilisez TypeScript strict
- Ajoutez des types pour toutes les fonctions
- Documentez avec JSDoc
- Respectez la configuration ESLint/Prettier

### Nommage

- **Variables** : camelCase
- **Fonctions** : camelCase
- **Types/Interfaces** : PascalCase
- **Constantes** : UPPER_SNAKE_CASE
- **Fichiers** : kebab-case

### Structure des commits

Utilisez le format [Conventional Commits](https://www.conventionalcommits.org/) :

```
type(scope): description

[body]

[footer]
```

Types :
- `feat` : nouvelle fonctionnalité
- `fix` : correction de bug
- `docs` : documentation
- `style` : formatage
- `refactor` : refactorisation
- `test` : tests
- `chore` : maintenance

### Exemples

```bash
feat(core): ajouter la détection d'opérateur NEXTTEL

- Ajout du type NEXTTEL dans l'interface Operator
- Mise à jour des préfixes pour inclure "66"
- Tests unitaires pour la nouvelle fonctionnalité

Closes #123
```

## 🧪 Tests

### Exécuter les tests

```bash
npm test
```

### Ajouter de nouveaux tests

- Testez tous les cas d'usage
- Incluez les cas limites
- Testez les erreurs
- Maintenez une couverture élevée

### Structure des tests

```typescript
describe('detectOperator', () => {
  it('should detect MTN operator correctly', () => {
    // Arrange
    const phone = '+237650123456';
    
    // Act
    const result = detectOperator(phone);
    
    // Assert
    expect(result).toBe('MTN');
  });
});
```

## ❓ Questions ou problèmes ?

- **Issues** : [GitHub Issues](https://github.com/williamtessa27/cm-phone-lookup/issues)
- **Discussions** : [GitHub Discussions](https://github.com/williamtessa27/cm-phone-lookup/discussions)
- **Email** : williamtessa270794@gmail.com

## 🙏 Remerciements

Merci à tous les contributeurs qui rendent cette librairie meilleure ! 🌟

---

**Ensemble, construisons la meilleure librairie de détection d'opérateurs camerounais ! 🇨🇲**
