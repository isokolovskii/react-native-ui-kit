import { defineConfig } from 'eslint/config'
import pluginPrettier from 'eslint-plugin-prettier'

import prettierConfigMobile from '../../../.prettierrc.mjs'

export const prettierConfig = defineConfig([
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}'],
    plugins: { prettier: pluginPrettier },
    rules: { 'prettier/prettier': ['error', { ...prettierConfigMobile }] },
  },
])
