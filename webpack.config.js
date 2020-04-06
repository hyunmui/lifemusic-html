const path = require('path');
module.exports = {
  mode: 'development',
  entry: './html/js/main.js',
  watch: false,
  output: {
    path: path.resolve(__dirname, 'html', 'js'),
    publicPath: '/js/',
    filename: "main.min.js"
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    extensions: ['.json', '.js']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/html/'),
    inline: true,
    host: 'localhost',
    port: 5000,
  }
};