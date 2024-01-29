<template>
  <div class="flex logo h-[50px] bg-#1f2937">
    <transition name="sidebarLogoFade">
      <router-link
      v-if="!app.isOpen"
      key="collapse"
      class="flex items-center justify-center w-full h-full"
      to="/"
    >
      <div class="logo-icon">
        <svg-icon name="vite" size="20" />
      </div>
    </router-link>
    <router-link
      v-else
      key="expand"
      class="flex items-center justify-center w-full h-full"
      to="/"
    >
      <div class="w-[20px]">
        <svg-icon name="vite" size="20" />
      </div>
      <div class="pl-[12px]">
        vue3-template
      </div>
    </router-link>
    </transition>


  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/modules/app';

const app = useAppStore();
</script>

<style lang="scss" scoped>
.logo {
  background-color: #1f2937;
  color: #ffffff;
  padding: 0 20px;
}
// https://cn.vuejs.org/guide/built-ins/transition.html#the-transition-component
.sidebarLogoFade-enter-active {
  transition: opacity 2s;
}

.sidebarLogoFade-leave-active,
.sidebarLogoFade-enter-from,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
</style>