import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import ElementUI from 'element-ui'; //引入lement-ui库
import 'element-ui/lib/theme-chalk/index.css'; //引入element-ui css文件
import './app.css'
import routes from '../router/routes'
import Vuex from 'vuex'
import storeConfig from './stores/store'

Vue.use(ElementUI);
Vue.use(vueRouter)
Vue.use(Vuex)

//配置数据仓库
const store = new Vuex.Store(storeConfig)
//模拟数据变化
// store.commit('setData', "陈旭")
store.dispatch('course/reqCourse')
store.dispatch('class/reqCourse')
// store.dispatch('student/reqStudents', 2)


Vue.config.productionTip = false
const router = new vueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')