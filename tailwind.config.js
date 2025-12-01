/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,jsx,js,mdx}",
    "./components/**/*.{ts,tsx,jsx,js,mdx}",
    "./lib/**/*.{ts,tsx,jsx,js,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7fb",
          100: "#ffeef6",
          200: "#ffd6ea",
          300: "#ff9ecf",
          400: "#ff85c0",
          500: "#ff6fa8",
          600: "#f45590",
          700: "#e0467e",
          800: "#c23268",
          900: "#9e2752",
        },
      },
      boxShadow: {
        soft: "0 6px 20px rgba(16, 24, 40, 0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
