let path = require('path');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./src/index.js']
  },

  devServer: {
    index: 'index.html',
    compress: true,
    port: 9000,
    publicPath: '/static/',
    contentBase: path.resolve(__dirname),
    watchContentBase: true
  },

  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },

  // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },

    output: {
      path: path.resolve(__dirname, './static'),
      filename: 'app.js'
    }
};
