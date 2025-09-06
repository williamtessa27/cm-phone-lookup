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
});
