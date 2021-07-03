module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Lato', 'sans-serif'],
      },
      maxWidth: {
        xxs: '270px',
      },
      screens: {
        xs: '414px',
        mediumlg: '1100px',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-in-out',
      },
      colors: {
        mainColor: '#662BE3',
        hoverMainColor: '#362F78',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
