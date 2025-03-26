/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#FFF4E9",
        black: "#111111",
        "caput-mortuum": "#592429",
        "kombu-green": "#2B3B2E",
        gold: "#FFD700",
      },
      fontFamily: {
        sans: ["Avenir", "Montserrat", "sans-serif"],
        script: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
