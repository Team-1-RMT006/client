import React, { useEffect, useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlist, removeWishlist } from '../store/action/wishlistAction'
import { Button } from 'reactstrap'

export default function CardEvent(props) {
  // const wishlists = useSelector(state => state.wishlistReducer.wishlistEvent)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const pic = useSelector(state => state.eventReducer.events)

  // useEffect(() => {
  //   dispatch(fetchWishlist())
  // }, [wishlists])
  function goDetail(id) {
    history.push(`event/${id}`)
  }

  function getData() {
    for (let i = 0; i < pic.length; i++) {
      // console.log(pic[i].id, props.data, 'asdadads')
      if (pic[i].id === props.data.EventId) {
        return pic[i]
      }
    }
  }

  function handleRemoveWishlist() {
    dispatch(removeWishlist(props.data.id))
  }
  return (
    <Col lg={6}>
      <Card style={{ width: '18rem', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Img src={getData().event_preview} />
        <Card.Body>
          <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <h6 ><strong>{getData().title}</strong></h6>
            <div>
              <span>{getData().date}</span>
            </div>
            <div>
              <span>{getData().time}</span>
            </div>
          </div>
          <hr /><br />
          <Button
            color='danger'
            onClick={() => goDetail(props.data.id)}
            style={{
              margin: 3,
              width: '180px',
              height: '30px',
              color: 'whitesmoke',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Pay Now
      </Button>
          <Button
            color='danger'
            onClick={handleRemoveWishlist}
            style={{
              margin: 3,
              width: '180px',
              height: '30px',
              color: 'whitesmoke',
              border: 'none',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
            Remove Wishlist
        </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}