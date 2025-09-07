// src/__tests__/new-countries.test.ts
// Tests pour les nouveaux pays : RDC, Ouganda, Algérie

import { 
  detectOperator, 
  isValidNumber, 
  getPhoneInfo, 
  formatPhoneNumber 
} from '../index';

describe('DR Congo (RDC) - Code 243', () => {
  describe('Operator Detection', () => {
    test('should detect Vodacom DRC', () => {
      expect(detectOperator('+243811234567')).toBe('DRC_VODACOM');
      expect(detectOperator('+243821234567')).toBe('DRC_VODACOM');
    });

    test('should detect Orange DRC', () => {
      expect(detectOperator('+243891234567')).toBe('DRC_ORANGE');
    });

    test('should detect Airtel DRC', () => {
      expect(detectOperator('+243971234567')).toBe('DRC_AIRTEL');
      expect(detectOperator('+243981234567')).toBe('DRC_AIRTEL');
    });

    test('should detect Africell DRC', () => {
      expect(detectOperator('+243901234567')).toBe('DRC_AFRICELL');
      expect(detectOperator('+243911234567')).toBe('DRC_AFRICELL');
    });
  });

  describe('Validation', () => {
    test('should validate correct DRC numbers', () => {
      expect(isValidNumber('+243811234567')).toBe(true);
      expect(isValidNumber('+243971234567')).toBe(true);
      expect(isValidNumber('243911234567')).toBe(true);
    });

    test('should reject invalid DRC numbers', () => {
      expect(isValidNumber('+243701234567')).toBe(false); // Invalid prefix
      expect(isValidNumber('+24381123456')).toBe(false);  // Too short
      expect(isValidNumber('+2438112345678')).toBe(false); // Too long
    });
  });

  describe('Formatting', () => {
    test('should format DRC numbers correctly', () => {
      expect(formatPhoneNumber('+243811234567')).toBe('+243 81 123 4567');
      expect(formatPhoneNumber('243971234567')).toBe('+243 97 123 4567');
    });
  });
});

describe('Uganda - Code 256', () => {
  describe('Operator Detection', () => {
    test('should detect Airtel Uganda', () => {
      expect(detectOperator('+256701234567')).toBe('UGANDA_AIRTEL');
      expect(detectOperator('+256741234567')).toBe('UGANDA_AIRTEL');
      expect(detectOperator('+256751234567')).toBe('UGANDA_AIRTEL');
    });

    test('should detect MTN Uganda', () => {
      expect(detectOperator('+256771234567')).toBe('UGANDA_MTN');
      expect(detectOperator('+256781234567')).toBe('UGANDA_MTN');
    });

    test('should detect Lycamobile Uganda', () => {
      expect(detectOperator('+256791234567')).toBe('UGANDA_LYCAMOBILE');
    });
  });

  describe('Validation', () => {
    test('should validate correct Uganda numbers', () => {
      expect(isValidNumber('+256701234567')).toBe(true);
      expect(isValidNumber('+256771234567')).toBe(true);
      expect(isValidNumber('256721234567')).toBe(true);
    });

    test('should reject invalid Uganda numbers', () => {
      expect(isValidNumber('+256601234567')).toBe(false); // Invalid prefix
      expect(isValidNumber('+25670123456')).toBe(false);  // Too short
      expect(isValidNumber('+2567012345678')).toBe(false); // Too long
    });
  });

  describe('Formatting', () => {
    test('should format Uganda numbers correctly', () => {
      expect(formatPhoneNumber('+256701234567')).toBe('+256 701 234 567');
      expect(formatPhoneNumber('256771234567')).toBe('+256 771 234 567');
    });
  });
});

describe('Rwanda - Code 250', () => {
  describe('Operator Detection', () => {
    test('should detect MTN Rwanda', () => {
      expect(detectOperator('+250781234567')).toBe('RWANDA_MTN');
      expect(detectOperator('+250791234567')).toBe('RWANDA_MTN');
    });

    test('should detect Airtel Rwanda', () => {
      expect(detectOperator('+250721234567')).toBe('RWANDA_AIRTEL');
      expect(detectOperator('+250731234567')).toBe('RWANDA_AIRTEL');
    });
  });

  describe('Validation', () => {
    test('should validate correct Rwanda numbers', () => {
      expect(isValidNumber('+250781234567')).toBe(true);
      expect(isValidNumber('+250721234567')).toBe(true);
      expect(isValidNumber('250791234567')).toBe(true);
    });

    test('should reject invalid Rwanda numbers', () => {
      expect(isValidNumber('+250681234567')).toBe(false); // Invalid prefix
      expect(isValidNumber('+25078123456')).toBe(false);  // Too short
      expect(isValidNumber('+2507812345678')).toBe(false); // Too long
    });
  });

  describe('Formatting', () => {
    test('should format Rwanda numbers correctly', () => {
      expect(formatPhoneNumber('+250781234567')).toBe('+250 781 234 567');
      expect(formatPhoneNumber('250721234567')).toBe('+250 721 234 567');
    });
  });
});

