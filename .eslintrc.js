module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    jest: true, // 👈 IMPORTANT : Active l'environnement Jest
  },
  rules: {
    'no-unused-vars': 'off', // Désactivé pour TypeScript
    'prefer-const': 'error',
    'no-useless-escape': 'error',
  },
  overrides: [
    {
      // Configuration spécifique pour les fichiers de test
      files: ['**/__tests__/**/*.ts', '**/*.test.ts', '**/*.spec.ts'],
      env: {
        jest: true,
      },
    },
  ],
};