/*
 * @Date: 2020-06-18 02:06:11
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-21 15:44:57
 * @FilePath: /spurv/ifoo/build/rollup.config.js
 */ 
const path = require('path');
const buble = require('@rollup/plugin-buble'); 
const typescript = require('@rollup/plugin-typescript');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = [
  {
    input: resolveFile('src/index.ts'),
    output: [
      {
        file: resolveFile('dist/index.esm.js'),
        format: 'esm',
        name: 'ifoo',
      },{
        file: resolveFile('dist/index.iife.js'),
        format: 'iife',
        name: '$purv',
      }
    ], 
    plugins: [
      typescript({"lib": ["es2018", "dom"]}),
      buble()
    ],
  },
]