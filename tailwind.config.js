module.exports = {
  purge: false,
  darkMode: "class",
  typography: (theme) => ({
    dark: {
      css: {
        color: theme("colors.gray.100"),
        a: {
          color: theme("colors.blue.100"),
          "&:hover": {
            color: theme("colors.blue.100"),
          },
        },
      },
    },
  }),
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: [],
    }),
  ],
};
