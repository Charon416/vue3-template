import request from '@/utils/request'
import { IRoute } from './type'

// 获取路由列表
export function getRoutes(): Promise<IRoute[]> {
  return request({
    url: "/menus/routes",
    method: "get"
  });
}
