// src/countries/south-sudan.ts
// Logique spécifique au Soudan du Sud

import { SOUTH_SUDAN_OPERATORS, SouthSudanOperator } from '../operators/south-sudan';
import { CountryConfig, CountryCode } from './types';

export const SOUTH_SUDAN_CONFIG: CountryConfig = {
  countryCode: '211' as CountryCode,
  operators: SOUTH_SUDAN_OPERATORS,
  validation: {
    // Format Soudan du Sud : 9 chiffres après le code pays
    // Exemples: +211 91 123 4567, +211 92 234 5678
    // Pattern: 9xxxxxxxx (tous les mobiles commencent par 9)
    mobile: /^9[1-7][0-9]{7}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XX XXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur sud-soudanais
 */
export function detectSouthSudanOperator(localNumber: string): SouthSudanOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(SOUTH_SUDAN_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as SouthSudanOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro sud-soudanais
 */
export function validateSouthSudanNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '211') return false;
  
  const local = extractLocalNumber(cleanNumber, '211');
  
  // Vérifier la longueur totale (9 chiffres)
  if (local.length !== 9) return false;
  
  // Vérifier le format avec regex
  const formatValid = SOUTH_SUDAN_CONFIG.validation.mobile.test(local);
  if (!formatValid) return false;
  
  // Vérifier si le préfixe correspond à un opérateur connu
  const operator = detectSouthSudanOperator(local);
  return operator !== 'Unknown';
}

/**
 * Formate un numéro sud-soudanais
 */
export function formatSouthSudanNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '211') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '211');
  if (local.length === 9) {
    return `+211 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile sud-soudanais
 */
export function isSouthSudanMobile(localNumber: string): boolean {
  return SOUTH_SUDAN_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Obtient des informations détaillées sur un numéro sud-soudanais
 */
export function getSouthSudanNumberInfo(localNumber: string) {
  const operator = detectSouthSudanOperator(localNumber);
  const isValid = validateSouthSudanNumber(`+211${localNumber}`);
  
  return {
    operator,
    isValid,
    isMobile: isSouthSudanMobile(localNumber),
    isFixed: false, // Pas de numéros fixes spécifiques identifiés pour le Soudan du Sud
    length: localNumber.length,
    prefix: localNumber.slice(0, 2)
  };
}
