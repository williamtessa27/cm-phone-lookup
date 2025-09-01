// src/__tests__/phone-lookup.test.ts
// Tests pour la nouvelle classe PhoneLookup avec API unifiée

import { PhoneLookup } from '../core/phone-lookup';
import { PhoneValidationError } from '../utils/validation-errors';

describe('PhoneLookup - Classe avec API unifiée', () => {
  describe('Constructeur et options', () => {
    test('crée une instance avec les options par défaut', () => {
      const lookup = new PhoneLookup('+237650123456');
      expect(lookup).toBeInstanceOf(PhoneLookup);
    });

    test('accepte des options personnalisées', () => {
      const lookup = new PhoneLookup('+237650123456', {
        strictMode: true,
        autoFormat: false,
        language: 'en',
        includeMetadata: false,
        throwOnError: true
      });
      expect(lookup).toBeInstanceOf(PhoneLookup);
    });
  });

  describe('Méthodes d\'instance', () => {
    test('validate() retourne l\'instance pour chaînage', () => {
      const lookup = new PhoneLookup('+237650123456');
      const result = lookup.validate();
      expect(result).toBe(lookup);
    });

    test('format() retourne l\'instance pour chaînage', () => {
      const lookup = new PhoneLookup('+237650123456');
      const result = lookup.format();
      expect(result).toBe(lookup);
    });

    test('isValid() retourne un booléen', () => {
      const lookup = new PhoneLookup('+237650123456');
      expect(lookup.isValid()).toBe(true);
      
      const invalidLookup = new PhoneLookup('123456');
      expect(invalidLookup.isValid()).toBe(false);
    });

    test('getOperator() retourne l\'opérateur', () => {
      const lookup = new PhoneLookup('+237650123456');
      expect(lookup.getOperator()).toBe('CAMEROON_MTN');
    });

    test('getFormatted() retourne le numéro formaté', () => {
      const lookup = new PhoneLookup('+237650123456');
      expect(lookup.getFormatted()).toBe('+237 650 123 456');
    });

    test('getInfo() retourne les informations complètes', () => {
      const lookup = new PhoneLookup('+237650123456');
      const info = lookup.getInfo();
      
      expect(info.phone).toBe('+237650123456');
      expect(info.operator).toBe('CAMEROON_MTN');
      expect(info.isValid).toBe(true);
      expect(info.countryCode).toBe('+237');
      expect(info.localNumber).toBe('650123456');
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
      expect(info.country).toBeDefined();
      expect(info.country?.name).toBe('Cameroon');
      expect(info.country?.flag).toBe('🇨🇲');
      expect(info.errors).toBeUndefined();
      expect(info.suggestions).toBeUndefined();
    });

    test('analyze() combine validation, formatage et informations', () => {
      const lookup = new PhoneLookup('+237650123456');
      const result = lookup.analyze();
      
      expect(result.phone).toBe('+237 650 123 456'); // Formaté
      expect(result.operator).toBe('CAMEROON_MTN');
      expect(result.isValid).toBe(true);
      expect(result.country).toBeDefined();
    });
  });

  describe('Méthodes statiques', () => {
    test('analyze() analyse un numéro rapidement', () => {
      const result = PhoneLookup.analyze('+237650123456');
      
      expect(result.operator).toBe('CAMEROON_MTN');
      expect(result.isValid).toBe(true);
      expect(result.country?.name).toBe('Cameroon');
      expect(result.country?.flag).toBe('🇨🇲');
    });

    test('validate() valide un numéro rapidement', () => {
      expect(PhoneLookup.validate('+237650123456')).toBe(true);
      expect(PhoneLookup.validate('123456')).toBe(false);
    });

    test('getOperator() détecte l\'opérateur rapidement', () => {
      expect(PhoneLookup.getOperator('+237650123456')).toBe('CAMEROON_MTN');
      expect(PhoneLookup.getOperator('+221771234567')).toBe('SENEGAL_ORANGE');
    });

    test('format() formate un numéro rapidement', () => {
      expect(PhoneLookup.format('+237650123456')).toBe('+237 650 123 456');
      expect(PhoneLookup.format('+221771234567')).toBe('+221 77 123 45 67');
    });

    test('getStats() retourne les statistiques globales', () => {
      const stats = PhoneLookup.getStats();
      
      expect(stats.totalCountries).toBe(8);
      expect(stats.totalOperators).toBeGreaterThan(30);
      expect(stats.countries).toHaveLength(8);
      
      const cameroon = stats.countries.find(c => c.code === '+237');
      expect(cameroon).toBeDefined();
      expect(cameroon?.name).toBe('Cameroon');
      expect(cameroon?.flag).toBe('🇨🇲');
      expect(cameroon?.operators).toBe(4);
    });
  });

  describe('Gestion des erreurs', () => {
    test('gère les numéros invalides sans lancer d\'erreur par défaut', () => {
      const lookup = new PhoneLookup('123456');
      const info = lookup.getInfo();
      
      expect(info.isValid).toBe(false);
      expect(info.errors).toBeDefined();
      expect(info.errors?.length).toBeGreaterThan(0);
    });

    test('lance une erreur avec throwOnError: true', () => {
      expect(() => {
        const lookup = new PhoneLookup('123456', { throwOnError: true });
        lookup.validate();
      }).toThrow(PhoneValidationError);
    });

    test('analyse avec options strictes', () => {
      const result = PhoneLookup.analyze('123456', { 
        strictMode: true,
        throwOnError: false 
      });
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toBeDefined();
      expect(result.suggestions).toBeDefined();
    });
  });

  describe('Options de configuration', () => {
    test('includeMetadata: false désactive les métadonnées', () => {
      const result = PhoneLookup.analyze('+237650123456', { 
        includeMetadata: false 
      });
      
      expect(result.country).toBeUndefined();
    });

    test('autoFormat: false désactive le formatage automatique', () => {
      const lookup = new PhoneLookup('+237650123456', { autoFormat: false });
      const result = lookup.format().getInfo();
      
      expect(result.phone).toBe('+237650123456'); // Non formaté
    });
  });

  describe('Chaînage de méthodes (Fluent API)', () => {
    test('permet le chaînage complet', () => {
      const result = new PhoneLookup('+237650123456')
        .validate()
        .format()
        .getInfo();
      
      expect(result.operator).toBe('CAMEROON_MTN');
      expect(result.isValid).toBe(true);
      expect(result.phone).toBe('+237 650 123 456');
    });

    test('fonctionne avec plusieurs pays', () => {
      const tests = [
        { phone: '+221771234567', operator: 'SENEGAL_ORANGE', flag: '🇸🇳' },
        { phone: '+233241234567', operator: 'GHANA_MTN', flag: '🇬🇭' },
        { phone: '+2348031234567', operator: 'NIGERIA_MTN', flag: '🇳🇬' },
        { phone: '+254700123456', operator: 'KENYA_SAFARICOM', flag: '🇰🇪' }
      ];

      tests.forEach(test => {
        const result = new PhoneLookup(test.phone)
          .validate()
          .format()
          .getInfo();
        
        expect(result.operator).toBe(test.operator);
        expect(result.isValid).toBe(true);
        expect(result.country?.flag).toBe(test.flag);
      });
    });
  });

  describe('Cas d\'usage réels', () => {
    test('validation d\'un formulaire', () => {
      const phoneNumbers = [
        '+237650123456', // Valide
        '+221771234567', // Valide
        '123456',        // Invalide
        '+999123456789'  // Invalide
      ];

      const results = phoneNumbers.map(phone => ({
        phone,
        isValid: PhoneLookup.validate(phone),
        operator: PhoneLookup.getOperator(phone)
      }));

      expect(results[0]!.isValid).toBe(true);
      expect(results[0]!.operator).toBe('CAMEROON_MTN');
      expect(results[1]!.isValid).toBe(true);
      expect(results[1]!.operator).toBe('SENEGAL_ORANGE');
      expect(results[2]!.isValid).toBe(false);
      expect(results[2]!.operator).toBe('Unknown');
      expect(results[3]!.isValid).toBe(false);
      expect(results[3]!.operator).toBe('Unknown');
    });

    test('analyse complète pour dashboard', () => {
      const phones = [
        '+237650123456',
        '+221771234567',
        '+233241234567',
        '+2348031234567'
      ];

      const analyses = phones.map(phone => PhoneLookup.analyze(phone));
      
      analyses.forEach(analysis => {
        expect(analysis.isValid).toBe(true);
        expect(analysis.country).toBeDefined();
        expect(analysis.operator).not.toBe('Unknown');
        expect(analysis.formattedNumber).toContain('+');
      });
    });
  });
});

