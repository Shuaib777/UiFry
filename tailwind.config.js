/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      clashFont: ['"Clash Display"', "sans-serif"],
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        pink: "var(--pink)",
      },
      fontWeight: {
        clashFont: [400, 500, 600, 700],
        // normal: 400,
        // medium: 500,
        // semiBold: 600,
        // bold: 700,
      },
    },
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
  },
  plugins: [],
};
