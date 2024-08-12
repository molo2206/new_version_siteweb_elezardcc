
// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGray': '#4D4D4D',
        'brandPrimary': '#0069FF',
        'brandSecondary': '#FF5500',
        'neutralGray': '#717171',
        'gray900': '#18191F',
        'brandSuccess': '#4CAF50',
        'brandWarning': '#FFC107',
        'brandDanger': '#F44336',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}