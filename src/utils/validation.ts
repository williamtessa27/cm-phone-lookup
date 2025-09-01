// src/utils/validation.ts
// Utilitaires de validation communs

import { CountryCode } from '../countries/types';

/**
 * Nettoie un numéro de téléphone
 */
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Détecte le code pays d'un numéro
 */
export function detectCountryCode(cleanNumber: string): CountryCode | null {
  if (cleanNumber.startsWith('237')) return '237';
  if (cleanNumber.startsWith('221')) return '221';
  if (cleanNumber.startsWith('225')) return '225';
  if (cleanNumber.startsWith('234')) return '234';
  if (cleanNumber.startsWith('233')) return '233';
  if (cleanNumber.startsWith('254')) return '254';
  if (cleanNumber.startsWith('27')) return '27';
  if (cleanNumber.startsWith('212')) return '212';
  return null;
}

/**
 * Extrait le numéro local d'un numéro complet
 */
export function extractLocalNumber(cleanNumber: string, countryCode: CountryCode): string {
  switch (countryCode) {
    case '27': // Afrique du Sud
      return cleanNumber.slice(2);
    case '237': // Cameroun
    case '221': // Sénégal
    case '225': // Côte d'Ivoire
    case '234': // Nigeria
    case '233': // Ghana
    case '254': // Kenya
    case '212': // Maroc
      return cleanNumber.slice(3);
    default:
      return cleanNumber.slice(3);
  }
}

/**
 * Vérifie si un numéro est valide selon sa longueur
 */
export function validateNumberLength(localNumber: string, expectedLength: number): boolean {
  return localNumber.length === expectedLength;
}
