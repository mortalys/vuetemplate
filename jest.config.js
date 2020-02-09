module.exports = {
  verbose: true,
  roots: [
    '<rootDir>/src'
  ],
  testMatch: [
    '**/__tests/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
}
