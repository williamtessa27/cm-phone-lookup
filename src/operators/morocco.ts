// src/operators/morocco.ts
// Opérateurs téléphoniques au Maroc

export const MOROCCO_OPERATORS = {
  MOROCCO_MAROC_TELECOM: [
    // Maroc Telecom - Principaux préfixes
    '61', '66', '67', '68', '69' // Préfixes spécifiques Maroc Telecom
  ],
  MOROCCO_ORANGE_MAROC: [
    // Orange Maroc - Préfixes spécifiques
    '62', '64', '65' // Préfixes spécifiques Orange
  ],
  MOROCCO_INWI: [
    // Inwi - Préfixes spécifiques
    '60', '63', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79' // Préfixes Inwi
  ],
} as const;

export type MoroccoOperator = keyof typeof MOROCCO_OPERATORS;
