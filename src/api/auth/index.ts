import request from '@/utils/request'
import { IResGetAuthCaptcha, IPostLogin, IResPostLoginResult } from './type.ts'

// 获取登录验证码
export function getAuthCaptcha(): Promise<IResGetAuthCaptcha> {
  return request({
    url: `/auth/captcha`,
    method: 'get'
  })
}
// 用户登录接口
export function postLogin(data: IPostLogin): Promise<IResPostLoginResult> {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("password", data.password);
  formData.append("captchaKey", data.captchaKey || "");
  formData.append("captchaCode", data.captchaCode || "");
  return request({
    url: '/auth/login',
    method: 'post',
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}