import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import wishlistReducer from './reducers/wishlistReducer'
import ticketReducer from './reducers/ticketReducer'
import eventReducer from './reducers/eventReducer'

const rootReducer = combineReducers({
  userReducer,
  wishlistReducer,
  ticketReducer,
  eventReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store