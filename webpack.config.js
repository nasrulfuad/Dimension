const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/js/main.js',
    util: './src/js/util.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js/'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
