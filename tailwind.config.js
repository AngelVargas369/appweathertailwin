module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'back': '#111540',
      'solana':'#16f195',
      'text':'#bec2c5',
      'yellow':'#febb00',
  
    },
  //      backgroundImage: {
  //   'hero-pattern': "url('https://acegif.com/wp-content/uploads/rainy-5.gif')",
  //   // 'footer-texture': "url('/img/footer-texture.png')",
  //  },
    gradientColorStops: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'back': '#081b24',
      'whiteAplha':'#f8f8fa'
      ,
    },
  backgroundColor: {
    'whiteAplha':'#f8f8fa40',
    'white': '#e2e2e2',
    'black':'#d3d3d3',
    'solana':'#16f195',
   },
  //  backgroundImage: {
  //   'hero-pattern': "url('https://acegif.com/wp-content/uploads/rainy-5.gif')",
  //   // 'footer-texture': "url('/img/footer-texture.png')",
  //  },

  maxWidth: {
    '1/10': '6%',
    '1/6': '16%',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    '9/10': '90%',
   },
   maxHeight: {
    '0': '0',
    '1/10': '6%',
    '1/6': '16%',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    'full': '100%',
   },

   minWidth: {
    '0': '0',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    '8/10': '80%',
    '8.5/10':'85',
    '9/10': '90%',
    'full': '100%',
   },
  //  fill:  {
  //   'red': '#f8f8fa',
  //   'green': '#f8f8fa',
  //   'blue': '#f8f8fa',
  // },

},
  variants: {
    extend: {
    },
  },
  plugins: [],
}
