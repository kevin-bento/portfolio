/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      /*infinite scroll*/
      animation: {
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
      },

      screens: {
        'sm': '640px',
        'lg': '850px',
        'xl': '1280px',
      },

      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        }
      },

      fontFamily: {
        sans: ['Alata', 'sans-serif'],
      },
      colors: {
        darkTile: '#1C1C1C', 
        darkTileHover: '#363636',
        darkBackground: '#040F16', 
        lemon: '#EFFF8F',
        hoverPurpler: '#BF8DFF',
        liteGrey: '#949494',
        labelPink: '#FECEFF',
        labelBlue: '#85CCFF',
        labelGreen: '#9CFFC4',
        checkGreen: '#40AD86',
      },
      keyframes: {
        appear:{
          "0%":{
            opacity: "0",
          },
          "100%":{
            opacity:"1",
          },
          },
          animation:{
            appear: "appear 1s ease-in-out",
          }
        }
    },
  },
  plugins: [],
}

