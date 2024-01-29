<script lang="ts" setup>
import { isExternal } from "@/utils/index";

defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
    <slot />
  </a>
  <router-link v-else :to="to">
    <slot />
  </router-link>
</template>