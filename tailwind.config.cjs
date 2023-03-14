/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        // mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};

module.exports = config;
