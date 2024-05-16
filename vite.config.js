import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/lisrael1989/Mister-bitcoin",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //         @import "@/assets/styles/setup/_vars.scss";
  //         @import "@/assets/styles/setup/_functions.scss";
  //         @import "@/assets/styles/setup/_mixins.scss";
  //       `,
  //     },
  //   },
  // },
})
