// src/operators/cameroon.ts
// Opérateurs téléphoniques au Cameroun

export const CAMEROON_OPERATORS = {
  CAMEROON_MTN: [
    // Série 67 (officiel ITU 2014) - Toute la plage 670-679
    '67', '670', '671', '672', '673', '674', '675', '676', '677', '678', '679',
    // Série 68 (mobile money, pratique terrain) - Toute la plage 680-689
    '68', '680', '681', '682', '683', '684', '685', '686', '687', '688', '689',
    // Série étendue (officiel ITU 2014)
    '650', '651', '652', '653', '654'
  ],
  CAMEROON_ORANGE: ['655', '656', '657', '658', '659'],
  CAMEROON_CAMTEL: [
    // Lignes fixes (existant)
    '222', '233', '242', '243', '244', '245', '246',
    // Mobile Blue (nouveau - observé publiquement)
    '620', '621', '6200', '6201', '6202', '6203', '6204', '6205', '6206', '6207', '6208', '6209',
    '6210', '6211', '6212', '6213', '6214', '6215', '6216', '6217', '6218', '6219'
  ],
  CAMEROON_NEXTTEL: ['66', '660', '661', '662', '663', '664', '665', '666', '667', '668', '669'],
} as const;

export type CameroonOperator = keyof typeof CAMEROON_OPERATORS;
