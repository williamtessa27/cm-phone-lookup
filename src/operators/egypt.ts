// src/operators/egypt.ts
// Opérateurs téléphoniques en Égypte

export const EGYPT_OPERATORS = {
  EGYPT_VODAFONE: [
    // Série 10x (Vodafone Egypt) - sans le 0 initial pour cohérence
    '10'
  ],
  EGYPT_ETISALAT: [
    // Série 11x (Etisalat, maintenant e& Egypt) - sans le 0 initial
    '11'
  ],
  EGYPT_ORANGE: [
    // Série 12x (Orange Egypt) - sans le 0 initial
    '12'
  ],
  EGYPT_WE: [
    // Série 15x (WE - Telecom Egypt MVNO) - sans le 0 initial
    '15'
  ],
} as const;

export type EgyptOperator = keyof typeof EGYPT_OPERATORS;

/**
 * Informations détaillées sur les opérateurs égyptiens
 */
export const EGYPT_OPERATOR_INFO = {
  EGYPT_VODAFONE: {
    name: 'Vodafone Egypt',
    type: 'mobile_network',
    description: 'Opérateur mobile majeur en Égypte, utilise le préfixe 10',
    launched: '1998',
    technology: ['2G', '3G', '4G', '5G'],
    coverage: 'national',
    notes: 'Un des principaux opérateurs mobiles égyptiens'
  },
  EGYPT_ETISALAT: {
    name: 'Etisalat Egypt (e& Egypt)',
    type: 'mobile_network', 
    description: 'Anciennement Etisalat, maintenant rebrandé e& Egypt, utilise le préfixe 11',
    launched: '2007',
    technology: ['2G', '3G', '4G', '5G'],
    coverage: 'national',
    notes: 'Rebrandé de Etisalat à e& Egypt en 2022'
  },
  EGYPT_ORANGE: {
    name: 'Orange Egypt',
    type: 'mobile_network',
    description: 'Opérateur mobile Orange en Égypte, utilise le préfixe 12',
    launched: '1998',
    technology: ['2G', '3G', '4G'],
    coverage: 'national', 
    notes: 'Filiale du groupe Orange international'
  },
  EGYPT_WE: {
    name: 'WE (Telecom Egypt)',
    type: 'mvno',
    description: 'MVNO de Telecom Egypt, utilise le préfixe 15',
    launched: '2017',
    technology: ['4G', '5G'],
    coverage: 'national',
    notes: 'Opérateur virtuel mobile de Telecom Egypt'
  }
} as const;
