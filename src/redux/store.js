import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { productReducer } from './productDucks'
import { authReducer } from './authDucks'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
})

const composeEnhancers = composeWithDevTools(
  applyMiddleware(thunk)
)

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers)
  return store
}