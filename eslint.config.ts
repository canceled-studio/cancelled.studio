import astroParser from 'astro-eslint-parser';
import astroPlugin from 'eslint-plugin-astro';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.astro'],
    plugins: { astro: astroPlugin },
    extends: ['plugin:astro/recommended'],
    languageOptions: {
      parser: astroParser,
    },
    rules: {},
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, prettier: prettierPlugin },
    extends: ['js/recommended', prettierConfig],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
