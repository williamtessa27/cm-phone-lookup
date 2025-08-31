// src/index.ts

export type Operator =
  | 'MTN'
  | 'ORANGE'
  | 'CAMTEL'
  | 'NEXTTEL'
  | 'SENEGAL_ORANGE'
  | 'SENEGAL_TIGO'
  | 'SENEGAL_EXPRESSO'
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

// Préfixes officiels Cameroun (exacts selon spécification)
const prefixes: Record<Operator, string[]> = {
  MTN: ['650', '651', '652', '653', '654', '680', '681', '682', '683', '684'],
  ORANGE: ['655', '656', '657', '658', '659', '690', '691', '692', '693'],
  CAMTEL: ['222', '233', '242', '243', '244', '245', '246'],
  NEXTTEL: ['66'],
  SENEGAL_ORANGE: ['70', '76', '77', '78', '79'],
  SENEGAL_TIGO: ['76', '77'],
  SENEGAL_EXPRESSO: ['75', '76', '77', '78'],
  Unknown: [],
};

/**
 * Détecte l'opérateur mobile à partir d'un numéro de téléphone camerounais
 * @param phone - Le numéro de téléphone (avec ou sans +237)
 * @returns L'opérateur détecté ou "Unknown"
 */
export function detectOperator(phone: string): Operator {
  // Nettoyer le numéro
  const clean = phone.replace(/\D/g, '');

  // Détecter le pays et extraire le numéro local
  let local = '';
  let countryCode = '';

  if (clean.startsWith('237')) {
    // Cameroun
    local = clean.slice(3);
    countryCode = '237';
  } else if (clean.startsWith('221')) {
    // Sénégal
    local = clean.slice(3);
    countryCode = '221';
  } else {
    // Par défaut Cameroun
    local = clean;
    countryCode = '237';
  }

  // Détecter l'opérateur basé sur le pays
  if (countryCode === '221') {
    // Logique pour le Sénégal
    for (const [operator, codes] of Object.entries(prefixes)) {
      if (
        operator.includes('SENEGAL') &&
        codes.some(prefix => local.startsWith(prefix))
      ) {
        return operator as Operator;
      }
    }
  } else {
    // Logique pour le Cameroun
    for (const [operator, codes] of Object.entries(prefixes)) {
      if (
        !operator.includes('SENEGAL') &&
        codes.some(prefix => local.startsWith(prefix))
      ) {
        return operator as Operator;
      }
    }
  }

  return 'Unknown';
}

/**
 * Valide si un numéro de téléphone camerounais est valide
 * @param phone - Le numéro de téléphone à valider
 * @returns true si le numéro est valide, false sinon
 */
export function isValidNumber(phone: string): boolean {
  const clean = phone.replace(/\D/g, '');

  // Validation pour le Cameroun
  if (clean.startsWith('237') || !clean.startsWith('221')) {
    // Valide les numéros mobiles (9 chiffres commençant par 2,3,6) et fixes (7 chiffres commençant par 2,4)
    return /^(\+237|237)?([236][0-9]{8}|[24][0-9]{7})$/.test(clean);
  }

  // Validation pour le Sénégal (numéros mobiles de 9 chiffres)
  if (clean.startsWith('221')) {
    return /^(\+221|221)?[0-9]{9}$/.test(clean);
  }

  return false;
}

/**
 * Obtient des informations complètes sur un numéro de téléphone
 * @param phone - Le numéro de téléphone
 * @returns Un objet PhoneInfo avec toutes les informations
 */
export function getPhoneInfo(phone: string): PhoneInfo {
  const clean = phone.replace(/\D/g, '');
  const isValid = isValidNumber(phone);

  // Détecter le pays
  let local = '';
  let countryCode = '+237';

  if (clean.startsWith('237')) {
    local = clean.slice(3);
    countryCode = '+237';
  } else if (clean.startsWith('221')) {
    local = clean.slice(3);
    countryCode = '+221';
  } else {
    local = clean;
    countryCode = '+237';
  }

  const operator = detectOperator(phone);

  return {
    operator,
    isValid,
    countryCode,
    localNumber: local,
    formattedNumber: formatPhoneNumber(phone),
    isMobile: isMobileNumber(local),
    isFixed: isFixedNumber(local),
    length: local.length,
  };
}

/**
 * Formate un numéro de téléphone en format lisible
 * @param phone - Le numéro de téléphone
 * @returns Le numéro formaté avec espaces
 */
export function formatPhoneNumber(phone: string): string {
  const clean = phone.replace(/\D/g, '');

  // Détecter le pays et formater
  if (clean.startsWith('237')) {
    const local = clean.slice(3);
    if (local.length === 9) {
      return `+237 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
    }
  } else if (clean.startsWith('221')) {
    const local = clean.slice(3);
    if (local.length === 9) {
      return `+221 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
    }
  }

  return phone;
}

/**
 * Vérifie si un numéro local est un numéro mobile
 * @param local - Le numéro local (sans 237)
 * @returns true si c'est un numéro mobile
 */
function isMobileNumber(local: string): boolean {
  // Les numéros mobiles ont 9 chiffres et commencent par 2,3,6
  return /^[236][0-9]{8}$/.test(local);
}

/**
 * Vérifie si un numéro local est un numéro fixe
 * @param local - Le numéro local (sans 237)
 * @returns true si c'est un numéro fixe
 */
function isFixedNumber(local: string): boolean {
  return /^[24][0-9]{7}$/.test(local);
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
