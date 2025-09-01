// src/operators/ghana.ts
// Opérateurs téléphoniques au Ghana

export const GHANA_OPERATORS = {
  GHANA_MTN: [
    // Codes mobiles principaux - sans le 0 initial
    '24', '54', '55', '59',
    // Nouveaux codes ajoutés en 2021 - sans le 0 initial
    '256', '257', '597', '598', '599'
  ],
  GHANA_VODAFONE: [
    // Vodafone Ghana - sans le 0 initial
    '20', '50'
  ],
  GHANA_AIRTELTIGO: [
    // AirtelTigo (fusion d'Airtel et Tigo) - sans le 0 initial
    '26', '56', '27', '57'
  ],
  GHANA_GLO: [
    // Glo Ghana - sans le 0 initial
    '23'
  ],
  GHANA_EXPRESSO: [
    // Expresso Ghana (anciennement Kasapa Telecom) - sans le 0 initial
    '28'
  ],
} as const;

export type GhanaOperator = keyof typeof GHANA_OPERATORS;
