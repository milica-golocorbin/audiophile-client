/** @type {import('tailwindcss').Config} */

let plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: "375px",
      s: "480px",
      sm: "640px",
      md: "768px",
      lg: "896px",
      xl: "1024px",
      "2xl": "1280px",
      "4xl": "1536px",
    },
  },
  plugins: [],
};
