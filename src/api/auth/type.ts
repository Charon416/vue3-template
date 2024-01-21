export interface IResGetAuthCaptcha {
  code?: string;
  data?: { [key: string]: any };
  msg?: string;
  [property: string]: any;
}

export interface IPostLogin {
  username: string; // 用户名
  password: string; // 密码
  captchaKey: string; // 验证码key
  captchaCode: string; // 验证码value
}
export interface IResPostLoginResult {
  accessToken?: string; // 访问token
  expires?: number | null; // 过期时间(单位：毫秒)
  refreshToken?: null | string; // 刷新token
  tokenType?: string; // token 类型
}