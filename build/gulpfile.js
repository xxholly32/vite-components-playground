const { src, dest, series } = require("gulp");
const postcss = require("gulp-postcss");
const path = require("path");
const fs = require("fs")

const INPUT_PATH = path.resolve(__dirname, "../packages");
const OUTPUT_PATH = path.resolve(__dirname, "../lib");
const postcssConfig = {
  options: {
    config: {
      path: path.resolve(__dirname, "../postcss.config.js"),
    },
    extensions: [".css"],
    extract: true,
  },
};

function components() {
  const components = fs
    .readdirSync(`${INPUT_PATH}/ui`)
    .map((name) => `${INPUT_PATH}/ui/${name}/style/index.css`);
  return src(components)
    .pipe(postcss(postcssConfig))
    .pipe(dest(`${OUTPUT_PATH}/button/style`));
}

function vitec() {
  return src(`${INPUT_PATH}/vitec/style/index.css`)
    .pipe(postcss(postcssConfig))
    .pipe(dest(`${OUTPUT_PATH}/vitec/style`));
}

exports.default = series(components, vitec);
