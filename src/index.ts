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
  | 'SENEGAL_HAYO'
  | 'SENEGAL_SIRIUS'
  | 'SENEGAL_ORIGINES'
  | 'IVORY_COAST_ORANGE'
  | 'IVORY_COAST_MTN'
  | 'IVORY_COAST_MOOV'
  | 'NIGERIA_MTN'
  | 'NIGERIA_AIRTEL'
  | 'NIGERIA_GLO'
  | 'NIGERIA_9MOBILE'
  | 'NIGERIA_NTEL'
  | 'NIGERIA_SMILE'
  | 'NIGERIA_STARCOMMS'
  | 'NIGERIA_MULTILINKS'
  | 'NIGERIA_ZOOMMOBILE'
  | 'GHANA_MTN'
  | 'GHANA_VODAFONE'
  | 'GHANA_AIRTELTIGO'
  | 'GHANA_GLO'
  | 'GHANA_EXPRESSO'
  | 'KENYA_SAFARICOM'
  | 'KENYA_AIRTEL'
  | 'KENYA_TELKOM'
  | 'KENYA_FAIBA'
  | 'KENYA_EQUITEL'
  | 'SOUTH_AFRICA_VODACOM'
  | 'SOUTH_AFRICA_MTN'
  | 'SOUTH_AFRICA_CELL_C'
  | 'SOUTH_AFRICA_TELKOM'
  | 'SOUTH_AFRICA_VIRGIN_MOBILE'
  | 'MOROCCO_MAROC_TELECOM'
  | 'MOROCCO_ORANGE_MAROC'
  | 'MOROCCO_INWI'
  | 'ETHIOPIA_ETHIO_TELECOM'
  | 'ETHIOPIA_SAFARICOM'
  | 'EGYPT_VODAFONE'
  | 'EGYPT_ETISALAT'
  | 'EGYPT_ORANGE'
  | 'EGYPT_WE'
  | 'TANZANIA_HALOTEL'
  | 'TANZANIA_HONORA'
  | 'TANZANIA_TIGO'
  | 'TANZANIA_SMILE'
  | 'TANZANIA_AIRTEL'
  | 'TANZANIA_TTCL'
  | 'TANZANIA_VODACOM'
  | 'TANZANIA_ZANTEL'
  | 'DRC_VODACOM'
  | 'DRC_ORANGE'
  | 'DRC_AIRTEL'
  | 'DRC_AFRICELL'
  | 'UGANDA_AIRTEL'
  | 'UGANDA_MTN'
  | 'UGANDA_LYCAMOBILE'
  | 'RWANDA_MTN'
  | 'RWANDA_AIRTEL'
  | 'MALI_ORANGE'
  | 'MALI_MOOV'
  | 'MALI_TELECEL'
  | 'SUDAN_ZAIN'
  | 'SUDAN_MTN'
  | 'SUDAN_SUDANI'
  | 'MOZAMBIQUE_VODACOM'
  | 'MOZAMBIQUE_MOVITEL'
  | 'MOZAMBIQUE_TMCEL'
  | 'ALGERIA_MOBILIS'
  | 'ALGERIA_DJEZZY'
  | 'ALGERIA_OOREDOO'
  | 'ANGOLA_UNITEL'
  | 'ANGOLA_MOVICEL'
  | 'ANGOLA_AFRICELL'
  | 'BURKINA_FASO_ORANGE'
  | 'BURKINA_FASO_MOOV'
  | 'BURKINA_FASO_TELECEL'
  | 'SOUTH_SUDAN_MTN'
  | 'SOUTH_SUDAN_ZAIN'
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
import { detectNigeriaOperator, validateNigeriaNumber, formatNigeriaNumber, isNigeriaMobile } from './countries/nigeria';
import { detectGhanaOperator, validateGhanaNumber, formatGhanaNumber, isGhanaMobile } from './countries/ghana';
import { detectKenyaOperator, validateKenyaNumber, formatKenyaNumber, isKenyaMobile, isKenyaFixed } from './countries/kenya';
import { detectSouthAfricaOperator, validateSouthAfricaNumber, formatSouthAfricaNumber, isSouthAfricaMobile, isSouthAfricaFixed } from './countries/south-africa';
import { detectMoroccoOperator, validateMoroccoNumber, formatMoroccoNumber, isMoroccoMobile, isMoroccoFixed } from './countries/morocco';
import { detectEthiopiaOperator, validateEthiopiaNumber, formatEthiopiaNumber, isEthiopiaMobile, isEthiopiaFixed } from './countries/ethiopia';
import { detectEgyptOperator, validateEgyptNumber, formatEgyptNumber, isEgyptMobile, isEgyptFixed } from './countries/egypt';
import { detectTanzaniaOperator, validateTanzaniaNumber, formatTanzaniaNumber, isTanzaniaMobile, isTanzaniaFixed } from './countries/tanzania';
import { detectDRCOperator, validateDRCNumber, formatDRCNumber, isDRCMobile } from './countries/drc';
import { detectUgandaOperator, validateUgandaNumber, formatUgandaNumber, isUgandaMobile } from './countries/uganda';
import { detectRwandaOperator, validateRwandaNumber, formatRwandaNumber, isRwandaMobile } from './countries/rwanda';
import { detectMaliOperator, validateMaliNumber, formatMaliNumber, isMaliMobile } from './countries/mali';
import { detectSudanOperator, validateSudanNumber, formatSudanNumber, isSudanMobile } from './countries/sudan';
import { detectMozambiqueOperator, validateMozambiqueNumber, formatMozambiqueNumber, isMozambiqueMobile } from './countries/mozambique';
import { detectAlgeriaOperator, validateAlgeriaNumber, formatAlgeriaNumber, isAlgeriaMobile } from './countries/algeria';
import { detectAngolaOperator, validateAngolaNumber, formatAngolaNumber, isAngolaMobile } from './countries/angola';
import { detectBurkinaFasoOperator, validateBurkinaFasoNumber, formatBurkinaFasoNumber, isBurkinaFasoMobile } from './countries/burkina-faso';
import { detectSouthSudanOperator, validateSouthSudanNumber, formatSouthSudanNumber, isSouthSudanMobile } from './countries/south-sudan';
import { cleanPhoneNumber, detectCountryCode, extractLocalNumber } from './utils/validation';

