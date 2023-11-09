module.exports = {
  rules: {
    'linebreak-style': ['error', 'unix']
  },
  overrides: [
    {
      files: [
        '*.vue',
        '*.ts',
        '*.js'
      ],
      extends: ['@vue/eslint-config-typescript'],
      rules: {
        'import/no-named-as-default': 0,
        'brace-style': [
          'error',
          '1tbs'
        ],
        'nonblock-statement-body-position': [
          'error',
          'below'
        ],
        'no-use-before-define': [
          'off'
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: true, variables: true, typedefs: false }
        ],
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
          }
        ],
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return'
          }
        ],

        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface'
        ],
        '@typescript-eslint/consistent-type-imports': 'warn',
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/block-lang': [
          'error',
          {
            script: {
              lang: [
                'ts',
                'tsx'
              ]
            }
          }
        ],
        'vue/html-self-closing': [
          'warn',
          {
            html: {
              void: 'always',
              normal: 'always',
              component: 'always'
            },
            svg: 'always'
          }
        ]
      }
    },
    {
      files: [
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js',
        '*.vue.js'
      ],
      processor: '@graphql-eslint/graphql'
    },
    {
      files: [
        '*.gql',
        '*.graphql'
      ],
      extends: 'plugin:@graphql-eslint/schema-recommended',
      rules: {
        '@graphql-eslint/known-directives': ['error', { ignoreClientDirectives: ['client'] }],
        '@graphql-eslint/fields-on-correct-type': 'error',
        '@graphql-eslint/no-anonymous-operations': 'warn',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            OperationDefinition: {
              style: 'PascalCase',
              forbiddenPrefixes: [
                'Query',
                'Mutation',
                'Subscription',
                'Get'
              ],
              forbiddenSuffixes: [
                'Query',
                'Mutation',
                'Subscription'
              ]
            }
          }
        ],
        '@graphql-eslint/no-case-insensitive-enum-values-duplicates': [
          'error'
        ],
        '@graphql-eslint/require-description': [
          'warn',
          {
            FieldDefinition: true
          }
        ]
      }
    }
  ]
}
