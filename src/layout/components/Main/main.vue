<template>
  <section class="app-main">
    <router-view>
      <template #default="{ Component, route }">
        <transition name="fade-slide" mode="out-in">
          <!-- <keep-alive :include="tagsViewStore.cachedViews"> -->
          <component :is="Component" :key="route.fullPath" />
          <!-- </keep-alive> -->
        </transition>
      </template>
    </router-view>
  </section>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  width: 100%;

  /* 50= navbar  50  */
  height: calc(100% - 80px);
  overflow: hidden;
  background-color: var(--el-bg-color-page);
}
</style>
