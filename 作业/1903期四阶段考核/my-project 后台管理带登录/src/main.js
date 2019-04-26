import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './https'
Vue.prototype.$axios = axios
Vue.use(ElementUI)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {


  // console.log(localStorage.getItem("token"), to.path)
  if (localStorage.getItem("token") == null && to.path !== '/login') {

    next({
      name: 'login'
    })
  } else if (localStorage.getItem("token") && to.path == '/login') {
    next({
      name: 'index'
    })
  } else {
    next()
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')