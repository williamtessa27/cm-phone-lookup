// src/operators/south-sudan.ts
// Opérateurs téléphoniques au Soudan du Sud

export const SOUTH_SUDAN_OPERATORS = {
  SOUTH_SUDAN_MTN: [
    '92', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929',
    '95', '950', '951', '952', '953', '954', '955', '956', '957', '958', '959'
  ],
  SOUTH_SUDAN_ZAIN: [
    '91', '910', '911', '912', '913', '914', '915', '916', '917', '918', '919',
    '97', '970', '971', '972', '973', '974', '975', '976', '977', '978', '979'
  ]
} as const;

export type SouthSudanOperator = keyof typeof SOUTH_SUDAN_OPERATORS;
