import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export const stylisticConfig = defineConfig([
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,mts,cts}'],
    plugins: { '@stylistic': stylistic },
    rules: {
      // https://eslint.style/rules/default/array-bracket-newline
      '@stylistic/array-bracket-newline': ['off', 'consistent'], // Rule conflicting with prettier
      '@stylistic/js/array-bracket-newline': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/array-bracket-spacing
      '@stylistic/array-bracket-spacing': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/js/array-bracket-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/array-element-newline
      '@stylistic/array-element-newline': [
        'off', // Rule conflicting with prettier
        { consistent: true, multiline: true },
      ],
      '@stylistic/js/array-element-newline': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/arrow-parens
      '@stylistic/arrow-parens': [
        'off', // Rule conflicting with prettier
        'always',
        { requireForBlockBody: true },
      ],
      '@stylistic/js/arrow-parens': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/arrow-spacing
      '@stylistic/arrow-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/js/arrow-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/block-spacing
      '@stylistic/block-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/js/block-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/ts/block-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/brace-style
      '@stylistic/brace-style': ['off', '1tbs', { allowSingleLine: true }], // Rule conflicting with prettier
      '@stylistic/js/brace-style': 'off', // Rule conflicting with prettier
      '@stylistic/ts/brace-style': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/comma-dangle
      '@stylistic/comma-dangle': ['off', 'only-multiline'], // Rule conflicting with prettier
      '@stylistic/js/comma-dangle': 'off', // Rule conflicting with prettier
      '@stylistic/ts/comma-dangle': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/comma-spacing
      '@stylistic/comma-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/js/comma-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/ts/comma-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/comma-style
      '@stylistic/comma-style': ['off', 'last'], // Rule conflicting with prettier
      '@stylistic/js/comma-style': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/computed-property-spacing
      '@stylistic/computed-property-spacing': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/js/computed-property-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/curly-newline
      '@stylistic/curly-newline': [
        'error',
        { consistent: true, multiline: true },
      ],

      // https://eslint.style/rules/default/dot-location
      '@stylistic/dot-location': ['off', 'property'], // Rule conflicting with prettier
      '@stylistic/js/dot-location': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/eol-last
      '@stylistic/eol-last': ['off', 'always'], // Rule conflicting with prettier
      '@stylistic/js/eol-last': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/function-call-spacing
      '@stylistic/function-call-spacing': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/js/func-call-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/ts/func-call-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/function-call-argument-newline
      '@stylistic/function-call-argument-newline': ['off', 'consistent'], // Rule conflicting with prettier
      '@stylistic/js/function-call-argument-newline': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/function-paren-newline
      '@stylistic/function-paren-newline': ['off', 'multiline'], // Rule conflicting with prettier
      '@stylistic/js/function-paren-newline': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/generator-star-spacing
      '@stylistic/generator-star-spacing': ['off', 'after'], // Rule conflicting with prettier
      '@stylistic/js/generator-star-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/implicit-arrow-linebreak
      '@stylistic/implicit-arrow-linebreak': ['off', 'beside'], // Rule conflicting with prettier
      '@stylistic/js/implicit-arrow-linebreak': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/indent
      '@stylistic/indent': [
        'off', // Rule conflicting with prettier
        2,
        {
          SwitchCase: 0,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 2,
          FunctionDeclaration: { body: 1, parameters: 1 },
          FunctionExpression: { body: 1, parameters: 1 },
          StaticBlock: { body: 1 },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: true,
          offsetTernaryExpressions: true,
          offsetTernaryExpressionsOffsetCallExpressions: false,
          ignoreComments: false,
          tabLength: 2,
        },
      ],
      '@stylistic/js/indent': 'off', // Rule conflicting with prettier
      '@stylistic/ts/indent': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/indent-binary-ops
      '@stylistic/indent-binary-ops': ['off', 2], // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-child-element-spacing
      '@stylistic/jsx-child-element-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/jsx/jsx-child-element-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-closing-bracket-location
      '@stylistic/jsx/jsx-closing-bracket-location': 'off', // Rule conflicting with prettier
      '@stylistic/jsx-closing-bracket-location': [
        'off', // Rule conflicting with prettier
        { nonEmpty: 'line-aligned', selfClosing: 'line-aligned' },
      ],

      // https://eslint.style/rules/default/jsx-closing-tag-location
      '@stylistic/jsx-closing-tag-location': ['off', 'line-aligned'], // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-curly-brace-presence
      '@stylistic/jsx-curly-brace-presence': ['error', 'never'],

      // https://eslint.style/rules/default/jsx-curly-newline
      '@stylistic/jsx-curly-newline': [
        'off', // Rule conflicting with prettier
        { multiline: 'forbid', singleline: 'forbid' },
      ],
      '@stylistic/jsx/jsx-curly-newline': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-curly-spacing
      '@stylistic/jsx-curly-spacing': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/jsx/jsx-curly-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-equals-spacing
      '@stylistic/jsx-equals-spacing': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/jsx/jsx-equals-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-first-prop-new-line
      '@stylistic/jsx-first-prop-new-line': ['off', 'multiline'], // Rule conflicting with prettier
      '@stylistic/jsx/jsx-first-prop-new-line': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-function-call-newline
      '@stylistic/jsx-function-call-newline': ['error', 'multiline'],

      // https://eslint.style/rules/default/jsx-indent
      '@stylistic/jsx-indent': ['off', 2], // Rule conflicting with prettier
      '@stylistic/jsx/jsx-indent': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-indent-props
      '@stylistic/jsx-indent-props': ['off', 2], // Rule conflicting with prettier
      '@stylistic/jsx/jsx-indent-props': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-max-props-per-line
      '@stylistic/jsx-max-props-per-line': [
        'off', // Rule conflicting with prettier
        { maximum: 1, when: 'multiline' },
      ],

      // https://eslint.style/rules/default/jsx-newline
      '@stylistic/jsx-newline': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-one-expression-per-line
      '@stylistic/jsx-one-expression-per-line': ['off', { allow: 'non-jsx' }], // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-pascal-case
      '@stylistic/jsx-pascal-case': 'error',

      // https://eslint.style/rules/default/jsx-props-no-multi-spaces
      '@stylistic/jsx-props-no-multi-spaces': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-quotes
      '@stylistic/jsx-quotes': ['off', 'prefer-single'], // Rule conflicting with prettier
      '@stylistic/js/jsx-quotes': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/jsx-self-closing-comp
      '@stylistic/jsx-self-closing-comp': [
        'error',
        { component: true, html: true },
      ],

      // https://eslint.style/rules/default/jsx-sort-props
      '@stylistic/jsx-sort-props': [
        'error',
        { shorthandFirst: true, callbacksLast: true },
      ],

      // https://eslint.style/rules/default/jsx-tag-spacing
      '@stylistic/jsx-tag-spacing': [
        'off', // Rule conflicting with prettier
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],

      // https://eslint.style/rules/default/jsx-wrap-multilines
      '@stylistic/jsx-wrap-multilines': [
        'off', // Rule conflicting with prettier
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],

      // https://eslint.style/rules/default/key-spacing
      '@stylistic/key-spacing': [
        'off', // Rule conflicting with prettier
        { beforeColon: false, afterColon: true, mode: 'strict' },
      ],
      '@stylistic/js/key-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/ts/key-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/keyword-spacing
      '@stylistic/keyword-spacing': ['off', { before: true, after: true }], // Rule conflicting with prettier
      '@stylistic/js/keyword-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/ts/keyword-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/line-comment-position
      '@stylistic/line-comment-position': ['off', { position: 'above' }],

      // https://eslint.style/rules/default/linebreak-style
      '@stylistic/linebreak-style': ['off', 'unix'], // Rule conflicting with prettier
      '@stylistic/js/linebreak-style': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/lines-around-comment
      '@stylistic/js/lines-around-comment': 'off', // Rule conflicting with prettier
      '@stylistic/ts/lines-around-comment': 'off', // Rule conflicting with prettier
      '@stylistic/lines-around-comment': [
        'off', // Rule conflicting with prettier
        {
          beforeBlockComment: false,
          beforeLineComment: false,
          allowBlockStart: true,
          allowBlockEnd: false,
          allowObjectStart: true,
          allowObjectEnd: false,
          allowArrayStart: false,
          allowArrayEnd: false,
          allowClassStart: true,
          allowClassEnd: false,
          afterHashbangComment: true,
        },
      ],

      // https://eslint.style/rules/default/lines-between-class-members
      '@stylistic/lines-between-class-members': ['error', 'always'],

      // https://eslint.style/rules/default/max-len
      '@stylistic/js/max-len': 'off', // Rule conflicting with prettier
      '@stylistic/max-len': [
        'off', // Rule conflicting with prettier
        {
          code: 80,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],

      // https://eslint.style/rules/default/max-statements-per-line
      '@stylistic/max-statements-per-line': ['off', { max: 1 }], // Rule conflicting with prettier
      '@stylistic/js/max-statements-per-line': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/member-delimiter-style
      '@stylistic/member-delimiter-style': [
        'off', // Rule conflicting with prettier
        {
          multiline: { delimiter: 'none', requireLast: false },
          singleline: { delimiter: 'semi', requireLast: false },
          multilineDetection: 'brackets',
        },
      ],
      '@stylistic/ts/member-delimiter-style': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/multiline-comment-style
      '@stylistic/multiline-comment-style': [
        'error',
        'separate-lines',
        { checkJSDoc: false },
      ],

      // https://eslint.style/rules/default/multiline-ternary
      '@stylistic/multiline-ternary': ['off', 'never', { ignoreJSX: true }], // Rule conflicting with prettier
      '@stylistic/js/multiline-ternary': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/new-parens
      '@stylistic/new-parens': ['off', 'always'], // Rule conflicting with prettier
      '@stylistic/js/new-parens': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/newline-per-chained-call
      '@stylistic/newline-per-chained-call': [
        'off', // Rule conflicting with prettier
        { ignoreChainWithDepth: 2 },
      ],
      '@stylistic/js/newline-per-chained-call': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-confusing-arrow
      '@stylistic/js/no-confusing-arrow': 'off', // Rule conflicting with prettier
      '@stylistic/no-confusing-arrow': [
        'off', // Rule conflicting with prettier
        { allowParens: true, onlyOneSimpleParam: false },
      ],

      // https://eslint.style/rules/default/no-extra-parens
      '@stylistic/no-extra-parens': ['off', 'functions'], // Rule conflicting with prettier
      '@stylistic/js/no-extra-parens': 'off', // Rule conflicting with prettier
      '@stylistic/ts/no-extra-parens': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-extra-semi
      '@stylistic/no-extra-semi': 'off', // Rule conflicting with prettier
      '@stylistic/js/no-extra-semi': 'off', // Rule conflicting with prettier
      '@stylistic/ts/no-extra-semi': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-floating-decimal
      '@stylistic/no-floating-decimal': 'off', // Rule conflicting with prettier
      '@stylistic/js/no-floating-decimal': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-mixed-operators
      '@stylistic/js/no-mixed-operators': 'off', // Rule conflicting with prettier
      '@stylistic/no-mixed-operators': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-mixed-spaces-and-tabs
      '@stylistic/no-mixed-spaces-and-tabs': 'off', // Rule conflicting with prettier
      '@stylistic/js/no-mixed-spaces-and-tabs': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-multi-spaces
      '@stylistic/no-multi-spaces': 'off', // Rule conflicting with prettier
      '@stylistic/js/no-multi-spaces': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-multiple-empty-lines
      '@stylistic/no-multiple-empty-lines': ['off', { max: 2 }], // Rule conflicting with prettier
      '@stylistic/js/no-multiple-empty-lines': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/operator-linebreak
      '@stylistic/operator-linebreak': ['off', 'after'], // Rule conflicting with prettier
      '@stylistic/js/operator-linebreak': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/one-var-declaration-per-line
      '@stylistic/one-var-declaration-per-line': ['off', 'always'], // Rule conflicting with prettier
      '@stylistic/js/one-var-declaration-per-line': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/object-property-newline
      '@stylistic/object-property-newline': [
        'off', // Rule conflicting with prettier
        { allowAllPropertiesOnSameLine: true },
      ],
      '@stylistic/js/object-property-newline': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/object-curly-spacing
      '@stylistic/object-curly-spacing': ['off', 'always'], // Rule conflicting with prettier
      '@stylistic/js/object-curly-spacing': 'off', // Rule conflicting with prettier
      '@stylistic/ts/object-curly-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/object-curly-newline
      '@stylistic/object-curly-newline': [
        'off', // Rule conflicting with prettier
        { consistent: true, multiline: true },
      ],
      '@stylistic/js/object-curly-newline': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/nonblock-statement-body-position
      '@stylistic/nonblock-statement-body-position': ['off', 'beside'], // Rule conflicting with prettier
      '@stylistic/js/nonblock-statement-body-position': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-whitespace-before-property
      '@stylistic/no-whitespace-before-property': 'off', // Rule conflicting with prettier
      '@stylistic/js/no-whitespace-before-property': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-trailing-spaces
      '@stylistic/no-trailing-spaces': 'off', // Rule conflicting with prettier
      '@stylistic/js/no-trailing-spaces': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/no-tabs
      '@stylistic/js/no-tabs': 'off', // Rule conflicting with prettier
      '@stylistic/no-tabs': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/padded-blocks
      '@stylistic/padded-blocks': [
        'off', // Rule conflicting with prettier
        'never',
        { allowSingleLineBlocks: true },
      ],
      '@stylistic/js/padded-blocks': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/padding-line-between-statements
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'return',
            'class',
            'function',
            'interface',
            'type',
            'enum',
            'case',
            'if',
            'for',
            'while',
            'iife',
            'switch',
          ],
        },
        {
          blankLine: 'always',
          prev: [
            'class',
            'function',
            'interface',
            'type',
            'enum',
            'case',
            'if',
            'for',
            'while',
            'iife',
            'switch',
          ],
          next: '*',
        },
      ],

      // https://eslint.style/rules/default/quote-props
      '@stylistic/quote-props': ['off', 'as-needed'], // Rule conflicting with prettier
      '@stylistic/js/quote-props': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/quotes
      '@stylistic/js/quotes': 'off', // Rule conflicting with prettier
      '@stylistic/ts/quotes': 'off', // Rule conflicting with prettier
      '@stylistic/quotes': [
        'off', // Rule conflicting with prettier
        'single',
        { avoidEscape: true, allowTemplateLiterals: 'always' },
      ],

      // https://eslint.style/rules/default/rest-spread-spacing
      '@stylistic/rest-spread-spacing': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/js/rest-spread-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/semi
      '@stylistic/semi': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/js/semi': 'off', // Rule conflicting with prettier
      '@stylistic/ts/semi': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/semi-spacing
      '@stylistic/semi-spacing': ['off', { before: false, after: true }], // Rule conflicting with prettier
      '@stylistic/js/semi-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/semi-style
      '@stylistic/semi-style': ['off', 'last'], // Rule conflicting with prettier
      '@stylistic/js/semi-style': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/space-before-blocks
      '@stylistic/space-before-blocks': ['off', 'always'], // Rule conflicting with prettier
      '@stylistic/js/space-before-blocks': 'off', // Rule conflicting with prettier
      '@stylistic/ts/space-before-blocks': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/space-before-function-paren
      '@stylistic/space-before-function-paren': [
        'off', // Rule conflicting with prettier
        { anonymous: 'always', named: 'never', asyncArrow: 'always' },
      ],
      '@stylistic/js/space-before-function-paren': 'off', // Rule conflicting with prettier
      '@stylistic/ts/space-before-function-paren': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/space-in-parens
      '@stylistic/space-in-parens': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/js/space-in-parens': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/space-infix-ops
      '@stylistic/space-infix-ops': 'off', // Rule conflicting with prettier
      '@stylistic/js/space-infix-ops': 'off', // Rule conflicting with prettier
      '@stylistic/ts/space-infix-ops': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/space-unary-ops
      '@stylistic/space-unary-ops': 'off', // Rule conflicting with prettier
      '@stylistic/js/space-unary-ops': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/spaced-comment
      '@stylistic/spaced-comment': ['error', 'always'],

      // https://eslint.style/rules/default/switch-colon-spacing
      '@stylistic/switch-colon-spacing': [
        'off', // Rule conflicting with prettier
        { before: false, after: true },
      ],
      '@stylistic/js/switch-colon-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/template-curly-spacing
      '@stylistic/template-curly-spacing': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/js/template-curly-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/template-tag-spacing
      '@stylistic/template-tag-spacing': ['off', 'never'], // Rule conflicting with prettier
      '@stylistic/js/template-tag-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/type-annotation-spacing
      '@stylistic/type-annotation-spacing': [
        'off', // Rule conflicting with prettier
        {
          before: false,
          after: true,
          overrides: { arrow: { before: true, after: true } },
        },
      ],
      '@stylistic/ts/type-annotation-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/type-generic-spacing
      '@stylistic/type-generic-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/type-named-tuple-spacing
      '@stylistic/type-named-tuple-spacing': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/wrap-iife
      '@stylistic/wrap-iife': ['off', 'outside'], // Rule conflicting with prettier
      '@stylistic/js/wrap-iife': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/wrap-regex
      '@stylistic/wrap-regex': 'off', // Rule conflicting with prettier
      '@stylistic/js/wrap-regex': 'off', // Rule conflicting with prettier

      // https://eslint.style/rules/default/yield-star-spacing
      '@stylistic/yield-star-spacing': ['off', 'after'], // Rule conflicting with prettier
      '@stylistic/js/yield-star-spacing': 'off', // Rule conflicting with prettier
    },
  },
])
