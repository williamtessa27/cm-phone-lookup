# 📱 @williamtessa27/cm-phone-lookup

[![npm version](https://img.shields.io/npm/v/@williamtessa27/cm-phone-lookup.svg)](https://www.npmjs.com/package/@williamtessa27/cm-phone-lookup)
[![npm downloads](https://img.shields.io/npm/dm/@williamtessa27/cm-phone-lookup.svg)](https://www.npmjs.com/package/@williamtessa27/cm-phone-lookup)
[![license](https://img.shields.io/npm/l/@williamtessa27/cm-phone-lookup.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Une librairie **open-source** pour détecter l'opérateur mobile au Cameroun 🇨🇲 et au Sénégal 🇸🇳 (MTN, ORANGE, CAMTEL, NEXTTEL, SENEGAL_ORANGE, SENEGAL_TIGO, SENEGAL_EXPRESSO) à partir d'un numéro de téléphone.  
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
console.log(operatorCM); // "MTN"

// Sénégal
const operatorSN = detectOperator('+221771234567');
console.log(operatorSN); // "SENEGAL_ORANGE"
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
//   operator: "MTN",
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

const mtnPrefixes = getOperatorPrefixes('MTN');
console.log(mtnPrefixes); // ["650", "651", "652", "653", "654", "680", "681", "682", "683", "684", "685", "686", "687", "688", "689"]
```

### Vérifier si un préfixe appartient à un opérateur
```typescript
import { isPrefixForOperator } from '@williamtessa27/cm-phone-lookup';

const isMtn = isPrefixForOperator('650', 'MTN');
console.log(isMtn); // true
```

## 🏗️ Opérateurs supportés

| Opérateur | Préfixes | Type | Pays |
|-----------|----------|------|------|
| **MTN** | 650, 651, 652, 653, 654, 680, 681, 682, 683, 684 | Mobile | 🇨🇲 Cameroun |
| **ORANGE** | 655, 656, 657, 658, 659, 690, 691, 692, 693 | Mobile | 🇨🇲 Cameroun |
| **CAMTEL** | 222, 233, 242, 243, 244, 245, 246 | Fixe/Mobile | 🇨🇲 Cameroun |
| **NEXTTEL** | 66 | Mobile | 🇨🇲 Cameroun |
| **SENEGAL_ORANGE** | 70, 76, 77, 78, 79 | Mobile | 🇸🇳 Sénégal |
| **SENEGAL_TIGO** | 76, 77 | Mobile | 🇸🇳 Sénégal |
| **SENEGAL_EXPRESSO** | 75, 76, 77, 78 | Mobile | 🇸🇳 Sénégal |

## 🔧 API Reference

### `detectOperator(phone: string): Operator`
Détecte l'opérateur mobile à partir d'un numéro de téléphone camerounais.

**Paramètres:**
- `phone` (string): Le numéro de téléphone (avec ou sans +237)

**Retourne:**
- `Operator`: L'opérateur détecté ou "Unknown"

### `isValidNumber(phone: string): boolean`
Valide si un numéro de téléphone camerounais est valide.

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
type Operator = "MTN" | "ORANGE" | "CAMTEL" | "NEXTTEL" | "Unknown";
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

- ✅ **Détection automatique** des opérateurs camerounais
- ✅ **Validation complète** des numéros de téléphone
- ✅ **Support TypeScript** avec types complets
- ✅ **Formatage automatique** des numéros
- ✅ **Informations détaillées** sur chaque numéro
- ✅ **Gestion des préfixes** pour chaque opérateur
- ✅ **Tests complets** pour toutes les fonctionnalités
- ✅ **Documentation complète** en français et anglais
- ✅ **Compatibilité** Node.js et navigateurs

## 🌍 Cas d'usage

- **Applications web** nécessitant la validation de numéros camerounais
- **Formulaires** avec vérification automatique d'opérateur
- **Systèmes de SMS** avec routage par opérateur
- **Analytics** sur l'utilisation des opérateurs
- **Validation** de numéros dans les bases de données

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

- Tous les opérateurs télécoms camerounais
- La communauté développeur camerounaise
- Tous les contributeurs open-source

---

**Made with ❤️ in Cameroon 🇨🇲**
