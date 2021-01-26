import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import wishlistReducer from './reducers/wishlistReducer'
import statusRegister from "./reducers/statusRegister"

const rootReducer = combineReducers({
  userReducer,
  wishlistReducer,
  statusRegister
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store