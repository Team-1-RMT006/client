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
  console.log(props.data)

  function goDetail(id) {
    history.push(`event/${id}`)
  }

  function handleRemoveWishlist() {
    // console.log('nihhhh >>>>>', props.data.id)
    dispatch(removeWishlist(props.data.id))
  }

  return (
    <Container>
      <Card style={{ margin: 15 }}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title><strong>{props.data.title}</strong></Card.Title>
          <Card.Text>
          {props.data.location}
          </Card.Text>
          <Button
            onClick={() => goDetail(props.data.id)}
            style={{
              margin: '20px 0px 0px 34px',
              width: '150px',
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
              width: '150px',
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
    </Container>
  )
}