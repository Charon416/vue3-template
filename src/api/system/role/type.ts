export interface IGetRoleList {
  keywords?: string; // 关键字(角色名称/角色编码)
  pageNum?: number;
  pageSize?: number;
}

/**
 * 角色分页列表结果
 */
export interface IResDataRolePage {
  list?: IResRolePage[];
  total?: number;

  [property: string]: any;
}

/**
 * IResRolePage，角色分页对象
 */
export interface IResRolePage {
  code?: string; // 角色编码
  createTime?: Date;
  id?: number; // 角色ID
  name?: string; //角色名称
  sort?: number; // 排序
  status?: number; // 角色状态
  updateTime?: Date;
}
