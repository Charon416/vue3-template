<template>
  <div class="layout">
    <Sidebar class="sidebar-layout" />
    <div class="main-layout">
      <NavBar />
      <TagsView />
      <Main />
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from "./components/SlideBar/index.vue";
import NavBar from './components/NavBar/index.vue';
import TagsView from './components/TagsView/index.vue';
import Main from './components/Main/main.vue'
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  .main-layout {
    flex: 1;
    background-color: #f2f3f5;
  }
}
</style>