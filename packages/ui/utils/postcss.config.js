const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    // PostCSS plugin to unwrap nested rules like how Sass does it.
    require("postcss-nested"),

    ...(isProduction
      ? [
          require("@fullhuman/postcss-purgecss")({
            // Specify the paths to all of the template files in your project
            content: ["./packages/**/*.vue", "./packages/**/*.css"],

            // Include any special characters you're using in this regular expression
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
