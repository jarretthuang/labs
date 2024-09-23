import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          100: "#f5f5f5", // Slightly off-white
          200: "#ebebeb", // Very light gray
          300: "#e1e1e1", // Light gray
          400: "#cfcfcf", // Medium light gray
          500: "#b1b1b1", // Neutral gray
          600: "#9e9e9e", // Slightly darker gray
          700: "#7e7e7e", // Dark gray
          800: "#4d4d4d", // Darker gray
          900: "#2a2a2a", // Almost black
          1000: "#0f0f0f", // Very close to pure black
        },
      },
    },
  },
  plugins: [],
};
export default config;
