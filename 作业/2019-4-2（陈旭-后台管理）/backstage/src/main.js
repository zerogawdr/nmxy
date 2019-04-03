import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'; //引入lement-ui库
import 'element-ui/lib/theme-chalk/index.css'; //引入element-ui css文件
import './app.css'
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')