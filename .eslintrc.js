module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: 'eslint:recommended',
  rules: {
    indent: [2, 2, {
      SwitchCase: 1
    }],
    'linebreak-style': [2, 'unix'],
    'no-console': 0,
    quotes: [2, 'single'],
    semi: 2
  }
};
