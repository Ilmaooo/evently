/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarPurple: "rgba(187, 144, 219, 0.72)",
        sidebarBlue: "rgba(203, 239, 255, 0.5)",
        mobileSidebarPurple: "rgba(187, 144, 219, 1)",
        mobileSidebarBlue: "rgba(203, 239, 255, 1)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
