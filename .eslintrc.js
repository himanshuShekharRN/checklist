/**
 * "off" or 0 - turn the rule off
 * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
 * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 */

module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {  "sourceType": "module" },
  rules: {
    'no-console': 2,
    'max-lines': [0, {max: 400}],
    'no-unused-vars': 2,
  },
};
