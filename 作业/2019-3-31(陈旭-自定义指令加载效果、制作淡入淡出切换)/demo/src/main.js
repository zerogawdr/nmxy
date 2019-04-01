import Vue from 'vue'
import App from './App.vue'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import load from './directives/load'
import upcase from './filters/Upcase'
Vue.filter('upcase',upcase)
Vue.config.productionTip = false
//全局注册指令
Vue.directive('load',load)
new Vue({
  render: h => h(App),
}).$mount('#app')
