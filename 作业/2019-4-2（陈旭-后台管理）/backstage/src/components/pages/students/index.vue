<template>
  <Layout>
    <el-button @click="handleBack">回到第一页</el-button>
    <el-table v-loading="isLoading" :data="students" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="gender" label="性别" width="100"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="250"></el-table-column>
      <el-table-column prop="class.name" label="班级" width="200"></el-table-column>
      <el-table-column prop="course.name" label="科目" width="200"></el-table-column>
      <el-table-column width="100" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" @click="deleteStudent" size="mini" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :page-size="10"
        layout="total, prev, pager, next"
        @current-change="handlepagechange"
        :current-page.sync="countpage"
        :total="this.count"
      ></el-pagination>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
export default {
  components: {
    Layout
  },
  props: ["id"],
  data() {
    return {
      students: [],
      count: 0,
      isLoading: false,
      countpage: 1
    };
  },
  async created() {
    this.isLoading = true;
    let resp = await fetch("/api/student");
    resp = await resp.json();
    // console.log(resp);
    this.students = resp.data;
    this.count = resp.count;
    this.isLoading = false;
  },
  methods: {
    async handlepagechange(newpage) {
      // console.log(newpage);
      this.isLoading = true;
      let resp = await fetch("/api/student?page=" + newpage);
      resp = await resp.json();
      this.students = resp.data;
      this.isLoading = false;
    },
    async handleBack() {
      this.isLoading = true;
      this.countpage = 1;
      let resp = await fetch("/api/student?page=" + this.countpage);
      resp = await resp.json();
      this.students = resp.data;
      this.isLoading = false;
    },
    async deleteStudent() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          this.isLoading = true;
          let req = await fetch("/api/student/" + this.id, {
            headers: {
              "content-type": "application/json"
            },
            method: "delete"
          });
          let resp = await fetch("/api/student");
          resp = await resp.json();
          // console.log(resp);
          this.students = resp.data;
          this.count = resp.count;
          this.isLoading = false;
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>