<template>
  <Layout>
    <h1>修改学生数据</h1>
    <addOrdeit :id="id" @submit="handelSubmit"></addOrdeit>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import addOrdeit from "./components/addOredit";
export default {
  components: {
    Layout,
    addOrdeit
  },
  data() {
    return {
      id: "5ca2cdad0c42e83fe0c707ff"
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
      console.log("修改学生信息成功访");
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