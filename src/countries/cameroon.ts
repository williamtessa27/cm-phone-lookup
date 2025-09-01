// src/countries/cameroon.ts
// Logique spécifique au Cameroun

import { CAMEROON_OPERATORS, CameroonOperator } from '../operators/cameroon';
import { CountryConfig, PhoneInfo } from './types';

export const CAMEROON_CONFIG: CountryConfig = {
  countryCode: '237',
  operators: CAMEROON_OPERATORS,
  validation: {
    mobile: /^[236][0-9]{8}$/,
    fixed: /^[24][0-9]{7}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XXX XXX XXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur camerounais
 */
export function detectCameroonOperator(localNumber: string): CameroonOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(CAMEROON_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as CameroonOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro camerounais
 */
export function validateCameroonNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '237') return false;
  
  const local = extractLocalNumber(cleanNumber, '237');
  return CAMEROON_CONFIG.validation.mobile.test(local) || 
         (CAMEROON_CONFIG.validation.fixed && CAMEROON_CONFIG.validation.fixed.test(local)) || 
         false;
}

/**
 * Formate un numéro camerounais
 */
export function formatCameroonNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '237') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '237');
  if (local.length === 9) {
    return `+237 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile camerounais
 */
export function isCameroonMobile(localNumber: string): boolean {
  return CAMEROON_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Vérifie si c'est un numéro fixe camerounais
 */
export function isCameroonFixed(localNumber: string): boolean {
  return CAMEROON_CONFIG.validation.fixed ? CAMEROON_CONFIG.validation.fixed.test(localNumber) : false;
}
