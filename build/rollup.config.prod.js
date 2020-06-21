/*
 * @Date: 2020-06-18 02:05:12
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-22 01:31:33
 * @FilePath: /spurv/ifoo/build/rollup.config.prod.js
 */ 
process.env.NODE_ENV = 'production';

const { terser } = require('rollup-plugin-terser');
const configList = require('./rollup.config');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

configList.map((config, index) => {

  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
    ...[
      terser()
    ]
  ]

  return config;
})

module.exports = configList;