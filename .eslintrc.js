module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  extends: ['plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: ['~/features/*/*'],
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        'react/jsx-curly-brace-presence': ['error', { props: 'never' }],
        radix: 'off',
        'no-console': 'warn',
      },
    },
  ],
};
