import request from '@/utils/request'

export function getAuthCaptcha() {
  return request({
    url: `/auth/captcha`,
    method: 'get'
  })
}