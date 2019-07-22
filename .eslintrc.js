module.exports = {
    'env': {
        'browser': true,
        "node": true,
        'es6': true,
    },

    'plugins': [
      'react',
    ],

    'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
    ],

    "settings": {
      "react": {
        "version": "detect",
      },
    },

    "parser": "babel-eslint",
    'parserOptions': {
      'ecmaFeatures': {
          'jsx': true,
          'legacyDecorators': true,
      },

      'ecmaVersion': 2018,
      'sourceType': 'module',
    },
};
