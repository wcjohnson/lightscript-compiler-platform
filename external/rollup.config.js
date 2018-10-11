import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';
import babel from './rollup-plugin-babel-fixed';
import ignore from 'rollup-plugin-ignore';
import fixInternals from './rollup-plugin-fix-internals';

var target = process.env.BUILD_TARGET
var needsDestructuring = process.env.NEEDS_DESTRUCTURING
var noMinify = process.env.NO_MINIFY

export default [
  {
    input: `${target}.js`,
    plugins: [
      ignore(['buffer']),
      fixInternals(),
      resolve(),
      needsDestructuring && babel({
        babelrc: false,
        plugins: ['@babel/transform-destructuring']
      }),
      json({
        compact: true,
        namedExports: false
      }),
      commonjs({
        include: 'node_modules/**',
        sourceMap: false
      }),
      (!noMinify) && terser({sourcemap: false})
    ].filter(Boolean),
    output: {
      format: 'cjs',
      file: `output/${target}.js`,
      sourcemap: false
    }
  }
]
