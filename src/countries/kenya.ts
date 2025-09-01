// src/countries/kenya.ts
// Logique spécifique au Kenya

import { KENYA_OPERATORS, KenyaOperator } from '../operators/kenya';
import { CountryConfig, PhoneInfo } from './types';

export const KENYA_CONFIG: CountryConfig = {
  countryCode: '254',
  operators: KENYA_OPERATORS,
  validation: {
    mobile: /^(0[17][0-9]|01[01][0-9])[0-9]{6}$/,
    fixed: /^(0[24][0-9])[0-9]{6}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XXX XXX XXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur kenyan
 */
export function detectKenyaOperator(localNumber: string): KenyaOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(KENYA_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as KenyaOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro kenyan
 */
export function validateKenyaNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '254') return false;
  
  const local = extractLocalNumber(cleanNumber, '254');
  
  // Vérifier le format ET les préfixes d'opérateur
  const formatValid = KENYA_CONFIG.validation.mobile.test(local) || 
                     (KENYA_CONFIG.validation.fixed && KENYA_CONFIG.validation.fixed.test(local)) || 
                     false;
  if (!formatValid) return false;
  
  // Vérifier si le préfixe correspond à un opérateur connu
  const operator = detectKenyaOperator(local);
  return operator !== 'Unknown';
}

/**
 * Formate un numéro kenyan
 */
export function formatKenyaNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '254') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '254');
  if (local.length === 9) {
    return `+254 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile kenyan
 */
export function isKenyaMobile(localNumber: string): boolean {
  return KENYA_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Vérifie si c'est un numéro fixe kenyan
 */
export function isKenyaFixed(localNumber: string): boolean {
  return KENYA_CONFIG.validation.fixed ? KENYA_CONFIG.validation.fixed.test(localNumber) : false;
}
