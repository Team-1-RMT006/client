import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import bannerReducer from './reducers/banners'
import eventReducer from './reducers/events'


const rootReducer = combineReducers({
  bannerReducer,
  eventReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store