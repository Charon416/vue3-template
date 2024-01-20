import { defineStore } from "pinia";

import { store } from "@/store";

export const useUserStore = defineStore("user", () => {
  const token = localStorage.getItem("accessToken");
  return {
    token
  };
});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}