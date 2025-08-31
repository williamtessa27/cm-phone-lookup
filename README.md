# 📱 @williamtessa27/cm-phone-lookup

[![npm version](https://img.shields.io/npm/v/@williamtessa27/cm-phone-lookup.svg)](https://www.npmjs.com/package/@williamtessa27/cm-phone-lookup)
[![npm downloads](https://img.shields.io/npm/dm/@williamtessa27/cm-phone-lookup.svg)](https://www.npmjs.com/package/@williamtessa27/cm-phone-lookup)
[![license](https://img.shields.io/npm/l/@williamtessa27/cm-phone-lookup.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Une **librairie JavaScript professionnelle** pour la détection d'opérateurs mobiles multi-pays avec **API unifiée**, **validation avancée** et **métadonnées enrichies**. Supporte : Cameroun 🇨🇲, Sénégal 🇸🇳, Côte d'Ivoire 🇨🇮, Nigeria 🇳🇬, Ghana 🇬🇭 (CAMEROON_MTN, CAMEROON_ORANGE, CAMEROON_CAMTEL, CAMEROON_NEXTTEL, SENEGAL_ORANGE, SENEGAL_TIGO, SENEGAL_EXPRESSO, IVORY_COAST_ORANGE, IVORY_COAST_MTN, IVORY_COAST_MOOV, IVORY_COAST_TELECOM, NIGERIA_MTN, NIGERIA_AIRTEL, NIGERIA_GLO, NIGERIA_9MOBILE, GHANA_MTN, GHANA_VODAFONE, GHANA_AIRTELTIGO) à partir d'un numéro de téléphone.  
Compatible **JavaScript** et **TypeScript**.

---

## 🚀 Installation

```bash
npm install @williamtessa27/cm-phone-lookup
# ou
yarn add @williamtessa27/cm-phone-lookup
# ou
pnpm add @williamtessa27/cm-phone-lookup
```

## 📖 Utilisation

### 🎯 **NOUVEAU : API Unifiée avec PhoneLookup.analyze()**
```typescript
import { PhoneLookup } from '@williamtessa27/cm-phone-lookup';

// Analyse complète en une seule fonction !
const result = PhoneLookup.analyze('+233241234567');
console.log(`${result.country?.flag} ${result.country?.name}: ${result.operator}`);
// 🇬🇭 Ghana: GHANA_MTN

// Métadonnées complètes incluses
console.log(`Capitale: ${result.country?.capital}`);
console.log(`Population: ${result.country?.population}`);
console.log(`Devise: ${result.country?.currency}`);
console.log(`Fuseau: ${result.country?.timezone}`);
```

### 🔗 **NOUVEAU : Méthodes Chainées (Fluent API)**
```typescript
import { PhoneLookup } from '@williamtessa27/cm-phone-lookup';

const result = new PhoneLookup('+237650123456')
  .validate()
  .format()
  .getInfo();

console.log(`${result.country?.flag} ${result.country?.name}`);
// 🇨🇲 Cameroon
```

### ⚙️ **NOUVEAU : Configuration Flexible**
```typescript
import { PhoneLookup } from '@williamtessa27/cm-phone-lookup';

const lookup = new PhoneLookup('+233241234567', {
  strictMode: true,        // Validation stricte
  autoFormat: false,       // Désactiver le formatage automatique
  language: 'en',          // Langue anglaise
  includeMetadata: true,   // Inclure les métadonnées
  throwOnError: false      // Ne pas lancer d'exceptions
});
```

### 🚨 **NOUVEAU : Gestion d'Erreurs Avancée**
```typescript
import { PhoneLookup, validatePhoneNumber } from '@williamtessa27/cm-phone-lookup';

try {
  const result = PhoneLookup.analyze('123', { throwOnError: true });
} catch (error) {
  if (error.code === 'INVALID_COUNTRY_CODE') {
    console.log('Codes supportés:', error.suggestions);
  }
}

// Validation avec messages d'erreur détaillés
const validation = validatePhoneNumber('123');
if (!validation.isValid) {
  validation.errors.forEach(error => {
    console.log(`${error.code}: ${error.message}`);
    if (error.suggestion) {
      console.log(`💡 Suggestion: ${error.suggestion}`);
    }
  });
}
```

### 📊 **NOUVEAU : Statistiques Globales**
```typescript
import { PhoneLookup } from '@williamtessa27/cm-phone-lookup';

const stats = PhoneLookup.getStats();
console.log(`🌍 Total pays: ${stats.totalCountries}`);
console.log(`📱 Total opérateurs: ${stats.totalOperators}`);

stats.countries.forEach(country => {
  console.log(`${country.flag} ${country.name}: ${country.operators} opérateurs`);
});
```

### 🌍 **NOUVEAU : Métadonnées des Pays**
```typescript
import { getCountryMetadata, getAllCountries } from '@williamtessa27/cm-phone-lookup';

// Obtenir les métadonnées d'un pays
const ghana = getCountryMetadata('233');
console.log(`${ghana?.flag} ${ghana?.name} (${ghana?.nameLocal})`);
console.log(`Capitale: ${ghana?.capital}`);
console.log(`Population: ${ghana?.population}`);
console.log(`Devise: ${ghana?.currency}`);

// Liste de tous les pays supportés
const countries = getAllCountries();
console.log('Pays supportés:', countries);
```

### 📱 **API Classique (Toujours Disponible)**
```typescript
import { detectOperator, isValidNumber, getPhoneInfo, formatPhoneNumber } from '@williamtessa27/cm-phone-lookup';

// Cameroun
const operatorCM = detectOperator('+237650123456');
console.log(operatorCM); // "CAMEROON_MTN"

// Sénégal
const operatorSN = detectOperator('+221771234567');
console.log(operatorSN); // "SENEGAL_ORANGE"

// Côte d'Ivoire
const operatorCI = detectOperator('+22501234567');
console.log(operatorCI); // "IVORY_COAST_ORANGE"

// Nigeria
const operatorNG = detectOperator('+2340803123456');
console.log(operatorNG); // "NIGERIA_MTN"

// Ghana
const operatorGH = detectOperator('+233241234567');
console.log(operatorGH); // "GHANA_MTN"
```

### Validation de numéro
```typescript
import { isValidNumber } from '@williamtessa27/cm-phone-lookup';

const isValid = isValidNumber('+237650123456');
console.log(isValid); // true
```

### Information complète
```typescript
import { getPhoneInfo } from '@williamtessa27/cm-phone-lookup';

const info = getPhoneInfo('+237650123456');
console.log(info);
// {
//   operator: "CAMEROON_MTN",
//   isValid: true,
//   countryCode: "+237",
//   localNumber: "650123456",
//   formattedNumber: "+237 650 123 456",
//   isMobile: true,
//   isFixed: false,
//   length: 9
// }
```

### Formatage de numéro
```typescript
import { formatPhoneNumber } from '@williamtessa27/cm-phone-lookup';

const formatted = formatPhoneNumber('+237650123456');
console.log(formatted); // "+237 650 123 456"
```

### Obtenir les préfixes d'un opérateur
```typescript
import { getOperatorPrefixes } from '@williamtessa27/cm-phone-lookup';

const mtnPrefixes = getOperatorPrefixes('CAMEROON_MTN');
console.log(mtnPrefixes); // ["650", "651", "652", "653", "654", "680", "681", "682", "683", "684"]
```

### Vérifier si un préfixe appartient à un opérateur
```typescript
import { isPrefixForOperator } from '@williamtessa27/cm-phone-lookup';

const isMtn = isPrefixForOperator('650', 'CAMEROON_MTN');
console.log(isMtn); // true
```

## 🏗️ Opérateurs supportés

| Opérateur | Préfixes | Type | Pays |
|-----------|----------|------|------|
| **CAMEROON_MTN** | 650, 651, 652, 653, 654, 680, 681, 682, 683, 684 | Mobile | 🇨🇲 Cameroun |
| **CAMEROON_ORANGE** | 655, 656, 657, 658, 659, 690, 691, 692, 693 | Mobile | 🇨🇲 Cameroun |
| **CAMEROON_CAMTEL** | 222, 233, 242, 243, 244, 245, 246 | Fixe/Mobile | 🇨🇲 Cameroun |
| **CAMEROON_NEXTTEL** | 66 | Mobile | 🇨🇲 Cameroun |
| **SENEGAL_ORANGE** | 70, 76, 77, 78, 79 | Mobile | 🇸🇳 Sénégal |
| **SENEGAL_TIGO** | 76, 77 | Mobile | 🇸🇳 Sénégal |
| **SENEGAL_EXPRESSO** | 75, 76, 77, 78 | Mobile | 🇸🇳 Sénégal |
| **IVORY_COAST_ORANGE** | 01, 05, 07, 25, 27, 49 | Mobile | 🇨🇮 Côte d'Ivoire |
| **IVORY_COAST_MTN** | 05, 07, 08, 09, 50, 51, 52 | Mobile | 🇨🇮 Côte d'Ivoire |
| **IVORY_COAST_MOOV** | 05, 06, 07, 55, 56 | Mobile | 🇨🇮 Côte d'Ivoire |
| **IVORY_COAST_TELECOM** | 27 | Mixte | 🇨🇮 Côte d'Ivoire |
| **NIGERIA_MTN** | 0803, 0806, 0703, 0706, 0813, 0816, 0810, 0814, 0903, 0906 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_AIRTEL** | 0802, 0808, 0812, 0708, 0701, 0902, 0907 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_GLO** | 0805, 0807, 0815, 0811, 0905 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_9MOBILE** | 0809, 0817, 0818, 0909 | Mobile | 🇳🇬 Nigeria |
| **GHANA_MTN** | 24, 54, 55, 59 | Mobile | 🇬🇭 Ghana |
| **GHANA_VODAFONE** | 20, 50, 57 | Mobile | 🇬🇭 Ghana |
| **GHANA_AIRTELTIGO** | 26, 56, 27 | Mobile | 🇬🇭 Ghana |

## 🔧 API Reference

### 🆕 **NOUVEAU : Classe PhoneLookup**

#### `PhoneLookup.analyze(phone: string, options?: PhoneLookupOptions): EnhancedPhoneInfo`
Analyse complète d'un numéro de téléphone avec toutes les informations et métadonnées.

#### `PhoneLookup.validate(phone: string, options?: PhoneLookupOptions): boolean`
Validation rapide d'un numéro de téléphone.

#### `PhoneLookup.getOperator(phone: string): string`
Détection rapide de l'opérateur.

#### `PhoneLookup.format(phone: string): string`
Formatage rapide d'un numéro.

#### `PhoneLookup.getStats()`
Obtient les statistiques globales de la librairie.

#### **Méthodes d'instance avec chaînage :**
```typescript
const result = new PhoneLookup('+233241234567')
  .validate()    // Valide le numéro
  .format()      // Formate le numéro
  .getInfo();    // Obtient toutes les informations
```

### **API Classique (Toujours Disponible)**

#### `detectOperator(phone: string): Operator`
Détecte l'opérateur mobile à partir d'un numéro de téléphone multi-pays.

**Paramètres:**
- `phone` (string): Le numéro de téléphone (avec ou sans code pays)

**Retourne:**
- `Operator`: L'opérateur détecté ou "Unknown"

#### `isValidNumber(phone: string): boolean`
Valide si un numéro de téléphone multi-pays est valide.

**Paramètres:**
- `phone` (string): Le numéro de téléphone à valider

**Retourne:**
- `boolean`: true si le numéro est valide, false sinon

#### `getPhoneInfo(phone: string): PhoneInfo`
Obtient des informations complètes sur un numéro de téléphone.

**Paramètres:**
- `phone` (string): Le numéro de téléphone

**Retourne:**
- `PhoneInfo`: Un objet avec toutes les informations du numéro

#### `formatPhoneNumber(phone: string): string`
Formate un numéro de téléphone en format lisible.

**Paramètres:**
- `phone` (string): Le numéro de téléphone

**Retourne:**
- `string`: Le numéro formaté avec espaces

#### `getOperatorPrefixes(operator: Operator): string[]`
Obtient tous les préfixes d'un opérateur spécifique.

**Paramètres:**
- `operator` (Operator): L'opérateur

**Retourne:**
- `string[]`: Liste des préfixes de l'opérateur

#### `getSupportedOperators(): Operator[]`
Obtient la liste de tous les opérateurs supportés.

**Retourne:**
- `Operator[]`: Liste de tous les opérateurs

#### `isPrefixForOperator(prefix: string, operator: Operator): boolean`
Vérifie si un préfixe appartient à un opérateur spécifique.

**Paramètres:**
- `prefix` (string): Le préfixe à vérifier
- `operator` (Operator): L'opérateur

**Retourne:**
- `boolean`: true si le préfixe appartient à l'opérateur

### 🆕 **NOUVEAU : Validation Avancée**

#### `validatePhoneNumber(phone: string): ValidationResult`
Valide un numéro avec messages d'erreur détaillés et suggestions.

#### `PhoneValidationError`
Classe d'erreur personnalisée avec codes d'erreur et suggestions.

### 🆕 **NOUVEAU : Métadonnées des Pays**

#### `getCountryMetadata(countryCode: string): CountryMetadata | null`
Obtient les métadonnées complètes d'un pays.

#### `getAllCountries(): string[]`
Obtient la liste de tous les codes pays supportés.

#### `getCountryByCode(code: string): CountryMetadata | null`
Recherche un pays par son code.

## 📱 Types

### `Operator`
```typescript
type Operator = "CAMEROON_MTN" | "CAMEROON_ORANGE" | "CAMEROON_CAMTEL" | "CAMEROON_NEXTTEL" | "SENEGAL_ORANGE" | "SENEGAL_TIGO" | "SENEGAL_EXPRESSO" | "IVORY_COAST_ORANGE" | "IVORY_COAST_MTN" | "IVORY_COAST_MOOV" | "IVORY_COAST_TELECOM" | "NIGERIA_MTN" | "NIGERIA_AIRTEL" | "NIGERIA_GLO" | "NIGERIA_9MOBILE" | "GHANA_MTN" | "GHANA_VODAFONE" | "GHANA_AIRTELTIGO" | "Unknown";
```

### `PhoneInfo`
```typescript
interface PhoneInfo {
  operator: Operator;
  isValid: boolean;
  countryCode: string;
  localNumber: string;
  formattedNumber: string;
  isMobile: boolean;
  isFixed: boolean;
  length: number;
}
```

### 🆕 **NOUVEAU : EnhancedPhoneInfo**
```typescript
interface EnhancedPhoneInfo extends PhoneInfo {
  phone: string;
  country: CountryMetadata | undefined;
  errors: string[] | undefined;
  suggestions: string[] | undefined;
}
```

### 🆕 **NOUVEAU : CountryMetadata**
```typescript
interface CountryMetadata {
  name: string;
  nameLocal: string;
  flag: string;
  language: string;
  currency: string;
  timezone: string;
  population?: string;
  capital?: string;
}
```

### 🆕 **NOUVEAU : PhoneLookupOptions**
```typescript
interface PhoneLookupOptions {
  strictMode?: boolean;
  autoFormat?: boolean;
  language?: 'fr' | 'en';
  includeMetadata?: boolean;
  throwOnError?: boolean;
}
```

### 🆕 **NOUVEAU : ValidationError**
```typescript
interface ValidationError {
  code: string;
  message: string;
  field: string | undefined;
  value: string | undefined;
  suggestion: string | undefined;
}
```

## 🧪 Tests

```bash
# Construire le projet
npm run build

# Lancer les tests classiques
npm test

# Lancer les tests des nouvelles fonctionnalités
node dist/test-enhanced.js

# Mode développement
npm run dev

# Nettoyer le dossier dist
npm run clean
```

## 🚀 Développement

```bash
# Cloner le repository
git clone https://github.com/williamtessa27/cm-phone-lookup.git

# Installer les dépendances
npm install

# Mode développement avec rechargement automatique
npm run dev

# Construire le projet
npm run build
```

## 📋 Fonctionnalités

### ✅ **Fonctionnalités Classiques**
- **Détection automatique** des opérateurs multi-pays
- **Support multi-pays** : Cameroun (+237), Sénégal (+221), Côte d'Ivoire (+225), Nigeria (+234), Ghana (+233)
- **Validation complète** des numéros de téléphone par pays
- **Support TypeScript** avec types complets
- **Formatage automatique** des numéros adapté au pays
- **Informations détaillées** sur chaque numéro
- **Gestion des préfixes** pour chaque opérateur
- **Tests complets** pour toutes les fonctionnalités
- **Documentation complète** en français et anglais
- **Compatibilité** Node.js et navigateurs

### 🆕 **NOUVELLES FONCTIONNALITÉS V1.5.0**
- **API unifiée** avec `PhoneLookup.analyze()` pour une analyse complète
- **Méthodes chainées** (Fluent API) pour un code plus lisible
- **Configuration flexible** avec options personnalisables
- **Validation avancée** avec messages d'erreur détaillés et suggestions
- **Métadonnées enrichies** des pays (drapeaux, capitales, populations, devises, fuseaux)
- **Gestion d'erreurs robuste** avec codes d'erreur spécifiques
- **Méthodes statiques** pour un usage rapide et simple
- **Statistiques globales** de la librairie
- **Interface utilisateur améliorée** pour une meilleure expérience développeur

## 🌍 Cas d'usage

- **Applications web** nécessitant la validation de numéros multi-pays africains
- **Formulaires** avec vérification automatique d'opérateur par pays
- **Systèmes de SMS** avec routage par opérateur et par pays
- **Analytics** sur l'utilisation des opérateurs par pays
- **Validation** de numéros dans les bases de données multi-pays
- **Applications internationales** nécessitant le support de plusieurs pays africains
- **Dashboards** avec métadonnées pays et statistiques opérateurs
- **Systèmes de support client** avec détection automatique du pays et de l'opérateur

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

## 🙏 Remerciements

- Tous les opérateurs télécoms camerounais, sénégalais, ivoiriens, nigérians et ghanéens
- La communauté développeur camerounaise, sénégalaise, ivoirienne, nigériane et ghanéenne
- Tous les contributeurs open-source

---

**Made with ❤️ in Cameroon 🇨🇲, Senegal 🇸🇳, Côte d'Ivoire 🇨🇮, Nigeria 🇳�� and Ghana 🇬🇭**
