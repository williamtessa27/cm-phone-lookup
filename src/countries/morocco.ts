// src/countries/morocco.ts
// Logique spécifique au Maroc

import { MOROCCO_OPERATORS, MoroccoOperator } from '../operators/morocco';
import { CountryConfig } from './types';

export const MOROCCO_CONFIG: CountryConfig = {
  countryCode: '212',
  operators: MOROCCO_OPERATORS,
  validation: {
    mobile: /^(0[56789])[0-9]{7}$/,
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
export function validateMoroccoNumber(cleanNumber: string): boolean {
  if (!cleanNumber.startsWith('212')) return false;
  
  const local = cleanNumber.slice(3);
  return MOROCCO_CONFIG.validation.mobile.test(local) || 
         (MOROCCO_CONFIG.validation.fixed && MOROCCO_CONFIG.validation.fixed.test(local)) || 
         false;
}

/**
 * Formate un numéro marocain
 */
export function formatMoroccoNumber(cleanNumber: string): string {
  if (!cleanNumber.startsWith('212')) return cleanNumber;
  
  const local = cleanNumber.slice(3);
  if (local.length === 9) {
    return `+212 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
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
