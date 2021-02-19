// Webpack Dev Config

const Dotenv = require('dotenv-webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./common.js');

const dotEnv = new Dotenv({ path: path.resolve(__dirname, '..', './.env.dev') });

module.exports = () => {
  return merge(common(), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(s*)css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [dotEnv],
  });
};
