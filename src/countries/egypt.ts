// src/countries/egypt.ts
// Logique spécifique à l'Égypte

import { EGYPT_OPERATORS, EgyptOperator } from '../operators/egypt';
import { CountryConfig } from './types';

export const EGYPT_CONFIG: CountryConfig = {
  countryCode: '20',
  operators: EGYPT_OPERATORS,
  validation: {
    // Format égyptien : 10 chiffres après le code pays
    // Vodafone : 010 xxxx xxxx -> sans le 0 initial : 10 xxxx xxxx
    // Etisalat : 011 xxxx xxxx -> sans le 0 initial : 11 xxxx xxxx
    // Orange : 012 xxxx xxxx -> sans le 0 initial : 12 xxxx xxxx
    // WE : 015 xxxx xxxx -> sans le 0 initial : 15 xxxx xxxx
    mobile: /^(1[0125])[0-9]{8}$/,
    totalLength: 10,
  },
  formatting: {
    pattern: 'XX XXXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur égyptien
 */
export function detectEgyptOperator(localNumber: string): EgyptOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(EGYPT_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as EgyptOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro égyptien
 */
export function validateEgyptNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '20') return false;
  
  const local = extractLocalNumber(cleanNumber, '20');
  
  // Vérifier la longueur totale (10 chiffres)
  if (local.length !== 10) return false;
  
  // Vérifier le format avec regex
  const formatValid = EGYPT_CONFIG.validation.mobile.test(local);
  if (!formatValid) return false;
  
  // Vérifier si le préfixe correspond à un opérateur connu
  const operator = detectEgyptOperator(local);
  return operator !== 'Unknown';
}

/**
 * Formate un numéro égyptien
 */
export function formatEgyptNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '20') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '20');
  if (local.length === 10) {
    return `+20 ${local.slice(0, 2)} ${local.slice(2, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile égyptien
 */
export function isEgyptMobile(localNumber: string): boolean {
  return EGYPT_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Vérifie si c'est un numéro fixe égyptien
 * Note: L'Égypte a des numéros fixes mais ils ne sont pas dans cette implémentation mobile
 */
export function isEgyptFixed(localNumber: string): boolean {
  // Pour l'instant, focus sur les mobiles uniquement
  return false;
}

/**
 * Obtient des informations détaillées sur un numéro égyptien
 */
export function getEgyptNumberInfo(localNumber: string) {
  const operator = detectEgyptOperator(localNumber);
  const isValid = validateEgyptNumber(`+20${localNumber}`);
  
  return {
    operator,
    isValid,
    isMobile: isEgyptMobile(localNumber),
    isFixed: isEgyptFixed(localNumber),
    length: localNumber.length,
    prefix: localNumber.slice(0, 2)
  };
}
