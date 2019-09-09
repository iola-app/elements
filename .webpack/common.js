const path = require('path');

const include = [
  path.resolve(__dirname, '../src'),
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
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
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};
