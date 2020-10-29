import path from "path"
import base from '../../../build/rollup.config.base'

const config = Object.assign({}, base, {
  input: path.resolve(__dirname, "../index.js"),
  output: {
    name: 'index',
    file: path.resolve(__dirname, '../lib/index.js'),
    format: 'es'
  },
})

export default config