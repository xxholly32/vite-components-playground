import vitePluginVuedoc from 'vite-plugin-vuedoc'

const config = {
  publicPath : "/vite-components-playground/",
  // can read default _assets at Github pages
  assetsDir: "assets",
  plugins: [vitePluginVuedoc()]
}

export default config