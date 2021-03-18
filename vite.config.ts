import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const root = resolve(__dirname, 'src/render')
const outDir = resolve(__dirname, 'dist/render')
console.log(root);
// https://vitejs.dev/config/
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true
  },
  plugins: [vue()]
})
