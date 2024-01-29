import { ref } from "vue";
import { defineStore } from "pinia";
import { store } from "@/store";
import { getToken, setToken } from '@/utils/local-storage'
import { postLogin, getMe } from '@/api/auth'
import { IPostLogin } from '@/api/auth/type.ts'

export const useUserStore = defineStore("user", () => {
  /* token */
  const token = ref<string>(getToken() || "" as string);
  const roles = ref<string[]>([]);
  const nickname = ref<string>("");
  // 登录逻辑
  const login = async (loginData: IPostLogin) => {
    const data = await postLogin(loginData);
    const { tokenType, accessToken } = data;
    if ( tokenType && accessToken) {
      setToken(tokenType + " " + accessToken);
      token.value = tokenType + " " + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
    }
  }
  // 获取用户信息
  const getUserInfo = async () => {
    const data = await getMe();
    nickname.value = data.nickname ?? '';
    roles.value = data.roles ?? [];
  }
  return {
    token,
    roles,
    nickname,
    login,
    getUserInfo
  }

});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}