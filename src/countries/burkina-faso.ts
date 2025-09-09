// src/countries/burkina-faso.ts
// Logique spécifique au Burkina Faso

import { BURKINA_FASO_OPERATORS, BurkinaFasoOperator } from '../operators/burkina-faso';
import { CountryConfig, CountryCode } from './types';

export const BURKINA_FASO_CONFIG: CountryConfig = {
  countryCode: '226' as CountryCode,
  operators: BURKINA_FASO_OPERATORS,
  validation: {
    // Format Burkina Faso : 8 chiffres après le code pays
    // Exemples: +226 70 12 34 56, +226 74 23 45 67
    // Pattern: 7xxxxxxx (tous les mobiles commencent par 7)
    mobile: /^7[0-6][0-9]{6}$/,
    totalLength: 8,
  },
  formatting: {
    pattern: 'XX XX XX XX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur burkinabé
 */
export function detectBurkinaFasoOperator(localNumber: string): BurkinaFasoOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(BURKINA_FASO_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as BurkinaFasoOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro burkinabé
 */
export function validateBurkinaFasoNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '226') return false;
  
  const local = extractLocalNumber(cleanNumber, '226');
  
  // Vérifier la longueur totale (8 chiffres)
  if (local.length !== 8) return false;
  
  // Vérifier le format avec regex
  const formatValid = BURKINA_FASO_CONFIG.validation.mobile.test(local);
  if (!formatValid) return false;
  
  // Vérifier si le préfixe correspond à un opérateur connu
  const operator = detectBurkinaFasoOperator(local);
  return operator !== 'Unknown';
}

/**
 * Formate un numéro burkinabé
 */
export function formatBurkinaFasoNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '226') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '226');
  if (local.length === 8) {
    return `+226 ${local.slice(0, 2)} ${local.slice(2, 4)} ${local.slice(4, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile burkinabé
 */
export function isBurkinaFasoMobile(localNumber: string): boolean {
  return BURKINA_FASO_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Obtient des informations détaillées sur un numéro burkinabé
 */
export function getBurkinaFasoNumberInfo(localNumber: string) {
  const operator = detectBurkinaFasoOperator(localNumber);
  const isValid = validateBurkinaFasoNumber(`+226${localNumber}`);
  
  return {
    operator,
    isValid,
    isMobile: isBurkinaFasoMobile(localNumber),
    isFixed: false, // Pas de numéros fixes spécifiques identifiés pour le Burkina Faso
    length: localNumber.length,
    prefix: localNumber.slice(0, 2)
  };
}
