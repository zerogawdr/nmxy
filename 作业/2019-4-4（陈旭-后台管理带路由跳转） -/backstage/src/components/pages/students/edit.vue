<template>
  <div>
    <h1>修改学生数据</h1>
    <addOrdeit :id="id" @submit="handelSubmit"></addOrdeit>
  </div>
</template>

<script>
import addOrdeit from "./components/addOredit";
export default {
  components: {
    addOrdeit
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    async handelSubmit(data) {
      let req = await fetch("/api/student/" + this.id, {
        method: "put",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        }
      });
      // console.log("修改学生信息成功访");
      this.$router.push({
        name: "studentsList",
        params: { id: this.id }
      });
      this.$message({
        message: "恭喜你,修改学生信息成功访",
        type: "success",
        center: true
      });
    }
  }
};
</script>

<style scoped>
</style>