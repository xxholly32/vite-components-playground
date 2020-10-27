import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'index',
    file: 'lib/index.esm.js',
    format: 'es'
  },
})

export default config