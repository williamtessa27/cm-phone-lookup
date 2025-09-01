// src/operators/nigeria.ts
// Opérateurs téléphoniques au Nigeria

export const NIGERIA_OPERATORS = {
  NIGERIA_MTN: [
    // Préfixes principaux MTN - sans le 0 initial
    '703', '706', '803', '806', '810', '813', '814', '816', '903', '906', '913', '916',
    // Séries héritées de Visafone (acquis par MTN) - sans le 0 initial
    '704', '7025', '7026'
  ],
  NIGERIA_GLO: [
    // Glo (Globacom) - sans le 0 initial
    '705', '805', '807', '811', '815', '905', '915'
  ],
  NIGERIA_AIRTEL: [
    // Airtel Nigeria - sans le 0 initial
    '701', '708', '802', '808', '812', '901', '902', '904', '907', '912', '911'
  ],
  NIGERIA_9MOBILE: [
    // 9mobile (ex-Etisalat Nigeria) - sans le 0 initial
    '809', '817', '818', '908', '909'
  ],
  NIGERIA_NTEL: [
    // Ntel - sans le 0 initial
    '804'
  ],
  NIGERIA_SMILE: [
    // Smile Communications - sans le 0 initial
    '702'
  ],
  NIGERIA_STARCOMMS: [
    // Starcomms - sans le 0 initial
    '7028', '7029', '819'
  ],
  NIGERIA_MULTILINKS: [
    // Multi-Links - sans le 0 initial
    '7027', '709'
  ],
  NIGERIA_ZOOMMOBILE: [
    // ZoomMobile (anciennement Reltel) - sans le 0 initial
    '707'
  ],
} as const;

export type NigeriaOperator = keyof typeof NIGERIA_OPERATORS;
