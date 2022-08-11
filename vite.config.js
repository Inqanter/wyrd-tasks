import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    outDir: "public",
    manifest: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/css/variables/sizes.scss";
        @import "@/assets/css/variables/animations.scss";
        @import "@/assets/css/variables/fonts.scss";
        @import "@/assets/css/variables/colors.scss";
        `
      }
    }
  }
});
