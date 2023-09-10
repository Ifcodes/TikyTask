/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#3F5BF6",
          2: "#2f4ef7",
        },
        dark: "#101828",
        gray: {
          50: "#F9FAFB",
          200: "#EAECF0",
          300: "#D0D5DD",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        },
      },
      fontFamily: {
        inter: "Inter",
      },
      height: {
        main: "calc(100vh - 4rem)",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      gridTemplateColumns: {
        custom: "60% 1fr",
      },
    },
  },
  plugins: [],
};
