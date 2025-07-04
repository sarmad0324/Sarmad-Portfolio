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
        // Enhanced color palette
        darkBlack: '#000000',
        darkGray1: '#2E2E2E',
        darkGray2: '#4B4B4B',
        darkGray3: '#7D7D7D',
        light1: '#F8FAFC',
        light2: '#D9EAFD',
        light3: '#BCCCDC',
        light4: '#9AA6B2',
        // New vibrant colors
        primary: '#6366F1',
        secondary: '#8B5CF6',
        accent: '#EC4899',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        // Gradient colors
        gradientStart: '#667eea',
        gradientMiddle: '#764ba2',
        gradientEnd: '#f093fb',
        // Neon colors
        neonBlue: '#00D4FF',
        neonPurple: '#B537F2',
        neonPink: '#FF006B',
        neonGreen: '#39FF14',
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
          '0%': { boxShadow: '0 0 5px #6366F1, 0 0 10px #6366F1, 0 0 15px #6366F1' },
          '100%': { boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6' },
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
