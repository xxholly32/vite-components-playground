import vitePluginVuedoc from "vite-plugin-vuedoc";

const config = {
  base: "./",
  // can read default _assets at Github pages
  assetsDir: "site/assets",
  plugins: [
    vitePluginVuedoc({
      prism: {
        theme: "okaidia",
      },
    }),
  ],
};

export default config;
