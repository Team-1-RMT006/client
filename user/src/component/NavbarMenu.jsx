import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { useHistory, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {} from '../store/action/eventAction'

export default function NavbarMenu() {
  const [local, setLocal] = useState(localStorage.getItem('access_token'))
  const temp = useSelector(state => state.userReducer.local)
  const history = useHistory()
  const dispatch = useDispatch()

  function handleLogout() {
    localStorage.clear()
    setLocal('')
    dispatch({ type: 'SET_LOADING_EVENT', payload: true })
    history.push('/')
  }

  useEffect(() => {
    setLocal(localStorage.getItem('access_token'))
  }, [temp])

  function handleLogin() {
    history.push('/login')
  }

  return (
    <Container fluid>
      <Navbar style={{ height: '50px', }}>
        <Navbar.Brand className='justify-content-end'>
          <NavLink exact to='/'>
            Creativent
          </NavLink>
        </Navbar.Brand>
        { local &&
        (
          <Nav className='mr-auto'>
            <NavLink to='/wishlist' className='mr-sm-2'>Wishlist</NavLink>
            <NavLink to='/history' className='mr-sm-2'>History Transaction</NavLink>
          </Nav>
        )}
        { local ?
        (
          <Button
            onClick={handleLogout}
            style={{
              width: '100px',
              height: '30px',
              color: 'whitesmoke',
              backgroundColor: '#F2C94C',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Sign Out
          </Button>
        ) :
        (
          <Button
            onClick={handleLogin}
            style={{
              width: '100px',
              height: '30px',
              color: 'whitesmoke',
              backgroundColor: '#F2C94C',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Sign In
          </Button>
        )}
      </Navbar>
    </Container>
  )
}