// src/countries/drc.ts
// Logique spécifique à la République Démocratique du Congo (RDC)

import { DRC_OPERATORS, DRCOperator } from '../operators/drc';
import { CountryConfig } from './types';

export const DRC_CONFIG: CountryConfig = {
  countryCode: '243',
  operators: DRC_OPERATORS,
  validation: {
    // Format RDC : 9 chiffres après le code pays
    // Exemples: +243 81 234 5678, +243 97 123 4567
    // Pattern: 0[89]xxxxxxxx (avec le 0 initial) ou [89]xxxxxxx (sans le 0)
    mobile: /^[89][0-9]{8}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XX XXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur congolais (RDC)
 */
export function detectDRCOperator(localNumber: string): DRCOperator | 'Unknown' {
  // Retire le 0 initial s'il existe pour la comparaison
  const numberForComparison = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  
  for (const [operator, prefixes] of Object.entries(DRC_OPERATORS)) {
    if (prefixes.some(prefix => numberForComparison.startsWith(prefix))) {
      return operator as DRCOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro congolais (RDC)
 */
export function validateDRCNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '243') return false;
  
  const local = extractLocalNumber(cleanNumber, '243');
  // Accepte avec ou sans le 0 initial
  const normalizedLocal = local.startsWith('0') ? local.substring(1) : local;
  
  return DRC_CONFIG.validation.mobile.test(normalizedLocal);
}

/**
 * Formate un numéro congolais (RDC)
 */
export function formatDRCNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '243') return cleanNumber;
  
  let local = extractLocalNumber(cleanNumber, '243');
  // Normalise en retirant le 0 initial s'il existe
  local = local.startsWith('0') ? local.substring(1) : local;
  
  if (local.length === 8) {
    return `+243 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
  } else if (local.length === 9) {
    return `+243 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile congolais (RDC)
 */
export function isDRCMobile(localNumber: string): boolean {
  const normalizedLocal = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  return DRC_CONFIG.validation.mobile.test(normalizedLocal);
}
