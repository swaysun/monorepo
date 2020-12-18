var path = require('path');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[
    `@grg/components/lib/${key}`
  ] = `@grg/components/dist/${key}`;
});

externals = [
  Object.assign(
    {
      vue: 'vue'
    },
    externals
  ),
  nodeExternals()
];
exports.packagesExternals = {
  '@grg/uitls': '@grg/uitls'
};
exports.externals = externals;

exports.alias = {
  '@': path.resolve(__dirname, "../src"),
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../lib'),
  '@grg/components': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
