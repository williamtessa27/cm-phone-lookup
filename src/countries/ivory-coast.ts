// src/countries/ivory-coast.ts
// Logique spécifique à la Côte d'Ivoire

import { IVORY_COAST_OPERATORS, IvoryCoastOperator } from '../operators/ivory-coast';
import { CountryConfig } from './types';

export const IVORY_COAST_CONFIG: CountryConfig = {
  countryCode: '225',
  operators: IVORY_COAST_OPERATORS,
  validation: {
    mobile: /^[0-9]{8}$/,
    totalLength: 8,
  },
  formatting: {
    pattern: 'XX XX XX XX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur ivoirien
 */
export function detectIvoryCoastOperator(localNumber: string): IvoryCoastOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(IVORY_COAST_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as IvoryCoastOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro ivoirien
 */
export function validateIvoryCoastNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '225') return false;
  
  const local = extractLocalNumber(cleanNumber, '225');
  
  // Vérifier le format ET les préfixes d'opérateur
  const formatValid = IVORY_COAST_CONFIG.validation.mobile.test(local);
  if (!formatValid) return false;
  
  // Vérifier si le préfixe correspond à un opérateur connu
  const operator = detectIvoryCoastOperator(local);
  return operator !== 'Unknown';
}

/**
 * Formate un numéro ivoirien
 */
export function formatIvoryCoastNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '225') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '225');
  if (local.length === 8) {
    return `+225 ${local.slice(0, 2)} ${local.slice(2, 4)} ${local.slice(4, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile ivoirien
 */
export function isIvoryCoastMobile(localNumber: string): boolean {
  return IVORY_COAST_CONFIG.validation.mobile.test(localNumber);
}
