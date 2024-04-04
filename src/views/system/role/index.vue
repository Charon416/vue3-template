<template>
  <div class="system-role">
    <el-form :inline="true" :model="queryParams" ref="queryParamsRef" class="demo-form-inline">
      <el-form-item label="关键词">
        <el-input v-model="queryParams.keywords" placeholder="角色名称" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="Search" @click="handleQuery">搜索</el-button>
        <el-button :icon="Refresh" @click="handleRefresh">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="roleList">
      <el-table-column fixed prop="id" label="id" width="100" />
      <el-table-column prop="name" label="角色名称" />
      <el-table-column prop="code" label="角色编码" />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag v-if="scope.row.status === 1" type="success" disable-transitions>正常</el-tag>
          <el-tag v-else type="success" disable-transitions>停用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button link type="primary" :icon="Edit" size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button link type="primary" :icon="Delete" size="small" @click="handleDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="queryParams.pageNum"
      v-model:page-size="queryParams.pageSize"
      :page-sizes="[5, 10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-dialog v-model="editDialog" title="修改" width="500">
      <el-form :model="editForm" :rules="rules" ref="editFormRef">
        <el-form-item label="角色名称" label-width="100" prop="name">
          <el-input placeholder="请输入角色名称" v-model="editForm.name" />
        </el-form-item>
        <el-form-item label="角色编码" label-width="100" prop="code">
          <el-input placeholder="请输入角色编码" v-model="editForm.code" />
        </el-form-item>
        <el-form-item label="数据权限" label-width="100" prop="dataScope">
          <el-select v-model="editForm.dataScope" placeholder="请选择">
            <el-option :key="0" label="全部数据" :value="0" />
            <el-option :key="1" label="部门及子部门数据" :value="1" />
            <el-option :key="2" label="本部门数据" :value="2" />
            <el-option :key="3" label="本人数据" :value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态" label-width="100" prop="status">
          <el-radio-group v-model="editForm.status" class="ml-4">
            <el-radio :label="1" size="large">正常</el-radio>
            <el-radio :label="0" size="large">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="editDialog = false">Cancel</el-button>
          <el-button type="primary" @click="handleSubmit"> Confirm</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { Search, Refresh, Edit, Delete } from "@element-plus/icons-vue";
import { getRoleList, deleteRoles, getRoleFormById, putRoles } from "@/api/system/role";
import { IGetRoleList, IResDataRolePage, IResRolePage, IPutRoles } from "@/api/system/role/type.ts";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessageBox, ElMessage } from "element-plus";

const queryParamsRef = ref<FormInstance>();
const queryParams = reactive<IGetRoleList>({
  pageNum: 1,
  pageSize: 10,
});
const total = ref(0);
const roleList = ref<IResRolePage[]>();

const editDialog = ref(false);
const editForm = reactive<IPutRoles>({
  name: "",
  code: "",
  status: 0,
});
const editFormRef = ref<FormInstance>();
const rules = reactive<FormRules<IPutRoles>>({
  name: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
  code: [{ required: true, message: "请输入角色编码", trigger: "blur" }],
  dataScope: [{ required: true, message: "请选择数据权限", trigger: "blur" }],
  status: [{ required: true, message: "请选择状态", trigger: "blur" }],
});
const handleQuery = () => {
  getRoleList(queryParams).then((res: IResDataRolePage) => {
    roleList.value = res.list;
    total.value = res.total as number;
  });
};
const handleSizeChange = (val: number) => {
  queryParams.pageSize = val;
  handleQuery();
};
const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val;
  handleQuery();
};
const handleRefresh = () => {
  queryParamsRef.value?.resetFields();
  queryParams.pageNum = 1;
  handleQuery();
};
const handleEdit = (id: number) => {
  editDialog.value = true;
  getRoleFormById(id).then((res) => {
    Object.assign(editForm, res);
  });
};
const handleSubmit = () => {
  editFormRef.value?.validate((valid) => {
    if (valid && editForm.id) {
      const roleId = editForm.id;
      putRoles(roleId, editForm).then((res) => {
        console.log(res);
      });
    }
  });
};
const handleDel = (id: number) => {
  const ids = id + "";
  ElMessageBox.confirm("确认删除该条数据项?", "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    deleteRoles(ids).then(() => {
      ElMessage.success("删除成功");
    });
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
