// src/operators/algeria.ts
// Opérateurs téléphoniques en Algérie

export const ALGERIA_OPERATORS = {
  ALGERIA_MOBILIS: [
    // Série 05 - Mobilis (historique)
    '05', '050', '051', '052', '053', '054', '055', '056', '057', '058', '059',
    // Série 09 - Mobilis (nouvelle)
    '09', '090', '091', '092', '093', '094', '095', '096', '097', '098', '099'
  ],
  ALGERIA_DJEZZY: [
    // Série 065-067 - Djezzy
    '065', '066', '067',
    // Série 07 - Djezzy principale
    '07', '070', '071', '072', '073', '074', '075', '076', '077', '078', '079',
    // Série 08 - Djezzy étendue
    '08', '080', '081', '082', '083', '084', '085', '086', '087', '088', '089'
  ],
  ALGERIA_OOREDOO: [
    // Série 05 partagée avec Mobilis
    '055', '056', '057',
    // Série 077-079 - Ooredoo
    '077', '078', '079'
  ]
} as const;

export type AlgeriaOperator = keyof typeof ALGERIA_OPERATORS;
