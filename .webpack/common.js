const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const include = [
  path.resolve(rootDir, 'src'),
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
    alias: {
      '@iola/config': path.resolve(rootDir, 'iola.json'),
    },
  },
};
