// src/utils/validation-errors.ts
// Système de validation avec messages d'erreur détaillés

export interface ValidationError {
  code: string;
  message: string;
  field: string | undefined;
  value: string | undefined;
  suggestion: string | undefined;
}

export class PhoneValidationError extends Error {
  public errors: ValidationError[];
  public code: string;

  constructor(errors: ValidationError[]) {
    super(errors.map(e => e.message).join('; '));
    this.name = 'PhoneValidationError';
    this.errors = errors;
    this.code = errors[0]?.code || 'VALIDATION_ERROR';
  }
}

export function createValidationError(
  code: string,
  message: string,
  field?: string,
  value?: string,
  suggestion?: string
): ValidationError {
  return { code, message, field, value, suggestion };
}

export const VALIDATION_ERRORS = {
  EMPTY_PHONE: 'Le numéro de téléphone ne peut pas être vide',
  INVALID_COUNTRY_CODE: 'Code pays non reconnu. Codes supportés: +237, +221, +225, +234, +233',
  INVALID_LENGTH: 'Longueur de numéro invalide pour ce pays',
  INVALID_FORMAT: 'Format de numéro invalide',
  INVALID_PREFIX: 'Préfixe d\'opérateur non reconnu',
  TOO_SHORT: 'Numéro trop court',
  TOO_LONG: 'Numéro trop long',
  INVALID_CHARACTERS: 'Le numéro contient des caractères invalides'
};

export function validatePhoneNumber(phone: string): { isValid: boolean; errors: ValidationError[] } {
  const errors: ValidationError[] = [];
  
  // Vérification du numéro vide
  if (!phone || phone.trim() === '') {
    errors.push(createValidationError(
      'EMPTY_PHONE',
      VALIDATION_ERRORS.EMPTY_PHONE,
      'phone',
      phone
    ));
    return { isValid: false, errors };
  }

  // Nettoyage du numéro
  const clean = phone.replace(/\D/g, '');
  
  // Vérification de la longueur minimale
  if (clean.length < 8) {
    errors.push(createValidationError(
      'TOO_SHORT',
      VALIDATION_ERRORS.TOO_SHORT,
      'phone',
      phone,
      'Le numéro doit contenir au moins 8 chiffres'
    ));
  }

  // Vérification du code pays
  const countryCode = clean.substring(0, 3);
  const supportedCodes = ['237', '221', '225', '234', '233'];
  
  if (!supportedCodes.includes(countryCode)) {
    errors.push(createValidationError(
      'INVALID_COUNTRY_CODE',
      VALIDATION_ERRORS.INVALID_COUNTRY_CODE,
      'countryCode',
      countryCode,
      `Codes supportés: ${supportedCodes.map(c => '+' + c).join(', ')}`
    ));
  }

  // Vérification de la longueur selon le pays
  if (countryCode === '237' && clean.length !== 12) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro camerounais doit avoir 12 chiffres (9 chiffres locaux)',
      'length',
      clean.length.toString(),
      'Format attendu: +237XXXXXXXXX'
    ));
  } else if (countryCode === '221' && clean.length !== 12) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro sénégalais doit avoir 12 chiffres (9 chiffres locaux)',
      'length',
      clean.length.toString(),
      'Format attendu: +221XXXXXXXXX'
    ));
  } else if (countryCode === '225' && clean.length !== 11) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro ivoirien doit avoir 11 chiffres (8 chiffres locaux)',
      'length',
      clean.length.toString(),
      'Format attendu: +225XXXXXXXX'
    ));
  } else if (countryCode === '234' && clean.length !== 13) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro nigérian doit avoir 13 chiffres (10 chiffres locaux)',
      'length',
      clean.length.toString(),
      'Format attendu: +234XXXXXXXXXX'
    ));
  } else if (countryCode === '233' && clean.length !== 12) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro ghanéen doit avoir 12 chiffres (9 chiffres locaux)',
      'length',
      clean.length.toString(),
      'Format attendu: +233XXXXXXXXX'
    ));
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
