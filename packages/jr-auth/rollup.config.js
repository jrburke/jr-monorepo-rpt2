import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/jr-auth.js',
    format: 'iife',
    name: 'jrAuth',
    exports: 'named'
  },
  plugins: [resolve(), commonjs()]
};
