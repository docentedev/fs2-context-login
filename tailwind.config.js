/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // <--- Esto le indica a Tailwind que busque la clase "dark" en el HTML
  theme: {
    extend: {},
  },
  plugins: [],
};
