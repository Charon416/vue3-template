<template>
  <!-- 用户头像 -->
  <el-dropdown trigger="click">
    <div class="avatar-container">
      <img :src="userStore.avatar + '?imageView2/1/w/80/h/80'" />
      <el-icon class="w-[5px]"><CaretBottom /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>
        <!-- <a
          target="_blank"
          href="https://github.com/youlaitech/vue3-element-admin"
        >
          <el-dropdown-item>Github</el-dropdown-item>
        </a> -->
        <!-- <a target="_blank" href="https://juejin.cn/post/7228990409909108793">
          <el-dropdown-item>{{ $t("navbar.document") }}</el-dropdown-item>
        </a> -->
        <el-dropdown-item divided @click="logout"> 注销 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";
import { removeToken } from "@/utils/local-storage";
import { CaretBottom } from "@element-plus/icons-vue";

const userStore = useUserStore();

const route = useRoute();
const router = useRouter();

/**
 * 注销
 */
const logout = () => {
  removeToken();
  router.push(`/login?redirect=${route.fullPath}`);
};
</script>
<style lang="scss" scoped>
.setting-container {
  display: flex;
  align-items: center;

  .setting-item {
    display: inline-block;
    width: 30px;
    height: 50px;
    line-height: 50px;
    color: var(--el-text-color-regular);
    text-align: center;
    cursor: pointer;

    &:hover {
      background: var(--el-disabled-bg-color);
    }
  }
}

.avatar-container {
  display: flex;
  place-items: center center;
  margin: 0 5px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>
