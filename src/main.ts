import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import { makeReduxStore } from './plugins/redux-entry'
import reduxPlugin from './plugins/redux-entry'
import reduce from './store'
import logger from 'redux-logger'
import { Store, AnyAction } from 'redux'

Vue.config.productionTip = false
Vue.use(reduxPlugin)
const store: Store<{}, AnyAction> = makeReduxStore(reduce, [logger])
new Vue({
  // store,
  render: (h) => h(App)
}).$mount('#app')
