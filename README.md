# 📱 @williamtessa27/cm-phone-lookup

[![npm version](https://img.shields.io/npm/v/@williamtessa27/cm-phone-lookup.svg)](https://www.npmjs.com/package/@williamtessa27/cm-phone-lookup)
[![npm downloads](https://img.shields.io/npm/dm/@williamtessa27/cm-phone-lookup.svg)](https://www.npmjs.com/package/@williamtessa27/cm-phone-lookup)
[![license](https://img.shields.io/npm/l/@williamtessa27/cm-phone-lookup.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Une librairie **open-source** pour détecter l'opérateur mobile multi-pays : Cameroun 🇨🇲, Sénégal 🇸🇳, Côte d'Ivoire 🇨🇮 (CAMEROON_MTN, CAMEROON_ORANGE, CAMEROON_CAMTEL, CAMEROON_NEXTTEL, SENEGAL_ORANGE, SENEGAL_TIGO, SENEGAL_EXPRESSO, IVORY_COAST_ORANGE, IVORY_COAST_MTN, IVORY_COAST_MOOV, IVORY_COAST_TELECOM) à partir d'un numéro de téléphone.  
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

### Détection simple d'opérateur
```typescript
import { detectOperator } from '@williamtessa27/cm-phone-lookup';

// Cameroun
const operatorCM = detectOperator('+237650123456');
console.log(operatorCM); // "CAMEROON_MTN"

// Sénégal
const operatorSN = detectOperator('+221771234567');
console.log(operatorSN); // "SENEGAL_ORANGE"

// Côte d'Ivoire
const operatorCI = detectOperator('+22501234567');
console.log(operatorCI); // "IVORY_COAST_ORANGE"
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

## 🔧 API Reference

### `detectOperator(phone: string): Operator`
Détecte l'opérateur mobile à partir d'un numéro de téléphone multi-pays.

**Paramètres:**
- `phone` (string): Le numéro de téléphone (avec ou sans code pays)

**Retourne:**
- `Operator`: L'opérateur détecté ou "Unknown"

### `isValidNumber(phone: string): boolean`
Valide si un numéro de téléphone multi-pays est valide.

**Paramètres:**
- `phone` (string): Le numéro de téléphone à valider

**Retourne:**
- `boolean`: true si le numéro est valide, false sinon

### `getPhoneInfo(phone: string): PhoneInfo`
Obtient des informations complètes sur un numéro de téléphone.

**Paramètres:**
- `phone` (string): Le numéro de téléphone

**Retourne:**
- `PhoneInfo`: Un objet avec toutes les informations du numéro

### `formatPhoneNumber(phone: string): string`
Formate un numéro de téléphone en format lisible.

**Paramètres:**
- `phone` (string): Le numéro de téléphone

**Retourne:**
- `string`: Le numéro formaté avec espaces

### `getOperatorPrefixes(operator: Operator): string[]`
Obtient tous les préfixes d'un opérateur spécifique.

**Paramètres:**
- `operator` (Operator): L'opérateur

**Retourne:**
- `string[]`: Liste des préfixes de l'opérateur

### `getSupportedOperators(): Operator[]`
Obtient la liste de tous les opérateurs supportés.

**Retourne:**
- `Operator[]`: Liste de tous les opérateurs

### `isPrefixForOperator(prefix: string, operator: Operator): boolean`
Vérifie si un préfixe appartient à un opérateur spécifique.

**Paramètres:**
- `prefix` (string): Le préfixe à vérifier
- `operator` (Operator): L'opérateur

**Retourne:**
- `boolean`: true si le préfixe appartient à l'opérateur

## 📱 Types

### `Operator`
```typescript
type Operator = "CAMEROON_MTN" | "CAMEROON_ORANGE" | "CAMEROON_CAMTEL" | "CAMEROON_NEXTTEL" | "SENEGAL_ORANGE" | "SENEGAL_TIGO" | "SENEGAL_EXPRESSO" | "IVORY_COAST_ORANGE" | "IVORY_COAST_MTN" | "IVORY_COAST_MOOV" | "IVORY_COAST_TELECOM" | "Unknown";
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

## 🧪 Tests

```bash
# Construire le projet
npm run build

# Lancer les tests
npm test

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

- ✅ **Détection automatique** des opérateurs camerounais et sénégalais
- ✅ **Support multi-pays** : Cameroun (+237), Sénégal (+221), Côte d'Ivoire (+225)
- ✅ **Validation complète** des numéros de téléphone par pays
- ✅ **Support TypeScript** avec types complets
- ✅ **Formatage automatique** des numéros adapté au pays
- ✅ **Informations détaillées** sur chaque numéro
- ✅ **Gestion des préfixes** pour chaque opérateur
- ✅ **Tests complets** pour toutes les fonctionnalités
- ✅ **Documentation complète** en français et anglais
- ✅ **Compatibilité** Node.js et navigateurs

## 🌍 Cas d'usage

- **Applications web** nécessitant la validation de numéros multi-pays africains
- **Formulaires** avec vérification automatique d'opérateur par pays
- **Systèmes de SMS** avec routage par opérateur et par pays
- **Analytics** sur l'utilisation des opérateurs par pays
- **Validation** de numéros dans les bases de données multi-pays
- **Applications internationales** nécessitant le support de plusieurs pays africains

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

- Tous les opérateurs télécoms camerounais, sénégalais et ivoiriens
- La communauté développeur camerounaise, sénégalaise et ivoirienne
- Tous les contributeurs open-source

---

**Made with ❤️ in Cameroon 🇨🇲, Senegal 🇸🇳 and Côte d'Ivoire 🇨🇮**
