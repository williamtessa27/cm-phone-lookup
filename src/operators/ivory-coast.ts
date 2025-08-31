// src/operators/ivory-coast.ts
// Opérateurs téléphoniques en Côte d'Ivoire

export const IVORY_COAST_OPERATORS = {
  IVORY_COAST_ORANGE: [
    '07', // Mobile (après passage à 10 chiffres - 31 janvier 2021)
    '27'  // Fixe
  ],
  IVORY_COAST_MTN: [
    '05', // Mobile (après passage à 10 chiffres - 31 janvier 2021)
    '25'  // Fixe
  ],
  IVORY_COAST_MOOV: [
    '01', // Mobile (après passage à 10 chiffres - 31 janvier 2021)
    '21'  // Fixe
  ],
} as const;

export type IvoryCoastOperator = keyof typeof IVORY_COAST_OPERATORS;
