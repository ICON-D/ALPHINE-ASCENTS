/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#379CF4',
        secondary: '#13304A'
      },
    },
    container:{
      center:true
    },
    fontFamily:{
      Oswald: [ "Oswald","sans-serif"],
      
      

    },
  },
  plugins: [],
}