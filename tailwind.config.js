/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wedera': {
          primary: '#EC4899',
          secondary: '#BE185D',
          pastel: '#FCE7F3',
          dark: '#9D174D',
        },
        'neutral': {
          light: '#F9FAFB',
          dark: '#111827',
        }
      },
      fontFamily: {
        'display': ['Great Vibes', 'Playfair Display', 'serif'],
        'heading': ['Poppins', 'Montserrat', 'sans-serif'],
        'body': ['Inter', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        'scroll-down': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'scroll-up': 'scroll-up 30s linear infinite',
        'scroll-down': 'scroll-down 30s linear infinite'
      }
    },
  },
  plugins: [],
}