import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: ['styled-components', 'react', 'react-dom'],
  globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
  },
  output: [
    {
      name: "minisite-library",
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      globals: { 'styled-components': 'styled' }
    },
    {
      name: "minisite-library",
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals: { 'styled-components': 'styled' }
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ]
}
