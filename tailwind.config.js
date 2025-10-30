/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        primary: "#676f9d",
        secondary: "#424769",
        dark: "#2d3250",
        accent: "#f6b17a",
        text: "#2d3250",
      },
    },
  },
  plugins: [],
};