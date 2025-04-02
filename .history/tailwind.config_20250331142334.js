/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        cols: 
      },
      colors: {
        primary: "#313e51", 
      }
    },
  },
  plugins: [],
}