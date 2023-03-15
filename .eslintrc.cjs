/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['**/*.json'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'no-debugger': 'error',
    'import/extensions': 'off',
    'no-unused-expressions': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [],
      },
    ],
    'vue/attributes-order': ['error'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: [],
      },
    ],
    'no-console': 'warn',
  },
};
