import { defineConfig } from 'eslint/config'
import jest from 'eslint-plugin-jest'

// @ts-expect-error ESLint Plugin Jest Extended не предоставляет типизацию
import jestExtended from 'eslint-plugin-jest-extended'
import testingLibrary from 'eslint-plugin-testing-library'

export const jestConfig = defineConfig([
  {
    files: [
      '**/*.test.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
      '**/*.spec.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
      '**/__tests__/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
      '**/__mocks__/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
      'jest.setup.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
    ],
    languageOptions: {
      globals: {
        expect: 'readonly',
        test: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        it: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
      },
    },
    rules: {
      'max-statements': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
    },
  },
  {
    files: [
      '**/*.test.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
      '**/*.spec.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
    ],
    plugins: { jest },
    rules: {
      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
      'jest/consistent-test-it': [
        'error',
        { fn: 'test', withinDescribe: 'test' },
      ],

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
      'jest/expect-expect': [
        'error',
        { assertFunctionNames: ['expect*', 'assert*', 'test*'] },
      ],

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-expects.md
      'jest/max-expects': ['warn', { max: 15 }],

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
      'jest/max-nested-describe': ['warn', { max: 3 }],

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
      'jest/no-alias-methods': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
      'jest/no-commented-out-tests': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
      'jest/no-conditional-expect': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
      'jest/no-conditional-in-test': 'off',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-confusing-set-timeout.md
      'jest/no-confusing-set-timeout': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
      'jest/no-deprecated-functions': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
      'jest/no-disabled-tests': 'warn',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
      'jest/no-done-callback': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
      'jest/no-duplicate-hooks': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
      'jest/no-export': 'warn',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
      'jest/no-focused-tests': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
      'jest/no-hooks': 'off',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
      'jest/no-identical-title': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
      'jest/no-interpolation-in-snapshots': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
      'jest/no-jasmine-globals': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
      'jest/no-large-snapshots': ['error', { maxSize: 12, inlineMaxSize: 6 }],

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
      'jest/no-mocks-import': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-jest-methods.md
      'jest/no-restricted-jest-methods': 'off',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
      'jest/no-restricted-matchers': 'off',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
      'jest/no-standalone-expect': [
        'error',
        { additionalTestBlockFunctions: ['assert*', 'test*'] },
      ],

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
      'jest/no-test-prefixes': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
      'jest/no-test-return-statement': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-untyped-mock-factory.md
      'jest/no-untyped-mock-factory': 'off',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-after-all-blocks.md
      'jest/padding-around-after-all-blocks': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-after-each-blocks.md
      'jest/padding-around-after-each-blocks': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-before-all-blocks.md
      'jest/padding-around-before-all-blocks': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-before-each-blocks.md
      'jest/padding-around-before-each-blocks': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-describe-blocks.md
      'jest/padding-around-describe-blocks': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-expect-groups.md
      'jest/padding-around-expect-groups': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-test-blocks.md
      'jest/padding-around-test-blocks': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
      'jest/prefer-called-with': 'warn',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
      'jest/prefer-comparison-matcher': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-each.md
      'jest/prefer-each': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
      'jest/prefer-equality-matcher': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
      'jest/prefer-expect-assertions': [
        'off',
        {
          onlyFunctionsWithAsyncKeyword: false,
          onlyFunctionsWithExpectInLoop: false,
          onlyFunctionsWithExpectInCallback: false,
        },
      ],

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
      'jest/prefer-expect-resolves': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
      'jest/prefer-hooks-in-order': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
      'jest/prefer-hooks-on-top': 'off',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-importing-jest-globals.md
      'jest/prefer-importing-jest-globals': 'off',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-jest-mocked.md
      'jest/prefer-jest-mocked': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
      'jest/jest/prefer-lowercase-title': 'off',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
      'jest/prefer-mock-promise-shorthand': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
      'jest/prefer-snapshot-hint': ['error', 'multi'],

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
      'jest/prefer-spy-on': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
      'jest/prefer-strict-equal': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
      'jest/prefer-to-be': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
      'jest/prefer-to-contain': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
      'jest/prefer-to-have-length': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
      'jest/prefer-todo': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
      'jest/require-hook': 'off',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
      'jest/require-to-throw-message': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
      'jest/require-top-level-describe': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
      'jest/valid-describe-callback': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
      'jest/valid-expect': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
      'jest/valid-expect-in-promise': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
      'jest/valid-title': 'error',

      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
      'jest/unbound-method': 'error',
    },
  },
  {
    files: [
      '**/*.test.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
      '**/*.spec.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
    ],
    plugins: { 'jest-extended': jestExtended },
    rules: {
      // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-array.md
      'jest-extended/prefer-to-be-array': 'error',

      // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-false.md
      'jest-extended/prefer-to-be-false': 'error',

      // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-object.md
      'jest-extended/prefer-to-be-object': 'error',

      // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-true.md
      'jest-extended/prefer-to-be-true': 'error',

      // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-have-been-called-once.md
      'jest-extended/prefer-to-have-been-called-once': 'error',
    },
  },
  {
    files: [
      '**/*.test.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
      '**/*.spec.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
    ],
    plugins: { 'testing-library': testingLibrary },
    rules: {
      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-events.md
      'testing-library/await-async-events': [
        'error',
        { eventModule: 'userEvent' },
      ],

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-queries.md
      'testing-library/await-async-queries': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
      'testing-library/await-async-utils': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
      'testing-library/consistent-data-testid': [
        'error',
        { testIdPattern: '', testIdAttribute: 'testID' },
      ],

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-events.md
      'testing-library/no-await-sync-events': [
        'error',
        { eventModules: ['fire-event'] },
      ],

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-queries.md
      'testing-library/no-await-sync-queries': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md
      'testing-library/no-container': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
      'testing-library/no-debugging-utils': [
        'error',
        { utilsToCheckFor: { debug: true, logRoles: true, logDOM: true } },
      ],

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md
      'testing-library/no-dom-import': ['error', 'react'],

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-global-regexp-flag-in-query.md
      'testing-library/no-global-regexp-flag-in-query': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
      'testing-library/no-manual-cleanup': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
      'testing-library/no-node-access': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
      'testing-library/no-promise-in-fire-event': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-lifecycle.md
      'testing-library/no-render-in-lifecycle': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
      'testing-library/no-unnecessary-act': ['error', { isStrict: true }],

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
      'testing-library/no-wait-for-multiple-assertions': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
      'testing-library/no-wait-for-side-effects': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
      'testing-library/no-wait-for-snapshot': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
      // Отключено из-за вкусовщины. В продвинутых тестах запросы могут стоять отдельно от expect
      // 'testing-library/prefer-explicit-assert': [
      //   'error',
      //   { includeFindQueries: true },
      // ],

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
      'testing-library/prefer-find-by': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-implicit-assert.md
      'testing-library/prefer-implicit-assert': 'off',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
      'testing-library/prefer-presence-queries': [
        'error',
        { presence: true, absence: true },
      ],

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
      'testing-library/prefer-query-by-disappearance': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-matchers.md
      'testing-library/prefer-query-matchers': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
      'testing-library/prefer-screen-queries': 'off',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
      'testing-library/prefer-user-event': 'error',

      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
      'testing-library/render-result-naming-convention': 'off',
    },
  },
  {
    files: [
      '**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
      '**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}',
    ],
    plugins: { 'testing-library': testingLibrary },
    rules: {
      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
      'testing-library/consistent-data-testid': [
        'error',
        {
          testIdPattern:
            '^([A-Z][a-z0-9]*)(_|[0-9]|([A-Z0-9][a-z0-9]*))*([A-Z])*$',
          testIdAttribute: ['testID'],
          customMessage: 'testID должно быть в формате UpperPascalCase',
        },
      ],
    },
  },
])
