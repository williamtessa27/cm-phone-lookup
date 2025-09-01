// src/countries/morocco.ts
// Logique spécifique au Maroc

import { MOROCCO_OPERATORS, MoroccoOperator } from '../operators/morocco';
import { CountryConfig } from './types';

export const MOROCCO_CONFIG: CountryConfig = {
  countryCode: '212',
  operators: MOROCCO_OPERATORS,
  validation: {
    mobile: /^(6|7)[0-9]{8}$/,
    fixed: /^(0[1234])[0-9]{7}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XXX XXX XXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur marocain
 */
export function detectMoroccoOperator(localNumber: string): MoroccoOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(MOROCCO_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as MoroccoOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro marocain
 */
export function validateMoroccoNumber(phoneNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(phoneNumber);
  if (countryCode !== '212') return false;
  
  const localNumber = extractLocalNumber(phoneNumber, '212');
  if (!localNumber) return false;
  
  // Vérifier si c'est un préfixe d'opérateur valide
  const operator = detectMoroccoOperator(localNumber);
  if (operator === 'Unknown') return false;
  
  return MOROCCO_CONFIG.validation.mobile.test(localNumber) || 
         (MOROCCO_CONFIG.validation.fixed ? MOROCCO_CONFIG.validation.fixed.test(localNumber) : false);
}

/**
 * Formate un numéro marocain
 */
export function formatMoroccoNumber(phoneNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(phoneNumber);
  if (countryCode !== '212') return phoneNumber;
  
  const localNumber = extractLocalNumber(phoneNumber, '212');
  if (!localNumber || localNumber.length !== 9) return phoneNumber;
  
  return `+212 ${localNumber.slice(0, 3)} ${localNumber.slice(3, 6)} ${localNumber.slice(6)}`;
}

/**
 * Vérifie si c'est un numéro mobile marocain
 */
export function isMoroccoMobile(localNumber: string): boolean {
  return MOROCCO_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Vérifie si c'est un numéro fixe marocain
 */
export function isMoroccoFixed(localNumber: string): boolean {
  return MOROCCO_CONFIG.validation.fixed ? MOROCCO_CONFIG.validation.fixed.test(localNumber) : false;
}
