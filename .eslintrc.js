const prettierrc = require('rc')('./prettier')

module.exports = {
  extends: ['react-app'],
  plugins: ['prettier'],
  rules: {
    // '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-explicit-any': ['off'],
    'prettier/prettier': ['error', prettierrc]
  }
}
