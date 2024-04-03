<template>
  <el-menu
    :default-active="currRoute.path"
    mode="vertical"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409eff"
    :unique-opened="false"
    :collapse-transition="false"
    class="slider-menu"
    :collapse="!app.isOpen"
  >
    <Logo />
    <div class="menu-item">
      <menu-item
        v-for="route in permission.routes"
        :key="route.path"
        :base-path="resolvePath(route.path)"
        :item="route"
      />
    </div>
  </el-menu>
</template>
<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import { useRoute } from "vue-router";
import { useAppStore } from "@/store/modules/app";
import { usePermissionStore } from "@/store/modules/permission";
import { isExternal } from "@/utils";
import path from "path-browserify";
import Logo from "./Logo.vue";

const currRoute = useRoute();
const app = useAppStore();
const permission = usePermissionStore();

const props = defineProps({
  basePath: {
    type: String,
    required: false,
    default: "",
  },
});

/**
 * 解析路径
 *
 * @param routePath 路由路径
 */
function resolvePath(routePath: string) {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }

  // 完整路径 = 父级路径(/level/level_3) + 路由路径
  return path.resolve(props.basePath, routePath); // 相对路径 → 绝对路径
}
</script>

<style lang="scss" scoped>
/* 隐藏文字 */
.el-menu--collapse :deep(span) {
  display: none;
}

/* 隐藏 > */
.el-menu--collapse :deep(.el-sub-menu__icon-arrow) {
  display: none;
}

.menu-item {
  height: calc(100% - 50px);
  overflow: auto;
}

/* 自定义滚动条样式 */
.menu-item::-webkit-scrollbar {
  width: 4px;
}

.menu-item::-webkit-scrollbar-thumb {
  background-color: #304156;
  border-radius: 2px;
}

.menu-item::-webkit-scrollbar-track {
  background-color: #304156;
}
</style>
