// src/countries/senegal.ts
// Logique spécifique au Sénégal

import { SENEGAL_OPERATORS, SenegalOperator } from '../operators/senegal';
import { CountryConfig } from './types';

export const SENEGAL_CONFIG: CountryConfig = {
  countryCode: '221',
  operators: SENEGAL_OPERATORS,
  validation: {
    mobile: /^[0-9]{9}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XX XXX XXX XX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur sénégalais
 */
export function detectSenegalOperator(localNumber: string): SenegalOperator | 'Unknown' {
  // Priorité pour éviter les conflits
  if (localNumber.startsWith('70') || localNumber.startsWith('79')) {
    return 'SENEGAL_ORANGE';
  }
  if (localNumber.startsWith('75')) {
    return 'SENEGAL_EXPRESSO';
  }
  if (localNumber.startsWith('76') || localNumber.startsWith('77')) {
    // Priorité à ORANGE pour les préfixes partagés
    return 'SENEGAL_ORANGE';
  }
  if (localNumber.startsWith('78')) {
    return 'SENEGAL_EXPRESSO';
  }
  
  return 'Unknown';
}

/**
 * Valide un numéro sénégalais
 */
export function validateSenegalNumber(cleanNumber: string): boolean {
  if (!cleanNumber.startsWith('221')) return false;
  
  const local = cleanNumber.slice(3);
  return SENEGAL_CONFIG.validation.mobile.test(local);
}

/**
 * Formate un numéro sénégalais
 */
export function formatSenegalNumber(cleanNumber: string): string {
  if (!cleanNumber.startsWith('221')) return cleanNumber;
  
  const local = cleanNumber.slice(3);
  if (local.length === 9) {
    return `+221 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5, 8)} ${local.slice(8)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile sénégalais
 */
export function isSenegalMobile(localNumber: string): boolean {
  return SENEGAL_CONFIG.validation.mobile.test(localNumber);
}
