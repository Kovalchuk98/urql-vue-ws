import { fileURLToPath, URL } from 'node:url'

import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";
import fs from "fs";

export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      template: "treemap",
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html",
    }) as PluginOption,
  ],
  server: {
    https: {
      key:  fs.readFileSync("panel.bubble.chat-key.pem"),
      cert: fs.readFileSync("panel.bubble.chat.pem"),
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
