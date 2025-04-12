/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightText: "#f0f0f0",
        darkText: "#21202b",
        ux_bg: "#77d1cb",
        ux_blue: "#77a9d1",
        ux_purple: "#8377d1",
        ux_rosa: "#c177d1",
        ux_pink: "#d177b3",
        ux_grey: "#54506a",
        ux_scnd_bg: "#99ddd8",
        ux_scnd_blue: "#92bada",
        ux_scnd_purple: "#9c92da",
        ux_scnd_rosa: "#c682d5",
        ux_scnd_pink: "#da92c2",
        ux_scnd_grey: "#817c9c",
        ux_white: "#f1f0f4",
        ux_dark: "#292734",
        ux_whiteHover: "#d4d2dd",
        ux_darkHover: "#54506a",
        ux_whiteUnselected: "#b7b4c7",
        ux_lightgrey: "#e0e0e0",
        ux_darkgrey: "#5C5B5B",
      },
    },
  },
  plugins: [],
}

