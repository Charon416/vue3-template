import { defineStore } from "pinia";
import { store } from "@/store";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  /* 侧边栏状态 */
  const sidebarStatus = ref(localStorage.getItem("sidebarStatus") || "opened");
  const isOpen = ref<boolean>(sidebarStatus.value !== "closed");
  const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
      localStorage.setItem("sidebarStatus", "opened");
      sidebarStatus.value = "opened";
    } else {
      localStorage.setItem("sidebarStatus", "closed");
      sidebarStatus.value = "closed";
    }
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
