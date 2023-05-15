/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontSize:{
        xxs: "0.5rem"
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        customLightBlue: "#4E97D1",
        customDarkerBlue: "#2D283E",
        customGray: "#f0f0f0",
        customBlue: "#003777",
        customVeryLightGreen: "#DEEDE5",
        customLightGreen: "#427A5B",
        customVeryLightRed: "#FFCCCC",
        customLightRed: "#E42F2F",
        customVeryLightYellow: "#FFF0BB",
        customLightYellow: "#FF9900"
      },
      height:{
        "100" : "24.5rem",
        "125" : "31.25rem"
      },
      maxHeight:{
        "125" : "31.25rem"
      },
      width:{
        "92": "23rem"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}