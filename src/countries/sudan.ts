// src/countries/sudan.ts
// Logique spécifique au Soudan

import { SUDAN_OPERATORS, SudanOperator } from '../operators/sudan';
import { CountryConfig } from './types';

export const SUDAN_CONFIG: CountryConfig = {
  countryCode: '249',
  operators: SUDAN_OPERATORS,
  validation: {
    // Format Soudan : 9 chiffres après le code pays
    // Exemples: +249 91 123 4567, +249 96 234 5678
    // Pattern: (91|92|93|95|96|97|98|99)xxxxxxx
    mobile: /^(91|92|93|95|96|97|98|99)[0-9]{7}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XX XXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur soudanais
 */
export function detectSudanOperator(localNumber: string): SudanOperator | 'Unknown' {
  // Retire le 0 initial s'il existe pour la comparaison
  const numberForComparison = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  
  for (const [operator, prefixes] of Object.entries(SUDAN_OPERATORS)) {
    if (prefixes.some(prefix => numberForComparison.startsWith(prefix))) {
      return operator as SudanOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro soudanais
 */
export function validateSudanNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '249') return false;
  
  const local = extractLocalNumber(cleanNumber, '249');
  // Accepte avec ou sans le 0 initial
  const normalizedLocal = local.startsWith('0') ? local.substring(1) : local;
  
  return SUDAN_CONFIG.validation.mobile.test(normalizedLocal);
}

/**
 * Formate un numéro soudanais
 */
export function formatSudanNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '249') return cleanNumber;
  
  let local = extractLocalNumber(cleanNumber, '249');
  // Normalise en retirant le 0 initial s'il existe
  local = local.startsWith('0') ? local.substring(1) : local;
  
  if (local.length === 9) {
    return `+249 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile soudanais
 */
export function isSudanMobile(localNumber: string): boolean {
  const normalizedLocal = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  return SUDAN_CONFIG.validation.mobile.test(normalizedLocal);
}
