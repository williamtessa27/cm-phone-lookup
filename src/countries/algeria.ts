// src/countries/algeria.ts
// Logique spécifique à l'Algérie

import { ALGERIA_OPERATORS, AlgeriaOperator } from '../operators/algeria';
import { CountryConfig } from './types';

export const ALGERIA_CONFIG: CountryConfig = {
  countryCode: '213',
  operators: ALGERIA_OPERATORS,
  validation: {
    // Format Algérie : 8-9 chiffres après le code pays
    // Exemples: +213 5 12 34 56 78 (9 chiffres), +213 77 123 4567 (9 chiffres)
    // Pattern: [5-9]xxxxxxxx (9 chiffres sans le 0 initial)
    mobile: /^[5-9][0-9]{8}$/,
    totalLength: 9, // Longueur requise
  },
  formatting: {
    pattern: 'XXX XXX XXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur algérien
 */
export function detectAlgeriaOperator(localNumber: string): AlgeriaOperator | 'Unknown' {
  // Retire le 0 initial s'il existe pour la comparaison
  const numberForComparison = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  
  // Mobilis: série 5 et 9
  if (numberForComparison.startsWith('5') || numberForComparison.startsWith('9')) {
    return 'ALGERIA_MOBILIS';
  }
  
  // Ooredoo: séries 77, 78, 79 (vérifier en premier car plus spécifique)
  if (numberForComparison.startsWith('77') || numberForComparison.startsWith('78') || numberForComparison.startsWith('79')) {
    return 'ALGERIA_OOREDOO';
  }
  
  // Djezzy: séries 65, 66, 67, 7, 8
  if (numberForComparison.startsWith('65') || numberForComparison.startsWith('66') || 
      numberForComparison.startsWith('67') || numberForComparison.startsWith('7') || 
      numberForComparison.startsWith('8')) {
    return 'ALGERIA_DJEZZY';
  }
  
  return 'Unknown';
}

/**
 * Valide un numéro algérien
 */
export function validateAlgeriaNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '213') return false;
  
  const local = extractLocalNumber(cleanNumber, '213');
  // Accepte avec ou sans le 0 initial
  const normalizedLocal = local.startsWith('0') ? local.substring(1) : local;
  
  return ALGERIA_CONFIG.validation.mobile.test(normalizedLocal);
}

/**
 * Formate un numéro algérien
 */
export function formatAlgeriaNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '213') return cleanNumber;
  
  let local = extractLocalNumber(cleanNumber, '213');
  // Normalise en retirant le 0 initial s'il existe
  local = local.startsWith('0') ? local.substring(1) : local;
  
  if (local.length >= 8 && local.length <= 9) {
    if (local.length === 8) {
      return `+213 ${local.slice(0, 1)} ${local.slice(1, 3)} ${local.slice(3, 5)} ${local.slice(5, 7)} ${local.slice(7)}`;
    } else if (local.length === 9) {
      return `+213 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
    }
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile algérien
 */
export function isAlgeriaMobile(localNumber: string): boolean {
  const normalizedLocal = localNumber.startsWith('0') ? localNumber.substring(1) : localNumber;
  return ALGERIA_CONFIG.validation.mobile.test(normalizedLocal);
}
