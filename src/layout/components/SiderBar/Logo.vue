<template>
  <transition name="sidebarLogoFade">
    <router-link
      v-if="!app.isOpen"
      key="collapse"
      class="w-full h-[50px] flex-center"
      to="/"
    >
      <div class="w-[20px]">
        <svg-icon name="vite" size="20" />
      </div>
    </router-link>
    <router-link
      v-else
      key="expand"
      class="w-full h-[50px] flex-center"
      to="/"
    >
      <div class="w-[20px]">
        <svg-icon name="vite" size="20" />
      </div>
      <div class="pl-[12px] text-white decoration-none">
        vue3-template
      </div>
    </router-link>
  </transition>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/modules/app';

const app = useAppStore();
</script>

<style lang="scss" scoped>
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