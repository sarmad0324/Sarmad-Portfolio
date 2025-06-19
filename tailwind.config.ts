import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   backgroundImage:{
"gradient-radial":"radial-gradient(var(--tw-gradient-stops))",
"gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops)) "
   },
      fontFamily:{
        Sora:[`var(--font-sora)`,`sans-serif`]
      },
      colors: {
        // Only keeping used colors
        darkBlack: '#000000',
        darkGray1: '#2E2E2E',
        darkGray2: '#4B4B4B',
        darkGray3: '#7D7D7D',
        light1: '#F8FAFC',
        light2: '#D9EAFD',
        light3: '#BCCCDC',
        light4: '#9AA6B2',
      },
    },
  },
  plugins: [],
  darkMode:"class"
};
export default config;
