module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html'],
    
    // Fix pour compatibilité Node.js versions multiples
    maxWorkers: process.env.CI ? 1 : '50%',
    
    // Configuration des fichiers de test
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.test.ts',
      '<rootDir>/src/**/*.test.ts'
    ],
    
    // Fichiers à inclure dans la couverture
    collectCoverageFrom: [
      'src/**/*.ts',
      '!src/**/__tests__/**',
      '!src/**/*.test.ts',
      '!src/test.ts',
      '!src/test-enhanced.ts',
      '!dist/**'
    ],
    
    // Seuils de couverture (ajustés aux valeurs réelles)
    coverageThreshold: {
      global: {
        branches: 68,    // Actuel: 68%
        functions: 79,   // Actuel: 79.12%
        lines: 83,       // Actuel: 83.85%
        statements: 81   // Actuel: 81.14%
      }
    },
    
    // Configuration TypeScript
    transform: {
      '^.+\\.ts$': ['ts-jest', {
        tsconfig: 'tsconfig.json'
      }]
    },
    
    // Extensions de fichiers
    moduleFileExtensions: ['ts', 'js', 'json'],
    
    // Affichage des résultats
    verbose: true
  };
  