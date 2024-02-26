<!-- setup 无法设置组件名称，组件名称keepAlive必须 -->
<script lang="ts">
export default {
  name: "Page404",
};
</script>

<script setup lang="ts">
function message() {
  return "The webmaster said that you can not enter this page...";
}
</script>

<template>
  <div class="app-container">
    <div class="bullshit">
      <div class="bullshit__oops">OOPS!</div>
      <div class="bullshit__info">
        All rights reserved
        <a style="color: #20a0ff" href="https://wallstreetcn.com" target="_blank">wallstreetcn</a>
      </div>
      <div class="bullshit__headline">{{ message() }}</div>
      <div class="bullshit__info">
        Please check that the URL you entered is correct, or click the button below to return to the homepage.
      </div>
      <el-button type="primary">
        <a href="" class="bullshit__return-home">Back to home</a>
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  margin: auto;
}
</style>
