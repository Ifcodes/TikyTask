/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F5BF6",
        gray: {
          50: "#F9FAFB",
          200: "#EAECF0",
          300: "#D0D5DD",
        },
      },
      fontFamily: {
        inter: "Inter",
      },
      height: {
        main: "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [],
};
