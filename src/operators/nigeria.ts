// src/operators/nigeria.ts
// Opérateurs téléphoniques au Nigeria

export const NIGERIA_OPERATORS = {
  NIGERIA_MTN: ['0803', '0806', '0703', '0706', '0813', '0816', '0810', '0814', '0903', '0906'],
  NIGERIA_AIRTEL: ['0802', '0808', '0812', '0708', '0701', '0902', '0907'],
  NIGERIA_GLO: ['0805', '0807', '0815', '0811', '0905'],
  NIGERIA_9MOBILE: ['0809', '0817', '0818', '0909'],
} as const;

export type NigeriaOperator = keyof typeof NIGERIA_OPERATORS;
