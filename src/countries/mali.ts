// src/countries/mali.ts
// Logique spécifique au Mali

import { MALI_OPERATORS, MaliOperator } from '../operators/mali';
import { CountryConfig } from './types';

export const MALI_CONFIG: CountryConfig = {
  countryCode: '223',
  operators: MALI_OPERATORS,
  validation: {
    // Format Mali : 8 chiffres après le code pays
    // Exemples: +223 70 12 34 56, +223 60 23 45 67
    // Pattern: [67]xxxxxxx (mobiles commencent par 6 ou 7)
    mobile: /^[67][0-9]{7}$/,
    totalLength: 8,
  },
  formatting: {
    pattern: 'XX XX XX XX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur malien
 */
export function detectMaliOperator(localNumber: string): MaliOperator | 'Unknown' {
  // Retire le 0 initial s'il existe pour la comparaison
  const numberForComparison = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  
  for (const [operator, prefixes] of Object.entries(MALI_OPERATORS)) {
    if (prefixes.some(prefix => numberForComparison.startsWith(prefix))) {
      return operator as MaliOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro malien
 */
export function validateMaliNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '223') return false;
  
  const local = extractLocalNumber(cleanNumber, '223');
  // Accepte avec ou sans le 0 initial
  const normalizedLocal = local.startsWith('0') ? local.substring(1) : local;
  
  return MALI_CONFIG.validation.mobile.test(normalizedLocal);
}

/**
 * Formate un numéro malien
 */
export function formatMaliNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '223') return cleanNumber;
  
  let local = extractLocalNumber(cleanNumber, '223');
  // Normalise en retirant le 0 initial s'il existe
  local = local.startsWith('0') ? local.substring(1) : local;
  
  if (local.length === 8) {
    return `+223 ${local.slice(0, 2)} ${local.slice(2, 4)} ${local.slice(4, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile malien
 */
export function isMaliMobile(localNumber: string): boolean {
  const normalizedLocal = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  return MALI_CONFIG.validation.mobile.test(normalizedLocal);
}
