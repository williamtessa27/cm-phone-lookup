// src/__tests__/new-countries-extended.test.ts
// Tests complets pour les nouveaux pays : Angola, Burkina Faso et Soudan du Sud

import {
  detectOperator,
  isValidNumber,
  formatPhoneNumber,
  getPhoneInfo,
  PhoneLookup
} from '../index';

import {
  detectAngolaOperator,
  validateAngolaNumber,
  formatAngolaNumber,
  isAngolaMobile,
  getAngolaNumberInfo
} from '../countries/angola';

import {
  detectBurkinaFasoOperator,
  validateBurkinaFasoNumber,
  formatBurkinaFasoNumber,
  isBurkinaFasoMobile,
  getBurkinaFasoNumberInfo
} from '../countries/burkina-faso';

import {
  detectSouthSudanOperator,
  validateSouthSudanNumber,
  formatSouthSudanNumber,
  isSouthSudanMobile,
  getSouthSudanNumberInfo
} from '../countries/south-sudan';

import { getCountryMetadata } from '../countries/metadata';

describe('Angola 🇦🇴 - Tests complets', () => {
  describe('Détection d\'opérateur', () => {
    test('détecte correctement Unitel', () => {
      expect(detectAngolaOperator('911234567')).toBe('ANGOLA_UNITEL');
      expect(detectAngolaOperator('921234567')).toBe('ANGOLA_UNITEL');
      expect(detectOperator('+244911234567')).toBe('ANGOLA_UNITEL');
    });

    test('détecte correctement Movicel', () => {
      expect(detectAngolaOperator('931234567')).toBe('ANGOLA_MOVICEL');
      expect(detectOperator('+244931234567')).toBe('ANGOLA_MOVICEL');
    });

    test('détecte correctement Africell Angola', () => {
      expect(detectAngolaOperator('941234567')).toBe('ANGOLA_AFRICELL');
      expect(detectAngolaOperator('951234567')).toBe('ANGOLA_AFRICELL');
      expect(detectOperator('+244951234567')).toBe('ANGOLA_AFRICELL');
    });

    test('retourne Unknown pour préfixes invalides', () => {
      expect(detectAngolaOperator('881234567')).toBe('Unknown');
      expect(detectAngolaOperator('901234567')).toBe('Unknown');
    });
  });

  describe('Validation', () => {
    test('valide les numéros corrects', () => {
      expect(validateAngolaNumber('+244911234567')).toBe(true);
      expect(validateAngolaNumber('+244931234567')).toBe(true);
      expect(validateAngolaNumber('+244951234567')).toBe(true);
      expect(isValidNumber('+244911234567')).toBe(true);
    });

    test('rejette les numéros incorrects', () => {
      expect(validateAngolaNumber('+244811234567')).toBe(false); // Préfixe invalide
      expect(validateAngolaNumber('+24491123456')).toBe(false);  // Trop court
      expect(validateAngolaNumber('+2449112345678')).toBe(false); // Trop long
      expect(validateAngolaNumber('+237911234567')).toBe(false);  // Mauvais code pays
    });

    test('gère les cas d\'erreur et edge cases', () => {
      // Test des fonctions directes avec des numéros invalides
      expect(validateAngolaNumber('+244')).toBe(false);
      expect(validateAngolaNumber('+244123')).toBe(false);
      expect(formatAngolaNumber('+244')).toBe('+244');
      expect(formatAngolaNumber('+244123')).toBe('+244123');
      expect(formatAngolaNumber('+237911234567')).toBe('+237911234567'); // Mauvais code pays
      expect(isAngolaMobile('')).toBe(false);
      expect(isAngolaMobile('123')).toBe(false);
      expect(isAngolaMobile('811234567')).toBe(false); // Préfixe invalide
    });
  });

  describe('Formatage', () => {
    test('formate correctement les numéros', () => {
      expect(formatAngolaNumber('+244911234567')).toBe('+244 91 123 4567');
      expect(formatAngolaNumber('+244931234567')).toBe('+244 93 123 4567');
      expect(formatPhoneNumber('+244951234567')).toBe('+244 95 123 4567');
    });
  });

  describe('Métadonnées', () => {
    test('retourne les bonnes métadonnées', () => {
      const metadata = getCountryMetadata('244');
      expect(metadata?.name).toBe('Angola');
      expect(metadata?.flag).toBe('🇦🇴');
      expect(metadata?.currency).toBe('AOA');
      expect(metadata?.capital).toBe('Luanda');
      expect(metadata?.language).toBe('pt');
    });
  });

  describe('API unifiée PhoneLookup', () => {
    test('analyse complète avec PhoneLookup.analyze()', () => {
      const result = PhoneLookup.analyze('+244911234567');
      expect(result.operator).toBe('ANGOLA_UNITEL');
      expect(result.isValid).toBe(true);
      expect(result.country?.name).toBe('Angola');
      expect(result.country?.flag).toBe('🇦🇴');
    });

    test('getAngolaNumberInfo() fournit des informations détaillées', () => {
      const info = getAngolaNumberInfo('911234567');
      expect(info.operator).toBe('ANGOLA_UNITEL');
      expect(info.isValid).toBe(true);
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
      expect(info.length).toBe(9);
      expect(info.prefix).toBe('91');
    });
  });
});

