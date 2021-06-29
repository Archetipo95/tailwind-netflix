module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/bg.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