// Imports des opérateurs
import { CAMEROON_OPERATORS } from './operators/cameroon';
import { SENEGAL_OPERATORS } from './operators/senegal';
import { IVORY_COAST_OPERATORS } from './operators/ivory-coast';
import { NIGERIA_OPERATORS } from './operators/nigeria';
import { GHANA_OPERATORS } from './operators/ghana';
import { KENYA_OPERATORS } from './operators/kenya';
import { SOUTH_AFRICA_OPERATORS } from './operators/south-africa';
import { MOROCCO_OPERATORS } from './operators/morocco';
import { ETHIOPIA_OPERATORS } from './operators/ethiopia';
import { EGYPT_OPERATORS } from './operators/egypt';
import { TANZANIA_OPERATORS } from './operators/tanzania';
import { DRC_OPERATORS } from './operators/drc';
import { UGANDA_OPERATORS } from './operators/uganda';
import { RWANDA_OPERATORS } from './operators/rwanda';
import { MALI_OPERATORS } from './operators/mali';
import { SUDAN_OPERATORS } from './operators/sudan';
import { MOZAMBIQUE_OPERATORS } from './operators/mozambique';
import { ALGERIA_OPERATORS } from './operators/algeria';
import { ANGOLA_OPERATORS } from './operators/angola';
import { BURKINA_FASO_OPERATORS } from './operators/burkina-faso';
import { SOUTH_SUDAN_OPERATORS } from './operators/south-sudan';

