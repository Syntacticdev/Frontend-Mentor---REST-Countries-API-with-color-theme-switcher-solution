/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'veryLightGray': "hsl(0, 0%, 100%)",
        'darkGray': "hsl(0, 0%, 52%)",
        'veryDarkBlue': 'hsl(207, 26%, 17%)',
        "darkBlue": "hsl(209, 23%, 22%)",
        "deepWhite": "hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
}