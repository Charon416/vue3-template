export interface IGetMenus {
  keywords?: string; // 关键字(菜单名称)
  status?: string; // 状态(1->显示；0->隐藏)
}

export interface IResGetMenus {
  children?: IResGetMenus[]; // 子菜单
  component?: string; // 组件路径
  icon?: string; // ICON
  id?: number; // 菜单ID
  name?: string; // 菜单名称
  parentId?: number; // 父菜单ID
  perm?: string; // 按钮权限标识
  redirect?: string; // 跳转路径
  routeName?: string; // 路由名称
  routePath?: string; // 路由相对路径
  sort?: number; // 菜单排序(数字越小排名越靠前)
  type?: Type; // 菜单类型
  visible?: number; // 菜单是否可见(1:显示;0:隐藏)
}

/**
* 菜单类型
*/
export enum Type {
  Button = "BUTTON",
  Catalog = "CATALOG",
  Extlink = "EXTLINK",
  Menu = "MENU",
  Null = "NULL",
}

export interface IRoute {
  children?: IRoute[]; // 子路由列表
  component?: string; // 组件路径
  meta?: IMeta;
  name?: string; // 路由名称
  path?: string; // 路由路径
  redirect?: string; // 跳转链接
  [property: string]: any;
}

/**
* Meta，路由属性类型
*/
export interface IMeta {
  hidden?: boolean; // 是否隐藏
  icon?: string; // ICON
  keepAlive?: boolean; // 是否开启缓存
  roles?: string[]; // 拥有路由权限的角色编码
  title?: string; // 路由title
  [property: string]: any;
}