// Objet unifié des préfixes pour la compatibilité
const prefixes: Record<Operator, string[]> = {
  CAMEROON_MTN: [...CAMEROON_OPERATORS.CAMEROON_MTN],
  CAMEROON_ORANGE: [...CAMEROON_OPERATORS.CAMEROON_ORANGE],
  CAMEROON_CAMTEL: [...CAMEROON_OPERATORS.CAMEROON_CAMTEL],
  CAMEROON_NEXTTEL: [...CAMEROON_OPERATORS.CAMEROON_NEXTTEL],
  SENEGAL_ORANGE: [...SENEGAL_OPERATORS.SENEGAL_ORANGE],
  SENEGAL_TIGO: [...SENEGAL_OPERATORS.SENEGAL_TIGO],
  SENEGAL_EXPRESSO: [...SENEGAL_OPERATORS.SENEGAL_EXPRESSO],
  SENEGAL_HAYO: [...SENEGAL_OPERATORS.SENEGAL_HAYO],
  SENEGAL_SIRIUS: [...SENEGAL_OPERATORS.SENEGAL_SIRIUS],
  SENEGAL_ORIGINES: [...SENEGAL_OPERATORS.SENEGAL_ORIGINES],
  IVORY_COAST_ORANGE: [...IVORY_COAST_OPERATORS.IVORY_COAST_ORANGE],
  IVORY_COAST_MTN: [...IVORY_COAST_OPERATORS.IVORY_COAST_MTN],
  IVORY_COAST_MOOV: [...IVORY_COAST_OPERATORS.IVORY_COAST_MOOV],
  NIGERIA_MTN: [...NIGERIA_OPERATORS.NIGERIA_MTN],
  NIGERIA_AIRTEL: [...NIGERIA_OPERATORS.NIGERIA_AIRTEL],
  NIGERIA_GLO: [...NIGERIA_OPERATORS.NIGERIA_GLO],
  NIGERIA_9MOBILE: [...NIGERIA_OPERATORS.NIGERIA_9MOBILE],
  NIGERIA_NTEL: [...NIGERIA_OPERATORS.NIGERIA_NTEL],
  NIGERIA_SMILE: [...NIGERIA_OPERATORS.NIGERIA_SMILE],
  NIGERIA_STARCOMMS: [...NIGERIA_OPERATORS.NIGERIA_STARCOMMS],
  NIGERIA_MULTILINKS: [...NIGERIA_OPERATORS.NIGERIA_MULTILINKS],
  NIGERIA_ZOOMMOBILE: [...NIGERIA_OPERATORS.NIGERIA_ZOOMMOBILE],
  GHANA_MTN: [...GHANA_OPERATORS.GHANA_MTN],
  GHANA_VODAFONE: [...GHANA_OPERATORS.GHANA_VODAFONE],
  GHANA_AIRTELTIGO: [...GHANA_OPERATORS.GHANA_AIRTELTIGO],
  GHANA_GLO: [...GHANA_OPERATORS.GHANA_GLO],
  GHANA_EXPRESSO: [...GHANA_OPERATORS.GHANA_EXPRESSO],
  KENYA_SAFARICOM: [...KENYA_OPERATORS.KENYA_SAFARICOM],
  KENYA_AIRTEL: [...KENYA_OPERATORS.KENYA_AIRTEL],
  KENYA_TELKOM: [...KENYA_OPERATORS.KENYA_TELKOM],
  KENYA_FAIBA: [...KENYA_OPERATORS.KENYA_FAIBA],
  KENYA_EQUITEL: [...KENYA_OPERATORS.KENYA_EQUITEL],
  SOUTH_AFRICA_VODACOM: [...SOUTH_AFRICA_OPERATORS.SOUTH_AFRICA_VODACOM],
  SOUTH_AFRICA_MTN: [...SOUTH_AFRICA_OPERATORS.SOUTH_AFRICA_MTN],
  SOUTH_AFRICA_CELL_C: [...SOUTH_AFRICA_OPERATORS.SOUTH_AFRICA_CELL_C],
  SOUTH_AFRICA_TELKOM: [...SOUTH_AFRICA_OPERATORS.SOUTH_AFRICA_TELKOM],
  SOUTH_AFRICA_VIRGIN_MOBILE: [...SOUTH_AFRICA_OPERATORS.SOUTH_AFRICA_VIRGIN_MOBILE],
  MOROCCO_MAROC_TELECOM: [...MOROCCO_OPERATORS.MOROCCO_MAROC_TELECOM],
  MOROCCO_ORANGE_MAROC: [...MOROCCO_OPERATORS.MOROCCO_ORANGE_MAROC],
  MOROCCO_INWI: [...MOROCCO_OPERATORS.MOROCCO_INWI],
  ETHIOPIA_ETHIO_TELECOM: [...ETHIOPIA_OPERATORS.ETHIOPIA_ETHIO_TELECOM],
  ETHIOPIA_SAFARICOM: [...ETHIOPIA_OPERATORS.ETHIOPIA_SAFARICOM],
  EGYPT_VODAFONE: [...EGYPT_OPERATORS.EGYPT_VODAFONE],
  EGYPT_ETISALAT: [...EGYPT_OPERATORS.EGYPT_ETISALAT],
  EGYPT_ORANGE: [...EGYPT_OPERATORS.EGYPT_ORANGE],
  EGYPT_WE: [...EGYPT_OPERATORS.EGYPT_WE],
  TANZANIA_HALOTEL: [...TANZANIA_OPERATORS.TANZANIA_HALOTEL],
  TANZANIA_HONORA: [...TANZANIA_OPERATORS.TANZANIA_HONORA],
  TANZANIA_TIGO: [...TANZANIA_OPERATORS.TANZANIA_TIGO],
  TANZANIA_SMILE: [...TANZANIA_OPERATORS.TANZANIA_SMILE],
  TANZANIA_AIRTEL: [...TANZANIA_OPERATORS.TANZANIA_AIRTEL],
  TANZANIA_TTCL: [...TANZANIA_OPERATORS.TANZANIA_TTCL],
  TANZANIA_VODACOM: [...TANZANIA_OPERATORS.TANZANIA_VODACOM],
  TANZANIA_ZANTEL: [...TANZANIA_OPERATORS.TANZANIA_ZANTEL],
  DRC_VODACOM: [...DRC_OPERATORS.DRC_VODACOM],
  DRC_ORANGE: [...DRC_OPERATORS.DRC_ORANGE],
  DRC_AIRTEL: [...DRC_OPERATORS.DRC_AIRTEL],
  DRC_AFRICELL: [...DRC_OPERATORS.DRC_AFRICELL],
  UGANDA_AIRTEL: [...UGANDA_OPERATORS.UGANDA_AIRTEL],
  UGANDA_MTN: [...UGANDA_OPERATORS.UGANDA_MTN],
  UGANDA_LYCAMOBILE: [...UGANDA_OPERATORS.UGANDA_LYCAMOBILE],
  RWANDA_MTN: [...RWANDA_OPERATORS.RWANDA_MTN],
  RWANDA_AIRTEL: [...RWANDA_OPERATORS.RWANDA_AIRTEL],
  MALI_ORANGE: [...MALI_OPERATORS.MALI_ORANGE],
  MALI_MOOV: [...MALI_OPERATORS.MALI_MOOV],
  MALI_TELECEL: [...MALI_OPERATORS.MALI_TELECEL],
  SUDAN_ZAIN: [...SUDAN_OPERATORS.SUDAN_ZAIN],
  SUDAN_MTN: [...SUDAN_OPERATORS.SUDAN_MTN],
  SUDAN_SUDANI: [...SUDAN_OPERATORS.SUDAN_SUDANI],
  MOZAMBIQUE_VODACOM: [...MOZAMBIQUE_OPERATORS.MOZAMBIQUE_VODACOM],
  MOZAMBIQUE_MOVITEL: [...MOZAMBIQUE_OPERATORS.MOZAMBIQUE_MOVITEL],
  MOZAMBIQUE_TMCEL: [...MOZAMBIQUE_OPERATORS.MOZAMBIQUE_TMCEL],
  ALGERIA_MOBILIS: [...ALGERIA_OPERATORS.ALGERIA_MOBILIS],
  ALGERIA_DJEZZY: [...ALGERIA_OPERATORS.ALGERIA_DJEZZY],
  ALGERIA_OOREDOO: [...ALGERIA_OPERATORS.ALGERIA_OOREDOO],
  ANGOLA_UNITEL: [...ANGOLA_OPERATORS.ANGOLA_UNITEL],
  ANGOLA_MOVICEL: [...ANGOLA_OPERATORS.ANGOLA_MOVICEL],
  ANGOLA_AFRICELL: [...ANGOLA_OPERATORS.ANGOLA_AFRICELL],
  BURKINA_FASO_ORANGE: [...BURKINA_FASO_OPERATORS.BURKINA_FASO_ORANGE],
  BURKINA_FASO_MOOV: [...BURKINA_FASO_OPERATORS.BURKINA_FASO_MOOV],
  BURKINA_FASO_TELECEL: [...BURKINA_FASO_OPERATORS.BURKINA_FASO_TELECEL],
  SOUTH_SUDAN_MTN: [...SOUTH_SUDAN_OPERATORS.SOUTH_SUDAN_MTN],
  SOUTH_SUDAN_ZAIN: [...SOUTH_SUDAN_OPERATORS.SOUTH_SUDAN_ZAIN],
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
    case '234':
      return detectNigeriaOperator(local) as Operator;
    case '233':
      return detectGhanaOperator(local) as Operator;
    case '254':
      return detectKenyaOperator(local) as Operator;
    case '27':
      return detectSouthAfricaOperator(local) as Operator;
    case '212':
      return detectMoroccoOperator(local) as Operator;
    case '251':
      return detectEthiopiaOperator(local) as Operator;
    case '20':
      return detectEgyptOperator(local) as Operator;
    case '255':
      return detectTanzaniaOperator(local) as Operator;
    case '243':
      return detectDRCOperator(local) as Operator;
    case '256':
      return detectUgandaOperator(local) as Operator;
    case '250':
      return detectRwandaOperator(local) as Operator;
    case '223':
      return detectMaliOperator(local) as Operator;
    case '249':
      return detectSudanOperator(local) as Operator;
    case '258':
      return detectMozambiqueOperator(local) as Operator;
    case '213':
      return detectAlgeriaOperator(local) as Operator;
    case '244':
      return detectAngolaOperator(local) as Operator;
    case '226':
      return detectBurkinaFasoOperator(local) as Operator;
    case '211':
      return detectSouthSudanOperator(local) as Operator;
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
    case '234':
      return validateNigeriaNumber(clean);
    case '233':
      return validateGhanaNumber(clean);
    case '254':
      return validateKenyaNumber(clean);
    case '27':
      return validateSouthAfricaNumber(clean);
    case '212':
      return validateMoroccoNumber(clean);
    case '251':
      return validateEthiopiaNumber(clean);
    case '20':
      return validateEgyptNumber(clean);
    case '255':
      return validateTanzaniaNumber(clean);
    case '243':
      return validateDRCNumber(clean);
    case '256':
      return validateUgandaNumber(clean);
    case '250':
      return validateRwandaNumber(clean);
    case '223':
      return validateMaliNumber(clean);
    case '249':
      return validateSudanNumber(clean);
    case '258':
      return validateMozambiqueNumber(clean);
    case '213':
      return validateAlgeriaNumber(clean);
    case '244':
      return validateAngolaNumber(clean);
    case '226':
      return validateBurkinaFasoNumber(clean);
    case '211':
      return validateSouthSudanNumber(clean);
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
    case '234':
      return formatNigeriaNumber(clean);
    case '233':
      return formatGhanaNumber(clean);
    case '254':
      return formatKenyaNumber(clean);
    case '27':
      return formatSouthAfricaNumber(clean);
    case '212':
      return formatMoroccoNumber(clean);
    case '251':
      return formatEthiopiaNumber(clean);
    case '20':
      return formatEgyptNumber(clean);
    case '255':
      return formatTanzaniaNumber(clean);
    case '243':
      return formatDRCNumber(clean);
    case '256':
      return formatUgandaNumber(clean);
    case '250':
      return formatRwandaNumber(clean);
    case '223':
      return formatMaliNumber(clean);
    case '249':
      return formatSudanNumber(clean);
    case '258':
      return formatMozambiqueNumber(clean);
    case '213':
      return formatAlgeriaNumber(clean);
    case '244':
      return formatAngolaNumber(clean);
    case '226':
      return formatBurkinaFasoNumber(clean);
    case '211':
      return formatSouthSudanNumber(clean);
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
    case '234':
      return isNigeriaMobile(local);
    case '233':
      return isGhanaMobile(local);
    case '254':
      return isKenyaMobile(local);
    case '27':
      return isSouthAfricaMobile(local);
    case '212':
      return isMoroccoMobile(local);
    case '251':
      return isEthiopiaMobile(local);
    case '20':
      return isEgyptMobile(local);
    case '255':
      return isTanzaniaMobile(local);
    case '243':
      return isDRCMobile(local);
    case '256':
      return isUgandaMobile(local);
    case '250':
      return isRwandaMobile(local);
    case '223':
      return isMaliMobile(local);
    case '249':
      return isSudanMobile(local);
    case '258':
      return isMozambiqueMobile(local);
    case '213':
      return isAlgeriaMobile(local);
    case '244':
      return isAngolaMobile(local);
    case '226':
      return isBurkinaFasoMobile(local);
    case '211':
      return isSouthSudanMobile(local);
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
    case '254':
      return isKenyaFixed(local);
    case '27':
      return isSouthAfricaFixed(local);
    case '212':
      return isMoroccoFixed(local);
    case '251':
      return isEthiopiaFixed(local);
    case '20':
      return isEgyptFixed(local);
    case '255':
      return isTanzaniaFixed(local);
    default:
      return false; // Seuls certains pays ont des numéros fixes pour l'instant
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

// Export de la nouvelle classe PhoneLookup
export { PhoneLookup } from './core/phone-lookup';
export type { PhoneLookupOptions, EnhancedPhoneInfo } from './core/phone-lookup';

// Export des métadonnées
export { getCountryMetadata, getAllCountries, getCountryByCode } from './countries/metadata';
export type { CountryMetadata } from './countries/metadata';

// Export de la validation avec erreurs
export { validatePhoneNumber, PhoneValidationError, createValidationError } from './utils/validation-errors';
export type { ValidationError } from './utils/validation-errors';
