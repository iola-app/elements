const path = require('path');
const glob = require('glob');
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
    entry: glob.sync('./src/elements/**/index.js').reduce((result, path) => {
      const name = path.match(/^\.\/src\/elements\/(.*)\/index\.js$/)[1];

      return { ...result, [name]: path };
    }, {}),
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
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
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
  };
};
