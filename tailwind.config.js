/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
  },
  plugins: [],
}