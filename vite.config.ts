import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import myTest from "./plugins/myTest";
export default defineConfig({
  plugins: [vue(),
  vueJsx(),
  myTest(),
  ElementPlus({
    useSource: true
  }),
  AutoImport({
    resolvers: [ElementPlusResolver({ importStyle: "sass" })],
  }),
  Components({
    resolvers: [ElementPlusResolver({ importStyle: "sass" })],
  }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/global.scss" as *;`,
      }
    }
  }
})
