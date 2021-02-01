import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Button } from 'reactstrap'
import { useHistory, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import {} from 'reactstrap'

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
        <Navbar.Brand className='mr-auto'>
          <NavLink exact to='/' className='h6'>
            Creativent
          </NavLink>
        </Navbar.Brand>
        {local &&
          (
            <Nav className='mr-auto' style={{padding: '5px 0px'}}>
              {/* <NavLink to='/wishlist' className='mr-sm-2 h6'>Wishlist</NavLink> */}
              <NavLink to='/history' className='mr-sm-2 h6'>My Tickets</NavLink>
            </Nav>
          )}
        {local ?
          (
            <Button
              color='danger'
              onClick={handleLogout}
              style={{
                width: '100px',
                height: '30px',
                color: 'whitesmoke',
                border: 'none',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
              }}>
              Sign Out
            </Button>
          ) :
          (
            <Button
              color='danger'
              onClick={handleLogin}
              style={{
                width: '100px',
                height: '30px',
                color: 'whitesmoke',
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