/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#4f46e5", // Light mode primary color
          dark: "#3b82f6", // Dark mode primary color
        },
        // Add any additional colors as needed
      },
    },
  },
  darkMode: "class", // Enable dark mode using a CSS class
  plugins: [],
};
