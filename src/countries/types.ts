// src/countries/types.ts
// Types partagés pour tous les pays

export type CountryCode = '237' | '221' | '225' | '234' | '233' | '254' | '27' | '212' | '251' | '20' | '255' | '243' | '256' | '213' | '250';

export interface PhoneInfo {
  operator: string;
  isValid: boolean;
  countryCode: string;
  localNumber: string;
  formattedNumber: string;
  isMobile: boolean;
  isFixed: boolean;
  length: number;
}

export interface CountryConfig {
  countryCode: CountryCode;
  operators: Record<string, readonly string[]>;
  validation: {
    mobile: RegExp;
    fixed?: RegExp;
    totalLength: number;
  };
  formatting: {
    pattern: string;
    separator: string;
  };
}
