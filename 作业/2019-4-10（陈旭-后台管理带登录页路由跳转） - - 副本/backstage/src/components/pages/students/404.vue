<template  >
  <div class="errorMsg">
    <img src="@/assets/404.gif" alt>
    <el-button class="back" type="primary" @click="$router.go(-1)">返回上一页</el-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.errorMsg {
  width: 100%;
  height: 100%;
  position: relative;
}
.errorMsg img {
  width: inherit;
  height: inherit;
  display: block;
}
.errorMsg .back {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>