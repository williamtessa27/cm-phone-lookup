module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html'],
    
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
    
    // Seuils de couverture
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
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
  