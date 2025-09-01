// src/__tests__/index.test.ts
// Tests principaux pour les fonctions de base de cm-phone-lookup

import {
  detectOperator,
  isValidNumber,
  getPhoneInfo,
  formatPhoneNumber,
  getOperatorPrefixes,
  getSupportedOperators,
  isPrefixForOperator
} from '../index';

describe('CM Phone Lookup - Fonctions principales', () => {
  describe('detectOperator', () => {
    test('détecte correctement les opérateurs camerounais', () => {
      expect(detectOperator('+237650123456')).toBe('CAMEROON_MTN');
      expect(detectOperator('+237655123456')).toBe('CAMEROON_ORANGE');
      expect(detectOperator('+237660123456')).toBe('CAMEROON_NEXTTEL');
      expect(detectOperator('+237222123456')).toBe('CAMEROON_CAMTEL');
    });

    test('détecte correctement les opérateurs sénégalais', () => {
      expect(detectOperator('+221771234567')).toBe('SENEGAL_ORANGE');
      expect(detectOperator('+221761234567')).toBe('SENEGAL_TIGO');
      expect(detectOperator('+221701234567')).toBe('SENEGAL_EXPRESSO');
    });

    test('détecte correctement les opérateurs ivoiriens', () => {
      expect(detectOperator('+22507123456')).toBe('IVORY_COAST_ORANGE');
      expect(detectOperator('+22505123456')).toBe('IVORY_COAST_MTN');
      expect(detectOperator('+22501123456')).toBe('IVORY_COAST_MOOV');
    });

    test('détecte correctement les opérateurs nigérians', () => {
      expect(detectOperator('+2348031234567')).toBe('NIGERIA_MTN');
      expect(detectOperator('+2347011234567')).toBe('NIGERIA_AIRTEL');
      expect(detectOperator('+2348051234567')).toBe('NIGERIA_GLO');
      expect(detectOperator('+2348091234567')).toBe('NIGERIA_9MOBILE');
    });

    test('détecte correctement les opérateurs ghanéens', () => {
      expect(detectOperator('+233241234567')).toBe('GHANA_MTN');
      expect(detectOperator('+233201234567')).toBe('GHANA_VODAFONE');
      expect(detectOperator('+233261234567')).toBe('GHANA_AIRTELTIGO');
    });

    test('détecte correctement les opérateurs kényans', () => {
      expect(detectOperator('+254700123456')).toBe('KENYA_SAFARICOM');
      expect(detectOperator('+254730123456')).toBe('KENYA_AIRTEL');
      expect(detectOperator('+254770123456')).toBe('KENYA_TELKOM');
    });

    test('détecte correctement les opérateurs sud-africains', () => {
      expect(detectOperator('+27721234567')).toBe('SOUTH_AFRICA_VODACOM');
      expect(detectOperator('+27731234567')).toBe('SOUTH_AFRICA_MTN');
      expect(detectOperator('+27741234567')).toBe('SOUTH_AFRICA_CELL_C');
    });

    test('détecte correctement les opérateurs marocains', () => {
      expect(detectOperator('+212612345678')).toBe('MOROCCO_MAROC_TELECOM');
      expect(detectOperator('+212622345678')).toBe('MOROCCO_ORANGE_MAROC');
      expect(detectOperator('+212632345678')).toBe('MOROCCO_INWI');
    });

    test('retourne Unknown pour un numéro invalide', () => {
      expect(detectOperator('123456789')).toBe('Unknown');
      expect(detectOperator('+999123456789')).toBe('Unknown');
      expect(detectOperator('')).toBe('Unknown');
    });
  });

  describe('isValidNumber', () => {
    test('valide correctement les numéros camerounais', () => {
      expect(isValidNumber('+237650123456')).toBe(true);
      expect(isValidNumber('+237655123456')).toBe(true);
      expect(isValidNumber('+237660123456')).toBe(true);
      expect(isValidNumber('+237123456789')).toBe(false); // Préfixe invalide
    });

    test('valide correctement les numéros sénégalais', () => {
      expect(isValidNumber('+221771234567')).toBe(true);
      expect(isValidNumber('+221761234567')).toBe(true);
      expect(isValidNumber('+221123456789')).toBe(false); // Préfixe invalide
    });

    test('valide correctement les numéros nigérians', () => {
      expect(isValidNumber('+2348031234567')).toBe(true);
      expect(isValidNumber('+2347011234567')).toBe(true);
      expect(isValidNumber('+2341234567890')).toBe(false); // Préfixe invalide
    });

    test('valide correctement les numéros ivoiriens', () => {
      expect(isValidNumber('+22507123456')).toBe(true);
      expect(isValidNumber('+22505123456')).toBe(true);
      expect(isValidNumber('+22501123456')).toBe(true);
    });

    test('valide correctement les numéros marocains', () => {
      expect(isValidNumber('+212612345678')).toBe(true);
      expect(isValidNumber('+212661234567')).toBe(true);
      expect(isValidNumber('+212701234567')).toBe(true);
    });

    test('valide correctement les numéros sud-africains', () => {
      expect(isValidNumber('+27821234567')).toBe(true);
      expect(isValidNumber('+27831234567')).toBe(true);
      expect(isValidNumber('+27791234567')).toBe(true);
    });

    test('valide correctement les numéros ghanéens', () => {
      expect(isValidNumber('+233241234567')).toBe(true);
      expect(isValidNumber('+233501234567')).toBe(true);
      expect(isValidNumber('+233261234567')).toBe(true);
    });

    test('valide correctement les numéros kenyans', () => {
      expect(isValidNumber('+254700123456')).toBe(true);
      expect(isValidNumber('+254722123456')).toBe(true);
      expect(isValidNumber('+254733123456')).toBe(true);
    });

    test('rejette les numéros invalides', () => {
      expect(isValidNumber('')).toBe(false);
      expect(isValidNumber('123')).toBe(false);
      expect(isValidNumber('+999123456789')).toBe(false);
    });
  });

  describe('getPhoneInfo', () => {
    test('retourne les informations complètes pour un numéro camerounais', () => {
      const info = getPhoneInfo('+237650123456');
      
      expect(info.operator).toBe('CAMEROON_MTN');
      expect(info.isValid).toBe(true);
      expect(info.countryCode).toBe('+237');
      expect(info.localNumber).toBe('650123456');
      expect(info.formattedNumber).toBe('+237 650 123 456');
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
      expect(info.length).toBe(9);
    });

    test('retourne les informations complètes pour un numéro sénégalais', () => {
      const info = getPhoneInfo('+221771234567');
      
      expect(info.operator).toBe('SENEGAL_ORANGE');
      expect(info.isValid).toBe(true);
      expect(info.countryCode).toBe('+221');
      expect(info.localNumber).toBe('771234567');
      expect(info.isMobile).toBe(true);
      expect(info.isFixed).toBe(false);
      expect(info.length).toBe(9);
    });

    test('retourne les informations complètes pour un numéro ivoirien', () => {
      const info = getPhoneInfo('+22507123456');
      expect(info.isValid).toBe(true);
      expect(info.operator).toBe('IVORY_COAST_ORANGE');
      expect(info.countryCode).toBe('+225');
      expect(info.localNumber).toBe('07123456');
      expect(info.formattedNumber).toBe('+225 07 12 34 56');
    });

    test('retourne les informations complètes pour un numéro marocain', () => {
      const info = getPhoneInfo('+212612345678');
      expect(info.isValid).toBe(true);
      expect(info.operator).toBe('MOROCCO_MAROC_TELECOM');
      expect(info.countryCode).toBe('+212');
      expect(info.localNumber).toBe('612345678');
      expect(info.formattedNumber).toBe('+212 612 345 678');
    });

    test('retourne les informations complètes pour un numéro sud-africain', () => {
      const info = getPhoneInfo('+27821234567');
      expect(info.isValid).toBe(true);
      expect(info.operator).toBe('SOUTH_AFRICA_VODACOM');
      expect(info.countryCode).toBe('+27');
      expect(info.localNumber).toBe('821234567');
      expect(info.formattedNumber).toBe('+27 821 234 567');
    });

    test('retourne les informations complètes pour un numéro ghanéen', () => {
      const info = getPhoneInfo('+233241234567');
      expect(info.isValid).toBe(true);
      expect(info.operator).toBe('GHANA_MTN');
      expect(info.countryCode).toBe('+233');
      expect(info.localNumber).toBe('241234567');
      expect(info.formattedNumber).toBe('+233 241 234 567');
    });

    test('retourne les informations complètes pour un numéro kenyan', () => {
      const info = getPhoneInfo('+254700123456');
      expect(info.isValid).toBe(true);
      expect(info.operator).toBe('KENYA_SAFARICOM');
      expect(info.countryCode).toBe('+254');
      expect(info.localNumber).toBe('700123456');
      expect(info.formattedNumber).toBe('+254 700 123 456');
    });

    test('gère correctement un numéro invalide', () => {
      const info = getPhoneInfo('123456');
      
      expect(info.operator).toBe('Unknown');
      expect(info.isValid).toBe(false);
    });
  });

  describe('formatPhoneNumber', () => {
    test('formate correctement les numéros camerounais', () => {
      expect(formatPhoneNumber('+237650123456')).toBe('+237 650 123 456');
      expect(formatPhoneNumber('237650123456')).toBe('+237 650 123 456');
    });

    test('formate correctement les numéros sénégalais', () => {
      expect(formatPhoneNumber('+221771234567')).toBe('+221 77 123 45 67');
    });

    test('formate correctement les numéros nigérians', () => {
      expect(formatPhoneNumber('+2348031234567')).toBe('+234 803 123 4567');
    });

    test('formate correctement les numéros ivoiriens', () => {
      expect(formatPhoneNumber('+22507123456')).toBe('+225 07 12 34 56');
      expect(formatPhoneNumber('22507123456')).toBe('+225 07 12 34 56');
    });

    test('formate correctement les numéros marocains', () => {
      expect(formatPhoneNumber('+212612345678')).toBe('+212 612 345 678');
      expect(formatPhoneNumber('212612345678')).toBe('+212 612 345 678');
    });

    test('formate correctement les numéros sud-africains', () => {
      expect(formatPhoneNumber('+27821234567')).toBe('+27 821 234 567');
      expect(formatPhoneNumber('27821234567')).toBe('+27 821 234 567');
    });

    test('formate correctement les numéros ghanéens', () => {
      expect(formatPhoneNumber('+233241234567')).toBe('+233 241 234 567');
      expect(formatPhoneNumber('233241234567')).toBe('+233 241 234 567');
    });

    test('formate correctement les numéros kenyans', () => {
      expect(formatPhoneNumber('+254700123456')).toBe('+254 700 123 456');
      expect(formatPhoneNumber('254700123456')).toBe('+254 700 123 456');
    });

    test('retourne le numéro original si non reconnu', () => {
      expect(formatPhoneNumber('123456789')).toBe('123456789');
    });
  });

  describe('getOperatorPrefixes', () => {
    test('retourne les préfixes MTN Cameroun', () => {
      const prefixes = getOperatorPrefixes('CAMEROON_MTN');
      expect(prefixes).toContain('650');
      expect(prefixes).toContain('651');
      expect(prefixes).toContain('680');
      expect(prefixes.length).toBeGreaterThan(0);
    });

    test('retourne les préfixes Orange Sénégal', () => {
      const prefixes = getOperatorPrefixes('SENEGAL_ORANGE');
      expect(prefixes).toContain('77');
      expect(prefixes).toContain('78');
    });

    test('retourne un tableau vide pour Unknown', () => {
      const prefixes = getOperatorPrefixes('Unknown');
      expect(prefixes).toEqual([]);
    });
  });

  describe('getSupportedOperators', () => {
    test('retourne tous les opérateurs supportés', () => {
      const operators = getSupportedOperators();
      
      expect(operators).toContain('CAMEROON_MTN');
      expect(operators).toContain('SENEGAL_ORANGE');
      expect(operators).toContain('NIGERIA_MTN');
      expect(operators).toContain('GHANA_MTN');
      expect(operators).not.toContain('Unknown');
      expect(operators.length).toBeGreaterThan(30);
    });
  });

  describe('isPrefixForOperator', () => {
    test('vérifie correctement les préfixes MTN Cameroun', () => {
      expect(isPrefixForOperator('650', 'CAMEROON_MTN')).toBe(true);
      expect(isPrefixForOperator('680', 'CAMEROON_MTN')).toBe(true);
      expect(isPrefixForOperator('655', 'CAMEROON_MTN')).toBe(false); // Orange
    });

    test('vérifie correctement les préfixes Orange Sénégal', () => {
      expect(isPrefixForOperator('77', 'SENEGAL_ORANGE')).toBe(true);
      expect(isPrefixForOperator('78', 'SENEGAL_ORANGE')).toBe(true);
      expect(isPrefixForOperator('76', 'SENEGAL_ORANGE')).toBe(false); // Tigo
    });

    test('retourne false pour un préfixe inexistant', () => {
      expect(isPrefixForOperator('999', 'CAMEROON_MTN')).toBe(false);
    });
  });
});

