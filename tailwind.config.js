module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        firefly: "#142830",
        yellowsea: "#fbab00",
        pampas: "#f7f4ef",
        supernova: "#fcb132",
        antiflashwhite: "#f2f3f4",
        black: "#000",
        white: "#fff",
        frenchgray: "#bdbdbd",
        darkfly: "#142830",
        customGreen: "rgb(222, 242, 220)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
