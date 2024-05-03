const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      'clr-gradient-1': 'rgb(var(--clr-gradient-1) / <alpha-value>)',
      'clr-gradient-2': 'rgb(var(--clr-gradient-2) / <alpha-value>)',
      'clr-gradient-3': 'rgb(var(--clr-gradient-3) / <alpha-value>)',
      'clr-logo-bing': 'rgb(var(--clr-logo-bing) / <alpha-value>)',
    },
    borderRadius: {
      'logo-bing': '5.5rem',
    },
    fontFamily: {
      'fnt-logo-bing': ['Segoe', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}
