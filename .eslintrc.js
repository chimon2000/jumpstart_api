module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      files: ['**/*.mocks.[jt]s'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      files: ['**/*.spec.[jt]s'],
      rules: {
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/cognitive-complexity': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  root: true,
  rules: {
    complexity: ['error'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],

    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'dir'] }],
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'sonarjs'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:sonarjs/recommended'],
}
