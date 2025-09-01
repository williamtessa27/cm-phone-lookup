// src/operators/kenya.ts
// Opérateurs téléphoniques au Kenya

export const KENYA_OPERATORS = {
  KENYA_SAFARICOM: [
    // Série 07xx (principale) - sans le 0 initial
    '70', '71', '72', '74', '757', '758', '759', '768', '769', '79',
    // Série 011x (nouveaux préfixes ajoutés) - sans le 0 initial
    '110', '111', '112', '113', '114', '115'
  ],
  KENYA_AIRTEL: [
    // Série 073x - sans le 0 initial
    '730', '731', '732', '733', '734', '735', '736', '737', '738', '739',
    // Série 075x - sans le 0 initial
    '750', '751', '752', '753', '754', '755', '756',
    // Série 078x - sans le 0 initial
    '785', '786', '787', '788', '789',
    // Série 01xx - sans le 0 initial
    '100', '101', '102'
  ],
  KENYA_TELKOM: [
    // Série 077x - sans le 0 initial
    '770', '771', '772', '773', '774', '775', '776', '777', '778', '779'
  ],
  KENYA_FAIBA: [
    // 4G - sans le 0 initial
    '747'
  ],
  KENYA_EQUITEL: [
    // MVNO - sans le 0 initial
    '763', '764', '765'
  ],
} as const;

export type KenyaOperator = keyof typeof KENYA_OPERATORS;