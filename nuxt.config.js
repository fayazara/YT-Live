import { headConfig, pwaConfig, firebaseConfig } from "./constants";

export default {
  target: "static",
  head: headConfig,
  pwa: pwaConfig,
  css: ["~/assets/styles.css"],
  plugins: [{ src: "~/plugins/plyr", mode: "client" }, "~/plugins/flags"],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    jit: true
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxt/content",
    "@nuxtjs/firebase",
    "@nuxtjs/toast",
    "nuxt-lazy-load"
  ],
  toast: {
    position: "bottom-center",
    duration: 5000
  },
  firebase: firebaseConfig,
  axios: {
    baseURL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  content: {},
  build: {}
};
