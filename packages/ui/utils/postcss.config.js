module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // PostCSS plugin to unwrap nested rules like how Sass does it.
    require('postcss-nested'),
  ]
}
