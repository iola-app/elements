const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const commonConfig = require('./common');

module.exports = (env) => {
  const plugins = [
    new CleanWebpackPlugin(),
  ];

  if (env && env.analyse) {
    plugins.push(new Visualizer({
      filename: './report/statistics.html',
    }));
    plugins.push(new WebpackBundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: './report/structure.html',
      openAnalyzer: true,
    }));
  }

  const buildConfig = {
    mode: 'production',
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(png|gif|jpg|svg|eot|svg|ttf|woff|woff2)$/,
          use: 'url-loader',
        },
      ],
    },
    plugins,
    optimization: {
      minimize: true,
    },
    output: {
      library: '@iola/elements',
      libraryTarget: 'commonjs',
      path: path.join(__dirname, '../dist'),
      filename: 'index.js',
    },
  };

  return merge(buildConfig, commonConfig);
};
