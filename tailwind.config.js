/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '869px',
        xl: '869px',
        '2xl': '869px'
      }
    },
    extend: {
      colors: {
        primary: '#03438D',
        secondary: '#EEC32A',
        gray: '#9B9893'
      },
      width: {
        auto: 'auto'
      }
    }
  },
  plugins: []
}
