/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      colors:{
        "yellow":"#E2D28F",
        "black": "#000000",
        "white": "#e5e5e5",
        "offWhite": "#8B8880",
        "grey": "#26221D",
        "tint":{
          "yellow": "#B9C2B6",
          "emerald": "#B0D2C2",
          "fuchsia": "#BBB7C1",
          "green": "#8CD3AE",
          "red": "#FEC2B2",
          "yellow": "#F8D593",
          "teal": "#D3F1F9",
        },
        "transparent": "transparent"
      },
  },
  plugins: [],
};
