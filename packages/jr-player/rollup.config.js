import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/jr-player.js',
    format: 'iife',
    name: 'jrPlayer',
    exports: 'named'
  },
  watch: {
    include: ['src/**', '../jr-lib/src/**', '../jr-auth/src/**']
  },
  plugins: [
    typescript({
      include: ['src/**/*.ts+(|x)', '../jr-lib/**/*.ts+(|x)', '../jr-auth/**/*.ts+(|x)']
    }),
    resolve(),
    commonjs()
  ]
};
