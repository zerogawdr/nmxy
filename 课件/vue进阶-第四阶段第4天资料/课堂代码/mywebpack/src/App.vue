<template>
    <div>
        <h1>Hello My name is {{message}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message:"App.vue"
        }
    }
}
</script>

<style scoped>
h1{
    color:red;
}
</style>

