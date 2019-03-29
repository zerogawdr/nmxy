<template>
    <div v-show="loading" class="loading-wrap">
        <div  class="loading-circle">
            <div class="loading-circle-anim"></div>
        </div>
    </div>

</template>

<script>
    export default {
        props:{
            loading:Boolean
        }
    }
</script>

<style scoped>
   .loading-wrap {
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #eee;
        line-height: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .loading-circle {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
        box-sizing: border-box;
    }
    .loading-circle-anim {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        margin-top: -12px;
        border-radius: 50%;
        border: 2px solid #888;
        box-sizing: border-box;
        animation: loading 1.5s ease-out infinite;
    }
    .loading-circle-anim:after {
        content: " ";
        z-index: 1;
        position: absolute;
        background: #fff;
        top: -5px;
        left: 58%;
        bottom: 0;
        width: 50%;
        height: 30px;
        /* border: 1px red solid; */
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(720deg);
        }
    }

</style>