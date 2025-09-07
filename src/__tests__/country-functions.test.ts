// src/__tests__/country-functions.test.ts
// Tests directs des fonctions spécifiques des pays pour améliorer la couverture

import { 
  detectMaliOperator, 
  validateMaliNumber, 
  formatMaliNumber, 
  isMaliMobile 
} from '../countries/mali';

import { 
  detectMozambiqueOperator, 
  validateMozambiqueNumber, 
  formatMozambiqueNumber, 
  isMozambiqueMobile 
} from '../countries/mozambique';

import { 
  detectSudanOperator, 
  validateSudanNumber, 
  formatSudanNumber, 
  isSudanMobile 
} from '../countries/sudan';

describe('Mali - Fonctions directes', () => {
  describe('detectMaliOperator', () => {
    test('should detect operators with local numbers', () => {
      expect(detectMaliOperator('70123456')).toBe('MALI_ORANGE');
      expect(detectMaliOperator('60123456')).toBe('MALI_MOOV');
      expect(detectMaliOperator('65123456')).toBe('MALI_TELECEL');
    });

    test('should detect operators with 0 prefix', () => {
      expect(detectMaliOperator('070123456')).toBe('MALI_ORANGE');
      expect(detectMaliOperator('060123456')).toBe('MALI_MOOV');
      expect(detectMaliOperator('065123456')).toBe('MALI_TELECEL');
    });

    test('should return Unknown for invalid prefixes', () => {
      expect(detectMaliOperator('50123456')).toBe('Unknown');
      expect(detectMaliOperator('80123456')).toBe('Unknown');
      expect(detectMaliOperator('90123456')).toBe('Unknown');
    });
  });

  describe('validateMaliNumber', () => {
    test('should validate correct Mali numbers', () => {
      expect(validateMaliNumber('+22370123456')).toBe(true);
      expect(validateMaliNumber('22370123456')).toBe(true);
      expect(validateMaliNumber('+223070123456')).toBe(true); // With 0 prefix
    });

    test('should reject numbers with wrong country code', () => {
      expect(validateMaliNumber('+22270123456')).toBe(false); // Wrong country code
      expect(validateMaliNumber('+22470123456')).toBe(false); // Wrong country code
      expect(validateMaliNumber('22270123456')).toBe(false);  // Wrong country code
    });

    test('should reject invalid local numbers', () => {
      expect(validateMaliNumber('+22350123456')).toBe(false); // Invalid prefix
      expect(validateMaliNumber('+2237012345')).toBe(false);  // Too short
      expect(validateMaliNumber('+22370123456789')).toBe(false); // Too long
    });
  });

  describe('formatMaliNumber', () => {
    test('should format correct Mali numbers', () => {
      expect(formatMaliNumber('+22370123456')).toBe('+223 70 12 34 56');
      expect(formatMaliNumber('22370123456')).toBe('+223 70 12 34 56');
      expect(formatMaliNumber('+223070123456')).toBe('+223 70 12 34 56'); // With 0 prefix
    });

    test('should return original for wrong country code', () => {
      expect(formatMaliNumber('+22270123456')).toBe('+22270123456');
      expect(formatMaliNumber('22270123456')).toBe('22270123456');
    });

    test('should return original for invalid length', () => {
      expect(formatMaliNumber('+2237012345')).toBe('+2237012345');   // Too short
      expect(formatMaliNumber('+22370123456789')).toBe('+22370123456789'); // Too long
    });
  });

  describe('isMaliMobile', () => {
    test('should identify mobile numbers correctly', () => {
      expect(isMaliMobile('70123456')).toBe(true);
      expect(isMaliMobile('60123456')).toBe(true);
      expect(isMaliMobile('65123456')).toBe(true);
      expect(isMaliMobile('070123456')).toBe(true); // With 0 prefix
    });

    test('should reject non-mobile numbers', () => {
      expect(isMaliMobile('50123456')).toBe(false);
      expect(isMaliMobile('80123456')).toBe(false);
      expect(isMaliMobile('12345678')).toBe(false);
    });
  });
});

