/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-fast': 'spin 0.4s linear infinite',
      },
      colors: {
        primary: {
          400: '#63CBFB',
          500: '#49C2FA',
          // primary: withOpacity('--color-primary'),
          // a11y: withOpacity('--color-a11y')
        },
        flowdark: '#20293A',
        primaryOld: {
          800: '#2B6466',
          750: '#327477',
          700: '#398588',
          650: '#409699',
          600: '#47A6AA',
          550: '#52B3B7',
          500: '#63BBBE',
          450: '#74C2C5',
          400: '#84CACC',
          350: '#8DCDD0',
          300: '#96D1D3',
          250: '#9FD5D7',
          200: '#A8D9DA',
          150: '#B0DDDE',
          100: '#B9E0E2',
          // primary: withOpacity('--color-primary'),
          // a11y: withOpacity('--color-a11y')
        },
        secondary: {
          900: '#C96994',
          800: '#D180A4',
          700: '#D996B4',
          600: '#E1ADC4',
          500: '#EAC4D5',
          400: '#EBC7D7',
          300: '#ECCCDA',
          200: '#EED0DD',
          100: '#F0D4E0',
        },
      },
      // textColor: {
      //   primary: {
      //     800: '#2B6466',
      //     750: '#327477',
      //     700: '#398588',
      //     650: '#409699',
      //     600: '#47A6AA',
      //     550: '#52B3B7',
      //     500: '#63BBBE',
      //     450: '#74C2C5',
      //     400: '#84CACC',
      //     350: '#8DCDD0',
      //     300: '#96D1D3',
      //     250: '#9FD5D7',
      //     200: '#A8D9DA',
      //     150: '#B0DDDE',
      //     100: '#B9E0E2'
      //     // primary: withOpacity('--color-primary'),
      //     // a11y: withOpacity('--color-a11y')
      //   },
      //   secondary: {
      //     900: '#C96994',
      //     800: '#D180A4',
      //     700: '#D996B4',
      //     600: '#E1ADC4',
      //     500: '#EAC4D5',
      //     400: '#EBC7D7',
      //     300: '#ECCCDA',
      //     200: '#EED0DD',
      //     100: '#F0D4E0'
      //   }
      // },
      // backgroundColor: {
      //   primary: {
      //     800: '#2B6466',
      //     750: '#327477',
      //     700: '#398588',
      //     650: '#409699',
      //     600: '#47A6AA',
      //     550: '#52B3B7',
      //     500: '#63BBBE',
      //     450: '#74C2C5',
      //     400: '#84CACC',
      //     350: '#8DCDD0',
      //     300: '#96D1D3',
      //     250: '#9FD5D7',
      //     200: '#A8D9DA',
      //     150: '#B0DDDE',
      //     100: '#B9E0E2'
      //     // primary: withOpacity('--color-primary'),
      //     // a11y: withOpacity('--color-a11y')
      //   },
      //   secondary: {
      //     900: '#C96994',
      //     800: '#D180A4',
      //     700: '#D996B4',
      //     600: '#E1ADC4',
      //     500: '#EAC4D5',
      //     400: '#EBC7D7',
      //     300: '#ECCCDA',
      //     200: '#EED0DD',
      //     100: '#F0D4E0'
      //   }
      // },
      // ringColor: {
      //   primary: {
      //     800: '#2B6466',
      //     750: '#327477',
      //     700: '#398588',
      //     650: '#409699',
      //     600: '#47A6AA',
      //     550: '#52B3B7',
      //     500: '#63BBBE',
      //     450: '#74C2C5',
      //     400: '#84CACC',
      //     350: '#8DCDD0',
      //     300: '#96D1D3',
      //     250: '#9FD5D7',
      //     200: '#A8D9DA',
      //     150: '#B0DDDE',
      //     100: '#B9E0E2'
      //     // primary: withOpacity('--color-primary'),
      //     // a11y: withOpacity('--color-a11y')
      //   },
      //   secondary: {
      //     900: '#C96994',
      //     800: '#D180A4',
      //     700: '#D996B4',
      //     600: '#E1ADC4',
      //     500: '#EAC4D5',
      //     400: '#EBC7D7',
      //     300: '#ECCCDA',
      //     200: '#EED0DD',
      //     100: '#F0D4E0'
      //   }
      // },
      // borderColor: {
      //   primary: {
      //     800: '#2B6466',
      //     750: '#327477',
      //     700: '#398588',
      //     650: '#409699',
      //     600: '#47A6AA',
      //     550: '#52B3B7',
      //     500: '#63BBBE',
      //     450: '#74C2C5',
      //     400: '#84CACC',
      //     350: '#8DCDD0',
      //     300: '#96D1D3',
      //     250: '#9FD5D7',
      //     200: '#A8D9DA',
      //     150: '#B0DDDE',
      //     100: '#B9E0E2'
      //     // primary: withOpacity('--color-primary'),
      //     // a11y: withOpacity('--color-a11y')
      //   },
      //   secondary: {
      //     900: '#C96994',
      //     800: '#D180A4',
      //     700: '#D996B4',
      //     600: '#E1ADC4',
      //     500: '#EAC4D5',
      //     400: '#EBC7D7',
      //     300: '#ECCCDA',
      //     200: '#EED0DD',
      //     100: '#F0D4E0'
      //   }
      // },
      // decorationColor: {
      //   primary: {
      //     800: '#2B6466',
      //     750: '#327477',
      //     700: '#398588',
      //     650: '#409699',
      //     600: '#47A6AA',
      //     550: '#52B3B7',
      //     500: '#63BBBE',
      //     450: '#74C2C5',
      //     400: '#84CACC',
      //     350: '#8DCDD0',
      //     300: '#96D1D3',
      //     250: '#9FD5D7',
      //     200: '#A8D9DA',
      //     150: '#B0DDDE',
      //     100: '#B9E0E2'
      //     // primary: withOpacity('--color-primary'),
      //     // a11y: withOpacity('--color-a11y')
      //   },
      //   secondary: {
      //     900: '#C96994',
      //     800: '#D180A4',
      //     700: '#D996B4',
      //     600: '#E1ADC4',
      //     500: '#EAC4D5',
      //     400: '#EBC7D7',
      //     300: '#ECCCDA',
      //     200: '#EED0DD',
      //     100: '#F0D4E0'
      //   }
      // }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
  variants: {
    width: ['responsive', 'hover', 'focus'],
  },
}
