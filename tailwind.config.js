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
      fontFamily: {
        'fancy': 'ui-serif, Lora, Georgia, Cambria, "Times New Roman", Times, serif',
      }
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