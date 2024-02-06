import dotenv from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'

// 解析出.env中的配置进行process.env的node进程配置访问
dotenv.config()

export default defineConfig({
  base: './',
  // 代理
  server: {
    proxy: {
      '/sw-kap-html': {
        target: 'http://10.5.23.194:8188',
        changeOrigin: true
      }
    }
  },
  // 插件
  plugins: [
    // vue解析
    vue(),
    // 路径别名设置
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, './src') }
      ]
    })
  ],
  // Css相关
  css: {
    preprocessorOptions: {
      less: {
        // 配置全局less变量文件
        additionalData: `@import "${path.resolve(__dirname, 'src/style/global-var.less')}";`,
        javascriptEnabled: true,
      }
    }
  },
  // 构建
  build: {
    rollupOptions: {
      // CDN处理
      external: [
        'element-plus',
        'vue',
        'vue-router'
      ],
      // CDN处理
      output: {
        format: 'umd',
        globals: {
          'element-plus': 'ElementPlus',
          'vue': 'Vue',
          'vue-router': 'VueRouter'
        }
      }
    }
  },
  // 全局变量
  define: {
    // 全局变量，挂载到window上，使用时可以宏访问，在src/env.d.ts中可以定义ts类型注释
    __global_version: JSON.stringify('1.0.0.1'),
  },
  // Vite自动解析的Env前缀
  envPrefix: '__global_'
})
