module.exports = {
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: [
        "Avenir",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Ubuntu",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    }
  },
  plugins: [require("@tailwindcss/typography")],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      "hooper/dist/hooper.css",
      "vue-cool-lightbox/dist/vue-cool-lightbox.min.css"
    ]
  }
};
