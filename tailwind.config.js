/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
// #49C2FA
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#55D7CA',
          secondary: '#EE81C3',
          'secondary-focus': '#ED54A8',
          accent: '#F4BB77',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#6C727F',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      {
        dark: {
          primary: '#39D0C0',
          secondary: '#EE81C3',
          'secondary-focus': '#ED54A8',
          accent: '#F4BB77',
          neutral: '#3D4451',
          'base-100': '#272934',
          info: '#9DA3AE',
          success: '#36D399',
          warning: '#Fff',
          error: '#F87272',
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      animation: {
        'spin-fast': 'spin 0.47s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  variants: {
    width: ['responsive', 'hover', 'focus'],
  },

  safelist: [
    'text-teal-600',
    'text-yellow-600',
    'text-purple-500',
    'text-blue-800',
    'text-green-600',
    'text-red-700',
    'text-pink-700',
    'text-orange-700',
  ],
}
