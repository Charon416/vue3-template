import { createApp } from "vue";
import App from "./App.vue";

import { setupAssets, setupCustomComponents } from "@/plugins";
import { setupStore } from "./store";
import router from "./router";
import "@/permission";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

function setupPlugins() {
  // 引入所有样式
  setupAssets();
  // 注册全局自定义组件
  const app = createApp(App);
  setupCustomComponents(app);

  // 挂载pinia
  setupStore(app);
  // 挂载路由
  app.use(router);
  // 挂载
  app.mount("#app");
  app.use(ElementPlus, {
    locale: zhCn,
  });
}

// 执行初始化操作
setupPlugins();
