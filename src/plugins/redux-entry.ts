import { createStore, combineReducers, applyMiddleware } from 'redux'
import { VueConstructor } from 'vue'

export default {
  install: (Vue: VueConstructor) => {
    Vue.mixin({
      beforeCreate: reduxMixin
    })
  }
}

function reduxMixin(this: any) {
  if (this.$root.$options.store) {
    this.dispatch = (action: any) => {
      const getState = this.$root.$options.store.getState
      const dispatch = this.$root.$options.store.dispatch
      if (typeof action === 'function') {
        action(this.dispatch.bind(this), getState)
      } else {
        // const oldState = this.mapReduxState(getState());
        dispatch(action)
        const newState = this.mapReduxState(getState())
        // if ((this.shouldVueUpdate &&
        //   typeof this.shouldVueUpdate === 'function' &&
        //   this.shouldVueUpdate(newState, oldState)) || !this.shouldVueUpdate) {
        //   updateState.call(this);
        // } else {
        Object.keys(newState).forEach( (prop) => {
            this[prop] = newState[prop]
          })
        // }
      }
    }
    updateState.call(this)
  }
}

function updateState(this: any) {
  if (this.mapReduxState && typeof this.mapReduxState === 'function') {
    const state = this.mapReduxState(this.$root.$options.store.getState())
    Object.keys(state).forEach( (prop) => {
      this.$set(this, prop, state[prop])
    })
  }
}

export function makeReduxStore(reducers: any, middlewares: any) {
  const reduces = combineReducers(reducers)
  let _middleware
  if (middlewares && Array.isArray(middlewares)) {
    _middleware = applyMiddleware(...middlewares)
  }
  const store = createStore(reduces, _middleware)
  return store
}
