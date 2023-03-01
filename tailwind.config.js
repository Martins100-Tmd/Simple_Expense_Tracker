/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
        cod: ["FiraCode"],
      },
      width: {
        25: ["25%"],
      },
    },
  },
  plugins: [],
};
