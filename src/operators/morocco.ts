// src/operators/morocco.ts
// Opérateurs téléphoniques au Maroc

export const MOROCCO_OPERATORS = {
  MOROCCO_MAROC_TELECOM: [
    // Maroc Telecom - Lignes fixes et mobiles
    // Les numéros commencent par différents codes selon les zones
    // Format: 9 chiffres au total
    '5', '6', '7', '8', '9' // Codes principaux pour mobile (sans le 0 initial)
  ],
  MOROCCO_ORANGE_MAROC: [
    // Orange Maroc - NGN (Next Generation Network)
    // Codes commençant par O dans les plans nationaux
    '5', '6', '7', '8', '9' // Codes principaux pour mobile (sans le 0 initial)
  ],
  MOROCCO_INWI: [
    // Inwi - Fixe GSM
    // Codes commençant par X ou W selon les sources
    '5', '6', '7', '8', '9' // Codes principaux pour mobile (sans le 0 initial)
  ],
} as const;

export type MoroccoOperator = keyof typeof MOROCCO_OPERATORS;
