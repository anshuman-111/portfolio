/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'vvlgreen': '#D5ECD4',
        'lgreen' : '#C3DAC3',
        'pakgreen': '#273B09',
        'moss': '#58641D',
        'dgreen':'#002400',
        'dgray' : '#2B4141'
      },
      fontFamily: {
        'lexend' : ['Lexend Deca']
      }
    },
  },
  plugins: [],
}