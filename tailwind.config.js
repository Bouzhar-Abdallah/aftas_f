/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        violet: "#731DD8",
        tomato: "#FC5130",
        whiteGhost: "#FFFAFF",
        jet: "#303036",
        cyan: "#30BCED",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
