import request from "@/utils/request";
import { IGetRoleList } from "./type.ts";

export function getRoleList(params: IGetRoleList) {
  return request({
    url: "/roles/page",
    method: "get",
    params,
  });
}
