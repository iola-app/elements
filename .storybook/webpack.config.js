const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('../.webpack/common');

module.exports = async ({ config, mode }) => merge(config, commonConfig);
