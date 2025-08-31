// src/countries/ghana.ts
// Logique spécifique au Ghana

import { GHANA_OPERATORS, GhanaOperator } from '../operators/ghana';
import { CountryConfig } from './types';

export const GHANA_CONFIG: CountryConfig = {
  countryCode: '233',
  operators: GHANA_OPERATORS,
  validation: {
    mobile: /^[0-9]{9}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XXX XXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur ghanéen
 */
export function detectGhanaOperator(localNumber: string): GhanaOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(GHANA_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as GhanaOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro ghanéen
 */
export function validateGhanaNumber(cleanNumber: string): boolean {
  if (!cleanNumber.startsWith('233')) return false;
  
  const local = cleanNumber.slice(3);
  return GHANA_CONFIG.validation.mobile.test(local);
}

/**
 * Formate un numéro ghanéen
 */
export function formatGhanaNumber(cleanNumber: string): string {
  if (!cleanNumber.startsWith('233')) return cleanNumber;
  
  const local = cleanNumber.slice(3);
  if (local.length === 9) {
    return `+233 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile ghanéen
 */
export function isGhanaMobile(localNumber: string): boolean {
  return GHANA_CONFIG.validation.mobile.test(localNumber);
}
