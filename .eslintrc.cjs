module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),

  plugins: [ 'prettier' ],

  rules: {
    'prettier/prettier': 'error',
  },
}
