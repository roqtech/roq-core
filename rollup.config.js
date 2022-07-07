import esbuild from 'rollup-plugin-esbuild'
import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import clear from 'rollup-plugin-clear'
import dts from 'rollup-plugin-dts'
import path from 'path'

const main = require('./package.json').main.replace(/\.js$/, '')
const projectRootDir = path.resolve(__dirname);

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
});

const config = [
  bundle({
    plugins: [
      alias({
        entries: [
          {
            find:/^@src/, replacement: '$1.js',
            replacement: path.resolve(projectRootDir, 'src')
          }
        ],
      }),
      esbuild({
        // include: /\.[jt]sx?$/, 
      }), 
      clear({
        targets: ['dist']
      })
    ],
    output: [
      {
        file: `${main}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${main}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${main}.d.ts`,
      format: 'es',
    },
  })
]

export default config
