// Webpack Production config

const Dotenv = require('dotenv-webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./common');

const cleanWebpackPlugin = new CleanWebpackPlugin();
const dotEnv = new Dotenv({ path: path.resolve(__dirname, '..', './.env.prod') });

module.exports = merge(common(), {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        defaults: false,
        commons: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [cleanWebpackPlugin, dotEnv],
});