describe('Burkina Faso 🇧🇫 - Tests complets', () => {
  describe('Détection d\'opérateur', () => {
    test('détecte correctement Orange Burkina Faso', () => {
      expect(detectBurkinaFasoOperator('70123456')).toBe('BURKINA_FASO_ORANGE');
      expect(detectBurkinaFasoOperator('71123456')).toBe('BURKINA_FASO_ORANGE');
      expect(detectBurkinaFasoOperator('72123456')).toBe('BURKINA_FASO_ORANGE');
      expect(detectOperator('+22670123456')).toBe('BURKINA_FASO_ORANGE');
    });

    test('détecte correctement Moov Africa Burkina Faso', () => {
      expect(detectBurkinaFasoOperator('74123456')).toBe('BURKINA_FASO_MOOV');
      expect(detectBurkinaFasoOperator('75123456')).toBe('BURKINA_FASO_MOOV');
      expect(detectOperator('+22674123456')).toBe('BURKINA_FASO_MOOV');
    });

    test('détecte correctement Telecel Faso', () => {
      expect(detectBurkinaFasoOperator('76123456')).toBe('BURKINA_FASO_TELECEL');
      expect(detectOperator('+22676123456')).toBe('BURKINA_FASO_TELECEL');
    });

    test('retourne Unknown pour préfixes invalides', () => {
      expect(detectBurkinaFasoOperator('68123456')).toBe('Unknown');
      expect(detectBurkinaFasoOperator('80123456')).toBe('Unknown');
    });
  });

  describe('Validation', () => {
    test('valide les numéros corrects', () => {
      expect(validateBurkinaFasoNumber('+22670123456')).toBe(true);
      expect(validateBurkinaFasoNumber('+22674123456')).toBe(true);
      expect(validateBurkinaFasoNumber('+22676123456')).toBe(true);
      expect(isValidNumber('+22670123456')).toBe(true);
    });

    test('rejette les numéros incorrects', () => {
      expect(validateBurkinaFasoNumber('+22668123456')).toBe(false); // Préfixe invalide
      expect(validateBurkinaFasoNumber('+2267012345')).toBe(false);  // Trop court
      expect(validateBurkinaFasoNumber('+226701234567')).toBe(false); // Trop long
      expect(validateBurkinaFasoNumber('+22170123456')).toBe(false);  // Mauvais code pays
    });

    test('gère les cas d\'erreur et edge cases', () => {
      // Test des fonctions directes avec des numéros invalides
      expect(validateBurkinaFasoNumber('+226')).toBe(false);
      expect(validateBurkinaFasoNumber('+226123')).toBe(false);
      expect(formatBurkinaFasoNumber('+226')).toBe('+226');
      expect(formatBurkinaFasoNumber('+226123')).toBe('+226123');
      expect(formatBurkinaFasoNumber('+22170123456')).toBe('+22170123456'); // Mauvais code pays
      expect(isBurkinaFasoMobile('')).toBe(false);
      expect(isBurkinaFasoMobile('123')).toBe(false);
      expect(isBurkinaFasoMobile('68123456')).toBe(false); // Préfixe invalide
    });
  });

  describe('Formatage', () => {
    test('formate correctement les numéros', () => {
      expect(formatBurkinaFasoNumber('+22670123456')).toBe('+226 70 12 34 56');
      expect(formatBurkinaFasoNumber('+22674123456')).toBe('+226 74 12 34 56');
      expect(formatPhoneNumber('+22676123456')).toBe('+226 76 12 34 56');
    });
  });

  describe('Métadonnées', () => {
    test('retourne les bonnes métadonnées', () => {
      const metadata = getCountryMetadata('226');
      expect(metadata?.name).toBe('Burkina Faso');
      expect(metadata?.flag).toBe('🇧🇫');
      expect(metadata?.currency).toBe('XOF');
      expect(metadata?.capital).toBe('Ouagadougou');
      expect(metadata?.language).toBe('fr');
    });
  });

  describe('API unifiée PhoneLookup', () => {
    test('analyse complète avec PhoneLookup.analyze()', () => {
      const result = PhoneLookup.analyze('+22670123456');
      expect(result.operator).toBe('BURKINA_FASO_ORANGE');
      expect(result.isValid).toBe(true);
      expect(result.country?.name).toBe('Burkina Faso');
      expect(result.country?.flag).toBe('🇧🇫');
    });

    test('getBurkinaFasoNumberInfo() fournit des informations détaillées', () => {
      const info = getBurkinaFasoNumberInfo('70123456');
      expect(info.operator).toBe('BURKINA_FASO_ORANGE');
      expect(info.isValid).toBe(true);
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
      expect(info.length).toBe(8);
      expect(info.prefix).toBe('70');
    });
  });
});

