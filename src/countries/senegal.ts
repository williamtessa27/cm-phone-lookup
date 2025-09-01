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
  for (const [operator, prefixes] of Object.entries(SENEGAL_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as SenegalOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro sénégalais
 */
export function validateSenegalNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '221') return false;
  
  const local = extractLocalNumber(cleanNumber, '221');
  
  // Vérifier le format ET les préfixes d'opérateur
  const formatValid = SENEGAL_CONFIG.validation.mobile.test(local);
  if (!formatValid) return false;
  
  // Vérifier si le préfixe correspond à un opérateur connu
  const operator = detectSenegalOperator(local);
  return operator !== 'Unknown';
}

/**
 * Formate un numéro sénégalais
 */
export function formatSenegalNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '221') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '221');
  if (local.length === 9) {
    return `+221 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5, 7)} ${local.slice(7)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile sénégalais
 */
export function isSenegalMobile(localNumber: string): boolean {
  return SENEGAL_CONFIG.validation.mobile.test(localNumber);
}
