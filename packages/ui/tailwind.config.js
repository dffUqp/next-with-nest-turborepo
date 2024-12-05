import { tailwindConfig } from "@packages/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [tailwindConfig],
  theme: {
    extend: {},
  },
  plugins: [],
};
