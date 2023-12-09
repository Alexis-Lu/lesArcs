/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-theme": "#f4f4f4",
        "blue-theme": "rgba(0, 43, 86, .55)",
      },
    },
  },
  plugins: [],
};
