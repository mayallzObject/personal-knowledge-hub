import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import importHelpers from 'eslint-plugin-import-helpers'
import { globalIgnores } from 'eslint/config'

export default [
  globalIgnores(['dist']),
  js.configs.recommended,
  // TypeScript recommended rules for flat config (manually added)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.app.json',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
      'import-helpers': importHelpers,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'import-helpers/order-imports': [
        'error',
        {
          groups: [
            '/^react/',
            'module',
            '/^@mui/',
            '/^@app/',
            '/^@api/',
            '/^@components/',
            '/^@features/',
            '/^@layouts/',
            '/^@pages/',
            '/^@utils/',
            '/^@design-tokens/',
            '/^@theme/',
            ['parent', 'sibling', 'index'],
          ],
          newlinesBetween: 'always',
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      import: importPlugin,
      'import-helpers': importHelpers,
    },
    rules: {
      'import-helpers/order-imports': [
        'error',
        {
          groups: [
            '/^react/',
            'module',
            '/^@mui/',
            '/^@app/',
            '/^@api/',
            '/^@components/',
            '/^@features/',
            '/^@layouts/',
            '/^@pages/',
            '/^@utils/',
            '/^@theme/',
            ['parent', 'sibling', 'index'],
          ],
          newlinesBetween: 'always',
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
  },
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
]
