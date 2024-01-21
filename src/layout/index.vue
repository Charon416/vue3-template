<template>
  <div class="app-container">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
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
.app-container {
  display: flex;
  .sidebar-container {
    width: 210px;
    background-color: #304156;
  }
  .main-container {
    flex: 1;
    background-color: #f2f3f5;
  }
}
</style>