describe('Algeria - Code 213', () => {
  describe('Operator Detection', () => {
    test('should detect Mobilis Algeria', () => {
      expect(detectOperator('+213512345678')).toBe('ALGERIA_MOBILIS');
      expect(detectOperator('+213912345678')).toBe('ALGERIA_MOBILIS');
    });

    test('should detect Djezzy Algeria', () => {
      expect(detectOperator('+21365123456')).toBe('ALGERIA_DJEZZY');
      expect(detectOperator('+21371234567')).toBe('ALGERIA_DJEZZY');
      expect(detectOperator('+21381234567')).toBe('ALGERIA_DJEZZY');
    });

    test('should detect Ooredoo Algeria', () => {
      expect(detectOperator('+213771234567')).toBe('ALGERIA_OOREDOO');
      expect(detectOperator('+213781234567')).toBe('ALGERIA_OOREDOO');
    });
  });

  describe('Validation', () => {
    test('should validate correct Algeria numbers', () => {
      expect(isValidNumber('+213512345678')).toBe(true);
      expect(isValidNumber('+213771234567')).toBe(true);
      expect(isValidNumber('213912345678')).toBe(true);
    });

    test('should reject invalid Algeria numbers', () => {
      expect(isValidNumber('+213412345678')).toBe(false); // Invalid prefix
      expect(isValidNumber('+21351234567')).toBe(false);  // Too short
    });
  });

  describe('Formatting', () => {
    test('should format Algeria numbers correctly', () => {
      expect(formatPhoneNumber('+213512345678')).toMatch(/^\+213 \d/);
      expect(formatPhoneNumber('213771234567')).toMatch(/^\+213 \d/);
    });
  });
});

describe('Mali - Code 223', () => {
  describe('Operator Detection', () => {
    test('should detect Orange Mali', () => {
      expect(detectOperator('+22370123456')).toBe('MALI_ORANGE');
      expect(detectOperator('+22371123456')).toBe('MALI_ORANGE');
      expect(detectOperator('+22372123456')).toBe('MALI_ORANGE');
      expect(detectOperator('+22373123456')).toBe('MALI_ORANGE');
      expect(detectOperator('+22374123456')).toBe('MALI_ORANGE');
      expect(detectOperator('+22375123456')).toBe('MALI_ORANGE');
      expect(detectOperator('+22376123456')).toBe('MALI_ORANGE');
    });

    test('should detect Moov Mali', () => {
      expect(detectOperator('+22360123456')).toBe('MALI_MOOV');
      expect(detectOperator('+22361123456')).toBe('MALI_MOOV');
      expect(detectOperator('+22362123456')).toBe('MALI_MOOV');
      expect(detectOperator('+22363123456')).toBe('MALI_MOOV');
      expect(detectOperator('+22364123456')).toBe('MALI_MOOV');
    });

    test('should detect Telecel Mali', () => {
      expect(detectOperator('+22365123456')).toBe('MALI_TELECEL');
      expect(detectOperator('+22366123456')).toBe('MALI_TELECEL');
      expect(detectOperator('+22367123456')).toBe('MALI_TELECEL');
    });
  });

  describe('Validation', () => {
    test('should validate correct Mali numbers', () => {
      expect(isValidNumber('+22370123456')).toBe(true);
      expect(isValidNumber('+22360123456')).toBe(true);
      expect(isValidNumber('22365123456')).toBe(true);
    });

    test('should reject invalid Mali numbers', () => {
      expect(isValidNumber('+22350123456')).toBe(false); // Invalid prefix
      expect(isValidNumber('+2237012345')).toBe(false);  // Too short
      expect(isValidNumber('+22370123456789')).toBe(false); // Too long
    });
  });

  describe('Formatting', () => {
    test('should format Mali numbers correctly', () => {
      expect(formatPhoneNumber('+22370123456')).toBe('+223 70 12 34 56');
      expect(formatPhoneNumber('22360123456')).toBe('+223 60 12 34 56');
    });
  });
});

