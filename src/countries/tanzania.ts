// src/countries/tanzania.ts
// Logique spécifique à la Tanzanie

import { TANZANIA_OPERATORS, TanzaniaOperator } from '../operators/tanzania';
import { CountryConfig } from './types';

export const TANZANIA_CONFIG: CountryConfig = {
  countryCode: '255',
  operators: TANZANIA_OPERATORS,
  validation: {
    // Format tanzanien : 9 chiffres après le code pays selon TCRA
    // Halotel : 061x/062x xxx xxx -> sans le 0 initial : 61x/62x xxx xxx
    // Honora : 065x/067x xxx xxx -> sans le 0 initial : 65x/67x xxx xxx
    // Tigo : 071x xxx xxx -> sans le 0 initial : 71x xxx xxx
    // Smile : 066x xxx xxx -> sans le 0 initial : 66x xxx xxx
    // Airtel : 068x/069x/078x xxx xxx -> sans le 0 initial : 68x/69x/78x xxx xxx
    // TTCL : 073x xxx xxx -> sans le 0 initial : 73x xxx xxx
    // Vodacom : 074x/075x/076x/079x xxx xxx -> sans le 0 initial : 74x/75x/76x/79x xxx xxx
    // Zantel : 077x xxx xxx -> sans le 0 initial : 77x xxx xxx
    mobile: /^(6[1256789]|7[13456789])[0-9]{7}$/,
    totalLength: 9,
  },
  formatting: {
    pattern: 'XXX XXX XXX',
    separator: ' ',
  },
};

/**
 * Détecte l'opérateur tanzanien
 */
export function detectTanzaniaOperator(localNumber: string): TanzaniaOperator | 'Unknown' {
  for (const [operator, prefixes] of Object.entries(TANZANIA_OPERATORS)) {
    if (prefixes.some(prefix => localNumber.startsWith(prefix))) {
      return operator as TanzaniaOperator;
    }
  }
  return 'Unknown';
}

/**
 * Valide un numéro tanzanien
 */
export function validateTanzaniaNumber(cleanNumber: string): boolean {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '255') return false;
  
  const local = extractLocalNumber(cleanNumber, '255');
  
  // Vérifier la longueur totale (9 chiffres)
  if (local.length !== 9) return false;
  
  // Vérifier le format avec regex
  const formatValid = TANZANIA_CONFIG.validation.mobile.test(local);
  if (!formatValid) return false;
  
  // Vérifier si le préfixe correspond à un opérateur connu
  const operator = detectTanzaniaOperator(local);
  return operator !== 'Unknown';
}

/**
 * Formate un numéro tanzanien
 */
export function formatTanzaniaNumber(cleanNumber: string): string {
  const { detectCountryCode, extractLocalNumber } = require('../utils/validation');
  
  const countryCode = detectCountryCode(cleanNumber);
  if (countryCode !== '255') return cleanNumber;
  
  const local = extractLocalNumber(cleanNumber, '255');
  if (local.length === 9) {
    return `+255 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  return cleanNumber;
}

/**
 * Vérifie si c'est un numéro mobile tanzanien
 */
export function isTanzaniaMobile(localNumber: string): boolean {
  return TANZANIA_CONFIG.validation.mobile.test(localNumber);
}

/**
 * Vérifie si c'est un numéro fixe tanzanien
 * Note: TTCL a des blocs fixes/mobiles mais on les traite comme mobiles
 */
export function isTanzaniaFixed(localNumber: string): boolean {
  // Pour l'instant, on traite tous les numéros comme mobiles
  // TTCL a des blocs mixtes mais dans notre implémentation mobile
  return false;
}

/**
 * Obtient des informations détaillées sur un numéro tanzanien
 */
export function getTanzaniaNumberInfo(localNumber: string) {
  const operator = detectTanzaniaOperator(localNumber);
  const isValid = validateTanzaniaNumber(`+255${localNumber}`);
  
  return {
    operator,
    isValid,
    isMobile: isTanzaniaMobile(localNumber),
    isFixed: isTanzaniaFixed(localNumber),
    length: localNumber.length,
    prefix: localNumber.slice(0, 2)
  };
}
