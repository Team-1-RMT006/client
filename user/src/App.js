import React, { createContext, useContext } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login, Register, Wishlist, History, DetailEvent, Mainpage } from './pages/Index'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path='/'>
          <Mainpage />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/history'>
          <History />
        </Route>
        <Route path='/wishlist'>
          <Wishlist />
        </Route>
        <Route path='/event/:id'>
          <DetailEvent />
        </Route>
      </Switch>
    </Provider>
  )
}
