import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'grey': {
          light: '#EEEDE7',
          DEFAULT: '#B9B7BD',
          dark: '#868B8E'
        },
        'pink': {
          DEFAULT: '#E7D2CC'
        }
      }
    },
  },
  plugins: [],
};
export default config;
