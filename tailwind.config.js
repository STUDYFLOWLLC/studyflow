/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
// #49C2FA

module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.47s linear infinite',
      },
      backgroundImage: {
        404: "url('/images/404bg.svg')",
      },
      blur: {
        xs: '3px',
      },
      fontFamily: {
        sans: 'Inter',
      },
      fontSize: {
        '9xl': '10rem',
        '10xl': '11rem',
        '11xl': '16rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: false,
    themes: [
      {
        light: {
          primary: '#7AE0D6',
          secondary: '#EE81C3',
          'secondary-focus': '#ED54A8',
          accent: '#F4BB77',
          neutral: '#333333',
          'base-100': '#FFFFFF',
          info: '#6C727F',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      {
        dark: {
          primary: '#6EDDD2',
          secondary: '#EE81C3',
          'secondary-focus': '#ED54A8',
          accent: '#F4BB77',
          neutral: '#C9CCE2',
          'base-100': '#272934',
          info: '#9DA3AE',
          success: '#36D399',
          warning: '#Fff',
          error: '#F87272',
        },
      },
    ],
  },
  variants: {
    width: ['responsive', 'hover', 'focus'],
  },
  safelist: [
    'text-slate-500',
    'text-red-500',
    'text-rose-400',
    'text-green-400',
    'text-lime-400',
    'text-sky-500',
    'text-cyan-500',
    'text-yellow-500',
    'text-orange-500',
    'text-purple-500',
    'text-indigo-500',
    'bg-slate-500',
    'bg-red-500',
    'bg-rose-400',
    'bg-green-400',
    'bg-lime-400',
    'bg-sky-500',
    'bg-cyan-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-purple-500',
    'bg-indigo-500',
    'ml-4',
    'ml-8',
    'ml-12',
    'ml-16',
  ],
}
