<template>
  <div class="h-[50px] flex flex-justify-between">
    <!-- 左侧面包屑 -->
    <div class="flex">
      <div class="w-[46px] h-full flex-center" @click="app.toggleSidebar">
        <el-icon>
          <Fold v-if="app.isOpen" size="16"/>
          <Expand v-else size="16" />
        </el-icon>
      </div>
      <Breadcrumb />
    </div>

    <!-- 右侧导航设置 -->
    <div class="flex">
      <NavRight />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue';
import { useAppStore } from '@/store/modules/app';
import Breadcrumb from '../Breadcrumb/index.vue';
import NavRight from './NavRight.vue';

const app = useAppStore();
</script>

<style lang="scss" scoped>
</style>