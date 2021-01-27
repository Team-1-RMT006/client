import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, CardDeck } from 'react-bootstrap'
import CardWishlist from '../component/CardWishlist'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWishlist } from '../store/action/wishlistAction'


export default function Wishlist() {
  const wishlists = useSelector(state => state.wishlistReducer.wishlistEvent)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWishlist())
  }, [wishlists])

  return (
    <Container fluid>
      <div style={{ width: '1280px',padding: '10px', backgroundColor: '#FFF5D5', alignItems: 'center', borderRadius: '5px', margin: '20px auto' }}>
        <div inline style={{ padding: '17px 35px' }}>
          <h1><strong>Wishlist</strong></h1>
          <hr />
        </div>
        <Row>
          <CardDeck style={{ margin: '0px 24px' }}>
              {wishlists.map(wishlist => {
                return <CardWishlist data={wishlist} key={wishlist.id} />
              })}
          </CardDeck>
        </Row>
      </div>
    </Container>
  )
}