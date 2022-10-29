/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    colors: {
      'orange': rgb(255, 125, 26),
      'oragne-light': 	rgb(255, 237, 224),
      'dark-blue': rgb(29, 32, 37),
      'grayish-blue': rgb(182, 188, 200),
    },
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}