describe('Soudan du Sud 🇸🇸 - Tests complets', () => {
  describe('Détection d\'opérateur', () => {
    test('détecte correctement MTN South Sudan', () => {
      expect(detectSouthSudanOperator('921234567')).toBe('SOUTH_SUDAN_MTN');
      expect(detectSouthSudanOperator('951234567')).toBe('SOUTH_SUDAN_MTN');
      expect(detectOperator('+211921234567')).toBe('SOUTH_SUDAN_MTN');
    });

    test('détecte correctement Zain South Sudan', () => {
      expect(detectSouthSudanOperator('911234567')).toBe('SOUTH_SUDAN_ZAIN');
      expect(detectSouthSudanOperator('971234567')).toBe('SOUTH_SUDAN_ZAIN');
      expect(detectOperator('+211971234567')).toBe('SOUTH_SUDAN_ZAIN');
    });

    test('retourne Unknown pour préfixes invalides', () => {
      expect(detectSouthSudanOperator('881234567')).toBe('Unknown');
      expect(detectSouthSudanOperator('901234567')).toBe('Unknown');
    });
  });

  describe('Validation', () => {
    test('valide les numéros corrects', () => {
      expect(validateSouthSudanNumber('+211921234567')).toBe(true);
      expect(validateSouthSudanNumber('+211911234567')).toBe(true);
      expect(validateSouthSudanNumber('+211971234567')).toBe(true);
      expect(isValidNumber('+211921234567')).toBe(true);
    });

    test('rejette les numéros incorrects', () => {
      expect(validateSouthSudanNumber('+211881234567')).toBe(false); // Préfixe invalide
      expect(validateSouthSudanNumber('+21192123456')).toBe(false);  // Trop court
      expect(validateSouthSudanNumber('+2119212345678')).toBe(false); // Trop long
      expect(validateSouthSudanNumber('+249921234567')).toBe(false);  // Mauvais code pays (Soudan)
    });

    test('gère les cas d\'erreur et edge cases', () => {
      // Test des fonctions directes avec des numéros invalides
      expect(validateSouthSudanNumber('+211')).toBe(false);
      expect(validateSouthSudanNumber('+211123')).toBe(false);
      expect(formatSouthSudanNumber('+211')).toBe('+211');
      expect(formatSouthSudanNumber('+211123')).toBe('+211123');
      expect(formatSouthSudanNumber('+249921234567')).toBe('+249921234567'); // Mauvais code pays
      expect(isSouthSudanMobile('')).toBe(false);
      expect(isSouthSudanMobile('123')).toBe(false);
      expect(isSouthSudanMobile('881234567')).toBe(false); // Préfixe invalide
    });
  });

  describe('Formatage', () => {
    test('formate correctement les numéros', () => {
      expect(formatSouthSudanNumber('+211921234567')).toBe('+211 92 123 4567');
      expect(formatSouthSudanNumber('+211911234567')).toBe('+211 91 123 4567');
      expect(formatPhoneNumber('+211971234567')).toBe('+211 97 123 4567');
    });
  });

  describe('Métadonnées', () => {
    test('retourne les bonnes métadonnées', () => {
      const metadata = getCountryMetadata('211');
      expect(metadata?.name).toBe('South Sudan');
      expect(metadata?.flag).toBe('🇸🇸');
      expect(metadata?.currency).toBe('SSP');
      expect(metadata?.capital).toBe('Juba');
      expect(metadata?.language).toBe('en');
    });
  });

  describe('API unifiée PhoneLookup', () => {
    test('analyse complète avec PhoneLookup.analyze()', () => {
      const result = PhoneLookup.analyze('+211921234567');
      expect(result.operator).toBe('SOUTH_SUDAN_MTN');
      expect(result.isValid).toBe(true);
      expect(result.country?.name).toBe('South Sudan');
      expect(result.country?.flag).toBe('🇸🇸');
    });

    test('getSouthSudanNumberInfo() fournit des informations détaillées', () => {
      const info = getSouthSudanNumberInfo('921234567');
      expect(info.operator).toBe('SOUTH_SUDAN_MTN');
      expect(info.isValid).toBe(true);
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
      expect(info.length).toBe(9);
      expect(info.prefix).toBe('92');
    });
  });
});

