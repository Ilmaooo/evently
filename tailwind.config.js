/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sidebarPurple: "rgba(187, 144, 219, 0.72)",
        sidebarBlue: "rgba(203, 239, 255, 0.5)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
