import Vue from 'vue'
import axios from './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
// let bus = new Vue();
// Vue.prototype.bus = bus;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')