// src/countries/metadata.ts
// Métadonnées complètes pour tous les pays supportés

export interface CountryMetadata {
  name: string;
  nameLocal: string;
  flag: string;
  language: string;
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
    language: 'fr',
    currency: 'XAF',
    timezone: 'UTC+1',
    population: '27.2M',
    capital: 'Yaoundé'
  },
  '221': {
    name: 'Senegal',
    nameLocal: 'Sénégal',
    flag: '🇸🇳',
    language: 'fr',
    currency: 'XOF',
    timezone: 'UTC+0',
    population: '17.2M',
    capital: 'Dakar'
  },
  '225': {
    name: 'Ivory Coast',
    nameLocal: 'Côte d\'Ivoire',
    flag: '🇨🇮',
    language: 'fr',
    currency: 'XOF',
    timezone: 'UTC+0',
    population: '27.5M',
    capital: 'Yamoussoukro'
  },
  '234': {
    name: 'Nigeria',
    nameLocal: 'Nigeria',
    flag: '🇳🇬',
    language: 'en',
    currency: 'NGN',
    timezone: 'UTC+1',
    population: '223.8M',
    capital: 'Abuja'
  },
  '233': {
    name: 'Ghana',
    nameLocal: 'Ghana',
    flag: '🇬🇭',
    language: 'en',
    currency: 'GHS',
    timezone: 'UTC+0',
    population: '32.8M',
    capital: 'Accra'
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
