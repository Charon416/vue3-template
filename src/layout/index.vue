<template>
  <div class="layout" :class="classObj">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <NavBar />
      <TagsView />
      <Main />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import Sidebar from "./components/SiderBar/index.vue";
import NavBar from "./components/NavBar/index.vue";
import TagsView from "./components/TagsView/index.vue";
import Main from "./components/Main/main.vue";
import { useAppStore } from "@/store/modules/app";

const appStore = useAppStore();
const classObj = computed(() => ({
  hideSidebar: !appStore.isOpen,
  openSidebar: appStore.isOpen,
  "layout-left": true,
}));
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
}

.sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: $sidebar-width;
  height: 100%;
  overflow: hidden;
  background-color: $menu-background;
  transition: width 0.28s;

  :deep(.el-menu) {
    border: none;
  }
}

.main-container {
  position: relative;
  min-height: 100%;
  margin-left: $sidebar-width;
  transition: margin-left 0.28s;
}

.layout-left.hideSidebar {
  .sidebar-container {
    width: $sidebar-width-collapsed !important;
  }

  .main-container {
    margin-left: $sidebar-width-collapsed;
  }
}
</style>
