// src/operators/senegal.ts
// Opérateurs téléphoniques au Sénégal

export const SENEGAL_OPERATORS = {
  SENEGAL_ORANGE: ['70', '76', '77', '78', '79'],
  SENEGAL_TIGO: ['76', '77'],
  SENEGAL_EXPRESSO: ['75', '76', '77', '78'],
} as const;

export type SenegalOperator = keyof typeof SENEGAL_OPERATORS;