describe('Sudan - Code 249', () => {
  describe('Operator Detection', () => {
    test('should detect Zain Sudan', () => {
      expect(detectOperator('+249911234567')).toBe('SUDAN_ZAIN');
      expect(detectOperator('+249921234567')).toBe('SUDAN_ZAIN');
      expect(detectOperator('+249931234567')).toBe('SUDAN_ZAIN');
      expect(detectOperator('+249951234567')).toBe('SUDAN_ZAIN');
    });

    test('should detect MTN Sudan', () => {
      expect(detectOperator('+249961234567')).toBe('SUDAN_MTN');
      expect(detectOperator('+249971234567')).toBe('SUDAN_MTN');
      expect(detectOperator('+249981234567')).toBe('SUDAN_MTN');
    });

    test('should detect Sudani', () => {
      expect(detectOperator('+249991234567')).toBe('SUDAN_SUDANI');
    });
  });

  describe('Validation', () => {
    test('should validate correct Sudan numbers', () => {
      expect(isValidNumber('+249911234567')).toBe(true);
      expect(isValidNumber('+249961234567')).toBe(true);
      expect(isValidNumber('249991234567')).toBe(true);
    });

    test('should reject invalid Sudan numbers', () => {
      expect(isValidNumber('+249901234567')).toBe(false); // Invalid prefix
      expect(isValidNumber('+24991123456')).toBe(false);  // Too short
      expect(isValidNumber('+2499112345678')).toBe(false); // Too long
    });
  });

  describe('Formatting', () => {
    test('should format Sudan numbers correctly', () => {
      expect(formatPhoneNumber('+249911234567')).toBe('+249 91 123 4567');
      expect(formatPhoneNumber('249961234567')).toBe('+249 96 123 4567');
    });
  });
});

describe('Mozambique - Code 258', () => {
  describe('Operator Detection', () => {
    test('should detect Vodacom Mozambique', () => {
      expect(detectOperator('+258821234567')).toBe('MOZAMBIQUE_VODACOM');
      expect(detectOperator('+258841234567')).toBe('MOZAMBIQUE_VODACOM');
    });

    test('should detect Movitel', () => {
      expect(detectOperator('+258861234567')).toBe('MOZAMBIQUE_MOVITEL');
      expect(detectOperator('+258871234567')).toBe('MOZAMBIQUE_MOVITEL');
    });

    test('should detect Tmcel', () => {
      expect(detectOperator('+258831234567')).toBe('MOZAMBIQUE_TMCEL');
    });
  });

  describe('Validation', () => {
    test('should validate correct Mozambique numbers', () => {
      expect(isValidNumber('+258821234567')).toBe(true);
      expect(isValidNumber('+258861234567')).toBe(true);
      expect(isValidNumber('258831234567')).toBe(true);
    });

    test('should reject invalid Mozambique numbers', () => {
      expect(isValidNumber('+258801234567')).toBe(false); // Invalid prefix
      expect(isValidNumber('+25882123456')).toBe(false);  // Too short
      expect(isValidNumber('+2588212345678')).toBe(false); // Too long
    });
  });

  describe('Formatting', () => {
    test('should format Mozambique numbers correctly', () => {
      expect(formatPhoneNumber('+258821234567')).toBe('+258 82 123 4567');
      expect(formatPhoneNumber('258861234567')).toBe('+258 86 123 4567');
    });
  });
});

describe('Phone Info Integration', () => {
  test('should return complete info for DRC numbers', () => {
    const info = getPhoneInfo('+243811234567');
    expect(info.operator).toBe('DRC_VODACOM');
    expect(info.isValid).toBe(true);
    expect(info.countryCode).toBe('+243');
    expect(info.isMobile).toBe(true);
  });

  test('should return complete info for Uganda numbers', () => {
    const info = getPhoneInfo('+256771234567');
    expect(info.operator).toBe('UGANDA_MTN');
    expect(info.isValid).toBe(true);
    expect(info.countryCode).toBe('+256');
    expect(info.isMobile).toBe(true);
  });

  test('should return complete info for Rwanda numbers', () => {
    const info = getPhoneInfo('+250781234567');
    expect(info.operator).toBe('RWANDA_MTN');
    expect(info.isValid).toBe(true);
    expect(info.countryCode).toBe('+250');
    expect(info.isMobile).toBe(true);
  });

  test('should return complete info for Algeria numbers', () => {
    const info = getPhoneInfo('+213512345678');
    expect(info.operator).toBe('ALGERIA_MOBILIS');
    expect(info.isValid).toBe(true);
    expect(info.countryCode).toBe('+213');
    expect(info.isMobile).toBe(true);
  });

  test('should return complete info for Mali numbers', () => {
    const info = getPhoneInfo('+22370123456');
    expect(info.operator).toBe('MALI_ORANGE');
    expect(info.isValid).toBe(true);
    expect(info.countryCode).toBe('+223');
    expect(info.isMobile).toBe(true);
  });

  test('should return complete info for Sudan numbers', () => {
    const info = getPhoneInfo('+249911234567');
    expect(info.operator).toBe('SUDAN_ZAIN');
    expect(info.isValid).toBe(true);
    expect(info.countryCode).toBe('+249');
    expect(info.isMobile).toBe(true);
  });

  test('should return complete info for Mozambique numbers', () => {
    const info = getPhoneInfo('+258821234567');
    expect(info.operator).toBe('MOZAMBIQUE_VODACOM');
    expect(info.isValid).toBe(true);
    expect(info.countryCode).toBe('+258');
    expect(info.isMobile).toBe(true);
  });
});
