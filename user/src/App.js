import React, { createContext, useContext, useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login, Register, Wishlist, History, DetailEvent, Mainpage, LandingPage } from './pages/Index'
import store from './store'
import NavbarMenu from './component/NavbarMenu'
import './App.css'


export default function App() {
  const access_token = localStorage.getItem('access_token');

  if(access_token) {

  }

  return (
    <Provider store={store}>
      <NavbarMenu />
      <Switch>
        <Route exact path='/'>
          <Mainpage />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
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
        <Route path='/landing'>
          <LandingPage />
        </Route>
      </Switch>
    </Provider>
  )
}
