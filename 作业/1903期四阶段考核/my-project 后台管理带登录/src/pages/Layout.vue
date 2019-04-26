<template>
  <!--   整体容器 -->
  <el-container class="out-container">
    <!-- 头部 -->
    <el-header height="80px" class="site-header">
      <h1 class="logo" @click="$router.push({name:'index'})">后台管理系统</h1>
      <el-dropdown @command="handleCommand" class="dropsite">
        <span class="adminMsg">
          <i class="el-icon-share"></i>
          {{user.username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="login_change">修改密码</el-dropdown-item>
          <el-dropdown-item command="login_out">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <!-- 主体部分 -->
    <el-container class="site-bottom">
      <!-- 侧栏 -->
      <el-aside class="site-aside" width="200px">
        <el-menu
          :router="true"
          class="site-mnue"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu v-for="item in menu" :key="item.menuId" :index="item.menuId+''">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item
              v-for="child in item.children"
              :key="child.meunuId"
              :index="child.meunuId+''"
              :route="'/admin/'+child.url"
            >{{child.name}}</el-menu-item>
          </el-submenu>
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
export default {
  data() {
    return {
      user: {},
      menuList: []
    };
  },
  methods: {
    handleCommand(command) {
      // console.log(command);
      if (command == "login_out") {
        localStorage.removeItem("token", "");
        this.$router.replace({ name: "login" });
      }
    }
  },
  beforeCreate() {
    this.$axios.get("/sys/user/info").then(({ data }) => {
      const { code, user } = data;
      // console.log(data);
      if (code === 0) {
        this.user = user;
      } else if (code === 401) {
        this.$message({
          showClose: true,
          message: data.msg,
          type: "warning",
          onClose: () => {
            localStorage.removeItem("token", "");
            this.$router.replace({ name: "login" });
          }
        });
      }
    });
    this.$axios.get("/sys/menu/list").then(({ data }) => {
      // console.log(data);
      this.menuList = data;
    });
  },
  computed: {
    menu() {
      function deep(arr, parentId) {
        if (!Array.isArray(arr)) return;
        return arr.filter(k => {
          if (k.parentId === parentId) {
            k.children = deep(arr, k.menuId);
            return true;
          }
        });
      }
      return deep(this.menuList, 0);
    }
  }
};
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
  background-color: rgb(84, 92, 100);
  color: white;
  line-height: 80px;
  display: flex;
  justify-content: space-between;
}
.site-header .dropsite {
  color: white;
}
.dropsite .adminMsg {
  cursor: pointer;
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
  background: transparent;
}
.site-mnue {
  height: 100%;
}
</style>