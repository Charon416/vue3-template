import { defineStore } from "pinia";
import { store } from "@/store";

interface IAppState {
  isOpen: boolean; // 侧边栏打开关闭
}

export const useAppStore = defineStore('app', {
  state: (): IAppState => ({
    isOpen: false
  }),
  actions: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    }
  }
})
// 非setup
export function useAppStoreHook() {
  return useAppStore(store);
}