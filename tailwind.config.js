/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenFirst: "#5DDA80",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
