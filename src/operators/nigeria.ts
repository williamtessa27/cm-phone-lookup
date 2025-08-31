// src/operators/nigeria.ts
// Opérateurs téléphoniques au Nigeria

export const NIGERIA_OPERATORS = {
  NIGERIA_MTN: [
    // Préfixes principaux MTN
    '0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913', '0916',
    // Séries héritées de Visafone (acquis par MTN)
    '0704', '07025', '07026'
  ],
  NIGERIA_GLO: [
    // Glo (Globacom)
    '0705', '0805', '0807', '0811', '0815', '0905', '0915'
  ],
  NIGERIA_AIRTEL: [
    // Airtel Nigeria
    '0701', '0708', '0802', '0808', '0812', '0901', '0902', '0904', '0907', '0912', '0911'
  ],
  NIGERIA_9MOBILE: [
    // 9mobile (ex-Etisalat Nigeria)
    '0809', '0817', '0818', '0908', '0909'
  ],
  NIGERIA_NTEL: [
    // Ntel
    '0804'
  ],
  NIGERIA_SMILE: [
    // Smile Communications
    '0702'
  ],
  NIGERIA_STARCOMMS: [
    // Starcomms
    '07028', '07029', '0819'
  ],
  NIGERIA_MULTILINKS: [
    // Multi-Links
    '07027', '0709'
  ],
  NIGERIA_ZOOMMOBILE: [
    // ZoomMobile (anciennement Reltel)
    '0707'
  ],
} as const;

export type NigeriaOperator = keyof typeof NIGERIA_OPERATORS;
