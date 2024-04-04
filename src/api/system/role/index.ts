import request from "@/utils/request";
import { IGetRoleList, IPutRoles } from "./type.ts";

export function getRoleList(params: IGetRoleList) {
  return request({
    url: "/roles/page",
    method: "get",
    params,
  });
}

export function getRoleFormById(roleId: number) {
  return request({
    url: `/roles/${roleId}/form`,
    method: "get",
  });
}

export function putRoles(id: number, data: IPutRoles) {
  return request({
    url: `/roles/${id}`,
    method: "put",
    data,
  });
}

/**
 * @params ids // 删除角色，多个以英文逗号(,)分割
 * */
export function deleteRoles(ids: string) {
  return request({
    url: `/roles/${ids}`,
    method: "delete",
  });
}
