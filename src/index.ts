// src/index.ts
// Point d'entrée principal de la librairie CM Phone Lookup

// Types et interfaces
export type Operator = 
  | 'CAMEROON_MTN'
  | 'CAMEROON_ORANGE'
  | 'CAMEROON_CAMTEL'
  | 'CAMEROON_NEXTTEL'
  | 'SENEGAL_ORANGE'
  | 'SENEGAL_TIGO'
  | 'SENEGAL_EXPRESSO'
  | 'IVORY_COAST_ORANGE'
  | 'IVORY_COAST_MTN'
  | 'IVORY_COAST_MOOV'
  | 'IVORY_COAST_TELECOM'
  | 'Unknown';

export interface PhoneInfo {
  operator: Operator;
  isValid: boolean;
  countryCode: string;
  localNumber: string;
  formattedNumber: string;
  isMobile: boolean;
  isFixed: boolean;
  length: number;
}

// Imports des modules pays
import { detectCameroonOperator, validateCameroonNumber, formatCameroonNumber, isCameroonMobile, isCameroonFixed } from './countries/cameroon';
import { detectSenegalOperator, validateSenegalNumber, formatSenegalNumber, isSenegalMobile } from './countries/senegal';
import { detectIvoryCoastOperator, validateIvoryCoastNumber, formatIvoryCoastNumber, isIvoryCoastMobile } from './countries/ivory-coast';
import { cleanPhoneNumber, detectCountryCode, extractLocalNumber } from './utils/validation';

// Imports des opérateurs
import { CAMEROON_OPERATORS } from './operators/cameroon';
import { SENEGAL_OPERATORS } from './operators/senegal';
import { IVORY_COAST_OPERATORS } from './operators/ivory-coast';

// Objet unifié des préfixes pour la compatibilité
const prefixes: Record<Operator, string[]> = {
  CAMEROON_MTN: [...CAMEROON_OPERATORS.CAMEROON_MTN],
  CAMEROON_ORANGE: [...CAMEROON_OPERATORS.CAMEROON_ORANGE],
  CAMEROON_CAMTEL: [...CAMEROON_OPERATORS.CAMEROON_CAMTEL],
  CAMEROON_NEXTTEL: [...CAMEROON_OPERATORS.CAMEROON_NEXTTEL],
  SENEGAL_ORANGE: [...SENEGAL_OPERATORS.SENEGAL_ORANGE],
  SENEGAL_TIGO: [...SENEGAL_OPERATORS.SENEGAL_TIGO],
  SENEGAL_EXPRESSO: [...SENEGAL_OPERATORS.SENEGAL_EXPRESSO],
  IVORY_COAST_ORANGE: [...IVORY_COAST_OPERATORS.IVORY_COAST_ORANGE],
  IVORY_COAST_MTN: [...IVORY_COAST_OPERATORS.IVORY_COAST_MTN],
  IVORY_COAST_MOOV: [...IVORY_COAST_OPERATORS.IVORY_COAST_MOOV],
  IVORY_COAST_TELECOM: [...IVORY_COAST_OPERATORS.IVORY_COAST_TELECOM],
  Unknown: [],
};

/**
 * Détecte l'opérateur à partir d'un numéro de téléphone
 * @param phone - Le numéro de téléphone
 * @returns L'opérateur détecté ou "Unknown"
 */
export function detectOperator(phone: string): Operator {
  const clean = cleanPhoneNumber(phone);
  const countryCode = detectCountryCode(clean);
  
  if (!countryCode) return 'Unknown';
  
  const local = extractLocalNumber(clean, countryCode);
  
  // Détecter l'opérateur selon le pays
  switch (countryCode) {
    case '237':
      return detectCameroonOperator(local) as Operator;
    case '221':
      return detectSenegalOperator(local) as Operator;
    case '225':
      return detectIvoryCoastOperator(local) as Operator;
    default:
      return 'Unknown';
  }
}

