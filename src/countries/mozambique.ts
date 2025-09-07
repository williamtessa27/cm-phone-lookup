// src/countries/mozambique.ts
// Logique spécifique au Mozambique

import { MOZAMBIQUE_OPERATORS, MozambiqueOperator } from '../operators/mozambique';
import { CountryConfig } from './types';

export const MOZAMBIQUE_CONFIG: CountryConfig = {
  countryCode: '258',
  operators: MOZAMBIQUE_OPERATORS,
  validation: {
    // Format Mozambique : 9 chiffres après le code pays
    // Exemples: +258 82 123 4567, +258 86 234 5678
    // Pattern: (82|83|84|86|87)xxxxxxx
    mobile: /^(82|83|84|86|87)[0-9]{7}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XX XXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur mozambicain
 */
export function detectMozambiqueOperator(localNumber: string): MozambiqueOperator | 'Unknown' {
  // Retire le 0 initial s'il existe pour la comparaison
  const numberForComparison = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  
  for (const [operator, prefixes] of Object.entries(MOZAMBIQUE_OPERATORS)) {
    if (prefixes.some(prefix => numberForComparison.startsWith(prefix))) {
      return operator as MozambiqueOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro mozambicain
 */
export function validateMozambiqueNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '258') return false;
  
  const local = extractLocalNumber(cleanNumber, '258');
  // Accepte avec ou sans le 0 initial
  const normalizedLocal = local.startsWith('0') ? local.substring(1) : local;
  
  return MOZAMBIQUE_CONFIG.validation.mobile.test(normalizedLocal);
}

/**
 * Formate un numéro mozambicain
 */
export function formatMozambiqueNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '258') return cleanNumber;
  
  let local = extractLocalNumber(cleanNumber, '258');
  // Normalise en retirant le 0 initial s'il existe
  local = local.startsWith('0') ? local.substring(1) : local;
  
  if (local.length === 9) {
    return `+258 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile mozambicain
 */
export function isMozambiqueMobile(localNumber: string): boolean {
  const normalizedLocal = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  return MOZAMBIQUE_CONFIG.validation.mobile.test(normalizedLocal);
}
