module.exports = {
  entry: './src/front/app/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
