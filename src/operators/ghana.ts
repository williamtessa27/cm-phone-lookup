// src/operators/ghana.ts
// Opérateurs téléphoniques au Ghana

export const GHANA_OPERATORS = {
  GHANA_MTN: ['24', '54', '55', '59'],
  GHANA_VODAFONE: ['20', '50', '57'],
  GHANA_AIRTELTIGO: ['26', '56', '27'],
} as const;

export type GhanaOperator = keyof typeof GHANA_OPERATORS;
