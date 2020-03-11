import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'dist/jr-lib.js',
    format: 'iife',
    name: 'jrLib',
    exports: 'named'
  },
  plugins: [resolve(), commonjs()]
};
