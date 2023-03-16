/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        // mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
