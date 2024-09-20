import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '.875rem',
      base: '1.25rem',
      lg: '2rem',
      xl: '4rem',
      '2xl': '12rem',
    },
    extend: {
      dropShadow: {
        'md': '0 4px 4px rgba(0, 0, 0, .4)',
      },
      fontFamily: {
        'cabin': ['"Cabin"', 'sans-serif'],
        'abril': ['"Abril Fatface"', 'serif'],
      },
      colors: {
        dark: '#010A13',
        light: '#FFF2D5',
        gray: '#1E1F23',
        main: '#FFB812',
        accent: '#F96F5D',
        lightGray: '#666666'
      },
      keyframes: {
        jump: {
          '0%, 10%, 20%, 30%, 40%, 50%, 70%, 100%': { transform: 'translateY(0)', color: '#F96F5D' },
          '15%, 35%': { transform: 'translateY(-8px)', color: '#FFB812' },
        },
      },
      animation: {
        jump: 'jump 4s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
};
export default config;
