// src/operators/burkina-faso.ts
// Opérateurs téléphoniques au Burkina Faso

export const BURKINA_FASO_OPERATORS = {
  BURKINA_FASO_ORANGE: [
    '70', '700', '701', '702', '703', '704', '705', '706', '707', '708', '709',
    '71', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719',
    '72', '720', '721', '722', '723', '724', '725', '726', '727', '728', '729'
  ],
  BURKINA_FASO_MOOV: [
    '74', '740', '741', '742', '743', '744', '745', '746', '747', '748', '749',
    '75', '750', '751', '752', '753', '754', '755', '756', '757', '758', '759'
  ],
  BURKINA_FASO_TELECEL: [
    '76', '760', '761', '762', '763', '764', '765', '766', '767', '768', '769'
  ]
} as const;

export type BurkinaFasoOperator = keyof typeof BURKINA_FASO_OPERATORS;
