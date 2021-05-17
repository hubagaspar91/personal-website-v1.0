module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['"Monument Extended"', 'sans-serif']
    },
    colors: {
      primary: '#DC493D',
      body: '#C4C4C4',
      black: '#010101'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
