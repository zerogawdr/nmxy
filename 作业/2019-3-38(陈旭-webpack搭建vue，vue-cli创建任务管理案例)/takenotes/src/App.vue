<template>
  <div id="app">
    <div class='container'>
      <div class="well well-lg"><h1>任务管理系统</h1></div>
      <add-task @addMsg="addMsg" :info='info' ></add-task>
      <task-select v-model='filter'></task-select>
      <loading :loading='loading'></loading>
      <task-list @changestatus='changestatus' :tasklist='ListFilter' @deletTask="deletTask" ></task-list>
    </div>
  </div>
</template>

<script>

import TaskSelect from './components/TaskSelect'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import Loading from './components/loading'
export default {
  name: 'app',
  components: {
    TaskSelect,
    TaskList,
    AddTask,
    Loading
  },
  data() {
    return {
      filter:"all",
      tasklist:[],
      info:false,
      loading:true
      
    }
    
  },
  methods: {
    changestatus(i){
      // console.log(i)
      this.tasklist.forEach((item,index)=>{
        if(item==i){
          item.isFinish=!item.isFinish;
          if(item.status=="已完成"){
            item.status="未完成"
          }else{
            item.status="已完成"
          }   
        }
      })
    },
    deletTask(item){
        if(confirm("你确定删除吗")){
          this.tasklist=this.tasklist.filter(it=>it!=item)
        }
    },
    //添加新任务
    addMsg(newMsg){
      console.log(newMsg,this.tasklist)
        if(newMsg.trim()!=''){ //判断输入不为空不未空格               
              let msg={id:this.tasklist.length+1,name:newMsg,isFinish:false,status:"未完成"}
             this.tasklist.push(msg)      
             this.info=false   
        }else{
             this.info=true
            return
        }
    },
  },
  async created() {
    let result=await fetch('https://api.myjson.com/bins/y6a0m');
    result=await result.json();
    // console.log(result)
    this.tasklist=result
    this.loading=false
  },
  computed: {
    ListFilter(){
      if(this.filter==="all"){
        return this.tasklist
      }else if(this.filter==="finish"){
        return this.tasklist.filter(result=>result.isFinish)
      }else if(this.filter==="unfinish"){
        return this.tasklist.filter(result=>!result.isFinish)
      }
    }
  },
  
}
</script>

<style scope>

.well h1{
  text-align: center;
}

</style>
