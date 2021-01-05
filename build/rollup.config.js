import resolve from "@rollup/plugin-node-resolve"; // 告诉 Rollup 如何查找外部模块
import commonjs from "@rollup/plugin-commonjs"; // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import esbuild from "rollup-plugin-esbuild";
import vue from "rollup-plugin-vue"; // 处理vue文件
import fs from "fs-extra"; // 写文件

const UI_PATH = "./packages/ui";

let dirs = fs.readdirSync(UI_PATH).map((name) => {
  if (fs.existsSync(`${UI_PATH}/${name}/lib`)) {
    fs.emptyDirSync(`${UI_PATH}/${name}/lib`);
  } else {
    fs.mkdirSync(`${UI_PATH}/${name}/lib`);
  }
  return {
    input: `${UI_PATH}/${name}/index.ts`,
    external: ["vue"], //使用外部的依赖，如果使用内部 vue 会照成多重引用
    plugins: [
      resolve({ extensions: [".vue"] }),
      // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
      vue(),
      esbuild(),
      commonjs(),
    ],
    output: {
      name: "index",
      file: `${UI_PATH}/${name}/lib/index.js`,
      format: "es",
    },
  };
});

dirs.push({
  input: `./packages/vitec/index.ts`,
  external: ["vue"], //使用外部的依赖，如果使用内部 vue 会照成多重引用
  plugins: [
    resolve({ extensions: [".vue"] }),
    // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
    vue(),
    esbuild(),
    commonjs(),
  ],
  output: {
    name: "index",
    file: `./packages/vitec/lib/index.js`,
    format: "es",
  },
});

export default dirs;
