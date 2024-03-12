/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Source Sans Pro",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      leading: {
        "leading-7": "26px",
        "leading-9": "38px",
        "leading-10": "48px",
      },
      fontSize: {
        "text-4xl": "34px",
      },
      rounded: {
        "rounded-lg": "7px",
        "rounded-xl": "8px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        neutral: {
          100: "#FFFFFF",
          80: "#CCCCCC",
          0: "#000000",
        },

        primary: {
          20: "#4D0001",
          30: "#600C20",
          40: "#A61518",
          60: "#ED0000",
        },
        blue: {
          50: "#0073DD",
        },
      },
    },
  },
  plugins: [],
};
