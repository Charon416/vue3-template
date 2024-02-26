import router from "@/router";
import { useUserStore } from "@/store/modules/user";
import { usePermissionStore } from "@/store/modules/permission";
import { getToken, removeToken } from "@/utils/local-storage";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false }); // 进度条

// 白名单路由
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  const token = getToken();
  // 判断用户是否登录
  if (!token) {
    // 未登录可以访问白名单页面
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login`);
      NProgress.done();
    }
    return;
  }
  // 如果已经登录，并准备进入Login页面，重定向到主页
  if (to.path === "/login") {
    NProgress.done();
    return next({ path: "/" });
  }
  // 如果用户已经获得权限角色
  if (userStore.roles.length !== 0) return next();
  //否则重新获取权限角色
  try {
    await userStore.getUserInfo();
    const roles = userStore.roles;
    // 根据角色生成可访问的 Routes（可访问路由 = 常驻路由 + 有访问权限的动态路由）
    const accessRoutes = await permissionStore.generateRoutes(roles);
    accessRoutes.forEach((route) => {
      router.addRoute(route);
    });
    console.log("最终的路由", permissionStore.routes);
    // 设置 replace: true, 因此导航将不会留下历史记录
    next({ ...to, replace: true });
  } catch (error) {
    // 移除 token 并跳转登录页
    removeToken();
    next(`/login`);
    NProgress.done();
  }
});

router.afterEach(() => {
  NProgress.done();
});
