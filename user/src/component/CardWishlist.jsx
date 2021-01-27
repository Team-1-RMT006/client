import React, { useEffect, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
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
    console.log('nihhhh >>>>>', props.data.id)
    dispatch(removeWishlist(props.data.id))
  }

  return (
    <Container>
      <Card style={{ flexDirection: 'row' }}>
        <Card.Img style={{ width: '125px' }} src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
            <p>{props.data.location}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ width: '200px' }}>
          <Button
            onClick={() => goDetail(props.data.id)}
            style={{
              margin: '20px 0px 0px 34px',
              width: '100px',
              height: '30px',
              color: 'whitesmoke',
              backgroundColor: '#F2C94C',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Detail
        </Button>
        <Button
            onClick={handleRemoveWishlist}
            style={{
              margin: '8px 0px 12px 34px',
              width: '100px',
              height: '30px',
              color: 'whitesmoke',
              backgroundColor: '#F2C94C',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Remove from Wishlist
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  )
}