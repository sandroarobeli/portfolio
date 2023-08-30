/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F5F5DC",
          hover: "#E5E5A6",
          active: "#D6D66F",
        },
      },
      backgroundImage: {
        paper: "url('./img/paper.png')",
      },
      // fontFamily: {
      //   montserrat: ["var(--font-montserrat)", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
