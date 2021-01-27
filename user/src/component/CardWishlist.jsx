import React, { useEffect, useState } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlist, removeWishlist } from '../store/action/wishlistAction'

export default function CardEvent(props) {
  // const wishlists = useSelector(state => state.wishlistReducer.wishlistEvent)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchWishlist())
  // }, [wishlists])

  function goDetail(id) {
    history.push(`event/${id}`)
  }

  function handleRemoveWishlist() {
    // console.log('nihhhh >>>>>', props.data.id)
    dispatch(removeWishlist(props.data.id))
  }

  return (
    <Col lg={6}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={'https://infomedhealth.com/wp-content/uploads/2018/11/download.png'} />
        <Card.Body>
          <h2><strong>{'Event title'}</strong></h2>
          <span>{'event date'}</span>
          <span>{'event time'}</span>
          <hr /><br />
          <Button
            onClick={() => goDetail(props.data.id)}
            style={{
              margin: 3,
              width: '180px',
              height: '30px',
              color: 'whitesmoke',
              backgroundColor: '#F2C94C',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Pay Now
      </Button>
          <Button
            onClick={handleRemoveWishlist}
            style={{
              margin: 3,
              width: '180px',
              height: '30px',
              color: 'whitesmoke',
              backgroundColor: '#F2C94C',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Remove from Wishlist
        </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}