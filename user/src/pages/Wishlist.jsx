import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import NavbarMenu from '../component/NavbarMenu'
import CardEvent from '../component/CardEvent'
import { useSelector } from 'react-redux'

export default function Wishlist() {
  const wishlists = useSelector(state => state.wishlistReducer.wishlistEvent)
  
  return (
    <Container fluid>
      <NavbarMenu />
      <div style={{ width: '1280px', height: '500px', backgroundColor: '#FFF5D5', alignItems: 'center', borderRadius: '5px', margin: '20px auto' }}>
        <div inline style={{ padding: '17px 35px' }}>
          <h1>Wishlist</h1>
        </div>
        <Row>
          <CardDeck style={{ margin: '0px 24px' }}>
            <Col lg={6} className='p-3'>
              { wishlists.map(wishlist => {
                return <CardEvent data={wishlist} key={wishlist.id} />
              })}
            </Col>
          </CardDeck>
        </Row>
      </div>
    </Container>
  )
}