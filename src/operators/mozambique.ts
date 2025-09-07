// src/operators/mozambique.ts
// Opérateurs téléphoniques au Mozambique

export const MOZAMBIQUE_OPERATORS = {
  MOZAMBIQUE_VODACOM: [
    '82', '820', '821', '822', '823', '824', '825', '826', '827', '828', '829',
    '84', '840', '841', '842', '843', '844', '845', '846', '847', '848', '849'
  ],
  MOZAMBIQUE_MOVITEL: [
    '86', '860', '861', '862', '863', '864', '865', '866', '867', '868', '869',
    '87', '870', '871', '872', '873', '874', '875', '876', '877', '878', '879'
  ],
  MOZAMBIQUE_TMCEL: [
    '83', '830', '831', '832', '833', '834', '835', '836', '837', '838', '839'
  ]
} as const;

export type MozambiqueOperator = keyof typeof MOZAMBIQUE_OPERATORS;
