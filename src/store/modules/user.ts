import { defineStore } from "pinia";

import { store } from "@/store";
import { postLogin } from '@/api/auth'
import { IPostLogin } from '@/api/auth/type.ts'

interface UserState {
  token: string;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    token: localStorage.getItem("accessToken") || '', // token
  }),
  actions: {
    // 登录逻辑
    async login(loginData: IPostLogin) {
      const data = await postLogin(loginData);
      const { tokenType, accessToken } = data;
      if ( tokenType && accessToken) {
        this.token = tokenType + " " + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
        localStorage.setItem('token', tokenType + " " + accessToken);
      } else {
        return Promise.reject();
      }
      return {}
    }
  }

});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}