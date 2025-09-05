// src/utils/validation.ts
// Utilitaires de validation communs

import { CountryCode } from '../countries/types';

/**
 * Nettoie un numéro de téléphone
 */
export function cleanPhoneNumber(phone: string): string {
  if (!phone) return '';
  
  // Supprimer tous les espaces, tirets, parenthèses, points
  const cleaned = phone.replace(/[\s\-().]/g, '');
  
  // Préserver le + en début s'il existe
  if (cleaned.startsWith('+')) {
    return '+' + cleaned.slice(1).replace(/\D/g, '');
  }
  
  // Sinon, supprimer tous les caractères non-numériques
  return cleaned.replace(/\D/g, '');
}

/**
 * Détecte le code pays d'un numéro
 */
export function detectCountryCode(cleanNumber: string): CountryCode | null {
  if (!cleanNumber) return null;
  
  // Supprimer le + s'il existe pour l'analyse
  const number = cleanNumber.startsWith('+') ? cleanNumber.slice(1) : cleanNumber;
  
  // Codes pays supportés (ordre important pour éviter les conflits)
  if (number.startsWith('237')) return '237'; // Cameroun
  if (number.startsWith('243')) return '243'; // RDC (République Démocratique du Congo)
  if (number.startsWith('256')) return '256'; // Ouganda
  if (number.startsWith('221')) return '221'; // Sénégal  
  if (number.startsWith('225')) return '225'; // Côte d'Ivoire
  if (number.startsWith('234')) return '234'; // Nigeria
  if (number.startsWith('233')) return '233'; // Ghana
  if (number.startsWith('255')) return '255'; // Tanzanie
  if (number.startsWith('254')) return '254'; // Kenya
  if (number.startsWith('251')) return '251'; // Éthiopie
  if (number.startsWith('213')) return '213'; // Algérie
  if (number.startsWith('212')) return '212'; // Maroc
  if (number.startsWith('27')) return '27';   // Afrique du Sud (à la fin car plus court)
  if (number.startsWith('20')) return '20';   // Égypte (à la fin car plus court)
  
  return null;
}

/**
 * Extrait le numéro local d'un numéro complet
 */
export function extractLocalNumber(cleanNumber: string, countryCode: CountryCode): string {
  if (!cleanNumber || !countryCode) return cleanNumber;
  
  // Supprimer le + s'il existe
  const number = cleanNumber.startsWith('+') ? cleanNumber.slice(1) : cleanNumber;
  
  // Vérifier si le numéro commence par le code pays
  if (!number.startsWith(countryCode)) {
    return number; // Retourner le numéro sans + si pas de code pays trouvé
  }
  
  // Extraire le numéro local selon la longueur du code pays
  switch (countryCode) {
    case '27': // Afrique du Sud (2 chiffres)
    case '20': // Égypte (2 chiffres)
      return number.slice(2);
    case '237': // Cameroun (3 chiffres)
    case '221': // Sénégal (3 chiffres)
    case '225': // Côte d'Ivoire (3 chiffres)
    case '234': // Nigeria (3 chiffres)
    case '233': // Ghana (3 chiffres)
    case '255': // Tanzanie (3 chiffres)
    case '254': // Kenya (3 chiffres)
    case '251': // Éthiopie (3 chiffres)
    case '212': // Maroc (3 chiffres)
      return number.slice(3);
    default:
      return number.slice(3);
  }
}

/**
 * Vérifie si un numéro est valide selon sa longueur
 */
export function validateNumberLength(localNumber: string, expectedLength: number): boolean {
  return localNumber.length === expectedLength;
}
