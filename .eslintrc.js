module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'operator-linebreak': [
      'error',
      'before',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    semi: [
      'error',
      'always',
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    indent: [
      'error',
      2,
      {
        MemberExpression: 1,
      },
    ],
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
  },
};
