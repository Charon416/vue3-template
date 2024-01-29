<template>
  <el-icon v-if="icon && icon.includes('el-icon')" class="sub-el-icon" />
  <svg-icon v-else-if="icon" :name="icon" style="margin-right: 12px;" />
  <span v-if="title">{{ title }}</span>
</template>

<script setup lang="ts">

defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.sub-el-icon {
  width: 1em;
  height: 1em;
  color: currentcolor;
}
</style>
