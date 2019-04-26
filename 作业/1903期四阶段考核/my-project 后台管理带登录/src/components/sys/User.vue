<template>
  <el-row class="user-list">
    <div class="search">
      <el-input
        style="width:200px;margin-right:10px"
        prefix-icon="el-icon-search"
        placeholder="请输入内容"
      ></el-input>
      <el-button type="success" plain>搜索</el-button>
    </div>
    <el-table :default-sort="{prop: 'userId', order: 'asc'}" :data="data">
      <el-table-column sortable type="selection" prop="userId" label="ID"></el-table-column>
      <el-table-column prop="username" label="用户用"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="手机"></el-table-column>
      <el-table-column prop="email" label="状态"></el-table-column>
      <el-table-column prop="status" label="创建时间"></el-table-column>
      <el-table-column prop="createTime" label="操作"></el-table-column>
    </el-table>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          userId: 0,
          username: "",
          password: "",
          email: "",
          mobile: "",
          status: 0,
          roleIdList: [0],
          createUserId: 0,
          createTime: "2019-04-22T14:04:52.544Z"
        }
      ],
      limit: 10,
      totalCount: 1,
      totalPage: 1
    };
  },
  created() {
    this.$axios
      .get("/sys/user/list", {
        params: {
          page: 1,
          limit: 10,
          sidx: "userId",
          order: "desc",
          username: ""
        }
      })
      .then(({ data }) => {
        const { code, message, page } = data;
        if (code === 0) {
          console.log(data);
          const { list, pageSize, totalCount, totalPage } = page;
          this.data = list;
          this.limit = pageSize;
          this.totalCount = totalCount;
          this.totalPage = totalPage;
        } else if (code === 500) {
          this.$notify.error({
            title: "管理列表获取失败",
            message: message
          });
        }
      });
  }
};
</script>

<style scoped>
.user-list {
  background-color: white;
  margin: 15px;
  padding: 15px;
}

.user-list .search {
  padding: 15px 0;
}
</style>