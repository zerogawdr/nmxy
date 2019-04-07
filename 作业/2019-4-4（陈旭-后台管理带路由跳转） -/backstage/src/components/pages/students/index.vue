<template>
  <div>
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
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.row._id)"
            circle
          ></el-button>
          <el-button
            type="danger"
            @click="deleteStudent(scope.row._id)"
            size="mini"
            icon="el-icon-delete"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :page-size="10"
        layout="total, prev, pager, next"
        @current-change="handlepagechange"
        :current-page.sync="countpage"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    students() {
      return this.$store.state.student.data.students;
    },
    count() {
      return this.$store.state.student.data.count;
    },
    countpage: {
      get() {
        return this.$store.state.student.data.countpage;
      },
      set(val) {
        this.$store.dispatch("student/reqStudents", val);
      }
    },
    isLoading() {
      return this.$store.state.student.data.isLoading;
    }
  },
  // components: {},
  // // props: ["id"],
  // data() {
  //   return {
  //     students: [],
  //     count: 0,
  //     isLoading: false,
  //     countpage: 1
  //   };
  // },
  // async created() {
  //   this.isLoading = true;
  //   let resp = await fetch("/api/student");
  //   resp = await resp.json();
  //   // console.log(resp);
  //   this.students = resp.data;
  //   this.count = resp.count;
  //   this.isLoading = false;
  // },
  methods: {
    handleEdit(id) {
      // console.log(scop);
      this.$router.push({
        name: "editstudent",
        params: { id }
      });
    },
    async handlepagechange(newpage) {
      // console.log(newpage);
      // this.isLoading = true;
      // let resp = await fetch("/api/student?page=" + newpage);
      // resp = await resp.json();
      // this.students = resp.data;
      // this.isLoading = false;
    },
    handleBack() {
      // this.isLoading = true;
      // this.countpage = 1;
      // let resp = await fetch("/api/student?page=" + this.countpage);
      // resp = await resp.json();
      // this.students = resp.data;
      // this.isLoading = false;
      this.countpage = 1;
    },
    deleteStudent(id) {
      console.log(id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // this.isLoading = true;
          // let req = await fetch("/api/student/" + id, {
          //   headers: {
          //     "content-type": "application/json"
          //   },
          //   method: "delete"
          // });
          // let resp = await fetch("/api/student?page=" + this.countpage);
          // resp = await resp.json();
          // // console.log(resp);
          // this.students = resp.data;
          // this.count = resp.count;
          // this.isLoading = false;
          this.$store.dispatch("student/removeStudent", id);

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