<template>
  <div class="menu-item">
    <h2>{{ props.item }}</h2>
  </div>
</template>
<script setup lang="ts">
// 传进来数据
import { useUserStore } from '@/store/modules/user';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
});
const user = useUserStore();
console.log('侧边脸页面获取的路由数据', user.routes)
</script>

<style lang="scss" scoped>

</style>