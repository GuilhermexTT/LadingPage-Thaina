/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-beige": "#FDFBF7",
        "gold": "#C4A484",
        "zinco": "#27272a",
      },
      fontFamily: {
        title: ["var(--font-title)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },

    },
  },
  plugins: [],
};