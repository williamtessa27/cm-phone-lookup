// src/operators/rwanda.ts
// Opérateurs téléphoniques au Rwanda

export const RWANDA_OPERATORS = {
  RWANDA_MTN: [
    '78', '780', '781', '782', '783', '784', '785', '786', '787', '788', '789',
    '79', '790', '791', '792', '793', '794', '795', '796', '797', '798', '799'
  ],
  RWANDA_AIRTEL: [
    '72', '720', '721', '722', '723', '724', '725', '726', '727', '728', '729',
    '73', '730', '731', '732', '733', '734', '735', '736', '737', '738', '739'
  ]
} as const;

export type RwandaOperator = keyof typeof RWANDA_OPERATORS;
