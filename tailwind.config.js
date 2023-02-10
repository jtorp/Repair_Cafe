/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',

  theme: {
    screens: {
      xs: '390',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1535px'
    },
    extend:{
      fontFamily:{
        boldFont: "",
        
      }
    },
    extend: {
      colors: {
        crazyYellow:" rgb(234, 250, 53)",
        brown:"rgb(112, 67, 25)",
        grayBrown: "rgb(126, 125, 123)",
        grayWhite:" rgb(253, 252, 248)"
      }
    },
  },

  plugins: [],
};
