// src/core/phone-lookup.ts
// Classe principale avec API unifiée et méthodes chainées

import { detectOperator, isValidNumber, getPhoneInfo, formatPhoneNumber } from '../index';
import { getCountryMetadata, CountryMetadata } from '../countries/metadata';
import { validatePhoneNumber as validateWithErrors, PhoneValidationError } from '../utils/validation-errors';

export interface PhoneLookupOptions {
  strictMode?: boolean;
  autoFormat?: boolean;
  language?: 'fr' | 'en';
  includeMetadata?: boolean;
  throwOnError?: boolean;
}

export interface EnhancedPhoneInfo {
  phone: string;
  operator: string;
  isValid: boolean;
  countryCode: string;
  localNumber: string;
  formattedNumber: string;
  isMobile: boolean;
  isFixed: boolean;
  length: number;
  country: CountryMetadata | undefined;
  errors: string[] | undefined;
  suggestions: string[] | undefined;
}

export class PhoneLookup {
  private options: Required<PhoneLookupOptions>;
  private phone: string;

  constructor(phone: string, options: PhoneLookupOptions = {}) {
    this.phone = phone;
    this.options = {
      strictMode: options.strictMode ?? false,
      autoFormat: options.autoFormat ?? true,
      language: options.language ?? 'fr',
      includeMetadata: options.includeMetadata ?? true,
      throwOnError: options.throwOnError ?? false,
      ...options
    };
  }

  /**
   * Valide le numéro de téléphone avec gestion d'erreurs détaillée
   */
  validate(): this {
    const validation = validateWithErrors(this.phone);
    
    if (!validation.isValid && this.options.throwOnError) {
      throw new PhoneValidationError(validation.errors);
    }
    
    return this;
  }

  /**
   * Formate le numéro de téléphone
   */
  format(): this {
    if (this.options.autoFormat) {
      this.phone = formatPhoneNumber(this.phone);
    }
    return this;
  }

  /**
   * Obtient les informations complètes du numéro
   */
  getInfo(): EnhancedPhoneInfo {
    // Validation d'abord
    const validation = validateWithErrors(this.phone);
    
    // Informations de base
    const basicInfo = getPhoneInfo(this.phone);
    
    // Métadonnées du pays si activées
    let country: CountryMetadata | undefined;
    if (this.options.includeMetadata) {
      const countryCode = basicInfo.countryCode.replace('+', '');
      const metadata = getCountryMetadata(countryCode);
      country = metadata || undefined;
    }

    // Gestion des erreurs
    const errors = validation.isValid ? undefined : validation.errors.map(e => e.message);
    const suggestions = validation.isValid ? undefined : validation.errors.map(e => e.suggestion).filter((s): s is string => s !== undefined);

    return {
      ...basicInfo,
      phone: this.phone,
      country,
      errors,
      suggestions
    };
  }

  /**
   * Analyse complète du numéro (méthode raccourcie)
   */
  analyze(): EnhancedPhoneInfo {
    return this.validate().format().getInfo();
  }

  /**
   * Vérifie si le numéro est valide
   */
  isValid(): boolean {
    return isValidNumber(this.phone);
  }

  /**
   * Détecte l'opérateur
   */
  getOperator(): string {
    return detectOperator(this.phone);
  }

  /**
   * Obtient le formatage
   */
  getFormatted(): string {
    return formatPhoneNumber(this.phone);
  }

  /**
   * Méthode statique pour analyse rapide
   */
  static analyze(phone: string, options?: PhoneLookupOptions): EnhancedPhoneInfo {
    return new PhoneLookup(phone, options).analyze();
  }

  /**
   * Méthode statique pour validation rapide
   */
  static validate(phone: string, options?: PhoneLookupOptions): boolean {
    return new PhoneLookup(phone, options).validate().isValid();
  }

  /**
   * Méthode statique pour obtenir l'opérateur
   */
  static getOperator(phone: string): string {
    return new PhoneLookup(phone).getOperator();
  }

  /**
   * Méthode statique pour formater
   */
  static format(phone: string): string {
    return new PhoneLookup(phone).getFormatted();
  }

  /**
   * Obtient les statistiques globales
   */
  static getStats() {
    const countries = ['237', '221', '225', '234', '233', '254', '27', '212', '251', '20', '255', '243', '256', '250', '213', '223', '249', '258', '244', '226', '211'];
    const countryStats = countries.map(code => {
      const metadata = getCountryMetadata(code);
      return {
        code: `+${code}`,
        name: metadata?.name || 'Unknown',
        flag: metadata?.flag || '🏳️',
        operators: this.getOperatorCount(code)
      };
    });

    return {
      totalCountries: countries.length,
      totalOperators: countries.reduce((sum, code) => sum + this.getOperatorCount(code), 0),
      countries: countryStats
    };
  }

  /**
   * Compte les opérateurs par pays
   */
  private static getOperatorCount(countryCode: string): number {
    const operators = {
      '237': 4, // Cameroon
      '221': 6, // Senegal  
      '225': 3, // Ivory Coast
      '234': 9, // Nigeria
      '233': 5, // Ghana
      '254': 5, // Kenya
      '27': 5,  // South Africa
      '212': 3, // Morocco
      '251': 2, // Ethiopia
      '20': 4,  // Egypt
      '255': 8, // Tanzania
      '243': 4, // DRC
      '256': 3, // Uganda
      '250': 2, // Rwanda
      '213': 3, // Algeria
      '223': 3, // Mali
      '249': 3, // Sudan
      '258': 3, // Mozambique
      '244': 3, // Angola
      '226': 3, // Burkina Faso
      '211': 2  // South Sudan
    };
    return operators[countryCode as keyof typeof operators] || 0;
  }
}
