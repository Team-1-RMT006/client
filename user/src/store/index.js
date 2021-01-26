import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import wishlistReducer from './reducers/wishlistReducer'
import statusRegister from "./reducers/statusRegister"
import ticketReducer from './reducers/ticketReducer'
import eventReducer from './reducers/eventReducer'

const rootReducer = combineReducers({
  userReducer,
  wishlistReducer,
  statusRegister,
  ticketReducer,
  eventReducer

})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store