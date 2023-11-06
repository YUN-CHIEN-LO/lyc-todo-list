/* eslint-env node */
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:jsdoc/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      typescript: {},
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json', '.vue'],
      },
    },
    'import/core-modules': ['vite', '@vitejs/plugin-vue'],
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
