/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        RfBlue: "#B9E7F5",
        RfBlue2: "#0058ED",
        RfNavy: "#415AA6",
        RfNavy2: "#2E384D",
        RfWhite: "#FFFFFF",
        RfOrange: "#F32A39",
        RfOrange2: "#D92B58",
        RfOrange3: "rgb(175, 12, 53)",
        RfOrange4: "#E76801",
        Rfcyan: "#A5CD39",
        Rfcyan2: "rgb(145, 193, 13)",
        RfGray: "#707070",
        RfGray2: "#D9DDE3",
        RfGreen: "#097D00",
        RfDark: "#000000"
      },
      margins: {
        RfTop: '200px',
      },
    },
  },
  plugins: [],
}
