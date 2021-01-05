const { src, dest, series } = require("gulp");
const postcss = require("gulp-postcss");
const path = require("path");

const UI_PATH = path.resolve(__dirname, "../packages");
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
  return src(`${UI_PATH}/ui/button/style/index.css`)
    .pipe(postcss(postcssConfig))
    .pipe(dest(`${UI_PATH}/ui/button/lib`));
}

function vitec() {
  return src(`${UI_PATH}/vitec/style/index.css`)
    .pipe(postcss(postcssConfig))
    .pipe(dest(`${UI_PATH}/vitec/lib`));
}

exports.default = series(components, vitec);
