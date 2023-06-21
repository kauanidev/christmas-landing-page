/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#DA2635',
          light: '#F7C7B9'
        },
        dark: {
          10: '#161212',
          20: '#404040',
          30: '#8D8D8D',
          40: '#F9F9F9'
        }
      },
      container: {
        padding: '1rem',
        screens: {
          xl: '1200px',
          '2xl': '1200px',
        }
      }
    },
  },
  plugins: [],
}
