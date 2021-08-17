module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#56b6b8",
          DEFAULT: "#60CBCC",
          light: "#67f9fb",
        },
        secondary: {
          dark: "#b86420",
          DEFAULT: "#EC832E",
          light: "#ffb170",
        },

        "gray-main": {
          dark: "#303D48",
          DEFAULT: "#555555",
          light: "#F7F7F7",
        },
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
