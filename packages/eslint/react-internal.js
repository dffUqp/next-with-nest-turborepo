import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import { config as baseConfig } from "./base.js";

export const config = tseslint.config({
  extends: baseConfig,
  files: ["**/*.{js,ts,tsx}"],
  plugins: {
    "react-hooks": reactHooks,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
});
