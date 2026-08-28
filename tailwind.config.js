/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#07241A',
          800: '#0B382A',
          700: '#124837',
          600: '#1B5E48',
        },
        amberGold: {
          50:  '#FDF9F0',
          100: '#FBF0DA',
          400: '#EAB308',
          500: '#CA8A04',
          600: '#B45309',
          700: '#854D0E',
        },
        sand: '#FAF8F5',
      },
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
