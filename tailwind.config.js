module.exports = {
  plugins: [],
  theme: {
    extend: {
      colors: {
        'snow': '#fffafa',
        'onyx': '#353839',
      },
      maxWidth: {
        'ideal': '90ch',
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{svelte,js}'
  ],
  variants: {
    extend: {},
  },
}