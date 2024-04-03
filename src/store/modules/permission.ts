import { defineStore } from "pinia";
import { store } from "@/store";
import { ref } from "vue";
import { type RouteRecordRaw } from "vue-router";
import { getRoutes } from "@/api/menu";
import { constantRoutes } from "@/router";
const Layout = () => import("@/layout/index.vue");
const modules = import.meta.glob("../../views/**/**.vue");

/**
 * Use meta.role to determine if the current user has permission
 *
 * @param roles 用户角色集合
 * @param route 路由
 * @returns
 */
const hasPermission = (roles: string[], route: any) => {
  if (route.meta && route.meta.roles) {
    // 角色【超级管理员】拥有所有权限，忽略校验
    if (roles.includes("ROOT")) {
      return true;
    }
    const routeRoles = route.meta?.roles;
    return routeRoles ? roles.some((role) => routeRoles.includes(role)) : true;
  }
  return false;
};

/**
 * 递归过滤有权限的异步(动态)路由
 *
 * @param routes 接口返回的异步(动态)路由
 * @param roles 用户角色集合
 * @returns 返回用户有权限的异步(动态)路由
 */
const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const asyncRoutes: RouteRecordRaw[] = [];

  routes.forEach((route) => {
    const tmpRoute = { ...route }; // ES6扩展运算符复制新对象
    if (!route.name) {
      tmpRoute.name = route.path;
    }
    // 判断用户(角色)是否有该路由的访问权限
    if (hasPermission(roles, tmpRoute)) {
      if (tmpRoute.component?.toString() == "Layout") {
        tmpRoute.component = Layout;
      } else {
        const component = modules[`../../views/${tmpRoute.component}.vue`];
        if (component) {
          tmpRoute.component = component;
        } else {
          tmpRoute.component = modules["../../views/error-page/404.vue"];
        }
      }

      if (tmpRoute.children) {
        tmpRoute.children = filterAsyncRoutes(tmpRoute.children, roles);
      }

      asyncRoutes.push(tmpRoute);
    }
  });

  return asyncRoutes;
};

export const usePermissionStore = defineStore("permission", () => {
  const routes = ref<RouteRecordRaw[]>([]);
  // 生成动态路由
  const generateRoutes = async (roles: string[]) => {
    // 接口获取所有路由
    const asyncRoutes: any = await getRoutes();
    const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
    // 拼接本地路由和过滤后的路由
    routes.value = constantRoutes.concat(accessedRoutes);
    return accessedRoutes;
  };

  return {
    routes,
    generateRoutes,
  };
});
// 非setup
export function usePermissionStoreHook() {
  return usePermissionStore(store);
}
