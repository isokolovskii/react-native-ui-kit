import { defineConfig } from 'eslint/config'

import refined from 'eslint-plugin-refined'

export const refinedConfig = defineConfig([
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}'],
    // @ts-expect-error Проблемы с типизацией у плагина
    plugins: { refined },
    rules: {
      // https://github.com/enzomanuelmangano/eslint-plugin-refined/blob/main/docs/rules/prefer-hairline-width.md
      'refined/prefer-hairline-width': ['warn', { threshold: 0.5 }],
      // https://github.com/enzomanuelmangano/eslint-plugin-refined/blob/main/docs/rules/require-hitslop-small-touchables.md
      'refined/require-hitslop-small-touchables': ['off', { minSize: 44 }], // ! Не работает если стиль не в StyleSheer.create
      // https://github.com/enzomanuelmangano/eslint-plugin-refined/blob/main/docs/rules/border-radius-with-curve.md
      'refined/border-radius-with-curve': 'off', // ! Не работает если стиль не в StyleSheet.create
      // https://github.com/enzomanuelmangano/eslint-plugin-refined/blob/main/docs/rules/prefer-box-shadow.md
      'refined/prefer-box-shadow': 'error',
      // https://github.com/enzomanuelmangano/eslint-plugin-refined/blob/main/docs/rules/spring-config-consistency.md
      'refined/spring-config-consistency': [
        'warn',
        { reanimatedVersion: 'v3' },
      ],
      // https://github.com/enzomanuelmangano/eslint-plugin-refined/blob/main/docs/rules/avoid-touchable-opacity.md
      'refined/avoid-touchable-opacity': 'off', // ! Потенциально стоит избавиться от TocuhableOpacity и тогда включить правило
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,cjs,mjs,ts,tsx,mts,cts}'],
    rules: {
      'refined/avoid-touchable-opacity': 'off',
      'refined/require-hitslop-small-touchables': 'off',
    },
  },
  {
    files: ['**/*.stories.{js,jsx,cjs,mjs,ts,tsx,mts,cts}'],
    rules: {
      'refined/avoid-touchable-opacity': 'off',
      'refined/require-hitslop-small-touchables': 'off',
    },
  },
])
