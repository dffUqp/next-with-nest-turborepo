import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import turboPlugin from "eslint-plugin-turbo";
import eslintConfigPrettier from "eslint-config-prettier";

export const config = tseslint.config({
  ignores: ["dist/**"],
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
  },
});
