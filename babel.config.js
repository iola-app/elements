const path = require('path');

module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 versions', 'safari >= 7', 'ie >= 10'],
      },
    }],
  ],

  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['module-resolver', {
      alias: {
        /**
         * TODO: remove it some day, when we move the lib into separate package
         */
        '@iola/custom-element': path.resolve('./libs/custom-element'),
      },
    }],
  ],
};
