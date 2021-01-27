import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import bannerReducer from './reducers/banners'
import eventReducer from './reducers/events'
import organizersReducer from './reducers/organizers'

const rootReducer = combineReducers({
  bannerReducer,
  eventReducer,
  organizersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store