describe('Mozambique - Fonctions directes', () => {
  describe('detectMozambiqueOperator', () => {
    test('should detect operators with local numbers', () => {
      expect(detectMozambiqueOperator('821234567')).toBe('MOZAMBIQUE_VODACOM');
      expect(detectMozambiqueOperator('841234567')).toBe('MOZAMBIQUE_VODACOM');
      expect(detectMozambiqueOperator('861234567')).toBe('MOZAMBIQUE_MOVITEL');
      expect(detectMozambiqueOperator('831234567')).toBe('MOZAMBIQUE_TMCEL');
    });

    test('should detect operators with 0 prefix', () => {
      expect(detectMozambiqueOperator('0821234567')).toBe('MOZAMBIQUE_VODACOM');
      expect(detectMozambiqueOperator('0861234567')).toBe('MOZAMBIQUE_MOVITEL');
      expect(detectMozambiqueOperator('0831234567')).toBe('MOZAMBIQUE_TMCEL');
    });

    test('should return Unknown for invalid prefixes', () => {
      expect(detectMozambiqueOperator('801234567')).toBe('Unknown');
      expect(detectMozambiqueOperator('851234567')).toBe('Unknown');
      expect(detectMozambiqueOperator('901234567')).toBe('Unknown');
    });
  });

  describe('validateMozambiqueNumber', () => {
    test('should validate correct Mozambique numbers', () => {
      expect(validateMozambiqueNumber('+258821234567')).toBe(true);
      expect(validateMozambiqueNumber('258821234567')).toBe(true);
      expect(validateMozambiqueNumber('+2580821234567')).toBe(true); // With 0 prefix
    });

    test('should reject numbers with wrong country code', () => {
      expect(validateMozambiqueNumber('+257821234567')).toBe(false); // Wrong country code
      expect(validateMozambiqueNumber('+259821234567')).toBe(false); // Wrong country code
      expect(validateMozambiqueNumber('257821234567')).toBe(false);  // Wrong country code
    });

    test('should reject invalid local numbers', () => {
      expect(validateMozambiqueNumber('+258801234567')).toBe(false); // Invalid prefix
      expect(validateMozambiqueNumber('+25882123456')).toBe(false);  // Too short
      expect(validateMozambiqueNumber('+2588212345678')).toBe(false); // Too long
    });
  });

  describe('formatMozambiqueNumber', () => {
    test('should format correct Mozambique numbers', () => {
      expect(formatMozambiqueNumber('+258821234567')).toBe('+258 82 123 4567');
      expect(formatMozambiqueNumber('258821234567')).toBe('+258 82 123 4567');
      expect(formatMozambiqueNumber('+2580821234567')).toBe('+258 82 123 4567'); // With 0 prefix
    });

    test('should return original for wrong country code', () => {
      expect(formatMozambiqueNumber('+257821234567')).toBe('+257821234567');
      expect(formatMozambiqueNumber('257821234567')).toBe('257821234567');
    });

    test('should return original for invalid length', () => {
      expect(formatMozambiqueNumber('+25882123456')).toBe('+25882123456');   // Too short
      expect(formatMozambiqueNumber('+2588212345678')).toBe('+2588212345678'); // Too long
    });
  });

  describe('isMozambiqueMobile', () => {
    test('should identify mobile numbers correctly', () => {
      expect(isMozambiqueMobile('821234567')).toBe(true);
      expect(isMozambiqueMobile('841234567')).toBe(true);
      expect(isMozambiqueMobile('861234567')).toBe(true);
      expect(isMozambiqueMobile('0821234567')).toBe(true); // With 0 prefix
    });

    test('should reject non-mobile numbers', () => {
      expect(isMozambiqueMobile('801234567')).toBe(false);
      expect(isMozambiqueMobile('851234567')).toBe(false);
      expect(isMozambiqueMobile('123456789')).toBe(false);
    });
  });
});

