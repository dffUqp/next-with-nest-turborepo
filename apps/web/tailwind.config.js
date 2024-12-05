import { tailwindConfig } from "@packages/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/*.{ts,tsx}"],
  presets: [tailwindConfig],
  theme: {
    extend: {},
  },
  plugins: [],
};
