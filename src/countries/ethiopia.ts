// src/countries/ethiopia.ts
// Logique spécifique à l'Éthiopie

import { ETHIOPIA_OPERATORS, EthiopiaOperator } from '../operators/ethiopia';
import { CountryConfig } from './types';

export const ETHIOPIA_CONFIG: CountryConfig = {
  countryCode: '251',
  operators: ETHIOPIA_OPERATORS,
  validation: {
    // Format éthiopien : 9 chiffres après le code pays
    // Ethio Telecom : 09x xxx xxxx -> sans le 0 initial : 9x xxx xxxx
    // Safaricom : 07x xxx xxxx -> sans le 0 initial : 7x xxx xxxx
    mobile: /^([79][0-9])[0-9]{7}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XX XXX XXXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur éthiopien
 */
export function detectEthiopiaOperator(localNumber: string): EthiopiaOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(ETHIOPIA_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as EthiopiaOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro éthiopien
 */
export function validateEthiopiaNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '251') return false;
  
  const local = extractLocalNumber(cleanNumber, '251');
  
  // Vérifier la longueur totale (9 chiffres)
  if (local.length !== 9) return false;
  
  // Vérifier le format avec regex
  const formatValid = ETHIOPIA_CONFIG.validation.mobile.test(local);
  if (!formatValid) return false;
  
  // Vérifier si le préfixe correspond à un opérateur connu
  const operator = detectEthiopiaOperator(local);
  return operator !== 'Unknown';
}

/**
 * Formate un numéro éthiopien
 */
export function formatEthiopiaNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '251') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '251');
  if (local.length === 9) {
    return `+251 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile éthiopien
 */
export function isEthiopiaMobile(localNumber: string): boolean {
  return ETHIOPIA_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Vérifie si c'est un numéro fixe éthiopien
 * Note: L'Éthiopie n'a pas de distinction claire fixe/mobile dans ce système
 */
export function isEthiopiaFixed(localNumber: string): boolean {
  // Pour l'instant, pas de numéros fixes spécifiques identifiés
  return false;
}

/**
 * Obtient des informations détaillées sur un numéro éthiopien
 */
export function getEthiopiaNumberInfo(localNumber: string) {
  const operator = detectEthiopiaOperator(localNumber);
  const isValid = validateEthiopiaNumber(`+251${localNumber}`);
  
  return {
    operator,
    isValid,
    isMobile: isEthiopiaMobile(localNumber),
    isFixed: isEthiopiaFixed(localNumber),
    length: localNumber.length,
    prefix: localNumber.slice(0, 2)
  };
}
