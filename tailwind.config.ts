import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          dark: '#1e40af',
          light: '#3b82f6',
        },
        accent: {
          DEFAULT: '#fbbf24', // yellow-400
          dark: '#f59e0b',
          light: '#fcd34d',
        },
      },
    },
  },
  plugins: [],
};
export default config;
