<template>
  <div class="main">
    <router-view>
      <template #default="{ Component, route }">
        <transition name="fade-slide" mode="out-in">
          <!-- <keep-alive :include="tagsViewStore.cachedViews"> -->
            <component :is="Component" :key="route.fullPath" />
          <!-- </keep-alive> -->
        </transition>
      </template>
    </router-view>
  </div>
</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>