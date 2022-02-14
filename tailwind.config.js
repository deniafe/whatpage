module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        secondary: '#fafafa',
        primary: '#25d366',
        text: '#777c85',
        card: '#242232',
        headingText: '#333',
        input: '#181625',
        blue: '#087db3',
        pink: '#f32756',
        success: '#00f2c3',
        info: '#1d8cf8',
        warning: '#ff8d72',
        error: '#fd5d93',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
