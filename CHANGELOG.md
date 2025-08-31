# 📋 Journal des changements

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.5.0] - 2025-01-31

### ✨ Ajouté
- **API unifiée révolutionnaire** : `PhoneLookup.analyze()` pour une analyse complète en une fonction
- **Méthodes chainées (Fluent API)** : API fluide et moderne avec chaînage de méthodes
- **Configuration flexible** : Options personnalisables (strictMode, autoFormat, language, includeMetadata, throwOnError)
- **Validation avancée** : Système de validation avec messages d'erreur détaillés et suggestions
- **Métadonnées enrichies** : Drapeaux, capitales, populations, devises, fuseaux horaires pour tous les pays
- **Gestion d'erreurs robuste** : Classe `PhoneValidationError` avec codes d'erreur spécifiques
- **Méthodes statiques** : Accès rapide aux fonctionnalités principales
- **Statistiques globales** : Vue d'ensemble complète de la librairie
- **Interface utilisateur améliorée** : Expérience développeur professionnelle

### 🔧 Fonctionnalités techniques
- **Classe PhoneLookup** : API orientée objet avec méthodes d'instance et statiques
- **Validation intelligente** : Détection automatique des erreurs avec suggestions de correction
- **Métadonnées pays** : Informations géographiques, démographiques et culturelles
- **Gestion d'erreurs avancée** : Codes d'erreur structurés (EMPTY_PHONE, INVALID_COUNTRY_CODE, etc.)
- **API chainée** : Méthodes fluides pour une expérience de développement moderne
- **Configuration par défaut** : Paramètres intelligents avec personnalisation avancée

### 🏗️ Architecture et structure
- **Nouveau module core** : `src/core/phone-lookup.ts` pour la classe principale
- **Module de validation** : `src/utils/validation-errors.ts` pour la gestion d'erreurs
- **Module de métadonnées** : `src/countries/metadata.ts` pour les informations pays
- **Tests étendus** : `src/test-enhanced.ts` pour toutes les nouvelles fonctionnalités
- **Exports enrichis** : Nouvelles interfaces et types TypeScript

### 📱 Types et interfaces
- **EnhancedPhoneInfo** : Extension de PhoneInfo avec métadonnées et gestion d'erreurs
- **CountryMetadata** : Interface complète pour les informations pays
- **PhoneLookupOptions** : Configuration flexible de la classe PhoneLookup
- **ValidationError** : Structure d'erreur avec codes et suggestions

---

## [1.4.0] - 2025-01-31

### ✨ Ajouté
- **Support multi-pays** : Détection des opérateurs ghanéens
- **Nouveaux opérateurs** : GHANA_MTN, GHANA_VODAFONE, GHANA_AIRTELTIGO
- **Détection automatique de pays** : Reconnaissance automatique Ghana (+233)
- **Validation multi-pays** : Support des formats de numéros ghanéens
- **Formatage multi-pays** : Formatage automatique pour les numéros ghanéens
- **Architecture modulaire étendue** : Support de 5 pays africains

### 🔧 Fonctionnalités techniques
- Détection automatique du pays par code (+233)
- Validation spécifique pour les numéros ghanéens (9 chiffres)
- Formatage adapté au format ghanéen (XXX XXX XXXX)
- Support des préfixes ghanéens (024, 054, 055, 059, 020, 050, 057, 026, 056, 027)

### 🏗️ Opérateurs supportés
- **Ghana** : GHANA_MTN (24, 54, 55, 59), GHANA_VODAFONE (20, 50, 57), GHANA_AIRTELTIGO (26, 56, 27)

---

## [1.3.0] - 2025-01-31

### ✨ Ajouté
- **Support multi-pays** : Détection des opérateurs nigérians
- **Nouveaux opérateurs** : NIGERIA_MTN, NIGERIA_AIRTEL, NIGERIA_GLO, NIGERIA_9MOBILE
- **Détection automatique de pays** : Reconnaissance automatique Nigeria (+234)
- **Validation multi-pays** : Support des formats de numéros nigérians
- **Formatage multi-pays** : Formatage automatique pour les numéros nigérians
- **Architecture modulaire étendue** : Support de 4 pays africains

### 🔧 Fonctionnalités techniques
- Détection automatique du pays par code (+234)
- Validation spécifique pour les numéros nigérians (10 chiffres)
- Formatage adapté au format nigérian (XXXX XXX XXXX)
- Support des préfixes nigérians (0803, 0806, 0703, 0706, 0813, 0816, 0810, 0814, 0903, 0906, etc.)

### 🏗️ Opérateurs supportés
- **Nigeria** : NIGERIA_MTN (0803, 0806, 0703, 0706, 0813, 0816, 0810, 0814, 0903, 0906), NIGERIA_AIRTEL (0802, 0808, 0812, 0708, 0701, 0902, 0907), NIGERIA_GLO (0805, 0807, 0815, 0811, 0905), NIGERIA_9MOBILE (0809, 0817, 0818, 0909)

---

## [1.2.0] - 2025-01-31

### ✨ Ajouté
- **Support multi-pays** : Détection des opérateurs ivoiriens
- **Nouveaux opérateurs** : IVORY_COAST_ORANGE, IVORY_COAST_MTN, IVORY_COAST_MOOV, IVORY_COAST_TELECOM
- **Détection automatique de pays** : Reconnaissance automatique Côte d'Ivoire (+225)
- **Validation multi-pays** : Support des formats de numéros ivoiriens
- **Formatage multi-pays** : Formatage automatique pour les numéros ivoiriens
- **Architecture modulaire** : Restructuration complète pour une maintenance facile

### 🔧 Fonctionnalités techniques
- Détection automatique du pays par code (+225)
- Validation spécifique pour les numéros ivoiriens (8 chiffres)
- Formatage adapté au format ivoirien (XX XX XX XX)
- Support des préfixes ivoiriens avec logique de priorité

### 🏗️ Opérateurs supportés
- **Côte d'Ivoire** : IVORY_COAST_ORANGE (01, 05, 07, 25, 27, 49), IVORY_COAST_MTN (05, 07, 08, 09, 50, 51, 52), IVORY_COAST_MOOV (05, 06, 07, 55, 56), IVORY_COAST_TELECOM (27)

---

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
