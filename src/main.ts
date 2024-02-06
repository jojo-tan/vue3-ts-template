import './style/global-int.less'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/main.ts'
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(router)
// ElementPlusLocaleZhCn已做CDN引入
app.use(ElementPlus, { locale: ElementPlusLocaleZhCn })
app.mount('#app')


// console.log(import.meta.env.__global_version)
// console.log(__global_version)

