// src/operators/ghana.ts
// Opérateurs téléphoniques au Ghana

export const GHANA_OPERATORS = {
  GHANA_MTN: [
    // Codes mobiles principaux
    '024', '054', '055', '059',
    // Nouveaux codes ajoutés en 2021
    '0256', '0257', '0597', '0598', '0599'
  ],
  GHANA_VODAFONE: [
    // Vodafone Ghana
    '020', '050'
  ],
  GHANA_AIRTELTIGO: [
    // AirtelTigo (fusion d'Airtel et Tigo)
    '026', '056', '027', '057'
  ],
  GHANA_GLO: [
    // Glo Ghana
    '023'
  ],
  GHANA_EXPRESSO: [
    // Expresso Ghana (anciennement Kasapa Telecom)
    '028'
  ],
} as const;

export type GhanaOperator = keyof typeof GHANA_OPERATORS;
