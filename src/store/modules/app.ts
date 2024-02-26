import { defineStore } from "pinia";
import { store } from "@/store";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  /* 侧边栏状态 */
  const isOpen = ref<boolean>(true);
  /* 侧边栏宽度 */
  /* 切换侧边栏状态 */
  const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
  };
  return {
    isOpen,
    toggleSidebar,
  };
});
// 非setup
export function useAppStoreHook() {
  return useAppStore(store);
}
