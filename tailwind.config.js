/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        VeryLightGrayishBlue: 'hsl(240, 78%, 98%)',
        LightGrayishBlue: 'hsl(234, 14%, 74%)',
        GrayishBlue: 'hsl(233, 13%, 49%)',
        DarkGrayishBlue: 'hsl(232, 13%, 33%)',
      },
    },
  },
  plugins: [],
}