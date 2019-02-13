import { createStore, combineReducers, applyMiddleware } from 'redux'

export function makeReduxStore(reducers: any, middlewares: any) {
  const reduces = combineReducers(reducers)
  let _middleware
  if (middlewares && Array.isArray(middlewares)) {
    _middleware = applyMiddleware(...middlewares)
  }
  const store = createStore(reduces, _middleware)
  return store
}
