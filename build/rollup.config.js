import resolve from "@rollup/plugin-node-resolve"; // 告诉 Rollup 如何查找外部模块
import commonjs from "@rollup/plugin-commonjs"; // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import esbuild from 'rollup-plugin-esbuild'
import vue from "rollup-plugin-vue"; // 处理vue文件
import css from "rollup-plugin-css-only"; // 提取css，压缩能力不行
import CleanCSS from "clean-css"; // 压缩css
import fs from "fs-extra"; // 写文件

export default fs.readdirSync("packages").map((name) => {
  if (fs.existsSync(`./packages/${name}/lib`)) {
    fs.emptyDirSync(`./packages/${name}/lib`);
  } else {
    fs.mkdirSync(`./packages/${name}/lib`);
  }
  return {
    input: `./packages/${name}/index.ts`,
    external: ["vue"], //使用外部的依赖，如果使用内部 vue 会照成多重引用
    plugins: [
      resolve({ extensions: [".vue"] }),
      commonjs(),
      css({
        output(style) {
          // 压缩 css 写入 dist/vue-rollup-component-template.css
          fs.writeFileSync(
            `./packages/${name}/lib/index.css`,
            new CleanCSS().minify(style).styles
          );
        },
      }),
      // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
      vue(),
      esbuild()
    ],
    output: {
      name: "index",
      file: `./packages/${name}/lib/index.js`,
      format: "es",
    },
  };
});
