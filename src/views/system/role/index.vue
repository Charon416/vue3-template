<template>
  <div class="system-role">
    <el-form :inline="true" :model="queryParams" class="demo-form-inline">
      <el-form-item label="关键词">
        <el-input v-model="queryParams.keywords" placeholder="角色名称" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="roleList">
      <el-table-column fixed prop="id" label="id" width="80" />
      <el-table-column prop="name" label="角色名称" />
      <el-table-column prop="code" label="角色编码" width="80" />
      <el-table-column prop="status" label="状态" width="80" />
      <!--        <el-table-column prop="address" label="地址" width="100" />-->
      <!--        <el-table-column prop="sort" label="排序" width="100" />-->
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button link type="primary" size="small">Detail</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";

import { getRoleList } from "@/api/system/role";
import { IGetRoleList, IResDataRolePage, IResRolePage } from "@/api/system/role/type.ts";

const queryParams = reactive<IGetRoleList>({
  pageNum: 1,
  pageSize: 10,
});
const total = ref(0);
const roleList = ref<IResRolePage[]>();
const handleQuery = () => {
  getRoleList(queryParams).then((res: IResDataRolePage) => {
    roleList.value = res.list;
    total.value = res.total as number;
  });
};
handleQuery();
</script>

<style lang="scss" scoped>
.system-role {
  font-size: 24px;
}

.el-table {
  text-align: center;
}
</style>
