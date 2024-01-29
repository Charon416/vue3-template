<template>
  <div class="nva-bar">
    <div class="nav-toggle" @click="app.toggleSidebar">
      <el-icon>
        <Fold v-if="app.isOpen" size="16"/>
        <Expand v-else size="16" />
      </el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue';
import { useAppStore } from '@/store/modules/app';

const app = useAppStore();
</script>

<style lang="scss" scoped>
.nva-bar {
  height: 50px;
}
.nav-toggle {
  width: 46px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
}
</style>