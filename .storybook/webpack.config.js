const path = require('path');
const merge = require('webpack-merge');

const include = [
  path.resolve(__dirname, '../src/'),

  /**
   * TODO: Remove it when we move the lib into real npm package
   */
  path.resolve(__dirname, '../node_modules/@iola/custom-element'),
];

module.exports = async ({ config, mode }) => merge(config, {
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        include,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'to-string-loader',
          'css-loader',
          'sass-loader',
        ],
        include,
      },
    ],
  },
});
