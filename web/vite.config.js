import vue from '@vitejs/plugin-vue'
import path from 'path'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  // alias: [
  //   {find: "@", replacement: path.resolve(__dirname, 'src')}
  // ],
}
