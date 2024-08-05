/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        blue: "#17316C",
        red: "#D4030B",
        orange: "#DB6C39",
        grey: "#555973",
        soot: "#252525",
      },
    },
  },
  plugins: [],
};
