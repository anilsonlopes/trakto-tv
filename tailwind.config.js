/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Poppings", "serif"],
    },
    extend: {
      colors: {
        neutral: {
          cloudy: "#7183A6",
          white: "#FFFFFF",
          light: "#E4EBFB",
          dark: "#252323",
          darkest: "#04183E",
        },
      },
    },
  },
  plugins: [],
};
