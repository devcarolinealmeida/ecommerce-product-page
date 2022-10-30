/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#ff7d1a',
        'oragne-light': '#ffede0',
        'dark-blue': '#1d2025',
        'grayish-blue': '#b6bcc8',
      },
      fontFamily: {
        'primary': ['Kumbh Sans', 'sans-serif'],
        'seconday': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}