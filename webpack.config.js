const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  const plugins = [
    new CleanWebpackPlugin(),
  ];

  if (env && env.analyse) {
    plugins.push(new Visualizer());
    plugins.push(new WebpackBundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: './report.html',
      openAnalyzer: true,
    }));
  }

  return {
    mode: 'production',
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          // exclude: /node_modules/, // TODO: return it after custom-element will separate
          use: ['babel-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            'to-string-loader',
            'css-loader',
            'sass-loader',
          ],
          include: path.join(__dirname, 'src'),
        },
        {
          test: /\.(png|gif|jpg|svg|eot|svg|ttf|woff|woff2)$/,
          use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
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
      path: path.join(__dirname, 'dist'),
      filename: 'index.js',
    },
  };
};
