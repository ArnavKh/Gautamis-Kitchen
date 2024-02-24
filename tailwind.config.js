/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#F0E8F5',
          200: '#883883',
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

