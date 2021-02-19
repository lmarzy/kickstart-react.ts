// Webpack Common Config

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebPackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
  minify: {
    collapseWhitespace: true,
  },
});

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
      alias: {
        sassHelpers: path.resolve(__dirname, '../src/assets/styles/01-helpers/helpers.scss'),
        pages: path.resolve(__dirname, '../src/pages'),
        sections: path.resolve(__dirname, '../src/components/sections'),
        common: path.resolve(__dirname, '../src/components/shared'),
        styles: path.resolve(__dirname, '../src/assets/styles'),
      },
    },
  };
};
