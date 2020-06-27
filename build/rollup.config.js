/*
 * @Date: 2020-06-18 02:06:11
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-22 01:39:12
 * @FilePath: /spurv/ifoo/build/rollup.config.js
 */ 
const path = require('path');
const buble = require('@rollup/plugin-buble'); 
const typescript = require('@rollup/plugin-typescript');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.d.ts'];

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
      },{
        file: resolveFile('dist/index.cjs.js'),
        format: 'cjs',
        name: 'ifoo',
      }
    ], 
    plugins: [
      typescript({"lib": ["es2018", "dom", "esnext"], "target": "esnext"}),
      buble({
        transforms:{
          forOf: false
        }
      }),
      commonjs(),
      nodeResolve({
        transforms: { forOf: false },
        extensions
        }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      })
    ],
  },
]