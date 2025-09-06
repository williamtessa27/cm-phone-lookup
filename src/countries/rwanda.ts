// src/countries/rwanda.ts
// Logique spécifique au Rwanda

import { RWANDA_OPERATORS, RwandaOperator } from '../operators/rwanda';
import { CountryConfig } from './types';

export const RWANDA_CONFIG: CountryConfig = {
  countryCode: '250',
  operators: RWANDA_OPERATORS,
  validation: {
    // Format Rwanda : 9 chiffres après le code pays
    // Exemples: +250 78 123 4567, +250 72 234 5678
    // Pattern: 7xxxxxxxx (tous les mobiles commencent par 7)
    mobile: /^7[0-9]{8}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XXX XXX XXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur rwandais
 */
export function detectRwandaOperator(localNumber: string): RwandaOperator | 'Unknown' {
  // Retire le 0 initial s'il existe pour la comparaison
  const numberForComparison = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  
  for (const [operator, prefixes] of Object.entries(RWANDA_OPERATORS)) {
    if (prefixes.some(prefix => numberForComparison.startsWith(prefix))) {
      return operator as RwandaOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro rwandais
 */
export function validateRwandaNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '250') return false;
  
  const local = extractLocalNumber(cleanNumber, '250');
  // Accepte avec ou sans le 0 initial
  const normalizedLocal = local.startsWith('0') ? local.substring(1) : local;
  
  return RWANDA_CONFIG.validation.mobile.test(normalizedLocal);
}

/**
 * Formate un numéro rwandais
 */
export function formatRwandaNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '250') return cleanNumber;
  
  let local = extractLocalNumber(cleanNumber, '250');
  // Normalise en retirant le 0 initial s'il existe
  local = local.startsWith('0') ? local.substring(1) : local;
  
  if (local.length === 9) {
    return `+250 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile rwandais
 */
export function isRwandaMobile(localNumber: string): boolean {
  const normalizedLocal = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  return RWANDA_CONFIG.validation.mobile.test(normalizedLocal);
}
