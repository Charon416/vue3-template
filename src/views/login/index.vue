<template>
  <el-card class="w-480">
    <el-form label-position="right" label-width="100px" :model="loginData" style="max-width: 460px">
      <el-form-item label="用户名">
        <el-input v-model="loginData.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginData.password" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="loginData.captchaCode" />
        <el-image @click="getCaptcha" class="w-[120px] h-[48px] cursor-pointer" :src="captchaBase64Image" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import router from "@/router";
import { getAuthCaptcha } from "@/api/auth";
import { useUserStore } from "@/store/modules/user";

let captchaBase64Image = ref(); // 验证码图片Base64字符串
const loginData = reactive({
  username: "admin",
  password: "123456",
  captchaKey: "",
  captchaCode: "",
});
// 获取验证码
const getCaptcha = async () => {
  const { captchaKey, captchaBase64 } = await getAuthCaptcha();
  loginData.captchaKey = captchaKey;
  captchaBase64Image.value = captchaBase64;
  console.log(captchaBase64);
};
onMounted(() => {
  getCaptcha();
});
// 点击登录
const auth = useUserStore();
const handleLogin = async () => {
  auth
    .login(loginData)
    .then(() => {
      router.push({ path: "/" });
    })
    .catch(() => {
      getCaptcha();
    });
};
</script>

<style lang="scss" scoped></style>
