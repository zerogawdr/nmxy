<template>
    <div class="form-inline">
        <div class="form-group">
            <label for="">任务名：
                <input @keydown.enter.prevent='addMsg(newMsg)' v-model='newMsg' class="form-control" type="text" placeholder="请输入任务名称按回车确定">
            </label>
        </div>
        <span v-show="info" class="text-danger">任务名称不能为空~</span>                  
    </div>
</template>

<script>
    export default {
        props:{
            info:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                newMsg:''
            }
        },
        methods: {
            addMsg(newMsg){
                this.$emit("addMsg",newMsg)
                this.newMsg=''
            }
        },
    }
</script>

<style scoped>

</style>