/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        cols: "1fr 1fr"
      },
      colors: {
        primary: "#313e51", 
      }, fontFamily: {
        start: ""
      }
    },
  },
  plugins: [],
}