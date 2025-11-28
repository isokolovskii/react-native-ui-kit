import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  cache: true,
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
    '!**/index.ts',
    '!**/types.ts',
    '!**/__tests__/*',
  ],
  testMatch: ['**/__tests__/**/*.{spec,test}.{ts,tsx}'],
  coverageReporters: ['text', 'text-summary'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRunner: 'jest-circus',
  maxWorkers: 4,
  rootDir: '.',
  moduleNameMapper: { '\\.svg': '<rootDir>/__mocks__/svgMock.js' },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['jest-extended/all'],
}

export default config
