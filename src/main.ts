import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './plugins/element'
import store from './store'
import '@/styles/index.scss' // global css

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
