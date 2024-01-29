<template>
  <div class="layout">
    <Sidebar :class="[app.isOpen ? 'sider-bar' : 'sider-bar-fold']" />
    <div class="main-layout">
      <NavBar />
      <TagsView />
      <Main />
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from "./components/SiderBar/index.vue";
import NavBar from './components/NavBar/index.vue';
import TagsView from './components/TagsView/index.vue';
import Main from './components/Main/main.vue'
import { useAppStore } from '@/store/modules/app';

const app = useAppStore();
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  .sider-bar {
    width: 210px;
  }
  .fold-sider-bar {
    width: 54px;
  }
  .main-layout {
    flex: 1;
    background-color: #f2f3f5;
  }
}
</style>