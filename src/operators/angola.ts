// src/operators/angola.ts
// Opérateurs téléphoniques en Angola

export const ANGOLA_OPERATORS = {
  ANGOLA_UNITEL: [
    '91', '910', '911', '912', '913', '914', '915', '916', '917', '918', '919',
    '92', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929'
  ],
  ANGOLA_MOVICEL: [
    '93', '930', '931', '932', '933', '934', '935', '936', '937', '938', '939'
  ],
  ANGOLA_AFRICELL: [
    '94', '940', '941', '942', '943', '944', '945', '946', '947', '948', '949',
    '95', '950', '951', '952', '953', '954', '955', '956', '957', '958', '959'
  ]
} as const;

export type AngolaOperator = keyof typeof ANGOLA_OPERATORS;
