/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./careerpage.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "#222831",
        lightGrey: "#393E46",
        lightBlue: "#00ADB5",
        teal: "#00feff",
        winter: "#EEEEEE",
        greyIsh: "#D3D3D3",
      },
      fontFamily: {},
    },
  },
  plugins: [],
}
