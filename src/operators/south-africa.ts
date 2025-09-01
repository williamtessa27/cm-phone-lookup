// src/operators/south-africa.ts
// Opérateurs téléphoniques en Afrique du Sud

export const SOUTH_AFRICA_OPERATORS = {
  SOUTH_AFRICA_VODACOM: [
    // Préfixes principaux - sans le 0 initial
    '72', '82', '79', '818',
    // Série 06xx - sans le 0 initial
    '606', '607', '608', '609',
    '636', '637',
    '646', '647', '648', '649',
    '660', '661', '662', '663', '664', '665',
    // Série 07xx - sans le 0 initial
    '711', '712', '713', '714', '715', '716'
  ],
  SOUTH_AFRICA_MTN: [
    // Préfixes principaux - sans le 0 initial
    '73', '83', '78', '810',
    // Série 06xx - sans le 0 initial
    '603', '604', '605',
    '630', '631', '632', '633', '634', '635',
    '655', '656', '657',
    // Série 07xx - sans le 0 initial
    '710'
  ],
  SOUTH_AFRICA_CELL_C: [
    // Préfixes principaux - sans le 0 initial
    '74', '84',
    // Série 06xx - sans le 0 initial
    '610', '611', '612', '613',
    '615', '616', '617', '618', '619',
    '641', '642', '643', '644', '645',
    '650', '651', '652', '653'
  ],
  SOUTH_AFRICA_TELKOM: [
    // Série 06xx - sans le 0 initial
    '614',
    '658', '659',
    // Série 08xx - sans le 0 initial
    '811', '812', '813', '814', '815', '817'
  ],
  SOUTH_AFRICA_VIRGIN_MOBILE: [
    // Préfixe unique - sans le 0 initial
    '741'
  ],
} as const;

export type SouthAfricaOperator = keyof typeof SOUTH_AFRICA_OPERATORS;
