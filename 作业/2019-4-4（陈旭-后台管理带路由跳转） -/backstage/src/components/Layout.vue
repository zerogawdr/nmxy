<template>
  <!--   整体容器 -->
  <el-container class="out-container">
    <!-- 头部 -->
    <el-header class="site-header">
      <h1 class="logo" @click="$router.push({name:'home'})">学生管理系统</h1>
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
            <!-- <span slot="title">学生列表</span> -->
            <router-link :to="{name:'studentsList'}">学生列表</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-circle-plus"></i>
            <!-- <span slot="title">添加学生</span> -->
            <router-link :to="{name:'addstudent'}">添加学生</router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 中间内容展示区 -->
      <el-main>
        <!-- vue slot插槽 放中间内容 -->
        <transition name="list" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: scale(1.5, 1.5);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
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
  cursor: pointer;
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