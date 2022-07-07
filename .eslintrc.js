const baseConfig = require('../.eslintrc.json');

module.exports = {
  extends: [
    '../.eslintrc.json',
    'plugin:@roq/backendConfig',
    'plugin:@roq/commonConfig',
  ],
  ignorePatterns: ['!**/*', 'src/migration', 'test/migration'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  rules: {
    '@roq/no-use-global-module': ['off', ['ConfigModule', 'EventModule']],
    '@roq/no-invalid-dirname': ['error', {casing: 'camelCased', allowedSeparator: 'none', noNumerics: true}],
    '@roq/no-use-deprecated-modules': ['warn', ['moment', 'request']],
    '@roq/resolvers-parse-id': 'off',
    '@roq/mutation-calls-service-method': 'off',
    '@roq/no-eslint-disable':'off',
    '@roq/imports-should-follow-conventions':'off'
  },
  overrides: [
    {
      files: ['test/**/*.spec.ts'],
      rules: {
        "@roq/imports-should-follow-conventions": 'off'
      }
    }
  ],
  plugins: ['@roq'],
};
