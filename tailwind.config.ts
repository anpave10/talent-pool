import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
    colors: {
      "primary-blue": "#0B85C3",
      "main-text": "#101828",
      "secondary-text": "#667085",
      "secondary-gray": "#F2F4F7",
      "light-gray": "#D0D5DD",
      "main-gray": "#344054",
      "primary-green": "#009688",
      "white": "#FFFFFF",
      "gray-50": "#F9FAFB",
      "gray-100": "#F2F4F7",
      "dark-gray": "#1C1B1F",
      "black": "#1D1929",
      "blue-light": "#F0F9FF",
      "red-light": "#FDF2FA",
      "primary-red": "#C11574"
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary-blue|main-text|secondary-text|secondary-gray|main-gray|primary-green)/,
    },
  ],
  plugins: [],
};
export default config;
