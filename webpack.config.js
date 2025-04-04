const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('webpack').ProgressPlugin;
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv');

const envConfig = dotenv.config({ path: `./env.${process.env.NODE_ENV}` }).parsed;
const envKeys = Object.keys(envConfig).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(envConfig[next]);
  return prev;
}, {});

console.log('=========process.env.NODE_ENV', process.env.NODE_ENV);
console.log('=========envKeys', envKeys);

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    home: [
      './src/index.js'
    ],
    about: [
      './src/about.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new ProgressPlugin(),
    new DefinePlugin({
      ...envKeys
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './public/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: process.env.NODE_ENV === 'dev' ? 'source-map' : false,
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/about$/, to: '/about.html' }
      ]
    },
    hot: true
  }
};
