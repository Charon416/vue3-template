<template>
  <div class="menu-wrap">
    <el-menu
      default-active="2"
      mode="vertical"
      background-color="#304156"
      text-color="#ffffff"
      active-text-color="#409eff"
      :unique-opened="false"
      :collapse-transition="true"
      class="slider-menu"
      :collapse="app.isOpen"
    >
      <Logo />
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
      <!-- <menu-item
        v-for="route in user.routes"
        :key="route.path"
        :item="route"
      /> -->
  </el-menu>
  </div>
</template>
<script setup lang="ts">
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
// import MenuItem from './MenuItem.vue'
import { useAppStore } from '@/store/modules/app';
// import { useUserStore } from '@/store/modules/user';
// import { isExternal } from "@/utils/index";
import Logo from './Logo.vue'
const app = useAppStore();
// const user = useUserStore();

</script>

<style lang="scss" scoped>
.slider-menu {
  height: 100%;
}
</style>