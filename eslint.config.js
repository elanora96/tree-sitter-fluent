const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const globals = require('globals');

module.exports = defineConfig([
  eslint.configs.recommended,
  {ignores: ['node_modules/**/*', 'build/**/*']},
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
]);
