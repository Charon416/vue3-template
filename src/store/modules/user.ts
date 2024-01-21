import { defineStore } from "pinia";
import { store } from "@/store";
import { postLogin, getMe } from '@/api/auth'
import { getRoutes } from '@/api/menu'
import { IPostLogin, IResGetMe } from '@/api/auth/type.ts'
import { filterAsyncRoutes } from "@/router/helper";
import { RouteRecordRaw } from "vue-router";
import { constantRoutes } from "@/router";

interface UserState {
  token: string;
  userInfo: IResGetMe;
  routes: any;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    token: localStorage.getItem("TOKEN") || '', // token
    userInfo: localStorage.getItem('USER_INFO') ? JSON.parse(localStorage.getItem('USER_INFO')) : {} as IResGetMe,
    routes: []
  }),
  actions: {
    // 登录逻辑
    async login(loginData: IPostLogin) {
      const data = await postLogin(loginData);
      const { tokenType, accessToken } = data;
      if ( tokenType && accessToken) {
        this.token = tokenType + " " + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
        localStorage.setItem('TOKEN', tokenType + " " + accessToken);
        this.getUserInfo();
      } else {
        return Promise.reject();
      }
      return {}
    },
    // 获取用户信息
    async getUserInfo() {
      const data = await getMe();
      this.userInfo.avatar = data.avatar;
      this.userInfo.nickname = data.nickname;
      this.userInfo.perms = data.perms;
      this.userInfo.roles = data.roles;
      this.userInfo.userId = data.userId;
      localStorage.setItem('USER_INFO', JSON.stringify(data))
      return data;
    },
    // remove token
    resetToken() {
      this.token = "";
    },
    // 设置路由
    setRoutes(newRoutes: RouteRecordRaw[]) {
      this.routes = constantRoutes.concat(newRoutes);
    },
    // 生成动态路由
    async generateRoutes(roles: string[]) {
      // 接口获取所有路由
      const data: any  = await getRoutes();
      const accessedRoutes = filterAsyncRoutes(data, roles);
      this.routes = constantRoutes.concat(accessedRoutes);
      return (accessedRoutes);
    }
  }

});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}