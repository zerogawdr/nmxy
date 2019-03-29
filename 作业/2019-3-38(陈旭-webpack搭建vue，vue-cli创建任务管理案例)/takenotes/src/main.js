import Vue from 'vue'
import App from './App.vue'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
