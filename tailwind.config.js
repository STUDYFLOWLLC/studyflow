module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'ui-sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
  variants: {
    width: ['responsive', 'hover', 'focus']
  }
}
