<template>
  <!--   整体容器 -->
  <el-container class="out-container">
    <!-- 头部 -->
    <el-header class="site-header">
      <h1 class="logo">学生管理系统</h1>
    </el-header>
    <!-- 主体部分 -->
    <el-container class="site-bottom">
      <!-- 侧栏 -->
      <el-aside class="site-aside" width="200px">
        <el-menu
          class="site-mnue"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">学生列表</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-circle-plus"></i>
            <span slot="title">添加学生</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 中间内容展示区 -->
      <el-main>
        <slot></slot>
        <!-- vue slot插槽 放中间内容 -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.out-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.site-header {
  background: black;
  color: white;
  line-height: 60px;
}
.logo {
  color: rgb(228, 224, 224);
  margin: 0;
}
.site-bottom {
  overflow: auto;
}
.site-aside {
  background: #cccccc;
}
.site-mnue {
  height: 100%;
}
</style>