/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 1s ease-in"
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(100vw)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        }
      }
    },
  },
  plugins: [require("daisyui")],
}
