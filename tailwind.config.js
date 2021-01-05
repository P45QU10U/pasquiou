const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        cyan: colors.cyan,
      },
    },
  },
}
