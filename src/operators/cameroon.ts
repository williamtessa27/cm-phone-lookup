// src/operators/cameroon.ts
// Opérateurs téléphoniques au Cameroun

export const CAMEROON_OPERATORS = {
  CAMEROON_MTN: ['650', '651', '652', '653', '654', '680', '681', '682', '683', '684'],
  CAMEROON_ORANGE: ['655', '656', '657', '658', '659', '690', '691', '692', '693'],
  CAMEROON_CAMTEL: ['222', '233', '242', '243', '244', '245', '246'],
  CAMEROON_NEXTTEL: ['66'],
} as const;

export type CameroonOperator = keyof typeof CAMEROON_OPERATORS;
