<template>
    <ol class="breadcrumb">
        <li @click="$emit('input', 'all')"><a :class="{all:value==='all'}" href="#">全部任务</a></li>
        <li @click="$emit('input', 'finish')"><a :class="{finish:value==='finish'}" href="#">已完成</a></li>
        <li @click="$emit('input', 'unfinish')"><a :class="{unfinish:value==='unfinish'}" href="#">未完成</a></li>        
    </ol>
</template>

<script>
    export default {
        props:{
            value:{
                type:String,
                default:()=>"all"
            }
        }
    }
</script>

<style scoped>
.breadcrumb li a{
    text-decoration: none;
    color:black;
}
.breadcrumb li a.all{
    font-weight: bold;
    color: #5bc0de;   
}
.breadcrumb li a.finish{
    font-weight: bold; 
    color: #4cae4c 
}
.breadcrumb li a.unfinish{
    font-weight: bold; 
    color: #d43f3a;  
}
</style>