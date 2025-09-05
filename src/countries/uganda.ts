// src/countries/uganda.ts
// Logique spécifique à l'Ouganda

import { UGANDA_OPERATORS, UgandaOperator } from '../operators/uganda';
import { CountryConfig } from './types';

export const UGANDA_CONFIG: CountryConfig = {
  countryCode: '256',
  operators: UGANDA_OPERATORS,
  validation: {
    // Format Ouganda : 9 chiffres après le code pays
    // Exemples: +256 70 123 4567, +256 77 234 5678
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
 * Détecte l'opérateur ougandais
 */
export function detectUgandaOperator(localNumber: string): UgandaOperator | 'Unknown' {
  // Retire le 0 initial s'il existe pour la comparaison
  const numberForComparison = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  
  for (const [operator, prefixes] of Object.entries(UGANDA_OPERATORS)) {
    if (prefixes.some(prefix => numberForComparison.startsWith(prefix))) {
      return operator as UgandaOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro ougandais
 */
export function validateUgandaNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '256') return false;
  
  const local = extractLocalNumber(cleanNumber, '256');
  // Accepte avec ou sans le 0 initial
  const normalizedLocal = local.startsWith('0') ? local.substring(1) : local;
  
  return UGANDA_CONFIG.validation.mobile.test(normalizedLocal);
}

/**
 * Formate un numéro ougandais
 */
export function formatUgandaNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '256') return cleanNumber;
  
  let local = extractLocalNumber(cleanNumber, '256');
  // Normalise en retirant le 0 initial s'il existe
  local = local.startsWith('0') ? local.substring(1) : local;
  
  if (local.length === 9) {
    return `+256 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile ougandais
 */
export function isUgandaMobile(localNumber: string): boolean {
  const normalizedLocal = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  return UGANDA_CONFIG.validation.mobile.test(normalizedLocal);
}
