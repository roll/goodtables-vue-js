const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ENV = process.env.NODE_ENV;

// Base

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: (ENV === 'production') ? 'goodtables-vue.min.js' : 'goodtables-vue.js',
    library: 'goodtablesVue',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader',
            })
          },
          postcss: [
            autoprefixer({
              browsers: ['last 2 versions'],
            })
          ],
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 32768,
          name: '[name].[ext]?[hash]',
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      'goodtables-vue.css'
    ),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
}

// Production

if (ENV === 'production') {
  webpackConfig.devtool = '#source-map'
  webpackConfig.plugins = [
    new ExtractTextPlugin(
      'goodtables-vue.min.css'
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}

// Module API

module.exports = webpackConfig
