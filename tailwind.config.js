module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Lato", "sans-serif"],
      },
      maxWidth: {
        xxs: "270px",
      },
      screens: {
        xs: "414px",
        sm: "640px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
