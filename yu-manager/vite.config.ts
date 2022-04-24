import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/

export default ({ mode }) => {
  const envConfig = loadEnv(mode, './');

  let config = {
    plugins: [vue(), vueJSX()],
    resolve: {
      alias: {
        '@': resolve('src'),
      }
    },
    define: {
      'process.env': envConfig
    }
  }

  return defineConfig(config)
}