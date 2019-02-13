import Vue from 'vue'
import App from './App.vue'
import './plugins/element'

Vue.config.productionTip = false
new Vue({
  // store,
  render: (h) => h(App)
}).$mount('#app')
