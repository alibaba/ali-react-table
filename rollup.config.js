import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

const external = Object.keys(pkg.dependencies).concat(['rxjs/operators'])

const config = output => ({
  input: 'src/ali-react-table.ts',
  output,
  plugins: [
    typescript({
      tsconfig: 'tsconfig.rollup.json',
    }),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
    }),
  ],
  external,
  treeshake: {
    moduleSideEffects: false,
  },
})

export default [
  config({
    file: pkg.module,
    format: 'esm',
  }),
  config({
    file: pkg.main,
    format: 'cjs',
  }),
]
