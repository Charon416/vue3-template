<script setup lang="ts">
import { getAuthCaptcha } from './api/auth'
const getDataList = async () => {
  const data = await getAuthCaptcha()
  console.log(data)
}
</script>

<template>
  <div>首页</div>
  <el-button type="primary" @click="getDataList">查询数据</el-button>
</template>

<style scoped>
</style>
./api/auth