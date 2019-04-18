<template>
    <div class="container">
        <div class="login">
            <div class="header">
                <h1>欢迎使用校园管理系统</h1>
            </div>
            <el-form ref="loginForm" label-width="80px" :model="user" :rules="rules">
                <el-form-item label="账号" prop="loginId">
                    <el-input v-model="user.loginId"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="loginPwd">
                    <el-input v-model="user.loginPwd" type="password"  auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" @click="handleClick">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    loginId:"",
                    loginPwd:""
                },
                rules:{
                    loginId:[
                        {required:true, message:"请输入账号", trigger:"change"}
                    ],
                    loginPwd:[
                        {required:true, message:"请输入密码", trigger:"change"}
                    ]
                }
            }
        },
        methods: {
            async handleClick() {
                try{
                    await this.$refs.loginForm.validate();
                }   
                catch{}
            }
        },
    }
</script>

<style scoped>
.container{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login{
    width:500px;
}

.login h1{
    text-align: center;
}
.login button{
    width:100%;
    box-sizing: border-box;
}
</style>