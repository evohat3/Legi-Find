module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['error', 'never'], // Avoid extra semicolons
    'no-unused-vars': 'error', // Highlight unused variables
    'no-trailing-spaces': 'error', // Disallow trailing spaces
    indent: ['error', 2], // Enforce 2 spaces for indentation
    'eol-last': 'error' // Require a newline at the end of the file
  }
}
