// src/countries/south-africa.ts
// Logique spécifique à l'Afrique du Sud

import { SOUTH_AFRICA_OPERATORS, SouthAfricaOperator } from '../operators/south-africa';
import { CountryConfig, PhoneInfo } from './types';

export const SOUTH_AFRICA_CONFIG: CountryConfig = {
  countryCode: '27',
  operators: SOUTH_AFRICA_OPERATORS,
  validation: {
    mobile: /^(0[678][0-9]|06[0-9][0-9]|07[01][0-9]|08[0-9][0-9])[0-9]{6}$/,
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
export function validateSouthAfricaNumber(cleanNumber: string): boolean {
  if (!cleanNumber.startsWith('27')) return false;
  
  const local = cleanNumber.slice(2);
  return SOUTH_AFRICA_CONFIG.validation.mobile.test(local) || 
         (SOUTH_AFRICA_CONFIG.validation.fixed && SOUTH_AFRICA_CONFIG.validation.fixed.test(local)) || 
         false;
}

/**
 * Formate un numéro sud-africain
 */
export function formatSouthAfricaNumber(cleanNumber: string): string {
  if (!cleanNumber.startsWith('27')) return cleanNumber;
  
  const local = cleanNumber.slice(2);
  if (local.length === 9) {
    return `+27 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
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
