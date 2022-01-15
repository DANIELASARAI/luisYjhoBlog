// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  loaders: [{ test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }],
};
