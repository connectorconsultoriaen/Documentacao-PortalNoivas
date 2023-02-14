/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', 
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        goldDark: '#a78656',
        gold: '#cdae7f'
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: []
}
