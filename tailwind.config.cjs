/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // if font's name has 2 words, put it into '"word word"'
        barlow: ['"Barlow Condensed"', 'sans-serif']
      }
    },
  },
  plugins: [],
}