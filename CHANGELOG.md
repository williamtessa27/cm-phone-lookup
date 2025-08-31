# 📋 Journal des changements

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.1.0] - 2024-08-31

### ✨ Ajouté
- **Support multi-pays** : Détection des opérateurs sénégalais et ivoiriens
- **Nouveaux opérateurs** : SENEGAL_ORANGE, SENEGAL_TIGO, SENEGAL_EXPRESSO, IVORY_COAST_ORANGE, IVORY_COAST_MTN, IVORY_COAST_MOOV, IVORY_COAST_TELECOM
- **Détection automatique de pays** : Reconnaissance automatique Cameroun (+237), Sénégal (+221), Côte d'Ivoire (+225)
- **Validation multi-pays** : Support des formats de numéros sénégalais et ivoiriens
- **Formatage multi-pays** : Formatage automatique pour les numéros sénégalais et ivoiriens
- **Architecture modulaire** : Restructuration complète pour une maintenance facile

### 🔧 Fonctionnalités techniques
- Détection automatique du pays par code (+237, +221, +225)
- Validation spécifique par pays
- Formatage adapté au pays
- Support des préfixes sénégalais (70, 75, 76, 77, 78, 79)
- Support des préfixes ivoiriens (01, 05, 06, 07, 08, 09, 25, 27, 49, 50, 51, 52, 55, 56)
- Logique de priorité pour éviter les conflits de préfixes

### 🏗️ Opérateurs supportés
- **Sénégal** : SENEGAL_ORANGE (70, 76, 77, 78, 79), SENEGAL_TIGO (76, 77), SENEGAL_EXPRESSO (75, 76, 77, 78)
- **Côte d'Ivoire** : IVORY_COAST_ORANGE (01, 05, 07, 25, 27, 49), IVORY_COAST_MTN (05, 07, 08, 09, 50, 51, 52), IVORY_COAST_MOOV (05, 06, 07, 55, 56), IVORY_COAST_TELECOM (27)

---

## [1.0.0] - 2024-08-31

### ✨ Ajouté
- **Fonctionnalité principale** : Détection automatique des opérateurs télécoms camerounais
- **Support complet** pour CAMEROON_MTN, CAMEROON_ORANGE, CAMEROON_CAMTEL et CAMEROON_NEXTTEL
- **Validation intelligente** des numéros de téléphone camerounais
- **Formatage automatique** des numéros avec espaces
- **Informations détaillées** sur chaque numéro (opérateur, validité, type, etc.)
- **Gestion des préfixes** pour chaque opérateur
- **Support TypeScript** complet avec types et interfaces
- **API intuitive** avec 8 fonctions principales
- **Tests complets** pour toutes les fonctionnalités
- **Documentation exhaustive** en français

### 🔧 Fonctionnalités techniques
- `detectOperator(phone)` : Détection automatique d'opérateur
- `isValidNumber(phone)` : Validation de numéro
- `getPhoneInfo(phone)` : Informations complètes sur un numéro
- `formatPhoneNumber(phone)` : Formatage avec espaces
- `getOperatorPrefixes(operator)` : Liste des préfixes d'un opérateur
- `getSupportedOperators()` : Liste de tous les opérateurs
- `isPrefixForOperator(prefix, operator)` : Vérification de préfixe

### 🏗️ Opérateurs supportés
- **CAMEROON_MTN** : 650, 651, 652, 653, 654, 680, 681, 682, 683, 684
- **CAMEROON_ORANGE** : 655, 656, 657, 658, 659, 690, 691, 692, 693
- **CAMEROON_CAMTEL** : 222, 233, 242, 243, 244, 245, 246
- **CAMEROON_NEXTTEL** : 66

### 📱 Types et interfaces
- `Operator` : Union type des opérateurs supportés
- `PhoneInfo` : Interface complète des informations d'un numéro
- Support complet TypeScript avec déclarations de types

### 🧪 Tests et qualité
- Tests unitaires complets pour toutes les fonctions
- Validation des cas limites et d'erreur
- Couverture de test exhaustive
- Exemples d'utilisation JavaScript et TypeScript

### 📚 Documentation
- README complet avec exemples d'utilisation
- API Reference détaillée
- Guide de contribution professionnel
- Code de conduite inclusif
- Changelog structuré

### 🚀 Infrastructure
- Configuration TypeScript optimisée
- Scripts npm pour build, test et développement
- Structure de projet professionnelle
- Gestion des dépendances optimisée

---

## 📝 Format des versions

- **MAJOR** : Changements incompatibles avec l'API précédente
- **MINOR** : Nouvelles fonctionnalités compatibles
- **PATCH** : Corrections de bugs compatibles

## 🔗 Liens utiles

- [NPM Package](https://www.npmjs.com/package/@williamtessa27/cm-phone-lookup)
- [GitHub Repository](https://github.com/williamtessa27/cm-phone-lookup)
- [Documentation](https://github.com/williamtessa27/cm-phone-lookup#readme)
- [Issues](https://github.com/williamtessa27/cm-phone-lookup/issues)

---

**🇨🇲🇸🇳🇨🇮 Made with ❤️ in Cameroon, Senegal and Côte d'Ivoire**
