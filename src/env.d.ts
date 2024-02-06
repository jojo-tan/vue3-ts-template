/// <reference types="vite/client" />

// 导入vue模块定义
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const vueComponent: DefineComponent<{}, {}, any>
  export default vueComponent;
}

// import.meta.env定义
interface ImportMetaEnv {
  readonly __global_version: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/** 全局变量定义 */
declare const __global_version: string // 全局版本
// CDN相关
declare const ElementPlusLocaleZhCn: undefined // element中文包