/**
 * Valide si un numéro de téléphone est valide
 * @param phone - Le numéro de téléphone à valider
 * @returns true si le numéro est valide, false sinon
 */
export function isValidNumber(phone: string): boolean {
  const clean = cleanPhoneNumber(phone);
  const countryCode = detectCountryCode(clean);
  
  if (!countryCode) return false;
  
  switch (countryCode) {
    case '237':
      return validateCameroonNumber(clean);
    case '221':
      return validateSenegalNumber(clean);
    case '225':
      return validateIvoryCoastNumber(clean);
    default:
      return false;
  }
}

/**
 * Obtient des informations complètes sur un numéro de téléphone
 * @param phone - Le numéro de téléphone
 * @returns Un objet PhoneInfo avec toutes les informations
 */
export function getPhoneInfo(phone: string): PhoneInfo {
  const clean = cleanPhoneNumber(phone);
  const countryCode = detectCountryCode(clean);
  const isValid = isValidNumber(phone);
  
  let local = '';
  let countryCodeStr = '+237';
  
  if (countryCode) {
    local = extractLocalNumber(clean, countryCode);
    countryCodeStr = `+${countryCode}`;
  } else {
    local = clean;
  }
  
  const operator = detectOperator(phone);
  
  return {
    operator,
    isValid,
    countryCode: countryCodeStr,
    localNumber: local,
    formattedNumber: formatPhoneNumber(phone),
    isMobile: isMobileNumber(local, countryCode),
    isFixed: isFixedNumber(local, countryCode),
    length: local.length,
  };
}

/**
 * Formate un numéro de téléphone en format lisible
 * @param phone - Le numéro de téléphone
 * @returns Le numéro formaté avec espaces
 */
export function formatPhoneNumber(phone: string): string {
  const clean = cleanPhoneNumber(phone);
  const countryCode = detectCountryCode(clean);
  
  if (!countryCode) return phone;
  
  switch (countryCode) {
    case '237':
      return formatCameroonNumber(clean);
    case '221':
      return formatSenegalNumber(clean);
    case '225':
      return formatIvoryCoastNumber(clean);
    default:
      return phone;
  }
}

/**
 * Vérifie si un numéro local est un numéro mobile
 * @param local - Le numéro local
 * @param countryCode - Le code pays
 * @returns true si c'est un numéro mobile
 */
function isMobileNumber(local: string, countryCode: string | null): boolean {
  if (!countryCode) return false;
  
  switch (countryCode) {
    case '237':
      return isCameroonMobile(local);
    case '221':
      return isSenegalMobile(local);
    case '225':
      return isIvoryCoastMobile(local);
    default:
      return false;
  }
}

/**
 * Vérifie si un numéro local est un numéro fixe
 * @param local - Le numéro local
 * @param countryCode - Le code pays
 * @returns true si c'est un numéro fixe
 */
function isFixedNumber(local: string, countryCode: string | null): boolean {
  if (!countryCode) return false;
  
  switch (countryCode) {
    case '237':
      return isCameroonFixed(local);
    default:
      return false; // Seul le Cameroun a des numéros fixes pour l'instant
  }
}

/**
 * Obtient tous les préfixes d'un opérateur spécifique
 * @param operator - L'opérateur
 * @returns Liste des préfixes de l'opérateur
 */
export function getOperatorPrefixes(operator: Operator): string[] {
  return prefixes[operator] || [];
}

/**
 * Obtient la liste de tous les opérateurs supportés
 * @returns Liste de tous les opérateurs
 */
export function getSupportedOperators(): Operator[] {
  return Object.keys(prefixes).filter(op => op !== 'Unknown') as Operator[];
}

/**
 * Vérifie si un préfixe appartient à un opérateur spécifique
 * @param prefix - Le préfixe à vérifier
 * @param operator - L'opérateur
 * @returns true si le préfixe appartient à l'opérateur
 */
export function isPrefixForOperator(
  prefix: string,
  operator: Operator
): boolean {
  return prefixes[operator]?.includes(prefix) || false;
}
