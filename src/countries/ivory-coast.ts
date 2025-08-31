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
 * Détecte l'opérateur ivoirien avec priorité pour éviter les conflits
 */
export function detectIvoryCoastOperator(localNumber: string): IvoryCoastOperator | 'Unknown' {
  // Priorité 1: ORANGE (préfixe 27 - fixe)
  if (localNumber.startsWith('27')) {
    return 'IVORY_COAST_ORANGE';
  }
  
  // Priorité 2: ORANGE (préfixes spécifiques)
  if (localNumber.startsWith('01') || localNumber.startsWith('49')) {
    return 'IVORY_COAST_ORANGE';
  }
  
  // Priorité 3: MTN (préfixes spécifiques)
  if (localNumber.startsWith('08') || localNumber.startsWith('09') || 
      localNumber.startsWith('50') || localNumber.startsWith('51') || localNumber.startsWith('52')) {
    return 'IVORY_COAST_MTN';
  }
  
  // Priorité 4: MOOV (préfixes spécifiques)
  if (localNumber.startsWith('06') || localNumber.startsWith('55') || localNumber.startsWith('56')) {
    return 'IVORY_COAST_MOOV';
  }
  
  // Priorité 5: Préfixes partagés (05, 07, 25) - priorité à ORANGE
  if (localNumber.startsWith('05') || localNumber.startsWith('07') || localNumber.startsWith('25')) {
    return 'IVORY_COAST_ORANGE';
  }
  
  return 'Unknown';
}

/**
 * Valide un numéro ivoirien
 */
export function validateIvoryCoastNumber(cleanNumber: string): boolean {
  if (!cleanNumber.startsWith('225')) return false;
  
  const local = cleanNumber.slice(3);
  return IVORY_COAST_CONFIG.validation.mobile.test(local);
}

/**
 * Formate un numéro ivoirien
 */
export function formatIvoryCoastNumber(cleanNumber: string): string {
  if (!cleanNumber.startsWith('225')) return cleanNumber;
  
  const local = cleanNumber.slice(3);
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
