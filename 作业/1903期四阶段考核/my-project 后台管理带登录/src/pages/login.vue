<template>
  <div class="container" :style="Bimg">
    <div class="login">
      <div class="header">
        <h1>欢迎使用后台管理系统</h1>
      </div>
      <el-form ref="loginForm" label-width="80px" :model="user" :rules="rules">
        <el-form-item label="账号" prop="username">
          <el-input autofocus placeholder="请输入你的账号" clearable v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="请输入你的密码"
            v-model="user.password"
            type="password"
            clearable
            auto-complete="new-password"
          ></el-input>
        </el-form-item>
        <el-form-item class="captcha" label="验证码" prop="captcha">
          <el-row type="flex" align="middle">
            <el-input
              placeholder="验证码"
              prefix-icon="el-icon-picture-outline"
              v-model="user.captcha"
            ></el-input>
            <el-button
              type="text"
              v-loading="captchaLoading"
              element-loading-text="刷新"
              element-loading-spinner="el-icon-loading"
              class="captchaBtn"
            >
              <img
                :src="'/api/captcha.jpg?uuid='+user.uuid"
                @load="captchaLoading=false"
                @click="resetUuid(),captchaLoading=true"
              >
            </el-button>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button :loading="isLoading" type="primary" @click="handleClick">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import uuid from "uuid";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        captcha: "",
        uuid: uuid()
      },
      isLoading: false,
      captchaLoading: false,
      Bimg: {
        backgroundImage: "url(" + require("@/assets/imgs/bac.jpg") + ")"
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "change" },
          { min: 2, max: 10, message: "长度必须2-10字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 2, max: 10, message: "长度必须2-10字符", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "请输入验证码", trigger: "change" },
          { min: 5, max: 5, message: "必须5位验证码", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.user.uuid = uuid();
    document.addEventListener("keydown", this.onKeydown);
  },
  destroyed() {
    document.removeEventListener("keydown", this.onKeydown);
  },
  methods: {
    handleClick() {
      this.isLoading = true;
      this.$refs.loginForm.validate(result => {
        this.isLoading = false;
        if (result) {
          this.isLoading = true;
          this.$axios.post("/sys/login", this.user).then(rep => {
            console.log(rep);
            const { code, msg, token } = rep.data;
            if (code === 500) {
              this.$message.error(msg);
              this.resetUuid();
            } else if (code === 0) {
              localStorage.setItem("token", token);
              this.$router.replace({ name: "index" });
            }
            this.isLoading = false;
          });
        }
      });
    },
    resetUuid() {
      this.user.uuid = uuid();
    },
    onKeydown(e) {
      if (e.keyCode === 13) {
        if (this.isLoading) return;
        this.handleClick();
      }
    }
  }
};
</script>

<style >
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  width: 500px;
}

.login h1 {
  text-align: center;
}
.login button {
  width: 100%;
  box-sizing: border-box;
}
.login .el-form-item__label {
  color: #409eff;
}
.captcha input {
  width: 140px;
}
.captcha img {
  width: 140px;
  height: 40px;
  vertical-align: middle;
  border-radius: 3px;
}
.captcha .captchaBtn {
  width: 140px;
  height: 40px;

  padding: 0;
}
</style>