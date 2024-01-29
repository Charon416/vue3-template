<template>
  <div class="logo">
    <div class="logo-icon">
      <svg-icon name="vite" size="20" />
    </div>
    <div class="logo-title" v-if="!app.isOpen">
      vue3-template
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/modules/app';

const app = useAppStore();
</script>

<style lang="scss" scoped>
.logo {
  height: 50px;
  background-color: #1f2937;
  color: #ffffff;
  padding: 0 20px;
  display: flex;
  .logo-icon {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 12px;
  }
}
</style>