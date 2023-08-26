module.exports = {
delete: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  delete: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  globals: {
    VERSION: true,
    ENV: true,
  },
  rules: {
    quotes: ['error', 'single'],
    'prefer-const': 2,
  },
}
