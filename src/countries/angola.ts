// src/countries/angola.ts
// Logique spécifique à l'Angola

import { ANGOLA_OPERATORS, AngolaOperator } from '../operators/angola';
import { CountryConfig, CountryCode } from './types';

export const ANGOLA_CONFIG: CountryConfig = {
  countryCode: '244' as CountryCode,
  operators: ANGOLA_OPERATORS,
  validation: {
    // Format Angola : 9 chiffres après le code pays
    // Exemples: +244 91 123 4567, +244 93 234 5678
    // Pattern: 9xxxxxxxx (tous les mobiles commencent par 9)
    mobile: /^9[1-5][0-9]{7}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XX XXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur angolais
 */
export function detectAngolaOperator(localNumber: string): AngolaOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(ANGOLA_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as AngolaOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro angolais
 */
export function validateAngolaNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '244') return false;
  
  const local = extractLocalNumber(cleanNumber, '244');
  
  // Vérifier la longueur totale (9 chiffres)
  if (local.length !== 9) return false;
  
  // Vérifier le format avec regex
  const formatValid = ANGOLA_CONFIG.validation.mobile.test(local);
  if (!formatValid) return false;
  
  // Vérifier si le préfixe correspond à un opérateur connu
  const operator = detectAngolaOperator(local);
  return operator !== 'Unknown';
}

/**
 * Formate un numéro angolais
 */
export function formatAngolaNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '244') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '244');
  if (local.length === 9) {
    return `+244 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile angolais
 */
export function isAngolaMobile(localNumber: string): boolean {
  return ANGOLA_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Obtient des informations détaillées sur un numéro angolais
 */
export function getAngolaNumberInfo(localNumber: string) {
  const operator = detectAngolaOperator(localNumber);
  const isValid = validateAngolaNumber(`+244${localNumber}`);
  
  return {
    operator,
    isValid,
    isMobile: isAngolaMobile(localNumber),
    isFixed: false, // Pas de numéros fixes spécifiques identifiés pour l'Angola
    length: localNumber.length,
    prefix: localNumber.slice(0, 2)
  };
}
