// This file is auto-generated from the corresponding file in /dev_mode
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge').default;
const LicenseWebpackPlugin = require('license-webpack-plugin')
  .LicenseWebpackPlugin;
const config = require('./webpack.config');

config[0] = merge(config[0], {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
          output: {
            beautify: false,
            comments: false
          },
          safari10: true
        },
        cache: process.platform !== 'win32'
      })
    ]
  },
  plugins: [
    new LicenseWebpackPlugin({
      perChunkOutput: false,
      outputFilename: 'third-party-licenses.txt',
      excludedPackageTest: packageName =>
        packageName === '@jupyterlab/application-top'
    })
  ]
});

module.exports = config;
