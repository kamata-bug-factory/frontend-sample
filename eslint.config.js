import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  eslintConfigPrettier,
  {
    files: ['**/*.{js,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': [
        'error',
        {
          ignore: [
            '\\.svg$',
            '@tailwindcss/vite',
            '@vitejs/plugin-react',
            'eslint/config',
            'typescript-eslint',
            '@/api/*',
            '@/assets/*',
            '@/components/*',
            '@/constants/*',
            '@/features/*',
            '@/hooks/*',
            '@/lib/*',
            '@/pages/*',
            '@/routes/*',
            '@/types/*',
            '@/utils/*',
          ],
        },
      ],
    },
  },
]);
