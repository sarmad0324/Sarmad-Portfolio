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
        // Simplified color palette - only black, white, gray, purple
        darkBlack: '#000000',
        darkGray1: '#1F1F1F',
        darkGray2: '#404040',
        darkGray3: '#6B6B6B',
        light1: '#FFFFFF',
        light2: '#F5F5F5',
        light3: '#E5E5E5',
        light4: '#9CA3AF',
        // Simplified colors
        primary: '#7C3AED', // Purple
        secondary: '#6B7280', // Gray
        accent: '#9CA3AF', // Light gray
        success: '#6B7280', // Gray instead of green
        warning: '#6B7280', // Gray instead of yellow
        error: '#6B7280', // Gray instead of red
        // Removed gradient and neon colors
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #7C3AED, 0 0 10px #7C3AED, 0 0 15px #7C3AED' },
          '100%': { boxShadow: '0 0 10px #7C3AED, 0 0 20px #7C3AED, 0 0 30px #7C3AED' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode:"class"
};
export default config;
