// src/countries/south-africa.ts
// Logique spécifique à l'Afrique du Sud

import { SOUTH_AFRICA_OPERATORS, SouthAfricaOperator } from '../operators/south-africa';
import { CountryConfig } from './types';

export const SOUTH_AFRICA_CONFIG: CountryConfig = {
  countryCode: '27',
  operators: SOUTH_AFRICA_OPERATORS,
  validation: {
    mobile: /^(8[0-9]|7[0-9])[0-9]{7}$/,
    fixed: /^(0[12][0-9])[0-9]{7}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XXX XXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur sud-africain
 */
export function detectSouthAfricaOperator(localNumber: string): SouthAfricaOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(SOUTH_AFRICA_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as SouthAfricaOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro sud-africain
 */
export function validateSouthAfricaNumber(phoneNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(phoneNumber);
  if (countryCode !== '27') return false;
  
  const localNumber = extractLocalNumber(phoneNumber, '27');
  if (!localNumber) return false;
  
  // Vérifier si c'est un préfixe d'opérateur valide
  const operator = detectSouthAfricaOperator(localNumber);
  if (operator === 'Unknown') return false;
  
  return SOUTH_AFRICA_CONFIG.validation.mobile.test(localNumber) || 
         (SOUTH_AFRICA_CONFIG.validation.fixed ? SOUTH_AFRICA_CONFIG.validation.fixed.test(localNumber) : false);
}

/**
 * Formate un numéro sud-africain
 */
export function formatSouthAfricaNumber(phoneNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(phoneNumber);
  if (countryCode !== '27') return phoneNumber;
  
  const localNumber = extractLocalNumber(phoneNumber, '27');
  if (!localNumber || localNumber.length !== 9) return phoneNumber;
  
  return `+27 ${localNumber.slice(0, 3)} ${localNumber.slice(3, 6)} ${localNumber.slice(6)}`;
}

/**
 * Vérifie si c'est un numéro mobile sud-africain
 */
export function isSouthAfricaMobile(localNumber: string): boolean {
  return SOUTH_AFRICA_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Vérifie si c'est un numéro fixe sud-africain
 */
export function isSouthAfricaFixed(localNumber: string): boolean {
  return SOUTH_AFRICA_CONFIG.validation.fixed ? SOUTH_AFRICA_CONFIG.validation.fixed.test(localNumber) : false;
}
