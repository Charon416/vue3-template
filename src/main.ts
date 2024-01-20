import { createApp } from 'vue'
import './assets/css/index.css'
import App from './App.vue'

import { setupAssets, setupCustomComponents } from '@/plugins';

const app = createApp(App)

function setupPlugins() {
  // 引入所有样式
  setupAssets()
  // 注册全局自定义组件
  setupCustomComponents(app)
}
// 执行初始化操作
setupPlugins();
// 挂载
app.mount('#app')
