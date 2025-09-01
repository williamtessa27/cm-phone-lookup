// src/countries/metadata.ts
// Métadonnées complètes pour tous les pays supportés

export interface CountryMetadata {
  name: string;
  nameLocal: string;
  flag: string;
  language: string | string[]; // Support pour langues multiples (Cameroun bilingue)
  currency: string;
  timezone: string;
  population?: string;
  capital?: string;
}

export const COUNTRY_METADATA: Record<string, CountryMetadata> = {
  '237': {
    name: 'Cameroon',
    nameLocal: 'Cameroun',
    flag: '🇨🇲',
    language: ['fr', 'en'], // 🇨🇲 Cameroun : Bilingue officiel (Français + Anglais)
    currency: 'XAF',
    timezone: 'UTC+1',
    population: '27.2M',
    capital: 'Yaoundé'
  },
  '221': {
    name: 'Senegal',
    nameLocal: 'Sénégal',
    flag: '🇸🇳',
    language: 'fr', // 🇸🇳 Sénégal : Français uniquement
    currency: 'XOF',
    timezone: 'UTC+0',
    population: '17.2M',
    capital: 'Dakar'
  },
  '225': {
    name: 'Ivory Coast',
    nameLocal: 'Côte d\'Ivoire',
    flag: '🇨🇮',
    language: 'fr', // 🇨🇮 Côte d'Ivoire : Français uniquement
    currency: 'XOF',
    timezone: 'UTC+0',
    population: '27.5M',
    capital: 'Yamoussoukro'
  },
  '234': {
    name: 'Nigeria',
    nameLocal: 'Nigeria',
    flag: '🇳🇬',
    language: 'en', // 🇳🇬 Nigeria : Anglais uniquement
    currency: 'NGN',
    timezone: 'UTC+1',
    population: '223.8M',
    capital: 'Abuja'
  },
  '233': {
    name: 'Ghana',
    nameLocal: 'Ghana',
    flag: '🇬🇭',
    language: 'en', // 🇬🇭 Ghana : Anglais uniquement
    currency: 'GHS',
    timezone: 'UTC+0',
    population: '32.8M',
    capital: 'Accra'
  },
  '254': {
    name: 'Kenya',
    nameLocal: 'Kenya',
    flag: '🇰🇪',
    language: ['en', 'sw'], // 🇰🇪 Kenya : Anglais + Swahili
    currency: 'KES',
    timezone: 'UTC+3',
    population: '53.8M',
    capital: 'Nairobi'
  },
  '27': {
    name: 'South Africa',
    nameLocal: 'Suid-Afrika',
    flag: '🇿🇦',
    language: ['en', 'af', 'zu'], // 🇿🇦 South Africa : Anglais + Afrikaans + Zulu
    currency: 'ZAR',
    timezone: 'UTC+2',
    population: '60.4M',
    capital: 'Pretoria'
  },
  '212': {
    name: 'Morocco',
    nameLocal: 'المغرب',
    flag: '🇲🇦',
    language: ['ar', 'fr'], // 🇲🇦 Morocco : Arabe + Français
    currency: 'MAD',
    timezone: 'UTC+0',
    population: '37.1M',
    capital: 'Rabat'
  }
};

export function getCountryMetadata(countryCode: string): CountryMetadata | null {
  return COUNTRY_METADATA[countryCode] || null;
}

export function getAllCountries(): string[] {
  return Object.keys(COUNTRY_METADATA);
}

export function getCountryByCode(code: string): CountryMetadata | null {
  return COUNTRY_METADATA[code] || null;
}
