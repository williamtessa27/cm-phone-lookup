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
  },
  '251': {
    name: 'Ethiopia',
    nameLocal: 'ኢትዮጵያ',
    flag: '🇪🇹',
    language: ['am', 'en'], // 🇪🇹 Ethiopia : Amharique + Anglais
    currency: 'ETB',
    timezone: 'UTC+3',
    population: '120.3M',
    capital: 'Addis Ababa'
  },
  '20': {
    name: 'Egypt',
    nameLocal: 'مصر',
    flag: '🇪🇬',
    language: ['ar', 'en'], // 🇪🇬 Egypt : Arabe + Anglais
    currency: 'EGP',
    timezone: 'UTC+2',
    population: '104.3M',
    capital: 'Cairo'
  },
  '255': {
    name: 'Tanzania',
    nameLocal: 'Tanzania',
    flag: '🇹🇿',
    language: ['sw', 'en'], // 🇹🇿 Tanzania : Swahili + Anglais
    currency: 'TZS',
    timezone: 'UTC+3',
    population: '61.7M',
    capital: 'Dodoma'
  },
  '243': {
    name: 'DR Congo',
    nameLocal: 'République Démocratique du Congo',
    flag: '🇨🇩',
    language: 'fr', // 🇨🇩 RDC : Français uniquement
    currency: 'CDF',
    timezone: 'UTC+1',
    population: '95.9M',
    capital: 'Kinshasa'
  },
  '256': {
    name: 'Uganda',
    nameLocal: 'Uganda',
    flag: '🇺🇬',
    language: ['en', 'sw'], // 🇺🇬 Uganda : Anglais + Swahili
    currency: 'UGX',
    timezone: 'UTC+3',
    population: '47.1M',
    capital: 'Kampala'
  },
  '213': {
    name: 'Algeria',
    nameLocal: 'الجزائر',
    flag: '🇩🇿',
    language: ['ar', 'fr'], // 🇩🇿 Algeria : Arabe + Français
    currency: 'DZD',
    timezone: 'UTC+1',
    population: '44.9M',
    capital: 'Algiers'
  },
  '223': {
    name: 'Mali',
    nameLocal: 'Mali',
    flag: '🇲🇱',
    language: 'fr', // 🇲🇱 Mali : Français uniquement
    currency: 'XOF',
    timezone: 'UTC+0',
    population: '21.9M',
    capital: 'Bamako'
  },
  '249': {
    name: 'Sudan',
    nameLocal: 'السودان',
    flag: '🇸🇩',
    language: ['ar', 'en'], // 🇸🇩 Sudan : Arabe + Anglais
    currency: 'SDG',
    timezone: 'UTC+2',
    population: '45.7M',
    capital: 'Khartoum'
  },
  '250': {
    name: 'Rwanda',
    nameLocal: 'Rwanda',
    flag: '🇷🇼',
    language: ['rw', 'en', 'fr'], // 🇷🇼 Rwanda : Kinyarwanda + Anglais + Français
    currency: 'RWF',
    timezone: 'UTC+2',
    population: '13.3M',
    capital: 'Kigali'
  },
  '258': {
    name: 'Mozambique',
    nameLocal: 'Moçambique',
    flag: '🇲🇿',
    language: 'pt', // 🇲🇿 Mozambique : Portugais uniquement
    currency: 'MZN',
    timezone: 'UTC+2',
    population: '32.2M',
    capital: 'Maputo'
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
