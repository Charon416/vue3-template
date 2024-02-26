<!-- https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md -->
<!-- 参考上方链接 -->
<template>
  <svg v-bind="$attrs" class="svg-icon" :style="getStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script setup lang="ts">
import { computed, type CSSProperties } from "vue";
defineOptions({
  name: "svg-icon",
});

const props = defineProps({
  prefix: {
    type: String,
    default: "svg-icon",
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 16,
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const getStyle = computed((): CSSProperties => {
  const { size } = props;
  const s = `${size}`.replace("px", "").concat("px");
  return {
    width: s,
    height: s,
  };
});
</script>

<style lang="scss" scoped>
.svg-icon {
  /* 通过设置 font-size 来改变图标大小 */
  width: 1em;
  /* 图标和文字相邻时，垂直对齐 */
  vertical-align: -0.15em;
  /* 通过设置 color 来改变 SVG 的颜色/fill */
  fill: currentColor;
  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
      normalize.css 中也包含这行 */
  overflow: hidden;
}
</style>
