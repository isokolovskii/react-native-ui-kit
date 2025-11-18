import { defineConfig } from 'eslint/config'

import { MobileConfig } from './configs/eslint'

export default defineConfig([
  ...MobileConfig,
  { files: ['configs/eslint/**/*'], rules: { 'max-lines': 'off' } },
  {
    ignores: [
      'dist/**/*',
      '.storybook/**/*',
      'configs/cz-conventional-mobile/**/*',
    ],
  },
])
