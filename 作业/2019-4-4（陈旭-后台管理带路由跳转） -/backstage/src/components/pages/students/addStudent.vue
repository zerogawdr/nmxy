<template>
  <div>
    <h1>添加学生</h1>
    <addOrdeit @submit="handelSubmit"></addOrdeit>
  </div>
</template>

<script>
import addOrdeit from "./components/addOredit";
export default {
  components: {
    addOrdeit
  },
  methods: {
    async handelSubmit(data) {
      // console.log(data);
      await fetch("/api/student/", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        }
      });
      console.log("添加数据成功");
      this.$router.push({ name: "studentsList" });
      this.$message({
        message: "恭喜你，添加学生成功访",
        type: "success",
        center: true
      });
    }
  }
};
</script>

<style scoped>
</style>