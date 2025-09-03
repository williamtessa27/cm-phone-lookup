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
      
      expect(stats.totalCountries).toBe(11);
      expect(stats.totalOperators).toBeGreaterThan(30);
      expect(stats.countries).toHaveLength(11);
      
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

  describe('Support de l\'Éthiopie', () => {
    test('détecte Ethio Telecom correctement', () => {
      const ethioNumbers = [
        '+251911234567',   // Ethio Telecom 91x
        '+251921234567',   // Ethio Telecom 92x
        '+251931234567',   // Ethio Telecom 93x
        '+251991234567'    // Ethio Telecom 99x
      ];

      ethioNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('ETHIOPIA_ETHIO_TELECOM');
        expect(lookup.getFormatted()).toMatch(/\+251 \d{2} \d{3} \d{4}/);
      });
    });

    test('détecte Safaricom Ethiopia correctement', () => {
      const safaricomNumbers = [
        '+251701234567',   // Safaricom 70x
        '+251711234567',   // Safaricom 71x
        '+251791234567'    // Safaricom 79x
      ];

      safaricomNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('ETHIOPIA_SAFARICOM');
        expect(lookup.getFormatted()).toMatch(/\+251 \d{2} \d{3} \d{4}/);
      });
    });

    test('métadonnées éthiopiennes complètes', () => {
      const lookup = new PhoneLookup('+251911234567');
      const info = lookup.analyze();

      expect(info.country?.name).toBe('Ethiopia');
      expect(info.country?.nameLocal).toBe('ኢትዮጵያ');
      expect(info.country?.flag).toBe('🇪🇹');
      expect(info.country?.currency).toBe('ETB');
      expect(info.country?.timezone).toBe('UTC+3');
      expect(info.country?.capital).toBe('Addis Ababa');
      expect(info.country?.language).toEqual(['am', 'en']);
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
    });

    test('rejette les numéros éthiopiens invalides', () => {
      const invalidNumbers = [
        '+25112345678',   // Trop court (8 chiffres au lieu de 9)
        '+251123456789',  // Préfixe invalide (12)
        '+251801234567',  // Préfixe non attribué (80)
        '+251601234567'   // Préfixe non attribué (60)
      ];

      invalidNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(false);
        expect(lookup.getOperator()).toBe('Unknown');
      });
    });
  });

  describe('Support de l\'Égypte', () => {
    test('détecte Vodafone Egypt correctement', () => {
      const vodafoneNumbers = [
        '+201012345678',   // Vodafone 10x
        '+201087654321',   // Vodafone 10x
      ];

      vodafoneNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('EGYPT_VODAFONE');
        expect(lookup.getFormatted()).toMatch(/\+20 \d{2} \d{4} \d{4}/);
      });
    });

    test('détecte Etisalat/e& Egypt correctement', () => {
      const etisalatNumbers = [
        '+201112345678',   // Etisalat 11x
        '+201187654321',   // Etisalat 11x
      ];

      etisalatNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('EGYPT_ETISALAT');
        expect(lookup.getFormatted()).toMatch(/\+20 \d{2} \d{4} \d{4}/);
      });
    });

    test('détecte Orange Egypt correctement', () => {
      const orangeNumbers = [
        '+201212345678',   // Orange 12x
        '+201287654321',   // Orange 12x
      ];

      orangeNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('EGYPT_ORANGE');
        expect(lookup.getFormatted()).toMatch(/\+20 \d{2} \d{4} \d{4}/);
      });
    });

    test('détecte WE Egypt correctement', () => {
      const weNumbers = [
        '+201512345678',   // WE 15x
        '+201587654321',   // WE 15x
      ];

      weNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('EGYPT_WE');
        expect(lookup.getFormatted()).toMatch(/\+20 \d{2} \d{4} \d{4}/);
      });
    });

    test('métadonnées égyptiennes complètes', () => {
      const lookup = new PhoneLookup('+201012345678');
      const info = lookup.analyze();

      expect(info.country?.name).toBe('Egypt');
      expect(info.country?.nameLocal).toBe('مصر');
      expect(info.country?.flag).toBe('🇪🇬');
      expect(info.country?.currency).toBe('EGP');
      expect(info.country?.timezone).toBe('UTC+2');
      expect(info.country?.capital).toBe('Cairo');
      expect(info.country?.language).toEqual(['ar', 'en']);
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
    });

    test('rejette les numéros égyptiens invalides', () => {
      const invalidNumbers = [
        '+20191234567',   // Trop court (9 chiffres au lieu de 10) et préfixe invalide
        '+201312345678',  // Préfixe invalide (13)
        '+201412345678',  // Préfixe invalide (14)
        '+201812345678'   // Préfixe invalide (18)
      ];

      invalidNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(false);
        expect(lookup.getOperator()).toBe('Unknown');
      });
    });
  });

  describe('Support de la Tanzanie', () => {
    test('détecte Halotel (Viettel) correctement', () => {
      const halotelNumbers = [
        '+255611234567',   // Halotel 61x
        '+255621234567',   // Halotel 62x
      ];

      halotelNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('TANZANIA_HALOTEL');
        expect(lookup.getFormatted()).toMatch(/\+255 \d{3} \d{3} \d{3}/);
      });
    });

    test('détecte Honora Tanzania correctement', () => {
      const honoraNumbers = [
        '+255651234567',   // Honora 65x
        '+255671234567',   // Honora 67x  
      ];

      honoraNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('TANZANIA_HONORA');
        expect(lookup.getFormatted()).toMatch(/\+255 \d{3} \d{3} \d{3}/);
      });
    });

    test('détecte Tigo Tanzania correctement', () => {
      const tigoNumbers = [
        '+255711234567',   // Tigo 71x
      ];

      tigoNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('TANZANIA_TIGO');
        expect(lookup.getFormatted()).toMatch(/\+255 \d{3} \d{3} \d{3}/);
      });
    });

    test('détecte Smile Tanzania correctement', () => {
      const smileNumbers = [
        '+255661234567',   // Smile 66x
        '+255669876543',   // Smile 66x
      ];

      smileNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('TANZANIA_SMILE');
        expect(lookup.getFormatted()).toMatch(/\+255 \d{3} \d{3} \d{3}/);
      });
    });

    test('détecte Airtel Tanzania correctement', () => {
      const airtelNumbers = [
        '+255681234567',   // Airtel 68x
        '+255691234567',   // Airtel 69x
        '+255781234567',   // Airtel 78x
      ];

      airtelNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('TANZANIA_AIRTEL');
        expect(lookup.getFormatted()).toMatch(/\+255 \d{3} \d{3} \d{3}/);
      });
    });

    test('détecte TTCL correctement', () => {
      const ttclNumbers = [
        '+255731234567',   // TTCL 73x
        '+255739876543',   // TTCL 73x
      ];

      ttclNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('TANZANIA_TTCL');
        expect(lookup.getFormatted()).toMatch(/\+255 \d{3} \d{3} \d{3}/);
      });
    });

    test('détecte Vodacom Tanzania correctement', () => {
      const vodacomNumbers = [
        '+255741234567',   // Vodacom 74x
        '+255751234567',   // Vodacom 75x
        '+255761234567',   // Vodacom 76x
        '+255791234567',   // Vodacom 79x
      ];

      vodacomNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('TANZANIA_VODACOM');
        expect(lookup.getFormatted()).toMatch(/\+255 \d{3} \d{3} \d{3}/);
      });
    });

    test('détecte Zantel correctement', () => {
      const zantelNumbers = [
        '+255771234567',   // Zantel 77x
        '+255779876543',   // Zantel 77x
      ];

      zantelNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(true);
        expect(lookup.getOperator()).toBe('TANZANIA_ZANTEL');
        expect(lookup.getFormatted()).toMatch(/\+255 \d{3} \d{3} \d{3}/);
      });
    });

    test('métadonnées tanzaniennes complètes', () => {
      const lookup = new PhoneLookup('+255741234567');
      const info = lookup.analyze();

      expect(info.country?.name).toBe('Tanzania');
      expect(info.country?.nameLocal).toBe('Tanzania');
      expect(info.country?.flag).toBe('🇹🇿');
      expect(info.country?.currency).toBe('TZS');
      expect(info.country?.timezone).toBe('UTC+3');
      expect(info.country?.capital).toBe('Dodoma');
      expect(info.country?.language).toEqual(['sw', 'en']);
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
    });

    test('rejette les numéros tanzaniens invalides', () => {
      const invalidNumbers = [
        '+255601234567',  // Préfixe invalide (60)
        '+255641234567',  // Préfixe invalide (64)
        '+255701234567',  // Préfixe invalide (70)
        '+255721234567'   // Préfixe invalide (72)
      ];

      invalidNumbers.forEach(phone => {
        const lookup = new PhoneLookup(phone);
        expect(lookup.isValid()).toBe(false);
        expect(lookup.getOperator()).toBe('Unknown');
      });
    });
  });
});

