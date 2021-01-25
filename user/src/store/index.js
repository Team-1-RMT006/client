import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import wishlistReducer from './reducers/wishlistReducer'

const rootReducer = combineReducers({
  userReducer,
  wishlistReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store