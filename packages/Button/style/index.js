// tailwind.config.js
const plugin = require("tailwindcss/plugin");

// https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js
module.exports = plugin(function ({ addComponents, config }) {
  const buttons = {
    ".btn": {
      borderWidth: config("theme.borderWidth.default"),
      paddingBottom: config("theme.padding.2"),
      paddingTop: config("theme.padding.2"),
      paddingRight: config("theme.padding.4"),
      paddingLeft: config("theme.padding.4"),
      borderRadius: config("theme.borderRadius.default"),
    },
    ".btn + .btn": {
      marginLeft: "10px",
    },
    ".btn-primary": {
      backgroundColor: config("theme.colors.blue.500"),
      borderColor: config("theme.colors.blue.500"),
      color: config("theme.colors.white"),
    },
    ".btn-primary:hover": {
      backgroundColor: config("theme.colors.blue.700"),
      borderColor: config("theme.colors.blue.700"),
    },
    ".btn-success": {
      backgroundColor: config("theme.colors.green.400"),
      borderColor: config("theme.colors.green.400"),
      color: config("theme.colors.white"),
    },
    ".btn-success:hover": {
      backgroundColor: config("theme.colors.green.500"),
      borderColor: config("theme.colors.green.500"),
    },

    ".btn-info": {
      backgroundColor: config("theme.colors.gray.400"),
      borderColor: config("theme.colors.gray.400"),
      color: config("theme.colors.white"),
    },
    ".btn-info:hover": {
      backgroundColor: config("theme.colors.gray.500"),
      borderColor: config("theme.colors.gray.500"),
    },

    ".btn-warning": {
      backgroundColor: config("theme.colors.yellow.400"),
      borderColor: config("theme.colors.yellow.400"),
      color: config("theme.colors.white"),
    },
    ".btn-warning:hover": {
      backgroundColor: config("theme.colors.yellow.500"),
      borderColor: config("theme.colors.yellow.500"),
    },

    ".btn-danger": {
      backgroundColor: config("theme.colors.red.400"),
      borderColor: config("theme.colors.red.400"),
      color: config("theme.colors.white"),
    },
    ".btn-danger:hover": {
      backgroundColor: config("theme.colors.red.500"),
      borderColor: config("theme.colors.red.500"),
    },
  };

  addComponents(buttons);
});
