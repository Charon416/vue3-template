<template>
  <div class="login">
    <el-form
    label-position="right"
    label-width="100px"
    :model="loginForm"
    style="max-width: 460px"
  >
    <el-form-item label="Name">
      <el-input v-model="loginForm.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-input v-model="loginForm.region" />
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="loginForm.type" />
    </el-form-item>
  </el-form>
  </div>
</template>
<script setup lang="ts">
  import {reactive } from 'vue';
  const loginForm = reactive({
    name: '',
    region: '',
    type: ''
  })
</script>

<style lang="scss" scoped>

</style>