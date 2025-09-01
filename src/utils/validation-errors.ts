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
      'EMPTY_PHONE_NUMBER',
      VALIDATION_ERRORS.EMPTY_PHONE,
      'phone',
      phone
    ));
    return { isValid: false, errors };
  }

  // Import des fonctions utilitaires
  const { cleanPhoneNumber, detectCountryCode, extractLocalNumber } = require('./validation');
  
  // Nettoyage du numéro
  const clean = cleanPhoneNumber(phone);
  const countryCode = detectCountryCode(clean);
  
  // Vérification du code pays
  if (!countryCode) {
    errors.push(createValidationError(
      'INVALID_COUNTRY_CODE',
      VALIDATION_ERRORS.INVALID_COUNTRY_CODE,
      'countryCode',
      phone,
      'Utilisez le format +237XXXXXXXXX pour le Cameroun'
    ));
    return { isValid: false, errors };
  }

  const localNumber = extractLocalNumber(clean, countryCode);
  
  // Vérification de la longueur minimale
  if (localNumber.length < 8) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      VALIDATION_ERRORS.TOO_SHORT,
      'phone',
      phone,
      'Le numéro doit contenir au moins 8 chiffres'
    ));
  }

  // Vérification de la longueur selon le pays (basée sur le numéro local)
  if (countryCode === '237' && localNumber.length !== 9) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro camerounais doit avoir 9 chiffres locaux',
      'length',
      localNumber.length.toString(),
      'Format attendu: +237XXXXXXXXX'
    ));
  } else if (countryCode === '221' && localNumber.length !== 9) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro sénégalais doit avoir 9 chiffres locaux',
      'length',
      localNumber.length.toString(),
      'Format attendu: +221XXXXXXXXX'
    ));
  } else if (countryCode === '225' && localNumber.length !== 8) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro ivoirien doit avoir 8 chiffres locaux',
      'length',
      localNumber.length.toString(),
      'Format attendu: +225XXXXXXXX'
    ));
  } else if (countryCode === '234' && localNumber.length !== 10) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro nigérian doit avoir 10 chiffres locaux',
      'length',
      localNumber.length.toString(),
      'Format attendu: +234XXXXXXXXXX'
    ));
  } else if (countryCode === '233' && localNumber.length !== 9) {
    errors.push(createValidationError(
      'INVALID_LENGTH',
      'Numéro ghanéen doit avoir 9 chiffres locaux',
      'length',
      localNumber.length.toString(),
      'Format attendu: +233XXXXXXXXX'
    ));
  }

  // Pour l'instant, on évite la validation des préfixes pour éviter la dépendance circulaire
  // Cette validation sera faite par isValidNumber() dans l'index principal

  return {
    isValid: errors.length === 0,
    errors
  };
}