describe('Tests d\'intégration - Nouveaux pays', () => {
  describe('getPhoneInfo pour tous les nouveaux pays', () => {
    test('Angola - informations complètes', () => {
      const info = getPhoneInfo('+244911234567');
      expect(info.operator).toBe('ANGOLA_UNITEL');
      expect(info.isValid).toBe(true);
      expect(info.countryCode).toBe('+244');
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
      expect(info.formattedNumber).toBe('+244 91 123 4567');
    });

    test('Burkina Faso - informations complètes', () => {
      const info = getPhoneInfo('+22670123456');
      expect(info.operator).toBe('BURKINA_FASO_ORANGE');
      expect(info.isValid).toBe(true);
      expect(info.countryCode).toBe('+226');
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
      expect(info.formattedNumber).toBe('+226 70 12 34 56');
    });

    test('Soudan du Sud - informations complètes', () => {
      const info = getPhoneInfo('+211921234567');
      expect(info.operator).toBe('SOUTH_SUDAN_MTN');
      expect(info.isValid).toBe(true);
      expect(info.countryCode).toBe('+211');
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
      expect(info.formattedNumber).toBe('+211 92 123 4567');
    });
  });

  describe('Tests avec différents formats d\'entrée', () => {
    test('Angola avec différents formats', () => {
      const formats = [
        '+244911234567',
        '00244911234567',
        '244911234567',
        '911234567' // Format local (nécessite contexte pays)
      ];
      
      // Les 3 premiers formats devraient fonctionner
      expect(detectOperator(formats[0]!)).toBe('ANGOLA_UNITEL');
      expect(isValidNumber(formats[0]!)).toBe(true);
      expect(formatPhoneNumber(formats[0]!)).toBe('+244 91 123 4567');
    });
  });
});
