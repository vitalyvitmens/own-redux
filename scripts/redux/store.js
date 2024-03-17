//! Раскомментрий закомментированный код и закомментируй незакомментируемый код для использования собственного custom Redux вместо стандартного Redux
// import { productsReducer } from './productsReducer.js'

// class Store {
//   state = {}
//   subscribers = []

//   constructor(reducers) {
//     this.reducers = reducers
//   }

//   getState() {
//     return this.state
//   }

//   dispatch(action) {
//     for (const reducerName in this.reducers) {
//       const reducer = this.reducers[reducerName]
//       const newState = reducer(this.state[reducerName], action)
//       this.state[reducerName] = newState
//     }
//     this.subscribers.forEach((cb) => cb())
//   }

//   subscribe(cb) {
//     this.subscribers.push(cb)
//   }
// }

// export const store = new Store({
//   products: productsReducer,
// })

import {
  createStore,
  combineReducers,
} from '../../node_modules/redux/es/redux.mjs'
import { productsReducer } from './productsReducer.js'

export const store = new createStore(
  combineReducers({
    products: productsReducer,
  })
)
