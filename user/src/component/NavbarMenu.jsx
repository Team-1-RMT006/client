import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function NavbarMenu() {
  const history = useHistory()

  function handleLogout() {
    history.push('/login')
  }

  return (
    <Container fluid>
      <Navbar style={{ height: '50px', }}>
        <Navbar.Brand className='justify-content-end' href='#home'>Navbar</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link className='mr-sm-2' href='#home'>Wishlist</Nav.Link>
          <Nav.Link className='mr-sm-2' href='#features'>History Transaction</Nav.Link>
        </Nav>
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
      </Navbar>
    </Container>
  )
}