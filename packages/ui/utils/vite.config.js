import vitePluginVuedoc from 'vite-plugin-vuedoc'

const config = {
  base : "/vite-components-playground/",
  // can read default _assets at Github pages
  assetsDir: "site/assets",
  plugins: [vitePluginVuedoc()]
}

export default config