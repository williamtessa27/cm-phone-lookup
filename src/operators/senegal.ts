// src/operators/senegal.ts
// Opérateurs téléphoniques au Sénégal

export const SENEGAL_OPERATORS = {
  SENEGAL_ORANGE: ['77', '78'], // Sonatel - préfixe 78 ajouté récemment par l'ARTP
  SENEGAL_TIGO: ['76'], // Sentel (anciennement Tigo)
  SENEGAL_EXPRESSO: ['70'], // Sudatel
  SENEGAL_HAYO: ['72'], // Hayo / CSU (CDMA)
  SENEGAL_SIRIUS: ['754', '755', '756'], // Sirius Télécoms (Promobile) - MVNO
  SENEGAL_ORIGINES: ['757'], // Origines SA
} as const;

export type SenegalOperator = keyof typeof SENEGAL_OPERATORS;
