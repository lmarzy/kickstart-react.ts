// Webpack Common Config

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const htmlWebPackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
  minify: {
    collapseWhitespace: true,
  },
});

const tsconfigPathsPlugin = new TsconfigPathsPlugin();

module.exports = () => {
  return {
    entry: {
      app: path.join(__dirname, '../src', 'index.tsx'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: '/node_modules/',
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [htmlWebPackPlugin],
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [tsconfigPathsPlugin],
    },
  };
};
