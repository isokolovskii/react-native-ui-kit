import { defineConfig, globalIgnores } from 'eslint/config'

import {
  javascriptConfig,
  typescriptConfig,
  jestConfig,
  stylisticConfig,
  importConfig,
  reactConfig,
  reactNativeConfig,
  prettierConfig,
} from './rules'

export const MobileConfig = defineConfig([
  ...javascriptConfig,
  ...prettierConfig,
  ...typescriptConfig,
  ...jestConfig,
  ...stylisticConfig,
  ...importConfig,
  ...reactConfig,
  ...reactNativeConfig,
  globalIgnores([
    'dist/',
    '.yarn/',
    '.vscode/',
    '.jest/',
    'node_modules/',
    'android/',
    'ios/',
    '.expo/',
    'fastlane',
  ]),
])
