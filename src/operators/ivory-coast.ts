// src/operators/ivory-coast.ts
// Opérateurs téléphoniques en Côte d'Ivoire

export const IVORY_COAST_OPERATORS = {
  IVORY_COAST_ORANGE: ['01', '05', '07', '25', '27', '49'],
  IVORY_COAST_MTN: ['05', '07', '08', '09', '50', '51', '52'],
  IVORY_COAST_MOOV: ['05', '06', '07', '55', '56'],
  IVORY_COAST_TELECOM: ['27'],
} as const;

export type IvoryCoastOperator = keyof typeof IVORY_COAST_OPERATORS;
