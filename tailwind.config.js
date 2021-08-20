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
          dark: "var(--color-primary-dark ,#56b6b8 )",
          DEFAULT: "var(--color-primary , #60CBCC )",
          light: "var(--color-primary , #67f9fb )",
        },
        secondary: {
          dark: "var(--color-secondary-dark ,#b86420 )",
          DEFAULT: "var(--color-secondary , #EC832E )",
          light: "var(--color-secondary-light ,#ffb170 )",
        },

        "gray-main": {
          dark: "var(--color-gray-main-dark ,#303D48 )",
          DEFAULT: "var(--color-gray-main ,#555555 )",
          light: "var(--color-gray-main-light ,#F7F7F7 )",
        },
        "gray-light": "var(--color-gray-light ,#AEAEAE )",
      },
      fontFamily: {
        Poppins: ["var(--en-font , 'Poppins, sans-serif' )"],
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
