import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.ts'
import './icons'
import { apolloProvider } from './plugins/apollo'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App)
}).$mount('#app')
