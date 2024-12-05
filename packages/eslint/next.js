import tseslint from "typescript-eslint";
import pluginNext from "@next/eslint-plugin-next";
import { config as baseReactConfig } from "./react-internal.js";

export const nextJsConfig = tseslint.config(
  {
    ignores: [".next/**"],
  },
  {
    extends: baseReactConfig,
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
    rules: {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
);
