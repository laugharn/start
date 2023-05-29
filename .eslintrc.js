const config = {
  extends: ['next', 'prettier', 'plugin:@typescript-eslint/recommended'],
  root: true,
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
  },
}

module.exports = config
