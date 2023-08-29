module.exports = {
  root: true,
  env: { browser: true, es2020: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off'
  }
};
