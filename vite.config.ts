import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueDevTools from 'vite-plugin-vue-devtools'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    UnoCSS(),
    // 自动导入
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router'],
      eslintrc: {
        enabled: true
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