describe('Sudan - Fonctions directes', () => {
  describe('detectSudanOperator', () => {
    test('should detect operators with local numbers', () => {
      expect(detectSudanOperator('911234567')).toBe('SUDAN_ZAIN');
      expect(detectSudanOperator('921234567')).toBe('SUDAN_ZAIN');
      expect(detectSudanOperator('961234567')).toBe('SUDAN_MTN');
      expect(detectSudanOperator('991234567')).toBe('SUDAN_SUDANI');
    });

    test('should detect operators with 0 prefix', () => {
      expect(detectSudanOperator('0911234567')).toBe('SUDAN_ZAIN');
      expect(detectSudanOperator('0961234567')).toBe('SUDAN_MTN');
      expect(detectSudanOperator('0991234567')).toBe('SUDAN_SUDANI');
    });

    test('should return Unknown for invalid prefixes', () => {
      expect(detectSudanOperator('901234567')).toBe('Unknown');
      expect(detectSudanOperator('801234567')).toBe('Unknown');
      expect(detectSudanOperator('701234567')).toBe('Unknown');
    });
  });

  describe('validateSudanNumber', () => {
    test('should validate correct Sudan numbers', () => {
      expect(validateSudanNumber('+249911234567')).toBe(true);
      expect(validateSudanNumber('249911234567')).toBe(true);
      expect(validateSudanNumber('+2490911234567')).toBe(true); // With 0 prefix
    });

    test('should reject numbers with wrong country code', () => {
      expect(validateSudanNumber('+248911234567')).toBe(false); // Wrong country code
      expect(validateSudanNumber('+250911234567')).toBe(false); // Wrong country code
      expect(validateSudanNumber('248911234567')).toBe(false);  // Wrong country code
    });

    test('should reject invalid local numbers', () => {
      expect(validateSudanNumber('+249901234567')).toBe(false); // Invalid prefix
      expect(validateSudanNumber('+24991123456')).toBe(false);  // Too short
      expect(validateSudanNumber('+2499112345678')).toBe(false); // Too long
    });
  });

  describe('formatSudanNumber', () => {
    test('should format correct Sudan numbers', () => {
      expect(formatSudanNumber('+249911234567')).toBe('+249 91 123 4567');
      expect(formatSudanNumber('249911234567')).toBe('+249 91 123 4567');
      expect(formatSudanNumber('+2490911234567')).toBe('+249 91 123 4567'); // With 0 prefix
    });

    test('should return original for wrong country code', () => {
      expect(formatSudanNumber('+248911234567')).toBe('+248911234567');
      expect(formatSudanNumber('248911234567')).toBe('248911234567');
    });

    test('should return original for invalid length', () => {
      expect(formatSudanNumber('+24991123456')).toBe('+24991123456');   // Too short
      expect(formatSudanNumber('+2499112345678')).toBe('+2499112345678'); // Too long
    });
  });

  describe('isSudanMobile', () => {
    test('should identify mobile numbers correctly', () => {
      expect(isSudanMobile('911234567')).toBe(true);
      expect(isSudanMobile('961234567')).toBe(true);
      expect(isSudanMobile('991234567')).toBe(true);
      expect(isSudanMobile('0911234567')).toBe(true); // With 0 prefix
    });

    test('should reject non-mobile numbers', () => {
      expect(isSudanMobile('901234567')).toBe(false);
      expect(isSudanMobile('801234567')).toBe(false);
      expect(isSudanMobile('123456789')).toBe(false);
    });
  });
});

describe('Edge Cases - Gestion des erreurs', () => {
  describe('Mali - Cas limites', () => {
    test('should handle empty strings', () => {
      expect(detectMaliOperator('')).toBe('Unknown');
      expect(validateMaliNumber('')).toBe(false);
      expect(formatMaliNumber('')).toBe('');
      expect(isMaliMobile('')).toBe(false);
    });

    test('should handle invalid characters', () => {
      expect(detectMaliOperator('abc123456')).toBe('Unknown');
      expect(validateMaliNumber('+223abc123456')).toBe(false);
      expect(isMaliMobile('abc123456')).toBe(false);
    });
  });

  describe('Mozambique - Cas limites', () => {
    test('should handle empty strings', () => {
      expect(detectMozambiqueOperator('')).toBe('Unknown');
      expect(validateMozambiqueNumber('')).toBe(false);
      expect(formatMozambiqueNumber('')).toBe('');
      expect(isMozambiqueMobile('')).toBe(false);
    });

    test('should handle invalid characters', () => {
      expect(detectMozambiqueOperator('abc123456')).toBe('Unknown');
      expect(validateMozambiqueNumber('+258abc123456')).toBe(false);
      expect(isMozambiqueMobile('abc123456')).toBe(false);
    });
  });

  describe('Sudan - Cas limites', () => {
    test('should handle empty strings', () => {
      expect(detectSudanOperator('')).toBe('Unknown');
      expect(validateSudanNumber('')).toBe(false);
      expect(formatSudanNumber('')).toBe('');
      expect(isSudanMobile('')).toBe(false);
    });

    test('should handle invalid characters', () => {
      expect(detectSudanOperator('abc123456')).toBe('Unknown');
      expect(validateSudanNumber('+249abc123456')).toBe(false);
      expect(isSudanMobile('abc123456')).toBe(false);
    });
  });
});
