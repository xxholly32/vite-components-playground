import resolve from "@rollup/plugin-node-resolve"; // 告诉 Rollup 如何查找外部模块
import commonjs from "@rollup/plugin-commonjs"; // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import esbuild from "rollup-plugin-esbuild";
import vue from "rollup-plugin-vue"; // 处理vue文件
import fs from "fs-extra"; // 写文件
import path from "path";

const INPUT_PATH = path.resolve(__dirname, "../packages");
const OUTPUT_PATH = path.resolve(__dirname, "../lib");

let dirs = fs.readdirSync(`${INPUT_PATH}/ui`).map((name) => {
  return {
    input: `${INPUT_PATH}/ui/${name}/index.ts`,
    external: ["vue"],
    plugins: [resolve({ extensions: [".vue"] }), vue(), esbuild(), commonjs()],
    output: {
      name: "index",
      file: `${OUTPUT_PATH}/${name}/index.js`,
      format: "es",
    },
  };
});

dirs.push({
  input: `${INPUT_PATH}/vitec/index.ts`,
  external: ["vue"],
  plugins: [resolve({ extensions: [".vue"] }), vue(), esbuild(), commonjs()],
  output: {
    name: "index",
    file: `${OUTPUT_PATH}/vitec/index.js`,
    format: "es",
  },
});

export default dirs;
