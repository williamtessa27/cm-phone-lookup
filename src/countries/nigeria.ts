// src/countries/nigeria.ts
// Logique spécifique au Nigeria

import { NIGERIA_OPERATORS, NigeriaOperator } from '../operators/nigeria';
import { CountryConfig } from './types';

export const NIGERIA_CONFIG: CountryConfig = {
  countryCode: '234',
  operators: NIGERIA_OPERATORS,
  validation: {
    mobile: /^[0-9]{10}$/,
    totalLength: 10,
  },
  formatting: {
    pattern: 'XXXX XXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur nigérian
 */
export function detectNigeriaOperator(localNumber: string): NigeriaOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(NIGERIA_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as NigeriaOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro nigérian
 */
export function validateNigeriaNumber(cleanNumber: string): boolean {
  if (!cleanNumber.startsWith('234')) return false;
  
  const local = cleanNumber.slice(3);
  return NIGERIA_CONFIG.validation.mobile.test(local);
}

/**
 * Formate un numéro nigérian
 */
export function formatNigeriaNumber(cleanNumber: string): string {
  if (!cleanNumber.startsWith('234')) return cleanNumber;
  
  const local = cleanNumber.slice(3);
  if (local.length === 10) {
    return `+234 ${local.slice(0, 4)} ${local.slice(4, 7)} ${local.slice(7)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile nigérian
 */
export function isNigeriaMobile(localNumber: string): boolean {
  return NIGERIA_CONFIG.validation.mobile.test(localNumber);
}
