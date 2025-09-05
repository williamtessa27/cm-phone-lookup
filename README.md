# 📱 @williamtessa27/cm-phone-lookup

[![npm version](https://img.shields.io/npm/v/@williamtessa27/cm-phone-lookup.svg?style=flat-square)](https://www.npmjs.com/package/@williamtessa27/cm-phone-lookup)
[![CI Status](https://img.shields.io/github/actions/workflow/status/williamtessa27/cm-phone-lookup/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/williamtessa27/cm-phone-lookup/actions/workflows/ci.yml)
[![codecov](https://img.shields.io/codecov/c/github/williamtessa27/cm-phone-lookup?style=flat-square)](https://codecov.io/gh/williamtessa27/cm-phone-lookup)
[![npm downloads](https://img.shields.io/npm/dm/@williamtessa27/cm-phone-lookup.svg?style=flat-square)](https://www.npmjs.com/package/@williamtessa27/cm-phone-lookup)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![license](https://img.shields.io/npm/l/@williamtessa27/cm-phone-lookup.svg?style=flat-square)](./LICENSE)
![Made in Africa](https://img.shields.io/badge/Made%20in-Africa-green?style=flat-square&logo=github)
[![Coverage](https://codecov.io/gh/williamtessa27/cm-phone-lookup/branch/main/graph/badge.svg?token=YOUR_TOKEN)](https://codecov.io/gh/williamtessa27/cm-phone-lookup)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/williamtessa27/cm-phone-lookup/issues)





Une **librairie JavaScript professionnelle** pour la détection d'opérateurs mobiles multi-pays avec **API unifiée**, **validation avancée** et **métadonnées enrichies**. Supporte **14 pays africains** : Cameroun 🇨🇲, Sénégal 🇸🇳, Côte d'Ivoire 🇨🇮, Nigeria 🇳🇬, Ghana 🇬🇭, Kenya 🇰🇪, Afrique du Sud 🇿🇦, Maroc 🇲🇦, Éthiopie 🇪🇹, Égypte 🇪🇬, Tanzanie 🇹🇿, **RDC** 🇨🇩, **Ouganda** 🇺🇬, **Algérie** 🇩🇿 avec plus de **65+ opérateurs** (MTN, Orange, Vodacom, Safaricom, Airtel, Ethio Telecom, Vodafone Egypt, Halotel, Mobilis, Djezzy, Ooredoo, etc.) à partir d'un numéro de téléphone.  
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

// 🇨🇲 Cameroun : Exemple de bilinguisme officiel
const cameroon = getCountryMetadata('237');
console.log(`${cameroon?.flag} ${cameroon?.name} (${cameroon?.nameLocal})`);
console.log(`Langues: ${Array.isArray(cameroon?.language) ? cameroon?.language.join(' + ') : cameroon?.language}`);
// Affiche: "Langues: fr + en" (Français + Anglais)

// Autres pays : Langue unique
const senegal = getCountryMetadata('221');
console.log(`Langue: ${senegal?.language}`); // "fr" (Français uniquement)

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

// Éthiopie
const operatorET = detectOperator('+25191123456');
console.log(operatorET); // "ETHIOPIA_ETHIO_TELECOM"

// Égypte
const operatorEG = detectOperator('+201012345678');
console.log(operatorEG); // "EGYPT_VODAFONE"

// Tanzanie
const operatorTZ = detectOperator('+255741234567');
console.log(operatorTZ); // "TANZANIA_VODACOM"

// RDC (République Démocratique du Congo)
const operatorCD = detectOperator('+243811234567');
console.log(operatorCD); // "DRC_VODACOM"

// Ouganda
const operatorUG = detectOperator('+256771234567');
console.log(operatorUG); // "UGANDA_MTN"

// Algérie
const operatorDZ = detectOperator('+213512345678');
console.log(operatorDZ); // "ALGERIA_MOBILIS"

// Côte d'Ivoire
const operatorCI = detectOperator('+22501234567');
console.log(operatorCI); // "IVORY_COAST_ORANGE"

// Nigeria
const operatorNG = detectOperator('+2340803123456');
console.log(operatorNG); // "NIGERIA_MTN"

// Ghana
const operatorGH = detectOperator('+233241234567');
console.log(operatorGH); // "GHANA_MTN"

// Kenya
const operatorKE = detectOperator('+254700123456');
console.log(operatorKE); // "KENYA_SAFARICOM"

// Afrique du Sud
const operatorZA = detectOperator('+27721234567');
console.log(operatorZA); // "SOUTH_AFRICA_VODACOM"

// Maroc
const operatorMA = detectOperator('+212612345678');
console.log(operatorMA); // "MOROCCO_MAROC_TELECOM"
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
| **CAMEROON_MTN** | 67, 670-679, 68, 680-689, 650-654 | Mobile | 🇨🇲 Cameroun |
| **CAMEROON_ORANGE** | 655, 656, 657, 658, 659 | Mobile | 🇨🇲 Cameroun |
| **CAMEROON_CAMTEL** | 222, 233, 242-246, 620, 621, 6200-6209, 6210-6219 | Fixe/Mobile | 🇨🇲 Cameroun |
| **CAMEROON_NEXTTEL** | 66, 660-669 | Mobile | 🇨🇲 Cameroun |
| **SENEGAL_ORANGE** | 77, 78 | Mobile | 🇸🇳 Sénégal |
| **SENEGAL_TIGO** | 76 | Mobile | 🇸🇳 Sénégal |
| **SENEGAL_EXPRESSO** | 70 | Mobile | 🇸🇳 Sénégal |
| **SENEGAL_HAYO** | 72 | Mobile | 🇸🇳 Sénégal |
| **SENEGAL_SIRIUS** | 754, 755, 756 | Mobile | 🇸🇳 Sénégal |
| **SENEGAL_ORIGINES** | 757 | Mobile | 🇸🇳 Sénégal |
| **IVORY_COAST_ORANGE** | 07, 27 | Mobile/Fixe | 🇨🇮 Côte d'Ivoire |
| **IVORY_COAST_MTN** | 05, 25 | Mobile/Fixe | 🇨🇮 Côte d'Ivoire |
| **IVORY_COAST_MOOV** | 01, 21 | Mobile/Fixe | 🇨🇮 Côte d'Ivoire |
| **NIGERIA_MTN** | 0703, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903, 0906, 0913, 0916, 0704, 07025, 07026 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_AIRTEL** | 0701, 0708, 0802, 0808, 0812, 0901, 0902, 0904, 0907, 0912, 0911 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_GLO** | 0705, 0805, 0807, 0811, 0815, 0905, 0915 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_9MOBILE** | 0809, 0817, 0818, 0908, 0909 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_NTEL** | 0804 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_SMILE** | 0702 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_STARCOMMS** | 07028, 07029, 0819 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_MULTILINKS** | 07027, 0709 | Mobile | 🇳🇬 Nigeria |
| **NIGERIA_ZOOMMOBILE** | 0707 | Mobile | 🇳🇬 Nigeria |
| **GHANA_MTN** | 024, 054, 055, 059, 0256, 0257, 0597, 0598, 0599 | Mobile | 🇬🇭 Ghana |
| **GHANA_VODAFONE** | 020, 050 | Mobile | 🇬🇭 Ghana |
| **GHANA_AIRTELTIGO** | 026, 056, 027, 057 | Mobile | 🇬🇭 Ghana |
| **GHANA_GLO** | 023 | Mobile | 🇬🇭 Ghana |
| **GHANA_EXPRESSO** | 028 | Mobile | 🇬🇭 Ghana |
| **KENYA_SAFARICOM** | 70, 71, 72, 74, 757-759, 768-769, 79, 110-115 | Mobile | 🇰🇪 Kenya |
| **KENYA_AIRTEL** | 730-739, 750-756, 785-789, 100-102 | Mobile | 🇰🇪 Kenya |
| **KENYA_TELKOM** | 770-779 | Mobile | 🇰🇪 Kenya |
| **KENYA_FAIBA** | 747 | Mobile | 🇰🇪 Kenya |
| **KENYA_EQUITEL** | 763-765 | Mobile | 🇰🇪 Kenya |
| **SOUTH_AFRICA_VODACOM** | 72, 82, 606-609, 636-637, 646-649, 660-665, 711-716, 79, 818 | Mobile | 🇿🇦 South Africa |
| **SOUTH_AFRICA_MTN** | 73, 83, 78, 710, 603-605, 630-635, 655-657, 810 | Mobile | 🇿🇦 South Africa |
| **SOUTH_AFRICA_CELL_C** | 74, 84, 610-613, 615-619, 641-645, 650-653 | Mobile | 🇿🇦 South Africa |
| **SOUTH_AFRICA_TELKOM** | 614, 658-659, 811-815, 817 | Mobile | 🇿🇦 South Africa |
| **SOUTH_AFRICA_VIRGIN_MOBILE** | 741 | Mobile | 🇿🇦 South Africa |
| **MOROCCO_MAROC_TELECOM** | 5, 6, 7, 8, 9 | Mobile/Fixe | 🇲🇦 Morocco |
| **MOROCCO_ORANGE_MAROC** | 5, 6, 7, 8, 9 | Mobile/Fixe | 🇲🇦 Morocco |
| **MOROCCO_INWI** | 5, 6, 7, 8, 9 | Mobile/Fixe | 🇲🇦 Morocco |
| **ETHIOPIA_ETHIO_TELECOM** | 90-99 | Mobile | 🇪🇹 Ethiopia |
| **ETHIOPIA_SAFARICOM** | 70-79 | Mobile | 🇪🇹 Ethiopia |
| **EGYPT_VODAFONE** | 10 | Mobile | 🇪🇬 Egypt |
| **EGYPT_ETISALAT** | 11 | Mobile | 🇪🇬 Egypt |
| **EGYPT_ORANGE** | 12 | Mobile | 🇪🇬 Egypt |
| **EGYPT_WE** | 15 | Mobile | 🇪🇬 Egypt |
| **TANZANIA_HALOTEL** | 62 | Mobile | 🇹🇿 Tanzania |
| **TANZANIA_TIGO** | 65, 67, 71 | Mobile | 🇹🇿 Tanzania |
| **TANZANIA_SMILE** | 66 | Mobile | 🇹🇿 Tanzania |
| **TANZANIA_AIRTEL** | 68, 69, 78 | Mobile | 🇹🇿 Tanzania |
| **TANZANIA_TTCL** | 73 | Mixte | 🇹🇿 Tanzania |
| **TANZANIA_VODACOM** | 74, 75, 76 | Mobile | 🇹🇿 Tanzania |
| **TANZANIA_ZANTEL** | 77 | Mobile | 🇹🇿 Tanzania |
| **DRC_VODACOM** | 81, 82, 83 | Mobile | 🇨🇩 RDC |
| **DRC_ORANGE** | 91, 92, 93 | Mobile | 🇨🇩 RDC |
| **DRC_AIRTEL** | 97, 98 | Mobile | 🇨🇩 RDC |
| **DRC_AFRICELL** | 99 | Mobile | 🇨🇩 RDC |
| **UGANDA_AIRTEL** | 70, 74, 75 | Mobile | 🇺🇬 Uganda |
| **UGANDA_MTN** | 76, 77, 78, 79 | Mobile | 🇺🇬 Uganda |
| **UGANDA_LYCAMOBILE** | 72 | Mobile | 🇺🇬 Uganda |
| **UGANDA_UTEL** | 71 | Mobile | 🇺🇬 Uganda |
| **UGANDA_AFRICELL** | 73 | Mobile | 🇺🇬 Uganda |
| **ALGERIA_MOBILIS** | 5, 9 | Mobile | 🇩🇿 Algeria |
| **ALGERIA_DJEZZY** | 65, 66, 67, 7, 8 | Mobile | 🇩🇿 Algeria |
| **ALGERIA_OOREDOO** | 77, 78, 79 | Mobile | 🇩🇿 Algeria |

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

> **💡 Note sur les langues** : Le Cameroun 🇨🇲 est le seul pays bilingue officiel (français + anglais) dans notre librairie. Son champ `language` retourne `['fr', 'en']`, tandis que les autres pays retournent une seule langue.

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
  language: string | string[]; // Support pour langues multiples (Cameroun bilingue)
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
- **Support multi-pays** : Cameroun (+237), Sénégal (+221), Côte d'Ivoire (+225), Nigeria (+234), Ghana (+233), Kenya (+254), Afrique du Sud (+27), Maroc (+212), Éthiopie (+251), Égypte (+20), Tanzanie (+255), RDC (+243), Ouganda (+256), Algérie (+213)
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
- **Métadonnées enrichies** des pays (drapeaux, capitales, populations, devises, fuseaux, **langues officielles**)
- **Bilinguisme du Cameroun** 🇨🇲 : Support officiel français + anglais avec `language: ['fr', 'en']`
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

- Tous les opérateurs télécoms des 14 pays africains supportés
- Les communautés développeurs africaines
- Tous les contributeurs open-source

---

**Made with ❤️ across Africa 🌍 - Supporting 14 African countries: 🇨🇲🇸🇳🇨🇮🇳🇬🇬🇭🇰🇪🇿🇦🇲🇦🇪🇹🇪🇬🇹🇿🇨🇩🇺🇬🇩🇿**
