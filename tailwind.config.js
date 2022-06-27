/** @type {import('tailwindcss').Config} */

const brandColors = {
  birdBlue: '#1D9BF0',
  platinum: '#E7E9EA',
  silver: '#71767B',
  onix: '#333639',
  richBlack: '#15202B'
}

module.exports = {
  content: [
    '.index.html',
    'index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        ...brandColors,

        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platinum
      }
    },
  },
  plugins: [],
}