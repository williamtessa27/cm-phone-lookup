// src/operators/tanzania.ts
// Opérateurs téléphoniques en Tanzanie

export const TANZANIA_OPERATORS = {
  TANZANIA_HALOTEL: [
    // Série 61x, 62x (Halotel - Viettel) selon TCRA MNDC 06YA
    '61', '62'
  ],
  TANZANIA_HONORA: [
    // Série 65x, 67x (Honora Tanzania PLC) selon TCRA
    '65', '67'
  ],
  TANZANIA_TIGO: [
    // Série 71x (Tigo - historical splits) selon TCRA
    '71'
  ],
  TANZANIA_SMILE: [
    // Série 66x (Smile) selon TCRA
    '66'
  ],
  TANZANIA_AIRTEL: [
    // Série 68x, 69x, 78x (Airtel Tanzania) selon TCRA
    '68', '69', '78'
  ],
  TANZANIA_TTCL: [
    // Série 73x (TTCL - fixed/mobile blocks) selon TCRA
    '73'
  ],
  TANZANIA_VODACOM: [
    // Série 74x, 75x, 76x, 79x (Vodacom Tanzania) selon TCRA
    '74', '75', '76', '79'
  ],
  TANZANIA_ZANTEL: [
    // Série 77x (Zantel / other legacy) selon TCRA
    '77'
  ],
} as const;

export type TanzaniaOperator = keyof typeof TANZANIA_OPERATORS;

/**
 * Informations détaillées sur les opérateurs tanzaniens
 */
export const TANZANIA_OPERATOR_INFO = {
  TANZANIA_HALOTEL: {
    name: 'Halotel (Viettel)',
    type: 'mobile_network',
    description: 'Opérateur mobile appartenant au groupe vietnamien Viettel, utilise les préfixes 62x',
    launched: '2015',
    technology: ['2G', '3G', '4G'],
    coverage: 'national',
    notes: 'Filiale de Viettel Group, expansion rapide en Tanzanie'
  },
  TANZANIA_HONORA: {
    name: 'Honora Tanzania PLC',
    type: 'mobile_network',
    description: 'Opérateur mobile utilisant les préfixes 65x, 67x selon TCRA',
    launched: '2020',
    technology: ['2G', '3G', '4G'],
    coverage: 'regional',
    notes: 'Nouvel opérateur avec allocations TCRA récentes'
  },
  TANZANIA_TIGO: {
    name: 'Tigo Tanzania',
    type: 'mobile_network', 
    description: 'Opérateur historique avec splits, utilise les préfixes 71x',
    launched: '1994',
    technology: ['2G', '3G', '4G'],
    coverage: 'national',
    notes: 'Un des opérateurs historiques de Tanzanie'
  },
  TANZANIA_SMILE: {
    name: 'Smile Tanzania',
    type: 'mobile_network',
    description: 'Opérateur 4G spécialisé dans la data, utilise les préfixes 66x',
    launched: '2014',
    technology: ['4G', '5G'],
    coverage: 'urban',
    notes: 'Focalisé sur les services data et internet'
  },
  TANZANIA_AIRTEL: {
    name: 'Airtel Tanzania',
    type: 'mobile_network',
    description: 'Filiale d\'Airtel Africa, utilise les préfixes 68x, 69x, 78x',
    launched: '2010',
    technology: ['2G', '3G', '4G'],
    coverage: 'national',
    notes: 'Partie du groupe Airtel Africa'
  },
  TANZANIA_TTCL: {
    name: 'TTCL (Tanzania Telecommunications)',
    type: 'fixed_mobile',
    description: 'Opérateur historique fixe avec blocs mobiles, utilise les préfixes 73x',
    launched: '1994',
    technology: ['2G', '3G', '4G', 'Fixed'],
    coverage: 'national',
    notes: 'Opérateur historique avec services fixes et mobiles'
  },
  TANZANIA_VODACOM: {
    name: 'Vodacom Tanzania',
    type: 'mobile_network',
    description: 'Filiale de Vodacom Group, leader du marché, utilise les préfixes 74x, 75x, 76x',
    launched: '1999',
    technology: ['2G', '3G', '4G', '5G'],
    coverage: 'national',
    notes: 'Leader du marché mobile tanzanien'
  },
  TANZANIA_ZANTEL: {
    name: 'Zantel',
    type: 'legacy_operator',
    description: 'Opérateur historique et autres services legacy, utilise les préfixes 77x',
    launched: '1999',
    technology: ['2G', '3G', '4G'],
    coverage: 'regional',
    notes: 'Opérateur historique avec focus sur Zanzibar'
  }
} as const;
