<template>
    <table class="table table-striped  table-hover ">
        <tr>
            <th>序号</th>
            <th>名称</th>
            <th>状态</th>
            <th>操作</th>
        </tr>
        <tr @click.stop="changestatus(item)" :class="{danger:item.isFinish?false:true,success:item.isFinish?true:false}" v-for="(item,index) in tasklist" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.status}}</td>
            <td>
                <button @click.stop="deletTask(item)" type="button" class="btn btn-default">删除</button>
            </td>
        </tr>
        
        
    </table>
</template>

<script>
    export default {
        props:{
            tasklist:{
                type:Array,
                default:()=>[]
            }
        },
        methods: {
            changestatus(item){
                this.$emit("changestatus",item)
            },
            deletTask(item){
            this.$emit("deletTask",item)
            }
        },
        
    }
</script>

<style scoped>
    .danger{
        background-color:#f2dede;
    }
    .success{
        background-color: #dff0d8;
    }
    table  tr,table  tr th{
        text-align: center;
    }
    .table{
        position: relative;
    }
</style>