const js = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const turboPlugin = require("eslint-plugin-turbo");
const eslintConfigPrettier = require("eslint-config-prettier");

const apiConfig = tseslint.config({
  ignores: ["dist/**"],
  files: ["**/*.ts"],
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    turbo: turboPlugin,
  },
  rules: {
    "turbo/no-undeclared-env-vars": "warn",
    "@typescript-eslint/no-require-imports": 0,
  },
});

module.exports = { apiConfig };
