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

  //Don't purge colors because they are dynamicly used (Ex: Badge component)
  // safelist: [{ pattern: /(bg|text)-(.*)-(\\d{1}0{1,2})/ }],

  plugins: [require("@tailwindcss/typography")],

  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};

module.exports = config;
