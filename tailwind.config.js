/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,pug}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#089DB4",
          light: "#0DC8DA",
        },
      },
      outlineOffset: {
        minus2: "-2px",
      },
    },
  },
};
