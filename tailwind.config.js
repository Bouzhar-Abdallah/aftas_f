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
      animation: {
        formAnimation: 'formKeyframes 0.7s ease-in 1',
        formAnimationRemove: 'formKeyframesRemove 0.7s ease-in 1',
      },
      keyframes: {
        formKeyframes: {
          '0%': {top: '-384px'},
          '100%': {top: '144px'},
        },
        formKeyframesRemove: {
          '100%': {top: '-384px'},
          '0%': {top: '144px'},
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
