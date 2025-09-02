// src/operators/ethiopia.ts
// Opérateurs téléphoniques en Éthiopie

export const ETHIOPIA_OPERATORS = {
  ETHIOPIA_ETHIO_TELECOM: [
    // Série 9xx (principale) - sans le 0 initial pour cohérence avec les autres pays
    '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'
  ],
  ETHIOPIA_SAFARICOM: [
    // Série 07x (nouveau entrant 2021-2022) - sans le 0 initial
    '70', '71', '72', '73', '74', '75', '76', '77', '78', '79'
  ],
} as const;

export type EthiopiaOperator = keyof typeof ETHIOPIA_OPERATORS;

/**
 * Informations détaillées sur les opérateurs éthiopiens
 */
export const ETHIOPIA_OPERATOR_INFO = {
  ETHIOPIA_ETHIO_TELECOM: {
    name: 'Ethio Telecom',
    type: 'state_operator',
    description: 'Opérateur d\'état historique, utilise traditionnellement les séries 09x/91x pour GSM/mobile',
    launched: '1894', // Fondation historique des télécommunications
    technology: ['2G', '3G', '4G'],
    coverage: 'national',
    notes: 'Opérateur historique avec couverture nationale complète'
  },
  ETHIOPIA_SAFARICOM: {
    name: 'Safaricom Ethiopia',
    type: 'new_entrant',
    description: 'Nouvel entrant sur le marché éthiopien, allocation de la série 07x',
    launched: '2021',
    technology: ['4G', '5G'],
    coverage: 'urban_expanding',
    notes: 'Déploiement commencé en 2021-2022, expansion progressive'
  }
} as const;
