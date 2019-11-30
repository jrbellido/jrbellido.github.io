let path = require('path');

module.exports = {
    mode: 'development',

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
        rules: [{
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        }, {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        }]
    },

  optimization: {
    splitChunks: {
        chunks: 'all'
    }
  },

/*
    optimization: {
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                'react': {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    filename: 'react.js',
                    name: 'react',
                    chunks: 'all'
                },
                'reach-router': {
                    test: /[\\/]node_modules[\\/](@reach)[\\/]/,
                    filename: 'reach-router.js',
                    name: 'reach-router',
                    chunks: 'all'
                }
            }
        }
    },
*/

    /*
    externals: {
        "react": "react",
        "react-dom": "react-dom"
    },
    */

    output: {
        path: path.resolve(__dirname, './static'),
        filename: 'app.js'
    }
};